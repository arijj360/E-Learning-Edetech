# Installation Guide

## Overview

This guide provides detailed instructions for installing, configuring, and running the User Progress Service in different environments.

## Table of Contents

1. [System Requirements](#system-requirements)
2. [Development Setup](#development-setup)
3. [IDE Configuration](#ide-configuration)
4. [Running the Application](#running-the-application)
5. [Configuration](#configuration)
6. [Verification](#verification)
7. [Troubleshooting](#troubleshooting)
8. [Production Deployment](#production-deployment)

---

## System Requirements

### Minimum Requirements

| Component | Requirement |
|-----------|-------------|
| **Operating System** | Windows 10+, macOS 10.15+, Linux (Ubuntu 20.04+) |
| **Java** | OpenJDK 17 or higher |
| **RAM** | 2 GB minimum, 4 GB recommended |
| **Disk Space** | 500 MB for application + dependencies |
| **Network** | Internet connection for dependency download |

### Software Dependencies

- **Java Development Kit (JDK) 17+**
- **Gradle 9.8.2** (included via wrapper)
- **Git** (for cloning repository)
- **IDE** (optional): IntelliJ IDEA, Eclipse, or VS Code

---

## Development Setup

### Step 1: Install Java

#### Windows

**Option A: Download Manually**

1. Download OpenJDK 17 from [Adoptium](https://adoptium.net/)
2. Run the installer
3. Add to PATH:
   ```powershell
   $env:JAVA_HOME = "C:\Program Files\Eclipse Adoptium\jdk-17.0.x"
   $env:Path += ";$env:JAVA_HOME\bin"
   ```

**Option B: Using Chocolatey**

```powershell
choco install openjdk17
```

#### macOS

**Using Homebrew:**

```bash
brew install openjdk@17
```

**Add to shell profile:**

```bash
echo 'export PATH="/usr/local/opt/openjdk@17/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

#### Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install openjdk-17-jdk
```

#### Verify Installation

```bash
java -version
# Expected output:
# openjdk version "17.0.x" 2023-xx-xx
# OpenJDK Runtime Environment (build 17.0.x+x)
```

### Step 2: Clone the Repository

```bash
# Navigate to your projects directory
cd ~/projects  # or C:\Users\YourName\IdeaProjects on Windows

# Clone the repository
git clone <repository-url>
cd user-progress-service
```

### Step 3: Verify Project Structure

```bash
# List project files
ls -la  # Linux/macOS
dir     # Windows

# Expected structure:
# ├── build.gradle
# ├── settings.gradle
# ├── gradlew
# ├── gradlew.bat
# ├── src/
# │   ├── main/
# │   └── test/
# └── docs/
```

### Step 4: Build the Project

```bash
# Linux/macOS
./gradlew build

# Windows
.\gradlew.bat build
```

**First build will:**
- Download Gradle distribution
- Download all dependencies
- Compile source code
- Run tests
- Create JAR file

**Expected Output:**
```
BUILD SUCCESSFUL in 1m 23s
7 actionable tasks: 7 executed
```

**Troubleshooting Build Issues:**

If build fails, try:

```bash
# Clean and rebuild
.\gradlew.bat clean build --refresh-dependencies

# Or delete Gradle cache
rm -rf ~/.gradle/caches  # Linux/macOS
Remove-Item -Recurse -Force ~\.gradle\caches  # Windows
```

---

## IDE Configuration

### IntelliJ IDEA (Recommended)

#### 1. Open Project

1. Launch IntelliJ IDEA
2. **File → Open**
3. Select `user-progress-service` folder
4. Click **OK**

#### 2. Configure JDK

1. **File → Project Structure → Project**
2. Set **Project SDK:** to Java 17
3. Set **Language level:** to 17
4. Click **Apply**

#### 3. Import Gradle Project

IntelliJ should auto-detect and import the Gradle project.

If not:
1. Right-click `build.gradle`
2. Select **Import Gradle Project**
3. Use **Gradle wrapper**
4. Click **OK**

#### 4. Enable Annotation Processing

1. **File → Settings → Build, Execution, Deployment → Compiler → Annotation Processors**
2. Check **Enable annotation processing**
3. Click **Apply**

#### 5. Install Lombok Plugin

1. **File → Settings → Plugins**
2. Search for "Lombok"
3. Click **Install**
4. Restart IDE

#### 6. Run Configuration

1. Open `UserProgressServiceApplication.java`
2. Right-click on the class
3. Select **Run 'UserProgressServiceApplication'**

Or create a configuration:
1. **Run → Edit Configurations**
2. Click **+** → **Spring Boot**
3. Set:
   - **Name:** User Progress Service
   - **Main class:** `com.oralis.userprogress.UserProgressServiceApplication`
   - **Module:** `user-progress-service.main`
4. Click **Apply**

### Visual Studio Code

#### 1. Install Extensions

```bash
code --install-extension vscjava.vscode-java-pack
code --install-extension vscjava.vscode-spring-boot-dashboard
code --install-extension gabrielbb.vscode-lombok
```

Or via UI:
1. Open Extensions (Ctrl+Shift+X)
2. Install:
   - Extension Pack for Java
   - Spring Boot Extension Pack
   - Lombok Annotations Support

#### 2. Open Project

1. **File → Open Folder**
2. Select `user-progress-service`

#### 3. Configure Java

1. Open Command Palette (Ctrl+Shift+P)
2. Type: **Java: Configure Java Runtime**
3. Set Java 17 as default

#### 4. Build and Run

1. Open `UserProgressServiceApplication.java`
2. Click **Run** above the `main` method

Or use terminal:
```bash
.\gradlew.bat bootRun
```

### Eclipse

#### 1. Import Project

1. **File → Import → Gradle → Existing Gradle Project**
2. Select `user-progress-service` folder
3. Use **Gradle wrapper**
4. Click **Finish**

#### 2. Install Lombok

1. Download `lombok.jar` from [projectlombok.org](https://projectlombok.org/)
2. Run: `java -jar lombok.jar`
3. Select Eclipse installation
4. Click **Install/Update**
5. Restart Eclipse

#### 3. Run Application

1. Right-click on `UserProgressServiceApplication.java`
2. **Run As → Spring Boot App**

---

## Running the Application

### Method 1: Using Gradle (Recommended)

```bash
# Linux/macOS
./gradlew bootRun

# Windows
.\gradlew.bat bootRun
```

**Advantages:**
- Automatic dependency resolution
- No need to build JAR first
- Hot reload support (with Spring DevTools)

### Method 2: Using JAR File

```bash
# Build JAR first
.\gradlew.bat bootJar

# Run JAR
java -jar build\libs\user-progress-service-0.0.1-SNAPSHOT.jar
```

**Advantages:**
- Portable executable
- Same as production deployment
- No Gradle needed to run

### Method 3: Using IDE

See [IDE Configuration](#ide-configuration) section above.

### Method 4: Docker (Optional)

Create `Dockerfile`:

```dockerfile
FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

COPY build/libs/user-progress-service-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8081

ENTRYPOINT ["java", "-jar", "app.jar"]
```

Build and run:

```bash
# Build application
.\gradlew.bat bootJar

# Build Docker image
docker build -t user-progress-service:latest .

# Run container
docker run -p 8081:8081 user-progress-service:latest
```

---

## Configuration

### Application Configuration

**File:** `src/main/resources/application.yml`

```yaml
server:
  port: 8081

spring:
  application:
    name: user-progress-service
    
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
    open-in-view: false
        
  h2:
    console:
      enabled: true
      path: /h2-console

springdoc:
  api-docs:
    path: /v3/api-docs
  swagger-ui:
    path: /swagger-ui.html
```

### Environment-Specific Configuration

#### Development Profile

Create `src/main/resources/application-dev.yml`:

```yaml
spring:
  jpa:
    show-sql: true
  h2:
    console:
      enabled: true

logging:
  level:
    com.oralis.userprogress: DEBUG
    org.springframework: INFO
```

Run with:
```bash
.\gradlew.bat bootRun --args='--spring.profiles.active=dev'
```

#### Production Profile

Create `src/main/resources/application-prod.yml`:

```yaml
server:
  port: ${PORT:8081}

spring:
  datasource:
    url: ${DB_URL}
    username: ${DB_USERNAME}
    password: ${DB_PASSWORD}
    driver-class-name: org.postgresql.Driver
    
  jpa:
    hibernate:
      ddl-auto: validate
    show-sql: false
    
  h2:
    console:
      enabled: false

logging:
  level:
    com.oralis.userprogress: INFO
    org.springframework: WARN
```

Run with:
```bash
java -jar app.jar --spring.profiles.active=prod
```

### Environment Variables

Create `.env` file (add to `.gitignore`):

```properties
# Server Configuration
SERVER_PORT=8081

# Database Configuration
DB_URL=jdbc:h2:mem:userprogressdb
DB_USERNAME=sa
DB_PASSWORD=

# Application Configuration
SPRING_PROFILES_ACTIVE=dev

# CORS Configuration
ALLOWED_ORIGINS=http://localhost:5173
```

**Load environment variables:**

```bash
# Linux/macOS
export $(cat .env | xargs)
./gradlew bootRun

# Windows PowerShell
Get-Content .env | ForEach-Object {
    $name, $value = $_.split('=')
    Set-Item -Path "env:$name" -Value $value
}
.\gradlew.bat bootRun
```

### Change Port

**Method 1: application.yml**
```yaml
server:
  port: 8082
```

**Method 2: Command Line**
```bash
.\gradlew.bat bootRun --args='--server.port=8082'
```

**Method 3: Environment Variable**
```bash
$env:SERVER_PORT=8082
.\gradlew.bat bootRun
```

---

## Verification

### 1. Check Application Started

**Console Output:**

```
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::               (v4.1.2)

...
Started UserProgressServiceApplication in 3.456 seconds
```

### 2. Access Endpoints

#### Health Check

```bash
# Test basic connectivity
curl http://localhost:8081/api/users
```

**Expected:** `[]` (empty array on first run)

#### Swagger UI

Open browser: http://localhost:8081/swagger-ui.html

**Expected:** Interactive API documentation page

#### H2 Console

Open browser: http://localhost:8081/h2-console

**Login with:**
- JDBC URL: `jdbc:h2:mem:userprogressdb`
- Username: `sa`
- Password: *(empty)*

### 3. Test API Endpoint

**Create a test user:**

```bash
curl -X POST http://localhost:8081/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123",
    "firstName": "Test",
    "lastName": "User",
    "role": "STUDENT"
  }'
```

**Expected Response:**
```json
{
  "id": 1,
  "email": "test@example.com",
  "firstName": "Test",
  "lastName": "User",
  "role": "STUDENT",
  "createdAt": "2024-11-11T14:30:00"
}
```

**Retrieve user:**

```bash
curl http://localhost:8081/api/users/1
```

### 4. Run Tests

```bash
.\gradlew.bat test

# View test report
start build\reports\tests\test\index.html  # Windows
open build/reports/tests/test/index.html   # macOS
```

---

## Troubleshooting

### Issue 1: Port Already in Use

**Error:**
```
Web server failed to start. Port 8081 was already in use.
```

**Solution A: Find and Kill Process**

```powershell
# Windows
netstat -ano | findstr :8081
taskkill /PID <PID> /F
```

```bash
# Linux/macOS
lsof -i :8081
kill -9 <PID>
```

**Solution B: Change Port**

```bash
.\gradlew.bat bootRun --args='--server.port=8082'
```

### Issue 2: Java Version Mismatch

**Error:**
```
Unsupported class file major version 61
```

**Solution:**

```bash
# Check Java version
java -version

# Should be 17 or higher
# If not, install Java 17 and set JAVA_HOME
```

### Issue 3: Gradle Build Fails

**Error:**
```
Could not resolve dependencies
```

**Solution:**

```bash
# Clear Gradle cache
.\gradlew.bat clean --refresh-dependencies

# Or delete cache directory
Remove-Item -Recurse -Force ~\.gradle\caches
.\gradlew.bat build
```

### Issue 4: H2 Console Not Accessible

**Error:**
```
404 Not Found - /h2-console
```

**Solution:**

Verify in `application.yml`:

```yaml
spring:
  h2:
    console:
      enabled: true
```

Restart application.

### Issue 5: Lombok Not Working

**Error:**
```
Cannot resolve symbol 'builder'
```

**Solution:**

**IntelliJ IDEA:**
1. Install Lombok plugin
2. Enable annotation processing
3. Invalidate caches: **File → Invalidate Caches / Restart**

**Eclipse:**
1. Install Lombok via `lombok.jar`
2. Restart Eclipse

### Issue 6: Out of Memory

**Error:**
```
java.lang.OutOfMemoryError: Java heap space
```

**Solution:**

Increase heap size:

```bash
# Set JVM options
$env:JAVA_OPTS="-Xmx2g -Xms512m"
.\gradlew.bat bootRun

# Or in gradle.properties
org.gradle.jvmargs=-Xmx2g -Xms512m
```

---

## Production Deployment

### Prerequisites

- **Java 17 Runtime** (JRE sufficient, JDK not required)
- **PostgreSQL Database** (recommended)
- **Reverse Proxy** (Nginx/Apache)
- **Process Manager** (systemd/PM2)

### Step 1: Build Production JAR

```bash
.\gradlew.bat clean bootJar -Pprod
```

Output: `build/libs/user-progress-service-0.0.1-SNAPSHOT.jar`

### Step 2: Setup Database

```sql
-- Create database
CREATE DATABASE userprogressdb;

-- Create user
CREATE USER upservice WITH ENCRYPTED PASSWORD 'your_secure_password';

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE userprogressdb TO upservice;
```

### Step 3: Configure Environment

Create `/etc/user-progress-service/.env`:

```properties
SPRING_PROFILES_ACTIVE=prod
DB_URL=jdbc:postgresql://localhost:5432/userprogressdb
DB_USERNAME=upservice
DB_PASSWORD=your_secure_password
SERVER_PORT=8081
ALLOWED_ORIGINS=https://app.soaweb.com
```

### Step 4: Create Systemd Service

Create `/etc/systemd/system/user-progress-service.service`:

```ini
[Unit]
Description=User Progress Service
After=network.target postgresql.service

[Service]
Type=simple
User=appuser
Group=appuser
WorkingDirectory=/opt/user-progress-service
EnvironmentFile=/etc/user-progress-service/.env
ExecStart=/usr/bin/java -jar /opt/user-progress-service/user-progress-service.jar
Restart=always
RestartSec=10
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
```

### Step 5: Deploy

```bash
# Create application directory
sudo mkdir -p /opt/user-progress-service
sudo mkdir -p /etc/user-progress-service

# Copy JAR file
sudo cp build/libs/user-progress-service-0.0.1-SNAPSHOT.jar \
        /opt/user-progress-service/user-progress-service.jar

# Copy environment file
sudo cp .env.prod /etc/user-progress-service/.env

# Set permissions
sudo chown -R appuser:appuser /opt/user-progress-service
sudo chmod 600 /etc/user-progress-service/.env

# Enable and start service
sudo systemctl daemon-reload
sudo systemctl enable user-progress-service
sudo systemctl start user-progress-service

# Check status
sudo systemctl status user-progress-service

# View logs
sudo journalctl -u user-progress-service -f
```

### Step 6: Configure Nginx

Create `/etc/nginx/sites-available/user-progress-service`:

```nginx
upstream user_progress_service {
    server localhost:8081;
}

server {
    listen 80;
    server_name api.soaweb.com;

    location /api/ {
        proxy_pass http://user_progress_service;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable and restart:

```bash
sudo ln -s /etc/nginx/sites-available/user-progress-service \
           /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Step 7: SSL Certificate (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d api.soaweb.com
```

---

## Next Steps

- [API Documentation](README.md#5-api-documentation)
- [Architecture Overview](architecture.md)
- [Database Schema](database.md)
- [Testing Guide](README.md#10-testing)

---

**Document Version:** 1.0  
**Last Updated:** November 11, 2026
