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
    id: 'arch',
    num: '01',
    name: 'The Architectural Arch & Aperture',
    subtitle: 'Roman Vault & Delta Origin',
    description:
      'Merges the classical Roman architectural triumphal archway with an ascending delta (A). Features blueprint calibration hairlines and an illuminated emerald optical prism floating at the focal center.',
    themeMatch: 'Kyoto Zen, Bauhaus Primaries, Art Deco Gatsby, 70s Editorial',
    svgCode: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M32 6L54 54H41.5L37.5 44C37.5 37.5 26.5 37.5 26.5 44L22.5 54H10L32 6Z" fill="#18181B"/>
  <path d="M26.5 44C26.5 37.5 37.5 37.5 37.5 44V54H26.5V44Z" fill="#F4F4F5"/>
  <polygon points="32,22 36,30 28,30" fill="#10B981"/>
  <line x1="20" y1="44" x2="44" y2="44" stroke="#10B981" stroke-width="1.5" stroke-dasharray="2 2" opacity="0.8"/>
</svg>`,
    renderMark: (className = 'w-10 h-10') => (
      <svg className={className} viewBox="0 0 64 64" fill="none">
        <path d="M32 6L54 54H41.5L37.5 44C37.5 37.5 26.5 37.5 26.5 44L22.5 54H10L32 6Z" fill="currentColor" />
        <path d="M26.5 44C26.5 37.5 37.5 37.5 37.5 44V54H26.5V44Z" fill="#18181B" />
        <polygon points="32,22 36,30 28,30" fill="#10B981" />
        <line x1="20" y1="44" x2="44" y2="44" stroke="#10B981" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.8" />
      </svg>
    ),
  },
  {
    id: 'facet',
    num: '02',
    name: 'The 5-Pillar Faceted Prism',
    subtitle: 'Modular Synthesis Keystone',
    description:
      'Five interlocking polyhedral geometric facets that assemble together to formulate the letter A. Directly symbolizes Archetype’s 5 pillars (Palette, Typography, Surface, Controls, Accents) clicking together.',
    themeMatch: 'Linear Obsidian, Raycast Aurora, Arc Cosmic Lilac, Modern Bento',
    svgCode: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <polygon points="32,8 41,23 23,23" fill="#818CF8"/>
  <polygon points="21,26 30,26 23,38 14,38" fill="#6366F1"/>
  <polygon points="34,26 43,26 50,38 41,38" fill="#4F46E5"/>
  <polygon points="12,41 21,41 15,53 6,53" fill="#06B6D4"/>
  <polygon points="43,41 52,41 58,53 49,53" fill="#10B981"/>
  <rect x="23" y="39" width="18" height="3" rx="1.5" fill="#F43F5E"/>
</svg>`,
    renderMark: (className = 'w-10 h-10') => (
      <svg className={className} viewBox="0 0 64 64" fill="none">
        <polygon points="32,8 41,23 23,23" fill="#818CF8" />
        <polygon points="21,26 30,26 23,38 14,38" fill="#6366F1" />
        <polygon points="34,26 43,26 50,38 41,38" fill="#4F46E5" />
        <polygon points="12,41 21,41 15,53 6,53" fill="#06B6D4" />
        <polygon points="43,41 52,41 58,53 49,53" fill="#10B981" />
        <rect x="23" y="39" width="18" height="3" rx="1.5" fill="#F43F5E" />
      </svg>
    ),
  },
  {
    id: 'caliper',
    num: '03',
    name: 'The Precision Drafting Caliper',
    subtitle: 'CAD Blueprint & Dimensional Metrics',
    description:
      'An architectural divider compass and caliper forming an A, complete with pivot hinge, coordinate crosshairs, and measurement scale ticks. Emphasizes exact design token specifications and tolerances.',
    themeMatch: 'CAD Blueprint, Stripe Fintech, SCADA Industrial, Monokai Pro',
    svgCode: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="32" cy="14" r="5" stroke="#0284C7" stroke-width="2.5" fill="#0F172A"/>
  <circle cx="32" cy="14" r="1.5" fill="#0284C7"/>
  <line x1="30" y1="18" x2="14" y2="54" stroke="#0284C7" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="34" y1="18" x2="50" y2="54" stroke="#0284C7" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M22 36 A 20 20 0 0 1 42 36" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="1 3"/>
  <line x1="18" y1="42" x2="46" y2="42" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>
  <line x1="32" y1="39" x2="32" y2="45" stroke="#F59E0B" stroke-width="1.5"/>
</svg>`,
    renderMark: (className = 'w-10 h-10') => (
      <svg className={className} viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="14" r="5" stroke="#0284C7" strokeWidth="2.5" fill="#0F172A" />
        <circle cx="32" cy="14" r="1.5" fill="#0284C7" />
        <line x1="30" y1="18" x2="14" y2="54" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="34" y1="18" x2="50" y2="54" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M22 36 A 20 20 0 0 1 42 36" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="1 3" />
        <line x1="18" y1="42" x2="46" y2="42" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        <line x1="32" y1="39" x2="32" y2="45" stroke="#F59E0B" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'monolith',
    num: '04',
    name: 'The 45° Chamfered Monolith',
    subtitle: 'Cybernetic HUD & Energy Core',
    description:
      'A faceted obsidian block featuring 45° chamfered cuts, tactical corner registration dots, and an illuminated glowing amber energy core representing the synthesized AI prompt token.',
    themeMatch: 'Cyberpunk Night City, SCADA Heavy Industrial, Retro Synthwave',
    svgCode: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M26 8 H38 L54 24 V50 L48 56 H38 L32 50 L26 56 H16 L10 50 V24 L26 8 Z" fill="#18181B" stroke="#D97706" stroke-width="2"/>
  <polygon points="32,20 42,36 22,36" fill="#F59E0B"/>
  <polygon points="32,24 39,34 25,34" fill="#0C0A09"/>
  <path d="M18 42 H46 L42 46 H22 L18 42 Z" fill="#F59E0B"/>
  <circle cx="32" cy="12" r="1.5" fill="#EF4444"/>
</svg>`,
    renderMark: (className = 'w-10 h-10') => (
      <svg className={className} viewBox="0 0 64 64" fill="none">
        <path d="M26 8 H38 L54 24 V50 L48 56 H38 L32 50 L26 56 H16 L10 50 V24 L26 8 Z" fill="#18181B" stroke="#D97706" strokeWidth="2" />
        <polygon points="32,20 42,36 22,36" fill="#F59E0B" />
        <polygon points="32,24 39,34 25,34" fill="#0C0A09" />
        <path d="M18 42 H46 L42 46 H22 L18 42 Z" fill="#F59E0B" />
        <circle cx="32" cy="12" r="1.5" fill="#EF4444" />
      </svg>
    ),
  },
  {
    id: 'ribbon',
    num: '05',
    name: 'The Continuous Isometric Ribbon',
    subtitle: '3D Möbius Loop & Infinite Composition',
    description:
      'A continuous 3D isometric ribbon looping smoothly in physical space to form an A and infinity symbol (∞). Reflects the infinite aesthetic combinations of Archetype with sculptural elegance.',
    themeMatch: 'Frutiger Aero, Modern Bento UI, Nordic Ambient, Vercel Modern',
    svgCode: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <polygon points="32,6 32,20 18,48 10,48" fill="#6366F1"/>
  <polygon points="32,6 40,16 54,48 46,48 32,20" fill="#4338CA"/>
  <polygon points="32,6 38,13 32,18 26,13" fill="#A5B4FC"/>
  <polygon points="20,36 44,36 41,43 17,43" fill="#818CF8"/>
  <polygon points="17,43 41,43 38,50 14,50" fill="#312E81"/>
</svg>`,
    renderMark: (className = 'w-10 h-10') => (
      <svg className={className} viewBox="0 0 64 64" fill="none">
        <polygon points="32,6 32,20 18,48 10,48" fill="#6366F1" />
        <polygon points="32,6 40,16 54,48 46,48 32,20" fill="#4338CA" />
        <polygon points="32,6 38,13 32,18 26,13" fill="#A5B4FC" />
        <polygon points="20,36 44,36 41,43 17,43" fill="#818CF8" />
        <polygon points="17,43 41,43 38,50 14,50" fill="#312E81" />
      </svg>
    ),
  },
];

export default function LogosPage() {
  const [selectedLogoId, setSelectedLogoId] = useState<string>('facet');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const selectedLogo = LOGO_OPTIONS.find((l) => l.id === selectedLogoId) ?? LOGO_OPTIONS[1];

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
                Brand Identity Exploration
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-stone-400 font-mono hidden md:inline">5 Vector Mockups</span>
            <a
              href="/brand/archetype_logo_concepts.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl flex items-center gap-1.5 border border-stone-700 transition-colors font-medium"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open Fullsheet Image</span>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-[1500px] mx-auto px-4 sm:px-8 pt-8 space-y-12">
        {/* HERO BANNER: HIGH-RESOLUTION SHEET */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-stone-800 pb-4">
            <div>
              <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                High-Resolution Presentation Board
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Archetype Brand Mark Concepts
              </h1>
            </div>
            <p className="text-xs text-stone-400 font-mono">
              Saved in project directory: <code className="text-stone-200 bg-stone-900 px-1.5 py-0.5 rounded border border-stone-800">./brand/archetype_logo_concepts.jpg</code>
            </p>
          </div>

          {/* Full High-Res Graphic Mockup */}
          <div className="rounded-2xl border border-stone-800 overflow-hidden bg-stone-900 shadow-2xl relative">
            <Image
              src="/brand/archetype_logo_concepts.jpg"
              alt="Archetype 5 Logo Design Concepts Presentation Sheet"
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
                Click any logo option below to test how it looks in Archetype’s actual navigation bar:
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
              <div className="w-8 h-8 rounded-xl bg-stone-950 flex items-center justify-center shadow-xs transition-transform transform hover:scale-105">
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
            <h2 className="text-xl font-bold text-white">5 Vector SVG Concept Details</h2>
            <p className="text-xs text-stone-400">
              Each icon is stored in <code className="text-stone-300">./brand/logo-*.svg</code> ready for immediate production deployment.
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
                    <div className="h-40 rounded-xl bg-stone-950 flex items-center justify-center relative overflow-hidden border border-stone-800/80">
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />
                      <div className="relative z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                        {logo.renderMark('w-16 h-16')}
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
