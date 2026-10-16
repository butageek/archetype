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
    letterSpacing: font.classification === 'grotesk' || font.classification === 'cyberpunk' ? '-0.02em' : font.classification === 'luxury' || font.classification === 'art-deco' ? '0.08em' : 'normal',
    textTransform: font.classification === 'pixel' || font.classification === 'cyberpunk' ? 'uppercase' : 'none',
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
      {/* --- ACCENTS LAYER --- */}
      {accent.type === 'scanlines' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-30 opacity-25 mix-blend-overlay"
          style={{
            backgroundImage:
              'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.75) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
            backgroundSize: '100% 3px, 6px 100%',
          }}
        />
      )}

      {accent.type === 'dot-grid' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(${palette.border} 1px, transparent 1px)`,
            backgroundSize: '16px 16px',
          }}
        />
      )}

      {accent.type === 'cyber-hud' && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(${palette.primary} 1.5px, transparent 1.5px)`,
              backgroundSize: '20px 20px',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-3 right-4 text-[9px] font-mono tracking-widest z-20 flex items-center gap-1.5 opacity-90 animate-pulse"
            style={{ color: palette.primary }}
          >
            <span>⊕ [TARGET_LOCK // 0x7FFA]</span>
          </div>
        </>
      )}

      {accent.type === 'prismatic-flare' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 right-0 h-1.5 z-20"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(56,189,248,0.7), rgba(244,114,182,0.7), rgba(250,204,21,0.7), transparent)',
          }}
        />
      )}

      {accent.type === 'art-deco-sunburst' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-48 h-2 z-20 flex items-center justify-center opacity-80"
          style={{
            background: `radial-gradient(ellipse at top, ${palette.primary} 0%, transparent 70%)`,
          }}
        />
      )}

      {accent.type === 'blueprint-dimensions' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-2 right-4 text-[9px] font-mono z-20 flex items-center gap-2 opacity-80"
          style={{ color: palette.primary }}
        >
          <span>|&lt;--- 480mm ---&gt;|</span>
          <span className="px-1 py-0.2 rounded border text-[8px]" style={{ borderColor: palette.primary }}>
            1:50
          </span>
        </div>
      )}

      {accent.type === 'noise-grain' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-10 mix-blend-multiply"
          style={{
            backgroundImage: `radial-gradient(rgba(0,0,0,0.2) 15%, transparent 16%), radial-gradient(rgba(0,0,0,0.1) 15%, transparent 16%)`,
            backgroundSize: '4px 4px',
          }}
        />
      )}

      {accent.type === 'hazard-stripes' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 right-0 h-2 z-20 opacity-80"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #FFB000, #FFB000 10px, #000000 10px, #000000 20px)',
          }}
        />
      )}

      {accent.type === 'crosshairs' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-3 right-4 text-[9px] font-mono tracking-widest z-20 flex items-center gap-1.5 opacity-80"
          style={{ color: palette.primary }}
        >
          <span>⊕ [CAD-GRID: X:420 Y:110]</span>
        </div>
      )}

      {/* Header Bar */}
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

        <div className="text-[10px] font-mono opacity-80">
          Accent: {accent.name}
        </div>
      </div>

      {/* Interactive Component Showcase Specimen */}
      <div className="p-4 sm:p-6 relative z-10 space-y-4 min-h-[340px]">
        {/* Main Specimen Showcase Card */}
        <div className="p-4 sm:p-6 relative space-y-4 overflow-hidden" style={cardStyle}>
          {/* Optional Glossy Sheen for Frutiger Aero */}
          {surface.id === 'frutiger-gloss' && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-1/2 opacity-30"
              style={{
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.7) 0%, transparent 100%)',
              }}
            />
          )}

          {/* Corner Ticks & Washi Tape */}
          {accent.type === 'corner-ticks' && (
            <>
              <span className="absolute top-1 left-1.5 text-[10px] font-mono leading-none opacity-50">┌</span>
              <span className="absolute top-1 right-1.5 text-[10px] font-mono leading-none opacity-50">┐</span>
              <span className="absolute bottom-1 left-1.5 text-[10px] font-mono leading-none opacity-50">└</span>
              <span className="absolute bottom-1 right-1.5 text-[10px] font-mono leading-none opacity-50">┘</span>
            </>
          )}

          {accent.type === 'washi-tape' && (
            <div
              className="absolute -top-2.5 left-8 w-16 h-4 shadow-xs pointer-events-none opacity-85 -rotate-1"
              style={{
                backgroundColor: palette.secondary,
                border: '1px dashed rgba(0,0,0,0.2)',
              }}
            />
          )}

          {/* Top Status & Pill Bar */}
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider font-bold opacity-75 flex items-center gap-1.5">
              <CircleDot className="w-3.5 h-3.5" style={{ color: palette.primary }} />
              Active Component Specimen
            </span>

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

          {/* Typography Display */}
          <div className="space-y-1">
            <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight" style={headingStyle}>
              {font.previewSample}
            </h2>
            <p className="text-xs sm:text-sm opacity-80 leading-relaxed max-w-xl">
              Previewing the exact combination of {palette.name}, {font.name}, {surface.name}, and {components.name}.
            </p>
          </div>

          {/* Interactive Controls Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
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
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-black/10">
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
