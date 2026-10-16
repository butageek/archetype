'use client';

import React from 'react';
import {
  Activity,
  ArrowRight,
  CircleDot,
  Clock,
  Cpu,
  Zap,
} from 'lucide-react';
import { DesignPartsSelection } from '../types/designParts';

interface LiveCombinedPreviewProps {
  selection: DesignPartsSelection;
}

export function LiveCombinedPreview({ selection }: LiveCombinedPreviewProps) {
  const { palette, font, layout, surface, accent } = selection;

  // Derive card styles
  const cardStyle: React.CSSProperties = {
    backgroundColor: palette.surface,
    color: palette.text,
    borderColor: palette.border,
    borderWidth: surface.borderWidth,
    borderStyle: surface.borderStyle,
    borderRadius: surface.radius,
    boxShadow: surface.shadow,
    fontFamily: font.fontFamily,
    transition: 'all 200ms ease-out',
  };

  const headingStyle: React.CSSProperties = {
    fontFamily: font.fontFamily,
    letterSpacing: font.classification === 'grotesk' ? '-0.025em' : 'normal',
    textTransform: font.classification === 'pixel' ? 'uppercase' : 'none',
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
              borderRadius: surface.radius === '0px' ? '0px' : '6px',
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
                {layout.type}
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

      {/* Body Layout Renderers */}
      <div className="p-4 sm:p-6 relative z-10 min-h-[340px]">
        {/* =========================================================================
            LAYOUT 1: BENTO BOX MODULAR GRID
            ========================================================================= */}
        {layout.type === 'bento' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {/* Bento Hero Card */}
            <div
              className="sm:col-span-2 relative p-4 sm:p-5 flex flex-col justify-between"
              style={cardStyle}
            >
              {/* Accents: Corner Ticks & Washi Tape */}
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

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-wider font-bold opacity-75">
                    Bento Primary Node
                  </span>
                  <span
                    className="px-2 py-0.5 text-[10px] font-bold uppercase rounded"
                    style={{
                      backgroundColor: palette.accent,
                      color: palette.isDark ? '#000000' : '#FFFFFF',
                      border: `1px solid ${palette.border}`,
                    }}
                  >
                    READY
                  </span>
                </div>

                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight my-2" style={headingStyle}>
                  2,480.95 <span className="text-sm font-normal opacity-70">OPS/SEC</span>
                </div>
              </div>

              <div className="space-y-1.5 mt-3">
                <div className="flex justify-between text-xs">
                  <span style={{ color: palette.primary }} className="font-bold">Throughput Load: 84%</span>
                  <span className="opacity-70">SLA 99.98%</span>
                </div>
                <div className="h-2 w-full bg-black/15 rounded-full overflow-hidden">
                  <div className="h-full" style={{ width: '84%', backgroundColor: palette.primary }} />
                </div>
              </div>
            </div>

            {/* Bento Control Tile */}
            <div className="p-4 flex flex-col justify-between space-y-3" style={cardStyle}>
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold opacity-80 uppercase">Dial Meter</span>
                <span className="font-bold" style={{ color: palette.secondary }}>84%</span>
              </div>
              <input type="range" defaultValue={84} className="w-full cursor-pointer accent-[var(--color-primary)]" />
              <button
                className="w-full py-2 px-3 text-xs font-bold cursor-pointer transition-transform active:scale-95"
                style={{
                  backgroundColor: palette.primary,
                  color: palette.isDark ? '#000000' : '#FFFFFF',
                  border: `${surface.borderWidth} solid ${palette.border}`,
                  borderRadius: surface.radius === '0px' ? '0px' : '6px',
                }}
              >
                Execute Action
              </button>
            </div>

            {/* Bottom 3 Tiles */}
            <div className="p-3 flex items-center gap-2.5" style={cardStyle}>
              <Cpu className="w-4 h-4 text-emerald-500" />
              <span className="text-xs font-bold">Node Engine A</span>
            </div>
            <div className="p-3 flex items-center gap-2.5" style={cardStyle}>
              <Activity className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-bold">Telemetry 99.9%</span>
            </div>
            <div className="p-3 flex items-center justify-between" style={cardStyle}>
              <span className="text-xs font-bold">Sync Active</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        )}

        {/* =========================================================================
            LAYOUT 2: DENSE COCKPIT SCADA
            ========================================================================= */}
        {layout.type === 'cockpit' && (
          <div className="space-y-3 font-mono">
            {/* Top Multi-Stat Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-2 border" style={cardStyle}>
              <div className="p-1.5 bg-black/5 rounded">
                <span className="text-[10px] opacity-70 block">TEMP</span>
                <span className="text-sm font-bold text-emerald-400">41.8°C</span>
              </div>
              <div className="p-1.5 bg-black/5 rounded">
                <span className="text-[10px] opacity-70 block">INGEST</span>
                <span className="text-sm font-bold text-amber-400">48.2k/s</span>
              </div>
              <div className="p-1.5 bg-black/5 rounded">
                <span className="text-[10px] opacity-70 block">LATENCY</span>
                <span className="text-sm font-bold text-cyan-400">1.42ms</span>
              </div>
              <div className="p-1.5 bg-black/5 rounded">
                <span className="text-[10px] opacity-70 block">STATUS</span>
                <span className="text-sm font-bold">LOCKED</span>
              </div>
            </div>

            {/* Split Screen Table & Control */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              <div className="sm:col-span-8 p-3 border space-y-1.5" style={cardStyle}>
                <div className="text-[11px] font-bold pb-1 border-b border-black/10 flex justify-between">
                  <span>TERMINAL EVENT BUS</span>
                  <span className="text-emerald-400">LIVE</span>
                </div>
                <div className="text-[10px] space-y-1">
                  <div className="flex justify-between">
                    <span className="opacity-75">14:02:11.88 [ETH0] Handshake OK</span>
                    <span className="text-emerald-400 font-bold">200_OK</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-75">14:02:12.04 [PWR] Re-routed node 4</span>
                    <span className="text-amber-400 font-bold">BYPASS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-75">14:02:12.45 [SYNC] Cluster locked</span>
                    <span className="text-emerald-400 font-bold">SYNCED</span>
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4 p-3 border flex flex-col justify-between space-y-2" style={cardStyle}>
                <span className="text-[11px] font-bold uppercase opacity-75">Actuator Dial</span>
                <div className="h-2 w-full bg-black/15 rounded">
                  <div className="h-full bg-emerald-400 rounded" style={{ width: '75%' }} />
                </div>
                <button
                  className="w-full py-2 text-xs font-bold uppercase cursor-pointer"
                  style={{
                    backgroundColor: palette.primary,
                    color: palette.isDark ? '#000000' : '#FFFFFF',
                    border: `${surface.borderWidth} solid ${palette.border}`,
                    borderRadius: surface.radius === '0px' ? '0px' : '4px',
                  }}
                >
                  HALT / RELAY
                </button>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            LAYOUT 3: ASYMMETRIC SWISS RULES
            ========================================================================= */}
        {layout.type === 'asymmetric-swiss' && (
          <div className="p-5 sm:p-7 border" style={cardStyle}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-7 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5" style={{ backgroundColor: palette.primary }} />
                  <span className="text-[10px] font-mono tracking-widest uppercase font-bold opacity-75">
                    SPECIFICATION 2026
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight leading-tight" style={headingStyle}>
                  FORM FOLLOWS STRICT DIRECTIVE
                </h2>
                <p className="text-xs opacity-80 leading-relaxed">
                  Rigid mathematical alignment communicating hierarchy through contrast, scale, and negative space.
                </p>
                <button
                  className="px-4 py-2 text-xs font-bold uppercase cursor-pointer"
                  style={{
                    backgroundColor: palette.primary,
                    color: palette.isDark ? '#000000' : '#FFFFFF',
                    border: `${surface.borderWidth} solid ${palette.border}`,
                    borderRadius: surface.radius === '0px' ? '0px' : '4px',
                  }}
                >
                  READ PROTOCOL ↵
                </button>
              </div>

              <div className="md:col-span-5 md:border-l md:pl-5 space-y-3" style={{ borderColor: `${palette.border}33` }}>
                {['01. STRICT GEOMETRY', '02. ASYMMETRIC WEIGHT', '03. FUNCTIONAL PURPOSE'].map((item, idx) => (
                  <div key={idx} className="pb-2 border-b last:border-b-0 space-y-0.5" style={{ borderColor: `${palette.border}22` }}>
                    <span className="text-xs font-bold uppercase" style={headingStyle}>{item}</span>
                    <p className="text-[10px] opacity-75">Adheres strictly to baseline grid alignments.</p>
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
          <div className="py-8 px-2 flex flex-col items-center justify-center space-y-5">
            <div className="w-full max-w-sm p-5 border text-center space-y-3" style={cardStyle}>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: `${palette.primary}20`, color: palette.primary }}>
                Single-Task Focus
              </span>
              <h3 className="text-xl font-bold tracking-tight" style={headingStyle}>
                Zenith Active Node
              </h3>
              <p className="text-xs opacity-75 max-w-xs mx-auto">
                Distraction-free canvas with expansive margins and serene visual elevation.
              </p>
              <div className="h-1.5 w-full bg-black/10 rounded-full overflow-hidden mt-2">
                <div className="h-full rounded-full" style={{ width: '92%', backgroundColor: palette.primary }} />
              </div>
            </div>

            <div
              className="inline-flex items-center gap-2 p-1.5 border shadow-md"
              style={{
                backgroundColor: palette.surface,
                borderColor: palette.border,
                borderWidth: surface.borderWidth,
                borderRadius: surface.radius === '0px' ? '0px' : '9999px',
              }}
            >
              {['Run', 'Tune', 'Reset', 'Audit'].map((act, i) => (
                <button
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-semibold cursor-pointer transition-transform active:scale-95"
                  style={{
                    backgroundColor: i === 0 ? palette.primary : `${palette.background}88`,
                    color: i === 0 ? (palette.isDark ? '#000000' : '#FFFFFF') : palette.text,
                  }}
                >
                  {act}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            LAYOUT 5: ACTIVITY STREAM & FEED
            ========================================================================= */}
        {layout.type === 'card-stream' && (
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5">
            <div className="sm:col-span-8 space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider font-bold opacity-75 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>CHRONOLOGICAL STREAM</span>
              </span>
              {[
                { title: 'Synthesized Design Spec v4', time: '2m ago' },
                { title: 'Bento Grid Re-anchored to Canvas', time: '14m ago' },
                { title: 'Color Palette Contrast Checked', time: '1h ago' },
              ].map((ev, i) => (
                <div key={i} className="p-3 border flex items-center justify-between" style={cardStyle}>
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold block" style={headingStyle}>{ev.title}</span>
                    <span className="text-[10px] opacity-60 font-mono">{ev.time}</span>
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded border" style={{ borderColor: palette.primary, color: palette.primary }}>
                    DONE
                  </span>
                </div>
              ))}
            </div>

            <div className="sm:col-span-4 p-4 border flex flex-col justify-between space-y-3" style={cardStyle}>
              <span className="text-xs font-bold uppercase opacity-75">STREAM SUMMARY</span>
              <div className="text-2xl font-black" style={headingStyle}>99.98%</div>
              <p className="text-[11px] opacity-75">All activity pipelines are responding under 4ms latency.</p>
              <button
                className="w-full py-1.5 text-xs font-bold cursor-pointer"
                style={{
                  backgroundColor: palette.primary,
                  color: palette.isDark ? '#000000' : '#FFFFFF',
                  borderRadius: surface.radius === '0px' ? '0px' : '6px',
                }}
              >
                View Audit
              </button>
            </div>
          </div>
        )}

        {/* =========================================================================
            LAYOUT 6: KANBAN BOARD COLUMNS
            ========================================================================= */}
        {layout.type === 'kanban' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { col: 'Backlog (4)', tag: 'PLANNED', items: ['Synthesize Token Graph', 'Draft Layout Presets'] },
              { col: 'In Progress (2)', tag: 'ACTIVE', items: ['Pixel Font Integrations'] },
              { col: 'Done (12)', tag: 'SHIPPED', items: ['Unified Plain Text Prompt'] },
            ].map((lane, idx) => (
              <div key={idx} className="p-3 border space-y-2.5" style={cardStyle}>
                <div className="flex justify-between items-center text-xs font-bold pb-1.5 border-b border-black/10">
                  <span style={headingStyle}>{lane.col}</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/5">{lane.tag}</span>
                </div>
                {lane.items.map((it, i) => (
                  <div key={i} className="p-2 bg-black/5 rounded text-xs flex items-center justify-between">
                    <span className="truncate">{it}</span>
                    <CircleDot className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
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
          <span>{layout.name}</span>
        </div>
        <div>
          <span>{surface.name}</span>
        </div>
      </div>
    </div>
  );
}
