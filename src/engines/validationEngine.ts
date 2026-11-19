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
 * Deterministically validates a free-form student-written sentence against a specific
 * chapter grammatical construction (e.g. simple_present, present_progressive, noun_clause, passive_voice, etc.).
 */
export function validateOpenGrammarSentence(rawInput: string, taskType: string): boolean {
  const norm = expandContractions(normalizeText(rawInput));
  const tokens = norm.split(' ').filter(Boolean);
  if (tokens.length < 3) return false;

  // Must consist of valid alphabetical words (allowing apostrophes/hyphens/numbers)
  if (!tokens.every(t => /^[a-z0-9'-]+$/i.test(t))) return false;

  switch (taskType) {
    case 'simple_present': {
      // Must NOT use past/progressive/future/perfect auxiliaries
      if (/\b(was|were|did|had|will|shall|would|could|should)\b/.test(norm)) return false;
      if (/\b(am|is|are)\s+[a-z]+ing\b/.test(norm)) return false;
      if (/\b(have|has)\s+([a-z]+ed|been|seen|done|gone|written|taken|made|known|read|spoken|eaten|given|come|become|begun|broken|chosen|driven|fallen|flown|forgotten|frozen|grown|hidden|ridden|risen|shaken|shown|stolen|sworn|torn|worn|won)\b/.test(norm)) return false;
      // Reject common agreement errors: "he/she/it go/study/have/are/am" or "i/you/we/they is/has/goes"
      if (/\b(he|she|it)\s+(am|are|have|do|go|walk|study|read|write|play|work|live|like|want|need|know|make|take|come|see)\b/.test(norm)) return false;
      if (/\b(i|you|we|they)\s+(is|has|does|goes|walks|studies|reads|writes|plays|works|lives|likes|wants|needs)\b/.test(norm)) return false;
      // Reject regular past -ed verbs as main predicate
      if (/\b(i|you|he|she|it|we|they)\s+[a-z]+ed\b/.test(norm)) return false;
      // Check valid simple present pattern
      return (
        /\b(he|she|it|[a-z]+)\s+(is|has|does|[a-z]{2,}s)\b/.test(norm) ||
        /\b(i)\s+(am|have|do|[a-z]{3,})\b/.test(norm) ||
        /\b(you|we|they|[a-z]+s)\s+(are|have|do|[a-z]{3,})\b/.test(norm)
      );
    }
    case 'present_progressive': {
      if (/\b(he|she|it)\s+(am|are)\b/.test(norm)) return false;
      if (/\b(i)\s+(is|are)\b/.test(norm)) return false;
      if (/\b(you|we|they)\s+(am|is)\b/.test(norm)) return false;
      return /\b(am|is|are)\s+(not\s+|currently\s+|now\s+|always\s+|constantly\s+)?[a-z]{3,}ing\b/.test(norm);
    }
    case 'simple_past': {
      if (/\b(am|is|are|will|has|have)\b/.test(norm)) return false;
      if (/\b(was|were)\s+[a-z]+ing\b/.test(norm)) return false;
      return /\b(was|were|did|had|[a-z]{2,}ed|went|saw|wrote|found|came|made|took|spoke|read|bought|built|fell|stood|knew|thought|began|broke|chose|drove|ate|flew|forgot|gave|grew|heard|kept|left|lost|met|paid|ran|said|sold|sent|sang|sat|slept|spent|swam|taught|told|understood|wore|won)\b/.test(norm);
    }
    case 'past_progressive': {
      if (/\b(i|he|she|it)\s+were\b/.test(norm)) return false;
      if (/\b(you|we|they)\s+was\b/.test(norm)) return false;
      return /\b(was|were)\s+(not\s+)?[a-z]{3,}ing\b/.test(norm);
    }
    case 'present_perfect': {
      if (/\b(he|she|it)\s+have\b/.test(norm)) return false;
      if (/\b(i|you|we|they)\s+has\b/.test(norm)) return false;
      return /\b(have|has)\s+(not\s+|never\s+|already\s+|just\s+|ever\s+)?(been\s+[a-z]+ing|[a-z]+ed|been|seen|done|gone|written|taken|made|known|read|spoken|eaten|given|come|become|begun|broken|chosen|driven|fallen|flown|forgotten|frozen|grown|hidden|ridden|risen|shown|stolen|worn|won|lived|worked|studied|finished|published|heard|lost|met|paid|built|bought|found|left|kept|said|sent|sold|spent|taught|told|thought|understood)\b/.test(norm);
    }
    case 'past_perfect': {
      return /\bhad\s+(not\s+|never\s+|already\s+|just\s+|scarcely\s+|hardly\s+)?(been\s+[a-z]+ing|[a-z]+ed|been|seen|done|gone|written|taken|made|known|read|spoken|eaten|given|come|become|begun|broken|chosen|driven|fallen|flown|forgotten|frozen|grown|hidden|ridden|risen|shown|stolen|worn|won|lain|dispersed|published|heard|lost|met|paid|built|bought|found|left|kept|said|sent|sold|spent|taught|told|thought|understood)\b/.test(norm);
    }
    case 'future_time': {
      return /\b(will|shall)\s+(not\s+)?(be\s+[a-z]+ing|have\s+[a-z]+|[a-z]{2,})\b/.test(norm) ||
        /\b(am|is|are)\s+(not\s+)?going\s+to\s+[a-z]{2,}\b/.test(norm);
    }
    case 'subject_verb_agreement': {
      if (/\b(every|each|everyone|everybody|someone|somebody|nobody|no one|neither of|either of|one of|the number of)\b[\s\S]*\b(are|were|have)\b/.test(norm)) return false;
      return /\b(every|each|neither|either|one of|the number of|a number of|news|economics|physics|mathematics|committee|price|bouquet|miles|dollars|pounds)\b/.test(norm) &&
        /\b(is|are|was|were|has|have|[a-z]{2,}s)\b/.test(norm);
    }
    case 'nouns_articles': {
      if (/\b(a)\s+(umbrella|hour|honest|honor|heir|apple|elephant|island|orange|univ)\b/.test(norm)) return false;
      if (/\b(an)\s+(book|car|house|university|european|one|cat|dog|table|lexicographer)\b/.test(norm)) return false;
      if (/\b(advices|informations|furnitures|knowledges|homeworks|equipments|luggages|baggages)\b/.test(norm)) return false;
      return /\b(a|an|the|advice|information|furniture|knowledge|patience|criteria|phenomena|wolves|children|men|women|people|police)\b/.test(norm);
    }
    case 'pronouns_determiners': {
      if (/\bbetween\s+you\s+and\s+i\b/.test(norm)) return false;
      return /\b(myself|yourself|himself|herself|itself|ourselves|themselves|each other|one another|whose|whom|who|its|their|his|her|neither|none)\b/.test(norm);
    }
    case 'modals_part1': {
      if (/\b(must|can|could|should|may|might|had better)\s+to\b/.test(norm)) return false;
      return /\b(must|should|ought to|can|could|may|have to|has to|had to|had better|need not|are not allowed to|was able to|managed to)\s+(not\s+)?[a-z]{2,}\b/.test(norm);
    }
    case 'modals_part2': {
      return /\b(must|might|may|could|should|ought to|cannot|would|would rather)\s+(not\s+)?(have\s+[a-z]{2,}|be\s+[a-z]{2,}|[a-z]{2,})\b/.test(norm);
    }
    case 'passive_voice': {
      return /\b(am|is|are|was|were|be|been|being)\s+(not\s+|currently\s+|already\s+|never\s+)?(being\s+)?([a-z]+ed|written|taken|given|done|made|seen|known|built|bought|found|held|kept|left|lost|paid|read|said|sent|sold|spent|spoken|stolen|taught|told|thought|torn|understood|worn|won|born|broken|chosen|driven|eaten|fallen|forgotten|frozen|grown|hidden|ridden|risen|shaken|shown)\b/.test(norm);
    }
    case 'noun_clause': {
      // Reject direct question inversion after noun-clause connectors
      if (/\b(what|where|when|why|how|who|whose)\s+(did|do|does)\s+(i|you|he|she|it|we|they)\b/.test(norm)) return false;
      return /\b(that|whether|if|what|where|when|why|how|who|whom|whose|whoever|whatever|whichever)\s+[a-z]+/.test(norm);
    }
    case 'relative_clause': {
      return /\b(who|whom|whose|which|that|where|when)\s+[a-z]+/.test(norm);
    }
    case 'gerund_infinitive_1': {
      if (/\b(enjoy|avoid|postpone|consider|finish|quit|mind|suggest|deny|admit)\w*\s+to\s+[a-z]+/.test(norm)) return false;
      if (/\b(decide|hope|agree|plan|refuse|promise|offer|manage|afford|fail)\w*\s+[a-z]+ing\b/.test(norm)) return false;
      return /\b(enjoy|avoid|postpone|consider|finish|quit|mind|suggest|deny|admit|practice|keep|delay|miss|risk)\w*\s+[a-z]+ing\b/.test(norm) ||
        /\b(decide|hope|agree|plan|refuse|promise|offer|manage|afford|fail|want|need|expect|learn|choose|wish)\w*\s+to\s+[a-z]+\b/.test(norm);
    }
    case 'gerund_infinitive_2': {
      if (/\b(make|made|let)\s+(him|her|me|us|them|the\s+[a-z]+)\s+to\s+[a-z]+/.test(norm)) return false;
      return /\b(make|made|let|have|had|help|helped|get|got)\s+[a-z]+\s+(to\s+)?[a-z]+\b/.test(norm) ||
        /\b(in|on|of|for|from|about|to|before|after|without|by)\s+[a-z]+ing\b/.test(norm) ||
        /\b(in order to|remember|stop|stopped|used to)\s+(to\s+)?[a-z]+/.test(norm);
    }
    case 'parallel_conjunctions': {
      return /\b(both\s+[\s\S]+\s+and|not\s+only\s+[\s\S]+\s+but|either\s+[\s\S]+\s+or|neither\s+[\s\S]+\s+nor|and|but|yet|so|for)\b/.test(norm);
    }
    case 'adverb_clause': {
      return /\b(although|even though|though|because|since|as|while|whereas|until|unless|as soon as|once|so that|in order that|even if|wherever|as if|as though|now that|no sooner)\b[\s\S]+[a-z]+/.test(norm);
    }
    case 'reduced_adverb_phrase': {
      return /\b(having\s+[a-z]+|while\s+[a-z]+ing|before\s+[a-z]+ing|after\s+[a-z]+ing|upon\s+[a-z]+ing|being\s+[a-z]+|[a-z]+ing\s+[\s\S]+,\s*[a-z]+|seen\s+from|shocked\s+by|frightened\s+by|exhausted\s+by|when\s+asked)\b/.test(norm);
    }
    case 'connectives': {
      return /\b(therefore|consequently|nevertheless|nonetheless|however|furthermore|moreover|otherwise|despite|in spite of|because of|due to|owing to|on the other hand|in contrast to|unlike|even so|all the same|as a result|likewise|similarly|yet)\b/.test(norm);
    }
    case 'conditionals_wishes': {
      return /\b(if|unless|provided that|wish|if only|had\s+(i|he|she|they|we|you|the)|were\s+(i|he|she|they|we|you)|should\s+you)\b[\s\S]+\b(will|would|could|might|were|had|knew|boils|[a-z]+)\b/.test(norm);
    }
    case 'inversion_prepositions': {
      return /\b(rarely|seldom|never|hardly|scarcely|no sooner|not only|little|only after|only by|under no circumstances)\s+(do|does|did|have|has|had|can|could|will|would|should|are|is|was|were)\s+[a-z]+/.test(norm) ||
        /\b(insist|insisted|congratulate|congratulated)\s+([a-z]+\s+)?on\b/.test(norm) ||
        /\b(accustomed|dedicated)\s+to\b/.test(norm) ||
        /\b(fond|accused)\s+of\b/.test(norm);
    }
    default:
      return false;
  }
}

/**
 * Validates a user response against a question's accepted and alternative answers,
 * or against the chapter's open grammar rule if the question is an open sentence-writing task.
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

  // If this is an open sentence-writing question, validate against the grammatical construction rule first
  if (question.openGrammarTask && validateOpenGrammarSentence(userRawInput, question.openGrammarTask)) {
    return {
      isCorrect: true,
      userAnswer: userRawInput,
      matchedAnswer: userRawInput,
      feedback: question.explanation,
      feedbackPersian: question.explanationPersian,
      requiresRevision: false
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

