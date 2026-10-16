'use client';

import React, { useMemo, useState } from 'react';
import {
  Check,
  Dices,
  LayoutGrid,
  Search,
  X,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { MOCKUP_SPECIMENS } from '../lib/mockupData';
import { MockupCategory, WebAppMockupSpecimen } from '../types/mockup';
import { MockupCard } from '../components/MockupCard';
import { MockupInspectorModal } from '../components/MockupInspectorModal';

export default function ArchetypeGalleryPage() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<MockupCategory>('all');
  const [activeInspectorSpecimen, setActiveInspectorSpecimen] = useState<WebAppMockupSpecimen | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3200);
  };

  // Filter categories
  const categories: { id: MockupCategory; label: string }[] = [
    { id: 'all', label: 'All Mockups' },
    { id: 'devtools', label: 'Developer Tools' },
    { id: 'fintech', label: 'Fintech & SaaS' },
    { id: 'minimal', label: 'Minimalist & Clean' },
    { id: 'dark', label: 'Dark Mode & Terminal' },
    { id: 'creative', label: 'Neo-Brutal & Creative' },
  ];

  // Filtered specimens
  const filteredSpecimens = useMemo(() => {
    return MOCKUP_SPECIMENS.filter((spec) => {
      // Category match
      const matchCat = selectedCategory === 'all' || spec.category === selectedCategory;
      if (!matchCat) return false;

      // Search match
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        spec.title.toLowerCase().includes(q) ||
        spec.tagline.toLowerCase().includes(q) ||
        spec.description.toLowerCase().includes(q) ||
        spec.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [selectedCategory, searchQuery]);

  // Surprise Me / Random Selection
  const handleSurpriseMe = () => {
    const randomSpec = MOCKUP_SPECIMENS[Math.floor(Math.random() * MOCKUP_SPECIMENS.length)];
    setActiveInspectorSpecimen(randomSpec);
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.8 },
      colors: [randomSpec.palette.primary, randomSpec.palette.secondary, '#10B981'],
    });
    showToast(`Opened "${randomSpec.title}"!`);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-stone-900 selection:text-white pb-28">
      {/* 1. TOP NAVIGATION HEADER (Dribbble / Figma Community Style) */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200 px-4 sm:px-8 py-3.5">
        <div className="max-w-[1520px] mx-auto flex items-center justify-between gap-4">
          {/* Logo & Subtitle */}
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
                  UI Mockup Gallery
                </span>
              </div>
              <p className="text-[11px] text-stone-500 hidden sm:block">
                Prebuilt web app UI mockups with 1-click screenshot & prompt export for AI agents
              </p>
            </div>
          </div>

          {/* Quick Surprise Me Button */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={handleSurpriseMe}
              className="px-3.5 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-semibold cursor-pointer flex items-center gap-1.5 transition-colors border border-stone-300"
              title="Pick a random mockup"
            >
              <Dices className="w-3.5 h-3.5 text-stone-700" />
              <span>Surprise Me</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. DISCOVERY HERO & SEARCH BAR */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-8 pb-4 space-y-5">
        <div className="max-w-3xl space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-950">
            Explore Prebuilt Web App UI Mockups
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
            Browse recognized, authentic web app design mockups like on Dribbble or Figma Community. Hover over any mockup to <strong>copy the screenshot</strong> directly to your clipboard or <strong>copy the prompt</strong> to build it from scratch with Claude, Cursor, or Antigravity.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl">
          <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-stone-400" />
          <input
            type="text"
            placeholder="Search mockups by name, style, or stack (e.g. 'linear', 'fintech', 'minimal', 'scada', 'dark', 'stripe')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-stone-200 rounded-2xl pl-10 pr-10 py-2.5 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 outline-none focus:border-stone-900 focus:ring-2 focus:ring-stone-900/10 shadow-xs transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-3 text-stone-400 hover:text-stone-700 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Pills (Figma Community style) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold cursor-pointer transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-stone-900 text-white shadow-xs font-bold'
                    : 'bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. THE MOCKUP GALLERY GRID */}
      <main className="max-w-[1520px] mx-auto px-4 sm:px-8 pt-4">
        {filteredSpecimens.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-stone-200 space-y-3 my-6">
            <LayoutGrid className="w-8 h-8 text-stone-400 mx-auto" />
            <h3 className="text-base font-bold text-stone-800">No mockups matched your search</h3>
            <p className="text-xs text-stone-500">
              Try searching for &quot;linear&quot;, &quot;dark&quot;, &quot;fintech&quot;, or clear the search filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-7">
            {filteredSpecimens.map((specimen) => (
              <MockupCard
                key={specimen.id}
                specimen={specimen}
                onOpenInspector={(spec) => setActiveInspectorSpecimen(spec)}
                onToast={showToast}
              />
            ))}
          </div>
        )}
      </main>

      {/* 4. NOTIFICATION TOAST */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-stone-900 text-white px-4 py-2.5 rounded-2xl text-xs font-semibold shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-150 flex items-center gap-2 border border-stone-700">
          <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 5. FULL-SIZE SPECIMEN INSPECTOR MODAL */}
      {activeInspectorSpecimen && (
        <MockupInspectorModal
          specimen={activeInspectorSpecimen}
          onClose={() => setActiveInspectorSpecimen(null)}
          onToast={showToast}
        />
      )}
    </div>
  );
}
