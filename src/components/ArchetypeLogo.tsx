import type { SVGProps } from 'react';
import { LOGO_03_BRACKETS } from '../lib/brandLogosData';

export const ARCHETYPE_LOGO_PATH = LOGO_03_BRACKETS.path;
export const ARCHETYPE_LOGO_VIEWBOX = LOGO_03_BRACKETS.viewBox;

interface ArchetypeLogoProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

/**
 * ARCHETYPE Official Brand Mark (03 // BRACKETS)
 *
 * Two minimalist angled code brackets interlocking diagonally to form an 'A'.
 * Cleverly unites code syntax (< >) with visual architecture and design tokens.
 */
export function ArchetypeLogo({
  size = 24,
  className = '',
  ...props
}: ArchetypeLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={ARCHETYPE_LOGO_VIEWBOX}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Archetype Logo"
      role="img"
      {...props}
    >
      <path
        d={ARCHETYPE_LOGO_PATH}
        stroke="none"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}
