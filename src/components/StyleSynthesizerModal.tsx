'use client';

import React, { useState } from 'react';
import {
  Check,
  Dices,
  Sparkles,
  Wand2,
  X,
} from 'lucide-react';
import { ThemePreset } from '../types/theme';
import { synthesizeThemeFromPrompt, VIBE_SEEDS } from '../lib/synthesizer';

interface StyleSynthesizerModalProps {
  onApplyAndSave: (preset: ThemePreset) => void;
  onClose: () => void;
}

export function StyleSynthesizerModal({ onApplyAndSave, onClose }: StyleSynthesizerModalProps) {
  const [promptInput, setPromptInput] = useState('');
  const [synthesizedPreset, setSynthesizedPreset] = useState<ThemePreset | null>(null);

  const handleSynthesize = (overridePrompt?: string) => {
    const text = overridePrompt || promptInput;
    if (!text.trim()) return;
    const generated = synthesizeThemeFromPrompt(text);
    setSynthesizedPreset(generated);
  };

  const handleSurpriseMe = () => {
    const randomSeed = VIBE_SEEDS[Math.floor(Math.random() * VIBE_SEEDS.length)];
    setPromptInput(randomSeed.prompt);
    handleSynthesize(randomSeed.prompt);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-3xl bg-neutral-950 border border-neutral-800 rounded-2xl flex flex-col shadow-2xl overflow-hidden text-neutral-100">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold flex items-center gap-2">
                Style Synthesizer
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  AI Token Synthesizer
                </span>
              </h2>
              <p className="text-xs text-neutral-400">
                Describe any visual aesthetic, device interface, era, or artistic movement to synthesize a coherent design system.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-800 text-neutral-400 hover:text-neutral-200 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Prompt Input Form */}
        <div className="p-5 border-b border-neutral-800/80 bg-neutral-900/20 space-y-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <textarea
                rows={2}
                placeholder="e.g. 1970s Braun Dieter Rams audio monitor, matte pebble gray, orange tactile buttons, high density dial telemetry..."
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-3 text-xs sm:text-sm text-neutral-100 placeholder:text-neutral-500 outline-none focus:border-emerald-500 resize-none"
              />
            </div>
            <div className="flex sm:flex-col gap-2 justify-stretch">
              <button
                onClick={() => handleSynthesize()}
                disabled={!promptInput.trim()}
                className="flex-1 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-neutral-950 font-bold text-xs rounded-xl cursor-pointer flex items-center justify-center gap-1.5 shadow-sm transition-transform active:scale-95"
              >
                <Wand2 className="w-4 h-4" />
                <span>Synthesize</span>
              </button>
              <button
                onClick={handleSurpriseMe}
                className="px-3 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold rounded-xl cursor-pointer flex items-center justify-center gap-1.5 border border-neutral-700"
              >
                <Dices className="w-4 h-4 text-amber-400" />
                <span>Surprise Me</span>
              </button>
            </div>
          </div>

          {/* Inspiration Seeds */}
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-2 font-bold">
              Prompt Inspiration Seeds:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {VIBE_SEEDS.map((seed) => (
                <button
                  key={seed.label}
                  onClick={() => {
                    setPromptInput(seed.prompt);
                    handleSynthesize(seed.prompt);
                  }}
                  className="px-2.5 py-1 rounded-lg text-[11px] bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-neutral-300 cursor-pointer transition-colors"
                >
                  {seed.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Synthesized Result Preview */}
        <div className="flex-1 overflow-y-auto p-5">
          {synthesizedPreset ? (
            <div className="space-y-5 animate-in fade-in duration-200">
              {/* Name & Tagline */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-neutral-100 flex items-center gap-2">
                    {synthesizedPreset.metadata.name}
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      SYNTHESIZED
                    </span>
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">{synthesizedPreset.metadata.tagline}</p>
                </div>

                <button
                  onClick={() => onApplyAndSave(synthesizedPreset)}
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs rounded-xl cursor-pointer flex items-center gap-2 shadow-lg transition-transform active:scale-95"
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Apply & Save Theme</span>
                </button>
              </div>

              {/* Live Specimen Preview Tile */}
              <div
                className="p-5 rounded-xl border relative shadow-xl space-y-4"
                style={{
                  backgroundColor: synthesizedPreset.tokens.palette.background,
                  color: synthesizedPreset.tokens.palette.textPrimary,
                  borderColor: synthesizedPreset.tokens.palette.border,
                }}
              >
                <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: synthesizedPreset.tokens.palette.borderMuted }}>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: synthesizedPreset.tokens.palette.primary }} />
                    <span className="font-bold text-xs tracking-wider uppercase">
                      {synthesizedPreset.metadata.name} Specimen Card
                    </span>
                  </div>
                  <span
                    className="text-[10px] font-mono font-bold px-2 py-0.5"
                    style={{
                      backgroundColor: synthesizedPreset.tokens.palette.accent,
                      color: synthesizedPreset.tokens.palette.accentForeground,
                    }}
                  >
                    STATUS 200 OK
                  </span>
                </div>

                <div
                  className="p-4 rounded border flex items-center justify-between"
                  style={{
                    backgroundColor: synthesizedPreset.tokens.palette.cardSurface,
                    borderColor: synthesizedPreset.tokens.palette.border,
                    borderWidth: synthesizedPreset.tokens.borderWidth,
                  }}
                >
                  <div className="flex flex-col">
                    <span className="font-bold text-xs">Telemetry Core Node</span>
                    <span className="text-[11px]" style={{ color: synthesizedPreset.tokens.palette.textMuted }}>
                      Density: {synthesizedPreset.tokens.density} | Radius: {synthesizedPreset.tokens.radius} | Shadow: {synthesizedPreset.tokens.shadow}
                    </span>
                  </div>
                  <button
                    className="px-3 py-1.5 text-xs font-bold"
                    style={{
                      backgroundColor: synthesizedPreset.tokens.palette.primary,
                      color: synthesizedPreset.tokens.palette.primaryForeground,
                      borderColor: synthesizedPreset.tokens.palette.border,
                      borderWidth: synthesizedPreset.tokens.borderWidth,
                    }}
                  >
                    Action
                  </button>
                </div>

                {/* Color Swatches */}
                <div className="flex items-center gap-1.5 pt-1">
                  {[
                    synthesizedPreset.tokens.palette.primary,
                    synthesizedPreset.tokens.palette.secondary,
                    synthesizedPreset.tokens.palette.accent,
                    synthesizedPreset.tokens.palette.background,
                    synthesizedPreset.tokens.palette.cardSurface,
                    synthesizedPreset.tokens.palette.border,
                    synthesizedPreset.tokens.palette.textPrimary,
                  ].map((hex, i) => (
                    <div
                      key={i}
                      className="flex-1 h-6 rounded border border-black/20 flex items-center justify-center text-[9px] font-mono font-bold"
                      style={{ backgroundColor: hex, color: i === 3 || i === 4 ? '#888' : '#fff' }}
                      title={hex}
                    >
                      {hex.slice(0, 4)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="h-48 flex flex-col items-center justify-center text-center text-neutral-500 border border-dashed border-neutral-800 rounded-xl">
              <Sparkles className="w-8 h-8 text-neutral-600 mb-2" />
              <p className="text-xs">Select an inspiration seed or type a prompt above to synthesize an archetype.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
