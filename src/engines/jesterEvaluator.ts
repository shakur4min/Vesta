/**
 * VESTA JOLLY JESTER Evaluation Engine
 * Offline, deterministic assessment of 20-chapter grammar coverage,
 * title relevance, word count, spelling tolerance, and coherence.
 * Created by Jackdaw
 */

import { JollyJesterEvaluation, JollyJesterState } from '../types';
import { normalizeText } from './validationEngine';

/**
 * Pure helper to compute the 2-attempt exit penalty when abandoning an active Jolly Jester challenge.
 */
export function applyActiveExitPenalty(currentState: JollyJesterState): JollyJesterState {
  if (!currentState.active || currentState.isCompleted) {
    return currentState;
  }
  const remaining = Math.max(0, currentState.attemptsRemaining - 2);
  return {
    ...currentState,
    active: false,
    attemptsRemaining: remaining,
    interruptionLogged: {
      id: `int-${Date.now()}`,
      timestamp: Date.now(),
      penaltyApplied: 2
    }
  };
}

interface ChapterRulePattern {
  chapterNumber: number;
  chapterTitle: string;
  namePersian: string;
  patterns: RegExp[];
  ruleDescription: string;
  ruleDescriptionPersian: string;
}

const CHAPTER_PATTERNS: ChapterRulePattern[] = [
  {
    chapterNumber: 1,
    chapterTitle: 'Present & Past: Simple & Progressive',
    namePersian: 'زمان‌های حال و گذشته: ساده و استمراری',
    patterns: [
      /\b(is|am|are|was|were)\s+([a-z]+ing)\b/i,
      /\b(always|every day|usually|often|yesterday|last (year|month|week|night))\b/i
    ],
    ruleDescription: 'Use of simple present/past or progressive forms with active aspect (e.g. was studying, is developing, works daily).',
    ruleDescriptionPersian: 'استفاده از زمان‌های ساده یا استمراری گذشته/حال همراه با ساختار مناسب.'
  },
  {
    chapterNumber: 2,
    chapterTitle: 'Perfect & Perfect Progressive Tenses',
    namePersian: 'زمان‌های کامل و کامل استمراری',
    patterns: [
      /\b(have|has|had)\s+(been\s+[a-z]+ing|[a-z]+ed|written|seen|gone|done|taken|known|become|dedicated|embraced)\b/i,
      /\b(has|have|had)\s+(already|never|ever|recently|just)\b/i,
      /\b(for\s+\d+|since\s+\w+)/i
    ],
    ruleDescription: 'Use of present/past perfect or perfect progressive (e.g. have studied, has been working, had lived).',
    ruleDescriptionPersian: 'استفاده از ماضی نقلی یا ماضی بعید استمراری.'
  },
  {
    chapterNumber: 3,
    chapterTitle: 'Future Time',
    namePersian: 'زمان آینده',
    patterns: [
      /\b(will|shall)\s+([a-z]+)\b/i,
      /\b(am|is|are)\s+going\s+to\s+([a-z]+)\b/i,
      /\bas\s+soon\s+as\s+[a-z\s]+\s+(arrives|finishes|starts|leaves|rises)/i
    ],
    ruleDescription: 'Future expression using "will", "be going to", or a future temporal adverbial clause.',
    ruleDescriptionPersian: 'بیان آینده با استفاده از will، going to یا بندهای قیدی زمان آینده.'
  },
  {
    chapterNumber: 4,
    chapterTitle: 'Review of Verb Tenses',
    namePersian: 'مرور جامع زمان‌های افعال',
    patterns: [
      /\b(by\s+the\s+time|meanwhile|previously|at\s+that\s+moment|while\s+[a-z]+\s+was)\b/i,
      /\bhad\s+[a-z]+ed\s+before\b/i
    ],
    ruleDescription: 'Demonstration of multiple shifting temporal perspectives within complex sentences.',
    ruleDescriptionPersian: 'پیوند دادن وقایع در بازه‌های زمانی مختلف و توالی زمان‌ها.'
  },
  {
    chapterNumber: 5,
    chapterTitle: 'Subject-Verb Agreement',
    namePersian: 'مطابقت فاعل و فعل',
    patterns: [
      /\b(neither\s+[a-z\s]+\s+nor|either\s+[a-z\s]+\s+or)\b/i,
      /\b(each\s+of|every\s+one\s+of|one\s+of\s+the)\s+[a-z\s]+\s+(is|was|has)\b/i,
      /\b(a\s+number\s+of\s+[a-z]+\s+(are|were|have)|the\s+number\s+of\s+[a-z]+\s+(is|was|has))\b/i
    ],
    ruleDescription: 'Subject-verb agreement involving tricky subjects like "each of", "neither...nor", or collective quantifiers.',
    ruleDescriptionPersian: 'رعایت مطابقت فاعل و فعل با ساختارهای ترکیبی مانند each of یا neither...nor.'
  },
  {
    chapterNumber: 6,
    chapterTitle: 'Nouns & Articles',
    namePersian: 'اسم‌ها و حروف تعریف',
    patterns: [
      /\b(the|a|an)\s+[a-z]+/i,
      /\b(information|knowledge|advice|equipment|furniture|evidence|patience|wisdom|news)\b/i
    ],
    ruleDescription: 'Accurate distinction between definite/indefinite articles and countable/uncountable nouns.',
    ruleDescriptionPersian: 'کاربرد صحیح حروف تعریف a/an/the و تمایز اسامی شمارش‌پذیر و شمارش‌ناپذیر.'
  },
  {
    chapterNumber: 7,
    chapterTitle: 'Pronouns & Determiners',
    namePersian: 'ضمیرها و مشخص‌کننده‌ها',
    patterns: [
      /\b(himself|herself|itself|themselves|ourselves|myself|yourself)\b/i,
      /\b(those\s+who|one\s+another|each\s+other|whose)\b/i
    ],
    ruleDescription: 'Use of reflexive pronouns, reciprocal pronouns, or relative determiners (e.g. themselves, each other).',
    ruleDescriptionPersian: 'استفاده از ضمایر انعکاسی، متقابل یا نشانه‌ای.'
  },
  {
    chapterNumber: 8,
    chapterTitle: 'Modals, Part 1 (Ability, Advice & Necessity)',
    namePersian: 'افعال معین ۱: توانایی، توصیه و الزام',
    patterns: [
      /\b(must|should|ought\s+to|have\s+to|has\s+to|had\s+to)\s+([a-z]+)\b/i,
      /\b(is|are|was|were)\s+able\s+to\s+([a-z]+)\b/i,
      /\b(can|could)\s+([a-z]+)\b/i
    ],
    ruleDescription: 'Expressing obligation, advice, or capability using must, should, ought to, or able to.',
    ruleDescriptionPersian: 'بیان الزام، نصیحت یا توانایی با افعال وجهی پایه.'
  },
  {
    chapterNumber: 9,
    chapterTitle: 'Modals, Part 2 (Degrees of Certainty & Past Modals)',
    namePersian: 'افعال معین ۲: درجات قطعیت و وجهی‌های گذشته',
    patterns: [
      /\b(must|might|could|should|would|cannot|can't)\s+have\s+([a-z]+ed|[a-z]+en|been|done|seen|realized|known|encountered)\b/i,
      /\b(had\s+better|would\s+rather)\s+([a-z]+)\b/i
    ],
    ruleDescription: 'Use of past modals (e.g. should have done, must have been) or preference forms (would rather, had better).',
    ruleDescriptionPersian: 'به‌کارگیری وجهی‌های زمان گذشته یا عبارات ترجیحی مانند would rather.'
  },
  {
    chapterNumber: 10,
    chapterTitle: 'The Passive Voice',
    namePersian: 'جملات مجهول',
    patterns: [
      /\b(is|are|was|were|been|being)\s+([a-z]+ed|written|spoken|built|considered|understood|designed|published)\b/i,
      /\bit\s+is\s+(believed|said|widely\s+acknowledged|reported)\s+that\b/i
    ],
    ruleDescription: 'Constructing passive sentences or impersonal passive reporting clauses (e.g. was crafted by, it is acknowledged that).',
    ruleDescriptionPersian: 'ساختار جمله مجهول یا مجهول‌های غیرشخصی.'
  },
  {
    chapterNumber: 11,
    chapterTitle: 'Noun Clauses',
    namePersian: 'بندهای اسمی',
    patterns: [
      /\b(know|understand|believe|doubt|realize|conclude|wonder|discover)\w*\s+(that|whether|if|how|what|why|where|who)\b/i,
      /\bwhether\b.*?\b(or not)?\b/i,
      /\bwhat\s+[a-z\s]+\s+(means|is|requires|signifies)\b/i
    ],
    ruleDescription: 'Embedding noun clauses functioning as objects or subjects (e.g. whether it is true, that language evolves).',
    ruleDescriptionPersian: 'استفاده از بندهای اسمی با that، whether یا کلمات پرسشی.'
  },
  {
    chapterNumber: 12,
    chapterTitle: 'Adjective Clauses (Relative Clauses)',
    namePersian: 'بندهای موصولی',
    patterns: [
      /\b(which|who|whom|whose)\s+([a-z]+)\b/i,
      /,\s*(which|who|whom|whose)\s+/i
    ],
    ruleDescription: 'Relative clauses with restrictive or non-restrictive punctuation (e.g. which provides, who dedicated).',
    ruleDescriptionPersian: 'جمله‌واره‌های توصیفی با ضمایر موصولی مناسب.'
  },
  {
    chapterNumber: 13,
    chapterTitle: 'Gerunds & Infinitives, Part 1',
    namePersian: 'اسم‌های مصدر و افعال مصدری ۱',
    patterns: [
      /\b(enjoy|avoid|consider|suggest|practice|delay|admit|deny|finish)\w*\s+([a-z]+ing)\b/i,
      /\b(decide|hope|plan|refuse|attempt|manage|agree|promise|fail|tend)\w*\s+to\s+([a-z]+)\b/i
    ],
    ruleDescription: 'Accurate pairing of verbs strictly taking gerunds vs verbs taking infinitives.',
    ruleDescriptionPersian: 'کاربرد دقیق افعالی که فقط با اسم مصدر یا فقط با مصدر با to می‌آیند.'
  },
  {
    chapterNumber: 14,
    chapterTitle: 'Gerunds & Infinitives, Part 2',
    namePersian: 'اسم‌های مصدر و افعال مصدری ۲',
    patterns: [
      /\b(capable\s+of|interested\s+in|instead\s+of|look\s+forward\s+to|used\s+to|accustomed\s+to)\s+([a-z]+ing)\b/i,
      /\b(make|made|let|have|had)\s+[a-z]+\s+([a-z]+)\b/i,
      /\b(in\s+order\s+to|so\s+as\s+to)\s+([a-z]+)\b/i
    ],
    ruleDescription: 'Preposition + gerund combinations or causative structures (e.g. instead of giving up, made him realize).',
    ruleDescriptionPersian: 'ترکیب حرف اضافه با اسم مصدر یا ساختارهای سببی.'
  },
  {
    chapterNumber: 15,
    chapterTitle: 'Coordinating Conjunctions & Parallel Structure',
    namePersian: 'حروف ربط همپایه و ساختار موازی',
    patterns: [
      /\bnot\s+only\b[\s\S]*?\bbut\b/i,
      /\bboth\b[\s\S]*?\band\b/i,
      /\bneither\b[\s\S]*?\bnor\b/i
    ],
    ruleDescription: 'Parallel grammatical balance using correlative conjunctions (not only... but also, both... and).',
    ruleDescriptionPersian: 'رعایت تعادل و توازی در ساختارهای هماهنگ‌کننده.'
  },
  {
    chapterNumber: 16,
    chapterTitle: 'Adverb Clauses',
    namePersian: 'بندهای قیدی',
    patterns: [
      /\b(although|even\s+though|though|while|whereas|because|since|unless)\s+/i,
      /\b(so\s+that|in\s+order\s+that)\b/i
    ],
    ruleDescription: 'Subordinating adverb clauses showing concession, time, or cause (although..., because...).',
    ruleDescriptionPersian: 'استفاده از جمله‌واره‌های قیدی تعارض، زمان یا علت.'
  },
  {
    chapterNumber: 17,
    chapterTitle: 'Reduction of Adverb Clauses to Modifying Phrases',
    namePersian: 'کوتاه‌سازی بندهای قیدی به عبارات وصفی',
    patterns: [
      /\b(having\s+[a-z]+ed|while\s+[a-z]+ing|upon\s+[a-z]+ing|before\s+[a-z]+ing|after\s+[a-z]+ing)\b/i,
      /^[a-z]+ing\s+[a-z\s]+,\s+[a-z]+/im
    ],
    ruleDescription: 'Reduced participial modifying phrases (e.g. Having recognized the value, while studying the text).',
    ruleDescriptionPersian: 'خلاصه‌سازی بندهای قیدی به عبارات قیدی وجه وصفی.'
  },
  {
    chapterNumber: 18,
    chapterTitle: 'Connectives Expressing Cause/Effect & Contrast',
    namePersian: 'کلمات ربط علت/معلول و تضاد',
    patterns: [
      /\b(therefore|consequently|as\s+a\s+result|furthermore|moreover)\b/i,
      /\b(nevertheless|nonetheless|however|on\s+the\s+other\s+hand|in\s+contrast)\b/i,
      /\b(despite|in\s+spite\s+of)\b/i
    ],
    ruleDescription: 'Transition words and prepositional connectives (e.g. nevertheless, consequently, despite the difficulties).',
    ruleDescriptionPersian: 'کاربرد کلمات پیوند دهنده منطقی برای تضاد و نتیجه‌گیری.'
  },
  {
    chapterNumber: 19,
    chapterTitle: 'Conditional Sentences & Wishes',
    namePersian: 'جملات شرطی و آرزوها',
    patterns: [
      /\bif\s+[\s\S]*?\b(were|had|would|could)\b/i,
      /\b(wish|wishes)\s+[\s\S]*?\b(had|could|were|would)\b/i,
      /\bhad\s+[a-z\s]+\s+would\s+have\b/i,
      /\bunless\b/i
    ],
    ruleDescription: 'Unreal/hypothetical conditional sentences (Second or Third Conditional) or subjunctive wish clauses.',
    ruleDescriptionPersian: 'جملات شرطی نوع دوم یا سوم یا بیان آرزو با wish.'
  },
  {
    chapterNumber: 20,
    chapterTitle: 'Subject-Verb Inversion & Preposition Combinations',
    namePersian: 'وارونگی فاعل و فعل و ترکیبات حروف اضافه',
    patterns: [
      /\b(rarely|seldom|hardly|scarcely|barely|never\s+before|under\s+no\s+circumstances)\s+(did|had|do|does|can|will|was|were)\s+([a-z]+)\b/i,
      /\bnot\s+only\s+(did|does|is|are|was|were|can|will)\s+([a-z]+)\b/i,
      /\b(insist\s+on|insisted\s+on|depend\s+on|dedicated\s+to|fond\s+of|accustomed\s+to)\b/i
    ],
    ruleDescription: 'Negative inversion (e.g. Rarely did they imagine, Not only was it profound) or precise prepositional collocations.',
    ruleDescriptionPersian: 'وارونگی فاعل و فعل پس از عبارات منفی یا استفاده از ترکیبات حرف اضافه دقیق.'
  }
];

export function evaluateJollyJesterEssay(
  title: string,
  essay: string
): JollyJesterEvaluation {
  const normTitle = normalizeText(title);
  const normEssay = normalizeText(essay);

  const words = essay.trim().split(/\s+/).filter(Boolean);
  const totalWords = words.length;

  const failedRequirements: string[] = [];

  // Check 1: Title existence & relevance
  const titleWords = normTitle.split(/\s+/).filter(w => w.length > 2);
  let titleRelevance = false;
  if (titleWords.length >= 2) {
    const matchesInEssay = titleWords.filter(tw => normEssay.includes(tw));
    titleRelevance = matchesInEssay.length >= 1;
  }
  if (!titleRelevance) {
    failedRequirements.push('The title must contain substantive words that clearly relate to the topic discussed in the essay.');
  }

  // Check 2: Word Count (minimum 200 words, recommended 250+)
  if (totalWords < 200) {
    failedRequirements.push(`The essay is too brief (${totalWords} words). A minimum of 200 words (ideally 250+) is required to demonstrate mastery across all twenty grammar areas.`);
  }

  // Check 3: Paragraph Coherence (at least 2 paragraphs)
  const paragraphs = essay.split(/\n\s*\n/).filter(p => p.trim().length > 30);
  const coherenceStatus = (paragraphs.length >= 2 && totalWords >= 200) ? 'pass' : (totalWords < 150 ? 'fail' : 'uncertain');
  if (coherenceStatus === 'fail') {
    failedRequirements.push('The essay must be organized into coherent paragraphs with structured development.');
  }

  // Check 4: Chapter Grammar Evidence
  const chaptersCoverage = CHAPTER_PATTERNS.map(ch => {
    const evidenceList: string[] = [];
    for (const pat of ch.patterns) {
      const match = essay.match(pat);
      if (match) {
        evidenceList.push(match[0]);
      }
    }

    const passed = evidenceList.length > 0;
    if (!passed) {
      failedRequirements.push(`Chapter ${ch.chapterNumber} (${ch.chapterTitle}): Missing demonstrated grammatical structure.`);
    }

    return {
      chapterNumber: ch.chapterNumber,
      chapterTitle: ch.chapterTitle,
      passed,
      evidence: evidenceList,
      feedback: passed
        ? `Found evidence: "${evidenceList[0]}"`
        : `Requires demonstration of: ${ch.ruleDescription}`,
      feedbackPersian: passed
        ? `نمونه در متن: "${evidenceList[0]}"`
        : `نیازمند ساختار دستوری: ${ch.ruleDescriptionPersian}`
    };
  });

  const passedChaptersCount = chaptersCoverage.filter(c => c.passed).length;

  // Final Pass Decision
  const passed =
    titleRelevance &&
    totalWords >= 200 &&
    coherenceStatus === 'pass' &&
    passedChaptersCount === 20;

  let generalFeedback = '';
  let generalFeedbackPersian = '';

  if (passed) {
    generalFeedback = 'Exquisite scholarship! You have demonstrated impeccable grammatical mastery across all twenty foundational chapters of the English language. The Court of VESTA confers upon you the legendary Joker!';
    generalFeedbackPersian = 'مهارت و تسلطی بی‌نظیر! شما کاربرد صحیح تمامی ۲۰ فصل دستور زبان انگلیسی را در مقاله‌تان نشان دادید. نشان پرشکوه جوکر به شما اعطا گردید!';
  } else {
    generalFeedback = `Your essay demonstrated mastery in ${passedChaptersCount} of 20 chapters. Please examine the checklist below to refine the missing grammatical structures before submitting your next attempt.`;
    generalFeedbackPersian = `مقاله‌ی شما شواهد دستوری ${passedChaptersCount} از ۲۰ فصل را در خود داشت. لطفاً چک‌لیست زیر را بررسی کرده و ساختارهای غایب را پیش از ثبت مجدد اضافه نمایید.`;
  }

  return {
    passed,
    titleRelevance,
    totalWords,
    spellingErrorsCount: 0,
    grammarErrorsCount: 20 - passedChaptersCount,
    coherenceStatus,
    chaptersCoverage,
    passedChaptersCount,
    generalFeedback,
    generalFeedbackPersian,
    failedRequirements
  };
}
