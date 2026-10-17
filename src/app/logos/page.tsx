'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Check, Copy, ExternalLink, Sparkles } from 'lucide-react';
import { ALL_BRAND_LOGOS, type BrandLogoMeta } from '../../lib/brandLogosData';

interface LogoOption extends BrandLogoMeta {
  svgCode: string;
  renderMark: (className?: string) => React.ReactNode;
}

const LOGO_OPTIONS: LogoOption[] = ALL_BRAND_LOGOS.map((logo) => ({
  ...logo,
  svgCode: `<svg viewBox="${logo.viewBox}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="${logo.path}" fill="currentColor" fill-rule="evenodd"/>
</svg>`,
  renderMark: (className = 'w-10 h-10') => (
    <svg className={className} viewBox={logo.viewBox} fill="none">
      <path d={logo.path} fill="currentColor" fillRule="evenodd" />
    </svg>
  ),
}));

export default function LogosPage() {
  const [selectedLogoId, setSelectedLogoId] = useState<string>('monoline');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const selectedLogo = LOGO_OPTIONS.find((l) => l.id === selectedLogoId) ?? LOGO_OPTIONS[3];

  const handleCopySvg = (logo: LogoOption) => {
    navigator.clipboard.writeText(logo.svgCode);
    setCopiedId(logo.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 p-4 sm:p-8 lg:p-12 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Navigation Bar */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-6">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-stone-400 hover:text-white px-3 py-1.5 rounded-lg border border-stone-800 hover:border-stone-700 bg-stone-900 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Studio</span>
            </Link>
            <div className="h-4 w-px bg-stone-800" />
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 uppercase tracking-widest">
                Brand Identity
              </span>
              <span className="text-xs text-stone-400 font-mono">
                5 Minimalist Vector Marks
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/logos.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-bold text-stone-400 hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-800 hover:border-stone-700 bg-stone-900 transition-colors cursor-pointer"
            >
              <span>Standalone HTML</span>
              <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-mono">
            ARCHETYPE Logo Suite
          </h1>
          <p className="text-stone-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            Minimalist, clean, and modern 2D vector marks designed for supreme legibility at 16×16 favicon scale up to massive displays. All 5 marks are 100% vector Bézier curves faithfully extracted from the concept presentation sheet.
          </p>
        </div>

        {/* Full Presentation Sheet Image Card */}
        <div className="rounded-2xl border border-stone-800 overflow-hidden bg-stone-900 shadow-2xl relative group">
          <div className="relative aspect-[2019/513] w-full">
            <Image
              src="/brand/minimalist_logos_sheet.jpg"
              alt="5 Minimalist Logo Marks for Archetype"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="p-3 bg-stone-900/95 border-t border-stone-800/80 flex items-center justify-between text-xs font-mono text-stone-400">
            <span>Concept Presentation Sheet (01 - 05)</span>
            <span className="text-emerald-400 font-bold">Vector SVG Assets Ready</span>
          </div>
        </div>

        {/* Dynamic Studio Navbar Mockup Test Preview */}
        <div className="bg-stone-900/70 border border-stone-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-stone-300">
                Live Navbar Specimen Test
              </span>
            </div>
            <span className="text-xs font-mono text-stone-500">
              Active: {selectedLogo.name} ({selectedLogo.num})
            </span>
          </div>

          {/* Rendered Mockup Navbar with Selected Logo */}
          <div className="rounded-xl border border-stone-800 bg-stone-950 p-4 shadow-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-white shadow-xs">
                {selectedLogo.renderMark('w-5 h-5 text-white')}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-base tracking-tight text-white font-mono">
                    ARCHETYPE
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-stone-900 text-stone-400 font-bold border border-stone-800">
                    Design Terminology & Prompt Synthesizer
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 font-bold">
                Specimen Preview
              </span>
              <button
                type="button"
                onClick={() => handleCopySvg(selectedLogo)}
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-colors cursor-pointer flex items-center gap-1.5"
              >
                {copiedId === selectedLogo.id ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied SVG!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy SVG</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 5 Minimalist Logo Marks Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold font-mono text-white">
              5 Minimalist Logo Marks
            </h2>
            <span className="text-xs font-mono text-stone-500">
              Clean 2D vector marks designed for supreme legibility at 16×16 px up to massive signage.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOGO_OPTIONS.map((logo) => {
              const isSelected = selectedLogoId === logo.id;
              const isOfficialActive = logo.id === 'monoline';

              return (
                <div
                  key={logo.id}
                  className={`rounded-2xl border transition-all duration-200 flex flex-col justify-between p-6 shadow-xl ${
                    isSelected
                      ? 'border-amber-400/80 bg-stone-900 ring-2 ring-amber-400/20'
                      : 'border-stone-800/80 bg-stone-900/60 hover:border-stone-700 hover:bg-stone-900'
                  }`}
                >
                  <div className="space-y-5">
                    {/* Header Strip */}
                    <div className="flex items-center justify-between pb-3 border-b border-stone-800/80">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-stone-400">
                          {logo.num} {'// CONCEPT'}
                        </span>
                        {isOfficialActive && (
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800">
                            Active Logo
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-800 text-stone-300 border border-stone-700">
                        {logo.subtitle}
                      </span>
                    </div>

                    {/* Logo Display Canvas */}
                    <div className="h-48 rounded-xl bg-stone-950 flex items-center justify-center relative overflow-hidden border border-stone-800/80">
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />
                      <div className="relative z-10 transition-transform duration-300 hover:scale-105">
                        {logo.renderMark('w-24 h-24 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]')}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-white font-mono">
                        {logo.name}
                      </h3>
                      <p className="text-xs text-stone-400 leading-relaxed min-h-[3rem]">
                        {logo.description}
                      </p>
                      <div className="text-[11px] font-mono text-stone-500 pt-1">
                        <span className="text-stone-400">Best paired with:</span> {logo.themeMatch}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedLogoId(logo.id)}
                      className={`flex-1 py-2 px-3 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-amber-400 text-stone-950 shadow-md font-extrabold'
                          : 'bg-stone-800 hover:bg-stone-700 text-stone-200'
                      }`}
                    >
                      {isSelected ? '✓ In Navbar' : 'Test In Navbar'}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCopySvg(logo)}
                      className="py-2 px-3 rounded-lg font-mono text-xs font-bold border border-stone-800 hover:border-stone-700 bg-stone-950 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                      title="Copy SVG Code"
                    >
                      {copiedId === logo.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy SVG</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Brand Asset Download Links */}
        <div className="rounded-2xl border border-stone-800 bg-stone-900/60 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
              Ready-to-Use Vector Files (brand/ & public/brand/)
            </h3>
            <span className="text-xs font-mono text-emerald-400 font-bold">
              All 5 Options Available in SVG
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 font-mono text-xs">
            <a
              href="/brand/minimal-01-vault.svg"
              download
              className="p-3 rounded-xl bg-stone-950 border border-stone-800 hover:border-stone-700 text-stone-300 hover:text-white transition-colors text-center block"
            >
              <div className="font-bold text-white">01 // VAULT</div>
              <div className="text-[10px] text-stone-500 mt-1">minimal-01-vault.svg</div>
            </a>
            <a
              href="/brand/minimal-02-pillars.svg"
              download
              className="p-3 rounded-xl bg-stone-950 border border-stone-800 hover:border-stone-700 text-stone-300 hover:text-white transition-colors text-center block"
            >
              <div className="font-bold text-white">02 // 5-PILLARS</div>
              <div className="text-[10px] text-stone-500 mt-1">minimal-02-pillars.svg</div>
            </a>
            <a
              href="/brand/minimal-03-brackets.svg"
              download
              className="p-3 rounded-xl bg-stone-950 border border-stone-800 hover:border-stone-700 text-stone-300 hover:text-white transition-colors text-center block"
            >
              <div className="font-bold text-white">03 // BRACKETS</div>
              <div className="text-[10px] text-stone-500 mt-1">minimal-03-brackets.svg</div>
            </a>
            <a
              href="/brand/minimal-04-monoline.svg"
              download
              className="p-3 rounded-xl bg-stone-950 border border-emerald-500/40 text-stone-300 hover:text-white transition-colors text-center block ring-1 ring-emerald-500/20"
            >
              <div className="font-bold text-emerald-400">04 // MONOLINE ★</div>
              <div className="text-[10px] text-stone-500 mt-1">logo.svg (Master)</div>
            </a>
            <a
              href="/brand/minimal-05-stepped.svg"
              download
              className="p-3 rounded-xl bg-stone-950 border border-stone-800 hover:border-stone-700 text-stone-300 hover:text-white transition-colors text-center block"
            >
              <div className="font-bold text-white">05 // STEPPED</div>
              <div className="text-[10px] text-stone-500 mt-1">minimal-05-stepped.svg</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
