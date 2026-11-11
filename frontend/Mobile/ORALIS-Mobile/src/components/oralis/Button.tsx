import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { OralisColors, OralisRadius, OralisShadows, OralisTypography } from '@/constants/oralis-design';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: string;
  style?: ViewStyle;
}

export const OralisButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  icon,
  style,
}) => {
  const buttonStyles: ViewStyle[] = [
    styles.button,
    styles[`button_${variant}`],
    styles[`button_${size}`],
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
    style,
  ].filter(Boolean) as ViewStyle[];

  const textStyles: TextStyle[] = [
    styles.text,
    styles[`text_${variant}`],
    styles[`text_${size}`],
    disabled && styles.textDisabled,
  ].filter(Boolean) as TextStyle[];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      {icon && <Text style={styles.icon}>{icon}</Text>}
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: OralisRadius.md,
    // gap: 8, // REMOVED - use margin instead
  },
  // Variants
  button_primary: {
    backgroundColor: OralisColors.primary,
    ...OralisShadows.md,
  },
  button_secondary: {
    backgroundColor: OralisColors.surfaceContainerLowest,
    borderWidth: 1,
    borderColor: OralisColors.surfaceContainerHigh,
  },
  button_tertiary: {
    backgroundColor: OralisColors.surfaceContainer,
  },
  button_danger: {
    backgroundColor: OralisColors.error,
    ...OralisShadows.md,
  },
  button_success: {
    backgroundColor: OralisColors.success,
    ...OralisShadows.md,
  },
  // Sizes
  button_sm: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  button_md: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  button_lg: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: 0.5,
  },
  // Text styles
  text: {
    fontWeight: '600',
  },
  text_primary: {
    color: OralisColors.onPrimary,
    ...OralisTypography.labelMd,
  },
  text_secondary: {
    color: OralisColors.onSurface,
    ...OralisTypography.labelMd,
  },
  text_tertiary: {
    color: OralisColors.onSurface,
    ...OralisTypography.labelMd,
  },
  text_danger: {
    color: OralisColors.onError,
    ...OralisTypography.labelMd,
  },
  text_success: {
    color: '#ffffff',
    ...OralisTypography.labelMd,
  },
  text_sm: {
    fontSize: 11,
  },
  text_md: {
    fontSize: 13,
  },
  text_lg: {
    fontSize: 15,
  },
  textDisabled: {
    opacity: 0.6,
  },
  icon: {
    fontSize: 16,
  },
});

