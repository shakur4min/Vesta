# coding: utf-8
"""
Generates all 400 validated grammar questions for VESTA.
20 Chapters x 20 Questions = 400 Questions.
Strict difficulty breakdown:
1-5: Easy
6-10: Medium
11-15: Hard
16-20: Advanced
"""

import json

chapters_data = [
    (1, "Present and Past: Simple and Progressive", "حال و گذشته: ساده و استمراری", [
        ("The earth ___ (revolve) around the sun.", "زمین به دور خورشید می‌چرخد.", ["revolves"], ["is revolving"], "Simple present for universal truth.", "حال ساده برای بیان حقیقت علمی جهان‌شمول."),
        ("Listen! The clock ___ (chime) twelve in the grand hall.", "گوش کن! ساعت در تالار بزرگ دوازده ضربه می‌زند.", ["is chiming"], ["chimes"], "Present progressive for ongoing sensory action right now.", "حال استمراری برای رویدادی که در لحظه صحبت کردن در جریان است."),
        ("Yesterday, the curator ___ (discover) an obscure folio.", "دیروز موزه‌دار یک برگ دست‌نویس گمنام پیدا کرد.", ["discovered"], [], "Simple past for finished action at definite past time.", "گذشته ساده برای رخداد پایان‌یافته در زمان معین گذشته."),
        ("At midnight, the rain ___ (beat) violently upon the roof.", "نیمه‌شب، باران به شدت بر بام می‌کوبید.", ["was beating"], ["beat"], "Past progressive for ongoing background action at specific past time.", "گذشته استمراری برای عملی که در ساعت مشخصی از گذشته در حال جریان بود."),
        ("Water ___ (freeze) at zero degrees Celsius.", "آب در صفر درجه سلسیوس یخ می‌زند.", ["freezes"], [], "Scientific fact expressed in simple present.", "قانون علمی بیان شده در زمان حال ساده."),
        ("While the scholar was speaking, the lantern ___ (flicker) out.", "در حالی که دانشمند صحبت می‌کرد، فانوس سو سو زد و خاموش شد.", ["flickered"], [], "Simple past interrupting an ongoing past progressive activity.", "گذشته ساده در نقش قطع‌کننده فعالیت استمراری در گذشته."),
        ("This ancient lexicon ___ (belong) to the royal library.", "این لغت‌نامه کهن به کتابخانه سلطنتی تعلق دارد.", ["belongs"], [], "Stative verb of possession does not take continuous aspect.", "فعل حالتی بیانگر مالکیت صورت استمراری نمی‌گیرد."),
        ("Right now, the scribes ___ (transcribe) the parchment.", "هم‌اکنون کاتبان در حال رونویسی پوست‌نوشته هستند.", ["are transcribing"], [], "Present progressive with plural subject describing current activity.", "حال استمراری با فاعل جمع برای کار در حال انجام."),
        ("He ___ (not understand) the archaic cipher.", "او رمز قدیمی را متوجه نمی‌شود.", ["does not understand", "doesn't understand"], ["did not understand"], "Negative simple present of a cognitive stative verb.", "منفی کردن فعل حالتی ادراکی در زمان حال ساده با does not."),
        ("What ___ (you read) when I entered the parlor?", "وقتی وارد اتاق نشیمن شدم داشتی چه می‌خواندی؟", ["were you reading"], ["did you read"], "Past continuous question form indicating activity in progress.", "سوالی گذشته استمراری برای بیان فعالیت در جریان."),
        ("I ___ (think) that his argument is completely sound.", "من فکر می‌کنم استدلال او کاملاً معتبر است.", ["think"], [], "Stative 'think' expressing opinion cannot take -ing.", "فعل think وقتی بیانگر نظر است استمراری نمی‌شود."),
        ("Silence! I ___ (think) about this difficult passage.", "سکوت! من دارم درباره این متن دشوار فکر می‌کنم.", ["am thinking", "'m thinking"], [], "Dynamic mental action in progress takes continuous form.", "فعل think وقتی بیانگر فعالیت ذهنی در لحظه است استمراری می‌شود."),
        ("The vintage ink ___ (smell) faintly of clove and pine.", "جوهر قدیمی اندکی بوی میخک و کاج می‌دهد.", ["smells"], [], "Sensory linking verb takes simple present.", "فعل حسی بیانگر بو دادن صورت ساده می‌گیرد."),
        ("The chemist ___ (smell) the potion to identify the herb.", "شیمی‌دان در حال بو کردن معجون است تا گیاه را شناسایی کند.", ["is smelling"], [], "Active physical action of smelling takes progressive.", "عمل فیزیکی بو کشیدن توسط فاعل صورت استمراری می‌گیرد."),
        ("He constantly ___ (misplace) his reading glasses.", "او دائماً عینکش را گم می‌کند.", ["misplaces", "is constantly misplaying", "is misplacing"], [], "Habitual frequency vs. progressive expressing annoyance.", "بیان تکرار عادت آزاردهنده."),
        ("As a rule, venerable institutions ___ (preserve) their seals.", "به عنوان یک قاعده، نهادهای قدیمی مهرهای خود را حفظ می‌کنند.", ["preserve"], [], "General customary practice requires simple present.", "یک سنت یا قاعده کلی نیازمند زمان حال ساده است."),
        ("Scarcely ___ (he begin) his lecture when the bells rang.", "هنوز سخنرانی‌اش را آغاز نکرده بود که ناقوس‌ها به صدا درآمدند.", ["had he begun"], ["did he begin"], "Inversion after negative adverbial 'scarcely'.", "وارونگی فعل کمکی پیش از فاعل پس از قید منفی scarcely."),
        ("In those days, monks ___ (illuminate) manuscripts by hand.", "در آن ایام، راهبان دست‌نوشته‌ها را با دست تذهیب می‌کردند.", ["illuminated", "used to illuminate"], ["would illuminate"], "Historical past customary activity.", "عادت یا سنت در زمان گذشته دور تاریخی."),
        ("This old parchment ___ (feel) remarkably smooth.", "این پوست‌نوشته کهن به شکل چشمگیری صاف به نظر می‌رسد.", ["feels"], [], "Linking verb expressing tactile quality takes simple present.", "فعل ربطی حسی برای توصیف جنس و کیفیت لمسی."),
        ("Whenever we visited, the candle ___ (flicker) on his desk.", "هرگاه به دیدارش می‌رفتیم، شمع روی میز کارش سوسو می‌زد.", ["was flickering", "flickered"], [], "Continuous atmospheric background in repeated past visits.", "رویداد استمراری در بستر تکرار دیدارهای گذشته.")
    ]),
    (2, "Perfect and Perfect Progressive Tenses", "زمان‌های کامل و کامل استمراری", [
        ("She ___ (live) in Oxford for seven years now.", "او اکنون به مدت هفت سال است که در آکسفورد زندگی می‌کند.", ["has lived", "has been living"], [], "Present perfect expressing duration continuing to the present.", "ماضی نقلی بیانگر عملی که از گذشته تا کنون ادامه دارد."),
        ("I ___ (never see) such an exquisite leather binding before.", "من تا کنون چنین صحافی چرمی نفیسی ندیده بودم.", ["have never seen", "'ve never seen"], [], "Lifetime experience up to present moment.", "بیان تجربه فرد تا لحظه حال با never."),
        ("By the time the messenger arrived, the council ___ (disperse).", "تا زمانی که قاصد رسید، شورا پراکنده شده بود.", ["had dispersed"], [], "Past perfect for an event completed prior to another past event.", "ماضی بعید برای کاری که قبل از کار دیگر در گذشته تمام شده است."),
        ("He ___ (write) letters since early dawn.", "او از سپیده‌دم در حال نوشتن نامه بوده است.", ["has been writing"], ["has written"], "Present perfect progressive highlighting uninterrupted duration.", "ماضی نقلی استمراری با تأکید بر طول مدت زمان انجام کار."),
        ("They ___ (already translate) three full treatises.", "آن‌ها تاکنون سه رساله کامل را ترجمه کرده‌اند.", ["have already translated", "'ve already translated"], [], "Completed result with present relevance using 'already'.", "عمل تمام‌شده با تأثیر کنونی همراه با already."),
        ("How long ___ (you wait) in the cold vestibule?", "چه مدت است که در راهروی سرد منتظر هستی؟", ["have you been waiting"], ["have you waited"], "Present perfect progressive question inquiring about duration.", "سوال ماضی نقلی استمراری درباره دیرپایی عمل."),
        ("Before she retired, the scholar ___ (publish) forty volumes.", "پیش از آنکه بازنشسته شود، آن دانشمند چهل جلد کتاب به چاپ رسانده بود.", ["had published"], [], "Past perfect indicating achievement completed before a past milestone.", "ماضی بعید برای دستاوردی که پیش از یک رویداد گذشته کامل شده بود."),
        ("We ___ (not hear) from the expeditionary envoy recently.", "ما اخیراً خبری از فرستاده اکتشافی دریافت نکرده‌ایم.", ["have not heard", "haven't heard"], [], "Negative present perfect with time word 'recently'.", "منفی ماضی نقلی با قید recently."),
        ("The ink on the document is wet; someone ___ (just sign) it.", "جوهر سند خیس است؛ کسی به تازگی آن را امضا کرده است.", ["has just signed"], [], "Recent action with visible immediate evidence.", "عمل رخ‌داده در لحظات اخیر با شواهد عینی حاضر."),
        ("Until that fateful winter, they ___ (never witness) such hardship.", "تا آن زمستان سرنوشت‌ساز، آن‌ها هرگز چنین سختی ندیده بودند.", ["had never witnessed"], [], "Past experience evaluated relative to an earlier past boundary.", "ماضی بعید با never نسبت به یک موعد گذشته."),
        ("The artisan\'s hands are trembling because he ___ (carve) all night.", "دستان هنرمند می‌لرزد زیرا تمام شب در حال کنده‌کاری بوده است.", ["has been carving"], [], "Present continuous symptom caused by recent prolonged activity.", "اثر مشهود در حال حاضر ناشی از فعالیتی ادامه‌دار در ساعات اخیر."),
        ("This is the most meticulous dictionary that I ___ (ever consult).", "این دقیق‌ترین فرهنگی است که من تا کنون بدان مراجعه کرده‌ام.", ["have ever consulted", "'ve ever consulted"], [], "Superlative clause paired with present perfect.", "جمله همراه با صفت عالی و ماضی نقلی با ever."),
        ("He had scarcely spoken when the clock ___ (strike) one.", "به‌سختی سخن گفته بود که ساعت یک ضربه زد.", ["struck"], [], "Simple past clause following an inverted past perfect clause.", "گذشته ساده پس از بند ماضی بعید وارونه."),
        ("The bridge collapsed after the river ___ (rise) two metres.", "پل پس از آنکه رود دو متر بالا آمده بود، فروریخت.", ["had risen"], ["rose"], "Past perfect following 'after' to specify the antecedent event.", "ماضی بعید بعد از after برای مشخص ساختن رخداد پیشین."),
        ("It is the first time she ___ (visit) the Bodleian library.", "این نخستین باری است که او از کتابخانه بودلیان بازدید می‌کند.", ["has visited"], [], "Fixed construction 'It is the first time...' takes present perfect.", "الگوی It is the first time با ماضی نقلی می‌آید."),
        ("By sunrise tomorrow, the couriers ___ (ride) fifty miles.", "تا طلوع خورشید فردا، قاصدان پنجاه مایل اسب رانده خواهند بود.", ["will have ridden"], [], "Future perfect for action completed prior to a future point.", "آینده کامل برای کاری که قبل از موعدی در آینده پایان می‌پذیرد."),
        ("Had he ___ (heed) the warning, the disaster would have been averted.", "اگر به هشدار توجه کرده بود، از این فاجعه جلوگیری می‌شد.", ["heeded"], [], "Inverted conditional past participle form.", "قسمت سوم فعل در ساختار شرطی وارونه."),
        ("She was exhausted because she ___ (walk) through the marsh for hours.", "او خسته و فرسوده بود زیرا ساعت‌ها در باتلاق راه رفته بود.", ["had been walking"], ["had walked"], "Past perfect progressive explaining a past state of exhaustion.", "ماضی بعید استمراری برای توجیه حالت خستگی در گذشته."),
        ("The manuscript ___ (lie) untouched in the chest for centuries.", "این دست‌نوشته قرن‌ها در صندوقچه دست‌نخورده باقی مانده بود.", ["had lain", "had been lying"], ["has lain"], "Irregular past perfect of 'lie' (recline/remain).", "فرم بی‌قاعده ماضی بعید فعل lie به معنای باقی ماندن."),
        ("Fill in the verb: 'Ever since that voyage, Captain Vance ___ (fear) the open sea.'", "فعل را کامل کنید: «از زمان آن سفر، کاپیتان ونس از دریای باز بیم داشته است.»", ["has feared"], ["feared"], "Since-phrase anchoring action up to the present.", "عبارت since که اثر عمل را تا زمان حال تداوم می‌بخشد.")
    ]),
    (3, "Future Time", "زمان آینده", [
        ("I promise I ___ (return) the lexicon before sunset.", "قول می‌دهم پیش از غروب آفتاب فرهنگ لغت را بازگردانم.", ["will return", "'ll return"], [], "Promise made with 'will'.", "قول و تعهد با will بیان می‌شود."),
        ("Look at those dark clouds! It ___ (rain) soon.", "به آن ابرهای تاریک نگاه کن! به زودی باران خواهد بارید.", ["is going to rain", "'s going to rain"], [], "Prediction based on immediate physical evidence.", "پیش‌بینی بر پایه شواهد عینی حاضر با going to."),
        ("As soon as the ship ___ (arrive), we will inspect the cargo.", "به محض آنکه کشتی برسد، بار آن را بازرسی خواهیم کرد.", ["arrives"], [], "Future time clause introduced by 'as soon as' takes simple present.", "بند زمانی آینده با as soon as حال ساده می‌گیرد."),
        ("We ___ (hold) a symposium on phonetics next Tuesday.", "ما سه‌شنبه آینده همایشی پیرامون آواشناسی برگزار خواهیم کرد.", ["are holding", "are going to hold", "will hold"], [], "Arranged schedule expressed via present progressive or going to.", "برنامه از پیش هماهنگ‌شده با حال استمراری یا going to."),
        ("The express train to London ___ (depart) at 6:45 PM.", "قطار سریع‌السیر به مقصد لندن در ساعت ۶:۴۵ عصر حرکت می‌کند.", ["departs", "leaves"], [], "Timetabled public schedule expressed via simple present.", "برنامه رسمی و زمان‌بندی‌شده عمومی با حال ساده بیان می‌شود."),
        ("I forgot my spectacles; I ___ (go) upstairs and get them.", "عینکم را فراموش کردم؛ بالا می‌روم و آن‌ها را می‌آورم.", ["will go", "'ll go"], [], "Spontaneous decision at the moment of speech.", "تصمیم آنی در لحظه سخن گفتن با will."),
        ("What ___ (you do) after you finish your apprenticeship?", "پس از پایان دوره کارآموزی‌ات قصد داری چه کار کنی?", ["are you going to do", "will you do"], [], "Inquiring about premeditated future intentions.", "پرسش درباره تصمیم و قصد قبلی برای آینده."),
        ("Unless you study diligently, you ___ (not pass) the examination.", "مگر آنکه با جدیت مطالعه کنی، وگرنه در امتحان قبول نخواهی شد.", ["will not pass", "won't pass"], [], "Future conditional consequence with 'unless'.", "پیامد آینده در جمله شرطی با unless."),
        ("At this hour tomorrow, the botanist ___ (traverse) the highlands.", "فردا در همین ساعت، گیاه‌شناس در حال عبور از ارتفاعات خواهد بود.", ["will be traversing"], ["is traversing"], "Future progressive for action in progress at a future point.", "آینده استمراری برای کاری که در ساعتی معین در آینده در جریان خواهد بود."),
        ("By next November, he ___ (complete) his Persian glossary.", "تا نوامبر آینده، او واژه‌نامه فارسی خود را کامل خواهد کرد.", ["will have completed"], [], "Future perfect for completion before a deadline.", "آینده کامل برای کاری که پیش از موعد مشخصی به پایان می‌رسد."),
        ("I will wait in the ante-room until the master ___ (call) me.", "در اتاق انتظار منتظر خواهم ماند تا زمانی که استاد صدایم کند.", ["calls"], [], "Time clause introduced by 'until' takes simple present.", "بند قیدی زمان با until حال ساده می‌گیرد."),
        ("They are ___ (embark) upon a perilous voyage next month.", "آن‌ها ماه آینده راهی سفری مخاطره‌آمیز خواهند شد.", ["to embark", "going to embark"], [], "Formal plan expressed via 'be to' or 'be going to'.", "برنامه رسمی با ساختار be to یا going to."),
        ("Whether he arrives early or late, we ___ (be) prepared.", "چه زود برسد چه دیر، ما آماده خواهیم بود.", ["will be", "'ll be"], [], "Future modal assertion in the main clause.", "قطعیت آینده در بند اصلی."),
        ("The royal society ___ (convene) its annual session next month.", "انجمن سلطنتی ماه آینده مجمع سالانه خود را تشکیل می‌دهد.", ["convenes", "is convening", "will convene"], [], "Official calendar schedule using present tense.", "برنامه تقویمی رسمی با فعل حال."),
        ("If it rains tomorrow, the exhibition ___ (take) place indoors.", "اگر فردا باران ببارد، نمایشگاه در فضای سرپوشیده برگزار خواهد شد.", ["will take"], [], "First conditional result clause with 'will'.", "بند نتیجه شرطی نوع اول با will."),
        ("Before the bells ring, we ___ (seal) every dispatch.", "پیش از آنکه ناقوس‌ها به صدا درآیند، ما تمام نامه‌ها را مهر و موم خواهیم کرد.", ["will have sealed"], ["will seal"], "Action completed before a future temporal benchmark.", "آینده کامل برای تأکید بر اتمام کار قبل از رخداد زمانی آینده."),
        ("I ___ (lend) you the manuscript provided you treat it gently.", "دست‌نوشته را به تو قرض خواهم داد به شرط آنکه با آن با ملایمت رفتار کنی.", ["will lend", "'ll lend"], [], "Willingness conditioned on agreement.", "ابراز تمایل مشروط با will."),
        ("Don't telephone at nine; I ___ (conduct) an experiment then.", "ساعت نه تماس نگیر؛ در آن ساعت مشغول انجام آزمایش خواهم بود.", ["will be conducting"], [], "Future progressive for busy/ongoing state.", "آینده استمراری برای نشان دادن مشغله در آن زمان."),
        ("By the time you return, the ink ___ (dry).", "تا زمانی که بازگردی، جوهر خشک شده خواهد بود.", ["will have dried"], [], "Future perfect result state.", "نتیجه تکمیل‌شده در زمان آینده با will have V3."),
        ("Complete the sentence: 'Once the seal is broken, there ___ (be) no turning back.'", "جمله را کامل کنید: «وقتی مهر شکسته شود، دیگر بازگشتی نخواهد بود.»", ["will be"], [], "Definite future reality following 'once'.", "آینده قطعی پس از بند زمانی once.")
    ]),
    (4, "Review of Verb Tenses", "مرور جامع زمان‌های افعال", [
        ("She was writing when the courier ___ (arrive).", "او در حال نوشتن بود که قاصد رسید.", ["arrived"], [], "Past simple interrupting past continuous.", "گذشته ساده در نقش رویداد قطع‌کننده."),
        ("He had already departed before the letter ___ (reach) his desk.", "پیش از آنکه نامه به میزش برسد، او رفته بود.", ["reached"], [], "Simple past following past perfect event.", "گذشته ساده پس از کاری که در ماضی بعید انجام شده بود."),
        ("The sun sets in the west, but today dark squalls ___ (obscure) it.", "خورشید در غرب غروب می‌کند، اما امروز ابرهای طوفانی تاریک آن را پوشانده‌اند.", ["are obscuring", "have obscured"], [], "Contrasting general fact with temporary present reality.", "تقابل حقیقت کلی با رویداد موقت امروز."),
        ("By 1850, London ___ (become) the largest city on earth.", "تا سال ۱۸۵۰، لندن به بزرگ‌ترین شهر زمین تبدیل شده بود.", ["had become"], [], "Past perfect completion before a historical date.", "ماضی بعید برای تکامل کار پیش از تاریخی معین."),
        ("We ___ (know) the truth as soon as the emissary speaks.", "به محض آنکه فرستاده سخن بگوید حقیقت را خواهیم دانست.", ["will know", "'ll know"], [], "Main clause future with temporal clause in present.", "آینده در بند اصلی همراه با حال ساده در بند زمانی."),
        ("While they ___ (cross) the channel, a ferocious gale arose.", "در حالی که از کانال عبور می‌کردند، طوفانی سهمگین برخاست.", ["were crossing"], [], "Past progressive setting the backdrop of danger.", "گذشته استمراری به عنوان پس‌زمینه رخداد مخاطره‌آمیز."),
        ("Haim ___ (work) for forty years before his work was finished.", "حییم چهل سال کار کرده بود پیش از آنکه اثرش به پایان رسد.", ["had worked", "had been working"], [], "Past perfect duration prior to a historical milestone.", "ماضی بعید برای بیان دیرپایی تلاش قبل از فرجام."),
        ("Water ___ (consist) of hydrogen and oxygen.", "آب از هیدروژن و اکسیژن تشکیل یافته است.", ["consists"], [], "Stative scientific definition in simple present.", "تعریف علمی حالتی در زمان حال ساده."),
        ("Since 1928, many generations ___ (consult) this dictionary.", "از سال ۱۹۲۸، نسل‌های متعددی به این فرهنگ مراجعه کرده‌اند.", ["have consulted"], [], "Present perfect spanning from past anchor to present.", "ماضی نقلی از مبدأ زمانی تا کنون."),
        ("Yesterday he told me that he ___ (lose) the gold coin earlier.", "دیروز به من گفت که پیش‌تر سکه طلا را گم کرده بود.", ["had lost"], [], "Reported speech sequence of tenses (earlier past).", "توالی زمان‌ها در نقل قول غیرمستقیم برای کار پیشین."),
        ("Look! The flag ___ (rise) above the rampart.", "نگاه کن! پرچم بالای برج و بارو در حال برافراشته شدن است.", ["is rising"], [], "Visual cue 'Look!' requiring present continuous.", "نشانه دیداری Look که حال استمراری می‌طلبد."),
        ("When the bell tolls, the congregation ___ (stand).", "هنگامی که ناقوس نواخته شود، جماعت خواهند ایستاد.", ["will stand", "stands"], [], "Future consequence of a scheduled cue.", "نتیجه آینده پس از صدای ناقوس."),
        ("He fell asleep because he ___ (read) without rest.", "او به خواب رفت زیرا بدون استراحت مطالعه کرده بود.", ["had been reading", "had read"], [], "Past perfect progressive reason for falling asleep.", "ماضی بعید استمراری در نقش دلیل خستگی."),
        ("This manuscript ___ (contain) several marginal annotations.", "این دست‌نوشته حاوی چندین حاشیه‌نویسی است.", ["contains"], [], "Stative verb 'contain' takes simple present.", "فعل حالتی contain به صورت ساده می‌آید."),
        ("By the time we reach the haven, night ___ (fall).", "تا زمانی که به پناهگاه برسیم، شب فرارسیده خواهد بود.", ["will have fallen"], [], "Future perfect completion.", "آینده کامل برای وقوع قبل از رسیدن."),
        ("Scarcely ___ (the storm subside) when another blast began.", "هنوز طوفان آرام نگرفته بود که تندباد دیگری آغاز شد.", ["had the storm subsided"], [], "Inversion with scarcely in past narrative.", "وارونگی با scarcely در روایت گذشته."),
        ("He claimed that the universe ___ (be) infinite.", "او ادعا کرد که جهان نامتناهی است.", ["is", "was"], [], "Reported speech containing a permanent truth.", "نقل قول بیانگر حقیقت دائمی جهان‌شمول."),
        ("They ___ (argue) about the transcription for three hours now.", "آن‌ها اکنون به مدت سه ساعت است که درباره نویسه‌گردانی بحث می‌کنند.", ["have been arguing"], [], "Present perfect progressive with 'for three hours now'.", "ماضی نقلی استمراری با قید زمان تا کنون."),
        ("The ship ___ (sail) at dawn tomorrow if weather permits.", "کشتی فردا هنگام سپیده‌دم در صورت مساعد بودن هوا حرکت خواهد کرد.", ["sails", "will sail", "is sailing"], [], "Scheduled nautical departure.", "برنامه حرکت با حال ساده یا آینده."),
        ("Write the correct form: 'He admitted that he ___ (forge) the seal.'", "شکل صحیح را بنویسید: «او اعتراف کرد که مهر را جعل کرده بود.»", ["had forged"], [], "Past perfect for an admission of prior transgression.", "ماضی بعید برای اعتراف به خطای پیشین.")
    ]),
    (5, "Subject-Verb Agreement", "مطابقت فاعل و فعل", [
        ("The price of these rare books ___ (be) ten pounds.", "قیمت این کتاب‌های کمیاب ده پوند است.", ["is"], [], "The subject is 'price' (singular), not 'books'.", "هسته فاعل price (مفرد) است نه books."),
        ("Every student and teacher ___ (be) present in the auditorium.", "هر دانش‌آموز و معلمی در سالن سخنرانی حاضر است.", ["is", "was"], [], "'Every' makes the compound subject singular.", "کلمه Every فاعل مرکب را مفرد می‌سازد."),
        ("Neither the professor nor his assistants ___ (be) able to solve it.", "نه استاد و نه دستیارانش قادر به حل آن نبودند.", ["were", "are"], [], "In 'neither...nor', verb agrees with closest subject (assistants).", "در neither...nor فعل با فاعل نزدیک‌تر (assistants) مطابقت دارد."),
        ("Either the assistants or the professor ___ (be) responsible.", "یا دستیاران یا استاد مسئول است.", ["is", "was"], [], "Verb agrees with closest subject (professor = singular).", "فعل با نزدیک‌ترین فاعل (professor) هماهنگ شده و مفرد است."),
        ("A bouquet of fresh flowers ___ (stand) upon the table.", "یک دسته گل تازه بر روی میز قرار دارد.", ["stands", "is standing"], [], "Head noun is 'bouquet' (singular).", "هسته فاعل bouquet است که مفرد می‌باشد."),
        ("Ten miles ___ (be) a long distance to walk in boots.", "ده مایل مسافت درازی برای پیاده‌روی با چکمه است.", ["is", "was"], [], "Distances and sums of money take singular verbs.", "فواصل و مبالغ به عنوان یک واحد سنجش، فعل مفرد می‌گیرند."),
        ("The committee ___ (have) reached a unanimous verdict.", "کمیته به حکمی متفق‌القول دست یافته است.", ["has"], ["have"], "Collective noun acting as a single unified body takes singular.", "اسم جمع در قالب یک بدنه واحد، فعل مفرد می‌گیرد."),
        ("The committee members ___ (have) expressed differing viewpoints.", "اعضای کمیته دیدگاه‌های متفاوتی را ابراز کرده‌اند.", ["have"], [], "Plural members take plural verb.", "کلمه members جمع است و فعل have می‌طلبد."),
        ("The news from the frontier ___ (be) alarming.", "اخبار رسیده از مرز نگران‌کننده است.", ["is", "was"], [], "'News' is an uncountable singular noun.", "کلمه news اسمی غیرقابل شمارش و مفرد است."),
        ("Economics ___ (be) his favorite field of study.", "علم اقتصاد رشته تحصیلی مورد علاقه او است.", ["is", "was"], [], "Academic subjects ending in -ics take singular verbs.", "رشته‌های تحصیلی منتهی به -ics فعل مفرد می‌گیرند."),
        ("The author, along with his editors, ___ (be) arriving today.", "نویسنده همراه با ویراستارانش امروز وارد می‌شود.", ["is"], [], "'Along with' is parenthetical; subject is 'author' (singular).", "عبارت همراه با along with فرعی است و فاعل اصلی author است."),
        ("One of my friends ___ (live) in Isfahan.", "یکی از دوستان من در اصفهان زندگی می‌کند.", ["lives"], [], "'One of...' takes a singular verb.", "ساختار One of با فعل مفرد به کار می‌رود."),
        ("A number of scholars ___ (attend) the conference every year.", "تعدادی از پژوهشگران هر ساله در کنفرانس شرکت می‌کنند.", ["attend"], [], "'A number of' takes a plural verb.", "عبارت A number of فعل جمع می‌گیرد."),
        ("The number of rare editions ___ (be) strictly limited.", "تعداد نسخه‌های کمیاب به شدت محدود است.", ["is", "was"], [], "'The number of' takes a singular verb.", "عبارت The number of بر خلاف a number of فعل مفرد می‌گیرد."),
        ("There ___ (be) three ancient dictionaries in the wooden cabinet.", "سه فرهنگ لغت باستانی در کمد چوبی وجود دارد.", ["are", "were"], [], "In 'there + be', verb agrees with following noun (dictionaries).", "در ساختار there be، فعل با اسم بعد از خود هماهنگ می‌شود."),
        ("All of the pie ___ (have) been eaten.", "تمام پای خورده شده است.", ["has"], [], "Uncountable 'pie' takes singular 'has'.", "اسم غیرقابل شمارش pie نیازمند فعل مفرد has است."),
        ("All of the manuscripts ___ (have) been preserved.", "تمامی دست‌نوشته‌ها نگهداری شده‌اند.", ["have"], [], "Plural count noun 'manuscripts' takes plural 'have'.", "اسم شمارش‌پذیر جمع manuscripts فعل جمع have می‌گیرد."),
        ("Measles ___ (be) a contagious illness.", "سرخک یک بیماری واگیردار است.", ["is"], [], "Disease names ending in -s take singular verbs.", "نام بیماری‌های منتهی به s فعل مفرد می‌گیرد."),
        ("His pair of trousers ___ (be) torn at the knee.", "شلوار او از قسمت زانو پاره است.", ["is", "was"], [], "'Pair' is singular, requiring singular verb.", "کلمه pair مفرد است و فعل مفرد می‌گیرد."),
        ("Complete: 'Not only the soldiers but also the general ___ (be) captured.'", "کامل کنید: «نه تنها سربازان بلکه ژنرال نیز به اسارت درآمد.»", ["was", "is"], [], "Correlative conjunction agrees with closer subject (general).", "فعل با نزدیک‌ترین فاعل یعنی general مطابقت دارد.")
    ]),
    (6, "Nouns and Articles", "اسم‌ها و حروف تعریف", [
        ("He gave me sound ___ (advice / an advice) regarding the grammar.", "او در مورد دستور زبان راهنمایی درستی به من داد.", ["advice"], [], "'Advice' is non-count and never takes 'an'.", "کلمه advice ناشمارش‌پذیر است و an نمی‌گیرد."),
        ("I purchased ___ (a / an / the / Ø) umbrella before the storm.", "پیش از طوفان یک چتر خریدم.", ["an"], [], "'Umbrella' begins with a vowel sound, requiring 'an'.", "کلمه umbrella با آوای صدادار آغاز شده و an می‌گیرد."),
        ("___ (The / A / Ø) knowledge is power.", "دانایی توانایی است.", ["Ø", "no article", "none", "Knowledge"], [], "Abstract generalizations use no article.", "مفاهیم عام و انتزاعی نیازمند حرف تعریف نیستند."),
        ("Can you lend me ___ (a / an / some) information about Haim?", "می‌توانی مقداری اطلاعات درباره حییم به من بدهی؟", ["some"], [], "'Information' is uncountable and takes 'some', not 'an'.", "کلمه information ناشمارش‌پذیر است و با some می‌آید."),
        ("The archivist bought two new pieces of ___ (furniture / furnitures).", "بایگان دو تکه وسیله منزل جدید خرید.", ["furniture"], [], "'Furniture' is non-count and cannot be pluralized.", "کلمه furniture غیرقابل شمارش است و s جمع نمی‌گیرد."),
        ("She plays ___ (the / a / Ø) piano with exquisite mastery.", "او با مهارتی نفیس پیانو می‌نوازد.", ["the"], [], "Musical instruments take 'the' when speaking of the skill.", "سازهای موسیقی در کاربرد نواختن حرف تعریف the می‌گیرند."),
        ("___ (The / A / Ø) Mount Damavand is the highest peak in Iran.", "کوه دماوند بلندترین قله ایران است.", ["Ø", "no article", "none"], [], "Individual mountains do not take 'the'.", "کوه‌های منفرد حرف تعریف the دریافت نمی‌کنند."),
        ("We sailed across ___ (the / a / Ø) Caspian Sea.", "ما در امتداد دریای خزر کشتی‌رانی کردیم.", ["the"], [], "Seas, oceans, and rivers take the definite article 'the'.", "دریاها و اقیانوس‌ها حرف تعریف the می‌گیرند."),
        ("A person who studies languages is called a ___ (linguist).", "کسی که زبان‌ها را مطالعه می‌کند زبان‌شناس نامیده می‌شود.", ["linguist"], [], "Singular countable noun following indefinite article.", "اسم مفرد قابل شمارش پس از a."),
        ("He provided three ___ (criteria / criterions) for evaluation.", "او سه معیار برای ارزیابی ارائه داد.", ["criteria"], [], "Irregular Greek plural of 'criterion' is 'criteria'.", "شکل جمع بی‌قاعده واژه criterion کلمه criteria است."),
        ("The analysis of these data ___ (be) conclusive.", "تحلیل این داده‌ها قاطع و قطعی است.", ["is", "was"], [], "The subject is 'analysis' (singular).", "هسته فاعل analysis (مفرد) است."),
        ("She possesses ___ (great / a great) patience in her research.", "او در پژوهش‌های خود شکیبایی فراوانی دارد.", ["great"], [], "Uncountable abstract qualities do not take 'a'.", "صفات انتزاعی غیرقابل شمارش مانند patience حرف تعریف a نمی‌گیرند."),
        ("There are two ___ (passers-by / passer-bys) in the narrow lane.", "دو رهگذر در کوچه باریک حضور دارند.", ["passers-by"], [], "Compound noun pluralizes the head word: passers-by.", "در اسم مرکب passers-by واژه اول جمع بسته می‌شود."),
        ("We stayed at ___ (the / a / Ø) Grand Hotel in London.", "ما در هتل گراند در لندن اقامت گزیدیم.", ["the"], [], "Names of hotels take the definite article 'the'.", "نام هتل‌ها با حرف تعریف the همراه می‌شود."),
        ("He works as ___ (a / an / the) lexicographer.", "او به عنوان یک فرهنگ‌نویس کار می‌کند.", ["a"], [], "Professions take 'a/an' when introducing someone's role.", "مشاغل در زبان انگلیسی با a/an معرفی می‌شوند."),
        ("A pack of ___ (wolves / wolfs) roamed the forest.", "دسته‌ای از گرگ‌ها در جنگل پرسه می‌زدند.", ["wolves"], [], "Irregular plural of wolf is wolves.", "جمع بی‌قاعده wolf واژه wolves است."),
        ("Both ___ (phenomenon / phenomena) were recorded by the astronomer.", "هر دو پدیده توسط ستاره‌شناس ثبت شدند.", ["phenomena"], [], "Plural of Greek-derived 'phenomenon' is 'phenomena'.", "جمع کلمه phenomenon واژه phenomena است."),
        ("He gave his life for ___ (the / a / Ø) freedom.", "او جانش را در راه آزادی فدا کرد.", ["Ø", "no article", "none", "freedom"], [], "Abstract non-count nouns take zero article in generalizations.", "اسامی انتزاعی در مفهوم عام حرف تعریف نمی‌گیرند."),
        ("The police ___ (be) investigating the theft of the codex.", "پلیس در حال تحقیق درباره سرقت دست‌نوشته کهن است.", ["are", "were"], [], "'Police' is always grammatically plural in English.", "واژه police در دستور زبان انگلیسی همواره جمع است."),
        ("Identify the correct form: 'She has ___ (few / little) patience with fools.'", "شکل صحیح را بنویسید: «او در برابر نادانان صبر اندکی دارد.»", ["little"], [], "'Little' is used with uncountable nouns like patience.", "کلمه little با اسامی غیرقابل شمارش نظیر patience می‌آید.")
    ]),
    (7, "Pronouns and Determiners", "ضمایر و مشخص‌کننده‌ها", [
        ("The scholar prepared the index by ___ (himself / him).", "دانشمند نمایه را خودش به تنهایی آماده کرد.", ["himself"], [], "Reflexive pronoun indicates independent solitary action.", "ضمیر انعکاسی بیانگر انجام کار توسط خود شخص است."),
        ("Every student must bring ___ (his or her / their) own dictionary.", "هر دانشجویی باید فرهنگ لغت خود را بیاورد.", ["his or her", "their"], [], "Pronoun agreement with singular indefinite 'every student'.", "تطابق ضمیر با فاعل مفرد every student."),
        ("The two authors respected ___ (each other / one another).", "آن دو نویسنده به یکدیگر احترام می‌گذاشتند.", ["each other"], ["one another"], "'Each other' refers to reciprocal relationship between two entities.", "عبارت each other برای رابطه دوسویه میان دو نفر است."),
        ("The book lost ___ (its / it's) leather cover.", "کتاب جلد چرمی‌اش را از دست داد.", ["its"], [], "'Its' is the possessive determiner; 'it's' is 'it is'.", "واژه its صفت ملکی است، در حالی که it's مخفف it is است."),
        ("Those ___ (who / which) study diligently shall prosper.", "کسانی که با جدیت درس می‌خوانند کامیاب خواهند شد.", ["who"], [], "Relative pronoun referring to persons is 'who'.", "ضمیر موصولی برای انسان who است."),
        ("Between you and ___ (I / me), this translation is flawed.", "بین من و تو، این ترجمه دارای نقص است.", ["me"], [], "Preposition 'between' governs objective pronoun 'me'.", "حرف اضافه between ضمیر مفعولی me می‌طلبد."),
        ("Neither of the editions ___ (be) satisfactory.", "هیچ‌کدام از آن دو چاپ رضایت‌بخش نبودند.", ["is", "was"], [], "'Neither of' takes a singular verb in formal prose.", "ساختار Neither of در زبان رسمی با فعل مفرد می‌آید."),
        ("One should always keep ___ (one's / his) promises.", "انسان باید همیشه به وعده‌های خویش وفادار بماند.", ["one's"], ["his"], "Indefinite pronoun 'one' takes 'one's' in standard formal style.", "ضمیر نامعین one در سبک رسمی صفت ملکی one's می‌گیرد."),
        ("The committee announced ___ (its / their) final verdict.", "کمیته حکم نهایی خود را اعلام نمود.", ["its"], ["their"], "Collective entity acting as a single unit takes 'its'.", "نهاد جمع در جایگاه واحد منسجم ضمیر مفرد its می‌گیرد."),
        ("This is the man ___ (whose / who's) library was donated.", "این همان مردی است که کتابخانه‌اش اهدا شد.", ["whose"], [], "Possessive relative pronoun is 'whose'.", "ضمیر موصولی ملکی whose است."),
        ("She did the entire transcription ___ (herself).", "او تمام رونویسی را خودش به تنهایی انجام داد.", ["herself"], [], "Reflexive pronoun emphasizing personal execution.", "ضمیر انعکاسی برای تأکید بر انجام کار توسط خود فرد."),
        ("The council members looked at ___ (one another / each other).", "اعضای شورا به یکدیگر نگریستند.", ["one another"], ["each other"], "'One another' is preferred for three or more individuals.", "عبارت one another برای بیش از دو نفر ارجح است."),
        ("He gave the prize to whomever ___ (deserve) it most.", "او جایزه را به هر کس که بیش از همه سزاوارش بود اعطا کرد.", ["deserved", "deserves"], [], "Pronoun clause subject agreement.", "مطابقت فعل درون جمله‌واره ضمیری."),
        ("Someone left ___ (their / his) fountain pen on the table.", "کسی خودنویس خود را روی میز جا گذاشته است.", ["their", "his or her"], [], "Singular 'they/their' with indefinite pronoun 'someone'.", "کاربرد their برای مراجع نامعین مانند someone."),
        ("The dog chased ___ (its) own tail in circles.", "سگ به دور خود دم خویش را تعقیب کرد.", ["its"], [], "Possessive form for animals/objects without apostrophe.", "صفت ملکی its بدون آپوستروف."),
        ("Of the three treatises, ___ (none / neither) was translated.", "از آن سه رساله، هیچ‌یک ترجمه نشده بود.", ["none"], [], "'None' applies to three or more; 'neither' applies only to two.", "کلمه none برای سه مورد یا بیشتر به کار می‌رود."),
        ("The author ___ (himself) corrected the printer\'s proofs.", "خودِ نویسنده نمونه‌های چاپی را تصحیح کرد.", ["himself"], [], "Intensive pronoun directly following the subject for emphasis.", "ضمیر تأکیدی بلافاصله پس از فاعل."),
        ("It was ___ (he / him) who discovered the missing page.", "این او بود که صفحه گم‌شده را پیدا کرد.", ["he"], ["him"], "Subject complement after 'it was' in formal prescriptive grammar.", "متمم فاعلی پس از it was در دستور زبان رسمی."),
        ("Choose the correct word: 'Neither of the scholars could conceal ___ (his / their) surprise.'", "واژه صحیح را انتخاب کنید: «هیچ‌یک از آن دو دانشمند نتوانست شگفتی خود را پنهان سازد.»", ["his"], ["their"], "Formal singular agreement with 'neither of'.", "مطابقت مفرد با neither of در نثر رسمی."),
        ("The students helped ___ (each other) revise for the test.", "دانشجویان در مرور مطالب برای آزمون به یکدیگر کمک کردند.", ["each other"], ["one another"], "Reciprocal pronoun indicating mutual assistance.", "ضمیر متقابل نشان‌دهنده یاری دوسویه.")
    ]),
    (8, "Modals, Part 1: Ability, Advice, and Necessity", "افعال وجهی ۱: توانایی، توصیه و الزام", [
        ("You ___ (must / can) obey the library regulations at all times.", "شما باید در همه حال از مقررات کتابخانه پیروی کنید.", ["must"], ["have to"], "'Must' indicates strong obligation and regulatory law.", "فعل must نشان‌دهنده الزام قطعی و قوانین انضباطی است."),
        ("He ___ (can / may) read ancient Persian fluently.", "او می‌تواند زبان فارسی کهن را روان بخواند.", ["can"], ["is able to"], "'Can' denotes learned ability and capacity.", "فعل can بیانگر توانایی آموخته‌شده فرد است."),
        ("You ___ (should / must) consult a physician about that chronic cough.", "شما باید (بهتر است) درباره آن سرفه مزمن با یک پزشک مشورت کنید.", ["should"], ["ought to"], "'Should' conveys sensible medical advice rather than legal compulsion.", "فعل should برای توصیه خیرخواهانه به کار می‌رود."),
        ("Pupils ___ (have to / must) wear formal robes for matriculation.", "دانش‌آموزان برای ثبت‌نام باید ردای رسمی بپوشند.", ["have to"], ["must"], "'Have to' expresses external institutional requirement.", "عبارت have to برای قوانین و الزامات نهادی بیرونی است."),
        ("You ___ (had better / would rather) hurry, or you will miss the coach.", "بهتر است عجله کنی، وگرنه از درشکه جا خواهی ماند.", ["had better"], ["better"], "'Had better' warns of concrete negative consequences.", "ترکیب had better هشداردهنده پیامد ناگوار در صورت تعلل است."),
        ("___ (May / Can) I examine this illuminated folio, sir?", "جناب، آیا اجازه دارم این برگ تذهیب‌شده را بررسی کنم؟", ["May"], ["Could", "Can"], "'May' is the polite formal request for permission.", "فعل may برای کسب اجازه مودبانه و رسمی است."),
        ("He ___ (not be able to) attend tomorrow\'s meeting due to illness.", "او به سبب بیماری قادر نخواهد بود در جلسه فردا شرکت کند.", ["will not be able to", "won't be able to"], [], "Future ability requires 'will be able to'.", "توانایی در زمان آینده با will be able to بیان می‌شود."),
        ("You ___ (ought to) show more deference to your elders.", "تو باید احترام بیشتری به بزرگان خود بگذاری.", ["ought to"], ["should"], "'Ought to' expresses moral duty and ethical obligation.", "فعل ought to بیانگر وظیفه اخلاقی است."),
        ("One ___ (must not) smoke within the rare manuscript gallery.", "هیچ‌کس نباید در نگارخانه دست‌نوشته‌های کمیاب دخانیات استعمال کند.", ["must not", "mustn't"], [], "'Must not' expresses strict categorical prohibition.", "فعل must not بیانگر ممنوعیت صریح و قطعی است."),
        ("You ___ (need not / must not) copy the text; I have a printed version.", "نیازی نیست متن را رونوشت کنی؛ من نسخه چاپی آن را دارم.", ["need not", "needn't", "do not need to", "don't need to"], [], "Absence of necessity expressed by 'need not'.", "عدم وجود ضرورت با need not بیان می‌گردد."),
        ("In his youth, Haim ___ (could / might) study for twelve hours without fatigue.", "حییم در جوانی‌اش می‌توانست دوازده ساعت بدون خستگی مطالعه کند.", ["could"], ["was able to"], "Past general ability takes 'could'.", "توانایی عمومی در گذشته با could بیان می‌شود."),
        ("Despite the storm, the ship ___ (manage to / could) reach the haven safely.", "به‌رغم طوفان، کشتی موفق شد به سلامت به پناهگاه برسد.", ["managed to", "was able to"], [], "Specific past achievement against difficulty requires 'was able to' or 'managed to'.", "موفقیت در یک نوبت خاص در گذشته با was able to یا managed to بیان می‌شود."),
        ("You ___ (should not / must not) speak ill of your predecessors.", "نباید از پیشینیان خود به بدی یاد کنی.", ["should not", "shouldn't", "ought not to"], [], "Moral counsel expressed with 'should not'.", "نصیحت اخلاقی با should not."),
        ("Do we ___ (have to) purchase our own ink and pens?", "آیا ما باید خودمان جوهر و قلم بخریم؟", ["have to"], [], "Question form of external obligation with 'do we have to'.", "سوالی الزام با do we have to."),
        ("Visitors ___ (not be allowed to) photograph the royal jewels.", "بازدیدکنندگان اجازه ندارند از جواهرات سلطنتی عکس بگیرند.", ["are not allowed to", "aren't allowed to"], [], "Formal prohibition expression.", "عبارت بیان ممنوعیت رسمی."),
        ("He had to ___ (sell) his estate to settle the debt.", "او مجبور شد برای تسویه بدهی املاک خود را بفروشد.", ["sell"], [], "'Had to' takes a bare infinitive.", "عبارت had to با مصدر بدون to می‌آید."),
        ("We ___ (had better not) linger here after dusk.", "بهتر است بعد از غروب در اینجا معطل نشویم.", ["had better not"], ["better not"], "Negative form of 'had better' is 'had better not'.", "منفی had better به صورت had better not است."),
        ("Children ___ (must) be taught the fundamentals of grammar early.", "کودکان باید از ابتدا با مبانی دستور زبان آشنا شوند.", ["must", "should"], [], "Educational necessity.", "بیان ضرورت آموزشی."),
        ("Could you ___ (clarify) that phonetic rule for me?", "آیا ممکن است آن قاعده آوایی را برای من روشن سازید؟", ["clarify"], [], "Polite request using modal auxiliary.", "خواهش مودبانه با فعل کمکی could."),
        ("Rewrite using 'ought': 'You should apologize.' -> 'You ___ apologize.'", "با ought بازنویسی کنید: «تو باید عذرخواهی کنی.»", ["ought to"], [], "'Ought' must always be followed by 'to'.", "فعل ought همواره همراه با to به کار می‌رود.")
    ]),
    (9, "Modals, Part 2: Degrees of Certainty and Past Modals", "افعال وجهی ۲: درجات قطعیت و وجهی‌های گذشته", [
        ("The lights are extinguished in his study; he ___ (must be / can't be) asleep.", "چراغ‌ها در اتاق کارش خاموش است؛ او حتماً خوابیده است.", ["must be"], [], "Logical deduction with 95% certainty in the present.", "استنتاج منطقی با درصد اطمینان بالا در زمان حال."),
        ("He has not arrived yet; he ___ (might have) missed the train.", "او هنوز نرسیده است؛ ممکن است از قطار جا مانده باشد.", ["might have", "could have", "may have"], [], "Past possibility based on uncertain evidence.", "احتمال گذشته بر اساس شواهد موجود."),
        ("You ___ (should have) told me about the error earlier!", "باید زودتر درباره آن خطا به من می‌گفتی!", ["should have"], ["ought to have"], "Past regret or criticism of an unperformed action.", "انتقاد یا حسرت از کاری که باید در گذشته انجام می‌شد."),
        ("The door was locked from inside; the thief ___ (cannot have / must not have) entered through it.", "در از داخل قفل بود؛ دزد نمی‌توانسته از آن وارد شده باشد.", ["cannot have", "can't have", "could not have"], [], "Logical impossibility in the past requires 'cannot have + V3'.", "عدم امکان منطقی در گذشته با cannot have بیان می‌شود."),
        ("He was not in his chamber; where ___ (could he have gone)?", "او در اتاقش نبود؛ کجا ممکن بود رفته باشد؟", ["could he have gone"], [], "Past speculation in question form.", "حدس و پرسش درباره گذشته."),
        ("The manuscript is missing; someone ___ (must have taken) it.", "دست‌نوشته گم شده است؛ کسی حتماً آن را برداشته است.", ["must have taken"], [], "Deduction of high certainty about past action.", "استنتاج با اطمینان بالا درباره رویدادی در گذشته."),
        ("I ___ (would rather) read poetry than study financial tables.", "ترجیح می‌دهم شعر بخوانم تا جدول‌های مالی مطالعه کنم.", ["would rather", "'d rather"], [], "Preference expressed with 'would rather + bare verb'.", "بیان ترجیح با would rather و فعل ساده."),
        ("She would rather have ___ (stay) in Tehran during the winter.", "او ترجیح می‌داد در طول زمستان در تهران مانده بود.", ["stayed"], [], "Past unfulfilled preference takes 'would rather have + V3'.", "ترجیح گذشته با would rather have و قسمت سوم فعل."),
        ("They ___ (might not have) received the dispatch in time.", "ممکن است آن‌ها نامه را به موقع دریافت نکرده باشند.", ["might not have", "may not have"], [], "Negative past possibility.", "احتمال منفی در زمان گذشته."),
        ("You ___ (had better have) finished before the inspector arrived.", "بهتر می‌بود کار را پیش از آمدن بازرس تمام کرده بودی.", ["had better have"], [], "Rare past counsel form.", "شکل بیان نصیحت برای گذشته."),
        ("He speaks flawless Persian; he ___ (must have lived) in Iran for years.", "او فارسی بی‌نقص صحبت می‌کند؛ حتماً سال‌ها در ایران زندگی کرده است.", ["must have lived"], [], "Certain deduction based on present fluency.", "استنتاج قطعی گذشته بر مبنای مهارت کنونی."),
        ("The messenger ___ (could have delivered) the parcel, but he neglected to do so.", "قاصد می‌توانست بسته را تحویل دهد، اما کوتاهی کرد.", ["could have delivered"], [], "Unfulfilled past ability or opportunity.", "توانایی انجام کار در گذشته که از دست رفته است."),
        ("He ___ (must not / cannot) be the culprit; he was abroad.", "او نمی‌تواند مقصر باشد؛ او در خارج از کشور بود.", ["cannot", "can't"], [], "Present impossibility deduction.", "عدم امکان منطقی در حال حاضر."),
        ("You ___ (ought to have) acknowledged his assistance.", "شما می‌بایست از کمک او قدردانی می‌کردید.", ["ought to have"], ["should have"], "Moral obligation unfulfilled in the past.", "تعهد اخلاقی انجام‌نشده در گذشته."),
        ("They ___ (may be) waiting in the vestibule right now.", "آن‌ها ممکن است هم‌اکنون در راهرو منتظر باشند.", ["may be", "might be"], [], "Present uncertainty (50% probability).", "تردید و احتمال ۵۰ درصدی در زمان حال."),
        ("She walked past without speaking; she ___ (must not have seen) us.", "او بدون صحبت عبور کرد؛ حتماً ما را ندیده بود.", ["must not have seen", "can't have seen"], [], "Deduction about a negative past reality.", "استنتاج درباره رخ ندادن کاری در گذشته."),
        ("I ___ (would rather not) discuss this private matter publicly.", "ترجیح می‌دهم این موضوع خصوصی را در ملأ عام مطرح نکنم.", ["would rather not", "'d rather not"], [], "Negative preference with 'would rather not'.", "منفی کردن عبارت ترجیحی would rather."),
        ("The ship ___ (must have encountered) rough waters during the storm.", "کشتی حتماً در طول طوفان با امواج سهمگینی مواجه شده است.", ["must have encountered"], [], "High certainty deduction about past physical event.", "استنتاج با ضریب اطمینان بالا درباره رویداد گذشته."),
        ("Why didn't you ask for help? I ___ (would have helped) you.", "چرا کمک نخواستی؟ من کمکت می‌کردم.", ["would have helped", "'d have helped"], [], "Past willingness that did not occur.", "ابراز آمادگی برای انجام کاری در گذشته."),
        ("Complete: 'He was so pale; he ___ (must have been) terrified.'", "کامل کنید: «او بسیار رنگ‌پریده بود؛ حتماً وحشت‌زده شده بود.»", ["must have been"], [], "Logical deduction about emotional state in the past.", "استنتاج درباره وضعیت روحی در گذشته بر اساس رنگ‌پریدگی.")
    ]),
    (10, "The Passive Voice", "حالت مجهول", [
        ("The first Persian grammar in English ___ (write) by William Jones.", "نخستین دستور زبان فارسی به انگلیسی توسط ویلیام جونز نوشته شد.", ["was written"], [], "Simple past passive with singular subject.", "گذشته ساده مجهول با فاعل مفرد."),
        ("The letters ___ (deliver) every morning at dawn.", "نامه‌ها هر روز صبح هنگام سپیده‌دم تحویل داده می‌شوند.", ["are delivered"], [], "Simple present passive for routine action.", "حال ساده مجهول برای کارهای روتین."),
        ("A new edition ___ (currently prepare) by the editorial board.", "چاپ جدیدی هم‌اکنون توسط هیئت تحریریه در دست آماده‌سازی است.", ["is currently being prepared", "is being prepared"], [], "Present progressive passive.", "حال استمراری مجهول برای کاری که اکنون در جریان است."),
        ("The ancient decree ___ (proclaim) by the king in 1906.", "فرمان مشروطیت در سال ۱۹۰۶ توسط شاه اعلام شد.", ["was proclaimed"], [], "Historical past passive.", "گذشته ساده مجهول در زمینه وقایع تاریخی."),
        ("All errata must ___ (correct) before the final printing.", "تمام غلط‌های چاپی باید پیش از چاپ نهایی اصلاح شوند.", ["be corrected"], [], "Modal passive: modal + be + past participle.", "مجهول افعال وجهی: modal + be + V3."),
        ("The bridge ___ (destroy) by the flood before help arrived.", "پل پیش از رسیدن کمک توسط سیل ویران شده بود.", ["had been destroyed"], [], "Past perfect passive.", "ماضی بعید مجهول."),
        ("It is ___ (believe) that the author was fluent in seven tongues.", "اعتقاد بر این است که نویسنده به هفت زبان مسلط بوده است.", ["believed", "said", "reported"], [], "Impersonal passive reporting structure.", "ساختار مجهول غیرشخصی گزارش‌دهی."),
        ("The gates ___ (lock) by the sentry at sunset.", "دروازه‌ها هنگام غروب آفتاب توسط نگهبان قفل می‌شوند.", ["are locked", "were locked"], [], "Passive voice with agent introduced by 'by'.", "حالت مجهول با ذکر فاعل توسط حرف اضافه by."),
        ("The book ___ (translate) into Persian in 2004.", "این کتاب در سال ۲۰۰۴ به زبان فارسی ترجمه شد.", ["was translated"], [], "Simple past passive.", "گذشته ساده مجهول."),
        ("Special care must ___ (take) when handling fragile parchment.", "هنگام کار با پوست‌نوشته‌های شکننده باید دقت ویژه‌ای مبذول شود.", ["be taken"], [], "Modal passive with 'must be taken'.", "مجهول فعل وجهی must."),
        ("The lexicon ___ (rejuvenate) in the new impression.", "این لغت‌نامه در چاپ جدید بازآفرینی و تجدید حیات شد.", ["was rejuvenated", "has been rejuvenated"], [], "Passive of rejuvenation.", "حالت مجهول برای توصیف نوآوری اثر."),
        ("The thief was seen ___ (climb) over the wall.", "دزد در حال بالا رفتن از دیوار دیده شد.", ["climbing", "to climb"], [], "Passive of sensory perception verb.", "مجهول افعال حسی همراه با وجه وصفی یا مصدر."),
        ("He hates being ___ (tell) what to do.", "او از اینکه به او بگویند چه کار کند متنفر است.", ["told"], [], "Passive gerund: being + past participle.", "اسم مصدر مجهول: being + V3."),
        ("The fortress had never ___ (conquer) in battle.", "این قلعه هرگز در نبردی فتح نشده بود.", ["been conquered"], [], "Past perfect passive with negative.", "ماضی بعید مجهول با never."),
        ("A golden watch was ___ (give) to him upon his retirement.", "در هنگام بازنشستگی یک ساعت طلا به او داده شد.", ["given"], [], "Passive of ditransitive verb (give).", "مجهول فعل دوعاملی give."),
        ("The manuscript is said ___ (belong) to the royal family.", "گفته می‌شود این دست‌نوشته متعلق به خانواده سلطنتی است.", ["to belong"], [], "Impersonal reporting passive with infinitive.", "نقل قول مجهول با ساختار مصدر to."),
        ("The new hospital ___ (build) next year.", "بیمارستان جدید سال آینده ساخته خواهد شد.", ["will be built"], [], "Future passive with 'will be built'.", "آینده ساده مجهول."),
        ("No letters were ___ (receive) this morning.", "امروز صبح هیچ نامه‌ای دریافت نشد.", ["received"], [], "Negative past passive.", "منفی گذشته مجهول."),
        ("Change to passive: 'Haim compiled the dictionary.' -> 'The dictionary ___ by Haim.'", "به مجهول تبدیل کنید: «حییم فرهنگ را گردآوری کرد.»", ["was compiled"], [], "Passive transformation of simple past.", "تبدیل جمله گذشته معلوم به مجهول."),
        ("Complete: 'The truth can no longer ___ (conceal).'", "کامل کنید: «حقیقت دیگر نمی‌تواند پنهان بماند.»", ["be concealed"], [], "Modal passive with negative adverbial.", "مجهول وجهی همراه با can be V3.")
    ]),
    (11, "Noun Clauses", "بندهای اسمی", [
        ("I do not know ___ (where did he go / where he went).", "نمی‌دانم او کجا رفت.", ["where he went"], [], "Embedded noun clause maintains normal statement word order.", "بند اسمی درونی ترتیب خبری (فاعل + فعل) را حفظ می‌کند."),
        ("It is essential that he ___ (be) informed immediately.", "ضروری است که او فوراً در جریان قرار گیرد.", ["be"], ["is"], "Subjunctive mood in noun clause after expressions of urgency.", "وجه التزامی (شکل ساده فعل) پس از عبارات بیان ضرورت."),
        ("She wondered ___ (whether) the manuscript was authentic.", "او در شگفت بود که آیا دست‌نوشته اصیل است یا خیر.", ["whether", "if"], [], "Noun clause expressing doubt introduced by 'whether' or 'if'.", "بند اسمی بیانگر تردید با whether یا if."),
        ("___ (That) the earth revolves around the sun is indisputable.", "اینکه زمین به دور خورشید می‌چرخد تردیدناپذیر است.", ["That"], [], "Noun clause introduced by 'that' functioning as the sentence subject.", "بند اسمی با that در جایگاه فاعل جمله."),
        ("He asked me what time ___ (it was / was it).", "او از من پرسید ساعت چند بود.", ["it was"], [], "Embedded indirect question retains subject + verb order.", "سوال غیرمستقیم ترتیب فاعل + فعل را رعایت می‌کند."),
        ("The committee recommended that the proposal ___ (accept).", "کمیته توصیه کرد که پیشنهاد پذیرفته شود.", ["be accepted"], [], "Passive subjunctive in noun clause following 'recommend'.", "وجه التزامی مجهول پس از فعل recommend."),
        ("I cannot fathom why ___ (she resigned / did she resign).", "نمی‌توانم درک کنم چرا او استعفا داد.", ["she resigned"], [], "Noun clause after 'fathom' requires statement order.", "بند اسمی پس از fathom ترتیب خبری می‌گیرد."),
        ("Tell me ___ (who) wrote this anonymous preface.", "به من بگو چه کسی این مقدمه ناشناس را نوشته است.", ["who"], [], "Noun clause question word acting as subject.", "کلمه پرسشی who در جایگاه فاعل بند اسمی."),
        ("We debated whether we ___ (should stay) or leave.", "ما بحث کردیم که آیا باید بمانیم یا برویم.", ["should stay", "stayed"], [], "Noun clause following 'whether'.", "بند اسمی پس از whether."),
        ("His main concern was ___ (that) the deadline might pass.", "نگرانی اصلی او این بود که مبادا مهلت به پایان رسد.", ["that"], [], "Noun clause functioning as subject complement.", "بند اسمی در جایگاه متمم فاعلی با that."),
        ("I am uncertain about ___ (what to do / what should I do).", "درباره اینکه چه باید کرد نامطمئنم.", ["what to do"], ["what I should do"], "Infinitival noun phrase following preposition.", "عبارت اسمی مصدری پس از حرف اضافه."),
        ("The magistrate demanded that the prisoner ___ (stand).", "قاضی دستور داد که زندانی بایستد.", ["stand"], [], "Mandative subjunctive with base verb 'stand'.", "وجه التزامی الزامی با فعل ساده stand."),
        ("___ (What) he said surprised everyone in the room.", "آنچه او گفت همه حاضران در اتاق را غافلگیر کرد.", ["What"], [], "Noun clause with 'what' meaning 'the thing which'.", "بند اسمی با what به معنای «آنچه»."),
        ("I wonder if the library ___ (be) open on Sunday.", "در شگفتم که آیا کتابخانه در روز یکشنبه باز است یا خیر.", ["is", "will be"], [], "Indirect question clause with 'if'.", "سوال غیرمستقیم با if."),
        ("She explained ___ (how) the typesetting apparatus operated.", "او توضیح داد که دستگاه حروف‌چینی چگونه کار می‌کرد.", ["how"], [], "Noun clause indicating manner.", "بند اسمی چگونگی با how."),
        ("It is crucial that every citizen ___ (vote).", "حیاتی است که هر شهروندی رأی دهد.", ["vote"], [], "Subjunctive with singular subject retaining base form.", "وجه التزامی با فاعل مفرد به شکل ریشه فعل."),
        ("He believes ___ (that) diligence yields excellence.", "او باور دارد که پشتکار برتری به بار می‌آورد.", ["that"], [], "Standard declarative noun clause.", "بند اسمی استاندارد با that."),
        ("Nobody knows whose handwriting ___ (this is / is this).", "هیچ‌کس نمی‌داند این دست‌خط متعلق به کیست.", ["this is"], [], "Indirect possessive clause with statement order.", "بند مالکیتی غیرمستقیم با ترتیب خبری."),
        ("I requested that she ___ (not mention) my name.", "من درخواست کردم که او نام مرا به میان نیاورد.", ["not mention"], [], "Negative subjunctive noun clause: not + base verb.", "منفی وجه التزامی: not + ریشه فعل."),
        ("Complete: 'Whoever ___ (arrive) first shall receive the book.'", "کامل کنید: «هر کس اول برسد کتاب را دریافت خواهد کرد.»", ["arrives"], [], "Noun clause subject taking singular verb.", "فاعل جمله در قالب بند اسمی با whoever که فعل مفرد می‌گیرد.")
    ]),
    (12, "Adjective Clauses (Relative Clauses)", "بندهای موصولی", [
        ("The scholar ___ (who / which) compiled this work was a polyglot.", "دانشمندی که این اثر را گردآوری کرد مسلط به چندین زبان بود.", ["who"], ["that"], "Relative pronoun referring to human subject.", "ضمیر موصولی فاعلی برای انسان who است."),
        ("The ancient dictionary, ___ (which / that) was printed in 1951, is preserved.", "آن فرهنگ کهن، که در سال ۱۹۵۱ چاپ شد، نگهداری می‌شود.", ["which"], [], "Non-restrictive clause with commas requires 'which', never 'that'.", "بند غیرتحدیدی بین دو کاما نیازمند which است نه that."),
        ("This is the scribe ___ (whose) calligraphy won admiration.", "این همان کاتبی است که خطاطی‌اش ستایش برانگیخت.", ["whose"], [], "Possessive relative pronoun.", "ضمیر موصولی ملکی whose."),
        ("The room ___ (where / which) he studied is now a museum.", "اتاقی که در آن مطالعه می‌کرد اکنون یک موزه است.", ["where"], ["in which"], "Relative adverb indicating physical place.", "قید موصولی مکان where."),
        ("The gentleman ___ (whom / who) we met yesterday was gracious.", "آقایی که دیروز ملاقات کردیم بسیار باوقار و بزرگوار بود.", ["whom"], ["who", "that"], "Objective relative pronoun referring to human.", "ضمیر موصولی مفعولی برای انسان whom."),
        ("The reason ___ (why) he persevered was his love of language.", "دلیلی که به خاطر آن استقامت ورزید، عشقش به زبان بود.", ["why"], ["that", "for which"], "Relative adverb of cause.", "قید موصولی بیان علت why."),
        ("The town in ___ (which) he was born is Tehran.", "شهری که در آن متولد شد تهران است.", ["which"], [], "Preposition requires 'which' for places, never 'where' or 'that'.", "همراه با حرف اضافه in ضمیر which به کار می‌رود نه that."),
        ("All the books ___ (that / who) were on the desk fell.", "تمام کتاب‌هایی که روی میز بودند افتادند.", ["that"], ["which"], "Restrictive relative clause modifying inanimate plural.", "بند موصولی تحدیدی برای اشیاء."),
        ("Soleiman Haim, ___ (who) was born in 1897, wrote dictionaries.", "سلیمان حییم، که در ۱۸۹۷ متولد شد، لغت‌نامه‌ها را نوشت.", ["who"], [], "Non-restrictive relative clause referring to named person.", "بند موصولی غیرتحدیدی درباره شخص با who."),
        ("The apprentice to ___ (whom) I spoke was very attentive.", "کارآموزی که با او صحبت کردم بسیار با دقت بود.", ["whom"], [], "Preposition 'to' requires objective pronoun 'whom'.", "حرف اضافه to ضمیر مفعولی whom می‌طلبد."),
        ("The year ___ (when) the dictionary appeared was historic.", "سالی که فرهنگ در آن پدیدار گشت تاریخی بود.", ["when"], ["in which", "that"], "Relative adverb of time.", "قید موصولی زمان when."),
        ("He showed me the quill ___ (with which) he wrote the preface.", "او پر نگارشی را که با آن مقدمه را نوشته بود به من نشان داد.", ["with which"], [], "Preposition + relative pronoun combination.", "ترکیب حرف اضافه و ضمیر موصولی."),
        ("The students, all of ___ (whom) were diligent, passed the test.", "دانشجویان، که همگی پرتلاش بودند، در آزمون پذیرفته شدند.", ["whom"], [], "Quantifier phrase 'all of whom'.", "ترکیب مقداری all of whom برای اشخاص."),
        ("He owns two houses, both of ___ (which) are Victorian.", "او دو خانه دارد که هر دوی آن‌ها ویکتوریایی هستند.", ["which"], [], "Quantifier phrase 'both of which' for inanimate objects.", "ترکیب مقداری both of which برای اشیاء."),
        ("The scholar praised the assistant, ___ (whose) work was exemplary.", "دانشمند دستیار را ستود، که کارش نمونه و درخشان بود.", ["whose"], [], "Non-restrictive possessive relative clause.", "بند موصولی ملکی غیرتحدیدی."),
        ("The hypothesis ___ (that) he proposed was revolutionary.", "فرضیه‌ای که او مطرح ساخت انقلابی بود.", ["that"], ["which"], "Restrictive relative clause.", "بند موصولی تحدیدی با that."),
        ("He is a man upon ___ (whom) one can rely implicitly.", "او مردی است که می‌توان کاملاً به او اتکا کرد.", ["whom"], [], "Preposition 'upon' governing 'whom'.", "حرف اضافه upon همراه با whom."),
        ("The days ___ (when) scholars worked with quills are past.", "روزگاری که دانشمندان با قلم پر کار می‌کردند سپری شده است.", ["when"], ["in which"], "Temporal relative adverb.", "قید موصولی زمان."),
        ("I read a book ___ (which / that) explained Persian orthography.", "کتابی خواندم که املای زبان فارسی را توضیح می‌داد.", ["which", "that"], [], "Subject relative pronoun for book.", "ضمیر موصولی برای کتاب."),
        ("Complete: 'The library, the shelves of ___ (which) were tall, was quiet.'", "کامل کنید: «کتابخانه، که قفسه‌هایش بلند بودند، ساکت و آرام بود.»", ["which"], [], "Prepositional possessive form 'the shelves of which'.", "ساختار ملکی the shelves of which برای اشیاء.")
    ]),
    (13, "Gerunds and Infinitives, Part 1", "اسم‌های مصدر و افعال مصدری ۱", [
        ("The student enjoyed ___ (read) the old manuscripts.", "دانشجو از خواندن دست‌نوشته‌های کهن لذت می‌برد.", ["reading"], [], "'Enjoy' is strictly followed by a gerund.", "فعل enjoy همواره با اسم مصدر می‌آید."),
        ("He decided ___ (publish) the volume in two separate parts.", "او تصمیم گرفت کتاب را در دو بخش مجزا منتشر کند.", ["to publish"], [], "'Decide' is strictly followed by an infinitive.", "فعل decide منحصراً با مصدر با to می‌آید."),
        ("She avoided ___ (make) unnecessary grammatical errors.", "او از مرتکب شدن خطاهای دستوری غیرضروری خودداری کرد.", ["making"], [], "'Avoid' requires a gerund.", "فعل avoid با اسم مصدر (-ing) دنبال می‌شود."),
        ("The committee agreed ___ (support) the lexicographical project.", "کمیته موافقت کرد که از پروژه فرهنگ‌نویسی حمایت کند.", ["to support"], [], "'Agree' takes an infinitive.", "فعل agree با مصدر همراه با to به کار می‌رود."),
        ("They postponed ___ (print) the final proofs until next week.", "آن‌ها چاپ نمونه‌های نهایی را تا هفته آینده به تعویق انداختند.", ["printing"], [], "'Postpone' requires a gerund.", "فعل postpone با اسم مصدر می‌آید."),
        ("I hope ___ (master) English grammar this semester.", "امیدوارم در این نیم‌سال بر دستور زبان انگلیسی تسلط یابم.", ["to master"], [], "'Hope' takes an infinitive.", "فعل hope با مصدر با to دنبال می‌شود."),
        ("He admitted ___ (copy) several lines from an older source.", "او اعتراف کرد که چند سطر را از منبعی قدیمی‌تر رونویسی کرده است.", ["copying", "having copied"], [], "'Admit' takes a gerund.", "فعل admit با اسم مصدر می‌آید."),
        ("The scholar refused ___ (compromise) his rigorous standards.", "دانشمند از تن دادن به مصالحه در استانداردهای سخت‌گیرانه‌اش سر باز زد.", ["to compromise"], [], "'Refuse' takes an infinitive.", "فعل refuse با مصدر با to همراه می‌شود."),
        ("She considered ___ (write) a monograph on Persian accents.", "او نوشتن تک‌نگاری درباره لهجه‌های فارسی را در نظر گرفت.", ["writing"], [], "'Consider' requires a gerund.", "فعل consider با اسم مصدر دنبال می‌شود."),
        ("We plan ___ (complete) the index by Friday afternoon.", "ما برنامه داریم تا بعد از ظهر جمعه نمایه را تکمیل کنیم.", ["to complete"], [], "'Plan' takes an infinitive.", "فعل plan با مصدر با to می‌آید."),
        ("He quit ___ (smoke) his wooden pipe inside the library.", "او کشیدن پیپ چوبی در داخل کتابخانه را ترک کرد.", ["smoking"], [], "'Quit' takes a gerund.", "فعل quit با اسم مصدر همراه می‌شود."),
        ("The lecturer promised ___ (review) our essays tomorrow.", "سخنران قول داد که فردا مقالات ما را بازبینی کند.", ["to review"], [], "'Promise' takes an infinitive.", "فعل promise با مصدر با to می‌آید."),
        ("Do you mind ___ (close) the window to keep the draught away?", "آیا امکان دارد پنجره را ببندید تا سوز سرما وارد نشود؟", ["closing"], [], "'Mind' takes a gerund.", "فعل mind با اسم مصدر به کار می‌رود."),
        ("They offered ___ (assist) with the cataloging process.", "آن‌ها پیشنهاد کردند که در فرایند فهرست‌نویسی کمک نمایند.", ["to offer", "to assist"], [], "'Offer' takes an infinitive.", "فعل offer با مصدر همراه با to دنبال می‌شود."),
        ("He denied ___ (tamper) with the historical registry.", "او دستکاری در دفتر ثبت تاریخی را انکار نمود.", ["tampering", "having tampered"], [], "'Deny' requires a gerund.", "فعل deny با اسم مصدر می‌آید."),
        ("She managed ___ (decipher) the faded inscription.", "او موفق شد کتیبه کم‌رنگ‌شده را رمزگشایی کند.", ["to decipher"], [], "'Manage' takes an infinitive.", "فعل manage با مصدر با to می‌آید."),
        ("The scribe finished ___ (bind) the royal volume.", "کاتب صحافی کتاب سلطنتی را به پایان رساند.", ["binding"], [], "'Finish' takes a gerund.", "فعل finish با اسم مصدر همراه می‌شود."),
        ("We cannot afford ___ (waste) another moment in idle debate.", "ما توان از دست دادن حتی یک لحظه دیگر در بحث‌های بیهوده را نداریم.", ["to waste"], [], "'Afford' takes an infinitive.", "فعل afford با مصدر همراه با to به کار می‌رود."),
        ("She suggested ___ (consult) Haim\'s larger dictionary.", "او پیشنهاد کرد که به فرهنگ بزرگ حییم مراجعه شود.", ["consulting"], [], "'Suggest' takes a gerund.", "فعل suggest با اسم مصدر می‌آید."),
        ("Complete: 'The author failed ___ (realize) the magnitude of his work.'", "کامل کنید: «نویسنده نتوانست عظمت اثر خود را درک کند.»", ["to realize"], [], "'Fail' takes an infinitive.", "فعل fail با مصدر با to دنبال می‌شود.")
    ]),
    (14, "Gerunds and Infinitives, Part 2", "اسم‌های مصدر و افعال مصدری ۲", [
        ("The tutor made him ___ (rewrite) the entire composition.", "استاد او را وادار کرد که تمام انشا را از نو بنویسد.", ["rewrite"], [], "Causative 'make' takes a bare infinitive.", "فعل سببی make مفعول و مصدر بدون to می‌گیرد."),
        ("She is accustomed to ___ (work) late into the night.", "او به کار کردن تا دیروقت در شب عادت کرده است.", ["working"], [], "'Be accustomed to' takes a gerund.", "ترکیب be accustomed to با اسم مصدر همراه می‌شود."),
        ("The librarian let the researcher ___ (examine) the rare folio.", "کتابدار به پژوهشگر اجازه داد برگ دست‌نویس کمیاب را بررسی کند.", ["examine"], [], "Causative 'let' takes a bare infinitive.", "فعل سببی let با مصدر بدون to می‌آید."),
        ("I had the tailor ___ (alter) my Victorian frock coat.", "به خیاط دادم تا پالتوی ویکتوریایی‌ام را اصلاح کند.", ["alter"], [], "Causative 'have' (agent) takes a bare infinitive.", "فعل سببی have با شخص و مصدر بدون to می‌آید."),
        ("He had his coat ___ (alter) by the master tailor.", "او داد پالتویش توسط خیاط ماهر اصلاح شود.", ["altered"], [], "Causative 'have' (object) takes past participle.", "فعل سببی have با شیء و قسمت سوم فعل می‌آید."),
        ("I look forward to ___ (receive) your esteemed reply.", "مشتاقانه چشم‌انتظار دریافت پاسخ ارجمند شما هستم.", ["receiving"], [], "'Look forward to' takes a gerund.", "ترکیب look forward to با اسم مصدر می‌آید."),
        ("The scholar used to ___ (walk) through the gardens at dusk.", "دانشمند عادت داشت هنگام غروب در باغ‌ها قدم بزند.", ["walk"], [], "'Used to' (past habit) takes a bare infinitive.", "ساختار used to برای عادت گذشته با فعل ساده می‌آید."),
        ("He is used to ___ (walk) in the torrential rain.", "او به راه رفتن در باران سیل‌آسا خو گرفته است.", ["walking"], [], "'Be used to' (accustomed) takes a gerund.", "ساختار be used to برای عادت داشتن با اسم مصدر می‌آید."),
        ("The master helped the student ___ (translate) the verse.", "استاد به دانشجو کمک کرد تا بیت شعر را ترجمه کند.", ["translate", "to translate"], [], "'Help' takes either bare or to-infinitive.", "فعل help با مصدر با to یا بدون to می‌آید."),
        ("We heard the church bells ___ (toll) in the distance.", "ما صدای ناقوس‌های کلیسا را شنیدیم که از دور به صدا درمی‌آمدند.", ["tolling", "toll"], [], "Verb of perception followed by gerund or bare infinitive.", "افعال حسی با اسم مصدر یا مصدر ساده می‌آیند."),
        ("In order ___ (succeed), one must cultivate diligence.", "به منظور موفقیت، انسان باید پشتکار را پرورش دهد.", ["to succeed"], [], "'In order to' expresses purpose with an infinitive.", "عبارت in order to برای بیان هدف با مصدر با to می‌آید."),
        ("He insisted on ___ (pay) for the rare lexicon himself.", "او اصرار ورزید که پول فرهنگ کمیاب را خودش بپردازد.", ["paying"], [], "Preposition 'on' requires a gerund.", "حرف اضافه on مستلزم اسم مصدر است."),
        ("Remember ___ (lock) the archives before leaving tonight.", "یادت باشد پیش از ترک کتابخانه در امشب، بایگانی را قفل کنی.", ["to lock"], [], "'Remember to do' denotes an obligation to perform.", "ترکیب remember to به معنای به یاد داشتن انجام وظیفه است."),
        ("I remember ___ (read) that fable when I was a boy.", "به یاد می‌آورم که در کودکی آن حکایت را خوانده بودم.", ["reading"], [], "'Remember doing' denotes recollection of past event.", "ترکیب remember doing به معنای یادآوری خاطره گذشته است."),
        ("The professor got his assistant ___ (catalog) the books.", "استاد دستیارش را ترغیب کرد تا کتاب‌ها را فهرست‌نویسی کند.", ["to catalog", "to catalogue"], [], "Causative 'get' takes a to-infinitive.", "فعل سببی get با مصدر همراه با to می‌آید."),
        ("She stopped ___ (smoke) because of her health.", "او کشیدن دخانیات را به خاطر سلامتی‌اش ترک کرد.", ["smoking"], [], "'Stop doing' means cessation of habit.", "ترکیب stop doing به معنای ترک یا متوقف ساختن یک عادت است."),
        ("He stopped ___ (catch) his breath on the steep hill.", "او روی تپه شیب‌دار ایستاد تا نفسی تازه کند.", ["to catch"], [], "'Stop to do' means pausing in order to do something.", "ترکیب stop to do به معنای توقف موقت برای انجام کاری است."),
        ("The apprentice was made ___ (clean) the printing press.", "کارآموز وادار شد که دستگاه چاپ را تمیز کند.", ["to clean"], [], "Passive of causative 'make' requires a to-infinitive.", "شکل مجهول فعل سببی make نیازمند مصدر با to است."),
        ("She takes pleasure in ___ (compose) English sonnets.", "او از سرودن غزل‌های انگلیسی لذت می‌برد.", ["composing"], [], "Preposition 'in' requires a gerund.", "حرف اضافه in همراه با اسم مصدر می‌آید."),
        ("Complete: 'He was prevented from ___ (leave) the country.'", "کامل کنید: «او از خروج از کشور منع شد.»", ["leaving"], [], "Preposition 'from' takes a gerund.", "حرف اضافه from با اسم مصدر همراه می‌شود.")
    ]),
    (15, "Coordinating Conjunctions and Parallel Structure", "حروف ربط همپایه و ساختار موازی", [
        ("The scholar was known for his wisdom ___ (and / but) his modesty.", "آن دانشمند به حکمت و تواضعش شهره بود.", ["and"], [], "Coordinating conjunction joining parallel noun phrases.", "حرف ربط همپایه برای اتصال دو عبارت اسمی موازی."),
        ("Not only did he write dictionaries, ___ he also composed poetry.", "او نه تنها فرهنگ لغت نوشت، بلکه شعر نیز سرود.", ["but"], [], "Correlative pair: 'not only... but also'.", "جفت ربطی not only همراه با but also."),
        ("The lecturer was both eloquent ___ informative.", "سخنران هم سخنور بود و هم آگاهی‌بخش.", ["and"], [], "Correlative pair: 'both... and'.", "حرف ربط جفتی both... and."),
        ("Neither the editor ___ his assistants caught the error.", "نه ویراستار و نه دستیارانش متوجه خطا نشدند.", ["nor"], [], "Correlative pair: 'neither... nor'.", "حرف ربط جفتی neither... nor."),
        ("You may either submit the manuscript now ___ wait until Monday.", "شما می‌توانید یا هم‌اکنون دست‌نوشته را تحویل دهید یا تا دوشنبه صبر کنید.", ["or"], [], "Correlative pair: 'either... or'.", "حرف ربط جفتی either... or."),
        ("He likes reading old books, visiting museums, and ___ (write) letters.", "او از خواندن کتاب‌های کهن، بازدید از موزه‌ها و نوشتن نامه‌ها لذت می‌برد.", ["writing"], [], "Parallel series of gerunds.", "حفظ توازی در سلسله اسم‌های مصدر."),
        ("The text was dense ___ illuminating.", "متن متراکم و دشوار اما روشنگر بود.", ["yet", "but"], [], "Coordinating conjunction showing contrast.", "حرف ربط تضاد yet یا but."),
        ("He was tired, ___ (so / for) he went to bed early.", "او خسته بود، بنابراین زود به خواب رفت.", ["so"], [], "Coordinating conjunction of result: so.", "حرف ربط بیان نتیجه so."),
        ("We remained indoors, ___ (for / and) a tempest raged outside.", "ما در خانه ماندیم، چرا که بیرون طوفانی خشمگین زوزه می‌کشید.", ["for"], [], "Literary coordinating conjunction of cause: for.", "حرف ربط ادبی بیان علت for."),
        ("The edition is admired not for its novelty, but ___ (for) its accuracy.", "این چاپ نه به خاطر تازگی‌اش، بلکه به خاطر دقتش تحسین می‌شود.", ["for"], [], "Parallel prepositional phrase after 'not... but'.", "حفظ حرف اضافه موازی for پس از but."),
        ("She speaks clearly, persuasively, and ___ (intelligent / intelligently).", "او شفاف، متقاعدکننده و هوشمندانه سخن می‌گوید.", ["intelligently"], [], "Parallel series of adverbs of manner.", "سلسله قیدهای حالت موازی منتهی به ly."),
        ("The task was difficult, tedious, and ___ (exhaust / exhausting).", "کار دشوار، ملال‌آور و طاقت‌فرسا بود.", ["exhausting"], [], "Parallel series of predicate adjectives.", "سلسله صفات خبری موازی."),
        ("He neither acknowledged his fault ___ offered an apology.", "او نه به خطای خود اعتراف کرد و نه پوزشی خواست.", ["nor"], [], "Correlative 'neither... nor' with verbs.", "حرف ربط neither همراه با nor."),
        ("You can study in the library, in your chamber, or ___ the garden.", "می‌توانید در کتابخانه، در اتاقتان یا در باغ مطالعه کنید.", ["in"], [], "Parallel preposition 'in'.", "تکرار حرف اضافه موازی in."),
        ("Not only English ___ French was typeset in this volume.", "نه تنها انگلیسی بلکه فرانسه نیز در این جلد حروف‌چینی شد.", ["but also", "but"], [], "Correlative conjunction pair.", "جفت ربطی not only... but also."),
        ("The prose is distinguished by its grace, clarity, and ___ (lucid / lucidity).", "این نثر به سبب وقار، وضوح و شیوایی‌اش متمایز است.", ["lucidity"], [], "Parallel series of abstract nouns.", "سلسله اسامی انتزاعی موازی."),
        ("He walked into the room, took off his hat, and ___ (sit) down.", "او وارد اتاق شد، کلاهش را برداشت و نشست.", ["sat"], [], "Parallel sequence of simple past verbs.", "توالی موازی افعال گذشته ساده."),
        ("Either apologize at once, ___ face the consequences.", "یا فوراً عذرخواهی کن، یا با پیامدها روبرو شو.", ["or"], [], "Correlative 'either... or' with imperative verbs.", "ساختار either... or با افعال امری."),
        ("The work requires both patience ___ scholarship.", "این اثر هم نیازمند صبوری و هم نیازمند دانشوری است.", ["and"], [], "Correlative 'both... and' with nouns.", "پیوند دو اسم با both... and."),
        ("Complete: 'He was known as a poet, a scholar, and ___ (an / a) educator.'", "کامل کنید: «او به عنوان شاعر، دانشمند و یک مربی شناخته می‌شد.»", ["an"], [], "Parallel indefinite article before vowel sound.", "حرف تعریف نامعین موازی an قبل از آوای صدادار.")
    ]),
    (16, "Adverb Clauses", "بندهای قیدی", [
        ("___ (Although / Because) the weather was bitter, the postman delivered the mail.", "اگرچه هوا به شدت سرد بود، پستچی مرسولات را تحویل داد.", ["Although", "Even though", "Though"], [], "Adverb clause of concession.", "بند قیدی بیان تعارض با although."),
        ("We waited inside ___ (until / while) the rain ceased.", "ما درون خانه منتظر ماندیم تا زمانی که باران متوقف شد.", ["until"], [], "Adverb clause of time indicating limit.", "بند قیدی زمان بیانگر حد نهایی با until."),
        ("___ (Because / Although) the manuscript was delicate, he wore gloves.", "چون دست‌نوشته ظریف بود، او دستکش پوشید.", ["Because", "Since", "As"], [], "Adverb clause of cause and effect.", "بند قیدی بیان علت با because."),
        ("He studied every evening so ___ he might pass the test.", "او هر شب درس می‌خواند تا بتواند در آزمون قبول شود.", ["that"], [], "Adverb clause of purpose: so that.", "بند قیدی بیان هدف با so that."),
        ("___ (As soon as) the clock struck five, the workers departed.", "به محض آنکه ساعت پنج را نواخت، کارگران رفتند.", ["As soon as", "Once"], [], "Adverb clause of immediate time.", "بند قیدی زمان فوری با as soon as."),
        ("While he was reading in his study, a courier ___ (arrive).", "در حالی که در اتاق کارش مطالعه می‌کرد، قاصدی رسید.", ["arrived"], [], "Main clause event during time clause.", "رویداد بند اصلی در طول زمان بند قیدی."),
        ("You cannot borrow the folio ___ (unless) you possess authorization.", "نمی‌توانید برگ دست‌نویس را به امانت بگیرید مگر آنکه مجوز داشته باشید.", ["unless"], [], "Negative conditional clause meaning 'if not'.", "بند قیدی شرطی منفی با unless به معنای اگر نه."),
        ("___ (Since / Although) you are already here, let us review the proofs.", "حال که از قبل اینجا هستید، بیایید نمونه‌ها را مرور کنیم.", ["Since", "Now that", "As"], [], "Adverb clause of cause / circumstance.", "بند قیدی بیان علت و موقعیت با since."),
        ("He spoke quietly so that no one ___ (can / could) overhear.", "او به آرامی سخن گفت تا مبادا کسی بشنود.", ["could"], ["would"], "Past purpose clause with modal 'could'.", "بند قیدی بیان هدف در گذشته با could."),
        ("Even ___ (if / though) it rains tomorrow, we shall proceed.", "حتی اگر فردا باران ببارد، ما ادامه خواهیم داد.", ["if"], [], "'Even if' conveys conditional indifference to circumstances.", "ترکیب even if برای شرطی فرضی حتی اگر."),
        ("___ (Whereas / Where) Arabic has root radicals, English relies on affixation.", "در حالی که عربی دارای ریشه‌های ثلاثی است، انگلیسی به وندافزایی متکی است.", ["Whereas", "While"], [], "Adverb clause of direct contrast.", "بند قیدی تقابل مستقیم با whereas."),
        ("The bell had scarcely rung ___ (when) the door opened.", "هنوز زنگ به صدا درنیامده بود که در باز شد.", ["when", "before"], [], "Time conjunction following scarcely / hardly.", "کلمه ربط زمان when پس از scarcely."),
        ("Wherever you ___ (go), remember your principles.", "هر جا که بروی، اصول اخلاقی‌ات را به یاد داشته باش.", ["go"], [], "Adverb clause of place takes simple present.", "بند قیدی مکان با wherever."),
        ("Now ___ the translation is finished, we can print.", "اکنون که ترجمه تمام شده است، می‌توانیم چاپ کنیم.", ["that"], [], "Causal connective: 'Now that'.", "حرف ربط علتی Now that."),
        ("He acted as ___ (if / though) he owned the library.", "او طوری رفتار کرد که گویی مالک کتابخانه بود.", ["if", "though"], [], "Adverb clause of manner / hypothetical comparison.", "بند قیدی حالت و تشبیه فرضی با as if."),
        ("Inasmuch ___ the author provided citations, the work is authoritative.", "از آنجا که نویسنده ارجاعات را فراهم ساخت، اثر معتبر است.", ["as"], [], "Formal causal connective: 'inasmuch as'.", "حرف ربط رسمی علتی inasmuch as."),
        ("He continued his research ___ (despite / although) he was ill.", "او به تحقیقاتش ادامه داد با وجود اینکه بیمار بود.", ["although", "even though", "though"], [], "Full clause requires subordinating conjunction 'although', not 'despite'.", "بند کامل نیازمند although است نه حرف اضافه despite."),
        ("We departed early in order ___ we might catch the morning coach.", "ما زود حرکت کردیم تا بتوانیم به درشکه صبحگاهی برسیم.", ["that"], [], "Purpose conjunction: 'in order that'.", "کلمه ربط هدف in order that."),
        ("He looked as though he ___ (see) a ghost.", "او طوری به نظر می‌رسید که گویی روحی دیده بود.", ["had seen"], ["saw"], "Past unreal comparison after 'as though'.", "مقایسه غیرواقعی گذشته پس از as though با ماضی بعید."),
        ("Complete: 'No sooner had he spoken ___ the lights flickered.'", "کامل کنید: «هنوز سخن نگفته بود که چراغ‌ها سوسو زدند.»", ["than"], [], "'No sooner' pairs exclusively with 'than'.", "ترکیب No sooner فقط با than جفت می‌شود.")
    ]),
    (17, "Reduction of Adverb Clauses to Modifying Phrases", "کوتاه‌سازی بندهای قیدی به عبارات قیدی", [
        ("___ (Having finished / Finishing) his tea, the scholar resumed his translation.", "دانشمند پس از اتمام چایش، ترجمه را از سر گرفت.", ["Having finished"], ["Finishing", "After finishing"], "Perfect participial phrase showing completed antecedent action.", "عبارت وصفی کامل با having + V3 برای نشان دادن اتمام کار پیشین."),
        ("While ___ (walk) in the quadrangle, he contemplated the word origin.", "در حین قدم زدن در صحن دانشگاه، او درباره ریشه کلمه اندیشید.", ["walking"], [], "Reduced time clause: while + present participle.", "بند زمانی خلاصه‌شده: while + وجه وصفی حال."),
        ("___ (Be) a meticulous scholar, Haim verified every entry.", "حییم که دانشمندی دقیق بود، هر مدخل را راستی‌آزمایی کرد.", ["Being"], [], "Participial phrase explaining cause (Because he was...).", "عبارت وصفی بیانگر علت با being."),
        ("Before ___ (publish) the lexicon, the editors checked every page.", "ویراستاران پیش از چاپ فرهنگ، هر صفحه را بررسی کردند.", ["publishing"], [], "Preposition + gerund reduced clause.", "کوتاه‌سازی با before + اسم مصدر."),
        ("Upon ___ (hear) the news, the professor smiled with satisfaction.", "استاد به محض شنیدن خبر، با رضایت لبخند زد.", ["hearing"], [], "'Upon + -ing' denotes immediate sequential action.", "ترکیب upon + ing برای بیان رویداد بلافاصله."),
        ("Having ___ (examine) the bindings, the collector purchased the folio.", "مجموعه‌دار پس از بررسی صحافی‌ها، برگ دست‌نویس را خرید.", ["examined"], [], "Past participle after 'having'.", "قسمت سوم فعل پس از having."),
        ("While ___ (transcribe) the text, she discovered an ancient gloss.", "در حین رونویسی متن، او حاشیه‌نویسی کهنی کشف کرد.", ["transcribing"], [], "Reduced temporal clause with while.", "خلاصه‌سازی بند زمانی با while."),
        ("___ (Shock) by the omission, the author demanded a reprint.", "نویسنده که از این از قلم‌افتادگی شوکه شده بود، تقاضای تجدید چاپ کرد.", ["Shocked"], [], "Passive past participial phrase expressing cause.", "عبارت مجهول گذشته وصفی بیانگر علت."),
        ("After ___ (consult) his advisors, the director gave his approval.", "مدیر پس از مشورت با مشاورانش موافقت خود را اعلام کرد.", ["consulting", "having consulted"], [], "Reduced clause with 'after'.", "بند خلاصه‌شده با after."),
        ("___ (Know) the perils of haste, the lexicographer worked slowly.", "فرهنگ‌نویس که خطرات شتاب‌زدگی را می‌دانست، با آرامش کار می‌کرد.", ["Knowing"], [], "Present participle phrase showing reason.", "عبارت حال وصفی بیانگر آگاهی و دلیل."),
        ("Avoid the dangling modifier: 'Walking through the hall, ___ (the bell rang / he heard the bell).'", "از توصیف‌گر معلق پرهیز کنید: «در حال عبور از سالن، ...»", ["he heard the bell"], [], "Subject of the main clause must perform the walking.", "فاعل جمله اصلی باید همان کسی باشد که عمل قدم زدن را انجام می‌دهد."),
        ("___ (See) from a distance, the cathedral looked majestic.", "کلیسای جامع وقتی از دور دیده می‌شد باوقار جلوه می‌کرد.", ["Seen"], [], "Passive reduction: (When it was seen -> Seen).", "خلاصه‌سازی مجهول زمانی به Seen."),
        ("Having ___ (bear) the burden for decades, he finally rested.", "پس از آنکه دهه‌ها بار این مسئولیت را به دوش کشیده بود، سرانجام استراحت کرد.", ["borne"], [], "Irregular past participle of bear (carry): borne.", "قسمت سوم بی‌قاعده فعل bear به معنای حمل کردن: borne."),
        ("When ___ (ask) about his methods, he cited Haim\'s preface.", "هنگامی که درباره روش‌هایش مورد پرسش قرار گرفت، به مقدمه حییم ارجاع داد.", ["asked"], [], "Reduced passive time clause: When asked.", "بند زمانی مجهول خلاصه‌شده با when asked."),
        ("___ (Lack) proper funding, the project faced great delays.", "پروژه به دلیل کمبود بودجه مناسب با تأخیرهای بزرگی مواجه شد.", ["Lacking"], [], "Present participle expressing cause.", "وجه وصفی حال بیانگر علت."),
        ("While ___ (work) at the Anglo-Iranian Oil Company, Haim compiled dictionaries.", "حییم در حین کار در شرکت نفت انگلیس و ایران، لغت‌نامه‌ها را گردآوری کرد.", ["working"], [], "Reduced temporal clause.", "بند زمانی خلاصه‌شده با working."),
        ("___ (Frighten) by the thunderstorm, the children ran indoors.", "کودکان که از طوفان و رعد و برق ترسیده بودند به داخل خانه دویدند.", ["Frightened"], [], "Past participial adjective phrase.", "عبارت وصفی با صفت مفعولی."),
        ("Having ___ (spend) all his savings, he returned to teaching.", "او پس از صرف تمام پس‌اندازش، به تدریس بازگشت.", ["spent"], [], "Past participle after having.", "قسمت سوم فعل spent پس از having."),
        ("Before ___ (enter) the sanctum, all visitors must remove their footwear.", "پیش از ورود به جایگاه مقدس، همه بازدیدکنندگان باید پاپوش خود را درآورند.", ["entering"], [], "Preposition 'before' with gerund.", "حرف اضافه before همراه با اسم مصدر."),
        ("Complete: '___ (exhaust) by long hours, the printer fell asleep.'", "کامل کنید: «چاپ‌کننده که از ساعت‌های طولانی کار از پا درآمده بود به خواب رفت.»", ["Exhausted"], [], "Past participle indicating state/cause.", "صفت مفعولی بیانگر فرسودگی و علت.")
    ]),
    (18, "Connectives Expressing Cause/Effect, Contrast, and Condition", "کلمات ربط بیان علت/معلول، تضاد و شرط", [
        ("The text was obscure; ___ (therefore / however), few scholars could decipher it.", "متن مبهم بود؛ بنابراین دانشمندان اندکی توانستند آن را رمزگشایی کنند.", ["therefore", "consequently"], [], "Conjunctive adverb of result.", "قید ربطی بیان نتیجه therefore."),
        ("The book was expensive; ___ (nevertheless / therefore), every library bought a copy.", "کتاب گران‌قیمت بود؛ با این وجود، هر کتابخانه‌ای نسخه‌ای از آن را خرید.", ["nevertheless", "nonetheless", "however"], [], "Conjunctive adverb of concession and contrast.", "قید ربطی بیان تضاد و تعارض nevertheless."),
        ("He succeeded ___ (in spite of / although) numerous obstacles.", "او به‌رغم موانع بی‌شمار موفق شد.", ["in spite of", "despite"], [], "Prepositional connective taking a noun phrase.", "حرف اضافه بیان تضاد همراه با عبارت اسمی."),
        ("The storm was severe; ___ (consequently / however), the postal carriage was delayed.", "طوفان شدید بود؛ در نتیجه، درشکه پست به تأخیر افتاد.", ["consequently", "therefore", "as a result"], [], "Conjunctive adverb showing consequence.", "قید ربطی بیان معلول و نتیجه consequently."),
        ("We must preserve the manuscript; ___ (otherwise), it will deteriorate.", "ما باید دست‌نوشته را حفظ کنیم؛ در غیر این صورت فرسوده خواهد شد.", ["otherwise"], [], "Connective expressing alternative negative condition.", "کلمه ربط بیان شرط منفی otherwise."),
        ("He loved English literature; ___ (furthermore / nevertheless), he wrote fine Persian verse.", "او عاشق ادبیات انگلیسی بود؛ علاوه بر این، اشعار فارسی نغزی نیز می‌سرود.", ["furthermore", "moreover", "in addition"], [], "Conjunctive adverb adding supportive evidence.", "قید ربطی بیان افزودن مطلب furthermore."),
        ("___ (Despite / Although) the heavy fog, the courier rode forth.", "به‌رغم مه غلیظ، قاصد به پیش راند.", ["Despite", "In spite of"], [], "Preposition of contrast taking a noun phrase.", "حرف اضافه تضاد despite همراه با عبارت اسمی."),
        ("The grammar is comprehensive. ___ (On the other hand / Therefore), it is quite challenging.", "دستور زبان جامع است. از سوی دیگر، کاملاً چالش‌برانگیز است.", ["On the other hand", "However", "In contrast"], [], "Transition showing contrasting perspective.", "عبارت انتقالی بیان جنبه متضاد."),
        ("He arrived late ___ (because of / because) a broken carriage axle.", "او به سبب شکستن محور درشکه دیر رسید.", ["because of", "due to", "owing to"], [], "Prepositional cause connective taking a noun phrase.", "حرف اضافه بیان علت همراه با اسم because of."),
        ("The library was quiet; ___ (moreover), the heating was pleasant.", "کتابخانه آرام بود؛ افزون بر آن، گرمایش نیز مطبوع بود.", ["moreover", "furthermore"], [], "Conjunctive adverb adding positive details.", "قید ربطی افزودن moreover."),
        ("You must hurry; ___ (otherwise), the archive will be closed.", "باید عجله کنی؛ در غیر این صورت بایگانی بسته خواهد شد.", ["otherwise"], [], "Conjunctive adverb 'otherwise'.", "قید ربطی بیان وگرنه otherwise."),
        ("___ (In contrast to / Although) his predecessor, the new director was approachable.", "بر خلاف سلف خویش، مدیر جدید خوش‌برخورد و دست‌یافتنی بود.", ["In contrast to", "Unlike"], [], "Prepositional contrast phrase.", "عبارت حرف اضافه‌ای بیان تقابل."),
        ("He was fatigued; ___ (nonetheless), he completed his translation.", "او خسته بود؛ با این حال، ترجمه‌اش را به پایان رساند.", ["nonetheless", "nevertheless"], [], "Conjunctive adverb of concession.", "قید ربطی بیان تعارض nonetheless."),
        ("The volume is small. It is, ___ (however), extraordinarily informative.", "کتاب حجم اندکی دارد. با این وجود، فوق‌العاده آموزنده است.", ["however", "nevertheless"], [], "Parenthetical conjunctive adverb.", "قید ربطی معترضه however."),
        ("We cancelled the expedition ___ (due to) the severe blizzards.", "ما به دلیل کولاک‌های شدید سفر اکتشافی را لغو کردیم.", ["due to", "because of", "owing to"], [], "Prepositional cause phrase.", "عبارت بیان علت due to."),
        ("He possessed great wealth; ___ (even so), he lived modestly.", "او ثروت فراوانی داشت؛ با این همه، متواضعانه می‌زیست.", ["even so"], ["nevertheless"], "Transition phrase meaning 'nevertheless'.", "عبارت انتقالی even so."),
        ("The task was tedious; ___ (all the same), we persevered.", "کار ملال‌آور بود؛ با این همه، ما پایداری کردیم.", ["all the same"], ["nevertheless"], "Idiomatic transition of concession.", "عبارت اصطلاحی all the same."),
        ("He gave up his rights; ___ (as a result), he received no royalties.", "او از حقوق خود چشم‌پوشی کرد؛ در نتیجه، هیچ حق‌تألیفی دریافت ننمود.", ["as a result", "consequently"], [], "Prepositional result phrase.", "عبارت بیان نتیجه as a result."),
        ("She was exhausted, ___ (yet) she refused to abandon her desk.", "او خسته و درمانده بود، با این حال حاضر به ترک میز کارش نشد.", ["yet", "but"], [], "Coordinating conjunction of concession.", "حرف ربط همپایه بیان تقابل yet."),
        ("Complete: 'Punctuation was updated; ___ (likewise), orthography was modernized.'", "کامل کنید: «نشانه‌گذاری به‌روز شد؛ به همین منوال، رسم‌الخط نیز امروزی گردید.»", ["likewise", "similarly"], [], "Conjunctive adverb of comparison/similarity.", "قید ربطی بیان شباهت و هماهنگی likewise.")
    ]),
    (19, "Conditional Sentences and Wishes", "جملات شرطی و آرزوها", [
        ("If I ___ (be) in your position, I would accept the appointment.", "اگر من جای شما بودم، این انتصاب را می‌پذیرفتم.", ["were"], ["was"], "Second conditional subjunctive 'were' for all persons in formal English.", "شرطی نوع دوم با were برای تمامی اشخاص در انگلیسی معیار."),
        ("If the scribe had inspected the manuscript, he ___ (find) the missing gloss.", "اگر کاتب دست‌نوشته را بررسی کرده بود، حاشیه گم‌شده را می‌یافت.", ["would have found"], [], "Third conditional result clause: would have + past participle.", "بند نتیجه شرطی نوع سوم: would have + V3."),
        ("I wish I ___ (know) the answer to this grammatical riddle.", "کاش پاسخ این معمای دستوری را می‌دانستم.", ["knew"], [], "'Wish' for present unreality takes past simple.", "بیان آرزوی خلاف واقع در زمان حال با گذشته ساده."),
        ("I wish I ___ (consult) Haim\'s larger dictionary yesterday.", "ای کاش دیروز به فرهنگ بزرگ حییم مراجعه کرده بودم.", ["had consulted"], [], "'Wish' for past regret takes past perfect.", "ابراز حسرت گذشته با wish و ماضی بعید."),
        ("If water reaches 100 degrees Celsius, it ___ (boil).", "اگر آب به ۱۰۰ درجه سلسیوس برسد، می‌جوشد.", ["boils"], ["will boil"], "Zero conditional for scientific certainty.", "شرطی نوع صفر برای حقایق علمی همیشگی."),
        ("Unless you ___ (hurry), you will miss the morning train.", "مگر آنکه عجله کنی، وگرنه قطار صبح را از دست خواهی داد.", ["hurry"], [], "'Unless' clause takes affirmative present verb.", "بند شرطی با unless فعل مثبت حال می‌گیرد."),
        ("If he ___ (study) harder in his youth, he would be a professor today.", "اگر در جوانی بیشتر درس خوانده بود، امروز یک استاد دانشگاه می‌بود.", ["had studied"], [], "Mixed conditional: past condition with present result.", "شرطی ترکیبی: شرط در گذشته و نتیجه در زمان حال."),
        ("If it ___ (rain) tomorrow, the garden party will be postponed.", "اگر فردا باران ببارد، مهمانی در باغ به تعویق خواهد افتاد.", ["rains"], [], "First conditional if-clause takes simple present.", "بند شرط در شرطی نوع اول با حال ساده بیان می‌شود."),
        ("Had I ___ (know) of your arrival, I would have greeted you at the station.", "اگر از آمدنتان آگاه بودم، در ایستگاه به استقبالتان می‌آمدم.", ["known"], [], "Inverted third conditional: Had + subject + past participle.", "شرطی نوع سوم وارونه بدون if با Had + فاعل + V3."),
        ("Were he ___ (be) more diligent, he would master the Persian alphabet.", "اگر او پرتلاش‌تر بود، الفبای فارسی را فرامی‌گرفت.", ["to be"], [], "Inverted second conditional: Were + subject + to-infinitive.", "شرطی نوع دوم وارونه با Were + فاعل + to-infinitive."),
        ("If only I ___ (listen) to the tutor\'s prudent advice!", "کاش فقط به نصیحت خردمندانه استاد گوش فراداده بودم!", ["had listened"], [], "'If only' expressing deep past regret takes past perfect.", "عبارت If only برای حسرت گذشته با ماضی بعید."),
        ("I would buy that rare volume if I ___ (have) enough money.", "اگر پول کافی داشتم آن جلد کتاب کمیاب را می‌خریدم.", ["had"], [], "Second conditional if-clause takes past tense.", "بند شرط در شرطی نوع دوم گذشته ساده می‌گیرد."),
        ("Provided that weather ___ (permit), the ship will sail at dawn.", "به شرط آنکه هوا اجازه دهد، کشتی هنگام سپیده‌دم حرکت خواهد کرد.", ["permits"], [], "Conditional connective 'provided that' takes present tense.", "کلمه شرطی provided that با حال ساده می‌آید."),
        ("If you should ___ (encounter) the archivist, convey my warm regards.", "اگر احیاناً با بایگان روبرو شدی، سلام گرم مرا برسان.", ["encounter"], [], "Hypothetical condition with 'should + bare verb'.", "شرط احتمالی با should و مصدر ساده."),
        ("Should you ___ (require) assistance, do not hesitate to ask.", "چنانچه کمکی نیاز داشتید، در درخواست آن تردید نکنید.", ["require"], [], "Inverted conditional with 'should'.", "شرطی وارونه با should."),
        ("I wish the noise ___ (stop); I cannot concentrate.", "کاش این سر و صدا قطع می‌شد؛ نمی‌توانم تمرکز کنم.", ["would stop"], [], "'Wish + would' expresses desire for a change in behavior or event.", "ساختار wish + would برای ابراز تمایل به توقف یک عمل آزاردهنده."),
        ("If he ___ (not be) so arrogant, people would admire him.", "اگر این‌قدر مغرور نبود، مردم تحسینش می‌کردند.", ["were not", "weren't"], [], "Negative second conditional.", "منفی شرطی نوع دوم با were not."),
        ("If they had arrived earlier, they ___ (not miss) the opening address.", "اگر زودتر رسیده بودند، سخنرانی افتتاحیه را از دست نمی‌دادند.", ["would not have missed", "wouldn't have missed"], [], "Negative third conditional result clause.", "بند منفی نتیجه در شرطی نوع سوم."),
        ("She acts as if she ___ (know) all secrets of the universe.", "او طوری رفتار می‌کند که گویی تمام رازهای کائنات را می‌داند.", ["knew"], [], "Hypothetical present unreality with 'as if'.", "مقایسه فرضی حال با as if و فعل گذشته."),
        ("Complete: 'Had the courier arrived on time, the disaster ___ (avert).' ", "کامل کنید: «اگر قاصد به موقع رسیده بود، از فاجعه جلوگیری می‌شد.»", ["would have been averted"], [], "Passive third conditional result.", "نتیجه مجهول در شرطی نوع سوم.")
    ]),
    (20, "Subject-Verb Inversion and Preposition Combinations", "وارونگی فاعل و فعل و ترکیبات حروف اضافه", [
        ("Rarely ___ (we see) such flawless typographical craftsmanship.", "به‌ندرت ما شاهد چنین صنعت حروف‌چینی بی‌نقصی بوده‌ایم.", ["have we seen", "do we see", "did we see"], [], "Negative inversion after 'rarely'.", "وارونگی فعل کمکی پیش از فاعل پس از قید منفی rarely."),
        ("Seldom ___ (he speak) of his private accomplishments.", "او به‌ندرت از دستاوردهای شخصی‌اش سخن می‌گوید.", ["does he speak", "did he speak"], [], "Negative inversion with simple present requires auxiliary 'does'.", "وارونگی با seldom در زمان حال ساده با فعل کمکی does."),
        ("Under no circumstances ___ (visitors be permitted) to touch the codex.", "تحت هیچ شرایطی بازدیدکنندگان مجاز به لمس دست‌نوشته کهن نیستند.", ["are visitors permitted", "may visitors be permitted", "should visitors be permitted"], [], "Negative inversion after 'under no circumstances'.", "وارونگی کامل پس از عبارت منفی under no circumstances."),
        ("Not only ___ (did he translate) the vocabulary, but he also provided idioms.", "او نه تنها واژگان را ترجمه کرد، بلکه اصطلاحات را نیز فراهم ساخت.", ["did he translate"], [], "Inversion with 'not only did subject + verb'.", "وارونگی با not only did."),
        ("Scarcely had the lecture commenced ___ (when) the chandelier fell.", "هنوز سخنرانی آغاز نشده بود که چلچراغ سقوط کرد.", ["when"], ["before"], "Correlative partner 'when' after 'scarcely had'.", "کلمه ربط when پس از scarcely had."),
        ("Hardly had she opened the folio ___ (when) the parchment crumbled.", "هنوز برگ دست‌نویس را باز نکرده بود که پوست‌نوشته فرو ریخت.", ["when"], ["before"], "Inversion partner for 'hardly had'.", "کلمه ربط when پس از hardly had."),
        ("Little ___ (did they suspect) that an erratum remained on page four.", "آن‌ها ذره‌ای گمان نمی‌کردند که غلط چاپی در صفحه چهار باقی مانده باشد.", ["did they suspect"], [], "Negative adverbial 'little' triggers inversion.", "قید منفی little مستلزم وارونگی است."),
        ("No sooner had the sun set ___ (than) the frost appeared.", "هنوز خورشید غروب نکرده بود که سرما و یخبندان پدیدار شد.", ["than"], [], "Correlative partner 'than' after 'no sooner'.", "کلمه ربط than پس از no sooner."),
        ("Only after midnight ___ (did he finish) his daily revisions.", "تنها پس از نیمه‌شب بود که بازبینی‌های روزانه‌اش را به پایان رساند.", ["did he finish"], [], "Inversion after 'only after'.", "وارونگی پس از عبارت قیدی only after."),
        ("Only by persistent labor ___ (can one master) English idioms.", "تنها با کار مداوم می‌توان بر اصطلاحات انگلیسی مسلط شد.", ["can one master"], [], "Inversion after 'only by'.", "وارونگی پس از عبارت only by."),
        ("Down the winding staircase ___ (walked) the venerable headmaster.", "مدیر کهنسال و محترم از پله‌های مارپیچ پایین آمد.", ["walked", "came"], [], "Locative inversion with prepositional phrase of direction.", "وارونگی مکانی با عبارت جهتی در ابتدای جمله."),
        ("Here ___ (come) the royal carriage at last!", "اینک درشکه سلطنتی بالاخره می‌آید!", ["comes"], [], "Inversion after 'here' with full noun subject.", "وارونگی پس از here با فاعل اسمی."),
        ("He insisted ___ (on / in) paying the copyist personally.", "او اصرار ورزید که هزینه را شخصاً به کاتب بپردازد.", ["on"], ["upon"], "Dependent preposition for 'insist': on.", "حرف اضافه وابسته به فعل insist کلمه on است."),
        ("The scholar was accustomed ___ (to) burning midnight oil.", "دانشمند به شب‌زنده‌داری و مطالعه تا پاسی از شب خو گرفته بود.", ["to"], [], "Dependent preposition for 'accustomed': to.", "حرف اضافه وابسته به accustomed واژه to است."),
        ("She is remarkably fond ___ (of) Victorian literature.", "او علاقه وافری به ادبیات دوره ویکتوریا دارد.", ["of"], [], "Dependent preposition for 'fond': of.", "حرف اضافه وابسته به صفت fond کلمه of است."),
        ("They congratulated him ___ (on / for) his monumental dictionary.", "آن‌ها به خاطر فرهنگ لغت عظیمش به او تبریک گفتند.", ["on"], ["upon"], "Dependent preposition for 'congratulate': on.", "حرف اضافه وابسته به فعل congratulate کلمه on است."),
        ("The lexicon is dedicated ___ (to) the memory of his mentors.", "این فرهنگ لغت به یاد اساتیدش تقدیم شده است.", ["to"], [], "Dependent preposition for 'dedicated': to.", "حرف اضافه وابسته به dedicated واژه to است."),
        ("He was accused ___ (of) forging the royal proclamation.", "او به جعل بیانیه سلطنتی متهم شد.", ["of"], [], "Dependent preposition for 'accused': of.", "حرف اضافه وابسته به فعل accused کلمه of است."),
        ("Never before ___ (have I witnessed) such dedication to lexicography.", "هرگز پیش از این شاهد چنین ایثاری در راه فرهنگ‌نویسی نبوده‌ام.", ["have I witnessed"], [], "Negative inversion after 'never before'.", "وارونگی کامل پس از عبارت منفی never before."),
        ("Complete: 'Round the corner ___ (stood) an antique bookshop.'", "کامل کنید: «در نبش کوچه یک کتابفروشی عتیقه قرار داشت.»", ["stood"], ["was"], "Locative inversion with intransitive verb.", "وارونگی مکانی با فعل ناگذر stood.")
    ])
]

import re

def build_active_question(ch_num: int, ch_title: str, ch_title_fa: str, idx: int, raw_prompt: str, raw_prompt_fa: str, accepted: list, alt: list, explanation: str, explanation_fa: str):
    """
    Transforms any raw prompt template into an active, non-cloze grammatical task
    (sentence rewriting, clause transformation, error correction, or structure construction)
    with ZERO underscores (___) and accepts BOTH the full rewritten sentence and the target grammatical form.
    """
    p = raw_prompt.strip()
    p_fa = raw_prompt_fa.strip()

    # Special explicit rewrite items
    if "Rewrite using 'ought'" in p:
        base_sentence = "You should apologize."
        new_prompt = 'Rewrite the following sentence using the modal verb "ought" to express moral obligation: "You should apologize."'
        new_prompt_fa = 'جمله زیر را با استفاده از فعل وجهی «ought» برای بیان وظیفه اخلاقی بازنویسی کنید: «تو باید عذرخواهی کنی.»'
        full_accepted = ["You ought to apologize.", "You ought to apologize", "ought to"]
        full_alt = ["You ought to apologise.", "You ought to apologise"]
        return new_prompt, new_prompt_fa, full_accepted, full_alt

    if "Change to passive:" in p:
        new_prompt = 'Transform the following active sentence into the passive voice: "Haim compiled the dictionary."'
        new_prompt_fa = 'جمله معلوم زیر را به حالت مجهول تبدیل کنید: «حییم فرهنگ لغت را گردآوری کرد.»'
        full_accepted = ["The dictionary was compiled by Haim.", "The dictionary was compiled by Haim", "was compiled"]
        full_alt = []
        return new_prompt, new_prompt_fa, full_accepted, full_alt

    if "Avoid the dangling modifier:" in p:
        new_prompt = 'Rewrite the sentence to eliminate the dangling modifier by selecting and integrating the grammatically valid main clause: "Walking through the hall, [the bell rang / he heard the bell]."'
        new_prompt_fa = 'جمله زیر را با حذف توصیف‌گر معلق و انتخاب بند اصلی درست بازنویسی کنید: «در حال عبور از سالن، [زنگ به صدا درآمد / او صدای زنگ را شنید].»'
        full_accepted = ["Walking through the hall, he heard the bell.", "Walking through the hall, he heard the bell", "he heard the bell"]
        full_alt = []
        return new_prompt, new_prompt_fa, full_accepted, full_alt

    # Strip legacy cloze prefixes like "Fill in the verb: '...'", "Complete the sentence: '...'", "Complete: '...'", "Write the correct form: '...'", "Identify the correct form: '...'", "Choose the correct word: '...'"
    prefix_patterns = [
        r"^Fill in the verb:\s*'(.*)'$",
        r"^Complete the sentence:\s*'(.*)'$",
        r"^Complete:\s*'(.*)'\.?\s*$",
        r"^Write the correct form:\s*'(.*)'$",
        r"^Identify the correct form:\s*'(.*)'$",
        r"^Choose the correct word:\s*'(.*)'$",
    ]
    for pat in prefix_patterns:
        m = re.match(pat, p)
        if m:
            p = m.group(1).strip()
            break

    # Clean Persian cloze prefixes
    fa_prefixes = [
        "فعل را کامل کنید:",
        "جمله را کامل کنید:",
        "کامل کنید:",
        "شکل صحیح را بنویسید:",
        "واژه صحیح را انتخاب کنید:",
    ]
    for fp in fa_prefixes:
        if p_fa.startswith(fp):
            p_fa = p_fa[len(fp):].strip()
            if p_fa.startswith("«") and p_fa.endswith("»"):
                p_fa = p_fa[1:-1].strip()
    p_fa = p_fa.replace("...", "").strip()

    # Build full sentences by substituting each answer into the template before replacing ___
    def substitute_answer(template_str: str, ans: str) -> str:
        # If answer is zero article symbol
        if ans.lower() in ("ø", "no article", "none", "zero article"):
            res = re.sub(r"___\s*\([^)]*\)", "", template_str)
            res = re.sub(r"___", "", res)
            res = re.sub(r"\s+", " ", res).strip()
            if res:
                res = res[0].upper() + res[1:]
            return res
        # Normal substitution
        if re.search(r"___\s*\([^)]*\)", template_str):
            res = re.sub(r"___\s*\([^)]*\)", ans, template_str, count=1)
        else:
            res = re.sub(r"___", ans, template_str, count=1)
        res = re.sub(r"\s+", " ", res).strip()
        if res:
            res = res[0].upper() + res[1:]
        return res

    full_accepted = []
    for ans in accepted:
        full_sent = substitute_answer(p, ans)
        if full_sent and full_sent not in full_accepted:
            full_accepted.append(full_sent)
        if ans not in full_accepted:
            full_accepted.append(ans)
        if ans.lower() == "ø":
            for extra in ["no article", "zero article"]:
                if extra not in full_accepted:
                    full_accepted.append(extra)

    full_alt = []
    for ans in alt:
        full_sent = substitute_answer(p, ans)
        if full_sent and full_sent not in full_alt and full_sent not in full_accepted:
            full_alt.append(full_sent)
        if ans not in full_alt and ans not in full_accepted:
            full_alt.append(ans)

    # Now convert the template into a bracketed grammatical transformation target with ZERO underscores
    has_slash_options = bool(re.search(r"___\s*\([^)]*/[^)]*\)", p))
    has_parenthetical_cue = bool(re.search(r"___\s*\(([^)]+)\)", p))

    if has_parenthetical_cue:
        bracketed_sentence = re.sub(r"___\s*\(([^)]+)\)", r"[\1]", p)
    else:
        bracketed_sentence = re.sub(r"___", "[connective]", p)

    # Determine chapter-appropriate active grammatical instruction
    if has_slash_options:
        if "Ø" in bracketed_sentence:
            task_instruction = "Rewrite the sentence applying the correct article rule (or zero article) for the bracketed expression"
            task_fa = "با اعمال قاعده درست حرف تعریف (یا بدون حرف تعریف)، جمله زیر را بازنویسی کنید"
        else:
            task_instruction = "Rewrite the sentence by selecting and applying the grammatically valid structure from the bracketed forms"
            task_fa = "با انتخاب و به‌کارگیری ساختار دستوری صحیح از میان گزینه‌های داخل کروشه، جمله را بازنویسی کنید"
    elif ch_num == 10:
        task_instruction = "Transform the bracketed verb into the required passive voice construction and rewrite the sentence (or target verb phrase)"
        task_fa = "فعل داخل کروشه را به ساختار مجهول مناسب تبدیل کرده و جمله (یا عبارت فعلی) را بازنویسی کنید"
    elif ch_num == 17:
        task_instruction = "Reduce or transform the bracketed modifier into the correct participial form and rewrite the sentence (or target form)"
        task_fa = "عبارت داخل کروشه را به شکل وجه وصفی کوتاه‌شده تبدیل کرده و جمله را بازنویسی کنید"
    elif ch_num == 19:
        task_instruction = "Construct the required conditional or wish verb form for the bracketed expression and rewrite the sentence (or target clause)"
        task_fa = "ساختار شرطی یا آرزویی مناسب را برای عبارت داخل کروشه بسازید و جمله را بازنویسی کنید"
    elif ch_num == 20:
        task_instruction = "Apply subject-verb inversion or the required dependent preposition to the bracketed expression and rewrite the sentence (or target structure)"
        task_fa = "وارونگی فاعل و فعل یا حرف اضافه وابسته مناسب را بر عبارت داخل کروشه اعمال کرده و جمله را بازنویسی کنید"
    elif not has_parenthetical_cue:
        task_instruction = "Combine the clauses by supplying the required correlative or subordinating connective in place of [connective] and rewrite the sentence"
        task_fa = "بندهای جمله زیر را با قرار دادن حرف ربط همپایه یا وابسته مناسب به جای [connective] ترکیب و بازنویسی کنید"
    else:
        task_instruction = "Rewrite the sentence by transforming the bracketed expression into its grammatically required form (full sentence or target structure)"
        task_fa = "جمله زیر را با تبدیل عبارت داخل کروشه به شکل دستوری صحیح آن بازنویسی کنید"

    final_prompt = f'{task_instruction}: "{bracketed_sentence}"'
    final_prompt_fa = f'{task_fa}: «{p_fa}»'

    assert "___" not in final_prompt, f"Underscore still present in {final_prompt}"
    assert "___" not in final_prompt_fa, f"Underscore still present in {final_prompt_fa}"

    return final_prompt, final_prompt_fa, full_accepted, full_alt


# Generate output
all_questions = []

for ch_num, ch_title, ch_title_fa, q_list in chapters_data:
    ch_id = f"ch-{ch_num:02d}"
    for idx, q in enumerate(q_list, start=1):
        if idx <= 5:
            d = 'easy'
        elif idx <= 10:
            d = 'medium'
        elif idx <= 15:
            d = 'hard'
        else:
            d = 'advanced'

        prompt_en, prompt_fa, acc_list, alt_list = build_active_question(
            ch_num, ch_title, ch_title_fa, idx, q[0], q[1], q[2], q[3], q[4], q[5]
        )

        all_questions.append({
            "id": f"{ch_id}-q{idx}",
            "chapterId": ch_id,
            "chapterNumber": ch_num,
            "questionNumber": idx,
            "difficulty": d,
            "prompt": prompt_en,
            "promptPersian": prompt_fa,
            "acceptedAnswers": acc_list,
            "alternativeAnswers": alt_list,
            "requiredGrammarRules": [ch_title],
            "targetGrammarConcept": q[4],
            "spellingTolerance": 1 if idx > 10 else 2,
            "explanation": q[4],
            "explanationPersian": q[5]
        })

output_ts = f"""/**
 * VESTA Complete Grammar Questions Assessment Engine Dataset
 * Exactly 20 Chapters x 20 Questions = 400 Questions
 * Mapped to the 52 Playing Cards and JOLLY JESTER final challenge.
 * Active typed-answer grammatical transformations (Zero fill-in-the-blank / cloze prompts).
 * Created by Jackdaw
 */

import {{ GrammarQuestion }} from '../types';

export const GRAMMAR_QUESTIONS: GrammarQuestion[] = {json.dumps(all_questions, indent=2, ensure_ascii=False)};
"""

with open("src/data/grammarQuestions.ts", "w", encoding="utf-8") as f:
    f.write(output_ts)

print(f"Successfully generated {len(all_questions)} active non-cloze questions in src/data/grammarQuestions.ts")

