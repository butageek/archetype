'use client';

import React, { useState } from 'react';
import {
  Activity,
  ArrowUpRight,
  Cpu,
  Globe,
  HardDrive,
  Layers,
  Plus,
  RefreshCw,
  Search,
  Sliders,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react';
import { ThemeTokens } from '../../types/theme';
import { CornerTicks, WashiTape } from './AccentRenderer';

interface UnifiedCockpitProps {
  tokens: ThemeTokens;
}

export function UnifiedCockpit({ tokens }: UnifiedCockpitProps) {
  const { palette, density, radius, shadow, borderWidth, typography, accents } = tokens;

  // Interactive mock state
  const [activeTab, setActiveTab] = useState<'metrics' | 'nodes' | 'logs'>('metrics');
  const [toggleState, setToggleState] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sliderVal, setSliderVal] = useState<number>(78);
  const [selectedRow, setSelectedRow] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // Density helper classes
  const densityStyles = {
    compact: {
      cardPad: 'p-3',
      headerPad: 'px-3 py-2',
      itemPad: 'px-2 py-1',
      fontSize: 'text-xs',
      gap: 'gap-2.5',
      tableCellPad: 'py-1.5 px-3',
    },
    balanced: {
      cardPad: 'p-4',
      headerPad: 'px-4 py-3',
      itemPad: 'px-3 py-1.5',
      fontSize: 'text-sm',
      gap: 'gap-4',
      tableCellPad: 'py-2.5 px-4',
    },
    spacious: {
      cardPad: 'p-6',
      headerPad: 'px-6 py-4',
      itemPad: 'px-4 py-2.5',
      fontSize: 'text-base',
      gap: 'gap-6',
      tableCellPad: 'py-4 px-6',
    },
  }[density];

  // Radius helper styles
  const getRadius = (type: 'card' | 'button' | 'badge' | 'input' = 'card') => {
    if (radius === 'sharp') return '0px';
    if (type === 'badge' && radius === 'pill') return '9999px';
    if (radius === 'pill') return type === 'card' ? '16px' : '9999px';
    if (radius === 'rounded') return type === 'card' ? '12px' : '8px';
    return '4px'; // subtle
  };

  // Shadow helper styles
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

  const headerFont: React.CSSProperties = {
    fontFamily: typography.headingFamily,
    letterSpacing: typography.letterSpacing === 'wide' ? '0.06em' : typography.letterSpacing === 'tight' ? '-0.025em' : 'normal',
    textTransform: typography.headingTransform,
  };

  const tableData = [
    { id: 'SYS-091', service: 'Inference Engine', status: 'Online', latency: '18ms', throughput: '4.8k req/s', region: 'us-east-1' },
    { id: 'SYS-092', service: 'Vector Indexer', status: 'Optimal', latency: '4ms', throughput: '12.1k req/s', region: 'eu-central-1' },
    { id: 'SYS-093', service: 'Telemetry Gateway', status: 'Warning', latency: '142ms', throughput: '840 req/s', region: 'ap-northeast-1' },
    { id: 'SYS-094', service: 'Context Cache L2', status: 'Optimal', latency: '2ms', throughput: '32.4k req/s', region: 'us-west-2' },
  ];

  const filteredTable = tableData.filter(
    (row) =>
      row.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className={`w-full min-h-full transition-colors duration-150 relative ${densityStyles.fontSize}`}
      style={{
        backgroundColor: palette.background,
        color: palette.textPrimary,
        fontFamily: typography.bodyFamily,
      }}
    >
      {/* 1. Header & Navigation Specimen */}
      <header
        className="w-full border-b flex items-center justify-between sticky top-0 z-20 backdrop-blur-md px-4 py-2.5 transition-all"
        style={{
          borderColor: palette.borderMuted,
          backgroundColor: palette.cardSurface,
          color: palette.textPrimary,
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex items-center justify-center w-8 h-8 font-black text-xs transition-transform hover:scale-105"
            style={{
              backgroundColor: palette.primary,
              color: palette.primaryForeground,
              borderRadius: getRadius('badge'),
              border: `${borderWidth} solid ${palette.border}`,
              boxShadow: shadow === 'hard-offset' ? `2px 2px 0px ${palette.border}` : undefined,
            }}
          >
            <Activity className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm tracking-tight" style={headerFont}>
                NEXUS TELEMETRY
              </span>
              <span
                className="text-[9px] font-mono px-1.5 py-0.2 rounded"
                style={{
                  backgroundColor: palette.accent,
                  color: palette.accentForeground,
                  borderRadius: getRadius('badge'),
                  fontWeight: 700,
                }}
              >
                v4.8-STABLE
              </span>
            </div>
            <div className="text-[10px] hidden sm:block" style={{ color: palette.textMuted }}>
              Workstation / Cluster Node 04-A
            </div>
          </div>
        </div>

        {/* Global Search Bar with Keyboard Shortcut */}
        <div className="flex items-center gap-2 max-w-xs w-full mx-4">
          <div
            className="flex items-center w-full px-2.5 py-1 text-xs gap-2 transition-all"
            style={{
              backgroundColor: palette.cardSurfaceMuted,
              borderColor: palette.border,
              borderWidth: borderWidth === '0px' ? '1px' : borderWidth,
              borderRadius: getRadius('input'),
            }}
          >
            <Search className="w-3.5 h-3.5 flex-shrink-0" style={{ color: palette.textMuted }} />
            <input
              type="text"
              placeholder="Search components or telemetry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent outline-none placeholder:text-opacity-50 text-xs"
              style={{ color: palette.textPrimary }}
            />
            <kbd
              className="text-[9px] font-mono px-1 py-0.5 rounded border hidden sm:inline"
              style={{
                backgroundColor: palette.cardSurface,
                borderColor: palette.borderMuted,
                color: palette.textMuted,
              }}
            >
              /
            </kbd>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold cursor-pointer transition-transform active:translate-y-0.5"
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
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Launch Inspect</span>
          </button>
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs"
            style={{
              backgroundColor: palette.cardSurfaceMuted,
              borderColor: palette.border,
              borderWidth: borderWidth === '0px' ? '1px' : borderWidth,
              color: palette.textPrimary,
            }}
          >
            JD
          </div>
        </div>
      </header>

      {/* Main Specimen Canvas Area */}
      <div className={`p-4 sm:p-6 flex flex-col ${densityStyles.gap}`}>
        {/* Segmented Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-1 border-b" style={{ borderColor: palette.borderMuted }}>
          <div
            className="inline-flex p-0.5"
            style={{
              backgroundColor: palette.cardSurfaceMuted,
              borderColor: palette.border,
              borderWidth: borderWidth === '0px' ? '1px' : borderWidth,
              borderRadius: getRadius('input'),
            }}
          >
            {(['metrics', 'nodes', 'logs'] as const).map((tab) => {
              const isSelected = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="px-3 py-1 text-xs font-semibold transition-all cursor-pointer capitalize"
                  style={{
                    backgroundColor: isSelected ? palette.cardSurface : 'transparent',
                    color: isSelected ? palette.textPrimary : palette.textMuted,
                    borderRadius: getRadius('badge'),
                    border: isSelected && borderWidth !== '0px' ? `${borderWidth} solid ${palette.border}` : 'none',
                    boxShadow: isSelected && shadow === 'hard-offset' ? `2px 2px 0px ${palette.border}` : undefined,
                  }}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 text-xs" style={{ color: palette.textMuted }}>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: palette.success }} />
              Telemetry Synchronized
            </span>
            <span className="font-mono text-[11px]">[60 FPS]</span>
          </div>
        </div>

        {/* 2. Top Metric Dock (4 Real-time metric cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Card 1: Throughput */}
          <div
            className={`relative transition-all ${densityStyles.cardPad} ${accents.skewTilt ? 'transform -rotate-0.5' : ''}`}
            style={cardStyle}
          >
            {accents.cornerTicks && <CornerTicks borderColor={palette.border} />}
            {accents.washiTape && <WashiTape color={palette.secondary} />}
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider font-semibold" style={{ color: palette.textMuted }}>
                Network Throughput
              </span>
              <span
                className="p-1"
                style={{
                  backgroundColor: palette.cardSurfaceMuted,
                  borderRadius: getRadius('badge'),
                  color: palette.primary,
                }}
              >
                <Zap className="w-3.5 h-3.5" />
              </span>
            </div>
            <div className="text-2xl font-bold tracking-tight mb-2" style={headerFont}>
              94.2 <span className="text-xs font-normal font-mono" style={{ color: palette.textMuted }}>GB/s</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="flex items-center font-bold" style={{ color: palette.success }}>
                <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" /> +14.2%
              </span>
              <span style={{ color: palette.textMuted }}>Peak: 120 GB/s</span>
            </div>
            {/* Progress Segment */}
            <div className="mt-2.5 h-1.5 w-full bg-black/10 overflow-hidden" style={{ borderRadius: getRadius('badge') }}>
              <div
                className="h-full transition-all"
                style={{
                  width: '78%',
                  backgroundColor: palette.primary,
                }}
              />
            </div>
          </div>

          {/* Card 2: Core Workload */}
          <div
            className={`relative transition-all ${densityStyles.cardPad} ${accents.skewTilt ? 'transform rotate-0.5' : ''}`}
            style={cardStyle}
          >
            {accents.cornerTicks && <CornerTicks borderColor={palette.border} />}
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider font-semibold" style={{ color: palette.textMuted }}>
                Compute Saturation
              </span>
              <span
                className="p-1"
                style={{
                  backgroundColor: palette.cardSurfaceMuted,
                  borderRadius: getRadius('badge'),
                  color: palette.secondary,
                }}
              >
                <Cpu className="w-3.5 h-3.5" />
              </span>
            </div>
            <div className="text-2xl font-bold tracking-tight mb-2" style={headerFont}>
              {sliderVal}% <span className="text-xs font-normal font-mono" style={{ color: palette.textMuted }}>LOAD</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-mono" style={{ color: sliderVal > 85 ? palette.danger : palette.warning }}>
                32 / 48 Cores Busy
              </span>
              <span className="font-mono text-[10px]" style={{ color: palette.textMuted }}>4.20 GHz</span>
            </div>
            {/* Mini Segmented Bar */}
            <div className="mt-2.5 flex gap-1 h-1.5">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-xs"
                  style={{
                    backgroundColor: i < Math.floor(sliderVal / 10) ? palette.secondary : 'rgba(128,128,128,0.2)',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Card 3: Memory Density */}
          <div className={`relative transition-all ${densityStyles.cardPad}`} style={cardStyle}>
            {accents.cornerTicks && <CornerTicks borderColor={palette.border} />}
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider font-semibold" style={{ color: palette.textMuted }}>
                HBM3 Allocated
              </span>
              <span
                className="p-1"
                style={{
                  backgroundColor: palette.cardSurfaceMuted,
                  borderRadius: getRadius('badge'),
                  color: palette.accent,
                }}
              >
                <HardDrive className="w-3.5 h-3.5" />
              </span>
            </div>
            <div className="text-2xl font-bold tracking-tight mb-2" style={headerFont}>
              512 <span className="text-xs font-normal font-mono" style={{ color: palette.textMuted }}>GB</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-mono text-emerald-500 font-bold">Optimal Pool</span>
              <span style={{ color: palette.textMuted }}>Latency: 1.2ns</span>
            </div>
            <div className="mt-2.5 h-1.5 w-full bg-black/10 overflow-hidden" style={{ borderRadius: getRadius('badge') }}>
              <div
                className="h-full transition-all"
                style={{
                  width: '64%',
                  backgroundColor: palette.accent,
                }}
              />
            </div>
          </div>

          {/* Card 4: Active Daemon Nodes */}
          <div
            className={`relative transition-all ${densityStyles.cardPad} ${accents.skewTilt ? 'transform -rotate-0.5' : ''}`}
            style={cardStyle}
          >
            {accents.cornerTicks && <CornerTicks borderColor={palette.border} />}
            {accents.washiTape && <WashiTape color={palette.primary} />}
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider font-semibold" style={{ color: palette.textMuted }}>
                Active Synthesizers
              </span>
              <span
                className="p-1"
                style={{
                  backgroundColor: palette.cardSurfaceMuted,
                  borderRadius: getRadius('badge'),
                  color: palette.info,
                }}
              >
                <Layers className="w-3.5 h-3.5" />
              </span>
            </div>
            <div className="text-2xl font-bold tracking-tight mb-2" style={headerFont}>
              1,429 <span className="text-xs font-normal font-mono" style={{ color: palette.textMuted }}>NODES</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-mono" style={{ color: palette.success }}>100% Uptime</span>
              <span className="font-mono text-[10px]" style={{ color: palette.textMuted }}>TLS 1.3 Strict</span>
            </div>
            <div className="mt-2.5 h-1.5 w-full bg-black/10 overflow-hidden" style={{ borderRadius: getRadius('badge') }}>
              <div
                className="h-full transition-all"
                style={{
                  width: '92%',
                  backgroundColor: palette.info,
                }}
              />
            </div>
          </div>
        </div>

        {/* 3. Middle Grid: Data Table (Left) + Interactive Form Controls (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Data Table / Telemetry Feed (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col relative" style={cardStyle}>
            {accents.cornerTicks && <CornerTicks borderColor={palette.border} />}
            <div
              className={`flex items-center justify-between border-b ${densityStyles.headerPad}`}
              style={{ borderColor: palette.borderMuted }}
            >
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4" style={{ color: palette.primary }} />
                <h3 className="font-bold text-sm" style={headerFont}>
                  Microservice Feed
                </h3>
                <span
                  className="text-[10px] font-mono px-2 py-0.5"
                  style={{
                    backgroundColor: palette.cardSurfaceMuted,
                    borderRadius: getRadius('badge'),
                    color: palette.textMuted,
                  }}
                >
                  {filteredTable.length} Records
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  className="p-1.5 hover:opacity-80 rounded cursor-pointer"
                  style={{ color: palette.textMuted }}
                  title="Reload table"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Table Container */}
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr
                    className="border-b font-mono text-[11px] uppercase tracking-wider"
                    style={{
                      borderColor: palette.borderMuted,
                      backgroundColor: palette.cardSurfaceMuted,
                      color: palette.textMuted,
                    }}
                  >
                    <th className={densityStyles.tableCellPad}>ID</th>
                    <th className={densityStyles.tableCellPad}>Service Component</th>
                    <th className={densityStyles.tableCellPad}>Status</th>
                    <th className={densityStyles.tableCellPad}>Latency</th>
                    <th className={densityStyles.tableCellPad}>Throughput</th>
                    <th className={`${densityStyles.tableCellPad} text-right`}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTable.map((row) => {
                    const isSelected = selectedRow === row.id;
                    return (
                      <tr
                        key={row.id}
                        onClick={() => setSelectedRow(isSelected ? null : row.id)}
                        className="border-b transition-colors cursor-pointer select-none"
                        style={{
                          borderColor: palette.borderMuted,
                          backgroundColor: isSelected ? `${palette.primary}18` : 'transparent',
                        }}
                      >
                        <td className={`${densityStyles.tableCellPad} font-mono font-bold`} style={{ color: palette.primary }}>
                          {row.id}
                        </td>
                        <td className={`${densityStyles.tableCellPad} font-medium`}>
                          <div className="flex items-center gap-2">
                            <span>{row.service}</span>
                            <span className="text-[10px] font-mono" style={{ color: palette.textMuted }}>
                              ({row.region})
                            </span>
                          </div>
                        </td>
                        <td className={densityStyles.tableCellPad}>
                          <span
                            className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider"
                            style={{
                              backgroundColor:
                                row.status === 'Online' || row.status === 'Optimal'
                                  ? `${palette.success}22`
                                  : `${palette.warning}22`,
                              color:
                                row.status === 'Online' || row.status === 'Optimal'
                                  ? palette.success
                                  : palette.warning,
                              border: `1px solid ${
                                row.status === 'Online' || row.status === 'Optimal'
                                  ? palette.success
                                  : palette.warning
                              }`,
                              borderRadius: getRadius('badge'),
                            }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{
                                backgroundColor:
                                  row.status === 'Online' || row.status === 'Optimal'
                                    ? palette.success
                                    : palette.warning,
                              }}
                            />
                            {row.status}
                          </span>
                        </td>
                        <td className={`${densityStyles.tableCellPad} font-mono`}>{row.latency}</td>
                        <td className={`${densityStyles.tableCellPad} font-mono`}>{row.throughput}</td>
                        <td className={`${densityStyles.tableCellPad} text-right`}>
                          <button
                            className="px-2 py-1 text-[11px] font-semibold cursor-pointer transition-transform active:scale-95"
                            style={{
                              backgroundColor: palette.cardSurfaceMuted,
                              color: palette.textPrimary,
                              borderColor: palette.border,
                              borderWidth: borderWidth === '0px' ? '1px' : borderWidth,
                              borderRadius: getRadius('button'),
                            }}
                          >
                            Inspect
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Table Footer */}
            <div
              className={`flex items-center justify-between border-t text-[11px] font-mono ${densityStyles.headerPad}`}
              style={{
                borderColor: palette.borderMuted,
                color: palette.textMuted,
              }}
            >
              <span>Showing 4 of 4 active clusters</span>
              <div className="flex gap-2">
                <button className="underline hover:opacity-80">Export CSV</button>
                <span>•</span>
                <button className="underline hover:opacity-80">Raw JSON</button>
              </div>
            </div>
          </div>

          {/* Interactive Forms & Controls Panel (1 Col) */}
          <div className="flex flex-col relative" style={cardStyle}>
            {accents.cornerTicks && <CornerTicks borderColor={palette.border} />}
            <div
              className={`flex items-center justify-between border-b ${densityStyles.headerPad}`}
              style={{ borderColor: palette.borderMuted }}
            >
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4" style={{ color: palette.secondary }} />
                <h3 className="font-bold text-sm" style={headerFont}>
                  Control Telemetry
                </h3>
              </div>
              <span
                className="text-[10px] font-mono uppercase px-1.5 py-0.5"
                style={{
                  backgroundColor: palette.cardSurfaceMuted,
                  borderRadius: getRadius('badge'),
                  color: palette.textMuted,
                }}
              >
                LIVE
              </span>
            </div>

            <div className={`flex flex-col ${densityStyles.gap} ${densityStyles.cardPad}`}>
              {/* Text Input */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: palette.textMuted }}>
                  Target Endpoint URL
                </label>
                <div
                  className="flex items-center px-3 py-1.5 border transition-all"
                  style={{
                    backgroundColor: palette.cardSurfaceMuted,
                    borderColor: palette.border,
                    borderWidth: borderWidth === '0px' ? '1px' : borderWidth,
                    borderRadius: getRadius('input'),
                  }}
                >
                  <Globe className="w-3.5 h-3.5 mr-2" style={{ color: palette.textMuted }} />
                  <input
                    type="text"
                    defaultValue="https://api.archetype.local/v1/stream"
                    className="w-full bg-transparent text-xs font-mono outline-none"
                    style={{ color: palette.textPrimary }}
                  />
                </div>
              </div>

              {/* Slider Input */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="font-bold uppercase tracking-wider" style={{ color: palette.textMuted }}>
                    Dynamic Throttle Limit
                  </span>
                  <span className="font-bold" style={{ color: palette.primary }}>
                    {sliderVal}%
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={sliderVal}
                  onChange={(e) => setSliderVal(Number(e.target.value))}
                  className="w-full cursor-pointer accent-[var(--color-primary)]"
                />
              </div>

              {/* Toggle Switch */}
              <div
                className="flex items-center justify-between p-2.5 border"
                style={{
                  backgroundColor: palette.cardSurfaceMuted,
                  borderColor: palette.borderMuted,
                  borderRadius: getRadius('card'),
                }}
              >
                <div className="flex flex-col">
                  <span className="text-xs font-semibold">Strict Fault Tolerance</span>
                  <span className="text-[10px]" style={{ color: palette.textMuted }}>
                    Auto-reroute upon node lag
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setToggleState(!toggleState)}
                  className="w-10 h-5 rounded-full transition-colors relative cursor-pointer"
                  style={{
                    backgroundColor: toggleState ? palette.primary : '#888888',
                    border: `${borderWidth === '0px' ? '1px' : borderWidth} solid ${palette.border}`,
                  }}
                >
                  <div
                    className="w-3.5 h-3.5 rounded-full bg-white absolute top-0.5 transition-transform"
                    style={{
                      transform: toggleState ? 'translateX(20px)' : 'translateX(2px)',
                    }}
                  />
                </button>
              </div>

              {/* Button Action Matrix */}
              <div className="flex flex-col gap-2 pt-1">
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full py-2 px-4 text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 active:translate-y-0.5"
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
                  <Zap className="w-3.5 h-3.5" />
                  Primary Action Trigger
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    className="py-1.5 px-3 text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 active:translate-y-0.5"
                    style={{
                      backgroundColor: palette.secondary,
                      color: palette.secondaryForeground,
                      borderColor: palette.border,
                      borderWidth,
                      borderRadius: getRadius('button'),
                      boxShadow: shadow === 'hard-offset' ? `2px 2px 0px ${palette.border}` : undefined,
                    }}
                  >
                    Secondary CTA
                  </button>
                  <button
                    className="py-1.5 px-3 text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 active:translate-y-0.5"
                    style={{
                      backgroundColor: 'transparent',
                      color: palette.textPrimary,
                      borderColor: palette.border,
                      borderWidth: borderWidth === '0px' ? '1px' : borderWidth,
                      borderRadius: getRadius('button'),
                    }}
                  >
                    Cancel / Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Bottom Row: Compact Device Cards & System Architecture */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className={`flex items-center gap-3 ${densityStyles.cardPad}`} style={cardStyle}>
            <div
              className="w-10 h-10 flex-shrink-0 flex items-center justify-center font-bold text-sm"
              style={{
                backgroundColor: palette.cardSurfaceMuted,
                borderColor: palette.border,
                borderWidth: borderWidth === '0px' ? '1px' : borderWidth,
                borderRadius: getRadius('badge'),
                color: palette.primary,
              }}
            >
              12
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xs" style={headerFont}>
                GPU Compute Slices
              </span>
              <span className="text-[11px] font-mono" style={{ color: palette.textMuted }}>
                NVIDIA H100 SXM5 / NVLink 900GB/s
              </span>
            </div>
          </div>

          <div className={`flex items-center gap-3 ${densityStyles.cardPad}`} style={cardStyle}>
            <div
              className="w-10 h-10 flex-shrink-0 flex items-center justify-center font-bold text-sm"
              style={{
                backgroundColor: palette.cardSurfaceMuted,
                borderColor: palette.border,
                borderWidth: borderWidth === '0px' ? '1px' : borderWidth,
                borderRadius: getRadius('badge'),
                color: palette.success,
              }}
            >
              99%
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xs" style={headerFont}>
                Confidence Heuristic
              </span>
              <span className="text-[11px] font-mono" style={{ color: palette.textMuted }}>
                Zero packet jitter recorded
              </span>
            </div>
          </div>

          <div className={`flex items-center gap-3 ${densityStyles.cardPad}`} style={cardStyle}>
            <div
              className="w-10 h-10 flex-shrink-0 flex items-center justify-center font-bold text-sm"
              style={{
                backgroundColor: palette.cardSurfaceMuted,
                borderColor: palette.border,
                borderWidth: borderWidth === '0px' ? '1px' : borderWidth,
                borderRadius: getRadius('badge'),
                color: palette.warning,
              }}
            >
              4.8
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xs" style={headerFont}>
                Safety Score Index
              </span>
              <span className="text-[11px] font-mono" style={{ color: palette.textMuted }}>
                Automated guardrail verified
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Interactive Specimen Modal Preview */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div
            className="w-full max-w-md relative p-6 transition-all"
            style={{
              backgroundColor: palette.cardSurface,
              color: palette.textPrimary,
              borderColor: palette.border,
              borderWidth,
              borderRadius: getRadius('card'),
              boxShadow: getShadow(),
              fontFamily: typography.bodyFamily,
            }}
          >
            {accents.cornerTicks && <CornerTicks borderColor={palette.border} />}
            <div className="flex items-center justify-between pb-3 mb-4 border-b" style={{ borderColor: palette.borderMuted }}>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" style={{ color: palette.primary }} />
                <h3 className="font-bold text-base" style={headerFont}>
                  Specimen Component Inspector
                </h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="w-6 h-6 flex items-center justify-center rounded cursor-pointer font-bold text-sm hover:opacity-75"
                style={{
                  backgroundColor: palette.cardSurfaceMuted,
                  color: palette.textPrimary,
                  border: `1px solid ${palette.borderMuted}`,
                }}
              >
                ✕
              </button>
            </div>

            <p className="text-xs mb-4 leading-relaxed" style={{ color: palette.textMuted }}>
              This dialog tests the active theme tokens under overlay conditions, verifying border clarity, backdrop contrast, typography hierarchy, and focus rings.
            </p>

            <div
              className="p-3 mb-4 font-mono text-xs border"
              style={{
                backgroundColor: palette.cardSurfaceMuted,
                borderColor: palette.borderMuted,
                borderRadius: getRadius('input'),
              }}
            >
              <div className="text-[10px] uppercase font-bold" style={{ color: palette.textMuted }}>
                Active Style Invariant:
              </div>
              <div className="mt-1 font-semibold" style={{ color: palette.primary }}>
                Shadow: {tokens.shadow} | Radius: {tokens.radius} | Density: {tokens.density}
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setModalOpen(false)}
                className="px-3 py-1.5 text-xs font-semibold cursor-pointer"
                style={{
                  backgroundColor: 'transparent',
                  color: palette.textPrimary,
                  borderColor: palette.border,
                  borderWidth: borderWidth === '0px' ? '1px' : borderWidth,
                  borderRadius: getRadius('button'),
                }}
              >
                Dismiss
              </button>
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-1.5 text-xs font-bold cursor-pointer"
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
                Acknowledge
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
