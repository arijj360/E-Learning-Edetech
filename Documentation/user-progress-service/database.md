# Database Documentation

## Overview

The User Progress Service uses **H2 in-memory database** for development and testing. This document provides detailed information about the database schema, relationships, and management.

## Table of Contents

1. [Database Configuration](#database-configuration)
2. [Schema Overview](#schema-overview)
3. [Table Specifications](#table-specifications)
4. [Relationships](#relationships)
5. [Indexes and Constraints](#indexes-and-constraints)
6. [Sample Queries](#sample-queries)
7. [Migration Strategy](#migration-strategy)
8. [Production Considerations](#production-considerations)

---

## Database Configuration

### H2 Configuration

```yaml
spring:
  datasource:
    url: jdbc:h2:mem:userprogressdb
    driver-class-name: org.h2.Driver
    username: sa
    password: 
    
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
    properties:
      hibernate:
        format_sql: true
        
  h2:
    console:
      enabled: true
      path: /h2-console
```

### Access H2 Console

1. Start the application
2. Navigate to: http://localhost:8081/h2-console
3. Use connection details:
   - **JDBC URL:** `jdbc:h2:mem:userprogressdb`
   - **Username:** `sa`
   - **Password:** *(leave empty)*

---

## Schema Overview

### Entity Relationship Diagram

See: [docs/diagrams/database-diagram.puml](diagrams/database-diagram.puml)

### Tables Summary

| Table | Records | Purpose |
|-------|---------|---------|
| **users** | User accounts | Stores student, teacher, and admin accounts |
| **establishments** | Educational institutions | Schools, universities, training centers |
| **groups** | Learning groups | Classes or study groups within establishments |
| **progress** | Performance tracking | Student progress and scores |
| **alerts** | Notifications | System notifications for users |
| **user_groups** | Join table | Many-to-many relationship between users and groups |

---

## Table Specifications

### 1. Users Table

**Table Name:** `users`

**Description:** Stores all user accounts including students, teachers, and administrators.

**Columns:**

| Column | Type | Null | Key | Default | Description |
|--------|------|------|-----|---------|-------------|
| `id` | BIGINT | NO | PK | AUTO | Unique user identifier |
| `email` | VARCHAR(255) | NO | UQ | - | User email address (login) |
| `password` | VARCHAR(255) | NO | - | - | User password (should be hashed) |
| `first_name` | VARCHAR(100) | NO | - | - | User's first name |
| `last_name` | VARCHAR(100) | NO | - | - | User's last name |
| `role` | VARCHAR(20) | NO | - | - | User role (STUDENT/TEACHER/ADMIN) |
| `target_cefr_level` | VARCHAR(10) | YES | - | NULL | Target proficiency level (A1-C2) |
| `establishment_id` | BIGINT | YES | FK | NULL | Reference to establishment |
| `created_at` | TIMESTAMP | NO | - | CURRENT_TIMESTAMP | Account creation time |
| `updated_at` | TIMESTAMP | NO | - | CURRENT_TIMESTAMP | Last update time |

**Constraints:**
- PRIMARY KEY: `id`
- UNIQUE: `email`
- FOREIGN KEY: `establishment_id` REFERENCES `establishments(id)`
- CHECK: `role` IN ('STUDENT', 'TEACHER', 'ADMIN')
- CHECK: `target_cefr_level` IN ('A1', 'A2', 'B1', 'B2', 'C1', 'C2') OR NULL

**Indexes:**
- `idx_users_email` on `email` (unique)
- `idx_users_role` on `role`
- `idx_users_establishment` on `establishment_id`

**DDL:**

```sql
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role VARCHAR(20) NOT NULL CHECK (role IN ('STUDENT', 'TEACHER', 'ADMIN')),
    target_cefr_level VARCHAR(10) CHECK (target_cefr_level IN ('A1', 'A2', 'B1', 'B2', 'C1', 'C2')),
    establishment_id BIGINT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (establishment_id) REFERENCES establishments(id) ON DELETE SET NULL
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_establishment ON users(establishment_id);
```

**Sample Data:**

```sql
INSERT INTO users (email, password, first_name, last_name, role, target_cefr_level, establishment_id) VALUES
('john.student@example.com', 'hashed_password', 'John', 'Doe', 'STUDENT', 'B2', 1),
('jane.teacher@example.com', 'hashed_password', 'Jane', 'Smith', 'TEACHER', NULL, 1),
('admin@example.com', 'hashed_password', 'Admin', 'User', 'ADMIN', NULL, NULL);
```

---

### 2. Establishments Table

**Table Name:** `establishments`

**Description:** Stores educational institutions (schools, universities, training centers).

**Columns:**

| Column | Type | Null | Key | Default | Description |
|--------|------|------|-----|---------|-------------|
| `id` | BIGINT | NO | PK | AUTO | Unique establishment identifier |
| `name` | VARCHAR(200) | NO | UQ | - | Institution name |
| `address` | VARCHAR(500) | YES | - | NULL | Physical address |
| `contact_email` | VARCHAR(255) | YES | - | NULL | Contact email address |
| `created_at` | TIMESTAMP | NO | - | CURRENT_TIMESTAMP | Creation timestamp |

**Constraints:**
- PRIMARY KEY: `id`
- UNIQUE: `name`

**Indexes:**
- `idx_establishments_name` on `name` (unique)

**DDL:**

```sql
CREATE TABLE establishments (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL UNIQUE,
    address VARCHAR(500),
    contact_email VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_establishments_name ON establishments(name);
```

**Sample Data:**

```sql
INSERT INTO establishments (name, address, contact_email) VALUES
('MIT Language Institute', '77 Massachusetts Ave, Cambridge, MA', 'contact@mit-lang.edu'),
('Oxford English Academy', 'High Street, Oxford, UK', 'info@oxford-english.ac.uk');
```

---

### 3. Groups Table

**Table Name:** `groups`

**Description:** Stores learning groups (classes, study groups) within establishments.

**Columns:**

| Column | Type | Null | Key | Default | Description |
|--------|------|------|-----|---------|-------------|
| `id` | BIGINT | NO | PK | AUTO | Unique group identifier |
| `name` | VARCHAR(200) | NO | - | - | Group name |
| `establishment_id` | BIGINT | NO | FK | - | Reference to establishment |
| `created_at` | TIMESTAMP | NO | - | CURRENT_TIMESTAMP | Creation timestamp |

**Constraints:**
- PRIMARY KEY: `id`
- FOREIGN KEY: `establishment_id` REFERENCES `establishments(id)`

**Indexes:**
- `idx_groups_establishment` on `establishment_id`
- `idx_groups_name` on `name`

**DDL:**

```sql
CREATE TABLE groups (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    establishment_id BIGINT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (establishment_id) REFERENCES establishments(id) ON DELETE CASCADE
);

CREATE INDEX idx_groups_establishment ON groups(establishment_id);
CREATE INDEX idx_groups_name ON groups(name);
```

**Sample Data:**

```sql
INSERT INTO groups (name, establishment_id) VALUES
('Advanced English B2', 1),
('Business English C1', 1),
('Beginner A1', 2);
```

---

### 4. Progress Table

**Table Name:** `progress`

**Description:** Tracks user performance and progress over time.

**Columns:**

| Column | Type | Null | Key | Default | Description |
|--------|------|------|-----|---------|-------------|
| `id` | BIGINT | NO | PK | AUTO | Unique progress identifier |
| `user_id` | BIGINT | NO | FK | - | Reference to user |
| `group_id` | BIGINT | YES | FK | NULL | Reference to group (optional) |
| `current_cefr_level` | VARCHAR(10) | NO | - | - | Current proficiency level |
| `exercises_completed` | INT | NO | - | 0 | Number of completed exercises |
| `total_score` | DOUBLE | NO | - | 0.0 | Cumulative score |
| `last_activity` | TIMESTAMP | YES | - | NULL | Last activity timestamp |
| `created_at` | TIMESTAMP | NO | - | CURRENT_TIMESTAMP | Creation timestamp |
| `updated_at` | TIMESTAMP | NO | - | CURRENT_TIMESTAMP | Last update timestamp |

**Constraints:**
- PRIMARY KEY: `id`
- FOREIGN KEY: `user_id` REFERENCES `users(id)`
- FOREIGN KEY: `group_id` REFERENCES `groups(id)`
- CHECK: `current_cefr_level` IN ('A1', 'A2', 'B1', 'B2', 'C1', 'C2')
- CHECK: `exercises_completed >= 0`
- CHECK: `total_score >= 0.0`
- UNIQUE: (`user_id`, `group_id`)

**Indexes:**
- `idx_progress_user` on `user_id`
- `idx_progress_group` on `group_id`
- `idx_progress_user_group` on (`user_id`, `group_id`) (unique)

**DDL:**

```sql
CREATE TABLE progress (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    group_id BIGINT,
    current_cefr_level VARCHAR(10) NOT NULL CHECK (current_cefr_level IN ('A1', 'A2', 'B1', 'B2', 'C1', 'C2')),
    exercises_completed INT NOT NULL DEFAULT 0 CHECK (exercises_completed >= 0),
    total_score DOUBLE NOT NULL DEFAULT 0.0 CHECK (total_score >= 0.0),
    last_activity TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (group_id) REFERENCES groups(id) ON DELETE CASCADE,
    UNIQUE KEY uk_user_group (user_id, group_id)
);

CREATE INDEX idx_progress_user ON progress(user_id);
CREATE INDEX idx_progress_group ON progress(group_id);
```

**Sample Data:**

```sql
INSERT INTO progress (user_id, group_id, current_cefr_level, exercises_completed, total_score, last_activity) VALUES
(1, 1, 'B1', 15, 1275.5, '2024-11-11 14:30:00'),
(1, 2, 'B2', 8, 720.0, '2024-11-10 09:15:00');
```

---

### 5. Alerts Table

**Table Name:** `alerts`

**Description:** Stores system notifications and alerts for users.

**Columns:**

| Column | Type | Null | Key | Default | Description |
|--------|------|------|-----|---------|-------------|
| `id` | BIGINT | NO | PK | AUTO | Unique alert identifier |
| `user_id` | BIGINT | NO | FK | - | Target user |
| `type` | VARCHAR(50) | NO | - | - | Alert type |
| `message` | TEXT | NO | - | - | Alert message content |
| `is_read` | BOOLEAN | NO | - | FALSE | Read status |
| `created_at` | TIMESTAMP | NO | - | CURRENT_TIMESTAMP | Creation timestamp |

**Constraints:**
- PRIMARY KEY: `id`
- FOREIGN KEY: `user_id` REFERENCES `users(id)`
- CHECK: `type` IN ('ACHIEVEMENT', 'REMINDER', 'WARNING', 'INFO')

**Indexes:**
- `idx_alerts_user` on `user_id`
- `idx_alerts_is_read` on `is_read`
- `idx_alerts_user_read` on (`user_id`, `is_read`)

**DDL:**

```sql
CREATE TABLE alerts (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    type VARCHAR(50) NOT NULL CHECK (type IN ('ACHIEVEMENT', 'REMINDER', 'WARNING', 'INFO')),
    message TEXT NOT NULL,
    is_read BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX idx_alerts_user ON alerts(user_id);
CREATE INDEX idx_alerts_is_read ON alerts(is_read);
CREATE INDEX idx_alerts_user_read ON alerts(user_id, is_read);
```

**Sample Data:**

```sql
INSERT INTO alerts (user_id, type, message, is_read) VALUES
(1, 'ACHIEVEMENT', 'Congratulations! You have completed 10 exercises!', FALSE),
(1, 'INFO', 'New exercises available for B1 level.', TRUE);
```

---

### 6. User_Groups Table (Join Table)

**Table Name:** `user_groups`

**Description:** Many-to-many relationship between users and groups.

**Columns:**

| Column | Type | Null | Key | Default | Description |
|--------|------|------|-----|---------|-------------|
| `user_id` | BIGINT | NO | FK, PK | - | Reference to user |
| `group_id` | BIGINT | NO | FK, PK | - | Reference to group |

**Constraints:**
- PRIMARY KEY: (`user_id`, `group_id`)
- FOREIGN KEY: `user_id` REFERENCES `users(id)`
- FOREIGN KEY: `group_id` REFERENCES `groups(id)`

**Indexes:**
- `idx_user_groups_user` on `user_id`
- `idx_user_groups_group` on `group_id`

**DDL:**

```sql
CREATE TABLE user_groups (
    user_id BIGINT NOT NULL,
    group_id BIGINT NOT NULL,
    PRIMARY KEY (user_id, group_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (group_id) REFERENCES groups(id) ON DELETE CASCADE
);

CREATE INDEX idx_user_groups_user ON user_groups(user_id);
CREATE INDEX idx_user_groups_group ON user_groups(group_id);
```

**Sample Data:**

```sql
INSERT INTO user_groups (user_id, group_id) VALUES
(1, 1),
(1, 2),
(2, 1);
```

---

## Relationships

### Entity Relationship Summary

```
Establishment 1 ──── ∞ User
Establishment 1 ──── ∞ Group
User ∞ ──── ∞ Group (via user_groups)
User 1 ──── ∞ Progress
User 1 ──── ∞ Alert
Group 1 ──── ∞ Progress
```

### Cascade Behaviors

| Relationship | On Delete Parent | On Update Parent |
|--------------|------------------|------------------|
| Establishment → User | SET NULL | CASCADE |
| Establishment → Group | CASCADE | CASCADE |
| User → Progress | CASCADE | CASCADE |
| User → Alert | CASCADE | CASCADE |
| User ↔ Group | CASCADE | CASCADE |
| Group → Progress | CASCADE | CASCADE |

---

## Indexes and Constraints

### Performance Indexes

**Recommended Additional Indexes:**

```sql
-- Composite index for progress queries
CREATE INDEX idx_progress_user_level ON progress(user_id, current_cefr_level);

-- Index for alert queries by user and read status
CREATE INDEX idx_alerts_user_unread ON alerts(user_id, is_read) WHERE is_read = FALSE;

-- Full-text search on group names (PostgreSQL)
CREATE INDEX idx_groups_name_fts ON groups USING gin(to_tsvector('english', name));

-- Index for user searches
CREATE INDEX idx_users_name ON users(last_name, first_name);
```

### Constraint Validation

**Email Format Validation** (Database-level):

```sql
ALTER TABLE users ADD CONSTRAINT chk_email_format 
CHECK (email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$');
```

---

## Sample Queries

### 1. Get All Students in a Group

```sql
SELECT u.id, u.email, u.first_name, u.last_name, u.target_cefr_level
FROM users u
JOIN user_groups ug ON u.id = ug.user_id
WHERE ug.group_id = 1
  AND u.role = 'STUDENT'
ORDER BY u.last_name, u.first_name;
```

### 2. Get User Progress Summary

```sql
SELECT 
    u.id,
    u.first_name,
    u.last_name,
    u.target_cefr_level,
    COUNT(p.id) AS groups_enrolled,
    SUM(p.exercises_completed) AS total_exercises,
    ROUND(AVG(p.total_score / NULLIF(p.exercises_completed, 0)), 2) AS avg_score,
    MAX(p.current_cefr_level) AS highest_level
FROM users u
LEFT JOIN progress p ON u.id = p.user_id
WHERE u.role = 'STUDENT'
GROUP BY u.id, u.first_name, u.last_name, u.target_cefr_level
ORDER BY total_exercises DESC;
```

### 3. Get Unread Alerts for User

```sql
SELECT a.id, a.type, a.message, a.created_at
FROM alerts a
WHERE a.user_id = 1
  AND a.is_read = FALSE
ORDER BY a.created_at DESC;
```

### 4. Get Top Performers in a Group

```sql
SELECT 
    u.first_name,
    u.last_name,
    p.current_cefr_level,
    p.exercises_completed,
    p.total_score,
    ROUND(p.total_score / NULLIF(p.exercises_completed, 0), 2) AS avg_score
FROM progress p
JOIN users u ON p.user_id = u.id
WHERE p.group_id = 1
ORDER BY avg_score DESC, p.exercises_completed DESC
LIMIT 10;
```

### 5. Get Group Statistics

```sql
SELECT 
    g.id,
    g.name,
    e.name AS establishment_name,
    COUNT(DISTINCT ug.user_id) AS member_count,
    COUNT(p.id) AS progress_records,
    ROUND(AVG(p.total_score / NULLIF(p.exercises_completed, 0)), 2) AS group_avg_score
FROM groups g
JOIN establishments e ON g.establishment_id = e.id
LEFT JOIN user_groups ug ON g.id = ug.group_id
LEFT JOIN progress p ON g.id = p.group_id
GROUP BY g.id, g.name, e.name
ORDER BY member_count DESC;
```

---

## Migration Strategy

### From H2 to PostgreSQL

**Step 1: Add PostgreSQL Dependency**

```gradle
dependencies {
    implementation 'org.postgresql:postgresql:42.7.1'
}
```

**Step 2: Update Application Configuration**

```yaml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/userprogressdb
    username: postgres
    password: ${DB_PASSWORD}
    driver-class-name: org.postgresql.Driver
    
  jpa:
    hibernate:
      ddl-auto: validate  # Use Flyway instead
    database-platform: org.hibernate.dialect.PostgreSQLDialect
```

**Step 3: Add Flyway Migration**

```gradle
dependencies {
    implementation 'org.flywaydb:flyway-core:10.0.0'
}
```

**Step 4: Create Migration Scripts**

Create: `src/main/resources/db/migration/V1__initial_schema.sql`

```sql
-- Copy DDL statements from above
-- Add all CREATE TABLE statements
```

---

## Production Considerations

### 1. Database Choice

**Recommended:** PostgreSQL 15+ or MySQL 8.0+

**Reasons:**
- Persistent storage
- ACID compliance
- Advanced indexing (GIN, GiST for PostgreSQL)
- Full-text search
- JSON support
- Better scalability

### 2. Connection Pooling

```yaml
spring:
  datasource:
    hikari:
      maximum-pool-size: 10
      minimum-idle: 5
      connection-timeout: 30000
      idle-timeout: 600000
      max-lifetime: 1800000
```

### 3. Backup Strategy

**Automated Backups:**
- Daily full backups
- Hourly incremental backups
- 30-day retention policy
- Off-site backup storage

**Tools:**
- PostgreSQL: `pg_dump`, `pg_basebackup`
- AWS RDS: Automated snapshots

### 4. Security

- Enable SSL/TLS connections
- Use connection string encryption
- Store credentials in environment variables or secrets manager
- Implement row-level security (PostgreSQL)
- Regular security audits

### 5. Monitoring

**Key Metrics:**
- Connection pool utilization
- Query performance (slow query log)
- Table sizes and growth
- Index usage statistics
- Transaction rates

**Tools:**
- PostgreSQL: pg_stat_statements, pgAdmin
- MySQL: Performance Schema, MySQL Workbench
- Grafana + Prometheus for visualization

---

## References

- [H2 Database Documentation](https://www.h2database.com/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Hibernate ORM Documentation](https://hibernate.org/orm/documentation/)
- [Flyway Migration Tool](https://flywaydb.org/documentation/)

---

**Document Version:** 1.0  
**Last Updated:** November 11, 2026
