import React, { useState, useMemo, useRef, useEffect } from 'react';
import { GRAMMAR_CHAPTERS } from '../data/grammarChapters';
import { GrammarChapter, UserSettings } from '../types';
import { ClickToSpeakWrapper } from '../components/ClickToSpeakWrapper';
import {
  Search,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  AlertCircle,
  CheckCircle2,
  XCircle,
  ArrowRight
} from 'lucide-react';

interface GrammarPanelProps {
  settings: UserSettings;
  selectedChapterNumber: number;
  onSelectChapter: (num: number) => void;
  onNavigateToQuestions: (chapterNum: number) => void;
  initialMobileOpen?: boolean;
  onMobileLessonOpenChange?: (open: boolean) => void;
}

export const GrammarPanel: React.FC<GrammarPanelProps> = ({
  settings,
  selectedChapterNumber,
  onSelectChapter,
  onNavigateToQuestions,
  initialMobileOpen = false,
  onMobileLessonOpenChange
}) => {
  const isEnFa = settings.language === 'en-fa';
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileLessonOpen, setMobileLessonOpen] = useState<boolean>(initialMobileOpen);
  const chapterListRef = useRef<HTMLDivElement>(null);
  const lessonContentRef = useRef<HTMLDivElement>(null);
  const savedListScrollTopRef = useRef<number>(0);

  // Search filter
  const filteredChapters = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return GRAMMAR_CHAPTERS;

    return GRAMMAR_CHAPTERS.filter(ch =>
      ch.title.toLowerCase().includes(q) ||
      ch.titlePersian.includes(q) ||
      ch.summary.toLowerCase().includes(q) ||
      ch.summaryPersian.includes(q) ||
      ch.keyRule.toLowerCase().includes(q) ||
      ch.sections.some(s =>
        s.title.toLowerCase().includes(q) ||
        s.content.toLowerCase().includes(q) ||
        (s.contentPersian && s.contentPersian.includes(q))
      )
    );
  }, [searchQuery]);

  const activeChapter: GrammarChapter = useMemo(() => {
    return GRAMMAR_CHAPTERS.find(c => c.chapterNumber === selectedChapterNumber) || GRAMMAR_CHAPTERS[0];
  }, [selectedChapterNumber]);

  // Handle browser/device Back navigation on mobile when lesson is open
  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      if (mobileLessonOpen && (!e.state || !e.state.vestaGrammarLesson)) {
        setMobileLessonOpen(false);
        onMobileLessonOpenChange?.(false);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [mobileLessonOpen]);

  // Restore chapter list scroll position when returning from mobile lesson view
  useEffect(() => {
    if (!mobileLessonOpen && chapterListRef.current) {
      chapterListRef.current.scrollTop = savedListScrollTopRef.current;
    }
    if (mobileLessonOpen && lessonContentRef.current) {
      lessonContentRef.current.scrollTop = 0;
    }
  }, [mobileLessonOpen, selectedChapterNumber]);

  const handleChapterClick = (chapterNumber: number) => {
    if (chapterListRef.current) {
      savedListScrollTopRef.current = chapterListRef.current.scrollTop;
    }
    onSelectChapter(chapterNumber);
    setMobileLessonOpen(true);
    onMobileLessonOpenChange?.(true);

    // Push browser history state so device/browser Back button returns to chapter list
    try {
      if (typeof window !== 'undefined' && window.innerWidth < 768) {
        window.history.pushState({ vestaGrammarLesson: true, chapterNumber }, '');
      }
    } catch {
      // ignore history errors in sandboxed iframes
    }
  };

  const handleMobileBack = () => {
    setMobileLessonOpen(false);
    onMobileLessonOpenChange?.(false);
    try {
      if (typeof window !== 'undefined' && window.history.state?.vestaGrammarLesson) {
        window.history.back();
      }
    } catch {
      // ignore
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-zinc-950 text-zinc-100">
      {/* Search Header (hidden on mobile when reading a full lesson for maximum screen space) */}
      <div className={`p-3 border-b border-zinc-800 bg-zinc-900/50 items-center gap-2 ${
        mobileLessonOpen ? 'hidden md:flex' : 'flex'
      }`}>
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <label htmlFor="grammar-search" className="sr-only">Search grammar chapters</label>
          <input
            id="grammar-search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search 20 grammar chapters, rules, formulas, or Persian topics..."
            className="w-full bg-zinc-950/80 border border-zinc-700/80 rounded-lg pl-9 pr-7 py-1.5 text-xs font-serif text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Main Split Layout: Chapter Navigation (Left on Desktop, Master on Mobile) & Reading View (Right on Desktop, Detail on Mobile) */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Left: Chapter Sidebar */}
        <div
          ref={chapterListRef}
          className={`w-full md:w-72 lg:w-80 shrink-0 border-r border-zinc-800/80 flex-col overflow-y-auto bg-zinc-950/60 divide-y divide-zinc-900/80 ${
            mobileLessonOpen ? 'hidden md:flex' : 'flex'
          }`}
        >
          <div className="p-3 bg-zinc-900/30 text-[11px] font-mono text-zinc-500 uppercase tracking-wider flex justify-between">
            <span>Curriculum Chapters</span>
            <span>20 Chapters</span>
          </div>

          {filteredChapters.map((ch) => {
            const isSelected = ch.chapterNumber === activeChapter.chapterNumber;
            return (
              <button
                key={ch.id}
                type="button"
                onClick={() => handleChapterClick(ch.chapterNumber)}
                className={`w-full text-left p-3.5 transition-colors flex items-start justify-between group cursor-pointer ${
                  isSelected
                    ? 'bg-zinc-900/90 text-white font-semibold'
                    : 'hover:bg-zinc-900/40 text-zinc-300'
                }`}
              >
                <div className="space-y-1 pr-2">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-500">
                    <span className="uppercase tracking-wider text-zinc-400">
                      Ch. {ch.chapterNumber}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{ch.category}</span>
                  </div>
                  <h4 className="font-serif font-medium text-sm leading-snug group-hover:text-white">
                    {ch.title}
                  </h4>
                  {isEnFa && ch.titlePersian && (
                    <p className="text-xs font-persian text-zinc-400 text-right" dir="rtl">
                      {ch.titlePersian}
                    </p>
                  )}
                </div>
                <ChevronRight className={`w-4 h-4 shrink-0 mt-2 text-zinc-600 group-hover:text-zinc-300 transition-transform ${
                  isSelected ? 'md:rotate-90 text-white' : ''
                }`} />
              </button>
            );
          })}
        </div>

        {/* Right: Rich Pedagogical Reading Frame */}
        <div
          ref={lessonContentRef}
          className={`flex-1 flex-col overflow-y-auto p-4 sm:p-8 bg-zinc-950 ${
            mobileLessonOpen ? 'flex' : 'hidden md:flex'
          }`}
        >
          <div className="max-w-3xl mx-auto w-full space-y-6 sm:space-y-8 pb-6">
            {/* Mobile Back Button Header */}
            <div className="md:hidden flex items-center justify-between border-b border-zinc-800 pb-3">
              <button
                type="button"
                onClick={handleMobileBack}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-700/80 bg-zinc-900/80 text-xs font-serif text-zinc-200 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back to Chapters</span>
              </button>
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                Ch. {activeChapter.chapterNumber} of 20
              </span>
            </div>

            {/* Chapter Header */}
            <div className="border-b border-zinc-800 pb-5 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono tracking-widest uppercase text-zinc-400">
                  Chapter {activeChapter.chapterNumber} · {activeChapter.category}
                </span>
                <button
                  type="button"
                  onClick={() => onNavigateToQuestions(activeChapter.chapterNumber)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 rounded-md text-xs font-serif text-white transition-colors"
                >
                  <span>Practice 20 Questions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {activeChapter.title}
              </h1>

              {isEnFa && (
                <p className="text-base font-persian text-zinc-400 text-right leading-relaxed" dir="rtl">
                  {activeChapter.titlePersian}
                </p>
              )}
            </div>

            {/* Introduction & Educational Purpose */}
            <div className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/30 space-y-3">
              <h3 className="font-display text-xs uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-zinc-400" />
                Foundational Concept
              </h3>
              <div className="font-serif text-sm sm:text-base text-zinc-200 leading-relaxed">
                <ClickToSpeakWrapper text={activeChapter.introduction} settings={settings} />
              </div>
              {isEnFa && (
                <p className="font-persian text-xs sm:text-sm text-zinc-400 pt-2 border-t border-zinc-800/60 leading-relaxed" dir="rtl">
                  {activeChapter.introductionPersian}
                </p>
              )}
            </div>

            {/* Why This Grammar Exists & When To Use It */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-zinc-850 bg-zinc-900/20 space-y-2">
                <h4 className="font-display text-xs uppercase tracking-wider text-amber-500 dark:text-amber-200/80">
                  Why It Exists
                </h4>
                <div className="font-serif text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  <ClickToSpeakWrapper text={activeChapter.whyItExists} settings={settings} />
                </div>
                {isEnFa && (
                  <p className="font-persian text-xs text-zinc-400 text-right pt-2 border-t border-zinc-900" dir="rtl">
                    {activeChapter.whyItExistsPersian}
                  </p>
                )}
              </div>

              <div className="p-4 rounded-xl border border-zinc-850 bg-zinc-900/20 space-y-2">
                <h4 className="font-display text-xs uppercase tracking-wider text-zinc-300">
                  When To Use
                </h4>
                <div className="font-serif text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  <ClickToSpeakWrapper text={activeChapter.whenToUse} settings={settings} />
                </div>
                {isEnFa && (
                  <p className="font-persian text-xs text-zinc-400 text-right pt-2 border-t border-zinc-900" dir="rtl">
                    {activeChapter.whenToUsePersian}
                  </p>
                )}
              </div>
            </div>

            {/* Core Golden Rule Box */}
            <div className="p-4 rounded-xl border border-zinc-700/80 bg-zinc-900/50 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white">
                <AlertCircle className="w-4 h-4 text-zinc-400" />
                Essential Governing Rule
              </div>
              <div className="font-serif text-sm text-zinc-100 font-medium">
                <ClickToSpeakWrapper text={activeChapter.keyRule} settings={settings} />
              </div>
              {isEnFa && (
                <p className="font-persian text-xs text-zinc-300 text-right pt-1" dir="rtl">
                  {activeChapter.keyRulePersian}
                </p>
              )}
            </div>

            {/* Detailed Content Sections */}
            <div className="space-y-6">
              <h3 className="font-display text-xs uppercase tracking-widest text-zinc-500">
                Detailed Syntactical Breakdown
              </h3>

              {activeChapter.sections.map((section) => (
                <div key={section.id} className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 space-y-4">
                  <div className="border-b border-zinc-800/80 pb-2.5">
                    <h4 className="font-serif font-semibold text-base text-zinc-100">
                      {section.title}
                    </h4>
                    {isEnFa && section.titlePersian && (
                      <p className="font-persian text-xs text-zinc-400 text-right" dir="rtl">
                        {section.titlePersian}
                      </p>
                    )}
                  </div>

                  <div className="font-serif text-sm text-zinc-300 leading-relaxed">
                    <ClickToSpeakWrapper text={section.content} settings={settings} />
                  </div>
                  {isEnFa && section.contentPersian && (
                    <p className="font-persian text-xs text-zinc-400 leading-relaxed text-right" dir="rtl">
                      {section.contentPersian}
                    </p>
                  )}

                  {/* Formula Box */}
                  {section.formula && (
                    <div className="p-2.5 rounded bg-zinc-950/80 border border-zinc-800 font-mono text-xs text-zinc-300 overflow-x-auto">
                      <span className="text-zinc-500 mr-2">Structure:</span>
                      <span>{section.formula}</span>
                    </div>
                  )}

                  {/* Examples */}
                  {section.examples && section.examples.length > 0 && (
                    <div className="space-y-2.5 pt-2">
                      <h5 className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                        Sentence Analysis
                      </h5>
                      {section.examples.map((ex, exIdx) => (
                        <div key={exIdx} className="p-3 rounded-lg bg-zinc-950/50 border border-zinc-850 space-y-1.5">
                          <div className="font-serif text-sm text-zinc-100 font-medium">
                            <ClickToSpeakWrapper text={ex.sentence} settings={settings} />
                          </div>
                          {isEnFa && ex.translation && (
                            <p className="font-persian text-xs text-zinc-400 text-right" dir="rtl">
                              {ex.translation}
                            </p>
                          )}
                          <div className="text-[11px] font-serif text-zinc-400 italic pt-1 border-t border-zinc-900">
                            {ex.explanation}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Common Mistakes Side-by-Side */}
                  {section.commonMistakes && section.commonMistakes.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <h5 className="font-mono text-[11px] uppercase tracking-wider text-rose-500">
                        Common Mistake & Correction
                      </h5>
                      {section.commonMistakes.map((m, mIdx) => (
                        <div key={mIdx} className="p-3 rounded-lg bg-zinc-950/70 border border-zinc-800 space-y-2 text-xs">
                          <div className="flex items-start gap-2 text-rose-500">
                            <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
                            <span className="font-mono line-through">{m.incorrect}</span>
                          </div>
                          <div className="flex items-start gap-2 text-emerald-500">
                            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                            <span className="font-mono font-medium">{m.correct}</span>
                          </div>
                          <p className="font-serif text-zinc-400 italic pl-6">
                            {m.reason}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Practical Everyday Usage */}
            <div className="p-4 rounded-xl border border-zinc-850 bg-zinc-900/20 space-y-2">
              <h4 className="font-display text-xs uppercase tracking-wider text-zinc-400">
                Practical Application
              </h4>
              <div className="font-serif text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <ClickToSpeakWrapper text={activeChapter.practicalUsage} settings={settings} />
              </div>
              {isEnFa && (
                <p className="font-persian text-xs text-zinc-400 text-right pt-2 border-t border-zinc-900" dir="rtl">
                  {activeChapter.practicalUsagePersian}
                </p>
              )}
            </div>

            {/* Bottom Action: Go to 20 Questions Assessment */}
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-serif font-semibold text-base text-white">
                  Ready to test Chapter {activeChapter.chapterNumber}?
                </h4>
                <p className="text-xs text-zinc-400 font-serif">
                  Solve 20 typing-based questions to earn progress toward the 52 playing cards.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigateToQuestions(activeChapter.chapterNumber)}
                className="px-5 py-2.5 bg-zinc-100 hover:bg-white text-zinc-950 font-serif font-medium text-xs rounded-lg transition-colors whitespace-nowrap shadow"
              >
                Start Chapter Questions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
