import React, { useState, useMemo } from 'react';
import {
  ActivityDay,
  CardSuit,
  JollyJesterState,
  PlayingCardData,
  QuestionAttemptRecord,
  UserSettings
} from '../types';
import { getAllCards, getCurrentTargetCard, isCardEarned, isJollyJesterEligible } from '../engines/cardEngine';
import { PlayingCard } from '../components/PlayingCard';
import { JokerCard } from '../components/JokerCard';
import {
  Award,
  Clock,
  Calendar,
  BookCheck,
  Flame,
  Layers,
  Skull
} from 'lucide-react';

interface DashboardPanelProps {
  settings: UserSettings;
  attemptsMap: Record<string, QuestionAttemptRecord>;
  earnedCardIds: string[];
  activityHistory: ActivityDay[];
  jollyJesterState: JollyJesterState;
  onOpenJollyJester: () => void;
  onNavigateToQuestions: (chapterNum: number) => void;
  installDate?: string;
  initialInspectedCard?: PlayingCardData | null;
}

const SUIT_TABS: { id: 'all' | CardSuit; label: string; symbol: string }[] = [
  { id: 'all', label: 'All 52 Cards', symbol: '♠♣♥♦' },
  { id: 'spades', label: 'Spades', symbol: '♠' },
  { id: 'clubs', label: 'Clubs', symbol: '♣' },
  { id: 'hearts', label: 'Hearts', symbol: '♥' },
  { id: 'diamonds', label: 'Diamonds', symbol: '♦' },
];

export const DashboardPanel: React.FC<DashboardPanelProps> = ({
  attemptsMap,
  earnedCardIds,
  activityHistory,
  jollyJesterState,
  onOpenJollyJester,
  onNavigateToQuestions,
  installDate,
  initialInspectedCard = null
}) => {
  const [selectedSuitFilter, setSelectedSuitFilter] = useState<'all' | CardSuit>('all');
  const [selectedCardForInspection, setSelectedCardForInspection] = useState<PlayingCardData | null>(initialInspectedCard);

  const allCards = useMemo(() => getAllCards(), []);
  const earnedSet = useMemo(() => new Set(earnedCardIds), [earnedCardIds]);

  const masteredSet = useMemo(() => {
    return new Set(
      Object.values(attemptsMap)
        .filter(r => r.mastered)
        .map(r => r.questionId)
    );
  }, [attemptsMap]);

  // Target / Latest Card info
  const targetInfo = useMemo(() => {
    return getCurrentTargetCard(masteredSet);
  }, [masteredSet]);

  const jesterEligible = useMemo(() => {
    return isJollyJesterEligible(masteredSet) || earnedCardIds.length === 52 || jollyJesterState.unlocked;
  }, [masteredSet, earnedCardIds.length, jollyJesterState.unlocked]);

  // Statistics calculation (strictly based on immutable first attempts)
  const stats = useMemo(() => {
    const records = Object.values(attemptsMap);
    const totalAttempted = records.length;
    const firstAttemptCorrectCount = records.filter(r => r.firstAttemptCorrect).length;
    const firstAttemptIncorrectCount = totalAttempted - firstAttemptCorrectCount;
    const accuracy = totalAttempted > 0 ? Math.round((firstAttemptCorrectCount / totalAttempted) * 100) : 0;
    const masteredCount = records.filter(r => r.mastered).length;

    // Chapters completed (all 20 questions mastered)
    let completedChapters = 0;
    for (let ch = 1; ch <= 20; ch++) {
      const chId = `ch-${ch.toString().padStart(2, '0')}`;
      let chMastered = 0;
      for (let q = 1; q <= 20; q++) {
        if (attemptsMap[`${chId}-q${q}`]?.mastered) {
          chMastered++;
        }
      }
      if (chMastered === 20) completedChapters++;
    }

    // Activity times
    const totalMinutes = activityHistory.reduce((acc, d) => acc + d.minutes, 0);
    const todayStr = new Date().toISOString().split('T')[0];
    const todayMinutes = activityHistory.find(d => d.date === todayStr)?.minutes || 0;

    return {
      totalAttempted,
      firstAttemptCorrectCount,
      firstAttemptIncorrectCount,
      accuracy,
      masteredCount,
      completedChapters,
      totalMinutes,
      todayMinutes
    };
  }, [attemptsMap, activityHistory]);

  // Last 7 days activity chart calculation
  const last7Days = useMemo(() => {
    const days: { label: string; date: string; minutes: number }[] = [];
    const now = new Date();

    for (let i = 6; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      const weekday = d.toLocaleDateString('en-US', { weekday: 'short' });
      const record = activityHistory.find(item => item.date === dateStr);
      days.push({
        label: weekday,
        date: dateStr,
        minutes: record ? record.minutes : 0
      });
    }
    const maxMin = Math.max(...days.map(d => d.minutes), 30);
    return { days, maxMin };
  }, [activityHistory]);

  const filteredDeckCards = useMemo(() => {
    if (selectedSuitFilter === 'all') return allCards;
    return allCards.filter(c => c.suit === selectedSuitFilter);
  }, [allCards, selectedSuitFilter]);

  return (
    <div className="flex-1 flex flex-col h-full overflow-y-auto bg-zinc-950 text-zinc-100 p-4 sm:p-6 lg:p-8 select-none">
      <div className="max-w-5xl mx-auto w-full space-y-6 pb-8">
        {/* Top Header & Overview */}
        <div className="border-b border-zinc-800 pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h1 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white">
              Scholar's Ledger
            </h1>
            <p className="text-xs text-zinc-400 font-serif mt-1">
              Personal English grammar assessment, 52-card progression, and study activity
              {installDate ? ` · Installed ${installDate}` : ''}.
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-400 tabular-nums">
            <span>Correct: {stats.firstAttemptCorrectCount}</span>
            <span className="mx-2">·</span>
            <span>Missed: {stats.firstAttemptIncorrectCount}</span>
          </div>
        </div>

        {/* 4 Essential Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 rounded-xl border border-zinc-850 bg-zinc-900/30 space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
              <BookCheck className="w-3.5 h-3.5" />
              Completed
            </span>
            <div className="text-xl sm:text-2xl font-display font-bold text-white tabular-nums">
              {stats.completedChapters} <span className="text-xs font-mono font-normal text-zinc-500">/ 20 Ch.</span>
            </div>
            <div className="text-[10px] text-zinc-400 font-serif tabular-nums">
              {stats.masteredCount} of 400 questions mastered
            </div>
          </div>

          <div className="p-4 rounded-xl border border-zinc-850 bg-zinc-900/30 space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-amber-500" />
              Accuracy
            </span>
            <div className="text-xl sm:text-2xl font-display font-bold text-white tabular-nums">
              {stats.accuracy}%
            </div>
            <div className="text-[10px] text-zinc-400 font-serif">
              Immutable first-attempt score
            </div>
          </div>

          <div className="p-4 rounded-xl border border-zinc-850 bg-zinc-900/30 space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-rose-500" />
              Playing Cards
            </span>
            <div className="text-xl sm:text-2xl font-display font-bold text-white tabular-nums">
              {earnedCardIds.length} <span className="text-xs font-mono font-normal text-zinc-500">/ 52</span>
            </div>
            <div className="text-[10px] text-zinc-400 font-serif tabular-nums">
              {52 - earnedCardIds.length} standard cards remaining
            </div>
          </div>

          <div className="p-4 rounded-xl border border-zinc-850 bg-zinc-900/30 space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              Study Time
            </span>
            <div className="text-xl sm:text-2xl font-display font-bold text-white tabular-nums">
              {stats.totalMinutes}m
            </div>
            <div className="text-[10px] text-zinc-400 font-serif tabular-nums">
              Today: {stats.todayMinutes} minutes active
            </div>
          </div>
        </div>

        {/* Middle Two-Column Grid: Current Card Focus & 7-Day Activity Chart */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Left: Active Target Card Showcase */}
          <div className="md:col-span-6 lg:col-span-5 p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                Current Pursuit Card
              </span>
              <span className="text-xs font-mono text-zinc-500">
                Ch. {targetInfo.currentCard?.chapterNumber}
              </span>
            </div>

            <div className="flex items-center justify-center py-2">
              {targetInfo.currentCard && (
                <PlayingCard
                  card={targetInfo.currentCard}
                  isUnlocked={earnedSet.has(targetInfo.currentCard.id) || isCardEarned(targetInfo.currentCard, masteredSet)}
                  isTarget={true}
                  progressRatio={targetInfo.progressRatio}
                  size="md"
                  onClick={() => setSelectedCardForInspection(targetInfo.currentCard)}
                />
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline justify-between text-xs font-serif">
                <span className="font-semibold text-white">
                  {targetInfo.currentCard?.name}
                </span>
                <span className="font-mono text-zinc-400 tabular-nums">
                  {targetInfo.completedQuestionsInCard} / {targetInfo.totalQuestionsInCard} Questions
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-zinc-300 h-full transition-all duration-300"
                  style={{ width: `${targetInfo.progressRatio * 100}%` }}
                />
              </div>

              <div className="flex justify-between items-center pt-2 gap-2">
                <span className="text-[11px] font-serif italic text-zinc-400">
                  {targetInfo.currentCard?.victorianFlavor}
                </span>
                {targetInfo.currentCard && (
                  <button
                    type="button"
                    onClick={() => onNavigateToQuestions(targetInfo.currentCard!.chapterNumber)}
                    className="text-xs text-white underline hover:text-amber-500 transition-colors whitespace-nowrap shrink-0"
                  >
                    Solve Now →
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right: 7-Day Activity Chart */}
          <div className="md:col-span-6 lg:col-span-7 p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                7-Day Study Cadence
              </span>
              <span className="text-xs font-mono text-zinc-500">
                Foreground Active Minutes
              </span>
            </div>

            {/* Bar Chart */}
            <div className="h-44 flex items-end justify-between gap-2 pt-4 px-2">
              {last7Days.days.map((d, i) => {
                const heightPercent = Math.min(100, Math.max(8, (d.minutes / last7Days.maxMin) * 100));
                const isToday = i === 6;

                return (
                  <div key={d.date} className="flex-1 flex flex-col items-center gap-2 group relative">
                    {/* Tooltip */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 bg-zinc-900 border border-zinc-700 px-1.5 py-0.5 rounded text-[10px] font-mono text-white whitespace-nowrap pointer-events-none z-20">
                      {d.minutes} mins
                    </div>

                    <div className="w-full max-w-[28px] h-32 flex items-end justify-center bg-zinc-950/60 rounded overflow-hidden">
                      <div
                        className={`w-full rounded-t transition-all duration-300 ${
                          isToday ? 'bg-zinc-300' : 'bg-zinc-600 hover:bg-zinc-400'
                        }`}
                        style={{ height: `${heightPercent}%` }}
                      />
                    </div>
                    <span className={`text-[10px] font-mono ${isToday ? 'text-white font-semibold' : 'text-zinc-500'}`}>
                      {d.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <p className="text-[11px] font-serif text-zinc-500 italic text-center">
              Active study time accumulates only while VESTA is actively engaged in the foreground.
            </p>
          </div>
        </div>

        {/* Complete 52-Card Standard Playing-Card Deck Gallery on Dashboard */}
        <div className="p-5 rounded-2xl border border-zinc-800 bg-zinc-900/30 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800/80 pb-3">
            <div>
              <h2 className="font-display font-bold text-base sm:text-lg text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-zinc-400" />
                <span>The 52 Royal Playing Cards</span>
              </h2>
              <p className="text-xs font-serif text-zinc-400 mt-0.5">
                Each standard playing card corresponds to a specific question group across the 20 grammar chapters. Tap any card to inspect its artwork and chapter assignment.
              </p>
            </div>

            {/* Suit Filter Controls */}
            <div className="flex flex-wrap items-center gap-1 p-1 bg-zinc-950/80 border border-zinc-800 rounded-lg">
              {SUIT_TABS.map(tab => {
                const isActive = selectedSuitFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setSelectedSuitFilter(tab.id)}
                    className={`px-2.5 py-1 rounded text-xs font-serif transition-colors whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-zinc-800 text-white font-semibold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <span className="mr-1">{tab.symbol}</span>
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 52 Playing Cards Visual Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-13 gap-3 justify-items-center pt-1">
            {filteredDeckCards.map((card) => {
              const unlocked = earnedSet.has(card.id) || isCardEarned(card, masteredSet);
              const isCurrent = targetInfo.currentCard?.id === card.id;
              return (
                <PlayingCard
                  key={card.id}
                  card={card}
                  isUnlocked={unlocked}
                  isTarget={isCurrent}
                  progressRatio={isCurrent ? targetInfo.progressRatio : 0}
                  size="sm"
                  onClick={() => setSelectedCardForInspection(card)}
                />
              );
            })}
          </div>
        </div>

        {/* JOLLY JESTER Final Challenge Banner (53rd Sovereign Joker Reward — Kept Separate from 52 Cards) */}
        <div className={`p-6 rounded-2xl border transition-all ${
          jollyJesterState.isCompleted
            ? 'border-amber-600/80 bg-zinc-900/80 shadow-2xl'
            : jesterEligible
            ? 'border-zinc-500 bg-zinc-900/70 shadow-xl'
            : 'border-zinc-800 bg-zinc-900/20 opacity-85'
        }`}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              {jollyJesterState.isCompleted ? (
                <JokerCard size="sm" onClick={onOpenJollyJester} />
              ) : (
                <div className="w-20 h-28 rounded-xl border border-zinc-700 bg-zinc-950 flex flex-col items-center justify-center shrink-0 p-2">
                  <Skull className="w-8 h-8 text-zinc-500" />
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mt-2">
                    53rd Card
                  </span>
                </div>
              )}

              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="font-display font-bold text-base sm:text-lg tracking-wider text-white">
                    JOLLY JESTER
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    · {jollyJesterState.isCompleted
                      ? 'The Final Joker Unlocked'
                      : jesterEligible
                      ? `Ready (${jollyJesterState.attemptsRemaining} / 3 Attempts)`
                      : `Locked (${earnedCardIds.length} / 52 Standard Cards)`}
                  </span>
                </div>

                <p className="text-xs font-serif text-zinc-300 max-w-xl leading-relaxed">
                  {jollyJesterState.isCompleted
                    ? 'Thou hast demonstrated complete mastery over all twenty grammar chapters and earned the ominous 53rd Sovereign Card: The Joker.'
                    : jesterEligible
                    ? 'All 52 standard playing cards have been earned. The sinister Jester awaits your 20-chapter scholarly thesis.'
                    : 'The sinister Jester sleeps in his dark Victorian court. Unlock all 52 standard playing cards across the twenty chapters to awaken the supreme examination.'}
                </p>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={onOpenJollyJester}
                disabled={!jesterEligible && !jollyJesterState.isCompleted}
                className={`px-5 py-2.5 rounded-lg font-serif text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 ${
                  jollyJesterState.isCompleted
                    ? 'bg-amber-600 hover:bg-amber-500 text-black shadow-lg'
                    : jesterEligible
                    ? 'bg-zinc-100 hover:bg-white text-zinc-950 shadow-lg'
                    : 'bg-zinc-800 text-zinc-500 border border-zinc-700/60 cursor-not-allowed'
                }`}
              >
                {jollyJesterState.isCompleted
                  ? 'Inspect Final Joker & Thesis'
                  : jesterEligible
                  ? 'Face the Jester'
                  : 'Locked Challenge'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Card Detail Inspection Modal */}
      {selectedCardForInspection && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
          onClick={() => setSelectedCardForInspection(null)}
        >
          <div
            className="max-w-md w-full rounded-2xl border border-zinc-700 bg-zinc-950 p-6 flex flex-col items-center space-y-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between border-b border-zinc-800 pb-3">
              <div>
                <h3 className="font-display font-bold text-base text-white">
                  {selectedCardForInspection.name}
                </h3>
                <p className="text-xs text-zinc-400 font-serif">
                  {selectedCardForInspection.title} · Chapter {selectedCardForInspection.chapterNumber}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCardForInspection(null)}
                className="text-xs font-mono text-zinc-400 hover:text-white px-2.5 py-1 rounded border border-zinc-800"
              >
                Close
              </button>
            </div>

            <PlayingCard
              card={selectedCardForInspection}
              isUnlocked={earnedSet.has(selectedCardForInspection.id) || isCardEarned(selectedCardForInspection, masteredSet)}
              size="lg"
              showBadge={false}
            />

            <div className="w-full p-3.5 rounded-xl border border-zinc-800 bg-zinc-900/50 space-y-2 text-xs font-serif">
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Assigned Questions:</span>
                <span className="font-mono text-white">
                  Chapter {selectedCardForInspection.chapterNumber}, Q{selectedCardForInspection.questionRange[0]}–Q{selectedCardForInspection.questionRange[1]}
                </span>
              </div>
              <p className="text-zinc-300 italic">
                {selectedCardForInspection.victorianFlavor}
              </p>
            </div>

            <div className="w-full flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  const ch = selectedCardForInspection.chapterNumber;
                  setSelectedCardForInspection(null);
                  onNavigateToQuestions(ch);
                }}
                className="w-full py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-serif font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                Practice Chapter {selectedCardForInspection.chapterNumber} Questions →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
