# Architecture Documentation

## Overview

The **User Progress Service** follows a **layered architecture** pattern with clear separation of concerns. This document describes the architectural design, component relationships, and design decisions.

## Table of Contents

1. [Architectural Style](#architectural-style)
2. [Layer Architecture](#layer-architecture)
3. [Component Details](#component-details)
4. [Design Patterns](#design-patterns)
5. [Data Flow](#data-flow)
6. [Technology Stack](#technology-stack)
7. [Scalability Considerations](#scalability-considerations)
8. [Security Architecture](#security-architecture)
9. [Integration Architecture](#integration-architecture)
10. [Future Architecture](#future-architecture)

---

## Architectural Style

### Primary Pattern: Layered Architecture

The service implements a **4-tier layered architecture**:

```
┌─────────────────────────────────┐
│   Presentation Layer (API)      │  ← REST Controllers
├─────────────────────────────────┤
│   Business Logic Layer          │  ← Services
├─────────────────────────────────┤
│   Data Access Layer             │  ← Repositories
├─────────────────────────────────┤
│   Database Layer                │  ← H2 Database
└─────────────────────────────────┘
```

### Architectural Principles

1. **Separation of Concerns:** Each layer has a specific responsibility
2. **Dependency Inversion:** Layers depend on abstractions (interfaces)
3. **Single Responsibility:** Each component has one reason to change
4. **DRY (Don't Repeat Yourself):** Code reuse through services and utilities
5. **RESTful Design:** Resource-oriented API design

---

## Layer Architecture

### 1. Presentation Layer (REST API)

**Package:** `com.oralis.userprogress.controller`

**Responsibility:** Handle HTTP requests/responses and API contracts

**Components:**
- `UserController` - User management endpoints
- `EstablishmentController` - Institution management endpoints
- `GroupController` - Group management endpoints
- `ProgressController` - Progress tracking endpoints
- `AlertController` - Alert/notification endpoints

**Design Decisions:**
- RESTful resource naming (`/api/users`, `/api/groups`)
- HTTP verbs for operations (GET, POST, PUT, DELETE)
- Consistent response formats (JSON)
- Input validation with `@Valid`
- Exception handling with `@ControllerAdvice`

**Communication:**
```
HTTP Request → Controller → Service → Repository → Database
                    ↓
              DTO Mapping
                    ↓
HTTP Response ← JSON Serialization
```

### 2. Business Logic Layer (Service)

**Package:** `com.oralis.userprogress.service`

**Responsibility:** Implement business rules and orchestrate operations

**Components:**
- `UserService` - User CRUD and management logic
- `EstablishmentService` - Establishment management
- `GroupService` - Group operations and member management
- `ProgressService` - Progress calculation and tracking
- `AlertService` - Alert generation and notification logic

**Design Decisions:**
- Transaction management with `@Transactional`
- Business validation before persistence
- Entity-DTO mapping
- Cross-service communication for complex operations
- Exception handling and error propagation

**Key Responsibilities:**
```java
@Service
@Transactional
public class ProgressService {
    // Business logic
    public ProgressResponse createOrUpdateProgress(ProgressRequest request) {
        // 1. Validate user exists
        // 2. Validate group exists (if provided)
        // 3. Find or create progress record
        // 4. Update progress metrics
        // 5. Check for milestones/achievements
        // 6. Trigger alerts if needed
        // 7. Return response DTO
    }
}
```

### 3. Data Access Layer (Repository)

**Package:** `com.oralis.userprogress.repository`

**Responsibility:** Database operations and query management

**Components:**
- `UserRepository` - User data access
- `EstablishmentRepository` - Establishment data access
- `GroupRepository` - Group data access
- `ProgressRepository` - Progress data access
- `AlertRepository` - Alert data access

**Design Decisions:**
- Extends `JpaRepository<Entity, ID>`
- Custom query methods with naming conventions
- `@Query` annotations for complex queries
- No business logic in repositories

**Example:**
```java
public interface ProgressRepository extends JpaRepository<Progress, Long> {
    List<Progress> findByUserId(Long userId);
    List<Progress> findByGroupId(Long groupId);
    Optional<Progress> findByUserIdAndGroupId(Long userId, Long groupId);
}
```

### 4. Domain Layer (Entities & DTOs)

**Packages:**
- `com.oralis.userprogress.entity` - JPA entities
- `com.oralis.userprogress.dto` - Data Transfer Objects

**Responsibility:** Data models and domain concepts

**Entities:**
- `User`, `Establishment`, `Group`, `Progress`, `Alert`
- Enums: `Role`, `CefrLevel`, `AlertType`

**DTOs:**
- `*Request` - Incoming data validation
- `*Response` - Outgoing data representation

**Design Decisions:**
- Entities contain JPA annotations and relationships
- DTOs are flat, serialization-friendly structures
- Clear separation: Entities for persistence, DTOs for API
- Bean Validation on DTOs

---

## Component Details

### Component Diagram

See: [docs/diagrams/component-diagram.puml](diagrams/component-diagram.puml)

### Controllers

**Responsibilities:**
- HTTP request handling
- Request validation (`@Valid`)
- Response formatting
- HTTP status codes
- Error handling delegation

**Example:**
```java
@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;
    
    @GetMapping
    public ResponseEntity<List<UserResponse>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<UserResponse> getUserById(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }
    
    @PostMapping
    public ResponseEntity<UserResponse> createUser(@Valid @RequestBody UserRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED)
                             .body(userService.createUser(request));
    }
}
```

### Services

**Responsibilities:**
- Business logic execution
- Transaction management
- Cross-entity operations
- DTO ↔ Entity mapping
- Exception handling

**Example:**
```java
@Service
@Transactional
public class GroupService {
    private final GroupRepository groupRepository;
    private final UserRepository userRepository;
    
    public GroupResponse addMemberToGroup(Long groupId, Long userId) {
        // Validate group exists
        Group group = groupRepository.findById(groupId)
            .orElseThrow(() -> new EntityNotFoundException("Group not found"));
        
        // Validate user exists
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new EntityNotFoundException("User not found"));
        
        // Business logic: Add member
        group.getMembers().add(user);
        Group saved = groupRepository.save(group);
        
        // Map to DTO and return
        return mapToResponse(saved);
    }
}
```

### Repositories

**Responsibilities:**
- CRUD operations
- Custom queries
- Database interactions
- No business logic

**Example:**
```java
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    List<User> findByRole(Role role);
    List<User> findByEstablishmentId(Long establishmentId);
    
    @Query("SELECT u FROM User u WHERE u.targetCefrLevel = :level")
    List<User> findUsersByTargetLevel(@Param("level") CefrLevel level);
}
```

---

## Design Patterns

### 1. Repository Pattern

**Purpose:** Abstract data access logic from business logic

**Implementation:**
```java
public interface UserRepository extends JpaRepository<User, Long> {
    // Spring Data JPA provides implementation
}
```

**Benefits:**
- Decouples business logic from data access
- Easier testing with mocks
- Centralized data access logic

### 2. Data Transfer Object (DTO) Pattern

**Purpose:** Transfer data between layers without exposing entities

**Implementation:**
```java
// Request DTO (incoming data)
public class UserRequest {
    @NotBlank
    @Email
    private String email;
    
    @NotBlank
    private String firstName;
    // ...
}

// Response DTO (outgoing data)
public class UserResponse {
    private Long id;
    private String email;
    private String fullName;
    // ...
}
```

**Benefits:**
- API stability (entity changes don't break API)
- Security (hide sensitive fields)
- Validation at API boundary

### 3. Dependency Injection Pattern

**Purpose:** Inversion of control for loose coupling

**Implementation:**
```java
@Service
public class UserService {
    private final UserRepository userRepository;
    private final EstablishmentRepository establishmentRepository;
    
    // Constructor injection (recommended)
    public UserService(UserRepository userRepository, 
                       EstablishmentRepository establishmentRepository) {
        this.userRepository = userRepository;
        this.establishmentRepository = establishmentRepository;
    }
}
```

**Benefits:**
- Testability (easy to mock dependencies)
- Loose coupling
- Spring manages lifecycle

### 4. Exception Handler Pattern

**Purpose:** Centralized error handling

**Implementation:**
```java
@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(EntityNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                             .body(new ErrorResponse(ex.getMessage()));
    }
    
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidation(MethodArgumentNotValidException ex) {
        // Extract validation errors
        return ResponseEntity.badRequest().body(errorResponse);
    }
}
```

**Benefits:**
- Consistent error responses
- Separation of error handling from business logic
- DRY principle

### 5. Builder Pattern (via Lombok)

**Purpose:** Fluent object construction

**Implementation:**
```java
@Builder
public class UserResponse {
    private Long id;
    private String email;
    private String firstName;
}

// Usage
UserResponse response = UserResponse.builder()
    .id(1L)
    .email("user@example.com")
    .firstName("John")
    .build();
```

---

## Data Flow

### Request-Response Flow

#### Example: Create User

```
1. HTTP POST /api/users
   Content-Type: application/json
   Body: { "email": "user@example.com", "firstName": "John", ... }

2. UserController receives request
   - Validates request body (@Valid)
   - Calls userService.createUser(request)

3. UserService processes business logic
   - Validates email uniqueness
   - Checks establishment exists
   - Maps UserRequest → User entity
   - Calls userRepository.save(user)

4. UserRepository persists to database
   - JPA/Hibernate generates SQL INSERT
   - H2 Database executes query
   - Returns saved User entity

5. UserService completes
   - Maps User entity → UserResponse DTO
   - Returns UserResponse to controller

6. UserController returns HTTP response
   - Status: 201 Created
   - Body: UserResponse JSON

7. Client receives response
   {
     "id": 123,
     "email": "user@example.com",
     "firstName": "John",
     ...
   }
```

### Sequence Diagram

See: [docs/diagrams/sequence-diagram.puml](diagrams/sequence-diagram.puml)

---

## Technology Stack

### Backend Framework

- **Spring Boot 4.1.2** - Application framework
- **Spring Framework 7.0.10** - Core framework
- **Spring Data JPA** - Data access layer
- **Spring Web** - REST API support
- **Spring Validation** - Bean validation

### Database

- **H2 Database** (Development) - In-memory database
- **PostgreSQL** (Production recommendation) - Relational database

### API Documentation

- **SpringDoc OpenAPI 3.0.3** - OpenAPI/Swagger
- **Swagger UI** - Interactive API documentation

### Build Tool

- **Gradle 9.8.2** - Build automation
- **Gradle Wrapper** - Version consistency

### Code Generation

- **Lombok** - Boilerplate reduction (@Getter, @Setter, @Builder)

### Java Version

- **Java 17** - LTS version

---

## Scalability Considerations

### Horizontal Scaling

**Current Limitations:**
- H2 in-memory database (not shared across instances)
- No session management (stateless - ✓ good)
- No distributed caching

**Required Changes for Scaling:**

1. **Database Migration**
   ```
   H2 In-Memory → PostgreSQL/MySQL (shared DB)
   ```

2. **Add Load Balancer**
   ```
   [LB] → [Service Instance 1]
        → [Service Instance 2]
        → [Service Instance N]
   ```

3. **Add Distributed Cache** (Optional)
   ```
   Redis for:
   - Session storage (if needed)
   - Frequently accessed data
   - Rate limiting
   ```

### Vertical Scaling

**Current Configuration:**
```yaml
server:
  tomcat:
    threads:
      max: 200        # Max concurrent requests
      min-spare: 10   # Minimum threads
```

**Tuning Parameters:**
- Increase JVM heap size: `-Xmx2g -Xms512m`
- Adjust thread pool sizes
- Optimize database connection pool

### Performance Optimization

**Database:**
- Add indexes on frequently queried columns
- Implement query result caching
- Use pagination for large datasets

**Application:**
- Enable HTTP compression
- Implement caching (Spring Cache)
- Use async processing for long operations

**Code Example: Pagination**
```java
@GetMapping
public Page<UserResponse> getAllUsers(
    @RequestParam(defaultValue = "0") int page,
    @RequestParam(defaultValue = "20") int size) {
    
    Pageable pageable = PageRequest.of(page, size);
    return userService.getAllUsers(pageable);
}
```

---

## Security Architecture

### Current State

⚠️ **No authentication or authorization currently implemented**

### Planned Security Architecture

```
┌──────────────────────────────────────────┐
│         API Gateway / Load Balancer      │
│              (Future)                    │
└────────────────┬─────────────────────────┘
                 │
         ┌───────┴────────┐
         │                │
         ▼                ▼
┌─────────────────┐  ┌─────────────────┐
│  Auth Service   │  │  User Progress  │
│  (JWT Tokens)   │  │    Service      │
└─────────────────┘  └─────────────────┘
```

### Security Layers

#### 1. Authentication (Planned)

**JWT Token Flow:**
```
1. POST /auth/login (email, password)
   → Auth Service validates credentials
   → Returns JWT access token + refresh token

2. GET /api/users (Authorization: Bearer <token>)
   → Spring Security validates JWT
   → Extracts user claims
   → Proceeds to controller
```

**Implementation:**
```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/swagger-ui/**", "/v3/api-docs/**").permitAll()
                .anyRequest().authenticated()
            )
            .oauth2ResourceServer(OAuth2ResourceServerConfigurer::jwt);
        return http.build();
    }
}
```

#### 2. Authorization (Planned)

**Role-Based Access Control:**

| Endpoint | STUDENT | TEACHER | ADMIN |
|----------|---------|---------|-------|
| GET /api/users/{id} (own) | ✓ | ✓ | ✓ |
| GET /api/users (all) | ✗ | ✓ | ✓ |
| POST /api/users | ✗ | ✗ | ✓ |
| DELETE /api/users/{id} | ✗ | ✗ | ✓ |
| GET /api/progress/user/{id} (own) | ✓ | ✓ | ✓ |
| GET /api/progress/group/{id} | ✗ | ✓ | ✓ |

**Implementation:**
```java
@PreAuthorize("hasRole('ADMIN')")
@DeleteMapping("/{id}")
public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
    userService.deleteUser(id);
    return ResponseEntity.noContent().build();
}

@PreAuthorize("hasAnyRole('TEACHER', 'ADMIN')")
@GetMapping("/progress/group/{groupId}")
public ResponseEntity<List<ProgressResponse>> getGroupProgress(@PathVariable Long groupId) {
    return ResponseEntity.ok(progressService.getProgressByGroupId(groupId));
}
```

#### 3. Data Security

**Password Hashing:**
```java
@Bean
public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
}

// Usage in service
public User createUser(UserRequest request) {
    String hashedPassword = passwordEncoder.encode(request.getPassword());
    user.setPassword(hashedPassword);
    // ...
}
```

**Input Validation:**
```java
public class UserRequest {
    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;
    
    @NotBlank
    @Size(min = 8, message = "Password must be at least 8 characters")
    private String password;
}
```

#### 4. CORS Security

**Current Configuration:**
```java
@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:5173")  // React frontend
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*");
    }
}
```

**Production Configuration:**
```java
.allowedOrigins("https://app.soaweb.com")  // Production frontend only
.allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
.allowedHeaders("Authorization", "Content-Type")
.allowCredentials(true)
.maxAge(3600);
```

---

## Integration Architecture

### Current Integrations

```
┌──────────────────┐
│  React Frontend  │ ──HTTP/REST──→ User Progress Service
│  (localhost:5173)│
└──────────────────┘
```

### Future Integrations

See: [docs/diagrams/architecture-diagram.puml](diagrams/architecture-diagram.puml)

**Planned Services:**

1. **Exercise Service** - Oral exercise content management
2. **Scoring Service** - AI-based pronunciation scoring
3. **Notification Service** - Email/push notifications
4. **Auth Service** - Centralized authentication
5. **Analytics Service** - Learning analytics and reporting

**Integration Patterns:**

#### REST API (Synchronous)
```java
@Service
public class ProgressService {
    @Autowired
    private RestTemplate restTemplate;
    
    private Exercise getExercise(Long exerciseId) {
        String url = "http://exercise-service/api/exercises/" + exerciseId;
        return restTemplate.getForObject(url, Exercise.class);
    }
}
```

#### Message Queue (Asynchronous)
```java
@Service
public class ProgressService {
    @Autowired
    private RabbitTemplate rabbitTemplate;
    
    public void publishProgressEvent(Progress progress) {
        ProgressEvent event = new ProgressEvent(progress);
        rabbitTemplate.convertAndSend("progress.exchange", "progress.updated", event);
    }
}
```

---

## Future Architecture

### Microservices Architecture

**Evolution Path:**

```
Phase 1 (Current): Monolithic Microservice
  └─ User Progress Service (all-in-one)

Phase 2: Basic Microservices
  ├─ User Progress Service
  ├─ Exercise Service
  └─ Auth Service

Phase 3: Full Microservices
  ├─ User Progress Service
  ├─ Exercise Service
  ├─ Scoring Service
  ├─ Notification Service
  ├─ Auth Service
  ├─ Analytics Service
  └─ API Gateway
```

### Service Mesh (Future)

**Istio/Linkerd Integration:**
- Service discovery
- Load balancing
- Circuit breaking
- Distributed tracing
- Metrics collection

### Cloud-Native Architecture

**Kubernetes Deployment:**

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-progress-service
spec:
  replicas: 3
  template:
    spec:
      containers:
      - name: user-progress-service
        image: soaweb/user-progress-service:1.0.0
        ports:
        - containerPort: 8081
        env:
        - name: SPRING_PROFILES_ACTIVE
          value: production
```

---

## References

- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [Microservices Patterns](https://microservices.io/patterns/)
- [Clean Architecture by Robert C. Martin](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

---

**Document Version:** 1.0  
**Last Updated:** November 11, 2026
