'use client';

import React, { useState } from 'react';
import {
  Activity,
  ArrowRight,
  CircleDot,
  Cpu,
  Search,
  Zap,
} from 'lucide-react';
import { DesignPartsSelection } from '../types/designParts';

interface LiveCombinedPreviewProps {
  selection: DesignPartsSelection;
}

export function LiveCombinedPreview({ selection }: LiveCombinedPreviewProps) {
  const { palette, font, surface, components, accent } = selection;

  const [sliderVal, setSliderVal] = useState<number>(82);
  const [toggleActive, setToggleActive] = useState<boolean>(true);

  // Derive card styles
  const cardStyle: React.CSSProperties = {
    backgroundColor: palette.surface,
    color: palette.text,
    borderColor: palette.border,
    borderWidth: surface.borderWidth,
    borderStyle: surface.borderStyle,
    borderRadius: surface.radius,
    boxShadow: surface.shadow,
    clipPath: surface.clipPath,
    fontFamily: font.fontFamily,
    transition: 'all 200ms ease-out',
  };

  const headingStyle: React.CSSProperties = {
    fontFamily: font.fontFamily,
    letterSpacing:
      font.classification === 'grotesk' || font.classification === 'cyberpunk'
        ? '-0.02em'
        : font.classification === 'luxury' || font.classification === 'art-deco'
        ? '0.08em'
        : 'normal',
    textTransform:
      font.classification === 'pixel' || font.classification === 'cyberpunk'
        ? 'uppercase'
        : 'none',
  };

  return (
    <div
      className="w-full rounded-2xl border transition-all duration-300 relative overflow-hidden shadow-xl"
      style={{
        backgroundColor: palette.background,
        color: palette.text,
        borderColor: palette.border,
        borderWidth: surface.borderWidth,
        fontFamily: font.fontFamily,
      }}
    >
      {/* =========================================================================
          GLOBAL / VIEWPORT ACCENT EFFECTS
          ========================================================================= */}

      {/* 1. CRT Raster Scanlines Overlay */}
      {accent.type === 'scanlines' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-40 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage:
              'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.75) 50%)',
            backgroundSize: '100% 4px',
          }}
        />
      )}

      {/* 2. Global Dot Grid on Viewport Background */}
      {accent.type === 'dot-grid' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-25"
          style={{
            backgroundImage: `radial-gradient(${palette.border} 1.5px, transparent 1.5px)`,
            backgroundSize: '14px 14px',
          }}
        />
      )}

      {/* 3. Global Film Grain / Noise Overlay */}
      {accent.type === 'noise-grain' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-30 opacity-20 mix-blend-multiply"
          style={{
            backgroundImage: `radial-gradient(rgba(0,0,0,0.3) 15%, transparent 16%), radial-gradient(rgba(0,0,0,0.15) 15%, transparent 16%)`,
            backgroundSize: '4px 4px',
          }}
        />
      )}

      {/* 4. Global Industrial Hazard Barricade Strip */}
      {accent.type === 'hazard-stripes' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 right-0 h-2.5 z-30 opacity-90 shadow-xs"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #FFB000, #FFB000 12px, #000000 12px, #000000 24px)',
          }}
        />
      )}

      {/* 5. Header Prismatic Light Flare */}
      {accent.type === 'prismatic-flare' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 right-0 h-1.5 z-30"
          style={{
            background:
              'linear-gradient(90deg, transparent, #38bdf8 20%, #818cf8 40%, #f472b6 60%, #facc15 80%, transparent)',
            boxShadow: '0 0 14px rgba(56, 189, 248, 0.8)',
          }}
        />
      )}

      {/* 6. Art Deco Radiant Sunburst Arch */}
      {accent.type === 'art-deco-sunburst' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-64 h-3 z-30 flex items-center justify-center opacity-85"
          style={{
            background: `radial-gradient(ellipse at top, ${palette.primary} 0%, transparent 75%)`,
          }}
        />
      )}

      {/* =========================================================================
          TOP HEADER BAR
          ========================================================================= */}
      <div
        className="w-full border-b flex flex-wrap items-center justify-between px-4 sm:px-5 py-3 relative z-10 backdrop-blur-xs gap-2"
        style={{ borderColor: `${palette.border}44`, backgroundColor: `${palette.surface}EE` }}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 flex items-center justify-center font-bold text-xs shadow-xs"
            style={{
              backgroundColor: palette.primary,
              color: palette.isDark ? '#000000' : '#FFFFFF',
              borderRadius: surface.radius === '0px' ? '0px' : surface.radius === '9999px' ? '9999px' : '6px',
              border: `${surface.borderWidth} solid ${palette.border}`,
            }}
          >
            <Zap className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs sm:text-sm tracking-tight" style={headingStyle}>
                {palette.name}
              </span>
              <span
                className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded border"
                style={{
                  backgroundColor: `${palette.primary}18`,
                  borderColor: `${palette.primary}44`,
                  color: palette.primary,
                }}
              >
                {font.classification}
              </span>
            </div>
            <div className="text-[10px] opacity-75 font-mono">
              Font: {font.name} • Surface: {surface.name}
            </div>
          </div>
        </div>

        {/* Header Accent Pill Indicator */}
        <div
          className="text-[10px] font-mono px-2 py-0.5 rounded-full border flex items-center gap-1.5 shadow-2xs"
          style={{
            borderColor: `${palette.primary}66`,
            backgroundColor: `${palette.primary}15`,
            color: palette.primary,
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: palette.primary }} />
          <span>Accent: <strong>{accent.name}</strong></span>
        </div>
      </div>

      {/* =========================================================================
          INTERACTIVE COMPONENT SHOWCASE SPECIMEN
          ========================================================================= */}
      <div className="p-4 sm:p-6 relative z-10 space-y-4 min-h-[340px]">
        {/* Main Specimen Showcase Card (Relative wrapper allowing washi tape to overlap border) */}
        <div className="relative pt-2">
          {/* TACTILE WASHI TAPE STRIP (Overlapping Card Top Border) */}
          {accent.type === 'washi-tape' && (
            <div
              className="absolute -top-3.5 left-8 px-5 py-1 text-[10px] font-mono font-black tracking-widest shadow-md z-30 -rotate-2 select-none border border-black/25 flex items-center gap-1.5"
              style={{
                backgroundColor: palette.secondary,
                color: palette.isDark ? '#000000' : '#FFFFFF',
              }}
            >
              <span className="opacity-60">{'///'}</span>
              <span>WASHI_SPECIMEN_PIN</span>
              <span className="opacity-60">{'///'}</span>
            </div>
          )}

          {/* THE CARD ITSELF */}
          <div className="p-4 sm:p-6 relative space-y-4" style={cardStyle}>
            {/* Optional Glossy Sheen for Frutiger Aero Surface */}
            {surface.id === 'frutiger-gloss' && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-1/2 opacity-35"
                style={{
                  background: 'linear-gradient(to bottom, rgba(255,255,255,0.7) 0%, transparent 100%)',
                }}
              />
            )}

            {/* CORNER REGISTRATION TICKS ACCENT (┌ ┐ └ ┘) */}
            {accent.type === 'corner-ticks' && (
              <>
                <span
                  className="absolute top-1 left-1.5 text-base font-mono font-black leading-none select-none z-20"
                  style={{ color: palette.primary }}
                >
                  ┌
                </span>
                <span
                  className="absolute top-1 right-1.5 text-base font-mono font-black leading-none select-none z-20"
                  style={{ color: palette.primary }}
                >
                  ┐
                </span>
                <span
                  className="absolute bottom-1 left-1.5 text-base font-mono font-black leading-none select-none z-20"
                  style={{ color: palette.primary }}
                >
                  └
                </span>
                <span
                  className="absolute bottom-1 right-1.5 text-base font-mono font-black leading-none select-none z-20"
                  style={{ color: palette.primary }}
                >
                  ┘
                </span>
              </>
            )}

            {/* CAD CROSSHAIRS RETICLES & RULER ACCENT */}
            {accent.type === 'crosshairs' && (
              <>
                <div
                  className="absolute top-1.5 left-2 text-[9px] font-mono tracking-widest opacity-80 z-20"
                  style={{ color: palette.primary }}
                >
                  ⊕ ORIGIN: [0.00, 0.00]
                </div>
                <div
                  className="w-full text-center text-[8px] font-mono tracking-widest opacity-40 select-none pb-1 border-b"
                  style={{ borderColor: `${palette.border}33`, color: palette.primary }}
                >
                  |···|···|···|···|···|···|···|···|···|···|···|···|···|···|···|
                </div>
              </>
            )}

            {/* CAD BLUEPRINT DIMENSIONAL CALLOUT ACCENT */}
            {accent.type === 'blueprint-dimensions' && (
              <div
                className="w-full flex items-center justify-between text-[9px] font-mono py-1 px-2 rounded border mb-1"
                style={{
                  borderColor: `${palette.primary}55`,
                  backgroundColor: `${palette.primary}12`,
                  color: palette.primary,
                }}
              >
                <span>|◄―――――――――――― 480.00 mm ――――――――――――►|</span>
                <span className="font-bold border px-1 rounded" style={{ borderColor: palette.primary }}>
                  SCALE 1:50 // TOLERANCE ±0.05
                </span>
              </div>
            )}

            {/* HAZARD STRIPES TOP BANNER INSIDE CARD */}
            {accent.type === 'hazard-stripes' && (
              <div
                className="h-3 w-full rounded-sm shadow-inner"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(45deg, #FFB000, #FFB000 10px, #000000 10px, #000000 20px)',
                }}
              />
            )}

            {/* ART DECO GOLD SUNBURST HEADER INSIDE CARD */}
            {accent.type === 'art-deco-sunburst' && (
              <div
                className="w-full text-center text-[10px] font-serif uppercase tracking-widest py-1 border-b flex items-center justify-center gap-2"
                style={{ borderColor: `${palette.primary}44`, color: palette.primary }}
              >
                <span>☼ ☼ ☼</span>
                <span className="font-bold">ART DECO ARCHITECTURAL REQUISITION</span>
                <span>☼ ☼ ☼</span>
              </div>
            )}

            {/* DOT GRID DIRECTLY OVERLAYING THE CARD */}
            {accent.type === 'dot-grid' && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle, ${palette.border} 1.5px, transparent 1.5px)`,
                  backgroundSize: '12px 12px',
                }}
              />
            )}

            {/* TOP STATUS & PILL BAR */}
            <div className="flex items-center justify-between relative z-10">
              <span className="text-xs uppercase tracking-wider font-bold opacity-75 flex items-center gap-1.5">
                <CircleDot className="w-3.5 h-3.5" style={{ color: palette.primary }} />
                Active Component Specimen
              </span>

              <div className="flex items-center gap-2">
                {/* CYBERPUNK HUD TARGET RETICLE */}
                {accent.type === 'cyber-hud' && (
                  <div
                    className="text-[9px] font-mono px-2 py-0.5 rounded border font-bold tracking-widest flex items-center gap-1 shadow-md animate-pulse"
                    style={{
                      borderColor: palette.primary,
                      backgroundColor: `${palette.background}DD`,
                      color: palette.primary,
                      boxShadow: `0 0 10px ${palette.primary}66`,
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: palette.primary }} />
                    <span>⊕ [LOCK // 0x7FFA]</span>
                  </div>
                )}

                {/* CAD CROSSHAIRS TOP-RIGHT CALLOUT */}
                {accent.type === 'crosshairs' && (
                  <div
                    className="text-[9px] font-mono px-1.5 py-0.5 rounded border"
                    style={{ borderColor: palette.primary, color: palette.primary }}
                  >
                    ⊕ [X: 420.50, Y: 110.25]
                  </div>
                )}

                <span
                  className={components.badgeClass}
                  style={{
                    backgroundColor: `${palette.accent}25`,
                    color: palette.isDark ? '#FFFFFF' : palette.text,
                    borderColor: palette.border,
                  }}
                >
                  ACTIVE // OPTIMAL
                </span>
              </div>
            </div>

            {/* Typography Display */}
            <div className="space-y-1 relative z-10">
              <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight" style={headingStyle}>
                {font.previewSample}
              </h2>
              <p className="text-xs sm:text-sm opacity-80 leading-relaxed max-w-xl">
                Previewing the exact combination of {palette.name}, {font.name}, {surface.name}, and {components.name}.
              </p>
            </div>

            {/* Interactive Controls Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 relative z-10">
              {/* Input Search Field */}
              <div
                className="p-2 border flex items-center gap-2"
                style={{
                  backgroundColor: `${palette.background}88`,
                  borderColor: `${palette.border}66`,
                  borderRadius: surface.radius === '9999px' ? '9999px' : surface.radius === '0px' ? '0px' : '8px',
                }}
              >
                <Search className="w-3.5 h-3.5 opacity-60 flex-shrink-0" />
                <input
                  type="text"
                  readOnly
                  value="Search command..."
                  className="w-full bg-transparent text-xs outline-none"
                  style={{ color: palette.text }}
                />
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/10 border border-black/10 flex-shrink-0">
                  ⌘K
                </span>
              </div>

              {/* Dynamic Slider Potentiometer */}
              <div
                className="p-2 border flex items-center gap-2.5 justify-between"
                style={{
                  backgroundColor: `${palette.background}88`,
                  borderColor: `${palette.border}66`,
                  borderRadius: surface.radius === '9999px' ? '9999px' : surface.radius === '0px' ? '0px' : '8px',
                }}
              >
                <span className="text-[11px] font-bold opacity-75">Level</span>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={sliderVal}
                  onChange={(e) => setSliderVal(Number(e.target.value))}
                  className="w-24 cursor-pointer accent-[var(--color-primary)]"
                />
                <span className="text-xs font-mono font-bold" style={{ color: palette.primary }}>
                  {sliderVal}%
                </span>
              </div>
            </div>

            {/* Buttons & Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-black/10 relative z-10">
              <div className="flex items-center gap-2">
                {/* Primary Button styled by components */}
                <button
                  className={components.buttonClass}
                  style={{
                    backgroundColor: palette.primary,
                    color: palette.isDark ? '#000000' : '#FFFFFF',
                    borderColor: palette.border,
                  }}
                >
                  <span>Primary Action</span>
                </button>

                {/* Secondary Button */}
                <button
                  className="px-3.5 py-1.5 text-xs font-semibold rounded-lg border cursor-pointer transition-colors"
                  style={{
                    backgroundColor: `${palette.background}88`,
                    borderColor: palette.border,
                    color: palette.text,
                    borderRadius: surface.radius === '9999px' ? '9999px' : surface.radius === '0px' ? '0px' : '8px',
                  }}
                >
                  Secondary
                </button>
              </div>

              {/* Toggle Switch */}
              <div className="flex items-center gap-2 text-xs">
                <span className="opacity-75 font-medium">Auto-Sync</span>
                <button
                  type="button"
                  onClick={() => setToggleActive(!toggleActive)}
                  className="w-9 h-5 rounded-full relative cursor-pointer transition-colors"
                  style={{
                    backgroundColor: toggleActive ? palette.primary : '#888888',
                    border: `1px solid ${palette.border}`,
                  }}
                >
                  <div
                    className="w-3.5 h-3.5 rounded-full bg-white absolute top-0.5 transition-transform"
                    style={{
                      transform: toggleActive ? 'translateX(17px)' : 'translateX(2px)',
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Subsystem Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 border flex items-center gap-2.5" style={cardStyle}>
            <Cpu className="w-4 h-4" style={{ color: palette.primary }} />
            <div className="flex flex-col text-xs">
              <span className="font-bold">Engine Core</span>
              <span className="text-[10px] opacity-70 font-mono">100% Online</span>
            </div>
          </div>

          <div className="p-3 border flex items-center gap-2.5" style={cardStyle}>
            <Activity className="w-4 h-4" style={{ color: palette.secondary }} />
            <div className="flex flex-col text-xs">
              <span className="font-bold">Throughput</span>
              <span className="text-[10px] opacity-70 font-mono">1,842 TX/s</span>
            </div>
          </div>

          <div className="p-3 border flex items-center justify-between" style={cardStyle}>
            <span className="text-xs font-bold">Inspect Node</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Footer Strip */}
      <div
        className="px-5 py-2 border-t flex flex-wrap items-center justify-between text-[11px] font-mono relative z-10 opacity-80"
        style={{ borderColor: `${palette.border}22`, backgroundColor: `${palette.surface}88` }}
      >
        <div className="flex items-center gap-2">
          <span>{palette.name}</span>
          <span>•</span>
          <span>{font.name}</span>
          <span>•</span>
          <span>{surface.name}</span>
        </div>
        <div>
          <span>{components.name}</span>
        </div>
      </div>
    </div>
  );
}
