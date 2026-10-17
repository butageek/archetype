'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Check, Copy, ExternalLink, Sparkles } from 'lucide-react';

interface LogoOption {
  id: string;
  num: string;
  name: string;
  subtitle: string;
  description: string;
  svgCode: string;
  themeMatch: string;
  renderMark: (className?: string) => React.ReactNode;
}

const LOGO_OPTIONS: LogoOption[] = [
  {
    id: 'vault',
    num: '01',
    name: 'The Origin Vault',
    subtitle: 'Architectural Arch & Delta',
    description:
      'A bold geometric triangle (A) where the interior negative space forms an architectural Roman vault arch. Represents "Arche" (the foundation/origin).',
    themeMatch: 'Bauhaus, Kyoto Zen, Modern Bento, Minimalist SaaS',
    svgCode: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M32 8L54 52H42L36 38C36 34 28 34 28 38L22 52H10L32 8Z" fill="currentColor"/>
  <path d="M26 52V38C26 34.6863 28.6863 32 32 32C35.3137 32 38 34.6863 38 38V52H26Z" fill="#09090B"/>
  <circle cx="32" cy="22" r="2.5" fill="#10B981"/>
</svg>`,
    renderMark: (className = 'w-10 h-10') => (
      <svg className={className} viewBox="0 0 64 64" fill="none">
        <path d="M32 8L54 52H42L36 38C36 34 28 34 28 38L22 52H10L32 8Z" fill="currentColor" />
        <path d="M26 52V38C26 34.6863 28.6863 32 32 32C35.3137 32 38 34.6863 38 38V52H26Z" fill="#09090B" />
        <circle cx="32" cy="22" r="2.5" fill="#10B981" />
      </svg>
    ),
  },
  {
    id: 'pillars',
    num: '02',
    name: 'The 5-Pillars Convergence',
    subtitle: 'Precision Multi-Stroke Synthesis',
    description:
      'Five clean geometric strokes converging towards the apex, directly representing Archetype’s 5 pillars (Palette, Font, Surface, Controls, Accents). Joined by a crisp crossbar token.',
    themeMatch: 'Linear Obsidian, Stripe Fintech, Raycast Velvet, Monokai Pro',
    svgCode: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="12" y1="52" x2="30" y2="12" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  <line x1="20" y1="52" x2="31" y2="16" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity="0.8"/>
  <line x1="32" y1="10" x2="32" y2="28" stroke="#10B981" stroke-width="3" stroke-linecap="round"/>
  <line x1="44" y1="52" x2="33" y2="16" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity="0.8"/>
  <line x1="52" y1="52" x2="34" y2="12" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  <rect x="20" y="38" width="24" height="3" rx="1.5" fill="#10B981"/>
</svg>`,
    renderMark: (className = 'w-10 h-10') => (
      <svg className={className} viewBox="0 0 64 64" fill="none">
        <line x1="12" y1="52" x2="30" y2="12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <line x1="20" y1="52" x2="31" y2="16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity={0.8} />
        <line x1="32" y1="10" x2="32" y2="28" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
        <line x1="44" y1="52" x2="33" y2="16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity={0.8} />
        <line x1="52" y1="52" x2="34" y2="12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <rect x="20" y="38" width="24" height="3" rx="1.5" fill="#10B981" />
      </svg>
    ),
  },
  {
    id: 'brackets',
    num: '03',
    name: 'The Interlocking Brackets',
    subtitle: 'Code Syntax & Design Tokens',
    description:
      'Two minimalist angled code brackets that interlock diagonally to form an A. Cleverly unites prompt syntax (< >) with visual architecture.',
    themeMatch: 'Developer Terminal, Vercel Monochrome, CAD Blueprint, SCADA',
    svgCode: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 52L30 12H34L20 52H12Z" fill="currentColor"/>
  <path d="M52 52L34 12H30L44 52H52Z" fill="currentColor"/>
  <rect x="20" y="34" width="24" height="5" rx="2.5" fill="#10B981"/>
</svg>`,
    renderMark: (className = 'w-10 h-10') => (
      <svg className={className} viewBox="0 0 64 64" fill="none">
        <path d="M12 52L30 12H34L20 52H12Z" fill="currentColor" />
        <path d="M52 52L34 12H30L44 52H52Z" fill="currentColor" />
        <rect x="20" y="34" width="24" height="5" rx="2.5" fill="#10B981" />
      </svg>
    ),
  },
  {
    id: 'monoline',
    num: '04',
    name: 'The Monoline Möbius',
    subtitle: 'Continuous Infinite Loop',
    description:
      'A single continuous, unbroken monoline stroke tracing the A into an infinity loop. Expresses seamless visual synthesis and effortless aesthetic iteration.',
    themeMatch: 'Arc Cosmic, Modern Bento, Nordic Ambient, Frutiger Aero',
    svgCode: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 52L32 12L50 52H38L32 38L26 52H14Z" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="32" cy="27" r="3" fill="#10B981"/>
</svg>`,
    renderMark: (className = 'w-10 h-10') => (
      <svg className={className} viewBox="0 0 64 64" fill="none">
        <path
          d="M14 52L32 12L50 52H38L32 38L26 52H14Z"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="27" r="3" fill="#10B981" />
      </svg>
    ),
  },
  {
    id: 'stepped',
    num: '05',
    name: 'The Stepped Horizon',
    subtitle: 'Swiss Modernist Architectural Cut',
    description:
      'A bold geometric delta with an architectural 45° cut on the right shoulder and an overhanging horizontal crossbar. Powerful, memorable, and ultra-crisp at any size.',
    themeMatch: 'Swiss Minimal, Bauhaus, Cyberpunk HUD, Industrial SCADA',
    svgCode: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M32 8L10 52H22L27 42H16V36H30L32 8Z" fill="currentColor"/>
  <path d="M32 8L54 52H42L35 36H48V42H38L32 8Z" fill="currentColor"/>
  <rect x="29.5" y="22" width="5" height="5" fill="#10B981"/>
</svg>`,
    renderMark: (className = 'w-10 h-10') => (
      <svg className={className} viewBox="0 0 64 64" fill="none">
        <path d="M32 8L10 52H22L27 42H16V36H30L32 8Z" fill="currentColor" />
        <path d="M32 8L54 52H42L35 36H48V42H38L32 8Z" fill="currentColor" />
        <rect x="29.5" y="22" width="5" height="5" fill="#10B981" />
      </svg>
    ),
  },
];

export default function LogosPage() {
  const [selectedLogoId, setSelectedLogoId] = useState<string>('vault');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const selectedLogo = LOGO_OPTIONS.find((l) => l.id === selectedLogoId) ?? LOGO_OPTIONS[0];

  const handleCopySvg = (logo: LogoOption) => {
    navigator.clipboard.writeText(logo.svgCode);
    setCopiedId(logo.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-stone-800 selection:text-white pb-20">
      {/* 1. TOP HEADER */}
      <header className="sticky top-0 z-40 bg-stone-900/90 backdrop-blur-md border-b border-stone-800 px-4 sm:px-8 py-3.5">
        <div className="max-w-[1500px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-3 py-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold flex items-center gap-1.5 border border-stone-700 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Studio</span>
            </Link>
            <span className="text-stone-600 font-mono text-sm hidden sm:inline">/</span>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-white font-mono">
                ARCHETYPE
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 font-bold border border-emerald-800">
                Minimalist Brand Identity
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-stone-400 font-mono hidden md:inline">5 Clean Vector Marks</span>
            <a
              href="/brand/minimalist_logos_sheet.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl flex items-center gap-1.5 border border-stone-700 transition-colors font-medium"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open Presentation Sheet</span>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-[1500px] mx-auto px-4 sm:px-8 pt-8 space-y-12">
        {/* HERO BANNER: MINIMALIST SHEET */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-stone-800 pb-4">
            <div>
              <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                Clean • Modern • Minimalist • Creative
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Archetype Logo Exploration
              </h1>
            </div>
            <p className="text-xs text-stone-400 font-mono">
              Pick your favorite mark first — once confirmed, we will generate the full brand kit.
            </p>
          </div>

          {/* Minimalist Graphic Presentation Sheet */}
          <div className="rounded-2xl border border-stone-800 overflow-hidden bg-stone-900 shadow-2xl relative">
            <Image
              src="/brand/minimalist_logos_sheet.jpg"
              alt="Archetype 5 Minimalist Logo Marks"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </section>

        {/* INTERACTIVE LIVE NAVBAR SIMULATOR */}
        <section className="bg-stone-900/80 rounded-2xl border border-stone-800 p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <h2 className="text-base font-bold text-white">Live In-App Navbar Simulator</h2>
              </div>
              <p className="text-xs text-stone-400 mt-0.5">
                Click any option below to test how it sits inside Archetype’s top navigation bar:
              </p>
            </div>
            <div className="flex items-center gap-1.5 bg-stone-950 p-1 rounded-xl border border-stone-800">
              {LOGO_OPTIONS.map((logo) => (
                <button
                  key={logo.id}
                  type="button"
                  onClick={() => setSelectedLogoId(logo.id)}
                  className={`px-2.5 py-1 text-xs font-mono font-bold rounded-lg cursor-pointer transition-colors ${
                    selectedLogoId === logo.id
                      ? 'bg-white text-stone-950 shadow-xs'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  {logo.num} {logo.id.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Simulated Navbar */}
          <div className="p-4 rounded-xl bg-white text-stone-900 shadow-xl border border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-stone-950 flex items-center justify-center shadow-xs transition-transform transform hover:scale-105 text-white">
                {selectedLogo.renderMark('w-5 h-5 text-white')}
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
                  Simulated active logo: <strong>{selectedLogo.name}</strong>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-semibold">
                ● Active Preview
              </span>
            </div>
          </div>
        </section>

        {/* 5 INDIVIDUAL SVG CARDS */}
        <section className="space-y-6">
          <div className="border-b border-stone-800 pb-2">
            <h2 className="text-xl font-bold text-white">5 Minimalist Logo Marks</h2>
            <p className="text-xs text-stone-400">
              Clean 2D vector marks designed for supreme legibility at 16×16 px up to massive signage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOGO_OPTIONS.map((logo) => {
              const isSelected = selectedLogoId === logo.id;
              const isCopied = copiedId === logo.id;
              return (
                <div
                  key={logo.id}
                  className={`bg-stone-900 rounded-2xl border p-6 flex flex-col justify-between transition-all shadow-xl ${
                    isSelected ? 'border-amber-400/80 ring-1 ring-amber-400/40' : 'border-stone-800 hover:border-stone-700'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                      <span className="text-xs font-mono font-bold text-stone-400">{logo.num} {'//'} CONCEPT</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-800 text-stone-300 border border-stone-700">
                        {logo.subtitle}
                      </span>
                    </div>

                    {/* Visual Card */}
                    <div className="h-40 rounded-xl bg-stone-950 flex items-center justify-center relative overflow-hidden border border-stone-800/80 text-white">
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />
                      <div className="relative z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                        {logo.renderMark('w-16 h-16 text-white')}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-base font-bold text-white">{logo.name}</h3>
                      <p className="text-xs text-stone-400 leading-relaxed">{logo.description}</p>
                    </div>

                    <div className="text-[11px] text-stone-500 font-mono">
                      Best paired with: <span className="text-stone-300">{logo.themeMatch}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedLogoId(logo.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer transition-colors ${
                        isSelected ? 'bg-amber-400 text-stone-950' : 'bg-stone-800 hover:bg-stone-700 text-stone-200'
                      }`}
                    >
                      {isSelected ? '✓ In Navbar' : 'Test In Navbar'}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCopySvg(logo)}
                      className="px-3 py-1.5 rounded-xl text-xs font-mono bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 flex items-center gap-1.5 cursor-pointer transition-colors"
                      title="Copy vector SVG snippet"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isCopied ? 'Copied SVG!' : 'Copy SVG'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
