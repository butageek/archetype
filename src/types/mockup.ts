import React from 'react';

export type MockupCategory =
  | 'all'
  | 'saas'
  | 'devtools'
  | 'ai-creative'
  | 'fintech'
  | 'minimal'
  | 'dark'
  | 'retro';

export interface MockupPalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  border: string;
  text: string;
  textMuted: string;
  isDark: boolean;
}

export interface MockupStyle {
  radius: string;
  borderWidth: string;
  borderStyle: 'solid' | 'dashed' | 'double';
  shadow: string;
  density: 'compact' | 'balanced' | 'spacious';
}

export interface MockupTypography {
  heading: string;
  body: string;
  mono: string;
}

export interface WebAppMockupSpecimen {
  id: string;
  title: string;
  category: MockupCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  tags: string[];
  palette: MockupPalette;
  style: MockupStyle;
  typography: MockupTypography;
  accents: string[];
  agentPrompt: string;
  renderInteractive: (props: { isPreview?: boolean }) => React.ReactNode;
}
