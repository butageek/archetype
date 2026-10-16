'use client';

import React, { useState } from 'react';
import {
  Activity,
  ArrowRight,
  Cpu,
  HardDrive,
  Zap,
} from 'lucide-react';
import { DesignComposition } from '../types/design';

interface LiveDesignMockupProps {
  composition: DesignComposition;
}

export function LiveDesignMockup({ composition }: LiveDesignMockupProps) {
  const { palette, layout, theme, style, font, animation } = composition;

  const [activeTab, setActiveTab] = useState<'overview' | 'telemetry' | 'actions'>('overview');
  const [toggleActive, setToggleActive] = useState<boolean>(true);
  const [sliderVal, setSliderVal] = useState<number>(84);

  // Derive corner radius
  const getRadius = (type: 'card' | 'button' | 'badge' = 'card') => {
    if (style.radius === 'sharp') return '0px';
    if (type === 'badge' && style.radius === 'pill') return '9999px';
    if (style.radius === 'pill') return type === 'card' ? '18px' : '9999px';
    if (style.radius === 'rounded') return type === 'card' ? '14px' : '8px';
    return '4px'; // subtle
  };

  // Derive shadow
  const getShadow = (isInteractive = false) => {
    if (style.shadow === 'none') return 'none';
    if (style.shadow === 'hard-offset') {
      return isInteractive
        ? `3px 3px 0px ${palette.isDark ? '#000000' : palette.border}`
        : `4px 4px 0px ${palette.isDark ? '#000000' : palette.border}`;
    }
    if (style.shadow === 'glowing-neon') {
      return `0 0 16px ${palette.primary}55, 0 0 2px ${palette.primary}`;
    }
    if (style.shadow === 'skeuomorphic') {
      return '0 2px 5px rgba(0,0,0,0.06), 0 8px 18px rgba(0,0,0,0.1)';
    }
    return '0 4px 14px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.05)';
  };

  // Base card styling
  const cardStyle: React.CSSProperties = {
    backgroundColor: palette.surface,
    color: palette.text,
    borderColor: palette.border,
    borderWidth: style.borderWidth,
    borderStyle: style.borderStyle,
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

  // Density spacing
  const pad = layout.density === 'compact' ? 'p-3' : layout.density === 'spacious' ? 'p-6' : 'p-4';

  return (
    <div
      className="w-full rounded-2xl border transition-all duration-300 relative overflow-hidden shadow-xl"
      style={{
        backgroundColor: palette.background,
        color: palette.text,
        borderColor: palette.border,
        borderWidth: style.borderWidth,
        fontFamily: font.bodyFamily,
      }}
    >
      {/* Decorative Accents */}
      {style.accents.scanlines && (
        <div
          className="pointer-events-none absolute inset-0 z-20 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.75) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
            backgroundSize: '100% 3px, 6px 100%',
          }}
        />
      )}

      {style.accents.dotGrid && (
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(${palette.border} 1px, transparent 1px)`,
            backgroundSize: '16px 16px',
          }}
        />
      )}

      {style.accents.noiseGrain && (
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-10 mix-blend-multiply"
          style={{
            backgroundImage: `radial-gradient(rgba(0,0,0,0.15) 15%, transparent 16%), radial-gradient(rgba(0,0,0,0.1) 15%, transparent 16%)`,
            backgroundSize: '4px 4px',
          }}
        />
      )}

      {/* CAD Precision Crosshairs */}
      {style.accents.crosshairs && (
        <div className="pointer-events-none absolute top-3 right-3 text-[9px] font-mono tracking-widest z-10" style={{ color: palette.primary }}>
          [CAD-GRID: 0.125mm | ∠45°]
        </div>
      )}

      {/* Header Bar */}
      <div
        className="w-full border-b flex items-center justify-between px-5 py-3.5 relative z-10 backdrop-blur-xs"
        style={{ borderColor: `${palette.border}33`, backgroundColor: `${palette.surface}EE` }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-7 h-7 flex items-center justify-center font-bold text-xs"
            style={{
              backgroundColor: palette.primary,
              color: palette.isDark ? '#000000' : '#FFFFFF',
              borderRadius: getRadius('badge'),
              border: `${style.borderWidth} solid ${palette.border}`,
              boxShadow: style.shadow === 'hard-offset' ? `2px 2px 0px ${palette.border}` : undefined,
            }}
          >
            <Zap className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="font-bold text-sm tracking-tight" style={headingStyle}>
              {palette.name.toUpperCase()}
            </span>
            <span className="text-[10px] ml-2 font-mono" style={{ color: palette.textMuted }}>
              [{theme.name} • {layout.name}]
            </span>
          </div>
        </div>

        {/* Tab switch */}
        <div
          className="inline-flex p-0.5 border"
          style={{
            backgroundColor: `${palette.background}88`,
            borderColor: palette.border,
            borderWidth: style.borderWidth === '0px' ? '1px' : style.borderWidth,
            borderRadius: getRadius('badge'),
          }}
        >
          {(['overview', 'telemetry', 'actions'] as const).map((tab) => {
            const isSel = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-2.5 py-0.5 text-xs font-semibold capitalize cursor-pointer transition-all"
                style={{
                  backgroundColor: isSel ? palette.surface : 'transparent',
                  color: isSel ? palette.text : palette.textMuted,
                  borderRadius: getRadius('badge'),
                  boxShadow: isSel && style.shadow === 'hard-offset' ? `1px 1px 0px ${palette.border}` : undefined,
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mockup Body: Layout Specific Variations */}
      <div className={`p-5 sm:p-7 relative z-10 space-y-4`}>
        {/* Row 1: Bento / Telemetry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Card A: Hero Metric */}
          <div
            className={`sm:col-span-2 relative ${pad} flex flex-col justify-between`}
            style={cardStyle}
          >
            {/* Washi tape accent if active */}
            {style.accents.washiTape && (
              <div
                className="absolute -top-2.5 left-12 w-16 h-4 shadow-xs pointer-events-none opacity-85 -rotate-1"
                style={{
                  backgroundColor: palette.secondary,
                  border: '1px dashed rgba(0,0,0,0.15)',
                }}
              />
            )}

            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider font-bold" style={{ color: palette.textMuted }}>
                Active Production Throughput
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
                ONLINE
              </span>
            </div>

            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight my-2" style={headingStyle}>
              1,842.60 <span className="text-sm font-normal font-mono" style={{ color: palette.textMuted }}>TX/SEC</span>
            </div>

            <div className="flex items-center justify-between pt-2 text-xs">
              <div className="flex items-center gap-1.5 font-bold" style={{ color: palette.primary }}>
                <Activity className="w-4 h-4" />
                <span>+24.8% vs Baseline</span>
              </div>
              <span style={{ color: palette.textMuted }}>Target SLA: 99.99%</span>
            </div>

            {/* Segmented meter bar */}
            <div className="mt-3 h-2 w-full bg-black/10 overflow-hidden" style={{ borderRadius: getRadius('badge') }}>
              <div
                className="h-full transition-all duration-300"
                style={{
                  width: `${sliderVal}%`,
                  backgroundColor: palette.primary,
                }}
              />
            </div>
          </div>

          {/* Card B: Quick Control Tile */}
          <div className={`relative ${pad} flex flex-col justify-between space-y-3`} style={cardStyle}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase font-bold" style={{ color: palette.textMuted }}>
                Dynamic Threshold
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

            {/* Toggle Switch */}
            <div
              className="flex items-center justify-between p-2 border"
              style={{
                borderColor: `${palette.border}44`,
                backgroundColor: `${palette.background}66`,
                borderRadius: getRadius('button'),
              }}
            >
              <span className="text-xs font-medium">Auto-Scale Guard</span>
              <button
                type="button"
                onClick={() => setToggleActive(!toggleActive)}
                className="w-9 h-5 rounded-full relative cursor-pointer transition-colors"
                style={{
                  backgroundColor: toggleActive ? palette.primary : '#999999',
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

        {/* Row 2: Secondary Content and Interactive CTA Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Card C: Architecture Spec */}
          <div className={`${pad} flex items-center gap-3`} style={cardStyle}>
            <div
              className="w-9 h-9 flex-shrink-0 flex items-center justify-center font-bold text-xs"
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
                Model Engine
              </span>
              <span className="text-[11px] font-mono" style={{ color: palette.textMuted }}>
                {font.name}
              </span>
            </div>
          </div>

          {/* Card D: Memory Allocation */}
          <div className={`${pad} flex items-center gap-3`} style={cardStyle}>
            <div
              className="w-9 h-9 flex-shrink-0 flex items-center justify-center font-bold text-xs"
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
                Layout Architecture
              </span>
              <span className="text-[11px] font-mono" style={{ color: palette.textMuted }}>
                {layout.type.toUpperCase()} / {layout.density}
              </span>
            </div>
          </div>

          {/* Card E: Actions */}
          <div className={`${pad} flex items-center justify-between gap-2`} style={cardStyle}>
            <button
              className="flex-1 py-2 px-3 text-xs font-bold cursor-pointer transition-transform active:translate-y-0.5 flex items-center justify-center gap-1.5"
              style={{
                backgroundColor: palette.primary,
                color: palette.isDark ? '#000000' : '#FFFFFF',
                borderColor: palette.border,
                borderWidth: style.borderWidth,
                borderRadius: getRadius('button'),
                boxShadow: getShadow(true),
                ...headingStyle,
              }}
            >
              <span>Execute</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              className="py-2 px-3 text-xs font-semibold cursor-pointer transition-transform active:translate-y-0.5"
              style={{
                backgroundColor: palette.secondary,
                color: palette.isDark ? '#000000' : '#1C1917',
                borderColor: palette.border,
                borderWidth: style.borderWidth,
                borderRadius: getRadius('button'),
                boxShadow: style.shadow === 'hard-offset' ? `2px 2px 0px ${palette.border}` : undefined,
              }}
            >
              Inspect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
