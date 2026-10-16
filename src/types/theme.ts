export type DensityLevel = 'compact' | 'balanced' | 'spacious';
export type CornerRadius = 'sharp' | 'subtle' | 'rounded' | 'pill';
export type ShadowStyle = 'none' | 'hard-offset' | 'subtle-diffused' | 'glowing-neon' | 'skeuomorphic' | 'layered-hard';
export type BorderWidth = '0px' | '1px' | '2px' | '3px' | '4px';
export type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'double';
export type FontPairing = 'sans-modern' | 'mono-technical' | 'editorial-serif' | 'brutalist-grotesk' | 'geometric-bauhaus' | 'cyber-terminal';

export interface ColorPalette {
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  accent: string;
  accentForeground: string;
  background: string;
  cardSurface: string;
  cardSurfaceMuted: string;
  border: string;
  borderMuted: string;
  textPrimary: string;
  textMuted: string;
  success: string;
  warning: string;
  danger: string;
  info: string;
}

export interface DecorativeAccents {
  cornerTicks: boolean;
  draftingCrosshairs: boolean;
  washiTape: boolean;
  scanlines: boolean;
  dotGrid: boolean;
  metricRulers: boolean;
  paperTexture: boolean;
  halftoneDots: boolean;
  noiseGrain: boolean;
  skewTilt: boolean;
}

export interface TypographySettings {
  pairing: FontPairing;
  headingFamily: string;
  bodyFamily: string;
  monoFamily: string;
  letterSpacing: 'tighter' | 'tight' | 'normal' | 'wide' | 'widest';
  headingTransform: 'none' | 'uppercase' | 'capitalize';
  headingWeight: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
}

export interface ThemeTokens {
  density: DensityLevel;
  radius: CornerRadius;
  shadow: ShadowStyle;
  borderWidth: BorderWidth;
  borderStyle: BorderStyle;
  palette: ColorPalette;
  typography: TypographySettings;
  accents: DecorativeAccents;
  isDark: boolean;
}

export interface DesignSystemMetadata {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: 'Modern' | 'Brutalist' | 'Technical' | 'Editorial' | 'Retro' | 'Minimalist' | 'Tactile';
  tags: string[];
  author?: string;
  isCustom?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface ThemePreset {
  metadata: DesignSystemMetadata;
  tokens: ThemeTokens;
}

export interface ViewportConfig {
  mode: 'desktop' | 'tablet' | 'mobile';
  width: number;
  zoom: number; // e.g. 1, 0.9, 0.75
}

export interface ContrastResult {
  ratio: number;
  score: 'AAA' | 'AA' | 'AA Large' | 'Fail';
  passesAA: boolean;
  passesAAA: boolean;
  passesLargeAA: boolean;
}
