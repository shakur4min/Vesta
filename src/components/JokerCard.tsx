/**
 * VESTA Final Joker: The Sinister Victorian Gothic Jolly Jester Card
 * Original layered SVG vector illustration featuring a dark, ominous, frightening
 * Victorian mystery court jester with deep chiaroscuro shadows, hollow glowing eyes,
 * ornate horned cowl with skull-bells, and engraved Gothic filigree.
 * Created by Jackdaw
 */

import React from 'react';

interface JokerCardProps {
  size?: 'sm' | 'md' | 'lg';
  isCelebrating?: boolean;
  onClick?: () => void;
}

export const JokerCard: React.FC<JokerCardProps> = ({
  size = 'md',
  isCelebrating = false,
  onClick
}) => {
  const sizeClasses = {
    sm: 'w-24 sm:w-28 aspect-[5/7]',
    md: 'w-44 sm:w-48 aspect-[5/7]',
    lg: 'w-64 sm:w-72 aspect-[5/7]'
  }[size];

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="The Jolly Jester - 53rd Sovereign Joker Card"
      className={`${sizeClasses} relative rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(153,27,27,0.35)] select-none cursor-pointer transition-transform duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
        isCelebrating ? 'ring-2 ring-amber-500/80 shadow-[0_0_60px_rgba(217,119,6,0.5)]' : ''
      }`}
    >
      <svg
        viewBox="0 0 240 336"
        className="w-full h-full block"
        role="img"
        aria-label="Sinister Victorian Gothic Jolly Jester Joker"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="jesterAbyss" cx="50%" cy="46%" r="58%">
            <stop offset="0%" stopColor="#1f1215" />
            <stop offset="55%" stopColor="#0d0d11" />
            <stop offset="100%" stopColor="#050507" />
          </radialGradient>

          <linearGradient id="crimsonVelvet" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7f1d1d" />
            <stop offset="50%" stopColor="#450a0a" />
            <stop offset="100%" stopColor="#1c0404" />
          </linearGradient>

          <linearGradient id="obsidianVelvet" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#27272a" />
            <stop offset="50%" stopColor="#18181b" />
            <stop offset="100%" stopColor="#09090b" />
          </linearGradient>

          <linearGradient id="antiqueBrass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#b45309" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>

          <radialGradient id="paleBone" cx="50%" cy="38%" r="55%">
            <stop offset="0%" stopColor="#e4e2dd" />
            <stop offset="65%" stopColor="#a19d94" />
            <stop offset="100%" stopColor="#3f3d39" />
          </radialGradient>

          <pattern id="gothicCrosshatch" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 0 8 L 8 0 M -2 2 L 2 -2 M 6 10 L 10 6" stroke="#27272a" strokeWidth="0.6" opacity="0.55" />
          </pattern>
        </defs>

        {/* LAYER 1: Card Body & Engraved Gothic Frame */}
        <g id="jester-card-frame">
          <rect x="2" y="2" width="236" height="332" rx="16" fill="url(#jesterAbyss)" stroke="url(#antiqueBrass)" strokeWidth="2.5" />
          <rect x="8" y="8" width="224" height="320" rx="12" fill="url(#gothicCrosshatch)" stroke="#52525b" strokeWidth="0.9" />
          <rect x="14" y="14" width="212" height="308" rx="9" fill="none" stroke="url(#antiqueBrass)" strokeWidth="0.8" strokeDasharray="4 2" opacity="0.75" />

          {/* Gothic Cathedral Arch & Corner Filigree */}
          <path
            d="M 32 275 L 32 95 C 32 45, 120 28, 120 28 C 120 28, 208 45, 208 95 L 208 275 Z"
            fill="#09090b"
            fillOpacity="0.7"
            stroke="#52525b"
            strokeWidth="1"
          />
          <circle cx="120" cy="148" r="76" fill="none" stroke="#7f1d1d" strokeWidth="0.9" strokeDasharray="2 3" opacity="0.6" />
          <circle cx="120" cy="148" r="68" fill="none" stroke="#b45309" strokeWidth="0.6" opacity="0.4" />
        </g>

        {/* LAYER 2: Vertical Corner Indices (J-O-K-E-R) */}
        <g id="jester-corner-indices" fontFamily="'Cinzel', Georgia, serif" fontWeight="900" fontSize="11" letterSpacing="1">
          {/* Top-Left Index */}
          <g fill="#d97706">
            <text x="23" y="30" textAnchor="middle">J</text>
            <text x="23" y="42" textAnchor="middle">O</text>
            <text x="23" y="54" textAnchor="middle">K</text>
            <text x="23" y="66" textAnchor="middle">E</text>
            <text x="23" y="78" textAnchor="middle">R</text>
            <path d="M 23 84 L 26 91 L 23 96 L 20 91 Z" fill="#991b1b" stroke="#d97706" strokeWidth="0.6" />
          </g>

          {/* Bottom-Right Inverted Index */}
          <g transform="translate(240, 336) rotate(180)" fill="#d97706">
            <text x="23" y="30" textAnchor="middle">J</text>
            <text x="23" y="42" textAnchor="middle">O</text>
            <text x="23" y="54" textAnchor="middle">K</text>
            <text x="23" y="66" textAnchor="middle">E</text>
            <text x="23" y="78" textAnchor="middle">R</text>
            <path d="M 23 84 L 26 91 L 23 96 L 20 91 Z" fill="#991b1b" stroke="#d97706" strokeWidth="0.6" />
          </g>
        </g>

        {/* LAYER 3: Sinister Jester Horned Cowl & Skull Bells */}
        <g id="jester-cowl-and-bells">
          {/* Far Left Horn (Crimson Velvet) */}
          <path
            d="M 102 106 C 72 86, 36 52, 24 84 C 16 105, 38 134, 52 140 C 44 116, 62 106, 84 118 Z"
            fill="url(#crimsonVelvet)"
            stroke="url(#antiqueBrass)"
            strokeWidth="1.4"
          />
          {/* Far Right Horn (Obsidian Velvet) */}
          <path
            d="M 138 106 C 168 86, 204 52, 216 84 C 224 105, 202 134, 188 140 C 196 116, 178 106, 156 118 Z"
            fill="url(#obsidianVelvet)"
            stroke="url(#antiqueBrass)"
            strokeWidth="1.4"
          />
          {/* Center Towering Horn (Split Crimson & Obsidian) */}
          <path
            d="M 92 104 C 95 62, 108 36, 120 24 C 120 55, 118 85, 120 104 Z"
            fill="url(#obsidianVelvet)"
            stroke="url(#antiqueBrass)"
            strokeWidth="1.3"
          />
          <path
            d="M 148 104 C 145 62, 132 36, 120 24 C 120 55, 122 85, 120 104 Z"
            fill="url(#crimsonVelvet)"
            stroke="url(#antiqueBrass)"
            strokeWidth="1.3"
          />

          {/* Sinister Skull-Bells Hanging from Horn Tips */}
          {/* Left Bell */}
          <g transform="translate(50, 144)">
            <circle cx="0" cy="0" r="7" fill="url(#antiqueBrass)" stroke="#09090b" strokeWidth="1" />
            <circle cx="-2.2" cy="-1" r="1.4" fill="#09090b" />
            <circle cx="2.2" cy="-1" r="1.4" fill="#09090b" />
            <line x1="0" y1="2" x2="0" y2="6" stroke="#09090b" strokeWidth="1.2" />
          </g>
          {/* Right Bell */}
          <g transform="translate(190, 144)">
            <circle cx="0" cy="0" r="7" fill="url(#antiqueBrass)" stroke="#09090b" strokeWidth="1" />
            <circle cx="-2.2" cy="-1" r="1.4" fill="#09090b" />
            <circle cx="2.2" cy="-1" r="1.4" fill="#09090b" />
            <line x1="0" y1="2" x2="0" y2="6" stroke="#09090b" strokeWidth="1.2" />
          </g>
          {/* Top Center Bell */}
          <g transform="translate(120, 22)">
            <circle cx="0" cy="0" r="6.5" fill="url(#antiqueBrass)" stroke="#09090b" strokeWidth="1" />
            <circle cx="-2" cy="-1" r="1.3" fill="#09090b" />
            <circle cx="2" cy="-1" r="1.3" fill="#09090b" />
            <line x1="0" y1="2" x2="0" y2="5.5" stroke="#09090b" strokeWidth="1.2" />
          </g>
        </g>

        {/* LAYER 4: Jagged Victorian Ruff Collar & Mantle */}
        <g id="jester-gothic-collar">
          <path
            d="M 46 218 L 72 196 L 88 228 L 106 200 L 120 236 L 134 200 L 152 228 L 168 196 L 194 218 L 174 246 L 120 256 L 66 246 Z"
            fill="url(#obsidianVelvet)"
            stroke="url(#antiqueBrass)"
            strokeWidth="1.3"
          />
          <path
            d="M 62 214 L 82 198 L 98 224 L 120 202 L 142 224 L 158 198 L 178 214"
            fill="none"
            stroke="#991b1b"
            strokeWidth="1.5"
          />
          {/* Small Brass Medallion at Throat */}
          <polygon points="120,196 127,206 120,216 113,206" fill="url(#antiqueBrass)" stroke="#09090b" strokeWidth="1" />
        </g>

        {/* LAYER 5: Sculpted Chiaroscuro Visage (Gaunt Bone & Deep Shadow) */}
        <g id="jester-sinister-visage">
          {/* Outer Head / Jaw Contour with Sharp Chin & Cheekbones */}
          <path
            d="M 80 105 C 80 90, 160 90, 160 105 C 162 126, 166 142, 154 162 C 144 180, 130 202, 120 204 C 110 202, 96 180, 86 162 C 74 142, 78 126, 80 105 Z"
            fill="url(#paleBone)"
            stroke="#09090b"
            strokeWidth="2"
          />

          {/* Half-Face Split Shadow (Victorian Mystery Chiaroscuro) */}
          <path
            d="M 120 93 C 145 93, 160 99, 160 105 C 162 126, 166 142, 154 162 C 144 180, 130 202, 120 204 Z"
            fill="#09090b"
            opacity="0.42"
          />

          {/* Cowl Brow Peak Framing the Forehead */}
          <path
            d="M 78 108 Q 100 94 120 116 Q 140 94 162 108 L 158 96 Q 120 84 82 96 Z"
            fill="#18181b"
            stroke="url(#antiqueBrass)"
            strokeWidth="1.2"
          />

          {/* Deep Forehead Wrinkles & Gaunt Cheekbone Shading Lines */}
          <path
            d="M 94 114 Q 120 122 146 114 M 98 119 Q 120 126 142 119"
            fill="none"
            stroke="#27272a"
            strokeWidth="1"
            opacity="0.75"
          />
          <path
            d="M 84 146 C 92 156, 96 166, 98 178 M 156 146 C 148 156, 144 166, 142 178"
            fill="none"
            stroke="#18181b"
            strokeWidth="1.4"
            opacity="0.8"
          />

          {/* Sharp Hooked Nose Bridge & Shadow */}
          <path
            d="M 120 122 L 115 152 L 120 157 L 126 152 Z"
            fill="#27272a"
            opacity="0.65"
          />
          <path d="M 120 120 L 120 156" stroke="#09090b" strokeWidth="1.4" />
        </g>

        {/* LAYER 6: Unsettling Hollow Eye Sockets & Menacing Grin */}
        <g id="jester-eyes-and-grin">
          {/* Left Deep Eye Socket */}
          <path
            d="M 86 130 C 92 122, 106 124, 112 134 C 106 140, 92 139, 86 130 Z"
            fill="#09090b"
            stroke="#27272a"
            strokeWidth="1.2"
          />
          {/* Right Deep Eye Socket */}
          <path
            d="M 154 130 C 148 122, 134 124, 128 134 C 134 140, 148 139, 154 130 Z"
            fill="#09090b"
            stroke="#27272a"
            strokeWidth="1.2"
          />

          {/* Vertical Diamond Jester Eye Scars (Gothic Harlequin Tear Lines) */}
          <path d="M 99 118 L 99 148 M 96 142 L 99 149 L 102 142" stroke="#7f1d1d" strokeWidth="1.3" fill="none" />
          <path d="M 141 118 L 141 148 M 138 142 L 141 149 L 144 142" stroke="#7f1d1d" strokeWidth="1.3" fill="none" />

          {/* Piercing Pinpoint Glowing Pupils */}
          <circle cx="100" cy="131" r="2.6" fill="#dc2626" />
          <circle cx="100" cy="131" r="1.1" fill="#fef08a" />
          <circle cx="140" cy="131" r="2.6" fill="#dc2626" />
          <circle cx="140" cy="131" r="1.1" fill="#fef08a" />

          {/* Sinister Ear-to-Ear Razor Grin */}
          <path
            d="M 88 158 C 98 184, 142 184, 152 158 C 142 194, 98 194, 88 158 Z"
            fill="#09090b"
            stroke="#450a0a"
            strokeWidth="1.6"
          />
          {/* Individual Etched Teeth in the Dark Grin */}
          <path
            d="M 96 168 C 108 179, 132 179, 144 168"
            fill="none"
            stroke="#d4d0c8"
            strokeWidth="2.8"
            strokeDasharray="3.5 1.8"
          />
          {/* Corner Smile Creases */}
          <path
            d="M 84 154 Q 88 158 86 164 M 156 154 Q 152 158 154 164"
            fill="none"
            stroke="#7f1d1d"
            strokeWidth="1.5"
          />
        </g>

        {/* LAYER 7: Sovereign Scroll & Inscription */}
        <g id="jester-inscription-banner">
          <rect
            x="38"
            y="264"
            width="164"
            height="34"
            rx="4"
            fill="#09090b"
            stroke="url(#antiqueBrass)"
            strokeWidth="1.4"
          />
          <rect
            x="41"
            y="267"
            width="158"
            height="28"
            rx="2"
            fill="none"
            stroke="#7f1d1d"
            strokeWidth="0.8"
          />
          <text
            x="120"
            y="281"
            textAnchor="middle"
            fontFamily="'Cinzel', Georgia, serif"
            fontWeight="700"
            fontSize="11.5"
            letterSpacing="3"
            fill="#f4f4f5"
          >
            JOLLY JESTER
          </text>
          <text
            x="120"
            y="292"
            textAnchor="middle"
            fontFamily="'Cormorant Garamond', Georgia, serif"
            fontStyle="italic"
            fontSize="8.5"
            letterSpacing="1"
            fill="#d97706"
          >
            The LIII Sovereign Arbiter
          </text>
        </g>
      </svg>
    </button>
  );
};
