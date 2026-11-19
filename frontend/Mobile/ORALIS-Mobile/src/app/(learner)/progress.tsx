import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { OralisColors } from '@/constants/oralis-design';

export default function ProgressScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Suivi & Progression</Text>
        <Text style={styles.subtitle}>Page en cours de développement</Text>
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
  },
});
