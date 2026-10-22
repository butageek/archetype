<p align="center">
  <img src="public/brand/logo-lockup.svg" alt="Archetype Logo" width="380" />
</p>

# ARCHETYPE

> **Visual Design Terminology & Prompt Synthesizer for AI Coding Agents**

Archetype breaks web application UI design down into **recognized, enumerable design pillars** (Palette, Typography, Surface & Borders, UI Components, and Signature Graphic Accents). It provides live interactive previews for each recognized style, allowing designers and developers to visually compose an aesthetic archetype and automatically synthesize it into a **complete, target-agnostic AI agent master prompt**.

---

## 💡 The Problem Archetype Solves

When prompting modern AI coding tools (**Cursor, Claude 3.7 / 3.5 Sonnet, Antigravity, ChatGPT, v0**), users often want distinctive, professional aesthetics (such as *Stripe Fintech*, *Raycast Obsidian Velvet*, *Bento Spotlight*, *70s Wonky Editorial*, *SCADA Heavy Industrial*, or *Frutiger Aero*).

However:
1. **Users don't know the exact terminology**: They know how they want it to look, but not what the style is named (e.g. *chamfered 45° cuts*, *claymorphism inner deboss*, *risograph halftone*).
2. **Prompts are usually too vague or over-specific**: A generic prompt yields bland gray SaaS templates, while overly specific prompts hardcode assumptions to a single app domain.
3. **No visual preview before generating**: Users have to generate entire apps just to see if the design language matches their intent.

---

## ⚡ How Archetype Works

Archetype deconstructs UI design into 5 enumerable, modular pillars:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        ARCHETYPE STUDIO WORKSPACE                      │
├───────────────────────────────────┬────────────────────────────────────┤
│   LIVE COMBINED SPECIMEN & EXPORT │       RECOGNIZED PARTS LIBRARY     │
│   (Pinned in Viewport)            │       (Theme Search & Tag Filters) │
│                                   │                                    │
│  • Interactive Specimen Preview   │   ✨ Curated Themes (19 Presets)   │
│  • Segmented Tabs, Inputs, Sliders│   01. Palette (37 styles)          │
│  • Checkboxes, Radios, Dropdown   │   02. Typography (21 fonts)        │
│  • Buttons with Tactile Physics   │   03. Surface & Borders (20 styles)│
│  • Inline 🎲 Dice Re-Roll Toolbar │   04. UI Controls (21 styles)      │
│  • 6 Physical Design Engines      │   05. Graphic Accents (20 styles)  │
│  • 1-Click "⚡ Copy for AI Agent"  │   • Category-specific Randomizers  │
│    (Directives + Theme + Blueprints) • Live Visual Preview Cards      │
└───────────────────────────────────┴────────────────────────────────────┘
```

1. **1-Click Prebuilt Curated Themes**: Choose from 19 calibrated aesthetic universes where palette, font, surface, controls, and accents have been mathematically harmonized to avoid visual clashes.
2. **Modular Customization**: Tweak any of the 5 categories individually via the right-hand library tabs or inline dice badges.
3. **Interactive Live Specimen**: The pinned left-hand studio canvas immediately updates colors, typography, border geometry, shadows, component physics (inputs, dropdowns, checkboxes, radio groups, buttons), and atmospheric graphic accents in real time.
4. **1-Click "⚡ Copy for AI Agent"**: Click the header button to copy the self-contained Agent Kit containing design directives, Tailwind CSS v4 `@theme` tokens, and ready-to-paste React component blueprints for all 11 previewed components (`Card`, `Badge`, `Tabs`, `Button` [Primary & Secondary], `Input`, `Select`, `Toggle`, `Checkbox`, `RadioGroup`, `Slider`, and `StatCard`) matching the active design engine.

---

## 🔬 The Design Engine Architecture

Conventional AI design prompt tools output vague text or generic CSS that leaves shadows, lighting models, and component DOM mechanics up to AI hallucination—inevitably producing bland, generic gray software.

Archetype solves this by governing all rendering through **6 physical design engines** ([`src/lib/designEngines.ts`](src/lib/designEngines.ts)). The engine acts as the **single source of truth** powering both the live interactive specimen in the browser and the drop-in React blueprints exported to your AI agent:

```
┌────────────────────────────────────────────────────────────────┐
│               19 CURATED THEMES / CUSTOM COMBOS                │
└────────────────────────────────────────────────────────────────┘
                                │
          Does it require non-standard CSS physics?
          (Refraction, 3D extrusion, 90s bevels, etc.)
               │                                │
              YES                              NO
               │                                │
      Dedicated Engine                   Universal Engine
     ───────────────────                ──────────────────
     • Milky Frosted Glass              • Stripe Fintech Precision
       └─► frosted-glass                • Obsidian Velvet (Linear)
     • Claymorphism 3D                  • Wonky 70s Editorial
       └─► claymorphism                 • Cyberpunk 2077 Night City
     • Neumorphic Frost                 • Kyoto Zen Modern
       └─► neumorphism                  • CAD Blueprint
     • Windows 95 Classic               • Monokai Pro Terminal
       └─► win95                        • Retro Synthwave Arcade
     • Bauhaus Primaries                • Art Deco Metropolis
       └─► bauhaus                      • Game Boy 1989
                                        • Avant-Garde Klein Blue
                                        • Cosmic Lilac / Arc Style
                                        • Frutiger Aero Y2K
                                          └─► modern-saas (token-driven)
```

1. **`modern-saas` (Universal Token-Reactive Engine)**: Powers standard modern web paradigms (Stripe, Linear/Raycast, Cyberpunk HUD, 70s Editorial, Zen Modern, CAD Blueprint). Dynamically parameterizes elevation, corner radii, borders, and tactile hover physics from the selected tokens.
2. **`frosted-glass` (Apple visionOS Opal Milk Glass)**: Multi-layer backdrop blur (`backdrop-blur-2xl`), specular highlight rim lights (`inset 0 1.5px 2px #fff`), double border glow, and high-contrast debossed slate socket wells.
3. **`claymorphism` (3D Marshmallow & Ceramic)**: Plump inflated volumes, multi-tier drop shadows, dual-tier inner volume highlights (`inset 0 4px 8px ...`), and springy press physics.
4. **`neumorphism` (Soft UI)**: Dual opposing light/dark cast extrusions seamlessly molded from the pale lilac substrate.
5. **`win95` (Classic 90s Desktop)**: Rigid dual-tone raised/inset 3D bevels (`inset 1px 1px #fff, inset -1px -1px #808080`), square corners, and classic inverted `:active` states.
6. **`bauhaus` (Constructivist Geometry)**: Solid geometric black outlines, offset un-blurred drop shadows (`box-shadow: 5px 5px 0px #000`), and raw primary color blocking.

> [!TIP]
> **Complete 11-Component Agent Kit**: When you click **"⚡ Copy for AI Agent"**, Archetype exports production-ready TypeScript/React blueprints for all 11 previewed UI components (`Card`, `Badge`, `Tabs`, `Button` [Primary & Secondary], `Input`, `Select`, `Toggle`, `Checkbox`, `RadioGroup`, `Slider`, and `StatCard`), perfectly matching the physical rendering engine of the selected theme.

---

## ✨ 19 Prebuilt Curated Themes (Guaranteed Harmonious Combinations)

To eliminate design guesswork and ensure colors, fonts, shadows, and accents never clash, Archetype includes 19 production-tested, cohesive themes:

| # | Theme Name | Badge | Category | Key Components |
|---|------------|-------|----------|----------------|
| 1 | **Cyberpunk 2077 Night City** | Sci-Fi HUD | High-Tech | Night City Neon + Rajdhani HUD + 45° Chamfer Cut + Clipped Buttons + Cyber HUD Reticle |
| 2 | **Obsidian Velvet (Linear / Raycast)** | Velvet Dark | Developer | Raycast Aurora + Jakarta Sans + Velvet Glass + Bento Spotlight Buttons + Crosshair Marks |
| 3 | **Stripe Fintech Precision** | Fintech SaaS | Fintech | Fintech Indigo + DM Sans (Tabular) + CAD Hairline + Metric Delta Chips + Dot Matrix Grid |
| 4 | **Frutiger Aero Y2K Skeuomorphism** | Y2K Skeuomorphic | Retro | Frutiger Aqua + Humanist Sans + Gloss Substrate + Aqua Gel Buttons + Rainbow Light Flare |
| 5 | **Wonky 70s Editorial Broadsheet** | Retro Print | Editorial | Warm Editorial + Fraunces Variable Serif + Tactile Paper Lift + Minimal Rounded + Washi Tape Strip |
| 6 | **Windows 95 Classic Desktop** | 90s Desktop | Retro | Vintage Hi-Fi + VT323 Raster CRT + Win95 3D Bevel + Win95 Push Buttons + Corner Ticks |
| 7 | **SCADA Heavy Industrial Machinery** | Industrial Chassis | Industrial | SCADA Industrial + Space Mono + Heavy Chassis + Industrial Relays + Hazard Warning Stripes |
| 8 | **Kyoto Ceremonial Zen Modern** | Zen Minimal | Minimal | Matcha Hinoki + Neo-Grotesque + Nordic Soft + Zen Hairline Controls + Analog Film Grain |
| 9 | **Art Deco 1920s Gatsby Metropolis** | Gilded Glamour | Editorial | Imperial Gold + Art Deco Glamour + Double Brass Frame + Stepped Chevron Buttons + Gold Sunburst Fan |
| 10 | **Game Boy 1989 Retro Gaming** | 8-Bit Portable | Retro | Game Boy DMG-01 + Press Start 2P + Architectural Split + 16-Bit Pixel Buttons + CRT Scanlines |
| 11 | **CAD Architectural Blueprint** | Blueprint Vector | Developer | Blueprint Cyan + Share Tech Mono + Double Hairline Frame + Monospace Badges + Dimensional Callouts |
| 12 | **Monokai Pro Synth Terminal** | Synth Monospace | Developer | Monokai Pro + JetBrains Mono + Frosted Glassmorphism + Segmented Cyber Gauges + 3D Wireframe Grid |
| 13 | **Avant-Garde Klein Blue Gallery** | Curatorial Modern | Minimal | Klein Blue + Cormorant Garamond Serif + Architectural Split + Zen Underline + Inventory Barcode |
| 14 | **Retro 80s Synthwave Arcade** | Neon Arcade | Retro | Synthwave Magenta/Cyan + Righteous Disco + Neon Bloom Wireframe + Laser Shimmer Buttons + Audio Waveform |
| 15 | **Bauhaus Constructivist Primaries** | Constructivist | Industrial | Bauhaus Primaries + Neo-Grotesque + Hard Offset Shadow + Neo-Brutalist Chunky + Dot Matrix Grid |
| 16 | **Cosmic Lilac & Floating Dock (Arc Style)** | Holographic Fluid | High-Tech | Cosmic Lilac + Jakarta Sans + Holographic Foil + Floating Dock Capsules + Node Constellation |
| 17 | **Neumorphic Frost & Soft UI** | Soft UI Neumorphic | Minimal | Soft Periwinkle + Humanist Sans + Neumorphic Soft + Soft Extruded Controls + Concentric Rings |
| 18 | **Milky Frosted Glass (visionOS Opal)** | Opal Milk Glass | Minimal | Opal Milk Glass + Plus Jakarta Sans + Milky Frosted Glass + Milky Glass Pills + Aurora Glow |
| 19 | **Claymorphism 3D Marshmallow & Ceramic** | 3D Claymorphic | Minimal | Matte Ceramic + Plus Jakarta Sans + Claymorphism 3D + Clay Puffy Buttons + Pure Minimal |

---

## 🎨 The 5 Design Pillars

### 1. Color Palettes (37 Curated Styles)
- **Tech Titans & Developer Favorites**: *Stripe Vibrant Fintech Indigo*, *Supabase Dark Emerald Matrix*, *Raycast Obsidian Velvet & Crimson*, *Vercel Stark Monochrome*, *Linear Obsidian Precision*, *Monokai Pro Synth Editor*, *Tokyo Night Cyber Dusk*.
- **Creative & Expressive**: *Arc Cosmic Neon & Electric Lilac*, *Figma Multiplayer Canvas*, *Warm Ivory AI & Baked Terracotta*, *Notion Warm Editorial Parchment*, *International Klein Blue & Museum White*.
- **Physical Materials & Glass**: *Apple visionOS Opal Frosted Milk Glass*, *Clay Matte Ceramic*, *Neumorphic Soft Periwinkle*, *Windows 95 Classic Desktop*.
- **Cyberpunk & Retro**: *Cyberpunk 2077 Night City*, *Cyberpunk Amber Phosphor*, *Retro 80s Synthwave*, *Vaporwave Sunset Gradient*, *Vintage Hi-Fi Warm Ochre*, *Game Boy 1989 DMG-01*.
- **Minimal & Classic**: *Swiss Graphic Stark Minimal*, *Bauhaus Primary Modernism*, *Nordic Slate & Frosted Pine*, *Warm Editorial Monograph*, *Japanese Wabi-Sabi Zen*, *Kyoto Ceremonial Matcha & Hinoki*.
- **Subcultures**: *Acid Rave Toxic Techno*, *Art Deco Imperial Gold*, *Solarpunk Sage & Copper*, *Pastel Macaron Soft Play*, *SCADA Heavy Industrial*, *Dracula Gothic Midnight*, *CAD Engineering Blueprint*, *Frutiger Aero Skeuomorphic*, *Coffee & Cream / Warm Latte*.

### 2. Typography & Font Archetypes (21 Fonts)
- **Modern Bento UI / Plus Jakarta Sans**: Geometric, ultra-clean neo-grotesk with friendly terminal curves.
- **Wonky 70s Editorial Serif / Fraunces**: Characterful variable serif with teardrop terminals and organic curves.
- **Fintech Sharp Executive / DM Sans**: Uncompromising numeric clarity with tabular numbers (`tabular-nums`).
- **Brutalist Mechanical / Space Mono**: Orthogonal fixed-width monospace with angular serifs and Web3 punch.
- **High-Impact Editorial Poster / Bebas Neue**: Tall, condensed uppercase display typeface for monumental headers.
- **Vintage Mechanical Typewriter / Special Elite**: Authentic uneven ink strike and mechanical ribbon bleed for investigative dossiers and archival zines.
- **Retro 1980s Chrome Disco & Sports / Righteous**: Aerodynamic fluid curves with energetic forward momentum for arcade marquees and synthwave titles.
- **Haute Couture Editorial Serif / Cormorant Garamond**: Whisper-thin hairlines and statuesque classical proportions for high-fashion elegance.
- **1982 Green Phosphor CRT Terminal / VT323**: Real 80-column monospaced raster font with cathode beam texture for retro mainframe consoles and BBS boards.
- **Plus**: *Rajdhani HUD*, *Press Start 2P*, *Syne Acid*, *Cinzel Classical Luxury*, *Share Tech Mono CAD*, *Outfit Humanist*, *Caveat Marker*, *Fredoka Cartoon Bubble*, *Playfair Display*, *JetBrains Mono*, *Orbitron Sci-Fi*, *Poiret One*.

### 3. Surface, Borders & Elevation (20 Boundary Treatments)
- **Modern Bento Grid Spotlight Card**: 20px squircle radius with specular 1px hairline border and ambient radial spotlight glow.
- **Raycast Obsidian Velvet Glass**: Ultra-dark translucent substrate, 16px radius, micro top-edge specular highlight (`inset 0 1px 0 0 rgba(255,255,255,0.12)`), and deep 24px blur.
- **Milky Frosted Glass (visionOS Opal)**: Translucent white milk glass with multi-layer blur, specular rim lights, and soft diffuse ambient aura.
- **Claymorphism 3D Inflated Surface**: Plump inflated 3D marshmallow elevation with dual-tier inner volume highlights and tactile springiness.
- **Windows 95 Classic 3D Beveled Window**: Authentic 90s dual-tone raised bevels (`inset 1px 1px #fff, inset -1px -1px #808080`) with square `0px` corners.
- **Double Hairline Drafting Frame**: Architectural double border (`border-style: double; 4px`) inspired by technical blueprints and patent certificates.
- **Iridescent Holographic Foil Glass**: Frosted translucent backdrop (`backdrop-blur-md`) with multi-spectral chromatic border glow.
- **Soft Neumorphic Emboss & Deboss**: Dual opposing light/dark cast shadows (`6px 6px 14px` and `-6px -6px 14px`).
- **Swiss Architectural Split**: Strict 0px right angles with orthogonal hairline grid dividers.
- **Floating Island Elevated Modal**: 24px rounded corners hovering freely with multi-layered atmospheric diffusion shadow.
- **Plus**: *Cyberpunk 45° Chamfer Cut*, *Neo-Brutalist Hard Offset Shadow*, *Frutiger Aero Gloss*, *CAD Hairline Grid Seam*, *Frosted Glassmorphism*, *Nordic Soft Rounded*, *Tactile Layered Paper Lift*, *Neon Wireframe Bloom*, *Art Deco Double Brass Frame*, *Heavy SCADA Industrial Chassis*.

### 4. UI Components & Controls (21 Control Archetypes)
- **Bento Micro-Spotlight Glow Buttons**: Rounded 12px pill geometry with translucent specular border, dark substrate fill, micro status LED, and vertical lift.
- **Milky Frosted Glass Pills**: Translucent milk acrylic buttons and switches with specular rims and high-contrast slate debossed wells.
- **Clay 3D Puffy Buttons**: Inflated marshmallow push-buttons with pillowy depth, candy badges, and tactile compression physics.
- **Floating Capsule Dock Controls**: macOS dock-inspired pill capsule buttons (`rounded-full`) with frosted glass blur and springy active press response (`active:scale-95`).
- **Windows 95 Classic 3D Push-Buttons**: Chunky tactile gray buttons (`bg-[#dfdfdf]`) with light top-left and shadow bottom-right borders that visually invert and depress on `:active`.
- **Neumorphic Soft Controls**: Tactile extruded buttons and debossed concave socket switches molded seamlessly from the background.
- **Avionics Guarded Switches & Stencil Tags**: Aerospace cockpit controls with dark recessed switch wells, safety hash-marks, and stenciled amber warning telemetry.
- **Cyberpunk Segmented Gauge & Notch Buttons**: 45° cut-corner action buttons with integrated LED power bars and high-speed hover brightness.
- **Tactile 3D Mechanical Push Buttons**: Physical keycap effect with thick bottom border bevel (`border-b-4`) that physically depresses on click.
- **Fintech Metric Delta Chips**: Precision executive controls with integrated percentage performance tags (`▲ +14.2%`) and tabular figures.
- **Laser Gradient Shimmer Buttons**: Vivid multi-stop gradient (violet to fuchsia to indigo) with radiant hover bloom (`hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]`).
- **Plus**: *Cyberpunk HUD Clipped Buttons*, *Neo-Brutalist Chunky Buttons*, *Frutiger Aero Gel Buttons*, *Minimal Rounded SaaS*, *SCADA Industrial Relays*, *Frosted Glass Floating Capsules*, *Terminal Monospace Badges*, *16-Bit Pixel Beveled Buttons*, *Art Deco Stepped Brass Buttons*, *Japanese Zen Hairline Underline*.

### 5. Signature Graphic Accents (20 Graphic DNA Elements)
- **Technical Inventory Barcode & Serial Checksum**: Variable-width vertical barcode stripes with alphanumeric verification checksums (`REF-ID: [SPEC-7702-X]`).
- **Realtime Audio Waveform & Oscilloscope Raster**: Live acoustic frequency spectrum track with decibel level readouts (`FREQ 44.1 kHz // -6.2 dB FS`).
- **Decentralized Constellation Node Graph**: Interconnected glowing network vertices linked by thin coordinate vector lines.
- **Aurora Atmospheric Mesh Glow**: Diffused multi-point radial mesh gradients floating in corners and behind focal elements.
- **Concentric Dial Rings & Radar Ticks**: Precision instrument dial rings with radial angular measurement markings.
- **Perspective Tech Wireframe Grid**: 3D perspective wireframe matrix with subtle coordinate status ribbon.
- **Halftone Pop Art Dot Matrix**: Retro risograph comic book halftone screenprint dot pattern.
- **Plus-Grid Alignment Calibration Marks**: Micro `+` crosshair registration marks at structural corner intersections.
- **Plus**: *Cyberpunk Hologram Reticle & Circuit Traces*, *CRT Raster Scanlines Overlay*, *CAD Drafting Crosshairs & Rulers*, *Frutiger Rainbow Light Flare*, *Tactile Washi Tape Strip*, *Art Deco Gold Sunburst Fan*, *Technical Dot Grid Matrix*, *Corner Registration Ticks (┌ ┐ └ ┘)*, *Industrial Hazard Warning Stripes*, *CAD Blueprint Dimensional Callouts*, *Subtle Analog Film Grain / Noise*, *Pure Minimal (No Accents)*.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router with Turbopack)
- **Language**: TypeScript 5 (Strict type checking)
- **Styling**: Tailwind CSS v4 (`@theme`, `@import "tailwindcss"`)
- **Icons**: Lucide React
- **Micro-interactions**: Canvas Confetti
- **Typography**: Google Fonts Web Fonts loaded via `@import`

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ installed
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/butageek/archetype.git
cd archetype

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

- `npm run dev`: Launch local Next.js development server on port 3000.
- `npm run build`: Compile and build optimized production bundle.
- `npm run lint`: Run ESLint checks.
- `npm run check:data`: Validate design-catalog data integrity — unique IDs, curated-theme cross-references, hex color tokens, Google Fonts coverage, `AccentType` union sync, and prompt-synthesis smoke tests. Run it after any edit to the catalogs in `src/lib/designPartsData.ts`.

---

## 🎨 Brand Assets & Logo Kit

Archetype uses the **Interlocking Brackets** mark — two minimalist angled code brackets that interlock diagonally to form an uppercase `A`, uniting code syntax with architectural structure:

| Asset | Format | Location | Description |
|---|---|---|---|
| **Master Icon** | SVG | [`public/brand/logo.svg`](public/brand/logo.svg) | Clean monochrome vector mark with `currentColor` fill |
| **Dark Mode** | SVG | [`public/brand/logo-dark.svg`](public/brand/logo-dark.svg) | Pure white fill for dark backgrounds |
| **Light Mode** | SVG | [`public/brand/logo-light.svg`](public/brand/logo-light.svg) | Obsidian fill (`#09090b`) for light surfaces |
| **Emerald Phosphor** | SVG | [`public/brand/logo-emerald.svg`](public/brand/logo-emerald.svg) | Signature emerald accent (`#10b981`) |
| **Aurora Gradient** | SVG | [`public/brand/logo-gradient.svg`](public/brand/logo-gradient.svg) | Fluid aurora spectral gradient fill |
| **Horizontal Lockup** | SVG | [`public/brand/logo-lockup.svg`](public/brand/logo-lockup.svg) | Brand mark + ARCHETYPE wordmark + micro-tagline |
| **Dark Lockup** | SVG | [`public/brand/logo-lockup-dark.svg`](public/brand/logo-lockup-dark.svg) | Full lockup for dark surfaces |
| **Social / OG Card** | SVG | [`public/brand/og-banner.svg`](public/brand/og-banner.svg) | 1200×630px social media embed card |

---

## 📋 License

MIT License. Designed and built with care for the AI developer community.
