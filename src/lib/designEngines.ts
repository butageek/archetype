import type * as React from 'react';
import type { DesignPartsSelection } from '../types/designParts';

export type DesignEngineId =
  | 'frosted-glass'
  | 'claymorphism'
  | 'neumorphism'
  | 'win95'
  | 'bauhaus'
  | 'modern-saas';

export interface EngineItemTextStyles {
  titleColor: string;
  metaColor: string;
  checkColor: string;
}

export interface EngineStyles {
  id: DesignEngineId;

  // Main Card & Panels
  card: React.CSSProperties;
  cardClassName: string;
  subCard: React.CSSProperties;
  subCardClassName: string;

  // Search / Input Control
  inputOuter: React.CSSProperties;
  inputOuterClassName: string;
  inputInner: React.CSSProperties;
  inputInnerClassName: string;
  inputTextColor: string;
  inputPlaceholderColor: string;

  // Primary & Secondary Action Buttons
  primaryButton: React.CSSProperties;
  primaryButtonClassName: string;
  secondaryButton: React.CSSProperties;
  secondaryButtonClassName: string;

  // Toggle Switch
  toggleTrack: (active: boolean) => React.CSSProperties;
  toggleTrackClassName: (active: boolean) => string;
  toggleThumb: (active: boolean) => React.CSSProperties;
  toggleThumbClassName: (active: boolean) => string;

  // Select / Dropdown Control
  selectTrigger: (open: boolean) => React.CSSProperties;
  selectTriggerClassName: (open: boolean) => string;
  selectMenu: React.CSSProperties;
  selectMenuClassName: string;
  selectItem: (selected: boolean) => React.CSSProperties;
  selectItemClassName: (selected: boolean) => string;
  selectItemText: (selected: boolean) => EngineItemTextStyles;

  // Checkbox Control
  checkboxItem: (checked: boolean) => React.CSSProperties;
  checkboxBox: (checked: boolean) => React.CSSProperties;
  checkboxBoxClassName: (checked: boolean) => string;

  // Radio Option Control
  radioOption: (selected: boolean) => React.CSSProperties;
  radioOptionTextColor: (selected: boolean) => string;

  // Potentiometer Slider
  sliderTrough?: React.CSSProperties;
  sliderAccentColor: string;

  // Tab Navigation Indicator
  tabPill: (active: boolean) => React.CSSProperties;
  tabTextColor: (active: boolean) => string;
}

export interface DesignEngine {
  id: DesignEngineId;
  name: string;
  description: string;
  getStyles: (selection: DesignPartsSelection) => EngineStyles;
  getBlueprints: (selection: DesignPartsSelection) => string;
}

/**
 * Resolves which design engine governs the active selection.
 */
export function resolveDesignEngineId(selection: DesignPartsSelection): DesignEngineId {
  const { palette, surface, components } = selection;

  if (
    surface.id === 'milky-frosted-glass' ||
    palette.id === 'opal-milk-glass' ||
    components.id === 'milky-glass-pills'
  ) {
    return 'frosted-glass';
  }

  if (
    surface.id === 'claymorphism-3d' ||
    palette.id === 'clay-matte-ceramic' ||
    components.id === 'clay-puffy-buttons'
  ) {
    return 'claymorphism';
  }

  if (
    surface.id === 'neumorphic-soft' ||
    palette.id === 'neumorphic-periwinkle' ||
    components.id === 'neumorphic-soft-controls'
  ) {
    return 'neumorphism';
  }

  if (surface.id === 'win95-classic-bezel' || palette.id === 'win95-classic') {
    return 'win95';
  }

  if (palette.id === 'bauhaus-primary') {
    return 'bauhaus';
  }

  return 'modern-saas';
}

// ============================================================================
// 1. FROSTED GLASS ENGINE (Apple visionOS Opal Milk Glass & Acrylic)
// ============================================================================
const frostedGlassEngine: DesignEngine = {
  id: 'frosted-glass',
  name: 'Opal Frosted Milk Glass Engine',
  description: 'Translucent white milk glass acrylic with dual-tier specular highlight rims and debossed slate sockets.',
  getStyles: (selection) => {
    const { palette, font } = selection;
    return {
      id: 'frosted-glass',
      card: {
        backgroundColor: 'rgba(255, 255, 255, 0.72)',
        backdropFilter: 'blur(32px) saturate(200%)',
        borderColor: 'rgba(255, 255, 255, 0.95)',
        borderWidth: '1px',
        borderRadius: '24px',
        boxShadow: '0 20px 48px rgba(100, 115, 145, 0.12), inset 0 1.5px 2px #FFFFFF',
        fontFamily: font.fontFamily,
      },
      cardClassName: 'backdrop-blur-2xl border transition-all',
      subCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.65)',
        backdropFilter: 'blur(20px)',
        borderColor: 'rgba(255, 255, 255, 0.95)',
        borderWidth: '1px',
        borderRadius: '16px',
        boxShadow: '0 8px 24px rgba(100, 115, 145, 0.08), inset 0 1.5px 2px #FFFFFF',
      },
      subCardClassName: 'border backdrop-blur-xl transition-all',

      inputOuter: {
        borderRadius: '9999px',
      },
      inputOuterClassName: 'w-full',
      inputInner: {
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        backdropFilter: 'blur(16px)',
        borderColor: 'rgba(255, 255, 255, 0.95)',
        borderWidth: '1px',
        borderRadius: '9999px',
        boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04), inset 0 1px 1px #FFFFFF',
        color: '#0F172A',
      },
      inputInnerClassName: 'w-full h-10 px-3.5 flex items-center gap-2 border',
      inputTextColor: '#0F172A',
      inputPlaceholderColor: '#64748B',

      primaryButton: {
        background: 'linear-gradient(135deg, #0284C7 0%, #0369A1 100%)',
        color: '#FFFFFF',
        borderRadius: '9999px',
        boxShadow: '0 8px 20px rgba(2, 132, 199, 0.35), inset 0 1px 1.5px rgba(255, 255, 255, 0.7)',
        border: '1px solid rgba(56, 189, 248, 0.4)',
      },
      primaryButtonClassName: 'h-9 px-4 rounded-full font-semibold text-xs inline-flex items-center justify-center gap-1.5 whitespace-nowrap transition-all active:scale-95 cursor-pointer',
      secondaryButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(16px)',
        color: '#0F172A',
        borderRadius: '9999px',
        borderColor: 'rgba(255, 255, 255, 0.95)',
        borderWidth: '1px',
        boxShadow: '0 4px 14px rgba(15, 23, 42, 0.06), inset 0 1px 1px #FFFFFF',
      },
      secondaryButtonClassName: 'h-9 px-4 rounded-full font-semibold text-xs inline-flex items-center justify-center gap-1.5 whitespace-nowrap transition-all active:scale-95 cursor-pointer border hover:bg-white',

      toggleTrack: (active) => ({
        background: active
          ? 'linear-gradient(180deg, #38BDF8 0%, #0284C7 100%)'
          : 'linear-gradient(180deg, #CBD5E1 0%, #94A3B8 100%)',
        borderColor: active ? 'rgba(56, 189, 248, 0.5)' : 'rgba(255, 255, 255, 0.95)',
        borderWidth: '1px',
        boxShadow: active
          ? '0 4px 14px rgba(2, 132, 199, 0.45), inset 0 1px 2px rgba(255, 255, 255, 0.8)'
          : 'inset 0 1.5px 3px rgba(15, 23, 42, 0.25), inset 0 -1px 1px rgba(255, 255, 255, 0.85), 0 1px 2px rgba(100, 115, 145, 0.15)',
      }),
      toggleTrackClassName: () => 'w-11 h-6 rounded-full relative cursor-pointer transition-all duration-200 select-none p-0.5 flex items-center border',
      toggleThumb: (active) => ({
        transform: active ? 'translateX(20px)' : 'translateX(0px)',
        boxShadow: active
          ? '0 2px 6px rgba(0, 0, 0, 0.2), inset 0 1px 1px #FFFFFF'
          : '0 2px 5px rgba(15, 23, 42, 0.25), inset 0 1px 1px #FFFFFF',
      }),
      toggleThumbClassName: () => 'w-5 h-5 rounded-full bg-white transition-transform duration-200',

      selectTrigger: (open) => ({
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(16px)',
        borderColor: open ? 'rgba(2, 132, 199, 0.5)' : 'rgba(255, 255, 255, 0.95)',
        borderWidth: '1px',
        borderRadius: '9999px',
        color: '#0F172A',
        boxShadow: open
          ? '0 6px 20px rgba(2, 132, 199, 0.16), inset 0 1px 0 rgba(255,255,255,0.95)'
          : '0 4px 16px rgba(15, 23, 42, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
        fontFamily: font.fontFamily,
      }),
      selectTriggerClassName: () => 'w-full h-10 px-3.5 flex items-center justify-between text-left text-xs transition-all cursor-pointer relative border',
      selectMenu: {
        backgroundColor: 'rgba(255, 255, 255, 0.88)',
        backdropFilter: 'blur(28px) saturate(190%)',
        borderColor: 'rgba(255, 255, 255, 0.95)',
        borderWidth: '1px',
        borderRadius: '20px',
        boxShadow: '0 20px 48px rgba(100, 115, 145, 0.18), inset 0 1px 1.5px #FFFFFF',
        fontFamily: font.fontFamily,
      },
      selectMenuClassName: 'absolute top-full left-0 right-0 mt-2 border p-1.5 overflow-hidden z-50 space-y-0.5 shadow-2xl max-h-52 overflow-y-auto',
      selectItem: (selected) => ({
        background: selected
          ? 'linear-gradient(135deg, #0284C7 0%, #0369A1 100%)'
          : 'transparent',
        border: selected
          ? '1px solid rgba(56, 189, 248, 0.5)'
          : '1px solid transparent',
        boxShadow: selected
          ? '0 4px 14px rgba(2, 132, 199, 0.35), inset 0 1px 1.5px rgba(255, 255, 255, 0.75)'
          : 'none',
        borderRadius: '12px',
      }),
      selectItemClassName: (selected) =>
        `w-full px-2.5 py-1.5 text-xs text-left flex items-center justify-between cursor-pointer transition-all rounded-xl ${
          selected ? '' : 'hover:bg-slate-100/60'
        }`,
      selectItemText: (selected) => ({
        titleColor: selected ? '#FFFFFF' : '#0F172A',
        metaColor: selected ? 'rgba(255, 255, 255, 0.88)' : '#64748B',
        checkColor: '#FFFFFF',
      }),

      checkboxItem: () => ({
        backgroundColor: 'rgba(255, 255, 255, 0.72)',
        borderColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '16px',
        boxShadow: '0 4px 14px rgba(100, 115, 145, 0.08), inset 0 1px 1px #FFFFFF',
      }),
      checkboxBox: (checked) => ({
        backgroundColor: checked ? '#0284C7' : 'rgba(226, 232, 240, 0.9)',
        borderColor: checked ? '#0284C7' : '#94A3B8',
        borderWidth: '1px',
        borderRadius: '8px',
        boxShadow: checked
          ? '0 4px 10px rgba(2, 132, 199, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.8)'
          : 'inset 0 1.5px 3px rgba(15, 23, 42, 0.12), inset 0 -1px 1px rgba(255, 255, 255, 0.85), 0 1px 2px rgba(100, 115, 145, 0.08)',
        color: '#FFFFFF',
      }),
      checkboxBoxClassName: () => 'w-5.5 h-5.5 flex items-center justify-center transition-all flex-shrink-0 border',

      radioOption: (selected) => ({
        backgroundColor: selected
          ? 'rgba(255, 255, 255, 0.92)'
          : 'rgba(255, 255, 255, 0.72)',
        borderColor: selected ? '#0284C7' : 'rgba(255, 255, 255, 0.95)',
        borderWidth: '1px',
        borderRadius: '16px',
        color: selected ? '#0284C7' : palette.text,
        boxShadow: selected
          ? '0 4px 12px rgba(2, 132, 199, 0.18), inset 0 1px 1px #FFFFFF'
          : '0 2px 6px rgba(100, 115, 145, 0.06), inset 0 1px 1px #FFFFFF',
      }),
      radioOptionTextColor: (selected) => (selected ? '#0284C7' : '#0F172A'),

      sliderAccentColor: '#0284C7',

      tabPill: (active) => ({
        backgroundColor: active ? '#FFFFFF' : 'transparent',
        borderRadius: '9999px',
        boxShadow: active
          ? '0 4px 12px rgba(100, 115, 145, 0.12), inset 0 1px 1px #FFFFFF'
          : 'none',
      }),
      tabTextColor: (active) => (active ? '#0284C7' : '#64748B'),
    };
  },
  getBlueprints: () => `### Exact Component Blueprints (Ready-to-Use React & Tailwind)
\`\`\`tsx
// visionOS Opal Frosted Glass Components (Dense Translucent Acrylic & Specular Rim)

// 1. Frosted Glass Panel Container
export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={\`p-6 rounded-[24px] bg-white/75 backdrop-blur-2xl border border-white/90 shadow-[0_16px_36px_rgba(100,115,145,0.08),inset_0_1.5px_2px_#FFFFFF] \${className}\`}>
      {children}
    </div>
  );
}

// 2. Status Badge
export function Badge({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={\`h-7 px-3 rounded-full bg-white/85 backdrop-blur-md border border-white/95 text-[#0284C7] font-bold text-[10px] inline-flex items-center shadow-[0_4px_12px_rgba(100,115,145,0.08),inset_0_1px_1px_#FFFFFF] \${className}\`}>
      {children}
    </span>
  );
}

// 3. Segmented Tabs
export function Tabs({ tabs, activeTab, onChange }: { tabs: string[]; activeTab: string; onChange: (tab: string) => void }) {
  return (
    <div className="p-1 rounded-full bg-slate-200/50 backdrop-blur-md border border-white/70 inline-flex items-center gap-1 shadow-[inset_0_1px_2px_rgba(100,115,145,0.08)]">
      {tabs.map((tab) => {
        const active = activeTab === tab;
        return (
          <button
            key={tab}
            type="button"
            onClick={() => onChange(tab)}
            className={\`h-7 px-3 rounded-full text-xs font-semibold cursor-pointer transition-all inline-flex items-center justify-center whitespace-nowrap \${
              active
                ? 'bg-white text-[#0284C7] shadow-[0_4px_12px_rgba(100,115,145,0.12),inset_0_1px_1px_#FFFFFF]'
                : 'text-slate-600 hover:text-slate-900'
            }\`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}

// 4. Action Buttons (Primary & Secondary)
export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const styles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-[#0284C7] to-[#2563EB] text-white shadow-[0_8px_20px_rgba(37,99,235,0.35),inset_0_1px_1.5px_rgba(255,255,255,0.6)]'
      : 'bg-white/80 backdrop-blur-md text-slate-800 border border-white/90 shadow-[0_4px_14px_rgba(15,23,42,0.06),inset_0_1px_1px_#FFFFFF] hover:bg-white';
  return (
    <button
      className={\`h-9 px-4 rounded-full font-semibold text-xs inline-flex items-center justify-center gap-1.5 whitespace-nowrap transition-all active:scale-95 cursor-pointer \${styles} \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
}

// 5. Capsule Search & Form Input
export function Input({ className = '', ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={\`w-full h-10 px-4 rounded-full bg-white/70 backdrop-blur-xl border border-white/90 text-slate-900 placeholder:text-slate-400 text-xs shadow-[0_4px_14px_rgba(15,23,42,0.04),inset_0_1px_1px_#FFFFFF] outline-none focus:ring-2 focus:ring-sky-500/40 flex items-center \${className}\`}
      {...props}
    />
  );
}

// 6. Custom Select Dropdown
export function Select({
  value,
  options,
  onChange,
}: {
  value: string;
  options: { label: string; meta?: string }[];
  onChange: (val: string) => void;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full h-10 px-4 rounded-full bg-white/80 backdrop-blur-xl border border-white/90 text-xs font-semibold text-slate-900 shadow-[0_4px_16px_rgba(15,23,42,0.06),inset_0_1px_0_#FFFFFF] flex items-center justify-between cursor-pointer"
      >
        <span className="truncate">{value}</span>
        <span className="ml-2 text-[10px] text-slate-400">▾</span>
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 p-1.5 rounded-[20px] bg-white/90 backdrop-blur-2xl border border-white/95 shadow-2xl z-50 space-y-1">
          {options.map((opt) => {
            const isSel = opt.label === value;
            return (
              <button
                key={opt.label}
                type="button"
                onClick={() => { onChange(opt.label); setOpen(false); }}
                className={\`w-full px-3 py-2 text-xs rounded-xl flex items-center justify-between text-left cursor-pointer transition-all \${
                  isSel
                    ? 'bg-gradient-to-r from-[#0284C7] to-[#0369A1] text-white shadow-[0_4px_12px_rgba(2,132,199,0.35)]'
                    : 'text-slate-800 hover:bg-slate-100/70'
                }\`}
              >
                <span>{opt.label}</span>
                {opt.meta && <span className={\`text-[10px] \${isSel ? 'text-sky-100' : 'text-slate-400'}\`}>{opt.meta}</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// 7. Toggle Switch
export function Toggle({ checked, onChange, label }: { checked: boolean; onChange: () => void; label?: string }) {
  return (
    <div className="inline-flex items-center gap-2">
      <button
        onClick={onChange}
        type="button"
        className={\`w-11 h-6 rounded-full p-0.5 flex items-center transition-all cursor-pointer border \${
          checked
            ? 'bg-gradient-to-b from-[#38BDF8] to-[#0284C7] border-sky-300/40 shadow-[0_4px_12px_rgba(2,132,199,0.4),inset_0_1px_2px_rgba(255,255,255,0.7)]'
            : 'bg-gradient-to-b from-slate-200 to-slate-300 border-white/95 shadow-[inset_0_1.5px_3px_rgba(15,23,42,0.22),inset_0_-1px_1px_rgba(255,255,255,0.85),0_1px_2px_rgba(100,115,145,0.12)]'
        }\`}
      >
        <div
          className={\`w-5 h-5 rounded-full bg-white transition-transform duration-200 \${
            checked
              ? 'translate-x-[20px] shadow-[0_2px_5px_rgba(2,132,199,0.4),inset_0_1px_1px_#FFFFFF]'
              : 'translate-x-0 shadow-[0_2px_4px_rgba(15,23,42,0.25),inset_0_1px_1px_#FFFFFF]'
          }\`}
        />
      </button>
      {label && <span className="text-xs font-semibold text-slate-700">{label}</span>}
    </div>
  );
}

// 8. Frosted Checkbox
export function Checkbox({ checked, onChange, label }: { checked: boolean; onChange: () => void; label?: string }) {
  return (
    <button onClick={onChange} type="button" className="w-full h-10 px-3 rounded-2xl bg-white/75 backdrop-blur-xl border border-white/90 shadow-[0_4px_12px_rgba(100,115,145,0.08),inset_0_1px_1px_#FFFFFF] flex items-center gap-2 cursor-pointer text-left select-none">
      <div className={\`w-5 h-5 rounded-lg flex items-center justify-center transition-all border \${
        checked
          ? 'bg-[#0284C7] border-[#0284C7] text-white shadow-[0_2px_8px_rgba(2,132,199,0.35)]'
          : 'bg-slate-200/90 border-slate-300 shadow-[inset_0_1.5px_3px_rgba(15,23,42,0.12)]'
      }\`}>
        {checked && '✓'}
      </div>
      {label && <span className="text-xs font-semibold text-slate-800 truncate">{label}</span>}
    </button>
  );
}

// 9. Radio Option Group
export function RadioGroup({ value, options, onChange }: { value: string; options: { id: string; label: string; desc?: string }[]; onChange: (id: string) => void }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {options.map((opt) => {
        const isSel = value === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className={\`w-full h-14 p-2 rounded-2xl border flex flex-col items-center justify-center gap-0.5 cursor-pointer transition-all \${
              isSel
                ? 'bg-white/95 border-sky-400/80 shadow-[0_6px_16px_rgba(2,132,199,0.18),inset_0_1px_1px_#FFFFFF]'
                : 'bg-white/65 border-white/80 shadow-[0_2px_6px_rgba(100,115,145,0.05),inset_0_1px_1px_#FFFFFF]'
            }\`}
          >
            <span className={\`font-bold text-xs \${isSel ? 'text-[#0284C7]' : 'text-slate-800'}\`}>{opt.label}</span>
            {opt.desc && <span className="text-[10px] text-slate-500 font-mono">{opt.desc}</span>}
          </button>
        );
      })}
    </div>
  );
}

// 10. Accent Potentiometer Slider
export function Slider({ value, onChange, label }: { value: number; onChange: (val: number) => void; label?: string }) {
  return (
    <div className="p-3.5 rounded-2xl bg-white/75 backdrop-blur-xl border border-white/90 shadow-[0_4px_14px_rgba(100,115,145,0.08),inset_0_1px_1px_#FFFFFF] flex flex-col gap-2">
      <div className="flex items-center justify-between text-xs font-bold text-slate-800">
        <span>{label ?? 'Intensity Modulation'}</span>
        <span className="text-[#0284C7] font-mono">{value}%</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 rounded-lg appearance-none cursor-pointer"
        style={{ accentColor: '#0284C7' }}
      />
    </div>
  );
}

// 11. Telemetry / Stat Card
export function StatCard({ title, value, status, icon }: { title: string; value: string; status?: string; icon?: React.ReactNode }) {
  return (
    <div className="h-14 p-3 rounded-2xl bg-white/75 backdrop-blur-xl border border-white/90 shadow-[0_4px_12px_rgba(100,115,145,0.08),inset_0_1px_1px_#FFFFFF] flex items-center justify-between">
      <div className="flex items-center gap-2">
        {icon && <span className="text-[#0284C7]">{icon}</span>}
        <div className="flex flex-col text-xs">
          <span className="font-bold text-slate-900">{title}</span>
          <span className="text-[10px] text-slate-500 font-mono">{value}</span>
        </div>
      </div>
      {status && (
        <span className="text-[9px] font-mono px-2 py-0.5 rounded-full border border-sky-300 bg-sky-50 text-[#0284C7] font-bold">
          {status}
        </span>
      )}
    </div>
  );
}
\`\`\``,
};

// ============================================================================
// 2. CLAYMORPHISM ENGINE (3D Marshmallow & Matte Ceramic)
// ============================================================================
const claymorphismEngine: DesignEngine = {
  id: 'claymorphism',
  name: '3D Claymorphism & Ceramic Engine',
  description: 'Inflated 3D matte ceramic volumes, debossed concave troughs, zero border strokes, and dual-source lighting.',
  getStyles: (selection) => {
    const { font } = selection;
    return {
      id: 'claymorphism',
      card: {
        backgroundColor: '#FFFFFF',
        border: '0px',
        borderRadius: '28px',
        boxShadow:
          '0 18px 38px -6px rgba(185, 160, 135, 0.32), 0 6px 14px rgba(185, 160, 135, 0.16), inset 0 2px 3px #FFFFFF, inset 0 -2px 4px rgba(175, 150, 130, 0.1)',
        fontFamily: font.fontFamily,
      },
      cardClassName: 'border-0 transition-all',
      subCard: {
        backgroundColor: '#FFFFFF',
        border: '0px',
        borderRadius: '20px',
        boxShadow:
          '0 8px 18px rgba(185, 160, 135, 0.25), 0 2px 4px rgba(185, 160, 135, 0.14), inset 0 2px 3px #FFFFFF, inset 0 -2px 3px rgba(175, 150, 130, 0.1)',
      },
      subCardClassName: 'border-0 transition-all',

      inputOuter: {
        backgroundColor: '#FFFFFF',
        boxShadow: '0 6px 16px rgba(185, 160, 135, 0.25), inset 0 2px 3px #FFFFFF',
        borderRadius: '9999px',
        padding: '4px',
      },
      inputOuterClassName: 'w-full',
      inputInner: {
        backgroundColor: '#EFEAE3',
        boxShadow:
          'inset 0 3px 6px rgba(140, 120, 100, 0.28), inset 0 1px 2px rgba(140, 120, 100, 0.35), inset 0 -1.5px 2px rgba(255, 255, 255, 0.95)',
        borderRadius: '9999px',
        color: '#23211E',
      },
      inputInnerClassName: 'w-full px-3.5 py-2 flex items-center gap-2',
      inputTextColor: '#23211E',
      inputPlaceholderColor: '#8C827A',

      primaryButton: {
        backgroundColor: '#2563EB',
        color: '#FFFFFF',
        borderRadius: '9999px',
        border: '0px',
        boxShadow:
          '0 8px 18px rgba(37, 99, 235, 0.35), inset 0 2px 3px rgba(255, 255, 255, 0.8), inset 0 -2px 4px rgba(0, 0, 0, 0.2)',
      },
      primaryButtonClassName: 'h-9 px-4 rounded-full font-bold text-xs inline-flex items-center justify-center gap-1.5 whitespace-nowrap transition-all active:scale-95 cursor-pointer border-0',
      secondaryButton: {
        backgroundColor: '#FFFFFF',
        color: '#1F2937',
        borderRadius: '9999px',
        border: '0px',
        boxShadow:
          '0 8px 18px rgba(185, 160, 135, 0.28), inset 0 2px 3px #FFFFFF, inset 0 -2px 3px rgba(175, 150, 130, 0.1)',
      },
      secondaryButtonClassName: 'h-9 px-4 rounded-full font-bold text-xs inline-flex items-center justify-center gap-1.5 whitespace-nowrap transition-all active:scale-95 cursor-pointer border-0',

      toggleTrack: (active) => ({
        background: active
          ? 'linear-gradient(180deg, #4285F4 0%, #2563EB 100%)'
          : 'linear-gradient(180deg, #DED8CE 0%, #CFC7BC 100%)',
        boxShadow: active
          ? '0 0 0 2px #FFFFFF, inset 0 3px 5px rgba(15, 45, 120, 0.55), 0 3px 8px rgba(185, 160, 135, 0.25)'
          : '0 0 0 2px #FFFFFF, inset 0 3px 5px rgba(120, 105, 90, 0.35), 0 3px 8px rgba(185, 160, 135, 0.2)',
        border: '0px',
      }),
      toggleTrackClassName: () => 'w-12 h-6.5 rounded-full relative cursor-pointer transition-all duration-200 select-none p-0.5 flex items-center border-0',
      toggleThumb: (active) => ({
        transform: active ? 'translateX(22px)' : 'translateX(0px)',
        background: 'radial-gradient(circle at 35% 30%, #FFFFFF 0%, #F5F7FA 55%, #E2E8F0 100%)',
        boxShadow:
          '0 3px 6px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.15), inset 0 1.5px 2px #FFFFFF, inset 0 -1.5px 2px rgba(180, 190, 205, 0.45)',
      }),
      toggleThumbClassName: () => 'w-5.5 h-5.5 rounded-full transition-transform duration-200',

      selectTrigger: (open) => ({
        backgroundColor: '#FFFFFF',
        border: '0px',
        borderRadius: '9999px',
        color: '#1F2937',
        boxShadow: open
          ? 'inset 0 3px 6px rgba(150, 130, 110, 0.25), inset 0 1px 2px rgba(150, 130, 110, 0.3), inset 0 -2px 3px rgba(255, 255, 255, 0.95), 0 2px 6px rgba(185, 160, 135, 0.2)'
          : '0 8px 18px rgba(185, 160, 135, 0.3), 0 2px 5px rgba(185, 160, 135, 0.16), inset 0 2px 3px rgba(255, 255, 255, 1), inset 0 -2px 4px rgba(175, 150, 130, 0.14)',
        fontFamily: font.fontFamily,
      }),
      selectTriggerClassName: () => 'w-full h-10 px-3.5 flex items-center justify-between text-left text-xs transition-all cursor-pointer relative border-0',
      selectMenu: {
        backgroundColor: '#FFFFFF',
        border: '0px',
        borderRadius: '24px',
        boxShadow:
          '0 25px 50px -10px rgba(180, 155, 130, 0.4), 0 8px 18px rgba(180, 155, 130, 0.22), inset 0 2px 3px rgba(255, 255, 255, 1), inset 0 -2px 4px rgba(175, 150, 130, 0.1)',
        fontFamily: font.fontFamily,
      },
      selectMenuClassName: 'absolute top-full left-0 right-0 mt-2 border-0 p-2 overflow-hidden z-50 space-y-0.5 shadow-2xl max-h-52 overflow-y-auto',
      selectItem: (selected) => ({
        backgroundColor: selected ? '#2563EB' : 'transparent',
        borderRadius: '16px',
        boxShadow: selected
          ? '0 4px 10px rgba(37, 99, 235, 0.35), inset 0 1.5px 2px rgba(255, 255, 255, 0.7), inset 0 -1.5px 2px rgba(0, 0, 0, 0.2)'
          : 'none',
      }),
      selectItemClassName: (selected) =>
        `w-full px-2.5 py-2 text-xs text-left flex items-center justify-between cursor-pointer transition-all rounded-2xl ${
          selected ? '' : 'hover:bg-[#F5EFE6]'
        }`,
      selectItemText: (selected) => ({
        titleColor: selected ? '#FFFFFF' : '#23211E',
        metaColor: selected ? '#DBEAFE' : '#78716C',
        checkColor: '#FFFFFF',
      }),

      checkboxItem: () => ({
        backgroundColor: '#FFFFFF',
        border: '0px',
        borderRadius: '20px',
        boxShadow:
          '0 8px 18px rgba(185, 160, 135, 0.25), 0 2px 4px rgba(185, 160, 135, 0.14), inset 0 2px 3px rgba(255, 255, 255, 1), inset 0 -2px 3px rgba(175, 150, 130, 0.1)',
      }),
      checkboxBox: (checked) => ({
        backgroundColor: checked ? '#2563EB' : '#EFEAE3',
        borderRadius: '12px',
        border: '0px',
        boxShadow: checked
          ? '0 4px 10px rgba(37, 99, 235, 0.45), inset 0 1.5px 2px rgba(255, 255, 255, 0.8), inset 0 -1.5px 2px rgba(15, 23, 42, 0.25)'
          : 'inset 0 2px 4px rgba(140, 120, 100, 0.28), inset 0 -1px 2px rgba(255, 255, 255, 0.95), 0 1px 2px rgba(255, 255, 255, 0.8)',
        color: '#FFFFFF',
      }),
      checkboxBoxClassName: () => 'w-5.5 h-5.5 flex items-center justify-center transition-all flex-shrink-0',

      radioOption: (selected) => ({
        backgroundColor: selected ? '#FFFFFF' : '#FAF6EE',
        border: '0px',
        borderRadius: '20px',
        boxShadow: selected
          ? '0 8px 18px rgba(185, 160, 135, 0.28), 0 2px 4px rgba(185, 160, 135, 0.16), inset 0 2px 3px rgba(255, 255, 255, 1), inset 0 -2px 3px rgba(175, 150, 130, 0.1)'
          : 'inset 0 2px 4px rgba(150, 130, 110, 0.15), inset 0 -1.5px 2px rgba(255, 255, 255, 0.95), 0 2px 4px rgba(185, 160, 135, 0.1)',
      }),
      radioOptionTextColor: (selected) => (selected ? '#2563EB' : '#23211E'),

      sliderTrough: {
        backgroundColor: '#EFEAE3',
        boxShadow:
          'inset 0 3px 6px rgba(140, 120, 100, 0.28), inset 0 1px 2px rgba(140, 120, 100, 0.35), inset 0 -1.5px 2px rgba(255, 255, 255, 0.95)',
      },
      sliderAccentColor: '#2563EB',

      tabPill: (active) => ({
        backgroundColor: active ? '#FFFFFF' : 'transparent',
        borderRadius: '9999px',
        boxShadow: active
          ? '0 4px 10px rgba(180, 160, 140, 0.22), inset 1px 1px 2px rgba(255, 255, 255, 1)'
          : 'none',
      }),
      tabTextColor: (active) => (active ? '#1F2937' : '#78716C'),
    };
  },
  getBlueprints: () => `### Exact Component Blueprints (Ready-to-Use React & Tailwind)
\`\`\`tsx
// 3D Claymorphism & Ceramic Components (Soft Inflated Volumes & Debossed Cavities)

// 1. Inflated 3D Matte Ceramic Card Container
export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={\`bg-white rounded-[28px] p-6 shadow-[0_18px_38px_-6px_rgba(185,160,135,0.32),0_6px_14px_rgba(185,160,135,0.16),inset_0_2px_3px_#FFFFFF,inset_0_-2px_4px_rgba(175,150,130,0.1)] border-0 \${className}\`}>
      {children}
    </div>
  );
}

// 2. Status Badge
export function Badge({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={\`h-7 px-3.5 rounded-full bg-white shadow-[0_4px_12px_rgba(185,160,135,0.2),inset_0_1.5px_2px_#FFFFFF] text-[#2563EB] font-bold text-[10px] inline-flex items-center gap-1.5 border-0 \${className}\`}>
      {children}
    </span>
  );
}

// 3. Segmented Tabs
export function Tabs({ tabs, activeTab, onChange }: { tabs: string[]; activeTab: string; onChange: (tab: string) => void }) {
  return (
    <div className="p-1 rounded-full bg-[#EFEAE3] shadow-[inset_0_2px_4px_rgba(140,120,100,0.22),inset_0_-1px_2px_rgba(255,255,255,0.95)] inline-flex items-center gap-1">
      {tabs.map((tab) => {
        const active = activeTab === tab;
        return (
          <button
            key={tab}
            type="button"
            onClick={() => onChange(tab)}
            className={\`h-7 px-3.5 rounded-full text-xs font-bold cursor-pointer transition-all inline-flex items-center justify-center whitespace-nowrap border-0 \${
              active
                ? 'bg-white text-[#1F2937] shadow-[0_4px_10px_rgba(180,160,140,0.22),inset_1px_1px_2px_#FFFFFF]'
                : 'text-[#78716C] hover:text-[#1F2937]'
            }\`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}

// 4. Plump Marshmallow Buttons (Primary & Secondary)
export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const base = "h-9 px-4 rounded-full font-bold text-xs inline-flex items-center justify-center gap-1.5 whitespace-nowrap transition-all active:scale-95 cursor-pointer border-0";
  const styles = variant === 'primary'
    ? "bg-[#2563EB] text-white shadow-[0_8px_18px_rgba(37,99,235,0.35),inset_0_2px_3px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.2)]"
    : "bg-white text-[#1F2937] shadow-[0_8px_18px_rgba(185,160,135,0.28),inset_0_2px_3px_#FFFFFF,inset_0_-2px_3px_rgba(175,150,130,0.1)]";
  return <button className={\`\${base} \${styles} \${className}\`} {...props}>{children}</button>;
}

// 5. Debossed Sunken Input Well
export function Input({ placeholder = 'Search reports...', className = '', ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={\`w-full h-10 p-0.5 rounded-full bg-white shadow-[0_6px_16px_rgba(185,160,135,0.25),inset_0_2px_3px_#FFFFFF] flex items-center \${className}\`}>
      <div className="w-full h-full px-3.5 rounded-full bg-[#EFEAE3] shadow-[inset_0_3px_6px_rgba(140,120,100,0.28),inset_0_1px_2px_rgba(140,120,100,0.35),inset_0_-1.5px_2px_rgba(255,255,255,0.95)] flex items-center gap-2">
        <input className="w-full bg-transparent text-xs text-[#23211E] outline-none placeholder:text-[#8C827A] font-medium" placeholder={placeholder} {...props} />
      </div>
    </div>
  );
}

// 6. 3D Ceramic Custom Select Dropdown
export function Select({ value, options, onChange }: { value: string; options: { label: string; meta?: string }[]; onChange: (v: string) => void }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full h-10 px-4 rounded-full bg-white text-xs font-bold text-[#1F2937] shadow-[0_8px_18px_rgba(185,160,135,0.3),inset_0_2px_3px_#FFFFFF] flex items-center justify-between border-0 cursor-pointer"
      >
        <span>{value}</span>
        <span className="text-slate-400">▾</span>
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 p-2 rounded-[24px] bg-white shadow-[0_25px_50px_-10px_rgba(180,155,130,0.4),inset_0_2px_3px_#FFFFFF] z-50 space-y-1 border-0">
          {options.map((opt) => (
            <button
              key={opt.label}
              type="button"
              onClick={() => { onChange(opt.label); setOpen(false); }}
              className={\`w-full px-3 py-2 text-xs rounded-2xl flex items-center justify-between text-left cursor-pointer border-0 \${
                opt.label === value
                  ? 'bg-[#2563EB] text-white shadow-[0_4px_10px_rgba(37,99,235,0.35)]'
                  : 'text-[#23211E] hover:bg-[#F5EFE6]'
              }\`}
            >
              <span>{opt.label}</span>
              {opt.meta && <span className={\`text-[10px] \${opt.label === value ? 'text-blue-100' : 'text-[#78716C]'}\`}>{opt.meta}</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// 7. Debossed Socket Toggle Switch
export function Toggle({ checked, onChange, label }: { checked: boolean; onChange: () => void; label?: string }) {
  return (
    <div className="inline-flex items-center gap-2">
      <button onClick={onChange} type="button" className={\`w-12 h-6.5 rounded-full p-0.5 flex items-center transition-all cursor-pointer border-0 \${
        checked ? 'bg-[linear-gradient(180deg,#4285F4_0%,#2563EB_100%)] shadow-[0_0_0_2px_#fff,inset_0_3px_5px_rgba(15,45,120,0.55),0_3px_8px_rgba(185,160,135,0.25)]'
                : 'bg-[linear-gradient(180deg,#DED8CE_0%,#CFC7BC_100%)] shadow-[0_0_0_2px_#fff,inset_0_3px_5px_rgba(120,105,90,0.35),0_3px_8px_rgba(185,160,135,0.2)]'
      }\`}>
        <div className={\`w-5.5 h-5.5 rounded-full bg-[radial-gradient(circle_at_35%_30%,#fff_0%,#F5F7FA_55%,#E2E8F0_100%)] shadow-[0_3px_6px_rgba(0,0,0,0.25),inset_0_1.5px_2px_#fff,inset_0_-1.5px_2px_rgba(180,190,205,0.45)] transition-transform duration-200 \${checked ? 'translate-x-[22px]' : 'translate-x-0'}\`} />
      </button>
      {label && <span className="text-xs font-semibold text-[#23211E]">{label}</span>}
    </div>
  );
}

// 8. 3D Ceramic Checkbox
export function Checkbox({ checked, onChange, label }: { checked: boolean; onChange: () => void; label?: string }) {
  return (
    <button onClick={onChange} type="button" className="w-full h-10 px-3.5 border-0 bg-white rounded-[20px] shadow-[0_8px_18px_rgba(185,160,135,0.25),inset_0_2px_3px_#fff] flex items-center gap-2 cursor-pointer text-left select-none">
      <div className={\`w-5.5 h-5.5 rounded-xl flex items-center justify-center transition-all flex-shrink-0 \${
        checked ? 'bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-[0_4px_10px_rgba(37,99,235,0.45),inset_0_1.5px_2px_rgba(255,255,255,0.8),inset_0_-1.5px_2px_rgba(15,23,42,0.25)]'
                : 'bg-[#EFEAE3] shadow-[inset_0_2px_4px_rgba(140,120,100,0.28),inset_0_-1px_2px_rgba(255,255,255,0.95)]'
      }\`}>
        {checked && '✓'}
      </div>
      {label && <span className="text-xs font-semibold text-[#23211E] truncate">{label}</span>}
    </button>
  );
}

// 9. 3D Ceramic Radio Option Group
export function RadioGroup({ value, options, onChange }: { value: string; options: { id: string; label: string; desc?: string }[]; onChange: (id: string) => void }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {options.map((opt) => {
        const isSel = value === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className={\`w-full h-14 p-2 rounded-[20px] border-0 flex flex-col items-center justify-center gap-0.5 cursor-pointer transition-all \${
              isSel
                ? 'bg-white shadow-[0_8px_18px_rgba(185,160,135,0.28),inset_0_2px_3px_#FFFFFF,inset_0_-2px_3px_rgba(175,150,130,0.1)]'
                : 'bg-[#FAF6EE] shadow-[inset_0_2px_4px_rgba(150,130,110,0.15),inset_0_-1.5px_2px_#FFFFFF]'
            }\`}
          >
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-full bg-[#EFEAE3] shadow-[inset_0_2px_4px_rgba(140,120,100,0.28),inset_0_-1px_2px_#FFFFFF] flex items-center justify-center">
                {isSel && <div className="w-2 h-2 rounded-full bg-[#2563EB] shadow-[0_2px_4px_rgba(37,99,235,0.5),inset_0_1px_1px_#FFFFFF]" />}
              </div>
              <span className={\`font-bold text-xs \${isSel ? 'text-[#2563EB]' : 'text-[#23211E]'}\`}>{opt.label}</span>
            </div>
            {opt.desc && <span className="text-[10px] text-[#78716C] font-mono">{opt.desc}</span>}
          </button>
        );
      })}
    </div>
  );
}

// 10. Accent Potentiometer Slider
export function Slider({ value, onChange, label }: { value: number; onChange: (val: number) => void; label?: string }) {
  return (
    <div className="p-3.5 rounded-[24px] bg-white shadow-[0_8px_18px_rgba(185,160,135,0.25),inset_0_2px_3px_#FFFFFF] border-0 flex flex-col gap-2">
      <div className="flex items-center justify-between text-xs font-bold text-[#23211E]">
        <span>{label ?? 'Intensity Modulation'}</span>
        <span className="text-[#2563EB] font-mono">{value}%</span>
      </div>
      <div className="w-full h-3 rounded-full bg-[#EFEAE3] shadow-[inset_0_3px_6px_rgba(140,120,100,0.28),inset_0_1px_2px_rgba(140,120,100,0.35),inset_0_-1.5px_2px_rgba(255,255,255,0.95)] flex items-center p-0.5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sky-400 via-blue-600 to-rose-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]"
          style={{ width: \`\${value}%\` }}
        />
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 cursor-pointer"
        style={{ accentColor: '#2563EB' }}
      />
    </div>
  );
}

// 11. Telemetry / Stat Card
export function StatCard({ title, value, status, icon }: { title: string; value: string; status?: string; icon?: React.ReactNode }) {
  return (
    <div className="h-14 p-3 rounded-[20px] bg-white shadow-[0_8px_18px_rgba(185,160,135,0.22),inset_0_2px_3px_#FFFFFF] border-0 flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        {icon && <span className="text-[#2563EB]">{icon}</span>}
        <div className="flex flex-col text-xs">
          <span className="font-bold text-[#23211E]">{title}</span>
          <span className="text-[10px] text-[#78716C] font-mono">{value}</span>
        </div>
      </div>
      {status && (
        <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#EFEAE3] shadow-[inset_0_1.5px_3px_rgba(140,120,100,0.2)] text-[#2563EB] font-bold">
          {status}
        </span>
      )}
    </div>
  );
}
\`\`\``,
};

// ============================================================================
// 3. WINDOWS 95 ENGINE (90s Classic Desktop UI)
// ============================================================================
const win95Engine: DesignEngine = {
  id: 'win95',
  name: 'Windows 95 Classic Desktop Engine',
  description: '1995 desktop UI with 0px radius, directional 3D light bevels, and tactile mechanical click depression.',
  getStyles: (selection) => {
    const { font } = selection;
    return {
      id: 'win95',
      card: {
        backgroundColor: '#C0C0C0',
        borderColor: '#808080',
        borderWidth: '2px',
        borderRadius: '0px',
        boxShadow: 'none',
        fontFamily: font.fontFamily,
      },
      cardClassName: 'border-2 border-t-white border-l-white border-b-black border-r-black transition-all p-1',
      subCard: {
        backgroundColor: '#C0C0C0',
        borderColor: '#808080',
        borderWidth: '2px',
        borderRadius: '0px',
      },
      subCardClassName: 'border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white p-2.5',

      inputOuter: {},
      inputOuterClassName: 'w-full',
      inputInner: {
        backgroundColor: '#FFFFFF',
        color: '#000000',
        borderRadius: '0px',
      },
      inputInnerClassName: 'w-full h-10 px-2.5 border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white flex items-center text-xs outline-none',
      inputTextColor: '#000000',
      inputPlaceholderColor: '#808080',

      primaryButton: {
        backgroundColor: '#C0C0C0',
        color: '#000000',
        borderRadius: '0px',
      },
      primaryButtonClassName: 'h-9 px-4 font-bold text-xs inline-flex items-center justify-center gap-1.5 whitespace-nowrap border-2 border-t-white border-l-white border-b-black border-r-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white cursor-pointer select-none',
      secondaryButton: {
        backgroundColor: '#C0C0C0',
        color: '#000000',
        borderRadius: '0px',
      },
      secondaryButtonClassName: 'h-9 px-4 font-bold text-xs inline-flex items-center justify-center gap-1.5 whitespace-nowrap border-2 border-t-white border-l-white border-b-black border-r-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white cursor-pointer select-none',

      toggleTrack: () => ({
        backgroundColor: '#C0C0C0',
        color: '#000000',
      }),
      toggleTrackClassName: (active) =>
        `px-2 py-1 font-mono text-[11px] font-bold border-2 cursor-pointer select-none flex items-center gap-1.5 ${
          active
            ? 'border-t-[#808080] border-l-[#808080] border-b-white border-r-white'
            : 'border-t-white border-l-white border-b-[#808080] border-r-[#808080]'
        }`,
      toggleThumb: () => ({}),
      toggleThumbClassName: () => '',

      selectTrigger: () => ({
        backgroundColor: '#FFFFFF',
        color: '#000000',
        borderRadius: '0px',
      }),
      selectTriggerClassName: () =>
        'w-full h-10 px-2.5 border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white flex items-center justify-between text-left text-xs cursor-pointer relative',
      selectMenu: {
        backgroundColor: '#FFFFFF',
        borderColor: '#000000',
        borderWidth: '2px',
        borderRadius: '0px',
        boxShadow: 'none',
      },
      selectMenuClassName: 'absolute top-full left-0 right-0 mt-1 border-2 border-black p-0.5 overflow-hidden z-50 max-h-52 overflow-y-auto',
      selectItem: (selected) => ({
        backgroundColor: selected ? '#000080' : '#FFFFFF',
        color: selected ? '#FFFFFF' : '#000000',
        borderRadius: '0px',
      }),
      selectItemClassName: () => 'w-full px-2 py-1 text-xs text-left flex items-center justify-between cursor-pointer select-none',
      selectItemText: (selected) => ({
        titleColor: selected ? '#FFFFFF' : '#000000',
        metaColor: selected ? '#C0C0C0' : '#666666',
        checkColor: '#FFFFFF',
      }),

      checkboxItem: () => ({
        backgroundColor: '#C0C0C0',
        borderRadius: '0px',
      }),
      checkboxBox: () => ({
        backgroundColor: '#FFFFFF',
        color: '#000000',
        borderRadius: '0px',
      }),
      checkboxBoxClassName: () =>
        'w-5 h-5 flex items-center justify-center border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white font-bold',

      radioOption: () => ({
        backgroundColor: '#C0C0C0',
        borderRadius: '0px',
      }),
      radioOptionTextColor: () => '#000000',

      sliderAccentColor: '#000080',

      tabPill: () => ({
        backgroundColor: '#C0C0C0',
        borderRadius: '0px',
      }),
      tabTextColor: () => '#000000',
    };
  },
  getBlueprints: () => `### Exact Component Blueprints (Ready-to-Use React & Tailwind)
\`\`\`tsx
// Windows 95 Classic Desktop 3D Bevel Components

// 1. Classic Window Frame Container
export function Card({ title = 'Application Window', children, className = '' }: { title?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={\`bg-[#C0C0C0] border-2 border-t-white border-l-white border-b-black border-r-black p-1 shadow-md select-none \${className}\`}>
      <div className="bg-[#000080] text-white font-bold text-xs px-2 py-1 flex items-center justify-between mb-1">
        <span>{title}</span>
        <button type="button" className="w-4 h-4 bg-[#C0C0C0] text-black border border-t-white border-l-white border-b-black border-r-black text-[10px] flex items-center justify-center font-bold leading-none">×</button>
      </div>
      <div className="p-2 border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white bg-[#C0C0C0]">{children}</div>
    </div>
  );
}

// 2. Status Field / Sunken Inset Panel
export function Badge({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={\`h-6 px-2 border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white bg-[#C0C0C0] text-black font-mono text-[10px] font-bold inline-flex items-center \${className}\`}>
      {children}
    </span>
  );
}

// 3. Desktop Tab Strip
export function Tabs({ tabs, activeTab, onChange }: { tabs: string[]; activeTab: string; onChange: (tab: string) => void }) {
  return (
    <div className="flex items-end gap-1 border-b-2 border-[#808080] pb-0">
      {tabs.map((tab) => {
        const active = activeTab === tab;
        return (
          <button
            key={tab}
            type="button"
            onClick={() => onChange(tab)}
            className={\`px-3 py-1 text-xs cursor-pointer select-none transition-none font-bold \${
              active
                ? 'bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-black border-b-[#C0C0C0] -mb-[2px] text-black'
                : 'bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] text-black/70'
            }\`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}

// 4. Beveled Clickable Button (Primary & Secondary)
export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={\`h-9 px-4 font-bold text-xs inline-flex items-center justify-center gap-1.5 whitespace-nowrap bg-[#C0C0C0] text-black border-2 border-t-white border-l-white border-b-black border-r-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white cursor-pointer select-none \${
        variant === 'primary' ? 'ring-1 ring-black ring-inset' : ''
      } \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
}

// 5. Sunken White Inset Text Box
export function Input({ className = '', ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={\`w-full h-10 px-2.5 bg-white text-black text-xs border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white outline-none flex items-center font-mono \${className}\`}
      {...props}
    />
  );
}

// 6. Classic 90s Dropdown ComboBox
export function Select({ value, options, onChange }: { value: string; options: { label: string; meta?: string }[]; onChange: (v: string) => void }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full h-10 px-2.5 bg-white text-black text-xs border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white flex items-center justify-between cursor-pointer select-none"
      >
        <span className="font-mono truncate">{value}</span>
        <span className="w-4 h-4 bg-[#C0C0C0] border border-t-white border-l-white border-b-black border-r-black text-[9px] flex items-center justify-center font-bold ml-2">▼</span>
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 mt-0.5 bg-white border-2 border-black p-0.5 z-50 max-h-52 overflow-y-auto">
          {options.map((opt) => (
            <button
              key={opt.label}
              type="button"
              onClick={() => { onChange(opt.label); setOpen(false); }}
              className={\`w-full px-2 py-1 text-xs text-left flex items-center justify-between cursor-pointer font-mono select-none \${
                opt.label === value ? 'bg-[#000080] text-white' : 'text-black hover:bg-[#000080] hover:text-white'
              }\`}
            >
              <span>{opt.label}</span>
              {opt.meta && <span className="text-[10px] opacity-75">{opt.meta}</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// 7. Mechanical Push-Latching Toggle
export function Toggle({ checked, onChange, label = 'ACTIVE' }: { checked: boolean; onChange: () => void; label?: string }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={\`px-2.5 py-1 font-mono text-[11px] font-bold border-2 cursor-pointer flex items-center gap-1.5 select-none bg-[#C0C0C0] \${
        checked
          ? 'border-t-[#808080] border-l-[#808080] border-b-white border-r-white text-black'
          : 'border-t-white border-l-white border-b-[#808080] border-r-[#808080] text-black'
      }\`}
    >
      <span>{checked ? '🗹' : '☐'}</span>
      <span>{label}</span>
    </button>
  );
}

// 8. Classic 90s Inset Checkbox
export function Checkbox({ checked, onChange, label }: { checked: boolean; onChange: () => void; label?: string }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className="w-full h-10 px-3 bg-[#C0C0C0] border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white flex items-center gap-2 cursor-pointer select-none text-left"
    >
      <div className="w-4 h-4 bg-white border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white text-black font-black text-xs flex items-center justify-center flex-shrink-0">
        {checked && '✓'}
      </div>
      {label && <span className="text-xs font-bold text-black font-mono truncate">{label}</span>}
    </button>
  );
}

// 9. Classic 90s Radio Buttons Group
export function RadioGroup({ value, options, onChange }: { value: string; options: { id: string; label: string; desc?: string }[]; onChange: (id: string) => void }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {options.map((opt) => {
        const isSel = value === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className="w-full h-14 p-2 bg-[#C0C0C0] border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white flex flex-col items-center justify-center gap-0.5 cursor-pointer select-none"
          >
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-full bg-white border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white flex items-center justify-center flex-shrink-0">
                {isSel && <div className="w-2 h-2 rounded-full bg-black" />}
              </div>
              <span className="font-bold text-xs text-black font-mono">{opt.label}</span>
            </div>
            {opt.desc && <span className="text-[10px] text-black/70 font-mono">{opt.desc}</span>}
          </button>
        );
      })}
    </div>
  );
}

// 10. Classic Desktop Trackbar Slider
export function Slider({ value, onChange, label }: { value: number; onChange: (val: number) => void; label?: string }) {
  return (
    <div className="p-3 bg-[#C0C0C0] border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white flex flex-col gap-1.5 select-none font-mono">
      <div className="flex items-center justify-between text-xs font-bold text-black">
        <span>{label ?? 'Intensity Modulation'}</span>
        <span className="text-[#000080]">{value}%</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full cursor-pointer accent-[#000080]"
      />
    </div>
  );
}

// 11. Sunken Status Bar Telemetry Tile
export function StatCard({ title, value, status, icon }: { title: string; value: string; status?: string; icon?: React.ReactNode }) {
  return (
    <div className="h-14 p-2.5 bg-[#C0C0C0] border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white flex items-center justify-between font-mono select-none">
      <div className="flex items-center gap-2">
        {icon && <span className="text-[#000080]">{icon}</span>}
        <div className="flex flex-col text-xs">
          <span className="font-bold text-black">{title}</span>
          <span className="text-[10px] text-black/70">{value}</span>
        </div>
      </div>
      {status && (
        <span className="text-[9px] px-1.5 py-0.5 bg-[#C0C0C0] border border-t-[#808080] border-l-[#808080] border-b-white border-r-white font-bold text-black">
          {status}
        </span>
      )}
    </div>
  );
}
\`\`\``,
};

// ============================================================================
// 4. BAUHAUS CONSTRUCTIVIST ENGINE (Hard-Contour Geometric Planes)
// ============================================================================
const bauhausEngine: DesignEngine = {
  id: 'bauhaus',
  name: 'Bauhaus Constructivist Engine',
  description: 'Primary cadmium red, yellow, and black with 3px solid black contours and hard offset drop shadows.',
  getStyles: (selection) => {
    const { font } = selection;
    return {
      id: 'bauhaus',
      card: {
        backgroundColor: '#FFFFFF',
        borderColor: '#000000',
        borderWidth: '3px',
        borderRadius: '0px',
        boxShadow: '6px 6px 0px #000000',
        fontFamily: font.fontFamily,
      },
      cardClassName: 'border-3 border-black transition-all',
      subCard: {
        backgroundColor: '#FFFFFF',
        borderColor: '#000000',
        borderWidth: '2px',
        borderRadius: '0px',
        boxShadow: '3px 3px 0px #000000',
      },
      subCardClassName: 'border-2 border-black transition-all',

      inputOuter: {},
      inputOuterClassName: 'w-full',
      inputInner: {
        backgroundColor: '#FFFFFF',
        borderColor: '#000000',
        borderWidth: '3px',
        borderRadius: '0px',
        color: '#000000',
        boxShadow: '3px 3px 0px #000000',
      },
      inputInnerClassName: 'w-full h-10 px-3 flex items-center gap-2 border-3 border-black font-bold text-xs outline-none',
      inputTextColor: '#000000',
      inputPlaceholderColor: '#666666',

      primaryButton: {
        backgroundColor: '#D90429',
        color: '#FFFFFF',
        borderRadius: '0px',
        border: '3px solid #000000',
        boxShadow: '3px 3px 0px #000000',
      },
      primaryButtonClassName: 'h-9 px-4 font-black uppercase tracking-wider text-xs inline-flex items-center justify-center gap-1.5 whitespace-nowrap border-3 border-black shadow-[3px_3px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none cursor-pointer rounded-none',
      secondaryButton: {
        backgroundColor: '#FFD000',
        color: '#000000',
        borderRadius: '0px',
        border: '3px solid #000000',
        boxShadow: '3px 3px 0px #000000',
      },
      secondaryButtonClassName: 'h-9 px-4 font-black uppercase tracking-wider text-xs inline-flex items-center justify-center gap-1.5 whitespace-nowrap border-3 border-black shadow-[3px_3px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none cursor-pointer rounded-none',

      toggleTrack: (active) => ({
        backgroundColor: active ? '#D90429' : '#FFFFFF',
        borderColor: '#000000',
        borderWidth: '2px',
        borderRadius: '0px',
        boxShadow: active ? '2px 2px 0px #000000' : 'none',
      }),
      toggleTrackClassName: () => 'w-10 h-5 relative cursor-pointer transition-all duration-200 border-2 border-black flex items-center p-0.5 rounded-none',
      toggleThumb: (active) => ({
        transform: active ? 'translateX(18px)' : 'translateX(2px)',
        backgroundColor: active ? '#FFFFFF' : '#000000',
        borderRadius: '0px',
      }),
      toggleThumbClassName: () => 'w-3.5 h-3.5 transition-transform duration-200',

      selectTrigger: () => ({
        backgroundColor: '#FFFFFF',
        borderColor: '#000000',
        borderWidth: '3px',
        borderRadius: '0px',
        color: '#000000',
        boxShadow: '3px 3px 0px #000000',
      }),
      selectTriggerClassName: () => 'w-full h-10 px-3 flex items-center justify-between text-left text-xs font-bold transition-all cursor-pointer relative border-3 border-black rounded-none',
      selectMenu: {
        backgroundColor: '#FFFFFF',
        borderColor: '#000000',
        borderWidth: '3px',
        borderRadius: '0px',
        boxShadow: '4px 4px 0px #000000',
      },
      selectMenuClassName: 'absolute top-full left-0 right-0 mt-2 border-3 border-black p-1 z-50 max-h-52 overflow-y-auto rounded-none',
      selectItem: (selected) => ({
        backgroundColor: selected ? '#D90429' : 'transparent',
        color: selected ? '#FFFFFF' : '#000000',
        borderRadius: '0px',
      }),
      selectItemClassName: () => 'w-full px-2.5 py-1.5 text-xs font-bold text-left flex items-center justify-between cursor-pointer rounded-none hover:bg-black/5',
      selectItemText: (selected) => ({
        titleColor: selected ? '#FFFFFF' : '#000000',
        metaColor: selected ? '#FFD000' : '#444444',
        checkColor: '#FFFFFF',
      }),

      checkboxItem: () => ({
        backgroundColor: '#FFFFFF',
        borderColor: '#000000',
        borderWidth: '2px',
        borderRadius: '0px',
      }),
      checkboxBox: (checked) => ({
        backgroundColor: checked ? '#D90429' : '#FFFFFF',
        borderColor: '#000000',
        borderWidth: '2px',
        borderRadius: '0px',
        boxShadow: checked ? '2px 2px 0px #000000' : 'none',
        color: '#FFFFFF',
      }),
      checkboxBoxClassName: () => 'w-5 h-5 flex items-center justify-center transition-all flex-shrink-0 border-2 border-black rounded-none',

      radioOption: (selected) => ({
        backgroundColor: selected ? '#D90429' : '#FFFFFF',
        borderColor: '#000000',
        borderWidth: '2px',
        borderRadius: '0px',
        boxShadow: selected ? '2px 2px 0px #000000' : 'none',
      }),
      radioOptionTextColor: (selected) => (selected ? '#FFFFFF' : '#000000'),

      sliderAccentColor: '#D90429',

      tabPill: (active) => ({
        backgroundColor: active ? '#D90429' : 'transparent',
        borderRadius: '0px',
        boxShadow: active ? '2px 2px 0px #000000' : 'none',
      }),
      tabTextColor: (active) => (active ? '#FFFFFF' : '#000000'),
    };
  },
  getBlueprints: () => `### Exact Component Blueprints (Ready-to-Use React & Tailwind)
\`\`\`tsx
// Bauhaus Constructivist Hard-Contour Components (Cadmium Primaries & 3px Solid Black Borders)

// 1. Geometric Plane Container
export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={\`bg-white border-3 border-black p-6 shadow-[6px_6px_0px_#000000] rounded-none \${className}\`}>
      {children}
    </div>
  );
}

// 2. High-Contrast Cadmium Badge
export function Badge({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={\`h-7 px-3 bg-black text-white font-black uppercase text-[10px] tracking-wider inline-flex items-center border-2 border-black shadow-[2px_2px_0px_#D90429] rounded-none \${className}\`}>
      {children}
    </span>
  );
}

// 3. Constructivist Segmented Tabs
export function Tabs({ tabs, activeTab, onChange }: { tabs: string[]; activeTab: string; onChange: (tab: string) => void }) {
  return (
    <div className="border-3 border-black p-1 bg-white inline-flex items-center gap-1 shadow-[3px_3px_0px_#000000]">
      {tabs.map((tab) => {
        const active = activeTab === tab;
        return (
          <button
            key={tab}
            type="button"
            onClick={() => onChange(tab)}
            className={\`h-7 px-3 text-xs font-black uppercase tracking-wider cursor-pointer transition-all inline-flex items-center justify-center whitespace-nowrap rounded-none \${
              active
                ? 'bg-[#D90429] text-white shadow-[2px_2px_0px_#000000]'
                : 'text-black hover:bg-black/5'
            }\`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}

// 4. Primary & Secondary Geometric Buttons
export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const bg = variant === 'primary' ? 'bg-[#D90429] text-white' : 'bg-[#FFD000] text-black';
  return (
    <button
      className={\`h-9 px-4 font-black uppercase tracking-wider text-xs inline-flex items-center justify-center gap-1.5 whitespace-nowrap border-3 border-black shadow-[3px_3px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none cursor-pointer rounded-none \${bg} \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
}

// 5. Heavy-Contour Input Box
export function Input({ className = '', ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={\`w-full h-10 px-3 bg-white text-black font-bold text-xs border-3 border-black outline-none shadow-[3px_3px_0px_#000000] rounded-none flex items-center \${className}\`}
      {...props}
    />
  );
}

// 6. Solid Outline Custom Select Dropdown
export function Select({ value, options, onChange }: { value: string; options: { label: string; meta?: string }[]; onChange: (v: string) => void }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full h-10 px-3 bg-white text-black text-xs font-black tracking-wider uppercase border-3 border-black shadow-[3px_3px_0px_#000000] flex items-center justify-between cursor-pointer rounded-none"
      >
        <span className="truncate">{value}</span>
        <span className="font-black text-sm">▼</span>
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-3 border-black p-1 z-50 shadow-[4px_4px_0px_#000000] max-h-52 overflow-y-auto rounded-none">
          {options.map((opt) => (
            <button
              key={opt.label}
              type="button"
              onClick={() => { onChange(opt.label); setOpen(false); }}
              className={\`w-full px-2.5 py-1.5 text-xs font-bold text-left flex items-center justify-between cursor-pointer rounded-none \${
                opt.label === value ? 'bg-[#D90429] text-white' : 'text-black hover:bg-black/5'
              }\`}
            >
              <span>{opt.label}</span>
              {opt.meta && <span className={\`text-[10px] \${opt.label === value ? 'text-[#FFD000]' : 'text-black/60'}\`}>{opt.meta}</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// 7. Mechanical Hard-Stop Toggle Switch
export function Toggle({ checked, onChange, label }: { checked: boolean; onChange: () => void; label?: string }) {
  return (
    <div className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={onChange}
        className={\`w-10 h-5 relative cursor-pointer border-2 border-black flex items-center p-0.5 rounded-none \${
          checked ? 'bg-[#D90429] shadow-[2px_2px_0px_#000000]' : 'bg-white'
        }\`}
      >
        <div className={\`w-3.5 h-3.5 rounded-none transition-transform duration-150 \${
          checked ? 'translate-x-[18px] bg-white' : 'translate-x-0 bg-black'
        }\`} />
      </button>
      {label && <span className="text-xs font-black uppercase text-black">{label}</span>}
    </div>
  );
}

// 8. Solid Black Frame Checkbox
export function Checkbox({ checked, onChange, label }: { checked: boolean; onChange: () => void; label?: string }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className="w-full h-10 px-3 bg-white border-2 border-black shadow-[2px_2px_0px_#000000] flex items-center gap-2 cursor-pointer rounded-none text-left select-none"
    >
      <div className={\`w-5 h-5 flex items-center justify-center border-2 border-black rounded-none flex-shrink-0 font-black text-xs \${
        checked ? 'bg-[#D90429] text-white shadow-[2px_2px_0px_#000000]' : 'bg-white text-black'
      }\`}>
        {checked && '✓'}
      </div>
      {label && <span className="text-xs font-black uppercase text-black truncate">{label}</span>}
    </button>
  );
}

// 9. Primary Cadmium Radio Group
export function RadioGroup({ value, options, onChange }: { value: string; options: { id: string; label: string; desc?: string }[]; onChange: (id: string) => void }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {options.map((opt) => {
        const isSel = value === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className={\`w-full h-14 p-2 border-2 border-black flex flex-col items-center justify-center gap-0.5 cursor-pointer rounded-none transition-all \${
              isSel ? 'bg-[#D90429] text-white shadow-[3px_3px_0px_#000000]' : 'bg-white text-black shadow-[2px_2px_0px_#000000]'
            }\`}
          >
            <div className="flex items-center gap-1.5">
              <div className="w-3.5 h-3.5 border-2 border-black rounded-none flex items-center justify-center bg-white">
                {isSel && <div className="w-1.5 h-1.5 bg-black" />}
              </div>
              <span className="font-black uppercase text-xs">{opt.label}</span>
            </div>
            {opt.desc && <span className={\`text-[10px] font-mono uppercase \${isSel ? 'text-[#FFD000]' : 'text-black/60'}\`}>{opt.desc}</span>}
          </button>
        );
      })}
    </div>
  );
}

// 10. Constructivist Potentiometer Slider
export function Slider({ value, onChange, label }: { value: number; onChange: (val: number) => void; label?: string }) {
  return (
    <div className="p-3.5 bg-white border-2 border-black shadow-[3px_3px_0px_#000000] flex flex-col gap-2 rounded-none">
      <div className="flex items-center justify-between text-xs font-black uppercase text-black">
        <span>{label ?? 'Intensity Modulation'}</span>
        <span className="text-[#D90429] font-mono">{value}%</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 cursor-pointer rounded-none"
        style={{ accentColor: '#D90429' }}
      />
    </div>
  );
}

// 11. Heavy-Offset Stat Tile
export function StatCard({ title, value, status, icon }: { title: string; value: string; status?: string; icon?: React.ReactNode }) {
  return (
    <div className="h-14 p-3 bg-white border-2 border-black shadow-[3px_3px_0px_#000000] flex items-center justify-between rounded-none">
      <div className="flex items-center gap-2">
        {icon && <span className="text-[#D90429]">{icon}</span>}
        <div className="flex flex-col text-xs">
          <span className="font-black uppercase text-black">{title}</span>
          <span className="text-[10px] font-mono text-black/70">{value}</span>
        </div>
      </div>
      {status && (
        <span className="text-[9px] font-black uppercase px-2 py-0.5 bg-black text-white border border-black">
          {status}
        </span>
      )}
    </div>
  );
}
\`\`\``,
};

// ============================================================================
// 5. NEUMORPHISM ENGINE (Soft UI Periwinkle & Mono Extrusion)
// ============================================================================
const neumorphismEngine: DesignEngine = {
  id: 'neumorphism',
  name: 'Neumorphism Soft UI Engine',
  description: 'Extruded tactile surfaces, opposing dual lighting, and debossed inner cavity wells.',
  getStyles: (selection) => {
    const { palette, font } = selection;
    return {
      id: 'neumorphism',
      card: {
        backgroundColor: palette.background,
        borderColor: 'transparent',
        borderWidth: '0px',
        borderRadius: '24px',
        boxShadow: '12px 12px 24px rgba(180, 185, 210, 0.5), -12px -12px 24px rgba(255, 255, 255, 0.95)',
        fontFamily: font.fontFamily,
      },
      cardClassName: 'transition-all border-0',
      subCard: {
        backgroundColor: palette.background,
        borderRadius: '16px',
        boxShadow: '4px 4px 10px rgba(180, 185, 210, 0.45), -4px -4px 10px rgba(255, 255, 255, 0.95)',
      },
      subCardClassName: 'border-0 transition-all',

      inputOuter: {},
      inputOuterClassName: 'w-full',
      inputInner: {
        backgroundColor: palette.background,
        borderRadius: '14px',
        boxShadow: 'inset 3px 3px 6px rgba(180, 185, 210, 0.45), inset -3px -3px 6px rgba(255, 255, 255, 0.95)',
        color: palette.text,
      },
      inputInnerClassName: 'w-full h-10 px-3.5 flex items-center gap-2 border-0 outline-none',
      inputTextColor: palette.text,
      inputPlaceholderColor: palette.textMuted,

      primaryButton: {
        backgroundColor: palette.primary,
        color: '#FFFFFF',
        borderRadius: '14px',
        boxShadow: '4px 4px 10px rgba(180, 185, 210, 0.45), -4px -4px 10px rgba(255, 255, 255, 0.95)',
      },
      primaryButtonClassName: 'h-9 px-4 font-bold text-xs inline-flex items-center justify-center gap-1.5 whitespace-nowrap transition-all active:scale-95 cursor-pointer border-0',
      secondaryButton: {
        backgroundColor: palette.background,
        color: palette.text,
        borderRadius: '14px',
        boxShadow: '4px 4px 10px rgba(180, 185, 210, 0.45), -4px -4px 10px rgba(255, 255, 255, 0.95)',
      },
      secondaryButtonClassName: 'h-9 px-4 font-bold text-xs inline-flex items-center justify-center gap-1.5 whitespace-nowrap transition-all active:scale-95 cursor-pointer border-0',

      toggleTrack: (active) => ({
        backgroundColor: active ? palette.primary : palette.background,
        borderRadius: '9999px',
        boxShadow: active
          ? 'inset 2px 2px 5px rgba(0, 0, 0, 0.3), inset -2px -2px 5px rgba(255, 255, 255, 0.2)'
          : 'inset 2px 2px 5px rgba(180, 185, 210, 0.45), inset -2px -2px 5px rgba(255, 255, 255, 0.95)',
      }),
      toggleTrackClassName: () => 'w-11 h-6 rounded-full relative cursor-pointer transition-all duration-200 p-0.5 flex items-center border-0',
      toggleThumb: (active) => ({
        transform: active ? 'translateX(20px)' : 'translateX(0px)',
        backgroundColor: active ? '#FFFFFF' : palette.background,
        boxShadow: '2px 2px 5px rgba(180, 185, 210, 0.45), -2px -2px 5px rgba(255, 255, 255, 0.95)',
      }),
      toggleThumbClassName: () => 'w-5 h-5 rounded-full transition-transform duration-200',

      selectTrigger: (open) => ({
        backgroundColor: palette.background,
        borderRadius: '14px',
        color: palette.text,
        boxShadow: open
          ? 'inset 2px 2px 5px rgba(180, 185, 210, 0.45), inset -2px -2px 5px rgba(255, 255, 255, 0.95)'
          : '3px 3px 8px rgba(180, 185, 210, 0.45), -3px -3px 8px rgba(255, 255, 255, 0.95)',
      }),
      selectTriggerClassName: () => 'w-full h-10 px-3.5 flex items-center justify-between text-left text-xs transition-all cursor-pointer relative border-0',
      selectMenu: {
        backgroundColor: palette.background,
        borderRadius: '16px',
        boxShadow: '6px 6px 16px rgba(180, 185, 210, 0.5), -6px -6px 16px rgba(255, 255, 255, 0.95)',
      },
      selectMenuClassName: 'absolute top-full left-0 right-0 mt-2 p-1.5 z-50 max-h-52 overflow-y-auto border-0',
      selectItem: (selected) => ({
        backgroundColor: selected ? `${palette.primary}18` : 'transparent',
        borderRadius: '10px',
        boxShadow: selected
          ? 'inset 2px 2px 4px rgba(180, 185, 210, 0.4), inset -2px -2px 4px rgba(255, 255, 255, 0.9)'
          : 'none',
      }),
      selectItemClassName: () => 'w-full px-2.5 py-1.5 text-xs text-left flex items-center justify-between cursor-pointer',
      selectItemText: (selected) => ({
        titleColor: selected ? palette.primary : palette.text,
        metaColor: palette.textMuted,
        checkColor: palette.primary,
      }),

      checkboxItem: (checked) => ({
        backgroundColor: palette.background,
        borderRadius: '12px',
        boxShadow: checked
          ? 'inset 2px 2px 4px rgba(180, 185, 210, 0.5), inset -2px -2px 4px rgba(255, 255, 255, 0.95)'
          : '3px 3px 6px rgba(180, 185, 210, 0.45), -3px -3px 6px rgba(255, 255, 255, 0.95)',
      }),
      checkboxBox: (checked) => ({
        backgroundColor: checked ? palette.primary : 'transparent',
        borderRadius: '4px',
        color: '#FFFFFF',
      }),
      checkboxBoxClassName: () => 'w-5 h-5 flex items-center justify-center transition-all flex-shrink-0',

      radioOption: (selected) => ({
        backgroundColor: palette.background,
        borderRadius: '12px',
        boxShadow: selected
          ? 'inset 2px 2px 5px rgba(180, 185, 210, 0.5), inset -2px -2px 5px rgba(255, 255, 255, 0.95)'
          : '3px 3px 6px rgba(180, 185, 210, 0.45), -3px -3px 6px rgba(255, 255, 255, 0.95)',
      }),
      radioOptionTextColor: (selected) => (selected ? palette.primary : palette.text),

      sliderAccentColor: palette.primary,

      tabPill: (active) => ({
        backgroundColor: palette.background,
        borderRadius: '8px',
        boxShadow: active
          ? 'inset 2px 2px 5px rgba(180, 185, 210, 0.45), inset -2px -2px 5px rgba(255, 255, 255, 0.95)'
          : '2px 2px 6px rgba(180, 185, 210, 0.45), -2px -2px 6px rgba(255, 255, 255, 0.95)',
      }),
      tabTextColor: (active) => (active ? palette.primary : palette.textMuted),
    };
  },
  getBlueprints: () => `### Exact Component Blueprints (Ready-to-Use React & Tailwind)
\`\`\`tsx
// Neumorphic Soft UI Components (Extruded Opposing Shadows & Inset Cavities)

// 1. Extruded Surface Container
export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={\`p-6 rounded-[24px] bg-[#E0E5EC] shadow-[12px_12px_24px_rgba(163,177,198,0.6),-12px_-12px_24px_rgba(255,255,255,0.9)] border-0 \${className}\`}>
      {children}
    </div>
  );
}

// 2. Extruded Soft Badge
export function Badge({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={\`h-7 px-3.5 rounded-full bg-[#E0E5EC] shadow-[3px_3px_6px_rgba(163,177,198,0.6),-3px_-3px_6px_rgba(255,255,255,0.9)] text-[#4D65FF] font-bold text-[10px] inline-flex items-center gap-1.5 border-0 \${className}\`}>
      {children}
    </span>
  );
}

// 3. Sunken Inset Segmented Tabs
export function Tabs({ tabs, activeTab, onChange }: { tabs: string[]; activeTab: string; onChange: (tab: string) => void }) {
  return (
    <div className="p-1 rounded-xl bg-[#E0E5EC] shadow-[inset_3px_3px_6px_rgba(163,177,198,0.5),inset_-3px_-3px_6px_rgba(255,255,255,0.9)] inline-flex items-center gap-1">
      {tabs.map((tab) => {
        const active = activeTab === tab;
        return (
          <button
            key={tab}
            type="button"
            onClick={() => onChange(tab)}
            className={\`h-7 px-3 rounded-lg text-xs font-bold cursor-pointer transition-all inline-flex items-center justify-center whitespace-nowrap border-0 \${
              active
                ? 'bg-[#E0E5EC] text-[#4D65FF] shadow-[3px_3px_6px_rgba(163,177,198,0.6),-3px_-3px_6px_rgba(255,255,255,0.9)]'
                : 'text-slate-500 hover:text-slate-800'
            }\`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}

// 4. Tactile Push-Button (Primary & Secondary)
export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const styles = variant === 'primary'
    ? 'bg-[#4D65FF] text-white shadow-[4px_4px_10px_rgba(77,101,255,0.4),-4px_-4px_10px_rgba(255,255,255,0.9)]'
    : 'bg-[#E0E5EC] text-slate-800 shadow-[4px_4px_10px_rgba(163,177,198,0.6),-4px_-4px_10px_rgba(255,255,255,0.9)] active:shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.9)]';
  return (
    <button
      className={\`h-9 px-4 rounded-xl font-bold text-xs inline-flex items-center justify-center gap-1.5 whitespace-nowrap transition-all active:scale-98 cursor-pointer border-0 \${styles} \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
}

// 5. Inset Cavity Input Well
export function Input({ className = '', ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={\`w-full h-10 px-4 rounded-xl bg-[#E0E5EC] text-xs text-slate-800 shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.9)] outline-none flex items-center border-0 placeholder:text-slate-400 \${className}\`}
      {...props}
    />
  );
}

// 6. Extruded Custom Select Dropdown
export function Select({ value, options, onChange }: { value: string; options: { label: string; meta?: string }[]; onChange: (v: string) => void }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={\`w-full h-10 px-4 rounded-xl bg-[#E0E5EC] text-xs font-bold text-slate-800 flex items-center justify-between border-0 cursor-pointer \${
          open
            ? 'shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.9)]'
            : 'shadow-[3px_3px_8px_rgba(163,177,198,0.6),-3px_-3px_8px_rgba(255,255,255,0.9)]'
        }\`}
      >
        <span>{value}</span>
        <span className="text-slate-400">▾</span>
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 p-2 rounded-2xl bg-[#E0E5EC] shadow-[6px_6px_16px_rgba(163,177,198,0.6),-6px_-6px_16px_rgba(255,255,255,0.9)] z-50 space-y-1 border-0">
          {options.map((opt) => (
            <button
              key={opt.label}
              type="button"
              onClick={() => { onChange(opt.label); setOpen(false); }}
              className={\`w-full px-3 py-2 text-xs rounded-xl flex items-center justify-between text-left cursor-pointer border-0 \${
                opt.label === value
                  ? 'text-[#4D65FF] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.5),inset_-2px_-2px_4px_rgba(255,255,255,0.9)]'
                  : 'text-slate-700 hover:text-slate-900'
              }\`}
            >
              <span>{opt.label}</span>
              {opt.meta && <span className="text-[10px] text-slate-400">{opt.meta}</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// 7. Sunken Opposing Toggle Switch
export function Toggle({ checked, onChange, label }: { checked: boolean; onChange: () => void; label?: string }) {
  return (
    <div className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={onChange}
        className={\`w-11 h-6 rounded-full p-0.5 flex items-center transition-all cursor-pointer border-0 \${
          checked
            ? 'bg-[#4D65FF] shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.2)]'
            : 'bg-[#E0E5EC] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.9)]'
        }\`}
      >
        <div className={\`w-5 h-5 rounded-full transition-transform duration-200 \${
          checked
            ? 'translate-x-[20px] bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.25)]'
            : 'translate-x-0 bg-[#E0E5EC] shadow-[2px_2px_5px_rgba(163,177,198,0.6),-2px_-2px_5px_rgba(255,255,255,0.9)]'
        }\`} />
      </button>
      {label && <span className="text-xs font-semibold text-slate-700">{label}</span>}
    </div>
  );
}

// 8. Tactile Extruded Checkbox
export function Checkbox({ checked, onChange, label }: { checked: boolean; onChange: () => void; label?: string }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={\`w-full h-10 px-3.5 rounded-xl bg-[#E0E5EC] border-0 flex items-center gap-2 cursor-pointer transition-all text-left select-none \${
        checked
          ? 'shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.9)]'
          : 'shadow-[3px_3px_6px_rgba(163,177,198,0.6),-3px_-3px_6px_rgba(255,255,255,0.9)]'
      }\`}
    >
      <div className={\`w-5 h-5 rounded-md flex items-center justify-center transition-all flex-shrink-0 \${
        checked ? 'bg-[#4D65FF] text-white shadow-[1px_1px_3px_rgba(0,0,0,0.2)]' : 'bg-[#E0E5EC] shadow-[inset_1px_1px_2px_rgba(163,177,198,0.6),inset_-1px_-1px_2px_rgba(255,255,255,0.9)]'
      }\`}>
        {checked && '✓'}
      </div>
      {label && <span className="text-xs font-semibold text-slate-800 truncate">{label}</span>}
    </button>
  );
}

// 9. Neumorphic Radio Option Group
export function RadioGroup({ value, options, onChange }: { value: string; options: { id: string; label: string; desc?: string }[]; onChange: (id: string) => void }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {options.map((opt) => {
        const isSel = value === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className={\`w-full h-14 p-2 rounded-xl bg-[#E0E5EC] border-0 flex flex-col items-center justify-center gap-0.5 cursor-pointer transition-all \${
              isSel
                ? 'shadow-[inset_2px_2px_5px_rgba(163,177,198,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.9)] text-[#4D65FF]'
                : 'shadow-[3px_3px_6px_rgba(163,177,198,0.6),-3px_-3px_6px_rgba(255,255,255,0.9)] text-slate-800'
            }\`}
          >
            <div className="flex items-center gap-1.5">
              <div className={\`w-4 h-4 rounded-full flex items-center justify-center \${
                isSel
                  ? 'shadow-[inset_1px_1px_2px_rgba(163,177,198,0.6)]'
                  : 'shadow-[1px_1px_2px_rgba(163,177,198,0.6),-1px_-1px_2px_rgba(255,255,255,0.9)]'
              }\`}>
                {isSel && <div className="w-2 h-2 rounded-full bg-[#4D65FF]" />}
              </div>
              <span className="font-bold text-xs">{opt.label}</span>
            </div>
            {opt.desc && <span className="text-[10px] text-slate-400 font-mono">{opt.desc}</span>}
          </button>
        );
      })}
    </div>
  );
}

// 10. Inset Channel Potentiometer Slider
export function Slider({ value, onChange, label }: { value: number; onChange: (val: number) => void; label?: string }) {
  return (
    <div className="p-3.5 rounded-2xl bg-[#E0E5EC] shadow-[4px_4px_10px_rgba(163,177,198,0.6),-4px_-4px_10px_rgba(255,255,255,0.9)] border-0 flex flex-col gap-2">
      <div className="flex items-center justify-between text-xs font-bold text-slate-800">
        <span>{label ?? 'Intensity Modulation'}</span>
        <span className="text-[#4D65FF] font-mono">{value}%</span>
      </div>
      <div className="w-full h-3 rounded-full bg-[#E0E5EC] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.9)] flex items-center p-0.5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-[#4D65FF] shadow-[0_1px_2px_rgba(77,101,255,0.4)]"
          style={{ width: \`\${value}%\` }}
        />
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 cursor-pointer"
        style={{ accentColor: '#4D65FF' }}
      />
    </div>
  );
}

// 11. Extruded Telemetry Stat Card
export function StatCard({ title, value, status, icon }: { title: string; value: string; status?: string; icon?: React.ReactNode }) {
  return (
    <div className="h-14 p-3 rounded-xl bg-[#E0E5EC] shadow-[3px_3px_8px_rgba(163,177,198,0.6),-3px_-3px_8px_rgba(255,255,255,0.9)] border-0 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {icon && <span className="text-[#4D65FF]">{icon}</span>}
        <div className="flex flex-col text-xs">
          <span className="font-bold text-slate-800">{title}</span>
          <span className="text-[10px] text-slate-500 font-mono">{value}</span>
        </div>
      </div>
      {status && (
        <span className="text-[9px] font-mono px-2 py-0.5 rounded-full shadow-[inset_1px_1px_2px_rgba(163,177,198,0.6),inset_-1px_-1px_2px_rgba(255,255,255,0.9)] text-[#4D65FF] font-bold">
          {status}
        </span>
      )}
    </div>
  );
}

// Aliases for backwards compatibility
export { Card as SoftCard, Button as SoftButton, Input as SoftInput };
\`\`\``,
};

// ============================================================================
// 6. MODERN SAAS ENGINE (Universal Digital Precision - Stripe, Linear, etc.)
// ============================================================================
const modernSaasEngine: DesignEngine = {
  id: 'modern-saas',
  name: 'Modern SaaS Precision Engine',
  description: 'Digital precision with optical hairline borders, calibrated elevations, and high-contrast accessible controls.',
  getStyles: (selection) => {
    const { palette, surface, font } = selection;
    const isDark = palette.isDark;

    return {
      id: 'modern-saas',
      card: {
        backgroundColor: palette.surface,
        borderColor: palette.border,
        borderWidth: surface.borderWidth,
        borderRadius: surface.radius,
        boxShadow: surface.shadow,
        fontFamily: font.fontFamily,
      },
      cardClassName: 'border transition-all',
      subCard: {
        backgroundColor: isDark ? `${palette.surface}` : '#FFFFFF',
        borderColor: `${palette.border}77`,
        borderWidth: '1px',
        borderRadius: surface.radius === '9999px' ? '16px' : surface.radius === '0px' ? '0px' : '8px',
        boxShadow: isDark ? '0 4px 12px rgba(0, 0, 0, 0.3)' : '0 1px 3px rgba(0, 0, 0, 0.05)',
      },
      subCardClassName: 'border transition-all',

      inputOuter: {},
      inputOuterClassName: 'w-full',
      inputInner: {
        backgroundColor: palette.background,
        borderColor: `${palette.border}77`,
        borderWidth: '1px',
        borderRadius: surface.radius === '9999px' ? '9999px' : surface.radius === '0px' ? '0px' : '8px',
        color: palette.text,
      },
      inputInnerClassName: 'w-full h-10 px-3 flex items-center gap-2 border text-xs outline-none transition-all',
      inputTextColor: palette.text,
      inputPlaceholderColor: palette.textMuted,

      primaryButton: {
        backgroundColor: palette.primary,
        color: isDark ? '#000000' : '#FFFFFF',
        borderRadius: surface.radius === '9999px' ? '9999px' : surface.radius === '0px' ? '0px' : '8px',
        boxShadow: `0 2px 8px ${palette.primary}40`,
      },
      primaryButtonClassName: 'h-9 px-4 font-semibold text-xs inline-flex items-center justify-center gap-1.5 whitespace-nowrap transition-all active:scale-95 cursor-pointer',
      secondaryButton: {
        backgroundColor: isDark ? `${palette.surface}` : '#FFFFFF',
        color: palette.text,
        borderColor: palette.border,
        borderWidth: '1px',
        borderRadius: surface.radius === '9999px' ? '9999px' : surface.radius === '0px' ? '0px' : '8px',
      },
      secondaryButtonClassName: 'h-9 px-4 font-semibold text-xs inline-flex items-center justify-center gap-1.5 whitespace-nowrap transition-all active:scale-95 cursor-pointer border hover:opacity-90',

      toggleTrack: (active) => ({
        backgroundColor: active
          ? palette.primary
          : isDark
          ? `${palette.border}88`
          : '#CBD5E1',
        borderColor: isDark ? palette.border : '#94A3B8',
        borderWidth: '1px',
        boxShadow: active
          ? `0 0 8px ${palette.primary}66`
          : 'inset 0 1px 2px rgba(0,0,0,0.15)',
      }),
      toggleTrackClassName: () => 'w-9 h-4.5 rounded-full relative cursor-pointer transition-all duration-200 border',
      toggleThumb: (active) => ({
        transform: active ? 'translateX(18px)' : 'translateX(2px)',
        boxShadow: '0 1.5px 3px rgba(0,0,0,0.25)',
      }),
      toggleThumbClassName: () => 'w-3 h-3 rounded-full bg-white absolute top-0.5 transition-transform duration-200 shadow-xs',

      selectTrigger: (open) => ({
        backgroundColor: palette.background,
        borderColor: open ? palette.primary : `${palette.border}77`,
        borderWidth: '1px',
        borderRadius: surface.radius === '9999px' ? '9999px' : surface.radius === '0px' ? '0px' : '8px',
        color: palette.text,
        boxShadow: open ? `0 0 0 2px ${palette.primary}33` : 'none',
      }),
      selectTriggerClassName: () => 'w-full h-10 px-3 flex items-center justify-between text-left text-xs transition-all cursor-pointer relative border',
      selectMenu: {
        backgroundColor: isDark ? '#141416' : '#FFFFFF',
        borderColor: palette.border,
        borderWidth: '1px',
        borderRadius: surface.radius === '9999px' ? '14px' : surface.radius === '0px' ? '0px' : '8px',
        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
      },
      selectMenuClassName: 'absolute top-full left-0 right-0 mt-2 border p-1 overflow-hidden z-50 space-y-0.5 shadow-2xl max-h-52 overflow-y-auto',
      selectItem: (selected) => ({
        backgroundColor: selected
          ? isDark
            ? `${palette.primary}25`
            : `${palette.primary}18`
          : 'transparent',
        border: selected ? `1px solid ${palette.primary}44` : '1px solid transparent',
        borderRadius: surface.radius === '9999px' ? '9999px' : surface.radius === '0px' ? '0px' : '6px',
      }),
      selectItemClassName: () => 'w-full px-2.5 py-1.5 text-xs text-left flex items-center justify-between cursor-pointer transition-all rounded hover:bg-black/5 dark:hover:bg-white/5',
      selectItemText: (selected) => ({
        titleColor: selected ? palette.primary : palette.text,
        metaColor: selected ? (isDark ? `${palette.primary}CC` : `${palette.text}99`) : palette.textMuted,
        checkColor: palette.primary,
      }),

      checkboxItem: (checked) => ({
        backgroundColor: checked ? `${palette.primary}18` : 'transparent',
        borderColor: checked ? palette.primary : `${palette.border}77`,
        borderWidth: '1px',
        borderRadius: surface.radius === '9999px' ? '9999px' : surface.radius === '0px' ? '0px' : '8px',
      }),
      checkboxBox: (checked) => ({
        backgroundColor: checked ? palette.primary : 'transparent',
        borderColor: checked ? palette.primary : `${palette.text}66`,
        borderWidth: '1px',
        borderRadius: surface.radius === '0px' ? '0px' : '3px',
        color: '#FFFFFF',
      }),
      checkboxBoxClassName: () => 'w-5 h-5 flex items-center justify-center transition-all flex-shrink-0 border',

      radioOption: (selected) => ({
        backgroundColor: selected ? `${palette.primary}18` : palette.background,
        borderColor: selected ? palette.primary : `${palette.border}77`,
        borderWidth: '1px',
        borderRadius: surface.radius === '9999px' ? '9999px' : surface.radius === '0px' ? '0px' : '8px',
      }),
      radioOptionTextColor: (selected) => (selected ? palette.primary : palette.text),

      sliderAccentColor: palette.primary,

      tabPill: (active) => ({
        backgroundColor: active ? palette.primary : 'transparent',
        borderRadius: surface.radius === '9999px' ? '9999px' : surface.radius === '0px' ? '0px' : '8px',
        boxShadow: active ? `0 2px 8px ${palette.primary}55` : 'none',
      }),
      tabTextColor: (active) => (active ? (isDark ? '#000000' : '#FFFFFF') : palette.text),
    };
  },
  getBlueprints: (selection) => {
    const { palette, surface, components } = selection;
    const isDark = palette.isDark;
    return `### Exact Component Blueprints (Ready-to-Use React & Tailwind)
\`\`\`tsx
// Modern Digital Precision UI Components (Calibrated Hairline Borders & High-Contrast Tokens)

// 1. Surface Card Container
export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={\`p-6 transition-all \${className}\`} style={{ backgroundColor: '${palette.surface}', borderColor: '${palette.border}', borderWidth: '${surface.borderWidth}', borderRadius: '${surface.radius}', boxShadow: '${surface.shadow}' }}>
      {children}
    </div>
  );
}

// 2. Status Badge
export function Badge({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={\`h-7 px-3 inline-flex items-center gap-1.5 text-[10px] font-mono font-bold transition-all \${className}\`}
      style={{
        backgroundColor: '${palette.primary}18',
        borderColor: '${palette.primary}44',
        borderWidth: '1px',
        borderRadius: '${surface.radius === '9999px' ? '9999px' : surface.radius === '0px' ? '0px' : '6px'}',
        color: '${palette.primary}',
      }}
    >
      {children}
    </span>
  );
}

// 3. Segmented Navigation Tabs
export function Tabs({ tabs, activeTab, onChange }: { tabs: string[]; activeTab: string; onChange: (tab: string) => void }) {
  return (
    <div
      className="p-1 inline-flex items-center gap-1 border transition-all"
      style={{
        backgroundColor: '${palette.background}',
        borderColor: '${palette.border}77',
        borderRadius: '${surface.radius}',
      }}
    >
      {tabs.map((tab) => {
        const active = activeTab === tab;
        return (
          <button
            key={tab}
            type="button"
            onClick={() => onChange(tab)}
            className="h-7 px-3 text-xs font-semibold cursor-pointer transition-all inline-flex items-center justify-center whitespace-nowrap"
            style={{
              backgroundColor: active ? '${palette.primary}' : 'transparent',
              color: active ? '${isDark ? '#000000' : '#FFFFFF'}' : '${palette.text}',
              borderRadius: '${surface.radius === '9999px' ? '9999px' : surface.radius === '0px' ? '0px' : '6px'}',
              boxShadow: active ? '0 2px 8px ${palette.primary}55' : 'none',
            }}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}

// 4. Action Buttons (Primary & Secondary)
export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const isPri = variant === 'primary';
  return (
    <button
      className={\`h-9 px-4 font-semibold text-xs inline-flex items-center justify-center gap-1.5 whitespace-nowrap ${components.buttonClass} transition-all active:scale-95 cursor-pointer \${
        isPri ? '' : 'border hover:opacity-90'
      } \${className}\`}
      style={{
        backgroundColor: isPri ? '${palette.primary}' : '${isDark ? palette.surface : '#FFFFFF'}',
        color: isPri ? '${isDark ? '#000000' : '#FFFFFF'}' : '${palette.text}',
        borderColor: isPri ? undefined : '${palette.border}',
        borderWidth: isPri ? undefined : '1px',
        borderRadius: '${surface.radius}',
        boxShadow: isPri ? '0 2px 8px ${palette.primary}40' : undefined,
      }}
      {...props}
    >
      {children}
    </button>
  );
}

// 5. Form & Search Input
export function Input({ className = '', ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={\`w-full h-10 px-3 text-xs outline-none transition-all flex items-center border \${className}\`}
      style={{
        backgroundColor: '${palette.background}',
        borderColor: '${palette.border}',
        borderWidth: '${surface.borderWidth}',
        borderRadius: '${surface.radius}',
        color: '${palette.text}',
      }}
      {...props}
    />
  );
}

// 6. Custom Select Dropdown
export function Select({ value, options, onChange }: { value: string; options: { label: string; meta?: string }[]; onChange: (v: string) => void }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full h-10 px-3 flex items-center justify-between text-left text-xs transition-all cursor-pointer border"
        style={{
          backgroundColor: '${palette.background}',
          borderColor: open ? '${palette.primary}' : '${palette.border}77',
          borderRadius: '${surface.radius}',
          color: '${palette.text}',
          boxShadow: open ? '0 0 0 2px ${palette.primary}33' : 'none',
        }}
      >
        <span className="truncate">{value}</span>
        <span className="text-[10px] opacity-60 ml-2">▾</span>
      </button>
      {open && (
        <div
          className="absolute top-full left-0 right-0 mt-2 border p-1 z-50 space-y-0.5 shadow-2xl max-h-52 overflow-y-auto"
          style={{
            backgroundColor: '${isDark ? '#141416' : '#FFFFFF'}',
            borderColor: '${palette.border}',
            borderRadius: '${surface.radius}',
          }}
        >
          {options.map((opt) => (
            <button
              key={opt.label}
              type="button"
              onClick={() => { onChange(opt.label); setOpen(false); }}
              className="w-full px-2.5 py-1.5 text-xs text-left flex items-center justify-between cursor-pointer transition-all rounded hover:bg-black/5 dark:hover:bg-white/5"
              style={{
                backgroundColor: opt.label === value ? '${palette.primary}20' : 'transparent',
                color: opt.label === value ? '${palette.primary}' : '${palette.text}',
              }}
            >
              <span>{opt.label}</span>
              {opt.meta && <span className="text-[10px] opacity-60">{opt.meta}</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// 7. Micro-Engineered Toggle Switch
export function Toggle({ checked, onChange, label }: { checked: boolean; onChange: () => void; label?: string }) {
  return (
    <div className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={onChange}
        className="w-9 h-4.5 rounded-full relative cursor-pointer transition-all border p-0.5"
        style={{
          backgroundColor: checked ? '${palette.primary}' : '${isDark ? `${palette.border}88` : '#CBD5E1'}',
          borderColor: '${isDark ? palette.border : '#94A3B8'}',
          boxShadow: checked ? '0 0 8px ${palette.primary}66' : 'inset 0 1px 2px rgba(0,0,0,0.15)',
        }}
      >
        <div
          className="w-3 h-3 rounded-full bg-white transition-transform duration-200"
          style={{
            transform: checked ? 'translateX(18px)' : 'translateX(0px)',
            boxShadow: '0 1.5px 3px rgba(0,0,0,0.25)',
          }}
        />
      </button>
      {label && <span className="text-xs font-semibold" style={{ color: '${palette.text}' }}>{label}</span>}
    </div>
  );
}

// 8. Token-Styled Checkbox
export function Checkbox({ checked, onChange, label }: { checked: boolean; onChange: () => void; label?: string }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className="w-full h-10 px-3.5 border flex items-center gap-2 cursor-pointer transition-all text-left select-none"
      style={{
        backgroundColor: checked ? '${palette.primary}18' : 'transparent',
        borderColor: checked ? '${palette.primary}' : '${palette.border}77',
        borderRadius: '${surface.radius}',
      }}
    >
      <div
        className="w-4 h-4 flex items-center justify-center transition-all border flex-shrink-0"
        style={{
          backgroundColor: checked ? '${palette.primary}' : 'transparent',
          borderColor: checked ? '${palette.primary}' : '${palette.text}66',
          borderRadius: '${surface.radius === '0px' ? '0px' : '3px'}',
          color: '${isDark ? '#000000' : '#FFFFFF'}',
        }}
      >
        {checked && '✓'}
      </div>
      {label && <span className="text-xs font-semibold truncate" style={{ color: '${palette.text}' }}>{label}</span>}
    </button>
  );
}

// 9. Precision Radio Group
export function RadioGroup({ value, options, onChange }: { value: string; options: { id: string; label: string; desc?: string }[]; onChange: (id: string) => void }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {options.map((opt) => {
        const isSel = value === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className="w-full h-14 p-2 border flex flex-col items-center justify-center gap-0.5 cursor-pointer transition-all text-center select-none"
            style={{
              backgroundColor: isSel ? '${palette.primary}18' : '${palette.background}',
              borderColor: isSel ? '${palette.primary}' : '${palette.border}77',
              borderRadius: '${surface.radius}',
            }}
          >
            <div className="flex items-center gap-1.5">
              <div
                className="w-3.5 h-3.5 rounded-full border flex items-center justify-center"
                style={{
                  borderColor: isSel ? '${palette.primary}' : '${palette.text}66',
                }}
              >
                {isSel && (
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: '${palette.primary}' }}
                  />
                )}
              </div>
              <span className="font-bold text-xs truncate" style={{ color: isSel ? '${palette.primary}' : '${palette.text}' }}>
                {opt.label}
              </span>
            </div>
            {opt.desc && (
              <span className="text-[10px] font-mono opacity-60" style={{ color: '${palette.text}' }}>
                {opt.desc}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

// 10. Accent Modulation Slider
export function Slider({ value, onChange, label }: { value: number; onChange: (val: number) => void; label?: string }) {
  return (
    <div
      className="p-3.5 border flex flex-col gap-2 transition-all"
      style={{
        backgroundColor: '${palette.surface}',
        borderColor: '${palette.border}77',
        borderRadius: '${surface.radius}',
      }}
    >
      <div className="flex items-center justify-between text-xs font-bold" style={{ color: '${palette.text}' }}>
        <span>{label ?? 'Intensity Modulation'}</span>
        <span className="font-mono" style={{ color: '${palette.primary}' }}>{value}%</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 cursor-pointer"
        style={{ accentColor: '${palette.primary}' }}
      />
    </div>
  );
}

// 11. Diagnostic Telemetry Stat Card
export function StatCard({ title, value, status, icon }: { title: string; value: string; status?: string; icon?: React.ReactNode }) {
  return (
    <div
      className="h-14 p-3 border flex items-center justify-between transition-all"
      style={{
        backgroundColor: '${palette.surface}',
        borderColor: '${palette.border}77',
        borderRadius: '${surface.radius}',
      }}
    >
      <div className="flex items-center gap-2.5">
        {icon && <span style={{ color: '${palette.primary}' }}>{icon}</span>}
        <div className="flex flex-col text-xs">
          <span className="font-bold truncate" style={{ color: '${palette.text}' }}>{title}</span>
          <span className="text-[10px] font-mono opacity-60" style={{ color: '${palette.text}' }}>{value}</span>
        </div>
      </div>
      {status && (
        <span
          className="text-[9px] font-mono font-bold px-2 py-0.5 border"
          style={{
            backgroundColor: '${palette.primary}18',
            borderColor: '${palette.primary}55',
            borderRadius: '${surface.radius === '9999px' ? '9999px' : surface.radius === '0px' ? '0px' : '4px'}',
            color: '${palette.primary}',
          }}
        >
          {status}
        </span>
      )}
    </div>
  );
}
\`\`\``;
  },
};

export const DESIGN_ENGINES: Record<DesignEngineId, DesignEngine> = {
  'frosted-glass': frostedGlassEngine,
  claymorphism: claymorphismEngine,
  win95: win95Engine,
  bauhaus: bauhausEngine,
  neumorphism: neumorphismEngine,
  'modern-saas': modernSaasEngine,
};

/**
 * Gets the active Design Engine for a given design parts selection.
 */
export function getDesignEngine(selection: DesignPartsSelection): DesignEngine {
  const engineId = resolveDesignEngineId(selection);
  return DESIGN_ENGINES[engineId] ?? modernSaasEngine;
}
