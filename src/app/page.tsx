'use client';

import React, { useMemo, useState } from 'react';
import {
  Check,
  Copy,
  Dices,
  Sparkles,
  Terminal,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  ACCENT_PARTS,
  COMPONENT_PARTS,
  DEFAULT_DESIGN_PARTS,
  FONT_PARTS,
  generateCombinedMasterPrompt,
  PALETTE_PARTS,
  SURFACE_PARTS,
} from '../lib/designPartsData';
import {
  AccentPart,
  ComponentPart,
  DesignPartsSelection,
  FontPart,
  PalettePart,
  SurfacePart,
} from '../types/designParts';
import { LiveCombinedPreview } from '../components/LiveCombinedPreview';
import { DesignPartPicker } from '../components/DesignPartPicker';

export default function ArchetypeSynthesizerPage() {
  const [selection, setSelection] = useState<DesignPartsSelection>(DEFAULT_DESIGN_PARTS);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedCombined, setCopiedCombined] = useState<boolean>(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3200);
  };

  // Generate combined master prompt dynamically
  const combinedMasterPrompt = useMemo(() => {
    return generateCombinedMasterPrompt(selection);
  }, [selection]);

  // 1-Click Copy Complete Prompt
  const handleCopyCompletePrompt = () => {
    navigator.clipboard.writeText(combinedMasterPrompt);
    setCopiedCombined(true);

    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.8 },
      colors: [selection.palette.primary, selection.palette.secondary, '#10B981'],
    });

    showToast('Copied Combined AI Agent Master Prompt! Ready to paste into Claude, Cursor, or Antigravity.');
    setTimeout(() => setCopiedCombined(false), 2000);
  };

  // Surprise Me / Random Selection across all 5 enumerable categories
  const handleSurpriseMe = () => {
    const randomPalette = PALETTE_PARTS[Math.floor(Math.random() * PALETTE_PARTS.length)];
    const randomFont = FONT_PARTS[Math.floor(Math.random() * FONT_PARTS.length)];
    const randomSurface = SURFACE_PARTS[Math.floor(Math.random() * SURFACE_PARTS.length)];
    const randomComponent = COMPONENT_PARTS[Math.floor(Math.random() * COMPONENT_PARTS.length)];
    const randomAccent = ACCENT_PARTS[Math.floor(Math.random() * ACCENT_PARTS.length)];

    const newSelection: DesignPartsSelection = {
      palette: randomPalette,
      font: randomFont,
      surface: randomSurface,
      components: randomComponent,
      accent: randomAccent,
    };

    setSelection(newSelection);

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.8 },
      colors: [randomPalette.primary, randomPalette.secondary, '#10B981'],
    });

    showToast(`Assembled: "${randomPalette.name}" + "${randomFont.name}" + "${randomComponent.name}"!`);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-stone-900 selection:text-white pb-32">
      {/* 1. TOP HEADER */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200 px-4 sm:px-8 py-3.5">
        <div className="max-w-[1560px] mx-auto flex items-center justify-between gap-4">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-stone-900 flex items-center justify-center font-black text-xs text-white shadow-xs">
              ▲
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base tracking-tight text-stone-950 font-mono">
                  ARCHETYPE
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 font-bold border border-stone-200">
                  Design Terminology & Prompt Synthesizer
                </span>
              </div>
              <p className="text-[11px] text-stone-500 hidden sm:block">
                Recognized design styles broken down into parts with previews, automatically synthesized into complete agent prompts
              </p>
            </div>
          </div>

          {/* Quick Header Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleSurpriseMe}
              className="px-3.5 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-semibold cursor-pointer flex items-center gap-1.5 transition-colors border border-stone-300"
              title="Randomly pick recognized design parts"
            >
              <Dices className="w-3.5 h-3.5 text-stone-700" />
              <span>Surprise Me</span>
            </button>

            <button
              onClick={handleCopyCompletePrompt}
              className="px-4 py-1.5 bg-stone-900 hover:bg-black text-white text-xs font-bold rounded-xl cursor-pointer flex items-center gap-1.5 shadow-xs transition-transform active:scale-95"
              title="Copy complete synthesized master prompt"
            >
              {copiedCombined ? (
                <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
              ) : (
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              )}
              <span>{copiedCombined ? 'Copied Prompt!' : 'Copy Complete Prompt'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. MAIN WORKSPACE CONTAINER */}
      <main className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 space-y-6">
        {/* Intro Banner */}
        <div className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-5 shadow-2xs space-y-1">
          <h1 className="text-lg sm:text-xl font-extrabold text-stone-950 tracking-tight">
            UI Design Breakdown & Prompt Synthesizer
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
            Pick recognized, industry-standard names for each design dimension (Palette, Font, Surface & Borders, Component Controls, Accents). See live previews of what each term looks like, and watch the app <strong>automatically combine them into the complete Master Prompt</strong> for Claude, Cursor, or Antigravity.
          </p>
        </div>

        {/* Studio Dual-Pane: Sticky Combined Preview & Prompt on Left, Parts Library on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* =========================================================================
              LEFT COLUMN: LIVE COMBINED MOCKUP & SYNTHESIZED PROMPT (STICKY)
              ========================================================================= */}
          <section className="lg:col-span-5 xl:col-span-6 lg:sticky lg:top-20 space-y-4 z-20">
            {/* Mockup Preview Card */}
            <div className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-5 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm sm:text-base font-bold text-stone-900">
                      Live Combined Design Mockup
                    </h2>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                      Live Synthesis
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 mt-0.5 line-clamp-1">
                    <strong>{selection.palette.name}</strong> • <strong>{selection.font.name}</strong> • <strong>{selection.surface.name}</strong> • <strong>{selection.components.name}</strong>
                  </p>
                </div>

                <button
                  onClick={handleCopyCompletePrompt}
                  className="px-3 py-1.5 rounded-xl bg-stone-900 hover:bg-black text-white text-xs font-bold cursor-pointer flex items-center gap-1.5 shadow-2xs transition-transform active:scale-95"
                  title="Copy combined master prompt"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Prompt</span>
                </button>
              </div>

              {/* The Live Combined Mockup Viewport */}
              <LiveCombinedPreview selection={selection} />

              {/* Selection Summary Badges */}
              <div className="flex items-center gap-1.5 flex-wrap pt-1 text-[11px] font-mono">
                <span className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 border border-stone-200">
                  Palette: <strong>{selection.palette.name}</strong>
                </span>
                <span className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 border border-stone-200">
                  Font: <strong>{selection.font.name}</strong>
                </span>
                <span className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 border border-stone-200">
                  Surface: <strong>{selection.surface.name}</strong>
                </span>
                <span className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 border border-stone-200">
                  Controls: <strong>{selection.components.name}</strong>
                </span>
                <span className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 border border-stone-200">
                  Accent: <strong>{selection.accent.name}</strong>
                </span>
              </div>
            </div>

            {/* Synthesized Plain-Text Agent Master Prompt Box */}
            <div className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-5 shadow-xs space-y-3">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-stone-800" />
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 font-mono">
                      Synthesized AI Agent Master Prompt
                    </h3>
                    <p className="text-[11px] text-stone-500">
                      Automatically combines all selected parts into clean plain-text instructions.
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyCompletePrompt}
                  className="px-3 py-1.5 text-xs font-bold text-stone-900 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-xl flex items-center gap-1.5 transition-transform active:scale-95 cursor-pointer"
                >
                  {copiedCombined ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-stone-700" />
                  )}
                  <span>{copiedCombined ? 'Copied!' : 'Copy Prompt'}</span>
                </button>
              </div>

              {/* Plain Text Code Block */}
              <div className="relative">
                <pre className="p-4 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs overflow-x-auto whitespace-pre-wrap leading-relaxed select-all border border-stone-800 max-h-[300px]">
                  {combinedMasterPrompt}
                </pre>
              </div>

              <div className="text-[11px] text-stone-500">
                💡 <strong>Ready to use</strong>: Paste this complete prompt directly into Cursor, Claude, or Antigravity to build any web app with this exact combined design system.
              </div>
            </div>
          </section>

          {/* =========================================================================
              RIGHT COLUMN: DESIGN PARTS SELECTION LIBRARY
              ========================================================================= */}
          <section className="lg:col-span-7 xl:col-span-6 bg-white rounded-2xl border border-stone-200 p-5 sm:p-6 shadow-xs space-y-4">
            <div className="border-b border-stone-200 pb-3">
              <h2 className="text-base font-bold text-stone-900">
                Design Parts & Style Terminology Library
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Click any part below. Each option includes its visual preview and standalone prompt snippet. The complete master prompt on the left updates instantly.
              </p>
            </div>

            <DesignPartPicker
              selection={selection}
              onSelectPalette={(pal: PalettePart) => setSelection((prev) => ({ ...prev, palette: pal }))}
              onSelectFont={(fnt: FontPart) => setSelection((prev) => ({ ...prev, font: fnt }))}
              onSelectSurface={(surf: SurfacePart) => setSelection((prev) => ({ ...prev, surface: surf }))}
              onSelectComponent={(comp: ComponentPart) => setSelection((prev) => ({ ...prev, components: comp }))}
              onSelectAccent={(acc: AccentPart) => setSelection((prev) => ({ ...prev, accent: acc }))}
              onToast={showToast}
            />
          </section>
        </div>
      </main>

      {/* 3. NOTIFICATION TOAST */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-stone-900 text-white px-4 py-2.5 rounded-2xl text-xs font-semibold shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-150 flex items-center gap-2 border border-stone-700">
          <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
