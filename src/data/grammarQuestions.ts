/**
 * VESTA Complete Grammar Questions Assessment Engine Dataset
 * Exactly 20 Chapters x 20 Questions = 400 Questions
 * Mapped to the 52 Playing Cards and JOLLY JESTER final challenge.
 * Created by Jackdaw
 */

import { GrammarQuestion } from '../types';

const RAW_GRAMMAR_QUESTIONS: GrammarQuestion[] = [
  {
    "id": "ch-01-q1",
    "chapterId": "ch-01",
    "chapterNumber": 1,
    "questionNumber": 1,
    "difficulty": "easy",
    "prompt": "The earth ___ (revolve) around the sun.",
    "promptPersian": "زمین به دور خورشید می‌چرخد.",
    "acceptedAnswers": [
      "revolves"
    ],
    "alternativeAnswers": [
      "is revolving"
    ],
    "requiredGrammarRules": [
      "Present and Past: Simple and Progressive"
    ],
    "targetGrammarConcept": "Simple present for universal truth.",
    "spellingTolerance": 2,
    "explanation": "Simple present for universal truth.",
    "explanationPersian": "حال ساده برای بیان حقیقت علمی جهان‌شمول."
  },
  {
    "id": "ch-01-q2",
    "chapterId": "ch-01",
    "chapterNumber": 1,
    "questionNumber": 2,
    "difficulty": "easy",
    "prompt": "Listen! The clock ___ (chime) twelve in the grand hall.",
    "promptPersian": "گوش کن! ساعت در تالار بزرگ دوازده ضربه می‌زند.",
    "acceptedAnswers": [
      "is chiming"
    ],
    "alternativeAnswers": [
      "chimes"
    ],
    "requiredGrammarRules": [
      "Present and Past: Simple and Progressive"
    ],
    "targetGrammarConcept": "Present progressive for ongoing sensory action right now.",
    "spellingTolerance": 2,
    "explanation": "Present progressive for ongoing sensory action right now.",
    "explanationPersian": "حال استمراری برای رویدادی که در لحظه صحبت کردن در جریان است."
  },
  {
    "id": "ch-01-q3",
    "chapterId": "ch-01",
    "chapterNumber": 1,
    "questionNumber": 3,
    "difficulty": "easy",
    "prompt": "Yesterday, the curator ___ (discover) an obscure folio.",
    "promptPersian": "دیروز موزه‌دار یک برگ دست‌نویس گمنام پیدا کرد.",
    "acceptedAnswers": [
      "discovered"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Present and Past: Simple and Progressive"
    ],
    "targetGrammarConcept": "Simple past for finished action at definite past time.",
    "spellingTolerance": 2,
    "explanation": "Simple past for finished action at definite past time.",
    "explanationPersian": "گذشته ساده برای رخداد پایان‌یافته در زمان معین گذشته."
  },
  {
    "id": "ch-01-q4",
    "chapterId": "ch-01",
    "chapterNumber": 1,
    "questionNumber": 4,
    "difficulty": "easy",
    "prompt": "At midnight, the rain ___ (beat) violently upon the roof.",
    "promptPersian": "نیمه‌شب، باران به شدت بر بام می‌کوبید.",
    "acceptedAnswers": [
      "was beating"
    ],
    "alternativeAnswers": [
      "beat"
    ],
    "requiredGrammarRules": [
      "Present and Past: Simple and Progressive"
    ],
    "targetGrammarConcept": "Past progressive for ongoing background action at specific past time.",
    "spellingTolerance": 2,
    "explanation": "Past progressive for ongoing background action at specific past time.",
    "explanationPersian": "گذشته استمراری برای عملی که در ساعت مشخصی از گذشته در حال جریان بود."
  },
  {
    "id": "ch-01-q5",
    "chapterId": "ch-01",
    "chapterNumber": 1,
    "questionNumber": 5,
    "difficulty": "easy",
    "prompt": "Water ___ (freeze) at zero degrees Celsius.",
    "promptPersian": "آب در صفر درجه سلسیوس یخ می‌زند.",
    "acceptedAnswers": [
      "freezes"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Present and Past: Simple and Progressive"
    ],
    "targetGrammarConcept": "Scientific fact expressed in simple present.",
    "spellingTolerance": 2,
    "explanation": "Scientific fact expressed in simple present.",
    "explanationPersian": "قانون علمی بیان شده در زمان حال ساده."
  },
  {
    "id": "ch-01-q6",
    "chapterId": "ch-01",
    "chapterNumber": 1,
    "questionNumber": 6,
    "difficulty": "medium",
    "prompt": "While the scholar was speaking, the lantern ___ (flicker) out.",
    "promptPersian": "در حالی که دانشمند صحبت می‌کرد، فانوس سو سو زد و خاموش شد.",
    "acceptedAnswers": [
      "flickered"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Present and Past: Simple and Progressive"
    ],
    "targetGrammarConcept": "Simple past interrupting an ongoing past progressive activity.",
    "spellingTolerance": 2,
    "explanation": "Simple past interrupting an ongoing past progressive activity.",
    "explanationPersian": "گذشته ساده در نقش قطع‌کننده فعالیت استمراری در گذشته."
  },
  {
    "id": "ch-01-q7",
    "chapterId": "ch-01",
    "chapterNumber": 1,
    "questionNumber": 7,
    "difficulty": "medium",
    "prompt": "This ancient lexicon ___ (belong) to the royal library.",
    "promptPersian": "این لغت‌نامه کهن به کتابخانه سلطنتی تعلق دارد.",
    "acceptedAnswers": [
      "belongs"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Present and Past: Simple and Progressive"
    ],
    "targetGrammarConcept": "Stative verb of possession does not take continuous aspect.",
    "spellingTolerance": 2,
    "explanation": "Stative verb of possession does not take continuous aspect.",
    "explanationPersian": "فعل حالتی بیانگر مالکیت صورت استمراری نمی‌گیرد."
  },
  {
    "id": "ch-01-q8",
    "chapterId": "ch-01",
    "chapterNumber": 1,
    "questionNumber": 8,
    "difficulty": "medium",
    "prompt": "Right now, the scribes ___ (transcribe) the parchment.",
    "promptPersian": "هم‌اکنون کاتبان در حال رونویسی پوست‌نوشته هستند.",
    "acceptedAnswers": [
      "are transcribing"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Present and Past: Simple and Progressive"
    ],
    "targetGrammarConcept": "Present progressive with plural subject describing current activity.",
    "spellingTolerance": 2,
    "explanation": "Present progressive with plural subject describing current activity.",
    "explanationPersian": "حال استمراری با فاعل جمع برای کار در حال انجام."
  },
  {
    "id": "ch-01-q9",
    "chapterId": "ch-01",
    "chapterNumber": 1,
    "questionNumber": 9,
    "difficulty": "medium",
    "prompt": "He ___ (not understand) the archaic cipher.",
    "promptPersian": "او رمز قدیمی را متوجه نمی‌شود.",
    "acceptedAnswers": [
      "does not understand",
      "doesn't understand"
    ],
    "alternativeAnswers": [
      "did not understand"
    ],
    "requiredGrammarRules": [
      "Present and Past: Simple and Progressive"
    ],
    "targetGrammarConcept": "Negative simple present of a cognitive stative verb.",
    "spellingTolerance": 2,
    "explanation": "Negative simple present of a cognitive stative verb.",
    "explanationPersian": "منفی کردن فعل حالتی ادراکی در زمان حال ساده با does not."
  },
  {
    "id": "ch-01-q10",
    "chapterId": "ch-01",
    "chapterNumber": 1,
    "questionNumber": 10,
    "difficulty": "medium",
    "prompt": "What ___ (you read) when I entered the parlor?",
    "promptPersian": "وقتی وارد اتاق نشیمن شدم داشتی چه می‌خواندی؟",
    "acceptedAnswers": [
      "were you reading"
    ],
    "alternativeAnswers": [
      "did you read"
    ],
    "requiredGrammarRules": [
      "Present and Past: Simple and Progressive"
    ],
    "targetGrammarConcept": "Past continuous question form indicating activity in progress.",
    "spellingTolerance": 2,
    "explanation": "Past continuous question form indicating activity in progress.",
    "explanationPersian": "سوالی گذشته استمراری برای بیان فعالیت در جریان."
  },
  {
    "id": "ch-01-q11",
    "chapterId": "ch-01",
    "chapterNumber": 1,
    "questionNumber": 11,
    "difficulty": "hard",
    "prompt": "I ___ (think) that his argument is completely sound.",
    "promptPersian": "من فکر می‌کنم استدلال او کاملاً معتبر است.",
    "acceptedAnswers": [
      "think"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Present and Past: Simple and Progressive"
    ],
    "targetGrammarConcept": "Stative 'think' expressing opinion cannot take -ing.",
    "spellingTolerance": 1,
    "explanation": "Stative 'think' expressing opinion cannot take -ing.",
    "explanationPersian": "فعل think وقتی بیانگر نظر است استمراری نمی‌شود."
  },
  {
    "id": "ch-01-q12",
    "chapterId": "ch-01",
    "chapterNumber": 1,
    "questionNumber": 12,
    "difficulty": "hard",
    "prompt": "Silence! I ___ (think) about this difficult passage.",
    "promptPersian": "سکوت! من دارم درباره این متن دشوار فکر می‌کنم.",
    "acceptedAnswers": [
      "am thinking",
      "'m thinking"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Present and Past: Simple and Progressive"
    ],
    "targetGrammarConcept": "Dynamic mental action in progress takes continuous form.",
    "spellingTolerance": 1,
    "explanation": "Dynamic mental action in progress takes continuous form.",
    "explanationPersian": "فعل think وقتی بیانگر فعالیت ذهنی در لحظه است استمراری می‌شود."
  },
  {
    "id": "ch-01-q13",
    "chapterId": "ch-01",
    "chapterNumber": 1,
    "questionNumber": 13,
    "difficulty": "hard",
    "prompt": "The vintage ink ___ (smell) faintly of clove and pine.",
    "promptPersian": "جوهر قدیمی اندکی بوی میخک و کاج می‌دهد.",
    "acceptedAnswers": [
      "smells"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Present and Past: Simple and Progressive"
    ],
    "targetGrammarConcept": "Sensory linking verb takes simple present.",
    "spellingTolerance": 1,
    "explanation": "Sensory linking verb takes simple present.",
    "explanationPersian": "فعل حسی بیانگر بو دادن صورت ساده می‌گیرد."
  },
  {
    "id": "ch-01-q14",
    "chapterId": "ch-01",
    "chapterNumber": 1,
    "questionNumber": 14,
    "difficulty": "hard",
    "prompt": "The chemist ___ (smell) the potion to identify the herb.",
    "promptPersian": "شیمی‌دان در حال بو کردن معجون است تا گیاه را شناسایی کند.",
    "acceptedAnswers": [
      "is smelling"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Present and Past: Simple and Progressive"
    ],
    "targetGrammarConcept": "Active physical action of smelling takes progressive.",
    "spellingTolerance": 1,
    "explanation": "Active physical action of smelling takes progressive.",
    "explanationPersian": "عمل فیزیکی بو کشیدن توسط فاعل صورت استمراری می‌گیرد."
  },
  {
    "id": "ch-01-q15",
    "chapterId": "ch-01",
    "chapterNumber": 1,
    "questionNumber": 15,
    "difficulty": "hard",
    "prompt": "He constantly ___ (misplace) his reading glasses.",
    "promptPersian": "او دائماً عینکش را گم می‌کند.",
    "acceptedAnswers": [
      "misplaces",
      "is constantly misplaying",
      "is misplacing"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Present and Past: Simple and Progressive"
    ],
    "targetGrammarConcept": "Habitual frequency vs. progressive expressing annoyance.",
    "spellingTolerance": 1,
    "explanation": "Habitual frequency vs. progressive expressing annoyance.",
    "explanationPersian": "بیان تکرار عادت آزاردهنده."
  },
  {
    "id": "ch-01-q16",
    "chapterId": "ch-01",
    "chapterNumber": 1,
    "questionNumber": 16,
    "difficulty": "advanced",
    "prompt": "As a rule, venerable institutions ___ (preserve) their seals.",
    "promptPersian": "به عنوان یک قاعده، نهادهای قدیمی مهرهای خود را حفظ می‌کنند.",
    "acceptedAnswers": [
      "preserve"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Present and Past: Simple and Progressive"
    ],
    "targetGrammarConcept": "General customary practice requires simple present.",
    "spellingTolerance": 1,
    "explanation": "General customary practice requires simple present.",
    "explanationPersian": "یک سنت یا قاعده کلی نیازمند زمان حال ساده است."
  },
  {
    "id": "ch-01-q17",
    "chapterId": "ch-01",
    "chapterNumber": 1,
    "questionNumber": 17,
    "difficulty": "advanced",
    "prompt": "Scarcely ___ (he begin) his lecture when the bells rang.",
    "promptPersian": "هنوز سخنرانی‌اش را آغاز نکرده بود که ناقوس‌ها به صدا درآمدند.",
    "acceptedAnswers": [
      "had he begun"
    ],
    "alternativeAnswers": [
      "did he begin"
    ],
    "requiredGrammarRules": [
      "Present and Past: Simple and Progressive"
    ],
    "targetGrammarConcept": "Inversion after negative adverbial 'scarcely'.",
    "spellingTolerance": 1,
    "explanation": "Inversion after negative adverbial 'scarcely'.",
    "explanationPersian": "وارونگی فعل کمکی پیش از فاعل پس از قید منفی scarcely."
  },
  {
    "id": "ch-01-q18",
    "chapterId": "ch-01",
    "chapterNumber": 1,
    "questionNumber": 18,
    "difficulty": "advanced",
    "prompt": "In those days, monks ___ (illuminate) manuscripts by hand.",
    "promptPersian": "در آن ایام، راهبان دست‌نوشته‌ها را با دست تذهیب می‌کردند.",
    "acceptedAnswers": [
      "illuminated",
      "used to illuminate"
    ],
    "alternativeAnswers": [
      "would illuminate"
    ],
    "requiredGrammarRules": [
      "Present and Past: Simple and Progressive"
    ],
    "targetGrammarConcept": "Historical past customary activity.",
    "spellingTolerance": 1,
    "explanation": "Historical past customary activity.",
    "explanationPersian": "عادت یا سنت در زمان گذشته دور تاریخی."
  },
  {
    "id": "ch-01-q19",
    "chapterId": "ch-01",
    "chapterNumber": 1,
    "questionNumber": 19,
    "difficulty": "advanced",
    "prompt": "This old parchment ___ (feel) remarkably smooth.",
    "promptPersian": "این پوست‌نوشته کهن به شکل چشمگیری صاف به نظر می‌رسد.",
    "acceptedAnswers": [
      "feels"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Present and Past: Simple and Progressive"
    ],
    "targetGrammarConcept": "Linking verb expressing tactile quality takes simple present.",
    "spellingTolerance": 1,
    "explanation": "Linking verb expressing tactile quality takes simple present.",
    "explanationPersian": "فعل ربطی حسی برای توصیف جنس و کیفیت لمسی."
  },
  {
    "id": "ch-01-q20",
    "chapterId": "ch-01",
    "chapterNumber": 1,
    "questionNumber": 20,
    "difficulty": "advanced",
    "prompt": "Whenever we visited, the candle ___ (flicker) on his desk.",
    "promptPersian": "هرگاه به دیدارش می‌رفتیم، شمع روی میز کارش سوسو می‌زد.",
    "acceptedAnswers": [
      "was flickering",
      "flickered"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Present and Past: Simple and Progressive"
    ],
    "targetGrammarConcept": "Continuous atmospheric background in repeated past visits.",
    "spellingTolerance": 1,
    "explanation": "Continuous atmospheric background in repeated past visits.",
    "explanationPersian": "رویداد استمراری در بستر تکرار دیدارهای گذشته."
  },
  {
    "id": "ch-02-q1",
    "chapterId": "ch-02",
    "chapterNumber": 2,
    "questionNumber": 1,
    "difficulty": "easy",
    "prompt": "She ___ (live) in Oxford for seven years now.",
    "promptPersian": "او اکنون به مدت هفت سال است که در آکسفورد زندگی می‌کند.",
    "acceptedAnswers": [
      "has lived",
      "has been living"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Perfect and Perfect Progressive Tenses"
    ],
    "targetGrammarConcept": "Present perfect expressing duration continuing to the present.",
    "spellingTolerance": 2,
    "explanation": "Present perfect expressing duration continuing to the present.",
    "explanationPersian": "ماضی نقلی بیانگر عملی که از گذشته تا کنون ادامه دارد."
  },
  {
    "id": "ch-02-q2",
    "chapterId": "ch-02",
    "chapterNumber": 2,
    "questionNumber": 2,
    "difficulty": "easy",
    "prompt": "I ___ (never see) such an exquisite leather binding before.",
    "promptPersian": "من تا کنون چنین صحافی چرمی نفیسی ندیده بودم.",
    "acceptedAnswers": [
      "have never seen",
      "'ve never seen"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Perfect and Perfect Progressive Tenses"
    ],
    "targetGrammarConcept": "Lifetime experience up to present moment.",
    "spellingTolerance": 2,
    "explanation": "Lifetime experience up to present moment.",
    "explanationPersian": "بیان تجربه فرد تا لحظه حال با never."
  },
  {
    "id": "ch-02-q3",
    "chapterId": "ch-02",
    "chapterNumber": 2,
    "questionNumber": 3,
    "difficulty": "easy",
    "prompt": "By the time the messenger arrived, the council ___ (disperse).",
    "promptPersian": "تا زمانی که قاصد رسید، شورا پراکنده شده بود.",
    "acceptedAnswers": [
      "had dispersed"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Perfect and Perfect Progressive Tenses"
    ],
    "targetGrammarConcept": "Past perfect for an event completed prior to another past event.",
    "spellingTolerance": 2,
    "explanation": "Past perfect for an event completed prior to another past event.",
    "explanationPersian": "ماضی بعید برای کاری که قبل از کار دیگر در گذشته تمام شده است."
  },
  {
    "id": "ch-02-q4",
    "chapterId": "ch-02",
    "chapterNumber": 2,
    "questionNumber": 4,
    "difficulty": "easy",
    "prompt": "He ___ (write) letters since early dawn.",
    "promptPersian": "او از سپیده‌دم در حال نوشتن نامه بوده است.",
    "acceptedAnswers": [
      "has been writing"
    ],
    "alternativeAnswers": [
      "has written"
    ],
    "requiredGrammarRules": [
      "Perfect and Perfect Progressive Tenses"
    ],
    "targetGrammarConcept": "Present perfect progressive highlighting uninterrupted duration.",
    "spellingTolerance": 2,
    "explanation": "Present perfect progressive highlighting uninterrupted duration.",
    "explanationPersian": "ماضی نقلی استمراری با تأکید بر طول مدت زمان انجام کار."
  },
  {
    "id": "ch-02-q5",
    "chapterId": "ch-02",
    "chapterNumber": 2,
    "questionNumber": 5,
    "difficulty": "easy",
    "prompt": "They ___ (already translate) three full treatises.",
    "promptPersian": "آن‌ها تاکنون سه رساله کامل را ترجمه کرده‌اند.",
    "acceptedAnswers": [
      "have already translated",
      "'ve already translated"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Perfect and Perfect Progressive Tenses"
    ],
    "targetGrammarConcept": "Completed result with present relevance using 'already'.",
    "spellingTolerance": 2,
    "explanation": "Completed result with present relevance using 'already'.",
    "explanationPersian": "عمل تمام‌شده با تأثیر کنونی همراه با already."
  },
  {
    "id": "ch-02-q6",
    "chapterId": "ch-02",
    "chapterNumber": 2,
    "questionNumber": 6,
    "difficulty": "medium",
    "prompt": "How long ___ (you wait) in the cold vestibule?",
    "promptPersian": "چه مدت است که در راهروی سرد منتظر هستی؟",
    "acceptedAnswers": [
      "have you been waiting"
    ],
    "alternativeAnswers": [
      "have you waited"
    ],
    "requiredGrammarRules": [
      "Perfect and Perfect Progressive Tenses"
    ],
    "targetGrammarConcept": "Present perfect progressive question inquiring about duration.",
    "spellingTolerance": 2,
    "explanation": "Present perfect progressive question inquiring about duration.",
    "explanationPersian": "سوال ماضی نقلی استمراری درباره دیرپایی عمل."
  },
  {
    "id": "ch-02-q7",
    "chapterId": "ch-02",
    "chapterNumber": 2,
    "questionNumber": 7,
    "difficulty": "medium",
    "prompt": "Before she retired, the scholar ___ (publish) forty volumes.",
    "promptPersian": "پیش از آنکه بازنشسته شود، آن دانشمند چهل جلد کتاب به چاپ رسانده بود.",
    "acceptedAnswers": [
      "had published"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Perfect and Perfect Progressive Tenses"
    ],
    "targetGrammarConcept": "Past perfect indicating achievement completed before a past milestone.",
    "spellingTolerance": 2,
    "explanation": "Past perfect indicating achievement completed before a past milestone.",
    "explanationPersian": "ماضی بعید برای دستاوردی که پیش از یک رویداد گذشته کامل شده بود."
  },
  {
    "id": "ch-02-q8",
    "chapterId": "ch-02",
    "chapterNumber": 2,
    "questionNumber": 8,
    "difficulty": "medium",
    "prompt": "We ___ (not hear) from the expeditionary envoy recently.",
    "promptPersian": "ما اخیراً خبری از فرستاده اکتشافی دریافت نکرده‌ایم.",
    "acceptedAnswers": [
      "have not heard",
      "haven't heard"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Perfect and Perfect Progressive Tenses"
    ],
    "targetGrammarConcept": "Negative present perfect with time word 'recently'.",
    "spellingTolerance": 2,
    "explanation": "Negative present perfect with time word 'recently'.",
    "explanationPersian": "منفی ماضی نقلی با قید recently."
  },
  {
    "id": "ch-02-q9",
    "chapterId": "ch-02",
    "chapterNumber": 2,
    "questionNumber": 9,
    "difficulty": "medium",
    "prompt": "The ink on the document is wet; someone ___ (just sign) it.",
    "promptPersian": "جوهر سند خیس است؛ کسی به تازگی آن را امضا کرده است.",
    "acceptedAnswers": [
      "has just signed"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Perfect and Perfect Progressive Tenses"
    ],
    "targetGrammarConcept": "Recent action with visible immediate evidence.",
    "spellingTolerance": 2,
    "explanation": "Recent action with visible immediate evidence.",
    "explanationPersian": "عمل رخ‌داده در لحظات اخیر با شواهد عینی حاضر."
  },
  {
    "id": "ch-02-q10",
    "chapterId": "ch-02",
    "chapterNumber": 2,
    "questionNumber": 10,
    "difficulty": "medium",
    "prompt": "Until that fateful winter, they ___ (never witness) such hardship.",
    "promptPersian": "تا آن زمستان سرنوشت‌ساز، آن‌ها هرگز چنین سختی ندیده بودند.",
    "acceptedAnswers": [
      "had never witnessed"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Perfect and Perfect Progressive Tenses"
    ],
    "targetGrammarConcept": "Past experience evaluated relative to an earlier past boundary.",
    "spellingTolerance": 2,
    "explanation": "Past experience evaluated relative to an earlier past boundary.",
    "explanationPersian": "ماضی بعید با never نسبت به یک موعد گذشته."
  },
  {
    "id": "ch-02-q11",
    "chapterId": "ch-02",
    "chapterNumber": 2,
    "questionNumber": 11,
    "difficulty": "hard",
    "prompt": "The artisan's hands are trembling because he ___ (carve) all night.",
    "promptPersian": "دستان هنرمند می‌لرزد زیرا تمام شب در حال کنده‌کاری بوده است.",
    "acceptedAnswers": [
      "has been carving"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Perfect and Perfect Progressive Tenses"
    ],
    "targetGrammarConcept": "Present continuous symptom caused by recent prolonged activity.",
    "spellingTolerance": 1,
    "explanation": "Present continuous symptom caused by recent prolonged activity.",
    "explanationPersian": "اثر مشهود در حال حاضر ناشی از فعالیتی ادامه‌دار در ساعات اخیر."
  },
  {
    "id": "ch-02-q12",
    "chapterId": "ch-02",
    "chapterNumber": 2,
    "questionNumber": 12,
    "difficulty": "hard",
    "prompt": "This is the most meticulous dictionary that I ___ (ever consult).",
    "promptPersian": "این دقیق‌ترین فرهنگی است که من تا کنون بدان مراجعه کرده‌ام.",
    "acceptedAnswers": [
      "have ever consulted",
      "'ve ever consulted"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Perfect and Perfect Progressive Tenses"
    ],
    "targetGrammarConcept": "Superlative clause paired with present perfect.",
    "spellingTolerance": 1,
    "explanation": "Superlative clause paired with present perfect.",
    "explanationPersian": "جمله همراه با صفت عالی و ماضی نقلی با ever."
  },
  {
    "id": "ch-02-q13",
    "chapterId": "ch-02",
    "chapterNumber": 2,
    "questionNumber": 13,
    "difficulty": "hard",
    "prompt": "He had scarcely spoken when the clock ___ (strike) one.",
    "promptPersian": "به‌سختی سخن گفته بود که ساعت یک ضربه زد.",
    "acceptedAnswers": [
      "struck"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Perfect and Perfect Progressive Tenses"
    ],
    "targetGrammarConcept": "Simple past clause following an inverted past perfect clause.",
    "spellingTolerance": 1,
    "explanation": "Simple past clause following an inverted past perfect clause.",
    "explanationPersian": "گذشته ساده پس از بند ماضی بعید وارونه."
  },
  {
    "id": "ch-02-q14",
    "chapterId": "ch-02",
    "chapterNumber": 2,
    "questionNumber": 14,
    "difficulty": "hard",
    "prompt": "The bridge collapsed after the river ___ (rise) two metres.",
    "promptPersian": "پل پس از آنکه رود دو متر بالا آمده بود، فروریخت.",
    "acceptedAnswers": [
      "had risen"
    ],
    "alternativeAnswers": [
      "rose"
    ],
    "requiredGrammarRules": [
      "Perfect and Perfect Progressive Tenses"
    ],
    "targetGrammarConcept": "Past perfect following 'after' to specify the antecedent event.",
    "spellingTolerance": 1,
    "explanation": "Past perfect following 'after' to specify the antecedent event.",
    "explanationPersian": "ماضی بعید بعد از after برای مشخص ساختن رخداد پیشین."
  },
  {
    "id": "ch-02-q15",
    "chapterId": "ch-02",
    "chapterNumber": 2,
    "questionNumber": 15,
    "difficulty": "hard",
    "prompt": "It is the first time she ___ (visit) the Bodleian library.",
    "promptPersian": "این نخستین باری است که او از کتابخانه بودلیان بازدید می‌کند.",
    "acceptedAnswers": [
      "has visited"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Perfect and Perfect Progressive Tenses"
    ],
    "targetGrammarConcept": "Fixed construction 'It is the first time...' takes present perfect.",
    "spellingTolerance": 1,
    "explanation": "Fixed construction 'It is the first time...' takes present perfect.",
    "explanationPersian": "الگوی It is the first time با ماضی نقلی می‌آید."
  },
  {
    "id": "ch-02-q16",
    "chapterId": "ch-02",
    "chapterNumber": 2,
    "questionNumber": 16,
    "difficulty": "advanced",
    "prompt": "By sunrise tomorrow, the couriers ___ (ride) fifty miles.",
    "promptPersian": "تا طلوع خورشید فردا، قاصدان پنجاه مایل اسب رانده خواهند بود.",
    "acceptedAnswers": [
      "will have ridden"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Perfect and Perfect Progressive Tenses"
    ],
    "targetGrammarConcept": "Future perfect for action completed prior to a future point.",
    "spellingTolerance": 1,
    "explanation": "Future perfect for action completed prior to a future point.",
    "explanationPersian": "آینده کامل برای کاری که قبل از موعدی در آینده پایان می‌پذیرد."
  },
  {
    "id": "ch-02-q17",
    "chapterId": "ch-02",
    "chapterNumber": 2,
    "questionNumber": 17,
    "difficulty": "advanced",
    "prompt": "Had he ___ (heed) the warning, the disaster would have been averted.",
    "promptPersian": "اگر به هشدار توجه کرده بود، از این فاجعه جلوگیری می‌شد.",
    "acceptedAnswers": [
      "heeded"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Perfect and Perfect Progressive Tenses"
    ],
    "targetGrammarConcept": "Inverted conditional past participle form.",
    "spellingTolerance": 1,
    "explanation": "Inverted conditional past participle form.",
    "explanationPersian": "قسمت سوم فعل در ساختار شرطی وارونه."
  },
  {
    "id": "ch-02-q18",
    "chapterId": "ch-02",
    "chapterNumber": 2,
    "questionNumber": 18,
    "difficulty": "advanced",
    "prompt": "She was exhausted because she ___ (walk) through the marsh for hours.",
    "promptPersian": "او خسته و فرسوده بود زیرا ساعت‌ها در باتلاق راه رفته بود.",
    "acceptedAnswers": [
      "had been walking"
    ],
    "alternativeAnswers": [
      "had walked"
    ],
    "requiredGrammarRules": [
      "Perfect and Perfect Progressive Tenses"
    ],
    "targetGrammarConcept": "Past perfect progressive explaining a past state of exhaustion.",
    "spellingTolerance": 1,
    "explanation": "Past perfect progressive explaining a past state of exhaustion.",
    "explanationPersian": "ماضی بعید استمراری برای توجیه حالت خستگی در گذشته."
  },
  {
    "id": "ch-02-q19",
    "chapterId": "ch-02",
    "chapterNumber": 2,
    "questionNumber": 19,
    "difficulty": "advanced",
    "prompt": "The manuscript ___ (lie) untouched in the chest for centuries.",
    "promptPersian": "این دست‌نوشته قرن‌ها در صندوقچه دست‌نخورده باقی مانده بود.",
    "acceptedAnswers": [
      "had lain",
      "had been lying"
    ],
    "alternativeAnswers": [
      "has lain"
    ],
    "requiredGrammarRules": [
      "Perfect and Perfect Progressive Tenses"
    ],
    "targetGrammarConcept": "Irregular past perfect of 'lie' (recline/remain).",
    "spellingTolerance": 1,
    "explanation": "Irregular past perfect of 'lie' (recline/remain).",
    "explanationPersian": "فرم بی‌قاعده ماضی بعید فعل lie به معنای باقی ماندن."
  },
  {
    "id": "ch-02-q20",
    "chapterId": "ch-02",
    "chapterNumber": 2,
    "questionNumber": 20,
    "difficulty": "advanced",
    "prompt": "Fill in the verb: 'Ever since that voyage, Captain Vance ___ (fear) the open sea.'",
    "promptPersian": "فعل را کامل کنید: «از زمان آن سفر، کاپیتان ونس از دریای باز بیم داشته است.»",
    "acceptedAnswers": [
      "has feared"
    ],
    "alternativeAnswers": [
      "feared"
    ],
    "requiredGrammarRules": [
      "Perfect and Perfect Progressive Tenses"
    ],
    "targetGrammarConcept": "Since-phrase anchoring action up to the present.",
    "spellingTolerance": 1,
    "explanation": "Since-phrase anchoring action up to the present.",
    "explanationPersian": "عبارت since که اثر عمل را تا زمان حال تداوم می‌بخشد."
  },
  {
    "id": "ch-03-q1",
    "chapterId": "ch-03",
    "chapterNumber": 3,
    "questionNumber": 1,
    "difficulty": "easy",
    "prompt": "I promise I ___ (return) the lexicon before sunset.",
    "promptPersian": "قول می‌دهم پیش از غروب آفتاب فرهنگ لغت را بازگردانم.",
    "acceptedAnswers": [
      "will return",
      "'ll return"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Future Time"
    ],
    "targetGrammarConcept": "Promise made with 'will'.",
    "spellingTolerance": 2,
    "explanation": "Promise made with 'will'.",
    "explanationPersian": "قول و تعهد با will بیان می‌شود."
  },
  {
    "id": "ch-03-q2",
    "chapterId": "ch-03",
    "chapterNumber": 3,
    "questionNumber": 2,
    "difficulty": "easy",
    "prompt": "Look at those dark clouds! It ___ (rain) soon.",
    "promptPersian": "به آن ابرهای تاریک نگاه کن! به زودی باران خواهد بارید.",
    "acceptedAnswers": [
      "is going to rain",
      "'s going to rain"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Future Time"
    ],
    "targetGrammarConcept": "Prediction based on immediate physical evidence.",
    "spellingTolerance": 2,
    "explanation": "Prediction based on immediate physical evidence.",
    "explanationPersian": "پیش‌بینی بر پایه شواهد عینی حاضر با going to."
  },
  {
    "id": "ch-03-q3",
    "chapterId": "ch-03",
    "chapterNumber": 3,
    "questionNumber": 3,
    "difficulty": "easy",
    "prompt": "As soon as the ship ___ (arrive), we will inspect the cargo.",
    "promptPersian": "به محض آنکه کشتی برسد، بار آن را بازرسی خواهیم کرد.",
    "acceptedAnswers": [
      "arrives"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Future Time"
    ],
    "targetGrammarConcept": "Future time clause introduced by 'as soon as' takes simple present.",
    "spellingTolerance": 2,
    "explanation": "Future time clause introduced by 'as soon as' takes simple present.",
    "explanationPersian": "بند زمانی آینده با as soon as حال ساده می‌گیرد."
  },
  {
    "id": "ch-03-q4",
    "chapterId": "ch-03",
    "chapterNumber": 3,
    "questionNumber": 4,
    "difficulty": "easy",
    "prompt": "We ___ (hold) a symposium on phonetics next Tuesday.",
    "promptPersian": "ما سه‌شنبه آینده همایشی پیرامون آواشناسی برگزار خواهیم کرد.",
    "acceptedAnswers": [
      "are holding",
      "are going to hold",
      "will hold"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Future Time"
    ],
    "targetGrammarConcept": "Arranged schedule expressed via present progressive or going to.",
    "spellingTolerance": 2,
    "explanation": "Arranged schedule expressed via present progressive or going to.",
    "explanationPersian": "برنامه از پیش هماهنگ‌شده با حال استمراری یا going to."
  },
  {
    "id": "ch-03-q5",
    "chapterId": "ch-03",
    "chapterNumber": 3,
    "questionNumber": 5,
    "difficulty": "easy",
    "prompt": "The express train to London ___ (depart) at 6:45 PM.",
    "promptPersian": "قطار سریع‌السیر به مقصد لندن در ساعت ۶:۴۵ عصر حرکت می‌کند.",
    "acceptedAnswers": [
      "departs",
      "leaves"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Future Time"
    ],
    "targetGrammarConcept": "Timetabled public schedule expressed via simple present.",
    "spellingTolerance": 2,
    "explanation": "Timetabled public schedule expressed via simple present.",
    "explanationPersian": "برنامه رسمی و زمان‌بندی‌شده عمومی با حال ساده بیان می‌شود."
  },
  {
    "id": "ch-03-q6",
    "chapterId": "ch-03",
    "chapterNumber": 3,
    "questionNumber": 6,
    "difficulty": "medium",
    "prompt": "I forgot my spectacles; I ___ (go) upstairs and get them.",
    "promptPersian": "عینکم را فراموش کردم؛ بالا می‌روم و آن‌ها را می‌آورم.",
    "acceptedAnswers": [
      "will go",
      "'ll go"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Future Time"
    ],
    "targetGrammarConcept": "Spontaneous decision at the moment of speech.",
    "spellingTolerance": 2,
    "explanation": "Spontaneous decision at the moment of speech.",
    "explanationPersian": "تصمیم آنی در لحظه سخن گفتن با will."
  },
  {
    "id": "ch-03-q7",
    "chapterId": "ch-03",
    "chapterNumber": 3,
    "questionNumber": 7,
    "difficulty": "medium",
    "prompt": "What ___ (you do) after you finish your apprenticeship?",
    "promptPersian": "پس از پایان دوره کارآموزی‌ات قصد داری چه کار کنی?",
    "acceptedAnswers": [
      "are you going to do",
      "will you do"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Future Time"
    ],
    "targetGrammarConcept": "Inquiring about premeditated future intentions.",
    "spellingTolerance": 2,
    "explanation": "Inquiring about premeditated future intentions.",
    "explanationPersian": "پرسش درباره تصمیم و قصد قبلی برای آینده."
  },
  {
    "id": "ch-03-q8",
    "chapterId": "ch-03",
    "chapterNumber": 3,
    "questionNumber": 8,
    "difficulty": "medium",
    "prompt": "Unless you study diligently, you ___ (not pass) the examination.",
    "promptPersian": "مگر آنکه با جدیت مطالعه کنی، وگرنه در امتحان قبول نخواهی شد.",
    "acceptedAnswers": [
      "will not pass",
      "won't pass"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Future Time"
    ],
    "targetGrammarConcept": "Future conditional consequence with 'unless'.",
    "spellingTolerance": 2,
    "explanation": "Future conditional consequence with 'unless'.",
    "explanationPersian": "پیامد آینده در جمله شرطی با unless."
  },
  {
    "id": "ch-03-q9",
    "chapterId": "ch-03",
    "chapterNumber": 3,
    "questionNumber": 9,
    "difficulty": "medium",
    "prompt": "At this hour tomorrow, the botanist ___ (traverse) the highlands.",
    "promptPersian": "فردا در همین ساعت، گیاه‌شناس در حال عبور از ارتفاعات خواهد بود.",
    "acceptedAnswers": [
      "will be traversing"
    ],
    "alternativeAnswers": [
      "is traversing"
    ],
    "requiredGrammarRules": [
      "Future Time"
    ],
    "targetGrammarConcept": "Future progressive for action in progress at a future point.",
    "spellingTolerance": 2,
    "explanation": "Future progressive for action in progress at a future point.",
    "explanationPersian": "آینده استمراری برای کاری که در ساعتی معین در آینده در جریان خواهد بود."
  },
  {
    "id": "ch-03-q10",
    "chapterId": "ch-03",
    "chapterNumber": 3,
    "questionNumber": 10,
    "difficulty": "medium",
    "prompt": "By next November, he ___ (complete) his Persian glossary.",
    "promptPersian": "تا نوامبر آینده، او واژه‌نامه فارسی خود را کامل خواهد کرد.",
    "acceptedAnswers": [
      "will have completed"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Future Time"
    ],
    "targetGrammarConcept": "Future perfect for completion before a deadline.",
    "spellingTolerance": 2,
    "explanation": "Future perfect for completion before a deadline.",
    "explanationPersian": "آینده کامل برای کاری که پیش از موعد مشخصی به پایان می‌رسد."
  },
  {
    "id": "ch-03-q11",
    "chapterId": "ch-03",
    "chapterNumber": 3,
    "questionNumber": 11,
    "difficulty": "hard",
    "prompt": "I will wait in the ante-room until the master ___ (call) me.",
    "promptPersian": "در اتاق انتظار منتظر خواهم ماند تا زمانی که استاد صدایم کند.",
    "acceptedAnswers": [
      "calls"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Future Time"
    ],
    "targetGrammarConcept": "Time clause introduced by 'until' takes simple present.",
    "spellingTolerance": 1,
    "explanation": "Time clause introduced by 'until' takes simple present.",
    "explanationPersian": "بند قیدی زمان با until حال ساده می‌گیرد."
  },
  {
    "id": "ch-03-q12",
    "chapterId": "ch-03",
    "chapterNumber": 3,
    "questionNumber": 12,
    "difficulty": "hard",
    "prompt": "They are ___ (embark) upon a perilous voyage next month.",
    "promptPersian": "آن‌ها ماه آینده راهی سفری مخاطره‌آمیز خواهند شد.",
    "acceptedAnswers": [
      "to embark",
      "going to embark"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Future Time"
    ],
    "targetGrammarConcept": "Formal plan expressed via 'be to' or 'be going to'.",
    "spellingTolerance": 1,
    "explanation": "Formal plan expressed via 'be to' or 'be going to'.",
    "explanationPersian": "برنامه رسمی با ساختار be to یا going to."
  },
  {
    "id": "ch-03-q13",
    "chapterId": "ch-03",
    "chapterNumber": 3,
    "questionNumber": 13,
    "difficulty": "hard",
    "prompt": "Whether he arrives early or late, we ___ (be) prepared.",
    "promptPersian": "چه زود برسد چه دیر، ما آماده خواهیم بود.",
    "acceptedAnswers": [
      "will be",
      "'ll be"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Future Time"
    ],
    "targetGrammarConcept": "Future modal assertion in the main clause.",
    "spellingTolerance": 1,
    "explanation": "Future modal assertion in the main clause.",
    "explanationPersian": "قطعیت آینده در بند اصلی."
  },
  {
    "id": "ch-03-q14",
    "chapterId": "ch-03",
    "chapterNumber": 3,
    "questionNumber": 14,
    "difficulty": "hard",
    "prompt": "The royal society ___ (convene) its annual session next month.",
    "promptPersian": "انجمن سلطنتی ماه آینده مجمع سالانه خود را تشکیل می‌دهد.",
    "acceptedAnswers": [
      "convenes",
      "is convening",
      "will convene"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Future Time"
    ],
    "targetGrammarConcept": "Official calendar schedule using present tense.",
    "spellingTolerance": 1,
    "explanation": "Official calendar schedule using present tense.",
    "explanationPersian": "برنامه تقویمی رسمی با فعل حال."
  },
  {
    "id": "ch-03-q15",
    "chapterId": "ch-03",
    "chapterNumber": 3,
    "questionNumber": 15,
    "difficulty": "hard",
    "prompt": "If it rains tomorrow, the exhibition ___ (take) place indoors.",
    "promptPersian": "اگر فردا باران ببارد، نمایشگاه در فضای سرپوشیده برگزار خواهد شد.",
    "acceptedAnswers": [
      "will take"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Future Time"
    ],
    "targetGrammarConcept": "First conditional result clause with 'will'.",
    "spellingTolerance": 1,
    "explanation": "First conditional result clause with 'will'.",
    "explanationPersian": "بند نتیجه شرطی نوع اول با will."
  },
  {
    "id": "ch-03-q16",
    "chapterId": "ch-03",
    "chapterNumber": 3,
    "questionNumber": 16,
    "difficulty": "advanced",
    "prompt": "Before the bells ring, we ___ (seal) every dispatch.",
    "promptPersian": "پیش از آنکه ناقوس‌ها به صدا درآیند، ما تمام نامه‌ها را مهر و موم خواهیم کرد.",
    "acceptedAnswers": [
      "will have sealed"
    ],
    "alternativeAnswers": [
      "will seal"
    ],
    "requiredGrammarRules": [
      "Future Time"
    ],
    "targetGrammarConcept": "Action completed before a future temporal benchmark.",
    "spellingTolerance": 1,
    "explanation": "Action completed before a future temporal benchmark.",
    "explanationPersian": "آینده کامل برای تأکید بر اتمام کار قبل از رخداد زمانی آینده."
  },
  {
    "id": "ch-03-q17",
    "chapterId": "ch-03",
    "chapterNumber": 3,
    "questionNumber": 17,
    "difficulty": "advanced",
    "prompt": "I ___ (lend) you the manuscript provided you treat it gently.",
    "promptPersian": "دست‌نوشته را به تو قرض خواهم داد به شرط آنکه با آن با ملایمت رفتار کنی.",
    "acceptedAnswers": [
      "will lend",
      "'ll lend"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Future Time"
    ],
    "targetGrammarConcept": "Willingness conditioned on agreement.",
    "spellingTolerance": 1,
    "explanation": "Willingness conditioned on agreement.",
    "explanationPersian": "ابراز تمایل مشروط با will."
  },
  {
    "id": "ch-03-q18",
    "chapterId": "ch-03",
    "chapterNumber": 3,
    "questionNumber": 18,
    "difficulty": "advanced",
    "prompt": "Don't telephone at nine; I ___ (conduct) an experiment then.",
    "promptPersian": "ساعت نه تماس نگیر؛ در آن ساعت مشغول انجام آزمایش خواهم بود.",
    "acceptedAnswers": [
      "will be conducting"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Future Time"
    ],
    "targetGrammarConcept": "Future progressive for busy/ongoing state.",
    "spellingTolerance": 1,
    "explanation": "Future progressive for busy/ongoing state.",
    "explanationPersian": "آینده استمراری برای نشان دادن مشغله در آن زمان."
  },
  {
    "id": "ch-03-q19",
    "chapterId": "ch-03",
    "chapterNumber": 3,
    "questionNumber": 19,
    "difficulty": "advanced",
    "prompt": "By the time you return, the ink ___ (dry).",
    "promptPersian": "تا زمانی که بازگردی، جوهر خشک شده خواهد بود.",
    "acceptedAnswers": [
      "will have dried"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Future Time"
    ],
    "targetGrammarConcept": "Future perfect result state.",
    "spellingTolerance": 1,
    "explanation": "Future perfect result state.",
    "explanationPersian": "نتیجه تکمیل‌شده در زمان آینده با will have V3."
  },
  {
    "id": "ch-03-q20",
    "chapterId": "ch-03",
    "chapterNumber": 3,
    "questionNumber": 20,
    "difficulty": "advanced",
    "prompt": "Complete the sentence: 'Once the seal is broken, there ___ (be) no turning back.'",
    "promptPersian": "جمله را کامل کنید: «وقتی مهر شکسته شود، دیگر بازگشتی نخواهد بود.»",
    "acceptedAnswers": [
      "will be"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Future Time"
    ],
    "targetGrammarConcept": "Definite future reality following 'once'.",
    "spellingTolerance": 1,
    "explanation": "Definite future reality following 'once'.",
    "explanationPersian": "آینده قطعی پس از بند زمانی once."
  },
  {
    "id": "ch-04-q1",
    "chapterId": "ch-04",
    "chapterNumber": 4,
    "questionNumber": 1,
    "difficulty": "easy",
    "prompt": "She was writing when the courier ___ (arrive).",
    "promptPersian": "او در حال نوشتن بود که قاصد رسید.",
    "acceptedAnswers": [
      "arrived"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Review of Verb Tenses"
    ],
    "targetGrammarConcept": "Past simple interrupting past continuous.",
    "spellingTolerance": 2,
    "explanation": "Past simple interrupting past continuous.",
    "explanationPersian": "گذشته ساده در نقش رویداد قطع‌کننده."
  },
  {
    "id": "ch-04-q2",
    "chapterId": "ch-04",
    "chapterNumber": 4,
    "questionNumber": 2,
    "difficulty": "easy",
    "prompt": "He had already departed before the letter ___ (reach) his desk.",
    "promptPersian": "پیش از آنکه نامه به میزش برسد، او رفته بود.",
    "acceptedAnswers": [
      "reached"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Review of Verb Tenses"
    ],
    "targetGrammarConcept": "Simple past following past perfect event.",
    "spellingTolerance": 2,
    "explanation": "Simple past following past perfect event.",
    "explanationPersian": "گذشته ساده پس از کاری که در ماضی بعید انجام شده بود."
  },
  {
    "id": "ch-04-q3",
    "chapterId": "ch-04",
    "chapterNumber": 4,
    "questionNumber": 3,
    "difficulty": "easy",
    "prompt": "The sun sets in the west, but today dark squalls ___ (obscure) it.",
    "promptPersian": "خورشید در غرب غروب می‌کند، اما امروز ابرهای طوفانی تاریک آن را پوشانده‌اند.",
    "acceptedAnswers": [
      "are obscuring",
      "have obscured"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Review of Verb Tenses"
    ],
    "targetGrammarConcept": "Contrasting general fact with temporary present reality.",
    "spellingTolerance": 2,
    "explanation": "Contrasting general fact with temporary present reality.",
    "explanationPersian": "تقابل حقیقت کلی با رویداد موقت امروز."
  },
  {
    "id": "ch-04-q4",
    "chapterId": "ch-04",
    "chapterNumber": 4,
    "questionNumber": 4,
    "difficulty": "easy",
    "prompt": "By 1850, London ___ (become) the largest city on earth.",
    "promptPersian": "تا سال ۱۸۵۰، لندن به بزرگ‌ترین شهر زمین تبدیل شده بود.",
    "acceptedAnswers": [
      "had become"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Review of Verb Tenses"
    ],
    "targetGrammarConcept": "Past perfect completion before a historical date.",
    "spellingTolerance": 2,
    "explanation": "Past perfect completion before a historical date.",
    "explanationPersian": "ماضی بعید برای تکامل کار پیش از تاریخی معین."
  },
  {
    "id": "ch-04-q5",
    "chapterId": "ch-04",
    "chapterNumber": 4,
    "questionNumber": 5,
    "difficulty": "easy",
    "prompt": "We ___ (know) the truth as soon as the emissary speaks.",
    "promptPersian": "به محض آنکه فرستاده سخن بگوید حقیقت را خواهیم دانست.",
    "acceptedAnswers": [
      "will know",
      "'ll know"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Review of Verb Tenses"
    ],
    "targetGrammarConcept": "Main clause future with temporal clause in present.",
    "spellingTolerance": 2,
    "explanation": "Main clause future with temporal clause in present.",
    "explanationPersian": "آینده در بند اصلی همراه با حال ساده در بند زمانی."
  },
  {
    "id": "ch-04-q6",
    "chapterId": "ch-04",
    "chapterNumber": 4,
    "questionNumber": 6,
    "difficulty": "medium",
    "prompt": "While they ___ (cross) the channel, a ferocious gale arose.",
    "promptPersian": "در حالی که از کانال عبور می‌کردند، طوفانی سهمگین برخاست.",
    "acceptedAnswers": [
      "were crossing"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Review of Verb Tenses"
    ],
    "targetGrammarConcept": "Past progressive setting the backdrop of danger.",
    "spellingTolerance": 2,
    "explanation": "Past progressive setting the backdrop of danger.",
    "explanationPersian": "گذشته استمراری به عنوان پس‌زمینه رخداد مخاطره‌آمیز."
  },
  {
    "id": "ch-04-q7",
    "chapterId": "ch-04",
    "chapterNumber": 4,
    "questionNumber": 7,
    "difficulty": "medium",
    "prompt": "Haim ___ (work) for forty years before his work was finished.",
    "promptPersian": "حییم چهل سال کار کرده بود پیش از آنکه اثرش به پایان رسد.",
    "acceptedAnswers": [
      "had worked",
      "had been working"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Review of Verb Tenses"
    ],
    "targetGrammarConcept": "Past perfect duration prior to a historical milestone.",
    "spellingTolerance": 2,
    "explanation": "Past perfect duration prior to a historical milestone.",
    "explanationPersian": "ماضی بعید برای بیان دیرپایی تلاش قبل از فرجام."
  },
  {
    "id": "ch-04-q8",
    "chapterId": "ch-04",
    "chapterNumber": 4,
    "questionNumber": 8,
    "difficulty": "medium",
    "prompt": "Water ___ (consist) of hydrogen and oxygen.",
    "promptPersian": "آب از هیدروژن و اکسیژن تشکیل یافته است.",
    "acceptedAnswers": [
      "consists"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Review of Verb Tenses"
    ],
    "targetGrammarConcept": "Stative scientific definition in simple present.",
    "spellingTolerance": 2,
    "explanation": "Stative scientific definition in simple present.",
    "explanationPersian": "تعریف علمی حالتی در زمان حال ساده."
  },
  {
    "id": "ch-04-q9",
    "chapterId": "ch-04",
    "chapterNumber": 4,
    "questionNumber": 9,
    "difficulty": "medium",
    "prompt": "Since 1928, many generations ___ (consult) this dictionary.",
    "promptPersian": "از سال ۱۹۲۸، نسل‌های متعددی به این فرهنگ مراجعه کرده‌اند.",
    "acceptedAnswers": [
      "have consulted"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Review of Verb Tenses"
    ],
    "targetGrammarConcept": "Present perfect spanning from past anchor to present.",
    "spellingTolerance": 2,
    "explanation": "Present perfect spanning from past anchor to present.",
    "explanationPersian": "ماضی نقلی از مبدأ زمانی تا کنون."
  },
  {
    "id": "ch-04-q10",
    "chapterId": "ch-04",
    "chapterNumber": 4,
    "questionNumber": 10,
    "difficulty": "medium",
    "prompt": "Yesterday he told me that he ___ (lose) the gold coin earlier.",
    "promptPersian": "دیروز به من گفت که پیش‌تر سکه طلا را گم کرده بود.",
    "acceptedAnswers": [
      "had lost"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Review of Verb Tenses"
    ],
    "targetGrammarConcept": "Reported speech sequence of tenses (earlier past).",
    "spellingTolerance": 2,
    "explanation": "Reported speech sequence of tenses (earlier past).",
    "explanationPersian": "توالی زمان‌ها در نقل قول غیرمستقیم برای کار پیشین."
  },
  {
    "id": "ch-04-q11",
    "chapterId": "ch-04",
    "chapterNumber": 4,
    "questionNumber": 11,
    "difficulty": "hard",
    "prompt": "Look! The flag ___ (rise) above the rampart.",
    "promptPersian": "نگاه کن! پرچم بالای برج و بارو در حال برافراشته شدن است.",
    "acceptedAnswers": [
      "is rising"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Review of Verb Tenses"
    ],
    "targetGrammarConcept": "Visual cue 'Look!' requiring present continuous.",
    "spellingTolerance": 1,
    "explanation": "Visual cue 'Look!' requiring present continuous.",
    "explanationPersian": "نشانه دیداری Look که حال استمراری می‌طلبد."
  },
  {
    "id": "ch-04-q12",
    "chapterId": "ch-04",
    "chapterNumber": 4,
    "questionNumber": 12,
    "difficulty": "hard",
    "prompt": "When the bell tolls, the congregation ___ (stand).",
    "promptPersian": "هنگامی که ناقوس نواخته شود، جماعت خواهند ایستاد.",
    "acceptedAnswers": [
      "will stand",
      "stands"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Review of Verb Tenses"
    ],
    "targetGrammarConcept": "Future consequence of a scheduled cue.",
    "spellingTolerance": 1,
    "explanation": "Future consequence of a scheduled cue.",
    "explanationPersian": "نتیجه آینده پس از صدای ناقوس."
  },
  {
    "id": "ch-04-q13",
    "chapterId": "ch-04",
    "chapterNumber": 4,
    "questionNumber": 13,
    "difficulty": "hard",
    "prompt": "He fell asleep because he ___ (read) without rest.",
    "promptPersian": "او به خواب رفت زیرا بدون استراحت مطالعه کرده بود.",
    "acceptedAnswers": [
      "had been reading",
      "had read"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Review of Verb Tenses"
    ],
    "targetGrammarConcept": "Past perfect progressive reason for falling asleep.",
    "spellingTolerance": 1,
    "explanation": "Past perfect progressive reason for falling asleep.",
    "explanationPersian": "ماضی بعید استمراری در نقش دلیل خستگی."
  },
  {
    "id": "ch-04-q14",
    "chapterId": "ch-04",
    "chapterNumber": 4,
    "questionNumber": 14,
    "difficulty": "hard",
    "prompt": "This manuscript ___ (contain) several marginal annotations.",
    "promptPersian": "این دست‌نوشته حاوی چندین حاشیه‌نویسی است.",
    "acceptedAnswers": [
      "contains"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Review of Verb Tenses"
    ],
    "targetGrammarConcept": "Stative verb 'contain' takes simple present.",
    "spellingTolerance": 1,
    "explanation": "Stative verb 'contain' takes simple present.",
    "explanationPersian": "فعل حالتی contain به صورت ساده می‌آید."
  },
  {
    "id": "ch-04-q15",
    "chapterId": "ch-04",
    "chapterNumber": 4,
    "questionNumber": 15,
    "difficulty": "hard",
    "prompt": "By the time we reach the haven, night ___ (fall).",
    "promptPersian": "تا زمانی که به پناهگاه برسیم، شب فرارسیده خواهد بود.",
    "acceptedAnswers": [
      "will have fallen"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Review of Verb Tenses"
    ],
    "targetGrammarConcept": "Future perfect completion.",
    "spellingTolerance": 1,
    "explanation": "Future perfect completion.",
    "explanationPersian": "آینده کامل برای وقوع قبل از رسیدن."
  },
  {
    "id": "ch-04-q16",
    "chapterId": "ch-04",
    "chapterNumber": 4,
    "questionNumber": 16,
    "difficulty": "advanced",
    "prompt": "Scarcely ___ (the storm subside) when another blast began.",
    "promptPersian": "هنوز طوفان آرام نگرفته بود که تندباد دیگری آغاز شد.",
    "acceptedAnswers": [
      "had the storm subsided"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Review of Verb Tenses"
    ],
    "targetGrammarConcept": "Inversion with scarcely in past narrative.",
    "spellingTolerance": 1,
    "explanation": "Inversion with scarcely in past narrative.",
    "explanationPersian": "وارونگی با scarcely در روایت گذشته."
  },
  {
    "id": "ch-04-q17",
    "chapterId": "ch-04",
    "chapterNumber": 4,
    "questionNumber": 17,
    "difficulty": "advanced",
    "prompt": "He claimed that the universe ___ (be) infinite.",
    "promptPersian": "او ادعا کرد که جهان نامتناهی است.",
    "acceptedAnswers": [
      "is",
      "was"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Review of Verb Tenses"
    ],
    "targetGrammarConcept": "Reported speech containing a permanent truth.",
    "spellingTolerance": 1,
    "explanation": "Reported speech containing a permanent truth.",
    "explanationPersian": "نقل قول بیانگر حقیقت دائمی جهان‌شمول."
  },
  {
    "id": "ch-04-q18",
    "chapterId": "ch-04",
    "chapterNumber": 4,
    "questionNumber": 18,
    "difficulty": "advanced",
    "prompt": "They ___ (argue) about the transcription for three hours now.",
    "promptPersian": "آن‌ها اکنون به مدت سه ساعت است که درباره نویسه‌گردانی بحث می‌کنند.",
    "acceptedAnswers": [
      "have been arguing"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Review of Verb Tenses"
    ],
    "targetGrammarConcept": "Present perfect progressive with 'for three hours now'.",
    "spellingTolerance": 1,
    "explanation": "Present perfect progressive with 'for three hours now'.",
    "explanationPersian": "ماضی نقلی استمراری با قید زمان تا کنون."
  },
  {
    "id": "ch-04-q19",
    "chapterId": "ch-04",
    "chapterNumber": 4,
    "questionNumber": 19,
    "difficulty": "advanced",
    "prompt": "The ship ___ (sail) at dawn tomorrow if weather permits.",
    "promptPersian": "کشتی فردا هنگام سپیده‌دم در صورت مساعد بودن هوا حرکت خواهد کرد.",
    "acceptedAnswers": [
      "sails",
      "will sail",
      "is sailing"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Review of Verb Tenses"
    ],
    "targetGrammarConcept": "Scheduled nautical departure.",
    "spellingTolerance": 1,
    "explanation": "Scheduled nautical departure.",
    "explanationPersian": "برنامه حرکت با حال ساده یا آینده."
  },
  {
    "id": "ch-04-q20",
    "chapterId": "ch-04",
    "chapterNumber": 4,
    "questionNumber": 20,
    "difficulty": "advanced",
    "prompt": "Write the correct form: 'He admitted that he ___ (forge) the seal.'",
    "promptPersian": "شکل صحیح را بنویسید: «او اعتراف کرد که مهر را جعل کرده بود.»",
    "acceptedAnswers": [
      "had forged"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Review of Verb Tenses"
    ],
    "targetGrammarConcept": "Past perfect for an admission of prior transgression.",
    "spellingTolerance": 1,
    "explanation": "Past perfect for an admission of prior transgression.",
    "explanationPersian": "ماضی بعید برای اعتراف به خطای پیشین."
  },
  {
    "id": "ch-05-q1",
    "chapterId": "ch-05",
    "chapterNumber": 5,
    "questionNumber": 1,
    "difficulty": "easy",
    "prompt": "The price of these rare books ___ (be) ten pounds.",
    "promptPersian": "قیمت این کتاب‌های کمیاب ده پوند است.",
    "acceptedAnswers": [
      "is"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Agreement"
    ],
    "targetGrammarConcept": "The subject is 'price' (singular), not 'books'.",
    "spellingTolerance": 2,
    "explanation": "The subject is 'price' (singular), not 'books'.",
    "explanationPersian": "هسته فاعل price (مفرد) است نه books."
  },
  {
    "id": "ch-05-q2",
    "chapterId": "ch-05",
    "chapterNumber": 5,
    "questionNumber": 2,
    "difficulty": "easy",
    "prompt": "Every student and teacher ___ (be) present in the auditorium.",
    "promptPersian": "هر دانش‌آموز و معلمی در سالن سخنرانی حاضر است.",
    "acceptedAnswers": [
      "is",
      "was"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Agreement"
    ],
    "targetGrammarConcept": "'Every' makes the compound subject singular.",
    "spellingTolerance": 2,
    "explanation": "'Every' makes the compound subject singular.",
    "explanationPersian": "کلمه Every فاعل مرکب را مفرد می‌سازد."
  },
  {
    "id": "ch-05-q3",
    "chapterId": "ch-05",
    "chapterNumber": 5,
    "questionNumber": 3,
    "difficulty": "easy",
    "prompt": "Neither the professor nor his assistants ___ (be) able to solve it.",
    "promptPersian": "نه استاد و نه دستیارانش قادر به حل آن نبودند.",
    "acceptedAnswers": [
      "were",
      "are"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Agreement"
    ],
    "targetGrammarConcept": "In 'neither...nor', verb agrees with closest subject (assistants).",
    "spellingTolerance": 2,
    "explanation": "In 'neither...nor', verb agrees with closest subject (assistants).",
    "explanationPersian": "در neither...nor فعل با فاعل نزدیک‌تر (assistants) مطابقت دارد."
  },
  {
    "id": "ch-05-q4",
    "chapterId": "ch-05",
    "chapterNumber": 5,
    "questionNumber": 4,
    "difficulty": "easy",
    "prompt": "Either the assistants or the professor ___ (be) responsible.",
    "promptPersian": "یا دستیاران یا استاد مسئول است.",
    "acceptedAnswers": [
      "is",
      "was"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Agreement"
    ],
    "targetGrammarConcept": "Verb agrees with closest subject (professor = singular).",
    "spellingTolerance": 2,
    "explanation": "Verb agrees with closest subject (professor = singular).",
    "explanationPersian": "فعل با نزدیک‌ترین فاعل (professor) هماهنگ شده و مفرد است."
  },
  {
    "id": "ch-05-q5",
    "chapterId": "ch-05",
    "chapterNumber": 5,
    "questionNumber": 5,
    "difficulty": "easy",
    "prompt": "A bouquet of fresh flowers ___ (stand) upon the table.",
    "promptPersian": "یک دسته گل تازه بر روی میز قرار دارد.",
    "acceptedAnswers": [
      "stands",
      "is standing"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Agreement"
    ],
    "targetGrammarConcept": "Head noun is 'bouquet' (singular).",
    "spellingTolerance": 2,
    "explanation": "Head noun is 'bouquet' (singular).",
    "explanationPersian": "هسته فاعل bouquet است که مفرد می‌باشد."
  },
  {
    "id": "ch-05-q6",
    "chapterId": "ch-05",
    "chapterNumber": 5,
    "questionNumber": 6,
    "difficulty": "medium",
    "prompt": "Ten miles ___ (be) a long distance to walk in boots.",
    "promptPersian": "ده مایل مسافت درازی برای پیاده‌روی با چکمه است.",
    "acceptedAnswers": [
      "is",
      "was"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Agreement"
    ],
    "targetGrammarConcept": "Distances and sums of money take singular verbs.",
    "spellingTolerance": 2,
    "explanation": "Distances and sums of money take singular verbs.",
    "explanationPersian": "فواصل و مبالغ به عنوان یک واحد سنجش، فعل مفرد می‌گیرند."
  },
  {
    "id": "ch-05-q7",
    "chapterId": "ch-05",
    "chapterNumber": 5,
    "questionNumber": 7,
    "difficulty": "medium",
    "prompt": "The committee ___ (have) reached a unanimous verdict.",
    "promptPersian": "کمیته به حکمی متفق‌القول دست یافته است.",
    "acceptedAnswers": [
      "has"
    ],
    "alternativeAnswers": [
      "have"
    ],
    "requiredGrammarRules": [
      "Subject-Verb Agreement"
    ],
    "targetGrammarConcept": "Collective noun acting as a single unified body takes singular.",
    "spellingTolerance": 2,
    "explanation": "Collective noun acting as a single unified body takes singular.",
    "explanationPersian": "اسم جمع در قالب یک بدنه واحد، فعل مفرد می‌گیرد."
  },
  {
    "id": "ch-05-q8",
    "chapterId": "ch-05",
    "chapterNumber": 5,
    "questionNumber": 8,
    "difficulty": "medium",
    "prompt": "The committee members ___ (have) expressed differing viewpoints.",
    "promptPersian": "اعضای کمیته دیدگاه‌های متفاوتی را ابراز کرده‌اند.",
    "acceptedAnswers": [
      "have"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Agreement"
    ],
    "targetGrammarConcept": "Plural members take plural verb.",
    "spellingTolerance": 2,
    "explanation": "Plural members take plural verb.",
    "explanationPersian": "کلمه members جمع است و فعل have می‌طلبد."
  },
  {
    "id": "ch-05-q9",
    "chapterId": "ch-05",
    "chapterNumber": 5,
    "questionNumber": 9,
    "difficulty": "medium",
    "prompt": "The news from the frontier ___ (be) alarming.",
    "promptPersian": "اخبار رسیده از مرز نگران‌کننده است.",
    "acceptedAnswers": [
      "is",
      "was"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Agreement"
    ],
    "targetGrammarConcept": "'News' is an uncountable singular noun.",
    "spellingTolerance": 2,
    "explanation": "'News' is an uncountable singular noun.",
    "explanationPersian": "کلمه news اسمی غیرقابل شمارش و مفرد است."
  },
  {
    "id": "ch-05-q10",
    "chapterId": "ch-05",
    "chapterNumber": 5,
    "questionNumber": 10,
    "difficulty": "medium",
    "prompt": "Economics ___ (be) his favorite field of study.",
    "promptPersian": "علم اقتصاد رشته تحصیلی مورد علاقه او است.",
    "acceptedAnswers": [
      "is",
      "was"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Agreement"
    ],
    "targetGrammarConcept": "Academic subjects ending in -ics take singular verbs.",
    "spellingTolerance": 2,
    "explanation": "Academic subjects ending in -ics take singular verbs.",
    "explanationPersian": "رشته‌های تحصیلی منتهی به -ics فعل مفرد می‌گیرند."
  },
  {
    "id": "ch-05-q11",
    "chapterId": "ch-05",
    "chapterNumber": 5,
    "questionNumber": 11,
    "difficulty": "hard",
    "prompt": "The author, along with his editors, ___ (be) arriving today.",
    "promptPersian": "نویسنده همراه با ویراستارانش امروز وارد می‌شود.",
    "acceptedAnswers": [
      "is"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Agreement"
    ],
    "targetGrammarConcept": "'Along with' is parenthetical; subject is 'author' (singular).",
    "spellingTolerance": 1,
    "explanation": "'Along with' is parenthetical; subject is 'author' (singular).",
    "explanationPersian": "عبارت همراه با along with فرعی است و فاعل اصلی author است."
  },
  {
    "id": "ch-05-q12",
    "chapterId": "ch-05",
    "chapterNumber": 5,
    "questionNumber": 12,
    "difficulty": "hard",
    "prompt": "One of my friends ___ (live) in Isfahan.",
    "promptPersian": "یکی از دوستان من در اصفهان زندگی می‌کند.",
    "acceptedAnswers": [
      "lives"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Agreement"
    ],
    "targetGrammarConcept": "'One of...' takes a singular verb.",
    "spellingTolerance": 1,
    "explanation": "'One of...' takes a singular verb.",
    "explanationPersian": "ساختار One of با فعل مفرد به کار می‌رود."
  },
  {
    "id": "ch-05-q13",
    "chapterId": "ch-05",
    "chapterNumber": 5,
    "questionNumber": 13,
    "difficulty": "hard",
    "prompt": "A number of scholars ___ (attend) the conference every year.",
    "promptPersian": "تعدادی از پژوهشگران هر ساله در کنفرانس شرکت می‌کنند.",
    "acceptedAnswers": [
      "attend"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Agreement"
    ],
    "targetGrammarConcept": "'A number of' takes a plural verb.",
    "spellingTolerance": 1,
    "explanation": "'A number of' takes a plural verb.",
    "explanationPersian": "عبارت A number of فعل جمع می‌گیرد."
  },
  {
    "id": "ch-05-q14",
    "chapterId": "ch-05",
    "chapterNumber": 5,
    "questionNumber": 14,
    "difficulty": "hard",
    "prompt": "The number of rare editions ___ (be) strictly limited.",
    "promptPersian": "تعداد نسخه‌های کمیاب به شدت محدود است.",
    "acceptedAnswers": [
      "is",
      "was"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Agreement"
    ],
    "targetGrammarConcept": "'The number of' takes a singular verb.",
    "spellingTolerance": 1,
    "explanation": "'The number of' takes a singular verb.",
    "explanationPersian": "عبارت The number of بر خلاف a number of فعل مفرد می‌گیرد."
  },
  {
    "id": "ch-05-q15",
    "chapterId": "ch-05",
    "chapterNumber": 5,
    "questionNumber": 15,
    "difficulty": "hard",
    "prompt": "There ___ (be) three ancient dictionaries in the wooden cabinet.",
    "promptPersian": "سه فرهنگ لغت باستانی در کمد چوبی وجود دارد.",
    "acceptedAnswers": [
      "are",
      "were"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Agreement"
    ],
    "targetGrammarConcept": "In 'there + be', verb agrees with following noun (dictionaries).",
    "spellingTolerance": 1,
    "explanation": "In 'there + be', verb agrees with following noun (dictionaries).",
    "explanationPersian": "در ساختار there be، فعل با اسم بعد از خود هماهنگ می‌شود."
  },
  {
    "id": "ch-05-q16",
    "chapterId": "ch-05",
    "chapterNumber": 5,
    "questionNumber": 16,
    "difficulty": "advanced",
    "prompt": "All of the pie ___ (have) been eaten.",
    "promptPersian": "تمام پای خورده شده است.",
    "acceptedAnswers": [
      "has"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Agreement"
    ],
    "targetGrammarConcept": "Uncountable 'pie' takes singular 'has'.",
    "spellingTolerance": 1,
    "explanation": "Uncountable 'pie' takes singular 'has'.",
    "explanationPersian": "اسم غیرقابل شمارش pie نیازمند فعل مفرد has است."
  },
  {
    "id": "ch-05-q17",
    "chapterId": "ch-05",
    "chapterNumber": 5,
    "questionNumber": 17,
    "difficulty": "advanced",
    "prompt": "All of the manuscripts ___ (have) been preserved.",
    "promptPersian": "تمامی دست‌نوشته‌ها نگهداری شده‌اند.",
    "acceptedAnswers": [
      "have"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Agreement"
    ],
    "targetGrammarConcept": "Plural count noun 'manuscripts' takes plural 'have'.",
    "spellingTolerance": 1,
    "explanation": "Plural count noun 'manuscripts' takes plural 'have'.",
    "explanationPersian": "اسم شمارش‌پذیر جمع manuscripts فعل جمع have می‌گیرد."
  },
  {
    "id": "ch-05-q18",
    "chapterId": "ch-05",
    "chapterNumber": 5,
    "questionNumber": 18,
    "difficulty": "advanced",
    "prompt": "Measles ___ (be) a contagious illness.",
    "promptPersian": "سرخک یک بیماری واگیردار است.",
    "acceptedAnswers": [
      "is"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Agreement"
    ],
    "targetGrammarConcept": "Disease names ending in -s take singular verbs.",
    "spellingTolerance": 1,
    "explanation": "Disease names ending in -s take singular verbs.",
    "explanationPersian": "نام بیماری‌های منتهی به s فعل مفرد می‌گیرد."
  },
  {
    "id": "ch-05-q19",
    "chapterId": "ch-05",
    "chapterNumber": 5,
    "questionNumber": 19,
    "difficulty": "advanced",
    "prompt": "His pair of trousers ___ (be) torn at the knee.",
    "promptPersian": "شلوار او از قسمت زانو پاره است.",
    "acceptedAnswers": [
      "is",
      "was"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Agreement"
    ],
    "targetGrammarConcept": "'Pair' is singular, requiring singular verb.",
    "spellingTolerance": 1,
    "explanation": "'Pair' is singular, requiring singular verb.",
    "explanationPersian": "کلمه pair مفرد است و فعل مفرد می‌گیرد."
  },
  {
    "id": "ch-05-q20",
    "chapterId": "ch-05",
    "chapterNumber": 5,
    "questionNumber": 20,
    "difficulty": "advanced",
    "prompt": "Complete: 'Not only the soldiers but also the general ___ (be) captured.'",
    "promptPersian": "کامل کنید: «نه تنها سربازان بلکه ژنرال نیز به اسارت درآمد.»",
    "acceptedAnswers": [
      "was",
      "is"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Agreement"
    ],
    "targetGrammarConcept": "Correlative conjunction agrees with closer subject (general).",
    "spellingTolerance": 1,
    "explanation": "Correlative conjunction agrees with closer subject (general).",
    "explanationPersian": "فعل با نزدیک‌ترین فاعل یعنی general مطابقت دارد."
  },
  {
    "id": "ch-06-q1",
    "chapterId": "ch-06",
    "chapterNumber": 6,
    "questionNumber": 1,
    "difficulty": "easy",
    "prompt": "He gave me sound ___ (advice / an advice) regarding the grammar.",
    "promptPersian": "او در مورد دستور زبان راهنمایی درستی به من داد.",
    "acceptedAnswers": [
      "advice"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Nouns and Articles"
    ],
    "targetGrammarConcept": "'Advice' is non-count and never takes 'an'.",
    "spellingTolerance": 2,
    "explanation": "'Advice' is non-count and never takes 'an'.",
    "explanationPersian": "کلمه advice ناشمارش‌پذیر است و an نمی‌گیرد."
  },
  {
    "id": "ch-06-q2",
    "chapterId": "ch-06",
    "chapterNumber": 6,
    "questionNumber": 2,
    "difficulty": "easy",
    "prompt": "I purchased ___ (a / an / the / Ø) umbrella before the storm.",
    "promptPersian": "پیش از طوفان یک چتر خریدم.",
    "acceptedAnswers": [
      "an"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Nouns and Articles"
    ],
    "targetGrammarConcept": "'Umbrella' begins with a vowel sound, requiring 'an'.",
    "spellingTolerance": 2,
    "explanation": "'Umbrella' begins with a vowel sound, requiring 'an'.",
    "explanationPersian": "کلمه umbrella با آوای صدادار آغاز شده و an می‌گیرد."
  },
  {
    "id": "ch-06-q3",
    "chapterId": "ch-06",
    "chapterNumber": 6,
    "questionNumber": 3,
    "difficulty": "easy",
    "prompt": "___ (The / A / Ø) knowledge is power.",
    "promptPersian": "دانایی توانایی است.",
    "acceptedAnswers": [
      "Ø",
      "no article",
      "none",
      "Knowledge"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Nouns and Articles"
    ],
    "targetGrammarConcept": "Abstract generalizations use no article.",
    "spellingTolerance": 2,
    "explanation": "Abstract generalizations use no article.",
    "explanationPersian": "مفاهیم عام و انتزاعی نیازمند حرف تعریف نیستند."
  },
  {
    "id": "ch-06-q4",
    "chapterId": "ch-06",
    "chapterNumber": 6,
    "questionNumber": 4,
    "difficulty": "easy",
    "prompt": "Can you lend me ___ (a / an / some) information about Haim?",
    "promptPersian": "می‌توانی مقداری اطلاعات درباره حییم به من بدهی؟",
    "acceptedAnswers": [
      "some"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Nouns and Articles"
    ],
    "targetGrammarConcept": "'Information' is uncountable and takes 'some', not 'an'.",
    "spellingTolerance": 2,
    "explanation": "'Information' is uncountable and takes 'some', not 'an'.",
    "explanationPersian": "کلمه information ناشمارش‌پذیر است و با some می‌آید."
  },
  {
    "id": "ch-06-q5",
    "chapterId": "ch-06",
    "chapterNumber": 6,
    "questionNumber": 5,
    "difficulty": "easy",
    "prompt": "The archivist bought two new pieces of ___ (furniture / furnitures).",
    "promptPersian": "بایگان دو تکه وسیله منزل جدید خرید.",
    "acceptedAnswers": [
      "furniture"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Nouns and Articles"
    ],
    "targetGrammarConcept": "'Furniture' is non-count and cannot be pluralized.",
    "spellingTolerance": 2,
    "explanation": "'Furniture' is non-count and cannot be pluralized.",
    "explanationPersian": "کلمه furniture غیرقابل شمارش است و s جمع نمی‌گیرد."
  },
  {
    "id": "ch-06-q6",
    "chapterId": "ch-06",
    "chapterNumber": 6,
    "questionNumber": 6,
    "difficulty": "medium",
    "prompt": "She plays ___ (the / a / Ø) piano with exquisite mastery.",
    "promptPersian": "او با مهارتی نفیس پیانو می‌نوازد.",
    "acceptedAnswers": [
      "the"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Nouns and Articles"
    ],
    "targetGrammarConcept": "Musical instruments take 'the' when speaking of the skill.",
    "spellingTolerance": 2,
    "explanation": "Musical instruments take 'the' when speaking of the skill.",
    "explanationPersian": "سازهای موسیقی در کاربرد نواختن حرف تعریف the می‌گیرند."
  },
  {
    "id": "ch-06-q7",
    "chapterId": "ch-06",
    "chapterNumber": 6,
    "questionNumber": 7,
    "difficulty": "medium",
    "prompt": "___ (The / A / Ø) Mount Damavand is the highest peak in Iran.",
    "promptPersian": "کوه دماوند بلندترین قله ایران است.",
    "acceptedAnswers": [
      "Ø",
      "no article",
      "none"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Nouns and Articles"
    ],
    "targetGrammarConcept": "Individual mountains do not take 'the'.",
    "spellingTolerance": 2,
    "explanation": "Individual mountains do not take 'the'.",
    "explanationPersian": "کوه‌های منفرد حرف تعریف the دریافت نمی‌کنند."
  },
  {
    "id": "ch-06-q8",
    "chapterId": "ch-06",
    "chapterNumber": 6,
    "questionNumber": 8,
    "difficulty": "medium",
    "prompt": "We sailed across ___ (the / a / Ø) Caspian Sea.",
    "promptPersian": "ما در امتداد دریای خزر کشتی‌رانی کردیم.",
    "acceptedAnswers": [
      "the"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Nouns and Articles"
    ],
    "targetGrammarConcept": "Seas, oceans, and rivers take the definite article 'the'.",
    "spellingTolerance": 2,
    "explanation": "Seas, oceans, and rivers take the definite article 'the'.",
    "explanationPersian": "دریاها و اقیانوس‌ها حرف تعریف the می‌گیرند."
  },
  {
    "id": "ch-06-q9",
    "chapterId": "ch-06",
    "chapterNumber": 6,
    "questionNumber": 9,
    "difficulty": "medium",
    "prompt": "A person who studies languages is called a ___ (linguist).",
    "promptPersian": "کسی که زبان‌ها را مطالعه می‌کند زبان‌شناس نامیده می‌شود.",
    "acceptedAnswers": [
      "linguist"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Nouns and Articles"
    ],
    "targetGrammarConcept": "Singular countable noun following indefinite article.",
    "spellingTolerance": 2,
    "explanation": "Singular countable noun following indefinite article.",
    "explanationPersian": "اسم مفرد قابل شمارش پس از a."
  },
  {
    "id": "ch-06-q10",
    "chapterId": "ch-06",
    "chapterNumber": 6,
    "questionNumber": 10,
    "difficulty": "medium",
    "prompt": "He provided three ___ (criteria / criterions) for evaluation.",
    "promptPersian": "او سه معیار برای ارزیابی ارائه داد.",
    "acceptedAnswers": [
      "criteria"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Nouns and Articles"
    ],
    "targetGrammarConcept": "Irregular Greek plural of 'criterion' is 'criteria'.",
    "spellingTolerance": 2,
    "explanation": "Irregular Greek plural of 'criterion' is 'criteria'.",
    "explanationPersian": "شکل جمع بی‌قاعده واژه criterion کلمه criteria است."
  },
  {
    "id": "ch-06-q11",
    "chapterId": "ch-06",
    "chapterNumber": 6,
    "questionNumber": 11,
    "difficulty": "hard",
    "prompt": "The analysis of these data ___ (be) conclusive.",
    "promptPersian": "تحلیل این داده‌ها قاطع و قطعی است.",
    "acceptedAnswers": [
      "is",
      "was"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Nouns and Articles"
    ],
    "targetGrammarConcept": "The subject is 'analysis' (singular).",
    "spellingTolerance": 1,
    "explanation": "The subject is 'analysis' (singular).",
    "explanationPersian": "هسته فاعل analysis (مفرد) است."
  },
  {
    "id": "ch-06-q12",
    "chapterId": "ch-06",
    "chapterNumber": 6,
    "questionNumber": 12,
    "difficulty": "hard",
    "prompt": "She possesses ___ (great / a great) patience in her research.",
    "promptPersian": "او در پژوهش‌های خود شکیبایی فراوانی دارد.",
    "acceptedAnswers": [
      "great"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Nouns and Articles"
    ],
    "targetGrammarConcept": "Uncountable abstract qualities do not take 'a'.",
    "spellingTolerance": 1,
    "explanation": "Uncountable abstract qualities do not take 'a'.",
    "explanationPersian": "صفات انتزاعی غیرقابل شمارش مانند patience حرف تعریف a نمی‌گیرند."
  },
  {
    "id": "ch-06-q13",
    "chapterId": "ch-06",
    "chapterNumber": 6,
    "questionNumber": 13,
    "difficulty": "hard",
    "prompt": "There are two ___ (passers-by / passer-bys) in the narrow lane.",
    "promptPersian": "دو رهگذر در کوچه باریک حضور دارند.",
    "acceptedAnswers": [
      "passers-by"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Nouns and Articles"
    ],
    "targetGrammarConcept": "Compound noun pluralizes the head word: passers-by.",
    "spellingTolerance": 1,
    "explanation": "Compound noun pluralizes the head word: passers-by.",
    "explanationPersian": "در اسم مرکب passers-by واژه اول جمع بسته می‌شود."
  },
  {
    "id": "ch-06-q14",
    "chapterId": "ch-06",
    "chapterNumber": 6,
    "questionNumber": 14,
    "difficulty": "hard",
    "prompt": "We stayed at ___ (the / a / Ø) Grand Hotel in London.",
    "promptPersian": "ما در هتل گراند در لندن اقامت گزیدیم.",
    "acceptedAnswers": [
      "the"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Nouns and Articles"
    ],
    "targetGrammarConcept": "Names of hotels take the definite article 'the'.",
    "spellingTolerance": 1,
    "explanation": "Names of hotels take the definite article 'the'.",
    "explanationPersian": "نام هتل‌ها با حرف تعریف the همراه می‌شود."
  },
  {
    "id": "ch-06-q15",
    "chapterId": "ch-06",
    "chapterNumber": 6,
    "questionNumber": 15,
    "difficulty": "hard",
    "prompt": "He works as ___ (a / an / the) lexicographer.",
    "promptPersian": "او به عنوان یک فرهنگ‌نویس کار می‌کند.",
    "acceptedAnswers": [
      "a"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Nouns and Articles"
    ],
    "targetGrammarConcept": "Professions take 'a/an' when introducing someone's role.",
    "spellingTolerance": 1,
    "explanation": "Professions take 'a/an' when introducing someone's role.",
    "explanationPersian": "مشاغل در زبان انگلیسی با a/an معرفی می‌شوند."
  },
  {
    "id": "ch-06-q16",
    "chapterId": "ch-06",
    "chapterNumber": 6,
    "questionNumber": 16,
    "difficulty": "advanced",
    "prompt": "A pack of ___ (wolves / wolfs) roamed the forest.",
    "promptPersian": "دسته‌ای از گرگ‌ها در جنگل پرسه می‌زدند.",
    "acceptedAnswers": [
      "wolves"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Nouns and Articles"
    ],
    "targetGrammarConcept": "Irregular plural of wolf is wolves.",
    "spellingTolerance": 1,
    "explanation": "Irregular plural of wolf is wolves.",
    "explanationPersian": "جمع بی‌قاعده wolf واژه wolves است."
  },
  {
    "id": "ch-06-q17",
    "chapterId": "ch-06",
    "chapterNumber": 6,
    "questionNumber": 17,
    "difficulty": "advanced",
    "prompt": "Both ___ (phenomenon / phenomena) were recorded by the astronomer.",
    "promptPersian": "هر دو پدیده توسط ستاره‌شناس ثبت شدند.",
    "acceptedAnswers": [
      "phenomena"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Nouns and Articles"
    ],
    "targetGrammarConcept": "Plural of Greek-derived 'phenomenon' is 'phenomena'.",
    "spellingTolerance": 1,
    "explanation": "Plural of Greek-derived 'phenomenon' is 'phenomena'.",
    "explanationPersian": "جمع کلمه phenomenon واژه phenomena است."
  },
  {
    "id": "ch-06-q18",
    "chapterId": "ch-06",
    "chapterNumber": 6,
    "questionNumber": 18,
    "difficulty": "advanced",
    "prompt": "He gave his life for ___ (the / a / Ø) freedom.",
    "promptPersian": "او جانش را در راه آزادی فدا کرد.",
    "acceptedAnswers": [
      "Ø",
      "no article",
      "none",
      "freedom"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Nouns and Articles"
    ],
    "targetGrammarConcept": "Abstract non-count nouns take zero article in generalizations.",
    "spellingTolerance": 1,
    "explanation": "Abstract non-count nouns take zero article in generalizations.",
    "explanationPersian": "اسامی انتزاعی در مفهوم عام حرف تعریف نمی‌گیرند."
  },
  {
    "id": "ch-06-q19",
    "chapterId": "ch-06",
    "chapterNumber": 6,
    "questionNumber": 19,
    "difficulty": "advanced",
    "prompt": "The police ___ (be) investigating the theft of the codex.",
    "promptPersian": "پلیس در حال تحقیق درباره سرقت دست‌نوشته کهن است.",
    "acceptedAnswers": [
      "are",
      "were"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Nouns and Articles"
    ],
    "targetGrammarConcept": "'Police' is always grammatically plural in English.",
    "spellingTolerance": 1,
    "explanation": "'Police' is always grammatically plural in English.",
    "explanationPersian": "واژه police در دستور زبان انگلیسی همواره جمع است."
  },
  {
    "id": "ch-06-q20",
    "chapterId": "ch-06",
    "chapterNumber": 6,
    "questionNumber": 20,
    "difficulty": "advanced",
    "prompt": "Identify the correct form: 'She has ___ (few / little) patience with fools.'",
    "promptPersian": "شکل صحیح را بنویسید: «او در برابر نادانان صبر اندکی دارد.»",
    "acceptedAnswers": [
      "little"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Nouns and Articles"
    ],
    "targetGrammarConcept": "'Little' is used with uncountable nouns like patience.",
    "spellingTolerance": 1,
    "explanation": "'Little' is used with uncountable nouns like patience.",
    "explanationPersian": "کلمه little با اسامی غیرقابل شمارش نظیر patience می‌آید."
  },
  {
    "id": "ch-07-q1",
    "chapterId": "ch-07",
    "chapterNumber": 7,
    "questionNumber": 1,
    "difficulty": "easy",
    "prompt": "The scholar prepared the index by ___ (himself / him).",
    "promptPersian": "دانشمند نمایه را خودش به تنهایی آماده کرد.",
    "acceptedAnswers": [
      "himself"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Pronouns and Determiners"
    ],
    "targetGrammarConcept": "Reflexive pronoun indicates independent solitary action.",
    "spellingTolerance": 2,
    "explanation": "Reflexive pronoun indicates independent solitary action.",
    "explanationPersian": "ضمیر انعکاسی بیانگر انجام کار توسط خود شخص است."
  },
  {
    "id": "ch-07-q2",
    "chapterId": "ch-07",
    "chapterNumber": 7,
    "questionNumber": 2,
    "difficulty": "easy",
    "prompt": "Every student must bring ___ (his or her / their) own dictionary.",
    "promptPersian": "هر دانشجویی باید فرهنگ لغت خود را بیاورد.",
    "acceptedAnswers": [
      "his or her",
      "their"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Pronouns and Determiners"
    ],
    "targetGrammarConcept": "Pronoun agreement with singular indefinite 'every student'.",
    "spellingTolerance": 2,
    "explanation": "Pronoun agreement with singular indefinite 'every student'.",
    "explanationPersian": "تطابق ضمیر با فاعل مفرد every student."
  },
  {
    "id": "ch-07-q3",
    "chapterId": "ch-07",
    "chapterNumber": 7,
    "questionNumber": 3,
    "difficulty": "easy",
    "prompt": "The two authors respected ___ (each other / one another).",
    "promptPersian": "آن دو نویسنده به یکدیگر احترام می‌گذاشتند.",
    "acceptedAnswers": [
      "each other"
    ],
    "alternativeAnswers": [
      "one another"
    ],
    "requiredGrammarRules": [
      "Pronouns and Determiners"
    ],
    "targetGrammarConcept": "'Each other' refers to reciprocal relationship between two entities.",
    "spellingTolerance": 2,
    "explanation": "'Each other' refers to reciprocal relationship between two entities.",
    "explanationPersian": "عبارت each other برای رابطه دوسویه میان دو نفر است."
  },
  {
    "id": "ch-07-q4",
    "chapterId": "ch-07",
    "chapterNumber": 7,
    "questionNumber": 4,
    "difficulty": "easy",
    "prompt": "The book lost ___ (its / it's) leather cover.",
    "promptPersian": "کتاب جلد چرمی‌اش را از دست داد.",
    "acceptedAnswers": [
      "its"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Pronouns and Determiners"
    ],
    "targetGrammarConcept": "'Its' is the possessive determiner; 'it's' is 'it is'.",
    "spellingTolerance": 2,
    "explanation": "'Its' is the possessive determiner; 'it's' is 'it is'.",
    "explanationPersian": "واژه its صفت ملکی است، در حالی که it's مخفف it is است."
  },
  {
    "id": "ch-07-q5",
    "chapterId": "ch-07",
    "chapterNumber": 7,
    "questionNumber": 5,
    "difficulty": "easy",
    "prompt": "Those ___ (who / which) study diligently shall prosper.",
    "promptPersian": "کسانی که با جدیت درس می‌خوانند کامیاب خواهند شد.",
    "acceptedAnswers": [
      "who"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Pronouns and Determiners"
    ],
    "targetGrammarConcept": "Relative pronoun referring to persons is 'who'.",
    "spellingTolerance": 2,
    "explanation": "Relative pronoun referring to persons is 'who'.",
    "explanationPersian": "ضمیر موصولی برای انسان who است."
  },
  {
    "id": "ch-07-q6",
    "chapterId": "ch-07",
    "chapterNumber": 7,
    "questionNumber": 6,
    "difficulty": "medium",
    "prompt": "Between you and ___ (I / me), this translation is flawed.",
    "promptPersian": "بین من و تو، این ترجمه دارای نقص است.",
    "acceptedAnswers": [
      "me"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Pronouns and Determiners"
    ],
    "targetGrammarConcept": "Preposition 'between' governs objective pronoun 'me'.",
    "spellingTolerance": 2,
    "explanation": "Preposition 'between' governs objective pronoun 'me'.",
    "explanationPersian": "حرف اضافه between ضمیر مفعولی me می‌طلبد."
  },
  {
    "id": "ch-07-q7",
    "chapterId": "ch-07",
    "chapterNumber": 7,
    "questionNumber": 7,
    "difficulty": "medium",
    "prompt": "Neither of the editions ___ (be) satisfactory.",
    "promptPersian": "هیچ‌کدام از آن دو چاپ رضایت‌بخش نبودند.",
    "acceptedAnswers": [
      "is",
      "was"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Pronouns and Determiners"
    ],
    "targetGrammarConcept": "'Neither of' takes a singular verb in formal prose.",
    "spellingTolerance": 2,
    "explanation": "'Neither of' takes a singular verb in formal prose.",
    "explanationPersian": "ساختار Neither of در زبان رسمی با فعل مفرد می‌آید."
  },
  {
    "id": "ch-07-q8",
    "chapterId": "ch-07",
    "chapterNumber": 7,
    "questionNumber": 8,
    "difficulty": "medium",
    "prompt": "One should always keep ___ (one's / his) promises.",
    "promptPersian": "انسان باید همیشه به وعده‌های خویش وفادار بماند.",
    "acceptedAnswers": [
      "one's"
    ],
    "alternativeAnswers": [
      "his"
    ],
    "requiredGrammarRules": [
      "Pronouns and Determiners"
    ],
    "targetGrammarConcept": "Indefinite pronoun 'one' takes 'one's' in standard formal style.",
    "spellingTolerance": 2,
    "explanation": "Indefinite pronoun 'one' takes 'one's' in standard formal style.",
    "explanationPersian": "ضمیر نامعین one در سبک رسمی صفت ملکی one's می‌گیرد."
  },
  {
    "id": "ch-07-q9",
    "chapterId": "ch-07",
    "chapterNumber": 7,
    "questionNumber": 9,
    "difficulty": "medium",
    "prompt": "The committee announced ___ (its / their) final verdict.",
    "promptPersian": "کمیته حکم نهایی خود را اعلام نمود.",
    "acceptedAnswers": [
      "its"
    ],
    "alternativeAnswers": [
      "their"
    ],
    "requiredGrammarRules": [
      "Pronouns and Determiners"
    ],
    "targetGrammarConcept": "Collective entity acting as a single unit takes 'its'.",
    "spellingTolerance": 2,
    "explanation": "Collective entity acting as a single unit takes 'its'.",
    "explanationPersian": "نهاد جمع در جایگاه واحد منسجم ضمیر مفرد its می‌گیرد."
  },
  {
    "id": "ch-07-q10",
    "chapterId": "ch-07",
    "chapterNumber": 7,
    "questionNumber": 10,
    "difficulty": "medium",
    "prompt": "This is the man ___ (whose / who's) library was donated.",
    "promptPersian": "این همان مردی است که کتابخانه‌اش اهدا شد.",
    "acceptedAnswers": [
      "whose"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Pronouns and Determiners"
    ],
    "targetGrammarConcept": "Possessive relative pronoun is 'whose'.",
    "spellingTolerance": 2,
    "explanation": "Possessive relative pronoun is 'whose'.",
    "explanationPersian": "ضمیر موصولی ملکی whose است."
  },
  {
    "id": "ch-07-q11",
    "chapterId": "ch-07",
    "chapterNumber": 7,
    "questionNumber": 11,
    "difficulty": "hard",
    "prompt": "She did the entire transcription ___ (herself).",
    "promptPersian": "او تمام رونویسی را خودش به تنهایی انجام داد.",
    "acceptedAnswers": [
      "herself"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Pronouns and Determiners"
    ],
    "targetGrammarConcept": "Reflexive pronoun emphasizing personal execution.",
    "spellingTolerance": 1,
    "explanation": "Reflexive pronoun emphasizing personal execution.",
    "explanationPersian": "ضمیر انعکاسی برای تأکید بر انجام کار توسط خود فرد."
  },
  {
    "id": "ch-07-q12",
    "chapterId": "ch-07",
    "chapterNumber": 7,
    "questionNumber": 12,
    "difficulty": "hard",
    "prompt": "The council members looked at ___ (one another / each other).",
    "promptPersian": "اعضای شورا به یکدیگر نگریستند.",
    "acceptedAnswers": [
      "one another"
    ],
    "alternativeAnswers": [
      "each other"
    ],
    "requiredGrammarRules": [
      "Pronouns and Determiners"
    ],
    "targetGrammarConcept": "'One another' is preferred for three or more individuals.",
    "spellingTolerance": 1,
    "explanation": "'One another' is preferred for three or more individuals.",
    "explanationPersian": "عبارت one another برای بیش از دو نفر ارجح است."
  },
  {
    "id": "ch-07-q13",
    "chapterId": "ch-07",
    "chapterNumber": 7,
    "questionNumber": 13,
    "difficulty": "hard",
    "prompt": "He gave the prize to whomever ___ (deserve) it most.",
    "promptPersian": "او جایزه را به هر کس که بیش از همه سزاوارش بود اعطا کرد.",
    "acceptedAnswers": [
      "deserved",
      "deserves"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Pronouns and Determiners"
    ],
    "targetGrammarConcept": "Pronoun clause subject agreement.",
    "spellingTolerance": 1,
    "explanation": "Pronoun clause subject agreement.",
    "explanationPersian": "مطابقت فعل درون جمله‌واره ضمیری."
  },
  {
    "id": "ch-07-q14",
    "chapterId": "ch-07",
    "chapterNumber": 7,
    "questionNumber": 14,
    "difficulty": "hard",
    "prompt": "Someone left ___ (their / his) fountain pen on the table.",
    "promptPersian": "کسی خودنویس خود را روی میز جا گذاشته است.",
    "acceptedAnswers": [
      "their",
      "his or her"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Pronouns and Determiners"
    ],
    "targetGrammarConcept": "Singular 'they/their' with indefinite pronoun 'someone'.",
    "spellingTolerance": 1,
    "explanation": "Singular 'they/their' with indefinite pronoun 'someone'.",
    "explanationPersian": "کاربرد their برای مراجع نامعین مانند someone."
  },
  {
    "id": "ch-07-q15",
    "chapterId": "ch-07",
    "chapterNumber": 7,
    "questionNumber": 15,
    "difficulty": "hard",
    "prompt": "The dog chased ___ (its) own tail in circles.",
    "promptPersian": "سگ به دور خود دم خویش را تعقیب کرد.",
    "acceptedAnswers": [
      "its"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Pronouns and Determiners"
    ],
    "targetGrammarConcept": "Possessive form for animals/objects without apostrophe.",
    "spellingTolerance": 1,
    "explanation": "Possessive form for animals/objects without apostrophe.",
    "explanationPersian": "صفت ملکی its بدون آپوستروف."
  },
  {
    "id": "ch-07-q16",
    "chapterId": "ch-07",
    "chapterNumber": 7,
    "questionNumber": 16,
    "difficulty": "advanced",
    "prompt": "Of the three treatises, ___ (none / neither) was translated.",
    "promptPersian": "از آن سه رساله، هیچ‌یک ترجمه نشده بود.",
    "acceptedAnswers": [
      "none"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Pronouns and Determiners"
    ],
    "targetGrammarConcept": "'None' applies to three or more; 'neither' applies only to two.",
    "spellingTolerance": 1,
    "explanation": "'None' applies to three or more; 'neither' applies only to two.",
    "explanationPersian": "کلمه none برای سه مورد یا بیشتر به کار می‌رود."
  },
  {
    "id": "ch-07-q17",
    "chapterId": "ch-07",
    "chapterNumber": 7,
    "questionNumber": 17,
    "difficulty": "advanced",
    "prompt": "The author ___ (himself) corrected the printer's proofs.",
    "promptPersian": "خودِ نویسنده نمونه‌های چاپی را تصحیح کرد.",
    "acceptedAnswers": [
      "himself"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Pronouns and Determiners"
    ],
    "targetGrammarConcept": "Intensive pronoun directly following the subject for emphasis.",
    "spellingTolerance": 1,
    "explanation": "Intensive pronoun directly following the subject for emphasis.",
    "explanationPersian": "ضمیر تأکیدی بلافاصله پس از فاعل."
  },
  {
    "id": "ch-07-q18",
    "chapterId": "ch-07",
    "chapterNumber": 7,
    "questionNumber": 18,
    "difficulty": "advanced",
    "prompt": "It was ___ (he / him) who discovered the missing page.",
    "promptPersian": "این او بود که صفحه گم‌شده را پیدا کرد.",
    "acceptedAnswers": [
      "he"
    ],
    "alternativeAnswers": [
      "him"
    ],
    "requiredGrammarRules": [
      "Pronouns and Determiners"
    ],
    "targetGrammarConcept": "Subject complement after 'it was' in formal prescriptive grammar.",
    "spellingTolerance": 1,
    "explanation": "Subject complement after 'it was' in formal prescriptive grammar.",
    "explanationPersian": "متمم فاعلی پس از it was در دستور زبان رسمی."
  },
  {
    "id": "ch-07-q19",
    "chapterId": "ch-07",
    "chapterNumber": 7,
    "questionNumber": 19,
    "difficulty": "advanced",
    "prompt": "Choose the correct word: 'Neither of the scholars could conceal ___ (his / their) surprise.'",
    "promptPersian": "واژه صحیح را انتخاب کنید: «هیچ‌یک از آن دو دانشمند نتوانست شگفتی خود را پنهان سازد.»",
    "acceptedAnswers": [
      "his"
    ],
    "alternativeAnswers": [
      "their"
    ],
    "requiredGrammarRules": [
      "Pronouns and Determiners"
    ],
    "targetGrammarConcept": "Formal singular agreement with 'neither of'.",
    "spellingTolerance": 1,
    "explanation": "Formal singular agreement with 'neither of'.",
    "explanationPersian": "مطابقت مفرد با neither of در نثر رسمی."
  },
  {
    "id": "ch-07-q20",
    "chapterId": "ch-07",
    "chapterNumber": 7,
    "questionNumber": 20,
    "difficulty": "advanced",
    "prompt": "The students helped ___ (each other) revise for the test.",
    "promptPersian": "دانشجویان در مرور مطالب برای آزمون به یکدیگر کمک کردند.",
    "acceptedAnswers": [
      "each other"
    ],
    "alternativeAnswers": [
      "one another"
    ],
    "requiredGrammarRules": [
      "Pronouns and Determiners"
    ],
    "targetGrammarConcept": "Reciprocal pronoun indicating mutual assistance.",
    "spellingTolerance": 1,
    "explanation": "Reciprocal pronoun indicating mutual assistance.",
    "explanationPersian": "ضمیر متقابل نشان‌دهنده یاری دوسویه."
  },
  {
    "id": "ch-08-q1",
    "chapterId": "ch-08",
    "chapterNumber": 8,
    "questionNumber": 1,
    "difficulty": "easy",
    "prompt": "You ___ (must / can) obey the library regulations at all times.",
    "promptPersian": "شما باید در همه حال از مقررات کتابخانه پیروی کنید.",
    "acceptedAnswers": [
      "must"
    ],
    "alternativeAnswers": [
      "have to"
    ],
    "requiredGrammarRules": [
      "Modals, Part 1: Ability, Advice, and Necessity"
    ],
    "targetGrammarConcept": "'Must' indicates strong obligation and regulatory law.",
    "spellingTolerance": 2,
    "explanation": "'Must' indicates strong obligation and regulatory law.",
    "explanationPersian": "فعل must نشان‌دهنده الزام قطعی و قوانین انضباطی است."
  },
  {
    "id": "ch-08-q2",
    "chapterId": "ch-08",
    "chapterNumber": 8,
    "questionNumber": 2,
    "difficulty": "easy",
    "prompt": "He ___ (can / may) read ancient Persian fluently.",
    "promptPersian": "او می‌تواند زبان فارسی کهن را روان بخواند.",
    "acceptedAnswers": [
      "can"
    ],
    "alternativeAnswers": [
      "is able to"
    ],
    "requiredGrammarRules": [
      "Modals, Part 1: Ability, Advice, and Necessity"
    ],
    "targetGrammarConcept": "'Can' denotes learned ability and capacity.",
    "spellingTolerance": 2,
    "explanation": "'Can' denotes learned ability and capacity.",
    "explanationPersian": "فعل can بیانگر توانایی آموخته‌شده فرد است."
  },
  {
    "id": "ch-08-q3",
    "chapterId": "ch-08",
    "chapterNumber": 8,
    "questionNumber": 3,
    "difficulty": "easy",
    "prompt": "You ___ (should / must) consult a physician about that chronic cough.",
    "promptPersian": "شما باید (بهتر است) درباره آن سرفه مزمن با یک پزشک مشورت کنید.",
    "acceptedAnswers": [
      "should"
    ],
    "alternativeAnswers": [
      "ought to"
    ],
    "requiredGrammarRules": [
      "Modals, Part 1: Ability, Advice, and Necessity"
    ],
    "targetGrammarConcept": "'Should' conveys sensible medical advice rather than legal compulsion.",
    "spellingTolerance": 2,
    "explanation": "'Should' conveys sensible medical advice rather than legal compulsion.",
    "explanationPersian": "فعل should برای توصیه خیرخواهانه به کار می‌رود."
  },
  {
    "id": "ch-08-q4",
    "chapterId": "ch-08",
    "chapterNumber": 8,
    "questionNumber": 4,
    "difficulty": "easy",
    "prompt": "Pupils ___ (have to / must) wear formal robes for matriculation.",
    "promptPersian": "دانش‌آموزان برای ثبت‌نام باید ردای رسمی بپوشند.",
    "acceptedAnswers": [
      "have to"
    ],
    "alternativeAnswers": [
      "must"
    ],
    "requiredGrammarRules": [
      "Modals, Part 1: Ability, Advice, and Necessity"
    ],
    "targetGrammarConcept": "'Have to' expresses external institutional requirement.",
    "spellingTolerance": 2,
    "explanation": "'Have to' expresses external institutional requirement.",
    "explanationPersian": "عبارت have to برای قوانین و الزامات نهادی بیرونی است."
  },
  {
    "id": "ch-08-q5",
    "chapterId": "ch-08",
    "chapterNumber": 8,
    "questionNumber": 5,
    "difficulty": "easy",
    "prompt": "You ___ (had better / would rather) hurry, or you will miss the coach.",
    "promptPersian": "بهتر است عجله کنی، وگرنه از درشکه جا خواهی ماند.",
    "acceptedAnswers": [
      "had better"
    ],
    "alternativeAnswers": [
      "better"
    ],
    "requiredGrammarRules": [
      "Modals, Part 1: Ability, Advice, and Necessity"
    ],
    "targetGrammarConcept": "'Had better' warns of concrete negative consequences.",
    "spellingTolerance": 2,
    "explanation": "'Had better' warns of concrete negative consequences.",
    "explanationPersian": "ترکیب had better هشداردهنده پیامد ناگوار در صورت تعلل است."
  },
  {
    "id": "ch-08-q6",
    "chapterId": "ch-08",
    "chapterNumber": 8,
    "questionNumber": 6,
    "difficulty": "medium",
    "prompt": "___ (May / Can) I examine this illuminated folio, sir?",
    "promptPersian": "جناب، آیا اجازه دارم این برگ تذهیب‌شده را بررسی کنم؟",
    "acceptedAnswers": [
      "May"
    ],
    "alternativeAnswers": [
      "Could",
      "Can"
    ],
    "requiredGrammarRules": [
      "Modals, Part 1: Ability, Advice, and Necessity"
    ],
    "targetGrammarConcept": "'May' is the polite formal request for permission.",
    "spellingTolerance": 2,
    "explanation": "'May' is the polite formal request for permission.",
    "explanationPersian": "فعل may برای کسب اجازه مودبانه و رسمی است."
  },
  {
    "id": "ch-08-q7",
    "chapterId": "ch-08",
    "chapterNumber": 8,
    "questionNumber": 7,
    "difficulty": "medium",
    "prompt": "He ___ (not be able to) attend tomorrow's meeting due to illness.",
    "promptPersian": "او به سبب بیماری قادر نخواهد بود در جلسه فردا شرکت کند.",
    "acceptedAnswers": [
      "will not be able to",
      "won't be able to"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Modals, Part 1: Ability, Advice, and Necessity"
    ],
    "targetGrammarConcept": "Future ability requires 'will be able to'.",
    "spellingTolerance": 2,
    "explanation": "Future ability requires 'will be able to'.",
    "explanationPersian": "توانایی در زمان آینده با will be able to بیان می‌شود."
  },
  {
    "id": "ch-08-q8",
    "chapterId": "ch-08",
    "chapterNumber": 8,
    "questionNumber": 8,
    "difficulty": "medium",
    "prompt": "You ___ (ought to) show more deference to your elders.",
    "promptPersian": "تو باید احترام بیشتری به بزرگان خود بگذاری.",
    "acceptedAnswers": [
      "ought to"
    ],
    "alternativeAnswers": [
      "should"
    ],
    "requiredGrammarRules": [
      "Modals, Part 1: Ability, Advice, and Necessity"
    ],
    "targetGrammarConcept": "'Ought to' expresses moral duty and ethical obligation.",
    "spellingTolerance": 2,
    "explanation": "'Ought to' expresses moral duty and ethical obligation.",
    "explanationPersian": "فعل ought to بیانگر وظیفه اخلاقی است."
  },
  {
    "id": "ch-08-q9",
    "chapterId": "ch-08",
    "chapterNumber": 8,
    "questionNumber": 9,
    "difficulty": "medium",
    "prompt": "One ___ (must not) smoke within the rare manuscript gallery.",
    "promptPersian": "هیچ‌کس نباید در نگارخانه دست‌نوشته‌های کمیاب دخانیات استعمال کند.",
    "acceptedAnswers": [
      "must not",
      "mustn't"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Modals, Part 1: Ability, Advice, and Necessity"
    ],
    "targetGrammarConcept": "'Must not' expresses strict categorical prohibition.",
    "spellingTolerance": 2,
    "explanation": "'Must not' expresses strict categorical prohibition.",
    "explanationPersian": "فعل must not بیانگر ممنوعیت صریح و قطعی است."
  },
  {
    "id": "ch-08-q10",
    "chapterId": "ch-08",
    "chapterNumber": 8,
    "questionNumber": 10,
    "difficulty": "medium",
    "prompt": "You ___ (need not / must not) copy the text; I have a printed version.",
    "promptPersian": "نیازی نیست متن را رونوشت کنی؛ من نسخه چاپی آن را دارم.",
    "acceptedAnswers": [
      "need not",
      "needn't",
      "do not need to",
      "don't need to"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Modals, Part 1: Ability, Advice, and Necessity"
    ],
    "targetGrammarConcept": "Absence of necessity expressed by 'need not'.",
    "spellingTolerance": 2,
    "explanation": "Absence of necessity expressed by 'need not'.",
    "explanationPersian": "عدم وجود ضرورت با need not بیان می‌گردد."
  },
  {
    "id": "ch-08-q11",
    "chapterId": "ch-08",
    "chapterNumber": 8,
    "questionNumber": 11,
    "difficulty": "hard",
    "prompt": "In his youth, Haim ___ (could / might) study for twelve hours without fatigue.",
    "promptPersian": "حییم در جوانی‌اش می‌توانست دوازده ساعت بدون خستگی مطالعه کند.",
    "acceptedAnswers": [
      "could"
    ],
    "alternativeAnswers": [
      "was able to"
    ],
    "requiredGrammarRules": [
      "Modals, Part 1: Ability, Advice, and Necessity"
    ],
    "targetGrammarConcept": "Past general ability takes 'could'.",
    "spellingTolerance": 1,
    "explanation": "Past general ability takes 'could'.",
    "explanationPersian": "توانایی عمومی در گذشته با could بیان می‌شود."
  },
  {
    "id": "ch-08-q12",
    "chapterId": "ch-08",
    "chapterNumber": 8,
    "questionNumber": 12,
    "difficulty": "hard",
    "prompt": "Despite the storm, the ship ___ (manage to / could) reach the haven safely.",
    "promptPersian": "به‌رغم طوفان، کشتی موفق شد به سلامت به پناهگاه برسد.",
    "acceptedAnswers": [
      "managed to",
      "was able to"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Modals, Part 1: Ability, Advice, and Necessity"
    ],
    "targetGrammarConcept": "Specific past achievement against difficulty requires 'was able to' or 'managed to'.",
    "spellingTolerance": 1,
    "explanation": "Specific past achievement against difficulty requires 'was able to' or 'managed to'.",
    "explanationPersian": "موفقیت در یک نوبت خاص در گذشته با was able to یا managed to بیان می‌شود."
  },
  {
    "id": "ch-08-q13",
    "chapterId": "ch-08",
    "chapterNumber": 8,
    "questionNumber": 13,
    "difficulty": "hard",
    "prompt": "You ___ (should not / must not) speak ill of your predecessors.",
    "promptPersian": "نباید از پیشینیان خود به بدی یاد کنی.",
    "acceptedAnswers": [
      "should not",
      "shouldn't",
      "ought not to"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Modals, Part 1: Ability, Advice, and Necessity"
    ],
    "targetGrammarConcept": "Moral counsel expressed with 'should not'.",
    "spellingTolerance": 1,
    "explanation": "Moral counsel expressed with 'should not'.",
    "explanationPersian": "نصیحت اخلاقی با should not."
  },
  {
    "id": "ch-08-q14",
    "chapterId": "ch-08",
    "chapterNumber": 8,
    "questionNumber": 14,
    "difficulty": "hard",
    "prompt": "Do we ___ (have to) purchase our own ink and pens?",
    "promptPersian": "آیا ما باید خودمان جوهر و قلم بخریم؟",
    "acceptedAnswers": [
      "have to"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Modals, Part 1: Ability, Advice, and Necessity"
    ],
    "targetGrammarConcept": "Question form of external obligation with 'do we have to'.",
    "spellingTolerance": 1,
    "explanation": "Question form of external obligation with 'do we have to'.",
    "explanationPersian": "سوالی الزام با do we have to."
  },
  {
    "id": "ch-08-q15",
    "chapterId": "ch-08",
    "chapterNumber": 8,
    "questionNumber": 15,
    "difficulty": "hard",
    "prompt": "Visitors ___ (not be allowed to) photograph the royal jewels.",
    "promptPersian": "بازدیدکنندگان اجازه ندارند از جواهرات سلطنتی عکس بگیرند.",
    "acceptedAnswers": [
      "are not allowed to",
      "aren't allowed to"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Modals, Part 1: Ability, Advice, and Necessity"
    ],
    "targetGrammarConcept": "Formal prohibition expression.",
    "spellingTolerance": 1,
    "explanation": "Formal prohibition expression.",
    "explanationPersian": "عبارت بیان ممنوعیت رسمی."
  },
  {
    "id": "ch-08-q16",
    "chapterId": "ch-08",
    "chapterNumber": 8,
    "questionNumber": 16,
    "difficulty": "advanced",
    "prompt": "He had to ___ (sell) his estate to settle the debt.",
    "promptPersian": "او مجبور شد برای تسویه بدهی املاک خود را بفروشد.",
    "acceptedAnswers": [
      "sell"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Modals, Part 1: Ability, Advice, and Necessity"
    ],
    "targetGrammarConcept": "'Had to' takes a bare infinitive.",
    "spellingTolerance": 1,
    "explanation": "'Had to' takes a bare infinitive.",
    "explanationPersian": "عبارت had to با مصدر بدون to می‌آید."
  },
  {
    "id": "ch-08-q17",
    "chapterId": "ch-08",
    "chapterNumber": 8,
    "questionNumber": 17,
    "difficulty": "advanced",
    "prompt": "We ___ (had better not) linger here after dusk.",
    "promptPersian": "بهتر است بعد از غروب در اینجا معطل نشویم.",
    "acceptedAnswers": [
      "had better not"
    ],
    "alternativeAnswers": [
      "better not"
    ],
    "requiredGrammarRules": [
      "Modals, Part 1: Ability, Advice, and Necessity"
    ],
    "targetGrammarConcept": "Negative form of 'had better' is 'had better not'.",
    "spellingTolerance": 1,
    "explanation": "Negative form of 'had better' is 'had better not'.",
    "explanationPersian": "منفی had better به صورت had better not است."
  },
  {
    "id": "ch-08-q18",
    "chapterId": "ch-08",
    "chapterNumber": 8,
    "questionNumber": 18,
    "difficulty": "advanced",
    "prompt": "Children ___ (must) be taught the fundamentals of grammar early.",
    "promptPersian": "کودکان باید از ابتدا با مبانی دستور زبان آشنا شوند.",
    "acceptedAnswers": [
      "must",
      "should"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Modals, Part 1: Ability, Advice, and Necessity"
    ],
    "targetGrammarConcept": "Educational necessity.",
    "spellingTolerance": 1,
    "explanation": "Educational necessity.",
    "explanationPersian": "بیان ضرورت آموزشی."
  },
  {
    "id": "ch-08-q19",
    "chapterId": "ch-08",
    "chapterNumber": 8,
    "questionNumber": 19,
    "difficulty": "advanced",
    "prompt": "Could you ___ (clarify) that phonetic rule for me?",
    "promptPersian": "آیا ممکن است آن قاعده آوایی را برای من روشن سازید؟",
    "acceptedAnswers": [
      "clarify"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Modals, Part 1: Ability, Advice, and Necessity"
    ],
    "targetGrammarConcept": "Polite request using modal auxiliary.",
    "spellingTolerance": 1,
    "explanation": "Polite request using modal auxiliary.",
    "explanationPersian": "خواهش مودبانه با فعل کمکی could."
  },
  {
    "id": "ch-08-q20",
    "chapterId": "ch-08",
    "chapterNumber": 8,
    "questionNumber": 20,
    "difficulty": "advanced",
    "prompt": "Rewrite using 'ought': 'You should apologize.' -> 'You ___ apologize.'",
    "promptPersian": "با ought بازنویسی کنید: «تو باید عذرخواهی کنی.»",
    "acceptedAnswers": [
      "ought to"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Modals, Part 1: Ability, Advice, and Necessity"
    ],
    "targetGrammarConcept": "'Ought' must always be followed by 'to'.",
    "spellingTolerance": 1,
    "explanation": "'Ought' must always be followed by 'to'.",
    "explanationPersian": "فعل ought همواره همراه با to به کار می‌رود."
  },
  {
    "id": "ch-09-q1",
    "chapterId": "ch-09",
    "chapterNumber": 9,
    "questionNumber": 1,
    "difficulty": "easy",
    "prompt": "The lights are extinguished in his study; he ___ (must be / can't be) asleep.",
    "promptPersian": "چراغ‌ها در اتاق کارش خاموش است؛ او حتماً خوابیده است.",
    "acceptedAnswers": [
      "must be"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Modals, Part 2: Degrees of Certainty and Past Modals"
    ],
    "targetGrammarConcept": "Logical deduction with 95% certainty in the present.",
    "spellingTolerance": 2,
    "explanation": "Logical deduction with 95% certainty in the present.",
    "explanationPersian": "استنتاج منطقی با درصد اطمینان بالا در زمان حال."
  },
  {
    "id": "ch-09-q2",
    "chapterId": "ch-09",
    "chapterNumber": 9,
    "questionNumber": 2,
    "difficulty": "easy",
    "prompt": "He has not arrived yet; he ___ (might have) missed the train.",
    "promptPersian": "او هنوز نرسیده است؛ ممکن است از قطار جا مانده باشد.",
    "acceptedAnswers": [
      "might have",
      "could have",
      "may have"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Modals, Part 2: Degrees of Certainty and Past Modals"
    ],
    "targetGrammarConcept": "Past possibility based on uncertain evidence.",
    "spellingTolerance": 2,
    "explanation": "Past possibility based on uncertain evidence.",
    "explanationPersian": "احتمال گذشته بر اساس شواهد موجود."
  },
  {
    "id": "ch-09-q3",
    "chapterId": "ch-09",
    "chapterNumber": 9,
    "questionNumber": 3,
    "difficulty": "easy",
    "prompt": "You ___ (should have) told me about the error earlier!",
    "promptPersian": "باید زودتر درباره آن خطا به من می‌گفتی!",
    "acceptedAnswers": [
      "should have"
    ],
    "alternativeAnswers": [
      "ought to have"
    ],
    "requiredGrammarRules": [
      "Modals, Part 2: Degrees of Certainty and Past Modals"
    ],
    "targetGrammarConcept": "Past regret or criticism of an unperformed action.",
    "spellingTolerance": 2,
    "explanation": "Past regret or criticism of an unperformed action.",
    "explanationPersian": "انتقاد یا حسرت از کاری که باید در گذشته انجام می‌شد."
  },
  {
    "id": "ch-09-q4",
    "chapterId": "ch-09",
    "chapterNumber": 9,
    "questionNumber": 4,
    "difficulty": "easy",
    "prompt": "The door was locked from inside; the thief ___ (cannot have / must not have) entered through it.",
    "promptPersian": "در از داخل قفل بود؛ دزد نمی‌توانسته از آن وارد شده باشد.",
    "acceptedAnswers": [
      "cannot have",
      "can't have",
      "could not have"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Modals, Part 2: Degrees of Certainty and Past Modals"
    ],
    "targetGrammarConcept": "Logical impossibility in the past requires 'cannot have + V3'.",
    "spellingTolerance": 2,
    "explanation": "Logical impossibility in the past requires 'cannot have + V3'.",
    "explanationPersian": "عدم امکان منطقی در گذشته با cannot have بیان می‌شود."
  },
  {
    "id": "ch-09-q5",
    "chapterId": "ch-09",
    "chapterNumber": 9,
    "questionNumber": 5,
    "difficulty": "easy",
    "prompt": "He was not in his chamber; where ___ (could he have gone)?",
    "promptPersian": "او در اتاقش نبود؛ کجا ممکن بود رفته باشد؟",
    "acceptedAnswers": [
      "could he have gone"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Modals, Part 2: Degrees of Certainty and Past Modals"
    ],
    "targetGrammarConcept": "Past speculation in question form.",
    "spellingTolerance": 2,
    "explanation": "Past speculation in question form.",
    "explanationPersian": "حدس و پرسش درباره گذشته."
  },
  {
    "id": "ch-09-q6",
    "chapterId": "ch-09",
    "chapterNumber": 9,
    "questionNumber": 6,
    "difficulty": "medium",
    "prompt": "The manuscript is missing; someone ___ (must have taken) it.",
    "promptPersian": "دست‌نوشته گم شده است؛ کسی حتماً آن را برداشته است.",
    "acceptedAnswers": [
      "must have taken"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Modals, Part 2: Degrees of Certainty and Past Modals"
    ],
    "targetGrammarConcept": "Deduction of high certainty about past action.",
    "spellingTolerance": 2,
    "explanation": "Deduction of high certainty about past action.",
    "explanationPersian": "استنتاج با اطمینان بالا درباره رویدادی در گذشته."
  },
  {
    "id": "ch-09-q7",
    "chapterId": "ch-09",
    "chapterNumber": 9,
    "questionNumber": 7,
    "difficulty": "medium",
    "prompt": "I ___ (would rather) read poetry than study financial tables.",
    "promptPersian": "ترجیح می‌دهم شعر بخوانم تا جدول‌های مالی مطالعه کنم.",
    "acceptedAnswers": [
      "would rather",
      "'d rather"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Modals, Part 2: Degrees of Certainty and Past Modals"
    ],
    "targetGrammarConcept": "Preference expressed with 'would rather + bare verb'.",
    "spellingTolerance": 2,
    "explanation": "Preference expressed with 'would rather + bare verb'.",
    "explanationPersian": "بیان ترجیح با would rather و فعل ساده."
  },
  {
    "id": "ch-09-q8",
    "chapterId": "ch-09",
    "chapterNumber": 9,
    "questionNumber": 8,
    "difficulty": "medium",
    "prompt": "She would rather have ___ (stay) in Tehran during the winter.",
    "promptPersian": "او ترجیح می‌داد در طول زمستان در تهران مانده بود.",
    "acceptedAnswers": [
      "stayed"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Modals, Part 2: Degrees of Certainty and Past Modals"
    ],
    "targetGrammarConcept": "Past unfulfilled preference takes 'would rather have + V3'.",
    "spellingTolerance": 2,
    "explanation": "Past unfulfilled preference takes 'would rather have + V3'.",
    "explanationPersian": "ترجیح گذشته با would rather have و قسمت سوم فعل."
  },
  {
    "id": "ch-09-q9",
    "chapterId": "ch-09",
    "chapterNumber": 9,
    "questionNumber": 9,
    "difficulty": "medium",
    "prompt": "They ___ (might not have) received the dispatch in time.",
    "promptPersian": "ممکن است آن‌ها نامه را به موقع دریافت نکرده باشند.",
    "acceptedAnswers": [
      "might not have",
      "may not have"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Modals, Part 2: Degrees of Certainty and Past Modals"
    ],
    "targetGrammarConcept": "Negative past possibility.",
    "spellingTolerance": 2,
    "explanation": "Negative past possibility.",
    "explanationPersian": "احتمال منفی در زمان گذشته."
  },
  {
    "id": "ch-09-q10",
    "chapterId": "ch-09",
    "chapterNumber": 9,
    "questionNumber": 10,
    "difficulty": "medium",
    "prompt": "You ___ (had better have) finished before the inspector arrived.",
    "promptPersian": "بهتر می‌بود کار را پیش از آمدن بازرس تمام کرده بودی.",
    "acceptedAnswers": [
      "had better have"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Modals, Part 2: Degrees of Certainty and Past Modals"
    ],
    "targetGrammarConcept": "Rare past counsel form.",
    "spellingTolerance": 2,
    "explanation": "Rare past counsel form.",
    "explanationPersian": "شکل بیان نصیحت برای گذشته."
  },
  {
    "id": "ch-09-q11",
    "chapterId": "ch-09",
    "chapterNumber": 9,
    "questionNumber": 11,
    "difficulty": "hard",
    "prompt": "He speaks flawless Persian; he ___ (must have lived) in Iran for years.",
    "promptPersian": "او فارسی بی‌نقص صحبت می‌کند؛ حتماً سال‌ها در ایران زندگی کرده است.",
    "acceptedAnswers": [
      "must have lived"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Modals, Part 2: Degrees of Certainty and Past Modals"
    ],
    "targetGrammarConcept": "Certain deduction based on present fluency.",
    "spellingTolerance": 1,
    "explanation": "Certain deduction based on present fluency.",
    "explanationPersian": "استنتاج قطعی گذشته بر مبنای مهارت کنونی."
  },
  {
    "id": "ch-09-q12",
    "chapterId": "ch-09",
    "chapterNumber": 9,
    "questionNumber": 12,
    "difficulty": "hard",
    "prompt": "The messenger ___ (could have delivered) the parcel, but he neglected to do so.",
    "promptPersian": "قاصد می‌توانست بسته را تحویل دهد، اما کوتاهی کرد.",
    "acceptedAnswers": [
      "could have delivered"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Modals, Part 2: Degrees of Certainty and Past Modals"
    ],
    "targetGrammarConcept": "Unfulfilled past ability or opportunity.",
    "spellingTolerance": 1,
    "explanation": "Unfulfilled past ability or opportunity.",
    "explanationPersian": "توانایی انجام کار در گذشته که از دست رفته است."
  },
  {
    "id": "ch-09-q13",
    "chapterId": "ch-09",
    "chapterNumber": 9,
    "questionNumber": 13,
    "difficulty": "hard",
    "prompt": "He ___ (must not / cannot) be the culprit; he was abroad.",
    "promptPersian": "او نمی‌تواند مقصر باشد؛ او در خارج از کشور بود.",
    "acceptedAnswers": [
      "cannot",
      "can't"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Modals, Part 2: Degrees of Certainty and Past Modals"
    ],
    "targetGrammarConcept": "Present impossibility deduction.",
    "spellingTolerance": 1,
    "explanation": "Present impossibility deduction.",
    "explanationPersian": "عدم امکان منطقی در حال حاضر."
  },
  {
    "id": "ch-09-q14",
    "chapterId": "ch-09",
    "chapterNumber": 9,
    "questionNumber": 14,
    "difficulty": "hard",
    "prompt": "You ___ (ought to have) acknowledged his assistance.",
    "promptPersian": "شما می‌بایست از کمک او قدردانی می‌کردید.",
    "acceptedAnswers": [
      "ought to have"
    ],
    "alternativeAnswers": [
      "should have"
    ],
    "requiredGrammarRules": [
      "Modals, Part 2: Degrees of Certainty and Past Modals"
    ],
    "targetGrammarConcept": "Moral obligation unfulfilled in the past.",
    "spellingTolerance": 1,
    "explanation": "Moral obligation unfulfilled in the past.",
    "explanationPersian": "تعهد اخلاقی انجام‌نشده در گذشته."
  },
  {
    "id": "ch-09-q15",
    "chapterId": "ch-09",
    "chapterNumber": 9,
    "questionNumber": 15,
    "difficulty": "hard",
    "prompt": "They ___ (may be) waiting in the vestibule right now.",
    "promptPersian": "آن‌ها ممکن است هم‌اکنون در راهرو منتظر باشند.",
    "acceptedAnswers": [
      "may be",
      "might be"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Modals, Part 2: Degrees of Certainty and Past Modals"
    ],
    "targetGrammarConcept": "Present uncertainty (50% probability).",
    "spellingTolerance": 1,
    "explanation": "Present uncertainty (50% probability).",
    "explanationPersian": "تردید و احتمال ۵۰ درصدی در زمان حال."
  },
  {
    "id": "ch-09-q16",
    "chapterId": "ch-09",
    "chapterNumber": 9,
    "questionNumber": 16,
    "difficulty": "advanced",
    "prompt": "She walked past without speaking; she ___ (must not have seen) us.",
    "promptPersian": "او بدون صحبت عبور کرد؛ حتماً ما را ندیده بود.",
    "acceptedAnswers": [
      "must not have seen",
      "can't have seen"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Modals, Part 2: Degrees of Certainty and Past Modals"
    ],
    "targetGrammarConcept": "Deduction about a negative past reality.",
    "spellingTolerance": 1,
    "explanation": "Deduction about a negative past reality.",
    "explanationPersian": "استنتاج درباره رخ ندادن کاری در گذشته."
  },
  {
    "id": "ch-09-q17",
    "chapterId": "ch-09",
    "chapterNumber": 9,
    "questionNumber": 17,
    "difficulty": "advanced",
    "prompt": "I ___ (would rather not) discuss this private matter publicly.",
    "promptPersian": "ترجیح می‌دهم این موضوع خصوصی را در ملأ عام مطرح نکنم.",
    "acceptedAnswers": [
      "would rather not",
      "'d rather not"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Modals, Part 2: Degrees of Certainty and Past Modals"
    ],
    "targetGrammarConcept": "Negative preference with 'would rather not'.",
    "spellingTolerance": 1,
    "explanation": "Negative preference with 'would rather not'.",
    "explanationPersian": "منفی کردن عبارت ترجیحی would rather."
  },
  {
    "id": "ch-09-q18",
    "chapterId": "ch-09",
    "chapterNumber": 9,
    "questionNumber": 18,
    "difficulty": "advanced",
    "prompt": "The ship ___ (must have encountered) rough waters during the storm.",
    "promptPersian": "کشتی حتماً در طول طوفان با امواج سهمگینی مواجه شده است.",
    "acceptedAnswers": [
      "must have encountered"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Modals, Part 2: Degrees of Certainty and Past Modals"
    ],
    "targetGrammarConcept": "High certainty deduction about past physical event.",
    "spellingTolerance": 1,
    "explanation": "High certainty deduction about past physical event.",
    "explanationPersian": "استنتاج با ضریب اطمینان بالا درباره رویداد گذشته."
  },
  {
    "id": "ch-09-q19",
    "chapterId": "ch-09",
    "chapterNumber": 9,
    "questionNumber": 19,
    "difficulty": "advanced",
    "prompt": "Why didn't you ask for help? I ___ (would have helped) you.",
    "promptPersian": "چرا کمک نخواستی؟ من کمکت می‌کردم.",
    "acceptedAnswers": [
      "would have helped",
      "'d have helped"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Modals, Part 2: Degrees of Certainty and Past Modals"
    ],
    "targetGrammarConcept": "Past willingness that did not occur.",
    "spellingTolerance": 1,
    "explanation": "Past willingness that did not occur.",
    "explanationPersian": "ابراز آمادگی برای انجام کاری در گذشته."
  },
  {
    "id": "ch-09-q20",
    "chapterId": "ch-09",
    "chapterNumber": 9,
    "questionNumber": 20,
    "difficulty": "advanced",
    "prompt": "Complete: 'He was so pale; he ___ (must have been) terrified.'",
    "promptPersian": "کامل کنید: «او بسیار رنگ‌پریده بود؛ حتماً وحشت‌زده شده بود.»",
    "acceptedAnswers": [
      "must have been"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Modals, Part 2: Degrees of Certainty and Past Modals"
    ],
    "targetGrammarConcept": "Logical deduction about emotional state in the past.",
    "spellingTolerance": 1,
    "explanation": "Logical deduction about emotional state in the past.",
    "explanationPersian": "استنتاج درباره وضعیت روحی در گذشته بر اساس رنگ‌پریدگی."
  },
  {
    "id": "ch-10-q1",
    "chapterId": "ch-10",
    "chapterNumber": 10,
    "questionNumber": 1,
    "difficulty": "easy",
    "prompt": "The first Persian grammar in English ___ (write) by William Jones.",
    "promptPersian": "نخستین دستور زبان فارسی به انگلیسی توسط ویلیام جونز نوشته شد.",
    "acceptedAnswers": [
      "was written"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "The Passive Voice"
    ],
    "targetGrammarConcept": "Simple past passive with singular subject.",
    "spellingTolerance": 2,
    "explanation": "Simple past passive with singular subject.",
    "explanationPersian": "گذشته ساده مجهول با فاعل مفرد."
  },
  {
    "id": "ch-10-q2",
    "chapterId": "ch-10",
    "chapterNumber": 10,
    "questionNumber": 2,
    "difficulty": "easy",
    "prompt": "The letters ___ (deliver) every morning at dawn.",
    "promptPersian": "نامه‌ها هر روز صبح هنگام سپیده‌دم تحویل داده می‌شوند.",
    "acceptedAnswers": [
      "are delivered"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "The Passive Voice"
    ],
    "targetGrammarConcept": "Simple present passive for routine action.",
    "spellingTolerance": 2,
    "explanation": "Simple present passive for routine action.",
    "explanationPersian": "حال ساده مجهول برای کارهای روتین."
  },
  {
    "id": "ch-10-q3",
    "chapterId": "ch-10",
    "chapterNumber": 10,
    "questionNumber": 3,
    "difficulty": "easy",
    "prompt": "A new edition ___ (currently prepare) by the editorial board.",
    "promptPersian": "چاپ جدیدی هم‌اکنون توسط هیئت تحریریه در دست آماده‌سازی است.",
    "acceptedAnswers": [
      "is currently being prepared",
      "is being prepared"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "The Passive Voice"
    ],
    "targetGrammarConcept": "Present progressive passive.",
    "spellingTolerance": 2,
    "explanation": "Present progressive passive.",
    "explanationPersian": "حال استمراری مجهول برای کاری که اکنون در جریان است."
  },
  {
    "id": "ch-10-q4",
    "chapterId": "ch-10",
    "chapterNumber": 10,
    "questionNumber": 4,
    "difficulty": "easy",
    "prompt": "The ancient decree ___ (proclaim) by the king in 1906.",
    "promptPersian": "فرمان مشروطیت در سال ۱۹۰۶ توسط شاه اعلام شد.",
    "acceptedAnswers": [
      "was proclaimed"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "The Passive Voice"
    ],
    "targetGrammarConcept": "Historical past passive.",
    "spellingTolerance": 2,
    "explanation": "Historical past passive.",
    "explanationPersian": "گذشته ساده مجهول در زمینه وقایع تاریخی."
  },
  {
    "id": "ch-10-q5",
    "chapterId": "ch-10",
    "chapterNumber": 10,
    "questionNumber": 5,
    "difficulty": "easy",
    "prompt": "All errata must ___ (correct) before the final printing.",
    "promptPersian": "تمام غلط‌های چاپی باید پیش از چاپ نهایی اصلاح شوند.",
    "acceptedAnswers": [
      "be corrected"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "The Passive Voice"
    ],
    "targetGrammarConcept": "Modal passive: modal + be + past participle.",
    "spellingTolerance": 2,
    "explanation": "Modal passive: modal + be + past participle.",
    "explanationPersian": "مجهول افعال وجهی: modal + be + V3."
  },
  {
    "id": "ch-10-q6",
    "chapterId": "ch-10",
    "chapterNumber": 10,
    "questionNumber": 6,
    "difficulty": "medium",
    "prompt": "The bridge ___ (destroy) by the flood before help arrived.",
    "promptPersian": "پل پیش از رسیدن کمک توسط سیل ویران شده بود.",
    "acceptedAnswers": [
      "had been destroyed"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "The Passive Voice"
    ],
    "targetGrammarConcept": "Past perfect passive.",
    "spellingTolerance": 2,
    "explanation": "Past perfect passive.",
    "explanationPersian": "ماضی بعید مجهول."
  },
  {
    "id": "ch-10-q7",
    "chapterId": "ch-10",
    "chapterNumber": 10,
    "questionNumber": 7,
    "difficulty": "medium",
    "prompt": "It is ___ (believe) that the author was fluent in seven tongues.",
    "promptPersian": "اعتقاد بر این است که نویسنده به هفت زبان مسلط بوده است.",
    "acceptedAnswers": [
      "believed",
      "said",
      "reported"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "The Passive Voice"
    ],
    "targetGrammarConcept": "Impersonal passive reporting structure.",
    "spellingTolerance": 2,
    "explanation": "Impersonal passive reporting structure.",
    "explanationPersian": "ساختار مجهول غیرشخصی گزارش‌دهی."
  },
  {
    "id": "ch-10-q8",
    "chapterId": "ch-10",
    "chapterNumber": 10,
    "questionNumber": 8,
    "difficulty": "medium",
    "prompt": "The gates ___ (lock) by the sentry at sunset.",
    "promptPersian": "دروازه‌ها هنگام غروب آفتاب توسط نگهبان قفل می‌شوند.",
    "acceptedAnswers": [
      "are locked",
      "were locked"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "The Passive Voice"
    ],
    "targetGrammarConcept": "Passive voice with agent introduced by 'by'.",
    "spellingTolerance": 2,
    "explanation": "Passive voice with agent introduced by 'by'.",
    "explanationPersian": "حالت مجهول با ذکر فاعل توسط حرف اضافه by."
  },
  {
    "id": "ch-10-q9",
    "chapterId": "ch-10",
    "chapterNumber": 10,
    "questionNumber": 9,
    "difficulty": "medium",
    "prompt": "The book ___ (translate) into Persian in 2004.",
    "promptPersian": "این کتاب در سال ۲۰۰۴ به زبان فارسی ترجمه شد.",
    "acceptedAnswers": [
      "was translated"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "The Passive Voice"
    ],
    "targetGrammarConcept": "Simple past passive.",
    "spellingTolerance": 2,
    "explanation": "Simple past passive.",
    "explanationPersian": "گذشته ساده مجهول."
  },
  {
    "id": "ch-10-q10",
    "chapterId": "ch-10",
    "chapterNumber": 10,
    "questionNumber": 10,
    "difficulty": "medium",
    "prompt": "Special care must ___ (take) when handling fragile parchment.",
    "promptPersian": "هنگام کار با پوست‌نوشته‌های شکننده باید دقت ویژه‌ای مبذول شود.",
    "acceptedAnswers": [
      "be taken"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "The Passive Voice"
    ],
    "targetGrammarConcept": "Modal passive with 'must be taken'.",
    "spellingTolerance": 2,
    "explanation": "Modal passive with 'must be taken'.",
    "explanationPersian": "مجهول فعل وجهی must."
  },
  {
    "id": "ch-10-q11",
    "chapterId": "ch-10",
    "chapterNumber": 10,
    "questionNumber": 11,
    "difficulty": "hard",
    "prompt": "The lexicon ___ (rejuvenate) in the new impression.",
    "promptPersian": "این لغت‌نامه در چاپ جدید بازآفرینی و تجدید حیات شد.",
    "acceptedAnswers": [
      "was rejuvenated",
      "has been rejuvenated"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "The Passive Voice"
    ],
    "targetGrammarConcept": "Passive of rejuvenation.",
    "spellingTolerance": 1,
    "explanation": "Passive of rejuvenation.",
    "explanationPersian": "حالت مجهول برای توصیف نوآوری اثر."
  },
  {
    "id": "ch-10-q12",
    "chapterId": "ch-10",
    "chapterNumber": 10,
    "questionNumber": 12,
    "difficulty": "hard",
    "prompt": "The thief was seen ___ (climb) over the wall.",
    "promptPersian": "دزد در حال بالا رفتن از دیوار دیده شد.",
    "acceptedAnswers": [
      "climbing",
      "to climb"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "The Passive Voice"
    ],
    "targetGrammarConcept": "Passive of sensory perception verb.",
    "spellingTolerance": 1,
    "explanation": "Passive of sensory perception verb.",
    "explanationPersian": "مجهول افعال حسی همراه با وجه وصفی یا مصدر."
  },
  {
    "id": "ch-10-q13",
    "chapterId": "ch-10",
    "chapterNumber": 10,
    "questionNumber": 13,
    "difficulty": "hard",
    "prompt": "He hates being ___ (tell) what to do.",
    "promptPersian": "او از اینکه به او بگویند چه کار کند متنفر است.",
    "acceptedAnswers": [
      "told"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "The Passive Voice"
    ],
    "targetGrammarConcept": "Passive gerund: being + past participle.",
    "spellingTolerance": 1,
    "explanation": "Passive gerund: being + past participle.",
    "explanationPersian": "اسم مصدر مجهول: being + V3."
  },
  {
    "id": "ch-10-q14",
    "chapterId": "ch-10",
    "chapterNumber": 10,
    "questionNumber": 14,
    "difficulty": "hard",
    "prompt": "The fortress had never ___ (conquer) in battle.",
    "promptPersian": "این قلعه هرگز در نبردی فتح نشده بود.",
    "acceptedAnswers": [
      "been conquered"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "The Passive Voice"
    ],
    "targetGrammarConcept": "Past perfect passive with negative.",
    "spellingTolerance": 1,
    "explanation": "Past perfect passive with negative.",
    "explanationPersian": "ماضی بعید مجهول با never."
  },
  {
    "id": "ch-10-q15",
    "chapterId": "ch-10",
    "chapterNumber": 10,
    "questionNumber": 15,
    "difficulty": "hard",
    "prompt": "A golden watch was ___ (give) to him upon his retirement.",
    "promptPersian": "در هنگام بازنشستگی یک ساعت طلا به او داده شد.",
    "acceptedAnswers": [
      "given"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "The Passive Voice"
    ],
    "targetGrammarConcept": "Passive of ditransitive verb (give).",
    "spellingTolerance": 1,
    "explanation": "Passive of ditransitive verb (give).",
    "explanationPersian": "مجهول فعل دوعاملی give."
  },
  {
    "id": "ch-10-q16",
    "chapterId": "ch-10",
    "chapterNumber": 10,
    "questionNumber": 16,
    "difficulty": "advanced",
    "prompt": "The manuscript is said ___ (belong) to the royal family.",
    "promptPersian": "گفته می‌شود این دست‌نوشته متعلق به خانواده سلطنتی است.",
    "acceptedAnswers": [
      "to belong"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "The Passive Voice"
    ],
    "targetGrammarConcept": "Impersonal reporting passive with infinitive.",
    "spellingTolerance": 1,
    "explanation": "Impersonal reporting passive with infinitive.",
    "explanationPersian": "نقل قول مجهول با ساختار مصدر to."
  },
  {
    "id": "ch-10-q17",
    "chapterId": "ch-10",
    "chapterNumber": 10,
    "questionNumber": 17,
    "difficulty": "advanced",
    "prompt": "The new hospital ___ (build) next year.",
    "promptPersian": "بیمارستان جدید سال آینده ساخته خواهد شد.",
    "acceptedAnswers": [
      "will be built"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "The Passive Voice"
    ],
    "targetGrammarConcept": "Future passive with 'will be built'.",
    "spellingTolerance": 1,
    "explanation": "Future passive with 'will be built'.",
    "explanationPersian": "آینده ساده مجهول."
  },
  {
    "id": "ch-10-q18",
    "chapterId": "ch-10",
    "chapterNumber": 10,
    "questionNumber": 18,
    "difficulty": "advanced",
    "prompt": "No letters were ___ (receive) this morning.",
    "promptPersian": "امروز صبح هیچ نامه‌ای دریافت نشد.",
    "acceptedAnswers": [
      "received"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "The Passive Voice"
    ],
    "targetGrammarConcept": "Negative past passive.",
    "spellingTolerance": 1,
    "explanation": "Negative past passive.",
    "explanationPersian": "منفی گذشته مجهول."
  },
  {
    "id": "ch-10-q19",
    "chapterId": "ch-10",
    "chapterNumber": 10,
    "questionNumber": 19,
    "difficulty": "advanced",
    "prompt": "Change to passive: 'Haim compiled the dictionary.' -> 'The dictionary ___ by Haim.'",
    "promptPersian": "به مجهول تبدیل کنید: «حییم فرهنگ را گردآوری کرد.»",
    "acceptedAnswers": [
      "was compiled"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "The Passive Voice"
    ],
    "targetGrammarConcept": "Passive transformation of simple past.",
    "spellingTolerance": 1,
    "explanation": "Passive transformation of simple past.",
    "explanationPersian": "تبدیل جمله گذشته معلوم به مجهول."
  },
  {
    "id": "ch-10-q20",
    "chapterId": "ch-10",
    "chapterNumber": 10,
    "questionNumber": 20,
    "difficulty": "advanced",
    "prompt": "Complete: 'The truth can no longer ___ (conceal).'",
    "promptPersian": "کامل کنید: «حقیقت دیگر نمی‌تواند پنهان بماند.»",
    "acceptedAnswers": [
      "be concealed"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "The Passive Voice"
    ],
    "targetGrammarConcept": "Modal passive with negative adverbial.",
    "spellingTolerance": 1,
    "explanation": "Modal passive with negative adverbial.",
    "explanationPersian": "مجهول وجهی همراه با can be V3."
  },
  {
    "id": "ch-11-q1",
    "chapterId": "ch-11",
    "chapterNumber": 11,
    "questionNumber": 1,
    "difficulty": "easy",
    "prompt": "I do not know ___ (where did he go / where he went).",
    "promptPersian": "نمی‌دانم او کجا رفت.",
    "acceptedAnswers": [
      "where he went"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Noun Clauses"
    ],
    "targetGrammarConcept": "Embedded noun clause maintains normal statement word order.",
    "spellingTolerance": 2,
    "explanation": "Embedded noun clause maintains normal statement word order.",
    "explanationPersian": "بند اسمی درونی ترتیب خبری (فاعل + فعل) را حفظ می‌کند."
  },
  {
    "id": "ch-11-q2",
    "chapterId": "ch-11",
    "chapterNumber": 11,
    "questionNumber": 2,
    "difficulty": "easy",
    "prompt": "It is essential that he ___ (be) informed immediately.",
    "promptPersian": "ضروری است که او فوراً در جریان قرار گیرد.",
    "acceptedAnswers": [
      "be"
    ],
    "alternativeAnswers": [
      "is"
    ],
    "requiredGrammarRules": [
      "Noun Clauses"
    ],
    "targetGrammarConcept": "Subjunctive mood in noun clause after expressions of urgency.",
    "spellingTolerance": 2,
    "explanation": "Subjunctive mood in noun clause after expressions of urgency.",
    "explanationPersian": "وجه التزامی (شکل ساده فعل) پس از عبارات بیان ضرورت."
  },
  {
    "id": "ch-11-q3",
    "chapterId": "ch-11",
    "chapterNumber": 11,
    "questionNumber": 3,
    "difficulty": "easy",
    "prompt": "She wondered ___ (whether) the manuscript was authentic.",
    "promptPersian": "او در شگفت بود که آیا دست‌نوشته اصیل است یا خیر.",
    "acceptedAnswers": [
      "whether",
      "if"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Noun Clauses"
    ],
    "targetGrammarConcept": "Noun clause expressing doubt introduced by 'whether' or 'if'.",
    "spellingTolerance": 2,
    "explanation": "Noun clause expressing doubt introduced by 'whether' or 'if'.",
    "explanationPersian": "بند اسمی بیانگر تردید با whether یا if."
  },
  {
    "id": "ch-11-q4",
    "chapterId": "ch-11",
    "chapterNumber": 11,
    "questionNumber": 4,
    "difficulty": "easy",
    "prompt": "___ (That) the earth revolves around the sun is indisputable.",
    "promptPersian": "اینکه زمین به دور خورشید می‌چرخد تردیدناپذیر است.",
    "acceptedAnswers": [
      "That"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Noun Clauses"
    ],
    "targetGrammarConcept": "Noun clause introduced by 'that' functioning as the sentence subject.",
    "spellingTolerance": 2,
    "explanation": "Noun clause introduced by 'that' functioning as the sentence subject.",
    "explanationPersian": "بند اسمی با that در جایگاه فاعل جمله."
  },
  {
    "id": "ch-11-q5",
    "chapterId": "ch-11",
    "chapterNumber": 11,
    "questionNumber": 5,
    "difficulty": "easy",
    "prompt": "He asked me what time ___ (it was / was it).",
    "promptPersian": "او از من پرسید ساعت چند بود.",
    "acceptedAnswers": [
      "it was"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Noun Clauses"
    ],
    "targetGrammarConcept": "Embedded indirect question retains subject + verb order.",
    "spellingTolerance": 2,
    "explanation": "Embedded indirect question retains subject + verb order.",
    "explanationPersian": "سوال غیرمستقیم ترتیب فاعل + فعل را رعایت می‌کند."
  },
  {
    "id": "ch-11-q6",
    "chapterId": "ch-11",
    "chapterNumber": 11,
    "questionNumber": 6,
    "difficulty": "medium",
    "prompt": "The committee recommended that the proposal ___ (accept).",
    "promptPersian": "کمیته توصیه کرد که پیشنهاد پذیرفته شود.",
    "acceptedAnswers": [
      "be accepted"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Noun Clauses"
    ],
    "targetGrammarConcept": "Passive subjunctive in noun clause following 'recommend'.",
    "spellingTolerance": 2,
    "explanation": "Passive subjunctive in noun clause following 'recommend'.",
    "explanationPersian": "وجه التزامی مجهول پس از فعل recommend."
  },
  {
    "id": "ch-11-q7",
    "chapterId": "ch-11",
    "chapterNumber": 11,
    "questionNumber": 7,
    "difficulty": "medium",
    "prompt": "I cannot fathom why ___ (she resigned / did she resign).",
    "promptPersian": "نمی‌توانم درک کنم چرا او استعفا داد.",
    "acceptedAnswers": [
      "she resigned"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Noun Clauses"
    ],
    "targetGrammarConcept": "Noun clause after 'fathom' requires statement order.",
    "spellingTolerance": 2,
    "explanation": "Noun clause after 'fathom' requires statement order.",
    "explanationPersian": "بند اسمی پس از fathom ترتیب خبری می‌گیرد."
  },
  {
    "id": "ch-11-q8",
    "chapterId": "ch-11",
    "chapterNumber": 11,
    "questionNumber": 8,
    "difficulty": "medium",
    "prompt": "Tell me ___ (who) wrote this anonymous preface.",
    "promptPersian": "به من بگو چه کسی این مقدمه ناشناس را نوشته است.",
    "acceptedAnswers": [
      "who"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Noun Clauses"
    ],
    "targetGrammarConcept": "Noun clause question word acting as subject.",
    "spellingTolerance": 2,
    "explanation": "Noun clause question word acting as subject.",
    "explanationPersian": "کلمه پرسشی who در جایگاه فاعل بند اسمی."
  },
  {
    "id": "ch-11-q9",
    "chapterId": "ch-11",
    "chapterNumber": 11,
    "questionNumber": 9,
    "difficulty": "medium",
    "prompt": "We debated whether we ___ (should stay) or leave.",
    "promptPersian": "ما بحث کردیم که آیا باید بمانیم یا برویم.",
    "acceptedAnswers": [
      "should stay",
      "stayed"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Noun Clauses"
    ],
    "targetGrammarConcept": "Noun clause following 'whether'.",
    "spellingTolerance": 2,
    "explanation": "Noun clause following 'whether'.",
    "explanationPersian": "بند اسمی پس از whether."
  },
  {
    "id": "ch-11-q10",
    "chapterId": "ch-11",
    "chapterNumber": 11,
    "questionNumber": 10,
    "difficulty": "medium",
    "prompt": "His main concern was ___ (that) the deadline might pass.",
    "promptPersian": "نگرانی اصلی او این بود که مبادا مهلت به پایان رسد.",
    "acceptedAnswers": [
      "that"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Noun Clauses"
    ],
    "targetGrammarConcept": "Noun clause functioning as subject complement.",
    "spellingTolerance": 2,
    "explanation": "Noun clause functioning as subject complement.",
    "explanationPersian": "بند اسمی در جایگاه متمم فاعلی با that."
  },
  {
    "id": "ch-11-q11",
    "chapterId": "ch-11",
    "chapterNumber": 11,
    "questionNumber": 11,
    "difficulty": "hard",
    "prompt": "I am uncertain about ___ (what to do / what should I do).",
    "promptPersian": "درباره اینکه چه باید کرد نامطمئنم.",
    "acceptedAnswers": [
      "what to do"
    ],
    "alternativeAnswers": [
      "what I should do"
    ],
    "requiredGrammarRules": [
      "Noun Clauses"
    ],
    "targetGrammarConcept": "Infinitival noun phrase following preposition.",
    "spellingTolerance": 1,
    "explanation": "Infinitival noun phrase following preposition.",
    "explanationPersian": "عبارت اسمی مصدری پس از حرف اضافه."
  },
  {
    "id": "ch-11-q12",
    "chapterId": "ch-11",
    "chapterNumber": 11,
    "questionNumber": 12,
    "difficulty": "hard",
    "prompt": "The magistrate demanded that the prisoner ___ (stand).",
    "promptPersian": "قاضی دستور داد که زندانی بایستد.",
    "acceptedAnswers": [
      "stand"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Noun Clauses"
    ],
    "targetGrammarConcept": "Mandative subjunctive with base verb 'stand'.",
    "spellingTolerance": 1,
    "explanation": "Mandative subjunctive with base verb 'stand'.",
    "explanationPersian": "وجه التزامی الزامی با فعل ساده stand."
  },
  {
    "id": "ch-11-q13",
    "chapterId": "ch-11",
    "chapterNumber": 11,
    "questionNumber": 13,
    "difficulty": "hard",
    "prompt": "___ (What) he said surprised everyone in the room.",
    "promptPersian": "آنچه او گفت همه حاضران در اتاق را غافلگیر کرد.",
    "acceptedAnswers": [
      "What"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Noun Clauses"
    ],
    "targetGrammarConcept": "Noun clause with 'what' meaning 'the thing which'.",
    "spellingTolerance": 1,
    "explanation": "Noun clause with 'what' meaning 'the thing which'.",
    "explanationPersian": "بند اسمی با what به معنای «آنچه»."
  },
  {
    "id": "ch-11-q14",
    "chapterId": "ch-11",
    "chapterNumber": 11,
    "questionNumber": 14,
    "difficulty": "hard",
    "prompt": "I wonder if the library ___ (be) open on Sunday.",
    "promptPersian": "در شگفتم که آیا کتابخانه در روز یکشنبه باز است یا خیر.",
    "acceptedAnswers": [
      "is",
      "will be"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Noun Clauses"
    ],
    "targetGrammarConcept": "Indirect question clause with 'if'.",
    "spellingTolerance": 1,
    "explanation": "Indirect question clause with 'if'.",
    "explanationPersian": "سوال غیرمستقیم با if."
  },
  {
    "id": "ch-11-q15",
    "chapterId": "ch-11",
    "chapterNumber": 11,
    "questionNumber": 15,
    "difficulty": "hard",
    "prompt": "She explained ___ (how) the typesetting apparatus operated.",
    "promptPersian": "او توضیح داد که دستگاه حروف‌چینی چگونه کار می‌کرد.",
    "acceptedAnswers": [
      "how"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Noun Clauses"
    ],
    "targetGrammarConcept": "Noun clause indicating manner.",
    "spellingTolerance": 1,
    "explanation": "Noun clause indicating manner.",
    "explanationPersian": "بند اسمی چگونگی با how."
  },
  {
    "id": "ch-11-q16",
    "chapterId": "ch-11",
    "chapterNumber": 11,
    "questionNumber": 16,
    "difficulty": "advanced",
    "prompt": "It is crucial that every citizen ___ (vote).",
    "promptPersian": "حیاتی است که هر شهروندی رأی دهد.",
    "acceptedAnswers": [
      "vote"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Noun Clauses"
    ],
    "targetGrammarConcept": "Subjunctive with singular subject retaining base form.",
    "spellingTolerance": 1,
    "explanation": "Subjunctive with singular subject retaining base form.",
    "explanationPersian": "وجه التزامی با فاعل مفرد به شکل ریشه فعل."
  },
  {
    "id": "ch-11-q17",
    "chapterId": "ch-11",
    "chapterNumber": 11,
    "questionNumber": 17,
    "difficulty": "advanced",
    "prompt": "He believes ___ (that) diligence yields excellence.",
    "promptPersian": "او باور دارد که پشتکار برتری به بار می‌آورد.",
    "acceptedAnswers": [
      "that"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Noun Clauses"
    ],
    "targetGrammarConcept": "Standard declarative noun clause.",
    "spellingTolerance": 1,
    "explanation": "Standard declarative noun clause.",
    "explanationPersian": "بند اسمی استاندارد با that."
  },
  {
    "id": "ch-11-q18",
    "chapterId": "ch-11",
    "chapterNumber": 11,
    "questionNumber": 18,
    "difficulty": "advanced",
    "prompt": "Nobody knows whose handwriting ___ (this is / is this).",
    "promptPersian": "هیچ‌کس نمی‌داند این دست‌خط متعلق به کیست.",
    "acceptedAnswers": [
      "this is"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Noun Clauses"
    ],
    "targetGrammarConcept": "Indirect possessive clause with statement order.",
    "spellingTolerance": 1,
    "explanation": "Indirect possessive clause with statement order.",
    "explanationPersian": "بند مالکیتی غیرمستقیم با ترتیب خبری."
  },
  {
    "id": "ch-11-q19",
    "chapterId": "ch-11",
    "chapterNumber": 11,
    "questionNumber": 19,
    "difficulty": "advanced",
    "prompt": "I requested that she ___ (not mention) my name.",
    "promptPersian": "من درخواست کردم که او نام مرا به میان نیاورد.",
    "acceptedAnswers": [
      "not mention"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Noun Clauses"
    ],
    "targetGrammarConcept": "Negative subjunctive noun clause: not + base verb.",
    "spellingTolerance": 1,
    "explanation": "Negative subjunctive noun clause: not + base verb.",
    "explanationPersian": "منفی وجه التزامی: not + ریشه فعل."
  },
  {
    "id": "ch-11-q20",
    "chapterId": "ch-11",
    "chapterNumber": 11,
    "questionNumber": 20,
    "difficulty": "advanced",
    "prompt": "Complete: 'Whoever ___ (arrive) first shall receive the book.'",
    "promptPersian": "کامل کنید: «هر کس اول برسد کتاب را دریافت خواهد کرد.»",
    "acceptedAnswers": [
      "arrives"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Noun Clauses"
    ],
    "targetGrammarConcept": "Noun clause subject taking singular verb.",
    "spellingTolerance": 1,
    "explanation": "Noun clause subject taking singular verb.",
    "explanationPersian": "فاعل جمله در قالب بند اسمی با whoever که فعل مفرد می‌گیرد."
  },
  {
    "id": "ch-12-q1",
    "chapterId": "ch-12",
    "chapterNumber": 12,
    "questionNumber": 1,
    "difficulty": "easy",
    "prompt": "The scholar ___ (who / which) compiled this work was a polyglot.",
    "promptPersian": "دانشمندی که این اثر را گردآوری کرد مسلط به چندین زبان بود.",
    "acceptedAnswers": [
      "who"
    ],
    "alternativeAnswers": [
      "that"
    ],
    "requiredGrammarRules": [
      "Adjective Clauses (Relative Clauses)"
    ],
    "targetGrammarConcept": "Relative pronoun referring to human subject.",
    "spellingTolerance": 2,
    "explanation": "Relative pronoun referring to human subject.",
    "explanationPersian": "ضمیر موصولی فاعلی برای انسان who است."
  },
  {
    "id": "ch-12-q2",
    "chapterId": "ch-12",
    "chapterNumber": 12,
    "questionNumber": 2,
    "difficulty": "easy",
    "prompt": "The ancient dictionary, ___ (which / that) was printed in 1951, is preserved.",
    "promptPersian": "آن فرهنگ کهن، که در سال ۱۹۵۱ چاپ شد، نگهداری می‌شود.",
    "acceptedAnswers": [
      "which"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Adjective Clauses (Relative Clauses)"
    ],
    "targetGrammarConcept": "Non-restrictive clause with commas requires 'which', never 'that'.",
    "spellingTolerance": 2,
    "explanation": "Non-restrictive clause with commas requires 'which', never 'that'.",
    "explanationPersian": "بند غیرتحدیدی بین دو کاما نیازمند which است نه that."
  },
  {
    "id": "ch-12-q3",
    "chapterId": "ch-12",
    "chapterNumber": 12,
    "questionNumber": 3,
    "difficulty": "easy",
    "prompt": "This is the scribe ___ (whose) calligraphy won admiration.",
    "promptPersian": "این همان کاتبی است که خطاطی‌اش ستایش برانگیخت.",
    "acceptedAnswers": [
      "whose"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Adjective Clauses (Relative Clauses)"
    ],
    "targetGrammarConcept": "Possessive relative pronoun.",
    "spellingTolerance": 2,
    "explanation": "Possessive relative pronoun.",
    "explanationPersian": "ضمیر موصولی ملکی whose."
  },
  {
    "id": "ch-12-q4",
    "chapterId": "ch-12",
    "chapterNumber": 12,
    "questionNumber": 4,
    "difficulty": "easy",
    "prompt": "The room ___ (where / which) he studied is now a museum.",
    "promptPersian": "اتاقی که در آن مطالعه می‌کرد اکنون یک موزه است.",
    "acceptedAnswers": [
      "where"
    ],
    "alternativeAnswers": [
      "in which"
    ],
    "requiredGrammarRules": [
      "Adjective Clauses (Relative Clauses)"
    ],
    "targetGrammarConcept": "Relative adverb indicating physical place.",
    "spellingTolerance": 2,
    "explanation": "Relative adverb indicating physical place.",
    "explanationPersian": "قید موصولی مکان where."
  },
  {
    "id": "ch-12-q5",
    "chapterId": "ch-12",
    "chapterNumber": 12,
    "questionNumber": 5,
    "difficulty": "easy",
    "prompt": "The gentleman ___ (whom / who) we met yesterday was gracious.",
    "promptPersian": "آقایی که دیروز ملاقات کردیم بسیار باوقار و بزرگوار بود.",
    "acceptedAnswers": [
      "whom"
    ],
    "alternativeAnswers": [
      "who",
      "that"
    ],
    "requiredGrammarRules": [
      "Adjective Clauses (Relative Clauses)"
    ],
    "targetGrammarConcept": "Objective relative pronoun referring to human.",
    "spellingTolerance": 2,
    "explanation": "Objective relative pronoun referring to human.",
    "explanationPersian": "ضمیر موصولی مفعولی برای انسان whom."
  },
  {
    "id": "ch-12-q6",
    "chapterId": "ch-12",
    "chapterNumber": 12,
    "questionNumber": 6,
    "difficulty": "medium",
    "prompt": "The reason ___ (why) he persevered was his love of language.",
    "promptPersian": "دلیلی که به خاطر آن استقامت ورزید، عشقش به زبان بود.",
    "acceptedAnswers": [
      "why"
    ],
    "alternativeAnswers": [
      "that",
      "for which"
    ],
    "requiredGrammarRules": [
      "Adjective Clauses (Relative Clauses)"
    ],
    "targetGrammarConcept": "Relative adverb of cause.",
    "spellingTolerance": 2,
    "explanation": "Relative adverb of cause.",
    "explanationPersian": "قید موصولی بیان علت why."
  },
  {
    "id": "ch-12-q7",
    "chapterId": "ch-12",
    "chapterNumber": 12,
    "questionNumber": 7,
    "difficulty": "medium",
    "prompt": "The town in ___ (which) he was born is Tehran.",
    "promptPersian": "شهری که در آن متولد شد تهران است.",
    "acceptedAnswers": [
      "which"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Adjective Clauses (Relative Clauses)"
    ],
    "targetGrammarConcept": "Preposition requires 'which' for places, never 'where' or 'that'.",
    "spellingTolerance": 2,
    "explanation": "Preposition requires 'which' for places, never 'where' or 'that'.",
    "explanationPersian": "همراه با حرف اضافه in ضمیر which به کار می‌رود نه that."
  },
  {
    "id": "ch-12-q8",
    "chapterId": "ch-12",
    "chapterNumber": 12,
    "questionNumber": 8,
    "difficulty": "medium",
    "prompt": "All the books ___ (that / who) were on the desk fell.",
    "promptPersian": "تمام کتاب‌هایی که روی میز بودند افتادند.",
    "acceptedAnswers": [
      "that"
    ],
    "alternativeAnswers": [
      "which"
    ],
    "requiredGrammarRules": [
      "Adjective Clauses (Relative Clauses)"
    ],
    "targetGrammarConcept": "Restrictive relative clause modifying inanimate plural.",
    "spellingTolerance": 2,
    "explanation": "Restrictive relative clause modifying inanimate plural.",
    "explanationPersian": "بند موصولی تحدیدی برای اشیاء."
  },
  {
    "id": "ch-12-q9",
    "chapterId": "ch-12",
    "chapterNumber": 12,
    "questionNumber": 9,
    "difficulty": "medium",
    "prompt": "Soleiman Haim, ___ (who) was born in 1897, wrote dictionaries.",
    "promptPersian": "سلیمان حییم، که در ۱۸۹۷ متولد شد، لغت‌نامه‌ها را نوشت.",
    "acceptedAnswers": [
      "who"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Adjective Clauses (Relative Clauses)"
    ],
    "targetGrammarConcept": "Non-restrictive relative clause referring to named person.",
    "spellingTolerance": 2,
    "explanation": "Non-restrictive relative clause referring to named person.",
    "explanationPersian": "بند موصولی غیرتحدیدی درباره شخص با who."
  },
  {
    "id": "ch-12-q10",
    "chapterId": "ch-12",
    "chapterNumber": 12,
    "questionNumber": 10,
    "difficulty": "medium",
    "prompt": "The apprentice to ___ (whom) I spoke was very attentive.",
    "promptPersian": "کارآموزی که با او صحبت کردم بسیار با دقت بود.",
    "acceptedAnswers": [
      "whom"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Adjective Clauses (Relative Clauses)"
    ],
    "targetGrammarConcept": "Preposition 'to' requires objective pronoun 'whom'.",
    "spellingTolerance": 2,
    "explanation": "Preposition 'to' requires objective pronoun 'whom'.",
    "explanationPersian": "حرف اضافه to ضمیر مفعولی whom می‌طلبد."
  },
  {
    "id": "ch-12-q11",
    "chapterId": "ch-12",
    "chapterNumber": 12,
    "questionNumber": 11,
    "difficulty": "hard",
    "prompt": "The year ___ (when) the dictionary appeared was historic.",
    "promptPersian": "سالی که فرهنگ در آن پدیدار گشت تاریخی بود.",
    "acceptedAnswers": [
      "when"
    ],
    "alternativeAnswers": [
      "in which",
      "that"
    ],
    "requiredGrammarRules": [
      "Adjective Clauses (Relative Clauses)"
    ],
    "targetGrammarConcept": "Relative adverb of time.",
    "spellingTolerance": 1,
    "explanation": "Relative adverb of time.",
    "explanationPersian": "قید موصولی زمان when."
  },
  {
    "id": "ch-12-q12",
    "chapterId": "ch-12",
    "chapterNumber": 12,
    "questionNumber": 12,
    "difficulty": "hard",
    "prompt": "He showed me the quill ___ (with which) he wrote the preface.",
    "promptPersian": "او پر نگارشی را که با آن مقدمه را نوشته بود به من نشان داد.",
    "acceptedAnswers": [
      "with which"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Adjective Clauses (Relative Clauses)"
    ],
    "targetGrammarConcept": "Preposition + relative pronoun combination.",
    "spellingTolerance": 1,
    "explanation": "Preposition + relative pronoun combination.",
    "explanationPersian": "ترکیب حرف اضافه و ضمیر موصولی."
  },
  {
    "id": "ch-12-q13",
    "chapterId": "ch-12",
    "chapterNumber": 12,
    "questionNumber": 13,
    "difficulty": "hard",
    "prompt": "The students, all of ___ (whom) were diligent, passed the test.",
    "promptPersian": "دانشجویان، که همگی پرتلاش بودند، در آزمون پذیرفته شدند.",
    "acceptedAnswers": [
      "whom"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Adjective Clauses (Relative Clauses)"
    ],
    "targetGrammarConcept": "Quantifier phrase 'all of whom'.",
    "spellingTolerance": 1,
    "explanation": "Quantifier phrase 'all of whom'.",
    "explanationPersian": "ترکیب مقداری all of whom برای اشخاص."
  },
  {
    "id": "ch-12-q14",
    "chapterId": "ch-12",
    "chapterNumber": 12,
    "questionNumber": 14,
    "difficulty": "hard",
    "prompt": "He owns two houses, both of ___ (which) are Victorian.",
    "promptPersian": "او دو خانه دارد که هر دوی آن‌ها ویکتوریایی هستند.",
    "acceptedAnswers": [
      "which"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Adjective Clauses (Relative Clauses)"
    ],
    "targetGrammarConcept": "Quantifier phrase 'both of which' for inanimate objects.",
    "spellingTolerance": 1,
    "explanation": "Quantifier phrase 'both of which' for inanimate objects.",
    "explanationPersian": "ترکیب مقداری both of which برای اشیاء."
  },
  {
    "id": "ch-12-q15",
    "chapterId": "ch-12",
    "chapterNumber": 12,
    "questionNumber": 15,
    "difficulty": "hard",
    "prompt": "The scholar praised the assistant, ___ (whose) work was exemplary.",
    "promptPersian": "دانشمند دستیار را ستود، که کارش نمونه و درخشان بود.",
    "acceptedAnswers": [
      "whose"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Adjective Clauses (Relative Clauses)"
    ],
    "targetGrammarConcept": "Non-restrictive possessive relative clause.",
    "spellingTolerance": 1,
    "explanation": "Non-restrictive possessive relative clause.",
    "explanationPersian": "بند موصولی ملکی غیرتحدیدی."
  },
  {
    "id": "ch-12-q16",
    "chapterId": "ch-12",
    "chapterNumber": 12,
    "questionNumber": 16,
    "difficulty": "advanced",
    "prompt": "The hypothesis ___ (that) he proposed was revolutionary.",
    "promptPersian": "فرضیه‌ای که او مطرح ساخت انقلابی بود.",
    "acceptedAnswers": [
      "that"
    ],
    "alternativeAnswers": [
      "which"
    ],
    "requiredGrammarRules": [
      "Adjective Clauses (Relative Clauses)"
    ],
    "targetGrammarConcept": "Restrictive relative clause.",
    "spellingTolerance": 1,
    "explanation": "Restrictive relative clause.",
    "explanationPersian": "بند موصولی تحدیدی با that."
  },
  {
    "id": "ch-12-q17",
    "chapterId": "ch-12",
    "chapterNumber": 12,
    "questionNumber": 17,
    "difficulty": "advanced",
    "prompt": "He is a man upon ___ (whom) one can rely implicitly.",
    "promptPersian": "او مردی است که می‌توان کاملاً به او اتکا کرد.",
    "acceptedAnswers": [
      "whom"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Adjective Clauses (Relative Clauses)"
    ],
    "targetGrammarConcept": "Preposition 'upon' governing 'whom'.",
    "spellingTolerance": 1,
    "explanation": "Preposition 'upon' governing 'whom'.",
    "explanationPersian": "حرف اضافه upon همراه با whom."
  },
  {
    "id": "ch-12-q18",
    "chapterId": "ch-12",
    "chapterNumber": 12,
    "questionNumber": 18,
    "difficulty": "advanced",
    "prompt": "The days ___ (when) scholars worked with quills are past.",
    "promptPersian": "روزگاری که دانشمندان با قلم پر کار می‌کردند سپری شده است.",
    "acceptedAnswers": [
      "when"
    ],
    "alternativeAnswers": [
      "in which"
    ],
    "requiredGrammarRules": [
      "Adjective Clauses (Relative Clauses)"
    ],
    "targetGrammarConcept": "Temporal relative adverb.",
    "spellingTolerance": 1,
    "explanation": "Temporal relative adverb.",
    "explanationPersian": "قید موصولی زمان."
  },
  {
    "id": "ch-12-q19",
    "chapterId": "ch-12",
    "chapterNumber": 12,
    "questionNumber": 19,
    "difficulty": "advanced",
    "prompt": "I read a book ___ (which / that) explained Persian orthography.",
    "promptPersian": "کتابی خواندم که املای زبان فارسی را توضیح می‌داد.",
    "acceptedAnswers": [
      "which",
      "that"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Adjective Clauses (Relative Clauses)"
    ],
    "targetGrammarConcept": "Subject relative pronoun for book.",
    "spellingTolerance": 1,
    "explanation": "Subject relative pronoun for book.",
    "explanationPersian": "ضمیر موصولی برای کتاب."
  },
  {
    "id": "ch-12-q20",
    "chapterId": "ch-12",
    "chapterNumber": 12,
    "questionNumber": 20,
    "difficulty": "advanced",
    "prompt": "Complete: 'The library, the shelves of ___ (which) were tall, was quiet.'",
    "promptPersian": "کامل کنید: «کتابخانه، که قفسه‌هایش بلند بودند، ساکت و آرام بود.»",
    "acceptedAnswers": [
      "which"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Adjective Clauses (Relative Clauses)"
    ],
    "targetGrammarConcept": "Prepositional possessive form 'the shelves of which'.",
    "spellingTolerance": 1,
    "explanation": "Prepositional possessive form 'the shelves of which'.",
    "explanationPersian": "ساختار ملکی the shelves of which برای اشیاء."
  },
  {
    "id": "ch-13-q1",
    "chapterId": "ch-13",
    "chapterNumber": 13,
    "questionNumber": 1,
    "difficulty": "easy",
    "prompt": "The student enjoyed ___ (read) the old manuscripts.",
    "promptPersian": "دانشجو از خواندن دست‌نوشته‌های کهن لذت می‌برد.",
    "acceptedAnswers": [
      "reading"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 1"
    ],
    "targetGrammarConcept": "'Enjoy' is strictly followed by a gerund.",
    "spellingTolerance": 2,
    "explanation": "'Enjoy' is strictly followed by a gerund.",
    "explanationPersian": "فعل enjoy همواره با اسم مصدر می‌آید."
  },
  {
    "id": "ch-13-q2",
    "chapterId": "ch-13",
    "chapterNumber": 13,
    "questionNumber": 2,
    "difficulty": "easy",
    "prompt": "He decided ___ (publish) the volume in two separate parts.",
    "promptPersian": "او تصمیم گرفت کتاب را در دو بخش مجزا منتشر کند.",
    "acceptedAnswers": [
      "to publish"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 1"
    ],
    "targetGrammarConcept": "'Decide' is strictly followed by an infinitive.",
    "spellingTolerance": 2,
    "explanation": "'Decide' is strictly followed by an infinitive.",
    "explanationPersian": "فعل decide منحصراً با مصدر با to می‌آید."
  },
  {
    "id": "ch-13-q3",
    "chapterId": "ch-13",
    "chapterNumber": 13,
    "questionNumber": 3,
    "difficulty": "easy",
    "prompt": "She avoided ___ (make) unnecessary grammatical errors.",
    "promptPersian": "او از مرتکب شدن خطاهای دستوری غیرضروری خودداری کرد.",
    "acceptedAnswers": [
      "making"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 1"
    ],
    "targetGrammarConcept": "'Avoid' requires a gerund.",
    "spellingTolerance": 2,
    "explanation": "'Avoid' requires a gerund.",
    "explanationPersian": "فعل avoid با اسم مصدر (-ing) دنبال می‌شود."
  },
  {
    "id": "ch-13-q4",
    "chapterId": "ch-13",
    "chapterNumber": 13,
    "questionNumber": 4,
    "difficulty": "easy",
    "prompt": "The committee agreed ___ (support) the lexicographical project.",
    "promptPersian": "کمیته موافقت کرد که از پروژه فرهنگ‌نویسی حمایت کند.",
    "acceptedAnswers": [
      "to support"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 1"
    ],
    "targetGrammarConcept": "'Agree' takes an infinitive.",
    "spellingTolerance": 2,
    "explanation": "'Agree' takes an infinitive.",
    "explanationPersian": "فعل agree با مصدر همراه با to به کار می‌رود."
  },
  {
    "id": "ch-13-q5",
    "chapterId": "ch-13",
    "chapterNumber": 13,
    "questionNumber": 5,
    "difficulty": "easy",
    "prompt": "They postponed ___ (print) the final proofs until next week.",
    "promptPersian": "آن‌ها چاپ نمونه‌های نهایی را تا هفته آینده به تعویق انداختند.",
    "acceptedAnswers": [
      "printing"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 1"
    ],
    "targetGrammarConcept": "'Postpone' requires a gerund.",
    "spellingTolerance": 2,
    "explanation": "'Postpone' requires a gerund.",
    "explanationPersian": "فعل postpone با اسم مصدر می‌آید."
  },
  {
    "id": "ch-13-q6",
    "chapterId": "ch-13",
    "chapterNumber": 13,
    "questionNumber": 6,
    "difficulty": "medium",
    "prompt": "I hope ___ (master) English grammar this semester.",
    "promptPersian": "امیدوارم در این نیم‌سال بر دستور زبان انگلیسی تسلط یابم.",
    "acceptedAnswers": [
      "to master"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 1"
    ],
    "targetGrammarConcept": "'Hope' takes an infinitive.",
    "spellingTolerance": 2,
    "explanation": "'Hope' takes an infinitive.",
    "explanationPersian": "فعل hope با مصدر با to دنبال می‌شود."
  },
  {
    "id": "ch-13-q7",
    "chapterId": "ch-13",
    "chapterNumber": 13,
    "questionNumber": 7,
    "difficulty": "medium",
    "prompt": "He admitted ___ (copy) several lines from an older source.",
    "promptPersian": "او اعتراف کرد که چند سطر را از منبعی قدیمی‌تر رونویسی کرده است.",
    "acceptedAnswers": [
      "copying",
      "having copied"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 1"
    ],
    "targetGrammarConcept": "'Admit' takes a gerund.",
    "spellingTolerance": 2,
    "explanation": "'Admit' takes a gerund.",
    "explanationPersian": "فعل admit با اسم مصدر می‌آید."
  },
  {
    "id": "ch-13-q8",
    "chapterId": "ch-13",
    "chapterNumber": 13,
    "questionNumber": 8,
    "difficulty": "medium",
    "prompt": "The scholar refused ___ (compromise) his rigorous standards.",
    "promptPersian": "دانشمند از تن دادن به مصالحه در استانداردهای سخت‌گیرانه‌اش سر باز زد.",
    "acceptedAnswers": [
      "to compromise"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 1"
    ],
    "targetGrammarConcept": "'Refuse' takes an infinitive.",
    "spellingTolerance": 2,
    "explanation": "'Refuse' takes an infinitive.",
    "explanationPersian": "فعل refuse با مصدر با to همراه می‌شود."
  },
  {
    "id": "ch-13-q9",
    "chapterId": "ch-13",
    "chapterNumber": 13,
    "questionNumber": 9,
    "difficulty": "medium",
    "prompt": "She considered ___ (write) a monograph on Persian accents.",
    "promptPersian": "او نوشتن تک‌نگاری درباره لهجه‌های فارسی را در نظر گرفت.",
    "acceptedAnswers": [
      "writing"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 1"
    ],
    "targetGrammarConcept": "'Consider' requires a gerund.",
    "spellingTolerance": 2,
    "explanation": "'Consider' requires a gerund.",
    "explanationPersian": "فعل consider با اسم مصدر دنبال می‌شود."
  },
  {
    "id": "ch-13-q10",
    "chapterId": "ch-13",
    "chapterNumber": 13,
    "questionNumber": 10,
    "difficulty": "medium",
    "prompt": "We plan ___ (complete) the index by Friday afternoon.",
    "promptPersian": "ما برنامه داریم تا بعد از ظهر جمعه نمایه را تکمیل کنیم.",
    "acceptedAnswers": [
      "to complete"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 1"
    ],
    "targetGrammarConcept": "'Plan' takes an infinitive.",
    "spellingTolerance": 2,
    "explanation": "'Plan' takes an infinitive.",
    "explanationPersian": "فعل plan با مصدر با to می‌آید."
  },
  {
    "id": "ch-13-q11",
    "chapterId": "ch-13",
    "chapterNumber": 13,
    "questionNumber": 11,
    "difficulty": "hard",
    "prompt": "He quit ___ (smoke) his wooden pipe inside the library.",
    "promptPersian": "او کشیدن پیپ چوبی در داخل کتابخانه را ترک کرد.",
    "acceptedAnswers": [
      "smoking"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 1"
    ],
    "targetGrammarConcept": "'Quit' takes a gerund.",
    "spellingTolerance": 1,
    "explanation": "'Quit' takes a gerund.",
    "explanationPersian": "فعل quit با اسم مصدر همراه می‌شود."
  },
  {
    "id": "ch-13-q12",
    "chapterId": "ch-13",
    "chapterNumber": 13,
    "questionNumber": 12,
    "difficulty": "hard",
    "prompt": "The lecturer promised ___ (review) our essays tomorrow.",
    "promptPersian": "سخنران قول داد که فردا مقالات ما را بازبینی کند.",
    "acceptedAnswers": [
      "to review"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 1"
    ],
    "targetGrammarConcept": "'Promise' takes an infinitive.",
    "spellingTolerance": 1,
    "explanation": "'Promise' takes an infinitive.",
    "explanationPersian": "فعل promise با مصدر با to می‌آید."
  },
  {
    "id": "ch-13-q13",
    "chapterId": "ch-13",
    "chapterNumber": 13,
    "questionNumber": 13,
    "difficulty": "hard",
    "prompt": "Do you mind ___ (close) the window to keep the draught away?",
    "promptPersian": "آیا امکان دارد پنجره را ببندید تا سوز سرما وارد نشود؟",
    "acceptedAnswers": [
      "closing"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 1"
    ],
    "targetGrammarConcept": "'Mind' takes a gerund.",
    "spellingTolerance": 1,
    "explanation": "'Mind' takes a gerund.",
    "explanationPersian": "فعل mind با اسم مصدر به کار می‌رود."
  },
  {
    "id": "ch-13-q14",
    "chapterId": "ch-13",
    "chapterNumber": 13,
    "questionNumber": 14,
    "difficulty": "hard",
    "prompt": "They offered ___ (assist) with the cataloging process.",
    "promptPersian": "آن‌ها پیشنهاد کردند که در فرایند فهرست‌نویسی کمک نمایند.",
    "acceptedAnswers": [
      "to offer",
      "to assist"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 1"
    ],
    "targetGrammarConcept": "'Offer' takes an infinitive.",
    "spellingTolerance": 1,
    "explanation": "'Offer' takes an infinitive.",
    "explanationPersian": "فعل offer با مصدر همراه با to دنبال می‌شود."
  },
  {
    "id": "ch-13-q15",
    "chapterId": "ch-13",
    "chapterNumber": 13,
    "questionNumber": 15,
    "difficulty": "hard",
    "prompt": "He denied ___ (tamper) with the historical registry.",
    "promptPersian": "او دستکاری در دفتر ثبت تاریخی را انکار نمود.",
    "acceptedAnswers": [
      "tampering",
      "having tampered"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 1"
    ],
    "targetGrammarConcept": "'Deny' requires a gerund.",
    "spellingTolerance": 1,
    "explanation": "'Deny' requires a gerund.",
    "explanationPersian": "فعل deny با اسم مصدر می‌آید."
  },
  {
    "id": "ch-13-q16",
    "chapterId": "ch-13",
    "chapterNumber": 13,
    "questionNumber": 16,
    "difficulty": "advanced",
    "prompt": "She managed ___ (decipher) the faded inscription.",
    "promptPersian": "او موفق شد کتیبه کم‌رنگ‌شده را رمزگشایی کند.",
    "acceptedAnswers": [
      "to decipher"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 1"
    ],
    "targetGrammarConcept": "'Manage' takes an infinitive.",
    "spellingTolerance": 1,
    "explanation": "'Manage' takes an infinitive.",
    "explanationPersian": "فعل manage با مصدر با to می‌آید."
  },
  {
    "id": "ch-13-q17",
    "chapterId": "ch-13",
    "chapterNumber": 13,
    "questionNumber": 17,
    "difficulty": "advanced",
    "prompt": "The scribe finished ___ (bind) the royal volume.",
    "promptPersian": "کاتب صحافی کتاب سلطنتی را به پایان رساند.",
    "acceptedAnswers": [
      "binding"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 1"
    ],
    "targetGrammarConcept": "'Finish' takes a gerund.",
    "spellingTolerance": 1,
    "explanation": "'Finish' takes a gerund.",
    "explanationPersian": "فعل finish با اسم مصدر همراه می‌شود."
  },
  {
    "id": "ch-13-q18",
    "chapterId": "ch-13",
    "chapterNumber": 13,
    "questionNumber": 18,
    "difficulty": "advanced",
    "prompt": "We cannot afford ___ (waste) another moment in idle debate.",
    "promptPersian": "ما توان از دست دادن حتی یک لحظه دیگر در بحث‌های بیهوده را نداریم.",
    "acceptedAnswers": [
      "to waste"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 1"
    ],
    "targetGrammarConcept": "'Afford' takes an infinitive.",
    "spellingTolerance": 1,
    "explanation": "'Afford' takes an infinitive.",
    "explanationPersian": "فعل afford با مصدر همراه با to به کار می‌رود."
  },
  {
    "id": "ch-13-q19",
    "chapterId": "ch-13",
    "chapterNumber": 13,
    "questionNumber": 19,
    "difficulty": "advanced",
    "prompt": "She suggested ___ (consult) Haim's larger dictionary.",
    "promptPersian": "او پیشنهاد کرد که به فرهنگ بزرگ حییم مراجعه شود.",
    "acceptedAnswers": [
      "consulting"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 1"
    ],
    "targetGrammarConcept": "'Suggest' takes a gerund.",
    "spellingTolerance": 1,
    "explanation": "'Suggest' takes a gerund.",
    "explanationPersian": "فعل suggest با اسم مصدر می‌آید."
  },
  {
    "id": "ch-13-q20",
    "chapterId": "ch-13",
    "chapterNumber": 13,
    "questionNumber": 20,
    "difficulty": "advanced",
    "prompt": "Complete: 'The author failed ___ (realize) the magnitude of his work.'",
    "promptPersian": "کامل کنید: «نویسنده نتوانست عظمت اثر خود را درک کند.»",
    "acceptedAnswers": [
      "to realize"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 1"
    ],
    "targetGrammarConcept": "'Fail' takes an infinitive.",
    "spellingTolerance": 1,
    "explanation": "'Fail' takes an infinitive.",
    "explanationPersian": "فعل fail با مصدر با to دنبال می‌شود."
  },
  {
    "id": "ch-14-q1",
    "chapterId": "ch-14",
    "chapterNumber": 14,
    "questionNumber": 1,
    "difficulty": "easy",
    "prompt": "The tutor made him ___ (rewrite) the entire composition.",
    "promptPersian": "استاد او را وادار کرد که تمام انشا را از نو بنویسد.",
    "acceptedAnswers": [
      "rewrite"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 2"
    ],
    "targetGrammarConcept": "Causative 'make' takes a bare infinitive.",
    "spellingTolerance": 2,
    "explanation": "Causative 'make' takes a bare infinitive.",
    "explanationPersian": "فعل سببی make مفعول و مصدر بدون to می‌گیرد."
  },
  {
    "id": "ch-14-q2",
    "chapterId": "ch-14",
    "chapterNumber": 14,
    "questionNumber": 2,
    "difficulty": "easy",
    "prompt": "She is accustomed to ___ (work) late into the night.",
    "promptPersian": "او به کار کردن تا دیروقت در شب عادت کرده است.",
    "acceptedAnswers": [
      "working"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 2"
    ],
    "targetGrammarConcept": "'Be accustomed to' takes a gerund.",
    "spellingTolerance": 2,
    "explanation": "'Be accustomed to' takes a gerund.",
    "explanationPersian": "ترکیب be accustomed to با اسم مصدر همراه می‌شود."
  },
  {
    "id": "ch-14-q3",
    "chapterId": "ch-14",
    "chapterNumber": 14,
    "questionNumber": 3,
    "difficulty": "easy",
    "prompt": "The librarian let the researcher ___ (examine) the rare folio.",
    "promptPersian": "کتابدار به پژوهشگر اجازه داد برگ دست‌نویس کمیاب را بررسی کند.",
    "acceptedAnswers": [
      "examine"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 2"
    ],
    "targetGrammarConcept": "Causative 'let' takes a bare infinitive.",
    "spellingTolerance": 2,
    "explanation": "Causative 'let' takes a bare infinitive.",
    "explanationPersian": "فعل سببی let با مصدر بدون to می‌آید."
  },
  {
    "id": "ch-14-q4",
    "chapterId": "ch-14",
    "chapterNumber": 14,
    "questionNumber": 4,
    "difficulty": "easy",
    "prompt": "I had the tailor ___ (alter) my Victorian frock coat.",
    "promptPersian": "به خیاط دادم تا پالتوی ویکتوریایی‌ام را اصلاح کند.",
    "acceptedAnswers": [
      "alter"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 2"
    ],
    "targetGrammarConcept": "Causative 'have' (agent) takes a bare infinitive.",
    "spellingTolerance": 2,
    "explanation": "Causative 'have' (agent) takes a bare infinitive.",
    "explanationPersian": "فعل سببی have با شخص و مصدر بدون to می‌آید."
  },
  {
    "id": "ch-14-q5",
    "chapterId": "ch-14",
    "chapterNumber": 14,
    "questionNumber": 5,
    "difficulty": "easy",
    "prompt": "He had his coat ___ (alter) by the master tailor.",
    "promptPersian": "او داد پالتویش توسط خیاط ماهر اصلاح شود.",
    "acceptedAnswers": [
      "altered"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 2"
    ],
    "targetGrammarConcept": "Causative 'have' (object) takes past participle.",
    "spellingTolerance": 2,
    "explanation": "Causative 'have' (object) takes past participle.",
    "explanationPersian": "فعل سببی have با شیء و قسمت سوم فعل می‌آید."
  },
  {
    "id": "ch-14-q6",
    "chapterId": "ch-14",
    "chapterNumber": 14,
    "questionNumber": 6,
    "difficulty": "medium",
    "prompt": "I look forward to ___ (receive) your esteemed reply.",
    "promptPersian": "مشتاقانه چشم‌انتظار دریافت پاسخ ارجمند شما هستم.",
    "acceptedAnswers": [
      "receiving"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 2"
    ],
    "targetGrammarConcept": "'Look forward to' takes a gerund.",
    "spellingTolerance": 2,
    "explanation": "'Look forward to' takes a gerund.",
    "explanationPersian": "ترکیب look forward to با اسم مصدر می‌آید."
  },
  {
    "id": "ch-14-q7",
    "chapterId": "ch-14",
    "chapterNumber": 14,
    "questionNumber": 7,
    "difficulty": "medium",
    "prompt": "The scholar used to ___ (walk) through the gardens at dusk.",
    "promptPersian": "دانشمند عادت داشت هنگام غروب در باغ‌ها قدم بزند.",
    "acceptedAnswers": [
      "walk"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 2"
    ],
    "targetGrammarConcept": "'Used to' (past habit) takes a bare infinitive.",
    "spellingTolerance": 2,
    "explanation": "'Used to' (past habit) takes a bare infinitive.",
    "explanationPersian": "ساختار used to برای عادت گذشته با فعل ساده می‌آید."
  },
  {
    "id": "ch-14-q8",
    "chapterId": "ch-14",
    "chapterNumber": 14,
    "questionNumber": 8,
    "difficulty": "medium",
    "prompt": "He is used to ___ (walk) in the torrential rain.",
    "promptPersian": "او به راه رفتن در باران سیل‌آسا خو گرفته است.",
    "acceptedAnswers": [
      "walking"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 2"
    ],
    "targetGrammarConcept": "'Be used to' (accustomed) takes a gerund.",
    "spellingTolerance": 2,
    "explanation": "'Be used to' (accustomed) takes a gerund.",
    "explanationPersian": "ساختار be used to برای عادت داشتن با اسم مصدر می‌آید."
  },
  {
    "id": "ch-14-q9",
    "chapterId": "ch-14",
    "chapterNumber": 14,
    "questionNumber": 9,
    "difficulty": "medium",
    "prompt": "The master helped the student ___ (translate) the verse.",
    "promptPersian": "استاد به دانشجو کمک کرد تا بیت شعر را ترجمه کند.",
    "acceptedAnswers": [
      "translate",
      "to translate"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 2"
    ],
    "targetGrammarConcept": "'Help' takes either bare or to-infinitive.",
    "spellingTolerance": 2,
    "explanation": "'Help' takes either bare or to-infinitive.",
    "explanationPersian": "فعل help با مصدر با to یا بدون to می‌آید."
  },
  {
    "id": "ch-14-q10",
    "chapterId": "ch-14",
    "chapterNumber": 14,
    "questionNumber": 10,
    "difficulty": "medium",
    "prompt": "We heard the church bells ___ (toll) in the distance.",
    "promptPersian": "ما صدای ناقوس‌های کلیسا را شنیدیم که از دور به صدا درمی‌آمدند.",
    "acceptedAnswers": [
      "tolling",
      "toll"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 2"
    ],
    "targetGrammarConcept": "Verb of perception followed by gerund or bare infinitive.",
    "spellingTolerance": 2,
    "explanation": "Verb of perception followed by gerund or bare infinitive.",
    "explanationPersian": "افعال حسی با اسم مصدر یا مصدر ساده می‌آیند."
  },
  {
    "id": "ch-14-q11",
    "chapterId": "ch-14",
    "chapterNumber": 14,
    "questionNumber": 11,
    "difficulty": "hard",
    "prompt": "In order ___ (succeed), one must cultivate diligence.",
    "promptPersian": "به منظور موفقیت، انسان باید پشتکار را پرورش دهد.",
    "acceptedAnswers": [
      "to succeed"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 2"
    ],
    "targetGrammarConcept": "'In order to' expresses purpose with an infinitive.",
    "spellingTolerance": 1,
    "explanation": "'In order to' expresses purpose with an infinitive.",
    "explanationPersian": "عبارت in order to برای بیان هدف با مصدر با to می‌آید."
  },
  {
    "id": "ch-14-q12",
    "chapterId": "ch-14",
    "chapterNumber": 14,
    "questionNumber": 12,
    "difficulty": "hard",
    "prompt": "He insisted on ___ (pay) for the rare lexicon himself.",
    "promptPersian": "او اصرار ورزید که پول فرهنگ کمیاب را خودش بپردازد.",
    "acceptedAnswers": [
      "paying"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 2"
    ],
    "targetGrammarConcept": "Preposition 'on' requires a gerund.",
    "spellingTolerance": 1,
    "explanation": "Preposition 'on' requires a gerund.",
    "explanationPersian": "حرف اضافه on مستلزم اسم مصدر است."
  },
  {
    "id": "ch-14-q13",
    "chapterId": "ch-14",
    "chapterNumber": 14,
    "questionNumber": 13,
    "difficulty": "hard",
    "prompt": "Remember ___ (lock) the archives before leaving tonight.",
    "promptPersian": "یادت باشد پیش از ترک کتابخانه در امشب، بایگانی را قفل کنی.",
    "acceptedAnswers": [
      "to lock"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 2"
    ],
    "targetGrammarConcept": "'Remember to do' denotes an obligation to perform.",
    "spellingTolerance": 1,
    "explanation": "'Remember to do' denotes an obligation to perform.",
    "explanationPersian": "ترکیب remember to به معنای به یاد داشتن انجام وظیفه است."
  },
  {
    "id": "ch-14-q14",
    "chapterId": "ch-14",
    "chapterNumber": 14,
    "questionNumber": 14,
    "difficulty": "hard",
    "prompt": "I remember ___ (read) that fable when I was a boy.",
    "promptPersian": "به یاد می‌آورم که در کودکی آن حکایت را خوانده بودم.",
    "acceptedAnswers": [
      "reading"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 2"
    ],
    "targetGrammarConcept": "'Remember doing' denotes recollection of past event.",
    "spellingTolerance": 1,
    "explanation": "'Remember doing' denotes recollection of past event.",
    "explanationPersian": "ترکیب remember doing به معنای یادآوری خاطره گذشته است."
  },
  {
    "id": "ch-14-q15",
    "chapterId": "ch-14",
    "chapterNumber": 14,
    "questionNumber": 15,
    "difficulty": "hard",
    "prompt": "The professor got his assistant ___ (catalog) the books.",
    "promptPersian": "استاد دستیارش را ترغیب کرد تا کتاب‌ها را فهرست‌نویسی کند.",
    "acceptedAnswers": [
      "to catalog",
      "to catalogue"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 2"
    ],
    "targetGrammarConcept": "Causative 'get' takes a to-infinitive.",
    "spellingTolerance": 1,
    "explanation": "Causative 'get' takes a to-infinitive.",
    "explanationPersian": "فعل سببی get با مصدر همراه با to می‌آید."
  },
  {
    "id": "ch-14-q16",
    "chapterId": "ch-14",
    "chapterNumber": 14,
    "questionNumber": 16,
    "difficulty": "advanced",
    "prompt": "She stopped ___ (smoke) because of her health.",
    "promptPersian": "او کشیدن دخانیات را به خاطر سلامتی‌اش ترک کرد.",
    "acceptedAnswers": [
      "smoking"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 2"
    ],
    "targetGrammarConcept": "'Stop doing' means cessation of habit.",
    "spellingTolerance": 1,
    "explanation": "'Stop doing' means cessation of habit.",
    "explanationPersian": "ترکیب stop doing به معنای ترک یا متوقف ساختن یک عادت است."
  },
  {
    "id": "ch-14-q17",
    "chapterId": "ch-14",
    "chapterNumber": 14,
    "questionNumber": 17,
    "difficulty": "advanced",
    "prompt": "He stopped ___ (catch) his breath on the steep hill.",
    "promptPersian": "او روی تپه شیب‌دار ایستاد تا نفسی تازه کند.",
    "acceptedAnswers": [
      "to catch"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 2"
    ],
    "targetGrammarConcept": "'Stop to do' means pausing in order to do something.",
    "spellingTolerance": 1,
    "explanation": "'Stop to do' means pausing in order to do something.",
    "explanationPersian": "ترکیب stop to do به معنای توقف موقت برای انجام کاری است."
  },
  {
    "id": "ch-14-q18",
    "chapterId": "ch-14",
    "chapterNumber": 14,
    "questionNumber": 18,
    "difficulty": "advanced",
    "prompt": "The apprentice was made ___ (clean) the printing press.",
    "promptPersian": "کارآموز وادار شد که دستگاه چاپ را تمیز کند.",
    "acceptedAnswers": [
      "to clean"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 2"
    ],
    "targetGrammarConcept": "Passive of causative 'make' requires a to-infinitive.",
    "spellingTolerance": 1,
    "explanation": "Passive of causative 'make' requires a to-infinitive.",
    "explanationPersian": "شکل مجهول فعل سببی make نیازمند مصدر با to است."
  },
  {
    "id": "ch-14-q19",
    "chapterId": "ch-14",
    "chapterNumber": 14,
    "questionNumber": 19,
    "difficulty": "advanced",
    "prompt": "She takes pleasure in ___ (compose) English sonnets.",
    "promptPersian": "او از سرودن غزل‌های انگلیسی لذت می‌برد.",
    "acceptedAnswers": [
      "composing"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 2"
    ],
    "targetGrammarConcept": "Preposition 'in' requires a gerund.",
    "spellingTolerance": 1,
    "explanation": "Preposition 'in' requires a gerund.",
    "explanationPersian": "حرف اضافه in همراه با اسم مصدر می‌آید."
  },
  {
    "id": "ch-14-q20",
    "chapterId": "ch-14",
    "chapterNumber": 14,
    "questionNumber": 20,
    "difficulty": "advanced",
    "prompt": "Complete: 'He was prevented from ___ (leave) the country.'",
    "promptPersian": "کامل کنید: «او از خروج از کشور منع شد.»",
    "acceptedAnswers": [
      "leaving"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Gerunds and Infinitives, Part 2"
    ],
    "targetGrammarConcept": "Preposition 'from' takes a gerund.",
    "spellingTolerance": 1,
    "explanation": "Preposition 'from' takes a gerund.",
    "explanationPersian": "حرف اضافه from با اسم مصدر همراه می‌شود."
  },
  {
    "id": "ch-15-q1",
    "chapterId": "ch-15",
    "chapterNumber": 15,
    "questionNumber": 1,
    "difficulty": "easy",
    "prompt": "The scholar was known for his wisdom ___ (and / but) his modesty.",
    "promptPersian": "آن دانشمند به حکمت و تواضعش شهره بود.",
    "acceptedAnswers": [
      "and"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Coordinating Conjunctions and Parallel Structure"
    ],
    "targetGrammarConcept": "Coordinating conjunction joining parallel noun phrases.",
    "spellingTolerance": 2,
    "explanation": "Coordinating conjunction joining parallel noun phrases.",
    "explanationPersian": "حرف ربط همپایه برای اتصال دو عبارت اسمی موازی."
  },
  {
    "id": "ch-15-q2",
    "chapterId": "ch-15",
    "chapterNumber": 15,
    "questionNumber": 2,
    "difficulty": "easy",
    "prompt": "Not only did he write dictionaries, ___ he also composed poetry.",
    "promptPersian": "او نه تنها فرهنگ لغت نوشت، بلکه شعر نیز سرود.",
    "acceptedAnswers": [
      "but"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Coordinating Conjunctions and Parallel Structure"
    ],
    "targetGrammarConcept": "Correlative pair: 'not only... but also'.",
    "spellingTolerance": 2,
    "explanation": "Correlative pair: 'not only... but also'.",
    "explanationPersian": "جفت ربطی not only همراه با but also."
  },
  {
    "id": "ch-15-q3",
    "chapterId": "ch-15",
    "chapterNumber": 15,
    "questionNumber": 3,
    "difficulty": "easy",
    "prompt": "The lecturer was both eloquent ___ informative.",
    "promptPersian": "سخنران هم سخنور بود و هم آگاهی‌بخش.",
    "acceptedAnswers": [
      "and"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Coordinating Conjunctions and Parallel Structure"
    ],
    "targetGrammarConcept": "Correlative pair: 'both... and'.",
    "spellingTolerance": 2,
    "explanation": "Correlative pair: 'both... and'.",
    "explanationPersian": "حرف ربط جفتی both... and."
  },
  {
    "id": "ch-15-q4",
    "chapterId": "ch-15",
    "chapterNumber": 15,
    "questionNumber": 4,
    "difficulty": "easy",
    "prompt": "Neither the editor ___ his assistants caught the error.",
    "promptPersian": "نه ویراستار و نه دستیارانش متوجه خطا نشدند.",
    "acceptedAnswers": [
      "nor"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Coordinating Conjunctions and Parallel Structure"
    ],
    "targetGrammarConcept": "Correlative pair: 'neither... nor'.",
    "spellingTolerance": 2,
    "explanation": "Correlative pair: 'neither... nor'.",
    "explanationPersian": "حرف ربط جفتی neither... nor."
  },
  {
    "id": "ch-15-q5",
    "chapterId": "ch-15",
    "chapterNumber": 15,
    "questionNumber": 5,
    "difficulty": "easy",
    "prompt": "You may either submit the manuscript now ___ wait until Monday.",
    "promptPersian": "شما می‌توانید یا هم‌اکنون دست‌نوشته را تحویل دهید یا تا دوشنبه صبر کنید.",
    "acceptedAnswers": [
      "or"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Coordinating Conjunctions and Parallel Structure"
    ],
    "targetGrammarConcept": "Correlative pair: 'either... or'.",
    "spellingTolerance": 2,
    "explanation": "Correlative pair: 'either... or'.",
    "explanationPersian": "حرف ربط جفتی either... or."
  },
  {
    "id": "ch-15-q6",
    "chapterId": "ch-15",
    "chapterNumber": 15,
    "questionNumber": 6,
    "difficulty": "medium",
    "prompt": "He likes reading old books, visiting museums, and ___ (write) letters.",
    "promptPersian": "او از خواندن کتاب‌های کهن، بازدید از موزه‌ها و نوشتن نامه‌ها لذت می‌برد.",
    "acceptedAnswers": [
      "writing"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Coordinating Conjunctions and Parallel Structure"
    ],
    "targetGrammarConcept": "Parallel series of gerunds.",
    "spellingTolerance": 2,
    "explanation": "Parallel series of gerunds.",
    "explanationPersian": "حفظ توازی در سلسله اسم‌های مصدر."
  },
  {
    "id": "ch-15-q7",
    "chapterId": "ch-15",
    "chapterNumber": 15,
    "questionNumber": 7,
    "difficulty": "medium",
    "prompt": "The text was dense ___ illuminating.",
    "promptPersian": "متن متراکم و دشوار اما روشنگر بود.",
    "acceptedAnswers": [
      "yet",
      "but"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Coordinating Conjunctions and Parallel Structure"
    ],
    "targetGrammarConcept": "Coordinating conjunction showing contrast.",
    "spellingTolerance": 2,
    "explanation": "Coordinating conjunction showing contrast.",
    "explanationPersian": "حرف ربط تضاد yet یا but."
  },
  {
    "id": "ch-15-q8",
    "chapterId": "ch-15",
    "chapterNumber": 15,
    "questionNumber": 8,
    "difficulty": "medium",
    "prompt": "He was tired, ___ (so / for) he went to bed early.",
    "promptPersian": "او خسته بود، بنابراین زود به خواب رفت.",
    "acceptedAnswers": [
      "so"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Coordinating Conjunctions and Parallel Structure"
    ],
    "targetGrammarConcept": "Coordinating conjunction of result: so.",
    "spellingTolerance": 2,
    "explanation": "Coordinating conjunction of result: so.",
    "explanationPersian": "حرف ربط بیان نتیجه so."
  },
  {
    "id": "ch-15-q9",
    "chapterId": "ch-15",
    "chapterNumber": 15,
    "questionNumber": 9,
    "difficulty": "medium",
    "prompt": "We remained indoors, ___ (for / and) a tempest raged outside.",
    "promptPersian": "ما در خانه ماندیم، چرا که بیرون طوفانی خشمگین زوزه می‌کشید.",
    "acceptedAnswers": [
      "for"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Coordinating Conjunctions and Parallel Structure"
    ],
    "targetGrammarConcept": "Literary coordinating conjunction of cause: for.",
    "spellingTolerance": 2,
    "explanation": "Literary coordinating conjunction of cause: for.",
    "explanationPersian": "حرف ربط ادبی بیان علت for."
  },
  {
    "id": "ch-15-q10",
    "chapterId": "ch-15",
    "chapterNumber": 15,
    "questionNumber": 10,
    "difficulty": "medium",
    "prompt": "The edition is admired not for its novelty, but ___ (for) its accuracy.",
    "promptPersian": "این چاپ نه به خاطر تازگی‌اش، بلکه به خاطر دقتش تحسین می‌شود.",
    "acceptedAnswers": [
      "for"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Coordinating Conjunctions and Parallel Structure"
    ],
    "targetGrammarConcept": "Parallel prepositional phrase after 'not... but'.",
    "spellingTolerance": 2,
    "explanation": "Parallel prepositional phrase after 'not... but'.",
    "explanationPersian": "حفظ حرف اضافه موازی for پس از but."
  },
  {
    "id": "ch-15-q11",
    "chapterId": "ch-15",
    "chapterNumber": 15,
    "questionNumber": 11,
    "difficulty": "hard",
    "prompt": "She speaks clearly, persuasively, and ___ (intelligent / intelligently).",
    "promptPersian": "او شفاف، متقاعدکننده و هوشمندانه سخن می‌گوید.",
    "acceptedAnswers": [
      "intelligently"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Coordinating Conjunctions and Parallel Structure"
    ],
    "targetGrammarConcept": "Parallel series of adverbs of manner.",
    "spellingTolerance": 1,
    "explanation": "Parallel series of adverbs of manner.",
    "explanationPersian": "سلسله قیدهای حالت موازی منتهی به ly."
  },
  {
    "id": "ch-15-q12",
    "chapterId": "ch-15",
    "chapterNumber": 15,
    "questionNumber": 12,
    "difficulty": "hard",
    "prompt": "The task was difficult, tedious, and ___ (exhaust / exhausting).",
    "promptPersian": "کار دشوار، ملال‌آور و طاقت‌فرسا بود.",
    "acceptedAnswers": [
      "exhausting"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Coordinating Conjunctions and Parallel Structure"
    ],
    "targetGrammarConcept": "Parallel series of predicate adjectives.",
    "spellingTolerance": 1,
    "explanation": "Parallel series of predicate adjectives.",
    "explanationPersian": "سلسله صفات خبری موازی."
  },
  {
    "id": "ch-15-q13",
    "chapterId": "ch-15",
    "chapterNumber": 15,
    "questionNumber": 13,
    "difficulty": "hard",
    "prompt": "He neither acknowledged his fault ___ offered an apology.",
    "promptPersian": "او نه به خطای خود اعتراف کرد و نه پوزشی خواست.",
    "acceptedAnswers": [
      "nor"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Coordinating Conjunctions and Parallel Structure"
    ],
    "targetGrammarConcept": "Correlative 'neither... nor' with verbs.",
    "spellingTolerance": 1,
    "explanation": "Correlative 'neither... nor' with verbs.",
    "explanationPersian": "حرف ربط neither همراه با nor."
  },
  {
    "id": "ch-15-q14",
    "chapterId": "ch-15",
    "chapterNumber": 15,
    "questionNumber": 14,
    "difficulty": "hard",
    "prompt": "You can study in the library, in your chamber, or ___ the garden.",
    "promptPersian": "می‌توانید در کتابخانه، در اتاقتان یا در باغ مطالعه کنید.",
    "acceptedAnswers": [
      "in"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Coordinating Conjunctions and Parallel Structure"
    ],
    "targetGrammarConcept": "Parallel preposition 'in'.",
    "spellingTolerance": 1,
    "explanation": "Parallel preposition 'in'.",
    "explanationPersian": "تکرار حرف اضافه موازی in."
  },
  {
    "id": "ch-15-q15",
    "chapterId": "ch-15",
    "chapterNumber": 15,
    "questionNumber": 15,
    "difficulty": "hard",
    "prompt": "Not only English ___ French was typeset in this volume.",
    "promptPersian": "نه تنها انگلیسی بلکه فرانسه نیز در این جلد حروف‌چینی شد.",
    "acceptedAnswers": [
      "but also",
      "but"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Coordinating Conjunctions and Parallel Structure"
    ],
    "targetGrammarConcept": "Correlative conjunction pair.",
    "spellingTolerance": 1,
    "explanation": "Correlative conjunction pair.",
    "explanationPersian": "جفت ربطی not only... but also."
  },
  {
    "id": "ch-15-q16",
    "chapterId": "ch-15",
    "chapterNumber": 15,
    "questionNumber": 16,
    "difficulty": "advanced",
    "prompt": "The prose is distinguished by its grace, clarity, and ___ (lucid / lucidity).",
    "promptPersian": "این نثر به سبب وقار، وضوح و شیوایی‌اش متمایز است.",
    "acceptedAnswers": [
      "lucidity"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Coordinating Conjunctions and Parallel Structure"
    ],
    "targetGrammarConcept": "Parallel series of abstract nouns.",
    "spellingTolerance": 1,
    "explanation": "Parallel series of abstract nouns.",
    "explanationPersian": "سلسله اسامی انتزاعی موازی."
  },
  {
    "id": "ch-15-q17",
    "chapterId": "ch-15",
    "chapterNumber": 15,
    "questionNumber": 17,
    "difficulty": "advanced",
    "prompt": "He walked into the room, took off his hat, and ___ (sit) down.",
    "promptPersian": "او وارد اتاق شد، کلاهش را برداشت و نشست.",
    "acceptedAnswers": [
      "sat"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Coordinating Conjunctions and Parallel Structure"
    ],
    "targetGrammarConcept": "Parallel sequence of simple past verbs.",
    "spellingTolerance": 1,
    "explanation": "Parallel sequence of simple past verbs.",
    "explanationPersian": "توالی موازی افعال گذشته ساده."
  },
  {
    "id": "ch-15-q18",
    "chapterId": "ch-15",
    "chapterNumber": 15,
    "questionNumber": 18,
    "difficulty": "advanced",
    "prompt": "Either apologize at once, ___ face the consequences.",
    "promptPersian": "یا فوراً عذرخواهی کن، یا با پیامدها روبرو شو.",
    "acceptedAnswers": [
      "or"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Coordinating Conjunctions and Parallel Structure"
    ],
    "targetGrammarConcept": "Correlative 'either... or' with imperative verbs.",
    "spellingTolerance": 1,
    "explanation": "Correlative 'either... or' with imperative verbs.",
    "explanationPersian": "ساختار either... or با افعال امری."
  },
  {
    "id": "ch-15-q19",
    "chapterId": "ch-15",
    "chapterNumber": 15,
    "questionNumber": 19,
    "difficulty": "advanced",
    "prompt": "The work requires both patience ___ scholarship.",
    "promptPersian": "این اثر هم نیازمند صبوری و هم نیازمند دانشوری است.",
    "acceptedAnswers": [
      "and"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Coordinating Conjunctions and Parallel Structure"
    ],
    "targetGrammarConcept": "Correlative 'both... and' with nouns.",
    "spellingTolerance": 1,
    "explanation": "Correlative 'both... and' with nouns.",
    "explanationPersian": "پیوند دو اسم با both... and."
  },
  {
    "id": "ch-15-q20",
    "chapterId": "ch-15",
    "chapterNumber": 15,
    "questionNumber": 20,
    "difficulty": "advanced",
    "prompt": "Complete: 'He was known as a poet, a scholar, and ___ (an / a) educator.'",
    "promptPersian": "کامل کنید: «او به عنوان شاعر، دانشمند و یک مربی شناخته می‌شد.»",
    "acceptedAnswers": [
      "an"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Coordinating Conjunctions and Parallel Structure"
    ],
    "targetGrammarConcept": "Parallel indefinite article before vowel sound.",
    "spellingTolerance": 1,
    "explanation": "Parallel indefinite article before vowel sound.",
    "explanationPersian": "حرف تعریف نامعین موازی an قبل از آوای صدادار."
  },
  {
    "id": "ch-16-q1",
    "chapterId": "ch-16",
    "chapterNumber": 16,
    "questionNumber": 1,
    "difficulty": "easy",
    "prompt": "___ (Although / Because) the weather was bitter, the postman delivered the mail.",
    "promptPersian": "اگرچه هوا به شدت سرد بود، پستچی مرسولات را تحویل داد.",
    "acceptedAnswers": [
      "Although",
      "Even though",
      "Though"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Adverb Clauses"
    ],
    "targetGrammarConcept": "Adverb clause of concession.",
    "spellingTolerance": 2,
    "explanation": "Adverb clause of concession.",
    "explanationPersian": "بند قیدی بیان تعارض با although."
  },
  {
    "id": "ch-16-q2",
    "chapterId": "ch-16",
    "chapterNumber": 16,
    "questionNumber": 2,
    "difficulty": "easy",
    "prompt": "We waited inside ___ (until / while) the rain ceased.",
    "promptPersian": "ما درون خانه منتظر ماندیم تا زمانی که باران متوقف شد.",
    "acceptedAnswers": [
      "until"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Adverb Clauses"
    ],
    "targetGrammarConcept": "Adverb clause of time indicating limit.",
    "spellingTolerance": 2,
    "explanation": "Adverb clause of time indicating limit.",
    "explanationPersian": "بند قیدی زمان بیانگر حد نهایی با until."
  },
  {
    "id": "ch-16-q3",
    "chapterId": "ch-16",
    "chapterNumber": 16,
    "questionNumber": 3,
    "difficulty": "easy",
    "prompt": "___ (Because / Although) the manuscript was delicate, he wore gloves.",
    "promptPersian": "چون دست‌نوشته ظریف بود، او دستکش پوشید.",
    "acceptedAnswers": [
      "Because",
      "Since",
      "As"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Adverb Clauses"
    ],
    "targetGrammarConcept": "Adverb clause of cause and effect.",
    "spellingTolerance": 2,
    "explanation": "Adverb clause of cause and effect.",
    "explanationPersian": "بند قیدی بیان علت با because."
  },
  {
    "id": "ch-16-q4",
    "chapterId": "ch-16",
    "chapterNumber": 16,
    "questionNumber": 4,
    "difficulty": "easy",
    "prompt": "He studied every evening so ___ he might pass the test.",
    "promptPersian": "او هر شب درس می‌خواند تا بتواند در آزمون قبول شود.",
    "acceptedAnswers": [
      "that"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Adverb Clauses"
    ],
    "targetGrammarConcept": "Adverb clause of purpose: so that.",
    "spellingTolerance": 2,
    "explanation": "Adverb clause of purpose: so that.",
    "explanationPersian": "بند قیدی بیان هدف با so that."
  },
  {
    "id": "ch-16-q5",
    "chapterId": "ch-16",
    "chapterNumber": 16,
    "questionNumber": 5,
    "difficulty": "easy",
    "prompt": "___ (As soon as) the clock struck five, the workers departed.",
    "promptPersian": "به محض آنکه ساعت پنج را نواخت، کارگران رفتند.",
    "acceptedAnswers": [
      "As soon as",
      "Once"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Adverb Clauses"
    ],
    "targetGrammarConcept": "Adverb clause of immediate time.",
    "spellingTolerance": 2,
    "explanation": "Adverb clause of immediate time.",
    "explanationPersian": "بند قیدی زمان فوری با as soon as."
  },
  {
    "id": "ch-16-q6",
    "chapterId": "ch-16",
    "chapterNumber": 16,
    "questionNumber": 6,
    "difficulty": "medium",
    "prompt": "While he was reading in his study, a courier ___ (arrive).",
    "promptPersian": "در حالی که در اتاق کارش مطالعه می‌کرد، قاصدی رسید.",
    "acceptedAnswers": [
      "arrived"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Adverb Clauses"
    ],
    "targetGrammarConcept": "Main clause event during time clause.",
    "spellingTolerance": 2,
    "explanation": "Main clause event during time clause.",
    "explanationPersian": "رویداد بند اصلی در طول زمان بند قیدی."
  },
  {
    "id": "ch-16-q7",
    "chapterId": "ch-16",
    "chapterNumber": 16,
    "questionNumber": 7,
    "difficulty": "medium",
    "prompt": "You cannot borrow the folio ___ (unless) you possess authorization.",
    "promptPersian": "نمی‌توانید برگ دست‌نویس را به امانت بگیرید مگر آنکه مجوز داشته باشید.",
    "acceptedAnswers": [
      "unless"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Adverb Clauses"
    ],
    "targetGrammarConcept": "Negative conditional clause meaning 'if not'.",
    "spellingTolerance": 2,
    "explanation": "Negative conditional clause meaning 'if not'.",
    "explanationPersian": "بند قیدی شرطی منفی با unless به معنای اگر نه."
  },
  {
    "id": "ch-16-q8",
    "chapterId": "ch-16",
    "chapterNumber": 16,
    "questionNumber": 8,
    "difficulty": "medium",
    "prompt": "___ (Since / Although) you are already here, let us review the proofs.",
    "promptPersian": "حال که از قبل اینجا هستید، بیایید نمونه‌ها را مرور کنیم.",
    "acceptedAnswers": [
      "Since",
      "Now that",
      "As"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Adverb Clauses"
    ],
    "targetGrammarConcept": "Adverb clause of cause / circumstance.",
    "spellingTolerance": 2,
    "explanation": "Adverb clause of cause / circumstance.",
    "explanationPersian": "بند قیدی بیان علت و موقعیت با since."
  },
  {
    "id": "ch-16-q9",
    "chapterId": "ch-16",
    "chapterNumber": 16,
    "questionNumber": 9,
    "difficulty": "medium",
    "prompt": "He spoke quietly so that no one ___ (can / could) overhear.",
    "promptPersian": "او به آرامی سخن گفت تا مبادا کسی بشنود.",
    "acceptedAnswers": [
      "could"
    ],
    "alternativeAnswers": [
      "would"
    ],
    "requiredGrammarRules": [
      "Adverb Clauses"
    ],
    "targetGrammarConcept": "Past purpose clause with modal 'could'.",
    "spellingTolerance": 2,
    "explanation": "Past purpose clause with modal 'could'.",
    "explanationPersian": "بند قیدی بیان هدف در گذشته با could."
  },
  {
    "id": "ch-16-q10",
    "chapterId": "ch-16",
    "chapterNumber": 16,
    "questionNumber": 10,
    "difficulty": "medium",
    "prompt": "Even ___ (if / though) it rains tomorrow, we shall proceed.",
    "promptPersian": "حتی اگر فردا باران ببارد، ما ادامه خواهیم داد.",
    "acceptedAnswers": [
      "if"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Adverb Clauses"
    ],
    "targetGrammarConcept": "'Even if' conveys conditional indifference to circumstances.",
    "spellingTolerance": 2,
    "explanation": "'Even if' conveys conditional indifference to circumstances.",
    "explanationPersian": "ترکیب even if برای شرطی فرضی حتی اگر."
  },
  {
    "id": "ch-16-q11",
    "chapterId": "ch-16",
    "chapterNumber": 16,
    "questionNumber": 11,
    "difficulty": "hard",
    "prompt": "___ (Whereas / Where) Arabic has root radicals, English relies on affixation.",
    "promptPersian": "در حالی که عربی دارای ریشه‌های ثلاثی است، انگلیسی به وندافزایی متکی است.",
    "acceptedAnswers": [
      "Whereas",
      "While"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Adverb Clauses"
    ],
    "targetGrammarConcept": "Adverb clause of direct contrast.",
    "spellingTolerance": 1,
    "explanation": "Adverb clause of direct contrast.",
    "explanationPersian": "بند قیدی تقابل مستقیم با whereas."
  },
  {
    "id": "ch-16-q12",
    "chapterId": "ch-16",
    "chapterNumber": 16,
    "questionNumber": 12,
    "difficulty": "hard",
    "prompt": "The bell had scarcely rung ___ (when) the door opened.",
    "promptPersian": "هنوز زنگ به صدا درنیامده بود که در باز شد.",
    "acceptedAnswers": [
      "when",
      "before"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Adverb Clauses"
    ],
    "targetGrammarConcept": "Time conjunction following scarcely / hardly.",
    "spellingTolerance": 1,
    "explanation": "Time conjunction following scarcely / hardly.",
    "explanationPersian": "کلمه ربط زمان when پس از scarcely."
  },
  {
    "id": "ch-16-q13",
    "chapterId": "ch-16",
    "chapterNumber": 16,
    "questionNumber": 13,
    "difficulty": "hard",
    "prompt": "Wherever you ___ (go), remember your principles.",
    "promptPersian": "هر جا که بروی، اصول اخلاقی‌ات را به یاد داشته باش.",
    "acceptedAnswers": [
      "go"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Adverb Clauses"
    ],
    "targetGrammarConcept": "Adverb clause of place takes simple present.",
    "spellingTolerance": 1,
    "explanation": "Adverb clause of place takes simple present.",
    "explanationPersian": "بند قیدی مکان با wherever."
  },
  {
    "id": "ch-16-q14",
    "chapterId": "ch-16",
    "chapterNumber": 16,
    "questionNumber": 14,
    "difficulty": "hard",
    "prompt": "Now ___ the translation is finished, we can print.",
    "promptPersian": "اکنون که ترجمه تمام شده است، می‌توانیم چاپ کنیم.",
    "acceptedAnswers": [
      "that"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Adverb Clauses"
    ],
    "targetGrammarConcept": "Causal connective: 'Now that'.",
    "spellingTolerance": 1,
    "explanation": "Causal connective: 'Now that'.",
    "explanationPersian": "حرف ربط علتی Now that."
  },
  {
    "id": "ch-16-q15",
    "chapterId": "ch-16",
    "chapterNumber": 16,
    "questionNumber": 15,
    "difficulty": "hard",
    "prompt": "He acted as ___ (if / though) he owned the library.",
    "promptPersian": "او طوری رفتار کرد که گویی مالک کتابخانه بود.",
    "acceptedAnswers": [
      "if",
      "though"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Adverb Clauses"
    ],
    "targetGrammarConcept": "Adverb clause of manner / hypothetical comparison.",
    "spellingTolerance": 1,
    "explanation": "Adverb clause of manner / hypothetical comparison.",
    "explanationPersian": "بند قیدی حالت و تشبیه فرضی با as if."
  },
  {
    "id": "ch-16-q16",
    "chapterId": "ch-16",
    "chapterNumber": 16,
    "questionNumber": 16,
    "difficulty": "advanced",
    "prompt": "Inasmuch ___ the author provided citations, the work is authoritative.",
    "promptPersian": "از آنجا که نویسنده ارجاعات را فراهم ساخت، اثر معتبر است.",
    "acceptedAnswers": [
      "as"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Adverb Clauses"
    ],
    "targetGrammarConcept": "Formal causal connective: 'inasmuch as'.",
    "spellingTolerance": 1,
    "explanation": "Formal causal connective: 'inasmuch as'.",
    "explanationPersian": "حرف ربط رسمی علتی inasmuch as."
  },
  {
    "id": "ch-16-q17",
    "chapterId": "ch-16",
    "chapterNumber": 16,
    "questionNumber": 17,
    "difficulty": "advanced",
    "prompt": "He continued his research ___ (despite / although) he was ill.",
    "promptPersian": "او به تحقیقاتش ادامه داد با وجود اینکه بیمار بود.",
    "acceptedAnswers": [
      "although",
      "even though",
      "though"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Adverb Clauses"
    ],
    "targetGrammarConcept": "Full clause requires subordinating conjunction 'although', not 'despite'.",
    "spellingTolerance": 1,
    "explanation": "Full clause requires subordinating conjunction 'although', not 'despite'.",
    "explanationPersian": "بند کامل نیازمند although است نه حرف اضافه despite."
  },
  {
    "id": "ch-16-q18",
    "chapterId": "ch-16",
    "chapterNumber": 16,
    "questionNumber": 18,
    "difficulty": "advanced",
    "prompt": "We departed early in order ___ we might catch the morning coach.",
    "promptPersian": "ما زود حرکت کردیم تا بتوانیم به درشکه صبحگاهی برسیم.",
    "acceptedAnswers": [
      "that"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Adverb Clauses"
    ],
    "targetGrammarConcept": "Purpose conjunction: 'in order that'.",
    "spellingTolerance": 1,
    "explanation": "Purpose conjunction: 'in order that'.",
    "explanationPersian": "کلمه ربط هدف in order that."
  },
  {
    "id": "ch-16-q19",
    "chapterId": "ch-16",
    "chapterNumber": 16,
    "questionNumber": 19,
    "difficulty": "advanced",
    "prompt": "He looked as though he ___ (see) a ghost.",
    "promptPersian": "او طوری به نظر می‌رسید که گویی روحی دیده بود.",
    "acceptedAnswers": [
      "had seen"
    ],
    "alternativeAnswers": [
      "saw"
    ],
    "requiredGrammarRules": [
      "Adverb Clauses"
    ],
    "targetGrammarConcept": "Past unreal comparison after 'as though'.",
    "spellingTolerance": 1,
    "explanation": "Past unreal comparison after 'as though'.",
    "explanationPersian": "مقایسه غیرواقعی گذشته پس از as though با ماضی بعید."
  },
  {
    "id": "ch-16-q20",
    "chapterId": "ch-16",
    "chapterNumber": 16,
    "questionNumber": 20,
    "difficulty": "advanced",
    "prompt": "Complete: 'No sooner had he spoken ___ the lights flickered.'",
    "promptPersian": "کامل کنید: «هنوز سخن نگفته بود که چراغ‌ها سوسو زدند.»",
    "acceptedAnswers": [
      "than"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Adverb Clauses"
    ],
    "targetGrammarConcept": "'No sooner' pairs exclusively with 'than'.",
    "spellingTolerance": 1,
    "explanation": "'No sooner' pairs exclusively with 'than'.",
    "explanationPersian": "ترکیب No sooner فقط با than جفت می‌شود."
  },
  {
    "id": "ch-17-q1",
    "chapterId": "ch-17",
    "chapterNumber": 17,
    "questionNumber": 1,
    "difficulty": "easy",
    "prompt": "___ (Having finished / Finishing) his tea, the scholar resumed his translation.",
    "promptPersian": "دانشمند پس از اتمام چایش، ترجمه را از سر گرفت.",
    "acceptedAnswers": [
      "Having finished"
    ],
    "alternativeAnswers": [
      "Finishing",
      "After finishing"
    ],
    "requiredGrammarRules": [
      "Reduction of Adverb Clauses to Modifying Phrases"
    ],
    "targetGrammarConcept": "Perfect participial phrase showing completed antecedent action.",
    "spellingTolerance": 2,
    "explanation": "Perfect participial phrase showing completed antecedent action.",
    "explanationPersian": "عبارت وصفی کامل با having + V3 برای نشان دادن اتمام کار پیشین."
  },
  {
    "id": "ch-17-q2",
    "chapterId": "ch-17",
    "chapterNumber": 17,
    "questionNumber": 2,
    "difficulty": "easy",
    "prompt": "While ___ (walk) in the quadrangle, he contemplated the word origin.",
    "promptPersian": "در حین قدم زدن در صحن دانشگاه، او درباره ریشه کلمه اندیشید.",
    "acceptedAnswers": [
      "walking"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Reduction of Adverb Clauses to Modifying Phrases"
    ],
    "targetGrammarConcept": "Reduced time clause: while + present participle.",
    "spellingTolerance": 2,
    "explanation": "Reduced time clause: while + present participle.",
    "explanationPersian": "بند زمانی خلاصه‌شده: while + وجه وصفی حال."
  },
  {
    "id": "ch-17-q3",
    "chapterId": "ch-17",
    "chapterNumber": 17,
    "questionNumber": 3,
    "difficulty": "easy",
    "prompt": "___ (Be) a meticulous scholar, Haim verified every entry.",
    "promptPersian": "حییم که دانشمندی دقیق بود، هر مدخل را راستی‌آزمایی کرد.",
    "acceptedAnswers": [
      "Being"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Reduction of Adverb Clauses to Modifying Phrases"
    ],
    "targetGrammarConcept": "Participial phrase explaining cause (Because he was...).",
    "spellingTolerance": 2,
    "explanation": "Participial phrase explaining cause (Because he was...).",
    "explanationPersian": "عبارت وصفی بیانگر علت با being."
  },
  {
    "id": "ch-17-q4",
    "chapterId": "ch-17",
    "chapterNumber": 17,
    "questionNumber": 4,
    "difficulty": "easy",
    "prompt": "Before ___ (publish) the lexicon, the editors checked every page.",
    "promptPersian": "ویراستاران پیش از چاپ فرهنگ، هر صفحه را بررسی کردند.",
    "acceptedAnswers": [
      "publishing"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Reduction of Adverb Clauses to Modifying Phrases"
    ],
    "targetGrammarConcept": "Preposition + gerund reduced clause.",
    "spellingTolerance": 2,
    "explanation": "Preposition + gerund reduced clause.",
    "explanationPersian": "کوتاه‌سازی با before + اسم مصدر."
  },
  {
    "id": "ch-17-q5",
    "chapterId": "ch-17",
    "chapterNumber": 17,
    "questionNumber": 5,
    "difficulty": "easy",
    "prompt": "Upon ___ (hear) the news, the professor smiled with satisfaction.",
    "promptPersian": "استاد به محض شنیدن خبر، با رضایت لبخند زد.",
    "acceptedAnswers": [
      "hearing"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Reduction of Adverb Clauses to Modifying Phrases"
    ],
    "targetGrammarConcept": "'Upon + -ing' denotes immediate sequential action.",
    "spellingTolerance": 2,
    "explanation": "'Upon + -ing' denotes immediate sequential action.",
    "explanationPersian": "ترکیب upon + ing برای بیان رویداد بلافاصله."
  },
  {
    "id": "ch-17-q6",
    "chapterId": "ch-17",
    "chapterNumber": 17,
    "questionNumber": 6,
    "difficulty": "medium",
    "prompt": "Having ___ (examine) the bindings, the collector purchased the folio.",
    "promptPersian": "مجموعه‌دار پس از بررسی صحافی‌ها، برگ دست‌نویس را خرید.",
    "acceptedAnswers": [
      "examined"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Reduction of Adverb Clauses to Modifying Phrases"
    ],
    "targetGrammarConcept": "Past participle after 'having'.",
    "spellingTolerance": 2,
    "explanation": "Past participle after 'having'.",
    "explanationPersian": "قسمت سوم فعل پس از having."
  },
  {
    "id": "ch-17-q7",
    "chapterId": "ch-17",
    "chapterNumber": 17,
    "questionNumber": 7,
    "difficulty": "medium",
    "prompt": "While ___ (transcribe) the text, she discovered an ancient gloss.",
    "promptPersian": "در حین رونویسی متن، او حاشیه‌نویسی کهنی کشف کرد.",
    "acceptedAnswers": [
      "transcribing"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Reduction of Adverb Clauses to Modifying Phrases"
    ],
    "targetGrammarConcept": "Reduced temporal clause with while.",
    "spellingTolerance": 2,
    "explanation": "Reduced temporal clause with while.",
    "explanationPersian": "خلاصه‌سازی بند زمانی با while."
  },
  {
    "id": "ch-17-q8",
    "chapterId": "ch-17",
    "chapterNumber": 17,
    "questionNumber": 8,
    "difficulty": "medium",
    "prompt": "___ (Shock) by the omission, the author demanded a reprint.",
    "promptPersian": "نویسنده که از این از قلم‌افتادگی شوکه شده بود، تقاضای تجدید چاپ کرد.",
    "acceptedAnswers": [
      "Shocked"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Reduction of Adverb Clauses to Modifying Phrases"
    ],
    "targetGrammarConcept": "Passive past participial phrase expressing cause.",
    "spellingTolerance": 2,
    "explanation": "Passive past participial phrase expressing cause.",
    "explanationPersian": "عبارت مجهول گذشته وصفی بیانگر علت."
  },
  {
    "id": "ch-17-q9",
    "chapterId": "ch-17",
    "chapterNumber": 17,
    "questionNumber": 9,
    "difficulty": "medium",
    "prompt": "After ___ (consult) his advisors, the director gave his approval.",
    "promptPersian": "مدیر پس از مشورت با مشاورانش موافقت خود را اعلام کرد.",
    "acceptedAnswers": [
      "consulting",
      "having consulted"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Reduction of Adverb Clauses to Modifying Phrases"
    ],
    "targetGrammarConcept": "Reduced clause with 'after'.",
    "spellingTolerance": 2,
    "explanation": "Reduced clause with 'after'.",
    "explanationPersian": "بند خلاصه‌شده با after."
  },
  {
    "id": "ch-17-q10",
    "chapterId": "ch-17",
    "chapterNumber": 17,
    "questionNumber": 10,
    "difficulty": "medium",
    "prompt": "___ (Know) the perils of haste, the lexicographer worked slowly.",
    "promptPersian": "فرهنگ‌نویس که خطرات شتاب‌زدگی را می‌دانست، با آرامش کار می‌کرد.",
    "acceptedAnswers": [
      "Knowing"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Reduction of Adverb Clauses to Modifying Phrases"
    ],
    "targetGrammarConcept": "Present participle phrase showing reason.",
    "spellingTolerance": 2,
    "explanation": "Present participle phrase showing reason.",
    "explanationPersian": "عبارت حال وصفی بیانگر آگاهی و دلیل."
  },
  {
    "id": "ch-17-q11",
    "chapterId": "ch-17",
    "chapterNumber": 17,
    "questionNumber": 11,
    "difficulty": "hard",
    "prompt": "Avoid the dangling modifier: 'Walking through the hall, ___ (the bell rang / he heard the bell).'",
    "promptPersian": "از توصیف‌گر معلق پرهیز کنید: «در حال عبور از سالن، ...»",
    "acceptedAnswers": [
      "he heard the bell"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Reduction of Adverb Clauses to Modifying Phrases"
    ],
    "targetGrammarConcept": "Subject of the main clause must perform the walking.",
    "spellingTolerance": 1,
    "explanation": "Subject of the main clause must perform the walking.",
    "explanationPersian": "فاعل جمله اصلی باید همان کسی باشد که عمل قدم زدن را انجام می‌دهد."
  },
  {
    "id": "ch-17-q12",
    "chapterId": "ch-17",
    "chapterNumber": 17,
    "questionNumber": 12,
    "difficulty": "hard",
    "prompt": "___ (See) from a distance, the cathedral looked majestic.",
    "promptPersian": "کلیسای جامع وقتی از دور دیده می‌شد باوقار جلوه می‌کرد.",
    "acceptedAnswers": [
      "Seen"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Reduction of Adverb Clauses to Modifying Phrases"
    ],
    "targetGrammarConcept": "Passive reduction: (When it was seen -> Seen).",
    "spellingTolerance": 1,
    "explanation": "Passive reduction: (When it was seen -> Seen).",
    "explanationPersian": "خلاصه‌سازی مجهول زمانی به Seen."
  },
  {
    "id": "ch-17-q13",
    "chapterId": "ch-17",
    "chapterNumber": 17,
    "questionNumber": 13,
    "difficulty": "hard",
    "prompt": "Having ___ (bear) the burden for decades, he finally rested.",
    "promptPersian": "پس از آنکه دهه‌ها بار این مسئولیت را به دوش کشیده بود، سرانجام استراحت کرد.",
    "acceptedAnswers": [
      "borne"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Reduction of Adverb Clauses to Modifying Phrases"
    ],
    "targetGrammarConcept": "Irregular past participle of bear (carry): borne.",
    "spellingTolerance": 1,
    "explanation": "Irregular past participle of bear (carry): borne.",
    "explanationPersian": "قسمت سوم بی‌قاعده فعل bear به معنای حمل کردن: borne."
  },
  {
    "id": "ch-17-q14",
    "chapterId": "ch-17",
    "chapterNumber": 17,
    "questionNumber": 14,
    "difficulty": "hard",
    "prompt": "When ___ (ask) about his methods, he cited Haim's preface.",
    "promptPersian": "هنگامی که درباره روش‌هایش مورد پرسش قرار گرفت، به مقدمه حییم ارجاع داد.",
    "acceptedAnswers": [
      "asked"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Reduction of Adverb Clauses to Modifying Phrases"
    ],
    "targetGrammarConcept": "Reduced passive time clause: When asked.",
    "spellingTolerance": 1,
    "explanation": "Reduced passive time clause: When asked.",
    "explanationPersian": "بند زمانی مجهول خلاصه‌شده با when asked."
  },
  {
    "id": "ch-17-q15",
    "chapterId": "ch-17",
    "chapterNumber": 17,
    "questionNumber": 15,
    "difficulty": "hard",
    "prompt": "___ (Lack) proper funding, the project faced great delays.",
    "promptPersian": "پروژه به دلیل کمبود بودجه مناسب با تأخیرهای بزرگی مواجه شد.",
    "acceptedAnswers": [
      "Lacking"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Reduction of Adverb Clauses to Modifying Phrases"
    ],
    "targetGrammarConcept": "Present participle expressing cause.",
    "spellingTolerance": 1,
    "explanation": "Present participle expressing cause.",
    "explanationPersian": "وجه وصفی حال بیانگر علت."
  },
  {
    "id": "ch-17-q16",
    "chapterId": "ch-17",
    "chapterNumber": 17,
    "questionNumber": 16,
    "difficulty": "advanced",
    "prompt": "While ___ (work) at the Anglo-Iranian Oil Company, Haim compiled dictionaries.",
    "promptPersian": "حییم در حین کار در شرکت نفت انگلیس و ایران، لغت‌نامه‌ها را گردآوری کرد.",
    "acceptedAnswers": [
      "working"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Reduction of Adverb Clauses to Modifying Phrases"
    ],
    "targetGrammarConcept": "Reduced temporal clause.",
    "spellingTolerance": 1,
    "explanation": "Reduced temporal clause.",
    "explanationPersian": "بند زمانی خلاصه‌شده با working."
  },
  {
    "id": "ch-17-q17",
    "chapterId": "ch-17",
    "chapterNumber": 17,
    "questionNumber": 17,
    "difficulty": "advanced",
    "prompt": "___ (Frighten) by the thunderstorm, the children ran indoors.",
    "promptPersian": "کودکان که از طوفان و رعد و برق ترسیده بودند به داخل خانه دویدند.",
    "acceptedAnswers": [
      "Frightened"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Reduction of Adverb Clauses to Modifying Phrases"
    ],
    "targetGrammarConcept": "Past participial adjective phrase.",
    "spellingTolerance": 1,
    "explanation": "Past participial adjective phrase.",
    "explanationPersian": "عبارت وصفی با صفت مفعولی."
  },
  {
    "id": "ch-17-q18",
    "chapterId": "ch-17",
    "chapterNumber": 17,
    "questionNumber": 18,
    "difficulty": "advanced",
    "prompt": "Having ___ (spend) all his savings, he returned to teaching.",
    "promptPersian": "او پس از صرف تمام پس‌اندازش، به تدریس بازگشت.",
    "acceptedAnswers": [
      "spent"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Reduction of Adverb Clauses to Modifying Phrases"
    ],
    "targetGrammarConcept": "Past participle after having.",
    "spellingTolerance": 1,
    "explanation": "Past participle after having.",
    "explanationPersian": "قسمت سوم فعل spent پس از having."
  },
  {
    "id": "ch-17-q19",
    "chapterId": "ch-17",
    "chapterNumber": 17,
    "questionNumber": 19,
    "difficulty": "advanced",
    "prompt": "Before ___ (enter) the sanctum, all visitors must remove their footwear.",
    "promptPersian": "پیش از ورود به جایگاه مقدس، همه بازدیدکنندگان باید پاپوش خود را درآورند.",
    "acceptedAnswers": [
      "entering"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Reduction of Adverb Clauses to Modifying Phrases"
    ],
    "targetGrammarConcept": "Preposition 'before' with gerund.",
    "spellingTolerance": 1,
    "explanation": "Preposition 'before' with gerund.",
    "explanationPersian": "حرف اضافه before همراه با اسم مصدر."
  },
  {
    "id": "ch-17-q20",
    "chapterId": "ch-17",
    "chapterNumber": 17,
    "questionNumber": 20,
    "difficulty": "advanced",
    "prompt": "Complete: '___ (exhaust) by long hours, the printer fell asleep.'",
    "promptPersian": "کامل کنید: «چاپ‌کننده که از ساعت‌های طولانی کار از پا درآمده بود به خواب رفت.»",
    "acceptedAnswers": [
      "Exhausted"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Reduction of Adverb Clauses to Modifying Phrases"
    ],
    "targetGrammarConcept": "Past participle indicating state/cause.",
    "spellingTolerance": 1,
    "explanation": "Past participle indicating state/cause.",
    "explanationPersian": "صفت مفعولی بیانگر فرسودگی و علت."
  },
  {
    "id": "ch-18-q1",
    "chapterId": "ch-18",
    "chapterNumber": 18,
    "questionNumber": 1,
    "difficulty": "easy",
    "prompt": "The text was obscure; ___ (therefore / however), few scholars could decipher it.",
    "promptPersian": "متن مبهم بود؛ بنابراین دانشمندان اندکی توانستند آن را رمزگشایی کنند.",
    "acceptedAnswers": [
      "therefore",
      "consequently"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Connectives Expressing Cause/Effect, Contrast, and Condition"
    ],
    "targetGrammarConcept": "Conjunctive adverb of result.",
    "spellingTolerance": 2,
    "explanation": "Conjunctive adverb of result.",
    "explanationPersian": "قید ربطی بیان نتیجه therefore."
  },
  {
    "id": "ch-18-q2",
    "chapterId": "ch-18",
    "chapterNumber": 18,
    "questionNumber": 2,
    "difficulty": "easy",
    "prompt": "The book was expensive; ___ (nevertheless / therefore), every library bought a copy.",
    "promptPersian": "کتاب گران‌قیمت بود؛ با این وجود، هر کتابخانه‌ای نسخه‌ای از آن را خرید.",
    "acceptedAnswers": [
      "nevertheless",
      "nonetheless",
      "however"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Connectives Expressing Cause/Effect, Contrast, and Condition"
    ],
    "targetGrammarConcept": "Conjunctive adverb of concession and contrast.",
    "spellingTolerance": 2,
    "explanation": "Conjunctive adverb of concession and contrast.",
    "explanationPersian": "قید ربطی بیان تضاد و تعارض nevertheless."
  },
  {
    "id": "ch-18-q3",
    "chapterId": "ch-18",
    "chapterNumber": 18,
    "questionNumber": 3,
    "difficulty": "easy",
    "prompt": "He succeeded ___ (in spite of / although) numerous obstacles.",
    "promptPersian": "او به‌رغم موانع بی‌شمار موفق شد.",
    "acceptedAnswers": [
      "in spite of",
      "despite"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Connectives Expressing Cause/Effect, Contrast, and Condition"
    ],
    "targetGrammarConcept": "Prepositional connective taking a noun phrase.",
    "spellingTolerance": 2,
    "explanation": "Prepositional connective taking a noun phrase.",
    "explanationPersian": "حرف اضافه بیان تضاد همراه با عبارت اسمی."
  },
  {
    "id": "ch-18-q4",
    "chapterId": "ch-18",
    "chapterNumber": 18,
    "questionNumber": 4,
    "difficulty": "easy",
    "prompt": "The storm was severe; ___ (consequently / however), the postal carriage was delayed.",
    "promptPersian": "طوفان شدید بود؛ در نتیجه، درشکه پست به تأخیر افتاد.",
    "acceptedAnswers": [
      "consequently",
      "therefore",
      "as a result"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Connectives Expressing Cause/Effect, Contrast, and Condition"
    ],
    "targetGrammarConcept": "Conjunctive adverb showing consequence.",
    "spellingTolerance": 2,
    "explanation": "Conjunctive adverb showing consequence.",
    "explanationPersian": "قید ربطی بیان معلول و نتیجه consequently."
  },
  {
    "id": "ch-18-q5",
    "chapterId": "ch-18",
    "chapterNumber": 18,
    "questionNumber": 5,
    "difficulty": "easy",
    "prompt": "We must preserve the manuscript; ___ (otherwise), it will deteriorate.",
    "promptPersian": "ما باید دست‌نوشته را حفظ کنیم؛ در غیر این صورت فرسوده خواهد شد.",
    "acceptedAnswers": [
      "otherwise"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Connectives Expressing Cause/Effect, Contrast, and Condition"
    ],
    "targetGrammarConcept": "Connective expressing alternative negative condition.",
    "spellingTolerance": 2,
    "explanation": "Connective expressing alternative negative condition.",
    "explanationPersian": "کلمه ربط بیان شرط منفی otherwise."
  },
  {
    "id": "ch-18-q6",
    "chapterId": "ch-18",
    "chapterNumber": 18,
    "questionNumber": 6,
    "difficulty": "medium",
    "prompt": "He loved English literature; ___ (furthermore / nevertheless), he wrote fine Persian verse.",
    "promptPersian": "او عاشق ادبیات انگلیسی بود؛ علاوه بر این، اشعار فارسی نغزی نیز می‌سرود.",
    "acceptedAnswers": [
      "furthermore",
      "moreover",
      "in addition"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Connectives Expressing Cause/Effect, Contrast, and Condition"
    ],
    "targetGrammarConcept": "Conjunctive adverb adding supportive evidence.",
    "spellingTolerance": 2,
    "explanation": "Conjunctive adverb adding supportive evidence.",
    "explanationPersian": "قید ربطی بیان افزودن مطلب furthermore."
  },
  {
    "id": "ch-18-q7",
    "chapterId": "ch-18",
    "chapterNumber": 18,
    "questionNumber": 7,
    "difficulty": "medium",
    "prompt": "___ (Despite / Although) the heavy fog, the courier rode forth.",
    "promptPersian": "به‌رغم مه غلیظ، قاصد به پیش راند.",
    "acceptedAnswers": [
      "Despite",
      "In spite of"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Connectives Expressing Cause/Effect, Contrast, and Condition"
    ],
    "targetGrammarConcept": "Preposition of contrast taking a noun phrase.",
    "spellingTolerance": 2,
    "explanation": "Preposition of contrast taking a noun phrase.",
    "explanationPersian": "حرف اضافه تضاد despite همراه با عبارت اسمی."
  },
  {
    "id": "ch-18-q8",
    "chapterId": "ch-18",
    "chapterNumber": 18,
    "questionNumber": 8,
    "difficulty": "medium",
    "prompt": "The grammar is comprehensive. ___ (On the other hand / Therefore), it is quite challenging.",
    "promptPersian": "دستور زبان جامع است. از سوی دیگر، کاملاً چالش‌برانگیز است.",
    "acceptedAnswers": [
      "On the other hand",
      "However",
      "In contrast"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Connectives Expressing Cause/Effect, Contrast, and Condition"
    ],
    "targetGrammarConcept": "Transition showing contrasting perspective.",
    "spellingTolerance": 2,
    "explanation": "Transition showing contrasting perspective.",
    "explanationPersian": "عبارت انتقالی بیان جنبه متضاد."
  },
  {
    "id": "ch-18-q9",
    "chapterId": "ch-18",
    "chapterNumber": 18,
    "questionNumber": 9,
    "difficulty": "medium",
    "prompt": "He arrived late ___ (because of / because) a broken carriage axle.",
    "promptPersian": "او به سبب شکستن محور درشکه دیر رسید.",
    "acceptedAnswers": [
      "because of",
      "due to",
      "owing to"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Connectives Expressing Cause/Effect, Contrast, and Condition"
    ],
    "targetGrammarConcept": "Prepositional cause connective taking a noun phrase.",
    "spellingTolerance": 2,
    "explanation": "Prepositional cause connective taking a noun phrase.",
    "explanationPersian": "حرف اضافه بیان علت همراه با اسم because of."
  },
  {
    "id": "ch-18-q10",
    "chapterId": "ch-18",
    "chapterNumber": 18,
    "questionNumber": 10,
    "difficulty": "medium",
    "prompt": "The library was quiet; ___ (moreover), the heating was pleasant.",
    "promptPersian": "کتابخانه آرام بود؛ افزون بر آن، گرمایش نیز مطبوع بود.",
    "acceptedAnswers": [
      "moreover",
      "furthermore"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Connectives Expressing Cause/Effect, Contrast, and Condition"
    ],
    "targetGrammarConcept": "Conjunctive adverb adding positive details.",
    "spellingTolerance": 2,
    "explanation": "Conjunctive adverb adding positive details.",
    "explanationPersian": "قید ربطی افزودن moreover."
  },
  {
    "id": "ch-18-q11",
    "chapterId": "ch-18",
    "chapterNumber": 18,
    "questionNumber": 11,
    "difficulty": "hard",
    "prompt": "You must hurry; ___ (otherwise), the archive will be closed.",
    "promptPersian": "باید عجله کنی؛ در غیر این صورت بایگانی بسته خواهد شد.",
    "acceptedAnswers": [
      "otherwise"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Connectives Expressing Cause/Effect, Contrast, and Condition"
    ],
    "targetGrammarConcept": "Conjunctive adverb 'otherwise'.",
    "spellingTolerance": 1,
    "explanation": "Conjunctive adverb 'otherwise'.",
    "explanationPersian": "قید ربطی بیان وگرنه otherwise."
  },
  {
    "id": "ch-18-q12",
    "chapterId": "ch-18",
    "chapterNumber": 18,
    "questionNumber": 12,
    "difficulty": "hard",
    "prompt": "___ (In contrast to / Although) his predecessor, the new director was approachable.",
    "promptPersian": "بر خلاف سلف خویش، مدیر جدید خوش‌برخورد و دست‌یافتنی بود.",
    "acceptedAnswers": [
      "In contrast to",
      "Unlike"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Connectives Expressing Cause/Effect, Contrast, and Condition"
    ],
    "targetGrammarConcept": "Prepositional contrast phrase.",
    "spellingTolerance": 1,
    "explanation": "Prepositional contrast phrase.",
    "explanationPersian": "عبارت حرف اضافه‌ای بیان تقابل."
  },
  {
    "id": "ch-18-q13",
    "chapterId": "ch-18",
    "chapterNumber": 18,
    "questionNumber": 13,
    "difficulty": "hard",
    "prompt": "He was fatigued; ___ (nonetheless), he completed his translation.",
    "promptPersian": "او خسته بود؛ با این حال، ترجمه‌اش را به پایان رساند.",
    "acceptedAnswers": [
      "nonetheless",
      "nevertheless"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Connectives Expressing Cause/Effect, Contrast, and Condition"
    ],
    "targetGrammarConcept": "Conjunctive adverb of concession.",
    "spellingTolerance": 1,
    "explanation": "Conjunctive adverb of concession.",
    "explanationPersian": "قید ربطی بیان تعارض nonetheless."
  },
  {
    "id": "ch-18-q14",
    "chapterId": "ch-18",
    "chapterNumber": 18,
    "questionNumber": 14,
    "difficulty": "hard",
    "prompt": "The volume is small. It is, ___ (however), extraordinarily informative.",
    "promptPersian": "کتاب حجم اندکی دارد. با این وجود، فوق‌العاده آموزنده است.",
    "acceptedAnswers": [
      "however",
      "nevertheless"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Connectives Expressing Cause/Effect, Contrast, and Condition"
    ],
    "targetGrammarConcept": "Parenthetical conjunctive adverb.",
    "spellingTolerance": 1,
    "explanation": "Parenthetical conjunctive adverb.",
    "explanationPersian": "قید ربطی معترضه however."
  },
  {
    "id": "ch-18-q15",
    "chapterId": "ch-18",
    "chapterNumber": 18,
    "questionNumber": 15,
    "difficulty": "hard",
    "prompt": "We cancelled the expedition ___ (due to) the severe blizzards.",
    "promptPersian": "ما به دلیل کولاک‌های شدید سفر اکتشافی را لغو کردیم.",
    "acceptedAnswers": [
      "due to",
      "because of",
      "owing to"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Connectives Expressing Cause/Effect, Contrast, and Condition"
    ],
    "targetGrammarConcept": "Prepositional cause phrase.",
    "spellingTolerance": 1,
    "explanation": "Prepositional cause phrase.",
    "explanationPersian": "عبارت بیان علت due to."
  },
  {
    "id": "ch-18-q16",
    "chapterId": "ch-18",
    "chapterNumber": 18,
    "questionNumber": 16,
    "difficulty": "advanced",
    "prompt": "He possessed great wealth; ___ (even so), he lived modestly.",
    "promptPersian": "او ثروت فراوانی داشت؛ با این همه، متواضعانه می‌زیست.",
    "acceptedAnswers": [
      "even so"
    ],
    "alternativeAnswers": [
      "nevertheless"
    ],
    "requiredGrammarRules": [
      "Connectives Expressing Cause/Effect, Contrast, and Condition"
    ],
    "targetGrammarConcept": "Transition phrase meaning 'nevertheless'.",
    "spellingTolerance": 1,
    "explanation": "Transition phrase meaning 'nevertheless'.",
    "explanationPersian": "عبارت انتقالی even so."
  },
  {
    "id": "ch-18-q17",
    "chapterId": "ch-18",
    "chapterNumber": 18,
    "questionNumber": 17,
    "difficulty": "advanced",
    "prompt": "The task was tedious; ___ (all the same), we persevered.",
    "promptPersian": "کار ملال‌آور بود؛ با این همه، ما پایداری کردیم.",
    "acceptedAnswers": [
      "all the same"
    ],
    "alternativeAnswers": [
      "nevertheless"
    ],
    "requiredGrammarRules": [
      "Connectives Expressing Cause/Effect, Contrast, and Condition"
    ],
    "targetGrammarConcept": "Idiomatic transition of concession.",
    "spellingTolerance": 1,
    "explanation": "Idiomatic transition of concession.",
    "explanationPersian": "عبارت اصطلاحی all the same."
  },
  {
    "id": "ch-18-q18",
    "chapterId": "ch-18",
    "chapterNumber": 18,
    "questionNumber": 18,
    "difficulty": "advanced",
    "prompt": "He gave up his rights; ___ (as a result), he received no royalties.",
    "promptPersian": "او از حقوق خود چشم‌پوشی کرد؛ در نتیجه، هیچ حق‌تألیفی دریافت ننمود.",
    "acceptedAnswers": [
      "as a result",
      "consequently"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Connectives Expressing Cause/Effect, Contrast, and Condition"
    ],
    "targetGrammarConcept": "Prepositional result phrase.",
    "spellingTolerance": 1,
    "explanation": "Prepositional result phrase.",
    "explanationPersian": "عبارت بیان نتیجه as a result."
  },
  {
    "id": "ch-18-q19",
    "chapterId": "ch-18",
    "chapterNumber": 18,
    "questionNumber": 19,
    "difficulty": "advanced",
    "prompt": "She was exhausted, ___ (yet) she refused to abandon her desk.",
    "promptPersian": "او خسته و درمانده بود، با این حال حاضر به ترک میز کارش نشد.",
    "acceptedAnswers": [
      "yet",
      "but"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Connectives Expressing Cause/Effect, Contrast, and Condition"
    ],
    "targetGrammarConcept": "Coordinating conjunction of concession.",
    "spellingTolerance": 1,
    "explanation": "Coordinating conjunction of concession.",
    "explanationPersian": "حرف ربط همپایه بیان تقابل yet."
  },
  {
    "id": "ch-18-q20",
    "chapterId": "ch-18",
    "chapterNumber": 18,
    "questionNumber": 20,
    "difficulty": "advanced",
    "prompt": "Complete: 'Punctuation was updated; ___ (likewise), orthography was modernized.'",
    "promptPersian": "کامل کنید: «نشانه‌گذاری به‌روز شد؛ به همین منوال، رسم‌الخط نیز امروزی گردید.»",
    "acceptedAnswers": [
      "likewise",
      "similarly"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Connectives Expressing Cause/Effect, Contrast, and Condition"
    ],
    "targetGrammarConcept": "Conjunctive adverb of comparison/similarity.",
    "spellingTolerance": 1,
    "explanation": "Conjunctive adverb of comparison/similarity.",
    "explanationPersian": "قید ربطی بیان شباهت و هماهنگی likewise."
  },
  {
    "id": "ch-19-q1",
    "chapterId": "ch-19",
    "chapterNumber": 19,
    "questionNumber": 1,
    "difficulty": "easy",
    "prompt": "If I ___ (be) in your position, I would accept the appointment.",
    "promptPersian": "اگر من جای شما بودم، این انتصاب را می‌پذیرفتم.",
    "acceptedAnswers": [
      "were"
    ],
    "alternativeAnswers": [
      "was"
    ],
    "requiredGrammarRules": [
      "Conditional Sentences and Wishes"
    ],
    "targetGrammarConcept": "Second conditional subjunctive 'were' for all persons in formal English.",
    "spellingTolerance": 2,
    "explanation": "Second conditional subjunctive 'were' for all persons in formal English.",
    "explanationPersian": "شرطی نوع دوم با were برای تمامی اشخاص در انگلیسی معیار."
  },
  {
    "id": "ch-19-q2",
    "chapterId": "ch-19",
    "chapterNumber": 19,
    "questionNumber": 2,
    "difficulty": "easy",
    "prompt": "If the scribe had inspected the manuscript, he ___ (find) the missing gloss.",
    "promptPersian": "اگر کاتب دست‌نوشته را بررسی کرده بود، حاشیه گم‌شده را می‌یافت.",
    "acceptedAnswers": [
      "would have found"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Conditional Sentences and Wishes"
    ],
    "targetGrammarConcept": "Third conditional result clause: would have + past participle.",
    "spellingTolerance": 2,
    "explanation": "Third conditional result clause: would have + past participle.",
    "explanationPersian": "بند نتیجه شرطی نوع سوم: would have + V3."
  },
  {
    "id": "ch-19-q3",
    "chapterId": "ch-19",
    "chapterNumber": 19,
    "questionNumber": 3,
    "difficulty": "easy",
    "prompt": "I wish I ___ (know) the answer to this grammatical riddle.",
    "promptPersian": "کاش پاسخ این معمای دستوری را می‌دانستم.",
    "acceptedAnswers": [
      "knew"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Conditional Sentences and Wishes"
    ],
    "targetGrammarConcept": "'Wish' for present unreality takes past simple.",
    "spellingTolerance": 2,
    "explanation": "'Wish' for present unreality takes past simple.",
    "explanationPersian": "بیان آرزوی خلاف واقع در زمان حال با گذشته ساده."
  },
  {
    "id": "ch-19-q4",
    "chapterId": "ch-19",
    "chapterNumber": 19,
    "questionNumber": 4,
    "difficulty": "easy",
    "prompt": "I wish I ___ (consult) Haim's larger dictionary yesterday.",
    "promptPersian": "ای کاش دیروز به فرهنگ بزرگ حییم مراجعه کرده بودم.",
    "acceptedAnswers": [
      "had consulted"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Conditional Sentences and Wishes"
    ],
    "targetGrammarConcept": "'Wish' for past regret takes past perfect.",
    "spellingTolerance": 2,
    "explanation": "'Wish' for past regret takes past perfect.",
    "explanationPersian": "ابراز حسرت گذشته با wish و ماضی بعید."
  },
  {
    "id": "ch-19-q5",
    "chapterId": "ch-19",
    "chapterNumber": 19,
    "questionNumber": 5,
    "difficulty": "easy",
    "prompt": "If water reaches 100 degrees Celsius, it ___ (boil).",
    "promptPersian": "اگر آب به ۱۰۰ درجه سلسیوس برسد، می‌جوشد.",
    "acceptedAnswers": [
      "boils"
    ],
    "alternativeAnswers": [
      "will boil"
    ],
    "requiredGrammarRules": [
      "Conditional Sentences and Wishes"
    ],
    "targetGrammarConcept": "Zero conditional for scientific certainty.",
    "spellingTolerance": 2,
    "explanation": "Zero conditional for scientific certainty.",
    "explanationPersian": "شرطی نوع صفر برای حقایق علمی همیشگی."
  },
  {
    "id": "ch-19-q6",
    "chapterId": "ch-19",
    "chapterNumber": 19,
    "questionNumber": 6,
    "difficulty": "medium",
    "prompt": "Unless you ___ (hurry), you will miss the morning train.",
    "promptPersian": "مگر آنکه عجله کنی، وگرنه قطار صبح را از دست خواهی داد.",
    "acceptedAnswers": [
      "hurry"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Conditional Sentences and Wishes"
    ],
    "targetGrammarConcept": "'Unless' clause takes affirmative present verb.",
    "spellingTolerance": 2,
    "explanation": "'Unless' clause takes affirmative present verb.",
    "explanationPersian": "بند شرطی با unless فعل مثبت حال می‌گیرد."
  },
  {
    "id": "ch-19-q7",
    "chapterId": "ch-19",
    "chapterNumber": 19,
    "questionNumber": 7,
    "difficulty": "medium",
    "prompt": "If he ___ (study) harder in his youth, he would be a professor today.",
    "promptPersian": "اگر در جوانی بیشتر درس خوانده بود، امروز یک استاد دانشگاه می‌بود.",
    "acceptedAnswers": [
      "had studied"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Conditional Sentences and Wishes"
    ],
    "targetGrammarConcept": "Mixed conditional: past condition with present result.",
    "spellingTolerance": 2,
    "explanation": "Mixed conditional: past condition with present result.",
    "explanationPersian": "شرطی ترکیبی: شرط در گذشته و نتیجه در زمان حال."
  },
  {
    "id": "ch-19-q8",
    "chapterId": "ch-19",
    "chapterNumber": 19,
    "questionNumber": 8,
    "difficulty": "medium",
    "prompt": "If it ___ (rain) tomorrow, the garden party will be postponed.",
    "promptPersian": "اگر فردا باران ببارد، مهمانی در باغ به تعویق خواهد افتاد.",
    "acceptedAnswers": [
      "rains"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Conditional Sentences and Wishes"
    ],
    "targetGrammarConcept": "First conditional if-clause takes simple present.",
    "spellingTolerance": 2,
    "explanation": "First conditional if-clause takes simple present.",
    "explanationPersian": "بند شرط در شرطی نوع اول با حال ساده بیان می‌شود."
  },
  {
    "id": "ch-19-q9",
    "chapterId": "ch-19",
    "chapterNumber": 19,
    "questionNumber": 9,
    "difficulty": "medium",
    "prompt": "Had I ___ (know) of your arrival, I would have greeted you at the station.",
    "promptPersian": "اگر از آمدنتان آگاه بودم، در ایستگاه به استقبالتان می‌آمدم.",
    "acceptedAnswers": [
      "known"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Conditional Sentences and Wishes"
    ],
    "targetGrammarConcept": "Inverted third conditional: Had + subject + past participle.",
    "spellingTolerance": 2,
    "explanation": "Inverted third conditional: Had + subject + past participle.",
    "explanationPersian": "شرطی نوع سوم وارونه بدون if با Had + فاعل + V3."
  },
  {
    "id": "ch-19-q10",
    "chapterId": "ch-19",
    "chapterNumber": 19,
    "questionNumber": 10,
    "difficulty": "medium",
    "prompt": "Were he ___ (be) more diligent, he would master the Persian alphabet.",
    "promptPersian": "اگر او پرتلاش‌تر بود، الفبای فارسی را فرامی‌گرفت.",
    "acceptedAnswers": [
      "to be"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Conditional Sentences and Wishes"
    ],
    "targetGrammarConcept": "Inverted second conditional: Were + subject + to-infinitive.",
    "spellingTolerance": 2,
    "explanation": "Inverted second conditional: Were + subject + to-infinitive.",
    "explanationPersian": "شرطی نوع دوم وارونه با Were + فاعل + to-infinitive."
  },
  {
    "id": "ch-19-q11",
    "chapterId": "ch-19",
    "chapterNumber": 19,
    "questionNumber": 11,
    "difficulty": "hard",
    "prompt": "If only I ___ (listen) to the tutor's prudent advice!",
    "promptPersian": "کاش فقط به نصیحت خردمندانه استاد گوش فراداده بودم!",
    "acceptedAnswers": [
      "had listened"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Conditional Sentences and Wishes"
    ],
    "targetGrammarConcept": "'If only' expressing deep past regret takes past perfect.",
    "spellingTolerance": 1,
    "explanation": "'If only' expressing deep past regret takes past perfect.",
    "explanationPersian": "عبارت If only برای حسرت گذشته با ماضی بعید."
  },
  {
    "id": "ch-19-q12",
    "chapterId": "ch-19",
    "chapterNumber": 19,
    "questionNumber": 12,
    "difficulty": "hard",
    "prompt": "I would buy that rare volume if I ___ (have) enough money.",
    "promptPersian": "اگر پول کافی داشتم آن جلد کتاب کمیاب را می‌خریدم.",
    "acceptedAnswers": [
      "had"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Conditional Sentences and Wishes"
    ],
    "targetGrammarConcept": "Second conditional if-clause takes past tense.",
    "spellingTolerance": 1,
    "explanation": "Second conditional if-clause takes past tense.",
    "explanationPersian": "بند شرط در شرطی نوع دوم گذشته ساده می‌گیرد."
  },
  {
    "id": "ch-19-q13",
    "chapterId": "ch-19",
    "chapterNumber": 19,
    "questionNumber": 13,
    "difficulty": "hard",
    "prompt": "Provided that weather ___ (permit), the ship will sail at dawn.",
    "promptPersian": "به شرط آنکه هوا اجازه دهد، کشتی هنگام سپیده‌دم حرکت خواهد کرد.",
    "acceptedAnswers": [
      "permits"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Conditional Sentences and Wishes"
    ],
    "targetGrammarConcept": "Conditional connective 'provided that' takes present tense.",
    "spellingTolerance": 1,
    "explanation": "Conditional connective 'provided that' takes present tense.",
    "explanationPersian": "کلمه شرطی provided that با حال ساده می‌آید."
  },
  {
    "id": "ch-19-q14",
    "chapterId": "ch-19",
    "chapterNumber": 19,
    "questionNumber": 14,
    "difficulty": "hard",
    "prompt": "If you should ___ (encounter) the archivist, convey my warm regards.",
    "promptPersian": "اگر احیاناً با بایگان روبرو شدی، سلام گرم مرا برسان.",
    "acceptedAnswers": [
      "encounter"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Conditional Sentences and Wishes"
    ],
    "targetGrammarConcept": "Hypothetical condition with 'should + bare verb'.",
    "spellingTolerance": 1,
    "explanation": "Hypothetical condition with 'should + bare verb'.",
    "explanationPersian": "شرط احتمالی با should و مصدر ساده."
  },
  {
    "id": "ch-19-q15",
    "chapterId": "ch-19",
    "chapterNumber": 19,
    "questionNumber": 15,
    "difficulty": "hard",
    "prompt": "Should you ___ (require) assistance, do not hesitate to ask.",
    "promptPersian": "چنانچه کمکی نیاز داشتید، در درخواست آن تردید نکنید.",
    "acceptedAnswers": [
      "require"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Conditional Sentences and Wishes"
    ],
    "targetGrammarConcept": "Inverted conditional with 'should'.",
    "spellingTolerance": 1,
    "explanation": "Inverted conditional with 'should'.",
    "explanationPersian": "شرطی وارونه با should."
  },
  {
    "id": "ch-19-q16",
    "chapterId": "ch-19",
    "chapterNumber": 19,
    "questionNumber": 16,
    "difficulty": "advanced",
    "prompt": "I wish the noise ___ (stop); I cannot concentrate.",
    "promptPersian": "کاش این سر و صدا قطع می‌شد؛ نمی‌توانم تمرکز کنم.",
    "acceptedAnswers": [
      "would stop"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Conditional Sentences and Wishes"
    ],
    "targetGrammarConcept": "'Wish + would' expresses desire for a change in behavior or event.",
    "spellingTolerance": 1,
    "explanation": "'Wish + would' expresses desire for a change in behavior or event.",
    "explanationPersian": "ساختار wish + would برای ابراز تمایل به توقف یک عمل آزاردهنده."
  },
  {
    "id": "ch-19-q17",
    "chapterId": "ch-19",
    "chapterNumber": 19,
    "questionNumber": 17,
    "difficulty": "advanced",
    "prompt": "If he ___ (not be) so arrogant, people would admire him.",
    "promptPersian": "اگر این‌قدر مغرور نبود، مردم تحسینش می‌کردند.",
    "acceptedAnswers": [
      "were not",
      "weren't"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Conditional Sentences and Wishes"
    ],
    "targetGrammarConcept": "Negative second conditional.",
    "spellingTolerance": 1,
    "explanation": "Negative second conditional.",
    "explanationPersian": "منفی شرطی نوع دوم با were not."
  },
  {
    "id": "ch-19-q18",
    "chapterId": "ch-19",
    "chapterNumber": 19,
    "questionNumber": 18,
    "difficulty": "advanced",
    "prompt": "If they had arrived earlier, they ___ (not miss) the opening address.",
    "promptPersian": "اگر زودتر رسیده بودند، سخنرانی افتتاحیه را از دست نمی‌دادند.",
    "acceptedAnswers": [
      "would not have missed",
      "wouldn't have missed"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Conditional Sentences and Wishes"
    ],
    "targetGrammarConcept": "Negative third conditional result clause.",
    "spellingTolerance": 1,
    "explanation": "Negative third conditional result clause.",
    "explanationPersian": "بند منفی نتیجه در شرطی نوع سوم."
  },
  {
    "id": "ch-19-q19",
    "chapterId": "ch-19",
    "chapterNumber": 19,
    "questionNumber": 19,
    "difficulty": "advanced",
    "prompt": "She acts as if she ___ (know) all secrets of the universe.",
    "promptPersian": "او طوری رفتار می‌کند که گویی تمام رازهای کائنات را می‌داند.",
    "acceptedAnswers": [
      "knew"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Conditional Sentences and Wishes"
    ],
    "targetGrammarConcept": "Hypothetical present unreality with 'as if'.",
    "spellingTolerance": 1,
    "explanation": "Hypothetical present unreality with 'as if'.",
    "explanationPersian": "مقایسه فرضی حال با as if و فعل گذشته."
  },
  {
    "id": "ch-19-q20",
    "chapterId": "ch-19",
    "chapterNumber": 19,
    "questionNumber": 20,
    "difficulty": "advanced",
    "prompt": "Complete: 'Had the courier arrived on time, the disaster ___ (avert).' ",
    "promptPersian": "کامل کنید: «اگر قاصد به موقع رسیده بود، از فاجعه جلوگیری می‌شد.»",
    "acceptedAnswers": [
      "would have been averted"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Conditional Sentences and Wishes"
    ],
    "targetGrammarConcept": "Passive third conditional result.",
    "spellingTolerance": 1,
    "explanation": "Passive third conditional result.",
    "explanationPersian": "نتیجه مجهول در شرطی نوع سوم."
  },
  {
    "id": "ch-20-q1",
    "chapterId": "ch-20",
    "chapterNumber": 20,
    "questionNumber": 1,
    "difficulty": "easy",
    "prompt": "Rarely ___ (we see) such flawless typographical craftsmanship.",
    "promptPersian": "به‌ندرت ما شاهد چنین صنعت حروف‌چینی بی‌نقصی بوده‌ایم.",
    "acceptedAnswers": [
      "have we seen",
      "do we see",
      "did we see"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Inversion and Preposition Combinations"
    ],
    "targetGrammarConcept": "Negative inversion after 'rarely'.",
    "spellingTolerance": 2,
    "explanation": "Negative inversion after 'rarely'.",
    "explanationPersian": "وارونگی فعل کمکی پیش از فاعل پس از قید منفی rarely."
  },
  {
    "id": "ch-20-q2",
    "chapterId": "ch-20",
    "chapterNumber": 20,
    "questionNumber": 2,
    "difficulty": "easy",
    "prompt": "Seldom ___ (he speak) of his private accomplishments.",
    "promptPersian": "او به‌ندرت از دستاوردهای شخصی‌اش سخن می‌گوید.",
    "acceptedAnswers": [
      "does he speak",
      "did he speak"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Inversion and Preposition Combinations"
    ],
    "targetGrammarConcept": "Negative inversion with simple present requires auxiliary 'does'.",
    "spellingTolerance": 2,
    "explanation": "Negative inversion with simple present requires auxiliary 'does'.",
    "explanationPersian": "وارونگی با seldom در زمان حال ساده با فعل کمکی does."
  },
  {
    "id": "ch-20-q3",
    "chapterId": "ch-20",
    "chapterNumber": 20,
    "questionNumber": 3,
    "difficulty": "easy",
    "prompt": "Under no circumstances ___ (visitors be permitted) to touch the codex.",
    "promptPersian": "تحت هیچ شرایطی بازدیدکنندگان مجاز به لمس دست‌نوشته کهن نیستند.",
    "acceptedAnswers": [
      "are visitors permitted",
      "may visitors be permitted",
      "should visitors be permitted"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Inversion and Preposition Combinations"
    ],
    "targetGrammarConcept": "Negative inversion after 'under no circumstances'.",
    "spellingTolerance": 2,
    "explanation": "Negative inversion after 'under no circumstances'.",
    "explanationPersian": "وارونگی کامل پس از عبارت منفی under no circumstances."
  },
  {
    "id": "ch-20-q4",
    "chapterId": "ch-20",
    "chapterNumber": 20,
    "questionNumber": 4,
    "difficulty": "easy",
    "prompt": "Not only ___ (did he translate) the vocabulary, but he also provided idioms.",
    "promptPersian": "او نه تنها واژگان را ترجمه کرد، بلکه اصطلاحات را نیز فراهم ساخت.",
    "acceptedAnswers": [
      "did he translate"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Inversion and Preposition Combinations"
    ],
    "targetGrammarConcept": "Inversion with 'not only did subject + verb'.",
    "spellingTolerance": 2,
    "explanation": "Inversion with 'not only did subject + verb'.",
    "explanationPersian": "وارونگی با not only did."
  },
  {
    "id": "ch-20-q5",
    "chapterId": "ch-20",
    "chapterNumber": 20,
    "questionNumber": 5,
    "difficulty": "easy",
    "prompt": "Scarcely had the lecture commenced ___ (when) the chandelier fell.",
    "promptPersian": "هنوز سخنرانی آغاز نشده بود که چلچراغ سقوط کرد.",
    "acceptedAnswers": [
      "when"
    ],
    "alternativeAnswers": [
      "before"
    ],
    "requiredGrammarRules": [
      "Subject-Verb Inversion and Preposition Combinations"
    ],
    "targetGrammarConcept": "Correlative partner 'when' after 'scarcely had'.",
    "spellingTolerance": 2,
    "explanation": "Correlative partner 'when' after 'scarcely had'.",
    "explanationPersian": "کلمه ربط when پس از scarcely had."
  },
  {
    "id": "ch-20-q6",
    "chapterId": "ch-20",
    "chapterNumber": 20,
    "questionNumber": 6,
    "difficulty": "medium",
    "prompt": "Hardly had she opened the folio ___ (when) the parchment crumbled.",
    "promptPersian": "هنوز برگ دست‌نویس را باز نکرده بود که پوست‌نوشته فرو ریخت.",
    "acceptedAnswers": [
      "when"
    ],
    "alternativeAnswers": [
      "before"
    ],
    "requiredGrammarRules": [
      "Subject-Verb Inversion and Preposition Combinations"
    ],
    "targetGrammarConcept": "Inversion partner for 'hardly had'.",
    "spellingTolerance": 2,
    "explanation": "Inversion partner for 'hardly had'.",
    "explanationPersian": "کلمه ربط when پس از hardly had."
  },
  {
    "id": "ch-20-q7",
    "chapterId": "ch-20",
    "chapterNumber": 20,
    "questionNumber": 7,
    "difficulty": "medium",
    "prompt": "Little ___ (did they suspect) that an erratum remained on page four.",
    "promptPersian": "آن‌ها ذره‌ای گمان نمی‌کردند که غلط چاپی در صفحه چهار باقی مانده باشد.",
    "acceptedAnswers": [
      "did they suspect"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Inversion and Preposition Combinations"
    ],
    "targetGrammarConcept": "Negative adverbial 'little' triggers inversion.",
    "spellingTolerance": 2,
    "explanation": "Negative adverbial 'little' triggers inversion.",
    "explanationPersian": "قید منفی little مستلزم وارونگی است."
  },
  {
    "id": "ch-20-q8",
    "chapterId": "ch-20",
    "chapterNumber": 20,
    "questionNumber": 8,
    "difficulty": "medium",
    "prompt": "No sooner had the sun set ___ (than) the frost appeared.",
    "promptPersian": "هنوز خورشید غروب نکرده بود که سرما و یخبندان پدیدار شد.",
    "acceptedAnswers": [
      "than"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Inversion and Preposition Combinations"
    ],
    "targetGrammarConcept": "Correlative partner 'than' after 'no sooner'.",
    "spellingTolerance": 2,
    "explanation": "Correlative partner 'than' after 'no sooner'.",
    "explanationPersian": "کلمه ربط than پس از no sooner."
  },
  {
    "id": "ch-20-q9",
    "chapterId": "ch-20",
    "chapterNumber": 20,
    "questionNumber": 9,
    "difficulty": "medium",
    "prompt": "Only after midnight ___ (did he finish) his daily revisions.",
    "promptPersian": "تنها پس از نیمه‌شب بود که بازبینی‌های روزانه‌اش را به پایان رساند.",
    "acceptedAnswers": [
      "did he finish"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Inversion and Preposition Combinations"
    ],
    "targetGrammarConcept": "Inversion after 'only after'.",
    "spellingTolerance": 2,
    "explanation": "Inversion after 'only after'.",
    "explanationPersian": "وارونگی پس از عبارت قیدی only after."
  },
  {
    "id": "ch-20-q10",
    "chapterId": "ch-20",
    "chapterNumber": 20,
    "questionNumber": 10,
    "difficulty": "medium",
    "prompt": "Only by persistent labor ___ (can one master) English idioms.",
    "promptPersian": "تنها با کار مداوم می‌توان بر اصطلاحات انگلیسی مسلط شد.",
    "acceptedAnswers": [
      "can one master"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Inversion and Preposition Combinations"
    ],
    "targetGrammarConcept": "Inversion after 'only by'.",
    "spellingTolerance": 2,
    "explanation": "Inversion after 'only by'.",
    "explanationPersian": "وارونگی پس از عبارت only by."
  },
  {
    "id": "ch-20-q11",
    "chapterId": "ch-20",
    "chapterNumber": 20,
    "questionNumber": 11,
    "difficulty": "hard",
    "prompt": "Down the winding staircase ___ (walked) the venerable headmaster.",
    "promptPersian": "مدیر کهنسال و محترم از پله‌های مارپیچ پایین آمد.",
    "acceptedAnswers": [
      "walked",
      "came"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Inversion and Preposition Combinations"
    ],
    "targetGrammarConcept": "Locative inversion with prepositional phrase of direction.",
    "spellingTolerance": 1,
    "explanation": "Locative inversion with prepositional phrase of direction.",
    "explanationPersian": "وارونگی مکانی با عبارت جهتی در ابتدای جمله."
  },
  {
    "id": "ch-20-q12",
    "chapterId": "ch-20",
    "chapterNumber": 20,
    "questionNumber": 12,
    "difficulty": "hard",
    "prompt": "Here ___ (come) the royal carriage at last!",
    "promptPersian": "اینک درشکه سلطنتی بالاخره می‌آید!",
    "acceptedAnswers": [
      "comes"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Inversion and Preposition Combinations"
    ],
    "targetGrammarConcept": "Inversion after 'here' with full noun subject.",
    "spellingTolerance": 1,
    "explanation": "Inversion after 'here' with full noun subject.",
    "explanationPersian": "وارونگی پس از here با فاعل اسمی."
  },
  {
    "id": "ch-20-q13",
    "chapterId": "ch-20",
    "chapterNumber": 20,
    "questionNumber": 13,
    "difficulty": "hard",
    "prompt": "He insisted ___ (on / in) paying the copyist personally.",
    "promptPersian": "او اصرار ورزید که هزینه را شخصاً به کاتب بپردازد.",
    "acceptedAnswers": [
      "on"
    ],
    "alternativeAnswers": [
      "upon"
    ],
    "requiredGrammarRules": [
      "Subject-Verb Inversion and Preposition Combinations"
    ],
    "targetGrammarConcept": "Dependent preposition for 'insist': on.",
    "spellingTolerance": 1,
    "explanation": "Dependent preposition for 'insist': on.",
    "explanationPersian": "حرف اضافه وابسته به فعل insist کلمه on است."
  },
  {
    "id": "ch-20-q14",
    "chapterId": "ch-20",
    "chapterNumber": 20,
    "questionNumber": 14,
    "difficulty": "hard",
    "prompt": "The scholar was accustomed ___ (to) burning midnight oil.",
    "promptPersian": "دانشمند به شب‌زنده‌داری و مطالعه تا پاسی از شب خو گرفته بود.",
    "acceptedAnswers": [
      "to"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Inversion and Preposition Combinations"
    ],
    "targetGrammarConcept": "Dependent preposition for 'accustomed': to.",
    "spellingTolerance": 1,
    "explanation": "Dependent preposition for 'accustomed': to.",
    "explanationPersian": "حرف اضافه وابسته به accustomed واژه to است."
  },
  {
    "id": "ch-20-q15",
    "chapterId": "ch-20",
    "chapterNumber": 20,
    "questionNumber": 15,
    "difficulty": "hard",
    "prompt": "She is remarkably fond ___ (of) Victorian literature.",
    "promptPersian": "او علاقه وافری به ادبیات دوره ویکتوریا دارد.",
    "acceptedAnswers": [
      "of"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Inversion and Preposition Combinations"
    ],
    "targetGrammarConcept": "Dependent preposition for 'fond': of.",
    "spellingTolerance": 1,
    "explanation": "Dependent preposition for 'fond': of.",
    "explanationPersian": "حرف اضافه وابسته به صفت fond کلمه of است."
  },
  {
    "id": "ch-20-q16",
    "chapterId": "ch-20",
    "chapterNumber": 20,
    "questionNumber": 16,
    "difficulty": "advanced",
    "prompt": "They congratulated him ___ (on / for) his monumental dictionary.",
    "promptPersian": "آن‌ها به خاطر فرهنگ لغت عظیمش به او تبریک گفتند.",
    "acceptedAnswers": [
      "on"
    ],
    "alternativeAnswers": [
      "upon"
    ],
    "requiredGrammarRules": [
      "Subject-Verb Inversion and Preposition Combinations"
    ],
    "targetGrammarConcept": "Dependent preposition for 'congratulate': on.",
    "spellingTolerance": 1,
    "explanation": "Dependent preposition for 'congratulate': on.",
    "explanationPersian": "حرف اضافه وابسته به فعل congratulate کلمه on است."
  },
  {
    "id": "ch-20-q17",
    "chapterId": "ch-20",
    "chapterNumber": 20,
    "questionNumber": 17,
    "difficulty": "advanced",
    "prompt": "The lexicon is dedicated ___ (to) the memory of his mentors.",
    "promptPersian": "این فرهنگ لغت به یاد اساتیدش تقدیم شده است.",
    "acceptedAnswers": [
      "to"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Inversion and Preposition Combinations"
    ],
    "targetGrammarConcept": "Dependent preposition for 'dedicated': to.",
    "spellingTolerance": 1,
    "explanation": "Dependent preposition for 'dedicated': to.",
    "explanationPersian": "حرف اضافه وابسته به dedicated واژه to است."
  },
  {
    "id": "ch-20-q18",
    "chapterId": "ch-20",
    "chapterNumber": 20,
    "questionNumber": 18,
    "difficulty": "advanced",
    "prompt": "He was accused ___ (of) forging the royal proclamation.",
    "promptPersian": "او به جعل بیانیه سلطنتی متهم شد.",
    "acceptedAnswers": [
      "of"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Inversion and Preposition Combinations"
    ],
    "targetGrammarConcept": "Dependent preposition for 'accused': of.",
    "spellingTolerance": 1,
    "explanation": "Dependent preposition for 'accused': of.",
    "explanationPersian": "حرف اضافه وابسته به فعل accused کلمه of است."
  },
  {
    "id": "ch-20-q19",
    "chapterId": "ch-20",
    "chapterNumber": 20,
    "questionNumber": 19,
    "difficulty": "advanced",
    "prompt": "Never before ___ (have I witnessed) such dedication to lexicography.",
    "promptPersian": "هرگز پیش از این شاهد چنین ایثاری در راه فرهنگ‌نویسی نبوده‌ام.",
    "acceptedAnswers": [
      "have I witnessed"
    ],
    "alternativeAnswers": [],
    "requiredGrammarRules": [
      "Subject-Verb Inversion and Preposition Combinations"
    ],
    "targetGrammarConcept": "Negative inversion after 'never before'.",
    "spellingTolerance": 1,
    "explanation": "Negative inversion after 'never before'.",
    "explanationPersian": "وارونگی کامل پس از عبارت منفی never before."
  },
  {
    "id": "ch-20-q20",
    "chapterId": "ch-20",
    "chapterNumber": 20,
    "questionNumber": 20,
    "difficulty": "advanced",
    "prompt": "Complete: 'Round the corner ___ (stood) an antique bookshop.'",
    "promptPersian": "کامل کنید: «در نبش کوچه یک کتابفروشی عتیقه قرار داشت.»",
    "acceptedAnswers": [
      "stood"
    ],
    "alternativeAnswers": [
      "was"
    ],
    "requiredGrammarRules": [
      "Subject-Verb Inversion and Preposition Combinations"
    ],
    "targetGrammarConcept": "Locative inversion with intransitive verb.",
    "spellingTolerance": 1,
    "explanation": "Locative inversion with intransitive verb.",
    "explanationPersian": "وارونگی مکانی با فعل ناگذر stood."
  }
];

function substituteTemplateAnswer(templateStr: string, ans: string): string {
  const lower = ans.trim().toLowerCase();
  let res = templateStr;
  if (lower === 'ø' || lower === 'no article' || lower === 'none' || lower === 'zero article') {
    res = res.replace(/___\s*\([^)]*\)/, '').replace(/___/, '');
  } else if (/___\s*\([^)]*\)/.test(res)) {
    res = res.replace(/___\s*\([^)]*\)/, ans);
  } else {
    res = res.replace(/___/, ans);
  }
  res = res.replace(/\s+/g, ' ').trim();
  if (res.length > 0) {
    res = res[0].toUpperCase() + res.slice(1);
  }
  return res;
}

function toActiveNonClozeQuestion(q: GrammarQuestion): GrammarQuestion {
  let p = q.prompt.trim();
  let pFa = (q.promptPersian || '').trim();

  if (p.includes("Rewrite using 'ought'")) {
    return {
      ...q,
      prompt: 'Rewrite the following sentence using the modal verb "ought" to express moral obligation: "You should apologize."',
      promptPersian: 'جمله زیر را با استفاده از فعل وجهی «ought» برای بیان وظیفه اخلاقی بازنویسی کنید: «تو باید عذرخواهی کنی.»',
      acceptedAnswers: ['You ought to apologize.', 'You ought to apologize', 'ought to'],
      alternativeAnswers: ['You ought to apologise.', 'You ought to apologise']
    };
  }

  if (p.includes('Change to passive:')) {
    return {
      ...q,
      prompt: 'Transform the following active sentence into the passive voice: "Haim compiled the dictionary."',
      promptPersian: 'جمله معلوم زیر را به حالت مجهول تبدیل کنید: «حییم فرهنگ لغت را گردآوری کرد.»',
      acceptedAnswers: ['The dictionary was compiled by Haim.', 'The dictionary was compiled by Haim', 'was compiled'],
      alternativeAnswers: []
    };
  }

  if (p.includes('Avoid the dangling modifier:')) {
    return {
      ...q,
      prompt: 'Rewrite the sentence to eliminate the dangling modifier by selecting and integrating the grammatically valid main clause: "Walking through the hall, [the bell rang / he heard the bell]."',
      promptPersian: 'جمله زیر را با حذف توصیف‌گر معلق و انتخاب بند اصلی درست بازنویسی کنید: «در حال عبور از سالن، [زنگ به صدا درآمد / او صدای زنگ را شنید].»',
      acceptedAnswers: ['Walking through the hall, he heard the bell.', 'Walking through the hall, he heard the bell', 'he heard the bell'],
      alternativeAnswers: []
    };
  }

  const prefixPatterns = [
    /^Fill in the verb:\s*'(.*)'\.?\s*$/,
    /^Complete the sentence:\s*'(.*)'\.?\s*$/,
    /^Complete:\s*'(.*)'\.?\s*$/,
    /^Write the correct form:\s*'(.*)'\.?\s*$/,
    /^Identify the correct form:\s*'(.*)'\.?\s*$/,
    /^Choose the correct word:\s*'(.*)'\.?\s*$/
  ];

  for (const pat of prefixPatterns) {
    const match = p.match(pat);
    if (match) {
      p = match[1].trim();
      break;
    }
  }

  const faPrefixes = [
    'فعل را کامل کنید:',
    'جمله را کامل کنید:',
    'کامل کنید:',
    'شکل صحیح را بنویسید:',
    'واژه صحیح را انتخاب کنید:'
  ];
  for (const fp of faPrefixes) {
    if (pFa.startsWith(fp)) {
      pFa = pFa.slice(fp.length).trim();
      if (pFa.startsWith('«') && pFa.endsWith('»')) {
        pFa = pFa.slice(1, -1).trim();
      }
    }
  }
  pFa = pFa.replace(/\.\.\./g, '').replace(/_+/g, '').trim();

  const fullAccepted: string[] = [];
  for (const ans of q.acceptedAnswers) {
    const fullSent = substituteTemplateAnswer(p, ans);
    if (fullSent && !fullAccepted.includes(fullSent)) {
      fullAccepted.push(fullSent);
    }
    if (!fullAccepted.includes(ans)) {
      fullAccepted.push(ans);
    }
    if (ans.toLowerCase() === 'ø') {
      for (const extra of ['no article', 'zero article']) {
        if (!fullAccepted.includes(extra)) fullAccepted.push(extra);
      }
    }
  }

  const fullAlt: string[] = [];
  for (const ans of q.alternativeAnswers || []) {
    const fullSent = substituteTemplateAnswer(p, ans);
    if (fullSent && !fullAlt.includes(fullSent) && !fullAccepted.includes(fullSent)) {
      fullAlt.push(fullSent);
    }
    if (!fullAlt.includes(ans) && !fullAccepted.includes(ans)) {
      fullAlt.push(ans);
    }
  }

  const hasSlashOptions = /___\s*\([^)]*\/[^)]*\)/.test(p);
  const hasParentheticalCue = /___\s*\(([^)]+)\)/.test(p);

  const bracketedSentence = hasParentheticalCue
    ? p.replace(/___\s*\(([^)]+)\)/g, '[$1]')
    : p.replace(/___/g, '[connective]');

  let taskInstruction = '';
  let taskFa = '';

  if (hasSlashOptions) {
    if (bracketedSentence.includes('Ø')) {
      taskInstruction = 'Rewrite the sentence applying the correct article rule (or zero article) for the bracketed expression';
      taskFa = 'با اعمال قاعده درست حرف تعریف (یا بدون حرف تعریف)، جمله زیر را بازنویسی کنید';
    } else {
      taskInstruction = 'Rewrite the sentence by selecting and applying the grammatically valid structure from the bracketed forms';
      taskFa = 'با انتخاب و به‌کارگیری ساختار دستوری صحیح از میان گزینه‌های داخل کروشه، جمله را بازنویسی کنید';
    }
  } else if (q.chapterNumber === 10) {
    taskInstruction = 'Transform the bracketed verb into the required passive voice construction and rewrite the sentence (or target verb phrase)';
    taskFa = 'فعل داخل کروشه را به ساختار مجهول مناسب تبدیل کرده و جمله (یا عبارت فعلی) را بازنویسی کنید';
  } else if (q.chapterNumber === 17) {
    taskInstruction = 'Reduce or transform the bracketed modifier into the correct participial form and rewrite the sentence (or target form)';
    taskFa = 'عبارت داخل کروشه را به شکل وجه وصفی کوتاه‌شده تبدیل کرده و جمله را بازنویسی کنید';
  } else if (q.chapterNumber === 19) {
    taskInstruction = 'Construct the required conditional or wish verb form for the bracketed expression and rewrite the sentence (or target clause)';
    taskFa = 'ساختار شرطی یا آرزویی مناسب را برای عبارت داخل کروشه بسازید و جمله را بازنویسی کنید';
  } else if (q.chapterNumber === 20) {
    taskInstruction = 'Apply subject-verb inversion or the required dependent preposition to the bracketed expression and rewrite the sentence (or target structure)';
    taskFa = 'وارونگی فاعل و فعل یا حرف اضافه وابسته مناسب را بر عبارت داخل کروشه اعمال کرده و جمله را بازنویسی کنید';
  } else if (!hasParentheticalCue) {
    taskInstruction = 'Combine the clauses by supplying the required correlative or subordinating connective in place of [connective] and rewrite the sentence';
    taskFa = 'بندهای جمله زیر را با قرار دادن حرف ربط همپایه یا وابسته مناسب به جای [connective] ترکیب و بازنویسی کنید';
  } else {
    taskInstruction = 'Rewrite the sentence by transforming the bracketed expression into its grammatically required form (full sentence or target structure)';
    taskFa = 'جمله زیر را با تبدیل عبارت داخل کروشه به شکل دستوری صحیح آن بازنویسی کنید';
  }

  return {
    ...q,
    prompt: `${taskInstruction}: "${bracketedSentence.replace(/_+/g, '')}"`,
    promptPersian: pFa ? `${taskFa}: «${pFa}»` : undefined,
    acceptedAnswers: fullAccepted,
    alternativeAnswers: fullAlt
  };
}

export const GRAMMAR_QUESTIONS: GrammarQuestion[] = RAW_GRAMMAR_QUESTIONS.map(toActiveNonClozeQuestion);

