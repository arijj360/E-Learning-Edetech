# 🚀 ORALIS Mobile - Quick Start

## ⚡ Démarrage Ultra-Rapide (30 secondes)

### 1. Installer & Lancer
```bash
cd c:\Users\ADEM\Desktop\expo-creator\ORALIS-Mobile
npm start
```

### 2. Choisir une plateforme
```
› Press i │ open iOS simulator
› Press a │ open Android emulator  
› Press w │ open web browser
```

### 3. Naviguer vers la page
Dans l'app, ouvrir l'URL : `/certifications`

---

## 📱 Voir la Page Certifications

### Option A : Modifier index.tsx (Recommandé)
Remplacer le contenu de `src/app/index.tsx` par :

```typescript
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>ORALIS Mobile</Text>
        <Text style={styles.subtitle}>Plateforme d'Expression Orale</Text>
        
        <Link href="/certifications" style={styles.link}>
          <Text style={styles.linkText}>
            🎓 Voir mes Certifications →
          </Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9ff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#121c2a',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#545f73',
    marginBottom: 40,
  },
  link: {
    backgroundColor: '#4d41df',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  linkText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
```

### Option B : URL Directe
Dans le navigateur : `http://localhost:8081/certifications`

### Option C : Via Expo Go
1. Scanner le QR code
2. Une fois l'app chargée, ajouter `/certifications` à l'URL

---

## 🎯 Ce que Vous Verrez

### 📊 Sections Visibles
1. **Header**
   - Breadcrumb navigation
   - Titre "Certifications Officielles"
   - 2 boutons d'action

2. **Carte d'Admissibilité**
   - Jauge circulaire : 88%
   - Feedback du formateur
   - Statistiques de pratique

3. **6 Critères CECRL**
   - Prononciation : 88/100
   - Fluidité : 82/100
   - Intonation : 84/100
   - Vocabulaire : 92/100
   - Morphosyntaxe : 86/100
   - Cohérence : 89/100

4. **4 Certifications**
   - DALF C1 (94% - Prêt)
   - DALF C2 (78% - En préparation)
   - TCF Canada (91% - Prêt)
   - Cambridge C1 (85% - Éligible)

5. **Interactions**
   - Bouton "Vérifier authenticité" → Ouvre modal
   - Boutons "Démarrer simulation" → Prêts pour action
   - Scroll fluide sur toute la page

---

## 🎨 Aperçu Visuel

```
┌─────────────────────────────┐
│  Espace › Certifications    │ ← Breadcrumb
│                             │
│  📚 Certifications          │ ← Titre
│  Officielles...             │
│                             │
│  [📖 Référentiel]           │ ← Actions
│  [🔐 Vérifier]              │
│                             │
├─────────────────────────────┤
│  INDICE D'ADMISSIBILITÉ     │
│  ┌───────────┐              │
│  │    88%    │ ← Jauge      │
│  │ ACCOMPLIE │              │
│  └───────────┘              │
│                             │
│  ✓ Seuil franchi            │
│  32h validées • 14 sims     │
│                             │
│  [MV] Marc V.               │ ← Formateur
│  « Dossier complet... »     │
├─────────────────────────────┤
│  GRILLE CECRL               │
│                             │
│  Prononciation  ████░ 88    │
│  Fluidité       ███░░ 82    │
│  Intonation     ███░░ 84    │
│  Vocabulaire    ████░ 92    │
│  Morphosyntaxe  ████░ 86    │
│  Cohérence      ████░ 89    │
├─────────────────────────────┤
│  CATALOGUE                  │
│                             │
│  ┌─────────────────────┐   │
│  │ 94%    [Prêt]       │   │
│  │ DALF C1             │   │
│  │ 45 min • Validité ∞ │   │
│  │ [▶ Simulation]      │   │
│  │ [Rapport]           │   │
│  └─────────────────────┘   │
│                             │
│  ┌─────────────────────┐   │
│  │ 78%  [Préparation]  │   │
│  │ DALF C2             │   │
│  │ ...                 │   │
│  └─────────────────────┘   │
│                             │
│  [2 autres certifications]  │
└─────────────────────────────┘
```

---

## 🔧 Personnalisation Rapide

### Changer les Couleurs
`src/constants/oralis-design.ts` ligne 8 :
```typescript
primary: '#VOTRE_COULEUR',
```

### Modifier les Scores
`src/app/certifications.tsx` ligne 70 :
```typescript
const criteriaData = [
  { name: 'Prononciation', score: 95, required: 75 },
  // ...
];
```

### Ajouter une Certification
`src/app/certifications.tsx` ligne 100 :
```typescript
{
  id: '5',
  title: 'VOTRE CERTIFICATION',
  eligibility: 88,
  // ...
}
```

---

## ⚙️ Commandes Utiles

```bash
# Démarrer
npm start

# iOS uniquement
npm run ios

# Android uniquement
npm run android

# Web uniquement
npm run web

# Effacer cache
npx expo start --clear

# Réinitialiser
npm run reset-project
```

---

## 🐛 Problèmes Courants

### "expo-linear-gradient not found"
```bash
npm install expo-linear-gradient
```

### La page ne charge pas
Vérifier que vous êtes sur `/certifications` (pas `/certification`)

### Erreur TypeScript
L'erreur dans `app-tabs.web.tsx` est pré-existante, ignorez-la

### Fonts bizarres
Normal, les fonts système sont utilisées. Les fonts personnalisées sont optionnelles.

---

## 📖 Documentation Complète

- **`ORALIS_MOBILE_DOCUMENTATION.md`** - Guide complet
- **`VERIFICATION_GUIDE.md`** - Tests et validation
- **`CREATION_SUMMARY.md`** - Résumé de création

---

## 🎯 Next Steps

1. ✅ Tester la page certifications
2. ⏳ Ajouter les autres pages du template
3. ⏳ Connecter à une API backend
4. ⏳ Implémenter l'authentification
5. ⏳ Ajouter les animations

---

## 💡 Tips

### Performance
- Les images sont optimisées
- Le scroll est natif
- Les animations sont fluides

### Développement
- Hot reload automatique
- TypeScript pour la sécurité
- Composants réutilisables

### Production
- Build iOS : `eas build --platform ios`
- Build Android : `eas build --platform android`
- Deploy Web : `npx expo export:web`

---

## ✨ Fonctionnalités Bonus

### Design System Complet
```typescript
import { OralisCard, OralisButton } from '@/components/oralis';

<OralisCard variant="elevated">
  <OralisButton 
    title="Action" 
    variant="primary"
    onPress={() => {}}
  />
</OralisCard>
```

### Tokens de Design
```typescript
import { OralisColors, OralisSpacing } from '@/constants/oralis-design';

backgroundColor: OralisColors.primary,
padding: OralisSpacing.lg,
```

---

## 🎉 C'est Parti !

```bash
npm start
# puis appuyez sur 'i' pour iOS ou 'a' pour Android
# Naviguez vers /certifications
```

**Profitez de votre app ORALIS Mobile ! 🚀**

---

*Questions ? Consultez ORALIS_MOBILE_DOCUMENTATION.md*
