<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# ARCHETYPE AGENT INSTRUCTIONS & ARCHITECTURE GUIDE

Archetype is a **Visual Design Terminology & Prompt Synthesizer** for modern web applications and AI coding assistants.

---

## 1. Core Philosophy & Mission

### The Problem
When building web apps with AI agents (Cursor, Claude, Antigravity, ChatGPT, v0), users often want distinctive, recognizable aesthetics (e.g. *Bento Grid*, *Cyberpunk 2077*, *Wonky 70s Editorial*, *Raycast Velvet*, *SCADA Industrial*, *Frutiger Aero*). However, users frequently **do not know the exact terminology** or how to combine colors, fonts, card elevations, button mechanics, and graphic accents into a cohesive prompt.

### The Solution
Archetype decomposes UI design into **5 strictly enumerable, recognizable pillars**:
1. **01. Palette**: Curated brand/aesthetic color token harmonies (33 styles).
2. **02. Typography**: Iconic font pairings and typographic rules (21 styles).
3. **03. Surface & Borders**: Corner radii, borders, bevels, chamfers, and shadows (19 styles).
4. **04. UI Components & Controls**: Button mechanics, inputs, badges, and micro-interactions (18 styles).
5. **05. Signature Graphic Accents**: Distinctive graphic DNA (scanlines, aurora glow, crosshairs, washi tape, halftone pop art, barcode, waveform, constellation, etc.) (19 styles).

### Prebuilt Curated Themes (16 Calibrated Harmonies)
Because random combinations across 5 dimensions can occasionally clash, Archetype provides **16 hand-crafted, mathematically harmonious Prebuilt Themes**:
1. *Cyberpunk 2077 Night City* (Sci-Fi HUD)
2. *Obsidian Velvet (Linear / Raycast)* (Velvet Dark)
3. *Stripe Fintech Precision* (Fintech SaaS)
4. *Frutiger Aero Y2K Skeuomorphism* (Y2K Skeuomorphic)
5. *Wonky 70s Editorial Broadsheet* (Retro Print)
6. *Windows 95 Classic Desktop* (90s Desktop)
7. *SCADA Heavy Industrial Machinery* (Industrial Chassis)
8. *Kyoto Ceremonial Zen Modern* (Zen Minimal)
9. *Art Deco 1920s Gatsby Metropolis* (Gilded Glamour)
10. *Game Boy 1989 Retro Gaming* (8-Bit Portable)
11. *CAD Architectural Blueprint* (Blueprint Vector)
12. *Monokai Pro Synth Terminal* (Synth Monospace)
13. *Avant-Garde Klein Blue Gallery* (Curatorial Modern)
14. *Retro 80s Synthwave Arcade* (Neon Arcade)
15. *Bauhaus Constructivist Primaries* (Constructivist)
16. *Cosmic Lilac & Floating Dock (Arc Style)* (Holographic Fluid)

Users can activate any theme with 1 click, browse by category tags (`high-tech`, `developer`, `fintech`, `retro`, `editorial`, `minimal`, `industrial`), or use "Surprise Curated Theme" to roll a guaranteed harmonious aesthetic universe. Once applied, all individual pillars remain freely tweakable.

---

## 2. Codebase Architecture

```
archetype/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root HTML layout with metadata
│   │   ├── page.tsx           # Main Studio split-screen workspace
│   │   └── globals.css        # Tailwind v4 import & Google Fonts @import url
│   ├── components/
│   │   ├── DesignPartPicker.tsx    # Right pane: Category tabs, search & visual part cards
│   │   └── LiveCombinedPreview.tsx # Left pane: Sticky live interactive specimen & prompt viewer
│   ├── lib/
│   │   └── designPartsData.ts      # Data catalogs for all 5 pillars & prompt synthesis logic
│   └── types/
│       └── designParts.ts          # Core TypeScript contracts and classification enums
├── package.json
└── tsconfig.json
```

### Component Roles

- **`src/app/page.tsx`**:
  - Implements the Studio split-screen layout.
  - Left column (`lg:col-span-5` or `lg:col-span-6`): Sticky in viewport (`lg:sticky lg:top-20`), housing the live preview specimen and prompt viewer tabs.
  - Right column (`lg:col-span-7` or `lg:col-span-6`): Scrollable gallery with category pill buttons, search filter, category-specific randomize buttons, and individual part cards.
  - Header controls: Split "Surprise Me ▾" dropdown (Surprise All or target individual category) and "Copy Master Prompt".
  - Interactive selection summary badges with 1-click category jumping and inline `🎲` dice buttons to re-roll individual parts directly.
  - Dedicated category prompt copy chips (`🎨 Palette`, `🔤 Typography`, `📐 Surface`, `🧩 Controls`, `✨ Accent`, `⚡ @theme`).

- **`src/components/LiveCombinedPreview.tsx`**:
  - Renders a live, highly reactive UI specimen honoring all 5 selected parts.
  - Interactive elements:
    - Segmented overview/telemetry/controls tabs.
    - Custom styled select dropdown menu with z-index protection.
    - Checkboxes and radio button groups matching target surface/control styles.
    - Slider (accent color tracks `palette.primary` / `palette.accent`).
    - Form inputs with real focus/hover states and editable value.
    - Hoverable buttons with tactile transform/shadow physics.
    - Dynamic status badges.
    - Ambient/viewport graphic accents (scanlines, dot grids, aurora glows, wireframe grids, barcodes, waveforms, constellations, etc.).

- **`src/components/DesignPartPicker.tsx`**:
  - Category selector tabs with icons and item counts.
  - Search filter filtering by name, tagline, description, or classification.
  - Dedicated `[🎲 Randomize {Category}]` header button in every category strip.
  - Visual preview cards:
    - Palettes: 5-swatch color bars + token chips.
    - Fonts: Live rendered specimen in target font family + classification badge.
    - Surfaces: 3D rendered card container showing exact radius, border, and shadow.
    - Components: Interactive preview button and status badge with matching styles.
    - Accents: Specialized `AccentVisualPreview` component rendering visual representation.

- **`src/lib/designPartsData.ts`**:
  - Master data source. Contains `PALETTE_PARTS` (33), `FONT_PARTS` (21), `SURFACE_PARTS` (19), `COMPONENT_PARTS` (18), `ACCENT_PARTS` (19).
  - `generateCombinedMasterPrompt(selection)`: Synthesizes the 5 prompt snippets into an executable plain-text agent prompt with a Tailwind CSS v4 `@theme` block.

---

## 3. Critical Agent Rules & Invariants

### Rule 1: Target-Agnostic Prompts (Universal Applicability)
- **NEVER** mention specific target application domains in prompt snippets or master prompts (e.g. do **NOT** say *"build a developer issue tracker"* or *"build a crypto wallet"*).
- Prompts must describe **visual language, design tokens, materials, typographic hierarchy, and interaction physics** so users can paste them into any project.

### Rule 2: Plain Text Prompts
- Prompts must be clean, structured Markdown plain text. Never generate image URLs, fake screenshot links, or binary blobs in the generated prompt text.

### Rule 3: Visual Mini-Previews for Every Option
- Every item added to `designPartsData.ts` MUST have a faithful, working visual preview in `DesignPartPicker.tsx`.
- If a new accent type is introduced, update `AccentType` in `types/designParts.ts`, add the mini-preview case in `AccentVisualPreview`, and add the live specimen rendering in `LiveCombinedPreview.tsx`.

### Rule 4: Sticky Studio UX
- The left-hand live specimen card and prompt viewer must remain visible in the viewport when users scroll through extensive options in the right-hand library.

### Rule 5: JSX Comment Syntax
- Never output bare `{/* comment */}` or comment-like strings (e.g. `// WASHI_TAPE` or `///`) directly in JSX text nodes. Always wrap in string expressions like `{'///'}` to satisfy ESLint's `react/jsx-no-comment-textnodes`.

### Rule 6: Tailwind CSS v4 Conventions
- This repository uses Tailwind CSS v4 (`@import "tailwindcss";` in `globals.css`).
- Theme configuration uses `@theme` blocks.
- Do not add legacy `tailwind.config.js` or `tailwind.config.ts`.

---

## 4. Verification Workflow

Before concluding any work, always execute:
1. `npm run lint` — Must report 0 errors and 0 warnings.
2. `npm run build` — Must complete Next.js optimized production build with clean TypeScript validation.
3. Test dev server HTTP status with `curl -sI http://localhost:3000`.
