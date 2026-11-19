import React, { useState, useEffect, useMemo, useRef } from 'react';
import { JollyJesterEvaluation, JollyJesterState, UserSettings } from '../types';
import { evaluateJollyJesterEssay, applyActiveExitPenalty } from '../engines/jesterEvaluator';
import { saveJollyJesterState } from '../database/db';
import { JokerCard } from '../components/JokerCard';
import {
  Skull,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  Save,
  Send
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface JollyJesterModalProps {
  isOpen: boolean;
  onClose: () => void;
  state: JollyJesterState;
  onStateUpdate: (newState: JollyJesterState) => void;
  settings: UserSettings;
  simulateWinPreview?: boolean;
}

export { applyActiveExitPenalty };

export const JollyJesterModal: React.FC<JollyJesterModalProps> = ({
  isOpen,
  onClose,
  state,
  onStateUpdate,
  simulateWinPreview = false
}) => {
  const [hasConfirmedRules, setHasConfirmedRules] = useState(state.hasViewedWarning && state.active);
  const [title, setTitle] = useState(state.lastDraftTitle || '');
  const [essay, setEssay] = useState(state.lastDraftEssay || '');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluation, setEvaluation] = useState<JollyJesterEvaluation | null>(state.evaluationResult || null);
  const [isCelebrationActive, setIsCelebrationActive] = useState(false);
  const [celebrationSeconds, setCelebrationSeconds] = useState(15);
  const celebrationTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Sync local state when modal opens
  useEffect(() => {
    if (isOpen) {
      setTitle(state.lastDraftTitle || '');
      setEssay(state.lastDraftEssay || '');
      setEvaluation(state.evaluationResult || null);
      setHasConfirmedRules(state.active || state.isCompleted);
    }
  }, [isOpen, state.lastDraftTitle, state.lastDraftEssay, state.evaluationResult, state.active, state.isCompleted]);

  // Play Victorian regal fanfare using Web Audio API (graceful fallback when no external audio asset exists or autoplay is blocked)
  const playVictorianFanfare = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();

      const notes = [261.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.22);
        gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.22);
        gain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + idx * 0.22 + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.22 + 1.4);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.22);
        osc.stop(ctx.currentTime + idx * 0.22 + 1.5);
      });
    } catch {
      // Graceful fallback if browser blocks audio playback
    }
  };

  const triggerCelebration = () => {
    setIsCelebrationActive(true);
    setCelebrationSeconds(15);
    try {
      confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
    } catch {
      // ignore confetti errors in headless canvas
    }
    playVictorianFanfare();

    if (celebrationTimerRef.current) {
      clearInterval(celebrationTimerRef.current);
    }
    celebrationTimerRef.current = setInterval(() => {
      setCelebrationSeconds((prev) => {
        if (prev <= 1) {
          if (celebrationTimerRef.current) clearInterval(celebrationTimerRef.current);
          setIsCelebrationActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Trigger QA simulated celebration preview without permanently saving a Joker win to real user progress
  useEffect(() => {
    if (isOpen && simulateWinPreview) {
      triggerCelebration();
    }
    return () => {
      if (celebrationTimerRef.current) {
        clearInterval(celebrationTimerRef.current);
      }
    };
  }, [isOpen, simulateWinPreview]);

  // Interruption penalty detection on browser refresh/close:
  // If user exits while challenge is actively running (active === true and not completed), deduct 2 attempts!
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (state.active && !state.isCompleted) {
        const penalized = applyActiveExitPenalty({
          ...state,
          lastDraftTitle: title,
          lastDraftEssay: essay
        });
        saveJollyJesterState(penalized);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [state, title, essay]);

  // Handle clicking "Exit" inside the active challenge modal:
  // Consumes 2 attempts if the challenge was active and not yet completed.
  const handleExitActiveChallenge = async () => {
    if (state.active && !state.isCompleted) {
      const penalized = applyActiveExitPenalty({
        ...state,
        lastDraftTitle: title,
        lastDraftEssay: essay
      });
      onStateUpdate(penalized);
      await saveJollyJesterState(penalized);
    }
    setHasConfirmedRules(false);
    onClose();
  };

  // Live Chapter Coverage calculation
  const liveCoverage = useMemo(() => {
    if (!essay.trim()) return [];
    const res = evaluateJollyJesterEssay(title, essay);
    return res.chaptersCoverage;
  }, [title, essay]);

  const wordCount = useMemo(() => {
    return essay.trim() ? essay.trim().split(/\s+/).length : 0;
  }, [essay]);

  if (!isOpen) return null;

  // 15-Second Celebration Modal
  if (isCelebrationActive) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4 text-center select-none">
        <div className="max-w-lg w-full space-y-6 flex flex-col items-center">
          <div className="transition-transform duration-500">
            <JokerCard size="lg" isCelebrating={true} />
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs text-amber-500 tracking-widest uppercase">
              Grand Scholarly Triumph
            </span>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-amber-200">
              THE JOKER IS UNLOCKED!
            </h1>
            <p className="text-xs sm:text-sm font-serif text-zinc-300 max-w-md mx-auto leading-relaxed">
              Thou hast proven flawless mastery over all twenty grammar curriculum chapters. The Court of VESTA bestows upon thee the sinister 53rd Sovereign Card.
            </p>
          </div>

          <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-lg text-xs font-mono text-zinc-400 tabular-nums">
            Celebration concluding in {celebrationSeconds} seconds...
          </div>

          <button
            type="button"
            onClick={() => {
              if (celebrationTimerRef.current) clearInterval(celebrationTimerRef.current);
              setIsCelebrationActive(false);
              if (simulateWinPreview) {
                onClose();
              }
            }}
            className="px-6 py-2 bg-amber-600 hover:bg-amber-500 text-black font-serif font-bold text-xs rounded-lg uppercase tracking-wider transition-colors shadow-lg"
          >
            Enter Court & Close Celebration
          </button>
        </div>
      </div>
    );
  }

  // Mandatory Bilingual Warning Screen (Always English + Persian independently of app language setting!)
  if (!hasConfirmedRules && !state.isCompleted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 select-none">
        <div className="max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border-2 border-amber-700/80 bg-zinc-950 p-6 sm:p-8 space-y-6 shadow-2xl">
          {/* Header */}
          <div className="border-b border-zinc-800 pb-4 text-center space-y-2">
            <div className="w-12 h-12 mx-auto rounded-full border border-amber-600/80 bg-amber-950/40 flex items-center justify-center">
              <Skull className="w-6 h-6 text-amber-400" />
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-wider text-amber-200 uppercase">
              JOLLY JESTER — Rules of Engagement
            </h2>
            <p className="font-persian text-sm text-zinc-400" dir="rtl">
              قوانین و آیین‌نامه چالش نهایی جوکر شادمان
            </p>
          </div>

          {/* Bilingual Rules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
            {/* English Rules */}
            <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-2 font-serif text-zinc-300">
              <h4 className="font-display font-bold text-white uppercase text-[11px] tracking-wider">
                English Instructions
              </h4>
              <ul className="list-disc list-inside space-y-1.5 text-zinc-300">
                <li>You must compose an original essay on any topic you choose.</li>
                <li>The title and essay content must be meaningfully related.</li>
                <li>Your essay must naturally demonstrate structures from <strong>ALL 20 grammar chapters</strong>.</li>
                <li>You are granted <strong>3 total attempts</strong> (Remaining: {state.attemptsRemaining} / 3).</li>
                <li>Exiting or abandoning an active challenge after starting will deduct <strong>2 attempts</strong>!</li>
                <li>Unlocks the 53rd sovereign card: <strong>The Joker</strong>.</li>
              </ul>
            </div>

            {/* Persian Rules */}
            <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-2 font-persian text-zinc-300 text-right" dir="rtl">
              <h4 className="font-display font-bold text-amber-300 uppercase text-[11px] tracking-wider text-left" dir="ltr">
                دستورالعمل فارسی
              </h4>
              <ul className="list-disc list-inside space-y-1.5 text-zinc-300">
                <li>شما باید مقاله‌ای انگلیسی با موضوع انتخابی خود بنگارید.</li>
                <li>عنوان و متن مقاله باید ارتباطی منطقی و محتوایی داشته باشند.</li>
                <li>مقاله شما باید ساختارهای دستوری <strong>تمامی ۲۰ فصل</strong> را دربرگیرد.</li>
                <li>شما تنها <strong>۳ فرصت</strong> برای گذراندن این چالش در اختیار دارید.</li>
                <li>خروج یا بستن برنامه پس از شروع آزمون فعال، باعث کسر <strong>۲ فرصت</strong> خواهد شد!</li>
                <li>پیروزی در چالش، کارت افسانه‌ای پنجاه‌وسوم یعنی <strong>جوکر</strong> را آزاد می‌سازد.</li>
              </ul>
            </div>
          </div>

          {/* Warning Banner */}
          <div className="p-3.5 rounded-xl border border-rose-800/80 bg-rose-950/30 flex items-start gap-3 text-xs text-rose-300">
            <ShieldAlert className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
            <div>
              <strong className="text-white block font-display">Active Challenge Interruption Penalty</strong>
              Once you press "I Accept the Rules · Enter Challenge", the session is active. If you exit or close the application before submitting, 2 attempts will be consumed and only 1 attempt will remain.
            </div>
          </div>

          {/* Confirmation Controls */}
          <div className="flex items-center justify-between gap-4 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-zinc-800 text-xs font-serif text-zinc-400 hover:text-white"
            >
              Return Later (No Penalty)
            </button>
            <button
              type="button"
              disabled={state.attemptsRemaining <= 0}
              onClick={async () => {
                setHasConfirmedRules(true);
                const updated: JollyJesterState = {
                  ...state,
                  hasViewedWarning: true,
                  active: true
                };
                onStateUpdate(updated);
                await saveJollyJesterState(updated);
              }}
              className="px-6 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-500 disabled:opacity-40 text-black font-serif font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
            >
              I Accept the Rules · Enter Challenge
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Active Writing & Submission Frame
  const handleSaveDraft = async () => {
    const updated: JollyJesterState = {
      ...state,
      lastDraftTitle: title,
      lastDraftEssay: essay
    };
    onStateUpdate(updated);
    await saveJollyJesterState(updated);
  };

  const handleChallengeSubmit = async () => {
    if (!title.trim() || !essay.trim() || state.attemptsRemaining <= 0) return;
    setIsEvaluating(true);

    const result = evaluateJollyJesterEssay(title, essay);
    setEvaluation(result);

    let updatedAttempts = state.attemptsRemaining;
    let isCompleted = state.isCompleted;

    if (result.passed) {
      isCompleted = true;
      updatedAttempts = state.attemptsRemaining;
      triggerCelebration();
    } else {
      updatedAttempts = Math.max(0, state.attemptsRemaining - 1);
    }

    const updatedState: JollyJesterState = {
      ...state,
      active: !result.passed && updatedAttempts > 0,
      attemptsRemaining: updatedAttempts,
      isCompleted,
      completedAt: isCompleted ? Date.now() : undefined,
      lastDraftTitle: title,
      lastDraftEssay: essay,
      evaluationResult: result
    };

    onStateUpdate(updatedState);
    await saveJollyJesterState(updatedState);
    setIsEvaluating(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-6 select-none">
      <div className="max-w-4xl w-full h-[92vh] rounded-2xl border border-zinc-700 bg-zinc-950 p-4 sm:p-6 flex flex-col space-y-4 shadow-2xl overflow-hidden">
        {/* Header Bar */}
        <div className="border-b border-zinc-800 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skull className="w-5 h-5 text-amber-500" />
            <div>
              <h2 className="font-display font-bold text-base sm:text-lg text-white">
                JOLLY JESTER Court
              </h2>
              <span className="text-xs font-mono text-zinc-400">
                The 20-Chapter Sovereign Essay Challenge
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Attempts Remaining */}
            <div className="flex items-center gap-1.5 px-3 py-1 bg-zinc-900 border border-zinc-700/80 rounded font-mono text-xs tabular-nums">
              <span className="text-zinc-500">Attempts:</span>
              <span className={`font-bold ${state.attemptsRemaining > 1 ? 'text-amber-400' : 'text-rose-500'}`}>
                {state.attemptsRemaining} / 3
              </span>
            </div>

            <button
              type="button"
              onClick={handleExitActiveChallenge}
              className="text-xs font-mono text-zinc-400 hover:text-white px-2.5 py-1 rounded border border-zinc-800"
              title={state.active && !state.isCompleted ? 'Exiting an active challenge deducts 2 attempts' : 'Close'}
            >
              {state.active && !state.isCompleted ? 'Exit (-2 Attempts)' : 'Close'}
            </button>
          </div>
        </div>

        {/* Writing Editor & Live 20-Chapter Checklist Split */}
        <div className="flex-1 flex flex-col md:flex-row gap-4 overflow-hidden">
          {/* Left: Title & Essay Input */}
          <div className="flex-1 flex flex-col space-y-3 overflow-hidden">
            {/* Title field */}
            <div>
              <label htmlFor="essay-title" className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                Essay Subject & Title
              </label>
              <input
                id="essay-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. On the Evolution of Grammar and Victorian Scholarship"
                className="w-full mt-1 bg-zinc-900 border border-zinc-700/80 rounded-lg p-2.5 text-xs sm:text-sm font-serif text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-400"
              />
            </div>

            {/* Long-form Essay Area */}
            <div className="flex-1 flex flex-col min-h-0">
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 pb-1">
                <label htmlFor="essay-body">Composition (Demonstrate all 20 Chapters)</label>
                <span className={`tabular-nums ${wordCount >= 200 ? 'text-emerald-400' : 'text-zinc-500'}`}>
                  {wordCount} words (min 200)
                </span>
              </div>
              <textarea
                id="essay-body"
                value={essay}
                onChange={(e) => setEssay(e.target.value)}
                placeholder="Compose your long-form scholarly essay here. Ensure you incorporate clauses, modals, tenses, passives, conditionals, and inversions..."
                className="flex-1 w-full bg-zinc-900/70 border border-zinc-700/80 rounded-lg p-3 text-xs sm:text-sm font-serif text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-400 resize-none leading-relaxed"
              />
            </div>

            {/* Actions Bar */}
            <div className="flex items-center justify-between pt-1">
              <button
                type="button"
                onClick={handleSaveDraft}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-zinc-800 bg-zinc-900 text-xs font-serif text-zinc-300 hover:text-white transition-colors"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Draft</span>
              </button>

              <button
                type="button"
                onClick={handleChallengeSubmit}
                disabled={isEvaluating || wordCount < 100 || state.attemptsRemaining <= 0}
                className="flex items-center gap-1.5 px-6 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 disabled:opacity-40 text-black font-serif font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isEvaluating ? 'Evaluating...' : 'Submit to Jester'}</span>
              </button>
            </div>
          </div>

          {/* Right: Live 20-Chapter Grammar Coverage Checklist */}
          <div className="w-full md:w-80 shrink-0 border border-zinc-800 rounded-xl bg-zinc-900/30 p-3 flex flex-col overflow-hidden">
            <div className="border-b border-zinc-800 pb-2 flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-300 font-semibold uppercase">Curriculum Coverage</span>
              <span className="text-amber-400 tabular-nums">
                {liveCoverage.filter(c => c.passed).length} / 20
              </span>
            </div>

            <div className="flex-1 overflow-y-auto space-y-1.5 divide-y divide-zinc-900/60 pt-2 text-[11px] font-serif pr-1">
              {liveCoverage.length === 0 ? (
                <div className="p-4 text-center text-zinc-500 italic">
                  Begin typing your composition to inspect live grammatical evidence across all twenty chapters.
                </div>
              ) : (
                liveCoverage.map((item) => (
                  <div key={item.chapterNumber} className="pt-1.5 flex items-start gap-2">
                    {item.passed ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-3.5 h-3.5 text-zinc-600 shrink-0 mt-0.5" />
                    )}
                    <div className="leading-tight">
                      <span className={item.passed ? 'text-zinc-200 font-medium' : 'text-zinc-500'}>
                        Ch. {item.chapterNumber}: {item.chapterTitle}
                      </span>
                      {item.passed && (
                        <p className="text-[10px] font-mono text-zinc-400 truncate max-w-[200px]">
                          "{item.evidence[0]}"
                        </p>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Evaluation Output Notice */}
        {evaluation && (
          <div className={`p-3 rounded-lg border text-xs font-serif ${
            evaluation.passed
              ? 'bg-emerald-950/40 border-emerald-700/80 text-emerald-200'
              : 'bg-zinc-900 border-zinc-700 text-zinc-300'
          }`}>
            <div className="flex items-center justify-between">
              <span className="font-bold">{evaluation.passed ? '✓ PASSED' : '✗ REVISION REQUIRED'}</span>
              <span className="font-mono text-[11px] tabular-nums">{evaluation.passedChaptersCount} of 20 Chapters Satisfied</span>
            </div>
            <p className="mt-1 leading-relaxed">{evaluation.generalFeedback}</p>
          </div>
        )}
      </div>
    </div>
  );
};
