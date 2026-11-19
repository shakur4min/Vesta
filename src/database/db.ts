/**
 * VESTA Local-First Persistent Database (IndexedDB + LocalStorage Fallback)
 * Includes isolated QA test namespace when QA_OVERRIDE is active in development,
 * guaranteeing genuine user progress is never overwritten by QA testing.
 * Created by Jackdaw
 */

import {
  ActivityDay,
  JollyJesterState,
  QuestionAttemptRecord,
  UserSettings
} from '../types';
import { isQAOverrideActive } from '../config/qaOverride';

const PROD_DB_NAME = 'vesta_educational_db';
const QA_DB_NAME = 'vesta_qa_test_db';
const DB_VERSION = 1;

let prodDbPromise: Promise<IDBDatabase> | null = null;
let qaDbPromise: Promise<IDBDatabase> | null = null;

export function getActiveDbNamespace(): { dbName: string; lsPrefix: string; isQA: boolean } {
  const isQA = isQAOverrideActive();
  return {
    dbName: isQA ? QA_DB_NAME : PROD_DB_NAME,
    lsPrefix: isQA ? 'vesta_qa_' : 'vesta_',
    isQA
  };
}

function getDB(): Promise<IDBDatabase> {
  const { dbName, isQA } = getActiveDbNamespace();
  if (isQA && qaDbPromise) return qaDbPromise;
  if (!isQA && prodDbPromise) return prodDbPromise;

  const promise = new Promise<IDBDatabase>((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      return reject(new Error('IndexedDB not supported'));
    }

    const request = indexedDB.open(dbName, DB_VERSION);

    request.onupgradeneeded = (e) => {
      const db = (e.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains('settings')) {
        db.createObjectStore('settings', { keyPath: 'key' });
      }
      if (!db.objectStoreNames.contains('questionAttempts')) {
        db.createObjectStore('questionAttempts', { keyPath: 'questionId' });
      }
      if (!db.objectStoreNames.contains('cardAchievements')) {
        db.createObjectStore('cardAchievements', { keyPath: 'cardId' });
      }
      if (!db.objectStoreNames.contains('jollyJester')) {
        db.createObjectStore('jollyJester', { keyPath: 'key' });
      }
      if (!db.objectStoreNames.contains('activitySessions')) {
        db.createObjectStore('activitySessions', { keyPath: 'date' });
      }
      if (!db.objectStoreNames.contains('navState')) {
        db.createObjectStore('navState', { keyPath: 'key' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });

  if (isQA) {
    qaDbPromise = promise;
  } else {
    prodDbPromise = promise;
  }

  return promise;
}

// Fallback LocalStorage wrappers isolated by namespace
function lsGet<T>(key: string, defaultValue: T): T {
  const { lsPrefix } = getActiveDbNamespace();
  try {
    const val = localStorage.getItem(lsPrefix + key);
    return val ? JSON.parse(val) : defaultValue;
  } catch {
    return defaultValue;
  }
}

function lsSet<T>(key: string, val: T): void {
  const { lsPrefix } = getActiveDbNamespace();
  try {
    localStorage.setItem(lsPrefix + key, JSON.stringify(val));
  } catch (e) {
    console.warn('LocalStorage save failed:', e);
  }
}

export const defaultSettings: UserSettings = {
  theme: 'dark',
  language: 'en-fa',
  fontSize: 'medium',
  voiceGender: 'any',
  voiceAccent: 'any',
  voiceName: '',
  speechRate: 1.0
};

export async function loadUserSettings(): Promise<UserSettings> {
  try {
    const db = await getDB();
    return new Promise((resolve) => {
      const tx = db.transaction('settings', 'readonly');
      const store = tx.objectStore('settings');
      const req = store.get('userSettings');
      req.onsuccess = () => {
        resolve(req.result ? req.result.value : lsGet('userSettings', defaultSettings));
      };
      req.onerror = () => resolve(lsGet('userSettings', defaultSettings));
    });
  } catch {
    return lsGet('userSettings', defaultSettings);
  }
}

export async function saveUserSettings(settings: UserSettings): Promise<void> {
  lsSet('userSettings', settings);
  try {
    const db = await getDB();
    const tx = db.transaction('settings', 'readwrite');
    tx.objectStore('settings').put({ key: 'userSettings', value: settings });
  } catch {
    // LocalStorage fallback already set
  }
}

export async function loadInitialInstallDate(): Promise<string> {
  const todayStr = new Date().toISOString().split('T')[0];
  const existing = lsGet<string | null>('installDate', null);
  if (existing) return existing;
  lsSet('installDate', todayStr);
  return todayStr;
}

export async function loadAllAttempts(): Promise<Record<string, QuestionAttemptRecord>> {
  try {
    const db = await getDB();
    return new Promise((resolve) => {
      const tx = db.transaction('questionAttempts', 'readonly');
      const store = tx.objectStore('questionAttempts');
      const req = store.getAll();
      req.onsuccess = () => {
        const records: Record<string, QuestionAttemptRecord> = {};
        if (req.result) {
          for (const item of req.result) {
            records[item.questionId] = item;
          }
        }
        const fallback = lsGet<Record<string, QuestionAttemptRecord>>('questionAttempts', {});
        resolve({ ...fallback, ...records });
      };
      req.onerror = () => resolve(lsGet('questionAttempts', {}));
    });
  } catch {
    return lsGet('questionAttempts', {});
  }
}

export async function saveQuestionAttempt(record: QuestionAttemptRecord): Promise<void> {
  const all = lsGet<Record<string, QuestionAttemptRecord>>('questionAttempts', {});
  all[record.questionId] = record;
  lsSet('questionAttempts', all);

  try {
    const db = await getDB();
    const tx = db.transaction('questionAttempts', 'readwrite');
    tx.objectStore('questionAttempts').put(record);
  } catch {
    // LocalStorage already updated
  }
}

export async function loadEarnedCardIds(): Promise<string[]> {
  try {
    const db = await getDB();
    return new Promise((resolve) => {
      const tx = db.transaction('cardAchievements', 'readonly');
      const store = tx.objectStore('cardAchievements');
      const req = store.getAll();
      req.onsuccess = () => {
        const ids = req.result ? req.result.map((r: { cardId: string }) => r.cardId) : [];
        const fallback = lsGet<string[]>('earnedCards', []);
        const combined = Array.from(new Set([...fallback, ...ids]));
        resolve(combined);
      };
      req.onerror = () => resolve(lsGet('earnedCards', []));
    });
  } catch {
    return lsGet('earnedCards', []);
  }
}

export async function saveEarnedCardId(cardId: string): Promise<void> {
  const current = lsGet<string[]>('earnedCards', []);
  if (!current.includes(cardId)) {
    current.push(cardId);
    lsSet('earnedCards', current);
  }

  try {
    const db = await getDB();
    const tx = db.transaction('cardAchievements', 'readwrite');
    tx.objectStore('cardAchievements').put({ cardId, unlockedAt: Date.now() });
  } catch {
    // Fallback updated
  }
}

export const defaultJesterState: JollyJesterState = {
  unlocked: false,
  hasViewedWarning: false,
  active: false,
  attemptsRemaining: 3,
  isCompleted: false,
  lastDraftTitle: '',
  lastDraftEssay: ''
};

export async function loadJollyJesterState(): Promise<JollyJesterState> {
  try {
    const db = await getDB();
    return new Promise((resolve) => {
      const tx = db.transaction('jollyJester', 'readonly');
      const store = tx.objectStore('jollyJester');
      const req = store.get('state');
      req.onsuccess = () => {
        resolve(req.result ? req.result.value : lsGet('jollyJesterState', defaultJesterState));
      };
      req.onerror = () => resolve(lsGet('jollyJesterState', defaultJesterState));
    });
  } catch {
    return lsGet('jollyJesterState', defaultJesterState);
  }
}

export async function saveJollyJesterState(state: JollyJesterState): Promise<void> {
  lsSet('jollyJesterState', state);
  try {
    const db = await getDB();
    const tx = db.transaction('jollyJester', 'readwrite');
    tx.objectStore('jollyJester').put({ key: 'state', value: state });
  } catch {
    // Fallback set
  }
}

export async function loadActivityHistory(): Promise<ActivityDay[]> {
  try {
    const db = await getDB();
    return new Promise((resolve) => {
      const tx = db.transaction('activitySessions', 'readonly');
      const store = tx.objectStore('activitySessions');
      const req = store.getAll();
      req.onsuccess = () => {
        const dbItems = req.result || [];
        const fallback = lsGet<ActivityDay[]>('activitySessions', []);
        const map = new Map<string, ActivityDay>();
        for (const item of [...fallback, ...dbItems]) {
          map.set(item.date, item);
        }
        resolve(Array.from(map.values()).sort((a, b) => a.date.localeCompare(b.date)));
      };
      req.onerror = () => resolve(lsGet('activitySessions', []));
    });
  } catch {
    return lsGet('activitySessions', []);
  }
}

export async function recordActiveMinutes(dateStr: string, deltaMinutes: number): Promise<void> {
  const current = lsGet<ActivityDay[]>('activitySessions', []);
  let found = current.find(d => d.date === dateStr);
  if (!found) {
    found = { date: dateStr, minutes: 0, questionsAnswered: 0 };
    current.push(found);
  }
  found.minutes = Math.max(0, found.minutes + deltaMinutes);
  lsSet('activitySessions', current);

  try {
    const db = await getDB();
    const tx = db.transaction('activitySessions', 'readwrite');
    tx.objectStore('activitySessions').put(found);
  } catch {
    // Fallback set
  }
}

export async function incrementQuestionsAnswered(dateStr: string): Promise<void> {
  const current = lsGet<ActivityDay[]>('activitySessions', []);
  let found = current.find(d => d.date === dateStr);
  if (!found) {
    found = { date: dateStr, minutes: 1, questionsAnswered: 0 };
    current.push(found);
  }
  found.questionsAnswered += 1;
  lsSet('activitySessions', current);

  try {
    const db = await getDB();
    const tx = db.transaction('activitySessions', 'readwrite');
    tx.objectStore('activitySessions').put(found);
  } catch {
    // Fallback set
  }
}

export async function exportUserDataJson(): Promise<string> {
  const settings = await loadUserSettings();
  const attempts = await loadAllAttempts();
  const earnedCards = await loadEarnedCardIds();
  const jester = await loadJollyJesterState();
  const activity = await loadActivityHistory();

  const data = {
    app: 'VESTA',
    version: '1.0.0',
    exportTimestamp: Date.now(),
    creator: 'Jackdaw',
    settings,
    attempts,
    earnedCards,
    jollyJester: jester,
    activity
  };

  return JSON.stringify(data, null, 2);
}

export async function importUserDataJson(jsonStr: string): Promise<{ success: boolean; message: string }> {
  try {
    const data = JSON.parse(jsonStr);
    if (!data || data.app !== 'VESTA') {
      return { success: false, message: 'Invalid backup file: missing VESTA identifier.' };
    }

    if (data.settings) await saveUserSettings(data.settings);
    if (data.jollyJester) await saveJollyJesterState(data.jollyJester);

    if (data.attempts && typeof data.attempts === 'object') {
      for (const key of Object.keys(data.attempts)) {
        await saveQuestionAttempt(data.attempts[key]);
      }
    }

    if (Array.isArray(data.earnedCards)) {
      for (const cardId of data.earnedCards) {
        await saveEarnedCardId(cardId);
      }
    }

    if (Array.isArray(data.activity)) {
      lsSet('activitySessions', data.activity);
    }

    return { success: true, message: 'User progress successfully restored!' };
  } catch (err: unknown) {
    return { success: false, message: 'Failed to import backup: ' + (err instanceof Error ? err.message : String(err)) };
  }
}

export async function clearAllUserData(): Promise<void> {
  const { lsPrefix } = getActiveDbNamespace();
  try {
    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(lsPrefix)) {
        keysToRemove.push(k);
      }
    }
    for (const k of keysToRemove) {
      localStorage.removeItem(k);
    }
  } catch {
    // ignore
  }

  try {
    const db = await getDB();
    const stores = ['settings', 'questionAttempts', 'cardAchievements', 'jollyJester', 'activitySessions', 'navState'];
    const tx = db.transaction(stores, 'readwrite');
    for (const s of stores) {
      tx.objectStore(s).clear();
    }
  } catch {
    // Cleared local storage
  }
}
