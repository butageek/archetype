'use client';

import React, { useState } from 'react';
import {
  Check,
  Copy,
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

interface DesignPartPickerProps {
  selection: DesignPartsSelection;
  onSelectPalette: (pal: PalettePart) => void;
  onSelectFont: (fnt: FontPart) => void;
  onSelectSurface: (surf: SurfacePart) => void;
  onSelectComponent: (comp: ComponentPart) => void;
  onSelectAccent: (acc: AccentPart) => void;
  onToast: (msg: string) => void;
}

export function DesignPartPicker({
  selection,
  onSelectPalette,
  onSelectFont,
  onSelectSurface,
  onSelectComponent,
  onSelectAccent,
  onToast,
}: DesignPartPickerProps) {
  const [activeCategory, setActiveCategory] = useState<DesignPartCategory>('palette');

  const categories: { id: DesignPartCategory; label: string; icon: React.ElementType }[] = [
    { id: 'palette', label: '01. Color Palette', icon: Palette },
    { id: 'font', label: '02. Typography & Fonts', icon: Type },
    { id: 'surface', label: '03. Surface & Borders', icon: Layers },
    { id: 'components', label: '04. UI Component Controls', icon: MousePointerClick },
    { id: 'accents', label: '05. Signature Accents', icon: Sparkles },
  ];

  const handleCopyPartPrompt = (e: React.MouseEvent, prompt: string, name: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(prompt);
    onToast(`Copied standalone prompt for "${name}"!`);
  };

  return (
    <div className="w-full space-y-5">
      {/* Category Navigation Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none border-b border-stone-200">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isSelected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all flex items-center gap-2 whitespace-nowrap ${
                isSelected
                  ? 'bg-stone-900 text-white shadow-xs font-bold'
                  : 'bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* 1. COLOR PALETTES */}
      {activeCategory === 'palette' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono">
                Recognized Color Palette Styles
              </h3>
              <p className="text-xs text-stone-500">
                Pick a color atmosphere. Each name defines a specific emotional tone and semantic color system.
              </p>
            </div>
            <span className="text-xs text-stone-600 font-medium">
              Selected: <strong className="text-stone-900">{selection.palette.name}</strong>
            </span>
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
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono">
                Recognized Font Archetypes (Pixel, Handwriting, Cartoon, etc.)
              </h3>
              <p className="text-xs text-stone-500">
                Preview how each typography style renders live. Select one to define your app&apos;s typographic voice.
              </p>
            </div>
            <span className="text-xs text-stone-600 font-medium">
              Selected: <strong className="text-stone-900">{selection.font.name}</strong>
            </span>
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
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono">
                Recognized Surface & Boundary Treatments
              </h3>
              <p className="text-xs text-stone-500">
                Corner radii, border strokes, and elevation shadows (Hard Block Drop, CAD Hairline, Glass, etc.).
              </p>
            </div>
            <span className="text-xs text-stone-600 font-medium">
              Selected: <strong className="text-stone-900">{selection.surface.name}</strong>
            </span>
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
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono">
                Recognized UI Component Styles & Controls
              </h3>
              <p className="text-xs text-stone-500">
                Choose how buttons, status badges, and interactive controls behave and appear.
              </p>
            </div>
            <span className="text-xs text-stone-600 font-medium">
              Selected: <strong className="text-stone-900">{selection.components.name}</strong>
            </span>
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
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono">
                Recognized Signature Accents (Scanlines, Crosshairs, Washi Tape, etc.)
              </h3>
              <p className="text-xs text-stone-500">
                Graphic accents that give the design authenticity and visual character.
              </p>
            </div>
            <span className="text-xs text-stone-600 font-medium">
              Selected: <strong className="text-stone-900">{selection.accent.name}</strong>
            </span>
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
