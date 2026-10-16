'use client';

import React, { useState } from 'react';
import {
  Check,
  Code2,
  Copy,
  Dices,
  FileCode,
  Layers,
  Search,
  Terminal,
  Wand2,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { DesignComposition } from '../types/design';
import {
  DEFAULT_COMPOSITION,
  generateAgentPrompt,
  generateFullDesignSpec,
} from '../lib/modularPresets';
import {
  getRandomComposition,
  synthesizeCompositionFromPrompt,
} from '../lib/modularSynthesizer';
import { LiveDesignMockup } from '../components/LiveDesignMockup';
import { ModularGallery } from '../components/ModularGallery';
import { AgentExportModal } from '../components/AgentExportModal';

export default function ArchetypePortal() {
  const [composition, setComposition] = useState<DesignComposition>(DEFAULT_COMPOSITION);
  const [promptInput, setPromptInput] = useState<string>('');
  const [exportModalOpen, setExportModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.8 },
      colors: [composition.palette.primary, composition.palette.secondary, '#10B981'],
    });
  };

  // 1-Click Copy Agent Prompt
  const handleCopyAgentPrompt = () => {
    const prompt = generateAgentPrompt(composition);
    navigator.clipboard.writeText(prompt);
    triggerConfetti();
    showToast('Copied Agent Prompt! Ready to paste into Cursor / Claude / Antigravity.');
  };

  // 1-Click Copy Design Spec Markdown
  const handleCopyDesignSpec = () => {
    const spec = generateFullDesignSpec(composition);
    navigator.clipboard.writeText(spec);
    triggerConfetti();
    showToast('Copied STYLE_SPEC.md! Ready to paste into your codebase or agent docs.');
  };

  // Surprise Me Randomizer
  const handleSurpriseMe = () => {
    const randomComp = getRandomComposition();
    setComposition(randomComp);
    triggerConfetti();
    showToast(`Assembled "${randomComp.palette.name}" + "${randomComp.style.name}"!`);
  };

  // Synthesize from Prompt
  const handleSynthesizePrompt = (overrideText?: string) => {
    const text = overrideText || promptInput;
    if (!text.trim()) return;
    const synthesized = synthesizeCompositionFromPrompt(text);
    setComposition(synthesized);
    triggerConfetti();
    showToast(`Synthesized aesthetic for "${text.slice(0, 35)}..."`);
  };

  // Blend into Current
  const handleBlendPrompt = () => {
    if (!promptInput.trim()) return;
    const blended = synthesizeCompositionFromPrompt(promptInput, composition);
    setComposition(blended);
    triggerConfetti();
    showToast('Blended prompt nuances into current design.');
  };

  const inspirationPrompts = [
    'Tokyo cyberpunk rain alleyway with neon cyan and magenta',
    '1970s Dieter Rams Braun audio monitor with matte pebble gray',
    'Swiss International Typographic magazine with Zurich red',
    'Solarpunk greenhouse botanical conservatory with sage clay',
    'Scandinavian minimalist ceramic studio with quiet slate',
    'NASA Apollo Lunar Guidance computer with titanium telemetry',
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-stone-900 selection:text-white pb-16">
      {/* 1. TOP PORTAL HEADER */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-stone-200 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-stone-900 flex items-center justify-center font-black text-xs text-white shadow-xs">
            ▲
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-stone-950 font-mono">
                ARCHETYPE
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-stone-100 text-stone-600 font-semibold border border-stone-200">
                Design Idea Portal
              </span>
            </div>
            <p className="text-[11px] text-stone-500 hidden sm:block">
              Modular UI specimens & prompt synthesizer for AI coding agents
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Surprise Me Button */}
          <button
            onClick={handleSurpriseMe}
            className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-xs font-semibold cursor-pointer flex items-center gap-1.5 transition-colors border border-stone-300/80"
            title="Randomly assemble a fresh design combination"
          >
            <Dices className="w-3.5 h-3.5 text-stone-700" />
            <span className="hidden sm:inline">Surprise Me</span>
          </button>

          {/* Core Action: Copy Agent Prompt */}
          <button
            onClick={handleCopyAgentPrompt}
            className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-bold cursor-pointer flex items-center gap-1.5 shadow-sm transition-transform active:scale-95"
            title="Copy ready-to-paste AI agent prompt"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Copy Agent Prompt</span>
          </button>

          {/* Quick Action: Copy Spec */}
          <button
            onClick={handleCopyDesignSpec}
            className="px-2.5 py-1.5 bg-white hover:bg-stone-100 text-stone-700 rounded-lg text-xs font-semibold cursor-pointer border border-stone-200 transition-colors hidden md:flex items-center gap-1.5"
            title="Copy STYLE_SPEC.md with CSS variables and Tailwind tokens"
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>Copy Spec</span>
          </button>

          {/* Full Modal */}
          <button
            onClick={() => setExportModalOpen(true)}
            className="p-1.5 bg-white hover:bg-stone-100 text-stone-600 rounded-lg text-xs cursor-pointer border border-stone-200"
            title="View full specification & code blueprints"
          >
            <Code2 className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* 2. MAIN CONTAINER */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 space-y-8">
        {/* PROMPT SYNTHESIZER & BLENDER */}
        <section className="bg-white rounded-2xl border border-stone-200/90 p-4 sm:p-5 shadow-xs space-y-3">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
              <input
                type="text"
                placeholder="Type an aesthetic prompt (e.g. '1970s Braun Dieter Rams audio monitor', 'Tokyo neon cyan alleyway', 'Scandinavian pottery studio')..."
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSynthesizePrompt()}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 outline-none focus:border-stone-900 focus:bg-white transition-all"
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => handleSynthesizePrompt()}
                disabled={!promptInput.trim()}
                className="flex-1 sm:flex-none px-4 py-2 bg-stone-900 hover:bg-stone-800 disabled:opacity-40 text-white font-bold text-xs rounded-xl cursor-pointer flex items-center justify-center gap-1.5 shadow-xs transition-transform active:scale-95"
              >
                <Wand2 className="w-3.5 h-3.5" />
                <span>Synthesize</span>
              </button>

              <button
                onClick={handleBlendPrompt}
                disabled={!promptInput.trim()}
                className="flex-1 sm:flex-none px-3.5 py-2 bg-stone-100 hover:bg-stone-200 disabled:opacity-40 text-stone-700 font-semibold text-xs rounded-xl cursor-pointer border border-stone-200 transition-colors"
                title="Blend prompt into the currently selected design elements"
              >
                <span>Blend</span>
              </button>
            </div>
          </div>

          {/* Prompt Inspiration Chips */}
          <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 font-bold mr-1">
              Quick Inspirations:
            </span>
            {inspirationPrompts.map((p) => (
              <button
                key={p}
                onClick={() => {
                  setPromptInput(p);
                  handleSynthesizePrompt(p);
                }}
                className="px-2.5 py-1 text-[11px] rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
              >
                {p.split(' ')[0]} {p.split(' ')[1]}
              </button>
            ))}
          </div>
        </section>

        {/* COMPLETE DESIGN MOCKUP SECTION */}
        <section className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-stone-900">Live Design Mockup</h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                  Synthesized Specimen
                </span>
              </div>
              <p className="text-xs text-stone-500">
                Formed by: <strong>{composition.palette.name}</strong> • <strong>{composition.layout.name}</strong> • <strong>{composition.style.name}</strong> • <strong>{composition.font.name}</strong>
              </p>
            </div>

            {/* Direct Copy Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyAgentPrompt}
                className="px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold cursor-pointer flex items-center gap-1.5 shadow-xs transition-transform active:scale-95"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Agent Prompt</span>
              </button>
              <button
                onClick={handleCopyDesignSpec}
                className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold cursor-pointer border border-stone-200 transition-colors"
              >
                <span>Copy Spec (Markdown)</span>
              </button>
            </div>
          </div>

          {/* Screenshot Tip Banner */}
          <div className="text-[11px] bg-stone-100/80 text-stone-600 px-3.5 py-2 rounded-xl border border-stone-200 flex items-center justify-between">
            <span>
              💡 <strong>AI Agent Workflow</strong>: Take a screenshot of the mockup below, then paste it alongside the copied prompt into your agent tool!
            </span>
            <span className="font-mono text-[10px] text-stone-500 hidden sm:inline">No manual token tweaking required</span>
          </div>

          {/* The High-Fidelity Mockup Container */}
          <LiveDesignMockup composition={composition} />
        </section>

        {/* MODULAR CATEGORY GALLERY */}
        <section className="bg-white rounded-2xl border border-stone-200 p-5 sm:p-6 shadow-xs space-y-4">
          <div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-stone-800" />
              <h2 className="text-base font-bold text-stone-900">Design Parts Gallery</h2>
            </div>
            <p className="text-xs text-stone-500 mt-0.5">
              Click any element below to swap out parts. The complete design mockup above updates instantly.
            </p>
          </div>

          <ModularGallery composition={composition} onChange={setComposition} />
        </section>
      </main>

      {/* 3. NOTIFICATION TOAST */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-stone-900 text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-150 flex items-center gap-2 border border-stone-700">
          <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 4. AGENT EXPORT MODAL */}
      {exportModalOpen && (
        <AgentExportModal
          composition={composition}
          onClose={() => setExportModalOpen(false)}
        />
      )}
    </div>
  );
}
