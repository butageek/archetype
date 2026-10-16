import { DesignComposition } from '../types/design';
import {
  ACCENTS,
  ANIMATIONS,
  FONTS,
  LAYOUTS,
  PALETTES,
  SURFACES,
} from './modularPresets';

export function getRandomComposition(): DesignComposition {
  const palette = PALETTES[Math.floor(Math.random() * PALETTES.length)];
  const layout = LAYOUTS[Math.floor(Math.random() * LAYOUTS.length)];
  const surface = SURFACES[Math.floor(Math.random() * SURFACES.length)];
  const font = FONTS[Math.floor(Math.random() * FONTS.length)];
  const accents = ACCENTS[Math.floor(Math.random() * ACCENTS.length)];
  const animation = ANIMATIONS[Math.floor(Math.random() * ANIMATIONS.length)];

  return {
    palette,
    layout,
    surface,
    font,
    accents,
    animation,
  };
}

/**
 * SYNTHESIZE: Builds an entire 6-part design system from scratch
 * based on the aesthetic essence, era, or genre described in the prompt.
 */
export function synthesizeCompositionFromPrompt(prompt: string): {
  composition: DesignComposition;
  description: string;
} {
  const p = prompt.toLowerCase();

  // 1. Cyberpunk / SCADA / Matrix / Hologram / Terminal
  if (p.includes('cyber') || p.includes('neon') || p.includes('matrix') || p.includes('phosphor') || p.includes('scada') || p.includes('terminal')) {
    return {
      composition: {
        palette: PALETTES.find((x) => x.id === 'cyber-phosphor') || PALETTES[5],
        layout: LAYOUTS.find((x) => x.id === 'dense-telemetry') || LAYOUTS[1],
        surface: SURFACES.find((x) => x.id === 'glass-glow') || SURFACES[5],
        font: FONTS.find((x) => x.id === 'compact-technical') || FONTS[4],
        accents: ACCENTS.find((x) => x.id === 'crt-scanlines') || ACCENTS[1],
        animation: ANIMATIONS.find((x) => x.id === 'snappy-spring') || ANIMATIONS[0],
      },
      description: 'Synthesized Cyberpunk SCADA archetype (Phosphor Green • Dense Telemetry • CRT Scanlines • Snappy Motion)',
    };
  }

  // 2. CAD / Technical / Blueprint / Schematic / Aerospace / NASA
  if (p.includes('cad') || p.includes('blueprint') || p.includes('schematic') || p.includes('nasa') || p.includes('apollo') || p.includes('aerospace') || p.includes('caliper')) {
    return {
      composition: {
        palette: PALETTES.find((x) => x.id === 'cad-cyan') || PALETTES[6],
        layout: LAYOUTS.find((x) => x.id === 'dense-telemetry') || LAYOUTS[1],
        surface: SURFACES.find((x) => x.id === 'cad-blueprint') || SURFACES[1],
        font: FONTS.find((x) => x.id === 'mono-telemetry') || FONTS[3],
        accents: ACCENTS.find((x) => x.id === 'cad-crosshairs') || ACCENTS[0],
        animation: ANIMATIONS.find((x) => x.id === 'retro-stepped') || ANIMATIONS[2],
      },
      description: 'Synthesized CAD Technical Blueprint archetype (Cyan Drafting • Crosshairs & Rulers • Monospaced Font)',
    };
  }

  // 3. Bauhaus / Constructivist / Primary / Gropius
  if (p.includes('bauhaus') || p.includes('constructiv') || p.includes('primary') || p.includes('gropius') || p.includes('destijl')) {
    return {
      composition: {
        palette: PALETTES.find((x) => x.id === 'bauhaus-primary') || PALETTES[0],
        layout: LAYOUTS.find((x) => x.id === 'asymmetric-swiss') || LAYOUTS[2],
        surface: SURFACES.find((x) => x.id === 'bauhaus-geometric') || SURFACES[2],
        font: FONTS.find((x) => x.id === 'clean-sans') || FONTS[0],
        accents: ACCENTS.find((x) => x.id === 'corner-ticks') || ACCENTS[4],
        animation: ANIMATIONS.find((x) => x.id === 'snappy-spring') || ANIMATIONS[0],
      },
      description: 'Synthesized Bauhaus Constructivist archetype (Primary Colors • Asymmetric Swiss • 2px Outlines)',
    };
  }

  // 4. Nordic / Scandinavian / Minimalist / Zen / Ceramics
  if (p.includes('nordic') || p.includes('scandi') || p.includes('minimal') || p.includes('clean') || p.includes('copenhagen') || p.includes('pottery') || p.includes('ceramic') || p.includes('zen')) {
    return {
      composition: {
        palette: PALETTES.find((x) => x.id === 'nordic-slate') || PALETTES[1],
        layout: LAYOUTS.find((x) => x.id === 'minimal-dock') || LAYOUTS[3],
        surface: SURFACES.find((x) => x.id === 'nordic-ambient') || SURFACES[3],
        font: FONTS.find((x) => x.id === 'clean-sans') || FONTS[0],
        accents: ACCENTS.find((x) => x.id === 'pure-minimal') || ACCENTS[5],
        animation: ANIMATIONS.find((x) => x.id === 'subtle-ambient') || ANIMATIONS[1],
      },
      description: 'Synthesized Nordic Minimalist archetype (Mineral Slate • Floating Island Dock • Soft Ambient Fade)',
    };
  }

  // 5. Neo-Brutalist / Pop / Playful / Acid / Y2K
  if (p.includes('brutal') || p.includes('pop') || p.includes('candy') || p.includes('playful') || p.includes('y2k') || p.includes('acid') || p.includes('chartreuse')) {
    return {
      composition: {
        palette: PALETTES.find((x) => x.id === 'neo-pop') || PALETTES[2],
        layout: LAYOUTS.find((x) => x.id === 'bento-grid') || LAYOUTS[0],
        surface: SURFACES.find((x) => x.id === 'neo-brutalist') || SURFACES[0],
        font: FONTS.find((x) => x.id === 'brutalist-grotesk') || FONTS[2],
        accents: ACCENTS.find((x) => x.id === 'dot-grid') || ACCENTS[3],
        animation: ANIMATIONS.find((x) => x.id === 'tactile-bounce') || ANIMATIONS[4],
      },
      description: 'Synthesized Neo-Brutalist Pop archetype (Electric Pastels • Bento Grid • 3px Hard Borders • Micro-Bounce)',
    };
  }

  // 6. Swiss / International / Typography / Editorial Magazine
  if (p.includes('swiss') || p.includes('helvetica') || p.includes('international') || p.includes('brockmann') || p.includes('zurich')) {
    return {
      composition: {
        palette: PALETTES.find((x) => x.id === 'swiss-crimson') || PALETTES[3],
        layout: LAYOUTS.find((x) => x.id === 'asymmetric-swiss') || LAYOUTS[2],
        surface: SURFACES.find((x) => x.id === 'cad-blueprint') || SURFACES[1],
        font: FONTS.find((x) => x.id === 'clean-sans') || FONTS[0],
        accents: ACCENTS.find((x) => x.id === 'pure-minimal') || ACCENTS[5],
        animation: ANIMATIONS.find((x) => x.id === 'fluid-ease') || ANIMATIONS[3],
      },
      description: 'Synthesized Swiss International archetype (Zurich Red • Asymmetric Rules • Pure Sans Typography)',
    };
  }

  // 7. Editorial / Vellum / Library / Book / Leather / Gazette / Warm
  if (p.includes('editorial') || p.includes('vellum') || p.includes('terracotta') || p.includes('book') || p.includes('library') || p.includes('newspaper') || p.includes('gazette') || p.includes('sepia')) {
    return {
      composition: {
        palette: PALETTES.find((x) => x.id === 'tuscan-terracotta') || PALETTES[4],
        layout: LAYOUTS.find((x) => x.id === 'card-stream') || LAYOUTS[4],
        surface: SURFACES.find((x) => x.id === 'tactile-pinboard') || SURFACES[4],
        font: FONTS.find((x) => x.id === 'editorial-serif') || FONTS[1],
        accents: ACCENTS.find((x) => x.id === 'washi-tape') || ACCENTS[2],
        animation: ANIMATIONS.find((x) => x.id === 'subtle-ambient') || ANIMATIONS[1],
      },
      description: 'Synthesized Warm Editorial archetype (Tuscan Terracotta • Activity Stream • Playfair Serif • Washi Tape)',
    };
  }

  // 8. Solarpunk / Botanical / Greenhouse / Organic / Nature
  if (p.includes('solar') || p.includes('botanical') || p.includes('greenhouse') || p.includes('plant') || p.includes('garden') || p.includes('sage') || p.includes('eco')) {
    return {
      composition: {
        palette: PALETTES.find((x) => x.id === 'solarpunk-sage') || PALETTES[7],
        layout: LAYOUTS.find((x) => x.id === 'bento-grid') || LAYOUTS[0],
        surface: SURFACES.find((x) => x.id === 'nordic-ambient') || SURFACES[3],
        font: FONTS.find((x) => x.id === 'editorial-serif') || FONTS[1],
        accents: ACCENTS.find((x) => x.id === 'dot-grid') || ACCENTS[3],
        animation: ANIMATIONS.find((x) => x.id === 'fluid-ease') || ANIMATIONS[3],
      },
      description: 'Synthesized Solarpunk Conservatory archetype (Sage Green • Bento Grid • Soft Ambient)',
    };
  }

  // 9. Analog Hi-Fi / Dieter Rams / Braun / Synth / Audio / Studio Master
  if (p.includes('audio') || p.includes('hifi') || p.includes('hi-fi') || p.includes('dieter') || p.includes('rams') || p.includes('braun') || p.includes('synth') || p.includes('amber') || p.includes('analog')) {
    return {
      composition: {
        palette: PALETTES.find((x) => x.id === 'analog-amber') || PALETTES[8],
        layout: LAYOUTS.find((x) => x.id === 'dense-telemetry') || LAYOUTS[1],
        surface: SURFACES.find((x) => x.id === 'bauhaus-geometric') || SURFACES[2],
        font: FONTS.find((x) => x.id === 'mono-telemetry') || FONTS[3],
        accents: ACCENTS.find((x) => x.id === 'cad-crosshairs') || ACCENTS[0],
        animation: ANIMATIONS.find((x) => x.id === 'retro-stepped') || ANIMATIONS[2],
      },
      description: 'Synthesized 1970s Hi-Fi Synth archetype (Amber VU • Dense Cockpit • Monospaced • Stepped Physics)',
    };
  }

  // 10. Lavender / Dreamy / Soft / Pastel / Dusk / Lilac
  if (p.includes('lavender') || p.includes('lilac') || p.includes('purple') || p.includes('violet') || p.includes('mist') || p.includes('dreamy')) {
    return {
      composition: {
        palette: PALETTES.find((x) => x.id === 'lavender-fog') || PALETTES[9],
        layout: LAYOUTS.find((x) => x.id === 'minimal-dock') || LAYOUTS[3],
        surface: SURFACES.find((x) => x.id === 'nordic-ambient') || SURFACES[3],
        font: FONTS.find((x) => x.id === 'clean-sans') || FONTS[0],
        accents: ACCENTS.find((x) => x.id === 'pure-minimal') || ACCENTS[5],
        animation: ANIMATIONS.find((x) => x.id === 'fluid-ease') || ANIMATIONS[3],
      },
      description: 'Synthesized Lavender Mist archetype (Lilac Periwinkle • Island Dock • Fluid Modern Ease)',
    };
  }

  // Default fallback hash synthesis based on arbitrary prompt text
  const hash = prompt.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const pIdx = hash % PALETTES.length;
  const lIdx = (hash + 1) % LAYOUTS.length;
  const sIdx = (hash + 2) % SURFACES.length;
  const fIdx = (hash + 3) % FONTS.length;
  const acIdx = (hash + 4) % ACCENTS.length;
  const aIdx = (hash + 5) % ANIMATIONS.length;

  return {
    composition: {
      palette: PALETTES[pIdx],
      layout: LAYOUTS[lIdx],
      surface: SURFACES[sIdx],
      font: FONTS[fIdx],
      accents: ACCENTS[acIdx],
      animation: ANIMATIONS[aIdx],
    },
    description: `Synthesized bespoke archetype: ${PALETTES[pIdx].name} • ${LAYOUTS[lIdx].name} • ${SURFACES[sIdx].name}`,
  };
}

/**
 * BLEND: Intelligently merges ONLY the specific categories mentioned
 * in the prompt into the CURRENT design, leaving all untouched parts intact!
 */
export function blendCompositionWithPrompt(
  prompt: string,
  current: DesignComposition
): {
  composition: DesignComposition;
  blendedCategories: string[];
  description: string;
} {
  const p = prompt.toLowerCase();
  const blended: DesignComposition = { ...current };
  const changed: string[] = [];

  // Check 1: Palette
  if (p.includes('cyber') || p.includes('phosphor') || p.includes('matrix') || p.includes('neon')) {
    blended.palette = PALETTES.find((x) => x.id === 'cyber-phosphor') || current.palette;
    changed.push('Cyber Phosphor Palette');
  } else if (p.includes('cad') || p.includes('blueprint') || p.includes('cyan')) {
    blended.palette = PALETTES.find((x) => x.id === 'cad-cyan') || current.palette;
    changed.push('CAD Cyan Palette');
  } else if (p.includes('bauhaus') || p.includes('primary') || p.includes('yellow') || p.includes('cobalt')) {
    blended.palette = PALETTES.find((x) => x.id === 'bauhaus-primary') || current.palette;
    changed.push('Bauhaus Primary Palette');
  } else if (p.includes('nordic') || p.includes('slate') || p.includes('gray') || p.includes('grey')) {
    blended.palette = PALETTES.find((x) => x.id === 'nordic-slate') || current.palette;
    changed.push('Nordic Slate Palette');
  } else if (p.includes('pop') || p.includes('candy') || p.includes('pink') || p.includes('chartreuse')) {
    blended.palette = PALETTES.find((x) => x.id === 'neo-pop') || current.palette;
    changed.push('Neo-Pop Palette');
  } else if (p.includes('swiss') || p.includes('red') || p.includes('crimson')) {
    blended.palette = PALETTES.find((x) => x.id === 'swiss-crimson') || current.palette;
    changed.push('Swiss Crimson Palette');
  } else if (p.includes('terracotta') || p.includes('ochre') || p.includes('tuscan') || p.includes('sepia') || p.includes('warm')) {
    blended.palette = PALETTES.find((x) => x.id === 'tuscan-terracotta') || current.palette;
    changed.push('Terracotta Palette');
  } else if (p.includes('sage') || p.includes('green') || p.includes('botanical') || p.includes('solar')) {
    blended.palette = PALETTES.find((x) => x.id === 'solarpunk-sage') || current.palette;
    changed.push('Solar Sage Palette');
  } else if (p.includes('amber') || p.includes('brass') || p.includes('audio') || p.includes('hi-fi')) {
    blended.palette = PALETTES.find((x) => x.id === 'analog-amber') || current.palette;
    changed.push('Amber VU Palette');
  } else if (p.includes('lavender') || p.includes('purple') || p.includes('violet') || p.includes('lilac')) {
    blended.palette = PALETTES.find((x) => x.id === 'lavender-fog') || current.palette;
    changed.push('Lavender Palette');
  }

  // Check 2: Layout Architecture
  if (p.includes('bento') || p.includes('modular')) {
    blended.layout = LAYOUTS.find((x) => x.id === 'bento-grid') || current.layout;
    changed.push('Bento Box Layout');
  } else if (p.includes('dense') || p.includes('telemetry') || p.includes('cockpit') || p.includes('compact') || p.includes('terminal table')) {
    blended.layout = LAYOUTS.find((x) => x.id === 'dense-telemetry') || current.layout;
    changed.push('Dense Telemetry Cockpit Layout');
  } else if (p.includes('swiss') || p.includes('asymmetric') || p.includes('rules') || p.includes('hairline')) {
    blended.layout = LAYOUTS.find((x) => x.id === 'swiss-editorial') || current.layout;
    changed.push('Asymmetric Swiss Layout');
  } else if (p.includes('island') || p.includes('dock') || p.includes('spacious') || p.includes('minimal')) {
    blended.layout = LAYOUTS.find((x) => x.id === 'minimal-dock') || current.layout;
    changed.push('Minimalist Island Dock Layout');
  } else if (p.includes('stream') || p.includes('feed') || p.includes('timeline')) {
    blended.layout = LAYOUTS.find((x) => x.id === 'card-stream') || current.layout;
    changed.push('Activity Stream Layout');
  }

  // Check 3: Surface Treatment (Borders & Shadows)
  if (p.includes('brutal') || p.includes('hard border') || p.includes('block shadow') || p.includes('offset') || p.includes('3px')) {
    blended.surface = SURFACES.find((x) => x.id === 'neo-brutalist') || current.surface;
    changed.push('Neo-Brutalist Hard Drop');
  } else if (p.includes('hairline') || p.includes('sharp 0px') || p.includes('flat')) {
    blended.surface = SURFACES.find((x) => x.id === 'cad-blueprint') || current.surface;
    changed.push('CAD Precision Hairline');
  } else if (p.includes('outline') || p.includes('bauhaus') || p.includes('2px')) {
    blended.surface = SURFACES.find((x) => x.id === 'bauhaus-geometric') || current.surface;
    changed.push('Bauhaus Geometric Outline');
  } else if (p.includes('soft') || p.includes('ambient') || p.includes('diffuse') || p.includes('rounded')) {
    blended.surface = SURFACES.find((x) => x.id === 'nordic-ambient') || current.surface;
    changed.push('Nordic Soft Ambient Surface');
  } else if (p.includes('paper lift') || p.includes('tactile lift') || p.includes('craft shadow')) {
    blended.surface = SURFACES.find((x) => x.id === 'tactile-pinboard') || current.surface;
    changed.push('Tactile Paper Lift');
  } else if (p.includes('glow') || p.includes('neon border') || p.includes('refraction')) {
    blended.surface = SURFACES.find((x) => x.id === 'glass-glow') || current.surface;
    changed.push('Luminous Refraction Rim');
  }

  // Check 4: Font & Typography
  if (p.includes('serif') || p.includes('playfair') || p.includes('editorial font') || p.includes('literary')) {
    blended.font = FONTS.find((x) => x.id === 'editorial-serif') || current.font;
    changed.push('Editorial Gazette Serif Font');
  } else if (p.includes('grotesk') || p.includes('space') || p.includes('heavy font') || p.includes('impact') || p.includes('black font')) {
    blended.font = FONTS.find((x) => x.id === 'brutalist-grotesk') || current.font;
    changed.push('Bold Space Grotesk Font');
  } else if (p.includes('mono') || p.includes('code') || p.includes('jetbrains') || p.includes('engineering font')) {
    blended.font = FONTS.find((x) => x.id === 'mono-telemetry') || current.font;
    changed.push('Monospaced Engineering Font');
  } else if (p.includes('hud') || p.includes('console font') || p.includes('tracked')) {
    blended.font = FONTS.find((x) => x.id === 'compact-technical') || current.font;
    changed.push('Compact HUD Console Font');
  } else if (p.includes('sans') || p.includes('clean font') || p.includes('inter') || p.includes('modern font')) {
    blended.font = FONTS.find((x) => x.id === 'clean-sans') || current.font;
    changed.push('Modern Geometric Sans Font');
  }

  // Check 5: Signature Accents
  if (p.includes('crosshair') || p.includes('ruler') || p.includes('cad accent') || p.includes('coordinate')) {
    blended.accents = ACCENTS.find((x) => x.id === 'cad-crosshairs') || current.accents;
    changed.push('CAD Crosshairs & Rulers');
  } else if (p.includes('scanline') || p.includes('crt') || p.includes('raster')) {
    blended.accents = ACCENTS.find((x) => x.id === 'crt-scanlines') || current.accents;
    changed.push('CRT Scanlines');
  } else if (p.includes('washi') || p.includes('tape') || p.includes('pinboard accent')) {
    blended.accents = ACCENTS.find((x) => x.id === 'washi-tape') || current.accents;
    changed.push('Washi Tape Strips');
  } else if (p.includes('dot grid') || p.includes('dot matrix')) {
    blended.accents = ACCENTS.find((x) => x.id === 'dot-grid') || current.accents;
    changed.push('Dot Grid Accent');
  } else if (p.includes('corner tick') || p.includes('registration')) {
    blended.accents = ACCENTS.find((x) => x.id === 'corner-ticks') || current.accents;
    changed.push('Corner Ticks');
  } else if (p.includes('no accent') || p.includes('clean accent') || p.includes('pure minimal')) {
    blended.accents = ACCENTS.find((x) => x.id === 'pure-minimal') || current.accents;
    changed.push('Pure Minimal (No Accents)');
  }

  // Check 6: Motion Physics
  if (p.includes('bounce') || p.includes('playful') || p.includes('overshoot')) {
    blended.animation = ANIMATIONS.find((x) => x.id === 'tactile-bounce') || current.animation;
    changed.push('Tactile Micro-Bounce Motion');
  } else if (p.includes('ambient') || p.includes('calm') || p.includes('fade')) {
    blended.animation = ANIMATIONS.find((x) => x.id === 'subtle-ambient') || current.animation;
    changed.push('Subtle Ambient Fade Motion');
  } else if (p.includes('glitch') || p.includes('stepped') || p.includes('retro motion') || p.includes('relay')) {
    blended.animation = ANIMATIONS.find((x) => x.id === 'retro-stepped') || current.animation;
    changed.push('Retro Stepped Mechanical Motion');
  } else if (p.includes('fluid') || p.includes('smooth') || p.includes('ease')) {
    blended.animation = ANIMATIONS.find((x) => x.id === 'fluid-ease') || current.animation;
    changed.push('Fluid Modern Ease Motion');
  } else if (p.includes('spring') || p.includes('snappy') || p.includes('fast') || p.includes('kinetic')) {
    blended.animation = ANIMATIONS.find((x) => x.id === 'snappy-spring') || current.animation;
    changed.push('Snappy Kinetic Spring Motion');
  }

  // Fallback shift if prompt was generic
  if (changed.length === 0) {
    const nextPaletteIdx = (PALETTES.findIndex((x) => x.id === current.palette.id) + 1) % PALETTES.length;
    blended.palette = PALETTES[nextPaletteIdx];
    changed.push(`Palette (${PALETTES[nextPaletteIdx].name})`);
  }

  const description = `Blended ${changed.join(', ')} into current design (kept all other selections).`;

  return {
    composition: blended,
    blendedCategories: changed,
    description,
  };
}
