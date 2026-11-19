import React, { useState, useEffect } from 'react';
import { AppFontSize, AppLanguage, AppTheme, UserSettings } from '../types';
import {
  exportUserDataJson,
  importUserDataJson,
  clearAllUserData
} from '../database/db';
import { getAvailableVoices, speakText } from '../engines/speechEngine';
import pkg from '../../package.json';
import {
  Moon,
  Sun,
  Languages,
  Type,
  Volume2,
  Info,
  Download,
  Upload,
  RotateCcw,
  AlertTriangle
} from 'lucide-react';

interface SettingsPanelProps {
  settings: UserSettings;
  onUpdateSettings: (newSettings: UserSettings) => void;
  onDataReset: () => void;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({
  settings,
  onUpdateSettings,
  onDataReset
}) => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [importStatus, setImportStatus] = useState<string | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  useEffect(() => {
    const list = getAvailableVoices();
    setVoices(list);
  }, []);

  const handleThemeToggle = (theme: AppTheme) => {
    onUpdateSettings({ ...settings, theme });
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleLanguageToggle = (language: AppLanguage) => {
    onUpdateSettings({ ...settings, language });
  };

  const handleFontSizeChange = (fontSize: AppFontSize) => {
    onUpdateSettings({ ...settings, fontSize });
    document.documentElement.setAttribute('data-font-size', fontSize);
  };

  const handleTestVoice = () => {
    speakText('Welcome to VESTA. Progress with purpose and master the English language.', settings);
  };

  const handleExportBackup = async () => {
    const jsonStr = await exportUserDataJson();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vesta-progress-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (evt) => {
      const content = evt.target?.result as string;
      const res = await importUserDataJson(content);
      if (res.success) {
        setImportStatus('Backup restored successfully! Reloading data...');
        setTimeout(() => window.location.reload(), 1500);
      } else {
        setImportStatus(`Import error: ${res.message}`);
      }
    };
    reader.readAsText(file);
  };

  const handleConfirmReset = async () => {
    await clearAllUserData();
    setShowResetConfirm(false);
    onDataReset();
  };

  return (
    <div className="flex-1 flex flex-col h-full overflow-y-auto bg-zinc-950 text-zinc-100 p-4 sm:p-6 lg:p-8 select-none">
      <div className="max-w-3xl mx-auto w-full space-y-8 pb-12">
        {/* Title */}
        <div className="border-b border-zinc-800 pb-4">
          <h1 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white">
            App Settings & Preferences
          </h1>
          <p className="text-xs text-zinc-400 font-serif mt-1">
            Configure appearance, language modality, speech synthesis, and backup your scholarly record.
          </p>
        </div>

        {/* 1. Appearance / Theme */}
        <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 space-y-3">
          <div className="flex items-center gap-2 border-b border-zinc-850 pb-2.5">
            <Moon className="w-4 h-4 text-zinc-300" />
            <h3 className="font-display text-xs uppercase tracking-wider text-white">
              Visual Theme
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => handleThemeToggle('dark')}
              className={`p-3 rounded-lg border flex items-center justify-center gap-2 text-xs font-serif transition-colors ${
                settings.theme === 'dark'
                  ? 'border-zinc-400 bg-zinc-850 text-white font-semibold'
                  : 'border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:text-white'
              }`}
            >
              <Moon className="w-4 h-4" />
              <span>Dark Victorian (Default)</span>
            </button>

            <button
              type="button"
              onClick={() => handleThemeToggle('light')}
              className={`p-3 rounded-lg border flex items-center justify-center gap-2 text-xs font-serif transition-colors ${
                settings.theme === 'light'
                  ? 'border-zinc-400 bg-zinc-850 text-white font-semibold'
                  : 'border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:text-white'
              }`}
            >
              <Sun className="w-4 h-4" />
              <span>Light Monochromatic</span>
            </button>
          </div>
        </div>

        {/* 2. Educational Language Modality */}
        <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 space-y-3">
          <div className="flex items-center gap-2 border-b border-zinc-850 pb-2.5">
            <Languages className="w-4 h-4 text-zinc-300" />
            <h3 className="font-display text-xs uppercase tracking-wider text-white">
              Language Modality
            </h3>
          </div>
          <p className="text-xs text-zinc-400 font-serif">
            Select whether Persian explanations appear alongside English.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => handleLanguageToggle('en')}
              className={`p-3 rounded-lg border text-left space-y-1 transition-colors ${
                settings.language === 'en'
                  ? 'border-zinc-400 bg-zinc-850 text-white'
                  : 'border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:text-white'
              }`}
            >
              <div className="font-serif text-sm font-semibold">A. English Only</div>
              <div className="text-[11px] text-zinc-400">
                Pure English immersion. No Persian translations in any panel.
              </div>
            </button>

            <button
              type="button"
              onClick={() => handleLanguageToggle('en-fa')}
              className={`p-3 rounded-lg border text-left space-y-1 transition-colors ${
                settings.language === 'en-fa'
                  ? 'border-zinc-400 bg-zinc-850 text-white'
                  : 'border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:text-white'
              }`}
            >
              <div className="font-serif text-sm font-semibold flex items-center justify-between">
                <span>B. English + Persian</span>
                <span className="font-persian text-xs text-amber-500" dir="rtl">فارسی</span>
              </div>
              <div className="text-[11px] text-zinc-400">
                English primary with Persian translations and grammar guidance.
              </div>
            </button>
          </div>
        </div>

        {/* 3. Font Size */}
        <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 space-y-3">
          <div className="flex items-center gap-2 border-b border-zinc-850 pb-2.5">
            <Type className="w-4 h-4 text-zinc-300" />
            <h3 className="font-display text-xs uppercase tracking-wider text-white">
              Typography Scale
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {(['small', 'medium', 'large'] as AppFontSize[]).map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => handleFontSizeChange(size)}
                className={`py-2.5 rounded-lg border text-xs font-serif capitalize transition-colors ${
                  settings.fontSize === size
                    ? 'border-zinc-400 bg-zinc-850 text-white font-semibold'
                    : 'border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:text-white'
                }`}
              >
                {size} {size === 'medium' && '(Default)'}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Speech Synthesis & Voice Settings */}
        <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-850 pb-2.5">
            <div className="flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-zinc-300" />
              <h3 className="font-display text-xs uppercase tracking-wider text-white">
                Speech Synthesis (TTS)
              </h3>
            </div>
            <button
              type="button"
              onClick={handleTestVoice}
              className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 rounded text-xs font-serif text-zinc-200 transition-colors"
            >
              Test Voice
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-serif">
            {/* Preferred Accent */}
            <div className="space-y-1.5">
              <label htmlFor="voice-accent" className="text-zinc-400">Preferred Accent</label>
              <select
                id="voice-accent"
                value={settings.voiceAccent}
                onChange={(e) => onUpdateSettings({ ...settings, voiceAccent: e.target.value as UserSettings['voiceAccent'] })}
                className="w-full bg-zinc-950 border border-zinc-700/80 rounded p-2 text-white"
              >
                <option value="any">Any Available Accent</option>
                <option value="british">British English (Oxford / Received Pronunciation)</option>
                <option value="american">American English</option>
              </select>
            </div>

            {/* Preferred Gender */}
            <div className="space-y-1.5">
              <label htmlFor="voice-gender" className="text-zinc-400">Preferred Voice Tone</label>
              <select
                id="voice-gender"
                value={settings.voiceGender}
                onChange={(e) => onUpdateSettings({ ...settings, voiceGender: e.target.value as UserSettings['voiceGender'] })}
                className="w-full bg-zinc-950 border border-zinc-700/80 rounded p-2 text-white"
              >
                <option value="any">Standard / Any</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            </div>
          </div>

          {/* Installed Voice Selector if available */}
          {voices.length > 0 && (
            <div className="space-y-1.5 text-xs font-serif">
              <label htmlFor="system-voice" className="text-zinc-400">Detected System Voice</label>
              <select
                id="system-voice"
                value={settings.voiceName}
                onChange={(e) => onUpdateSettings({ ...settings, voiceName: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-700/80 rounded p-2 text-white font-mono text-[11px]"
              >
                <option value="">Auto-select by preference</option>
                {voices.map(v => (
                  <option key={v.name} value={v.name}>
                    {v.name} ({v.lang})
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Speech Rate Slider */}
          <div className="space-y-1.5 text-xs font-serif">
            <div className="flex justify-between text-zinc-400">
              <label htmlFor="speech-rate-slider">Speech Cadence / Rate</label>
              <span className="font-mono text-zinc-300 tabular-nums">{settings.speechRate.toFixed(1)}x</span>
            </div>
            <input
              id="speech-rate-slider"
              type="range"
              min="0.7"
              max="1.3"
              step="0.1"
              value={settings.speechRate}
              onChange={(e) => onUpdateSettings({ ...settings, speechRate: parseFloat(e.target.value) })}
              className="w-full accent-zinc-400"
            />
          </div>
        </div>

        {/* 5. Progress Backup & Restore */}
        <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 space-y-4">
          <div className="flex items-center gap-2 border-b border-zinc-850 pb-2.5">
            <Download className="w-4 h-4 text-zinc-300" />
            <h3 className="font-display text-xs uppercase tracking-wider text-white">
              Data Management & Backup
            </h3>
          </div>
          <p className="text-xs text-zinc-400 font-serif">
            Export your question records, unlocked playing cards, and study logs as a portable JSON file.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleExportBackup}
              className="flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-lg text-xs font-serif text-white transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Personal Backup</span>
            </button>

            <label className="flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-lg text-xs font-serif text-white cursor-pointer transition-colors">
              <Upload className="w-3.5 h-3.5" />
              <span>Restore from Backup</span>
              <input
                type="file"
                accept=".json"
                onChange={handleImportBackup}
                className="hidden"
              />
            </label>

            <button
              type="button"
              onClick={() => setShowResetConfirm(true)}
              className="flex items-center gap-2 px-4 py-2 bg-rose-950/50 hover:bg-rose-900/60 border border-rose-800/80 rounded-lg text-xs font-serif text-rose-300 transition-colors ml-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Progress</span>
            </button>
          </div>

          {importStatus && (
            <div className="p-3 bg-zinc-900 border border-zinc-700 rounded text-xs text-zinc-200">
              {importStatus}
            </div>
          )}
        </div>

        {/* 6. About — Strictly Release Year, Application Version, and shakur4min */}
        <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 space-y-3 font-serif">
          <div className="flex items-center gap-2 border-b border-zinc-850 pb-2.5">
            <Info className="w-4 h-4 text-zinc-300" />
            <h3 className="font-display text-xs uppercase tracking-wider text-white">
              About
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-zinc-300">
            <div className="p-3 rounded-lg border border-zinc-850 bg-zinc-950/50">
              <span className="text-[10px] uppercase tracking-wider text-zinc-500 block">Release Year</span>
              <span className="text-sm font-semibold text-white tabular-nums">2026</span>
            </div>
            <div className="p-3 rounded-lg border border-zinc-850 bg-zinc-950/50">
              <span className="text-[10px] uppercase tracking-wider text-zinc-500 block">Application Version</span>
              <span className="text-sm font-semibold text-white tabular-nums">{pkg.version}</span>
            </div>
            <div className="p-3 rounded-lg border border-zinc-850 bg-zinc-950/50">
              <span className="text-[10px] uppercase tracking-wider text-zinc-500 block">Creator</span>
              <span className="text-sm font-semibold text-white">shakur4min</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
          <div className="max-w-md w-full rounded-2xl border border-rose-800 bg-zinc-950 p-6 space-y-4 shadow-2xl">
            <div className="flex items-center gap-2 text-rose-400">
              <AlertTriangle className="w-5 h-5" />
              <h3 className="font-display font-bold text-sm tracking-wider uppercase">Reset All Scholarly Progress?</h3>
            </div>
            <p className="text-xs text-zinc-300 font-serif leading-relaxed">
              This action will reset your question attempts, earned playing cards, Jolly Jester drafts, and study activity records. This operation cannot be undone.
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowResetConfirm(false)}
                className="px-4 py-1.5 rounded border border-zinc-700 text-xs font-serif text-zinc-300 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmReset}
                className="px-4 py-1.5 rounded bg-rose-700 hover:bg-rose-600 text-xs font-serif text-white font-semibold"
              >
                Yes, Reset All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
