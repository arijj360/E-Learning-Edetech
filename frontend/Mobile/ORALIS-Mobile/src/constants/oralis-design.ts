/**
 * ORALIS Design System
 * Mobile-optimized design tokens matching the web template
 */

export const OralisColors = {
  // Primary
  primary: '#4d41df',
  primaryContainer: '#675df9',
  primaryFixed: '#e3dfff',
  primaryFixedDim: '#c4c0ff',
  onPrimary: '#ffffff',
  onPrimaryContainer: '#fffbff',
  onPrimaryFixed: '#100069',
  onPrimaryFixedVariant: '#3622ca',
  inversePrimary: '#c4c0ff',

  // Secondary
  secondary: '#545f73',
  secondaryContainer: '#d5e0f8',
  secondaryFixed: '#d8e3fb',
  secondaryFixedDim: '#bcc7de',
  onSecondary: '#ffffff',
  onSecondaryContainer: '#586377',
  onSecondaryFixed: '#111c2d',
  onSecondaryFixedVariant: '#3c475a',

  // Tertiary
  tertiary: '#555c6e',
  tertiaryContainer: '#6e7487',
  tertiaryFixed: '#dce2f7',
  tertiaryFixedDim: '#c0c6db',
  onTertiary: '#ffffff',
  onTertiaryContainer: '#fefcff',
  onTertiaryFixed: '#141b2b',
  onTertiaryFixedVariant: '#404758',

  // Surface
  surface: '#f8f9ff',
  surfaceDim: '#d0dbed',
  surfaceBright: '#f8f9ff',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerLow: '#eff4ff',
  surfaceContainer: '#e6eeff',
  surfaceContainerHigh: '#dee9fc',
  surfaceContainerHighest: '#d9e3f6',
  surfaceVariant: '#d9e3f6',
  surfaceTint: '#4f44e2',

  // On Surface
  onSurface: '#121c2a',
  onSurfaceVariant: '#464555',
  inverseSurface: '#27313f',
  inverseOnSurface: '#eaf1ff',

  // Background
  background: '#f8f9ff',
  onBackground: '#121c2a',

  // Outline
  outline: '#777587',
  outlineVariant: '#c7c4d8',

  // Error
  error: '#ba1a1a',
  errorContainer: '#ffdad6',
  onError: '#ffffff',
  onErrorContainer: '#93000a',

  // Success (Custom)
  success: '#10b981',
  successLight: '#ecfdf5',
  successDark: '#047857',

  // Warning (Custom)
  warning: '#f59e0b',
  warningLight: '#fef3c7',
  warningDark: '#92400e',

  // Info (Custom)
  info: '#3b82f6',
  infoLight: '#eff6ff',
  infoDark: '#1e40af',
} as const;

export const OralisTypography = {
  displayLg: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 30,
    fontWeight: '700' as const,
    lineHeight: 38,
    letterSpacing: -0.45,
  },
  headlineLg: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 24,
    fontWeight: '600' as const,
    lineHeight: 32,
    letterSpacing: -0.24,
  },
  headlineMd: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 22,
    fontWeight: '600' as const,
    lineHeight: 28,
  },
  headlineSm: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 18,
    fontWeight: '600' as const,
    lineHeight: 24,
  },
  bodyLg: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    fontWeight: '400' as const,
    lineHeight: 24,
  },
  bodyMd: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    fontWeight: '400' as const,
    lineHeight: 20,
  },
  bodySm: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    fontWeight: '400' as const,
    lineHeight: 16,
  },
  labelLg: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 14,
    fontWeight: '600' as const,
    lineHeight: 20,
    letterSpacing: 0.14,
  },
  labelMd: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 12,
    fontWeight: '600' as const,
    lineHeight: 16,
    letterSpacing: 0.24,
  },
  labelSm: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 10,
    fontWeight: '700' as const,
    lineHeight: 14,
    letterSpacing: 0.4,
  },
} as const;

export const OralisSpacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
  gutter: 24,
  gutterSm: 16,
  margin: 32,
  marginSm: 16,
} as const;

export const OralisRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  full: 9999,
} as const;

export const OralisShadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
  },
} as const;

export const OralisBreakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
} as const;

// Helper functions
export const getResponsiveSpacing = (size: keyof typeof OralisSpacing, scale: number = 1) => {
  return OralisSpacing[size] * scale;
};

export const hexToRGBA = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
