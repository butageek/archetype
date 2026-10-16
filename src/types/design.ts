export type CategoryType = 'palette' | 'layout' | 'theme' | 'style' | 'font' | 'animation';

export interface PaletteOption {
  id: string;
  name: string;
  tagline: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  border: string;
  text: string;
  textMuted: string;
  isDark: boolean;
  tags: string[];
}

export interface LayoutOption {
  id: string;
  name: string;
  tagline: string;
  type: 'bento' | 'cockpit' | 'asymmetric-swiss' | 'minimal-dock' | 'card-stream';
  density: 'compact' | 'balanced' | 'spacious';
  description: string;
}

export interface ThemeOption {
  id: string;
  name: string;
  tagline: string;
  mode: 'daylight' | 'nocturne' | 'vellum' | 'glass' | 'monochrome';
  surfaceOpacity: string;
  backgroundStyle: string;
  description: string;
}

export interface StyleOption {
  id: string;
  name: string;
  tagline: string;
  borderWidth: string;
  borderStyle: 'solid' | 'dashed' | 'double';
  radius: 'sharp' | 'subtle' | 'rounded' | 'pill';
  shadow: 'none' | 'hard-offset' | 'subtle-diffused' | 'glowing-neon' | 'skeuomorphic' | 'layered-hard';
  accents: {
    cornerTicks?: boolean;
    crosshairs?: boolean;
    washiTape?: boolean;
    scanlines?: boolean;
    dotGrid?: boolean;
    rulers?: boolean;
    noiseGrain?: boolean;
  };
  description: string;
}

export interface FontOption {
  id: string;
  name: string;
  tagline: string;
  headingFamily: string;
  bodyFamily: string;
  monoFamily: string;
  transform: 'none' | 'uppercase' | 'capitalize';
  letterSpacing: 'tighter' | 'tight' | 'normal' | 'wide';
  weight: 'normal' | 'semibold' | 'bold' | 'black';
  description: string;
}

export interface AnimationOption {
  id: string;
  name: string;
  tagline: string;
  transitionCurve: string;
  duration: string;
  styleClass: string;
  description: string;
}

export interface DesignComposition {
  palette: PaletteOption;
  layout: LayoutOption;
  theme: ThemeOption;
  style: StyleOption;
  font: FontOption;
  animation: AnimationOption;
}
