import { ThemePreset, ThemeTokens } from '../types/theme';
import { getBestContrastTextColor } from './contrast';

export interface VibeSeed {
  label: string;
  prompt: string;
  category: 'Modern' | 'Brutalist' | 'Technical' | 'Editorial' | 'Retro' | 'Minimalist' | 'Tactile';
}

export const VIBE_SEEDS: VibeSeed[] = [
  {
    label: 'Tokyo Midnight Cyberpunk',
    prompt: 'Tokyo midnight convenience store with neon cyan signage, holographic rain, and dense telemetry',
    category: 'Technical',
  },
  {
    label: 'NASA Apollo 11 AGC',
    prompt: 'Apollo 11 lunar module flight guidance computer with amber 7-segment readouts and titanium hardware',
    category: 'Retro',
  },
  {
    label: 'Solarpunk Botanical Lab',
    prompt: 'Solarpunk botanical conservatory with sage green, terra cotta tiles, brass fittings, and lush greenhouse data',
    category: 'Tactile',
  },
  {
    label: 'Swiss Medical Precision',
    prompt: 'Swiss clinical laboratory diagnostic instrument with pure white surfaces, surgical crimson, and sterile typography',
    category: 'Minimalist',
  },
  {
    label: 'Dark Academia Library',
    prompt: 'Oxford leather-bound library with aged vellum, dark walnut, deep forest green velvet, and brass lamps',
    category: 'Editorial',
  },
  {
    label: '90s Acid Rave Cassette',
    prompt: '1990s rave mixtape cassette with neon lime, radioactive ultraviolet, xerox halftone dots, and block shadows',
    category: 'Brutalist',
  },
  {
    label: 'Hyper-Minimalist Monolith',
    prompt: 'Monolithic deep obsidian black interface with pure white razor hairline borders and zero distractions',
    category: 'Modern',
  },
  {
    label: 'Industrial SCADA Nuclear',
    prompt: 'Heavy nuclear reactor SCADA console with radioactive amber warnings, CRT phosphorus green, and steel casing',
    category: 'Technical',
  },
];

// Color palette definitions for semantic concepts
const PALETTE_THEMES: Record<string, {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  cardSurface: string;
  cardSurfaceMuted: string;
  border: string;
  borderMuted: string;
  textPrimary: string;
  textMuted: string;
  isDark: boolean;
}> = {
  cyberpunk: {
    primary: '#00F0FF',
    secondary: '#FF007F',
    accent: '#FFE600',
    background: '#080811',
    cardSurface: '#121224',
    cardSurfaceMuted: '#1B1B36',
    border: '#00F0FF',
    borderMuted: '#1E3A5F',
    textPrimary: '#E0F8FF',
    textMuted: '#7AA2C0',
    isDark: true,
  },
  space: {
    primary: '#FF9E00',
    secondary: '#3A86FF',
    accent: '#00F5D4',
    background: '#0B0C10',
    cardSurface: '#1F2833',
    cardSurfaceMuted: '#2D3748',
    border: '#45A29E',
    borderMuted: '#284B63',
    textPrimary: '#66FCF1',
    textMuted: '#A0AEC0',
    isDark: true,
  },
  solarpunk: {
    primary: '#2D6A4F',
    secondary: '#E07A5F',
    accent: '#D4A373',
    background: '#F4F1DE',
    cardSurface: '#FFFFFF',
    cardSurfaceMuted: '#E9E5CF',
    border: '#B7B7A4',
    borderMuted: '#CCD5AE',
    textPrimary: '#1B4332',
    textMuted: '#52796F',
    isDark: false,
  },
  clinical: {
    primary: '#D90429',
    secondary: '#0077B6',
    accent: '#023E8A',
    background: '#F8F9FA',
    cardSurface: '#FFFFFF',
    cardSurfaceMuted: '#EDF2F4',
    border: '#2B2D42',
    borderMuted: '#8D99AE',
    textPrimary: '#2B2D42',
    textMuted: '#8D99AE',
    isDark: false,
  },
  academia: {
    primary: '#854D0E',
    secondary: '#1E3A2B',
    accent: '#CA8A04',
    background: '#FDFBF7',
    cardSurface: '#F5EFE6',
    cardSurfaceMuted: '#E8DFD0',
    border: '#D4C5B2',
    borderMuted: '#E2D5C3',
    textPrimary: '#2A2016',
    textMuted: '#6D5B48',
    isDark: false,
  },
  rave: {
    primary: '#00FF66',
    secondary: '#FF0055',
    accent: '#7000FF',
    background: '#0D0221',
    cardSurface: '#19053B',
    cardSurfaceMuted: '#240654',
    border: '#00FF66',
    borderMuted: '#4F1D77',
    textPrimary: '#FFFFFF',
    textMuted: '#B392DF',
    isDark: true,
  },
  monolith: {
    primary: '#FFFFFF',
    secondary: '#A1A1AA',
    accent: '#3B82F6',
    background: '#09090B',
    cardSurface: '#121215',
    cardSurfaceMuted: '#1E1E24',
    border: '#27272A',
    borderMuted: '#1D1D20',
    textPrimary: '#FAFAFA',
    textMuted: '#71717A',
    isDark: true,
  },
  industrial: {
    primary: '#FFB703',
    secondary: '#FB8500',
    accent: '#219EBC',
    background: '#121417',
    cardSurface: '#1B1E24',
    cardSurfaceMuted: '#252932',
    border: '#3F4452',
    borderMuted: '#2A2E38',
    textPrimary: '#F0F2F5',
    textMuted: '#8B92A4',
    isDark: true,
  },
  pastel: {
    primary: '#845EC2',
    secondary: '#FF9671',
    accent: '#FFC75F',
    background: '#FFF9F4',
    cardSurface: '#FFFFFF',
    cardSurfaceMuted: '#FBECE3',
    border: '#33272A',
    borderMuted: '#BAA1A7',
    textPrimary: '#33272A',
    textMuted: '#594A4E',
    isDark: false,
  },
};

export function synthesizeThemeFromPrompt(prompt: string): ThemePreset {
  const p = prompt.toLowerCase();

  // Detect theme domain
  let matchedKey = 'cyberpunk';
  if (p.includes('apollo') || p.includes('space') || p.includes('nasa') || p.includes('satellite') || p.includes('lunar')) {
    matchedKey = 'space';
  } else if (p.includes('solar') || p.includes('botan') || p.includes('plant') || p.includes('garden') || p.includes('nature') || p.includes('eco')) {
    matchedKey = 'solarpunk';
  } else if (p.includes('clinic') || p.includes('med') || p.includes('swiss') || p.includes('sterile') || p.includes('lab') || p.includes('hospital')) {
    matchedKey = 'clinical';
  } else if (p.includes('academi') || p.includes('library') || p.includes('oxford') || p.includes('book') || p.includes('vellum') || p.includes('paper')) {
    matchedKey = 'academia';
  } else if (p.includes('rave') || p.includes('acid') || p.includes('cassette') || p.includes('90s') || p.includes('brutal') || p.includes('punk')) {
    matchedKey = 'rave';
  } else if (p.includes('monolith') || p.includes('minimal') || p.includes('nordic') || p.includes('slate') || p.includes('obsidian') || p.includes('stealth')) {
    matchedKey = 'monolith';
  } else if (p.includes('scada') || p.includes('industrial') || p.includes('factory') || p.includes('reactor') || p.includes('hardware') || p.includes('synth')) {
    matchedKey = 'industrial';
  } else if (p.includes('pastel') || p.includes('candy') || p.includes('cute') || p.includes('soft') || p.includes('pop')) {
    matchedKey = 'pastel';
  } else if (p.includes('cyber') || p.includes('neon') || p.includes('tokyo') || p.includes('futur') || p.includes('matrix')) {
    matchedKey = 'cyberpunk';
  } else {
    // Hash-based selection if no direct keyword matched
    const keys = Object.keys(PALETTE_THEMES);
    const hash = prompt.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    matchedKey = keys[hash % keys.length];
  }

  const chosen = PALETTE_THEMES[matchedKey];

  // Infer Density
  const isCompact = p.includes('dense') || p.includes('telemetry') || p.includes('scada') || p.includes('cad') || p.includes('compact') || p.includes('hud');
  const isSpacious = p.includes('spacious') || p.includes('roomy') || p.includes('minimal') || p.includes('editorial') || p.includes('airy');
  const density: ThemeTokens['density'] = isCompact ? 'compact' : isSpacious ? 'spacious' : 'balanced';

  // Infer Corner Radius
  const isSharp = p.includes('sharp') || p.includes('cad') || p.includes('bauhaus') || p.includes('brutal') || p.includes('box') || p.includes('monolith') || p.includes('terminal');
  const isPill = p.includes('pill') || p.includes('soft') || p.includes('bubbly') || p.includes('pebble');
  const isRounded = p.includes('round') || p.includes('modern') || p.includes('apple') || p.includes('glass');
  const radius: ThemeTokens['radius'] = isSharp ? 'sharp' : isPill ? 'pill' : isRounded ? 'rounded' : 'subtle';

  // Infer Shadow Style
  let shadow: ThemeTokens['shadow'] = 'subtle-diffused';
  if (p.includes('hard') || p.includes('brutal') || p.includes('bauhaus') || p.includes('rave') || p.includes('offset')) {
    shadow = 'hard-offset';
  } else if (p.includes('glow') || p.includes('neon') || p.includes('cyber') || p.includes('matrix')) {
    shadow = 'glowing-neon';
  } else if (p.includes('skeuomorph') || p.includes('paper') || p.includes('leather') || p.includes('tactile')) {
    shadow = 'skeuomorphic';
  } else if (p.includes('flat') || p.includes('cad') || p.includes('clean') || p.includes('blueprint') || p.includes('swiss')) {
    shadow = 'none';
  }

  // Infer Border Width
  let borderWidth: ThemeTokens['borderWidth'] = '1px';
  if (p.includes('thick') || p.includes('brutal') || p.includes('3px') || p.includes('pop')) {
    borderWidth = '3px';
  } else if (p.includes('bold') || p.includes('bauhaus') || p.includes('2px')) {
    borderWidth = '2px';
  } else if (p.includes('frameless') || p.includes('borderless') || p.includes('no border')) {
    borderWidth = '0px';
  }

  // Infer Typography
  let pairing: ThemeTokens['typography']['pairing'] = 'sans-modern';
  let headingFamily = 'var(--font-geist-sans), "Helvetica Neue", sans-serif';
  let bodyFamily = 'var(--font-geist-sans), "Helvetica Neue", sans-serif';
  const monoFamily = 'var(--font-geist-mono), monospace';
  let headingTransform: 'none' | 'uppercase' | 'capitalize' = 'none';
  let headingWeight: ThemeTokens['typography']['headingWeight'] = 'bold';

  if (p.includes('terminal') || p.includes('scada') || p.includes('telemetry') || p.includes('matrix') || p.includes('cad') || p.includes('apollo')) {
    pairing = 'cyber-terminal';
    headingFamily = 'var(--font-geist-mono), monospace';
    bodyFamily = 'var(--font-geist-mono), monospace';
    headingTransform = 'uppercase';
  } else if (p.includes('editorial') || p.includes('library') || p.includes('book') || p.includes('paper') || p.includes('vellum') || p.includes('serif')) {
    pairing = 'editorial-serif';
    headingFamily = '"Playfair Display", Georgia, serif';
    bodyFamily = 'Georgia, serif';
    headingWeight = 'semibold';
  } else if (p.includes('bauhaus') || p.includes('geometric') || p.includes('constructivist')) {
    pairing = 'geometric-bauhaus';
    headingTransform = 'uppercase';
    headingWeight = 'black';
  } else if (p.includes('brutal') || p.includes('loud') || p.includes('rave')) {
    pairing = 'brutalist-grotesk';
    headingTransform = 'uppercase';
    headingWeight = 'black';
  }

  // Infer Accents
  const cornerTicks = p.includes('cad') || p.includes('tick') || p.includes('technical') || p.includes('scada') || p.includes('crosshair');
  const draftingCrosshairs = p.includes('crosshair') || p.includes('cad') || p.includes('blueprint') || p.includes('schematic');
  const washiTape = p.includes('washi') || p.includes('tape') || p.includes('pinboard') || p.includes('memo') || p.includes('craft');
  const scanlines = p.includes('scanline') || p.includes('crt') || p.includes('cyber') || p.includes('terminal') || p.includes('retro');
  const dotGrid = p.includes('dot') || p.includes('grid') || p.includes('halftone') || p.includes('matrix');
  const metricRulers = p.includes('ruler') || p.includes('cad') || p.includes('scale') || p.includes('dimension') || p.includes('scada');
  const paperTexture = p.includes('paper') || p.includes('vellum') || p.includes('tactile') || p.includes('kraft');
  const halftoneDots = p.includes('halftone') || p.includes('comic') || p.includes('pop') || p.includes('rave');
  const noiseGrain = p.includes('noise') || p.includes('grain') || p.includes('analog') || p.includes('vintage');
  const skewTilt = p.includes('tilt') || p.includes('sticky') || p.includes('pinboard') || p.includes('playful');

  // Generate readable name
  const titleWords = prompt
    .split(' ')
    .filter((w) => w.length > 2)
    .slice(0, 4)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  const generatedName = titleWords || 'Synthesized Specimen';

  const id = `synth-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`;

  return {
    metadata: {
      id,
      name: generatedName,
      tagline: `AI-Synthesized aesthetic inspired by: "${prompt.slice(0, 75)}${prompt.length > 75 ? '...' : ''}"`,
      description: `Synthesized design system spec based on user prompt: "${prompt}". Features custom color token harmonies, calibrated density, and matching tactile/digital accents.`,
      category: chosen.isDark ? 'Technical' : 'Modern',
      tags: ['synthesized', matchedKey, density, radius, shadow, ...(chosen.isDark ? ['dark'] : ['light'])],
      isCustom: true,
      createdAt: new Date().toISOString(),
    },
    tokens: {
      density,
      radius,
      shadow,
      borderWidth,
      borderStyle: 'solid',
      palette: {
        primary: chosen.primary,
        primaryForeground: getBestContrastTextColor(chosen.primary),
        secondary: chosen.secondary,
        secondaryForeground: getBestContrastTextColor(chosen.secondary),
        accent: chosen.accent,
        accentForeground: getBestContrastTextColor(chosen.accent),
        background: chosen.background,
        cardSurface: chosen.cardSurface,
        cardSurfaceMuted: chosen.cardSurfaceMuted,
        border: chosen.border,
        borderMuted: chosen.borderMuted,
        textPrimary: chosen.textPrimary,
        textMuted: chosen.textMuted,
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
        info: '#3B82F6',
      },
      typography: {
        pairing,
        headingFamily,
        bodyFamily,
        monoFamily,
        letterSpacing: pairing === 'cyber-terminal' ? 'wide' : 'tight',
        headingTransform,
        headingWeight,
      },
      accents: {
        cornerTicks,
        draftingCrosshairs,
        washiTape,
        scanlines,
        dotGrid,
        metricRulers,
        paperTexture,
        halftoneDots,
        noiseGrain,
        skewTilt,
      },
      isDark: chosen.isDark,
    },
  };
}
