/**
 * Core Types for VESTA Application
 * Created by Jackdaw
 */

export type AppTheme = 'dark' | 'light';
export type AppLanguage = 'en' | 'en-fa';
export type AppFontSize = 'small' | 'medium' | 'large';

export type NavPanel = 'questions' | 'grammar' | 'dashboard' | 'settings';

export interface UserSettings {
  theme: AppTheme;
  language: AppLanguage;
  fontSize: AppFontSize;
  voiceGender: 'male' | 'female' | 'any';
  voiceAccent: 'american' | 'british' | 'any';
  voiceName: string;
  speechRate: number;
}

export interface ActivityDay {
  date: string; // YYYY-MM-DD
  minutes: number;
  questionsAnswered: number;
}

export interface GrammarSection {
  id: string;
  title: string;
  titlePersian?: string;
  content: string;
  contentPersian?: string;
  formula?: string;
  examples: {
    sentence: string;
    translation?: string;
    explanation: string;
    explanationPersian?: string;
  }[];
  commonMistakes?: {
    incorrect: string;
    correct: string;
    reason: string;
    reasonPersian?: string;
  }[];
}

export interface GrammarChapter {
  id: string;
  chapterNumber: number;
  title: string;
  titlePersian: string;
  category: string;
  summary: string;
  summaryPersian: string;
  introduction: string;
  introductionPersian: string;
  whyItExists: string;
  whyItExistsPersian: string;
  whenToUse: string;
  whenToUsePersian: string;
  keyRule: string;
  keyRulePersian: string;
  sections: GrammarSection[];
  practicalUsage: string;
  practicalUsagePersian: string;
  sourceReference: string;
}

export type QuestionDifficulty = 'easy' | 'medium' | 'hard' | 'advanced';

export interface GrammarQuestion {
  id: string;
  chapterId: string;
  chapterNumber: number;
  questionNumber: number; // 1 to 20
  difficulty: QuestionDifficulty;
  prompt: string;
  promptPersian?: string;
  hint?: string;
  contextSentence?: string;
  acceptedAnswers: string[];
  alternativeAnswers?: string[];
  requiredGrammarRules: string[];
  targetGrammarConcept: string;
  spellingTolerance: number;
  explanation: string;
  explanationPersian?: string;
}

export interface QuestionAttemptRecord {
  questionId: string;
  chapterId: string;
  firstAnswer: string;
  firstAttemptCorrect: boolean;
  latestAnswer: string;
  mastered: boolean;
  attemptsCount: number;
  timestamp: number;
  feedbackGiven: string;
}

export type CardSuit = 'spades' | 'clubs' | 'hearts' | 'diamonds';
export type CardRank = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';

export interface PlayingCardData {
  id: string;
  cardIndex: number; // 0 to 51
  suit: CardSuit;
  rank: CardRank;
  name: string;
  namePersian: string;
  chapterNumber: number;
  cardInChapter: number; // 1, 2 or 3
  questionRange: [number, number]; // e.g. [1, 10] or [1, 7]
  questionIds: string[];
  title: string;
  victorianFlavor: string;
}

export interface JollyJesterState {
  unlocked: boolean;
  hasViewedWarning: boolean;
  active: boolean; // active test currently in progress
  attemptsRemaining: number; // max 3
  isCompleted: boolean;
  completedAt?: number;
  lastDraftTitle: string;
  lastDraftEssay: string;
  interruptionLogged?: {
    id: string;
    timestamp: number;
    penaltyApplied: number;
  };
  evaluationResult?: JollyJesterEvaluation;
}

export interface JollyJesterEvaluation {
  passed: boolean;
  titleRelevance: boolean;
  totalWords: number;
  spellingErrorsCount: number;
  grammarErrorsCount: number;
  coherenceStatus: 'pass' | 'fail' | 'uncertain';
  chaptersCoverage: {
    chapterNumber: number;
    chapterTitle: string;
    passed: boolean;
    evidence: string[];
    feedback: string;
    feedbackPersian?: string;
  }[];
  passedChaptersCount: number;
  generalFeedback: string;
  generalFeedbackPersian?: string;
  failedRequirements: string[];
}
