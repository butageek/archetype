import {
  AccentOption,
  AnimationOption,
  DesignComposition,
  FontOption,
  LayoutOption,
  PaletteOption,
  SurfaceOption,
} from '../types/design';

// 1. PALETTES & ATMOSPHERE
export const PALETTES: PaletteOption[] = [
  {
    id: 'bauhaus-primary',
    name: 'Bauhaus Primaries',
    tagline: 'Cobalt blue, canary yellow, cinnabar red, and warm plaster white',
    primary: '#0038FF',
    secondary: '#FFE600',
    accent: '#FF2E00',
    background: '#F7F6F2',
    surface: '#FFFFFF',
    border: '#0A0A0A',
    text: '#0A0A0A',
    textMuted: '#555555',
    isDark: false,
    tags: ['bauhaus', 'primary', 'constructivist', 'bold'],
  },
  {
    id: 'nordic-slate',
    name: 'Nordic Mineral Slate',
    tagline: 'Quiet Scandinavian stone, glacial sky cyan, and tranquil grays',
    primary: '#0F172A',
    secondary: '#64748B',
    accent: '#38BDF8',
    background: '#F8FAFC',
    surface: '#FFFFFF',
    border: '#E2E8F0',
    text: '#0F172A',
    textMuted: '#64748B',
    isDark: false,
    tags: ['nordic', 'minimal', 'clean', 'quiet-luxury'],
  },
  {
    id: 'neo-pop',
    name: 'Neo-Pop Pastels',
    tagline: 'Electric strawberry pink, chartreuse lime, and mint punch',
    primary: '#FF5480',
    secondary: '#CAFF33',
    accent: '#38D9A9',
    background: '#FFF9E6',
    surface: '#FFFFFF',
    border: '#000000',
    text: '#000000',
    textMuted: '#444444',
    isDark: false,
    tags: ['neo-brutalist', 'pop', 'high-voltage', 'playful'],
  },
  {
    id: 'swiss-crimson',
    name: 'Swiss International Red',
    tagline: 'Josef Müller-Brockmann stark monochrome with iconic Zurich red',
    primary: '#E30613',
    secondary: '#1A1A1A',
    accent: '#E30613',
    background: '#F4F4F4',
    surface: '#FFFFFF',
    border: '#1A1A1A',
    text: '#111111',
    textMuted: '#666666',
    isDark: false,
    tags: ['swiss', 'international', 'grid', 'editorial'],
  },
  {
    id: 'tuscan-terracotta',
    name: 'Tuscan Terracotta & Stone',
    tagline: 'Warm antique stone vellum, Tuscan ochre, and fired terracotta ink',
    primary: '#8C3A27',
    secondary: '#4A5568',
    accent: '#B45309',
    background: '#F9F7F2',
    surface: '#FFFFFF',
    border: '#E2DBD0',
    text: '#1C1917',
    textMuted: '#6B645C',
    isDark: false,
    tags: ['warm', 'terracotta', 'vellum', 'editorial', 'craft'],
  },
  {
    id: 'cyber-phosphor',
    name: 'Cyber Phosphor Matrix',
    tagline: 'Electric emerald phosphors, radiation amber, and reactor black',
    primary: '#00FF66',
    secondary: '#00D9A6',
    accent: '#FFB000',
    background: '#070C09',
    surface: '#0E1712',
    border: '#00FF66',
    text: '#00FF88',
    textMuted: '#4F8F68',
    isDark: true,
    tags: ['cyberpunk', 'phosphor', 'terminal', 'dark', 'scada'],
  },
  {
    id: 'cad-cyan',
    name: 'CAD Schematic Cyan',
    tagline: 'Architectural drafting cobalt blue and luminous laser cyan',
    primary: '#00F0FF',
    secondary: '#4895EF',
    accent: '#FFD166',
    background: '#041833',
    surface: '#082347',
    border: '#00F0FF',
    text: '#E0F4FF',
    textMuted: '#70A8DB',
    isDark: true,
    tags: ['cad', 'blueprint', 'technical', 'cyan', 'engineering'],
  },
  {
    id: 'solarpunk-sage',
    name: 'Solar Conservatory Sage',
    tagline: 'Botanical greenhouse sage green, warm terra cotta, and clay',
    primary: '#2D6A4F',
    secondary: '#E07A5F',
    accent: '#D4A373',
    background: '#F4F1DE',
    surface: '#FFFFFF',
    border: '#B7B7A4',
    text: '#1B4332',
    textMuted: '#52796F',
    isDark: false,
    tags: ['solarpunk', 'botanical', 'greenhouse', 'nature'],
  },
  {
    id: 'analog-amber',
    name: 'Analog Hi-Fi Amber',
    tagline: 'Brushed obsidian faceplates, warm amber backlit dials, and brass',
    primary: '#FF9E00',
    secondary: '#E0A96D',
    accent: '#D90429',
    background: '#121316',
    surface: '#1B1C22',
    border: '#454857',
    text: '#F1F1F4',
    textMuted: '#8D90A3',
    isDark: true,
    tags: ['retro', 'hi-fi', 'amber', 'hardware', 'audio'],
  },
  {
    id: 'lavender-fog',
    name: 'Lavender Dusk Mist',
    tagline: 'Soft lilac haze, deep violet charcoal, and luminous periwinkle',
    primary: '#7C3AED',
    secondary: '#A78BFA',
    accent: '#EC4899',
    background: '#FAF7FD',
    surface: '#FFFFFF',
    border: '#E9D8FD',
    text: '#2E1065',
    textMuted: '#7E22CE',
    isDark: false,
    tags: ['lavender', 'soft', 'modern', 'pastel', 'dreamy'],
  },
];

// 2. LAYOUT ARCHITECTURES
export const LAYOUTS: LayoutOption[] = [
  {
    id: 'bento-grid',
    name: 'Bento Box Modular Grid',
    tagline: 'Asymmetric cards: hero showcase, control tile, and metric strip',
    type: 'bento',
    density: 'balanced',
    description: 'Bento-style layout organizing hero metrics, feature cards, and control modules into clean visual containers.',
  },
  {
    id: 'dense-telemetry',
    name: 'Dense Telemetry Cockpit',
    tagline: 'Split-screen mission control with dense terminal table & telemetry meters',
    type: 'cockpit',
    density: 'compact',
    description: 'Industrial mission-control layout with top metric strip, terminal log table, and gauge readouts.',
  },
  {
    id: 'swiss-editorial',
    name: 'Asymmetric Swiss Rules',
    tagline: 'Oversized bold typographic statement, hairline rules, and asymmetric statistics',
    type: 'asymmetric-swiss',
    density: 'compact',
    description: 'International typographic grid with strong vertical guides, disciplined negative space, and strict typographic hierarchy.',
  },
  {
    id: 'minimal-dock',
    name: 'Minimalist Island Dock',
    tagline: 'Centered floating focal card with generous tranquil breathing room & pill dock',
    type: 'minimal-dock',
    density: 'spacious',
    description: 'Focused single-pane architecture with expansive margins and elevated central cards for distraction-free workflows.',
  },
  {
    id: 'card-stream',
    name: 'Activity Stream & Feed',
    tagline: 'Chronological timeline feed connected by track line with right-rail telemetry',
    type: 'card-stream',
    density: 'balanced',
    description: 'Activity stream layout with chronological event cards, action triggers, and quick metric summaries.',
  },
];

// 3. SURFACE TREATMENTS (BORDERS, CORNERS & SHADOWS)
export const SURFACES: SurfaceOption[] = [
  {
    id: 'neo-brutalist',
    name: 'Neo-Brutalist Hard Drop',
    tagline: '3px solid black borders, 4px unblurred block drop shadows, 4px corners',
    borderWidth: '3px',
    borderStyle: 'solid',
    radius: 'subtle',
    shadow: 'hard-offset',
    description: 'Playful, unapologetic physical boundary lines with hard directional drop-cast block shadows.',
  },
  {
    id: 'cad-blueprint',
    name: 'CAD Precision Hairline',
    tagline: '1px precision hairline borders, zero border radius (sharp 0px), pure flat',
    borderWidth: '1px',
    borderStyle: 'solid',
    radius: 'sharp',
    shadow: 'none',
    description: 'Engineered CAD drafting treatment with 0px corner radius and hairline precision.',
  },
  {
    id: 'bauhaus-geometric',
    name: 'Bauhaus Geometric Outline',
    tagline: '2px bold outlines, sharp 90-degree corners, and 3px block drop silhouettes',
    borderWidth: '2px',
    borderStyle: 'solid',
    radius: 'sharp',
    shadow: 'hard-offset',
    description: 'Clean constructivist outlines inspired by Walter Gropius and Bauhaus Dessau architecture.',
  },
  {
    id: 'nordic-ambient',
    name: 'Nordic Soft Ambient',
    tagline: '1px subtle borders, gentle 12px rounded corners, and soft diffused elevation',
    borderWidth: '1px',
    borderStyle: 'solid',
    radius: 'rounded',
    shadow: 'subtle-diffused',
    description: 'Contemporary Scandinavian product design with soft ambient light falloff and clean rounded corners.',
  },
  {
    id: 'tactile-pinboard',
    name: 'Tactile Paper Lift',
    tagline: '1px warm craft borders, subtle 4px radius, and physical 3D paper lift shadows',
    borderWidth: '1px',
    borderStyle: 'solid',
    radius: 'subtle',
    shadow: 'skeuomorphic',
    description: 'Physical workshop pinboard with warm tactile paper elevation.',
  },
  {
    id: 'glass-glow',
    name: 'Luminous Refraction Rim',
    tagline: '1px glowing neon border, sharp or rounded corners, and colored photon bloom',
    borderWidth: '1px',
    borderStyle: 'solid',
    radius: 'rounded',
    shadow: 'glowing-neon',
    description: 'Luminous glowing border emitting colored ambient glow.',
  },
];

// 4. FONTS & TYPOGRAPHY
export const FONTS: FontOption[] = [
  {
    id: 'clean-sans',
    name: 'Modern Geometric Sans',
    tagline: 'Geist / Inter — Neutral, legible, ultra-clean modern web standard',
    headingFamily: 'var(--font-geist-sans), "Inter", sans-serif',
    bodyFamily: 'var(--font-geist-sans), "Inter", sans-serif',
    monoFamily: 'var(--font-geist-mono), monospace',
    transform: 'none',
    letterSpacing: 'tight',
    weight: 'bold',
    description: 'Standard modern sans-serif optimized for crisp user interface hierarchy and readability.',
  },
  {
    id: 'editorial-serif',
    name: 'Editorial Gazette Serif',
    tagline: 'Playfair Display + Georgia — Literary elegance and classic grace',
    headingFamily: '"Playfair Display", Georgia, serif',
    bodyFamily: 'Georgia, serif',
    monoFamily: 'var(--font-geist-mono), monospace',
    transform: 'none',
    letterSpacing: 'normal',
    weight: 'semibold',
    description: 'Refined publication typography with elegant high-contrast serifs and graceful proportions.',
  },
  {
    id: 'brutalist-grotesk',
    name: 'Bold Space Grotesk',
    tagline: 'Space Grotesk — Loud, punchy, high-impact uppercase headers',
    headingFamily: '"Space Grotesk", Impact, sans-serif',
    bodyFamily: 'var(--font-geist-sans), sans-serif',
    monoFamily: 'var(--font-geist-mono), monospace',
    transform: 'uppercase',
    letterSpacing: 'tight',
    weight: 'black',
    description: 'High-contrast neo-grotesk with bold geometric stance and dramatic uppercase presence.',
  },
  {
    id: 'mono-telemetry',
    name: 'Monospaced Engineering',
    tagline: 'JetBrains Mono — Strict character alignment and technical precision',
    headingFamily: '"JetBrains Mono", var(--font-geist-mono), monospace',
    bodyFamily: 'var(--font-geist-mono), monospace',
    monoFamily: 'var(--font-geist-mono), monospace',
    transform: 'uppercase',
    letterSpacing: 'wide',
    weight: 'bold',
    description: 'Terminal monospaced typography with tabular numerals, perfect for dashboards and telemetry.',
  },
  {
    id: 'compact-technical',
    name: 'Compact HUD Console',
    tagline: 'Geist Mono Wide — Uppercase tracked labels with high legibility',
    headingFamily: 'var(--font-geist-mono), monospace',
    bodyFamily: 'var(--font-geist-sans), sans-serif',
    monoFamily: 'var(--font-geist-mono), monospace',
    transform: 'uppercase',
    letterSpacing: 'wide',
    weight: 'semibold',
    description: 'Technical heads-up display typography pairing monospaced headers with clean body copy.',
  },
];

// 5. SIGNATURE ACCENTS & GRAPHIC DNA
export const ACCENTS: AccentOption[] = [
  {
    id: 'cad-crosshairs',
    name: 'CAD Drafting Crosshairs & Rulers',
    tagline: 'Corner targeting crosshairs, perimeter millimeter rulers, coordinate tags',
    crosshairs: true,
    rulers: true,
    cornerTicks: true,
    description: 'Architectural drafting crosshairs, millimeter dimensions, and coordinate tags.',
  },
  {
    id: 'crt-scanlines',
    name: 'CRT Phosphor Scanlines',
    tagline: 'Horizontal raster scanline overlay with subtle vignette',
    scanlines: true,
    cornerTicks: true,
    description: 'Retro CRT monitor scanline shader giving digital terminal depth.',
  },
  {
    id: 'washi-tape',
    name: 'Tactile Washi Tape Strips',
    tagline: 'Textured washi tape tape-downs fixed to card headers with subtle paper grain',
    washiTape: true,
    noiseGrain: true,
    description: 'Physical workshop aesthetic with washi tape header accents.',
  },
  {
    id: 'dot-grid',
    name: 'Architectural Dot Grid',
    tagline: 'Subtle mathematical dot matrix texture across background surface',
    dotGrid: true,
    description: 'Precision architectural drafting dot grid for visual structure.',
  },
  {
    id: 'corner-ticks',
    name: 'Corner Registration Ticks (┌ ┐ └ ┘)',
    tagline: 'Technical boundary corner registration marks',
    cornerTicks: true,
    description: 'Classic printing and technical drafting corner alignment marks.',
  },
  {
    id: 'pure-minimal',
    name: 'Pure Minimal (No Accents)',
    tagline: 'Unadorned graphic clarity with zero decorative distractions',
    description: 'Strict minimalist execution letting typography and space breathe.',
  },
];

// 6. MOTION & INTERACTION PHYSICS
export const ANIMATIONS: AnimationOption[] = [
  {
    id: 'snappy-spring',
    name: 'Snappy Kinetic Spring',
    tagline: 'Lively 150ms micro-spring pop on hover and active click',
    transitionCurve: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    duration: '150ms',
    cssStyle: 'transition-all duration-150 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]',
    hoverClass: 'hover:-translate-y-1 hover:scale-[1.02]',
    activeClass: 'active:scale-95 active:translate-y-0.5',
    description: 'Brisk, mechanical click responsiveness inspired by physical micro-switches.',
  },
  {
    id: 'subtle-ambient',
    name: 'Subtle Ambient Fade',
    tagline: 'Gentle 300ms ease-in-out transition with quiet elegance',
    transitionCurve: 'cubic-bezier(0.4, 0, 0.2, 1)',
    duration: '300ms',
    cssStyle: 'transition-all duration-300 ease-in-out',
    hoverClass: 'hover:opacity-90 hover:shadow-md',
    activeClass: 'active:opacity-80',
    description: 'Serene, smooth transitions that quietly respect visual attention.',
  },
  {
    id: 'retro-stepped',
    name: 'Retro Stepped Mechanical',
    tagline: 'Zero-blur 100ms stepped click action like hardware relays',
    transitionCurve: 'steps(3)',
    duration: '100ms',
    cssStyle: 'transition-transform duration-100 ease-[steps(3)]',
    hoverClass: 'hover:translate-x-0.5 hover:translate-y-0.5',
    activeClass: 'active:translate-x-1 active:translate-y-1',
    description: 'Crisp stepped feedback without intermediate tweening, reminiscent of vintage machinery.',
  },
  {
    id: 'fluid-ease',
    name: 'Fluid Modern Ease',
    tagline: 'Silky 250ms cubic ease for contemporary fluid workflows',
    transitionCurve: 'cubic-bezier(0.16, 1, 0.3, 1)',
    duration: '250ms',
    cssStyle: 'transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)]',
    hoverClass: 'hover:-translate-y-1 hover:shadow-lg',
    activeClass: 'active:scale-98',
    description: 'Apple-style fluid physics with gentle acceleration and natural deceleration.',
  },
  {
    id: 'tactile-bounce',
    name: 'Tactile Micro-Bounce',
    tagline: 'Playful 200ms overshoot bounce on click and hover',
    transitionCurve: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    duration: '200ms',
    cssStyle: 'transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)]',
    hoverClass: 'hover:scale-[1.04] hover:-translate-y-0.5',
    activeClass: 'active:scale-95',
    description: 'Tactile micro-bounce providing satisfying feedback for buttons and pills.',
  },
];

// Default Initial Composition
export const DEFAULT_COMPOSITION: DesignComposition = {
  palette: PALETTES[0], // Bauhaus Primaries
  layout: LAYOUTS[0], // Bento Box Grid
  surface: SURFACES[0], // Neo-Brutalist Hard Drop
  font: FONTS[0], // Modern Geometric Sans
  accents: ACCENTS[3], // Dot Grid
  animation: ANIMATIONS[0], // Snappy Kinetic Spring
};

// Generate AI Agent Master Prompt
export function generateAgentPrompt(comp: DesignComposition): string {
  const { palette, layout, surface, font, accents, animation } = comp;

  const activeAccentsList = [
    accents.crosshairs ? 'Drafting crosshairs & coordinates' : null,
    accents.rulers ? 'Millimeter metric perimeter rulers' : null,
    accents.cornerTicks ? 'Corner registration marks (┌ ┐ └ ┘)' : null,
    accents.scanlines ? 'CRT phosphor horizontal scanlines' : null,
    accents.washiTape ? 'Washi tape header strips' : null,
    accents.dotGrid ? 'Architectural dot grid matrix' : null,
  ]
    .filter(Boolean)
    .join(', ');

  return `Build an application following this exact visual design specification:

Aesthetic Combination:
- Palette & Mood: "${palette.name}" (Primary: ${palette.primary}, Secondary: ${palette.secondary}, Accent: ${palette.accent}, Background: ${palette.background}, Card Surface: ${palette.surface}, Border: ${palette.border}, Text: ${palette.text}, Mode: ${palette.isDark ? 'Dark' : 'Light'}).
- Layout Architecture: "${layout.name}" (${layout.type} architecture with ${layout.density} density. ${layout.description}).
- Surface & Elevation: "${surface.name}" (${surface.borderWidth} ${surface.borderStyle} borders, ${surface.radius} corner radius, ${surface.shadow} shadow treatment).
- Typography: "${font.name}" (Heading Font: ${font.headingFamily}, Heading Transform: ${font.transform}, Body: ${font.bodyFamily}, Tracking: ${font.letterSpacing}).
- Signature Accents: "${accents.name}" (${activeAccentsList || 'Pure minimal without graphic overlays'}).
- Motion & Interaction Physics: "${animation.name}" (${animation.duration} duration with ${animation.transitionCurve} curve).

Strict Invariants for the AI Agent:
1. Always apply ${surface.borderWidth} solid borders with color "${palette.border}" on cards, buttons, and inputs.
2. Shadow Treatment: ${
    surface.shadow === 'hard-offset' ? 'Use hard offset block shadows (e.g. 4px 4px 0px #000) with ZERO blur.' :
    surface.shadow === 'none' ? 'Flat design with ZERO drop shadows.' :
    surface.shadow === 'glowing-neon' ? `Use glowing phosphor bloom shadow: 0 0 16px ${palette.primary}66.` :
    'Use subtle ambient diffused shadows.'
  }
3. Corner Radii: strictly "${surface.radius}" (${
    surface.radius === 'sharp' ? 'rounded-none / 0px' :
    surface.radius === 'subtle' ? 'rounded (4px)' :
    surface.radius === 'rounded' ? 'rounded-xl (12px)' : 'rounded-full'
  }). Do not mix round and sharp arbitrarily.
4. Layout Architecture: Implement the "${layout.type}" layout structure. Density is "${layout.density}". Keep metric tiles and action controls aligned with no empty vertical waste.
5. Typography: Heading weight is ${font.weight}, transform is ${font.transform}.
6. Motion: Use transition curve \`${animation.transitionCurve}\` with \`${animation.duration}\` duration for button hover/active states.`;
}

// Generate Full Structured Design Spec
export function generateFullDesignSpec(comp: DesignComposition): string {
  const { palette, layout, surface, font, accents, animation } = comp;

  return `# DESIGN SPECIFICATION: ${palette.name.toUpperCase()} / ${layout.name.toUpperCase()}

> **Aesthetic Archetype**: ${palette.name} + ${layout.name} + ${surface.name}
> **Typography**: ${font.name}
> **Signature Accents**: ${accents.name}
> **Motion Physics**: ${animation.name}

---

## 1. AI Agent Prompt

\`\`\`markdown
${generateAgentPrompt(comp)}
\`\`\`

---

## 2. Semantic CSS Variables

\`\`\`css
:root {
  /* Color Tokens */
  --color-primary: ${palette.primary};
  --color-secondary: ${palette.secondary};
  --color-accent: ${palette.accent};
  --color-background: ${palette.background};
  --color-surface: ${palette.surface};
  --color-border: ${palette.border};
  --color-text-primary: ${palette.text};
  --color-text-muted: ${palette.textMuted};

  /* Structural Tokens */
  --border-width: ${surface.borderWidth};
  --border-style: ${surface.borderStyle};
  --radius-archetype: ${surface.radius === 'sharp' ? '0px' : surface.radius === 'subtle' ? '4px' : surface.radius === 'rounded' ? '12px' : '9999px'};
  --shadow-archetype: ${
    surface.shadow === 'none' ? 'none' :
    surface.shadow === 'hard-offset' ? '4px 4px 0px ' + palette.border :
    surface.shadow === 'glowing-neon' ? '0 0 16px ' + palette.primary :
    '0 4px 12px rgba(0,0,0,0.08)'
  };

  /* Typography */
  --font-heading: ${font.headingFamily};
  --font-body: ${font.bodyFamily};
  --font-mono: ${font.monoFamily};
  --heading-transform: ${font.transform};

  /* Motion Physics */
  --transition-curve: ${animation.transitionCurve};
  --transition-duration: ${animation.duration};
}
\`\`\`

---

## 3. Tailwind CSS v4 Theme Configuration

\`\`\`css
@import "tailwindcss";

@theme {
  --color-primary: ${palette.primary};
  --color-secondary: ${palette.secondary};
  --color-accent: ${palette.accent};
  --color-background: ${palette.background};
  --color-surface: ${palette.surface};
  --color-border: ${palette.border};
  --color-text-primary: ${palette.text};
  --color-text-muted: ${palette.textMuted};

  --radius-card: ${surface.radius === 'sharp' ? '0px' : surface.radius === 'subtle' ? '4px' : surface.radius === 'rounded' ? '12px' : '9999px'};
}
\`\`\`
`;
}
