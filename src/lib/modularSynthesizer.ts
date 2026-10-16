import { DesignComposition } from '../types/design';
import {
  ANIMATIONS,
  FONTS,
  LAYOUTS,
  PALETTES,
  STYLES,
  THEMES,
} from './modularPresets';

export function getRandomComposition(): DesignComposition {
  const palette = PALETTES[Math.floor(Math.random() * PALETTES.length)];
  const layout = LAYOUTS[Math.floor(Math.random() * LAYOUTS.length)];
  const theme = THEMES[Math.floor(Math.random() * THEMES.length)];
  const style = STYLES[Math.floor(Math.random() * STYLES.length)];
  const font = FONTS[Math.floor(Math.random() * FONTS.length)];
  const animation = ANIMATIONS[Math.floor(Math.random() * ANIMATIONS.length)];

  return {
    palette,
    layout,
    theme,
    style,
    font,
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
        theme: THEMES.find((x) => x.id === 'oled-nocturne') || THEMES[1],
        style: STYLES.find((x) => x.id === 'crt-scada') || STYLES[5],
        font: FONTS.find((x) => x.id === 'compact-technical') || FONTS[4],
        animation: ANIMATIONS.find((x) => x.id === 'snappy-spring') || ANIMATIONS[0],
      },
      description: 'Synthesized Cyberpunk SCADA archetype (Phosphor Green • Dense Telemetry • CRT Glow)',
    };
  }

  // 2. CAD / Technical / Blueprint / Schematic / Aerospace / NASA
  if (p.includes('cad') || p.includes('blueprint') || p.includes('schematic') || p.includes('nasa') || p.includes('apollo') || p.includes('aerospace') || p.includes('caliper')) {
    return {
      composition: {
        palette: PALETTES.find((x) => x.id === 'cad-cyan') || PALETTES[6],
        layout: LAYOUTS.find((x) => x.id === 'dense-telemetry') || LAYOUTS[1],
        theme: THEMES.find((x) => x.id === 'oled-nocturne') || THEMES[1],
        style: STYLES.find((x) => x.id === 'cad-blueprint') || STYLES[1],
        font: FONTS.find((x) => x.id === 'mono-telemetry') || FONTS[3],
        animation: ANIMATIONS.find((x) => x.id === 'snappy-spring') || ANIMATIONS[0],
      },
      description: 'Synthesized CAD Blueprint archetype (Cyan Drafting • Telemetry • Crosshairs)',
    };
  }

  // 3. Bauhaus / Constructivist / Primary / Gropius / De Stijl
  if (p.includes('bauhaus') || p.includes('constructiv') || p.includes('primary') || p.includes('gropius') || p.includes('destijl')) {
    return {
      composition: {
        palette: PALETTES.find((x) => x.id === 'bauhaus-primary') || PALETTES[0],
        layout: LAYOUTS.find((x) => x.id === 'asymmetric-swiss') || LAYOUTS[2],
        theme: THEMES.find((x) => x.id === 'daylight-studio') || THEMES[0],
        style: STYLES.find((x) => x.id === 'bauhaus-geometric') || STYLES[2],
        font: FONTS.find((x) => x.id === 'clean-sans') || FONTS[0],
        animation: ANIMATIONS.find((x) => x.id === 'snappy-spring') || ANIMATIONS[0],
      },
      description: 'Synthesized Bauhaus Constructivist archetype (Primary Colors • Asymmetric Grid • 2px Outlines)',
    };
  }

  // 4. Nordic / Scandinavian / Minimalist / Zen / Ceramics / Studio
  if (p.includes('nordic') || p.includes('scandi') || p.includes('minimal') || p.includes('clean') || p.includes('copenhagen') || p.includes('pottery') || p.includes('ceramic') || p.includes('zen')) {
    return {
      composition: {
        palette: PALETTES.find((x) => x.id === 'nordic-slate') || PALETTES[1],
        layout: LAYOUTS.find((x) => x.id === 'minimal-dock') || LAYOUTS[3],
        theme: THEMES.find((x) => x.id === 'daylight-studio') || THEMES[0],
        style: STYLES.find((x) => x.id === 'nordic-ambient') || STYLES[3],
        font: FONTS.find((x) => x.id === 'clean-sans') || FONTS[0],
        animation: ANIMATIONS.find((x) => x.id === 'subtle-ambient') || ANIMATIONS[1],
      },
      description: 'Synthesized Nordic Minimalist archetype (Mineral Slate • Island Dock • Soft Ambient)',
    };
  }

  // 5. Neo-Brutalist / Pop / Playful / Acid / Y2K / Candy
  if (p.includes('brutal') || p.includes('pop') || p.includes('candy') || p.includes('playful') || p.includes('y2k') || p.includes('acid') || p.includes('chartreuse')) {
    return {
      composition: {
        palette: PALETTES.find((x) => x.id === 'neo-pop') || PALETTES[2],
        layout: LAYOUTS.find((x) => x.id === 'bento-grid') || LAYOUTS[0],
        theme: THEMES.find((x) => x.id === 'daylight-studio') || THEMES[0],
        style: STYLES.find((x) => x.id === 'neo-brutalist') || STYLES[0],
        font: FONTS.find((x) => x.id === 'brutalist-grotesk') || FONTS[2],
        animation: ANIMATIONS.find((x) => x.id === 'tactile-bounce') || ANIMATIONS[4],
      },
      description: 'Synthesized Neo-Brutalist Pop archetype (Electric Pastels • 3px Hard Borders • Space Grotesk)',
    };
  }

  // 6. Swiss / International / Typography / Editorial Magazine
  if (p.includes('swiss') || p.includes('helvetica') || p.includes('international') || p.includes('brockmann') || p.includes('zurich')) {
    return {
      composition: {
        palette: PALETTES.find((x) => x.id === 'swiss-crimson') || PALETTES[3],
        layout: LAYOUTS.find((x) => x.id === 'asymmetric-swiss') || LAYOUTS[2],
        theme: THEMES.find((x) => x.id === 'daylight-studio') || THEMES[0],
        style: STYLES.find((x) => x.id === 'bauhaus-geometric') || STYLES[2],
        font: FONTS.find((x) => x.id === 'clean-sans') || FONTS[0],
        animation: ANIMATIONS.find((x) => x.id === 'fluid-ease') || ANIMATIONS[3],
      },
      description: 'Synthesized Swiss International archetype (Zurich Red • Hairline Rules • Pure Sans)',
    };
  }

  // 7. Editorial / Vellum / Library / Book / Leather / Gazette / Warm
  if (p.includes('editorial') || p.includes('vellum') || p.includes('terracotta') || p.includes('book') || p.includes('library') || p.includes('newspaper') || p.includes('gazette') || p.includes('sepia')) {
    return {
      composition: {
        palette: PALETTES.find((x) => x.id === 'tuscan-terracotta') || PALETTES[4],
        layout: LAYOUTS.find((x) => x.id === 'card-stream') || LAYOUTS[4],
        theme: THEMES.find((x) => x.id === 'antique-vellum') || THEMES[2],
        style: STYLES.find((x) => x.id === 'tactile-pinboard') || STYLES[4],
        font: FONTS.find((x) => x.id === 'editorial-serif') || FONTS[1],
        animation: ANIMATIONS.find((x) => x.id === 'subtle-ambient') || ANIMATIONS[1],
      },
      description: 'Synthesized Warm Editorial archetype (Tuscan Terracotta • Antique Vellum • Playfair Serif)',
    };
  }

  // 8. Solarpunk / Botanical / Greenhouse / Organic / Nature
  if (p.includes('solar') || p.includes('botanical') || p.includes('greenhouse') || p.includes('plant') || p.includes('garden') || p.includes('sage') || p.includes('eco')) {
    return {
      composition: {
        palette: PALETTES.find((x) => x.id === 'solarpunk-sage') || PALETTES[7],
        layout: LAYOUTS.find((x) => x.id === 'bento-grid') || LAYOUTS[0],
        theme: THEMES.find((x) => x.id === 'antique-vellum') || THEMES[2],
        style: STYLES.find((x) => x.id === 'nordic-ambient') || STYLES[3],
        font: FONTS.find((x) => x.id === 'editorial-serif') || FONTS[1],
        animation: ANIMATIONS.find((x) => x.id === 'fluid-ease') || ANIMATIONS[3],
      },
      description: 'Synthesized Solarpunk Conservatory archetype (Sage Green • Bento Grid • Soft Organic)',
    };
  }

  // 9. Analog Hi-Fi / Dieter Rams / Braun / Synth / Audio / Studio Master
  if (p.includes('audio') || p.includes('hifi') || p.includes('hi-fi') || p.includes('dieter') || p.includes('rams') || p.includes('braun') || p.includes('synth') || p.includes('amber') || p.includes('analog')) {
    return {
      composition: {
        palette: PALETTES.find((x) => x.id === 'analog-amber') || PALETTES[8],
        layout: LAYOUTS.find((x) => x.id === 'dense-telemetry') || LAYOUTS[1],
        theme: THEMES.find((x) => x.id === 'oled-nocturne') || THEMES[1],
        style: STYLES.find((x) => x.id === 'cad-blueprint') || STYLES[1],
        font: FONTS.find((x) => x.id === 'mono-telemetry') || FONTS[3],
        animation: ANIMATIONS.find((x) => x.id === 'retro-stepped') || ANIMATIONS[2],
      },
      description: 'Synthesized 1970s Hi-Fi Synth archetype (Amber VU • Dense Telemetry • Stepped Motion)',
    };
  }

  // 10. Lavender / Dreamy / Soft / Pastel / Dusk / Lilac
  if (p.includes('lavender') || p.includes('lilac') || p.includes('purple') || p.includes('violet') || p.includes('mist') || p.includes('dreamy')) {
    return {
      composition: {
        palette: PALETTES.find((x) => x.id === 'lavender-fog') || PALETTES[9],
        layout: LAYOUTS.find((x) => x.id === 'bento-grid') || LAYOUTS[0],
        theme: THEMES.find((x) => x.id === 'frosted-crystal') || THEMES[3],
        style: STYLES.find((x) => x.id === 'nordic-ambient') || STYLES[3],
        font: FONTS.find((x) => x.id === 'clean-sans') || FONTS[0],
        animation: ANIMATIONS.find((x) => x.id === 'fluid-ease') || ANIMATIONS[3],
      },
      description: 'Synthesized Lavender Mist archetype (Lilac Periwinkle • Frosted Glass • Fluid Ease)',
    };
  }

  // Default fallback hash synthesis based on arbitrary prompt text
  const hash = prompt.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const pIdx = hash % PALETTES.length;
  const lIdx = (hash + 1) % LAYOUTS.length;
  const tIdx = (hash + 2) % THEMES.length;
  const sIdx = (hash + 3) % STYLES.length;
  const fIdx = (hash + 4) % FONTS.length;
  const aIdx = (hash + 5) % ANIMATIONS.length;

  return {
    composition: {
      palette: PALETTES[pIdx],
      layout: LAYOUTS[lIdx],
      theme: THEMES[tIdx],
      style: STYLES[sIdx],
      font: FONTS[fIdx],
      animation: ANIMATIONS[aIdx],
    },
    description: `Synthesized bespoke archetype: ${PALETTES[pIdx].name} • ${LAYOUTS[lIdx].name} • ${STYLES[sIdx].name}`,
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
  if (p.includes('cyber') || p.includes('phosphor') || p.includes('matrix')) {
    blended.palette = PALETTES.find((x) => x.id === 'cyber-phosphor') || current.palette;
    changed.push('Cyber Palette');
  } else if (p.includes('cad') || p.includes('blueprint') || p.includes('cyan')) {
    blended.palette = PALETTES.find((x) => x.id === 'cad-cyan') || current.palette;
    changed.push('CAD Cyan Palette');
  } else if (p.includes('bauhaus') || p.includes('primary') || p.includes('yellow') || p.includes('cobalt')) {
    blended.palette = PALETTES.find((x) => x.id === 'bauhaus-primary') || current.palette;
    changed.push('Bauhaus Palette');
  } else if (p.includes('nordic') || p.includes('slate') || p.includes('gray') || p.includes('grey')) {
    blended.palette = PALETTES.find((x) => x.id === 'nordic-slate') || current.palette;
    changed.push('Nordic Palette');
  } else if (p.includes('pop') || p.includes('candy') || p.includes('pink') || p.includes('chartreuse')) {
    blended.palette = PALETTES.find((x) => x.id === 'neo-pop') || current.palette;
    changed.push('Neo-Pop Palette');
  } else if (p.includes('swiss') || p.includes('red') || p.includes('crimson')) {
    blended.palette = PALETTES.find((x) => x.id === 'swiss-crimson') || current.palette;
    changed.push('Swiss Red Palette');
  } else if (p.includes('terracotta') || p.includes('ochre') || p.includes('tuscan') || p.includes('sepia')) {
    blended.palette = PALETTES.find((x) => x.id === 'tuscan-terracotta') || current.palette;
    changed.push('Terracotta Palette');
  } else if (p.includes('sage') || p.includes('green') || p.includes('botanical') || p.includes('solar')) {
    blended.palette = PALETTES.find((x) => x.id === 'solarpunk-sage') || current.palette;
    changed.push('Sage Palette');
  } else if (p.includes('amber') || p.includes('brass') || p.includes('audio') || p.includes('hi-fi')) {
    blended.palette = PALETTES.find((x) => x.id === 'analog-amber') || current.palette;
    changed.push('Amber Palette');
  } else if (p.includes('lavender') || p.includes('purple') || p.includes('violet') || p.includes('lilac')) {
    blended.palette = PALETTES.find((x) => x.id === 'lavender-fog') || current.palette;
    changed.push('Lavender Palette');
  }

  // Check 2: Layout
  if (p.includes('bento') || p.includes('modular')) {
    blended.layout = LAYOUTS.find((x) => x.id === 'bento-grid') || current.layout;
    changed.push('Bento Layout');
  } else if (p.includes('dense') || p.includes('telemetry') || p.includes('cockpit') || p.includes('compact')) {
    blended.layout = LAYOUTS.find((x) => x.id === 'dense-telemetry') || current.layout;
    changed.push('Dense Cockpit Layout');
  } else if (p.includes('swiss') || p.includes('asymmetric') || p.includes('rules') || p.includes('hairline')) {
    blended.layout = LAYOUTS.find((x) => x.id === 'swiss-editorial') || current.layout;
    changed.push('Swiss Rules Layout');
  } else if (p.includes('island') || p.includes('dock') || p.includes('spacious') || p.includes('minimal')) {
    blended.layout = LAYOUTS.find((x) => x.id === 'minimal-dock') || current.layout;
    changed.push('Island Dock Layout');
  } else if (p.includes('stream') || p.includes('feed') || p.includes('timeline')) {
    blended.layout = LAYOUTS.find((x) => x.id === 'card-stream') || current.layout;
    changed.push('Card Stream Layout');
  }

  // Check 3: Theme / Mode
  if (p.includes('dark') || p.includes('oled') || p.includes('night') || p.includes('nocturne') || p.includes('black')) {
    blended.theme = THEMES.find((x) => x.id === 'oled-nocturne') || current.theme;
    changed.push('OLED Dark Theme');
  } else if (p.includes('vellum') || p.includes('paper') || p.includes('antique') || p.includes('warm')) {
    blended.theme = THEMES.find((x) => x.id === 'antique-vellum') || current.theme;
    changed.push('Antique Vellum Theme');
  } else if (p.includes('glass') || p.includes('blur') || p.includes('crystal') || p.includes('frosted')) {
    blended.theme = THEMES.find((x) => x.id === 'frosted-crystal') || current.theme;
    changed.push('Frosted Glass Theme');
  } else if (p.includes('monochrome') || p.includes('stark')) {
    blended.theme = THEMES.find((x) => x.id === 'stark-monochrome') || current.theme;
    changed.push('Monochrome Theme');
  } else if (p.includes('light') || p.includes('day') || p.includes('white') || p.includes('studio') || p.includes('bright')) {
    blended.theme = THEMES.find((x) => x.id === 'daylight-studio') || current.theme;
    changed.push('Daylight Theme');
  }

  // Check 4: Style / Border / Shadows
  if (p.includes('brutal') || p.includes('hard border') || p.includes('block shadow') || p.includes('offset')) {
    blended.style = STYLES.find((x) => x.id === 'neo-brutalist') || current.style;
    changed.push('Neo-Brutalist Borders & Shadows');
  } else if (p.includes('crosshair') || p.includes('blueprint') || p.includes('cad') || p.includes('ruler')) {
    blended.style = STYLES.find((x) => x.id === 'cad-blueprint') || current.style;
    changed.push('CAD Crosshairs & Rulers');
  } else if (p.includes('outline') || p.includes('bauhaus geometric') || p.includes('2px')) {
    blended.style = STYLES.find((x) => x.id === 'bauhaus-geometric') || current.style;
    changed.push('Bauhaus Outlines');
  } else if (p.includes('soft') || p.includes('ambient') || p.includes('diffuse') || p.includes('rounded')) {
    blended.style = STYLES.find((x) => x.id === 'nordic-ambient') || current.style;
    changed.push('Soft Ambient Shadows');
  } else if (p.includes('washi') || p.includes('tape') || p.includes('pinboard') || p.includes('memo')) {
    blended.style = STYLES.find((x) => x.id === 'tactile-pinboard') || current.style;
    changed.push('Washi Tape & Paper Lift');
  } else if (p.includes('scanline') || p.includes('crt') || p.includes('glow')) {
    blended.style = STYLES.find((x) => x.id === 'crt-scada') || current.style;
    changed.push('CRT Scanlines & Glow');
  }

  // Check 5: Font & Typography
  if (p.includes('serif') || p.includes('playfair') || p.includes('editorial') || p.includes('literary')) {
    blended.font = FONTS.find((x) => x.id === 'editorial-serif') || current.font;
    changed.push('Editorial Serif Font');
  } else if (p.includes('grotesk') || p.includes('space') || p.includes('heavy') || p.includes('impact') || p.includes('black')) {
    blended.font = FONTS.find((x) => x.id === 'brutalist-grotesk') || current.font;
    changed.push('Bold Space Grotesk Font');
  } else if (p.includes('mono') || p.includes('code') || p.includes('jetbrains') || p.includes('terminal')) {
    blended.font = FONTS.find((x) => x.id === 'mono-telemetry') || current.font;
    changed.push('Monospaced Telemetry Font');
  } else if (p.includes('hud') || p.includes('console') || p.includes('tracked')) {
    blended.font = FONTS.find((x) => x.id === 'compact-technical') || current.font;
    changed.push('Compact HUD Font');
  } else if (p.includes('sans') || p.includes('clean') || p.includes('inter') || p.includes('modern')) {
    blended.font = FONTS.find((x) => x.id === 'clean-sans') || current.font;
    changed.push('Modern Geometric Sans Font');
  }

  // Check 6: Animation & Motion
  if (p.includes('bounce') || p.includes('playful') || p.includes('overshoot')) {
    blended.animation = ANIMATIONS.find((x) => x.id === 'tactile-bounce') || current.animation;
    changed.push('Tactile Bounce Motion');
  } else if (p.includes('ambient') || p.includes('calm') || p.includes('fade')) {
    blended.animation = ANIMATIONS.find((x) => x.id === 'subtle-ambient') || current.animation;
    changed.push('Subtle Ambient Fade');
  } else if (p.includes('glitch') || p.includes('stepped') || p.includes('retro')) {
    blended.animation = ANIMATIONS.find((x) => x.id === 'retro-stepped') || current.animation;
    changed.push('Retro Stepped Motion');
  } else if (p.includes('fluid') || p.includes('smooth') || p.includes('ease')) {
    blended.animation = ANIMATIONS.find((x) => x.id === 'fluid-ease') || current.animation;
    changed.push('Fluid Ease Motion');
  } else if (p.includes('spring') || p.includes('snappy') || p.includes('fast')) {
    blended.animation = ANIMATIONS.find((x) => x.id === 'snappy-spring') || current.animation;
    changed.push('Snappy Spring Motion');
  }

  // If nothing was specifically matched, adjust palette hue or theme subtly
  if (changed.length === 0) {
    // Subtle shift: cycle palette or theme
    const nextPaletteIdx = (PALETTES.findIndex((x) => x.id === current.palette.id) + 1) % PALETTES.length;
    blended.palette = PALETTES[nextPaletteIdx];
    changed.push(`Color Nuance (${PALETTES[nextPaletteIdx].name})`);
  }

  const description = `Blended ${changed.join(', ')} into your current design (kept all other selections).`;

  return {
    composition: blended,
    blendedCategories: changed,
    description,
  };
}
