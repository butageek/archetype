'use client';

import React, { useState } from 'react';
import {
  Check,
  Copy,
  Download,
  Terminal,
  X,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { DesignComposition } from '../types/design';
import { generateAgentPrompt, generateFullDesignSpec } from '../lib/modularPresets';

interface AgentExportModalProps {
  composition: DesignComposition;
  onClose: () => void;
}

export function AgentExportModal({ composition, onClose }: AgentExportModalProps) {
  const [activeTab, setActiveTab] = useState<'prompt' | 'spec'>('prompt');
  const [copied, setCopied] = useState<boolean>(false);

  const agentPrompt = generateAgentPrompt(composition);
  const fullSpec = generateFullDesignSpec(composition);

  const handleCopy = () => {
    const text = activeTab === 'prompt' ? agentPrompt : fullSpec;
    navigator.clipboard.writeText(text);
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: [composition.palette.primary, composition.palette.secondary, '#10B981'],
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const text = activeTab === 'prompt' ? agentPrompt : fullSpec;
    const filename = activeTab === 'prompt' ? 'agent-prompt.txt' : 'STYLE_SPEC.md';
    const blob = new Blob([text], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-3xl bg-white border border-stone-200 rounded-2xl flex flex-col shadow-2xl overflow-hidden text-stone-900">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-stone-900 flex items-center justify-center text-white">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold">Export for AI Coding Agent</h3>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-stone-200 text-stone-700">
                  {composition.palette.name}
                </span>
              </div>
              <p className="text-xs text-stone-500">
                Ready-to-paste prompts and design token invariants for Claude, ChatGPT, Cursor, or Antigravity.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-stone-200 hover:bg-stone-100 text-stone-500 hover:text-stone-800 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="px-5 py-2.5 border-b border-stone-200 bg-stone-100/60 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setActiveTab('prompt')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                activeTab === 'prompt'
                  ? 'bg-white text-stone-900 shadow-xs font-bold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Ready-to-Paste Agent Prompt
            </button>
            <button
              onClick={() => setActiveTab('spec')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                activeTab === 'spec'
                  ? 'bg-white text-stone-900 shadow-xs font-bold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Full STYLE_SPEC.md (Tokens & CSS)
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 text-xs font-bold bg-stone-900 hover:bg-stone-800 text-white rounded-lg cursor-pointer flex items-center gap-1.5 shadow-xs transition-transform active:scale-95"
            >
              {copied ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy to Clipboard'}</span>
            </button>
            <button
              onClick={handleDownload}
              className="p-1.5 rounded-lg border border-stone-200 hover:bg-white text-stone-600 cursor-pointer"
              title="Download file"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-4 overflow-y-auto max-h-[60vh] bg-stone-50 font-mono text-xs text-stone-800 select-text leading-relaxed">
          <pre className="whitespace-pre-wrap">{activeTab === 'prompt' ? agentPrompt : fullSpec}</pre>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-stone-200 bg-white flex items-center justify-between text-xs text-stone-500">
          <span>Tip: You can screenshot the live design mockup above and paste it directly alongside this prompt!</span>
          <button onClick={onClose} className="font-semibold text-stone-800 hover:underline cursor-pointer">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
