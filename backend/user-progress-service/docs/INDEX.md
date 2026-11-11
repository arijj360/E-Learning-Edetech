# User Progress Service - Documentation Index

## 📚 Complete Documentation Suite

Welcome to the comprehensive documentation for the **User Progress Service**, a Spring Boot microservice for the SOAWEB-React oral expression training platform.

---

## 🚀 Quick Start

**New to the project?** Start here:

1. **[Installation Guide](installation.md)** - Setup and run the service
2. **[README](README.md)** - Project overview and API documentation
3. **[API Reference](api-reference.md)** - Complete endpoint documentation

---

## 📖 Documentation Structure

### Main Documentation

| Document | Description | Best For |
|----------|-------------|----------|
| **[README.md](README.md)** | Complete project documentation with introduction, architecture, technologies, project structure, API docs, database info, security, installation, testing, and integration | Comprehensive overview, onboarding new developers |
| **[API Reference](api-reference.md)** | Detailed API endpoint documentation with request/response examples, validation rules, error codes, and cURL commands | Frontend developers, API consumers, testing |
| **[Architecture](architecture.md)** | System architecture, design patterns, layer structure, component details, scalability, and security architecture | Architects, senior developers, system design reviews |
| **[Database](database.md)** | Complete database schema documentation, ER diagrams, table specifications, relationships, indexes, sample queries, and migration strategy | Database administrators, backend developers, data modeling |
| **[Installation](installation.md)** | Step-by-step installation instructions for development and production, IDE setup, configuration, troubleshooting | New developers, DevOps engineers, deployment |

### Visual Documentation (PlantUML Diagrams)

| Diagram | Description | File |
|---------|-------------|------|
| **Database ER Diagram** | Entity-relationship model with all tables, columns, relationships, and constraints | [database-diagram.puml](diagrams/database-diagram.puml) |
| **Component Diagram** | Service components, controllers, services, repositories, and their relationships | [component-diagram.puml](diagrams/component-diagram.puml) |
| **Sequence Diagram** | Progress tracking workflow showing complete request-response flow | [sequence-diagram.puml](diagrams/sequence-diagram.puml) |
| **Architecture Diagram** | SOAWEB-React platform microservices architecture with future integrations | [architecture-diagram.puml](diagrams/architecture-diagram.puml) |
| **Class Diagram** | Domain model with entities, DTOs, enums, services, and repositories | [class-diagram.puml](diagrams/class-diagram.puml) |

---

## 🎯 Documentation by Role

### For Backend Developers

**Getting Started:**
1. [Installation Guide](installation.md) - Setup your environment
2. [README: Project Structure](README.md#4-project-structure) - Understand the codebase
3. [Architecture: Layer Architecture](architecture.md#layer-architecture) - Learn the design
4. [Database: Table Specifications](database.md#table-specifications) - Database schema

**Daily Reference:**
- [API Reference](api-reference.md) - All endpoints
- [Architecture: Design Patterns](architecture.md#design-patterns) - Code patterns
- [Database: Sample Queries](database.md#sample-queries) - Common queries

### For Frontend Developers

**Integration:**
1. [API Reference](api-reference.md) - Complete API documentation
2. [README: API Documentation](README.md#5-api-documentation) - Quick API reference
3. [README: Integration with SOAWEB-React](README.md#11-integration-with-soaweb-react-platform) - Frontend integration guide

**Tools:**
- Swagger UI: http://localhost:8081/swagger-ui.html
- OpenAPI Spec: http://localhost:8081/v3/api-docs

### For DevOps Engineers

**Deployment:**
1. [Installation: Production Deployment](installation.md#production-deployment) - Production setup
2. [Architecture: Scalability](architecture.md#scalability-considerations) - Scaling strategies
3. [Database: Production Considerations](database.md#production-considerations) - Database setup

**Configuration:**
- [Installation: Configuration](installation.md#configuration) - Environment config
- [README: Technologies](README.md#3-technologies-used) - Tech stack

### For Architects

**System Design:**
1. [Architecture](architecture.md) - Complete architecture documentation
2. [Architecture Diagram](diagrams/architecture-diagram.puml) - Visual architecture
3. [README: Architecture Overview](README.md#2-architecture-overview) - High-level design

**Integration:**
- [README: Integration with SOAWEB-React](README.md#11-integration-with-soaweb-react-platform)
- [Architecture: Integration Architecture](architecture.md#integration-architecture)
- [Architecture: Future Architecture](architecture.md#future-architecture)

### For QA Engineers

**Testing:**
1. [README: Testing](README.md#10-testing) - Test structure and execution
2. [Installation: Verification](installation.md#verification) - Verify installation
3. [API Reference: Error Responses](api-reference.md#error-responses) - Error handling

**Test Data:**
- [Database: Sample Data](database.md#table-specifications) - Test data examples
- [API Reference](api-reference.md) - API test cases

### For Product Managers

**Overview:**
1. [README: Introduction](README.md#1-introduction) - Service purpose and features
2. [README: API Documentation](README.md#5-api-documentation) - Feature list (24 endpoints)
3. [README: Changelog](README.md#15-changelog) - Current features and roadmap

---

## 📋 Documentation by Topic

### Getting Started

- **[Installation Guide](installation.md)** - Complete setup instructions
- **[README: Installation & Setup](README.md#8-installation--setup)** - Quick setup
- **[Installation: Troubleshooting](installation.md#troubleshooting)** - Common issues

### API Documentation

- **[API Reference](api-reference.md)** - Complete API reference
- **[README: API Documentation](README.md#5-api-documentation)** - Inline API docs
- **Swagger UI** - http://localhost:8081/swagger-ui.html

### Architecture & Design

- **[Architecture](architecture.md)** - Complete architecture guide
- **[README: Architecture Overview](README.md#2-architecture-overview)** - Quick overview
- **[Component Diagram](diagrams/component-diagram.puml)** - Visual components
- **[Sequence Diagram](diagrams/sequence-diagram.puml)** - Workflow visualization

### Database

- **[Database Documentation](database.md)** - Complete database guide
- **[README: Database Documentation](README.md#6-database-documentation)** - Quick reference
- **[Database ER Diagram](diagrams/database-diagram.puml)** - Visual schema
- **[Class Diagram](diagrams/class-diagram.puml)** - Domain model

### Security

- **[README: Authentication & Security](README.md#7-authentication--security)** - Security overview
- **[Architecture: Security Architecture](architecture.md#security-architecture)** - Security design
- **[API Reference: Authentication](api-reference.md#authentication)** - API security

### Deployment

- **[Installation: Production Deployment](installation.md#production-deployment)** - Production guide
- **[Database: Migration Strategy](database.md#migration-strategy)** - Database migration
- **[Architecture: Scalability](architecture.md#scalability-considerations)** - Scaling

### Testing

- **[README: Testing](README.md#10-testing)** - Testing guide
- **[Installation: Verification](installation.md#verification)** - Verify setup
- **[API Reference: Error Responses](api-reference.md#error-responses)** - Error testing

### Integration

- **[README: Integration with SOAWEB-React](README.md#11-integration-with-soaweb-react-platform)** - Platform integration
- **[Architecture: Integration Architecture](architecture.md#integration-architecture)** - Integration patterns
- **[Architecture Diagram](diagrams/architecture-diagram.puml)** - System architecture

---

## 🔍 Quick Reference

### Endpoints Summary

**Total Endpoints:** 24

| API | Endpoints | Documentation |
|-----|-----------|---------------|
| **Users** | 6 | [API Reference: Users](api-reference.md#users-api) |
| **Establishments** | 5 | [API Reference: Establishments](api-reference.md#establishments-api) |
| **Groups** | 7 | [API Reference: Groups](api-reference.md#groups-api) |
| **Progress** | 3 | [API Reference: Progress](api-reference.md#progress-api) |
| **Alerts** | 3 | [API Reference: Alerts](api-reference.md#alerts-api) |

### Database Tables

**Total Tables:** 6 (5 entities + 1 join table)

| Table | Documentation |
|-------|---------------|
| **users** | [Database: Users Table](database.md#1-users-table) |
| **establishments** | [Database: Establishments Table](database.md#2-establishments-table) |
| **groups** | [Database: Groups Table](database.md#3-groups-table) |
| **progress** | [Database: Progress Table](database.md#4-progress-table) |
| **alerts** | [Database: Alerts Table](database.md#5-alerts-table) |
| **user_groups** | [Database: User_Groups Table](database.md#6-user_groups-table-join-table) |

### Key Technologies

| Technology | Version | Documentation |
|------------|---------|---------------|
| **Java** | 17 | [README: Technologies](README.md#3-technologies-used) |
| **Spring Boot** | 4.1.2 | [README: Technologies](README.md#3-technologies-used) |
| **H2 Database** | In-memory | [Database](database.md#database-configuration) |
| **SpringDoc OpenAPI** | 3.0.3 | [README: Technologies](README.md#3-technologies-used) |
| **Gradle** | 9.8.2 | [README: Technologies](README.md#3-technologies-used) |

### Service Endpoints

| Service | URL | Documentation |
|---------|-----|---------------|
| **API Base** | http://localhost:8081/api | [API Reference](api-reference.md) |
| **Swagger UI** | http://localhost:8081/swagger-ui.html | [README](README.md) |
| **OpenAPI Docs** | http://localhost:8081/v3/api-docs | [README](README.md) |
| **H2 Console** | http://localhost:8081/h2-console | [Database](database.md#access-h2-console) |

---

## 🛠️ Common Tasks

### I want to...

**...set up the development environment**
→ [Installation Guide](installation.md#development-setup)

**...understand the project structure**
→ [README: Project Structure](README.md#4-project-structure)

**...learn the API endpoints**
→ [API Reference](api-reference.md) or [README: API Documentation](README.md#5-api-documentation)

**...understand the database schema**
→ [Database: Table Specifications](database.md#table-specifications)

**...integrate with the frontend**
→ [README: Integration](README.md#11-integration-with-soaweb-react-platform)

**...deploy to production**
→ [Installation: Production Deployment](installation.md#production-deployment)

**...run tests**
→ [README: Testing](README.md#10-testing)

**...understand the architecture**
→ [Architecture](architecture.md) or [README: Architecture](README.md#2-architecture-overview)

**...troubleshoot issues**
→ [Installation: Troubleshooting](installation.md#troubleshooting)

**...view the ER diagram**
→ [Database ER Diagram](diagrams/database-diagram.puml)

**...see the component structure**
→ [Component Diagram](diagrams/component-diagram.puml)

**...understand the data flow**
→ [Sequence Diagram](diagrams/sequence-diagram.puml)

**...see the system architecture**
→ [Architecture Diagram](diagrams/architecture-diagram.puml)

---

## 📝 Documentation Standards

This documentation follows these standards:

- **Markdown Format:** All docs in Markdown for easy reading and version control
- **PlantUML Diagrams:** Visual diagrams as code for easy updates
- **Code Examples:** Real, working examples with proper syntax highlighting
- **Consistent Structure:** All documents follow similar organization
- **Cross-References:** Links between related documentation
- **Version Tracking:** Document version and last updated date

---

## 🔄 Keeping Documentation Updated

When making changes to the codebase:

1. **New Endpoint?** Update [API Reference](api-reference.md) and [README: API Documentation](README.md#5-api-documentation)
2. **Database Change?** Update [Database](database.md), [Database Diagram](diagrams/database-diagram.puml), and [Class Diagram](diagrams/class-diagram.puml)
3. **Architecture Change?** Update [Architecture](architecture.md) and relevant diagrams
4. **New Feature?** Update [README: Features](README.md#1-introduction) and [Changelog](README.md#15-changelog)
5. **Configuration Change?** Update [Installation](installation.md#configuration) and [README](README.md)

---

## 🆘 Need Help?

- **Can't find what you're looking for?** Use Ctrl+F to search within documents
- **Setup issues?** Check [Installation: Troubleshooting](installation.md#troubleshooting)
- **API questions?** See [API Reference](api-reference.md) or Swagger UI
- **Architecture questions?** Review [Architecture](architecture.md) and diagrams

---

## 📊 Documentation Statistics

- **Total Documents:** 6 (5 markdown + 1 index)
- **Total Diagrams:** 5 PlantUML files
- **Total Pages:** ~150+ pages (estimated)
- **Total Endpoints Documented:** 24
- **Total Database Tables:** 6
- **Total Code Examples:** 100+
- **Total Diagrams:** 5

---

## 📅 Documentation Version

**Version:** 1.0  
**Last Updated:** November 11, 2026  
**Maintained By:** SOAWEB-React Development Team

---

**Happy coding! 🚀**
