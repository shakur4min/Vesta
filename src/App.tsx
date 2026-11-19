import React, { useState, useEffect, useMemo } from 'react';
import {
  ActivityDay,
  JollyJesterState,
  NavPanel,
  PlayingCardData,
  QuestionAttemptRecord,
  UserSettings
} from './types';
import {
  clearAllUserData,
  defaultJesterState,
  defaultSettings,
  loadActivityHistory,
  loadAllAttempts,
  loadEarnedCardIds,
  loadInitialInstallDate,
  loadJollyJesterState,
  loadUserSettings,
  recordActiveMinutes,
  saveUserSettings
} from './database/db';
import { QA_OVERRIDE, isQAOverrideActive } from './config/qaOverride';
import { getAllCards } from './engines/cardEngine';
import { GRAMMAR_QUESTIONS } from './data/grammarQuestions';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { QuestionsPanel } from './panels/QuestionsPanel';
import { GrammarPanel } from './panels/GrammarPanel';
import { DashboardPanel } from './panels/DashboardPanel';
import { SettingsPanel } from './panels/SettingsPanel';
import { JollyJesterModal } from './panels/JollyJesterModal';

type PersistedPanelProgress = {
  lastStudyPanel: 'questions' | 'grammar';
  grammarChapter: number;
  questionsChapter: number;
  questionIndex: number;
  grammarLessonOpen: boolean;
};

const PANEL_PROGRESS_KEY = 'vesta_panel_progress_v1';

function loadPanelProgress(): PersistedPanelProgress {
  const fallback: PersistedPanelProgress = {
    lastStudyPanel: 'grammar',
    grammarChapter: 1,
    questionsChapter: 1,
    questionIndex: 0,
    grammarLessonOpen: false
  };
  try {
    const raw = localStorage.getItem(PANEL_PROGRESS_KEY);
    if (!raw) return fallback;
    const saved = JSON.parse(raw) as Partial<PersistedPanelProgress>;
    return {
      lastStudyPanel: saved.lastStudyPanel === 'questions' ? 'questions' : 'grammar',
      grammarChapter: Number.isInteger(saved.grammarChapter) && saved.grammarChapter! >= 1 && saved.grammarChapter! <= 20 ? saved.grammarChapter! : 1,
      questionsChapter: Number.isInteger(saved.questionsChapter) && saved.questionsChapter! >= 1 && saved.questionsChapter! <= 20 ? saved.questionsChapter! : 1,
      questionIndex: Number.isInteger(saved.questionIndex) && saved.questionIndex! >= 0 && saved.questionIndex! < 20 ? saved.questionIndex! : 0,
      grammarLessonOpen: Boolean(saved.grammarLessonOpen)
    };
  } catch {
    return fallback;
  }
}

export default function App() {
  const qaActive = isQAOverrideActive();

  const [savedPanelProgress] = useState<PersistedPanelProgress>(loadPanelProgress);
  const [activePanel, setActivePanel] = useState<NavPanel>(() => {
    if (qaActive) {
      if (QA_OVERRIDE.question !== null) return 'questions';
      if (QA_OVERRIDE.chapter !== null) return 'grammar';
    }
    return savedPanelProgress.lastStudyPanel;
  });

  const [settings, setSettings] = useState<UserSettings>(defaultSettings);
  const [attemptsMap, setAttemptsMap] = useState<Record<string, QuestionAttemptRecord>>({});
  const [earnedCardIds, setEarnedCardIds] = useState<string[]>([]);
  const [activityHistory, setActivityHistory] = useState<ActivityDay[]>([]);
  const [jollyJesterState, setJollyJesterState] = useState<JollyJesterState>(defaultJesterState);
  const [isJollyJesterModalOpen, setIsJollyJesterModalOpen] = useState<boolean>(
    qaActive && (QA_OVERRIDE.openJollyJester || QA_OVERRIDE.simulateJokerWin)
  );
  const [installDate, setInstallDate] = useState<string>('');
  const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);

  // Cross-panel persistent sub-states
  const [selectedGrammarChapter, setSelectedGrammarChapter] = useState<number>(() => {
    if (qaActive && QA_OVERRIDE.chapter && QA_OVERRIDE.chapter >= 1 && QA_OVERRIDE.chapter <= 20) {
      return QA_OVERRIDE.chapter;
    }
    return savedPanelProgress.grammarChapter;
  });
  const [selectedQuestionsChapter, setSelectedQuestionsChapter] = useState<number>(() => savedPanelProgress.questionsChapter);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(() => qaActive && QA_OVERRIDE.question ? QA_OVERRIDE.question - 1 : savedPanelProgress.questionIndex);
  const [grammarLessonOpen, setGrammarLessonOpen] = useState<boolean>(() => savedPanelProgress.grammarLessonOpen);

  useEffect(() => {
    if (qaActive) return;
    try {
      const lastStudyPanel = activePanel === 'questions' || activePanel === 'grammar'
        ? activePanel
        : savedPanelProgress.lastStudyPanel;
      localStorage.setItem(PANEL_PROGRESS_KEY, JSON.stringify({
        lastStudyPanel,
        grammarChapter: selectedGrammarChapter,
        questionsChapter: selectedQuestionsChapter,
        questionIndex: currentQuestionIndex,
        grammarLessonOpen
      } satisfies PersistedPanelProgress));
    } catch (error) {
      console.warn('Could not persist panel progress:', error);
    }
  }, [activePanel, selectedGrammarChapter, selectedQuestionsChapter, currentQuestionIndex, grammarLessonOpen, qaActive, savedPanelProgress.lastStudyPanel]);

  // Resolve optional QA card preview
  const qaInspectedCard: PlayingCardData | null = useMemo(() => {
    if (!qaActive || QA_OVERRIDE.card === null) return null;
    const deck = getAllCards();
    if (typeof QA_OVERRIDE.card === 'number') {
      return deck[QA_OVERRIDE.card - 1] || null;
    }
    return deck.find(c => c.id === QA_OVERRIDE.card || c.name.toLowerCase() === String(QA_OVERRIDE.card).toLowerCase()) || null;
  }, [qaActive]);

  // Initial Data Hydration (Uses isolated QA database when QA_OVERRIDE is active in development)
  useEffect(() => {
    async function hydrate() {
      if (qaActive && QA_OVERRIDE.resetTestProgress) {
        await clearAllUserData();
      }

      const savedSettings = await loadUserSettings();
      setSettings(savedSettings);

      // Apply initial theme & font-size to DOM
      if (savedSettings.theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      document.documentElement.setAttribute('data-font-size', savedSettings.fontSize);

      const instDate = await loadInitialInstallDate();
      setInstallDate(instDate);

      let attempts = await loadAllAttempts();
      let cards = await loadEarnedCardIds();
      let jester = await loadJollyJesterState();

      // Apply non-destructive QA overrides in the isolated QA namespace
      if (qaActive) {
        if (QA_OVERRIDE.unlockAllQuestions || QA_OVERRIDE.unlockAllChapters) {
          const allSynthetic: Record<string, QuestionAttemptRecord> = {};
          for (const q of GRAMMAR_QUESTIONS) {
            allSynthetic[q.id] = {
              questionId: q.id,
              chapterId: q.chapterId,
              firstAnswer: q.acceptedAnswers[0],
              firstAttemptCorrect: true,
              latestAnswer: q.acceptedAnswers[0],
              mastered: true,
              attemptsCount: 1,
              timestamp: Date.now(),
              feedbackGiven: q.explanation
            };
          }
          attempts = { ...allSynthetic, ...attempts };
        }

        if (QA_OVERRIDE.unlockAllCards || QA_OVERRIDE.unlockJollyJester) {
          cards = getAllCards().map(c => c.id);
        }

        if (QA_OVERRIDE.unlockJollyJester || QA_OVERRIDE.openJollyJester) {
          jester = { ...jester, unlocked: true };
        }
      }

      setAttemptsMap(attempts);
      setEarnedCardIds(cards);
      setJollyJesterState(jester);

      const activity = await loadActivityHistory();
      setActivityHistory(activity);
    }

    hydrate();
  }, [qaActive]);

  // Online / Offline state listener
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Active foreground study time tracker (accumulates 1 minute per 60s active in window)
  useEffect(() => {
    const timer = setInterval(() => {
      if (document.visibilityState === 'visible') {
        const todayStr = new Date().toISOString().split('T')[0];
        recordActiveMinutes(todayStr, 1);
        setActivityHistory(prev => {
          const next = [...prev];
          const found = next.find(d => d.date === todayStr);
          if (found) {
            found.minutes += 1;
          } else {
            next.push({ date: todayStr, minutes: 1, questionsAnswered: 0 });
          }
          return next;
        });
      }
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const handleUpdateSettings = async (newSettings: UserSettings) => {
    setSettings(newSettings);
    await saveUserSettings(newSettings);
  };

  const handleAttemptSaved = (record: QuestionAttemptRecord) => {
    setAttemptsMap(prev => ({
      ...prev,
      [record.questionId]: record
    }));
  };

  const handleCardEarned = (cardId: string) => {
    if (!earnedCardIds.includes(cardId)) {
      setEarnedCardIds(prev => [...prev, cardId]);
    }
  };

  const handleNavigateToQuestions = (chapterNum: number) => {
    setSelectedQuestionsChapter(chapterNum);
    setCurrentQuestionIndex(0);
    setActivePanel('questions');
  };

  const handleDataReset = () => {
    setAttemptsMap({});
    setEarnedCardIds([]);
    setJollyJesterState(defaultJesterState);
    setActivityHistory([]);
    setSettings(defaultSettings);
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-font-size', 'medium');
  };

  return (
    <div className="vesta-app-shell flex flex-col w-screen overflow-hidden bg-zinc-950 text-zinc-100 font-serif">
      {/* Fixed Victorian Header */}
      <Header activePanel={activePanel} isOnline={isOnline} />

      {/* Primary Navigation Content Viewport */}
      <main className="flex-1 min-h-0 flex flex-col overflow-hidden relative">
        {activePanel === 'questions' && (
          <QuestionsPanel
            settings={settings}
            activeChapterNumber={selectedQuestionsChapter}
            onSelectChapter={(chapter) => {
              setSelectedQuestionsChapter(chapter);
              setCurrentQuestionIndex(0);
            }}
            currentQuestionIndex={currentQuestionIndex}
            onQuestionIndexChange={setCurrentQuestionIndex}
            attemptsMap={attemptsMap}
            onAttemptSaved={handleAttemptSaved}
            earnedCardIds={earnedCardIds}
            onCardEarned={handleCardEarned}
          />
        )}

        {activePanel === 'grammar' && (
          <GrammarPanel
            settings={settings}
            selectedChapterNumber={selectedGrammarChapter}
            onSelectChapter={setSelectedGrammarChapter}
            onNavigateToQuestions={handleNavigateToQuestions}
            initialMobileOpen={qaActive ? QA_OVERRIDE.chapter !== null : grammarLessonOpen}
            onMobileLessonOpenChange={setGrammarLessonOpen}
          />
        )}

        {activePanel === 'dashboard' && (
          <DashboardPanel
            settings={settings}
            attemptsMap={attemptsMap}
            earnedCardIds={earnedCardIds}
            activityHistory={activityHistory}
            jollyJesterState={jollyJesterState}
            onOpenJollyJester={() => setIsJollyJesterModalOpen(true)}
            onNavigateToQuestions={handleNavigateToQuestions}
            installDate={installDate}
            initialInspectedCard={qaInspectedCard}
          />
        )}

        {activePanel === 'settings' && (
          <SettingsPanel
            settings={settings}
            onUpdateSettings={handleUpdateSettings}
            onDataReset={handleDataReset}
          />
        )}
      </main>

      {/* Fixed Victorian Navigation Bar (Questions -> Grammar -> Dashboard -> Settings) */}
      <Navbar
        activePanel={activePanel}
        onSelectPanel={setActivePanel}
        unlockedJoker={jollyJesterState.isCompleted}
      />

      {/* JOLLY JESTER Final Challenge Modal */}
      <JollyJesterModal
        isOpen={isJollyJesterModalOpen}
        onClose={() => setIsJollyJesterModalOpen(false)}
        state={jollyJesterState}
        onStateUpdate={setJollyJesterState}
        settings={settings}
        simulateWinPreview={qaActive && QA_OVERRIDE.simulateJokerWin}
      />
    </div>
  );
}
