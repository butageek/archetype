'use client';

import React, { useState } from 'react';
import {
  Check,
  Grid,
  Layers,
  Palette,
  Sparkles,
  Type,
  Zap,
} from 'lucide-react';
import {
  CategoryType,
  DesignComposition,
} from '../types/design';
import {
  ACCENTS,
  ANIMATIONS,
  FONTS,
  LAYOUTS,
  PALETTES,
  SURFACES,
} from '../lib/modularPresets';

interface ModularGalleryProps {
  composition: DesignComposition;
  onChange: (updated: DesignComposition) => void;
}

export function ModularGallery({ composition, onChange }: ModularGalleryProps) {
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<CategoryType | 'all'>('all');

  const categories: { id: CategoryType; label: string; icon: React.ElementType }[] = [
    { id: 'palette', label: 'Palette', icon: Palette },
    { id: 'layout', label: 'Layout', icon: Grid },
    { id: 'surface', label: 'Surface', icon: Layers },
    { id: 'font', label: 'Font', icon: Type },
    { id: 'accents', label: 'Accents', icon: Sparkles },
    { id: 'animation', label: 'Motion', icon: Zap },
  ];

  return (
    <div className="w-full space-y-6">
      {/* Category Navigation Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none border-b border-stone-200">
        <button
          onClick={() => setSelectedCategoryTab('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors whitespace-nowrap ${
            selectedCategoryTab === 'all'
              ? 'bg-stone-900 text-white shadow-xs'
              : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
          }`}
        >
          All 6 Pillars
        </button>
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isSelected = selectedCategoryTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategoryTab(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                isSelected
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* 1. PALETTES SECTION */}
      {(selectedCategoryTab === 'all' || selectedCategoryTab === 'palette') && (
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5 text-stone-700" />
              01. Color Palettes & Tone
            </h3>
            <span className="text-xs text-stone-600 font-medium">
              Selected: <strong className="text-stone-900">{composition.palette.name}</strong>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2.5">
            {PALETTES.map((pal) => {
              const isSelected = composition.palette.id === pal.id;
              return (
                <div
                  key={pal.id}
                  onClick={() => onChange({ ...composition, palette: pal })}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    isSelected
                      ? 'border-stone-900 ring-2 ring-stone-900/10 bg-white shadow-sm'
                      : 'border-stone-200 bg-white hover:border-stone-300 hover:shadow-xs'
                  }`}
                >
                  {/* Swatch preview */}
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <div
                      className="w-5 h-5 rounded-full border border-black/10 shadow-xs flex-shrink-0"
                      style={{ backgroundColor: pal.primary }}
                      title={`Primary: ${pal.primary}`}
                    />
                    <div
                      className="w-4 h-4 rounded-full border border-black/10 shadow-xs flex-shrink-0"
                      style={{ backgroundColor: pal.secondary }}
                      title={`Secondary: ${pal.secondary}`}
                    />
                    <div
                      className="w-4 h-4 rounded-full border border-black/10 shadow-xs flex-shrink-0"
                      style={{ backgroundColor: pal.accent }}
                      title={`Accent: ${pal.accent}`}
                    />
                    <div
                      className="w-4 h-4 rounded-full border border-black/10 shadow-xs flex-shrink-0 ml-auto"
                      style={{ backgroundColor: pal.background }}
                      title={`Background: ${pal.background}`}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-900 truncate">{pal.name}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-stone-900 stroke-[3]" />}
                  </div>
                  <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">{pal.tagline}</p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 2. LAYOUTS SECTION */}
      {(selectedCategoryTab === 'all' || selectedCategoryTab === 'layout') && (
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono flex items-center gap-1.5">
              <Grid className="w-3.5 h-3.5 text-stone-700" />
              02. Spatial Architecture & Density
            </h3>
            <span className="text-xs text-stone-600 font-medium">
              Selected: <strong className="text-stone-900">{composition.layout.name}</strong>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2.5">
            {LAYOUTS.map((lay) => {
              const isSelected = composition.layout.id === lay.id;
              return (
                <div
                  key={lay.id}
                  onClick={() => onChange({ ...composition, layout: lay })}
                  className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                    isSelected
                      ? 'border-stone-900 ring-2 ring-stone-900/10 bg-white shadow-sm'
                      : 'border-stone-200 bg-white hover:border-stone-300 hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-stone-100 text-stone-700 font-bold">
                      {lay.type} • {lay.density}
                    </span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-stone-900 stroke-[3]" />}
                  </div>
                  <div className="text-xs font-bold text-stone-900">{lay.name}</div>
                  <p className="text-[11px] text-stone-500 line-clamp-2 mt-0.5 leading-snug">{lay.tagline}</p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 3. SURFACE TREATMENTS SECTION */}
      {(selectedCategoryTab === 'all' || selectedCategoryTab === 'surface') && (
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-stone-700" />
              03. Surface, Borders & Shadows
            </h3>
            <span className="text-xs text-stone-600 font-medium">
              Selected: <strong className="text-stone-900">{composition.surface.name}</strong>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2.5">
            {SURFACES.map((surf) => {
              const isSelected = composition.surface.id === surf.id;
              return (
                <div
                  key={surf.id}
                  onClick={() => onChange({ ...composition, surface: surf })}
                  className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                    isSelected
                      ? 'border-stone-900 ring-2 ring-stone-900/10 bg-white shadow-sm'
                      : 'border-stone-200 bg-white hover:border-stone-300 hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-stone-100 text-stone-700 font-bold">
                      {surf.borderWidth} • {surf.radius} • {surf.shadow}
                    </span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-stone-900 stroke-[3]" />}
                  </div>
                  <div className="text-xs font-bold text-stone-900">{surf.name}</div>
                  <p className="text-[11px] text-stone-500 line-clamp-2 mt-0.5 leading-snug">{surf.tagline}</p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 4. FONTS & TYPOGRAPHY SECTION */}
      {(selectedCategoryTab === 'all' || selectedCategoryTab === 'font') && (
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono flex items-center gap-1.5">
              <Type className="w-3.5 h-3.5 text-stone-700" />
              04. Typography & Casing
            </h3>
            <span className="text-xs text-stone-600 font-medium">
              Selected: <strong className="text-stone-900">{composition.font.name}</strong>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2.5">
            {FONTS.map((fnt) => {
              const isSelected = composition.font.id === fnt.id;
              return (
                <div
                  key={fnt.id}
                  onClick={() => onChange({ ...composition, font: fnt })}
                  className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                    isSelected
                      ? 'border-stone-900 ring-2 ring-stone-900/10 bg-white shadow-sm'
                      : 'border-stone-200 bg-white hover:border-stone-300 hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-stone-100 text-stone-700 font-bold">
                      {fnt.transform} • {fnt.weight}
                    </span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-stone-900 stroke-[3]" />}
                  </div>
                  <div className="text-xs font-bold text-stone-900" style={{ fontFamily: fnt.headingFamily }}>
                    {fnt.name}
                  </div>
                  <p className="text-[11px] text-stone-500 line-clamp-2 mt-0.5 leading-snug">{fnt.tagline}</p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 5. SIGNATURE ACCENTS SECTION */}
      {(selectedCategoryTab === 'all' || selectedCategoryTab === 'accents') && (
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-stone-700" />
              05. Signature Accents & Graphic DNA
            </h3>
            <span className="text-xs text-stone-600 font-medium">
              Selected: <strong className="text-stone-900">{composition.accents.name}</strong>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2.5">
            {ACCENTS.map((acc) => {
              const isSelected = composition.accents.id === acc.id;
              return (
                <div
                  key={acc.id}
                  onClick={() => onChange({ ...composition, accents: acc })}
                  className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                    isSelected
                      ? 'border-stone-900 ring-2 ring-stone-900/10 bg-white shadow-sm'
                      : 'border-stone-200 bg-white hover:border-stone-300 hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-stone-100 text-stone-700 font-bold">
                      {acc.id}
                    </span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-stone-900 stroke-[3]" />}
                  </div>
                  <div className="text-xs font-bold text-stone-900">{acc.name}</div>
                  <p className="text-[11px] text-stone-500 line-clamp-2 mt-0.5 leading-snug">{acc.tagline}</p>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 6. ANIMATION & MOTION SECTION */}
      {(selectedCategoryTab === 'all' || selectedCategoryTab === 'animation') && (
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-stone-700" />
              06. Motion Physics & Easing Curves
            </h3>
            <span className="text-xs text-stone-600 font-medium">
              Selected: <strong className="text-stone-900">{composition.animation.name}</strong>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2.5">
            {ANIMATIONS.map((anim) => {
              const isSelected = composition.animation.id === anim.id;
              return (
                <div
                  key={anim.id}
                  onClick={() => onChange({ ...composition, animation: anim })}
                  className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                    isSelected
                      ? 'border-stone-900 ring-2 ring-stone-900/10 bg-white shadow-sm'
                      : 'border-stone-200 bg-white hover:border-stone-300 hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-stone-100 text-stone-700 font-bold">
                      {anim.duration}
                    </span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-stone-900 stroke-[3]" />}
                  </div>
                  <div className="text-xs font-bold text-stone-900">{anim.name}</div>
                  <p className="text-[11px] text-stone-500 line-clamp-2 mt-0.5 leading-snug">{anim.tagline}</p>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
