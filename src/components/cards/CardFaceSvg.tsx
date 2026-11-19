/**
 * VESTA Traditional Playing-Card Vector SVG Artwork System
 * Renders authentic scalable SVG playing-card faces (A, 2-10, J, Q, K across all 4 suits)
 * and the Victorian Gothic ornamental SVG card back.
 * Created by Jackdaw
 */

import React from 'react';
import { CardRank, CardSuit } from '../../types';

interface SuitPathProps {
  suit: CardSuit;
  cx: number;
  cy: number;
  size: number;
  inverted?: boolean;
  color?: string;
}

/**
 * Renders an authentic scalable SVG vector path for any of the 4 traditional suits
 */
export const SuitVectorPip: React.FC<SuitPathProps> = ({
  suit,
  cx,
  cy,
  size,
  inverted = false,
  color
}) => {
  const fill = color || (suit === 'hearts' || suit === 'diamonds' ? '#b91c1c' : '#18181b');
  const scale = size / 24;
  const transform = `translate(${cx}, ${cy}) ${inverted ? 'rotate(180)' : ''} scale(${scale}) translate(-12, -12)`;

  switch (suit) {
    case 'spades':
      return (
        <g transform={transform} fill={fill}>
          <path d="M12 1.5 C9 6.5, 2.5 11, 2.5 15.8 C2.5 19, 5.2 20.8, 7.8 20.8 C9.6 20.8, 10.9 19.8, 11.4 18.8 L10.1 22.8 L13.9 22.8 L12.6 18.8 C13.1 19.8, 14.4 20.8, 16.2 20.8 C18.8 20.8, 21.5 19, 21.5 15.8 C21.5 11, 15 6.5, 12 1.5 Z" />
        </g>
      );
    case 'hearts':
      return (
        <g transform={transform} fill={fill}>
          <path d="M12 21.8 C12 21.8, 2.5 15.2, 2.5 8.8 C2.5 5.2, 5.3 2.8, 8.3 2.8 C10.3 2.8, 11.5 4, 12 5.4 C12.5 4, 13.7 2.8, 15.7 2.8 C18.7 2.8, 21.5 5.2, 21.5 8.8 C21.5 15.2, 12 21.8, 12 21.8 Z" />
        </g>
      );
    case 'diamonds':
      return (
        <g transform={transform} fill={fill}>
          <path d="M12 1.5 C14.5 6.8, 17.5 9.8, 21.5 12 C17.5 14.2, 14.5 17.2, 12 22.5 C9.5 17.2, 6.5 14.2, 2.5 12 C6.5 9.8, 9.5 6.8, 12 1.5 Z" />
        </g>
      );
    case 'clubs':
      return (
        <g transform={transform} fill={fill}>
          <circle cx="12" cy="6.8" r="4.3" />
          <circle cx="6.8" cy="14" r="4.3" />
          <circle cx="17.2" cy="14" r="4.3" />
          <path d="M11 12 L13 12 L14.5 22.5 L9.5 22.5 Z" />
        </g>
      );
  }
};

/**
 * Standard traditional playing-card pip coordinate tables inside the inner frame (viewBox 200x280)
 * X coordinates: Left = 64, Center = 100, Right = 136
 * Y coordinates: Top = 64, UpperMid = 102,MidTop = 114, Center = 140, MidBot = 166, LowerMid = 178, Bottom = 216
 */
interface PipCoord {
  x: number;
  y: number;
  inv?: boolean;
}

const NUMBER_PIP_LAYOUTS: Record<string, PipCoord[]> = {
  '2': [
    { x: 100, y: 66 },
    { x: 100, y: 214, inv: true }
  ],
  '3': [
    { x: 100, y: 66 },
    { x: 100, y: 140 },
    { x: 100, y: 214, inv: true }
  ],
  '4': [
    { x: 65, y: 66 },
    { x: 135, y: 66 },
    { x: 65, y: 214, inv: true },
    { x: 135, y: 214, inv: true }
  ],
  '5': [
    { x: 65, y: 66 },
    { x: 135, y: 66 },
    { x: 100, y: 140 },
    { x: 65, y: 214, inv: true },
    { x: 135, y: 214, inv: true }
  ],
  '6': [
    { x: 65, y: 66 },
    { x: 135, y: 66 },
    { x: 65, y: 140 },
    { x: 135, y: 140 },
    { x: 65, y: 214, inv: true },
    { x: 135, y: 214, inv: true }
  ],
  '7': [
    { x: 65, y: 66 },
    { x: 135, y: 66 },
    { x: 100, y: 103 },
    { x: 65, y: 140 },
    { x: 135, y: 140 },
    { x: 65, y: 214, inv: true },
    { x: 135, y: 214, inv: true }
  ],
  '8': [
    { x: 65, y: 66 },
    { x: 135, y: 66 },
    { x: 100, y: 103 },
    { x: 65, y: 140 },
    { x: 135, y: 140 },
    { x: 100, y: 177, inv: true },
    { x: 65, y: 214, inv: true },
    { x: 135, y: 214, inv: true }
  ],
  '9': [
    { x: 65, y: 64 },
    { x: 135, y: 64 },
    { x: 65, y: 114 },
    { x: 135, y: 114 },
    { x: 100, y: 140 },
    { x: 65, y: 166, inv: true },
    { x: 135, y: 166, inv: true },
    { x: 65, y: 216, inv: true },
    { x: 135, y: 216, inv: true }
  ],
  '10': [
    { x: 65, y: 64 },
    { x: 135, y: 64 },
    { x: 100, y: 89 },
    { x: 65, y: 114 },
    { x: 135, y: 114 },
    { x: 65, y: 166, inv: true },
    { x: 135, y: 166, inv: true },
    { x: 100, y: 191, inv: true },
    { x: 65, y: 216, inv: true },
    { x: 135, y: 216, inv: true }
  ]
};

/**
 * Renders traditional ornate Ace artwork for A♠, A♣, A♥, A♦
 */
const AceCenterArtwork: React.FC<{ suit: CardSuit; color: string }> = ({ suit, color }) => {
  const isSpade = suit === 'spades';
  return (
    <g>
      {/* Ornate Victorian Filigree Medallion Behind Ace */}
      <circle cx="100" cy="140" r="46" fill="none" stroke={color} strokeWidth="0.9" strokeDasharray="3 2" opacity="0.45" />
      <circle cx="100" cy="140" r="38" fill="none" stroke={color} strokeWidth="1.2" opacity="0.3" />
      {isSpade && (
        <>
          <circle cx="100" cy="140" r="54" fill="none" stroke={color} strokeWidth="0.75" opacity="0.35" />
          {/* Victorian Laurel / Engravings around Ace of Spades */}
          <path
            d="M 55 140 C 55 110, 75 88, 100 84 C 125 88, 145 110, 145 140 C 145 170, 125 192, 100 196 C 75 192, 55 170, 55 140 Z"
            fill="none"
            stroke={color}
            strokeWidth="1.4"
            opacity="0.5"
          />
          <text
            x="100"
            y="214"
            textAnchor="middle"
            fontFamily="'Cinzel', Georgia, serif"
            fontSize="7.5"
            letterSpacing="2.5"
            fill={color}
            opacity="0.75"
          >
            VESTA SOVEREIGN
          </text>
        </>
      )}
      <SuitVectorPip suit={suit} cx={100} cy={140} size={isSpade ? 66 : 56} color={color} />
      {/* Inner Engraved Filigree Highlights */}
      <circle cx="100" cy="138" r="8" fill="none" stroke="#faf8f5" strokeWidth="1" opacity="0.65" />
      <circle cx="100" cy="138" r="3" fill="#faf8f5" opacity="0.65" />
    </g>
  );
};

/**
 * Renders traditional double-ended / royal court face card vector illustration for Jack, Queen, and King
 */
const CourtFaceArtwork: React.FC<{ rank: 'J' | 'Q' | 'K'; suit: CardSuit; color: string }> = ({
  rank,
  suit,
  color
}) => {
  const accentDark = '#18181b';
  const accentGold = '#b45309';

  const renderHalfFigure = (inverted: boolean) => {
    const transform = inverted ? 'translate(200, 280) rotate(180)' : undefined;
    return (
      <g transform={transform}>
        {/* Corner Suit Emblem inside Court Box */}
        <SuitVectorPip suit={suit} cx={62} cy={70} size={20} color={color} />

        {/* Royal Weapon / Regalia Attribute */}
        {rank === 'K' && (
          /* King's Sovereign Sword & Cross-Hilt */
          <g stroke={accentDark} strokeWidth="1.6" fill="none">
            <line x1="140" y1="54" x2="140" y2="128" stroke={color} strokeWidth="2.2" />
            <path d="M131 74 L149 74" stroke={accentGold} strokeWidth="2.5" />
            <circle cx="140" cy="52" r="3" fill={accentGold} />
          </g>
        )}
        {rank === 'Q' && (
          /* Queen's Tudor Rose & Scepter */
          <g>
            <line x1="138" y1="68" x2="132" y2="126" stroke={accentDark} strokeWidth="1.8" />
            <circle cx="138" cy="66" r="8" fill={color} opacity="0.9" />
            <circle cx="138" cy="66" r="4.5" fill="none" stroke="#faf8f5" strokeWidth="1" />
            <circle cx="138" cy="66" r="2" fill={accentGold} />
          </g>
        )}
        {rank === 'J' && (
          /* Jack's Royal Halberd / Pike */
          <g>
            <line x1="138" y1="52" x2="138" y2="128" stroke={accentDark} strokeWidth="1.8" />
            <path d="M138 52 L148 66 L138 76 L132 64 Z" fill={color} stroke={accentDark} strokeWidth="1" />
          </g>
        )}

        {/* Royal Torso & Victorian Engraved Tunic */}
        <path
          d="M 62 140 C 64 114, 78 104, 100 104 C 122 104, 136 114, 138 140 Z"
          fill={color}
          stroke={accentDark}
          strokeWidth="1.5"
        />
        {/* Engraved Tunic Sash & Embroidery */}
        <path
          d="M 76 140 L 100 106 L 124 140"
          fill="none"
          stroke="#faf8f5"
          strokeWidth="2"
        />
        <path
          d="M 86 140 L 100 116 L 114 140"
          fill={accentDark}
          opacity="0.85"
        />
        {/* Ornate Ruff / Royal Collar */}
        <path
          d="M 78 105 Q 100 114 122 105"
          fill="none"
          stroke={accentGold}
          strokeWidth="2.5"
        />

        {/* Head & Noble Visage */}
        <path
          d="M 86 78 C 86 68, 114 68, 114 78 C 114 94, 108 103, 100 103 C 92 103, 86 94, 86 78 Z"
          fill="#faf8f5"
          stroke={accentDark}
          strokeWidth="1.5"
        />

        {/* Curls / Hair / Beard */}
        {rank === 'K' && (
          /* King's Engraved Beard & Mustache */
          <path
            d="M 87 90 Q 100 107 113 90 Q 107 104 100 104 Q 93 104 87 90 Z"
            fill={accentDark}
          />
        )}
        {rank === 'Q' && (
          /* Queen's Flowing Veil & Locks */
          <path
            d="M 85 74 C 77 82, 77 98, 83 105 M 115 74 C 123 82, 123 98, 117 105"
            fill="none"
            stroke={accentDark}
            strokeWidth="2.2"
          />
        )}
        {rank === 'J' && (
          /* Jack's Pageboy Bob Curls */
          <path
            d="M 85 75 C 80 82, 80 93, 86 96 M 115 75 C 120 82, 120 93, 114 96"
            fill="none"
            stroke={accentDark}
            strokeWidth="2"
          />
        )}

        {/* Facial Features: Eyes, Nose, Expression */}
        <circle cx="94" cy="82" r="1.4" fill={accentDark} />
        <circle cx="106" cy="82" r="1.4" fill={accentDark} />
        <path d="M 91 79 Q 94 77 97 79 M 103 79 Q 106 77 109 79" fill="none" stroke={accentDark} strokeWidth="1" />
        <path d="M 100 82 L 99 88 L 101 88" fill="none" stroke={accentDark} strokeWidth="1" />
        <path d="M 96 93 Q 100 95 104 93" fill="none" stroke={color} strokeWidth="1.3" />

        {/* Crown / Headgear */}
        {rank === 'K' && (
          /* Grand Sovereign 5-Peak Crown */
          <g>
            <path
              d="M 82 72 L 84 55 L 92 64 L 100 52 L 108 64 L 116 55 L 118 72 Z"
              fill={accentGold}
              stroke={accentDark}
              strokeWidth="1.4"
            />
            <circle cx="100" cy="50" r="2" fill={color} />
            <circle cx="84" cy="54" r="1.5" fill={color} />
            <circle cx="116" cy="54" r="1.5" fill={color} />
          </g>
        )}
        {rank === 'Q' && (
          /* Queen's Coronet Tiara */
          <g>
            <path
              d="M 84 72 L 88 58 L 95 65 L 100 54 L 105 65 L 112 58 L 116 72 Z"
              fill={accentGold}
              stroke={accentDark}
              strokeWidth="1.3"
            />
            <circle cx="100" cy="53" r="2" fill={color} />
          </g>
        )}
        {rank === 'J' && (
          /* Jack's Feathered Velvet Cap */
          <g>
            <path
              d="M 82 72 C 82 60, 118 60, 118 72 Z"
              fill={color}
              stroke={accentDark}
              strokeWidth="1.4"
            />
            <rect x="83" y="69" width="34" height="4" fill={accentGold} stroke={accentDark} strokeWidth="0.9" />
          </g>
        )}
      </g>
    );
  };

  return (
    <g>
      {/* Inner Court Frame Box */}
      <rect
        x="44"
        y="42"
        width="112"
        height="196"
        rx="4"
        fill="#f5f2eb"
        stroke={color}
        strokeWidth="1.4"
      />
      <rect
        x="47"
        y="45"
        width="106"
        height="190"
        rx="2"
        fill="none"
        stroke="#18181b"
        strokeWidth="0.7"
        opacity="0.5"
      />

      {/* Top Half Court Figure */}
      {renderHalfFigure(false)}

      {/* Bottom Inverted Half Court Figure */}
      {renderHalfFigure(true)}

      {/* Diagonal / Horizontal Divider Band */}
      <line x1="45" y1="140" x2="155" y2="140" stroke={accentGold} strokeWidth="1.6" />
      <circle cx="100" cy="140" r="4" fill={color} stroke="#faf8f5" strokeWidth="1" />
    </g>
  );
};

export interface CardFaceSvgProps {
  suit: CardSuit;
  rank: CardRank;
  className?: string;
}

/**
 * Complete scalable SVG vector face for any of the 52 standard playing cards
 * Standard 2.5 x 3.5 (5:7) ratio: viewBox="0 0 200 280"
 */
export const CardFaceSvg: React.FC<CardFaceSvgProps> = ({ suit, rank, className = 'w-full h-full' }) => {
  const isRed = suit === 'hearts' || suit === 'diamonds';
  const primaryColor = isRed ? '#b91c1c' : '#18181b';
  const isCourt = rank === 'J' || rank === 'Q' || rank === 'K';
  const isAce = rank === 'A';
  const pips = NUMBER_PIP_LAYOUTS[rank] || [];

  return (
    <svg
      viewBox="0 0 200 280"
      className={className}
      role="img"
      aria-label={`${rank} of ${suit}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ivory Card Surface & Traditional Thin Crisp Border */}
      <rect
        x="2"
        y="2"
        width="196"
        height="276"
        rx="14"
        fill="#faf8f5"
        stroke="#d4d0c8"
        strokeWidth="2"
      />
      {/* Subtle Inner Victorian Hairline Frame */}
      <rect
        x="8"
        y="8"
        width="184"
        height="264"
        rx="10"
        fill="none"
        stroke={primaryColor}
        strokeWidth="0.6"
        opacity="0.28"
      />

      {/* Top-Left Corner Index (Rank + Suit Pip) */}
      <g>
        <text
          x="23"
          y="33"
          textAnchor="middle"
          fontFamily="'Cinzel', 'Playfair Display', Georgia, serif"
          fontWeight="700"
          fontSize={rank === '10' ? '18' : '21'}
          letterSpacing="-1"
          fill={primaryColor}
        >
          {rank}
        </text>
        <SuitVectorPip suit={suit} cx={23} cy={49} size={15} color={primaryColor} />
      </g>

      {/* Bottom-Right Inverted Corner Index */}
      <g transform="translate(200, 280) rotate(180)">
        <text
          x="23"
          y="33"
          textAnchor="middle"
          fontFamily="'Cinzel', 'Playfair Display', Georgia, serif"
          fontWeight="700"
          fontSize={rank === '10' ? '18' : '21'}
          letterSpacing="-1"
          fill={primaryColor}
        >
          {rank}
        </text>
        <SuitVectorPip suit={suit} cx={23} cy={49} size={15} color={primaryColor} />
      </g>

      {/* Center Playing-Card Artwork */}
      {isAce && <AceCenterArtwork suit={suit} color={primaryColor} />}

      {isCourt && <CourtFaceArtwork rank={rank as 'J' | 'Q' | 'K'} suit={suit} color={primaryColor} />}

      {!isAce && !isCourt && (
        <g>
          {pips.map((pip, idx) => (
            <SuitVectorPip
              key={idx}
              suit={suit}
              cx={pip.x}
              cy={pip.y}
              size={rank === '9' || rank === '10' ? 24 : 27}
              inverted={pip.inv}
              color={primaryColor}
            />
          ))}
        </g>
      )}
    </svg>
  );
};

/**
 * Symmetrical Victorian Gothic SVG Card Back (viewBox="0 0 200 280")
 */
export const CardBackSvg: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <svg
      viewBox="0 0 200 280"
      className={className}
      role="img"
      aria-label="Locked Victorian Playing Card Back"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="victorianLattice" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 8 0 L 16 8 L 8 16 L 0 8 Z" fill="none" stroke="#52525b" strokeWidth="0.7" opacity="0.45" />
          <circle cx="8" cy="8" r="1.4" fill="#71717a" opacity="0.4" />
        </pattern>
      </defs>

      {/* Outer Card Body */}
      <rect
        x="2"
        y="2"
        width="196"
        height="276"
        rx="14"
        fill="#09090b"
        stroke="#52525b"
        strokeWidth="2"
      />

      {/* Double Engraved Victorian Border */}
      <rect
        x="10"
        y="10"
        width="180"
        height="260"
        rx="9"
        fill="#121215"
        stroke="#a1a1aa"
        strokeWidth="1.2"
        opacity="0.7"
      />
      <rect
        x="15"
        y="15"
        width="170"
        height="250"
        rx="6"
        fill="url(#victorianLattice)"
        stroke="#71717a"
        strokeWidth="0.8"
      />

      {/* Symmetrical Corner Gothic Filigree Flourishes */}
      <g stroke="#d4d4d8" strokeWidth="1.1" fill="none" opacity="0.65">
        {/* Top-Left */}
        <path d="M 20 38 C 28 38, 38 28, 38 20 M 20 46 C 34 46, 46 34, 46 20" />
        {/* Top-Right */}
        <path d="M 180 38 C 172 38, 162 28, 162 20 M 180 46 C 166 46, 154 34, 154 20" />
        {/* Bottom-Left */}
        <path d="M 20 242 C 28 242, 38 252, 38 260 M 20 234 C 34 234, 46 246, 46 260" />
        {/* Bottom-Right */}
        <path d="M 180 242 C 172 242, 162 252, 162 260 M 180 234 C 166 234, 154 246, 154 260" />
      </g>

      {/* Symmetrical Top & Bottom Gothic Rose Arches */}
      <g stroke="#a1a1aa" strokeWidth="1" fill="none" opacity="0.55">
        <path d="M 65 55 Q 100 22 135 55" />
        <path d="M 65 225 Q 100 258 135 225" />
        <circle cx="100" cy="48" r="7" />
        <circle cx="100" cy="232" r="7" />
      </g>

      {/* Center Victorian Royal Medallion & VJ Monogram */}
      <circle cx="100" cy="140" r="44" fill="#09090b" stroke="#a1a1aa" strokeWidth="1.4" />
      <circle cx="100" cy="140" r="38" fill="none" stroke="#71717a" strokeWidth="0.9" strokeDasharray="3 3" />
      <circle cx="100" cy="140" r="31" fill="none" stroke="#d4d4d8" strokeWidth="0.8" opacity="0.6" />

      <text
        x="100"
        y="147"
        textAnchor="middle"
        fontFamily="'Cinzel', Georgia, serif"
        fontWeight="700"
        fontSize="22"
        letterSpacing="2"
        fill="#e4e4e7"
      >
        VJ
      </text>
    </svg>
  );
};
