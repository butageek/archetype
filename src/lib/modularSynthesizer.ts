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

export function synthesizeCompositionFromPrompt(
  prompt: string,
  current?: DesignComposition
): DesignComposition {
  const p = prompt.toLowerCase();

  // Match Palette
  let matchedPalette = current ? current.palette : PALETTES[0];
  if (p.includes('cyber') || p.includes('neon') || p.includes('matrix') || p.includes('phosphor') || p.includes('hacker')) {
    matchedPalette = PALETTES.find((x) => x.id === 'cyber-phosphor') || PALETTES[5];
  } else if (p.includes('cad') || p.includes('blueprint') || p.includes('schematic') || p.includes('cyan') || p.includes('tech')) {
    matchedPalette = PALETTES.find((x) => x.id === 'cad-cyan') || PALETTES[6];
  } else if (p.includes('bauhaus') || p.includes('primary') || p.includes('yellow') || p.includes('cobalt') || p.includes('gropius')) {
    matchedPalette = PALETTES.find((x) => x.id === 'bauhaus-primary') || PALETTES[0];
  } else if (p.includes('nordic') || p.includes('scandi') || p.includes('minimal') || p.includes('clean') || p.includes('slate')) {
    matchedPalette = PALETTES.find((x) => x.id === 'nordic-slate') || PALETTES[1];
  } else if (p.includes('pop') || p.includes('brutal') || p.includes('candy') || p.includes('pink') || p.includes('chartreuse')) {
    matchedPalette = PALETTES.find((x) => x.id === 'neo-pop') || PALETTES[2];
  } else if (p.includes('swiss') || p.includes('helvetica') || p.includes('red') || p.includes('brockmann')) {
    matchedPalette = PALETTES.find((x) => x.id === 'swiss-crimson') || PALETTES[3];
  } else if (p.includes('terracotta') || p.includes('stone') || p.includes('tuscan') || p.includes('editorial') || p.includes('warm')) {
    matchedPalette = PALETTES.find((x) => x.id === 'tuscan-terracotta') || PALETTES[4];
  } else if (p.includes('solar') || p.includes('botanical') || p.includes('garden') || p.includes('green') || p.includes('nature')) {
    matchedPalette = PALETTES.find((x) => x.id === 'solarpunk-sage') || PALETTES[7];
  } else if (p.includes('amber') || p.includes('hi-fi') || p.includes('audio') || p.includes('analog') || p.includes('retro')) {
    matchedPalette = PALETTES.find((x) => x.id === 'analog-amber') || PALETTES[8];
  } else if (p.includes('lavender') || p.includes('purple') || p.includes('violet') || p.includes('mist') || p.includes('pastel')) {
    matchedPalette = PALETTES.find((x) => x.id === 'lavender-fog') || PALETTES[9];
  }

  // Match Layout
  let matchedLayout = current ? current.layout : LAYOUTS[0];
  if (p.includes('bento') || p.includes('modular') || p.includes('card')) {
    matchedLayout = LAYOUTS.find((x) => x.id === 'bento-grid') || LAYOUTS[0];
  } else if (p.includes('telemetry') || p.includes('dense') || p.includes('cockpit') || p.includes('scada') || p.includes('terminal')) {
    matchedLayout = LAYOUTS.find((x) => x.id === 'dense-telemetry') || LAYOUTS[1];
  } else if (p.includes('swiss') || p.includes('asymmetric') || p.includes('grid') || p.includes('rule')) {
    matchedLayout = LAYOUTS.find((x) => x.id === 'swiss-editorial') || LAYOUTS[2];
  } else if (p.includes('island') || p.includes('dock') || p.includes('airy') || p.includes('spacious') || p.includes('zen')) {
    matchedLayout = LAYOUTS.find((x) => x.id === 'minimal-dock') || LAYOUTS[3];
  } else if (p.includes('stream') || p.includes('feed') || p.includes('timeline') || p.includes('list')) {
    matchedLayout = LAYOUTS.find((x) => x.id === 'card-stream') || LAYOUTS[4];
  }

  // Match Theme (Mode/Lighting)
  let matchedTheme = current ? current.theme : THEMES[0];
  if (p.includes('dark') || p.includes('night') || p.includes('oled') || p.includes('nocturne') || p.includes('black')) {
    matchedTheme = THEMES.find((x) => x.id === 'oled-nocturne') || THEMES[1];
  } else if (p.includes('paper') || p.includes('vellum') || p.includes('sepia') || p.includes('vintage') || p.includes('book')) {
    matchedTheme = THEMES.find((x) => x.id === 'antique-vellum') || THEMES[2];
  } else if (p.includes('glass') || p.includes('blur') || p.includes('crystal') || p.includes('translucent')) {
    matchedTheme = THEMES.find((x) => x.id === 'frosted-crystal') || THEMES[3];
  } else if (p.includes('monochrome') || p.includes('black and white') || p.includes('bw') || p.includes('stark')) {
    matchedTheme = THEMES.find((x) => x.id === 'stark-monochrome') || THEMES[4];
  } else if (p.includes('day') || p.includes('light') || p.includes('white') || p.includes('bright') || p.includes('studio')) {
    matchedTheme = THEMES.find((x) => x.id === 'daylight-studio') || THEMES[0];
  }

  // Match Style (Borders/Shadows)
  let matchedStyle = current ? current.style : STYLES[0];
  if (p.includes('brutal') || p.includes('thick') || p.includes('pop') || p.includes('offset') || p.includes('heavy')) {
    matchedStyle = STYLES.find((x) => x.id === 'neo-brutalist') || STYLES[0];
  } else if (p.includes('cad') || p.includes('blueprint') || p.includes('crosshair') || p.includes('ruler')) {
    matchedStyle = STYLES.find((x) => x.id === 'cad-blueprint') || STYLES[1];
  } else if (p.includes('bauhaus') || p.includes('geometric') || p.includes('constructivist') || p.includes('outline')) {
    matchedStyle = STYLES.find((x) => x.id === 'bauhaus-geometric') || STYLES[2];
  } else if (p.includes('soft') || p.includes('ambient') || p.includes('nordic') || p.includes('diffuse')) {
    matchedStyle = STYLES.find((x) => x.id === 'nordic-ambient') || STYLES[3];
  } else if (p.includes('washi') || p.includes('tape') || p.includes('pinboard') || p.includes('memo') || p.includes('tactile')) {
    matchedStyle = STYLES.find((x) => x.id === 'tactile-pinboard') || STYLES[4];
  } else if (p.includes('scanline') || p.includes('crt') || p.includes('glow') || p.includes('scada')) {
    matchedStyle = STYLES.find((x) => x.id === 'crt-scada') || STYLES[5];
  }

  // Match Font
  let matchedFont = current ? current.font : FONTS[0];
  if (p.includes('serif') || p.includes('editorial') || p.includes('literary') || p.includes('playfair') || p.includes('journal')) {
    matchedFont = FONTS.find((x) => x.id === 'editorial-serif') || FONTS[1];
  } else if (p.includes('grotesk') || p.includes('impact') || p.includes('loud') || p.includes('heavy') || p.includes('black')) {
    matchedFont = FONTS.find((x) => x.id === 'brutalist-grotesk') || FONTS[2];
  } else if (p.includes('mono') || p.includes('code') || p.includes('engineering') || p.includes('jetbrains')) {
    matchedFont = FONTS.find((x) => x.id === 'mono-telemetry') || FONTS[3];
  } else if (p.includes('hud') || p.includes('terminal') || p.includes('console') || p.includes('tracked')) {
    matchedFont = FONTS.find((x) => x.id === 'compact-technical') || FONTS[4];
  } else if (p.includes('sans') || p.includes('clean') || p.includes('modern') || p.includes('inter') || p.includes('geist')) {
    matchedFont = FONTS.find((x) => x.id === 'clean-sans') || FONTS[0];
  }

  // Match Animation
  let matchedAnimation = current ? current.animation : ANIMATIONS[0];
  if (p.includes('bounce') || p.includes('playful') || p.includes('overshoot')) {
    matchedAnimation = ANIMATIONS.find((x) => x.id === 'tactile-bounce') || ANIMATIONS[4];
  } else if (p.includes('ambient') || p.includes('subtle') || p.includes('calm') || p.includes('gentle') || p.includes('fade')) {
    matchedAnimation = ANIMATIONS.find((x) => x.id === 'subtle-ambient') || ANIMATIONS[1];
  } else if (p.includes('glitch') || p.includes('stepped') || p.includes('retro') || p.includes('hardware')) {
    matchedAnimation = ANIMATIONS.find((x) => x.id === 'retro-stepped') || ANIMATIONS[2];
  } else if (p.includes('fluid') || p.includes('smooth') || p.includes('ease') || p.includes('silk')) {
    matchedAnimation = ANIMATIONS.find((x) => x.id === 'fluid-ease') || ANIMATIONS[3];
  } else if (p.includes('spring') || p.includes('snappy') || p.includes('fast') || p.includes('click')) {
    matchedAnimation = ANIMATIONS.find((x) => x.id === 'snappy-spring') || ANIMATIONS[0];
  }

  return {
    palette: matchedPalette,
    layout: matchedLayout,
    theme: matchedTheme,
    style: matchedStyle,
    font: matchedFont,
    animation: matchedAnimation,
  };
}
