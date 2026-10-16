'use client';

import React from 'react';
import {
  Bot,
  ChevronDown,
  Columns2,
  Laptop,
  Layers,
  PanelRight,
  Smartphone,
  Sparkles,
  Tablet,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import { ThemePreset, ViewportConfig } from '../types/theme';

interface HeaderProps {
  presets: ThemePreset[];
  activePreset: ThemePreset;
  viewport: ViewportConfig;
  viewMode: 'unified' | 'breakdown';
  tweakerOpen: boolean;
  onSelectPreset: (preset: ThemePreset) => void;
  onViewportChange: (viewport: ViewportConfig) => void;
  onViewModeChange: (mode: 'unified' | 'breakdown') => void;
  onToggleTweaker: () => void;
  onOpenLibrary: () => void;
  onOpenSynthesizer: () => void;
  onOpenComparison: () => void;
  onOpenExport: () => void;
}

export function Header({
  presets,
  activePreset,
  viewport,
  viewMode,
  tweakerOpen,
  onSelectPreset,
  onViewportChange,
  onViewModeChange,
  onToggleTweaker,
  onOpenLibrary,
  onOpenSynthesizer,
  onOpenComparison,
  onOpenExport,
}: HeaderProps) {
  return (
    <header className="h-14 border-b border-neutral-800 bg-neutral-950 px-3 sm:px-5 flex items-center justify-between text-neutral-200 z-30 select-none">
      {/* 1. Left: Brand Mark & Preset Selector */}
      <div className="flex items-center gap-3">
        {/* Brand Mark */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={onOpenLibrary}>
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center font-black text-xs text-emerald-400 shadow-sm">
            ▲
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="font-black text-sm tracking-tight text-white font-mono">ARCHETYPE</span>
              <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-neutral-800 text-neutral-400 border border-neutral-700">
                AI SPEC
              </span>
            </div>
            <span className="text-[10px] text-neutral-400 font-medium hidden sm:inline">Design Specimen & Agent Synthesizer</span>
          </div>
        </div>

        <div className="h-5 w-[1px] bg-neutral-800 mx-1 hidden sm:block" />

        {/* Preset Selector Dropdown */}
        <div className="relative flex items-center">
          <select
            value={activePreset.metadata.id}
            onChange={(e) => {
              const selected = presets.find((p) => p.metadata.id === e.target.value);
              if (selected) onSelectPreset(selected);
            }}
            className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-xs font-bold text-neutral-100 rounded-lg pl-3 pr-8 py-1.5 outline-none cursor-pointer appearance-none transition-colors max-w-[160px] sm:max-w-[210px] truncate"
          >
            {presets.map((p) => (
              <option key={p.metadata.id} value={p.metadata.id}>
                {p.metadata.name}
              </option>
            ))}
          </select>
          <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 pointer-events-none text-neutral-400" />
        </div>

        <button
          onClick={onOpenLibrary}
          className="p-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-900 text-neutral-300 text-xs font-semibold cursor-pointer hidden md:flex items-center gap-1"
          title="Browse Curated Style Gallery"
        >
          <Layers className="w-3.5 h-3.5" />
          <span className="text-[11px]">Gallery</span>
        </button>
      </div>

      {/* 2. Middle: Viewport Switcher & Specimen Modes */}
      <div className="hidden lg:flex items-center gap-2">
        {/* Unified Cockpit vs Component Breakdown Toggle */}
        <div className="flex items-center bg-neutral-900 p-0.5 rounded-lg border border-neutral-800 text-xs">
          <button
            onClick={() => onViewModeChange('unified')}
            className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
              viewMode === 'unified'
                ? 'bg-neutral-800 text-white shadow-xs'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            App Cockpit
          </button>
          <button
            onClick={() => onViewModeChange('breakdown')}
            className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
              viewMode === 'breakdown'
                ? 'bg-neutral-800 text-white shadow-xs'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Components
          </button>
        </div>

        <div className="h-4 w-[1px] bg-neutral-800 mx-1" />

        {/* Viewport Modes */}
        <div className="flex items-center bg-neutral-900 p-0.5 rounded-lg border border-neutral-800">
          <button
            onClick={() => onViewportChange({ ...viewport, mode: 'desktop', zoom: 1 })}
            className={`p-1.5 rounded-md cursor-pointer transition-colors ${
              viewport.mode === 'desktop' ? 'bg-neutral-800 text-emerald-400' : 'text-neutral-400 hover:text-neutral-200'
            }`}
            title="Desktop 1200px"
          >
            <Laptop className="w-4 h-4" />
          </button>
          <button
            onClick={() => onViewportChange({ ...viewport, mode: 'tablet', zoom: 0.9 })}
            className={`p-1.5 rounded-md cursor-pointer transition-colors ${
              viewport.mode === 'tablet' ? 'bg-neutral-800 text-emerald-400' : 'text-neutral-400 hover:text-neutral-200'
            }`}
            title="Tablet 768px"
          >
            <Tablet className="w-4 h-4" />
          </button>
          <button
            onClick={() => onViewportChange({ ...viewport, mode: 'mobile', zoom: 0.85 })}
            className={`p-1.5 rounded-md cursor-pointer transition-colors ${
              viewport.mode === 'mobile' ? 'bg-neutral-800 text-emerald-400' : 'text-neutral-400 hover:text-neutral-200'
            }`}
            title="Mobile 375px"
          >
            <Smartphone className="w-4 h-4" />
          </button>
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center gap-1 text-[11px] font-mono text-neutral-400 bg-neutral-900 px-2 py-1 rounded-lg border border-neutral-800">
          <button
            onClick={() => onViewportChange({ ...viewport, zoom: Math.max(0.6, Number((viewport.zoom - 0.1).toFixed(2))) })}
            className="hover:text-white cursor-pointer"
            title="Zoom out"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <span>{Math.round(viewport.zoom * 100)}%</span>
          <button
            onClick={() => onViewportChange({ ...viewport, zoom: Math.min(1.2, Number((viewport.zoom + 0.1).toFixed(2))) })}
            className="hover:text-white cursor-pointer"
            title="Zoom in"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 3. Right: AI Synthesizer, Comparison & Export Modal */}
      <div className="flex items-center gap-2">
        <button
          onClick={onOpenSynthesizer}
          className="px-2.5 py-1.5 rounded-lg border border-neutral-800 hover:border-neutral-700 bg-neutral-900 text-neutral-200 hover:text-white text-xs font-semibold cursor-pointer flex items-center gap-1.5 transition-colors"
          title="Synthesize new design tokens with AI prompts"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span className="hidden sm:inline">Synthesizer</span>
        </button>

        <button
          onClick={onOpenComparison}
          className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border border-neutral-800 hover:border-neutral-700 bg-neutral-900 text-neutral-300 hover:text-white text-xs font-semibold cursor-pointer flex items-center gap-1.5 transition-colors"
          title="Side-by-side compare two design styles"
        >
          <Columns2 className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Compare</span>
        </button>

        {/* PRIMARY EXPORT BUTTON */}
        <button
          onClick={onOpenExport}
          className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs cursor-pointer flex items-center gap-1.5 shadow-md transition-transform active:scale-95"
          title="Export for AI Coding Agent"
        >
          <Bot className="w-4 h-4 stroke-[2.5]" />
          <span>Export for AI</span>
        </button>

        <div className="h-5 w-[1px] bg-neutral-800 mx-0.5" />

        {/* Toggle Visual Tweaker Sidebar */}
        <button
          onClick={onToggleTweaker}
          className={`p-1.5 rounded-lg border cursor-pointer transition-colors ${
            tweakerOpen
              ? 'border-emerald-500 bg-emerald-950/40 text-emerald-400'
              : 'border-neutral-800 hover:bg-neutral-900 text-neutral-400 hover:text-neutral-200'
          }`}
          title="Toggle Visual Tweaker Sidebar"
        >
          <PanelRight className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
