'use client';

import React, { useState } from 'react';
import {
  ArrowLeftRight,
  Columns2,
  X,
} from 'lucide-react';
import { ThemePreset } from '../types/theme';
import { UnifiedCockpit } from './specimens/UnifiedCockpit';
import { AccentRenderer } from './specimens/AccentRenderer';

interface ComparisonViewProps {
  presets: ThemePreset[];
  activePreset: ThemePreset;
  onSelectAsActive: (preset: ThemePreset) => void;
  onClose: () => void;
}

export function ComparisonView({
  presets,
  activePreset,
  onSelectAsActive,
  onClose,
}: ComparisonViewProps) {
  const [styleAId, setStyleAId] = useState<string>(activePreset.metadata.id);
  // Default Style B to another preset
  const otherPreset = presets.find((p) => p.metadata.id !== activePreset.metadata.id) || presets[0];
  const [styleBId, setStyleBId] = useState<string>(otherPreset.metadata.id);

  const styleA = presets.find((p) => p.metadata.id === styleAId) || activePreset;
  const styleB = presets.find((p) => p.metadata.id === styleBId) || presets[1] || activePreset;

  const handleSwap = () => {
    const temp = styleAId;
    setStyleAId(styleBId);
    setStyleBId(temp);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-neutral-950 text-neutral-100 animate-in fade-in duration-200">
      {/* Top Bar */}
      <header className="p-3.5 border-b border-neutral-800 bg-neutral-900/80 flex items-center justify-between px-6 z-20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Columns2 className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-bold flex items-center gap-2">
              Side-by-Side Specimen Comparison
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                SPLIT VIEW
              </span>
            </h2>
            <p className="text-[11px] text-neutral-400">
              Evaluate visual density, contrast, and component affordances across two distinct aesthetics in real time.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleSwap}
            className="px-3 py-1.5 text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-lg cursor-pointer flex items-center gap-1.5 border border-neutral-700 transition-colors"
          >
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>Swap Sides</span>
          </button>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-800 text-neutral-400 hover:text-neutral-200 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Comparison Viewport: 2 Columns */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-800 overflow-hidden">
        {/* SIDE A */}
        <div className="flex flex-col h-full overflow-hidden">
          {/* Side A Control Bar */}
          <div className="p-3 bg-neutral-900/60 border-b border-neutral-800 flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-300">
                Specimen A
              </span>
              <select
                value={styleAId}
                onChange={(e) => setStyleAId(e.target.value)}
                className="bg-neutral-800 border border-neutral-700 rounded px-2.5 py-1 text-xs font-bold text-neutral-100 outline-none cursor-pointer"
              >
                {presets.map((p) => (
                  <option key={p.metadata.id} value={p.metadata.id}>
                    {p.metadata.name} ({p.tokens.density}, {p.tokens.shadow})
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => onSelectAsActive(styleA)}
              className="px-2.5 py-1 text-[11px] font-bold bg-emerald-500 hover:bg-emerald-400 text-neutral-950 rounded cursor-pointer transition-transform active:scale-95"
            >
              Set as Active
            </button>
          </div>

          {/* Side A Specimen View */}
          <div className="flex-1 overflow-y-auto relative" style={{ backgroundColor: styleA.tokens.palette.background }}>
            <AccentRenderer
              accents={styleA.tokens.accents}
              borderColor={styleA.tokens.palette.border}
              accentColor={styleA.tokens.palette.accent}
            />
            <div className="p-3">
              <UnifiedCockpit tokens={styleA.tokens} />
            </div>
          </div>
        </div>

        {/* SIDE B */}
        <div className="flex flex-col h-full overflow-hidden">
          {/* Side B Control Bar */}
          <div className="p-3 bg-neutral-900/60 border-b border-neutral-800 flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-300">
                Specimen B
              </span>
              <select
                value={styleBId}
                onChange={(e) => setStyleBId(e.target.value)}
                className="bg-neutral-800 border border-neutral-700 rounded px-2.5 py-1 text-xs font-bold text-neutral-100 outline-none cursor-pointer"
              >
                {presets.map((p) => (
                  <option key={p.metadata.id} value={p.metadata.id}>
                    {p.metadata.name} ({p.tokens.density}, {p.tokens.shadow})
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => onSelectAsActive(styleB)}
              className="px-2.5 py-1 text-[11px] font-bold bg-emerald-500 hover:bg-emerald-400 text-neutral-950 rounded cursor-pointer transition-transform active:scale-95"
            >
              Set as Active
            </button>
          </div>

          {/* Side B Specimen View */}
          <div className="flex-1 overflow-y-auto relative" style={{ backgroundColor: styleB.tokens.palette.background }}>
            <AccentRenderer
              accents={styleB.tokens.accents}
              borderColor={styleB.tokens.palette.border}
              accentColor={styleB.tokens.palette.accent}
            />
            <div className="p-3">
              <UnifiedCockpit tokens={styleB.tokens} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
