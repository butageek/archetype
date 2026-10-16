'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  Camera,
  Check,
  Code2,
  Copy,
  Download,
  Layers,
  Palette,
  Sparkles,
  Terminal,
  X,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { WebAppMockupSpecimen } from '../types/mockup';
import {
  copyMockupScreenshotToClipboard,
  downloadMockupAsPng,
} from '../lib/screenshotHelper';

interface MockupInspectorModalProps {
  specimen: WebAppMockupSpecimen;
  onClose: () => void;
  onToast: (msg: string) => void;
}

export function MockupInspectorModal({
  specimen,
  onClose,
  onToast,
}: MockupInspectorModalProps) {
  const mockupRef = useRef<HTMLDivElement>(null);
  const [copyingImage, setCopyingImage] = useState<boolean>(false);
  const [downloadingImage, setDownloadingImage] = useState<boolean>(false);
  const [copiedPrompt, setCopiedPrompt] = useState<boolean>(false);
  const [copiedTokens, setCopiedTokens] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'prompt' | 'tokens' | 'specs'>('prompt');

  // Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // 1-Click Copy Screenshot to Clipboard
  const handleCopyScreenshot = async () => {
    if (!mockupRef.current) return;
    setCopyingImage(true);

    try {
      const res = await copyMockupScreenshotToClipboard(
        mockupRef.current,
        `${specimen.id}-mockup.png`
      );

      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.8 },
        colors: [specimen.palette.primary, specimen.palette.secondary, '#10B981'],
      });

      if (res.method === 'clipboard') {
        onToast(`Copied screenshot to clipboard! Ready to paste into Claude, Cursor, or Slack.`);
      } else {
        onToast(`Downloaded screenshot as PNG.`);
      }
    } catch {
      onToast(`Failed to capture screenshot.`);
    } finally {
      setTimeout(() => setCopyingImage(false), 1500);
    }
  };

  // Download PNG file directly
  const handleDownloadPng = async () => {
    if (!mockupRef.current) return;
    setDownloadingImage(true);

    try {
      await downloadMockupAsPng(mockupRef.current, `${specimen.id}-specimen.png`);
      onToast(`Saved "${specimen.title}" as PNG image!`);
    } catch {
      onToast(`Failed to download image.`);
    } finally {
      setTimeout(() => setDownloadingImage(false), 1500);
    }
  };

  // 1-Click Copy Agent Prompt
  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(specimen.agentPrompt);
    setCopiedPrompt(true);

    confetti({
      particleCount: 35,
      spread: 50,
      origin: { y: 0.8 },
      colors: [specimen.palette.primary, '#10B981'],
    });

    onToast(`Copied AI Agent prompt for "${specimen.title}"!`);
    setTimeout(() => setCopiedPrompt(false), 1800);
  };

  // 1-Click Copy Tailwind Tokens
  const handleCopyTokens = () => {
    navigator.clipboard.writeText(specimen.tailwindTokens);
    setCopiedTokens(true);
    onToast(`Copied Tailwind CSS v4 tokens!`);
    setTimeout(() => setCopiedTokens(false), 1800);
  };

  // Copy individual hex code
  const handleCopyHex = (hex: string, label: string) => {
    navigator.clipboard.writeText(hex);
    onToast(`Copied ${label} color: ${hex}`);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-5xl bg-white border border-stone-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-stone-900 my-auto max-h-[92vh]"
      >
        {/* Modal Header Toolbar */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex flex-wrap items-center justify-between gap-3 bg-stone-50/80">
          <div>
            <div className="flex items-center gap-2.5">
              <h2 className="text-base sm:text-lg font-bold text-stone-950">
                {specimen.title}
              </h2>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-stone-200 text-stone-700">
                {specimen.categoryLabel}
              </span>
            </div>
            <p className="text-xs text-stone-500 mt-0.5">
              {specimen.tagline}
            </p>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-2">
            {/* Copy Screenshot Button */}
            <button
              onClick={handleCopyScreenshot}
              disabled={copyingImage}
              className="px-3.5 py-2 bg-stone-900 hover:bg-black text-white text-xs font-bold rounded-xl cursor-pointer flex items-center gap-1.5 shadow-sm transition-transform active:scale-95"
              title="Capture and copy screenshot to clipboard"
            >
              {copyingImage ? (
                <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
              ) : (
                <Camera className="w-3.5 h-3.5" />
              )}
              <span>{copyingImage ? 'Copied Image!' : 'Copy Screenshot'}</span>
            </button>

            {/* Download PNG */}
            <button
              onClick={handleDownloadPng}
              disabled={downloadingImage}
              className="p-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl cursor-pointer border border-stone-200 transition-colors"
              title="Download high-res PNG file"
            >
              <Download className="w-4 h-4" />
            </button>

            {/* Copy Prompt Button */}
            <button
              onClick={handleCopyPrompt}
              className="px-3.5 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-xl cursor-pointer border border-stone-200 transition-colors flex items-center gap-1.5"
              title="Copy prompt for AI agent"
            >
              {copiedPrompt ? (
                <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
              ) : (
                <Sparkles className="w-3.5 h-3.5 text-stone-700" />
              )}
              <span>{copiedPrompt ? 'Copied Prompt!' : 'Copy Prompt'}</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-stone-400 hover:text-stone-800 hover:bg-stone-100 cursor-pointer border border-transparent hover:border-stone-200 transition-all ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Viewport */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          {/* 1. THE HIGH-FIDELITY LIVE MOCKUP FRAME */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-400 font-mono">
                Live Interactive UI Specimen
              </span>
              <span className="text-[11px] text-stone-500">
                💡 Tip: Click <strong>&quot;Copy Screenshot&quot;</strong> above to paste directly into Cursor or Claude
              </span>
            </div>

            {/* Snapshot target container */}
            <div
              ref={mockupRef}
              className="w-full min-h-[380px] sm:min-h-[420px] rounded-2xl border border-stone-300 shadow-md overflow-hidden bg-stone-100 flex flex-col"
            >
              {specimen.renderInteractive({ isPreview: false })}
            </div>
          </div>

          {/* 2. COLOR PALETTE SWATCHES */}
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 sm:p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-stone-700" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700 font-mono">
                Color Palette & Tokens (Click to Copy Hex)
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2.5">
              {[
                { label: 'Primary', hex: specimen.palette.primary },
                { label: 'Secondary', hex: specimen.palette.secondary },
                { label: 'Accent', hex: specimen.palette.accent },
                { label: 'Background', hex: specimen.palette.background },
                { label: 'Surface', hex: specimen.palette.surface },
                { label: 'Border', hex: specimen.palette.border },
              ].map((swatch, idx) => (
                <div
                  key={idx}
                  onClick={() => handleCopyHex(swatch.hex, swatch.label)}
                  className="p-2.5 bg-white rounded-xl border border-stone-200 flex items-center gap-2 cursor-pointer hover:border-stone-400 hover:shadow-xs transition-all group"
                >
                  <div
                    className="w-5 h-5 rounded-md border border-black/10 shadow-2xs flex-shrink-0"
                    style={{ backgroundColor: swatch.hex }}
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] text-stone-500 font-medium truncate">
                      {swatch.label}
                    </span>
                    <span className="text-xs font-mono font-bold text-stone-900 group-hover:text-blue-600 truncate">
                      {swatch.hex}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. TABS: AGENT PROMPT / TAILWIND TOKENS / SPEC SUMMARY */}
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 sm:p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('prompt')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors flex items-center gap-1.5 ${
                    activeTab === 'prompt'
                      ? 'bg-stone-900 text-white font-bold'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>AI Agent Master Prompt</span>
                </button>

                <button
                  onClick={() => setActiveTab('tokens')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors flex items-center gap-1.5 ${
                    activeTab === 'tokens'
                      ? 'bg-stone-900 text-white font-bold'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Tailwind v4 @theme</span>
                </button>

                <button
                  onClick={() => setActiveTab('specs')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors flex items-center gap-1.5 ${
                    activeTab === 'specs'
                      ? 'bg-stone-900 text-white font-bold'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Design Rules</span>
                </button>
              </div>

              {/* Tab Copy Button */}
              {activeTab === 'prompt' && (
                <button
                  onClick={handleCopyPrompt}
                  className="px-2.5 py-1 text-xs font-semibold text-stone-700 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3 h-3" />
                  <span>Copy Prompt</span>
                </button>
              )}

              {activeTab === 'tokens' && (
                <button
                  onClick={handleCopyTokens}
                  className="px-2.5 py-1 text-xs font-semibold text-stone-700 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg flex items-center gap-1 cursor-pointer"
                >
                  {copiedTokens ? (
                    <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                  <span>{copiedTokens ? 'Copied!' : 'Copy CSS'}</span>
                </button>
              )}
            </div>

            {/* Tab 1: Agent Prompt */}
            {activeTab === 'prompt' && (
              <div className="relative">
                <pre className="p-4 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-60 select-all">
                  {specimen.agentPrompt}
                </pre>
              </div>
            )}

            {/* Tab 2: Tailwind Tokens */}
            {activeTab === 'tokens' && (
              <div className="relative">
                <pre className="p-4 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-60 select-all">
                  {specimen.tailwindTokens}
                </pre>
              </div>
            )}

            {/* Tab 3: Design Rules */}
            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-white border border-stone-200 rounded-xl space-y-1">
                  <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                    Typography Pairing
                  </span>
                  <div className="font-bold text-stone-900">{specimen.typography.heading}</div>
                  <div className="text-stone-500">{specimen.typography.mono}</div>
                </div>

                <div className="p-3 bg-white border border-stone-200 rounded-xl space-y-1">
                  <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                    Surface & Borders
                  </span>
                  <div className="font-bold text-stone-900">
                    Radius: {specimen.style.radius}
                  </div>
                  <div className="text-stone-500">
                    Borders: {specimen.style.borderWidth} {specimen.style.borderStyle}
                  </div>
                </div>

                <div className="p-3 bg-white border border-stone-200 rounded-xl space-y-1">
                  <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                    Signature Accents
                  </span>
                  <div className="font-bold text-stone-900">
                    {specimen.accents.join(' • ')}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
