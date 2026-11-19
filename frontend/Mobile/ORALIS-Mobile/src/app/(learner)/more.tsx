import { OralisColors } from '@/constants/oralis-design';
import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MoreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Plus</Text>
        
        <View style={styles.menuSection}>
          <TouchableOpacity style={styles.menuItem}>
            <Link href="/certifications" style={styles.menuLink}>
              <Text style={styles.menuIcon}>🎓</Text>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuItemTitle}>Certifications</Text>
                <Text style={styles.menuItemSubtitle}>DALF, TCF, Cambridge, IELTS</Text>
              </View>
              <Text style={styles.menuArrow}>›</Text>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Link href="/profile" style={styles.menuLink}>
              <Text style={styles.menuIcon}>👤</Text>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuItemTitle}>Mon Profil</Text>
                <Text style={styles.menuItemSubtitle}>Informations personnelles</Text>
              </View>
              <Text style={styles.menuArrow}>›</Text>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Link href="/settings" style={styles.menuLink}>
              <Text style={styles.menuIcon}>⚙️</Text>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuItemTitle}>Paramètres</Text>
                <Text style={styles.menuItemSubtitle}>Préférences et compte</Text>
              </View>
              <Text style={styles.menuArrow}>›</Text>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>❓</Text>
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuItemTitle}>Aide & Support</Text>
              <Text style={styles.menuItemSubtitle}>Assistance technique</Text>
            </View>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.menuItem, styles.logoutItem]}>
            <Link href="/auth/login" style={styles.menuLink}>
              <Text style={styles.menuIcon}>🚪</Text>
              <View style={styles.menuTextContainer}>
                <Text style={[styles.menuItemTitle, styles.logoutText]}>Déconnexion</Text>
              </View>
              <Text style={styles.menuArrow}>›</Text>
            </Link>
          </TouchableOpacity>
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
    marginBottom: 24,
  },
  menuSection: {
    marginTop: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: OralisColors.surfaceContainerLowest,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  menuIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuItemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: OralisColors.onSurface,
    marginBottom: 2,
  },
  menuItemSubtitle: {
    fontSize: 13,
    color: OralisColors.secondary,
  },
  menuArrow: {
    fontSize: 24,
    color: OralisColors.outline,
  },
  logoutItem: {
    marginTop: 12,
    borderWidth: 1,
    borderColor: OralisColors.error + '30',
  },
  logoutText: {
    color: OralisColors.error,
  },
  menuLink: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
});
