import React from 'react';
import { NavPanel } from '../types';
import { PWAInstallButton } from './PWAInstallButton';
import { WifiOff } from 'lucide-react';

interface HeaderProps {
  activePanel: NavPanel;
  isOnline: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isOnline }) => {
  return (
    <header className="h-14 shrink-0 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-md px-4 flex items-center justify-between z-30 select-none">
      {/* Left zone: Offline warning */}
      <div className="flex items-center gap-2 min-w-[80px]">
        {!isOnline && (
          <div
            className="flex items-center gap-1.5 text-xs text-amber-400 bg-amber-950/50 border border-amber-800/60 px-2 py-0.5 rounded"
            title="Application is functioning completely offline"
          >
            <WifiOff className="w-3.5 h-3.5" />
            <span className="hidden sm:inline font-mono text-[11px]">OFFLINE</span>
          </div>
        )}
      </div>

      {/* Center zone: VJ Monogram + VESTA Title */}
      <div className="flex items-center gap-2 cursor-pointer">
        <svg
          viewBox="0 0 512 512"
          className="w-7 h-7 filter drop-shadow"
          aria-label="VESTA Logo"
        >
          <rect width="512" height="512" rx="64" fill="#18181b" />
          <rect x="36" y="36" width="440" height="440" rx="40" fill="none" stroke="#d4d4d8" strokeWidth="3" />
          <path d="M 145 130 C 175 130, 195 140, 205 165 L 256 360 L 307 165 C 317 140, 337 130, 367 130 L 367 145 C 342 145, 332 155, 322 180 L 266 385 C 260 405, 252 405, 246 385 L 190 180 C 180 155, 170 145, 145 145 Z" fill="#f4f4f5" />
          <path d="M 285 130 C 310 130, 330 135, 345 145 L 335 165 C 325 155, 310 150, 295 150 L 295 330 C 295 385, 275 425, 215 425 C 175 425, 150 395, 150 365 C 150 345, 165 335, 180 335 C 195 335, 205 345, 205 360 C 205 380, 195 390, 185 390 C 195 405, 210 408, 225 408 C 260 408, 272 375, 272 325 L 272 150 L 255 150 L 255 130 Z" fill="#d4d4d8" />
        </svg>

        <span className="font-display tracking-[0.25em] text-lg font-bold text-zinc-100 uppercase">
          VESTA
        </span>
      </div>

      {/* Right zone: Minimal PWA button */}
      <div className="flex items-center justify-end min-w-[80px]">
        <PWAInstallButton />
      </div>
    </header>
  );
};
