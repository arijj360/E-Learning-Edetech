import { OralisColors } from '@/constants/oralis-design';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: OralisColors.surfaceContainerLowest,
          },
          headerTintColor: OralisColors.onSurface,
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen 
          name="index" 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="auth/login" 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="auth/register" 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="auth/forgot-password" 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="(learner)" 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="(trainer)" 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="(institution)" 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="profile" 
          options={{ 
            title: 'Profil',
            presentation: 'modal' 
          }} 
        />
        <Stack.Screen 
          name="settings" 
          options={{ 
            title: 'Paramètres',
            presentation: 'modal' 
          }} 
        />
        <Stack.Screen 
          name="certifications" 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="explore" 
          options={{ headerShown: false }} 
        />
      </Stack>
    </SafeAreaProvider>
  );
}
