# Guide de Vérification - ORALIS Mobile

## ✅ Ce qui a été créé

### 1. **Page Certifications** (`src/app/certifications.tsx`)
Une page mobile complète qui reformule le template web `certifications_attestations_oralis` avec :
- ✅ Header avec breadcrumb et titre
- ✅ Boutons d'actions (Référentiel CECRL, Vérification)
- ✅ Carte d'admissibilité avec progression circulaire (88%)
- ✅ Feedback du formateur avec avatar
- ✅ Grille des 6 critères CECRL avec barres de progression
- ✅ Catalogue de 4 certifications (DALF C1, C2, TCF, Cambridge)
- ✅ Modal de vérification d'authenticité
- ✅ Design responsive et adapté mobile
- ✅ Utilisation des couleurs et typographie ORALIS

### 2. **Design System** (`src/constants/oralis-design.ts`)
Tokens de design extraits du template web :
- ✅ 50+ couleurs (primary, surface, semantic)
- ✅ Typographie (12 styles de texte)
- ✅ Espacement (xs à xxl)
- ✅ Radius (bordures arrondies)
- ✅ Shadows (élévations)
- ✅ Helpers (responsive, RGBA)

### 3. **Composants Réutilisables** (`src/components/oralis/`)
Bibliothèque de composants UI ORALIS :
- ✅ **OralisCard** - Cartes avec variants (default, elevated, outlined)
- ✅ **OralisButton** - Boutons avec 5 variants et 3 tailles
- ✅ **OralisBadge** - Badges avec 6 variants sémantiques
- ✅ **OralisProgressBar** - Barres de progression personnalisables

### 4. **Documentation**
- ✅ `ORALIS_MOBILE_DOCUMENTATION.md` - Documentation complète
- ✅ `VERIFICATION_GUIDE.md` - Ce guide

## 🎯 Comparaison Web vs Mobile

| Élément | Web Template | Mobile Version | État |
|---------|--------------|----------------|------|
| Header avec breadcrumb | ✅ Oui | ✅ Oui | ✅ Adapté |
| Titre et description | ✅ Oui | ✅ Oui | ✅ Identique |
| Boutons d'action | ✅ Horizontaux | ✅ Flexwrap | ✅ Responsive |
| Carte admissibilité | ✅ Avec SVG | ✅ Avec gradient | ✅ Simplifié |
| Jauge circulaire 88% | ✅ SVG | ✅ Composant | ✅ Fonctionnel |
| Feedback formateur | ✅ Avec photo | ✅ Avec avatar | ✅ Adapté |
| 6 critères CECRL | ✅ Grid 2x3 | ✅ Liste verticale | ✅ Mobile-first |
| Barres de progression | ✅ CSS | ✅ React Native | ✅ Fonctionnel |
| 4 certifications | ✅ Grid 4 cols | ✅ Liste verticale | ✅ Mobile-first |
| Modal vérification | ✅ Dialog | ✅ Modal RN | ✅ Natif |
| Couleurs | ✅ Tailwind | ✅ Design tokens | ✅ Exact |
| Typographie | ✅ Web fonts | ✅ React Native | ✅ Équivalent |

## 🧪 Comment Tester

### Option 1 : Simulateur iOS
```bash
cd c:\Users\ADEM\Desktop\expo-creator\ORALIS-Mobile
npm run ios
```
Puis naviguer vers `/certifications`

### Option 2 : Emulateur Android
```bash
cd c:\Users\ADEM\Desktop\expo-creator\ORALIS-Mobile
npm run android
```
Puis naviguer vers `/certifications`

### Option 3 : Web (pour aperçu rapide)
```bash
cd c:\Users\ADEM\Desktop\expo-creator\ORALIS-Mobile
npm run web
```
Puis ouvrir http://localhost:8081/certifications

### Option 4 : Expo Go (smartphone réel)
```bash
npm start
```
Scanner le QR code avec Expo Go
Naviguer vers `/certifications`

## 📱 Points de Vérification

### ✅ Visuels
- [ ] Les couleurs correspondent au design ORALIS (violet #4d41df)
- [ ] La typographie est claire et lisible
- [ ] Les espacements sont harmonieux (16px, 24px)
- [ ] Les ombres donnent de la profondeur
- [ ] Les badges ont les bonnes couleurs sémantiques
- [ ] Le gradient décoratif est visible sur la carte d'admissibilité

### ✅ Fonctionnels
- [ ] Le bouton "Vérifier authenticité" ouvre le modal
- [ ] Le modal se ferme correctement
- [ ] Le scroll fonctionne sur toute la page
- [ ] Les boutons "Démarrer simulation" sont cliquables
- [ ] Les badges affichent les bons pourcentages
- [ ] Les barres de progression correspondent aux scores

### ✅ Responsive
- [ ] Sur mobile (320-767px) : tout est en colonne
- [ ] Sur tablette (768px+) : mise en page adaptée
- [ ] Pas de débordement horizontal
- [ ] Tous les textes sont lisibles

### ✅ Données
- [ ] 6 critères CECRL affichés
- [ ] 4 certifications dans le catalogue
- [ ] Scores corrects (88, 82, 84, 92, 86, 89)
- [ ] Éligibilités correctes (94%, 78%, 91%, 85%)

## 🔧 Intégration dans la Navigation

### Ajouter au Layout Principal
Éditer `src/app/_layout.tsx` :

```tsx
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="index" 
        options={{ title: 'Accueil' }} 
      />
      <Tabs.Screen 
        name="certifications" 
        options={{ 
          title: 'Certifications',
          tabBarIcon: ({ color }) => '🎓'
        }} 
      />
      <Tabs.Screen 
        name="explore" 
        options={{ title: 'Explorer' }} 
      />
    </Tabs>
  );
}
```

### Ou via Link
Dans n'importe quel composant :
```tsx
import { Link } from 'expo-router';

<Link href="/certifications">
  Voir mes certifications
</Link>
```

## 🎨 Personnalisation

### Modifier les données
Éditer dans `src/app/certifications.tsx` :

```typescript
// Ligne ~100 - Modifier les certifications
const certifications = [
  {
    id: '1',
    title: 'VOTRE CERTIFICATION',
    // ...
  }
];

// Ligne ~70 - Modifier les critères
const criteriaData = [
  { name: 'VOTRE CRITÈRE', score: 90, required: 75 },
  // ...
];
```

### Changer les couleurs
Éditer `src/constants/oralis-design.ts` :
```typescript
export const OralisColors = {
  primary: '#VOTRE_COULEUR',
  // ...
};
```

## 📊 Métriques d'Adaptation

### Composants Web → Mobile
- **Sidebar fixe** → ❌ Supprimée (navigation native)
- **Header fixe** → ✅ Header ScrollView
- **Grid 12 colonnes** → ✅ Layout vertical
- **SVG Progress** → ✅ Composant RN
- **Tailwind CSS** → ✅ StyleSheet RN
- **Google Fonts** → ✅ Fonts système

### Lignes de Code
- **Template Web** : ~1500 lignes HTML/CSS
- **Version Mobile** : 
  - Page principale : ~930 lignes
  - Design System : ~200 lignes
  - Composants : ~300 lignes
  - **Total** : ~1430 lignes TS/TSX

### Temps de Chargement
- Web : Dépend du réseau
- Mobile : Natif, instantané

## 🚀 Prochaines Pages à Créer

Basées sur les autres templates :
1. ✅ **Certifications** - FAIT
2. ⏳ **Tableau de bord apprenant**
3. ⏳ **Studio de pratique orale**
4. ⏳ **Analyse CECRL détaillée**
5. ⏳ **Simulations d'examen**
6. ⏳ **Suivi de progression**
7. ⏳ **Gestion des groupes (formateur)**
8. ⏳ **Pilotage institutionnel**

## ❓ Dépannage

### Erreur : "expo-linear-gradient not found"
```bash
npm install expo-linear-gradient
npx expo install expo-linear-gradient
```

### Erreur TypeScript dans app-tabs.web.tsx
C'est une erreur pré-existante du template, pas liée à nos modifications.
La page certifications fonctionne malgré cette erreur.

### La page ne s'affiche pas
Vérifier que le fichier est bien dans `src/app/certifications.tsx`
Et que vous naviguez vers `/certifications`

### Fonts non chargées
Les fonts système sont utilisées. Pour les fonts personnalisées :
```bash
npx expo install expo-font @expo-google-fonts/plus-jakarta-sans @expo-google-fonts/inter
```

## 📞 Support

Pour toute question :
1. Consulter `ORALIS_MOBILE_DOCUMENTATION.md`
2. Vérifier les composants dans `src/components/oralis/`
3. Examiner le design system dans `src/constants/oralis-design.ts`

---

**Status** : ✅ Prêt à tester
**Version** : 1.0.0
**Date** : 2025
