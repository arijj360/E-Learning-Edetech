# User Progress Service

A Spring Boot microservice for managing users, establishments, groups, learner progress, and alerts in an oral expression training and evaluation platform (French/English).

## Technology Stack

- **Java 17**
- **Spring Boot 3.x**
- **Spring Web** - REST API
- **Spring Data JPA** - Database access
- **Bean Validation** - Request validation
- **Lombok** - Reduce boilerplate
- **H2 Database** - In-memory database
- **SpringDoc OpenAPI** - API documentation (Swagger)

## Features

### Entities & Domain Model

- **Users** - Learners, Trainers, Establishment Admins, Super Admins
- **Roles** - LEARNER, TRAINER, ESTABLISHMENT_ADMIN, SUPER_ADMIN
- **Establishments** - Educational institutions
- **Groups** - Learning groups with trainers and members
- **Progress** - Track learner progress, current level, scores, completed exercises
- **Alerts** - System notifications (inactivity, achievements, level changes, etc.)
- **CEFR Levels** - A1, A2, B1, B2, C1, C2

### REST API Endpoints

All endpoints are available under `/api`:

#### Users (`/api/users`)
- `GET /api/users` - Get all users (optional `?role=` filter)
- `GET /api/users/{id}` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/{id}` - Update user
- `PUT /api/users/{id}/target-level` - Update target CEFR level
- `DELETE /api/users/{id}` - Delete user

#### Establishments (`/api/establishments`)
- `GET /api/establishments` - Get all establishments
- `GET /api/establishments/{id}` - Get establishment by ID
- `POST /api/establishments` - Create establishment
- `PUT /api/establishments/{id}` - Update establishment
- `DELETE /api/establishments/{id}` - Delete establishment

#### Groups (`/api/groups`)
- `GET /api/groups` - Get all groups
- `GET /api/groups/{id}` - Get group by ID
- `POST /api/groups` - Create group
- `PUT /api/groups/{id}` - Update group
- `DELETE /api/groups/{id}` - Delete group
- `POST /api/groups/{id}/members/{userId}` - Add member to group
- `DELETE /api/groups/{id}/members/{userId}` - Remove member from group

#### Progress (`/api/progress`)
- `GET /api/progress/user/{userId}` - Get progress for a user
- `GET /api/progress/group/{groupId}` - Get progress for all users in a group
- `POST /api/progress` - Create or update progress

#### Alerts (`/api/alerts`)
- `GET /api/alerts/user/{userId}` - Get alerts for a user
- `POST /api/alerts` - Create new alert
- `PATCH /api/alerts/{id}/read` - Mark alert as read

## Getting Started

### Prerequisites

- Java 17 or higher
- Maven (or use included Gradle wrapper)

### Running the Application

#### Using Gradle

```bash
./gradlew bootRun
```

#### Using Maven (if converted)

```bash
mvn spring-boot:run
```

The application will start on **port 8081**.

### Access Points

- **API Base URL**: `http://localhost:8081/api`
- **Swagger UI**: `http://localhost:8081/swagger-ui.html`
- **OpenAPI Docs**: `http://localhost:8081/api-docs`
- **H2 Console**: `http://localhost:8081/h2-console`

### H2 Database Configuration

- **JDBC URL**: `jdbc:h2:mem:userprogressdb`
- **Username**: `sa`
- **Password**: _(empty)_

## Sample Data

The application automatically loads sample data on startup:

- **1 Establishment**: Language Academy Paris
- **2 Groups**: English Beginners A1, French Intermediate B1
- **9 Users**:
  - 1 Super Admin (jean.dupont@oralis.com)
  - 1 Establishment Admin (marie.martin@oralis.com)
  - 2 Trainers (pierre.bernard@oralis.com, sophie.dubois@oralis.com)
  - 5 Learners (various students)
- **5 Progress records** - Various levels and scores
- **6 Alerts** - Different alert types

All users have the password: `password123`

## Architecture

The application follows a layered architecture:

```
├── entity/          # JPA entities
├── repository/      # Spring Data JPA repositories
├── service/         # Business logic layer
├── controller/      # REST controllers
├── dto/             # Request/Response DTOs
├── exception/       # Custom exceptions and global handler
└── config/          # Configuration classes
```

### Key Design Patterns

- **DTO Pattern** - Entities never exposed directly via API
- **Service Layer** - Business logic separated from controllers
- **Global Exception Handling** - Consistent error responses
- **Bean Validation** - Request validation with annotations

## Error Handling

The API returns standardized error responses:

- **404 Not Found** - Resource doesn't exist
- **400 Bad Request** - Validation errors
- **409 Conflict** - Duplicate resources (e.g., email already exists)
- **500 Internal Server Error** - Unexpected errors

## CORS Configuration

CORS is enabled for the React frontend at `http://localhost:5173`.

## API Testing

### Using Swagger UI

1. Navigate to `http://localhost:8081/swagger-ui.html`
2. Browse available endpoints by tag
3. Click "Try it out" on any endpoint
4. Fill in parameters and click "Execute"

### Example: Create a User

```bash
curl -X POST http://localhost:8081/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "password": "password123",
    "role": "LEARNER",
    "establishmentId": 1,
    "targetLevel": "B1"
  }'
```

### Example: Get Progress by User

```bash
curl http://localhost:8081/api/progress/user/5
```

## Future Enhancements

- JWT Authentication & Authorization
- Service Discovery (Eureka)
- Docker containerization
- Integration tests
- Password encryption (BCrypt)
- Pagination for list endpoints
- Advanced filtering and search

## Project Structure

```
src/main/java/com/oralis/userprogress/
├── UserProgressServiceApplication.java
├── config/
│   ├── DataLoader.java           # Sample data initialization
│   ├── OpenApiConfig.java        # Swagger/OpenAPI configuration
│   └── WebConfig.java            # CORS configuration
├── controller/
│   ├── AlertController.java
│   ├── EstablishmentController.java
│   ├── GroupController.java
│   ├── ProgressController.java
│   └── UserController.java
├── dto/
│   ├── AlertRequest.java
│   ├── AlertResponse.java
│   ├── EstablishmentRequest.java
│   ├── EstablishmentResponse.java
│   ├── GroupRequest.java
│   ├── GroupResponse.java
│   ├── ProgressRequest.java
│   ├── ProgressResponse.java
│   ├── TargetLevelRequest.java
│   ├── UserRequest.java
│   └── UserResponse.java
├── entity/
│   ├── Alert.java
│   ├── AlertType.java
│   ├── CefrLevel.java
│   ├── Establishment.java
│   ├── Group.java
│   ├── Progress.java
│   ├── Role.java
│   └── User.java
├── exception/
│   ├── DuplicateResourceException.java
│   ├── ErrorResponse.java
│   ├── GlobalExceptionHandler.java
│   └── ResourceNotFoundException.java
├── repository/
│   ├── AlertRepository.java
│   ├── EstablishmentRepository.java
│   ├── GroupRepository.java
│   ├── ProgressRepository.java
│   └── UserRepository.java
└── service/
    ├── AlertService.java
    ├── EstablishmentService.java
    ├── GroupService.java
    ├── ProgressService.java
    └── UserService.java
```

## License

This project is part of the Oralis oral expression training platform.
