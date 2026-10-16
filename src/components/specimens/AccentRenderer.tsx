'use client';

import React from 'react';
import { DecorativeAccents } from '../../types/theme';

interface AccentRendererProps {
  accents: DecorativeAccents;
  borderColor: string;
  accentColor: string;
}

export function AccentRenderer({ accents, borderColor, accentColor }: AccentRendererProps) {
  return (
    <>
      {/* 1. CRT Scanlines */}
      {accents.scanlines && (
        <div
          className="pointer-events-none absolute inset-0 z-30 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.75) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
            backgroundSize: '100% 3px, 6px 100%',
          }}
        />
      )}

      {/* 2. Dot Grid Texture */}
      {accents.dotGrid && (
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(${borderColor} 1px, transparent 1px)`,
            backgroundSize: '16px 16px',
          }}
        />
      )}

      {/* 3. Paper Texture & Noise Grain */}
      {(accents.paperTexture || accents.noiseGrain) && (
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-10 mix-blend-multiply"
          style={{
            backgroundImage: `radial-gradient(rgba(0,0,0,0.15) 15%, transparent 16%), radial-gradient(rgba(0,0,0,0.1) 15%, transparent 16%)`,
            backgroundSize: '4px 4px',
            backgroundPosition: '0 0, 2px 2px',
          }}
        />
      )}

      {/* 4. Drafting Crosshairs in corners */}
      {accents.draftingCrosshairs && (
        <div className="pointer-events-none absolute inset-0 z-10">
          {/* Top-Left Crosshair */}
          <div className="absolute top-3 left-3 flex items-center justify-center w-6 h-6">
            <div className="absolute w-full h-[1px]" style={{ backgroundColor: borderColor, opacity: 0.5 }} />
            <div className="absolute h-full w-[1px]" style={{ backgroundColor: borderColor, opacity: 0.5 }} />
            <div className="w-2 h-2 rounded-full border" style={{ borderColor: accentColor }} />
            <span className="absolute -bottom-3 left-3 text-[8px] font-mono" style={{ color: borderColor }}>
              X:000 Y:000
            </span>
          </div>

          {/* Top-Right Crosshair */}
          <div className="absolute top-3 right-3 flex items-center justify-center w-6 h-6">
            <div className="absolute w-full h-[1px]" style={{ backgroundColor: borderColor, opacity: 0.5 }} />
            <div className="absolute h-full w-[1px]" style={{ backgroundColor: borderColor, opacity: 0.5 }} />
            <div className="w-2 h-2 rounded-full border" style={{ borderColor: accentColor }} />
          </div>

          {/* Bottom-Right Coordinate */}
          <div className="absolute bottom-3 right-3 text-[8px] font-mono tracking-widest" style={{ color: borderColor }}>
            GRID [0.0125mm] REF: SEC-A
          </div>
        </div>
      )}

      {/* 5. Metric Rulers along perimeter */}
      {accents.metricRulers && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-3 border-b flex justify-between px-6 text-[8px] font-mono items-center z-10" style={{ borderColor, opacity: 0.4, color: borderColor }}>
          <span>| 0.0</span>
          <span>| 100.0</span>
          <span>| 250.0</span>
          <span>| 500.0</span>
          <span>| 750.0</span>
          <span>| 1000.0</span>
          <span>| 1200.0 mm</span>
        </div>
      )}
    </>
  );
}

// Corner Ticks Component for Card Containers
export function CornerTicks({ borderColor }: { borderColor: string }) {
  return (
    <>
      <span className="pointer-events-none absolute -top-1 -left-1 text-[10px] font-mono leading-none select-none" style={{ color: borderColor }}>
        ┌
      </span>
      <span className="pointer-events-none absolute -top-1 -right-1 text-[10px] font-mono leading-none select-none" style={{ color: borderColor }}>
        ┐
      </span>
      <span className="pointer-events-none absolute -bottom-1 -left-1 text-[10px] font-mono leading-none select-none" style={{ color: borderColor }}>
        └
      </span>
      <span className="pointer-events-none absolute -bottom-1 -right-1 text-[10px] font-mono leading-none select-none" style={{ color: borderColor }}>
        ┘
      </span>
    </>
  );
}

// Washi Tape Header Accent for Sticky/Pinboard Cards
export function WashiTape({ color = '#DDA15E' }: { color?: string }) {
  return (
    <div
      className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 shadow-sm transform -rotate-1 z-20 pointer-events-none opacity-85"
      style={{
        backgroundColor: color,
        clipPath: 'polygon(0% 15%, 5% 0%, 95% 0%, 100% 15%, 98% 85%, 95% 100%, 5% 100%, 0% 85%)',
        border: '1px dashed rgba(0,0,0,0.15)',
      }}
    />
  );
}
