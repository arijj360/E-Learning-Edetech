import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { OralisColors, OralisRadius, OralisShadows, OralisSpacing } from '@/constants/oralis-design';

type CardVariant = 'default' | 'elevated' | 'outlined';

interface CardProps {
  children: ReactNode;
  variant?: CardVariant;
  padding?: keyof typeof OralisSpacing;
  style?: ViewStyle;
}

export const OralisCard: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  style,
}) => {
  const cardStyles: ViewStyle[] = [
    styles.card,
    styles[`card_${variant}`],
    { padding: OralisSpacing[padding] },
    style,
  ].filter(Boolean) as ViewStyle[];

  return <View style={cardStyles}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: OralisRadius.lg,
    overflow: 'hidden',
  },
  card_default: {
    backgroundColor: OralisColors.surfaceContainerLowest,
  },
  card_elevated: {
    backgroundColor: OralisColors.surfaceContainerLowest,
    ...OralisShadows.md,
  },
  card_outlined: {
    backgroundColor: OralisColors.surfaceContainerLowest,
    borderWidth: 1,
    borderColor: OralisColors.surfaceContainerHigh,
  },
});
