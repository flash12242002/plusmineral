/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface GemRendererProps {
  color: string;
  id: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export default function GemRenderer({ color, id, size = 'md' }: GemRendererProps) {
  // Map crystal ID to distinct elegant vector geode / crystal facet paths
  const renderFacetSvg = () => {
    switch (id) {
      case 'red-agate':
        return (
          // Concentric banded agate-like layered concentric patterns with rich warm red gradient
          <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="redAgateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFA07A" /> {/* Light coral/salmon band */}
                <stop offset="35%" stopColor="#FF4500" /> {/* Orangered */}
                <stop offset="70%" stopColor="#C71585" /> {/* Medium violet red */}
                <stop offset="100%" stopColor="#800000" /> {/* Deep maroon */}
              </linearGradient>
              <linearGradient id="agateBand1" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B0000" />
                <stop offset="50%" stopColor="#FF6347" />
                <stop offset="100%" stopColor="#CD5C5C" />
              </linearGradient>
            </defs>
            <g transform="translate(7.5, 9) scale(0.85)">
              <circle cx="50" cy="60" r="32" fill="#FF4500" opacity="0.35" className="blur-xl" />
              
              {/* Smooth rounded organic pebble/node shape typical of raw/polished agate nodule */}
              <path d="M50,15 C75,12 85,32 82,60 C79,88 68,102 50,105 C32,105 18,88 18,60 C18,32 25,18 50,15 Z" fill="url(#redAgateGrad)" />
              
              {/* Elegant concentric waves or bands representing agate's signature growth lines */}
              <path d="M28,45 C35,32 65,32 72,45" fill="none" stroke="#FFE4E1" strokeWidth="1.5" strokeOpacity="0.4" />
              <path d="M22,60 C32,45 68,45 78,60" fill="none" stroke="#FFA07A" strokeWidth="2.5" strokeOpacity="0.5" />
              <path d="M20,72 C30,55 70,55 80,72" fill="none" stroke="#FFE4E1" strokeWidth="1.2" strokeOpacity="0.3" />
              
              {/* Rich inner core nodule */}
              <path d="M50,45 C60,45 65,52 65,60 C65,68 58,75 50,75 C42,75 35,68 35,60 C35,52 40,45 50,45 Z" fill="url(#agateBand1)" opacity="0.9" />
              <path d="M50,52 C55,52 58,55 58,60 C58,65 54,68 50,68 C46,68 42,65 42,60 C42,55 45,52 50,52 Z" fill="#FFE4E1" opacity="0.35" />
              
              {/* Polished glossy highlights */}
              <path d="M25,32 Q50,22 75,32 Q50,26 25,32 Z" fill="#FFFFFF" opacity="0.35" />
              <circle cx="45" cy="30" r="1.5" fill="#FFFFFF" opacity="0.8" />
            </g>
          </svg>
        );

      case 'clear-quartz':
        return (
          // Crisp sharp double-terminated point
          <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="clearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#ECEFF1" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#CFD8DC" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            {/* outer glow */}
            <circle cx="50" cy="60" r="35" fill="#ECEFF1" opacity="0.35" className="blur-xl" />
            
            {/* Facet paths */}
            <polygon points="50,10 75,35 65,85 50,110 35,85 25,35" fill="url(#clearGrad)" className="transition-all duration-700 ease-out hover:scale-105" />
            {/* Inner facet lines for crystal glassiness */}
            <line x1="50" y1="10" x2="50" y2="110" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.8" />
            <line x1="50" y1="110" x2="65" y2="85" stroke="#E2E8F0" strokeWidth="0.8" strokeOpacity="0.6" />
            <line x1="50" y1="110" x2="35" y2="85" stroke="#E2E8F0" strokeWidth="0.8" strokeOpacity="0.6" />
            <line x1="25" y1="35" x2="50" y2="45" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.7" />
            <line x1="75" y1="35" x2="50" y2="45" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.7" />
            <line x1="50" y1="45" x2="50" y2="110" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.7" />
            <polygon points="50,10 50,45 25,35" fill="#FFFFFF" fillOpacity="0.25" />
            <polygon points="50,10 50,45 75,35" fill="#E2E8F0" fillOpacity="0.15" />
          </svg>
        );

      case 'amethyst':
        return (
          // Clustering raw geometric geodes
          <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="purpleGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DFCDEB" />
                <stop offset="100%" stopColor="#9C7BB5" />
              </linearGradient>
              <linearGradient id="purpleGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8C63AA" />
                <stop offset="100%" stopColor="#C4AED4" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="65" r="30" fill="#DFCDEB" opacity="0.4" className="blur-xl" />
            {/* Major crystal prism 1 */}
            <polygon points="45,20 68,55 55,100 30,95" fill="url(#purpleGrad1)" />
            <line x1="45" y1="20" x2="48" y2="98" stroke="#F5EEF7" strokeWidth="0.7" strokeOpacity="0.6" />
            
            {/* Overlapping smaller prism 2 */}
            <polygon points="55,40 78,65 65,105 45,100" fill="url(#purpleGrad2)" opacity="0.85" />
            <line x1="55" y1="40" x2="57" y2="103" stroke="#F5EEF7" strokeWidth="0.6" strokeOpacity="0.6" />
            
            {/* Tiny accent cluster 3 */}
            <polygon points="25,60 40,75 32,100 20,95" fill="#754F93" opacity="0.8" />
            
            {/* Glimmer highlights */}
            <polygon points="45,20 48,55 30,95" fill="#FFFFFF" fillOpacity="0.15" />
            <circle cx="48" cy="35" r="1.5" fill="#FFFFFF" opacity="0.8" />
          </svg>
        );

      case 'rose-quartz':
        return (
          // Soft rounded crystalline rose-cut dome
          <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FDECEC" />
                <stop offset="50%" stopColor="#F5D2D2" />
                <stop offset="100%" stopColor="#E2AEAE" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="60" r="33" fill="#F8DFDF" opacity="0.5" className="blur-lg" />
            {/* Soft faceted heart-cut or rounded gemstone */}
            <polygon points="50,15 82,45 70,95 30,95 18,45" fill="url(#pinkGrad)" />
            {/* Delicate interior facet lines */}
            <polygon points="50,15 50,55 18,45" fill="#FFFFFF" fillOpacity="0.3" />
            <polygon points="50,15 50,55 82,45" fill="#EFC3C3" fillOpacity="0.15" />
            <polygon points="18,45 50,55 30,95" fill="#FFFFFF" fillOpacity="0.1" />
            <polygon points="82,45 50,55 70,95" fill="#DA9595" fillOpacity="0.2" />
            <polygon points="30,95 50,55 70,95" fill="#F0CDCD" fillOpacity="0.25" />
            
            <circle cx="50" cy="55" r="0.8" fill="#FFFFFF" />
          </svg>
        );

      case 'citrine':
        return (
          // Radiant sparkling drop point
          <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="yellowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FCF7E8" />
                <stop offset="50%" stopColor="#EAD29C" />
                <stop offset="100%" stopColor="#CFAA5C" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="60" r="32" fill="#F5E4BE" opacity="0.45" className="blur-xl" />
            {/* Flawless golden cluster */}
            <polygon points="50,15 78,45 68,95 32,95 22,45" fill="url(#yellowGrad)" />
            
            {/* Facets */}
            <line x1="50" y1="15" x2="50" y2="95" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.6" />
            <line x1="22" y1="45" x2="50" y2="52" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.6" />
            <line x1="78" y1="45" x2="50" y2="52" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.6" />
            <line x1="50" y1="52" x2="50" y2="95" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.6" />
            <polygon points="50,15 50,52 22,45" fill="#FFFFFF" fillOpacity="0.3" />
            <polygon points="50,15 50,52 78,45" fill="#B48E3C" fillOpacity="0.15" />
          </svg>
        );

      case 'rutilated-quartz':
        return (
          // Hexagonal crystal with delicate golden needle lines
          <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
            <circle cx="50" cy="60" r="30" fill="#FFF2DC" opacity="0.4" className="blur-xl" />
            
            {/* Polished capsule matrix */}
            <polygon points="50,12 80,38 80,82 50,108 20,82 20,38" fill="rgba(253, 246, 235, 0.7)" stroke="#DDD0B8" strokeWidth="1" />
            
            {/* Inner Needle Rutiles (Hair lines) */}
            <line x1="25" y1="45" x2="75" y2="75" stroke="#DEB666" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="30" y1="78" x2="68" y2="30" stroke="#CB9938" strokeWidth="1" strokeLinecap="round" />
            <line x1="45" y1="20" x2="55" y2="100" stroke="#E1C27F" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="40" y1="90" x2="78" y2="52" stroke="#CB9938" strokeWidth="1" strokeLinecap="round" />
            <line x1="22" y1="35" x2="60" y2="85" stroke="#AA8237" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
            <line x1="55" y1="30" x2="25" y2="65" stroke="#DCC28D" strokeWidth="0.7" />

            {/* Facets */}
            <polygon points="50,12 50,60 20,38" fill="#FFFFFF" fillOpacity="0.2" />
            <polygon points="50,12 50,60 80,38" fill="#88704A" fillOpacity="0.05" />
            <line x1="50" y1="12" x2="50" y2="108" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.5" />
          </svg>
        );

      case 'moonstone':
        return (
          // Mystical rounded cabochon cut displaying dynamic blue-white opalescence
          <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
            <defs>
              <radialGradient id="moonGrad" cx="50%" cy="40%" r="50%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="25%" stopColor="#F0F5FA" />
                <stop offset="65%" stopColor="#CCD6E5" />
                <stop offset="100%" stopColor="#9FAEC6" />
              </radialGradient>
              <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#89BDF0" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#D9D9F8" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            {/* Strong bluish glow behind */}
            <circle cx="50" cy="60" r="35" fill="url(#glowGrad)" className="blur-xl animate-pulse" />
            
            {/* Polished pebble / smooth cabochon */}
            <path d="M50,18 C72,18 82,38 82,60 C82,82 70,102 50,102 C30,102 18,82 18,60 C18,38 28,18 50,18 Z" fill="url(#moonGrad)" />
            
            {/* Shimmer overlay (simulating adularescence) */}
            <path d="M30,50 Q50,28 70,52 Q50,42 30,50 Z" fill="#E6EEF8" opacity="0.75" />
            <path d="M25,65 Q50,45 75,68 Q50,57 25,65 Z" fill="#8BB9ED" opacity="0.45" />
            
            {/* Sparkle spot */}
            <circle cx="48" cy="40" r="2" fill="#FFFFFF" opacity="0.9" />
          </svg>
        );

      case 'aquamarine':
        return (
          // Pure Emerald-cut rectangular prism
          <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="aquaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E9F7FA" />
                <stop offset="60%" stopColor="#ABDBE7" />
                <stop offset="100%" stopColor="#76BACF" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="60" r="32" fill="#D3EDF2" opacity="0.45" className="blur-xl" />
            {/* Rectangular step-cut crystal */}
            <polygon points="25,25 75,25 80,30 80,85 75,90 25,90 20,85 20,30" fill="url(#aquaGrad)" />
            {/* Inside step-cuts */}
            <polygon points="32,32 68,32 72,36 72,78 68,82 32,82 28,78 28,36" fill="rgba(255,255,255,0.3)" />
            <polygon points="38,38 62,38 64,40 64,74 62,76 38,76 36,74 36,40" fill="rgba(255,255,255,0.4)" />
            
            {/* Lines connecting steps */}
            <line x1="20" y1="30" x2="28" y2="36" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.7" />
            <line x1="75" y1="25" x2="68" y2="32" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.7" />
            <line x1="75" y1="90" x2="68" y2="82" stroke="#4C8A9B" strokeWidth="0.8" strokeOpacity="0.5" />
            <line x1="20" y1="85" x2="28" y2="78" stroke="#4C8A9B" strokeWidth="0.8" strokeOpacity="0.5" />
          </svg>
        );

      case 'aventurine':
        return (
          // Solid earthy tumbling pebble
          <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="aventGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EDF6EE" />
                <stop offset="55%" stopColor="#ADC8B4" />
                <stop offset="100%" stopColor="#7B9F85" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="60" r="33" fill="#DFECDF" opacity="0.4" className="blur-xl" />
            {/* Rounded asymmetric smooth river stone */}
            <path d="M50,18 C70,14 85,35 80,60 C75,85 62,102 45,102 C28,102 18,85 22,60 C26,35 30,22 50,18 Z" fill="url(#aventGrad)" />
            
            {/* Subtle micaceous sheen sparkles */}
            <circle cx="45" cy="40" r="1" fill="#FFFFFF" opacity="0.8" />
            <circle cx="62" cy="52" r="1" fill="#FFFFFF" opacity="0.6" />
            <circle cx="35" cy="68" r="1" fill="#FFFFFF" opacity="0.7" />
            <circle cx="58" cy="78" r="0.8" fill="#FFFFFF" opacity="0.5" />
            
            {/* Smooth body highlights */}
            <path d="M30,35 Q48,22 65,30 Q48,28 30,35 Z" fill="#FFFFFF" opacity="0.25" />
          </svg>
        );

      case 'black-obsidian':
        return (
          // Sharp glass fracture obsidian spearhead or crystalline block
          <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="obsidianGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#55555C" />
                <stop offset="42%" stopColor="#2A2A2E" />
                <stop offset="100%" stopColor="#121214" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="60" r="30" fill="#696974" opacity="0.2" className="blur-xl" />
            {/* Sharp glassy fracture shards */}
            <polygon points="50,15 78,45 62,98 50,105 38,98 22,45" fill="url(#obsidianGrad)" stroke="#51515C" strokeWidth="0.5" />
            
            {/* Conchoidal fracture lines */}
            <path d="M22,45 Q50,42 78,45" fill="none" stroke="#686873" strokeWidth="1" strokeOpacity="0.4" />
            <path d="M30,65 Q50,55 70,62" fill="none" stroke="#686873" strokeWidth="0.8" strokeOpacity="0.4" />
            <polygon points="50,15 50,105 22,45" fill="#FFFFFF" fillOpacity="0.08" />
            <polygon points="50,15 50,105 78,45" fill="#000000" fillOpacity="0.22" />
            <line x1="50" y1="15" x2="50" y2="105" stroke="#FFFFFF" strokeWidth="0.6" strokeOpacity="0.3" />
            
            {/* Sharp sheen speck */}
            <polygon points="28,40 32,38 31,48" fill="#FFFFFF" opacity="0.15" />
          </svg>
        );

      case 'lapis-lazuli':
        return (
          // Rough-hewn elegant mountain slab with gold iron pyrite stars
          <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="lapisGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4A658E" />
                <stop offset="50%" stopColor="#283E61" />
                <stop offset="100%" stopColor="#15243C" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="60" r="32" fill="#5071A3" opacity="0.35" className="blur-xl" />
            
            {/* Asymmetrical elegant raw polished geode slice */}
            <polygon points="45,15 78,28 85,75 55,102 22,88 15,48" fill="url(#lapisGrad)" />
            
            {/* Calcite (white cloud veins) */}
            <path d="M18,52 Q35,42 55,60 T82,50" fill="none" stroke="#ECEFF4" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
            <path d="M28,80 Q45,68 62,88" fill="none" stroke="#ECEFF4" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />

            {/* Pyrite (Golden Flecks/Stars) */}
            <circle cx="32" cy="35" r="1.5" fill="#DFB76C" />
            <circle cx="65" cy="42" r="1.2" fill="#F4D38B" />
            <circle cx="50" cy="72" r="1.5" fill="#E8C37C" />
            <circle cx="72" cy="70" r="1" fill="#DFB76C" />
            <circle cx="28" cy="62" r="1" fill="#DFB76C" />
            <circle cx="52" cy="25" r="1.2" fill="#F4D38B" />

            {/* Geometric facet shading over it */}
            <polygon points="45,15 55,102 22,88" fill="#FFFFFF" fillOpacity="0.05" />
          </svg>
        );

      case 'tigers-eye':
        return (
          // Striated clay & iron tiger band cat's-eye cabochon
          <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
            <defs>
              {/* Pattern for the tiger bands */}
              <linearGradient id="tigerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C9934B" />
                <stop offset="35%" stopColor="#80562D" />
                <stop offset="60%" stopColor="#4A3119" />
                <stop offset="100%" stopColor="#E6AE64" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="60" r="32" fill="#916E49" opacity="0.3" className="blur-xl" />
            
            {/* Polished Tiger Dome */}
            <path d="M50,20 C72,20 80,38 80,60 C80,82 72,100 50,100 C28,100 20,82 20,60 C20,38 28,20 50,20 Z" fill="url(#tigerGrad)" />
            
            {/* Dynamic shimmering eye lines */}
            <path d="M22,50 C38,42 62,42 78,50" fill="none" stroke="#F6C77B" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
            <path d="M22,70 C38,62 62,62 78,70" fill="none" stroke="#F1B04E" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
            <path d="M23,38 C38,30 62,30 77,38" fill="none" stroke="#75471A" strokeWidth="2.2" strokeLinecap="round" opacity="0.8" />
            
            {/* Lens flare highlighting */}
            <ellipse cx="50" cy="60" rx="28" ry="38" fill="none" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.15" />
            <circle cx="45" cy="40" r="1.5" fill="#FFFFFF" opacity="0.75" />
          </svg>
        );

      case 'Kyanite':
        return (
          // Elongated bladed columnar crystalline structure (Kyanite style)
          <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="kyaniteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F0F8FC" />
                <stop offset="40%" stopColor="#7EAFD6" />
                <stop offset="100%" stopColor="#316B9E" />
              </linearGradient>
              <linearGradient id="kyaniteBlade2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#225584" />
                <stop offset="100%" stopColor="#89B6DC" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="60" r="32" fill="#7EAFD6" opacity="0.4" className="blur-xl" />
            
            {/* Main elongated blade 1 */}
            <polygon points="42,15 62,35 55,105 32,105" fill="url(#kyaniteGrad)" />
            
            {/* Side overlapping blade 2 */}
            <polygon points="55,30 72,48 65,105 45,105" fill="url(#kyaniteBlade2)" opacity="0.95" />
            
            {/* Left smaller blade 3 */}
            <polygon points="28,45 42,58 35,105 20,105" fill="#1C456C" opacity="0.8" />
            
            {/* Inner crystalline fibers (striations) running vertically - kyanite's signature bladed striations */}
            <line x1="42" y1="15" x2="43" y2="105" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.7" />
            <line x1="50" y1="23" x2="51" y2="105" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.5" />
            <line x1="38" y1="40" x2="39" y2="105" stroke="#10314F" strokeWidth="0.6" strokeOpacity="0.4" />
            
            <line x1="55" y1="30" x2="56" y2="105" stroke="#FFFFFF" strokeWidth="0.7" strokeOpacity="0.6" />
            <line x1="62" y1="38" x2="63" y2="105" stroke="#10314F" strokeWidth="0.5" strokeOpacity="0.4" />

            {/* Facets & highlights */}
            <polygon points="42,15 50,23 32,105" fill="#FFFFFF" fillOpacity="0.2" />
            <polygon points="55,30 62,38 45,105" fill="#FFFFFF" fillOpacity="0.15" />
          </svg>
        );

      case 'Black-Rutilated-Quartz':
        return (
          // Hexagonal crystal with delicate dark rutilated hair lines
          <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="blackRutilatedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#ECECEF" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#C1C1C8" stopOpacity="0.55" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="60" r="30" fill="#9CA3AF" opacity="0.35" className="blur-xl" />
            
            {/* Polished capsule matrix */}
            <polygon points="50,12 80,38 80,82 50,108 20,82 20,38" fill="url(#blackRutilatedGrad)" stroke="#B3B3B9" strokeWidth="1" />
            
            {/* Inner Needle Rutiles (Hair lines) */}
            <line x1="25" y1="45" x2="75" y2="75" stroke="#1F2937" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="30" y1="78" x2="68" y2="30" stroke="#374151" strokeWidth="1" strokeLinecap="round" />
            <line x1="45" y1="20" x2="55" y2="100" stroke="#111827" strokeWidth="0.8" strokeLinecap="round" />
            <line x1="40" y1="90" x2="78" y2="52" stroke="#4B5563" strokeWidth="1" strokeLinecap="round" />
            <line x1="22" y1="35" x2="60" y2="85" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
            <line x1="55" y1="30" x2="25" y2="65" stroke="#374151" strokeWidth="0.7" />

            {/* Facets */}
            <polygon points="50,12 50,60 20,38" fill="#FFFFFF" fillOpacity="0.25" />
            <polygon points="50,12 50,60 80,38" fill="#FFFFFF" fillOpacity="0.08" />
            <line x1="50" y1="12" x2="50" y2="108" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.5" />
          </svg>
        );

      case 'fluorite':
        return (
          // Striated multiple-colored octahedron or stacked points
          <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="fluoriteGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#CAB8E3" /> {/* soft violet */}
                <stop offset="41%" stopColor="#BCDCE4" /> {/* soft blue */}
                <stop offset="100%" stopColor="#A8DFC7" /> {/* soft green */}
              </linearGradient>
            </defs>
            <circle cx="50" cy="60" r="33" fill="#D3EAE0" opacity="0.4" className="blur-xl" />
            
            {/* Precision octahedral double pyramid */}
            <polygon points="50,15 78,60 50,105 22,60" fill="url(#fluoriteGrad)" />
            {/* Facet lines */}
            <line x1="50" y1="15" x2="50" y2="105" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.7" />
            <line x1="22" y1="60" x2="78" y2="60" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.4" />
            
            {/* Side facet polygons */}
            <polygon points="50,15 50,60 22,60" fill="#FFFFFF" fillOpacity="0.2" />
            <polygon points="50,60 50,105 22,60" fill="#FFFFFF" fillOpacity="0.1" />
            <polygon points="50,15 50,60 78,60" fill="#604183" fillOpacity="0.1" />
            <polygon points="50,60 50,105 78,60" fill="#3D534A" fillOpacity="0.15" />

            {/* Inner shimmer line */}
            <line x1="30" y1="40" x2="42" y2="55" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.8" />
          </svg>
        );

      case 'green-phantom-quartz':
        return (
          // White clear crystal pyramid matrix containing elegant stacked green mineral phantom layers
          <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="phantomClearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#E2E8F0" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="phantomGreenGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#1E3F20" /> {/* Deep moss green */}
                <stop offset="50%" stopColor="#2E7D32" /> {/* Vibrant forest green */}
                <stop offset="100%" stopColor="#A1D1A2" stopOpacity="0.4" /> {/* Soft translucent mint */}
              </linearGradient>
            </defs>
            <circle cx="50" cy="60" r="32" fill="#E8F5E9" opacity="0.4" className="blur-xl" />
            
            {/* Clear Quartz Outer Crystal Prism Shell */}
            <polygon points="50,12 80,38 75,92 50,110 25,92 20,38" fill="url(#phantomClearGrad)" stroke="#E2E8F0" strokeWidth="1" />
            
            {/* The Green Phantom Pyramid (火山泥綠色金字塔幽靈層) */}
            {/* Outer layer base green shadow */}
            <polygon points="50,65 72,90 50,105 28,90" fill="url(#phantomGreenGrad)" opacity="0.6" />
            {/* Sharp inner phantom pyramid layer */}
            <polygon points="50,45 68,88 50,102 32,88" fill="url(#phantomGreenGrad)" opacity="0.85" />
            {/* Small top phantom layer */}
            <polygon points="50,30 62,85 50,100 38,85" fill="url(#phantomGreenGrad)" opacity="0.9" />
            
            {/* Glossy crystal facet highlights */}
            <line x1="50" y1="12" x2="50" y2="110" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.8" />
            <line x1="20" y1="38" x2="50" y2="45" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.5" />
            <line x1="80" y1="38" x2="50" y2="45" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.5" />
            <polygon points="50,12 50,45 20,38" fill="#FFFFFF" fillOpacity="0.2" />
            <circle cx="48" cy="25" r="1.5" fill="#FFFFFF" opacity="0.7" />
          </svg>
        );

      case 'strawberry-quartz':
        return (
          // Sweet strawberry shaped rich pink crystal with dotted iron oxide inclusion grains
          <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="strawberryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF0F2" />
                <stop offset="40%" stopColor="#FFA6B4" />
                <stop offset="100%" stopColor="#E05C71" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="62" r="32" fill="#FFEBEE" opacity="0.55" className="blur-xl" />
            
            {/* Rounded asymmetric heart/strawberry crystal silhouette */}
            <path d="M50,15 C75,12 85,35 80,68 C75,94 62,108 50,108 C38,108 25,94 20,68 C15,35 25,12 50,15 Z" fill="url(#strawberryGrad)" stroke="#FFA1B2" strokeWidth="0.5" />
            
            {/* Elegant crystalline facets over strawberry shape */}
            <polygon points="50,15 50,58 20,68" fill="#FFFFFF" fillOpacity="0.25" />
            <polygon points="50,15 50,58 80,68" fill="#FFD0D6" fillOpacity="0.15" />
            <polygon points="20,68 50,58 50,108" fill="#FFFFFF" fillOpacity="0.1" />
            <polygon points="80,68 50,58 50,108" fill="#C43B52" fillOpacity="0.15" />
            
            {/* Beautiful tiny seed-like hematite inclusion spots */}
            <circle cx="35" cy="40" r="1.2" fill="#800C1F" opacity="0.85" />
            <circle cx="65" cy="42" r="1" fill="#800C1F" opacity="0.8" />
            <circle cx="42" cy="50" r="1.5" fill="#B31431" opacity="0.9" />
            <circle cx="58" cy="55" r="1.1" fill="#800C1F" opacity="0.8" />
            <circle cx="30" cy="65" r="1.3" fill="#B31431" opacity="0.85" />
            <circle cx="48" cy="72" r="1.2" fill="#800C1F" opacity="0.9" />
            <circle cx="68" cy="68" r="1" fill="#B31431" opacity="0.75" />
            <circle cx="38" cy="85" r="1" fill="#800C1F" opacity="0.8" />
            <circle cx="55" cy="88" r="1.2" fill="#B31431" opacity="0.85" />
            <circle cx="60" cy="30" r="0.9" fill="#800C1F" opacity="0.7" />
            <circle cx="32" cy="30" r="1" fill="#B31431" opacity="0.75" />
            
            {/* Glossy top gleam */}
            <path d="M30,32 C42,22 58,22 70,32 C58,26 42,26 30,32 Z" fill="#FFFFFF" opacity="0.4" />
          </svg>
        );

      case 'Southern-red-agate':
        return (
          // Exquisite warm oil-grease cinnabar red agate nodule with elegant growth bands
          <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
            <defs>
              <radialGradient id="southernRedGrad" cx="45%" cy="40%" r="55%">
                <stop offset="0%" stopColor="#FFA68D" /> {/* Warm flame coral */}
                <stop offset="40%" stopColor="#E03C1B" /> {/* Cinnabar red */}
                <stop offset="85%" stopColor="#9C1700" /> {/* Dark rich persimmon red */}
                <stop offset="100%" stopColor="#6E0B00" /> {/* Deep shadow red */}
              </radialGradient>
              <linearGradient id="agateWhiteBand" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF0EB" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FFA68D" stopOpacity="0" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="60" r="32" fill="#FF5722" opacity="0.35" className="blur-xl" />
            
            {/* Thick, smooth, oily rich rounded agate pebble form */}
            <path d="M50,16 C74,14 84,32 82,60 C80,88 68,104 50,104 C32,104 18,88 18,60 C18,32 26,18 50,16 Z" fill="url(#southernRedGrad)" />
            
            {/* Unique delicate natural flame/growth bands typical of Southern Red (南紅包漿火焰紋/水線) */}
            <path d="M26,38 C35,28 65,28 74,38" fill="none" stroke="url(#agateWhiteBand)" strokeWidth="2" strokeLinecap="round" />
            <path d="M20,55 C32,42 68,42 80,55" fill="none" stroke="#FFCCA3" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
            <path d="M22,72 C35,55 65,55 78,72" fill="none" stroke="url(#agateWhiteBand)" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M28,88 C38,78 62,78 72,88" fill="none" stroke="#FFA68D" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
            
            {/* Core warm solid glow */}
            <path d="M42,42 Q50,32 58,42 T50,55 Z" fill="#FFE0B2" opacity="0.15" />
            
            {/* High-polish oil-sheen reflection */}
            <path d="M28,32 C42,22 58,22 72,32 C58,25 42,25 28,32 Z" fill="#FFFFFF" opacity="0.35" />
            <circle cx="42" cy="28" r="2" fill="#FFFFFF" opacity="0.85" />
            <circle cx="36" cy="34" r="1" fill="#FFFFFF" opacity="0.6" />
          </svg>
        );
      
      case 'Smoky-quartz':
        return (
          // Deep smoky quartz point crystal with rich hexagonal facets and warm earthy smoky tones
          <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="smokyBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C9BDB3" /> {/* Lighter translucent top */}
                <stop offset="40%" stopColor="#7E6C60" /> {/* Medium warm smoke */}
                <stop offset="100%" stopColor="#3B2F27" /> {/* Deep dark grounding brown */}
              </linearGradient>
              <linearGradient id="smokyHighlightGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="60" r="32" fill="#8D7A6E" opacity="0.4" className="blur-xl" />
            
            {/* Hexagonal Crystal Point Base & Prism Shell */}
            <polygon points="50,15 82,38 76,95 50,112 24,95 18,38" fill="url(#smokyBodyGrad)" stroke="#6B594E" strokeWidth="0.8" />
            
            {/* Front facing primary triangular facets of the crystal termination tip */}
            <polygon points="50,15 50,55 18,38" fill="url(#smokyHighlightGrad)" />
            <polygon points="50,15 50,55 82,38" fill="#FFFFFF" fillOpacity="0.15" />
            
            {/* Lower prismatic column facets */}
            <polygon points="18,38 50,55 50,112 24,95" fill="#000000" fillOpacity="0.15" />
            <polygon points="82,38 50,55 50,112 76,95" fill="#FFFFFF" fillOpacity="0.05" />
            
            {/* Grounding earthy internal veils / mist inclusions */}
            <path d="M35,75 Q45,60 65,72" fill="none" stroke="#D1C4BC" strokeWidth="1" opacity="0.25" strokeLinecap="round" />
            <path d="M28,90 Q50,75 70,82" fill="none" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.3" strokeLinecap="round" />
            <path d="M45,45 Q50,38 55,50" fill="none" stroke="#8A776A" strokeWidth="1.2" opacity="0.4" strokeLinecap="round" />

            {/* High-polish termination edge gleam lines */}
            <line x1="50" y1="15" x2="50" y2="112" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.4" />
            <line x1="18" y1="38" x2="50" y2="55" stroke="#FFFFFF" strokeWidth="0.6" strokeOpacity="0.5" />
            <line x1="82" y1="38" x2="50" y2="55" stroke="#FFFFFF" strokeWidth="0.6" strokeOpacity="0.5" />
            <circle cx="48" cy="28" r="1.5" fill="#FFFFFF" opacity="0.6" />
          </svg>
        );

      case 'Lolite':
        return (
          // Dichroic violet-blue compass crystal with rich navigation-inspired faceted lines representing "the compass stone"
          <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="loliteBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8C9ECB" />
                <stop offset="50%" stopColor="#3F51B5" />
                <stop offset="100%" stopColor="#1A237E" />
              </linearGradient>
              <linearGradient id="lolitePurpleGrad" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D1C4E9" />
                <stop offset="50%" stopColor="#7E57C2" />
                <stop offset="100%" stopColor="#311B92" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="60" r="32" fill="#5C6BC0" opacity="0.35" className="blur-xl" />
            
            <g transform="translate(10, 10) scale(0.8)">
              {/* Pleochroic multi-faceted prism body */}
              <polygon points="50,10 85,35 85,85 50,110 15,85 15,35" fill="url(#loliteBlueGrad)" stroke="#3949AB" strokeWidth="0.8" />
              
              {/* Dual-color faceted division representing Pleochroism */}
              <polygon points="50,10 50,60 15,35" fill="url(#lolitePurpleGrad)" opacity="0.9" />
              <polygon points="50,110 50,60 85,85" fill="url(#lolitePurpleGrad)" opacity="0.95" />
              
              {/* Highlight and shadowing layers */}
              <polygon points="50,10 50,60 85,35" fill="#FFFFFF" fillOpacity="0.1" />
              <polygon points="50,110 50,60 15,85" fill="#000000" fillOpacity="0.15" />
              
              {/* Navigation-inspired compass star facet overlay lines */}
              <line x1="50" y1="10" x2="50" y2="110" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.6" />
              <line x1="15" y1="60" x2="85" y2="60" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.5" />
              <line x1="15" y1="35" x2="85" y2="85" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.4" />
              <line x1="15" y1="85" x2="85" y2="35" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.4" />
              
              {/* Central crystalline core reflection */}
              <polygon points="50,45 65,60 50,75 35,60" fill="#E8EAF6" fillOpacity="0.3" />
              
              {/* Bright sparks */}
              <circle cx="50" cy="60" r="2" fill="#FFFFFF" opacity="0.9" />
              <circle cx="35" cy="45" r="1" fill="#FFFFFF" opacity="0.6" />
              <circle cx="65" cy="75" r="1.5" fill="#FFFFFF" opacity="0.7" />
            </g>
          </svg>
        );

      case 'Morganite':
        return (
          // Elegant cushion octagonal emerald cut with tender peach-pink beryl rose luminescence
          <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="morganitePeachGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF2F2" />
                <stop offset="40%" stopColor="#FFC9C9" />
                <stop offset="100%" stopColor="#E89C9F" />
              </linearGradient>
              <linearGradient id="morganiteFacetGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFD8D8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FFF8F8" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="60" r="32" fill="#FFC9C9" opacity="0.45" className="blur-xl" />
            
            <g transform="translate(10, 12) scale(0.8)">
              {/* Octagonal emerald cut outer layout */}
              <polygon points="30,15 70,15 90,35 90,75 70,95 30,95 10,75 10,35" fill="url(#morganitePeachGrad)" stroke="#E0A6AA" strokeWidth="0.8" />
              
              {/* Main table facet */}
              <polygon points="38,28 62,28 75,40 75,64 62,76 38,76 25,64 25,40" fill="url(#morganiteFacetGrad)" stroke="#FFFFFF" strokeWidth="0.6" strokeOpacity="0.5" />
              
              {/* Faceted table sides for brilliant dispersion */}
              <polygon points="30,15 70,15 62,28 38,28" fill="#FFFFFF" fillOpacity="0.25" />
              <polygon points="70,15 90,35 75,40 62,28" fill="#FFB9B9" fillOpacity="0.15" />
              <polygon points="90,35 90,75 75,64 75,40" fill="#000000" fillOpacity="0.08" />
              <polygon points="90,75 70,95 62,76 75,64" fill="#753C3C" fillOpacity="0.1" />
              <polygon points="70,95 30,95 38,76 62,76" fill="#000000" fillOpacity="0.12" />
              <polygon points="30,95 10,75 25,64 38,76" fill="#FFFFFF" fillOpacity="0.2" />
              <polygon points="10,75 10,35 25,40 25,64" fill="#FFFFFF" fillOpacity="0.3" />
              <polygon points="10,35 30,15 38,28 25,40" fill="#FFFFFF" fillOpacity="0.4" />
              
              {/* Delicate organic internal feathers representing natural beryl inclusions */}
              <path d="M45,45 Q50,42 55,46" fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
              <path d="M35,60 Q50,55 65,58" fill="none" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.4" strokeLinecap="round" />
              <circle cx="60" cy="38" r="1.5" fill="#FFFFFF" opacity="0.8" />
              <circle cx="42" cy="68" r="1" fill="#FFFFFF" opacity="0.6" />
            </g>
          </svg>
        );

      default:
        return (
          // Universal beautifully cut gem
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="defaultGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor={color} />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="30" fill={color} opacity="0.3" className="blur-xl" />
            <polygon points="50,15 80,37 80,63 50,85 20,63 20,37" fill="url(#defaultGrad)" />
            <line x1="50" y1="15" x2="50" y2="85" stroke="#fff" strokeWidth="1" opacity="0.7" />
          </svg>
        );
    }
  };

  const sizeClasses = {
    xs: 'w-8 h-10',
    sm: 'w-14 h-16',
    md: 'w-20 h-24',
    lg: 'w-28 h-32',
  }[size];

  const auraClasses = {
    xs: 'w-6 h-6 filter blur-sm',
    sm: 'w-10 h-10 filter blur-md',
    md: 'w-14 h-14 filter blur-md',
    lg: 'w-20 h-20 filter blur-lg',
  }[size];

  return (
    <div className={`relative ${sizeClasses} mx-auto flex items-center justify-center transition-all duration-500 hover:rotate-3 ease-in-out`}>
      {/* Background Soft Aura Glow */}
      <div 
        className={`absolute ${auraClasses} rounded-full mix-blend-screen opacity-40 animate-pulse transition-all duration-700`}
        style={{ backgroundColor: color }}
      />
      {/* Render Faceted SVG */}
      <div className="relative z-10 w-full h-full">
        {renderFacetSvg()}
      </div>
    </div>
  );
}
