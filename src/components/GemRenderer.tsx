/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface GemRendererProps {
  color: string;
  id: string;
}

export default function GemRenderer({ color, id }: GemRendererProps) {
  // Map crystal ID to distinct elegant vector geode / crystal facet paths
  const renderFacetSvg = () => {
    switch (id) {
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

  return (
    <div className="relative w-20 h-24 mx-auto flex items-center justify-center transition-all duration-500 hover:rotate-3 ease-in-out">
      {/* Background Soft Aura Glow */}
      <div 
        className="absolute w-14 h-14 rounded-full mix-blend-screen filter blur-md opacity-40 animate-pulse transition-all duration-700"
        style={{ backgroundColor: color }}
      />
      {/* Render Faceted SVG */}
      <div className="relative z-10 w-full h-full">
        {renderFacetSvg()}
      </div>
    </div>
  );
}
