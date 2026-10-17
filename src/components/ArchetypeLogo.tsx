import type { SVGProps } from 'react';

interface ArchetypeLogoProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  crossbarColor?: string;
  strokeWidth?: number;
}

/**
 * ARCHETYPE Official Monoline Brand Mark (04 // MONOLINE)
 *
 * An elegant continuous geometric ribbon forming an 'A' and an infinity synthesis loop.
 */
export function ArchetypeLogo({
  size = 24,
  className = '',
  crossbarColor = '#10B981',
  strokeWidth = 7,
  ...props
}: ArchetypeLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Archetype Logo"
      role="img"
      {...props}
    >
      {/* Outer Triangle Silhouette & Bottom Rounded Loops */}
      <path
        d="M 50 14
           C 56 14 82 50 84 68
           C 86 82 72 86 62 76
           C 52 66 48 54 50 48
           C 52 54 48 66 38 76
           C 28 86 14 82 16 68
           C 18 50 44 14 50 14 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner Apex Loop */}
      <path
        d="M 50 48
           C 42 38 42 22 50 22
           C 58 22 58 38 50 48 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Architectural Crossbar Bridge */}
      <path
        d="M 24 58
           C 38 48 62 48 76 58"
        stroke={crossbarColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
