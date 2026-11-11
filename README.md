 
# Plateforme d'entraînement et d'évaluation de l'expression orale

## Présentation du projet

Ce projet consiste à développer une plateforme numérique permettant aux apprenants de s'entraîner et d'améliorer leur expression orale en français et en anglais.

La plateforme propose des fonctionnalités d'enregistrement vocal, de transcription automatique, d'analyse de la prononciation et de la fluidité, ainsi que des retours personnalisés pour aider les apprenants à progresser.

Elle permet également de simuler des examens oraux et de suivre l'évolution des compétences linguistiques selon les niveaux du CECRL, de B1 à C2.

## Objectifs du projet

- Améliorer les compétences en expression orale en français et en anglais.
- Analyser automatiquement les enregistrements vocaux.
- Fournir des corrections et des recommandations personnalisées.
- Permettre la simulation d'examens oraux.
- Suivre la progression des apprenants.
- Préparer les apprenants aux certifications linguistiques.

## Acteurs de la plateforme

La plateforme comporte trois principaux acteurs :

- **Apprenant :** s'entraîne, réalise des simulations d'examens et consulte ses résultats.
- **Formateur :** suit les apprenants, consulte leurs performances et leur fournit des retours.
- **Établissement :** gère les apprenants, les groupes et le suivi global des performances.

## Fonctionnalités principales

### 1. Gestion des utilisateurs et de la progression
- Gestion des comptes et des rôles.
- Gestion des établissements et des groupes.
- Définition des niveaux linguistiques cibles.
- Suivi de la progression des apprenants.
- Gestion des alertes.

### 2. Gestion des contenus d'examen
- Consultation des sujets d'examen.
- Sélection aléatoire des sujets.
- Gestion des grilles d'évaluation.
- Gestion des critères et des descripteurs.

### 3. Gestion des enregistrements audio
- Enregistrement et importation des fichiers audio.
- Stockage des métadonnées.
- Transcription automatique des enregistrements.

### 4. Simulation des examens
- Simulation d'examens oraux chronométrés.
- Attribution aléatoire des sujets.
- Interaction avec un examinateur virtuel.
- Estimation du score obtenu.

### 5. Gestion des feedbacks
- Affichage des corrections.
- Proposition d'exercices personnalisés.
- Suivi des retours des formateurs.

### 6. Gestion des certifications
- Catalogue des certifications linguistiques.
- Gestion des formats d'examen.
- Génération des attestations.

### 7. Analyse avancée de la parole
- Analyse de la prononciation.
- Évaluation de la fluidité.
- Analyse de l'intonation.
- Détection des pauses et des hésitations.
- Analyse des phonèmes et des mots.

## Architecture technique

Le projet adopte une architecture basée sur les microservices afin de séparer les différentes fonctionnalités en services indépendants.

### Microservices

| Microservice | Responsabilité | Base de données |
|---|---|---|
| user-progress-service | Gestion des utilisateurs et de leur progression | H2 |
| exam-content-service | Gestion des sujets et des grilles d'évaluation | H2 |
| recording-service | Gestion des enregistrements et des transcriptions | H2 |
| simulation-service | Simulation des examens oraux | MySQL |
| feedback-service | Gestion des corrections et des retours | MySQL |
| certification-service | Gestion des certifications | MySQL |
| analysis-service | Analyse avancée de la parole | MongoDB |

### Technologies utilisées

- **Backend :** Java, Spring Boot
- **Architecture microservices :** Spring Cloud
- **API Gateway :** Spring Cloud Gateway
- **Découverte des services :** Eureka
- **Authentification et autorisation :** Keycloak
- **Communication synchrone :** OpenFeign
- **Communication asynchrone :** RabbitMQ ou Kafka (choix à finaliser)
- **Bases de données :** H2, MySQL, MongoDB
- **Conteneurisation :** Docker et Docker Compose
- **Documentation API :** Swagger / OpenAPI
- **Reconnaissance vocale :** Whisper ou Vosk (choix à finaliser)

## Structure du projet

La structure proposée pour le dépôt est la suivante :

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

## Installation et lancement

### Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- Java JDK
- Maven
- Docker et Docker Compose
- Git
- Les outils nécessaires aux bases de données utilisées

### Cloner le projet

```bash
git clone <URL_DU_DEPOT>
cd oral-platform
```

### Compiler le projet

```bash
mvn clean install
```

### Lancer les services avec Docker

```bash
docker compose up --build
```

*Les commandes et les paramètres de lancement définitifs dépendront de la configuration réelle de chaque microservice.*

## Gestion des branches Git

Le développement est organisé autour de branches afin de faciliter le travail collaboratif.

- `main` : version stable du projet.
- `develop` : branche principale de développement.
- `feature/...` : branches dédiées aux nouvelles fonctionnalités.
- Les modifications sont intégrées à travers des Pull Requests.

## Sécurité et confidentialité

Les enregistrements vocaux peuvent contenir des données personnelles ou biométriques. Leur utilisation doit donc respecter les principes de confidentialité et de protection des données.

Pour les tests, il est recommandé d'utiliser des jeux de données publics autorisés ou des enregistrements synthétiques, avec le consentement écrit des personnes concernées lorsque nécessaire.

## Équipe de développement

**Projet académique :** MT-41 / AWD 2026-2027

**Équipe :** 6 étudiants

Chaque étudiant prend en charge le développement d'un microservice, avec un service d'analyse avancée partagé entre les membres de l'équipe.

## Conclusion

Cette plateforme vise à proposer une solution intelligente et interactive pour l'apprentissage et l'évaluation de l'expression orale. Grâce à son architecture microservices et à l'intégration des technologies d'analyse vocale, elle accompagne les apprenants dans leur progression et leur préparation aux examens de certification linguistique.
