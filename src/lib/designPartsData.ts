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
    id: 'cyberpunk-nightcity',
    name: 'Cyberpunk 2077 Night City',
    tagline: 'Electric high-voltage yellow, cyber cyan, trauma red, and carbon black',
    description: 'The definitive Cyberpunk 2077 aesthetic with radioactive neon yellow, razor-sharp cyber cyan bloom, and pitch carbon black substrates.',
    primary: '#FCEE0A',
    secondary: '#00F0FF',
    accent: '#FF003C',
    background: '#08080C',
    surface: '#12131A',
    border: '#FCEE0A',
    text: '#FFFFFF',
    textMuted: '#9E9EA8',
    isDark: true,
    promptSnippet: `### Color Palette Tokens: Cyberpunk 2077 Night City
- Mood: High-voltage Cyberpunk 2077 night city aesthetic with electric radioactive yellow against deep carbon black.
- Background: #08080C (pitch carbon black substrate)
- Surface / Cards: #12131A (elevated dark cyberdeck chassis)
- Borders: #FCEE0A (electric high-voltage yellow)
- Primary Accent: #FCEE0A (radioactive warning yellow)
- Secondary Accent: #00F0FF (electric cyber cyan bloom)
- Critical Alert: #FF003C (trauma team crimson red)
- Text Primary: #FFFFFF (high-contrast crisp white)
- Text Muted: #9E9EA8 (cold gunmetal gray)`,
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
    id: 'retro-synthwave',
    name: 'Retro 80s Synthwave Outrun',
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
    promptSnippet: `### Color Palette Tokens: Retro 80s Synthwave Outrun
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
    id: 'cad-blueprint',
    name: 'CAD Technical Blueprint & Schematic',
    tagline: 'Deep Prussian drafting blue, electric cyan lines, and crisp drafting white',
    description: 'Authentic architectural blueprint aesthetic with cyan schematic lines, technical grid layers, and engineered Prussian blue contrast.',
    primary: '#00F0FF',
    secondary: '#38BDF8',
    accent: '#F59E0B',
    background: '#0B2545',
    surface: '#133966',
    border: '#00F0FF',
    text: '#EEF4F8',
    textMuted: '#8DA9C4',
    isDark: true,
    promptSnippet: `### Color Palette Tokens: CAD Technical Blueprint & Schematic
- Mood: Precision architectural blueprint and engineered technical schematic with electric cyan lines on Prussian blue.
- Background: #0B2545 (deep Prussian drafting blue)
- Surface / Cards: #133966 (elevated schematic panel)
- Borders: #00F0FF (electric drafting cyan)
- Primary Accent: #00F0FF (cyan laser hairline)
- Secondary Accent: #38BDF8 (cadet drafting blue)
- Annotation Accent: #F59E0B (amber revision callout)
- Text Primary: #EEF4F8 (drafting sheet crisp white)
- Text Muted: #8DA9C4 (cool schematic slate)`,
  },
  {
    id: 'frutiger-aero',
    name: 'Frutiger Aero Y2K Glossy Aqua',
    tagline: 'Vibrant azure sky, aqua crystal water, fresh grass lime, and glossy white',
    description: 'Nostalgic mid-2000s humanism with crystalline water tones, lush grass greens, sky blue gradients, and pristine glass reflections.',
    primary: '#0EA5E9',
    secondary: '#06B6D4',
    accent: '#22C55E',
    background: '#F0F9FF',
    surface: '#FFFFFF',
    border: '#BAE6FD',
    text: '#0C4A6E',
    textMuted: '#0284C7',
    isDark: false,
    promptSnippet: `### Color Palette Tokens: Frutiger Aero Y2K Glossy Aqua
- Mood: Optimistic mid-2000s skeuomorphic digital humanism with crystalline aqua water, sky blue, and fresh grass lime.
- Background: #F0F9FF (luminous sky atmosphere)
- Surface / Cards: #FFFFFF (glossy crystalline white card)
- Borders: #BAE6FD (translucent ice blue border)
- Primary Accent: #0EA5E9 (vibrant azure sky)
- Secondary Accent: #06B6D4 (crystal aqua marine)
- Nature Accent: #22C55E (fresh botanical lime)
- Text Primary: #0C4A6E (deep ocean navy)
- Text Muted: #0284C7 (cool clear sky blue)`,
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
    id: 'art-deco-gold',
    name: 'Art Deco Gatsby Gold & Onyx',
    tagline: 'Burnished metallic gold, imperial onyx black, and champagne ivory',
    description: 'Opulent 1920s glamour inspired by the Chrysler Building with lustrous brass gold contrasts against velvety onyx black.',
    primary: '#D4AF37',
    secondary: '#E5C583',
    accent: '#113F34',
    background: '#0E1013',
    surface: '#17191E',
    border: '#D4AF37',
    text: '#FAF5EB',
    textMuted: '#A39987',
    isDark: true,
    promptSnippet: `### Color Palette Tokens: Art Deco Gatsby Gold & Onyx
- Mood: Luxurious 1920s metropolitan elegance with burnished metallic gold and deep onyx black.
- Background: #0E1013 (velvety imperial onyx)
- Surface / Cards: #17191E (elevated lacquer obsidian)
- Borders: #D4AF37 (burnished metallic brass gold)
- Primary Accent: #D4AF37 (lustrous Gatsby gold)
- Secondary Accent: #E5C583 (champagne shimmer)
- Jewel Tone: #113F34 (deep Gatsby emerald)
- Text Primary: #FAF5EB (champagne silk white)
- Text Muted: #A39987 (antique muted bronze)`,
  },
  {
    id: 'acid-rave',
    name: 'Acid Rave Toxic Underground',
    tagline: 'Radioactive toxic slime lime, ultraviolet, and pitch void black',
    description: 'Underground 90s warehouse rave and acid techno aesthetic with blinding radioactive lime greens and deep ultraviolet blacklights.',
    primary: '#39FF14',
    secondary: '#8A2BE2',
    accent: '#E2F952',
    background: '#0A0A0A',
    surface: '#141414',
    border: '#39FF14',
    text: '#FFFFFF',
    textMuted: '#A0A0A0',
    isDark: true,
    promptSnippet: `### Color Palette Tokens: Acid Rave Toxic Underground
- Mood: High-energy underground rave aesthetic with blinding toxic slime green against pitch black.
- Background: #0A0A0A (pitch club void)
- Surface / Cards: #141414 (matte industrial asphalt)
- Borders: #39FF14 (radioactive slime lime)
- Primary Accent: #39FF14 (toxic high-visibility green)
- Secondary Accent: #8A2BE2 (ultraviolet blacklight)
- Shock Accent: #E2F952 (electric acid lemon)
- Text Primary: #FFFFFF (high-contrast white)
- Text Muted: #A0A0A0 (industrial gray)`,
  },
  {
    id: 'japanese-zen',
    name: 'Japanese Zen / Wabi-Sabi Linen',
    tagline: 'Unbleached linen cream, raw sumi calligraphy ink, and aged cedar bamboo',
    description: 'Contemplative Japanese aesthetic honoring natural textures, unbleached washi paper warmth, and quiet sumi ink calligraphy.',
    primary: '#1F1E1D',
    secondary: '#8C7B6B',
    accent: '#C84B31',
    background: '#F7F5F0',
    surface: '#FFFFFF',
    border: '#DDD7CD',
    text: '#1F1E1D',
    textMuted: '#7D7569',
    isDark: false,
    promptSnippet: `### Color Palette Tokens: Japanese Zen / Wabi-Sabi Linen
- Mood: Calming Japanese minimalist atmosphere with unbleached washi paper substrates and rich sumi calligraphy ink.
- Background: #F7F5F0 (unbleached linen cream)
- Surface / Cards: #FFFFFF (pure paper sheet)
- Borders: #DDD7CD (raw cedar hairline)
- Primary Ink: #1F1E1D (deep sumi ink black)
- Bamboo Accent: #8C7B6B (aged bamboo earth)
- Hanko Seal: #C84B31 (vermilion stamp red)
- Text Primary: #1F1E1D (charcoal brush ink)
- Text Muted: #7D7569 (soft river stone gray)`,
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
    id: 'vintage-hifi',
    name: 'Vintage 70s Hi-Fi & Walnut',
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
    promptSnippet: `### Color Palette Tokens: Vintage 70s Hi-Fi & Walnut
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
    name: 'Vaporwave Sunset Twilight',
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
    promptSnippet: `### Color Palette Tokens: Vaporwave Sunset Twilight
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
    name: 'Warm Editorial Broadsheet',
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
    promptSnippet: `### Color Palette Tokens: Warm Editorial Broadsheet
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
    id: 'scada-industrial',
    name: 'SCADA Heavy Industrial Machinery',
    tagline: 'Safety Caterpillar yellow, alert amber, heavy cast iron, and relay green',
    description: 'Rugged industrial monitoring console designed for factory telemetry, physical control valves, and high-contrast hazard legibility.',
    primary: '#F5A623',
    secondary: '#FF5722',
    accent: '#00E676',
    background: '#14171A',
    surface: '#1E2328',
    border: '#F5A623',
    text: '#E4E7EB',
    textMuted: '#8C96A3',
    isDark: true,
    promptSnippet: `### Color Palette Tokens: SCADA Heavy Industrial Machinery
- Mood: High-durability industrial machinery console with safety yellow and heavy cast iron contrast.
- Background: #14171A (heavy cast iron chassis)
- Surface / Cards: #1E2328 (industrial telemetry bay)
- Borders: #F5A623 (safety machinery yellow)
- Primary Accent: #F5A623 (heavy hazard yellow)
- Alert Accent: #FF5722 (warning emergency amber)
- Operational State: #00E676 (circuit live green)
- Text Primary: #E4E7EB (high-visibility machine white)
- Text Muted: #8C96A3 (industrial steel gray)`,
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
  {
    id: 'dracula-gothic',
    name: 'Dracula Gothic Midnight',
    tagline: 'Vampire orchid purple, neon pink, toxic cyan, and Alucard charcoal',
    description: 'The universally acclaimed developer theme celebrating gothic dark tones, luminous violet accents, and electric neon code highlights.',
    primary: '#BD93F9',
    secondary: '#FF79C6',
    accent: '#50FA7B',
    background: '#1E1F29',
    surface: '#282A36',
    border: '#6272A4',
    text: '#F8F8F2',
    textMuted: '#6272A4',
    isDark: true,
    promptSnippet: `### Color Palette Tokens: Dracula Gothic Midnight
- Mood: Iconic dark gothic palette with vibrant orchid purple, hot pink, and crystalline cyan highlights on deep charcoal.
- Background: #1E1F29 (gothic deep night void)
- Surface / Cards: #282A36 (elevated vampire charcoal substrate)
- Borders: #6272A4 (mystic twilight slate)
- Primary Accent: #BD93F9 (orchid purple glow)
- Secondary Accent: #FF79C6 (vibrant vampire pink)
- Success State: #50FA7B (toxic electric mint)
- Text Primary: #F8F8F2 (moonlight pearl white)
- Text Muted: #6272A4 (crypt slate gray)`,
  },
];

// ============================================================================
// 2. FONTS & TYPOGRAPHY STYLES (RECOGNIZED FONT ARCHETYPES)
// ============================================================================
export const FONT_PARTS: FontPart[] = [
  {
    id: 'cyberpunk-hud',
    name: 'Cyberpunk HUD / Sci-Fi Angular',
    tagline: 'Chiseled 45° angular chamfer letterforms, wide tracking, and futuristic HUD display',
    description: 'Futuristic sci-fi heads-up display typography designed for high-tech telemetry, cybernetic enhancements, and tactical military cockpits.',
    fontFamily: "'Orbitron', 'Rajdhani', sans-serif",
    previewSample: 'NIGHT_CITY // 2077 HUD',
    classification: 'cyberpunk',
    promptSnippet: `### Typography Treatment: Cyberpunk HUD / Sci-Fi Angular
- Style: Futuristic high-tech telemetry heads-up display with angular 45-degree corner bevels and wide tracking.
- Headings: 'Orbitron' or 'Rajdhani' in bold uppercase with letter-spacing (0.08em) and bracketed index tags.
- Body: 'Rajdhani' or clean geometric technical sans with high legibility.
- Invariants: Headings must feel like an augmented-reality HUD interface; all labels uppercase with technical prefixes.`,
  },
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
    id: 'avant-garde-acid',
    name: 'Avant-Garde Acid / Heavy Rave',
    tagline: 'Ultra-wide display proportions, dramatic heavy weights, and experimental rave energy',
    description: 'High-impact progressive typography found in underground fashion magazines, rave posters, and avant-garde modern European graphic design.',
    fontFamily: "'Syne', Impact, sans-serif",
    previewSample: 'HYPER_DISTORTION ⚡',
    classification: 'acid',
    promptSnippet: `### Typography Treatment: Avant-Garde Acid / Heavy Rave
- Style: Bold, experimental European display typography with ultra-wide tracking and dramatic structural weight.
- Headings: 'Syne' in extra-bold (700-800) with wide proportions and deliberate dramatic tension.
- Body: Sharp neutral sans paired with tight line-heights.
- Invariants: Displays should feel bold, artistic, and unapologetically unconventional.`,
  },
  {
    id: 'art-deco-glamour',
    name: 'Art Deco Geometric / 1920s Metropolis',
    tagline: 'Tall graceful ascenders, circular geometric arches, and 1920s metropolitan elegance',
    description: 'Opulent geometric display font inspired by classic Roaring Twenties jazz clubs, Parisian luxury ateliers, and the Chrysler Building.',
    fontFamily: "'Poiret One', 'Cinzel', cursive",
    previewSample: 'THE GRAND METROPOLIS',
    classification: 'art-deco',
    promptSnippet: `### Typography Treatment: Art Deco Geometric / 1920s Metropolis
- Style: Refined 1920s geometric art-deco typography with elongated ascenders, circular curves, and glamorous poise.
- Headings: 'Poiret One' in uppercase with generous, airy letter-spacing (0.12em).
- Body: Refined humanist or high-contrast clean serif.
- Invariants: Typography conveys effortless jazz-age sophistication and architectural majesty.`,
  },
  {
    id: 'cad-drafting',
    name: 'CAD Technical Drafting Mono',
    tagline: 'Standard architectural blueprint font, slashed zeros, and uniform character metrics',
    description: 'Precision engineering schematic font designed for mechanical drafting, blueprint callouts, and dimensional tolerances.',
    fontFamily: "'Share Tech Mono', monospace",
    previewSample: 'SCHEMATIC // SCALE 1:50',
    classification: 'cad',
    promptSnippet: `### Typography Treatment: CAD Technical Drafting Mono
- Style: Mechanical drafting monospace typography with fixed-pitch character boxes and slashed zero.
- Headings: 'Share Tech Mono' in uppercase with technical drafting prefixes (e.g., 'SPEC_REV:', 'TOLERANCE:').
- Body: Clean technical monospace with high tabular numeral alignment.
- Invariants: Strict tabular alignment; text blocks feel stamped onto an engineering blueprint sheet.`,
  },
  {
    id: 'modern-saas-humanist',
    name: 'Modern SaaS Clean Humanist',
    tagline: 'Approachable geometric curves, friendly rounded terminals, and balanced rhythm',
    description: 'The contemporary gold standard for modern tech products (Linear, Vercel, Stripe) with approachable curves and effortless readability.',
    fontFamily: "'Outfit', sans-serif",
    previewSample: 'Next-Gen Workflow Platform',
    classification: 'humanist',
    promptSnippet: `### Typography Treatment: Modern SaaS Clean Humanist
- Style: Contemporary tech product typography with balanced optical kerning, friendly circular forms, and crisp clarity.
- Headings: 'Outfit' in semi-bold (600) with slight tight tracking (-0.02em).
- Body: Clean humanist sans with 1.6 line height for effortless readability.
- Invariants: Balances modern technical authority with welcoming human approachability.`,
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
    id: 'cyberpunk-chamfer',
    name: 'Cyberpunk 45° Chamfered Cut',
    tagline: 'Diagonal 45° clipped corners (clip-path polygon), neon line border, and HUD armor plate',
    description: 'Futuristic sci-fi cyberdeck chassis with 45-degree angled clipped corners, vibrant neon boundary lines, and high-tech defense plating.',
    borderWidth: '2px',
    borderStyle: 'solid',
    radius: '0px',
    shadow: '0 0 16px rgba(252, 238, 10, 0.35), inset 0 0 8px rgba(0, 240, 255, 0.15)',
    clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))',
    promptSnippet: `### Surface, Borders & Elevation: Cyberpunk 45° Chamfered Cut
- Boundaries: 2px solid neon primary colored border line.
- Clipped Geometry: 45-degree chamfered diagonal corner notch on cards and buttons:
  \`clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))\`.
- Corner Radii: 0px (strictly sharp right and 45-degree angles; never rounded).
- Shadow Treatment: Glowing photon halo with dual inner neon bloom.`,
  },
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
    id: 'frutiger-gloss',
    name: 'Frutiger Aero Glossy Gel',
    tagline: 'Translucent 3D liquid gel, specular white top reflection, 20px pill corners',
    description: 'Lush mid-2000s skeuomorphic aqua gel surface with top specular glass reflection, translucent watery depth, and buoyant bubble elevation.',
    borderWidth: '1px',
    borderStyle: 'solid',
    radius: '20px',
    shadow: '0 12px 30px rgba(14, 165, 233, 0.18), inset 0 2px 0 rgba(255, 255, 255, 0.8)',
    promptSnippet: `### Surface, Borders & Elevation: Frutiger Aero Glossy Gel
- Boundaries: 1px translucent specular border (rgba(255, 255, 255, 0.6) top, rgba(14, 165, 233, 0.3) bottom).
- Corner Radii: Smooth 20px (rounded-3xl) or continuous 9999px pill curves.
- Specular Sheen: Inset bright top highlight: \`inset 0 2px 0 rgba(255, 255, 255, 0.8)\`.
- Shadow Treatment: Buoyant water bubble lift shadow with soft azure ambient falloff.`,
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
    id: 'nordic-soft',
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
    tagline: '1px warm craft borders, subtle 6px radius, and physical 3D paper lift shadows',
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
  {
    id: 'art-deco-double',
    name: 'Art Deco Double Brass Frame',
    tagline: 'Double parallel metallic border lines, 0px sharp corners, and Gatsby prestige',
    description: 'Architectural luxury boundary treatment with double brass borders, precise 90-degree corners, and understated golden glow.',
    borderWidth: '3px',
    borderStyle: 'double',
    radius: '0px',
    shadow: '0 8px 24px rgba(212, 175, 55, 0.15)',
    promptSnippet: `### Surface, Borders & Elevation: Art Deco Double Brass Frame
- Boundaries: 3px double parallel metallic gold border lines (border-style: double).
- Corner Radii: Strictly 0px sharp corners.
- Shadow Treatment: Subtle ambient golden brass drop shadow: 0 8px 24px rgba(212, 175, 55, 0.15).`,
  },
  {
    id: 'heavy-industrial-chassis',
    name: 'Heavy SCADA Industrial Chassis',
    tagline: 'Heavy 3px stamped metal chassis, mechanical corner rivets, and deep drop channel',
    description: 'Industrial control cabinet casing built to withstand rugged environments with simulated metal rivets, heavy borders, and zero blur.',
    borderWidth: '3px',
    borderStyle: 'solid',
    radius: '2px',
    shadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 4px 4px 0px #000000',
    promptSnippet: `### Surface, Borders & Elevation: Heavy SCADA Industrial Chassis
- Boundaries: Heavy 3px solid industrial border.
- Corner Radii: 2px minimal bevel.
- Inset Machining: Top edge highlight (inset 0 1px 0 rgba(255,255,255,0.2)).
- Shadow Treatment: Solid 4px 4px 0px #000000 physical chassis offset.`,
  },
];

// ============================================================================
// 4. UI COMPONENTS & CONTROLS STYLE (RECOGNIZED COMPONENT TREATMENTS)
// ============================================================================
export const COMPONENT_PARTS: ComponentPart[] = [
  {
    id: 'cyberpunk-hud-clipped',
    name: 'Cyberpunk HUD Clipped Buttons & Hex Gauges',
    tagline: '45° clipped corner action buttons, warning yellow neon, and bracketed telemetry tags',
    description: 'Heads-up display buttons featuring 45° diagonal clipped corners, radioactive neon outlines, uppercase cyber deck labels, and glitch hover feedback.',
    buttonClass: 'px-4 py-2 bg-yellow-400 text-black font-black uppercase text-xs tracking-wider border-2 border-yellow-300 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,8px_100%,0_calc(100%-8px))] hover:bg-yellow-300 cursor-pointer transition-all active:scale-95',
    badgeClass: 'px-2 py-0.5 border border-cyan-400 bg-cyan-950/60 font-mono text-[10px] text-cyan-300 font-bold uppercase tracking-wider',
    promptSnippet: `### UI Component Treatment: Cyberpunk HUD Clipped Buttons & Hex Gauges
- Buttons: 45-degree diagonal clipped corner buttons using \`clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))\`.
- Colors: Radioactive high-voltage yellow (#FCEE0A) or laser cyan (#00F0FF) with black uppercase text.
- Badges & Status: Bracketed cybernetic tags like \`[CYBER // 0x4F]\` and \`[ONLINE: 99.8%]\` with neon borders.
- Micro-interactions: Glitch displacement or color inversion on hover; rapid scale-95 click feedback.`,
  },
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
    id: 'frutiger-aero-gel',
    name: 'Frutiger Aero Glossy Gel Buttons',
    tagline: '3D pill buttons with liquid specular light reflection, aqua glow, and jelly click',
    description: 'Liquid glass capsule buttons inspired by mid-2000s Mac OS Aqua and Windows Vista Aero with specular reflection highlights and smooth rounded-full geometry.',
    buttonClass: 'px-4 py-2 bg-gradient-to-b from-sky-400 to-sky-600 text-white font-bold text-xs rounded-full shadow-[0_4px_12px_rgba(14,165,233,0.35),inset_0_1px_0_rgba(255,255,255,0.7)] border border-sky-300 hover:brightness-110 cursor-pointer active:scale-95',
    badgeClass: 'px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-2xs',
    promptSnippet: `### UI Component Treatment: Frutiger Aero Glossy Gel Buttons
- Buttons: Pill-shaped capsule buttons with vertical dual-gradient (\`from-sky-400 to-sky-600\`), specular top white reflection (\`inset 0 1px 0 rgba(255,255,255,0.7)\`), and watery drop shadow.
- Badges: Translucent dewdrop pills with smooth rounded-full corners and crisp saturation.
- Hover & Feedback: Luminous brightness increase on hover; soft buoyant depression on active click.`,
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
  {
    id: 'art-deco-chevron',
    name: 'Art Deco Stepped Brass Buttons',
    tagline: 'Double gold/brass border inlays, uppercase tracked luxury lettering, and architectural steps',
    description: 'Prestige luxury buttons featuring stepped metallic gold border inlays, Roman uppercase typography, and opulent Gatsby poise.',
    buttonClass: 'px-4 py-1.5 border-2 border-amber-500/80 bg-amber-950/40 text-amber-200 font-serif tracking-widest text-xs uppercase hover:bg-amber-900/60 transition-all cursor-pointer shadow-xs',
    badgeClass: 'px-2 py-0.5 border border-amber-500/60 text-amber-300 font-mono text-[9px] uppercase tracking-widest',
    promptSnippet: `### UI Component Treatment: Art Deco Stepped Brass Buttons
- Buttons: Stepped brass border inlay with gold metallic stroke (#D4AF37), tracked uppercase Roman letterforms, and subtle warm amber glow.
- Badges: Geometric gold medallions with uppercase tracking and crisp 0px corners.
- Micro-interactions: Warm lustrous metallic sheen on hover; quiet authoritative click.`,
  },
  {
    id: 'japanese-zen-hairline',
    name: 'Japanese Zen Hairline Controls',
    tagline: 'Understated bottom hairline, generous breathing room, quiet hover states, and red Hanko seal',
    description: 'Minimalist contemplation controls that refuse flashy decoration, using understated bottom hairline underlines and traditional red seal markers.',
    buttonClass: 'px-3 py-1.5 border-b-2 border-stone-800 text-stone-900 font-sans text-xs tracking-wider hover:bg-stone-100 transition-colors cursor-pointer',
    badgeClass: 'px-2 py-0.5 rounded-full border border-red-700/60 bg-red-50 text-red-700 text-[10px] font-medium',
    promptSnippet: `### UI Component Treatment: Japanese Zen Hairline Controls
- Buttons: Minimal border-b hairline underline with generous horizontal padding and quiet ink-bleed hover transition.
- Badges: Red circular Hanko seal status badge (vermilion stamp #C84B31) denoting authenticity and calm status.
- Philosophy: Zero gratuitous animations; functional clarity and generous white space.`,
  },
];

// ============================================================================
// 5. SIGNATURE ACCENTS & GRAPHIC DNA (RECOGNIZED DECORATIVE TREATMENTS)
// ============================================================================
export const ACCENT_PARTS: AccentPart[] = [
  {
    id: 'cyber-hud',
    name: 'Cyberpunk Hologram Reticle & Circuit Traces',
    tagline: 'Corner HUD targeting reticles, glowing neon circuit paths, hex matrix background, and telemetry tags',
    description: 'High-tech cyberpunk augmented-reality overlay featuring targeting crosshair reticles, hexagonal telemetry matrices, and glowing cyber circuit traces.',
    type: 'cyber-hud',
    promptSnippet: `### Signature Graphic Accents: Cyberpunk Hologram Reticle & Circuit Traces
- Targeting Marks: Corner holographic reticle targets \`⊕ [TARGET_LOCK // 0x7FFA]\`.
- Background Matrix: Subtle repeating hexagonal cyber honeycomb pattern at 12% opacity.
- Header Bar: Electric warning status band with neon corner circuit brackets.`,
  },
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
    id: 'frutiger-flare',
    name: 'Frutiger Aero Prismatic Light Flares & Dewdrops',
    tagline: 'Radiant rainbow prism streak flare, soft dewdrops, and sky-blue ambient aura',
    description: 'Iconic mid-2000s light rays and prismatic rainbow flares radiating across card headers with fresh morning dewdrops.',
    type: 'prismatic-flare',
    promptSnippet: `### Signature Graphic Accents: Frutiger Aero Prismatic Light Flares & Dewdrops
- Light Flare: Horizontal prismatic rainbow light streak flare (\`linear-gradient(90deg, transparent, rgba(56,189,248,0.4), rgba(244,114,182,0.4), rgba(250,204,21,0.4), transparent)\`).
- Atmosphere: Pristine crystalline morning aura with soft translucent dewdrop bubbles.`,
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
    id: 'art-deco-sunburst',
    name: 'Art Deco Sunburst Rays & Chevron Fan',
    tagline: 'Geometric radiant gold sunburst beam rays and stepped chevron fans framing the header',
    description: 'Classic Chrysler Building and Radio City Music Hall sunburst beam rays with symmetrical stepped chevron fans.',
    type: 'art-deco-sunburst',
    promptSnippet: `### Signature Graphic Accents: Art Deco Sunburst Rays & Chevron Fan
- Header Ornamentation: Symmetrical geometric sunburst rays radiating outward from center headers.
- Chevron Trim: Stepped brass chevron triangles framing the corner boundaries of containers.`,
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
    id: 'blueprint-dimensions',
    name: 'CAD Blueprint Dimensional Callouts',
    tagline: 'Engineering dimension callout arrows (|<-- 480mm -->|), radius arcs, and scale notations',
    description: 'Architectural dimension measurement arrows, millimeter callouts, and technical blueprint scaling marks.',
    type: 'blueprint-dimensions',
    promptSnippet: `### Signature Graphic Accents: CAD Blueprint Dimensional Callouts
- Dimensions: Engineering measurement arrows (\`|<--- 480mm --->|\`) along card margins.
- Notations: Scale factor tags (\`SCALE: 1:50\`, \`DATUM: A-01\`, \`TOLERANCE: ±0.05mm\`).`,
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
// DEFAULT INITIAL SELECTION (CYBERPUNK NIGHT CITY HIGH IMPACT COMBO)
// ============================================================================
export const DEFAULT_DESIGN_PARTS: DesignPartsSelection = {
  palette: PALETTE_PARTS[0], // Cyberpunk 2077 Night City
  font: FONT_PARTS[0], // Cyberpunk HUD / Sci-Fi Angular
  surface: SURFACE_PARTS[0], // Cyberpunk 45° Chamfered Cut
  components: COMPONENT_PARTS[0], // Cyberpunk HUD Clipped Buttons
  accent: ACCENT_PARTS[0], // Cyberpunk Hologram Reticle
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
