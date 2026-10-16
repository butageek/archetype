'use client';

import { useMemo, useState } from 'react';
import {
  Check,
  ChevronDown,
  Copy,
  Dices,
  Sparkles,
  Terminal,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  ACCENT_PARTS,
  COMPONENT_PARTS,
  CURATED_THEMES,
  DEFAULT_DESIGN_PARTS,
  FONT_PARTS,
  generateCombinedMasterPrompt,
  PALETTE_PARTS,
  resolveCuratedTheme,
  SURFACE_PARTS,
} from '../lib/designPartsData';
import {
  AccentPart,
  ComponentPart,
  CuratedTheme,
  DesignPartCategory,
  DesignPartsSelection,
  FontPart,
  PalettePart,
  SurfacePart,
} from '../types/designParts';
import { LiveCombinedPreview } from '../components/LiveCombinedPreview';
import { DesignPartPicker } from '../components/DesignPartPicker';

export default function ArchetypeSynthesizerPage() {
  const [selection, setSelection] = useState<DesignPartsSelection>(DEFAULT_DESIGN_PARTS);
  const [activeCategory, setActiveCategory] = useState<DesignPartCategory>('palette');
  const [surpriseMenuOpen, setSurpriseMenuOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedCombined, setCopiedCombined] = useState<boolean>(false);
  const [leftTab, setLeftTab] = useState<'mockup' | 'prompt'>('mockup');
  const [previewScale, setPreviewScale] = useState<'fit' | '100%'>('fit');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3200);
  };

  // Check if current selection matches one of the prebuilt curated themes
  const activeCuratedTheme = useMemo(() => {
    return CURATED_THEMES.find(
      (t) =>
        t.paletteId === selection.palette.id &&
        t.fontId === selection.font.id &&
        t.surfaceId === selection.surface.id &&
        t.componentId === selection.components.id &&
        t.accentId === selection.accent.id
    );
  }, [selection]);

  // Apply a prebuilt curated theme across all 5 categories at once
  const handleApplyTheme = (theme: CuratedTheme) => {
    const newSelection = resolveCuratedTheme(theme);
    setSelection(newSelection);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: [theme.accentColor, newSelection.palette.primary, newSelection.palette.accent],
    });
    showToast(`Applied Curated Theme: "${theme.name}"!`);
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

  // Randomize a single category while preserving the other 4
  const handleRandomizeCategory = (category: DesignPartCategory) => {
    if (category === 'themes') {
      const candidates = CURATED_THEMES.filter((t) => t.id !== activeCuratedTheme?.id);
      const nextTheme = candidates[Math.floor(Math.random() * candidates.length)] || CURATED_THEMES[0];
      handleApplyTheme(nextTheme);
    } else if (category === 'palette') {
      const candidates = PALETTE_PARTS.filter((p) => p.id !== selection.palette.id);
      const next = candidates[Math.floor(Math.random() * candidates.length)] || PALETTE_PARTS[0];
      setSelection((prev) => ({ ...prev, palette: next }));
      confetti({
        particleCount: 25,
        spread: 45,
        origin: { y: 0.8 },
        colors: [next.primary, next.secondary, next.accent],
      });
      showToast(`Randomized Palette to "${next.name}"`);
    } else if (category === 'font') {
      const candidates = FONT_PARTS.filter((f) => f.id !== selection.font.id);
      const next = candidates[Math.floor(Math.random() * candidates.length)] || FONT_PARTS[0];
      setSelection((prev) => ({ ...prev, font: next }));
      showToast(`Randomized Typography to "${next.name}"`);
    } else if (category === 'surface') {
      const candidates = SURFACE_PARTS.filter((s) => s.id !== selection.surface.id);
      const next = candidates[Math.floor(Math.random() * candidates.length)] || SURFACE_PARTS[0];
      setSelection((prev) => ({ ...prev, surface: next }));
      showToast(`Randomized Surface to "${next.name}"`);
    } else if (category === 'components') {
      const candidates = COMPONENT_PARTS.filter((c) => c.id !== selection.components.id);
      const next = candidates[Math.floor(Math.random() * candidates.length)] || COMPONENT_PARTS[0];
      setSelection((prev) => ({ ...prev, components: next }));
      showToast(`Randomized Controls to "${next.name}"`);
    } else if (category === 'accents') {
      const candidates = ACCENT_PARTS.filter((a) => a.id !== selection.accent.id);
      const next = candidates[Math.floor(Math.random() * candidates.length)] || ACCENT_PARTS[0];
      setSelection((prev) => ({ ...prev, accent: next }));
      showToast(`Randomized Accent to "${next.name}"`);
    }
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
            {/* Surprise Me Split Dropdown */}
            <div className="relative">
              <div className="inline-flex items-center rounded-xl border border-stone-300 bg-stone-100 shadow-2xs divide-x divide-stone-300">
                <button
                  type="button"
                  onClick={handleSurpriseMe}
                  className="px-3 py-1.5 hover:bg-stone-200 text-stone-800 rounded-l-xl text-xs font-semibold cursor-pointer flex items-center gap-1.5 transition-colors"
                  title="Randomly pick all 5 design parts at once"
                >
                  <Dices className="w-3.5 h-3.5 text-stone-700" />
                  <span>Surprise Me</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSurpriseMenuOpen((prev) => !prev)}
                  className="px-2 py-1.5 hover:bg-stone-200 text-stone-800 rounded-r-xl text-xs cursor-pointer transition-colors flex items-center justify-center"
                  title="More randomize options (tweak individual categories)"
                  aria-expanded={surpriseMenuOpen}
                >
                  <ChevronDown className={`w-3.5 h-3.5 text-stone-700 transition-transform duration-150 ${surpriseMenuOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {surpriseMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setSurpriseMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-1.5 w-64 bg-white rounded-xl border border-stone-200 shadow-xl z-50 py-1.5 text-xs text-stone-800 animate-in fade-in zoom-in-95 duration-100 divide-y divide-stone-100">
                    <div className="py-1">
                      <div className="px-3 py-1 text-[10px] font-mono font-bold text-stone-500 uppercase tracking-wider">
                        Full Composition
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          handleSurpriseMe();
                          setSurpriseMenuOpen(false);
                        }}
                        className="w-full text-left px-3 py-1.5 hover:bg-stone-100 flex items-center justify-between cursor-pointer font-medium"
                      >
                        <span className="flex items-center gap-2">
                          <Dices className="w-3.5 h-3.5 text-stone-500" />
                          <span>Surprise All (5 Parts)</span>
                        </span>
                        <span className="text-[10px] font-mono text-stone-500">All</span>
                      </button>
                    </div>

                    <div className="py-1">
                      <div className="px-3 py-1 text-[10px] font-mono font-bold text-stone-500 uppercase tracking-wider">
                        Tweak Individual Category
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveCategory('themes');
                          setSurpriseMenuOpen(false);
                        }}
                        className="w-full text-left px-3 py-1.5 hover:bg-stone-100 flex items-center justify-between cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          <span>✨</span>
                          <span>Curated Themes</span>
                        </span>
                        <span className="text-[10px] font-mono text-stone-500">
                          {CURATED_THEMES.length} Presets
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          handleRandomizeCategory('palette');
                          setActiveCategory('palette');
                          setSurpriseMenuOpen(false);
                        }}
                        className="w-full text-left px-3 py-1.5 hover:bg-stone-100 flex items-center justify-between cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          <span>🎨</span>
                          <span>Randomize Palette</span>
                        </span>
                        <span className="text-[10px] font-mono text-stone-500 truncate max-w-[90px]">
                          {selection.palette.name}
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          handleRandomizeCategory('font');
                          setActiveCategory('font');
                          setSurpriseMenuOpen(false);
                        }}
                        className="w-full text-left px-3 py-1.5 hover:bg-stone-100 flex items-center justify-between cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          <span>🔤</span>
                          <span>Randomize Typography</span>
                        </span>
                        <span className="text-[10px] font-mono text-stone-500 truncate max-w-[90px]">
                          {selection.font.name}
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          handleRandomizeCategory('surface');
                          setActiveCategory('surface');
                          setSurpriseMenuOpen(false);
                        }}
                        className="w-full text-left px-3 py-1.5 hover:bg-stone-100 flex items-center justify-between cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          <span>📐</span>
                          <span>Randomize Surface</span>
                        </span>
                        <span className="text-[10px] font-mono text-stone-500 truncate max-w-[90px]">
                          {selection.surface.name}
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          handleRandomizeCategory('components');
                          setActiveCategory('components');
                          setSurpriseMenuOpen(false);
                        }}
                        className="w-full text-left px-3 py-1.5 hover:bg-stone-100 flex items-center justify-between cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          <span>🧩</span>
                          <span>Randomize Controls</span>
                        </span>
                        <span className="text-[10px] font-mono text-stone-500 truncate max-w-[90px]">
                          {selection.components.name}
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          handleRandomizeCategory('accents');
                          setActiveCategory('accents');
                          setSurpriseMenuOpen(false);
                        }}
                        className="w-full text-left px-3 py-1.5 hover:bg-stone-100 flex items-center justify-between cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          <span>✨</span>
                          <span>Randomize Accent</span>
                        </span>
                        <span className="text-[10px] font-mono text-stone-500 truncate max-w-[90px]">
                          {selection.accent.name}
                        </span>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

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
            className="lg:col-span-6 xl:col-span-6 flex flex-col space-y-3 lg:h-full lg:overflow-y-auto lg:pr-2 scrollbar-thin"
          >
            {/* The Main Studio Card */}
            <div className="bg-white rounded-2xl border border-stone-200 p-3 sm:p-4 shadow-xs space-y-2.5">
              {/* Studio Card Header: Title & View Mode / Scale Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-2.5">
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

                {/* View & Scale Switchers */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  {/* Scale control (only for mockup view) */}
                  {leftTab === 'mockup' && (
                    <div className="flex items-center gap-0.5 p-0.5 bg-stone-100 rounded-lg border border-stone-200 text-[11px] font-mono">
                      <button
                        type="button"
                        onClick={() => setPreviewScale('fit')}
                        className={`px-2 py-1 rounded font-semibold cursor-pointer transition-colors ${
                          previewScale === 'fit'
                            ? 'bg-white text-stone-900 shadow-2xs font-bold'
                            : 'text-stone-500 hover:text-stone-900'
                        }`}
                        title="Automatically fit full preview into view without vertical scroll"
                      >
                        Fit View
                      </button>
                      <button
                        type="button"
                        onClick={() => setPreviewScale('100%')}
                        className={`px-2 py-1 rounded font-semibold cursor-pointer transition-colors ${
                          previewScale === '100%'
                            ? 'bg-white text-stone-900 shadow-2xs font-bold'
                            : 'text-stone-500 hover:text-stone-900'
                        }`}
                        title="Display preview at 100% 1:1 pixel scale"
                      >
                        100%
                      </button>
                    </div>
                  )}

                  {/* View Mode Switcher: Mockup vs Master Prompt */}
                  <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-xl border border-stone-200 text-xs">
                    <button
                      type="button"
                      onClick={() => setLeftTab('mockup')}
                      className={`px-2.5 py-1.5 rounded-lg font-semibold cursor-pointer transition-all flex items-center gap-1.5 ${
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
                      className={`px-2.5 py-1.5 rounded-lg font-semibold cursor-pointer transition-all flex items-center gap-1.5 ${
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
              </div>

              {/* TAB 1: LIVE COMBINED MOCKUP VIEWPORT */}
              {leftTab === 'mockup' && (
                <div className="space-y-2.5 animate-in fade-in duration-150">
                  {/* Scaled Specimen Wrapper to fit on smaller viewports */}
                  <div
                    className={`overflow-hidden rounded-2xl ${
                      previewScale === 'fit'
                        ? 'origin-top scale-[0.88] sm:scale-[0.92] xl:scale-100 transition-transform duration-150 -mb-9 sm:-mb-6 xl:mb-0'
                        : 'transition-transform duration-150'
                    }`}
                  >
                    <LiveCombinedPreview selection={selection} />
                  </div>

                  {/* Sleek Integrated Toolbar: Active Theme / Archetype & 1-Click Pillar Re-Rolls */}
                  <div className="flex flex-wrap items-center justify-between gap-1.5 pt-1 text-[11px] font-mono border-t border-stone-100">
                    <div className="flex items-center gap-1.5 min-w-0">
                      {activeCuratedTheme ? (
                        <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200 font-semibold truncate">
                          <Sparkles className="w-3 h-3 text-amber-600 shrink-0" />
                          <span className="truncate">Theme: <strong>{activeCuratedTheme.name}</strong></span>
                          <span className="text-[9px] px-1 py-0.2 rounded bg-white text-amber-800 border border-amber-200 font-bold shrink-0">
                            {activeCuratedTheme.badge}
                          </span>
                        </span>
                      ) : (
                        <span className="text-stone-500 font-medium px-1 truncate">
                          Custom Composition • <strong>5 Pillars</strong>
                        </span>
                      )}
                    </div>

                    {/* Compact Inline Dice Buttons to tweak each pillar */}
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => {
                          handleRandomizeCategory('palette');
                          setActiveCategory('palette');
                        }}
                        className="px-2 py-0.5 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 cursor-pointer transition-colors flex items-center gap-1"
                        title={`Palette: ${selection.palette.name} (Click to randomize)`}
                      >
                        <span>🎨</span>
                        <span className="hidden sm:inline text-[10px] font-bold">Palette</span>
                        <Dices className="w-2.5 h-2.5 text-stone-500" />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          handleRandomizeCategory('font');
                          setActiveCategory('font');
                        }}
                        className="px-2 py-0.5 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 cursor-pointer transition-colors flex items-center gap-1"
                        title={`Typography: ${selection.font.name} (Click to randomize)`}
                      >
                        <span>🔤</span>
                        <span className="hidden sm:inline text-[10px] font-bold">Type</span>
                        <Dices className="w-2.5 h-2.5 text-stone-500" />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          handleRandomizeCategory('surface');
                          setActiveCategory('surface');
                        }}
                        className="px-2 py-0.5 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 cursor-pointer transition-colors flex items-center gap-1"
                        title={`Surface: ${selection.surface.name} (Click to randomize)`}
                      >
                        <span>📐</span>
                        <span className="hidden sm:inline text-[10px] font-bold">Surface</span>
                        <Dices className="w-2.5 h-2.5 text-stone-500" />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          handleRandomizeCategory('components');
                          setActiveCategory('components');
                        }}
                        className="px-2 py-0.5 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 cursor-pointer transition-colors flex items-center gap-1"
                        title={`Controls: ${selection.components.name} (Click to randomize)`}
                      >
                        <span>🧩</span>
                        <span className="hidden sm:inline text-[10px] font-bold">Controls</span>
                        <Dices className="w-2.5 h-2.5 text-stone-500" />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          handleRandomizeCategory('accents');
                          setActiveCategory('accents');
                        }}
                        className="px-2 py-0.5 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 cursor-pointer transition-colors flex items-center gap-1"
                        title={`Accent: ${selection.accent.name} (Click to randomize)`}
                      >
                        <span>✨</span>
                        <span className="hidden sm:inline text-[10px] font-bold">Accent</span>
                        <Dices className="w-2.5 h-2.5 text-stone-500" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: SYNTHESIZED AGENT MASTER PROMPT VIEW */}
              {leftTab === 'prompt' && (
                <div className="space-y-3 animate-in fade-in duration-150">
                  {/* Row 1: Directives label and Copy Full Prompt button */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs text-stone-500 font-medium truncate">
                      Plain-text design directives + Tailwind CSS v4 @theme block:
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyCompletePrompt}
                      className="px-3.5 py-1.5 text-xs font-bold text-stone-900 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-xl flex items-center gap-1.5 transition-transform active:scale-95 cursor-pointer shadow-xs flex-shrink-0"
                      title="Copy the complete synthesized prompt"
                    >
                      {copiedCombined ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-stone-700" />
                      )}
                      <span>{copiedCombined ? 'Copied Full Prompt!' : 'Copy Full Prompt'}</span>
                    </button>
                  </div>

                  {/* Row 2: Dedicated Category Part Copy Chips */}
                  <div className="flex items-center gap-1.5 flex-wrap pt-1 border-t border-stone-100">
                    <span className="text-[10px] font-mono font-bold text-stone-500 uppercase tracking-wider mr-0.5">
                      Copy Part:
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(selection.palette.promptSnippet);
                        showToast(`Copied Palette tokens (${selection.palette.name})!`);
                      }}
                      className="px-2.5 py-1 text-[11px] font-mono bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 rounded-lg transition-colors cursor-pointer flex items-center gap-1"
                      title="Copy only color palette tokens"
                    >
                      <span>🎨</span> <span>Palette</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(selection.font.promptSnippet);
                        showToast(`Copied Typography rules (${selection.font.name})!`);
                      }}
                      className="px-2.5 py-1 text-[11px] font-mono bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 rounded-lg transition-colors cursor-pointer flex items-center gap-1"
                      title="Copy only typography rules"
                    >
                      <span>🔤</span> <span>Typography</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(selection.surface.promptSnippet);
                        showToast(`Copied Surface specifications (${selection.surface.name})!`);
                      }}
                      className="px-2.5 py-1 text-[11px] font-mono bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 rounded-lg transition-colors cursor-pointer flex items-center gap-1"
                      title="Copy only surface and elevation styles"
                    >
                      <span>📐</span> <span>Surface</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(selection.components.promptSnippet);
                        showToast(`Copied UI Controls specification (${selection.components.name})!`);
                      }}
                      className="px-2.5 py-1 text-[11px] font-mono bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 rounded-lg transition-colors cursor-pointer flex items-center gap-1"
                      title="Copy only UI component and control styles"
                    >
                      <span>🧩</span> <span>Controls</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(selection.accent.promptSnippet);
                        showToast(`Copied Accent style (${selection.accent.name})!`);
                      }}
                      className="px-2.5 py-1 text-[11px] font-mono bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 rounded-lg transition-colors cursor-pointer flex items-center gap-1"
                      title="Copy only signature graphic accent styles"
                    >
                      <span>✨</span> <span>Accent</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const themeBlock = `@theme {\n  --color-primary: ${selection.palette.primary};\n  --color-secondary: ${selection.palette.secondary};\n  --color-accent: ${selection.palette.accent};\n  --color-background: ${selection.palette.background};\n  --color-surface: ${selection.palette.surface};\n  --color-border: ${selection.palette.border};\n  --color-text-primary: ${selection.palette.text};\n  --color-text-muted: ${selection.palette.textMuted};\n  --radius-card: ${selection.surface.radius};\n}`;
                        navigator.clipboard.writeText(themeBlock);
                        showToast('Copied Tailwind CSS v4 @theme block!');
                      }}
                      className="px-2.5 py-1 text-[11px] font-mono bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 rounded-lg transition-colors cursor-pointer flex items-center gap-1"
                      title="Copy only Tailwind CSS v4 @theme block"
                    >
                      <span>⚡</span> <span>@theme</span>
                    </button>
                  </div>

                  <div className="relative">
                    <pre className="w-full p-4 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs leading-relaxed border border-stone-800 overflow-auto max-h-[440px] whitespace-pre-wrap shadow-inner scrollbar-thin">
                      {combinedMasterPrompt}
                    </pre>
                  </div>

                  <div className="text-[11px] text-stone-500">
                    💡 <strong>Tip</strong>: Click any category pill above to copy that specific part&apos;s prompt, or click <strong>Copy Full Prompt</strong> for the entire synthesized directive.
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* =========================================================================
              RIGHT COLUMN: DESIGN PARTS SELECTION LIBRARY (INDEPENDENTLY SCROLLABLE)
              ========================================================================= */}
          <section className="lg:col-span-6 xl:col-span-6 bg-white rounded-2xl border border-stone-200 p-4 sm:p-5 shadow-xs flex flex-col lg:h-full lg:overflow-hidden space-y-3">
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
                onApplyTheme={handleApplyTheme}
                onToast={showToast}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                onRandomizeCategory={handleRandomizeCategory}
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
