'use client';

import React, { useState } from 'react';
import {
  Check,
  Download,
  Layers,
  Search,
  Sparkles,
  Star,
  Trash2,
  Upload,
  X,
} from 'lucide-react';
import { ThemePreset } from '../types/theme';

interface PresetGalleryProps {
  presets: ThemePreset[];
  activePresetId: string;
  favoriteIds: string[];
  onSelect: (preset: ThemePreset) => void;
  onToggleFavorite: (id: string) => void;
  onDeleteCustom: (id: string) => void;
  onImportJson: (jsonStr: string) => void;
  onExportAllJson: () => void;
  onOpenSynthesizer: () => void;
  onClose: () => void;
}

export function PresetGallery({
  presets,
  activePresetId,
  favoriteIds,
  onSelect,
  onToggleFavorite,
  onDeleteCustom,
  onImportJson,
  onExportAllJson,
  onOpenSynthesizer,
  onClose,
}: PresetGalleryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Favorites', 'Brutalist', 'Technical', 'Modern', 'Editorial', 'Retro', 'Minimalist', 'Tactile'];

  const filteredPresets = presets.filter((p) => {
    const matchesSearch =
      p.metadata.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.metadata.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.metadata.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const isFav = favoriteIds.includes(p.metadata.id);
    if (selectedCategory === 'Favorites' && !isFav) return false;
    if (selectedCategory !== 'All' && selectedCategory !== 'Favorites' && p.metadata.category !== selectedCategory) {
      return false;
    }

    return matchesSearch;
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) onImportJson(content);
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-5xl h-[85vh] bg-neutral-950 border border-neutral-800 rounded-2xl flex flex-col shadow-2xl overflow-hidden text-neutral-100">
        {/* Header Bar */}
        <div className="p-4 sm:p-5 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold">Curated Specimen Library</h2>
              <p className="text-xs text-neutral-400">
                Browse authentic design systems, filter by aesthetic discipline, or synthesize new archetypes.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSynthesizer}
              className="px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-neutral-950 rounded-lg cursor-pointer flex items-center gap-1.5 shadow-sm transition-transform active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Synthesizer</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-800 text-neutral-400 hover:text-neutral-200 cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-4 border-b border-neutral-800/80 bg-neutral-900/20 flex flex-col sm:flex-row gap-3 items-center justify-between">
          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-neutral-100 text-neutral-950 font-bold'
                    : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-neutral-200 border border-neutral-800'
                }`}
              >
                {cat === 'Favorites' ? `★ Favorites (${favoriteIds.length})` : cat}
              </button>
            ))}
          </div>

          {/* Search Box & Import/Export */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search style or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-neutral-100 placeholder:text-neutral-500 outline-none focus:border-emerald-500"
              />
            </div>

            {/* Import / Export JSON */}
            <label
              className="p-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-800 text-neutral-300 cursor-pointer flex items-center gap-1 text-xs"
              title="Import JSON Theme Bundle"
            >
              <Upload className="w-4 h-4" />
              <input type="file" accept=".json" onChange={handleFileUpload} className="hidden" />
            </label>
            <button
              onClick={onExportAllJson}
              className="p-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-800 text-neutral-300 cursor-pointer flex items-center gap-1 text-xs"
              title="Export all themes as JSON"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Preset Cards Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPresets.map((preset) => {
            const isActive = preset.metadata.id === activePresetId;
            const isFav = favoriteIds.includes(preset.metadata.id);
            const { palette, radius, borderWidth } = preset.tokens;

            return (
              <div
                key={preset.metadata.id}
                className={`flex flex-col rounded-xl border transition-all duration-150 overflow-hidden relative group ${
                  isActive
                    ? 'border-emerald-500 ring-2 ring-emerald-500/20 bg-neutral-900/90 shadow-xl'
                    : 'border-neutral-800 hover:border-neutral-700 bg-neutral-900/40 hover:bg-neutral-900/70'
                }`}
              >
                {/* Visual Specimen Miniature Preview Bar */}
                <div
                  className="h-28 p-3 flex flex-col justify-between relative overflow-hidden border-b border-neutral-800"
                  style={{ backgroundColor: palette.background }}
                >
                  <div className="flex items-center justify-between z-10">
                    <span
                      className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: palette.cardSurface,
                        color: palette.textPrimary,
                        border: `1px solid ${palette.border}`,
                      }}
                    >
                      {preset.metadata.category}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(preset.metadata.id);
                      }}
                      className="p-1 rounded bg-black/40 text-neutral-300 hover:text-amber-400 cursor-pointer transition-colors backdrop-blur-xs"
                    >
                      <Star className={`w-3.5 h-3.5 ${isFav ? 'fill-amber-400 text-amber-400' : ''}`} />
                    </button>
                  </div>

                  {/* Micro Component Preview */}
                  <div className="flex items-center gap-2 z-10">
                    <div
                      className="px-2.5 py-1 text-[10px] font-bold shadow-sm"
                      style={{
                        backgroundColor: palette.primary,
                        color: palette.primaryForeground,
                        border: `${borderWidth} solid ${palette.border}`,
                        borderRadius: radius === 'sharp' ? '0px' : radius === 'pill' ? '9999px' : '4px',
                      }}
                    >
                      CTA
                    </div>
                    <div
                      className="px-2.5 py-1 text-[10px] font-medium"
                      style={{
                        backgroundColor: palette.secondary,
                        color: palette.secondaryForeground,
                        border: `${borderWidth} solid ${palette.border}`,
                        borderRadius: radius === 'sharp' ? '0px' : radius === 'pill' ? '9999px' : '4px',
                      }}
                    >
                      Sec
                    </div>
                    <div
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: palette.accent, borderColor: palette.border }}
                    />
                  </div>

                  {/* Color Palette Chips */}
                  <div className="absolute right-3 bottom-3 flex gap-1 z-10">
                    {[palette.primary, palette.secondary, palette.accent, palette.cardSurface, palette.border].map(
                      (c, i) => (
                        <div
                          key={i}
                          className="w-3.5 h-3.5 rounded-full border border-black/20 shadow-xs"
                          style={{ backgroundColor: c }}
                        />
                      )
                    )}
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-sm text-neutral-100 flex items-center gap-1.5">
                        {preset.metadata.name}
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
                        )}
                      </h3>
                      {preset.metadata.isCustom && (
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                          Custom
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-neutral-400 line-clamp-2 mb-3 leading-relaxed">
                      {preset.metadata.tagline}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {preset.metadata.tags.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-400"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 pt-2 border-t border-neutral-800/80">
                    <button
                      onClick={() => onSelect(preset)}
                      className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold cursor-pointer transition-all flex items-center justify-center gap-1.5 ${
                        isActive
                          ? 'bg-emerald-500 text-neutral-950 font-bold'
                          : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200'
                      }`}
                    >
                      {isActive ? (
                        <>
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          <span>Active Specimen</span>
                        </>
                      ) : (
                        <span>Apply Aesthetic</span>
                      )}
                    </button>

                    {preset.metadata.isCustom && (
                      <button
                        onClick={() => onDeleteCustom(preset.metadata.id)}
                        className="p-1.5 rounded-lg border border-red-900/50 hover:bg-red-900/20 text-red-400 cursor-pointer transition-colors"
                        title="Delete custom preset"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
