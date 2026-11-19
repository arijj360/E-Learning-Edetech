import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { OralisColors, OralisRadius, OralisTypography } from '@/constants/oralis-design';

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
  style?: ViewStyle;
}

export const OralisBadge: React.FC<BadgeProps> = ({
  label,
  variant = 'primary',
  size = 'md',
  style,
}) => {
  const containerStyles: ViewStyle[] = [
    styles.badge,
    styles[`badge_${variant}`],
    styles[`badge_${size}`],
    style,
  ].filter(Boolean) as ViewStyle[];

  const textStyles: TextStyle[] = [
    styles.text,
    styles[`text_${variant}`],
    styles[`text_${size}`],
  ].filter(Boolean) as TextStyle[];

  return (
    <View style={containerStyles}>
      <Text style={textStyles}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: OralisRadius.full,
  },
  // Variants
  badge_primary: {
    backgroundColor: OralisColors.primaryFixed,
  },
  badge_secondary: {
    backgroundColor: OralisColors.surfaceContainerHigh,
  },
  badge_success: {
    backgroundColor: OralisColors.successLight,
  },
  badge_warning: {
    backgroundColor: OralisColors.warningLight,
  },
  badge_error: {
    backgroundColor: OralisColors.errorContainer,
  },
  badge_info: {
    backgroundColor: OralisColors.infoLight,
  },
  // Sizes
  badge_sm: {
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  badge_md: {
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  // Text styles
  text: {
    ...OralisTypography.labelSm,
    fontWeight: '700',
  },
  text_primary: {
    color: OralisColors.primary,
  },
  text_secondary: {
    color: OralisColors.onSurface,
  },
  text_success: {
    color: OralisColors.successDark,
  },
  text_warning: {
    color: OralisColors.warningDark,
  },
  text_error: {
    color: OralisColors.error,
  },
  text_info: {
    color: OralisColors.infoDark,
  },
  text_sm: {
    fontSize: 9,
  },
  text_md: {
    fontSize: 10,
  },
});
