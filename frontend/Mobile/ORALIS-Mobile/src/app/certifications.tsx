import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Modal,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

// ORALIS Design System Colors
const colors = {
  primary: '#4d41df',
  primaryContainer: '#675df9',
  primaryFixed: '#e3dfff',
  onPrimary: '#ffffff',
  onPrimaryFixed: '#100069',
  surface: '#f8f9ff',
  surfaceContainerLowest: '#ffffff',
  surfaceContainer: '#e6eeff',
  surfaceContainerLow: '#eff4ff',
  surfaceContainerHigh: '#dee9fc',
  onSurface: '#121c2a',
  onSurfaceVariant: '#464555',
  secondary: '#545f73',
  outline: '#777587',
  error: '#ba1a1a',
  emerald: '#10b981',
  emeraldLight: '#ecfdf5',
  emeraldDark: '#047857',
  amber: '#f59e0b',
  amberLight: '#fef3c7',
  amberDark: '#92400e',
};

// Typography utilities
const typography = {
  displayLg: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 38,
  },
  headlineLg: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
  },
  headlineMd: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 28,
  },
  headlineSm: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
  },
  bodyLg: {
    fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 24,
  },
  bodyMd: {
    fontFamily: 'Inter',
    fontSize: 14,
    lineHeight: 20,
  },
  bodySm: {
    fontFamily: 'Inter',
    fontSize: 12,
    lineHeight: 16,
  },
  labelLg: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
  },
  labelMd: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16,
  },
  labelSm: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 10,
    fontWeight: '700',
    lineHeight: 14,
    letterSpacing: 0.4,
  },
};

// Mock data for certifications
const certifications = [
  {
    id: '1',
    title: 'DALF C1',
    organization: 'France Éducation International',
    description: 'Niveau d\'utilisateur expérimenté autonome.',
    eligibility: 94,
    status: 'ready',
    statusText: 'Prêt pour inscription',
    duration: '45 min (Synthèse + débat)',
    language: 'Français • Validité à vie',
    statusColor: colors.emerald,
    statusBg: colors.emeraldLight,
  },
  {
    id: '2',
    title: 'DALF C2',
    organization: 'France Éducation International',
    description: 'Maîtrise d\'exception & aisance native.',
    eligibility: 78,
    status: 'preparing',
    statusText: 'En préparation active',
    duration: '60 min combinée (Jury expert)',
    language: 'Français • Validité à vie',
    statusColor: colors.amber,
    statusBg: colors.amberLight,
  },
  {
    id: '3',
    title: 'TCF Canada',
    organization: 'France Éducation International',
    description: 'Test requis pour l\'immigration.',
    eligibility: 91,
    status: 'ready',
    statusText: 'Prêt pour inscription',
    duration: '12 min (Expression orale)',
    language: 'Français • Validité 2 ans',
    statusColor: colors.emerald,
    statusBg: colors.emeraldLight,
  },
  {
    id: '4',
    title: 'Cambridge C1 Advanced',
    organization: 'Cambridge Assessment English',
    description: 'High-level qualification anglophone.',
    eligibility: 85,
    status: 'eligible',
    statusText: 'Éligible',
    duration: '15 min (Speaking test)',
    language: 'Anglais • Validité à vie',
    statusColor: colors.primary,
    statusBg: colors.primaryFixed,
  },
];

// Criteria data
const criteriaData = [
  { name: 'Prononciation & Articulation', score: 88, required: 75 },
  { name: 'Fluidité & Débit Vocal', score: 82, required: 75 },
  { name: 'Intonation & Prosodie', score: 84, required: 75 },
  { name: 'Vocabulaire & Registre', score: 92, required: 80 },
  { name: 'Morphosyntaxe & Subjonctif', score: 86, required: 80 },
  { name: 'Cohérence & Stratégie', score: 89, required: 80 },
];

export default function CertificationsScreen() {
  const [verificationModalVisible, setVerificationModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.breadcrumb}>
            Espace Apprenant › <Text style={styles.breadcrumbActive}>Certifications</Text>
          </Text>
          <Text style={styles.title}>
            Certifications Officielles & Attestations de Compétence
          </Text>
          <Text style={styles.subtitle}>
            Consultez votre éligibilité aux certifications nationales et internationales
            (DALF, DELF, TCF, Cambridge, IELTS) et téléchargez vos attestations.
          </Text>
        </View>

        {/* Actions */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>📖 Référentiel CECRL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => setVerificationModalVisible(true)}
          >
            <Text style={styles.primaryButtonText}>🔐 Vérifier authenticité</Text>
          </TouchableOpacity>
        </View>

        {/* Admissibility Card */}
        <View style={styles.admissibilityCard}>
          <LinearGradient
            colors={[colors.primaryFixed, colors.surfaceContainerLowest]}
            style={styles.gradientBackground}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          />
          
          <View style={styles.cardHeader}>
            <Text style={styles.cardBadge}>INDICE D'ADMISSIBILITÉ FEI</Text>
            <View style={styles.sessionBadge}>
              <Text style={styles.sessionText}>Session Mai 2025</Text>
            </View>
          </View>

          <Text style={styles.cardTitle}>DALF C1 / C2 — Préparation Globale</Text>
          <Text style={styles.cardDescription}>
            Conformité aux exigences de l'épreuve orale de production et d'interaction.
          </Text>

          {/* Circular Progress */}
          <View style={styles.progressContainer}>
            <View style={styles.circularProgress}>
              <Text style={styles.progressNumber}>88%</Text>
              <Text style={styles.progressLabel}>ACCOMPLIE</Text>
            </View>
            
            <View style={styles.progressDetails}>
              <View style={styles.statusRow}>
                <View style={styles.statusDot} />
                <Text style={styles.statusText}>
                  Seuil d'admissibilité franchi (&gt;75%)
                </Text>
              </View>
              <Text style={styles.progressDescription}>
                Vos enregistrements studios récents confirment l'assimilation des registres
                formels et de l'argumentation spontanée.
              </Text>
              <View style={styles.statsRow}>
                <Text style={styles.stat}>32 heures validées</Text>
                <Text style={styles.statSeparator}>•</Text>
                <Text style={styles.stat}>14 simulations jury</Text>
              </View>
            </View>
          </View>

          {/* Trainer Feedback */}
          <View style={styles.feedbackCard}>
            <View style={styles.trainerAvatar}>
              <Text style={styles.avatarText}>MV</Text>
            </View>
            <View style={styles.feedbackContent}>
              <View style={styles.trainerHeader}>
                <Text style={styles.trainerName}>Marc V.</Text>
                <View style={styles.trainerBadge}>
                  <Text style={styles.trainerBadgeText}>Formateur Référent</Text>
                </View>
              </View>
              <Text style={styles.feedbackText}>
                « Dossier d'admissibilité complet. Présentation recommandée pour Mai 2025.
                Accentuation rhétorique parfaitement alignée avec les exigences C1. »
              </Text>
            </View>
          </View>
        </View>

        {/* Criteria Section */}
        <View style={styles.criteriaSection}>
          <View style={styles.criteriaSectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>Grille d'Évaluation CECRL (6 Critères)</Text>
              <Text style={styles.sectionSubtitle}>
                Étalonnage algorithmique vérifié par supervision humaine
              </Text>
            </View>
            <View style={styles.validationBadge}>
              <Text style={styles.validationText}>✓ 6/6 Validés</Text>
            </View>
          </View>

          <View style={styles.criteriaGrid}>
            {criteriaData.map((criterion, index) => (
              <View key={index} style={styles.criterionCard}>
                <View style={styles.criterionHeader}>
                  <Text style={styles.criterionName} numberOfLines={2}>
                    {criterion.name}
                  </Text>
                  <View style={styles.scoreContainer}>
                    <Text style={styles.scoreValue}>{criterion.score}</Text>
                    <Text style={styles.scoreMax}>/100</Text>
                  </View>
                </View>
                
                <View style={styles.progressBar}>
                  <View
                    style={[styles.progressFill, { width: `${criterion.score}%` }]}
                  />
                </View>
                
                <View style={styles.criterionFooter}>
                  <Text style={styles.requiredText}>Requis: {criterion.required}/100</Text>
                  <Text style={styles.validatedText}>✓ Validé</Text>
                </View>
              </View>
            ))}
          </View>

          <Text style={styles.updateText}>
            Dernière révision le 18 Mars 2025 à 16:42 UTC
          </Text>
        </View>

        {/* Certifications Catalog */}
        <View style={styles.catalogSection}>
          <View style={styles.catalogHeader}>
            <Text style={styles.catalogBadge}>DIPLÔMES & TESTS INTERNATIONAUX</Text>
            <Text style={styles.catalogTitle}>
              Catalogue des Certifications & Éligibilité
            </Text>
            <Text style={styles.catalogSubtitle}>
              4 parcours d'examen synchronisés avec vos compétences orales
            </Text>
          </View>

          <View style={styles.certificationsGrid}>
            {certifications.map((cert) => (
              <View key={cert.id} style={styles.certCard}>
                <View style={styles.certCardHeader}>
                  <View style={styles.eligibilityBadge}>
                    <Text style={styles.eligibilityText}>
                      Éligibilité {cert.eligibility}%
                    </Text>
                  </View>
                  <View
                    style={[styles.statusBadge, { backgroundColor: cert.statusBg }]}
                  >
                    <Text style={[styles.statusBadgeText, { color: cert.statusColor }]}>
                      {cert.statusText}
                    </Text>
                  </View>
                </View>

                <View style={styles.certContent}>
                  <Text style={styles.certOrganization}>{cert.organization}</Text>
                  <Text style={styles.certTitle}>{cert.title}</Text>
                  <Text style={styles.certDescription}>{cert.description}</Text>

                  <View style={styles.certDetails}>
                    <View style={styles.certDetailRow}>
                      <Text style={styles.certDetailIcon}>⏱️</Text>
                      <Text style={styles.certDetailText}>{cert.duration}</Text>
                    </View>
                    <View style={styles.certDetailRow}>
                      <Text style={styles.certDetailIcon}>🌍</Text>
                      <Text style={styles.certDetailText}>{cert.language}</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.certActions}>
                  <TouchableOpacity style={styles.certPrimaryButton}>
                    <Text style={styles.certPrimaryButtonText}>
                      ▶️ Démarrer simulation
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.certSecondaryButton}>
                    <Text style={styles.certSecondaryButtonText}>
                      Rapport d'admissibilité
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Verification Modal */}
      <Modal
        visible={verificationModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setVerificationModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Vérification d'authenticité</Text>
            <Text style={styles.modalDescription}>
              Entrez le code de scellement unique fourni sur l'attestation pour vérifier
              son authenticité.
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setVerificationModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 24,
  },
  breadcrumb: {
    fontSize: 12,
    color: colors.outline,
    marginBottom: 8,
    fontWeight: '600',
  },
  breadcrumbActive: {
    color: colors.onSurface,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.onSurface,
    marginBottom: 8,
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 14,
    color: colors.secondary,
    lineHeight: 20,
  },
  actionsContainer: {
    flexDirection: 'row',
    // gap: 12, // REMOVED - use margin instead
    marginBottom: 24,
    flexWrap: 'wrap',
  },
  primaryButton: {
    flex: 1,
    minWidth: 140,
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  primaryButtonText: {
    color: colors.onPrimary,
    fontSize: 13,
    fontWeight: '600',
  },
  secondaryButton: {
    flex: 1,
    minWidth: 140,
    backgroundColor: colors.surfaceContainerLowest,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.surfaceContainerHigh,
  },
  secondaryButtonText: {
    color: colors.onSurface,
    fontSize: 13,
    fontWeight: '600',
  },
  admissibilityCard: {
    backgroundColor: colors.surfaceContainerLowest,
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    overflow: 'hidden',
  },
  gradientBackground: {
    position: 'absolute',
    top: -50,
    right: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    opacity: 0.3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    flexWrap: 'wrap',
    // gap: 8, // REMOVED - use margin instead
  },
  cardBadge: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.primary,
    letterSpacing: 1,
  },
  sessionBadge: {
    backgroundColor: colors.surfaceContainerHigh,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  sessionText: {
    fontSize: 10,
    fontWeight: '600',
    color: colors.onSurface,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.onSurface,
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 13,
    color: colors.secondary,
    marginBottom: 20,
    lineHeight: 18,
  },
  progressContainer: {
    backgroundColor: colors.surfaceContainer + '40',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  circularProgress: {
    alignItems: 'center',
    marginBottom: 16,
  },
  progressNumber: {
    fontSize: 36,
    fontWeight: '700',
    color: colors.onSurface,
  },
  progressLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.secondary,
    letterSpacing: 1,
    marginTop: 4,
  },
  progressDetails: {
    // gap: 12, // REMOVED - use margin instead
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    // gap: 8, // REMOVED - use margin instead
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.emerald,
  },
  statusText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.onSurface,
    flex: 1,
  },
  progressDescription: {
    fontSize: 12,
    color: colors.secondary,
    lineHeight: 16,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    // gap: 8, // REMOVED - use margin instead
  },
  stat: {
    fontSize: 11,
    color: colors.secondary,
    fontWeight: '600',
  },
  statSeparator: {
    fontSize: 11,
    color: colors.secondary,
  },
  feedbackCard: {
    backgroundColor: colors.surfaceContainer,
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    // gap: 12, // REMOVED - use margin instead
  },
  trainerAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primaryFixed,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.primary + '30',
  },
  avatarText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
  },
  feedbackContent: {
    flex: 1,
    // gap: 4, // REMOVED - use margin instead
  },
  trainerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    // gap: 8, // REMOVED - use margin instead
    flexWrap: 'wrap',
  },
  trainerName: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.onSurface,
  },
  trainerBadge: {
    backgroundColor: colors.surfaceContainerHigh,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 8,
  },
  trainerBadgeText: {
    fontSize: 9,
    fontWeight: '600',
    color: colors.secondary,
  },
  feedbackText: {
    fontSize: 12,
    color: colors.onSurfaceVariant,
    fontStyle: 'italic',
    lineHeight: 16,
  },
  criteriaSection: {
    marginBottom: 24,
  },
  criteriaSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
    // gap: 12, // REMOVED - use margin instead
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.onSurface,
    marginBottom: 2,
  },
  sectionSubtitle: {
    fontSize: 11,
    color: colors.secondary,
  },
  validationBadge: {
    backgroundColor: colors.emeraldLight,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 16,
  },
  validationText: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.emeraldDark,
  },
  criteriaGrid: {
    // gap: 12, // REMOVED - use margin instead
    marginBottom: 12,
  },
  criterionCard: {
    backgroundColor: colors.surfaceContainerLowest,
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.surfaceContainerHigh,
  },
  criterionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
    // gap: 8, // REMOVED - use margin instead
  },
  criterionName: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.onSurface,
    flex: 1,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  scoreValue: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
  },
  scoreMax: {
    fontSize: 11,
    color: colors.outline,
  },
  progressBar: {
    height: 6,
    backgroundColor: colors.surfaceContainerHigh,
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 3,
  },
  criterionFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  requiredText: {
    fontSize: 10,
    color: colors.outline,
  },
  validatedText: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.emeraldDark,
  },
  updateText: {
    fontSize: 11,
    color: colors.secondary,
    textAlign: 'center',
  },
  catalogSection: {
    marginBottom: 24,
  },
  catalogHeader: {
    marginBottom: 20,
  },
  catalogBadge: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.primary,
    letterSpacing: 1,
    marginBottom: 8,
  },
  catalogTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.onSurface,
    marginBottom: 4,
  },
  catalogSubtitle: {
    fontSize: 13,
    color: colors.secondary,
  },
  certificationsGrid: {
    // gap: 16, // REMOVED - use margin instead
  },
  certCard: {
    backgroundColor: colors.surfaceContainerLowest,
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  certCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
    // gap: 8, // REMOVED - use margin instead
    flexWrap: 'wrap',
  },
  eligibilityBadge: {
    backgroundColor: colors.primaryFixed,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  eligibilityText: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.primary,
  },
  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  statusBadgeText: {
    fontSize: 10,
    fontWeight: '600',
  },
  certContent: {
    marginBottom: 16,
  },
  certOrganization: {
    fontSize: 10,
    fontWeight: '600',
    color: colors.outline,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  certTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.onSurface,
    marginBottom: 4,
  },
  certDescription: {
    fontSize: 12,
    color: colors.secondary,
    marginBottom: 12,
  },
  certDetails: {
    backgroundColor: colors.surfaceContainerLow + '60',
    borderRadius: 12,
    padding: 12,
    // gap: 8, // REMOVED - use margin instead
  },
  certDetailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    // gap: 8, // REMOVED - use margin instead
  },
  certDetailIcon: {
    fontSize: 14,
  },
  certDetailText: {
    fontSize: 12,
    color: colors.onSurfaceVariant,
    flex: 1,
  },
  certActions: {
    // gap: 10, // REMOVED - use margin instead
  },
  certPrimaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  certPrimaryButtonText: {
    color: colors.onPrimary,
    fontSize: 13,
    fontWeight: '600',
  },
  certSecondaryButton: {
    backgroundColor: colors.surfaceContainer,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  certSecondaryButtonText: {
    color: colors.onSurface,
    fontSize: 13,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: colors.surfaceContainerLowest,
    borderRadius: 20,
    padding: 24,
    width: '100%',
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.onSurface,
    marginBottom: 12,
  },
  modalDescription: {
    fontSize: 14,
    color: colors.secondary,
    lineHeight: 20,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  modalButtonText: {
    color: colors.onPrimary,
    fontSize: 14,
    fontWeight: '600',
  },
});

