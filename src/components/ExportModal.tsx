'use client';

import React, { useState } from 'react';
import {
  Bot,
  Check,
  Code2,
  Copy,
  Download,
  FileCode,
  FileText,
  Package,
  Sparkles,
  X,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ThemePreset } from '../types/theme';
import {
  generateReactComponentTemplates,
  generateStyleSpecMarkdown,
  generateTailwindV4Theme,
  getCssVariables,
} from '../lib/exporter';

interface ExportModalProps {
  preset: ThemePreset;
  onClose: () => void;
}

export function ExportModal({ preset, onClose }: ExportModalProps) {
  const [activeTab, setActiveTab] = useState<'spec' | 'tailwind' | 'components' | 'json'>('spec');
  const [copied, setCopied] = useState<boolean>(false);

  // Content generators
  const styleSpecMd = generateStyleSpecMarkdown(preset);
  const tailwindThemeCss = `${getCssVariables(preset.tokens)}\n\n${generateTailwindV4Theme(preset.tokens)}`;
  const componentTemplates = generateReactComponentTemplates(preset);
  const jsonTheme = JSON.stringify(preset, null, 2);

  const getActiveContent = () => {
    switch (activeTab) {
      case 'spec':
        return styleSpecMd;
      case 'tailwind':
        return tailwindThemeCss;
      case 'components':
        return componentTemplates;
      case 'json':
        return jsonTheme;
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: [preset.tokens.palette.primary, preset.tokens.palette.secondary, '#10B981'],
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getActiveContent());
    setCopied(true);
    triggerConfetti();
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = (filename: string, content: string, type: string) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    triggerConfetti();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-4xl h-[88vh] bg-neutral-950 border border-neutral-800 rounded-2xl flex flex-col shadow-2xl overflow-hidden text-neutral-100">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold">Export for AI Coding Agent</h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  {preset.metadata.name}
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                Engineered Markdown prompts, CSS variables, and Tailwind blueprints for Cursor, Claude, Antigravity, and Copilot.
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

        {/* Tab Switcher & Action Bar */}
        <div className="px-5 py-3 border-b border-neutral-800/80 bg-neutral-900/30 flex flex-wrap items-center justify-between gap-3">
          {/* Tabs */}
          <div className="flex items-center gap-1.5">
            {[
              { id: 'spec' as const, label: 'STYLE_SPEC.md', icon: FileText },
              { id: 'tailwind' as const, label: 'Tailwind v4 / CSS', icon: Code2 },
              { id: 'components' as const, label: 'React Blueprints', icon: FileCode },
              { id: 'json' as const, label: 'Theme JSON', icon: Package },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-neutral-100 text-neutral-950 font-bold'
                      : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-neutral-200 border border-neutral-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Export Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3.5 py-1.5 text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-neutral-950 rounded-lg cursor-pointer flex items-center gap-1.5 shadow-sm transition-transform active:scale-95"
            >
              {copied ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Code'}</span>
            </button>

            {/* Download specific file */}
            <button
              onClick={() => {
                if (activeTab === 'spec') handleDownload('STYLE_SPEC.md', styleSpecMd, 'text/markdown');
                else if (activeTab === 'tailwind') handleDownload('archetype-theme.css', tailwindThemeCss, 'text/css');
                else if (activeTab === 'components') handleDownload('ArchetypeComponents.tsx', componentTemplates, 'text/plain');
                else handleDownload(`${preset.metadata.id}.json`, jsonTheme, 'application/json');
              }}
              className="p-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-800 text-neutral-300 cursor-pointer flex items-center gap-1 text-xs"
              title="Download file"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Code Content Viewer */}
        <div className="flex-1 overflow-auto bg-neutral-950 p-4 font-mono text-xs text-neutral-300 leading-relaxed select-text">
          <pre className="whitespace-pre-wrap">{getActiveContent()}</pre>
        </div>

        {/* Footer Guidance */}
        <div className="p-3.5 border-t border-neutral-800 bg-neutral-900/40 flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>
              Tip: Paste <code className="text-neutral-200 font-mono">STYLE_SPEC.md</code> directly into your agent instructions or <code className="text-neutral-200 font-mono">AGENTS.md</code> file!
            </span>
          </div>

          <button
            onClick={() => handleDownload('STYLE_SPEC.md', styleSpecMd, 'text/markdown')}
            className="text-emerald-400 hover:underline font-mono text-xs flex items-center gap-1 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            Download STYLE_SPEC.md
          </button>
        </div>
      </div>
    </div>
  );
}
