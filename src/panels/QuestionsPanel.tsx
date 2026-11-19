import React, { useState, useMemo, useEffect, useRef } from 'react';
import { GRAMMAR_QUESTIONS } from '../data/grammarQuestions';
import { GRAMMAR_CHAPTERS } from '../data/grammarChapters';
import { GrammarQuestion, QuestionAttemptRecord, UserSettings } from '../types';
import { validateAnswer } from '../engines/validationEngine';
import { saveQuestionAttempt, saveEarnedCardId, incrementQuestionsAnswered } from '../database/db';
import { getAllCards, isCardEarned } from '../engines/cardEngine';
import { QA_OVERRIDE, isQAOverrideActive } from '../config/qaOverride';
import { ClickToSpeakWrapper } from '../components/ClickToSpeakWrapper';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Award
} from 'lucide-react';

interface QuestionsPanelProps {
  settings: UserSettings;
  activeChapterNumber: number;
  onSelectChapter: (num: number) => void;
  attemptsMap: Record<string, QuestionAttemptRecord>;
  onAttemptSaved: (record: QuestionAttemptRecord) => void;
  earnedCardIds: string[];
  onCardEarned: (cardId: string) => void;
  currentQuestionIndex: number;
  onQuestionIndexChange: (index: number) => void;
}

export const QuestionsPanel: React.FC<QuestionsPanelProps> = ({
  settings,
  activeChapterNumber,
  onSelectChapter,
  attemptsMap,
  onAttemptSaved,
  earnedCardIds,
  onCardEarned,
  currentQuestionIndex,
  onQuestionIndexChange
}) => {
  const isEnFa = settings.language === 'en-fa';
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState<{ text: string; textFa?: string; isCorrect: boolean } | null>(null);
  const [newlyEarnedCardNotice, setNewlyEarnedCardNotice] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter 20 questions for the selected chapter
  const chapterQuestions: GrammarQuestion[] = useMemo(() => {
    return GRAMMAR_QUESTIONS.filter(q => q.chapterNumber === activeChapterNumber);
  }, [activeChapterNumber]);

  const activeQuestion: GrammarQuestion = chapterQuestions[currentQuestionIndex] || chapterQuestions[0];
  const currentRecord = attemptsMap[activeQuestion.id];

  // Sync user input with saved latest answer or clear for fresh attempt
  useEffect(() => {
    if (currentRecord) {
      setUserInput(currentRecord.latestAnswer);
      setFeedback({
        text: currentRecord.feedbackGiven,
        textFa: activeQuestion.explanationPersian,
        isCorrect: currentRecord.mastered
      });
    } else {
      setUserInput('');
      setFeedback(null);
    }
    inputRef.current?.focus();
  }, [activeQuestion.id]);

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!userInput.trim()) return;

    const bypassValidation = isQAOverrideActive() && QA_OVERRIDE.bypassAnswerValidation;
    const result = bypassValidation
      ? {
          isCorrect: true,
          userAnswer: userInput,
          feedback: activeQuestion.explanation,
          feedbackPersian: activeQuestion.explanationPersian,
          requiresRevision: false
        }
      : validateAnswer(userInput, activeQuestion, settings.language);

    const isFirstAttempt = !currentRecord;
    const firstAttemptCorrect = isFirstAttempt ? result.isCorrect : currentRecord.firstAttemptCorrect;
    const attemptsCount = isFirstAttempt ? 1 : currentRecord.attemptsCount + 1;
    const mastered = result.isCorrect || (currentRecord ? currentRecord.mastered : false);

    const updatedRecord: QuestionAttemptRecord = {
      questionId: activeQuestion.id,
      chapterId: activeQuestion.chapterId,
      firstAnswer: isFirstAttempt ? userInput : currentRecord.firstAnswer,
      firstAttemptCorrect,
      latestAnswer: userInput,
      mastered,
      attemptsCount,
      timestamp: Date.now(),
      feedbackGiven: result.feedback
    };

    await saveQuestionAttempt(updatedRecord);
    if (isFirstAttempt) {
      const todayStr = new Date().toISOString().split('T')[0];
      await incrementQuestionsAnswered(todayStr);
    }
    onAttemptSaved(updatedRecord);

    setFeedback({
      text: result.feedback,
      textFa: result.feedbackPersian,
      isCorrect: result.isCorrect
    });

    // Check if any card has now been unlocked
    if (result.isCorrect) {
      const allDeck = getAllCards();
      const masteredSet = new Set(
        Object.values({ ...attemptsMap, [activeQuestion.id]: updatedRecord })
          .filter(r => r.mastered)
          .map(r => r.questionId)
      );

      for (const card of allDeck) {
        if (!earnedCardIds.includes(card.id) && isCardEarned(card, masteredSet)) {
          await saveEarnedCardId(card.id);
          onCardEarned(card.id);
          setNewlyEarnedCardNotice(`Thou hast earned the ${card.name}!`);
          setTimeout(() => setNewlyEarnedCardNotice(null), 5000);
        }
      }
    }
  };

  const handleRetry = () => {
    setUserInput('');
    setFeedback(null);
    inputRef.current?.focus();
  };

  const handleNext = () => {
    if (currentQuestionIndex < chapterQuestions.length - 1) {
      onQuestionIndexChange(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      onQuestionIndexChange(currentQuestionIndex - 1);
    }
  };

  // Chapter statistics
  const masteredCount = chapterQuestions.filter(q => attemptsMap[q.id]?.mastered).length;

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-zinc-950 text-zinc-100">
      {/* Top Chapter Selector Bar */}
      <div className="p-3 border-b border-zinc-800 bg-zinc-900/60 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <label htmlFor="chapter-select" className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Chapter:
          </label>
          <select
            id="chapter-select"
            value={activeChapterNumber}
            onChange={(e) => {
              onSelectChapter(Number(e.target.value));
              onQuestionIndexChange(0);
            }}
            className="bg-zinc-950 border border-zinc-700/80 rounded px-2.5 py-1 text-xs font-serif text-white focus:outline-none focus:border-zinc-400 max-w-[240px] sm:max-w-none truncate"
          >
            {GRAMMAR_CHAPTERS.map(ch => (
              <option key={ch.id} value={ch.chapterNumber}>
                {ch.chapterNumber}. {ch.title}
              </option>
            ))}
          </select>
        </div>

        {/* Chapter Question Navigator Progress */}
        <div className="flex items-center gap-2 text-xs font-mono tabular-nums">
          <span className="text-zinc-400">Mastered:</span>
          <span className="text-white font-semibold">
            {masteredCount} / 20
          </span>
          <div className="w-20 bg-zinc-800 h-1.5 rounded-full overflow-hidden hidden sm:block">
            <div
              className="bg-zinc-300 h-full transition-all duration-300"
              style={{ width: `${(masteredCount / 20) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Achievement Unlocked Toast */}
      {newlyEarnedCardNotice && (
        <div className="bg-amber-950/80 border-b border-amber-600/60 p-2.5 px-4 text-xs font-serif text-amber-200 flex items-center justify-center gap-2">
          <Award className="w-4 h-4 text-amber-400" />
          <span>{newlyEarnedCardNotice}</span>
        </div>
      )}

      {/* Main Question Assessment Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-8 flex flex-col items-center justify-center">
        <div className="max-w-xl w-full space-y-6">
          {/* Question Stepper & Difficulty Metadata */}
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-zinc-400">
              <span>Question {activeQuestion.questionNumber} of 20</span>
              <span aria-hidden="true">·</span>
              <span className={
                activeQuestion.difficulty === 'easy' ? 'text-zinc-400' :
                activeQuestion.difficulty === 'medium' ? 'text-zinc-300' :
                activeQuestion.difficulty === 'hard' ? 'text-zinc-200' :
                'text-amber-500'
              }>
                {activeQuestion.difficulty}
              </span>
            </div>

            {currentRecord?.mastered && (
              <span className="flex items-center gap-1 text-xs text-emerald-500 font-mono">
                <CheckCircle2 className="w-4 h-4" />
                MASTERED
              </span>
            )}
          </div>

          {/* Question Task Prompt */}
          <div className="space-y-3">
            <div className="font-serif text-lg sm:text-xl text-zinc-100 font-medium leading-relaxed">
              <ClickToSpeakWrapper text={activeQuestion.prompt} settings={settings} />
            </div>

            {isEnFa && activeQuestion.promptPersian && (
              <p className="font-persian text-xs sm:text-sm text-zinc-400 text-right leading-relaxed" dir="rtl">
                {activeQuestion.promptPersian}
              </p>
            )}
          </div>

          {/* Elegant Victorian Typing Answer Line */}
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className="relative">
              <label htmlFor="answer-input" className="sr-only">Your answer</label>
              <input
                id="answer-input"
                ref={inputRef}
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your complete grammatical response..."
                className="w-full bg-transparent border-b-2 border-zinc-600 focus:border-zinc-100 px-1 py-3 text-base font-serif text-white tracking-wide placeholder:text-zinc-500 focus:outline-none transition-colors"
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentQuestionIndex === 0}
                className="flex items-center gap-1 px-3 py-1.5 rounded border border-zinc-800 text-xs font-serif text-zinc-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors whitespace-nowrap shrink-0"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <div className="flex items-center gap-2">
                {feedback && !feedback.isCorrect && (
                  <button
                    type="button"
                    onClick={handleRetry}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-zinc-700 bg-zinc-900 text-xs font-serif text-zinc-300 hover:text-white transition-colors whitespace-nowrap shrink-0"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retry</span>
                  </button>
                )}

                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-serif font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm whitespace-nowrap shrink-0"
                >
                  Submit Answer
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={currentQuestionIndex === chapterQuestions.length - 1}
                  className="flex items-center gap-1 px-3 py-1.5 rounded border border-zinc-800 text-xs font-serif text-zinc-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </form>

          {/* Educational Feedback Message */}
          {feedback && (
            <div className={`p-4 rounded-xl border space-y-2 transition-all ${
              feedback.isCorrect
                ? 'bg-zinc-900/60 border-zinc-700/80 text-zinc-200'
                : 'bg-zinc-900/40 border-zinc-800 text-zinc-300'
            }`}>
              <div className="flex items-center gap-2 font-display text-xs uppercase tracking-wider">
                {feedback.isCorrect ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-500">Accepted · Syntactical Rule</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-amber-500" />
                    <span className="text-amber-500">Review Grammar Rule</span>
                  </>
                )}
              </div>

              <div className="font-serif text-sm leading-relaxed text-zinc-200">
                <ClickToSpeakWrapper text={feedback.text} settings={settings} />
              </div>

              {isEnFa && feedback.textFa && (
                <p className="font-persian text-xs text-zinc-400 pt-1.5 border-t border-zinc-850 text-right leading-relaxed" dir="rtl">
                  {feedback.textFa}
                </p>
              )}
            </div>
          )}

          {/* First Attempt Record Preservation Status */}
          {currentRecord && (
            <div className="pt-4 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-500 tabular-nums">
              <span>First Attempt: {currentRecord.firstAttemptCorrect ? '✓ Correct' : '✗ Missed'}</span>
              <span>Total Attempts: {currentRecord.attemptsCount}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
