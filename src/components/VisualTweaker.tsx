'use client';

import React, { useState } from 'react';
import {
  Check,
  Grid,
  Layers,
  Palette,
  RefreshCw,
  Save,
  ShieldCheck,
  Sliders,
  Type,
} from 'lucide-react';
import {
  BorderWidth,
  CornerRadius,
  DensityLevel,
  FontPairing,
  ShadowStyle,
  ThemeTokens,
} from '../types/theme';
import { calculateContrast, getBestContrastTextColor } from '../lib/contrast';

interface VisualTweakerProps {
  tokens: ThemeTokens;
  onChange: (tokens: ThemeTokens) => void;
  onSave: () => void;
  onReset: () => void;
}

export function VisualTweaker({ tokens, onChange, onSave, onReset }: VisualTweakerProps) {
  const [activeTab, setActiveTab] = useState<'palette' | 'layout' | 'typography' | 'accents'>('palette');

  // Palette color update handler
  const updateColor = (key: keyof ThemeTokens['palette'], val: string) => {
    const nextPalette = { ...tokens.palette, [key]: val };
    // Auto adjust foreground if background or primary changed
    if (key === 'primary') {
      nextPalette.primaryForeground = getBestContrastTextColor(val);
    } else if (key === 'secondary') {
      nextPalette.secondaryForeground = getBestContrastTextColor(val);
    } else if (key === 'accent') {
      nextPalette.accentForeground = getBestContrastTextColor(val);
    }
    onChange({ ...tokens, palette: nextPalette });
  };

  // Contrast evaluations
  const primaryContrast = calculateContrast(tokens.palette.primaryForeground, tokens.palette.primary);
  const cardTextContrast = calculateContrast(tokens.palette.textPrimary, tokens.palette.cardSurface);
  const bgTextContrast = calculateContrast(tokens.palette.textPrimary, tokens.palette.background);

  return (
    <aside className="w-80 sm:w-96 flex-shrink-0 border-l border-neutral-800 bg-neutral-950 text-neutral-200 flex flex-col h-full overflow-hidden select-none">
      {/* Tweaker Header */}
      <div className="p-3.5 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/60">
        <div className="flex items-center gap-2">
          <Sliders className="w-4 h-4 text-emerald-400" />
          <span className="font-bold text-xs uppercase tracking-wider text-neutral-100">Visual Tweaker</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onReset}
            className="text-[11px] font-mono text-neutral-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
            title="Reset to current preset defaults"
          >
            <RefreshCw className="w-3 h-3" />
            Reset
          </button>
          <button
            onClick={onSave}
            className="px-2.5 py-1 text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-neutral-950 rounded cursor-pointer flex items-center gap-1 shadow-sm transition-transform active:scale-95"
          >
            <Save className="w-3 h-3" />
            Save
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="grid grid-cols-4 border-b border-neutral-800 bg-neutral-900/30 text-xs text-neutral-400">
        {[
          { id: 'palette', label: 'Colors', icon: Palette },
          { id: 'layout', label: 'Borders', icon: Grid },
          { id: 'typography', label: 'Type', icon: Type },
          { id: 'accents', label: 'Accents', icon: Layers },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`py-2 px-1 flex flex-col items-center gap-1 cursor-pointer transition-all border-b-2 ${
                isActive
                  ? 'border-emerald-400 text-neutral-100 font-bold bg-neutral-800/40'
                  : 'border-transparent hover:text-neutral-200'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span className="text-[10px]">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Scrollable Tweaker Controls Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 text-xs">
        {/* TAB 1: Palette & WCAG Checker */}
        {activeTab === 'palette' && (
          <div className="space-y-5">
            {/* WCAG Live Contrast Checker Bar */}
            <div className="p-3 bg-neutral-900/90 rounded-lg border border-neutral-800 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-semibold text-neutral-300">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  WCAG Contrast Engine
                </span>
                <span className="font-mono text-[10px] text-neutral-400">2.1 Standard</span>
              </div>

              {/* Ratios */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                {/* Primary Button Contrast */}
                <div className="p-2 bg-neutral-950 rounded border border-neutral-800 text-[10px] flex flex-col">
                  <span className="text-neutral-400 truncate">Btn Text/CTA</span>
                  <span className="font-bold font-mono text-neutral-100 mt-0.5">{primaryContrast.ratio}:1</span>
                  <span
                    className={`mt-1 font-mono font-bold text-[9px] ${
                      primaryContrast.passesAA ? 'text-emerald-400' : 'text-red-400'
                    }`}
                  >
                    {primaryContrast.passesAAA ? 'AAA PASS' : primaryContrast.passesAA ? 'AA PASS' : 'FAIL'}
                  </span>
                </div>

                {/* Card Surface Contrast */}
                <div className="p-2 bg-neutral-950 rounded border border-neutral-800 text-[10px] flex flex-col">
                  <span className="text-neutral-400 truncate">Card Text</span>
                  <span className="font-bold font-mono text-neutral-100 mt-0.5">{cardTextContrast.ratio}:1</span>
                  <span
                    className={`mt-1 font-mono font-bold text-[9px] ${
                      cardTextContrast.passesAA ? 'text-emerald-400' : 'text-red-400'
                    }`}
                  >
                    {cardTextContrast.passesAAA ? 'AAA PASS' : cardTextContrast.passesAA ? 'AA PASS' : 'FAIL'}
                  </span>
                </div>

                {/* Background Text Contrast */}
                <div className="p-2 bg-neutral-950 rounded border border-neutral-800 text-[10px] flex flex-col">
                  <span className="text-neutral-400 truncate">Page Text</span>
                  <span className="font-bold font-mono text-neutral-100 mt-0.5">{bgTextContrast.ratio}:1</span>
                  <span
                    className={`mt-1 font-mono font-bold text-[9px] ${
                      bgTextContrast.passesAA ? 'text-emerald-400' : 'text-red-400'
                    }`}
                  >
                    {bgTextContrast.passesAAA ? 'AAA PASS' : bgTextContrast.passesAA ? 'AA PASS' : 'FAIL'}
                  </span>
                </div>
              </div>
            </div>

            {/* Color Swatch Controls */}
            <div className="space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-bold block">
                Semantic Color Tokens
              </span>

              {[
                { label: 'Primary Brand', key: 'primary' as const },
                { label: 'Secondary Tone', key: 'secondary' as const },
                { label: 'Accent Highlight', key: 'accent' as const },
                { label: 'Canvas Background', key: 'background' as const },
                { label: 'Card Surface', key: 'cardSurface' as const },
                { label: 'Muted Surface', key: 'cardSurfaceMuted' as const },
                { label: 'Boundary Border', key: 'border' as const },
                { label: 'Text Primary', key: 'textPrimary' as const },
                { label: 'Text Muted', key: 'textMuted' as const },
              ].map(({ label, key }) => {
                const colorVal = tokens.palette[key];
                return (
                  <div key={key} className="flex items-center justify-between p-2 bg-neutral-900/60 rounded border border-neutral-800/80">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-5 h-5 rounded border border-neutral-700 shadow-inner"
                        style={{ backgroundColor: colorVal }}
                      />
                      <span className="text-xs text-neutral-200">{label}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[11px] text-neutral-400">{colorVal.toUpperCase()}</span>
                      <input
                        type="color"
                        value={colorVal.length === 7 ? colorVal : '#000000'}
                        onChange={(e) => updateColor(key, e.target.value)}
                        className="w-6 h-6 rounded cursor-pointer bg-transparent border-0"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: Layout, Density, Borders & Shadows */}
        {activeTab === 'layout' && (
          <div className="space-y-6">
            {/* Density */}
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-bold block">
                Density & Spacing
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['compact', 'balanced', 'spacious'] as DensityLevel[]).map((d) => (
                  <button
                    key={d}
                    onClick={() => onChange({ ...tokens, density: d })}
                    className={`py-2 px-1 text-center rounded text-xs font-semibold capitalize cursor-pointer transition-all border ${
                      tokens.density === d
                        ? 'border-emerald-500 bg-emerald-950/40 text-emerald-300'
                        : 'border-neutral-800 bg-neutral-900 hover:border-neutral-700 text-neutral-300'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Corner Treatment */}
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-bold block">
                Corner Radii
              </label>
              <div className="grid grid-cols-4 gap-2">
                {(
                  [
                    { id: 'sharp', label: 'Sharp 0px' },
                    { id: 'subtle', label: 'Subtle 4px' },
                    { id: 'rounded', label: 'Round 10px' },
                    { id: 'pill', label: 'Pill Max' },
                  ] as const
                ).map((c) => (
                  <button
                    key={c.id}
                    onClick={() => onChange({ ...tokens, radius: c.id as CornerRadius })}
                    className={`py-2 px-1 text-center rounded text-[11px] font-semibold cursor-pointer transition-all border ${
                      tokens.radius === c.id
                        ? 'border-emerald-500 bg-emerald-950/40 text-emerald-300'
                        : 'border-neutral-800 bg-neutral-900 hover:border-neutral-700 text-neutral-300'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Shadows & Elevations */}
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-bold block">
                Shadow & Elevation Profile
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(
                  [
                    { id: 'none', label: 'None (Pure Flat)' },
                    { id: 'hard-offset', label: 'Hard Block Offset' },
                    { id: 'subtle-diffused', label: 'Subtle Diffused' },
                    { id: 'glowing-neon', label: 'Glowing Phosphor' },
                    { id: 'skeuomorphic', label: 'Skeuomorphic Paper' },
                    { id: 'layered-hard', label: 'Layered Hard Drop' },
                  ] as const
                ).map((s) => (
                  <button
                    key={s.id}
                    onClick={() => onChange({ ...tokens, shadow: s.id as ShadowStyle })}
                    className={`p-2 text-left rounded text-[11px] font-semibold cursor-pointer transition-all border ${
                      tokens.shadow === s.id
                        ? 'border-emerald-500 bg-emerald-950/40 text-emerald-300'
                        : 'border-neutral-800 bg-neutral-900 hover:border-neutral-700 text-neutral-300'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Border Width */}
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-bold block">
                Stroke Thickness
              </label>
              <div className="grid grid-cols-5 gap-1.5">
                {(['0px', '1px', '2px', '3px', '4px'] as BorderWidth[]).map((bw) => (
                  <button
                    key={bw}
                    onClick={() => onChange({ ...tokens, borderWidth: bw })}
                    className={`py-1.5 text-center rounded text-xs font-mono font-bold cursor-pointer transition-all border ${
                      tokens.borderWidth === bw
                        ? 'border-emerald-500 bg-emerald-950/40 text-emerald-300'
                        : 'border-neutral-800 bg-neutral-900 hover:border-neutral-700 text-neutral-300'
                    }`}
                  >
                    {bw}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Typography */}
        {activeTab === 'typography' && (
          <div className="space-y-6">
            {/* Font Pairing Presets */}
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-bold block">
                Font Pairing Archetype
              </label>
              <div className="flex flex-col gap-2">
                {(
                  [
                    { id: 'sans-modern', name: 'Sans Modern (Geist / Inter)', desc: 'Clean, versatile, neutral' },
                    { id: 'mono-technical', name: 'Monospace CAD Telemetry', desc: 'Engineering & tabular precision' },
                    { id: 'editorial-serif', name: 'Editorial Gazette (Playfair)', desc: 'Literary elegance & depth' },
                    { id: 'geometric-bauhaus', name: 'Geometric Bauhaus Grotesk', desc: 'Heavy architectural stance' },
                    { id: 'brutalist-grotesk', name: 'Neo-Brutalist Black', desc: 'High-impact screaming headers' },
                    { id: 'cyber-terminal', name: 'Cyberpunk SCADA CRT', desc: 'Phosphor console telemetry' },
                  ] as const
                ).map((fp) => (
                  <button
                    key={fp.id}
                    onClick={() => {
                      const headingFamily =
                        fp.id === 'editorial-serif'
                          ? '"Playfair Display", Georgia, serif'
                          : fp.id === 'mono-technical' || fp.id === 'cyber-terminal'
                          ? 'var(--font-geist-mono), monospace'
                          : 'var(--font-geist-sans), sans-serif';
                      const bodyFamily =
                        fp.id === 'editorial-serif'
                          ? 'Georgia, serif'
                          : fp.id === 'mono-technical' || fp.id === 'cyber-terminal'
                          ? 'var(--font-geist-mono), monospace'
                          : 'var(--font-geist-sans), sans-serif';

                      onChange({
                        ...tokens,
                        typography: {
                          ...tokens.typography,
                          pairing: fp.id as FontPairing,
                          headingFamily,
                          bodyFamily,
                        },
                      });
                    }}
                    className={`p-2.5 rounded text-left transition-all border cursor-pointer ${
                      tokens.typography.pairing === fp.id
                        ? 'border-emerald-500 bg-emerald-950/40 text-emerald-300'
                        : 'border-neutral-800 bg-neutral-900 hover:border-neutral-700 text-neutral-300'
                    }`}
                  >
                    <div className="font-bold text-xs">{fp.name}</div>
                    <div className="text-[10px] text-neutral-400 mt-0.5">{fp.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Letter Spacing */}
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-bold block">
                Tracking & Letter Spacing
              </label>
              <div className="grid grid-cols-4 gap-1.5">
                {(['tight', 'normal', 'wide', 'widest'] as const).map((track) => (
                  <button
                    key={track}
                    onClick={() =>
                      onChange({
                        ...tokens,
                        typography: { ...tokens.typography, letterSpacing: track },
                      })
                    }
                    className={`py-1.5 text-center rounded text-xs capitalize cursor-pointer border ${
                      tokens.typography.letterSpacing === track
                        ? 'border-emerald-500 bg-emerald-950/40 text-emerald-300'
                        : 'border-neutral-800 bg-neutral-900 text-neutral-300'
                    }`}
                  >
                    {track}
                  </button>
                ))}
              </div>
            </div>

            {/* Text Transform */}
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-bold block">
                Headline Transform
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['none', 'uppercase', 'capitalize'] as const).map((trans) => (
                  <button
                    key={trans}
                    onClick={() =>
                      onChange({
                        ...tokens,
                        typography: { ...tokens.typography, headingTransform: trans },
                      })
                    }
                    className={`py-1.5 text-center rounded text-xs capitalize cursor-pointer border ${
                      tokens.typography.headingTransform === trans
                        ? 'border-emerald-500 bg-emerald-950/40 text-emerald-300'
                        : 'border-neutral-800 bg-neutral-900 text-neutral-300'
                    }`}
                  >
                    {trans}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Accents */}
        {activeTab === 'accents' && (
          <div className="space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-bold block">
              Aesthetic Accents & Textures
            </span>

            {[
              { key: 'cornerTicks' as const, label: 'Corner Registration Ticks (┌ ┐ └ ┘)', desc: 'CAD drafting & blueprint alignment marks' },
              { key: 'draftingCrosshairs' as const, label: 'Drafting Crosshairs & Coordinates', desc: 'Precision coordinate targeting overlays' },
              { key: 'washiTape' as const, label: 'Washi Tape Header Tape-Downs', desc: 'Tactile textured strips on cards' },
              { key: 'scanlines' as const, label: 'CRT Phosphor Scanlines', desc: 'Retro monitor CRT scanline shader' },
              { key: 'dotGrid' as const, label: 'Dot Grid Background', desc: 'Architectural drafting dot grid pattern' },
              { key: 'metricRulers' as const, label: 'Millimeter Metric Rulers', desc: 'Dimension scale markers along header' },
              { key: 'paperTexture' as const, label: 'Paper Fiber Texture', desc: 'Tactile physical vellum paper grain' },
              { key: 'skewTilt' as const, label: 'Tactile Sticky Tilt (-0.5° to 0.5°)', desc: 'Organic physical pinboard orientation' },
            ].map(({ key, label, desc }) => {
              const active = tokens.accents[key];
              return (
                <div
                  key={key}
                  onClick={() =>
                    onChange({
                      ...tokens,
                      accents: { ...tokens.accents, [key]: !active },
                    })
                  }
                  className={`p-3 rounded-lg border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                    active
                      ? 'border-emerald-500 bg-emerald-950/30 text-neutral-100'
                      : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-bold text-xs text-neutral-200">{label}</span>
                    <span className="text-[10px] text-neutral-400 mt-0.5">{desc}</span>
                  </div>

                  <div
                    className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 mt-0.5 border ${
                      active ? 'bg-emerald-500 border-emerald-400 text-neutral-950' : 'border-neutral-600'
                    }`}
                  >
                    {active && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </aside>
  );
}
