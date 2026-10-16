'use client';

import React, { useRef, useState } from 'react';
import {
  Camera,
  Check,
  Copy,
  Eye,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { WebAppMockupSpecimen } from '../types/mockup';
import { copyMockupScreenshotToClipboard } from '../lib/screenshotHelper';

interface MockupCardProps {
  specimen: WebAppMockupSpecimen;
  onOpenInspector: (specimen: WebAppMockupSpecimen) => void;
  onToast: (msg: string) => void;
}

export function MockupCard({
  specimen,
  onOpenInspector,
  onToast,
}: MockupCardProps) {
  const mockupContainerRef = useRef<HTMLDivElement>(null);
  const [copyingImage, setCopyingImage] = useState<boolean>(false);
  const [copiedPrompt, setCopiedPrompt] = useState<boolean>(false);

  // 1-Click Copy Screenshot to Clipboard
  const handleCopyScreenshot = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!mockupContainerRef.current) return;

    setCopyingImage(true);
    try {
      const res = await copyMockupScreenshotToClipboard(
        mockupContainerRef.current,
        `${specimen.id}-archetype.png`
      );

      confetti({
        particleCount: 35,
        spread: 50,
        origin: { y: 0.8 },
        colors: [specimen.palette.primary, specimen.palette.secondary, '#10B981'],
      });

      if (res.method === 'clipboard') {
        onToast(`Copied "${specimen.title}" screenshot to clipboard! Ready to paste into Claude or Cursor.`);
      } else {
        onToast(`Downloaded "${specimen.title}" screenshot as PNG.`);
      }
    } catch {
      onToast(`Could not copy screenshot.`);
    } finally {
      setTimeout(() => setCopyingImage(false), 1200);
    }
  };

  // 1-Click Copy Agent Prompt
  const handleCopyPrompt = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(specimen.agentPrompt);
    setCopiedPrompt(true);

    confetti({
      particleCount: 30,
      spread: 45,
      origin: { y: 0.8 },
      colors: [specimen.palette.primary, '#10B981'],
    });

    onToast(`Copied AI agent prompt for "${specimen.title}"!`);
    setTimeout(() => setCopiedPrompt(false), 1500);
  };

  return (
    <div
      onClick={() => onOpenInspector(specimen)}
      className="group bg-white rounded-2xl border border-stone-200/90 hover:border-stone-400/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
    >
      {/* Thumbnail Viewport (Dribbble/Figma style shot frame) */}
      <div className="relative w-full aspect-[16/11] bg-stone-100 overflow-hidden border-b border-stone-100">
        {/* Render Live Mini-Mockup */}
        <div
          ref={mockupContainerRef}
          className="w-full h-full transform group-hover:scale-[1.015] transition-transform duration-300 origin-top"
        >
          {specimen.renderInteractive({ isPreview: true })}
        </div>

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2.5 p-4 backdrop-blur-2xs">
          <button
            onClick={handleCopyScreenshot}
            disabled={copyingImage}
            className="px-3.5 py-2 bg-white hover:bg-stone-100 text-stone-900 rounded-xl text-xs font-bold shadow-lg flex items-center gap-1.5 transition-transform active:scale-95 cursor-pointer"
            title="Copy screenshot to clipboard"
          >
            {copyingImage ? (
              <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
            ) : (
              <Camera className="w-3.5 h-3.5 text-stone-700" />
            )}
            <span>{copyingImage ? 'Copied Image!' : 'Copy Image'}</span>
          </button>

          <button
            onClick={handleCopyPrompt}
            className="px-3.5 py-2 bg-stone-900 hover:bg-black text-white rounded-xl text-xs font-bold shadow-lg flex items-center gap-1.5 transition-transform active:scale-95 cursor-pointer"
            title="Copy AI Agent prompt"
          >
            {copiedPrompt ? (
              <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
            ) : (
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            )}
            <span>{copiedPrompt ? 'Copied Prompt!' : 'Copy Prompt'}</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenInspector(specimen);
            }}
            className="p-2 bg-white/90 hover:bg-white text-stone-800 rounded-xl shadow-lg transition-transform active:scale-95 cursor-pointer"
            title="Open full interactive preview"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Card Metadata Footer */}
      <div className="p-4 flex flex-col justify-between flex-1 space-y-2.5">
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-bold text-stone-900 tracking-tight group-hover:text-stone-950 transition-colors">
              {specimen.title}
            </h3>
            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 border border-stone-200">
              {specimen.categoryLabel}
            </span>
          </div>
          <p className="text-xs text-stone-500 line-clamp-1 mt-1 leading-snug">
            {specimen.tagline}
          </p>
        </div>

        {/* Card Footer: Palette Dots & Quick Action Shortcuts */}
        <div className="flex items-center justify-between pt-1 border-t border-stone-100 text-xs">
          {/* Swatches */}
          <div className="flex items-center gap-1.5">
            <div
              className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-2xs"
              style={{ backgroundColor: specimen.palette.primary }}
              title={`Primary: ${specimen.palette.primary}`}
            />
            <div
              className="w-3 h-3 rounded-full border border-black/10 shadow-2xs"
              style={{ backgroundColor: specimen.palette.secondary }}
              title={`Secondary: ${specimen.palette.secondary}`}
            />
            <div
              className="w-3 h-3 rounded-full border border-black/10 shadow-2xs"
              style={{ backgroundColor: specimen.palette.accent }}
              title={`Accent: ${specimen.palette.accent}`}
            />
            <span className="text-[10px] font-mono text-stone-400 ml-1">
              {specimen.palette.isDark ? 'Dark' : 'Light'}
            </span>
          </div>

          {/* Quick Copy Buttons */}
          <div className="flex items-center gap-1">
            <button
              onClick={handleCopyScreenshot}
              className="p-1 rounded-md text-stone-400 hover:text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
              title="Copy Screenshot"
            >
              <Camera className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleCopyPrompt}
              className="p-1 rounded-md text-stone-400 hover:text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
              title="Copy Agent Prompt"
            >
              <Copy className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
