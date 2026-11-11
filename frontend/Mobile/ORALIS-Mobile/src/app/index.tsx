import { OralisColors } from '@/constants/oralis-design';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const router = useRouter();

  useEffect(() => {
    // Simulate checking auth status
    const timer = setTimeout(() => {
      // For now, always redirect to login
      // In production, check if user is authenticated
      router.replace('/auth/login');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={styles.logoIcon}>
            <Text style={styles.logoIconText}>📊</Text>
          </View>
          <View>
            <Text style={styles.logoText}>ORALIS</Text>
            <Text style={styles.logoSubtext}>EXPRESSION ORALE</Text>
          </View>
        </View>
        <ActivityIndicator size="large" color={OralisColors.primary} style={styles.loader} />
        <Text style={styles.loadingText}>Chargement...</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: OralisColors.surface,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  logoIcon: {
    width: 56,
    height: 56,
    borderRadius: 14,
    backgroundColor: OralisColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  logoIconText: {
    fontSize: 32,
  },
  logoText: {
    fontSize: 28,
    fontWeight: '700',
    color: OralisColors.onSurface,
    letterSpacing: -0.5,
  },
  logoSubtext: {
    fontSize: 10,
    fontWeight: '700',
    color: OralisColors.primary,
    letterSpacing: 1.5,
    marginTop: -2,
  },
  loader: {
    marginBottom: 16,
  },
  loadingText: {
    fontSize: 14,
    color: OralisColors.secondary,
    fontWeight: '600',
  },
});
