/* =====================================================================
   QURANIC ARABIC — 60-DAY COURSE (complete beginner, English → fusha)
   No dates. Day 1, Day 2 … Do one when you sit down to study; mark it done and the calendar logs the date.
   Every day has: LEARN (the lesson) · QURAN (a passage pulled live: Uthmani Arabic + phonetic + meaning) ·
   MEMORIZE (what to have by heart) · SPEAK (say it out loud) · CHECK (you are done when…).
   Block types inside learn[]: {h} heading · {p} paragraph · {table, head} rows of [Arabic, say-it, meaning] ·
   {list} bullets · {tip} callout · {ar, tr, en} a single highlighted phrase.
===================================================================== */
window.ARABIC_COURSE = {
  title: 'Quranic Arabic — zero to fusha',
  goal: 'Read the Quran in Arabic, understand it word by word, and speak clear fusha (classical/Quranic Arabic). Every lesson stands on a real passage, so the Quran you memorize is the Arabic you learn.',
  key: [
    ['ā ī ū', 'long vowels — hold for two counts'],
    ['\'', 'hamza — the catch in the throat, like the gap in "uh-oh"'],
    ['ʿ', 'ʿayn — a deep squeeze from the throat, no English equivalent'],
    ['ḥ', 'a breathy h from deep in the throat (like fogging a mirror hard)'],
    ['kh · gh', 'kh as in Scottish "loch"; gh like a French r'],
    ['ṣ ḍ ṭ ẓ', 'heavy (emphatic) letters — say them with a full, deep mouth'],
    ['th · dh', 'th as in "think"; dh as in "this"'],
    ['q', 'a k from the very back of the throat'],
    ['doubled letter (bb, mm…)', 'shadda — hold the letter, it counts twice'],
  ],
  phases: [
    { id:1, name:'Read the script', range:[1,12], blurb:'Letters, vowels, connecting, the definite article, and enough tajweed to read the short surahs correctly. By Day 12 you read Arabic unaided.' },
    { id:2, name:'Words of the Quran', range:[13,30], blurb:'The particles, pronouns and ~150 words that make up half of the Quran. By Day 30 you follow Al-Fatihah, the last ten surahs and Ayat al-Kursi word by word.' },
    { id:3, name:'Grammar that unlocks the Quran', range:[31,45], blurb:'Sentences, verb forms, case endings, conditionals. By Day 45 you can parse an ayah and know why every word ends the way it does.' },
    { id:4, name:'Speak fusha', range:[46,60], blurb:'Daily speech, describing your day and your work, dua in your own words, hadith, unvowelled text. By Day 60 you hold a conversation in fusha and recite Al-Mulk.' },
  ],
  days: [

  /* ================= PHASE 1 — READ THE SCRIPT ================= */
  { n:1, phase:1, title:'How Arabic works + the first six letters', focus:'ب ت ث ن ي ا · right-to-left · how to read the phonetics',
    learn:[
      {h:'Four facts that make Arabic easy to start'},
      {list:[
        'Arabic reads right to left. Your eye starts at the right edge of the line.',
        'There are 28 letters. Almost all are consonants; the short vowels are small marks written above or below (you meet them tomorrow).',
        'Letters join to their neighbours like handwriting, so each letter has up to four looks: alone, at the start, in the middle, at the end. The core shape never changes — only the tail.',
        'There are no capital letters and spelling is phonetic: once you know the marks, every word is read exactly as written.'
      ]},
      {h:'Family one — the "boat" letters'},
      {p:'These five share one boat-shaped body and differ only by dots. Say each sound out loud, then trace it with your finger from right to left.'},
      {table:[['ب','b','one dot below · like b in "boy"'],['ت','t','two dots above · like t in "tea"'],['ث','th','three dots above · th in "think"'],['ن','n','one dot above (rounder body) · like n'],['ي','y / ī','two dots below · y in "yes"; at the end of a word it is the long ī']],head:['Letter','Sound','How to say it']},
      {h:'Alif — the tall one'},
      {table:[['ا','ā','a straight stroke. Alone it is the long "aa" (hold it two counts). It never joins to the letter after it.']],head:['Letter','Sound','Note']},
      {h:'Shapes: alone · start · middle · end'},
      {table:[['ب  بـ  ـبـ  ـب','b','the boat loses its tail when something follows'],['ت  تـ  ـتـ  ـت','t',''],['ن  نـ  ـنـ  ـن','n','the end/alone form dips below the line'],['ي  يـ  ـيـ  ـي','y','end form swings under the line']],head:['Forms (right→left: alone, start, middle, end)','','']},
      {tip:'Read the phonetics column exactly as the key at the top of the Study tab says: ā ī ū are long, doubled letters are held, ḥ and ʿ come from the throat. Never guess an English pronunciation.'},
      {h:'Your first Quranic word'},
      {ar:'بَيْت', tr:'bayt', en:'a house · ب + ي + ت'},
      {p:'Find the three letters, right to left: bā (boat, dot below) → yā (two dots below, middle form) → tā (two dots above, end form).'}
    ],
    quran:{ s:1, from:1, to:1, note:'The Basmala. Do not try to read every letter yet — listen to the phonetic, find the bā of بِسْمِ at the far right, and notice the alif of ٱللَّه standing tall.' },
    memorize:'The Basmala with correct sounds: Bismillāhir-raḥmānir-raḥīm — "In the name of Allah, the Entirely Merciful, the Especially Merciful."',
    speak:['Say the six letter sounds b · t · th · n · y · ā ten times each, then the Basmala five times, slowly, from the throat where the key says.'],
    check:'You can name and write ب ت ث ن ي ا from memory in their alone form, and say the Basmala without reading.' },

  { n:2, phase:1, title:'The short vowels + sukūn', focus:'fatḥa · kasra · ḍamma · sukūn — reading syllables',
    learn:[
      {h:'The three short vowels'},
      {p:'A consonant on its own is silent. A small mark tells you which vowel follows it. All three are short — one quick count.'},
      {table:[['بَ','ba','fatḥa: a small stroke ABOVE · a as in "cat" (or "father" after heavy letters)'],['بِ','bi','kasra: a small stroke BELOW · i as in "sit"'],['بُ','bu','ḍamma: a tiny و ABOVE · u as in "put"'],['بْ','b','sukūn: a small circle · NO vowel — the letter stops dead']],head:['Mark','Say','What it is']},
      {h:'Read the syllables'},
      {table:[['تَ · تِ · تُ','ta · ti · tu',''],['نَ · نِ · نُ','na · ni · nu',''],['يَ · يِ · يُ','ya · yi · yu',''],['ثَ · ثِ · ثُ','tha · thi · thu','']],head:['Syllables','Say','']},
      {h:'Whole words from yesterday\'s letters'},
      {table:[['بِنْت','bint','a girl / daughter'],['بَيْت','bayt','a house'],['تِينٌ','tīn','fig (Surah At-Tīn is named after it)'],['نَبِيّ','nabiyy','a prophet'],['أَنْتَ','anta','you (masc.) — the first letter is hamza on an alif, met on Day 7'],['بَنَاتٌ','banāt','girls (a long ā inside)']],head:['Word','Say','Meaning']},
      {tip:'The sukūn is what makes بِنْت "bint" and not "binit". Arabic never adds a vowel that is not written.'},
      {h:'In the Quran'},
      {p:'ٱلْحَمْدُ — al-ḥamdu — "the praise". Find the sukūn on the lām (ل) and the ḍamma on the dāl (د). Every mark you learned today is in this one word.'}
    ],
    quran:{ s:1, from:2, to:2, note:'Al-Fatihah verse 2. Read the phonetic line while your finger tracks the Arabic right to left. Spot every fatḥa, kasra, ḍamma and sukūn you can.' },
    memorize:'Al-Fatihah 1:1–2 — Bismillāh… then Al-ḥamdu lillāhi rabbil-ʿālamīn — "All praise is due to Allah, Lord of the worlds."',
    speak:['Read the twelve syllables in the table aloud three times, clapping once per syllable so short vowels stay short.','Recite 1:1–2 five times.'],
    check:'Show someone (or yourself in a mirror) a word like بِنْت and read it correctly first time.' },

  { n:3, phase:1, title:'Letters from the throat: ج ح خ · and ر ز و', focus:'jīm · ḥā · khā · rā · zāy · wāw',
    learn:[
      {h:'Family two — the hook letters'},
      {table:[['ج','j','one dot inside · j as in "jam"'],['ح','ḥ','no dot · breathy h from deep in the throat — like fogging a mirror'],['خ','kh','one dot above · like clearing your throat, Scottish "loch"']],head:['Letter','Sound','How']},
      {p:'These three share the hook body. Forms: جـ ـجـ ـج. Practise ḥ by whispering "h" while squeezing the throat; it must not sound like the English h (that is a different letter, هـ, on Day 5).'},
      {h:'Family three — the non-connectors'},
      {table:[['ر','r','a rolled/tapped r, always. Never the English r.'],['ز','z','rā with a dot · z as in "zoo"'],['و','w / ū','w as in "we"; with no vowel after a ḍamma it is the long ū']],head:['Letter','Sound','How']},
      {tip:'ر ز و (and ا د ذ from tomorrow) never join to the letter AFTER them. So the next letter starts fresh in its "alone/start" form even in the middle of a word. This is why Arabic words seem to have gaps inside them.'},
      {h:'Long vowels arrive'},
      {table:[['بَا','bā','fatḥa + alif = long ā'],['بِي','bī','kasra + yā (no vowel on it) = long ī'],['بُو','bū','ḍamma + wāw (no vowel on it) = long ū'],['نُور','nūr','light'],['خَيْر','khayr','good / goodness'],['رَبّ','rabb','Lord (the doubled b is a shadda — Day 6)']],head:['Word','Say','Meaning']},
      {h:'Words to read'},
      {table:[['جَنَّة','jannah','garden / paradise'],['حَبِيب','ḥabīb','beloved'],['خُبْز','khubz','bread'],['رَحِيم','raḥīm','merciful (hold the ī)'],['زَيْت','zayt','oil'],['يَوْم','yawm','a day']],head:['Word','Say','Meaning']}
    ],
    quran:{ s:1, from:3, to:4, note:'Verses 3–4 of Al-Fatihah: ٱلرَّحْمَٰنِ ٱلرَّحِيمِ has your new ḥ twice, and مَٰلِكِ يَوْمِ ٱلدِّينِ has yawm from the table. Read the phonetic, then find each letter.' },
    memorize:'Al-Fatihah 1:3–4 — Ar-raḥmānir-raḥīm · Māliki yawmid-dīn — "The Entirely Merciful, the Especially Merciful · Sovereign of the Day of Recompense."',
    speak:['Alternate ḥ and h (English) ten times until they feel like two different letters.','Roll every rā in the word list. Recite 1:1–4.'],
    check:'You can produce ḥ, kh and a rolled r on demand and read نُور, خَيْر, يَوْم unaided.' },

  { n:4, phase:1, title:'د ذ س ش ص ض — and the heavy letters', focus:'dāl · dhāl · sīn · shīn · ṣād · ḍād',
    learn:[
      {h:'Two more non-connectors'},
      {table:[['د','d','like d · never joins forward'],['ذ','dh','dāl with a dot · th as in "this" (voiced)']],head:['Letter','Sound','How']},
      {h:'The tooth letters'},
      {table:[['س','s','three teeth · s as in "sun"'],['ش','sh','three dots above · sh as in "ship"']],head:['Letter','Sound','How']},
      {h:'Your first HEAVY letters'},
      {p:'Arabic has a set of emphatic letters made with the back of the tongue raised and the mouth full. They change the vowel next to them: fatḥa sounds like "o" in "hot" rather than "a" in "cat". Getting these right is what makes Arabic sound Arabic.'},
      {table:[['ص','ṣ','a heavy s · say "s" with the tongue pulled back and low'],['ض','ḍ','a heavy d · the famous letter Arabic is named after (lughat aḍ-ḍād)']],head:['Letter','Sound','How']},
      {table:[['سَبَّحَ','sabbaḥa','he glorified'],['صَبَرَ','ṣabara','he was patient — hear the heavy ṣ'],['دِين','dīn','religion / judgement'],['ذِكْر','dhikr','remembrance'],['شَمْس','shams','sun'],['ضَرَبَ','ḍaraba','he struck'],['صِرَاط','ṣirāṭ','path (both ṣ and ṭ are heavy — you meet ṭ tomorrow)']],head:['Word','Say','Meaning']},
      {tip:'Light vs heavy pairs to drill in front of a mirror: س / ص (sa / ṣa) and د / ض (da / ḍa). Same tongue tip, different back-of-tongue.'}
    ],
    quran:{ s:1, from:5, to:5, note:'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ — "You alone we worship, You alone we ask for help." Find the sīn in نَسْتَعِينُ and the doubled yā (shadda) in إِيَّاكَ.' },
    memorize:'Al-Fatihah 1:5 — Iyyāka naʿbudu wa iyyāka nastaʿīn.',
    speak:['Drill sa/ṣa and da/ḍa twenty times each, exaggerating the heavy ones.','Recite 1:1–5 from memory.'],
    check:'You hear the difference between سَ and صَ when you say them, and can read صِرَاط and ذِكْر.' },

  { n:5, phase:1, title:'The last ten letters: ط ظ ع غ ف ق ك ل م هـ', focus:'finishing the alphabet · whole Fatihah in hand',
    learn:[
      {h:'Heavy pair'},
      {table:[['ط','ṭ','a heavy t · mouth full, tongue back'],['ظ','ẓ','a heavy dh · the dot makes it ẓ']],head:['Letter','Sound','How']},
      {h:'The throat pair everyone fears'},
      {table:[['ع','ʿ','ʿayn: squeeze the throat as if lifting something heavy while voicing — a deep vowel-like sound. No English equivalent; it is NOT silent.'],['غ','gh','ʿayn with a dot · a gargled French r']],head:['Letter','Sound','How']},
      {h:'The rest'},
      {table:[['ف','f','one dot · f'],['ق','q','two dots · k from the very back of the throat'],['ك','k','k as in "kite" (the alone/end form has a small mark inside)'],['ل','l','l — the tall hook'],['م','m','m — a small loop, tail goes under at the end'],['هـ','h','the ordinary English h · shapes: ه هـ ـهـ ـه']],head:['Letter','Sound','How']},
      {h:'The 28, in order (right to left)'},
      {ar:'ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن هـ و ي', tr:'alif bā tā thā jīm ḥā khā dāl dhāl rā zāy sīn shīn ṣād ḍād ṭā ẓā ʿayn ghayn fā qāf kāf lām mīm nūn hā wāw yā', en:'Say the names in order — you will use this order for every dictionary for the rest of your life.'},
      {table:[['عِلْم','ʿilm','knowledge'],['قَلْب','qalb','heart'],['كِتَاب','kitāb','book'],['مَلِك','malik','king'],['غَفُور','ghafūr','forgiving'],['طَرِيق','ṭarīq','road'],['عَظِيم','ʿaẓīm','great, mighty'],['فَجْر','fajr','dawn'],['هُدًى','hudan','guidance (the ending is tanwīn — Day 6)']],head:['Word','Say','Meaning']},
      {tip:'ʿayn drill: say "ah" and, without stopping the sound, tighten the throat until the tone drops and buzzes. That buzz is ʿ. Now put it before "ilm": ʿilm.'}
    ],
    quran:{ s:1, from:6, to:7, note:'Verses 6–7 complete Al-Fatihah. ٱلْمُسْتَقِيمَ has qāf; أَنْعَمْتَ and عَلَيْهِمْ have ʿayn; ٱلضَّآلِّينَ has the heavy ḍād held long (six counts) — the longest sound in the surah.' },
    memorize:'All of Al-Fatihah (1:1–7) with the phonetics. This is the surah you will pray with for life — take an extra day here if you need it.',
    speak:['Read the alphabet aloud in order three times.','Recite Al-Fatihah slowly, then at prayer speed.'],
    check:'You can write all 28 letters in their alone form from memory and recite Al-Fatihah without the text.' },

  { n:6, phase:1, title:'Shadda, tanwīn and the long vowels', focus:'doubling · the -an/-in/-un endings · reading Al-Ikhlāṣ',
    learn:[
      {h:'Shadda — the doubled letter'},
      {p:'A small "w"-shaped mark (ّ) above a letter means the letter is doubled: you close on it and hold it before releasing. It always carries a vowel mark too. This is why رَبّ is "rabb" and ٱللَّه has a held l.'},
      {table:[['رَبُّ','rabbu','Lord'],['مُحَمَّد','muḥammad','Muhammad — hold the m'],['ٱلصَّمَد','aṣ-ṣamad','the Eternal Refuge (Al-Ikhlāṣ 112:2)'],['إِنَّ','inna','indeed'],['جَنَّة','jannah','garden']],head:['Word','Say','Meaning']},
      {h:'Tanwīn — the "n" you do not see'},
      {p:'Two fatḥas, two kasras or two ḍammas at the END of a noun add an n sound: -an, -in, -un. It means the noun is indefinite ("a book", not "the book"). Only nouns take it; it disappears when you stop on the word.'},
      {table:[['كِتَابٌ','kitābun','a book (subject form)'],['كِتَابًا','kitāban','a book (object form — note the extra alif)'],['كِتَابٍ','kitābin','of a book (after "of" or a preposition)'],['أَحَدٌ','aḥadun','one / anyone'],['كُفُوًا','kufuwan','an equal']],head:['Word','Say','Meaning']},
      {h:'Long vowels — the full rule'},
      {list:[
        'fatḥa + ا  → ā   (قَال qāl)',
        'kasra + ي (no vowel on the yā) → ī   (فِي fī)',
        'ḍamma + و (no vowel on the wāw) → ū   (نُور nūr)',
        'If the ي or و DOES carry a vowel it is a consonant y/w: يَوْم yawm, بَيْت bayt.'
      ]},
      {tip:'When you stop at the end of an ayah, drop the last vowel and any tanwīn: أَحَدٌ becomes "aḥad", ٱلصَّمَدُ becomes "aṣ-ṣamad". That is why the recitation phonetics end in a consonant.'}
    ],
    quran:{ s:112, from:1, to:4, note:'Al-Ikhlāṣ — worth a third of the Quran in reward. Every rule from today is here: shadda in ٱللَّهُ and ٱلصَّمَدُ, tanwīn in أَحَدٌ and كُفُوًا, a long ū in يُولَدْ.' },
    memorize:'Al-Ikhlāṣ (112) — Qul huwallāhu aḥad · Allāhuṣ-ṣamad · Lam yalid wa lam yūlad · Wa lam yakul-lahū kufuwan aḥad.',
    speak:['Say kitābun · kitāban · kitābin ten times to feel the three endings.','Recite Al-Ikhlāṣ ten times, holding every shadda.'],
    check:'You read اَللّٰهُ الصَّمَدُ correctly on sight and can explain what the two marks on أَحَدٌ do.' },

  { n:7, phase:1, title:'Hamza, tā marbūṭa, alif maqṣūra, lām-alif', focus:'the special letters that trip beginners',
    learn:[
      {h:'Hamza ء — the catch in the throat'},
      {p:'Hamza is the glottal stop: the gap in "uh-oh". It is a real letter but it sits on a carrier: on an alif (أ إ), on a wāw (ؤ), on a yā without dots (ئ), or alone on the line (ء). The carrier is silent; you pronounce only the catch plus its vowel.'},
      {table:[['أَنَا','anā','I'],['إِلَىٰ','ilā','to, towards'],['أُمّ','umm','mother'],['مُؤْمِن','mu\'min','a believer'],['سُئِلَ','su\'ila','he was asked'],['سَمَآءٌ','samā\'un','sky (hamza after a long ā)']],head:['Word','Say','Meaning']},
      {h:'Tā marbūṭa ة — the "tied" t'},
      {p:'A hā with two dots on top marks a feminine noun. Pronounce it "t" when you keep reading (rahmatu-llāh) and "h" when you stop (raḥmah).'},
      {table:[['رَحْمَة','raḥmah / raḥmat-','mercy'],['صَلَاة','ṣalāh / ṣalāt-','prayer'],['جَنَّة','jannah','garden'],['مَدِينَة','madīnah','city']],head:['Word','Say','Meaning']},
      {h:'Alif maqṣūra ى — the alif that looks like a yā'},
      {table:[['عَلَىٰ','ʿalā','on, upon'],['إِلَىٰ','ilā','to'],['هُدًى','hudan','guidance'],['مُوسَىٰ','mūsā','Moses']],head:['Word','Say','Meaning']},
      {h:'Lām-alif لا'},
      {p:'When lām is followed by alif they are written as one shape: لا (lā). لَا = "no / not". Not a new letter — just a ligature.'},
      {tip:'In Uthmani script the small alif written above a letter (ٰ) is a full long ā: إِلَىٰ = ilā, ٱلرَّحْمَٰنِ = ar-raḥmān. Do not skip it.'}
    ],
    quran:{ s:113, from:1, to:5, note:'Al-Falaq: أَعُوذُ starts with hamza (a-ʿūdhu), شَرِّ has a shadda, ٱلنَّفَّٰثَٰتِ ends in the feminine plural. Read it with the phonetic twice, then alone.' },
    memorize:'Al-Falaq (113) — Qul aʿūdhu bi rabbil-falaq…',
    speak:['Practise the glottal stop: say "uh-oh" then "a-ʿūdhu", keeping the catch.','Recite Al-Falaq five times; stop on the last word of each ayah with an "h" for tā marbūṭa where there is one.'],
    check:'You can read a word carrying hamza on any carrier and know when ة is "t" and when it is "h".' },

  { n:8, phase:1, title:'The definite article ال · sun and moon letters', focus:'al- · assimilation · "the" in Arabic',
    learn:[
      {h:'"The" is glued on'},
      {p:'Arabic has no separate word for "the". You add ال (al-) to the front of the noun and drop any tanwīn: كِتَابٌ (a book) → ٱلْكِتَابُ (the book).'},
      {h:'Moon letters — al- stays al-'},
      {p:'With these 14 letters you hear the l: ا ب ج ح خ ع غ ف ق ك م هـ و ي'},
      {table:[['ٱلْقَمَر','al-qamar','the moon'],['ٱلْكِتَاب','al-kitāb','the book'],['ٱلْحَمْد','al-ḥamd','the praise'],['ٱلْعَالَمِين','al-ʿālamīn','the worlds'],['ٱلْمَلِك','al-malik','the king']],head:['Word','Say','Meaning']},
      {h:'Sun letters — the l melts into the next letter'},
      {p:'With these 14 letters the l is written but NOT pronounced; instead the next letter doubles (it takes a shadda): ت ث د ذ ر ز س ش ص ض ط ظ ل ن'},
      {table:[['ٱلشَّمْس','ash-shams','the sun'],['ٱلرَّحْمَٰن','ar-raḥmān','the Most Merciful'],['ٱلدِّين','ad-dīn','the religion'],['ٱلنَّاس','an-nās','the people / mankind'],['ٱلصَّلَاة','aṣ-ṣalāh','the prayer'],['ٱلنُّور','an-nūr','the light']],head:['Word','Say','Meaning']},
      {tip:'Memory hook: sun letters are all made with the tip of the tongue — the same place the l lives, so they swallow it. Moon letters come from the lips or the throat.'},
      {h:'Waṣla ٱ'},
      {p:'In the Quran the alif of ال carries a small ṣ-shaped mark (ٱ). It means: if you are already reading, skip this alif and run straight in — بِسْمِ ٱللَّهِ is "bismi-llāh", not "bismi allāh". If you START on it, say "a".'}
    ],
    quran:{ s:114, from:1, to:6, note:'An-Nās — ٱلنَّاسِ appears five times; every one is a sun letter with the l melted. ٱلْخَنَّاسِ and ٱلْجِنَّةِ are moon letters where you hear the l.' },
    memorize:'An-Nās (114). You now hold the three Quls (112–114) — recite them each night as the Prophet ﷺ did.',
    speak:['Read the twelve "the" words aloud, sorting each as sun or moon before you say it.','Recite 112, 113, 114 in a row.'],
    check:'Given any noun, you can add al- and say it correctly (ash-, ar-, an- vs al-).' },

  { n:9, phase:1, title:'Reading the Uthmani script', focus:'small alif · dropped alifs · silent letters · stopping rules',
    learn:[
      {h:'Why the Quran looks different from a textbook'},
      {p:'The Quran is printed in Uthmani script, which keeps the spelling of the original written copies. A few marks are added so it is still read exactly. Once you know these five, nothing surprises you.'},
      {table:[['ٰ  (small alif above)','ā','a full long vowel: ٱلْعَٰلَمِينَ al-ʿālamīn, ذَٰلِكَ dhālika'],['ۦ / ۥ (small yā, small wāw)','ī / ū','a long vowel on a pronoun: بِهِۦ bihī, لَهُۥ lahū'],['ٱ (waṣla)','—','alif skipped when running on'],['ۡ  small circle / ° over a letter','silent','the letter is not pronounced (often an alif or wāw after a plural: قَالُواْ qālū)'],['ۢ / ۭ small mīm','m','a nūn or tanwīn turned into m before a bā: مِنۢ بَعْدِ mim-baʿdi (Day 11)']],head:['Mark','Read as','Example']},
      {h:'Stopping (waqf)'},
      {list:[
        'When you stop, the last vowel and tanwīn drop: أَحَدٌ → aḥad; ٱلْعَٰلَمِينَ → al-ʿālamīn.',
        'If the last letter is ة, stop with "h": ٱلْقَارِعَةُ → al-qāriʿah.',
        'If the word ends in -an (fatḥa tanwīn), stop with a long ā: كُفُوًا → kufuwā.',
        'Stop signs above the line: مـ must stop · لا do not stop · ج either is fine · ۛ  ۛ stop at one of the pair.'
      ]},
      {h:'Long words, piece by piece'},
      {p:'Take نَسْتَعِينُ (nastaʿīn): نَسْ — تَ — عِي — نُ. Cut every word into syllables at the sukūn and long vowels and it reads itself.'},
      {table:[['يَسْتَغْفِرُونَ','yas-tagh-fi-rūn','they seek forgiveness'],['فَسَبِّحْ','fa-sab-biḥ','so glorify'],['ٱلْمُسْتَقِيمَ','al-mus-ta-qīm','the straight']],head:['Word','Cut it up','Meaning']}
    ],
    quran:{ s:108, from:1, to:3, note:'Al-Kawthar (shortest surah) — then read Al-ʿAṣr (103) the same way. Look for the small circle over the alif in the plural verbs and the stop marks at the ayah ends.' },
    memorize:'Al-Kawthar (108) and Al-ʿAṣr (103).',
    speak:['Cut each word of Al-Kawthar into syllables aloud, then say it whole.','Recite 103 and 108 three times each.'],
    check:'You can read an ayah you have never seen in the reader with only the Arabic and stop correctly at its end.' },

  { n:10, phase:1, title:'Tajweed I — madd and qalqalah', focus:'how long to hold · the five bouncing letters',
    learn:[
      {h:'Madd — stretching'},
      {list:[
        'Natural madd: every long vowel (ā ī ū) is held two counts. Count "one-two" in your head. Not one, not three.',
        'Madd with hamza: if a hamza follows the long vowel in the same word (جَآءَ jā-a, ٱلسَّمَآءِ), hold 4–5 counts. In the Quran you will see a wavy ~ (مدّ) above it.',
        'Madd with sukūn / shadda: a long vowel followed by a doubled or vowelless letter is held 6 counts — ٱلضَّآلِّينَ (aḍ-ḍāllīn) in Al-Fatihah.',
        'Madd at a stop: when you stop on a word ending in a long vowel + consonant (ٱلْعَٰلَمِينَ, نَسْتَعِينُ), you may hold 2, 4 or 6 — be consistent.'
      ]},
      {h:'Qalqalah — the bounce'},
      {p:'Five letters echo when they carry a sukūn or when you stop on them: ق ط ب ج د (remember: quṭb jad). You release a small bounce of sound, not a vowel.'},
      {table:[['ٱلْفَلَقِ (stopping)','al-falaq(bounce)','113:1'],['أَحَدْ (stopping)','aḥad(bounce)','112:1'],['يَجْعَلْ','yaj-ʿal','the jīm bounces mid-word'],['قُطْب','quṭb','both ṭ and b bounce']],head:['Word','Effect','Where']},
      {tip:'Listen to a reciter once a day from now on (Husary for clarity, Minshawi for beauty). Play one ayah, pause, copy it exactly — this is called shadowing and it is the fastest tajweed teacher there is.'}
    ],
    quran:{ s:110, from:1, to:3, note:'An-Naṣr — جَآءَ has madd with hamza (hold it 4–5 counts). Stop on تَوَّابًۢا with a long ā. There is no qalqalah in this surah — the bouncing letters are only ق ط ب ج د; find the two long holds in verse 1 instead.' },
    memorize:'An-Naṣr (110).',
    speak:['Say aḍ-ḍāllīn counting six on the ā.','Bounce the five qalqalah letters with sukūn: aq · aṭ · ab · aj · ad, ten times.'],
    check:'You hold every madd for the right count in Al-Fatihah and bounce the last letter of Al-Falaq and Al-Ikhlāṣ.' },

  { n:11, phase:1, title:'Tajweed II — nūn sākinah, tanwīn, ghunnah, heavy rā', focus:'the four rules of the hidden n · the nasal hum',
    learn:[
      {h:'When an n has no vowel'},
      {p:'A nūn with sukūn (نْ) or any tanwīn (-an/-in/-un) is followed by a letter, and that next letter decides what happens to the n. Four cases — learn the first two well, recognise the other two.'},
      {table:[['1 · Iẓhār (clear)','before throat letters ء هـ ع ح غ خ','say the n clearly: مِنْ عِلْمٍ min ʿilm · أَنْعَمْتَ anʿamta'],['2 · Idghām (merge)','before ي ر م ل و ن','the n disappears into the next letter: مِن رَّبِّهِمْ mir-rabbihim · مَن يَعْمَلْ may-yaʿmal (with a hum on ي ن م و, none on ل ر)'],['3 · Iqlāb (flip)','before ب','the n becomes m with a hum: أَنۢبِئْهُمْ ambi\'hum · سَمِيعٌۢ بَصِيرٌ samīʿum-baṣīr'],['4 · Ikhfā\' (hide)','before the other 15 letters','a light nasal n, tongue not touching: مِن شَرِّ min-sharr (hum through the nose) · أَنتُمْ antum']],head:['Rule','When','How']},
      {h:'Ghunnah — the hum'},
      {p:'Any نّ or مّ (nūn or mīm with shadda) gets a two-count nasal hum: إِنَّ inna, ثُمَّ thumma, ٱلْجِنَّةِ al-jinnah. Let the sound come through your nose.'},
      {h:'Heavy rā'},
      {p:'ر is heavy (full mouth) when it carries fatḥa or ḍamma (رَبّ rabb, نُور nūr) and light when it carries kasra (رِزْق rizq). The word ٱللَّه has a heavy l after fatḥa/ḍamma (Allāh) and a light one after kasra (bismi-llāh).'},
      {tip:'These rules exist so the Quran sounds exactly as it was revealed. Do not stress about perfection now — apply iẓhār and idghām, hum every shadda-n and shadda-m, and let shadowing fix the rest.'}
    ],
    quran:{ s:111, from:1, to:5, note:'Al-Masad: مَّا in verse 2 (mā with a hum), and حَبْلٌ مِّن (ḥablum-mim — tanwīn merging into m). Then Al-Fīl (105): بِحِجَارَةٍ مِّن and كَعَصْفٍ مَّأْكُولٍ both merge a tanwīn into mīm with a hum, and يَجْعَلْ bounces its jīm (qalqalah).' },
    memorize:'Al-Masad (111) and Al-Fīl (105).',
    speak:['Say inna · thumma · al-jinnah with a real two-count hum.','Read verse 2 of Al-Masad merging the tanwīn into the mīm.'],
    check:'You can point at any نْ or tanwīn in the last three surahs and say which of the four rules applies.' },

  { n:12, phase:1, title:'Phase 1 review — read the last ten surahs unaided', focus:'self-test · fluency · what "reading" now means',
    learn:[
      {h:'The test'},
      {list:[
        'Open the reader on each of 105–114 with the phonetic line OFF (tap "Phonetic" in the reader). Read every ayah aloud. Turn phonetics on only to check.',
        'Score yourself: a word you had to stop and decode = 1 point. Under 10 points across all ten surahs = you read Arabic. Over 20 = repeat Days 6–9 before moving on.',
        'Write out the alphabet in order, then write these five words from memory: كِتَاب، رَحْمَة، ٱلشَّمْس، مُؤْمِن، إِلَىٰ.'
      ]},
      {h:'What you can now do'},
      {p:'You can read any vowelled Arabic text — Quran, hadith, children\'s books, street signs in Madinah. You do not yet know what most of it means. Phase 2 fixes that: the Quran uses about 1,800 root words in total, and 150 of them make up half of every page. You will learn those 150 next, all from surahs you already recite.'},
      {h:'Keep for life'},
      {list:['5 minutes of shadowing a reciter every day (Al-Fatihah + the three Quls at minimum).','Read the day\'s ayahs in the Quran tab with phonetics off, then on to check.','Say the alphabet whenever you need the order of a dictionary.']}
    ],
    quran:{ s:106, from:1, to:4, note:'Quraysh (106) then Al-Māʿūn (107): two surahs you have not studied. Read them cold — this is the real test.' },
    memorize:'Quraysh (106) and Al-Māʿūn (107). You now have Al-Fatihah + surahs 103, 105–114 by heart.',
    speak:['Recite everything memorized so far in one sitting: 1, 103, 105, 106, 107, 108, 109 (Day 13), 110, 111, 112, 113, 114.'],
    check:'Scored under 10 on the reading test and can write the five words from memory. Phase 1 complete.' },

  /* ================= PHASE 2 — WORDS OF THE QURAN ================= */
  { n:13, phase:2, title:'Three kinds of word + the particles that hold the Quran together', focus:'ism · fiʿl · ḥarf · the 15 most frequent particles',
    learn:[
      {h:'Every Arabic word is one of three things'},
      {table:[['ٱسْم  ism','a noun','names a thing, person, quality, place — includes adjectives and pronouns. Can take al- or tanwīn.'],['فِعْل  fiʿl','a verb','an action tied to a time: past, present or command.'],['حَرْف  ḥarf','a particle','a small connector with no meaning on its own: "and", "in", "from", "not".']],head:['Type','English','How to spot it']},
      {h:'The particles — learn these and a third of the Quran is already yours'},
      {table:[['وَ','wa','and (glued to the next word)'],['فَ','fa','so / then (glued on)'],['فِي','fī','in'],['مِن','min','from / of'],['إِلَىٰ','ilā','to, towards'],['عَلَىٰ','ʿalā','on, upon, against'],['عَن','ʿan','about, away from'],['لِ / لَ','li / la','for, to / (emphasis: surely)'],['بِ','bi','with, by, in'],['إِنَّ','inna','indeed, truly'],['أَنَّ','anna','that'],['لَا','lā','no / not (present & general)'],['مَا','mā','not (past) / what'],['إِن','in','if'],['ثُمَّ','thumma','then, afterwards']],head:['Particle','Say','Meaning']},
      {tip:'وَ fa لِ بِ are one letter and are written joined to the next word: وَٱللَّهُ wallāhu "and Allah", بِسْمِ bismi "in the name", لِلَّهِ lillāhi "for Allah".'},
      {h:'See them in Al-Kāfirūn'},
      {ar:'لَكُمْ دِينُكُمْ وَلِيَ دِينِ', tr:'lakum dīnukum wa liya dīn', en:'For you is your religion, and for me is my religion. (li + kum · wa · li + ya)'}
    ],
    quran:{ s:109, from:1, to:6, note:'Al-Kāfirūn — count the particles: وَ appears five times, لَا four times, لِ twice. Mark each one before you read the meaning.' },
    memorize:'Al-Kāfirūn (109) and the 15 particles with their meanings.',
    speak:['Say each particle with an example: fī + bayt = fī bayt (in a house); min + Allāh = minallāh (from Allah); ʿalā + al-arḍ = ʿalal-arḍ (on the earth).'],
    check:'You can cover the English column and give the meaning of all 15 particles.' },

  { n:14, phase:2, title:'Pronouns — I, you, he, she, we, they', focus:'the detached pronouns · huwa/hiya/anta/anā',
    learn:[
      {h:'The eight you need first'},
      {table:[['أَنَا','anā','I'],['أَنتَ','anta','you (one man)'],['أَنتِ','anti','you (one woman)'],['هُوَ','huwa','he / it'],['هِيَ','hiya','she / it'],['نَحْنُ','naḥnu','we'],['أَنتُمْ','antum','you (plural)'],['هُمْ','hum','they']],head:['Pronoun','Say','Meaning']},
      {h:'The ones you will meet in the Quran too'},
      {table:[['أَنتُمَا · هُمَا','antumā · humā','you two · they two (the dual)'],['أَنتُنَّ · هُنَّ','antunna · hunna','you (women) · they (women)']],head:['Pronoun','Say','Meaning']},
      {h:'Arabic has no "is"'},
      {p:'To say "he is a believer" you just put the two words together: هُوَ مُؤْمِنٌ huwa mu\'min. "Allah is One": ٱللَّهُ أَحَدٌ. The verb "to be" is understood in the present tense.'},
      {table:[['أَنَا مُسْلِمٌ','anā muslim','I am a Muslim'],['هُوَ ٱللَّهُ','huwallāh','He is Allah (112:1)'],['نَحْنُ مُؤْمِنُونَ','naḥnu mu\'minūn','we are believers'],['أَنتُمْ عَٰبِدُونَ','antum ʿābidūn','you are worshippers (109:3)'],['هِيَ جَنَّةٌ','hiya jannah','it (fem.) is a garden']],head:['Sentence','Say','Meaning']},
      {tip:'Every noun is masculine or feminine, so "it" is هُوَ for a masculine thing (كِتَاب) and هِيَ for a feminine one (شَمْس). Words ending in ة are feminine; a few others (شَمْس sun, أَرْض earth, نَار fire, يَد hand) are feminine by tradition.'}
    ],
    quran:{ s:112, from:1, to:2, note:'قُلْ هُوَ ٱللَّهُ أَحَدٌ — "Say: He is Allah, One." Then look again at Al-Kāfirūn 109:3–5 for أَنتُمْ and أَنَا.' },
    memorize:'The eight pronouns. Recite 109 and 112 pointing at every pronoun.',
    speak:['Say ten true sentences of the shape [pronoun] + [noun]: anā ʿāmil (I am a worker), huwa muslim, hiya ummī (she is my mother)…'],
    check:'You can translate "you (m), you (f), we, they" into Arabic without hesitating.' },

  { n:15, phase:2, title:'Attached pronouns — my, your, his, our; me, you, him', focus:'-ī -ka -ki -hu -hā -nā -kum -hum',
    learn:[
      {h:'One suffix does two jobs'},
      {p:'Stuck to a noun the suffix means "my/your/his…"; stuck to a verb or particle it means "me/you/him…". The set is the same.'},
      {table:[['ـِي  (ـنِي on verbs)','-ī (-nī)','my / me'],['ـكَ','-ka','your / you (m)'],['ـكِ','-ki','your / you (f)'],['ـهُ','-hu','his / him / its'],['ـهَا','-hā','her / its'],['ـنَا','-nā','our / us'],['ـكُمْ','-kum','your / you (pl)'],['ـهُمْ','-hum','their / them']],head:['Suffix','Say','Meaning']},
      {h:'On nouns'},
      {table:[['رَبِّي','rabbī','my Lord'],['رَبُّكَ','rabbuka','your Lord (108:2 · 105:1)'],['رَبُّنَا','rabbunā','our Lord'],['دِينُكُمْ','dīnukum','your religion (109:6)'],['كِتَابُهُ','kitābuhu','his book'],['قُلُوبُهُمْ','qulūbuhum','their hearts']],head:['Word','Say','Meaning']},
      {h:'On verbs and particles'},
      {table:[['أَعْطَيْنَٰكَ','aʿṭaynāka','We gave you (108:1) · verb + ka'],['شَانِئَكَ','shāni\'aka','your hater (108:3)'],['لَكُمْ','lakum','for you (109:6)'],['لِيَ','liya','for me (109:6)'],['عَلَيْهِمْ','ʿalayhim','upon them (1:7 — hum becomes him after i/y)'],['مِنْهُ','minhu','from him / from it'],['فِيهَا','fīhā','in it (fem.) — "in it" for jannah']],head:['Word','Say','Meaning']},
      {tip:'The Uthmani small yā/wāw you met on Day 9 are these pronouns lengthened: لَهُۥ lahū, بِهِۦ bihī. Same word, held long.'}
    ],
    quran:{ s:108, from:1, to:3, note:'Al-Kawthar: three attached pronouns in three ayahs — أَعْطَيْنَٰكَ (you), لِرَبِّكَ (your), شَانِئَكَ (your). Then 109:6 for -kum and -ya.' },
    memorize:'The eight suffixes with one example each; re-recite 108 and 109 knowing every "your".',
    speak:['Make ten possessives from words you know: baytī, baytuka, baytunā, kitābuhā, rabbukum…'],
    check:'You can attach the right suffix to رَبّ for all eight persons.' },

  { n:16, phase:2, title:'This, that, the one who — pointing words', focus:'hādhā · dhālika · alladhī · alladhīna',
    learn:[
      {h:'Demonstratives'},
      {table:[['هَٰذَا','hādhā','this (m)'],['هَٰذِهِ','hādhihi','this (f)'],['ذَٰلِكَ','dhālika','that (m)'],['تِلْكَ','tilka','that (f)'],['هَٰؤُلَآءِ','hā\'ulā\'i','these (people)'],['أُو۟لَٰٓئِكَ','ulā\'ika','those (people)']],head:['Word','Say','Meaning']},
      {table:[['هَٰذَا ٱلْبَيْتِ','hādhal-bayt','this House (106:3)'],['ذَٰلِكَ ٱلْكِتَٰبُ','dhālikal-kitāb','that Book (2:2)'],['هَٰذِهِ ٱلْجَنَّةُ','hādhihil-jannah','this garden'],['أُو۟لَٰٓئِكَ هُمُ ٱلْمُفْلِحُونَ','ulā\'ika humul-mufliḥūn','those — they are the successful (2:5)']],head:['Phrase','Say','Meaning']},
      {h:'The one who / those who'},
      {p:'ٱلَّذِي alladhī (m), ٱلَّتِي allatī (f), ٱلَّذِينَ alladhīna (plural) mean "the one(s) who / which". The Quran describes people with them constantly: "those who believe", "those who disbelieve".'},
      {table:[['ٱلَّذِينَ ءَامَنُوا','alladhīna āmanū','those who believe(d)'],['ٱلَّذِينَ كَفَرُوا','alladhīna kafarū','those who disbelieve(d)'],['ٱلَّذِي خَلَقَ','alladhī khalaq','He who created (96:1)'],['ٱلَّتِي','allatī','she/that which']],head:['Phrase','Say','Meaning']},
      {tip:'Watch the small alif in هَٰذَا and ذَٰلِكَ — say hā-dhā and dhā-lika with a long first vowel even though no full alif is written.'}
    ],
    quran:{ s:2, from:1, to:5, note:'The opening of Al-Baqarah: ذَٰلِكَ ٱلْكِتَٰبُ (2:2), ٱلَّذِينَ يُؤْمِنُونَ (2:3), وَٱلَّذِينَ يُؤْمِنُونَ (2:4), أُو۟لَٰٓئِكَ (2:5 twice). Five ayahs that use every word from today.' },
    memorize:'Al-Baqarah 2:1–2 (Alif-Lām-Mīm · Dhālikal-kitābu lā rayba fīh, hudal-lil-muttaqīn) — you will finish 2:1–5 on Day 30.',
    speak:['Point at ten things around you and name them: hādhā kitāb, hādhihi ṭāwilah (table), dhālika bāb (door)…'],
    check:'You recognise ٱلَّذِينَ instantly and can say this/that for a masculine and a feminine noun.' },

  { n:17, phase:2, title:'Nouns: masculine, feminine, one, two, many', focus:'gender · dual · sound plurals · first broken plurals',
    learn:[
      {h:'Gender'},
      {table:[['مُسْلِم → مُسْلِمَة','muslim → muslimah','add ة for the feminine'],['كَبِير → كَبِيرَة','kabīr → kabīrah','big (m) → big (f)'],['عَبْد → أَمَة','ʿabd → amah','servant (m) → (f) — some pairs are different words']],head:['Masculine → feminine','Say','Note']},
      {h:'Two of something — the dual'},
      {table:[['كِتَابَانِ / كِتَابَيْنِ','kitābāni / kitābayni','two books (subject / other cases)'],['يَدَانِ / يَدَيْنِ','yadāni / yadayni','two hands — بَيْنَ يَدَيْهِ "between his two hands" = in front of him (2:97)']],head:['Word','Say','Meaning']},
      {h:'Sound plurals (regular)'},
      {table:[['مُسْلِمُونَ / مُسْلِمِينَ','muslimūn / muslimīn','Muslims (m) — -ūn as subject, -īn elsewhere'],['ٱلْعَٰلَمِينَ','al-ʿālamīn','the worlds (1:2) — the -īn ending after "rabbi"'],['مُسْلِمَات','muslimāt','Muslim women — feminine plural -āt'],['ٱلصَّٰلِحَٰت','aṣ-ṣāliḥāt','righteous deeds (103:3) — feminine plural']],head:['Word','Say','Meaning']},
      {h:'Broken plurals (irregular) — learn them as vocabulary'},
      {table:[['كِتَاب → كُتُب','kitāb → kutub','book → books'],['رَسُول → رُسُل','rasūl → rusul','messenger → messengers'],['قَلْب → قُلُوب','qalb → qulūb','heart → hearts'],['نَبِيّ → أَنبِيَاء','nabiyy → anbiyā\'','prophet → prophets'],['يَوْم → أَيَّام','yawm → ayyām','day → days'],['عَبْد → عِبَاد','ʿabd → ʿibād','servant → servants (of Allah)']],head:['Singular → plural','Say','Meaning']},
      {tip:'A plural of non-humans (books, days, hearts) is treated as feminine singular in grammar: "the books are big" = ٱلْكُتُبُ كَبِيرَةٌ. Odd at first, then automatic.'}
    ],
    quran:{ s:103, from:1, to:3, note:'Al-ʿAṣr: ٱلْإِنسَٰنَ (singular), ٱلَّذِينَ ءَامَنُوا (plural verb), ٱلصَّٰلِحَٰتِ (feminine plural). Then read Al-Qadr (97) for ٱلْمَلَٰٓئِكَةُ (angels — a broken plural).' },
    memorize:'Al-Qadr (97). Re-recite Al-ʿAṣr naming singular/plural for each noun.',
    speak:['Say muslim · muslimah · muslimūn · muslimāt; kitāb · kitābān · kutub.'],
    check:'You can make the feminine, dual and plural of مُسْلِم and know six broken plurals.' },

  { n:18, phase:2, title:'Iḍāfa — "the X of Y"', focus:'possession without "of" · rabbil-ʿālamīn · yawmid-dīn',
    learn:[
      {h:'The most common structure in the Quran'},
      {p:'To say "the Lord of the worlds" Arabic simply puts the two nouns side by side: رَبِّ ٱلْعَٰلَمِينَ. Rules: the first noun never takes al- or tanwīn; the second noun goes into the "of" case (kasra / -i / -īn). The first noun is what you are talking about; the second owns or defines it.'},
      {table:[['رَبُّ ٱلْعَٰلَمِينَ','rabbul-ʿālamīn','Lord of the worlds'],['يَوْمُ ٱلدِّينِ','yawmud-dīn','the Day of Judgement'],['رَسُولُ ٱللَّهِ','rasūlullāh','the Messenger of Allah'],['بَيْتُ ٱللَّهِ','baytullāh','the House of Allah'],['كِتَابُ ٱللَّهِ','kitābullāh','the Book of Allah'],['أَصْحَٰبُ ٱلْفِيلِ','aṣḥābul-fīl','the companions of the elephant (105:1)'],['رَبَّ هَٰذَا ٱلْبَيْتِ','rabba hādhal-bayt','the Lord of this House (106:3)']],head:['Phrase','Say','Meaning']},
      {h:'With pronouns it is the same thing'},
      {p:'رَبِّي "my Lord", دِينُكُمْ "your religion" are iḍāfa too — the pronoun is the owner.'},
      {h:'Chains'},
      {ar:'يَوْمِ ٱلدِّينِ  ←  مَٰلِكِ', tr:'māliki yawmid-dīn', en:'Sovereign of the Day of Judgement — a chain of three: Sovereign-of (Day-of (Judgement)). Every link after the first takes the "of" ending.'},
      {tip:'If the first word of a pair has NO al- and NO tanwīn, and the second has al- or a pronoun — it is an iḍāfa. This one test will parse thousands of ayahs for you.'}
    ],
    quran:{ s:1, from:1, to:7, note:'Al-Fatihah again, now as grammar: find every iḍāfa — bismi-llāh, rabbil-ʿālamīn, māliki yawmid-dīn, ṣirāṭal-mustaqīm is NOT one (it is noun + adjective — tomorrow), ṣirāṭ alladhīna is one.' },
    memorize:'Quraysh (106) — رَبَّ هَٰذَا ٱلْبَيْتِ is the model iḍāfa with a demonstrative inside.',
    speak:['Build ten: bayt + Allāh; kitāb + ar-rasūl; rabb + an-nās; ahl + al-bayt (people of the house); yawm + al-qiyāmah (Day of Resurrection).'],
    check:'You can spot an iḍāfa by its endings and translate "the door of the house" (bābul-bayt).' },

  { n:19, phase:2, title:'Case endings — why the last vowel keeps changing', focus:'-u subject · -a object · -i after "of" and prepositions',
    learn:[
      {h:'Three states, three vowels'},
      {table:[['رَفْع  rafʿ · -u / -un','subject / topic','ٱللَّهُ أَحَدٌ  Allāhu aḥadun (both are the topic)'],['نَصْب  naṣb · -a / -an','object · after إِنَّ · adverbs','إِنَّ ٱلْإِنسَٰنَ  innal-insāna (after inna) · إِيَّاكَ  iyyāka (object)'],['جَرّ  jarr · -i / -in','after a preposition · second word of an iḍāfa','فِي خُسْرٍ  fī khusrin · رَبِّ ٱلْعَٰلَمِينَ  rabbil-ʿālamīn']],head:['Case','When','Example']},
      {h:'Watch one word change'},
      {table:[['رَبُّ','rabbu','as topic: rabbu-nā Allāh (our Lord is Allah)'],['رَبَّ','rabba','as object / after inna: fal-yaʿbudū rabba hādhal-bayt (106:3)'],['رَبِّ','rabbi','after a preposition or in iḍāfa: al-ḥamdu lillāhi rabbil-ʿālamīn (1:2)']],head:['Form','Say','Where']},
      {h:'Plurals and duals change differently'},
      {table:[['مُسْلِمُونَ / مُسْلِمِينَ','-ūn / -īn','sound masculine plural: -ūn as topic, -īn for object AND after prepositions'],['مُسْلِمَاتٌ / مُسْلِمَاتٍ','-ātun / -ātin','feminine plural: -u as topic, -i for both other cases'],['ٱثْنَانِ / ٱثْنَيْنِ','-āni / -ayni','dual: -āni as topic, -ayni otherwise']],head:['Word','Endings','Rule']},
      {tip:'You do not need to produce these perfectly to understand the Quran — but they are why the same word looks different in different ayahs. Reading with the endings out loud trains your ear for free.'}
    ],
    quran:{ s:114, from:1, to:6, note:'An-Nās: بِرَبِّ ٱلنَّاسِ — bi (preposition) makes rabbi, and an-nāsi is the second word of an iḍāfa. مَلِكِ ٱلنَّاسِ · إِلَٰهِ ٱلنَّاسِ follow the same pattern. Ayah 4: مِن شَرِّ — min makes sharri.' },
    memorize:'Explain out loud the ending of every word in An-Nās. Recite it and Al-Falaq.',
    speak:['Say: al-baytu kabīr (the house is big) · ra\'aytul-bayta (I saw the house) · fil-bayti (in the house).'],
    check:'Given fī, min or ʿalā you automatically put -i on the next noun.' },

  { n:20, phase:2, title:'Adjectives and the nominal sentence', focus:'noun + adjective agreement · X is Y · start Āyat al-Kursī',
    learn:[
      {h:'Adjectives follow the noun and copy it'},
      {p:'In Arabic the adjective comes AFTER the noun and matches it in four ways: gender, number, definiteness (al- or not) and case.'},
      {table:[['كِتَابٌ كَبِيرٌ','kitābun kabīr','a big book'],['ٱلْكِتَابُ ٱلْكَبِيرُ','al-kitābul-kabīr','the big book'],['ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ','aṣ-ṣirāṭal-mustaqīm','the straight path (1:6)'],['مَدِينَةٌ كَبِيرَةٌ','madīnatun kabīrah','a big city'],['ٱلْعَذَابِ ٱلْأَلِيمِ','al-ʿadhābil-alīm','the painful punishment'],['ٱلْحَىُّ ٱلْقَيُّومُ','al-ḥayyul-qayyūm','the Ever-Living, the Sustainer (2:255)']],head:['Phrase','Say','Meaning']},
      {h:'The nominal sentence — "X is Y"'},
      {p:'Topic (definite) + comment (usually indefinite) = a full sentence with no verb. If BOTH halves have al-, Arabic often inserts a pronoun هُوَ / هِيَ / هُمْ to show it is a sentence, not a description.'},
      {table:[['ٱللَّهُ أَحَدٌ','Allāhu aḥad','Allah is One (112:1)'],['ٱللَّهُ ٱلصَّمَدُ','Allāhuṣ-ṣamad','Allah is the Eternal Refuge (112:2)'],['ٱلْحَمْدُ لِلَّهِ','al-ḥamdu lillāh','praise is for Allah (1:2) — topic + prepositional comment'],['أُو۟لَٰٓئِكَ هُمُ ٱلْمُفْلِحُونَ','ulā\'ika humul-mufliḥūn','those — THEY are the successful (2:5) — the pronoun separates topic and comment'],['ٱلْبَيْتُ كَبِيرٌ','al-baytu kabīr','the house is big']],head:['Sentence','Say','Meaning']},
      {tip:'Test: "the big house" (al-baytul-kabīr) is a phrase; "the house is big" (al-baytu kabīr) is a sentence. The only difference is al- on the second word.'}
    ],
    quran:{ s:2, from:255, to:255, note:'Āyat al-Kursī — the greatest ayah. Today only the first line: ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ "Allah — there is no god but He, the Ever-Living, the Sustainer." Two adjectives in a row, both with al-.' },
    memorize:'Āyat al-Kursī, part 1 (up to al-qayyūm). You will add a line a day until Day 24.',
    speak:['Describe five things with noun + adjective, then turn each into a sentence: bayt kabīr → al-baytu kabīr.'],
    check:'You can tell a phrase from a sentence by al- and can recite the first line of Āyat al-Kursī.' },

  { n:21, phase:2, title:'Verbs I — the past tense and the root system', focus:'roots · فَعَلَ · qāla / qālū / āmanū / khalaqa',
    learn:[
      {h:'Roots'},
      {p:'Almost every Arabic word grows from three consonants (a root) that carry a core meaning. ك-ت-ب = writing: كَتَبَ he wrote · كِتَاب book · كَاتِب writer · مَكْتُوب written · مَكْتَب desk. Learn a root and you get a whole family for free. Dictionaries are arranged by root, in the alphabet order you know.'},
      {h:'The past tense (الماضي) — built on the root'},
      {table:[['كَتَبَ','kataba','he wrote (the dictionary form)'],['كَتَبَتْ','katabat','she wrote'],['كَتَبْتَ','katabta','you (m) wrote'],['كَتَبْتِ','katabti','you (f) wrote'],['كَتَبْتُ','katabtu','I wrote'],['كَتَبْنَا','katabnā','we wrote'],['كَتَبُوا','katabū','they wrote'],['كَتَبْتُمْ','katabtum','you (pl) wrote']],head:['Form','Say','Meaning']},
      {tip:'The endings do all the work: -a he · -at she · -ta you · -tu I · -nā we · -ū they · -tum you all. Memorise them once and every past verb in the Quran opens.'},
      {h:'The past verbs you will see most'},
      {table:[['قَالَ / قَالُوا','qāla / qālū','he said / they said (the most frequent verb in the Quran)'],['كَانَ','kāna','he/it was'],['ءَامَنَ / ءَامَنُوا','āmana / āmanū','he believed / they believed'],['عَمِلُوا','ʿamilū','they did (103:3)'],['كَفَرُوا','kafarū','they disbelieved'],['خَلَقَ','khalaqa','He created (96:1)'],['أَنزَلَ','anzala','He sent down'],['جَآءَ','jā\'a','he/it came (110:1)'],['فَعَلَ','faʿala','he did (105:1)'],['أَعْطَيْنَا','aʿṭaynā','We gave (108:1)']],head:['Verb','Say','Meaning']}
    ],
    quran:{ s:105, from:1, to:5, note:'Al-Fīl is a past-tense story: فَعَلَ (did), يَجْعَلْ (present — tomorrow), أَرْسَلَ (sent), فَجَعَلَهُمْ (then made them). Then Āyat al-Kursī line 2: لَا تَأْخُذُهُۥ سِنَةٌ وَلَا نَوْمٌ.' },
    memorize:'Āyat al-Kursī through "wa lā nawm" (neither drowsiness nor sleep overtakes Him). The eight past-tense endings.',
    speak:['Conjugate ʿamila (did) and khalaqa (created) through all eight persons aloud.'],
    check:'You can say "I wrote, we wrote, they wrote" and recognise qāla / qālū / āmanū on sight.' },

  { n:22, phase:2, title:'Verbs II — the present tense', focus:'ya- ta- a- na- · yaʿlamu · naʿbudu · yu\'minūna',
    learn:[
      {h:'Present = a prefix in front, sometimes an ending behind'},
      {table:[['يَكْتُبُ','yaktubu','he writes / is writing / will write'],['تَكْتُبُ','taktubu','she writes · you (m) write (same form!)'],['تَكْتُبِينَ','taktubīna','you (f) write'],['أَكْتُبُ','aktubu','I write'],['نَكْتُبُ','naktubu','we write'],['يَكْتُبُونَ','yaktubūna','they write'],['تَكْتُبُونَ','taktubūna','you (pl) write']],head:['Form','Say','Meaning']},
      {tip:'ya- = he/they · ta- = she/you · a- = I · na- = we. The -ūna ending marks a plural. That is 90% of it.'},
      {h:'In the Quran'},
      {table:[['نَعْبُدُ · نَسْتَعِينُ','naʿbudu · nastaʿīn','we worship · we seek help (1:5)'],['أَعْبُدُ · تَعْبُدُونَ','aʿbudu · taʿbudūn','I worship · you worship (109:2–4)'],['يُؤْمِنُونَ','yu\'minūna','they believe (2:3)'],['يُقِيمُونَ · يُنفِقُونَ','yuqīmūna · yunfiqūna','they establish · they spend (2:3)'],['يَعْلَمُ','yaʿlamu','He knows (2:255)'],['يَشَآءُ','yashā\'u','He wills'],['يَجْعَلْ','yajʿal','make (105:2 — after lam, the final vowel is dropped: "did He not make…")'],['أَرَءَيْتَ','ara\'ayta','have you seen (107:1 — past, but a question)']],head:['Verb','Say','Meaning']},
      {h:'The present covers three English tenses'},
      {p:'يَعْلَمُ can be "he knows", "he is knowing" or "he will know" depending on context. Add سَ or سَوْفَ in front for a clear future: سَيَعْلَمُونَ sa-yaʿlamūn "they will know" (78:4).'}
    ],
    quran:{ s:109, from:2, to:5, note:'Al-Kāfirūn is a present-tense surah: أَعْبُدُ (I worship) and تَعْبُدُونَ (you worship) alternate. Notice which ayahs use the past عَبَدتُّمْ (you worshipped). Then Āyat al-Kursī line 3: لَّهُۥ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلْأَرْضِ.' },
    memorize:'Āyat al-Kursī through "wa mā fil-arḍ". The present-tense prefixes.',
    speak:['Conjugate ʿabada (worship) in the present for all persons; then say "I read the Quran" (aqra\'ul-qur\'ān), "we pray" (nuṣallī), "they know" (yaʿlamūn).'],
    check:'You can tell past from present by the shape of the verb and know who is doing it.' },

  { n:23, phase:2, title:'Verbs III — commands and "not"', focus:'the imperative · qul · iqra\' · lā / lam / lan / mā',
    learn:[
      {h:'The command form (الأمر)'},
      {p:'Take the present "you" form, drop the prefix, and if what is left starts with two consonants add a helping alif. Commands are everywhere in the Quran — it speaks to you directly.'},
      {table:[['قُلْ','qul','say! (112:1, 113:1, 114:1, 109:1)'],['ٱقْرَأْ','iqra\'','read / recite! (96:1 — the first word revealed)'],['ٱعْبُدُوا','uʿbudū','worship! (plural)'],['فَصَلِّ','fa-ṣalli','so pray! (108:2)'],['فَسَبِّحْ','fa-sabbiḥ','so glorify! (110:3)'],['ٱسْتَغْفِرْهُ','istaghfirhu','ask His forgiveness! (110:3)'],['ٱذْكُرُوا','udhkurū','remember! (plural)'],['قُومُوا','qūmū','stand up! (plural)']],head:['Command','Say','Meaning']},
      {h:'Four ways to say "not"'},
      {table:[['لَا + present','lā yaʿlamu','he does not know (general / present)'],['لَا + command form','lā taqrab','do not approach! (prohibition)'],['لَمْ + present (jussive)','lam yalid','he did not beget (112:3) — past meaning, present shape, last vowel dropped'],['لَنْ + present','lan yaʿlama','he will never know (future)'],['مَا + past','mā kataba','he did not write'],['لَيْسَ','laysa','is not — لَيْسَ لَهُۥ "he has not / there is not for him"']],head:['Pattern','Say','Meaning']},
      {tip:'لَمْ is the one beginners get wrong: it looks present but means past. لَمْ يَلِدْ = "He did NOT beget", not "He does not beget".'}
    ],
    quran:{ s:96, from:1, to:5, note:'The first revelation: ٱقْرَأْ twice (command), خَلَقَ (past), عَلَّمَ (past, doubled middle — Day 34), لَمْ يَعْلَمْ (did not know). Then Āyat al-Kursī line 4: مَن ذَا ٱلَّذِي يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ.' },
    memorize:'Al-ʿAlaq 96:1–5 and Āyat al-Kursī through "illā bi-idhnih".',
    speak:['Give ten commands: iqra\' (read), uktub (write), qum (stand), ijlis (sit), ismaʿ (listen), udkhul (enter), ukhruj (leave), kul (eat), ishrab (drink), qul (say).'],
    check:'You can form a command from a present verb and explain the difference between lā, lam and lan.' },

  { n:24, phase:2, title:'Questions, conditions, and finishing Āyat al-Kursī', focus:'mā · man · kayfa · hal · a- · idhā · in',
    learn:[
      {h:'Question words'},
      {table:[['مَا / مَاذَا','mā / mādhā','what?'],['مَن','man','who?'],['أَيْنَ','ayna','where?'],['كَيْفَ','kayfa','how? (105:1 — "how your Lord dealt")'],['مَتَىٰ','matā','when?'],['لِمَ / لِمَاذَا','lima / limādhā','why?'],['كَمْ','kam','how many/much?'],['أَيّ','ayy','which?'],['هَلْ / أَ','hal / a-','yes-no question marker: هَلْ أَتَىٰكَ (has there reached you… 88:1) · أَلَمْ تَرَ (did you not see? 105:1)']],head:['Word','Say','Meaning']},
      {tip:'مَا and مَن are also relatives: مَا فِي ٱلسَّمَٰوَٰتِ "what(ever) is in the heavens", مَن ذَا ٱلَّذِي "who is it that". Context tells you question or relative.'},
      {h:'If / when'},
      {table:[['إِذَا + past','idhā jā\'a','when it comes (110:1 — certain future, past shape)'],['إِن + jussive','in taʿmal','if you do (possible)'],['مَن + jussive','man yaʿmal','whoever does (99:7)'],['لَوْ + past','law shā\'a','had He willed (unreal)'],['فَ (in the answer)','fa-','then… — marks the result clause: فَإِنَّ … فَسَبِّحْ']],head:['Pattern','Say','Meaning']},
      {h:'Āyat al-Kursī — the last two lines'},
      {ar:'يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَىْءٍ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ', tr:'yaʿlamu mā bayna aydīhim wa mā khalfahum, wa lā yuḥīṭūna bi-shay\'im-min ʿilmihī illā bimā shā\'', en:'He knows what is before them and what is behind them, and they encompass nothing of His knowledge except what He wills.'},
      {ar:'وَسِعَ كُرْسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ', tr:'wasiʿa kursiyyuhus-samāwāti wal-arḍ, wa lā ya\'ūduhū ḥifẓuhumā, wa huwal-ʿaliyyul-ʿaẓīm', en:'His Kursī extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.'}
    ],
    quran:{ s:2, from:255, to:255, note:'The whole of Āyat al-Kursī. Read it with phonetics, then without, then from memory. Find: two question/relative words (مَن، مَا), one exception (إِلَّا) twice, one dual pronoun (ـهُمَا).' },
    memorize:'Āyat al-Kursī complete (2:255). Recite it after every prayer from today.',
    speak:['Ask ten questions: mā hādhā? (what is this) · man anta? (who are you) · ayna al-masjid? · kayfa ḥāluka? (how are you) · hal anta muslim?'],
    check:'You can recite Āyat al-Kursī unaided and ask "what / who / where / how" in Arabic.' },

  { n:25, phase:2, title:'The 50 words you will see on every page — nouns', focus:'Allah · rabb · nās · arḍ · samā · yawm · qawm · āyah · kitāb · rasūl…',
    learn:[
      {h:'Learn these as a set — they are on every page of the Quran'},
      {table:[['ٱللَّه','Allāh','Allah (2,699 times)'],['رَبّ','rabb','Lord (975)'],['ٱلنَّاس','an-nās','people, mankind'],['ٱلْأَرْض','al-arḍ','the earth (feminine)'],['ٱلسَّمَآء / ٱلسَّمَٰوَٰت','as-samā\' / as-samāwāt','the sky / the heavens'],['يَوْم','yawm','day'],['قَوْم','qawm','a people, nation'],['ءَايَة / ءَايَٰت','āyah / āyāt','sign, verse / signs'],['كِتَٰب','kitāb','book, scripture'],['رَسُول','rasūl','messenger'],['نَبِيّ','nabiyy','prophet'],['عَذَاب','ʿadhāb','punishment'],['رَحْمَة','raḥmah','mercy'],['جَنَّة','jannah','garden, paradise'],['نَار','nār','fire (feminine)'],['نَفْس','nafs','soul, self'],['قَلْب','qalb','heart'],['شَىْء','shay\'','thing'],['أَمْر','amr','command, matter'],['حَقّ','ḥaqq','truth, right'],['سَبِيل','sabīl','way, path'],['أَهْل','ahl','people of, family'],['أَجْر','ajr','reward'],['ذَنْب','dhanb','sin'],['ٱلدُّنْيَا / ٱلْءَاخِرَة','ad-dunyā / al-ākhirah','this world / the Hereafter']],head:['Word','Say','Meaning (times in Quran)']},
      {tip:'Make paper flashcards or use the table: Arabic side up, say the meaning, flip. Ten minutes a day with the phase-2 words is the single highest-value habit in this course.'}
    ],
    quran:{ s:99, from:1, to:8, note:'Az-Zalzalah: ٱلْأَرْضُ appears three times, ٱلْإِنسَٰنُ, ٱلنَّاسُ, أَعْمَٰلَهُمْ (their deeds), خَيْرًا / شَرًّا (good / evil). Underline every word from today\'s table.' },
    memorize:'The 25 nouns. Az-Zalzalah (99) — start; finish it on Day 41.',
    speak:['Put each noun in a two-word sentence: ar-rabbu karīm (the Lord is generous), al-jannatu wāsiʿah (paradise is vast), al-ḥaqqu wāḍiḥ (the truth is clear).'],
    check:'You can give the meaning of all 25 nouns from the Arabic alone.' },

  { n:26, phase:2, title:'The 50 words — verbs', focus:'qāla · kāna · āmana · ʿalima · jaʿala · jā\'a · ra\'ā · ʿamila · kafara · dhakara…',
    learn:[
      {h:'The 25 verbs that carry the stories'},
      {table:[['قَالَ / يَقُولُ','qāla / yaqūlu','said / says'],['كَانَ / يَكُونُ','kāna / yakūnu','was / is'],['ءَامَنَ / يُؤْمِنُ','āmana / yu\'minu','believed / believes'],['عَلِمَ / يَعْلَمُ','ʿalima / yaʿlamu','knew / knows'],['جَعَلَ / يَجْعَلُ','jaʿala / yajʿalu','made, placed / makes'],['جَآءَ / يَجِىٓءُ','jā\'a / yajī\'u','came / comes'],['أَتَىٰ / يَأْتِى','atā / ya\'tī','came, brought / comes'],['رَأَىٰ / يَرَىٰ','ra\'ā / yarā','saw / sees'],['عَمِلَ / يَعْمَلُ','ʿamila / yaʿmalu','did, worked / does'],['كَفَرَ / يَكْفُرُ','kafara / yakfuru','disbelieved / disbelieves'],['ذَكَرَ / يَذْكُرُ','dhakara / yadhkuru','remembered, mentioned'],['أَنزَلَ / يُنزِلُ','anzala / yunzilu','sent down'],['خَلَقَ / يَخْلُقُ','khalaqa / yakhluqu','created'],['أَرَادَ / يُرِيدُ','arāda / yurīdu','wanted, intended'],['شَآءَ / يَشَآءُ','shā\'a / yashā\'u','willed'],['هَدَىٰ / يَهْدِى','hadā / yahdī','guided'],['ٱتَّقَىٰ / يَتَّقِى','ittaqā / yattaqī','feared Allah, was mindful'],['عَبَدَ / يَعْبُدُ','ʿabada / yaʿbudu','worshipped'],['دَعَا / يَدْعُو','daʿā / yadʿū','called, prayed'],['غَفَرَ / يَغْفِرُ','ghafara / yaghfiru','forgave'],['أَرْسَلَ / يُرْسِلُ','arsala / yursilu','sent'],['أَخَذَ / يَأْخُذُ','akhadha / ya\'khudhu','took, seized'],['دَخَلَ / يَدْخُلُ','dakhala / yadkhulu','entered'],['خَرَجَ / يَخْرُجُ','kharaja / yakhruju','went out'],['سَمِعَ / يَسْمَعُ','samiʿa / yasmaʿu','heard']],head:['Past / present','Say','Meaning']},
      {tip:'Learn both forms together (past / present) — the vowel in the middle of the present is the part you cannot predict, so it must be memorised with the word.'}
    ],
    quran:{ s:100, from:1, to:11, note:'Al-ʿĀdiyāt — short, vivid, verb-rich: يَعْلَمُ (knows, ayah 9), بُعْثِرَ (is scattered), حُصِّلَ (is obtained). Then re-read 96:1–5 for خَلَقَ / عَلَّمَ / يَعْلَمْ.' },
    memorize:'The 25 verbs (past + present). At-Tīn (95) — 8 ayahs with خَلَقْنَا (We created) and ءَامَنُوا وَعَمِلُوا.',
    speak:['Tell a three-sentence story in the past: qāla ar-rajul… (the man said), dakhala al-bayt (he entered the house), akhadha al-kitāb (he took the book).'],
    check:'You can give past and present of the 25 verbs and use five of them in sentences.' },

  { n:27, phase:2, title:'Names of Allah and the faʿīl pattern', focus:'ar-Raḥmān · al-ʿAlīm · al-Ḥakīm · patterns as vocabulary multipliers',
    learn:[
      {h:'Patterns — the secret weapon of Arabic vocabulary'},
      {p:'Put a root into a pattern (وزن) and you get a predictable meaning. فَعِيل (faʿīl) makes an intense, lasting quality: from ع-ل-م (knowing) → عَلِيم "All-Knowing"; from ح-ك-م (wisdom) → حَكِيم "All-Wise". Learn the pattern once and dozens of Names of Allah read themselves.'},
      {table:[['ٱلرَّحْمَٰن · ٱلرَّحِيم','ar-raḥmān · ar-raḥīm','the Entirely Merciful · the Especially Merciful (ر-ح-م)'],['ٱلْعَلِيم','al-ʿalīm','the All-Knowing (ع-ل-م)'],['ٱلْحَكِيم','al-ḥakīm','the All-Wise (ح-ك-م)'],['ٱلْغَفُور','al-ghafūr','the Forgiving (غ-ف-ر) — pattern faʿūl'],['ٱلْعَزِيز','al-ʿazīz','the Almighty (ع-ز-ز)'],['ٱلْقَدِير','al-qadīr','the All-Powerful (ق-د-ر)'],['ٱلسَّمِيع · ٱلْبَصِير','as-samīʿ · al-baṣīr','the All-Hearing · the All-Seeing'],['ٱلْكَرِيم','al-karīm','the Generous'],['ٱلْحَلِيم','al-ḥalīm','the Forbearing'],['ٱلْعَظِيم','al-ʿaẓīm','the Magnificent'],['ٱلْعَلِىّ','al-ʿaliyy','the Most High'],['ٱلْمَلِك · ٱلْقُدُّوس · ٱلسَّلَٰم','al-malik · al-quddūs · as-salām','the King · the Holy · the Peace (59:23)']],head:['Name','Say','Meaning (root)']},
      {h:'Pairs at the end of ayahs'},
      {p:'Hundreds of ayahs close with a pair of Names: إِنَّ ٱللَّهَ غَفُورٌ رَّحِيمٌ "Indeed Allah is Forgiving, Merciful" · وَٱللَّهُ عَلِيمٌ حَكِيمٌ "Allah is Knowing, Wise" · إِنَّهُۥ هُوَ ٱلسَّمِيعُ ٱلْبَصِيرُ. When you hear the first Name you can often predict the second.'},
      {tip:'Other patterns to notice: فَاعِل (doer): عَالِم knower, كَاتِب writer · مَفْعُول (done-to): مَكْتُوب written, مَعْبُود worshipped · مَفْعَل (place): مَسْجِد place of prostration, مَكْتَب desk.'}
    ],
    quran:{ s:59, from:22, to:24, note:'The three closing ayahs of Al-Ḥashr — fifteen Names of Allah in a row. Read them slowly with the meaning; this is the passage to memorise this week.' },
    memorize:'Al-Ḥashr 59:22–24 (start today, finish by Day 30). Fifteen Names with meanings.',
    speak:['Say each Name with "yā" in front as a dua: yā Raḥmān, yā Ghafūr, yā Karīm… and one thing you ask for.'],
    check:'You can give the root of five Names and explain what faʿīl does to a root.' },

  { n:28, phase:2, title:'Numbers, time and the days of the week', focus:'wāḥid…ʿasharah · yawm · laylah · shahr · sanah · alf',
    learn:[
      {h:'Counting'},
      {table:[['وَاحِد','wāḥid','1'],['ٱثْنَانِ','ithnān','2'],['ثَلَاثَة','thalāthah','3'],['أَرْبَعَة','arbaʿah','4'],['خَمْسَة','khamsah','5'],['سِتَّة','sittah','6'],['سَبْعَة','sabʿah','7'],['ثَمَانِيَة','thamāniyah','8'],['تِسْعَة','tisʿah','9'],['عَشَرَة','ʿasharah','10'],['مِائَة','mi\'ah','100'],['أَلْف','alf','1,000 — أَلْفِ شَهْرٍ "a thousand months" (97:3)']],head:['Number','Say','']},
      {tip:'Numbers 3–10 look feminine (ة) but go with masculine nouns and vice versa — the famous reverse-gender rule: ثَلَاثَةُ رِجَالٍ three men · ثَلَاثُ نِسَاءٍ three women. Notice it; do not fight it yet.'},
      {h:'Time words'},
      {table:[['يَوْم / أَيَّام','yawm / ayyām','day / days'],['لَيْل / لَيْلَة','layl / laylah','night / a night — لَيْلَةُ ٱلْقَدْرِ (97:1)'],['نَهَار','nahār','daytime'],['صُبْح / فَجْر','ṣubḥ / fajr','morning / dawn'],['عَصْر','ʿaṣr','afternoon / time (103:1)'],['سَاعَة','sāʿah','hour · the Hour (Judgement)'],['شَهْر','shahr','month'],['سَنَة / عَام','sanah / ʿām','year'],['ٱلْيَوْم · غَدًا · أَمْسِ','al-yawm · ghadan · amsi','today · tomorrow · yesterday'],['ٱلْءَانَ','al-ān','now'],['أَبَدًا','abadan','ever / forever']],head:['Word','Say','Meaning']},
      {h:'Days of the week (named by number)'},
      {table:[['ٱلْأَحَد','al-aḥad','Sunday (the one)'],['ٱلِٱثْنَيْنِ','al-ithnayn','Monday (the two)'],['ٱلثُّلَاثَاء','ath-thulāthā\'','Tuesday'],['ٱلْأَرْبِعَاء','al-arbiʿā\'','Wednesday'],['ٱلْخَمِيس','al-khamīs','Thursday'],['ٱلْجُمُعَة','al-jumuʿah','Friday (the gathering — 62:9)'],['ٱلسَّبْت','as-sabt','Saturday']],head:['Day','Say','']}
    ],
    quran:{ s:97, from:1, to:5, note:'Al-Qadr: لَيْلَةُ ٱلْقَدْرِ · أَلْفِ شَهْرٍ · ٱلْفَجْرِ. Then Al-Layl 92:1–4 (وَٱلَّيْلِ إِذَا يَغْشَىٰ · وَٱلنَّهَارِ إِذَا تَجَلَّىٰ).' },
    memorize:'Numbers 1–10 and the days of the week; Al-Layl 92:1–4.',
    speak:['Say today\'s date and day in Arabic: al-yawm al-ithnayn (today is Monday)… Count your fingers in Arabic ten times.'],
    check:'You count to ten and name today\'s day in Arabic without looking.' },

  { n:29, phase:2, title:'People and family', focus:'ab · umm · ibn · akh · ukht · zawj · rajul · imra\'ah · walad',
    learn:[
      {h:'Family'},
      {table:[['أَب / أَبِي / أَبُوهُ','ab / abī / abūhu','father / my father / his father (ab lengthens before a suffix)'],['أُمّ / أُمِّي','umm / ummī','mother / my mother'],['ٱبْن / بِنْت','ibn / bint','son / daughter'],['أَخ / أَخِي / أُخْت','akh / akhī / ukht','brother / my brother / sister'],['زَوْج / زَوْجَة','zawj / zawjah','husband / wife'],['وَلَد / أَوْلَاد','walad / awlād','child / children'],['جَدّ / جَدَّة','jadd / jaddah','grandfather / grandmother'],['عَمّ / خَال','ʿamm / khāl','uncle (father\'s side / mother\'s side)'],['أَهْل','ahl','family, people of']],head:['Word','Say','Meaning']},
      {h:'People'},
      {table:[['رَجُل / رِجَال','rajul / rijāl','man / men'],['ٱمْرَأَة / نِسَاء','imra\'ah / nisā\'','woman / women — ٱمْرَأَتُهُۥ "his wife" (111:4)'],['إِنسَان / نَاس','insān / nās','human being / people'],['صَاحِب / أَصْحَاب','ṣāḥib / aṣḥāb','companion / companions'],['عَبْد / عِبَاد','ʿabd / ʿibād','servant / servants'],['صَدِيق','ṣadīq','friend'],['مُؤْمِن / كَافِر','mu\'min / kāfir','believer / disbeliever'],['مُعَلِّم / طَالِب','muʿallim / ṭālib','teacher / student'],['عَامِل','ʿāmil','worker']],head:['Word','Say','Meaning']},
      {h:'Luqmān to his son'},
      {ar:'يَٰبُنَىَّ لَا تُشْرِكْ بِٱللَّهِ', tr:'yā bunayya lā tushrik billāh', en:'"O my dear son, do not associate anything with Allah" (31:13) — yā + bunayya (an affectionate "my little son").'}
    ],
    quran:{ s:31, from:13, to:14, note:'Luqmān 31:13–14: يَٰبُنَىَّ (my son), ٱلْإِنسَٰنَ بِوَٰلِدَيْهِ (the human with his two parents — a dual!), أُمُّهُۥ (his mother). Then Al-Masad 111:4 for ٱمْرَأَتُهُۥ.' },
    memorize:'Family words; Luqmān 31:13 (the first half).',
    speak:['Introduce your family in Arabic: hādhā abī, hādhihi ummī, ʿindī akh wa ukht (I have a brother and a sister)…'],
    check:'You can name five family members and say "my father / my mother / my brother".' },

  { n:30, phase:2, title:'Phase 2 review — Al-Baqarah 2:1–5 word by word', focus:'150-word self-test · parse five ayahs · memorise the opening of Al-Baqarah',
    learn:[
      {h:'The test'},
      {list:[
        'Cover the English column of Days 13–15, 25, 26 and 29 and give the meanings. Score: under 20 misses out of ~120 = pass.',
        'Open 2:1–5 in the reader. For every word say: noun / verb / particle, and if a noun, its case ending and why.',
        'Recite from memory: Al-Fatihah, 103, 105–114, Āyat al-Kursī, Al-Ḥashr 59:22–24.'
      ]},
      {h:'2:1–5 parsed'},
      {table:[['الٓمٓ','alif-lām-mīm','the disconnected letters — recite them by name'],['ذَٰلِكَ ٱلْكِتَٰبُ','dhālikal-kitāb','that Book — demonstrative + noun'],['لَا رَيْبَ ۛ فِيهِ','lā rayba fīh','no doubt in it — lā of absolute negation puts -a on rayb'],['هُدًى لِّلْمُتَّقِينَ','hudal-lil-muttaqīn','guidance for the mindful — li + al-muttaqīn (-īn: sound plural after li)'],['ٱلَّذِينَ يُؤْمِنُونَ بِٱلْغَيْبِ','alladhīna yu\'minūna bil-ghayb','those who believe in the unseen'],['وَيُقِيمُونَ ٱلصَّلَوٰةَ','wa yuqīmūnaṣ-ṣalāh','and establish the prayer — object gets -a'],['وَمِمَّا رَزَقْنَٰهُمْ يُنفِقُونَ','wa mimmā razaqnāhum yunfiqūn','and from what We provided them they spend — min + mā; razaqnā + hum'],['وَبِٱلْءَاخِرَةِ هُمْ يُوقِنُونَ','wa bil-ākhirati hum yūqinūn','and in the Hereafter they are certain'],['أُو۟لَٰٓئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ','ulā\'ika ʿalā hudam-mir-rabbihim','those are upon guidance from their Lord — tanwīn merging twice (Day 11)'],['وَأُو۟لَٰٓئِكَ هُمُ ٱلْمُفْلِحُونَ','wa ulā\'ika humul-mufliḥūn','and it is they who are the successful']],head:['Arabic','Say','Parse']},
      {tip:'If you can follow this table, you already read the Quran with understanding at the level most Arabic speakers do. Phase 3 makes it precise.'}
    ],
    quran:{ s:2, from:1, to:5, note:'Read 2:1–5 three times: with phonetics, without, then from memory. This is the passage the Prophet ﷺ described as protection when recited in a house.' },
    memorize:'Al-Baqarah 2:1–5 complete, and Al-Ḥashr 59:22–24 complete.',
    speak:['Explain 2:3 to someone in English while pointing at each Arabic word.'],
    check:'Passed the vocabulary test and parsed 2:1–5 aloud. Phase 2 complete.' },

  /* ================= PHASE 3 — GRAMMAR THAT UNLOCKS THE QURAN ================= */
  { n:31, phase:3, title:'The verbal sentence — verb first', focus:'VSO order · subject and object · khalaqa-llāhu…',
    learn:[
      {h:'Two sentence shapes, one rule each'},
      {table:[['جُمْلَة ٱسْمِيَّة','nominal sentence','starts with a noun: ٱللَّهُ أَحَدٌ (Day 20)'],['جُمْلَة فِعْلِيَّة','verbal sentence','starts with a VERB, then the doer, then what was done: خَلَقَ ٱللَّهُ ٱلسَّمَٰوَٰتِ "Allah created the heavens"']],head:['Shape','Name','Rule']},
      {h:'Verb · doer (-u) · object (-a)'},
      {table:[['خَلَقَ ٱللَّهُ ٱلْإِنسَٰنَ','khalaqa-llāhul-insān','Allah created man — doer Allāhu, object al-insāna'],['قَالَ ٱلرَّجُلُ كَلِمَةً','qālar-rajulu kalimah','the man said a word'],['أَنزَلَ ٱللَّهُ ٱلْكِتَٰبَ','anzala-llāhul-kitāb','Allah sent down the Book'],['يَعْلَمُ ٱللَّهُ مَا فِي قُلُوبِكُمْ','yaʿlamu-llāhu mā fī qulūbikum','Allah knows what is in your hearts']],head:['Sentence','Say','Meaning']},
      {h:'When the doer is a pronoun it hides inside the verb'},
      {p:'كَتَبْتُ "I wrote" — the -tu IS the doer. So most Quranic verbal sentences are just verb + object: أَعْطَيْنَٰكَ ٱلْكَوْثَرَ "We gave you al-Kawthar" — verb (We) + you + object.'},
      {h:'Verb agreement'},
      {list:['The verb stays SINGULAR when the doer comes after it, even if the doer is plural: قَالَ ٱلْمَلَٰٓئِكَةُ "the angels said" (not qālū).','If the doer comes first (nominal shape) the verb agrees fully: ٱلْمَلَٰٓئِكَةُ قَالُوا.','A feminine doer gives -at: قَالَتِ ٱلْمَرْأَةُ "the woman said".']},
      {tip:'Word-order test: verb first → verbal sentence, look for the doer after it. Noun first → nominal sentence, the rest is a comment about it. The Quran uses both for emphasis — noun-first stresses the noun.'}
    ],
    quran:{ s:96, from:1, to:8, note:'Al-ʿAlaq 96:1–8: خَلَقَ ٱلْإِنسَٰنَ (verb + object, doer hidden = He), عَلَّمَ ٱلْإِنسَٰنَ مَا لَمْ يَعْلَمْ, then the nominal إِنَّ ٱلْإِنسَٰنَ لَيَطْغَىٰٓ.' },
    memorize:'Al-ʿAlaq 96:1–8.',
    speak:['Make five verbal sentences about your day: qara\'tu al-qur\'ān (I read the Quran) · ṣallaytu al-fajr · dhahabtu ilā al-ʿamal (I went to work) · akaltu ṭaʿāman · nimtu mubakkiran (I slept early).'],
    check:'You can build verb + doer + object with the right endings and explain why قَالَ ٱلْمَلَٰٓئِكَةُ is singular.' },

  { n:32, phase:3, title:'Inna and her sisters', focus:'إِنَّ أَنَّ لَٰكِنَّ كَأَنَّ لَيْتَ لَعَلَّ · the -a after them',
    learn:[
      {h:'Six particles that grab the topic'},
      {p:'These sit in front of a nominal sentence and put the topic into the -a (naṣb) case; the comment stays -u. إِنَّ is the most common word in the Quran after the particles of Day 13.'},
      {table:[['إِنَّ','inna','indeed, truly — opens a sentence'],['أَنَّ','anna','that — after "know that", "witness that"'],['لَٰكِنَّ','lākinna','but'],['كَأَنَّ','ka\'anna','as if'],['لَيْتَ','layta','if only (a wish)'],['لَعَلَّ','laʿalla','perhaps, so that — لَعَلَّكُمْ تَتَّقُونَ "so that you may be mindful"']],head:['Particle','Say','Meaning']},
      {table:[['إِنَّ ٱللَّهَ غَفُورٌ رَّحِيمٌ','inna-llāha ghafūrur-raḥīm','Indeed Allah is Forgiving, Merciful — Allāha (-a), ghafūrun (-un)'],['إِنَّ ٱلْإِنسَٰنَ لَفِي خُسْرٍ','innal-insāna la-fī khusr','Indeed mankind is in loss (103:2) — the la- is emphasis'],['إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا','inna maʿal-ʿusri yusrā','Indeed with hardship is ease (94:6)'],['إِنَّا أَعْطَيْنَٰكَ','innā aʿṭaynāk','Indeed We gave you (108:1) — inna + nā'],['أَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ ٱللَّهِ','ashhadu anna muḥammadar-rasūlullāh','I bear witness that Muhammad is the Messenger of Allah — muḥammadan after anna'],['إِنَّهُۥ كَانَ تَوَّابًۢا','innahū kāna tawwābā','Indeed He is ever-accepting of repentance (110:3)']],head:['Sentence','Say','Meaning']},
      {tip:'With a pronoun the particles fuse: إِنَّهُ innahu (indeed he), إِنَّا innā (indeed we), إِنَّكَ innaka (indeed you), لَعَلَّكُمْ laʿallakum (so that you all).'}
    ],
    quran:{ s:94, from:1, to:8, note:'Ash-Sharḥ: فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا twice — inna followed by a prepositional phrase (maʿa) and then the topic يُسْرًا at the end with -an. Note the fa- of result.' },
    memorize:'Ash-Sharḥ (94), all 8 ayahs.',
    speak:['Say five inna sentences: inna-llāha karīm · inna al-jannata ḥaqq (paradise is true) · innī muslim · innaka ṣadīqī · laʿallanā nanjaḥ (perhaps we succeed).'],
    check:'You put -a on the noun after inna automatically and recite Ash-Sharḥ.' },

  { n:33, phase:3, title:'Kāna and her sisters · laysa', focus:'was / is not / became / still · the -a on the comment',
    learn:[
      {h:'Kāna does the opposite of inna'},
      {p:'كَانَ "was" puts the COMMENT into -a and leaves the topic -u: كَانَ ٱللَّهُ غَفُورًا "Allah was (has always been) Forgiving". Inna: topic -a. Kāna: comment -a. Two mirror rules.'},
      {table:[['كَانَ / يَكُونُ','kāna / yakūnu','was / is (future: will be)'],['لَيْسَ','laysa','is not — لَيْسَ كَمِثْلِهِۦ شَىْءٌ "there is nothing like Him" (42:11)'],['أَصْبَحَ · أَمْسَىٰ','aṣbaḥa · amsā','became (in the morning) · became (in the evening)'],['صَارَ','ṣāra','became'],['مَا زَالَ','mā zāla','is still, continues to'],['مَا دَامَ','mā dāma','as long as — مَا دُمْتُ حَيًّا "as long as I live" (19:31)']],head:['Verb','Say','Meaning']},
      {table:[['كَانَ ٱللَّهُ عَلِيمًا حَكِيمًا','kāna-llāhu ʿalīman ḥakīmā','Allah is ever Knowing, Wise — both comments take -an'],['لَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌ','lam yakul-lahū kufuwan aḥad','there is not for Him any equal (112:4) — kāna in the jussive after lam'],['وَكَانَ أَمْرُ ٱللَّهِ مَفْعُولًا','wa kāna amrullāhi mafʿūlā','and the command of Allah is ever executed (33:37)'],['لَسْتُ / لَيْسُوا','lastu / laysū','I am not / they are not'],['كُنتُ · كُنَّا · كَانُوا','kuntu · kunnā · kānū','I was · we were · they were']],head:['Sentence','Say','Meaning']},
      {tip:'In the Quran كَانَ with Allah does not mean "used to be" — it means "has always been and always will be". كَانَ ٱللَّهُ غَفُورًا = Allah is eternally Forgiving.'}
    ],
    quran:{ s:93, from:1, to:11, note:'Aḍ-Ḍuḥā: وَلَلْءَاخِرَةُ خَيْرٌ لَّكَ مِنَ ٱلْأُولَىٰ (nominal with la- of emphasis), then the past tense story of the Prophet\'s care: أَلَمْ يَجِدْكَ يَتِيمًا (did He not find you an orphan — yatīman takes -an as the second object).' },
    memorize:'Aḍ-Ḍuḥā (93) — start; finish by Day 35.',
    speak:['Say: kuntu ṭāliban (I was a student) · kuntu fil-bayt (I was at home) · laysa ʿindī waqt (I do not have time) · aṣbaḥtu musliman (I became a Muslim) · lastu ḥazīnan (I am not sad).'],
    check:'You can say "I was / I am not / he was" and know which word takes -a after kāna and after inna.' },

  { n:34, phase:3, title:'Verb forms I–IV — one root, many verbs', focus:'faʿala · faʿʿala · fāʿala · afʿala · ʿalima → ʿallama',
    learn:[
      {h:'Why عَلِمَ and عَلَّمَ are different words'},
      {p:'Arabic stretches one root through ten standard moulds (forms). Each mould adds a shade of meaning. You met form I on Day 21. Today: forms II–IV, which together cover most Quranic verbs.'},
      {table:[['I · فَعَلَ','faʿala','the basic action — عَلِمَ ʿalima "he knew", كَتَبَ, خَلَقَ'],['II · فَعَّلَ','faʿʿala','doubled middle → causing / intensive — عَلَّمَ ʿallama "he TAUGHT" (made know, 96:4) · سَبَّحَ "glorified" · نَزَّلَ "sent down bit by bit"'],['III · فَاعَلَ','fāʿala','long ā after the first root → doing WITH someone — قَاتَلَ "fought (with)" · جَاهَدَ "strove" · بَارَكَ "blessed"'],['IV · أَفْعَلَ','afʿala','hamza in front → causing — أَنزَلَ anzala "sent down" · أَرْسَلَ "sent" · أَسْلَمَ "submitted" · أَخْرَجَ "brought out"']],head:['Form','Pattern','Meaning it adds']},
      {h:'The present of each form'},
      {table:[['I','yaʿlamu','يَعْلَمُ'],['II','yuʿallimu','يُعَلِّمُ — u-prefix, doubled middle'],['III','yuqātilu','يُقَاتِلُ'],['IV','yunzilu','يُنزِلُ — u-prefix, no hamza']],head:['Form','Say','Arabic']},
      {h:'The root ع-ل-م across the forms'},
      {table:[['عَلِمَ','ʿalima','he knew'],['عَلَّمَ','ʿallama','he taught'],['تَعَلَّمَ','taʿallama','he learned (form V, tomorrow)'],['عِلْم','ʿilm','knowledge'],['عَالِم','ʿālim','scholar (one who knows)'],['مُعَلِّم','muʿallim','teacher'],['ٱلْعَلِيم','al-ʿalīm','the All-Knowing'],['عَلَامَة','ʿalāmah','sign, mark']],head:['Word','Say','Meaning']},
      {tip:'When you meet an unknown verb, strip it to its root, then look at its shape: doubled middle = II, ā after first letter = III, a- prefix in the past = IV. The meaning follows.'}
    ],
    quran:{ s:55, from:1, to:4, note:'Ar-Raḥmān 55:1–4: عَلَّمَ ٱلْقُرْءَانَ · خَلَقَ ٱلْإِنسَٰنَ · عَلَّمَهُ ٱلْبَيَانَ — form II twice and form I once, in three ayahs. Then 96:4–5 again: ٱلَّذِي عَلَّمَ بِٱلْقَلَمِ.' },
    memorize:'Ar-Raḥmān 55:1–4; continue Aḍ-Ḍuḥā.',
    speak:['Run three roots through I–IV aloud: ن-ز-ل (nazala came down · nazzala · — · anzala) · س-ل-م (salima was safe · sallama greeted · sālama made peace · aslama submitted) · ك-ت-ب.'],
    check:'You can identify forms I–IV from the shape of a verb and know what II and IV add.' },

  { n:35, phase:3, title:'Verb forms V–X', focus:'tafaʿʿala · tafāʿala · infaʿala · iftaʿala · istafʿala · nastaʿīn is form X',
    learn:[
      {h:'The reflexive and the "seeking" forms'},
      {table:[['V · تَفَعَّلَ','tafaʿʿala','ta- + doubled middle → doing it to oneself / gradually — تَعَلَّمَ "learned" · تَوَكَّلَ "relied (on Allah)" · تَذَكَّرَ "took heed"'],['VI · تَفَاعَلَ','tafāʿala','ta- + ā → doing it together / pretending — تَعَاوَنَ "cooperated" · تَكَاثَرَ "competed in abundance" (102:1)'],['VII · ٱنفَعَلَ','infaʿala','in- → passive/reflexive of I — ٱنشَقَّ "split open" (54:1) · ٱنفَطَرَ "burst" (82:1)'],['VIII · ٱفْتَعَلَ','iftaʿala','t after the first root letter → doing for oneself — ٱتَّقَىٰ "was mindful" · ٱخْتَلَفَ "differed" · ٱسْتَمَعَ "listened"'],['X · ٱسْتَفْعَلَ','istafʿala','ista- → seeking / asking for — ٱسْتَعَانَ "sought help" · ٱسْتَغْفَرَ "sought forgiveness" · ٱسْتَكْبَرَ "was arrogant (sought greatness)"']],head:['Form','Pattern','Meaning it adds']},
      {h:'Back to Al-Fatihah'},
      {ar:'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', tr:'iyyāka naʿbudu wa iyyāka nastaʿīn', en:'naʿbudu is form I of ع-ب-د (we worship); nastaʿīnu is form X of ع-و-ن (we SEEK help). You have recited a form X verb since Day 4.'},
      {table:[['ٱسْتَغْفِرْهُ','istaghfirhu','ask His forgiveness (110:3 — form X command)'],['ٱلْمُتَّقِينَ','al-muttaqīn','the mindful (2:2 — form VIII participle)'],['يَتَّقِ','yattaqi','he is mindful (jussive, form VIII)'],['تَوَكَّلْتُ عَلَى ٱللَّهِ','tawakkaltu ʿala-llāh','I have relied on Allah (form V)'],['أَلْهَىٰكُمُ ٱلتَّكَاثُرُ','alhākumut-takāthur','competition in increase distracts you (102:1 — the verbal noun of VI)']],head:['Word','Say','Meaning']},
      {tip:'Form IX (ٱفْعَلَّ) is only for colours and defects (ٱسْوَدَّ "turned black", ٱبْيَضَّ "turned white" — 3:106). Recognise it; you will not need to build it.'}
    ],
    quran:{ s:95, from:1, to:8, note:'At-Tīn: ءَامَنُوا (IV) وَعَمِلُوا (I) ٱلصَّٰلِحَٰتِ; and the closing question أَلَيْسَ ٱللَّهُ بِأَحْكَمِ ٱلْحَٰكِمِينَ — laysa from Day 33. Finish Aḍ-Ḍuḥā today.' },
    memorize:'At-Tīn (95) and Aḍ-Ḍuḥā (93) complete.',
    speak:['Say the ten forms of ف-ع-ل in order like a chant: faʿala · faʿʿala · fāʿala · afʿala · tafaʿʿala · tafāʿala · infaʿala · iftaʿala · ifʿalla · istafʿala.'],
    check:'You can chant the ten forms and name the form of nastaʿīn, ittaqā, tawakkala, anzala.' },

  { n:36, phase:3, title:'Participles — the doer and the done-to', focus:'ism al-fāʿil (fāʿil / mufaʿʿil) · ism al-mafʿūl (mafʿūl) · muslim, kāfir, ʿābid',
    learn:[
      {h:'Active participle — "the one doing"'},
      {p:'From form I the pattern is فَاعِل. From forms II–X put مُ in front of the present-tense stem and give the second-last letter a kasra.'},
      {table:[['كَافِر / كَٰفِرُونَ','kāfir / kāfirūn','one who disbelieves (109:1)'],['عَابِد / عَٰبِدُونَ','ʿābid / ʿābidūn','worshipper (109:3–5)'],['صَالِح / صَٰلِحَات','ṣāliḥ / ṣāliḥāt','righteous / righteous deeds (103:3)'],['خَالِق','khāliq','Creator'],['رَازِق','rāziq','Provider'],['مُسْلِم','muslim','one who submits (form IV → mu- + slim)'],['مُؤْمِن','mu\'min','one who believes (form IV)'],['مُعَلِّم','muʿallim','teacher (form II)'],['مُتَّقِ / مُتَّقُونَ','muttaqi / muttaqūn','the mindful (form VIII)'],['مُسْتَغْفِر','mustaghfir','one seeking forgiveness (form X)']],head:['Word','Say','Meaning']},
      {h:'Passive participle — "the one it is done to"'},
      {table:[['مَفْعُول','mafʿūl','form I pattern'],['مَعْبُود','maʿbūd','worshipped (the One worshipped)'],['مَكْتُوب','maktūb','written'],['مَغْضُوب','maghḍūb','one who is angered upon (1:7 — ٱلْمَغْضُوبِ عَلَيْهِمْ)'],['مَحْمُود','maḥmūd','praised'],['مُرْسَل','mursal','one who is sent (form IV passive)'],['مُنزَل','munzal','sent down']],head:['Word','Say','Meaning']},
      {tip:'Participles behave like adjectives AND nouns: ٱلْمُسْلِمُونَ "the Muslims" (noun), رَجُلٌ مُسْلِمٌ "a Muslim man" (adjective). Most Arabic names of people are participles: Ḥāmid (praising), Maḥmūd (praised), Muḥammad (much praised — form II passive).'}
    ],
    quran:{ s:109, from:1, to:6, note:'Al-Kāfirūn is the participle surah: ٱلْكَٰفِرُونَ, عَٰبِدُونَ (twice), عَابِدٌ. Say which are plural. Then Al-Ghāshiyah 88:1–7 for ٱلْغَٰشِيَةِ, خَٰشِعَةٌ, عَامِلَةٌ نَّاصِبَةٌ — feminine participles in a row.' },
    memorize:'Al-Ghāshiyah 88:1–7 (start; you finish it in Phase 4).',
    speak:['Make participles from verbs you know: kataba → kātib, maktūb · ʿalima → ʿālim, maʿlūm · ḥamida → ḥāmid, maḥmūd · ʿabada → ʿābid, maʿbūd.'],
    check:'You can form fāʿil and mafʿūl from any form-I verb and recognise mu- participles from forms II–X.' },

  { n:37, phase:3, title:'Verbal nouns (maṣdar) — the name of the action', focus:'ʿibādah · īmān · taqwā · ṣalāh · dhikr · the pattern per form',
    learn:[
      {h:'Every verb has a noun for the action itself'},
      {p:'English: "to believe → belief". Arabic: ءَامَنَ → إِيمَان. Form I maṣdars must be memorised (many patterns); forms II–X are regular.'},
      {table:[['I (irregular)','—','عِبَادَة ʿibādah worship · ذِكْر dhikr remembrance · عِلْم ʿilm · صَبْر ṣabr patience · حَمْد ḥamd praise · خَلْق khalq creation · قَوْل qawl speech'],['II · تَفْعِيل','tafʿīl','تَعْلِيم taʿlīm teaching · تَسْبِيح tasbīḥ glorification · تَنْزِيل tanzīl sending down (a name of the Quran)'],['III · مُفَاعَلَة / فِعَال','mufāʿalah / fiʿāl','مُجَاهَدَة · جِهَاد jihād striving · قِتَال qitāl fighting'],['IV · إِفْعَال','ifʿāl','إِيمَان īmān faith · إِسْلَام islām submission · إِنزَال · إِحْسَان iḥsān excellence'],['V · تَفَعُّل','tafaʿʿul','تَوَكُّل tawakkul reliance · تَعَلُّم taʿallum learning'],['VIII · ٱفْتِعَال','iftiʿāl','ٱسْتِمَاع istimāʿ listening · ٱخْتِلَاف ikhtilāf difference'],['X · ٱسْتِفْعَال','istifʿāl','ٱسْتِغْفَار istighfār seeking forgiveness · ٱسْتِعَانَة istiʿānah seeking help']],head:['Form','Pattern','Examples']},
      {h:'Religious vocabulary is mostly maṣdars'},
      {table:[['ٱلصَّلَوٰة','aṣ-ṣalāh','the prayer (2:3)'],['ٱلزَّكَوٰة','az-zakāh','the alms'],['ٱلصِّيَام','aṣ-ṣiyām','the fasting'],['ٱلْحَجّ','al-ḥajj','the pilgrimage'],['ٱلتَّقْوَىٰ','at-taqwā','mindfulness of Allah'],['ٱلتَّوْبَة','at-tawbah','repentance'],['ٱلرَّحْمَة','ar-raḥmah','mercy'],['ٱلْهُدَىٰ','al-hudā','guidance (2:2 هُدًى)']],head:['Word','Say','Meaning']},
      {tip:'Maṣdars are why one root gives you a whole religious vocabulary: س-ل-م → salām peace · islām · muslim · sallama greeted · salāmah safety. Collect roots, not words.'}
    ],
    quran:{ s:2, from:2, to:5, note:'2:2–5 again with new eyes: هُدًى (maṣdar), ٱلْمُتَّقِينَ (participle VIII), يُقِيمُونَ ٱلصَّلَوٰةَ (form IV verb + maṣdar), يُنفِقُونَ (IV), يُوقِنُونَ (IV).' },
    memorize:'The eight religious maṣdars; re-recite 2:1–5 identifying each word\'s type and form.',
    speak:['Say five "X is Y" sentences with maṣdars: aṣ-ṣalātu nūr (prayer is light) · aṣ-ṣabru mīftāḥul-faraj (patience is the key to relief) · al-ʿilmu nūr.'],
    check:'You can give the maṣdar of a form II, IV or X verb by pattern alone.' },

  { n:38, phase:3, title:'Prepositions with pronouns', focus:'fīhi · minhu · ʿalayhi · ilayka · lahū · bihī · maʿa · ʿinda · bayna',
    learn:[
      {h:'Preposition + suffix, all persons'},
      {table:[['لِ + …','lī · laka · laki · lahū · lahā · lanā · lakum · lahum','for me · you · you(f) · him · her · us · you all · them (note li → la before a suffix)'],['بِ + …','bī · bika · bihī · bihā · binā · bikum · bihim','with/by me…'],['فِي + …','fiyya · fīka · fīhi · fīhā · fīnā · fīkum · fīhim','in me…'],['مِن + …','minnī · minka · minhu · minhā · minnā · minkum · minhum','from me… (minnī and minnā double the n)'],['عَلَىٰ + …','ʿalayya · ʿalayka · ʿalayhi · ʿalayhā · ʿalaynā · ʿalaykum · ʿalayhim','upon me… (the ā becomes ay)'],['إِلَىٰ + …','ilayya · ilayka · ilayhi · ilayhā · ilaynā · ilaykum · ilayhim','to me…']],head:['Base','All eight','Meaning']},
      {tip:'-hu becomes -hi after an i or y sound: fīhi, bihi, ʿalayhi, ilayhi — but lahu, minhu, ʿanhu. Same for -hum → -him: ʿalayhim (1:7), fīhim.'},
      {h:'Three more you need'},
      {table:[['مَعَ','maʿa','with (in company) — مَعَ ٱلْعُسْرِ (94:5) · مَعَكُمْ with you · مَعَنَا with us'],['عِندَ','ʿinda','at, with, in the presence of · also "to have": عِندِي كِتَابٌ "I have a book" · عِندَ ٱللَّهِ "with Allah"'],['بَيْنَ','bayna','between — بَيْنَ يَدَيْهِ · بَيْنَنَا between us'],['قَبْلَ · بَعْدَ','qabla · baʿda','before · after — مِن قَبْلِكَ "before you", مِن بَعْدِهِ'],['فَوْقَ · تَحْتَ','fawqa · taḥta','above · below — مِن تَحْتِهَا ٱلْأَنْهَٰرُ "beneath which rivers flow"'],['حَوْلَ · أَمَامَ · خَلْفَ','ḥawla · amāma · khalfa','around · in front of · behind (2:255 مَا خَلْفَهُمْ)']],head:['Word','Say','Meaning']}
    ],
    quran:{ s:2, from:255, to:255, note:'Āyat al-Kursī is a preposition drill: لَّهُۥ (for Him), عِندَهُۥ (with Him), بِإِذْنِهِۦ (by His permission), بَيْنَ أَيْدِيهِمْ, خَلْفَهُمْ, بِشَىْءٍ مِّنْ عِلْمِهِۦ, بِمَا شَآءَ. Point at each.' },
    memorize:'The six preposition tables (say each row as a chant). Recite Āyat al-Kursī.',
    speak:['Answer in Arabic: ayna al-kitāb? — ʿinda-ka? — lā, maʿī (with me). Say "I have a car" (ʿindī sayyārah), "with us" (maʿanā), "before me / after me".'],
    check:'You produce lahū / bihī / ʿalayhi / minhu / ilayka / fīhā without hesitation.' },

  { n:39, phase:3, title:'Plurals in depth', focus:'broken plurals of the top words · sound plurals in every case · dual · non-human plurals',
    learn:[
      {h:'The broken plurals you cannot avoid'},
      {table:[['رَسُول → رُسُل','rasūl → rusul','messengers'],['نَبِيّ → أَنبِيَاء','nabiyy → anbiyā\'','prophets'],['كِتَاب → كُتُب','kitāb → kutub','books'],['قَلْب → قُلُوب','qalb → qulūb','hearts (2:7)'],['عَيْن → أَعْيُن','ʿayn → aʿyun','eyes'],['يَد → أَيْدِي','yad → aydī','hands (2:255)'],['سَمَآء → سَمَٰوَٰت','samā\' → samāwāt','heavens'],['أَرْض → أَرَضِين','arḍ → araḍīn','earths (rare)'],['يَوْم → أَيَّام','yawm → ayyām','days'],['نَفْس → أَنفُس / نُفُوس','nafs → anfus / nufūs','souls'],['شَىْء → أَشْيَاء','shay\' → ashyā\'','things'],['أَمْر → أُمُور','amr → umūr','matters'],['رَجُل → رِجَال','rajul → rijāl','men'],['ٱمْرَأَة → نِسَاء','imra\'ah → nisā\'','women'],['عَبْد → عِبَاد','ʿabd → ʿibād','servants'],['ءَايَة → ءَايَات','āyah → āyāt','verses (sound feminine)'],['مَلَك → مَلَٰٓئِكَة','malak → malā\'ikah','angels'],['بَاب → أَبْوَاب','bāb → abwāb','doors, gates'],['جَنَّة → جَنَّات','jannah → jannāt','gardens'],['نَهْر → أَنْهَار','nahr → anhār','rivers']],head:['Singular → plural','Say','Meaning']},
      {h:'Rules that save you'},
      {list:['Sound masculine -ūna/-īna: only for male humans and participles: مُسْلِمُونَ، ٱلْكَٰفِرُونَ، ٱلْعَٰلَمِينَ.','Sound feminine -āt: female humans AND many abstract or non-human things: مُؤْمِنَات، صَٰلِحَٰت، ءَايَٰت، سَمَٰوَٰت.','A non-human plural takes feminine SINGULAR agreement: ٱلْكُتُبُ كَبِيرَةٌ، ٱلسَّمَٰوَٰتُ عَظِيمَةٌ، هَٰذِهِ ٱلْأَيَّامُ.','Dual -āni / -ayni is fully regular: مَلَكَانِ two angels, يَدَانِ / يَدَيْنِ two hands.']}
    ],
    quran:{ s:78, from:1, to:16, note:'An-Naba 78:6–16 is a list of plurals: ٱلْجِبَالَ (mountains), أَزْوَٰجًا (pairs), ٱلْمُعْصِرَٰتِ (rain-clouds), جَنَّٰتٍ. And 2:7: قُلُوبِهِمْ · سَمْعِهِمْ · أَبْصَٰرِهِمْ.' },
    memorize:'The twenty plurals. An-Naba 78:1–5 (the opening question عَمَّ يَتَسَآءَلُونَ).',
    speak:['Say singular → plural for all twenty as a chant, twice.'],
    check:'Cover the plural column and produce fifteen of the twenty.' },

  { n:40, phase:3, title:'Negation, exception and emphasis', focus:'lā of absolute negation · illā · ghayr · the la- of emphasis · qad',
    learn:[
      {h:'لَا that denies a whole category'},
      {p:'لَا followed by a noun with -a and no tanwīn denies the category completely: لَا رَيْبَ فِيهِ "there is no doubt at all in it" (2:2). The greatest sentence in Arabic uses it.'},
      {ar:'لَآ إِلَٰهَ إِلَّا ٱللَّهُ', tr:'lā ilāha illa-llāh', en:'There is no god except Allah — lā (absolute) + ilāha (-a, no tanwīn) + illā (except) + Allāhu.'},
      {h:'Exception — إِلَّا'},
      {table:[['لَا يَعْلَمُ ٱلْغَيْبَ إِلَّا ٱللَّهُ','lā yaʿlamul-ghayba illa-llāh','no one knows the unseen except Allah'],['إِلَّا ٱلَّذِينَ ءَامَنُوا','illal-ladhīna āmanū','except those who believe (103:3)'],['مَا هُوَ إِلَّا ذِكْرٌ','mā huwa illā dhikr','it is nothing but a reminder'],['غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ','ghayril-maghḍūbi ʿalayhim','not (other than) those who earned anger (1:7) — ghayr = other than / not']],head:['Sentence','Say','Meaning']},
      {h:'Emphasis'},
      {table:[['لَ + comment','la-','surely: إِنَّ ٱلْإِنسَٰنَ لَفِي خُسْرٍ (103:2)'],['قَدْ + past','qad','certainly / has already: قَدْ أَفْلَحَ ٱلْمُؤْمِنُونَ (23:1) "the believers have certainly succeeded"'],['لَقَدْ','laqad','indeed, certainly (past): لَقَدْ خَلَقْنَا ٱلْإِنسَٰنَ (95:4)'],['نّ at the end of a verb','-anna','energetic: لَتُسْـَٔلُنَّ "you will surely be asked" (102:8)'],['إِنَّمَا','innamā','only: إِنَّمَا ٱلْمُؤْمِنُونَ إِخْوَةٌ "the believers are only brothers"']],head:['Device','Say','Meaning']},
      {tip:'Every "lā X illā Y" sentence is emphatic — it says the only X is Y. That is why the shahādah is built this way.'}
    ],
    quran:{ s:104, from:1, to:9, note:'Al-Humazah: كَلَّا (No!), لَيُنۢبَذَنَّ (he will SURELY be thrown — la- + -anna), the question وَمَآ أَدْرَىٰكَ مَا ٱلْحُطَمَةُ. Then 2:255 line 1 and 103:2–3 for lā / illā / la-.' },
    memorize:'Al-Humazah (104). The shahādah parsed word by word.',
    speak:['Say five exception sentences: lā ilāha illa-llāh · lā ḥawla wa lā quwwata illā billāh · mā ʿindī illā kitāb (I have nothing but a book).'],
    check:'You can explain every word of lā ilāha illa-llāh grammatically and recite Al-Humazah.' },

  { n:41, phase:3, title:'Conditions — if, when, whoever', focus:'in · idhā · man · law · the jussive · fa- in the answer',
    learn:[
      {h:'The condition and its answer'},
      {p:'A conditional sentence has two halves: the condition (شَرْط) and the answer (جَوَاب). In Arabic the verb in BOTH halves often goes into the jussive (last vowel dropped or -ūna → -ū). If the answer is not a plain verb, it begins with فَ.'},
      {table:[['إِن + jussive','in','if (possible): إِن تَنصُرُوا ٱللَّهَ يَنصُرْكُمْ "if you support Allah, He will support you" (47:7)'],['إِذَا + past','idhā','when (certain): إِذَا جَآءَ نَصْرُ ٱللَّهِ … فَسَبِّحْ (110:1–3) — answer begins with fa-'],['مَن + jussive','man','whoever: فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُۥ (99:7)'],['مَا / مَهْمَا','mā / mahmā','whatever: وَمَا تَفْعَلُوا مِنْ خَيْرٍ يَعْلَمْهُ ٱللَّهُ (2:197)'],['لَوْ + past','law','had… (unreal): لَوْ شَآءَ ٱللَّهُ "had Allah willed"'],['لَوْلَا','lawlā','if not for / why not']],head:['Pattern','Say','Example']},
      {h:'The jussive — the third present-tense mood'},
      {table:[['يَعْمَلُ → يَعْمَلْ','yaʿmalu → yaʿmal','drop the final -u'],['يَعْمَلُونَ → يَعْمَلُوا','yaʿmalūna → yaʿmalū','drop the -na'],['يَرَىٰ → يَرَ','yarā → yara','weak verbs lose their last long vowel — يَرَهُۥ in 99:7–8'],['يَكُونُ → يَكُنْ','yakūnu → yakun','112:4 لَمْ يَكُن']],head:['Indicative → jussive','Say','Rule']},
      {tip:'Three things trigger the jussive: لَمْ (did not), لَا of prohibition (do not), and the two halves of an إِن / مَن condition. Seeing a verb with no final vowel? Look for one of those before it.'}
    ],
    quran:{ s:99, from:1, to:8, note:'Az-Zalzalah, whole surah: إِذَا زُلْزِلَتِ (when… past shape), يَوْمَئِذٍ (on that day), فَمَن يَعْمَلْ … يَرَهُۥ twice at the end — the perfect conditional pair.' },
    memorize:'Az-Zalzalah (99) complete.',
    speak:['Say three conditions: in tadrus tanjaḥ (if you study you succeed) · idhā jā\'a ash-shitā\' … (when winter comes…) · man yaṣbir yanjaḥ (whoever is patient succeeds).'],
    check:'You can form the jussive from any present verb and recite 99:7–8 explaining each half.' },

  { n:42, phase:3, title:'Relative clauses and describing with sentences', focus:'alladhī / alladhīna + verb · mā / man as "that which / he who" · ṣifah sentences',
    learn:[
      {h:'"Those who…" is a sentence used as a description'},
      {table:[['ٱلَّذِينَ ءَامَنُوا وَعَمِلُوا ٱلصَّٰلِحَٰتِ','alladhīna āmanū wa ʿamiluṣ-ṣāliḥāt','those who believe and do righteous deeds (103:3 and 50+ more places)'],['ٱلَّذِي خَلَقَ ٱلْمَوْتَ وَٱلْحَيَوٰةَ','alladhī khalaqal-mawta wal-ḥayāh','the One who created death and life (67:2)'],['ٱلَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ','alladhīna hum ʿan ṣalātihim sāhūn','those who are heedless of their prayer (107:5)'],['ٱلَّتِي تَطَّلِعُ عَلَى ٱلْأَفْـِٔدَةِ','allatī taṭṭaliʿu ʿalal-af\'idah','which mounts up to the hearts (104:7 — feminine relative)']],head:['Phrase','Say','Meaning']},
      {h:'Without ٱلَّذِي — the indefinite way'},
      {p:'When the described noun is indefinite, Arabic drops the relative pronoun and just follows the noun with a sentence: رَجُلٌ يَعْمَلُ "a man who works" (literally "a man he-works"); كِتَابٌ فِيهِ هُدًى "a book in which is guidance".'},
      {h:'mā and man as relatives'},
      {table:[['مَا فِي ٱلسَّمَٰوَٰتِ','mā fis-samāwāt','what is in the heavens'],['مَن فِي ٱلْأَرْضِ','man fil-arḍ','whoever is on the earth'],['مَا لَمْ يَعْلَمْ','mā lam yaʿlam','what he did not know (96:5)'],['مَآ أَعْبُدُ','mā aʿbud','what I worship (109:2)']],head:['Phrase','Say','Meaning']},
      {tip:'The pronoun that points back (عَائِد) is often inside the clause: ٱلْكِتَابُ ٱلَّذِي قَرَأْتُهُ "the book which I read IT". English drops the "it"; Arabic keeps it.'}
    ],
    quran:{ s:98, from:7, to:8, note:'Al-Bayyinah 98:7–8: إِنَّ ٱلَّذِينَ ءَامَنُوا وَعَمِلُوا ٱلصَّٰلِحَٰتِ أُو۟لَٰٓئِكَ هُمْ خَيْرُ ٱلْبَرِيَّةِ — inna + relative clause + demonstrative + pronoun of separation, in one ayah. Then 103 whole.' },
    memorize:'Al-Bayyinah 98:7–8; Al-ʿAṣr parsed and explained.',
    speak:['Describe three people with relative clauses: ar-rajulu-lladhī yaʿmalu maʿī (the man who works with me) · al-kitābu-lladhī qara\'tuhu · al-madīnatu-llatī askunu fīhā (the city which I live in).'],
    check:'You can build "the X who/which…" for masculine, feminine and plural with the returning pronoun in place.' },

  { n:43, phase:3, title:'Calling and asking — the language of duʿā', focus:'yā · rabbanā · Allāhumma · the Rabbanā duas of Al-Baqarah',
    learn:[
      {h:'The vocative'},
      {table:[['يَا + name','yā','O — يَا رَبِّ yā rabbi (O my Lord), يَا رَسُولَ ٱللَّهِ (the first word of an iḍāfa takes -a)'],['يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا','yā ayyuhal-ladhīna āmanū','O you who believe — 89 times in the Quran'],['يَٰٓأَيُّهَا ٱلنَّاسُ','yā ayyuhan-nās','O mankind'],['رَبَّنَا','rabbanā','Our Lord! (yā dropped, rabb takes -a)'],['ٱللَّهُمَّ','Allāhumma','O Allah (the -umma replaces yā)']],head:['Form','Say','Meaning']},
      {h:'Duʿā verbs are commands addressed to Allah'},
      {table:[['ءَاتِنَا','ātinā','give us (form IV command + nā)'],['ٱغْفِرْ لَنَا','ighfir lanā','forgive us'],['ٱرْحَمْنَا','irḥamnā','have mercy on us'],['ٱهْدِنَا','ihdinā','guide us (1:6)'],['قِنَا','qinā','protect us (from waqā)'],['لَا تُؤَاخِذْنَآ','lā tu\'ākhidhnā','do not take us to task'],['تَقَبَّلْ مِنَّا','taqabbal minnā','accept from us (2:127)'],['ٱنصُرْنَا','unṣurnā','help us']],head:['Word','Say','Meaning']},
      {ar:'رَبَّنَآ ءَاتِنَا فِي ٱلدُّنْيَا حَسَنَةً وَفِي ٱلْءَاخِرَةِ حَسَنَةً وَقِنَا عَذَابَ ٱلنَّارِ', tr:'rabbanā ātinā fid-dunyā ḥasanatan wa fil-ākhirati ḥasanatan wa qinā ʿadhāban-nār', en:'Our Lord, give us in this world good and in the Hereafter good, and protect us from the punishment of the Fire (2:201).'},
      {tip:'Every dua in the Quran is a grammar lesson: vocative (rabbanā) + command (ātinā) + object (ḥasanatan, -an). Once you see the shape you can make your own duas in fusha — that is Day 53.'}
    ],
    quran:{ s:2, from:201, to:201, note:'2:201 today, then 2:286 (the closing dua of Al-Baqarah): رَبَّنَا لَا تُؤَاخِذْنَآ … رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَآ إِصْرًا … وَٱعْفُ عَنَّا وَٱغْفِرْ لَنَا وَٱرْحَمْنَآ. Count the commands.' },
    memorize:'2:201 and the dua portion of 2:286 (from رَبَّنَا لَا تُؤَاخِذْنَا to the end).',
    speak:['Say five duas of your own using the table: Allāhumma ighfir lī · rabbi irḥamnī · rabbanā ihdinā · Allāhumma unṣur ahlanā.'],
    check:'You can recite 2:201 and explain -an on ḥasanatan; you can address Allah in fusha in three different ways.' },

  { n:44, phase:3, title:'All, some, many, few — quantity and comparison', focus:'kull · baʿḍ · kathīr · qalīl · akthar · khayr min · afʿal pattern',
    learn:[
      {h:'Quantity words (they sit first in an iḍāfa)'},
      {table:[['كُلّ','kull','every / all — كُلُّ نَفْسٍ ذَآئِقَةُ ٱلْمَوْتِ "every soul will taste death" (3:185) · كُلُّ شَىْءٍ everything'],['بَعْض','baʿḍ','some (of) — بَعْضُهُمْ some of them · بَعْضُكُمْ لِبَعْضٍ'],['جَمِيع','jamīʿ','all together — جَمِيعًا all of them'],['كَثِير','kathīr','many, much — كَثِيرٌ مِّنَ ٱلنَّاسِ'],['قَلِيل','qalīl','few, little — قَلِيلًا مَّا تَشْكُرُونَ "little do you give thanks"'],['أَكْثَر','akthar','most / more — أَكْثَرُهُمْ لَا يَعْلَمُونَ "most of them do not know"'],['كِلَا / كِلْتَا','kilā / kiltā','both (m / f)']],head:['Word','Say','Meaning']},
      {h:'Comparison — the أَفْعَل pattern'},
      {table:[['كَبِير → أَكْبَر','kabīr → akbar','big → bigger / biggest — ٱللَّهُ أَكْبَرُ'],['عَظِيم → أَعْظَم','ʿaẓīm → aʿẓam','greater'],['حَسَن → أَحْسَن','ḥasan → aḥsan','better, best — أَحْسَنِ تَقْوِيمٍ (95:4)'],['عَلِيم → أَعْلَم','ʿalīm → aʿlam','more knowing — ٱللَّهُ أَعْلَمُ'],['حَكِيم → أَحْكَم','ḥakīm → aḥkam','wisest — أَحْكَمِ ٱلْحَٰكِمِينَ (95:8)'],['خَيْر / شَرّ','khayr / sharr','better / worse (irregular) — خَيْرٌ لَّكَ مِنَ ٱلْأُولَىٰ (93:4)']],head:['Base → comparative','Say','Meaning']},
      {tip:'"X is better than Y" = X khayrun min Y. "the best of the people" = khayrun-nās or khayrul-bariyyah (98:7). مِن after a comparative is "than".'}
    ],
    quran:{ s:102, from:1, to:8, note:'At-Takāthur: ٱلتَّكَاثُرُ (competing for MORE — the comparative idea as a verb form VI), كَلَّا سَوْفَ تَعْلَمُونَ (the future marker sawfa), and the energetic لَتَرَوُنَّ / لَتُسْـَٔلُنَّ.' },
    memorize:'At-Takāthur (102).',
    speak:['Compare things around you: hādhā akbaru min dhālik · al-ʿilmu khayrun minal-māl (knowledge is better than wealth) · baʿḍun-nāsi ṭawīl (some people are tall) · aktharul-ʿummāli aqwiyā\' (most workers are strong).'],
    check:'You can say "all / some / most of them" and make a comparative from three adjectives.' },

  { n:45, phase:3, title:'Phase 3 review — parse Āyat al-Kursī', focus:'every word, every ending, every form · recite it from memory',
    learn:[
      {h:'The parse'},
      {table:[['ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ','Allāhu lā ilāha illā huwa','topic (Allāhu, -u) + lā of absolute negation (ilāha, -a) + exception (illā) + pronoun'],['ٱلْحَىُّ ٱلْقَيُّومُ','al-ḥayyul-qayyūm','two definite adjectives / Names, -u agreeing with the topic; qayyūm = intensive pattern faʿʿūl'],['لَا تَأْخُذُهُۥ سِنَةٌ وَلَا نَوْمٌ','lā ta\'khudhuhū sinatun wa lā nawm','negated present verb (form I, ta- for feminine sinah) + object pronoun + two doers with -un'],['لَّهُۥ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلْأَرْضِ','lahū mā fis-samāwāti wa mā fil-arḍ','comment first (lahū) + relative mā + preposition + plural (-āti after fī)'],['مَن ذَا ٱلَّذِي يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ','man dhal-ladhī yashfaʿu ʿindahū illā bi-idhnih','question (man) + demonstrative + relative + present verb + ʿinda + exception'],['يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ','yaʿlamu mā bayna aydīhim wa mā khalfahum','verb + relative objects; bayna and khalfa as adverbs of place in iḍāfa with plurals'],['وَلَا يُحِيطُونَ بِشَىْءٍ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ','wa lā yuḥīṭūna bi-shay\'im-min ʿilmihī illā bimā shā\'','form IV plural verb, negated; bi + indefinite (tanwīn merges into min: Day 11); exception + relative + past verb'],['وَسِعَ كُرْسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ','wasiʿa kursiyyuhus-samāwāti wal-arḍ','verbal sentence: verb + doer (kursiyyuhu, -u) + objects (samāwāti takes -i as feminine plural object; al-arḍa takes -a)'],['وَلَا يَـُٔودُهُۥ حِفْظُهُمَا','wa lā ya\'ūduhū ḥifẓuhumā','negated verb + object pronoun + doer (ḥifẓu) + DUAL pronoun -humā (the two of them: heavens and earth)'],['وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ','wa huwal-ʿaliyyul-ʿaẓīm','nominal sentence: pronoun topic + two definite Names']],head:['Segment','Say','Grammar']},
      {h:'Self-test'},
      {list:['Recite Āyat al-Kursī from memory, then explain any segment I point to (use the table to check).','Open any short surah you have not studied (Al-Infiṭār 82, Al-Inshiqāq 84) and label each word: noun/verb/particle, case, verb form.','Recite everything memorized: 1, 2:1–5, 2:201, 2:255, 2:286 (dua), 55:1–4, 59:22–24, 93, 94, 95, 96:1–8, 97, 98:7–8, 99, 102, 103, 104, 105–114.']},
      {tip:'You now hold the grammar most Arabic students take two years to reach. Phase 4 turns it into speech.'}
    ],
    quran:{ s:2, from:255, to:255, note:'Āyat al-Kursī — recite from memory first, then read and check every ending against the parse table.' },
    memorize:'Consolidate — everything in the self-test list.',
    speak:['Explain Āyat al-Kursī in English, phrase by phrase, out loud, as if teaching it.'],
    check:'You recite Āyat al-Kursī from memory and can parse any segment of it. Phase 3 complete.' },

  /* ================= PHASE 4 — SPEAK FUSHA ================= */
  { n:46, phase:4, title:'Greetings and introducing yourself', focus:'as-salāmu ʿalaykum · kayfa ḥāluka · mā ismuka · anā min Kanadā',
    learn:[
      {h:'The greeting, and its reply'},
      {table:[['ٱلسَّلَامُ عَلَيْكُمْ','as-salāmu ʿalaykum','peace be upon you'],['وَعَلَيْكُمُ ٱلسَّلَامُ وَرَحْمَةُ ٱللَّهِ','wa ʿalaykumus-salāmu wa raḥmatullāh','and upon you peace and the mercy of Allah — the Quran tells you to reply with better (4:86)'],['صَبَاحَ ٱلْخَيْرِ / مَسَاءَ ٱلْخَيْرِ','ṣabāḥal-khayr / masā\'al-khayr','good morning / good evening'],['أَهْلًا وَسَهْلًا','ahlan wa sahlan','welcome'],['مَعَ ٱلسَّلَامَةِ','maʿas-salāmah','goodbye (go with safety)']],head:['Arabic','Say','Meaning']},
      {h:'Small talk'},
      {table:[['كَيْفَ حَالُكَ؟','kayfa ḥāluk?','how are you? (to a man; ḥāluki to a woman)'],['بِخَيْرٍ، ٱلْحَمْدُ لِلَّهِ','bi-khayr, al-ḥamdu lillāh','well, praise be to Allah'],['مَا ٱسْمُكَ؟','ma-smuk?','what is your name?'],['ٱسْمِي أَحْمَد','ismī Aḥmad','my name is Ahmed'],['مِنْ أَيْنَ أَنْتَ؟','min ayna ant?','where are you from?'],['أَنَا مِنْ كَنَدَا','anā min Kanadā','I am from Canada'],['أَنَا كَنَدِيّ','anā kanadiyy','I am Canadian'],['أَسْكُنُ فِي كِتْشِنَر','askunu fī Kitchener','I live in Kitchener'],['تَشَرَّفْنَا','tasharrafnā','pleased to meet you (we are honoured)'],['شُكْرًا · عَفْوًا','shukran · ʿafwan','thank you · you are welcome'],['نَعَمْ · لَا · رُبَّمَا','naʿam · lā · rubbamā','yes · no · maybe'],['جَزَاكَ ٱللَّهُ خَيْرًا','jazāka-llāhu khayrā','may Allah reward you with good']],head:['Arabic','Say','Meaning']},
      {h:'Your five-sentence introduction (fill in yours)'},
      {list:['ٱلسَّلَامُ عَلَيْكُمْ. ٱسْمِي أَحْمَد.','أَنَا مِنْ كَنَدَا، وَأَسْكُنُ فِي كِتْشِنَر.','أَنَا مُسْلِمٌ، وَأَعْمَلُ فِي ٱلْبِنَاءِ (I work in construction).','أَتَعَلَّمُ ٱلْعَرَبِيَّةَ لِأَفْهَمَ ٱلْقُرْءَانَ (I am learning Arabic to understand the Quran).','تَشَرَّفْنَا.']},
      {tip:'Fusha is what the Quran, the news and every educated Arab in every country understands. Speak it slowly with full endings — nobody will laugh; they will be impressed.'}
    ],
    quran:{ s:4, from:86, to:86, note:'An-Nisā 4:86 — the greeting ayah: وَإِذَا حُيِّيتُم بِتَحِيَّةٍ فَحَيُّوا بِأَحْسَنَ مِنْهَآ أَوْ رُدُّوهَآ — a conditional (idhā), a comparative (aḥsana), and two commands (ḥayyū, ruddū).' },
    memorize:'Your introduction by heart. Ash-Shams 91:1–8 (start).',
    speak:['Record yourself giving the introduction; listen back for endings and for ḥ / ʿ / q.'],
    check:'You can greet, reply, give your name, city and job, and say goodbye — all in fusha.' },

  { n:47, phase:4, title:'My day — routine verbs in the present', focus:'astayqiẓu · uṣallī · adhhabu ilal-ʿamal · aqra\'u · anāmu',
    learn:[
      {h:'The verbs of a day'},
      {table:[['أَسْتَيْقِظُ','astayqiẓu','I wake up (form X)'],['أُصَلِّي ٱلْفَجْرَ','uṣallil-fajr','I pray Fajr (form II)'],['أَتَوَضَّأُ','atawaḍḍa\'u','I make wuḍū (form V)'],['ءَاكُلُ · أَشْرَبُ','ākulu · ashrabu','I eat · I drink'],['أَذْهَبُ إِلَى ٱلْعَمَلِ','adhhabu ilal-ʿamal','I go to work'],['أَعْمَلُ','aʿmalu','I work'],['أَرْجِعُ إِلَى ٱلْبَيْتِ','arjiʿu ilal-bayt','I return home'],['أَتَدَرَّبُ','atadarrabu','I train / work out (form V)'],['أَقْرَأُ ٱلْقُرْءَانَ','aqra\'ul-qur\'ān','I read the Quran'],['أَدْرُسُ ٱلْعَرَبِيَّةَ','adrusul-ʿarabiyyah','I study Arabic'],['أَنَامُ','anāmu','I sleep'],['أَحْفَظُ','aḥfaẓu','I memorise']],head:['Arabic','Say','Meaning']},
      {h:'Time and order'},
      {table:[['فِي ٱلصَّبَاحِ · فِي ٱلْمَسَاءِ','fiṣ-ṣabāḥ · fil-masā\'','in the morning · in the evening'],['قَبْلَ ٱلْفَجْرِ · بَعْدَ ٱلْعِشَاءِ','qablal-fajr · baʿdal-ʿishā\'','before Fajr · after ʿIshā'],['ثُمَّ','thumma','then'],['كُلَّ يَوْمٍ','kulla yawm','every day'],['فِي ٱلسَّاعَةِ ٱلْخَامِسَةِ','fis-sāʿatil-khāmisah','at five o\'clock (the fifth hour)'],['عَادَةً','ʿādatan','usually']],head:['Arabic','Say','Meaning']},
      {h:'Model paragraph'},
      {p:'أَسْتَيْقِظُ قَبْلَ ٱلْفَجْرِ، ثُمَّ أَتَوَضَّأُ وَأُصَلِّي. بَعْدَ ٱلصَّلَاةِ أَتَدَرَّبُ، ثُمَّ أَذْهَبُ إِلَى ٱلْعَمَلِ. فِي ٱلْمَسَاءِ أَقْرَأُ ٱلْقُرْءَانَ وَأَدْرُسُ ٱلْعَرَبِيَّةَ، ثُمَّ أَنَامُ.'},
      {p:'astayqiẓu qablal-fajr, thumma atawaḍḍa\'u wa uṣallī. baʿdaṣ-ṣalāti atadarrabu, thumma adhhabu ilal-ʿamal. fil-masā\'i aqra\'ul-qur\'āna wa adrusul-ʿarabiyyah, thumma anām.'}
    ],
    quran:{ s:17, from:78, to:78, note:'Al-Isrā 17:78 — the ayah that sets the prayer times: أَقِمِ ٱلصَّلَوٰةَ لِدُلُوكِ ٱلشَّمْسِ إِلَىٰ غَسَقِ ٱلَّيْلِ وَقُرْءَانَ ٱلْفَجْرِ. Then continue Ash-Shams 91:9–15.' },
    memorize:'Ash-Shams (91) complete. Your own "my day" paragraph.',
    speak:['Say your real day in Arabic, morning to night, changing the model paragraph. Do it twice: once for a work day, once for an off day.'],
    check:'You can narrate your day in eight present-tense sentences without notes.' },

  { n:48, phase:4, title:'Describing things — colours, sizes, feelings of things', focus:'kabīr · ṣaghīr · jadīd · qadīm · colours · hādhā X Y',
    learn:[
      {h:'Adjectives you will use daily'},
      {table:[['كَبِير / صَغِير','kabīr / ṣaghīr','big / small'],['جَدِيد / قَدِيم','jadīd / qadīm','new / old'],['طَوِيل / قَصِير','ṭawīl / qaṣīr','tall, long / short'],['جَمِيل / قَبِيح','jamīl / qabīḥ','beautiful / ugly'],['سَهْل / صَعْب','sahl / ṣaʿb','easy / hard'],['قَرِيب / بَعِيد','qarīb / baʿīd','near / far'],['حَارّ / بَارِد','ḥārr / bārid','hot / cold'],['نَظِيف / وَسِخ','naẓīf / wasikh','clean / dirty'],['سَرِيع / بَطِيء','sarīʿ / baṭī\'','fast / slow'],['غَالٍ / رَخِيص','ghālin / rakhīṣ','expensive / cheap'],['قَوِيّ / ضَعِيف','qawiyy / ḍaʿīf','strong / weak'],['كَثِير / قَلِيل','kathīr / qalīl','many / few']],head:['Arabic','Say','Meaning']},
      {h:'Colours (masculine / feminine)'},
      {table:[['أَبْيَض / بَيْضَاء','abyaḍ / bayḍā\'','white'],['أَسْوَد / سَوْدَاء','aswad / sawdā\'','black'],['أَحْمَر / حَمْرَاء','aḥmar / ḥamrā\'','red'],['أَخْضَر / خَضْرَاء','akhḍar / khaḍrā\'','green — the colour of paradise\'s garments (76:21)'],['أَزْرَق / زَرْقَاء','azraq / zarqā\'','blue'],['أَصْفَر / صَفْرَاء','aṣfar / ṣafrā\'','yellow — بَقَرَةٌ صَفْرَآءُ (2:69)']],head:['Arabic','Say','Meaning']},
      {h:'Put it together'},
      {table:[['هَٰذَا بَيْتٌ كَبِيرٌ','hādhā baytun kabīr','this is a big house'],['ٱلسَّيَّارَةُ جَدِيدَةٌ وَسَرِيعَةٌ','as-sayyāratu jadīdatun wa sarīʿah','the car is new and fast'],['ٱلْعَمَلُ صَعْبٌ لَٰكِنَّهُ جَمِيلٌ','al-ʿamalu ṣaʿbun lākinnahū jamīl','the work is hard but it is beautiful'],['ٱلْجَوُّ بَارِدٌ ٱلْيَوْمَ','al-jawwu bāridunil-yawm','the weather is cold today'],['ٱلْمَسْجِدُ قَرِيبٌ مِنَ ٱلْبَيْتِ','al-masjidu qarībun minal-bayt','the mosque is near the house']],head:['Arabic','Say','Meaning']}
    ],
    quran:{ s:87, from:1, to:9, note:'Al-Aʿlā 87:1–9: ٱلْأَعْلَى (the Most High — comparative pattern), غُثَآءً أَحْوَىٰ (dark debris — a colour word), ٱلْيُسْرَىٰ. Memorise 1–9 today, 10–19 tomorrow.' },
    memorize:'Al-Aʿlā 87:1–9. Twelve adjective pairs and six colours.',
    speak:['Describe your room, your truck, your tools and today\'s weather — ten sentences, each with an adjective that agrees.'],
    check:'You can describe five objects with correct gender agreement and name the six colours.' },

  { n:49, phase:4, title:'Conversation drill — questions and answers', focus:'a dialogue at the mosque and one at work · answering in full sentences',
    learn:[
      {h:'Dialogue 1 — at the mosque'},
      {table:[['أ: ٱلسَّلَامُ عَلَيْكُمْ يَا أَخِي.','A: as-salāmu ʿalaykum yā akhī.','Peace be upon you, my brother.'],['ب: وَعَلَيْكُمُ ٱلسَّلَامُ. كَيْفَ حَالُكَ؟','B: wa ʿalaykumus-salām. kayfa ḥāluk?','And upon you peace. How are you?'],['أ: بِخَيْرٍ، ٱلْحَمْدُ لِلَّهِ. هَلْ صَلَّيْتَ ٱلْعِشَاءَ؟','A: bi-khayr, al-ḥamdu lillāh. hal ṣallaytal-ʿishā\'?','Well, praise Allah. Have you prayed ʿIshā?'],['ب: لَا، لَمْ أُصَلِّ بَعْدُ. مَتَى ٱلصَّلَاةُ؟','B: lā, lam uṣalli baʿd. matāṣ-ṣalāh?','No, I have not prayed yet. When is the prayer?'],['أ: بَعْدَ عَشْرِ دَقَائِقَ إِنْ شَاءَ ٱللَّهُ.','A: baʿda ʿashri daqā\'iq in shā\'a-llāh.','In ten minutes, God willing.'],['ب: جَزَاكَ ٱللَّهُ خَيْرًا.','B: jazāka-llāhu khayrā.','May Allah reward you.']],head:['Arabic','Say','Meaning']},
      {h:'Dialogue 2 — at work'},
      {table:[['أ: مَاذَا تَعْمَلُ؟','A: mādhā taʿmal?','What do you do?'],['ب: أَنَا عَامِلُ بِنَاءٍ. أَعْمَلُ ٱثْنَيْ عَشَرَ سَاعَةً فِي ٱلْيَوْمِ.','B: anā ʿāmilu binā\'. aʿmalu-thnay ʿashara sāʿatan fil-yawm.','I am a construction worker. I work twelve hours a day.'],['أ: هَلِ ٱلْعَمَلُ صَعْبٌ؟','A: halil-ʿamalu ṣaʿb?','Is the work hard?'],['ب: نَعَمْ، لَٰكِنِّي أُحِبُّهُ.','B: naʿam, lākinnī uḥibbuh.','Yes, but I love it.'],['أ: مَاذَا تَفْعَلُ فِي أَيَّامِ ٱلْعُطْلَةِ؟','A: mādhā tafʿalu fī ayyāmil-ʿuṭlah?','What do you do on your days off?'],['ب: أَبْنِي مَشْرُوعِي وَأَدْرُسُ ٱلْقُرْءَانَ.','B: abnī mashrūʿī wa adrusul-qur\'ān.','I build my project and study the Quran.']],head:['Arabic','Say','Meaning']},
      {h:'Answer patterns'},
      {list:['hal…? → naʿam, … / lā, … (repeat the verb: hal taʿmal? — naʿam, aʿmal).','mādhā…? → a full verbal sentence.','ayna…? → fī / ʿinda / qarīb min + place.','matā…? → baʿda / qabla / fī + time.','limādhā…? → li-anna… (because…): limādhā tadrus? — li-annī uḥibbul-qur\'ān.']},
      {tip:'Fusha speakers say full sentences. Answer "hal anta muslim?" with "naʿam, anā muslim" not "naʿam". It trains the grammar for free.'}
    ],
    quran:{ s:87, from:10, to:19, note:'Al-Aʿlā 87:10–19: a conditional reminder (سَيَذَّكَّرُ مَن يَخْشَىٰ), the comparative again (خَيْرٌ وَأَبْقَىٰ), and the mention of the scrolls of Ibrāhīm and Mūsā.' },
    memorize:'Al-Aʿlā (87) complete. Both dialogues.',
    speak:['Read both dialogues aloud playing both parts, then improvise a third one at a store (kam hādhā? — how much is this?).'],
    check:'You can hold a two-minute exchange answering hal / mādhā / ayna / matā / limādhā in full sentences.' },

  { n:50, phase:4, title:'Work and the trades in fusha', focus:'binā\' · ʿāmil · ādāt · mawqiʿ · describing your job',
    learn:[
      {h:'Construction and trades vocabulary'},
      {table:[['بِنَاء / بَنَّاء','binā\' / bannā\'','building, construction / a builder'],['مَوْقِعُ ٱلْعَمَلِ','mawqiʿul-ʿamal','the job site'],['عَامِل / عُمَّال','ʿāmil / ʿummāl','worker / workers'],['مُقَاوِل','muqāwil','contractor'],['مُهَنْدِس','muhandis','engineer'],['أَدَاة / أَدَوَات','adāh / adawāt','tool / tools'],['مِطْرَقَة · مِنْشَار · مِفَكّ','miṭraqah · minshār · mifakk','hammer · saw · screwdriver'],['خَشَب · حَدِيد · حَجَر · إِسْمَنْت','khashab · ḥadīd · ḥajar · ismant','wood · iron · stone · cement'],['جِدَار · سَقْف · أَرْضِيَّة · بَاب · نَافِذَة','jidār · saqf · arḍiyyah · bāb · nāfidhah','wall · roof · floor · door · window'],['حَدِيقَة · مَنْظَر','ḥadīqah · manẓar','garden · landscape'],['كَهْرَبَاء · سِبَاكَة · تَدْفِئَة','kahrabā\' · sibākah · tadfi\'ah','electricity · plumbing · heating'],['سُلَّم · قِيَاس · مِتْر','sullam · qiyās · mitr','ladder · measurement · metre'],['عَرْضُ سِعْرٍ · فَاتُورَة · عَقْد','ʿarḍu siʿr · fātūrah · ʿaqd','a quote · invoice · contract'],['زَبُون / عَمِيل','zabūn / ʿamīl','customer / client'],['هَاتِف · رِسَالَة · مَوْعِد','hātif · risālah · mawʿid','phone · message · appointment']],head:['Arabic','Say','Meaning']},
      {h:'Verbs of the trade'},
      {table:[['أَبْنِي / بَنَىٰ','abnī / banā','I build / he built — 2:127 وَإِذْ يَرْفَعُ إِبْرَٰهِـۧمُ ٱلْقَوَاعِدَ مِنَ ٱلْبَيْتِ'],['أُصْلِحُ','uṣliḥu','I repair / fix (form IV — from the root of ṣāliḥ)'],['أَقِيسُ','aqīsu','I measure'],['أَقْطَعُ','aqṭaʿu','I cut'],['أَحْمِلُ','aḥmilu','I carry'],['أُرَكِّبُ','urakkibu','I install (form II)'],['أُنَظِّفُ','unaẓẓifu','I clean'],['أَتَّصِلُ بِـ','attaṣilu bi-','I call (someone) (form VIII)']],head:['Arabic','Say','Meaning']},
      {h:'Your job in three sentences'},
      {p:'أَعْمَلُ فِي ٱلْبِنَاءِ مُنْذُ خَمْسِ سَنَوَاتٍ. أَبْنِي وَأُصْلِحُ وَأُرَكِّبُ. وَأَبْنِي ٱلْآنَ نِظَامًا بِٱلذَّكَاءِ ٱلِٱصْطِنَاعِيِّ لِأَصْحَابِ ٱلْمِهَنِ. — aʿmalu fil-binā\'i mundhu khamsi sanawāt. abnī wa uṣliḥu wa urakkib. wa abnil-āna niẓāman bidh-dhakā\'il-iṣṭināʿiyyi li-aṣḥābil-mihan. (I have worked in construction for five years. I build, repair and install. And now I am building an AI system for tradespeople.)'}
    ],
    quran:{ s:16, from:80, to:81, note:'An-Naḥl 16:80–81: houses (بُيُوتِكُمْ), tents of hides, wool and hair, shade (ظِلَٰلًا), shelters in the mountains (أَكْنَٰنًا), garments — the Quran on building and shelter. Start Al-Ghāshiyah 88:8–16.' },
    memorize:'Al-Ghāshiyah 88:1–16. Your job paragraph.',
    speak:['Name ten tools or materials you touched this week in Arabic; then explain a task you did yesterday in three sentences.'],
    check:'You can describe your job and your tools in fusha without the table.' },

  { n:51, phase:4, title:'Telling what happened — past-tense storytelling', focus:'ams · thumma · fa · baʿda an · lammā · ʿindamā · qabla an',
    learn:[
      {h:'Connectors for a story'},
      {table:[['أَمْسِ','amsi','yesterday'],['أَوَّلًا · ثُمَّ · بَعْدَ ذَٰلِكَ · أَخِيرًا','awwalan · thumma · baʿda dhālik · akhīran','first · then · after that · finally'],['فَ','fa-','and so / then (immediately)'],['لَمَّا / عِنْدَمَا','lammā / ʿindamā','when (past)'],['بَعْدَ أَنْ / قَبْلَ أَنْ','baʿda an / qabla an','after / before (+ verb)'],['بَيْنَمَا','baynamā','while'],['لِأَنَّ','li-anna','because'],['لِذَٰلِكَ','li-dhālik','therefore']],head:['Arabic','Say','Meaning']},
      {h:'Model story'},
      {p:'أَمْسِ ٱسْتَيْقَظْتُ مُبَكِّرًا وَصَلَّيْتُ ٱلْفَجْرَ. ثُمَّ ذَهَبْتُ إِلَى مَوْقِعِ ٱلْعَمَلِ. عِنْدَمَا وَصَلْتُ، كَانَ ٱلْجَوُّ بَارِدًا. عَمِلْنَا حَتَّى ٱلْمَسَاءِ، وَبَعْدَ أَنْ رَجَعْتُ إِلَى ٱلْبَيْتِ قَرَأْتُ ٱلْقُرْءَانَ وَنِمْتُ.'},
      {p:'amsi-stayqaẓtu mubakkiran wa ṣallaytul-fajr. thumma dhahabtu ilā mawqiʿil-ʿamal. ʿindamā waṣaltu, kānal-jawwu bāridā. ʿamilnā ḥattal-masā\', wa baʿda an rajaʿtu ilal-bayti qara\'tul-qur\'āna wa nimt. (Yesterday I woke early and prayed Fajr. Then I went to the site. When I arrived the weather was cold. We worked until evening, and after I returned home I read the Quran and slept.)'},
      {h:'Past tense of the verbs of Day 47'},
      {table:[['ٱسْتَيْقَظْتُ · صَلَّيْتُ · تَوَضَّأْتُ','istayqaẓtu · ṣallaytu · tawaḍḍa\'tu','I woke · I prayed · I made wuḍū'],['أَكَلْتُ · شَرِبْتُ · ذَهَبْتُ · رَجَعْتُ','akaltu · sharibtu · dhahabtu · rajaʿtu','I ate · drank · went · returned'],['عَمِلْتُ · قَرَأْتُ · دَرَسْتُ · نِمْتُ','ʿamiltu · qara\'tu · darastu · nimtu','I worked · read · studied · slept'],['رَأَيْتُ · سَمِعْتُ · قُلْتُ · كُنْتُ','ra\'aytu · samiʿtu · qultu · kuntu','I saw · heard · said · was']],head:['Arabic','Say','Meaning']}
    ],
    quran:{ s:12, from:4, to:4, note:'Yūsuf 12:4 — a story told in the past: إِذْ قَالَ يُوسُفُ لِأَبِيهِ يَٰٓأَبَتِ إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا وَٱلشَّمْسَ وَٱلْقَمَرَ رَأَيْتُهُمْ لِي سَٰجِدِينَ — idh (when), qāla, ra\'aytu, a number, and a vocative to his father.' },
    memorize:'Yūsuf 12:4. Al-Ghāshiyah 88:17–26 (finish the surah).',
    speak:['Tell yesterday in eight sentences using at least four connectors. Then tell a story from a job site.'],
    check:'You can narrate a past day with connectors and correct past-tense endings.' },

  { n:52, phase:4, title:'Tomorrow, plans and "in shā\' Allāh"', focus:'sa- · sawfa · urīdu an · yajibu an · astaṭīʿu an · Al-Kahf 18:23–24',
    learn:[
      {h:'The future'},
      {table:[['سَأَذْهَبُ','sa-adhhabu','I will go (near future: sa- + present)'],['سَوْفَ نَعْلَمُ','sawfa naʿlamu','we shall know (further future)'],['غَدًا · بَعْدَ غَدٍ · ٱلْأُسْبُوعَ ٱلْقَادِمَ','ghadan · baʿda ghad · al-usbūʿal-qādim','tomorrow · the day after · next week'],['إِنْ شَاءَ ٱللَّهُ','in shā\'a-llāh','if Allah wills — commanded for any future plan (18:23–24)']],head:['Arabic','Say','Meaning']},
      {h:'Wanting, needing, being able — verb + أَنْ + present'},
      {table:[['أُرِيدُ أَنْ أَتَعَلَّمَ','urīdu an ataʿallam','I want to learn (the verb after an takes -a)'],['يَجِبُ أَنْ أَعْمَلَ','yajibu an aʿmal','I must work (it is necessary that…)'],['أَسْتَطِيعُ أَنْ أَقْرَأَ','astaṭīʿu an aqra\'','I can read'],['أُحِبُّ أَنْ أُسَافِرَ','uḥibbu an usāfir','I love to travel'],['أَحْتَاجُ إِلَىٰ','aḥtāju ilā','I need (+ noun)'],['أَنْوِي أَنْ','anwī an','I intend to — every deed is by its intention']],head:['Arabic','Say','Meaning']},
      {h:'Your plan, out loud'},
      {p:'غَدًا سَأَعْمَلُ عَلَى مَشْرُوعِي إِنْ شَاءَ ٱللَّهُ. أُرِيدُ أَنْ أُنْهِيَ ٱلْجُزْءَ ٱلْأَوَّلَ قَبْلَ ٱلْعَصْرِ. وَبَعْدَ ٱلْمَغْرِبِ أَنْوِي أَنْ أَحْفَظَ صَفْحَةً مِنَ ٱلْقُرْءَانِ.'},
      {p:'ghadan sa-aʿmalu ʿalā mashrūʿī in shā\'a-llāh. urīdu an unhiyal-juz\'al-awwala qablal-ʿaṣr. wa baʿdal-maghribi anwī an aḥfaẓa ṣafḥatan minal-qur\'ān. (Tomorrow I will work on my project, God willing. I want to finish the first part before ʿAṣr. And after Maghrib I intend to memorise a page of the Quran.)'}
    ],
    quran:{ s:18, from:23, to:24, note:'Al-Kahf 18:23–24: وَلَا تَقُولَنَّ لِشَا۟يْءٍ إِنِّي فَاعِلٌ ذَٰلِكَ غَدًا · إِلَّآ أَن يَشَآءَ ٱللَّهُ — the command behind "in shā\' Allāh": lā + energetic verb, ghadan, illā an yashā\'a (an + subjunctive -a).' },
    memorize:'Al-Kahf 18:23–24 and your plan paragraph.',
    speak:['State five plans for this week with sa- / urīdu an / yajibu an, each ending in shā\'a-llāh.'],
    check:'You can talk about tomorrow and next week and use an + subjunctive after urīdu / yajibu / astaṭīʿu.' },

  { n:53, phase:4, title:'Feelings, and duʿā in your own words', focus:'ashʿuru bi- · saʿīd · ḥazīn · khā\'if · building a dua from Quranic parts',
    learn:[
      {h:'How you feel'},
      {table:[['أَشْعُرُ بِـ','ashʿuru bi-','I feel (+ noun): ashʿuru bit-taʿab (tired), bil-jūʿ (hungry), bil-bard (cold)'],['أَنَا سَعِيد / حَزِين','anā saʿīd / ḥazīn','I am happy / sad'],['أَنَا خَائِف / مُطْمَئِنّ','anā khā\'if / muṭma\'inn','I am afraid / at peace (89:27 — the tranquil soul)'],['أَنَا مُتْعَب / مَرِيض / بِخَيْر','anā mutʿab / marīḍ / bi-khayr','I am tired / sick / fine'],['أَنَا غَاضِب / مَسْرُور','anā ghāḍib / masrūr','I am angry / delighted'],['أَنَا مُتَحَمِّس','anā mutaḥammis','I am excited'],['أَشْكُرُ ٱللَّهَ','ashkuru-llāh','I thank Allah'],['أَتَوَكَّلُ عَلَى ٱللَّهِ','atawakkalu ʿala-llāh','I rely on Allah']],head:['Arabic','Say','Meaning']},
      {h:'Build a dua: vocative + command + object + (for/from)'},
      {table:[['ٱللَّهُمَّ / رَبِّ / رَبَّنَا','Allāhumma / rabbi / rabbanā','O Allah / my Lord / our Lord'],['ٱغْفِرْ لِي · ٱرْحَمْنِي · ٱهْدِنِي · ٱرْزُقْنِي · ٱحْفَظْنِي · ٱشْفِنِي · ثَبِّتْنِي · وَفِّقْنِي','ighfir lī · irḥamnī · ihdinī · urzuqnī · iḥfaẓnī · ishfinī · thabbitnī · waffiqnī','forgive me · have mercy on me · guide me · provide for me · protect me · heal me · make me firm · grant me success'],['عِلْمًا نَافِعًا · رِزْقًا طَيِّبًا · عَمَلًا صَالِحًا · قَلْبًا سَلِيمًا','ʿilman nāfiʿan · rizqan ṭayyiban · ʿamalan ṣāliḥan · qalban salīman','beneficial knowledge · good provision · righteous work · a sound heart (all -an: objects)'],['وَلِوَالِدَيَّ · وَلِأَهْلِي · وَلِلْمُسْلِمِينَ','wa li-wālidayya · wa li-ahlī · wa lil-muslimīn','and my parents · and my family · and the Muslims'],['فِي ٱلدُّنْيَا وَٱلْآخِرَةِ','fid-dunyā wal-ākhirah','in this world and the next']],head:['Piece','Say','Meaning']},
      {ar:'ٱللَّهُمَّ ٱرْزُقْنِي عِلْمًا نَافِعًا وَعَمَلًا صَالِحًا، وَٱغْفِرْ لِي وَلِوَالِدَيَّ، وَثَبِّتْ قَلْبِي عَلَى دِينِكَ.', tr:'Allāhumma-rzuqnī ʿilman nāfiʿan wa ʿamalan ṣāliḥan, wa-ghfir lī wa li-wālidayya, wa thabbit qalbī ʿalā dīnik.', en:'O Allah, grant me beneficial knowledge and righteous work, forgive me and my parents, and make my heart firm on Your religion.'},
      {tip:'This is the goal of the whole course made real: you are now speaking to Allah in the language of the Quran, in sentences you built yourself.'}
    ],
    quran:{ s:89, from:27, to:30, note:'Al-Fajr 89:27–30: يَٰٓأَيَّتُهَا ٱلنَّفْسُ ٱلْمُطْمَئِنَّةُ ٱرْجِعِىٓ إِلَىٰ رَبِّكِ رَاضِيَةً مَّرْضِيَّةً — a feminine vocative, a feminine command (irjiʿī), and two feminine participles as states (-atan).' },
    memorize:'Al-Fajr 89:27–30 and one dua of your own, said after every prayer this week.',
    speak:['Say how you feel right now in three sentences, then make three duas with the building blocks.'],
    check:'You can express five feelings and compose a grammatical dua from the pieces.' },

  { n:54, phase:4, title:'Listening and shadowing — train the ear', focus:'how to shadow a reciter · Al-Mulk begins',
    learn:[
      {h:'The method (10 minutes, every day, for life)'},
      {list:['Pick one reciter and stay with him for a month: Maḥmūd Khalīl al-Ḥuṣarī (muʿallim recordings are made for learners), or Muḥammad Ṣiddīq al-Minshāwī. Any Quran app has both.','Play ONE ayah. Pause. Say it back exactly — same speed, same holds, same throat. Play it again. Three rounds per ayah.','Then read the ayah with phonetics off, then check the meaning in the reader.','Once a week, record yourself reciting a surah and compare it with the reciter: pick one mistake to fix, not five.']},
      {h:'What to listen for'},
      {table:[['the holds','madd','count the beats on every long vowel — reciters are exact'],['the throat','ḥ ʿ kh gh q','listen for where the sound comes from, not what it looks like on paper'],['the hum','ghunnah','every نّ and مّ carries a nasal hum of two counts'],['the stops','waqf','where he stops, and how the last word changes when he does']],head:['Feature','Term','What to copy']},
      {h:'Beyond the Quran'},
      {p:'For everyday fusha, listen to Al Jazeera Arabic news bulletins (slow, clear fusha) or a fusha children\'s cartoon for 5 minutes a day. You will not understand everything — you are training your ear to segment words. Within two weeks you will start catching the particles and pronouns of Phase 2 flying past.'},
      {tip:'Al-Mulk (67) is the surah the Prophet ﷺ recited every night and said intercedes for its reader. It is 30 ayahs; you will memorise it in five sittings, Days 54–58, by shadowing.'}
    ],
    quran:{ s:67, from:1, to:5, note:'Al-Mulk 67:1–5. Shadow each ayah three times before reading the meaning. Grammar you know: تَبَٰرَكَ (form VI), ٱلَّذِي بِيَدِهِ ٱلْمُلْكُ (relative + bi + iḍāfa), أَحْسَنُ عَمَلًا (comparative + -an), مَا تَرَىٰ … مِن تَفَٰوُتٍ (relative + negation + min).' },
    memorize:'Al-Mulk 67:1–5.',
    speak:['Shadow 67:1–5 with a reciter, three rounds each. Record the fifth round.'],
    check:'You have a reciter chosen and can recite 67:1–5 with the reciter\'s holds and hums.' },

  { n:55, phase:4, title:'Forty Quranic phrases you can use in speech', focus:'the ready-made sentences every Arabic speaker uses daily',
    learn:[
      {h:'Say these, and you speak the Quran'},
      {table:[['بِسْمِ ٱللَّهِ','bismillāh','before starting anything'],['ٱلْحَمْدُ لِلَّهِ','al-ḥamdu lillāh','after anything good'],['إِنْ شَاءَ ٱللَّهُ','in shā\'a-llāh','for any plan'],['مَا شَاءَ ٱللَّهُ','mā shā\'a-llāh','on seeing something good (18:39)'],['سُبْحَانَ ٱللَّهِ','subḥāna-llāh','glory be to Allah — at anything amazing'],['ٱللَّهُ أَكْبَرُ','Allāhu akbar','Allah is greatest'],['أَسْتَغْفِرُ ٱللَّهَ','astaghfiru-llāh','I seek Allah\'s forgiveness'],['لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّهِ','lā ḥawla wa lā quwwata illā billāh','no power but with Allah — when something is beyond you'],['حَسْبُنَا ٱللَّهُ وَنِعْمَ ٱلْوَكِيلُ','ḥasbuna-llāhu wa niʿmal-wakīl','Allah is sufficient for us (3:173)'],['إِنَّا لِلَّهِ وَإِنَّآ إِلَيْهِ رَٰجِعُونَ','innā lillāhi wa innā ilayhi rājiʿūn','at any loss (2:156)'],['تَوَكَّلْتُ عَلَى ٱللَّهِ','tawakkaltu ʿala-llāh','I have relied on Allah'],['وَٱللَّهُ أَعْلَمُ','wallāhu aʿlam','and Allah knows best — when unsure'],['ٱللَّهُ ٱلْمُسْتَعَانُ','Allāhul-mustaʿān','Allah is the One whose help is sought (12:18)'],['رَبِّ زِدْنِي عِلْمًا','rabbi zidnī ʿilmā','My Lord, increase me in knowledge (20:114)'],['رَبِّ ٱشْرَحْ لِي صَدْرِي','rabbi-shraḥ lī ṣadrī','My Lord, expand my chest (20:25) — before something hard'],['رَبِّ يَسِّرْ وَلَا تُعَسِّرْ','rabbi yassir wa lā tuʿassir','My Lord, make easy, do not make hard'],['بَارَكَ ٱللَّهُ فِيكَ','bāraka-llāhu fīk','may Allah bless you'],['جَزَاكَ ٱللَّهُ خَيْرًا','jazāka-llāhu khayrā','may Allah reward you'],['فِي أَمَانِ ٱللَّهِ','fī amāni-llāh','in Allah\'s protection — goodbye'],['ٱلْحَمْدُ لِلَّهِ عَلَىٰ كُلِّ حَالٍ','al-ḥamdu lillāhi ʿalā kulli ḥāl','praise Allah in every state'],['إِنَّ ٱللَّهَ مَعَ ٱلصَّٰبِرِينَ','inna-llāha maʿaṣ-ṣābirīn','Allah is with the patient (2:153)'],['إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا','inna maʿal-ʿusri yusrā','with hardship is ease (94:6)'],['وَقُل رَّبِّ ٱرْحَمْهُمَا','wa qur-rabbi-rḥamhumā','for your parents (17:24)'],['رَبَّنَا تَقَبَّلْ مِنَّا','rabbanā taqabbal minnā','accept from us (2:127)'],['لَا تَحْزَنْ إِنَّ ٱللَّهَ مَعَنَا','lā taḥzan inna-llāha maʿanā','do not grieve, Allah is with us (9:40)'],['كُلُّ نَفْسٍ ذَآئِقَةُ ٱلْمَوْتِ','kullu nafsin dhā\'iqatul-mawt','every soul will taste death (3:185)'],['وَمَا تَوْفِيقِيٓ إِلَّا بِٱللَّهِ','wa mā tawfīqī illā billāh','my success is only through Allah (11:88)'],['فَٱصْبِرْ صَبْرًا جَمِيلًا','faṣbir ṣabran jamīlā','be patient with beautiful patience (70:5)'],['وَٱللَّهُ خَيْرٌ حَٰفِظًا','wallāhu khayrun ḥāfiẓā','Allah is the best guardian (12:64)'],['وَأُفَوِّضُ أَمْرِيٓ إِلَى ٱللَّهِ','wa ufawwiḍu amrī ila-llāh','I entrust my affair to Allah (40:44)']],head:['Phrase','Say','When']},
      {tip:'Thirty here, plus the ten you already own (the greeting and its reply, shukran, ʿafwan, naʿam, lā, ṭayyib "okay", maʿas-salāmah, tasharrafnā, ahlan). Use three a day in real life.'}
    ],
    quran:{ s:67, from:6, to:12, note:'Al-Mulk 67:6–12. Shadow first. Grammar: كُلَّمَا (whenever), أَلَمْ يَأْتِكُمْ (did there not come to you — jussive after lam), لَوْ كُنَّا نَسْمَعُ (had we listened — law + kāna + present).' },
    memorize:'Al-Mulk 67:6–12. Ten of the forty phrases you do not already use.',
    speak:['Narrate your morning using at least six of the phrases naturally (bismillāh before eating, al-ḥamdu lillāh after, in shā\'a-llāh for a plan…).'],
    check:'You use ten Quranic phrases in the right situations without thinking.' },

  { n:56, phase:4, title:'Reading without vowels', focus:'how educated Arabs read · predicting vowels from grammar · your first unvowelled text',
    learn:[
      {h:'Why the vowels disappear'},
      {p:'Newspapers, books and messages are written without ḥarakāt. Native readers supply them from grammar: they know a noun after مِن ends in -i, a verb after لَمْ is jussive, the word after إِنَّ takes -a. You know all of that now. The only unknown is the vowel INSIDE a word — and vocabulary fixes that.'},
      {h:'Your first unvowelled sentences'},
      {table:[['ذهب الرجل إلى المسجد بعد صلاة الفجر.','dhahaba-r-rajulu ila-l-masjidi baʿda ṣalāti-l-fajr.','The man went to the mosque after the Fajr prayer. (verb past · doer -u · after ilā -i · iḍāfa -i)'],['إن الله يحب المحسنين.','inna-llāha yuḥibbu-l-muḥsinīn.','Indeed Allah loves the doers of good. (2:195 — inna → -a; object → -īn)'],['كتبت رسالة إلى أخي أمس.','katabtu risālatan ilā akhī amsi.','I wrote a letter to my brother yesterday.'],['العلم نور والجهل ظلام.','al-ʿilmu nūrun wa-l-jahlu ẓalām.','Knowledge is light and ignorance is darkness.'],['لم يذهب العمال إلى الموقع اليوم بسبب المطر.','lam yadhhabi-l-ʿummālu ila-l-mawqiʿi-l-yawma bi-sababi-l-maṭar.','The workers did not go to the site today because of the rain.']],head:['Unvowelled','Read it as','Meaning + why']},
      {h:'The procedure'},
      {list:['Find the verb (shape: past endings, or ya-/ta-/a-/na- prefix). Decide past/present/jussive from any لَمْ / لَنْ / إِنْ before it.','Find the doer (usually right after the verb, -u) and the object (-a).','Every noun after a preposition or as the second half of an iḍāfa: -i.','After إِنَّ and her sisters: -a. After كَانَ: comment -a.','Inside the word, trust your vocabulary; when a word is new, look it up by ROOT.']},
      {tip:'Read the Quran with vowels forever — precision matters there. Read everything else without them, and you will find the vowels start appearing in your head.'}
    ],
    quran:{ s:67, from:13, to:19, note:'Al-Mulk 67:13–19. Shadow, then read 13–15 with the vowels covered by your hand and check yourself. Grammar: وَأَسِرُّوا … أَوِ ٱجْهَرُوا (two plural commands), أَلَا يَعْلَمُ مَنْ خَلَقَ (does He not know, He who created), ذَلُولًا (a hāl state, -an).' },
    memorize:'Al-Mulk 67:13–19.',
    speak:['Read the five unvowelled sentences aloud with full endings, then write two of your own without vowels and read them back the next day.'],
    check:'You can read a simple unvowelled sentence with correct endings by reasoning from the grammar.' },

  { n:57, phase:4, title:'Hadith Arabic — three sayings of the Prophet ﷺ', focus:'innamal-aʿmālu bin-niyyāt · ad-dīnu-n-naṣīḥah · man kāna yu\'minu billāh…',
    learn:[
      {h:'Why hadith next'},
      {p:'Hadith is fusha of the same century as the Quran, but in the Prophet\'s ﷺ everyday speech — short, clear sentences. It is the bridge between the Quran and speaking.'},
      {h:'Hadith 1 — intentions (Bukhārī 1, Muslim 1907)'},
      {ar:'إِنَّمَا ٱلْأَعْمَالُ بِٱلنِّيَّاتِ، وَإِنَّمَا لِكُلِّ ٱمْرِئٍ مَا نَوَىٰ', tr:'innamal-aʿmālu bin-niyyāt, wa innamā li-kulli-mri\'in mā nawā', en:'Actions are only by intentions, and every person has only what he intended. — innamā (only) · plural of ʿamal · bi + plural of niyyah · li-kulli (for every) + relative mā + past verb.'},
      {h:'Hadith 2 — sincerity (Muslim 55)'},
      {ar:'ٱلدِّينُ ٱلنَّصِيحَةُ', tr:'ad-dīnun-naṣīḥah', en:'The religion is sincere advice. — the shortest nominal sentence: two definite nouns, topic + comment.'},
      {h:'Hadith 3 — speech (Bukhārī 6018, Muslim 47)'},
      {ar:'مَنْ كَانَ يُؤْمِنُ بِٱللَّهِ وَٱلْيَوْمِ ٱلْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ', tr:'man kāna yu\'minu billāhi wal-yawmil-ākhiri fal-yaqul khayran aw li-yaṣmut', en:'Whoever believes in Allah and the Last Day, let him speak good or stay silent. — man (whoever) + kāna + present (continuous belief) · fa- answer · li- + jussive = "let him…" (a command for the third person).'},
      {h:'New grammar: the li- of command'},
      {table:[['لِيَقُلْ','li-yaqul','let him say'],['لِيَصْمُتْ','li-yaṣmut','let him be silent'],['فَلْيَعْبُدُوا','fal-yaʿbudū','so let them worship (106:3)'],['لِيُنفِقْ','li-yunfiq','let him spend (65:7)']],head:['Arabic','Say','Meaning']},
      {tip:'Read one short hadith a day from Riyāḍ aṣ-Ṣāliḥīn (Arabic with English) from now on. Same method: vowels on, read; vowels off, read; meaning last.'}
    ],
    quran:{ s:67, from:20, to:26, note:'Al-Mulk 67:20–26. Shadow. Grammar: أَمَّنْ (or who is it that — am + man), جُندٌ لَّكُمْ (tanwīn into lām — Day 11), مَتَىٰ هَٰذَا ٱلْوَعْدُ (a question word from Day 24).' },
    memorize:'Al-Mulk 67:20–26 and Hadith 1 and 3 in Arabic.',
    speak:['Explain each hadith in English while pointing at the Arabic words, then recite them.'],
    check:'You recite two hadith and can explain li- + jussive as "let him…".' },

  { n:58, phase:4, title:'Writing — ten sentences about your day', focus:'handwriting the joined forms · the Arabic keyboard · self-correction',
    learn:[
      {h:'Handwriting'},
      {list:['Write on lined paper, right to left, letters sitting ON the line with tails below. Write each word in one motion without lifting the pen except for dots and the non-connectors.','Copy 2:255 by hand, twice. Copying Quran is how generations learned to write; your hand will learn the joins your eye already knows.','Then write, without copying: your name, your city, your job, the days of the week.']},
      {h:'Typing'},
      {list:['Add the Arabic keyboard on your phone (Settings → Keyboard → Arabic). The layout is the standard Arabic 101 layout; keys are labelled.','Long-press for ḥarakāt on most phone keyboards; on desktop, Shift + the letter row gives fatḥa (Shift+Q), ḍamma (Shift+E), kasra (Shift+A), sukūn (Shift+X), shadda (Shift+~).','Type the ten sentences below, then WhatsApp them to yourself. Read them the next morning without the vowels.']},
      {h:'Write these ten (then your own versions)'},
      {table:[['1','أَنَا أَحْمَد، وَأَسْكُنُ فِي كِتْشِنَر.','I am Ahmed and I live in Kitchener.'],['2','أَعْمَلُ فِي ٱلْبِنَاءِ، وَأَبْنِي نِظَامًا لِأَصْحَابِ ٱلْمِهَنِ.','I work in construction and build a system for tradespeople.'],['3','أَسْتَيْقِظُ قَبْلَ ٱلْفَجْرِ كُلَّ يَوْمٍ.','I wake before Fajr every day.'],['4','بَعْدَ ٱلصَّلَاةِ أَتَدَرَّبُ سَاعَةً.','After the prayer I train for an hour.'],['5','فِي أَيَّامِ ٱلْعُطْلَةِ أَبْنِي مَشْرُوعِي.','On my days off I build my project.'],['6','بَعْدَ ٱلْعَصْرِ أَدْرُسُ ٱلْعَرَبِيَّةَ.','After ʿAṣr I study Arabic.'],['7','بَعْدَ ٱلْمَغْرِبِ أَقْرَأُ ٱلْقُرْءَانَ وَأَحْفَظُ.','After Maghrib I read the Quran and memorise.'],['8','حَفِظْتُ سُورَةَ ٱلْمُلْكِ هَٰذَا ٱلْأُسْبُوعَ.','I memorised Surah al-Mulk this week.'],['9','أُرِيدُ أَنْ أَتَكَلَّمَ ٱلْعَرَبِيَّةَ ٱلْفُصْحَىٰ.','I want to speak fusha Arabic.'],['10','وَٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَالَمِينَ.','And praise be to Allah, Lord of the worlds.']],head:['#','Arabic','Meaning']},
      {tip:'Check every sentence against three questions: is the verb agreeing with the doer? does every noun after a preposition end in -i? does every adjective match its noun? That checklist is your grammar teacher now.'}
    ],
    quran:{ s:67, from:27, to:30, note:'Al-Mulk 67:27–30 — the surah is complete. فَلَمَّا رَأَوْهُ زُلْفَةً (when they see it near), قُلْ هُوَ ٱلرَّحْمَٰنُ ءَامَنَّا بِهِ وَعَلَيْهِ تَوَكَّلْنَا (form IV + form V past, we-forms), مَآءٍ مَّعِينٍ (tanwīn merging).' },
    memorize:'Al-Mulk (67) complete — recite all 30 ayahs tonight.',
    speak:['Read your ten sentences aloud from your own handwriting.'],
    check:'You have ten sentences written by hand and typed, and Al-Mulk recited from memory once through.' },

  { n:59, phase:4, title:'Conversation day', focus:'15 minutes of self-talk · an error log · speaking with a real person',
    learn:[
      {h:'The 15-minute drill'},
      {list:['Set a timer for 15 minutes. Speak only Arabic. Describe the room, tell your day, explain your project, make dua, ask yourself questions and answer them. When a word is missing, describe around it (hādhā shay\'un li… "this is a thing for…") and write the gap down.','Record it. Listen once. Write three mistakes in an error log (endings, agreement, a wrong vowel). Fix those three tomorrow — only three.','Look up the gaps by root and add them to Day 25/26 style tables of your own.']},
      {h:'Find a human'},
      {list:['Speak to the imam or an Arabic-speaking brother at the mosque in fusha — say صَبَاحَ ٱلْخَيْرِ, ask a question about the prayer, and answer his reply in full sentences. Ask him to correct you.','Language exchange apps (HelloTalk, Tandem) have fusha learners and Quran teachers; a 20-minute call once a week beats an hour of study.','Say "أَتَعَلَّمُ ٱلْفُصْحَىٰ لِأَفْهَمَ ٱلْقُرْءَانَ" — every Arabic speaker will help you.']},
      {h:'Self-talk starters'},
      {table:[['ٱلْيَوْمَ أَنَا فِي …','al-yawma anā fī…','Today I am in…'],['أَمَامِي … وَخَلْفِي …','amāmī … wa khalfī …','In front of me… and behind me…'],['أُحِبُّ … لِأَنَّ …','uḥibbu … li-anna …','I love … because …'],['ٱلْمُشْكِلَةُ هِيَ أَنَّ …','al-mushkilatu hiya anna …','The problem is that…'],['فِي رَأْيِي …','fī ra\'yī …','In my opinion…'],['عَلَىٰ كُلِّ حَالٍ …','ʿalā kulli ḥāl…','Anyway…']],head:['Starter','Say','Meaning']},
      {tip:'Fluency is not knowing more words. It is using the 600 you have without pausing. Speak badly and often; correctness follows.'}
    ],
    quran:{ s:67, from:1, to:30, note:'Recite all of Al-Mulk from memory with the reader closed, then open it and check any ayah you stumbled on.' },
    memorize:'Consolidate Al-Mulk. Nothing new today — speak.',
    speak:['The 15-minute drill, recorded, with the error log written.'],
    check:'You spoke for 15 minutes in Arabic and have an error log with three items.' },

  { n:60, phase:4, title:'Graduation — and the next 90 days', focus:'recite everything · what you can do now · the path to fluent fusha',
    learn:[
      {h:'What you can do now'},
      {list:['Read any vowelled Arabic aloud correctly, and simple unvowelled prose.','Follow Al-Fatihah, Juz ʿAmma\'s short surahs, Āyat al-Kursī and Al-Mulk word by word, and parse an ayah.','Hold a basic conversation in fusha: greet, introduce, describe your day and work, tell a story, make plans, express feelings, ask and answer.','Speak to Allah in His own language, in sentences you build.']},
      {h:'Recite (the graduation exam — record it)'},
      {p:'Al-Fatihah · 2:1–5 · 2:201 · 2:255 · 2:286 (dua) · 12:4 · 18:23–24 · 31:13 · 55:1–4 · 59:22–24 · 67 · 87 · 88 · 89:27–30 · 91 · 93 · 94 · 95 · 96:1–8 · 97 · 98:7–8 · 99 · 102 · 103 · 104 · 105 · 106 · 107 · 108 · 109 · 110 · 111 · 112 · 113 · 114.'},
      {h:'The next 90 days — pick one lane per block'},
      {table:[['Grammar depth','Madinah Arabic Books 1–3 (free PDFs + videos)','the standard course used in Madinah for non-Arabs; you are ready for Book 2'],['Quran depth','Bayyinah "Quran Arabic" course, then read tafsir in Arabic-with-English (Ibn Kathīr, Al-Saʿdī)','one page of tafsir a day with the reader\'s Tafsir button'],['Memorisation','finish Juz ʿAmma (78–114), then Juz Tabārak (67–77)','one new ayah-cluster a day, review everything on Fridays'],['Speaking','a weekly fusha call + daily 10-minute self-talk + Al Jazeera 5 minutes','keep the error log; graduate to Arabic podcasts on Islamic topics'],['Reading','Riyāḍ aṣ-Ṣāliḥīn one hadith a day; then Qaṣaṣ an-Nabiyyīn (Stories of the Prophets, written for learners)','vowels off after the first read']],head:['Lane','Resource','Rhythm']},
      {h:'Keep the habits that got you here'},
      {list:['Shadow a reciter 10 minutes a day.','Read the day\'s Quran in the Quran tab: phonetics off, then on.','Three Quranic phrases in real speech every day.','Every study session goes on the calendar — the streak is the teacher.']},
      {tip:'Sixty days ago you could not tell ب from ت. Today you read Al-Mulk from memory and speak to your Lord in fusha. The rest is repetition. رَبِّ زِدْنِي عِلْمًا.'}
    ],
    quran:{ s:1, from:1, to:7, note:'Where you began. Read Al-Fatihah now knowing every word, every case ending and every rule of recitation in it. Then start the khatmah in the Quran tab with understanding — it is the same book, and it is finally open.' },
    memorize:'Everything in the recitation list, recorded.',
    speak:['Record the graduation recitation and a two-minute speech in fusha about what you will do next.'],
    check:'Recitation recorded and the next 90-day lane chosen. Course complete — الْحَمْدُ لِلَّهِ.' },
  ]
};
