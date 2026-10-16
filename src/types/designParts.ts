export type DesignPartCategory =
  | 'palette'
  | 'font'
  | 'surface'
  | 'components'
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
  classification: 'pixel' | 'handwriting' | 'cartoon' | 'sans' | 'serif' | 'mono' | 'grotesk' | 'luxury';
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

export interface ComponentPart {
  id: string;
  name: string; // e.g. "Neo-Brutalist Chunky Buttons", "Minimalist Rounded Pills", "Industrial Hardware Relays"
  tagline: string;
  description: string;
  buttonClass: string;
  badgeClass: string;
  promptSnippet: string;
}

export interface AccentPart {
  id: string;
  name: string; // e.g. "CRT Raster Scanlines", "CAD Crosshairs & Rulers", "Tactile Washi Tape"
  tagline: string;
  description: string;
  type: 'scanlines' | 'crosshairs' | 'washi-tape' | 'dot-grid' | 'corner-ticks' | 'hazard-stripes' | 'noise-grain' | 'minimal';
  promptSnippet: string;
}

export interface DesignPartsSelection {
  palette: PalettePart;
  font: FontPart;
  surface: SurfacePart;
  components: ComponentPart;
  accent: AccentPart;
}
