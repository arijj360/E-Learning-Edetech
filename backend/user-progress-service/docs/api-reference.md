# API Reference

## Overview

Complete API reference documentation for the User Progress Service. All endpoints follow REST conventions and return JSON responses.

**Base URL:** `http://localhost:8081/api`

**Content Type:** `application/json`

**API Documentation:** http://localhost:8081/swagger-ui.html

## Table of Contents

1. [Authentication](#authentication)
2. [Users API](#users-api)
3. [Establishments API](#establishments-api)
4. [Groups API](#groups-api)
5. [Progress API](#progress-api)
6. [Alerts API](#alerts-api)
7. [Error Responses](#error-responses)
8. [Response Codes](#response-codes)

---

## Authentication

⚠️ **Currently, no authentication is required.** All endpoints are publicly accessible.

**Planned:** JWT Bearer token authentication

```http
Authorization: Bearer <token>
```

---

## Users API

### Endpoints Summary

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/{id}` | Get user by ID |
| POST | `/api/users` | Create new user |
| PUT | `/api/users/{id}` | Update user |
| PUT | `/api/users/{id}/target-level` | Update target CEFR level |
| DELETE | `/api/users/{id}` | Delete user |

---

### GET /api/users

Get all users in the system.

**Request:**
```http
GET /api/users HTTP/1.1
Host: localhost:8081
```

**Response:** `200 OK`
```json
[
  {
    "id": 1,
    "email": "student@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "role": "STUDENT",
    "targetCefrLevel": "B2",
    "establishmentName": "MIT Language Institute",
    "createdAt": "2024-11-11T10:00:00"
  },
  {
    "id": 2,
    "email": "teacher@example.com",
    "firstName": "Jane",
    "lastName": "Smith",
    "role": "TEACHER",
    "targetCefrLevel": null,
    "establishmentName": "MIT Language Institute",
    "createdAt": "2024-11-11T10:30:00"
  }
]
```

**cURL:**
```bash
curl http://localhost:8081/api/users
```

---

### GET /api/users/{id}

Get a specific user by ID.

**Path Parameters:**
- `id` (required) - User ID (Long)

**Request:**
```http
GET /api/users/1 HTTP/1.1
Host: localhost:8081
```

**Response:** `200 OK`
```json
{
  "id": 1,
  "email": "student@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "role": "STUDENT",
  "targetCefrLevel": "B2",
  "establishmentName": "MIT Language Institute",
  "createdAt": "2024-11-11T10:00:00"
}
```

**Error Response:** `404 Not Found`
```json
{
  "timestamp": "2024-11-11T14:30:00.000+00:00",
  "status": 404,
  "error": "Not Found",
  "message": "User not found with id: 999",
  "path": "/api/users/999"
}
```

**cURL:**
```bash
curl http://localhost:8081/api/users/1
```

---

### POST /api/users

Create a new user.

**Request Body:**
```json
{
  "email": "newuser@example.com",
  "password": "securePassword123",
  "firstName": "Alice",
  "lastName": "Johnson",
  "role": "STUDENT",
  "targetCefrLevel": "B1",
  "establishmentId": 1
}
```

**Validation Rules:**
- `email`: Required, must be valid email format, must be unique
- `password`: Required, not blank
- `firstName`: Required, max 100 characters
- `lastName`: Required, max 100 characters
- `role`: Required, must be one of: `STUDENT`, `TEACHER`, `ADMIN`
- `targetCefrLevel`: Optional, must be one of: `A1`, `A2`, `B1`, `B2`, `C1`, `C2`
- `establishmentId`: Optional, must reference existing establishment

**Request:**
```http
POST /api/users HTTP/1.1
Host: localhost:8081
Content-Type: application/json

{
  "email": "newuser@example.com",
  "password": "securePassword123",
  "firstName": "Alice",
  "lastName": "Johnson",
  "role": "STUDENT",
  "targetCefrLevel": "B1",
  "establishmentId": 1
}
```

**Response:** `201 Created`
```json
{
  "id": 3,
  "email": "newuser@example.com",
  "firstName": "Alice",
  "lastName": "Johnson",
  "role": "STUDENT",
  "targetCefrLevel": "B1",
  "establishmentName": "MIT Language Institute",
  "createdAt": "2024-11-11T14:45:00"
}
```

**Error Response:** `400 Bad Request` (Validation Error)
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
    }
  ]
}
```

**Error Response:** `409 Conflict` (Duplicate Email)
```json
{
  "timestamp": "2024-11-11T14:30:00.000+00:00",
  "status": 409,
  "error": "Conflict",
  "message": "User with email newuser@example.com already exists"
}
```

**cURL:**
```bash
curl -X POST http://localhost:8081/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "email": "newuser@example.com",
    "password": "securePassword123",
    "firstName": "Alice",
    "lastName": "Johnson",
    "role": "STUDENT",
    "targetCefrLevel": "B1",
    "establishmentId": 1
  }'
```

---

### PUT /api/users/{id}

Update an existing user.

**Path Parameters:**
- `id` (required) - User ID (Long)

**Request Body:**
```json
{
  "email": "updated@example.com",
  "password": "newPassword123",
  "firstName": "Alice",
  "lastName": "Smith",
  "role": "TEACHER",
  "targetCefrLevel": "C1",
  "establishmentId": 2
}
```

**Request:**
```http
PUT /api/users/3 HTTP/1.1
Host: localhost:8081
Content-Type: application/json

{
  "email": "updated@example.com",
  "password": "newPassword123",
  "firstName": "Alice",
  "lastName": "Smith",
  "role": "TEACHER",
  "targetCefrLevel": "C1",
  "establishmentId": 2
}
```

**Response:** `200 OK`
```json
{
  "id": 3,
  "email": "updated@example.com",
  "firstName": "Alice",
  "lastName": "Smith",
  "role": "TEACHER",
  "targetCefrLevel": "C1",
  "establishmentName": "Oxford English Academy",
  "createdAt": "2024-11-11T14:45:00"
}
```

**cURL:**
```bash
curl -X PUT http://localhost:8081/api/users/3 \
  -H "Content-Type: application/json" \
  -d '{
    "email": "updated@example.com",
    "password": "newPassword123",
    "firstName": "Alice",
    "lastName": "Smith",
    "role": "TEACHER"
  }'
```

---

### PUT /api/users/{id}/target-level

Update user's target CEFR level.

**Path Parameters:**
- `id` (required) - User ID (Long)

**Query Parameters:**
- `level` (required) - CEFR level (`A1`, `A2`, `B1`, `B2`, `C1`, `C2`)

**Request:**
```http
PUT /api/users/1/target-level?level=C1 HTTP/1.1
Host: localhost:8081
```

**Response:** `200 OK`
```json
{
  "id": 1,
  "email": "student@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "role": "STUDENT",
  "targetCefrLevel": "C1",
  "establishmentName": "MIT Language Institute",
  "createdAt": "2024-11-11T10:00:00"
}
```

**cURL:**
```bash
curl -X PUT "http://localhost:8081/api/users/1/target-level?level=C1"
```

---

### DELETE /api/users/{id}

Delete a user.

**Path Parameters:**
- `id` (required) - User ID (Long)

**Request:**
```http
DELETE /api/users/3 HTTP/1.1
Host: localhost:8081
```

**Response:** `204 No Content`

**Error Response:** `404 Not Found`
```json
{
  "timestamp": "2024-11-11T14:30:00.000+00:00",
  "status": 404,
  "error": "Not Found",
  "message": "User not found with id: 999"
}
```

**cURL:**
```bash
curl -X DELETE http://localhost:8081/api/users/3
```

---

## Establishments API

### Endpoints Summary

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/establishments` | Get all establishments |
| GET | `/api/establishments/{id}` | Get establishment by ID |
| POST | `/api/establishments` | Create establishment |
| PUT | `/api/establishments/{id}` | Update establishment |
| DELETE | `/api/establishments/{id}` | Delete establishment |

---

### GET /api/establishments

Get all educational establishments.

**Response:** `200 OK`
```json
[
  {
    "id": 1,
    "name": "MIT Language Institute",
    "address": "77 Massachusetts Ave, Cambridge, MA",
    "contactEmail": "contact@mit-lang.edu",
    "createdAt": "2024-11-01T08:00:00"
  }
]
```

**cURL:**
```bash
curl http://localhost:8081/api/establishments
```

---

### GET /api/establishments/{id}

Get establishment by ID.

**Path Parameters:**
- `id` (required) - Establishment ID (Long)

**Response:** `200 OK`
```json
{
  "id": 1,
  "name": "MIT Language Institute",
  "address": "77 Massachusetts Ave, Cambridge, MA",
  "contactEmail": "contact@mit-lang.edu",
  "createdAt": "2024-11-01T08:00:00"
}
```

**cURL:**
```bash
curl http://localhost:8081/api/establishments/1
```

---

### POST /api/establishments

Create a new establishment.

**Request Body:**
```json
{
  "name": "Harvard Language Center",
  "address": "Cambridge, MA",
  "contactEmail": "info@harvard-lang.edu"
}
```

**Validation Rules:**
- `name`: Required, max 200 characters, must be unique
- `address`: Optional, max 500 characters
- `contactEmail`: Optional, must be valid email format

**Response:** `201 Created`
```json
{
  "id": 2,
  "name": "Harvard Language Center",
  "address": "Cambridge, MA",
  "contactEmail": "info@harvard-lang.edu",
  "createdAt": "2024-11-11T15:00:00"
}
```

**cURL:**
```bash
curl -X POST http://localhost:8081/api/establishments \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Harvard Language Center",
    "address": "Cambridge, MA",
    "contactEmail": "info@harvard-lang.edu"
  }'
```

---

### PUT /api/establishments/{id}

Update an establishment.

**Path Parameters:**
- `id` (required) - Establishment ID (Long)

**Request Body:**
```json
{
  "name": "MIT Language Institute",
  "address": "Updated Address, Cambridge, MA",
  "contactEmail": "new-contact@mit-lang.edu"
}
```

**Response:** `200 OK`
```json
{
  "id": 1,
  "name": "MIT Language Institute",
  "address": "Updated Address, Cambridge, MA",
  "contactEmail": "new-contact@mit-lang.edu",
  "createdAt": "2024-11-01T08:00:00"
}
```

**cURL:**
```bash
curl -X PUT http://localhost:8081/api/establishments/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "MIT Language Institute",
    "address": "Updated Address, Cambridge, MA",
    "contactEmail": "new-contact@mit-lang.edu"
  }'
```

---

### DELETE /api/establishments/{id}

Delete an establishment.

**Path Parameters:**
- `id` (required) - Establishment ID (Long)

**Response:** `204 No Content`

⚠️ **Note:** Deleting an establishment will cascade delete all associated groups.

**cURL:**
```bash
curl -X DELETE http://localhost:8081/api/establishments/1
```

---

## Groups API

### Endpoints Summary

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/groups` | Get all groups |
| GET | `/api/groups/{id}` | Get group by ID |
| POST | `/api/groups` | Create group |
| PUT | `/api/groups/{id}` | Update group |
| DELETE | `/api/groups/{id}` | Delete group |
| POST | `/api/groups/{groupId}/members/{userId}` | Add member to group |
| DELETE | `/api/groups/{groupId}/members/{userId}` | Remove member from group |

---

### GET /api/groups

Get all groups.

**Response:** `200 OK`
```json
[
  {
    "id": 1,
    "name": "Advanced English B2",
    "establishmentName": "MIT Language Institute",
    "memberCount": 15,
    "createdAt": "2024-10-01T09:00:00"
  }
]
```

**cURL:**
```bash
curl http://localhost:8081/api/groups
```

---

### GET /api/groups/{id}

Get group by ID with member details.

**Path Parameters:**
- `id` (required) - Group ID (Long)

**Response:** `200 OK`
```json
{
  "id": 1,
  "name": "Advanced English B2",
  "establishmentName": "MIT Language Institute",
  "memberCount": 2,
  "members": [
    {
      "id": 1,
      "email": "student1@example.com",
      "firstName": "John",
      "lastName": "Doe"
    },
    {
      "id": 2,
      "email": "student2@example.com",
      "firstName": "Jane",
      "lastName": "Smith"
    }
  ],
  "createdAt": "2024-10-01T09:00:00"
}
```

**cURL:**
```bash
curl http://localhost:8081/api/groups/1
```

---

### POST /api/groups

Create a new group.

**Request Body:**
```json
{
  "name": "Business English C1",
  "establishmentId": 1
}
```

**Validation Rules:**
- `name`: Required, max 200 characters
- `establishmentId`: Required, must reference existing establishment

**Response:** `201 Created`
```json
{
  "id": 2,
  "name": "Business English C1",
  "establishmentName": "MIT Language Institute",
  "memberCount": 0,
  "members": [],
  "createdAt": "2024-11-11T15:30:00"
}
```

**cURL:**
```bash
curl -X POST http://localhost:8081/api/groups \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Business English C1",
    "establishmentId": 1
  }'
```

---

### PUT /api/groups/{id}

Update a group.

**Path Parameters:**
- `id` (required) - Group ID (Long)

**Request Body:**
```json
{
  "name": "Updated Group Name",
  "establishmentId": 1
}
```

**Response:** `200 OK`
```json
{
  "id": 1,
  "name": "Updated Group Name",
  "establishmentName": "MIT Language Institute",
  "memberCount": 2,
  "createdAt": "2024-10-01T09:00:00"
}
```

**cURL:**
```bash
curl -X PUT http://localhost:8081/api/groups/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Updated Group Name",
    "establishmentId": 1
  }'
```

---

### DELETE /api/groups/{id}

Delete a group.

**Path Parameters:**
- `id` (required) - Group ID (Long)

**Response:** `204 No Content`

**cURL:**
```bash
curl -X DELETE http://localhost:8081/api/groups/1
```

---

### POST /api/groups/{groupId}/members/{userId}

Add a user as a member of a group.

**Path Parameters:**
- `groupId` (required) - Group ID (Long)
- `userId` (required) - User ID (Long)

**Request:**
```http
POST /api/groups/1/members/3 HTTP/1.1
Host: localhost:8081
```

**Response:** `200 OK`
```json
{
  "id": 1,
  "name": "Advanced English B2",
  "establishmentName": "MIT Language Institute",
  "memberCount": 3,
  "members": [
    {
      "id": 1,
      "email": "student1@example.com",
      "firstName": "John",
      "lastName": "Doe"
    },
    {
      "id": 3,
      "email": "student3@example.com",
      "firstName": "Alice",
      "lastName": "Johnson"
    }
  ],
  "createdAt": "2024-10-01T09:00:00"
}
```

**cURL:**
```bash
curl -X POST http://localhost:8081/api/groups/1/members/3
```

---

### DELETE /api/groups/{groupId}/members/{userId}

Remove a user from a group.

**Path Parameters:**
- `groupId` (required) - Group ID (Long)
- `userId` (required) - User ID (Long)

**Request:**
```http
DELETE /api/groups/1/members/3 HTTP/1.1
Host: localhost:8081
```

**Response:** `200 OK`
```json
{
  "id": 1,
  "name": "Advanced English B2",
  "establishmentName": "MIT Language Institute",
  "memberCount": 2,
  "members": [
    {
      "id": 1,
      "email": "student1@example.com",
      "firstName": "John",
      "lastName": "Doe"
    }
  ],
  "createdAt": "2024-10-01T09:00:00"
}
```

**cURL:**
```bash
curl -X DELETE http://localhost:8081/api/groups/1/members/3
```

---

## Progress API

### Endpoints Summary

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/progress/user/{userId}` | Get user progress |
| GET | `/api/progress/group/{groupId}` | Get group progress |
| POST | `/api/progress` | Create/update progress |

---

### GET /api/progress/user/{userId}

Get all progress records for a user.

**Path Parameters:**
- `userId` (required) - User ID (Long)

**Response:** `200 OK`
```json
[
  {
    "id": 1,
    "userId": 1,
    "userName": "John Doe",
    "groupId": 1,
    "groupName": "Advanced English B2",
    "currentCefrLevel": "B1",
    "exercisesCompleted": 15,
    "totalScore": 1275.5,
    "averageScore": 85.03,
    "lastActivity": "2024-11-11T14:30:00",
    "createdAt": "2024-10-15T10:00:00",
    "updatedAt": "2024-11-11T14:30:00"
  }
]
```

**cURL:**
```bash
curl http://localhost:8081/api/progress/user/1
```

---

### GET /api/progress/group/{groupId}

Get all progress records for a group.

**Path Parameters:**
- `groupId` (required) - Group ID (Long)

**Response:** `200 OK`
```json
[
  {
    "id": 1,
    "userId": 1,
    "userName": "John Doe",
    "groupId": 1,
    "groupName": "Advanced English B2",
    "currentCefrLevel": "B1",
    "exercisesCompleted": 15,
    "totalScore": 1275.5,
    "averageScore": 85.03,
    "lastActivity": "2024-11-11T14:30:00"
  },
  {
    "id": 2,
    "userId": 2,
    "userName": "Jane Smith",
    "groupId": 1,
    "groupName": "Advanced English B2",
    "currentCefrLevel": "B2",
    "exercisesCompleted": 22,
    "totalScore": 1980.0,
    "averageScore": 90.0,
    "lastActivity": "2024-11-11T15:00:00"
  }
]
```

**cURL:**
```bash
curl http://localhost:8081/api/progress/group/1
```

---

### POST /api/progress

Create or update progress record.

**Request Body:**
```json
{
  "userId": 1,
  "groupId": 1,
  "currentCefrLevel": "B1",
  "exercisesCompleted": 1,
  "totalScore": 85.0
}
```

**Validation Rules:**
- `userId`: Required, must reference existing user
- `groupId`: Optional, must reference existing group if provided
- `currentCefrLevel`: Required, must be one of: `A1`, `A2`, `B1`, `B2`, `C1`, `C2`
- `exercisesCompleted`: Required, must be >= 0
- `totalScore`: Required, must be >= 0.0

**Behavior:**
- If progress exists for (userId, groupId): Updates existing record
- If no progress exists: Creates new record
- Updates `lastActivity` timestamp
- Checks milestones and triggers alerts

**Response:** `200 OK` (update) or `201 Created` (new)
```json
{
  "id": 1,
  "userId": 1,
  "userName": "John Doe",
  "groupId": 1,
  "groupName": "Advanced English B2",
  "currentCefrLevel": "B1",
  "exercisesCompleted": 16,
  "totalScore": 1360.5,
  "averageScore": 85.03,
  "lastActivity": "2024-11-11T16:00:00",
  "createdAt": "2024-10-15T10:00:00",
  "updatedAt": "2024-11-11T16:00:00"
}
```

**cURL:**
```bash
curl -X POST http://localhost:8081/api/progress \
  -H "Content-Type: application/json" \
  -d '{
    "userId": 1,
    "groupId": 1,
    "currentCefrLevel": "B1",
    "exercisesCompleted": 1,
    "totalScore": 85.0
  }'
```

---

## Alerts API

### Endpoints Summary

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/alerts/user/{userId}` | Get user alerts |
| POST | `/api/alerts` | Create alert |
| PUT | `/api/alerts/{id}/read` | Mark alert as read |

---

### GET /api/alerts/user/{userId}

Get all alerts for a user.

**Path Parameters:**
- `userId` (required) - User ID (Long)

**Response:** `200 OK`
```json
[
  {
    "id": 1,
    "userId": 1,
    "type": "ACHIEVEMENT",
    "message": "Congratulations! You've completed 10 exercises!",
    "isRead": false,
    "createdAt": "2024-11-11T14:30:00"
  },
  {
    "id": 2,
    "userId": 1,
    "type": "INFO",
    "message": "New exercises available for B1 level.",
    "isRead": true,
    "createdAt": "2024-11-10T10:00:00"
  }
]
```

**cURL:**
```bash
curl http://localhost:8081/api/alerts/user/1
```

---

### POST /api/alerts

Create a new alert.

**Request Body:**
```json
{
  "userId": 1,
  "type": "REMINDER",
  "message": "Don't forget to practice today!"
}
```

**Validation Rules:**
- `userId`: Required, must reference existing user
- `type`: Required, must be one of: `ACHIEVEMENT`, `REMINDER`, `WARNING`, `INFO`
- `message`: Required, not blank

**Response:** `201 Created`
```json
{
  "id": 3,
  "userId": 1,
  "type": "REMINDER",
  "message": "Don't forget to practice today!",
  "isRead": false,
  "createdAt": "2024-11-11T16:30:00"
}
```

**cURL:**
```bash
curl -X POST http://localhost:8081/api/alerts \
  -H "Content-Type: application/json" \
  -d '{
    "userId": 1,
    "type": "REMINDER",
    "message": "Don\'t forget to practice today!"
  }'
```

---

### PUT /api/alerts/{id}/read

Mark an alert as read.

**Path Parameters:**
- `id` (required) - Alert ID (Long)

**Request:**
```http
PUT /api/alerts/1/read HTTP/1.1
Host: localhost:8081
```

**Response:** `200 OK`
```json
{
  "id": 1,
  "userId": 1,
  "type": "ACHIEVEMENT",
  "message": "Congratulations! You've completed 10 exercises!",
  "isRead": true,
  "createdAt": "2024-11-11T14:30:00"
}
```

**cURL:**
```bash
curl -X PUT http://localhost:8081/api/alerts/1/read
```

---

## Error Responses

### Standard Error Format

All errors return a consistent JSON structure:

```json
{
  "timestamp": "2024-11-11T14:30:00.000+00:00",
  "status": 404,
  "error": "Not Found",
  "message": "User not found with id: 999",
  "path": "/api/users/999"
}
```

### Validation Error Format

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
    }
  ],
  "path": "/api/users"
}
```

---

## Response Codes

| Code | Status | Description |
|------|--------|-------------|
| **200** | OK | Request successful (GET, PUT) |
| **201** | Created | Resource created successfully (POST) |
| **204** | No Content | Resource deleted successfully (DELETE) |
| **400** | Bad Request | Invalid request body or parameters |
| **404** | Not Found | Resource not found |
| **409** | Conflict | Duplicate resource (e.g., email already exists) |
| **500** | Internal Server Error | Unexpected server error |

---

## Rate Limiting

⚠️ **Currently not implemented**

**Planned:**
- 100 requests per minute per IP
- 1000 requests per hour per authenticated user

---

## Pagination

⚠️ **Currently not implemented**

**Planned Format:**

```http
GET /api/users?page=0&size=20&sort=lastName,asc
```

**Response:**
```json
{
  "content": [...],
  "totalElements": 100,
  "totalPages": 5,
  "size": 20,
  "number": 0
}
```

---

## API Versioning

**Current Version:** v1 (implicit)

**Future Versioning Strategy:**
- URL versioning: `/api/v2/users`
- Header versioning: `Accept: application/vnd.api.v2+json`

---

## OpenAPI Specification

**Download OpenAPI Spec:**
- JSON: http://localhost:8081/v3/api-docs
- YAML: http://localhost:8081/v3/api-docs.yaml

**Interactive Documentation:**
- Swagger UI: http://localhost:8081/swagger-ui.html

---

**Document Version:** 1.0  
**Last Updated:** November 11, 2026
