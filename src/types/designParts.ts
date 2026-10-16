export type DesignPartCategory =
  | 'palette'
  | 'font'
  | 'surface'
  | 'components'
  | 'accents';

export interface PalettePart {
  id: string;
  name: string; // e.g. "Cyberpunk 2077 Night City", "Retro 80s Synthwave"
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
  | 'humanist';

export interface FontPart {
  id: string;
  name: string; // e.g. "Cyberpunk HUD / Sci-Fi Angular", "Pixel / 8-Bit Bitmap"
  tagline: string;
  description: string;
  fontFamily: string;
  previewSample: string;
  classification: FontClassification;
  promptSnippet: string;
}

export interface SurfacePart {
  id: string;
  name: string; // e.g. "Cyberpunk 45° Chamfered Cut", "Neo-Brutalist Hard Offset"
  tagline: string;
  description: string;
  borderWidth: string;
  borderStyle: 'solid' | 'dashed' | 'double' | 'groove' | 'ridge' | 'none';
  radius: string;
  shadow: string;
  clipPath?: string;
  promptSnippet: string;
}

export interface ComponentPart {
  id: string;
  name: string; // e.g. "Cyberpunk HUD Clipped Buttons", "Neo-Brutalist Chunky Buttons"
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
  | 'wireframe-grid';

export interface AccentPart {
  id: string;
  name: string; // e.g. "Cyberpunk Hologram Reticle & Circuit Traces", "CRT Raster Scanlines"
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
