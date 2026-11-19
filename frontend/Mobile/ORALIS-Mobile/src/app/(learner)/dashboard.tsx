import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { OralisColors } from '@/constants/oralis-design';

export default function DashboardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Tableau de Bord Apprenant</Text>
        <Text style={styles.subtitle}>Page en cours de développement</Text>
        
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Cette page affichera :
          </Text>
          <Text style={styles.bulletText}>• Hero banner avec progression</Text>
          <Text style={styles.bulletText}>• 4 cartes statistiques</Text>
          <Text style={styles.bulletText}>• 6 critères CECRL</Text>
          <Text style={styles.bulletText}>• Graphique d'activité</Text>
        </View>
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
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: OralisColors.onSurface,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: OralisColors.secondary,
    marginBottom: 32,
  },
  infoBox: {
    backgroundColor: OralisColors.surfaceContainerLowest,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: OralisColors.surfaceContainerHigh,
  },
  infoText: {
    fontSize: 14,
    fontWeight: '600',
    color: OralisColors.onSurface,
    marginBottom: 12,
  },
  bulletText: {
    fontSize: 14,
    color: OralisColors.secondary,
    marginBottom: 8,
    paddingLeft: 8,
  },
});
