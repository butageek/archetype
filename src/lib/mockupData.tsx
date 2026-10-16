import React from 'react';
import {
  Activity,
  Bot,
  CircleDot,
  Compass,
  CreditCard,
  Database,
  GitBranch,
  Globe,
  Leaf,
  MousePointer,
  Radio,
  Search,
  Sparkles,
  Terminal,
  TrendingUp,
} from 'lucide-react';
import { WebAppMockupSpecimen } from '../types/mockup';

export const MOCKUP_SPECIMENS: WebAppMockupSpecimen[] = [
  // 1. LINEAR DARK KINETIC
  {
    id: 'linear-dark',
    title: 'Linear Dark Kinetic',
    category: 'devtools',
    categoryLabel: 'Developer Tools',
    tagline: 'Keyboard-first dark slate interface with glowing status pills and high data density',
    description: 'High-density obsidian interface inspired by Linear with monospaced identifiers, priority bars, cycle progress telemetry, and shortcut badges.',
    tags: ['DevTools', 'Dark Mode', 'High Density', 'Keyboard First', 'Linear Style'],
    palette: {
      primary: '#5E6AD2',
      secondary: '#4E5BA6',
      accent: '#F2994A',
      background: '#0E1015',
      surface: '#161922',
      border: '#272B38',
      text: '#F3F4F6',
      textMuted: '#8B949E',
      isDark: true,
    },
    style: {
      radius: '8px',
      borderWidth: '1px',
      borderStyle: 'solid',
      shadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
      density: 'compact',
    },
    typography: {
      heading: 'Inter, system-ui, sans-serif',
      body: 'Inter, system-ui, sans-serif',
      mono: 'JetBrains Mono, monospace',
    },
    accents: ['Status Pills', 'Priority Indicators', 'Keyboard Shortcuts (⌘K)', 'Cycle Sprint Meter'],
    agentPrompt: `Apply this visual design system to the interface:

## 1. Visual Style & Philosophy
- Aesthetic: Linear Dark Kinetic
- Mood: High-density obsidian dark mode with keyboard-first ergonomics, crisp hairline boundaries, and restrained electric pops.
- Density: Compact / High-efficiency with zero wasted vertical padding (padding 8px-12px per row, tight margins).

## 2. Semantic Color Tokens
- Background: #0E1015 (deep obsidian slate)
- Surface / Cards: #161922 (elevated dark charcoal)
- Borders: #272B38 (subtle 1px boundary lines)
- Primary Accent: #5E6AD2 (kinetic electric purple)
- Secondary Accent: #4E5BA6
- Highlights / Alerts: #F2994A (amber warning), #10B981 (emerald success)
- Text Primary: #F3F4F6 (high-contrast crisp white)
- Text Muted: #8B949E (slate gray)

## 3. Typography Invariants
- Primary UI Font: Inter, -apple-system, sans-serif
- Code & Tabular Data: JetBrains Mono or Geist Mono
- Heading Weight: Bold (600-700), tight letter-spacing (-0.02em)
- Data Labels: Monospaced uppercase with wide tracking for tags and identifiers

## 4. Borders, Radii & Shadows
- Corner Radius: 8px (rounded-lg) for cards and modals; 6px for buttons; 4px for tags
- Border Stroke: 1px solid #272B38
- Shadows: Minimal dark ambient elevation: 0 4px 20px rgba(0, 0, 0, 0.4); no bright or blurry colored drop shadows

## 5. Component Styling Rules
- Buttons: Primary buttons use #5E6AD2 with crisp 6px radius and active scale-98 feedback.
- Badges & Pills: Pill-shaped status indicators with 15% opacity tint backgrounds and colored borders.
- Inputs & Search: Inset dark input fields with border focus rings and keyboard shortcut tags (e.g. ⌘K).
- Data Rows: Subtle row hovers (#1F232E) with inline status indicators.

## 6. Tailwind CSS v4 Theme
\`\`\`css
@theme {
  --color-primary: #5E6AD2;
  --color-secondary: #4E5BA6;
  --color-accent: #F2994A;
  --color-background: #0E1015;
  --color-surface: #161922;
  --color-border: #272B38;
  --color-text-primary: #F3F4F6;
  --color-text-muted: #8B949E;
  --radius-card: 8px;
}
\`\`\``,
    renderInteractive: ({ isPreview = false }) => (
      <div className="w-full h-full bg-[#0E1015] text-[#F3F4F6] p-3.5 sm:p-5 flex flex-col justify-between font-sans select-none overflow-hidden">
        {/* Top Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-[#272B38]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#5E6AD2] flex items-center justify-center text-white text-xs font-bold">
              L
            </div>
            <span className="text-xs font-bold tracking-tight">Active Sprint // Core Engine</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#5E6AD2]/20 text-[#5E6AD2] font-semibold border border-[#5E6AD2]/30">
              ACTIVE
            </span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-[#8B949E] font-mono">
            <span className="hidden sm:inline">24 / 30 Complete</span>
            <div className="px-1.5 py-0.5 rounded bg-[#272B38] text-stone-300 border border-stone-700">⌘K</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="my-3 space-y-1">
          <div className="flex justify-between text-[10px] font-mono text-[#8B949E]">
            <span>CYCLE VELOCITY</span>
            <span className="text-[#5E6AD2] font-bold">80%</span>
          </div>
          <div className="w-full h-1.5 bg-[#1F232E] rounded-full overflow-hidden">
            <div className="h-full bg-[#5E6AD2] rounded-full" style={{ width: '80%' }} />
          </div>
        </div>

        {/* Rows */}
        <div className="space-y-1.5 flex-1">
          {[
            { id: 'MOD-402', title: 'Synthesize token pipeline with Tailwind v4', tag: 'In Progress', tagCol: '#5E6AD2', prio: 'High' },
            { id: 'SYS-189', title: 'Implement 1-click clipboard image export', tag: 'Done', tagCol: '#10B981', prio: 'Urgent' },
            { id: 'NET-405', title: 'Edge worker latency optimization', tag: 'In Review', tagCol: '#F2994A', prio: 'Med' },
          ].map((row, idx) => (
            <div
              key={idx}
              className="p-2 sm:p-2.5 rounded-lg bg-[#161922] border border-[#272B38] hover:border-[#5E6AD2]/50 transition-all flex items-center justify-between gap-2"
            >
              <div className="flex items-center gap-2 min-w-0">
                <CircleDot className="w-3.5 h-3.5 text-[#5E6AD2] flex-shrink-0" />
                <span className="text-[11px] font-mono text-[#8B949E] flex-shrink-0">{row.id}</span>
                <span className="text-xs font-medium text-stone-200 truncate">{row.title}</span>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span
                  className="px-1.5 py-0.5 rounded text-[10px] font-mono font-medium"
                  style={{ backgroundColor: `${row.tagCol}20`, color: row.tagCol }}
                >
                  {row.tag}
                </span>
                <div className="w-4 h-4 rounded-full bg-stone-700 flex items-center justify-center text-[9px] font-bold">
                  H
                </div>
              </div>
            </div>
          ))}
        </div>

        {!isPreview && (
          <div className="pt-3 border-t border-[#272B38] flex items-center justify-between text-xs">
            <span className="text-[#8B949E] text-[11px]">Press <strong className="text-stone-300">C</strong> to create</span>
            <button className="px-3 py-1 bg-[#5E6AD2] hover:bg-[#4E5BA6] text-white rounded-md text-xs font-medium cursor-pointer transition-colors">
              + New Item
            </button>
          </div>
        )}
      </div>
    ),
  },

  // 2. STRIPE REVENUE METRICS
  {
    id: 'stripe-revenue',
    title: 'Stripe Revenue Metrics',
    category: 'fintech',
    categoryLabel: 'Fintech & Markets',
    tagline: 'Clean high-trust SaaS billing dashboard with MRR and transaction telemetry',
    description: 'Crisp light-themed financial interface with Stripe blurple highlights, emerald growth metrics, Net Volume sparklines, and customer transaction feeds.',
    tags: ['Fintech', 'SaaS Billing', 'Light Theme', 'High Trust', 'Stripe Style'],
    palette: {
      primary: '#635BFF',
      secondary: '#0A2540',
      accent: '#00D924',
      background: '#F6F9FC',
      surface: '#FFFFFF',
      border: '#E3E8EE',
      text: '#0A2540',
      textMuted: '#687385',
      isDark: false,
    },
    style: {
      radius: '10px',
      borderWidth: '1px',
      borderStyle: 'solid',
      shadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
      density: 'balanced',
    },
    typography: {
      heading: 'Inter, system-ui, sans-serif',
      body: 'Inter, system-ui, sans-serif',
      mono: 'Roboto Mono, monospace',
    },
    accents: ['Emerald Growth Badges (+18.4%)', 'Currency Tabs', 'Customer Transaction Feed', 'Clean Cards'],
    agentPrompt: `Apply this visual design system to the interface:

## 1. Visual Style & Philosophy
- Aesthetic: Stripe Revenue Metrics
- Mood: High-trust, professional light-themed fintech interface with clean white cards and signature blurple accents.
- Density: Balanced spacing with generous padding around numbers for immediate comprehension.

## 2. Semantic Color Tokens
- Background: #F6F9FC (cool slate tint)
- Surface / Cards: #FFFFFF (pure white card elevation)
- Borders: #E3E8EE (crisp hairline dividers)
- Primary Accent: #635BFF (signature Stripe blurple)
- Secondary Accent: #0A2540 (deep navy brand tone)
- Highlights / Growth: #00D924 (vivid positive delta green)
- Text Primary: #0A2540 (high-contrast dark navy)
- Text Muted: #687385 (neutral cool gray)

## 3. Typography Invariants
- Primary UI Font: Inter, -apple-system, sans-serif
- Font Weights: 600 bold for numerals and key headers; 400 for secondary descriptions
- Tracking: -0.01em on large numbers; normal on body copy

## 4. Borders, Radii & Shadows
- Corner Radius: 10px (rounded-xl) for cards; 8px for buttons; 9999px (full pill) for status badges
- Border Stroke: 1px solid #E3E8EE
- Shadows: Soft ambient diffused shadow: 0 2px 8px rgba(0, 0, 0, 0.04); zero heavy dark drop-shadows

## 5. Component Styling Rules
- Metric Tiles: White card surfaces with subtle borders, top small uppercase label, large 24px-32px bold numeric value, and bottom growth pill.
- Transaction Tables: Clean white rows with border-b dividers, inline payment icon (credit card), bold amount, and green success pill.
- Buttons: Primary button in #635BFF with white text and smooth hover transition.

## 6. Tailwind CSS v4 Theme
\`\`\`css
@theme {
  --color-primary: #635BFF;
  --color-secondary: #0A2540;
  --color-accent: #00D924;
  --color-background: #F6F9FC;
  --color-surface: #FFFFFF;
  --color-border: #E3E8EE;
  --color-text-primary: #0A2540;
  --color-text-muted: #687385;
  --radius-card: 10px;
}
\`\`\``,
    renderInteractive: ({ isPreview = false }) => (
      <div className="w-full h-full bg-[#F6F9FC] text-[#0A2540] p-3.5 sm:p-5 flex flex-col justify-between font-sans select-none overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#E3E8EE]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#635BFF] flex items-center justify-center text-white text-xs font-bold">
              $
            </div>
            <span className="text-xs font-bold text-[#0A2540]">Billing // Live Telemetry</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
            ● Systems Normal
          </span>
        </div>

        {/* Metric Cards Row */}
        <div className="grid grid-cols-2 gap-2.5 my-3">
          <div className="p-3 bg-white rounded-xl border border-[#E3E8EE] shadow-xs">
            <span className="text-[11px] text-[#687385] font-medium block">Monthly Run Rate</span>
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-[#0A2540] mt-1">
              $48,290.00
            </div>
            <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 mt-1">
              <TrendingUp className="w-3 h-3" />
              <span>+18.4% vs last period</span>
            </div>
          </div>

          <div className="p-3 bg-white rounded-xl border border-[#E3E8EE] shadow-xs">
            <span className="text-[11px] text-[#687385] font-medium block">Gross Volume (30D)</span>
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-[#0A2540] mt-1">
              $142,850
            </div>
            <div className="flex items-center gap-1 text-[10px] font-medium text-[#687385] mt-1">
              <span>99.98% Success rate</span>
            </div>
          </div>
        </div>

        {/* Transaction Feed */}
        <div className="space-y-1.5 flex-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#687385] font-bold block mb-1">
            Recent Inflow Records
          </span>
          {[
            { customer: 'Enterprise Node A', amount: '$2,400.00', method: 'Visa •••• 4242' },
            { customer: 'Cloud Mesh Tier', amount: '$499.00', method: 'MC •••• 8821' },
            { customer: 'Dedicated Instance', amount: '$120.00', method: 'Amex •••• 1004' },
          ].map((tx, idx) => (
            <div
              key={idx}
              className="p-2 sm:p-2.5 rounded-lg bg-white border border-[#E3E8EE] flex items-center justify-between text-xs"
            >
              <div className="flex items-center gap-2">
                <CreditCard className="w-3.5 h-3.5 text-[#635BFF]" />
                <span className="font-semibold text-[#0A2540]">{tx.customer}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-[#0A2540]">{tx.amount}</span>
                <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">
                  Succeeded
                </span>
              </div>
            </div>
          ))}
        </div>

        {!isPreview && (
          <div className="pt-3 border-t border-[#E3E8EE] flex items-center justify-between text-xs text-[#687385]">
            <span>Next automatic settlement: Tomorrow</span>
            <button className="px-3 py-1 bg-[#635BFF] hover:bg-[#5249DE] text-white rounded-lg text-xs font-semibold cursor-pointer">
              Export Audit
            </button>
          </div>
        )}
      </div>
    ),
  },

  // 3. VERCEL EDGE CLOUD CONSOLE
  {
    id: 'vercel-edge',
    title: 'Vercel Edge Cloud Console',
    category: 'devtools',
    categoryLabel: 'Developer Tools',
    tagline: 'Monochromatic black and titanium deployment pipeline with cyan telemetry dots',
    description: 'High-contrast stark interface inspired by Vercel with git commit hashes, serverless edge function latency meters, build timers, and domain routing tags.',
    tags: ['DevTools', 'Cloud', 'Serverless', 'Minimal Stark', 'Vercel Style'],
    palette: {
      primary: '#0070F3',
      secondary: '#50E3C2',
      accent: '#FF0080',
      background: '#000000',
      surface: '#0A0A0A',
      border: '#222222',
      text: '#EDEDED',
      textMuted: '#888888',
      isDark: true,
    },
    style: {
      radius: '6px',
      borderWidth: '1px',
      borderStyle: 'solid',
      shadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
      density: 'compact',
    },
    typography: {
      heading: 'Geist, system-ui, sans-serif',
      body: 'Geist, system-ui, sans-serif',
      mono: 'Geist Mono, monospace',
    },
    accents: ['Cyan Status Dot', 'Git Commit Hashes', 'Edge Region Pills (iad1)', 'Stark Hairline Borders'],
    agentPrompt: `Apply this visual design system to the interface:

## 1. Visual Style & Philosophy
- Aesthetic: Vercel Edge Cloud Console
- Mood: Monochromatic, stark, high-contrast engineering console with laser cyan accents and titanium card surfaces.
- Density: Compact engineering layout with tabular alignment and strict hairline boundary lines.

## 2. Semantic Color Tokens
- Background: #000000 (pure black)
- Surface / Cards: #0A0A0A (dark titanium elevation)
- Borders: #222222 (stark 1px hairline rules)
- Primary Accent: #0070F3 (electric laser cyan)
- Secondary Accent: #50E3C2 (luminous mint green)
- Text Primary: #EDEDED (crisp off-white)
- Text Muted: #888888 (neutral mid-gray)

## 3. Typography Invariants
- Primary UI Font: Geist, Inter, -apple-system, sans-serif
- Code & Hashes: Geist Mono or JetBrains Mono with tabular numbers
- Tracking: Tight (-0.02em) on headlines; monospaced labels

## 4. Borders, Radii & Shadows
- Corner Radius: 6px (rounded-md) across cards and buttons; 4px on badges
- Border Stroke: 1px solid #222222
- Shadows: Minimal deep black shadow: 0 8px 30px rgba(0, 0, 0, 0.5)

## 5. Component Styling Rules
- Deployment Cards: Dark charcoal card with top breadcrumb, git branch indicator, and green/cyan pulse dot.
- Telemetry Blocks: Minimal grid tiles showing numeric metrics (latency, cache hit rate) with small muted uppercase headers.
- Buttons: High-contrast white button with black text for primary actions.

## 6. Tailwind CSS v4 Theme
\`\`\`css
@theme {
  --color-primary: #0070F3;
  --color-secondary: #50E3C2;
  --color-accent: #FF0080;
  --color-background: #000000;
  --color-surface: #0A0A0A;
  --color-border: #222222;
  --color-text-primary: #EDEDED;
  --color-text-muted: #888888;
  --radius-card: 6px;
}
\`\`\``,
    renderInteractive: ({ isPreview = false }) => (
      <div className="w-full h-full bg-[#000000] text-[#EDEDED] p-3.5 sm:p-5 flex flex-col justify-between font-mono select-none overflow-hidden">
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between pb-3 border-b border-[#222222]">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-white text-black flex items-center justify-center font-black text-[10px] rounded-xs">
              ▲
            </div>
            <span className="text-xs font-bold tracking-tight text-white">cluster // production</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-[#50E3C2] bg-[#50E3C2]/10 border border-[#50E3C2]/30 px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#50E3C2] animate-pulse" />
            <span>Operational</span>
          </div>
        </div>

        {/* Box */}
        <div className="my-3 p-3 bg-[#0A0A0A] border border-[#222222] rounded-md space-y-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-stone-200">
              <GitBranch className="w-3.5 h-3.5 text-[#0070F3]" />
              <span className="font-bold">main (7a8f1b)</span>
            </div>
            <span className="text-[10px] text-[#888888]">Synced 14s ago</span>
          </div>
          <div className="text-[11px] text-[#888888] font-sans truncate">
            Edge cluster runtime active with 100% route coverage
          </div>
          <div className="flex items-center gap-2 pt-1">
            <span className="text-[10px] px-1.5 py-0.5 bg-[#1A1A1A] text-stone-300 rounded border border-[#333333]">
              Region: iad1 (US-East)
            </span>
            <span className="text-[10px] px-1.5 py-0.5 bg-[#1A1A1A] text-[#0070F3] rounded border border-[#0070F3]/30">
              Latency: 11ms
            </span>
          </div>
        </div>

        {/* Telemetry Grid */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2.5 bg-[#0A0A0A] border border-[#222222] rounded-md">
            <span className="text-[10px] text-[#888888] block">EDGE CALLS</span>
            <span className="text-sm font-bold text-white mt-0.5 block">1.84M</span>
          </div>
          <div className="p-2.5 bg-[#0A0A0A] border border-[#222222] rounded-md">
            <span className="text-[10px] text-[#888888] block">CACHE HIT</span>
            <span className="text-sm font-bold text-[#50E3C2] mt-0.5 block">99.4%</span>
          </div>
          <div className="p-2.5 bg-[#0A0A0A] border border-[#222222] rounded-md">
            <span className="text-[10px] text-[#888888] block">AVG P95</span>
            <span className="text-sm font-bold text-white mt-0.5 block">14ms</span>
          </div>
        </div>

        {!isPreview && (
          <div className="pt-3 border-t border-[#222222] flex items-center justify-between text-xs">
            <span className="text-[#888888] text-[11px] flex items-center gap-1">
              <Globe className="w-3 h-3 text-[#0070F3]" />
              live-route.dev
            </span>
            <button className="px-3 py-1 bg-white hover:bg-stone-200 text-black font-bold text-xs rounded cursor-pointer transition-colors">
              Inspect Node
            </button>
          </div>
        )}
      </div>
    ),
  },

  // 4. RETOOL SCADA OPERATIONS
  {
    id: 'retool-scada',
    title: 'Retool SCADA Operations',
    category: 'retro',
    categoryLabel: 'Industrial & Retro',
    tagline: 'High-density industrial SCADA monitor with phosphor green telemetry and relays',
    description: 'Industrial mission control layout with CRT phosphor matrix accents, live terminal event bus log, temperature readouts, potentiometer sliders, and emergency override switches.',
    tags: ['SCADA', 'Industrial', 'Terminal', 'Phosphor Green', 'High Density'],
    palette: {
      primary: '#00FF66',
      secondary: '#00D9A6',
      accent: '#FFB000',
      background: '#070C09',
      surface: '#0E1712',
      border: '#00FF66',
      text: '#00FF88',
      textMuted: '#4F8F68',
      isDark: true,
    },
    style: {
      radius: '4px',
      borderWidth: '1px',
      borderStyle: 'solid',
      shadow: '0 0 12px rgba(0, 255, 102, 0.2)',
      density: 'compact',
    },
    typography: {
      heading: 'JetBrains Mono, monospace',
      body: 'JetBrains Mono, monospace',
      mono: 'JetBrains Mono, monospace',
    },
    accents: ['CRT Phosphor Glow', 'Tabular Event Log', 'Power Actuator Slider', 'Emergency Override'],
    agentPrompt: `Apply this visual design system to the interface:

## 1. Visual Style & Philosophy
- Aesthetic: Retool SCADA Operations Desk
- Mood: Industrial mission control terminal with CRT phosphor green glow, amber warnings, and telemetry dense dials.
- Density: Ultra-compact SCADA density with tight monospaced numerical readouts.

## 2. Semantic Color Tokens
- Background: #070C09 (reactor chamber black)
- Surface / Cards: #0E1712 (dark CRT phosphor substrate)
- Borders: #00FF66 (luminous phosphor emerald)
- Primary Accent: #00FF66 (radiation green)
- Warning / Secondary: #FFB000 (amber caution)
- Text Primary: #00FF88 (phosphor text glow)
- Text Muted: #4F8F68 (dim cathode green)

## 3. Typography Invariants
- Typography: Strictly monospaced (JetBrains Mono / Space Mono)
- Formatting: Uppercase labels with wide letter-spacing (0.05em)

## 4. Borders, Radii & Shadows
- Corner Radius: 4px (sharp industrial corners)
- Border Stroke: 1px solid #00FF66
- Shadows: Specular phosphor bloom: 0 0 12px rgba(0, 255, 102, 0.2)

## 5. Component Styling Rules
- Telemetry Matrix: 3-column dense tiles with small uppercase headers and glowing numerical meters.
- Event Log Feed: Live event bus terminal table with timestamp, subsystem tag, and status badge.
- Actuators: Horizontal potentiometer slider with kilowatt readout and emergency HALT / OVERRIDE block button.

## 6. Tailwind CSS v4 Theme
\`\`\`css
@theme {
  --color-primary: #00FF66;
  --color-secondary: #00D9A6;
  --color-accent: #FFB000;
  --color-background: #070C09;
  --color-surface: #0E1712;
  --color-border: #00FF66;
  --color-text-primary: #00FF88;
  --color-text-muted: #4F8F68;
  --radius-card: 4px;
}
\`\`\``,
    renderInteractive: ({ isPreview = false }) => (
      <div className="w-full h-full bg-[#070C09] text-[#00FF88] p-3.5 sm:p-5 flex flex-col justify-between font-mono select-none overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-2 border-b border-[#00FF66]/40">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-[#00FF66] animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase">SYS-NODE // 09 MONITOR</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-[#00FF66]/20 text-[#00FF66] font-bold border border-[#00FF66]/40">
            TELEMETRY: STABLE
          </span>
        </div>

        {/* Matrix Strip */}
        <div className="grid grid-cols-3 gap-2 my-2.5 text-[10px]">
          <div className="p-2 bg-[#0E1712] border border-[#00FF66]/30 rounded">
            <span className="text-[#4F8F68] block">CORE_TEMP</span>
            <span className="text-sm font-bold text-[#00FF66] block">42.4°C</span>
          </div>
          <div className="p-2 bg-[#0E1712] border border-[#00FF66]/30 rounded">
            <span className="text-[#4F8F68] block">BUS_LOAD</span>
            <span className="text-sm font-bold text-[#FFB000] block">78.2%</span>
          </div>
          <div className="p-2 bg-[#0E1712] border border-[#00FF66]/30 rounded">
            <span className="text-[#4F8F68] block">INGEST_RATE</span>
            <span className="text-sm font-bold text-[#00FF66] block">64.1k/s</span>
          </div>
        </div>

        {/* Event Logs */}
        <div className="p-2.5 bg-[#0E1712] border border-[#00FF66]/30 rounded space-y-1.5 flex-1">
          <span className="text-[10px] font-bold tracking-wider text-[#4F8F68] block mb-1">
            TERMINAL EVENT BUS
          </span>
          <div className="text-[10px] space-y-1">
            <div className="flex justify-between">
              <span className="text-stone-400">14:02:11.88 [ETH0] Handshake OK</span>
              <span className="text-[#00FF66] font-bold">200_OK</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-400">14:02:12.04 [PWR] Re-routed node 4</span>
              <span className="text-[#FFB000] font-bold">BYPASS</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-400">14:02:12.45 [SYNC] Cluster locked</span>
              <span className="text-[#00FF66] font-bold">SYNCED</span>
            </div>
          </div>
        </div>

        {!isPreview && (
          <div className="pt-2.5 border-t border-[#00FF66]/40 flex items-center justify-between">
            <span className="text-[10px] text-[#4F8F68]">FAILOVER GUARD: ARMED</span>
            <button className="px-3 py-1 bg-[#00FF66] text-[#070C09] font-black text-xs uppercase tracking-wider rounded cursor-pointer hover:bg-[#00D9A6] transition-colors">
              HALT / RELAY
            </button>
          </div>
        )}
      </div>
    ),
  },

  // 5. SUPABASE STUDIO DATASTORE
  {
    id: 'supabase-studio',
    title: 'Supabase Studio Datastore',
    category: 'devtools',
    categoryLabel: 'Developer Tools',
    tagline: 'Deep dark database schema browser with SQL runner and real-time rows',
    description: 'PostgreSQL database browser inspired by Supabase with table views, RLS security indicator, schema inspection, and real-time execution speeds.',
    tags: ['DevTools', 'Database', 'Postgres', 'SQL', 'Supabase Style'],
    palette: {
      primary: '#3ECF8E',
      secondary: '#24B47E',
      accent: '#F4A261',
      background: '#121212',
      surface: '#1E1E1E',
      border: '#2E2E2E',
      text: '#E0E0E0',
      textMuted: '#808080',
      isDark: true,
    },
    style: {
      radius: '8px',
      borderWidth: '1px',
      borderStyle: 'solid',
      shadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
      density: 'compact',
    },
    typography: {
      heading: 'Inter, system-ui, sans-serif',
      body: 'Inter, system-ui, sans-serif',
      mono: 'JetBrains Mono, monospace',
    },
    accents: ['Table Grid View', 'RLS Security Badge', 'SQL Runner Bar', 'Supabase Emerald Accent'],
    agentPrompt: `Apply this visual design system to the interface:

## 1. Visual Style & Philosophy
- Aesthetic: Supabase Studio Datastore
- Mood: High-performance developer console with deep charcoal surfaces and signature emerald highlights.
- Density: Compact tabular data view with clean grid borders and code execution readouts.

## 2. Semantic Color Tokens
- Background: #121212 (dark charcoal)
- Surface / Cards: #1E1E1E (elevated panel substrate)
- Borders: #2E2E2E (hairline boundary rules)
- Primary Accent: #3ECF8E (Supabase vibrant emerald)
- Secondary Accent: #24B47E
- Text Primary: #E0E0E0 (clean light gray)
- Text Muted: #808080 (neutral dim gray)

## 3. Typography Invariants
- Primary UI Font: Inter, -apple-system, sans-serif
- Code & Schema: JetBrains Mono with tabular numbers
- Font Weights: Semibold for table headers; regular for data rows

## 4. Borders, Radii & Shadows
- Corner Radius: 8px (rounded-lg) for outer cards; 4px on badges
- Border Stroke: 1px solid #2E2E2E
- Shadows: Subtle ambient elevation: 0 4px 16px rgba(0, 0, 0, 0.4)

## 5. Component Styling Rules
- Command Bar: Inset dark input bar with emerald prompt glyph (\`SQL>\`) and action button.
- Grid Table: Header row in slightly darker gray (#252525) with uppercase column labels, divided rows with hover highlights.
- Status Pills: Emerald badge indicating security / sync states.

## 6. Tailwind CSS v4 Theme
\`\`\`css
@theme {
  --color-primary: #3ECF8E;
  --color-secondary: #24B47E;
  --color-accent: #F4A261;
  --color-background: #121212;
  --color-surface: #1E1E1E;
  --color-border: #2E2E2E;
  --color-text-primary: #E0E0E0;
  --color-text-muted: #808080;
  --radius-card: 8px;
}
\`\`\``,
    renderInteractive: ({ isPreview = false }) => (
      <div className="w-full h-full bg-[#121212] text-[#E0E0E0] p-3.5 sm:p-5 flex flex-col justify-between font-sans select-none overflow-hidden">
        {/* Top SQL Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-[#2E2E2E]">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-[#3ECF8E]" />
            <span className="text-xs font-bold text-white font-mono">public.records</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#3ECF8E]/20 text-[#3ECF8E] font-bold border border-[#3ECF8E]/30">
              RLS Active
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#808080]">1,420 rows • 12ms</span>
        </div>

        {/* SQL Command Runner Strip */}
        <div className="my-2.5 p-2 bg-[#1E1E1E] rounded-md border border-[#2E2E2E] flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 truncate">
            <span className="text-[#3ECF8E] font-bold">SQL&gt;</span>
            <span className="text-stone-300 truncate">SELECT id, key, tier FROM cluster LIMIT 3;</span>
          </div>
          <button className="px-2 py-0.5 bg-[#3ECF8E] text-[#121212] font-bold rounded text-[10px] flex-shrink-0 cursor-pointer">
            Run ↵
          </button>
        </div>

        {/* Tabular Records */}
        <div className="border border-[#2E2E2E] rounded-md overflow-hidden bg-[#1E1E1E] flex-1 text-[11px] font-mono">
          <div className="grid grid-cols-4 p-2 bg-[#252525] border-b border-[#2E2E2E] text-[10px] font-bold text-[#808080]">
            <span>RECORD_ID</span>
            <span>IDENTIFIER</span>
            <span>TIER</span>
            <span className="text-right">STATE</span>
          </div>
          <div className="divide-y divide-[#2E2E2E]">
            {[
              { id: 'rec_81a', email: 'cluster-node-01', role: 'primary', stat: 'active' },
              { id: 'rec_94b', email: 'worker-mesh-04', role: 'replica', stat: 'active' },
              { id: 'rec_23c', email: 'edge-cache-12', role: 'standby', stat: 'synced' },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-4 p-2 items-center hover:bg-[#282828] transition-colors">
                <span className="text-[#808080] truncate">{row.id}</span>
                <span className="text-white truncate font-sans">{row.email}</span>
                <span className="text-[#3ECF8E]">{row.role}</span>
                <span className="text-right text-[10px] font-bold text-emerald-400">{row.stat}</span>
              </div>
            ))}
          </div>
        </div>

        {!isPreview && (
          <div className="pt-3 border-t border-[#2E2E2E] flex items-center justify-between text-xs text-[#808080]">
            <span>Engine: Distributed Datastore v16</span>
            <button className="px-3 py-1 bg-[#2E2E2E] hover:bg-stone-700 text-white rounded text-xs font-semibold cursor-pointer">
              + Insert Row
            </button>
          </div>
        )}
      </div>
    ),
  },

  // 6. NOTION-STYLE MINIMAL KNOWLEDGE BASE
  {
    id: 'notion-minimal',
    title: 'Notion Minimal Knowledge Base',
    category: 'minimal',
    categoryLabel: 'Minimalist & Editorial',
    tagline: 'Warm paper white editorial workspace with callout boxes and task checklists',
    description: 'Tranquil publication interface with generous breathing room, warm stone borders, serif/sans hybrid typography, checklist items, and document breadcrumbs.',
    tags: ['Minimalist', 'Knowledge Base', 'Light Theme', 'Document', 'Notion Style'],
    palette: {
      primary: '#2383E2',
      secondary: '#E8DEEE',
      accent: '#EB5757',
      background: '#FAFAF9',
      surface: '#FFFFFF',
      border: '#E7E5E4',
      text: '#1C1917',
      textMuted: '#78716C',
      isDark: false,
    },
    style: {
      radius: '8px',
      borderWidth: '1px',
      borderStyle: 'solid',
      shadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      density: 'spacious',
    },
    typography: {
      heading: 'Playfair Display, Georgia, serif',
      body: 'Inter, system-ui, sans-serif',
      mono: 'JetBrains Mono, monospace',
    },
    accents: ['Lightbulb Callout Box', 'Task Checklist', 'Breadcrumb Trail', 'Serif Headline'],
    agentPrompt: `Apply this visual design system to the interface:

## 1. Visual Style & Philosophy
- Aesthetic: Notion Minimal Knowledge Base
- Mood: Serene, literary, distraction-free warm paper workspace with ample negative space.
- Density: Spacious layout with generous breathing room and natural vertical flow.

## 2. Semantic Color Tokens
- Background: #FAFAF9 (warm paper tone)
- Surface / Cards: #FFFFFF (pure white paper sheets)
- Borders: #E7E5E4 (warm stone hairline rules)
- Primary Accent: #2383E2 (notion ink blue)
- Secondary Accent: #E8DEEE (soft lilac background wash)
- Text Primary: #1C1917 (deep charcoal ink)
- Text Muted: #78716C (warm stone gray)

## 3. Typography Invariants
- Headings: Serif font (Playfair Display / Georgia) with normal tracking
- Body Copy: Crisp sans-serif (Inter) with generous line-height (1.6)
- Code & Breadcrumbs: JetBrains Mono

## 4. Borders, Radii & Shadows
- Corner Radius: 8px (rounded-lg) for cards and callout blocks
- Border Stroke: 1px solid #E7E5E4
- Shadows: Minimal subtle elevation: 0 1px 3px rgba(0, 0, 0, 0.05)

## 5. Component Styling Rules
- Callout Box: Tinted amber or light gray background with rounded corners, inline icon, and bold header.
- Breadcrumbs: Subtle slash dividers with muted link states.
- Checklists: Native square checkboxes with strike-through styling on active state.

## 6. Tailwind CSS v4 Theme
\`\`\`css
@theme {
  --color-primary: #2383E2;
  --color-secondary: #E8DEEE;
  --color-accent: #EB5757;
  --color-background: #FAFAF9;
  --color-surface: #FFFFFF;
  --color-border: #E7E5E4;
  --color-text-primary: #1C1917;
  --color-text-muted: #78716C;
  --radius-card: 8px;
}
\`\`\``,
    renderInteractive: ({ isPreview = false }) => (
      <div className="w-full h-full bg-[#FAFAF9] text-[#1C1917] p-3.5 sm:p-5 flex flex-col justify-between font-sans select-none overflow-hidden">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-1.5 text-xs text-[#78716C] pb-2 border-b border-[#E7E5E4]">
          <span>Workspace</span>
          <span>/</span>
          <span>Guidelines</span>
          <span>/</span>
          <span className="font-semibold text-stone-900">Architecture.spec</span>
        </div>

        {/* Title */}
        <div className="my-2 space-y-1">
          <div className="text-xl sm:text-2xl font-serif font-bold text-stone-900 tracking-tight">
            Design Philosophy & Invariants
          </div>
          <p className="text-xs text-[#78716C]">
            Structured spatial design principles and component contracts.
          </p>
        </div>

        {/* Callout Box */}
        <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-lg flex items-start gap-2.5 text-xs text-amber-950">
          <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="block font-semibold">Invariant Rule</strong>
            <span>All visual treatments must respect negative space without cramped clustering.</span>
          </div>
        </div>

        {/* Checklist */}
        <div className="space-y-1.5 my-2 flex-1 text-xs">
          {[
            { label: 'Export 1-click clipboard PNG image', checked: true },
            { label: 'Plain text AI prompt ready for Claude & Cursor', checked: true },
            { label: 'Maintain high legibility and WCAG AAA contrast', checked: false },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <input
                type="checkbox"
                defaultChecked={item.checked}
                className="rounded border-stone-300 text-[#2383E2] focus:ring-0 cursor-pointer"
              />
              <span className={item.checked ? 'line-through text-[#78716C]' : 'text-stone-800'}>
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {!isPreview && (
          <div className="pt-2 border-t border-[#E7E5E4] flex items-center justify-between text-xs text-[#78716C]">
            <span>Last revised recently</span>
            <span className="font-mono text-[11px]">840 words • 4 min read</span>
          </div>
        )}
      </div>
    ),
  },

  // 7. NEO-BRUTALIST CREATOR STUDIO
  {
    id: 'neobrutalist-studio',
    title: 'Neo-Brutalist Creator Studio',
    category: 'ai-creative',
    categoryLabel: 'AI & Creative Studio',
    tagline: 'Bold 3px solid black outlines with 4px unblurred hard offset shadows and canary pops',
    description: 'High-contrast, playful web3/creator interface with thick physical borders, hard drop-cast block shadows, vibrant canary yellow and hot pink badges, and chunky buttons.',
    tags: ['Neo-Brutalism', 'Creative', 'Bold Outlines', 'Hard Shadow', 'Playful'],
    palette: {
      primary: '#FFE600',
      secondary: '#FF5C8D',
      accent: '#00F0FF',
      background: '#FFFDF0',
      surface: '#FFFFFF',
      border: '#000000',
      text: '#000000',
      textMuted: '#555555',
      isDark: false,
    },
    style: {
      radius: '6px',
      borderWidth: '3px',
      borderStyle: 'solid',
      shadow: '4px 4px 0px #000000',
      density: 'balanced',
    },
    typography: {
      heading: 'Space Grotesk, Impact, sans-serif',
      body: 'Inter, system-ui, sans-serif',
      mono: 'Space Mono, monospace',
    },
    accents: ['3px Thick Black Outlines', '4px Hard Offset Block Shadow', 'Canary Yellow Pop', 'Sticker Badges'],
    agentPrompt: `Apply this visual design system to the interface:

## 1. Visual Style & Philosophy
- Aesthetic: Neo-Brutalist Pop Studio
- Mood: Bold, unapologetic, playful physical boundaries with thick black outlines and vivid pop backdrops.
- Density: Balanced spacing with high-impact oversized buttons and sticker pills.

## 2. Semantic Color Tokens
- Background: #FFFDF0 (pale ivory cream)
- Surface / Cards: #FFFFFF (pure white card)
- Borders: #000000 (3px solid stark black)
- Primary Accent: #FFE600 (electric canary yellow)
- Secondary Accent: #FF5C8D (vibrant pop pink)
- Tertiary Accent: #00F0FF (acid cyan)
- Text Primary: #000000 (pitch black)
- Text Muted: #555555 (dark charcoal)

## 3. Typography Invariants
- Headings: Space Grotesk / Impact in uppercase bold
- Body: Inter or clean geometric sans
- Badges: Monospaced uppercase with tight letter-spacing

## 4. Borders, Radii & Shadows
- Corner Radius: 6px on cards and buttons; zero on badges
- Border Stroke: Strictly 3px solid #000000
- Shadows: Directional hard block shadow: 4px 4px 0px #000000 (ZERO blur!)

## 5. Component Styling Rules
- Buttons: Chunky 3px black border with canary or pink background, hard 3px shadow, and active press-down translation (translate-x-0.5 translate-y-0.5).
- Badges: Angled sticker badges with black borders and contrasting fills.
- Metric Tiles: Solid cards with 3px border and 4px 4px 0px #000 shadow.

## 6. Tailwind CSS v4 Theme
\`\`\`css
@theme {
  --color-primary: #FFE600;
  --color-secondary: #FF5C8D;
  --color-accent: #00F0FF;
  --color-background: #FFFDF0;
  --color-surface: #FFFFFF;
  --color-border: #000000;
  --color-text-primary: #000000;
  --color-text-muted: #555555;
  --radius-card: 6px;
}
\`\`\``,
    renderInteractive: ({ isPreview = false }) => (
      <div className="w-full h-full bg-[#FFFDF0] text-black p-3.5 sm:p-5 flex flex-col justify-between font-sans select-none overflow-hidden">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-2.5 border-b-2 border-black">
          <div className="flex items-center gap-2">
            <div className="px-2 py-0.5 bg-[#FFE600] border-2 border-black font-black text-xs uppercase shadow-[2px_2px_0px_#000]">
              POP!
            </div>
            <span className="font-black text-sm tracking-tight uppercase">CREATIVE STUDIO</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 bg-[#FF5C8D] text-white font-black border-2 border-black uppercase shadow-[2px_2px_0px_#000]">
            VERIFIED
          </span>
        </div>

        {/* Metric Card */}
        <div className="my-2.5 p-3.5 bg-white border-3 border-black shadow-[4px_4px_0px_#000] rounded-md space-y-1">
          <div className="flex justify-between items-center text-xs font-mono font-bold">
            <span>REACH INDEX</span>
            <span className="bg-[#00F0FF] px-1.5 py-0.5 border border-black text-[10px]">LIVE FEED</span>
          </div>
          <div className="text-3xl font-black tracking-tight">148,920</div>
          <div className="text-xs font-bold text-[#FF5C8D]">+24.5% THIS WEEK 🔥</div>
        </div>

        {/* Action Controls */}
        <div className="grid grid-cols-2 gap-2 flex-1">
          <div className="p-2.5 bg-[#FFE600] border-2 border-black shadow-[3px_3px_0px_#000] rounded flex flex-col justify-between">
            <span className="text-[10px] font-mono font-bold uppercase">QUEUE</span>
            <span className="text-lg font-black">42 ITEMS</span>
          </div>
          <div className="p-2.5 bg-[#00F0FF] border-2 border-black shadow-[3px_3px_0px_#000] rounded flex flex-col justify-between">
            <span className="text-[10px] font-mono font-bold uppercase">EFFICIENCY</span>
            <span className="text-lg font-black">94.8%</span>
          </div>
        </div>

        {!isPreview && (
          <div className="pt-3 border-t-2 border-black flex items-center justify-between">
            <span className="text-xs font-mono font-bold">STANDBY READY</span>
            <button className="px-4 py-2 bg-[#FFE600] hover:bg-yellow-400 font-black text-xs uppercase border-2 border-black shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000] cursor-pointer transition-all">
              EXECUTE DROP 🚀
            </button>
          </div>
        )}
      </div>
    ),
  },

  // 8. RAYCAST QUICK COMMAND HUD
  {
    id: 'raycast-hud',
    title: 'Raycast Quick Command HUD',
    category: 'devtools',
    categoryLabel: 'Developer Tools',
    tagline: 'Spotlight keyboard command launcher with fuzzy actions and system telemetry',
    description: 'Floating keyboard-centric command palette inspired by Raycast with spotlight search input, extension pills, system telemetry readouts (RAM, CPU), and shortcut badges.',
    tags: ['Command Palette', 'Keyboard First', 'Dark Glass', 'Productivity', 'Raycast Style'],
    palette: {
      primary: '#A855F7',
      secondary: '#EC4899',
      accent: '#3B82F6',
      background: '#18181B',
      surface: '#27272A',
      border: '#3F3F46',
      text: '#FAFAFA',
      textMuted: '#A1A1AA',
      isDark: true,
    },
    style: {
      radius: '12px',
      borderWidth: '1px',
      borderStyle: 'solid',
      shadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
      density: 'compact',
    },
    typography: {
      heading: 'Inter, system-ui, sans-serif',
      body: 'Inter, system-ui, sans-serif',
      mono: 'JetBrains Mono, monospace',
    },
    accents: ['Spotlight Search Bar', 'Keyboard Badges (↵ Open)', 'Extension Icons', 'Fuzzy Action List'],
    agentPrompt: `Apply this visual design system to the interface:

## 1. Visual Style & Philosophy
- Aesthetic: Raycast Quick Command HUD
- Mood: Keyboard-driven spotlight launcher with dark zinc panels and luminous purple focus highlights.
- Density: Compact and centered, prioritizing rapid keyboard interaction.

## 2. Semantic Color Tokens
- Background: #18181B (deep zinc dark)
- Surface / Cards: #27272A (elevated charcoal command container)
- Borders: #3F3F46 (subtle metallic border)
- Primary Accent: #A855F7 (electric luminous violet)
- Secondary Accent: #EC4899 (magenta pop)
- Text Primary: #FAFAFA (crisp white)
- Text Muted: #A1A1AA (cool zinc gray)

## 3. Typography Invariants
- Typography: Inter with clean legibility
- Shortcuts: Monospaced tags (JetBrains Mono) with inline border outlines

## 4. Borders, Radii & Shadows
- Corner Radius: 12px (rounded-2xl) for modal frame; 8px for item rows
- Border Stroke: 1px solid #3F3F46
- Shadows: Deep elevation: 0 20px 40px rgba(0, 0, 0, 0.6)

## 5. Component Styling Rules
- Spotlight Search Input: Large clean search field with magnifying glass icon and ⌘K badge.
- Command List: Interactive item rows with icon glyphs, title, category tag, and '↵ Select' action.
- Telemetry Footer: Muted bottom status strip with system resource metrics (RAM, CPU).

## 6. Tailwind CSS v4 Theme
\`\`\`css
@theme {
  --color-primary: #A855F7;
  --color-secondary: #EC4899;
  --color-accent: #3B82F6;
  --color-background: #18181B;
  --color-surface: #27272A;
  --color-border: #3F3F46;
  --color-text-primary: #FAFAFA;
  --color-text-muted: #A1A1AA;
  --radius-card: 12px;
}
\`\`\``,
    renderInteractive: () => (
      <div className="w-full h-full bg-[#18181B] text-[#FAFAFA] p-3.5 sm:p-5 flex flex-col justify-between font-sans select-none overflow-hidden">
        {/* Spotlight Search Input */}
        <div className="p-2.5 bg-[#27272A] border border-[#3F3F46] rounded-xl flex items-center gap-2.5">
          <Search className="w-4 h-4 text-[#A855F7] flex-shrink-0" />
          <input
            type="text"
            readOnly
            value="Search commands or trigger actions..."
            className="w-full bg-transparent text-xs text-stone-200 outline-none placeholder:text-[#A1A1AA]"
          />
          <div className="px-1.5 py-0.5 rounded bg-black/40 text-[10px] font-mono text-stone-400 border border-stone-700">
            ⌘K
          </div>
        </div>

        {/* Command Action Items */}
        <div className="space-y-1.5 my-3 flex-1">
          {[
            { title: 'Open Specimen Canvas', cat: 'Navigation', icon: Compass, sel: true },
            { title: 'Restart Serverless Node', cat: 'DevOps', icon: Terminal, sel: false },
            { title: 'Toggle High-Density Telemetry', cat: 'Preferences', icon: Activity, sel: false },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-2 rounded-lg flex items-center justify-between text-xs cursor-pointer transition-colors ${
                  item.sel
                    ? 'bg-[#A855F7]/20 border border-[#A855F7]/40 text-white font-semibold'
                    : 'bg-[#27272A]/50 border border-transparent text-[#A1A1AA] hover:bg-[#27272A]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className={`w-3.5 h-3.5 ${item.sel ? 'text-[#A855F7]' : 'text-stone-400'}`} />
                  <span>{item.title}</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono">
                  <span className="text-stone-400">{item.cat}</span>
                  {item.sel && <span className="text-[#A855F7] font-bold">↵ Open</span>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Telemetry Footer */}
        <div className="pt-2.5 border-t border-[#3F3F46] flex items-center justify-between text-[10px] font-mono text-[#A1A1AA]">
          <div className="flex items-center gap-2">
            <span>RAM: 4.2GB</span>
            <span>•</span>
            <span>CPU: 12%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>Raycast Core v1.94</span>
          </div>
        </div>
      </div>
    ),
  },

  // 9. SWISS TYPOGRAPHIC HEADLESS CMS
  {
    id: 'swiss-cms',
    title: 'Swiss Typographic Headless CMS',
    category: 'minimal',
    categoryLabel: 'Minimalist & Editorial',
    tagline: 'Asymmetric international typographic publication portal with Zurich red focal accents',
    description: 'Disciplined publication console with strict asymmetric grid, hairline rules, bold grotesque headers, article publishing states, and Zurich red accent pop.',
    tags: ['Swiss International', 'Editorial', 'Typography', 'Minimalist', 'Asymmetric'],
    palette: {
      primary: '#FF2D20',
      secondary: '#000000',
      accent: '#2B2B2B',
      background: '#FFFFFF',
      surface: '#FBFBFB',
      border: '#E5E5E5',
      text: '#111111',
      textMuted: '#666666',
      isDark: false,
    },
    style: {
      radius: '0px',
      borderWidth: '1px',
      borderStyle: 'solid',
      shadow: 'none',
      density: 'compact',
    },
    typography: {
      heading: 'Space Grotesk, sans-serif',
      body: 'Inter, system-ui, sans-serif',
      mono: 'JetBrains Mono, monospace',
    },
    accents: ['Zurich Red Accent Block', 'Strict Asymmetric Hairline Rules', 'Uppercase Grotesque Headlines', '0px Corner Radius'],
    agentPrompt: `Apply this visual design system to the interface:

## 1. Visual Style & Philosophy
- Aesthetic: Swiss International Typographic Style
- Mood: Strict asymmetric grid, mathematical precision, stark black-and-white contrast with a single Zurich red accent block.
- Density: Disciplined grid layout with hairline dividers and zero decorative ornamentation.

## 2. Semantic Color Tokens
- Background: #FFFFFF (stark paper white)
- Surface / Cards: #FBFBFB (minimal off-white substrate)
- Borders: #E5E5E5 (hairline precision gray)
- Primary Accent: #FF2D20 (Zurich vivid vermilion red)
- Secondary Accent: #000000 (deep black)
- Text Primary: #111111 (high-contrast black)
- Text Muted: #666666 (architectural gray)

## 3. Typography Invariants
- Headings: Bold grotesque uppercase (Space Grotesk) with tight tracking
- Body: Geometric sans (Inter) with generous line heights
- Data & Indexes: Monospaced uppercase with chapter section numbers (e.g. SEC. 02 // § B)

## 4. Borders, Radii & Shadows
- Corner Radius: Strictly 0px (sharp edges across all cards, inputs, and buttons)
- Border Stroke: 1px solid #E5E5E5 (hairline precision)
- Shadows: None (pure flat graphic design)

## 5. Component Styling Rules
- Dividers: Stark hairline lines between columns and sections.
- Accents: Red rectangular mark next to section headings.
- Buttons: Sharp rectangular button in #FF2D20 with bold uppercase white text.

## 6. Tailwind CSS v4 Theme
\`\`\`css
@theme {
  --color-primary: #FF2D20;
  --color-secondary: #000000;
  --color-accent: #2B2B2B;
  --color-background: #FFFFFF;
  --color-surface: #FBFBFB;
  --color-border: #E5E5E5;
  --color-text-primary: #111111;
  --color-text-muted: #666666;
  --radius-card: 0px;
}
\`\`\``,
    renderInteractive: ({ isPreview = false }) => (
      <div className="w-full h-full bg-white text-black p-3.5 sm:p-5 flex flex-col justify-between font-sans select-none overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-black">
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 bg-[#FF2D20]" />
            <span className="text-xs font-black tracking-widest uppercase font-mono">
              ZÜRICH INTERNATIONAL // 2026
            </span>
          </div>
          <span className="text-[10px] font-mono uppercase font-bold text-[#FF2D20]">
            EDITION 08
          </span>
        </div>

        {/* Editorial Showcase */}
        <div className="my-2 space-y-1.5">
          <div className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">
            DESIGN DIRECTIVE
          </div>
          <div className="text-xl sm:text-2xl font-black uppercase tracking-tight leading-tight">
            FORM STRICTLY FOLLOWS SYSTEM SPECIFICATION
          </div>
          <p className="text-xs text-stone-600 leading-snug">
            International graphic consistency adhering to mathematical 8pt baseline grids.
          </p>
        </div>

        {/* Metrics Table */}
        <div className="border border-stone-200 divide-y divide-stone-200 text-xs font-mono">
          <div className="p-2 flex justify-between bg-stone-50">
            <span className="text-stone-500">STATUS</span>
            <span className="font-bold text-[#FF2D20]">IN REVIEW</span>
          </div>
          <div className="p-2 flex justify-between">
            <span className="text-stone-500">WORD COUNT</span>
            <span className="font-bold">1,842 WORDS</span>
          </div>
          <div className="p-2 flex justify-between">
            <span className="text-stone-500">AUTHOR</span>
            <span className="font-bold">JOSEF MÜLLER</span>
          </div>
        </div>

        {!isPreview && (
          <div className="pt-3 border-t border-black flex items-center justify-between text-xs font-mono font-bold">
            <span>SEC. 02 // § B</span>
            <button className="px-4 py-1.5 bg-[#FF2D20] text-white font-bold uppercase tracking-wider text-xs rounded-none cursor-pointer">
              PUBLISH SPEC ↵
            </button>
          </div>
        )}
      </div>
    ),
  },

  // 10. TRADINGVIEW CRYPTO TELEMETRY
  {
    id: 'crypto-telemetry',
    title: 'TradingView Crypto Telemetry',
    category: 'fintech',
    categoryLabel: 'Fintech & Markets',
    tagline: 'High-frequency financial market order book with neon bids and asks',
    description: 'Real-time financial exchange terminal with live BTC/USDT candlestick price readout, 2-column order book depth ladder, leverage slider, and instant execution buttons.',
    tags: ['Crypto', 'Order Book', 'Financial', 'High Frequency', 'TradingView Style'],
    palette: {
      primary: '#0ECB81',
      secondary: '#F6465D',
      accent: '#F0B90B',
      background: '#0B0E14',
      surface: '#151924',
      border: '#222838',
      text: '#EAECEF',
      textMuted: '#848E9C',
      isDark: true,
    },
    style: {
      radius: '6px',
      borderWidth: '1px',
      borderStyle: 'solid',
      shadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
      density: 'compact',
    },
    typography: {
      heading: 'JetBrains Mono, monospace',
      body: 'Inter, system-ui, sans-serif',
      mono: 'JetBrains Mono, monospace',
    },
    accents: ['Bids/Asks Depth Ladder', 'BTC/USDT Live Ticker', 'Leverage Slider (20x)', 'Instant Trade Triggers'],
    agentPrompt: `Apply this visual design system to the interface:

## 1. Visual Style & Philosophy
- Aesthetic: TradingView Market Telemetry
- Mood: High-frequency financial exchange terminal with deep midnight navy background and glowing neon buy/sell indicators.
- Density: Compact tabular data density with strict numerical alignment.

## 2. Semantic Color Tokens
- Background: #0B0E14 (midnight black)
- Surface / Cards: #151924 (dark order book substrate)
- Borders: #222838 (subtle grid rules)
- Buy / Bid Green: #0ECB81 (electric mint green)
- Sell / Ask Red: #F6465D (vivid rose red)
- Warning / Delta: #F0B90B (amber gold)
- Text Primary: #EAECEF (clean silver text)
- Text Muted: #848E9C (cool slate gray)

## 3. Typography Invariants
- Numbers: Strictly monospaced (JetBrains Mono) with tabular alignment
- Headers: Crisp sans-serif or uppercase mono labels

## 4. Borders, Radii & Shadows
- Corner Radius: 6px on container panels; 4px on buttons
- Border Stroke: 1px solid #222838
- Shadows: Subtle dark elevation: 0 4px 16px rgba(0, 0, 0, 0.5)

## 5. Component Styling Rules
- Order Book: Dual-column ladder with red asks on top and green bids on bottom.
- Action Buttons: High-impact green BUY button and rose red SELL button.

## 6. Tailwind CSS v4 Theme
\`\`\`css
@theme {
  --color-primary: #0ECB81;
  --color-secondary: #F6465D;
  --color-accent: #F0B90B;
  --color-background: #0B0E14;
  --color-surface: #151924;
  --color-border: #222838;
  --color-text-primary: #EAECEF;
  --color-text-muted: #848E9C;
  --radius-card: 6px;
}
\`\`\``,
    renderInteractive: () => (
      <div className="w-full h-full bg-[#0B0E14] text-[#EAECEF] p-3.5 sm:p-5 flex flex-col justify-between font-mono select-none overflow-hidden">
        {/* Ticker Header */}
        <div className="flex items-center justify-between pb-2.5 border-b border-[#222838]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-white">BTC / USDT</span>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#0ECB81]/20 text-[#0ECB81]">
              +4.82%
            </span>
          </div>
          <span className="text-base font-bold text-[#0ECB81]">$64,820.50</span>
        </div>

        {/* Order Book Grid (Bids vs Asks) */}
        <div className="grid grid-cols-2 gap-2 my-2.5 text-[10px] flex-1">
          {/* Asks (Red) */}
          <div className="space-y-1 p-2 bg-[#151924] border border-[#222838] rounded">
            <span className="text-[#848E9C] text-[9px] block">ASKS (SELL)</span>
            <div className="flex justify-between text-[#F6465D]">
              <span>64,825.00</span>
              <span className="text-stone-400">1.42 BTC</span>
            </div>
            <div className="flex justify-between text-[#F6465D]">
              <span>64,822.50</span>
              <span className="text-stone-400">0.88 BTC</span>
            </div>
          </div>

          {/* Bids (Green) */}
          <div className="space-y-1 p-2 bg-[#151924] border border-[#222838] rounded">
            <span className="text-[#848E9C] text-[9px] block">BIDS (BUY)</span>
            <div className="flex justify-between text-[#0ECB81]">
              <span>64,820.00</span>
              <span className="text-stone-400">3.20 BTC</span>
            </div>
            <div className="flex justify-between text-[#0ECB81]">
              <span>64,818.50</span>
              <span className="text-stone-400">2.14 BTC</span>
            </div>
          </div>
        </div>

        {/* Execution Strip */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#222838]">
          <button className="py-2 bg-[#0ECB81] hover:bg-emerald-400 text-black font-bold text-xs rounded cursor-pointer transition-colors">
            BUY / LONG
          </button>
          <button className="py-2 bg-[#F6465D] hover:bg-rose-500 text-white font-bold text-xs rounded cursor-pointer transition-colors">
            SELL / SHORT
          </button>
        </div>
      </div>
    ),
  },

  // 11. ARC SPATIAL PASTEL STUDIO
  {
    id: 'arc-spatial',
    title: 'Arc Spatial Pastel Studio',
    category: 'ai-creative',
    categoryLabel: 'AI & Creative Studio',
    tagline: 'Modern fluid spatial interface with frosted pastel sherbet gradients and split docks',
    description: 'Contemporary spatial workspace inspired by Arc with vertical pill docks, soft gradient frosted cards (lavender, sherbet coral, sky mint), and floating island controls.',
    tags: ['Arc Style', 'Pastel', 'Spatial', 'Creative', 'Modern Fluid'],
    palette: {
      primary: '#FF7D61',
      secondary: '#9B87F5',
      accent: '#7EE787',
      background: '#F8F6F4',
      surface: '#FFFFFF',
      border: '#E8E4DF',
      text: '#1C1917',
      textMuted: '#78716C',
      isDark: false,
    },
    style: {
      radius: '16px',
      borderWidth: '1px',
      borderStyle: 'solid',
      shadow: '0 8px 30px rgba(155, 135, 245, 0.12)',
      density: 'spacious',
    },
    typography: {
      heading: 'Inter, system-ui, sans-serif',
      body: 'Inter, system-ui, sans-serif',
      mono: 'JetBrains Mono, monospace',
    },
    accents: ['Pastel Sherbet Gradients', 'Vertical Pill Tabs', 'Floating Island Dock', 'Fluid Corners'],
    agentPrompt: `Apply this visual design system to the interface:

## 1. Visual Style & Philosophy
- Aesthetic: Arc Spatial Pastel Studio
- Mood: Fluid, tactile, contemporary spatial canvas with soft pastel gradients, rounded pill docks, and warm paper whites.
- Density: Spacious and tranquil with generous internal margins.

## 2. Semantic Color Tokens
- Background: #F8F6F4 (warm mineral cream)
- Surface / Cards: #FFFFFF (soft white frosted elevation)
- Borders: #E8E4DF (subtle warm hairline)
- Primary Accent: #FF7D61 (warm sherbet coral)
- Secondary Accent: #9B87F5 (soft lavender violet)
- Mint Accent: #7EE787 (sky mint green)
- Text Primary: #1C1917 (dark espresso ink)
- Text Muted: #78716C (warm stone gray)

## 3. Typography Invariants
- Typography: Inter with rounded letterforms and relaxed tracking
- Headings: Semibold (600) with soft character

## 4. Borders, Radii & Shadows
- Corner Radius: 16px (rounded-2xl) on cards; 9999px (full pill) on tabs and buttons
- Border Stroke: 1px solid #E8E4DF
- Shadows: Soft colored bloom: 0 8px 30px rgba(155, 135, 245, 0.12)

## 5. Component Styling Rules
- Vertical Dock: Left-aligned vertical strip of pill-shaped navigation tabs with pastel tint hovers.
- Floating Command Island: Bottom-centered elevated pill bar with rounded icon controls.

## 6. Tailwind CSS v4 Theme
\`\`\`css
@theme {
  --color-primary: #FF7D61;
  --color-secondary: #9B87F5;
  --color-accent: #7EE787;
  --color-background: #F8F6F4;
  --color-surface: #FFFFFF;
  --color-border: #E8E4DF;
  --color-text-primary: #1C1917;
  --color-text-muted: #78716C;
  --radius-card: 16px;
}
\`\`\``,
    renderInteractive: ({ isPreview = false }) => (
      <div className="w-full h-full bg-[#F8F6F4] text-[#1C1917] p-3.5 sm:p-5 flex flex-col justify-between font-sans select-none overflow-hidden">
        {/* Top Arc Bar */}
        <div className="flex items-center justify-between pb-2.5 border-b border-[#E8E4DF]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#FF7D61] to-[#9B87F5] flex items-center justify-center text-white text-xs font-bold shadow-xs">
              ✦
            </div>
            <span className="font-bold text-xs">Spatial Canvas // Studio</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white border border-[#E8E4DF] text-stone-700 shadow-2xs">
              Space: Atelier
            </span>
          </div>
        </div>

        {/* Content Island */}
        <div className="my-2.5 p-3.5 bg-white rounded-2xl border border-[#E8E4DF] shadow-[0_8px_30px_rgba(155,135,245,0.08)] flex-1 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-900">Creative Node</span>
            <span className="text-[10px] font-semibold text-[#FF7D61] bg-[#FF7D61]/10 px-2 py-0.5 rounded-full">
              Live Link
            </span>
          </div>
          <p className="text-xs text-stone-500 my-2">
            Generous rounded margins with pastel accent highlights for relaxed workflows.
          </p>
          <div className="flex items-center gap-2 pt-1">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#9B87F5]/15 text-[#7E57C2]">
              #Atmospheric
            </span>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#7EE787]/20 text-[#1B4332]">
              #Fluid
            </span>
          </div>
        </div>

        {/* Floating Pill Dock */}
        {!isPreview && (
          <div className="pt-2 flex justify-center">
            <div className="inline-flex items-center gap-2 p-1.5 bg-white border border-[#E8E4DF] rounded-full shadow-md">
              <button className="px-3 py-1 bg-[#FF7D61] text-white rounded-full text-xs font-bold shadow-xs cursor-pointer">
                Focus
              </button>
              <button className="px-3 py-1 text-stone-600 hover:text-stone-900 rounded-full text-xs font-medium cursor-pointer">
                Split
              </button>
              <button className="px-3 py-1 text-stone-600 hover:text-stone-900 rounded-full text-xs font-medium cursor-pointer">
                Command
              </button>
            </div>
          </div>
        )}
      </div>
    ),
  },

  // 12. VISIONOS FROSTED GLASSMORPHISM
  {
    id: 'visionos-glass',
    title: 'VisionOS Frosted Glassmorphism',
    category: 'ai-creative',
    categoryLabel: 'AI & Creative Studio',
    tagline: 'Luminous translucent frosted glass with specular rim highlights and glowing pods',
    description: 'Futuristic spatial computing interface inspired by Apple visionOS with ultra-smooth translucent frosted panels, specular white rim highlights, and ambient mesh depth.',
    tags: ['Glassmorphism', 'VisionOS', 'Frosted Glass', 'Specular Rim', 'Spatial'],
    palette: {
      primary: '#00F0FF',
      secondary: '#7000FF',
      accent: '#FF00A0',
      background: '#080812',
      surface: 'rgba(255, 255, 255, 0.08)',
      border: 'rgba(255, 255, 255, 0.18)',
      text: '#FFFFFF',
      textMuted: '#94A3B8',
      isDark: true,
    },
    style: {
      radius: '20px',
      borderWidth: '1px',
      borderStyle: 'solid',
      shadow: '0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
      density: 'spacious',
    },
    typography: {
      heading: 'SF Pro Display, Inter, sans-serif',
      body: 'SF Pro Text, Inter, sans-serif',
      mono: 'JetBrains Mono, monospace',
    },
    accents: ['Translucent Frosted Glass (backdrop-blur-xl)', 'Specular White Rim Highlight', 'Floating Control Pods'],
    agentPrompt: `Apply this visual design system to the interface:

## 1. Visual Style & Philosophy
- Aesthetic: VisionOS Frosted Glassmorphism
- Mood: Ultra-refined spatial computing canvas with translucent frosted glass, glowing atmospheric mesh lights, and specular white rim borders.
- Density: Generous spatial margins with elevated floating control pods.

## 2. Semantic Color Tokens
- Background: #080812 (deep cosmic obsidian)
- Glass Surface: rgba(255, 255, 255, 0.08) with backdrop-blur-xl
- Glass Rim Border: rgba(255, 255, 255, 0.18) with inset top specular highlight
- Primary Accent: #00F0FF (electric cyan bloom)
- Secondary Accent: #7000FF (spectral purple)
- Text Primary: #FFFFFF (pure crystalline white)
- Text Muted: #94A3B8 (subtle cool slate)

## 3. Typography Invariants
- Typography: SF Pro Display / Inter with crisp weight hierarchy
- Headings: Semibold with clean letter spacing

## 4. Borders, Radii & Shadows
- Corner Radius: 20px (rounded-3xl) for glass cards; 9999px for control capsules
- Border Stroke: 1px solid rgba(255, 255, 255, 0.18)
- Shadows: 0 20px 50px rgba(0, 0, 0, 0.6) with internal top highlight (inset 0 1px 0 rgba(255, 255, 255, 0.25))

## 5. Component Styling Rules
- Glass Panels: Frosted backdrop blur (backdrop-blur-xl) with semi-transparent white tint.
- Action Pods: Floating pill-shaped button bars emitting soft neon glow on hover.

## 6. Tailwind CSS v4 Theme
\`\`\`css
@theme {
  --color-primary: #00F0FF;
  --color-secondary: #7000FF;
  --color-accent: #FF00A0;
  --color-background: #080812;
  --color-surface: rgba(255, 255, 255, 0.08);
  --color-border: rgba(255, 255, 255, 0.18);
  --color-text-primary: #FFFFFF;
  --color-text-muted: #94A3B8;
  --radius-card: 20px;
}
\`\`\``,
    renderInteractive: ({ isPreview = false }) => (
      <div className="w-full h-full bg-[#080812] text-white p-3.5 sm:p-5 flex flex-col justify-between font-sans select-none overflow-hidden relative">
        {/* Ambient mesh background glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#7000FF]/30 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00F0FF]/25 rounded-full blur-2xl pointer-events-none" />

        {/* Glass Header */}
        <div className="flex items-center justify-between pb-2.5 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-[10px]">
              ◎
            </div>
            <span className="text-xs font-semibold tracking-tight text-white/90">Spatial Canvas // OS</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-cyan-300 border border-white/20">
            PROJECTION
          </span>
        </div>

        {/* Frosted Glass Card */}
        <div className="my-2.5 p-3.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative z-10 flex-1 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-white block">Active Focal Node</span>
            <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
              Translucent frosted elevation with crisp specular edge boundaries.
            </p>
          </div>
          <div className="pt-2 flex items-center justify-between text-xs">
            <span className="text-cyan-300 font-mono text-[10px]">Depth: 420mm</span>
            <span className="text-slate-400 font-mono text-[10px]">Spec: Glass 2.0</span>
          </div>
        </div>

        {/* Bottom Floating Capsule Dock */}
        {!isPreview && (
          <div className="pt-2 flex justify-center relative z-10">
            <div className="inline-flex items-center gap-2 p-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
              <button className="px-3.5 py-1 bg-white text-black font-semibold rounded-full text-xs cursor-pointer">
                Interact
              </button>
              <button className="px-3 py-1 text-white/80 hover:text-white rounded-full text-xs cursor-pointer">
                Dismiss
              </button>
            </div>
          </div>
        )}
      </div>
    ),
  },

  // 13. PERPLEXITY / CURSOR AI AGENT WORKSPACE
  {
    id: 'ai-agent-workspace',
    title: 'Cursor & Perplexity AI Workspace',
    category: 'devtools',
    categoryLabel: 'Developer Tools',
    tagline: 'Titanium slate AI reasoning workspace with citation badges and streaming telemetry',
    description: 'Modern AI reasoning environment inspired by Cursor and Perplexity with inline citation pills, code block diffs, model selector chips, and streaming telemetry.',
    tags: ['AI Workspace', 'Cursor Style', 'Perplexity', 'Dark Slate', 'DevTools'],
    palette: {
      primary: '#10B981',
      secondary: '#6366F1',
      accent: '#F59E0B',
      background: '#0B0D13',
      surface: '#131620',
      border: '#1F2433',
      text: '#F1F5F9',
      textMuted: '#64748B',
      isDark: true,
    },
    style: {
      radius: '8px',
      borderWidth: '1px',
      borderStyle: 'solid',
      shadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
      density: 'compact',
    },
    typography: {
      heading: 'Inter, system-ui, sans-serif',
      body: 'Inter, system-ui, sans-serif',
      mono: 'JetBrains Mono, monospace',
    },
    accents: ['Citation Badges [1][2]', 'Model Selector Chip', 'Code Diff Preview', 'Reasoning Disclosure'],
    agentPrompt: `Apply this visual design system to the interface:

## 1. Visual Style & Philosophy
- Aesthetic: Cursor & Perplexity AI Workspace
- Mood: High-performance cognitive AI studio with titanium dark slate panels and emerald model output indicators.
- Density: High data density with inline expandable reasoning cards and monospaced code blocks.

## 2. Semantic Color Tokens
- Background: #0B0D13 (deep titanium slate)
- Surface / Cards: #131620 (elevated reasoning substrate)
- Borders: #1F2433 (subtle metallic separator)
- Primary Accent: #10B981 (reasoning synthesis emerald)
- Secondary Accent: #6366F1 (indigo model badge)
- Text Primary: #F1F5F9 (crisp readable text)
- Text Muted: #64748B (dim slate gray)

## 3. Typography Invariants
- Primary UI: Inter with high readability
- Code & Models: JetBrains Mono with syntax token highlights

## 4. Borders, Radii & Shadows
- Corner Radius: 8px (rounded-lg) for panels; 6px for code blocks; 4px for citation pills
- Border Stroke: 1px solid #1F2433
- Shadows: Minimal dark elevation: 0 4px 20px rgba(0, 0, 0, 0.4)

## 5. Component Styling Rules
- Model Selector: Floating pill chip indicating active model ('Claude 3.7 Sonnet', 'DeepSeek-R1').
- Citations: Small rounded pills [1] [2] with subtle border outline.
- Reasoning Cards: Inset dark box with left accent border and disclosure chevron.

## 6. Tailwind CSS v4 Theme
\`\`\`css
@theme {
  --color-primary: #10B981;
  --color-secondary: #6366F1;
  --color-accent: #F59E0B;
  --color-background: #0B0D13;
  --color-surface: #131620;
  --color-border: #1F2433;
  --color-text-primary: #F1F5F9;
  --color-text-muted: #64748B;
  --radius-card: 8px;
}
\`\`\``,
    renderInteractive: ({ isPreview = false }) => (
      <div className="w-full h-full bg-[#0B0D13] text-[#F1F5F9] p-3.5 sm:p-5 flex flex-col justify-between font-sans select-none overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-2.5 border-b border-[#1F2433]">
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4 text-[#10B981]" />
            <span className="text-xs font-bold text-white">Agentic Synthesizer</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#6366F1]/20 text-[#6366F1] font-semibold border border-[#6366F1]/30">
              Claude 3.7 Sonnet
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#64748B]">Thinking: 420ms</span>
        </div>

        {/* Reasoning Box */}
        <div className="my-2.5 p-3 bg-[#131620] border border-[#1F2433] rounded-lg space-y-2 flex-1">
          <div className="flex items-center gap-1.5 text-[11px] text-stone-400">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-semibold text-stone-200">Synthesis Complete</span>
            <span className="text-[10px] font-mono px-1 rounded bg-stone-800 text-stone-300">[1]</span>
            <span className="text-[10px] font-mono px-1 rounded bg-stone-800 text-stone-300">[2]</span>
          </div>
          <p className="text-xs text-stone-300 leading-relaxed font-sans">
            Resolved 18 web app design specifications with unified agent prompts and zero unstyled flash.
          </p>
          <div className="p-2 bg-black/40 rounded border border-[#1F2433] text-[10px] font-mono text-emerald-400 truncate">
            ✓ Verified: 0 lint errors, 0 build warnings.
          </div>
        </div>

        {!isPreview && (
          <div className="pt-2.5 border-t border-[#1F2433] flex items-center justify-between text-xs">
            <span className="text-[#64748B] text-[11px]">Prompt Tokens: 840</span>
            <button className="px-3 py-1 bg-[#10B981] text-black font-bold text-xs rounded cursor-pointer">
              Deploy Plan
            </button>
          </div>
        )}
      </div>
    ),
  },

  // 14. BRAUN DIETER RAMS HI-FI CONSOLE
  {
    id: 'braun-functionalist',
    title: 'Braun Hi-Fi Audio Console (Dieter Rams)',
    category: 'retro',
    categoryLabel: 'Industrial & Retro',
    tagline: '1970s Dieter Rams functionalism with pebble matte gray and orange anodized accents',
    description: 'Minimalist industrial hardware interface inspired by classic 1970s Braun design: pebble warm gray casing, orange anodized toggle buttons, rotary dial tick marks, and zero excess ornamentation.',
    tags: ['Dieter Rams', 'Braun', 'Functionalism', 'Retro Hardware', 'Industrial'],
    palette: {
      primary: '#FF5500',
      secondary: '#404040',
      accent: '#262626',
      background: '#E5E3DC',
      surface: '#DCDAD3',
      border: '#BCB9B1',
      text: '#1F1E1B',
      textMuted: '#6B6862',
      isDark: false,
    },
    style: {
      radius: '4px',
      borderWidth: '1px',
      borderStyle: 'solid',
      shadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      density: 'balanced',
    },
    typography: {
      heading: 'Helvetica, Arial, sans-serif',
      body: 'Helvetica, Arial, sans-serif',
      mono: 'Courier New, monospace',
    },
    accents: ['Orange Anodized Power Button', 'Rotary Dial Tick Marks', 'Pebble Warm Gray Tone', 'Physical Relays'],
    agentPrompt: `Apply this visual design system to the interface:

## 1. Visual Style & Philosophy
- Aesthetic: Dieter Rams / Braun Functionalist
- Mood: 1970s German industrial design: honest, functional, durable, with zero superfluous decoration.
- Density: Balanced architectural layout with disciplined negative space.

## 2. Semantic Color Tokens
- Background: #E5E3DC (pebble matte warm gray)
- Surface / Cards: #DCDAD3 (anodized faceplate gray)
- Borders: #BCB9B1 (precision metal boundary)
- Primary Accent: #FF5500 (iconic Braun anodized orange)
- Secondary Accent: #404040 (matte charcoal)
- Text Primary: #1F1E1B (crisp ink black)
- Text Muted: #6B6862 (hardware stamped gray)

## 3. Typography Invariants
- Typography: Strict neutral sans-serif (Helvetica / Arial / Inter)
- Alignment: Left-aligned with mechanical precision

## 4. Borders, Radii & Shadows
- Corner Radius: 4px across cards and buttons (subtle physical edge)
- Border Stroke: 1px solid #BCB9B1
- Shadows: Physical ambient metal shadow: 0 4px 12px rgba(0, 0, 0, 0.08)

## 5. Component Styling Rules
- Action Buttons: Flat matte charcoal or iconic anodized orange button (#FF5500) with stamped white text.
- Dial Readouts: Monospaced frequency / value indicators with circular border stamps.

## 6. Tailwind CSS v4 Theme
\`\`\`css
@theme {
  --color-primary: #FF5500;
  --color-secondary: #404040;
  --color-accent: #262626;
  --color-background: #E5E3DC;
  --color-surface: #DCDAD3;
  --color-border: #BCB9B1;
  --color-text-primary: #1F1E1B;
  --color-text-muted: #6B6862;
  --radius-card: 4px;
}
\`\`\``,
    renderInteractive: ({ isPreview = false }) => (
      <div className="w-full h-full bg-[#E5E3DC] text-[#1F1E1B] p-3.5 sm:p-5 flex flex-col justify-between font-sans select-none overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-2.5 border-b border-[#BCB9B1]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xs uppercase tracking-widest">BRAUN // RT 20</span>
          </div>
          <div className="w-3.5 h-3.5 rounded-full bg-[#FF5500] shadow-xs" title="Power Indicator" />
        </div>

        {/* Dial & Frequency readouts */}
        <div className="my-2.5 p-3 bg-[#DCDAD3] border border-[#BCB9B1] rounded space-y-2 flex-1">
          <div className="flex justify-between items-center text-xs font-mono">
            <span>FREQUENCY [FM]</span>
            <span className="font-bold text-[#FF5500] text-sm">98.4 MHz</span>
          </div>
          <div className="w-full h-2 bg-[#BCB9B1] rounded-none overflow-hidden">
            <div className="h-full bg-[#404040]" style={{ width: '68%' }} />
          </div>
          <div className="flex justify-between text-[10px] text-[#6B6862] font-mono pt-1">
            <span>88</span>
            <span>94</span>
            <span className="text-[#1F1E1B] font-bold">98.4</span>
            <span>104</span>
            <span>108</span>
          </div>
        </div>

        {!isPreview && (
          <div className="pt-2.5 border-t border-[#BCB9B1] flex items-center justify-between text-xs">
            <span className="text-[#6B6862] text-[10px]">OUTPUT: 40W STEREO</span>
            <button className="px-3 py-1 bg-[#404040] text-white font-bold text-xs rounded-none cursor-pointer">
              MONITOR
            </button>
          </div>
        )}
      </div>
    ),
  },

  // 15. CYBERPUNK AMBER CRT TERMINAL
  {
    id: 'cyberpunk-amber',
    title: 'Cyberpunk Amber CRT Terminal',
    category: 'dark',
    categoryLabel: 'Dark Mode & Cyberpunk',
    tagline: 'Vintage monochromatic amber phosphor terminal with CRT scanlines and hazard markings',
    description: 'Monochromatic retro-futuristic terminal interface with glowing amber phosphor (#FFB000) on pitch black, raster scanlines, memory hex dump blocks, and emergency diagnostic relays.',
    tags: ['Cyberpunk', 'Amber Terminal', 'Retro CRT', 'Monochrome', 'SCADA'],
    palette: {
      primary: '#FFB000',
      secondary: '#E69500',
      accent: '#FF7700',
      background: '#0C0800',
      surface: '#1A1202',
      border: '#FFB000',
      text: '#FFB000',
      textMuted: '#996600',
      isDark: true,
    },
    style: {
      radius: '2px',
      borderWidth: '1px',
      borderStyle: 'solid',
      shadow: '0 0 14px rgba(255, 176, 0, 0.25)',
      density: 'compact',
    },
    typography: {
      heading: 'VT323, Courier New, monospace',
      body: 'VT323, Courier New, monospace',
      mono: 'VT323, Courier New, monospace',
    },
    accents: ['Amber CRT Phosphor Glow', 'Hex Memory Dump', 'Scanline Shading', '2px Sharp Corners'],
    agentPrompt: `Apply this visual design system to the interface:

## 1. Visual Style & Philosophy
- Aesthetic: Cyberpunk Amber CRT Terminal
- Mood: Monochromatic vintage phosphor terminal with glowing amber telemetry and CRT scanline depth.
- Density: Compact terminal text stream with character-grid alignment.

## 2. Semantic Color Tokens
- Background: #0C0800 (pitch amber black)
- Surface / Cards: #1A1202 (deep amber substrate)
- Borders: #FFB000 (phosphor amber hairline)
- Primary Accent: #FFB000 (burning amber glow)
- Secondary Accent: #FF7700 (caution orange)
- Text Primary: #FFB000 (amber terminal text)
- Text Muted: #996600 (dim cathode amber)

## 3. Typography Invariants
- Typography: Strictly monospaced retro terminal font (JetBrains Mono / VT323)
- Style: Uppercase tracked text with prompt glyphs (\`>\`, \`$\`)

## 4. Borders, Radii & Shadows
- Corner Radius: 2px (sharp cathode frame)
- Border Stroke: 1px solid #FFB000
- Shadows: Phosphor glow bloom: 0 0 14px rgba(255, 176, 0, 0.25)

## 5. Component Styling Rules
- Terminal Window: Inset dark box with amber boundary lines and blinking cursor box.
- Data Stream: Memory hex values (e.g. 0x7FFA) with status flags in bracketed tags (\`[OK]\`).

## 6. Tailwind CSS v4 Theme
\`\`\`css
@theme {
  --color-primary: #FFB000;
  --color-secondary: #E69500;
  --color-accent: #FF7700;
  --color-background: #0C0800;
  --color-surface: #1A1202;
  --color-border: #FFB000;
  --color-text-primary: #FFB000;
  --color-text-muted: #996600;
  --radius-card: 2px;
}
\`\`\``,
    renderInteractive: ({ isPreview = false }) => (
      <div className="w-full h-full bg-[#0C0800] text-[#FFB000] p-3.5 sm:p-5 flex flex-col justify-between font-mono select-none overflow-hidden relative">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-2 border-b border-[#FFB000]/50">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xs uppercase tracking-widest">&gt; TELETYPE TERMINAL // AMBER</span>
          </div>
          <span className="text-[10px] px-1.5 py-0.5 border border-[#FFB000] bg-[#FFB000]/10 font-bold">
            BAUD: 9600
          </span>
        </div>

        {/* Terminal Body */}
        <div className="my-2 p-2.5 bg-[#1A1202] border border-[#FFB000]/40 rounded-xs space-y-1 text-xs flex-1">
          <div className="text-[11px] text-[#996600]">&gt; MEM_DUMP 0x004F: LOCK ACQUIRED</div>
          <div className="text-[11px] text-[#FFB000]">&gt; INGESTION STREAM 14.8k BAUD ... OK</div>
          <div className="text-[11px] text-[#FFB000]">&gt; HOST STATUS: ONLINE [ALL NODES]</div>
          <div className="text-[10px] text-stone-400 font-bold pt-1">
            0x7FFA42: [FF B0 00 1A 12 02 0C 08]
          </div>
        </div>

        {!isPreview && (
          <div className="pt-2 border-t border-[#FFB000]/50 flex items-center justify-between text-xs">
            <span className="text-[10px] text-[#996600]">DIAGNOSTIC RUNNER</span>
            <button className="px-3 py-1 bg-[#FFB000] text-[#0C0800] font-bold text-xs uppercase cursor-pointer">
              RUN DUMP ↵
            </button>
          </div>
        )}
      </div>
    ),
  },

  // 16. FIGMA VECTOR TOOL CANVAS HUD
  {
    id: 'figma-canvas-hud',
    title: 'Figma Vector Tool Canvas HUD',
    category: 'ai-creative',
    categoryLabel: 'AI & Creative Studio',
    tagline: 'Professional vector design canvas with floating properties inspector and toolbars',
    description: 'Pro creative tool layout inspired by Figma with neutral dark slate canvas (#1E1E1E), floating properties inspector panel (W, H, X, Y, Radius, Fill), tool dock, and zoom controls.',
    tags: ['Figma Style', 'Design Tool', 'Properties HUD', 'Vector Canvas', 'Creative'],
    palette: {
      primary: '#0D99FF',
      secondary: '#00C853',
      accent: '#F24E1E',
      background: '#1E1E1E',
      surface: '#2C2C2C',
      border: '#383838',
      text: '#FFFFFF',
      textMuted: '#B3B3B3',
      isDark: true,
    },
    style: {
      radius: '6px',
      borderWidth: '1px',
      borderStyle: 'solid',
      shadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
      density: 'compact',
    },
    typography: {
      heading: 'Inter, system-ui, sans-serif',
      body: 'Inter, system-ui, sans-serif',
      mono: 'JetBrains Mono, monospace',
    },
    accents: ['Properties Inspector (W/H/X/Y)', 'Vector Tool Dock', 'Layer Tree', 'Figma Blue Selection'],
    agentPrompt: `Apply this visual design system to the interface:

## 1. Visual Style & Philosophy
- Aesthetic: Figma Vector Tool Canvas HUD
- Mood: High-precision creative editing interface with neutral dark gray canvas and vibrant selection blue.
- Density: Compact professional HUD with multi-panel spatial split (tool dock, canvas, properties inspector).

## 2. Semantic Color Tokens
- Background: #1E1E1E (neutral tool canvas)
- Surface / Cards: #2C2C2C (elevated properties panel)
- Borders: #383838 (subtle panel boundary lines)
- Primary Accent: #0D99FF (Figma selection blue)
- Secondary Accent: #F24E1E (figma orange)
- Text Primary: #FFFFFF (crisp white)
- Text Muted: #B3B3B3 (neutral mid-gray)

## 3. Typography Invariants
- Typography: Inter with clean tabular numbers
- Numeric inputs with compact 11px font size

## 4. Borders, Radii & Shadows
- Corner Radius: 6px for inspector panels; 4px for input boxes
- Border Stroke: 1px solid #383838
- Shadows: Subtle floating shadow: 0 4px 16px rgba(0, 0, 0, 0.4)

## 5. Component Styling Rules
- Properties Panel: Two-column grid with dimension inputs (W, H, X, Y) and fill color picker swatch.
- Selection Box: Crisp 1px solid #0D99FF border with corner anchor handles.

## 6. Tailwind CSS v4 Theme
\`\`\`css
@theme {
  --color-primary: #0D99FF;
  --color-secondary: #00C853;
  --color-accent: #F24E1E;
  --color-background: #1E1E1E;
  --color-surface: #2C2C2C;
  --color-border: #383838;
  --color-text-primary: #FFFFFF;
  --color-text-muted: #B3B3B3;
  --radius-card: 6px;
}
\`\`\``,
    renderInteractive: ({ isPreview = false }) => (
      <div className="w-full h-full bg-[#1E1E1E] text-white p-3.5 sm:p-5 flex flex-col justify-between font-sans select-none overflow-hidden">
        {/* Top Tool Dock */}
        <div className="flex items-center justify-between pb-2.5 border-b border-[#383838]">
          <div className="flex items-center gap-2">
            <MousePointer className="w-4 h-4 text-[#0D99FF]" />
            <span className="text-xs font-bold">Canvas // Workspace</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-stone-400">
            <span>Zoom: 100%</span>
          </div>
        </div>

        {/* Selected Frame */}
        <div className="my-2.5 p-3 bg-[#2C2C2C] border-2 border-[#0D99FF] rounded-md shadow-md flex-1 flex flex-col justify-between relative">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-[#0D99FF]">Frame 1 [Auto Layout]</span>
            <span className="text-[10px] font-mono text-stone-400">1200 × 800</span>
          </div>
          <div className="grid grid-cols-4 gap-1.5 my-2 text-[10px] font-mono">
            <div className="p-1.5 bg-[#1E1E1E] rounded border border-[#383838]">
              <span className="text-stone-500">W: </span>1200
            </div>
            <div className="p-1.5 bg-[#1E1E1E] rounded border border-[#383838]">
              <span className="text-stone-500">H: </span>800
            </div>
            <div className="p-1.5 bg-[#1E1E1E] rounded border border-[#383838]">
              <span className="text-stone-500">X: </span>0
            </div>
            <div className="p-1.5 bg-[#1E1E1E] rounded border border-[#383838]">
              <span className="text-stone-500">Y: </span>0
            </div>
          </div>
        </div>

        {!isPreview && (
          <div className="pt-2 border-t border-[#383838] flex items-center justify-between text-xs text-stone-400">
            <span>Fill: #FFFFFF (100%)</span>
            <button className="px-3 py-1 bg-[#0D99FF] text-white font-bold text-xs rounded cursor-pointer">
              Export SVG
            </button>
          </div>
        )}
      </div>
    ),
  },

  // 17. SOLARPUNK BOTANICAL AGRITECH
  {
    id: 'solarpunk-agritech',
    title: 'Solarpunk Botanical Agritech',
    category: 'ai-creative',
    categoryLabel: 'AI & Creative Studio',
    tagline: 'Warm greenhouse sage, terra cotta clay, and organic botanical telemetry',
    description: 'Earthy agricultural telemetry interface with greenhouse soil moisture bars, solar yield kilowatt meters, soft rounded corners, and botanical color palette.',
    tags: ['Solarpunk', 'Agritech', 'Botanical', 'Greenhouse', 'Nature'],
    palette: {
      primary: '#2D6A4F',
      secondary: '#E07A5F',
      accent: '#D4A373',
      background: '#F4F1DE',
      surface: '#FFFFFF',
      border: '#B7B7A4',
      text: '#1B4332',
      textMuted: '#52796F',
      isDark: false,
    },
    style: {
      radius: '14px',
      borderWidth: '1px',
      borderStyle: 'solid',
      shadow: '0 4px 14px rgba(45, 106, 79, 0.08)',
      density: 'balanced',
    },
    typography: {
      heading: 'Inter, system-ui, sans-serif',
      body: 'Inter, system-ui, sans-serif',
      mono: 'Roboto Mono, monospace',
    },
    accents: ['Leaf Botanical Icon', 'Soil Moisture Meter', 'Solar Array Kilowatt Bar', 'Clay Accents'],
    agentPrompt: `Apply this visual design system to the interface:

## 1. Visual Style & Philosophy
- Aesthetic: Solarpunk Botanical Agritech
- Mood: Earthy greenhouse conservation canvas blending deep botanical sage with terracotta clay and clean cream substrates.
- Density: Balanced natural layout with organic curves and ecological status indicators.

## 2. Semantic Color Tokens
- Background: #F4F1DE (warm conservatory cream)
- Surface / Cards: #FFFFFF (pure white paper sheets)
- Borders: #B7B7A4 (soft soil clay hairline)
- Primary Accent: #2D6A4F (deep botanical forest green)
- Secondary Accent: #E07A5F (terracotta clay warm orange)
- Soil Accent: #D4A373 (warm earth sand)
- Text Primary: #1B4332 (deep forest green ink)
- Text Muted: #52796F (sage gray)

## 3. Typography Invariants
- Typography: Inter with organic proportions and friendly letterforms
- Badges: Rounded pill tags with subtle forest green borders

## 4. Borders, Radii & Shadows
- Corner Radius: 14px (rounded-2xl) across cards and panels
- Border Stroke: 1px solid #B7B7A4
- Shadows: Soft ambient botanical shadow: 0 4px 14px rgba(45, 106, 79, 0.08)

## 5. Component Styling Rules
- Sensor Tiles: White cards with forest green labels, large bold values, and green optimal badges.
- Environmental Meters: Segmented progress bars indicating soil moisture and solar generation.

## 6. Tailwind CSS v4 Theme
\`\`\`css
@theme {
  --color-primary: #2D6A4F;
  --color-secondary: #E07A5F;
  --color-accent: #D4A373;
  --color-background: #F4F1DE;
  --color-surface: #FFFFFF;
  --color-border: #B7B7A4;
  --color-text-primary: #1B4332;
  --color-text-muted: #52796F;
  --radius-card: 14px;
}
\`\`\``,
    renderInteractive: ({ isPreview = false }) => (
      <div className="w-full h-full bg-[#F4F1DE] text-[#1B4332] p-3.5 sm:p-5 flex flex-col justify-between font-sans select-none overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-2.5 border-b border-[#B7B7A4]">
          <div className="flex items-center gap-2">
            <Leaf className="w-4 h-4 text-[#2D6A4F]" />
            <span className="font-bold text-xs tracking-tight">Eco-Node // Sector 4</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#2D6A4F]/15 text-[#2D6A4F] font-bold">
            SOLAR GENERATING
          </span>
        </div>

        {/* Telemetry Tiles */}
        <div className="grid grid-cols-2 gap-2 my-2.5">
          <div className="p-3 bg-white rounded-xl border border-[#B7B7A4] shadow-xs">
            <span className="text-[10px] text-[#52796F] font-medium block">MOISTURE LEVEL</span>
            <span className="text-xl font-bold text-[#1B4332] mt-0.5 block">68.4%</span>
            <span className="text-[10px] text-[#2D6A4F] font-semibold">● Optimal Range</span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-[#B7B7A4] shadow-xs">
            <span className="text-[10px] text-[#52796F] font-medium block">SOLAR HARVEST</span>
            <span className="text-xl font-bold text-[#E07A5F] mt-0.5 block">4.8 kW</span>
            <span className="text-[10px] text-[#52796F]">100% Clean Energy</span>
          </div>
        </div>

        {/* Status */}
        <div className="p-2.5 bg-white border border-[#B7B7A4] rounded-xl flex items-center justify-between text-xs flex-1">
          <div className="space-y-0.5">
            <span className="font-bold text-[#1B4332] block">Irrigation Channel 2</span>
            <span className="text-[10px] text-[#52796F]">Scheduled in 45m</span>
          </div>
          <button className="px-3 py-1 bg-[#2D6A4F] text-white text-[11px] font-semibold rounded-lg cursor-pointer">
            Trigger
          </button>
        </div>

        {!isPreview && (
          <div className="pt-2.5 border-t border-[#B7B7A4] flex items-center justify-between text-xs text-[#52796F]">
            <span>Storage: 94%</span>
            <span className="font-mono text-[10px]">Agritech OS 2.4</span>
          </div>
        )}
      </div>
    ),
  },

  // 18. APOLLO CAD GUIDANCE CONSOLE
  {
    id: 'apollo-cad',
    title: 'Apollo CAD Guidance Console',
    category: 'retro',
    categoryLabel: 'Industrial & Retro',
    tagline: 'Precision blueprint cobalt with drafting crosshairs and monospaced coordinates',
    description: 'Aerospace drafting blueprint interface with corner crosshair coordinates, millimeter ruler margins, vector trajectory readouts, and zero-border-radius precision.',
    tags: ['CAD', 'Blueprint', 'Aerospace', 'Drafting', 'Precision'],
    palette: {
      primary: '#00F0FF',
      secondary: '#4895EF',
      accent: '#FFD166',
      background: '#041833',
      surface: '#082347',
      border: '#00F0FF',
      text: '#E0F4FF',
      textMuted: '#70A8DB',
      isDark: true,
    },
    style: {
      radius: '0px',
      borderWidth: '1px',
      borderStyle: 'solid',
      shadow: 'none',
      density: 'compact',
    },
    typography: {
      heading: 'JetBrains Mono, monospace',
      body: 'JetBrains Mono, monospace',
      mono: 'JetBrains Mono, monospace',
    },
    accents: ['Corner Crosshair Reticles', 'Millimeter Grid Lines', 'Tabular Trajectory Telemetry', '0px Corner Radius'],
    agentPrompt: `Apply this visual design system to the interface:

## 1. Visual Style & Philosophy
- Aesthetic: Apollo CAD Guidance Blueprint
- Mood: Architectural aerospace drafting blueprint with laser cyan line work and coordinates.
- Density: High-precision engineering layout with drafting crosshairs and tabular metrics.

## 2. Semantic Color Tokens
- Background: #041833 (deep blueprint navy)
- Surface / Cards: #082347 (drafting grid substrate)
- Borders: #00F0FF (hairline laser cyan)
- Primary Accent: #00F0FF (drafting cyan)
- Secondary Accent: #4895EF (cobalt coordinate blue)
- Highlight: #FFD166 (trajectory amber)
- Text Primary: #E0F4FF (stark cyan text)
- Text Muted: #70A8DB (subtle blue hairline)

## 3. Typography Invariants
- Typography: Strictly monospaced (JetBrains Mono / Courier)
- Coordinate formatting with latitude / longitude readouts

## 4. Borders, Radii & Shadows
- Corner Radius: Strictly 0px (sharp technical boundary)
- Border Stroke: 1px solid #00F0FF
- Shadows: None (flat engineering blueprint)

## 5. Component Styling Rules
- Crosshair Marks: Corner targeting crosshairs at [X, Y] boundaries.
- Trajectory Readouts: Strict two-column boxes with orbital velocities and burn times.

## 6. Tailwind CSS v4 Theme
\`\`\`css
@theme {
  --color-primary: #00F0FF;
  --color-secondary: #4895EF;
  --color-accent: #FFD166;
  --color-background: #041833;
  --color-surface: #082347;
  --color-border: #00F0FF;
  --color-text-primary: #E0F4FF;
  --color-text-muted: #70A8DB;
  --radius-card: 0px;
}
\`\`\``,
    renderInteractive: ({ isPreview = false }) => (
      <div className="w-full h-full bg-[#041833] text-[#E0F4FF] p-3.5 sm:p-5 flex flex-col justify-between font-mono select-none overflow-hidden relative">
        {/* Crosshair mark */}
        <div className="absolute top-2 right-3 text-[9px] text-[#00F0FF] opacity-75">
          ⊕ [X: 420.50, Y: 110.25]
        </div>

        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-[#00F0FF]">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#00F0FF]" />
            <span className="text-xs font-bold tracking-widest uppercase">GUIDANCE // LUNAR-04</span>
          </div>
        </div>

        {/* Telemetry Matrix */}
        <div className="grid grid-cols-2 gap-2 my-2.5 text-xs">
          <div className="p-2.5 bg-[#082347] border border-[#00F0FF] rounded-none">
            <span className="text-[#70A8DB] text-[10px] block">ORBITAL VELOCITY</span>
            <span className="text-base font-bold text-[#00F0FF] mt-0.5 block">7,812 m/s</span>
            <span className="text-[10px] text-stone-400">ALT: 184.2 km</span>
          </div>
          <div className="p-2.5 bg-[#082347] border border-[#00F0FF] rounded-none">
            <span className="text-[#70A8DB] text-[10px] block">BURNTIME</span>
            <span className="text-base font-bold text-[#FFD166] mt-0.5 block">T-00:14:28</span>
            <span className="text-[10px] text-stone-400">PITCH: +12.4°</span>
          </div>
        </div>

        {/* Coordinates */}
        <div className="p-2 bg-[#082347] border border-[#00F0FF] rounded-none text-[10px] space-y-1 flex-1">
          <div className="flex justify-between">
            <span className="text-[#70A8DB]">TARGET LAT/LON:</span>
            <span className="text-white font-bold">28.5721° N, 80.6480° W</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#70A8DB]">TELEMETRY BUS:</span>
            <span className="text-[#00F0FF] font-bold">CHANNEL A (LOCKED)</span>
          </div>
        </div>

        {!isPreview && (
          <div className="pt-2 border-t border-[#00F0FF] flex items-center justify-between text-xs">
            <span className="text-[10px] text-[#70A8DB]">TOL: ±0.005mm</span>
            <button className="px-3 py-1 bg-[#00F0FF] text-[#041833] font-bold text-xs uppercase rounded-none cursor-pointer hover:bg-cyan-300 transition-colors">
              CONFIRM BURN ↵
            </button>
          </div>
        )}
      </div>
    ),
  },
];
