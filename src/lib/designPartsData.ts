import {
  AccentPart,
  ComponentPart,
  DesignPartsSelection,
  FontPart,
  PalettePart,
  SurfacePart,
} from '../types/designParts';

// ============================================================================
// 1. COLOR PALETTES (RECOGNIZED COLOR AESTHETICS & MOODS)
// ============================================================================
export const PALETTE_PARTS: PalettePart[] = [
  {
    id: 'retro-synthwave',
    name: 'Retro 80s Synthwave',
    tagline: 'Electric neon magenta, laser cyan, and deep cosmic obsidian purple',
    description: 'Vibrant 1980s retro-futuristic arcade aesthetic with high-voltage neon glow contrasting against deep midnight violet.',
    primary: '#FF007F',
    secondary: '#00F0FF',
    accent: '#FFE600',
    background: '#12072B',
    surface: '#1E0C42',
    border: '#FF007F',
    text: '#FFFFFF',
    textMuted: '#B197FC',
    isDark: true,
    promptSnippet: `### Color Palette Tokens: Retro 80s Synthwave
- Mood: Electric retro-futuristic arcade aesthetic with high-voltage neon against deep obsidian violet.
- Background: #12072B (deep cosmic midnight purple)
- Surface / Cards: #1E0C42 (elevated dark violet substrate)
- Borders: #FF007F (electric neon magenta)
- Primary Accent: #FF007F (laser hot pink)
- Secondary Accent: #00F0FF (electric cyan bloom)
- Text Primary: #FFFFFF (crisp white)
- Text Muted: #B197FC (soft lavender haze)`,
  },
  {
    id: 'vintage-hifi',
    name: 'Vintage 70s Hi-Fi',
    tagline: 'Warm peanut mustard, terracotta clay, olive avocado, and cream',
    description: 'Analog 1970s audio equipment tones with warm tactile earth shades, walnut faceplate warmth, and nostalgic mellow lighting.',
    primary: '#DDA15E',
    secondary: '#BC6C25',
    accent: '#606C38',
    background: '#FEFAE0',
    surface: '#F4EED4',
    border: '#D4A373',
    text: '#283618',
    textMuted: '#606C38',
    isDark: false,
    promptSnippet: `### Color Palette Tokens: Vintage 70s Hi-Fi
- Mood: Analog 1970s hardware tones with warm tactile earth shades, mustard warmth, and mellow cream substrates.
- Background: #FEFAE0 (warm aged parchment cream)
- Surface / Cards: #F4EED4 (warm analog faceplate substrate)
- Borders: #D4A373 (aged brass hairline)
- Primary Accent: #DDA15E (peanut mustard gold)
- Secondary Accent: #BC6C25 (terracotta walnut clay)
- Olive Accent: #606C38 (warm avocado green)
- Text Primary: #283618 (deep forest earth)
- Text Muted: #606C38 (subtle moss olive)`,
  },
  {
    id: 'cyberpunk-phosphor',
    name: 'Cyberpunk Phosphor Terminal',
    tagline: 'Luminous radiation emerald, amber warning, and reactor chamber black',
    description: 'Industrial command console reminiscent of CRT terminal monitors with vivid radioactive green phosphor glowing on pitch black.',
    primary: '#00FF66',
    secondary: '#00D9A6',
    accent: '#FFB000',
    background: '#070C09',
    surface: '#0E1712',
    border: '#00FF66',
    text: '#00FF88',
    textMuted: '#4F8F68',
    isDark: true,
    promptSnippet: `### Color Palette Tokens: Cyberpunk Phosphor Terminal
- Mood: High-density CRT terminal monitor with vivid radioactive emerald glowing on reactor chamber black.
- Background: #070C09 (pitch reactor black)
- Surface / Cards: #0E1712 (dark phosphor substrate)
- Borders: #00FF66 (luminous phosphor emerald)
- Primary Accent: #00FF66 (radiation green glow)
- Warning Accent: #FFB000 (amber caution)
- Text Primary: #00FF88 (crisp phosphor beam)
- Text Muted: #4F8F68 (dim cathode green)`,
  },
  {
    id: 'bauhaus-primary',
    name: 'Bauhaus Constructivist Primaries',
    tagline: 'Canary yellow, cobalt blue, cinnabar red, and stark ink black',
    description: 'Iconic 1920s Walter Gropius Dessau palette celebrating pure primary colors with graphic discipline and stark white/black contrast.',
    primary: '#FFE600',
    secondary: '#0047AB',
    accent: '#E63946',
    background: '#FFFFFF',
    surface: '#F8F9FA',
    border: '#000000',
    text: '#000000',
    textMuted: '#555555',
    isDark: false,
    promptSnippet: `### Color Palette Tokens: Bauhaus Constructivist Primaries
- Mood: Authentic 1920s Bauhaus Dessau constructivism with bold primary color pops and disciplined architectural contrast.
- Background: #FFFFFF (stark architectural white)
- Surface / Cards: #F8F9FA (clean light substrate)
- Borders: #000000 (2px stark solid black)
- Primary Pop: #FFE600 (canary primary yellow)
- Secondary Pop: #0047AB (cobalt architectural blue)
- Accent Pop: #E63946 (cinnabar vermilion red)
- Text Primary: #000000 (pure black)
- Text Muted: #555555 (disciplined neutral gray)`,
  },
  {
    id: 'nordic-slate',
    name: 'Nordic Minimalist Slate',
    tagline: 'Subtle cool mineral gray, misty slate, and deep fjord charcoal',
    description: 'Serene Scandinavian product aesthetic with refined neutral tones, soft ambient reflections, and quiet distraction-free focus.',
    primary: '#0284C7',
    secondary: '#475569',
    accent: '#10B981',
    background: '#F8FAFC',
    surface: '#FFFFFF',
    border: '#E2E8F0',
    text: '#0F172A',
    textMuted: '#64748B',
    isDark: false,
    promptSnippet: `### Color Palette Tokens: Nordic Minimalist Slate
- Mood: Serene Scandinavian product aesthetic with refined cool grays, tranquil breathing space, and clean fjord charcoal.
- Background: #F8FAFC (pale mist slate)
- Surface / Cards: #FFFFFF (pure white elevated card)
- Borders: #E2E8F0 (hairline cool gray)
- Primary Accent: #0284C7 (nordic ocean blue)
- Secondary Accent: #475569 (mineral slate)
- Text Primary: #0F172A (deep fjord charcoal)
- Text Muted: #64748B (neutral cool gray)`,
  },
  {
    id: 'solarpunk-sage',
    name: 'Solarpunk Botanical Sage',
    tagline: 'Greenhouse botanical sage, terracotta clay, and warm paper',
    description: 'Eco-optimistic architectural palette combining greenhouse plant green, earthy terracotta clay, and organic cream substrates.',
    primary: '#2D6A4F',
    secondary: '#E07A5F',
    accent: '#D4A373',
    background: '#F4F1DE',
    surface: '#FFFFFF',
    border: '#B7B7A4',
    text: '#1B4332',
    textMuted: '#52796F',
    isDark: false,
    promptSnippet: `### Color Palette Tokens: Solarpunk Botanical Sage
- Mood: Eco-optimistic greenhouse canvas blending deep botanical sage with terracotta clay and organic paper cream.
- Background: #F4F1DE (warm conservatory cream)
- Surface / Cards: #FFFFFF (pure white paper sheets)
- Borders: #B7B7A4 (soft soil clay hairline)
- Primary Accent: #2D6A4F (deep botanical forest sage)
- Terracotta Accent: #E07A5F (warm clay orange)
- Text Primary: #1B4332 (deep forest green ink)
- Text Muted: #52796F (sage gray)`,
  },
  {
    id: 'pastel-macaron',
    name: 'Pastel Sherbet / Macaron',
    tagline: 'Soft lavender mist, peach coral, sky mint, and pale ivory',
    description: 'Gentle, modern dessert-like pastel palette creating a friendly, soothing, and approachable visual ambiance.',
    primary: '#FF7D61',
    secondary: '#9B87F5',
    accent: '#7EE787',
    background: '#F8F6F4',
    surface: '#FFFFFF',
    border: '#E8E4DF',
    text: '#1C1917',
    textMuted: '#78716C',
    isDark: false,
    promptSnippet: `### Color Palette Tokens: Pastel Sherbet / Macaron
- Mood: Soft, friendly, tactile contemporary canvas with gentle pastel gradients and warm paper whites.
- Background: #F8F6F4 (warm mineral cream)
- Surface / Cards: #FFFFFF (soft white frosted cards)
- Borders: #E8E4DF (subtle warm hairline)
- Primary Accent: #FF7D61 (warm sherbet coral)
- Secondary Accent: #9B87F5 (soft lavender violet)
- Mint Accent: #7EE787 (sky mint green)
- Text Primary: #1C1917 (dark espresso ink)
- Text Muted: #78716C (warm stone gray)`,
  },
  {
    id: 'swiss-stark',
    name: 'Monochromatic Swiss Stark',
    tagline: 'Pure stark white, deep black, titanium gray, and Zurich red',
    description: 'High-contrast international typographic palette stripping away decorative color in favor of stark black and white with a single intentional red focal point.',
    primary: '#FF2D20',
    secondary: '#000000',
    accent: '#2B2B2B',
    background: '#FFFFFF',
    surface: '#FBFBFB',
    border: '#E5E5E5',
    text: '#111111',
    textMuted: '#666666',
    isDark: false,
    promptSnippet: `### Color Palette Tokens: Monochromatic Swiss Stark
- Mood: Stark high-contrast international graphic style with black and white purity and an intentional Zurich red focal block.
- Background: #FFFFFF (stark architectural white)
- Surface / Cards: #FBFBFB (minimal off-white substrate)
- Borders: #E5E5E5 (hairline precision gray)
- Primary Accent: #FF2D20 (Zurich vivid vermilion red)
- Secondary Accent: #000000 (deep black)
- Text Primary: #111111 (high-contrast black)
- Text Muted: #666666 (architectural gray)`,
  },
  {
    id: 'vaporwave-sunset',
    name: 'Vaporwave Sunset',
    tagline: 'Lilac hot pink, radiant violet, turquoise cyan, and midnight',
    description: 'Dreamy aesthetic nostalgia with vivid sunset gradients, digital twilight hues, and surreal cyberspace undertones.',
    primary: '#F472B6',
    secondary: '#8B5CF6',
    accent: '#2DD4BF',
    background: '#0F0C20',
    surface: '#181432',
    border: '#8B5CF6',
    text: '#FDF4FF',
    textMuted: '#A78BFA',
    isDark: true,
    promptSnippet: `### Color Palette Tokens: Vaporwave Sunset
- Mood: Dreamy nostalgic twilight cyber-aesthetic with hot lilac pink, radiant violet, and luminous turquoise against midnight indigo.
- Background: #0F0C20 (midnight cyberspace indigo)
- Surface / Cards: #181432 (elevated violet chamber)
- Borders: #8B5CF6 (radiant electric violet)
- Primary Accent: #F472B6 (hot sunset pink)
- Secondary Accent: #2DD4BF (tropical turquoise cyan)
- Text Primary: #FDF4FF (crystalline pink-white)
- Text Muted: #A78BFA (mellow lilac violet)`,
  },
  {
    id: 'warm-editorial',
    name: 'Warm Editorial Newspaper',
    tagline: 'Aged newsprint cream, rich espresso ink, and sepia brown',
    description: 'Classic print publishing aesthetic inspired by physical broadsheets and literary journals with rich ink contrast and warm aged paper.',
    primary: '#A62B2B',
    secondary: '#8C7355',
    accent: '#2A4365',
    background: '#F7F4EB',
    surface: '#FFFFFF',
    border: '#DDD8C7',
    text: '#1A1816',
    textMuted: '#736B5E',
    isDark: false,
    promptSnippet: `### Color Palette Tokens: Warm Editorial Newspaper
- Mood: Literary broadsheet print publication aesthetic with rich ink contrast against warm aged newsprint cream.
- Background: #F7F4EB (aged newsprint parchment)
- Surface / Cards: #FFFFFF (clean broadsheet white)
- Borders: #DDD8C7 (classic hairline column divider)
- Primary Accent: #A62B2B (editorial crimson ink)
- Secondary Accent: #8C7355 (aged sepia leather)
- Text Primary: #1A1816 (deep printer espresso ink)
- Text Muted: #736B5E (warm newsprint gray)`,
  },
  {
    id: 'linear-obsidian',
    name: 'Midnight Obsidian / Linear Dark',
    tagline: 'Deep slate obsidian, metallic borders, and kinetic electric purple',
    description: 'Definitive developer-first dark mode inspired by Linear with subtle 1px metallic borders, high contrast, and focused electric purple highlights.',
    primary: '#5E6AD2',
    secondary: '#4E5BA6',
    accent: '#F2994A',
    background: '#0E1015',
    surface: '#161922',
    border: '#272B38',
    text: '#F3F4F6',
    textMuted: '#8B949E',
    isDark: true,
    promptSnippet: `### Color Palette Tokens: Midnight Obsidian / Linear Dark
- Mood: High-efficiency developer dark slate with crisp metallic boundaries and electric purple highlights.
- Background: #0E1015 (deep obsidian slate)
- Surface / Cards: #161922 (elevated dark charcoal)
- Borders: #272B38 (subtle metallic hairline)
- Primary Accent: #5E6AD2 (kinetic electric purple)
- Secondary Accent: #4E5BA6
- Highlights: #F2994A (amber orange), #10B981 (emerald success)
- Text Primary: #F3F4F6 (high-contrast crisp white)
- Text Muted: #8B949E (slate gray)`,
  },
  {
    id: 'coffee-latte',
    name: 'Coffee & Cream / Warm Latte',
    tagline: 'Deep roasted espresso, steamed milk cream, and warm hazelnut bronze',
    description: 'Cozy, organic coffee shop palette featuring dark espresso contrasts, frothy oat milk backgrounds, and warm toasted caramel accents.',
    primary: '#8A5A36',
    secondary: '#C89666',
    accent: '#D4B28C',
    background: '#FAF6F0',
    surface: '#FFFFFF',
    border: '#E8DEC8',
    text: '#2C1B14',
    textMuted: '#7D6758',
    isDark: false,
    promptSnippet: `### Color Palette Tokens: Coffee & Cream / Warm Latte
- Mood: Cozy organic warmth with rich espresso tones, steamed milk foam substrates, and hazelnut bronze accents.
- Background: #FAF6F0 (steamed milk froth cream)
- Surface / Cards: #FFFFFF (clean porcelain white)
- Borders: #E8DEC8 (warm toasted oat hairline)
- Primary Accent: #8A5A36 (roasted espresso bronze)
- Secondary Accent: #C89666 (warm hazelnut caramel)
- Text Primary: #2C1B14 (deep dark espresso bean)
- Text Muted: #7D6758 (warm mocha gray)`,
  },
];

// ============================================================================
// 2. FONTS & TYPOGRAPHY STYLES (RECOGNIZED FONT ARCHETYPES)
// ============================================================================
export const FONT_PARTS: FontPart[] = [
  {
    id: 'pixel-bitmap',
    name: 'Pixel / 8-Bit Retro Gaming',
    tagline: 'Chunky pixelated bitmap arcade letterforms with discrete grid alignment',
    description: 'Nostalgic 8-bit / 16-bit arcade font reminiscent of retro console video games, game boy interfaces, and lo-fi digital screens.',
    fontFamily: "'Press Start 2P', 'Silkscreen', monospace",
    previewSample: 'LEVEL 01 // 8-BIT RUNTIME',
    classification: 'pixel',
    promptSnippet: `### Typography Treatment: Pixel / 8-Bit Retro Gaming
- Style: Chunky pixelated retro gaming typography reminiscent of 80s arcade and 16-bit consoles.
- Headings: 'Press Start 2P', 'Silkscreen', or blocky monospace bitmap letterforms with uppercase tracking.
- Body: Discrete pixel monospaced or clean geometric sans with high tabular legibility.
- Invariants: Preserve discrete grid-aligned character spacing; avoid overly smooth anti-aliasing on headings.`,
  },
  {
    id: 'handwriting-marker',
    name: 'Handwriting / Marker Sketch',
    tagline: 'Casual organic hand-drawn script with marker warmth and personal touch',
    description: 'Human, informal handwriting inspired by whiteboard brainstorming notes, marker annotations, and personal field journals.',
    fontFamily: "'Caveat', cursive",
    previewSample: 'Quick thoughts & ideas...',
    classification: 'handwriting',
    promptSnippet: `### Typography Treatment: Handwriting / Marker Sketch
- Style: Organic, informal hand-drawn marker lettering with personal warmth and casual character.
- Headings: 'Caveat', 'Architects Daughter', or hand-drawn marker script with natural stroke variation.
- Body: Paired with friendly rounded sans-serif for secondary legibility.
- Invariants: Emulate handwritten physical post-it memos with natural casual rhythm.`,
  },
  {
    id: 'cartoon-bubble',
    name: 'Cartoon / Playful Bubble',
    tagline: 'Bouncy rounded curves with high friendliness, cheerful weight, and joyful curves',
    description: 'Friendly, soft, bubble-like typography found in playful consumer apps, casual games, and children’s educational products.',
    fontFamily: "'Fredoka', sans-serif",
    previewSample: 'Super Fun Activity! 🎈',
    classification: 'cartoon',
    promptSnippet: `### Typography Treatment: Cartoon / Playful Bubble
- Style: Chunky, cheerful, rounded bubble curves with high warmth and welcoming friendliness.
- Headings: 'Fredoka', 'Sniglet', or rounded bubble sans with bold weights and soft rounded terminals.
- Body: Clean rounded sans-serif with generous letter spacing and open counters.
- Invariants: Avoid sharp aggressive corners; all typographic stems feature rounded friendly caps.`,
  },
  {
    id: 'neo-grotesque',
    name: 'Neo-Grotesque Swiss Sans',
    tagline: 'Ultra-clean, modern, neutral web standard with tight tracking and high legibility',
    description: 'The definitive modern UI standard (Inter, Geist, Helvetica) offering neutral tone, crisp vertical proportions, and flawless readability.',
    fontFamily: "var(--font-geist-sans), 'Inter', system-ui, sans-serif",
    previewSample: 'System Architecture v4.2',
    classification: 'sans',
    promptSnippet: `### Typography Treatment: Neo-Grotesque Swiss Sans
- Style: Modern neutral UI standard with exceptional hierarchy, vertical metrics, and crisp legibility.
- Headings: Geist Sans / Inter with bold weight (600-700) and tight letter-spacing (-0.025em).
- Body: Geist Sans / Inter with clean line heights (1.5 - 1.6).
- Invariants: Keep neutral, objective, and ultra-crisp across all screen resolutions.`,
  },
  {
    id: 'editorial-serif',
    name: 'Editorial Gazette Serif',
    tagline: 'Literary high-contrast serifs with classic elegance and dignified authority',
    description: 'Refined publication typography with elegant bracketed serifs, graceful proportions, and timeless editorial dignity.',
    fontFamily: "'Playfair Display', Georgia, serif",
    previewSample: 'The Architectural Record',
    classification: 'serif',
    promptSnippet: `### Typography Treatment: Editorial Gazette Serif
- Style: Literary high-contrast serifs with classic elegance, dignified authority, and editorial grace.
- Headings: 'Playfair Display' or Georgia with balanced letter-spacing and italicized subheadings.
- Body: Georgia or high-readability book serif with generous line heights.
- Invariants: Reserve serif elegance for major headers and section markers.`,
  },
  {
    id: 'terminal-mono',
    name: 'Terminal Monospaced',
    tagline: 'Strict character alignment with monospaced tabular numbers and ASCII precision',
    description: 'Technical heads-up display typography designed for developer consoles, telemetry streams, and tabular data tables.',
    fontFamily: "'JetBrains Mono', var(--font-geist-mono), monospace",
    previewSample: '0x7FFA // 99.98% SYNC',
    classification: 'mono',
    promptSnippet: `### Typography Treatment: Terminal Monospaced
- Style: Technical command-line typography with tabular numerals, strict character alignment, and ASCII precision.
- Headings: 'JetBrains Mono' / Geist Mono with uppercase tracking (0.05em) and bracketed tags.
- Body: Monospaced code copy with tabular numerals.
- Invariants: Ensure numbers align in strict vertical columns without font-width wobble.`,
  },
  {
    id: 'space-grotesk',
    name: 'Geometric Space Grotesk',
    tagline: 'Loud, punchy, geometric uppercase headlines with dramatic presence',
    description: 'High-impact neo-grotesk with bold geometric stance, wide proportions, and dramatic display presence.',
    fontFamily: "'Space Grotesk', Impact, sans-serif",
    previewSample: 'MANIFESTO DIRECTIVE',
    classification: 'grotesk',
    promptSnippet: `### Typography Treatment: Geometric Space Grotesk
- Style: Loud, punchy, high-impact neo-grotesk with bold geometric stance and dramatic uppercase presence.
- Headings: 'Space Grotesk' in uppercase bold with tight letter-spacing (-0.03em).
- Body: Clean sans-serif paired for secondary paragraph readability.
- Invariants: Headline sizes should feel confident, bold, and unapologetic.`,
  },
  {
    id: 'luxury-display',
    name: 'Luxury Classical Display',
    tagline: 'Majestic Roman inscriptional letterforms with refined classical proportions',
    description: 'High-end luxury aesthetic inspired by Roman stone inscriptions, classical architecture, and prestigious luxury branding.',
    fontFamily: "'Cinzel', Georgia, serif",
    previewSample: 'ATELIER PRIVÉ // MMXXVI',
    classification: 'luxury',
    promptSnippet: `### Typography Treatment: Luxury Classical Display
- Style: High-end luxury inscriptional serif inspired by classical Roman monuments and prestige branding.
- Headings: 'Cinzel' or Roman display serif in uppercase with tracked, statuesque spacing (0.08em).
- Body: Refined clean sans or classical book serif.
- Invariants: Commands poise, luxury, and understated quiet grandeur.`,
  },
];

// ============================================================================
// 3. SURFACE, BORDERS & SHADOWS (RECOGNIZED BOUNDARY & ELEVATION TREATMENTS)
// ============================================================================
export const SURFACE_PARTS: SurfacePart[] = [
  {
    id: 'neobrutalist-hard',
    name: 'Neo-Brutalist Hard Offset',
    tagline: '3px solid black borders, 4px unblurred block drop shadows, 4px corners',
    description: 'Playful, unapologetic physical boundary lines with hard directional drop-cast block shadows and zero blur.',
    borderWidth: '3px',
    borderStyle: 'solid',
    radius: '4px',
    shadow: '4px 4px 0px #000000',
    promptSnippet: `### Surface, Borders & Elevation: Neo-Brutalist Hard Offset
- Boundaries: Strictly 3px solid #000000 (or border token) high-contrast boundary lines.
- Corner Radii: 4px sharp corners (rounded-sm) with crisp definition.
- Shadow Treatment: 4px 4px 0px #000000 hard unblurred directional block drop shadow (ZERO blur!).
- Button Feedback: Tactile press-down translation on click (active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000]).`,
  },
  {
    id: 'cad-hairline',
    name: 'CAD Precision Hairline',
    tagline: '1px precision hairline borders, zero border radius (sharp 0px), pure flat',
    description: 'Engineered CAD drafting treatment with 0px corner radius, hairline precision, and zero drop shadows.',
    borderWidth: '1px',
    borderStyle: 'solid',
    radius: '0px',
    shadow: 'none',
    promptSnippet: `### Surface, Borders & Elevation: CAD Precision Hairline
- Boundaries: 1px razor-thin solid hairline borders.
- Corner Radii: Strictly 0px (sharp right angles across all cards, inputs, and buttons).
- Shadow Treatment: None (pure flat technical drafting design with zero blur).`,
  },
  {
    id: 'frosted-glass',
    name: 'Frosted Glassmorphism',
    tagline: 'Translucent frosted glass (backdrop-blur-xl), specular 1px white rim border',
    description: 'Luminous spatial computing interface with translucent frosted blur, specular white rim highlights, and ambient light depth.',
    borderWidth: '1px',
    borderStyle: 'solid',
    radius: '16px',
    shadow: '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
    promptSnippet: `### Surface, Borders & Elevation: Frosted Glassmorphism
- Boundaries: Semi-transparent frosted glass (backdrop-blur-xl) with 1px solid rgba(255, 255, 255, 0.18) border.
- Specular Highlight: Inset top white rim border: inset 0 1px 0 rgba(255, 255, 255, 0.25).
- Corner Radii: 16px (rounded-2xl) on cards; 9999px for control capsules.
- Shadow Treatment: Deep floating ambient shadow: 0 20px 50px rgba(0, 0, 0, 0.5).`,
  },
  {
    id: 'soft-ambient',
    name: 'Nordic Soft Ambient',
    tagline: '1px subtle borders, gentle 12px rounded corners, and soft diffused elevation',
    description: 'Contemporary Scandinavian product design with soft ambient light falloff, clean rounded corners, and calm elevation.',
    borderWidth: '1px',
    borderStyle: 'solid',
    radius: '12px',
    shadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
    promptSnippet: `### Surface, Borders & Elevation: Nordic Soft Ambient
- Boundaries: Clean 1px subtle neutral gray border.
- Corner Radii: Smooth 12px rounded-xl corners.
- Shadow Treatment: Soft ambient diffused light falloff: 0 4px 16px rgba(0, 0, 0, 0.06).`,
  },
  {
    id: 'paper-lift',
    name: 'Skeuomorphic Paper Lift',
    tagline: '1px warm craft borders, subtle 4px radius, and physical 3D paper lift shadows',
    description: 'Physical workshop pinboard with warm tactile paper elevation, physical multi-layered shadows, and organic warmth.',
    borderWidth: '1px',
    borderStyle: 'solid',
    radius: '6px',
    shadow: '0 2px 5px rgba(0, 0, 0, 0.06), 0 8px 18px rgba(0, 0, 0, 0.1)',
    promptSnippet: `### Surface, Borders & Elevation: Skeuomorphic Paper Lift
- Boundaries: Warm 1px border resembling physical craft paper.
- Corner Radii: 6px subtle rounded corners.
- Shadow Treatment: Multi-layer 3D paper lift shadow: 0 2px 5px rgba(0,0,0,0.06), 0 8px 18px rgba(0,0,0,0.1).`,
  },
  {
    id: 'neon-bloom',
    name: 'Phosphor Neon Bloom',
    tagline: '1px glowing neon border, sharp or rounded corners, and colored photon bloom',
    description: 'Luminous glowing border emitting colored ambient glow inspired by CRT cyber terminals and futuristic telemetry.',
    borderWidth: '1px',
    borderStyle: 'solid',
    radius: '8px',
    shadow: '0 0 16px rgba(0, 255, 102, 0.35), 0 0 2px rgba(0, 255, 102, 0.8)',
    promptSnippet: `### Surface, Borders & Elevation: Phosphor Neon Bloom
- Boundaries: 1px luminous primary colored border line.
- Corner Radii: 8px rounded corners.
- Shadow Treatment: Luminous photon bloom shadow: 0 0 16px var(--color-primary), 0 0 2px var(--color-primary).`,
  },
  {
    id: 'capsule-pill',
    name: 'Floating Pill / Capsule',
    tagline: 'Ultra-rounded 9999px pill containers, smooth curves, and gentle elevation',
    description: 'Ultra-modern fluid shape aesthetic using continuous pill geometries, full 9999px border-radius, and friendly floating silhouettes.',
    borderWidth: '1px',
    borderStyle: 'solid',
    radius: '9999px',
    shadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
    promptSnippet: `### Surface, Borders & Elevation: Floating Pill / Capsule
- Boundaries: Continuous full pill contours with 1px border.
- Corner Radii: 9999px (full pill-radius) for all tags, buttons, and floating docks; 24px for outer cards.
- Shadow Treatment: Soft buoyant lift shadow: 0 6px 20px rgba(0, 0, 0, 0.08).`,
  },
  {
    id: 'claymorphism-3d',
    name: 'Claymorphism Soft 3D',
    tagline: 'Plump pillowy 3D cards with dual inset highlights and rounded softness',
    description: 'Charming tactile 3D clay aesthetic with dual inset inner highlights, soft rounded bevels, and pillowy depth.',
    borderWidth: '2px',
    borderStyle: 'solid',
    radius: '18px',
    shadow: '0 10px 24px rgba(0,0,0,0.08), inset -3px -3px 6px rgba(0,0,0,0.1), inset 3px 3px 6px rgba(255,255,255,0.8)',
    promptSnippet: `### Surface, Borders & Elevation: Claymorphism Soft 3D
- Boundaries: 2px soft matching border outline with plump 18px rounded corners.
- Inset Lighting: Dual inner bevel shadows: inset -3px -3px 6px rgba(0,0,0,0.1) and inset 3px 3px 6px rgba(255,255,255,0.8).
- Shadow Treatment: Buoyant clay drop shadow: 0 10px 24px rgba(0, 0, 0, 0.08).`,
  },
];

// ============================================================================
// 4. UI COMPONENTS & CONTROLS STYLE (RECOGNIZED COMPONENT TREATMENTS)
// ============================================================================
export const COMPONENT_PARTS: ComponentPart[] = [
  {
    id: 'neobrutalist-chunky',
    name: 'Neo-Brutalist Chunky Controls',
    tagline: 'Oversized buttons, 3px solid black borders, hard block shadow, and active press-down',
    description: 'Tactile physical controls with thick black outlines, uppercase bold labels, and interactive mechanical click displacement.',
    buttonClass: 'px-4 py-2 border-3 border-black font-black uppercase text-xs shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000] cursor-pointer',
    badgeClass: 'px-2 py-0.5 border-2 border-black font-bold uppercase text-[10px] shadow-[2px_2px_0px_#000]',
    promptSnippet: `### UI Component Treatment: Neo-Brutalist Chunky Controls
- Buttons: Oversized with 3px solid #000000 border, bold uppercase text, 3px 3px 0px #000 hard drop shadow, and tactile click depression (active:translate-x-0.5 active:translate-y-0.5).
- Badges & Pills: Angled sticker badges with 2px black border, solid color background, and uppercase tracking.
- Inputs: 3px solid black border with high-contrast text and 3px 3px 0px #000 focus ring shadow.`,
  },
  {
    id: 'minimal-rounded',
    name: 'Modern Minimalist Rounded Pills',
    tagline: 'Clean 1px borders, smooth 8px-12px radius, quiet hover states, and refined typography',
    description: 'Understated, contemporary SaaS controls with subtle borders, smooth hover animations, and balanced optical padding.',
    buttonClass: 'px-3.5 py-1.5 border border-stone-300 rounded-xl font-semibold text-xs transition-colors hover:bg-stone-100 cursor-pointer',
    badgeClass: 'px-2 py-0.5 rounded-full text-[10px] font-medium border border-stone-200 bg-stone-50 text-stone-700',
    promptSnippet: `### UI Component Treatment: Modern Minimalist Rounded Pills
- Buttons: 8px-12px rounded corners with clean 1px border, smooth background color transitions, and subtle scale-98 active state.
- Badges: Pill-shaped status badges with 15% opacity background tint and matching color text.
- Inputs: Inset rounded field with subtle hairline border and gentle focus glow.`,
  },
  {
    id: 'industrial-relays',
    name: 'Industrial Hardware Relays & Dials',
    tagline: 'Hardware toggle switches, potentiometer sliders, segmented status meters, and halt blocks',
    description: 'Tactile mission-control interface components inspired by SCADA telemetry, physical rocker switches, and segmented LED bar indicators.',
    buttonClass: 'px-3 py-1.5 border border-current font-mono font-bold uppercase text-xs tracking-wider cursor-pointer active:scale-95',
    badgeClass: 'px-1.5 py-0.5 border border-current font-mono text-[9px] font-bold uppercase',
    promptSnippet: `### UI Component Treatment: Industrial Hardware Relays & Dials
- Buttons: Stamped rectangular action blocks with monospaced uppercase labels and high-contrast alert borders.
- Controls: Potentiometer slider controls with numeric kilowatt/percentage readouts and segmented LED progress meters.
- Status Indicators: Terminal bracketed tags (e.g. [200_OK], [SYNC], [BYPASS]) with colored phosphor borders.`,
  },
  {
    id: 'glass-capsules',
    name: 'Glass Translucent Capsules',
    tagline: 'Translucent frosted capsule buttons with specular rim reflection and soft glow',
    description: 'Spatial computing controls with frosted blur transparency, glowing specular rim highlights, and pill-shaped touch capsules.',
    buttonClass: 'px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-semibold text-xs shadow-md transition-all hover:bg-white/20 cursor-pointer',
    badgeClass: 'px-2.5 py-0.5 bg-white/10 backdrop-blur-xs border border-white/15 rounded-full text-[10px] font-mono text-cyan-300',
    promptSnippet: `### UI Component Treatment: Glass Translucent Capsules
- Buttons: Floating pill-shaped capsules with translucent frosted glass (backdrop-blur-md), specular white rim border, and ambient glow.
- Badges: Translucent pill tags with soft cyan/violet border glow and monospaced telemetry text.
- Inputs: Translucent glass field with ambient light bloom on focus.`,
  },
  {
    id: 'terminal-badges',
    name: 'Terminal Monospaced Badges & Prompts',
    tagline: 'Bracketed prompt tags [200 OK], $ prompt glyphs, keyboard shortcut tags ⌘K, ↵',
    description: 'Developer-first keyboard-centric controls with prompt glyphs, keyboard shortcut chips, and terminal tag conventions.',
    buttonClass: 'px-3 py-1 bg-stone-800 text-stone-100 border border-stone-700 font-mono text-xs rounded hover:border-stone-500 cursor-pointer',
    badgeClass: 'px-1.5 py-0.5 bg-black/30 border border-stone-700 font-mono text-[10px] text-emerald-400 font-bold rounded',
    promptSnippet: `### UI Component Treatment: Terminal Monospaced Badges & Prompts
- Buttons: Monospaced action keys with command prompt symbol (e.g. '> execute ↵') and keyboard shortcut indicators.
- Badges: Bracketed status pills with code-like syntax (e.g. '[READY: 14ms]', '[BRANCH: main]').
- Inputs: Dark inset command bar with terminal prompt indicator glyph ('$' or 'SQL>') and '⌘K' shortcut tag.`,
  },
  {
    id: 'pixel-beveled',
    name: 'Retro 8-Bit Beveled Controls',
    tagline: 'Stepped chunky bitmap border outlines with high-contrast bevel and arcade feedback',
    description: 'Chunky arcade-style buttons with distinct light-top and dark-bottom bevel highlights emulating retro game UI.',
    buttonClass: 'px-3 py-1.5 border-2 border-t-white border-l-white border-b-black border-r-black font-mono font-bold text-xs uppercase cursor-pointer active:border-t-black active:border-l-black active:border-b-white active:border-r-white',
    badgeClass: 'px-1.5 py-0.5 border border-black font-mono text-[9px] uppercase font-bold',
    promptSnippet: `### UI Component Treatment: Retro 8-Bit Beveled Controls
- Buttons: 8-bit arcade beveled buttons with crisp 2px border (light top/left edge, dark bottom/right edge for 3D bevel depth).
- Badges: Blocky pixel badge tags with discrete pixel padding and uppercase gaming labels.
- Feedback: Immediate inverted bevel depression on click without smooth tweening.`,
  },
];

// ============================================================================
// 5. SIGNATURE ACCENTS & GRAPHIC DNA (RECOGNIZED DECORATIVE TREATMENTS)
// ============================================================================
export const ACCENT_PARTS: AccentPart[] = [
  {
    id: 'crt-scanlines',
    name: 'CRT Raster Scanlines',
    tagline: 'Horizontal raster scanline overlay with subtle cathode vignette',
    description: 'Retro CRT monitor scanline shader giving digital terminal depth and vintage hardware presence.',
    type: 'scanlines',
    promptSnippet: `### Signature Graphic Accents: CRT Raster Scanlines
- Overlay: Horizontal retro CRT scanline texture (3px repeating linear gradient overlay).
- Texture Effect: Subtle cathode ray tube raster depth giving hardware terminal authenticity.`,
  },
  {
    id: 'cad-crosshairs',
    name: 'CAD Drafting Crosshairs & Rulers',
    tagline: 'Corner targeting crosshairs, perimeter millimeter rulers, coordinate tags',
    description: 'Architectural drafting crosshairs, millimeter dimensions, and coordinate tags.',
    type: 'crosshairs',
    promptSnippet: `### Signature Graphic Accents: CAD Drafting Crosshairs & Rulers
- Targeting Marks: Corner crosshair reticles (⊕ [X: 420.50, Y: 110.25]).
- Rulers: Millimeter scale tick marks along container borders (|···|···|···|).
- Metadata: Coordinate readouts and precision engineering tags.`,
  },
  {
    id: 'washi-tape',
    name: 'Tactile Washi Tape Strips',
    tagline: 'Textured washi tape tape-downs fixed to card headers with subtle paper grain',
    description: 'Physical workshop aesthetic with washi tape header accents taped across card corners with slight tilt.',
    type: 'washi-tape',
    promptSnippet: `### Signature Graphic Accents: Tactile Washi Tape Strips
- Tape Accents: Semi-translucent washi tape strips fixed to card headers with subtle paper texture.
- Angled Tilt: Slight -1deg to 0.8deg tilt to emulate physical craft tape-down.`,
  },
  {
    id: 'dot-grid',
    name: 'Architectural Dot Grid',
    tagline: 'Subtle mathematical dot matrix texture across background surface',
    description: 'Precision architectural drafting dot grid for visual structure and engineering atmosphere.',
    type: 'dot-grid',
    promptSnippet: `### Signature Graphic Accents: Architectural Dot Grid
- Background Matrix: Subtle repeating mathematical dot grid texture (16px radial gradient dot pattern at 15% opacity).
- Structure: Provides spatial drafting alignment and depth to the canvas.`,
  },
  {
    id: 'corner-ticks',
    name: 'Corner Registration Ticks (┌ ┐ └ ┘)',
    tagline: 'Technical boundary corner registration marks at card corners',
    description: 'Classic printing and technical drafting corner alignment marks framing each card.',
    type: 'corner-ticks',
    promptSnippet: `### Signature Graphic Accents: Corner Registration Ticks (┌ ┐ └ ┘)
- Registration Marks: Technical boundary registration ticks (┌, ┐, └, ┘) positioned at the four corners of cards.
- Printing Heritage: Gives an authentic printmaker and architectural blueprint calibration feel.`,
  },
  {
    id: 'hazard-stripes',
    name: 'Industrial Hazard Caution Stripes',
    tagline: 'Diagonal black-and-yellow or amber caution hazard safety stripes',
    description: 'Industrial safety barrier stripes for alert banners, critical action strips, and industrial status headers.',
    type: 'hazard-stripes',
    promptSnippet: `### Signature Graphic Accents: Industrial Hazard Caution Stripes
- Pattern: Repeating 45-degree diagonal hazard caution stripes (black and yellow / amber).
- Placement: Header accent bars, emergency alert strips, or boundary margins.`,
  },
  {
    id: 'noise-grain',
    name: 'Subtle Film Grain / Noise',
    tagline: 'Organic film grain and paper stipple texture for physical tactile warmth',
    description: 'Subtle analog film grain overlay that breaks up digital flat colors and gives organic paper-like warmth.',
    type: 'noise-grain',
    promptSnippet: `### Signature Graphic Accents: Subtle Film Grain / Noise
- Texture: 4px repeating micro-noise stipple texture (10% opacity, mix-blend-multiply).
- Atmosphere: Gives digital interfaces analog warmth, tactile depth, and physical substance.`,
  },
  {
    id: 'pure-minimal',
    name: 'Pure Minimal (No Accents)',
    tagline: 'Unadorned graphic clarity with zero decorative distractions',
    description: 'Strict minimalist execution letting typography and space breathe with zero decorative ornamentation.',
    type: 'minimal',
    promptSnippet: `### Signature Graphic Accents: Pure Minimal (No Accents)
- Aesthetic Rule: Zero decorative overlays, scanlines, or crosshairs.
- Purity: Clean, unadorned surfaces where typography, contrast, and spatial hierarchy communicate everything.`,
  },
];

// ============================================================================
// DEFAULT INITIAL SELECTION (POPULAR CLASSIC COMBO)
// ============================================================================
export const DEFAULT_DESIGN_PARTS: DesignPartsSelection = {
  palette: PALETTE_PARTS[0], // Retro 80s Synthwave
  font: FONT_PARTS[3], // Neo-Grotesque Swiss Sans
  surface: SURFACE_PARTS[0], // Neo-Brutalist Hard Offset
  components: COMPONENT_PARTS[0], // Neo-Brutalist Chunky
  accent: ACCENT_PARTS[0], // CRT Raster Scanlines
};

// ============================================================================
// AUTOMATIC MASTER PROMPT SYNTHESIS (COMBINING ALL 5 CHOSEN PARTS)
// ============================================================================
export function generateCombinedMasterPrompt(selection: DesignPartsSelection): string {
  const { palette, font, surface, components, accent } = selection;

  return `Apply this visual design system to the interface:

## Aesthetic Archetype: ${palette.name} + ${font.name} + ${surface.name} + ${components.name}

${palette.promptSnippet}

${font.promptSnippet}

${surface.promptSnippet}

${components.promptSnippet}

${accent.promptSnippet}

### Tailwind CSS v4 Theme Block
\`\`\`css
@theme {
  --color-primary: ${palette.primary};
  --color-secondary: ${palette.secondary};
  --color-accent: ${palette.accent};
  --color-background: ${palette.background};
  --color-surface: ${palette.surface};
  --color-border: ${palette.border};
  --color-text-primary: ${palette.text};
  --color-text-muted: ${palette.textMuted};
  --radius-card: ${surface.radius};
}
\`\`\``;
}
