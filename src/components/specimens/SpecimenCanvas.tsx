'use client';

import React from 'react';
import { ThemeTokens, ViewportConfig } from '../../types/theme';
import { AccentRenderer } from './AccentRenderer';
import { UnifiedCockpit } from './UnifiedCockpit';
import { ComponentBreakdown } from './ComponentBreakdown';

interface SpecimenCanvasProps {
  tokens: ThemeTokens;
  viewport: ViewportConfig;
  viewMode: 'unified' | 'breakdown';
}

export function SpecimenCanvas({ tokens, viewport, viewMode }: SpecimenCanvasProps) {
  // Determine frame width
  const frameWidthMap: Record<ViewportConfig['mode'], string> = {
    desktop: 'w-full max-w-[1280px]',
    tablet: 'w-[768px]',
    mobile: 'w-[375px]',
  };

  return (
    <div className="w-full flex-1 flex flex-col items-center justify-start overflow-y-auto overflow-x-hidden p-3 sm:p-6 bg-neutral-900/40 relative">
      {/* Device Frame Wrapper */}
      <div
        className={`transition-all duration-300 relative shadow-2xl overflow-hidden flex flex-col ${
          frameWidthMap[viewport.mode]
        } ${
          viewport.mode !== 'desktop'
            ? 'border-4 border-neutral-700 rounded-3xl my-auto'
            : 'rounded-xl border border-neutral-800'
        }`}
        style={{
          transform: `scale(${viewport.zoom})`,
          transformOrigin: 'top center',
          minHeight: viewport.mode === 'mobile' ? '780px' : viewport.mode === 'tablet' ? '900px' : '720px',
        }}
      >
        {/* Device Frame Header (for Tablet and Mobile) */}
        {viewport.mode !== 'desktop' && (
          <div className="w-full bg-neutral-800 text-neutral-400 px-4 py-2 flex items-center justify-between text-[11px] font-mono border-b border-neutral-700 select-none">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-600 inline-block" />
              <span>{viewport.mode === 'mobile' ? '375 × 812 (iPhone Frame)' : '768 × 1024 (iPad Frame)'}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>100%</span>
              <span className="w-3 h-2 border border-neutral-500 rounded-xs inline-block" />
            </div>
          </div>
        )}

        {/* Specimen Container with Injected CSS Variables and Accents */}
        <div
          className="relative w-full flex-1 flex flex-col"
          style={
            {
              '--color-primary': tokens.palette.primary,
              '--color-primary-foreground': tokens.palette.primaryForeground,
              '--color-secondary': tokens.palette.secondary,
              '--color-secondary-foreground': tokens.palette.secondaryForeground,
              '--color-accent': tokens.palette.accent,
              '--color-accent-foreground': tokens.palette.accentForeground,
              '--color-background': tokens.palette.background,
              '--color-surface': tokens.palette.cardSurface,
              '--color-border': tokens.palette.border,
              '--color-text-primary': tokens.palette.textPrimary,
              '--color-text-muted': tokens.palette.textMuted,
            } as React.CSSProperties
          }
        >
          {/* Decorative Accents Overlay */}
          <AccentRenderer
            accents={tokens.accents}
            borderColor={tokens.palette.border}
            accentColor={tokens.palette.accent}
          />

          {/* Render Active Specimen Mode */}
          {viewMode === 'unified' ? (
            <UnifiedCockpit tokens={tokens} />
          ) : (
            <ComponentBreakdown tokens={tokens} />
          )}
        </div>
      </div>
    </div>
  );
}
