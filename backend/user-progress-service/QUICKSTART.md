# User Progress Service - Quick Start Guide

## 🚀 Running the Application

### Start the Server

```bash
./gradlew bootRun
```

The application will start on **http://localhost:8081**

### Access Points

| Service | URL | Description |
|---------|-----|-------------|
| **Swagger UI** | http://localhost:8081/swagger-ui.html | Interactive API documentation |
| **H2 Console** | http://localhost:8081/h2-console | Database console |
| **API Base** | http://localhost:8081/api | REST API base path |

### H2 Database Access

When accessing the H2 console:
- **JDBC URL**: `jdbc:h2:mem:userprogressdb`
- **Username**: `sa`
- **Password**: _(leave empty)_

## 📊 Sample Data

The application loads sample data automatically:

### Users (password: `password123` for all)

| Name | Email | Role |
|------|-------|------|
| Jean Dupont | jean.dupont@oralis.com | SUPER_ADMIN |
| Marie Martin | marie.martin@oralis.com | ESTABLISHMENT_ADMIN |
| Pierre Bernard | pierre.bernard@oralis.com | TRAINER |
| Sophie Dubois | sophie.dubois@oralis.com | TRAINER |
| Alice Lefebvre | alice.lefebvre@student.com | LEARNER |
| Thomas Moreau | thomas.moreau@student.com | LEARNER |
| Emma Simon | emma.simon@student.com | LEARNER |
| Lucas Laurent | lucas.laurent@student.com | LEARNER |
| Chloe Michel | chloe.michel@student.com | LEARNER |

### Groups

- **English Beginners A1** (Trainer: Pierre Bernard)
  - Alice Lefebvre
  - Thomas Moreau

- **French Intermediate B1** (Trainer: Sophie Dubois)
  - Emma Simon
  - Lucas Laurent

## 🧪 Testing with Swagger

1. Open http://localhost:8081/swagger-ui.html
2. Browse endpoints by category (Users, Groups, Progress, Alerts, Establishments)
3. Click any endpoint → "Try it out"
4. Fill in parameters
5. Click "Execute"

## 📝 API Examples

### Get All Users
```bash
curl http://localhost:8081/api/users
```

### Get Learners Only
```bash
curl http://localhost:8081/api/users?role=LEARNER
```

### Get User Progress
```bash
curl http://localhost:8081/api/progress/user/5
```

### Get Group Details
```bash
curl http://localhost:8081/api/groups/1
```

### Get User Alerts
```bash
curl http://localhost:8081/api/alerts/user/5
```

### Create a New User
```bash
curl -X POST http://localhost:8081/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "New",
    "lastName": "User",
    "email": "newuser@example.com",
    "password": "password123",
    "role": "LEARNER",
    "establishmentId": 1,
    "targetLevel": "B1"
  }'
```

### Update Target Level
```bash
curl -X PUT http://localhost:8081/api/users/5/target-level \
  -H "Content-Type: application/json" \
  -d '{
    "targetLevel": "B2"
  }'
```

### Add Member to Group
```bash
curl -X POST http://localhost:8081/api/groups/1/members/9
```

### Create Progress Record
```bash
curl -X POST http://localhost:8081/api/progress \
  -H "Content-Type: application/json" \
  -d '{
    "userId": 9,
    "currentLevel": "A1",
    "score": 65.0,
    "completedExercises": 10
  }'
```

### Mark Alert as Read
```bash
curl -X PATCH http://localhost:8081/api/alerts/1/read
```

## 🔍 Available Endpoints

### Users (`/api/users`)
- `GET /api/users` - List all users (optional `?role=` filter)
- `GET /api/users/{id}` - Get user by ID
- `POST /api/users` - Create user
- `PUT /api/users/{id}` - Update user
- `PUT /api/users/{id}/target-level` - Update target level
- `DELETE /api/users/{id}` - Delete user

### Establishments (`/api/establishments`)
- `GET /api/establishments` - List all establishments
- `GET /api/establishments/{id}` - Get establishment by ID
- `POST /api/establishments` - Create establishment
- `PUT /api/establishments/{id}` - Update establishment
- `DELETE /api/establishments/{id}` - Delete establishment

### Groups (`/api/groups`)
- `GET /api/groups` - List all groups
- `GET /api/groups/{id}` - Get group by ID
- `POST /api/groups` - Create group
- `PUT /api/groups/{id}` - Update group
- `DELETE /api/groups/{id}` - Delete group
- `POST /api/groups/{id}/members/{userId}` - Add member
- `DELETE /api/groups/{id}/members/{userId}` - Remove member

### Progress (`/api/progress`)
- `GET /api/progress/user/{userId}` - Get user progress
- `GET /api/progress/group/{groupId}` - Get group progress
- `POST /api/progress` - Create/update progress

### Alerts (`/api/alerts`)
- `GET /api/alerts/user/{userId}` - Get user alerts
- `POST /api/alerts` - Create alert
- `PATCH /api/alerts/{id}/read` - Mark as read

## 🛠️ Development

### Build Project
```bash
./gradlew build
```

### Run Tests
```bash
./gradlew test
```

### Clean Build
```bash
./gradlew clean build
```

## 📦 Project Structure

```
com.oralis.userprogress/
├── config/         # Configuration (CORS, OpenAPI, DataLoader)
├── controller/     # REST controllers
├── dto/            # Request/Response DTOs
├── entity/         # JPA entities
├── exception/      # Custom exceptions & handler
├── repository/     # Spring Data repositories
└── service/        # Business logic layer
```

## 🎯 CEFR Levels

The system uses the Common European Framework of Reference for Languages:
- **A1** - Beginner
- **A2** - Elementary
- **B1** - Intermediate
- **B2** - Upper Intermediate
- **C1** - Advanced
- **C2** - Proficient

## 💡 Tips

1. **Use Swagger UI** for interactive testing - it's the easiest way to explore the API
2. **H2 Console** is great for inspecting the database state
3. **CORS is enabled** for http://localhost:5173 (React frontend)
4. All timestamps are in ISO-8601 format
5. Validation errors return detailed field-level messages

## 🔗 Related Services

This is one of 7 microservices in the Oralis platform:
- **user-progress-service** (this service) - User management and progress tracking
- Other services (to be implemented)

---

**Port**: 8081 | **Database**: H2 (in-memory) | **Framework**: Spring Boot 3.x
