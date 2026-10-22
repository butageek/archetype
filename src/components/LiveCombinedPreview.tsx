'use client';

import type { CSSProperties } from 'react';
import { useState } from 'react';
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  Check,
  ChevronDown,
  Cpu,
  MoreHorizontal,
  Search,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import { DesignPartsSelection } from '../types/designParts';
import { getDesignEngine } from '../lib/designEngines';

interface LiveCombinedPreviewProps {
  selection: DesignPartsSelection;
}

export function LiveCombinedPreview({ selection }: LiveCombinedPreviewProps) {
  const { palette, font, surface, components, accent } = selection;
  const engine = getDesignEngine(selection);
  const engineStyles = engine.getStyles(selection);

  // Interactive states
  const [sliderVal, setSliderVal] = useState<number>(82);
  const [toggleActive, setToggleActive] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>('System node v4.2 active');
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const [isInputHovered, setIsInputHovered] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'telemetry' | 'controls'>('overview');
  const [engineOnline, setEngineOnline] = useState<boolean>(true);
  const [throughput, setThroughput] = useState<number>(1842);

  // Form interactive states
  const [checkbox1, setCheckbox1] = useState<boolean>(true);
  const [checkbox2, setCheckbox2] = useState<boolean>(false);
  const [selectedRadio, setSelectedRadio] = useState<'standard' | 'turbo' | 'isolated'>('turbo');
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [selectedDropdown, setSelectedDropdown] = useState<string>('US-East (Virginia) // Primary');

  const dropdownOptions = [
    { id: 'us-east', label: 'US-East (Virginia) // Primary', meta: '99.99% SLA • 12ms' },
    { id: 'eu-west', label: 'EU-West (Frankfurt) // Edge', meta: 'GDPR Secured • 24ms' },
    { id: 'ap-east', label: 'AP-East (Tokyo) // High-Speed', meta: 'Direct Fiber • 18ms' },
    { id: 'sa-east', label: 'SA-East (São Paulo) // Fallback', meta: 'Georedundant • 45ms' },
  ];

  // Aesthetic persona detection for signature hero widgets & window chrome
  const isClaymorphism =
    surface.id === 'claymorphism-3d' ||
    components.id === 'clay-puffy-buttons' ||
    palette.id === 'clay-matte-ceramic';

  const isMilkyGlass =
    surface.id === 'milky-frosted-glass' ||
    components.id === 'milky-glass-pills' ||
    palette.id === 'opal-milk-glass';

  const isNeumorphic =
    surface.id === 'neumorphic-soft' ||
    components.id === 'neumorphic-soft-controls' ||
    palette.id === 'neumorphic-periwinkle';

  const isWin95 =
    surface.id === 'win95-classic-bezel' ||
    components.id === 'win95-beveled-push' ||
    palette.id === 'win95-classic';

  const isCyberpunk =
    surface.id === 'cyberpunk-chamfer' ||
    components.id === 'cyberpunk-hud-clipped' ||
    palette.id === 'cyberpunk-nightcity' ||
    accent.type === 'cyber-hud';

  const isCadBlueprint =
    surface.id === 'double-hairline-blueprint' ||
    palette.id === 'cad-blueprint' ||
    accent.type === 'blueprint-dimensions';

  const isGameboy =
    palette.id === 'gameboy-dmg01' ||
    components.id === 'pixel-beveled' ||
    font.classification === 'pixel';

  const isScada =
    surface.id === 'heavy-industrial-chassis' ||
    palette.id === 'scada-industrial' ||
    accent.type === 'hazard-stripes';

  const isArtDeco =
    surface.id === 'art-deco-double' ||
    palette.id === 'art-deco-gold' ||
    accent.type === 'art-deco-sunburst';

  const isEditorial =
    surface.id === 'paper-lift' ||
    palette.id === 'warm-editorial' ||
    accent.type === 'washi-tape';

  const isSynthwave =
    palette.id === 'retro-synthwave' ||
    accent.type === 'audio-waveform';

  const isBauhaus =
    surface.id === 'neobrutalist-hard' ||
    palette.id === 'bauhaus-primary';

  const isFrutiger =
    surface.id === 'frutiger-gloss' ||
    components.id === 'frutiger-aero-gel';

  // Base card styling provided directly by the active Design Engine
  const cardStyle: CSSProperties = {
    ...engineStyles.card,
    clipPath: surface.clipPath,
    transition: 'all 200ms ease-out',
  };

  const headingStyle: CSSProperties = {
    fontFamily: font.fontFamily,
    letterSpacing:
      font.classification === 'bento' || font.classification === 'cyberpunk'
        ? '-0.02em'
        : font.classification === 'luxury' || font.classification === 'art-deco'
        ? '0.08em'
        : 'normal',
    textTransform:
      font.classification === 'pixel' || font.classification === 'cyberpunk' || isBauhaus
        ? 'uppercase'
        : 'none',
  };

  return (
    <div
      className="w-full transition-all duration-300 relative overflow-hidden"
      style={{
        backgroundColor: isClaymorphism
          ? '#FAF6EF'
          : isWin95
          ? '#008080'
          : isBauhaus
          ? '#F4F1EA'
          : isMilkyGlass
          ? '#F4F7FC'
          : palette.background,
        backgroundImage: isMilkyGlass
          ? 'radial-gradient(circle at 10% 12%, rgba(254, 205, 190, 0.75) 0%, transparent 45%), radial-gradient(circle at 88% 12%, rgba(186, 230, 253, 0.8) 0%, transparent 45%), radial-gradient(circle at 12% 88%, rgba(221, 214, 254, 0.7) 0%, transparent 45%), radial-gradient(circle at 88% 88%, rgba(254, 215, 170, 0.7) 0%, transparent 45%)'
          : undefined,
        color: palette.text,
        borderColor: isBauhaus
          ? '#000000'
          : isClaymorphism
          ? '#EBE3D7'
          : isMilkyGlass
          ? 'rgba(255, 255, 255, 0.85)'
          : palette.border,
        borderWidth: isBauhaus ? '3px' : isMilkyGlass ? '1.5px' : surface.borderWidth,
        borderRadius: isBauhaus ? '0px' : isClaymorphism ? '32px' : isMilkyGlass ? '28px' : surface.radius,
        boxShadow: isClaymorphism
          ? '0 35px 70px -15px rgba(185, 160, 135, 0.38), 0 14px 26px -6px rgba(185, 160, 135, 0.2), inset 2px 2px 4px rgba(255, 255, 255, 0.95), inset -2px -2px 4px rgba(160, 135, 110, 0.12)'
          : isWin95
          ? '0 20px 40px rgba(0,0,0,0.3)'
          : isBauhaus
          ? '6px 6px 0px #000000'
          : isMilkyGlass
          ? '0 25px 60px -15px rgba(100, 115, 145, 0.22), 0 8px 24px rgba(100, 115, 145, 0.1), inset 0 1.5px 2px rgba(255, 255, 255, 0.95), inset 0 0 1px rgba(255, 255, 255, 1)'
          : surface.shadow,
        fontFamily: font.fontFamily,
      }}
    >
      {/* =========================================================================
          GLOBAL / VIEWPORT ACCENT EFFECTS
          ========================================================================= */}

      {/* 1. CRT Raster Scanlines Overlay */}
      {(accent.type === 'scanlines' || isGameboy) && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-40 opacity-35 mix-blend-overlay"
          style={{
            backgroundImage:
              'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.75) 50%)',
            backgroundSize: '100% 4px',
          }}
        />
      )}

      {/* 2. Global Dot Grid on Viewport Background */}
      {accent.type === 'dot-grid' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-25"
          style={{
            backgroundImage: `radial-gradient(${palette.border} 1.5px, transparent 1.5px)`,
            backgroundSize: '14px 14px',
          }}
        />
      )}

      {/* 3. Global Film Grain / Noise Overlay */}
      {accent.type === 'noise-grain' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-30 opacity-20 mix-blend-multiply"
          style={{
            backgroundImage:
              'radial-gradient(rgba(0,0,0,0.3) 15%, transparent 16%), radial-gradient(rgba(0,0,0,0.15) 15%, transparent 16%)',
            backgroundSize: '4px 4px',
          }}
        />
      )}

      {/* 4. Global Industrial Hazard Barricade Strip */}
      {(accent.type === 'hazard-stripes' || isScada) && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 right-0 h-2.5 z-30 opacity-90 shadow-xs"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #FFB000, #FFB000 12px, #000000 12px, #000000 24px)',
          }}
        />
      )}

      {/* 5. Header Prismatic Light Flare */}
      {(accent.type === 'prismatic-flare' || isFrutiger) && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 right-0 h-1.5 z-30"
          style={{
            background:
              'linear-gradient(90deg, transparent, #38bdf8 20%, #818cf8 40%, #f472b6 60%, #facc15 80%, transparent)',
            boxShadow: '0 0 14px rgba(56, 189, 248, 0.8)',
          }}
        />
      )}

      {/* 6. Art Deco Radiant Sunburst Arch */}
      {(accent.type === 'art-deco-sunburst' || isArtDeco) && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-64 h-3.5 z-30 flex items-center justify-center opacity-85"
          style={{
            background: `radial-gradient(ellipse at top, ${palette.primary} 0%, transparent 75%)`,
          }}
        />
      )}

      {/* 7. Aurora Atmospheric Mesh Glow */}
      {accent.type === 'aurora-glow' && !isMilkyGlass && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl opacity-40 z-0"
            style={{
              background: `radial-gradient(circle, ${palette.primary} 0%, ${palette.secondary} 50%, transparent 80%)`,
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-35 z-0"
            style={{
              background: `radial-gradient(circle, ${palette.accent} 0%, ${palette.primary} 50%, transparent 80%)`,
            }}
          />
        </>
      )}

      {/* 7a. Atmospheric Frosted Glass Pastel Light Blooms & Diamond Rim Flares (Mockup #1) */}
      {isMilkyGlass && (
        <>
          {/* Top-Left Soft Peach/Coral Bloom */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -left-16 w-80 h-80 rounded-full blur-3xl opacity-75 z-0"
            style={{
              background: 'radial-gradient(circle, rgba(254, 205, 190, 0.85) 0%, rgba(255, 182, 193, 0.5) 45%, transparent 75%)',
            }}
          />
          {/* Top-Right Soft Sky Blue Bloom */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -right-16 w-88 h-88 rounded-full blur-3xl opacity-80 z-0"
            style={{
              background: 'radial-gradient(circle, rgba(186, 230, 253, 0.85) 0%, rgba(199, 210, 254, 0.5) 45%, transparent 75%)',
            }}
          />
          {/* Bottom-Left Lavender Violet Bloom */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -left-16 w-80 h-80 rounded-full blur-3xl opacity-70 z-0"
            style={{
              background: 'radial-gradient(circle, rgba(221, 214, 254, 0.8) 0%, rgba(165, 243, 252, 0.45) 45%, transparent 75%)',
            }}
          />
          {/* Bottom-Right Warm Apricot Bloom */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -right-16 w-80 h-80 rounded-full blur-3xl opacity-75 z-0"
            style={{
              background: 'radial-gradient(circle, rgba(254, 215, 170, 0.8) 0%, rgba(254, 205, 211, 0.5) 45%, transparent 75%)',
            }}
          />

          {/* Left Rim Specular Diamond Lens Flare (Mockup #1) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-2 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center"
          >
            <div className="w-4 h-4 bg-white/95 rotate-45 rounded-[1px] shadow-[0_0_10px_#ffffff,0_0_20px_rgba(255,255,255,0.9)]" />
            <div className="absolute w-8 h-[1.5px] bg-white blur-[0.5px]" />
            <div className="absolute h-8 w-[1.5px] bg-white blur-[0.5px]" />
          </div>

          {/* Right Rim Specular Diamond Lens Flare (Mockup #1) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 top-1/4 -translate-y-1/2 z-30 flex items-center justify-center"
          >
            <div className="w-3.5 h-3.5 bg-white/95 rotate-45 rounded-[1px] shadow-[0_0_8px_#ffffff,0_0_18px_rgba(255,255,255,0.9)]" />
            <div className="absolute w-7 h-[1.5px] bg-white blur-[0.5px]" />
            <div className="absolute h-7 w-[1.5px] bg-white blur-[0.5px]" />
          </div>
        </>
      )}

      {/* 7b. Claymorphism Ambient Diffuse Pastel Light Blooms (Mockup #2) */}
      {isClaymorphism && (
        <>
          {/* Top-Right Soft Sky Blue Diffuse Bloom */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -right-16 w-96 h-96 rounded-full blur-3xl opacity-45 z-0"
            style={{
              background: 'radial-gradient(circle, rgba(147, 197, 253, 0.45) 0%, rgba(199, 210, 254, 0.25) 40%, transparent 75%)',
            }}
          />
          {/* Bottom-Left Soft Coral / Rose Diffuse Bloom */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -left-16 w-96 h-96 rounded-full blur-3xl opacity-40 z-0"
            style={{
              background: 'radial-gradient(circle, rgba(251, 113, 133, 0.4) 0%, rgba(244, 114, 182, 0.25) 40%, transparent 75%)',
            }}
          />
          {/* Center Warm Ambient Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/3 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-25 z-0"
            style={{
              background: 'radial-gradient(circle, rgba(254, 240, 138, 0.35) 0%, transparent 70%)',
            }}
          />
        </>
      )}

      {/* 8. Perspective Wireframe Grid */}
      {(accent.type === 'wireframe-grid' || isSynthwave) && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, ${palette.primary} 1px, transparent 1px), linear-gradient(to bottom, ${palette.primary} 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      )}

      {/* 9. Concentric Radial Debossed Rings Watermark */}
      {(accent.type === 'concentric-rings' || isNeumorphic) && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -right-16 w-64 h-64 rounded-full z-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle, transparent 28%, ${palette.border} 29%, transparent 31%, transparent 54%, ${palette.border} 55%, transparent 57%, transparent 78%, ${palette.border} 79%, transparent 81%)`,
          }}
        />
      )}

      {/* =========================================================================
          THEME-ADAPTIVE WINDOW CHROME & HEADER BAR
          ========================================================================= */}
      {isWin95 ? (
        /* Windows 95 Classic Blue Titlebar & Menu Bar */
        <div className="w-full relative z-20 select-none">
          <div className="w-full bg-gradient-to-r from-[#000080] to-[#1084d0] text-white px-2.5 py-1.5 flex items-center justify-between text-xs font-bold font-mono">
            <div className="flex items-center gap-2">
              <span>🗔</span>
              <span>Archetype Diagnostics - C:\WIN95\SYSTEM.EXE</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                className="w-4 h-4 bg-[#C0C0C0] text-black border border-t-white border-l-white border-b-black border-r-black flex items-center justify-center text-[10px] leading-none active:border-t-black active:border-l-black cursor-pointer"
              >
                _
              </button>
              <button
                type="button"
                className="w-4 h-4 bg-[#C0C0C0] text-black border border-t-white border-l-white border-b-black border-r-black flex items-center justify-center text-[10px] leading-none active:border-t-black active:border-l-black cursor-pointer"
              >
                □
              </button>
              <button
                type="button"
                className="w-4 h-4 bg-[#C0C0C0] text-black border border-t-white border-l-white border-b-black border-r-black flex items-center justify-center text-[10px] leading-none active:border-t-black active:border-l-black cursor-pointer font-bold"
              >
                ✕
              </button>
            </div>
          </div>
          <div className="w-full bg-[#C0C0C0] border-b border-[#808080] px-3 py-1 flex items-center gap-4 text-xs font-mono text-black">
            <span><u>F</u>ile</span>
            <span><u>E</u>dit</span>
            <span><u>V</u>iew</span>
            <span><u>H</u>elp</span>
          </div>
        </div>
      ) : isCyberpunk ? (
        /* Cyberpunk HUD Clipped Angled Banner */
        <div
          className="w-full border-b flex items-center justify-between px-3.5 py-2 font-mono text-xs uppercase tracking-wider relative z-20"
          style={{ backgroundColor: `${palette.surface}F0`, borderColor: palette.primary }}
        >
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-none bg-[#FCEE0A] animate-ping" />
            <span className="font-extrabold text-[#FCEE0A] tracking-widest">
              HUD // NIGHT_CITY_0x7FFA
            </span>
            <span className="text-[10px] px-1.5 py-0.2 bg-[#00F0FF] text-black font-black">
              ARMED
            </span>
          </div>
          <div className="text-[10px] flex items-center gap-2 font-bold" style={{ color: palette.primary }}>
            <span>LOC: [840.22, 110.84]</span>
            <span className="border px-1 rounded-none" style={{ borderColor: palette.primary }}>
              RECON
            </span>
          </div>
        </div>
      ) : isMilkyGlass ? (
        /* visionOS Dense Opal Milk Glass Header (Mockup #1) */
        <div
          className="w-full flex items-center justify-between px-4 sm:px-5 py-3 border-b text-xs relative z-20 backdrop-blur-xl"
          style={{
            borderColor: 'rgba(255, 255, 255, 0.75)',
            backgroundColor: 'rgba(255, 255, 255, 0.65)',
            boxShadow: '0 4px 16px rgba(100, 115, 145, 0.05), inset 0 1px 1px #FFFFFF',
          }}
        >
          {/* Left: Iridescent Pebble Mark + AURA Analytics */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center shadow-xs"
              style={{
                background: 'radial-gradient(circle at 30% 30%, #FFA585 0%, #FF6584 45%, #6366F1 80%, #38BDF8 100%)',
                boxShadow: '0 2px 6px rgba(255, 101, 132, 0.4), inset 0 1px 1px #FFFFFF',
              }}
            />
            <span className="font-extrabold tracking-tight text-slate-850 text-sm">
              AURA Analytics
            </span>
          </div>

          {/* Middle: Frosted Search Dashboard Capsule (Mockup #1) */}
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/95 text-slate-500 shadow-[0_2px_8px_rgba(100,115,145,0.05),inset_0_1px_1px_#FFFFFF] text-xs max-w-[220px] w-full">
            <Search className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span className="truncate text-slate-500 font-medium">Search dashboard...</span>
          </div>

          {/* Right: Frosted Notification Bell & Profile Capsule */}
          <div className="flex items-center gap-2">
            <div className="relative w-7 h-7 rounded-full bg-white/80 border border-white/95 shadow-xs flex items-center justify-center text-slate-600">
              <Bell className="w-3.5 h-3.5" />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-rose-500 ring-1 ring-white" />
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/80 border border-white/95 shadow-xs text-[11px] font-semibold text-slate-800">
              <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 text-[9px] text-white flex items-center justify-center font-bold">
                A
              </div>
              <span className="hidden sm:inline">Alex R.</span>
              <ChevronDown className="w-3 h-3 text-slate-500" />
            </div>
          </div>
        </div>
      ) : isClaymorphism ? (
        /* 3D Marshmallow Plump Ceramic Header (Mockup #2) */
        <div
          className="w-full flex items-center justify-between px-4 sm:px-5 py-3 text-xs relative z-20 border-b border-[rgba(160,140,120,0.12)]"
          style={{
            backgroundColor: '#F4EEE5',
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-2xl bg-gradient-to-tr from-sky-400 via-pink-400 to-amber-300 flex items-center justify-center"
              style={{
                boxShadow: '0 6px 14px rgba(0,0,0,0.12), inset 2px 2px 4px rgba(255,255,255,0.95), inset -2px -2px 4px rgba(0,0,0,0.15)',
              }}
            >
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <h2 className="font-extrabold text-sm sm:text-base text-slate-800 tracking-tight">
                Project Overview
              </h2>
              <p className="text-[10px] text-slate-500 font-semibold font-mono">
                14 May 2026 • 3D Ceramic Workspace
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* 3D Inflated White Capsule with Sunken debossed well (Mockup #2) */}
            <div
              className="hidden sm:flex p-1 rounded-full transition-all"
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0 6px 14px rgba(185, 160, 135, 0.24), 0 2px 4px rgba(185, 160, 135, 0.14), inset 0 2px 3px #FFFFFF, inset 0 -1.5px 2px rgba(175, 150, 130, 0.1)',
              }}
            >
              <div
                className="flex items-center gap-2 px-3 py-1 rounded-full"
                style={{
                  backgroundColor: '#EFEAE3',
                  boxShadow: 'inset 0 3px 6px rgba(140, 120, 100, 0.28), inset 0 1px 2px rgba(140, 120, 100, 0.35), inset 0 -1.5px 2px rgba(255, 255, 255, 0.95)',
                }}
              >
                <Search className="w-3.5 h-3.5 text-[#8C827A]" />
                <input
                  type="text"
                  placeholder="Search reports..."
                  className="bg-transparent text-xs text-[#23211E] outline-none w-28 sm:w-36 placeholder:text-[#8C827A] font-medium"
                />
              </div>
            </div>

            {/* Notification bell button */}
            <div
              className="w-8 h-8 rounded-2xl bg-white flex items-center justify-center text-stone-700 relative cursor-pointer"
              style={{
                boxShadow: '0 4px 10px rgba(180, 160, 140, 0.25), inset 1px 1px 2px rgba(255,255,255,0.95), inset -1px -1px 2px rgba(160,140,120,0.1)',
              }}
            >
              <span className="text-xs">🔔</span>
              <span className="w-2 h-2 rounded-full bg-rose-500 absolute top-1.5 right-1.5 ring-2 ring-white" />
            </div>

            {/* Avatar Pill */}
            <div
              className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 via-rose-400 to-purple-400 flex items-center justify-center text-[10px] font-bold text-white shadow-xs"
              style={{
                boxShadow: '0 4px 8px rgba(0,0,0,0.12), inset 1px 1px 2px rgba(255,255,255,0.8)',
              }}
            >
              AC
            </div>
          </div>
        </div>
      ) : isBauhaus ? (
        /* Bauhaus Constructivist Header */
        <div className="w-full bg-white border-b-[3px] border-black px-4 py-2.5 flex items-center justify-between select-none">
          <div className="flex items-center gap-2.5">
            <div className="w-4 h-4 bg-[#D90429] border-2 border-black shadow-[2px_2px_0px_#000]" />
            <div className="w-4 h-4 bg-[#0047AB] rounded-full border-2 border-black shadow-[2px_2px_0px_#000]" />
            <div className="w-4 h-4 bg-[#FFD000] rotate-45 border-2 border-black shadow-[2px_2px_0px_#000]" />
            <span className="font-black text-sm text-black tracking-wider uppercase ml-1">
              BAUHAUS 1919 // DESSAU CONSTRUCTIVISM
            </span>
          </div>
          <span className="px-2.5 py-0.5 bg-black text-white text-[10px] font-black uppercase tracking-widest">
            WERKSTATT
          </span>
        </div>
      ) : (
        /* Standard Studio Navigation Header */
        <div
          className="w-full border-b flex flex-wrap items-center justify-between px-3.5 sm:px-4 py-2 relative z-20 backdrop-blur-xs gap-2"
          style={{ borderColor: `${palette.border}44`, backgroundColor: `${palette.surface}EE` }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 flex items-center justify-center font-bold text-xs shadow-xs"
              style={{
                backgroundColor: palette.primary,
                color: palette.isDark ? '#000000' : '#FFFFFF',
                borderRadius:
                  surface.radius === '0px' ? '0px' : surface.radius === '9999px' ? '9999px' : '6px',
                border: `${surface.borderWidth} solid ${palette.border}`,
              }}
            >
              <Zap className="w-3 h-3" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xs sm:text-sm tracking-tight" style={headingStyle}>
                  {palette.name}
                </span>
                <span
                  className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded border"
                  style={{
                    backgroundColor: `${palette.primary}18`,
                    borderColor: `${palette.primary}44`,
                    color: palette.primary,
                  }}
                >
                  {font.classification}
                </span>
              </div>
              <div className="text-[10px] opacity-75 font-mono">
                Font: {font.name} • Surface: {surface.name}
              </div>
            </div>
          </div>

          <div
            className="text-[10px] font-mono px-2 py-0.5 rounded-full border flex items-center gap-1.5 shadow-2xs"
            style={{
              borderColor: `${palette.primary}66`,
              backgroundColor: `${palette.primary}15`,
              color: palette.primary,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-ping"
              style={{ backgroundColor: palette.primary }}
            />
            <span>
              Accent: <strong>{accent.name}</strong>
            </span>
          </div>
        </div>
      )}

      {/* =========================================================================
          SPATIAL MULTI-CARD SPECIMEN WORKSPACE
          ========================================================================= */}
      <div className="p-3 sm:p-4 relative z-10 space-y-3.5 min-h-[320px]">
        {/* =======================================================================
            CARD 1: THE SHOWSTOPPER HERO DATA SPECIMEN
            Faithfully matches Mockups #1, #2, Neumorphism, Cyberpunk, Win95, etc.
            ======================================================================= */}
        <div className="relative">
          {/* Tactile Washi Tape Strip Overlap */}
          {(accent.type === 'washi-tape' || isEditorial) && (
            <div
              className="absolute -top-3.5 left-8 px-5 py-1 text-[10px] font-mono font-black tracking-widest shadow-md z-30 -rotate-2 select-none border border-black/25 flex items-center gap-1.5"
              style={{
                backgroundColor: palette.secondary,
                color: palette.isDark ? '#000000' : '#FFFFFF',
              }}
            >
              <span className="opacity-60">{'///'}</span>
              <span>WASHI_MEMO_SPECIMEN</span>
              <span className="opacity-60">{'///'}</span>
            </div>
          )}

          {/* ===================================================================
              A. CLAYMORPHISM: EXACT MATCH TO MOCKUP #2
              3 Inflated White 3D Clay Stat Cards + Activity Overview 3D Marshmallow Bars
              =================================================================== */}
          {isClaymorphism ? (
            <div className="space-y-3">
              {/* Row of 3 Inflated White 3D Clay Stat Cards (Mockup #2) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {/* Stat 1: Users Active */}
                <div
                  className="p-3 rounded-2xl bg-white border border-white flex flex-col justify-between gap-2"
                  style={{
                    boxShadow: '0 12px 24px rgba(160, 150, 140, 0.16), inset 2px 2px 4px rgba(255,255,255,1), inset -2px -2px 4px rgba(0,0,0,0.04)',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="w-7 h-7 rounded-xl bg-blue-500 text-white flex items-center justify-center"
                      style={{
                        boxShadow: '0 4px 8px rgba(37,99,235,0.35), inset 1px 1px 2px rgba(255,255,255,0.7), inset -1px -1px 2px rgba(0,0,0,0.2)',
                      }}
                    >
                      <Users className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      +5.2%
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-medium text-slate-500">Users Active</span>
                    <div className="text-xl font-extrabold text-slate-800 tracking-tight">3,841</div>
                  </div>
                  {/* Micro 3D Clay Bars */}
                  <div className="flex items-end gap-1 h-4 pt-1">
                    {[30, 45, 60, 40, 75, 90, 80].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-full bg-blue-400"
                        style={{
                          height: `${h}%`,
                          boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.8), inset 0 -1px 1px rgba(0,0,0,0.15)',
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Stat 2: Revenue */}
                <div
                  className="p-3 rounded-2xl bg-white border border-white flex flex-col justify-between gap-2"
                  style={{
                    boxShadow: '0 12px 24px rgba(160, 150, 140, 0.16), inset 2px 2px 4px rgba(255,255,255,1), inset -2px -2px 4px rgba(0,0,0,0.04)',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="w-7 h-7 rounded-xl bg-emerald-500 text-white flex items-center justify-center"
                      style={{
                        boxShadow: '0 4px 8px rgba(16,185,129,0.35), inset 1px 1px 2px rgba(255,255,255,0.7), inset -1px -1px 2px rgba(0,0,0,0.2)',
                      }}
                    >
                      <TrendingUp className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      +12.8%
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-medium text-slate-500">Revenue</span>
                    <div className="text-xl font-extrabold text-slate-800 tracking-tight">$24,710</div>
                  </div>
                  {/* Micro Curve */}
                  <div className="h-4 w-full">
                    <svg className="w-full h-full" viewBox="0 0 100 20">
                      <path d="M 0,16 Q 30,2 60,10 T 100,4" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* Stat 3: New Signups */}
                <div
                  className="p-3 rounded-2xl bg-white border border-white flex flex-col justify-between gap-2"
                  style={{
                    boxShadow: '0 12px 24px rgba(160, 150, 140, 0.16), inset 2px 2px 4px rgba(255,255,255,1), inset -2px -2px 4px rgba(0,0,0,0.04)',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="w-7 h-7 rounded-xl bg-amber-400 text-white flex items-center justify-center"
                      style={{
                        boxShadow: '0 4px 8px rgba(245,158,11,0.35), inset 1px 1px 2px rgba(255,255,255,0.7), inset -1px -1px 2px rgba(0,0,0,0.2)',
                      }}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-bold text-rose-500 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100">
                      -1.1%
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-medium text-slate-500">New Signups</span>
                    <div className="text-xl font-extrabold text-slate-800 tracking-tight">1,105</div>
                  </div>
                  {/* Micro Progress */}
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden shadow-inner">
                    <div className="bg-amber-400 h-full rounded-full w-3/4" />
                  </div>
                </div>
              </div>

              {/* Main Activity Overview 3D Marshmallow Bar Chart (Mockup #2) */}
              <div
                className="p-4 rounded-3xl bg-white border border-white space-y-3"
                style={{
                  boxShadow: '0 16px 36px rgba(160, 150, 140, 0.18), inset 2px 2px 4px rgba(255,255,255,1), inset -2px -2px 4px rgba(0,0,0,0.04)',
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-blue-500" />
                    <h3 className="text-sm font-extrabold text-slate-800 tracking-tight">
                      Activity Overview
                    </h3>
                  </div>
                  <div
                    className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200"
                    style={{
                      boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.9), 0 2px 4px rgba(0,0,0,0.04)',
                    }}
                  >
                    <span>Monthly</span>
                    <ChevronDown className="w-3 h-3 text-slate-500" />
                  </div>
                </div>

                {/* The 5 Volumetric 3D Marshmallow Bars */}
                <div className="h-32 w-full flex items-end justify-around gap-2 px-2 pt-2 relative">
                  {/* Y-axis gridlines */}
                  <div className="absolute inset-x-0 inset-y-2 flex flex-col justify-between pointer-events-none opacity-20 border-b border-slate-300">
                    <div className="w-full border-b border-dashed border-slate-400" />
                    <div className="w-full border-b border-dashed border-slate-400" />
                    <div className="w-full border-b border-dashed border-slate-400" />
                  </div>

                  {[
                    { label: 'Jan', height: 48, gradient: 'from-[#38bdf8] via-[#a855f7] to-[#f43f5e]' },
                    { label: 'Feb', height: 35, gradient: 'from-[#fb923c] to-[#ec4899]' },
                    { label: 'Mar', height: 78, gradient: 'from-[#f43f5e] via-[#c084fc] to-[#38bdf8]' },
                    { label: 'Apr', height: 65, gradient: 'from-[#38bdf8] via-[#a855f7] to-[#facc15]' },
                    {
                      label: 'May',
                      height: Math.max(25, Math.min(95, sliderVal)),
                      gradient: 'from-[#f43f5e] via-[#fb923c] to-[#facc15]',
                    },
                  ].map((bar) => (
                    <div key={bar.label} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group z-10">
                      <div
                        className={`w-full max-w-[38px] rounded-full bg-gradient-to-t ${bar.gradient} transition-all duration-300 cursor-pointer active:scale-95`}
                        style={{
                          height: `${bar.height}%`,
                          boxShadow:
                            '0 10px 20px rgba(0, 0, 0, 0.12), inset 0 3px 5px rgba(255, 255, 255, 0.9), inset 0 -5px 7px rgba(0, 0, 0, 0.25)',
                        }}
                      />
                      <span className="text-xs font-bold text-slate-600 font-sans">
                        {bar.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : isMilkyGlass ? (
            /* ===================================================================
                B. MILKY FROSTED GLASS: EXACT MATCH TO MOCKUP #1 (visionOS Opal)
                4 Floating Glass Stat Cards with Trend Splines +
                Monthly Growth Performance Card + Service Status Toggles & Plans
                =================================================================== */
            <div className="space-y-3">
              {/* Row of 4 Glass Stat Cards with Trend Splines (Mockup #1) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  {
                    title: 'Total Revenue',
                    val: '$321,450',
                    delta: '+12.4% vs last month',
                    color: '#10B981',
                    wavePath: 'M 0,22 Q 35,26 65,16 T 130,22 T 200,8',
                  },
                  {
                    title: 'Active Users',
                    val: '18,920',
                    delta: '+8.7%',
                    color: '#0284C7',
                    wavePath: 'M 0,20 Q 30,12 60,20 T 130,15 T 200,6',
                  },
                  {
                    title: 'Conversions',
                    val: '4.1%',
                    delta: 'Stable',
                    color: '#8B5CF6',
                    wavePath: 'M 0,18 Q 30,24 65,14 T 130,20 T 200,10',
                  },
                  {
                    title: 'Subscription MRR',
                    val: '$45.2K',
                    delta: 'Growth',
                    color: '#06B6D4',
                    wavePath: 'M 0,24 Q 40,20 80,18 T 140,12 T 200,6',
                  },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-2xl border border-white/95 backdrop-blur-xl flex flex-col justify-between gap-1 relative overflow-hidden transition-all hover:scale-[1.01]"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.72)',
                      boxShadow: '0 8px 24px rgba(100, 115, 145, 0.08), inset 0 1.5px 2px #FFFFFF',
                    }}
                  >
                    <div className="flex items-center justify-between text-slate-500">
                      <span className="text-[10px] font-semibold">{s.title}</span>
                      <MoreHorizontal className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                    <div className="text-base sm:text-lg font-black text-slate-900 tracking-tight font-mono">
                      {s.val}
                    </div>
                    <span className="text-[9px] font-bold" style={{ color: s.color }}>
                      {s.delta}
                    </span>
                    {/* Trend Wave Spline from Mockup #1 */}
                    <div className="h-6 w-full pt-1">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 200 30" preserveAspectRatio="none">
                        <path
                          d={s.wavePath}
                          fill="none"
                          stroke={s.color}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          style={{ filter: `drop-shadow(0 2px 4px ${s.color}55)` }}
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              {/* Monthly Growth Performance (Curved Area Splines & Tooltip from Mockup #1) */}
              <div
                className="p-4 rounded-3xl border border-white/95 backdrop-blur-2xl space-y-3 relative overflow-hidden"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.78)',
                  boxShadow: '0 16px 36px rgba(100, 115, 145, 0.09), inset 0 1.5px 2px #FFFFFF',
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                      Monthly Growth Performance
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Curved dual-spline telemetry with specular refraction
                    </p>
                  </div>
                  <div className="px-3 py-1 rounded-full text-xs font-semibold bg-white/80 border border-white/95 text-slate-700 shadow-xs">
                    Jan - Jun
                  </div>
                </div>

                {/* Spline Chart with Y & X Axis and Floating Frosted Tooltip */}
                <div className="relative">
                  {/* Y-Axis Labels */}
                  <div className="absolute left-0 top-0 bottom-4 flex flex-col justify-between text-[9px] font-mono font-semibold text-slate-400 pointer-events-none">
                    <span>$80K</span>
                    <span>$40K</span>
                    <span>$20K</span>
                    <span>0</span>
                  </div>

                  {/* SVG Chart Area */}
                  <div className="h-32 w-full pl-8 pb-4 relative overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 500 120" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="glassSplineGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#0284C7" stopOpacity="0.35" />
                          <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.15" />
                          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      {/* Area Fill */}
                      <path
                        d={`M 0,120 L 0,85 Q 120,${110 - sliderVal * 0.4} 240,60 T 500,${95 - sliderVal * 0.6} L 500,120 Z`}
                        fill="url(#glassSplineGrad)"
                      />
                      {/* Stroke 1 (Purple) */}
                      <path
                        d={`M 0,95 Q 120,${115 - sliderVal * 0.3} 250,65 T 500,${75 - sliderVal * 0.4}`}
                        fill="none"
                        stroke="#8B5CF6"
                        strokeWidth="3"
                        strokeLinecap="round"
                        style={{ filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.4))' }}
                      />
                      {/* Stroke 2 (Cyan / Sky) */}
                      <path
                        d={`M 0,85 Q 120,${110 - sliderVal * 0.4} 240,60 T 500,${95 - sliderVal * 0.6}`}
                        fill="none"
                        stroke="#0284C7"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        style={{ filter: 'drop-shadow(0 0 8px rgba(2, 132, 199, 0.4))' }}
                      />
                    </svg>

                    {/* Floating Frosted Tooltip (Exact Match to Mockup #1) */}
                    <div
                      className="absolute top-2 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-xl border border-white text-slate-800 shadow-[0_8px_20px_rgba(100,115,145,0.15)] flex flex-col items-center pointer-events-none"
                    >
                      <span className="text-[9px] text-slate-500 font-medium">revenue</span>
                      <span className="text-xs font-bold text-slate-900">$40K - $80K</span>
                      {/* Pin line indicator */}
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500 ring-2 ring-white mt-0.5" />
                    </div>
                  </div>

                  {/* X-Axis Labels */}
                  <div className="flex items-center justify-between pl-8 text-[9px] font-mono font-semibold text-slate-400 pt-1 border-t border-slate-200/40">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </div>
              </div>

              {/* Service Toggles & Plan Activity Tiles (Matching Mockup #1 Lower Half) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {/* Frosted Toggles Card */}
                <div
                  className="p-3.5 rounded-2xl border border-white/95 backdrop-blur-xl space-y-2.5"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.72)',
                    boxShadow: '0 8px 24px rgba(100, 115, 145, 0.08), inset 0 1.5px 2px #FFFFFF',
                  }}
                >
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                    <span>Feature Deployment</span>
                    <button
                      type="button"
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/80 border border-white shadow-2xs hover:bg-white cursor-pointer"
                    >
                      Manage users
                    </button>
                  </div>
                  <div className="space-y-2.5 text-xs">
                    {[
                      { label: 'Provisioned Node', active: true, toggleable: false },
                      { label: 'Telemetric Sync', active: toggleActive, toggleable: true },
                      { label: 'Revenue Stream', active: false, toggleable: false },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between text-slate-700">
                        <span className="text-xs font-medium">{item.label}</span>
                        <button
                          type="button"
                          onClick={() => item.toggleable && setToggleActive(!toggleActive)}
                          className={`w-10 h-5.5 rounded-full relative ${item.toggleable ? 'cursor-pointer' : 'cursor-default'} transition-all duration-200 p-0.5 flex items-center border ${
                            item.active
                              ? 'bg-gradient-to-b from-sky-400 to-blue-600 border-sky-300/40 shadow-[0_3px_10px_rgba(2,132,199,0.4),inset_0_1px_2px_rgba(255,255,255,0.7)]'
                              : 'bg-gradient-to-b from-slate-200 to-slate-300 border-white/95 shadow-[inset_0_1.5px_3px_rgba(15,23,42,0.22),inset_0_-1px_1px_rgba(255,255,255,0.85),0_1px_2px_rgba(100,115,145,0.12)]'
                          }`}
                          title={item.toggleable ? 'Click to toggle Telemetric Sync' : `${item.label} (${item.active ? 'Enabled' : 'Disabled'})`}
                        >
                          <div
                            className={`w-4.5 h-4.5 rounded-full bg-white transition-transform duration-200 ${
                              item.active
                                ? 'translate-x-[18px] shadow-[0_2px_5px_rgba(2,132,199,0.4),inset_0_1px_1px_#FFFFFF]'
                                : 'translate-x-0 shadow-[0_2px_4px_rgba(15,23,42,0.25),inset_0_1px_1px_#FFFFFF]'
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Performing Plans Progress Bars Card */}
                <div
                  className="p-3.5 rounded-2xl border border-white/95 backdrop-blur-xl space-y-2.5"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.72)',
                    boxShadow: '0 8px 24px rgba(100, 115, 145, 0.08), inset 0 1.5px 2px #FFFFFF',
                  }}
                >
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                    <span>Top Performing Plans</span>
                    <span className="text-[10px] font-mono text-slate-400">Progress</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    {[
                      { name: 'Premium', val: 84, color: 'bg-emerald-500' },
                      { name: 'Pro Tier', val: 62, color: 'bg-sky-500' },
                      { name: 'Enterprise', val: 92, color: 'bg-gradient-to-r from-purple-500 to-indigo-500' },
                    ].map((p, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center justify-between text-[11px] font-medium text-slate-600">
                          <span>{p.name}</span>
                          <span className="font-mono font-bold text-slate-800">{p.val}%</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-white/70 overflow-hidden border border-white shadow-inner">
                          <div
                            className={`h-full rounded-full transition-all duration-300 ${p.color}`}
                            style={{ width: `${p.val}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : isBauhaus ? (
            /* ===================================================================
                C. BAUHAUS CONSTRUCTIVIST PRIMARIES (High Contrast Red / Blue / Yellow)
                =================================================================== */
            <div className="p-4 bg-white border-[3px] border-black shadow-[4px_4px_0px_#000000] space-y-3">
              <div className="flex items-center justify-between border-b-[3px] border-black pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-[#D90429] border-2 border-black" />
                  <h3 className="text-sm font-black text-black uppercase tracking-wider">
                    ELEMENTARY FORM & COLOR MATRIX
                  </h3>
                </div>
                <span className="px-2 py-0.5 bg-[#FFD000] text-black font-black text-[10px] border-2 border-black">
                  PRIMARY POP
                </span>
              </div>

              {/* Constructivist Bar Grid */}
              <div className="h-28 w-full bg-[#F8F9FA] border-2 border-black p-2 flex items-end justify-between gap-3">
                {[
                  { label: 'RED', height: 85, color: '#D90429' },
                  { label: 'BLUE', height: 60, color: '#0047AB' },
                  { label: 'YELLOW', height: Math.max(30, sliderVal), color: '#FFD000' },
                  { label: 'BLACK', height: 75, color: '#000000' },
                  { label: 'WHITE', height: 45, color: '#FFFFFF' },
                ].map((b) => (
                  <div key={b.label} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                    <div
                      className="w-full border-2 border-black transition-all duration-200"
                      style={{
                        height: `${b.height}%`,
                        backgroundColor: b.color,
                        boxShadow: '2px 2px 0px #000000',
                      }}
                    />
                    <span className="text-[10px] font-black text-black font-mono">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : isWin95 ? (
            /* ===================================================================
                D. WINDOWS 95: AUTHENTIC TASK MANAGER STEPPED METER
                =================================================================== */
            <div className="p-3 bg-[#C0C0C0] border-2 border-t-white border-l-white border-b-black border-r-black space-y-2 select-none">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-black">
                <span>CPU Usage History [Stepped Meter]</span>
                <span className="text-[#008000]">{sliderVal}% ACTIVE</span>
              </div>
              <div className="h-24 w-full bg-black border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white p-2 flex items-end justify-between gap-1.5 font-mono">
                {Array.from({ length: 16 }).map((_, i) => {
                  const stepThreshold = ((i + 1) / 16) * 100;
                  const isLit = sliderVal >= stepThreshold * 0.7;
                  return (
                    <div key={i} className="flex-1 flex flex-col justify-end gap-0.5 h-full">
                      {Array.from({ length: 8 }).map((_, j) => {
                        const segActive = isLit && 8 - j <= (sliderVal / 100) * 8;
                        return (
                          <div
                            key={j}
                            className="w-full h-2 rounded-none transition-colors"
                            style={{
                              backgroundColor: segActive ? '#00FF00' : '#002200',
                              boxShadow: segActive ? '0 0 2px #00FF00' : 'none',
                            }}
                          />
                        );
                      })}
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-black">
                <span>MEM: 16.4 MB / 32 MB</span>
                <span>THREADS: 48 // IRQ: 0x05</span>
              </div>
            </div>
          ) : isNeumorphic ? (
            /* ===================================================================
                E. NEUMORPHIC SOFT UI: CONCENTRIC DIAL & WAVEFORM WELL
                =================================================================== */
            <div className="p-4 rounded-3xl space-y-3" style={cardStyle}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold tracking-tight" style={{ color: palette.text }}>
                    Concentric Debossed Telemetry
                  </h3>
                  <p className="text-[11px] opacity-75 font-mono">
                    Carved dual opposing soft shadows molded into pale periwinkle
                  </p>
                </div>
                <span
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold"
                  style={{
                    color: palette.primary,
                    boxShadow:
                      'inset 2px 2px 4px rgba(180, 185, 210, 0.5), inset -2px -2px 4px rgba(255, 255, 255, 0.95)',
                  }}
                >
                  POTENTIOMETER: {sliderVal}%
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
                <div
                  className="p-3 rounded-2xl flex items-center justify-around gap-2"
                  style={{
                    boxShadow:
                      'inset 3px 3px 7px rgba(180, 185, 210, 0.5), inset -3px -3px 7px rgba(255, 255, 255, 0.95)',
                  }}
                >
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(180, 185, 210, 0.45)" strokeWidth="3" />
                      <circle
                        cx="18"
                        cy="18"
                        r="14"
                        fill="none"
                        stroke={palette.primary}
                        strokeWidth="3"
                        strokeDasharray="87.96"
                        strokeDashoffset={87.96 - (87.96 * sliderVal) / 100}
                        strokeLinecap="round"
                        className="transition-all duration-150"
                      />
                    </svg>
                    <div
                      className="absolute w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-mono font-bold"
                      style={{
                        backgroundColor: palette.background,
                        color: palette.primary,
                        boxShadow:
                          '3px 3px 6px rgba(180, 185, 210, 0.55), -3px -3px 6px rgba(255, 255, 255, 1)',
                      }}
                    >
                      {sliderVal}%
                    </div>
                  </div>
                  <div className="flex flex-col text-xs">
                    <span className="font-bold">Radial Potentiometer</span>
                    <span className="text-[10px] opacity-75 font-mono">360° Inset Well</span>
                    <span className="text-[10px] font-bold text-indigo-500 mt-1 font-mono">
                      ARC: {(sliderVal * 3.6).toFixed(0)}°
                    </span>
                  </div>
                </div>

                <div
                  className="p-3 rounded-2xl flex flex-col justify-between h-full gap-2"
                  style={{
                    boxShadow:
                      'inset 3px 3px 7px rgba(180, 185, 210, 0.5), inset -3px -3px 7px rgba(255, 255, 255, 0.95)',
                  }}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold opacity-75">
                    <span>EQUALIZER FREQ</span>
                    <span>44.1 kHz</span>
                  </div>
                  <div className="flex items-end justify-between gap-1 h-10">
                    {[35, 60, 45, 90, 75, 40, sliderVal, 65, 80, 50, 70, 45].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-full transition-all duration-200"
                        style={{
                          height: `${Math.max(15, (h * sliderVal) / 100)}%`,
                          backgroundColor: palette.primary,
                          opacity: 0.85,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : isCyberpunk ? (
            /* ===================================================================
                F. CYBERPUNK HUD TELEMETRY COORDINATE GRID
                =================================================================== */
            <div className="p-4 space-y-2.5" style={cardStyle}>
              <div className="flex items-center justify-between font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FCEE0A] animate-ping" />
                  <span className="text-xs font-black text-[#FCEE0A] tracking-wider">
                    TARGET_LOCK // 0x7FFA
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#00F0FF] border border-[#00F0FF]/60 px-1.5 py-0.5">
                  FREQUENCY: 92.4 GHz
                </span>
              </div>

              <div className="h-24 w-full border border-[#00F0FF]/40 bg-black/70 relative p-2 flex items-center justify-between font-mono overflow-hidden">
                <div className="relative z-10 space-y-1 text-[10px] text-[#00F0FF]">
                  <div>⊕ ORIGIN: [840.22, 110.84, 0.94]</div>
                  <div>⚡ TRAUMA_TEAM: EN_ROUTE</div>
                  <div>⚔ ICE_BREAKER: STATUS_OPTIMAL</div>
                </div>
                <div className="relative z-10 flex flex-col items-end gap-1">
                  <div className="text-xl font-black text-[#FCEE0A]">{sliderVal}%</div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-1.5 h-4 transition-colors"
                        style={{
                          backgroundColor: (i / 12) * 100 <= sliderVal ? '#FCEE0A' : '#333333',
                          boxShadow: (i / 12) * 100 <= sliderVal ? '0 0 6px #FCEE0A' : 'none',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : isGameboy ? (
            /* ===================================================================
                G. GAME BOY 1989 AUTHENTIC PEA-SOUP LCD
                =================================================================== */
            <div className="p-3 bg-[#8BAC0F] border-2 border-[#0F380F] space-y-2 select-none font-mono text-[#0F380F]">
              <div className="flex items-center justify-between text-xs font-black">
                <span>8-BIT PORTABLE DMG-01</span>
                <span>BATTERY: OK</span>
              </div>
              <div className="h-24 w-full bg-[#9BBC0F] border-2 border-[#0F380F] p-2 flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span>HP [████████░░]</span>
                  <span>{sliderVal} / 100</span>
                </div>
                <div className="flex items-center justify-between text-[10px]">
                  <span>EXP: 42,800 // LVL 42</span>
                  <span>STATUS: READY</span>
                </div>
              </div>
            </div>
          ) : isCadBlueprint ? (
            /* ===================================================================
                H. CAD ARCHITECTURAL BLUEPRINT
                =================================================================== */
            <div className="p-4 bg-[#0B2545] border border-cyan-400 space-y-2 font-mono text-cyan-200">
              <div className="flex items-center justify-between text-xs">
                <span>|◄―――――――――――― 480.00 mm ± 0.05 ――――――――――――►|</span>
                <span className="border border-cyan-400 px-2 py-0.5 text-[9px] font-bold">
                  SCALE 1:50
                </span>
              </div>
              <div className="h-24 w-full border border-cyan-400/50 bg-blue-950/60 p-2 flex items-center justify-between text-xs">
                <div>⊕ ORIGIN [0.00, 0.00]</div>
                <div className="text-[10px] opacity-80">
                  TOLERANCE ±0.05 // VECTOR GRID SNAP 20mm
                </div>
                <div className="font-bold border border-cyan-400 px-2 py-0.5">
                  DIAMETER: {(sliderVal * 4.8).toFixed(1)} mm
                </div>
              </div>
            </div>
          ) : (
            /* ===================================================================
                I. STRIPE FINTECH & MODERN SAAS DASHBOARD
                =================================================================== */
            <div className="p-4 space-y-2" style={cardStyle}>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider opacity-60">
                    Telemetry & Metrics
                  </span>
                  <h3 className="text-base sm:text-xl font-extrabold tracking-tight" style={headingStyle}>
                    {font.previewSample}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5">
                  <span
                    className="text-xs font-mono font-bold px-2.5 py-1 rounded-full border"
                    style={{
                      borderColor: `${palette.primary}44`,
                      backgroundColor: `${palette.primary}15`,
                      color: palette.primary,
                    }}
                  >
                    +{sliderVal}.4% MRR
                  </span>
                </div>
              </div>
              <p className="text-xs opacity-75 max-w-xl leading-relaxed">
                Active combination of {palette.name}, {font.name}, and {surface.name}.
              </p>
            </div>
          )}
        </div>

        {/* =======================================================================
            CARD 2: INTERACTIVE TACTILE CONTROL CENTER
            Search, Dropdown Select, Checkboxes, Slider, Radio Group, Buttons
            ======================================================================= */}
        <div className="p-3.5 sm:p-4 space-y-3 relative z-10" style={cardStyle}>
          {/* Top Bar inside Controls Card: Segmented Tabs & Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div
              className="flex items-center gap-1 p-1"
              style={{
                borderColor: isBauhaus ? '#000000' : isClaymorphism || isNeumorphic ? 'transparent' : isMilkyGlass ? 'rgba(255, 255, 255, 0.85)' : `${palette.border}44`,
                borderWidth: isBauhaus ? '2px' : isClaymorphism || isNeumorphic ? '0px' : '1px',
                borderRadius: isBauhaus ? '0px' : isClaymorphism || isMilkyGlass ? '9999px' : '12px',
                backgroundColor: isClaymorphism
                  ? '#EBE3D7'
                  : isNeumorphic
                  ? palette.background
                  : isMilkyGlass
                  ? 'rgba(255, 255, 255, 0.55)'
                  : `${palette.background}88`,
                boxShadow: isClaymorphism
                  ? 'inset 2px 2px 4px rgba(160, 140, 120, 0.25), inset -2px -2px 4px rgba(255, 255, 255, 0.95)'
                  : isNeumorphic
                  ? 'inset 2px 2px 5px rgba(180, 185, 210, 0.4), inset -2px -2px 5px rgba(255, 255, 255, 0.9)'
                  : isMilkyGlass
                  ? 'inset 0 1px 2px rgba(100, 115, 145, 0.08), 0 2px 8px rgba(100, 115, 145, 0.04)'
                  : 'none',
              }}
            >
              {(['overview', 'telemetry', 'controls'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className="h-7 px-2.5 text-xs font-semibold cursor-pointer transition-all inline-flex items-center justify-center whitespace-nowrap"
                  style={{
                    ...engineStyles.tabPill(activeTab === tab),
                    color: engineStyles.tabTextColor(activeTab === tab),
                  }}
                >
                  {tab === 'overview' && '✦ Overview'}
                  {tab === 'telemetry' && '⚡ Telemetry'}
                  {tab === 'controls' && '⚙ Controls'}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span
                className={`${components.badgeClass} h-7 px-2.5 inline-flex items-center justify-center whitespace-nowrap text-xs`}
                style={{
                  backgroundColor: isBauhaus
                    ? '#FFD000'
                    : isClaymorphism
                    ? '#FFFFFF'
                    : isMilkyGlass
                    ? 'rgba(255, 255, 255, 0.85)'
                    : `${palette.accent}25`,
                  color: isBauhaus
                    ? '#000000'
                    : isClaymorphism
                    ? '#2563EB'
                    : isMilkyGlass
                    ? '#0284C7'
                    : palette.isDark
                    ? '#FFFFFF'
                    : palette.text,
                  borderColor: isBauhaus
                    ? '#000000'
                    : isClaymorphism
                    ? 'rgba(255, 255, 255, 0.9)'
                    : isMilkyGlass
                    ? 'rgba(255, 255, 255, 0.95)'
                    : palette.border,
                  borderWidth: isBauhaus ? '2px' : '1px',
                  boxShadow: isClaymorphism
                    ? '0 4px 10px rgba(180, 160, 140, 0.18), inset 1px 1px 2px rgba(255, 255, 255, 0.95), inset -1px -1px 2px rgba(160, 140, 120, 0.08)'
                    : isMilkyGlass
                    ? '0 4px 12px rgba(100, 115, 145, 0.08), inset 0 1px 1px #FFFFFF'
                    : undefined,
                }}
              >
                ACTIVE // OPTIMAL
              </span>
            </div>
          </div>

          {/* Row 1: Search Input & Cluster Gateway Dropdown Select */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 relative ${dropdownOpen ? 'z-50' : 'z-20'}`}>
            {/* Search Input Box with Authenticated Theme Physics */}
            {isClaymorphism ? (
              <div
                className="w-full h-10 p-0.5 rounded-full transition-all duration-200 flex items-center"
                style={{
                  backgroundColor: '#FFFFFF',
                  boxShadow: isInputFocused
                    ? '0 10px 24px rgba(185, 160, 135, 0.35), 0 2px 5px rgba(185, 160, 135, 0.2), inset 0 2px 3px #FFFFFF, 0 0 0 2.5px rgba(37, 99, 235, 0.45)'
                    : isInputHovered
                    ? '0 8px 18px rgba(185, 160, 135, 0.3), 0 2px 4px rgba(185, 160, 135, 0.18), inset 0 2px 3px #FFFFFF'
                    : '0 6px 16px rgba(185, 160, 135, 0.25), 0 2px 4px rgba(185, 160, 135, 0.15), inset 0 2px 3px #FFFFFF, inset 0 -1.5px 2px rgba(175, 150, 130, 0.12)',
                }}
                onMouseEnter={() => setIsInputHovered(true)}
                onMouseLeave={() => setIsInputHovered(false)}
              >
                <div
                  className="w-full h-full px-3.5 rounded-full flex items-center gap-2"
                  style={{
                    backgroundColor: '#EFEAE3',
                    boxShadow: 'inset 0 3px 6px rgba(140, 120, 100, 0.28), inset 0 1px 2px rgba(140, 120, 100, 0.35), inset 0 -1.5px 2px rgba(255, 255, 255, 0.95)',
                  }}
                >
                  <Search className="w-3.5 h-3.5 flex-shrink-0 text-[#8C827A]" />
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onFocus={() => setIsInputFocused(true)}
                    onBlur={() => setIsInputFocused(false)}
                    placeholder="Search reports..."
                    className="w-full bg-transparent text-xs text-[#23211E] outline-none placeholder:text-[#8C827A] font-medium"
                    style={{ fontFamily: font.fontFamily }}
                  />
                  {inputValue.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setInputValue('')}
                      className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] text-[#8C827A] hover:text-[#23211E] transition-colors"
                      title="Clear text"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div
                onMouseEnter={() => setIsInputHovered(true)}
                onMouseLeave={() => setIsInputHovered(false)}
                className={`w-full h-10 px-3 flex items-center gap-2 transition-all duration-150 relative ${
                  isWin95 ? 'border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white' : ''
                }`}
                style={{
                  backgroundColor: isMilkyGlass
                    ? 'rgba(255, 255, 255, 0.75)'
                    : isWin95
                    ? '#FFFFFF'
                    : isBauhaus
                    ? '#FFFFFF'
                    : palette.background,
                  borderColor: isWin95
                    ? undefined
                    : isNeumorphic
                    ? 'transparent'
                    : isInputFocused
                    ? isMilkyGlass
                      ? '#0284C7'
                      : palette.primary
                    : isInputHovered
                    ? palette.border
                    : isMilkyGlass
                    ? 'rgba(255, 255, 255, 0.95)'
                    : isBauhaus
                    ? '#000000'
                    : `${palette.border}66`,
                  borderWidth: isWin95 ? undefined : isNeumorphic ? '0px' : isBauhaus ? '3px' : '1px',
                  boxShadow: isNeumorphic
                    ? isInputFocused
                      ? `inset 3px 3px 6px rgba(180,185,210,0.55), inset -3px -3px 6px rgba(255,255,255,0.95), 0 0 0 2px ${palette.primary}55`
                      : 'inset 3px 3px 6px rgba(180,185,210,0.45), inset -3px -3px 6px rgba(255,255,255,0.95)'
                    : isMilkyGlass
                    ? isInputFocused
                      ? '0 6px 18px rgba(100, 115, 145, 0.12), inset 0 1px 1px #FFFFFF, 0 0 0 2px rgba(2, 132, 199, 0.35)'
                      : '0 4px 14px rgba(100, 115, 145, 0.05), inset 0 1px 1px #FFFFFF'
                    : isBauhaus
                    ? isInputFocused
                      ? '3px 3px 0px #000000'
                      : 'none'
                    : isInputFocused
                    ? `0 0 0 2px ${palette.primary}44`
                    : 'none',
                  borderRadius:
                    isWin95 || isBauhaus ? '0px' : isNeumorphic || isMilkyGlass || surface.radius === '9999px' ? '9999px' : surface.radius === '0px' ? '0px' : '8px',
                }}
              >
                <Search
                  className="w-3.5 h-3.5 flex-shrink-0 transition-colors"
                  style={{
                    color: isInputFocused
                      ? palette.primary
                      : `${palette.text}88`,
                  }}
                />
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => setIsInputFocused(false)}
                  placeholder="Type commands or keywords..."
                  className="w-full h-full bg-transparent text-xs outline-none transition-colors"
                  style={{
                    color: isWin95 || isBauhaus ? '#000000' : palette.text,
                    fontFamily: font.fontFamily,
                  }}
                />
                {inputValue.length > 0 ? (
                  <button
                    type="button"
                    onClick={() => setInputValue('')}
                    className="text-[10px] font-mono px-1.5 py-0.5 rounded cursor-pointer transition-colors opacity-60 hover:opacity-100"
                    style={{
                      backgroundColor: palette.surface,
                      color: palette.text,
                    }}
                    title="Clear text"
                  >
                    ✕
                  </button>
                ) : (
                  <span
                    className="text-[10px] font-mono px-1.5 py-0.5 rounded border flex-shrink-0 opacity-70"
                    style={{
                      borderColor: `${palette.border}44`,
                      backgroundColor: palette.surface,
                    }}
                  >
                    ⌘K
                  </span>
                )}
              </div>
            )}

            {/* Cluster Gateway Dropdown Select */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={engineStyles.selectTriggerClassName(dropdownOpen)}
                style={engineStyles.selectTrigger(dropdownOpen)}
              >
                <div className="flex items-center gap-2 truncate">
                  <span
                    className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                      isClaymorphism ? 'bg-gradient-to-b from-sky-400 to-blue-600' : ''
                    }`}
                    style={{
                      backgroundColor: isClaymorphism ? undefined : palette.primary,
                      boxShadow: isClaymorphism
                        ? '0 2px 4px rgba(37,99,235,0.4), inset 0 1px 1.5px rgba(255,255,255,0.8), inset 0 -1px 1.5px rgba(0,0,0,0.2)'
                        : undefined,
                    }}
                  />
                  <span className="truncate font-semibold">{selectedDropdown}</span>
                </div>
                {isWin95 ? (
                  <div className="w-4 h-4 bg-[#C0C0C0] border border-t-white border-l-white border-b-black border-r-black flex items-center justify-center text-[9px] text-black font-bold">
                    ▼
                  </div>
                ) : (
                  <ChevronDown
                    className={`w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                    style={{
                      color: dropdownOpen ? (isClaymorphism ? '#2563EB' : isMilkyGlass ? '#0284C7' : palette.primary) : isClaymorphism ? '#6B7280' : `${palette.text}88`,
                    }}
                  />
                )}
              </button>

              {/* Floating Options Menu */}
              {dropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setDropdownOpen(false)}
                  />
                  <div
                    className={engineStyles.selectMenuClassName}
                    style={engineStyles.selectMenu}
                  >
                    {dropdownOptions.map((opt) => {
                      const isSelected = selectedDropdown === opt.label;
                      const textStyles = engineStyles.selectItemText(isSelected);

                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setSelectedDropdown(opt.label);
                            setDropdownOpen(false);
                          }}
                          className={engineStyles.selectItemClassName(isSelected)}
                          style={engineStyles.selectItem(isSelected)}
                        >
                          <div className="flex flex-col truncate pr-2">
                            <span className="font-semibold truncate" style={{ color: textStyles.titleColor }}>
                              {opt.label}
                            </span>
                            <span className="text-[10px] font-mono" style={{ color: textStyles.metaColor }}>
                              {opt.meta}
                            </span>
                          </div>
                          {isSelected && (
                            <Check
                              className="w-3.5 h-3.5 flex-shrink-0 stroke-[3]"
                              style={{
                                color: textStyles.checkColor,
                              }}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Row 2: Checkboxes & Dynamic Slider with Material Physics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 relative z-10">
            {/* Checkboxes */}
            <div className="flex flex-col justify-between gap-1.5">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="opacity-75">Protocol Flags</span>
                <span className="text-[9px] font-mono opacity-50">Checkboxes</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {/* Checkbox 1 */}
                <button
                  type="button"
                  onClick={() => setCheckbox1(!checkbox1)}
                  className={`w-full h-10 px-3 ${isClaymorphism ? 'border-0' : 'border'} flex items-center gap-2 cursor-pointer transition-all select-none text-left`}
                  style={engineStyles.checkboxItem(checkbox1)}
                >
                  <div
                    className={engineStyles.checkboxBoxClassName(checkbox1)}
                    style={engineStyles.checkboxBox(checkbox1)}
                  >
                    {checkbox1 && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <span
                    className="font-semibold text-[11px] truncate whitespace-nowrap"
                    style={{
                      color: isClaymorphism
                        ? '#23211E'
                        : isMilkyGlass
                        ? '#0F172A'
                        : checkbox1
                        ? isBauhaus
                          ? '#D90429'
                          : palette.primary
                        : isBauhaus
                        ? '#000000'
                        : palette.text,
                    }}
                  >
                    Enclave Lock
                  </span>
                </button>

                {/* Checkbox 2 */}
                <button
                  type="button"
                  onClick={() => setCheckbox2(!checkbox2)}
                  className={`w-full h-10 px-3 ${isClaymorphism ? 'border-0' : 'border'} flex items-center gap-2 cursor-pointer transition-all select-none text-left`}
                  style={engineStyles.checkboxItem(checkbox2)}
                >
                  <div
                    className={engineStyles.checkboxBoxClassName(checkbox2)}
                    style={engineStyles.checkboxBox(checkbox2)}
                  >
                    {checkbox2 && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <span
                    className="font-semibold text-[11px] truncate whitespace-nowrap"
                    style={{
                      color: isClaymorphism
                        ? '#23211E'
                        : isMilkyGlass
                        ? '#0F172A'
                        : checkbox2
                        ? isBauhaus
                          ? '#D90429'
                          : palette.primary
                        : isBauhaus
                        ? '#000000'
                        : palette.text,
                    }}
                  >
                    Sync 60Hz
                  </span>
                </button>
              </div>
            </div>

            {/* Dynamic Slider Potentiometer (Directly drives Card 1 in real time!) */}
            <div
              className={`p-3.5 ${isClaymorphism ? 'border-0' : 'border'} flex flex-col justify-between gap-2`}
              style={{
                backgroundColor: isMilkyGlass
                  ? 'rgba(255, 255, 255, 0.72)'
                  : isWin95
                  ? '#C0C0C0'
                  : isClaymorphism
                  ? '#FFFFFF'
                  : isBauhaus
                  ? '#FFFFFF'
                  : palette.background,
                borderColor: isNeumorphic || isClaymorphism
                  ? 'transparent'
                  : isMilkyGlass
                  ? 'rgba(255, 255, 255, 0.95)'
                  : isWin95
                  ? '#808080'
                  : isBauhaus
                  ? '#000000'
                  : `${palette.border}66`,
                borderWidth: isClaymorphism ? '0px' : isBauhaus ? '2px' : '1px',
                borderRadius:
                  isWin95 || isBauhaus ? '0px' : surface.radius === '9999px' ? '9999px' : surface.radius === '0px' ? '0px' : isClaymorphism ? '24px' : isNeumorphic ? '14px' : isMilkyGlass ? '20px' : '8px',
                boxShadow: isClaymorphism
                  ? '0 8px 18px rgba(185, 160, 135, 0.25), 0 2px 4px rgba(185, 160, 135, 0.14), inset 0 2px 3px rgba(255, 255, 255, 1), inset 0 -2px 3px rgba(175, 150, 130, 0.1)'
                  : isNeumorphic
                  ? 'inset 2px 2px 5px rgba(180,185,210,0.45), inset -2px -2px 5px rgba(255,255,255,0.95)'
                  : isMilkyGlass
                  ? '0 4px 14px rgba(100, 115, 145, 0.08), inset 0 1px 1px #FFFFFF'
                  : isBauhaus
                  ? '3px 3px 0px #000000'
                  : 'none',
              }}
            >
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="opacity-75">Intensity Modulation</span>
                <span
                  className="font-mono font-bold"
                  style={{
                    color: isBauhaus
                      ? '#D90429'
                      : isClaymorphism
                      ? '#2563EB'
                      : isMilkyGlass
                      ? '#0284C7'
                      : palette.primary,
                  }}
                >
                  {sliderVal}%
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                {isClaymorphism && (
                  <div
                    className="w-full h-3 rounded-full relative overflow-hidden flex items-center p-0.5"
                    style={{
                      backgroundColor: '#EFEAE3',
                      boxShadow: 'inset 0 3px 6px rgba(140, 120, 100, 0.28), inset 0 1px 2px rgba(140, 120, 100, 0.35), inset 0 -1.5px 2px rgba(255, 255, 255, 0.95)',
                    }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-150"
                      style={{
                        width: `${sliderVal}%`,
                        background: 'linear-gradient(90deg, #38bdf8 0%, #2563eb 50%, #f43f5e 100%)',
                        boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.8), inset 0 -1px 1px rgba(0, 0, 0, 0.2)',
                      }}
                    />
                  </div>
                )}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderVal}
                  onChange={(e) => setSliderVal(Number(e.target.value))}
                  style={{
                    accentColor: isBauhaus ? '#D90429' : isClaymorphism ? '#2563EB' : isMilkyGlass ? '#0284C7' : palette.primary,
                    cursor: 'ew-resize',
                  }}
                  className="w-full h-2 rounded-lg cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Row 3: Interactive Radio Buttons Group with Tactile Physics */}
          <div className="pt-1 relative z-10">
            <div className="flex items-center justify-between mb-1">
              <label className="text-[10px] font-mono font-bold uppercase tracking-wider opacity-75">
                Routing Profile
              </label>
              <span className="text-[9px] font-mono opacity-50">Radio Group</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { id: 'standard', label: 'Standard', desc: '1x Burst' },
                { id: 'turbo', label: 'Turbo', desc: '10x Speed' },
                { id: 'isolated', label: 'Airgap', desc: 'Zero-Trust' },
              ].map((tier) => {
                const isSelected = selectedRadio === tier.id;
                return (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSelectedRadio(tier.id as 'standard' | 'turbo' | 'isolated')}
                    className={`w-full h-14 p-2 ${isClaymorphism ? 'border-0' : 'border'} flex flex-col items-center justify-center gap-1 cursor-pointer transition-all text-center select-none`}
                    style={engineStyles.radioOption(isSelected)}
                  >
                    <div className="flex items-center gap-1.5">
                      <div
                        className={`w-4 h-4 flex items-center justify-center transition-all flex-shrink-0 ${
                          isWin95 ? 'border-2 border-t-[#808080] border-l-[#808080] border-b-white border-r-white' : ''
                        }`}
                        style={{
                          backgroundColor: isClaymorphism
                            ? '#EFEAE3'
                            : isWin95
                            ? '#FFFFFF'
                            : isMilkyGlass
                            ? 'rgba(255, 255, 255, 0.85)'
                            : 'transparent',
                          borderColor: isWin95
                            ? undefined
                            : isClaymorphism
                            ? 'transparent'
                            : isMilkyGlass
                            ? isSelected
                              ? '#0284C7'
                              : 'rgba(255, 255, 255, 0.95)'
                            : isSelected
                            ? isBauhaus
                              ? '#FFFFFF'
                              : palette.primary
                            : isBauhaus
                            ? '#000000'
                            : `${palette.text}66`,
                          borderWidth: isWin95 ? undefined : isClaymorphism ? '0px' : isBauhaus ? '2px' : '1px',
                          borderRadius: '9999px',
                          boxShadow: isClaymorphism
                            ? 'inset 0 2px 4px rgba(140, 120, 100, 0.28), inset 0 -1px 2px rgba(255, 255, 255, 0.95)'
                            : isMilkyGlass
                            ? 'inset 0 1px 1px #FFFFFF, 0 1px 3px rgba(100, 115, 145, 0.08)'
                            : undefined,
                        }}
                      >
                        {isSelected && (
                          <div
                            className="w-2 h-2 transition-transform rounded-full"
                            style={{
                              backgroundColor: isBauhaus
                                ? '#FFFFFF'
                                : isWin95
                                ? '#000000'
                                : isClaymorphism
                                ? '#2563EB'
                                : isMilkyGlass
                                ? '#0284C7'
                                : palette.primary,
                              boxShadow: isClaymorphism
                                ? '0 2px 4px rgba(37, 99, 235, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.9)'
                                : isMilkyGlass
                                ? '0 2px 6px rgba(2, 132, 199, 0.5)'
                                : undefined,
                            }}
                          />
                        )}
                      </div>
                      <span className="font-bold text-[11px] truncate" style={{ color: engineStyles.radioOptionTextColor(isSelected) }}>
                        {tier.label}
                      </span>
                    </div>
                    <span className="text-[9px] font-mono opacity-75" style={{ color: engineStyles.radioOptionTextColor(isSelected) }}>
                      {tier.desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row 4: Buttons & Auto-Sync Toggle with Authenticated Interaction Physics */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-black/10 relative z-0">
            <div className="flex items-center gap-2">
              {/* Primary Action Button */}
              <button
                type="button"
                className={engineStyles.primaryButtonClassName}
                style={engineStyles.primaryButton}
              >
                <Zap className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="whitespace-nowrap">Primary Action</span>
              </button>

              {/* Secondary Button */}
              <button
                type="button"
                className={engineStyles.secondaryButtonClassName}
                style={engineStyles.secondaryButton}
              >
                <span className="whitespace-nowrap">Secondary</span>
              </button>
            </div>

            {/* Auto-Sync Toggle Switch */}
            <div className="h-9 flex items-center gap-2 text-xs">
              <span
                className="font-mono text-[11px] font-bold transition-colors select-none"
                style={{
                  color: toggleActive
                    ? isBauhaus
                      ? '#D90429'
                      : isClaymorphism
                      ? '#2563EB'
                      : palette.primary
                    : isBauhaus
                    ? '#555555'
                    : `${palette.text}88`,
                }}
              >
                {toggleActive ? 'AUTO-SYNC: ON' : 'AUTO-SYNC: OFF'}
              </span>
              <button
                type="button"
                onClick={() => setToggleActive(!toggleActive)}
                className={engineStyles.toggleTrackClassName(toggleActive)}
                style={engineStyles.toggleTrack(toggleActive)}
                title="Toggle automatic synchronization"
              >
                {engine.id === 'win95' ? (
                  <>
                    <span>{toggleActive ? '🗹' : '☐'}</span>
                    <span>SYNC</span>
                  </>
                ) : (
                  <div
                    className={engineStyles.toggleThumbClassName(toggleActive)}
                    style={engineStyles.toggleThumb(toggleActive)}
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* =======================================================================
            CARD 3: SUBSYSTEM INTERACTIVE TILES & THEME HERO MODULES
            ======================================================================= */}
        {isClaymorphism ? (
          /* Claymorphism Mockup #2: Team Activity Mini Table + Quick Actions */
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {/* Team Activity Table (cols 1-3) */}
            <div
              className="md:col-span-3 p-3.5 rounded-3xl bg-white border border-white space-y-2.5"
              style={{
                boxShadow:
                  '0 14px 30px rgba(180, 160, 140, 0.16), inset 2px 2px 4px rgba(255,255,255,1), inset -2px -2px 4px rgba(0,0,0,0.04)',
              }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-extrabold text-slate-800 tracking-tight">Team Activity</h3>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-bold">
                  <span>Monthly</span>
                  <div
                    onClick={() => setToggleActive(!toggleActive)}
                    className="w-8 h-4 rounded-full relative cursor-pointer transition-all p-0.5"
                    style={{
                      backgroundColor: toggleActive ? '#3B82F6' : '#DFD7CA',
                      boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.18)',
                    }}
                  >
                    <div
                      className="w-3 h-3 rounded-full bg-white transition-transform duration-200"
                      style={{
                        transform: toggleActive ? 'translateX(16px)' : 'translateX(0px)',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 text-[11px]">
                {[
                  { name: 'Marathan', role: 'Owner', task: 'Worning mxrmers', status: 'In Progress', statusColor: 'amber' },
                  { name: 'Marsamos', role: 'Owner', task: 'Taske your tasks', status: 'Completed', statusColor: 'emerald' },
                  { name: 'Mariet', role: 'Avator', task: 'Complete woring', status: 'Completed', statusColor: 'emerald' },
                ].map((m, i) => (
                  <div key={i} className="flex items-center justify-between p-1.5 rounded-xl bg-slate-50/70 border border-slate-100/60">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-400 to-rose-400 text-white text-[9px] font-bold flex items-center justify-center shadow-2xs">
                        {m.name[0]}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-800 text-[11px]">{m.name}</span>
                        <span className="text-[9px] text-slate-400 font-medium">{m.role}</span>
                      </div>
                    </div>
                    <span className="text-slate-600 text-[10px] hidden sm:inline font-medium">{m.task}</span>
                    <span
                      className="px-2 py-0.5 rounded-full text-[9px] font-bold select-none"
                      style={{
                        backgroundColor: m.statusColor === 'emerald' ? '#34D399' : '#FBBF24',
                        color: m.statusColor === 'emerald' ? '#064E3B' : '#78350F',
                        boxShadow:
                          '0 2px 6px rgba(0,0,0,0.1), inset 1px 1px 2px rgba(255,255,255,0.7), inset -1px -1px 2px rgba(0,0,0,0.15)',
                      }}
                    >
                      {m.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions (cols 4-5) */}
            <div
              className="md:col-span-2 p-3.5 rounded-3xl bg-white border border-white flex flex-col justify-between gap-2.5"
              style={{
                boxShadow:
                  '0 14px 30px rgba(180, 160, 140, 0.16), inset 2px 2px 4px rgba(255,255,255,1), inset -2px -2px 4px rgba(0,0,0,0.04)',
              }}
            >
              <h3 className="text-xs font-extrabold text-slate-800 tracking-tight">Quick Actions</h3>
              <button
                type="button"
                className="w-full py-2 px-3 rounded-2xl bg-white text-slate-800 font-bold text-xs cursor-pointer active:scale-95 transition-all text-center"
                style={{
                  boxShadow:
                    '0 6px 14px rgba(180, 160, 140, 0.25), inset 2px 2px 4px rgba(255,255,255,1), inset -2px -2px 4px rgba(160,140,120,0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.85)',
                }}
              >
                Create New Report
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  className="h-8 px-2 rounded-xl bg-white text-slate-700 font-bold text-[10px] cursor-pointer active:scale-95 transition-all inline-flex items-center justify-center text-center"
                  style={{
                    boxShadow:
                      '0 4px 10px rgba(180, 160, 140, 0.2), inset 1px 1px 2px rgba(255,255,255,1), inset -1px -1px 2px rgba(160,140,120,0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.85)',
                  }}
                >
                  Add Member
                </button>
                <button
                  type="button"
                  className="h-8 px-2 rounded-xl bg-white text-slate-700 font-bold text-[10px] cursor-pointer active:scale-95 transition-all inline-flex items-center justify-center text-center"
                  style={{
                    boxShadow:
                      '0 4px 10px rgba(180, 160, 140, 0.2), inset 1px 1px 2px rgba(255,255,255,1), inset -1px -1px 2px rgba(160,140,120,0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.85)',
                  }}
                >
                  Manage Subs
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Subsystem Interactive Tiles */
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {/* Tile 1: Engine Core Toggle */}
            <button
              type="button"
              onClick={() => setEngineOnline(!engineOnline)}
              className="h-14 p-2.5 border flex items-center justify-between text-left cursor-pointer transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md"
              style={{
                ...cardStyle,
                borderColor: isBauhaus ? '#000000' : engineOnline ? palette.border : `${palette.border}66`,
              }}
              title="Click to toggle Engine Core status"
            >
              <div className="flex items-center gap-2">
                <Cpu
                  className="w-3.5 h-3.5 transition-transform group-hover:rotate-45"
                  style={{ color: engineOnline ? (isBauhaus ? '#D90429' : palette.primary) : palette.textMuted }}
                />
                <div className="flex flex-col text-xs">
                  <span className="font-bold">Engine Core</span>
                  <span
                    className="text-[10px] font-mono font-bold"
                    style={{ color: engineOnline ? (palette.isDark ? '#50FA7B' : '#059669') : palette.textMuted }}
                  >
                    {engineOnline ? '100% ONLINE' : 'PAUSED'}
                  </span>
                </div>
              </div>
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: engineOnline ? (isBauhaus ? '#D90429' : palette.primary) : '#888888',
                  boxShadow: engineOnline ? (isBauhaus ? 'none' : `0 0 6px ${palette.primary}`) : 'none',
                }}
              />
            </button>

            {/* Tile 2: Throughput Pulse Surge */}
            <button
              type="button"
              onClick={() => setThroughput((prev) => prev + Math.floor(Math.random() * 200 + 50))}
              className="h-14 p-2.5 border flex items-center justify-between text-left cursor-pointer transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md"
              style={cardStyle}
              title="Click to surge throughput telemetry"
            >
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5" style={{ color: isBauhaus ? '#0047AB' : palette.secondary }} />
                <div className="flex flex-col text-xs">
                  <span className="font-bold">Throughput</span>
                  <span className="text-[10px] opacity-75 font-mono">
                    {throughput.toLocaleString()} TX/s
                  </span>
                </div>
              </div>
              <span
                className="text-[9px] font-mono px-1.5 py-0.5 rounded border font-bold"
                style={{
                  borderColor: isBauhaus ? '#000000' : palette.secondary,
                  color: isBauhaus ? '#0047AB' : palette.secondary,
                  backgroundColor: isBauhaus ? '#FFFFFF' : undefined,
                  boxShadow: isBauhaus ? '2px 2px 0px #000' : undefined,
                }}
              >
                +SURGE
              </span>
            </button>

            {/* Tile 3: Inspect Node Action */}
            <button
              type="button"
              onClick={() => {
                setThroughput((prev) => prev + 42);
              }}
              className="h-14 p-2.5 border flex items-center justify-between text-left cursor-pointer transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md"
              style={cardStyle}
              title="Click to run diagnostic inspection"
            >
              <div className="flex flex-col text-xs">
                <span className="font-bold">Inspect Node</span>
                <span className="text-[10px] opacity-75 font-mono">Diagnostic Ping</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5" style={{ color: isBauhaus ? '#D90429' : palette.primary }} />
            </button>
          </div>
        )}
      </div>

      {/* Footer Strip */}
      <div
        className="px-4 py-1.5 border-t flex flex-wrap items-center justify-between text-[11px] font-mono relative z-10 opacity-80"
        style={{
          borderColor: isBauhaus ? '#000000' : `${palette.border}22`,
          backgroundColor: isBauhaus ? '#F8F9FA' : `${palette.surface}88`,
          color: isBauhaus ? '#000000' : undefined,
        }}
      >
        <div className="flex items-center gap-2">
          <span>{palette.name}</span>
          <span>•</span>
          <span>{font.name}</span>
          <span>•</span>
          <span>{surface.name}</span>
        </div>
        <div>
          <span>{components.name}</span>
        </div>
      </div>
    </div>
  );
}
