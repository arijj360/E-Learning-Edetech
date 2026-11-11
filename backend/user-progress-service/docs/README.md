# User Progress Service - Technical Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Architecture](#architecture)
3. [Technologies](#technologies)
4. [Project Structure](#project-structure)
5. [API Documentation](#api-documentation)
6. [Database Documentation](#database-documentation)
7. [Authentication and Security](#authentication-and-security)
8. [Installation and Configuration](#installation-and-configuration)
9. [Error Handling](#error-handling)
10. [Testing](#testing)
11. [Integration](#integration)

---

## 1. Introduction

### Service Name
**user-progress-service** - User Progress Management Microservice

### Purpose and Responsibilities
The User Progress Service is a core microservice within the **SOAWEB-React** platform, responsible for managing:
- **User Management**: Users with different roles (Learners, Trainers, Admins)
- **Establishment Management**: Educational institutions and organizations
- **Group Management**: Learning groups with trainers and members
- **Progress Tracking**: Learner progress, CEFR levels, scores, and completed exercises
- **Alert System**: Notifications for inactivity, achievements, level changes, and system messages

### Main Features
- ✅ **CRUD operations** for Users, Establishments, Groups, Progress, and Alerts
- ✅ **Role-based user filtering** (LEARNER, TRAINER, ESTABLISHMENT_ADMIN, SUPER_ADMIN)
- ✅ **CEFR level management** (A1, A2, B1, B2, C1, C2) for language proficiency tracking
- ✅ **Group member management** with trainer assignment
- ✅ **Progress tracking** with scores and exercise completion
- ✅ **Alert management** with read/unread status
- ✅ **Bean Validation** for request data integrity
- ✅ **OpenAPI/Swagger documentation** for API exploration
- ✅ **H2 in-memory database** for development and testing
- ✅ **CORS support** for frontend integration

### Role within SOAWEB-React Architecture
This service is one of 7 microservices in the oral expression training and evaluation platform, specifically handling:
- User account lifecycle management
- Educational organization structure (establishments and groups)
- Learner progress monitoring and reporting
- Alert and notification generation for stakeholders

**Target Users**: Learners, Trainers, Establishment Administrators, and System Administrators

---

## 2. Architecture

### Service Architecture
The User Progress Service follows a **layered architecture** pattern:

```
┌────────────────────────────────────────────────────────┐
│                   Presentation Layer                    │
│  Controllers (REST API) + DTOs + OpenAPI Documentation │
└─────────────────────┬──────────────────────────────────┘
                      │
┌─────────────────────▼──────────────────────────────────┐
│                    Service Layer                        │
│  Business Logic + Validation + Transactions            │
└─────────────────────┬──────────────────────────────────┘
                      │
┌─────────────────────▼──────────────────────────────────┐
│                  Persistence Layer                      │
│  Repositories (Spring Data JPA) + Entities             │
└─────────────────────┬──────────────────────────────────┘
                      │
┌─────────────────────▼──────────────────────────────────┐
│                    H2 Database                          │
│  In-Memory Relational Database (Development)           │
└────────────────────────────────────────────────────────┘
```

### Internal Components

1. **Controllers** (5 controllers, 24 endpoints)
   - `UserController`: User management (6 endpoints)
   - `EstablishmentController`: Establishment management (5 endpoints)
   - `GroupController`: Group and member management (7 endpoints)
   - `ProgressController`: Progress tracking (3 endpoints)
   - `AlertController`: Alert management (3 endpoints)

2. **Services** (5 service classes)
   - Business logic implementation
   - Transaction management
   - DTO-Entity mapping
   - Cross-entity operations

3. **Repositories** (5 repository interfaces)
   - Spring Data JPA repositories
   - Custom query methods
   - CRUD operations

4. **Entities** (5 entities + 3 enums)
   - JPA entities with relationships
   - Automatic timestamp management
   - JSON serialization handling

5. **DTOs** (11 DTO classes)
   - Request DTOs with validation
   - Response DTOs (entities never exposed directly)

6. **Exception Handling**
   - Global exception handler
   - Custom exceptions
   - Standardized error responses

### Dependencies on Other Services
**Current Implementation**: Standalone service with no direct dependencies on other microservices.

**Future Integration Points**:
- Authentication Service (for JWT validation)
- Notification Service (for alert delivery)
- Exercise Service (for completed exercises tracking)
- Evaluation Service (for score synchronization)

### Communication Flow

```
Client Request → WebConfig (CORS) → Controller → Service → Repository → Database
                                        ↓                        ↓
                                   Validation              Transaction
                                        ↓                        ↓
                                   DTO Mapping            Entity Operations
                                        ↓                        ↓
                                   Response DTO ← ← ← ← ← Result
```

### Request Lifecycle

1. **HTTP Request** arrives at the controller
2. **Bean Validation** validates request DTOs (@Valid)
3. **Service Layer** executes business logic
4. **Repository Layer** performs database operations
5. **DTO Mapping** converts entities to response DTOs
6. **HTTP Response** returns JSON to the client
7. **Exception Handling** catches errors and returns standardized error responses

---

## 3. Technologies

### Core Framework
- **Java 17** - Programming language (LTS version)
- **Spring Boot 4.1.2** - Application framework
- **Spring Framework 7.0.10** - Core Spring framework
- **Gradle 9.8.2** - Build automation tool

### Spring Ecosystem
- **Spring Web** - RESTful web services
- **Spring Data JPA** - Data access layer
- **Spring Validation** - Bean validation (Jakarta Validation)
- **Hibernate ORM 7.4.13** - Object-relational mapping

### Database
- **H2 Database 2.4.240** - In-memory relational database
- **JDBC Driver** - Database connectivity

### API Documentation
- **SpringDoc OpenAPI 3.0.3** - OpenAPI 3.0 specification
- **Swagger UI** - Interactive API documentation

### Development Tools
- **Lombok** - Boilerplate code reduction (@Data, @RequiredArgsConstructor, etc.)
- **Jakarta Persistence API 3.2.0** - JPA specification
- **Jakarta Validation API 3.1.1** - Bean validation specification

### Testing
- **JUnit Platform** - Test execution framework
- **Spring Boot Test** - Integration testing support

### Build Dependencies
```gradle
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web'
    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
    implementation 'org.springframework.boot:spring-boot-starter-validation'
    implementation 'org.springdoc:springdoc-openapi-starter-webmvc-ui:3.0.3'
    implementation 'org.springframework.boot:spring-boot-h2console'
    
    compileOnly 'org.projectlombok:lombok'
    annotationProcessor 'org.projectlombok:lombok'
    
    runtimeOnly 'com.h2database:h2'
    
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
}
```

---

## 4. Project Structure

```
user-progress-service/
├── build.gradle                      # Gradle build configuration
├── settings.gradle                   # Gradle settings
├── gradlew / gradlew.bat            # Gradle wrapper scripts
├── README.md                         # Project documentation
├── QUICKSTART.md                     # Quick start guide
│
├── src/main/
│   ├── java/com/oralis/userprogress/
│   │   ├── UserProgressServiceApplication.java    # Main application entry point
│   │   │
│   │   ├── config/                   # Configuration classes
│   │   │   ├── DataLoader.java      # Sample data initialization
│   │   │   ├── OpenApiConfig.java   # Swagger/OpenAPI configuration
│   │   │   └── WebConfig.java       # CORS and web configuration
│   │   │
│   │   ├── controller/               # REST controllers (Presentation Layer)
│   │   │   ├── UserController.java              # 6 endpoints
│   │   │   ├── EstablishmentController.java     # 5 endpoints
│   │   │   ├── GroupController.java             # 7 endpoints
│   │   │   ├── ProgressController.java          # 3 endpoints
│   │   │   └── AlertController.java             # 3 endpoints
│   │   │
│   │   ├── dto/                      # Data Transfer Objects
│   │   │   ├── UserRequest.java / UserResponse.java
│   │   │   ├── EstablishmentRequest.java / EstablishmentResponse.java
│   │   │   ├── GroupRequest.java / GroupResponse.java
│   │   │   ├── ProgressRequest.java / ProgressResponse.java
│   │   │   ├── AlertRequest.java / AlertResponse.java
│   │   │   └── TargetLevelRequest.java
│   │   │
│   │   ├── entity/                   # JPA Entities (Persistence Layer)
│   │   │   ├── User.java            # User entity
│   │   │   ├── Establishment.java   # Establishment entity
│   │   │   ├── Group.java           # Group entity
│   │   │   ├── Progress.java        # Progress entity
│   │   │   ├── Alert.java           # Alert entity
│   │   │   ├── Role.java            # User role enumeration
│   │   │   ├── CefrLevel.java       # CEFR level enumeration
│   │   │   └── AlertType.java       # Alert type enumeration
│   │   │
│   │   ├── service/                  # Business Logic Layer
│   │   │   ├── UserService.java
│   │   │   ├── EstablishmentService.java
│   │   │   ├── GroupService.java
│   │   │   ├── ProgressService.java
│   │   │   └── AlertService.java
│   │   │
│   │   ├── repository/               # Data Access Layer
│   │   │   ├── UserRepository.java
│   │   │   ├── EstablishmentRepository.java
│   │   │   ├── GroupRepository.java
│   │   │   ├── ProgressRepository.java
│   │   │   └── AlertRepository.java
│   │   │
│   │   └── exception/                # Exception Handling
│   │       ├── GlobalExceptionHandler.java
│   │       ├── ResourceNotFoundException.java
│   │       ├── DuplicateResourceException.java
│   │       └── ErrorResponse.java
│   │
│   └── resources/
│       ├── application.yml           # Application configuration
│       ├── static/                   # Static resources (empty)
│       └── templates/                # Templates (empty)
│
└── src/test/
    └── java/com/oralis/userprogress/
        └── UserProgressServiceApplicationTests.java
```

### Key Files and Their Responsibilities

| File | Purpose |
|------|---------|
| `UserProgressServiceApplication.java` | Spring Boot application entry point |
| `WebConfig.java` | CORS configuration for http://localhost:5173 |
| `OpenApiConfig.java` | Swagger UI and OpenAPI documentation setup |
| `DataLoader.java` | Loads sample data on application startup (9 users, 2 groups, etc.) |
| `GlobalExceptionHandler.java` | Centralized exception handling for consistent error responses |
| `application.yml` | Database, server, and Spring configuration |

---

## 5. API Documentation

**Base URL**: `http://localhost:8081/api`

**Interactive Documentation**: `http://localhost:8081/swagger-ui.html`

**OpenAPI Spec**: `http://localhost:8081/v3/api-docs`

### 5.1 Users API

#### 5.1.1 Get All Users

**GET** `/api/users`

Retrieve all users, optionally filtered by role.

**Authentication**: None (currently not implemented)

**Query Parameters**:
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `role` | String (enum) | No | Filter by role: `LEARNER`, `TRAINER`, `ESTABLISHMENT_ADMIN`, `SUPER_ADMIN` |

**Success Response** (200 OK):
```json
[
  {
    "id": 1,
    "firstName": "Jean",
    "lastName": "Dupont",
    "email": "jean.dupont@oralis.com",
    "role": "SUPER_ADMIN",
    "establishmentId": 1,
    "establishmentName": "Language Academy Paris",
    "groupId": null,
    "groupName": null,
    "targetLevel": "C2",
    "createdAt": "2026-11-11T15:31:17.826637"
  }
]
```

**Example Request**:
```bash
# Get all users
curl -X GET "http://localhost:8081/api/users"

# Get only learners
curl -X GET "http://localhost:8081/api/users?role=LEARNER"
```

---

#### 5.1.2 Get User by ID

**GET** `/api/users/{id}`

Retrieve a specific user by their ID.

**Path Parameters**:
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | Long | Yes | User ID |

**Success Response** (200 OK):
```json
{
  "id": 5,
  "firstName": "Alice",
  "lastName": "Lefebvre",
  "email": "alice.lefebvre@student.com",
  "role": "LEARNER",
  "establishmentId": 1,
  "establishmentName": "Language Academy Paris",
  "groupId": 1,
  "groupName": "English Beginners A1",
  "targetLevel": "A2",
  "createdAt": "2026-11-11T15:31:17.858820"
}
```

**Error Responses**:
- **404 Not Found**: User not found

**Example Request**:
```bash
curl -X GET "http://localhost:8081/api/users/5"
```

---

#### 5.1.3 Create User

**POST** `/api/users`

Create a new user.

**Request Headers**:
```
Content-Type: application/json
```

**Request Body**:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "password": "securePassword123",
  "role": "LEARNER",
  "establishmentId": 1,
  "groupId": null,
  "targetLevel": "B1"
}
```

**Validation Rules**:
| Field | Rules |
|-------|-------|
| `firstName` | Required, not blank |
| `lastName` | Required, not blank |
| `email` | Required, valid email format, unique |
| `password` | Required, not blank |
| `role` | Required, must be valid enum value |
| `establishmentId` | Optional, must exist if provided |
| `groupId` | Optional, must exist if provided |
| `targetLevel` | Optional, must be valid CEFR level |

**Success Response** (201 Created):
```json
{
  "id": 10,
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "role": "LEARNER",
  "establishmentId": 1,
  "establishmentName": "Language Academy Paris",
  "groupId": null,
  "groupName": null,
  "targetLevel": "B1",
  "createdAt": "2026-11-11T16:00:00.000000"
}
```

**Error Responses**:
- **400 Bad Request**: Validation failed (email format, missing required fields)
- **404 Not Found**: Establishment or group not found
- **409 Conflict**: Email already exists

**Example Request**:
```bash
curl -X POST "http://localhost:8081/api/users" \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "password": "securePassword123",
    "role": "LEARNER",
    "establishmentId": 1,
    "targetLevel": "B1"
  }'
```

---

#### 5.1.4 Update User

**PUT** `/api/users/{id}`

Update an existing user.

**Path Parameters**:
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | Long | Yes | User ID |

**Request Body**: Same as Create User

**Success Response** (200 OK): Same structure as Get User by ID

**Error Responses**:
- **400 Bad Request**: Validation failed
- **404 Not Found**: User, establishment, or group not found
- **409 Conflict**: Email already exists (if changed)

**Example Request**:
```bash
curl -X PUT "http://localhost:8081/api/users/5" \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Alice",
    "lastName": "Lefebvre",
    "email": "alice.lefebvre@student.com",
    "password": "newPassword123",
    "role": "LEARNER",
    "establishmentId": 1,
    "groupId": 1,
    "targetLevel": "B1"
  }'
```

---

#### 5.1.5 Update Target Level

**PUT** `/api/users/{id}/target-level`

Update the target CEFR level for a user.

**Path Parameters**:
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | Long | Yes | User ID |

**Request Body**:
```json
{
  "targetLevel": "B2"
}
```

**Validation Rules**:
| Field | Rules |
|-------|-------|
| `targetLevel` | Required, must be valid CEFR level (A1, A2, B1, B2, C1, C2) |

**Success Response** (200 OK): Complete user object with updated target level

**Error Responses**:
- **400 Bad Request**: Invalid CEFR level
- **404 Not Found**: User not found

**Example Request**:
```bash
curl -X PUT "http://localhost:8081/api/users/5/target-level" \
  -H "Content-Type: application/json" \
  -d '{"targetLevel": "B2"}'
```

---

#### 5.1.6 Delete User

**DELETE** `/api/users/{id}`

Delete a user by ID.

**Path Parameters**:
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | Long | Yes | User ID |

**Success Response** (204 No Content): Empty body

**Error Responses**:
- **404 Not Found**: User not found

**Example Request**:
```bash
curl -X DELETE "http://localhost:8081/api/users/10"
```

---

### 5.2 Establishments API

#### 5.2.1 Get All Establishments

**GET** `/api/establishments`

Retrieve all establishments.

**Success Response** (200 OK):
```json
[
  {
    "id": 1,
    "name": "Language Academy Paris",
    "address": "123 Rue de la Paix, 75002 Paris",
    "createdAt": "2026-11-11T15:31:17.007966"
  }
]
```

**Example Request**:
```bash
curl -X GET "http://localhost:8081/api/establishments"
```

---

#### 5.2.2 Get Establishment by ID

**GET** `/api/establishments/{id}`

**Path Parameters**:
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | Long | Yes | Establishment ID |

**Success Response** (200 OK): Single establishment object

**Error Responses**:
- **404 Not Found**: Establishment not found

**Example Request**:
```bash
curl -X GET "http://localhost:8081/api/establishments/1"
```

---

#### 5.2.3 Create Establishment

**POST** `/api/establishments`

**Request Body**:
```json
{
  "name": "London Language Center",
  "address": "10 Oxford Street, London, UK"
}
```

**Validation Rules**:
| Field | Rules |
|-------|-------|
| `name` | Required, not blank |
| `address` | Optional |

**Success Response** (201 Created): Complete establishment object with generated ID

**Error Responses**:
- **400 Bad Request**: Validation failed

**Example Request**:
```bash
curl -X POST "http://localhost:8081/api/establishments" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "London Language Center",
    "address": "10 Oxford Street, London, UK"
  }'
```

---

#### 5.2.4 Update Establishment

**PUT** `/api/establishments/{id}`

**Path Parameters**:
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | Long | Yes | Establishment ID |

**Request Body**: Same as Create Establishment

**Success Response** (200 OK): Updated establishment object

**Error Responses**:
- **400 Bad Request**: Validation failed
- **404 Not Found**: Establishment not found

**Example Request**:
```bash
curl -X PUT "http://localhost:8081/api/establishments/1" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Language Academy Paris - Updated",
    "address": "456 Avenue des Champs-Élysées, Paris"
  }'
```

---

#### 5.2.5 Delete Establishment

**DELETE** `/api/establishments/{id}`

**Path Parameters**:
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | Long | Yes | Establishment ID |

**Success Response** (204 No Content): Empty body

**Error Responses**:
- **404 Not Found**: Establishment not found

**Example Request**:
```bash
curl -X DELETE "http://localhost:8081/api/establishments/2"
```

---

### 5.3 Groups API

#### 5.3.1 Get All Groups

**GET** `/api/groups`

Retrieve all groups.

**Success Response** (200 OK):
```json
[
  {
    "id": 1,
    "name": "English Beginners A1",
    "establishmentId": 1,
    "establishmentName": "Language Academy Paris",
    "trainerId": 3,
    "trainerFullName": "Pierre Bernard",
    "memberCount": 2,
    "members": [
      {
        "id": 5,
        "firstName": "Alice",
        "lastName": "Lefebvre",
        "email": "alice.lefebvre@student.com",
        "role": "LEARNER",
        "establishmentId": null,
        "establishmentName": null,
        "groupId": null,
        "groupName": null,
        "targetLevel": "A2",
        "createdAt": null
      }
    ]
  }
]
```

**Example Request**:
```bash
curl -X GET "http://localhost:8081/api/groups"
```

---

#### 5.3.2 Get Group by ID

**GET** `/api/groups/{id}`

**Path Parameters**:
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | Long | Yes | Group ID |

**Success Response** (200 OK): Single group object with members

**Error Responses**:
- **404 Not Found**: Group not found

**Example Request**:
```bash
curl -X GET "http://localhost:8081/api/groups/1"
```

---

#### 5.3.3 Create Group

**POST** `/api/groups`

**Request Body**:
```json
{
  "name": "Spanish Advanced C1",
  "establishmentId": 1,
  "trainerId": 3
}
```

**Validation Rules**:
| Field | Rules |
|-------|-------|
| `name` | Required, not blank |
| `establishmentId` | Required, must exist |
| `trainerId` | Optional, must exist if provided |

**Success Response** (201 Created): Complete group object with generated ID

**Error Responses**:
- **400 Bad Request**: Validation failed
- **404 Not Found**: Establishment or trainer not found

**Example Request**:
```bash
curl -X POST "http://localhost:8081/api/groups" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Spanish Advanced C1",
    "establishmentId": 1,
    "trainerId": 3
  }'
```

---

#### 5.3.4 Update Group

**PUT** `/api/groups/{id}`

**Path Parameters**:
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | Long | Yes | Group ID |

**Request Body**: Same as Create Group

**Success Response** (200 OK): Updated group object

**Error Responses**:
- **400 Bad Request**: Validation failed
- **404 Not Found**: Group, establishment, or trainer not found

**Example Request**:
```bash
curl -X PUT "http://localhost:8081/api/groups/1" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "English Beginners A1 - Morning Class",
    "establishmentId": 1,
    "trainerId": 3
  }'
```

---

#### 5.3.5 Delete Group

**DELETE** `/api/groups/{id}`

**Path Parameters**:
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | Long | Yes | Group ID |

**Success Response** (204 No Content): Empty body

**Error Responses**:
- **404 Not Found**: Group not found

**Example Request**:
```bash
curl -X DELETE "http://localhost:8081/api/groups/3"
```

---

#### 5.3.6 Add Member to Group

**POST** `/api/groups/{id}/members/{userId}`

Add a user to a group.

**Path Parameters**:
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | Long | Yes | Group ID |
| `userId` | Long | Yes | User ID to add |

**Success Response** (200 OK): Updated group object with new member

**Error Responses**:
- **404 Not Found**: Group or user not found

**Example Request**:
```bash
curl -X POST "http://localhost:8081/api/groups/1/members/9"
```

---

#### 5.3.7 Remove Member from Group

**DELETE** `/api/groups/{id}/members/{userId}`

Remove a user from a group.

**Path Parameters**:
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | Long | Yes | Group ID |
| `userId` | Long | Yes | User ID to remove |

**Success Response** (200 OK): Updated group object without the member

**Error Responses**:
- **404 Not Found**: Group or user not found, or user is not a member of the group

**Example Request**:
```bash
curl -X DELETE "http://localhost:8081/api/groups/1/members/9"
```

---

### 5.4 Progress API

#### 5.4.1 Get Progress by User ID

**GET** `/api/progress/user/{userId}`

Retrieve progress for a specific user.

**Path Parameters**:
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | Long | Yes | User ID |

**Success Response** (200 OK):
```json
{
  "id": 1,
  "userId": 5,
  "userFullName": "Alice Lefebvre",
  "currentLevel": "A1",
  "targetLevel": "A2",
  "score": 72.5,
  "completedExercises": 15,
  "lastActivity": "2026-11-10T15:31:17.050177"
}
```

**Error Responses**:
- **404 Not Found**: User or progress not found

**Example Request**:
```bash
curl -X GET "http://localhost:8081/api/progress/user/5"
```

---

#### 5.4.2 Get Progress by Group ID

**GET** `/api/progress/group/{groupId}`

Retrieve progress for all users in a group.

**Path Parameters**:
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `groupId` | Long | Yes | Group ID |

**Success Response** (200 OK): Array of progress objects

**Example Request**:
```bash
curl -X GET "http://localhost:8081/api/progress/group/1"
```

---

#### 5.4.3 Create or Update Progress

**POST** `/api/progress`

Create new progress or update existing progress for a user.

**Request Body**:
```json
{
  "userId": 5,
  "currentLevel": "A2",
  "score": 85.0,
  "completedExercises": 25
}
```

**Validation Rules**:
| Field | Rules |
|-------|-------|
| `userId` | Required, must exist |
| `currentLevel` | Optional, must be valid CEFR level |
| `score` | Optional |
| `completedExercises` | Optional |

**Success Response** (201 Created): Complete progress object

**Error Responses**:
- **400 Bad Request**: Validation failed
- **404 Not Found**: User not found

**Example Request**:
```bash
curl -X POST "http://localhost:8081/api/progress" \
  -H "Content-Type: application/json" \
  -d '{
    "userId": 5,
    "currentLevel": "A2",
    "score": 85.0,
    "completedExercises": 25
  }'
```

---

### 5.5 Alerts API

#### 5.5.1 Get Alerts by User ID

**GET** `/api/alerts/user/{userId}`

Retrieve all alerts for a specific user, ordered by creation date (newest first).

**Path Parameters**:
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | Long | Yes | User ID |

**Success Response** (200 OK):
```json
[
  {
    "id": 1,
    "userId": 5,
    "userFullName": "Alice Lefebvre",
    "type": "LEVEL_CHANGE",
    "message": "Congratulations! You've progressed to A1 level.",
    "read": false,
    "createdAt": "2026-11-11T15:31:17.056854"
  }
]
```

**Alert Types**:
- `LOW_PROGRESS`: Progress slower than expected
- `INACTIVITY`: No activity for extended period
- `LEVEL_CHANGE`: CEFR level progression
- `ACHIEVEMENT`: Milestone reached
- `SYSTEM`: System notifications

**Error Responses**:
- **404 Not Found**: User not found

**Example Request**:
```bash
curl -X GET "http://localhost:8081/api/alerts/user/5"
```

---

#### 5.5.2 Create Alert

**POST** `/api/alerts`

Create a new alert for a user.

**Request Body**:
```json
{
  "userId": 5,
  "type": "ACHIEVEMENT",
  "message": "Congratulations! You've completed 50 exercises."
}
```

**Validation Rules**:
| Field | Rules |
|-------|-------|
| `userId` | Required, must exist |
| `type` | Required, must be valid alert type |
| `message` | Required, not blank |

**Success Response** (201 Created): Complete alert object

**Error Responses**:
- **400 Bad Request**: Validation failed
- **404 Not Found**: User not found

**Example Request**:
```bash
curl -X POST "http://localhost:8081/api/alerts" \
  -H "Content-Type: application/json" \
  -d '{
    "userId": 5,
    "type": "ACHIEVEMENT",
    "message": "Congratulations! You have completed 50 exercises."
  }'
```

---

#### 5.5.3 Mark Alert as Read

**PATCH** `/api/alerts/{id}/read`

Mark an alert as read.

**Path Parameters**:
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | Long | Yes | Alert ID |

**Success Response** (200 OK): Updated alert object with `read: true`

**Error Responses**:
- **404 Not Found**: Alert not found

**Example Request**:
```bash
curl -X PATCH "http://localhost:8081/api/alerts/1/read"
```

---

### 5.6 Common Error Responses

All endpoints return standardized error responses:

**400 Bad Request** - Validation Failed:
```json
{
  "status": 400,
  "message": "Validation failed",
  "timestamp": "2026-11-11T16:00:00",
  "errors": {
    "email": "Email must be valid",
    "firstName": "First name is required"
  }
}
```

**404 Not Found** - Resource Not Found:
```json
{
  "status": 404,
  "message": "User not found with id: 999",
  "timestamp": "2026-11-11T16:00:00"
}
```

**409 Conflict** - Duplicate Resource:
```json
{
  "status": 409,
  "message": "User with email john.doe@example.com already exists",
  "timestamp": "2026-11-11T16:00:00"
}
```

**500 Internal Server Error** - Server Error:
```json
{
  "status": 500,
  "message": "An error occurred: [error details]",
  "timestamp": "2026-11-11T16:00:00"
}
```

---

*For detailed API testing, use the interactive Swagger UI at: http://localhost:8081/swagger-ui.html*

---

[Continue to Database Documentation →](database.md)


## 6. Database Documentation

### Database Configuration

The service uses **H2 in-memory database** for development and testing.

**Connection Details:**
- **JDBC URL:** `jdbc:h2:mem:userprogressdb`
- **Driver:** `org.h2.Driver`
- **Username:** `sa`
- **Password:** *(empty)*
- **Console URL:** `http://localhost:8081/h2-console`

**JPA Configuration:**
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
```

### Entity-Relationship Model

#### Entities Overview

| Entity | Description | Key Relationships |
|--------|-------------|-------------------|
| **User** | Platform users (students/teachers) | Belongs to Establishment, Member of Groups, Has Progress records, Has Alerts |
| **Establishment** | Educational institutions | Has many Users |
| **Group** | Learning groups within establishments | Has many Users (members), Belongs to Establishment |
| **Progress** | User performance tracking | Belongs to User, Belongs to Group |
| **Alert** | System notifications for users | Belongs to User |

#### User Entity

**Table:** `users`

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | BIGINT | PRIMARY KEY, AUTO_INCREMENT | Unique user identifier |
| `email` | VARCHAR(255) | UNIQUE, NOT NULL | User email address |
| `password` | VARCHAR(255) | NOT NULL | Hashed password |
| `first_name` | VARCHAR(100) | NOT NULL | User's first name |
| `last_name` | VARCHAR(100) | NOT NULL | User's last name |
| `role` | VARCHAR(20) | NOT NULL | User role (STUDENT/TEACHER/ADMIN) |
| `target_cefr_level` | VARCHAR(10) | - | Target proficiency level (A1-C2) |
| `establishment_id` | BIGINT | FOREIGN KEY → establishments(id) | Associated establishment |
| `created_at` | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Account creation timestamp |
| `updated_at` | TIMESTAMP | NOT NULL | Last update timestamp |

**Enums:**
- **Role:** `STUDENT`, `TEACHER`, `ADMIN`
- **CefrLevel:** `A1`, `A2`, `B1`, `B2`, `C1`, `C2`

**Relationships:**
- Many-to-One with `Establishment`
- Many-to-Many with `Group` (members)
- One-to-Many with `Progress`
- One-to-Many with `Alert`

#### Establishment Entity

**Table:** `establishments`

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | BIGINT | PRIMARY KEY, AUTO_INCREMENT | Unique establishment identifier |
| `name` | VARCHAR(200) | UNIQUE, NOT NULL | Institution name |
| `address` | VARCHAR(500) | - | Physical address |
| `contact_email` | VARCHAR(255) | - | Contact email |
| `created_at` | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Creation timestamp |

**Relationships:**
- One-to-Many with `User`
- One-to-Many with `Group`

#### Group Entity

**Table:** `groups`

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | BIGINT | PRIMARY KEY, AUTO_INCREMENT | Unique group identifier |
| `name` | VARCHAR(200) | NOT NULL | Group name |
| `establishment_id` | BIGINT | FOREIGN KEY → establishments(id) | Associated establishment |
| `created_at` | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Creation timestamp |

**Relationships:**
- Many-to-One with `Establishment`
- Many-to-Many with `User` (members)
- One-to-Many with `Progress`

#### Progress Entity

**Table:** `progress`

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | BIGINT | PRIMARY KEY, AUTO_INCREMENT | Unique progress identifier |
| `user_id` | BIGINT | NOT NULL, FOREIGN KEY → users(id) | User identifier |
| `group_id` | BIGINT | FOREIGN KEY → groups(id) | Group identifier (optional) |
| `current_cefr_level` | VARCHAR(10) | NOT NULL | Current proficiency level |
| `exercises_completed` | INT | NOT NULL, DEFAULT 0 | Number of completed exercises |
| `total_score` | DOUBLE | NOT NULL, DEFAULT 0.0 | Cumulative score |
| `last_activity` | TIMESTAMP | - | Last activity timestamp |
| `created_at` | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Creation timestamp |
| `updated_at` | TIMESTAMP | NOT NULL | Last update timestamp |

**Relationships:**
- Many-to-One with `User`
- Many-to-One with `Group` (optional)

#### Alert Entity

**Table:** `alerts`

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | BIGINT | PRIMARY KEY, AUTO_INCREMENT | Unique alert identifier |
| `user_id` | BIGINT | NOT NULL, FOREIGN KEY → users(id) | Target user |
| `type` | VARCHAR(50) | NOT NULL | Alert type |
| `message` | TEXT | NOT NULL | Alert message content |
| `is_read` | BOOLEAN | NOT NULL, DEFAULT FALSE | Read status |
| `created_at` | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Creation timestamp |

**Enums:**
- **AlertType:** `ACHIEVEMENT`, `REMINDER`, `WARNING`, `INFO`

**Relationships:**
- Many-to-One with `User`

### Database Initialization

The database schema is automatically created on application startup using Hibernate's `ddl-auto: update` strategy. No manual migrations are required for development.

For production deployment, consider:
- Using a persistent database (PostgreSQL, MySQL)
- Implementing Flyway or Liquibase for migration management
- Configuring `ddl-auto: validate` instead of `update`

---

## 7. Authentication & Security

### Current State

⚠️ **Authentication is NOT currently implemented.** All endpoints are publicly accessible without authentication or authorization.

### Planned Security Features

For production deployment, the following security measures should be implemented:

#### 7.1 JWT Authentication

**Recommended Approach:**
- Implement Spring Security with JWT tokens
- Add login/register endpoints
- Token-based stateless authentication
- Refresh token mechanism

**Example Configuration:**
```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    // JWT authentication filter
    // Role-based access control (RBAC)
    // Password encryption with BCrypt
}
```

#### 7.2 Role-Based Access Control (RBAC)

**Access Rules:**

| Role | Permissions |
|------|-------------|
| **ADMIN** | Full access to all endpoints, user management, establishment management |
| **TEACHER** | Create/manage groups, view student progress, manage alerts |
| **STUDENT** | View own profile, update own progress, view own alerts |

**Endpoint Protection:**

```java
// ADMIN only
POST   /api/establishments
PUT    /api/establishments/{id}
DELETE /api/establishments/{id}
DELETE /api/users/{id}

// TEACHER + ADMIN
POST   /api/groups
PUT    /api/groups/{id}
DELETE /api/groups/{id}
POST   /api/groups/{groupId}/members/{userId}
DELETE /api/groups/{groupId}/members/{userId}
GET    /api/progress/group/{groupId}

// Authenticated users (own data)
GET    /api/users/{id}
PUT    /api/users/{id}
PUT    /api/users/{id}/target-level
GET    /api/progress/user/{userId}
POST   /api/progress
GET    /api/alerts/user/{userId}
POST   /api/alerts
PUT    /api/alerts/{id}/read
```

#### 7.3 CORS Configuration

**Current Configuration:**
```java
@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:5173")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*");
    }
}
```

**Production Recommendation:**
- Restrict `allowedOrigins` to production frontend URL
- Configure specific allowed headers
- Enable credentials if using cookies
- Implement origin validation

#### 7.4 Password Security

**Current Implementation:**
- Passwords stored as plain text ⚠️ **INSECURE**

**Required Changes:**
```java
@Service
public class UserService {
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    public User createUser(UserRequest request) {
        String hashedPassword = passwordEncoder.encode(request.getPassword());
        user.setPassword(hashedPassword);
        // ...
    }
}
```

#### 7.5 Input Validation & Sanitization

**Current Implementation:**
- Bean Validation annotations (`@NotBlank`, `@Email`, `@Size`)
- `@Valid` annotation on request bodies

**Additional Recommendations:**
- SQL injection prevention (already handled by JPA/Hibernate)
- XSS prevention (sanitize HTML in text fields)
- Rate limiting for API endpoints
- Request size limits

---

## 8. Installation & Setup

### Prerequisites

- **Java:** OpenJDK 17 or higher
- **Gradle:** 9.8.2 (wrapper included)
- **IDE:** IntelliJ IDEA, Eclipse, or VS Code (recommended)
- **Git:** For cloning the repository

### Installation Steps

#### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd user-progress-service
```

#### Step 2: Verify Java Installation

```bash
java -version
# Expected output: openjdk version "17.x.x" or higher
```

#### Step 3: Build the Project

**Using Gradle Wrapper (Recommended):**

```bash
# Windows
.\gradlew.bat build

# Linux/Mac
./gradlew build
```

**Expected Output:**
```
BUILD SUCCESSFUL in Xs
```

#### Step 4: Run the Application

**Option A: Using Gradle**

```bash
# Windows
.\gradlew.bat bootRun

# Linux/Mac
./gradlew bootRun
```

**Option B: Using JAR**

```bash
# Build JAR first
.\gradlew.bat bootJar

# Run JAR
java -jar build\libs\user-progress-service-0.0.1-SNAPSHOT.jar
```

**Option C: Using IDE**

1. Open project in IntelliJ IDEA
2. Locate `UserProgressServiceApplication.java`
3. Right-click → Run 'UserProgressServiceApplication'

#### Step 5: Verify Service is Running

**Check Console Output:**
```
Started UserProgressServiceApplication in X.XXX seconds
```

**Access Endpoints:**

| Service | URL |
|---------|-----|
| **API Base** | http://localhost:8081/api |
| **Swagger UI** | http://localhost:8081/swagger-ui.html |
| **OpenAPI Docs** | http://localhost:8081/v3/api-docs |
| **H2 Console** | http://localhost:8081/h2-console |

**Test Health Check:**
```bash
curl http://localhost:8081/api/users
```

Expected: `200 OK` with JSON array (empty on first run)

### Configuration

#### Application Configuration

Edit `src/main/resources/application.yml`:

```yaml
server:
  port: 8081  # Change port if needed

spring:
  datasource:
    url: jdbc:h2:mem:userprogressdb
    username: sa
    password: 
  
  jpa:
    show-sql: true  # Set to false to reduce console output
```

#### Environment Variables

Create `.env` file (not tracked in Git):

```properties
# Database Configuration
DB_URL=jdbc:h2:mem:userprogressdb
DB_USERNAME=sa
DB_PASSWORD=

# Server Configuration
SERVER_PORT=8081

# CORS Configuration
ALLOWED_ORIGINS=http://localhost:5173
```

#### IDE Configuration

**IntelliJ IDEA:**
1. File → Project Structure → Project SDK → Select Java 17
2. File → Settings → Build, Execution, Deployment → Build Tools → Gradle
3. Select "Gradle JVM" → Project SDK

**VS Code:**
1. Install extensions:
   - Extension Pack for Java
   - Spring Boot Extension Pack
2. Open Command Palette → "Java: Configure Java Runtime"
3. Set Java 17 as runtime

### Troubleshooting

#### Issue: Port 8081 Already in Use

**Solution:**
```bash
# Windows: Find and kill process
netstat -ano | findstr :8081
taskkill /PID <PID> /F

# Or change port in application.yml
server:
  port: 8082
```

#### Issue: Build Fails with "Could not resolve dependencies"

**Solution:**
```bash
# Clear Gradle cache
.\gradlew.bat clean --refresh-dependencies

# Or delete .gradle folder
rm -rf .gradle
.\gradlew.bat build
```

#### Issue: H2 Console Not Accessible

**Solution:**
- Ensure `spring.h2.console.enabled=true` in application.yml
- Use JDBC URL: `jdbc:h2:mem:userprogressdb`
- Username: `sa`, Password: (leave empty)

#### Issue: Swagger UI Shows 404

**Solution:**
- Verify SpringDoc dependency in build.gradle
- Check URL: http://localhost:8081/swagger-ui.html (not /swagger-ui/)
- Restart application

---

## 9. Error Handling

### Global Exception Handling

The service implements centralized exception handling using `@ControllerAdvice`.

**Exception Handler:** `GlobalExceptionHandler.java`

### Error Response Format

All errors return a consistent JSON structure:

```json
{
  "timestamp": "2024-11-11T14:30:00.000+00:00",
  "status": 404,
  "error": "Not Found",
  "message": "User not found with id: 123",
  "path": "/api/users/123"
}
```

### HTTP Status Codes

| Status Code | Description | When Used |
|-------------|-------------|-----------|
| **200 OK** | Success | GET, PUT requests successful |
| **201 Created** | Resource created | POST requests successful |
| **204 No Content** | Success, no body | DELETE requests successful |
| **400 Bad Request** | Validation error | Invalid request body, missing fields |
| **404 Not Found** | Resource not found | Entity with given ID doesn't exist |
| **409 Conflict** | Duplicate resource | Email already exists, unique constraint violation |
| **500 Internal Server Error** | Server error | Unexpected server-side errors |

### Common Error Scenarios

#### 1. Resource Not Found (404)

**Scenario:** Requesting non-existent entity

**Request:**
```bash
GET /api/users/999
```

**Response:**
```json
{
  "timestamp": "2024-11-11T14:30:00.000+00:00",
  "status": 404,
  "error": "Not Found",
  "message": "User not found with id: 999",
  "path": "/api/users/999"
}
```

**Exception:** `EntityNotFoundException`

#### 2. Validation Error (400)

**Scenario:** Invalid request body

**Request:**
```bash
POST /api/users
Content-Type: application/json

{
  "email": "invalid-email",
  "firstName": "",
  "role": "INVALID_ROLE"
}
```

**Response:**
```json
{
  "timestamp": "2024-11-11T14:30:00.000+00:00",
  "status": 400,
  "error": "Bad Request",
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "must be a well-formed email address"
    },
    {
      "field": "firstName",
      "message": "must not be blank"
    },
    {
      "field": "role",
      "message": "must be one of: STUDENT, TEACHER, ADMIN"
    }
  ],
  "path": "/api/users"
}
```

**Exception:** `MethodArgumentNotValidException`

#### 3. Duplicate Resource (409)

**Scenario:** Creating user with existing email

**Request:**
```bash
POST /api/users
Content-Type: application/json

{
  "email": "existing@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe",
  "role": "STUDENT"
}
```

**Response:**
```json
{
  "timestamp": "2024-11-11T14:30:00.000+00:00",
  "status": 409,
  "error": "Conflict",
  "message": "User with email existing@example.com already exists",
  "path": "/api/users"
}
```

**Exception:** `DataIntegrityViolationException`

#### 4. Internal Server Error (500)

**Scenario:** Unexpected server-side error

**Response:**
```json
{
  "timestamp": "2024-11-11T14:30:00.000+00:00",
  "status": 500,
  "error": "Internal Server Error",
  "message": "An unexpected error occurred",
  "path": "/api/users"
}
```

### Validation Rules

#### User Validation

- `email`: Must be valid email format, unique
- `password`: Not blank (minimum length should be enforced in production)
- `firstName`: Not blank, max 100 characters
- `lastName`: Not blank, max 100 characters
- `role`: Must be one of: STUDENT, TEACHER, ADMIN
- `targetCefrLevel`: Optional, must be one of: A1, A2, B1, B2, C1, C2

#### Establishment Validation

- `name`: Not blank, max 200 characters, unique
- `address`: Optional, max 500 characters
- `contactEmail`: Optional, must be valid email format

#### Group Validation

- `name`: Not blank, max 200 characters
- `establishmentId`: Must reference existing establishment

#### Progress Validation

- `userId`: Not null, must reference existing user
- `groupId`: Optional, must reference existing group if provided
- `currentCefrLevel`: Not null, must be valid CEFR level
- `exercisesCompleted`: Not null, must be >= 0
- `totalScore`: Not null, must be >= 0.0

#### Alert Validation

- `userId`: Not null, must reference existing user
- `type`: Not null, must be valid AlertType
- `message`: Not blank

---

## 10. Testing

### Test Structure

The project follows Spring Boot testing conventions:

```
src/test/java/com/oralis/userprogress/
  └── UserProgressServiceApplicationTests.java
```

### Running Tests

#### Run All Tests

```bash
# Using Gradle wrapper
.\gradlew.bat test

# With detailed output
.\gradlew.bat test --info
```

#### Run Specific Test Class

```bash
.\gradlew.bat test --tests UserProgressServiceApplicationTests
```

#### Generate Test Report

```bash
.\gradlew.bat test
# Report location: build/reports/tests/test/index.html
```

### Test Categories

#### 1. Unit Tests

**Recommended Coverage:**

- **Service Layer Tests**
  - UserService CRUD operations
  - GroupService member management
  - ProgressService calculation logic
  - AlertService notification logic

- **Entity Tests**
  - Validation rules
  - Entity relationships
  - Enum values

**Example Test Structure:**

```java
@SpringBootTest
class UserServiceTest {
    @Autowired
    private UserService userService;
    
    @Test
    void testCreateUser() {
        // Given
        UserRequest request = new UserRequest();
        request.setEmail("test@example.com");
        request.setFirstName("John");
        request.setLastName("Doe");
        request.setRole(Role.STUDENT);
        
        // When
        UserResponse response = userService.createUser(request);
        
        // Then
        assertNotNull(response.getId());
        assertEquals("test@example.com", response.getEmail());
    }
}
```

#### 2. Integration Tests

**Recommended Coverage:**

- **Controller Tests** (with MockMvc)
  - HTTP endpoint behavior
  - Request/response serialization
  - Error handling

- **Repository Tests** (with @DataJpaTest)
  - Database queries
  - Entity relationships
  - Constraint validation

**Example Integration Test:**

```java
@SpringBootTest
@AutoConfigureMockMvc
class UserControllerIntegrationTest {
    @Autowired
    private MockMvc mockMvc;
    
    @Test
    void testGetAllUsers() throws Exception {
        mockMvc.perform(get("/api/users"))
               .andExpect(status().isOk())
               .andExpect(content().contentType(MediaType.APPLICATION_JSON));
    }
}
```

#### 3. Database Tests

**H2 In-Memory Database:**
- Tests use the same H2 configuration as development
- Database is reset between test runs
- No external database required

**Example Repository Test:**

```java
@DataJpaTest
class UserRepositoryTest {
    @Autowired
    private UserRepository userRepository;
    
    @Test
    void testFindByEmail() {
        // Given
        User user = new User();
        user.setEmail("test@example.com");
        userRepository.save(user);
        
        // When
        Optional<User> found = userRepository.findByEmail("test@example.com");
        
        // Then
        assertTrue(found.isPresent());
        assertEquals("test@example.com", found.get().getEmail());
    }
}
```

### Test Configuration

#### Test Application Properties

Create `src/test/resources/application-test.yml`:

```yaml
spring:
  datasource:
    url: jdbc:h2:mem:testdb
    username: sa
    password: 
  jpa:
    hibernate:
      ddl-auto: create-drop
    show-sql: false
  h2:
    console:
      enabled: false

logging:
  level:
    com.oralis.userprogress: DEBUG
```

### Manual Testing with Swagger UI

1. Start application: `.\gradlew.bat bootRun`
2. Open Swagger UI: http://localhost:8081/swagger-ui.html
3. Test endpoints interactively
4. View request/response schemas

### Manual Testing with cURL

See [Section 5: API Documentation](#5-api-documentation) for cURL examples for all endpoints.

### Test Coverage Goals

**Recommended Minimum Coverage:**

| Layer | Target Coverage |
|-------|----------------|
| **Controllers** | 80% |
| **Services** | 90% |
| **Repositories** | 70% |
| **Entities** | 60% |
| **Overall** | 75% |

**Generate Coverage Report:**

```bash
.\gradlew.bat test jacocoTestReport
# Report location: build/reports/jacoco/test/html/index.html
```

---

## 11. Integration with SOAWEB-React Platform

### Platform Architecture

The **user-progress-service** is a backend microservice within the SOAWEB-React platform, which is a comprehensive oral expression training application.

### Service Role

**Primary Responsibilities:**
- User account management (students, teachers, admins)
- Educational institution (establishment) management
- Learning group organization
- Student progress tracking
- System alert/notification management

**Service Boundaries:**
- Does NOT handle oral exercise content or execution
- Does NOT process audio/video recordings
- Does NOT implement AI scoring algorithms
- Focuses exclusively on user data and progress metadata

### Integration Points

#### 1. Frontend Integration (React)

**Frontend URL:** http://localhost:5173

**API Consumption:**
```javascript
// Example React service
const API_BASE_URL = 'http://localhost:8081/api';

export const userService = {
  async getAllUsers() {
    const response = await fetch(`${API_BASE_URL}/users`);
    return response.json();
  },
  
  async getUserProgress(userId) {
    const response = await fetch(`${API_BASE_URL}/progress/user/${userId}`);
    return response.json();
  }
};
```

**CORS Configuration:**
- Allowed origin: `http://localhost:5173`
- Allowed methods: GET, POST, PUT, DELETE
- Configured in `CorsConfig.java`

#### 2. Other Microservices (Future)

**Potential Service Integrations:**

| Service | Purpose | Integration Method |
|---------|---------|-------------------|
| **Exercise Service** | Oral exercise content | REST API / Message Queue |
| **Scoring Service** | AI-based pronunciation scoring | REST API / gRPC |
| **Notification Service** | Email/push notifications | Message Queue (RabbitMQ/Kafka) |
| **Auth Service** | Centralized authentication | OAuth2 / JWT validation |
| **Analytics Service** | Learning analytics dashboard | REST API / Event streaming |

**Recommended Integration Pattern:**

```
[React Frontend]
       ↓
[API Gateway] (Future: Spring Cloud Gateway)
       ↓
    ┌──┴──────────────────┬──────────────┐
    ↓                     ↓              ↓
[User Progress]    [Exercise]    [Scoring Service]
  (Port 8081)      (Port 8082)     (Port 8083)
       ↓                 ↓              ↓
    [H2 DB]         [MongoDB]     [PostgreSQL]
```

#### 3. Event-Driven Communication

**Future Enhancement: Message Queue Integration**

```java
// Example: Publishing progress update events
@Service
public class ProgressService {
    @Autowired
    private RabbitTemplate rabbitTemplate;
    
    public ProgressResponse updateProgress(ProgressRequest request) {
        Progress progress = progressRepository.save(updatedProgress);
        
        // Publish event
        ProgressUpdatedEvent event = new ProgressUpdatedEvent(
            progress.getUserId(),
            progress.getCurrentCefrLevel(),
            progress.getExercisesCompleted()
        );
        rabbitTemplate.convertAndSend("progress.exchange", "progress.updated", event);
        
        return mapper.toResponse(progress);
    }
}
```

### Deployment Architecture

**Development:**
```
localhost:5173  → React Frontend
localhost:8081  → User Progress Service
```

**Production (Recommended):**
```
https://app.soaweb.com          → React Frontend (Nginx)
https://api.soaweb.com/users    → API Gateway → User Progress Service
https://api.soaweb.com/exercises → API Gateway → Exercise Service
```

### Data Flow Example: Student Progress Update

```
1. Student completes oral exercise
   [React App] → POST /exercises/{id}/complete → [Exercise Service]

2. Exercise service scores the attempt
   [Exercise Service] → POST /score → [Scoring Service]

3. Scoring service returns results
   [Scoring Service] → Response (score, feedback)

4. Exercise service updates user progress
   [Exercise Service] → POST /progress → [User Progress Service]

5. User progress service stores data and triggers alert
   [User Progress Service] → DB: Save progress
                          → POST /alerts (if milestone reached)

6. Frontend fetches updated progress
   [React App] → GET /progress/user/{userId} → [User Progress Service]

7. Display updated dashboard
   [React App] → Renders progress charts, CEFR level, achievements
```

### Configuration for Multi-Service Environment

**application.yml (Production):**

```yaml
server:
  port: 8081

spring:
  application:
    name: user-progress-service
  
  datasource:
    url: ${DB_URL:jdbc:postgresql://db-server:5432/userprogressdb}
    username: ${DB_USERNAME}
    password: ${DB_PASSWORD}
  
  jpa:
    hibernate:
      ddl-auto: validate
    database-platform: org.hibernate.dialect.PostgreSQLDialect

# Service Discovery (if using Eureka)
eureka:
  client:
    service-url:
      defaultZone: http://eureka-server:8761/eureka/

# API Gateway integration
management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics
```

### API Documentation for Frontend Developers

- **Swagger UI:** http://localhost:8081/swagger-ui.html
- **OpenAPI Spec:** http://localhost:8081/v3/api-docs
- **JSON Download:** http://localhost:8081/v3/api-docs.yaml

**Frontend Development Workflow:**
1. Backend developer starts user-progress-service
2. Frontend developer accesses Swagger UI
3. Test API endpoints interactively
4. Generate TypeScript types from OpenAPI spec
5. Implement React components with API integration

---

## 12. Contributing

### Development Workflow

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Follow code style guidelines
   - Add tests for new features
   - Update documentation

3. **Run Tests**
   ```bash
   .\gradlew.bat test
   ```

4. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: add user role management"
   ```

5. **Push and Create Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```

### Code Style Guidelines

- **Java Style:** Follow Google Java Style Guide
- **Naming Conventions:**
  - Classes: PascalCase (UserService)
  - Methods: camelCase (getUserById)
  - Constants: UPPER_SNAKE_CASE (MAX_LOGIN_ATTEMPTS)
- **Package Structure:** Follow feature-based organization
- **Documentation:** Add JavaDoc for public methods

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Build/config changes

**Example:**
```
feat(user): add email verification endpoint

Implement email verification token generation and validation.
Adds new endpoint POST /api/users/verify-email.

Closes #123
```

---

## 13. License

*(Add your license information here)*

---

## 14. Contact & Support

**Project Repository:** *(Add your repository URL)*

**Team:**
- **Backend Lead:** *(Add contact)*
- **Frontend Lead:** *(Add contact)*
- **DevOps:** *(Add contact)*

**Support Channels:**
- **Issues:** GitHub Issues
- **Documentation:** See `/docs` folder
- **Email:** *(Add support email)*

---

## 15. Changelog

### Version 0.0.1-SNAPSHOT (Current)

**Features:**
- ✅ User management (CRUD operations)
- ✅ Establishment management
- ✅ Group management with member operations
- ✅ Progress tracking
- ✅ Alert system
- ✅ H2 in-memory database
- ✅ Swagger/OpenAPI documentation
- ✅ CORS configuration for React frontend

**Known Limitations:**
- ⚠️ No authentication/authorization
- ⚠️ No password encryption
- ⚠️ H2 in-memory database (data lost on restart)
- ⚠️ No email verification
- ⚠️ No file upload support
- ⚠️ No pagination on list endpoints

**Planned for v0.1.0:**
- 🔜 JWT authentication
- 🔜 Spring Security integration
- 🔜 PostgreSQL database
- 🔜 Pagination and filtering
- 🔜 Email notifications
- 🔜 Comprehensive test coverage

---

**Document Version:** 1.0  
**Last Updated:** November 11, 2026  
**Maintained By:** SOAWEB-React Development Team
