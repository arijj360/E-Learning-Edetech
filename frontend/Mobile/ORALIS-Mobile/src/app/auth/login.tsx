import { OralisColors, OralisRadius, OralisSpacing } from '@/constants/oralis-design';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import {
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('claire.desaintange@oralis-edu.fr');
  const [password, setPassword] = useState('OralisC1Candidate2025');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      router.replace('/(learner)/dashboard');
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardView}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Brand Header */}
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <View style={styles.logoIcon}>
                <Text style={styles.logoIconText}>📊</Text>
              </View>
              <View>
                <Text style={styles.logoText}>ORALIS</Text>
                <Text style={styles.logoSubtext}>AUDIO COGNITIVE AI</Text>
              </View>
              <View style={styles.cecrlBadge}>
                <Text style={styles.cecrlText}>CECRL B1-C2</Text>
              </View>
            </View>

            <View style={styles.heroSection}>
              <Text style={styles.heroTitle}>
                Maîtrisez l'expression orale avec rigueur.
              </Text>
              <Text style={styles.heroDescription}>
                L'environnement haute précision calibré pour les certifications{' '}
                <Text style={styles.heroDescriptionBold}>
                  DELF, DALF, TCF, Cambridge & IELTS
                </Text>.
              </Text>
            </View>
          </View>

          {/* Criteria Cards */}
          <View style={styles.criteriaSection}>
            <View style={styles.criteriaHeader}>
              <View style={styles.liveIndicator}>
                <View style={styles.liveDot} />
                <Text style={styles.liveText}>SPECTROGRAMME PHONÉTIQUE</Text>
              </View>
              <Text style={styles.audioSpec}>48.0 kHz • 24-bit Lossless</Text>
            </View>

            <Text style={styles.criteriaTitle}>Critères de notation automatisés</Text>
            <Text style={styles.criteriaAccuracy}>Précision &gt; 98.4%</Text>

            <View style={styles.criteriaGrid}>
              {[
                { icon: '🎤', title: 'Prononciation', subtitle: 'Phonèmes IPA' },
                { icon: '⚡', title: 'Fluidité', subtitle: 'Débit & pauses' },
                { icon: '📊', title: 'Intonation', subtitle: 'Courbe prosodique' },
                { icon: '📚', title: 'Lexique', subtitle: 'Richesse C1/C2' },
                { icon: '✓', title: 'Grammaire', subtitle: 'Structures cibles' },
                { icon: '🔗', title: 'Cohérence', subtitle: 'Connecteurs logiques' },
              ].map((criterion, index) => (
                <View key={index} style={styles.criterionCard}>
                  <Text style={styles.criterionIcon}>{criterion.icon}</Text>
                  <View style={styles.criterionContent}>
                    <Text style={styles.criterionTitle}>{criterion.title}</Text>
                    <Text style={styles.criterionSubtitle}>{criterion.subtitle}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* Testimonial */}
          <View style={styles.testimonial}>
            <View style={styles.testimonialAvatar}>
              <Text style={styles.testimonialInitials}>CS</Text>
            </View>
            <View style={styles.testimonialContent}>
              <View style={styles.testimonialHeader}>
                <Text style={styles.testimonialName}>Claire de Saint-Ange</Text>
                <View style={styles.testimonialBadge}>
                  <Text style={styles.testimonialBadgeText}>DALF C1</Text>
                </View>
              </View>
              <Text style={styles.testimonialText}>
                « Le simulateur m'a permis d'obtenir 23,5/25 à l'épreuve orale du DALF. »
              </Text>
            </View>
            <Text style={styles.verifiedIcon}>✓</Text>
          </View>

          {/* Login Form Section */}
          <View style={styles.formSection}>
            <View style={styles.secureBadge}>
              <View style={styles.secureDot} />
              <Text style={styles.secureText}>ESPACE SÉCURISÉ</Text>
            </View>

            <Text style={styles.formTitle}>Ravi de vous revoir</Text>
            <Text style={styles.formSubtitle}>
              Connectez-vous à votre espace d'apprentissage ou de formation.
            </Text>

            {/* Multi-role Info */}
            <View style={styles.roleInfo}>
              <Text style={styles.roleInfoIcon}>🔑</Text>
              <View>
                <Text style={styles.roleInfoTitle}>Redirection Automatique multi-rôle</Text>
                <Text style={styles.roleInfoText}>
                  Votre jeton vous dirigera vers le studio <Text style={styles.roleInfoBold}>Apprenant</Text>,
                  le tableau de bord <Text style={styles.roleInfoBold}>Formateur</Text> ou la console{' '}
                  <Text style={styles.roleInfoBold}>Établissement</Text>.
                </Text>
              </View>
            </View>

            {/* SSO Button */}
            <TouchableOpacity style={styles.ssoButton}>
              <Text style={styles.ssoIcon}>🏫</Text>
              <Text style={styles.ssoText}>Continuer avec Établissement (SSO)</Text>
              <Text style={styles.ssoLock}>🔒</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>OU AVEC VOS IDENTIFIANTS</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* Email Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Adresse email institutionnelle ou personnelle</Text>
              <View style={styles.inputContainer}>
                <Text style={styles.inputIcon}>✉️</Text>
                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="ex. nom.prenom@universite-paris.fr"
                  placeholderTextColor={OralisColors.outlineVariant}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>

            {/* Password Input */}
            <View style={styles.inputGroup}>
              <View style={styles.passwordHeader}>
                <Text style={styles.inputLabel}>Mot de passe</Text>
                <Link href="/auth/forgot-password">
                  <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
                </Link>
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputIcon}>🔒</Text>
                <TextInput
                  style={styles.input}
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Votre mot de passe sécurisé"
                  placeholderTextColor={OralisColors.outlineVariant}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeButton}
                >
                  <Text>{showPassword ? '👁️' : '👁️‍🗨️'}</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Remember Me */}
            <View style={styles.rememberRow}>
              <View style={styles.rememberCheck}>
                <Switch
                  value={rememberMe}
                  onValueChange={setRememberMe}
                  trackColor={{ false: OralisColors.outline, true: OralisColors.primary }}
                  thumbColor={OralisColors.surfaceContainerLowest}
                />
                <Text style={styles.rememberText}>Se souvenir de moi sur cet appareil</Text>
              </View>
              <View style={styles.verifiedDevice}>
                <Text style={styles.shieldIcon}>🛡️</Text>
                <Text style={styles.verifiedText}>Poste vérifié</Text>
              </View>
            </View>

            {/* Login Button */}
            <TouchableOpacity
              style={[styles.loginButton, isLoading && styles.loginButtonDisabled]}
              onPress={handleLogin}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <ActivityIndicator color={OralisColors.onPrimary} />
                  <Text style={styles.loginButtonText}>Authentification en cours...</Text>
                </>
              ) : (
                <>
                  <Text style={styles.loginButtonText}>Se connecter à ORALIS</Text>
                  <Text style={styles.loginArrow}>→</Text>
                </>
              )}
            </TouchableOpacity>

            {/* Role Indicators */}
            <View style={styles.roleIndicators}>
              <View style={styles.roleIndicatorsHeader}>
                <Text style={styles.roleIndicatorsTitle}>Comptes éligibles au portail</Text>
                <View style={styles.statusDot} />
              </View>
              <View style={styles.roleBadges}>
                {[
                  { icon: '👤', text: 'Apprenant / Candidat' },
                  { icon: '👨‍🏫', text: 'Formateur / Évaluateur' },
                  { icon: '🏢', text: 'Établissement & Académie' },
                ].map((role, index) => (
                  <View key={index} style={styles.roleBadge}>
                    <Text style={styles.roleBadgeIcon}>{role.icon}</Text>
                    <Text style={styles.roleBadgeText}>{role.text}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Sign Up Link */}
            <View style={styles.signupSection}>
              <Text style={styles.signupText}>Vous n'avez pas encore d'accès ?</Text>
              <Link href="/auth/register">
                <Text style={styles.signupLink}> Créer un compte apprenant</Text>
              </Link>
            </View>

            {/* Footer Links */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>
                Plateforme hébergée en Union Européenne. Les flux audio ne sont jamais utilisés
                sans consentement.
              </Text>
              <View style={styles.footerLinks}>
                <TouchableOpacity>
                  <Text style={styles.footerLink}>Politique RGPD</Text>
                </TouchableOpacity>
                <Text style={styles.footerSeparator}>•</Text>
                <TouchableOpacity>
                  <Text style={styles.footerLink}>CGU</Text>
                </TouchableOpacity>
                <Text style={styles.footerSeparator}>•</Text>
                <TouchableOpacity>
                  <Text style={styles.footerLink}>Assistance</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: OralisColors.onBackground,
  },
  keyboardView: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: OralisSpacing.lg,
    paddingBottom: 40,
  },
  // Header
  header: {
    marginBottom: OralisSpacing.lg,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: OralisSpacing.lg,
  },
  logoIcon: {
    width: 44,
    height: 44,
    borderRadius: OralisRadius.md,
    backgroundColor: OralisColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  logoIconText: {
    fontSize: 24,
  },
  logoText: {
    fontSize: 20,
    fontWeight: '700',
    color: OralisColors.surface,
    letterSpacing: -0.5,
  },
  logoSubtext: {
    fontSize: 8,
    fontWeight: '700',
    color: OralisColors.primaryFixed,
    letterSpacing: 1.5,
    marginTop: -2,
  },
  cecrlBadge: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: OralisRadius.full,
    backgroundColor: OralisColors.surface + '20',
  },
  cecrlText: {
    fontSize: 10,
    fontWeight: '600',
    color: OralisColors.surfaceVariant,
    letterSpacing: 0.5,
  },
  heroSection: {
    marginBottom: 12,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: OralisColors.surface,
    lineHeight: 36,
    letterSpacing: -0.5,
  },
  heroDescription: {
    fontSize: 15,
    color: OralisColors.surfaceVariant + 'CC',
    lineHeight: 22,
  },
  heroDescriptionBold: {
    fontWeight: '600',
    color: OralisColors.surface,
  },
  // Criteria Section
  criteriaSection: {
    backgroundColor: OralisColors.surface + '08',
    borderRadius: OralisRadius.xl,
    padding: OralisSpacing.lg,
    marginBottom: OralisSpacing.lg,
  },
  criteriaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: OralisSpacing.md,
  },
  liveIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#34d399',
    marginRight: 6,
  },
  liveText: {
    fontSize: 11,
    fontWeight: '700',
    color: OralisColors.inverseOnSurface,
    letterSpacing: 0.8,
  },
  audioSpec: {
    fontSize: 10,
    color: OralisColors.outlineVariant,
  },
  criteriaTitle: {
    fontSize: 11,
    color: OralisColors.surfaceVariant + 'AA',
    fontWeight: '600',
    letterSpacing: 1,
    marginTop: OralisSpacing.md,
  },
  criteriaAccuracy: {
    fontSize: 11,
    color: OralisColors.primaryFixedDim,
    fontWeight: '700',
    marginBottom: OralisSpacing.sm,
  },
  criteriaGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -4,
  },
  criterionCard: {
    flex: 1,
    minWidth: '47%',
    backgroundColor: OralisColors.surface + '10',
    borderRadius: OralisRadius.md,
    padding: 10,
    flexDirection: 'row',
    margin: 4,
  },
  criterionIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  criterionContent: {
    flex: 1,
  },
  criterionTitle: {
    fontSize: 11,
    fontWeight: '600',
    color: OralisColors.surface,
  },
  criterionSubtitle: {
    fontSize: 10,
    color: OralisColors.surfaceVariant + 'AA',
  },
  // Testimonial
  testimonial: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: OralisColors.surface + '10',
    padding: OralisSpacing.md,
    borderRadius: OralisRadius.md,
    marginBottom: OralisSpacing.xl,
  },
  testimonialAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: OralisColors.primaryFixed,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  testimonialInitials: {
    fontSize: 16,
    fontWeight: '700',
    color: OralisColors.primary,
  },
  testimonialContent: {
    flex: 1,
  },
  testimonialHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  testimonialName: {
    fontSize: 13,
    fontWeight: '600',
    color: OralisColors.surface,
    marginRight: 8,
  },
  testimonialBadge: {
    backgroundColor: OralisColors.primary,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: OralisRadius.full,
  },
  testimonialBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: OralisColors.onPrimary,
  },
  testimonialText: {
    fontSize: 12,
    color: OralisColors.surfaceVariant + 'EE',
    fontStyle: 'italic',
    lineHeight: 16,
  },
  verifiedIcon: {
    fontSize: 20,
    color: OralisColors.primaryFixedDim,
  },
  // Form Section
  formSection: {
    backgroundColor: OralisColors.surface,
    borderRadius: OralisRadius.xl,
    padding: OralisSpacing.lg,
  },
  secureBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: OralisColors.surfaceContainerHigh,
    borderRadius: OralisRadius.full,
    alignSelf: 'flex-start',
    marginBottom: OralisSpacing.md,
  },
  secureDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: OralisColors.primary,
    marginRight: 6,
  },
  secureText: {
    fontSize: 10,
    fontWeight: '700',
    color: OralisColors.primary,
    letterSpacing: 1,
  },
  formTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: OralisColors.onSurface,
    marginTop: 4,
    marginBottom: OralisSpacing.sm,
  },
  formSubtitle: {
    fontSize: 14,
    color: OralisColors.secondary,
    lineHeight: 20,
    marginBottom: OralisSpacing.md,
  },
  roleInfo: {
    flexDirection: 'row',
    padding: 14,
    backgroundColor: OralisColors.surfaceContainerLow,
    borderRadius: OralisRadius.md,
    marginBottom: OralisSpacing.md,
  },
  roleInfoIcon: {
    fontSize: 18,
    marginTop: 2,
    marginRight: 12,
  },
  roleInfoTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: OralisColors.onSurface,
    letterSpacing: 0.4,
    marginBottom: 4,
  },
  roleInfoText: {
    fontSize: 12,
    color: OralisColors.secondary,
    lineHeight: 16,
  },
  roleInfoBold: {
    fontWeight: '600',
    color: OralisColors.onSurface,
  },
  ssoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    backgroundColor: OralisColors.surfaceContainerHigh,
    borderRadius: OralisRadius.md,
    marginBottom: OralisSpacing.md,
  },
  ssoIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  ssoText: {
    flex: 1,
    fontSize: 13,
    fontWeight: '600',
    color: OralisColors.onSurface,
  },
  ssoLock: {
    fontSize: 16,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: OralisSpacing.md,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: OralisColors.surfaceVariant,
    marginHorizontal: 16,
  },
  dividerText: {
    fontSize: 10,
    fontWeight: '600',
    color: OralisColors.secondary,
    letterSpacing: 0.8,
  },
  inputGroup: {
    marginBottom: OralisSpacing.md,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: OralisColors.onSurface,
    marginBottom: 6,
  },
  passwordHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgotPassword: {
    fontSize: 11,
    fontWeight: '600',
    color: OralisColors.primary,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: OralisColors.surfaceContainerLowest,
    borderRadius: OralisRadius.md,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  inputIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: OralisColors.onSurface,
  },
  eyeButton: {
    padding: 4,
  },
  rememberRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: OralisSpacing.md,
  },
  rememberCheck: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    fontSize: 13,
    color: OralisColors.secondary,
    marginLeft: 8,
  },
  verifiedDevice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shieldIcon: {
    fontSize: 12,
    marginRight: 4,
  },
  verifiedText: {
    fontSize: 11,
    color: OralisColors.secondary + 'CC',
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: OralisColors.primary,
    paddingVertical: 16,
    borderRadius: OralisRadius.md,
    marginTop: 8,
    marginBottom: OralisSpacing.md,
  },
  loginButtonDisabled: {
    opacity: 0.7,
  },
  loginButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: OralisColors.onPrimary,
    marginRight: 8,
  },
  loginArrow: {
    fontSize: 18,
    color: OralisColors.onPrimary,
  },
  roleIndicators: {
    backgroundColor: OralisColors.surfaceContainerLow + '99',
    borderRadius: OralisRadius.md,
    padding: 16,
    marginBottom: OralisSpacing.md,
  },
  roleIndicatorsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  roleIndicatorsTitle: {
    fontSize: 10,
    fontWeight: '600',
    color: OralisColors.secondary,
    letterSpacing: 1,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10b981',
  },
  roleBadges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginHorizontal: -4,
  },
  roleBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: OralisColors.surfaceContainerLowest,
    borderRadius: OralisRadius.sm,
    margin: 4,
  },
  roleBadgeIcon: {
    fontSize: 12,
    marginRight: 6,
  },
  roleBadgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: OralisColors.onSurface,
  },
  signupSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  signupText: {
    fontSize: 13,
    color: OralisColors.secondary,
  },
  signupLink: {
    fontSize: 13,
    fontWeight: '700',
    color: OralisColors.primary,
  },
  footer: {
    marginTop: 12,
  },
  footerText: {
    fontSize: 11,
    color: OralisColors.secondary + 'AA',
    textAlign: 'center',
    lineHeight: 16,
    marginBottom: 12,
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerLink: {
    fontSize: 11,
    color: OralisColors.secondary,
    marginHorizontal: 4,
  },
  footerSeparator: {
    fontSize: 11,
    color: OralisColors.secondary + '66',
    marginHorizontal: 4,
  },
});
