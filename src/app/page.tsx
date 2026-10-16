'use client';

import React, { useEffect, useState } from 'react';
import { BUILTIN_PRESETS } from '../lib/presets';
import {
  deletePreset,
  exportThemesAsJson,
  getActivePresetId,
  getAllPresets,
  getFavoritePresetIds,
  importThemesFromJson,
  savePreset,
  setActivePresetId,
  toggleFavoritePreset,
} from '../lib/storage';
import { ThemePreset, ThemeTokens, ViewportConfig } from '../types/theme';
import { Header } from '../components/Header';
import { SpecimenCanvas } from '../components/specimens/SpecimenCanvas';
import { VisualTweaker } from '../components/VisualTweaker';
import { PresetGallery } from '../components/PresetGallery';
import { StyleSynthesizerModal } from '../components/StyleSynthesizerModal';
import { ComparisonView } from '../components/ComparisonView';
import { ExportModal } from '../components/ExportModal';

export default function ArchetypeApp() {
  const [presets, setPresets] = useState<ThemePreset[]>(BUILTIN_PRESETS);
  const [activePreset, setActivePreset] = useState<ThemePreset>(BUILTIN_PRESETS[0]);
  const [activeTokens, setActiveTokens] = useState<ThemeTokens>(BUILTIN_PRESETS[0].tokens);
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  // Viewport and UI state
  const [viewport, setViewport] = useState<ViewportConfig>({
    mode: 'desktop',
    width: 1200,
    zoom: 1,
  });
  const [viewMode, setViewMode] = useState<'unified' | 'breakdown'>('unified');
  const [tweakerOpen, setTweakerOpen] = useState<boolean>(true);

  // Modals state
  const [libraryOpen, setLibraryOpen] = useState<boolean>(false);
  const [synthesizerOpen, setSynthesizerOpen] = useState<boolean>(false);
  const [comparisonOpen, setComparisonOpen] = useState<boolean>(false);
  const [exportOpen, setExportOpen] = useState<boolean>(false);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Hydrate from localStorage on client load
  useEffect(() => {
    const timer = setTimeout(() => {
      const loadedPresets = getAllPresets();
      const savedActiveId = getActivePresetId();
      const favs = getFavoritePresetIds();

      setPresets(loadedPresets);
      setFavoriteIds(favs);

      const initial = loadedPresets.find((p) => p.metadata.id === savedActiveId) || loadedPresets[0];
      if (initial) {
        setActivePreset(initial);
        setActiveTokens(initial.tokens);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'e') {
        e.preventDefault();
        setExportOpen(true);
      } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setLibraryOpen(true);
      } else if (e.key === 'Escape') {
        setLibraryOpen(false);
        setSynthesizerOpen(false);
        setComparisonOpen(false);
        setExportOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Switch Active Preset
  const handleSelectPreset = (preset: ThemePreset) => {
    setActivePreset(preset);
    setActiveTokens(preset.tokens);
    setActivePresetId(preset.metadata.id);
    showToast(`Applied "${preset.metadata.name}" aesthetic.`);
  };

  // Live Token Tweaking
  const handleTokensChange = (newTokens: ThemeTokens) => {
    setActiveTokens(newTokens);
  };

  // Save Custom Preset
  const handleSaveCustomPreset = () => {
    const customName = prompt('Enter a name for this custom theme:', `${activePreset.metadata.name} (Custom)`);
    if (!customName) return;

    const newCustomPreset: ThemePreset = {
      metadata: {
        id: `custom-${Date.now().toString(36)}`,
        name: customName,
        tagline: `Custom tuned design specimen based on ${activePreset.metadata.name}`,
        description: `User-customized aesthetic tuned with the Archetype visual customizer.`,
        category: activePreset.metadata.category,
        tags: ['custom', ...activePreset.metadata.tags],
        isCustom: true,
        createdAt: new Date().toISOString(),
      },
      tokens: activeTokens,
    };

    savePreset(newCustomPreset);
    const updated = getAllPresets();
    setPresets(updated);
    setActivePreset(newCustomPreset);
    setActivePresetId(newCustomPreset.metadata.id);
    showToast(`Saved "${customName}" to your local library!`);
  };

  // Reset to original preset tokens
  const handleResetTokens = () => {
    setActiveTokens(activePreset.tokens);
    showToast(`Reset tokens to "${activePreset.metadata.name}" defaults.`);
  };

  // Toggle Favorite
  const handleToggleFavorite = (id: string) => {
    const updatedFavs = toggleFavoritePreset(id);
    setFavoriteIds(updatedFavs);
  };

  // Delete Custom Preset
  const handleDeleteCustom = (id: string) => {
    if (confirm('Are you sure you want to delete this custom theme?')) {
      deletePreset(id);
      const updated = getAllPresets();
      setPresets(updated);
      if (activePreset.metadata.id === id) {
        handleSelectPreset(updated[0]);
      }
      showToast('Custom theme removed.');
    }
  };

  // Import JSON Themes
  const handleImportJson = (jsonStr: string) => {
    const res = importThemesFromJson(jsonStr);
    if (res.success) {
      const updated = getAllPresets();
      setPresets(updated);
      showToast(`Successfully imported ${res.count} design preset(s)!`);
    } else {
      alert(`Import error: ${res.error}`);
    }
  };

  // Export all JSON
  const handleExportAllJson = () => {
    const jsonStr = exportThemesAsJson(presets);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `archetype-themes-bundle-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Downloaded full theme bundle JSON.');
  };

  // Synthesizer apply & save
  const handleSynthesizerApplyAndSave = (synthesized: ThemePreset) => {
    savePreset(synthesized);
    const updated = getAllPresets();
    setPresets(updated);
    setActivePreset(synthesized);
    setActiveTokens(synthesized.tokens);
    setActivePresetId(synthesized.metadata.id);
    setSynthesizerOpen(false);
    showToast(`Synthesized & saved "${synthesized.metadata.name}"!`);
  };

  // Active theme combined with current tweaks for export
  const currentWorkingPreset: ThemePreset = {
    ...activePreset,
    tokens: activeTokens,
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-neutral-950 font-sans">
      {/* 1. Global Navigation Bar */}
      <Header
        presets={presets}
        activePreset={activePreset}
        viewport={viewport}
        viewMode={viewMode}
        tweakerOpen={tweakerOpen}
        onSelectPreset={handleSelectPreset}
        onViewportChange={setViewport}
        onViewModeChange={setViewMode}
        onToggleTweaker={() => setTweakerOpen(!tweakerOpen)}
        onOpenLibrary={() => setLibraryOpen(true)}
        onOpenSynthesizer={() => setSynthesizerOpen(true)}
        onOpenComparison={() => setComparisonOpen(true)}
        onOpenExport={() => setExportOpen(true)}
      />

      {/* 2. Main Workspace: Canvas (Center) + Visual Tweaker Panel (Right) */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Specimen Live Canvas */}
        <SpecimenCanvas tokens={activeTokens} viewport={viewport} viewMode={viewMode} />

        {/* Visual Tweaker Sidebar */}
        {tweakerOpen && (
          <VisualTweaker
            tokens={activeTokens}
            onChange={handleTokensChange}
            onSave={handleSaveCustomPreset}
            onReset={handleResetTokens}
          />
        )}
      </div>

      {/* 3. Global Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-neutral-900 border border-emerald-500/50 text-emerald-300 px-4 py-2 rounded-xl text-xs font-semibold shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-150 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 4. Curated Preset Gallery Modal */}
      {libraryOpen && (
        <PresetGallery
          presets={presets}
          activePresetId={activePreset.metadata.id}
          favoriteIds={favoriteIds}
          onSelect={(preset) => {
            handleSelectPreset(preset);
            setLibraryOpen(false);
          }}
          onToggleFavorite={handleToggleFavorite}
          onDeleteCustom={handleDeleteCustom}
          onImportJson={handleImportJson}
          onExportAllJson={handleExportAllJson}
          onOpenSynthesizer={() => {
            setLibraryOpen(false);
            setSynthesizerOpen(true);
          }}
          onClose={() => setLibraryOpen(false)}
        />
      )}

      {/* 5. Style Synthesizer Modal */}
      {synthesizerOpen && (
        <StyleSynthesizerModal
          onApplyAndSave={handleSynthesizerApplyAndSave}
          onClose={() => setSynthesizerOpen(false)}
        />
      )}

      {/* 6. Side-by-Side Comparison Modal */}
      {comparisonOpen && (
        <ComparisonView
          presets={presets}
          activePreset={currentWorkingPreset}
          onSelectAsActive={(preset) => {
            handleSelectPreset(preset);
            setComparisonOpen(false);
          }}
          onClose={() => setComparisonOpen(false)}
        />
      )}

      {/* 7. Agent-Ready Exporter Modal */}
      {exportOpen && (
        <ExportModal
          preset={currentWorkingPreset}
          onClose={() => setExportOpen(false)}
        />
      )}
    </div>
  );
}
