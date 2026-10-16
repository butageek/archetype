import { ContrastResult } from '../types/theme';

export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const cleanHex = hex.replace('#', '').trim();
  let r = 0, g = 0, b = 0;

  if (cleanHex.length === 3) {
    r = parseInt(cleanHex[0] + cleanHex[0], 16);
    g = parseInt(cleanHex[1] + cleanHex[1], 16);
    b = parseInt(cleanHex[2] + cleanHex[2], 16);
  } else if (cleanHex.length === 6) {
    r = parseInt(cleanHex.substring(0, 2), 16);
    g = parseInt(cleanHex.substring(2, 4), 16);
    b = parseInt(cleanHex.substring(4, 6), 16);
  } else {
    return null;
  }

  return isNaN(r) || isNaN(g) || isNaN(b) ? null : { r, g, b };
}

export function getLuminance(r: number, g: number, b: number): number {
  const a = [r, g, b].map((v) => {
    const val = v / 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

export function calculateContrast(foregroundHex: string, backgroundHex: string): ContrastResult {
  const rgb1 = hexToRgb(foregroundHex);
  const rgb2 = hexToRgb(backgroundHex);

  if (!rgb1 || !rgb2) {
    return {
      ratio: 1,
      score: 'Fail',
      passesAA: false,
      passesAAA: false,
      passesLargeAA: false,
    };
  }

  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);

  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  const ratio = Number(((brightest + 0.05) / (darkest + 0.05)).toFixed(2));

  const passesAAA = ratio >= 7;
  const passesAA = ratio >= 4.5;
  const passesLargeAA = ratio >= 3;

  let score: ContrastResult['score'] = 'Fail';
  if (passesAAA) {
    score = 'AAA';
  } else if (passesAA) {
    score = 'AA';
  } else if (passesLargeAA) {
    score = 'AA Large';
  }

  return {
    ratio,
    score,
    passesAA,
    passesAAA,
    passesLargeAA,
  };
}

export function getBestContrastTextColor(backgroundHex: string): string {
  const rgb = hexToRgb(backgroundHex);
  if (!rgb) return '#000000';
  const lum = getLuminance(rgb.r, rgb.g, rgb.b);
  return lum > 0.4 ? '#09090b' : '#ffffff';
}
