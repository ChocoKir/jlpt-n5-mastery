// shared/data/grammar.ts

export type GrammarCategory =
    | 'Particle'
    | 'Verb Conjugation'
    | 'Adjective Conjugation'
    | 'Sentence Pattern'
    | 'Expression'
    | 'Conjunction';

export interface GrammarExample {
    japanese: string;
    reading: string;
    english: string;
}

export interface GrammarItem {
    id: string;
    grammar: string;         // The grammar point (e.g., "〜は", "〜ています")
    meaning: string;         // English explanation
    formation: string;       // How to build it (e.g., "Noun + は")
    category: GrammarCategory;
    examples: GrammarExample[];
}

export const N5_GRAMMAR: GrammarItem[] = [
    // --- THE CORE PARTICLES ---
    {
        id: 'g_par_1',
        grammar: 'は (wa)',
        meaning: 'Topic Marker (As for...)',
        formation: 'Noun + は',
        category: 'Particle',
        examples: [
            { japanese: '私は学生です。', reading: 'わたし は がくせい です。', english: 'I am a student.' },
            { japanese: '今日は暑いです。', reading: 'きょう は あつい です。', english: 'As for today, it is hot.' }
        ]
    },
    {
        id: 'g_par_2',
        grammar: 'が (ga)',
        meaning: 'Subject Marker / Identifier',
        formation: 'Noun + が',
        category: 'Particle',
        examples: [
            { japanese: '犬が好きです。', reading: 'いぬ が すき です。', english: 'I like dogs. (Dogs are liked)' },
            { japanese: '雨が降っています。', reading: 'あめ が ふっています。', english: 'It is raining. (The rain falls)' }
        ]
    },
    {
        id: 'g_par_3',
        grammar: 'を (o)',
        meaning: 'Direct Object Marker',
        formation: 'Noun + を + Transitive Verb',
        category: 'Particle',
        examples: [
            { japanese: 'りんごを食べます。', reading: 'りんご を たべます。', english: 'I eat an apple.' },
            { japanese: '本を読みます。', reading: 'ほん を よみます。', english: 'I read a book.' }
        ]
    },
    {
        id: 'g_par_4',
        grammar: 'に (ni) - Location/Time',
        meaning: 'Target, Time, or Location of Existence',
        formation: 'Noun (Time/Place) + に',
        category: 'Particle',
        examples: [
            { japanese: '７時に起きます。', reading: 'しちじ に おきます。', english: 'I wake up at 7 o\'clock.' },
            { japanese: '東京に住んでいます。', reading: 'とうきょう に すんでいます。', english: 'I live in Tokyo.' }
        ]
    },
    {
        id: 'g_par_5',
        grammar: 'へ (e)',
        meaning: 'Direction Marker (Towards)',
        formation: 'Noun (Place) + へ',
        category: 'Particle',
        examples: [
            { japanese: '学校へ行きます。', reading: 'がっこう へ いきます。', english: 'I head towards school.' },
            { japanese: '日本へ来ました。', reading: 'にほん へ きました。', english: 'I came to Japan.' }
        ]
    },
    {
        id: 'g_par_6',
        grammar: 'で (de) - Means/Location',
        meaning: 'By means of / Location of action',
        formation: 'Noun + で',
        category: 'Particle',
        examples: [
            { japanese: 'バスで学校へ行きます。', reading: 'ばす で がっこう へ いきます。', english: 'I go to school by bus.' },
            { japanese: 'レストランでご飯を食べます。', reading: 'れすとらん で ごはん を たべます。', english: 'I eat a meal at the restaurant.' }
        ]
    },
    {
        id: 'g_par_7',
        grammar: 'と (to)',
        meaning: 'And (exhaustive) / With (someone)',
        formation: 'Noun + と + Noun',
        category: 'Particle',
        examples: [
            { japanese: '肉と魚を買いました。', reading: 'にく と さかな を かいました。', english: 'I bought meat and fish.' },
            { japanese: '友達と遊びます。', reading: 'ともだち と あそびます。', english: 'I play with my friend.' }
        ]
    },
    {
        id: 'g_par_8',
        grammar: 'や (ya)',
        meaning: 'And (incomplete list) / Such things as',
        formation: 'Noun + や + Noun',
        category: 'Particle',
        examples: [
            { japanese: '机の上に本やペンがあります。', reading: 'つくえ の うえ に ほん や ぺん が あります。', english: 'There are books, pens, etc. on the desk.' }
        ]
    },
    {
        id: 'g_par_9',
        grammar: 'も (mo)',
        meaning: 'Also / Too',
        formation: 'Noun + も',
        category: 'Particle',
        examples: [
            { japanese: '私も学生です。', reading: 'わたし も がくせい です。', english: 'I am also a student.' },
            { japanese: 'コーヒーも飲みますか。', reading: 'こーひー も のみます か。', english: 'Will you drink coffee too?' }
        ]
    },
    {
        id: 'g_par_10',
        grammar: 'の (no)',
        meaning: 'Possessive Marker (\'s) / Noun Linker',
        formation: 'Noun 1 + の + Noun 2',
        category: 'Particle',
        examples: [
            { japanese: '私の本です。', reading: 'わたし の ほん です。', english: 'It is my book.' },
            { japanese: '日本語の先生です。', reading: 'にほんご の せんせい です。', english: 'A teacher of Japanese.' }
        ]
    },
    {
        id: 'g_par_11',
        grammar: 'か (ka)',
        meaning: 'Question Marker / Or',
        formation: 'Sentence + か',
        category: 'Particle',
        examples: [
            { japanese: '明日は休みですか。', reading: 'あした は やすみ です か。', english: 'Is tomorrow a day off?' },
            { japanese: 'ペンか鉛筆をください。', reading: 'ぺん か えんぴつ を ください。', english: 'Please give me a pen or a pencil.' }
        ]
    },
    {
        id: 'g_par_12',
        grammar: 'から (kara)',
        meaning: 'From (Origin/Time) / Because',
        formation: 'Noun + から / Phrase + から',
        category: 'Particle',
        examples: [
            { japanese: 'アメリカから来ました。', reading: 'あめりか から きました。', english: 'I came from America.' },
            { japanese: '忙しいから、行きません。', reading: 'いそがしい から、いきません。', english: 'Because I am busy, I won\'t go.' }
        ]
    },
    {
        id: 'g_par_13',
        grammar: 'まで (made)',
        meaning: 'Until / As far as',
        formation: 'Noun + まで',
        category: 'Particle',
        examples: [
            { japanese: '９時から５時まで働きます。', reading: 'くじ から ごじ まで はたらきます。', english: 'I work from 9 to 5.' },
            { japanese: '駅まで歩きます。', reading: 'えき まで あるきます。', english: 'I walk as far as the station.' }
        ]
    },
    {
        id: 'g_par_14',
        grammar: 'くらい / ぐらい (kurai/gurai)',
        meaning: 'About / Approximately (Amount)',
        formation: 'Quantity + くらい',
        category: 'Particle',
        examples: [
            { japanese: '１０分くらい待ちました。', reading: 'じゅっぷん くらい まちました。', english: 'I waited for about 10 minutes.' }
        ]
    },
    {
        id: 'g_par_15',
        grammar: 'しか (shika) + Negative',
        meaning: 'Only / Nothing but (Always takes a negative verb)',
        formation: 'Noun + しか + Negative Verb',
        category: 'Particle',
        examples: [
            { japanese: '千円しかありません。', reading: 'せんえん しか ありません。', english: 'I have nothing but 1,000 yen (I only have 1,000 yen).' }
        ]
    },

    // --- BASIC COPULA & VERB EXISTENCE ---
    {
        id: 'g_sen_1',
        grammar: 'です / だ (desu / da)',
        meaning: 'To be (Is/Am/Are)',
        formation: 'Noun / Na-Adjective + です',
        category: 'Sentence Pattern',
        examples: [
            { japanese: 'これはペンです。', reading: 'これ は ぺん です。', english: 'This is a pen.' },
            { japanese: '彼は元気だ。', reading: 'かれ は げんき だ。', english: 'He is well. (Casual)' }
        ]
    },
    {
        id: 'g_sen_2',
        grammar: 'じゃありません / ではない (ja arimasen)',
        meaning: 'Is not / Am not (Negative of desu)',
        formation: 'Noun / Na-Adjective + じゃありません',
        category: 'Sentence Pattern',
        examples: [
            { japanese: '私は先生じゃありません。', reading: 'わたし は せんせい じゃありません。', english: 'I am not a teacher.' }
        ]
    },
    {
        id: 'g_sen_3',
        grammar: 'あります (arimasu)',
        meaning: 'There is / Is (Inanimate objects & Plants)',
        formation: 'Noun + が + あります',
        category: 'Verb Conjugation',
        examples: [
            { japanese: '机の上に本があります。', reading: 'つくえ の うえ に ほん が あります。', english: 'There is a book on the desk.' },
            { japanese: '時間がありません。', reading: 'じかん が ありません。', english: 'I don\'t have time.' }
        ]
    },
    {
        id: 'g_sen_4',
        grammar: 'います (imasu)',
        meaning: 'There is / Is (Animate objects - People & Animals)',
        formation: 'Noun + が + います',
        category: 'Verb Conjugation',
        examples: [
            { japanese: 'あそこに猫がいます。', reading: 'あそこ に ねこ が います。', english: 'There is a cat over there.' },
            { japanese: '教室に学生がいます。', reading: 'きょうしつ に がくせい が います。', english: 'There are students in the classroom.' }
        ]
    },

    // --- BASIC VERB CONJUGATIONS (MASU FORM) ---
    {
        id: 'g_verb_1',
        grammar: '〜ます (masu)',
        meaning: 'Polite Verb Form (Present/Future Affirmative)',
        formation: 'Verb Stem + ます',
        category: 'Verb Conjugation',
        examples: [
            { japanese: '毎日りんごを食べます。', reading: 'まいにち りんご を たべます。', english: 'I eat an apple every day.' }
        ]
    },
    {
        id: 'g_verb_2',
        grammar: '〜ません (masen)',
        meaning: 'Polite Verb Form (Present/Future Negative)',
        formation: 'Verb Stem + ません',
        category: 'Verb Conjugation',
        examples: [
            { japanese: '今日は学校へ行きません。', reading: 'きょう は がっこう へ いきません。', english: 'I will not go to school today.' }
        ]
    },
    {
        id: 'g_verb_3',
        grammar: '〜ました (mashita)',
        meaning: 'Polite Verb Form (Past Affirmative)',
        formation: 'Verb Stem + ました',
        category: 'Verb Conjugation',
        examples: [
            { japanese: '昨日、映画を見ました。', reading: 'きのう、えいが を みました。', english: 'I watched a movie yesterday.' }
        ]
    },
    {
        id: 'g_verb_4',
        grammar: '〜ませんでした (masen deshita)',
        meaning: 'Polite Verb Form (Past Negative)',
        formation: 'Verb Stem + ませんでした',
        category: 'Verb Conjugation',
        examples: [
            { japanese: '朝ご飯を食べませんでした。', reading: 'あさごはん を たべませんでした。', english: 'I did not eat breakfast.' }
        ]
    },
    {
        id: 'g_verb_5',
        grammar: '〜ましょう (mashou)',
        meaning: 'Let\'s... (Volitional)',
        formation: 'Verb Stem + ましょう',
        category: 'Verb Conjugation',
        examples: [
            { japanese: '一緒に帰りましょう。', reading: 'いっしょ に かえりましょう。', english: 'Let\'s go home together.' }
        ]
    },
    {
        id: 'g_verb_6',
        grammar: '〜ましょうか (mashou ka)',
        meaning: 'Shall I/we...?',
        formation: 'Verb Stem + ましょうか',
        category: 'Verb Conjugation',
        examples: [
            { japanese: '手伝いましょうか。', reading: 'てつだいましょう か。', english: 'Shall I help you?' }
        ]
    },
    {
        id: 'g_verb_7',
        grammar: '〜たいです (tai desu)',
        meaning: 'I want to (do something)',
        formation: 'Verb Stem + たいです',
        category: 'Verb Conjugation',
        examples: [
            { japanese: '日本へ行きたいです。', reading: 'にほん へ いきたい です。', english: 'I want to go to Japan.' },
            { japanese: '何も食べたくないです。', reading: 'なにも たべたくない です。', english: 'I do not want to eat anything.' }
        ]
    },

    // --- ADJECTIVE CONJUGATIONS ---
    {
        id: 'g_adj_1',
        grammar: 'い-Adjective (Present)',
        meaning: 'Affirmative & Negative of I-Adjectives',
        formation: '〜い / 〜くない',
        category: 'Adjective Conjugation',
        examples: [
            { japanese: 'このラーメンは美味しいです。', reading: 'この らーめん は おいしい です。', english: 'This ramen is delicious.' },
            { japanese: 'その映画は面白くないです。', reading: 'その えいが は おもしろくない です。', english: 'That movie is not interesting.' }
        ]
    },
    {
        id: 'g_adj_2',
        grammar: 'い-Adjective (Past)',
        meaning: 'Past Affirmative & Negative of I-Adjectives',
        formation: '〜かった / 〜くなかった',
        category: 'Adjective Conjugation',
        examples: [
            { japanese: '昨日は寒かったです。', reading: 'きのう は さむかった です。', english: 'It was cold yesterday.' },
            { japanese: 'テストは難しくなかったです。', reading: 'てすと は むずかしくなかった です。', english: 'The test was not difficult.' }
        ]
    },
    {
        id: 'g_adj_3',
        grammar: 'な-Adjective (Present)',
        meaning: 'Affirmative & Negative of Na-Adjectives',
        formation: '〜です / 〜じゃありません',
        category: 'Adjective Conjugation',
        examples: [
            { japanese: 'ここは静かです。', reading: 'ここ は しずか です。', english: 'It is quiet here.' },
            { japanese: '私は暇じゃありません。', reading: 'わたし は ひま じゃありません。', english: 'I am not free.' }
        ]
    },
    {
        id: 'g_adj_4',
        grammar: 'な-Adjective (Past)',
        meaning: 'Past Affirmative & Negative of Na-Adjectives',
        formation: '〜でした / 〜じゃありませんでした',
        category: 'Adjective Conjugation',
        examples: [
            { japanese: '昔、ここは綺麗でした。', reading: 'むかし、ここ は きれい でした。', english: 'A long time ago, it was beautiful here.' }
        ]
    },
    // --- THE TE-FORM & ITS USES ---
    {
        id: 'g_verb_8',
        grammar: '〜て (te)',
        meaning: 'Te-Form (Connecting actions / And)',
        formation: 'Verb Te-Form + Verb',
        category: 'Verb Conjugation',
        examples: [
            { japanese: '起きて、朝ご飯を食べます。', reading: 'おきて、あさごはん を たべます。', english: 'I wake up, and eat breakfast.' },
            { japanese: '図書館に行って、本を借りました。', reading: 'としょかん に いって、ほん を かりました。', english: 'I went to the library and borrowed a book.' }
        ]
    },
    {
        id: 'g_sen_5',
        grammar: '〜てください (te kudasai)',
        meaning: 'Please do...',
        formation: 'Verb Te-Form + ください',
        category: 'Sentence Pattern',
        examples: [
            { japanese: 'ちょっと待ってください。', reading: 'ちょっと まって ください。', english: 'Please wait a moment.' },
            { japanese: 'ここに名前を書いてください。', reading: 'ここ に なまえ を かいて ください。', english: 'Please write your name here.' }
        ]
    },
    {
        id: 'g_sen_6',
        grammar: '〜ています (te imasu)',
        meaning: 'Is doing (Ongoing action) / State of being',
        formation: 'Verb Te-Form + います',
        category: 'Sentence Pattern',
        examples: [
            { japanese: '今、雨が降っています。', reading: 'いま、あめ が ふって います。', english: 'It is raining right now.' },
            { japanese: '私は東京に住んでいます。', reading: 'わたし は とうきょう に すんで います。', english: 'I live (am living) in Tokyo.' }
        ]
    },
    {
        id: 'g_sen_7',
        grammar: '〜てもいいです (te mo ii desu)',
        meaning: 'You may... / Is it okay if I...?',
        formation: 'Verb Te-Form + もいいですか',
        category: 'Sentence Pattern',
        examples: [
            { japanese: '写真を撮ってもいいですか。', reading: 'しゃしん を とって も いい です か。', english: 'May I take a picture?' },
            { japanese: 'ここで休んでもいいです。', reading: 'ここ で やすんで も いい です。', english: 'You may rest here.' }
        ]
    },
    {
        id: 'g_sen_8',
        grammar: '〜てはいけません (te wa ikemasen)',
        meaning: 'You must not... (Prohibition)',
        formation: 'Verb Te-Form + はいけません',
        category: 'Sentence Pattern',
        examples: [
            { japanese: 'ここでタバコを吸ってはいけません。', reading: 'ここ で たばこ を すって は いけません。', english: 'You must not smoke here.' },
            { japanese: '病院で走ってはいけません。', reading: 'びょういん で はしって は いけません。', english: 'You must not run in the hospital.' }
        ]
    },

    // --- THE NAI-FORM & NEGATIVE REQUESTS ---
    {
        id: 'g_verb_9',
        grammar: '〜ない (nai)',
        meaning: 'Nai-Form (Casual Negative)',
        formation: 'Verb (Nai-Form)',
        category: 'Verb Conjugation',
        examples: [
            { japanese: '私は肉を食べない。', reading: 'わたし は にく を たべない。', english: 'I do not eat meat. (Casual)' }
        ]
    },
    {
        id: 'g_sen_9',
        grammar: '〜ないでください (nai de kudasai)',
        meaning: 'Please do not...',
        formation: 'Verb Nai-Form + でください',
        category: 'Sentence Pattern',
        examples: [
            { japanese: '忘れないでください。', reading: 'わすれないで ください。', english: 'Please do not forget.' },
            { japanese: '写真を撮らないでください。', reading: 'しゃしん を とらないで ください。', english: 'Please do not take pictures.' }
        ]
    },
    {
        id: 'g_sen_10',
        grammar: '〜なければなりません (nakereba narimasen)',
        meaning: 'Must do / Have to do',
        formation: 'Verb Nai-Form (Drop い) + ければなりません',
        category: 'Sentence Pattern',
        examples: [
            { japanese: '薬を飲まなければなりません。', reading: 'くすり を のまなければ なりません。', english: 'I must take medicine.' },
            { japanese: '早く帰らなければなりません。', reading: 'はやく かえらなければ なりません。', english: 'I have to return home early.' }
        ]
    },
    {
        id: 'g_sen_11',
        grammar: '〜なくてもいいです (nakute mo ii desu)',
        meaning: 'Do not have to...',
        formation: 'Verb Nai-Form (Drop い) + くてもいいです',
        category: 'Sentence Pattern',
        examples: [
            { japanese: '明日来なくてもいいです。', reading: 'あした こなくて も いい です。', english: 'You do not have to come tomorrow.' }
        ]
    },

    // --- NOMINALIZATION (TURNING VERBS INTO NOUNS) ---
    {
        id: 'g_sen_12',
        grammar: '〜のが好きです (no ga suki desu)',
        meaning: 'Like doing...',
        formation: 'Verb Dictionary Form + のが好きです',
        category: 'Sentence Pattern',
        examples: [
            { japanese: '私は本を読むのが好きです。', reading: 'わたし は ほん を よむ の が すき です。', english: 'I like reading books.' }
        ]
    },
    {
        id: 'g_sen_13',
        grammar: '〜のが上手/下手です (no ga jouzu/heta desu)',
        meaning: 'Good/Bad at doing...',
        formation: 'Verb Dictionary Form + のが上手/下手です',
        category: 'Sentence Pattern',
        examples: [
            { japanese: '母は料理を作るのが上手です。', reading: 'はは は りょうり を つくる の が じょうず です。', english: 'My mother is good at cooking.' },
            { japanese: '私は歌を歌うのが下手です。', reading: 'わたし は うた を うたう の が へた です。', english: 'I am bad at singing.' }
        ]
    },
    {
        id: 'g_sen_14',
        grammar: '〜ことができます (koto ga dekimasu)',
        meaning: 'Can do / Is able to do',
        formation: 'Verb Dictionary Form + ことができます',
        category: 'Sentence Pattern',
        examples: [
            { japanese: '日本語を話すことができます。', reading: 'にほんご を はなす こと が できます。', english: 'I can speak Japanese.' },
            { japanese: 'ここで切符を買うことができますか。', reading: 'ここ で きっぷ を かう こと が できます か。', english: 'Can I buy a ticket here?' }
        ]
    },
    {
        id: 'g_sen_15',
        grammar: '趣味は〜ことです (shumi wa ~ koto desu)',
        meaning: 'My hobby is doing...',
        formation: '趣味は + Verb Dictionary Form + ことです',
        category: 'Sentence Pattern',
        examples: [
            { japanese: '私の趣味は写真を撮ることです。', reading: 'わたし の しゅみ は しゃしん を とる こと です。', english: 'My hobby is taking pictures.' }
        ]
    },

    // --- THE TA-FORM (PAST TENSE) & ITS USES ---
    {
        id: 'g_verb_10',
        grammar: '〜た (ta)',
        meaning: 'Ta-Form (Casual Past Tense)',
        formation: 'Verb Ta-Form',
        category: 'Verb Conjugation',
        examples: [
            { japanese: '昨日、新宿に行った。', reading: 'きのう、しんじゅく に いった。', english: 'I went to Shinjuku yesterday. (Casual)' }
        ]
    },
    {
        id: 'g_sen_16',
        grammar: '〜たことがあります (ta koto ga arimasu)',
        meaning: 'Have done... (Past experience)',
        formation: 'Verb Ta-Form + ことがあります',
        category: 'Sentence Pattern',
        examples: [
            { japanese: '日本へ行ったことがあります。', reading: 'にほん へ いった こと が あります。', english: 'I have been to Japan.' },
            { japanese: '馬に乗ったことがありません。', reading: 'うま に のった こと が ありません。', english: 'I have never ridden a horse.' }
        ]
    },
    {
        id: 'g_sen_17',
        grammar: '〜たり、〜たりします (tari, tari shimasu)',
        meaning: 'Do things like A and B (Incomplete list of actions)',
        formation: 'Verb Ta-Form + り、Verb Ta-Form + りします',
        category: 'Sentence Pattern',
        examples: [
            { japanese: '日曜日は映画を見たり、本を読んだりします。', reading: 'にちようび は えいが を みたり、ほん を よんだり します。', english: 'On Sundays, I do things like watch movies and read books.' }
        ]
    },
    {
        id: 'g_sen_18',
        grammar: '〜後で (ato de)',
        meaning: 'After doing...',
        formation: 'Verb Ta-Form / Nounの + 後で',
        category: 'Sentence Pattern',
        examples: [
            { japanese: '晩ご飯を食べた後で、テレビを見ます。', reading: 'ばんごはん を たべた あと で、てれび を みます。', english: 'After I eat dinner, I watch TV.' }
        ]
    },
    {
        id: 'g_sen_19',
        grammar: '〜前に (mae ni)',
        meaning: 'Before doing...',
        formation: 'Verb Dictionary Form / Nounの + 前に',
        category: 'Sentence Pattern',
        examples: [
            { japanese: '寝る前に、本を読みます。', reading: 'ねる まえ に、ほん を よみます。', english: 'Before I sleep, I read a book.' }
        ]
    },

    // --- COMPARISONS ---
    {
        id: 'g_sen_20',
        grammar: 'A は B より (A wa B yori)',
        meaning: 'A is more... than B',
        formation: 'A + は + B + より + Adjective + です',
        category: 'Sentence Pattern',
        examples: [
            { japanese: '中国は日本より大きいです。', reading: 'ちゅうごく は にほん より おおきい です。', english: 'China is bigger than Japan.' }
        ]
    },
    {
        id: 'g_sen_21',
        grammar: 'A のほうが B より (A no hou ga B yori)',
        meaning: 'A is more... than B (Alternative)',
        formation: 'A + のほうが + B + より + Adjective + です',
        category: 'Sentence Pattern',
        examples: [
            { japanese: '電車の方がバスより速いです。', reading: 'でんしゃ の ほう が ばす より はやい です。', english: 'Trains are faster than buses.' }
        ]
    },
    {
        id: 'g_sen_22',
        grammar: 'A と B とどちらが (A to B to dochira ga)',
        meaning: 'Which is more..., A or B?',
        formation: 'A + と + B + とどちらが + Adjective + ですか',
        category: 'Sentence Pattern',
        examples: [
            { japanese: '肉と魚とどちらが好きですか。', reading: 'にく と さかな と どちら が すき です か。', english: 'Which do you like better, meat or fish?' }
        ]
    },
    {
        id: 'g_sen_23',
        grammar: '〜の中で一番 (no naka de ichiban)',
        meaning: 'The most... among a category',
        formation: 'Category + の中で + Noun + が一番 + Adjective + です',
        category: 'Sentence Pattern',
        examples: [
            { japanese: '果物の中でりんごが一番好きです。', reading: 'くだもの の なか で りんご が いちばん すき です。', english: 'Among fruits, I like apples the most.' }
        ]
    },

    // --- ADVERBS & BECOMING ---
    {
        id: 'g_adj_5',
        grammar: '〜く / 〜に なる (ku / ni naru)',
        meaning: 'To become (Change in state)',
        formation: 'I-Adj(drop い)+く / Na-Adj+に / Noun+に + なります',
        category: 'Sentence Pattern',
        examples: [
            { japanese: '寒くなりました。', reading: 'さむく なりました。', english: 'It became cold.' },
            { japanese: '日本語が上手になりました。', reading: 'にほんご が じょうず に なりました。', english: 'I became good at Japanese.' }
        ]
    },
    {
        id: 'g_adj_6',
        grammar: '〜く / 〜に (Adverbial Form)',
        meaning: 'Doing an action in a certain way',
        formation: 'I-Adj(drop い)+く / Na-Adj+に + Verb',
        category: 'Adjective Conjugation',
        examples: [
            { japanese: '早く起きました。', reading: 'はやく おきました。', english: 'I woke up early.' },
            { japanese: '静かにしてください。', reading: 'しずか に して ください。', english: 'Please do it quietly.' }
        ]
    },

    // --- PLANS & INTENTIONS ---
    {
        id: 'g_sen_24',
        grammar: '〜つもりです (tsumori desu)',
        meaning: 'Plan to do / Intend to do',
        formation: 'Verb Dictionary / Nai-Form + つもりです',
        category: 'Sentence Pattern',
        examples: [
            { japanese: '明日、買い物に行くつもりです。', reading: 'あした、かいもの に いく つもり です。', english: 'I plan to go shopping tomorrow.' }
        ]
    },
    {
        id: 'g_sen_25',
        grammar: '〜予定です (yotei desu)',
        meaning: 'Scheduled to do',
        formation: 'Verb Dictionary / Nounの + 予定です',
        category: 'Sentence Pattern',
        examples: [
            { japanese: '来週、日本へ行く予定です。', reading: 'らいしゅう、にほん へ いく よてい です。', english: 'I am scheduled to go to Japan next week.' }
        ]
    },

    // --- CONJUNCTIONS & TIMING ---
    {
        id: 'g_conj_1',
        grammar: 'が / けれども (ga / keredomo)',
        meaning: 'But / However',
        formation: 'Sentence 1 + が/けれども + Sentence 2',
        category: 'Conjunction',
        examples: [
            { japanese: '日本語は難しいですが、面白いです。', reading: 'にほんご は むずかしい です が、おもしろい です。', english: 'Japanese is difficult, but it is interesting.' }
        ]
    },
    {
        id: 'g_adv_1',
        grammar: 'もう〜ました (mou ~mashita)',
        meaning: 'Already did...',
        formation: 'もう + Verb Past Tense',
        category: 'Expression',
        examples: [
            { japanese: 'もう晩ご飯を食べました。', reading: 'もう ばんごはん を たべました。', english: 'I already ate dinner.' }
        ]
    },
    {
        id: 'g_adv_2',
        grammar: 'まだ〜ていません (mada ~te imasen)',
        meaning: 'Have not done... yet',
        formation: 'まだ + Verb Te-form + いません',
        category: 'Expression',
        examples: [
            { japanese: 'まだ宿題をしていません。', reading: 'まだ しゅくだい を していません。', english: 'I have not done my homework yet.' }
        ]
    },
    {
        id: 'g_sen_26',
        grammar: '〜でしょう / 〜だろう (deshou / darou)',
        meaning: 'Probably / I think (Asking for agreement)',
        formation: 'Plain Form / Noun / Adjective + でしょう',
        category: 'Sentence Pattern',
        examples: [
            { japanese: '明日は雨でしょう。', reading: 'あした は あめ でしょう。', english: 'It will probably rain tomorrow.' },
            { japanese: '山田さんも行くでしょう？', reading: 'やまださん も いく でしょう？', english: 'Mr. Yamada is going too, right?' }
        ]
    },
    // --- LIMITATIONS & QUESTION WORD COMBINATIONS ---
    {
        id: 'g_par_16',
        grammar: 'だけ (dake)',
        meaning: 'Only / Just (used with affirmative)',
        formation: 'Noun / Quantity + だけ',
        category: 'Particle',
        examples: [
            { japanese: '水だけ飲みます。', reading: 'みず だけ のみます。', english: 'I drink only water.' },
            { japanese: '５分だけ休みましょう。', reading: 'ごふん だけ やすみましょう。', english: 'Let\'s rest for just 5 minutes.' }
        ]
    },
    {
        id: 'g_qw_1',
        grammar: 'Question Word + か (ka)',
        meaning: 'Some... (Someone, somewhere, something)',
        formation: '誰か / どこか / 何か',
        category: 'Expression',
        examples: [
            { japanese: '何か食べたいです。', reading: 'なにか たべたい です。', english: 'I want to eat something.' },
            { japanese: '休みにどこかへ行きましたか。', reading: 'やすみ に どこか へ いきました か。', english: 'Did you go anywhere during the holiday?' }
        ]
    },
    {
        id: 'g_qw_2',
        grammar: 'Question Word + も (mo) + Negative',
        meaning: 'No... / Not any... (No one, nowhere, nothing)',
        formation: '誰も / どこも / 何も + Negative Verb',
        category: 'Expression',
        examples: [
            { japanese: '教室に誰もいません。', reading: 'きょうしつ に だれも いません。', english: 'There is no one in the classroom.' },
            { japanese: '朝ご飯を何も食べませんでした。', reading: 'あさごはん を なにも たべませんでした。', english: 'I ate nothing for breakfast.' }
        ]
    },

    // --- PURPOSE & INVITATIONS ---
    {
        id: 'g_sen_27',
        grammar: '〜に行く / 来る (ni iku / kuru)',
        meaning: 'To go / come in order to do something',
        formation: 'Verb Stem + に行く / に来る',
        category: 'Sentence Pattern',
        examples: [
            { japanese: 'デパートへ服を買いに行きます。', reading: 'でぱーと へ ふく を かい に いきます。', english: 'I am going to the department store to buy clothes.' },
            { japanese: '友達が遊びに来ました。', reading: 'ともだち が あそび に きました。', english: 'A friend came over to play/visit.' }
        ]
    },
    {
        id: 'g_sen_28',
        grammar: '〜ませんか (masen ka)',
        meaning: 'Won\'t you...? (Inviting someone)',
        formation: 'Verb Stem + ませんか',
        category: 'Sentence Pattern',
        examples: [
            { japanese: '一緒にお茶を飲みませんか。', reading: 'いっしょ に おちゃ を のみません か。', english: 'Won\'t you drink tea with me?' },
            { japanese: '明日、映画を見に行きませんか。', reading: 'あした、えいが を み に いきません か。', english: 'Won\'t you go see a movie with me tomorrow?' }
        ]
    },
    {
        id: 'g_sen_29',
        grammar: '〜てから (te kara)',
        meaning: 'After doing... (Sequential actions)',
        formation: 'Verb Te-Form + から',
        category: 'Sentence Pattern',
        examples: [
            { japanese: '手を洗ってから、ご飯を食べます。', reading: 'て を あらって から、ごはん を たべます。', english: 'After washing my hands, I eat a meal.' }
        ]
    },

    // --- GIVING & RECEIVING (HIGHLY TESTED ON N5) ---
    {
        id: 'g_verb_11',
        grammar: 'あげる (ageru)',
        meaning: 'To give (to someone else)',
        formation: 'Giver は + Receiver に + Noun を + あげます',
        category: 'Verb Conjugation',
        examples: [
            { japanese: '私は妹にプレゼントをあげました。', reading: 'わたし は いもうと に ぷれぜんと を あげました。', english: 'I gave a present to my younger sister.' }
        ]
    },
    {
        id: 'g_verb_12',
        grammar: 'くれる (kureru)',
        meaning: 'To give (to me or my in-group)',
        formation: 'Giver は + 私(たち) に + Noun を + くれます',
        category: 'Verb Conjugation',
        examples: [
            { japanese: '友達が私に本をくれました。', reading: 'ともだち が わたし に ほん を くれました。', english: 'My friend gave me a book.' }
        ]
    },
    {
        id: 'g_verb_13',
        grammar: 'もらう (morau)',
        meaning: 'To receive (from someone)',
        formation: 'Receiver は + Giver に/から + Noun を + もらいます',
        category: 'Verb Conjugation',
        examples: [
            { japanese: '私は父から時計をもらいました。', reading: 'わたし は ちち から とけい を もらいました。', english: 'I received a watch from my father.' }
        ]
    },

    // --- SENTENCE ENDING PARTICLES ---
    {
        id: 'g_par_17',
        grammar: 'ね (ne)',
        meaning: 'Isn\'t it? / Right? (Seeking agreement)',
        formation: 'Sentence + ね',
        category: 'Particle',
        examples: [
            { japanese: '今日はいい天気ですね。', reading: 'きょう は いい てんき です ね。', english: 'The weather is nice today, isn\'t it?' }
        ]
    },
    {
        id: 'g_par_18',
        grammar: 'よ (yo)',
        meaning: 'I tell you / You know (Asserting new information)',
        formation: 'Sentence + よ',
        category: 'Particle',
        examples: [
            { japanese: 'この映画は面白いですよ。', reading: 'この えいが は おもしろい です よ。', english: 'This movie is interesting, you know.' }
        ]
    },

    // --- RELATIVE CLAUSES & MISCELLANEOUS ---
    {
        id: 'g_sen_30',
        grammar: 'Noun Modification (Relative Clause)',
        meaning: 'Using a verb/sentence to describe a noun',
        formation: 'Plain Form Verb / Adjective + Noun',
        category: 'Sentence Pattern',
        examples: [
            { japanese: 'これは私が作ったケーキです。', reading: 'これ は わたし が つくった けーき です。', english: 'This is the cake that I made.' },
            { japanese: 'あそこで本を読んでいる人は田中さんです。', reading: 'あそこ で ほん を よんでいる ひと は たなかさん です。', english: 'The person reading a book over there is Mr. Tanaka.' }
        ]
    },
    {
        id: 'g_sen_31',
        grammar: '〜はどうですか (wa dou desu ka)',
        meaning: 'How about...? / How is...?',
        formation: 'Noun + はどうですか',
        category: 'Sentence Pattern',
        examples: [
            { japanese: '日本の生活はどうですか。', reading: 'にほん の せいかつ は どう です か。', english: 'How is life in Japan?' },
            { japanese: 'コーヒーはどうですか。', reading: 'こーひー は どう です か。', english: 'How about some coffee?' }
        ]
    },
    {
        id: 'g_sen_32',
        grammar: '〜をお願いします / 〜をください',
        meaning: 'Please give me... / I would like...',
        formation: 'Noun + をお願いします / をください',
        category: 'Expression',
        examples: [
            { japanese: 'メニューをお願いします。', reading: 'めにゅー を おねがいします。', english: 'The menu, please.' },
            { japanese: '水を一杯ください。', reading: 'みず を いっぱい ください。', english: 'Please give me a glass of water.' }
        ]
    }
];