#!/usr/bin/env node
/**
 * Data-integrity checks for the Archetype design-parts catalogs.
 *
 * Validates src/lib/designPartsData.ts (+ types + globals.css):
 *   1. Catalog shape — required fields present and non-empty on every item
 *   2. Unique IDs within every catalog
 *   3. Valid hex color tokens (palette fields + curated theme accentColor)
 *   4. Curated themes — all 5 part references resolve; no duplicate compositions
 *   5. Typography — every primary font family is loaded by the Google Fonts
 *      @import in src/app/globals.css
 *   6. AccentType union <-> AccentPart.type stay in sync (both directions)
 *   7. Prompt synthesis smoke test (generateCombinedMasterPrompt / buildThemeBlock)
 *
 * Run: npm run check:data   (exits non-zero on any failure, CI-friendly)
 */

import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);

const errors = [];
const fail = (msg) => errors.push(msg);

// ---------------------------------------------------------------------------
// Compile the TS data module to a temp dir using the project's typescript
// install, then import it (no test framework, no extra dependencies).
// ---------------------------------------------------------------------------
const outDir = mkdtempSync(join(tmpdir(), 'archetype-check-'));
let mod;
try {
  const tscBin = require.resolve('typescript/bin/tsc');
  const dataTs = join(root, 'src/lib/designPartsData.ts');
  const typesTs = join(root, 'src/types/designParts.ts');
  try {
    execFileSync(
      process.execPath,
      [
        tscBin,
        '--module', 'commonjs',
        '--target', 'es2022',
        '--moduleResolution', 'node',
        '--skipLibCheck',
        '--outDir', outDir,
        dataTs,
        typesTs,
      ],
      { stdio: ['ignore', 'pipe', 'pipe'] },
    );
  } catch (compileError) {
    console.error('✗ FAILED: TypeScript compile error in data files:');
    const captured = `${String(compileError.stdout ?? '')}\n${String(compileError.stderr ?? '')}`;
    for (const line of captured.split('\n').filter((l) => l.trim() !== '').slice(0, 10)) console.error(`  ${line}`);
    process.exit(1);
  }
  const imported = await import(pathToFileURL(join(outDir, 'lib', 'designPartsData.js')).href);
  mod = imported.default ?? imported;
} finally {
  rmSync(outDir, { recursive: true, force: true });
}
if (!mod) {
  console.error('✗ Failed to load compiled designPartsData module');
  process.exit(1);
}

const {
  PALETTE_PARTS,
  FONT_PARTS,
  SURFACE_PARTS,
  COMPONENT_PARTS,
  ACCENT_PARTS,
  CURATED_THEMES,
  DEFAULT_DESIGN_PARTS,
} = mod;

// ---------------------------------------------------------------------------
// 1. Catalog shape: required non-empty string fields
// ---------------------------------------------------------------------------
const CATALOGS = [
  ['PALETTE_PARTS', PALETTE_PARTS, ['id', 'name', 'tagline', 'description', 'primary', 'secondary', 'accent', 'background', 'surface', 'border', 'text', 'textMuted', 'promptSnippet']],
  ['FONT_PARTS', FONT_PARTS, ['id', 'name', 'tagline', 'description', 'fontFamily', 'previewSample', 'promptSnippet']],
  ['SURFACE_PARTS', SURFACE_PARTS, ['id', 'name', 'tagline', 'description', 'borderWidth', 'radius', 'shadow', 'promptSnippet']],
  ['COMPONENT_PARTS', COMPONENT_PARTS, ['id', 'name', 'tagline', 'description', 'buttonClass', 'badgeClass', 'promptSnippet']],
  ['ACCENT_PARTS', ACCENT_PARTS, ['id', 'name', 'tagline', 'description', 'type', 'promptSnippet']],
  ['CURATED_THEMES', CURATED_THEMES, ['id', 'name', 'tagline', 'description', 'badge', 'accentColor', 'paletteId', 'fontId', 'surfaceId', 'componentId', 'accentId']],
];

for (const [catalogName, catalog, fields] of CATALOGS) {
  if (!Array.isArray(catalog) || catalog.length === 0) {
    fail(`${catalogName} is empty or missing`);
    continue;
  }
  catalog.forEach((item, i) => {
    for (const field of fields) {
      const value = item[field];
      if (typeof value !== 'string' || value.trim() === '') {
        fail(`${catalogName}[${i}] (${item.id ?? 'no id'}): missing or empty field "${field}"`);
      }
    }
  });
}
console.log(`✓ Catalog shape: ${CATALOGS.map(([n, c]) => `${n}=${c?.length ?? 0}`).join(', ')}`);

// ---------------------------------------------------------------------------
// 2. Unique IDs per catalog
// ---------------------------------------------------------------------------
for (const [catalogName, catalog] of CATALOGS) {
  const ids = catalog?.map((x) => x.id) ?? [];
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) fail(`${catalogName}: duplicate id(s): ${[...new Set(dupes)].join(', ')}`);
}
console.log('✓ Unique IDs across all catalogs');

// ---------------------------------------------------------------------------
// 3. Hex color validation
// ---------------------------------------------------------------------------
const HEX_RE = /^#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;
const COLOR_FIELDS = ['primary', 'secondary', 'accent', 'background', 'surface', 'border', 'text', 'textMuted'];
for (const pal of PALETTE_PARTS) {
  for (const field of COLOR_FIELDS) {
    if (!HEX_RE.test(pal[field] ?? '')) fail(`palette "${pal.id}": "${field}" is not a valid hex color ("${pal[field]}")`);
  }
}
for (const theme of CURATED_THEMES) {
  if (!HEX_RE.test(theme.accentColor ?? '')) fail(`curated theme "${theme.id}": accentColor is not a valid hex color ("${theme.accentColor}")`);
}
console.log('✓ Hex color tokens valid');

// ---------------------------------------------------------------------------
// 4. Curated theme referential integrity + duplicate compositions
// ---------------------------------------------------------------------------
const byId = {
  paletteId: new Set(PALETTE_PARTS.map((x) => x.id)),
  fontId: new Set(FONT_PARTS.map((x) => x.id)),
  surfaceId: new Set(SURFACE_PARTS.map((x) => x.id)),
  componentId: new Set(COMPONENT_PARTS.map((x) => x.id)),
  accentId: new Set(ACCENT_PARTS.map((x) => x.id)),
};
const compositions = new Map();
for (const theme of CURATED_THEMES) {
  for (const [refKey, ids] of Object.entries(byId)) {
    if (!ids.has(theme[refKey])) {
      fail(`curated theme "${theme.id}": broken reference ${refKey} -> "${theme[refKey]}"`);
    }
  }
  const key = [theme.paletteId, theme.fontId, theme.surfaceId, theme.componentId, theme.accentId].join(' + ');
  if (compositions.has(key)) {
    fail(`curated themes "${compositions.get(key)}" and "${theme.id}" have identical 5-part compositions`);
  }
  compositions.set(key, theme.id);
}
console.log('✓ Curated themes: all references resolve, compositions unique');

// ---------------------------------------------------------------------------
// 5. Primary font families are loaded via the Google Fonts @import
// ---------------------------------------------------------------------------
const css = readFileSync(join(root, 'src/app/globals.css'), 'utf8');
const loadedFamilies = new Set(
  [...css.matchAll(/family=([A-Za-z0-9+]+)/g)].map((m) => m[1].replace(/\+/g, ' ')),
);
for (const font of FONT_PARTS) {
  const firstToken = font.fontFamily.split(',')[0].trim();
  if (firstToken.startsWith('var(')) continue; // loaded via next/font CSS variable, not the Google Fonts @import
  const firstQuoted = font.fontFamily.match(/'([^']+)'/);
  if (!firstQuoted) continue; // generic system families only — nothing to verify
  if (!loadedFamilies.has(firstQuoted[1])) {
    fail(`font "${font.id}": primary family "${firstQuoted[1]}" is not loaded by the Google Fonts @import in globals.css`);
  }
}
console.log('✓ Primary font families covered by Google Fonts @import');

// ---------------------------------------------------------------------------
// 6. AccentType union <-> AccentPart.type sync
// ---------------------------------------------------------------------------
const typesSrc = readFileSync(join(root, 'src/types/designParts.ts'), 'utf8');
const accentTypeBlock = typesSrc.slice(
  typesSrc.indexOf('export type AccentType'),
  typesSrc.indexOf('export interface AccentPart'),
);
const declaredTypes = new Set([...accentTypeBlock.matchAll(/'([a-z-]+)'/g)].map((m) => m[1]));
const usedTypes = new Set(ACCENT_PARTS.map((a) => a.type));
for (const type of usedTypes) {
  if (!declaredTypes.has(type)) fail(`accent part uses type "${type}" which is not declared in the AccentType union`);
}
for (const type of declaredTypes) {
  if (!usedTypes.has(type)) fail(`AccentType "${type}" has no AccentPart using it (missing library entry / preview)`);
}
console.log('✓ AccentType union and accent parts in sync');

// ---------------------------------------------------------------------------
// 7. Prompt synthesis smoke test
// ---------------------------------------------------------------------------
const sel = DEFAULT_DESIGN_PARTS;
const prompt = mod.generateCombinedMasterPrompt(sel);
const expectedParts = [sel.palette, sel.font, sel.surface, sel.components, sel.accent];
for (const part of expectedParts) {
  if (!prompt.includes(part.promptSnippet)) fail(`generateCombinedMasterPrompt: missing promptSnippet of "${part.id}"`);
}
if (!prompt.includes('### Tailwind CSS v4 Theme Block')) fail('generateCombinedMasterPrompt: missing @theme section header');
const block = mod.buildThemeBlock(sel);
if (!block.startsWith('@theme {') || !block.trimEnd().endsWith('}')) fail(`buildThemeBlock: malformed output: ${JSON.stringify(block.slice(0, 40))}...`);
if (block.includes('`')) fail('buildThemeBlock: output contains stray backtick(s)');
if (!prompt.includes(`\`\`\`css\n${block}\n\`\`\``)) fail('generateCombinedMasterPrompt: @theme block not embedded as a fenced css block');
console.log('✓ Prompt synthesis smoke test (master prompt + @theme block)');

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------
console.log('');
if (errors.length) {
  console.error(`✗ FAILED: ${errors.length} data-integrity error(s):`);
  for (const err of errors) console.error(`  - ${err}`);
  process.exit(1);
}
console.log('✓ All data-integrity checks passed.');
