/**
 * VESTA Private Developer QA Override Controller
 * Safely resolves local-only developer QA configuration while guaranteeing
 * that production GitHub Pages builds NEVER activate QA overrides.
 * Created by Jackdaw
 */

import { QAOverrideConfig, QA_OVERRIDE as DEFAULT_QA_OVERRIDE } from './qaOverride.example';

export type { QAOverrideConfig };

/**
 * In production builds (`import.meta.env?.PROD === true` or `process.env.NODE_ENV === 'production'`),
 * QA_OVERRIDE is unconditionally forced to disabled.
 */
function isProductionEnvironment(): boolean {
  try {
    // Check Vite environment if available
    if (typeof import.meta !== 'undefined' && (import.meta as unknown as { env?: { PROD?: boolean } }).env?.PROD === true) {
      return true;
    }
  } catch {
    // ignore
  }
  try {
    if (typeof process !== 'undefined' && process.env?.NODE_ENV === 'production') {
      return true;
    }
  } catch {
    // ignore
  }
  return false;
}

// Local developer overrides can be edited here during local development,
// or loaded from an untracked local module. Production builds lock enabled=false.
const RAW_QA_CONFIG: QAOverrideConfig = {
  ...DEFAULT_QA_OVERRIDE
};

export function resolveQAOverride(
  config: QAOverrideConfig = RAW_QA_CONFIG,
  forceProd?: boolean
): QAOverrideConfig {
  const isProd = forceProd !== undefined ? forceProd : isProductionEnvironment();
  if (isProd || !config.enabled) {
    return {
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
  }
  return { ...config };
}

export const QA_OVERRIDE: QAOverrideConfig = resolveQAOverride(RAW_QA_CONFIG);

export function isQAOverrideActive(): boolean {
  return QA_OVERRIDE.enabled === true && !isProductionEnvironment();
}
