import { ThemePreset } from '../types/theme';
import { BUILTIN_PRESETS } from './presets';

const STORAGE_KEY_PRESETS = 'archetype_saved_presets_v1';
const STORAGE_KEY_ACTIVE_PRESET_ID = 'archetype_active_preset_id_v1';
const STORAGE_KEY_FAVORITES = 'archetype_favorite_ids_v1';

export function getSavedPresets(): ThemePreset[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PRESETS);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error('Failed to load presets from localStorage', err);
    return [];
  }
}

export function getAllPresets(): ThemePreset[] {
  const saved = getSavedPresets();
  const savedIds = new Set(saved.map((p) => p.metadata.id));
  const builtinsFiltered = BUILTIN_PRESETS.filter((b) => !savedIds.has(b.metadata.id));
  return [...builtinsFiltered, ...saved];
}

export function savePreset(preset: ThemePreset): void {
  if (typeof window === 'undefined') return;
  const currentSaved = getSavedPresets();
  const existingIdx = currentSaved.findIndex((p) => p.metadata.id === preset.metadata.id);

  const updatedPreset = {
    ...preset,
    metadata: {
      ...preset.metadata,
      isCustom: true,
      updatedAt: new Date().toISOString(),
      createdAt: preset.metadata.createdAt || new Date().toISOString(),
    },
  };

  if (existingIdx >= 0) {
    currentSaved[existingIdx] = updatedPreset;
  } else {
    currentSaved.unshift(updatedPreset);
  }

  localStorage.setItem(STORAGE_KEY_PRESETS, JSON.stringify(currentSaved));
}

export function deletePreset(id: string): void {
  if (typeof window === 'undefined') return;
  const currentSaved = getSavedPresets().filter((p) => p.metadata.id !== id);
  localStorage.setItem(STORAGE_KEY_PRESETS, JSON.stringify(currentSaved));
}

export function getActivePresetId(): string {
  if (typeof window === 'undefined') return BUILTIN_PRESETS[0].metadata.id;
  const saved = localStorage.getItem(STORAGE_KEY_ACTIVE_PRESET_ID);
  if (saved) return saved;
  return BUILTIN_PRESETS[0].metadata.id;
}

export function setActivePresetId(id: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY_ACTIVE_PRESET_ID, id);
}

export function getFavoritePresetIds(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_FAVORITES);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function toggleFavoritePreset(id: string): string[] {
  if (typeof window === 'undefined') return [];
  const current = getFavoritePresetIds();
  const next = current.includes(id) ? current.filter((x) => x !== id) : [...current, id];
  localStorage.setItem(STORAGE_KEY_FAVORITES, JSON.stringify(next));
  return next;
}

export function exportThemesAsJson(presets: ThemePreset[]): string {
  return JSON.stringify(
    {
      version: '1.0.0',
      exportedAt: new Date().toISOString(),
      generator: 'Archetype Design Specimen Synthesizer',
      presets,
    },
    null,
    2
  );
}

export function importThemesFromJson(jsonStr: string): { success: boolean; count: number; error?: string } {
  try {
    const data = JSON.parse(jsonStr);
    const presetsToImport = Array.isArray(data) ? data : data.presets;
    if (!Array.isArray(presetsToImport)) {
      return { success: false, count: 0, error: 'Invalid file format: missing presets array.' };
    }

    let count = 0;
    for (const p of presetsToImport) {
      if (p.metadata?.id && p.tokens?.palette) {
        savePreset(p);
        count++;
      }
    }

    return { success: true, count };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown parsing error';
    return { success: false, count: 0, error: errorMessage };
  }
}
