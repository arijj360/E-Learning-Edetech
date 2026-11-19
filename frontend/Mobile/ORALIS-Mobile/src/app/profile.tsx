import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { OralisColors, OralisSpacing, OralisRadius } from '@/constants/oralis-design';

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Mon Profil</Text>
          <View style={styles.placeholder} />
        </View>

        {/* Avatar Section */}
        <View style={styles.avatarSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>CS</Text>
          </View>
          <Text style={styles.userName}>Claire de Saint-Ange</Text>
          <Text style={styles.userEmail}>claire.desaintange@oralis-edu.fr</Text>
          <View style={styles.levelBadge}>
            <Text style={styles.levelBadgeText}>🎓 DALF C1 • Candidat</Text>
          </View>
        </View>

        {/* Info Cards */}
        <View style={styles.infoSection}>
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Langue d'étude</Text>
            <Text style={styles.infoValue}>Français</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Niveau actuel</Text>
            <Text style={styles.infoValue}>C1 Acquis</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Objectif</Text>
            <Text style={styles.infoValue}>DALF C2</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Membre depuis</Text>
            <Text style={styles.infoValue}>Septembre 2024</Text>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Statistiques</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>42</Text>
              <Text style={styles.statLabel}>Sessions</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>18h 45m</Text>
              <Text style={styles.statLabel}>Temps total</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>86/100</Text>
              <Text style={styles.statLabel}>Score moyen</Text>
            </View>
          </View>
        </View>

        {/* Edit Button */}
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>✏️ Modifier mon profil</Text>
        </TouchableOpacity>
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
  avatarSection: {
    alignItems: 'center',
    marginBottom: OralisSpacing.xl,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: OralisColors.primaryFixed,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: OralisSpacing.md,
    borderWidth: 4,
    borderColor: OralisColors.primary + '30',
  },
  avatarText: {
    fontSize: 36,
    fontWeight: '700',
    color: OralisColors.primary,
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: OralisColors.onSurface,
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: OralisColors.secondary,
    marginBottom: OralisSpacing.md,
  },
  levelBadge: {
    backgroundColor: OralisColors.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: OralisRadius.full,
  },
  levelBadgeText: {
    fontSize: 13,
    fontWeight: '700',
    color: OralisColors.onPrimary,
  },
  infoSection: {
    // gap: OralisSpacing.md, // REMOVED - use margin instead
    marginBottom: OralisSpacing.xl,
  },
  infoCard: {
    backgroundColor: OralisColors.surfaceContainerLowest,
    padding: OralisSpacing.md,
    borderRadius: OralisRadius.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 14,
    color: OralisColors.secondary,
    fontWeight: '600',
  },
  infoValue: {
    fontSize: 14,
    color: OralisColors.onSurface,
    fontWeight: '700',
  },
  statsSection: {
    marginBottom: OralisSpacing.xl,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: OralisColors.onSurface,
    marginBottom: OralisSpacing.md,
  },
  statsGrid: {
    flexDirection: 'row',
    // gap: OralisSpacing.md, // REMOVED - use margin instead
  },
  statCard: {
    flex: 1,
    backgroundColor: OralisColors.primaryFixed,
    padding: OralisSpacing.md,
    borderRadius: OralisRadius.md,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: OralisColors.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 11,
    color: OralisColors.onPrimaryFixed,
    textAlign: 'center',
  },
  editButton: {
    backgroundColor: OralisColors.primary,
    paddingVertical: 16,
    borderRadius: OralisRadius.md,
    alignItems: 'center',
  },
  editButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: OralisColors.onPrimary,
  },
});

