'use client';

import React from 'react';
import {
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  Info,
  Layers,
  Sliders,
  Sparkles,
  Zap,
} from 'lucide-react';
import { ThemeTokens } from '../../types/theme';
import { CornerTicks } from './AccentRenderer';

interface ComponentBreakdownProps {
  tokens: ThemeTokens;
}

export function ComponentBreakdown({ tokens }: ComponentBreakdownProps) {
  const { palette, density, radius, shadow, borderWidth, typography, accents } = tokens;
  const cardPad = density === 'compact' ? 'p-3' : density === 'spacious' ? 'p-6' : 'p-4';

  const getRadius = (type: 'card' | 'button' | 'badge' | 'input' = 'card') => {
    if (radius === 'sharp') return '0px';
    if (type === 'badge' && radius === 'pill') return '9999px';
    if (radius === 'pill') return type === 'card' ? '16px' : '9999px';
    if (radius === 'rounded') return type === 'card' ? '12px' : '8px';
    return '4px';
  };

  const getShadow = (isInteractive = false) => {
    if (shadow === 'none') return 'none';
    if (shadow === 'hard-offset') {
      return isInteractive
        ? `3px 3px 0px ${tokens.isDark ? '#000000' : palette.border}`
        : `4px 4px 0px ${tokens.isDark ? '#000000' : palette.border}`;
    }
    if (shadow === 'layered-hard') {
      return `3px 3px 0px #000, 6px 6px 0px ${palette.primary}`;
    }
    if (shadow === 'glowing-neon') {
      return `0 0 14px ${palette.primary}4D, 0 0 2px ${palette.primary}`;
    }
    if (shadow === 'skeuomorphic') {
      return '0 2px 4px rgba(0,0,0,0.06), 0 8px 18px rgba(0,0,0,0.09)';
    }
    return '0 4px 12px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.04)';
  };

  const headerFont: React.CSSProperties = {
    fontFamily: typography.headingFamily,
    letterSpacing: typography.letterSpacing === 'wide' ? '0.06em' : typography.letterSpacing === 'tight' ? '-0.025em' : 'normal',
    textTransform: typography.headingTransform,
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: palette.cardSurface,
    color: palette.textPrimary,
    borderColor: palette.border,
    borderWidth,
    borderStyle: tokens.borderStyle,
    borderRadius: getRadius('card'),
    boxShadow: getShadow(),
    fontFamily: typography.bodyFamily,
  };

  return (
    <div
      className="p-6 space-y-8 min-h-full transition-colors duration-150"
      style={{
        backgroundColor: palette.background,
        color: palette.textPrimary,
        fontFamily: typography.bodyFamily,
      }}
    >
      {/* SECTION 1: Buttons Matrix */}
      <section className="space-y-3">
        <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: palette.borderMuted }}>
          <h2 className="text-base font-bold flex items-center gap-2" style={headerFont}>
            <Zap className="w-4 h-4" style={{ color: palette.primary }} />
            01. Interactive Buttons & CTA States
          </h2>
          <span className="text-xs font-mono" style={{ color: palette.textMuted }}>
            Radius: {radius} | Shadow: {shadow}
          </span>
        </div>

        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 relative ${cardPad}`} style={cardStyle}>
          {accents.cornerTicks && <CornerTicks borderColor={palette.border} />}
          {/* Primary */}
          <button
            className="flex items-center justify-center gap-1.5 py-2.5 px-4 font-bold text-xs cursor-pointer transition-transform active:translate-y-0.5 select-none"
            style={{
              backgroundColor: palette.primary,
              color: palette.primaryForeground,
              borderColor: palette.border,
              borderWidth,
              borderRadius: getRadius('button'),
              boxShadow: getShadow(true),
              ...headerFont,
            }}
          >
            <span>Primary CTA</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Secondary */}
          <button
            className="flex items-center justify-center gap-1.5 py-2.5 px-4 font-semibold text-xs cursor-pointer transition-transform active:translate-y-0.5 select-none"
            style={{
              backgroundColor: palette.secondary,
              color: palette.secondaryForeground,
              borderColor: palette.border,
              borderWidth,
              borderRadius: getRadius('button'),
              boxShadow: shadow === 'hard-offset' ? `2px 2px 0px ${palette.border}` : undefined,
            }}
          >
            <span>Secondary Action</span>
          </button>

          {/* Accent Pop */}
          <button
            className="flex items-center justify-center gap-1.5 py-2.5 px-4 font-semibold text-xs cursor-pointer transition-transform active:translate-y-0.5 select-none"
            style={{
              backgroundColor: palette.accent,
              color: palette.accentForeground,
              borderColor: palette.border,
              borderWidth,
              borderRadius: getRadius('button'),
              boxShadow: shadow === 'hard-offset' ? `2px 2px 0px ${palette.border}` : undefined,
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Accent Highlight</span>
          </button>

          {/* Outline / Ghost */}
          <button
            className="flex items-center justify-center gap-1.5 py-2.5 px-4 font-semibold text-xs cursor-pointer transition-transform active:translate-y-0.5 select-none"
            style={{
              backgroundColor: 'transparent',
              color: palette.textPrimary,
              borderColor: palette.border,
              borderWidth: borderWidth === '0px' ? '1px' : borderWidth,
              borderRadius: getRadius('button'),
            }}
          >
            <span>Ghost Outline</span>
          </button>
        </div>
      </section>

      {/* SECTION 2: Badges, Pills & Status Indicators */}
      <section className="space-y-3">
        <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: palette.borderMuted }}>
          <h2 className="text-base font-bold flex items-center gap-2" style={headerFont}>
            <Layers className="w-4 h-4" style={{ color: palette.secondary }} />
            02. Badges, Indicators & Pills
          </h2>
          <span className="text-xs font-mono" style={{ color: palette.textMuted }}>
            Semantic status tokens
          </span>
        </div>

        <div className={`flex flex-wrap gap-2.5 relative items-center ${cardPad}`} style={cardStyle}>
          {accents.cornerTicks && <CornerTicks borderColor={palette.border} />}
          <span
            className="px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5"
            style={{
              backgroundColor: `${palette.primary}25`,
              color: palette.primary,
              border: `1px solid ${palette.primary}`,
              borderRadius: getRadius('badge'),
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: palette.primary }} />
            Active Node
          </span>

          <span
            className="px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5"
            style={{
              backgroundColor: `${palette.success}25`,
              color: palette.success,
              border: `1px solid ${palette.success}`,
              borderRadius: getRadius('badge'),
            }}
          >
            <CheckCircle className="w-3 h-3" />
            System Healthy
          </span>

          <span
            className="px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5"
            style={{
              backgroundColor: `${palette.warning}25`,
              color: palette.warning,
              border: `1px solid ${palette.warning}`,
              borderRadius: getRadius('badge'),
            }}
          >
            <AlertTriangle className="w-3 h-3" />
            High Load
          </span>

          <span
            className="px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5"
            style={{
              backgroundColor: `${palette.danger}25`,
              color: palette.danger,
              border: `1px solid ${palette.danger}`,
              borderRadius: getRadius('badge'),
            }}
          >
            <AlertCircle className="w-3 h-3" />
            Fatal Exiting
          </span>

          <span
            className="px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider"
            style={{
              backgroundColor: palette.cardSurfaceMuted,
              color: palette.textMuted,
              border: `1px solid ${palette.borderMuted}`,
              borderRadius: getRadius('badge'),
            }}
          >
            DRAFT SPEC
          </span>
        </div>
      </section>

      {/* SECTION 3: Form Fields & Inputs */}
      <section className="space-y-3">
        <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: palette.borderMuted }}>
          <h2 className="text-base font-bold flex items-center gap-2" style={headerFont}>
            <Sliders className="w-4 h-4" style={{ color: palette.accent }} />
            03. Form Inputs & Control Primitives
          </h2>
          <span className="text-xs font-mono" style={{ color: palette.textMuted }}>
            Border: {borderWidth} {tokens.borderStyle}
          </span>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 relative ${cardPad}`} style={cardStyle}>
          {accents.cornerTicks && <CornerTicks borderColor={palette.border} />}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: palette.textMuted }}>
              Model Identifier
            </label>
            <input
              type="text"
              defaultValue="gemini-3.8-flash-v4"
              className="px-3 py-2 text-xs font-mono outline-none"
              style={{
                backgroundColor: palette.cardSurfaceMuted,
                color: palette.textPrimary,
                borderColor: palette.border,
                borderWidth: borderWidth === '0px' ? '1px' : borderWidth,
                borderRadius: getRadius('input'),
              }}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: palette.textMuted }}>
              Target Architecture
            </label>
            <select
              defaultValue="transformer"
              className="px-3 py-2 text-xs font-mono outline-none"
              style={{
                backgroundColor: palette.cardSurfaceMuted,
                color: palette.textPrimary,
                borderColor: palette.border,
                borderWidth: borderWidth === '0px' ? '1px' : borderWidth,
                borderRadius: getRadius('input'),
              }}
            >
              <option value="transformer">Transformer (Attention-Head)</option>
              <option value="mamba">Mamba (State Space)</option>
              <option value="diffusion">Latent Diffusion V3</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: palette.textMuted }}>
              Batch Concurrency
            </label>
            <input
              type="number"
              defaultValue="64"
              className="px-3 py-2 text-xs font-mono outline-none"
              style={{
                backgroundColor: palette.cardSurfaceMuted,
                color: palette.textPrimary,
                borderColor: palette.border,
                borderWidth: borderWidth === '0px' ? '1px' : borderWidth,
                borderRadius: getRadius('input'),
              }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: Alerts & Callout Banners */}
      <section className="space-y-3">
        <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: palette.borderMuted }}>
          <h2 className="text-base font-bold flex items-center gap-2" style={headerFont}>
            <Info className="w-4 h-4" style={{ color: palette.info }} />
            04. Alert Callouts & Toast Notifications
          </h2>
          <span className="text-xs font-mono" style={{ color: palette.textMuted }}>
            Surface contrast
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Info Banner */}
          <div
            className="p-4 flex gap-3 relative"
            style={{
              backgroundColor: palette.cardSurface,
              color: palette.textPrimary,
              borderLeft: `4px solid ${palette.primary}`,
              borderTop: `${borderWidth} solid ${palette.border}`,
              borderRight: `${borderWidth} solid ${palette.border}`,
              borderBottom: `${borderWidth} solid ${palette.border}`,
              borderRadius: getRadius('card'),
              boxShadow: getShadow(),
            }}
          >
            <Info className="w-5 h-5 flex-shrink-0" style={{ color: palette.primary }} />
            <div className="text-xs">
              <div className="font-bold mb-0.5" style={headerFont}>
                Synthesizer Architecture Online
              </div>
              <div style={{ color: palette.textMuted }}>
                Tokens and decorative accent parameters are verified across 16 semantic keys with zero FOUC latency.
              </div>
            </div>
          </div>

          {/* Warning Banner */}
          <div
            className="p-4 flex gap-3 relative"
            style={{
              backgroundColor: palette.cardSurface,
              color: palette.textPrimary,
              borderLeft: `4px solid ${palette.warning}`,
              borderTop: `${borderWidth} solid ${palette.border}`,
              borderRight: `${borderWidth} solid ${palette.border}`,
              borderBottom: `${borderWidth} solid ${palette.border}`,
              borderRadius: getRadius('card'),
              boxShadow: getShadow(),
            }}
          >
            <AlertTriangle className="w-5 h-5 flex-shrink-0" style={{ color: palette.warning }} />
            <div className="text-xs">
              <div className="font-bold mb-0.5" style={headerFont}>
                WCAG Contrast Check Advised
              </div>
              <div style={{ color: palette.textMuted }}>
                Check the Visual Tweaker sidebar to ensure your foreground-to-background luminance meets AA / AAA standards.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
