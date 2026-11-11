# 🎙️ Oral Platform – Language Speaking Training & Assessment

## 📌 Project Overview

**Oral Platform** is a web-based learning and assessment platform designed to help learners improve their French and English speaking skills.

The platform allows users to practice oral expression, record their voices, receive personalized feedback, simulate official language examinations, and track their progress according to the **Common European Framework of Reference for Languages (CEFR)**, from B1 to C2.

The project follows a **Microservices Architecture** using Spring Boot and Spring Cloud technologies.

## 🎯 Main Objectives

- Improve oral communication skills in French and English.
- Provide automated speech evaluation and personalized feedback.
- Analyze pronunciation, fluency, intonation, vocabulary and grammar.
- Simulate official language examinations.
- Track learners' progress over time.
- Help trainers monitor learners and evaluate their performance.

## 👥 User Roles

The platform supports three main actors:

- **Learner:** Practices speaking, records audio, receives feedback and tracks progress.
- **Trainer:** Monitors groups, reviews evaluations and provides comments.
- **Establishment:** Manages classes and monitors overall learning performance.

## 🚀 Main Features

- Audio recording and speech-to-text transcription.
- Pronunciation and fluency analysis.
- Personalized grammar and vocabulary corrections.
- CEFR-based speaking evaluation.
- Oral examination simulations.
- Random subject selection.
- Progress tracking and dashboards.
- Certification catalogue and level attestations.
- Trainer feedback and evaluation validation.

## 🏗️ System Architecture

The project is organized into independent microservices.

| Microservice | Database | Main Responsibilities |
|---|---|---|
| user-progress-service | H2 | Users, roles, groups and learning progress |
| exam-content-service | H2 | Oral subjects, evaluation grids and CEFR descriptors |
| recording-service | H2 | Audio uploads and transcription |
| simulation-service | MySQL | Oral examination simulations |
| feedback-service | MySQL | Corrections and personalized feedback |
| certification-service | MySQL | Certifications and attestations |
| analysis-service | MongoDB | Pronunciation, fluency and intonation analysis |

### Infrastructure Components

- **API Gateway:** Single entry point for API requests.
- **Eureka Server:** Service discovery and registration.
- **Keycloak:** Authentication, authorization and JWT security.
- **Docker & Docker Compose:** Application containerization and deployment.
- **OpenFeign:** Synchronous communication between microservices.
- **RabbitMQ or Kafka:** Asynchronous communication between services (to be finalized).

## 🛠️ Technologies Used

| Component | Technology |
|---|---|
| Backend | Java, Spring Boot |
| Microservices | Spring Cloud |
| API Documentation | Swagger / OpenAPI |
| Service Discovery | Netflix Eureka |
| API Gateway | Spring Cloud Gateway |
| Authentication | Keycloak |
| Databases | H2, MySQL, MongoDB |
| Inter-service Communication | OpenFeign |
| Messaging | RabbitMQ / Kafka |
| Containerization | Docker, Docker Compose |
| Frontend | Web application |
| Speech Recognition | Whisper or Vosk |

## 📂 Project Structure

```text
oral-platform/
│
├── FE/
│   ├── web/
│   └── mobile/
│
├── microservices/
│   ├── user-progress-service/
│   ├── exam-content-service/
│   ├── recording-service/
│   ├── simulation-service/
│   ├── feedback-service/
│   ├── certification-service/
│   └── analysis-service/
│
├── infra/
│   ├── api-gateway/
│   ├── eureka-server/
│   └── docker-compose.yml
│
└── README.md
```

## 🔗 API Documentation

Each microservice exposes REST APIs under the `/api` prefix.

Swagger / OpenAPI is used to document the available endpoints.

Main API endpoints include:

| Service | Endpoint | Description |
|---|---|---|
| Exam Content | `GET /api/subjects` | Retrieve oral subjects |
| Exam Content | `GET /api/subjects/random` | Retrieve a random subject |
| Exam Content | `POST /api/subjects` | Create a subject |
|
