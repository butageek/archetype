export type DesignPartCategory =
  | 'themes'
  | 'palette'
  | 'font'
  | 'surface'
  | 'components'
  | 'accents';

export interface PalettePart {
  id: string;
  name: string; // e.g. "Cyberpunk 2077 Night City", "Stripe Vibrant Fintech Indigo"
  tagline: string;
  description: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  border: string;
  text: string;
  textMuted: string;
  isDark: boolean;
  promptSnippet: string;
}

export type FontClassification =
  | 'pixel'
  | 'handwriting'
  | 'cartoon'
  | 'sans'
  | 'serif'
  | 'mono'
  | 'grotesk'
  | 'luxury'
  | 'cyberpunk'
  | 'art-deco'
  | 'acid'
  | 'cad'
  | 'humanist'
  | 'bento'
  | 'retro-serif'
  | 'fintech'
  | 'eccentric-mono'
  | 'poster'
  | 'typewriter'
  | 'disco'
  | 'haute-couture'
  | 'crt-terminal';

export interface FontPart {
  id: string;
  name: string; // e.g. "Modern Bento UI / Jakarta Sans", "Wonky 70s Editorial Serif"
  tagline: string;
  description: string;
  fontFamily: string;
  previewSample: string;
  classification: FontClassification;
  promptSnippet: string;
}

export interface SurfacePart {
  id: string;
  name: string; // e.g. "Bento Grid Spotlight Glow", "Cyberpunk 45° Chamfered Cut"
  tagline: string;
  description: string;
  borderWidth: string;
  borderStyle: 'solid' | 'dashed' | 'double' | 'groove' | 'ridge' | 'none';
  radius: string;
  shadow: string;
  backdropBlur?: string;
  clipPath?: string;
  promptSnippet: string;
}

export interface ComponentPart {
  id: string;
  name: string; // e.g. "Bento Spotlight Buttons", "Floating Capsule Dock"
  tagline: string;
  description: string;
  buttonClass: string;
  badgeClass: string;
  promptSnippet: string;
}

export type AccentType =
  | 'scanlines'
  | 'crosshairs'
  | 'washi-tape'
  | 'dot-grid'
  | 'corner-ticks'
  | 'hazard-stripes'
  | 'noise-grain'
  | 'minimal'
  | 'cyber-hud'
  | 'prismatic-flare'
  | 'art-deco-sunburst'
  | 'blueprint-dimensions'
  | 'hanko-stamp'
  | 'wireframe-grid'
  | 'aurora-glow'
  | 'halftone-dots'
  | 'crosshair-plus'
  | 'barcode-serial'
  | 'audio-waveform'
  | 'node-constellation';

export interface AccentPart {
  id: string;
  name: string; // e.g. "Aurora Atmospheric Mesh Glow", "Isometric Tech Grid Floor"
  tagline: string;
  description: string;
  type: AccentType;
  promptSnippet: string;
}

export interface DesignPartsSelection {
  palette: PalettePart;
  font: FontPart;
  surface: SurfacePart;
  components: ComponentPart;
  accent: AccentPart;
}

export type ThemeTag =
  | 'all'
  | 'high-tech'
  | 'developer'
  | 'fintech'
  | 'retro'
  | 'editorial'
  | 'minimal'
  | 'industrial';

export interface CuratedTheme {
  id: string;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  categoryTag: ThemeTag;
  accentColor: string;
  paletteId: string;
  fontId: string;
  surfaceId: string;
  componentId: string;
  accentId: string;
}
