# Contributing Guide

## Welcome! 👋

Thank you for considering contributing to the User Progress Service! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Workflow](#development-workflow)
4. [Coding Standards](#coding-standards)
5. [Testing Guidelines](#testing-guidelines)
6. [Documentation](#documentation)
7. [Commit Guidelines](#commit-guidelines)
8. [Pull Request Process](#pull-request-process)
9. [Issue Reporting](#issue-reporting)

---

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment for all contributors.

### Expected Behavior

- Be respectful and considerate
- Accept constructive criticism
- Focus on what's best for the project
- Show empathy towards other contributors

### Unacceptable Behavior

- Harassment or discrimination
- Trolling or insulting comments
- Publishing others' private information
- Unprofessional conduct

---

## Getting Started

### Prerequisites

- Java 17 or higher
- Git
- Your favorite IDE (IntelliJ IDEA recommended)
- Basic knowledge of Spring Boot

### Setup Development Environment

1. **Fork the Repository**

   Click the "Fork" button on GitHub to create your own copy.

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/user-progress-service.git
   cd user-progress-service
   ```

3. **Add Upstream Remote**

   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/user-progress-service.git
   ```

4. **Build and Run**

   ```bash
   .\gradlew.bat build
   .\gradlew.bat bootRun
   ```

5. **Verify Setup**

   ```bash
   curl http://localhost:8081/api/users
   ```

---

## Development Workflow

### 1. Create a Feature Branch

```bash
# Update your main branch
git checkout main
git pull upstream main

# Create a new branch
git checkout -b feature/your-feature-name
```

**Branch Naming Conventions:**

- `feature/` - New features
- `bugfix/` - Bug fixes
- `hotfix/` - Critical production fixes
- `refactor/` - Code refactoring
- `docs/` - Documentation updates
- `test/` - Test improvements

**Examples:**
- `feature/add-user-authentication`
- `bugfix/fix-progress-calculation`
- `docs/update-api-reference`

### 2. Make Your Changes

- Write clean, readable code
- Follow coding standards (see below)
- Add tests for new functionality
- Update documentation as needed

### 3. Test Your Changes

```bash
# Run all tests
.\gradlew.bat test

# Run specific test
.\gradlew.bat test --tests UserServiceTest

# Run application
.\gradlew.bat bootRun
```

### 4. Commit Your Changes

```bash
git add .
git commit -m "feat: add user authentication endpoint"
```

See [Commit Guidelines](#commit-guidelines) for commit message format.

### 5. Keep Your Branch Updated

```bash
# Fetch upstream changes
git fetch upstream

# Rebase on upstream/main
git rebase upstream/main

# Resolve conflicts if any
# Then continue rebase
git rebase --continue
```

### 6. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 7. Create Pull Request

1. Go to your fork on GitHub
2. Click "New Pull Request"
3. Select your feature branch
4. Fill in the PR template
5. Submit for review

---

## Coding Standards

### Java Style Guide

We follow the [Google Java Style Guide](https://google.github.io/styleguide/javaguide.html) with minor modifications.

#### Key Points

**1. Naming Conventions**

```java
// Classes: PascalCase
public class UserService { }

// Methods: camelCase
public void getUserById(Long id) { }

// Variables: camelCase
private String firstName;

// Constants: UPPER_SNAKE_CASE
private static final int MAX_LOGIN_ATTEMPTS = 3;

// Packages: lowercase
package com.oralis.userprogress.service;
```

**2. Indentation**

- Use 4 spaces (no tabs)
- Maximum line length: 120 characters

**3. Braces**

```java
// Always use braces, even for single-line blocks
if (condition) {
    doSomething();
}

// Not:
if (condition) doSomething();
```

**4. Imports**

```java
// Order: static imports, then regular imports
import static org.junit.jupiter.api.Assertions.*;

import java.util.List;
import org.springframework.stereotype.Service;
import com.oralis.userprogress.entity.User;
```

**5. JavaDoc**

```java
/**
 * Retrieves a user by their unique identifier.
 *
 * @param id the user ID
 * @return the user response DTO
 * @throws EntityNotFoundException if user not found
 */
public UserResponse getUserById(Long id) {
    // ...
}
```

### Spring Boot Best Practices

**1. Dependency Injection**

```java
// Prefer constructor injection
@Service
public class UserService {
    private final UserRepository userRepository;
    
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}

// Not field injection
@Autowired
private UserRepository userRepository; // Avoid
```

**2. Exception Handling**

```java
// Use specific exceptions
throw new EntityNotFoundException("User not found with id: " + id);

// Not generic exceptions
throw new Exception("Error"); // Avoid
```

**3. Validation**

```java
// Use Bean Validation
public class UserRequest {
    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;
}
```

**4. Transaction Management**

```java
// Add @Transactional at service layer
@Service
@Transactional
public class UserService {
    // Methods run in transaction
}
```

### Lombok Usage

**Acceptable:**

```java
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private Long id;
    private String email;
}
```

**Avoid:**

```java
@Data // Too broad, use specific annotations
```

---

## Testing Guidelines

### Test Structure

```
src/test/java/com/oralis/userprogress/
├── controller/
│   └── UserControllerTest.java
├── service/
│   └── UserServiceTest.java
└── repository/
    └── UserRepositoryTest.java
```

### Unit Tests

**Example:**

```java
@SpringBootTest
class UserServiceTest {
    @Autowired
    private UserService userService;
    
    @MockBean
    private UserRepository userRepository;
    
    @Test
    void testCreateUser_Success() {
        // Given
        UserRequest request = UserRequest.builder()
            .email("test@example.com")
            .firstName("John")
            .lastName("Doe")
            .role(Role.STUDENT)
            .build();
        
        User user = new User();
        user.setId(1L);
        user.setEmail(request.getEmail());
        
        when(userRepository.save(any(User.class))).thenReturn(user);
        
        // When
        UserResponse response = userService.createUser(request);
        
        // Then
        assertNotNull(response);
        assertEquals(1L, response.getId());
        assertEquals("test@example.com", response.getEmail());
        verify(userRepository, times(1)).save(any(User.class));
    }
    
    @Test
    void testGetUserById_NotFound() {
        // Given
        when(userRepository.findById(999L)).thenReturn(Optional.empty());
        
        // When & Then
        assertThrows(EntityNotFoundException.class, () -> {
            userService.getUserById(999L);
        });
    }
}
```

### Integration Tests

```java
@SpringBootTest
@AutoConfigureMockMvc
class UserControllerIntegrationTest {
    @Autowired
    private MockMvc mockMvc;
    
    @Autowired
    private ObjectMapper objectMapper;
    
    @Test
    void testCreateUser_Success() throws Exception {
        UserRequest request = new UserRequest();
        request.setEmail("test@example.com");
        request.setFirstName("John");
        request.setLastName("Doe");
        request.setRole(Role.STUDENT);
        
        mockMvc.perform(post("/api/users")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.email").value("test@example.com"));
    }
}
```

### Test Coverage

**Minimum Coverage Requirements:**

- **Overall:** 75%
- **Controllers:** 80%
- **Services:** 90%
- **Repositories:** 70%

**Generate Coverage Report:**

```bash
.\gradlew.bat test jacocoTestReport
# Open: build/reports/jacoco/test/html/index.html
```

### Test Naming

```java
// Pattern: test[MethodName]_[Scenario]_[ExpectedResult]
@Test
void testCreateUser_WithValidData_ReturnsCreatedUser() { }

@Test
void testGetUserById_WithInvalidId_ThrowsNotFoundException() { }

@Test
void testUpdateUser_WithDuplicateEmail_ThrowsConflictException() { }
```

---

## Documentation

### When to Update Documentation

**Always update documentation when:**

- Adding new endpoints
- Changing existing API behavior
- Modifying database schema
- Adding new features
- Changing configuration options
- Updating dependencies

### What to Update

| Change | Update These Docs |
|--------|-------------------|
| New API endpoint | API Reference, README |
| Database change | Database docs, ER diagram |
| Architecture change | Architecture docs, diagrams |
| New feature | README, Changelog |
| Configuration change | Installation guide |

### Documentation Style

- Use clear, concise language
- Include code examples
- Add diagrams where helpful
- Keep formatting consistent
- Proofread before committing

---

## Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type

- **feat:** New feature
- **fix:** Bug fix
- **docs:** Documentation changes
- **refactor:** Code refactoring
- **test:** Adding tests
- **chore:** Build/config changes
- **style:** Code formatting (no logic change)
- **perf:** Performance improvements

### Scope

The scope is optional and specifies the component:

- `user` - User-related changes
- `group` - Group-related changes
- `progress` - Progress tracking
- `api` - API changes
- `db` - Database changes
- `config` - Configuration

### Subject

- Use imperative mood: "add" not "added" or "adds"
- Don't capitalize first letter
- No period at the end
- Maximum 50 characters

### Body (Optional)

- Explain what and why, not how
- Wrap at 72 characters
- Separate from subject with blank line

### Footer (Optional)

- Reference issues: `Closes #123`
- Breaking changes: `BREAKING CHANGE: description`

### Examples

**Good:**

```
feat(user): add email verification endpoint

Implement email verification token generation and validation.
Users receive verification email upon registration.

Closes #123
```

```
fix(progress): correct average score calculation

Previously, average was calculated incorrectly when
exercisesCompleted was zero. Now returns 0 for this case.

Fixes #456
```

```
docs(api): update API reference with new endpoints

Add documentation for:
- POST /api/users/verify-email
- GET /api/users/resend-verification
```

**Bad:**

```
fixed bug  // Too vague, no type
```

```
Added new feature for users to verify email and also updated docs  // Too long, multiple changes
```

---

## Pull Request Process

### Before Submitting

- [ ] Code builds without errors
- [ ] All tests pass
- [ ] Test coverage meets requirements
- [ ] Code follows style guide
- [ ] Documentation updated
- [ ] Commit messages follow guidelines
- [ ] Branch is up-to-date with main

### PR Template

When creating a PR, include:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How was this tested?

## Checklist
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No breaking changes (or documented)
- [ ] Code follows style guide
```

### Review Process

1. **Automated Checks**
   - CI build must pass
   - Tests must pass
   - Code coverage check

2. **Code Review**
   - At least one approval required
   - Address reviewer feedback
   - Re-request review after changes

3. **Merge**
   - Squash and merge (preferred)
   - Delete branch after merge

---

## Issue Reporting

### Before Creating an Issue

1. Search existing issues
2. Check documentation
3. Try latest version
4. Gather reproduction steps

### Bug Report Template

```markdown
**Describe the bug**
Clear description of the bug

**To Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What should happen

**Actual behavior**
What actually happens

**Environment**
- OS: [Windows/Linux/macOS]
- Java version: [17/18/19]
- Spring Boot version: [4.1.2]

**Logs**
Relevant log output

**Additional context**
Screenshots, stack traces, etc.
```

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
Description of the problem

**Describe the solution you'd like**
Clear description of the desired feature

**Describe alternatives you've considered**
Alternative solutions or features

**Additional context**
Mockups, examples, etc.
```

---

## Questions?

- **General questions:** Create a discussion on GitHub
- **Bug reports:** Create an issue
- **Feature requests:** Create an issue
- **Security issues:** Email security@example.com

---

## Thank You! 🙏

Your contributions make this project better for everyone. We appreciate your time and effort!

---

**Document Version:** 1.0  
**Last Updated:** November 11, 2026
