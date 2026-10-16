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
  const [leftTab, setLeftTab] = useState<'mockup' | 'prompt'>('mockup');
  const [selectedSnippet, setSelectedSnippet] = useState<string>('');

  const handleSelectionChange = () => {
    if (typeof window !== 'undefined') {
      const text = window.getSelection()?.toString().trim() || '';
      setSelectedSnippet(text);
    }
  };

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
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-stone-900 selection:text-white pb-16 lg:pb-0">
      {/* 1. TOP HEADER */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200 px-4 sm:px-8 py-3.5">
        <div className="max-w-[1720px] mx-auto flex items-center justify-between gap-4">
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
              <span>{copiedCombined ? 'Copied Prompt!' : 'Copy Master Prompt'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. MAIN WORKSPACE CONTAINER (SPLIT-SCREEN STUDIO ARCHITECTURE) */}
      <main className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-4 h-auto lg:h-[calc(100vh-66px)] lg:overflow-hidden">
        {/* Studio Dual-Pane: Left Column Pinned in View, Right Column Scrollable Library */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-start">
          {/* =========================================================================
              LEFT COLUMN: LIVE COMBINED MOCKUP & PROMPT (ALWAYS IN VIEWPORT)
              ========================================================================= */}
          <section
            id="live-mockup-section"
            className="lg:col-span-5 xl:col-span-6 flex flex-col space-y-3 lg:h-full lg:overflow-y-auto lg:pr-2 scrollbar-thin"
          >
            {/* The Main Studio Card */}
            <div className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-5 shadow-xs space-y-3">
              {/* Studio Card Header: Title & View Mode Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm sm:text-base font-bold text-stone-900">
                      {leftTab === 'mockup' ? 'Live Combined Design Mockup' : 'Synthesized Agent Master Prompt'}
                    </h2>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                      Live Synthesis
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 mt-0.5 line-clamp-1">
                    <strong>{selection.palette.name}</strong> • <strong>{selection.font.name}</strong> • <strong>{selection.surface.name}</strong>
                  </p>
                </div>

                {/* View Switcher: Mockup vs Master Prompt */}
                <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-xl border border-stone-200 text-xs">
                  <button
                    type="button"
                    onClick={() => setLeftTab('mockup')}
                    className={`px-3 py-1.5 rounded-lg font-semibold cursor-pointer transition-all flex items-center gap-1.5 ${
                      leftTab === 'mockup'
                        ? 'bg-stone-900 text-white shadow-xs font-bold'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                    }`}
                  >
                    <span>👁 Live Mockup</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setLeftTab('prompt')}
                    className={`px-3 py-1.5 rounded-lg font-semibold cursor-pointer transition-all flex items-center gap-1.5 ${
                      leftTab === 'prompt'
                        ? 'bg-stone-900 text-white shadow-xs font-bold'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>⚡ Master Prompt</span>
                  </button>
                </div>
              </div>

              {/* TAB 1: LIVE COMBINED MOCKUP VIEWPORT */}
              {leftTab === 'mockup' && (
                <div className="space-y-3 animate-in fade-in duration-150">
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
              )}

              {/* TAB 2: SYNTHESIZED AGENT MASTER PROMPT VIEW */}
              {leftTab === 'prompt' && (
                <div className="space-y-3 animate-in fade-in duration-150">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    {/* Quick Section Copy Chips */}
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[10px] font-mono font-bold text-stone-500 uppercase tracking-wider">
                        Copy:
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(selection.palette.promptSnippet);
                          showToast(`Copied Palette tokens (${selection.palette.name})!`);
                        }}
                        className="px-2 py-0.5 text-[11px] font-mono bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 rounded-md transition-colors cursor-pointer"
                        title="Copy only color palette tokens"
                      >
                        🎨 Palette
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(selection.font.promptSnippet);
                          showToast(`Copied Typography rules (${selection.font.name})!`);
                        }}
                        className="px-2 py-0.5 text-[11px] font-mono bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 rounded-md transition-colors cursor-pointer"
                        title="Copy only typography rules"
                      >
                        🔤 Typography
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(selection.surface.promptSnippet);
                          showToast(`Copied Surface specifications (${selection.surface.name})!`);
                        }}
                        className="px-2 py-0.5 text-[11px] font-mono bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 rounded-md transition-colors cursor-pointer"
                        title="Copy only surface and elevation styles"
                      >
                        📐 Surface
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          const themeBlock = `@theme {\n  --color-primary: ${selection.palette.primary};\n  --color-secondary: ${selection.palette.secondary};\n  --color-accent: ${selection.palette.accent};\n  --color-background: ${selection.palette.background};\n  --color-surface: ${selection.palette.surface};\n  --color-border: ${selection.palette.border};\n  --color-text-primary: ${selection.palette.text};\n  --color-text-muted: ${selection.palette.textMuted};\n  --radius-card: ${selection.surface.radius};\n}`;
                          navigator.clipboard.writeText(themeBlock);
                          showToast('Copied Tailwind CSS v4 @theme block!');
                        }}
                        className="px-2 py-0.5 text-[11px] font-mono bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 rounded-md transition-colors cursor-pointer"
                        title="Copy only Tailwind CSS v4 @theme block"
                      >
                        ⚡ @theme
                      </button>
                    </div>

                    {/* Adaptive Copy Button: Changes to Copy Selection when text is highlighted */}
                    {selectedSnippet ? (
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(selectedSnippet);
                          showToast(`Copied highlighted selection (${selectedSnippet.length} chars)!`);
                        }}
                        className="px-3 py-1.5 text-xs font-bold text-amber-950 bg-amber-400 hover:bg-amber-300 border border-amber-500 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer animate-in fade-in shadow-xs active:scale-95"
                        title="Copy the highlighted text"
                      >
                        <Copy className="w-3.5 h-3.5 text-amber-950" />
                        <span>Copy Selection ({selectedSnippet.length > 15 ? `${selectedSnippet.slice(0, 15)}…` : selectedSnippet})</span>
                      </button>
                    ) : (
                      <button
                        onClick={handleCopyCompletePrompt}
                        className="px-3 py-1.5 text-xs font-bold text-stone-900 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-xl flex items-center gap-1.5 transition-transform active:scale-95 cursor-pointer"
                        title="Copy the complete synthesized prompt"
                      >
                        {copiedCombined ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                        ) : (
                          <Copy className="w-3.5 h-3.5 text-stone-700" />
                        )}
                        <span>{copiedCombined ? 'Copied!' : 'Copy Full Prompt'}</span>
                      </button>
                    )}
                  </div>

                  <div className="relative">
                    <pre
                      tabIndex={0}
                      draggable={false}
                      onDragStart={(e) => {
                        e.preventDefault();
                        return false;
                      }}
                      onMouseUp={handleSelectionChange}
                      onKeyUp={handleSelectionChange}
                      style={{
                        userSelect: 'text',
                        WebkitUserSelect: 'text',
                        ...({ WebkitUserDrag: 'none' } as React.CSSProperties),
                      }}
                      className="w-full p-4 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs leading-relaxed border border-stone-800 focus:outline-none focus:ring-1 focus:ring-stone-600 cursor-text select-text overflow-auto max-h-[440px] whitespace-pre-wrap selection:bg-amber-400 selection:text-stone-950 shadow-inner scrollbar-thin"
                    >
                      {combinedMasterPrompt}
                    </pre>
                  </div>

                  <div className="text-[11px] text-stone-500 flex flex-wrap items-center justify-between gap-1">
                    <span>
                      💡 <strong>Tip</strong>: Highlight any character, word, or token directly to copy with <kbd className="px-1 py-0.5 rounded bg-stone-100 border border-stone-300 font-mono text-[10px]">Ctrl+C</kbd> / <kbd className="px-1 py-0.5 rounded bg-stone-100 border border-stone-300 font-mono text-[10px]">⌘C</kbd>, or use the quick copy buttons above.
                    </span>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* =========================================================================
              RIGHT COLUMN: DESIGN PARTS SELECTION LIBRARY (INDEPENDENTLY SCROLLABLE)
              ========================================================================= */}
          <section className="lg:col-span-7 xl:col-span-6 bg-white rounded-2xl border border-stone-200 p-5 sm:p-6 shadow-xs flex flex-col lg:h-full lg:overflow-hidden space-y-4">
            <div className="border-b border-stone-200 pb-3 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold text-stone-900">
                    Design Parts & Style Terminology Library
                  </h2>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Click any style below. The live mockup on the left updates instantly without scrolling away.
                  </p>
                </div>
                <span className="hidden sm:inline-block text-[11px] font-mono text-stone-500 bg-stone-100 px-2 py-1 rounded-lg border border-stone-200">
                  5 Dimensions
                </span>
              </div>
            </div>

            {/* Scrollable Library Area */}
            <div className="lg:flex-1 lg:overflow-y-auto lg:pr-2 pb-6 scrollbar-thin">
              <DesignPartPicker
                selection={selection}
                onSelectPalette={(pal: PalettePart) => setSelection((prev) => ({ ...prev, palette: pal }))}
                onSelectFont={(fnt: FontPart) => setSelection((prev) => ({ ...prev, font: fnt }))}
                onSelectSurface={(surf: SurfacePart) => setSelection((prev) => ({ ...prev, surface: surf }))}
                onSelectComponent={(comp: ComponentPart) => setSelection((prev) => ({ ...prev, components: comp }))}
                onSelectAccent={(acc: AccentPart) => setSelection((prev) => ({ ...prev, accent: acc }))}
                onToast={showToast}
              />
            </div>
          </section>
        </div>
      </main>

      {/* 3. MOBILE FLOATING PREVIEW BUTTON (< lg screens) */}
      <div className="lg:hidden fixed bottom-5 right-5 z-40">
        <button
          type="button"
          onClick={() => {
            const el = document.getElementById('live-mockup-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-4 py-2.5 bg-stone-900 hover:bg-black text-white text-xs font-bold rounded-full shadow-2xl flex items-center gap-2 border border-stone-700 cursor-pointer"
        >
          <span>👁 View Live Mockup</span>
        </button>
      </div>

      {/* 4. NOTIFICATION TOAST */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-stone-900 text-white px-4 py-2.5 rounded-2xl text-xs font-semibold shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-150 flex items-center gap-2 border border-stone-700">
          <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
