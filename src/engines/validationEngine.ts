/**
 * VESTA Deterministic Validation Engine
 * Text Normalization, Tokenization, Damerau-Levenshtein Distance with Grammar Guard,
 * and Educational Feedback Generation.
 * Created by Jackdaw
 */

import { GrammarQuestion } from '../types';

// Critical grammatical words where spelling errors MUST NOT be forgiven
const GRAMMAR_CRITICAL_WORDS = new Set([
  'is', 'are', 'was', 'were', 'am', 'be', 'been', 'being',
  'have', 'has', 'had', 'having',
  'do', 'does', 'did', 'doing', 'done',
  'will', 'would', 'shall', 'should',
  'can', 'could', 'may', 'might', 'must',
  'not', "n't", 'no', 'never',
  'if', 'unless', 'whether', 'as', 'since', 'because', 'although', 'though', 'even',
  'who', 'whom', 'whose', 'which', 'that', 'where', 'when', 'why', 'how',
  'to', 'for', 'at', 'in', 'on', 'by', 'with', 'from', 'into', 'onto',
  'a', 'an', 'the',
  'this', 'that', 'these', 'those',
  'he', 'she', 'it', 'they', 'we', 'you', 'i', 'me', 'him', 'her', 'us', 'them',
  'his', 'its', 'their', 'theirs', 'our', 'ours', 'your', 'yours', 'my', 'mine'
]);

// Contraction expansion map
const CONTRACTIONS: Record<string, string> = {
  "i'm": 'i am',
  "you're": 'you are',
  "he's": 'he is',
  "she's": 'she is',
  "it's": 'it is',
  "we're": 'we are',
  "they're": 'they are',
  "i've": 'i have',
  "you've": 'you have',
  "we've": 'we have',
  "they've": 'they have',
  "i'll": 'i will',
  "you'll": 'you will',
  "he'll": 'he will',
  "she'll": 'she will',
  "it'll": 'it will',
  "we'll": 'we will',
  "they'll": 'they will',
  "i'd": 'i would',
  "you'd": 'you would',
  "he'd": 'he would',
  "she'd": 'she would',
  "we'd": 'we would',
  "they'd": 'they would',
  "isn't": 'is not',
  "aren't": 'are not',
  "wasn't": 'was not',
  "weren't": 'were not',
  "haven't": 'have not',
  "hasn't": 'has not',
  "hadn't": 'had not',
  "won't": 'will not',
  "wouldn't": 'would not',
  "don't": 'do not',
  "doesn't": 'does not',
  "didn't": 'did not',
  "can't": 'cannot',
  "couldn't": 'could not',
  "shouldn't": 'should not',
  "mustn't": 'must not'
};

/**
 * Normalizes text: trims, standardizes smart quotes, lowercase, collapses whitespace,
 * strips trailing sentence period or punctuation.
 */
export function normalizeText(text: string): string {
  if (!text) return '';
  let clean = text
    .trim()
    .toLowerCase()
    .replace(/[‘’`]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[,;:]+/g, ' ')
    .replace(/\s+/g, ' ');

  // Strip surrounding quotes
  clean = clean.replace(/^["']|["']$/g, '').trim();

  // Strip end of sentence punctuation (. ! ?)
  clean = clean.replace(/[.!?]+$/, '').trim();
  clean = clean.replace(/^["']|["']$/g, '').trim();
  return clean;
}

/**
 * Expands common English contractions for flexible comparison
 */
export function expandContractions(text: string): string {
  const words = text.split(' ');
  return words
    .map(w => CONTRACTIONS[w] || w)
    .join(' ');
}

/**
 * Computes Damerau-Levenshtein distance between two strings
 * (insertion, deletion, substitution, and adjacent transposition)
 */
export function damerauLevenshteinDistance(a: string, b: string): number {
  const al = a.length;
  const bl = b.length;
  if (al === 0) return bl;
  if (bl === 0) return al;

  const matrix: number[][] = [];
  for (let i = 0; i <= al; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= bl; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= al; i++) {
    for (let j = 1; j <= bl; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      let min = Math.min(
        matrix[i - 1][j] + 1, // deletion
        matrix[i][j - 1] + 1, // insertion
        matrix[i - 1][j - 1] + cost // substitution
      );

      // Transposition
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        min = Math.min(min, matrix[i - 2][j - 2] + cost);
      }

      matrix[i][j] = min;
    }
  }

  return matrix[al][bl];
}

/**
 * Evaluates whether two token sequences match within the spelling tolerance,
 * strictly forbidding errors on grammatical words.
 */
export function compareWithSpellingTolerance(
  userText: string,
  targetText: string,
  allowedTolerance: number = 2
): { match: boolean; totalDistance: number; failedGrammarWord?: string } {
  const userNorm = normalizeText(userText);
  const targetNorm = normalizeText(targetText);

  // Exact string match after normalization
  if (userNorm === targetNorm) {
    return { match: true, totalDistance: 0 };
  }

  // Expanded contraction comparison
  const userExp = expandContractions(userNorm);
  const targetExp = expandContractions(targetNorm);
  if (userExp === targetExp) {
    return { match: true, totalDistance: 0 };
  }

  const userTokens = userExp.split(' ').filter(Boolean);
  const targetTokens = targetExp.split(' ').filter(Boolean);

  // Token count mismatch check
  if (userTokens.length !== targetTokens.length) {
    // If the overall string distance is small (single missing punctuation or typo like "didn'tgo" vs "didn't go")
    const overallDist = damerauLevenshteinDistance(userNorm, targetNorm);
    if (overallDist <= 1 && allowedTolerance >= 1) {
      return { match: true, totalDistance: overallDist };
    }
    return { match: false, totalDistance: 99 };
  }

  let totalDistance = 0;

  for (let i = 0; i < targetTokens.length; i++) {
    const uTok = userTokens[i];
    const tTok = targetTokens[i];

    if (uTok === tTok) continue;

    // Check if this target token is a grammar-critical word
    if (GRAMMAR_CRITICAL_WORDS.has(tTok) || tTok.endsWith('ed') || tTok.endsWith('ing') || tTok.endsWith('s')) {
      // For grammar words, ANY difference is considered a grammar rule failure!
      return {
        match: false,
        totalDistance: 99,
        failedGrammarWord: tTok
      };
    }

    const dist = damerauLevenshteinDistance(uTok, tTok);
    // Allow at most 2 edits on non-grammar words, provided word length > 3
    const maxTokenEdits = tTok.length <= 4 ? 1 : 2;

    if (dist > maxTokenEdits) {
      return { match: false, totalDistance: 99 };
    }

    totalDistance += dist;
  }

  if (totalDistance <= allowedTolerance) {
    return { match: true, totalDistance };
  }

  return { match: false, totalDistance };
}

export interface ValidationResult {
  isCorrect: boolean;
  userAnswer: string;
  matchedAnswer?: string;
  feedback: string;
  feedbackPersian?: string;
  requiresRevision: boolean;
}

/**
 * Validates a user response against a question's accepted and alternative answers
 */
export function validateAnswer(
  userRawInput: string,
  question: GrammarQuestion,
  languageMode: 'en' | 'en-fa' = 'en'
): ValidationResult {
  const input = normalizeText(userRawInput);

  if (!input) {
    return {
      isCorrect: false,
      userAnswer: '',
      feedback: 'Please enter an answer before submitting.',
      feedbackPersian: 'لطفاً پیش از ثبت، پاسخی وارد کنید.',
      requiresRevision: true
    };
  }

  const allAcceptable = [
    ...question.acceptedAnswers,
    ...(question.alternativeAnswers || [])
  ];

  let bestGrammarMismatchWord: string | undefined;

  for (const acceptable of allAcceptable) {
    const comparison = compareWithSpellingTolerance(
      input,
      acceptable,
      question.spellingTolerance ?? 2
    );

    if (comparison.match) {
      return {
        isCorrect: true,
        userAnswer: userRawInput,
        matchedAnswer: acceptable,
        feedback: question.explanation,
        feedbackPersian: question.explanationPersian,
        requiresRevision: false
      };
    }

    if (comparison.failedGrammarWord && !bestGrammarMismatchWord) {
      bestGrammarMismatchWord = comparison.failedGrammarWord;
    }
  }

  // Construct educational feedback explaining the grammatical target without giving away any accepted answer
  const sanitizeFeedback = (text: string): string => {
    let result = text;
    for (const ans of allAcceptable) {
      const cleanAns = normalizeText(ans);
      if (!cleanAns) continue;
      const escaped = cleanAns.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b${escaped}\\b`, 'gi');
      result = result.replace(regex, 'the required grammatical form');
    }
    return result;
  };

  const ruleTitle = question.requiredGrammarRules?.[0] || 'this chapter rule';
  const safeConcept = sanitizeFeedback(question.targetGrammarConcept || '');
  const safeExplanation = sanitizeFeedback(question.explanation || '');

  let feedbackEn = `Review the grammatical principle for ${ruleTitle}: ${safeExplanation}`;
  let feedbackFa = question.explanationPersian
    ? `قاعده دستوری این بخش را مرور کنید: ${question.explanationPersian}`
    : undefined;

  if (bestGrammarMismatchWord) {
    feedbackEn = `Incorrect grammatical structure. Review ${ruleTitle} (${safeConcept}) and apply the required tense, agreement, or clause structure.`;
  }

  return {
    isCorrect: false,
    userAnswer: userRawInput,
    feedback: feedbackEn,
    feedbackPersian: feedbackFa,
    requiresRevision: true
  };
}
