import { ThemePreset, ThemeTokens } from '../types/theme';

export function getCssVariables(tokens: ThemeTokens, selector = ':root'): string {
  const { palette, radius, shadow, borderWidth } = tokens;

  // Resolve radius
  const radiusMap: Record<ThemeTokens['radius'], string> = {
    sharp: '0px',
    subtle: '4px',
    rounded: '10px',
    pill: '9999px',
  };

  // Resolve shadow
  const shadowMap: Record<ThemeTokens['shadow'], string> = {
    none: 'none',
    'hard-offset': `4px 4px 0px ${tokens.isDark ? '#000000' : tokens.palette.border}`,
    'layered-hard': `3px 3px 0px #000, 6px 6px 0px ${tokens.palette.primary}`,
    'subtle-diffused': '0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)',
    'glowing-neon': `0 0 16px ${tokens.palette.primary}66, 0 0 2px ${tokens.palette.primary}`,
    skeuomorphic: '0 2px 4px rgba(0,0,0,0.06), 0 8px 16px rgba(0,0,0,0.08)',
  };

  // Resolve density padding
  const densityPaddingMap: Record<ThemeTokens['density'], { x: string; y: string; card: string; gap: string }> = {
    compact: { x: '0.5rem', y: '0.25rem', card: '0.75rem', gap: '0.5rem' },
    balanced: { x: '0.875rem', y: '0.5rem', card: '1.25rem', gap: '1rem' },
    spacious: { x: '1.25rem', y: '0.75rem', card: '1.75rem', gap: '1.5rem' },
  };

  const p = densityPaddingMap[tokens.density];

  return `${selector} {
  /* Colors */
  --color-primary: ${palette.primary};
  --color-primary-foreground: ${palette.primaryForeground};
  --color-secondary: ${palette.secondary};
  --color-secondary-foreground: ${palette.secondaryForeground};
  --color-accent: ${palette.accent};
  --color-accent-foreground: ${palette.accentForeground};
  --color-background: ${palette.background};
  --color-surface: ${palette.cardSurface};
  --color-surface-muted: ${palette.cardSurfaceMuted};
  --color-border: ${palette.border};
  --color-border-muted: ${palette.borderMuted};
  --color-text-primary: ${palette.textPrimary};
  --color-text-muted: ${palette.textMuted};
  --color-success: ${palette.success};
  --color-warning: ${palette.warning};
  --color-danger: ${palette.danger};
  --color-info: ${palette.info};

  /* Structural Dimensions */
  --radius: ${radiusMap[radius]};
  --border-width: ${borderWidth};
  --border-style: ${tokens.borderStyle};
  --shadow-elevation: ${shadowMap[shadow]};

  /* Density & Spacing */
  --pad-x: ${p.x};
  --pad-y: ${p.y};
  --pad-card: ${p.card};
  --gap-grid: ${p.gap};

  /* Typography */
  --font-heading: ${tokens.typography.headingFamily};
  --font-body: ${tokens.typography.bodyFamily};
  --font-mono: ${tokens.typography.monoFamily};
  --letter-spacing: ${
    tokens.typography.letterSpacing === 'tight' ? '-0.025em' :
    tokens.typography.letterSpacing === 'tighter' ? '-0.05em' :
    tokens.typography.letterSpacing === 'wide' ? '0.05em' :
    tokens.typography.letterSpacing === 'widest' ? '0.1em' : '0em'
  };
}`;
}

export function generateTailwindV4Theme(tokens: ThemeTokens): string {
  return `@import "tailwindcss";

@theme {
  --color-primary: ${tokens.palette.primary};
  --color-primary-foreground: ${tokens.palette.primaryForeground};
  --color-secondary: ${tokens.palette.secondary};
  --color-secondary-foreground: ${tokens.palette.secondaryForeground};
  --color-accent: ${tokens.palette.accent};
  --color-accent-foreground: ${tokens.palette.accentForeground};
  --color-background: ${tokens.palette.background};
  --color-surface: ${tokens.palette.cardSurface};
  --color-surface-muted: ${tokens.palette.cardSurfaceMuted};
  --color-border: ${tokens.palette.border};
  --color-border-muted: ${tokens.palette.borderMuted};
  --color-text-primary: ${tokens.palette.textPrimary};
  --color-text-muted: ${tokens.palette.textMuted};

  --radius-archetype: ${tokens.radius === 'sharp' ? '0px' : tokens.radius === 'subtle' ? '4px' : tokens.radius === 'rounded' ? '10px' : '9999px'};
  --shadow-archetype: ${
    tokens.shadow === 'none' ? 'none' :
    tokens.shadow === 'hard-offset' ? '4px 4px 0px var(--color-border)' :
    tokens.shadow === 'glowing-neon' ? '0 0 16px var(--color-primary)' :
    tokens.shadow === 'skeuomorphic' ? '0 2px 4px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.08)' :
    '0 4px 12px rgba(0,0,0,0.08)'
  };
}`;
}

export function generateStyleSpecMarkdown(preset: ThemePreset): string {
  const { metadata, tokens } = preset;
  const isDark = tokens.isDark;

  const shadowDescription = {
    none: 'Zero drop shadows. Flat, pure graphic planes and high-definition boundaries.',
    'hard-offset': 'Strict offset block shadow with 0px blur radius (e.g., 4px 4px 0px #000). Never blur or soften edges.',
    'layered-hard': 'Layered geometric offset shadows with high contrast.',
    'subtle-diffused': 'Subtle, ambient elevation shadow with high blur and low opacity.',
    'glowing-neon': 'Luminous phosphor / plasma bloom glow. Card borders and interactive indicators emit colored photons.',
    skeuomorphic: 'Tactile physical lift shadows simulating thick paper, cardstock, or machined physical panels.',
  }[tokens.shadow];

  const densityInstructions = {
    compact: 'High-density telemetry layout. Use compact padding (px-3 py-1.5), tight gaps (gap-2), 12px-13px tabular numbers, and zero wasted whitespace.',
    balanced: 'Standard ergonomic web application spacing. Clean visual rhythm (p-4 to p-5, gap-4).',
    spacious: 'Generous negative space, editorial breathing room (p-6 to p-8, gap-6).',
  }[tokens.density];

  const activeAccents = Object.entries(tokens.accents)
    .filter(([, active]) => active)
    .map(([key]) => key)
    .join(', ');

  return `# STYLE SPECIFICATION: ${metadata.name.toUpperCase()}

> **Design Archetype**: ${metadata.name}
> **Category**: ${metadata.category}
> **Theme Mode**: ${isDark ? 'Dark Theme' : 'Light Theme'}
> **Tagline**: ${metadata.tagline}

---

## 1. Visual Directives & AI Agent System Prompt

Paste this instruction into your AI coding assistant (Cursor, Antigravity, Claude, Copilot, ChatGPT) prompt:

\`\`\`markdown
You are an expert front-end design engineer implementing the "${metadata.name}" design system.
Adhere strictly to these visual and layout invariants:

1. **Aesthetic Identity**: ${metadata.description}
2. **Shadow Invariant**: ${shadowDescription}
3. **Corner Treatment**: Corners MUST be "${tokens.radius}" (${
    tokens.radius === 'sharp' ? 'rounded-none / 0px radius' :
    tokens.radius === 'subtle' ? 'rounded-sm to rounded (3-4px)' :
    tokens.radius === 'rounded' ? 'rounded-lg to rounded-xl (8-12px)' : 'rounded-full (pill)'
  }). Do NOT mix rounded and sharp borders arbitrarily.
4. **Border Treatment**: Use ${tokens.borderWidth} solid borders with color \`${tokens.palette.border}\` on all container cards, buttons, and inputs.
5. **Layout Density**: ${densityInstructions}
6. **Active Accents**: ${activeAccents || 'None (pure clean layout)'}.
7. **Color Hierarchy**:
   - Primary Accent: \`${tokens.palette.primary}\` (Used for primary CTA, active navigation, key telemetry).
   - Secondary: \`${tokens.palette.secondary}\`.
   - Card Surface: \`${tokens.palette.cardSurface}\` against background \`${tokens.palette.background}\`.
   - Text Primary: \`${tokens.palette.textPrimary}\`, Text Muted: \`${tokens.palette.textMuted}\`.
\`\`\`

---

## 2. Design Tokens (CSS Variables)

Add these tokens to your \`globals.css\`:

\`\`\`css
${getCssVariables(tokens)}
\`\`\`

---

## 3. Tailwind CSS v4 Theme Block

For Tailwind CSS v4, include in your main CSS file:

\`\`\`css
${generateTailwindV4Theme(tokens)}
\`\`\`

---

## 4. Component Implementation Blueprints (React + Tailwind)

### Primary Button
\`\`\`tsx
export function ArchetypeButton({ children, variant = 'primary', ...props }: { children: React.ReactNode; variant?: 'primary' | 'secondary' | 'outline' }) {
  const base = "inline-flex items-center justify-center font-medium transition-all duration-150 cursor-pointer disabled:opacity-50 select-none";
  const size = "${tokens.density === 'compact' ? 'px-3 py-1 text-xs' : tokens.density === 'spacious' ? 'px-6 py-3 text-base' : 'px-4 py-2 text-sm'}";
  const radius = "${tokens.radius === 'sharp' ? 'rounded-none' : tokens.radius === 'subtle' ? 'rounded' : tokens.radius === 'rounded' ? 'rounded-lg' : 'rounded-full'}";
  const border = "border-[${tokens.borderWidth}] border-[${tokens.palette.border}]";
  const shadow = "${
    tokens.shadow === 'hard-offset' ? 'shadow-[3px_3px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#000]' :
    tokens.shadow === 'glowing-neon' ? 'shadow-[0_0_12px_${tokens.palette.primary}66]' :
    tokens.shadow === 'none' ? '' : 'shadow-sm active:translate-y-[1px]'
  }";

  const variants = {
    primary: "bg-[${tokens.palette.primary}] text-[${tokens.palette.primaryForeground}] hover:brightness-110",
    secondary: "bg-[${tokens.palette.secondary}] text-[${tokens.palette.secondaryForeground}] hover:brightness-105",
    outline: "bg-transparent text-[${tokens.palette.textPrimary}] hover:bg-[${tokens.palette.cardSurfaceMuted}]",
  };

  return (
    <button className={\`\${base} \${size} \${radius} \${border} \${shadow} \${variants[variant]}\`} {...props}>
      {children}
    </button>
  );
}
\`\`\`

### Card Container
\`\`\`tsx
export function ArchetypeCard({ title, badge, children }: { title: string; badge?: string; children: React.ReactNode }) {
  return (
    <div className="relative bg-[${tokens.palette.cardSurface}] text-[${tokens.palette.textPrimary}] border-[${tokens.borderWidth}] border-[${tokens.palette.border}] ${
      tokens.radius === 'sharp' ? 'rounded-none' : tokens.radius === 'subtle' ? 'rounded' : tokens.radius === 'rounded' ? 'rounded-xl' : 'rounded-2xl'
    } ${
      tokens.shadow === 'hard-offset' ? 'shadow-[4px_4px_0px_#000]' :
      tokens.shadow === 'glowing-neon' ? 'shadow-[0_0_16px_${tokens.palette.primary}44]' :
      tokens.shadow === 'none' ? '' : 'shadow-md'
    } ${tokens.density === 'compact' ? 'p-3' : tokens.density === 'spacious' ? 'p-6' : 'p-4'}">
      <div className="flex items-center justify-between pb-2 mb-3 border-b border-[${tokens.palette.borderMuted}]">
        <h3 className="font-${tokens.typography.headingWeight} text-sm ${tokens.typography.headingTransform === 'uppercase' ? 'uppercase tracking-wider' : ''} text-[${tokens.palette.textPrimary}]">
          {title}
        </h3>
        {badge && (
          <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-[${tokens.palette.accent}] text-[${tokens.palette.accentForeground}] border border-[${tokens.palette.border}] ${tokens.radius === 'pill' ? 'rounded-full' : 'rounded-none'}">
            {badge}
          </span>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}
\`\`\`

---

## 5. Summary Metadata
- Exported on: ${new Date().toISOString()}
- Total Token Keys: 16 colors + 7 layout properties
`;
}

export function generateReactComponentTemplates(preset: ThemePreset): string {
  const { tokens } = preset;
  const { palette } = tokens;

  return `// Archetype Component Library: ${preset.metadata.name}
import React from 'react';

// 1. Primary Button
export const ArchetypeButton = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      style={{
        backgroundColor:
          variant === 'primary' ? '${palette.primary}' :
          variant === 'secondary' ? '${palette.secondary}' :
          variant === 'accent' ? '${palette.accent}' : 'transparent',
        color:
          variant === 'primary' ? '${palette.primaryForeground}' :
          variant === 'secondary' ? '${palette.secondaryForeground}' :
          variant === 'accent' ? '${palette.accentForeground}' : '${palette.textPrimary}',
        borderColor: '${palette.border}',
        borderWidth: '${tokens.borderWidth}',
        borderStyle: '${tokens.borderStyle}',
        borderRadius: '${tokens.radius === 'sharp' ? '0px' : tokens.radius === 'subtle' ? '4px' : tokens.radius === 'rounded' ? '8px' : '9999px'}',
        padding: '${tokens.density === 'compact' ? '4px 10px' : tokens.density === 'spacious' ? '12px 24px' : '8px 16px'}',
        fontFamily: '${tokens.typography.headingFamily}',
        letterSpacing: '${tokens.typography.letterSpacing === 'wide' ? '0.05em' : '-0.01em'}',
        textTransform: '${tokens.typography.headingTransform}',
      }}
      className={\`font-semibold transition-transform active:scale-95 cursor-pointer \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
};

// 2. Input Field
export const ArchetypeInput = ({
  label,
  placeholder,
  ...props
}: {
  label?: string;
  placeholder?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="flex flex-col gap-1 text-left">
      {label && (
        <label
          style={{ color: '${palette.textMuted}' }}
          className="text-xs font-mono uppercase tracking-wider font-semibold"
        >
          {label}
        </label>
      )}
      <input
        placeholder={placeholder}
        style={{
          backgroundColor: '${palette.cardSurface}',
          color: '${palette.textPrimary}',
          borderColor: '${palette.border}',
          borderWidth: '${tokens.borderWidth}',
          borderRadius: '${tokens.radius === 'sharp' ? '0px' : tokens.radius === 'subtle' ? '4px' : tokens.radius === 'rounded' ? '8px' : '9999px'}',
          padding: '${tokens.density === 'compact' ? '4px 8px' : tokens.density === 'spacious' ? '10px 14px' : '6px 12px'}',
        }}
        className="w-full text-sm outline-none focus:ring-2 focus:ring-[${palette.primary}]"
        {...props}
      />
    </div>
  );
};

// 3. Status Badge
export const ArchetypeBadge = ({
  children,
  tone = 'primary',
}: {
  children: React.ReactNode;
  tone?: 'primary' | 'success' | 'warning' | 'danger';
}) => {
  const toneBg = {
    primary: '${palette.primary}',
    success: '${palette.success}',
    warning: '${palette.warning}',
    danger: '${palette.danger}',
  }[tone];

  return (
    <span
      style={{
        backgroundColor: toneBg,
        color: '#FFFFFF',
        borderColor: '${palette.border}',
        borderWidth: '${tokens.borderWidth === '0px' ? '0px' : '1px'}',
        borderRadius: '${tokens.radius === 'pill' ? '9999px' : tokens.radius === 'rounded' ? '6px' : '0px'}',
        padding: '2px 8px',
      }}
      className="inline-flex items-center text-[10px] font-mono font-bold uppercase tracking-wider"
    >
      {children}
    </span>
  );
};
`;
}
