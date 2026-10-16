import {
  AnimationOption,
  DesignComposition,
  FontOption,
  LayoutOption,
  PaletteOption,
  StyleOption,
  ThemeOption,
} from '../types/design';

// 1. PALETTES
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

// 2. LAYOUTS
export const LAYOUTS: LayoutOption[] = [
  {
    id: 'bento-grid',
    name: 'Bento Box Modular Grid',
    tagline: 'Asymmetric multi-scale cards with clear modular division',
    type: 'bento',
    density: 'balanced',
    description: 'Modern Bento-style layout organizing hero metrics, feature cards, and control modules into clean visual containers.',
  },
  {
    id: 'dense-telemetry',
    name: 'Dense Telemetry Cockpit',
    tagline: 'High information density with compact cards and zero wasted space',
    type: 'cockpit',
    density: 'compact',
    description: 'Industrial mission-control layout designed for maximum data visibility, compact tables, and quick action bars.',
  },
  {
    id: 'swiss-editorial',
    name: 'Asymmetric Swiss Rules',
    tagline: 'Mathematical whitespace rhythm, hairline column dividing rules',
    type: 'asymmetric-swiss',
    density: 'compact',
    description: 'International typographic grid with strong vertical guides, disciplined negative space, and strict typographic hierarchy.',
  },
  {
    id: 'minimal-dock',
    name: 'Minimalist Island Dock',
    tagline: 'Airy floating panels with tranquil margins and spacious ease',
    type: 'minimal-dock',
    density: 'spacious',
    description: 'Focused single-pane architecture with expansive margins and elevated central cards for distraction-free workflows.',
  },
  {
    id: 'card-stream',
    name: 'Feed Stream & Action Bar',
    tagline: 'Chronological timeline feed paired with right-rail telemetry',
    type: 'card-stream',
    density: 'balanced',
    description: 'Activity stream layout with status cards, action triggers, and quick metric summaries.',
  },
];

// 3. THEMES / ATMOSPHERE
export const THEMES: ThemeOption[] = [
  {
    id: 'daylight-studio',
    name: 'Crisp Daylight Studio',
    tagline: 'Pure white gallery walls, high clarity, and natural illumination',
    mode: 'daylight',
    surfaceOpacity: '1',
    backgroundStyle: 'clean',
    description: 'Bright, clean studio environment emphasizing typography and crisp component silhouettes.',
  },
  {
    id: 'oled-nocturne',
    name: 'Deep OLED Nocturne',
    tagline: 'Pitch black foundation with high-contrast luminous highlights',
    mode: 'nocturne',
    surfaceOpacity: '1',
    backgroundStyle: 'dark-graphite',
    description: 'Night operations aesthetic optimized for dark displays with luminous neon telemetry.',
  },
  {
    id: 'antique-vellum',
    name: 'Warm Antique Vellum',
    tagline: 'Subtle paper grain, gentle sepia tones, and tactile craftsmanship',
    mode: 'vellum',
    surfaceOpacity: '0.96',
    backgroundStyle: 'paper-noise',
    description: 'Tactile physical vellum paper warmth reminiscent of classic monographs and architectural notebooks.',
  },
  {
    id: 'frosted-crystal',
    name: 'Frosted Crystal Blur',
    tagline: 'Semi-translucent glass layers with backdrop-filter refraction',
    mode: 'glass',
    surfaceOpacity: '0.8',
    backgroundStyle: 'mesh-gradient',
    description: 'Glassmorphic frosted aesthetic with subtle blurs, refraction borders, and ambient light pass-through.',
  },
  {
    id: 'stark-monochrome',
    name: 'Stark Monochromatic',
    tagline: 'High-definition black and white with surgical precision',
    mode: 'monochrome',
    surfaceOpacity: '1',
    backgroundStyle: 'stark-white',
    description: 'Zero distraction monochromatic contrast allowing form, proportion, and typography to shine.',
  },
];

// 4. STYLES & TREATMENTS
export const STYLES: StyleOption[] = [
  {
    id: 'neo-brutalist',
    name: 'Neo-Brutalist Hard Offset',
    tagline: '3px solid black borders and 4px unblurred block drop shadows',
    borderWidth: '3px',
    borderStyle: 'solid',
    radius: 'subtle',
    shadow: 'hard-offset',
    accents: { dotGrid: true },
    description: 'Playful, unapologetic physical boundary lines with hard directional drop-cast block shadows.',
  },
  {
    id: 'cad-blueprint',
    name: 'CAD Blueprint Crosshairs',
    tagline: '1px hairline grids, drafting crosshairs, and zero border radius',
    borderWidth: '1px',
    borderStyle: 'solid',
    radius: 'sharp',
    shadow: 'none',
    accents: { cornerTicks: true, crosshairs: true, rulers: true },
    description: 'Engineered CAD drafting treatment with corner alignment marks, precision coordinates, and rulers.',
  },
  {
    id: 'bauhaus-geometric',
    name: 'Bauhaus Geometric Outlines',
    tagline: '2px bold outlines, sharp 90-degree corners, and block silhouettes',
    borderWidth: '2px',
    borderStyle: 'solid',
    radius: 'sharp',
    shadow: 'hard-offset',
    accents: { cornerTicks: true },
    description: 'Clean constructivist outlines inspired by Walter Gropius and Bauhaus Dessau architecture.',
  },
  {
    id: 'nordic-ambient',
    name: 'Nordic Soft Elevation',
    tagline: '1px subtle borders, gentle 10px rounded corners, and soft ambient shadow',
    borderWidth: '1px',
    borderStyle: 'solid',
    radius: 'rounded',
    shadow: 'subtle-diffused',
    accents: {},
    description: 'Contemporary Scandinavian product design with soft ambient light falloff and clean rounded corners.',
  },
  {
    id: 'tactile-pinboard',
    name: 'Tactile Washi Pinboard',
    tagline: 'Washi tape header strips, memo paper cards, and physical lift shadows',
    borderWidth: '1px',
    borderStyle: 'solid',
    radius: 'subtle',
    shadow: 'skeuomorphic',
    accents: { washiTape: true, noiseGrain: true },
    description: 'Physical workshop pinboard with washi tape header accents and warm tactile paper elevation.',
  },
  {
    id: 'crt-scada',
    name: 'CRT Terminal Scanlines',
    tagline: 'Glowing phosphor borders, scanline scan overlay, and sharp corners',
    borderWidth: '1px',
    borderStyle: 'solid',
    radius: 'sharp',
    shadow: 'glowing-neon',
    accents: { scanlines: true, cornerTicks: true },
    description: 'Industrial telemetry console with phosphor blooming glow and horizontal CRT raster lines.',
  },
];

// 5. FONTS & TYPOGRAPHY
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

// 6. ANIMATION & MOTION
export const ANIMATIONS: AnimationOption[] = [
  {
    id: 'snappy-spring',
    name: 'Snappy Kinetic Spring',
    tagline: 'Instant tactile response with a lively 150ms micro-spring pop',
    transitionCurve: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    duration: '150ms',
    styleClass: 'transition-all duration-150 active:scale-95 hover:-translate-y-0.5',
    description: 'Brisk, mechanical click responsiveness inspired by physical micro-switches.',
  },
  {
    id: 'subtle-ambient',
    name: 'Subtle Ambient Fade',
    tagline: 'Gentle 250ms ease-in-out transition with quiet elegance',
    transitionCurve: 'cubic-bezier(0.4, 0, 0.2, 1)',
    duration: '250ms',
    styleClass: 'transition-all duration-200 hover:opacity-90',
    description: 'Serene, smooth transitions that quietly respect visual attention.',
  },
  {
    id: 'retro-stepped',
    name: 'Retro Stepped Mechanical',
    tagline: 'Zero-blur stepped keyframe action like hardware relays',
    transitionCurve: 'steps(3)',
    duration: '100ms',
    styleClass: 'transition-transform duration-100 active:translate-x-1 active:translate-y-1',
    description: 'Crisp stepped feedback without intermediate tweening, reminiscent of vintage machinery.',
  },
  {
    id: 'fluid-ease',
    name: 'Fluid Modern Ease',
    tagline: 'Silky 200ms cubic ease for contemporary fluid workflows',
    transitionCurve: 'cubic-bezier(0.16, 1, 0.3, 1)',
    duration: '200ms',
    styleClass: 'transition-all duration-200 hover:shadow-lg',
    description: 'Apple-style fluid physics with gentle acceleration and natural deceleration.',
  },
  {
    id: 'tactile-bounce',
    name: 'Tactile Micro-Bounce',
    tagline: 'Playful slight overshoot on click and hover',
    transitionCurve: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    duration: '180ms',
    styleClass: 'transition-transform duration-180 hover:scale-105 active:scale-95',
    description: 'Tactile micro-bounce providing satisfying feedback for buttons and pills.',
  },
];

// Default Initial Composition
export const DEFAULT_COMPOSITION: DesignComposition = {
  palette: PALETTES[0], // Bauhaus Primaries
  layout: LAYOUTS[0], // Bento Box
  theme: THEMES[0], // Daylight Studio
  style: STYLES[0], // Neo-Brutalist
  font: FONTS[0], // Modern Geometric Sans
  animation: ANIMATIONS[0], // Snappy Kinetic Spring
};

// Generate AI Agent Master Prompt
export function generateAgentPrompt(comp: DesignComposition): string {
  const { palette, layout, theme, style, font, animation } = comp;

  return `Build an application following this exact visual design specification:

Aesthetic Combination:
- Palette: "${palette.name}" (Primary: ${palette.primary}, Secondary: ${palette.secondary}, Accent: ${palette.accent}, Background: ${palette.background}, Card Surface: ${palette.surface}, Border: ${palette.border}, Text: ${palette.text}).
- Layout: "${layout.name}" (${layout.type} architecture with ${layout.density} density).
- Theme: "${theme.name}" (${theme.mode} mode, ${theme.description}).
- Style Treatment: "${style.name}" (${style.borderWidth} ${style.borderStyle} borders, ${style.radius} corner radius, ${style.shadow} shadow profile).
- Typography: "${font.name}" (Heading Font: ${font.headingFamily}, Heading Transform: ${font.transform}, Body: ${font.bodyFamily}, Tracking: ${font.letterSpacing}).
- Motion / Animation: "${animation.name}" (${animation.duration} duration with ${animation.transitionCurve} curve).

Strict Invariants for the AI Agent:
1. Always apply ${style.borderWidth} solid borders with color "${palette.border}" on cards, buttons, and inputs.
2. Shadow Treatment: ${
    style.shadow === 'hard-offset' ? 'Use hard offset block shadows (e.g. 4px 4px 0px #000) with ZERO blur.' :
    style.shadow === 'none' ? 'Flat design with ZERO drop shadows.' :
    style.shadow === 'glowing-neon' ? `Use glowing phosphor bloom shadow: 0 0 14px ${palette.primary}66.` :
    'Use subtle ambient diffused shadows.'
  }
3. Corner Radii: strictly "${style.radius}" (${
    style.radius === 'sharp' ? 'rounded-none / 0px' :
    style.radius === 'subtle' ? 'rounded (4px)' :
    style.radius === 'rounded' ? 'rounded-xl (10-12px)' : 'rounded-full'
  }). Do not mix round and sharp arbitrarily.
4. Density: "${layout.density}" spacing. Never waste unnecessary vertical whitespace. Keep metric tiles and action controls tight and ergonomic.
5. Typography: Heading weight is ${font.weight}, transform is ${font.transform}.`;
}

// Generate Full Structured Design Spec
export function generateFullDesignSpec(comp: DesignComposition): string {
  const { palette, layout, theme, style, font, animation } = comp;

  return `# DESIGN SPECIFICATION: ${palette.name.toUpperCase()} / ${style.name.toUpperCase()}

> **Archetype Blend**: ${palette.name} + ${layout.name} + ${style.name}
> **Theme Mode**: ${theme.name} (${theme.mode})
> **Typography**: ${font.name}
> **Motion**: ${animation.name}

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
  --border-width: ${style.borderWidth};
  --border-style: ${style.borderStyle};
  --radius-archetype: ${style.radius === 'sharp' ? '0px' : style.radius === 'subtle' ? '4px' : style.radius === 'rounded' ? '12px' : '9999px'};
  --shadow-archetype: ${
    style.shadow === 'none' ? 'none' :
    style.shadow === 'hard-offset' ? '4px 4px 0px ' + palette.border :
    style.shadow === 'glowing-neon' ? '0 0 16px ' + palette.primary :
    '0 4px 12px rgba(0,0,0,0.08)'
  };

  /* Typography */
  --font-heading: ${font.headingFamily};
  --font-body: ${font.bodyFamily};
  --font-mono: ${font.monoFamily};
  --heading-transform: ${font.transform};

  /* Animation */
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

  --radius-card: ${style.radius === 'sharp' ? '0px' : style.radius === 'subtle' ? '4px' : style.radius === 'rounded' ? '12px' : '9999px'};
}
\`\`\`
`;
}
