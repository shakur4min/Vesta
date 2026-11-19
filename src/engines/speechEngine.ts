/**
 * VESTA Global Text-to-Speech Engine
 * Web Speech API with system voice inspection, accent/gender prioritization,
 * word-vs-paragraph click isolation, and cancel-before-speech discipline.
 * Created by Jackdaw
 */

import { UserSettings } from '../types';

let cachedVoices: SpeechSynthesisVoice[] = [];

export function getAvailableVoices(): SpeechSynthesisVoice[] {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return [];
  }
  if (cachedVoices.length === 0) {
    cachedVoices = window.speechSynthesis.getVoices();
  }
  return cachedVoices;
}

// Listen for voice list updates in Chrome/Safari
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoices = window.speechSynthesis.getVoices();
  };
}

/**
 * Selects the optimal installed system voice based on user settings
 */
export function selectVoice(settings?: Partial<UserSettings>): SpeechSynthesisVoice | null {
  const voices = getAvailableVoices();
  if (voices.length === 0) return null;

  const targetName = settings?.voiceName;
  if (targetName) {
    const directMatch = voices.find(v => v.name === targetName);
    if (directMatch) return directMatch;
  }

  const preferredAccent = settings?.voiceAccent || 'any'; // 'american' | 'british' | 'any'
  const preferredGender = settings?.voiceGender || 'any'; // 'male' | 'female' | 'any'

  const langCode = preferredAccent === 'british' ? 'en-GB' : preferredAccent === 'american' ? 'en-US' : 'en';

  // Filter English voices
  const enVoices = voices.filter(v => v.lang.startsWith('en'));
  if (enVoices.length === 0) return voices[0];

  // Try matching accent
  const accentMatches = enVoices.filter(v => {
    if (preferredAccent === 'british') return v.lang.includes('GB') || v.name.toLowerCase().includes('united kingdom') || v.name.toLowerCase().includes('british');
    if (preferredAccent === 'american') return v.lang.includes('US') || v.name.toLowerCase().includes('united states') || v.name.toLowerCase().includes('american');
    return true;
  });

  const pool = accentMatches.length > 0 ? accentMatches : enVoices;

  // Try matching gender hints from name if requested
  if (preferredGender === 'female') {
    const female = pool.find(v => /female|samantha|victoria|karen|zira|susan|catherine|serena|stephanie/i.test(v.name));
    if (female) return female;
  } else if (preferredGender === 'male') {
    const male = pool.find(v => /male|daniel|alex|george|david|oliver|arthur|james/i.test(v.name));
    if (male) return male;
  }

  return pool[0];
}

/**
 * Speaks text using the configured voice and rate.
 * Cancels any currently playing speech to prevent overlap.
 */
export function speakText(
  text: string,
  settings?: Partial<UserSettings>,
  onEnd?: () => void
): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported in this browser.');
    return;
  }

  const clean = text.trim();
  if (!clean) return;

  // Stop any active utterance first
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(clean);
  const voice = selectVoice(settings);
  if (voice) {
    utterance.voice = voice;
  }

  utterance.rate = settings?.speechRate ?? 1.0;
  utterance.pitch = 1.0;

  if (onEnd) {
    utterance.onend = onEnd;
    utterance.onerror = () => onEnd();
  }

  window.speechSynthesis.speak(utterance);
}

/**
 * Stops current speech
 */
export function stopSpeaking(): void {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}
