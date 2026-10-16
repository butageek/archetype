# ▲ ARCHETYPE

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
│   LIVE COMBINED MOCKUP & PROMPT   │       RECOGNIZED PARTS LIBRARY     │
│   (Pinned in Viewport)            │       (Searchable Categories)      │
│                                   │                                    │
│  • Interactive Specimen Preview   │   01. Palette (28 styles)          │
│  • Real Input, Slider, Buttons    │   02. Typography (18 fonts)        │
│  • Master Plain-Text Prompt Tab   │   03. Surface & Borders (17 styles)│
│  • 1-Click Universal Copy         │   04. UI Components (15 styles)    │
│                                   │   05. Graphic Accents (16 styles)  │
└───────────────────────────────────┴────────────────────────────────────┘
```

1. **Pick or Randomize**: Select an option from any of the 5 categories, or click **"Surprise Me"** to roll a random aesthetic combination.
2. **Interactive Live Specimen**: The pinned left-hand studio canvas immediately updates colors, typography, border geometry, shadows, component physics, and atmospheric graphic accents in real time.
3. **1-Click Copy Master Prompt**: Click **"Copy Complete Prompt"** to copy the synthesized prompt with Tailwind CSS v4 `@theme` tokens, ready to paste directly into Cursor, Claude, or Antigravity.

---

## 🎨 The 5 Design Pillars

### 1. Color Palettes (28 Curated Styles)
- **Tech Titans & Developer Favorites**: *Stripe Vibrant Fintech Indigo*, *Supabase Dark Emerald Matrix*, *Raycast Obsidian Velvet & Crimson*, *Vercel Stark Monochrome*, *Linear Obsidian Precision*.
- **Creative & Expressive**: *Arc Cosmic Neon & Electric Lilac*, *Figma Multiplayer Canvas*, *Warm Ivory AI & Baked Terracotta*, *Notion Warm Editorial Parchment*.
- **Cyberpunk & Retro**: *Cyberpunk 2077 Night City*, *Cyberpunk Amber Phosphor*, *Retro 80s Synthwave*, *Vaporwave Sunset Gradient*, *Vintage Hi-Fi Warm Ochre*.
- **Minimal & Classic**: *Swiss Graphic Stark Minimal*, *Bauhaus Primary Modernism*, *Nordic Slate & Frosted Pine*, *Warm Editorial Monograph*, *Japanese Wabi-Sabi Zen*.
- **Subcultures**: *Acid Rave Toxic Techno*, *Art Deco Imperial Gold*, *Solarpunk Sage & Copper*, *Pastel Macaron Soft Play*, *SCADA Heavy Industrial*, *Dracula Gothic Midnight*, *CAD Engineering Blueprint*, *Frutiger Aero Skeuomorphic*.

### 2. Typography & Font Archetypes (18 Fonts)
- **Modern Bento UI / Plus Jakarta Sans**: Geometric, ultra-clean neo-grotesk with friendly terminal curves.
- **Wonky 70s Editorial Serif / Fraunces**: Characterful variable serif with teardrop terminals and organic curves.
- **Fintech Sharp Executive / DM Sans**: Uncompromising numeric clarity with tabular numbers (`tabular-nums`).
- **Brutalist Mechanical / Space Mono**: Orthogonal fixed-width monospace with angular serifs and Web3 punch.
- **High-Impact Editorial Poster / Bebas Neue**: Tall, condensed uppercase display typeface for monumental headers.
- **Plus**: *Rajdhani HUD*, *Press Start 2P*, *Syne Acid*, *Cinzel Classical Luxury*, *Share Tech Mono CAD*, *Outfit Humanist*, *Caveat Marker*, *Fredoka Cartoon Bubble*, *Space Grotesk*, *Playfair Display*, *JetBrains Mono*, *Orbitron Sci-Fi*, *Poiret One*.

### 3. Surface, Borders & Elevation (17 Boundary Treatments)
- **Modern Bento Grid Spotlight Card**: 20px squircle radius with specular 1px hairline border and ambient radial spotlight glow.
- **Raycast Obsidian Velvet Glass**: Ultra-dark translucent substrate, 16px radius, micro top-edge specular highlight (`inset 0 1px 0 0 rgba(255,255,255,0.12)`), and deep 24px blur.
- **Soft Neumorphic Emboss & Deboss**: Dual opposing light/dark cast shadows (`6px 6px 14px` and `-6px -6px 14px`).
- **Swiss Architectural Split**: Strict 0px right angles with orthogonal hairline grid dividers.
- **Floating Island Elevated Modal**: 24px rounded corners hovering freely with multi-layered atmospheric diffusion shadow.
- **Plus**: *Cyberpunk 45° Chamfer Cut*, *Neo-Brutalist Hard Offset Shadow*, *Frutiger Aero Gloss*, *CAD Hairline Grid Seam*, *Frosted Glassmorphism*, *Nordic Soft Rounded*, *Tactile Layered Paper Lift*, *Neon Wireframe Bloom*, *Capsule Pill 9999px*, *Claymorphism 3D Deboss*, *Art Deco Double Brass Frame*, *Heavy SCADA Industrial Chassis*.

### 4. UI Components & Controls (15 Control Archetypes)
- **Bento Micro-Spotlight Glow Buttons**: Rounded 12px pill geometry with translucent specular border, dark substrate fill, micro status LED, and vertical lift.
- **Floating Capsule Dock Controls**: macOS dock-inspired pill capsule buttons (`rounded-full`) with frosted glass blur and springy active press response (`active:scale-95`).
- **Tactile 3D Mechanical Push Buttons**: Physical keycap effect with thick bottom border bevel (`border-b-4`) that physically depresses on click.
- **Fintech Metric Delta Chips**: Precision executive controls with integrated percentage performance tags (`▲ +14.2%`) and tabular figures.
- **Laser Gradient Shimmer Buttons**: Vivid multi-stop gradient (violet to fuchsia to indigo) with radiant hover bloom (`hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]`).
- **Plus**: *Cyberpunk HUD Clipped Buttons*, *Neo-Brutalist Chunky Buttons*, *Frutiger Aero Gel Buttons*, *Minimal Rounded SaaS*, *SCADA Industrial Relays*, *Frosted Glass Floating Capsules*, *Terminal Monospace Badges*, *16-Bit Pixel Beveled Buttons*, *Art Deco Stepped Brass Buttons*, *Japanese Zen Hairline Underline*.

### 5. Signature Graphic Accents (16 Graphic DNA Elements)
- **Aurora Atmospheric Mesh Glow**: Diffused multi-point radial mesh gradients floating in corners and behind focal elements.
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
git clone https://github.com/your-username/archetype.git
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

---

## 📋 License

MIT License. Designed and built with care for the AI developer community.
