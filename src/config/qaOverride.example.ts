/**
 * VESTA Private Developer QA Override — Tracked Template
 * Copy this file to `src/config/qaOverride.local.ts` (excluded via .gitignore)
 * to locally test any chapter, question, card, or Jolly Jester state without
 * affecting real user data or production GitHub Pages builds.
 */

export interface QAOverrideConfig {
  enabled: boolean;

  chapter: number | null;
  question: number | null;
  card: string | number | null;

  unlockAllChapters: boolean;
  unlockAllQuestions: boolean;
  unlockAllCards: boolean;

  unlockJollyJester: boolean;
  openJollyJester: boolean;

  simulateJokerWin: boolean;
  bypassAnswerValidation: boolean;

  resetTestProgress: boolean;
}

export const QA_OVERRIDE: QAOverrideConfig = {
  enabled: false,

  chapter: null,
  question: null,
  card: null,

  unlockAllChapters: false,
  unlockAllQuestions: false,
  unlockAllCards: false,

  unlockJollyJester: false,
  openJollyJester: false,

  simulateJokerWin: false,
  bypassAnswerValidation: false,

  resetTestProgress: false
};
