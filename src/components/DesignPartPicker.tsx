'use client';

import type { ElementType, MouseEvent } from 'react';
import { useState } from 'react';
import {
  Check,
  Copy,
  Dices,
  Layers,
  MousePointerClick,
  Palette,
  Sparkles,
  Type,
} from 'lucide-react';
import {
  ACCENT_PARTS,
  COMPONENT_PARTS,
  FONT_PARTS,
  PALETTE_PARTS,
  SURFACE_PARTS,
} from '../lib/designPartsData';
import {
  AccentPart,
  ComponentPart,
  DesignPartCategory,
  DesignPartsSelection,
  FontPart,
  PalettePart,
  SurfacePart,
} from '../types/designParts';

function AccentVisualPreview({ type }: { type: AccentPart['type'] }) {
  if (type === 'scanlines') {
    return (
      <div className="h-10 w-full rounded-xl bg-stone-900 border border-stone-800 relative overflow-hidden flex items-center justify-between px-3">
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,255,100,0) 50%, rgba(0,0,0,0.85) 50%)',
            backgroundSize: '100% 4px',
          }}
        />
        <span className="text-[10px] font-mono font-bold text-emerald-400 relative z-10 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          CRT 60Hz RASTER SCANLINES
        </span>
        <span className="text-[9px] font-mono text-emerald-500/70 relative z-10">[ACTIVE]</span>
      </div>
    );
  }

  if (type === 'crosshairs') {
    return (
      <div className="h-10 w-full rounded-xl bg-sky-950/80 border border-cyan-800 relative overflow-hidden flex items-center justify-between px-3">
        <span className="text-[10px] font-mono font-bold text-cyan-400">⊕ [X: 420.50, Y: 110.25]</span>
        <span className="text-[9px] font-mono text-cyan-300/80">|···|···|···|</span>
      </div>
    );
  }

  if (type === 'washi-tape') {
    return (
      <div className="h-10 w-full rounded-xl bg-amber-50 border border-amber-200 relative overflow-hidden flex items-center justify-center">
        <div className="px-4 py-0.5 bg-amber-300 text-amber-950 font-mono text-[10px] font-bold shadow-xs -rotate-2 border border-amber-400/80">
          {'// WASHI_TAPE_MEMO'}
        </div>
      </div>
    );
  }

  if (type === 'dot-grid') {
    return (
      <div
        className="h-10 w-full rounded-xl bg-stone-100 border border-stone-200 relative overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: 'radial-gradient(#78716c 1.5px, transparent 1.5px)',
          backgroundSize: '10px 10px',
        }}
      >
        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/90 text-stone-700 shadow-2xs border border-stone-200">
          10px Dot Matrix Grid
        </span>
      </div>
    );
  }

  if (type === 'corner-ticks') {
    return (
      <div className="h-10 w-full rounded-xl bg-stone-50 border border-stone-200 relative p-1.5 flex items-center justify-center">
        <span className="absolute top-1 left-2 font-mono font-bold text-xs text-stone-800">┌</span>
        <span className="absolute top-1 right-2 font-mono font-bold text-xs text-stone-800">┐</span>
        <span className="absolute bottom-1 left-2 font-mono font-bold text-xs text-stone-800">└</span>
        <span className="absolute bottom-1 right-2 font-mono font-bold text-xs text-stone-800">┘</span>
        <span className="text-[10px] font-mono font-bold text-stone-600">Corner Calibration Marks</span>
      </div>
    );
  }

  if (type === 'hazard-stripes') {
    return (
      <div className="h-10 w-full rounded-xl overflow-hidden flex flex-col border border-stone-300">
        <div
          className="h-4 w-full"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #FFB000, #FFB000 10px, #000000 10px, #000000 20px)',
          }}
        />
        <div className="bg-stone-900 flex-1 flex items-center justify-between px-3 text-[10px] font-mono font-bold text-amber-400">
          <span>HAZARD WARNING</span>
          <span>[ALERT]</span>
        </div>
      </div>
    );
  }

  if (type === 'cyber-hud') {
    return (
      <div className="h-10 w-full rounded-xl bg-stone-950 border border-cyan-500/80 relative overflow-hidden flex items-center justify-between px-3 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
        <span className="text-[10px] font-mono font-bold text-yellow-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          ⊕ [TARGET_LOCK // 0x7FFA]
        </span>
        <span className="text-[9px] font-mono text-cyan-400 font-bold border border-cyan-400/60 px-1 rounded">HUD</span>
      </div>
    );
  }

  if (type === 'prismatic-flare') {
    return (
      <div className="h-10 w-full rounded-xl bg-sky-950 border border-sky-400/40 relative overflow-hidden flex flex-col justify-between p-2">
        <div
          className="h-1.5 w-full rounded-full"
          style={{
            background:
              'linear-gradient(90deg, transparent, #38bdf8 20%, #818cf8 40%, #f472b6 60%, #facc15 80%, transparent)',
          }}
        />
        <span className="text-[10px] font-semibold text-sky-200">Prismatic Rainbow Light Flare</span>
      </div>
    );
  }

  if (type === 'art-deco-sunburst') {
    return (
      <div className="h-10 w-full rounded-xl bg-stone-950 border border-amber-500/50 relative overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-x-0 top-0 h-full opacity-60 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at top, #D4AF37 0%, transparent 70%)',
          }}
        />
        <span className="text-[10px] font-serif uppercase tracking-widest text-amber-200 relative z-10 font-bold">
          ☼ Gold Sunburst Fan ☼
        </span>
      </div>
    );
  }

  if (type === 'blueprint-dimensions') {
    return (
      <div className="h-10 w-full rounded-xl bg-blue-950 border border-cyan-400/60 relative overflow-hidden flex items-center justify-between px-3">
        <span className="text-[10px] font-mono text-cyan-300 font-bold">|◄― 480.00 mm ―►|</span>
        <span className="text-[9px] font-mono text-cyan-200 border border-cyan-400/50 px-1 rounded">SCALE 1:50</span>
      </div>
    );
  }

  if (type === 'noise-grain') {
    return (
      <div
        className="h-10 w-full rounded-xl bg-stone-200 border border-stone-300 relative overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage:
            'radial-gradient(rgba(0,0,0,0.3) 15%, transparent 16%), radial-gradient(rgba(0,0,0,0.15) 15%, transparent 16%)',
          backgroundSize: '4px 4px',
        }}
      >
        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/90 text-stone-800 shadow-2xs">
          Analog Film Grain / Noise
        </span>
      </div>
    );
  }

  if (type === 'aurora-glow') {
    return (
      <div className="h-10 w-full rounded-xl bg-stone-950 border border-violet-500/40 relative overflow-hidden flex items-center justify-between px-3">
        <div
          className="absolute -top-6 -left-6 w-20 h-20 rounded-full blur-md opacity-70 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #8B5CF6 0%, #3B82F6 60%, transparent 80%)' }}
        />
        <div
          className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full blur-md opacity-70 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #EC4899 0%, #06B6D4 60%, transparent 80%)' }}
        />
        <span className="text-[10px] font-semibold text-white relative z-10 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          Aurora Mesh Glow
        </span>
        <span className="text-[9px] font-mono text-cyan-300 font-bold relative z-10 border border-cyan-400/40 px-1 rounded bg-black/40">
          BLOOM
        </span>
      </div>
    );
  }

  if (type === 'wireframe-grid') {
    return (
      <div
        className="h-10 w-full rounded-xl bg-stone-950 border border-emerald-500/40 relative overflow-hidden flex items-center justify-between px-3"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(16, 185, 129, 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(16, 185, 129, 0.25) 1px, transparent 1px)',
          backgroundSize: '10px 10px',
        }}
      >
        <span className="text-[10px] font-mono font-bold text-emerald-400 bg-stone-950/80 px-1 rounded">
          PERSPECTIVE GRID
        </span>
        <span className="text-[9px] font-mono text-emerald-300 font-bold border border-emerald-500/60 px-1 rounded bg-black/60">
          3D MATRIX
        </span>
      </div>
    );
  }

  if (type === 'halftone-dots') {
    return (
      <div
        className="h-10 w-full rounded-xl bg-amber-50 border border-amber-300 relative overflow-hidden flex items-center justify-between px-3"
        style={{
          backgroundImage: 'radial-gradient(circle, #f59e0b 2px, transparent 2px)',
          backgroundSize: '8px 8px',
        }}
      >
        <span className="text-[10px] font-bold text-amber-950 bg-white/90 px-1.5 py-0.5 rounded shadow-2xs">
          Pop Art Halftone Dots
        </span>
        <span className="text-[9px] font-mono text-amber-800 font-bold border border-amber-400 bg-amber-100 px-1 rounded">
          SCREENPRINT
        </span>
      </div>
    );
  }

  if (type === 'crosshair-plus') {
    return (
      <div className="h-10 w-full rounded-xl bg-stone-950 border border-stone-700 relative overflow-hidden flex items-center justify-between px-3">
        <span className="absolute top-1 left-2 font-mono font-black text-xs text-stone-400">+</span>
        <span className="absolute top-1 right-2 font-mono font-black text-xs text-stone-400">+</span>
        <span className="absolute bottom-1 left-2 font-mono font-black text-xs text-stone-400">+</span>
        <span className="absolute bottom-1 right-2 font-mono font-black text-xs text-stone-400">+</span>
        <span className="text-[10px] font-mono font-bold text-stone-300">Plus-Grid Calibration (+)</span>
        <span className="text-[9px] font-mono text-stone-400 border border-stone-600 px-1 rounded">CALIB</span>
      </div>
    );
  }

  if (type === 'barcode-serial') {
    return (
      <div className="h-10 w-full rounded-xl bg-stone-900 border border-stone-800 relative overflow-hidden flex items-center justify-between px-3">
        <div className="flex items-center gap-0.5 opacity-90 h-5">
          <div className="w-[1px] h-full bg-white" />
          <div className="w-[2px] h-full bg-white" />
          <div className="w-[1px] h-full bg-transparent" />
          <div className="w-[3px] h-full bg-white" />
          <div className="w-[1px] h-full bg-white" />
          <div className="w-[2px] h-full bg-transparent" />
          <div className="w-[1px] h-full bg-white" />
          <div className="w-[4px] h-full bg-white" />
          <div className="w-[1px] h-full bg-white" />
          <div className="w-[2px] h-full bg-white" />
        </div>
        <span className="text-[10px] font-mono font-bold text-stone-200">
          BARCODE // SN-8820-X
        </span>
        <span className="text-[9px] font-mono text-emerald-400 font-bold border border-emerald-500/40 px-1 rounded bg-black/60">
          VERIFIED
        </span>
      </div>
    );
  }

  if (type === 'audio-waveform') {
    return (
      <div className="h-10 w-full rounded-xl bg-stone-950 border border-cyan-800/60 relative overflow-hidden flex items-center justify-between px-3">
        <div className="flex items-center gap-1 h-5">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <div className="w-1 h-4 bg-cyan-400 rounded-full" />
          <div className="w-1 h-3 bg-cyan-300 rounded-full" />
          <div className="w-1 h-5 bg-cyan-400 rounded-full" />
          <div className="w-1 h-2 bg-cyan-300 rounded-full" />
          <div className="w-1 h-4 bg-cyan-400 rounded-full" />
        </div>
        <span className="text-[10px] font-mono font-bold text-cyan-300">
          AUDIO OSCILLOSCOPE (44.1kHz)
        </span>
        <span className="text-[9px] font-mono text-cyan-400 font-bold border border-cyan-500/50 px-1 rounded">
          -12dB
        </span>
      </div>
    );
  }

  if (type === 'node-constellation') {
    return (
      <div className="h-10 w-full rounded-xl bg-slate-950 border border-indigo-800/60 relative overflow-hidden flex items-center justify-between px-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8]" />
          <div className="w-4 h-[1px] bg-indigo-400/60" />
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
          <div className="w-3 h-[1px] bg-indigo-400/60" />
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
        </div>
        <span className="text-[10px] font-mono font-bold text-indigo-200">
          CONSTELLATION NODE WEB
        </span>
        <span className="text-[9px] font-mono text-indigo-300 font-bold border border-indigo-500/50 px-1 rounded">
          MESH
        </span>
      </div>
    );
  }

  return (
    <div className="h-10 w-full rounded-xl bg-stone-50 border border-stone-200 relative overflow-hidden flex items-center justify-center">
      <span className="text-[10px] font-mono text-stone-400 font-semibold">Pure Minimal (No Accents)</span>
    </div>
  );
}

interface DesignPartPickerProps {
  selection: DesignPartsSelection;
  onSelectPalette: (pal: PalettePart) => void;
  onSelectFont: (fnt: FontPart) => void;
  onSelectSurface: (surf: SurfacePart) => void;
  onSelectComponent: (comp: ComponentPart) => void;
  onSelectAccent: (acc: AccentPart) => void;
  onToast: (msg: string) => void;
  activeCategory?: DesignPartCategory;
  onCategoryChange?: (category: DesignPartCategory) => void;
  onRandomizeCategory?: (category: DesignPartCategory) => void;
}

export function DesignPartPicker({
  selection,
  onSelectPalette,
  onSelectFont,
  onSelectSurface,
  onSelectComponent,
  onSelectAccent,
  onToast,
  activeCategory: controlledCategory,
  onCategoryChange,
  onRandomizeCategory,
}: DesignPartPickerProps) {
  const [internalCategory, setInternalCategory] = useState<DesignPartCategory>('palette');
  const activeCategory = controlledCategory ?? internalCategory;
  const setActiveCategory = onCategoryChange ?? setInternalCategory;

  const categories: { id: DesignPartCategory; label: string; count: number; icon: ElementType }[] = [
    { id: 'palette', label: '01. Palette', count: PALETTE_PARTS.length, icon: Palette },
    { id: 'font', label: '02. Typography', count: FONT_PARTS.length, icon: Type },
    { id: 'surface', label: '03. Surface & Borders', count: SURFACE_PARTS.length, icon: Layers },
    { id: 'components', label: '04. UI Controls', count: COMPONENT_PARTS.length, icon: MousePointerClick },
    { id: 'accents', label: '05. Accents', count: ACCENT_PARTS.length, icon: Sparkles },
  ];

  const handleCopyPartPrompt = (e: MouseEvent, prompt: string, name: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(prompt);
    onToast(`Copied standalone prompt for "${name}"!`);
  };

  return (
    <div className="w-full space-y-5">
      {/* Category Navigation Pills (Wrapped & Always Fully Visible) */}
      <div className="flex flex-wrap items-center gap-2 pb-3 border-b border-stone-200">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isSelected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all flex items-center gap-2 ${
                isSelected
                  ? 'bg-stone-900 text-white shadow-xs font-bold'
                  : 'bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <Icon className="w-3.5 h-3.5 shrink-0" />
              <span>{cat.label}</span>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full font-bold ${
                  isSelected
                    ? 'bg-stone-800 text-stone-200 border border-stone-700'
                    : 'bg-stone-100 text-stone-500 border border-stone-200'
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 1. COLOR PALETTES */}
      {activeCategory === 'palette' && (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono">
                Recognized Color Palette Styles
              </h3>
              <p className="text-xs text-stone-500">
                Pick a color atmosphere. Each name defines a specific emotional tone and semantic color system.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-stone-600 font-medium hidden sm:inline">
                Selected: <strong className="text-stone-900">{selection.palette.name}</strong>
              </span>
              {onRandomizeCategory && (
                <button
                  type="button"
                  onClick={() => onRandomizeCategory('palette')}
                  className="px-2.5 py-1.5 text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300 rounded-xl cursor-pointer flex items-center gap-1.5 transition-transform active:scale-95 shadow-2xs"
                  title="Randomize only palette"
                >
                  <Dices className="w-3.5 h-3.5 text-stone-700" />
                  <span>Randomize Palette</span>
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PALETTE_PARTS.map((pal) => {
              const isSelected = selection.palette.id === pal.id;
              return (
                <div
                  key={pal.id}
                  onClick={() => onSelectPalette(pal)}
                  className={`p-4 rounded-2xl border text-left cursor-pointer transition-all space-y-3 ${
                    isSelected
                      ? 'border-stone-900 ring-2 ring-stone-900/10 bg-white shadow-md'
                      : 'border-stone-200 bg-white hover:border-stone-400 hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 font-bold border border-stone-200">
                      {pal.isDark ? 'Dark Mode' : 'Light Mode'}
                    </span>
                    {isSelected && (
                      <span className="flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <Check className="w-3 h-3 stroke-[3]" /> Selected
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-stone-900 tracking-tight">{pal.name}</h4>
                    <p className="text-xs text-stone-500 mt-0.5 line-clamp-2 leading-relaxed">{pal.description}</p>
                  </div>

                  {/* Swatches preview */}
                  <div className="flex items-center gap-1.5 p-2 rounded-xl bg-stone-50 border border-stone-200">
                    <div
                      className="w-5 h-5 rounded-md border border-black/10 shadow-2xs"
                      style={{ backgroundColor: pal.primary }}
                      title={`Primary: ${pal.primary}`}
                    />
                    <div
                      className="w-5 h-5 rounded-md border border-black/10 shadow-2xs"
                      style={{ backgroundColor: pal.secondary }}
                      title={`Secondary: ${pal.secondary}`}
                    />
                    <div
                      className="w-5 h-5 rounded-md border border-black/10 shadow-2xs"
                      style={{ backgroundColor: pal.accent }}
                      title={`Accent: ${pal.accent}`}
                    />
                    <div
                      className="w-5 h-5 rounded-md border border-black/10 shadow-2xs"
                      style={{ backgroundColor: pal.surface }}
                      title={`Surface: ${pal.surface}`}
                    />
                    <div
                      className="w-5 h-5 rounded-md border border-black/10 shadow-2xs"
                      style={{ backgroundColor: pal.background }}
                      title={`Background: ${pal.background}`}
                    />
                    <span className="text-[10px] font-mono text-stone-400 ml-auto">5 swatches</span>
                  </div>

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-stone-400 font-mono">{pal.tagline.slice(0, 30)}...</span>
                    <button
                      onClick={(e) => handleCopyPartPrompt(e, pal.promptSnippet, pal.name)}
                      className="text-[11px] font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 px-2 py-1 rounded-lg flex items-center gap-1 cursor-pointer transition-colors"
                      title="Copy standalone prompt for this palette"
                    >
                      <Copy className="w-3 h-3" />
                      <span>Copy Part Prompt</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. TYPOGRAPHY & FONT STYLES */}
      {activeCategory === 'font' && (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono">
                Recognized Font Archetypes (Pixel, Handwriting, Cartoon, etc.)
              </h3>
              <p className="text-xs text-stone-500">
                Preview how each typography style renders live. Select one to define your app&apos;s typographic voice.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-stone-600 font-medium hidden sm:inline">
                Selected: <strong className="text-stone-900">{selection.font.name}</strong>
              </span>
              {onRandomizeCategory && (
                <button
                  type="button"
                  onClick={() => onRandomizeCategory('font')}
                  className="px-2.5 py-1.5 text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300 rounded-xl cursor-pointer flex items-center gap-1.5 transition-transform active:scale-95 shadow-2xs"
                  title="Randomize only typography"
                >
                  <Dices className="w-3.5 h-3.5 text-stone-700" />
                  <span>Randomize Typography</span>
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {FONT_PARTS.map((fnt) => {
              const isSelected = selection.font.id === fnt.id;
              return (
                <div
                  key={fnt.id}
                  onClick={() => onSelectFont(fnt)}
                  className={`p-4 rounded-2xl border text-left cursor-pointer transition-all space-y-3 ${
                    isSelected
                      ? 'border-stone-900 ring-2 ring-stone-900/10 bg-white shadow-md'
                      : 'border-stone-200 bg-white hover:border-stone-400 hover:shadow-xs'
                  }`}
                >
                  {/* Live Rendered Font Preview Sample Box */}
                  <div className="p-3 bg-stone-100/80 rounded-xl border border-stone-200/80 flex items-center justify-between min-h-[54px] overflow-hidden">
                    <span
                      className="text-base sm:text-lg font-bold text-stone-900 truncate"
                      style={{ fontFamily: fnt.fontFamily }}
                    >
                      {fnt.previewSample}
                    </span>
                    {isSelected && (
                      <span className="flex-shrink-0 flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 ml-2">
                        <Check className="w-3 h-3 stroke-[3]" /> Selected
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-stone-900 tracking-tight">{fnt.name}</h4>
                    <p className="text-xs text-stone-500 mt-0.5 line-clamp-2 leading-relaxed">{fnt.description}</p>
                  </div>

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-semibold">
                      {fnt.classification.toUpperCase()}
                    </span>
                    <button
                      onClick={(e) => handleCopyPartPrompt(e, fnt.promptSnippet, fnt.name)}
                      className="text-[11px] font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 px-2 py-1 rounded-lg flex items-center gap-1 cursor-pointer transition-colors"
                      title="Copy standalone prompt for this font"
                    >
                      <Copy className="w-3 h-3" />
                      <span>Copy Part Prompt</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. SURFACE, BORDERS & SHADOWS */}
      {activeCategory === 'surface' && (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono">
                Recognized Surface & Boundary Treatments
              </h3>
              <p className="text-xs text-stone-500">
                Corner radii, border strokes, and elevation shadows (Hard Block Drop, CAD Hairline, Glass, etc.).
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-stone-600 font-medium hidden sm:inline">
                Selected: <strong className="text-stone-900">{selection.surface.name}</strong>
              </span>
              {onRandomizeCategory && (
                <button
                  type="button"
                  onClick={() => onRandomizeCategory('surface')}
                  className="px-2.5 py-1.5 text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300 rounded-xl cursor-pointer flex items-center gap-1.5 transition-transform active:scale-95 shadow-2xs"
                  title="Randomize only surface"
                >
                  <Dices className="w-3.5 h-3.5 text-stone-700" />
                  <span>Randomize Surface</span>
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SURFACE_PARTS.map((surf) => {
              const isSelected = selection.surface.id === surf.id;
              return (
                <div
                  key={surf.id}
                  onClick={() => onSelectSurface(surf)}
                  className={`p-4 rounded-2xl border text-left cursor-pointer transition-all space-y-3 ${
                    isSelected
                      ? 'border-stone-900 ring-2 ring-stone-900/10 bg-white shadow-md'
                      : 'border-stone-200 bg-white hover:border-stone-400 hover:shadow-xs'
                  }`}
                >
                  {/* Real Boundary Visual Box Preview */}
                  <div
                    className="p-3 bg-stone-50 border flex items-center justify-between"
                    style={{
                      borderWidth: surf.borderWidth,
                      borderStyle: surf.borderStyle,
                      borderColor: '#1C1917',
                      borderRadius: surf.radius,
                      clipPath: surf.clipPath,
                      boxShadow: surf.shadow === 'none' ? 'none' : surf.shadow.includes('4px 4px') ? '3px 3px 0px #000' : '0 4px 12px rgba(0,0,0,0.08)',
                    }}
                  >
                    <span className="text-xs font-bold text-stone-900">
                      Border: {surf.borderWidth} • Radius: {surf.radius}
                    </span>
                    {isSelected && (
                      <span className="flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <Check className="w-3 h-3 stroke-[3]" /> Selected
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-stone-900 tracking-tight">{surf.name}</h4>
                    <p className="text-xs text-stone-500 mt-0.5 line-clamp-2 leading-relaxed">{surf.description}</p>
                  </div>

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="text-[10px] font-mono text-stone-400 truncate max-w-[150px]">
                      Shadow: {surf.shadow.split(',')[0]}
                    </span>
                    <button
                      onClick={(e) => handleCopyPartPrompt(e, surf.promptSnippet, surf.name)}
                      className="text-[11px] font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 px-2 py-1 rounded-lg flex items-center gap-1 cursor-pointer transition-colors"
                      title="Copy standalone prompt for this surface"
                    >
                      <Copy className="w-3 h-3" />
                      <span>Copy Part Prompt</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. UI COMPONENT STYLES & CONTROLS */}
      {activeCategory === 'components' && (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono">
                Recognized UI Component Styles & Controls
              </h3>
              <p className="text-xs text-stone-500">
                Choose how buttons, status badges, and interactive controls behave and appear.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-stone-600 font-medium hidden sm:inline">
                Selected: <strong className="text-stone-900">{selection.components.name}</strong>
              </span>
              {onRandomizeCategory && (
                <button
                  type="button"
                  onClick={() => onRandomizeCategory('components')}
                  className="px-2.5 py-1.5 text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300 rounded-xl cursor-pointer flex items-center gap-1.5 transition-transform active:scale-95 shadow-2xs"
                  title="Randomize only UI controls"
                >
                  <Dices className="w-3.5 h-3.5 text-stone-700" />
                  <span>Randomize Controls</span>
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {COMPONENT_PARTS.map((comp) => {
              const isSelected = selection.components.id === comp.id;
              return (
                <div
                  key={comp.id}
                  onClick={() => onSelectComponent(comp)}
                  className={`p-4 rounded-2xl border text-left cursor-pointer transition-all space-y-3 ${
                    isSelected
                      ? 'border-stone-900 ring-2 ring-stone-900/10 bg-white shadow-md'
                      : 'border-stone-200 bg-white hover:border-stone-400 hover:shadow-xs'
                  }`}
                >
                  {/* Live Rendered Component Box (Button + Badge Demo) */}
                  <div className="p-3 bg-stone-100/80 rounded-xl border border-stone-200/80 flex items-center justify-between gap-2 overflow-hidden">
                    <div className="flex items-center gap-2">
                      <span
                        className={`${comp.buttonClass} bg-stone-900 text-white border-stone-800 text-xs inline-block`}
                      >
                        Action Button
                      </span>
                      <span
                        className={`${comp.badgeClass} bg-stone-200 text-stone-800 border-stone-300 text-[10px] inline-block`}
                      >
                        STATUS
                      </span>
                    </div>
                    {isSelected && (
                      <span className="flex-shrink-0 flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <Check className="w-3 h-3 stroke-[3]" /> Selected
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-stone-900 tracking-tight">{comp.name}</h4>
                    <p className="text-xs text-stone-500 mt-0.5 line-clamp-2 leading-relaxed">{comp.description}</p>
                  </div>

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-semibold truncate max-w-[150px]">
                      {comp.tagline}
                    </span>
                    <button
                      onClick={(e) => handleCopyPartPrompt(e, comp.promptSnippet, comp.name)}
                      className="text-[11px] font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 px-2 py-1 rounded-lg flex items-center gap-1 cursor-pointer transition-colors"
                      title="Copy standalone prompt for this component style"
                    >
                      <Copy className="w-3 h-3" />
                      <span>Copy Part Prompt</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 5. SIGNATURE ACCENTS */}
      {activeCategory === 'accents' && (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono">
                Recognized Signature Accents (Scanlines, Crosshairs, Washi Tape, etc.)
              </h3>
              <p className="text-xs text-stone-500">
                Graphic accents that give the design authenticity and visual character.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-stone-600 font-medium hidden sm:inline">
                Selected: <strong className="text-stone-900">{selection.accent.name}</strong>
              </span>
              {onRandomizeCategory && (
                <button
                  type="button"
                  onClick={() => onRandomizeCategory('accents')}
                  className="px-2.5 py-1.5 text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300 rounded-xl cursor-pointer flex items-center gap-1.5 transition-transform active:scale-95 shadow-2xs"
                  title="Randomize only accent"
                >
                  <Dices className="w-3.5 h-3.5 text-stone-700" />
                  <span>Randomize Accent</span>
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ACCENT_PARTS.map((acc) => {
              const isSelected = selection.accent.id === acc.id;
              return (
                <div
                  key={acc.id}
                  onClick={() => onSelectAccent(acc)}
                  className={`p-4 rounded-2xl border text-left cursor-pointer transition-all space-y-3 ${
                    isSelected
                      ? 'border-stone-900 ring-2 ring-stone-900/10 bg-white shadow-md'
                      : 'border-stone-200 bg-white hover:border-stone-400 hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 font-bold border border-stone-200">
                      {acc.type}
                    </span>
                    {isSelected && (
                      <span className="flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <Check className="w-3 h-3 stroke-[3]" /> Selected
                      </span>
                    )}
                  </div>

                  {/* Live Rendered Visual Preview of Accent */}
                  <AccentVisualPreview type={acc.type} />

                  <div>
                    <h4 className="text-sm font-bold text-stone-900 tracking-tight">{acc.name}</h4>
                    <p className="text-xs text-stone-500 mt-0.5 line-clamp-2 leading-relaxed">{acc.description}</p>
                  </div>

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-stone-400 font-mono">{acc.tagline.slice(0, 32)}...</span>
                    <button
                      onClick={(e) => handleCopyPartPrompt(e, acc.promptSnippet, acc.name)}
                      className="text-[11px] font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 px-2 py-1 rounded-lg flex items-center gap-1 cursor-pointer transition-colors"
                      title="Copy standalone prompt for this accent"
                    >
                      <Copy className="w-3 h-3" />
                      <span>Copy Part Prompt</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
