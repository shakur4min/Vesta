/**
 * VESTA Grammar Curriculum — 20 Authoritative Chapters
 * Reference: Understanding and Using English Grammar (Azar & Hagen, 5th Edition)
 * Created by Jackdaw
 */

import { GrammarChapter } from '../types';

export const GRAMMAR_CHAPTERS: GrammarChapter[] = [
  {
    id: 'ch-01',
    chapterNumber: 1,
    title: 'Present and Past: Simple and Progressive',
    titlePersian: 'زمان‌های حال و گذشته: ساده و استمراری',
    category: 'Verb Tenses',
    summary: 'Mastering habits, general truths, and ongoing activities in present and past time frames.',
    summaryPersian: 'تسلط بر عادات، حقایق علمی و فعالیت‌های در حال انجام در زمان حال و گذشته.',
    introduction: 'English verbs convey not only when an action occurs, but also its aspect: whether it is completed, habitual, or in ongoing progression.',
    introductionPersian: 'افعال در زبان انگلیسی نه تنها زمان وقوع کار را نشان می‌دهند، بلکه جنبه استمراری یا عادتی بودن آن را نیز بیان می‌کنند.',
    whyItExists: 'Without simple and progressive forms, English speakers could not distinguish between eternal universal truths ("Water boils at 100°C") and temporary momentary actions ("The kettle is boiling right now").',
    whyItExistsPersian: 'بدون تفکیک ساده و استمراری، نمی‌توان بین حقایق همیشگی و کارهای موقت تمایز قائل شد.',
    whenToUse: 'Use Simple Present for routines, facts, and states. Use Present Progressive for actions occurring right now or temporary situations. Use Simple Past for finished events at a specific time. Use Past Progressive for actions in progress when interrupted.',
    whenToUsePersian: 'حال ساده برای روتین‌ها و حقایق، حال استمراری برای رویدادهای همین لحظه، گذشته ساده برای کارهای پایان‌یافته و گذشته استمراری برای کارهای در حال انجام در گذشته به کار می‌رود.',
    keyRule: 'Stative verbs (know, understand, believe, love, belong) generally cannot be used in progressive (-ing) tenses.',
    keyRulePersian: 'افعال حالتی (مانند know, believe, like) معمولاً در زمان‌های استمراری به کار نمی‌روند.',
    practicalUsage: 'In daily conversation, use simple present to describe your occupation ("I teach English") and progressive to describe current temporary projects ("I am writing a dictionary this month").',
    practicalUsagePersian: 'در مکالمات روزمره از حال ساده برای شغل و عادات و از حال استمراری برای کارهای موقت این روزها استفاده کنید.',
    sourceReference: 'Understanding and Using English Grammar (5th Ed), Chapter 1, pp. 2–28',
    sections: [
      {
        id: 'ch01-s1',
        title: 'Simple Present vs. Present Progressive',
        titlePersian: 'حال ساده در مقایسه با حال استمراری',
        content: 'Simple Present expresses daily habits, recurring routines, and universal truths. Present Progressive (am/is/are + verb-ing) indicates an activity in progress at the exact moment of speaking or in the extended present.',
        contentPersian: 'حال ساده بیانگر عادات و حقایق همیشگی است، در حالی که حال استمراری کاری را نشان می‌دهد که هم‌اکنون در جریان است.',
        formula: 'Simple: Subject + Base Verb (+ -s/-es for he/she/it) | Progressive: Subject + am/is/are + Verb-ing',
        examples: [
          {
            sentence: 'The earth revolves around the sun.',
            translation: 'زمین به دور خورشید می‌چرخد.',
            explanation: 'General factual truth that never changes, so simple present is required.',
            explanationPersian: 'حقیقت علمی تغییرناپذیر؛ نیاز به حال ساده دارد.'
          },
          {
            sentence: 'Look! The lecturer is presenting the new manuscript.',
            translation: 'نگاه کن! سخنران در حال ارائه دست‌نوشته جدید است.',
            explanation: 'Ongoing action occurring at this very second signaled by "Look!".',
            explanationPersian: 'عملی که درست در لحظه گفتار رخ می‌دهد.'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'I am knowing the answer to this question.',
            correct: 'I know the answer to this question.',
            reason: '"Know" is a stative mental verb; it does not take continuous forms.',
            reasonPersian: 'فعل know حالتی است و نباید به شکل استمراری به کار رود.'
          }
        ]
      },
      {
        id: 'ch01-s2',
        title: 'Simple Past vs. Past Progressive',
        titlePersian: 'گذشته ساده در مقایسه با گذشته استمراری',
        content: 'Simple Past denotes a completed action that took place at a definite time in the past. Past Progressive (was/were + verb-ing) depicts an ongoing past backdrop that was interrupted by another action.',
        contentPersian: 'گذشته ساده کار تمام شده در گذشته را بیان می‌کند و گذشته استمراری پس‌زمینه در حال انجام را پیش از وقوع اتفاق دیگر نشان می‌دهد.',
        formula: 'Simple Past: Subject + Verb-ed (or irregular) | Past Progressive: Subject + was/were + Verb-ing',
        examples: [
          {
            sentence: 'While Haim was compiling the dictionary, the printer arrived.',
            translation: 'در حالی که حییم در حال گردآوری فرهنگ بود، چاپ‌کننده رسید.',
            explanation: 'Past progressive "was compiling" sets the ongoing background scene when the simple past action "arrived" occurred.',
            explanationPersian: 'گذشته استمراری بستر زمان را می‌سازد و گذشته ساده رویداد ناگهانی را بیان می‌کند.'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'When the telephone was ringing, I answered it.',
            correct: 'When the telephone rang, I answered it.',
            reason: 'A sudden brief event like a telephone starting to ring is expressed with simple past.',
            reasonPersian: 'رویداد لحظه‌ای مانند زنگ خوردن تلفن باید با گذشته ساده بیان شود.'
          }
        ]
      }
    ]
  },
  {
    id: 'ch-02',
    chapterNumber: 2,
    title: 'Perfect and Perfect Progressive Tenses',
    titlePersian: 'زمان‌های کامل و کامل استمراری',
    category: 'Verb Tenses',
    summary: 'Bridging past events with the present moment and sequencing past events with past perfect.',
    summaryPersian: 'اتصال رویدادهای گذشته به زمان حال و تعیین تقدم و تأخر زمانی با ماضی بعید.',
    introduction: 'The perfect aspect links two different points in time, showing that an event before a specific benchmark has direct relevance to that benchmark.',
    introductionPersian: 'وجه کامل پیوند دهنده دو نقطه زمانی است و ارتباط کار قبلی را با زمان بعدی نشان می‌دهد.',
    whyItExists: 'Without the Present Perfect, speakers would have no way to express life experiences ("I have read Shakespeare") without committing to a specific past date.',
    whyItExistsPersian: 'بدون زمان کامل نمی‌توان تجربیات زندگی را بدون ذکر زمان دقیق گذشته بیان کرد.',
    whenToUse: 'Use Present Perfect (have/has + past participle) for indefinite past events, repeated actions up to now, or actions beginning in the past and continuing now (with since/for). Use Past Perfect (had + past participle) for an action that happened before another past action.',
    whenToUsePersian: 'ماضی نقلی برای کارهای با اثر در زمان حال یا تجارب تا کنون؛ ماضی بعید برای کاری که قبل از کار دیگری در گذشته انجام شده است.',
    keyRule: 'Never use specific past time words (yesterday, in 1999, two hours ago) with the Present Perfect.',
    keyRulePersian: 'هرگز قیدهای زمان معین گذشته مانند yesterday یا in 1999 را با ماضی نقلی به کار نبرید.',
    practicalUsage: 'Use "have you ever...?" to inquire about someone\'s lifetime experience, and "had already..." when explaining why a mistake occurred before an event.',
    practicalUsagePersian: 'از have you ever برای پرسش درباره تجارب و از had already برای بیان تقدم کارها در گذشته استفاده کنید.',
    sourceReference: 'Understanding and Using English Grammar (5th Ed), Chapter 2, pp. 29–57',
    sections: [
      {
        id: 'ch02-s1',
        title: 'Present Perfect vs. Simple Past',
        titlePersian: 'ماضی نقلی در برابر گذشته ساده',
        content: 'Simple Past specifies when an action happened. Present Perfect focuses on the occurrence or result without anchoring it to a finished time period.',
        contentPersian: 'گذشته ساده زمان مشخصی دارد، در حالی که ماضی نقلی بر خود عمل یا نتیجه‌اش تمرکز دارد.',
        formula: 'Subject + have/has + Past Participle (V3)',
        examples: [
          {
            sentence: 'She has published three definitive volumes so far.',
            translation: 'او تاکنون سه جلد مرجع به چاپ رسانده است.',
            explanation: '"So far" connects past publications to the open present.',
            explanationPersian: 'قید so far زمان را تا این لحظه باز نگه می‌دارد.'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'I have seen him yesterday morning.',
            correct: 'I saw him yesterday morning.',
            reason: '"Yesterday morning" is a closed past time, requiring simple past.',
            reasonPersian: 'قید زمان معینِ سپری‌شده فقط با گذشته ساده می‌آید.'
          }
        ]
      },
      {
        id: 'ch02-s2',
        title: 'Past Perfect: The Earlier Past',
        titlePersian: 'ماضی بعید: گذشته‌ی قبل از گذشته',
        content: 'When telling a story in the past, Past Perfect (had + V3) steps back to an event that happened even earlier.',
        contentPersian: 'در روایت گذشته، ماضی بعید به کاری برمی‌گردد که حتی زودتر از بقیه رخ داده است.',
        formula: 'Subject + had + Past Participle (V3)',
        examples: [
          {
            sentence: 'By the time the curator arrived, the thief had fled.',
            translation: 'تا زمانی که موزه‌دار رسید، دزد فرار کرده بود.',
            explanation: 'The flight happened first; the curator\'s arrival happened second.',
            explanationPersian: 'فرار دزد زودتر از رسیدن موزه‌دار رخ داده است.'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'After she finished her tea, she had left the room.',
            correct: 'After she had finished her tea, she left the room.',
            reason: 'The earlier action (finishing tea) takes the past perfect, not the later exit.',
            reasonPersian: 'کاری که اول رخ داده ماضی بعید می‌گیرد، نه کار بعدی.'
          }
        ]
      }
    ]
  },
  {
    id: 'ch-03',
    chapterNumber: 3,
    title: 'Future Time',
    titlePersian: 'زمان آینده',
    category: 'Verb Tenses',
    summary: 'Expressing intentions, spontaneous decisions, predictions, and future schedules.',
    summaryPersian: 'بیان قصد و نیت، تصمیمات آنی، پیش‌بینی‌ها و برنامه‌های زمان‌بندی‌شده آینده.',
    introduction: 'English has several distinct forms for future reference: will, be going to, present progressive, and simple present.',
    introductionPersian: 'در انگلیسی ساختارهای متفاوتی برای آینده وجود دارد که هر یک بار معنایی خاصی دارند.',
    whyItExists: 'Using "will" for a pre-meditated plan sounds awkward; "be going to" signals prior intention, whereas "will" signals volition or spontaneous readiness.',
    whyItExistsPersian: 'تفکیک will و be going to تفاوت میان تصمیم ناگهانی و قصد قبلی را شفاف می‌سازد.',
    whenToUse: 'Use "will" for rapid decisions and promises. Use "be going to" for intentions formed earlier. In future time clauses after when/before/as soon as, use simple present.',
    whenToUsePersian: 'از will برای تصمیمات آنی و قول‌ها، و از going to برای برنامه‌ریزی قبلی استفاده کنید.',
    keyRule: 'Never use "will" inside adverbial time clauses beginning with when, while, before, after, as soon as, or if.',
    keyRulePersian: 'در جمله‌واره‌های قیدی زمان (مانند when, as soon as, if) هرگز از will استفاده نکنید.',
    practicalUsage: 'Offer spontaneous assistance with "I will help you with that trunk," but state your evening itinerary with "I am going to meet the master at seven."',
    practicalUsagePersian: 'برای کمک فوری بگویید I will help you و برای برنامه شبانه بگویید I am going to meet.',
    sourceReference: 'Understanding and Using English Grammar (5th Ed), Chapter 3, pp. 58–84',
    sections: [
      {
        id: 'ch03-s1',
        title: 'Will vs. Be Going To',
        titlePersian: 'تفاوت Will با Be Going To',
        content: 'Both can express predictions based on belief. But for plans made before speaking, use "be going to". For willingness or immediate decisions, use "will".',
        contentPersian: 'هر دو برای پیش‌بینی مناسبند، اما برای برنامه‌های از پیش تعیین‌شده going to و تصمیمات در لحظه will به کار می‌رود.',
        formula: 'Subject + will + Verb | Subject + am/is/are + going to + Verb',
        examples: [
          {
            sentence: 'I forgot the key; I will run back and fetch it.',
            translation: 'کلید را فراموش کردم؛ سریع برمی‌گردم و آن را می‌آورم.',
            explanation: 'Spontaneous decision made at the moment of speaking.',
            explanationPersian: 'تصمیم آنی و ناگهانی در لحظه سخن گفتن.'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'I will call you when I will arrive at the station.',
            correct: 'I will call you when I arrive at the station.',
            reason: 'Time clauses introduced by "when" require present tense for future meaning.',
            reasonPersian: 'بعد از when برای آینده از حال ساده استفاده می‌شود.'
          }
        ]
      }
    ]
  },
  {
    id: 'ch-04',
    chapterNumber: 4,
    title: 'Review of Verb Tenses',
    titlePersian: 'مرور جامع زمان‌های افعال',
    category: 'Verb Tenses',
    summary: 'Synthesizing all 12 English verb tenses into coherent narratives and arguments.',
    summaryPersian: 'ترکیب دوازده زمان فعل در روایت‌های یکپارچه و متون ساخت‌یافته.',
    introduction: 'Sophisticated English writing weaves simple, continuous, and perfect tenses together to create chronological clarity and emphasis.',
    introductionPersian: 'نگارش سطح بالا نیازمند هماهنگی زمان‌های ساده، استمراری و کامل در کنار هم است.',
    whyItExists: 'A story narrated in only one tense becomes flat, lifeless, and chronologically confusing.',
    whyItExistsPersian: 'یکدست ماندن زمان فعل در طول یک روایت، تسلسل رویدادها را مبهم می‌کند.',
    whenToUse: 'Check tense consistency across paragraphs and maintain correct sequence of tenses between main clauses and subordinate clauses.',
    whenToUsePersian: 'تطابق زمان‌ها را در پاراگراف‌ها رعایت کنید تا توالی منطقی حفظ شود.',
    keyRule: 'Past tense in the main clause typically shifts the subordinate verb into the past (sequence of tenses).',
    keyRulePersian: 'گذشته بودن بند اصلی معمولاً بند پیرو را نیز به گذشته منتقل می‌کند.',
    practicalUsage: 'Notice how historical prose transitions smoothly from setting a background scene to recording pivotal decisions.',
    practicalUsagePersian: 'به نحوه تغییر نرم زمان فعل از شرح پس‌زمینه به رویداد اصلی در متون تاریخی دقت کنید.',
    sourceReference: 'Understanding and Using English Grammar (5th Ed), Chapter 4, pp. 85–101',
    sections: [
      {
        id: 'ch04-s1',
        title: 'The Narrative Tense Hierarchy',
        titlePersian: 'سلسله‌مراتب زمان‌ها در روایتگری',
        content: 'Use past progressive for atmospheric background, simple past for sequential actions, and past perfect for antecedent background information.',
        contentPersian: 'گذشته استمراری برای فضا‌سازی، گذشته ساده برای سلسله رویدادها و ماضی بعید برای وقایع پیشین.',
        formula: 'Past Background + Sequential Events + Prior Causes',
        examples: [
          {
            sentence: 'The rain was beating against the glass when the courier knocked, because a tempest had struck the valley.',
            translation: 'باران بر شیشه می‌کوفت که قاصد در زد، زیرا طوفانی به دره حمله کرده بود.',
            explanation: 'Combines past progressive (backdrop), simple past (action), and past perfect (prior reason).',
            explanationPersian: 'ترکیب سه سطح زمانی برای وضوح کامل علت و معلول.'
          }
        ]
      }
    ]
  },
  {
    id: 'ch-05',
    chapterNumber: 5,
    title: 'Subject-Verb Agreement',
    titlePersian: 'مطابقت فاعل و فعل',
    category: 'Grammar Mechanics',
    summary: 'Ensuring singular and plural verbs agree with complex, intervening, and collective subjects.',
    summaryPersian: 'هماهنگی فعل و فاعل در جملات پیچیده، عبارات واسطه و اسامی جمع و مفرد.',
    introduction: 'A verb must match its grammatical subject in person and number, regardless of intervening prepositional phrases or relative clauses.',
    introductionPersian: 'فعل باید در تعداد و شخص با هسته فاعل مطابقت داشته باشد، حتی اگر عبارات طولانی بین آن‌ها فاصله بیندازد.',
    whyItExists: 'Intervening words like "together with his assistants" often fool the ear; strict grammatical agreement prevents structural incoherence.',
    whyItExistsPersian: 'کلمات واسطه گوش را فریب می‌دهند، اما قانون مطابقت نظم ساختاری را تضمین می‌کند.',
    whenToUse: 'Always inspect the true head noun of the subject phrase before choosing between singular and plural verbs.',
    whenToUsePersian: 'همیشه اسم اصلی فاعل را پیش از انتخاب فعل مفرد یا جمع مشخص کنید.',
    keyRule: 'Expressions like "along with", "as well as", and "together with" do not make a singular subject plural.',
    keyRulePersian: 'عباراتی مانند along with یا as well as فاعل مفرد را تبدیل به جمع نمی‌کنند.',
    practicalUsage: 'Pay special attention to words like "each", "everyone", "neither", and quantities like "ten miles" or "fifty dollars".',
    practicalUsagePersian: 'به کلماتی نظیر each, neither و مبالغ و فواصل که مفرد به حساب می‌آیند دقت ویژه داشته باشید.',
    sourceReference: 'Understanding and Using English Grammar (5th Ed), Chapter 5, pp. 102–126',
    sections: [
      {
        id: 'ch05-s1',
        title: 'Intervening Phrases & Compound Subjects',
        titlePersian: 'عبارات میانی و فاعل‌های مرکب',
        content: 'Prepositional phrases between the subject and verb have zero effect on number. Correlative conjunctions (either...or, neither...nor) determine the verb from the closest subject.',
        contentPersian: 'حروف اضافه بین فاعل و فعل تأثیری در جمع یا مفرد بودن ندارند. در neither...nor فعل با نزدیک‌ترین فاعل هماهنگ می‌شود.',
        formula: 'Singular Head Noun + [modifiers] + Singular Verb',
        examples: [
          {
            sentence: 'The collection of rare antique dictionaries was preserved.',
            translation: 'مجموعه فرهنگ‌های لغت عتیقه کمیاب نگهداری شد.',
            explanation: '"Collection" is the singular head noun; "of rare antique dictionaries" is an intervening phrase.',
            explanationPersian: 'هسته فاعل collection (مفرد) است، نه dictionaries.'
          },
          {
            sentence: 'Neither the scholar nor his assistants were aware of the omission.',
            translation: 'نه آن دانشمند و نه دستیارانش از این از قلم‌افتادگی آگاه نبودند.',
            explanation: 'With "neither...nor", the verb agrees with the closer subject "assistants" (plural).',
            explanationPersian: 'فعل با نزدیک‌ترین فاعل (assistants) که جمع است مطابقت دارد.'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'The scholar, as well as his pupils, were present.',
            correct: 'The scholar, as well as his pupils, was present.',
            reason: '"As well as his pupils" is a parenthetical addition; the singular subject remains "the scholar".',
            reasonPersian: 'عبارت as well as فاعل اصلی را تغییر نمی‌دهد و فعل باید مفرد باشد.'
          }
        ]
      }
    ]
  },
  {
    id: 'ch-06',
    chapterNumber: 6,
    title: 'Nouns and Articles',
    titlePersian: 'اسم‌ها و حروف تعریف',
    category: 'Nouns & Determiners',
    summary: 'Definite (the), indefinite (a/an), and zero articles; count vs. non-count nouns.',
    summaryPersian: 'حروف تعریف معین، نامعین، عدم استفاده از حرف تعریف، و تمایز اسامی شمارش‌پذیر و شمارش‌ناپذیر.',
    introduction: 'Articles guide the reader to know whether a noun refers to a specific, unique entity or a generic, uncounted concept.',
    introductionPersian: 'حروف تعریف به خواننده نشان می‌دهند که آیا اسم مورد نظر خاص و شناخته‌شده است یا عام و نامعین.',
    whyItExists: 'Saying "I love paper" refers to the substance; saying "I love the paper" refers to a specific document or daily newspaper.',
    whyItExistsPersian: 'تفاوت میان یک مفهوم کلی و شیء خاص در گرو استفاده صحیح از حروف تعریف است.',
    whenToUse: 'Use "a/an" with singular countable nouns mentioned for the first time. Use "the" when both speaker and listener know which one is meant. Use no article for generalizations with plurals and non-count nouns.',
    whenToUsePersian: 'از a/an برای اسم‌های مفرد قابل شمارش نامعین و از the برای اسامی مشخص برای شنونده استفاده کنید.',
    keyRule: 'Non-count nouns (information, advice, furniture, luggage, vocabulary) never take "a/an" and cannot be pluralized.',
    keyRulePersian: 'اسامی غیرقابل شمارش (نظیر information, advice) هرگز a/an نمی‌گیرند و جمع بسته نمی‌شوند.',
    practicalUsage: 'When referencing academic disciplines or abstract qualities ("patience", "virtue"), omit "the" unless restricted by a prepositional qualifier.',
    practicalUsagePersian: 'برای مفاهیم انتزاعی از حرف تعریف the استفاده نکنید مگر آنکه با عبارت متممی محدود شده باشد.',
    sourceReference: 'Understanding and Using English Grammar (5th Ed), Chapter 6, pp. 127–156',
    sections: [
      {
        id: 'ch06-s1',
        title: 'Countable vs. Uncountable Distinction',
        titlePersian: 'تفکیک اسم‌های قابل شمارش و غیرقابل شمارش',
        content: 'Countable nouns can be individually enumerated and take plural forms. Uncountable nouns designate masses, abstractions, or collective concepts.',
        contentPersian: 'اسم‌های شمارش‌پذیر شمرده می‌شوند و جمع می‌گیرند؛ اسم‌های ناشمارش‌پذیر کلیت یا ماده هستند.',
        formula: 'Countable: a book / two books | Non-count: advice / some advice',
        examples: [
          {
            sentence: 'The lexicographer offered valuable advice to the student.',
            translation: 'فرهنگ‌نویس راهنمایی ارزشمندی به دانشجو ارائه داد.',
            explanation: '"Advice" is non-count; it cannot take "an" or "-s".',
            explanationPersian: 'کلمه advice ناشمارش‌پذیر است و an advice نادرست است.'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'He gave me many useful informations.',
            correct: 'He gave me much useful information.',
            reason: '"Information" is strictly non-count in English and cannot be pluralized.',
            reasonPersian: 'کلمه information غیرقابل شمارش است و هرگز جمع بسته نمی‌شود.'
          }
        ]
      }
    ]
  },
  {
    id: 'ch-07',
    chapterNumber: 7,
    title: 'Pronouns and Determiners',
    titlePersian: 'ضمایر و مشخص‌کننده‌ها',
    category: 'Nouns & Determiners',
    summary: 'Personal, possessive, reflexive, reciprocal, demonstrative, and indefinite pronouns.',
    summaryPersian: 'ضمایر شخصی، ملکی، انعکاسی، متقابل، اشاره و نامعین.',
    introduction: 'Pronouns prevent clumsy repetition of noun phrases and establish clear antecedent relationships.',
    introductionPersian: 'ضمایر از تکرار ملال‌آور اسامی جلوگیری کرده و مرجع را مشخص می‌سازند.',
    whyItExists: 'Clear pronouns allow fluid, graceful prose while pinpointing agency and ownership without ambiguity.',
    whyItExistsPersian: 'ضمایر دقیق روانی کلام و شفافیت مرجع فاعل و مفعول را فراهم می‌کنند.',
    whenToUse: 'Ensure every pronoun has an unmistakable singular or plural antecedent with no floating ambiguity.',
    whenToUsePersian: 'اطمینان حاصل کنید که مرجع هر ضمیر کاملاً روشن و بدون ابهام باشد.',
    keyRule: 'Reflexive pronouns (himself, themselves) are used only when the subject and object are the identical entity.',
    keyRulePersian: 'ضمایر انعکاسی تنها زمانی به کار می‌روند که فاعل و مفعول جمله دقیقاً یکی باشند.',
    practicalUsage: 'Distinguish between "its" (possessive) and "it\'s" (it is), and use "each other" for two entities, "one another" for three or more.',
    practicalUsagePersian: 'تفاوت its ملکی و it\'s مخفف را فراموش نکنید و ضمایر متقابل را با دقت به کار ببرید.',
    sourceReference: 'Understanding and Using English Grammar (5th Ed), Chapter 7, pp. 157–181',
    sections: [
      {
        id: 'ch07-s1',
        title: 'Reflexive and Reciprocal Pronouns',
        titlePersian: 'ضمایر انعکاسی و متقابل',
        content: 'Reflexive pronouns reflect the action back onto the agent. Reciprocal pronouns show mutual interplay between two or more participants.',
        contentPersian: 'ضمایر انعکاسی اثر کار را به خود فاعل برمی‌گردانند و ضمایر متقابل تعامل دوسویه را نشان می‌دهند.',
        formula: 'Subject + Verb + Reflexive Object (e.g. He looked at himself)',
        examples: [
          {
            sentence: 'The two authors consulted each other before finalizing the volume.',
            translation: 'آن دو نویسنده پیش از نهایی کردن کتاب با یکدیگر مشورت کردند.',
            explanation: '"Each other" specifies reciprocal action between two parties.',
            explanationPersian: 'عبارت each other برای رابطه متقابل میان دو نفر استفاده می‌شود.'
          }
        ]
      }
    ]
  },
  {
    id: 'ch-08',
    chapterNumber: 8,
    title: 'Modals, Part 1: Ability, Advice, and Necessity',
    titlePersian: 'افعال وجهی ۱: توانایی، توصیه و الزام',
    category: 'Modals',
    summary: 'Can, could, be able to, should, ought to, had better, must, and have to.',
    summaryPersian: 'افعال بیان توانایی، اجازه، نصیحت، اجبار و ضرورت در زمان حال و گذشته.',
    introduction: 'Modal auxiliaries express the speaker\'s attitude toward the action: whether it is considered permitted, essential, advisable, or possible.',
    introductionPersian: 'افعال وجهی دیدگاه گوینده نسبت به ضرورت، امکان یا جواز انجام کار را بیان می‌کنند.',
    whyItExists: 'In English, adding a modal transforms an objective fact ("You leave") into an obligation ("You must leave") or gentle recommendation ("You should leave").',
    whyItExistsPersian: 'افعال وجهی لحن جمله را از یک واقعیت صرف به الزام، توصیه یا خواهش تغییر می‌دهند.',
    whenToUse: 'Use "must" for strong internal necessity or law. Use "have to" for external institutional requirements. Use "should" / "ought to" for good advice.',
    whenToUsePersian: 'از must برای ضرورت اکید، have to برای الزام بیرونی، و should برای توصیه خیرخواهانه استفاده نمایید.',
    keyRule: 'Modals never take third-person "-s", "-ed", or "to" before the bare infinitive (except "ought to" and "have to").',
    keyRulePersian: 'افعال کمکی وجهی هرگز s سوم شخص نمی‌گیرند و فعل بعد از آن‌ها بدون to می‌آید.',
    practicalUsage: 'Choose "had better" when there is a concrete negative consequence for failing to act ("We had better leave before the storm hits").',
    practicalUsagePersian: 'از had better زمانی استفاده کنید که در صورت انجام ندادن کار پیامد ناگواری وجود دارد.',
    sourceReference: 'Understanding and Using English Grammar (5th Ed), Chapter 8, pp. 182–209',
    sections: [
      {
        id: 'ch08-s1',
        title: 'Degrees of Obligation: Must, Have to, Should',
        titlePersian: 'درجات الزام: Must، Have to و Should',
        content: '"Must" conveys urgent necessity. "Have to" denotes external duty. "Should" and "ought to" convey moral advice.',
        contentPersian: 'تفاوت شدت در الزام و توصیه میان افعال وجهی.',
        formula: 'Subject + Modal + Bare Verb',
        examples: [
          {
            sentence: 'Scholars must verify their references before publication.',
            translation: 'پژوهشگران باید پیش از انتشار ارجاعات خود را راستی‌آزمایی کنند.',
            explanation: 'High necessity and professional requirement.',
            explanationPersian: 'بیان ضرورت حرفه‌ای و قطعی.'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'She cans speak three dialects.',
            correct: 'She can speak three dialects.',
            reason: 'Modals like "can" never add "-s" in third person.',
            reasonPersian: 'فعل وجهی can هرگز پسوند s سوم شخص نمی‌گیرد.'
          }
        ]
      }
    ]
  },
  {
    id: 'ch-09',
    chapterNumber: 9,
    title: 'Modals, Part 2: Degrees of Certainty and Past Modals',
    titlePersian: 'افعال وجهی ۲: درجات قطعیت و وجهی‌های گذشته',
    category: 'Modals',
    summary: 'Speculating about the present and past with must have, could have, might have, and should have.',
    summaryPersian: 'حدس و گمان منطقی، درجات یقین، و بررسی احتمالات یا حسرت‌های گذشته.',
    introduction: 'When evidence suggests a conclusion rather than verified fact, English uses modals of deduction (must, might, could, can\'t).',
    introductionPersian: 'هنگامی که بر اساس شواهد نتیجه‌گیری می‌کنیم، از وجهی‌های استنتاجی استفاده می‌شود.',
    whyItExists: 'It enables nuanced speculation: "He must be asleep" (95% sure) versus "He might be asleep" (50% sure).',
    whyItExistsPersian: 'امکان بیان درصد احتمال و حدس منطقی را فراهم می‌آورد.',
    whenToUse: 'For past speculations, combine the modal with have + past participle: "The ancient text must have been written in the 17th century."',
    whenToUsePersian: 'برای حدس درباره گذشته از ترکیب Modal + have + V3 استفاده کنید.',
    keyRule: 'To express negative logical impossibility, use "cannot / can\'t have", NEVER "must not have" in British and standard academic English.',
    keyRulePersian: 'برای عدم امکان منطقی در گذشته از can\'t have استفاده می‌شود نه must not have.',
    practicalUsage: 'Use "should have + V3" to critique a past oversight or express polite regret.',
    practicalUsagePersian: 'از should have برای ابراز حسرت یا تذکر اشتباه گذشته استفاده نمایید.',
    sourceReference: 'Understanding and Using English Grammar (5th Ed), Chapter 9, pp. 210–239',
    sections: [
      {
        id: 'ch09-s1',
        title: 'Past Modals of Deduction',
        titlePersian: 'افعال وجهی استنتاجی در زمان گذشته',
        content: 'Must have (almost certain), Might/Could have (possible), and Can\'t have (impossible) evaluate past occurrences.',
        contentPersian: 'استنتاج منطقی درباره رویدادهای گذشته با توجه به شواهد موجود.',
        formula: 'Subject + Modal + have + Past Participle',
        examples: [
          {
            sentence: 'The manuscript cannot have been destroyed; it was stored in the iron vault.',
            translation: 'دست‌نوشته نمی‌تواند نابود شده باشد؛ در گاوصندوق آهنی نگهداری می‌شد.',
            explanation: 'Logical impossibility based on physical evidence.',
            explanationPersian: 'عدم امکان منطقی بر اساس شواهد قطعی.'
          }
        ]
      }
    ]
  },
  {
    id: 'ch-10',
    chapterNumber: 10,
    title: 'The Passive Voice',
    titlePersian: 'حالت مجهول',
    category: 'Voice & Form',
    summary: 'Forming passive sentences, by-phrases, stative passives, and impersonal passive reporting.',
    summaryPersian: 'ساخت جملات مجهول، ذکر فاعل با by، مجهول‌های حالتی و نقل‌قول‌های رسمی مجهول.',
    introduction: 'The passive voice shifts focus from the performer of an action (agent) to the receiver or result of that action (patient).',
    introductionPersian: 'در حالت مجهول، تمرکز از انجام‌دهنده به دریافت‌کننده یا نتیجه عمل معطوف می‌شود.',
    whyItExists: 'In academic, scientific, and legal writing, the agent is often unknown, irrelevant, or deliberately understated.',
    whyItExistsPersian: 'در متون علمی و ادبی، وقتی فاعل ناشناخته یا کم‌اهمیت‌تر از نتیجه است، مجهول ضروری است.',
    whenToUse: 'Use passive when the receiver is more important than the agent ("The dictionary was published in Tehran") or in formal reporting ("It is believed that...").',
    whenToUsePersian: 'زمانی که مفعول اهمیت بیشتری دارد یا فاعل نامشخص است از مجهول استفاده کنید.',
    keyRule: 'Only transitive verbs (verbs that take a direct object) can be transformed into the passive voice.',
    keyRulePersian: 'فقط افعال متعدی (دارای مفعول مستقیم) قابلیت تبدیل به حالت مجهول را دارند.',
    practicalUsage: 'Adopt stative passive adjectives ("be situated in", "be accustomed to", "be composed of") to describe conditions.',
    practicalUsagePersian: 'افعال مجهول حالتی مانند be composed of برای توصیف وضعیت‌ها عالی هستند.',
    sourceReference: 'Understanding and Using English Grammar (5th Ed), Chapter 10, pp. 240–273',
    sections: [
      {
        id: 'ch10-s1',
        title: 'Passive Formation and The By-Phrase',
        titlePersian: 'ساختار مجهول و عبارت By',
        content: 'Formed by placing the appropriate tense of "be" before the past participle of the main verb.',
        contentPersian: 'از ترکیب فرم مناسب be با اسم مفعول (قسمت سوم فعل) ساخته می‌شود.',
        formula: 'Subject (Patient) + Be (in appropriate tense) + Past Participle (+ by Agent)',
        examples: [
          {
            sentence: 'The larger English-Persian dictionary was compiled by Soleiman Haim.',
            translation: 'فرهنگ بزرگ انگلیسی-فارسی توسط سلیمان حییم تألیف گردید.',
            explanation: 'Passive puts the dictionary first; the agent is credited via "by".',
            explanationPersian: 'اثر در ابتدای جمله قرار گرفته و مؤلف با by معرفی شده است.'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'An accident was happened on the highway.',
            correct: 'An accident happened on the highway.',
            reason: '"Happen" is an intransitive verb and cannot occur in the passive.',
            reasonPersian: 'فعل happen ناگذر است و صورت مجهول ندارد.'
          }
        ]
      }
    ]
  },
  {
    id: 'ch-11',
    chapterNumber: 11,
    title: 'Noun Clauses',
    titlePersian: 'بندهای اسمی',
    category: 'Clauses',
    summary: 'Clauses introduced by that, whether/if, and question words acting as subjects or objects.',
    summaryPersian: 'جمله‌واره‌هایی که با that، whether/if و کلمات پرسشی آغاز شده و نقش فاعل یا مفعول را ایفا می‌کنند.',
    introduction: 'A noun clause is a dependent clause that occupies any position a simple noun or pronoun could occupy.',
    introductionPersian: 'بند اسمی یک جمله‌واره وابسته است که در جایگاه اسم، فاعل یا مفعول قرار می‌گیرد.',
    whyItExists: 'It enables complex propositional thought: embedding an entire sentence inside another sentence ("I believe [that grammar builds mental clarity]").',
    whyItExistsPersian: 'به ما اجازه می‌دهد گزاره‌ها و باورهای کامل را درون یک جمله دیگر بگنجانیم.',
    whenToUse: 'Use after verbs of cognition (think, believe, discover), after reporting verbs (say, explain), and with the subjunctive in demands (demand that he be present).',
    whenToUsePersian: 'پس از افعال اندیشیدن، گزارش و تقاضا، بندهای اسمی برای بیان محتوا به کار می‌روند.',
    keyRule: 'Inside a noun clause beginning with a question word, the word order MUST remain statement order (Subject + Verb), not inverted question order.',
    keyRulePersian: 'ترتیب کلمات در بند اسمی همواره ترتیبی خبری (فاعل + فعل) است و حالت پرسشی ندارد.',
    practicalUsage: 'Use "whether...or not" when debating alternative hypotheses in academic discussions.',
    practicalUsagePersian: 'برای طرح تردید و گزینه‌های دوتایی در نگارش از whether... or not بهره بگیرید.',
    sourceReference: 'Understanding and Using English Grammar (5th Ed), Chapter 11, pp. 274–304',
    sections: [
      {
        id: 'ch11-s1',
        title: 'Word Order in Embedded Noun Clauses',
        titlePersian: 'ترتیب کلمات در بندهای اسمی درونی',
        content: 'When turning a question into a noun clause, restore normal declarative word order.',
        contentPersian: 'هنگام تبدیل سوال به بند اسمی، ترتیب فاعل و فعل به حالت خبری بازمی‌گردد.',
        formula: 'Subject + Verb + [Wh-word / That / Whether + Subject + Verb]',
        examples: [
          {
            sentence: 'Nobody understands why the manuscript disappeared from the archives.',
            translation: 'هیچ‌کس نمی‌داند چرا آن دست‌نوشته از بایگانی ناپدید شد.',
            explanation: 'Uses "why" followed by subject "the manuscript" and verb "disappeared", not "why did the manuscript disappear".',
            explanationPersian: 'ترتیب خبری (why + فاعل + فعل) رعایت شده است.'
          }
        ],
        commonMistakes: [
          {
            incorrect: 'I wonder where did she go.',
            correct: 'I wonder where she went.',
            reason: 'In embedded noun clauses, auxiliary inversion like "did she go" is ungrammatical.',
            reasonPersian: 'در بندهای اسمی نباید از افعال کمکی پرسشی نظیر did استفاده کرد.'
          }
        ]
      }
    ]
  },
  {
    id: 'ch-12',
    chapterNumber: 12,
    title: 'Adjective Clauses (Relative Clauses)',
    titlePersian: 'بندهای موصولی',
    category: 'Clauses',
    summary: 'Who, whom, which, that, whose, where, and when in restrictive and non-restrictive clauses.',
    summaryPersian: 'کاربرد ضمایر موصولی در بندهای تحدیدی (توصیفی لازم) و غیرتحدیدی (اطلاعات اضافی با ویرگول).',
    introduction: 'Adjective clauses modify a preceding noun or pronoun, acting like an expanded descriptive adjective.',
    introductionPersian: 'بندهای موصولی اسم قبل از خود را توصیف می‌کنند و نقشی شبیه به صفت دارند.',
    whyItExists: 'They combine two related sentences into one elegant, coherent statement without repetitive naming.',
    whyItExistsPersian: 'دو جمله مرتبط را بدون تکرار نام در قالب یک جمله منسجم ترکیب می‌کنند.',
    whenToUse: 'Use who/whom for people, which for things, and that for restrictive clauses of either. Use commas for non-restrictive (extra information) clauses.',
    whenToUsePersian: 'از who برای انسان و which برای اشیاء، و در بندهای غیرتحدیدی از کاما در دو طرف استفاده کنید.',
    keyRule: 'Never use the pronoun "that" in a non-restrictive clause set off by commas.',
    keyRulePersian: 'در بندهای غیرتحدیدی (دارای کاما) هرگز از that استفاده نکنید و which یا who بگذارید.',
    practicalUsage: 'Master "whose" for possession: "The scholar whose dictionary we revere spent forty years in study."',
    practicalUsagePersian: 'کلمه whose برای نشان دادن مالکیت در جملات موصولی به کار می‌رود.',
    sourceReference: 'Understanding and Using English Grammar (5th Ed), Chapter 12, pp. 305–334',
    sections: [
      {
        id: 'ch12-s1',
        title: 'Restrictive vs. Non-Restrictive Clauses',
        titlePersian: 'بندهای تحدیدی در برابر غیرتحدیدی',
        content: 'Restrictive clauses define which item is meant (no commas). Non-restrictive clauses supply bonus details about an already-identified entity (enclosed in commas).',
        contentPersian: 'بندهای تحدیدی هویت اسم را مشخص می‌کنند؛ بندهای غیرتحدیدی توضیح مازاد می‌دهند و بین دو کاما قرار می‌گیرند.',
        formula: 'Noun + [who/which/that + clause] (Restrictive) vs. Proper Noun, [who/which + clause], (Non-restrictive)',
        examples: [
          {
            sentence: 'Soleiman Haim, who translated thousands of idioms, died in 1970.',
            translation: 'سلیمان حییم، که هزاران اصطلاح را ترجمه کرد، در سال ۱۹۷۰ درگذشت.',
            explanation: 'The name already identifies the person; the relative clause is non-restrictive and requires commas.',
            explanationPersian: 'چون نام مشخص است، بند موصولی غیرتحدیدی بوده و ویرگول لازم دارد.'
          }
        ]
      }
    ]
  },
  {
    id: 'ch-13',
    chapterNumber: 13,
    title: 'Gerunds and Infinitives, Part 1',
    titlePersian: 'اسم‌های مصدر و افعال مصدری ۱',
    category: 'Verbals',
    summary: 'Verbs followed by gerunds (-ing) versus verbs followed by infinitives (to + verb).',
    summaryPersian: 'افعالی که با اسم مصدر (-ing) می‌آیند در برابر افعالی که با مصدر با to دنبال می‌شوند.',
    introduction: 'A verb can act as a nominal complement in either gerund form (dancing, reading) or infinitive form (to dance, to read).',
    introductionPersian: 'فعل‌ها می‌توانند به صورت اسم مصدر یا مصدر کامل به عنوان متمم فعل دیگر قرار گیرند.',
    whyItExists: 'Gerunds convey ongoing, vivid, or familiar actions, while infinitives often point toward potential, future, or desired goals.',
    whyItExistsPersian: 'اسم مصدر حسی از عمل واقعی یا تجربه را دارد، در حالی که مصدر اغلب متوجه هدف و آینده است.',
    whenToUse: 'Memorize standard verb categories: enjoy, avoid, consider take gerunds; decide, hope, expect take infinitives.',
    whenToUsePersian: 'افعالی چون enjoy و avoid همیشه با gerund و افعالی چون decide و hope با infinitive می‌آیند.',
    keyRule: 'After prepositions, verbs MUST always take the gerund (-ing) form, never an infinitive.',
    keyRulePersian: 'بعد از حروف اضافه، فعل حتماً باید به شکل اسم مصدر (-ing) بیاید.',
    practicalUsage: 'Notice verbs whose meaning alters completely: "remember to lock the door" (duty) vs "remember locking the door" (past memory).',
    practicalUsagePersian: 'به تفاوت افعالی مثل remember و stop که با مصدر یا اسم مصدر معنای متفاوتی دارند دقت کنید.',
    sourceReference: 'Understanding and Using English Grammar (5th Ed), Chapter 13, pp. 335–365',
    sections: [
      {
        id: 'ch13-s1',
        title: 'Verbs with Gerunds vs. Infinitives',
        titlePersian: 'افعال نیازمند Gerund در برابر Infinitive',
        content: 'Verbs like avoid, finish, delay, and quit take gerunds. Verbs like agree, promise, refuse, and demand take infinitives.',
        contentPersian: 'دسته‌بندی افعال بر مبنای متمم مصدری یا اسم مصدری.',
        formula: 'Verb + Gerund (V-ing) OR Verb + Infinitive (to + V)',
        examples: [
          {
            sentence: 'The student avoided making careless spelling mistakes.',
            translation: 'دانشجو از مرتکب شدن غلط‌های املایی سهوی خودداری کرد.',
            explanation: '"Avoid" is strictly followed by a gerund.',
            explanationPersian: 'فعل avoid همیشه با اسم مصدر می‌آید.'
          }
        ]
      }
    ]
  },
  {
    id: 'ch-14',
    chapterNumber: 14,
    title: 'Gerunds and Infinitives, Part 2',
    titlePersian: 'اسم‌های مصدر و افعال مصدری ۲',
    category: 'Verbals',
    summary: 'Preposition combinations with gerunds, sense perception verbs, and causative verbs.',
    summaryPersian: 'ترکیب حروف اضافه با اسم مصدر، افعال حسی و افعال سببی (make, have, let).',
    introduction: 'Expands into specialized verbal patterns including causatives (make, have, let) and prepositional idioms.',
    introductionPersian: 'بررسی الگوهای پیشرفته‌تر نظیر افعال سببی و اصطلاحات دارای حرف اضافه.',
    whyItExists: 'Causative verbs distinguish between compulsion (make), permission (let), and delegation (have).',
    whyItExistsPersian: 'افعال سببی تمایز میان اجبار کردن، اجازه دادن و واگذار کردن کار را بیان می‌کنند.',
    whenToUse: 'Use bare infinitive after causative make/let/have: "The teacher made him rewrite the essay."',
    whenToUsePersian: 'بعد از افعال سببی make, have, let از مصدر بدون to استفاده کنید.',
    keyRule: '"Used to + base verb" means past habit; "Be/get used to + gerund" means accustomed to something.',
    keyRulePersian: 'تفاوت used to (عادت در گذشته) با be used to + ing (خو گرفتن به چیزی) بسیار کلیدی است.',
    practicalUsage: 'Expressing purpose clearly requires "in order to" or simple "to", never "for to" or "for + infinitive".',
    practicalUsagePersian: 'برای بیان هدف از to یا in order to استفاده کنید، نه for to.',
    sourceReference: 'Understanding and Using English Grammar (5th Ed), Chapter 14, pp. 366–395',
    sections: [
      {
        id: 'ch14-s1',
        title: 'Causative Verbs (Make, Have, Let, Get)',
        titlePersian: 'افعال سببی (Make, Have, Let, Get)',
        content: 'Make, have, and let are followed by person + bare infinitive. Get is followed by person + to-infinitive.',
        contentPersian: 'افعال make, have, let با مصدر بدون to و get با مصدر همراه با to می‌آیند.',
        formula: 'Subject + make/let/have + Agent + Base Verb',
        examples: [
          {
            sentence: 'The professor let the pupils examine the rare dictionary.',
            translation: 'استاد به شاگردان اجازه داد که فرهنگ کمیاب را بررسی کنند.',
            explanation: '"Let" takes an object and a bare infinitive without "to".',
            explanationPersian: 'فعل let مفعول و مصدر بدون to می‌گیرد.'
          }
        ]
      }
    ]
  },
  {
    id: 'ch-15',
    chapterNumber: 15,
    title: 'Coordinating Conjunctions and Parallel Structure',
    titlePersian: 'حروف ربط همپایه و ساختار موازی',
    category: 'Sentence Architecture',
    summary: 'Connecting words, phrases, and clauses with coordinating and correlative conjunctions.',
    summaryPersian: 'پیوند کلمات، عبارات و بندها با حروف ربط همپایه (FANBOYS) و جفتی، و رعایت توازی دستوری.',
    introduction: 'Parallelism requires that balanced elements connected by conjunctions share the exact same grammatical category.',
    introductionPersian: 'اصل توازی حکم می‌کند اجزای متصل با حروف ربط، از یک قالب دستوری یکسان پیروی کنند.',
    whyItExists: 'Unbalanced constructions jar the reader\'s rhythm and make complex propositions cumbersome.',
    whyItExistsPersian: 'عدم رعایت توازی، ریتم و درک جمله را برای خواننده مختل می‌سازد.',
    whenToUse: 'Whenever pairing items with and, but, or, yet, nor, not only...but also, both...and, or neither...nor.',
    whenToUsePersian: 'هنگام جفت کردن اجزا با حروف ربط همپایه، قالب کلمات را یکدست نگه دارید.',
    keyRule: 'If the first element after "not only" is a prepositional phrase, the element after "but also" MUST be a prepositional phrase.',
    keyRulePersian: 'اگر بعد از not only عبارت حرف اضافه‌ای آمد، بعد از but also نیز دقیقاً باید همان ساختار تکرار شود.',
    practicalUsage: 'In essays, use parallelism in thesis statements to give arguments balanced force and elegance.',
    practicalUsagePersian: 'استفاده از ساختار موازی در جملات پایانی مقالات باعث اقتدار و زیبایی کلام می‌شود.',
    sourceReference: 'Understanding and Using English Grammar (5th Ed), Chapter 15, pp. 396–413',
    sections: [
      {
        id: 'ch15-s1',
        title: 'Correlative Conjunctions and Symmetry',
        titlePersian: 'حروف ربط جفتی و تقارن ساختاری',
        content: 'Both...and, not only...but also, neither...nor demand precise symmetry in parts of speech.',
        contentPersian: 'تقارن دقیق اجزا در هر دو سوی حروف ربط جفتی.',
        formula: 'Not only [Structure A] but also [Structure A]',
        examples: [
          {
            sentence: 'The volume is remarkable not only for its thoroughness but also for its typography.',
            translation: 'این کتاب نه تنها به سبب جامعیتش بلکه به سبب حروف‌چینی‌اش نیز برجسته است.',
            explanation: 'Both complements are prepositional phrases ("for its...").',
            explanationPersian: 'هر دو بخش بعد از حرف ربط از یک ساختار حرف اضافه‌ای پیروی می‌کنند.'
          }
        ]
      }
    ]
  },
  {
    id: 'ch-16',
    chapterNumber: 16,
    title: 'Adverb Clauses',
    titlePersian: 'بندهای قیدی',
    category: 'Clauses',
    summary: 'Subordinating clauses of time, cause and effect, opposition, and condition.',
    summaryPersian: 'جمله‌واره‌های وابسته بیانگر زمان، علت و معلول، تضاد و شرط.',
    introduction: 'Adverb clauses are introduced by subordinating conjunctions to show logical relationships between clauses.',
    introductionPersian: 'بندهای قیدی با کلمات ربط وابسته شروع شده و روابط منطقی میان رویدادها را نمایان می‌سازند.',
    whyItExists: 'They reveal the underlying reason, time sequence, or qualification of an action.',
    whyItExistsPersian: 'روابط علت و معلولی و زمانی میان گزاره‌ها را تبیین می‌کنند.',
    whenToUse: 'When connecting dependent context to an independent clause (although, because, while, as soon as).',
    whenToUsePersian: 'برای متصل کردن موقعیت به جمله اصلی از این بندها استفاده می‌شود.',
    keyRule: 'When an adverb clause precedes the main clause, a comma is mandatory; when it follows, a comma is usually omitted.',
    keyRulePersian: 'اگر بند قیدی اول جمله بیاید، ویرگول بعد از آن الزامی است؛ اگر در آخر بیاید، کاما گذاشته نمی‌شود.',
    practicalUsage: 'Use "whereas" or "while" to present measured scholarly comparisons.',
    practicalUsagePersian: 'از while یا whereas برای مقایسه‌های علمی سنجیده استفاده کنید.',
    sourceReference: 'Understanding and Using English Grammar (5th Ed), Chapter 16, pp. 414–442',
    sections: [
      {
        id: 'ch16-s1',
        title: 'Clauses of Contrast and Concession',
        titlePersian: 'بندهای قیدی تضاد و امتیاز',
        content: '"Although", "even though", and "while" acknowledge an opposing condition while affirming the main clause.',
        contentPersian: 'بیان تعارض با although و even though.',
        formula: 'Although + Clause 1, Clause 2',
        examples: [
          {
            sentence: 'Although typographical challenges were immense, the editors persevered.',
            translation: 'اگرچه دشواری‌های حروف‌چینی عظیم بود، اما ویراستاران پافشاری کردند.',
            explanation: 'Shows concession with a comma separating the initial dependent clause.',
            explanationPersian: 'بیان تقابل همراه با قرار دادن ویرگول پس از بند مقدماتی.'
          }
        ]
      }
    ]
  },
  {
    id: 'ch-17',
    chapterNumber: 17,
    title: 'Reduction of Adverb Clauses to Modifying Phrases',
    titlePersian: 'خلاصه‌سازی بندهای قیدی به عبارات قیدی',
    category: 'Sentence Architecture',
    summary: 'Transforming adverb clauses into participial modifying phrases for stylistic economy.',
    summaryPersian: 'کوتاه‌سازی جمله‌واره‌های قیدی به عبارات وابسته وصفی برای ایجاز و شیوایی کلام.',
    introduction: 'A full adverb clause can be streamlined into a participial phrase when the subject of both clauses is identical.',
    introductionPersian: 'در صورت یکسان بودن فاعل دو بند، بند قیدی به عبارت خلاصه می‌شود.',
    whyItExists: 'Reduces wordiness and creates the elevated cadence characteristic of Victorian and classical prose.',
    whyItExistsPersian: 'مانع از اطناب کلام شده و آهنگ کلاسیک و فاخری به نوشته می‌بخشد.',
    whenToUse: 'When shortening clauses introduced by while, when, before, after, or because.',
    whenToUsePersian: 'هنگام خلاصه‌سازی جمله‌واره‌های زمانی یا علتی.',
    keyRule: 'The implied subject of the modifying phrase MUST be the identical grammatical subject of the main clause; otherwise, it creates a "dangling modifier".',
    keyRulePersian: 'فاعل ضمنی عبارت خلاصه‌شده حتماً باید همان فاعل جمله اصلی باشد، وگرنه خطای توصیف‌گر معلق رخ می‌دهد.',
    practicalUsage: 'Use "having + past participle" to emphasize completion before the main event: "Having verified every page, the scholar rested."',
    practicalUsagePersian: 'عبارت having + V3 برای نشان دادن اتمام قطعی کار قبل از رویداد اصلی عالی است.',
    sourceReference: 'Understanding and Using English Grammar (5th Ed), Chapter 17, pp. 443–459',
    sections: [
      {
        id: 'ch17-s1',
        title: 'Participial Phrase Reduction & Dangling Modifiers',
        titlePersian: 'کاهش به عبارات وجه وصفی و اجتناب از توصیف‌گر معلق',
        content: 'Omit the subject and convert the verb into -ing or having + past participle.',
        contentPersian: 'حذف فاعل بند قیدی و تبدیل فعل به حالت ing دار یا having + V3.',
        formula: 'Having + Past Participle, Subject + Verb',
        examples: [
          {
            sentence: 'Having completed the arduous translation, Haim submitted the manuscript.',
            translation: 'حییم پس از به پایان رساندن ترجمه طاقت‌فرسا، دست‌نوشته را تحویل داد.',
            explanation: 'Shortens "After he had completed..."; the subject "Haim" directly follows.',
            explanationPersian: 'خلاصه‌سازی عبارت بدون ایجاد ابهام در فاعل.'
          }
        ]
      }
    ]
  },
  {
    id: 'ch-18',
    chapterNumber: 18,
    title: 'Connectives Expressing Cause/Effect, Contrast, and Condition',
    titlePersian: 'کلمات ربط بیان علت/معلول، تضاد و شرط',
    category: 'Sentence Architecture',
    summary: 'Transitions, conjunctive adverbs, and prepositional connectives.',
    summaryPersian: 'قیدهای رابط، حروف ربط تضاد و نتیجه، و عبارات پیوند دهنده منطقی.',
    introduction: 'Connectives link thoughts across sentences or between coordinate clauses, guiding logical interpretation.',
    introductionPersian: 'کلمات ربط و انتقال افکار را بین جملات پیوند داده و مسیر استدلال را مشخص می‌کنند.',
    whyItExists: 'They signal the precise relationship between independent claims: cause, conclusion, concession, or continuation.',
    whyItExistsPersian: 'روابط منطقی نظیر تضاد، نتیجه و اضافه شدن را شفاف می‌سازند.',
    whenToUse: 'Use conjunctive adverbs (therefore, however, consequently) with a semicolon and comma when joining two independent clauses.',
    whenToUsePersian: 'قیدهای ربطی مانند however و therefore با نقطه ویرگول و کاما استفاده می‌شوند.',
    keyRule: 'Never join two independent clauses with only a comma (comma splice); use a semicolon, period, or coordinating conjunction.',
    keyRulePersian: 'دو جمله مستقل را هرگز فقط با کاما به هم وصل نکنید (خطای comma splice).',
    practicalUsage: 'Distinguish between "despite" (preposition + noun phrase) and "although" (subordinating conjunction + full clause).',
    practicalUsagePersian: 'به تفاوت despite (همراه با اسم) و although (همراه با بند کامل) توجه فرمایید.',
    sourceReference: 'Understanding and Using English Grammar (5th Ed), Chapter 18, pp. 460–487',
    sections: [
      {
        id: 'ch18-s1',
        title: 'Conjunctive Adverbs vs. Prepositional Connectives',
        titlePersian: 'قیدهای ربطی در برابر عبارات حرف اضافه‌ای',
        content: '"However" is an adverbial transition; "despite / in spite of" is a preposition taking an object noun phrase.',
        contentPersian: 'تفاوت ساختاری میان however و despite.',
        formula: 'Clause 1; therefore, Clause 2. OR In spite of [Noun], Clause 2.',
        examples: [
          {
            sentence: 'The lexicon was exhaustive; nevertheless, subsequent editions refined minor typographical slips.',
            translation: 'فرهنگ جامع بود؛ با این وجود، چاپ‌های بعدی لغزش‌های چاپی اندک را اصلاح کردند.',
            explanation: 'Uses semicolon and "nevertheless" to join independent clauses.',
            explanationPersian: 'اتصال دو جمله مستقل با نقطه ویرگول و nevertheless.'
          }
        ]
      }
    ]
  },
  {
    id: 'ch-19',
    chapterNumber: 19,
    title: 'Conditional Sentences and Wishes',
    titlePersian: 'جملات شرطی و آرزوها',
    category: 'Conditionals & Subjunctive',
    summary: 'Real, unreal, past hypothetical conditionals, mixed conditionals, and wishes.',
    summaryPersian: 'شرطی‌های واقعی، غیرواقعی حال، فرضی گذشته، شرطی‌های ترکیبی، و ساختارهای آرزو با wish.',
    introduction: 'Conditionals explore possibilities, imagined counter-factual scenarios, and speculative alternatives.',
    introductionPersian: 'جملات شرطی وضعیت‌های فرضی، آرزوهای غیرممکن و سناریوهای خلاف واقع را بررسی می‌کنند.',
    whyItExists: 'Humans constantly analyze past alternatives ("If I had known...") and formulate cautious hypotheses.',
    whyItExistsPersian: 'تفکر تحلیلی درباره گذشته و آینده بدون شرطی‌های فرضی غیرممکن است.',
    whenToUse: 'First Conditional for realistic future possibilities. Second Conditional for present/future untruths. Third Conditional for past counter-factuals. Mixed Conditionals for past events affecting present reality.',
    whenToUsePersian: 'شرطی نوع اول برای آینده واقعی، نوع دوم برای فرضیات کنونی، و نوع سوم برای اتفاقات گذشته که رخ نداده‌اند.',
    keyRule: 'In formal standard English, use "were" for all subjects in the Second Conditional ("If he were diligent...").',
    keyRulePersian: 'در انگلیسی معیار رسمی، در شرطی نوع دوم برای همه فاعل‌ها از were استفاده می‌شود (If I were you).',
    practicalUsage: 'Express regret about the past with "I wish I had consulted the larger dictionary earlier."',
    practicalUsagePersian: 'برای ابراز حسرت گذشته از wish + ماضی بعید استفاده کنید.',
    sourceReference: 'Understanding and Using English Grammar (5th Ed), Chapter 19, pp. 488–517',
    sections: [
      {
        id: 'ch19-s1',
        title: 'Unreal Past Conditional (Third Conditional)',
        titlePersian: 'شرطی نوع سوم (گذشته خلاف واقع)',
        content: 'Formed with "had + past participle" in the if-clause and "would have + past participle" in the result clause.',
        contentPersian: 'بررسی رویدادی در گذشته که به گونه‌ای دیگر رخ داده است.',
        formula: 'If + Subject + had + V3, Subject + would have + V3',
        examples: [
          {
            sentence: 'If the typesetter had inspected the proofs, the errata would not have appeared.',
            translation: 'اگر حروف‌چین نمونه‌ها را بازبینی کرده بود، غلط‌نامه پدیدار نمی‌شد.',
            explanation: 'Hypothetical past reality: the typesetter did not inspect, so the errata did appear.',
            explanationPersian: 'شرطی گذشته که رخ ندادنش نتیجه متفاوتی به بار می‌آورد.'
          }
        ]
      }
    ]
  },
  {
    id: 'ch-20',
    chapterNumber: 20,
    title: 'Subject-Verb Inversion and Preposition Combinations',
    titlePersian: 'وارونگی فاعل و فعل و ترکیبات حروف اضافه',
    category: 'Advanced Rhetoric',
    summary: 'Negative inversion, locative inversion, and dependent preposition collocations.',
    summaryPersian: 'وارونگی فاعل و فعل با عبارات منفی، وارونگی مکانی، و حروف اضافه وابسته به افعال و صفت‌ها.',
    introduction: 'Inversion places the auxiliary verb before the subject to create dramatic emphasis or stylistic elegance.',
    introductionPersian: 'وارونگی فعل کمکی را پیش از فاعل قرار می‌دهد تا تأکید لفاظانه یا زیبایی سبکی خلق کند.',
    whyItExists: 'It gives English prose a majestic Victorian cadence that signals heightened gravity and authority.',
    whyItExistsPersian: 'به نثر انگلیسی شکوه و وقاری کلاسیک و ادبی می‌بخشد.',
    whenToUse: 'When beginning a sentence with negative or restrictive adverbs (rarely, seldom, scarcely, under no circumstances, not only).',
    whenToUsePersian: 'هنگام آغاز جمله با قیدهای منفی یا تحدیدی مانند rarely, under no circumstances.',
    keyRule: 'Negative inversion requires question word order (Auxiliary + Subject + Verb), but the sentence remains a statement with a period.',
    keyRulePersian: 'در وارونگی منفی ترتیب فعل کمکی و فاعل مثل سوالی است، اما جمله در انتها نقطه می‌گیرد.',
    practicalUsage: 'Use dependent prepositions accurately: "insist on", "comply with", "prohibit from", "accustomed to".',
    practicalUsagePersian: 'حروف اضافه وابسته به افعال نظیر insist on یا comply with را با دقت به کار ببرید.',
    sourceReference: 'Understanding and Using English Grammar (5th Ed), Chapter 20, pp. 518–540',
    sections: [
      {
        id: 'ch20-s1',
        title: 'Negative Adverbial Inversion',
        titlePersian: 'وارونگی بعد از قیدهای منفی',
        content: 'When words like seldom, rarely, or never open a sentence, invert the auxiliary and subject.',
        contentPersian: 'قرار گرفتن قید منفی در ابتدای جمله مستلزم جلو آمدن فعل کمکی است.',
        formula: 'Negative Word + Auxiliary + Subject + Main Verb',
        examples: [
          {
            sentence: 'Rarely did the venerable scholar compromise on lexicographical exactitude.',
            translation: 'به‌ندرت آن دانشمند جلیل‌القدر در دقت فرهنگ‌نویسی مصالحه می‌کرد.',
            explanation: 'Opens with "Rarely", triggering auxiliary "did" before subject "the venerable scholar".',
            explanationPersian: 'آغاز با Rarely و جلو آمدن فعل کمکی did پیش از فاعل.'
          }
        ]
      }
    ]
  }
];
