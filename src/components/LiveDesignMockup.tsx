'use client';

import React, { useState } from 'react';
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Clock,
  Compass,
  Cpu,
  Database,
  Globe,
  HardDrive,
  Maximize2,
  Play,
  RotateCcw,
  Sliders,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react';
import { DesignComposition } from '../types/design';

interface LiveDesignMockupProps {
  composition: DesignComposition;
}

export function LiveDesignMockup({ composition }: LiveDesignMockupProps) {
  const { palette, layout, surface, font, accents, animation } = composition;

  const [activeTab, setActiveTab] = useState<'overview' | 'telemetry' | 'actions'>('overview');
  const [toggleActive, setToggleActive] = useState<boolean>(true);
  const [sliderVal, setSliderVal] = useState<number>(84);
  const [isTestingMotion, setIsTestingMotion] = useState<boolean>(false);

  // Trigger motion physics preview
  const handleTestMotion = () => {
    setIsTestingMotion(true);
    setTimeout(() => {
      setIsTestingMotion(false);
    }, 1200);
  };

  // Derive corner radius
  const getRadius = (type: 'card' | 'button' | 'badge' | 'dock' = 'card') => {
    if (surface.radius === 'sharp') return '0px';
    if (type === 'badge' || type === 'dock') return surface.radius === 'pill' ? '9999px' : '6px';
    if (surface.radius === 'pill') return type === 'card' ? '20px' : '9999px';
    if (surface.radius === 'rounded') return type === 'card' ? '14px' : '8px';
    return '4px'; // subtle
  };

  // Derive shadow
  const getShadow = (isInteractive = false) => {
    if (surface.shadow === 'none') return 'none';
    if (surface.shadow === 'hard-offset') {
      return isInteractive
        ? `3px 3px 0px ${palette.border}`
        : `4px 4px 0px ${palette.border}`;
    }
    if (surface.shadow === 'glowing-neon') {
      return `0 0 16px ${palette.primary}66, 0 0 2px ${palette.primary}`;
    }
    if (surface.shadow === 'skeuomorphic') {
      return '0 2px 5px rgba(0,0,0,0.06), 0 8px 18px rgba(0,0,0,0.1)';
    }
    return '0 4px 14px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.05)';
  };

  // Base card styling
  const cardStyle: React.CSSProperties = {
    backgroundColor: palette.surface,
    color: palette.text,
    borderColor: palette.border,
    borderWidth: surface.borderWidth,
    borderStyle: surface.borderStyle,
    borderRadius: getRadius('card'),
    boxShadow: getShadow(),
    fontFamily: font.bodyFamily,
    transition: `all ${animation.duration} ${animation.transitionCurve}`,
  };

  // Heading font styling
  const headingStyle: React.CSSProperties = {
    fontFamily: font.headingFamily,
    letterSpacing: font.letterSpacing === 'wide' ? '0.06em' : font.letterSpacing === 'tight' ? '-0.025em' : 'normal',
    textTransform: font.transform,
  };

  // Density spacing helper
  const densityPad = layout.density === 'compact' ? 'p-3' : layout.density === 'spacious' ? 'p-6' : 'p-4 sm:p-5';
  const densityGap = layout.density === 'compact' ? 'gap-2.5' : layout.density === 'spacious' ? 'gap-5' : 'gap-3.5';

  return (
    <div
      className="w-full rounded-2xl border transition-all duration-300 relative overflow-hidden shadow-xl"
      style={{
        backgroundColor: palette.background,
        color: palette.text,
        borderColor: palette.border,
        borderWidth: surface.borderWidth,
        fontFamily: font.bodyFamily,
      }}
    >
      {/* --- ACCENTS LAYER --- */}
      {/* 1. CRT Scanlines Overlay */}
      {accents.scanlines && (
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

      {/* 2. Architectural Dot Grid */}
      {accents.dotGrid && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(${palette.border} 1px, transparent 1px)`,
            backgroundSize: '16px 16px',
          }}
        />
      )}

      {/* 3. Paper Grain Overlay */}
      {accents.noiseGrain && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-10 mix-blend-multiply"
          style={{
            backgroundImage: `radial-gradient(rgba(0,0,0,0.2) 15%, transparent 16%), radial-gradient(rgba(0,0,0,0.1) 15%, transparent 16%)`,
            backgroundSize: '4px 4px',
          }}
        />
      )}

      {/* 4. CAD Drafting Crosshairs & Rulers */}
      {accents.crosshairs && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-3 right-4 text-[9px] font-mono tracking-widest z-20 flex items-center gap-1.5 opacity-80"
          style={{ color: palette.primary }}
        >
          <span>⊕ CAD-LOC: 34.05°N, 118.24°W</span>
          <span className="hidden sm:inline">| TOL: ±0.005mm</span>
        </div>
      )}

      {accents.rulers && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 right-0 h-2 border-b z-20 opacity-40 font-mono text-[7px] flex justify-between px-2 overflow-hidden"
          style={{ borderColor: palette.border, color: palette.textMuted }}
        >
          <span>|···|···|···|···|···|···|···|···|···|···|···|···|···|···|···|···|···|···|</span>
        </div>
      )}

      {/* --- MOCKUP HEADER TOOLBAR --- */}
      <div
        className="w-full border-b flex flex-wrap items-center justify-between px-4 sm:px-5 py-3 relative z-10 backdrop-blur-xs gap-2"
        style={{ borderColor: `${palette.border}33`, backgroundColor: `${palette.surface}EE` }}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 flex items-center justify-center font-bold text-xs shadow-xs"
            style={{
              backgroundColor: palette.primary,
              color: palette.isDark ? '#000000' : '#FFFFFF',
              borderRadius: getRadius('badge'),
              border: `${surface.borderWidth} solid ${palette.border}`,
              boxShadow: surface.shadow === 'hard-offset' ? `2px 2px 0px ${palette.border}` : undefined,
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
                  backgroundColor: `${palette.primary}15`,
                  borderColor: `${palette.primary}44`,
                  color: palette.primary,
                }}
              >
                {layout.type}
              </span>
            </div>
            <div className="text-[10px] font-mono" style={{ color: palette.textMuted }}>
              {surface.name} • {animation.duration} {animation.name}
            </div>
          </div>
        </div>

        {/* Toolbar Controls: Test Motion & Tabs */}
        <div className="flex items-center gap-2">
          {/* Live Motion Test Button */}
          <button
            onClick={handleTestMotion}
            className={`px-2.5 py-1 text-[11px] font-mono font-bold rounded-lg border cursor-pointer transition-all flex items-center gap-1.5 ${
              isTestingMotion ? 'scale-105 shadow-md ring-2 ring-emerald-500' : 'hover:scale-102'
            }`}
            style={{
              backgroundColor: isTestingMotion ? palette.accent : palette.surface,
              color: isTestingMotion ? '#000000' : palette.text,
              borderColor: palette.border,
              boxShadow: surface.shadow === 'hard-offset' ? `2px 2px 0px ${palette.border}` : undefined,
              borderRadius: getRadius('badge'),
              fontFamily: font.monoFamily,
            }}
            title="Trigger motion physics pulse to see easing curves in action"
          >
            <Play className={`w-3 h-3 ${isTestingMotion ? 'fill-current animate-spin' : ''}`} />
            <span>{isTestingMotion ? 'Simulating Motion...' : 'Test Motion'}</span>
          </button>

          {/* Tab Selector */}
          <div
            className="inline-flex p-0.5 border"
            style={{
              backgroundColor: `${palette.background}88`,
              borderColor: palette.border,
              borderWidth: surface.borderWidth === '0px' ? '1px' : surface.borderWidth,
              borderRadius: getRadius('badge'),
            }}
          >
            {(['overview', 'telemetry', 'actions'] as const).map((tab) => {
              const isSel = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-2.5 py-0.5 text-xs font-semibold capitalize cursor-pointer transition-all ${
                    animation.hoverClass
                  }`}
                  style={{
                    backgroundColor: isSel ? palette.surface : 'transparent',
                    color: isSel ? palette.text : palette.textMuted,
                    borderRadius: getRadius('badge'),
                    boxShadow: isSel && surface.shadow === 'hard-offset' ? `1px 1px 0px ${palette.border}` : undefined,
                  }}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* --- MOCKUP BODY: 5 AUTHENTIC DISTINCT LAYOUT ARCHITECTURES --- */}
      <div className={`p-4 sm:p-6 relative z-10 min-h-[380px]`}>
        {/* =========================================================================
            LAYOUT 1: BENTO BOX MODULAR GRID
            ========================================================================= */}
        {layout.type === 'bento' && (
          <div className={`grid grid-cols-1 sm:grid-cols-3 ${densityGap}`}>
            {/* Bento Hero Card (Spans 2 cols) */}
            <div
              className={`sm:col-span-2 relative ${densityPad} flex flex-col justify-between transition-transform ${
                isTestingMotion ? '-translate-y-1 scale-[1.01]' : ''
              } ${animation.hoverClass}`}
              style={cardStyle}
            >
              {/* Accents: Corner Ticks & Washi Tape */}
              {accents.cornerTicks && (
                <>
                  <span className="absolute top-1 left-1.5 text-[10px] font-mono leading-none opacity-50">┌</span>
                  <span className="absolute top-1 right-1.5 text-[10px] font-mono leading-none opacity-50">┐</span>
                  <span className="absolute bottom-1 left-1.5 text-[10px] font-mono leading-none opacity-50">└</span>
                  <span className="absolute bottom-1 right-1.5 text-[10px] font-mono leading-none opacity-50">┘</span>
                </>
              )}
              {accents.washiTape && (
                <div
                  className="absolute -top-2.5 left-8 w-16 h-4 shadow-xs pointer-events-none opacity-85 -rotate-1"
                  style={{
                    backgroundColor: palette.secondary,
                    border: '1px dashed rgba(0,0,0,0.2)',
                  }}
                />
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider font-bold" style={{ color: palette.textMuted }}>
                    Bento Modular Pipeline
                  </span>
                  <span
                    className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase"
                    style={{
                      backgroundColor: palette.accent,
                      color: palette.isDark ? '#000000' : '#FFFFFF',
                      borderRadius: getRadius('badge'),
                      border: `1px solid ${palette.border}`,
                    }}
                  >
                    READY
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight my-2" style={headingStyle}>
                  2,480.95 <span className="text-sm font-normal font-mono" style={{ color: palette.textMuted }}>OPS/SEC</span>
                </div>
              </div>

              <div className="space-y-2 mt-4">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 font-bold" style={{ color: palette.primary }}>
                    <Activity className="w-4 h-4" />
                    <span>Dynamic Load: {sliderVal}%</span>
                  </div>
                  <span style={{ color: palette.textMuted }}>SLA 99.98%</span>
                </div>

                {/* Progress Meter with Motion */}
                <div className="h-2.5 w-full bg-black/10 overflow-hidden" style={{ borderRadius: getRadius('badge') }}>
                  <div
                    className="h-full"
                    style={{
                      width: isTestingMotion ? '98%' : `${sliderVal}%`,
                      backgroundColor: palette.primary,
                      transition: `width ${animation.duration} ${animation.transitionCurve}`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Bento Quick Control Tile (1 col) */}
            <div
              className={`relative ${densityPad} flex flex-col justify-between space-y-3 transition-transform ${
                isTestingMotion ? 'translate-y-1' : ''
              } ${animation.hoverClass}`}
              style={cardStyle}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase font-bold" style={{ color: palette.textMuted }}>
                  Throughput Dial
                </span>
                <span className="font-mono text-xs font-bold" style={{ color: palette.secondary }}>
                  {sliderVal}%
                </span>
              </div>

              <input
                type="range"
                min="20"
                max="100"
                value={sliderVal}
                onChange={(e) => setSliderVal(Number(e.target.value))}
                className="w-full cursor-pointer accent-[var(--color-primary)]"
              />

              <div
                className="flex items-center justify-between p-2 border"
                style={{
                  borderColor: `${palette.border}44`,
                  backgroundColor: `${palette.background}66`,
                  borderRadius: getRadius('button'),
                }}
              >
                <span className="text-xs font-medium">Auto-Sync</span>
                <button
                  type="button"
                  onClick={() => setToggleActive(!toggleActive)}
                  className={`w-9 h-5 rounded-full relative cursor-pointer transition-colors ${animation.hoverClass}`}
                  style={{
                    backgroundColor: toggleActive ? palette.primary : '#888888',
                    border: `1px solid ${palette.border}`,
                  }}
                >
                  <div
                    className="w-3.5 h-3.5 rounded-full bg-white absolute top-0.5 transition-transform"
                    style={{
                      transform: toggleActive ? 'translateX(17px)' : 'translateX(2px)',
                      transition: `transform ${animation.duration} ${animation.transitionCurve}`,
                    }}
                  />
                </button>
              </div>
            </div>

            {/* Bottom 3-Card Strip */}
            <div
              className={`${densityPad} flex items-center gap-3 transition-transform ${animation.hoverClass}`}
              style={cardStyle}
            >
              <div
                className="w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold text-xs"
                style={{
                  backgroundColor: `${palette.primary}22`,
                  color: palette.primary,
                  border: `1px solid ${palette.primary}`,
                  borderRadius: getRadius('badge'),
                }}
              >
                <Cpu className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-xs">
                <span className="font-bold" style={headingStyle}>
                  Typography
                </span>
                <span className="text-[11px] font-mono truncate" style={{ color: palette.textMuted }}>
                  {font.name}
                </span>
              </div>
            </div>

            <div
              className={`${densityPad} flex items-center gap-3 transition-transform ${animation.hoverClass}`}
              style={cardStyle}
            >
              <div
                className="w-8 h-8 flex-shrink-0 flex items-center justify-center font-bold text-xs"
                style={{
                  backgroundColor: `${palette.secondary}33`,
                  color: palette.isDark ? palette.secondary : '#1C1917',
                  border: `1px solid ${palette.border}`,
                  borderRadius: getRadius('badge'),
                }}
              >
                <HardDrive className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-xs">
                <span className="font-bold" style={headingStyle}>
                  Surface Border
                </span>
                <span className="text-[11px] font-mono truncate" style={{ color: palette.textMuted }}>
                  {surface.borderWidth} • {surface.radius}
                </span>
              </div>
            </div>

            <div
              className={`${densityPad} flex items-center justify-between gap-2 transition-transform ${animation.hoverClass}`}
              style={cardStyle}
            >
              <button
                className={`flex-1 py-2 px-3 text-xs font-bold cursor-pointer flex items-center justify-center gap-1.5 ${
                  animation.hoverClass
                } ${animation.activeClass}`}
                style={{
                  backgroundColor: palette.primary,
                  color: palette.isDark ? '#000000' : '#FFFFFF',
                  borderColor: palette.border,
                  borderWidth: surface.borderWidth,
                  borderRadius: getRadius('button'),
                  boxShadow: getShadow(true),
                  ...headingStyle,
                }}
              >
                <span>Execute</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* =========================================================================
            LAYOUT 2: DENSE TELEMETRY COCKPIT (SCADA / Terminal Mission Control)
            ========================================================================= */}
        {layout.type === 'cockpit' && (
          <div className="space-y-3 font-mono">
            {/* Top Telemetry Strip */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-2.5 border"
              style={{
                backgroundColor: `${palette.surface}DD`,
                borderColor: palette.border,
                borderWidth: surface.borderWidth,
                borderRadius: getRadius('card'),
                boxShadow: getShadow(),
              }}
            >
              {[
                { label: 'CORE_TEMP', val: '41.8°C', stat: 'NORMAL', icon: Activity },
                { label: 'INGEST_RATE', val: '48.2k/s', stat: '+12%', icon: Cpu },
                { label: 'BUS_LATENCY', val: '1.42ms', stat: 'OPTIMAL', icon: Zap },
                { label: 'SYNC_STATE', val: 'LOCKED', stat: '100%', icon: Database },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex flex-col p-2 bg-black/5 rounded">
                    <div className="flex items-center justify-between text-[10px]" style={{ color: palette.textMuted }}>
                      <span className="flex items-center gap-1">
                        <Icon className="w-3 h-3" />
                        {item.label}
                      </span>
                      <span style={{ color: palette.primary }}>{item.stat}</span>
                    </div>
                    <div className="text-base font-bold mt-0.5" style={{ color: palette.text }}>
                      {item.val}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Split Mission Control: Dense Table on Left, Dial & Action on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
              {/* Left: Dense Tabular Log Table */}
              <div
                className="lg:col-span-8 p-3 border overflow-hidden flex flex-col justify-between"
                style={{
                  backgroundColor: palette.surface,
                  borderColor: palette.border,
                  borderWidth: surface.borderWidth,
                  borderRadius: getRadius('card'),
                  boxShadow: getShadow(),
                }}
              >
                <div className="flex items-center justify-between pb-2 border-b text-[11px]" style={{ borderColor: `${palette.border}44` }}>
                  <span className="font-bold uppercase tracking-wider flex items-center gap-1.5" style={{ color: palette.primary }}>
                    <Terminal className="w-3.5 h-3.5" />
                    SYSTEM EVENT BUS LOGS
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                    LIVE STREAM
                  </span>
                </div>

                <div className="divide-y text-[11px] mt-1" style={{ borderColor: `${palette.border}22` }}>
                  {[
                    { time: '14:20:01.04', tag: 'ETH0', msg: 'Kernel payload dispatched', code: '200_OK', col: palette.primary },
                    { time: '14:20:01.88', tag: 'MEM', msg: 'Buffer re-allocated [8192kb]', code: 'SYNC', col: palette.secondary },
                    { time: '14:20:02.12', tag: 'CRYP', msg: 'Handshake accepted by peer', code: 'SECURE', col: palette.accent },
                  ].map((row, idx) => (
                    <div key={idx} className="py-2 flex items-center justify-between gap-2">
                      <span className="text-[10px] opacity-70">{row.time}</span>
                      <span className="font-bold">{row.tag}</span>
                      <span className="truncate flex-1 text-left opacity-90">{row.msg}</span>
                      <span
                        className="px-1.5 py-0.5 text-[9px] font-bold border rounded"
                        style={{
                          color: row.col,
                          borderColor: row.col,
                          backgroundColor: `${row.col}15`,
                        }}
                      >
                        {row.code}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Telemetry Gauge & Master Override */}
              <div
                className="lg:col-span-4 p-3 border flex flex-col justify-between space-y-3"
                style={{
                  backgroundColor: palette.surface,
                  borderColor: palette.border,
                  borderWidth: surface.borderWidth,
                  borderRadius: getRadius('card'),
                  boxShadow: getShadow(),
                }}
              >
                <div className="text-[11px] font-bold uppercase tracking-wider" style={{ color: palette.textMuted }}>
                  TELEMETRY ACTUATOR
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-[11px]">
                    <span>POWER BUS</span>
                    <span className="font-bold" style={{ color: palette.primary }}>{sliderVal} kW</span>
                  </div>
                  <div className="w-full h-3 bg-black/15 overflow-hidden rounded">
                    <div
                      className="h-full"
                      style={{
                        width: isTestingMotion ? '95%' : `${sliderVal}%`,
                        backgroundColor: palette.primary,
                        transition: `width ${animation.duration} ${animation.transitionCurve}`,
                      }}
                    />
                  </div>
                </div>

                <button
                  className={`w-full py-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer transition-transform ${
                    animation.hoverClass
                  } ${animation.activeClass}`}
                  style={{
                    backgroundColor: palette.primary,
                    color: palette.isDark ? '#000000' : '#FFFFFF',
                    border: `${surface.borderWidth} solid ${palette.border}`,
                    borderRadius: getRadius('button'),
                    boxShadow: getShadow(true),
                  }}
                >
                  HALT / OVERRIDE
                </button>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            LAYOUT 3: ASYMMETRIC SWISS TYPOGRAPHIC POSTER
            ========================================================================= */}
        {layout.type === 'asymmetric-swiss' && (
          <div
            className="p-5 sm:p-7 border"
            style={{
              backgroundColor: palette.surface,
              borderColor: palette.border,
              borderWidth: surface.borderWidth,
              borderRadius: getRadius('card'),
              boxShadow: getShadow(),
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Left Column: Bold Asymmetric Headline Manifesto */}
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <div
                    className="w-4 h-4"
                    style={{ backgroundColor: palette.accent || palette.primary }}
                  />
                  <span className="text-[10px] font-mono tracking-widest uppercase font-bold" style={{ color: palette.textMuted }}>
                    ARCHETYPE ZÜRICH • ED. 2026
                  </span>
                </div>

                <h1
                  className="text-3xl sm:text-5xl font-black leading-tight tracking-tight uppercase"
                  style={headingStyle}
                >
                  FORM STRICTLY FOLLOWS SPECIFICATION
                </h1>

                <p className="text-xs sm:text-sm leading-relaxed max-w-md opacity-85">
                  Disciplined asymmetric grid structure with rigid vertical visual guidelines, stark contrast, and zero redundant decorative ornamentation.
                </p>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider cursor-pointer border ${
                      animation.hoverClass
                    } ${animation.activeClass}`}
                    style={{
                      backgroundColor: palette.primary,
                      color: palette.isDark ? '#000000' : '#FFFFFF',
                      borderColor: palette.border,
                      borderWidth: surface.borderWidth,
                      borderRadius: getRadius('button'),
                      boxShadow: getShadow(true),
                    }}
                  >
                    READ PROTOCOL
                  </button>

                  <span className="text-xs font-mono font-bold" style={{ color: palette.textMuted }}>
                    SEC. 04 / § B
                  </span>
                </div>
              </div>

              {/* Right Column: Numbered Swiss Guidelines */}
              <div
                className="md:col-span-5 md:border-l md:pl-6 space-y-4"
                style={{ borderColor: `${palette.border}44` }}
              >
                {[
                  { num: '01', title: 'MATHEMATICAL HARMONY', desc: 'Spacing adheres strictly to 8-point base grids.' },
                  { num: '02', title: 'ASYMMETRIC WEIGHT', desc: 'Visual gravity is distributed through scale and position.' },
                  { num: '03', title: 'MONOCHROME ACCENT', desc: 'Color pop is reserved strictly for focal hierarchy.' },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1 pb-3 border-b last:border-b-0" style={{ borderColor: `${palette.border}22` }}>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold" style={{ color: palette.primary }}>
                        {item.num}.
                      </span>
                      <span className="text-xs font-bold uppercase tracking-tight" style={headingStyle}>
                        {item.title}
                      </span>
                    </div>
                    <p className="text-[11px] leading-snug" style={{ color: palette.textMuted }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            LAYOUT 4: MINIMALIST ISLAND DOCK
            ========================================================================= */}
        {layout.type === 'minimal-dock' && (
          <div className="py-6 sm:py-10 px-2 flex flex-col items-center justify-center space-y-6">
            {/* Centered Floating Hero Island Card */}
            <div
              className={`w-full max-w-md ${densityPad} border text-center space-y-4 transition-transform ${
                isTestingMotion ? 'scale-105' : ''
              } ${animation.hoverClass}`}
              style={{
                ...cardStyle,
                boxShadow: surface.shadow === 'none' ? 'none' : '0 12px 36px rgba(0,0,0,0.12)',
              }}
            >
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold" style={{ backgroundColor: `${palette.primary}18`, color: palette.primary }}>
                <Sparkles className="w-3 h-3" />
                <span>Single-Task Focus Mode</span>
              </div>

              <div className="space-y-1">
                <h2 className="text-2xl font-bold tracking-tight" style={headingStyle}>
                  Kyoto Engine v4.2
                </h2>
                <p className="text-xs max-w-xs mx-auto" style={{ color: palette.textMuted }}>
                  Distraction-free canvas with generous negative space and tranquil spatial elevation.
                </p>
              </div>

              {/* Progress Ring / Bar */}
              <div className="pt-2 space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span>Compilation Status</span>
                  <span className="font-bold" style={{ color: palette.primary }}>94.2%</span>
                </div>
                <div className="w-full h-2 bg-black/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: isTestingMotion ? '100%' : '94.2%',
                      backgroundColor: palette.primary,
                      transition: `width ${animation.duration} ${animation.transitionCurve}`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Floating Island Action Dock */}
            <div
              className={`inline-flex items-center gap-2 p-2 border shadow-lg ${animation.hoverClass}`}
              style={{
                backgroundColor: palette.surface,
                borderColor: palette.border,
                borderWidth: surface.borderWidth,
                borderRadius: getRadius('dock'),
              }}
            >
              {[
                { icon: Play, label: 'Run' },
                { icon: Sliders, label: 'Tune' },
                { icon: RotateCcw, label: 'Reset' },
                { icon: Maximize2, label: 'Expand' },
              ].map((act, i) => {
                const Icon = act.icon;
                return (
                  <button
                    key={i}
                    className={`p-2.5 rounded-lg cursor-pointer transition-transform ${
                      animation.hoverClass
                    } ${animation.activeClass}`}
                    style={{
                      backgroundColor: i === 0 ? palette.primary : `${palette.background}88`,
                      color: i === 0 ? (palette.isDark ? '#000000' : '#FFFFFF') : palette.text,
                      border: `1px solid ${palette.border}44`,
                    }}
                    title={act.label}
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* =========================================================================
            LAYOUT 5: ACTIVITY STREAM & FEED
            ========================================================================= */}
        {layout.type === 'card-stream' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Left Stream: Connected Chronological Activity Feed */}
            <div className="md:col-span-8 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider font-bold mb-2 flex items-center gap-1.5" style={{ color: palette.textMuted }}>
                <Clock className="w-3.5 h-3.5" />
                <span>CHRONOLOGICAL ACTIVITY STREAM</span>
              </div>

              {[
                { time: '2m ago', title: 'Synthesized Design Spec v4', desc: 'Exported Tailwind theme tokens & CSS variables.', icon: CheckCircle2, status: 'DONE' },
                { time: '14m ago', title: 'Bento Grid Re-anchored', desc: 'Adjusted vertical margin flow for compact density.', icon: Compass, status: 'SYNCED' },
                { time: '1h ago', title: 'Color Palette Contrast Checked', desc: 'WCAG AAA verified on surface text contrast.', icon: Globe, status: 'VERIFIED' },
              ].map((ev, idx) => {
                const Icon = ev.icon;
                return (
                  <div
                    key={idx}
                    className={`relative ${densityPad} border flex items-start gap-3 transition-transform ${
                      animation.hoverClass
                    }`}
                    style={cardStyle}
                  >
                    {/* Activity Indicator Pin */}
                    <div
                      className="w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center shadow-xs"
                      style={{
                        backgroundColor: `${palette.primary}25`,
                        color: palette.primary,
                        border: `1px solid ${palette.primary}`,
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="flex-1 space-y-0.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold" style={headingStyle}>
                          {ev.title}
                        </span>
                        <span className="text-[10px] font-mono opacity-60">{ev.time}</span>
                      </div>
                      <p className="text-[11px] leading-relaxed" style={{ color: palette.textMuted }}>
                        {ev.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Rail: Quick Telemetry & Stats */}
            <div className="md:col-span-4 space-y-3">
              <div
                className={`p-4 border space-y-3 ${animation.hoverClass}`}
                style={cardStyle}
              >
                <div className="text-xs font-bold uppercase tracking-wider" style={{ color: palette.textMuted }}>
                  STREAM SUMMARY
                </div>
                <div className="text-2xl font-black" style={headingStyle}>
                  99.9%
                </div>
                <p className="text-[11px]" style={{ color: palette.textMuted }}>
                  All stream pipelines are responding under 4ms latency.
                </p>

                <button
                  className={`w-full py-2 text-xs font-bold rounded cursor-pointer transition-transform ${
                    animation.hoverClass
                  } ${animation.activeClass}`}
                  style={{
                    backgroundColor: palette.secondary,
                    color: palette.isDark ? '#000000' : '#1C1917',
                    border: `1px solid ${palette.border}`,
                    borderRadius: getRadius('button'),
                  }}
                >
                  View Full Audit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* --- MOCKUP FOOTER TELEMETRY STRIP --- */}
      <div
        className="px-5 py-2.5 border-t flex flex-wrap items-center justify-between text-[11px] font-mono relative z-10"
        style={{
          borderColor: `${palette.border}22`,
          backgroundColor: `${palette.surface}88`,
          color: palette.textMuted,
        }}
      >
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full inline-block animate-pulse"
              style={{ backgroundColor: palette.primary }}
            />
            {palette.id}
          </span>
          <span>•</span>
          <span>LAYOUT: {layout.type.toUpperCase()}</span>
          <span>•</span>
          <span>SHADOW: {surface.shadow}</span>
        </div>

        <div className="flex items-center gap-2">
          <span>MOTION: {animation.duration} {animation.name}</span>
        </div>
      </div>
    </div>
  );
}
