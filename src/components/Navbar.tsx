import React from 'react';
import { NavPanel } from '../types';
import { HelpCircle, BookOpen, LayoutDashboard, Settings } from 'lucide-react';

interface NavbarProps {
  activePanel: NavPanel;
  onSelectPanel: (panel: NavPanel) => void;
  unlockedJoker?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ activePanel, onSelectPanel, unlockedJoker }) => {
  // Navigation Panels: Questions, Grammar, Dashboard, Settings
  const navItems: { id: NavPanel; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'questions', label: 'Questions', icon: HelpCircle },
    { id: 'grammar', label: 'Grammar', icon: BookOpen },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <nav className="vesta-navbar shrink-0 border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-md px-2 flex items-center justify-around z-30 select-none">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activePanel === item.id;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelectPanel(item.id)}
            className={`flex flex-col items-center justify-center flex-1 h-full py-1 transition-all duration-150 relative ${
              isActive
                ? 'text-zinc-100 font-semibold'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
            aria-label={item.label}
          >
            {/* Victorian Active Accent Marker */}
            {isActive && (
              <span className="absolute top-0 w-8 h-[2px] bg-zinc-400 dark:bg-zinc-200 shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
            )}

            <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110 text-zinc-100' : ''}`} />
            <span className="text-[11px] font-serif tracking-wider mt-1 whitespace-nowrap">
              {item.label}
            </span>

            {/* Special indicator for dashboard if Joker is earned */}
            {item.id === 'dashboard' && unlockedJoker && (
              <span className="absolute top-2 right-4 w-1.5 h-1.5 rounded-full bg-amber-500" />
            )}
          </button>
        );
      })}
    </nav>
  );
};
