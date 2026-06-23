// shared/data/kanji.ts

export interface KanjiExample {
    word: string;
    reading: string;
    meaning: string;
}

export interface KanjiItem {
    id: string;
    kanji: string;
    onyomi: string[];
    kunyomi: string[];
    meaning: string;
    examples: KanjiExample[];
}

export const N5_KANJI: KanjiItem[] = [
    // --- NUMBERS & MONEY ---
    {
        id: 'k_1', kanji: '一', onyomi: ['イチ', 'イツ'], kunyomi: ['ひと', 'ひと.つ'], meaning: 'One',
        examples: [
            { word: '一つ', reading: 'ひとつ', meaning: 'One thing' },
            { word: '一日', reading: 'ついたち', meaning: 'First day of the month' }
        ]
    },
    {
        id: 'k_2', kanji: '二', onyomi: ['ニ'], kunyomi: ['ふた', 'ふた.つ'], meaning: 'Two',
        examples: [
            { word: '二つ', reading: 'ふたつ', meaning: 'Two things' },
            { word: '二月', reading: 'にがつ', meaning: 'February' }
        ]
    },
    {
        id: 'k_3', kanji: '三', onyomi: ['サン'], kunyomi: ['み', 'みっ.つ'], meaning: 'Three',
        examples: [
            { word: '三つ', reading: 'みっつ', meaning: 'Three things' },
            { word: '三日', reading: 'みっか', meaning: 'Third day of the month' }
        ]
    },
    {
        id: 'k_4', kanji: '四', onyomi: ['シ'], kunyomi: ['よ', 'よ.つ', 'よっ.つ', 'よん'], meaning: 'Four',
        examples: [
            { word: '四つ', reading: 'よっつ', meaning: 'Four things' },
            { word: '四月', reading: 'しがつ', meaning: 'April' }
        ]
    },
    {
        id: 'k_5', kanji: '五', onyomi: ['ゴ'], kunyomi: ['いつ', 'いつ.つ'], meaning: 'Five',
        examples: [
            { word: '五つ', reading: 'いつつ', meaning: 'Five things' },
            { word: '五日', reading: 'いつか', meaning: 'Fifth day of the month' }
        ]
    },
    {
        id: 'k_6', kanji: '六', onyomi: ['ロク'], kunyomi: ['む', 'む.つ', 'むっ.つ', 'むい'], meaning: 'Six',
        examples: [
            { word: '六つ', reading: 'むっつ', meaning: 'Six things' },
            { word: '六百', reading: 'ろっぴゃく', meaning: 'Six hundred' }
        ]
    },
    {
        id: 'k_7', kanji: '七', onyomi: ['シチ'], kunyomi: ['なな', 'なな.つ', 'なの'], meaning: 'Seven',
        examples: [
            { word: '七つ', reading: 'ななつ', meaning: 'Seven things' },
            { word: '七時', reading: 'しちじ', meaning: 'Seven o\'clock' }
        ]
    },
    {
        id: 'k_8', kanji: '八', onyomi: ['ハチ'], kunyomi: ['や', 'や.つ', 'やっ.つ', 'よう'], meaning: 'Eight',
        examples: [
            { word: '八つ', reading: 'やっつ', meaning: 'Eight things' },
            { word: '八日', reading: 'ようか', meaning: 'Eighth day of the month' }
        ]
    },
    {
        id: 'k_9', kanji: '九', onyomi: ['キュウ', 'ク'], kunyomi: ['ここの', 'ここの.つ'], meaning: 'Nine',
        examples: [
            { word: '九つ', reading: 'ここのつ', meaning: 'Nine things' },
            { word: '九時', reading: 'くじ', meaning: 'Nine o\'clock' }
        ]
    },
    {
        id: 'k_10', kanji: '十', onyomi: ['ジュウ', 'ジッ'], kunyomi: ['とお', 'と'], meaning: 'Ten',
        examples: [
            { word: '十', reading: 'とお', meaning: 'Ten things' },
            { word: '十月', reading: 'じゅうがつ', meaning: 'October' }
        ]
    },
    {
        id: 'k_11', kanji: '百', onyomi: ['ヒャク'], kunyomi: ['もも'], meaning: 'Hundred',
        examples: [
            { word: '百', reading: 'ひゃく', meaning: 'Hundred' },
            { word: '三百', reading: 'さんびゃく', meaning: 'Three hundred' }
        ]
    },
    {
        id: 'k_12', kanji: '千', onyomi: ['セン'], kunyomi: ['ち'], meaning: 'Thousand',
        examples: [
            { word: '千', reading: 'せん', meaning: 'Thousand' },
            { word: '三千', reading: 'さんぜん', meaning: 'Three thousand' }
        ]
    },
    {
        id: 'k_13', kanji: '万', onyomi: ['マン', 'バン'], kunyomi: [], meaning: 'Ten Thousand',
        examples: [
            { word: '一万', reading: 'いちまん', meaning: 'Ten thousand' },
            { word: '万年筆', reading: 'まんねんひつ', meaning: 'Fountain pen' }
        ]
    },
    {
        id: 'k_14', kanji: '円', onyomi: ['エン'], kunyomi: ['まる.い'], meaning: 'Yen / Circle',
        examples: [
            { word: '百円', reading: 'ひゃくえん', meaning: '100 Yen' },
            { word: '円い', reading: 'まるい', meaning: 'Round' }
        ]
    },

    // --- DAYS OF THE WEEK & NATURE BASICS ---
    {
        id: 'k_15', kanji: '日', onyomi: ['ニチ', 'ジツ'], kunyomi: ['ひ', 'び', 'か'], meaning: 'Sun / Day',
        examples: [
            { word: '日本', reading: 'にほん', meaning: 'Japan' },
            { word: '日曜日', reading: 'にちようび', meaning: 'Sunday' }
        ]
    },
    {
        id: 'k_16', kanji: '月', onyomi: ['ゲツ', 'ガツ'], kunyomi: ['つき'], meaning: 'Moon / Month',
        examples: [
            { word: '月曜日', reading: 'げつようび', meaning: 'Monday' },
            { word: '今月', reading: 'こんげつ', meaning: 'This month' }
        ]
    },
    {
        id: 'k_17', kanji: '火', onyomi: ['カ'], kunyomi: ['ひ', 'び', 'ほ'], meaning: 'Fire',
        examples: [
            { word: '火曜日', reading: 'かようび', meaning: 'Tuesday' },
            { word: '花火', reading: 'はなび', meaning: 'Fireworks' }
        ]
    },
    {
        id: 'k_18', kanji: '水', onyomi: ['スイ'], kunyomi: ['みず'], meaning: 'Water',
        examples: [
            { word: '水曜日', reading: 'すいようび', meaning: 'Wednesday' },
            { word: '水', reading: 'みず', meaning: 'Water' }
        ]
    },
    {
        id: 'k_19', kanji: '木', onyomi: ['ボク', 'モク'], kunyomi: ['き', 'こ'], meaning: 'Tree / Wood',
        examples: [
            { word: '木曜日', reading: 'もくようび', meaning: 'Thursday' },
            { word: '木', reading: 'き', meaning: 'Tree' }
        ]
    },
    {
        id: 'k_20', kanji: '金', onyomi: ['キン', 'コン'], kunyomi: ['かね', 'かな'], meaning: 'Gold / Money',
        examples: [
            { word: '金曜日', reading: 'きんようび', meaning: 'Friday' },
            { word: 'お金', reading: 'おかね', meaning: 'Money' }
        ]
    },
    {
        id: 'k_21', kanji: '土', onyomi: ['ド', 'ト'], kunyomi: ['つち'], meaning: 'Soil / Earth',
        examples: [
            { word: '土曜日', reading: 'どようび', meaning: 'Saturday' },
            { word: 'お土産', reading: 'おみやげ', meaning: 'Souvenir' }
        ]
    },

    // --- TIME & DATES ---
    {
        id: 'k_22', kanji: '年', onyomi: ['ネン'], kunyomi: ['とし'], meaning: 'Year',
        examples: [
            { word: '今年', reading: 'ことし', meaning: 'This year' },
            { word: '来年', reading: 'らいねん', meaning: 'Next year' }
        ]
    },
    {
        id: 'k_23', kanji: '時', onyomi: ['ジ'], kunyomi: ['とき'], meaning: 'Time / Hour',
        examples: [
            { word: '時間', reading: 'じかん', meaning: 'Time' },
            { word: '時計', reading: 'とけい', meaning: 'Clock / Watch' }
        ]
    },
    {
        id: 'k_24', kanji: '分', onyomi: ['ブン', 'フン', 'ブ'], kunyomi: ['わ.ける', 'わ.かる'], meaning: 'Minute / To divide / To understand',
        examples: [
            { word: '半分', reading: 'はんぶん', meaning: 'Half' },
            { word: '分かる', reading: 'わかる', meaning: 'To understand' }
        ]
    },
    {
        id: 'k_25', kanji: '半', onyomi: ['ハン'], kunyomi: ['なか.ば'], meaning: 'Half',
        examples: [
            { word: '四時半', reading: 'よじはん', meaning: '4:30' },
            { word: '半年', reading: 'はんとし', meaning: 'Half a year' }
        ]
    },
    {
        id: 'k_26', kanji: '今', onyomi: ['コン', 'キン'], kunyomi: ['いま'], meaning: 'Now',
        examples: [
            { word: '今日', reading: 'きょう', meaning: 'Today' },
            { word: '今晩', reading: 'こんばん', meaning: 'This evening' }
        ]
    },
    {
        id: 'k_27', kanji: '先', onyomi: ['セン'], kunyomi: ['さき'], meaning: 'Before / Previous',
        examples: [
            { word: '先生', reading: 'せんせい', meaning: 'Teacher' },
            { word: '先週', reading: 'せんしゅう', meaning: 'Last week' }
        ]
    },
    {
        id: 'k_28', kanji: '来', onyomi: ['ライ'], kunyomi: ['く.る', 'き.たる', 'き'], meaning: 'To come / Next',
        examples: [
            { word: '来る', reading: 'くる', meaning: 'To come' },
            { word: '来週', reading: 'らいしゅう', meaning: 'Next week' }
        ]
    },
    {
        id: 'k_29', kanji: '毎', onyomi: ['マイ'], kunyomi: ['ごと'], meaning: 'Every',
        examples: [
            { word: '毎日', reading: 'まいにち', meaning: 'Every day' },
            { word: '毎月', reading: 'まいつき', meaning: 'Every month' }
        ]
    },
    {
        id: 'k_30', kanji: '何', onyomi: ['カ'], kunyomi: ['なに', 'なん'], meaning: 'What',
        examples: [
            { word: '何か', reading: 'なにか', meaning: 'Something' },
            { word: '何人', reading: 'なんにん', meaning: 'How many people' }
        ]
    },

    // --- PEOPLE & FAMILY ---
    {
        id: 'k_31', kanji: '人', onyomi: ['ジン', 'ニン'], kunyomi: ['ひと'], meaning: 'Person',
        examples: [
            { word: '日本人', reading: 'にほんじん', meaning: 'Japanese person' },
            { word: '一人', reading: 'ひとり', meaning: 'One person / Alone' }
        ]
    },
    {
        id: 'k_32', kanji: '男', onyomi: ['ダン', 'ナン'], kunyomi: ['おとこ'], meaning: 'Man / Male',
        examples: [
            { word: '男の子', reading: 'おとこのこ', meaning: 'Boy' },
            { word: '男の人', reading: 'おとこのひと', meaning: 'Man' }
        ]
    },
    {
        id: 'k_33', kanji: '女', onyomi: ['ジョ', 'ニョ'], kunyomi: ['おんな', 'め'], meaning: 'Woman / Female',
        examples: [
            { word: '女の子', reading: 'おんなのこ', meaning: 'Girl' },
            { word: '彼女', reading: 'かのじょ', meaning: 'She / Girlfriend' }
        ]
    },
    {
        id: 'k_34', kanji: '子', onyomi: ['シ', 'ス'], kunyomi: ['こ'], meaning: 'Child',
        examples: [
            { word: '子供', reading: 'こども', meaning: 'Child' },
            { word: '帽子', reading: 'ぼうし', meaning: 'Hat' }
        ]
    },
    {
        id: 'k_35', kanji: '父', onyomi: ['フ'], kunyomi: ['ちち'], meaning: 'Father',
        examples: [
            { word: 'お父さん', reading: 'おとうさん', meaning: 'Father (someone else\'s)' },
            { word: '父', reading: 'ちち', meaning: 'My father' }
        ]
    },
    // --- FAMILY (CONTINUED) & PEOPLE ---
    {
        id: 'k_36', kanji: '母', onyomi: ['ボ'], kunyomi: ['はは', 'も'], meaning: 'Mother',
        examples: [
            { word: 'お母さん', reading: 'おかあさん', meaning: 'Mother (someone else\'s)' },
            { word: '母', reading: 'はは', meaning: 'My mother' }
        ]
    },
    {
        id: 'k_37', kanji: '友', onyomi: ['ユウ'], kunyomi: ['とも'], meaning: 'Friend',
        examples: [
            { word: '友達', reading: 'ともだち', meaning: 'Friend' },
            { word: '友人', reading: 'ゆうじん', meaning: 'Friend (formal)' }
        ]
    },

    // --- BODY PARTS ---
    {
        id: 'k_38', kanji: '目', onyomi: ['モク', 'ボク'], kunyomi: ['め', 'ま'], meaning: 'Eye',
        examples: [
            { word: '目', reading: 'め', meaning: 'Eye' },
            { word: '二日目', reading: 'ふつかめ', meaning: 'Second day' }
        ]
    },
    {
        id: 'k_39', kanji: '口', onyomi: ['コウ', 'ク'], kunyomi: ['くち'], meaning: 'Mouth',
        examples: [
            { word: '入口', reading: 'いりぐち', meaning: 'Entrance' },
            { word: '出口', reading: 'でぐち', meaning: 'Exit' }
        ]
    },
    {
        id: 'k_40', kanji: '耳', onyomi: ['ジ'], kunyomi: ['みみ'], meaning: 'Ear',
        examples: [
            { word: '耳', reading: 'みみ', meaning: 'Ear' }
        ]
    },
    {
        id: 'k_41', kanji: '手', onyomi: ['シュ'], kunyomi: ['て', 'た'], meaning: 'Hand',
        examples: [
            { word: '上手', reading: 'じょうず', meaning: 'Skillful / Good at' },
            { word: '下手', reading: 'へた', meaning: 'Unskillful / Bad at' }
        ]
    },
    {
        id: 'k_42', kanji: '足', onyomi: ['ソク'], kunyomi: ['あし', 'た.りる', 'た.す'], meaning: 'Foot / Leg / To be sufficient',
        examples: [
            { word: '足', reading: 'あし', meaning: 'Foot / Leg' },
            { word: '足りる', reading: 'たりる', meaning: 'To be sufficient' }
        ]
    },

    // --- POSITIONS & DIRECTIONS ---
    {
        id: 'k_43', kanji: '上', onyomi: ['ジョウ', 'ショウ'], kunyomi: ['うえ', 'あ.がる', 'のぼ.る'], meaning: 'Up / Above',
        examples: [
            { word: '上', reading: 'うえ', meaning: 'Above / Top' },
            { word: '上がる', reading: 'あがる', meaning: 'To go up / rise' }
        ]
    },
    {
        id: 'k_44', kanji: '下', onyomi: ['カ', 'ゲ'], kunyomi: ['した', 'さ.がる', 'くだ.る'], meaning: 'Down / Below',
        examples: [
            { word: '下', reading: 'した', meaning: 'Below / Bottom' },
            { word: '地下鉄', reading: 'ちかてつ', meaning: 'Subway' }
        ]
    },
    {
        id: 'k_45', kanji: '前', onyomi: ['ゼン'], kunyomi: ['まえ'], meaning: 'Before / Front',
        examples: [
            { word: '名前', reading: 'なまえ', meaning: 'Name' },
            { word: '午前', reading: 'ごぜん', meaning: 'A.M. / Morning' }
        ]
    },
    {
        id: 'k_46', kanji: '後', onyomi: ['ゴ', 'コウ'], kunyomi: ['うし.ろ', 'あと', 'おく.れる'], meaning: 'After / Behind',
        examples: [
            { word: '午後', reading: 'ごご', meaning: 'P.M. / Afternoon' },
            { word: '後ろ', reading: 'うしろ', meaning: 'Behind' }
        ]
    },
    {
        id: 'k_47', kanji: '中', onyomi: ['チュウ'], kunyomi: ['なか'], meaning: 'Inside / Middle',
        examples: [
            { word: '中', reading: 'なか', meaning: 'Inside' },
            { word: '一日中', reading: 'いちにちじゅう', meaning: 'All day long' }
        ]
    },
    {
        id: 'k_48', kanji: '外', onyomi: ['ガイ', 'ゲ'], kunyomi: ['そと', 'はず.れる'], meaning: 'Outside',
        examples: [
            { word: '外国', reading: 'がいこく', meaning: 'Foreign country' },
            { word: '外', reading: 'そと', meaning: 'Outside' }
        ]
    },
    {
        id: 'k_49', kanji: '右', onyomi: ['ユウ', 'ウ'], kunyomi: ['みぎ'], meaning: 'Right',
        examples: [
            { word: '右', reading: 'みぎ', meaning: 'Right side' },
            { word: '右手', reading: 'みぎて', meaning: 'Right hand' }
        ]
    },
    {
        id: 'k_50', kanji: '左', onyomi: ['サ'], kunyomi: ['ひだり'], meaning: 'Left',
        examples: [
            { word: '左', reading: 'ひだり', meaning: 'Left side' },
            { word: '左側', reading: 'ひだりがわ', meaning: 'Left side' }
        ]
    },

    // --- OPPOSITES & ADJECTIVES ---
    {
        id: 'k_51', kanji: '大', onyomi: ['ダイ', 'タイ'], kunyomi: ['おお.きい', 'おお'], meaning: 'Big / Large',
        examples: [
            { word: '大きい', reading: 'おおきい', meaning: 'Big' },
            { word: '大学', reading: 'だいがく', meaning: 'University' }
        ]
    },
    {
        id: 'k_52', kanji: '小', onyomi: ['ショウ'], kunyomi: ['ちい.さい', 'こ', 'お'], meaning: 'Small',
        examples: [
            { word: '小さい', reading: 'ちいさい', meaning: 'Small' },
            { word: '小学校', reading: 'しょうがっこう', meaning: 'Elementary school' }
        ]
    },
    {
        id: 'k_53', kanji: '高', onyomi: ['コウ'], kunyomi: ['たか.い', 'たか.まる'], meaning: 'High / Expensive',
        examples: [
            { word: '高い', reading: 'たかい', meaning: 'High / Expensive' },
            { word: '高校', reading: 'こうこう', meaning: 'High school' }
        ]
    },
    {
        id: 'k_54', kanji: '安', onyomi: ['アン'], kunyomi: ['やす.い'], meaning: 'Cheap / Safe',
        examples: [
            { word: '安い', reading: 'やすい', meaning: 'Cheap' },
            { word: '安全', reading: 'あんぜん', meaning: 'Safety' }
        ]
    },
    {
        id: 'k_55', kanji: '新', onyomi: ['シン'], kunyomi: ['あたら.しい', 'あら.た'], meaning: 'New',
        examples: [
            { word: '新しい', reading: 'あたらしい', meaning: 'New' },
            { word: '新聞', reading: 'しんぶん', meaning: 'Newspaper' }
        ]
    },
    {
        id: 'k_56', kanji: '古', onyomi: ['コ'], kunyomi: ['ふる.い'], meaning: 'Old',
        examples: [
            { word: '古い', reading: 'ふるい', meaning: 'Old' },
            { word: '中古', reading: 'ちゅうこ', meaning: 'Secondhand / Used' }
        ]
    },
    {
        id: 'k_57', kanji: '長', onyomi: ['チョウ'], kunyomi: ['なが.い'], meaning: 'Long / Leader',
        examples: [
            { word: '長い', reading: 'ながい', meaning: 'Long' },
            { word: '社長', reading: 'しゃちょう', meaning: 'Company president' }
        ]
    },
    {
        id: 'k_58', kanji: '多', onyomi: ['タ'], kunyomi: ['おお.い'], meaning: 'Many / Much',
        examples: [
            { word: '多い', reading: 'おおい', meaning: 'Many' },
            { word: '多分', reading: 'たぶん', meaning: 'Probably' }
        ]
    },
    {
        id: 'k_59', kanji: '少', onyomi: ['ショウ'], kunyomi: ['すく.ない', 'すこ.し'], meaning: 'Few / A little',
        examples: [
            { word: '少し', reading: 'すこし', meaning: 'A little' },
            { word: '少ない', reading: 'すくない', meaning: 'Few' }
        ]
    },
    {
        id: 'k_60', kanji: '白', onyomi: ['ハク', 'ビャク'], kunyomi: ['しろ', 'しろ.い'], meaning: 'White',
        examples: [
            { word: '白い', reading: 'しろい', meaning: 'White (Adjective)' },
            { word: '面白い', reading: 'おもしろい', meaning: 'Interesting' }
        ]
    },

    // --- NATURE, WEATHER & CORE NOUNS ---
    {
        id: 'k_61', kanji: '山', onyomi: ['サン'], kunyomi: ['やま'], meaning: 'Mountain',
        examples: [
            { word: '山', reading: 'やま', meaning: 'Mountain' },
            { word: '富士山', reading: 'ふじさん', meaning: 'Mt. Fuji' }
        ]
    },
    {
        id: 'k_62', kanji: '川', onyomi: ['セン'], kunyomi: ['かわ'], meaning: 'River',
        examples: [
            { word: '川', reading: 'かわ', meaning: 'River' }
        ]
    },
    {
        id: 'k_63', kanji: '空', onyomi: ['クウ'], kunyomi: ['そら', 'あ.く', 'から'], meaning: 'Sky / Empty',
        examples: [
            { word: '空', reading: 'そら', meaning: 'Sky' },
            { word: '空気', reading: 'くうき', meaning: 'Air' }
        ]
    },
    {
        id: 'k_64', kanji: '天', onyomi: ['テン'], kunyomi: ['あま', 'あめ'], meaning: 'Heavens / Sky',
        examples: [
            { word: '天気', reading: 'てんき', meaning: 'Weather' }
        ]
    },
    {
        id: 'k_65', kanji: '気', onyomi: ['キ', 'ケ'], kunyomi: [], meaning: 'Spirit / Air / Mood',
        examples: [
            { word: '元気', reading: 'げんき', meaning: 'Healthy / Energetic' },
            { word: '病気', reading: 'びょうき', meaning: 'Illness / Sickness' }
        ]
    },
    {
        id: 'k_66', kanji: '雨', onyomi: ['ウ'], kunyomi: ['あめ', 'あま'], meaning: 'Rain',
        examples: [
            { word: '雨', reading: 'あめ', meaning: 'Rain' },
            { word: '大雨', reading: 'おおあめ', meaning: 'Heavy rain' }
        ]
    },
    {
        id: 'k_67', kanji: '電', onyomi: ['デン'], kunyomi: [], meaning: 'Electricity',
        examples: [
            { word: '電車', reading: 'でんしゃ', meaning: 'Train' },
            { word: '電話', reading: 'でんわ', meaning: 'Telephone' }
        ]
    },
    {
        id: 'k_68', kanji: '車', onyomi: ['シャ'], kunyomi: ['くるま'], meaning: 'Car / Vehicle',
        examples: [
            { word: '車', reading: 'くるま', meaning: 'Car' },
            { word: '自転車', reading: 'じてんしゃ', meaning: 'Bicycle' }
        ]
    },
    {
        id: 'k_69', kanji: '語', onyomi: ['ゴ'], kunyomi: ['かた.る'], meaning: 'Language / Word',
        examples: [
            { word: '日本語', reading: 'にほんご', meaning: 'Japanese language' },
            { word: '英語', reading: 'えいご', meaning: 'English language' }
        ]
    },
    {
        id: 'k_70', kanji: '本', onyomi: ['ホン'], kunyomi: ['もと'], meaning: 'Book / Origin / Main',
        examples: [
            { word: '本', reading: 'ほん', meaning: 'Book' },
            { word: '山本', reading: 'やまもと', meaning: 'Yamamoto (Name)' }
        ]
    },
    // --- ESSENTIAL VERBS (ACTIONS) ---
    {
        id: 'k_71', kanji: '行', onyomi: ['ギョウ', 'コウ'], kunyomi: ['い.く', 'ゆ.く', 'おこな.う'], meaning: 'To go',
        examples: [
            { word: '行く', reading: 'いく', meaning: 'To go' },
            { word: '銀行', reading: 'ぎんこう', meaning: 'Bank' }
        ]
    },
    {
        id: 'k_72', kanji: '食', onyomi: ['ショク'], kunyomi: ['た.べる', 'く.う'], meaning: 'To eat',
        examples: [
            { word: '食べる', reading: 'たべる', meaning: 'To eat' },
            { word: '食べ物', reading: 'たべもの', meaning: 'Food' }
        ]
    },
    {
        id: 'k_73', kanji: '飲', onyomi: ['イン'], kunyomi: ['の.む'], meaning: 'To drink',
        examples: [
            { word: '飲む', reading: 'のむ', meaning: 'To drink' },
            { word: '飲み物', reading: 'のみもの', meaning: 'Beverage / Drink' }
        ]
    },
    {
        id: 'k_74', kanji: '見', onyomi: ['ケン'], kunyomi: ['み.る', 'み.える', 'み.せる'], meaning: 'To see',
        examples: [
            { word: '見る', reading: 'みる', meaning: 'To see / watch' },
            { word: '見せる', reading: 'みせる', meaning: 'To show' }
        ]
    },
    {
        id: 'k_75', kanji: '聞', onyomi: ['ブン', 'モン'], kunyomi: ['き.く', 'き.こえる'], meaning: 'To hear / listen',
        examples: [
            { word: '聞く', reading: 'きく', meaning: 'To listen / hear / ask' },
            { word: '新聞', reading: 'しんぶん', meaning: 'Newspaper' }
        ]
    },
    {
        id: 'k_76', kanji: '読', onyomi: ['ドク'], kunyomi: ['よ.む'], meaning: 'To read',
        examples: [
            { word: '読む', reading: 'よむ', meaning: 'To read' },
            { word: '読書', reading: 'どくしょ', meaning: 'Reading books' }
        ]
    },
    {
        id: 'k_77', kanji: '書', onyomi: ['ショ'], kunyomi: ['か.く'], meaning: 'To write',
        examples: [
            { word: '書く', reading: 'かく', meaning: 'To write' },
            { word: '辞書', reading: 'じしょ', meaning: 'Dictionary' }
        ]
    },
    {
        id: 'k_78', kanji: '話', onyomi: ['ワ'], kunyomi: ['はな.す', 'はなし'], meaning: 'To speak / Talk',
        examples: [
            { word: '話す', reading: 'はなす', meaning: 'To speak' },
            { word: '電話', reading: 'でんわ', meaning: 'Telephone' }
        ]
    },
    {
        id: 'k_79', kanji: '買', onyomi: ['バイ'], kunyomi: ['か.う'], meaning: 'To buy',
        examples: [
            { word: '買う', reading: 'かう', meaning: 'To buy' },
            { word: '買い物', reading: 'かいもの', meaning: 'Shopping' }
        ]
    },
    {
        id: 'k_80', kanji: '出', onyomi: ['シュツ'], kunyomi: ['で.る', 'だ.す'], meaning: 'To exit / leave',
        examples: [
            { word: '出る', reading: 'でる', meaning: 'To leave / come out' },
            { word: '出かける', reading: 'でかける', meaning: 'To go out' }
        ]
    },
    {
        id: 'k_81', kanji: '入', onyomi: ['ニュウ'], kunyomi: ['はい.る', 'い.れる'], meaning: 'To enter / insert',
        examples: [
            { word: '入る', reading: 'はいる', meaning: 'To enter' },
            { word: '入れる', reading: 'いれる', meaning: 'To put in' }
        ]
    },
    {
        id: 'k_82', kanji: '休', onyomi: ['キュウ'], kunyomi: ['やす.む', 'やす.み'], meaning: 'To rest / absence',
        examples: [
            { word: '休む', reading: 'やすむ', meaning: 'To rest / take a day off' },
            { word: '休み', reading: 'やすみ', meaning: 'Holiday / Break' }
        ]
    },
    {
        id: 'k_83', kanji: '立', onyomi: ['リツ'], kunyomi: ['た.つ', 'た.てる'], meaning: 'To stand',
        examples: [
            { word: '立つ', reading: 'たつ', meaning: 'To stand' },
            { word: '国立', reading: 'こくりつ', meaning: 'National' }
        ]
    },

    // --- SCHOOL & SOCIETY ---
    {
        id: 'k_84', kanji: '学', onyomi: ['ガク'], kunyomi: ['まな.ぶ'], meaning: 'To study / Learning',
        examples: [
            { word: '学生', reading: 'がくせい', meaning: 'Student' },
            { word: '大学', reading: 'だいがく', meaning: 'University' }
        ]
    },
    {
        id: 'k_85', kanji: '生', onyomi: ['セイ', 'ショウ'], kunyomi: ['い.きる', 'う.まれる', 'なま'], meaning: 'Life / To be born',
        examples: [
            { word: '先生', reading: 'せんせい', meaning: 'Teacher' },
            { word: '生まれる', reading: 'うまれる', meaning: 'To be born' }
        ]
    },
    {
        id: 'k_86', kanji: '校', onyomi: ['コウ'], kunyomi: [], meaning: 'School',
        examples: [
            { word: '学校', reading: 'がっこう', meaning: 'School' },
            { word: '高校', reading: 'こうこう', meaning: 'High school' }
        ]
    },
    {
        id: 'k_87', kanji: '国', onyomi: ['コク'], kunyomi: ['くに'], meaning: 'Country',
        examples: [
            { word: '国', reading: 'くに', meaning: 'Country' },
            { word: '外国', reading: 'がいこく', meaning: 'Foreign country' }
        ]
    },
    {
        id: 'k_88', kanji: '駅', onyomi: ['エキ'], kunyomi: [], meaning: 'Station',
        examples: [
            { word: '駅', reading: 'えき', meaning: 'Train station' },
            { word: '駅前', reading: 'えきまえ', meaning: 'In front of the station' }
        ]
    },
    {
        id: 'k_89', kanji: '店', onyomi: ['テン'], kunyomi: ['みせ'], meaning: 'Shop / Store',
        examples: [
            { word: '店', reading: 'みせ', meaning: 'Shop / Store' },
            { word: '喫茶店', reading: 'きっさてん', meaning: 'Coffee shop / Cafe' }
        ]
    },
    {
        id: 'k_90', kanji: '社', onyomi: ['シャ'], kunyomi: ['やしろ'], meaning: 'Company / Shrine',
        examples: [
            { word: '会社', reading: 'かいしゃ', meaning: 'Company' },
            { word: '社長', reading: 'しゃちょう', meaning: 'Company president' }
        ]
    },
    {
        id: 'k_91', kanji: '会', onyomi: ['カイ', 'エ'], kunyomi: ['あ.う'], meaning: 'To meet / Society',
        examples: [
            { word: '会う', reading: 'あう', meaning: 'To meet' },
            { word: '会社員', reading: 'かいしゃいん', meaning: 'Company employee' }
        ]
    },
    {
        id: 'k_92', kanji: '名', onyomi: ['メイ', 'ミョウ'], kunyomi: ['な'], meaning: 'Name',
        examples: [
            { word: '名前', reading: 'なまえ', meaning: 'Name' },
            { word: '有名', reading: 'ゆうめい', meaning: 'Famous' }
        ]
    },
    {
        id: 'k_93', kanji: '道', onyomi: ['ドウ'], kunyomi: ['みち'], meaning: 'Road / Way',
        examples: [
            { word: '道', reading: 'みち', meaning: 'Road / Street' },
            { word: '水道', reading: 'すいどう', meaning: 'Water supply' }
        ]
    },

    // --- TIME & COMPASS DIRECTIONS ---
    {
        id: 'k_94', kanji: '午', onyomi: ['ゴ'], kunyomi: [], meaning: 'Noon',
        examples: [
            { word: '午前', reading: 'ごぜん', meaning: 'A.M. / Morning' },
            { word: '午後', reading: 'ごご', meaning: 'P.M. / Afternoon' }
        ]
    },
    {
        id: 'k_95', kanji: '間', onyomi: ['カン', 'ケン'], kunyomi: ['あいだ', 'ま'], meaning: 'Time / Interval / Between',
        examples: [
            { word: '時間', reading: 'じかん', meaning: 'Time / Hours' },
            { word: '間', reading: 'あいだ', meaning: 'Between' }
        ]
    },
    {
        id: 'k_96', kanji: '週', onyomi: ['シュウ'], kunyomi: [], meaning: 'Week',
        examples: [
            { word: '今週', reading: 'こんしゅう', meaning: 'This week' },
            { word: '来週', reading: 'らいしゅう', meaning: 'Next week' }
        ]
    },
    {
        id: 'k_97', kanji: '東', onyomi: ['トウ'], kunyomi: ['ひがし'], meaning: 'East',
        examples: [
            { word: '東', reading: 'ひがし', meaning: 'East' },
            { word: '東京', reading: 'とうきょう', meaning: 'Tokyo' }
        ]
    },
    {
        id: 'k_98', kanji: '西', onyomi: ['セイ', 'サイ'], kunyomi: ['にし'], meaning: 'West',
        examples: [
            { word: '西', reading: 'にし', meaning: 'West' },
            { word: '西洋', reading: 'せいよう', meaning: 'The West / Western countries' }
        ]
    },
    {
        id: 'k_99', kanji: '南', onyomi: ['ナン'], kunyomi: ['みなみ'], meaning: 'South',
        examples: [
            { word: '南', reading: 'みなみ', meaning: 'South' },
            { word: '南口', reading: 'みなみぐち', meaning: 'South exit' }
        ]
    },
    {
        id: 'k_100', kanji: '北', onyomi: ['ホク'], kunyomi: ['きた'], meaning: 'North',
        examples: [
            { word: '北', reading: 'きた', meaning: 'North' },
            { word: '北海道', reading: 'ほっかいどう', meaning: 'Hokkaido' }
        ]
    },

    // --- REMAINING COLORS ---
    {
        id: 'k_101', kanji: '赤', onyomi: ['セキ'], kunyomi: ['あか', 'あか.い'], meaning: 'Red',
        examples: [
            { word: '赤い', reading: 'あかい', meaning: 'Red' },
            { word: '赤ちゃん', reading: 'あかちゃん', meaning: 'Baby' }
        ]
    },
    {
        id: 'k_102', kanji: '青', onyomi: ['セイ', 'ショウ'], kunyomi: ['あお', 'あお.い'], meaning: 'Blue',
        examples: [
            { word: '青い', reading: 'あおい', meaning: 'Blue' },
            { word: '青年', reading: 'せいねん', meaning: 'Youth / Young man' }
        ]
    },
    {
        id: 'k_103', kanji: '黒', onyomi: ['コク'], kunyomi: ['くろ', 'くろ.い'], meaning: 'Black',
        examples: [
            { word: '黒い', reading: 'くろい', meaning: 'Black' },
            { word: '黒板', reading: 'こくばん', meaning: 'Blackboard' }
        ]
    }
];