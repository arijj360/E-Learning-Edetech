import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { OralisColors, OralisRadius } from '@/constants/oralis-design';

interface ProgressBarProps {
  progress: number; // 0-100
  height?: number;
  color?: string;
  backgroundColor?: string;
  style?: ViewStyle;
  animated?: boolean;
}

export const OralisProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  height = 6,
  color = OralisColors.primary,
  backgroundColor = OralisColors.surfaceContainerHigh,
  style,
}) => {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <View
      style={[
        styles.container,
        { height, backgroundColor, borderRadius: height / 2 },
        style,
      ]}
    >
      <View
        style={[
          styles.fill,
          {
            width: `${clampedProgress}%`,
            backgroundColor: color,
            borderRadius: height / 2,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
  },
});
