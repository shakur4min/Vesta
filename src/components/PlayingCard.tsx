import React from 'react';
import { PlayingCardData } from '../types';
import { CardFaceSvg, CardBackSvg } from './cards/CardFaceSvg';

interface PlayingCardProps {
  card: PlayingCardData;
  isUnlocked?: boolean;
  isTarget?: boolean;
  progressRatio?: number;
  onClick?: () => void;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  showBadge?: boolean;
}

export const PlayingCard: React.FC<PlayingCardProps> = ({
  card,
  isUnlocked = true,
  isTarget = false,
  progressRatio = 0,
  onClick,
  size = 'md',
  showBadge = true
}) => {
  // Maintain authentic 2.5 : 3.5 (5:7) playing-card aspect ratio across all sizes
  const sizeClasses = {
    xs: 'w-16 sm:w-20 aspect-[5/7]',
    sm: 'w-20 sm:w-24 aspect-[5/7]',
    md: 'w-36 sm:w-40 aspect-[5/7]',
    lg: 'w-52 sm:w-60 aspect-[5/7]'
  }[size];

  if (!isUnlocked) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label={`${card.name} (Locked - Chapter ${card.chapterNumber})`}
        className={`${sizeClasses} relative rounded-xl overflow-hidden shadow-lg cursor-pointer select-none group transition-transform duration-200 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500`}
      >
        <CardBackSvg className="w-full h-full block" />

        {/* Subtle Progress / Chapter Overlay Badge at Bottom of Locked Card */}
        {showBadge && (
          <div className="absolute inset-x-2 bottom-2 rounded bg-zinc-950/90 border border-zinc-700/80 px-1.5 py-1 flex flex-col items-center justify-center">
            <span className="text-[9px] font-mono text-zinc-300 tracking-wider uppercase leading-none">
              {isTarget
                ? `Ch.${card.chapterNumber} · ${Math.round(progressRatio * 100)}%`
                : `Ch.${card.chapterNumber} · Locked`}
            </span>
            {isTarget && (
              <div className="w-full bg-zinc-800 h-1 rounded-full mt-1 overflow-hidden">
                <div
                  className="bg-amber-400 h-full transition-all duration-300"
                  style={{ width: `${progressRatio * 100}%` }}
                />
              </div>
            )}
          </div>
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`${card.name} (Unlocked - Chapter ${card.chapterNumber})`}
      className={`${sizeClasses} relative rounded-xl overflow-hidden playing-card-shadow cursor-pointer select-none group transition-transform duration-200 hover:-translate-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500`}
    >
      <CardFaceSvg suit={card.suit} rank={card.rank} className="w-full h-full block" />

      {/* Subtle Hover Metadata Pill for Chapter Mapping */}
      {showBadge && (
        <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute inset-x-2 bottom-1.5 rounded bg-zinc-950/85 text-zinc-100 px-1.5 py-0.5 text-[9px] font-mono text-center truncate pointer-events-none">
          Ch.{card.chapterNumber} · Q{card.questionRange[0]}–{card.questionRange[1]}
        </div>
      )}
    </button>
  );
};
