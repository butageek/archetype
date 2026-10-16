'use client';

import type { CSSProperties } from 'react';
import { useState } from 'react';
import {
  Activity,
  ArrowRight,
  Check,
  ChevronDown,
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

  // Interactive states
  const [sliderVal, setSliderVal] = useState<number>(82);
  const [toggleActive, setToggleActive] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>('System node v4.2 active');
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const [isInputHovered, setIsInputHovered] = useState<boolean>(false);
  const [primaryHovered, setPrimaryHovered] = useState<boolean>(false);
  const [secondaryHovered, setSecondaryHovered] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'telemetry' | 'controls'>('overview');
  const [engineOnline, setEngineOnline] = useState<boolean>(true);
  const [throughput, setThroughput] = useState<number>(1842);

  // New interactive states for form components
  const [checkbox1, setCheckbox1] = useState<boolean>(true);
  const [checkbox2, setCheckbox2] = useState<boolean>(false);
  const [selectedRadio, setSelectedRadio] = useState<'standard' | 'turbo' | 'isolated'>('turbo');
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [selectedDropdown, setSelectedDropdown] = useState<string>('US-East (Virginia) // Primary');

  const dropdownOptions = [
    { id: 'us-east', label: 'US-East (Virginia) // Primary', meta: '99.99% SLA • 12ms' },
    { id: 'eu-west', label: 'EU-West (Frankfurt) // Edge', meta: 'GDPR Secured • 24ms' },
    { id: 'ap-east', label: 'AP-East (Tokyo) // High-Speed', meta: 'Direct Fiber • 18ms' },
    { id: 'sa-east', label: 'SA-East (São Paulo) // Fallback', meta: 'Georedundant • 45ms' },
  ];

  // Derive card styles
  const cardStyle: CSSProperties = {
    backgroundColor: palette.surface,
    color: palette.text,
    borderColor: palette.border,
    borderWidth: surface.borderWidth,
    borderStyle: surface.borderStyle,
    borderRadius: surface.radius,
    boxShadow: surface.shadow,
    clipPath: surface.clipPath,
    backdropFilter: surface.backdropBlur ? `blur(${surface.backdropBlur})` : undefined,
    fontFamily: font.fontFamily,
    transition: 'all 200ms ease-out',
  };

  const headingStyle: CSSProperties = {
    fontFamily: font.fontFamily,
    letterSpacing:
      font.classification === 'bento' || font.classification === 'cyberpunk'
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

      {/* 7. Aurora Atmospheric Mesh Glow */}
      {accent.type === 'aurora-glow' && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl opacity-40 z-0"
            style={{
              background: `radial-gradient(circle, ${palette.primary} 0%, ${palette.secondary} 50%, transparent 80%)`,
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-35 z-0"
            style={{
              background: `radial-gradient(circle, ${palette.accent} 0%, ${palette.primary} 50%, transparent 80%)`,
            }}
          />
        </>
      )}

      {/* 8. Perspective Wireframe Grid */}
      {accent.type === 'wireframe-grid' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, ${palette.primary} 1px, transparent 1px), linear-gradient(to bottom, ${palette.primary} 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      )}

      {/* 9. Halftone Pop Art Dots */}
      {accent.type === 'halftone-dots' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(${palette.primary} 2.5px, transparent 2.5px)`,
            backgroundSize: '10px 10px',
          }}
        />
      )}

      {/* 10. Plus-Grid Alignment Marks */}
      {accent.type === 'crosshair-plus' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-25"
          style={{
            backgroundImage: `radial-gradient(circle, ${palette.primary} 1.5px, transparent 1.5px)`,
            backgroundSize: '32px 32px',
          }}
        />
      )}

      {/* =========================================================================
          TOP HEADER BAR
          ========================================================================= */}
      <div
        className="w-full border-b flex flex-wrap items-center justify-between px-3.5 sm:px-4 py-2 relative z-10 backdrop-blur-xs gap-2"
        style={{ borderColor: `${palette.border}44`, backgroundColor: `${palette.surface}EE` }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 flex items-center justify-center font-bold text-xs shadow-xs"
            style={{
              backgroundColor: palette.primary,
              color: palette.isDark ? '#000000' : '#FFFFFF',
              borderRadius: surface.radius === '0px' ? '0px' : surface.radius === '9999px' ? '9999px' : '6px',
              border: `${surface.borderWidth} solid ${palette.border}`,
            }}
          >
            <Zap className="w-3 h-3" />
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
      <div className="p-3 sm:p-4 relative z-10 space-y-3 min-h-[280px]">
        {/* Main Specimen Showcase Card (Relative wrapper allowing washi tape to overlap border) */}
        <div className="relative pt-1">
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
          <div className="p-3 sm:p-4 relative space-y-2.5" style={cardStyle}>
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

            {/* PLUS-GRID CALIBRATION CORNER CROSSHAIRS */}
            {accent.type === 'crosshair-plus' && (
              <>
                <span
                  className="absolute top-1 left-1.5 text-xs font-mono font-black leading-none select-none z-20 opacity-70"
                  style={{ color: palette.primary }}
                >
                  +
                </span>
                <span
                  className="absolute top-1 right-1.5 text-xs font-mono font-black leading-none select-none z-20 opacity-70"
                  style={{ color: palette.primary }}
                >
                  +
                </span>
                <span
                  className="absolute bottom-1 left-1.5 text-xs font-mono font-black leading-none select-none z-20 opacity-70"
                  style={{ color: palette.primary }}
                >
                  +
                </span>
                <span
                  className="absolute bottom-1 right-1.5 text-xs font-mono font-black leading-none select-none z-20 opacity-70"
                  style={{ color: palette.primary }}
                >
                  +
                </span>
              </>
            )}

            {/* AURORA SOFT AMBIENT BLOOM INSIDE CARD */}
            {accent.type === 'aurora-glow' && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full blur-2xl opacity-30 z-0"
                style={{
                  background: `radial-gradient(circle, ${palette.primary} 0%, ${palette.secondary} 60%, transparent 80%)`,
                }}
              />
            )}

            {/* PERSPECTIVE TECH WIREFRAME GRID TOP STATUS BAR */}
            {accent.type === 'wireframe-grid' && (
              <div
                className="w-full flex items-center justify-between text-[9px] font-mono py-0.5 px-2 rounded border mb-1"
                style={{
                  borderColor: `${palette.primary}44`,
                  backgroundColor: `${palette.primary}0D`,
                  color: palette.primary,
                }}
              >
                <span>[3D_PERSPECTIVE_GRID // ACTIVE]</span>
                <span className="font-bold">Z-INDEX: 0x00</span>
              </div>
            )}

            {/* HALFTONE DOT MATRIX PATTERN INSIDE CARD */}
            {accent.type === 'halftone-dots' && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle, ${palette.primary} 2px, transparent 2px)`,
                  backgroundSize: '8px 8px',
                }}
              />
            )}

            {/* TECHNICAL INVENTORY BARCODE & SERIAL STRIP */}
            {accent.type === 'barcode-serial' && (
              <div
                className="w-full flex items-center justify-between text-[9px] font-mono py-1 px-2.5 rounded border mb-1"
                style={{
                  borderColor: `${palette.border}`,
                  backgroundColor: `${palette.background}88`,
                  color: palette.text,
                }}
              >
                <div className="flex items-center gap-0.5 h-3.5">
                  <div className="w-[1px] h-full" style={{ backgroundColor: palette.text }} />
                  <div className="w-[2px] h-full" style={{ backgroundColor: palette.text }} />
                  <div className="w-[1px] h-full bg-transparent" />
                  <div className="w-[3px] h-full" style={{ backgroundColor: palette.primary }} />
                  <div className="w-[1px] h-full" style={{ backgroundColor: palette.text }} />
                  <div className="w-[2px] h-full bg-transparent" />
                  <div className="w-[1px] h-full" style={{ backgroundColor: palette.text }} />
                  <div className="w-[3px] h-full" style={{ backgroundColor: palette.text }} />
                  <div className="w-[1px] h-full" style={{ backgroundColor: palette.primary }} />
                  <div className="w-[2px] h-full" style={{ backgroundColor: palette.text }} />
                </div>
                <span className="font-bold tracking-wider">REF-ID: [SPEC-7702-X]</span>
                <span
                  className="px-1.5 py-0.2 rounded text-[8px] font-bold border"
                  style={{ borderColor: palette.primary, color: palette.primary }}
                >
                  AUTHENTIC
                </span>
              </div>
            )}

            {/* REALTIME AUDIO OSCILLOSCOPE WAVEFORM STRIP */}
            {accent.type === 'audio-waveform' && (
              <div
                className="w-full flex items-center justify-between text-[9px] font-mono py-1 px-2.5 rounded border mb-1"
                style={{
                  borderColor: `${palette.primary}44`,
                  backgroundColor: `${palette.primary}0D`,
                  color: palette.primary,
                }}
              >
                <div className="flex items-center gap-1 h-3.5">
                  <div className="w-1 h-2 rounded-full animate-pulse" style={{ backgroundColor: palette.primary }} />
                  <div className="w-1 h-3.5 rounded-full" style={{ backgroundColor: palette.secondary }} />
                  <div className="w-1 h-1.5 rounded-full" style={{ backgroundColor: palette.primary }} />
                  <div className="w-1 h-3 rounded-full" style={{ backgroundColor: palette.primary }} />
                  <div className="w-1 h-2 rounded-full" style={{ backgroundColor: palette.secondary }} />
                  <div className="w-1 h-3.5 rounded-full animate-pulse" style={{ backgroundColor: palette.primary }} />
                </div>
                <span className="font-bold tracking-widest">FREQ 44.1 kHz // -6.2 dB FS</span>
                <span
                  className="px-1.5 py-0.2 rounded text-[8px] font-bold border"
                  style={{ borderColor: palette.primary }}
                >
                  LIVE RASTER
                </span>
              </div>
            )}

            {/* CONSTELLATION NODE NETWORK ACCENT */}
            {accent.type === 'node-constellation' && (
              <div
                className="w-full flex items-center justify-between text-[9px] font-mono py-1 px-2.5 rounded border mb-1"
                style={{
                  borderColor: `${palette.secondary}44`,
                  backgroundColor: `${palette.secondary}0D`,
                  color: palette.secondary,
                }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full shadow-xs" style={{ backgroundColor: palette.primary }} />
                  <div className="w-3 h-[1px]" style={{ backgroundColor: `${palette.primary}88` }} />
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: palette.secondary }} />
                  <div className="w-4 h-[1px]" style={{ backgroundColor: `${palette.primary}88` }} />
                  <span className="w-2 h-2 rounded-full shadow-xs" style={{ backgroundColor: palette.accent }} />
                </div>
                <span className="font-bold tracking-widest">TOPOLOGY MESH // 0x4B</span>
                <span
                  className="px-1.5 py-0.2 rounded text-[8px] font-bold border"
                  style={{ borderColor: palette.secondary }}
                >
                  5 NODES
                </span>
              </div>
            )}

            {/* TOP BAR: TABS & STATUS BADGES */}
            <div className="flex flex-wrap items-center justify-between gap-2 relative z-10">
              {/* Interactive Segmented Tabs */}
              <div
                className="flex items-center gap-1 p-1 rounded-xl border"
                style={{
                  borderColor: `${palette.border}44`,
                  backgroundColor: `${palette.background}88`,
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveTab('overview')}
                  className="px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-all"
                  style={{
                    backgroundColor: activeTab === 'overview' ? palette.primary : 'transparent',
                    color: activeTab === 'overview' ? (palette.isDark ? '#000000' : '#FFFFFF') : palette.text,
                    boxShadow: activeTab === 'overview' ? `0 2px 8px ${palette.primary}55` : 'none',
                  }}
                >
                  ✦ Overview
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('telemetry')}
                  className="px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-all"
                  style={{
                    backgroundColor: activeTab === 'telemetry' ? palette.primary : 'transparent',
                    color: activeTab === 'telemetry' ? (palette.isDark ? '#000000' : '#FFFFFF') : palette.text,
                    boxShadow: activeTab === 'telemetry' ? `0 2px 8px ${palette.primary}55` : 'none',
                  }}
                >
                  ⚡ Telemetry
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('controls')}
                  className="px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-all"
                  style={{
                    backgroundColor: activeTab === 'controls' ? palette.primary : 'transparent',
                    color: activeTab === 'controls' ? (palette.isDark ? '#000000' : '#FFFFFF') : palette.text,
                    boxShadow: activeTab === 'controls' ? `0 2px 8px ${palette.primary}55` : 'none',
                  }}
                >
                  ⚙ Metrics
                </button>
              </div>

              {/* Status Badges */}
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

                {/* AURORA GLOW STATUS PILL */}
                {accent.type === 'aurora-glow' && (
                  <div
                    className="text-[9px] font-mono px-2 py-0.5 rounded-full border flex items-center gap-1 font-bold shadow-xs"
                    style={{
                      borderColor: `${palette.primary}88`,
                      backgroundColor: `${palette.primary}20`,
                      color: palette.primary,
                      boxShadow: `0 0 8px ${palette.primary}44`,
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: palette.secondary }} />
                    <span>AURORA_MESH</span>
                  </div>
                )}

                {/* WIREFRAME GRID BADGE */}
                {accent.type === 'wireframe-grid' && (
                  <div
                    className="text-[9px] font-mono px-1.5 py-0.5 rounded border"
                    style={{
                      borderColor: `${palette.primary}66`,
                      backgroundColor: `${palette.primary}15`,
                      color: palette.primary,
                    }}
                  >
                    GRID_SNAP: 20px
                  </div>
                )}

                {/* PLUS-GRID CALIBRATION BADGE */}
                {accent.type === 'crosshair-plus' && (
                  <div
                    className="text-[9px] font-mono px-1.5 py-0.5 rounded border font-bold"
                    style={{
                      borderColor: `${palette.primary}66`,
                      backgroundColor: `${palette.primary}12`,
                      color: palette.primary,
                    }}
                  >
                    + CALIB: OK
                  </div>
                )}

                {/* HALFTONE DOT MATRIX BADGE */}
                {accent.type === 'halftone-dots' && (
                  <div
                    className="text-[9px] font-mono px-1.5 py-0.5 rounded border font-bold"
                    style={{
                      borderColor: `${palette.primary}66`,
                      backgroundColor: `${palette.primary}12`,
                      color: palette.primary,
                    }}
                  >
                    ● DENSITY: 60 LPI
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
            <div className="space-y-0.5 relative z-10">
              <h2 className="text-base sm:text-2xl font-extrabold tracking-tight truncate" style={headingStyle}>
                {font.previewSample}
              </h2>
              <p className="text-[11px] sm:text-xs opacity-80 leading-relaxed truncate max-w-xl">
                Previewing the exact combination of {palette.name}, {font.name}, {surface.name}, and {components.name}.
              </p>
            </div>

            {/* Row 1: Search Input & Cluster Gateway Dropdown Select */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 relative ${dropdownOpen ? 'z-50' : 'z-20'}`}>
              {/* Fully Interactive Search Input Box */}
              <div
                onMouseEnter={() => setIsInputHovered(true)}
                onMouseLeave={() => setIsInputHovered(false)}
                className="p-2.5 border flex items-center gap-2 transition-all duration-150 relative"
                style={{
                  backgroundColor: `${palette.background}`,
                  borderColor: isInputFocused
                    ? palette.primary
                    : isInputHovered
                    ? palette.border
                    : `${palette.border}66`,
                  boxShadow: isInputFocused
                    ? surface.id.includes('neobrutalist')
                      ? `3px 3px 0px ${palette.primary}`
                      : `0 0 0 2px ${palette.primary}44`
                    : isInputHovered
                    ? `0 2px 8px rgba(0,0,0,0.06)`
                    : 'none',
                  borderRadius: surface.radius === '9999px' ? '9999px' : surface.radius === '0px' ? '0px' : '8px',
                }}
              >
                <Search
                  className="w-3.5 h-3.5 flex-shrink-0 transition-colors"
                  style={{ color: isInputFocused ? palette.primary : `${palette.text}88` }}
                />
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => setIsInputFocused(false)}
                  placeholder="Type commands or keywords..."
                  className="w-full bg-transparent text-xs outline-none transition-colors"
                  style={{ color: palette.text, fontFamily: font.fontFamily }}
                />
                {inputValue.length > 0 ? (
                  <button
                    type="button"
                    onClick={() => setInputValue('')}
                    className="text-[10px] font-mono px-1.5 py-0.5 rounded cursor-pointer transition-colors opacity-60 hover:opacity-100"
                    style={{ backgroundColor: `${palette.surface}`, color: palette.text }}
                    title="Clear text"
                  >
                    ✕
                  </button>
                ) : (
                  <span
                    className="text-[10px] font-mono px-1.5 py-0.5 rounded border flex-shrink-0 opacity-70"
                    style={{ borderColor: `${palette.border}44`, backgroundColor: `${palette.surface}` }}
                  >
                    ⌘K
                  </span>
                )}
              </div>

              {/* Cluster Gateway Dropdown Select */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full p-2.5 border flex items-center justify-between text-left text-xs transition-all cursor-pointer relative"
                  style={{
                    backgroundColor: palette.background,
                    borderColor: dropdownOpen ? palette.primary : `${palette.border}77`,
                    color: palette.text,
                    borderRadius: surface.radius === '9999px' ? '9999px' : surface.radius === '0px' ? '0px' : '8px',
                    boxShadow: dropdownOpen
                      ? surface.id.includes('neobrutalist')
                        ? `3px 3px 0px ${palette.primary}`
                        : `0 0 0 2px ${palette.primary}44`
                      : 'none',
                    fontFamily: font.fontFamily,
                  }}
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: palette.primary }} />
                    <span className="truncate font-semibold">{selectedDropdown}</span>
                  </div>
                  <ChevronDown
                    className={`w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                    style={{ color: dropdownOpen ? palette.primary : `${palette.text}88` }}
                  />
                </button>

                {/* Dropdown Floating Options Menu */}
                {dropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setDropdownOpen(false)}
                    />
                    <div
                      className="absolute top-full left-0 right-0 mt-1.5 border overflow-hidden z-50 p-1 space-y-0.5 animate-in fade-in zoom-in-95 duration-100 shadow-2xl max-h-52 overflow-y-auto"
                      style={{
                        backgroundColor: palette.isDark ? (palette.surface === '#000000' ? '#141416' : palette.surface) : '#FFFFFF',
                        borderColor: palette.border,
                        borderRadius: surface.radius === '9999px' ? '14px' : surface.radius === '0px' ? '0px' : '8px',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.45), 0 8px 10px -6px rgba(0, 0, 0, 0.45)',
                        fontFamily: font.fontFamily,
                      }}
                    >
                      {dropdownOptions.map((opt) => {
                        const isSelected = selectedDropdown === opt.label;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => {
                              setSelectedDropdown(opt.label);
                              setDropdownOpen(false);
                            }}
                            className="w-full px-2.5 py-1.5 text-xs text-left flex items-center justify-between rounded cursor-pointer transition-colors"
                            style={{
                              backgroundColor: isSelected ? `${palette.primary}20` : 'transparent',
                              color: isSelected ? palette.primary : palette.text,
                              borderRadius: surface.radius === '9999px' ? '8px' : surface.radius === '0px' ? '0px' : '6px',
                            }}
                          >
                            <div className="flex flex-col truncate pr-2">
                              <span className="font-semibold truncate">{opt.label}</span>
                              <span className="text-[10px] opacity-60 font-mono">{opt.meta}</span>
                            </div>
                            {isSelected && <Check className="w-3.5 h-3.5 flex-shrink-0 stroke-[3]" style={{ color: palette.primary }} />}
                          </button>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Row 2: Checkboxes & Dynamic Slider */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 relative z-10">
              {/* Checkboxes: Security & Protocol Policies */}
              <div className="flex flex-col justify-between gap-1.5">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="opacity-75">Security Protocol Flags</span>
                  <span className="text-[9px] font-mono opacity-50">Checkboxes</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {/* Checkbox 1 */}
                  <button
                    type="button"
                    onClick={() => setCheckbox1(!checkbox1)}
                    className="p-2 border flex items-center gap-2 cursor-pointer transition-all select-none text-left"
                    style={{
                      backgroundColor: checkbox1 ? `${palette.primary}12` : palette.background,
                      borderColor: checkbox1 ? palette.primary : `${palette.border}77`,
                      borderRadius: surface.radius === '9999px' ? '9999px' : surface.radius === '0px' ? '0px' : '8px',
                      boxShadow: checkbox1 && surface.id.includes('neobrutalist') ? `2px 2px 0px ${palette.primary}` : 'none',
                    }}
                  >
                    <div
                      className="w-3.5 h-3.5 flex items-center justify-center border transition-all flex-shrink-0"
                      style={{
                        borderColor: checkbox1 ? palette.primary : `${palette.text}66`,
                        backgroundColor: checkbox1 ? palette.primary : 'transparent',
                        borderRadius: surface.radius === '0px' ? '0px' : surface.radius === '9999px' ? '4px' : '3px',
                        color: palette.isDark ? '#000000' : '#FFFFFF',
                      }}
                    >
                      {checkbox1 && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </div>
                    <span className="font-semibold text-[11px] truncate" style={{ color: checkbox1 ? palette.primary : palette.text }}>
                      Enclave Lock
                    </span>
                  </button>

                  {/* Checkbox 2 */}
                  <button
                    type="button"
                    onClick={() => setCheckbox2(!checkbox2)}
                    className="p-2 border flex items-center gap-2 cursor-pointer transition-all select-none text-left"
                    style={{
                      backgroundColor: checkbox2 ? `${palette.primary}12` : palette.background,
                      borderColor: checkbox2 ? palette.primary : `${palette.border}77`,
                      borderRadius: surface.radius === '9999px' ? '9999px' : surface.radius === '0px' ? '0px' : '8px',
                      boxShadow: checkbox2 && surface.id.includes('neobrutalist') ? `2px 2px 0px ${palette.primary}` : 'none',
                    }}
                  >
                    <div
                      className="w-3.5 h-3.5 flex items-center justify-center border transition-all flex-shrink-0"
                      style={{
                        borderColor: checkbox2 ? palette.primary : `${palette.text}66`,
                        backgroundColor: checkbox2 ? palette.primary : 'transparent',
                        borderRadius: surface.radius === '0px' ? '0px' : surface.radius === '9999px' ? '4px' : '3px',
                        color: palette.isDark ? '#000000' : '#FFFFFF',
                      }}
                    >
                      {checkbox2 && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </div>
                    <span className="font-semibold text-[11px] truncate" style={{ color: checkbox2 ? palette.primary : palette.text }}>
                      Sync 60Hz
                    </span>
                  </button>
                </div>
              </div>

              {/* Dynamic Slider Potentiometer (Color Matched 100% to Palette Primary) */}
              <div
                className="p-2.5 border flex flex-col justify-between gap-1.5"
                style={{
                  backgroundColor: `${palette.background}`,
                  borderColor: `${palette.border}66`,
                  borderRadius: surface.radius === '9999px' ? '9999px' : surface.radius === '0px' ? '0px' : '8px',
                }}
              >
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="opacity-75">Intensity Modulation</span>
                  <span className="font-mono" style={{ color: palette.primary }}>
                    {sliderVal}%
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderVal}
                    onChange={(e) => setSliderVal(Number(e.target.value))}
                    style={{
                      accentColor: palette.primary,
                      cursor: 'ew-resize',
                    }}
                    className="w-full h-2 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Row 3: Interactive Radio Buttons Group */}
            <div className="pt-1 relative z-10">
              <div className="flex items-center justify-between mb-0.5">
                <label className="text-[10px] font-mono font-bold uppercase tracking-wider opacity-75">
                  Routing Profile
                </label>
                <span className="text-[9px] font-mono opacity-50">Radio Group</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: 'standard', label: 'Standard', desc: '1x Burst' },
                  { id: 'turbo', label: 'Turbo', desc: '10x Speed' },
                  { id: 'isolated', label: 'Airgap', desc: 'Zero-Trust' },
                ].map((tier) => {
                  const isSelected = selectedRadio === tier.id;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setSelectedRadio(tier.id as 'standard' | 'turbo' | 'isolated')}
                      className="p-1.5 border flex flex-col items-center justify-center gap-0.5 cursor-pointer transition-all text-center select-none"
                      style={{
                        backgroundColor: isSelected ? `${palette.primary}18` : palette.background,
                        borderColor: isSelected ? palette.primary : `${palette.border}77`,
                        color: isSelected ? palette.primary : palette.text,
                        borderRadius: surface.radius === '9999px' ? '9999px' : surface.radius === '0px' ? '0px' : '8px',
                        boxShadow: isSelected && surface.id.includes('neobrutalist') ? `2px 2px 0px ${palette.primary}` : 'none',
                      }}
                    >
                      <div className="flex items-center gap-1.5">
                        <div
                          className="w-3.5 h-3.5 flex items-center justify-center border transition-all flex-shrink-0"
                          style={{
                            borderColor: isSelected ? palette.primary : `${palette.text}66`,
                            borderRadius: surface.radius === '0px' ? '0px' : '9999px',
                            backgroundColor: 'transparent',
                          }}
                        >
                          {isSelected && (
                            <div
                              className="w-1.5 h-1.5 transition-transform"
                              style={{
                                backgroundColor: palette.primary,
                                borderRadius: surface.radius === '0px' ? '0px' : '9999px',
                              }}
                            />
                          )}
                        </div>
                        <span className="font-bold text-[11px] truncate">{tier.label}</span>
                      </div>
                      <span className="text-[9px] font-mono opacity-65">{tier.desc}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Row 4: Buttons & Interactive Actions */}
            <div className="pt-1.5 flex flex-wrap items-center justify-between gap-2 border-t border-black/10 relative z-0">
              <div className="flex items-center gap-2">
                {/* Primary Button styled by components with live hover and active click */}
                <button
                  type="button"
                  onMouseEnter={() => setPrimaryHovered(true)}
                  onMouseLeave={() => setPrimaryHovered(false)}
                  className={`${components.buttonClass} transition-all duration-150 flex items-center gap-1.5 cursor-pointer active:scale-95`}
                  style={{
                    backgroundColor: primaryHovered ? `${palette.primary}E6` : palette.primary,
                    color: palette.isDark ? '#000000' : '#FFFFFF',
                    borderColor: palette.border,
                    transform: primaryHovered ? 'scale(1.02)' : 'scale(1)',
                    boxShadow: primaryHovered
                      ? surface.id.includes('neobrutalist')
                        ? '4px 4px 0px #000'
                        : `0 0 16px ${palette.primary}88`
                      : 'none',
                  }}
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Primary Action</span>
                </button>

                {/* Secondary Button with live hover background & border shift */}
                <button
                  type="button"
                  onMouseEnter={() => setSecondaryHovered(true)}
                  onMouseLeave={() => setSecondaryHovered(false)}
                  className="px-3.5 py-2 text-xs font-semibold border cursor-pointer transition-all duration-150 flex items-center gap-1.5 active:scale-95"
                  style={{
                    backgroundColor: secondaryHovered ? `${palette.primary}20` : `${palette.background}88`,
                    borderColor: secondaryHovered ? palette.primary : `${palette.border}88`,
                    color: secondaryHovered ? palette.primary : palette.text,
                    borderRadius: surface.radius === '9999px' ? '9999px' : surface.radius === '0px' ? '0px' : '8px',
                    transform: secondaryHovered ? 'scale(1.02)' : 'scale(1)',
                  }}
                >
                  <span>Secondary</span>
                </button>
              </div>

              {/* Interactive Toggle Switch */}
              <div className="flex items-center gap-2 text-xs">
                <span
                  className="font-mono text-[11px] font-bold transition-colors select-none"
                  style={{ color: toggleActive ? palette.primary : `${palette.text}88` }}
                >
                  {toggleActive ? 'AUTO-SYNC: ON' : 'AUTO-SYNC: OFF'}
                </span>
                <button
                  type="button"
                  onClick={() => setToggleActive(!toggleActive)}
                  className="w-9 h-4.5 rounded-full relative cursor-pointer transition-all duration-200 border"
                  style={{
                    backgroundColor: toggleActive ? palette.primary : `${palette.border}66`,
                    borderColor: palette.border,
                    boxShadow: toggleActive ? `0 0 8px ${palette.primary}66` : 'none',
                  }}
                  title="Toggle automatic synchronization"
                >
                  <div
                    className="w-3 h-3 rounded-full bg-white absolute top-0.5 transition-transform duration-200 shadow-xs"
                    style={{
                      transform: toggleActive ? 'translateX(18px)' : 'translateX(2px)',
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Subsystem Interactive Tiles (Hoverable, Clickable, Animated) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {/* Tile 1: Engine Core Toggle */}
          <button
            type="button"
            onClick={() => setEngineOnline(!engineOnline)}
            className="p-2.5 border flex items-center justify-between text-left cursor-pointer transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md"
            style={{
              ...cardStyle,
              borderColor: engineOnline ? palette.border : `${palette.border}66`,
            }}
            title="Click to toggle Engine Core status"
          >
            <div className="flex items-center gap-2">
              <Cpu
                className="w-3.5 h-3.5 transition-transform group-hover:rotate-45"
                style={{ color: engineOnline ? palette.primary : palette.textMuted }}
              />
              <div className="flex flex-col text-xs">
                <span className="font-bold">Engine Core</span>
                <span
                  className="text-[10px] font-mono font-bold"
                  style={{ color: engineOnline ? (palette.isDark ? '#50FA7B' : '#059669') : palette.textMuted }}
                >
                  {engineOnline ? '100% ONLINE' : 'PAUSED'}
                </span>
              </div>
            </div>
            <span
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: engineOnline ? palette.primary : '#888888',
                boxShadow: engineOnline ? `0 0 6px ${palette.primary}` : 'none',
              }}
            />
          </button>

          {/* Tile 2: Throughput Pulse Surge */}
          <button
            type="button"
            onClick={() => setThroughput((prev) => prev + Math.floor(Math.random() * 200 + 50))}
            className="p-2.5 border flex items-center justify-between text-left cursor-pointer transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md"
            style={cardStyle}
            title="Click to surge throughput telemetry"
          >
            <div className="flex items-center gap-2">
              <Activity className="w-3.5 h-3.5" style={{ color: palette.secondary }} />
              <div className="flex flex-col text-xs">
                <span className="font-bold">Throughput</span>
                <span className="text-[10px] opacity-75 font-mono">
                  {throughput.toLocaleString()} TX/s
                </span>
              </div>
            </div>
            <span
              className="text-[9px] font-mono px-1.5 py-0.5 rounded border"
              style={{ borderColor: palette.secondary, color: palette.secondary }}
            >
              +SURGE
            </span>
          </button>

          {/* Tile 3: Inspect Node Action */}
          <button
            type="button"
            onClick={() => {
              setThroughput((prev) => prev + 42);
            }}
            className="p-2.5 border flex items-center justify-between text-left cursor-pointer transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md"
            style={cardStyle}
            title="Click to run diagnostic inspection"
          >
            <div className="flex flex-col text-xs">
              <span className="font-bold">Inspect Node</span>
              <span className="text-[10px] opacity-75 font-mono">Diagnostic Ping</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5" style={{ color: palette.primary }} />
          </button>
        </div>
      </div>

      {/* Footer Strip */}
      <div
        className="px-4 py-1.5 border-t flex flex-wrap items-center justify-between text-[11px] font-mono relative z-10 opacity-80"
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
