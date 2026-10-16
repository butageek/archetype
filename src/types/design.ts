export type CategoryType = 'palette' | 'layout' | 'surface' | 'font' | 'accents' | 'animation';

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

export interface SurfaceOption {
  id: string;
  name: string;
  tagline: string;
  borderWidth: string;
  borderStyle: 'solid' | 'dashed' | 'double';
  radius: 'sharp' | 'subtle' | 'rounded' | 'pill';
  shadow: 'none' | 'hard-offset' | 'subtle-diffused' | 'glowing-neon' | 'skeuomorphic' | 'layered-hard';
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

export interface AccentOption {
  id: string;
  name: string;
  tagline: string;
  cornerTicks?: boolean;
  crosshairs?: boolean;
  washiTape?: boolean;
  scanlines?: boolean;
  dotGrid?: boolean;
  rulers?: boolean;
  noiseGrain?: boolean;
  description: string;
}

export interface AnimationOption {
  id: string;
  name: string;
  tagline: string;
  transitionCurve: string;
  duration: string;
  cssStyle: string;
  hoverClass: string;
  activeClass: string;
  description: string;
}

export interface DesignComposition {
  palette: PaletteOption;
  layout: LayoutOption;
  surface: SurfaceOption;
  font: FontOption;
  accents: AccentOption;
  animation: AnimationOption;
}
