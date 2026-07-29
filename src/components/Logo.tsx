/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark' | 'adaptive';
}

export default function Logo({ className = '', size = 'md', theme = 'adaptive' }: LogoProps) {
  // Dimension ratios mapped perfectly to the horizontal-stacked hand-drawn logo (approx 2.3 ratio)
  const dims = {
    sm: { width: 96, height: 42 },
    md: { width: 144, height: 62 },
    lg: { width: 216, height: 93 }
  }[size];

  // Primary charcoal color from the handwriting logo
  const getPrimaryColor = () => {
    if (theme === 'light') return '#1E1C1A'; // Deep ink-wash charcoal
    if (theme === 'dark') return '#F4F0EA';  // Clean white
    return 'currentColor'; // Adaptive
  };

  const primaryColor = getPrimaryColor();

  return (
    <div className={`inline-block select-none ${className}`} style={{ width: dims.width, height: dims.height }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 150 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* 
          High-fidelity vector depiction of the requested new handwritten logo:
          - Line 1: "Plus mineral" in humanistic, elegant hand-drawn lettering.
          - Line 2: "有點礦" in delicate, neat handwriting script.
        */}
        
        {/* "Plus mineral" - stylized hand-drawn header */}
        <text
          x="75"
          y="32"
          textAnchor="middle"
          fill={primaryColor}
          fontFamily="'Caveat', 'Delius', 'Patrick Hand', 'Kalam', 'Segoe Print', cursive, sans-serif"
          fontSize="20"
          fontWeight="500"
          className="transition-colors duration-300"
        >
          Plus mineral
        </text>

        {/* "有點礦" - thin, clean hand-drawn script footer */}
        <text
          x="77"
          y="54"
          textAnchor="middle"
          fill={primaryColor}
          fontFamily="'Long Cang', 'DotGothic16', 'Zhi Mang Xing', 'STKaiti', 'KaiTi', 'BiauKai', 'DFKai-SB', sans-serif"
          fontSize="14"
          letterSpacing="4"
          className="transition-colors duration-300"
        >
          有點礦
        </text>
      </svg>
    </div>
  );
}
