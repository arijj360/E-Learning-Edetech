# ORALIS Mobile - Documentation

## 📱 Vue d'ensemble

Ce projet est une reformulation mobile de l'application web ORALIS, une plateforme d'apprentissage linguistique axée sur l'expression orale et la préparation aux certifications (DALF, DELF, TCF, Cambridge, IELTS).

## 🎨 Système de Design

### Couleurs
Le système de couleurs ORALIS suit le Material Design 3 avec une palette personnalisée :

- **Primary Violet** (`#4d41df`) - Actions principales, boutons CTA
- **Surface** (`#f8f9ff`) - Fond principal de l'application
- **Surface Containers** - Hiérarchie de surfaces pour la profondeur
- **Semantic Colors** - Success, Warning, Error pour les états

### Typographie
- **Headlines** : Plus Jakarta Sans (600-700) - Titres et sections
- **Body** : Inter (400) - Contenu principal et transcriptions
- **Labels** : Plus Jakarta Sans (600-700) - Badges, boutons, UI

### Espacement
Système basé sur des multiples de 4px/8px :
- `xs`: 4px
- `sm`: 8px
- `md`: 16px
- `lg`: 24px
- `xl`: 32px
- `xxl`: 40px

## 📂 Structure du Projet

```
src/
├── app/
│   ├── index.tsx                 # Page d'accueil
│   ├── certifications.tsx        # Page des certifications
│   └── _layout.tsx              # Layout principal
├── components/
│   ├── oralis/                  # Composants ORALIS Design System
│   │   ├── Card.tsx             # Composant carte
│   │   ├── Button.tsx           # Composant bouton
│   │   ├── Badge.tsx            # Composant badge
│   │   ├── ProgressBar.tsx      # Barre de progression
│   │   └── index.ts             # Export central
│   └── ...                      # Autres composants
├── constants/
│   ├── oralis-design.ts         # Tokens de design
│   └── theme.ts                 # Thème de l'application
└── hooks/                       # Hooks React personnalisés
```

## 🚀 Fonctionnalités Implémentées

### Page Certifications (`src/app/certifications.tsx`)

#### 1. **Header & Breadcrumb**
- Navigation contextuelle
- Titre de section
- Description informative

#### 2. **Actions Rapides**
- Consultation du référentiel CECRL
- Vérification d'authenticité des attestations

#### 3. **Carte d'Admissibilité**
- Indicateur circulaire de progression (88%)
- Gradient de fond décoratif
- Badge de session
- Détails de validation
- Feedback du formateur avec avatar
- Statistiques de pratique

#### 4. **Grille d'Évaluation CECRL (6 Critères)**
Affichage des 6 critères d'évaluation :
1. Prononciation & Articulation
2. Fluidité & Débit Vocal
3. Intonation & Prosodie
4. Vocabulaire & Registre
5. Morphosyntaxe & Subjonctif
6. Cohérence & Stratégie

Chaque critère affiche :
- Score actuel / 100
- Barre de progression visuelle
- Seuil requis
- État de validation

#### 5. **Catalogue des Certifications**
Cartes pour chaque certification disponible :
- **DALF C1** - Éligibilité 94% (Prêt)
- **DALF C2** - Éligibilité 78% (En préparation)
- **TCF Canada** - Éligibilité 91% (Prêt)
- **Cambridge C1** - Éligibilité 85% (Éligible)

Chaque carte contient :
- Badge d'éligibilité
- Badge de statut (coloré selon l'état)
- Informations sur l'organisation
- Durée de l'examen
- Validité du diplôme
- Actions : Simulation dédiée et Rapport d'admissibilité

#### 6. **Modal de Vérification**
Interface modale pour vérifier l'authenticité des attestations

## 🎨 Composants Réutilisables

### OralisCard
```tsx
<OralisCard variant="elevated" padding="lg">
  <Text>Contenu de la carte</Text>
</OralisCard>
```

Props:
- `variant`: 'default' | 'elevated' | 'outlined'
- `padding`: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
- `style`: ViewStyle personnalisé

### OralisButton
```tsx
<OralisButton 
  title="Bouton"
  onPress={() => {}}
  variant="primary"
  size="md"
  fullWidth
/>
```

Props:
- `variant`: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success'
- `size`: 'sm' | 'md' | 'lg'
- `fullWidth`: boolean
- `disabled`: boolean
- `icon`: string (emoji ou caractère)

### OralisBadge
```tsx
<OralisBadge 
  label="CECRL C1"
  variant="primary"
  size="md"
/>
```

Props:
- `variant`: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
- `size`: 'sm' | 'md'

### OralisProgressBar
```tsx
<OralisProgressBar 
  progress={88}
  height={6}
  color={OralisColors.primary}
/>
```

Props:
- `progress`: 0-100
- `height`: nombre (défaut: 6)
- `color`: couleur personnalisée
- `backgroundColor`: couleur de fond

## 📱 Responsive Design

L'application est conçue pour fonctionner sur :
- **Mobile** : Interface optimisée tactile
- **Tablette** : Disposition adaptative
- **Web** : Support via React Native Web

### Breakpoints
- Mobile : 0-767px
- Tablette : 768-1023px
- Desktop : 1024px+

## 🎯 Différences Web vs Mobile

### Adaptations Mobile
1. **Navigation** : Suppression de la sidebar fixe, utilisation de navigation native
2. **Layout** : Grille unique colonne au lieu de multi-colonnes
3. **Interactions** : Optimisées pour le tactile
4. **Typographie** : Tailles ajustées pour les petits écrans
5. **Cartes** : Empilées verticalement
6. **Modales** : Plein écran sur mobile

### Conservé du Web
1. **Palette de couleurs** : Identique
2. **Hiérarchie visuelle** : Maintenue
3. **Composants** : Même structure logique
4. **Données** : Même modèle de données

## 🔧 Installation & Utilisation

### Prérequis
```bash
npm install
```

### Démarrage
```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

### Navigation vers la page Certifications
Dans votre layout ou navigation, ajoutez :
```tsx
import { Link } from 'expo-router';

<Link href="/certifications">Certifications</Link>
```

## 🎨 Personnalisation

### Modifier les couleurs
Éditer `src/constants/oralis-design.ts` :
```typescript
export const OralisColors = {
  primary: '#4d41df', // Votre couleur
  // ...
};
```

### Ajouter un nouveau composant
1. Créer le fichier dans `src/components/oralis/`
2. Exporter depuis `src/components/oralis/index.ts`
3. Utiliser les tokens de design d'ORALIS

## 📊 Données & États

### Format des Certifications
```typescript
{
  id: string;
  title: string;
  organization: string;
  description: string;
  eligibility: number; // 0-100
  status: 'ready' | 'preparing' | 'eligible';
  statusText: string;
  duration: string;
  language: string;
  statusColor: string;
  statusBg: string;
}
```

### Format des Critères CECRL
```typescript
{
  name: string;
  score: number; // 0-100
  required: number; // Seuil requis
}
```

## 🚀 Prochaines Étapes

### Fonctionnalités à Ajouter
1. **Authentification** : Connexion utilisateur
2. **Enregistrement Audio** : Studio de pratique orale
3. **Analyses Détaillées** : Visualisations CECRL
4. **Simulations** : Mode examen interactif
5. **Progression** : Graphiques de suivi
6. **Notifications** : Rappels et alertes
7. **Téléchargement** : Export des attestations PDF
8. **Multi-langue** : FR/EN support
9. **Mode Sombre** : Thème alternatif
10. **Offline** : Fonctionnement hors ligne

### Améliorations UI/UX
1. Animations de transition
2. Skeleton loaders
3. Pull-to-refresh
4. Gestures avancés
5. Haptic feedback
6. Accessibility (a11y)

## 🧪 Tests

### Tests recommandés
```bash
# Unit tests
npm test

# E2E tests
npm run test:e2e
```

## 📝 Contribution

Pour ajouter de nouvelles pages basées sur les templates web :
1. Analyser le template HTML source
2. Extraire les composants et la structure
3. Adapter pour React Native
4. Utiliser les composants ORALIS existants
5. Respecter le design system
6. Tester sur mobile et tablette

## 📄 Licence

Projet ORALIS - Tous droits réservés

---

**Créé avec** : React Native, Expo, TypeScript
**Design** : Material Design 3 + ORALIS Design Language
**Version** : 1.0.0
