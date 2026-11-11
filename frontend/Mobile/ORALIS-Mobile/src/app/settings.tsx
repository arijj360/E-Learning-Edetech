import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { OralisColors, OralisSpacing, OralisRadius } from '@/constants/oralis-design';

export default function SettingsScreen() {
  const router = useRouter();
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [autoSave, setAutoSave] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Paramètres</Text>
          <View style={styles.placeholder} />
        </View>

        {/* Language Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Langue & Préférences</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingLabel}>Langue d'interface</Text>
              <Text style={styles.settingValue}>Français</Text>
            </View>
            <Text style={styles.settingArrow}>›</Text>
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingLabel}>Langue d'apprentissage</Text>
              <Text style={styles.settingValue}>Français</Text>
            </View>
            <Text style={styles.settingArrow}>›</Text>
          </View>
        </View>

        {/* Notifications Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingLabel}>Notifications push</Text>
              <Text style={styles.settingDescription}>Recevoir des alertes en temps réel</Text>
            </View>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: OralisColors.outline, true: OralisColors.primary }}
              thumbColor={OralisColors.surfaceContainerLowest}
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingLabel}>Alertes email</Text>
              <Text style={styles.settingDescription}>Résumés hebdomadaires et rappels</Text>
            </View>
            <Switch
              value={emailAlerts}
              onValueChange={setEmailAlerts}
              trackColor={{ false: OralisColors.outline, true: OralisColors.primary }}
              thumbColor={OralisColors.surfaceContainerLowest}
            />
          </View>
        </View>

        {/* Studio Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Studio de Pratique</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingLabel}>Sauvegarde automatique</Text>
              <Text style={styles.settingDescription}>Enregistrer automatiquement vos sessions</Text>
            </View>
            <Switch
              value={autoSave}
              onValueChange={setAutoSave}
              trackColor={{ false: OralisColors.outline, true: OralisColors.primary }}
              thumbColor={OralisColors.surfaceContainerLowest}
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingLabel}>Qualité audio</Text>
              <Text style={styles.settingValue}>48 kHz • 24-bit</Text>
            </View>
            <Text style={styles.settingArrow}>›</Text>
          </View>
        </View>

        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Compte</Text>
          
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingLabel}>Changer le mot de passe</Text>
            </View>
            <Text style={styles.settingArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingLabel}>Télécharger mes données</Text>
              <Text style={styles.settingDescription}>Export RGPD</Text>
            </View>
            <Text style={styles.settingArrow}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Legal Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Légal & Confidentialité</Text>
          
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingLabel}>Politique de confidentialité</Text>
            <Text style={styles.settingArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingLabel}>Conditions d'utilisation</Text>
            <Text style={styles.settingArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingLabel}>Licences open source</Text>
            <Text style={styles.settingArrow}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Danger Zone */}
        <View style={styles.section}>
          <TouchableOpacity style={[styles.settingItem, styles.dangerItem]}>
            <Text style={[styles.settingLabel, styles.dangerText]}>Supprimer mon compte</Text>
          </TouchableOpacity>
        </View>

        {/* Version */}
        <Text style={styles.versionText}>Version 1.0.0 (Build 2025)</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: OralisColors.surface,
  },
  content: {
    padding: OralisSpacing.lg,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: OralisSpacing.xl,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 24,
    color: OralisColors.onSurface,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: OralisColors.onSurface,
  },
  placeholder: {
    width: 40,
  },
  section: {
    marginBottom: OralisSpacing.xl,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: OralisColors.secondary,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    marginBottom: OralisSpacing.md,
  },
  settingItem: {
    backgroundColor: OralisColors.surfaceContainerLowest,
    padding: OralisSpacing.md,
    borderRadius: OralisRadius.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: OralisSpacing.sm,
  },
  settingInfo: {
    flex: 1,
    marginRight: OralisSpacing.md,
  },
  settingLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: OralisColors.onSurface,
    marginBottom: 2,
  },
  settingValue: {
    fontSize: 13,
    color: OralisColors.primary,
    fontWeight: '600',
  },
  settingDescription: {
    fontSize: 12,
    color: OralisColors.secondary,
    marginTop: 2,
  },
  settingArrow: {
    fontSize: 24,
    color: OralisColors.outline,
  },
  dangerItem: {
    borderWidth: 1,
    borderColor: OralisColors.error + '30',
  },
  dangerText: {
    color: OralisColors.error,
  },
  versionText: {
    fontSize: 12,
    color: OralisColors.outline,
    textAlign: 'center',
    marginTop: OralisSpacing.lg,
  },
});
