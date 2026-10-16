import React from 'react';
import {
  Activity,
  CircleDot,
  Compass,
  CreditCard,
  Database,
  GitBranch,
  Globe,
  Leaf,
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
    tagline: 'Keyboard-first dark slate issue tracker with glowing status pills',
    description: 'High-density obsidian interface inspired by Linear with monospaced issue IDs, priority bars, cycle progress telemetry, and shortcut badges.',
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
    agentPrompt: `Build a developer issue tracker web app with Linear's signature aesthetic:
- Color Palette: Background #0E1015, Surface #161922, Border #272B38, Primary Accent #5E6AD2 (Linear Purple), Accent Orange #F2994A for urgent items.
- Typography: Inter for UI text, JetBrains Mono for issue identifiers (e.g. ENG-402, FE-189).
- Layout: High data density with minimal wasted vertical padding (padding 8px-12px per row).
- Borders: Crisp 1px solid #272B38, 8px rounded corners, subtle dark elevation shadows.
- Key Elements: Search command bar with '⌘K' shortcut tag, cycle progress meter, issue rows with priority icons (High, Medium, Low), status badges (In Progress, In Review, Done), and avatar circles.`,
    tailwindTokens: `@theme {
  --color-primary: #5E6AD2;
  --color-secondary: #4E5BA6;
  --color-accent: #F2994A;
  --color-background: #0E1015;
  --color-surface: #161922;
  --color-border: #272B38;
  --color-text-primary: #F3F4F6;
  --color-text-muted: #8B949E;
  --radius-card: 8px;
}`,
    renderInteractive: ({ isPreview = false }) => (
      <div className="w-full h-full bg-[#0E1015] text-[#F3F4F6] p-3.5 sm:p-5 flex flex-col justify-between font-sans select-none overflow-hidden">
        {/* Top Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-[#272B38]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#5E6AD2] flex items-center justify-center text-white text-xs font-bold">
              L
            </div>
            <span className="text-xs font-bold tracking-tight">Cycle 42 • Core Engine</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#5E6AD2]/20 text-[#5E6AD2] font-semibold border border-[#5E6AD2]/30">
              ACTIVE
            </span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-[#8B949E] font-mono">
            <span className="hidden sm:inline">24 / 30 Issues</span>
            <div className="px-1.5 py-0.5 rounded bg-[#272B38] text-stone-300 border border-stone-700">⌘K</div>
          </div>
        </div>

        {/* Sprint Progress Bar */}
        <div className="my-3 space-y-1">
          <div className="flex justify-between text-[10px] font-mono text-[#8B949E]">
            <span>SPRINT COMPLETION</span>
            <span className="text-[#5E6AD2] font-bold">80%</span>
          </div>
          <div className="w-full h-1.5 bg-[#1F232E] rounded-full overflow-hidden">
            <div className="h-full bg-[#5E6AD2] rounded-full" style={{ width: '80%' }} />
          </div>
        </div>

        {/* Issue Rows */}
        <div className="space-y-1.5 flex-1">
          {[
            { id: 'ENG-402', title: 'Synthesize token pipeline with Tailwind v4', tag: 'In Progress', tagCol: '#5E6AD2', prio: 'High' },
            { id: 'FE-189', title: 'Implement 1-click clipboard image export', tag: 'Done', tagCol: '#10B981', prio: 'Urgent' },
            { id: 'ENG-405', title: 'Edge worker latency optimization', tag: 'In Review', tagCol: '#F2994A', prio: 'Med' },
          ].map((issue, idx) => (
            <div
              key={idx}
              className="p-2 sm:p-2.5 rounded-lg bg-[#161922] border border-[#272B38] hover:border-[#5E6AD2]/50 transition-all flex items-center justify-between gap-2"
            >
              <div className="flex items-center gap-2 min-w-0">
                <CircleDot className="w-3.5 h-3.5 text-[#5E6AD2] flex-shrink-0" />
                <span className="text-[11px] font-mono text-[#8B949E] flex-shrink-0">{issue.id}</span>
                <span className="text-xs font-medium text-stone-200 truncate">{issue.title}</span>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span
                  className="px-1.5 py-0.5 rounded text-[10px] font-mono font-medium"
                  style={{ backgroundColor: `${issue.tagCol}20`, color: issue.tagCol }}
                >
                  {issue.tag}
                </span>
                <div className="w-4 h-4 rounded-full bg-stone-700 flex items-center justify-center text-[9px] font-bold">
                  H
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        {!isPreview && (
          <div className="pt-3 border-t border-[#272B38] flex items-center justify-between text-xs">
            <span className="text-[#8B949E] text-[11px]">Press <strong className="text-stone-300">C</strong> to create issue</span>
            <button className="px-3 py-1 bg-[#5E6AD2] hover:bg-[#4E5BA6] text-white rounded-md text-xs font-medium cursor-pointer transition-colors">
              + New Issue
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
    categoryLabel: 'Fintech & SaaS',
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
    agentPrompt: `Build a clean financial billing SaaS dashboard with Stripe's signature aesthetic:
- Color Palette: Background #F6F9FC, Cards #FFFFFF, Primary Accent #635BFF (Stripe Blurple), Deep Navy Text #0A2540, Growth Green #00D924, Subtle Borders #E3E8EE.
- Typography: Inter with clean font weights (600 bold for numerals, 400 for subtext).
- Layout: Balanced multi-card grid. Top MRR and Net Volume KPI tiles with positive growth delta pills.
- Components: Customer transaction table showing customer name, amount in bold, timestamp, payment method icon (Visa/Mastercard), and status pill 'Succeeded'.
- Elevation: Clean white cards with 1px border #E3E8EE and soft diffused shadow (0 2px 8px rgba(0,0,0,0.04)).`,
    tailwindTokens: `@theme {
  --color-primary: #635BFF;
  --color-secondary: #0A2540;
  --color-accent: #00D924;
  --color-background: #F6F9FC;
  --color-surface: #FFFFFF;
  --color-border: #E3E8EE;
  --color-text-primary: #0A2540;
  --color-text-muted: #687385;
  --radius-card: 10px;
}`,
    renderInteractive: ({ isPreview = false }) => (
      <div className="w-full h-full bg-[#F6F9FC] text-[#0A2540] p-3.5 sm:p-5 flex flex-col justify-between font-sans select-none overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#E3E8EE]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#635BFF] flex items-center justify-center text-white text-xs font-bold">
              $
            </div>
            <span className="text-xs font-bold text-[#0A2540]">Payments • Live Mode</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
            ● All Systems Operational
          </span>
        </div>

        {/* Metric Cards Row */}
        <div className="grid grid-cols-2 gap-2.5 my-3">
          <div className="p-3 bg-white rounded-xl border border-[#E3E8EE] shadow-xs">
            <span className="text-[11px] text-[#687385] font-medium block">Monthly Recurring (MRR)</span>
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-[#0A2540] mt-1">
              $48,290.00
            </div>
            <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 mt-1">
              <TrendingUp className="w-3 h-3" />
              <span>+18.4% vs last month</span>
            </div>
          </div>

          <div className="p-3 bg-white rounded-xl border border-[#E3E8EE] shadow-xs">
            <span className="text-[11px] text-[#687385] font-medium block">Net Volume (30D)</span>
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
            Recent Payments
          </span>
          {[
            { customer: 'Acme Corporation', amount: '$2,400.00', method: 'Visa •••• 4242', time: '4m ago' },
            { customer: 'Supabase Cloud Inc', amount: '$499.00', method: 'MC •••• 8821', time: '18m ago' },
            { customer: 'Vercel Deployment Plan', amount: '$120.00', method: 'Amex •••• 1004', time: '1h ago' },
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
            <span>Next automatic payout: Tomorrow, 9:00 AM</span>
            <button className="px-3 py-1 bg-[#635BFF] hover:bg-[#5249DE] text-white rounded-lg text-xs font-semibold cursor-pointer">
              Export Transactions
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
    agentPrompt: `Build a serverless cloud infrastructure dashboard with Vercel's signature aesthetic:
- Color Palette: Pure Black #000000, Card Surface #0A0A0A, Hairline Borders #222222, Primary Neon Cyan #0070F3, Text #EDEDED, Muted #888888.
- Typography: Geist Sans for UI text, Geist Mono for deployment IDs and git commits.
- Layout: Monochromatic minimal grid. Project title with deployment readiness badge.
- Key Elements: Active git branch tag 'main (7a8f1b)', deployment status 'Ready (18s ago)', Edge function metrics (Latency: 14ms, Cold start: 0ms, Region: iad1 Washington D.C.), and domain URL links.`,
    tailwindTokens: `@theme {
  --color-primary: #0070F3;
  --color-secondary: #50E3C2;
  --color-accent: #FF0080;
  --color-background: #000000;
  --color-surface: #0A0A0A;
  --color-border: #222222;
  --color-text-primary: #EDEDED;
  --color-text-muted: #888888;
  --radius-card: 6px;
}`,
    renderInteractive: ({ isPreview = false }) => (
      <div className="w-full h-full bg-[#000000] text-[#EDEDED] p-3.5 sm:p-5 flex flex-col justify-between font-mono select-none overflow-hidden">
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between pb-3 border-b border-[#222222]">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-white text-black flex items-center justify-center font-black text-[10px] rounded-xs">
              ▲
            </div>
            <span className="text-xs font-bold tracking-tight text-white">archetype / production</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-[#50E3C2] bg-[#50E3C2]/10 border border-[#50E3C2]/30 px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#50E3C2] animate-pulse" />
            <span>Ready</span>
          </div>
        </div>

        {/* Deployment Spec Box */}
        <div className="my-3 p-3 bg-[#0A0A0A] border border-[#222222] rounded-md space-y-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-stone-200">
              <GitBranch className="w-3.5 h-3.5 text-[#0070F3]" />
              <span className="font-bold">main (7a8f1b)</span>
            </div>
            <span className="text-[10px] text-[#888888]">Deployed 14s ago by @hendry</span>
          </div>
          <div className="text-[11px] text-[#888888] font-sans truncate">
            feat: implement 1-click Dribbble/Figma style web app specimen gallery
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
              archetype.app
            </span>
            <button className="px-3 py-1 bg-white hover:bg-stone-200 text-black font-bold text-xs rounded cursor-pointer transition-colors">
              Visit Site
            </button>
          </div>
        )}
      </div>
    ),
  },

  // 4. RETOOL / SCADA OPERATIONS DESK
  {
    id: 'retool-scada',
    title: 'Retool SCADA Operations',
    category: 'dark',
    categoryLabel: 'Dark & Terminal',
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
    agentPrompt: `Build an industrial SCADA telemetry terminal web app:
- Color Palette: Reactor Black #070C09, Terminal Surface #0E1712, Luminous Phosphor Green #00FF66, Warning Amber #FFB000.
- Typography: JetBrains Mono across all headers and labels with uppercase tracking.
- Borders: 1px solid #00FF66 with subtle neon glow (0 0 12px rgba(0,255,102,0.2)), 4px sharp corners.
- Components: Top system status bar (TEMP: 41.8°C, INGEST: 48k/s), dense 3-row system event bus log table, live potentiometer power slider with kilowatt readout, and master HALT/OVERRIDE trigger button.`,
    tailwindTokens: `@theme {
  --color-primary: #00FF66;
  --color-secondary: #00D9A6;
  --color-accent: #FFB000;
  --color-background: #070C09;
  --color-surface: #0E1712;
  --color-border: #00FF66;
  --color-text-primary: #00FF88;
  --color-text-muted: #4F8F68;
  --radius-card: 4px;
}`,
    renderInteractive: ({ isPreview = false }) => (
      <div className="w-full h-full bg-[#070C09] text-[#00FF88] p-3.5 sm:p-5 flex flex-col justify-between font-mono select-none overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-2 border-b border-[#00FF66]/40">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-[#00FF66] animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase">SCADA SYS-NODE // 09</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-[#00FF66]/20 text-[#00FF66] font-bold border border-[#00FF66]/40">
            TELEMETRY: STABLE
          </span>
        </div>

        {/* Telemetry Matrix Strip */}
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
    agentPrompt: `Build a Postgres database console web app inspired by Supabase Studio:
- Color Palette: Dark Charcoal #121212, Surface #1E1E1E, Border #2E2E2E, Primary Emerald #3ECF8E, Text #E0E0E0, Muted #808080.
- Typography: Inter for table metadata, JetBrains Mono for SQL query code and table columns.
- Components: Top SQL query runner input 'SELECT * FROM public.users ORDER BY created_at DESC', RLS Enabled badge, and a tabular grid showing columns (id, email, plan, status, created_at).`,
    tailwindTokens: `@theme {
  --color-primary: #3ECF8E;
  --color-secondary: #24B47E;
  --color-accent: #F4A261;
  --color-background: #121212;
  --color-surface: #1E1E1E;
  --color-border: #2E2E2E;
  --color-text-primary: #E0E0E0;
  --color-text-muted: #808080;
  --radius-card: 8px;
}`,
    renderInteractive: ({ isPreview = false }) => (
      <div className="w-full h-full bg-[#121212] text-[#E0E0E0] p-3.5 sm:p-5 flex flex-col justify-between font-sans select-none overflow-hidden">
        {/* Top SQL Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-[#2E2E2E]">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-[#3ECF8E]" />
            <span className="text-xs font-bold text-white font-mono">public.users</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#3ECF8E]/20 text-[#3ECF8E] font-bold border border-[#3ECF8E]/30">
              RLS Enabled
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#808080]">1,420 rows • 12ms</span>
        </div>

        {/* SQL Command Runner Strip */}
        <div className="my-2.5 p-2 bg-[#1E1E1E] rounded-md border border-[#2E2E2E] flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 truncate">
            <span className="text-[#3ECF8E] font-bold">SQL&gt;</span>
            <span className="text-stone-300 truncate">SELECT id, email, role FROM users LIMIT 3;</span>
          </div>
          <button className="px-2 py-0.5 bg-[#3ECF8E] text-[#121212] font-bold rounded text-[10px] flex-shrink-0 cursor-pointer">
            Run ↵
          </button>
        </div>

        {/* Tabular Database Records */}
        <div className="border border-[#2E2E2E] rounded-md overflow-hidden bg-[#1E1E1E] flex-1 text-[11px] font-mono">
          <div className="grid grid-cols-4 p-2 bg-[#252525] border-b border-[#2E2E2E] text-[10px] font-bold text-[#808080]">
            <span>ID (UUID)</span>
            <span>EMAIL</span>
            <span>ROLE</span>
            <span className="text-right">STATUS</span>
          </div>
          <div className="divide-y divide-[#2E2E2E]">
            {[
              { id: 'usr_81a', email: 'hendry@archetype.io', role: 'admin', stat: 'active' },
              { id: 'usr_94b', email: 'alex@deepmind.com', role: 'member', stat: 'active' },
              { id: 'usr_23c', email: 'sarah@stripe.com', role: 'viewer', stat: 'pending' },
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
            <span>Schema: public (PostgreSQL 16)</span>
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
    categoryLabel: 'Minimalist & Clean',
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
    agentPrompt: `Build a clean document wiki and team knowledge base web app with Notion's signature aesthetic:
- Color Palette: Warm Paper White #FAFAF9, Surface Cards #FFFFFF, Stone Border #E7E5E4, Primary Blue #2383E2, Charcoal Text #1C1917.
- Typography: Serif headlines (Playfair Display / Georgia) paired with clean sans-serif body copy (Inter).
- Layout: Generous breathing room and negative space.
- Components: Document breadcrumb trail 'Engineering / Architecture / Core Invariants', callout block with lightbulb icon and warm background, checklist items with custom check states, and page icon badge.`,
    tailwindTokens: `@theme {
  --color-primary: #2383E2;
  --color-secondary: #E8DEEE;
  --color-accent: #EB5757;
  --color-background: #FAFAF9;
  --color-surface: #FFFFFF;
  --color-border: #E7E5E4;
  --color-text-primary: #1C1917;
  --color-text-muted: #78716C;
  --radius-card: 8px;
}`,
    renderInteractive: ({ isPreview = false }) => (
      <div className="w-full h-full bg-[#FAFAF9] text-[#1C1917] p-3.5 sm:p-5 flex flex-col justify-between font-sans select-none overflow-hidden">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-1.5 text-xs text-[#78716C] pb-2 border-b border-[#E7E5E4]">
          <span>Archetype</span>
          <span>/</span>
          <span>Specifications</span>
          <span>/</span>
          <span className="font-semibold text-stone-900">Architecture.md</span>
        </div>

        {/* Title */}
        <div className="my-2 space-y-1">
          <div className="text-xl sm:text-2xl font-serif font-bold text-stone-900 tracking-tight">
            System Design Specification
          </div>
          <p className="text-xs text-[#78716C]">
            Curated visual invariants and component contracts for AI coding agents.
          </p>
        </div>

        {/* Notion Callout Box */}
        <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-lg flex items-start gap-2.5 text-xs text-amber-950">
          <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="block font-semibold">Core Architectural Principle</strong>
            <span>Zero unstyled flash. All design tokens resolve directly from CSS variables.</span>
          </div>
        </div>

        {/* Checklist */}
        <div className="space-y-1.5 my-2 flex-1 text-xs">
          {[
            { label: 'Export 1-click clipboard PNG image', checked: true },
            { label: 'Support direct Cursor & Claude agent prompt copying', checked: true },
            { label: 'Verify WCAG AAA contrast ratio on all surface colors', checked: false },
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
            <span>Last edited 2h ago by Hendry</span>
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
    category: 'creative',
    categoryLabel: 'Neo-Brutal & Creative',
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
    agentPrompt: `Build a bold Neo-Brutalist web app for creators with signature physical boundaries:
- Color Palette: Pale Ivory Background #FFFDF0, Canary Yellow #FFE600, Hot Pink #FF5C8D, Solid Black #000000 for all borders and text.
- Borders & Shadows: Strictly 3px solid black borders (#000000) on all cards, inputs, and buttons. ZERO blurry drop shadows — strictly use 4px 4px 0px #000000 directional offset block shadows.
- Typography: Space Grotesk in uppercase bold for headers.
- Components: Sticker badges ('TOP 1%', 'VERIFIED'), chunky interactive CTA buttons that press down on active click, and high-impact metric cards.`,
    tailwindTokens: `@theme {
  --color-primary: #FFE600;
  --color-secondary: #FF5C8D;
  --color-accent: #00F0FF;
  --color-background: #FFFDF0;
  --color-surface: #FFFFFF;
  --color-border: #000000;
  --color-text-primary: #000000;
  --color-text-muted: #555555;
  --radius-card: 6px;
}`,
    renderInteractive: ({ isPreview = false }) => (
      <div className="w-full h-full bg-[#FFFDF0] text-black p-3.5 sm:p-5 flex flex-col justify-between font-sans select-none overflow-hidden">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-2.5 border-b-2 border-black">
          <div className="flex items-center gap-2">
            <div className="px-2 py-0.5 bg-[#FFE600] border-2 border-black font-black text-xs uppercase shadow-[2px_2px_0px_#000]">
              POP!
            </div>
            <span className="font-black text-sm tracking-tight uppercase">CREATOR STUDIO</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 bg-[#FF5C8D] text-white font-black border-2 border-black uppercase shadow-[2px_2px_0px_#000]">
            TOP 1% CREATOR
          </span>
        </div>

        {/* Metric Card */}
        <div className="my-2.5 p-3.5 bg-white border-3 border-black shadow-[4px_4px_0px_#000] rounded-md space-y-1">
          <div className="flex justify-between items-center text-xs font-mono font-bold">
            <span>TOTAL AUDIENCE</span>
            <span className="bg-[#00F0FF] px-1.5 py-0.5 border border-black text-[10px]">LIVE FEED</span>
          </div>
          <div className="text-3xl font-black tracking-tight">148,920</div>
          <div className="text-xs font-bold text-[#FF5C8D]">+24.5% THIS WEEK 🔥</div>
        </div>

        {/* Action Controls */}
        <div className="grid grid-cols-2 gap-2 flex-1">
          <div className="p-2.5 bg-[#FFE600] border-2 border-black shadow-[3px_3px_0px_#000] rounded flex flex-col justify-between">
            <span className="text-[10px] font-mono font-bold uppercase">PAYOUT QUEUE</span>
            <span className="text-lg font-black">$4,280</span>
          </div>
          <div className="p-2.5 bg-[#00F0FF] border-2 border-black shadow-[3px_3px_0px_#000] rounded flex flex-col justify-between">
            <span className="text-[10px] font-mono font-bold uppercase">CONVERSIONS</span>
            <span className="text-lg font-black">12.4%</span>
          </div>
        </div>

        {!isPreview && (
          <div className="pt-3 border-t-2 border-black flex items-center justify-between">
            <span className="text-xs font-mono font-bold">READY TO DEPLOY</span>
            <button className="px-4 py-2 bg-[#FFE600] hover:bg-yellow-400 font-black text-xs uppercase border-2 border-black shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000] cursor-pointer transition-all">
              LAUNCH DROP 🚀
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
    agentPrompt: `Build a keyboard-driven command palette HUD web app inspired by Raycast:
- Color Palette: Dark Zinc Background #18181B, Command Tile Surface #27272A, Border #3F3F46, Violet Accent #A855F7, Crisp White Text #FAFAFA.
- Typography: Inter with high legibility, monospaced keyboard shortcuts.
- Layout: Centered spotlight input with search icon and placeholder 'Search commands or apps...'.
- Components: Action list items with category icons, selection highlight state, shortcut indicator tags (↵ Select, ⌘K Actions, Tab Expand), and bottom telemetry strip (RAM usage, CPU load).`,
    tailwindTokens: `@theme {
  --color-primary: #A855F7;
  --color-secondary: #EC4899;
  --color-accent: #3B82F6;
  --color-background: #18181B;
  --color-surface: #27272A;
  --color-border: #3F3F46;
  --color-text-primary: #FAFAFA;
  --color-text-muted: #A1A1AA;
  --radius-card: 12px;
}`,
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
            { title: 'Open Specimen Workspace', cat: 'Navigation', icon: Compass, sel: true },
            { title: 'Restart Edge Serverless Node', cat: 'DevOps', icon: Terminal, sel: false },
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
    categoryLabel: 'Minimalist & Clean',
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
    agentPrompt: `Build a publishing CMS web app in the Swiss International Typographic Style:
- Color Palette: Stark White #FFFFFF, Pure Black #111111, Signature Zurich Red #FF2D20 as the sole intentional focal color pop, Hairline Gray Borders #E5E5E5.
- Typography: Bold grotesque uppercase headlines with tight tracking; hairline 1px dividers between layout columns.
- Corner Radius: Strictly 0px (sharp edges across all cards, inputs, and buttons). Zero drop shadows (pure flat design).
- Layout: Asymmetric 2-column editorial structure with publication state badges (DRAFT, IN REVIEW, PUBLISHED), word count telemetry, and author metadata.`,
    tailwindTokens: `@theme {
  --color-primary: #FF2D20;
  --color-secondary: #000000;
  --color-accent: #2B2B2B;
  --color-background: #FFFFFF;
  --color-surface: #FBFBFB;
  --color-border: #E5E5E5;
  --color-text-primary: #111111;
  --color-text-muted: #666666;
  --radius-card: 0px;
}`,
    renderInteractive: ({ isPreview = false }) => (
      <div className="w-full h-full bg-white text-black p-3.5 sm:p-5 flex flex-col justify-between font-sans select-none overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-black">
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 bg-[#FF2D20]" />
            <span className="text-xs font-black tracking-widest uppercase font-mono">
              ZÜRICH PUBLISHING // 2026
            </span>
          </div>
          <span className="text-[10px] font-mono uppercase font-bold text-[#FF2D20]">
            EDITION 08
          </span>
        </div>

        {/* Editorial Article Showcase */}
        <div className="my-2 space-y-1.5">
          <div className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">
            FEATURED DISPATCH
          </div>
          <div className="text-xl sm:text-2xl font-black uppercase tracking-tight leading-tight">
            FORM STRICTLY FOLLOWS SYSTEM SPECIFICATION
          </div>
          <p className="text-xs text-stone-600 leading-snug">
            International graphic consistency adhering to mathematical 8pt baseline grids.
          </p>
        </div>

        {/* Article Metrics Table */}
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
    categoryLabel: 'Fintech & SaaS',
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
    agentPrompt: `Build a high-frequency financial trading exchange web app:
- Color Palette: Deep Midnight #0B0E14, Surface #151924, Border #222838, Buy/Bid Green #0ECB81, Sell/Ask Red #F6465D, Amber #F0B90B.
- Typography: Monospaced numbers (JetBrains Mono) with tabular alignment.
- Layout: High data density financial order book with split green bid orders vs red ask orders.
- Components: BTC/USDT live ticker with +4.8% delta, depth ladder visualization bars, leverage slider pill (20x), and dual BUY (Green) / SELL (Red) instant execution buttons.`,
    tailwindTokens: `@theme {
  --color-primary: #0ECB81;
  --color-secondary: #F6465D;
  --color-accent: #F0B90B;
  --color-background: #0B0E14;
  --color-surface: #151924;
  --color-border: #222838;
  --color-text-primary: #EAECEF;
  --color-text-muted: #848E9C;
  --radius-card: 6px;
}`,
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

  // 11. SOLARPUNK BOTANICAL AGRITECH
  {
    id: 'solarpunk-agritech',
    title: 'Solarpunk Botanical Agritech',
    category: 'creative',
    categoryLabel: 'Neo-Brutal & Creative',
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
    agentPrompt: `Build a Solarpunk Agritech greenhouse monitoring web app:
- Color Palette: Warm Conservatory Cream #F4F1DE, Pure White Surface #FFFFFF, Deep Botanical Forest Green #2D6A4F, Terracotta Clay #E07A5F, Soil Earth #D4A373.
- Typography: Inter with friendly proportions and soft rounded badges.
- Borders: 1px soft earthy border #B7B7A4 with 14px rounded corners.
- Components: Greenhouse telemetry tiles (Soil Moisture: 68% Optimal, Solar Array Output: 4.8 kW, Ambient Temp: 23.4°C), and automated irrigation valve toggle switches.`,
    tailwindTokens: `@theme {
  --color-primary: #2D6A4F;
  --color-secondary: #E07A5F;
  --color-accent: #D4A373;
  --color-background: #F4F1DE;
  --color-surface: #FFFFFF;
  --color-border: #B7B7A4;
  --color-text-primary: #1B4332;
  --color-text-muted: #52796F;
  --radius-card: 14px;
}`,
    renderInteractive: ({ isPreview = false }) => (
      <div className="w-full h-full bg-[#F4F1DE] text-[#1B4332] p-3.5 sm:p-5 flex flex-col justify-between font-sans select-none overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-2.5 border-b border-[#B7B7A4]">
          <div className="flex items-center gap-2">
            <Leaf className="w-4 h-4 text-[#2D6A4F]" />
            <span className="font-bold text-xs tracking-tight">Greenhouse Alpha // Sector 4</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#2D6A4F]/15 text-[#2D6A4F] font-bold">
            SOLAR GENERATING
          </span>
        </div>

        {/* Telemetry Tiles */}
        <div className="grid grid-cols-2 gap-2 my-2.5">
          <div className="p-3 bg-white rounded-xl border border-[#B7B7A4] shadow-xs">
            <span className="text-[10px] text-[#52796F] font-medium block">SOIL MOISTURE</span>
            <span className="text-xl font-bold text-[#1B4332] mt-0.5 block">68.4%</span>
            <span className="text-[10px] text-[#2D6A4F] font-semibold">● Optimal Range</span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-[#B7B7A4] shadow-xs">
            <span className="text-[10px] text-[#52796F] font-medium block">SOLAR HARVEST</span>
            <span className="text-xl font-bold text-[#E07A5F] mt-0.5 block">4.8 kW</span>
            <span className="text-[10px] text-[#52796F]">100% Clean Energy</span>
          </div>
        </div>

        {/* Irrigation Status */}
        <div className="p-2.5 bg-white border border-[#B7B7A4] rounded-xl flex items-center justify-between text-xs flex-1">
          <div className="space-y-0.5">
            <span className="font-bold text-[#1B4332] block">Drip Irrigation Zone 2</span>
            <span className="text-[10px] text-[#52796F]">Next cycle scheduled in 45m</span>
          </div>
          <button className="px-3 py-1 bg-[#2D6A4F] text-white text-[11px] font-semibold rounded-lg cursor-pointer">
            Trigger Drip
          </button>
        </div>

        {!isPreview && (
          <div className="pt-2.5 border-t border-[#B7B7A4] flex items-center justify-between text-xs text-[#52796F]">
            <span>Battery Storage: 94%</span>
            <span className="font-mono text-[10px]">Agritech OS 2.4</span>
          </div>
        )}
      </div>
    ),
  },

  // 12. APOLLO CAD GUIDANCE CONSOLE
  {
    id: 'apollo-cad',
    title: 'Apollo CAD Guidance Console',
    category: 'dark',
    categoryLabel: 'Dark & Terminal',
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
    agentPrompt: `Build an aerospace CAD guidance blueprint web app:
- Color Palette: Blueprint Navy #041833, Blueprint Surface #082347, Laser Cyan Hairline #00F0FF, Luminous Pale Cyan Text #E0F4FF.
- Typography: JetBrains Mono across all elements with coordinate formatting (e.g. LAT 28.5721° N, LON 80.6480° W).
- Borders & Accents: Strictly 1px solid #00F0FF hairline borders with 0px corner radius. Drafting crosshair marks at corners [X: 420.50, Y: 110.25].
- Components: Trajectory pitch/roll readouts, burn telemetry timer (T-00:14:28), and orbital insertion parameters.`,
    tailwindTokens: `@theme {
  --color-primary: #00F0FF;
  --color-secondary: #4895EF;
  --color-accent: #FFD166;
  --color-background: #041833;
  --color-surface: #082347;
  --color-border: #00F0FF;
  --color-text-primary: #E0F4FF;
  --color-text-muted: #70A8DB;
  --radius-card: 0px;
}`,
    renderInteractive: ({ isPreview = false }) => (
      <div className="w-full h-full bg-[#041833] text-[#E0F4FF] p-3.5 sm:p-5 flex flex-col justify-between font-mono select-none overflow-hidden relative">
        {/* Crosshair coordinate mark */}
        <div className="absolute top-2 right-3 text-[9px] text-[#00F0FF] opacity-75">
          ⊕ [X: 420.50, Y: 110.25]
        </div>

        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-[#00F0FF]">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#00F0FF]" />
            <span className="text-xs font-bold tracking-widest uppercase">APOLLO GUIDANCE // LUNAR-04</span>
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
            <span className="text-[#70A8DB] text-[10px] block">BURNTIME TO APOGEE</span>
            <span className="text-base font-bold text-[#FFD166] mt-0.5 block">T-00:14:28</span>
            <span className="text-[10px] text-stone-400">PITCH: +12.4°</span>
          </div>
        </div>

        {/* Coordinates readout */}
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
            <span className="text-[10px] text-[#70A8DB]">DRAFTING TOL: ±0.005mm</span>
            <button className="px-3 py-1 bg-[#00F0FF] text-[#041833] font-bold text-xs uppercase rounded-none cursor-pointer hover:bg-cyan-300 transition-colors">
              CONFIRM BURN ↵
            </button>
          </div>
        )}
      </div>
    ),
  },
];
