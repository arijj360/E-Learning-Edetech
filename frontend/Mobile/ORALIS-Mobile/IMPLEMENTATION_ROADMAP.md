# 🗺️ ORALIS Mobile - Roadmap d'Implémentation Complète

## 📊 État d'Avancement

### ✅ Complété (3/17 pages)
1. ✅ **Page de connexion** (`auth/login.tsx`) - 100% fidèle au design web
2. ✅ **Page certifications** (`certifications.tsx`) - Design complet
3. ✅ **Structure de navigation** (`_layout.tsx`, `(learner)/_layout.tsx`)

### ⏳ À Implémenter (14/17 pages)

---

## 📋 PAGES AUTHENTICATION (3 pages)

### 1. ✅ Connexion (FAIT)
**Fichier:** `src/app/auth/login.tsx`
- Design sombre avec gradient
- Logo ORALIS avec critères CECRL
- Formulaire email/password
- SSO button
- Testimonial
- Footer RGPD

### 2. ⏳ Inscription Multi-Rôles
**Fichier:** `src/app/auth/register.tsx`
**Template source:** `templat/inscription_multi_r_les_oralis/code.html`

**Éléments à reproduire:**
- Sélection du rôle (Apprenant/Formateur/Établissement)
- Formulaire multi-étapes
- Champs: Nom, Prénom, Email, Mot de passe
- Choix langue et niveau CECRL
- Acceptation CGU et RGPD
- Bouton "Créer mon compte"

### 3. ⏳ Mot de Passe Oublié  
**Fichier:** `src/app/auth/forgot-password.tsx`
**Template source:** `templat/mot_de_passe_oubli_oralis/code.html`

**Éléments:**
- Email input
- Instructions de réinitialisation
- Lien retour connexion

---

## 🎓 PAGES APPRENANT (7 pages)

### 4. ⏳ Tableau de Bord Apprenant
**Fichier:** `src/app/(learner)/dashboard.tsx`
**Template source:** `templat/tableau_de_bord_apprenant_oralis/code.html`

**Sections principales:**
1. **Hero Banner** avec gradient
   - Nom utilisateur: "Bonjour, Camille Laurent"
   - Badge niveau actuel: C1 Acquis
   - Badge objectif: DALF C2
   - Compteur échéance: 45 jours
   - Progress dial: 78% préparation
   - Bouton CTA: "Lancer une simulation"

2. **Alerte Formateur**
   - Avatar formateur Marc V.
   - Feedback textuel
   - Badge "Validé formateur"
   - Bouton "Écouter l'annotation vocale"

3. **4 Cartes Stats** (Grid 2x2 mobile)
   - **Entraînements:** 42 sessions (+14%)
   - **Score Global:** 86/100 (Excellent)
   - **Temps de parole:** 18h 45m cumulées
   - **Maîtrise CECRL:** C1+ (Cible C2)

4. **6 Critères CECRL** (Liste verticale)
   - Prononciation: 88%
   - Fluidité: 82%
   - Intonation: 84%
   - Vocabulaire: 91%
   - Grammaire: 89%
   - Cohérence: 83%

5. **Activité Vocale Hebdomadaire**
   - Graphique en barres (7 jours)
   - Temps de parole quotidien
   - Objectif: 25 min/jour

6. **Dernières Sessions**
   - Liste des 3 derniers enregistrements
   - Date, durée, score

7. **Prochains Événements**
   - Simulations planifiées
   - Dates d'examens

**Navigation mobile:**
- Header fixe avec role switcher
- Boutons langue FR/EN
- Notifications bell
- Avatar profil

### 5. ⏳ Studio de Pratique Orale
**Fichier:** `src/app/(learner)/studio.tsx`
**Template source:** `templat/studio_de_pratique_orale_enregistrement_oralis/code.html`

**Éléments ultra-importants:**
1. **Barre de Configuration**
   - Langue sélecteur
   - Niveau CECRL (B1/B2/C1/C2)
   - Format dropdown
   - Micro status

2. **Subject Prompt Card**
   - Badge "Épreuve DALF C1"
   - Titre du sujet
   - Description complète
   - Timers (préparation + durée)
   - 3 directives (Structure, Lexique, Prosodie)

3. **Recording Console** (fond sombre)
   - Header avec status "Enregistrement en direct"
   - Badge niveau audio: 48kHz
   - VU Meter animé
   - **Waveform Visualizer** (barres animées)
   - Scrubber timeline
   - Timer live: 01:42 / 05:00

4. **Contrôles Audio**
   - Bouton Pause (rond)
   - **Bouton Stop** (rouge, pulsant, central, gros)
   - Bouton Finish (valider)
   - Playback speed (1.0x, 1.25x)
   - Download button

5. **Transcription Live**
   - Boîte texte en temps réel
   - Badge confiance: 94.8%
   - Texte défilant

6. **Actions Finales**
   - "Recommencer l'enregistrement"
   - "Sauvegarder en brouillon"
   - **"Soumettre pour Analyse IA"** (CTA principal)

**UI Mobile Adaptation:**
- Stack vertical
- Waveform horizontal responsive
- Boutons tactiles larges
- Safe areas iOS/Android

### 6. ⏳ Analyse Résultats CECRL
**Fichier:** `src/app/(learner)/analysis.tsx`
**Template source:** `templat/r_sultats_d_analyse_d_taill_e_cecrl_oralis/code.html`

**Sections:**
1. Sélecteur d'enregistrement
2. Score global avec jauge
3. **6 Critères détaillés** avec:
   - Graphique radar
   - Score par critère
   - Feedback textuel
   - Points forts/améliorations
4. Analyse phonétique IPA
5. Transcription complète
6. Recommandations AI

### 7. ⏳ Feedback & Exercices
**Fichier:** `src/app/(learner)/feedback.tsx`
**Template source:** `templat/feedback_exercices_oralis/code.html`

**Contenu:**
- Liste des feedbacks reçus
- Exercices suggérés par l'IA
- Filtres par critère
- Exercices pratiques ciblés

### 8. ⏳ Simulations d'Examen
**Fichier:** `src/app/(learner)/simulations.tsx`
**Template source:** `templat/simulations_d_examen_oral_cecrl_oralis/code.html`

**Éléments:**
- Catalogue simulations (DALF, TCF, Cambridge, IELTS)
- Timer strict
- Conditions d'examen réelles
- Historique des simulations
- Scores obtenus

### 9. ✅ Certifications & Attestations (FAIT)
**Fichier:** `src/app/certifications.tsx`
- Déjà implémentée

### 10. ⏳ Suivi & Progression
**Fichier:** `src/app/(learner)/progress.tsx`
**Template source:** `templat/suivi_progression_oralis/code.html`

**Visualisations:**
- Graphique évolution temporelle
- Courbes par critère
- Milestones atteints
- Statistiques cumulées
- Objectifs vs réalisé

---

## 👨‍🏫 PAGES FORMATEUR (3 pages)

### 11. ⏳ Tableau de Bord Formateur
**Fichier:** `src/app/(trainer)/dashboard.tsx`
**Template source:** `templat/tableau_de_bord_formateur_oralis/code.html`

**Sections:**
- Vue d'ensemble des apprenants
- Feedbacks en attente
- Statistiques de groupe
- Performances moyennes

### 12. ⏳ Validation Feedbacks
**Fichier:** `src/app/(trainer)/validation.tsx`
**Template source:** `templat/validation_des_feedbacks_formateur_oralis/code.html`

**Workflow:**
- Queue des enregistrements
- Player audio
- Formulaire évaluation
- Validation/Révision

### 13. ⏳ Gestion des Groupes
**Fichier:** `src/app/(trainer)/groups.tsx`
**Template source:** `templat/gestion_des_groupes_oralis/code.html`

**Fonctions:**
- Liste groupes/classes
- Ajout/retrait apprenants
- Assignation exercices
- Suivi collectif

---

## 🏢 PAGES INSTITUTION (1 page)

### 14. ⏳ Vue Analytiques Institution
**Fichier:** `src/app/(institution)/analytics.tsx`
**Template source:** `templat/vue_d_ensemble_analytiques_institution_oralis/code.html`

**KPIs:**
- Nombre total utilisateurs
- Taux de réussite
- Temps d'utilisation
- Statistiques par langue/niveau
- Graphiques avancés

---

## 👤 PAGES COMPTE (2 pages)

### 15. ⏳ Profil Utilisateur
**Fichier:** `src/app/profile.tsx`
**Template source:** `templat/profil_utilisateur_oralis/code.html`

**Informations:**
- Photo de profil
- Nom, prénom, email
- Langue préférée
- Niveau CECRL actuel
- Objectif certification
- Historique d'activité

### 16. ⏳ Paramètres du Compte
**Fichier:** `src/app/settings.tsx`
**Template source:** `templat/param_tres_du_compte_oralis/code.html`

**Options:**
- Préférences langue
- Notifications
- Confidentialité
- Gestion abonnement
- Téléchargement données
- Supprimer compte

---

## 🎨 DESIGN SYSTEM (Déjà créé)

**Fichier:** `src/constants/oralis-design.ts`
- ✅ 50+ couleurs Material Design 3
- ✅ 12 styles typographiques
- ✅ Espacements, radius, shadows
- ✅ Helpers RGBA, responsive

**Composants:** `src/components/oralis/`
- ✅ OralisCard
- ✅ OralisButton
- ✅ OralisBadge
- ✅ OralisProgressBar

---

## 📱 NAVIGATION STRUCTURE

```
ORALIS-Mobile/
├── src/app/
│   ├── index.tsx (Splash/Home)
│   ├── _layout.tsx (Root Stack)
│   │
│   ├── auth/
│   │   ├── login.tsx ✅
│   │   ├── register.tsx ⏳
│   │   └── forgot-password.tsx ⏳
│   │
│   ├── (learner)/ [Tab Navigator]
│   │   ├── _layout.tsx ✅
│   │   ├── dashboard.tsx ⏳
│   │   ├── studio.tsx ⏳
│   │   ├── analysis.tsx ⏳
│   │   ├── feedback.tsx ⏳
│   │   ├── simulations.tsx ⏳
│   │   ├── progress.tsx ⏳
│   │   └── more.tsx ⏳
│   │
│   ├── (trainer)/ [Tab Navigator]
│   │   ├── _layout.tsx ⏳
│   │   ├── dashboard.tsx ⏳
│   │   ├── validation.tsx ⏳
│   │   └── groups.tsx ⏳
│   │
│   ├── (institution)/
│   │   ├── _layout.tsx ⏳
│   │   └── analytics.tsx ⏳
│   │
│   ├── certifications.tsx ✅
│   ├── profile.tsx ⏳
│   ├── settings.tsx ⏳
│   └── explore.tsx (existing)
```

---

## 🔧 COMPOSANTS ADDITIONNELS NÉCESSAIRES

### À créer dans `src/components/oralis/`:

1. **AudioWaveform.tsx** - Visualisation audio
2. **CircularProgress.tsx** - Jauge circulaire
3. **CECRLBadge.tsx** - Badge niveau (B1, B2, C1, C2)
4. **StatCard.tsx** - Carte statistique réutilisable
5. **CriterionCard.tsx** - Card critère CECRL
6. **RecordButton.tsx** - Bouton enregistrement animé
7. **TimeDisplay.tsx** - Affichage temps formaté
8. **RoleSwitcher.tsx** - Switcher Apprenant/Formateur/Institution
9. **LanguageSelector.tsx** - Sélecteur FR/EN
10. **LevelSelector.tsx** - Sélecteur B1/B2/C1/C2

---

## 🎯 PRIORITÉS D'IMPLÉMENTATION

### Phase 1: Core User Flow (Prioritaire)
1. ✅ Login
2. ⏳ Dashboard Apprenant (page la plus importante)
3. ⏳ Studio Pratique (fonctionnalité principale)
4. ⏳ Analyse CECRL (résultats)

### Phase 2: Complete Learner Experience
5. ⏳ Simulations
6. ⏳ Suivi Progression
7. ⏳ Feedback
8. ⏳ Register
9. ⏳ Profile

### Phase 3: Multi-Role Support
10. ⏳ Trainer Dashboard
11. ⏳ Trainer Validation
12. ⏳ Groups Management
13. ⏳ Institution Analytics

### Phase 4: Polish
14. ⏳ Settings
15. ⏳ Forgot Password
16. ⏳ More Menu
17. ⏳ Animations & Transitions

---

## 📐 DESIGN GUIDELINES

### Couleurs à utiliser systématiquement:
- **Primary**: `#4d41df` (violet ORALIS)
- **Surface**: `#f8f9ff` (fond clair)
- **Background**: `#f8f9ff`
- **On-Surface**: `#121c2a` (texte principal)
- **Secondary**: `#545f73` (texte secondaire)
- **Success**: `#10b981` (validation)
- **Warning**: `#f59e0b` (attention)
- **Error**: `#ba1a1a` (erreur)

### Typographie:
- **Headlines**: Plus Jakarta Sans, Bold/SemiBold
- **Body**: Inter, Regular
- **Labels**: Plus Jakarta Sans, SemiBold/Bold

### Espacements:
- xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px

### Radius:
- sm: 8px, md: 12px, lg: 16px, xl: 20px, full: 9999px

---

## ✅ CHECKLIST DE VALIDATION

Pour chaque page implémentée, vérifier:
- [ ] Fidélité visuelle au template web (95%+)
- [ ] Toutes les sections du web présentes
- [ ] Couleurs exactes du design system
- [ ] Typographie cohérente
- [ ] Responsive mobile (scroll vertical)
- [ ] Safe areas iOS/Android
- [ ] Navigation fonctionnelle
- [ ] Pas d'erreurs TypeScript
- [ ] Composants réutilisés quand possible
- [ ] Interactions tactiles (TouchableOpacity)
- [ ] États de chargement si nécessaire

---

## 🚀 COMMANDES POUR TESTER

```bash
# Démarrer le projet
npm start

# iOS
npm run ios

# Android  
npm run android

# Web
npm run web
```

---

## 📝 NOTES IMPORTANTES

1. **NE PAS réinventer le design** - Copier fidèlement le web
2. **Utiliser les vrais textes** du template HTML
3. **Conserver tous les badges, stats, labels** exacts
4. **Même hiérarchie visuelle** que le web
5. **Adapter uniquement le layout** pour mobile (vertical)
6. **Garder tous les emojis/icons** du template original
7. **Respecter les nombres/stats** affichés dans le web

---

**Version**: 1.0.0  
**Dernière mise à jour**: 11 Novembre 2026  
**Pages complétées**: 3/17 (18%)  
**Prochaine étape**: Tableau de bord apprenant
