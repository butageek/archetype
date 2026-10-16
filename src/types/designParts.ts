export type DesignPartCategory =
  | 'palette'
  | 'font'
  | 'layout'
  | 'surface'
  | 'accents';

export interface PalettePart {
  id: string;
  name: string; // e.g. "Retro 80s Synthwave", "Vintage 70s Hi-Fi"
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

export interface FontPart {
  id: string;
  name: string; // e.g. "Pixel / 8-Bit Bitmap", "Handwriting / Marker", "Cartoon / Bubble"
  tagline: string;
  description: string;
  fontFamily: string;
  previewSample: string;
  classification: 'pixel' | 'handwriting' | 'cartoon' | 'sans' | 'serif' | 'mono' | 'grotesk';
  promptSnippet: string;
}

export interface LayoutPart {
  id: string;
  name: string; // e.g. "Bento Box Modular Grid", "Dense Telemetry Cockpit", "Asymmetric Swiss"
  tagline: string;
  description: string;
  type: 'bento' | 'cockpit' | 'asymmetric-swiss' | 'minimal-dock' | 'card-stream' | 'kanban';
  density: 'compact' | 'balanced' | 'spacious';
  promptSnippet: string;
}

export interface SurfacePart {
  id: string;
  name: string; // e.g. "Neo-Brutalist Hard Offset", "CAD Precision Hairline", "Frosted Glassmorphism"
  tagline: string;
  description: string;
  borderWidth: string;
  borderStyle: 'solid' | 'dashed' | 'double';
  radius: string;
  shadow: string;
  promptSnippet: string;
}

export interface AccentPart {
  id: string;
  name: string; // e.g. "CRT Raster Scanlines", "CAD Crosshairs & Rulers", "Tactile Washi Tape"
  tagline: string;
  description: string;
  type: 'scanlines' | 'crosshairs' | 'washi-tape' | 'dot-grid' | 'corner-ticks' | 'minimal';
  promptSnippet: string;
}

export interface DesignPartsSelection {
  palette: PalettePart;
  font: FontPart;
  layout: LayoutPart;
  surface: SurfacePart;
  accent: AccentPart;
}
