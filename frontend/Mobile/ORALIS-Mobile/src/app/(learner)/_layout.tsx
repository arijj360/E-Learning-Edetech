import { OralisColors } from '@/constants/oralis-design';
import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default function LearnerLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: OralisColors.surfaceContainerLowest,
          borderTopWidth: 1,
          borderTopColor: OralisColors.surfaceContainerHigh,
          height: 65,
        },
        tabBarActiveTintColor: OralisColors.primary,
        tabBarInactiveTintColor: OralisColors.onSurfaceVariant,
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
        },
        headerStyle: {
          backgroundColor: OralisColors.surfaceContainerLowest,
        },
        headerTintColor: OralisColors.onSurface,
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Tableau de bord',
          tabBarLabel: 'Accueil',
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 24, color }}>📊</Text>
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="studio"
        options={{
          title: 'Studio',
          tabBarLabel: 'Pratique',
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 24, color }}>🎤</Text>
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="analysis"
        options={{
          title: 'Analyse',
          tabBarLabel: 'CECRL',
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 24, color }}>📈</Text>
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: 'Progression',
          tabBarLabel: 'Suivi',
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 24, color }}>📚</Text>
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'Plus',
          tabBarLabel: 'Plus',
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 24, color }}>☰</Text>
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
