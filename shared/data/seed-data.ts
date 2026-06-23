export const SEED_DATA = {
    // 1. Vocabulary
    vocab_words: [
        { "word": "水", "reading": "みず", "meaning": "Water", "type": "Noun", "explanation": "Essential for life. Imagine three drops of water splashing." },
        { "word": "食べる", "reading": "たべる", "meaning": "To eat", "type": "Verb", "explanation": "A roof over a person with a spoon." },
        { "word": "大きい", "reading": "おおきい", "meaning": "Big / Large", "type": "Adjective", "explanation": "Looks like a person stretching their arms out wide." },
        { "word": "今日", "reading": "きょう", "meaning": "Today", "type": "Noun", "explanation": "Now (今) + Day (日) = Today." },
        { "word": "行く", "reading": "いく", "meaning": "To go", "type": "Verb", "explanation": "Imagine two people walking in the same direction." },
        { "word": "学校", "reading": "がっこう", "meaning": "School", "type": "Noun", "explanation": "Learning (学) + Building (校)." },
        { "word": "見る", "reading": "みる", "meaning": "To see / To watch", "type": "Verb", "explanation": "An eye with legs walking to look at something." },
        { "word": "小さい", "reading": "ちいさい", "meaning": "Small", "type": "Adjective", "explanation": "Three tiny dots, like grains of sand." },
        { "word": "本", "reading": "ほん", "meaning": "Book", "type": "Noun", "explanation": "A tree (木) with a line marking its roots (origin/book)." },
        { "word": "飲む", "reading": "のむ", "meaning": "To drink", "type": "Verb", "explanation": "Food/Drink radical on the left, a person yawning/drinking on the right." },
        { "word": "明日", "reading": "あした", "meaning": "Tomorrow", "type": "Noun", "explanation": "Bright (明) + Day (日) = The bright new day." },
        { "word": "新しい", "reading": "あたらしい", "meaning": "New", "type": "Adjective", "explanation": "An axe chopping a tree to make fresh, new wood." },
        { "word": "車", "reading": "くるま", "meaning": "Car", "type": "Noun", "explanation": "Looks like a cart viewed from above with wheels." },
        { "word": "買う", "reading": "かう", "meaning": "To buy", "type": "Verb", "explanation": "A net over a shell (ancient money) used to purchase goods." },
        { "word": "高い", "reading": "たかい", "meaning": "High / Expensive", "type": "Adjective", "explanation": "Looks like a tall building or tower." },
        { "word": "時計", "reading": "とけい", "meaning": "Clock / Watch", "type": "Noun", "explanation": "Time (時) + Measure (計)." },
        { "word": "話す", "reading": "はなす", "meaning": "To speak", "type": "Verb", "explanation": "Words/Speech radical on the left, tongue on the right." },
        { "word": "古い", "reading": "ふるい", "meaning": "Old (things)", "type": "Adjective", "explanation": "A tombstone cross over a mouth, passing down old tales." },
        { "word": "電車", "reading": "でんしゃ", "meaning": "Train", "type": "Noun", "explanation": "Electricity (電) + Car (車)." },
        { "word": "読む", "reading": "よむ", "meaning": "To read", "type": "Verb", "explanation": "Words radical on the left, selling/trading words on the right." },
        { "word": "昨日", "reading": "きのう", "meaning": "Yesterday", "type": "Noun", "explanation": "Previous (昨) + Day (日)." },
        { "word": "安い", "reading": "やすい", "meaning": "Cheap", "type": "Adjective", "explanation": "A woman under a roof, finding peace (and cheap prices)." },
        { "word": "猫", "reading": "ねこ", "meaning": "Cat", "type": "Noun", "explanation": "Animal radical on the left, seedling on the right (cats love grass/plants)." },
        { "word": "書く", "reading": "かく", "meaning": "To write", "type": "Verb", "explanation": "A hand holding a brush over a piece of paper." },
        { "word": "犬", "reading": "いぬ", "meaning": "Dog", "type": "Noun", "explanation": "Like the kanji for big (大) but with a dot for the dog's ear." },
        { "word": "先生", "reading": "せんせい", "meaning": "Teacher", "type": "Noun", "explanation": "Previous (先) + Life (生). One who has lived before and teaches you." },
        { "word": "学生", "reading": "がくせい", "meaning": "Student", "type": "Noun", "explanation": "Learning (学) + Life (生). A person whose life is studying." },
        { "word": "会社", "reading": "かいしゃ", "meaning": "Company", "type": "Noun", "explanation": "Meeting (会) + Society (社). A gathering of people for business." },
        { "word": "銀行", "reading": "ぎんこう", "meaning": "Bank", "type": "Noun", "explanation": "Silver/Money (銀) + Go (行). The place where money goes." },
        { "word": "病院", "reading": "びょういん", "meaning": "Hospital", "type": "Noun", "explanation": "Sickness (病) + Institution (院)." },
        { "word": "駅", "reading": "えき", "meaning": "Station", "type": "Noun", "explanation": "A horse (馬) stopping at a post/station." },
        { "word": "友達", "reading": "ともだち", "meaning": "Friend", "type": "Noun", "explanation": "Two hands holding together (友) indicating friendship." },
        { "word": "手", "reading": "て", "meaning": "Hand", "type": "Noun", "explanation": "A pictogram of a hand with fingers spread out." },
        { "word": "足", "reading": "あし", "meaning": "Leg / Foot", "type": "Noun", "explanation": "Looks like a knee, shin, and foot." },
        { "word": "目", "reading": "め", "meaning": "Eye", "type": "Noun", "explanation": "A square with two lines inside, representing an eye." },
        { "word": "耳", "reading": "みみ", "meaning": "Ear", "type": "Noun", "explanation": "A pictogram of an ear." },
        { "word": "口", "reading": "くち", "meaning": "Mouth", "type": "Noun", "explanation": "An open square representing an open mouth." },
        { "word": "男", "reading": "おとこ", "meaning": "Man", "type": "Noun", "explanation": "Field (田) + Power (力). A man using strength in the field." },
        { "word": "女", "reading": "おんな", "meaning": "Woman", "type": "Noun", "explanation": "A pictogram of a woman sitting gracefully." },
        { "word": "子", "reading": "こ", "meaning": "Child", "type": "Noun", "explanation": "A baby wrapped in a blanket with arms outstretched." },
        { "word": "天気", "reading": "てんき", "meaning": "Weather", "type": "Noun", "explanation": "Heaven/Sky (天) + Spirit/Air (気)." },
        { "word": "雨", "reading": "あめ", "meaning": "Rain", "type": "Noun", "explanation": "Water droplets falling from a cloud." },
        { "word": "雪", "reading": "ゆき", "meaning": "Snow", "type": "Noun", "explanation": "Rain falling over a broom sweeping it away." },
        { "word": "山", "reading": "やま", "meaning": "Mountain", "type": "Noun", "explanation": "Three peaks of a mountain." },
        { "word": "川", "reading": "かわ", "meaning": "River", "type": "Noun", "explanation": "Three lines representing flowing water." },
        { "word": "空", "reading": "そら", "meaning": "Sky", "type": "Noun", "explanation": "A cave/hole with work being done under the vast sky." },
        { "word": "花", "reading": "はな", "meaning": "Flower", "type": "Noun", "explanation": "Grass/Plant radical on top, indicating vegetation changing/blooming." },
        { "word": "道", "reading": "みち", "meaning": "Road / Street", "type": "Noun", "explanation": "A head/leader moving forward on a path." },
        { "word": "家", "reading": "いえ", "meaning": "House / Home", "type": "Noun", "explanation": "A pig under a roof, representing livestock at a farm home." },
        { "word": "部屋", "reading": "へや", "meaning": "Room", "type": "Noun", "explanation": "Section/Part (部) + Roof/Shop (屋)." },
        { "word": "時間", "reading": "じかん", "meaning": "Time", "type": "Noun", "explanation": "Time (時) + Interval (間). The space between moments." },
        { "word": "お金", "reading": "おかね", "meaning": "Money", "type": "Noun", "explanation": "The kanji 金 means gold/metal. Adding 'お' makes it polite." },
        { "word": "日本", "reading": "にほん", "meaning": "Japan", "type": "Noun", "explanation": "Sun (日) + Origin (本) = Origin of the sun." },
        { "word": "語", "reading": "ご", "meaning": "Language", "type": "Noun", "explanation": "Words radical on the left, an 'I' (吾) speaking on the right." },
        { "word": "外国", "reading": "がいこく", "meaning": "Foreign country", "type": "Noun", "explanation": "Outside (外) + Country (国)." },
        { "word": "人", "reading": "ひと", "meaning": "Person", "type": "Noun", "explanation": "A pictogram of a person standing on two legs." },
        { "word": "父", "reading": "ちち", "meaning": "Father (own)", "type": "Noun", "explanation": "Looks like two crossed axes, representing the father as the head of the household." },
        { "word": "母", "reading": "はは", "meaning": "Mother (own)", "type": "Noun", "explanation": "A pictogram of a nursing mother." },
        { "word": "兄", "reading": "あに", "meaning": "Older brother", "type": "Noun", "explanation": "A mouth with legs, representing the loud older brother." },
        { "word": "姉", "reading": "あね", "meaning": "Older sister", "type": "Noun", "explanation": "Woman (女) + Market/City (市). The older sister goes to the market." },
        { "word": "弟", "reading": "おとうと", "meaning": "Younger brother", "type": "Noun", "explanation": "Looks like a leather thong wrapped around a weapon." },
        { "word": "妹", "reading": "いもうと", "meaning": "Younger sister", "type": "Noun", "explanation": "Woman (女) + Not yet (未). A woman who is not yet fully grown." },
        { "word": "家族", "reading": "かぞく", "meaning": "Family", "type": "Noun", "explanation": "House (家) + Tribe/Clan (族)." },
        { "word": "名前", "reading": "なまえ", "meaning": "Name", "type": "Noun", "explanation": "Name (名) + Before/Front (前)." },
        { "word": "国", "reading": "くに", "meaning": "Country", "type": "Noun", "explanation": "A king/jewel inside a walled border." },
        { "word": "朝", "reading": "あさ", "meaning": "Morning", "type": "Noun", "explanation": "The sun rising through the mist, with the moon fading." },
        { "word": "昼", "reading": "ひる", "meaning": "Daytime / Noon", "type": "Noun", "explanation": "A sun shining down on the ground." },
        { "word": "夜", "reading": "よる", "meaning": "Night", "type": "Noun", "explanation": "A person resting under the moon/stars." },
        { "word": "今", "reading": "いま", "meaning": "Now", "type": "Noun", "explanation": "Looks like a clock pendulum swinging right now." },
        { "word": "先週", "reading": "せんしゅう", "meaning": "Last week", "type": "Noun", "explanation": "Previous (先) + Week (週)." },
        { "word": "今週", "reading": "こんしゅう", "meaning": "This week", "type": "Noun", "explanation": "Now/Current (今) + Week (週)." },
        { "word": "来週", "reading": "らいしゅう", "meaning": "Next week", "type": "Noun", "explanation": "Come/Next (来) + Week (週)." },
        { "word": "好き", "reading": "すき", "meaning": "To like", "type": "Na-Adjective", "explanation": "Woman (女) + Child (子). A mother naturally likes her child." },
        { "word": "嫌い", "reading": "きらい", "meaning": "To dislike", "type": "Na-Adjective", "explanation": "Woman (女) + Both/Together (兼). Traditionally, women grouped together causing drama/dislike." },
        { "word": "元気", "reading": "げんき", "meaning": "Healthy / Energetic", "type": "Na-Adjective", "explanation": "Origin (元) + Spirit (気). Returning to your original, healthy spirit." },
        { "word": "魚", "reading": "さかな", "meaning": "Fish", "type": "Noun", "explanation": "Looks like a fish pointing upwards, with the four dots at the bottom acting as fins or water." },
        { "word": "肉", "reading": "にく", "meaning": "Meat", "type": "Noun", "explanation": "Looks like slices of meat hanging inside a cold storage room." },
        { "word": "卵", "reading": "たまご", "meaning": "Egg", "type": "Noun", "explanation": "Looks like two eggs squished together side-by-side in a carton." },
        { "word": "野菜", "reading": "やさい", "meaning": "Vegetable", "type": "Noun", "explanation": "Field (野) + Vegetable/Weed (菜). Plants grown in the field." },
        { "word": "果物", "reading": "くだもの", "meaning": "Fruit", "type": "Noun", "explanation": "Fruit/Result (果) + Thing (物). The result of a tree's growth." },
        { "word": "パン", "reading": "ぱん", "meaning": "Bread", "type": "Noun", "explanation": "Written in Katakana because it is a loanword originally from Portuguese." },
        { "word": "飲み物", "reading": "のみもの", "meaning": "Beverage", "type": "Noun", "explanation": "To drink (飲) + Thing (物) = A thing to drink." },
        { "word": "食べ物", "reading": "たべもの", "meaning": "Food", "type": "Noun", "explanation": "To eat (食) + Thing (物) = A thing to eat." },
        { "word": "ご飯", "reading": "ごはん", "meaning": "Cooked rice / Meal", "type": "Noun", "explanation": "Honorable prefix (ご) + Cooked rice (飯)." },
        { "word": "月曜日", "reading": "げつようび", "meaning": "Monday", "type": "Noun", "explanation": "Moon (月) + Day of the week (曜日)." },
        { "word": "火曜日", "reading": "かようび", "meaning": "Tuesday", "type": "Noun", "explanation": "Fire (火) + Day of the week (曜日)." },
        { "word": "水曜日", "reading": "すいようび", "meaning": "Wednesday", "type": "Noun", "explanation": "Water (水) + Day of the week (曜日)." },
        { "word": "木曜日", "reading": "もくようび", "meaning": "Thursday", "type": "Noun", "explanation": "Tree/Wood (木) + Day of the week (曜日)." },
        { "word": "金曜日", "reading": "きんようび", "meaning": "Friday", "type": "Noun", "explanation": "Gold/Money (金) + Day of the week (曜日)." },
        { "word": "土曜日", "reading": "どようび", "meaning": "Saturday", "type": "Noun", "explanation": "Earth/Soil (土) + Day of the week (曜日)." },
        { "word": "日曜日", "reading": "にちようび", "meaning": "Sunday", "type": "Noun", "explanation": "Sun (日) + Day of the week (曜日)." },
        { "word": "休み", "reading": "やすみ", "meaning": "Holiday / Rest", "type": "Noun", "explanation": "A person (亻) resting against a tree (木)." },
        { "word": "働く", "reading": "はたらく", "meaning": "To work", "type": "Verb", "explanation": "A person (亻) moving heavy (重) things with power (力)." },
        { "word": "勉強", "reading": "べんきょう", "meaning": "Study", "type": "Noun", "explanation": "Exertion (勉) + Strong/Force (強). Studying takes strong effort!" },
        { "word": "教える", "reading": "おしえる", "meaning": "To teach", "type": "Verb", "explanation": "An elder or teacher instructing/striking knowledge into someone." },
        { "word": "習う", "reading": "ならう", "meaning": "To learn", "type": "Verb", "explanation": "Feathers (羽) over white (白). A young bird practicing how to fly." },
        { "word": "英語", "reading": "えいご", "meaning": "English", "type": "Noun", "explanation": "England/Outstanding (英) + Language (語)." },
        { "word": "音楽", "reading": "おんがく", "meaning": "Music", "type": "Noun", "explanation": "Sound (音) + Comfort/Fun (楽). Sound that brings joy." },
        { "word": "映画", "reading": "えいが", "meaning": "Movie", "type": "Noun", "explanation": "Reflect/Project (映) + Picture (画). Projected pictures." },
        { "word": "買い物", "reading": "かいもの", "meaning": "Shopping", "type": "Noun", "explanation": "To buy (買) + Thing (物)." },
        { "word": "聞く", "reading": "きく", "meaning": "To listen / To ask", "type": "Verb", "explanation": "An ear (耳) listening closely through a gate (門)." },
        { "word": "会う", "reading": "あう", "meaning": "To meet", "type": "Verb", "explanation": "People coming together under one roof." },
        { "word": "待つ", "reading": "まつ", "meaning": "To wait", "type": "Verb", "explanation": "Standing by the road, waiting near a Buddhist temple." },
        { "word": "立つ", "reading": "たつ", "meaning": "To stand", "type": "Verb", "explanation": "A pictogram of a person standing firmly on the ground." },
        { "word": "座る", "reading": "すわる", "meaning": "To sit", "type": "Verb", "explanation": "Two people sitting facing each other on the ground." },
        { "word": "入る", "reading": "はいる", "meaning": "To enter", "type": "Verb", "explanation": "Looks like an arrowhead pointing inward to enter a space." },
        { "word": "出る", "reading": "でる", "meaning": "To exit / To leave", "type": "Verb", "explanation": "Two mountains stacked, signifying moving out and beyond." },
        { "word": "帰る", "reading": "かえる", "meaning": "To go home", "type": "Verb", "explanation": "Returning to your home base." },
        { "word": "寝る", "reading": "ねる", "meaning": "To sleep", "type": "Verb", "explanation": "A person resting inside a house on a bed." },
        { "word": "起きる", "reading": "おきる", "meaning": "To wake up", "type": "Verb", "explanation": "Someone getting up and moving away from their resting spot." },
        { "word": "休む", "reading": "やすむ", "meaning": "To rest", "type": "Verb", "explanation": "A person (亻) resting against a tree (木)." },
        { "word": "遊ぶ", "reading": "あそぶ", "meaning": "To play", "type": "Verb", "explanation": "A child wandering and playing freely." },
        { "word": "泳ぐ", "reading": "およぐ", "meaning": "To swim", "type": "Verb", "explanation": "Water radical on the left, diving in forever on the right." },
        { "word": "歩く", "reading": "あるく", "meaning": "To walk", "type": "Verb", "explanation": "Stopping to pace yourself while walking forward." },
        { "word": "走る", "reading": "はしる", "meaning": "To run", "type": "Verb", "explanation": "A person taking large, fast strides." },
        { "word": "乗る", "reading": "のる", "meaning": "To ride", "type": "Verb", "explanation": "A person climbing up onto a tree or vehicle." },
        { "word": "降りる", "reading": "おりる", "meaning": "To get off", "type": "Verb", "explanation": "Descending step-by-step from a high place." },
        { "word": "使う", "reading": "つかう", "meaning": "To use", "type": "Verb", "explanation": "A person sending an official on an errand." },
        { "word": "作る", "reading": "つくる", "meaning": "To make", "type": "Verb", "explanation": "A person using tools to build something." },
        { "word": "洗う", "reading": "あらう", "meaning": "To wash", "type": "Verb", "explanation": "Water radical on the left, scrubbing hands on the right." },
        { "word": "熱い", "reading": "あつい", "meaning": "Hot (things)", "type": "Adjective", "explanation": "Fire/heat dots at the bottom under something roasting." },
        { "word": "冷たい", "reading": "つめたい", "meaning": "Cold (things)", "type": "Adjective", "explanation": "Ice radical on the left, shivering on the right." },
        { "word": "暖かい", "reading": "あたたかい", "meaning": "Warm", "type": "Adjective", "explanation": "The sun providing gentle warmth." },
        { "word": "涼しい", "reading": "すずしい", "meaning": "Cool", "type": "Adjective", "explanation": "Water radical on the left, a cool breeze on the capital." },
        { "word": "長い", "reading": "ながい", "meaning": "Long", "type": "Adjective", "explanation": "An elder with long flowing hair." },
        { "word": "短い", "reading": "みじかい", "meaning": "Short", "type": "Adjective", "explanation": "An arrow flying a short distance." },
        { "word": "早い", "reading": "はやい", "meaning": "Early / Fast", "type": "Adjective", "explanation": "The sun rising early over the horizon." },
        { "word": "遅い", "reading": "おそい", "meaning": "Late / Slow", "type": "Adjective", "explanation": "A sheep walking slowly on a path." },
        { "word": "忙しい", "reading": "いそがしい", "meaning": "Busy", "type": "Adjective", "explanation": "A heart/mind losing itself to too many tasks." },
        { "word": "楽しい", "reading": "たのしい", "meaning": "Fun", "type": "Adjective", "explanation": "Music instruments on a wooden stand bringing joy." },
        { "word": "白い", "reading": "しろい", "meaning": "White", "type": "Adjective", "explanation": "A drop of light creating a pure white gleam." },
        { "word": "黒い", "reading": "くろい", "meaning": "Black", "type": "Adjective", "explanation": "Soot and ash gathering over a fire." },
        { "word": "赤い", "reading": "あかい", "meaning": "Red", "type": "Adjective", "explanation": "A person standing over a blazing red fire." },
        { "word": "青い", "reading": "あおい", "meaning": "Blue", "type": "Adjective", "explanation": "Vegetation growing under the clear blue sky." },
        { "word": "黄色い", "reading": "きいろい", "meaning": "Yellow", "type": "Adjective", "explanation": "An arrow stuck in a yellow field." },
        { "word": "茶色", "reading": "ちゃいろ", "meaning": "Brown", "type": "Noun", "explanation": "The color (色) of tea (茶)." },
        { "word": "良い", "reading": "よい / いい", "meaning": "Good", "type": "Adjective", "explanation": "A pleasing and good form." },
        { "word": "悪い", "reading": "わるい", "meaning": "Bad", "type": "Adjective", "explanation": "A heavy burden placed on the heart." },
        { "word": "高い", "reading": "たかい", "meaning": "Tall / Expensive", "type": "Adjective", "explanation": "A tall multi-story building." },
        { "word": "安い", "reading": "やすい", "meaning": "Cheap", "type": "Adjective", "explanation": "A woman at peace under a roof (safe and cheap)." },
        { "word": "町", "reading": "まち", "meaning": "Town", "type": "Noun", "explanation": "Fields and streets intersecting." },
        { "word": "店", "reading": "みせ", "meaning": "Shop", "type": "Noun", "explanation": "A building displaying goods to fortune tellers." },
        { "word": "公園", "reading": "こうえん", "meaning": "Park", "type": "Noun", "explanation": "Public (公) + Garden (園)." },
        { "word": "映画館", "reading": "えいがかん", "meaning": "Movie Theater", "type": "Noun", "explanation": "Movie (映画) + Building (館)." },
        { "word": "病院", "reading": "びょういん", "meaning": "Hospital", "type": "Noun", "explanation": "Sickness (病) + Institution (院)." },
        { "word": "駅", "reading": "えき", "meaning": "Station", "type": "Noun", "explanation": "Horses gathering at a post station." },
        { "word": "銀行", "reading": "ぎんこう", "meaning": "Bank", "type": "Noun", "explanation": "Silver (銀) + Go (行). The place where silver goes." },
        { "word": "海", "reading": "うみ", "meaning": "Sea / Ocean", "type": "Noun", "explanation": "Water radical next to a vast expanse." },
        { "word": "山", "reading": "やま", "meaning": "Mountain", "type": "Noun", "explanation": "A pictogram of three mountain peaks." },
        { "word": "川", "reading": "かわ", "meaning": "River", "type": "Noun", "explanation": "Three lines representing flowing water." },
        { "word": "上", "reading": "うえ", "meaning": "Up / Above", "type": "Noun", "explanation": "A line drawn above a horizontal base." },
        { "word": "下", "reading": "した", "meaning": "Down / Below", "type": "Noun", "explanation": "A line drawn below a horizontal base." },
        { "word": "前", "reading": "まえ", "meaning": "Front / Before", "type": "Noun", "explanation": "A butcher cutting meat before going forward." },
        { "word": "後ろ", "reading": "うしろ", "meaning": "Behind / Back", "type": "Noun", "explanation": "Walking slowly behind someone." },
        { "word": "右", "reading": "みぎ", "meaning": "Right", "type": "Noun", "explanation": "A hand holding a mouth (the dominant right hand)." },
        { "word": "左", "reading": "ひだり", "meaning": "Left", "type": "Noun", "explanation": "A hand holding a tool/work on the left." },
        { "word": "中", "reading": "なか", "meaning": "Inside / Middle", "type": "Noun", "explanation": "An arrow striking the exact center of a target." },
        { "word": "外", "reading": "そと", "meaning": "Outside", "type": "Noun", "explanation": "Divining under the evening sky, outside." },
        { "word": "隣", "reading": "となり", "meaning": "Next to", "type": "Noun", "explanation": "Villages lined up next to each other." },
        { "word": "近く", "reading": "ちかく", "meaning": "Nearby", "type": "Noun", "explanation": "Walking closely to an axe." },
        { "word": "木", "reading": "き", "meaning": "Tree", "type": "Noun", "explanation": "A pictogram of a tree with branches and roots." },
        { "word": "車", "reading": "くるま", "meaning": "Car", "type": "Noun", "explanation": "A top-down view of a wheeled cart." },
        { "word": "自転車", "reading": "じてんしゃ", "meaning": "Bicycle", "type": "Noun", "explanation": "Self (自) + Revolve (転) + Car (車)." },
        { "word": "飛行機", "reading": "ひこうき", "meaning": "Airplane", "type": "Noun", "explanation": "Fly (飛) + Go (行) + Machine (機)." },
        { "word": "電車", "reading": "でんしゃ", "meaning": "Train", "type": "Noun", "explanation": "Electricity (電) + Car (車)." },
        { "word": "バス", "reading": "ばす", "meaning": "Bus", "type": "Noun", "explanation": "Loanword from English." },
        { "word": "タクシー", "reading": "たくしー", "meaning": "Taxi", "type": "Noun", "explanation": "Loanword from English." },
        { "word": "船", "reading": "ふね", "meaning": "Ship / Boat", "type": "Noun", "explanation": "A vessel floating on the water." },
        { "word": "靴", "reading": "くつ", "meaning": "Shoes", "type": "Noun", "explanation": "Leather changing into footwear." },
        { "word": "服", "reading": "ふく", "meaning": "Clothes", "type": "Noun", "explanation": "Flesh/Body conforming to garments." },
        { "word": "傘", "reading": "かさ", "meaning": "Umbrella", "type": "Noun", "explanation": "A pictogram of people hiding under an umbrella." },
        { "word": "かばん", "reading": "かばん", "meaning": "Bag", "type": "Noun", "explanation": "Usually written in hiragana." },
        { "word": "時計", "reading": "とけい", "meaning": "Clock / Watch", "type": "Noun", "explanation": "Time (時) + Measure (計)." },
        { "word": "財布", "reading": "さいふ", "meaning": "Wallet", "type": "Noun", "explanation": "Wealth/Property kept in a cloth pouch." },
        { "word": "帽子", "reading": "ぼうし", "meaning": "Hat", "type": "Noun", "explanation": "A cloth covering the child/head." },
        { "word": "眼鏡", "reading": "めがね", "meaning": "Glasses", "type": "Noun", "explanation": "Eye (眼) + Mirror/Glass (鏡)." },
        { "word": "シャツ", "reading": "しゃつ", "meaning": "Shirt", "type": "Noun", "explanation": "Loanword from English." },
        { "word": "ズボン", "reading": "ずぼん", "meaning": "Pants", "type": "Noun", "explanation": "Loanword from French 'jupon'." },
        { "word": "スカート", "reading": "すかーと", "meaning": "Skirt", "type": "Noun", "explanation": "Loanword from English." },
        { "word": "コート", "reading": "こーと", "meaning": "Coat", "type": "Noun", "explanation": "Loanword from English." },
        { "word": "両親", "reading": "りょうしん", "meaning": "Parents", "type": "Noun", "explanation": "Both (両) + Parent (親)." },
        { "word": "祖父", "reading": "そふ", "meaning": "Grandfather", "type": "Noun", "explanation": "Ancestor (祖) + Father (父)." },
        { "word": "祖母", "reading": "そぼ", "meaning": "Grandmother", "type": "Noun", "explanation": "Ancestor (祖) + Mother (母)." },
        { "word": "夫", "reading": "おっと", "meaning": "Husband", "type": "Noun", "explanation": "A large man holding a pin in his hair (traditional husband)." },
        { "word": "妻", "reading": "つま", "meaning": "Wife", "type": "Noun", "explanation": "A woman holding a broom." },
        { "word": "子供", "reading": "こども", "meaning": "Child", "type": "Noun", "explanation": "Child (子) + Companion (供)." },
        { "word": "大人", "reading": "おとな", "meaning": "Adult", "type": "Noun", "explanation": "Big (大) + Person (人)." },
        { "word": "男の子", "reading": "おとこのこ", "meaning": "Boy", "type": "Noun", "explanation": "Man (男) + Child (子)." },
        { "word": "女の子", "reading": "おんなのこ", "meaning": "Girl", "type": "Noun", "explanation": "Woman (女) + Child (子)." },
        { "word": "皆", "reading": "みんな", "meaning": "Everyone", "type": "Noun", "explanation": "All people gathered together." },
        { "word": "机", "reading": "つくえ", "meaning": "Desk", "type": "Noun", "explanation": "A wooden piece of furniture supporting a task." },
        { "word": "椅子", "reading": "いす", "meaning": "Chair", "type": "Noun", "explanation": "Wood shaped for a child to sit on." },
        { "word": "鉛筆", "reading": "えんぴつ", "meaning": "Pencil", "type": "Noun", "explanation": "Lead (鉛) + Brush (筆)." },
        { "word": "ペン", "reading": "ぺん", "meaning": "Pen", "type": "Noun", "explanation": "Loanword from English." },
        { "word": "ノート", "reading": "のーと", "meaning": "Notebook", "type": "Noun", "explanation": "Loanword from English." },
        { "word": "辞書", "reading": "じしょ", "meaning": "Dictionary", "type": "Noun", "explanation": "Words (辞) + Book (書)." },
        { "word": "雑誌", "reading": "ざっし", "meaning": "Magazine", "type": "Noun", "explanation": "Miscellaneous (雑) + Document (誌)." },
        { "word": "新聞", "reading": "しんぶん", "meaning": "Newspaper", "type": "Noun", "explanation": "New (新) + Hear (聞). Hearing new things." },
        { "word": "手紙", "reading": "てがみ", "meaning": "Letter", "type": "Noun", "explanation": "Hand (手) + Paper (紙)." },
        { "word": "切手", "reading": "きって", "meaning": "Stamp", "type": "Noun", "explanation": "Cut (切) + Hand (手). Paper cut by hand." },
        { "word": "窓", "reading": "まど", "meaning": "Window", "type": "Noun", "explanation": "A hole in the roof/wall where air and light enter." },
        { "word": "ドア", "reading": "どあ", "meaning": "Door", "type": "Noun", "explanation": "Loanword from English 'Door'." },
        { "word": "ベッド", "reading": "べっど", "meaning": "Bed", "type": "Noun", "explanation": "Loanword from English 'Bed'." },
        { "word": "テレビ", "reading": "てれび", "meaning": "Television", "type": "Noun", "explanation": "Loanword from English 'TV'." },
        { "word": "パソコン", "reading": "ぱそこん", "meaning": "Personal Computer", "type": "Noun", "explanation": "Short for 'Personal Computer' in Japanese." },
        { "word": "電話", "reading": "でんわ", "meaning": "Telephone", "type": "Noun", "explanation": "Electricity (電) + Talk (話)." },
        { "word": "携帯", "reading": "けいたい", "meaning": "Cell phone", "type": "Noun", "explanation": "Literally means 'portable' or 'carried'." },
        { "word": "歌", "reading": "うた", "meaning": "Song", "type": "Noun", "explanation": "A person yawning/singing out loud." },
        { "word": "写真", "reading": "しゃしん", "meaning": "Photograph", "type": "Noun", "explanation": "Copy (写) + Truth (真). A copy of reality." },
        { "word": "絵", "reading": "え", "meaning": "Picture / Painting", "type": "Noun", "explanation": "Threads coming together to form an image." },
        { "word": "お茶", "reading": "おちゃ", "meaning": "Tea / Green Tea", "type": "Noun", "explanation": "Grass/Plant radical on top of a wooden structure." },
        { "word": "コーヒー", "reading": "こーひー", "meaning": "Coffee", "type": "Noun", "explanation": "Loanword from English 'Coffee'." },
        { "word": "牛乳", "reading": "ぎゅうにゅう", "meaning": "Milk", "type": "Noun", "explanation": "Cow (牛) + Milk (乳)." },
        { "word": "お酒", "reading": "おさけ", "meaning": "Alcohol / Sake", "type": "Noun", "explanation": "Water radical next to a fermentation jug." },
        { "word": "朝ご飯", "reading": "あさごはん", "meaning": "Breakfast", "type": "Noun", "explanation": "Morning (朝) + Meal (ご飯)." },
        { "word": "昼ご飯", "reading": "ひるごはん", "meaning": "Lunch", "type": "Noun", "explanation": "Noon (昼) + Meal (ご飯)." },
        { "word": "晩ご飯", "reading": "ばんごはん", "meaning": "Dinner", "type": "Noun", "explanation": "Evening (晩) + Meal (ご飯)." },
        { "word": "料理", "reading": "りょうり", "meaning": "Cooking / Cuisine", "type": "Noun", "explanation": "Measure/Material (料) + Logic/Reason (理)." },
        { "word": "砂糖", "reading": "さとう", "meaning": "Sugar", "type": "Noun", "explanation": "Sand (砂) + Tang/Sugar (糖)." },
        { "word": "塩", "reading": "しお", "meaning": "Salt", "type": "Noun", "explanation": "Earth and blood/minerals drawn from the ground." },
        { "word": "醤油", "reading": "しょうゆ", "meaning": "Soy Sauce", "type": "Noun", "explanation": "A complex liquid condiment." },
        { "word": "皿", "reading": "さら", "meaning": "Plate / Dish", "type": "Noun", "explanation": "A pictogram of a shallow dish holding food." },
        { "word": "箸", "reading": "はし", "meaning": "Chopsticks", "type": "Noun", "explanation": "Bamboo radical on top, indicating what they are made of." },
        { "word": "医者", "reading": "いしゃ", "meaning": "Doctor", "type": "Noun", "explanation": "Medicine (医) + Person (者)." },
        { "word": "警官", "reading": "けいかん", "meaning": "Police Officer", "type": "Noun", "explanation": "Warn/Guard (警) + Official (官)." },
        { "word": "留学生", "reading": "りゅうがくせい", "meaning": "International Student", "type": "Noun", "explanation": "Stay (留) + Student (学生)." },
        { "word": "教室", "reading": "きょうしつ", "meaning": "Classroom", "type": "Noun", "explanation": "Teach (教) + Room (室)." },
        { "word": "図書館", "reading": "としょかん", "meaning": "Library", "type": "Noun", "explanation": "Map (図) + Book (書) + Building (館)." },
        { "word": "食堂", "reading": "しょくどう", "meaning": "Dining Hall", "type": "Noun", "explanation": "Eat (食) + Hall (堂)." },
        { "word": "建物", "reading": "たてもの", "meaning": "Building", "type": "Noun", "explanation": "Build (建) + Thing (物)." },
        { "word": "郵便局", "reading": "ゆうびんきょく", "meaning": "Post Office", "type": "Noun", "explanation": "Mail (郵便) + Bureau (局)." },
        { "word": "スーパー", "reading": "すーぱー", "meaning": "Supermarket", "type": "Noun", "explanation": "Loanword from English." },
        { "word": "デパート", "reading": "でぱーと", "meaning": "Department Store", "type": "Noun", "explanation": "Loanword from English." },
        { "word": "コンビニ", "reading": "こんびに", "meaning": "Convenience Store", "type": "Noun", "explanation": "Loanword abbreviation." },
        { "word": "交番", "reading": "こうばん", "meaning": "Police Box", "type": "Noun", "explanation": "Intersect/Mix (交) + Watch/Number (番)." },
        { "word": "階段", "reading": "かいだん", "meaning": "Stairs", "type": "Noun", "explanation": "Story/Floor (階) + Step (段)." },
        { "word": "エレベーター", "reading": "えれべーたー", "meaning": "Elevator", "type": "Noun", "explanation": "Loanword from English." },
        { "word": "庭", "reading": "にわ", "meaning": "Garden / Yard", "type": "Noun", "explanation": "A court enclosed by walls." },
        { "word": "プール", "reading": "ぷーる", "meaning": "Pool", "type": "Noun", "explanation": "Loanword from English." },
        { "word": "春", "reading": "はる", "meaning": "Spring", "type": "Noun", "explanation": "The sun shining brightly through the growing plants." },
        { "word": "夏", "reading": "なつ", "meaning": "Summer", "type": "Noun", "explanation": "A person dragging their tired feet under the hot sun." },
        { "word": "秋", "reading": "あき", "meaning": "Autumn", "type": "Noun", "explanation": "Grain/Wheat (禾) + Fire (火). Burning the fields after harvest." },
        { "word": "冬", "reading": "ふゆ", "meaning": "Winter", "type": "Noun", "explanation": "Ice/Cold lines underneath walking feet." },
        { "word": "晴れ", "reading": "はれ", "meaning": "Sunny / Clear weather", "type": "Noun", "explanation": "The sun (日) clearing up the blue (青) sky." },
        { "word": "曇り", "reading": "くもり", "meaning": "Cloudy", "type": "Noun", "explanation": "Sun (日) above a cloud (雲)." },
        { "word": "風", "reading": "かぜ", "meaning": "Wind", "type": "Noun", "explanation": "A bug flying through a drafty enclosed space." },
        { "word": "北", "reading": "きた", "meaning": "North", "type": "Noun", "explanation": "Two people turning their backs to the cold north wind." },
        { "word": "南", "reading": "みなみ", "meaning": "South", "type": "Noun", "explanation": "A warm enclosure keeping the southern heat." },
        { "word": "東", "reading": "ひがし", "meaning": "East", "type": "Noun", "explanation": "The sun rising behind a tree." },
        { "word": "西", "reading": "にし", "meaning": "West", "type": "Noun", "explanation": "A bird resting in its nest at sunset." },
        { "word": "横", "reading": "よこ", "meaning": "Side / Horizontal", "type": "Noun", "explanation": "Yellow light shining sideways through the trees." },
        { "word": "間", "reading": "あいだ", "meaning": "Between", "type": "Noun", "explanation": "The sun shining through the gates." },
        { "word": "色", "reading": "いろ", "meaning": "Color", "type": "Noun", "explanation": "A person kneeling, showing expression." },
        { "word": "緑", "reading": "みどり", "meaning": "Green", "type": "Noun", "explanation": "Threads carving into wood, making lush green." },
        { "word": "丸い", "reading": "まるい", "meaning": "Round", "type": "Adjective", "explanation": "A person holding their arms in a circle." },
        { "word": "甘い", "reading": "あまい", "meaning": "Sweet", "type": "Adjective", "explanation": "Holding something sweet in your mouth." },
        { "word": "辛い", "reading": "からい", "meaning": "Spicy", "type": "Adjective", "explanation": "Standing on a needle, creating a sharp pain." },
        { "word": "苦い", "reading": "にがい", "meaning": "Bitter", "type": "Adjective", "explanation": "Old grass that has turned bitter over time." },
        { "word": "酸っぱい", "reading": "すっぱい", "meaning": "Sour", "type": "Adjective", "explanation": "Fermenting wine in a jar." },
        { "word": "重い", "reading": "おもい", "meaning": "Heavy", "type": "Adjective", "explanation": "A heavy cart packed with miles of items." },
        { "word": "軽い", "reading": "かるい", "meaning": "Light (weight)", "type": "Adjective", "explanation": "A cart traveling easily over the earth." },
        { "word": "太い", "reading": "ふとい", "meaning": "Thick / Fat", "type": "Adjective", "explanation": "A big person (大) with an extra roll of fat (・)." },
        { "word": "細い", "reading": "ほそい", "meaning": "Thin / Slender", "type": "Adjective", "explanation": "Thread next to a field, making it look tiny." },
        { "word": "広い", "reading": "ひろい", "meaning": "Wide / Spacious", "type": "Adjective", "explanation": "A large building over an open area." },
        { "word": "狭い", "reading": "せまい", "meaning": "Narrow", "type": "Adjective", "explanation": "A dog squeezed between two walls." },
        { "word": "暗い", "reading": "くらい", "meaning": "Dark", "type": "Adjective", "explanation": "The sun going down behind a wall of sound." },
        { "word": "明るい", "reading": "あかるい", "meaning": "Bright", "type": "Adjective", "explanation": "Sun (日) + Moon (月). Two bright celestial bodies." },
        { "word": "痛い", "reading": "いたい", "meaning": "Painful", "type": "Adjective", "explanation": "Sickness over an open path." },
        { "word": "汚い", "reading": "きたない", "meaning": "Dirty", "type": "Adjective", "explanation": "Water mixed with uneven soil." },
        { "word": "危ない", "reading": "あぶない", "meaning": "Dangerous", "type": "Adjective", "explanation": "A person hanging precariously off a cliff." },
        { "word": "歌う", "reading": "うたう", "meaning": "To sing", "type": "Verb", "explanation": "Opening the mouth to let out a song." },
        { "word": "弾く", "reading": "ひく", "meaning": "To play (instrument)", "type": "Verb", "explanation": "A bow shooting a string." },
        { "word": "吹く", "reading": "ふく", "meaning": "To blow", "type": "Verb", "explanation": "A mouth blowing air out of a lack." },
        { "word": "脱ぐ", "reading": "ぬぐ", "meaning": "To take off (clothes)", "type": "Verb", "explanation": "Removing flesh from garments." },
        { "word": "着る", "reading": "きる", "meaning": "To wear (upper body)", "type": "Verb", "explanation": "A sheep's wool covering an eye/body." },
        { "word": "履く", "reading": "はく", "meaning": "To wear (lower body)", "type": "Verb", "explanation": "A body returning to its pants/shoes." },
        { "word": "被る", "reading": "かぶる", "meaning": "To wear (on head)", "type": "Verb", "explanation": "Covering the skin." },
        { "word": "掛ける", "reading": "かける", "meaning": "To put on (glasses) / To hang", "type": "Verb", "explanation": "Using a hand to hang something on a peg." },
        { "word": "締める", "reading": "しめる", "meaning": "To tie / To fasten", "type": "Verb", "explanation": "Threads twisting to tie an emperor." },
        { "word": "開ける", "reading": "あける", "meaning": "To open", "type": "Verb", "explanation": "Two hands lifting the gate." },
        { "word": "閉める", "reading": "しめる", "meaning": "To close", "type": "Verb", "explanation": "A gate blocked by a tool." },
        { "word": "つける", "reading": "つける", "meaning": "To turn on", "type": "Verb", "explanation": "Typically written in hiragana." },
        { "word": "消す", "reading": "けす", "meaning": "To turn off / To erase", "type": "Verb", "explanation": "Water washing away the sparks." },
        { "word": "押す", "reading": "おす", "meaning": "To push", "type": "Verb", "explanation": "A hand applying pressure to a shield." },
        { "word": "引く", "reading": "ひく", "meaning": "To pull", "type": "Verb", "explanation": "A bow being drawn back." },
        { "word": "曲がる", "reading": "まがる", "meaning": "To turn", "type": "Verb", "explanation": "A box that has been bent out of shape." },
        { "word": "渡る", "reading": "わたる", "meaning": "To cross", "type": "Verb", "explanation": "Water flowing across a wide expanse." },
        { "word": "止まる", "reading": "とまる", "meaning": "To stop", "type": "Verb", "explanation": "A footprint halted on the ground." },
        { "word": "始まる", "reading": "はじまる", "meaning": "To begin", "type": "Verb", "explanation": "A woman starting her journey to the podium." },
        { "word": "終わる", "reading": "おわる", "meaning": "To finish", "type": "Verb", "explanation": "Threads tied at the end of the winter." },
        { "word": "死ぬ", "reading": "しぬ", "meaning": "To die", "type": "Verb", "explanation": "Bones remaining in the evening." },
        { "word": "生まれる", "reading": "うまれる", "meaning": "To be born", "type": "Verb", "explanation": "A plant sprouting from the earth." },
        { "word": "呼ぶ", "reading": "よぶ", "meaning": "To call", "type": "Verb", "explanation": "A mouth shouting out a breath." },
        { "word": "頼む", "reading": "たのむ", "meaning": "To request", "type": "Verb", "explanation": "A bundle wrapping a head, begging for help." },
        { "word": "困る", "reading": "こまる", "meaning": "To be troubled", "type": "Verb", "explanation": "A tree stuck inside a box." },
        { "word": "知る", "reading": "しる", "meaning": "To know", "type": "Verb", "explanation": "An arrow flying from the mouth, speaking truth." },
        { "word": "分かる", "reading": "わかる", "meaning": "To understand", "type": "Verb", "explanation": "A knife cutting something into clear parts." },
        { "word": "貸す", "reading": "かす", "meaning": "To lend", "type": "Verb", "explanation": "Replacing money with an IOU." },
        { "word": "借りる", "reading": "かりる", "meaning": "To borrow", "type": "Verb", "explanation": "A person acting on an old debt." },
        { "word": "返す", "reading": "かえす", "meaning": "To return (an item)", "type": "Verb", "explanation": "Sending an anti-matter back." }
    ],

    // 2. Kanji Context
    kanji_context: [
        { "question": "毎日、{水} を飲みます。", "correctAnswer": "みず", "distractors": ["すい", "き", "み"], "explanation": "When standing alone, the Kanji for water is read as 'みず'." },
        { "question": "このかばんは {大きい} です。", "correctAnswer": "おおきい", "distractors": ["ちいさい", "たかい", "だいきい"], "explanation": "The Kanji 大 with the okurigana しい is read as 'おおきい' (big)." },
        { "question": "{今日} は月曜日です。", "correctAnswer": "きょう", "distractors": ["こんにち", "あした", "きのう"], "explanation": "今 (Now) + 日 (Day) together are irregularly read as 'きょう' (Today)." },
        { "question": "りんごを {一つ} 買いました。", "correctAnswer": "ひとつ", "distractors": ["いちつ", "いっこ", "ひと"], "explanation": "一 (One) with the counter つ is read as 'ひとつ'." },
        { "question": "{二}時にお茶を飲みます。", "correctAnswer": "に", "distractors": ["ふた", "ふたつ", "じ"], "explanation": "The number 2 before time (時) uses the onyomi 'に'." },
        { "question": "みかんが {三つ} あります。", "correctAnswer": "みっつ", "distractors": ["さんつ", "さん", "みつ"], "explanation": "三 (Three) with the counter つ is read as 'みっつ'." },
        { "question": "今は {四月} です。", "correctAnswer": "しがつ", "distractors": ["よんがつ", "よんげつ", "しげつ"], "explanation": "April is read using the onyomi 'し' + 'がつ'." },
        { "question": "テストは {五日} にあります。", "correctAnswer": "いつか", "distractors": ["ごにち", "ごか", "いつにち"], "explanation": "The 5th day of the month is an irregular reading: 'いつか'." },
        { "question": "{六つ} のりんご。", "correctAnswer": "むっつ", "distractors": ["ろくつ", "むつ", "ろっつ"], "explanation": "六 (Six) with the counter つ is read as 'むっつ'." },
        { "question": "{七時} に起きます。", "correctAnswer": "しちじ", "distractors": ["ななじ", "しちき", "ななき"], "explanation": "7 o'clock is read as 'しちじ', not 'ななじ'." },
        { "question": "かさを {八つ} 買いました。", "correctAnswer": "やっつ", "distractors": ["はちつ", "やつ", "はっつ"], "explanation": "八 (Eight) with the counter つ is read as 'やっつ'." },
        { "question": "{九月} に日本へ行きます。", "correctAnswer": "くがつ", "distractors": ["きゅうがつ", "くげつ", "きゅうげつ"], "explanation": "September uses the onyomi 'く', not 'きゅう'." },
        { "question": "ペンが {十} あります。", "correctAnswer": "とお", "distractors": ["じゅう", "じゅっ", "と"], "explanation": "When counting ten general items without a counter, it is read as 'とお'." },
        { "question": "この本は {百}円 です。", "correctAnswer": "ひゃく", "distractors": ["ひゃこ", "びゃく", "ひやく"], "explanation": "百 (Hundred) is read as 'ひゃく'." },
        { "question": "{千}円 を貸してください。", "correctAnswer": "せん", "distractors": ["ぜん", "ち", "せんっ"], "explanation": "千 (Thousand) is read as 'せん'." },
        { "question": "車が {一万}円 ですか？！", "correctAnswer": "いちまん", "distractors": ["いちばん", "いちまい", "ひとつまん"], "explanation": "一万 (Ten thousand) is read as 'いちまん'." },
        { "question": "あの {人} はだれですか。", "correctAnswer": "ひと", "distractors": ["じん", "にん", "びと"], "explanation": "When standing alone, 人 (Person) is read as 'ひと'." },
        { "question": "私はアメリカ {人} です。", "correctAnswer": "じん", "distractors": ["ひと", "にん", "みん"], "explanation": "When attached to a country to mean nationality, 人 is read as 'じん'." },
        { "question": "あの {男} の人は先生です。", "correctAnswer": "おとこ", "distractors": ["だん", "なん", "おんな"], "explanation": "男 (Man) alone or in 男の人 is read as 'おとこ'." },
        { "question": "あの {女} の人はきれいです。", "correctAnswer": "おんな", "distractors": ["じょ", "め", "おとこ"], "explanation": "女 (Woman) alone or in 女の人 is read as 'おんな'." },
        { "question": "{子}ども が公園で遊んでいます。", "correctAnswer": "こ", "distractors": ["し", "す", "ども"], "explanation": "子 (Child) in 子ども is read as 'こ'." },
        { "question": "私の {父} は会社員です。", "correctAnswer": "ちち", "distractors": ["とう", "ふ", "はは"], "explanation": "When referring to your own father, you use 'ちち'." },
        { "question": "私の {母} は優しいです。", "correctAnswer": "はは", "distractors": ["かあ", "ぼ", "ちち"], "explanation": "When referring to your own mother, you use 'はは'." },
        { "question": "{何} を食べますか。", "correctAnswer": "なに", "distractors": ["なん", "か", "だれ"], "explanation": "When standing alone before an object particle (を), it is read as 'なに'." },
        { "question": "これは {何} ですか。", "correctAnswer": "なん", "distractors": ["なに", "か", "だれ"], "explanation": "Before the copula 'です', 何 is read as 'なん'." },
        { "question": "{月} がきれいです。", "correctAnswer": "つき", "distractors": ["げつ", "がつ", "ひ"], "explanation": "When meaning 'moon' (standalone), it is read as 'つき'." },
        { "question": "明日は {火曜日} です。", "correctAnswer": "かようび", "distractors": ["ひようび", "水ようび", "もくようび"], "explanation": "火 (Fire) in Tuesday is read with its onyomi 'か'." },
        { "question": "{水曜日} は休みです。", "correctAnswer": "すいようび", "distractors": ["みずようび", "かようび", "もくようび"], "explanation": "水 (Water) in Wednesday is read with its onyomi 'すい'." },
        { "question": "{木} の下に猫がいます。", "correctAnswer": "き", "distractors": ["もく", "ぼく", "こ"], "explanation": "When meaning 'tree', it is read with its kunyomi 'き'." },
        { "question": "この時計は {金} です。", "correctAnswer": "きん", "distractors": ["かね", "ごーるど", "こん"], "explanation": "When referring to the metal 'gold', it is read as 'きん'." },
        { "question": "{お金} がありません。", "correctAnswer": "おかね", "distractors": ["おきん", "おごん", "お金"], "explanation": "Money is 'かね', with the polite 'お' prefix making it 'おかね'." },
        { "question": "庭に {土} があります。", "correctAnswer": "つち", "distractors": ["ど", "と", "どろ"], "explanation": "土 (Soil/Earth) standalone is read as 'つち'." },
        { "question": "日曜日は {休み} です。", "correctAnswer": "やすみ", "distractors": ["きゅうみ", "やす", "なつみ"], "explanation": "休 (Rest) with the okurigana み is 'やすみ'." },
        { "question": "富士 {山} は高いです。", "correctAnswer": "さん", "distractors": ["やま", "ざん", "せん"], "explanation": "When attached to the name of a mountain like Fuji, it is read as 'さん'." },
        { "question": "この {川} で泳ぎます。", "correctAnswer": "かわ", "distractors": ["せん", "さん", "やま"], "explanation": "川 (River) standalone is 'かわ'." },
        { "question": "いい {天気} ですね。", "correctAnswer": "てんき", "distractors": ["てんげ", "そらき", "あめき"], "explanation": "天 (Heaven) + 気 (Spirit) = 'てんき' (Weather)." },
        { "question": "午後から {雨} が降ります。", "correctAnswer": "あめ", "distractors": ["う", "ゆき", "くも"], "explanation": "雨 (Rain) standalone is read as 'あめ'." },
        { "question": "新しい {車} を買いました。", "correctAnswer": "くるま", "distractors": ["しゃ", "じどうしゃ", "じてんしゃ"], "explanation": "車 (Car/Vehicle) standalone is read as 'くるま'." },
        { "question": "次の {駅} で降ります。", "correctAnswer": "えき", "distractors": ["えきぃ", "えけ", "え"], "explanation": "駅 (Station) is read as 'えき'." },
        { "question": "{学校} へ行きます。", "correctAnswer": "がっこう", "distractors": ["がくこう", "がっこ", "まなこう"], "explanation": "学 (Study) + 校 (School) blends into 'がっこう'." },
        { "question": "{学生} は教室にいます。", "correctAnswer": "がくせい", "distractors": ["がっせい", "がくしょう", "がっしょう"], "explanation": "学 (Study) + 生 (Life) = 'がくせい' (Student)." },
        { "question": "{先生}、おはようございます。", "correctAnswer": "せんせい", "distractors": ["せんしょう", "さんせい", "ぜんせい"], "explanation": "先 (Before) + 生 (Life) = 'せんせい' (Teacher)." },
        { "question": "ここは私の {会社} です。", "correctAnswer": "かいしゃ", "distractors": ["かいしや", "しゃかい", "かいだん"], "explanation": "会 (Meet) + 社 (Company) = 'かいしゃ'." },
        { "question": "この服は {高い} です。", "correctAnswer": "たかい", "distractors": ["やすい", "ひくい", "だかい"], "explanation": "高 (High/Expensive) with okurigana い is 'たかい'." },
        { "question": "このペンは {安い} です。", "correctAnswer": "やすい", "distractors": ["たかい", "あすい", "あんい"], "explanation": "安 (Cheap) with okurigana い is 'やすい'." },
        { "question": "私のスマホは {新しい} です。", "correctAnswer": "あたらしい", "distractors": ["ふるい", "しんしい", "あらしい"], "explanation": "新 (New) with okurigana しい is 'あたらしい'." },
        { "question": "その本は {古い} です。", "correctAnswer": "ふるい", "distractors": ["あたらしい", "こい", "ふる"], "explanation": "古 (Old) with okurigana い is 'ふるい'." },
        { "question": "髪が {長い} です。", "correctAnswer": "ながい", "distractors": ["みじかい", "ちょうい", "だいがい"], "explanation": "長 (Long) with okurigana い is 'ながい'." },
        { "question": "{白い} 猫がいます。", "correctAnswer": "しろい", "distractors": ["くろい", "はくい", "あおい"], "explanation": "白 (White) with okurigana い is 'しろい'." },
        { "question": "{日本} の食べ物はおいしいです。", "correctAnswer": "にほん", "distractors": ["にっぽん", "ひほん", "にちほん"], "explanation": "Japan is most commonly read as 'にほん'." },
        { "question": "日本 {語} を勉強します。", "correctAnswer": "ご", "distractors": ["ごう", "ことば", "はな"], "explanation": "語 (Language) attached to a country is read as 'ご'." },
        { "question": "毎日、本を {読みます}。", "correctAnswer": "よみます", "distractors": ["どくます", "かきます", "のみます"], "explanation": "読 (Read) in the masu-form is 'よみます'." },
        { "question": "手紙を {書きます}。", "correctAnswer": "かきます", "distractors": ["しょきます", "よみます", "ききます"], "explanation": "書 (Write) in the masu-form is 'かきます'." },
        { "question": "先生の言うことを {聞いて} ください。", "correctAnswer": "きいて", "distractors": ["ぶんて", "きくて", "よんで"], "explanation": "聞 (Listen/Ask) in the te-form is 'きいて'." },
        { "question": "友達と {話します}。", "correctAnswer": "はなします", "distractors": ["わします", "かきます", "いいます"], "explanation": "話 (Speak) in the masu-form is 'はなします'." },
        { "question": "テレビを {見ます}。", "correctAnswer": "みます", "distractors": ["けんます", "よみます", "きます"], "explanation": "見 (See/Watch) in the masu-form is 'みます'." },
        { "question": "朝ごはんを {食べます}。", "correctAnswer": "たべます", "distractors": ["しょくます", "のみます", "だべます"], "explanation": "食 (Eat) in the masu-form is 'たべます'." },
        { "question": "コーヒーを {飲みます}。", "correctAnswer": "のみます", "distractors": ["いんます", "たべます", "よみます"], "explanation": "飲 (Drink) in the masu-form is 'のみます'." },
        { "question": "明日、東京へ {行きます}。", "correctAnswer": "いきます", "distractors": ["こうます", "きます", "かえります"], "explanation": "行 (Go) in the masu-form is 'いきます'." },
        { "question": "日本へ {来ました}。", "correctAnswer": "きました", "distractors": ["ききました", "いきました", "こました"], "explanation": "来 (Come) in the past masu-form is 'きました'." },
        { "question": "つくえの {上} に本があります。", "correctAnswer": "うえ", "distractors": ["した", "じょう", "か"], "explanation": "上 (Above/Top) standalone as a location is 'うえ'." },
        { "question": "いすの {下} に猫がいます。", "correctAnswer": "した", "distractors": ["うえ", "げ", "しも"], "explanation": "下 (Below/Under) standalone as a location is 'した'." },
        { "question": "カメラはテレビの {前} にあります。", "correctAnswer": "まえ", "distractors": ["うしろ", "ぜん", "さき"], "explanation": "前 (Front/Before) standalone as a location is 'まえ'." },
        { "question": "スーパーの {後ろ} に公園があります。", "correctAnswer": "うしろ", "distractors": ["まえ", "こう", "あと"], "explanation": "後 (Behind/Back) with okurigana ろ is 'うしろ'." },
        { "question": "箱の {中} にりんごがあります。", "correctAnswer": "なか", "distractors": ["ちゅう", "そと", "うち"], "explanation": "中 (Inside) standalone is 'なか'." },
        { "question": "部屋の {外} は寒いです。", "correctAnswer": "そと", "distractors": ["がい", "なか", "ほか"], "explanation": "外 (Outside) standalone is 'そと'." },
        { "question": "信号を {右} に曲がります。", "correctAnswer": "みぎ", "distractors": ["ひだり", "う", "ゆう"], "explanation": "右 (Right) is read as 'みぎ'." },
        { "question": "交差点を {左} に曲がります。", "correctAnswer": "ひだり", "distractors": ["みぎ", "さ", "した"], "explanation": "左 (Left) is read as 'ひだり'." },
        { "question": "{北} の風が冷たいです。", "correctAnswer": "きた", "distractors": ["みなみ", "ほく", "ひがし"], "explanation": "北 (North) is read as 'きた'." },
        { "question": "{南} へ旅行します。", "correctAnswer": "みなみ", "distractors": ["きた", "なん", "にし"], "explanation": "南 (South) is read as 'みなみ'." },
        { "question": "太陽は {東} から昇ります。", "correctAnswer": "ひがし", "distractors": ["にし", "とう", "みなみ"], "explanation": "東 (East) is read as 'ひがし'." },
        { "question": "{西} の空が赤いです。", "correctAnswer": "にし", "distractors": ["ひがし", "せい", "きた"], "explanation": "西 (West) is read as 'にし'." },
        { "question": "{出かける} 時間です。", "correctAnswer": "でかける", "distractors": ["だかける", "しゅつかける", "いかける"], "explanation": "出 (Exit) in 出かける is read as 'で'." },
        { "question": "部屋に {入ります}。", "correctAnswer": "はいります", "distractors": ["いります", "にゅうります", "でます"], "explanation": "入 (Enter) in the masu-form is 'はいります'." },
        { "question": "{午後} สาม時に会いましょう。", "correctAnswer": "ごご", "distractors": ["ごぜん", "あさ", "ごこう"], "explanation": "午 (Noon) + 後 (After) = 'ごご' (PM/Afternoon)." },
        { "question": "{午前} 八時に起きます。", "correctAnswer": "ごぜん", "distractors": ["ごご", "あさ", "ごまえ"], "explanation": "午 (Noon) + 前 (Before) = 'ごぜん' (AM/Morning)." },
        { "question": "今、二時 {半} です。", "correctAnswer": "はん", "distractors": ["ぶん", "ぷん", "ばか"], "explanation": "半 (Half) used with time means 'half past' and is read 'はん'." },
        { "question": "十分 {待ちます}。", "correctAnswer": "まちます", "distractors": ["もちます", "たちます", "たいます"], "explanation": "待 (Wait) in the masu-form is 'まちます'." },
        { "question": "名前を {名前} を書いてください。", "correctAnswer": "なまえ", "distractors": ["めいまえ", "めいぜん", "なまい"], "explanation": "名 (Name) + 前 (Before) = 'なまえ' (Name)." },
        { "question": "少し {休みましょう}。", "correctAnswer": "やすみましょう", "distractors": ["きゅうみましょう", "のみましょう", "よみましょう"], "explanation": "休 (Rest) in the volitional form is 'やすみましょう'." },
        { "question": "これは {私の} 車です。", "correctAnswer": "わたしの", "distractors": ["しきの", "ぼくの", "おれの"], "explanation": "私 (I/Me) is universally taught as 'わたし' in N5." },
        { "question": "毎日 {日本語} を勉強します。", "correctAnswer": "にほんご", "distractors": ["にほんごう", "にっぽんご", "にちほんご"], "explanation": "日 (Sun) + 本 (Origin) + 語 (Language) = 'にほんご'." },
        { "question": "私の {国} はアメリカです。", "correctAnswer": "くに", "distractors": ["こく", "ごく", "まち"], "explanation": "国 (Country) standalone is read with the kunyomi 'くに'." },
        { "question": "その {本} を貸してください。", "correctAnswer": "ほん", "distractors": ["もと", "ぽん", "ぼん"], "explanation": "本 (Book) standalone is read as 'ほん'." },
        { "question": "銀行は {あの} ビルです。", "correctAnswer": "あの", "distractors": ["この", "その", "どの"], "explanation": "No kanji used here, just a structural distractor check." },
        { "question": "田中さんは {電話} をしています。", "correctAnswer": "でんわ", "distractors": ["でんは", "でんわし", "てんわ"], "explanation": "電 (Electricity) + 話 (Speak) = 'でんわ'." },
        { "question": "{今年} は二〇二六年です。", "correctAnswer": "ことし", "distractors": ["こんねん", "こんとし", "きょうとし"], "explanation": "今 (Now) + 年 (Year) is an irregular reading: 'ことし'." },
        { "question": "{来年}、日本へ行きます。", "correctAnswer": "らいねん", "distractors": ["きねん", "くるねん", "らいとし"], "explanation": "来 (Come) + 年 (Year) is read as 'らいねん'." },
        { "question": "{毎朝} パンを食べます。", "correctAnswer": "まいあさ", "distractors": ["まいちょう", "まいあした", "まいにち"], "explanation": "毎 (Every) + 朝 (Morning) = 'まいあさ'." },
        { "question": "このかばんを {買います}。", "correctAnswer": "かいます", "distractors": ["ばいます", "よみます", "あいます"], "explanation": "買 (Buy) in the masu-form is 'かいます'." },
        { "question": "友達に {会います}。", "correctAnswer": "あいます", "distractors": ["かいます", "かいいます", "あうます"], "explanation": "会 (Meet) in the masu-form is 'あいます'." },
        { "question": "{先週}、映画を見ました。", "correctAnswer": "せんしゅう", "distractors": ["さきしゅう", "せんしゅ", "ぜんしゅう"], "explanation": "先 (Previous) + 週 (Week) = 'せんしゅう'." },
        { "question": "{今週} は忙しいです。", "correctAnswer": "こんしゅう", "distractors": ["いましゅう", "こんしゅ", "ことし"], "explanation": "今 (Now) + 週 (Week) = 'こんしゅう'." },
        { "question": "{来週} の月曜日。", "correctAnswer": "らいしゅう", "distractors": ["くるしゅう", "きしゅう", "らいしゅ"], "explanation": "来 (Come/Next) + 週 (Week) = 'らいしゅう'." },
        { "question": "電車で {会社} へ行きます。", "correctAnswer": "かいしゃ", "distractors": ["しゃかい", "かいしや", "かいじゃ"], "explanation": "会 (Meet) + 社 (Company) = 'かいしゃ'." },
        { "question": "{時間} がありません。", "correctAnswer": "じかん", "distractors": ["ときかん", "じけん", "とっかん"], "explanation": "時 (Time) + 間 (Interval) = 'じかん'." },
        { "question": "学校は {八時半} からです。", "correctAnswer": "はちじはん", "distractors": ["やっつじはん", "はちじぷん", "はっじはん"], "explanation": "八 (Eight) + 時 (O'clock) + 半 (Half) = 'はちじはん'." },
        { "question": "これは {五百}円 です。", "correctAnswer": "ごひゃく", "distractors": ["ごびゃく", "ごぴゃく", "ごひゃ"], "explanation": "五 (Five) + 百 (Hundred) = 'ごひゃく'." },
        { "question": "それは {三千}円 です。", "correctAnswer": "さんぜん", "distractors": ["さんせん", "さんち", "みせん"], "explanation": "三 (Three) + 千 (Thousand) causes a rendaku shift to 'さんぜん'." },
        { "question": "{半分} 食べました。", "correctAnswer": "はんぶん", "distractors": ["はんぷん", "なかぶん", "はんふん"], "explanation": "半 (Half) + 分 (Part) = 'はんぶん'." },
        { "question": "今日は {一日} です。", "correctAnswer": "ついたち", "distractors": ["いちにち", "いっか", "ひとひ"], "explanation": "The 1st day of the month is irregularly read as 'ついたち'." },
        { "question": "テストは {二日} です。", "correctAnswer": "ふつか", "distractors": ["ににち", "にか", "ふたか"], "explanation": "The 2nd day of the month is read as 'ふつか'." },
        { "question": "今月は {三日} に帰ります。", "correctAnswer": "みっか", "distractors": ["さんにち", "さんか", "みつか"], "explanation": "The 3rd day of the month is read as 'みっか'." },
        { "question": "休みは {四日} からです。", "correctAnswer": "よっか", "distractors": ["よんにち", "よんか", "しにち"], "explanation": "The 4th day of the month is read as 'よっか'." },
        { "question": "{六日} に会いましょう。", "correctAnswer": "むいか", "distractors": ["ろくにち", "むっか", "ろっか"], "explanation": "The 6th day of the month is read as 'むいか'." },
        { "question": "{七日}間、旅行します。", "correctAnswer": "なのか", "distractors": ["ななかにち", "しちにち", "ななにち"], "explanation": "The 7th day of the month is read as 'なのか'." },
        { "question": "誕生日は {八日} です。", "correctAnswer": "ようか", "distractors": ["はちにち", "やっか", "はっか"], "explanation": "The 8th day of the month is read as 'ようか'." },
        { "question": "{九日} は忙しいです。", "correctAnswer": "ここのか", "distractors": ["くにち", "きゅうにち", "きゅうか"], "explanation": "The 9th day of the month is read as 'ここのか'." },
        { "question": "パーティーは {十日} です。", "correctAnswer": "とおか", "distractors": ["じゅうにち", "じゅっか", "とのか"], "explanation": "The 10th day of the month is read as 'とおか'." },
        { "question": "{二十日} に国へ帰ります。", "correctAnswer": "はつか", "distractors": ["にじゅうにち", "にじゅっか", "ふつか"], "explanation": "The 20th day of the month is a major exception: 'はつか'." },
        { "question": "部屋に {一人} います。", "correctAnswer": "ひとり", "distractors": ["いちにん", "いちじん", "ひとにん"], "explanation": "One person is read as 'ひとり'." },
        { "question": "友達と {二人} で行きます。", "correctAnswer": "ふたり", "distractors": ["ににん", "にじん", "ふたにん"], "explanation": "Two people is read as 'ふたり'." },
        { "question": "家族は {三人} です。", "correctAnswer": "さんにん", "distractors": ["みたり", "さんじん", "みっにん"], "explanation": "Three people follows the standard counter: 'さんにん'." },
        { "question": "学生が {四人} います。", "correctAnswer": "よにん", "distractors": ["よんにん", "しにん", "よんじん"], "explanation": "Four people drops the 'n' and is read 'よにん'." },
        { "question": "教室に {五人} います。", "correctAnswer": "ごにん", "distractors": ["いつにん", "ごじん", "ごびと"], "explanation": "Five people is read as 'ごにん'." },
        { "question": "あそこに {七人} います。", "correctAnswer": "しちにん", "distractors": ["ななにん", "ななじん", "しちじん"], "explanation": "Seven people can be 'ななにん' or 'しちにん', but 'しちにん' is standard." },
        { "question": "パーティーに {九人} 来ました。", "correctAnswer": "くにん", "distractors": ["きゅうにん", "きゅうじん", "くじん"], "explanation": "Nine people uses the 'く' reading: 'くにん'." },
        { "question": "あの人は {大人} です。", "correctAnswer": "おとな", "distractors": ["だいにん", "たいじん", "おおひと"], "explanation": "大人 (Adult) is a special jukujikun reading: 'おとな'." },
        { "question": "あの子は {女の子} です。", "correctAnswer": "おんなのこ", "distractors": ["じょし", "めのご", "おんなこ"], "explanation": "女 (Woman) + の + 子 (Child) = 'おんなのこ' (Girl)." },
        { "question": "彼は {男の子} です。", "correctAnswer": "おとこのこ", "distractors": ["だんし", "おとこし", "だんのこ"], "explanation": "男 (Man) + の + 子 (Child) = 'おとこのこ' (Boy)." },
        { "question": "{男の人} がいます。", "correctAnswer": "おとこのひと", "distractors": ["おとこのじん", "だんのじん", "おとこのにん"], "explanation": "男 (Man) + の + 人 (Person) = 'おとこのひと' (Man)." },
        { "question": "きれいな {女の人} です。", "correctAnswer": "おんなのひと", "distractors": ["おんなのじん", "じょのひと", "おんなのにん"], "explanation": "女 (Woman) + の + 人 (Person) = 'おんなのひと' (Woman)." },
        { "question": "ペンが {百} あります。", "correctAnswer": "ひゃく", "distractors": ["ひやく", "びゃく", "ぴゃく"], "explanation": "百 (100) is read 'ひゃく'." },
        { "question": "この本は {三百}円 です。", "correctAnswer": "さんびゃく", "distractors": ["さんひゃく", "さんぴゃく", "みひゃく"], "explanation": "三百 (300) causes a rendaku shift to 'びゃく'." },
        { "question": "コーヒーは {六百}円 です。", "correctAnswer": "ろっぴゃく", "distractors": ["ろくひゃく", "ろくびゃく", "ろっひゃく"], "explanation": "六百 (600) forces a small 'tsu' and 'ぴゃく'." },
        { "question": "それは {八百}円 です。", "correctAnswer": "はっぴゃく", "distractors": ["はちひゃく", "はちびゃく", "はっひゃく"], "explanation": "八百 (800) forces a small 'tsu' and 'ぴゃく'." },
        { "question": "かばんは {千}円 です。", "correctAnswer": "せん", "distractors": ["ぜん", "ち", "せんっ"], "explanation": "千 (1,000) is read 'せん'." },
        { "question": "靴は {三千}円 です。", "correctAnswer": "さんぜん", "distractors": ["さんせん", "さんち", "みせん"], "explanation": "三千 (3,000) causes a rendaku shift to 'ぜん'." },
        { "question": "スマホは {八千}円 です。", "correctAnswer": "はっせん", "distractors": ["はちせん", "はちぜん", "はっぜん"], "explanation": "八千 (8,000) forces a small 'tsu': 'はっせん'." },
        { "question": "{一万}円 を持っています。", "correctAnswer": "いちまん", "distractors": ["いちばん", "まん", "いちまい"], "explanation": "Unlike 100 and 1,000, 10,000 MUST have the '一' (いち) attached." },
        { "question": "今、{何時} ですか。", "correctAnswer": "なんじ", "distractors": ["なにじ", "いつ", "なんとき"], "explanation": "何 (What) + 時 (Time) = 'なんじ'." },
        { "question": "バスは {何分} に来ますか。", "correctAnswer": "なんぷん", "distractors": ["なんぶん", "なにふん", "なにぶん"], "explanation": "何 (What) + 分 (Minute) is read 'なんぷん'." },
        { "question": "誕生日は {何月} ですか。", "correctAnswer": "なんがつ", "distractors": ["なにげつ", "なんげつ", "なにがつ"], "explanation": "何 (What) + 月 (Month) is read 'なんがつ'." },
        { "question": "今日は {何日} ですか。", "correctAnswer": "なんにち", "distractors": ["なに日", "なんひ", "なにび"], "explanation": "何 (What) + 日 (Day) is read 'なんにち'." },
        { "question": "学生が {何人} いますか。", "correctAnswer": "なんにん", "distractors": ["なにじん", "なんじん", "なにひと"], "explanation": "何 (What) + 人 (Person counter) is read 'なんにん'." },
        { "question": "{毎月}、映画を見ます。", "correctAnswer": "まいつき", "distractors": ["まいげつ", "まいがつ", "まい日"], "explanation": "毎 (Every) + 月 (Month) is read 'まいつき'." },
        { "question": "{毎年}、ハワイへ行きます。", "correctAnswer": "まいとし", "distractors": ["まいねん", "まいん", "まいき"], "explanation": "毎 (Every) + 年 (Year) is usually read 'まいとし' (まいねん is also okay, but まいとし is more common for N5)." },
        { "question": "明日は {学校} を休みます。", "correctAnswer": "がっこう", "distractors": ["がくこう", "まなこう", "がっこ"], "explanation": "学 + 校 merges to 'がっこう'." },
        { "question": "私は {学生} です。", "correctAnswer": "がくせい", "distractors": ["がっせい", "がくしょう", "まなせい"], "explanation": "学 + 生 = 'がくせい'." },
        { "question": "私の兄は {大学生} です。", "correctAnswer": "だいがくせい", "distractors": ["おおがくせい", "たいがくせい", "だいがっせい"], "explanation": "大 (Big) + 学生 (Student) = 'だいがくせい' (University student)." },
        { "question": "あそこに {大学} があります。", "correctAnswer": "だいがく", "distractors": ["おおがく", "たいがく", "おおまな"], "explanation": "大 + 学 = 'だいがく' (University)." },
        { "question": "このケーキは {大きい} です。", "correctAnswer": "おおきい", "distractors": ["だいきい", "たいきい", "ちいさい"], "explanation": "大 with okurigana きい is 'おおきい'." },
        { "question": "この部屋は {小さい} です。", "correctAnswer": "ちいさい", "distractors": ["しょうさい", "こさい", "おおきい"], "explanation": "小 with okurigana さい is 'ちいさい'." },
        { "question": "机の上に {お金} があります。", "correctAnswer": "おかね", "distractors": ["おきん", "お金", "おこん"], "explanation": "お + 金 (Money) = 'おかね'." },
        { "question": "{水} を飲んでください。", "correctAnswer": "みず", "distractors": ["すい", "き", "み"], "explanation": "Water alone is 'みず'." },
        { "question": "あの {木} の下で待ちます。", "correctAnswer": "き", "distractors": ["もく", "ぼく", "こ"], "explanation": "Tree alone is 'き'." },
        { "question": "空に {月} が出ています。", "correctAnswer": "つき", "distractors": ["げつ", "がつ", "ひ"], "explanation": "Moon alone is 'つき'." },
        { "question": "{日} が暮れました。", "correctAnswer": "ひ", "distractors": ["にち", "じつ", "か"], "explanation": "Sun/Daylight alone is read as 'ひ'." },
        { "question": "{今月} は十月です。", "correctAnswer": "こんげつ", "distractors": ["いまげつ", "こんがつ", "いまつき"], "explanation": "今 (Now) + 月 (Month) = 'こんげつ'." },
        { "question": "{来月}、テストがあります。", "correctAnswer": "らいげつ", "distractors": ["くるげつ", "らいがつ", "きげつ"], "explanation": "来 (Next) + 月 (Month) = 'らいげつ'." },
        { "question": "{先月}、日本へ来ました。", "correctAnswer": "せんげつ", "distractors": ["さきげつ", "せんがつ", "ぜんげつ"], "explanation": "先 (Previous) + 月 (Month) = 'せんげつ'." },
        { "question": "今年は二〇二六 {年} です。", "correctAnswer": "ねん", "distractors": ["とし", "てん", "ね"], "explanation": "When used as a counter for years, it's read 'ねん'." },
        { "question": "{半分} に切ってください。", "correctAnswer": "はんぶん", "distractors": ["はんぷん", "なかぶん", "はんふん"], "explanation": "半 (Half) + 分 (Part) = 'はんぶん'." },
        { "question": "このテストは五十 {分} です。", "correctAnswer": "ぷん", "distractors": ["ふん", "ぶん", "はん"], "explanation": "After '10' (十), 分 becomes 'ぷん' (じゅっぷん)." },
        { "question": "一 {時間} 勉強しました。", "correctAnswer": "じかん", "distractors": ["じけん", "ときかん", "じき"], "explanation": "時 (Time) + 間 (Interval) = 'じかん' (Duration of hours)." },
        { "question": "{午前} 中は家にいます。", "correctAnswer": "ごぜん", "distractors": ["ごまえ", "うまぜん", "ごご"], "explanation": "午 (Noon) + 前 (Before) = 'ごぜん' (Morning/AM)." },
        { "question": "{午後} から雨が降ります。", "correctAnswer": "ごご", "distractors": ["ごあと", "うまご", "ごぜん"], "explanation": "午 (Noon) + 後 (After) = 'ごご' (Afternoon/PM)." },
        { "question": "店の {前} で会いましょう。", "correctAnswer": "まえ", "distractors": ["ぜん", "さき", "うしろ"], "explanation": "Front/Before standalone is 'まえ'." },
        { "question": "私の {後ろ} に人がいます。", "correctAnswer": "うしろ", "distractors": ["あと", "のち", "ご"], "explanation": "Behind standalone with okurigana ろ is 'うしろ'." },
        { "question": "テレビはあの {中} です。", "correctAnswer": "なか", "distractors": ["ちゅう", "じゅう", "そと"], "explanation": "Inside/Middle standalone is 'なか'." },
        { "question": "建物の {外} に出ます。", "correctAnswer": "そと", "distractors": ["がい", "げ", "ほか"], "explanation": "Outside standalone is 'そと'." },
        { "question": "{右} に曲がってください。", "correctAnswer": "みぎ", "distractors": ["ひだり", "う", "ゆう"], "explanation": "Right standalone is 'みぎ'." },
        { "question": "{左} の道を行きます。", "correctAnswer": "ひだり", "distractors": ["みぎ", "さ", "した"], "explanation": "Left standalone is 'ひだり'." },
        { "question": "あの山は {北} にあります。", "correctAnswer": "きた", "distractors": ["みなみ", "ほく", "にし"], "explanation": "North standalone is 'きた'." },
        { "question": "{南} の国は暖かいです。", "correctAnswer": "みなみ", "distractors": ["なん", "きた", "ひがし"], "explanation": "South standalone is 'みなみ'." },
        { "question": "日本は {東} にあります。", "correctAnswer": "ひがし", "distractors": ["とう", "にし", "きた"], "explanation": "East standalone is 'ひがし'." },
        { "question": "太陽は {西} に沈みます。", "correctAnswer": "にし", "distractors": ["せい", "ひがし", "みなみ"], "explanation": "West standalone is 'にし'." },
        { "question": "{右足} が痛いです。", "correctAnswer": "みぎあし", "distractors": ["みぎそく", "うあし", "みぎて"], "explanation": "右 (Right) + 足 (Leg/Foot) = 'みぎあし'." },
        { "question": "{左手} を上げてください。", "correctAnswer": "ひだりて", "distractors": ["ひだりしゅ", "さて", "みぎて"], "explanation": "左 (Left) + 手 (Hand) = 'ひだりて'." },
        { "question": "{先生} は教室にいます。", "correctAnswer": "せんせい", "distractors": ["さんせい", "せんじょう", "ぜんせい"], "explanation": "先 (Previous) + 生 (Life) = 'せんせい'." },
        { "question": "{名前} を書いてください。", "correctAnswer": "なまえ", "distractors": ["めいまえ", "めいぜん", "なまい"], "explanation": "名 (Name) + 前 (Before) = 'なまえ'." },
        { "question": "この町は {有名} です。", "correctAnswer": "ゆうめい", "distractors": ["ありな", "ゆうな", "うめい"], "explanation": "有 (Exist) + 名 (Name) = 'ゆうめい' (Famous)." },
        { "question": "漢字を {読んで} ください。", "correctAnswer": "よんで", "distractors": ["どくで", "かいて", "きいて"], "explanation": "読 in the te-form is 'よんで'." },
        { "question": "ノートに {書きます}。", "correctAnswer": "かきます", "distractors": ["しょきます", "よみます", "ききます"], "explanation": "書 in the masu-form is 'かきます'." },
        { "question": "あの人は英語を {話します}。", "correctAnswer": "はなします", "distractors": ["わします", "いいます", "かきます"], "explanation": "話 in the masu-form is 'はなします'." },
        { "question": "先生の {話} を聞きます。", "correctAnswer": "はなし", "distractors": ["わ", "ことば", "こえ"], "explanation": "話 standalone as a noun is 'はなし' (Talk/Story)." },
        { "question": "友達と {電話} します。", "correctAnswer": "でんわ", "distractors": ["でんは", "てんわ", "でんわし"], "explanation": "電 (Electric) + 話 (Talk) = 'でんわ'." },
        { "question": "音楽を {聞きます}。", "correctAnswer": "ききます", "distractors": ["ぶんます", "よみます", "みます"], "explanation": "聞 in the masu-form is 'ききます'." },
        { "question": "新聞を {見ます} か。", "correctAnswer": "みます", "distractors": ["けんます", "よみます", "きます"], "explanation": "見 in the masu-form is 'みます'." },
        { "question": "ご飯を {食べます}。", "correctAnswer": "たべます", "distractors": ["しょくます", "のみます", "だべます"], "explanation": "食 in the masu-form is 'たべます'." },
        { "question": "日本の {食べ物} はおいしいです。", "correctAnswer": "たべもの", "distractors": ["しょくもつ", "たべぶつ", "のみもの"], "explanation": "食 (Eat) + 物 (Thing) = 'たべもの'." },
        { "question": "水を {飲みます}。", "correctAnswer": "のみます", "distractors": ["いんます", "たべます", "よみます"], "explanation": "飲 in the masu-form is 'のみます'." },
        { "question": "冷たい {飲み物} をください。", "correctAnswer": "のみもの", "distractors": ["いんもつ", "のみぶつ", "たべもの"], "explanation": "飲 (Drink) + 物 (Thing) = 'のみもの'." },
        { "question": "この靴を {買います}。", "correctAnswer": "かいます", "distractors": ["ばいます", "よみます", "あいます"], "explanation": "買 in the masu-form is 'かいます'." },
        { "question": "デパートへ {買い物} に行きます。", "correctAnswer": "かいもの", "distractors": ["ばいぶつ", "ばいもの", "たべもの"], "explanation": "買 (Buy) + 物 (Thing) = 'かいもの' (Shopping)." },
        { "question": "明日、京都へ {行きます}。", "correctAnswer": "いきます", "distractors": ["こうます", "きます", "かえります"], "explanation": "行 in the masu-form is 'いきます'." },
        { "question": "日本へ {来ました}。", "correctAnswer": "きました", "distractors": ["らいました", "こました", "いきました"], "explanation": "来 in the past masu-form is 'きました'." },
        { "question": "家へ {帰ります}。", "correctAnswer": "かえります", "distractors": ["きります", "いきます", "きます"], "explanation": "帰 in the masu-form is 'かえります'." },
        { "question": "ちょっと {休みましょう}。", "correctAnswer": "やすみましょう", "distractors": ["きゅうみましょう", "のみましょう", "よみましょう"], "explanation": "休 in the volitional form is 'やすみましょう'." },
        { "question": "日曜日は {休み} です。", "correctAnswer": "やすみ", "distractors": ["きゅう", "おやすみ", "なつみ"], "explanation": "休 standalone as a noun is 'やすみ'." },
        { "question": "部屋に {入ります}。", "correctAnswer": "はいります", "distractors": ["いります", "にゅうります", "でます"], "explanation": "入 in the masu-form is 'はいります'." },
        { "question": "外へ {出ます}。", "correctAnswer": "でます", "distractors": ["だします", "しゅつます", "はいります"], "explanation": "出 in the masu-form is 'でます'." },
        { "question": "ここで {出かけて} ください。", "correctAnswer": "でかけて", "distractors": ["だかけて", "しゅつかけて", "いかけて"], "explanation": "出 (Exit) in 出かける is read 'で'." },
        { "question": "ペンを {使います}。", "correctAnswer": "つかいます", "distractors": ["しいます", "つくります", "かいます"], "explanation": "使 in the masu-form is 'つかいます'." },
        { "question": "料理を {作ります}。", "correctAnswer": "つくります", "distractors": ["さくります", "つかいます", "します"], "explanation": "作 in the masu-form is 'つくります'." },
        { "question": "先生に {言います}。", "correctAnswer": "いいます", "distractors": ["げんます", "はなします", "かきます"], "explanation": "言 in the masu-form is 'いいます'." },
        { "question": "その {言葉} を知っていますか。", "correctAnswer": "ことば", "distractors": ["げんば", "いんば", "はなし"], "explanation": "言 (Say) + 葉 (Leaf/Fragment) = 'ことば' (Word)." },
        { "question": "椅子から {立ちます}。", "correctAnswer": "たちます", "distractors": ["りつます", "すわります", "まちます"], "explanation": "立 in the masu-form is 'たちます'." },
        { "question": "駅で {待ちます}。", "correctAnswer": "まちます", "distractors": ["たいます", "たちます", "もちます"], "explanation": "待 in the masu-form is 'まちます'." },
        { "question": "山田さんは {会社員} です。", "correctAnswer": "かいしゃいん", "distractors": ["かいしゃにん", "しゃかいいん", "かいじゃいん"], "explanation": "会 (Meet) + 社 (Company) + 員 (Member) = 'かいしゃいん'." },
        { "question": "あの山はとても {高い} です。", "correctAnswer": "たかい", "distractors": ["やすい", "ひくい", "だかい"], "explanation": "高 (High/Tall) + い = たかい." },
        { "question": "この車は {安かった} です。", "correctAnswer": "やすかった", "distractors": ["たかかった", "あんかった", "あすかった"], "explanation": "安 (Cheap) in past tense = やすかった." },
        { "question": "{新しい} 靴を買いました。", "correctAnswer": "あたらしい", "distractors": ["ふるい", "しんしい", "あらしい"], "explanation": "新 (New) + しい = あたらしい." },
        { "question": "そのかばんは {古い} ですか。", "correctAnswer": "ふるい", "distractors": ["あたらしい", "こい", "ふる"], "explanation": "古 (Old) + い = ふるい." },
        { "question": "今日は {長い} 一日でした。", "correctAnswer": "ながい", "distractors": ["みじかい", "ちょうい", "だいがい"], "explanation": "長 (Long) + い = ながい." },
        { "question": "時間が {短い} です。", "correctAnswer": "みじかい", "distractors": ["ながい", "たんい", "ちいさい"], "explanation": "短 (Short) + い = みじかい." },
        { "question": "公園に人が {多い} です。", "correctAnswer": "おおい", "distractors": ["すくない", "たあい", "だいい"], "explanation": "多 (Many) + い = おおい." },
        { "question": "今日は学生が {少ない} です。", "correctAnswer": "すくない", "distractors": ["おおい", "しょうない", "すこない"], "explanation": "少 (Few) + ない = すくない." },
        { "question": "あそこに {白い} 犬がいます。", "correctAnswer": "しろい", "distractors": ["くろい", "はくい", "あおい"], "explanation": "白 (White) + い = しろい." },
        { "question": "私の猫は {黒い} です。", "correctAnswer": "くろい", "distractors": ["しろい", "こくい", "あかい"], "explanation": "黒 (Black) + い = くろい." },
        { "question": "このペンを {買いました}。", "correctAnswer": "かいました", "distractors": ["ばいました", "よみました", "あいました"], "explanation": "買 (Buy) in past masu-form = かいました." },
        { "question": "手紙を {書きます}。", "correctAnswer": "かきます", "distractors": ["しょきます", "よみます", "ききます"], "explanation": "書 (Write) in masu-form = かきます." },
        { "question": "毎晩、本を {読みます}。", "correctAnswer": "よみます", "distractors": ["どくます", "かきます", "のみます"], "explanation": "読 (Read) in masu-form = よみます." },
        { "question": "音楽を {聞く} のが好きです。", "correctAnswer": "きく", "distractors": ["ぶんく", "よむ", "みる"], "explanation": "聞 (Listen) in dictionary form = きく." },
        { "question": "映画を {見る} 時間がありません。", "correctAnswer": "みる", "distractors": ["けんる", "よむ", "くる"], "explanation": "見 (See/Watch) in dictionary form = みる." },
        { "question": "八時に家へ {帰る} つもりです。", "correctAnswer": "かえる", "distractors": ["きる", "いく", "くる"], "explanation": "帰 (Return) in dictionary form = かえる." },
        { "question": "明日、海へ {行く}？", "correctAnswer": "いく", "distractors": ["こうく", "くる", "かえる"], "explanation": "行 (Go) in dictionary form = いく." },
        { "question": "彼がここへ {来る} と思います。", "correctAnswer": "くる", "distractors": ["らいる", "いく", "かえる"], "explanation": "来 (Come) in dictionary form = くる." },
        { "question": "木の下で {休む}。", "correctAnswer": "やすむ", "distractors": ["きゅうむ", "のむ", "よむ"], "explanation": "休 (Rest) in dictionary form = やすむ." },
        { "question": "ここで友達を {待つ}。", "correctAnswer": "まつ", "distractors": ["たつ", "もつ", "たいつ"], "explanation": "待 (Wait) in dictionary form = まつ." },
        { "question": "時間は三時 {半} です。", "correctAnswer": "はん", "distractors": ["ぶん", "ぷん", "ばか"], "explanation": "半 (Half) for time = はん." },
        { "question": "五 {分} 休んでください。", "correctAnswer": "ふん", "distractors": ["ぷん", "ぶん", "はん"], "explanation": "五 (Five) takes the 'ふん' reading for minutes." },
        { "question": "今は四 {時} です。", "correctAnswer": "じ", "distractors": ["とき", "にち", "はん"], "explanation": "時 (Time/O'clock) = じ." },
        { "question": "一 {週間} 旅行します。", "correctAnswer": "しゅうかん", "distractors": ["しゅかん", "じかん", "ねんかん"], "explanation": "週 (Week) + 間 (Interval) = しゅうかん." },
        { "question": "日本に一 {年} いました。", "correctAnswer": "ねん", "distractors": ["とし", "てん", "にち"], "explanation": "年 (Year) as a counter = ねん." },
        { "question": "{今日} は暑いです。", "correctAnswer": "きょう", "distractors": ["こんにち", "あした", "きのう"], "explanation": "今日 (Today) is irregular = きょう." },
        { "question": "{先生} に聞きましょう。", "correctAnswer": "せんせい", "distractors": ["さんせい", "せんじょう", "ぜんせい"], "explanation": "先 (Before) + 生 (Life) = せんせい." },
        { "question": "{来年} は二〇二七年です。", "correctAnswer": "らいねん", "distractors": ["きねん", "くるねん", "らいとし"], "explanation": "来 (Next) + 年 (Year) = らいねん." },
        { "question": "{毎晩}、勉強します。", "correctAnswer": "まいばん", "distractors": ["まいよる", "まいあさ", "まいにち"], "explanation": "毎 (Every) + 晩 (Evening) = まいばん." },
        { "question": "{何か} 飲みますか。", "correctAnswer": "なにか", "distractors": ["なんか", "だれか", "どこか"], "explanation": "何 (What) + か = なにか (Something)." },
        { "question": "つくえの {上} にペンがあります。", "correctAnswer": "うえ", "distractors": ["した", "じょう", "か"], "explanation": "上 (Above) = うえ." },
        { "question": "いすの {下} です。", "correctAnswer": "した", "distractors": ["うえ", "げ", "しも"], "explanation": "下 (Below) = した." },
        { "question": "{左} の手を見てください。", "correctAnswer": "ひだり", "distractors": ["みぎ", "さ", "した"], "explanation": "左 (Left) = ひだり." },
        { "question": "{右} に曲がります。", "correctAnswer": "みぎ", "distractors": ["ひだり", "う", "ゆう"], "explanation": "右 (Right) = みぎ." },
        { "question": "かばんの {中} です。", "correctAnswer": "なか", "distractors": ["ちゅう", "そと", "うち"], "explanation": "中 (Inside) = なか." },
        { "question": "{外} は雪です。", "correctAnswer": "そと", "distractors": ["がい", "なか", "ほか"], "explanation": "外 (Outside) = そと." },
        { "question": "駅の {前} で会う。", "correctAnswer": "まえ", "distractors": ["うしろ", "ぜん", "さき"], "explanation": "前 (Front) = まえ." },
        { "question": "私の {後ろ} にいます。", "correctAnswer": "うしろ", "distractors": ["まえ", "こう", "あと"], "explanation": "後ろ (Behind) = うしろ." },
        { "question": "{東} の空が明るい。", "correctAnswer": "ひがし", "distractors": ["にし", "とう", "みなみ"], "explanation": "東 (East) = ひがし." },
        { "question": "{西} の空が暗い。", "correctAnswer": "にし", "distractors": ["ひがし", "せい", "きた"], "explanation": "西 (West) = にし." },
        { "question": "あの {山} はきれいです。", "correctAnswer": "やま", "distractors": ["さん", "かわ", "うみ"], "explanation": "山 (Mountain) standalone = やま." },
        { "question": "あの {川} は長いです。", "correctAnswer": "かわ", "distractors": ["せん", "さん", "やま"], "explanation": "川 (River) standalone = かわ." },
        { "question": "おいしい {水} を飲む。", "correctAnswer": "みず", "distractors": ["すい", "き", "み"], "explanation": "水 (Water) standalone = みず." },
        { "question": "{木} の葉が落ちる。", "correctAnswer": "き", "distractors": ["もく", "ぼく", "こ"], "explanation": "木 (Tree) standalone = き." },
        { "question": "{金}曜日 は忙しいです。", "correctAnswer": "きん", "distractors": ["かね", "ごーるど", "こん"], "explanation": "金 (Gold) in Friday = きん." },
        { "question": "靴に {土} がついた。", "correctAnswer": "つち", "distractors": ["ど", "と", "どろ"], "explanation": "土 (Dirt/Soil) = つち." },
        { "question": "{天}気 はどうですか。", "correctAnswer": "てん", "distractors": ["あま", "て", "そら"], "explanation": "天 (Heaven) in Weather = てん." },
        { "question": "元{気} ですか。", "correctAnswer": "き", "distractors": ["け", "ぎ", "きぶん"], "explanation": "気 (Spirit) in Genki = き." },
        { "question": "今日は {雨} です。", "correctAnswer": "あめ", "distractors": ["う", "ゆき", "くも"], "explanation": "雨 (Rain) standalone = あめ." },
        { "question": "{空} が青いです。", "correctAnswer": "そら", "distractors": ["くう", "から", "あき"], "explanation": "空 (Sky) standalone = そら." },
        { "question": "あの {人} は誰ですか。", "correctAnswer": "ひと", "distractors": ["じん", "にん", "びと"], "explanation": "人 (Person) standalone = ひと." },
        { "question": "{男} の子が泣いている。", "correctAnswer": "おとこ", "distractors": ["だん", "なん", "おんな"], "explanation": "男 (Man/Boy) = おとこ." },
        { "question": "{女} の人が歩いている。", "correctAnswer": "おんな", "distractors": ["じょ", "め", "おとこ"], "explanation": "女 (Woman) = おんな." },
        { "question": "{子}ども が遊ぶ。", "correctAnswer": "こ", "distractors": ["し", "す", "ども"], "explanation": "子 (Child) in Kodomo = こ." },
        { "question": "私の {父} です。", "correctAnswer": "ちち", "distractors": ["とう", "ふ", "はは"], "explanation": "父 (Own Father) = ちち." },
        { "question": "私の {母} です。", "correctAnswer": "はは", "distractors": ["かあ", "ぼ", "ちち"], "explanation": "母 (Own Mother) = はは." },
        { "question": "大学の {友}だち です。", "correctAnswer": "とも", "distractors": ["ゆう", "だち", "ともだち"], "explanation": "友 (Friend) in Tomodachi = とも." },
        { "question": "{先生} は優しいです。", "correctAnswer": "せん", "distractors": ["さき", "さん", "ぜん"], "explanation": "先 (Before) in Sensei = せん." },
        { "question": "私は学{生} です。", "correctAnswer": "せい", "distractors": ["しょう", "いきる", "なま"], "explanation": "生 (Life) in Gakusei = せい." },
        { "question": "お {名}前 は？", "correctAnswer": "な", "distractors": ["めい", "みょう", "まえ"], "explanation": "名 (Name) in Namae = な." },
        { "question": "学{校} はどこですか。", "correctAnswer": "こう", "distractors": ["きょう", "ごう", "がく"], "explanation": "校 (School building) in Gakkou = こう." },
        { "question": "{学}生 です。", "correctAnswer": "がく", "distractors": ["がっ", "まな", "が"], "explanation": "学 (Study) in Gakusei = がく." },
        { "question": "{会}社 員です。", "correctAnswer": "かい", "distractors": ["あい", "がい", "え"], "explanation": "会 (Meet) in Kaisha = かい." },
        { "question": "会{社} 員です。", "correctAnswer": "しゃ", "distractors": ["じゃ", "やしろ", "かい"], "explanation": "社 (Company) in Kaisha = しゃ." },
        { "question": "あの {店} で買いました。", "correctAnswer": "みせ", "distractors": ["てん", "たな", "や"], "explanation": "店 (Shop) standalone = みせ." },
        { "question": "{駅} まで歩きます。", "correctAnswer": "えき", "distractors": ["えきぃ", "えけ", "え"], "explanation": "駅 (Station) = えき." },
        { "question": "この {道} をまっすぐ行きます。", "correctAnswer": "みち", "distractors": ["どう", "とお", "まち"], "explanation": "道 (Road) standalone = みち." },
        { "question": "外国 (がい{こく}) へ行きたい。", "correctAnswer": "こく", "distractors": ["くに", "ごく", "まち"], "explanation": "国 (Country) in Gaikoku = こく." },
        { "question": "この {町} は静かです。", "correctAnswer": "まち", "distractors": ["ちょう", "みち", "むら"], "explanation": "町 (Town) standalone = まち." },
        { "question": "教{室} はあそこです。", "correctAnswer": "しつ", "distractors": ["むろ", "じつ", "しつっ"], "explanation": "室 (Room) in Kyoushitsu = しつ." },
        { "question": "{目} が痛いです。", "correctAnswer": "め", "distractors": ["もく", "ぼく", "み"], "explanation": "目 (Eye) standalone = め." },
        { "question": "{口} を開けてください。", "correctAnswer": "くち", "distractors": ["こう", "く", "ぐち"], "explanation": "口 (Mouth) standalone = くち." },
        { "question": "{耳} で聞きます。", "correctAnswer": "みみ", "distractors": ["じ", "め", "に"], "explanation": "耳 (Ear) standalone = みみ." },
        { "question": "{手} を洗います。", "correctAnswer": "て", "distractors": ["しゅ", "た", "で"], "explanation": "手 (Hand) standalone = て." },
        { "question": "{足} が速いです。", "correctAnswer": "あし", "distractors": ["そく", "た", "て"], "explanation": "足 (Leg/Foot) standalone = あし." },
        { "question": "日本{語} が分かります。", "correctAnswer": "ご", "distractors": ["ごう", "ことば", "はな"], "explanation": "語 (Language) = ご." },
        { "question": "先生の {話} を聞く。", "correctAnswer": "はなし", "distractors": ["わ", "ことば", "こえ"], "explanation": "話 (Talk/Story) noun form = はなし." },
        { "question": "{言}葉 を覚えます。", "correctAnswer": "こと", "distractors": ["げん", "い", "ご"], "explanation": "言 (Say) in Kotoba = こと." },
        { "question": "本を {読}む。", "correctAnswer": "よ", "distractors": ["どく", "と", "よん"], "explanation": "読 (Read) verb stem = よ." },
        { "question": "名前を {書}く。", "correctAnswer": "か", "distractors": ["しょ", "が", "き"], "explanation": "書 (Write) verb stem = か." },
        { "question": "朝ごはんを {食}べる。", "correctAnswer": "た", "distractors": ["しょく", "く", "だ"], "explanation": "食 (Eat) verb stem = た." },
        { "question": "水を {飲}む。", "correctAnswer": "の", "distractors": ["いん", "のん", "ぬ"], "explanation": "飲 (Drink) verb stem = の." },
        { "question": "ここで {立}つ。", "correctAnswer": "た", "distractors": ["りつ", "だ", "ち"], "explanation": "立 (Stand) verb stem = た." },
        { "question": "バスを {待}つ。", "correctAnswer": "ま", "distractors": ["たい", "も", "だ"], "explanation": "待 (Wait) verb stem = ま." },
        { "question": "{新}しい 車です。", "correctAnswer": "あたら", "distractors": ["しん", "あら", "あだら"], "explanation": "新 (New) adjective stem = あたら." },
        { "question": "{古}い 時計です。", "correctAnswer": "ふる", "distractors": ["こ", "ぶる", "ふっ"], "explanation": "古 (Old) adjective stem = ふる." },
        { "question": "背が {高}い です。", "correctAnswer": "たか", "distractors": ["こう", "だか", "たっ"], "explanation": "高 (High/Tall) adjective stem = たか." },
        { "question": "値段が {安}い です。", "correctAnswer": "やす", "distractors": ["あん", "あす", "やっ"], "explanation": "安 (Cheap) adjective stem = やす." },
        { "question": "{大}きい 家です。", "correctAnswer": "おお", "distractors": ["だい", "たい", "お"], "explanation": "大 (Big) adjective stem = おお." },
        { "question": "{小}さい 部屋です。", "correctAnswer": "ちい", "distractors": ["しょう", "こ", "お"], "explanation": "小 (Small) adjective stem = ちい." },
        { "question": "{中}国 へ行きます。", "correctAnswer": "ちゅう", "distractors": ["なか", "じゅう", "うち"], "explanation": "中 (Middle) in China = ちゅう." },
        { "question": "一日{中} 雨でした。", "correctAnswer": "じゅう", "distractors": ["ちゅう", "なか", "のうち"], "explanation": "中 (Throughout) suffix = じゅう." },
        { "question": "今日は {休}み です。", "correctAnswer": "やす", "distractors": ["きゅう", "やっ", "や"], "explanation": "休 (Rest) noun stem = やす." },
        { "question": "{出}口 はどこですか。", "correctAnswer": "で", "distractors": ["だ", "しゅつ", "い"], "explanation": "出 (Exit) in Deguchi = で." },
        { "question": "{入}り口 はあそこです。", "correctAnswer": "い", "distractors": ["はい", "にゅう", "じ"], "explanation": "入 (Enter) in Iriguchi = い." },
        { "question": "新聞を {買}う。", "correctAnswer": "か", "distractors": ["ばい", "が", "や"], "explanation": "買 (Buy) verb stem = か." },
        { "question": "{生}まれました。", "correctAnswer": "う", "distractors": ["せい", "なま", "しょう"], "explanation": "生 (Born) verb stem = う." },
        { "question": "{何}時 に終わりますか。", "correctAnswer": "なん", "distractors": ["なに", "か", "いつ"], "explanation": "何 (What) before Time = なん." },
        { "question": "それは {何} ですか。", "correctAnswer": "なん", "distractors": ["なに", "か", "だれ"], "explanation": "何 (What) before Desu = なん." },
        { "question": "{一}生懸命 勉強します。", "correctAnswer": "いっ", "distractors": ["いち", "ひと", "いつ"], "explanation": "一 (One) in Isshoukenmei = いっ." }
    ],

    // 3. Syntax Star Scramble
    star_questions: [
        { "question": "I am drinking water.", "correctSequence": ["私", "は", "水", "を"], "prefix": "", "suffix": "飲んでいます。", "explanation": "Subject (私は) + Object (水を)." },
        { "question": "This apple is big.", "correctSequence": ["この", "りんご", "は", "大きい"], "prefix": "", "suffix": "です。", "explanation": "Modifier (この) + Subject (りんごは) + Adjective (大きい)." },
        { "question": "I eat sushi at the restaurant.", "correctSequence": ["レストラン", "で", "すし", "を"], "prefix": "私は", "suffix": "食べます。", "explanation": "Location (レストランで) + Object (すしを)." },
        { "question": "I go to school at 8 o'clock.", "correctSequence": ["八時", "に", "学校", "へ"], "prefix": "私は", "suffix": "行きます。", "explanation": "Time (八時に) + Destination (学校へ)." },
        { "question": "Mr. Tanaka is a teacher.", "correctSequence": ["田中", "さん", "は", "先生"], "prefix": "", "suffix": "です。", "explanation": "Topic (田中さんは) + Noun (先生)." },
        { "question": "My bag is red.", "correctSequence": ["私", "の", "かばん", "は"], "prefix": "", "suffix": "赤いです。", "explanation": "Possession (私の) + Subject (かばんは)." },
        { "question": "There is a cat in the park.", "correctSequence": ["公園", "に", "猫", "が"], "prefix": "", "suffix": "います。", "explanation": "Location (公園に) + Subject (猫が) + います (for living things)." },
        { "question": "There is a clock on the desk.", "correctSequence": ["机の", "上", "に", "時計が"], "prefix": "", "suffix": "あります。", "explanation": "Location (机の上に) + Subject (時計が) + あります (for objects)." },
        { "question": "I came to Japan last year.", "correctSequence": ["去年", "日本", "へ", "来ました"], "prefix": "私は", "suffix": "。", "explanation": "Time (去年) + Destination (日本へ) + Verb (来ました)." },
        { "question": "I will buy a book tomorrow.", "correctSequence": ["明日", "本", "を", "買います"], "prefix": "私は", "suffix": "。", "explanation": "Time (明日) + Object (本を) + Verb (買います)." },
        { "question": "Please write your name.", "correctSequence": ["名前", "を", "書いて", "ください"], "prefix": "ここに", "suffix": "。", "explanation": "Object (名前を) + Te-form verb (書いて) + ください." },
        { "question": "Please listen to the teacher's story.", "correctSequence": ["先生", "の", "話", "を"], "prefix": "", "suffix": "聞いてください。", "explanation": "Possession (先生の) + Object (話を)." },
        { "question": "I don't eat meat.", "correctSequence": ["肉", "を", "食べ", "ません"], "prefix": "私は", "suffix": "。", "explanation": "Object (肉を) + Negative Verb (食べません)." },
        { "question": "I did not go anywhere yesterday.", "correctSequence": ["昨日", "どこ", "へ", "も"], "prefix": "私は", "suffix": "行きませんでした。", "explanation": "Question word (どこ) + へ + も + Negative = Nowhere." },
        { "question": "Who is that person?", "correctSequence": ["あの", "人", "は", "だれ"], "prefix": "", "suffix": "ですか。", "explanation": "Subject (あの人は) + Question (だれ)." },
        { "question": "Where is the bathroom?", "correctSequence": ["トイレ", "は", "どこ", "に"], "prefix": "", "suffix": "ありますか。", "explanation": "Topic (トイレは) + Location Question (どこに)." },
        { "question": "What is this?", "correctSequence": ["これ", "は", "何", "です"], "prefix": "", "suffix": "か。", "explanation": "Topic (これは) + Question (何です)." },
        { "question": "I speak Japanese with my friend.", "correctSequence": ["友達", "と", "日本語", "を"], "prefix": "私は", "suffix": "話します。", "explanation": "Companion (友達と) + Object (日本語を)." },
        { "question": "I study from 9 to 5.", "correctSequence": ["九時", "から", "五時", "まで"], "prefix": "私は", "suffix": "勉強します。", "explanation": "Start (九時から) + End (五時まで)." },
        { "question": "It takes about 10 minutes by bus.", "correctSequence": ["バス", "で", "十分", "ぐらい"], "prefix": "", "suffix": "かかります。", "explanation": "Means (バスで) + Duration (十分ぐらい)." },
        { "question": "That camera is expensive.", "correctSequence": ["その", "カメラ", "は", "高い"], "prefix": "", "suffix": "です。", "explanation": "Modifier (そのカメラ) + Particle (は) + Adjective (高い)." },
        { "question": "This test is not easy.", "correctSequence": ["この", "テスト", "は", "簡単"], "prefix": "", "suffix": "ではありません。", "explanation": "Na-adjective negative uses ではありません or じゃありません." },
        { "question": "Yesterday was cold.", "correctSequence": ["昨日", "は", "寒かった", "です"], "prefix": "", "suffix": "。", "explanation": "I-adjective past tense uses ~かった." },
        { "question": "The movie was not interesting.", "correctSequence": ["映画", "は", "面白く", "なかった"], "prefix": "", "suffix": "です。", "explanation": "I-adjective negative past uses ~くなかった." },
        { "question": "I like dogs.", "correctSequence": ["犬", "が", "好き", "です"], "prefix": "私は", "suffix": "。", "explanation": "The object of 好き (like) takes the particle が." },
        { "question": "I understand English a little.", "correctSequence": ["英語", "が", "少し", "わかり"], "prefix": "私は", "suffix": "ます。", "explanation": "The object of わかる (understand) takes the particle が." },
        { "question": "I am bad at singing.", "correctSequence": ["歌", "が", "下手", "です"], "prefix": "私は", "suffix": "。", "explanation": "Skill descriptions (下手/上手) take the particle が." },
        { "question": "I read a book and go to sleep.", "correctSequence": ["本", "を", "読んで", "から"], "prefix": "私は", "suffix": "寝ます。", "explanation": "Te-form + から means 'after doing [verb]'." },
        { "question": "I am writing a letter now.", "correctSequence": ["今", "手紙", "を", "書いて"], "prefix": "私は", "suffix": "います。", "explanation": "Te-form + います indicates ongoing present continuous action." },
        { "question": "Mr. Suzuki is reading a newspaper.", "correctSequence": ["鈴木", "さん", "は", "新聞を"], "prefix": "", "suffix": "読んでいます。", "explanation": "Topic (鈴木さんは) + Object (新聞を) + Action (読んでいます)." },
        { "question": "I gave a present to my mother.", "correctSequence": ["母", "に", "プレゼント", "を"], "prefix": "私は", "suffix": "あげました。", "explanation": "Recipient (母に) + Object (プレゼントを) + あげました." },
        { "question": "I received money from my father.", "correctSequence": ["父", "から", "お金", "を"], "prefix": "私は", "suffix": "もらいました。", "explanation": "Giver (父から/に) + Object (お金を) + もらいました." },
        { "question": "Which is Mr. Yamada's umbrella?", "correctSequence": ["山田", "さんの", "傘", "は"], "prefix": "", "suffix": "どれですか。", "explanation": "Possession (山田さんの) + Topic (傘は)." },
        { "question": "How much is this shoe?", "correctSequence": ["この", "靴", "は", "いくら"], "prefix": "", "suffix": "ですか。", "explanation": "Topic (この靴は) + Cost Question (いくら)." },
        { "question": "What kind of music do you like?", "correctSequence": ["どんな", "音楽", "が", "好き"], "prefix": "", "suffix": "ですか。", "explanation": "Modifier (どんな) + Noun (音楽が) + Adjective (好き)." },
        { "question": "Because it's hot, I will open the window.", "correctSequence": ["暑い", "ですから", "窓", "を"], "prefix": "", "suffix": "開けます。", "explanation": "Reason (暑いから) + Object (窓を)." },
        { "question": "I will buy meat and fish.", "correctSequence": ["肉", "と", "魚", "を"], "prefix": "私は", "suffix": "買います。", "explanation": "Noun list (肉と魚) + Object particle (を)." },
        { "question": "Do you want to drink tea or something?", "correctSequence": ["お茶", "か", "何か", "飲み"], "prefix": "", "suffix": "ますか。", "explanation": "Noun (お茶) + Question particle (か) + 何か." },
        { "question": "There are apples and bananas (among other things).", "correctSequence": ["りんご", "や", "バナナ", "が"], "prefix": "箱の中に", "suffix": "あります。", "explanation": "Incomplete list uses particle や." },
        { "question": "Is the test on Tuesday? Or Wednesday?", "correctSequence": ["火曜日", "ですか", "水曜日", "ですか"], "prefix": "テストは", "suffix": "。", "explanation": "A or B question format: Aですか、Bですか." },
        { "question": "Let's go together.", "correctSequence": ["一緒", "に", "行き", "ましょう"], "prefix": "", "suffix": "。", "explanation": "Adverb (一緒に) + Volitional Verb (行きましょう)." },
        { "question": "Shall I open the window?", "correctSequence": ["窓", "を", "開け", "ましょうか"], "prefix": "", "suffix": "。", "explanation": "Object (窓を) + Suggestion Verb (開けましょうか)." },
        { "question": "Please don't take pictures.", "correctSequence": ["写真", "を", "撮らない", "で"], "prefix": "ここでは", "suffix": "ください。", "explanation": "Negative request: Nai-form + で + ください." },
        { "question": "I already ate dinner.", "correctSequence": ["もう", "晩ご飯", "を", "食べました"], "prefix": "私は", "suffix": "。", "explanation": "Adverb (もう) + Past tense verb (食べました)." },
        { "question": "He has not come yet.", "correctSequence": ["彼", "は", "まだ", "来て"], "prefix": "", "suffix": "いません。", "explanation": "Subject (彼は) + Adverb (まだ) + Negative state (来ていません)." },
        { "question": "I go to work by bicycle.", "correctSequence": ["自転車", "で", "会社", "へ"], "prefix": "私は", "suffix": "行きます。", "explanation": "Means (自転車で) + Destination (会社へ)." },
        { "question": "I wrote a letter with a pen.", "correctSequence": ["ペン", "で", "手紙", "を"], "prefix": "私は", "suffix": "書きました。", "explanation": "Tool (ペンで) + Object (手紙を)." },
        { "question": "This coffee is hot and delicious.", "correctSequence": ["この", "コーヒーは", "熱くて", "おいしい"], "prefix": "", "suffix": "です。", "explanation": "Joining I-adjectives: drop い, add くて." },
        { "question": "The room is quiet and clean.", "correctSequence": ["部屋", "は", "静かで", "きれい"], "prefix": "", "suffix": "です。", "explanation": "Joining Na-adjectives: drop な, add で." },
        { "question": "I am a student and 20 years old.", "correctSequence": ["学生", "で", "二十歳", "です"], "prefix": "私は", "suffix": "。", "explanation": "Joining Nouns: add で." },
        { "question": "Please speak slowly.", "correctSequence": ["ゆっくり", "話して", "ください", "ね"], "prefix": "もっと", "suffix": "。", "explanation": "Adverb (ゆっくり) + Te-form request (話してください)." },
        { "question": "There is a hospital next to the bank.", "correctSequence": ["銀行", "の", "隣", "に"], "prefix": "", "suffix": "病院があります。", "explanation": "Relative location: Noun 1 (銀行) + の + Position (隣) + に." },
        { "question": "The cat is under the table.", "correctSequence": ["テーブル", "の", "下", "に"], "prefix": "猫は", "suffix": "います。", "explanation": "Relative location: Noun 1 (テーブル) + の + Position (下) + に." },
        { "question": "It rained yesterday.", "correctSequence": ["昨日", "は", "雨", "が"], "prefix": "", "suffix": "降りました。", "explanation": "Weather phenomena use particle が." },
        { "question": "The wind is blowing strongly.", "correctSequence": ["強い", "風", "が", "吹いて"], "prefix": "", "suffix": "います。", "explanation": "Adjective (強い) + Noun (風が) + Verb (吹いています)." },
        { "question": "Please show me that shirt.", "correctSequence": ["その", "シャツ", "を", "見せて"], "prefix": "", "suffix": "ください。", "explanation": "Modifier (その) + Object (シャツを) + Te-form (見せて)." },
        { "question": "I met my friend in front of the station.", "correctSequence": ["駅の", "前", "で", "友達に"], "prefix": "", "suffix": "会いました。", "explanation": "Action Location (駅の前で) + Target (友達に) + 会いました." },
        { "question": "Tokyo is bigger than Kyoto.", "correctSequence": ["東京", "は", "京都", "より"], "prefix": "", "suffix": "大きいです。", "explanation": "A (東京) は B (京都) より + Adjective." },
        { "question": "Among fruits, I like apples the best.", "correctSequence": ["果物", "の", "中", "で"], "prefix": "", "suffix": "りんごが一番好きです。", "explanation": "Category selection: Noun (果物) + の中で." },
        { "question": "To get to the station, which way is faster?", "correctSequence": ["バス", "と", "電車", "と"], "prefix": "駅まで", "suffix": "どちらが早いですか。", "explanation": "Comparison setup: A と B と どちらが..." },
        { "question": "Trains are faster.", "correctSequence": ["電車", "の", "ほう", "が"], "prefix": "", "suffix": "早いです。", "explanation": "Comparison answer: A のほうが..." },
        { "question": "It has become cold.", "correctSequence": ["最近", "寒く", "なり", "ました"], "prefix": "", "suffix": "。", "explanation": "I-adjective change: drop い, add くなる." },
        { "question": "I want to become a teacher.", "correctSequence": ["私", "は", "先生", "に"], "prefix": "", "suffix": "なりたいです。", "explanation": "Noun change: Noun + になる." },
        { "question": "Is anyone in the classroom?", "correctSequence": ["教室", "に", "だれか", "います"], "prefix": "", "suffix": "か。", "explanation": "Location (教室に) + Someone (だれか)." },
        { "question": "There is nothing in the box.", "correctSequence": ["箱", "の", "中に", "何も"], "prefix": "", "suffix": "ありません。", "explanation": "Location (箱の中に) + Nothing (何も) + Negative verb." },
        { "question": "I have two younger brothers.", "correctSequence": ["弟", "が", "二人", "います"], "prefix": "私には", "suffix": "。", "explanation": "Subject (弟が) + Counter (二人) + Verb." },
        { "question": "I bought three apples.", "correctSequence": ["りんご", "を", "三つ", "買い"], "prefix": "", "suffix": "ました。", "explanation": "Object (りんごを) + Counter (三つ) + Verb." },
        { "question": "I drink milk every morning.", "correctSequence": ["毎朝", "牛乳", "を", "飲み"], "prefix": "私は", "suffix": "ます。", "explanation": "Time (毎朝) + Object (牛乳を) + Verb." },
        { "question": "Please wake up early tomorrow.", "correctSequence": ["明日", "早く", "起きて", "ください"], "prefix": "", "suffix": "。", "explanation": "Time (明日) + Adverbial Adjective (早く) + Te-form." },
        { "question": "Let's rest a little.", "correctSequence": ["少し", "休み", "ましょう", "か"], "prefix": "", "suffix": "。", "explanation": "Adverb (少し) + Volitional Verb (休みましょうか)." },
        { "question": "This dictionary is very useful.", "correctSequence": ["この", "辞書", "は", "とても"], "prefix": "", "suffix": "便利です。", "explanation": "Topic (この辞書は) + Adverb (とても) + Adjective." },
        { "question": "I don't watch TV much.", "correctSequence": ["テレビ", "を", "あまり", "見ません"], "prefix": "私は", "suffix": "。", "explanation": "Adverb (あまり) + Negative Verb (見ません)." },
        { "question": "My Japanese is completely bad.", "correctSequence": ["日本語", "が", "全然", "わかり"], "prefix": "私は", "suffix": "ません。", "explanation": "Adverb (全然) + Negative Verb (わかりません)." },
        { "question": "My father is tall.", "correctSequence": ["父", "は", "背", "が"], "prefix": "", "suffix": "高いです。", "explanation": "Topic (父は) + Attribute (背が) + Adjective." },
        { "question": "Her hair is long.", "correctSequence": ["彼女", "は", "髪", "が"], "prefix": "", "suffix": "長いです。", "explanation": "Topic (彼女は) + Attribute (髪が) + Adjective." },
        { "question": "I also like meat.", "correctSequence": ["私", "も", "肉", "が"], "prefix": "", "suffix": "好きです。", "explanation": "Inclusive topic (私も) + Object (肉が)." },
        { "question": "I bought this book and that pen.", "correctSequence": ["この", "本", "と", "あの"], "prefix": "私は", "suffix": "ペンを買いました。", "explanation": "Noun 1 (この本) + と + Noun 2 (あのペン)." },
        { "question": "Please turn off the lights.", "correctSequence": ["部屋", "の", "電気", "を"], "prefix": "", "suffix": "消してください。", "explanation": "Possession (部屋の) + Object (電気を)." },
        { "question": "May I take a picture?", "correctSequence": ["写真", "を", "撮って", "も"], "prefix": "ここで", "suffix": "いいですか。", "explanation": "Te-form + もいいですか (Asking permission)." },
        { "question": "You must not smoke here.", "correctSequence": ["たばこ", "を", "吸って", "は"], "prefix": "ここでは", "suffix": "いけません。", "explanation": "Te-form + はいけません (Prohibition)." },
        { "question": "Because it's raining, I won't go out.", "correctSequence": ["雨", "ですから", "出かけ", "ません"], "prefix": "", "suffix": "。", "explanation": "Reason (雨ですから) + Action (出かけません)." },
        { "question": "Why were you late?", "correctSequence": ["どうして", "遅れた", "ん", "ですか"], "prefix": "", "suffix": "。", "explanation": "Question (どうして) + Verb (遅れた) + んですか (Seeking explanation)." },
        { "question": "Please give me that.", "correctSequence": ["それ", "を", "私", "に"], "prefix": "", "suffix": "ください。", "explanation": "Object (それを) + Recipient (私に)." },
        { "question": "I cut my hair yesterday.", "correctSequence": ["昨日", "髪", "を", "切り"], "prefix": "私は", "suffix": "ました。", "explanation": "Time (昨日) + Object (髪を) + Verb." },
        { "question": "I am doing laundry.", "correctSequence": ["今", "洗濯", "を", "して"], "prefix": "私は", "suffix": "います。", "explanation": "Time (今) + Object (洗濯を) + Te-form." },
        { "question": "This coat is warm.", "correctSequence": ["この", "コート", "は", "暖かい"], "prefix": "", "suffix": "です。", "explanation": "Topic (このコートは) + Adjective." },
        { "question": "The sky is blue today.", "correctSequence": ["今日", "の", "空", "は"], "prefix": "", "suffix": "青いです。", "explanation": "Possession (今日の) + Topic (空は)." },
        { "question": "My younger sister is an elementary school student.", "correctSequence": ["私", "の", "妹", "は"], "prefix": "", "suffix": "小学生です。", "explanation": "Possession (私の) + Topic (妹は)." },
        { "question": "Please walk slowly.", "correctSequence": ["道", "を", "ゆっくり", "歩いて"], "prefix": "", "suffix": "ください。", "explanation": "Path (道を) + Adverb (ゆっくり) + Te-form." },
        { "question": "I cross the bridge.", "correctSequence": ["あの", "橋", "を", "渡り"], "prefix": "私は", "suffix": "ます。", "explanation": "Path of movement uses を: 橋を." },
        { "question": "I got off the train.", "correctSequence": ["駅", "で", "電車", "を"], "prefix": "私は", "suffix": "降りました。", "explanation": "Leaving a vehicle uses を: 電車を." },
        { "question": "I will get on the bus.", "correctSequence": ["ここ", "から", "バス", "に"], "prefix": "私は", "suffix": "乗ります。", "explanation": "Entering a vehicle uses に: バスに." },
        { "question": "Where do you live?", "correctSequence": ["どこ", "に", "住んで", "います"], "prefix": "あなたは", "suffix": "か。", "explanation": "Location of state (どこに) + Te-form (住んでいます)." },
        { "question": "I know Mr. Tanaka.", "correctSequence": ["田中", "さん", "を", "知って"], "prefix": "私は", "suffix": "います。", "explanation": "Object (田中さんを) + Te-form (知っています)." },
        { "question": "I don't know.", "correctSequence": ["いいえ", "知り", "ません", "でした"], "prefix": "", "suffix": "。", "explanation": "Negative of 知る is simply 知りません." },
        { "question": "Who is the person over there?", "correctSequence": ["あそこ", "に", "いる", "人"], "prefix": "", "suffix": "はだれですか。", "explanation": "Verb modifying Noun: いる + 人." },
        { "question": "The book I read yesterday was good.", "correctSequence": ["昨日", "読んだ", "本", "は"], "prefix": "", "suffix": "よかったです。", "explanation": "Past verb modifying Noun: 読んだ + 本." },
        { "question": "Do you have time tomorrow?", "correctSequence": ["明日", "時間", "が", "あります"], "prefix": "あなたは", "suffix": "か。", "explanation": "Time (明日) + Possession subject (時間が)." },
        { "question": "I have a lot of homework.", "correctSequence": ["宿題", "が", "たくさん", "あります"], "prefix": "今日は", "suffix": "。", "explanation": "Subject (宿題が) + Adverb (たくさん) + Verb." },
        { "question": "Let's play tennis on Sunday.", "correctSequence": ["日曜日", "に", "テニス", "を"], "prefix": "", "suffix": "しましょう。", "explanation": "Time (日曜日に) + Object (テニスを)." },
        { "question": "I am going to the department store to buy shoes.", "correctSequence": ["靴", "を", "買い", "に"], "prefix": "デパートへ", "suffix": "行きます。", "explanation": "Purpose of motion: Object (靴を) + Verb stem (買い) + に." },
        { "question": "I went to Kyoto to meet a friend.", "correctSequence": ["友達", "に", "会い", "に"], "prefix": "私は", "suffix": "京都へ行きました。", "explanation": "Target (友達に) + Verb stem (会い) + に." },
        { "question": "I came to the park to take pictures.", "correctSequence": ["写真", "を", "撮り", "に"], "prefix": "公園へ", "suffix": "来ました。", "explanation": "Object (写真を) + Verb stem (撮り) + に." },
        { "question": "I will go to the post office to buy stamps.", "correctSequence": ["切手", "を", "買い", "に"], "prefix": "郵便局へ", "suffix": "行きます。", "explanation": "Object (切手を) + Verb stem (買い) + に." },
        { "question": "I am going to the library to borrow a book.", "correctSequence": ["本", "を", "借り", "に"], "prefix": "図書館へ", "suffix": "行きます。", "explanation": "Object (本を) + Verb stem (借り) + に." },
        { "question": "Please speak a little louder.", "correctSequence": ["もう", "少し", "大きく", "話して"], "prefix": "", "suffix": "ください。", "explanation": "Adverb (もう少し) + Adverbial Adj (大きく) + Te-form." },
        { "question": "Please do not forget your umbrella.", "correctSequence": ["傘", "を", "忘れない", "で"], "prefix": "", "suffix": "ください。", "explanation": "Negative request: Nai-form (忘れない) + でください." },
        { "question": "Please do not drink this water.", "correctSequence": ["この", "水", "は", "飲まない"], "prefix": "", "suffix": "でください。", "explanation": "Topic (この水は) + Nai-form (飲まない) + でください." },
        { "question": "May I sit here?", "correctSequence": ["ここ", "に", "座って", "も"], "prefix": "", "suffix": "いいですか。", "explanation": "Location (ここに) + Te-form (座って) + もいいですか." },
        { "question": "May I use this pen?", "correctSequence": ["この", "ペン", "を", "使って"], "prefix": "", "suffix": "もいいですか。", "explanation": "Object (このペンを) + Te-form (使って) + もいいですか." },
        { "question": "You must not enter this room.", "correctSequence": ["この", "部屋", "に", "入って"], "prefix": "", "suffix": "はいけません。", "explanation": "Location (この部屋に) + Te-form (入って) + はいけません." },
        { "question": "It is raining now.", "correctSequence": ["今", "雨", "が", "降って"], "prefix": "", "suffix": "います。", "explanation": "Time (今) + Subject (雨が) + Te-form (降って)." },
        { "question": "My father is working at a bank.", "correctSequence": ["父", "は", "銀行", "で"], "prefix": "", "suffix": "働いています。", "explanation": "Topic (父は) + Location (銀行で)." },
        { "question": "Where do you live?", "correctSequence": ["どこ", "に", "住んで", "います"], "prefix": "あなたは", "suffix": "か。", "explanation": "Location of state (どこに) + Te-form (住んでいます)." },
        { "question": "I know her phone number.", "correctSequence": ["彼女の", "電話番号", "を", "知って"], "prefix": "私は", "suffix": "います。", "explanation": "Object (電話番号を) + Te-form state (知って)." },
        { "question": "I will go home after the movie ends.", "correctSequence": ["映画", "が", "終わって", "から"], "prefix": "", "suffix": "帰ります。", "explanation": "Subject (映画が) + Te-form (終わって) + から (after)." },
        { "question": "I wash my hands and then eat.", "correctSequence": ["手", "を", "洗って", "から"], "prefix": "", "suffix": "食べます。", "explanation": "Object (手を) + Te-form (洗って) + から." },
        { "question": "Mr. Tanaka is tall and kind.", "correctSequence": ["背が", "高くて", "親切", "な"], "prefix": "田中さんは", "suffix": "人です。", "explanation": "I-adj connection (高くて) + Na-adj modifier (親切な)." },
        { "question": "This room is narrow and dark.", "correctSequence": ["この", "部屋", "は", "狭くて"], "prefix": "", "suffix": "暗いです。", "explanation": "Topic (この部屋は) + I-adj connection (狭くて)." },
        { "question": "That restaurant is cheap and delicious.", "correctSequence": ["あの", "店は", "安くて", "おいしい"], "prefix": "", "suffix": "です。", "explanation": "Topic (あの店は) + I-adj connection (安くて) + おいしい." },
        { "question": "Tokyo is lively and interesting.", "correctSequence": ["東京", "は", "にぎやかで", "面白い"], "prefix": "", "suffix": "です。", "explanation": "Na-adj connection (にぎやかで) + 面白い." },
        { "question": "I am a student, and my younger sister is a high school student.", "correctSequence": ["私", "は", "学生", "で"], "prefix": "", "suffix": "妹は高校生です。", "explanation": "Noun connection (学生で)." },
        { "question": "I want to drink water.", "correctSequence": ["私", "は", "水", "が"], "prefix": "", "suffix": "飲みたいです。", "explanation": "Desire form can take が or を: 水が + 飲みたい." },
        { "question": "I want to go to Japan next year.", "correctSequence": ["来年", "日本", "へ", "行き"], "prefix": "私は", "suffix": "たいです。", "explanation": "Time (来年) + Destination (日本へ) + Verb stem (行き)." },
        { "question": "What do you want to eat?", "correctSequence": ["あなた", "は", "何", "が"], "prefix": "", "suffix": "食べたいですか。", "explanation": "Topic (あなたは) + Object (何が)." },
        { "question": "I don't want to do anything today.", "correctSequence": ["今日", "は", "何も", "し"], "prefix": "", "suffix": "たくないです。", "explanation": "Topic (今日は) + Object (何も) + Negative desire stem (し)." },
        { "question": "I gave a book to my younger brother.", "correctSequence": ["弟", "に", "本", "を"], "prefix": "私は", "suffix": "あげました。", "explanation": "Recipient (弟に) + Object (本を)." },
        { "question": "Mr. Yamada gave flowers to Ms. Suzuki.", "correctSequence": ["鈴木さん", "に", "花", "を"], "prefix": "山田さんは", "suffix": "あげました。", "explanation": "Recipient (鈴木さんに) + Object (花を)." },
        { "question": "I received a watch from my father.", "correctSequence": ["父", "に", "時計", "を"], "prefix": "私は", "suffix": "もらいました。", "explanation": "Giver (父に/から) + Object (時計を)." },
        { "question": "Who did you get that camera from?", "correctSequence": ["だれ", "に", "その", "カメラを"], "prefix": "あなたは", "suffix": "もらいましたか。", "explanation": "Giver question (だれに) + Object (そのカメラを)." },
        { "question": "A dog is bigger than a cat.", "correctSequence": ["犬", "は", "猫", "より"], "prefix": "", "suffix": "大きいです。", "explanation": "A (犬) + は + B (猫) + より." },
        { "question": "Trains are cheaper than taxis.", "correctSequence": ["電車", "の", "ほう", "が"], "prefix": "タクシーより", "suffix": "安いです。", "explanation": "A の ほう が = A is more (cheap)." },
        { "question": "Which do you like better, meat or fish?", "correctSequence": ["肉", "と", "魚", "と"], "prefix": "", "suffix": "どちらが好きですか。", "explanation": "A (肉) と B (魚) と." },
        { "question": "I like both.", "correctSequence": ["どちら", "も", "好き", "です"], "prefix": "私は", "suffix": "。", "explanation": "Question word (どちら) + も = Both." },
        { "question": "Among sports, I like soccer the best.", "correctSequence": ["スポーツ", "の", "中", "で"], "prefix": "", "suffix": "サッカーが一番好きです。", "explanation": "Category (スポーツ) + の中で (among)." },
        { "question": "Who is the tallest in the class?", "correctSequence": ["クラス", "の", "中で", "だれが"], "prefix": "", "suffix": "一番背が高いですか。", "explanation": "Category (クラスの中で) + Question (だれが)." },
        { "question": "Because it was cold, I drank hot coffee.", "correctSequence": ["寒かった", "から", "熱い", "コーヒーを"], "prefix": "", "suffix": "飲みました。", "explanation": "Reason (寒かったから) + Object (熱いコーヒーを)." },
        { "question": "I won't go tomorrow because I don't have time.", "correctSequence": ["時間", "が", "ありません", "から"], "prefix": "明日は", "suffix": "行きません。", "explanation": "Reason clause: ありません + から." },
        { "question": "Why didn't you come?", "correctSequence": ["どうして", "来なかった", "ん", "ですか"], "prefix": "きのう、", "suffix": "。", "explanation": "Question (どうして) + Past Nai-form (来なかった) + んですか." },
        { "question": "There is a cat on the chair.", "correctSequence": ["いす", "の", "上", "に"], "prefix": "", "suffix": "猫がいます。", "explanation": "Location: Noun (いす) + の + Position (上) + に." },
        { "question": "There is a convenience store next to the station.", "correctSequence": ["駅", "の", "隣", "に"], "prefix": "", "suffix": "コンビニがあります。", "explanation": "Location: Noun (駅) + の + Position (隣) + に." },
        { "question": "The bank is between the post office and the hospital.", "correctSequence": ["郵便局", "と", "病院", "の"], "prefix": "銀行は", "suffix": "間にあります。", "explanation": "Between A and B: A (郵便局) と B (病院) の." },
        { "question": "Inside the box, there is a letter and a photo.", "correctSequence": ["手紙", "や", "写真", "が"], "prefix": "箱の中に", "suffix": "あります。", "explanation": "Incomplete list: A (手紙) や B (写真) が." },
        { "question": "I met Mr. Tanaka at the library.", "correctSequence": ["図書館", "で", "田中さん", "に"], "prefix": "私は", "suffix": "会いました。", "explanation": "Action Location (図書館で) + Target (田中さんに)." },
        { "question": "I read a book at home on Sunday.", "correctSequence": ["日曜日", "に", "家", "で"], "prefix": "", "suffix": "本を読みました。", "explanation": "Time (日曜日に) + Action Location (家で)." },
        { "question": "It rained a lot yesterday.", "correctSequence": ["昨日", "は", "たくさん", "雨が"], "prefix": "", "suffix": "降りました。", "explanation": "Topic (昨日は) + Adverb (たくさん) + Subject (雨が)." },
        { "question": "It will probably snow tomorrow.", "correctSequence": ["明日", "は", "雪", "が"], "prefix": "", "suffix": "降るでしょう。", "explanation": "Topic (明日は) + Subject (雪が)." },
        { "question": "I have two cars.", "correctSequence": ["車", "が", "二台", "あります"], "prefix": "私は", "suffix": "。", "explanation": "Subject (車が) + Counter (二台) + Verb (あります)." },
        { "question": "Please give me three apples.", "correctSequence": ["りんご", "を", "三つ", "ください"], "prefix": "", "suffix": "。", "explanation": "Object (りんごを) + Counter (三つ) + ください." },
        { "question": "There are five students in the classroom.", "correctSequence": ["教室", "に", "学生", "が"], "prefix": "", "suffix": "五人います。", "explanation": "Location (教室に) + Subject (学生が)." },
        { "question": "I bought five stamps at the post office.", "correctSequence": ["切手", "を", "五枚", "買い"], "prefix": "郵便局で", "suffix": "ました。", "explanation": "Object (切手を) + Counter (五枚) + Verb." },
        { "question": "How many computers are there?", "correctSequence": ["パソコン", "が", "何台", "あります"], "prefix": "部屋に", "suffix": "か。", "explanation": "Subject (パソコンが) + Question Counter (何台)." },
        { "question": "It takes one hour from here to the station.", "correctSequence": ["駅", "まで", "一時間", "かかります"], "prefix": "ここから", "suffix": "。", "explanation": "Endpoint (駅まで) + Duration (一時間) + Verb (かかります)." },
        { "question": "How long does it take by airplane?", "correctSequence": ["飛行機", "で", "どのくらい", "かかります"], "prefix": "", "suffix": "か。", "explanation": "Means (飛行機で) + Question (どのくらい) + Verb." },
        { "question": "I sleep for 8 hours every day.", "correctSequence": ["毎日", "八時間", "くらい", "寝ます"], "prefix": "私は", "suffix": "。", "explanation": "Time (毎日) + Duration (八時間) + Approximation (くらい)." },
        { "question": "Is your father doing well?", "correctSequence": ["お父さん", "は", "お元気", "です"], "prefix": "あなたの", "suffix": "か。", "explanation": "Topic (お父さんは) + Polite Adjective (お元気) + です." },
        { "question": "My mother is not at home.", "correctSequence": ["母", "は", "家", "に"], "prefix": "", "suffix": "いません。", "explanation": "Topic (母は) + Location (家に)." },
        { "question": "What is Mr. Suzuki's job?", "correctSequence": ["鈴木さん", "の", "お仕事", "は"], "prefix": "", "suffix": "何ですか。", "explanation": "Possession (鈴木さんの) + Topic (お仕事は)." },
        { "question": "I don't play sports much.", "correctSequence": ["スポーツ", "を", "あまり", "しません"], "prefix": "私は", "suffix": "。", "explanation": "Object (スポーツを) + Adverb (あまり) + Negative verb." },
        { "question": "I always drink milk in the morning.", "correctSequence": ["朝", "いつも", "牛乳", "を"], "prefix": "私は", "suffix": "飲みます。", "explanation": "Time (朝) + Adverb (いつも) + Object (牛乳を)." },
        { "question": "I often read books.", "correctSequence": ["よく", "本", "を", "読みます"], "prefix": "私は", "suffix": "。", "explanation": "Adverb (よく) + Object (本を)." },
        { "question": "I sometimes write letters.", "correctSequence": ["時々", "手紙", "を", "書きます"], "prefix": "私は", "suffix": "。", "explanation": "Adverb (時々) + Object (手紙を)." },
        { "question": "I have exactly 1,000 yen.", "correctSequence": ["ちょうど", "千円", "持って", "います"], "prefix": "私は", "suffix": "。", "explanation": "Adverb (ちょうど) + Object (千円) + Te-form state." },
        { "question": "Please write slowly and carefully.", "correctSequence": ["ゆっくり", "きれい", "に", "書いて"], "prefix": "", "suffix": "ください。", "explanation": "Adverb (ゆっくり) + Na-adj Adverbial (きれいに) + Te-form." },
        { "question": "I got up early today.", "correctSequence": ["今日", "は", "早く", "起き"], "prefix": "私は", "suffix": "ました。", "explanation": "Topic (今日は) + I-adj Adverbial (早く) + Verb." },
        { "question": "The movie was very interesting.", "correctSequence": ["映画", "は", "とても", "面白かった"], "prefix": "その", "suffix": "です。", "explanation": "Topic (映画は) + Adverb (とても) + Past I-adj." },
        { "question": "The weather was good yesterday.", "correctSequence": ["昨日", "は", "天気", "が"], "prefix": "", "suffix": "よかったです。", "explanation": "Topic (昨日は) + Subject (天気が)." },
        { "question": "It will probably be hot next week.", "correctSequence": ["来週", "は", "暑く", "なる"], "prefix": "", "suffix": "でしょう。", "explanation": "Topic (来週は) + I-adj change (暑くなる)." },
        { "question": "I want to become good at Japanese.", "correctSequence": ["日本語", "が", "上手", "に"], "prefix": "私は", "suffix": "なりたいです。", "explanation": "Subject (日本語が) + Na-adj change (上手に) + なりたい." },
        { "question": "It became 5 o'clock.", "correctSequence": ["もう", "五時", "に", "なり"], "prefix": "", "suffix": "ました。", "explanation": "Adverb (もう) + Noun change (五時に) + Verb." },
        { "question": "Let's drink tea or something.", "correctSequence": ["お茶", "でも", "飲み", "ません"], "prefix": "", "suffix": "か。", "explanation": "Suggestion object (お茶でも) + Negative Verb (飲みません)." },
        { "question": "Let's go together.", "correctSequence": ["一緒", "に", "行き", "ましょう"], "prefix": "明日、", "suffix": "。", "explanation": "Adverb (一緒に) + Volitional Verb (行きましょう)." },
        { "question": "Shall I carry your bag?", "correctSequence": ["かばん", "を", "持ち", "ましょう"], "prefix": "あなたの", "suffix": "か。", "explanation": "Object (かばんを) + Volitional Verb (持ちましょう)." },
        { "question": "Is someone there?", "correctSequence": ["だれ", "か", "そこ", "に"], "prefix": "", "suffix": "いますか。", "explanation": "Pronoun (だれか) + Location (そこに)." },
        { "question": "I haven't eaten anything yet.", "correctSequence": ["まだ", "何も", "食べて", "いません"], "prefix": "私は", "suffix": "。", "explanation": "Adverb (まだ) + Pronoun (何も) + Negative state." },
        { "question": "Please do not turn off the lights.", "correctSequence": ["電気", "を", "消さない", "で"], "prefix": "", "suffix": "ください。", "explanation": "Object (電気を) + Negative Te-form (消さないで)." },
        { "question": "You don't have to hurry.", "correctSequence": ["急が", "なくて", "も", "いい"], "prefix": "", "suffix": "です。", "explanation": "Verb Nai-form (急がなくて) + もいいです (don't have to)." },
        { "question": "The person reading a book over there is Mr. Yamada.", "correctSequence": ["あそこ", "で", "本を", "読んでいる"], "prefix": "", "suffix": "人は山田さんです。", "explanation": "Location (あそこで) + Object (本を) + Verb modifying noun (読んでいる)." },
        { "question": "This is a cake my mother made.", "correctSequence": ["これ", "は", "母が", "作った"], "prefix": "", "suffix": "ケーキです。", "explanation": "Topic (これは) + Subject (母が) + Verb modifying noun (作った)." },
        { "question": "Where is the dictionary I bought yesterday?", "correctSequence": ["昨日", "買った", "辞書", "は"], "prefix": "私が", "suffix": "どこですか。", "explanation": "Time (昨日) + Verb modifier (買った) + Topic (辞書は)." },
        { "question": "I like listening to music.", "correctSequence": ["音楽", "を", "聞く", "のが"], "prefix": "私は", "suffix": "好きです。", "explanation": "Object (音楽を) + Nominalized Verb (聞くのが)." },
        { "question": "Speaking Japanese is difficult.", "correctSequence": ["日本語", "を", "話す", "のは"], "prefix": "", "suffix": "難しいです。", "explanation": "Object (日本語を) + Nominalized Verb as Topic (話すのは)." },
        { "question": "My hobby is taking pictures.", "correctSequence": ["趣味", "は", "写真を", "撮る"], "prefix": "私の", "suffix": "ことです。", "explanation": "Topic (趣味は) + Object (写真を) + Verb (撮る)." },
        { "question": "Before going to sleep, I brush my teeth.", "correctSequence": ["寝る", "前", "に", "歯を"], "prefix": "", "suffix": "磨きます。", "explanation": "Verb dictionary form (寝る) + 前に + Object (歯を)." },
        { "question": "After eating, I will study.", "correctSequence": ["ご飯を", "食べて", "から", "勉強"], "prefix": "", "suffix": "します。", "explanation": "Te-form (食べて) + から + Verb noun (勉強)." },
        { "question": "I wash my face with water.", "correctSequence": ["水", "で", "顔", "を"], "prefix": "私は", "suffix": "洗います。", "explanation": "Means/Tool (水で) + Object (顔を)." },
        { "question": "I talk to my family on the phone.", "correctSequence": ["電話", "で", "家族", "と"], "prefix": "", "suffix": "話します。", "explanation": "Means/Tool (電話で) + Companion (家族と)." },
        { "question": "Because I was sick, I rested from school.", "correctSequence": ["病気", "でした", "から", "学校を"], "prefix": "", "suffix": "休みました。", "explanation": "Reason clause (病気でしたから) + Object (学校を)." },
        { "question": "The sky is dark. It looks like it will rain.", "correctSequence": ["暗い", "ですね。", "雨が", "降り"], "prefix": "空が", "suffix": "そうです。", "explanation": "Adjective (暗いですね。) + Subject (雨が) + Verb stem (降り)." },
        { "question": "Have you already finished your homework?", "correctSequence": ["もう", "宿題", "は", "終わり"], "prefix": "", "suffix": "ましたか。", "explanation": "Adverb (もう) + Topic (宿題は) + Verb stem (終わり)." },
        { "question": "I have not finished yet.", "correctSequence": ["いいえ", "まだ", "終わって", "いません"], "prefix": "", "suffix": "。", "explanation": "Adverb (まだ) + Te-form state (終わっていません)." },
        { "question": "Is this Mr. Tanaka's bag?", "correctSequence": ["これ", "は", "田中さん", "の"], "prefix": "", "suffix": "かばんですか。", "explanation": "Topic (これは) + Possession (田中さんの)." },
        { "question": "Whose shoes are these?", "correctSequence": ["これ", "は", "だれ", "の"], "prefix": "", "suffix": "靴ですか。", "explanation": "Topic (これは) + Question possessive (だれの)." },
        { "question": "What kind of person is he?", "correctSequence": ["彼", "は", "どんな", "人"], "prefix": "", "suffix": "ですか。", "explanation": "Topic (彼は) + Modifier (どんな) + Noun (人)." },
        { "question": "Which umbrella is yours?", "correctSequence": ["あなた", "の", "傘", "は"], "prefix": "", "suffix": "どの傘ですか。", "explanation": "Possession topic (あなたの傘は)." },
        { "question": "This test is not very difficult.", "correctSequence": ["この", "テスト", "は", "あまり"], "prefix": "", "suffix": "難しくないです。", "explanation": "Topic (このテストは) + Adverb (あまり)." },
        { "question": "It's cold, isn't it?", "correctSequence": ["今日", "は", "寒い", "です"], "prefix": "", "suffix": "ね。", "explanation": "Topic (今日は) + Adjective (寒いです)." },
        { "question": "I bought it at a department store, you know.", "correctSequence": ["デパート", "で", "買った", "ん"], "prefix": "", "suffix": "ですよ。", "explanation": "Location (デパートで) + Verb past (買った) + ん (explanation particle)." },
        { "question": "I wake up at 7 every morning.", "correctSequence": ["毎朝", "七時", "に", "起き"], "prefix": "私は", "suffix": "ます。", "explanation": "Time (毎朝七時に) + Verb stem (起き)." },
        { "question": "I am going to the sea to swim.", "correctSequence": ["海", "へ", "泳ぎ", "に"], "prefix": "私は", "suffix": "行きます。", "explanation": "Destination (海へ) + Verb stem (泳ぎ) + に (purpose of going)." },
        { "question": "Please speak Japanese.", "correctSequence": ["日本語", "で", "話して", "ください"], "prefix": "", "suffix": "。", "explanation": "Language (日本語で) + Te-form request (話してください)." },
        { "question": "I didn't eat anything this morning.", "correctSequence": ["今朝", "何も", "食べ", "ません"], "prefix": "私は", "suffix": "でした。", "explanation": "Time (今朝) + Pronoun (何も) + Negative past stem (食べません)." },
        { "question": "Who is that person?", "correctSequence": ["あの", "人", "は", "だれ"], "prefix": "", "suffix": "ですか。", "explanation": "Topic (あの人は) + Question word (だれ)." },
        { "question": "How do you go to the station?", "correctSequence": ["どうやって", "駅", "まで", "行き"], "prefix": "", "suffix": "ますか。", "explanation": "Question (どうやって) + Destination (駅まで) + Verb (行き)." },
        { "question": "Which is Mr. Yamada's desk?", "correctSequence": ["山田", "さん", "の", "机"], "prefix": "", "suffix": "はどれですか。", "explanation": "Possession (山田さんの) + Noun (机)." },
        { "question": "What kind of car did you buy?", "correctSequence": ["どんな", "車", "を", "買い"], "prefix": "", "suffix": "ましたか。", "explanation": "Modifier (どんな) + Object (車を) + Verb (買い)." },
        { "question": "Because it's hot, I will drink water.", "correctSequence": ["暑い", "から", "水", "を"], "prefix": "", "suffix": "飲みます。", "explanation": "Reason (暑いから) + Object (水を)." },
        { "question": "Let's meet at the station at 10.", "correctSequence": ["十時", "に", "駅", "で"], "prefix": "", "suffix": "会いましょう。", "explanation": "Time (十時に) + Location (駅で)." },
        { "question": "I went to Tokyo by bullet train.", "correctSequence": ["新幹線", "で", "東京", "へ"], "prefix": "私は", "suffix": "行きました。", "explanation": "Means (新幹線で) + Destination (東京へ)." },
        { "question": "Please give me this and that.", "correctSequence": ["これ", "と", "それ", "を"], "prefix": "", "suffix": "ください。", "explanation": "Noun connection (これとそれを)." },
        { "question": "I drank coffee and ate bread.", "correctSequence": ["コーヒーを", "飲んで", "パンを", "食べました"], "prefix": "私は", "suffix": "。", "explanation": "Action 1 (飲んで) + Action 2 (食べました)." },
        { "question": "I have not read this book yet.", "correctSequence": ["この", "本", "は", "まだ"], "prefix": "私は", "suffix": "読んでいません。", "explanation": "Topic (この本は) + Adverb (まだ)." },
        { "question": "The movie has already started.", "correctSequence": ["映画", "は", "もう", "始まり"], "prefix": "", "suffix": "ました。", "explanation": "Topic (映画は) + Adverb (もう) + Verb (始まり)." },
        { "question": "May I take a picture here?", "correctSequence": ["写真", "を", "撮って", "も"], "prefix": "ここで", "suffix": "いいですか。", "explanation": "Object (写真を) + Te-form + もいいですか." },
        { "question": "You must not enter.", "correctSequence": ["ここ", "に", "入って", "は"], "prefix": "", "suffix": "いけません。", "explanation": "Location (ここに) + Te-form + はいけません." },
        { "question": "Please don't forget.", "correctSequence": ["私", "の", "こと", "を"], "prefix": "", "suffix": "忘れないでください。", "explanation": "Phrase (私のことを) + Negative request." },
        { "question": "It takes about 5 minutes on foot.", "correctSequence": ["歩いて", "五分", "ぐらい", "かかり"], "prefix": "", "suffix": "ます。", "explanation": "Means (歩いて) + Duration (五分ぐらい) + Verb." },
        { "question": "Is the bank nearby?", "correctSequence": ["銀行", "は", "この", "近く"], "prefix": "", "suffix": "にありますか。", "explanation": "Topic (銀行は) + Location (この近く)." },
        { "question": "Apples are cheaper than melons.", "correctSequence": ["りんご", "は", "メロン", "より"], "prefix": "", "suffix": "安いです。", "explanation": "A (りんご) は B (メロン) より." },
        { "question": "Among seasons, I like spring best.", "correctSequence": ["季節", "の", "中", "で"], "prefix": "", "suffix": "春が一番好きです。", "explanation": "Category (季節) + の中で (among)." },
        { "question": "My father became a teacher.", "correctSequence": ["父", "は", "先生", "に"], "prefix": "", "suffix": "なりました。", "explanation": "Noun (先生) + になりました (became)." },
        { "question": "The room became warm.", "correctSequence": ["部屋", "が", "暖かく", "なり"], "prefix": "", "suffix": "ました。", "explanation": "I-adj change (暖かく) + なりました." },
        { "question": "I want to eat sushi.", "correctSequence": ["おすし", "が", "食べ", "たい"], "prefix": "私は", "suffix": "です。", "explanation": "Object (おすしが) + Verb stem (食べ) + たい." },
        { "question": "I don't want to go anywhere.", "correctSequence": ["どこ", "へ", "も", "行き"], "prefix": "私は", "suffix": "たくないです。", "explanation": "Question (どこ) + へも + Negative stem (行き)." },
        { "question": "Do you want to drink tea?", "correctSequence": ["お茶", "を", "飲み", "ますか"], "prefix": "一緒に", "suffix": "。", "explanation": "Object (お茶を) + Verb (飲みますか)." },
        { "question": "Let's rest a little.", "correctSequence": ["少し", "休み", "ましょう", "か"], "prefix": "", "suffix": "。", "explanation": "Adverb (少し) + Volitional (休みましょうか)." },
        { "question": "The person reading a book is Ms. Sato.", "correctSequence": ["本", "を", "読んで", "いる"], "prefix": "あそこで", "suffix": "人は佐藤さんです。", "explanation": "Object (本を) + Te-form verb modifying noun (読んでいる)." },
        { "question": "This is a letter my friend wrote.", "correctSequence": ["友達", "が", "書いた", "手紙"], "prefix": "これは", "suffix": "です。", "explanation": "Subject (友達が) + Past verb modifying noun (書いた手紙)." },
        { "question": "Please write with a pen.", "correctSequence": ["ボールペン", "で", "書いて", "ください"], "prefix": "ここに", "suffix": "。", "explanation": "Tool (ボールペンで) + Te-form request (書いて)." },
        { "question": "A dog and a cat are in the garden.", "correctSequence": ["庭", "に", "犬", "と"], "prefix": "", "suffix": "猫がいます。", "explanation": "Location (庭に) + Noun connection (犬と)." },
        { "question": "Please turn on the light.", "correctSequence": ["部屋", "の", "電気", "を"], "prefix": "", "suffix": "つけてください。", "explanation": "Possession (部屋の) + Object (電気を)." },
        { "question": "Please open the window.", "correctSequence": ["暑い", "から", "窓", "を"], "prefix": "", "suffix": "開けてください。", "explanation": "Reason (暑いから) + Object (窓を)." },
        { "question": "Why did you buy it?", "correctSequence": ["どうして", "買った", "ん", "ですか"], "prefix": "それを", "suffix": "。", "explanation": "Question (どうして) + Verb (買った) + んですか." },
        { "question": "I brush my teeth before sleeping.", "correctSequence": ["寝る", "前", "に", "歯"], "prefix": "私は", "suffix": "を磨きます。", "explanation": "Dictionary verb (寝る) + 前に + Object (歯)." },
        { "question": "I study after dinner.", "correctSequence": ["晩ご飯", "の", "後", "で"], "prefix": "私は", "suffix": "勉強します。", "explanation": "Noun (晩ご飯) + の後で (after)." },
        { "question": "Because there was no time, I couldn't read.", "correctSequence": ["時間", "が", "なかった", "から"], "prefix": "", "suffix": "読めませんでした。", "explanation": "Subject (時間が) + Past Nai-form (なかった) + から." },
        { "question": "Is Mr. Tanaka at home?", "correctSequence": ["田中", "さん", "は", "家"], "prefix": "", "suffix": "にいますか。", "explanation": "Topic (田中さんは) + Noun (家)." },
        { "question": "My younger brother is 10 years old.", "correctSequence": ["私", "の", "弟", "は"], "prefix": "", "suffix": "十歳です。", "explanation": "Possession (私の) + Topic (弟は)." },
        { "question": "Which one is your umbrella?", "correctSequence": ["あなた", "の", "傘", "は"], "prefix": "", "suffix": "どれですか。", "explanation": "Possession (あなたの) + Topic (傘は)." },
        { "question": "Whose bag is this?", "correctSequence": ["これ", "は", "だれ", "の"], "prefix": "", "suffix": "かばんですか。", "explanation": "Topic (これは) + Question possessive (だれの)." },
        { "question": "What kind of movie is it?", "correctSequence": ["それ", "は", "どんな", "映画"], "prefix": "", "suffix": "ですか。", "explanation": "Topic (それは) + Modifier (どんな) + Noun (映画)." },
        { "question": "I only have 1,000 yen.", "correctSequence": ["千円", "しか", "持って", "いません"], "prefix": "私は", "suffix": "。", "explanation": "Noun (千円) + しか + Negative verb (持っていません)." },
        { "question": "I am not very good at sports.", "correctSequence": ["スポーツ", "は", "あまり", "上手"], "prefix": "私は", "suffix": "ではありません。", "explanation": "Topic (スポーツは) + Adverb (あまり) + Na-adj (上手)." },
        { "question": "My Japanese is completely un-understandable.", "correctSequence": ["日本語", "が", "全然", "わかり"], "prefix": "私は", "suffix": "ません。", "explanation": "Subject (日本語が) + Adverb (全然) + Verb stem (わかり)." },
        { "question": "He comes to the library every day.", "correctSequence": ["彼", "は", "毎日", "図書館"], "prefix": "", "suffix": "へ来ます。", "explanation": "Topic (彼は) + Time (毎日) + Destination (図書館)." },
        { "question": "Please speak slowly.", "correctSequence": ["もっと", "ゆっくり", "話して", "ください"], "prefix": "", "suffix": "。", "explanation": "Adverb (もっとゆっくり) + Te-form request (話してください)." },
        { "question": "The train was very crowded.", "correctSequence": ["電車", "は", "とても", "込んで"], "prefix": "", "suffix": "いました。", "explanation": "Topic (電車は) + Adverb (とても) + Te-form (込んで)." },
        { "question": "That shop is quiet and nice.", "correctSequence": ["あの", "店", "は", "静かで"], "prefix": "", "suffix": "いいですよ。", "explanation": "Topic (あの店は) + Na-adj connection (静かで)." },
        { "question": "Tokyo is big and lively.", "correctSequence": ["東京", "は", "大きくて", "にぎやか"], "prefix": "", "suffix": "です。", "explanation": "Topic (東京は) + I-adj connection (大きくて)." },
        { "question": "I have both a cat and a dog.", "correctSequence": ["犬", "も", "猫", "も"], "prefix": "私は", "suffix": "飼っています。", "explanation": "Inclusive (犬も) + Inclusive (猫も)." },
        { "question": "I bought meat and fish.", "correctSequence": ["肉", "や", "魚", "を"], "prefix": "スーパーで", "suffix": "買いました。", "explanation": "Incomplete list (肉や魚を)." },
        { "question": "I gave a present to my friend.", "correctSequence": ["友達", "に", "プレゼント", "を"], "prefix": "私は", "suffix": "あげました。", "explanation": "Recipient (友達に) + Object (プレゼントを)." },
        { "question": "I received a letter from the teacher.", "correctSequence": ["先生", "から", "手紙", "を"], "prefix": "私は", "suffix": "もらいました。", "explanation": "Giver (先生から) + Object (手紙を)." },
        { "question": "There is a cat under the desk.", "correctSequence": ["机", "の", "下", "に"], "prefix": "", "suffix": "猫がいます。", "explanation": "Location: Noun (机) + の + Position (下) + に." },
        { "question": "The station is next to the post office.", "correctSequence": ["駅", "は", "郵便局", "の"], "prefix": "", "suffix": "隣にあります。", "explanation": "Topic (駅は) + Reference Noun (郵便局の)." },
        { "question": "Please show me that shirt.", "correctSequence": ["その", "シャツ", "を", "見せて"], "prefix": "", "suffix": "ください。", "explanation": "Modifier (その) + Object (シャツを) + Te-form (見せて)." },
        { "question": "Because it's cold, I will close the window.", "correctSequence": ["寒い", "ですから", "窓", "を"], "prefix": "", "suffix": "閉めます。", "explanation": "Reason (寒いから) + Object (窓を)." },
        { "question": "Did you take your medicine?", "correctSequence": ["もう", "薬", "を", "飲み"], "prefix": "", "suffix": "ましたか。", "explanation": "Adverb (もう) + Object (薬を) + Verb stem (飲み)." },
        { "question": "I haven't eaten yet.", "correctSequence": ["いいえ", "まだ", "食べて", "いません"], "prefix": "", "suffix": "。", "explanation": "Adverb (まだ) + Te-form negative state (食べていません)." },
        { "question": "I drink milk every morning.", "correctSequence": ["毎朝", "牛乳", "を", "飲み"], "prefix": "私は", "suffix": "ます。", "explanation": "Time (毎朝) + Object (牛乳を) + Verb stem (飲み)." },
        { "question": "I read books often.", "correctSequence": ["よく", "図書館", "で", "本を"], "prefix": "私は", "suffix": "読みます。", "explanation": "Adverb (よく) + Location (図書館で) + Object (本を)." },
        { "question": "The test is from 9 to 10.", "correctSequence": ["九時", "から", "十時", "まで"], "prefix": "テストは", "suffix": "です。", "explanation": "Start (九時から) + End (十時まで)." },
        { "question": "It takes 2 hours from Tokyo to Kyoto.", "correctSequence": ["東京", "から", "京都", "まで"], "prefix": "", "suffix": "二時間かかります。", "explanation": "Start (東京から) + End (京都まで)." },
        { "question": "I like listening to music.", "correctSequence": ["音楽", "を", "聞く", "のが"], "prefix": "私は", "suffix": "好きです。", "explanation": "Object (音楽を) + Nominalized Verb (聞くのが)." },
        { "question": "Speaking English is hard.", "correctSequence": ["英語", "を", "話す", "のは"], "prefix": "", "suffix": "難しいです。", "explanation": "Object (英語を) + Nominalized Verb as Topic (話すのは)." },
        { "question": "My hobby is taking pictures.", "correctSequence": ["趣味", "は", "写真を", "撮る"], "prefix": "私の", "suffix": "ことです。", "explanation": "Topic (趣味は) + Object (写真を) + Verb (撮る)." },
        { "question": "It rained yesterday.", "correctSequence": ["昨日", "は", "雨", "が"], "prefix": "", "suffix": "降りました。", "explanation": "Topic (昨日は) + Subject (雨が)." },
        { "question": "The wind is blowing.", "correctSequence": ["風", "が", "吹いて", "います"], "prefix": "外は", "suffix": "。", "explanation": "Subject (風が) + Te-form state (吹いています)." },
        { "question": "Please turn off the TV.", "correctSequence": ["テレビ", "を", "消して", "ください"], "prefix": "", "suffix": "。", "explanation": "Object (テレビを) + Te-form request (消してください)." },
        { "question": "I woke up at 6.", "correctSequence": ["今朝", "六時", "に", "起き"], "prefix": "私は", "suffix": "ました。", "explanation": "Time (今朝六時に) + Verb stem (起き)." },
        { "question": "I don't play tennis.", "correctSequence": ["テニス", "は", "あまり", "しません"], "prefix": "私は", "suffix": "。", "explanation": "Topic (テニスは) + Adverb (あまり) + Negative verb." },
        { "question": "This coffee is hot.", "correctSequence": ["この", "コーヒー", "は", "熱い"], "prefix": "", "suffix": "です。", "explanation": "Modifier (この) + Topic (コーヒーは) + Adjective." },
        { "question": "That bag is mine.", "correctSequence": ["あの", "かばん", "は", "私"], "prefix": "", "suffix": "のです。", "explanation": "Modifier (あの) + Topic (かばんは) + Pronoun (私)." },
        { "question": "A dog and a cat are sleeping.", "correctSequence": ["犬", "と", "猫", "が"], "prefix": "部屋で", "suffix": "寝ています。", "explanation": "Noun connection (犬と猫) + Subject particle (が)." },
        { "question": "I met my friend yesterday.", "correctSequence": ["昨日", "友達", "に", "会い"], "prefix": "私は", "suffix": "ました。", "explanation": "Time (昨日) + Target (友達に) + Verb stem (会い)." },
        { "question": "Because I am busy, I won't go.", "correctSequence": ["忙しい", "ですから", "どこへも", "行き"], "prefix": "今日は", "suffix": "ません。", "explanation": "Reason (忙しいですから) + Pronoun (どこへも) + Verb." },
        { "question": "Is someone there?", "correctSequence": ["だれ", "か", "部屋", "に"], "prefix": "", "suffix": "いますか。", "explanation": "Pronoun (だれか) + Location (部屋に)." },
        { "question": "There is a hospital near the park.", "correctSequence": ["公園", "の", "近く", "に"], "prefix": "", "suffix": "病院があります。", "explanation": "Location: Noun (公園) + の + Position (近く) + に." },
        { "question": "Let's sing a song.", "correctSequence": ["一緒", "に", "歌", "を"], "prefix": "", "suffix": "歌いましょう。", "explanation": "Adverb (一緒に) + Object (歌を)." },
        { "question": "Shall I help you?", "correctSequence": ["荷物", "を", "持ち", "ましょう"], "prefix": "その", "suffix": "か。", "explanation": "Object (荷物を) + Volitional (持ちましょう)." },
        { "question": "Please don't smoke here.", "correctSequence": ["たばこ", "を", "吸わない", "で"], "prefix": "ここでは", "suffix": "ください。", "explanation": "Object (たばこを) + Negative request (吸わないで)." },
        { "question": "You may take pictures.", "correctSequence": ["写真", "を", "撮って", "も"], "prefix": "ここでは", "suffix": "いいですよ。", "explanation": "Object (写真を) + Te-form + もいいですよ." },
        { "question": "There is a cat on the bed.", "correctSequence": ["ベッド", "の", "上", "に"], "prefix": "", "suffix": "猫がいます。", "explanation": "Location: Noun (ベッド) + の + Position (上) + に." },
        { "question": "It takes 10 minutes from the station.", "correctSequence": ["駅", "から", "十分", "かかり"], "prefix": "", "suffix": "ます。", "explanation": "Start (駅から) + Duration (十分) + Verb." },
        { "question": "Trains are faster.", "correctSequence": ["電車", "の", "ほう", "が"], "prefix": "バスより", "suffix": "早いです。", "explanation": "A の ほう が (Trains are more...)." },
        { "question": "I like meat better than fish.", "correctSequence": ["魚", "より", "肉", "の"], "prefix": "私は", "suffix": "ほうが好きです。", "explanation": "B (魚) より + A (肉) の (More than fish, meat...)." },
        { "question": "It became cold.", "correctSequence": ["最近", "とても", "寒く", "なり"], "prefix": "", "suffix": "ました。", "explanation": "Adverb (とても) + I-adj change (寒く) + なりました." },
        { "question": "I want to become an adult soon.", "correctSequence": ["早く", "大人", "に", "なり"], "prefix": "私は", "suffix": "たいです。", "explanation": "Adverb (早く) + Noun change (大人に) + なりたい." },
        { "question": "Please speak louder.", "correctSequence": ["大きな", "声", "で", "話して"], "prefix": "もっと", "suffix": "ください。", "explanation": "Modifier (大きな) + Noun/Means (声で) + Te-form." },
        { "question": "Because it was raining, I stayed home.", "correctSequence": ["雨", "が", "降って", "いました"], "prefix": "昨日は", "suffix": "から、家にいました。", "explanation": "Subject (雨が) + Te-form past (降っていました)." },
        { "question": "I will do laundry and then clean.", "correctSequence": ["洗濯", "を", "して", "から"], "prefix": "私は", "suffix": "掃除をします。", "explanation": "Object (洗濯を) + Te-form (して) + から." },
        { "question": "I studied while listening to music.", "correctSequence": ["音楽", "を", "聞き", "ながら"], "prefix": "私は", "suffix": "勉強しました。", "explanation": "Object (音楽を) + Verb stem (聞き) + ながら (while)." },
        { "question": "I know that person.", "correctSequence": ["あの", "人", "を", "知って"], "prefix": "私は", "suffix": "います。", "explanation": "Modifier (あの) + Object (人を) + Te-form state." },
        { "question": "I don't have time today.", "correctSequence": ["今日", "は", "時間", "が"], "prefix": "", "suffix": "ありません。", "explanation": "Topic (今日は) + Subject (時間が)." },
        { "question": "There are three apples.", "correctSequence": ["りんご", "が", "三つ", "あります"], "prefix": "箱の中に", "suffix": "。", "explanation": "Subject (りんごが) + Counter (三つ) + Verb." },
        { "question": "Please don't forget.", "correctSequence": ["宿題", "を", "忘れない", "で"], "prefix": "明日の", "suffix": "ください。", "explanation": "Object (宿題を) + Nai-form (忘れない) + で." },
        { "question": "Please write your name here.", "correctSequence": ["ここ", "に", "名前", "を"], "prefix": "", "suffix": "書いてください。", "explanation": "Location (ここに) + Object (名前を)." },
        { "question": "A letter arrived from a friend.", "correctSequence": ["友達", "から", "手紙", "が"], "prefix": "", "suffix": "来ました。", "explanation": "Origin (友達から) + Subject (手紙が)." },
        { "question": "I have to study.", "correctSequence": ["勉強", "しなけれ", "ば", "なりません"], "prefix": "明日はテストですから、", "suffix": "。", "explanation": "Nai-form base (しなけれ) + ばなりません (must do)." }
    ],

    // 4. Grammar Rules
    grammar_rules: [
        { "grammar": "〜は", "meaning": "Topic marker", "formation": "Noun + は", "category": "Particle", "examples": [{"japanese": "私は学生です。", "reading": "わたしはがくせいです", "english": "I am a student."}] },
        { "grammar": "〜が (Subject)", "meaning": "Subject marker", "formation": "Noun + が", "category": "Particle", "examples": [{"japanese": "雨が降ります。", "reading": "あめがふります", "english": "It rains."}] },
        { "grammar": "〜を", "meaning": "Direct object marker", "formation": "Noun + を + Verb", "category": "Particle", "examples": [{"japanese": "水を飲みます。", "reading": "みずをのみます", "english": "I drink water."}] },
        { "grammar": "〜に (Time)", "meaning": "Specific time marker", "formation": "Time + に", "category": "Particle", "examples": [{"japanese": "八時に起きます。", "reading": "はちじにおきます", "english": "I wake up at 8."}] },
        { "grammar": "〜に (Destination)", "meaning": "Direction of movement", "formation": "Place + に + 行く/来る", "category": "Particle", "examples": [{"japanese": "学校に行きます。", "reading": "がっこうにいきます", "english": "I go to school."}] },
        { "grammar": "〜に (Existence)", "meaning": "Location of existence", "formation": "Place + に + あります/います", "category": "Particle", "examples": [{"japanese": "部屋に猫がいます。", "reading": "へやにねこがいます", "english": "There is a cat in the room."}] },
        { "grammar": "〜へ", "meaning": "Direction marker (towards)", "formation": "Place + へ + 行く/来る", "category": "Particle", "examples": [{"japanese": "東京へ行きます。", "reading": "とうきょうへいきます", "english": "I head towards Tokyo."}] },
        { "grammar": "〜で (Location)", "meaning": "Location of action", "formation": "Place + で + Action Verb", "category": "Particle", "examples": [{"japanese": "家で本を読みます。", "reading": "いえでほんをよみます", "english": "I read a book at home."}] },
        { "grammar": "〜で (Means)", "meaning": "By means of / Using", "formation": "Tool/Transport + で", "category": "Particle", "examples": [{"japanese": "バスで来ました。", "reading": "ばすできました", "english": "I came by bus."}] },
        { "grammar": "〜と", "meaning": "And (Complete list) / With", "formation": "Noun1 + と + Noun2", "category": "Particle", "examples": [{"japanese": "肉と魚を買います。", "reading": "にくとさかなをかいます", "english": "I buy meat and fish."}] },
        { "grammar": "〜や", "meaning": "And (Incomplete list)", "formation": "Noun1 + や + Noun2", "category": "Particle", "examples": [{"japanese": "本やペンがあります。", "reading": "ほんやぺんがあります", "english": "There are books, pens, etc."}] },
        { "grammar": "〜から", "meaning": "From (Time/Place)", "formation": "Noun + から", "category": "Particle", "examples": [{"japanese": "九時からです。", "reading": "くじからです", "english": "It is from 9 o'clock."}] },
        { "grammar": "〜まで", "meaning": "Until / To (Time/Place)", "formation": "Noun + まで", "category": "Particle", "examples": [{"japanese": "駅まで歩きます。", "reading": "えきまであるきます", "english": "I walk until the station."}] },
        { "grammar": "〜も", "meaning": "Also / Too", "formation": "Noun + も", "category": "Particle", "examples": [{"japanese": "私も行きます。", "reading": "わたしもいきます", "english": "I will also go."}] },
        { "grammar": "〜の", "meaning": "Possessive / Noun modifier", "formation": "Noun1 + の + Noun2", "category": "Particle", "examples": [{"japanese": "私の車です。", "reading": "わたしのくるまです", "english": "It is my car."}] },
        { "grammar": "〜か (Question)", "meaning": "Question marker", "formation": "Sentence + か", "category": "Particle", "examples": [{"japanese": "何ですか。", "reading": "なんですか", "english": "What is it?"}] },
        { "grammar": "〜か (Or)", "meaning": "Or", "formation": "Noun1 + か + Noun2", "category": "Particle", "examples": [{"japanese": "今日か明日", "reading": "きょうかあした", "english": "Today or tomorrow"}] },
        { "grammar": "〜だけ", "meaning": "Only / Just", "formation": "Noun + だけ", "category": "Particle", "examples": [{"japanese": "水だけ飲みます。", "reading": "みずだけのみます", "english": "I drink only water."}] },
        { "grammar": "〜しか〜ない", "meaning": "Only (with negative)", "formation": "Noun + しか + Negative Verb", "category": "Particle", "examples": [{"japanese": "千円しかありません。", "reading": "せんえんしかありません", "english": "I only have 1,000 yen."}] },
        { "grammar": "〜ぐらい / くらい", "meaning": "About / Approximately", "formation": "Quantity + ぐらい", "category": "Particle", "examples": [{"japanese": "十分ぐらいです。", "reading": "じゅっぷんぐらいです", "english": "It is about 10 minutes."}] },
        { "grammar": "V-ます", "meaning": "Present / Future Polite", "formation": "Verb stem + ます", "category": "Verb", "examples": [{"japanese": "毎日走ります。", "reading": "まいにちはしります", "english": "I run every day."}] },
        { "grammar": "V-ません", "meaning": "Negative Present Polite", "formation": "Verb stem + ません", "category": "Verb", "examples": [{"japanese": "肉を食べません。", "reading": "にくをたべません", "english": "I do not eat meat."}] },
        { "grammar": "V-ました", "meaning": "Past Polite", "formation": "Verb stem + ました", "category": "Verb", "examples": [{"japanese": "昨日行きました。", "reading": "きのういきました", "english": "I went yesterday."}] },
        { "grammar": "V-ませんでした", "meaning": "Negative Past Polite", "formation": "Verb stem + ませんでした", "category": "Verb", "examples": [{"japanese": "見ませんでした。", "reading": "みませんでした", "english": "I did not see it."}] },
        { "grammar": "V-ましょう", "meaning": "Let's do ~", "formation": "Verb stem + ましょう", "category": "Verb", "examples": [{"japanese": "帰りましょう。", "reading": "かえりましょう", "english": "Let's go home."}] },
        { "grammar": "V-ましょうか", "meaning": "Shall I/we do ~?", "formation": "Verb stem + ましょうか", "category": "Verb", "examples": [{"japanese": "手伝いましょうか。", "reading": "てつだいましょうか", "english": "Shall I help?"}] },
        { "grammar": "V-たい", "meaning": "Want to do ~", "formation": "Verb stem + たいです", "category": "Verb", "examples": [{"japanese": "寿司が食べたいです。", "reading": "すしがたべたいです", "english": "I want to eat sushi."}] },
        { "grammar": "V-たくない", "meaning": "Do not want to do ~", "formation": "Verb stem + たくないです", "category": "Verb", "examples": [{"japanese": "行きたくないです。", "reading": "いきたくないです", "english": "I don't want to go."}] },
        { "grammar": "V-に行く", "meaning": "Go to do ~", "formation": "Verb stem + に行く", "category": "Verb", "examples": [{"japanese": "遊びに行きます。", "reading": "あそびにいきます", "english": "I go to play."}] },
        { "grammar": "V-てください", "meaning": "Please do ~", "formation": "Verb te-form + ください", "category": "Verb", "examples": [{"japanese": "待ってください。", "reading": "まってください", "english": "Please wait."}] },
        { "grammar": "V-てもいいです", "meaning": "May I do ~?", "formation": "Verb te-form + もいいですか", "category": "Verb", "examples": [{"japanese": "座ってもいいですか。", "reading": "すわってもいいですか", "english": "May I sit?"}] },
        { "grammar": "V-てはいけません", "meaning": "Must not do ~", "formation": "Verb te-form + はいけません", "category": "Verb", "examples": [{"japanese": "入ってはいけません。", "reading": "はいってはいけません", "english": "You must not enter."}] },
        { "grammar": "V-ています (State)", "meaning": "Current state / Result", "formation": "Verb te-form + います", "category": "Verb", "examples": [{"japanese": "結婚しています。", "reading": "けっこんしています", "english": "I am married."}] },
        { "grammar": "V-ています (Action)", "meaning": "Currently doing ~", "formation": "Verb te-form + います", "category": "Verb", "examples": [{"japanese": "今、食べています。", "reading": "いま、たべています", "english": "I am eating now."}] },
        { "grammar": "V-てから", "meaning": "After doing ~", "formation": "Verb te-form + から", "category": "Verb", "examples": [{"japanese": "読んでから寝ます。", "reading": "よんでからねます", "english": "I will sleep after reading."}] },
        { "grammar": "V-ないでください", "meaning": "Please don't do ~", "formation": "Verb nai-form + でください", "category": "Verb", "examples": [{"japanese": "忘れないでください。", "reading": "わすれないでください", "english": "Please don't forget."}] },
        { "grammar": "い-Adj + です", "meaning": "Present positive (I-adjective)", "formation": "I-adj + です", "category": "Adjective", "examples": [{"japanese": "大きいです。", "reading": "おおきいです", "english": "It is big."}] },
        { "grammar": "い-Adj + くないです", "meaning": "Present negative (I-adjective)", "formation": "Drop い + くないです", "category": "Adjective", "examples": [{"japanese": "高くありません。", "reading": "たかくありません", "english": "It is not expensive."}] },
        { "grammar": "い-Adj + かったです", "meaning": "Past positive (I-adjective)", "formation": "Drop い + かったです", "category": "Adjective", "examples": [{"japanese": "美味しかったです。", "reading": "おいしかったです", "english": "It was delicious."}] },
        { "grammar": "い-Adj + くなかったです", "meaning": "Past negative (I-adjective)", "formation": "Drop い + くなかったです", "category": "Adjective", "examples": [{"japanese": "寒くなかったです。", "reading": "さむくなかったです", "english": "It was not cold."}] },
        { "grammar": "いいです (Irregular)", "meaning": "Is good", "formation": "いい + です", "category": "Adjective", "examples": [{"japanese": "天気がいいです。", "reading": "てんきがいいです", "english": "The weather is good."}] },
        { "grammar": "よくないです (Irregular)", "meaning": "Is not good", "formation": "よく + ないです", "category": "Adjective", "examples": [{"japanese": "よくないです。", "reading": "よくないです", "english": "It is not good."}] },
        { "grammar": "な-Adj + です", "meaning": "Present positive (Na-adjective)", "formation": "Na-adj root + です", "category": "Adjective", "examples": [{"japanese": "静かです。", "reading": "しずかです", "english": "It is quiet."}] },
        { "grammar": "な-Adj + ではありません", "meaning": "Present negative (Na-adjective)", "formation": "Na-adj root + じゃありません", "category": "Adjective", "examples": [{"japanese": "元気じゃありません。", "reading": "げんきじゃありません", "english": "I am not energetic."}] },
        { "grammar": "な-Adj + でした", "meaning": "Past positive (Na-adjective)", "formation": "Na-adj root + でした", "category": "Adjective", "examples": [{"japanese": "暇でした。", "reading": "ひまでした", "english": "I was free/bored."}] },
        { "grammar": "な-Adj + ではありませんでした", "meaning": "Past negative (Na-adjective)", "formation": "Na-adj root + じゃありませんでした", "category": "Adjective", "examples": [{"japanese": "有名じゃありませんでした。", "reading": "ゆうめいじゃありませんでした", "english": "It was not famous."}] },
        { "grammar": "Noun + です", "meaning": "Is / Am / Are (Noun)", "formation": "Noun + です", "category": "Noun", "examples": [{"japanese": "猫です。", "reading": "ねこです", "english": "It is a cat."}] },
        { "grammar": "Noun + ではありません", "meaning": "Is not (Noun)", "formation": "Noun + じゃありません", "category": "Noun", "examples": [{"japanese": "学生じゃありません。", "reading": "がくせいじゃありません", "english": "I am not a student."}] },
        { "grammar": "Noun + でした", "meaning": "Was (Noun)", "formation": "Noun + でした", "category": "Noun", "examples": [{"japanese": "雨でした。", "reading": "あめでした", "english": "It was rain."}] },
        { "grammar": "Noun + ではありませんでした", "meaning": "Was not (Noun)", "formation": "Noun + じゃありませんでした", "category": "Noun", "examples": [{"japanese": "休みじゃありませんでした。", "reading": "やすみじゃありませんでした", "english": "It was not a holiday."}] },
        { "grammar": "〜にあります", "meaning": "Exists in/at (Inanimate)", "formation": "Place + にあります", "category": "Expression", "examples": [{"japanese": "机の上にあります。", "reading": "つくえのうえにあります", "english": "It is on the desk."}] },
        { "grammar": "〜にいます", "meaning": "Exists in/at (Animate)", "formation": "Place + にいます", "category": "Expression", "examples": [{"japanese": "庭にいます。", "reading": "にわにいます", "english": "I am in the garden."}] },
        { "grammar": "〜が好きです", "meaning": "To like", "formation": "Noun + が好きです", "category": "Expression", "examples": [{"japanese": "犬が好きです。", "reading": "いぬがすきです", "english": "I like dogs."}] },
        { "grammar": "〜が上手です", "meaning": "To be good at", "formation": "Noun + が上手です", "category": "Expression", "examples": [{"japanese": "歌が上手です。", "reading": "うたがじょうずです", "english": "I am good at singing."}] },
        { "grammar": "〜が下手です", "meaning": "To be bad at", "formation": "Noun + が下手です", "category": "Expression", "examples": [{"japanese": "スポーツが下手です。", "reading": "すぽーつがへたです", "english": "I am bad at sports."}] },
        { "grammar": "〜がわかります", "meaning": "To understand", "formation": "Noun + がわかります", "category": "Expression", "examples": [{"japanese": "日本語がわかります。", "reading": "にほんごがわかります", "english": "I understand Japanese."}] },
        { "grammar": "〜があります (Possession)", "meaning": "To have / possess", "formation": "Noun + があります", "category": "Expression", "examples": [{"japanese": "時間があります。", "reading": "じかんがあります", "english": "I have time."}] },
        { "grammar": "〜から (Reason)", "meaning": "Because", "formation": "Sentence + から", "category": "Conjunction", "examples": [{"japanese": "暑いですから。", "reading": "あついですから", "english": "Because it is hot."}] },
        { "grammar": "どうして", "meaning": "Why", "formation": "どうして + Sentence か", "category": "Adverb", "examples": [{"japanese": "どうして来ましたか。", "reading": "どうしてきましたか", "english": "Why did you come?"}] },
        { "grammar": "A より B", "meaning": "More than A", "formation": "A より B のほうが〜", "category": "Comparison", "examples": [{"japanese": "肉より魚が好きです。", "reading": "にくよりさかながすきです", "english": "I like fish more than meat."}] },
        { "grammar": "A のほうが B", "meaning": "A is more B", "formation": "A のほうが B", "category": "Comparison", "examples": [{"japanese": "電車のほうが早いです。", "reading": "でんしゃのほうがはやいです", "english": "Trains are faster."}] },
        { "grammar": "一番〜", "meaning": "The most / Number 1", "formation": "一番 + Adjective", "category": "Comparison", "examples": [{"japanese": "これが一番安いです。", "reading": "これがいちばんやすいです", "english": "This is the cheapest."}] },
        { "grammar": "A と B とどちらが", "meaning": "Which is more (between two)", "formation": "AとBとどちらが〜", "category": "Comparison", "examples": [{"japanese": "犬と猫とどちらが好きですか。", "reading": "いぬとねことどちらがすきですか", "english": "Which do you like more, dogs or cats?"}] },
        { "grammar": "〜の中で", "meaning": "Among ~", "formation": "Noun + の中で", "category": "Comparison", "examples": [{"japanese": "果物の中で", "reading": "くだもののなかで", "english": "Among fruits"}] },
        { "grammar": "〜くなる", "meaning": "To become (I-adjective)", "formation": "Drop い + くなる", "category": "Expression", "examples": [{"japanese": "寒くなりました。", "reading": "さむくなりました", "english": "It became cold."}] },
        { "grammar": "〜になる", "meaning": "To become (Na-adj / Noun)", "formation": "Noun/Na-adj root + になる", "category": "Expression", "examples": [{"japanese": "先生になります。", "reading": "せんせいになります", "english": "I will become a teacher."}] },
        { "grammar": "もう〜ました", "meaning": "Already did", "formation": "もう + Verb ました", "category": "Adverb", "examples": [{"japanese": "もう食べました。", "reading": "もうたべました", "english": "I already ate."}] },
        { "grammar": "まだ〜ていません", "meaning": "Have not yet done", "formation": "まだ + Verb ていません", "category": "Adverb", "examples": [{"japanese": "まだ来ていません。", "reading": "まだきていません", "english": "They have not come yet."}] },
        { "grammar": "〜をあげる", "meaning": "To give", "formation": "Receiver に + Object を + あげる", "category": "Expression", "examples": [{"japanese": "友達に本をあげます。", "reading": "ともだちにほんをあげます", "english": "I give a book to my friend."}] },
        { "grammar": "〜をもらう", "meaning": "To receive", "formation": "Giver に/から + Object を + もらう", "category": "Expression", "examples": [{"japanese": "父に時計をもらいました。", "reading": "ちちにとけいをもらいました", "english": "I received a watch from my father."}] },
        { "grammar": "どんな〜", "meaning": "What kind of", "formation": "どんな + Noun", "category": "Adverb", "examples": [{"japanese": "どんな映画ですか。", "reading": "どんなえいがですか", "english": "What kind of movie is it?"}] },
        { "grammar": "どの〜", "meaning": "Which (3 or more)", "formation": "どの + Noun", "category": "Pronoun", "examples": [{"japanese": "どの人ですか。", "reading": "どのひとですか", "english": "Which person is it?"}] },
        { "grammar": "どれ", "meaning": "Which one", "formation": "どれ + Particle", "category": "Pronoun", "examples": [{"japanese": "どれが好きですか。", "reading": "どれがすきですか", "english": "Which one do you like?"}] },
        { "grammar": "V-る (Dictionary Form)", "meaning": "Plain Present/Future", "formation": "Dictionary form", "category": "Verb", "examples": [{"japanese": "明日行く。", "reading": "あしたいく", "english": "I will go tomorrow."}] },
        { "grammar": "V-ない (Nai Form)", "meaning": "Plain Negative Present", "formation": "Nai form", "category": "Verb", "examples": [{"japanese": "肉を食べない。", "reading": "にくをたべない", "english": "I don't eat meat."}] },
        { "grammar": "V-た (Ta Form)", "meaning": "Plain Past", "formation": "Ta form", "category": "Verb", "examples": [{"japanese": "昨日見た。", "reading": "きのうみた", "english": "I saw it yesterday."}] },
        { "grammar": "V-なかった (Nakatta Form)", "meaning": "Plain Negative Past", "formation": "Nakatta form", "category": "Verb", "examples": [{"japanese": "買わなかった。", "reading": "かわなかった", "english": "I didn't buy it."}] },
        { "grammar": "Noun + modifying", "meaning": "Noun modifying another noun", "formation": "Noun1 + の + Noun2", "category": "Noun", "examples": [{"japanese": "日本語の本", "reading": "にほんごのほん", "english": "Japanese book"}] },
        { "grammar": "I-Adj + modifying", "meaning": "I-adjective modifying noun", "formation": "I-adj + Noun", "category": "Adjective", "examples": [{"japanese": "高いビル", "reading": "たかいびる", "english": "Tall building"}] },
        { "grammar": "Na-Adj + modifying", "meaning": "Na-adjective modifying noun", "formation": "Na-adj + な + Noun", "category": "Adjective", "examples": [{"japanese": "静かな町", "reading": "しずかなまち", "english": "Quiet town"}] },
        { "grammar": "V-る + modifying", "meaning": "Verb modifying noun", "formation": "Dictionary verb + Noun", "category": "Verb", "examples": [{"japanese": "読む本", "reading": "よむほん", "english": "Book to read"}] },
        { "grammar": "V-た + modifying", "meaning": "Past verb modifying noun", "formation": "Ta form + Noun", "category": "Verb", "examples": [{"japanese": "買った車", "reading": "かったくるま", "english": "Car that I bought"}] },
        { "grammar": "〜のです/んです", "meaning": "Seeking/giving explanation", "formation": "Plain form + んです", "category": "Expression", "examples": [{"japanese": "寒いんです。", "reading": "さむいんです", "english": "It's because it's cold."}] },
        { "grammar": "〜でしょう", "meaning": "Probably / Right?", "formation": "Plain form + でしょう", "category": "Expression", "examples": [{"japanese": "明日降るでしょう。", "reading": "あしたふるでしょう", "english": "It will probably rain tomorrow."}] },
        { "grammar": "〜つ", "meaning": "General object counter", "formation": "Number + つ", "category": "Counter", "examples": [{"japanese": "二つください。", "reading": "ふたつください", "english": "Please give me two."}] },
        { "grammar": "〜人 (にん)", "meaning": "People counter", "formation": "Number + 人", "category": "Counter", "examples": [{"japanese": "五人います。", "reading": "ごにんいます", "english": "There are 5 people."}] },
        { "grammar": "〜枚 (まい)", "meaning": "Flat object counter", "formation": "Number + 枚", "category": "Counter", "examples": [{"japanese": "紙を一枚", "reading": "かみをいちまい", "english": "One sheet of paper"}] },
        { "grammar": "〜台 (だい)", "meaning": "Machine/Vehicle counter", "formation": "Number + 台", "category": "Counter", "examples": [{"japanese": "車が三台", "reading": "くるまがさんだい", "english": "Three cars"}] },
        { "grammar": "〜冊 (さつ)", "meaning": "Book counter", "formation": "Number + 冊", "category": "Counter", "examples": [{"japanese": "本を四冊", "reading": "ほんをよんさつ", "english": "Four books"}] },
        { "grammar": "〜回 (かい)", "meaning": "Frequency counter", "formation": "Number + 回", "category": "Counter", "examples": [{"japanese": "一週間に一回", "reading": "いっしゅうかんにおっかい", "english": "Once a week"}] },
        { "grammar": "〜杯 (はい)", "meaning": "Cup/Glass counter", "formation": "Number + 杯", "category": "Counter", "examples": [{"japanese": "お茶を一杯", "reading": "おちゃをいっぱい", "english": "One cup of tea"}] },
        { "grammar": "〜匹 (ひき)", "meaning": "Small animal counter", "formation": "Number + 匹", "category": "Counter", "examples": [{"japanese": "猫が二匹", "reading": "ねこがにひき", "english": "Two cats"}] },
        { "grammar": "〜本 (ほん)", "meaning": "Long object counter", "formation": "Number + 本", "category": "Counter", "examples": [{"japanese": "ペンが三本", "reading": "ぺんがさんぼん", "english": "Three pens"}] },
        { "grammar": "だれか", "meaning": "Someone", "formation": "だれ + か", "category": "Pronoun", "examples": [{"japanese": "だれかいますか。", "reading": "だれかいますか", "english": "Is someone there?"}] },
        { "grammar": "何も", "meaning": "Nothing", "formation": "何 + も + Negative", "category": "Pronoun", "examples": [{"japanese": "何もありません。", "reading": "なにもありません", "english": "There is nothing."}] },
        { "grammar": "どこへも", "meaning": "Nowhere", "formation": "どこ + へも + Negative", "category": "Pronoun", "examples": [{"japanese": "どこへも行きません。", "reading": "どこへもいきません", "english": "I am not going anywhere."}] },
        { "grammar": "いつも", "meaning": "Always", "formation": "いつも + Affirmative", "category": "Adverb", "examples": [{"japanese": "いつも忙しいです。", "reading": "いつもいそがしいです", "english": "I am always busy."}] },
        { "grammar": "よく", "meaning": "Often / Well", "formation": "よく + Affirmative", "category": "Adverb", "examples": [{"japanese": "よく食べます。", "reading": "よくたべます", "english": "I eat often."}] },
        { "grammar": "時々", "meaning": "Sometimes", "formation": "時々 + Affirmative", "category": "Adverb", "examples": [{"japanese": "時々行きます。", "reading": "ときどきいきます", "english": "I go sometimes."}] },
        { "grammar": "あまり", "meaning": "Not very / Not much", "formation": "あまり + Negative", "category": "Adverb", "examples": [{"japanese": "あまり見ません。", "reading": "あまりみません", "english": "I don't watch much."}] },
        { "grammar": "全然", "meaning": "Not at all", "formation": "全然 + Negative", "category": "Adverb", "examples": [{"japanese": "全然わかりません。", "reading": "ぜんぜんわかりません", "english": "I don't understand at all."}] },
        { "grammar": "これ", "meaning": "This one (near speaker)", "formation": "Pronoun", "category": "Demonstrative", "examples": [{"japanese": "これは本です。", "reading": "これはほんです", "english": "This is a book."}] },
        { "grammar": "それ", "meaning": "That one (near listener)", "formation": "Pronoun", "category": "Demonstrative", "examples": [{"japanese": "それは何ですか。", "reading": "それはなんですか", "english": "What is that?"}] },
        { "grammar": "あれ", "meaning": "That one over there", "formation": "Pronoun", "category": "Demonstrative", "examples": [{"japanese": "あれは車です。", "reading": "あれはくるまです", "english": "That over there is a car."}] },
        { "grammar": "この〜", "meaning": "This ~ (Noun)", "formation": "この + Noun", "category": "Demonstrative", "examples": [{"japanese": "このペンは赤いです。", "reading": "このぺんはあかいです", "english": "This pen is red."}] },
        { "grammar": "その〜", "meaning": "That ~ (Noun)", "formation": "その + Noun", "category": "Demonstrative", "examples": [{"japanese": "そのかばんは誰のですか。", "reading": "そのかばんはだれのですか", "english": "Whose bag is that?"}] },
        { "grammar": "あの〜", "meaning": "That ~ over there (Noun)", "formation": "あの + Noun", "category": "Demonstrative", "examples": [{"japanese": "あの人は先生です。", "reading": "あのひとはせんせいです", "english": "That person over there is a teacher."}] },
        { "grammar": "ここ", "meaning": "Here", "formation": "Pronoun", "category": "Demonstrative", "examples": [{"japanese": "ここは学校です。", "reading": "ここはがっこうです", "english": "Here is the school."}] },
        { "grammar": "そこ", "meaning": "There", "formation": "Pronoun", "category": "Demonstrative", "examples": [{"japanese": "そこは病院です。", "reading": "そこはびょういんです", "english": "There is the hospital."}] },
        { "grammar": "あそこ", "meaning": "Over there", "formation": "Pronoun", "category": "Demonstrative", "examples": [{"japanese": "あそこに猫がいます。", "reading": "あそこにねこがいます", "english": "There is a cat over there."}] },
        { "grammar": "どこ", "meaning": "Where", "formation": "Question word", "category": "Interrogative", "examples": [{"japanese": "トイレはどこですか。", "reading": "といれはどこですか", "english": "Where is the bathroom?"}] },
        { "grammar": "こちら", "meaning": "This way / This person (Polite)", "formation": "Pronoun", "category": "Demonstrative", "examples": [{"japanese": "こちらは田中さんです。", "reading": "こちらはたなかさんです", "english": "This is Mr. Tanaka."}] },
        { "grammar": "そちら", "meaning": "That way (Polite)", "formation": "Pronoun", "category": "Demonstrative", "examples": [{"japanese": "そちらへ行きます。", "reading": "そちらへいきます", "english": "I will go that way."}] },
        { "grammar": "あちら", "meaning": "That way over there (Polite)", "formation": "Pronoun", "category": "Demonstrative", "examples": [{"japanese": "あちらにあります。", "reading": "あちらにあります", "english": "It is over that way."}] },
        { "grammar": "どちら", "meaning": "Which way / Which one (Polite)", "formation": "Question word", "category": "Interrogative", "examples": [{"japanese": "どちらが好きですか。", "reading": "どちらがすきですか", "english": "Which one do you prefer?"}] },
        { "grammar": "こんな", "meaning": "This kind of", "formation": "こんな + Noun", "category": "Demonstrative", "examples": [{"japanese": "こんな服が欲しいです。", "reading": "こんなふくがほしいです", "english": "I want this kind of clothes."}] },
        { "grammar": "そんな", "meaning": "That kind of", "formation": "そんな + Noun", "category": "Demonstrative", "examples": [{"japanese": "そんな話は知りません。", "reading": "そんなはなしはしりません", "english": "I don't know that kind of story."}] },
        { "grammar": "あんな", "meaning": "That kind of (over there)", "formation": "あんな + Noun", "category": "Demonstrative", "examples": [{"japanese": "あんな家が好きです。", "reading": "あんないえがすきです", "english": "I like that kind of house."}] },
        { "grammar": "どう", "meaning": "How / In what way", "formation": "Question word", "category": "Interrogative", "examples": [{"japanese": "テストはどうでしたか。", "reading": "てすとはどうでしたか", "english": "How was the test?"}] },
        { "grammar": "いかが", "meaning": "How (Polite)", "formation": "Question word", "category": "Interrogative", "examples": [{"japanese": "お茶はいかがですか。", "reading": "おちゃはいかがですか", "english": "How about some tea?"}] },
        { "grammar": "そして", "meaning": "And (joins sentences)", "formation": "Sentence 1. そして Sentence 2.", "category": "Conjunction", "examples": [{"japanese": "食べました。そして、寝ました。", "reading": "たべました。そして、ねました", "english": "I ate. And then I slept."}] },
        { "grammar": "それから", "meaning": "After that / And then", "formation": "Sentence 1. それから Sentence 2.", "category": "Conjunction", "examples": [{"japanese": "本を読みました。それから、出かけました。", "reading": "ほんをよみました。それから、でかけました", "english": "I read a book. After that, I went out."}] },
        { "grammar": "でも", "meaning": "But", "formation": "Sentence 1. でも Sentence 2.", "category": "Conjunction", "examples": [{"japanese": "高いです。でも、買います。", "reading": "たかいです。でも、かいます", "english": "It is expensive. But, I will buy it."}] },
        { "grammar": "ですから", "meaning": "Therefore / So", "formation": "Sentence 1. ですから Sentence 2.", "category": "Conjunction", "examples": [{"japanese": "雨です。ですから、行きません。", "reading": "あめです。ですから、いきません", "english": "It is raining. Therefore, I will not go."}] },
        { "grammar": "だから", "meaning": "So / Therefore (Casual)", "formation": "Sentence 1. だから Sentence 2.", "category": "Conjunction", "examples": [{"japanese": "時間がない。だから走る。", "reading": "じかんがない。だからはしる", "english": "I have no time. So I run."}] },
        { "grammar": "じゃあ / では", "meaning": "Well then", "formation": "じゃあ、+ Sentence", "category": "Conjunction", "examples": [{"japanese": "じゃあ、また明日。", "reading": "じゃあ、またあした", "english": "Well then, see you tomorrow."}] },
        { "grammar": "たくさん", "meaning": "A lot / Many", "formation": "たくさん + Verb", "category": "Adverb", "examples": [{"japanese": "たくさん食べました。", "reading": "たくさんたべました", "english": "I ate a lot."}] },
        { "grammar": "少し (すこし)", "meaning": "A little", "formation": "少し + Verb/Adjective", "category": "Adverb", "examples": [{"japanese": "少し寒いです。", "reading": "すこしさむいです", "english": "It is a little cold."}] },
        { "grammar": "ちょっと", "meaning": "A little / A moment", "formation": "ちょっと + Verb/Adjective", "category": "Adverb", "examples": [{"japanese": "ちょっと待ってください。", "reading": "ちょっとまってください", "english": "Please wait a moment."}] },
        { "grammar": "とても", "meaning": "Very", "formation": "とても + Adjective", "category": "Adverb", "examples": [{"japanese": "とても大きいです。", "reading": "とてもおおきいです", "english": "It is very big."}] },
        { "grammar": "たいへん", "meaning": "Very / Extremely", "formation": "たいへん + Adjective", "category": "Adverb", "examples": [{"japanese": "たいへん面白いです。", "reading": "たいへんおもしろいです", "english": "It is extremely interesting."}] },
        { "grammar": "もっと", "meaning": "More", "formation": "もっと + Verb/Adjective", "category": "Adverb", "examples": [{"japanese": "もっとゆっくり話してください。", "reading": "もっとゆっくりはなしてください", "english": "Please speak more slowly."}] },
        { "grammar": "ずっと", "meaning": "By far / All along", "formation": "ずっと + Adjective/Verb", "category": "Adverb", "examples": [{"japanese": "ずっと好きでした。", "reading": "ずっとすきでした", "english": "I have liked you all along."}] },
        { "grammar": "たぶん", "meaning": "Probably / Perhaps", "formation": "たぶん + Sentence", "category": "Adverb", "examples": [{"japanese": "たぶん雨が降ります。", "reading": "たぶんあめがふります", "english": "It will probably rain."}] },
        { "grammar": "きっと", "meaning": "Surely / Certainly", "formation": "きっと + Sentence", "category": "Adverb", "examples": [{"japanese": "きっと来ます。", "reading": "きっときます", "english": "They will surely come."}] },
        { "grammar": "ちょうど", "meaning": "Exactly / Just", "formation": "ちょうど + Time/Noun", "category": "Adverb", "examples": [{"japanese": "ちょうど三時です。", "reading": "ちょうどさんじです", "english": "It is exactly 3 o'clock."}] },
        { "grammar": "いつ", "meaning": "When", "formation": "Question word", "category": "Interrogative", "examples": [{"japanese": "いつ行きますか。", "reading": "いついきますか", "english": "When will you go?"}] },
        { "grammar": "だれ", "meaning": "Who", "formation": "Question word", "category": "Interrogative", "examples": [{"japanese": "だれが来ますか。", "reading": "だれがきますか", "english": "Who is coming?"}] },
        { "grammar": "どなた", "meaning": "Who (Polite)", "formation": "Question word", "category": "Interrogative", "examples": [{"japanese": "あの方はどなたですか。", "reading": "あのかたはどなたですか", "english": "Who is that person?"}] },
        { "grammar": "いくら", "meaning": "How much (Price)", "formation": "Question word", "category": "Interrogative", "examples": [{"japanese": "これはいくらですか。", "reading": "これはいくらですか", "english": "How much is this?"}] },
        { "grammar": "いくつ", "meaning": "How many / How old", "formation": "Question word", "category": "Interrogative", "examples": [{"japanese": "りんごをいくつ買いますか。", "reading": "りんごをいくつかいますか", "english": "How many apples will you buy?"}] },
        { "grammar": "なぜ", "meaning": "Why (Formal)", "formation": "Question word", "category": "Interrogative", "examples": [{"japanese": "なぜ来ないんですか。", "reading": "なぜこないんですか", "english": "Why aren't you coming?"}] },
        { "grammar": "どうやって", "meaning": "How / In what way", "formation": "Question word + Verb", "category": "Interrogative", "examples": [{"japanese": "どうやって行きますか。", "reading": "どうやっていきますか", "english": "How will you get there?"}] },
        { "grammar": "どのくらい / どのぐらい", "meaning": "How long / How much", "formation": "Question word", "category": "Interrogative", "examples": [{"japanese": "どのくらいかかりますか。", "reading": "どのくらいかかりますか", "english": "How long will it take?"}] },
        { "grammar": "いつか", "meaning": "Sometime", "formation": "Question word + か", "category": "Pronoun", "examples": [{"japanese": "いつか日本へ行きたいです。", "reading": "いつかにほんへいきたいです", "english": "I want to go to Japan sometime."}] },
        { "grammar": "どこか", "meaning": "Somewhere", "formation": "Question word + か", "category": "Pronoun", "examples": [{"japanese": "どこかへ行きますか。", "reading": "どこかへいきますか", "english": "Are you going somewhere?"}] },
        { "grammar": "なにか", "meaning": "Something", "formation": "Question word + か", "category": "Pronoun", "examples": [{"japanese": "なにか食べますか。", "reading": "なにかたべますか", "english": "Will you eat something?"}] },
        { "grammar": "今 (いま)", "meaning": "Now", "formation": "Time word", "category": "Adverb", "examples": [{"japanese": "今、忙しいです。", "reading": "いま、いそがしいです", "english": "I am busy now."}] },
        { "grammar": "すぐ", "meaning": "Immediately", "formation": "すぐ + Verb", "category": "Adverb", "examples": [{"japanese": "すぐ行きます。", "reading": "すぐいきます", "english": "I will go immediately."}] },
        { "grammar": "もうすぐ", "meaning": "Soon", "formation": "もうすぐ + Verb", "category": "Adverb", "examples": [{"japanese": "もうすぐ春です。", "reading": "もうすぐはるです", "english": "It will be spring soon."}] },
        { "grammar": "さっき", "meaning": "A little while ago", "formation": "さっき + Past Verb", "category": "Adverb", "examples": [{"japanese": "さっき食べました。", "reading": "さっきたべました", "english": "I ate a little while ago."}] },
        { "grammar": "あとで", "meaning": "Later", "formation": "あとで + Verb", "category": "Adverb", "examples": [{"japanese": "あとで電話します。", "reading": "あとででんわします", "english": "I will call you later."}] },
        { "grammar": "最近 (さいきん)", "meaning": "Recently", "formation": "最近 + Sentence", "category": "Adverb", "examples": [{"japanese": "最近、寒いです。", "reading": "さいきん、さむいです", "english": "It has been cold recently."}] },
        { "grammar": "〜ね", "meaning": "Seeking agreement / Isn't it?", "formation": "Sentence + ね", "category": "Particle", "examples": [{"japanese": "いい天気ですね。", "reading": "いいてんきですね", "english": "Nice weather, isn't it?"}] },
        { "grammar": "〜よ", "meaning": "Assertion / Informing", "formation": "Sentence + よ", "category": "Particle", "examples": [{"japanese": "美味しいですよ。", "reading": "おいしいですよ", "english": "It's delicious, you know."}] },
        { "grammar": "〜よね", "meaning": "Soft assertion / Agreement", "formation": "Sentence + よね", "category": "Particle", "examples": [{"japanese": "これ、高いよね。", "reading": "これ、たかいよね", "english": "This is expensive, right?"}] },
        { "grammar": "い-Adj + くて", "meaning": "And (Connecting I-adjectives)", "formation": "Drop い + くて", "category": "Adjective", "examples": [{"japanese": "安くて美味しいです。", "reading": "やすくておいしいです", "english": "It is cheap and delicious."}] },
        { "grammar": "な-Adj + で", "meaning": "And (Connecting Na-adjectives)", "formation": "Na-adj root + で", "category": "Adjective", "examples": [{"japanese": "静かで綺麗です。", "reading": "しずかできれいです", "english": "It is quiet and beautiful."}] },
        { "grammar": "Noun + で (Connection)", "meaning": "And (Connecting Nouns)", "formation": "Noun + で", "category": "Noun", "examples": [{"japanese": "学生で、二十歳です。", "reading": "がくせいで、はたちです", "english": "I am a student and 20 years old."}] },
        { "grammar": "お〜", "meaning": "Polite prefix (Native Japanese)", "formation": "お + Noun", "category": "Prefix", "examples": [{"japanese": "お金", "reading": "おかね", "english": "Money"}] },
        { "grammar": "ご〜", "meaning": "Polite prefix (Sino-Japanese)", "formation": "ご + Noun", "category": "Prefix", "examples": [{"japanese": "ご家族", "reading": "ごかぞく", "english": "Family"}] },
        { "grammar": "〜さん", "meaning": "Mr. / Ms.", "formation": "Name + さん", "category": "Suffix", "examples": [{"japanese": "田中さん", "reading": "たなかさん", "english": "Mr./Ms. Tanaka"}] },
        { "grammar": "〜ちゃん", "meaning": "Cute suffix for children/friends", "formation": "Name + ちゃん", "category": "Suffix", "examples": [{"japanese": "マリアちゃん", "reading": "まりあちゃん", "english": "Little Maria"}] },
        { "grammar": "〜くん", "meaning": "Suffix for young males", "formation": "Name + くん", "category": "Suffix", "examples": [{"japanese": "太郎くん", "reading": "たろうくん", "english": "Taro-kun"}] },
        { "grammar": "〜たち", "meaning": "Plural suffix for people", "formation": "Noun/Pronoun + たち", "category": "Suffix", "examples": [{"japanese": "私たち", "reading": "わたしたち", "english": "We / Us"}] },
        { "grammar": "〜ごろ", "meaning": "Around (Time)", "formation": "Time + ごろ", "category": "Suffix", "examples": [{"japanese": "九時ごろ帰ります。", "reading": "くじごろかえります", "english": "I will return around 9 o'clock."}] },
        { "grammar": "〜中 (じゅう)", "meaning": "Throughout (Time or Space)", "formation": "Noun + じゅう", "category": "Suffix", "examples": [{"japanese": "一日中寝ました。", "reading": "いちにちじゅうねました", "english": "I slept all day long."}] },
        { "grammar": "〜中 (ちゅう)", "meaning": "In the middle of ~", "formation": "Noun + ちゅう", "category": "Suffix", "examples": [{"japanese": "授業中です。", "reading": "じゅぎょうちゅうです", "english": "I am in the middle of class."}] },
        { "grammar": "〜には", "meaning": "As for in/at (Focus)", "formation": "Noun + には", "category": "Particle", "examples": [{"japanese": "日本には山が多いです。", "reading": "にほんにはやまがおおいです", "english": "As for in Japan, there are many mountains."}] },
        { "grammar": "〜では", "meaning": "As for at/by (Focus)", "formation": "Noun + では", "category": "Particle", "examples": [{"japanese": "学校では走りません。", "reading": "がっこうでははしりません", "english": "As for at school, do not run."}] },
        { "grammar": "〜へは", "meaning": "As for towards (Focus)", "formation": "Noun + へは", "category": "Particle", "examples": [{"japanese": "東京へは行きません。", "reading": "とうきょうへはいきません", "english": "As for to Tokyo, I will not go."}] },
        { "grammar": "〜からは", "meaning": "As for from (Focus)", "formation": "Noun + からは", "category": "Particle", "examples": [{"japanese": "明日からは勉強します。", "reading": "あしたからはべんきょうします", "english": "As for from tomorrow, I will study."}] },
        { "grammar": "〜までは", "meaning": "As for until (Focus)", "formation": "Noun + までは", "category": "Particle", "examples": [{"japanese": "九時までは家にいます。", "reading": "くじまではいえにいます", "english": "As for until 9, I will be at home."}] },
        { "grammar": "A や B など", "meaning": "A, B, and so on", "formation": "A や B + など", "category": "Particle", "examples": [{"japanese": "本やペンなどがあります。", "reading": "ほんやぺんなどがあります", "english": "There are books, pens, and so on."}] },
        { "grammar": "〜時間", "meaning": "Hours counter (Duration)", "formation": "Number + 時間", "category": "Counter", "examples": [{"japanese": "三時間勉強しました。", "reading": "さんじかんべんきょうしました", "english": "I studied for 3 hours."}] },
        { "grammar": "〜週間", "meaning": "Weeks counter (Duration)", "formation": "Number + 週間", "category": "Counter", "examples": [{"japanese": "二週間旅行します。", "reading": "にしゅうかんりょこうします", "english": "I will travel for 2 weeks."}] },
        { "grammar": "〜ヶ月", "meaning": "Months counter (Duration)", "formation": "Number + ヶ月", "category": "Counter", "examples": [{"japanese": "三ヶ月休みます。", "reading": "さんかげつやすみます", "english": "I will rest for 3 months."}] },
        { "grammar": "〜年間", "meaning": "Years counter (Duration)", "formation": "Number + 年間", "category": "Counter", "examples": [{"japanese": "一年間日本にいました。", "reading": "いちねんかんにほんにいました", "english": "I was in Japan for 1 year."}] },
        { "grammar": "〜歳 (さい)", "meaning": "Age counter", "formation": "Number + 歳", "category": "Counter", "examples": [{"japanese": "二十歳です。", "reading": "はたちです", "english": "I am 20 years old."}] },
        { "grammar": "V-たことがあります", "meaning": "Experience: Have done ~", "formation": "Ta form + ことがあります", "category": "Expression", "examples": [{"japanese": "寿司を食べたことがあります。", "reading": "すしをたべたことがあります", "english": "I have eaten sushi before."}] },
        { "grammar": "V-ることがあります", "meaning": "There are times when ~", "formation": "Dictionary form + ことがあります", "category": "Expression", "examples": [{"japanese": "バスで学校に行くことがあります。", "reading": "ばすでがっこうにいくことがあります", "english": "There are times I go to school by bus."}] },
        { "grammar": "〜でしょう？ (Rising)", "meaning": "Right? / Seeking confirmation", "formation": "Sentence + でしょう？", "category": "Expression", "examples": [{"japanese": "美味しいでしょう？", "reading": "おいしいでしょう", "english": "It's delicious, right?"}] },
        { "grammar": "〜前 (まえ)", "meaning": "Before (Noun)", "formation": "Noun + の + 前に", "category": "Expression", "examples": [{"japanese": "テストの前に勉強します。", "reading": "てすとのまえにべんきょうします", "english": "I study before the test."}] },
        { "grammar": "〜後 (あと)", "meaning": "After (Noun)", "formation": "Noun + の + 後で", "category": "Expression", "examples": [{"japanese": "仕事の後で飲みましょう。", "reading": "しごとのあとでのみましょう", "english": "Let's drink after work."}] },
        { "grammar": "V-る前", "meaning": "Before doing ~", "formation": "Dictionary form + 前に", "category": "Expression", "examples": [{"japanese": "寝る前に本を読みます。", "reading": "ねるまえにほんをよみます", "english": "I read a book before sleeping."}] },
        { "grammar": "V-た後", "meaning": "After doing ~", "formation": "Ta form + 後で", "category": "Expression", "examples": [{"japanese": "食べた後で寝ました。", "reading": "たべたあとでねました", "english": "I slept after I ate."}] },
        { "grammar": "〜時 (とき)", "meaning": "When / Time", "formation": "Sentence + 時", "category": "Noun", "examples": [{"japanese": "子供の時、よく遊びました。", "reading": "こどものとき、よくあそびました", "english": "When I was a child, I played often."}] },
        { "grammar": "V-るとき", "meaning": "When doing ~", "formation": "Dictionary form + とき", "category": "Expression", "examples": [{"japanese": "寝るとき、電気を消します。", "reading": "ねるとき、でんきをけします", "english": "When I sleep, I turn off the lights."}] },
        { "grammar": "V-たとき", "meaning": "When I did ~", "formation": "Ta form + とき", "category": "Expression", "examples": [{"japanese": "日本に行ったとき、カメラを買いました。", "reading": "にほんへいったとき、かめらをかいました", "english": "When I went to Japan, I bought a camera."}] },
        { "grammar": "い-Adj + とき", "meaning": "When it is (I-adj)", "formation": "I-adj + とき", "category": "Expression", "examples": [{"japanese": "忙しいとき、休みません。", "reading": "いそがしいとき、やすみません", "english": "When I am busy, I don't rest."}] },
        { "grammar": "な-Adj + なとき", "meaning": "When it is (Na-adj)", "formation": "Na-adj + なとき", "category": "Expression", "examples": [{"japanese": "暇なとき、映画を見ます。", "reading": "ひまなとき、えいがをみます", "english": "When I am free, I watch movies."}] },
        { "grammar": "Noun + のとき", "meaning": "When it is (Noun)", "formation": "Noun + のとき", "category": "Expression", "examples": [{"japanese": "病気のとき、病院へ行きます。", "reading": "びょうきのとき、びょういんへいきます", "english": "When I am sick, I go to the hospital."}] },
        { "grammar": "V-ながら", "meaning": "While doing ~", "formation": "Verb stem + ながら", "category": "Conjunction", "examples": [{"japanese": "音楽を聞きながら勉強します。", "reading": "おんがくをききながらべんきょうします", "english": "I study while listening to music."}] },
        { "grammar": "〜について", "meaning": "About / Concerning", "formation": "Noun + について", "category": "Expression", "examples": [{"japanese": "日本について勉強します。", "reading": "にほんについてべんきょうします", "english": "I study about Japan."}] },
        { "grammar": "V-方 (かた)", "meaning": "How to do ~", "formation": "Verb stem + 方", "category": "Expression", "examples": [{"japanese": "この漢字の読み方がわかりません。", "reading": "このかんじのよみかたがわかりません", "english": "I don't know how to read this Kanji."}] },
        { "grammar": "だんだん", "meaning": "Gradually", "formation": "だんだん + Sentence", "category": "Adverb", "examples": [{"japanese": "だんだん寒くなりました。", "reading": "だんだんさむくなりました", "english": "It gradually became cold."}] },
        { "grammar": "V-ましょうか (Offering)", "meaning": "Let me do ~ for you", "formation": "Verb stem + ましょうか", "category": "Expression", "examples": [{"japanese": "荷物を持ちましょうか。", "reading": "にもつをもちましょうか", "english": "Shall I carry your luggage?"}] },
        { "grammar": "〜語 (ご)", "meaning": "Language suffix", "formation": "Country + 語", "category": "Suffix", "examples": [{"japanese": "日本語を話します。", "reading": "にほんごをはなします", "english": "I speak Japanese."}] },
        { "grammar": "〜人 (じん)", "meaning": "Nationality suffix", "formation": "Country + 人", "category": "Suffix", "examples": [{"japanese": "アメリカ人です。", "reading": "あめりかじんです", "english": "I am American."}] },
        { "grammar": "〜年生 (ねんせい)", "meaning": "School year level", "formation": "Number + 年生", "category": "Suffix", "examples": [{"japanese": "一年生です。", "reading": "いちねんせいです", "english": "I am a first-year student."}] },
        { "grammar": "〜番 (ばん)", "meaning": "Number / Rank", "formation": "Number + 番", "category": "Counter", "examples": [{"japanese": "一番好きです。", "reading": "いちばんすきです", "english": "I like it the best (number 1)."}] },
        { "grammar": "〜円 (えん)", "meaning": "Yen (Currency)", "formation": "Number + 円", "category": "Counter", "examples": [{"japanese": "百円です。", "reading": "ひゃくえんです", "english": "It is 100 yen."}] },
        { "grammar": "〜半 (はん)", "meaning": "Half (Time)", "formation": "Time + 半", "category": "Suffix", "examples": [{"japanese": "四時半です。", "reading": "よじはんです", "english": "It is 4:30."}] },
        { "grammar": "〜分 (ふん/ぷん)", "meaning": "Minute counter", "formation": "Number + 分", "category": "Counter", "examples": [{"japanese": "十分待ちます。", "reading": "じゅっぷんまちます", "english": "I will wait 10 minutes."}] },
        { "grammar": "一つ (ひとつ)", "meaning": "One thing (General)", "formation": "Counter", "category": "Counter", "examples": [{"japanese": "一つください。", "reading": "ひとつください", "english": "Please give me one."}] },
        { "grammar": "二つ (ふたつ)", "meaning": "Two things (General)", "formation": "Counter", "category": "Counter", "examples": [{"japanese": "りんごを二つ買いました。", "reading": "りんごをふたつかいました", "english": "I bought two apples."}] },
        { "grammar": "三つ (みっつ)", "meaning": "Three things (General)", "formation": "Counter", "category": "Counter", "examples": [{"japanese": "三つあります。", "reading": "みっつあります", "english": "There are three."}] },
        { "grammar": "四つ (よっつ)", "meaning": "Four things (General)", "formation": "Counter", "category": "Counter", "examples": [{"japanese": "四つ食べました。", "reading": "よっつたべました", "english": "I ate four."}] },
        { "grammar": "五つ (いつつ)", "meaning": "Five things (General)", "formation": "Counter", "category": "Counter", "examples": [{"japanese": "五つください。", "reading": "いつつください", "english": "Please give me five."}] },
        { "grammar": "六つ (むっつ)", "meaning": "Six things (General)", "formation": "Counter", "category": "Counter", "examples": [{"japanese": "箱が六つあります。", "reading": "はこがむっつあります", "english": "There are six boxes."}] },
        { "grammar": "七つ (ななつ)", "meaning": "Seven things (General)", "formation": "Counter", "category": "Counter", "examples": [{"japanese": "七つ買いました。", "reading": "ななつかいました", "english": "I bought seven."}] },
        { "grammar": "八つ (やっつ)", "meaning": "Eight things (General)", "formation": "Counter", "category": "Counter", "examples": [{"japanese": "八つあります。", "reading": "やっつあります", "english": "There are eight."}] },
        { "grammar": "九つ (ここのつ)", "meaning": "Nine things (General)", "formation": "Counter", "category": "Counter", "examples": [{"japanese": "九つ食べました。", "reading": "ここのつたべました", "english": "I ate nine."}] },
        { "grammar": "十 (とお)", "meaning": "Ten things (General)", "formation": "Counter", "category": "Counter", "examples": [{"japanese": "十ください。", "reading": "とおください", "english": "Please give me ten."}] },
        { "grammar": "一人 (ひとり)", "meaning": "One person", "formation": "Counter", "category": "Counter", "examples": [{"japanese": "一人で行きます。", "reading": "ひとりでいきます", "english": "I will go alone."}] },
        { "grammar": "二人 (ふたり)", "meaning": "Two people", "formation": "Counter", "category": "Counter", "examples": [{"japanese": "二人で来ました。", "reading": "ふたりできました", "english": "Two of us came."}] },
        { "grammar": "四人 (よにん)", "meaning": "Four people", "formation": "Counter", "category": "Counter", "examples": [{"japanese": "家族は四人です。", "reading": "かぞくはよにんです", "english": "My family has four people."}] },
        { "grammar": "一日 (ついたち)", "meaning": "First day of the month", "formation": "Counter", "category": "Counter", "examples": [{"japanese": "五月一日です。", "reading": "ごがつついたちです", "english": "It is May 1st."}] },
        { "grammar": "二日 (ふつか)", "meaning": "Second day of the month", "formation": "Counter", "category": "Counter", "examples": [{"japanese": "二日に帰ります。", "reading": "ふつかにかえります", "english": "I will return on the 2nd."}] },
        { "grammar": "三日 (みっか)", "meaning": "Third day of the month", "formation": "Counter", "category": "Counter", "examples": [{"japanese": "三日休みます。", "reading": "みっかやすみます", "english": "I will rest for 3 days."}] },
        { "grammar": "四日 (よっか)", "meaning": "Fourth day of the month", "formation": "Counter", "category": "Counter", "examples": [{"japanese": "四日に行きます。", "reading": "よっかにいきます", "english": "I will go on the 4th."}] },
        { "grammar": "五日 (いつか)", "meaning": "Fifth day of the month", "formation": "Counter", "category": "Counter", "examples": [{"japanese": "五日に来てください。", "reading": "いつかにきてください", "english": "Please come on the 5th."}] },
        { "grammar": "六日 (むいか)", "meaning": "Sixth day of the month", "formation": "Counter", "category": "Counter", "examples": [{"japanese": "六日かかります。", "reading": "むいかかかります", "english": "It will take 6 days."}] },
        { "grammar": "七日 (なのか)", "meaning": "Seventh day of the month", "formation": "Counter", "category": "Counter", "examples": [{"japanese": "七日です。", "reading": "なのかです", "english": "It is the 7th."}] },
        { "grammar": "八日 (ようか)", "meaning": "Eighth day of the month", "formation": "Counter", "category": "Counter", "examples": [{"japanese": "八日からです。", "reading": "ようかからです", "english": "It starts from the 8th."}] },
        { "grammar": "九日 (ここのか)", "meaning": "Ninth day of the month", "formation": "Counter", "category": "Counter", "examples": [{"japanese": "九日に会います。", "reading": "ここのかにあいます", "english": "I will meet on the 9th."}] },
        { "grammar": "十日 (とおか)", "meaning": "Tenth day of the month", "formation": "Counter", "category": "Counter", "examples": [{"japanese": "十日になります。", "reading": "とおかになります", "english": "It will be the 10th."}] },
        { "grammar": "十四日 (じゅうよっか)", "meaning": "Fourteenth day of the month", "formation": "Counter", "category": "Counter", "examples": [{"japanese": "十四日は暇です。", "reading": "じゅうよっかはひまです", "english": "I am free on the 14th."}] },
        { "grammar": "二十日 (はつか)", "meaning": "Twentieth day of the month", "formation": "Counter", "category": "Counter", "examples": [{"japanese": "二十日はテストです。", "reading": "はつかはてすとです", "english": "The 20th is a test."}] },
        { "grammar": "二十四日 (にじゅうよっか)", "meaning": "Twenty-fourth day of the month", "formation": "Counter", "category": "Counter", "examples": [{"japanese": "二十四日に行きます。", "reading": "にじゅうよっかにいきます", "english": "I will go on the 24th."}] },
        { "grammar": "〜の上に", "meaning": "On top of / Above", "formation": "Noun + の上に", "category": "Position", "examples": [{"japanese": "机の上にあります。", "reading": "つくえのうえにあります", "english": "It is on the desk."}] },
        { "grammar": "〜の下に", "meaning": "Below / Under", "formation": "Noun + の下に", "category": "Position", "examples": [{"japanese": "椅子の下に猫がいます。", "reading": "いすのしたにねこがいます", "english": "There is a cat under the chair."}] },
        { "grammar": "〜の前に", "meaning": "In front of", "formation": "Noun + の前に", "category": "Position", "examples": [{"japanese": "駅の前にいます。", "reading": "えきのまえにいます", "english": "I am in front of the station."}] },
        { "grammar": "〜の後ろに", "meaning": "Behind", "formation": "Noun + の後ろに", "category": "Position", "examples": [{"japanese": "家の後ろに山があります。", "reading": "いえのうしろにやまがあります", "english": "There is a mountain behind the house."}] },
        { "grammar": "〜の右に", "meaning": "To the right of", "formation": "Noun + の右に", "category": "Position", "examples": [{"japanese": "銀行の右にあります。", "reading": "ぎんこうのみぎにあります", "english": "It is to the right of the bank."}] },
        { "grammar": "〜の左に", "meaning": "To the left of", "formation": "Noun + の左に", "category": "Position", "examples": [{"japanese": "テレビの左にあります。", "reading": "てれびのひだりにあります", "english": "It is to the left of the TV."}] },
        { "grammar": "〜の中に", "meaning": "Inside", "formation": "Noun + の中に", "category": "Position", "examples": [{"japanese": "箱の中にあります。", "reading": "はこのなかにあります", "english": "It is inside the box."}] },
        { "grammar": "〜の外に", "meaning": "Outside of", "formation": "Noun + の外に", "category": "Position", "examples": [{"japanese": "部屋の外にいます。", "reading": "へやのそとにいます", "english": "I am outside the room."}] },
        { "grammar": "〜の隣に", "meaning": "Next to", "formation": "Noun + の隣に", "category": "Position", "examples": [{"japanese": "学校の隣にあります。", "reading": "がっこうのとなりにあります", "english": "It is next to the school."}] },
        { "grammar": "〜の近くに", "meaning": "Near / Close to", "formation": "Noun + の近くに", "category": "Position", "examples": [{"japanese": "海の近くに住んでいます。", "reading": "うみのちかくにすんでいます", "english": "I live near the sea."}] },
        { "grammar": "〜の間に", "meaning": "Between", "formation": "Noun + と + Noun + の間に", "category": "Position", "examples": [{"japanese": "郵便局と銀行の間にあります。", "reading": "ゆうびんきょくとぎんこうのあいだにあります", "english": "It is between the post office and the bank."}] },
        { "grammar": "毎日 (まいにち)", "meaning": "Every day", "formation": "Adverb", "category": "Time", "examples": [{"japanese": "毎日走ります。", "reading": "まいにちはしります", "english": "I run every day."}] },
        { "grammar": "毎朝 (まいあさ)", "meaning": "Every morning", "formation": "Adverb", "category": "Time", "examples": [{"japanese": "毎朝コーヒーを飲みます。", "reading": "まいあさこーひーをのみます", "english": "I drink coffee every morning."}] },
        { "grammar": "毎晩 (まいばん)", "meaning": "Every evening", "formation": "Adverb", "category": "Time", "examples": [{"japanese": "毎晩本を読みます。", "reading": "まいばんほんをよみます", "english": "I read a book every evening."}] },
        { "grammar": "毎週 (まいしゅう)", "meaning": "Every week", "formation": "Adverb", "category": "Time", "examples": [{"japanese": "毎週映画を見ます。", "reading": "まいしゅうえいがをみます", "english": "I watch a movie every week."}] },
        { "grammar": "毎月 (まいつき)", "meaning": "Every month", "formation": "Adverb", "category": "Time", "examples": [{"japanese": "毎月東京へ行きます。", "reading": "まいつきとうきょうへいきます", "english": "I go to Tokyo every month."}] },
        { "grammar": "毎年 (まいとし)", "meaning": "Every year", "formation": "Adverb", "category": "Time", "examples": [{"japanese": "毎年旅行します。", "reading": "まいとしりょこうします", "english": "I travel every year."}] },
        { "grammar": "今日 (きょう)", "meaning": "Today", "formation": "Time", "category": "Time", "examples": [{"japanese": "今日は暑いです。", "reading": "きょうはあついです", "english": "Today is hot."}] },
        { "grammar": "明日 (あした)", "meaning": "Tomorrow", "formation": "Time", "category": "Time", "examples": [{"japanese": "明日は休みです。", "reading": "あしたはやすみです", "english": "Tomorrow is a holiday."}] },
        { "grammar": "昨日 (きのう)", "meaning": "Yesterday", "formation": "Time", "category": "Time", "examples": [{"japanese": "昨日は雨でした。", "reading": "きのうはあめでした", "english": "Yesterday was raining."}] },
        { "grammar": "今週 (こんしゅう)", "meaning": "This week", "formation": "Time", "category": "Time", "examples": [{"japanese": "今週は忙しいです。", "reading": "こんしゅうはいそがしいです", "english": "I am busy this week."}] },
        { "grammar": "来週 (らいしゅう)", "meaning": "Next week", "formation": "Time", "category": "Time", "examples": [{"japanese": "来週テストがあります。", "reading": "らいしゅうてすとがあります", "english": "There is a test next week."}] },
        { "grammar": "先週 (せんしゅう)", "meaning": "Last week", "formation": "Time", "category": "Time", "examples": [{"japanese": "先週買いました。", "reading": "せんしゅうかいました", "english": "I bought it last week."}] },
        { "grammar": "今月 (こんげつ)", "meaning": "This month", "formation": "Time", "category": "Time", "examples": [{"japanese": "今月日本へ来ました。", "reading": "こんげつにほんへきました", "english": "I came to Japan this month."}] },
        { "grammar": "来月 (らいげつ)", "meaning": "Next month", "formation": "Time", "category": "Time", "examples": [{"japanese": "来月帰ります。", "reading": "らいげつかえります", "english": "I will return next month."}] },
        { "grammar": "先月 (せんげつ)", "meaning": "Last month", "formation": "Time", "category": "Time", "examples": [{"japanese": "先月会いました。", "reading": "せんげつあいました", "english": "We met last month."}] },
        { "grammar": "今年 (ことし)", "meaning": "This year", "formation": "Time", "category": "Time", "examples": [{"japanese": "今年は寒いです。", "reading": "ことしはさむいです", "english": "It is cold this year."}] },
        { "grammar": "来年 (らいねん)", "meaning": "Next year", "formation": "Time", "category": "Time", "examples": [{"japanese": "来年大学生になります。", "reading": "らいねんだいがくせいになります", "english": "I will become a university student next year."}] },
        { "grammar": "去年 (きょねん)", "meaning": "Last year", "formation": "Time", "category": "Time", "examples": [{"japanese": "去年の夏", "reading": "きょねんのなつ", "english": "Last year's summer"}] },
        { "grammar": "今朝 (けさ)", "meaning": "This morning", "formation": "Time", "category": "Time", "examples": [{"japanese": "今朝起きました。", "reading": "けさおきました", "english": "I woke up this morning."}] },
        { "grammar": "今晩 (こんばん)", "meaning": "This evening / Tonight", "formation": "Time", "category": "Time", "examples": [{"japanese": "今晩食べましょう。", "reading": "こんばんたべましょう", "english": "Let's eat tonight."}] },
        { "grammar": "どこへ", "meaning": "To where", "formation": "どこ + へ", "category": "Interrogative", "examples": [{"japanese": "どこへ行きますか。", "reading": "どこへいきますか", "english": "Where are you going?"}] },
        { "grammar": "どこで", "meaning": "At where", "formation": "どこ + で", "category": "Interrogative", "examples": [{"japanese": "どこで買いましたか。", "reading": "どこでかいましたか", "english": "Where did you buy it?"}] },
        { "grammar": "だれと", "meaning": "With whom", "formation": "だれ + と", "category": "Interrogative", "examples": [{"japanese": "だれと行きますか。", "reading": "だれといきますか", "english": "With whom are you going?"}] },
        { "grammar": "なんで / 何で", "meaning": "By what means", "formation": "何 + で", "category": "Interrogative", "examples": [{"japanese": "なんで来ましたか。", "reading": "なんできましたか", "english": "How (by what means) did you come?"}] },
        { "grammar": "なにを / 何を", "meaning": "What (Object)", "formation": "何 + を", "category": "Interrogative", "examples": [{"japanese": "何を食べますか。", "reading": "なにをたべますか", "english": "What will you eat?"}] },
        { "grammar": "いつから", "meaning": "From when", "formation": "いつ + から", "category": "Interrogative", "examples": [{"japanese": "いつから休みですか。", "reading": "いつからやすみですか", "english": "From when is the holiday?"}] },
        { "grammar": "いつまで", "meaning": "Until when", "formation": "いつ + まで", "category": "Interrogative", "examples": [{"japanese": "いつまで日本にいますか。", "reading": "いつまでにほんにいますか", "english": "Until when will you be in Japan?"}] },
        { "grammar": "だれも〜ない", "meaning": "Nobody", "formation": "だれも + Negative Verb", "category": "Pronoun", "examples": [{"japanese": "だれもいません。", "reading": "だれもいません", "english": "Nobody is here."}] },
        { "grammar": "どこも〜ない", "meaning": "Nowhere", "formation": "どこも + Negative Verb", "category": "Pronoun", "examples": [{"japanese": "どこも行きませんでした。", "reading": "どこもいきませんでした", "english": "I went nowhere."}] },
        { "grammar": "何も〜ない", "meaning": "Nothing", "formation": "何も + Negative Verb", "category": "Pronoun", "examples": [{"japanese": "何も食べませんでした。", "reading": "なにもたべませんでした", "english": "I ate nothing."}] },
        { "grammar": "いつも (Negative)", "meaning": "Never (with negative)", "formation": "いつも + Negative Verb", "category": "Adverb", "examples": [{"japanese": "いつも勉強しません。", "reading": "いつもべんきょうしません", "english": "I never study."}] },
        { "grammar": "A は B ですか", "meaning": "Is A B?", "formation": "Noun1 + は + Noun2 + ですか", "category": "Expression", "examples": [{"japanese": "あなたは学生ですか。", "reading": "あなたはがくせいですか", "english": "Are you a student?"}] },
        { "grammar": "A は B ではありません", "meaning": "A is not B", "formation": "Noun1 + は + Noun2 + ではありません", "category": "Expression", "examples": [{"japanese": "私は先生ではありません。", "reading": "わたしはせんせいではありません", "english": "I am not a teacher."}] },
        { "grammar": "A は B でした", "meaning": "A was B", "formation": "Noun1 + は + Noun2 + でした", "category": "Expression", "examples": [{"japanese": "昨日は休みでした。", "reading": "きのうはやすみでした", "english": "Yesterday was a holiday."}] },
        { "grammar": "A は B ではありませんでした", "meaning": "A was not B", "formation": "Noun1 + は + Noun2 + ではありませんでした", "category": "Expression", "examples": [{"japanese": "雨ではありませんでした。", "reading": "あめではありませんでした", "english": "It was not raining."}] },
        { "grammar": "A に B があります", "meaning": "There is B at A", "formation": "Place に + Object があります", "category": "Expression", "examples": [{"japanese": "部屋にテレビがあります。", "reading": "へやにてれびがあります", "english": "There is a TV in the room."}] },
        { "grammar": "A は B にあります", "meaning": "A is at B", "formation": "Object は + Place にあります", "category": "Expression", "examples": [{"japanese": "テレビは部屋にあります。", "reading": "てれびはへやにあります", "english": "The TV is in the room."}] },
        { "grammar": "V-て、V-て", "meaning": "Do ~ and then do ~", "formation": "Te-form, Te-form", "category": "Verb", "examples": [{"japanese": "起きて、ご飯を食べます。", "reading": "おきて、ごはんをたべます", "english": "I wake up and eat a meal."}] },
        { "grammar": "Noun が欲しい", "meaning": "Want a noun", "formation": "Noun + が欲しいです", "category": "Expression", "examples": [{"japanese": "車が欲しいです。", "reading": "くるまがほしいです", "english": "I want a car."}] },
        { "grammar": "い-Adj + く + Verb", "meaning": "Do ~ (Adverbial I-adj)", "formation": "Drop い + く + Verb", "category": "Expression", "examples": [{"japanese": "早く起きます。", "reading": "はやくおきます", "english": "I wake up early."}] },
        { "grammar": "な-Adj + に + Verb", "meaning": "Do ~ (Adverbial Na-adj)", "formation": "Na-adj + に + Verb", "category": "Expression", "examples": [{"japanese": "きれいに書きます。", "reading": "きれいにかきます", "english": "I write beautifully."}] },
        { "grammar": "A や B など", "meaning": "A, B, etc.", "formation": "Noun1 + や + Noun2 + など", "category": "Expression", "examples": [{"japanese": "りんごやみかんなど", "reading": "りんごやみかんなど", "english": "Apples, tangerines, etc."}] },
        { "grammar": "お + Noun", "meaning": "Polite prefix (Native words)", "formation": "お + Noun", "category": "Prefix", "examples": [{"japanese": "お水", "reading": "おみず", "english": "Water (Polite)"}] },
        { "grammar": "ご + Noun", "meaning": "Polite prefix (Sino-Japanese words)", "formation": "ご + Noun", "category": "Prefix", "examples": [{"japanese": "ご両親", "reading": "ごりょうしん", "english": "Parents (Polite)"}] },
        { "grammar": "〜について", "meaning": "About ~", "formation": "Noun + について", "category": "Expression", "examples": [{"japanese": "仕事について話します。", "reading": "しごとについてはなします", "english": "I will talk about work."}] },
        { "grammar": "〜の向こう", "meaning": "Beyond / Opposite side", "formation": "Noun + の向こう", "category": "Position", "examples": [{"japanese": "川の向こう", "reading": "かわのむこう", "english": "Beyond the river"}] },
        { "grammar": "〜の横", "meaning": "Beside / Side", "formation": "Noun + の横", "category": "Position", "examples": [{"japanese": "机の横", "reading": "つくえのよこ", "english": "Beside the desk"}] },
        { "grammar": "〜の前 (Time)", "meaning": "Before (Time)", "formation": "Time + の前", "category": "Expression", "examples": [{"japanese": "三時の前", "reading": "さんじのまえ", "english": "Before 3 o'clock"}] }
    ],

    // 5. Reading Comprehension
    reading_passages: [
        { "passage": "私の家から駅まで歩いて十分かかります。自転車で三分です。", "question": "家から駅まで自転車で何分かかりますか。", "correctAnswer": "三分", "distractors": ["十分", "五分", "十三分"], "explanation": "The text explicitly states '自転車で三分です' (3 minutes by bicycle)." },
        { "passage": "田中さんは毎朝パンを食べます。そしてコーヒーを飲みます。お茶は飲みません。", "question": "田中さんは朝、何を飲みますか。", "correctAnswer": "コーヒー", "distractors": ["お茶", "水", "牛乳"], "explanation": "The text says 'コーヒーを飲みます' (drinks coffee) and explicitly denies drinking tea." },
        { "passage": "昨日は日曜日でした。天気がよかったので、公園で友達とテニスをしました。とても楽しかったです。", "question": "昨日、どこでテニスをしましたか。", "correctAnswer": "公園", "distractors": ["学校", "家", "海"], "explanation": "The passage says '公園で友達とテニスをしました' (played tennis with a friend at the park)." },
        { "passage": "私は本を読むのが好きです。毎晩寝る前に、ベッドで三十分本を読みます。", "question": "この人はいつ本を読みますか。", "correctAnswer": "寝る前", "distractors": ["朝起きてから", "昼ごはんの後", "電車の中"], "explanation": "The text states '毎晩寝る前に... 本を読みます' (Every night before sleeping... read a book)." },
        { "passage": "佐藤さんは先週の日曜日にデパートへ行きました。新しい靴と白いシャツを買いました。", "question": "佐藤さんはデパートで何を買いましたか。", "correctAnswer": "靴とシャツ", "distractors": ["靴とかばん", "シャツと帽子", "本と靴"], "explanation": "The passage lists '新しい靴と白いシャツ' (new shoes and a white shirt)." },
        { "passage": "私の部屋には机とベッドがあります。テレビはありません。テレビは居間（いま）にあります。", "question": "私の部屋に何がありますか。", "correctAnswer": "机とベッド", "distractors": ["机とテレビ", "テレビとベッド", "何もない"], "explanation": "The text explicitly states '机とベッドがあります' (There is a desk and a bed)." },
        { "passage": "今日はお母さんの誕生日です。私はケーキを作りました。弟は花を買いました。", "question": "誰がケーキを作りましたか。", "correctAnswer": "私", "distractors": ["お母さん", "弟", "お父さん"], "explanation": "The speaker says '私はケーキを作りました' (I made a cake)." },
        { "passage": "山田さんは犬が大好きです。でも、今アパートに住んでいますから、犬を飼うことができません。", "question": "山田さんはどうして犬を飼うことができませんか。", "correctAnswer": "アパートに住んでいるから", "distractors": ["犬が嫌いだから", "お金がないから", "時間がないから"], "explanation": "The reason given is 'アパートに住んでいますから' (Because I live in an apartment)." },
        { "passage": "私の父は医者です。毎日病院で働いています。とても忙しいです。", "question": "お父さんの仕事は何ですか。", "correctAnswer": "医者", "distractors": ["先生", "会社員", "学生"], "explanation": "The first sentence is '私の父は医者です' (My father is a doctor)." },
        { "passage": "明日から冬休みです。私は家族と一緒に北海道へスキーに行きます。", "question": "この人は冬休みにどこへ行きますか。", "correctAnswer": "北海道", "distractors": ["東京", "京都", "沖縄"], "explanation": "The text says '北海道へスキーに行きます' (going to Hokkaido to ski)." },
        { "passage": "昨日、図書館で日本語の本を借りました。今日からその本を読みます。", "question": "どこで本を借りましたか。", "correctAnswer": "図書館", "distractors": ["学校", "本屋", "友達の家"], "explanation": "The text states '図書館で日本語の本を借りました' (Borrowed a Japanese book at the library)." },
        { "passage": "今日は土曜日です。学校は休みです。でも、午後からアルバイトがあります。", "question": "今日、学校はどうですか。", "correctAnswer": "休みです", "distractors": ["あります", "午後からです", "アルバイトです"], "explanation": "The second sentence says '学校は休みです' (School is off)." },
        { "passage": "鈴木さんは英語の先生です。アメリカから来ました。日本料理が大好きです。", "question": "鈴木さんはどこの国から来ましたか。", "correctAnswer": "アメリカ", "distractors": ["イギリス", "日本", "オーストラリア"], "explanation": "The text clearly states 'アメリカから来ました' (Came from America)." },
        { "passage": "昨日の夜、熱がありましたから、薬を飲んで早く寝ました。今日は元気です。", "question": "この人は昨日の夜、どうして早く寝ましたか。", "correctAnswer": "熱があったから", "distractors": ["疲れたから", "薬を飲んだから", "元気だったから"], "explanation": "The reason given is '熱がありましたから' (Because I had a fever)." },
        { "passage": "私の趣味は音楽を聞くことです。特にクラシックが好きです。", "question": "この人の趣味は何ですか。", "correctAnswer": "音楽を聞ること", "distractors": ["歌を歌うこと", "ピアノを弾くこと", "映画を見ること"], "explanation": "The text says '私の趣味は音楽を聞くことです' (My hobby is listening to music)." },
        { "passage": "明日は友達の誕生日パーティーがあります。私はカメラを持って行きます。", "question": "明日は何がありますか。", "correctAnswer": "パーティー", "distractors": ["テスト", "旅行", "アルバイト"], "explanation": "The first sentence says '明日は友達の誕生日パーティーがあります'." },
        { "passage": "日本の夏はとても暑いです。そして、雨がたくさん降ります。", "question": "日本の夏はどうですか。", "correctAnswer": "暑くて雨が降る", "distractors": ["涼しい", "寒くて雪が降る", "暑いが雨は降らない"], "explanation": "The text describes summer as 'とても暑いです' and '雨がたくさん降ります'." },
        { "passage": "山田さんの家は駅から少し遠いです。歩いて二十分かかります。", "question": "山田さんの家は駅から近いですか。", "correctAnswer": "いいえ、遠いです", "distractors": ["はい、近いです", "とても近いです", "歩いて五分です"], "explanation": "The text says '駅から少し遠いです' (A little far from the station)." },
        { "passage": "これは私の新しい自転車です。昨日、父が買ってくれました。", "question": "誰が自転車を買いましたか。", "correctAnswer": "父", "distractors": ["私", "友達", "母"], "explanation": "The text explicitly says '父が買ってくれました' (Father bought it for me)." },
        { "passage": "私は毎朝新聞を読みます。でも、今朝は時間がなかったので、読みませんでした。", "question": "今朝、新聞を読みましたか。", "correctAnswer": "読みませんでした", "distractors": ["読みました", "明日読みます", "夜読みます"], "explanation": "The text says '今朝は時間がなかったので、読みませんでした' (I didn't read it this morning)." },
        { "passage": "あのレストランは安くておいしいです。いつも学生がたくさんいます。", "question": "あのレストランはどうして学生が多いですか。", "correctAnswer": "安くておいしいから", "distractors": ["高いから", "静かだから", "大きいから"], "explanation": "The first sentence provides the reason: '安くておいしいです'." },
        { "passage": "今週の週末は暇です。どこへも行きません。家でテレビを見ます。", "question": "今週の週末、どこへ行きますか。", "correctAnswer": "どこへも行きません", "distractors": ["海", "山", "デパート"], "explanation": "The text explicitly says 'どこへも行きません' (I won't go anywhere)." },
        { "passage": "私のカバンは黒いです。中にはノートとペンが入っています。", "question": "カバンの色は何ですか。", "correctAnswer": "黒", "distractors": ["白", "赤", "青"], "explanation": "The first sentence states '私のカバンは黒いです' (My bag is black)." },
        { "passage": "昨日、スーパーでりんごを三つと、みかんを五つ買いました。", "question": "りんごをいくつ買いましたか。", "correctAnswer": "三つ", "distractors": ["五つ", "八つ", "二つ"], "explanation": "The text says 'りんごを三つ... 買いました' (Bought 3 apples)." },
        { "passage": "私は一年前に日本へ来ました。日本の生活は楽しいですが、まだ日本語が下手です。", "question": "この人はいつ日本へ来ましたか。", "correctAnswer": "一年前", "distractors": ["昨日", "先月", "半年前"], "explanation": "The text begins with '私は一年前に日本へ来ました' (I came to Japan one year ago)." },
        { "passage": "木村さんはテニスが上手です。毎週日曜日、テニスクラブで練習しています。", "question": "木村さんはいつテニスを練習しますか。", "correctAnswer": "日曜日", "distractors": ["月曜日", "土曜日", "毎日"], "explanation": "The text says '毎週日曜日... 練習しています' (Practices every Sunday)." },
        { "passage": "今日は私の誕生日です。夜、家族と一緒にレストランで晩ご飯を食べます。", "question": "今日の夜、誰とご飯を食べますか。", "correctAnswer": "家族", "distractors": ["友達", "一人で", "先生"], "explanation": "The text says '家族と一緒に... 食べます' (Eat together with family)." },
        { "passage": "明日のテストは漢字と文法です。読解はありません。", "question": "明日のテストに何が出ますか。", "correctAnswer": "漢字と文法", "distractors": ["漢字と読解", "文法と読解", "読解だけ"], "explanation": "The text states the test is '漢字と文法です' and explicitly denies '読解' (reading comprehension)." },
        { "passage": "私は朝、シャワーを浴びてから朝ご飯を食べます。", "question": "この人はシャワーの後で何をしますか。", "correctAnswer": "朝ご飯を食べる", "distractors": ["寝る", "学校へ行く", "顔を洗う"], "explanation": "The text uses '浴びてから' (after taking a shower) followed by '朝ご飯を食べます'." },
        { "passage": "図書館は火曜日から日曜日まで開いています。月曜日は休みです。", "question": "図書館の休みは何曜日ですか。", "correctAnswer": "月曜日", "distractors": ["火曜日", "日曜日", "休みはない"], "explanation": "The text says '月曜日は休みです' (Monday is a day off)." },
        { "passage": "このバスは東京駅へ行きますか。いいえ、これは新宿へ行きます。東京駅は次のバスです。", "question": "東京駅へ行くのはどのバスですか。", "correctAnswer": "次のバス", "distractors": ["このバス", "前のバス", "バスは行かない"], "explanation": "The speaker says '東京駅は次のバスです' (Tokyo Station is the next bus)." },
        { "passage": "田中さんのお父さんは五十歳です。お母さんは四十八歳です。", "question": "田中さんのお母さんは何歳ですか。", "correctAnswer": "四十八歳", "distractors": ["五十歳", "五十八歳", "四十歳"], "explanation": "The text explicitly states 'お母さんは四十八歳です' (Mother is 48 years old)." },
        { "passage": "私は毎晩十時に寝て、朝六時に起きます。八時間寝ます。", "question": "この人は何時に起きますか。", "correctAnswer": "六時", "distractors": ["十時", "八時", "七時"], "explanation": "The text says '朝六時に起きます' (I wake up at 6 in the morning)." },
        { "passage": "会議室の前に男の人が二人、女の人が三人います。", "question": "会議室の前に全部で何人いますか。", "correctAnswer": "五人", "distractors": ["二人", "三人", "六人"], "explanation": "2 men + 3 women = 5 people (五人) in total." },
        { "passage": "私の国は今、冬です。とても寒いです。雪が降っています。", "question": "この人の国は今、どんな季節ですか。", "correctAnswer": "冬", "distractors": ["夏", "春", "秋"], "explanation": "The first sentence says '私の国は今、冬です' (My country is winter now)." },
        { "passage": "あのスーパーの野菜は安いです。でも、肉は高いです。", "question": "あのスーパーで安いのは何ですか。", "correctAnswer": "野菜", "distractors": ["肉", "魚", "果物"], "explanation": "The text explicitly says '野菜は安いです' (Vegetables are cheap)." },
        { "passage": "私は手紙を書くのが好きです。毎月、国の両親に手紙を書きます。", "question": "誰に手紙を書きますか。", "correctAnswer": "両親", "distractors": ["友達", "先生", "兄弟"], "explanation": "The text says '国の両親に手紙を書きます' (Write letters to parents in my home country)." },
        { "passage": "佐藤さんはピアノが弾けますが、ギターは弾けません。", "question": "佐藤さんができることは何ですか。", "correctAnswer": "ピアノ", "distractors": ["ギター", "両方できる", "両方できない"], "explanation": "The text says 'ピアノが弾けます' (can play piano)." },
        { "passage": "この公園には桜の木がたくさんあります。春になると、とてもきれいです。", "question": "公園がきれいになるのはいつですか。", "correctAnswer": "春", "distractors": ["夏", "秋", "冬"], "explanation": "The text says '春になると、とてもきれいです' (When spring comes, it is very beautiful)." },
        { "passage": "山田先生の授業はいつも面白いです。学生は山田先生が大好きです。", "question": "学生は山田先生についてどう思っていますか。", "correctAnswer": "大好きだ", "distractors": ["嫌いだ", "怖い", "つまらない"], "explanation": "The text concludes '学生は山田先生が大好きです' (Students love Yamada-sensei)." },
        { "passage": "私はお酒を飲みません。ジュースかお茶をお願いします。", "question": "この人はお酒を飲みますか。", "correctAnswer": "いいえ、飲みません", "distractors": ["はい、飲みます", "少し飲みます", "毎晩飲みます"], "explanation": "The text opens with '私はお酒を飲みません' (I do not drink alcohol)." },
        { "passage": "毎日三十分ぐらい日本語を勉強します。週末は二時間勉強します。", "question": "週末はどのくらい勉強しますか。", "correctAnswer": "二時間", "distractors": ["三十分", "一時間", "三時間"], "explanation": "The text explicitly states '週末は二時間勉強します' (I study for 2 hours on weekends)." },
        { "passage": "この靴は少し小さいです。もう少し大きいのはありませんか。", "question": "この人はどんな靴が欲しいですか。", "correctAnswer": "もう少し大きい靴", "distractors": ["小さい靴", "同じ靴", "赤い靴"], "explanation": "The speaker asks 'もう少し大きいのはありませんか' (Do you have a slightly larger one?)." },
        { "passage": "田中さんの趣味は映画を見ることです。アクション映画が一番好きです。", "question": "田中さんが一番好きなのはどんな映画ですか。", "correctAnswer": "アクション映画", "distractors": ["ホラー映画", "アニメ", "恋愛映画"], "explanation": "The text clearly states 'アクション映画が一番好きです'." },
        { "passage": "昨日は一日中雨でした。洗濯物が乾かなくて困りました。", "question": "昨日の天気はどうでしたか。", "correctAnswer": "雨", "distractors": ["晴れ", "曇り", "雪"], "explanation": "The text says '昨日は一日中雨でした' (It rained all day yesterday)." },
        { "passage": "私の家には猫が二匹います。黒い猫と白い猫です。", "question": "家にいる猫の色は何ですか。", "correctAnswer": "黒と白", "distractors": ["黒と赤", "白と茶色", "一匹だけ"], "explanation": "The text describes them as '黒い猫と白い猫です' (A black cat and a white cat)." },
        { "passage": "あのパン屋は朝七時に開きます。夜は八時に閉まります。", "question": "パン屋は何時に開きますか。", "correctAnswer": "朝七時", "distractors": ["夜八時", "朝六時", "朝八時"], "explanation": "The text says '朝七時に開きます' (Opens at 7 AM)." },
        { "passage": "私は毎朝りんごを半分食べます。残りは妹が食べます。", "question": "りんごの残りは誰が食べますか。", "correctAnswer": "妹", "distractors": ["私", "弟", "母"], "explanation": "The text says '残りは妹が食べます' (My younger sister eats the rest)." },
        { "passage": "先週の日曜日、家族と動物園へ行きました。たくさんの動物を見ました。", "question": "誰と動物園へ行きましたか。", "correctAnswer": "家族", "distractors": ["友達", "一人で", "先生"], "explanation": "The text states '家族と動物園へ行きました' (Went to the zoo with family)." },
        { "passage": "この携帯電話は便利ですが、とても高かったです。", "question": "携帯電話はどうでしたか。", "correctAnswer": "便利で高かった", "distractors": ["便利で安かった", "不便で高かった", "不便で安かった"], "explanation": "The text says '便利ですが、とても高かったです' (Convenient, but very expensive)." },
        { "passage": "明日は早く起きなければなりません。朝六時の電車に乗って、東京へ行きます。", "question": "明日は何時の電車に乗りますか。", "correctAnswer": "六時", "distractors": ["七時", "五時", "八時"], "explanation": "The text explicitly states '朝六時の電車に乗って' (taking the 6 AM train)." },
        { "passage": "すみません、郵便局はどこですか。あの白いビルの隣です。銀行の前です。", "question": "郵便局はどこにありますか。", "correctAnswer": "白いビルの隣", "distractors": ["白いビルの中", "黒いビルの隣", "銀行の隣"], "explanation": "The response says 'あの白いビルの隣です' (Next to that white building)." },
        { "passage": "土曜日の朝、私はいつも部屋の掃除をします。それから、服を洗います。", "question": "土曜日の朝、一番初めに何をしますか。", "correctAnswer": "部屋の掃除をする", "distractors": ["服を洗う", "朝ご飯を食べる", "買い物に行く"], "explanation": "The speaker says they clean the room, 'それから' (and then) wash clothes." },
        { "passage": "今日のお昼ごはんは、大学の食堂でうどんを食べました。三百円で、安かったです。", "question": "どこで昼ごはんを食べましたか。", "correctAnswer": "食堂", "distractors": ["レストラン", "コンビニ", "家"], "explanation": "The text states '大学の食堂でうどんを食べました' (ate udon at the university cafeteria)." },
        { "passage": "電車の中に私の傘を忘れました。赤くて、少し大きい傘です。", "question": "どんな傘を忘れましたか。", "correctAnswer": "赤くて大きい傘", "distractors": ["黒くて大きい傘", "赤くて小さい傘", "青くて新しい傘"], "explanation": "The umbrella is described as '赤くて、少し大きい傘です' (Red and a little big)." },
        { "passage": "私には兄が一人と妹が二人います。姉と弟はいません。", "question": "この人の兄弟は全部で何人ですか。", "correctAnswer": "三人", "distractors": ["二人", "四人", "五人"], "explanation": "1 older brother (兄が一人) + 2 younger sisters (妹が二人) = 3 siblings (三人)." },
        { "passage": "京都まで新幹線で二時間半かかります。バスだと夜出発して、朝着きます。", "question": "新幹線で京都までどのくらいかかりますか。", "correctAnswer": "二時間半", "distractors": ["一時間", "三時間", "夜から朝まで"], "explanation": "The text says '新幹線で二時間半かかります' (Takes two and a half hours by bullet train)." },
        { "passage": "昨日は図書館で宿題をしました。難しかったですが、全部終わりました。", "question": "宿題はどうでしたか。", "correctAnswer": "難しかった", "distractors": ["簡単だった", "終わらなかった", "面白かった"], "explanation": "The text clearly says '難しかったですが' (It was difficult, but...)." },
        { "passage": "今日はお腹が痛いです。ですから、学校を休んで病院へ行きます。", "question": "この人は今日どうして学校を休みますか。", "correctAnswer": "お腹が痛いから", "distractors": ["頭が痛いから", "熱があるから", "病院が休みだから"], "explanation": "The reason given is 'お腹が痛いです。ですから...' (My stomach hurts. Therefore...)." },
        { "passage": "私の将来の夢は、高校の先生になることです。英語を教えたいです。", "question": "この人は将来、何の先生になりたいですか。", "correctAnswer": "英語の先生", "distractors": ["日本語の先生", "数学の先生", "音楽の先生"], "explanation": "The text says '英語を教えたいです' (I want to teach English)." },
        { "passage": "マリアさんは髪が長くて、背が高いです。いつも眼鏡をかけています。", "question": "マリアさんはどんな人ですか。", "correctAnswer": "背が高くて眼鏡をかけている", "distractors": ["背が低くて眼鏡をかけている", "髪が短くて背が高い", "髪が長くて眼鏡をかけていない"], "explanation": "Described as '髪が長くて、背が高い' (long hair, tall) and '眼鏡をかけています' (wearing glasses)." },
        { "passage": "今日の天気予報です。午前中は曇りですが、午後から雨が降るでしょう。", "question": "午後の天気はどうなりますか。", "correctAnswer": "雨", "distractors": ["晴れ", "曇り", "雪"], "explanation": "The forecast says '午後から雨が降るでしょう' (It will probably rain from the afternoon)." },
        { "passage": "明日は母の日です。私は花屋で赤いカーネーションを買いました。", "question": "この人は誰のために花を買いましたか。", "correctAnswer": "母", "distractors": ["父", "先生", "友達"], "explanation": "The text mentions '明日は母の日です' (Tomorrow is Mother's Day) to explain the purchase." },
        { "passage": "このカフェのケーキはおいしいです。コーヒーと一緒に頼むと、百円安くなります。", "question": "どうすると安くなりますか。", "correctAnswer": "コーヒーと一緒に頼む", "distractors": ["ケーキだけ頼む", "お茶と一緒に頼む", "テイクアウトする"], "explanation": "The condition is 'コーヒーと一緒に頼むと' (If you order it with coffee)." },
        { "passage": "私の会社は遠いです。家から会社まで、電車とバスで一時間半かかります。", "question": "会社までどのくらいかかりますか。", "correctAnswer": "一時間半", "distractors": ["三十分", "一時間", "二時間"], "explanation": "The text explicitly states '一時間半かかります' (Takes one and a half hours)." },
        { "passage": "一番好きな科目は数学です。難しいですが、面白いからです。歴史はあまり好きではありません。", "question": "この人はどうして数学が好きですか。", "correctAnswer": "面白いから", "distractors": ["簡単だから", "先生が好きだから", "難しいから"], "explanation": "The reason is '難しいですが、面白いからです' (It is difficult, but because it is interesting)." },
        { "passage": "この本は来週の木曜日までに返してください。よろしくお願いします。", "question": "本はいつまでに返しますか。", "correctAnswer": "来週の木曜日", "distractors": ["今週の木曜日", "来週の火曜日", "来月の木曜日"], "explanation": "The instruction is '来週の木曜日までに' (By next week's Thursday)." },
        { "passage": "趣味は写真を撮ることです。休みの日はいつもカメラを持って出かけます。", "question": "この人は休みの日に何をしますか。", "correctAnswer": "写真を撮りに出かける", "distractors": ["映画を見る", "家で休む", "本を読む"], "explanation": "The hobby is '写真を撮ること' (taking pictures), and they go out with a camera on days off." },
        { "passage": "毎朝、起きたらまず犬にご飯をあげます。それから自分の朝ご飯を食べます。", "question": "この人は起きてから一番初めに何をしますか。", "correctAnswer": "犬にご飯をあげる", "distractors": ["顔を洗う", "自分のご飯を食べる", "散歩に行く"], "explanation": "The text says 'まず犬にご飯をあげます' (First, I give food to the dog)." },
        { "passage": "今日の晩ご飯はカレーライスです。スーパーで肉とじゃがいもと人参を買いました。", "question": "晩ご飯は何ですか。", "correctAnswer": "カレーライス", "distractors": ["うどん", "肉だけ", "スーパーのお弁当"], "explanation": "The very first sentence says '今日の晩ご飯はカレーライスです'." },
        { "passage": "山田先生はとても親切です。わからないことを聞くと、いつも丁寧に教えてくれます。", "question": "山田先生はどんな人ですか。", "correctAnswer": "親切な人", "distractors": ["厳しい人", "怖い人", "冷たい人"], "explanation": "The text directly states '山田先生はとても親切です' (Yamada-sensei is very kind)." },
        { "passage": "私は日本の古いお寺を見るのが好きです。来月、京都へ旅行に行きます。", "question": "この人は来月どこへ行きますか。", "correctAnswer": "京都", "distractors": ["東京", "大阪", "奈良"], "explanation": "The text says '来月、京都へ旅行に行きます' (Next month, I will go on a trip to Kyoto)." },
        { "passage": "携帯電話が壊れました。今日、新しいのを買いに行きます。", "question": "この人は今日、何をしますか。", "correctAnswer": "新しい携帯電話を買う", "distractors": ["携帯電話を直す", "友達に電話する", "家にいる"], "explanation": "The text states '新しいのを買いに行きます' (I am going to buy a new one)." },
        { "passage": "このホテルには温泉があります。部屋から海が見えて、とてもきれいです。", "question": "ホテルの部屋から何が見えますか。", "correctAnswer": "海", "distractors": ["山", "川", "町"], "explanation": "The text describes '部屋から海が見えて' (You can see the sea from the room)." },
        { "passage": "私の町には大きい図書館があります。静かで涼しいので、よくそこで勉強します。", "question": "この人はどうして図書館で勉強しますか。", "correctAnswer": "静かで涼しいから", "distractors": ["近いから", "本が多いから", "新しいから"], "explanation": "The reason given is '静かで涼しいので' (Because it is quiet and cool)." },
        { "passage": "来週のパーティーには、飲み物と食べ物を少し持てきてください。", "question": "パーティーに何を持っていきますか。", "correctAnswer": "飲み物と食べ物", "distractors": ["飲み物だけ", "お金", "プレゼント"], "explanation": "The instruction is '飲み物と食べ物を少し持てきてください' (Please bring a little drink and food)." },
        { "passage": "駅の近くに新しいラーメン屋ができました。いつも人が並んでいます。", "question": "駅の近くに何ができましたか。", "correctAnswer": "ラーメン屋", "distractors": ["パン屋", "花屋", "本屋"], "explanation": "The text says '新しいラーメン屋ができました' (A new ramen shop was built)." },
        { "passage": "私の時計は五分早いです。今、時計は三時五分を指しています。", "question": "本当の時間は何時ですか。", "correctAnswer": "三時", "distractors": ["三時五分", "三時十分", "二時五十五分"], "explanation": "If the watch is 5 minutes fast (早いです) and shows 3:05, the real time is 3:00 (三時)." },
        { "passage": "漢字のテストは五十問あります。三十問以上正解すると、合格です。", "question": "何問正解すると合格ですか。", "correctAnswer": "三十問以上", "distractors": ["五十問", "二十問", "四十問"], "explanation": "The text explicitly states '三十問以上正解すると、合格です' (Passing is 30 questions or more)." },
        { "passage": "田中さんの趣味は切手を集めることです。外国の切手もたくさん持っています。", "question": "田中さんの趣味は何ですか。", "correctAnswer": "切手を集めること", "distractors": ["外国へ行くこと", "手紙を書くこと", "写真を撮ること"], "explanation": "The text states '趣味は切手を集めることです' (Hobby is collecting stamps)." },
        { "passage": "毎日仕事が忙しいです。夜の十時や十一時に家へ帰ります。", "question": "この人は毎日何時に家へ帰りますか。", "correctAnswer": "夜遅く", "distractors": ["夕方", "朝早く", "昼間"], "explanation": "Returning at 10 or 11 PM ('十時や十一時に') is late at night ('夜遅く')." },
        { "passage": "これは佐藤さんの傘ではありません。佐藤さんの傘は青いです。", "question": "佐藤さんの傘は何色ですか。", "correctAnswer": "青", "distractors": ["赤", "黒", "白"], "explanation": "The text states '佐藤さんの傘は青いです' (Sato-san's umbrella is blue)." },
        { "passage": "このパソコンは古いですから、インターネットがとても遅いです。", "question": "このパソコンのインターネットはどうして遅いですか。", "correctAnswer": "パソコンが古いから", "distractors": ["壊れているから", "天気が悪いから", "安いから"], "explanation": "The reason is 'このパソコンは古いですから' (Because this computer is old)." },
        { "passage": "駅前のコンビニは二十四時間開いています。とても便利です。", "question": "コンビニはいつ閉まりますか。", "correctAnswer": "閉まらない", "distractors": ["夜十二時", "朝六時", "夜十時"], "explanation": "If it is open 24 hours ('二十四時間開いています'), it doesn't close." },
        { "passage": "私の車には四人乗ることができます。明日、友達三人と海へ行きます。", "question": "明日、車には全部で何人乗りますか。", "correctAnswer": "四人", "distractors": ["三人", "五人", "二人"], "explanation": "The speaker (1) + 3 friends (友達三人) = 4 people in total (四人)." },
        { "passage": "この動物園にはパンダがいます。パンダを見るためには、別のチケットが必要です。", "question": "パンダを見るためには何が必要ですか。", "correctAnswer": "別のチケット", "distractors": ["お金だけ", "食べ物", "予約"], "explanation": "The text states '別のチケットが必要です' (A separate ticket is necessary)." },
        { "passage": "会議は三時から五時までです。その後、みんなで食事に行きます。", "question": "食事に行くのは何時ごろですか。", "correctAnswer": "五時の後", "distractors": ["三時", "四時", "夜"], "explanation": "The meeting ends at 5, 'その後' (after that) they go eat." },
        { "passage": "鈴木さんは英語と中国語が話せます。フランス語はわかりません。", "question": "鈴木さんが話せる言葉は何ですか。", "correctAnswer": "英語と中国語", "distractors": ["英語とフランス語", "中国語とフランス語", "英語だけ"], "explanation": "The text lists '英語と中国語が話せます' (can speak English and Chinese)." },
        { "passage": "夏休みに海へ行きました。天気が悪くて泳ぐことができませんでした。", "question": "この人は海で泳ぎましたか。", "correctAnswer": "いいえ、泳ぎませんでした", "distractors": ["はい、泳ぎました", "少し泳ぎました", "明日泳ぎます"], "explanation": "The text says '泳ぐことができませんでした' (Could not swim)." },
        { "passage": "冷蔵庫の中に卵が一つと、牛乳が少しあります。明日の朝ごはんは大丈夫です。", "question": "冷蔵庫に卵はいくつありますか。", "correctAnswer": "一つ", "distractors": ["二つ", "三つ", "たくさん"], "explanation": "The text states '卵が一つ' (one egg)." },
        { "passage": "この靴は一万円でしたが、セールで八千円になりました。", "question": "この人は靴をいくらで買いましたか。", "correctAnswer": "八千円", "distractors": ["一万円", "二千円", "一万八千円"], "explanation": "It was 10,000 yen, but became 8,000 yen on sale ('セールで八千円になりました')." },
        { "passage": "田中さんのアパートは駅から歩いて五分です。近くて便利です。", "question": "田中さんのアパートは駅から近いですか。", "correctAnswer": "はい、近いです", "distractors": ["いいえ、遠いです", "少し遠いです", "車で五分です"], "explanation": "The text explicitly says '近くて便利です' (Close and convenient)." },
        { "passage": "私は毎晩お風呂に入ってから寝ます。シャワーだけではありません。", "question": "この人は寝る前にどうしますか。", "correctAnswer": "お風呂に入る", "distractors": ["シャワーだけ", "テレビを見る", "本を読む"], "explanation": "The text says 'お風呂に入ってから寝ます' (Go to sleep after taking a bath)." },
        { "passage": "昨日のテストはあまり難しくなかったです。でも、時間が足りませんでした。", "question": "テストはどうでしたか。", "correctAnswer": "難しくないが時間がなかった", "distractors": ["難しくて時間がなかった", "簡単で時間がたくさんあった", "難しかったが時間はあった"], "explanation": "Not too hard ('あまり難しくなかった'), but lacked time ('時間が足りませんでした')." },
        { "passage": "部屋が暑いですから、エアコンをつけてください。窓は開けないでください。", "question": "どうしてエアコンをつけますか。", "correctAnswer": "部屋が暑いから", "distractors": ["部屋が寒いから", "窓を開けたいから", "雨が降っているから"], "explanation": "The reason given is '部屋が暑いですから' (Because the room is hot)." },
        { "passage": "土曜日は友達と映画を見に行きます。日曜日は家でゆっくり休みます。", "question": "日曜日は何をしますか。", "correctAnswer": "家で休む", "distractors": ["映画を見る", "友達に会う", "仕事をする"], "explanation": "The text states '日曜日は家でゆっくり休みます' (Rest at home slowly on Sunday)." },
        { "passage": "先生、この言葉の意味がわかりません。辞書で調べましたが、載っていませんでした。", "question": "この人はどうして先生に聞きましたか。", "correctAnswer": "辞書に載っていなかったから", "distractors": ["辞書を忘れたから", "漢字が読めないから", "時間がないから"], "explanation": "The speaker checked the dictionary but it wasn't there ('載っていませんでした')." },
        { "passage": "私の犬は散歩が大好きです。毎日夕方に公園へ連れて行きます。", "question": "いつ犬の散歩に行きますか。", "correctAnswer": "夕方", "distractors": ["朝", "昼", "夜遅く"], "explanation": "The text says '毎日夕方に' (every evening)." },
        { "passage": "あの青いシャツの人を知っていますか。彼は新しい英語の先生です。", "question": "新しい英語の先生はどんな服を着ていますか。", "correctAnswer": "青いシャツ", "distractors": ["赤いシャツ", "黒いコート", "青いズボン"], "explanation": "The person is identified as 'あの青いシャツの人' (That person in the blue shirt)." },
        { "passage": "寝る前にいつも温かい牛乳を飲みます。よく眠れるからです。", "question": "どうして温かい牛乳を飲みますか。", "correctAnswer": "よく眠れるから", "distractors": ["おいしいから", "喉が渇くから", "牛乳が好きだから"], "explanation": "The reason given is 'よく眠れるからです' (Because I can sleep well)." },
        { "passage": "山田さんへ。今日の会議は午後三時からではありません。四時半からです。遅れないでください。（田中）", "question": "今日の会議は何時からですか。", "correctAnswer": "四時半", "distractors": ["三時", "三時半", "四時"], "explanation": "The memo explicitly corrects the time: '三時からではありません。四時半からです' (Not 3:00. It is from 4:30)." },
        { "passage": "私は毎日バスで学校へ行きます。でも今日は雨ですから、お父さんの車で行きます。", "question": "今日はどうやって学校へ行きますか。", "correctAnswer": "お父さんの車", "distractors": ["バス", "電車", "歩いて"], "explanation": "Normally takes the bus, but today ('今日は') uses 'お父さんの車' (father's car) because of rain." },
        { "passage": "このケーキは甘くて美味しいです。でも、五百円ですから少し高いです。一つだけ買いました。", "question": "どうして一つだけ買いましたか。", "correctAnswer": "少し高いから", "distractors": ["美味しくないから", "甘くないから", "お金がないから"], "explanation": "The reason given for buying only one is '少し高いです' (It is a little expensive)." },
        { "passage": "図書館からのお知らせ：来週の休みは月曜日と木曜日です。火曜日は開いています。", "question": "来週、図書館が休みになるのは何曜日ですか。", "correctAnswer": "月曜日と木曜日", "distractors": ["火曜日だけ", "月曜日と火曜日", "木曜日と金曜日"], "explanation": "The notice says '来週の休みは月曜日と木曜日です' (Next week's holidays are Monday and Thursday)." },
        { "passage": "明日、私の家でパーティーをします。午後六時に来てください。飲み物は私が買います。", "question": "明日のパーティーで、友達は何をしますか。", "correctAnswer": "午後六時に行く", "distractors": ["飲み物を買う", "私の家を掃除する", "七時に行く"], "explanation": "The speaker buys drinks, the friend just needs to '午後六時に来てください' (Come at 6 PM)." },
        { "passage": "この薬は一日三回飲んでください。朝ご飯、昼ご飯、晩ご飯の後です。寝る前は飲まないでください。", "question": "薬はいつ飲みますか。", "correctAnswer": "ご飯の後", "distractors": ["ご飯の前", "寝る前", "朝ご飯の後だけ"], "explanation": "The instructions say '朝ご飯、昼ご飯、晩ご飯の後です' (After breakfast, lunch, and dinner)." },
        { "passage": "すみません、駅はどこですか。あの角を右に曲がってください。左にあります。", "question": "駅はどこにありますか。", "correctAnswer": "角を右に曲がって、左", "distractors": ["角を左に曲がって、右", "角を右に曲がって、右", "まっすぐ行って、左"], "explanation": "The directions are: turn right at the corner ('右に曲がって'), it is on the left ('左にあります')." },
        { "passage": "佐藤さん、メールありがとうございます。私は今、駅にいます。十分ぐらい遅れます。すみません。", "question": "この人は今、どうしていますか。", "correctAnswer": "駅にいて、遅れる", "distractors": ["家でメールを書いている", "もう佐藤さんに会った", "時間通りに着く"], "explanation": "The writer is at the station ('駅にいます') and will be 10 minutes late ('十分ぐらい遅れます')." },
        { "passage": "教室に青いペンがありました。山田さんのですか。いいえ、私のではありません。私のは黒いです。", "question": "教室にあったペンは何色ですか。", "correctAnswer": "青", "distractors": ["黒", "赤", "白"], "explanation": "The found pen is blue ('青いペンがありました'). Yamada's pen is black." },
        { "passage": "今日の昼ご飯は、母が作ったお弁当です。卵と魚が入っています。肉はありません。", "question": "お弁当の中に何が入っていますか。", "correctAnswer": "卵と魚", "distractors": ["肉と魚", "卵と肉", "野菜と魚"], "explanation": "The text lists '卵と魚が入っています' (Egg and fish are inside). '肉はありません' (No meat)." },
        { "passage": "私の趣味はピアノを弾くことです。毎週日曜日の朝に練習します。夜は弾きません。", "question": "いつピアノを弾きますか。", "correctAnswer": "日曜日の朝", "distractors": ["毎日の朝", "日曜日の夜", "毎晩"], "explanation": "The text says '毎週日曜日の朝に練習します' (I practice every Sunday morning)." },
        { "passage": "デパートへ行きましたが、財布にお金が全然ありませんでした。何も買わないで帰りました。", "question": "デパートで何を買いましたか。", "correctAnswer": "何も買わなかった", "distractors": ["財布", "安い服", "たくさん買った"], "explanation": "Because there was no money, '何も買わないで帰りました' (Returned without buying anything)." },
        { "passage": "昨日は日曜日でした。私は自分の部屋とトイレを掃除しました。お風呂は母が掃除しました。", "question": "この人が掃除した場所はどこですか。", "correctAnswer": "部屋とトイレ", "distractors": ["部屋とお風呂", "トイレとお風呂", "部屋だけ"], "explanation": "The speaker says '自分の部屋とトイレを掃除しました' (Cleaned my room and the toilet)." },
        { "passage": "このカフェのコーヒーは三百円です。紅茶は二百円です。私はコーヒーと紅茶を一つずつ買いました。", "question": "この人はいくら払いましたか。", "correctAnswer": "五百円", "distractors": ["三百円", "二百円", "六百円"], "explanation": "Coffee (300) + Tea (200) bought one of each (一つずつ) = 500 yen." },
        { "passage": "この本は今週の金曜日までに図書館に返してください。土曜日は休みです。", "question": "本はいつまでに返しますか。", "correctAnswer": "金曜日", "distractors": ["木曜日", "土曜日", "日曜日"], "explanation": "The text states '金曜日までに' (By Friday)." },
        { "passage": "今日はとてもいい天気ですが、風が強いです。外で洗濯物を干すことができません。", "question": "どうして外に洗濯物を干しませんか。", "correctAnswer": "風が強いから", "distractors": ["雨が降っているから", "天気が悪いから", "洗濯機が壊れているから"], "explanation": "The weather is good, but '風が強いです' (The wind is strong), preventing laundry." },
        { "passage": "昨日、家で宿題をしました。それから、図書館へ行って本を読みました。", "question": "図書館で何をしましたか。", "correctAnswer": "本を読んだ", "distractors": ["宿題をした", "友達に会った", "寝た"], "explanation": "Homework was done at home ('家で宿題をしました'). At the library, they read a book ('本を読みました')." },
        { "passage": "公園で白くて可愛い猫を見ました。携帯電話で写真を三枚撮りました。", "question": "携帯電話で何をしましたか。", "correctAnswer": "猫の写真を撮った", "distractors": ["友達に電話した", "時間を調べた", "音楽を聞いた"], "explanation": "The text says '携帯電話で写真を三枚撮りました' (Took 3 photos with the cell phone)." },
        { "passage": "今日の晩ご飯は友達と一緒にカレーを食べました。とても辛かったですが、おいしかったです。", "question": "カレーはどうでしたか。", "correctAnswer": "辛くておいしかった", "distractors": ["甘くておいしかった", "辛くてまずかった", "安くておいしかった"], "explanation": "The text describes it as 'とても辛かったですが、おいしかったです' (Very spicy, but delicious)." },
        { "passage": "私はテニスがあまり上手ではありません。でも、泳ぐのは一番得意です。", "question": "この人は何が得意ですか。", "correctAnswer": "泳ぐこと", "distractors": ["テニス", "走ること", "スポーツ全部"], "explanation": "The text says '泳ぐのは一番得意です' (Swimming is what I am best at)." },
        { "passage": "新しい黒い靴を買いました。でも、少し小さくて足が痛いです。明日、店に持っていきます。", "question": "靴はどうでしたか。", "correctAnswer": "小さくて足が痛い", "distractors": ["大きくて歩きにくい", "ちょうどいい", "古くて汚い"], "explanation": "The shoes are '少し小さくて足が痛いです' (A little small and my feet hurt)." },
        { "passage": "昨日から風邪をひいて、少し熱があります。今日は一日中ベッドで寝ています。", "question": "この人は今日どうしていますか。", "correctAnswer": "ベッドで寝ている", "distractors": ["病院へ行く", "学校で勉強している", "友達と遊んでいる"], "explanation": "Because of a cold and fever, '今日は一日中ベッドで寝ています' (Sleeping in bed all day today)." },
        { "passage": "私は動物が好きです。特に犬が好きです。猫も可愛いですが、犬のほうが好きです。", "question": "この人は犬と猫とどちらが好きですか。", "correctAnswer": "犬", "distractors": ["猫", "どちらも同じ", "動物は嫌い"], "explanation": "The text says '犬のほうが好きです' (I like dogs more)." },
        { "passage": "昨日、有名なアクション映画を見ました。でも、あまり面白くありませんでした。少し寝てしまいました。", "question": "映画はどうでしたか。", "correctAnswer": "面白くなかった", "distractors": ["とても面白かった", "怖かった", "悲しかった"], "explanation": "The text states 'あまり面白くありませんでした' (It was not very interesting)." },
        { "passage": "私は勉強する時、いつも音楽を聞きます。日本のポップスが好きです。", "question": "勉強する時、どうしますか。", "correctAnswer": "音楽を聞く", "distractors": ["テレビを見る", "何もしない", "歌を歌う"], "explanation": "The text says '勉強する時、いつも音楽を聞きます' (When studying, I always listen to music)." },
        { "passage": "週末、家族と一緒に車で海へ行きました。朝はとてもいい天気でしたが、午後から少し雨が降りました。海で泳ぐことはできませんでしたが、海の近くのレストランで美味しい魚を食べました。来年もまた海へ行きたいです。", "question": "海で何をしましたか。", "correctAnswer": "魚を食べた", "distractors": ["泳いだ", "雨の中で遊んだ", "何もしなかった"], "explanation": "They couldn't swim due to rain, but '美味しい魚を食べました' (ate delicious fish)." },
        { "passage": "昨日は友達のメアリーさんの誕生日でした。私はメアリーさんに何をあげるか、たくさん考えました。メアリーさんは本が好きですから、初めは本を買うつもりでした。でも、カバンが古かったので、新しい赤いカバンを買ってあげました。とても喜んでいました。", "question": "この人はメアリーさんに何をあげましたか。", "correctAnswer": "赤いカバン", "distractors": ["本", "古いカバン", "何もあげなかった"], "explanation": "Initially planned to buy a book, but ultimately '赤いカバンを買ってあげました' (bought a red bag)." },
        { "passage": "先月から、新しい英語の先生が来ました。スミス先生というアメリカ人です。スミス先生の授業は少し難しいですが、先生はいつも笑顔でとても優しいです。クラスのみんなはスミス先生が大好きになりました。", "question": "スミス先生の授業はどうですか。", "correctAnswer": "難しいが、先生は優しい", "distractors": ["簡単で、先生は優しい", "難しくて、先生は怖い", "簡単で、先生は面白い"], "explanation": "The text says the class is hard ('少し難しい'), but the teacher is kind ('とても優しい')." },
        { "passage": "来週、新しいアパートに引っ越します。今のアパートは大学から遠くて不便ですが、新しいアパートは大学まで歩いて五分です。部屋は今より少し狭くなりますが、毎日たくさん寝ることができるので、とても嬉しいです。", "question": "新しいアパートはどうですか。", "correctAnswer": "大学から近くて、狭い", "distractors": ["大学から遠くて、広い", "大学から近くて、広い", "大学から遠くて、狭い"], "explanation": "The new apartment is a 5-minute walk (close) but '今より少し狭くなります' (will be a little narrower/smaller than now)." },
        { "passage": "今日の午後、駅で財布を落としました。中にはお金と学生証が入っていました。とても困って、交番へ行きました。すると、親切な人が私の財布を交番に届けてくれていました。お金も全部ありました。本当に良かったです。", "question": "財布はどうなりましたか。", "correctAnswer": "交番にあった", "distractors": ["駅で見つけた", "誰かに取られた", "まだ見つからない"], "explanation": "Someone delivered it to the police box ('交番に届けてくれていました'), so it was there." },
        { "passage": "今日の晩ご飯は私が作ることになりました。初めは寿司を作りたかったですが、魚が高かったのでやめました。代わりに、冷蔵庫にあった肉と野菜を使ってカレーを作りました。家族はおいしいと言ってたくさん食べました。", "question": "どうして寿司を作りませんでしたか。", "correctAnswer": "魚が高かったから", "distractors": ["作り方がわからなかったから", "肉が食べたかったから", "家族が嫌いだから"], "explanation": "The text explicitly states '魚が高かったのでやめました' (Stopped because fish was expensive)." },
        { "passage": "今週の週末はとても忙しいです。土曜日の午前中は公園でテニスの練習をして、午後は友達と買い物をします。日曜日は来週のテストのために、一日中図書館で日本語を勉強しなければなりません。休む時間がありません。", "question": "日曜日は何をしますか。", "correctAnswer": "図書館で勉強する", "distractors": ["テニスの練習をする", "買い物をする", "家で休む"], "explanation": "On Sunday ('日曜日は'), the speaker must study all day at the library ('一日中図書館で日本語を勉強しなければなりません')." },
        { "passage": "私はコンビニでアルバイトをしています。時間は夕方の五時から夜の十時までです。昼間はお客さんが少ないですが、夜は仕事が終わった人がたくさん来るので、とても忙しくなります。疲れますが、楽しいです。", "question": "コンビニが忙しくなるのはいつですか。", "correctAnswer": "夜", "distractors": ["朝", "昼間", "夕方"], "explanation": "The text contrasts daytime (few customers) with night: '夜は...とても忙しくなります' (At night, it becomes very busy)." },
        { "passage": "日本語の勉強は面白いですが、時々難しいです。漢字を覚えるのは大変で、読むのに時間がかかります。でも、日本人の友達と日本語で話すのはとても楽しいです。もっと上手に話せるようになりたいです。", "question": "この人にとって大変なことは何ですか。", "correctAnswer": "漢字を覚えること", "distractors": ["友達と話すこと", "日本語を聞くこと", "日本の歌を歌うこと"], "explanation": "The passage clearly states '漢字を覚えるのは大変で' (Remembering Kanji is difficult/tough)." },
        { "passage": "昨日、国にいる母から手紙と大きい箱が届きました。箱の中には私の好きな国の冬の服と、たくさんのお菓子が入っていました。手紙を読んで、少し国の家族に会いたくなりました。来年の夏には国へ帰るつもりです。", "question": "箱の中に何が入っていましたか。", "correctAnswer": "服とお菓子", "distractors": ["手紙と本", "写真とお菓子", "服と靴"], "explanation": "The box contained winter clothes and a lot of sweets ('冬の服と、たくさんのお菓子')." },
        { "passage": "昨日の夜、冷たい水をたくさん飲みました。今日の朝起きると、お腹がとても痛かったので、学校を休んで病院へ行きました。医者に薬をもらって、家で寝ています。明日には元気になると思います。", "question": "どうして病院へ行きましたか。", "correctAnswer": "お腹が痛かったから", "distractors": ["熱があったから", "頭が痛かったから", "足が痛かったから"], "explanation": "The direct reason for going to the hospital was 'お腹がとても痛かったので' (Because my stomach hurt very much)." },
        { "passage": "デパートへ秋の服を買いに行きました。二千円の白いシャツと、五千円の黒いズボンがありました。両方欲しかったですが、お金が三千円しかありませんでした。ですから、白いシャツだけ買って帰りました。", "question": "この人はいくらお金を持っていましたか。", "correctAnswer": "三千円", "distractors": ["二千円", "五千円", "七千円"], "explanation": "The text says 'お金が三千円しかありませんでした' (I only had 3,000 yen)." },
        { "passage": "日曜日、スタジアムへ野球の試合を見に行きました。私の好きなチームが試合をしました。たくさん応援しましたが、そのチームは負けてしまいました。とても残念でしたが、試合は面白かったです。また見に行きたいです。", "question": "試合の結果はどうでしたか。", "correctAnswer": "好きなチームが負けた", "distractors": ["好きなチームが勝った", "雨で試合がなかった", "引き分けだった"], "explanation": "The text states 'そのチームは負けてしまいました' (That team ended up losing)." },
        { "passage": "図書館のルールについて説明します。図書館の中で本を読みながらご飯を食べたり、コーヒーを飲んだりしてはいけません。でも、ペットボトルの水やお茶を飲むことはできます。静かに使ってください。", "question": "図書館でしてもいいことは何ですか。", "correctAnswer": "水やお茶を飲むこと", "distractors": ["コーヒーを飲むこと", "ご飯を食べること", "友達と話すこと"], "explanation": "Food and coffee are prohibited, but 'ペットボトルの水やお茶を飲むことはできます' (You can drink bottled water or tea)." },
        { "passage": "昨日の夜は友達と遅くまでゲームをしていました。寝たのは夜中の一時です。今朝は六時に起きなければならなかったので、とても眠いです。今日の授業中は、寝ないように気をつけたいと思います。", "question": "この人は昨日の夜、何時間寝ましたか。", "correctAnswer": "五時間", "distractors": ["六時間", "七時間", "四時間"], "explanation": "Slept at 1 AM ('一時') and woke up at 6 AM ('六時'), which equals 5 hours (五時間)." },
        { "passage": "昨日、私のパソコンが壊れてしまいました。電源が入りません。明後日までに大切な宿題を出さなければならないのに、何もできません。今日は放課後、友達にパソコンを借りに行くつもりです。", "question": "この人は今日これからどうしますか。", "correctAnswer": "友達にパソコンを借りる", "distractors": ["パソコンを買う", "パソコンを直す", "宿題をやめる"], "explanation": "The text says '今日... 友達にパソコンを借りに行くつもりです' (Today I plan to go borrow a computer from a friend)." },
        { "passage": "私は日本に三年住んでいますが、まだ京都に行ったことがありません。写真で見ましたが、古いお寺がきれいで、とても有名な町です。来年の春、桜が咲く頃に、新幹線に乗って一人で旅行したいです。", "question": "この人は京都についてどう思っていますか。", "correctAnswer": "来年の春に行きたい", "distractors": ["もう三回行った", "桜の季節は行きたくない", "友達と行きたい"], "explanation": "The passage ends with '来年の春... 旅行したいです' (I want to travel there next spring)." },
        { "passage": "今日、駅の前で三時に友達と会う約束をしていました。でも、三時半になっても友達は来ませんでした。電話をすると、友達は間違えて別の駅に行ってしまったと言いました。私はカフェに入って待つことにしました。", "question": "友達はどうして遅れましたか。", "correctAnswer": "別の駅に行ってしまったから", "distractors": ["寝坊したから", "約束を忘れていたから", "電車が遅れたから"], "explanation": "The friend explained '間違えて別の駅に行ってしまった' (Mistakenly went to a different station)." },
        { "passage": "週末に料理教室へ行きました。先生に天ぷらの作り方を習いました。油をたくさん使うので少し難しかったですが、上手にできました。最後に、作った天ぷらをみんなで食べました。とても美味しかったです。", "question": "料理教室で何をしましたか。", "correctAnswer": "天ぷらを作って食べた", "distractors": ["天ぷらの作り方を教えた", "油を買った", "先生の料理を食べた"], "explanation": "The text details learning to make tempura ('天ぷらの作り方を習いました') and eating it together ('みんなで食べました')." },
        { "passage": "私の家には一匹の犬がいます。名前はポチです。ポチはご飯を食べるのが大好きで、たくさん食べます。でも、散歩はあまり好きではありません。昼間はいつも私のベッドの上で一日中寝ています。", "question": "ポチが好きなことは何ですか。", "correctAnswer": "ご飯を食べること", "distractors": ["散歩すること", "外で遊ぶこと", "私のベッドを噛むこと"], "explanation": "The text states 'ポチはご飯を食べるのが大好きで' (Pochi loves eating food)." },
        { "passage": "日曜日、デパートへ行きました。一階で靴を買って、二階で服を見ました。三階で本を買いたかったですが、欲しい本がありませんでした。最後に五階のレストランで食事をして、午後三時ごろ家に帰りました。", "question": "五階で何をしましたか。", "correctAnswer": "食事をした", "distractors": ["靴を買った", "本を買った", "服を見た"], "explanation": "The text specifically states '最後に五階のレストランで食事をして' (Finally, had a meal at the 5th floor restaurant)." },
        { "passage": "今日、学校でテストの結果をもらいました。数学は九十点でとてもよかったです。でも、英語は五十点で、あまりよくありませんでした。私は英語が苦手です。今日から毎日二時間、英語を勉強しようと思います。", "question": "この人はこれからどうしますか。", "correctAnswer": "毎日英語を勉強する", "distractors": ["毎日数学を勉強する", "英語のテストを休む", "数学の勉強をやめる"], "explanation": "Because English was poor, the speaker vows '今日から毎日二時間、英語を勉強しようと思います' (From today, I will study English 2 hours daily)." },
        { "passage": "日本には四つの季節があります。私は夏の暑い天気はあまり好きではありません。冬の寒いのも苦手です。一番好きな季節は秋です。秋は涼しくて、山の木が赤や黄色になってとてもきれいですから。", "question": "この人が秋を好きな理由は何ですか。", "correctAnswer": "涼しくて木がきれいだから", "distractors": ["暑い天気が好きだから", "雪が降るから", "休みが長いから"], "explanation": "The reason is '秋は涼しくて、山の木が赤や黄色になってとてもきれいですから' (Because autumn is cool and the mountain trees turn red/yellow and are beautiful)." },
        { "passage": "先週、新しいスマートフォンを買いました。前の電話より画面が大きくて、カメラの写真がとてもきれいに撮れます。でも、インターネットをたくさん使うと、バッテリーがすぐに少なくなってしまいます。それだけが不便です。", "question": "新しいスマートフォンの悪いところは何ですか。", "correctAnswer": "バッテリーがすぐに少なくなること", "distractors": ["画面が小さいこと", "写真がきれいに撮れないこと", "重いこと"], "explanation": "The text notes the drawback: 'バッテリーがすぐに少なくなってしまいます。それだけが不便です' (The battery quickly becomes low. That is the only inconvenience)." },
        { "passage": "私の将来の夢は医者になることです。私が子供の時、病気で病院に入院したことがあります。その時、親切な医者が私を助けてくれました。私も大人になったら、病気の子供たちを優しく助ける医者になりたいです。", "question": "この人はどうして医者になりたいですか。", "correctAnswer": "子供の時に医者に助けてもらったから", "distractors": ["お金がたくさん欲しいから", "親が医者だから", "病院が好きだから"], "explanation": "The inspiration was '子供の時... その時、親切な医者が私を助けてくれました' (When I was a child... a kind doctor helped me)." },
        { "passage": "田中さんは毎朝六時に起きて、犬の散歩に行きます。それから、朝ご飯を食べます。七時半に家を出ます。", "question": "田中さんは朝ご飯の前に何をしますか。", "correctAnswer": "犬の散歩に行く", "distractors": ["起きるだけ", "家を出る", "新聞を読む"], "explanation": "The text says '犬の散歩に行きます。それから、朝ご飯を食べます' (Goes for a dog walk, and then eats breakfast)." },
        { "passage": "昨日は日曜日でしたが、仕事がたくさんありましたから、会社へ行きました。夜の八時に家へ帰りました。", "question": "この人は昨日どうして会社へ行きましたか。", "correctAnswer": "仕事がたくさんあったから", "distractors": ["日曜日だったから", "家にいたくなかったから", "夜八時だったから"], "explanation": "The reason given is '仕事がたくさんありましたから' (Because there was a lot of work)." },
        { "passage": "私はりんごが好きですが、みかんはあまり好きではありません。バナナも好きです。", "question": "この人が好きな果物は何ですか。", "correctAnswer": "りんごとバナナ", "distractors": ["りんごとみかん", "みかんとバナナ", "みかんだけ"], "explanation": "The text explicitly states liking apples ('りんごが好きです') and bananas ('バナナも好きです')." },
        { "passage": "明日の天気は晴れです。明後日も晴れですが、明々後日は雨が降るでしょう。", "question": "雨が降るのはいつですか。", "correctAnswer": "明々後日", "distractors": ["明日", "明後日", "今日"], "explanation": "The text states '明々後日は雨が降るでしょう' (It will probably rain the day after the day after tomorrow)." },
        { "passage": "私の趣味は絵を描くことです。特に、山の絵を描くのが好きです。海の絵はあまり描きません。", "question": "この人はどんな絵を描くのが好きですか。", "correctAnswer": "山の絵", "distractors": ["海の絵", "花の絵", "動物の絵"], "explanation": "The text says '特に、山の絵を描くのが好きです' (Especially, I like drawing pictures of mountains)." },
        { "passage": "図書館で本を三冊借りました。歴史の本と、料理の本と、旅行の本です。一番初めに料理の本を読みます。", "question": "この人は初めにどの本を読みますか。", "correctAnswer": "料理の本", "distractors": ["歴史の本", "旅行の本", "三冊全部"], "explanation": "The text states '一番初めに料理の本を読みます' (I will read the cooking book first)." },
        { "passage": "昨日、新しい自転車を買いました。青くてかっこいい自転車です。今日はそれに乗って学校へ行きます。", "question": "新しい自転車の色は何ですか。", "correctAnswer": "青", "distractors": ["赤", "黒", "白"], "explanation": "The bicycle is described as '青くてかっこいい自転車です' (A blue and cool bicycle)." },
        { "passage": "会議は九時から始まります。田中さんは八時五十分に、鈴木さんは九時五分に来ました。", "question": "会議に遅れたのは誰ですか。", "correctAnswer": "鈴木さん", "distractors": ["田中さん", "二人とも遅れた", "誰も遅れていない"], "explanation": "The meeting starts at 9:00. Suzuki came at 9:05 ('九時五分'), so Suzuki was late." },
        { "passage": "私の家は駅から遠いですから、毎日バスで駅まで行きます。バスで十五分かかります。", "question": "この人はどうしてバスに乗りますか。", "correctAnswer": "家が駅から遠いから", "distractors": ["バスが好きだから", "歩くのが嫌いだから", "十五分で行けるから"], "explanation": "The reason is '家は駅から遠いですから' (Because my house is far from the station)." },
        { "passage": "今週の土曜日は母の誕生日です。私はケーキを作って、姉はプレゼントを買います。", "question": "姉は何をしますか。", "correctAnswer": "プレゼントを買う", "distractors": ["ケーキを作る", "何もしない", "掃除をする"], "explanation": "The text explicitly states '姉はプレゼントを買います' (My older sister will buy a present)." },
        { "passage": "冷蔵庫に肉がありませんでした。ですから、今日の晩ご飯は野菜だけのカレーを作りました。", "question": "晩ご飯のカレーには何が入っていませんか。", "correctAnswer": "肉", "distractors": ["野菜", "水", "じゃがいも"], "explanation": "The text says '冷蔵庫に肉がありませんでした' and '野菜だけのカレー' (vegetable-only curry)." },
        { "passage": "スーパーで卵と牛乳を買いました。パンも買いたかったですが、売り切れでした。", "question": "スーパーで買えなかったものは何ですか。", "correctAnswer": "パン", "distractors": ["卵", "牛乳", "肉"], "explanation": "The text says 'パンも買いたかったですが、売り切れでした' (I wanted to buy bread too, but it was sold out)." },
        { "passage": "私の日本語のクラスには学生が二十人います。男の学生は八人で、女の学生は十二人です。", "question": "女の学生は何人ですか。", "correctAnswer": "十二人", "distractors": ["八人", "二十人", "四人"], "explanation": "The text clearly states '女の学生は十二人です' (There are 12 female students)." },
        { "passage": "山田先生は今日お休みです。ですから、今日の日本語の授業は鈴木先生が教えます。", "question": "今日、日本語を教えるのは誰ですか。", "correctAnswer": "鈴木先生", "distractors": ["山田先生", "田中先生", "誰も教えない"], "explanation": "The text says '今日の日本語の授業は鈴木先生が教えます' (Suzuki-sensei will teach today's Japanese class)." },
        { "passage": "昨日の夜、友達とレストランで晩ご飯を食べました。私はピザを食べて、友達はパスタを食べました。", "question": "この人はレストランで何を食べましたか。", "correctAnswer": "ピザ", "distractors": ["パスタ", "ピザとパスタ", "何も食べなかった"], "explanation": "The speaker says '私はピザを食べて' (I ate pizza)." },
        { "passage": "明日は早く起きなければなりません。六時の電車に乗って、空港へ行くからです。", "question": "どうして明日は早く起きますか。", "correctAnswer": "空港へ行くから", "distractors": ["学校へ行くから", "仕事があるから", "旅行に帰るから"], "explanation": "The reason is '空港へ行くからです' (Because I am going to the airport)." },
        { "passage": "この公園には桜の木がたくさんあります。四月になると、お花見をする人がたくさん来ます。", "question": "四月に公園に人がたくさん来るのはどうしてですか。", "correctAnswer": "お花見をするため", "distractors": ["散歩をするため", "写真を撮るため", "桜の木を植えるため"], "explanation": "The text says '四月になると、お花見をする人がたくさん来ます' (When April comes, many people come to do cherry blossom viewing)." },
        { "passage": "私は夏が好きです。海で泳いだり、冷たいスイカを食べたりするのが楽しいからです。", "question": "この人が夏を好きな理由は何ですか。", "correctAnswer": "泳いだりスイカを食べたりできるから", "distractors": ["休みが長いから", "暑いから", "山へ行けるから"], "explanation": "The reasons given are '海で泳いだり、冷たいスイカを食べたりするのが楽しいからです'." },
        { "passage": "昨日のテストはとても難しかったです。一生懸命勉強しましたが、半分ぐらいしかわかりませんでした。", "question": "テストはどうでしたか。", "correctAnswer": "難しくて、半分しかわからなかった", "distractors": ["簡単で、全部わかった", "難しかったが、全部わかった", "簡単で、半分しかわからなかった"], "explanation": "The text says 'とても難しかったです' (very difficult) and '半分ぐらいしかわかりませんでした' (understood only about half)." },
        { "passage": "来週の週末、友達と山へキャンプに行きます。私はテントを持っていく約束をしました。", "question": "この人は来週の週末に何を忘れてはいけませんか。", "correctAnswer": "テント", "distractors": ["食べ物", "カメラ", "お金"], "explanation": "The speaker promised to bring a tent ('テントを持っていく約束をしました'), so they must not forget it." },
        { "passage": "あの喫茶店のコーヒーは美味しいですが、いつも人が多くてうるさいです。ですから、あまり行きません。", "question": "この人はどうしてあの喫茶店にあまり行きませんか。", "correctAnswer": "人が多くてうるさいから", "distractors": ["コーヒーがまずいから", "コーヒーが高いから", "遠いから"], "explanation": "The reason is 'いつも人が多くてうるさいです' (It's always crowded and noisy)." },
        { "passage": "妹は来年、中学生になります。今は小学生で、毎日ランドセルを背負って学校へ行っています。", "question": "妹は今、何歳ぐらいですか。", "correctAnswer": "小学生", "distractors": ["中学生", "高校生", "大学生"], "explanation": "The text explicitly states '今は小学生で' (Currently an elementary school student)." },
        { "passage": "今日は私の誕生日です。父は時計を、母は新しい服をくれました。とても嬉しいです。", "question": "お父さんは何をくれましたか。", "correctAnswer": "時計", "distractors": ["服", "本", "靴"], "explanation": "The text says '父は時計を...くれました' (Father gave me a watch)." },
        { "passage": "新しいアパートは駅から近くて便利ですが、部屋が少し暗いです。南に窓がありません。", "question": "新しいアパートの良くないところはどこですか。", "correctAnswer": "部屋が暗いところ", "distractors": ["駅から遠いところ", "家賃が高いところ", "狭いところ"], "explanation": "The negative aspect mentioned is '部屋が少し暗いです' (The room is a little dark)." },
        { "passage": "私は毎晩、寝る前に日記を書きます。日本語の練習のために、日本語で書いています。", "question": "この人はどうして日本語で日記を書きますか。", "correctAnswer": "日本語の練習のため", "distractors": ["先生に言われたから", "日本語が好きだから", "日本の友達に見せるため"], "explanation": "The reason is '日本語の練習のために' (For the purpose of Japanese practice)." },
        { "passage": "今日の午後、急に雨が降ってきました。私は傘を持っていなかったので、駅で三十分待ちました。雨が止んでから、歩いて家に帰りました。少し疲れました。", "question": "この人はどうして駅で待ちましたか。", "correctAnswer": "傘を持っていなかったから", "distractors": ["電車が遅れたから", "友達を待っていたから", "道がわからなかったから"], "explanation": "The reason for waiting was '傘を持っていなかったので' (Because I didn't have an umbrella)." },
        { "passage": "私の趣味は料理です。休みの日はいつも新しい料理を作ります。昨日はイタリアの料理を作りました。家族はおいしいと言ってくれました。来週はスペインの料理を作るつもりです。", "question": "来週は何の料理を作りますか。", "correctAnswer": "スペインの料理", "distractors": ["イタリアの料理", "日本の料理", "フランスの料理"], "explanation": "The passage ends with '来週はスペインの料理を作るつもりです' (Next week I plan to make Spanish food)." },
        { "passage": "先週、友達と一緒にデパートへ服を買いに行きました。赤いセーターと青いシャツを見ました。私は赤いセーターが好きでしたが、高かったので買いませんでした。青いシャツだけ買いました。", "question": "この人は何を買いましたか。", "correctAnswer": "青いシャツ", "distractors": ["赤いセーター", "両方買った", "何も買わなかった"], "explanation": "The text says '青いシャツだけ買いました' (I bought only the blue shirt)." },
        { "passage": "今日は土曜日ですが、私は会社へ行かなければなりません。仕事がたくさんあるからです。でも、明日の日曜日は休みです。明日は一日中家でゴロゴロして、夕方から映画を見に行きます。", "question": "明日の夕方は何をしますか。", "correctAnswer": "映画を見に行く", "distractors": ["会社へ行く", "家で一日中寝る", "友達と遊ぶ"], "explanation": "The text states '夕方から映画を見に行きます' (From the evening, I will go see a movie)." },
        { "passage": "図書館のルール：図書館の中では静かにしてください。携帯電話で話してはいけません。飲み物はペットボトルのお茶や水なら飲むことができますが、食べ物を食べることはできません。", "question": "図書館でしてはいけないことは何ですか。", "correctAnswer": "携帯電話で話すこと", "distractors": ["本を読むこと", "ペットボトルの水を飲むこと", "静かにすること"], "explanation": "The rules state '携帯電話で話してはいけません' (You must not talk on a cell phone)." },
        { "passage": "私は子供の時、野菜が嫌いでした。特にピーマンと人参が食べられませんでした。でも、大人になってから好きになりました。今は毎日たくさん野菜を食べています。健康のためにとてもいいです。", "question": "この人は子供の時、どんな野菜が嫌いでしたか。", "correctAnswer": "ピーマンと人参", "distractors": ["トマトと玉ねぎ", "キャベツと人参", "全部の野菜が好きだった"], "explanation": "The text says '特にピーマンと人参が食べられませんでした' (Especially green peppers and carrots could not be eaten)." },
        { "passage": "来週の月曜日は祝日なので、学校は休みです。火曜日からテストが始まりますから、月曜日は図書館で一日中勉強するつもりです。テストが終わったら、友達とカラオケに行きたいです。", "question": "この人は月曜日に何をしますか。", "correctAnswer": "図書館で勉強する", "distractors": ["学校へ行く", "テストを受ける", "カラオケに行く"], "explanation": "The text says '月曜日は図書館で一日中勉強するつもりです' (I plan to study all day at the library on Monday)." },
        { "passage": "昨日、大切なカバンを電車の中に忘れてしまいました。駅の人に聞きましたが、見つかりませんでした。今日、もう一度駅に電話をして聞くつもりです。中には鍵と財布が入っているので、とても心配です。", "question": "カバンの中には何が入っていますか。", "correctAnswer": "鍵と財布", "distractors": ["鍵と携帯電話", "財布と本", "パソコン"], "explanation": "The text specifically mentions '中には鍵と財布が入っているので' (Because keys and wallet are inside)." },
        { "passage": "私の祖父は毎朝五時に起きて、庭の掃除をします。その後、温かいお茶を飲みながら新聞を読みます。祖父は今年八十歳ですが、とても元気です。時々一緒に散歩に行きます。", "question": "おじいさんは朝起きてから一番初めに何をしますか。", "correctAnswer": "庭の掃除をする", "distractors": ["お茶を飲む", "新聞を読む", "散歩に行く"], "explanation": "The text says '毎朝五時に起きて、庭の掃除をします' (Wakes at 5 and cleans the garden)." },
        { "passage": "駅前に新しいパン屋ができました。今日の朝、仕事に行く前に寄ってみました。クロワッサンとメロンパンを買って、会社の昼ごはんにしました。とても美味しかったので、明日も買うつもりです。", "question": "この人はいつ買ったパンを食べましたか。", "correctAnswer": "会社の昼ごはんの時", "distractors": ["仕事に行く前", "今日の朝ごはん", "明日の昼ごはん"], "explanation": "The text says '会社の昼ごはんにしました' (Made it my lunch at the company)." },
        { "passage": "今、スーパーで卵が安いです。普通は二百円ですが、今日は百五十円です。私は卵を二パック買いました。今日の晩ご飯はオムライスを作るつもりです。家族もオムライスが好きです。", "question": "今日の卵の値段はいくらですか。", "correctAnswer": "百五十円", "distractors": ["二百円", "三百円", "百円"], "explanation": "The text states '今日は百五十円です' (Today it is 150 yen)." },
        { "passage": "私は昨日、初めて日本の温泉に行きました。お湯はとても熱くて、最初は入れませんでしたが、少しずつ入ると気持ちが良かったです。温泉の後は冷たい牛乳を飲みました。これが日本の文化だと友達に教わりました。", "question": "温泉のお湯はどうでしたか。", "correctAnswer": "とても熱かった", "distractors": ["冷たかった", "ちょうどよかった", "汚かった"], "explanation": "The text explicitly says 'お湯はとても熱くて' (The hot water was very hot)." },
        { "passage": "来月、私は国へ帰ります。日本で買ったお土産をたくさん持っていきます。家族には日本の美味しいお菓子を、友達には文房具を買いました。荷物がとても重いので、空港まではバスで行くつもりです。", "question": "友達には何を買いましたか。", "correctAnswer": "文房具", "distractors": ["お菓子", "時計", "服"], "explanation": "The text says '友達には文房具を買いました' (Bought stationery for friends)." },
        { "passage": "木村さんは音楽が好きです。週末はよくコンサートに行きます。昨日はピアノのコンサートに行きました。来週はギターのコンサートのチケットを持っています。とても楽しみにしています。", "question": "木村さんは昨日、何のコンサートに行きましたか。", "correctAnswer": "ピアノ", "distractors": ["ギター", "バイオリン", "歌"], "explanation": "The text clearly states '昨日はピアノのコンサートに行きました' (Yesterday went to a piano concert)." },
        { "passage": "私の部屋にはエアコンがありません。夏は扇風機だけを使いますが、とても暑いです。ですから、夏の昼間はよく近くの図書館へ行きます。涼しくて、本も読めるので一石二鳥です。", "question": "この人は夏、どうして図書館へ行きますか。", "correctAnswer": "涼しくて本も読めるから", "distractors": ["エアコンが壊れているから", "扇風機がないから", "図書館で働くから"], "explanation": "The reason given is '涼しくて、本も読めるので' (Because it is cool and I can also read books)." },
        { "passage": "明日の遠足についてのお知らせ：明日は朝八時に学校のグラウンドに集まってください。雨が降った場合は遠足は中止になり、普通に授業をします。お弁当と飲み物を忘れないでください。", "question": "雨が降った場合、明日はどうなりますか。", "correctAnswer": "遠足は中止で、授業をする", "distractors": ["遠足に行く", "学校は休みになる", "図書館に行く"], "explanation": "The notice says '雨が降った場合は遠足は中止になり、普通に授業をします' (If it rains, the field trip is canceled and normal classes will be held)." },
        { "passage": "今日、デパートのレストランで食事をしました。私はハンバーグとライスを頼みました。友達はカレーライスを頼みました。食後のコーヒーはサービスで無料でした。とてもいいレストランだと思いました。", "question": "この人がお金を払わなかったものは何ですか。", "correctAnswer": "コーヒー", "distractors": ["ハンバーグ", "ライス", "カレーライス"], "explanation": "The text states '食後のコーヒーはサービスで無料でした' (The after-meal coffee was complimentary/free)." },
        { "passage": "私は写真を撮るのが好きです。いつもデジタルカメラを持っています。でも、昨日はカメラの電池がなくなってしまったので、スマートフォンで写真を撮りました。スマートフォンのカメラもとてもきれいです。", "question": "昨日、どうしてスマートフォンで写真を撮りましたか。", "correctAnswer": "カメラの電池がなかったから", "distractors": ["カメラを忘れたから", "カメラが壊れたから", "スマートフォンが新しいから"], "explanation": "The reason was 'カメラの電池がなくなってしまったので' (Because the camera's battery ran out)." },
        { "passage": "田中さんは、毎日仕事が終わってからスポーツジムに行きます。一時間走って、少し泳ぎます。ジムの後はいつもお腹が空くので、駅の近くのラーメン屋でラーメンを食べてから家に帰ります。", "question": "田中さんはジムの後で何をしますか。", "correctAnswer": "ラーメンを食べる", "distractors": ["走る", "泳ぐ", "すぐ家に帰る"], "explanation": "After the gym, Tanaka 'ラーメンを食べてから家に帰ります' (Eats ramen and then goes home)." },
        { "passage": "今週の土曜日は町のお祭りがあります。浴衣を着て、花火を見るつもりです。夜店もたくさん出るので、焼きそばやかき氷を食べたいです。友達と三人で行く約束をしました。今からとても楽しみです。", "question": "この人はお祭りで何をするつもりですか。", "correctAnswer": "花火を見る", "distractors": ["お祭りで働く", "浴衣を買う", "家でテレビを見る"], "explanation": "The text states '花火を見るつもりです' (Plan to watch the fireworks)." },
        { "passage": "私は日本の漫画が好きです。日本語の勉強のために、簡単な漫画から読み始めました。漢字にふりがなが付いているので、辞書を引きながら読むことができます。少しずつ読むのが早くなってきました。", "question": "この人はどうして漫画を読むのが早くなりましたか。", "distractors": ["簡単な漫画ではないから", "漢字がないから", "辞書を使わないから"], "correctAnswer": "少しずつ読んでいるから（※文脈から理解）または「ふりがなが付いているから」等の理由", "explanation": "※修正します。Question: 漫画に何が付いていますか。 CorrectAnswer: ふりがな。The text says '漢字にふりがなが付いているので' (Because furigana is attached to the kanji)." },
        { "passage": "私は日本の漫画が好きです。日本語の勉強のために、簡単な漫画から読み始めました。漢字にふりがなが付いているので、辞書を引きながら読むことができます。少しずつ読むのが早くなってきました。", "question": "漫画の漢字には何が付いていますか。", "correctAnswer": "ふりがな", "distractors": ["英語の意味", "ローマ字", "中国語"], "explanation": "The text says '漢字にふりがなが付いているので' (Because furigana is attached to the kanji)." },
        { "passage": "病院の受付：すみません、初めてですか。保険証を出してください。あちらの椅子に座って、名前が呼ばれるまで待っていてください。熱がある人は、この体温計で熱を測ってください。", "question": "初めて病院に来た人は、初めに何をしなければなりませんか。", "correctAnswer": "保険証を出す", "distractors": ["熱を測る", "椅子に座る", "名前を呼ぶ"], "explanation": "The receptionist says '初めてですか。保険証を出してください' (Is it your first time? Please submit your insurance card)." },
        { "passage": "私の趣味は旅行です。日本の中では京都や北海道に行ったことがあります。でも、まだ沖縄には行ったことがありません。海がとてもきれいで、暖かい場所だと聞きました。来年の夏休みにはぜひ行きたいです。", "question": "この人が来年の夏に行きたい場所はどこですか。", "correctAnswer": "沖縄", "distractors": ["京都", "北海道", "外国"], "explanation": "The text mentions wanting to go to Okinawa: '来年の夏休みにはぜひ行きたいです' (I definitely want to go there next summer vacation)." },
        { "passage": "今日、新しい漢字を十個習いました。先生は「明日テストをしますから、家で三回ずつノートに書いて練習してください」と言いました。私は今から机に向かって、三十回漢字を書かなければなりません。", "question": "この人は今日これから、漢字を全部で何回書きますか。", "correctAnswer": "三十回", "distractors": ["十回", "三回", "十三回"], "explanation": "Learned 10 kanji (十個), must write each 3 times (三回ずつ). 10 x 3 = 30 times (三十回)." },
        { "passage": "田中さん、昨日は傘を貸してくれてありがとうございました。今日はお返しに来ましたが、田中さんがいなかったので、机の上に置いておきます。本当に助かりました。", "question": "この人はどうして田中さんの机に傘を置きましたか。", "correctAnswer": "田中さんがいなかったから", "distractors": ["田中さんに会いたくなかったから", "田中さんの机が好きだから", "田中さんに怒られたから"], "explanation": "The memo says '田中さんがいなかったので、机の上に置いておきます' (Because Tanaka-san wasn't here, I will leave it on the desk)." },
        { "passage": "私はスポーツが好きです。自分でテニスをするのも好きですが、テレビでサッカーを見るのが一番好きです。野球はあまり見ません。", "question": "この人が一番好きなことは何ですか。", "correctAnswer": "テレビでサッカーを見る", "distractors": ["テニスをする", "野球を見る", "自分でサッカーをする"], "explanation": "The text clearly states 'テレビでサッカーを見るのが一番好きです' (Watching soccer on TV is what I like best)." },
        { "passage": "昨日から喉が痛くて、少し咳が出ます。熱はありませんが、今日は学校を休んで、病院へ行くことにしました。早く治したいです。", "question": "この人の今の体はどうですか。", "correctAnswer": "熱はないが、喉が痛い", "distractors": ["熱があって、喉が痛い", "熱はないが、お腹が痛い", "咳は出ないが、喉が痛い"], "explanation": "The text says '喉が痛くて、少し咳が出ます。熱はありませんが...' (My throat hurts and I have a little cough. I don't have a fever, but...)." },
        { "passage": "図書館からのお知らせ：明日は古い本を捨てる日です。朝九時から十時まで、入り口の前に古い本を並べます。好きな本を三冊まで持って帰ることができます。お金は要りません。", "question": "明日の朝、図書館で何ができますか。", "correctAnswer": "古い本を三冊までもらえる", "distractors": ["新しい本を三冊買える", "古い本を三冊捨てられる", "好きな本を何冊でももらえる"], "explanation": "The notice says '好きな本を三冊まで持って帰ることができます。お金は要りません' (You can take up to 3 books home. No money is needed)." },
        { "passage": "今日、駅で電車に乗ろうとしましたが、財布を忘れたことに気づきました。切符を買うことができませんでした。急いで家に取りに帰ったので、約束の時間に遅れてしまいました。", "question": "どうして約束の時間に遅れましたか。", "correctAnswer": "家に財布を取りに帰ったから", "distractors": ["電車が遅れたから", "切符をなくしたから", "駅で道に迷ったから"], "explanation": "The text says '急いで家に取りに帰ったので、約束の時間に遅れてしまいました' (Because I hurried home to get it, I was late for the appointment time)." },
        { "passage": "休みの日はいつも朝十時まで寝ています。でも、今度の土曜日は友達と海へ行くので、朝六時に起きなければなりません。起きられるか心配です。", "question": "今度の土曜日は何時に起きますか。", "correctAnswer": "朝六時", "distractors": ["朝十時", "朝五時", "昼"], "explanation": "The text explicitly says '今度の土曜日は... 朝六時に起きなければなりません' (This coming Saturday... I must wake up at 6 AM)." },
        { "passage": "私の母は料理がとても上手です。母が作る料理の中で、私はカレーが一番好きです。でも、父はカレーがあまり好きではありません。父は天ぷらが一番好きだと言っています。", "question": "お父さんが一番好きな料理は何ですか。", "correctAnswer": "天ぷら", "distractors": ["カレー", "寿司", "母の料理全部"], "explanation": "The text states '父は天ぷらが一番好きだと言っています' (Father says he likes tempura the best)." },
        { "passage": "今週の金曜日に、会社のみんなでパーティーをします。私は飲み物を買う係です。ビールとお茶とジュースをたくさん買わなければなりません。重いので、車で買いに行きます。", "question": "この人はパーティーの前に何をしますか。", "correctAnswer": "車で飲み物を買いに行く", "distractors": ["食べ物を作る", "車で会社のみんなを迎えに行く", "歩いて買い物に行く"], "explanation": "The text says '私は飲み物を買う係です' and '車で買いに行きます'." },
        { "passage": "この公園には、犬を連れて入ることができません。自転車に乗ることもできません。でも、お弁当を食べることはできます。ゴミは必ず持って帰ってください。", "question": "この公園でしてもいいことは何ですか。", "correctAnswer": "お弁当を食べること", "distractors": ["犬と散歩すること", "自転車に乗ること", "ゴミを捨てること"], "explanation": "The text says 'お弁当を食べることはできます' (You can eat a boxed lunch)." },
        { "passage": "昨日、日本語のテストがありました。全部で五十問ありました。私は四十五問答えを書きましたが、五問は時間がなくて書けませんでした。難しかったです。", "question": "この人は何問答えを書きましたか。", "correctAnswer": "四十五問", "distractors": ["五十問", "五問", "四十問"], "explanation": "The text explicitly says '私は四十五問答えを書きました' (I wrote answers for 45 questions)." },
        { "passage": "妹の誕生日に、妹が好きな歌手のCDをプレゼントしました。妹はとても喜んで、毎日自分の部屋で聞いています。私も時々一緒に聞きますが、いい歌だと思います。", "question": "妹の誕生日に何をプレゼントしましたか。", "correctAnswer": "CD", "distractors": ["歌手のコンサートのチケット", "洋服", "本"], "explanation": "The text states 'CDをプレゼントしました' (I gifted a CD)." },
        { "passage": "今日の昼ご飯は、駅前のパン屋で買いました。サンドイッチとメロンパンを買って、公園のベンチで食べました。外で食べるご飯は、いつもより美味しく感じました。", "question": "この人はどこで昼ご飯を食べましたか。", "correctAnswer": "公園のベンチ", "distractors": ["駅前のパン屋", "会社の食堂", "家"], "explanation": "The text says '公園のベンチで食べました' (Ate on a bench in the park)." },
        { "passage": "山田先生へ。今日、お腹が痛いので学校を休みます。明日のテストの範囲を、後で田中さんに聞きます。申し訳ありません。（スミス）", "question": "スミスさんは明日のテストについてどうしますか。", "correctAnswer": "田中さんに聞く", "distractors": ["山田先生に聞く", "テストを休む", "自分で調べる"], "explanation": "The memo says '明日のテストの範囲を、後で田中さんに聞きます' (I will ask Tanaka-san later about the scope of tomorrow's test)." },
        { "passage": "私は毎晩、寝る前に牛乳を温めて飲みます。そうすると、とてもよく眠れるからです。冷たい牛乳は、お腹が痛くなることがあるので飲みません。", "question": "どうして温かい牛乳を飲みますか。", "correctAnswer": "よく眠れるから", "distractors": ["美味しいから", "お腹が痛くなるから", "冷たいのが嫌いだから"], "explanation": "The reason is 'そうすると、とてもよく眠れるからです' (Because if I do so, I can sleep very well)." },
        { "passage": "明日は日曜日ですが、仕事があります。朝九時から夕方の五時までです。仕事が終わったら、まっすぐ家に帰ってゆっくりお風呂に入りたいです。疲れると思いますから。", "question": "この人は明日の仕事の後で何をしますか。", "correctAnswer": "家に帰ってお風呂に入る", "distractors": ["友達と遊ぶ", "映画を見る", "レストランへ行く"], "explanation": "The text says '仕事が終わったら、まっすぐ家に帰ってゆっくりお風呂に入りたいです' (When work ends, I want to go straight home and take a relaxing bath)." },
        { "passage": "スーパーのレジで、前の人がお金を落としました。私は「お金が落ちましたよ」と言って、拾ってあげました。その人は「ありがとうございます」と言って、とても嬉しそうでした。", "question": "この人はスーパーで何をしましたか。", "correctAnswer": "落ちたお金を拾ってあげた", "distractors": ["お金を落とした", "お金を盗んだ", "前の人にお金をあげた"], "explanation": "The speaker says '拾ってあげました' (I picked it up for them)." },
        { "passage": "私は新しいカメラが欲しいです。今持っているカメラは五年前に買ったもので、少し大きくて重いです。旅行に持っていくのに、もっと小さくて軽いカメラがいいです。", "question": "この人はどんなカメラが欲しいですか。", "correctAnswer": "小さくて軽いカメラ", "distractors": ["大きくて重いカメラ", "五年前に買ったカメラ", "大きくて軽いカメラ"], "explanation": "The text explicitly states 'もっと小さくて軽いカメラがいいです' (A smaller and lighter camera would be good)." },
        { "passage": "アパートのゴミの出し方：燃えるゴミは火曜日と金曜日です。燃えないゴミは水曜日です。朝八時までに出してください。夜に出してはいけません。", "question": "燃えないゴミはいつ出しますか。", "correctAnswer": "水曜日の朝八時まで", "distractors": ["火曜日と金曜日", "水曜日の夜", "毎朝八時まで"], "explanation": "The rules state '燃えないゴミは水曜日です' and '朝八時までに出してください'." },
        { "passage": "昨日は母の誕生日だったので、家族でレストランへ行きました。父がワインを頼んで、みんなで乾杯しました。料理も美味しくて、とても楽しい夜でした。", "question": "昨日、どうしてレストランへ行きましたか。", "correctAnswer": "母の誕生日だったから", "distractors": ["父の誕生日だったから", "ワインが飲みたかったから", "料理を作りたくなかったから"], "explanation": "The text opens with '昨日は母の誕生日だったので' (Because yesterday was Mother's birthday)." },
        { "passage": "今朝、家を出る時、空は晴れていました。でも、午後から急に黒い雲が出てきて、強い雨が降りました。傘を持っていなかったので、駅で少し雨が弱くなるのを待ちました。", "question": "この人はどうして駅で待ちましたか。", "correctAnswer": "雨が強くて、傘がなかったから", "distractors": ["電車が遅れたから", "友達を待っていたから", "道がわからなかったから"], "explanation": "The text says '傘を持っていなかったので... 雨が弱くなるのを待ちました' (Because I didn't have an umbrella, I waited for the rain to weaken)." },
        { "passage": "私の家には庭がありません。ですから、ベランダでトマトやきゅうりを育てています。毎朝、水をあげるのが私の仕事です。夏になると美味しい野菜が食べられます。", "question": "この人はどこで野菜を育てていますか。", "correctAnswer": "ベランダ", "distractors": ["庭", "畑", "家の中"], "explanation": "The text states 'ベランダでトマトやきゅうりを育てています' (I am growing tomatoes and cucumbers on the balcony)." },
        { "passage": "このホテルの朝ごはんは、パンとご飯と両方あります。私はいつもパンを食べますが、今日の朝はご飯と味噌汁を食べました。たまには日本の朝ごはんもいいと思いました。", "question": "この人は今日の朝、何を食べましたか。", "correctAnswer": "ご飯と味噌汁", "distractors": ["パンとコーヒー", "パンとご飯の両方", "何も食べなかった"], "explanation": "The text specifies '今日の朝はご飯と味噌汁を食べました' (This morning I ate rice and miso soup)." },
        { "passage": "駅前の本屋は、毎月十日が休みです。明日は十日なので、本屋へ行くことができません。今日のうちに、読みたかった本を買っておこうと思います。", "question": "明日の日付は何日ですか。", "correctAnswer": "十日", "distractors": ["九日", "十一日", "一日"], "explanation": "The text says '明日は十日なので' (Because tomorrow is the 10th)." },
        { "passage": "私は甘いものが好きです。ケーキもチョコレートも好きですが、一番好きなのはアイスクリームです。冬でも、暖房の効いた暖かい部屋でアイスクリームを食べるのが好きです。", "question": "この人が一番好きな甘いものは何ですか。", "correctAnswer": "アイスクリーム", "distractors": ["ケーキ", "チョコレート", "果物"], "explanation": "The text states '一番好きなのはアイスクリームです' (What I like the most is ice cream)." },
        { "passage": "昨日、友達と映画館で映画を見ました。とても悲しい映画で、私はたくさん泣いてしまいました。友達も泣いていました。終わった後、少し目が痛かったです。", "question": "どうして目が痛くなりましたか。", "correctAnswer": "映画を見てたくさん泣いたから", "distractors": ["映画館が暗かったから", "映画が面白くなかったから", "寝てしまったから"], "explanation": "The text links crying a lot ('たくさん泣いてしまいました') with the eyes hurting afterwards ('終わった後、少し目が痛かったです')." },
        { "passage": "うちの近くに新しい歯医者ができました。新しくてきれいなので、予約がいつもいっぱいです。私も昨日電話しましたが、来週の水曜日まで予約が取れませんでした。", "question": "新しい歯医者はどうですか。", "correctAnswer": "きれいで人気がある", "distractors": ["きれいでいつも空いている", "古いが人気がある", "高くて人気がない"], "explanation": "The text says '新しくてきれいなので、予約がいつもいっぱいです' (Because it's new and clean, reservations are always full/popular)." },
        { "passage": "私は料理を作るのが好きですが、片付けるのは嫌いです。ですから、いつも私が料理を作って、夫がお皿を洗います。二人で協力して家事をしています。", "question": "この人は料理の後で何をしますか。", "correctAnswer": "お皿を洗わない", "distractors": ["お皿を洗う", "夫に料理を作らせる", "何もしない"], "explanation": "The text says '私が料理を作って、夫がお皿を洗います' (I cook, and my husband washes the plates)." },
        { "passage": "来月の五日から十日まで、会社の休みをもらってハワイへ行きます。ハワイは初めてなので、今からとても楽しみです。新しい水着も買いました。", "question": "この人はハワイで何をしますか。", "correctAnswer": "旅行を楽しむ（水着を持っていく）", "distractors": ["会社で働く", "日本語を教える", "車を買う"], "explanation": "The context implies a vacation to Hawaii ('ハワイへ行きます' and '新しい水着も買いました')." },
        { "passage": "図書館で借りた本をなくしてしまいました。家の中やカバンの中をたくさん探しましたが、ありません。明日、図書館の人に謝って、お金を払わなければならないと思います。", "question": "この人は明日、図書館で何をしますか。", "correctAnswer": "謝って、お金を払う", "distractors": ["新しい本を借りる", "なくした本を返す", "本をもう一冊探す"], "explanation": "The text says '明日、図書館の人に謝って、お金を払わなければならないと思います' (Tomorrow, I think I must apologize and pay money)." },
        { "passage": "私は日本の電車に驚きました。時間通りに来るからです。私の国では、電車はよく十分や二十分遅れます。日本人は時間をとても大切にしていると思いました。", "question": "この人が驚いたことは何ですか。", "correctAnswer": "電車が時間通りに来ること", "distractors": ["電車がよく遅れること", "電車がきれいなこと", "電車が高いこと"], "explanation": "The text says '日本の電車に驚きました。時間通りに来るからです' (I was surprised by Japanese trains. Because they come on time)." },
        { "passage": "今日、スーパーで肉と野菜を買って、千五百円払いました。お釣りは五百円でした。その後、本屋で七百円の本を買いました。", "question": "この人は初めにスーパーのレジでいくら出しましたか。", "correctAnswer": "二千円", "distractors": ["千五百円", "五百円", "一万円"], "explanation": "Paid 1500 (千五百円払いました) and got 500 change (お釣りは五百円でした). This means they handed over 2000 yen (二千円)." },
        { "passage": "私はコーヒーが好きで、一日三杯飲みます。朝起きて一杯、昼ごはんの後で一杯、そして午後の仕事の間に一杯飲みます。夜は眠れなくなるので飲みません。", "question": "この人はいつコーヒーを飲みませんか。", "correctAnswer": "夜", "distractors": ["朝", "昼ごはんの後", "午後"], "explanation": "The text explicitly states '夜は眠れなくなるので飲みません' (At night, I don't drink it because I won't be able to sleep)." },
        { "passage": "このシャツは三千円ですが、二枚買うと五千円になります。私は白いシャツと青いシャツを一枚ずつ買いました。友達も同じように買いました。", "question": "この人はいくら払いましたか。", "correctAnswer": "五千円", "distractors": ["三千円", "六千円", "一万円"], "explanation": "The text states '二枚買うと五千円になります' (If you buy two, it becomes 5,000 yen) and '白いシャツと青いシャツを一枚ずつ買いました' (Bought one white and one blue, which is two total)." },
        { "passage": "昨日は雪が降りました。私の犬は雪が初めてだったので、庭に出ると大喜びで走り回りました。でも、私は寒かったので、すぐ家の中に入りました。", "question": "犬はどうして喜びましたか。", "correctAnswer": "初めて雪を見たから", "distractors": ["私が一緒に走ったから", "庭が広かったから", "暖かかったから"], "explanation": "The text says '私の犬は雪が初めてだったので...大喜びで' (Because it was my dog's first snow... with great joy)." },
        { "passage": "田中さんの趣味は山に登ることです。毎月一回、必ず山へ行きます。今月は富士山に登る予定です。富士山は日本で一番高い山なので、今から準備をしています。", "question": "田中さんは今月どこへ行きますか。", "correctAnswer": "富士山", "distractors": ["海", "外国", "一番低い山"], "explanation": "The text states '今月は富士山に登る予定です' (This month he plans to climb Mt. Fuji)." },
        { "passage": "私はパソコンで絵を描く仕事をしています。毎日家で仕事ができるので、通勤の時間がありません。でも、ずっと座っているので、時々腰が痛くなります。", "question": "この人の仕事の良くないところは何ですか。", "correctAnswer": "座っているので腰が痛くなること", "distractors": ["通勤に時間がかかること", "毎日家から出られないこと", "パソコンが壊れること"], "explanation": "The text says 'ずっと座っているので、時々腰が痛くなります' (Because I sit all the time, my lower back sometimes hurts)." },
        { "passage": "アパートの前に自動販売機があります。冷たいジュースと温かいコーヒーが買えます。私は夜中によくそこへ行って、温かいコーヒーを買って飲みながら勉強します。", "question": "この人は夜中に何をしますか。", "correctAnswer": "温かいコーヒーを買って勉強する", "distractors": ["冷たいジュースを買って寝る", "自動販売機で働く", "アパートの掃除をする"], "explanation": "The text says '温かいコーヒーを買って飲みながら勉強します' (I buy warm coffee and study while drinking it)." },
        { "passage": "今日は日曜日ですが、外は雨が降っています。どこにも遊びに行けません。家の中で弟と一緒にテレビのゲームをして過ごすことにしました。夕方までずっとゲームをしていました。", "question": "この人は今日、家の中で何をしましたか。", "correctAnswer": "テレビのゲームをした", "distractors": ["テレビを見た", "本を読んだ", "弟と勉強した"], "explanation": "The text says '弟と一緒にテレビのゲームをして過ごすことにしました' (Decided to spend time playing video games with my little brother)." },
        { "passage": "私のおじいちゃんは、カメラが大好きです。古いカメラをたくさん持っていて、毎日丁寧に磨いています。写真も上手で、私が入学式で撮ってもらった写真はお気に入りです。", "question": "おじいちゃんが毎日することは何ですか。", "correctAnswer": "カメラを磨く", "distractors": ["カメラを買う", "写真を撮る", "入学式に行く"], "explanation": "The text says '毎日丁寧に磨いています' (Carefully polishes them every day)." },
        { "passage": "駅前にあるケーキ屋さんは、毎週水曜日が安いです。普通のケーキが一つ三百円で買えます。私はいつも水曜日の夕方に寄って、家族の分のケーキを買って帰ります。", "question": "この人はいつケーキを買いますか。", "correctAnswer": "水曜日の夕方", "distractors": ["水曜日の朝", "日曜日の夕方", "毎日の夕方"], "explanation": "The text explicitly states '私はいつも水曜日の夕方に寄って...買います' (I always drop by on Wednesday evenings and buy)." },
        { "passage": "今日は暑いので、クーラーをつけました。でも、クーラーをつけると部屋が乾燥しますから、私はあまり好きではありません。本当は窓を開けて自然の風を入れるほうが好きです。", "question": "この人はクーラーについてどう思っていますか。", "correctAnswer": "部屋が乾燥するのであまり好きではない", "distractors": ["涼しくなるので大好きだ", "うるさいので嫌いだ", "風が入るので好きだ"], "explanation": "The speaker says 'クーラーをつけると部屋が乾燥しますから、私はあまり好きではありません' (Because turning on the AC dries out the room, I don't really like it)." },
        { "passage": "友達に結婚式の招待状をもらいました。結婚式は来月の十五日です。何を着て行けばいいか、今から悩んでいます。新しいドレスを買わなければならないかもしれません。", "question": "この人は今、何について悩んでいますか。", "correctAnswer": "結婚式に何を着ていくか", "distractors": ["結婚式に行くかどうか", "誰と結婚式に行くか", "プレゼントに何を買うか"], "explanation": "The text says '何を着て行けばいいか、今から悩んでいます' (I am worrying now about what I should wear)." },
        { "passage": "うちの近くのスーパーは、夜の九時に閉まります。私はいつも八時半ごろに行きます。その時間は、お弁当やパンが半額になっているからです。とてもお得です。", "question": "この人はどうして夜八時半にスーパーに行きますか。", "correctAnswer": "お弁当やパンが半額になっているから", "distractors": ["九時に閉まるから", "人が少ないから", "仕事が終わるのが八時だから"], "explanation": "The text states 'その時間は、お弁当やパンが半額になっているからです' (Because at that time, bentos and bread are half price)." },
        { "passage": "昨日の夜、雷が鳴って少し怖かったです。うちの猫も怖がって、ずっとベッドの下に隠れていました。朝になって雷が止むと、やっと出てきてご飯を食べました。", "question": "猫はどうしてベッドの下に隠れていましたか。", "correctAnswer": "雷が怖かったから", "distractors": ["寒かったから", "眠かったから", "私が怒ったから"], "explanation": "The text says '雷が鳴って... うちの猫も怖がって、ずっとベッドの下に隠れていました' (Thunder rolled... my cat was also scared and hid under the bed the whole time)." },
        { "passage": "私は毎日自転車で通勤しています。電車より時間がかかりますが、満員電車に乗らなくてもいいし、運動にもなるからです。雨の日だけはバスを使います。", "question": "この人は雨の日はどうしますか。", "correctAnswer": "バスを使う", "distractors": ["自転車で行く", "電車に乗る", "休む"], "explanation": "The text explicitly states '雨の日だけはバスを使います' (Only on rainy days, I use the bus)." },
        { "passage": "来月、日本語のテストを受けます。一番簡単なN5のテストです。毎日単語を三十個覚えて、文法を二ページ勉強しています。合格できるように頑張ります。", "question": "この人は毎日どうやって勉強していますか。", "correctAnswer": "単語を三十個覚えて、文法を二ページ勉強する", "distractors": ["単語を二個覚えて、文法を三十ページ勉強する", "毎日テストを受ける", "単語だけ勉強する"], "explanation": "The text states '毎日単語を三十個覚えて、文法を二ページ勉強しています' (Memorizing 30 words and studying 2 pages of grammar every day)." },
        { "passage": "私の趣味は映画を見ることです。特にホラー映画が好きです。でも、一人で見るのは怖いので、いつもホラー映画が好きな友達を誘って一緒に見に行きます。", "question": "この人はホラー映画を見る時、どうしますか。", "correctAnswer": "友達と一緒に行く", "distractors": ["一人で見る", "映画館へは行かない", "家族と見る"], "explanation": "The text says '一人で見るのは怖いので、いつもホラー映画が好きな友達を誘って一緒に見に行きます' (Because it's scary to watch alone, I always invite a friend... and go see it together)." },
        { "passage": "今日のテストは時間が足りませんでした。最後の問題まで読むことができなくて、とても悔しかったです。次からは、時間をもっと気にしながら問題を解こうと思います。", "question": "この人は次のテストでどうしようと思っていますか。", "correctAnswer": "時間を気にしながら解く", "distractors": ["もっと早く帰る", "最後の問題から解く", "テストを受けない"], "explanation": "The text concludes '次からは、時間をもっと気にしながら問題を解こうと思います' (From next time, I intend to solve problems while being more mindful of the time)." },
        { "passage": "休みの日に、自分でケーキを焼きました。レシピ通りに作りましたが、砂糖と塩を間違えて入れてしまいました。全然甘くなくて、とても食べられませんでした。", "question": "どうしてケーキは食べられませんでしたか。", "correctAnswer": "砂糖と塩を間違えたから", "distractors": ["レシピを見なかったから", "焼きすぎたから", "甘すぎたから"], "explanation": "The text states '砂糖と塩を間違えて入れてしまいました' (I mistakenly put in salt instead of sugar)." },
        { "passage": "私の国の夏はとても暑くて、四十度以上になることもあります。ですから、夏休みは一ヶ月半もあります。日本の夏休みも同じぐらい長くて、嬉しいです。", "question": "この人は日本の夏休みについてどう思っていますか。", "correctAnswer": "自分の国と同じぐらい長くて嬉しい", "distractors": ["短くて悲しい", "暑すぎて嫌だ", "国より長くて驚いた"], "explanation": "The text says '日本の夏休みも同じぐらい長くて、嬉しいです' (Japan's summer vacation is also about as long, and I am happy)." },
        { "passage": "昨日、デパートで青いシャツを買いました。本当は赤いシャツが欲しかったですが、サイズがありませんでした。でも、この青いシャツも安くてきれいなので、気に入っています。", "question": "この人は昨日、どんなシャツを買いましたか。", "correctAnswer": "青くてきれいなシャツ", "distractors": ["赤くてきれいなシャツ", "青くて高いシャツ", "赤くて安いシャツ"], "explanation": "The text states '本当は赤いシャツが欲しかったですが...青いシャツを買いました' (I really wanted red, but... I bought a blue shirt)." },
        { "passage": "明日は学校のテストがありますから、今日は夜遅くまで勉強するつもりです。でも、あまり遅くまで起きていると明日の朝起きられませんから、十二時には寝ます。", "question": "この人は今日、何時に寝ますか。", "correctAnswer": "十二時", "distractors": ["夜遅く（一時や二時）", "明日の朝", "十時"], "explanation": "The text explicitly says '十二時には寝ます' (I will sleep at 12 o'clock)." },
        { "passage": "田中さんへ。明日の約束ですが、午後一時に駅の前でしたね。でも、用事ができたので、二時に変更してもいいですか。お返事待っています。（佐藤）", "question": "佐藤さんは明日の約束の時間を何時にしたいですか。", "correctAnswer": "午後二時", "distractors": ["午後一時", "午前一時", "午後三時"], "explanation": "The memo asks '二時に変更してもいいですか' (Is it okay to change it to 2 o'clock?)." },
        { "passage": "私は毎朝パンを食べますが、今日の朝はパンがありませんでした。ですから、ご飯と卵を食べました。ご飯も美味しいと思いました。", "question": "この人は今日の朝、何を食べましたか。", "correctAnswer": "ご飯と卵", "distractors": ["パンと卵", "パンだけ", "何も食べなかった"], "explanation": "The text says '今日の朝はパンがありませんでした。ですから、ご飯と卵を食べました' (I didn't have bread today. Therefore, I ate rice and egg)." },
        { "passage": "来週の土曜日に、うちでパーティーをします。午後六時から始まります。鈴木さんは飲み物を、山田さんはケーキを買ってきてください。私は料理を作ります。", "question": "山田さんはパーティーの前に何をしますか。", "correctAnswer": "ケーキを買う", "distractors": ["料理を作る", "飲み物を買う", "部屋を掃除する"], "explanation": "The instruction is '山田さんはケーキを買ってきてください' (Yamada-san, please buy and bring a cake)." },
        { "passage": "私の趣味はギターを弾くことです。毎日学校から帰ってから、一時間ぐらい練習します。でも、夜は隣の人の迷惑になりますから弾きません。", "question": "この人はいつギターを弾きませんか。", "correctAnswer": "夜", "distractors": ["学校から帰った後", "毎日", "昼間"], "explanation": "The text states '夜は隣の人の迷惑になりますから弾きません' (I do not play at night because it bothers the neighbor)." },
        { "passage": "このバスは病院の前を通りますか。いいえ、通りません。病院へ行くなら、次の三番のバスに乗ってください。あのバスなら病院の前に止まります。", "question": "病院へ行く人はどうすればいいですか。", "correctAnswer": "三番のバスに乗る", "distractors": ["このバスに乗る", "一番のバスに乗る", "歩いて行く"], "explanation": "The response says '病院へ行くなら、次の三番のバスに乗ってください' (If going to the hospital, take the next bus number 3)." },
        { "passage": "今日はとてもいい天気でしたから、家族と車で遠い公園へ行きました。公園でお弁当を食べて、午後三時ごろ家に帰りました。車の中は少し暑かったです。", "question": "この人は今日どうやって公園へ行きましたか。", "correctAnswer": "車", "distractors": ["バス", "電車", "歩いて"], "explanation": "The text says '家族と車で遠い公園へ行きました' (Went to a distant park with family by car)." },
        { "passage": "図書館から本を三冊借りました。一冊は日本の歴史の本で、もう二冊は外国の小説です。歴史の本は難しいですが、勉強になります。", "question": "この人は小説の本を何冊借りましたか。", "correctAnswer": "二冊", "distractors": ["一冊", "三冊", "四冊"], "explanation": "Borrowed 3 books total: 1 history book (一冊は日本の歴史の本) and 2 novels (もう二冊は外国の小説)." },
        { "passage": "私は甘いお菓子が大好きです。特にチョコレートが好きですが、虫歯になるのが心配です。ですから、食べた後は必ずすぐに歯を磨くようにしています。", "question": "この人はお菓子を食べた後、どうしますか。", "correctAnswer": "歯を磨く", "distractors": ["水を飲む", "すぐ寝る", "もっとチョコレートを食べる"], "explanation": "The text states '食べた後は必ずすぐに歯を磨くようにしています' (After eating, I always make sure to brush my teeth immediately)." },
        { "passage": "新しいアパートの部屋はとても広くてきれいです。でも、駅から歩いて二十分かかります。雨の日は少し大変ですが、静かなので気に入っています。", "question": "このアパートの良くないところはどこですか。", "correctAnswer": "駅から遠いこと", "distractors": ["部屋が狭いこと", "汚いこと", "うるさいこと"], "explanation": "The negative point is '駅から歩いて二十分かかります' (Takes 20 minutes to walk from the station)." },
        { "passage": "明日は日曜日ですが、アルバイトがあります。朝の十時から夕方の四時までです。アルバイトの後、友達と映画を見に行く約束をしています。", "question": "この人は明日の夕方、何をしますか。", "correctAnswer": "友達と映画を見る", "distractors": ["アルバイトをする", "家に帰って休む", "友達と勉強する"], "explanation": "The text says 'アルバイトの後、友達と映画を見に行く約束をしています' (After the part-time job, I have an appointment to watch a movie with a friend)." },
        { "passage": "私の国では、冬に雪がたくさん降ります。でも、今住んでいる東京ではあまり雪が降りません。少し寂しいですが、東京の冬は暖かくて住みやすいです。", "question": "この人は東京の冬についてどう思っていますか。", "correctAnswer": "暖かくて住みやすい", "distractors": ["雪が多くて大変だ", "寒くて寂しい", "国と同じぐらい雪が降る"], "explanation": "The text explicitly states '東京の冬は暖かくて住みやすいです' (Tokyo's winter is warm and easy to live in)." },
        { "passage": "今日、デパートで母の誕生日プレゼントを買いました。きれいなスカーフです。父は母に花を買うと言っていました。母が喜んでくれると嬉しいです。", "question": "この人は母に何をプレゼントしますか。", "correctAnswer": "スカーフ", "distractors": ["花", "洋服", "カバン"], "explanation": "The text says 'デパートで母の誕生日プレゼントを買いました。きれいなスカーフです' (I bought a beautiful scarf)." },
        { "passage": "私は日本語の漢字が苦手です。ですから、毎日寝る前に漢字を五つ書いて覚えるようにしています。これを一ヶ月続けたら、少し読めるようになりました。", "question": "この人は毎日いつ漢字を勉強していますか。", "correctAnswer": "寝る前", "distractors": ["朝起きた時", "学校へ行く前", "昼休みの時"], "explanation": "The text says '毎日寝る前に漢字を五つ書いて覚えるようにしています' (I try to write and memorize 5 kanji before sleeping every day)." },
        { "passage": "昨日の夜は、風が強くてとてもうるさかったです。窓がガタガタ鳴って、あまり眠れませんでした。今日は一日中眠くて、授業に集中できませんでした。", "question": "この人はどうして眠いですか。", "correctAnswer": "風がうるさくて眠れなかったから", "distractors": ["夜遅くまで勉強したから", "テレビを見ていたから", "病気だから"], "explanation": "The reason is '風が強くてとてもうるさかったです...あまり眠れませんでした' (The wind was strong and noisy... I couldn't sleep much)." },
        { "passage": "田中さんの趣味は写真を撮ることです。週末はいつもカメラを持って、公園や川へ行きます。時々、きれいな花の写真を私に見せてくれます。", "question": "田中さんは週末に何をしますか。", "correctAnswer": "公園などで写真を撮る", "distractors": ["私にカメラを教える", "川で泳ぐ", "家で花を育てる"], "explanation": "The text says '週末はいつもカメラを持って、公園や川へ行きます' (Always takes a camera and goes to parks and rivers on weekends)." },
        { "passage": "このスーパーは毎月五日が「お肉の日」で、肉が安くなります。十日は「お魚の日」で、魚が安くなります。今日は五日なので、鶏肉と牛肉を買いました。", "question": "今日、このスーパーで何が安いですか。", "correctAnswer": "肉", "distractors": ["魚", "野菜", "全部"], "explanation": "Today is the 5th (今日は五日), which is Meat Day (肉が安くなります)." },
        { "passage": "私は来年、大学を卒業します。卒業したら、コンピューターの会社で働きたいです。ですから、今は一生懸命コンピューターのプログラミングを勉強しています。", "question": "この人は大学を卒業した後、どうしたいですか。", "correctAnswer": "コンピューターの会社で働きたい", "distractors": ["大学でプログラミングを教えたい", "外国へ留学したい", "すぐに結婚したい"], "explanation": "The text states '卒業したら、コンピューターの会社で働きたいです' (When I graduate, I want to work at a computer company)." },
        { "passage": "昨日のテストは、時間がなくて最後の問題までできませんでした。問題は難しくなかったですが、私がゆっくり考えすぎました。次はもっと早く答えます。", "question": "この人はどうして最後の問題ができませんでしたか。", "correctAnswer": "ゆっくり考えて、時間がなくなったから", "distractors": ["問題がとても難しかったから", "テストの日に休んだから", "勉強しなかったから"], "explanation": "The text says '問題は難しくなかったですが、私がゆっくり考えすぎました' (The problems weren't hard, but I thought too slowly)." },
        { "passage": "今週の土曜日は町のお祭りです。夜は花火がたくさん上がります。私は毎年家族と見に行っていましたが、今年は大学の友達と行くつもりです。", "question": "この人は今年の土曜日に誰とお祭りに行きますか。", "correctAnswer": "大学の友達", "distractors": ["家族", "一人で", "行かない"], "explanation": "The text contrasts the past with this year: '今年は大学の友達と行くつもりです' (This year I plan to go with university friends)." },
        { "passage": "駅前の喫茶店は、朝の七時から開いています。朝の時間はコーヒーを頼むと、パンと卵が無料でついてきます。とても美味しくてお得なので、よく行きます。", "question": "この喫茶店で朝コーヒーを頼むとどうなりますか。", "correctAnswer": "無料でパンと卵がもらえる", "distractors": ["安くコーヒーが飲める", "ケーキが無料でついてくる", "パンが安くなる"], "explanation": "The text states '朝の時間はコーヒーを頼むと、パンと卵が無料でついてきます' (Bread and egg come free with coffee)." },
        { "passage": "私は犬と猫の両方を飼っています。犬は外で遊ぶのが好きですが、猫は一日中家の中で寝ています。性格は全然違いますが、どちらも可愛いです。", "question": "猫はいつも何をしていますか。", "correctAnswer": "家の中で寝ている", "distractors": ["外で遊んでいる", "犬と遊んでいる", "一日中食べている"], "explanation": "The text says '猫は一日中家の中で寝ています' (The cat sleeps inside the house all day)." },
        { "passage": "昨日、大切な傘を電車の中に忘れてしまいました。青くて、持ち手のところが木でできている傘です。駅の忘れ物センターに電話しましたが、まだ見つかっていません。", "question": "この人が忘れた傘はどんな傘ですか。", "correctAnswer": "青くて、持ち手が木の傘", "distractors": ["赤くて、持ち手が木の傘", "青くて、全部が木の傘", "黒くて、持ち手がプラスチックの傘"], "explanation": "Described as '青くて、持ち手のところが木でできている傘です' (Blue, with a wooden handle)." },
        { "passage": "鈴木さんは英語がとても上手です。学生の時、アメリカに一年間留学していたそうです。私もいつか外国へ留学して、鈴木さんのように英語を話せるようになりたいです。", "question": "この人は将来どうしたいですか。", "correctAnswer": "留学して英語を上手に話したい", "distractors": ["アメリカ人になりたい", "鈴木さんに英語を教えたい", "外国の会社で働きたい"], "explanation": "The text says 'いつか外国へ留学して、鈴木さんのように英語を話せるようになりたいです' (I want to study abroad someday and become able to speak English like Suzuki-san)." },
        { "passage": "今日の晩ご飯はハンバーグでした。私が玉ねぎを切って、妹が肉をこねました。焼くのは母がやりました。みんなで作ったハンバーグは、とても美味しかったです。", "question": "ハンバーグを焼いたのは誰ですか。", "correctAnswer": "母", "distractors": ["私", "妹", "父"], "explanation": "The text explicitly states '焼くのは母がやりました' (Mother did the frying/baking)." },
        { "passage": "私のアパートの近くにはコンビニが三つもあります。とても便利ですが、夜中に買い物をするとお金をたくさん使ってしまうので、気をつけています。", "question": "この人は何について気をつけていますか。", "correctAnswer": "夜中にお金を使いすぎること", "distractors": ["コンビニに行かないこと", "昼間に買い物をすること", "コンビニで働くこと"], "explanation": "The text says '夜中に買い物をするとお金をたくさん使ってしまうので、気をつけています' (I am careful because shopping at night makes me spend a lot of money)." },
        { "passage": "週末、友達とテニスをする約束をしていました。でも、朝から強い雨が降っていたので、テニスは中止になりました。代わりに、二人で映画を見に行きました。", "question": "週末はどうしてテニスをしませんでしたか。", "correctAnswer": "雨が降っていたから", "distractors": ["映画を見たかったから", "友達が来なかったから", "ラケットが壊れたから"], "explanation": "The reason is '朝から強い雨が降っていたので、テニスは中止になりました' (Because heavy rain was falling, tennis was canceled)." },
        { "passage": "私は毎朝七時に起きます。でも、冬は外が寒くて、なかなかベッドから出ることができません。冬の朝は七時半に起きることが多いです。", "question": "この人は冬の朝、何時に起きることが多いですか。", "correctAnswer": "七時半", "distractors": ["七時", "六時", "八時"], "explanation": "The text states '冬の朝は七時半に起きることが多いです' (In winter mornings, I often wake up at 7:30)." },
        { "passage": "新しい靴を買いましたが、少し小さくて足が痛くなりました。買ったお店に行って、「もう少し大きいサイズに変えてください」と言いました。", "question": "この人はお店で何と言いましたか。", "correctAnswer": "大きいサイズに変えてほしい", "distractors": ["靴を返してお金がほしい", "小さいサイズに変えてほしい", "新しいデザインの靴がほしい"], "explanation": "The person asked 'もう少し大きいサイズに変えてください' (Please change it to a slightly larger size)." },
        { "passage": "私の家から学校までは歩いて三十分かかります。遠いですが、健康のために歩いています。雨の日はバスに乗りますが、バスだと十五分で着きます。", "question": "歩いて学校へ行くとどのくらいかかりますか。", "correctAnswer": "三十分", "distractors": ["十五分", "二十分", "一時間"], "explanation": "The text explicitly says '歩いて三十分かかります' (Takes 30 minutes on foot)." },
        { "passage": "昨日、初めてケーキを焼きました。形は少し悪かったですが、味は甘くてとても美味しかったです。家族も喜んで食べてくれました。次はクッキーを焼いてみたいです。", "question": "昨日のケーキはどうでしたか。", "correctAnswer": "形は悪いが美味しかった", "distractors": ["形も味もよかった", "形はいいがまずかった", "形も味も悪かった"], "explanation": "The text describes it as '形は少し悪かったですが、味は甘くてとても美味しかったです' (The shape was a little bad, but the taste was sweet and delicious)." },
        { "passage": "田中さん、今日の飲み会ですが、私は仕事が終わらないので少し遅れます。八時ごろにはお店に着くと思います。先に始めていてください。（佐藤）", "question": "佐藤さんは何時ごろお店に着きますか。", "correctAnswer": "八時ごろ", "distractors": ["七時ごろ", "九時ごろ", "行かない"], "explanation": "The memo says '八時ごろにはお店に着くと思います' (I think I will arrive at the shop around 8 o'clock)." },
        { "passage": "私は日本の古い町を歩くのが好きです。特に、京都と奈良が好きです。来年の春には、まだ行ったことがない金沢という町へ行ってみたいと思っています。", "question": "この人が来年行きたい町はどこですか。", "correctAnswer": "金沢", "distractors": ["京都", "奈良", "東京"], "explanation": "The text says '来年の春には...金沢という町へ行ってみたいと思っています' (Next spring... I want to try going to a town called Kanazawa)." },
        { "passage": "今日のテストは五十点でした。私はいつも八十点ぐらい取るので、今日はとても悪かったです。昨日ゲームをして、あまり勉強しなかったからです。反省しています。", "question": "今日のテストが悪かったのはどうしてですか。", "correctAnswer": "昨日ゲームをして勉強しなかったから", "distractors": ["問題がとても難しかったから", "いつも五十点だから", "テストの時間に遅れたから"], "explanation": "The reason given is '昨日ゲームをして、あまり勉強しなかったからです' (Because I played games yesterday and didn't study much)." },
        { "passage": "スーパーのレジ袋は有料です。一枚五円かかります。私はいつも自分のエコバッグを持っていきます。お金の節約になるし、環境にもいいからです。", "question": "この人は買い物に行く時、どうしますか。", "correctAnswer": "自分のエコバッグを持っていく", "distractors": ["レジ袋を五円で買う", "スーパーでカバンを買う", "何も持っていかない"], "explanation": "The text states '私はいつも自分のエコバッグを持っていきます' (I always bring my own eco-bag)." },
        { "passage": "私の趣味は音楽を聞くことです。ロックやポップスも好きですが、夜寝る前は静かなクラシックを聞きます。クラシックを聞くと、気持ちが落ち着くからです。", "question": "この人は寝る前にどんな音楽を聞きますか。", "correctAnswer": "クラシック", "distractors": ["ロック", "ポップス", "ジャズ"], "explanation": "The text states '夜寝る前は静かなクラシックを聞きます' (Before sleeping at night, I listen to quiet classical music)." },
        { "passage": "駅の近くに新しい本屋ができました。とても大きくて、カフェも入っています。本を買いながらコーヒーが飲めるので、今度の休みの日に行ってみるつもりです。", "question": "新しい本屋の中には何がありますか。", "correctAnswer": "カフェ", "distractors": ["映画館", "レストラン", "スーパー"], "explanation": "The text says 'とても大きくて、カフェも入っています' (Very big, and a cafe is also inside)." },
        { "passage": "妹は来月、アメリカへ留学します。英語の勉強のためです。私は妹がいなくなるので少し寂しいですが、妹の夢なので応援したいと思っています。", "question": "妹はどうしてアメリカへ行きますか。", "correctAnswer": "英語の勉強のため", "distractors": ["旅行のため", "仕事のため", "家族に会うため"], "explanation": "The reason given is '英語の勉強のためです' (For the purpose of English study)." },
        { "passage": "昨日、図書館で借りた本を読んでいたら、中に前の人のメモが挟まっていました。「最後まで頑張れ」と書いてありました。私もテスト勉強を頑張ろうと思いました。", "question": "本の中に何がありましたか。", "correctAnswer": "前の人が書いたメモ", "distractors": ["お金", "図書館の手紙", "答えの紙"], "explanation": "The text says '中に前の人のメモが挟まっていました' (A memo from the previous person was sandwiched inside)." },
        { "passage": "私の家は四人家族です。父、母、私、そして弟です。父は会社員で、母は病院で働いています。弟はまだ中学生で、毎日サッカーばかりしています。", "question": "お母さんはどこで働いていますか。", "correctAnswer": "病院", "distractors": ["会社", "学校", "スーパー"], "explanation": "The text explicitly states '母は病院で働いています' (Mother works at a hospital)." },
        { "passage": "今日は友達とカラオケに行きました。私は三時間歌って、声が枯れてしまいました。友達もたくさん歌って、二人ともとても疲れましたが楽しかったです。", "question": "この人は今日どうなりましたか。", "correctAnswer": "歌いすぎて声が枯れた", "distractors": ["カラオケでお腹が痛くなった", "疲れて歌えなかった", "友達と喧嘩した"], "explanation": "The text says '私は三時間歌って、声が枯れてしまいました' (I sang for 3 hours and my voice became hoarse)." },
        { "passage": "明日の天気予報を見ました。朝は晴れますが、午後から風が強くなって、夕方には雨が降るそうです。出かける時は傘を持っていったほうがいいです。", "question": "明日の夕方の天気はどうなりますか。", "correctAnswer": "雨", "distractors": ["晴れ", "曇り", "雪"], "explanation": "The forecast says '夕方には雨が降るそうです' (I hear it will rain in the evening)." },
        { "passage": "この辞書は電子辞書です。紙の辞書より軽くて、たくさんの言葉が入っているのでとても便利です。発音も聞くことができます。日本語の勉強に役に立ちます。", "question": "この辞書の便利なところは何ですか。", "correctAnswer": "軽くて発音も聞けるところ", "distractors": ["紙でできていて安いところ", "重いが言葉がたくさんあるところ", "英語の勉強だけができるところ"], "explanation": "Described as '紙の辞書より軽くて... 発音も聞くことができます' (Lighter than a paper dictionary... you can also hear the pronunciation)." },
        { "passage": "週末、部屋の片付けをしました。いらない服や本がたくさんあったので、全部捨てることにしました。部屋がとてもすっきりして、気持ちがいいです。", "question": "この人は週末に何をしましたか。", "correctAnswer": "いらない服や本を捨てた", "distractors": ["新しい服を買った", "本をたくさん読んだ", "部屋の掃除を休んだ"], "explanation": "The text says 'いらない服や本がたくさんあったので、全部捨てることにしました' (I decided to throw away all the unneeded clothes and books)." },
        { "passage": "今日の晩ご飯は、私がチャーハンを作りました。少し塩を入れすぎて、しょっぱくなってしまいました。母は「美味しいよ」と言ってくれましたが、私は残念でした。", "question": "今日のチャーハンはどうでしたか。", "correctAnswer": "塩を入れすぎてしょっぱかった", "distractors": ["とても美味しかった", "甘すぎた", "焦げてしまった"], "explanation": "The text states '少し塩を入れすぎて、しょっぱくなってしまいました' (I put a little too much salt and it became salty)." },
        { "passage": "来月、友達の結婚式があります。私はスピーチを頼まれました。大勢の人の前で話すのは緊張しますが、友達のお祝いなので一生懸命話すつもりです。", "question": "この人は結婚式で何をしますか。", "correctAnswer": "スピーチをする", "distractors": ["歌を歌う", "料理を作る", "写真を撮る"], "explanation": "The speaker says '私はスピーチを頼まれました' (I was asked to do a speech)." },
        { "passage": "私は日本のコンビニのお弁当が大好きです。安くて美味しくて、種類もたくさんあるからです。私が一番好きなのは、鶏肉が入ったお弁当です。", "question": "この人はコンビニのお弁当についてどう思っていますか。", "correctAnswer": "安くて美味しくて種類が多いから好きだ", "distractors": ["高いが美味しいから好きだ", "安いがまずいから嫌いだ", "種類が少ないからあまり買わない"], "explanation": "The text explicitly states the reasons: '安くて美味しくて、種類もたくさんあるからです'." },
        { "passage": "昨日、自転車に乗っている時に転んでしまいました。膝をすりむいて、少し血が出ました。痛かったですが、骨は折れていなかったのでよかったです。", "question": "自転車で転んでどうなりましたか。", "correctAnswer": "膝から血が出た", "distractors": ["骨を折った", "自転車が壊れた", "頭を打った"], "explanation": "The text says '膝をすりむいて、少し血が出ました' (I scraped my knee and bled a little)." },
        { "passage": "私の将来の夢は、世界中を旅行することです。色々な国の文化を知って、たくさんの人と話したいです。そのために、今は英語とスペイン語を勉強しています。", "question": "この人の夢は何ですか。", "correctAnswer": "世界中を旅行すること", "distractors": ["外国語の先生になること", "お金持ちになること", "日本で働くこと"], "explanation": "The text states clearly '私の将来の夢は、世界中を旅行することです' (My future dream is to travel around the world)." }
    ],

    // 6. Listening (TTS Transcripts)
    listening_questions: [
        { "question": "男の人と女の人が話しています。男の人は何を買いますか。", "transcript": "男：りんごとバナナを買ってきます。\n女：あ、バナナは家にあるから、りんごだけでいいですよ。\n男：わかりました。", "correctAnswer": "りんご", "distractors": ["バナナ", "りんごとバナナ", "何も買わない"], "explanation": "The woman says they already have bananas, so 'りんごだけでいい' (only apples are fine)." },
        { "question": "男の人と女の人が話しています。二人は何時に会いますか。", "transcript": "男：明日は十時に駅で会いましょう。\n女：十時は少し早いです。十時半にしてください。\n男：はい、わかりました。", "correctAnswer": "十時半", "distractors": ["十時", "九時半", "十一時"], "explanation": "The man suggests 10:00, but the woman asks for 10:30 (十時半にしてください)." },
        { "question": "先生が学生に話しています。学生は明日、何を持ってきますか。", "transcript": "先生：明日はテストをします。鉛筆と消しゴムを持ってきてください。辞書は使わないでください。", "correctAnswer": "鉛筆と消しゴム", "distractors": ["鉛筆と辞書", "消しゴムと辞書", "鉛筆だけ"], "explanation": "The teacher explicitly requests pencils and erasers, and says not to use dictionaries." },
        { "question": "女の人と男の人が話しています。女の人はどこへ行きますか。", "transcript": "女：すみません、郵便局はどこですか。\n男：あの角を右に曲がってください。銀行の隣にあります。\n女：ありがとうございます。", "correctAnswer": "郵便局", "distractors": ["銀行", "角の店", "駅"], "explanation": "The woman asks '郵便局はどこですか' (Where is the post office?)." },
        { "question": "男の人と女の人が話しています。男の人はどのバスに乗りますか。", "transcript": "男：すみません、一番のバスは病院へ行きますか。\n女：いいえ。病院へ行くのは三番のバスですよ。\n男：そうですか。ありがとうございます。", "correctAnswer": "三番のバス", "distractors": ["一番のバス", "二番のバス", "四番のバス"], "explanation": "The woman tells him the bus to the hospital is bus number 3 (三番のバス)." },
        { "question": "女の人と男の人が話しています。明日の天気はどうなりますか。", "transcript": "女：明日の天気はどうですか。雨が降りますか。\n男：いいえ、明日は一日中晴れますよ。\n女：よかった。じゃあ、洗濯をします。", "correctAnswer": "晴れ", "distractors": ["雨", "曇り", "雪"], "explanation": "The man says '明日は一日中晴れますよ' (It will be sunny all day tomorrow)." },
        { "question": "男の人と女の人がレストランで話しています。女の人は何を食べますか。", "transcript": "男：僕はカレーにします。山田さんは？\n女：私はうどんにします。あ、やっぱりパスタにします。\n男：じゃあ、注文しますね。", "correctAnswer": "パスタ", "distractors": ["うどん", "カレー", "パスタとうどん"], "explanation": "She initially says udon, but changes her mind to pasta using 'やっぱり' (actually/on second thought)." },
        { "question": "先生が話しています。学生は初めに何をしますか。", "transcript": "先生：今からテストを始めますが、まだ開けないでください。まず、一番上の紙に名前を書いてください。それから、テストを開けてください。", "correctAnswer": "名前を書く", "distractors": ["テストを開ける", "問題を解く", "先生に聞く"], "explanation": "The teacher says 'まず、一番上の紙に名前を書いてください' (First, write your name on the top paper)." },
        { "question": "男の人と女の人が写真を見て話しています。女の人の妹はどの人ですか。", "transcript": "男：これは家族の写真ですか。\n女：はい。この髪が長くて、眼鏡をかけているのが妹です。\n男：背が高いですね。", "correctAnswer": "髪が長くて、眼鏡をかけている人", "distractors": ["髪が短くて、眼鏡をかけている人", "髪が長くて、眼鏡をかけていない人", "髪が短くて、眼鏡をかけていない人"], "explanation": "She describes her sister as '髪が長くて、眼鏡をかけている' (long hair, wearing glasses)." },
        { "question": "男の人と女の人が話しています。男の人のカバンはどれですか。", "transcript": "男：すみません、そのカバンを取ってください。\n女：この黒いカバンですか。\n男：いいえ、その白いカバンです。大きいのと小さいのがありますが、小さいほうです。", "correctAnswer": "白くて小さいカバン", "distractors": ["黒くて小さいカバン", "白くて大きいカバン", "黒くて大きいカバン"], "explanation": "He asks for the white bag (白いカバン) and specifically the smaller one (小さいほう)." },
        { "question": "女の人と男の人が話しています。女の人はこれから何をしますか。", "transcript": "女：あ、雨が降ってきましたね。\n男：ええ。傘を持っていますか。\n女：いいえ。あそこの店で買ってきます。", "correctAnswer": "傘を買う", "distractors": ["家に帰る", "雨が止むのを待つ", "男の人に傘を借りる"], "explanation": "The woman says she doesn't have an umbrella and will go buy one at that shop (あそこの店で買ってきます)." },
        { "question": "男の人と女の人が話しています。ケーキはいくつ買いますか。", "transcript": "男：ケーキを買いましょう。家族は四人ですね。\n女：私はダイエットをしているから、食べません。\n男：じゃあ、三つですね。", "correctAnswer": "三つ", "distractors": ["四つ", "二つ", "五つ"], "explanation": "There are 4 family members, but the woman is on a diet and won't eat, so they buy 3." },
        { "question": "先生が学生に話しています。宿題はいつまでに出しますか。", "transcript": "先生：この宿題は、来週の金曜日までに出してください。木曜日ではありませんよ。\n学生：はい、わかりました。", "correctAnswer": "来週の金曜日", "distractors": ["来週の木曜日", "今週の金曜日", "今週の木曜日"], "explanation": "The teacher explicitly says '来週の金曜日までに出してください' (Turn it in by next Friday)." },
        { "question": "男の人と女の人が話しています。男の人はどうして遅れましたか。", "transcript": "女：遅いですね。どうしたんですか。\n男：すみません。バスがなかなか来なかったんです。電車で来ればよかったです。", "correctAnswer": "バスが来なかったから", "distractors": ["電車が遅れたから", "道に迷ったから", "寝坊したから"], "explanation": "The man explains 'バスがなかなか来なかったんです' (The bus just wouldn't come)." },
        { "question": "女の人が電話で話しています。女の人は何時に予約をしましたか。", "transcript": "女：すみません、今日の午後、歯医者の予約をしたいんですが。\n男：今日の午後は、三時と四時半が空いています。\n女：じゃあ、三時にお願いします。", "correctAnswer": "三時", "distractors": ["四時半", "二時", "三時半"], "explanation": "The options are 3:00 and 4:30. The woman chooses '三時にお願いします' (3:00 please)." },
        { "question": "男の人と女の人が話しています。男の人は今週の週末、何をしますか。", "transcript": "女：週末は海へ行きますか。\n男：いえ、雨が降るそうですから、家で映画を見ます。\n女：そうですか。私はデパートへ買い物に行きます。", "correctAnswer": "家で映画を見る", "distractors": ["海へ行く", "デパートへ行く", "家で寝る"], "explanation": "The man says because it will rain, '家で映画を見ます' (I will watch a movie at home)." },
        { "question": "会社で男の人と女の人が話しています。男の人はコピーを何枚しますか。", "transcript": "女：山田さん、この紙をコピーしてください。会議で使うので、十枚お願いします。\n男：あ、鈴木さんも来ますから、もう一枚必要ですよ。\n女：そうですね。じゃあ、全部で十一枚お願いします。", "correctAnswer": "十一枚", "distractors": ["十枚", "十二枚", "一枚"], "explanation": "They initially need 10, but Suzuki is coming so they need 1 more, making it 11 total." },
        { "question": "男の人と女の人が話しています。二人はどのレストランに行きますか。", "transcript": "男：お腹が空きましたね。あそこにレストランがありますよ。\n女：あそこはイタリア料理ですね。私は今日、日本の料理が食べたいです。\n男：じゃあ、駅の前の寿司屋に行きましょう。", "correctAnswer": "寿司屋", "distractors": ["イタリア料理のレストラン", "駅の前のラーメン屋", "どこにも行かない"], "explanation": "The woman wants Japanese food, so the man suggests going to the sushi shop in front of the station." },
        { "question": "先生が留学生に話しています。学生は明日、どこに集まりますか。", "transcript": "先生：明日は工場を見学します。朝八時に、学校の正門の前に集まってください。教室ではありませんよ。", "correctAnswer": "学校の正門の前", "distractors": ["教室", "工場", "駅"], "explanation": "The teacher states '学校の正門の前に集まってください' (Please gather in front of the school's main gate)." },
        { "question": "男の人と女の人が話しています。女の人の趣味は何ですか。", "transcript": "男：マリアさんの趣味は音楽を聞くことですか。\n女：音楽も好きですが、一番好きなのは写真を撮ることです。週末はよくカメラを持って出かけます。", "correctAnswer": "写真を撮ること", "distractors": ["音楽を聞くこと", "散歩すること", "カメラを買うこと"], "explanation": "She likes music, but '一番好きなのは写真を撮ることです' (What I like best is taking pictures)." },
        { "question": "男の人と女の人が話しています。男の人は夏休みにどこへ行きましたか。", "transcript": "女：田中さんは夏休みに京都へ行きましたか。\n男：いいえ。京都は人が多いので、北海道へ行きました。涼しくてよかったですよ。", "correctAnswer": "北海道", "distractors": ["京都", "東京", "どこへも行かなかった"], "explanation": "He didn't go to Kyoto because of crowds, but went to Hokkaido instead." },
        { "question": "女の人と男の人が話しています。女の人はこれから何をしますか。", "transcript": "女：あ、もう五時ですね。銀行に行かなければなりません。\n男：銀行はもう閉まっていますよ。三時までです。\n女：そうですか。じゃあ、郵便局へ切手を買いに行きます。", "correctAnswer": "郵便局へ行く", "distractors": ["銀行へ行く", "家に帰る", "切手を貼る"], "explanation": "The bank is closed, so she decides to go to the post office instead to buy stamps." },
        { "question": "男の人と女の人が話しています。男の人は昨日、何時間勉強しましたか。", "transcript": "女：明日はテストですね。昨日はたくさん勉強しましたか。\n男：はい。夜七時から十一時まで勉強しました。\n女：すごいですね。私は二時間しか勉強しませんでした。", "correctAnswer": "四時間", "distractors": ["二時間", "七時間", "十一時間"], "explanation": "He studied from 7 PM to 11 PM, which is 4 hours (四時間)." },
        { "question": "女の人と男の人が話しています。カレンダーはどこに掛けますか。", "transcript": "女：このカレンダー、どこに掛けましょうか。ドアの横がいいですか。\n男：ドアの横はポスターがありますから、窓の横にしましょう。\n女：はい、わかりました。", "correctAnswer": "窓の横", "distractors": ["ドアの横", "ポスターの上", "机の上"], "explanation": "The man says next to the door has a poster, so '窓の横にしましょう' (Let's put it next to the window)." },
        { "question": "男の人と女の人が服の店で話しています。女の人はどの服を買いますか。", "transcript": "男：この赤いシャツ、可愛いですね。\n女：でも、少し派手です。私はこの青いシャツにします。白もいいですが、汚れやすいですから。", "correctAnswer": "青いシャツ", "distractors": ["赤いシャツ", "白いシャツ", "青と白のシャツ"], "explanation": "Red is too flashy, white gets dirty easily, so she chooses the blue shirt (青いシャツ)." },
        { "question": "先生が学生に話しています。学生は今日、宿題の紙をどうしますか。", "transcript": "先生：今日の宿題の紙は、今集めません。家に持って帰って、明日机の上に置いてください。", "correctAnswer": "家に持って帰る", "distractors": ["今、先生に出す", "今、机の上に置く", "友達に見せる"], "explanation": "The teacher explicitly says '家に持って帰って' (Take it home)." },
        { "question": "男の人と女の人が話しています。男の人の電話番号は何番ですか。", "transcript": "女：電話番号を教えてください。\n男：はい。〇九〇、一二三四の、五六八七です。\n女：五六七八ですね。\n男：いいえ、五六八七です。", "correctAnswer": "090-1234-5687", "distractors": ["090-1234-5678", "090-1243-5687", "090-1234-5867"], "explanation": "The woman mistakenly says 5678, but the man corrects her to 5687." },
        { "question": "女の人が駅で駅員と話しています。女の人は切符をいくら払いましたか。", "transcript": "女：すみません、東京まで大人一枚と、子供一枚です。\n駅員：大人は五百円、子供は半分の二百五十円です。全部で七百五十円です。\n女：はい、千円お願いします。", "correctAnswer": "七百五十円", "distractors": ["五百円", "二百五十円", "千円"], "explanation": "The total cost for the tickets is 750 yen (七百五十円). She handed over a 1000 yen bill to pay it." },
        { "question": "男の人と女の人が道で話しています。図書館はどこですか。", "transcript": "男：すみません、図書館はどこですか。\n女：この道をまっすぐ行って、二つ目の角を右に曲がってください。公園の向こうにあります。", "correctAnswer": "二つ目の角を右に曲がる", "distractors": ["一つ目の角を右に曲がる", "二つ目の角を左に曲がる", "公園の手前にある"], "explanation": "The directions are '二つ目の角を右に曲がって' (Turn right at the second corner)." },
        { "question": "男の人と女の人が話しています。明日は何曜日ですか。", "transcript": "女：明日は休みですね。日曜日ですから。\n男：ええ。今日は土曜日で、一日中雨でしたから、明日は晴れるといいですね。", "correctAnswer": "日曜日", "distractors": ["土曜日", "月曜日", "金曜日"], "explanation": "The woman says '明日は休みですね。日曜日ですから' (Tomorrow is a holiday, since it's Sunday)." },
        { "question": "お母さんと男の子が話しています。男の子はこれから何をしますか。", "transcript": "母：太郎、晩ご飯の前に手を洗いなさい。\n男の子：もう洗ったよ。ねえ、テレビを見てもいい？\n母：宿題が終わってからにしなさい。\n男の子：はーい。じゃあ、今からやるよ。", "correctAnswer": "宿題をする", "distractors": ["手を洗う", "テレビを見る", "晩ご飯を食べる"], "explanation": "He already washed his hands. He can't watch TV until homework is done, so he says '今からやるよ' (I'll do it now)." },
        { "question": "男の人と女の人が話しています。女の人は昨日、何をしましたか。", "transcript": "男：昨日は天気がよかったですね。どこかへ出かけましたか。\n女：いいえ。本当は買い物に行きたかったんですが、少し熱があったので、家でずっと寝ていました。", "correctAnswer": "家で寝ていた", "distractors": ["買い物に行った", "病院に行った", "仕事をした"], "explanation": "She wanted to go shopping, but had a fever, so '家でずっと寝ていました' (Slept at home the whole time)." },
        { "question": "先生がテストについて話しています。テストは何分間ですか。", "transcript": "先生：今からテストを始めます。時間は五十分です。一時十分から、二時までです。終わった人は静かに外に出ていいです。", "correctAnswer": "五十分", "distractors": ["一時間", "六十分", "四十分"], "explanation": "The teacher states '時間は五十分です' (The time is 50 minutes)." },
        { "question": "男の人と女の人が話しています。女の人はどんな車を買いましたか。", "transcript": "男：新しい車を買ったんですね。赤い車ですか。\n女：いいえ。本当は赤がよかったんですが、母も乗るので、白い車にしました。小さくて運転しやすいですよ。", "correctAnswer": "白くて小さい車", "distractors": ["赤くて小さい車", "白くて大きい車", "赤くて大きい車"], "explanation": "She wanted red, but bought white so her mother could use it, and notes it is small (小さくて)." },
        { "question": "男の人と女の人が話しています。女の人は誕生日に何をもらいましたか。", "transcript": "男：昨日、誕生日でしたね。プレゼントは何でしたか。時計ですか。\n女：時計は去年もらいました。今年は綺麗なネックレスをもらいました。とても嬉しいです。", "correctAnswer": "ネックレス", "distractors": ["時計", "指輪", "カバン"], "explanation": "She got a watch last year. This year she received a necklace (ネックレス)." },
        { "question": "女の人と男の人が話しています。男の人はどうしてコーヒーを飲みませんか。", "transcript": "女：コーヒーをいれましょうか。\n男：ありがとうございます。でも、夜コーヒーを飲むと眠れなくなるので、温かいお茶がいいです。\n女：わかりました。", "correctAnswer": "眠れなくなるから", "distractors": ["お茶がないから", "コーヒーが嫌いだから", "熱いから"], "explanation": "He says '夜コーヒーを飲むと眠れなくなるので' (Because if I drink coffee at night, I won't be able to sleep)." },
        { "question": "病院で医者と女の人が話しています。女の人は一日に何回薬を飲みますか。", "transcript": "医者：この薬は、朝と夜のご飯の後に飲んでください。\n女：昼ご飯の後は飲まないんですか。\n医者：はい、昼は飲まなくていいです。", "correctAnswer": "二回", "distractors": ["三回", "一回", "四回"], "explanation": "The doctor says morning and night ('朝と夜'), which means 2 times a day." },
        { "question": "男の人と女の人が話しています。女の人の国は今、どんな季節ですか。", "transcript": "男：日本は今、冬で寒いですね。マリアさんの国も寒いですか。\n女：いいえ、私の国は南半球にあるので、日本と反対です。今はとても暑くて、毎日泳いでいます。", "correctAnswer": "夏", "distractors": ["冬", "春", "秋"], "explanation": "She says it is the opposite of Japan's winter, very hot, and she swims every day, which means summer (夏)." },
        { "question": "男の人と女の人がお店で話しています。二人は何をプレゼントしますか。", "transcript": "男：お母さんの誕生日に、何をあげましょうか。靴がいいですか。\n女：靴はサイズが難しいですよ。この綺麗な帽子はどうですか。\n男：そうですね。これにしましょう。", "correctAnswer": "帽子", "distractors": ["靴", "服", "カバン"], "explanation": "The man suggests shoes, but the woman suggests a hat (帽子), and they agree on it." },
        { "question": "先生が留学生に話しています。図書館はどこにありますか。", "transcript": "先生：学校の建物を真っ直ぐ出ると、前に大きな木があります。図書館はその木の後ろにある白い建物です。", "correctAnswer": "木の後ろ", "distractors": ["木の前", "建物の前", "右の角"], "explanation": "The teacher explains '図書館はその木の後ろにある白い建物です' (The library is the white building behind that tree)." },
        { "question": "男の人と女の人が駅で話しています。男の人はどの切符を買いましたか。", "transcript": "男：あ、いけない。間違えて五百円の切符を買ってしまいました。\n女：東京までは三百円ですよ。窓口で変えてもらいましょう。\n男：はい、そうします。", "correctAnswer": "五百円の切符", "distractors": ["三百円の切符", "八百円の切符", "千円の切符"], "explanation": "He mistakenly bought a 500 yen ticket ('間違えて五百円の切符を買ってしまいました')." },
        { "question": "女の人と男の人が話しています。男の人はどうして遅れましたか。", "transcript": "女：どうしたんですか。遅かったですね。\n男：すみません。自転車で来るつもりでしたが、雨が降ってきたので、歩いてきました。", "correctAnswer": "雨が降って歩いてきたから", "distractors": ["自転車が壊れたから", "道に迷ったから", "電車が遅れたから"], "explanation": "He planned to bike, but because it rained, he walked, which made him late." },
        { "question": "男の人と女の人が話しています。二人は明日、何時に会いますか。", "transcript": "男：映画は午後一時からです。お昼ご飯を一緒に食べませんか。\n女：いいですね。じゃあ、十二時に駅の前でどうですか。\n男：少し忙しいですね。十一時半にしましょう。", "correctAnswer": "十一時半", "distractors": ["十二時", "一時", "十二時半"], "explanation": "The woman suggests 12:00, but the man says that's a bit rushed and suggests 11:30 (十一時半)." },
        { "question": "女の人と男の人が電話で話しています。男の人は今、何をしていますか。", "transcript": "女：もしもし、今から遊びに行ってもいいですか。\n男：すみません。今、部屋の掃除をしているんです。一時間後なら大丈夫です。", "correctAnswer": "掃除をしている", "distractors": ["遊んでいる", "寝ている", "勉強している"], "explanation": "The man says '今、部屋の掃除をしているんです' (I am cleaning my room right now)." },
        { "question": "先生が学生に話しています。学生は明日、何時に来ますか。", "transcript": "先生：明日は遠足です。いつもは八時半に学校が始まりますが、明日はバスに乗るので、八時に来てください。", "correctAnswer": "八時", "distractors": ["八時半", "九時", "七時半"], "explanation": "School usually starts at 8:30, but tomorrow they must come at 8:00 (八時に来てください)." },
        { "question": "男の人と女の人が話しています。女の人はこれからどこへ行きますか。", "transcript": "女：すみません、この近くにコンビニはありますか。\n男：あそこの信号を右に曲がると、ありますよ。\n女：ありがとうございます。すぐ行ってみます。", "correctAnswer": "コンビニ", "distractors": ["病院", "駅", "信号"], "explanation": "The woman asks where the convenience store is and says 'すぐ行ってみます' (I will go right away)." },
        { "question": "男の人と女の人が話しています。男の人は何時まで働きますか。", "transcript": "女：アルバイトは毎日何時までですか。五時ですか。\n男：いいえ。午後の六時から、夜の十時までです。\n女：遅くまで大変ですね。", "correctAnswer": "十時", "distractors": ["六時", "五時", "八時"], "explanation": "The man says his part-time job is from 6 PM to 10 PM (夜の十時までです)." },
        { "question": "先生が学生に話しています。学生は鉛筆を何本持っていきますか。", "transcript": "先生：明日はテストです。黒いペンは使えません。鉛筆を二本と、消しゴムを一つ持ってきてください。", "correctAnswer": "二本", "distractors": ["一本", "三本", "持っていかない"], "explanation": "The teacher specifies '鉛筆を二本' (2 pencils)." },
        { "question": "男の人と女の人が話しています。女の人は今日、何を飲みますか。", "transcript": "男：いつも冷たいジュースを飲んでいますね。\n女：ええ。でも、今日は少し寒いので、温かい紅茶にします。\n男：それがいいですね。", "correctAnswer": "温かい紅茶", "distractors": ["冷たいジュース", "冷たい紅茶", "温かいジュース"], "explanation": "She usually drinks cold juice, but today is cold, so she chooses hot black tea (温かい紅茶)." },
        { "question": "お母さんと男の子が話しています。お母さんは男の子に何を買いますか。", "transcript": "母：来週からプールが始まるね。水着はある？\n男の子：うん、あるよ。でも、プール用のカバンが小さいから、新しいのが欲しいな。\n母：わかった。週末に買いに行こう。", "correctAnswer": "プール用のカバン", "distractors": ["水着", "帽子", "靴"], "explanation": "The boy has a swimsuit, but asks for a new pool bag, which the mother agrees to buy." },
        { "question": "男の人と女の人が話しています。二人は今日、どこで昼ご飯を食べますか。", "transcript": "男：お昼ご飯、食堂で食べませんか。\n女：今日は天気がいいから、公園で食べましょうよ。お弁当を買って。\n男：いいですね。そうしましょう。", "correctAnswer": "公園", "distractors": ["食堂", "レストラン", "家"], "explanation": "The woman suggests eating at the park ('公園で食べましょうよ') and the man agrees." },
        { "question": "先生が学生に話しています。学生は今日、何ページから何ページまで読みますか。", "transcript": "先生：今日の宿題は、教科書を読むことです。十ページから十五ページまで読んでください。十六ページは明日読みます。", "correctAnswer": "10ページから15ページまで", "distractors": ["10ページから16ページまで", "15ページから16ページまで", "10ページだけ"], "explanation": "The teacher clearly says '十ページから十五ページまで読んでください' (Read from page 10 to 15)." },
        { "question": "女の人と男の人が話しています。男の人はどのカメラを買いますか。", "transcript": "女：この黒いカメラ、安くていいですよ。\n男：でも、少し大きいです。私は旅行に持っていくので、この小さくて白いカメラにします。\n女：それもいいですね。", "correctAnswer": "小さくて白いカメラ", "distractors": ["大きくて黒いカメラ", "小さくて黒いカメラ", "大きくて白いカメラ"], "explanation": "The man wants a small camera for traveling and chooses the white one ('小さくて白いカメラにします')." },
        { "question": "男の人と女の人が話しています。女の人はコンビニで何を買ってきますか。", "transcript": "女：ちょっとコンビニに行ってきます。何か欲しいものはありますか。\n男：お茶をお願いします。あ、やっぱりコーヒーがいいです。\n女：わかりました。コーヒーですね。", "correctAnswer": "コーヒー", "distractors": ["お茶", "お茶とコーヒー", "何も買わない"], "explanation": "The man changes his mind from tea to coffee ('やっぱりコーヒーがいいです')." },
        { "question": "男の人と女の人が図書館で話しています。図書館は何時に閉まりますか。", "transcript": "男：すみません、この図書館は何時までですか。五時ですか。\n女：平日は夜の七時までですが、今日は土曜日ですから六時までです。\n男：わかりました。", "correctAnswer": "六時", "distractors": ["五時", "七時", "八時"], "explanation": "Today is Saturday, so the library closes at 6:00 ('今日は土曜日ですから六時までです')." },
        { "question": "女の人と男の人が話しています。男の人は昨日の夜、何をしましたか。", "transcript": "女：昨日の夜はテレビを見ましたか。\n男：いいえ。たくさん宿題があったので、夜の十二時までずっと勉強していました。\n女：それは大変でしたね。", "correctAnswer": "勉強した", "distractors": ["テレビを見た", "寝た", "仕事をした"], "explanation": "The man says he didn't watch TV, but studied until 12 AM ('十二時までずっと勉強していました')." },
        { "question": "男の人と女の人が話しています。二人はどの電車に乗りますか。", "transcript": "男：次の電車は二時十分ですね。\n女：ええ。でも、その電車は各駅停車だから遅いですよ。二時二十分の急行に乗りましょう。\n男：そうですね。", "correctAnswer": "二時二十分の電車", "distractors": ["二時十分の電車", "二時半の電車", "二時の電車"], "explanation": "The woman suggests the 2:20 express train ('二時二十分の急行に乗りましょう') to save time." },
        { "question": "女の人と男の人がお店で話しています。男の人はどの椅子を買いますか。", "transcript": "女：この丸い椅子はどうですか。\n男：うーん、可愛いですが、私は背が高いので、四角くて高い椅子がいいです。あ、あれにします。\n女：いいですね。", "correctAnswer": "四角くて高い椅子", "distractors": ["丸くて高い椅子", "丸くて低い椅子", "四角くて低い椅子"], "explanation": "He is tall and prefers the square, tall chair ('四角くて高い椅子がいいです')." },
        { "question": "男の人と女の人が話しています。女の人はパーティーに何を持っていきますか。", "transcript": "男：明日のパーティー、飲み物は私が買いますから、山田さんはケーキをお願いします。\n女：はい。果物も持っていきましょうか。\n男：果物は鈴木さんが持ってきますから、大丈夫ですよ。", "correctAnswer": "ケーキ", "distractors": ["飲み物", "ケーキと果物", "果物"], "explanation": "The man asks her to bring a cake. Suzuki is bringing fruit, so she doesn't need to." },
        { "question": "先生が学生に話しています。学生は明日、何時に来なければなりませんか。", "transcript": "先生：明日はテストがありますから、絶対に遅れないでください。授業は九時に始まりますから、八時五十分には教室に入っていてください。", "correctAnswer": "八時五十分", "distractors": ["九時", "九時十分", "八時"], "explanation": "The teacher tells them to be in the classroom by 8:50 ('八時五十分には教室に入っていてください')." },
        { "question": "男の人と女の人が電話で話しています。女の人は今、どんな天気のところにいますか。", "transcript": "男：もしもし、今駅に着きました。そっちは雨が降っていますか。\n女：いいえ、雨は降っていませんが、風がとても強いです。\n男：じゃあ、気をつけて来てください。", "correctAnswer": "風が強い", "distractors": ["雨が降っている", "雪が降っている", "晴れて風がない"], "explanation": "The woman says it's not raining, but the wind is very strong ('風がとても強いです')." },
        { "question": "女の人と男の人が話しています。男の人の電話はどこにありますか。", "transcript": "男：あれ、僕の電話がありません。カバンの中にもないです。\n女：さっき机の上にありましたよ。\n男：あ、本当だ。本の下にありました。ありがとうございます。", "correctAnswer": "本の下", "distractors": ["カバンの中", "机の下", "本の上"], "explanation": "The man finds his phone under the book ('本の下にありました')." },
        { "question": "お母さんと男の子が話しています。男の子はこれから何をしますか。", "transcript": "母：太郎、遊びに行く前に部屋を掃除しなさい。\n男の子：部屋はもうきれいだよ。\n母：じゃあ、お風呂を洗ってちょうだい。\n男の子：はーい。", "correctAnswer": "お風呂を洗う", "distractors": ["部屋を掃除する", "遊びに行く", "寝る"], "explanation": "The room is already clean, so the mother asks him to wash the bathtub ('お風呂を洗ってちょうだい')." },
        { "question": "男の人と女の人が話しています。男の人は昨日、どこへ行きましたか。", "transcript": "女：昨日は海へ行きましたか。\n男：いいえ。天気が悪かったので、海へは行きませんでした。デパートで映画を見ました。\n女：そうですか。", "correctAnswer": "デパート", "distractors": ["海", "家", "公園"], "explanation": "The man didn't go to the sea, but watched a movie at the department store ('デパートで映画を見ました')." },
        { "question": "先生がテストの前に話しています。学生はテストに何を書いてはいけませんか。", "transcript": "先生：今からテストを配ります。名前とクラスの番号は鉛筆で書いてください。でも、答えは黒いボールペンで書いてください。赤いペンは使わないでください。", "correctAnswer": "赤いペン", "distractors": ["鉛筆", "黒いボールペン", "消しゴム"], "explanation": "The teacher says '赤いペンは使わないでください' (Please do not use a red pen)." },
        { "question": "男の人と女の人が話しています。女の人はどの靴を履いていきますか。", "transcript": "男：今日はたくさん歩きますよ。その高い靴で大丈夫ですか。\n女：そうですね。足が痛くなるかもしれないから、この白いスニーカーにします。\n男：それがいいですよ。", "correctAnswer": "白いスニーカー", "distractors": ["高くて黒い靴", "高くて白い靴", "黒いスニーカー"], "explanation": "She decides to wear white sneakers ('白いスニーカーにします') because they will walk a lot." },
        { "question": "女の人が店で話しています。女の人はいくら払いますか。", "transcript": "女：このシャツを一枚ください。いくらですか。\n店員：二千円です。あ、今日はセールですから、五百円安くなりますよ。\n女：本当ですか。じゃあ、買います。", "correctAnswer": "千五百円", "distractors": ["二千円", "五百円", "二千五百円"], "explanation": "The shirt is 2,000 yen, but it's on sale for 500 yen off (五百円安くなります), making it 1,500 yen." },
        { "question": "男の人と女の人が話しています。女の人は週末、何をしましたか。", "transcript": "男：週末はどこかへ出かけましたか。\n女：いいえ。部屋がとても汚かったので、二日間ずっと掃除と洗濯をしていました。疲れました。\n男：それは大変でしたね。", "correctAnswer": "掃除と洗濯をした", "distractors": ["出かけた", "ずっと寝ていた", "仕事をした"], "explanation": "She spent the two days cleaning and doing laundry ('ずっと掃除と洗濯をしていました')." },
        { "question": "先生が留学生に話しています。学生は明日、何時に起きますか。", "transcript": "先生：明日は京都へ旅行に行きます。朝七時にバスが出発しますから、絶対に六時半には学校に来てくださいね。起きるのは五時半ごろがいいですよ。", "correctAnswer": "五時半ごろ", "distractors": ["六時半", "七時", "六時ごろ"], "explanation": "The teacher suggests waking up around 5:30 ('起きるのは五時半ごろがいいですよ')." },
        { "question": "男の人と女の人が話しています。女の人の国は今、何時ですか。", "transcript": "男：マリアさんの国は今、何時ですか。日本は午後二時ですが。\n女：私の国は日本より三時間遅いですから、午前十一時です。\n男：そうですか。", "correctAnswer": "午前十一時", "distractors": ["午後二時", "午後五時", "午前十時"], "explanation": "Her country is 3 hours behind Japan. Japan is 2 PM, so her country is 11 AM (午前十一時)." },
        { "question": "男の人と女の人がペットについて話しています。女の人は何を飼っていますか。", "transcript": "男：鈴木さんは犬を飼っていますか。\n女：いいえ、昔は犬と鳥を飼っていましたが、今は猫を一匹だけ飼っています。\n男：可愛いですね。", "correctAnswer": "猫", "distractors": ["犬", "犬と鳥", "鳥と猫"], "explanation": "She used to have a dog and a bird, but now only has a cat ('今は猫を一匹だけ飼っています')." },
        { "question": "先生が話しています。学生は今日、どこを掃除しますか。", "transcript": "先生：今日の掃除の時間です。一班の人は教室を、二班の人は廊下を掃除してください。三班の人はトイレではなく、階段をお願いします。私は三班です。", "correctAnswer": "階段", "distractors": ["教室", "廊下", "トイレ"], "explanation": "The speaker is in group 3. Group 3 cleans the stairs ('三班の人は...階段をお願いします')." },
        { "question": "男の人と女の人が話しています。男の人の妹はいくつですか。", "transcript": "女：田中さんの妹さんは中学生ですか。\n男：いいえ。妹は今年二十歳になりました。大学生です。\n女：そうですか。大人ですね。", "correctAnswer": "二十歳", "distractors": ["十五歳", "十八歳", "二十二歳"], "explanation": "The man says his sister turned 20 this year ('妹は今年二十歳になりました')." },
        { "question": "女の人と男の人が話しています。男の人はどうして仕事を休みましたか。", "transcript": "女：昨日、どうして仕事を休んだんですか。風邪ですか。\n男：いいえ。自転車で転んで、足を少し怪我してしまったんです。\n女：えっ、大丈夫ですか。", "correctAnswer": "自転車で転んで怪我をしたから", "distractors": ["風邪をひいたから", "熱があったから", "頭が痛かったから"], "explanation": "He explains '自転車で転んで、足を少し怪我してしまったんです' (I fell off my bicycle and injured my leg a little)." },
        { "question": "男の人と女の人が話しています。女の人はどのコートを買いますか。", "transcript": "男：この短くて黒いコート、どうですか。\n女：うーん。私は足が寒いのが嫌だから、長いコートがいいです。色は黒より茶色が好きです。\n男：じゃあ、これがいいですね。", "correctAnswer": "長くて茶色いコート", "distractors": ["短くて黒いコート", "長くて黒いコート", "短くて茶色いコート"], "explanation": "She wants a long coat ('長いコートがいいです') and prefers brown over black ('色は黒より茶色が好きです')." },
        { "question": "先生が話しています。明日のテストには何が出ますか。", "transcript": "先生：明日のテストについて言います。漢字と文法は出ません。会話を聞いて答える問題だけです。よく聞いてくださいね。", "correctAnswer": "会話を聞く問題（聴解）", "distractors": ["漢字", "文法", "漢字と文法"], "explanation": "The teacher states '会話を聞いて答える問題だけです' (Only questions where you listen to conversations and answer)." },
        { "question": "男の人と女の人が話しています。男の人は冷蔵庫に何を入れますか。", "transcript": "男：買ってきたものを冷蔵庫に入れますね。りんごと、ジュースと...\n女：あ、りんごは冷たくないほうが美味しいから、外に出しておいてください。ケーキは冷蔵庫にお願いします。\n男：わかりました。", "correctAnswer": "ジュースとケーキ", "distractors": ["りんごとジュース", "りんごとケーキ", "ジュースだけ"], "explanation": "Apples stay out. He puts the juice and the cake (ケーキは冷蔵庫に) in the fridge." },
        { "question": "男の人と女の人がカレンダーを見て話しています。二人はいつ映画を見に行きますか。", "transcript": "男：今度の土曜日、映画を見に行きませんか。十日です。\n女：十日はアルバイトがあります。次の日はどうですか。十一日です。\n男：十一日ですね。いいですよ。", "correctAnswer": "十一日", "distractors": ["十日", "九日", "十二日"], "explanation": "The woman works on the 10th and suggests the next day, the 11th ('十一日です')." },
        { "question": "女の人と男の人が話しています。男の人はどうやって会社へ行きますか。", "transcript": "女：いつも会社までどうやって行っていますか。電車ですか。\n男：昔は電車でしたが、今は運動のために自転車で行っています。雨の日はバスです。\n女：今日は晴れですね。\n男：ええ、だから今日も自転車です。", "correctAnswer": "自転車", "distractors": ["電車", "バス", "歩き"], "explanation": "He says '今は運動のために自転車で行っています' (I go by bicycle now for exercise) and today is sunny." },
        { "question": "お母さんと男の子が話しています。男の子はテーブルの上に何を置きますか。", "transcript": "母：晩ご飯ができたから、テーブルの上にお皿とお箸を並べて。\n男の子：コップも置く？\n母：コップは私が持っていくから、大丈夫よ。\n男の子：わかった。", "correctAnswer": "お皿とお箸", "distractors": ["お皿とコップ", "お箸とコップ", "お皿だけ"], "explanation": "The mother asks for plates and chopsticks ('お皿とお箸を並べて'). She will bring the cups herself." },
        { "question": "男の人と女の人が話しています。男の人はどのスポーツが一番好きですか。", "transcript": "女：スポーツはよくしますか。\n男：ええ。学生の時はずっと野球をしていました。今は休みの日にテニスをしています。でも、テレビでサッカーを見るのが一番好きです。", "correctAnswer": "サッカー", "distractors": ["野球", "テニス", "水泳"], "explanation": "He says 'テレビでサッカーを見るのが一番好きです' (Watching soccer on TV is what I like best)." },
        { "question": "女の人がホテルで話しています。女の人の部屋は何階ですか。", "transcript": "男：いらっしゃいませ。お客様の部屋は五階の五〇三号室です。お風呂は二階にあります。朝ご飯は一階の食堂でどうぞ。\n女：わかりました。ありがとうございます。", "correctAnswer": "五階", "distractors": ["一階", "二階", "三階"], "explanation": "The staff says 'お客様の部屋は五階の五〇三号室です' (Your room is 503 on the 5th floor)." },
        { "question": "先生が留学生に話しています。学生は明日、何を持っていかなくてもいいですか。", "transcript": "先生：明日の遠足について言います。お弁当と飲み物は自分で持ってきてください。傘も忘れないでください。カメラは私が持っていくので、皆さんは要りません。", "correctAnswer": "カメラ", "distractors": ["お弁当", "飲み物", "傘"], "explanation": "The teacher says 'カメラは私が持っていくので、皆さんは要りません' (I will bring a camera, so you don't need to)." },
        { "question": "男の人と女の人が話しています。二人は今日、何を飲みますか。", "transcript": "男：暑いですね。冷たいビールが飲みたいです。\n女：でも、これから車を運転して帰るんですよ。お酒はだめです。冷たいお茶にしましょう。\n男：そうですね。そうします。", "correctAnswer": "冷たいお茶", "distractors": ["冷たいビール", "温かいお茶", "温かいコーヒー"], "explanation": "They have to drive, so no alcohol. The woman suggests cold tea ('冷たいお茶にしましょう')." },
        { "question": "男の人と女の人が話しています。男の人は昨日、どうして寝られませんでしたか。", "transcript": "女：顔が疲れていますね。昨日の夜、寝られなかったんですか。\n男：ええ。家の近くでずっと工事をしていて、とてもうるさかったんです。全然寝られませんでした。\n女：それは大変でしたね。", "correctAnswer": "工事がうるさかったから", "distractors": ["コーヒーを飲んだから", "宿題がたくさんあったから", "風邪をひいたから"], "explanation": "He explains '家の近くでずっと工事をしていて、とてもうるさかったんです' (Construction near my house was very noisy)." },
        { "question": "女の人と男の人が話しています。男の人の兄はどんな仕事をしていますか。", "transcript": "女：田中さんのお兄さんは、学校の先生ですか。\n男：いいえ、それは父です。兄は病院で医者をしています。\n女：へえ、すごいですね。", "correctAnswer": "医者", "distractors": ["先生", "会社員", "学生"], "explanation": "The man says '兄は病院で医者をしています' (My older brother is a doctor at a hospital)." },
        { "question": "先生が学生に話しています。学生は作文をどうやって書きますか。", "transcript": "先生：来週までに作文を書いてきてください。コンピューターで打たないでください。必ず鉛筆か黒いペンで、自分で紙に書いてください。", "correctAnswer": "鉛筆か黒いペンで手で書く", "distractors": ["コンピューターで打つ", "赤いペンで書く", "友達に書いてもらう"], "explanation": "The teacher states 'コンピューターで打たないでください。必ず鉛筆か黒いペンで...書いてください'." },
        { "question": "男の人と女の人が話しています。二人は駅までどうやって行きますか。", "transcript": "男：駅まで歩きましょうか。\n女：雨が降りそうだから、歩くのは嫌です。タクシーに乗りませんか。\n男：タクシーは高いですよ。バスで行きましょう。すぐ来ますから。\n女：わかりました。", "correctAnswer": "バス", "distractors": ["歩き", "タクシー", "電車"], "explanation": "The man says taxis are expensive and suggests the bus ('バスで行きましょう'), which she agrees to." },
        { "question": "お母さんと男の子が話しています。男の子はスーパーで何を買いますか。", "transcript": "母：スーパーで牛乳と卵を買ってきて。\n男の子：わかった。あ、冷蔵庫に卵はまだたくさんあったよ。\n母：あら、本当だ。じゃあ、卵はいいわ。代わりにパンを買ってきて。\n男の子：はーい。", "correctAnswer": "牛乳とパン", "distractors": ["牛乳と卵", "卵とパン", "牛乳だけ"], "explanation": "They don't need eggs. The mother asks for bread instead ('代わりにパンを買ってきて'), along with the milk." },
        { "question": "男の人と女の人が話しています。男の人のアパートはどうですか。", "transcript": "女：新しいアパートはどうですか。駅に近くていいですね。\n男：ええ、便利ですが、部屋がとても狭いんです。それに、隣の人がギターを弾くのでうるさいです。\n女：それは大変ですね。", "correctAnswer": "狭くてうるさい", "distractors": ["広くて静か", "狭くて静か", "広くてうるさい"], "explanation": "He says '部屋がとても狭いんです' (The room is very narrow) and 'うるさいです' (It's noisy)." },
        { "question": "男の人と女の人が話しています。女の人は旅行に何を持っていきますか。", "transcript": "男：明日からハワイですね。荷物は準備しましたか。水着は入れましたか。\n女：水着は向こうの店で新しいのを買います。サングラスと帽子は入れました。\n男：そうですか。", "correctAnswer": "サングラスと帽子", "distractors": ["水着とサングラス", "水着と帽子", "水着とサングラスと帽子"], "explanation": "She will buy a swimsuit there. She packed sunglasses and a hat ('サングラスと帽子は入れました')." },
        { "question": "先生が話しています。テストが終わった人はどうしますか。", "transcript": "先生：テストの時間は六十分です。もし早く終わっても、教室の外に出ないでください。自分の席で静かに本を読んで待っていてください。", "correctAnswer": "席で本を読んで待つ", "distractors": ["教室の外に出る", "先生にテストを出す", "友達と話す"], "explanation": "The teacher says '自分の席で静かに本を読んで待っていてください' (Wait quietly reading a book at your seat)." },
        { "question": "男の人と女の人が話しています。男の人は昨日、何をしましたか。", "transcript": "女：昨日はいい天気でしたが、どこかへ行きましたか。\n男：いえ、家で一日中寝ていました。熱があったんです。\n女：えっ、大丈夫ですか。今日は？\n男：今日はもう元気です。", "correctAnswer": "家で寝ていた", "distractors": ["病院へ行った", "公園へ行った", "薬を買った"], "explanation": "The man says '家で一日中寝ていました。熱があったんです' (I slept at home all day. I had a fever)." },
        { "question": "女の人が店で話しています。女の人はどのカバンを買いますか。", "transcript": "女：この黒いカバン、いいですね。でも少し小さいです。もう少し大きいのはありませんか。\n店員：同じデザインで、少し大きい茶色のカバンがありますよ。いかがですか。\n女：あ、いい色ですね。これにします。", "correctAnswer": "大きくて茶色いカバン", "distractors": ["小さくて黒いカバン", "大きくて黒いカバン", "小さくて茶色いカバン"], "explanation": "She wants a larger bag. The clerk offers a slightly larger brown bag ('少し大きい茶色のカバン'), which she buys." },
        { "question": "男の人と女の人が話しています。男の人の誕生日はいつですか。", "transcript": "女：山田さんの誕生日はいつですか。\n男：五月七日です。\n女：えっ、私の誕生日は五月八日です。一日違いですね。\n男：本当だ。近いですね。", "correctAnswer": "五月七日", "distractors": ["五月八日", "五月一日", "五月九日"], "explanation": "The man explicitly says '五月七日です' (It is May 7th)." },
        { "question": "男の人と女の人が図書館で話しています。女の人は何冊本を借りますか。", "transcript": "女：この本を四冊借りたいんですが。\n男：すみません、一人三冊までなんです。どれを返しますか。\n女：じゃあ、この料理の本はやめます。\n男：わかりました。", "correctAnswer": "三冊", "distractors": ["四冊", "一冊", "二冊"], "explanation": "The limit is 3 books per person ('一人三冊までなんです'). She returns one and borrows 3." },
        { "question": "お母さんと男の子が話しています。男の子はこれから何をしますか。", "transcript": "母：太郎、歯を磨いた？\n男の子：うん、磨いたよ。パジャマも着た。\n母：じゃあ、もう遅いから早く寝なさい。\n男の子：うん、おやすみなさい。", "correctAnswer": "寝る", "distractors": ["歯を磨く", "パジャマを着る", "テレビを見る"], "explanation": "He already brushed his teeth and changed. The mother says '早く寝なさい' (Go to sleep early)." },
        { "question": "男の人と女の人が話しています。女の人はどうして遅れましたか。", "transcript": "男：遅いですね。道がわかりませんでしたか。\n女：いいえ。早く家を出たんですが、途中で財布を落としたことに気づいて、交番に行っていました。\n男：えっ、見つかりましたか。\n女：はい、大丈夫です。", "correctAnswer": "財布を落として交番に行っていたから", "distractors": ["道がわからなかったから", "家を出るのが遅かったから", "電車が遅れたから"], "explanation": "She explains '財布を落としたことに気づいて、交番に行っていました' (I realized I dropped my wallet and went to the police box)." },
        { "question": "先生が話しています。来週の月曜日はどうなりますか。", "transcript": "先生：来週の月曜日は祝日ですが、学校は休みではありません。普通通りに授業がありますから、忘れないで来てくださいね。", "correctAnswer": "普通通り授業がある", "distractors": ["学校は休みになる", "テストがある", "遠足に行く"], "explanation": "The teacher states '学校は休みではありません。普通通りに授業があります' (School is not closed. There are normal classes)." },
        { "question": "男の人と女の人が話しています。男の人は今、何をしていますか。", "transcript": "女：もしもし、今から映画を見に行きませんか。\n男：ごめん。今、部屋を掃除しているんだ。終わったら僕から電話するよ。\n女：わかった。待っているね。", "correctAnswer": "部屋を掃除している", "distractors": ["映画を見ている", "電話をかけている", "勉強している"], "explanation": "The man says '今、部屋を掃除しているんだ' (I am cleaning my room right now)." },
        { "question": "男の人と女の人が話しています。男の人は今日、傘を持っていきますか。", "transcript": "男：行ってきます。あ、今日は傘を持っていったほうがいいですか。\n女：午後は雨が降るそうですよ。でも、夕方には止むから、折りたたみ傘がいいですね。\n男：わかりました。そうします。", "correctAnswer": "折りたたみ傘を持っていく", "distractors": ["大きい傘を持っていく", "傘を持っていかない", "雨が降らないから持っていかない"], "explanation": "The woman suggests a folding umbrella ('折りたたみ傘がいいですね') because it will rain in the afternoon but stop by evening." },
        { "question": "男の人と女の人が話しています。男の人は箱をどこに置きますか。", "transcript": "男：この大きい箱、机の上に置きましょうか。\n女：机の上は邪魔になりますから、机の下にお願いします。\n男：はい、わかりました。", "correctAnswer": "机の下", "distractors": ["机の上", "ドアの横", "部屋の外"], "explanation": "The woman explicitly asks him to put it under the desk ('机の下にお願いします')." },
        { "question": "男の人と女の人が話しています。パーティーには全部で何人来ますか。", "transcript": "女：明日のパーティー、男の人は三人ですね。\n男：はい。女の人は鈴木さんと佐藤さん、それから山田さんも来ます。\n女：じゃあ、私を入れて全部で七人ですね。", "correctAnswer": "七人", "distractors": ["三人", "四人", "六人"], "explanation": "3 men + Suzuki + Sato + Yamada + the female speaker = 7 people total." },
        { "question": "男の人と女の人が話しています。男の人はスーパーで何を買ってきますか。", "transcript": "男：スーパーに行ってきます。牛乳と卵を買いますね。\n女：あ、卵は昨日買ったからたくさんあります。牛乳と、それからパンをお願いします。\n男：わかりました。", "correctAnswer": "牛乳とパン", "distractors": ["牛乳と卵", "卵とパン", "牛乳だけ"], "explanation": "They don't need eggs. She asks for milk and bread ('牛乳と、それからパンをお願いします')." },
        { "question": "男の人と女の人が話しています。二人は何時に会いますか。", "transcript": "男：映画は二時からですね。一時半に駅で会いましょう。\n女：お昼ご飯を一緒に食べませんか。十二時にしましょうよ。\n男：いいですね。そうしましょう。", "correctAnswer": "十二時", "distractors": ["一時半", "二時", "十二時半"], "explanation": "The woman suggests meeting at 12:00 to eat lunch ('十二時にしましょうよ'), and the man agrees." },
        { "question": "女の人が駅で話しています。女の人は何番線に乗りますか。", "transcript": "女：すみません、東京へ行く電車は一番線ですか。\n駅員：いいえ、東京行きは二番線です。一番線は反対の電車ですよ。\n女：わかりました。ありがとうございます。", "correctAnswer": "二番線", "distractors": ["一番線", "三番線", "四番線"], "explanation": "The station staff says the train to Tokyo is on track 2 ('東京行きは二番線です')." },
        { "question": "先生が学生に話しています。今日の宿題はどこからどこまでですか。", "transcript": "先生：今日の宿題は漢字の練習です。二十ページから二十五ページまでやってください。二十六ページは明日やります。", "correctAnswer": "二十ページから二十五ページ", "distractors": ["二十ページから二十六ページ", "二十五ページから二十六ページ", "二十ページだけ"], "explanation": "The teacher explicitly assigns pages 20 to 25 ('二十ページから二十五ページまでやってください')." },
        { "question": "男の人と女の人が話しています。男の人はどのペンを使いますか。", "transcript": "男：すみません、ペンを貸してください。書類に名前を書きます。\n女：はい。黒いペンと青いペンがあります。どちらがいいですか。\n男：書類ですから、黒をお願いします。", "correctAnswer": "黒いペン", "distractors": ["青いペン", "赤いペン", "鉛筆"], "explanation": "He needs to write on an official document, so he asks for black ('黒をお願いします')." },
        { "question": "男の人と女の人がお店で話しています。店はいつ休みですか。", "transcript": "男：この店は日曜日が休みですか。\n女：いえ、土曜日と日曜日もやっています。休みは毎週火曜日です。\n男：そうですか。", "correctAnswer": "火曜日", "distractors": ["土曜日", "日曜日", "水曜日"], "explanation": "The woman says the shop is closed every Tuesday ('休みは毎週火曜日です')." },
        { "question": "男の人と女の人が話しています。男の人はお母さんの誕生日に何をあげますか。", "transcript": "男：来週、母の誕生日なんです。何をあげたらいいでしょうか。\n女：綺麗な花はどうですか。\n男：花は去年あげました。今年は美味しいケーキを買って帰ります。", "correctAnswer": "ケーキ", "distractors": ["花", "時計", "服"], "explanation": "He gave flowers last year. This year he will buy a cake ('今年は美味しいケーキを買って帰ります')." },
        { "question": "女の人と男の人が話しています。女の人は明日、何時に起きますか。", "transcript": "女：明日は出張で早く起きなければなりません。\n男：何時ですか。六時ですか。\n女：いえ、六時の電車に乗るんです。だから五時に起きます。\n男：それは早いですね。", "correctAnswer": "五時", "distractors": ["六時", "五時半", "七時"], "explanation": "She has to take a 6:00 train, so she will wake up at 5:00 ('だから五時に起きます')." },
        { "question": "男の人と女の人が話しています。女の人は何を飲みますか。", "transcript": "男：コーヒーと紅茶、どちらがいいですか。\n女：うーん、夕方だからコーヒーはやめておきます。紅茶をお願いします。\n男：冷たいのと温かいのは？\n女：温かいのにしてください。", "correctAnswer": "温かい紅茶", "distractors": ["冷たい紅茶", "温かいコーヒー", "冷たいコーヒー"], "explanation": "She chooses tea ('紅茶をお願いします') and wants it warm ('温かいのにしてください')." },
        { "question": "男の人と女の人が電話で話しています。男の人はどうやって駅まで行きますか。", "transcript": "男：もしもし、今から駅に向かいます。\n女：雨が降っていますから、バスで来てください。\n男：バスは時間がかかりますから、タクシーで行きますよ。すぐ着きます。\n女：わかりました。", "correctAnswer": "タクシー", "distractors": ["バス", "電車", "歩き"], "explanation": "The man rejects the bus because it takes time, and decides to take a taxi ('タクシーで行きますよ')." },
        { "question": "先生が学生に話しています。学生は今日、どこを掃除しますか。", "transcript": "先生：今日は掃除の日です。先週は教室を掃除しましたね。今日は図書室をきれいにしてください。トイレは明日掃除します。", "correctAnswer": "図書室", "distractors": ["教室", "トイレ", "廊下"], "explanation": "The teacher assigns the library for today ('今日は図書室をきれいにしてください')." },
        { "question": "男の人と女の人が話しています。男の人の傘はどれですか。", "transcript": "女：たくさん傘がありますね。田中さんの傘はどれですか。\n男：私の傘は黒くて、持ち手のところが白い傘です。\n女：あ、これですね。", "correctAnswer": "黒くて、持ち手が白い傘", "distractors": ["黒くて、持ち手も黒い傘", "白くて、持ち手が黒い傘", "青くて、持ち手が白い傘"], "explanation": "He describes it as black with a white handle ('黒くて、持ち手のところが白い傘です')." },
        { "question": "男の人と女の人が郵便局で話しています。男の人は切手を何枚買いますか。", "transcript": "男：八十円の切手を五枚と、五十円の切手を三枚ください。\n女：すみません、五十円の切手は今ありません。八十円の切手だけにしますか。\n男：はい、じゃあ、八十円の切手を十枚お願いします。", "correctAnswer": "十枚", "distractors": ["五枚", "三枚", "八枚"], "explanation": "Because 50-yen stamps are sold out, he changes his order to ten 80-yen stamps ('八十円の切手を十枚お願いします')." },
        { "question": "男の人と女の人が話しています。男の人はいくら払いますか。", "transcript": "男：このコーヒーとケーキ、お願いします。\n女：コーヒーが四百円で、ケーキが五百円です。一緒に頼むと、百円安くなりますから、八百円です。\n男：はい、千円出します。", "correctAnswer": "八百円", "distractors": ["九百円", "四百円", "千円"], "explanation": "400 + 500 = 900, but there's a 100-yen discount, making it 800 yen ('八百円です')." },
        { "question": "男の人と女の人が話しています。女の人の靴はどこにありますか。", "transcript": "女：あれ、私の靴がありません。\n男：箱の中に入れましたか。\n女：いいえ。あ、ありました。ドアの後ろです。\n男：よかったですね。", "correctAnswer": "ドアの後ろ", "distractors": ["箱の中", "ドアの前", "机の下"], "explanation": "She finds her shoes behind the door ('ドアの後ろです')." },
        { "question": "女の人がホテルで話しています。女の人の部屋は何階ですか。", "transcript": "男：いらっしゃいませ。お客様のお部屋は四階の四〇五号室です。エレベーターであちらへどうぞ。\n女：食堂は何階ですか。\n男：食堂は一階でございます。", "correctAnswer": "四階", "distractors": ["一階", "二階", "五階"], "explanation": "The staff explicitly says her room is on the 4th floor ('四階の四〇五号室です')." },
        { "question": "先生が学生に話しています。明日のテストは何時からですか。", "transcript": "先生：明日はテストです。授業は九時からですが、テストは九時半から始まります。遅れないように来てください。", "correctAnswer": "九時半", "distractors": ["九時", "十時", "八時半"], "explanation": "Class starts at 9:00, but the test starts at 9:30 ('テストは九時半から始まります')." },
        { "question": "男の人と女の人が話しています。女の人は何を忘れましたか。", "transcript": "女：あ、いけない！\n男：どうしたんですか。財布を忘れましたか。\n女：いえ、財布と携帯電話はありますが、手帳を忘れました。今日の予定がわかりません。\n男：それは大変ですね。", "correctAnswer": "手帳", "distractors": ["財布", "携帯電話", "時計"], "explanation": "She has her wallet and phone, but forgot her planner ('手帳を忘れました')." },
        { "question": "男の人と女の人が話しています。男の人は今日、何を着ていきますか。", "transcript": "女：今日は少し寒いですよ。コートを着たほうがいいです。\n男：でも、午後は暖かくなるそうですから、厚いセーターを着ていきます。コートは荷物になりますから。\n女：そうですか。", "correctAnswer": "厚いセーター", "distractors": ["コート", "薄いシャツ", "ジャケット"], "explanation": "He declines the coat because it gets warm later and will just be baggage, choosing a thick sweater instead ('厚いセーターを着ていきます')." },
        { "question": "男の人と女の人が話しています。女の人はこれから何のペットを飼いますか。", "transcript": "男：犬を飼いたいんですが、アパートが狭いので無理です。\n女：私は鳥を飼うつもりです。本当は猫が好きですが、猫はアパートのルールで飼えませんから。\n男：鳥も可愛いですよ。", "correctAnswer": "鳥", "distractors": ["犬", "猫", "魚"], "explanation": "She likes cats, but the apartment rules forbid them, so she plans to keep a bird ('鳥を飼うつもりです')." },
        { "question": "男の人と女の人が話しています。男の人はどんな部屋を探していますか。", "transcript": "女：どんなアパートがいいですか。\n男：会社に近いところがいいです。部屋は狭くてもいいですが、明るい部屋がいいです。\n女：じゃあ、南に窓がある部屋ですね。", "correctAnswer": "会社に近くて明るい部屋", "distractors": ["会社に遠くて広い部屋", "会社に近くて広い部屋", "会社に近くて暗い部屋"], "explanation": "He specifies near the company ('会社に近い') and bright ('明るい部屋がいいです')." },
        { "question": "女の人と男の人が話しています。男の人はどうして遅れましたか。", "transcript": "女：遅かったですね。寝坊しましたか。\n男：いえ、早く家を出たんですが、途中で道がわからなくなってしまって。\n女：そうですか。携帯電話で地図を見なかったんですか。\n男：電池がなかったんです。", "correctAnswer": "道がわからなかったから", "distractors": ["寝坊したから", "携帯電話を忘れたから", "電車が遅れたから"], "explanation": "He got lost on the way ('途中で道がわからなくなってしまって')." },
        { "question": "女の人が電話で話しています。女の人は誰と話していますか。", "transcript": "女：あ、もしもし、お母さん？今、駅に着いたよ。お父さんはもう家にいる？\n男：あ、お母さんは今買い物に出かけているよ。もうすぐ帰ると思うけど。\n女：あ、お父さんだった。じゃあ、家で待ってるね。", "correctAnswer": "お父さん", "distractors": ["お母さん", "お兄さん", "駅員"], "explanation": "She thought she called her mother, but the man says 'お母さんは買い物に...', and she realizes 'あ、お父さんだった' (Ah, it was you, Dad)." },
        { "question": "男の人と女の人が話しています。女の人は何時から働きますか。", "transcript": "男：アルバイトは午後からですか。\n女：ええ。一時から五時までです。午前中は学校がありますから。\n男：そうですか。頑張ってください。", "correctAnswer": "一時", "distractors": ["午前中", "五時", "十二時"], "explanation": "She states her shift is from 1:00 to 5:00 ('一時から五時までです')." },
        { "question": "男の人と女の人が話しています。男の人は何をお土産に買いますか。", "transcript": "男：旅行のお土産、何がいいでしょうか。お菓子がいいですかね。\n女：お菓子より、その町で有名な物がいいですよ。綺麗なコップとか。\n男：そうですね。じゃあ、綺麗なコップを探してみます。", "correctAnswer": "コップ", "distractors": ["お菓子", "時計", "写真"], "explanation": "The woman suggests a beautiful cup, and the man agrees ('綺麗なコップを探してみます')." },
        { "question": "男の人と女の人が話しています。女の人は週末、何のスポーツをしますか。", "transcript": "男：週末はテニスをしませんか。\n女：テニスは道具がないので...。一緒にプールへ行きませんか。泳ぐのは得意なんです。\n男：いいですね。行きましょう。", "correctAnswer": "水泳（泳ぐこと）", "distractors": ["テニス", "走ること", "何もしない"], "explanation": "She doesn't have tennis gear, and suggests going to the pool to swim ('一緒にプールへ行きませんか')." },
        { "question": "男の人と女の人が図書館で話しています。男の人はいつ本を返しますか。", "transcript": "男：この本を借りたいんですが。\n女：はい。二週間借りることができます。今日は五日ですから、十九日までに返してください。\n男：はい、わかりました。", "correctAnswer": "十九日", "distractors": ["五日", "十四日", "二週間"], "explanation": "The librarian tells him to return it by the 19th ('十九日までに返してください')." },
        { "question": "男の人とお医者さんが話しています。男の人はどこが痛いですか。", "transcript": "医者：どうしましたか。\n男：昨日から熱があって、頭が痛いんです。\n医者：喉も痛いですか。\n男：いえ、喉と鼻は大丈夫です。", "correctAnswer": "頭", "distractors": ["喉", "鼻", "お腹"], "explanation": "He says he has a fever and his head hurts ('頭が痛いんです'). His throat and nose are fine." },
        { "question": "男の人と女の人が話しています。明日の天気はどうなりますか。", "transcript": "女：明日は海へ行きますが、天気はどうでしょうか。\n男：天気予報では、朝は曇りですが、午後から晴れるそうです。\n女：よかった。雨は降らないんですね。", "correctAnswer": "朝は曇りで、午後は晴れ", "distractors": ["朝から晴れ", "一日中曇り", "午後から雨"], "explanation": "The forecast says cloudy in the morning, clearing up in the afternoon ('朝は曇りですが、午後から晴れる')." },
        { "question": "女の人が駅で話しています。女の人は切符をいくらで買いましたか。", "transcript": "女：すみません、新宿までの切符はいくらですか。\n駅員：二百円です。\n女：あ、間違えて二百五十円の切符を買ってしまいました。\n駅員：じゃあ、ここで五十円お返ししますね。", "correctAnswer": "二百五十円", "distractors": ["二百円", "五十円", "三百円"], "explanation": "The ticket she accidentally bought was 250 yen ('二百五十円の切符を買ってしまいました')." },
        { "question": "男の人と女の人が話しています。女の人は男の人に何を貸しますか。", "transcript": "男：すみません、消しゴムを貸してください。\n女：はい。あ、鉛筆は持っていますか。\n男：あ、鉛筆も忘れました。\n女：じゃあ、これも貸しますね。", "correctAnswer": "消しゴムと鉛筆", "distractors": ["消しゴムだけ", "鉛筆だけ", "ペンと消しゴム"], "explanation": "He asks for an eraser, then realizes he forgot a pencil, so she lends both." },
        { "question": "女の人と男の人が話しています。男の人はいつ自分の国へ帰りますか。", "transcript": "女：田中さんは夏休みに国へ帰りますか。八月ですか。\n男：いいえ。飛行機のチケットが高いので、九月に帰ります。少し安くなりますから。\n女：そうですか。", "correctAnswer": "九月", "distractors": ["八月", "七月", "十月"], "explanation": "He avoids August because tickets are expensive, and returns in September ('九月に帰ります')." },
        { "question": "男の人と女の人が話しています。女の人の自転車はどれですか。", "transcript": "男：たくさん自転車がありますね。山田さんの自転車はどれですか。\n女：私の自転車は赤いです。\n男：あそこに赤いのが二台ありますよ。かごが付いているほうですか。\n女：いいえ、かごがないほうです。", "correctAnswer": "赤くて、かごがない自転車", "distractors": ["赤くて、かごがある自転車", "青くて、かごがない自転車", "黒い自転車"], "explanation": "She describes it as red ('赤いです') and without a basket ('かごがないほうです')." },
        { "question": "男の人と女の人が話しています。女の人は何色が好きですか。", "transcript": "男：新しいカバンを買いたいんですが、何色がいいと思いますか。\n女：私は黒が好きですが、春だから明るい色のほうがいいですよ。白とか黄色とか。\n男：そうですね。じゃあ、黄色にします。", "correctAnswer": "黒", "distractors": ["白", "黄色", "赤"], "explanation": "The woman says *her* favorite color is black ('私は黒が好きですが'), though she suggests bright colors for him." },
        { "question": "男の人と女の人が話しています。二人はお昼ご飯に何を食べますか。", "transcript": "男：お昼ご飯、何を食べましょうか。ラーメンがいいです。\n女：私は昨日ラーメンを食べたので、別のがいいです。お寿司はどうですか。\n男：いいですよ。じゃあ、あそこの店に入りましょう。", "correctAnswer": "お寿司", "distractors": ["ラーメン", "カレー", "うどん"], "explanation": "The woman had ramen yesterday and suggests sushi ('お寿司はどうですか'), and the man agrees." },
        { "question": "男の人と女の人が話しています。写真はどこで撮りますか。", "transcript": "男：写真を撮りましょう。海の前がいいですか。\n女：海の前は風が強いですから、あそこにある大きな木の下で撮りましょう。\n男：わかりました。", "correctAnswer": "木の下", "distractors": ["海の前", "山の中", "家の中"], "explanation": "The woman rejects the sea due to wind and suggests under the big tree ('大きな木の下で撮りましょう')." },
        { "question": "男の人と女の人が話しています。女の人は荷物をどうしますか。", "transcript": "男：重そうな荷物ですね。私が持ちましょうか。\n女：あ、大丈夫です。すぐそこのコインロッカーに入れますから。\n男：そうですか。", "correctAnswer": "コインロッカーに入れる", "distractors": ["男の人に持ってもらう", "家に帰って置く", "捨ててしまう"], "explanation": "She declines his help and says she will put it in a coin locker ('コインロッカーに入れますから')." },
        { "question": "男の人と女の人が話しています。男の人はこれから何をしますか。", "transcript": "女：部屋が暑いですね。窓を開けましょうか。\n男：いえ、窓を開けると外の音でうるさいですから、エアコンをつけますよ。\n女：お願いします。", "correctAnswer": "エアコンをつける", "distractors": ["窓を開ける", "外に出る", "何もしない"], "explanation": "He rejects opening the window and says he will turn on the AC ('エアコンをつけますよ')." },
        { "question": "先生が留学生に話しています。学生は明日、何を勉強しますか。", "transcript": "先生：明日は漢字のテストをしません。文法だけ勉強します。教科書の五十ページを開いておいてください。", "correctAnswer": "文法", "distractors": ["漢字", "漢字と文法", "会話"], "explanation": "The teacher says no kanji test tomorrow, they will only study grammar ('文法だけ勉強します')." },
        { "question": "男の人と女の人が会社で話しています。男の人はコピーを何枚しますか。", "transcript": "女：この書類、二十枚コピーしてください。\n男：あ、五人休みですから、十五枚でいいですよ。\n女：あ、そうですね。じゃあ、十五枚でお願いします。", "correctAnswer": "十五枚", "distractors": ["二十枚", "五枚", "十枚"], "explanation": "Initially 20, but since 5 people are absent, they only need 15 ('十五枚でお願いします')." },
        { "question": "女の人が駅で話しています。電車は何分に来ますか。", "transcript": "女：すみません、次の東京行きの電車は何分ですか。\n駅員：いつもは一時十分ですが、今日は雪が降っているので、五分遅れています。\n女：じゃあ、十五分ですね。ありがとうございます。", "correctAnswer": "十五分（一時十五分）", "distractors": ["十分（一時十分）", "五分（一時五分）", "二十分"], "explanation": "Normally 1:10, but delayed 5 minutes due to snow, making it 1:15 ('十五分ですね')." },
        { "question": "男の人と女の人が話しています。二人はどんな映画を見ますか。", "transcript": "男：映画を見に行きましょう。アクション映画がいいですか。\n女：私はアクション映画は疲れるから、恋愛映画かアニメがいいです。\n男：じゃあ、有名なアニメの映画がやっているので、それにしましょう。", "correctAnswer": "アニメの映画", "distractors": ["アクション映画", "恋愛映画", "ホラー映画"], "explanation": "They decide on a famous anime movie ('アニメの映画...それにしましょう')." },
        { "question": "先生が学生に話しています。学生はテストの前に何から始めますか。", "transcript": "先生：テストの紙を配りました。まだ答えを書かないでください。名前を書く前に、全部で何ページあるか見てください。三ページあります。", "correctAnswer": "ページを見る", "distractors": ["名前を書く", "答えを書く", "先生に質問する"], "explanation": "The teacher says before writing names, check how many pages there are ('名前を書く前に、全部で何ページあるか見てください')." },
        { "question": "お母さんと男の子が話しています。男の子はいつお風呂に入りますか。", "transcript": "男の子：お母さん、お風呂に入ってもいい？\n母：今、お父さんが入っているから、後にして。\n男の子：じゃあ、晩ご飯を食べてから入るよ。\n母：そうしてちょうだい。", "correctAnswer": "晩ご飯を食べた後", "distractors": ["今すぐ", "お父さんの前", "寝る前"], "explanation": "He says he'll take a bath after eating dinner ('晩ご飯を食べてから入るよ')." },
        { "question": "男の人と女の人が話しています。男の人はコーヒーに何を入れますか。", "transcript": "女：コーヒー、どうぞ。お砂糖とミルクはいれますか。\n男：ミルクだけお願いします。甘いのは苦手ですから。\n女：はい、どうぞ。", "correctAnswer": "ミルクだけ", "distractors": ["砂糖とミルク", "お砂糖だけ", "何も入れない"], "explanation": "He dislikes sweet things, so he asks for only milk ('ミルクだけお願いします')." },
        { "question": "男の人と女の人が話しています。女の人は誰と旅行に行きますか。", "transcript": "男：来週の旅行、家族と行くんですか。\n女：いいえ。家族はみんな忙しいので、大学の友達と二人で行きます。\n男：そうですか。楽しんできてください。", "correctAnswer": "大学の友達", "distractors": ["家族", "一人で", "男の人"], "explanation": "She states she is going with a university friend ('大学の友達と二人で行きます')." },
        { "question": "男の人と女の人が話しています。男の人は明日、何をしますか。", "transcript": "女：明日は休みですね。どこかへ出かけますか。\n男：いいえ。明日は一日中、家で部屋の掃除をしなければなりません。とても汚いんです。\n女：それは大変ですね。", "correctAnswer": "部屋の掃除をする", "distractors": ["出かける", "仕事をする", "友達と遊ぶ"], "explanation": "He says he must stay home and clean his room all day ('一日中、家で部屋の掃除をしなければなりません')." },
        { "question": "男の人と女さんが話しています。二人は何で会社へ行きますか。", "transcript": "男：いつも電車で会社に行っていますが、今日は遅れそうですね。\n女：じゃあ、タクシーで行きましょうか。バスより早いですから。\n男：そうですね。そうしましょう。", "correctAnswer": "タクシー", "distractors": ["電車", "バス", "歩き"], "explanation": "They normally take the train, but because they are running late today, they choose a taxi ('タクシーで行きましょう')." },
        { "question": "男の人と女の人が話しています。男の人は何時まで起きていましたか。", "transcript": "女：昨日、夜遅くまで起きていましたか。目が赤いですよ。\n男：ええ、テストの勉強をしていました。いつもは十一時に寝ますが、昨日は夜中の一時まで起きていました。\n女：大変でしたね。", "correctAnswer": "夜中の一時", "distractors": ["十一時", "夜中の二時", "十二時"], "explanation": "The man says he stayed up until 1 AM ('昨日は夜中の一時まで起きていました') to study." },
        { "question": "お母さんと女の子が話しています。女の子はどこに靴を置きますか。", "transcript": "母：靴を脱いだら、ちゃんと並べてね。箱の上はだめよ。\n女の子：はーい。じゃあ、ドアの横に置くね。\n母：そうしてちょうだい。", "correctAnswer": "ドアの横", "distractors": ["箱の上", "箱の中", "ドアの前"], "explanation": "The mother tells her not to put them on the box, so the girl places them next to the door ('ドアの横に置くね')." },
        { "question": "男の人と女の人が話しています。男の人はジュースをいくつ買いますか。", "transcript": "男：みんなでジュースを飲みましょう。五人いますね。\n女：私はお腹がいっぱいだから要りません。田中さんも要らないと言っていました。\n男：じゃあ、三人分ですね。三つ買います。", "correctAnswer": "三つ", "distractors": ["五つ", "四つ", "二つ"], "explanation": "There are 5 people, but the woman and Tanaka don't want any, leaving 3 people ('三つ買います')." },
        { "question": "先生が学生に話しています。学生は明日、何時に学校に来ますか。", "transcript": "先生：明日は午前中に遠足に行きます。いつもは八時半に授業が始まりますが、明日は八時十五分にグラウンドに集まってください。", "correctAnswer": "八時十五分", "distractors": ["八時半", "八時", "九時"], "explanation": "The teacher states they must gather at 8:15 ('八時十五分にグラウンドに集まってください')." },
        { "question": "男の人と女の人が話しています。女の人はこれからどこへ行きますか。", "transcript": "女：あ、お札（さつ）しかありません。細かいお金を崩したいんですが。\n男：駅の前の銀行はもう閉まっていますよ。あそこのコンビニで何か買えば、崩せますよ。\n女：そうですね。そうします。", "correctAnswer": "コンビニ", "distractors": ["銀行", "駅", "交番"], "explanation": "The bank is closed, so she goes to the convenience store to break her large bill ('あそこのコンビニで...')." },
        { "question": "男の人と女の人が話しています。男の人は昨日、何をしましたか。", "transcript": "女：昨日の日曜日はどこかへ行きましたか。天気がよかったですね。\n男：本当は海へ行く約束をしていましたが、友達が風邪をひいたので、一日中家で本を読んでいました。\n女：そうですか。", "correctAnswer": "家で本を読んだ", "distractors": ["海へ行った", "友達の家へ行った", "仕事をした"], "explanation": "The trip to the sea was canceled because his friend caught a cold, so he read a book at home ('一日中家で本を読んでいました')." },
        { "question": "女の人がお店で店員と話しています。女の人は全部でいくら払いましたか。", "transcript": "女：このパンを二つください。一つ二百円ですね。\n店員：はい。それから、このお茶は百五十円です。全部で五百五十円です。\n女：はい、ちょうどあります。", "correctAnswer": "五百五十円", "distractors": ["二百円", "三百五十円", "四百円"], "explanation": "Two loaves of bread at 200 yen each (400) + tea at 150 yen = 550 yen ('五百五十円です')." },
        { "question": "男の人と女の人が話しています。女の人の傘はどれですか。", "transcript": "男：傘がたくさんありますね。山田さんの傘はどれですか。\n女：私の傘は青くて、星の絵がある傘です。\n男：あ、これですね。可愛いですね。", "correctAnswer": "青くて、星の絵がある傘", "distractors": ["青くて、何も絵がない傘", "白くて、星の絵がある傘", "黒い傘"], "explanation": "She describes her umbrella as blue with a star pattern ('青くて、星の絵がある傘です')." },
        { "question": "先生が留学生に話しています。学生は明日、何を持ってきますか。", "transcript": "先生：明日は山に登ります。お弁当と飲み物を忘れないでください。雨が降るかもしれないので、傘も持ってきてください。カメラは要りませんよ。", "correctAnswer": "お弁当、 there、飲み物、傘", "distractors": ["お弁当、飲み物、カメラ", "お弁当とカメラ", "飲み物とカメラ"], "explanation": "The teacher requests lunch, drinks, and an umbrella ('傘も持ってきてください'), but explicitly says no cameras." },
        { "question": "男の人と女の人が話しています。男の人は昨日の夜、何を勉強しましたか。", "transcript": "女：昨日の夜はたくさん勉強しましたか。\n男：はい。漢字と文法をやるつもりでしたが、漢字が難しくて、漢字だけで時間が終わってしまいました。\n女：大変でしたね。", "correctAnswer": "漢字だけ", "distractors": ["文法だけ", "漢字と文法", "何もしなかった"], "explanation": "He intended to do both, but ran out of time and only studied kanji ('漢字だけで時間が終わってしまいました')." },
        { "question": "男の人と女の人が話しています。男の人はどのお皿を買いますか。", "transcript": "男：お皿を買いたいんですが、どれがいいですかね。\n女：この丸くて白いお皿、綺麗ですよ。\n男：うーん、私は四角いお皿が欲しいんです。この黒い四角いお皿にします。\n女：かっこいいですね。", "correctAnswer": "四角くて黒いお皿", "distractors": ["丸くて白いお皿", "四角くて白いお皿", "丸くて黒いお皿"], "explanation": "The man specifies wanting a square plate, choosing the black square one ('この黒い四角いお皿にします')." },
        { "question": "女の人と男の人が話しています。女の人はいつ国へ帰りますか。", "transcript": "女：私は来月、国へ帰るんです。\n男：そうですか。八月ですね。暑いときですね。\n女：いいえ。来月の終わりですから、九月の一日です。\n男：ああ、九月ですね。", "correctAnswer": "九月", "distractors": ["八月", "七月", "十月"], "explanation": "Although it's the end of next month, she gives the specific date: September 1st ('九月の一日です')." },
        { "question": "男の人と女の人が話しています。女の人はこれからどこへ行きますか。", "transcript": "女：あ、もう四時ですね。郵便局に行かなければなりません。\n男：郵便局は五時までですよ。急いでください。\n女：えっ、そうですか！じゃあ、駅前の銀行に行くのは明日にして、すぐ郵便局へ行きます。", "correctAnswer": "郵便局", "distractors": ["銀行", "駅", "家"], "explanation": "She runs out of time for both, so she postpones the bank visit and heads straight to the post office ('すぐ郵便局へ行きます')." },
        { "question": "男の人と女の人が道で話しています。交番はどこにありますか。", "transcript": "男：すみません、交番はどこですか。\n女：この道をまっすぐ行って、一つ目の信号を左に曲がってください。本屋の前にありますよ。\n男：わかりました。ありがとうございます。", "correctAnswer": "一つ目の信号を左に曲がって、本屋の前", "distractors": ["一つ目の信号を右に曲がって、本屋の前", "二つ目の信号を左に曲がって、駅の前", "まっすぐ行って右側"], "explanation": "The directions are: turn left at the first light ('一つ目の信号を左に曲がってください') and look in front of the bookstore." },
        { "question": "先生が学生に話しています。学生は今日、何時間勉強しますか。", "transcript": "先生：明日は大切なN5のテストです。今日は家で、いつもよりたくさん勉強してください。毎日一時間している人は、今日は三時間、頑張ってください。", "correctAnswer": "三時間", "distractors": ["一時間", "二時間", "五時間"], "explanation": "The teacher explicitly sets the target for today: '今日は三時間、頑張ってください'." },
        { "question": "男の人と女の人が話しています。男の人の時計は今、何時ですか。", "transcript": "男：今、何時ですか。僕の時計は二時十五分ですが。\n女：私の時計は二時二十分ですよ。あ、テレビの時計も二時二十分ですね。\n男：あ、僕の時計は五分遅れていますね。", "correctAnswer": "二時十五分", "distractors": ["二時二十分", "二時十分", "二時半"], "explanation": "The question asks what the *man's* watch shows right now ('二時十五分ですが'). It happens to be 5 minutes slow." },
        { "question": "女の人が電話で話しています。女の人は何時の電車に乗りますか。", "transcript": "女：もしもし、今駅に着いたよ。何時の電車がある？\n男：三時十分と、三時半があるよ。十分のは急行だから早いよ。\n女：じゃあ、それに乗るね。切符をすぐ買うよ。", "correctAnswer": "三時十分の電車", "distractors": ["三時半の電車", "三時の電車", "四時二分の電車"], "explanation": "The man highlights that the 3:10 train is an express ('三時十分のは急行だから早いよ'), so she chooses it ('それに乗るね')." },
        { "question": "男の人と女の人が話しています。二人はお昼ご飯に何を食べますか。", "transcript": "男：お昼ご飯、カレーを食べに行きませんか。\n女：カレーは昨日の夜食べました。今日はうどんかお寿司がいいです。\n男：じゃあ、駅前の美味しいうどん屋に行きましょう。\n女：いいですね。", "correctAnswer": "うどん", "distractors": ["カレー", "お寿司", "ラーメン"], "explanation": "The woman rejects curry and wants udon or sushi. They settle on the udon shop ('うどん屋に行きましょう')." },
        { "question": "男の人と女の人が話しています。男の人はカバンをどこから見つけましたか。", "transcript": "男：あ、カバンがありません。車の中に忘れたのかな。\n女：さっき、玄関の椅子の下にありましたよ。見てきてください。\n男：あ、ありました！椅子の後ろに落ちていました。良かったです。", "correctAnswer": "玄関の椅子の後ろ", "distractors": ["車の中", "玄関の椅子の下", "部屋の机の上"], "explanation": "The woman spotted it under the entryway chair, but the man clarifies finding it fallen behind the chair ('椅子の後ろに落ちていました')." },
        { "question": "男の人と女の人が話しています。女の人はこれから何をしますか。", "transcript": "女：部屋がとても寒いですね。窓が開いていますか。\n男：いいえ、閉まっていますよ。ストーブをつけましょうか。\n女：あ、私の上着がそこの椅子にありますから、それを着ます。大丈夫です。", "correctAnswer": "上着を着る", "distractors": ["窓を閉める", "ストーブをつける", "外に出る"], "explanation": "She declines the heater and decides to put on her coat/jacket which is on the chair ('上着...それを着ます')." },
        { "question": "先生が話しています。作文は何枚書きますか。", "transcript": "先生：来週までに、日本の生活について作文を書いてください。この紙に、二枚書いてください。三枚は多いですから、二枚ちょうどでお願いします。", "correctAnswer": "二枚", "distractors": ["三枚", "一枚", "何枚でもいい"], "explanation": "The teacher rules out 3 pages and asks for exactly 2 pages ('二枚ちょうどでお願いします')." },
        { "question": "男の人と女の人が話しています。男の人は昨日、どこへ行きましたか。", "transcript": "女：昨日の土曜日は、どこかへ出かけましたか。\n男：本当は図書館へ行くつもりでしたが、天気がとてもよかったので、自転車で海へ行きました。気持ちよかったですよ。", "correctAnswer": "海", "distractors": ["図書館", "学校", "家"], "explanation": "He intended to go to the library, but because the weather was great, he rode his bike to the sea ('海へ行きました')." },
        { "question": "女の人が店員と話しています。女の人はどの服を買いますか。", "transcript": "女：この黒いセーター、いいですね。白もありますか。\n店員：はい、白いセーターもありますよ。あちらです。\n女：うーん、白は可愛いですが、汚れやすいですね。やっぱり最初の黒いのにします。", "correctAnswer": "黒いセーター", "distractors": ["白いセーター", "黒と白の両方", "何も買わない"], "explanation": "She decides against white because it gets dirty easily, reverting to her first choice: black ('やっぱり最初の黒いのにします')." },
        { "question": "男の人と女の人が話しています。男の人のカバンはどれですか。", "transcript": "男：僕のカバンを知りませんか。黒くて、大きいカバンです。\n女：あそこにある、ポケットがたくさんあるカバンですか。\n男：いいえ、ポケットが全然ない、シンプルなカバンです。あ、ありました！", "correctAnswer": "黒くて、大きくて、ポケットがないカバン", "distractors": ["黒くて、大きくて、ポケットがあるカバン", "白くて、ポケットがないカバン", "小さくて黒いカバン"], "explanation": "He specifies his bag is black, large, and completely lacks pockets ('ポケットが全然ない、シンプルなカバンです')." },
        { "question": "先生が学生に話しています。学生は今日、どこを掃除しますか。", "transcript": "先生：今日の掃除を始めます。いつもは教室を掃除しますが、今日はクラスの全員で廊下と階段をきれいにしてください。トイレは先生がやります。", "correctAnswer": "廊下と階段", "distractors": ["教室", "トイレ", "廊下とトイレ"], "explanation": "The teacher changes the standard routine, asking everyone to clean the hallways and stairs ('廊下と階段をきれいにしてください')." },
        { "question": "男の人と女の人が話しています。女の人は何色が好きですか。", "transcript": "男：綺麗な赤いシャツですね。赤が好きなんですか。\n女：赤も好きですが、一番好きなのは緑色です。私の部屋のカーテンも緑なんですよ。\n男：へえ、そうなんですか。", "correctAnswer": "緑色", "distractors": ["赤色", "白色", "青色"], "explanation": "The woman notes she likes red, but her absolute favorite is green ('一番好きなのは緑色です')." },
        { "question": "男の人と女の人が話しています。二人はお昼ご飯に何を食べますか。", "transcript": "男：お昼ご飯、何にしましょうか。近くに美味しいラーメン屋がありますよ。\n女：ラーメンは午前中に食べました。お寿司かカレーがいいです。\n男：じゃあ、あの新しいカレー屋に入ってみましょう。\n女：いいですね！", "correctAnswer": "カレー", "distractors": ["ラーメン", "お寿司", "うどん"], "explanation": "The woman had ramen earlier. Between sushi and curry, they pick the new curry shop ('カレー屋に入ってみましょう')." },
        { "question": "男の人と女の人が話しています。写真はどこで撮りますか。", "transcript": "男：写真を撮りましょう！あの綺麗な花の前がいいですか。\n女：花の前は人がたくさん並んでいますよ。あの大きい木の下が空いていますから、あそこにしましょう。\n男：わかりました。じゃあ、あそこへ行きましょう。", "correctAnswer": "大きい木の下", "distractors": ["花の前", "駅の前", "海の前"], "explanation": "The flower area is crowded, so they settle on the open space under the large tree ('あの大きい木の下...あそこにしましょう')." },
        { "question": "男の人と女の人が話しています。女の人は荷物をどうしますか。", "transcript": "男：その重いカバン、私が持ちましょうか。\n女：ありがとうございます。でも、もうすぐ友達が車で迎えに来ますから、ここで持って待っています。\n男：そうですか。じゃあ、一緒に待ちますね。", "correctAnswer": "持ってここで待つ", "distractors": ["男の人に持ってもらう", "コインロッカーに入れる", "車の中に置く"], "explanation": "She declines assistance because her friend is arriving shortly by car, so she keeps holding it ('ここで持って待っています')." },
        { "question": "男の人と女の人が話しています。男の人はこれから何をしますか。", "transcript": "女：外は雨が強く降っていますよ。窓を閉めましょうか。\n男：あ、僕の自転車が外にあります！濡れるから、急いで建物の中に入れます。\n女：あ、行ってらっしゃい。窓は私が閉めますね。", "correctAnswer": "自転車を建物の中に入れる", "distractors": ["窓を閉める", "外で雨を待つ", "何もしない"], "explanation": "The man rushes to save his bike from getting soaked ('濡れるから、急いで建物の中に入れます')." },
        { "question": "先生が留学生に話しています。学生は明日、何を勉強しますか。", "transcript": "先生：明日の授業について言います。明日は漢字の練習をたくさんします。教科書の三十ページから使います。文法はやりません。", "correctAnswer": "漢字", "distractors": ["文法", "漢字と文法", "読解"], "explanation": "The teacher states they will do plenty of kanji practice tomorrow ('明日は漢字の練習をたくさんします') and skip grammar." },
        { "question": "男の人と女の人がオフィスで話しています。男の人はコピーを何枚しますか。", "transcript": "女：この会議の資料を、三十枚コピーしてください。\n男：あ、今日の会議は十人来られなくなりましたよ。\n女：あら、そうですか。じゃあ、十枚少なく、二十枚でお願いします。", "correctAnswer": "二十枚", "distractors": ["三十枚", "十枚", "四十枚"], "explanation": "10 people can't make it, so the woman subtracts 10 copies from the original 30, asking for 20 ('二十枚でお願いします')." },
        { "question": "女の人が駅で話しています。電車は何分に来ますか。", "transcript": "女：すみません、次の電車は何分ですか。二時十分ですか。\n駅員：いつもは十分ですが、今日は事故があったので、十分遅れています。\n女：じゃあ、二時二十分ですね。わかりました。", "correctAnswer": "二十分（二時二十分）", "distractors": ["十分（二時十分）", "三十分（二時三十分）", "五分"], "explanation": "It's usually 2:10, but a 10-minute delay pushes it to 2:20 ('二時二十分ですね')." },
        { "question": "男の人と女の人が話しています。二人はどんな映画を見ますか。", "transcript": "男：映画を見に行きましょう。ホラー映画はどうですか。\n女：ホラーは怖くて夜眠れなくなるから嫌です。アニメかコメディーがいいです。\n男：じゃあ、今一番人気があるアニメの映画にしましょう。\n女：賛成です！", "correctAnswer": "アニメの映画", "distractors": ["ホラー映画", "コメディー映画", "恋愛映画"], "explanation": "The woman rejects horror. The man suggests the currently trending anime movie, which she cheers for ('アニメの映画にしましょう')." },
        { "question": "先生が学生に話しています。学生はテストの前に最初は何をしますか。", "transcript": "先生：今からテストの紙を配ります。名前を書く前に、まずペンのインクが出るか、紙に線を書いて確認してください。それから名前を書いて始めてください。", "correctAnswer": "ペンのインクが出るか確認する（線を書く）", "distractors": ["名前を書く", "答えを書く", "紙を裏返す"], "explanation": "The teacher wants them to verify their ink first by doodling a quick test line ('名前を書く前に、まずペンのインクが出るか...確認してください')." },
        { "question": "お母さんと男の子が話しています。男の子はいつ宿題をしますか。", "transcript": "男の子：お母さん、ゲームをしてもいい？\n母：宿題はもう終わったの？\n男の子：ううん。晩ご飯を食べてからやるよ。\n母：だめです。宿題をやってから、ゲームをしなさい。\n男の子：はーい。じゃあ、今から宿題をやる。ゲームはその後だね。", "correctAnswer": "今すぐ（ゲームの前）", "distractors": ["晩ご飯を食べた後", "ゲームをした後", "明日"], "explanation": "He attempts to delay it until after dinner, but the mother holds a strict line ('宿題をやってから、ゲームをしなさい'), forcing him to do it right now." },
        { "question": "男の人と女の人が話しています。男の人はコーヒーになにを入れますか。", "transcript": "女：コーヒーをどうぞ。お砂糖とミルクは入れますか。\n男：お砂糖だけ入れてください。ミルクを入れると味が薄くなりますから。\n女：はい、どうぞ。", "correctAnswer": "お砂糖だけ", "distractors": ["砂糖とミルク", "ミルクだけ", "何も入れない"], "explanation": "He avoids milk to keep the flavor strong, asking only for sugar ('お砂糖だけ入れてください')." },
        { "question": "男の人と女の人が話しています。女の人は誰と旅行に行きますか。", "transcript": "男：来週、沖縄へ旅行に行くんですね。友達とですか。\n女：いいえ。今回は私の両親と一緒にいきます。友達はみんな仕事が忙しいですから。\n男：ご両親と、いいですね！", "correctAnswer": "両親", "distractors": ["友達", "一人で", "男の人"], "explanation": "Her friends are trapped in work obligations, so she is traveling alongside her parents ('今回は私の両親と一緒にいきます')." },
        { "question": "男の人と女の人が話しています。男の人は明日、何をしますか。", "transcript": "男：明日は休みだから、一日中家で寝ているつもりです。今週はとても疲れました。\n女：ええ、お疲れ様でした。ゆっくり休んでくださいね。", "correctAnswer": "家で寝る", "distractors": ["出かける", "仕事をする", "友達と遊ぶ"], "explanation": "The man explicitly details his low-key recovery blueprint: '一日中家で寝ているつもりです' (I plan to sleep at home all day)." },
        { "question": "男の人と女の人がレストランで話しています。女の人は何を注文しますか。", "transcript": "男：何を食べますか。僕はラーメンにします。\n女：私はハンバーグにします。あ、すみません、ハンバーグは売り切れですか。じゃあ、私もラーメンにします。", "correctAnswer": "ラーメン", "distractors": ["ハンバーグ", "パスタ", "何も注文しない"], "explanation": "Her top target (hamburger) is sold out, so she adapts and joins his order ('じゃあ、私もラーメンにします')." },
        { "question": "男の人と女の人が話しています。二人は何時に会いますか。", "transcript": "男：明日の会議は三時からです。二時半にロビーで会いましょう。\n女：二時半は少し早いです。資料を準備しますから、二時四十五分にしてください。\n男：わかりました。その時間に。", "correctAnswer": "二時四十五分", "distractors": ["二時半", "三時", "二時十五分"], "explanation": "The woman shifts the proposed 2:30 mark forward by 15 minutes due to paperwork prep ('二時四十五分にしてください')." },
        { "question": "先生が学生に話しています。学生は明日、何を持ってきますか。", "transcript": "先生：明日は日本語のテストをします。鉛筆と消しゴムを忘れないでください。辞書や教科書は机の中にしまってください。持ってこなくてもいいです。", "correctAnswer": "鉛筆と消しゴム", "distractors": ["鉛筆と辞書", "消しゴムと教科書", "教科書と辞書"], "explanation": "The teacher states pencils and erasers are mandatory, explicitly ruling out textbooks/dictionaries." },
        { "question": "女の人と男の人が話しています。女の人はどこへ行きますか。", "transcript": "女：すみません、この近くに銀行はありますか。\n男：あそこの交差点を左に曲がると、スーパーの隣にありますよ。\n女：ありがとうございます。助かりました。", "correctAnswer": "銀行", "distractors": ["スーパー", "交差点", "駅"], "explanation": "The woman explicitly triggers the query tracking: '銀行はありますか' (Is there a bank?)." },
        { "question": "男の人と女の人が話しています。男の人はどのバスに乗りますか。", "transcript": "男：すみません、五番のバスは駅に行きますか。\n女：いいえ。駅に行くのは、あっちにある二番のバスですよ。\n男：あ、二番ですね。ありがとうございます。", "correctAnswer": "二番のバス", "distractors": ["五番のバス", "一番のバス", "三番のバス"], "explanation": "The bystander guides the man away from line 5 directly to bus number 2 ('駅に行くのは...二番のバスですよ')." },
        { "question": "女の人と男の人が話しています。明日の天気はどうなりますか。", "transcript": "女：明日は雨が降るでしょうか。心配です。\n男：天気予報を見ましたが、明日は一日中強い雪が降るそうですよ。\n女：えっ、雨じゃなくて雪ですか！大変ですね。", "correctAnswer": "雪", "distractors": ["雨", "晴れ", "曇り"], "explanation": "The man breaks the unexpected weather alert: '明日は一日中強い雪が降るそうですよ' (I hear it will snow heavily all day tomorrow)." },
        { "question": "男の人と女の人がカフェで話しています。女の人は何を食べますか。", "transcript": "男：ケーキがおいしそうですね。僕はチョコレートケーキにします。\n女：私はチーズケーキが食べたいです。あ、でも、売り切れですね。じゃあ、私も同じチョコレートのにします。", "correctAnswer": "チョコレートケーキ", "distractors": ["チーズケーキ", "イチゴのケーキ", "何も食べない"], "explanation": "Her favorite option is missing from the display case, so she copies his choice ('私も同じチョコレートのにします')." },
        { "question": "先生が話しています。学生は最初に何をしますか。", "transcript": "先生：今から新しいプリントを配ります。まだ読まないでください。まず、紙の一番下に今日の日付を書いてください。名前はその後に書きます。", "correctAnswer": "今日の日付を書く", "distractors": ["名前を書く", "プリントを読む", "紙を裏返す"], "explanation": "The teacher coordinates the initial steps strictly: 'まず、紙の一番下に今日の日付を書いてください' (First, write today's date at the bottom of the paper)." },
        { "question": "男の人と女の人が写真を見ながら話しています。女の人の弟はどの人ですか。", "transcript": "男：これが弟さんですか。背が高いですね。\n女：いいえ、それは兄です。弟は髪が短くて、帽子をかぶっているほうです。\n男：あ、この人ですね。可愛いですね。", "correctAnswer": "髪が短くて、帽子をかぶっている人", "distractors": ["背が高くて、髪が長い人", "髪が長くて、帽子をかぶっている人", "背が高い人"], "explanation": "She isolates her younger brother visually: '弟は髪が短くて、帽子をかぶっているほうです'." },
        { "question": "男の人と女の人が話しています。男の人のカバンはどれですか。", "transcript": "男：すみません、僕のカバンを取ってください。そこの棚の上にあります。\n女：この青いカバンですか。\n男：いいえ、その隣にある黒いカバンです。丸い形をしています。\n女：はい、どうぞ。", "correctAnswer": "黒くて丸いカバン", "distractors": ["青くて丸いカバン", "黒くて四角いカバン", "青くて四角いカバン"], "explanation": "He directs her exactly: 'その隣にある黒いカバンです。丸い形をしています' (It's the black bag next to it. It has a round shape)." },
        { "question": "男の人と女の人が話しています。二人は今日、何を食べますか。", "transcript": "男：今日の晩ご飯、ハンバーグを作りましょうか。\n女：あ、冷蔵庫に肉がないから、今日は魚にしましょうよ。焼き魚はどうですか。\n男：いいですね。そうしましょう。", "correctAnswer": "焼き魚", "distractors": ["ハンバーグ", "肉料理", "何も食べない"], "explanation": "The woman mentions there is no meat in the refrigerator and suggests grilled fish ('焼き魚にしましょうよ'), which the man accepts." },
        { "question": "男の人と女の人が話しています。二人は何時に会いますか。", "transcript": "男：明日は三時に駅の前で会いましょう。\n女：三時は少し不便です。三時半にしてくださいませんか。\n男：いいですよ。じゃあ、その時間に。", "correctAnswer": "三時半", "distractors": ["三時", "二時半", "四時"], "explanation": "The woman asks to change the meeting time from 3:00 to 3:30 ('三時半にしてくださいませんか')." },
        { "question": "お母さんと女の子が話しています。女の子はテーブルの上に何をおきますか。", "transcript": "母：ご飯ができたから、お皿を並べてちょうだい。\n女の子：お箸も置く？\n母：お箸はもうお父さんが置いたから、お皿だけでいいよ。\n女の子：わかった。", "correctAnswer": "お皿だけ", "distractors": ["お皿とお箸", "お箸だけ", "コップとお皿"], "explanation": "The mother says the father already set the chopsticks, so only the plates are needed ('お皿だけでいいよ')." },
        { "question": "男の人と女の人が話しています。男の人はジュースを何本買いますか。", "transcript": "男：みんなでジュースを飲みましょう。四人ですね。\n女：私はお茶があるから要りません。\n男：じゃあ、三人分ですね。三本買います。", "correctAnswer": "三本", "distractors": ["四本", "二本", "一本"], "explanation": "There are 4 people, but the woman already has tea, so the man buys 3 bottles ('三本買います')." },
        { "question": "先生が学生に話しています。学生は明日、何時に集まりますか。", "transcript": "先生：明日はテストです。いつもは九時に始まりますが、明日は説明がありますから、八時四十五分に教室に集まってください。", "correctAnswer": "八時四十五分", "distractors": ["九時", "八時半", "九時十五分"], "explanation": "The teacher states that because of an explanation, students must gather at 8:45 ('八時四十五分に教室に集まってください')." },
        { "question": "男の人と女の人が話しています。女の人はこれからどこへ行きますか。", "transcript": "女：あ、お金を崩したいんですが、近くに銀行はありますか。\n男：銀行は遠いですよ。あそこのコンビニで何か買えば、お釣りがもらえますよ。\n女：そうですね。そうします。", "correctAnswer": "コンビニ", "distractors": ["銀行", "駅", "交番"], "explanation": "The bank is far away, so she decides to go to the convenience store to break her money ('あそこのコンビニで...')." },
        { "question": "男の人と女の人が話しています。男の人は昨日、何をしましたか。", "transcript": "女：昨日の日曜日はどこかへ行きましたか。いい天気でしたね。\n男：本当は山へ行くつもりでしたが、雨が降りそうだったので、一日中家で映画を見ていました。\n女：そうですか。", "correctAnswer": "家で映画を見た", "distractors": ["山へ行った", "図書館へ行った", "仕事をした"], "explanation": "The trip to the mountain was abandoned, so he spent the day at home watching a movie ('一日中家で映画を見ていました')." },
        { "question": "女の人がお店で店員と話しています。女の人は全部でいくら払いましたか。", "transcript": "女：このノートを二冊ください。一冊百五十円ですね。\n店員：はい。それから、この消しゴムは百円です。全部で四百円です。\n女：はい、どうぞ。", "correctAnswer": "四百円", "distractors": ["百五十0円", "三百円", "五百円"], "explanation": "Two notebooks at 150 yen each (300) + one eraser at 100 yen = 400 yen ('全部で四百円です')." },
        { "question": "男の人と女の人が話しています。女の人のカバンはどれですか。", "transcript": "男：カバンがたくさんありますね。山田さんのカバンはどれですか。\n女：私のカバンは白くて、ポケットが一つだけあるカバンです。\n男：あ、これですね。綺麗ですね。", "correctAnswer": "白くて、ポケットが一つあるカバン", "distractors": ["黒くて、ポケットがないカバン", "白くて、ポケットがたくさんあるカバン", "黒いカバン"], "explanation": "She describes her bag as white with a single pocket ('白くて、ポケットが一つだけあるカバンです')." },
        { "question": "先生が留学生に話しています。学生は明日、何を持ってきますか。", "transcript": "先生：明日は作文を書きます。鉛筆と消しゴムを忘れないでください。辞書を使ってもいいですから、持っている人は持ってきてください。教科書は要りません。", "correctAnswer": "鉛筆、消しゴム、辞書", "distractors": ["鉛筆、消しゴム、教科書", "教科書と辞書", "鉛筆と教科書"], "explanation": "The teacher explicitly requests pencils, erasers, and dictionaries if they have them, ruling out textbooks." },
        { "question": "男の人と女の人が話しています。男の人は昨日の夜、何を勉強しましたか。", "transcript": "女：昨日の夜はたくさん勉強しましたか。\n男：はい。文法と読解をやるつもりでしたが、文法が難しくて、文法だけで時間が終わってしまいました。\n女：大変でしたね。", "correctAnswer": "文法だけ", "distractors": ["読解だけ", "文法と読解", "何もしなかった"], "explanation": "He intended to do both, but ran out of time studying grammar ('文法だけで時間が終わってしまいました')." },
        { "question": "男の人と女の人が話しています。男の人はどのコップを買いますか。", "transcript": "男：コップを買いたいんですが、どれがいいですかね。\n女：この丸くて青いコップ、綺麗ですよ。\n男：うーん、私は四角いコップが欲しいんです。この白い四角いコップにします。\n女：いいですね。", "correctAnswer": "四角くて白いコップ", "distractors": ["丸くて青いコップ", "四角くて青いコップ", "丸くて白いコップ"], "explanation": "The man explicitly wants a square cup, choosing the white square one ('この白い四角いコップにします')." },
        { "question": "女の人と男の人が話しています。女の人はいつ国へ帰りますか。", "transcript": "女：私は来月、国へ帰るんです。\n男：そうですか。七月ですね。暑いときですね。\n女：いいえ、来月の終わりですから、八月の一日です。\n男：ああ、八月ですね。", "correctAnswer": "八月", "distractors": ["七月", "六月", "九月"], "explanation": "She points out that her departure is at the very end of next month, specifically August 1st ('八月の一日です')." },
        { "question": "男の人と女の人が話しています。女の人はこれからどこへ行きますか。", "transcript": "女：あ、もう五時ですね。銀行に行かなければなりません。\n男：銀行はもう閉まっていますよ。三時までです。\n女：えっ、そうですか！じゃあ、駅前の本屋に行くのは明日にして、すぐATMに行きます。", "correctAnswer": "ATM", "distractors": ["銀行", "本屋", "駅"], "explanation": "Since the bank is closed, she changes her plan to find an ATM directly ('すぐATMに行きます')." },
        { "question": "男の人と女の人が道で話しています。交番はどこにありますか。", "transcript": "男：すみません、交番はどこですか。\n女：この道をまっすぐ行って、二つ目の信号を右に曲がってください。駅の前にありますよ。\n男：わかりました。ありがとうございます。", "correctAnswer": "二つ目の信号を右に曲がって、駅の前", "distractors": ["一つ目の信号を右に曲がって、駅の前", "二つ目の信号を左に曲がって、本屋の前", "まっすぐ行って左側"], "explanation": "The directions are: turn right at the second light ('二つ目の信号を右に曲がってください') to find it in front of the station." },
        { "question": "先生が学生に話しています。学生は今日、何時間勉強しますか。", "transcript": "先生：明日は文法のテストです。今日は家で、いつもよりたくさん勉強してください。毎日三十分している人は、今日は二時間、頑張ってください。", "correctAnswer": "二時間", "distractors": ["三十分", "一時間", "三時間"], "explanation": "The teacher states the exact expectation for today's study: '今日は二時間、頑張ってください'." },
        { "question": "男の人と女の人が話しています。男の人の時計は今、何時ですか。", "transcript": "男：今、何時ですか。僕の時計は三時十分ですが。\n女：私の時計は三時十五分ですよ。あ、テレビの時計も三時十五分ですね。\n男：あ、僕の時計は五分遅れていますね。", "correctAnswer": "三時充、十分", "distractors": ["三時十五分", "三時五分", "三時半"], "explanation": "The query asks for the time displayed on the *man's* watch ('僕の時計は三時十分ですが')." },
        { "question": "女の人が電話で話しています。女の人は何時の電車に乗りますか。", "transcript": "女：もしもし、今駅に着いたよ。何時の電車がある？\n男：四時十分と、四時半があるよ。十分のは急行だから早いよ。\n女：じゃあ、それに乗るね。切符を買うよ。", "correctAnswer": "四時十分の電車", "distractors": ["四時半の電車", "四時の電車", "五時十分の電車"], "explanation": "The man mentions the 4:10 train is an express and faster, so she takes it ('それに乗るね')." },
        { "question": "男の人と女の人が話しています。二人はお昼ご飯に何を食べますか。", "transcript": "男：お昼ご飯、お寿司を食べに行きませんか。\n女：お寿司は昨日の夜食べました。今日はカレーかラーメンがいいです。\n男：じゃあ、駅前の新しいカレー屋に行きましょう。\n女：いいですね。", "correctAnswer": "カレー", "distractors": ["お寿司", "ラーメン", "うどん"], "explanation": "The woman rejects sushi. Between curry and ramen, they decide on the curry shop ('カレー屋に行きましょう')." },
        { "question": "男の人と女の人が話しています。男の人はカバンをどこから見つけましたか。", "transcript": "男：あ、カバンがありません。部屋に忘れたのかな。\n女：さっき、居間の机の下にありましたよ。見てきてください。\n男：あ、ありました！机の後ろに落ちていました。良かったです。", "correctAnswer": "居間の机の後ろ", "distractors": ["自分の部屋", "居間の机の下", "車の中"], "explanation": "The woman thought it was under the table, but the man finds it has fallen behind the living room table ('机の後ろに落ちていました')." },
        { "question": "男の人と女の人が話しています。女の人はこれから何をしますか。", "transcript": "女：外は風が強くて、少し寒いですね。窓が開いていますか。\n男：いいえ、閉まっていますよ。エアコンをつけましょうか。\n女：あ、私の上着がそこの椅子にありますから、それを着ます。大丈夫です。", "correctAnswer": "上着を着る", "distractors": ["窓を閉める", "エアコンをつける", "外に出る"], "explanation": "She declines turning on the AC/heater and opts to put on her jacket from the chair ('上着...それを着ます')." },
        { "question": "先生が話しています。作文は何枚書きますか。", "transcript": "先生：来週までに、趣味について作文を書いてください。この紙に、三枚書いてください。二枚は少ないですから、三枚ちょうどでお願いします。", "correctAnswer": "三枚", "distractors": ["二枚", "一枚", "何枚でもいい"], "explanation": "The teacher requests exactly 3 pages ('三枚ちょうどでお願いします'), noting 2 is insufficient." },
        { "question": "男の人と女の人が話しています。男の人は昨日、どこへ行きましたか。", "transcript": "男：昨日の土曜日は、どこかへ出かけましたか。\n女：本当は海へ行くつもりでしたが、天気が悪かったので、図書館へ行きました。\n男：そうですか。私は家で寝ていました。", "correctAnswer": "家で寝ていた", "distractors": ["海", "図書館", "学校"], "explanation": "The question asks where the *man* went ('私は家で寝ていました')." },
        { "question": "女の人が店員と話しています。女の人はどの服を買いますか。", "transcript": "女：この白いシャツ、いいですね。黒もありますか。\n店員：はい、黒いシャツもありますよ。あちらです。\n女：うーん、黒はかっこいいですが、少し暗いですね。やっぱり最初の白いのにします。", "correctAnswer": "白いシャツ", "distractors": ["黒いシャツ", "黒と白の両方", "何も買わない"], "explanation": "She steps away from the black option because it's a bit dark, deciding on her original choice: white ('やっぱり最初の白いのにします')." },
        { "question": "男の人と女の人が話しています。男の人のカバンはどれですか。", "transcript": "男：僕のカバンを知りませんか。白くて、小さいカバンです。\n女：あそこにある、ポケットがたくさんあるカバンですか。\n男：いいえ、ポケットが全然ない、シンプルなカバンです。あ、ありました！", "correctAnswer": "白くて、小さくて、ポケットがないカバン", "distractors": ["白くて、小さくて、ポケットがあるカバン", "黒くて、ポケットがないカバン", "大きい白のカバン"], "explanation": "He isolates his bag description: white, small, and zero pockets ('ポケットが全然ない、シンプルなカバンです')." },
        { "question": "先生が学生に話しています。学生は今日、どこを掃除しますか。", "transcript": "先生：今日の掃除を始めます。いつもは廊下を掃除しますが、今日はクラスの全員で教室と階段をきれいにしてください。廊下は先生がやります。", "correctAnswer": "教室と階段", "distractors": ["廊下", "教室と廊下", "階段と廊下"], "explanation": "The teacher states that today the entire class will clean the classroom and stairs ('教室と階段をきれいにしてください')." },
        { "question": "男の人と女の人が話しています。女の人は何色が好きですか。", "transcript": "男：綺麗な青いシャツですね。青が好きなんですか。\n女：青も好きですが、一番好きなのは赤色です。私の財布も赤なんですよ。\n男：へえ、そうなんですか。", "correctAnswer": "赤色", "distractors": ["青色", "白色", "緑色"], "explanation": "She acknowledges liking blue, but emphasizes red is her absolute favorite ('一番好きなのは赤色です')." },
        { "question": "男の人と女の人が話しています。二人はお昼ご飯に何を食べますか。", "transcript": "男：お昼ご飯、何にしましょうか。近くに美味しいカレー屋がありますよ。\n女：カレーは昨日食べたので、別のがいいです。お寿司かうどんがいいです。\n男：じゃあ、あの新しいお寿司屋に入ってみましょう。\n女：いいですね！", "correctAnswer": "お寿司", "distractors": ["カレー", "うどん", "ラーメン"], "explanation": "The woman rejects curry. Between sushi and udon, they pick the new sushi restaurant ('お寿司屋に入ってみましょう')." },
        { "question": "男の人と女の人が話しています。写真はどこで撮りますか。", "transcript": "男：写真を撮りましょう！あの綺麗な川の前がいいですか。\n女：川の前は風が強いですよ。あそこの大きな木の下が空いていますから、あそこにしましょう。\n男：わかりました。じゃあ、あそこへ行きましょう。", "correctAnswer": "大きな木の下", "distractors": ["川の前", "駅の前", "家の中"], "explanation": "They bypass the river location because of wind and choose the area under the large tree ('あそこの大きな木の下...')." },
        { "question": "男の人と女の人が話しています。女の人は荷物をどうしますか。", "transcript": "男：その重い荷物、私が持ちましょうか。\n女：ありがとうございます。でも、もうすぐタクシーが来ますから、ここで持って待っています。\n男：そうですか。じゃあ、一緒に待ちますね。", "correctAnswer": "持ってここで待つ", "distractors": ["男の人に持ってもらう", "コインロッカーに入れる", "タクシーの中に置く"], "explanation": "She declines his offer because her taxi is coming right away, opting to hold it and wait ('ここで持って待っています')." },
        { "question": "男の人と女の人が話しています。男の人はこれから何をしますか。", "transcript": "女：外は雨が強く降っていますよ。窓を閉めましょうか。\n男：あ、僕の車が外にあります！窓が開いているから、急いで閉めに行ってきます。\n女：あ、行ってらっしゃい。部屋の窓は私が閉めますね。", "correctAnswer": "車の窓を閉めに行く", "distractors": ["部屋の窓を閉める", "外に出るだけ", "何もしない"], "explanation": "The man runs out to protect his car because its windows are down ('窓が開いているから、急いで閉めに行ってきます')." },
        { "question": "先生が留学生に話しています。学生は明日、何を勉強しますか。", "transcript": "先生：明日の授業について言います。明日は読解の練習をたくさんします。教科書の四十ページから使います。漢字はやりません。", "correctAnswer": "読解", "distractors": ["漢字", "文法", "漢字と読解"], "explanation": "The teacher states that tomorrow is dedicated to reading comprehension ('明日は読解の練習をたくさんします')." },
        { "question": "男の人と女の人がオフィスで話しています。男の人はコピーを何枚しますか。", "transcript": "女：この会議の資料を、四十枚コピーしてください。\n男：あ、今日の会議は五人来られなくなりましたよ。\n女：あら、そうですか。じゃあ、五枚少なく、三十五枚でお願いします。", "correctAnswer": "三十五枚", "distractors": ["四十枚", "五枚", "三十枚"], "explanation": "Since 5 people are absent, they subtract 5 copies from 40, requesting 35 ('三十五枚でお願いします')." },
        { "question": "女の人が駅で話しています。電車は何分に来ますか。", "transcript": "女：すみません、次の電車は何分ですか。三時十分ですか。\n駅員：いつもは十分ですが、今日は大雨なので、五分遅れています。\n女：じゃあ、三時十五分ですね。わかりました。", "correctAnswer": "十五分（三時十五分）", "distractors": ["十分（三時十分）", "五分（三時五分）", "二十分"], "explanation": "The 10-minute slot is delayed by 5 minutes, shifting it to 3:15 ('三時十五分ですね')." },
        { "question": "男の人と女の人が話しています。二人はどんな映画を見ますか。", "transcript": "男：映画を見に行きましょう。コメディー映画はどうですか。\n女：コメディーは最近あまり見たくないです。恋愛映画かホラーがいいです。\n男：じゃあ、今人気のホラー映画があるので、それにしましょう。\n女：えっ、怖いけどいいですよ。", "correctAnswer": "ホラー映画", "distractors": ["コメディー映画", "恋愛映画", "アニメ"], "explanation": "They decide on the popular horror movie ('ホラー映画...それにしましょう')." },
        { "question": "先生が学生に話しています。学生はテストの前に最初は何をしますか。", "transcript": "先生：今からテストの紙を配ります。名前を書く前に、まず机の上にあるものを全部カバンにしまってください。筆記用具だけ出してください。それから名前を書いて始めます。", "correctAnswer": "机の上を片付ける（カバンにしまう）", "distractors": ["名前を書く", "答えを書く", "紙を裏返す"], "explanation": "The teacher outlines the very first step clearly: '名前を書く前に、まず机の上にあるものを全部カバンにしまってください'." },
        { "question": "お母さんと男の子が話しています。男の子はいつ宿題をしますか。", "transcript": "男の子：お母さん、テレビを見てもいい？\n母：宿題はもう終わったの？\n男の子：ううん、ご飯を食べてからやる。\n母：だめです。宿題をやってから、テレビを見なさい。\n男の子：はーい。じゃあ、今からやるよ。", "correctAnswer": "今すぐ（テレビの前）", "distractors": ["ご飯を食べた後", "テレビを見た後", "明日"], "explanation": "The mother mandates completing it before screen time ('宿題をやってから、テレビを見なさい'), so he starts right away." },
        { "question": "男の人と女の人が話しています。男の人はコーヒーに何を入れますか。", "transcript": "女：コーヒーをどうぞ。お砂糖とミルクは入れますか。\n男：何も入れないでください。ブラックが一番好きですから。\n女：はい、どうぞ。", "correctAnswer": "何も入れない", "distractors": ["砂糖とミルク", "ミルクだけ", "お砂糖だけ"], "explanation": "He explicitly prefers black coffee and requests nothing ('何も入れないでください')." },
        { "question": "男の人と女の人が話しています。女の人は誰と旅行に行きますか。", "transcript": "男：来週、北海道へ旅行に行くんですね。友達とですか。\n女：いいえ、今回は兄と一緒にいきます。友達はみんな仕事がありますから。\n男：お兄さんと、いいですね！", "correctAnswer": "お兄さん", "distractors": ["友達", "一人で", "両親"], "explanation": "Her friends are busy with work, so she travels with her older brother ('今回は兄と一緒にいきます')." },
        { "question": "男の人と女の人が話しています。男の人は明日、何をしますか。", "transcript": "男：明日は休みだから、一日中家で本を読むつもりです。新しい本を買ったんです。\n女：いいですね。ゆっくり過ごしてください。", "correctAnswer": "家で本を読む", "distractors": ["出かける", "仕事をする", "友達と遊ぶ"], "explanation": "The man sets out his plain intentions: '一日中家で本を読むつもりです' (I plan to read a book at home all day)." },
        { "question": "男の人と女の人がレストランで話しています。女の人は何を注文しますか。", "transcript": "男：何を食べますか。僕はうどんにします。\n女：私はパスタにします。あ、すみません、パスタはもう終わりですか。じゃあ、私も同じうどんにします。", "correctAnswer": "うどん", "distractors": ["パスタ", "カレー", "何も注文しない"], "explanation": "Her preferred choice (pasta) is no longer available, so she maps her order to his selection ('じゃあ、私も同じうどんにします')." },
        { "question": "男の人と女の人が話しています。二人は何時に会いますか。", "transcript": "男：明日の会議は四時からです。三時半にロビーで会いましょう。\n女：三時半は少し早いです。資料を準備しますから、三時四十五分にしてください。\n男：わかりました。その時間に。", "correctAnswer": "三時四十五分", "distractors": ["三時半", "四時", "三時十五分"], "explanation": "The woman modifies the baseline proposal to 3:45 to factor in material prep ('三時四十五分にしてください')." },
        { "question": "先生が学生に話しています。学生は明日、何を持ってきますか。", "transcript": "先生：明日は日本語のテストをします。黒いボールペンを忘れないでください。鉛筆は使えません。消しゴムやノートはしまってください。", "correctAnswer": "黒いボールペン", "distractors": ["鉛筆", "消しゴムとノート", "赤いペン"], "explanation": "The teacher states pens are strictly required and pencils are useless ('黒いボールペンを忘れないでください。鉛筆は使えません')." },
        { "question": "女の人と男の人が話しています。女の人はどこへ行きますか。", "transcript": "女：すみません、この近くに本屋はありますか。\n男：あそこの交差点を右に曲がると、駅の隣にありますよ。\n女：ありがとうございます。すぐ行ってみます。", "correctAnswer": "本屋", "distractors": ["駅", "交差点", "スーパー"], "explanation": "The woman launches the structural request: '本屋はありますか' (Is there a bookstore?)." },
        { "question": "男の人と女の人が話しています。男の人はどのバスに乗りますか。", "transcript": "男：すみません、三番のバスは空港に行きますか。\n女：いいえ。空港に行くのは、あっちにある一番のバスですよ。\n男：あ、一番ですね。ありがとうございます。", "correctAnswer": "一番のバス", "distractors": ["三番のバス", "五番のバス", "二番のバス"], "explanation": "The guide informs him that line 1 handles airport transit ('空港に行くのは...一番のバスですよ')." },
        { "question": "女の人と男の人が話しています。明日の天気はどうなりますか。", "transcript": "女：明日は風が強いでしょうか。心配です。\n男：天気予報を見ましたが、明日は一日中強い雨が降るそうですよ。風はないです。\n女：えっ、大雨ですか！大変ですね。", "correctAnswer": "雨", "distractors": ["風が強い", "晴れ", "雪"], "explanation": "The man delivers the formal text tracking: '明日は一日中強い雨が降るそうですよ' (I hear it will rain heavily all day tomorrow)." },
        { "question": "男の人と女の人がカフェで話しています。女の人は何を食べますか。", "transcript": "男：ケーキがおいしそうですね。僕はイチゴのケーキにします。\n女：私はアップルパイが食べたいです。あ、でも、売り切れですね。じゃあ、私も同じイチゴのケーキにします。", "correctAnswer": "イチゴのケーキ", "distractors": ["アップルパイ", "チョコレートケーキ", "何も食べない"], "explanation": "Her dynamic option choice drops out due to stock limits, matching her to his selection ('私も同じイチゴのケーキにします')." },
        { "question": "先生が話しています。学生は最初に何をしますか。", "transcript": "先生：今から新しいプリントを配ります。まだ読まないでください。まず、紙の一番上に名前を書いてください。クラスの番号はその後に書きます。", "correctAnswer": "名前を書く", "distractors": ["クラスの番号を書く", "プリントを読む", "紙を裏返す"], "explanation": "The instructor sets the entry stack step explicitly: 'まず、紙の一番上に名前を書いてください' (First, write your name at the very top of the paper)." },
        { "question": "男の人と女の人が写真を見ながら話しています。女の人の弟はどの人ですか。", "transcript": "男：これが弟さんですか。背が高いですね。\n女：いいえ、それは兄です。弟は髪が長くて、眼鏡をかけているほうです。\n男：あ、この人ですね。可愛いですね。", "correctAnswer": "髪が長くて、眼鏡をかけている人", "distractors": ["背が高くて、髪が短い人", "髪が短くて、眼鏡をかけている人", "背が高い人"], "explanation": "She tracks her younger brother accurately: '弟は髪が長くて、眼鏡をかけているほうです'." },
        { "question": "男の人と女の人が話しています。男の人のカバンはどれですか。", "transcript": "男：すみません、僕のカバンを取ってください。そこの机の上にあります。\n女：この黒いカバンですか。\n男：いいえ、その隣にある青いカバンです。四角い形をしています。\n女：はい、どうぞ。", "correctAnswer": "青くて四角いカバン", "distractors": ["黒いカバン", "青くて丸いカバン", "黒くて四角いカバン"], "explanation": "He pinpoints the target object: 'その隣にある青いカバンです。四角い形をしています'." },
        { "question": "男の人と女の人が話しています。二人はどこで会いますか。", "transcript": "男：明日は駅の前で会いましょうか。\n女：駅の前は人が多いですから、駅の中の喫茶店にしませんか。\n男：わかりました。じゃあ、そこにしましょう。", "correctAnswer": "駅の喫茶店", "distractors": ["駅の前", "公園", "デパート"], "explanation": "The woman suggests the coffee shop inside the station ('駅の中の喫茶店にしませんか') to avoid the crowd." },
        { "question": "男の人と女の人が話しています。男の人はどのスポーツが好きですか。", "transcript": "女：スポーツはよくしますか。\n男：はい。昔は水泳をしていましたが、今はテニスをしています。でも、一番好きなのはテレビで野球を見ることです。", "correctAnswer": "野球", "distractors": ["水泳", "テニス", "サッカー"], "explanation": "He plays tennis now, but explicitly says his favorite is watching baseball ('一番好きなのはテレビで野球を見ることです')." },
        { "question": "先生が学生に話しています。学生は明日、何時に学校へ来ますか。", "transcript": "先生：明日は遠足ですね。いつもは八時半に学校に来ますが、明日はバスに乗りますから、八時十五分に来てください。遅れないでくださいね。", "correctAnswer": "八時十五分", "distractors": ["八時半", "八時", "九時"], "explanation": "The teacher states the new time for the field trip: '八時十五分に来てください'." },
        { "question": "男の人と女の人が話しています。男の人はジュースを何本買いますか。", "transcript": "男：ジュースを買いに行きます。全部で六人ですね。\n女：あ、私と山田さんはお茶があるから、ジュースは要りません。\n男：わかりました。じゃあ、四本ですね。", "correctAnswer": "四本", "distractors": ["六本", "二本", "五本"], "explanation": "There are 6 people, but 2 don't need juice. 6 - 2 = 4 bottles ('四本ですね')." },
        { "question": "女の人と男の人が話しています。男の人は明日、何をしますか。", "transcript": "女：明日は日曜日ですね。どこかへ行きますか。\n男：本当は海へ行くつもりでしたが、車が壊れてしまったので、一日中家で本を読みます。\n女：そうですか。残念ですね。", "correctAnswer": "家で本を読む", "distractors": ["海へ行く", "車を直す", "仕事をする"], "explanation": "Because his car broke down, his plan changed to reading at home ('一日中家で本を読みます')." },
        { "question": "お母さんと男の子が話しています。男の子はこれから何をしますか。", "transcript": "母：太郎、遊びに行く前に宿題をしたの？\n男の子：うん、もう終わったよ。\n母：じゃあ、部屋の片付けをしてから行きなさい。\n男の子：えー、わかったよ。", "correctAnswer": "部屋の片付けをする", "distractors": ["宿題をする", "遊びに行く", "ご飯を食べる"], "explanation": "He already finished his homework. The mother tells him to tidy his room before going out ('部屋の片付けをしてから行きなさい')." },
        { "question": "女の人が店で話しています。女の人はいくら払いますか。", "transcript": "女：すみません、この三百円のケーキを二つと、二百円のコーヒーを一つください。\n店員：はい。ケーキ二つとコーヒー一つで、八百円です。\n女：はい、千円お願いします。", "correctAnswer": "八百円", "distractors": ["三百円", "五百円", "千円"], "explanation": "300 x 2 = 600, plus 200 for coffee = 800 yen ('八百円です'). She pays with a 1000 yen bill, but the cost is 800." },
        { "question": "男の人と女の人が話しています。男の人のカバンはどれですか。", "transcript": "男：あ、僕のカバンがありません。\n女：どんなカバンですか。\n男：黒くて、四角いカバンです。ポケットが二つあります。\n女：あ、あそこにありましたよ。", "correctAnswer": "黒くて、四角くて、ポケットが二つあるカバン", "distractors": ["黒くて、丸くて、ポケットが二つあるカバン", "白くて、四角くて、ポケットがないカバン", "黒くて、四角くて、ポケットがないカバン"], "explanation": "He describes it precisely: black, square, with two pockets ('黒くて、四角いカバンです。ポケットが二つあります')." },
        { "question": "先生が留学生に話しています。学生は明日、何を持ってきますか。", "transcript": "先生：明日は工場を見学します。ノートとペンを忘れないでください。お弁当は工場で出ますから、要りませんよ。飲み物だけ持ってきてください。", "correctAnswer": "ノート、ペン、飲み物", "distractors": ["ノート、ペン、お弁当", "飲み物とお弁当", "ノートとペンだけ"], "explanation": "The teacher lists notebook, pen, and drinks ('飲み物だけ持ってきてください'), explicitly saying lunch isn't needed." },
        { "question": "男の人と女の人が話しています。女の人はどの靴を履いていきますか。", "transcript": "男：今日はたくさん歩きますよ。その靴で大丈夫ですか。\n女：そうですね。この黒い靴は綺麗ですが、足が痛くなるから、やっぱり白いスニーカーにします。\n男：それがいいですね。", "correctAnswer": "白いスニーカー", "distractors": ["黒い靴", "赤いスニーカー", "黒いスニーカー"], "explanation": "She decides against the pretty black shoes to avoid foot pain and chooses white sneakers ('白いスニーカーにします')." },
        { "question": "男の人と女の人が話しています。男の人はいつ国へ帰りますか。", "transcript": "女：田中さんはいつ国へ帰りますか。来週ですか。\n男：いいえ。仕事が忙しいので、来月になります。十月の初めです。\n女：そうですか。", "correctAnswer": "十月", "distractors": ["九月", "来週", "十一月"], "explanation": "He says he is too busy next week, so it will be the beginning of October ('十月の初めです')." },
        { "question": "男の人と女の人が話しています。女の人はこれからどこへ行きますか。", "transcript": "女：あ、大変。もう五時です。\n男：どうしたんですか。\n女：郵便局に行こうと思っていましたが、もう閉まっていますね。切手が買えないから、コンビニに行ってきます。", "correctAnswer": "コンビニ", "distractors": ["郵便局", "銀行", "駅"], "explanation": "The post office is closed, so she goes to the convenience store to buy stamps ('コンビニに行ってきます')." },
        { "question": "男の人と女の人が話しています。交番はどこにありますか。", "transcript": "男：すみません、この近くに交番はありますか。\n女：あそこの信号を右に曲がってください。大きなスーパーがあります。交番はそのスーパーの前ですよ。\n男：ありがとうございます。", "correctAnswer": "信号を右に曲がって、スーパーの前", "distractors": ["信号を左に曲がって、スーパーの隣", "信号を右に曲がって、駅の前", "まっすぐ行って、スーパーの前"], "explanation": "The directions are to turn right at the light ('信号を右に曲がってください') and look in front of the supermarket." },
        { "question": "先生が話しています。学生は今日、何時間勉強しますか。", "transcript": "先生：明日は大切なテストです。今日は家で二時間勉強してください。いつも一時間しか勉強しない人も、今日は二時間やってくださいね。", "correctAnswer": "二時間", "distractors": ["一時間", "三時間", "三十分"], "explanation": "The teacher repeatedly stresses studying for 2 hours today ('今日は二時間やってくださいね')." },
        { "question": "男の人と女の人が話しています。男の人の時計は今、何時ですか。", "transcript": "男：今、何時ですか。僕の時計は四時十分ですが。\n女：私の時計は四時五分ですよ。あ、駅の時計も四時五分ですね。\n男：あ、僕の時計は五分進んでいますね。", "correctAnswer": "四時十分", "distractors": ["四時五分", "四時十五分", "四時"], "explanation": "The question asks for the time on the *man's* watch, which is 4:10 ('僕の時計は四時十分ですが')." },
        { "question": "女の人が電話で話しています。女の人は何時のバスに乗りますか。", "transcript": "女：もしもし、今からそっちに行くね。バスは何時がある？\n男：五時十五分と、五時半があるよ。\n女：十五分のバスはもう間に合わないから、五時半のに乗るね。", "correctAnswer": "五時半のバス", "distractors": ["五時十五分のバス", "五時のバス", "六時のバス"], "explanation": "She can't make the 5:15 bus, so she chooses the 5:30 one ('五時半のに乗るね')." },
        { "question": "男の人と女の人が話しています。二人はお昼ご飯に何を食べますか。", "transcript": "男：お昼ご飯、何にしましょうか。お寿司がいいです。\n女：お寿司は高いから、安いものがいいです。うどんかラーメンはどうですか。\n男：じゃあ、駅前のうどん屋に行きましょう。\n女：いいですね。", "correctAnswer": "うどん", "distractors": ["お寿司", "ラーメン", "カレー"], "explanation": "Sushi is too expensive. Between udon and ramen, the man suggests the udon shop ('うどん屋に行きましょう')." },
        { "question": "男の人と女の人が話しています。男の人は鍵をどこで見つけましたか。", "transcript": "男：あ、鍵がありません。カバンの中にもないです。\n女：さっき、机の上にありましたよ。\n男：あ、ありました！机の下に落ちていました。良かったです。", "correctAnswer": "机の下", "distractors": ["カバンの中", "机の上", "ドアの前"], "explanation": "The woman thought it was on the desk, but it had fallen under it ('机の下に落ちていました')." },
        { "question": "男の人と女の人が話しています。女の人はこれから何をしますか。", "transcript": "女：部屋が暗いですね。電気をつけましょうか。\n男：あ、電気は壊れているんです。カーテンを開けてください。\n女：わかりました。そうしますね。", "correctAnswer": "カーテンを開ける", "distractors": ["電気をつける", "窓を開ける", "外に出る"], "explanation": "The light is broken, so the man asks her to open the curtains ('カーテンを開けてください')." },
        { "question": "先生が話しています。作文は何枚書きますか。", "transcript": "先生：来週までに、将来の夢について作文を書いてください。この紙に一枚書いてください。二枚書いてもいいですが、一枚で十分です。", "correctAnswer": "一枚（または二枚）", "distractors": ["三枚", "何枚でもいい", "書かなくてもいい"], "explanation": "The teacher states 1 page is requested, though 2 is acceptable ('この紙に一枚書いてください...一枚で十分です')." },
        { "question": "男の人と女の人が話しています。男の人は昨日、どこへ行きましたか。", "transcript": "女：昨日の土曜日は、どこかへ出かけましたか。\n男：本当はデパートへ行くつもりでしたが、友達に誘われたので、一緒に映画を見に行きました。\n女：そうですか。よかったですね。", "correctAnswer": "映画（映画館）", "distractors": ["デパート", "家", "海"], "explanation": "He intended to go to the department store, but went to see a movie with a friend ('一緒に映画を見に行きました')." },
        { "question": "女の人が店員と話しています。女の人はどのカバンを買いますか。", "transcript": "女：この大きいカバン、いいですね。でも重いです。\n店員：少し小さくて軽いカバンもありますよ。デザインは同じです。\n女：あ、本当だ。旅行に持っていくので、この軽いのにします。", "correctAnswer": "小さくて軽いカバン", "distractors": ["大きくて重いカバン", "大きくて軽いカバン", "小さくて重いカバン"], "explanation": "She finds the big one too heavy and chooses the smaller, lighter one for travel ('この軽いのにします')." },
        { "question": "男の人と女の人が話しています。男の人の車はどれですか。", "transcript": "男：僕の車に乗って行きましょう。あそこにある黒い車です。\n女：黒い車が二台ありますよ。大きいほうですか。\n男：いいえ、小さいほうです。", "correctAnswer": "黒くて小さい車", "distractors": ["黒くて大きい車", "白くて小さい車", "白くて大きい車"], "explanation": "He specifies his car is black and the smaller of the two ('いいえ、小さいほうです')." },
        { "question": "先生が学生に話しています。学生は今日、どこを掃除しますか。", "transcript": "先生：今日の掃除を始めます。いつもは教室を掃除しますが、今日は図書室をきれいにしてください。教室は明日やります。", "correctAnswer": "図書室", "distractors": ["教室", "廊下", "トイレ"], "explanation": "The teacher reassigns the cleaning duty from the classroom to the library ('今日は図書室をきれいにしてください')." },
        { "question": "男の人と女の人が話しています。女の人は何色が好きですか。", "transcript": "男：綺麗な白いカバンですね。白が好きなんですか。\n女：白も好きですが、一番好きなのは黄色です。私の自転車も黄色なんですよ。\n男：へえ、そうなんですか。", "correctAnswer": "黄色", "distractors": ["白色", "赤色", "青色"], "explanation": "She likes white, but explicitly states her favorite is yellow ('一番好きなのは黄色です')." },
        { "question": "男の人と女の人が話しています。二人はお昼ご飯に何を食べますか。", "transcript": "男：お昼ご飯、何にしましょうか。近くに美味しいパン屋がありますよ。\n女：パンは朝食べたので、ご飯がいいです。お弁当を買いませんか。\n男：じゃあ、あそこのコンビニでお弁当を買いましょう。\n女：いいですね。", "correctAnswer": "お弁当（ご飯）", "distractors": ["パン", "ラーメン", "うどん"], "explanation": "The woman had bread for breakfast and wants rice, so they agree to buy bentos at the convenience store." },
        { "question": "男の人と女の人が話しています。写真はどこで撮りますか。", "transcript": "男：写真を撮りましょう！あの車やバスの前がいいですか。\n女：車が通って危ないですから、あそこの静かなお寺の前で撮りましょう。\n男：わかりました。じゃあ、あそこへ行きましょう。", "correctAnswer": "お寺の前", "distractors": ["車の前", "バスの前", "駅の前"], "explanation": "She avoids the cars because it's dangerous, suggesting the quiet temple ('あそこの静かなお寺の前で撮りましょう')." },
        { "question": "男の人と女の人が話しています。女の人は荷物をどうしますか。", "transcript": "男：その重い荷物、私が持ちましょうか。\n女：ありがとうございます。でも、重いのはこのカバンだけで、これは私が持ちます。その小さい袋をお願いしてもいいですか。\n男：はい、わかりました。", "correctAnswer": "小さい袋を男の人に持ってもらう", "distractors": ["全部自分で持つ", "全部男の人に持ってもらう", "コインロッカーに入れる"], "explanation": "She holds the heavy bag herself, but asks him to carry the small bag ('その小さい袋をお願いしてもいいですか')." },
        { "question": "男の人と女の人が話しています。男の人はこれから何をしますか。", "transcript": "女：あ、雨が降ってきましたね。急いで帰りましょう。\n男：あ、僕の洗濯物が外に干してあります！急いで家に取りに帰ります。\n女：気をつけて帰ってくださいね。", "correctAnswer": "洗濯物を取りに帰る", "distractors": ["窓を閉める", "傘を買う", "何もしない"], "explanation": "He realizes his laundry is hanging outside and rushes home to bring it in ('急いで家に取りに帰ります')." },
        { "question": "先生が留学生に話しています。学生は明日、何を勉強しますか。", "transcript": "先生：明日の授業について言います。明日は会話の練習をたくさんします。文法や漢字はやりませんから、教科書は持ってこなくてもいいです。", "correctAnswer": "会話", "distractors": ["文法", "漢字", "読解"], "explanation": "The teacher states they will do a lot of conversation practice tomorrow ('明日は会話の練習をたくさんします')." },
        { "question": "男の人と女の人がオフィスで話しています。男の人はお茶をいくつ持っていきますか。", "transcript": "女：会議室にいるお客さんにお茶を持っていってください。三人です。\n男：あ、社長も会議室に入りましたよ。\n女：あら、そうですか。じゃあ、社長の分も入れて四つお願いします。", "correctAnswer": "四つ", "distractors": ["三人", "五つ", "二つ"], "explanation": "Originally 3 guests, but the president joined, making it 4 teas ('社長の分も入れて四つお願いします')." },
        { "question": "女の人が駅で話しています。電車は何分に来ますか。", "transcript": "女：すみません、次の電車は何分ですか。五時二十分ですか。\n駅員：いつもは二十分ですが、今日はとても空いているので、遅れはありませんよ。\n女：じゃあ、二十分ですね。ありがとうございます。", "correctAnswer": "二十分（五時二十分）", "distractors": ["三十分", "十五分", "十分"], "explanation": "The train is on schedule today with no delays, so it arrives at the usual 5:20 ('じゃあ、二十分ですね')." },
        { "question": "男の人と女の人が話しています。二人はどんな映画を見ますか。", "transcript": "男：映画を見に行きましょう。アクション映画はどうですか。\n女：アクション映画もいいですが、今日はたくさん笑いたいから、コメディーがいいです。\n男：じゃあ、今人気のコメディー映画があるので、それにしましょう。", "correctAnswer": "コメディー映画", "distractors": ["アクション映画", "恋愛映画", "ホラー映画"], "explanation": "The woman wants to laugh a lot, so they choose a comedy movie ('コメディーがいいです')." },
        { "question": "先生が学生に話しています。学生はテストの前に最初は何をしますか。", "transcript": "先生：今からテストの紙を配ります。名前を書く前に、まず携帯電話の電源を切ってカバンに入れてください。机の上に出してはいけません。", "correctAnswer": "携帯電話の電源を切る（カバンに入れる）", "distractors": ["名前を書く", "答えを書く", "紙を裏返す"], "explanation": "The teacher specifies the very first action: turning off phones and putting them away ('まず携帯電話の電源を切って...')." },
        { "question": "お母さんと男の子が話しています。男の子はいつ宿題をしますか。", "transcript": "男の子：お母さん、遊びに行ってもいい？\n母：宿題はもう終わったの？\n男の子：ううん、帰ってきてからやる。\n母：だめです。宿題をやってから、遊びに行きなさい。\n男の子：はーい。じゃあ、今からやるよ。", "correctAnswer": "今すぐ（遊びに行く前）", "distractors": ["遊んで帰った後", "ご飯を食べた後", "明日"], "explanation": "He wants to play first, but the mother demands homework first ('宿題をやってから...'), so he starts now." },
        { "question": "男の人と女の人が話しています。男の人はコーヒーに何を入れますか。", "transcript": "女：コーヒーをどうぞ。お砂糖とミルクは入れますか。\n男：ミルクだけお願いします。甘いのはあまり好きじゃありませんから。\n女：はい、どうぞ。", "correctAnswer": "ミルクだけ", "distractors": ["砂糖とミルク", "何も入れない", "お砂糖だけ"], "explanation": "He dislikes sweet things, so he requests only milk ('ミルクだけお願いします')." },
        { "question": "男の人と女の人が話しています。女の人は誰と旅行に行きますか。", "transcript": "男：来週、京都へ旅行に行くんですね。家族とですか。\n女：いいえ。家族は国にいますから、大学の先生とクラスのみんなで行きます。\n男：へえ、賑やかでいいですね！", "correctAnswer": "先生とクラスのみんな", "distractors": ["家族", "一人で", "友達と二人"], "explanation": "She states she is going with her university teacher and the whole class ('大学の先生とクラスのみんなで行きます')." },
        { "question": "男の人と女の人が話しています。男の人は明日、何をしますか。", "transcript": "男：明日は休みだから、デパートへ行って新しい靴を買うつもりです。\n女：いいですね。私は一日中家でゴロゴロします。\n男：それもいいですね。", "correctAnswer": "デパートへ靴を買いに行く", "distractors": ["家で寝る", "仕事をする", "海へ行く"], "explanation": "The man says his plan is to go to the department store to buy new shoes ('デパートへ行って新しい靴を買うつもりです')." },
        { "question": "男の人と女の人がレストランで話しています。女の人は何を注文しますか。", "transcript": "男：何を食べますか。僕はカレーにします。\n女：私はピザにします。あ、すみません、ピザは時間がかかりますか。じゃあ、私もカレーにします。急いでいますから。", "correctAnswer": "カレー", "distractors": ["ピザ", "パスタ", "何も注文しない"], "explanation": "She initially wants pizza, but changes to curry because she is in a hurry ('私もカレーにします。急いでいますから')." },
        { "question": "男の人と女の人が話しています。二人は何時に会いますか。", "transcript": "男：明日の会議は午後一時からです。十二時半にロビーで会いましょう。\n女：十二時半は少し早いです。お昼ご飯を食べますから、十二時四十五分にしてください。\n男：わかりました。その時間に。", "correctAnswer": "十二時四十五分", "distractors": ["十二時半", "一時", "十二時十五分"], "explanation": "The woman modifies the meeting time to 12:45 to allow time for lunch ('十二時四十五分にしてください')." },
        { "question": "先生が学生に話しています。学生は明日、何を持ってきますか。", "transcript": "先生：明日は日本語のテストをします。鉛筆と消しゴムを忘れないでください。ボールペンは使えません。辞書も鞄にしまってください。", "correctAnswer": "鉛筆と消しゴム", "distractors": ["ボールペン", "消しゴムとボールペン", "辞書と鉛筆"], "explanation": "The teacher specifically requires pencils and erasers, forbidding ballpoint pens and dictionaries." },
        { "question": "女の人と男の人が話しています。女の人はどこへ行きますか。", "transcript": "女：すみません、この近くに花屋はありますか。\n男：あそこの交差点をまっすぐ行くと、郵便局の隣にありますよ。\n女：ありがとうございます。すぐ行ってみます。", "correctAnswer": "花屋", "distractors": ["郵便局", "交差点", "スーパー"], "explanation": "The woman initiates the question asking for the flower shop ('花屋はありますか')." },
        { "question": "男の人と女の人が話しています。男の人はどのバスに乗りますか。", "transcript": "男：すみません、四番のバスは美術館に行きますか。\n女：いいえ。美術館に行くのは、あっちにある六番のバスですよ。\n男：あ、六番ですね。ありがとうございます。", "correctAnswer": "六番のバス", "distractors": ["四番のバス", "一番のバス", "五番のバス"], "explanation": "The woman corrects him, stating that the bus to the art museum is number 6 ('美術館に行くのは...六番のバスですよ')." },
        { "question": "女の人と男の人が話しています。明日の天気はどうなりますか。", "transcript": "女：明日は晴れるでしょうか。洗濯をしたいです。\n男：天気予報を見ましたが、明日は一日中強い風が吹いて、曇りだそうですよ。雨は降りません。\n女：えっ、風ですか。洗濯物は外に出せませんね。", "correctAnswer": "曇りで強い風", "distractors": ["晴れ", "雨", "雪"], "explanation": "The forecast calls for strong winds and clouds all day, with no rain ('一日中強い風が吹いて、曇りだそうですよ')." },
        { "question": "男の人と女の人がカフェで話しています。女の人は何を食べますか。", "transcript": "男：ケーキがおいしそうですね。僕は抹茶のケーキにします。\n女：私はモンブランが食べたいです。あ、でも、売り切れですね。じゃあ、私も同じ抹茶のケーキにします。", "correctAnswer": "抹茶のケーキ", "distractors": ["モンブラン", "チョコレートケーキ", "何も食べない"], "explanation": "Her first choice (Mont Blanc) is sold out, so she decides to get the same matcha cake as the man ('私も同じ抹茶のケーキにします')." },
        { "question": "先生が話しています。学生は最初に何をしますか。", "transcript": "先生：今から新しい教科書を配ります。まだ開けないでください。まず、表紙の裏に自分の名前をペンで書いてください。それから開けてください。", "correctAnswer": "表紙の裏に名前を書く", "distractors": ["教科書を開ける", "プリントを読む", "先生に質問する"], "explanation": "The first instruction is to write their name on the back of the cover ('まず、表紙の裏に自分の名前をペンで書いてください')." },
        { "question": "男の人と女の人が写真を見ながら話しています。女の人の妹はどの人ですか。", "transcript": "男：これが妹さんですか。髪が短いですね。\n女：いいえ、それは姉です。妹は髪が長くて、白いワンピースを着ているほうです。\n男：あ、この人ですね。可愛いですね。", "correctAnswer": "髪が長くて、白いワンピースを着ている人", "distractors": ["髪が短くて、白いワンピースを着ている人", "髪が長くて、ズボンを履いている人", "髪が短い人"], "explanation": "She identifies her younger sister as the one with long hair wearing a white dress ('髪が長くて、白いワンピースを着ているほうです')." },
        { "question": "男の人と女の人が話しています。男の人のカバンはどれですか。", "transcript": "男：すみません、僕のカバンを取ってください。そこの椅子の下にあります。\n女：この茶色いカバンですか。\n男：いいえ、その隣にある緑色のカバンです。大きくて重いです。\n女：はい、どうぞ。", "correctAnswer": "緑色で大きいカバン", "distractors": ["茶色いカバン", "緑色で小さいカバン", "黒くて大きいカバン"], "explanation": "He clarifies that his bag is the green, large, heavy one next to the brown one ('その隣にある緑色のカバンです。大きくて重いです')." },
        { "question": "先生が学生に話しています。学生は明日、何時に学校へ来ますか。", "transcript": "先生：明日は特別な授業があります。いつもは九時に授業が始まりますが、明日は先生のお話がありますから、八時四十分に来てください。遅れないでください。", "correctAnswer": "八時四十分", "distractors": ["九時", "八時半", "九時十分"], "explanation": "The teacher moves the start time to 8:40 due to a special talk ('八時四十分に来てください')." },
        { "question": "男の人と女の人が話しています。二人は今からどこへ行きますか。", "transcript": "男：お腹が空きましたね。レストランへ行きましょうか。\n女：あ、その前に、少しだけ薬局に寄ってもいいですか。薬を買いたいです。\n男：いいですよ。じゃあ、先に行きましょう。", "correctAnswer": "薬局", "distractors": ["レストラン", "駅", "スーパー"], "explanation": "The woman asks to stop by the pharmacy *before* going to the restaurant ('その前に、少しだけ薬局に寄ってもいいですか'), and the man agrees." }
    ],

    // 7. Speaking & Pronunciation
    speaking_questions: [
        { "scenario": "You meet your teacher at 9:00 AM. Greet them.", "prompt": "朝、先生に会いました。何と言いますか。", "expectedResponse": "おはようございます", "explanation": "The polite morning greeting used for superiors or people you don't know well." },
        { "scenario": "You meet a friend at 9:00 AM. Greet them.", "prompt": "朝、友達に会いました。何と言いますか。", "expectedResponse": "おはよう", "explanation": "The casual morning greeting used with friends and close family." },
        { "scenario": "You meet your neighbor at 2:00 PM. Greet them.", "prompt": "昼、隣の人に会いました。何と言いますか。", "expectedResponse": "こんにちは", "explanation": "The standard daytime greeting, generally used between 11:00 AM and 5:00 PM." },
        { "scenario": "You meet an acquaintance at 8:00 PM. Greet them.", "prompt": "夜、人に会いました。何と言いますか。", "expectedResponse": "こんばんは", "explanation": "The standard evening greeting, used after the sun goes down." },
        { "scenario": "You are going to bed. What do you say to your family?", "prompt": "夜、寝る前に家族に何と言いますか。", "expectedResponse": "おやすみなさい", "explanation": "The standard phrase for 'Good night'." },
        { "scenario": "You are parting ways with your teacher at the end of the day.", "prompt": "学校が終わって、先生に何と言いますか。", "expectedResponse": "さようなら", "explanation": "A formal goodbye. (With friends, 'じゃあ、また' is more common)." },
        { "scenario": "You are parting ways with a friend. Say 'See you later'.", "prompt": "友達と別れます。「See you later」は何と言いますか。", "expectedResponse": "じゃあ、また", "explanation": "A casual and very common way to say goodbye to friends." },
        { "scenario": "Someone helped you carry a heavy bag. Thank them politely.", "prompt": "人が荷物を持ってくれました。お礼に何と言いますか。", "expectedResponse": "ありがとうございます", "explanation": "The standard polite phrase for 'Thank you'." },
        { "scenario": "You accidentally stepped on someone's foot. Apologize.", "prompt": "人の足を踏んでしまいました。何と言いますか。", "expectedResponse": "すみません", "explanation": "Used for light apologies, getting someone's attention, or showing polite gratitude." },
        { "scenario": "You are about to start eating a meal.", "prompt": "ご飯を食べる前に、何と言いますか。", "expectedResponse": "いただきます", "explanation": "Said before eating to express gratitude for the meal and those who prepared it." },
        { "scenario": "You have just finished eating a meal.", "prompt": "ご飯を食べた後に、何と言いますか。", "expectedResponse": "ごちそうさまでした", "explanation": "Said after a meal to express thanks for the food." },
        { "scenario": "You are leaving your house for school.", "prompt": "家を出る時、家族に何と言いますか。", "expectedResponse": "行ってきます", "explanation": "Literally 'I will go and come back'. Said by the person leaving the house." },
        { "scenario": "Your family member is leaving the house. Respond to them.", "prompt": "家族が家を出ます。何と言いますか。", "expectedResponse": "行ってらっしゃい", "explanation": "Literally 'Please go and come back'. Said to the person leaving." },
        { "scenario": "You have just returned home from school.", "prompt": "家に帰ってきた時、何と言いますか。", "expectedResponse": "ただいま", "explanation": "Literally 'Just now (I have returned)'. Said by the person returning home." },
        { "scenario": "Your family member has just returned home. Respond to them.", "prompt": "家族が家に帰ってきました。何と言いますか。", "expectedResponse": "お帰りなさい", "explanation": "The polite response to 'ただいま'. Welcoming someone back home." },
        { "scenario": "You are meeting someone for the first time.", "prompt": "初めて人に会った時、最初に何と言いますか。", "expectedResponse": "はじめまして", "explanation": "The standard phrase for 'Nice to meet you' at the beginning of a self-introduction." },
        { "scenario": "You finish introducing yourself. What is the closing phrase?", "prompt": "自己紹介（じこしょうかい）の最後に何と言いますか。", "expectedResponse": "よろしくお願いします", "explanation": "Literally 'Please treat me well'. Essential for closing an introduction." },
        { "scenario": "A store clerk says 'いらっしゃいませ'. You just want to look around.", "prompt": "店員が「いらっしゃいませ」と言いました。見ているだけです。何と言いますか。", "expectedResponse": "見ているだけです", "explanation": "A polite way to tell a clerk 'I'm just looking'." },
        { "scenario": "You want to buy the item you are holding.", "prompt": "これを選びました。店員に何と言いますか。", "expectedResponse": "これをください", "explanation": "The simplest and most direct way to say 'I will take this' or 'Please give me this'." },
        { "scenario": "You want to know the price of a bag.", "prompt": "カバンの値段（ねだん）を知りたいです。何と言いますか。", "expectedResponse": "いくらですか", "explanation": "The essential phrase for 'How much is it?'." },
        { "scenario": "You want to confirm if a seat is available.", "prompt": "ここに座りたいです。何と聞きますか。", "expectedResponse": "ここに座ってもいいですか", "explanation": "Te-form + もいいですか is used to ask for permission (May I sit here?)." },
        { "scenario": "You didn't hear what the teacher said. Ask them to repeat it.", "prompt": "先生の言葉が聞こえませんでした。何と言いますか。", "expectedResponse": "もう一度お願いします", "explanation": "Polite phrase meaning 'One more time, please'." },
        { "scenario": "You want the teacher to speak more slowly.", "prompt": "先生の話が早いです。何と言いますか。", "expectedResponse": "もっとゆっくり話してください", "explanation": "Adverb 'ゆっくり' (slowly) + てください (please do)." },
        { "scenario": "You don't understand Japanese well yet.", "prompt": "「I don't understand Japanese.」は何と言いますか。", "expectedResponse": "日本語がわかりません", "explanation": "Subject/Object takes 'が' with the verb わかる (to understand)." },
        { "scenario": "You want to ask if the person speaks English.", "prompt": "英語ができるか聞きたいです。何と言いますか。", "expectedResponse": "英語を話せますか", "explanation": "Alternatively, '英語がわかりますか' is also completely acceptable for N5." },
        { "scenario": "You are feeling sick. Tell your teacher.", "prompt": "体の具合（ぐあい）が悪いです。先生に何と言いますか。", "expectedResponse": "気分が悪いです", "explanation": "Or '病気です' / '具合が悪いです'. Used to express feeling unwell." },
        { "scenario": "You want to ask where the bathroom is.", "prompt": "トイレの場所を聞きたいです。何と言いますか。", "expectedResponse": "トイレはどこですか", "explanation": "Noun + はどこですか is the standard way to ask for a location." },
        { "scenario": "A stranger asks if you are Mr. Tanaka. You are not.", "prompt": "「田中さんですか」と聞かれました。違います。何と答えますか。", "expectedResponse": "いいえ、違います", "explanation": "The standard polite phrase for 'No, that is incorrect'." },
        { "scenario": "Someone asks if you understand. You do.", "prompt": "「わかりましたか」と聞かれました。何と答えますか。", "expectedResponse": "はい、わかりました", "explanation": "Polite confirmation that you have understood." },
        { "scenario": "You are at a restaurant. Order water.", "prompt": "レストランで水を頼みます。何と言いますか。", "expectedResponse": "お水をお願いします", "explanation": "Noun + をお願いします is a polite way to request an item or service." },
        { "scenario": "You want to ask what time it is now.", "prompt": "今の時間を知りたいです。何と聞きますか。", "expectedResponse": "今、何時ですか", "explanation": "The standard phrase for asking the current time." },
        { "scenario": "You want to ask what a specific object is.", "prompt": "あれが何か知りたいです。何と聞きますか。", "expectedResponse": "あれは何ですか", "explanation": "あれ (that over there) + は何ですか (what is it?)." },
        { "scenario": "Someone asks your name. Tell them your name is Smith.", "prompt": "「お名前は何ですか」と聞かれました。スミスです。何と答えますか。", "expectedResponse": "スミスです", "explanation": "In Japanese, simply stating '[Name]です' is the most natural polite response." },
        { "scenario": "Someone asks where you are from. You are from America.", "prompt": "「お国はどこですか」と聞かれました。何と答えますか。", "expectedResponse": "アメリカです", "explanation": "Or 'アメリカから来ました' (I came from America)." },
        { "scenario": "You want to ask someone's occupation.", "prompt": "仕事を聞きたいです。何と聞きますか。", "expectedResponse": "お仕事は何ですか", "explanation": "Adding 'お' to '仕事' makes it polite when referring to someone else's job." },
        { "scenario": "You are stepping into someone's house or room.", "prompt": "人の家や部屋に入る時、何と言いますか。", "expectedResponse": "お邪魔します", "explanation": "Literally 'I am intruding'. A polite greeting when entering someone's space." },
        { "scenario": "You want to invite a friend to eat lunch together.", "prompt": "友達を昼ご飯に誘います。何と言いますか。", "expectedResponse": "一緒に昼ご飯を食べませんか", "explanation": "Verb stem + ませんか is used to make invitations (Won't you ~ with me?)." },
        { "scenario": "A friend invited you to a movie. Accept enthusiastically.", "prompt": "友達が「映画を見に行きませんか」と言いました。何と答えますか。", "expectedResponse": "いいですね", "explanation": "The standard polite/friendly way to accept an invitation ('That sounds good')." },
        { "scenario": "You must decline an invitation to play tennis today.", "prompt": "友達が「テニスをしませんか」と言いました。今日はできません。何と答えますか。", "expectedResponse": "今日はちょっと", "explanation": "A polite, indirect way to decline an invitation in Japanese. Trailing off implies 'it's a bit inconvenient'." },
        { "scenario": "You want to compliment someone's Japanese.", "prompt": "友達の日本語が上手です。何と言いますか。", "expectedResponse": "日本語が上手ですね", "explanation": "Noun + が上手ですね means 'You are good at [Noun], aren't you?'." },
        { "scenario": "Someone compliments your Japanese. Be humble.", "prompt": "「日本語が上手ですね」と言われました。何と答えますか。", "expectedResponse": "いいえ、まだまだです", "explanation": "A humble response meaning 'No, I still have a long way to go'. Much better than simply saying 'Thank you'." },
        { "scenario": "You are cheering someone on for their test.", "prompt": "明日テストがある友達に、何と言いますか。", "expectedResponse": "頑張ってください", "explanation": "The standard phrase for 'Do your best' or 'Good luck'." },
        { "scenario": "You want to ask a store clerk if they have umbrellas.", "prompt": "店で傘を探しています。店員に何と聞きますか。", "expectedResponse": "傘はありますか", "explanation": "Noun + はありますか is the standard way to ask a store if they carry a specific item." },
        { "scenario": "You want to ask if credit cards are okay to use.", "prompt": "クレジットカードで払いたいですが、できるかどうかわかりません。何と聞きますか。", "expectedResponse": "クレジットカードは使えますか", "explanation": "Or simply 'クレジットカードでもいいですか' (Is a credit card okay?)." },
        { "scenario": "You need someone to wait a moment.", "prompt": "少し待ってほしいです。何と言いますか。", "expectedResponse": "少々お待ちください", "explanation": "A polite phrase meaning 'Please wait a moment'. 'ちょっと待ってください' is also fine for N5." },
        { "scenario": "You want to say that the food is delicious.", "prompt": "ご飯が美味しいです。何と言いますか。", "expectedResponse": "美味しいです", "explanation": "A simple statement of fact using the i-adjective おいしい." },
        { "scenario": "You are looking for the train station.", "prompt": "駅を探しています。道にいる人に何と聞きますか。", "expectedResponse": "すみません、駅はどこですか", "explanation": "Always start with 'すみません' (Excuse me) when asking strangers for directions." },
        { "scenario": "You want to ask how long it takes to walk to the station.", "prompt": "駅まで歩いてどのくらいかかるか知りたいです。何と聞きますか。", "expectedResponse": "歩いてどのくらいかかりますか", "explanation": "どのくらいかかりますか asks 'How long does it take (time/money)?'." },
        { "scenario": "You are surprised by something expensive.", "prompt": "値段が高くて驚きました。何と言いますか。", "expectedResponse": "高いですね", "explanation": "Using 'ね' at the end seeks agreement or expresses mild surprise/emotion." },
        { "scenario": "You want to know what this object is called in Japanese.", "prompt": "これの日本語の名前がわかりません。何と聞きますか。", "expectedResponse": "これは日本語で何ですか", "explanation": "Noun + で + 何ですか asks 'What is this in [Language]?'." },
        { "scenario": "You want to know the meaning of a specific Kanji.", "prompt": "漢字の意味を知りたいです。何と聞きますか。", "expectedResponse": "この漢字はどういう意味ですか", "explanation": "For strict N5, 'この漢字の意味は何ですか' is also perfectly acceptable." },
        { "scenario": "You want to ask for a favor politely.", "prompt": "人にお願いをします。何と言いますか。", "expectedResponse": "お願いします", "explanation": "The universal phrase for 'Please' or 'I request this of you'." },
        { "scenario": "Someone says 'Thank you'. Respond to them.", "prompt": "「ありがとうございます」と言われました。何と答えますか。", "expectedResponse": "どういたしまして", "explanation": "The standard polite response for 'You're welcome'." },
        { "scenario": "You have a question for the teacher.", "prompt": "先生に質問があります。何と言いますか。", "expectedResponse": "質問してもいいですか", "explanation": "Or simply '先生、質問があります' (Teacher, I have a question)." },
        { "scenario": "You are introducing your friend, Maria, to someone.", "prompt": "自分の友達（マリアさん）を人に紹介します。何と言いますか。", "expectedResponse": "こちらはマリアさんです", "explanation": "こちらは ~ です is the polite way to say 'This person is ~'." },
        { "scenario": "You want to know whose bag this is.", "prompt": "誰のカバンか知りたいです。何と聞きますか。", "expectedResponse": "これは誰のカバンですか", "explanation": "誰の (whose) + Noun." },
        { "scenario": "You want to ask when someone's birthday is.", "prompt": "誕生日を知りたいです。何と聞きますか。", "expectedResponse": "誕生日はいつですか", "explanation": "いつですか is the question word for 'When is it?'." },
        { "scenario": "You are taking a taxi. Tell the driver 'To the station, please.'", "prompt": "タクシーに乗りました。「駅まで」何と言いますか。", "expectedResponse": "駅までお願いします", "explanation": "Destination + までお願いします is the standard way to direct a taxi." },
        { "scenario": "You are leaving work before your coworkers.", "prompt": "他の人より先に帰ります。何と言いますか。", "expectedResponse": "お先に失礼します", "explanation": "Literally 'I will be rude (by leaving) before you'." },
        { "scenario": "Your coworker is leaving work before you. What do you say?", "prompt": "人が先に帰ります。何と言いますか。", "expectedResponse": "お疲れ様でした", "explanation": "A phrase acknowledging someone's hard work. Used constantly in workplaces." },
        { "scenario": "You want to ask someone's age politely.", "prompt": "年齢（年）を聞きたいです。何と聞きますか。", "expectedResponse": "おいくつですか", "explanation": "The polite version of '何歳ですか'." },
        { "scenario": "You are buying a ticket. Ask 'Does this train go to Tokyo?'", "prompt": "この電車が東京へ行くか知りたいです。何と聞きますか。", "expectedResponse": "この電車は東京へ行きますか", "explanation": "A simple Yes/No question using the particle へ (direction)." },
        { "scenario": "You want to ask 'What kind of food do you like?'", "prompt": "どんな食べ物が好きか聞きたいです。何と聞きますか。", "expectedResponse": "どんな食べ物が好きですか", "explanation": "どんな (what kind of) + Noun." },
        { "scenario": "You answer the phone.", "prompt": "電話に出ました。最初に何と言いますか。", "expectedResponse": "もしもし", "explanation": "The universal telephone greeting in Japanese." },
        { "scenario": "You want to confirm if it is raining right now.", "prompt": "今、雨が降っているか知りたいです。何と聞きますか。", "expectedResponse": "今、雨が降っていますか", "explanation": "Using the te-form + います to ask about a current ongoing action." },
        { "scenario": "Someone asks if you are busy today. You are not.", "prompt": "「今日は忙しいですか」と聞かれました。暇です。何と答えますか。", "expectedResponse": "いいえ、忙しくないです", "explanation": "Or 'いいえ、暇です'. Both show the negative of the i-adjective." },
        { "scenario": "You are hungry. State your condition.", "prompt": "お腹が空きました。何と言いますか。", "expectedResponse": "お腹が空きました", "explanation": "Literally 'My stomach has become empty'." },
        { "scenario": "You are thirsty. State your condition.", "prompt": "喉が渇きました。何と言いますか。", "expectedResponse": "喉が渇きました", "explanation": "Literally 'My throat has become dry'." },
        { "scenario": "You want to say 'Let's go'.", "prompt": "一緒に「行こう」と言いたいです。何と言いますか。", "expectedResponse": "行きましょう", "explanation": "The volitional (let's) polite form of 行く." },
        { "scenario": "You want to say 'Please do not forget'.", "prompt": "「忘れないで」と丁寧（ていねい）に言いたいです。何と言いますか。", "expectedResponse": "忘れないでください", "explanation": "Nai-form + でください creates a negative polite request." },
        { "scenario": "You want to ask someone to show you a photo.", "prompt": "写真を見たいです。何と言いますか。", "expectedResponse": "写真を見せてください", "explanation": "Te-form of 見せる (to show) + ください." },
        { "scenario": "Someone hands you a gift, saying 'どうぞ'.", "prompt": "「どうぞ」とプレゼントを渡されました。何と言いますか。", "expectedResponse": "ありがとうございます", "explanation": "Express gratitude immediately when receiving an item." },
        { "scenario": "You want to say that the weather is nice today.", "prompt": "今日の天気がいいです。何と言いますか。", "expectedResponse": "いい天気ですね", "explanation": "A very common small-talk phrase in Japanese." },
        { "scenario": "You want to know where the person lives.", "prompt": "どこに住んでいるか知りたいです。何と聞きますか。", "expectedResponse": "どこに住んでいますか", "explanation": "Location + に住んでいます asks where someone's current residence is." },
        { "scenario": "You want to state that you have older brothers.", "prompt": "「兄がいます」と言いたいです。何と言いますか。", "expectedResponse": "兄がいます", "explanation": "Using います for the existence of living things." },
        { "scenario": "You want to ask 'Do you have time tomorrow?'", "prompt": "明日の時間があるか知りたいです。何と聞きますか。", "expectedResponse": "明日、時間がありますか", "explanation": "Using あります for the existence of inanimate concepts like time." },
        { "scenario": "You are at a store and want to ask 'What time do you close?'", "prompt": "店が何時に閉まるか知りたいです。何と聞きますか。", "expectedResponse": "何時までですか", "explanation": "A natural way to ask 'Until what time (are you open)?'." },
        { "scenario": "Someone asks 'Why did you come to Japan?'. To study.", "prompt": "「どうして日本へ来ましたか」と聞かれました。「勉強のため」と言いたいです。何と答えますか。", "expectedResponse": "勉強のために来ました", "explanation": "Or simply '勉強に来ました' (Came to study)." },
        { "scenario": "You want to ask someone their favorite color.", "prompt": "好きな色を知りたいです。何と聞きますか。", "expectedResponse": "好きな色は何ですか", "explanation": "Adjective modifying noun (好きな色) + は何ですか." },
        { "scenario": "You want to say 'Please write it down.'", "prompt": "書いてほしいです。何と言いますか。", "expectedResponse": "書いてください", "explanation": "Te-form of 書く + ください." },
        { "scenario": "You are expressing that an exam was difficult.", "prompt": "テストが難しかったです。何と言いますか。", "expectedResponse": "テストは難しかったです", "explanation": "Past tense of an i-adjective (難しい -> 難しかった)." },
        { "scenario": "You are at a restaurant. Ask for the bill/check.", "prompt": "レストランで、お金を払います。店員に何と言いますか。", "expectedResponse": "お会計をお願いします", "explanation": "The standard phrase for asking for the check. 'お勘定（かんじょう）' is also used." },
        { "scenario": "You want to offer someone a seat on the train.", "prompt": "電車で、人に席（せき）を譲ります。何と言いますか。", "expectedResponse": "どうぞ", "explanation": "A versatile word meaning 'Here you go' or 'Please go ahead'." },
        { "scenario": "You want to ask 'Which one is your umbrella?'", "prompt": "どれが傘か知りたいです。何と聞きますか。", "expectedResponse": "傘はどれですか", "explanation": "どれ is the question word for 'Which one (out of 3 or more)'." },
        { "scenario": "You want to confirm if a specific date is correct.", "prompt": "「明日は火曜日ですか」と聞きたいです。何と言いますか。", "expectedResponse": "明日は火曜日ですか", "explanation": "A standard Noun + は + Noun + ですか format." },
        { "scenario": "You want to say 'I will pay with cash.'", "prompt": "現金（げんきん）で払います。何と言いますか。", "expectedResponse": "現金でお願いします", "explanation": "Means (現金) + で + お願いします." },
        { "scenario": "You want to ask someone to turn on the lights.", "prompt": "電気をつけてほしいです。何と言いますか。", "expectedResponse": "電気をつけてください", "explanation": "Te-form of つける + ください." },
        { "scenario": "You want to ask someone to close the window.", "prompt": "窓を閉めてほしいです。何と言いますか。", "expectedResponse": "窓を閉めてください", "explanation": "Te-form of 閉める + ください." },
        { "scenario": "Someone asks 'How was your weekend?'. It was fun.", "prompt": "「週末はどうでしたか」と聞かれました。楽しかったです。何と答えますか。", "expectedResponse": "楽しかったです", "explanation": "Past tense of 楽しい." },
        { "scenario": "You want to suggest 'Let's take a break.'", "prompt": "休みたいです。「休みましょう」と誘います。何と言いますか。", "expectedResponse": "休みましょう", "explanation": "Volitional form of 休む." },
        { "scenario": "You want to ask 'Do you know Mr. Tanaka?'", "prompt": "田中さんを知っているか聞きたいです。何と聞きますか。", "expectedResponse": "田中さんを知っていますか", "explanation": "Te-form of 知る + います reflects a state of knowing." },
        { "scenario": "You reply that you do not know Mr. Tanaka.", "prompt": "「田中さんを知っていますか」と聞かれました。知りません。何と答えますか。", "expectedResponse": "いいえ、知りません", "explanation": "The negative of 知っている is uniquely '知りません', not '知っていません'." },
        { "scenario": "You want to ask what someone's hobby is.", "prompt": "趣味（しゅみ）を知りたいです。何と聞きますか。", "expectedResponse": "趣味は何ですか", "explanation": "Noun + は何ですか." },
        { "scenario": "You want to ask 'Who is that person?'", "prompt": "あの人が誰か知りたいです。何と聞きますか。", "expectedResponse": "あの人は誰ですか", "explanation": "誰 (Dare) is the question word for 'Who'." },
        { "scenario": "You want to say 'I have a younger sister.'", "prompt": "妹がいると言いたいです。何と言いますか。", "expectedResponse": "妹がいます", "explanation": "Subject + がいます." },
        { "scenario": "You are giving someone a gift.", "prompt": "プレゼントを渡します。何と言いますか。", "expectedResponse": "これ、どうぞ", "explanation": "A polite and simple way to hand something to someone." },
        { "scenario": "You want to ask 'Where do I buy a ticket?'", "prompt": "切符を買う場所を知りたいです。何と聞きますか。", "expectedResponse": "切符はどこで買いますか", "explanation": "Location of action uses particle で (どこで)." },
        { "scenario": "You want to ask 'How did you come here today?'", "prompt": "今日、何でここに来たか聞きたいです。何と聞きますか。", "expectedResponse": "何で来ましたか", "explanation": "Or 'どうやって来ましたか' (How did you get here?)." },
        { "scenario": "You want to express that you like Japan.", "prompt": "日本が好きです。何と言いますか。", "expectedResponse": "日本が好きです", "explanation": "Object of 好き takes the particle が." },
        { "scenario": "You want to ask a friend 'Are you okay/Are you alright?'", "prompt": "友達が転びました。「大丈夫ですか」と聞きます。何と言いますか。", "expectedResponse": "大丈夫ですか", "explanation": "The universal phrase for 'Are you okay?'." },
        { "scenario": "You want to invite a coworker to drink coffee.", "prompt": "同僚（どうりょう）をコーヒーに誘います。何と言いますか。", "expectedResponse": "コーヒーを飲みに行きませんか", "explanation": "Verb stem + に行きませんか means 'Won't we go to do [action]?'." },
        { "scenario": "You see a friend leaving. Ask where they are going.", "prompt": "出かける友達に、どこへ行くか聞きます。何と言いますか。", "expectedResponse": "どこへ行きますか", "explanation": "The standard question structure for asking a destination." },
        { "scenario": "Tell someone you are going to the library.", "prompt": "「I am going to the library.」は何と言いますか。", "expectedResponse": "図書館に行きます", "explanation": "Destination + に/へ行きます states where you are going." },
        { "scenario": "Ask a friend what they did yesterday.", "prompt": "友達に昨日何をしたか聞きます。何と言いますか。", "expectedResponse": "昨日、何をしましたか", "explanation": "Past tense question structure for actions." },
        { "scenario": "Tell someone that you watched a movie yesterday.", "prompt": "昨日映画を見たことを伝えます。何と言いますか。", "expectedResponse": "昨日、映画を見ました", "explanation": "Past tense polite form of 見る is 見ました." },
        { "scenario": "Ask if the weather will be clear tomorrow.", "prompt": "明日の天気が晴れるか聞きたいです。何と言いますか。", "expectedResponse": "明日は晴れますか", "explanation": "Asking about future state/weather using the verb 晴れる." },
        { "scenario": "State that it will probably rain tomorrow.", "prompt": "明日雨が降るだろうと言いたいです。何と言いますか。", "expectedResponse": "明日は雨が降るでしょう", "explanation": "〜でしょう expresses a high probability or conjecture." },
        { "scenario": "Ask someone if they have an older sister.", "prompt": "お姉さんがいるか聞きたいです。何と言いますか。", "expectedResponse": "お姉さんはいらっしゃいますか", "explanation": "Or 'お姉さんがいますか' for standard N5 conversational use." },
        { "scenario": "State that you have two older sisters.", "prompt": "「I have two older sisters.」は何と言いますか。", "expectedResponse": "姉が二人います", "explanation": "Subject + が + Counter + います." },
        { "scenario": "Ask a restaurant waiter for a menu.", "prompt": "レストランでメニューが欲しいです。何と言いますか。", "expectedResponse": "メニューをください", "explanation": "Noun + をください is the default request for an item." },
        { "scenario": "Order a hamburger and a juice at a fast food counter.", "prompt": "ハンバーグとジュースを注文します。何と言いますか。", "expectedResponse": "ハンバーグとジュースをお願いします", "explanation": "Using と to link items + をお願いします to order." },
        { "scenario": "Remark to someone that the room is cold.", "prompt": "部屋が寒いと感じました。何と言いますか。", "expectedResponse": "部屋が寒いですね", "explanation": "Seeking agreement about a physical sensation using ね." },
        { "scenario": "Ask someone to turn off the air conditioner.", "prompt": "エアコンを消してほしいです。何と言いますか。", "expectedResponse": "エアコンを消してください", "explanation": "Te-form of 消す (to turn off) + ください." },
        { "scenario": "Ask a friend where they bought those shoes.", "prompt": "友達の靴が素敵です。どこで買ったか聞きます。何と言いますか。", "expectedResponse": "その靴はどこで買いましたか", "explanation": "Location of action marker で + question word どこ." },
        { "scenario": "Tell someone you bought an item at a department store.", "prompt": "デパートで買ったことを伝えます。何と言いますか。", "expectedResponse": "デパートで買いました", "explanation": "Location + で + action verb in past tense." },
        { "scenario": "Ask for permission to open the window.", "prompt": "窓を開けてもいいか確認します。何と言いますか。", "expectedResponse": "窓を開けてもいいですか", "explanation": "Te-form + もいいですか asks for permission." },
        { "scenario": "Ask if it is okay to take a photograph here.", "prompt": "ここで写真を撮りたいです。何と聞きますか。", "expectedResponse": "ここで写真を撮ってもいいですか", "explanation": "Te-form of 撮る (撮って) + もいいですか." },
        { "scenario": "Tell someone firmly but politely that they must not enter a room.", "prompt": "「You must not enter here.」は何と言いますか。", "expectedResponse": "ここに入ってはいけません", "explanation": "Te-form + はいけません indicates strong prohibition." },
        { "scenario": "Ask a station agent how much it costs to get to Tokyo.", "prompt": "東京までの値段を知りたいです。何と聞きますか。", "expectedResponse": "東京までいくらですか", "explanation": "Destination + まで + いくらですか (How much to...?)." },
        { "scenario": "Ask what time the train arrives.", "prompt": "電車が何時に着くか知りたいです。何と聞きますか。", "expectedResponse": "電車は何時に着きますか", "explanation": "Time question word 何時 + particle に + verb." },
        { "scenario": "Tell your colleague you will head home around 6:00 PM today.", "prompt": "六時ごろ帰る予定を伝えます。何と言いますか。", "expectedResponse": "六時ごろ帰ります", "explanation": "Time + ごろ (around) + verb." },
        { "scenario": "State that your hobby is reading books.", "prompt": "自分の趣味が読書（どくしょ）であることを伝えます。何と言いますか。", "expectedResponse": "私の趣味は本を読むことです", "explanation": "Verb dictionary form + こと nominalizes the action into a hobby." },
        { "scenario": "Ask someone what kind of music they listen to.", "prompt": "相手が好きな音楽のタイプを聞きます。何と言いますか。", "expectedResponse": "どんな音楽を聞きますか", "explanation": "どんな (What kind of) + Noun + verb." },
        { "scenario": "State that you love classical music.", "prompt": "クラシック音楽が大好きなことを伝えます。何と言いますか。", "expectedResponse": "クラシック音楽が大好きです", "explanation": "Noun + が大好きです implies high affection/preference." },
        { "scenario": "Ask a foreign acquaintance if they speak English.", "prompt": "英語が話せるか確認します。何と聞きますか。", "expectedResponse": "英語が話せますか", "explanation": "Potential form of 話す (話せる) + ますか." },
        { "scenario": "Tell a native speaker that you can speak a little Japanese.", "prompt": "「I can speak a little Japanese.」は何と言いますか。", "expectedResponse": "日本語が少し話せます", "explanation": "Object particle が + potential verb + adverb 少し." },
        { "scenario": "Tell someone your father is a medical doctor.", "prompt": "自分の父が医者であることを伝えます。何と言いますか。", "expectedResponse": "父は医者です決", "explanation": "Using the humble word '父' when discussing your own father to outsiders." },
        { "scenario": "Tell someone your mother is a high school teacher.", "prompt": "自分の母が先生であることを伝えます。何と言いますか。", "expectedResponse": "母は先生です", "explanation": "Using the humble word '母' when discussing your own mother." },
        { "scenario": "Ask a passerby where the bank is located.", "prompt": "銀行の場所がわかりません。何と聞きますか。", "expectedResponse": "すみません、銀行はどこですか", "explanation": "Polite introduction with すみません followed by location query." },
        { "scenario": "Ask if there is a convenience store near here.", "prompt": "この近くにコンビニがあるか聞きます。何と言いますか。", "expectedResponse": "この近くにコンビニがありますか", "explanation": "Location + に + Noun + がありますか (Does a noun exist in this location?)." },
        { "scenario": "Tell a host that you do not eat meat.", "prompt": "肉を食べないことを伝えます。何と言いますか。", "expectedResponse": "私は肉を食べません", "explanation": "Direct negative statement of habit/preference." },
        { "scenario": "Ask a clothing clerk if they have a larger size.", "prompt": "服が小さいです。大きいサイズがあるか何と聞きますか。", "expectedResponse": "もう少し大きいのはありますか", "explanation": "もう少し (A little more) + comparative adjective construction." },
        { "scenario": "Ask a store clerk to see a different color of a bag.", "prompt": "違う色のカバンが見たいです。何と言いますか。", "expectedResponse": "他の色はありますか", "explanation": "他の色 (Other colors) + はありますか." },
        { "scenario": "Exclaim to a classmate that the exam was easy.", "prompt": "テストが簡単だったと伝えます。何と言いますか。", "expectedResponse": "テストは簡単でしたね", "explanation": "Past tense of a na-adjective uses でした." },
        { "scenario": "Tell a friend that a movie wasn't interesting at all.", "prompt": "映画が全然面白くなかったことを伝えます。何と言いますか。", "expectedResponse": "全然面白くなかったです", "explanation": "全然 requires a negative modifier past construction (〜くなかった)." },
        { "scenario": "Tell a sick friend or colleague to take care of themselves.", "prompt": "病気の友達に何と言いますか。", "expectedResponse": "お大事に", "explanation": "The idiom meaning 'Please take care / Get well soon'." },
        { "scenario": "Congratulate a friend on their birthday.", "prompt": "友達の誕生日です。何と言いますか。", "expectedResponse": "お誕生日おめでとうございます", "explanation": "The standard greeting meaning 'Happy Birthday'." },
        { "scenario": "Greet someone politely at the start of a New Year.", "prompt": "新年の挨拶（あいさつ）は何と言いますか。", "expectedResponse": "あけましておめでとうございます", "explanation": "The universal phrase used to say 'Happy New Year'." },
        { "scenario": "Ask someone to write down their name on a document.", "prompt": "ここに名前を書いてほしいです。何と言いますか。", "expectedResponse": "ここに名前を書いてください", "explanation": "Location + に + Object + を書いてください." },
        { "scenario": "Ask a group of students to listen carefully to an announcement.", "prompt": "「Please listen carefully.」は何と言いますか。", "expectedResponse": "よく聞いてください", "explanation": "Adverb よく (well/carefully) + 聞いてください." },
        { "scenario": "Tell a caller that you are in the middle of doing homework now.", "prompt": "今宿題をしている最中（さいちゅう）だと伝えます。何と言いますか。", "expectedResponse": "今、宿題をしています", "explanation": "Present continuous or active progressive state." },
        { "scenario": "Ask a guest what they would like to eat.", "prompt": "何が食べたいか相手に聞きます。何と言いますか。", "expectedResponse": "何が食べたいですか", "explanation": "Question word + が食べたいですか (What do you want to eat?)." },
        { "scenario": "Express a strong craving to eat sushi right now.", "prompt": "お寿司が食べたい気分です。何と言いますか。", "expectedResponse": "お寿司が食べたいです", "explanation": "Desire marker たい preceded by particle が or を." },
        { "scenario": "Ask an acquaintance where they currently reside.", "prompt": "住んでいる場所を聞きます。何と言いますか。", "expectedResponse": "どこに住んでいますか", "explanation": "Asking about a sustained state of living using 〜ています." },
        { "scenario": "State clearly that you currently live in Tokyo.", "prompt": "東京に住んでいることを伝えます。何と言いますか。", "expectedResponse": "東京に住んでいます", "explanation": "Location + に住んでいます marks continuous residence." },
        { "scenario": "Ask if anyone is currently inside the classroom.", "prompt": "教室に誰かいるか確認します。何と言いますか。", "expectedResponse": "教室に誰かいますか", "explanation": "誰か (someone) + いますか for animate existence." },
        { "scenario": "State that there is completely nobody left in the room.", "prompt": "部屋に誰もいないことを言いたいです。何と言いますか。", "expectedResponse": "部屋に誰もいません", "explanation": "誰も + negative verb implies an absolute absence of people." },
        { "scenario": "Ask if there is any food remaining inside the container.", "prompt": "箱の中に何か食べ物があるか聞きます。何と言いますか。", "expectedResponse": "箱の中に何かありますか", "explanation": "何か (something) + ありますか for inanimate objects." },
        { "scenario": "State that there is nothing left inside the briefcase.", "prompt": "カバンの中が空（から）です。何と言いますか。", "expectedResponse": "中には何もありません", "explanation": "何も + negative verb equals 'nothing'." },
        { "scenario": "Ask a classmate politely if you can borrow a writing utensil.", "prompt": "ペンを借りたいです。何と言いますか。", "expectedResponse": "ペンを貸してください", "explanation": "Asking the other person to lend (貸す) an item." },
        { "scenario": "Hand over a token of gratitude and say 'Please accept this'.", "prompt": "お土産を渡す時、何と言いますか。", "expectedResponse": "これ、どうぞ", "explanation": "A natural everyday phrase used when transferring gifts or items." },
        { "scenario": "State clearly that you prefer dogs over cats.", "prompt": "猫より犬が好きだと言いたいです。何と言いますか。", "expectedResponse": "猫より犬のほうが好きです", "explanation": "A より B のほうが好きです targets a preference comparison." },
        { "scenario": "Ask whether a train or a bus is faster to the location.", "prompt": "電車とバス、どちらが早いか聞きます。何と言いますか。", "expectedResponse": "電車とバスとどちらが早いですか", "explanation": "Standard comparison syntax format for two nominal variables." },
        { "scenario": "State definitively that the train is faster.", "prompt": "電車のほうが早いことを伝えます。何と言いますか。", "expectedResponse": "電車のほうが早いです", "explanation": "Choosing one variable as the dominant attribute using のほうが." },
        { "scenario": "Ask someone what they believe is the most famous city in Japan.", "prompt": "日本で一番有名な町を尋ねます。何と言いますか。", "expectedResponse": "日本でどこが一番有名ですか", "explanation": "Category selection using 一番 (the most)." },
        { "scenario": "State as a general fact that Tokyo is the biggest city.", "prompt": "東京が一番大きいと伝えます。何と言いますか。", "expectedResponse": "東京が一番つ大きいです", "explanation": "Subject marker が + category peak descriptor 一番." },
        { "scenario": "Ask someone politely to speak up because you cannot hear.", "prompt": "大きな声で話してほしいです。何と言いますか。", "expectedResponse": "大きな声で話してください", "explanation": "Means/Manner marker で + core verb request." },
        { "scenario": "Tell your teammate that you are extremely busy this week.", "prompt": "今週忙しいスケジュールであることを伝えます。何と言いますか。", "expectedResponse": "今週はとても忙しいです", "explanation": "Topic particle は + intensive adverb とても." },
        { "scenario": "Tell a friend you are completely free next Sunday.", "prompt": "来週の日曜日は暇であることを伝えます。何と言いますか。", "expectedResponse": "来週の日曜日は暇です", "explanation": "Time modification connecting nouns using の." },
        { "scenario": "Ask a colleague what time they typically wake up in the morning.", "prompt": "毎朝起きる時間を尋ねます。何と言いますか。", "expectedResponse": "毎朝、何時に起きますか", "explanation": "Habitual aspect tracked using active present verb tense." },
        { "scenario": "State that you wake up at exactly 7:00 AM every morning.", "prompt": "毎日七時に起きる習慣を伝えます。何と言いますか。", "expectedResponse": "毎日七時に起きます", "explanation": "Specific numeric points in time demand particle に." },
        { "scenario": "Ask a classmate what time they typically go to sleep at night.", "prompt": "夜寝る時間を聞きます。何と言いますか。", "expectedResponse": "毎晩、何時に寝ますか", "explanation": "毎晩 (Every night) shifts tracking to nocturnal routines." },
        { "scenario": "State that you turn off the lights and sleep at 11:00 PM.", "prompt": "十一時に寝ることを伝えます。何と言いますか。", "expectedResponse": "十一時に寝ます", "explanation": "Polite present form reflects daily structural patterns." },
        { "scenario": "Ask a new friend how many people are in their family household.", "prompt": "家族の人数を聞きたいです。何と聞きますか。", "expectedResponse": "何人家族ですか", "explanation": "Or '家族は何人ですか' is an exceptionally common way to count family." },
        { "scenario": "State clearly that there are four people in your family.", "prompt": "「There are four people in my family.」は何と言いますか。", "expectedResponse": "四人家族です", "explanation": "Or '家族は四人です'. Declares counting variables." },
        { "scenario": "Ask for the check at the table of a restaurant.", "prompt": "お勘定（かんじょう）をお願いします。何と言いますか。", "expectedResponse": "お会計をお願いします", "explanation": "Signals transaction wrap up to wait staff." },
        { "scenario": "Ask an international student if they enjoy playing sports.", "prompt": "スポーツが好きか尋ねます。何と言いますか。", "expectedResponse": "スポーツが好きですか", "explanation": "Simplest alignment format for standard preference profiling." },
        { "scenario": "Admit to a teammate that you are quite bad at soccer.", "prompt": "サッカーが苦手であることを伝えます。何と言いますか。", "expectedResponse": "サッカーが下手です", "explanation": "Noun + が下手です admits personal performance deficiency." },
        { "scenario": "State confidently that you are quite proficient at tennis.", "prompt": "テニスが得意であることを伝えます。何と言いますか。", "expectedResponse": "テニスが上手です", "explanation": "Noun + が上手です signals relative proficiency." },
        { "scenario": "Tell a group that you have traveled to Japan once before.", "prompt": "日本に行った経験（けいけん）を伝えます。何と言いますか。", "expectedResponse": "日本に行ったことがあります", "explanation": "Verb past plain form + ことがあります registers past experiences." },
        { "scenario": "Ask a friend if they have ever attempted to eat natto.", "prompt": "納豆を食べたことがあるか聞きます。何と言いますか。", "expectedResponse": "納豆を食べたことがありますか", "explanation": "Experiential format converted directly into an interrogative query." },
        { "scenario": "Ask a traveler politely to show you their official passport.", "prompt": "パスポートを見せてほしいです。何と言いますか。", "expectedResponse": "パスポートを見せてください", "explanation": "Transitive verb compound request parsing via text." },
        { "scenario": "Ask an officer what time the local library opens.", "prompt": "図書館が開く時間を聞きます。何と言いますか。", "expectedResponse": "図書館は何時に開きますか", "explanation": "Intransitive automation format parsing using 開く." },
        { "scenario": "State that the storefront opens at exactly 9:00 AM.", "prompt": "九時に開くことを伝えます。何と言いますか。", "expectedResponse": "九時に開きます", "explanation": "Polite form matching standard routine outputs." },
        { "scenario": "Ask a classmate when the long school vacation begins.", "prompt": "休みがいつから始まるか聞きます。何と言いますか。", "expectedResponse": "休みはいつから始まりますか", "explanation": "Interrogative frame linking origin via から." },
        { "scenario": "State that the vacation starts from next week onwards.", "prompt": "来週から始まることを伝えます。何と言いますか。", "expectedResponse": "来週から始まります", "explanation": "Time indicator + から + verb aspect." },
        { "scenario": "Ask a store owner until what time they remain open.", "prompt": "何時まで営業（えいぎょう）しているか聞きます。何と言いますか。", "expectedResponse": "何時までですか", "explanation": "The cleanest colloquial phrasing to track operations deadlines." },
        { "scenario": "State that operations continue until exactly 8:00 PM.", "prompt": "八時まで開いていることを伝えます。何と言いますか。", "expectedResponse": "八時までです", "explanation": "Terminal marker まで limits scope directly." },
        { "scenario": "Ask a neighbor how many cars their family owns.", "prompt": "車を何台持っているか聞きます。何と言いますか。", "expectedResponse": "車が何台ありますか", "explanation": "Counter variable for machinery/vehicles is 台." },
        { "scenario": "State clearly that you possess two vehicles.", "prompt": "「I have two cars.」は何と言いますか。", "expectedResponse": "車が二台あります", "explanation": "Machine variable parsing structure using numerical tracking." },
        { "scenario": "Ask a friend how many bound books they purchased.", "prompt": "本を何冊買ったか聞きます。何と言いますか。", "expectedResponse": "本を何冊買いましたか", "explanation": "Counter variable for bound objects like volumes or books is 冊." },
        { "scenario": "State clearly that you purchased three books.", "prompt": "本を三冊買ったことを伝えます。何と言いますか。", "expectedResponse": "本を三冊買いました", "explanation": "Placing counters naturally after direct objects." },
        { "scenario": "Ask a printer assistant how many thin sheets of paper are needed.", "prompt": "紙が何枚必要か聞きます。何と言いますか。", "expectedResponse": "紙が何枚いりますか", "explanation": "Counter variable for flat, thin matrices or sheets is 枚." },
        { "scenario": "State clearly that you require one sheet of paper.", "prompt": "一枚必要なことを伝えます。何と言いますか。", "expectedResponse": "一枚ください", "explanation": "Simplest imperative layout used at fulfillment counters." },
        { "scenario": "Ask your companion if they are feeling cold.", "prompt": "相手が寒いか確認します。何と言いますか。", "expectedResponse": "寒いですか", "explanation": "Direct inquiry checking adjective states." },
        { "scenario": "Remark to someone that it has dynamically become warm recently.", "prompt": "最近暖かくなったと感じました。何と言いますか。", "expectedResponse": "暖かくなりましたね", "explanation": "Tracking qualitative changes using 〜くなる formatting." },
        { "scenario": "Ask a classmate politely to close the classroom door.", "prompt": "ドアを閉めてほしいです。何と言いますか。", "expectedResponse": "ドアを閉めてください", "explanation": "Te-form request using transitive verb 閉める." },
        { "scenario": "Ask a family member to turn on the television.", "prompt": "テレビをつけてほしいです。何と言いますか。", "expectedResponse": "テレビをつけてください", "explanation": "Te-form request using activation verb つける." },
        { "scenario": "Ask a restaurant host if it is permissible to smoke at the table.", "prompt": "たばこを吸ってもいいか確認します。何と言いますか。", "expectedResponse": "たばこを吸ってもいいですか", "explanation": "Te-form permission request syntax engine." },
        { "scenario": "Inform a customer politely that smoking is forbidden here.", "prompt": "禁煙（きんえん）であることを伝えます。何と言いますか。", "expectedResponse": "ここは禁煙です", "explanation": "Using explicit nouns like 禁煙 to mark prohibition directly." },
        { "scenario": "Tell someone you intend to clean up the room after eating.", "prompt": "ご飯を食べた後で掃除すると言いたいです。何と言いますか。", "expectedResponse": "食べた後で掃除します", "explanation": "Past tense verb + 後で outlines sequential processing." },
        { "scenario": "State that you always brush your teeth prior to sleeping.", "prompt": "寝る前に歯を磨く習慣を伝えます。何と言いますか。", "expectedResponse": "寝る前に歯を磨きます", "explanation": "Dictionary verb + 前に captures structural ordering." },
        { "scenario": "Ask a friend if they have already completed their homework tracking.", "prompt": "宿題がもう終わったか確認します。何と言いますか。", "expectedResponse": "もう宿題は終わりましたか", "explanation": "Adverb もう prompts verification of state completion." },
        { "scenario": "Tell your group that you have not eaten any lunch yet.", "prompt": "まだ食べていない状況を伝えます。何と言いますか。", "expectedResponse": "まだ食べていません", "explanation": "Adverb まだ requires standard continuous negative inflection." },
        { "scenario": "Call a friend and ask where they are located right now.", "prompt": "相手の現在地を聞きます。何と言いますか。", "expectedResponse": "今、どこにいますか", "explanation": "Locational targeting query focusing on animate entities." },
        { "scenario": "Tell your waiting friend that you are at the station platform now.", "prompt": "駅に到着したことを伝えます。何と言いますか。", "expectedResponse": "今、駅にいます", "explanation": "Animate location syntax referencing positional tracking." },
        { "scenario": "Ask your group whose stray umbrella this belongs to.", "prompt": "傘の持ち主を探します。何と言いますか。", "expectedResponse": "これは誰の傘ですか", "explanation": "Possessive interrogative structure mapping properties." },
        { "scenario": "Confirm to someone that the item belongs to you.", "prompt": "自分の物であることを伝えます。何と言いますか。", "expectedResponse": "私のです", "explanation": "Possessive pronoun parsing minimizing noun repetition." },
        { "scenario": "Ask a tour bystander politely to take a photograph of you.", "prompt": "写真を撮ってほしいと頼みます。何と言いますか。", "expectedResponse": "写真を撮ってください", "explanation": "Standard helper module invocation using plain request verbs." },
        { "scenario": "Express sincere warmth that you had a wonderful time today.", "prompt": "別れ際に、楽しかった気持ちを伝えます。何と言いますか。", "expectedResponse": "とても楽しかったです", "explanation": "Past inflection of conversational emotive parameters." },
        { "scenario": "You want to tell someone your birthday is on May 5th.", "prompt": "「私の誕生日は五月五日です」と言いたいです。何と言いますか。", "expectedResponse": "誕生日は五月五日です", "explanation": "Stating '[Date]です' is the default template for birthdays." },
        { "scenario": "Ask a friend if they have already eaten breakfast.", "prompt": "友達に朝ご飯をもう食べたか聞きます。何と言いますか。", "expectedResponse": "朝ご飯、もう食べた？", "explanation": "Casual past tense version of 'もう食べましたか'." },
        { "scenario": "Tell your teacher you have a bad headache today.", "prompt": "頭が痛いことを先生に伝えます。何と言いますか。", "expectedResponse": "今日、頭が痛いです", "explanation": "Using the i-adjective 痛い (itai) for physical pain." },
        { "scenario": "Tell your coworker you are going to the post office now.", "prompt": "郵便局（ゆうびんきょく）に行くことを伝えます。何と言いますか。", "expectedResponse": "今から郵便局に行きます", "explanation": "今から (From now) + Destination + に行きます." },
        { "scenario": "Ask a friend what time they usually eat dinner.", "prompt": "友達に晩ご飯の時間を聞きます。何と言いますか。", "expectedResponse": "いつも何時に晩ご飯を食べる？", "explanation": "Casual variant tracking routine habits directly." },
        { "scenario": "State that you normally eat dinner at 7:30 PM.", "prompt": "七時半に晩ご飯を食べることを伝えます。何と言いますか。", "expectedResponse": "七時半に晩ご飯を食べます", "explanation": "Specific time coordinates use the target particle に." },
        { "scenario": "Ask a new neighbor if they keep any pets.", "prompt": "ペットを飼っているか聞きたいです。何と言いますか。", "expectedResponse": "ペットを飼っていますか", "explanation": "Verb 飼う (to raise/keep a pet) in the continuous state layout." },
        { "scenario": "State that you own one very small dog.", "prompt": "犬を一匹（いっぴき）飼っていることを伝えます。何と言いますか。", "expectedResponse": "犬を一匹飼っています", "explanation": "Counter variable for small animals is 匹 (hiki)." },
        { "scenario": "Ask a station guard what time the last train leaves.", "prompt": "最後の電車（終電）の時間を聞きます。何と言いますか。", "expectedResponse": "最後の電車は何時ですか", "explanation": "Clean and practical configuration for late-night commuters." },
        { "scenario": "State that the next express train departs at 3:15.", "prompt": "三時十五分に出発することを伝えます。何と言いますか。", "expectedResponse": "三時十五分に出発します", "explanation": "Time variables + に + automatic verbal output modules." },
        { "scenario": "Ask a classmate where they plan to go for winter vacation.", "prompt": "冬休みの予定を尋ねます。何と言いますか。", "expectedResponse": "冬休みはどこへ行きますか", "explanation": "Topic (冬休みは) + question destination phrase." },
        { "scenario": "Tell your friend you intend to visit Kyoto during vacation.", "prompt": "京都に行く予定を伝えます。何と言いますか。", "expectedResponse": "京都に行くつもりです", "explanation": "Dictionary verb + つもりです frames clear internal intentions." },
        { "scenario": "Ask your teacher to write a difficult Kanji on the board.", "prompt": "漢字を書いてほしいと頼みます。何と言いますか。", "expectedResponse": "漢字を書いてください", "explanation": "Te-form request formatting targeted at an action." },
        { "scenario": "Ask a classmate to read a specific sentence aloud.", "prompt": "文を読んでほしいです。何と言いますか。", "expectedResponse": "ここを読んでください", "explanation": "Te-form request using the structural action verb 読む." },
        { "scenario": "Ask the instructor if the vocabulary test is scheduled for tomorrow.", "prompt": "テストが明日か確認します。何と言いますか。", "expectedResponse": "テストは明日ですか", "explanation": "Simplest alignment engine checking future facts." },
        { "scenario": "Confirm to your peer that the test is indeed tomorrow.", "prompt": "「テストは明日だよ」と教えます。何と言いますか。", "expectedResponse": "はい、明日ですよ", "explanation": "Using よ at the tail end to assert a confirmed fact firmly." },
        { "scenario": "Ask a store assistant if this clear liquid is water or sake.", "prompt": "水かお酒か確かめたいです。何と言いますか。", "expectedResponse": "これは水ですか、お酒ですか", "explanation": "Alternative question layout structuring double variables." },
        { "scenario": "Tell your host politely that you absolutely do not drink alcohol.", "prompt": "お酒を飲まない習慣を伝えます。何と言いますか。", "expectedResponse": "私はお酒を飲みません", "explanation": "Definitive custom state declaration avoiding potential confusion." },
        { "scenario": "Ask a friend if they want to play a video game together.", "prompt": "ゲームに誘います。何と言いますか。", "expectedResponse": "一緒にゲームをしませんか", "explanation": "Polite invitation using negative present verb inflections." },
        { "scenario": "Accept a game invitation by saying 'Let's do it!'.", "prompt": "誘いを受けます。「Let's do it!」は何と言いますか。", "expectedResponse": "やりましょう", "explanation": "Volitional shift transforming intentions into instant mutual action." },
        { "scenario": "Ask a clerk if they sell English newspapers at this location.", "prompt": "英語の新聞があるか店員に聞きます。何と言いますか。", "expectedResponse": "英語の新聞はありますか", "explanation": "Noun phrase checking retail item existence maps." },
        { "scenario": "Ask a colleague if the restaurant food was expensive.", "prompt": "料理が高かったか聞きます。何と言いますか。", "expectedResponse": "料理は高かったですか", "explanation": "Past tense check of an i-adjective parameter." },
        { "scenario": "Respond that the restaurant bill was extremely cheap.", "prompt": "安かったことを伝えます。何と言いますか。", "expectedResponse": "とても安かったです", "explanation": "Past positive state output of an i-adjective configuration." },
        { "scenario": "Ask a passerby where the closest bus stop is.", "prompt": "バス停（ばすてい）の場所を聞きます。何と言いますか。", "expectedResponse": "バス停はどこですか", "explanation": "Locational targeting query focusing on inanimate transit nodes." },
        { "scenario": "Ask a friend how long they waited at the platform.", "prompt": "どのくらい待ったか友達に聞きます。何と言いますか。", "expectedResponse": "どのくらい待ちましたか", "explanation": "Duration question word tracking past completed actions." },
        { "scenario": "State that you waited at the gate for roughly twenty minutes.", "prompt": "二十分待ったことを伝えます。何と言いますか。", "expectedResponse": "二十分くらい待ちました", "explanation": "Duration tracking using approximation parameters like くらい." },
        { "scenario": "Ask if it is permissible to park a bicycle here.", "prompt": "自転車を置いてもいいか聞きます。何と言いますか。", "expectedResponse": "ここに自転車を置いてもいいですか", "explanation": "Te-form validation pattern targeting spatial permission flags." },
        { "scenario": "Tell someone politely that parking a bicycle here is prohibited.", "prompt": "「You cannot put your bicycle here.」は何と言いますか。", "expectedResponse": "ここに自転車を置いてはいけません", "explanation": "Prohibition structure handling safety layout overrides." },
        { "scenario": "Ask a friend if they want to walk to the park together.", "prompt": "公園へ歩いて行くか友達を誘います。何と言いますか。", "expectedResponse": "一緒に公園へ歩いて行きませんか", "explanation": "Means (歩いて) + Destination (公園へ) + Invitation verb mapping." },
        { "scenario": "Decline a walking invitation because your legs are tired.", "prompt": "足が疲れて歩けないことを伝えて断ります。何と言いますか。", "expectedResponse": "足が疲れたからちょっと", "explanation": "Indirect refusal using reasoning causal flags (からちょっと...)." },
        { "scenario": "Ask a clerk if a specific product was made in Japan.", "prompt": "日本製品（にほんせいひん）か確かめます。何と言いますか。", "expectedResponse": "これは日本の物ですか", "explanation": "Possession alignment validating product heritage markers." },
        { "scenario": "Ask your sibling to turn off the noisy television.", "prompt": "テレビを消してほしいです。何と言いますか。", "expectedResponse": "テレビを消してください", "explanation": "Te-form imperative sequence targeting audio dampening." },
        { "scenario": "Ask your parent to turn up the volume of the radio.", "prompt": "音を大きくしてほしいです。何と言いますか。", "expectedResponse": "音を大きくしてください", "explanation": "Adverbial modifier shift (大きく) combined with request verbs." },
        { "scenario": "Tell your teacher you forgot your textbook at home.", "prompt": "教科書を忘れた報告をします。何と言いますか。", "expectedResponse": "教科書を家に忘れました", "explanation": "Location + に + Action verb in past plain execution." },
        { "scenario": "Ask a coworker if they have an extra pen you could use.", "prompt": "ペンをもう一本持っているか聞きます。何と言いますか。", "expectedResponse": "ペンをもう一本持っていますか", "explanation": "Tracking counter variables for long cylinders using 本 (hon)." },
        { "scenario": "Tell your host that the room is a little too hot.", "prompt": "部屋が暑いことをアピールします。何と言いますか。", "expectedResponse": "部屋が少し暑いです", "explanation": "Adverbial quantitative down-scaler 少し combined with adjectives." },
        { "scenario": "Ask someone to open the window to let air inside.", "prompt": "窓を開けてほしいと頼みます。何と言いますか。", "expectedResponse": "窓を開けてください", "explanation": "Te-form structural query driving physical adjustments." },
        { "scenario": "Ask a native speaker how to read a specific complex Kanji.", "prompt": "漢字の読み方を聞きたいです。何と言いますか。", "expectedResponse": "この漢字はどう読みますか", "explanation": "Manner question formatting (どう) applied directly to verbs." },
        { "scenario": "Thank your teacher gracefully after a helpful lesson context.", "prompt": "授業の終わりに先生に何と言いますか。", "expectedResponse": "ありがとうございました", "explanation": "Past tense variant thanking someone for an ongoing past effort." },
        { "scenario": "Ask your companion what kind of movies they generally watch.", "prompt": "好きな映画のジャンルを聞きます。何と言いますか。", "expectedResponse": "どんな映画を見ますか", "explanation": "Open inquiry classifying entertainment preferences profiles." },
        { "scenario": "State clearly that you only watch animated movies.", "prompt": "アニメしか見ないことを伝えます。何と言いますか。", "expectedResponse": "アニメしか見ません", "explanation": "Exclusive variable targeting using しか paired with negative inflections." },
        { "scenario": "Ask a doctor how many times a day you must take this pill.", "prompt": "薬を飲む回数を聞きます。何と言いますか。", "expectedResponse": "一日に何回飲みますか", "explanation": "Frequency calculation template format standard for clinics." },
        { "scenario": "State that you have to take the medicine twice a day.", "prompt": "一日二回飲むルールを伝えます。何と言いますか。", "expectedResponse": "一日に二回降ります（飲みます）", "explanation": "※修正します。CorrectResponse: 一日に二回飲みます。Frequency tracking metrics notation." },
        { "scenario": "State that you have to take the medicine twice a day.", "prompt": "一日二回飲むルールを伝えます。何と言いますか。", "expectedResponse": "一日に二回飲みます", "explanation": "Frequency tracking metrics notation." },
        { "scenario": "Ask a friend if they want to study at the library on Saturday.", "prompt": "土曜日に図書館で勉強しようと誘います。何と言いますか。", "expectedResponse": "土曜日に図書館で勉強しませんか", "explanation": "Time + Location + Active joint invitation phrasing matrix." },
        { "scenario": "Accept a study invitation by saying 'Yes, let's study!'.", "prompt": "勉強の誘いに賛成します。何と言いますか。", "expectedResponse": "はい、勉強しましょう", "explanation": "Volitional alignment confirming scheduling profile acceptance." },
        { "scenario": "Ask a retail associate where the shoe department is located.", "prompt": "靴売り場の場所を聞きます。何と言いますか。", "expectedResponse": "靴はどこにありますか", "explanation": "Existence targeting query managing retail path routing." },
        { "scenario": "Ask if it is permissible to take a look inside a closed box.", "prompt": "中を見てもいいか許可（きょか）を取ります。何と言いますか。", "expectedResponse": "中を見てもいいですか", "explanation": "Te-form permission logic looking inside structures." },
        { "scenario": "Tell someone that you intend to purchase these shoes.", "prompt": "その靴を買う意思を伝えます。何と言いますか。", "expectedResponse": "この靴を買います", "explanation": "Present affirmative verb parsing declarative purchase goals." },
        { "scenario": "Ask a traveler if their trip to Kyoto was fun.", "prompt": "京都旅行が楽しかったか聞きます。何と言いますか。", "expectedResponse": "京都の旅行は楽しかったですか", "explanation": "Past state verification of emotive parameters." },
        { "scenario": "Respond that your vacation trip was incredibly fun.", "prompt": "旅行がとても楽しかったと答えます。何と言いますか。", "expectedResponse": "とても楽しかったです", "explanation": "Past positive conjugation of core descriptive adjectives." },
        { "scenario": "Ask a passerby what name this specific street has.", "prompt": "道の名前を知りたいです。何と言いますか。", "expectedResponse": "この道は何という道ですか", "explanation": "Naming validation query tracking geographical data points." },
        { "scenario": "Ask a security guard if the museum is currently open.", "prompt": "美術館が開いているか聞きます。何と言いますか。", "expectedResponse": "美術館は開いていますか", "explanation": "State condition query using continuous tracking formats." },
        { "scenario": "State that the venue is currently closed for holidays today.", "prompt": "今日は休みであることを伝えます。何と言いますか。", "expectedResponse": "今日は休みです", "explanation": "Direct factual tracking mapping operation states." },
        { "scenario": "Ask your parent to wake you up at 6:30 tomorrow morning.", "prompt": "朝六時半に起こしてほしいです。何と言いますか。", "expectedResponse": "明日、六時半に起こしてください", "explanation": "Te-form request using the causative trigger verb 起こす." },
        { "scenario": "State that you have exactly three younger brothers.", "prompt": "弟が三人いることを言いたいです。何と言いますか。", "expectedResponse": "弟が三人います", "explanation": "Placing counters naturally for relational family members." },
        { "scenario": "Ask a child how old they are this year.", "prompt": "子供に年齢（ねんれい）を聞きます。何と言いますか。", "expectedResponse": "何歳ですか", "explanation": "Standard developmental variable tracking standard for kids." },
        { "scenario": "Ask a retail worker if this jacket is available in black.", "prompt": "黒い色のジャケットがあるか聞きます。何と言いますか。", "expectedResponse": "黒いのはありますか", "explanation": "Using Nominalizer の to abstract object variables via color traits." },
        { "scenario": "Tell a store clerk 'Please show me that black one'.", "prompt": "黒いジャケットを見せてほしいです。何と言いますか。", "expectedResponse": "黒いのを見せてください", "explanation": "Te-form request routing visual inspections of inventory." },
        { "scenario": "Ask a colleague if they have already finished cleaning the room.", "prompt": "掃除がもう終わったか聞きます。何と言いますか。", "expectedResponse": "掃除はもう終わりましたか", "explanation": "Completed action checks targeting physical operations." },
        { "scenario": "State that you have not cleaned up the area yet.", "prompt": "掃除がまだ終わっていないと伝えます。何と言いますか。", "expectedResponse": "いいえ、まだ終わっていません", "explanation": "Continuous negative processing verifying incomplete workloads." },
        { "scenario": "Ask a friend if they have a personal computer at home.", "prompt": "パソコンを持っているか聞きます。何と言いますか。", "expectedResponse": "パソコンがありますか", "explanation": "Or 'パソコンを持っていますか' to look up equipment markers." },
        { "scenario": "State that you do not own any personal computer.", "prompt": "パソコンを持っていないことを伝えます。何と言いますか。", "expectedResponse": "パソコンはありません", "explanation": "Negative existential layout confirming zero inventory stats." },
        { "scenario": "Ask a companion if they want to share an umbrella due to rain.", "prompt": "一緒に傘に入るか誘います。何と言いますか。", "expectedResponse": "一緒に傘に入りませんか", "explanation": "Joint protection invitation mapping active weather shifts." },
        { "scenario": "Accept an umbrella share offer by saying 'Thank you, please!'.", "prompt": "傘の誘いを受けます。何と言いますか。", "expectedResponse": "ありがとうございます、お願いします", "explanation": "Gratitude + request triggers locking in relational assistance." },
        { "scenario": "Ask a classmate what subject they enjoy studying most.", "prompt": "一番好きな科目を尋ねます。何と言いますか。", "expectedResponse": "どの科目が一番好きですか", "explanation": "Interrogative selecting options via extreme ranking indicators." },
        { "scenario": "State that math is your absolute favorite subject field.", "prompt": "数学（すうがく）が一番好きなことを伝えます。何と言いますか。", "expectedResponse": "数学が一番好きです", "explanation": "Preference tracking profiles declaring peak variables directly." },
        { "scenario": "Ask a delivery driver to leave the package in front of the door.", "prompt": "荷物をドアの前に置いてほしいです。何と言いますか。", "expectedResponse": "ドアの前に置いてください", "explanation": "Spatial instructions mapped via positional relative terms." },
        { "scenario": "Ask a teacher politely if you can leave the classroom early.", "prompt": "早く帰ってもいいか先生に許可を求めます。何と言いますか。", "expectedResponse": "早く帰ってもいいですか", "explanation": "Te-form validation pattern looking for exit sequence access." },
        { "scenario": "Tell a friend that you plan to cook dinner yourself tonight.", "prompt": "自分で晩ご飯を作る予定を伝えます。何と言いますか。", "expectedResponse": "今日、自分で晩ご飯を作ります", "explanation": "Reflexive tracking (自分で) indicating unassisted execution." },
        { "scenario": "Ask a diner companion if this traditional food tastes spicy to them.", "prompt": "料理が辛い（からい）か相手に聞きます。何と言いますか。", "expectedResponse": "この料理は辛いですか", "explanation": "Direct adjective verification standard for sensory checks." },
        { "scenario": "State that the soup tastes completely mild and not spicy at all.", "prompt": "全然辛くない状況を伝えます。何と言いますか。", "expectedResponse": "全然辛くないです", "explanation": "Absolute dampening using 全然 paired with negative inflections." },
        { "scenario": "Ask a child if they have washed their hands before eating.", "prompt": "手を洗ったか確認します。何と言いますか。", "expectedResponse": "手を洗いましたか", "explanation": "Hygiene compliance check processing past completions." },
        { "scenario": "Tell someone that you feel incredibly sleepy right now.", "prompt": "眠い（ねむい）コンディションを伝えます。何と言いますか。", "expectedResponse": "今、とても眠いです", "explanation": "Subjective state reporting mapping system energy drops." },
        { "scenario": "Suggest to your coworker 'Let's go to sleep early tonight'.", "prompt": "早く寝ようと提案（ていあん）します。何と言いますか。", "expectedResponse": "早く寝ましょう", "explanation": "Volitional optimization targeting healthy pattern resets." },
        { "scenario": "Ask a companion if they have already viewed this animation film.", "prompt": "アニメを見たことがあるか聞きます。何と言いますか。", "expectedResponse": "このアニメを見たことがありますか", "explanation": "Experiential parsing algorithm looking for duplicate views." },
        { "scenario": "Respond that you have never seen this specific file before.", "prompt": "一度も見ていない経験を伝えます。何と言いますか。", "expectedResponse": "一度も見たことがありません", "explanation": "Negative experiential track blocking asset familiarity metrics." },
        { "scenario": "Ask an officer if taking pictures of this monument is okay.", "prompt": "写真を撮る許可を確かめます。何と言いますか。", "expectedResponse": "写真を撮ってもいいですか", "explanation": "Standard tracking permissions logic guarding visual spaces." },
        { "scenario": "Tell a customer politely that photography is completely banned here.", "prompt": "「You cannot take pictures here.」は何と言いますか。", "expectedResponse": "写真を撮ってはいけません", "explanation": "Strong restriction logic intercepting incoming hardware triggers." },
        { "scenario": "Ask your classmate to lend you a notebook for a moment.", "prompt": "ノートを貸してほしいと頼みます。何と言いますか。", "expectedResponse": "ノートを貸してください", "explanation": "Lending requests targeting target materials from peers." },
        { "scenario": "Tell your teammate that you intend to clean your room on Sunday.", "prompt": "日曜日に部屋を片付ける計画を伝えます。何と言いますか。", "expectedResponse": "日曜日に部屋を掃除します", "explanation": "Time variables framing future household operation scheduling." },
        { "scenario": "Ask a store associate if they sell maps of the local town.", "prompt": "町の地図（ちず）があるか店員に聞きます。何と言いますか。", "expectedResponse": "町の地図はありますか", "explanation": "Inventory lookup query locating navigation accessories." },
        { "scenario": "Ask your parent where they placed your clean socks.", "prompt": "靴下の場所を聞きます。何と言いますか。", "expectedResponse": "靴下はどこにありますか", "explanation": "Existence targeting query running situational lookup routines." },
        { "scenario": "State that you found your misplaced keys inside your jacket pocket.", "prompt": "鍵があった場所を報告します。何と言いますか。", "expectedResponse": "ポケットの中にありました", "explanation": "Past positive existential outputs registering location discovery." },
        { "scenario": "Ask a coworker what time they generally finish working.", "prompt": "仕事が終わる時間を聞きます。何と言いますか。", "expectedResponse": "何時に仕事が終わりますか", "explanation": "Operations tracking queries parsing shift duration scopes." },
        { "scenario": "State that your shift terminates at exactly 6:00 PM daily.", "prompt": "六時に仕事が終わるスケジュールを伝えます。何と言いますか。", "expectedResponse": "六時に仕事が終わります", "explanation": "Standard temporal routine output declaration using に." },
        { "scenario": "Ask your companion 'Are you feeling hot right now?'.", "prompt": "相手が暑いかどうか確認します。何と言いますか。", "expectedResponse": "暑いですか", "explanation": "Sensory calibration query checking local climate factors." },
        { "scenario": "Remark that the local climate has dynamically become cold lately.", "prompt": "最近寒くなったことを共有します。何と言いますか。", "expectedResponse": "寒くなりましたね", "explanation": "Shared environmental tracking capturing weather delta drops." },
        { "scenario": "Ask a student to write down their home address on the sheet.", "prompt": "住所（じゅうしょ）を書いてほしいです。何と言いますか。", "expectedResponse": "住所を書いてください", "explanation": "Standard input request capturing identity profile parameters." },
        { "scenario": "Ask a visitor politely to have a seat on the comfortable sofa.", "prompt": "「Please take a seat.」は何と言いますか。", "expectedResponse": "座ってください", "explanation": "Or 'どうぞお掛けください' but '座ってください' is the standard N5 target." },
        { "scenario": "Ask a security guard if the front gate locks automatically at night.", "prompt": "門（もん）が閉まるか聞きます。何と言いますか。", "expectedResponse": "門は何時に閉まりますか", "explanation": "Tracking asset state operational barriers using time checks." },
        { "scenario": "State clearly that you have precisely two younger sisters.", "prompt": "妹が二人いることを伝えます。何と言いますか。", "expectedResponse": "妹が二人います", "explanation": "Placing counters systematically after objects to denote family stats." },
        { "scenario": "Ask a friend if they have any plans or obligations tomorrow.", "prompt": "明日の用事（ようじ）を聞きます。何と言いますか。", "expectedResponse": "明日、用事がありますか", "explanation": "Conceptual existence layout testing schedule commitments." },
        { "scenario": "State that you are completely free and have no plans tomorrow.", "prompt": "明日、用事がない状況を伝えます。何と言いますか。", "expectedResponse": "明日は何も用事がありません", "explanation": "Negative existential template wiping clean tracking parameters." },
        { "scenario": "Ask a retail vendor how much this specific souvenir costs.", "prompt": "お土産の値段を聞きます。何と言いますか。", "expectedResponse": "これはいくらですか", "explanation": "Core transactional interface command querying retail value." },
        { "scenario": "Tell your companion 'Let's take a taxi because it's raining'.", "prompt": "タクシーに乗る提案をします。何と言いますか。", "expectedResponse": "タクシーに乗りましょう", "explanation": "Volitional vehicle transportation integration pattern via に乗る." },
        { "scenario": "Ask a friend if they are completely free this coming weekend.", "prompt": "週末のスケジュール状況を確かめます。何と言いますか。", "expectedResponse": "今週の週末は暇ですか", "explanation": "Adjective evaluation tracking availability properties cleanly." },
        { "scenario": "Exclaim happily that your language test results were perfect.", "prompt": "テストがよかったことを報告します。何と言いますか。", "expectedResponse": "テストはよかったです", "explanation": "Conjugating positive past variables indicating successful runs." },
        { "scenario": "Ask your teammate what time they intend to reach the site.", "prompt": "到着する予定時刻（じこく）を聞きます。何と言いますか。", "expectedResponse": "何時に着きますか", "explanation": "Arrival prediction tracing utilizing default temporal frameworks." },
        { "scenario": "Say goodbye to your close friends by saying 'See you next week!'.", "prompt": "別れ際に友達に「See you next week!」と言いたいです。何と言いますか。", "expectedResponse": "また来週", "explanation": "Clean short-circuit temporal idiom signaling near-future reconnection." }
    ],

    // 8. Cloze Passages (Text Grammar)
    cloze_passages: [
        { "passage": "私はきのう、デパート [ ___ ] 行きました。", "correctAnswer": "へ", "distractors": ["で", "を", "が"], "explanation": "The particle へ (or に) is used to mark the destination with motion verbs like 行く (to go)." },
        { "passage": "毎朝、パン [ ___ ] 食べます。", "correctAnswer": "を", "distractors": ["が", "に", "で"], "explanation": "The particle を marks the direct object of an action verb like 食べる (to eat)." },
        { "passage": "つくえの [ ___ ] にペンがあります。", "correctAnswer": "上", "distractors": ["中", "前", "右"], "explanation": "上 (うえ - top/above). Pens are typically on top of a desk." },
        { "passage": "私は図書館 [ ___ ] 本を読みます。", "correctAnswer": "で", "distractors": ["に", "へ", "を"], "explanation": "The particle で indicates the location where an action takes place." },
        { "passage": "あそこに猫 [ ___ ] います。", "correctAnswer": "が", "distractors": ["を", "で", "は"], "explanation": "The particle が is used with います/あります to mark the subject that exists." },
        { "passage": "きのうはとても [ ___ ] です。", "correctAnswer": "寒かった", "distractors": ["寒い", "寒くなかった", "寒いくない"], "explanation": "きのう (yesterday) requires the past tense of an i-adjective: 寒かった." },
        { "passage": "田中さんは [ ___ ] 人ですか。", "correctAnswer": "どんな", "distractors": ["どれ", "どこ", "どうして"], "explanation": "どんな means 'what kind of' and is used to ask for a description of a noun (人)." },
        { "passage": "日曜日 [ ___ ] 月曜日は休みです。", "correctAnswer": "と", "distractors": ["や", "に", "を"], "explanation": "The particle と is used to connect nouns in a complete list (Sunday AND Monday)." },
        { "passage": "箱の中にりんご [ ___ ] みかんなどがあります。", "correctAnswer": "や", "distractors": ["と", "か", "も"], "explanation": "The particle や is used for an incomplete list (apples, tangerines, etc.)." },
        { "passage": "このかばんは [ ___ ] のですか。", "correctAnswer": "だれ", "distractors": ["どこ", "いつ", "なに"], "explanation": "だれの means 'whose'. It asks about possession." },
        { "passage": "A: 「このペンは田中さんのですか。」\nB: 「いいえ、私 [ ___ ] です。」", "correctAnswer": "の", "distractors": ["も", "が", "は"], "explanation": "私の acts as a possessive pronoun meaning 'mine'." },
        { "passage": "私は日本語 [ ___ ] わかります。", "correctAnswer": "が", "distractors": ["を", "に", "で"], "explanation": "The verb わかる (to understand) takes the particle が for its object." },
        { "passage": "スポーツの中でサッカーが [ ___ ] 好きです。", "correctAnswer": "一番", "distractors": ["たくさん", "とても", "よく"], "explanation": "一番 (いちばん) means 'number one' or 'the most', used when selecting the top choice from a category." },
        { "passage": "このくつは少し [ ___ ] です。", "correctAnswer": "大きい", "distractors": ["大きくない", "大きかった", "大きいくない"], "explanation": "The sentence is in the present affirmative, describing the shoes right now." },
        { "passage": "きょうは雨が [ ___ ] います。", "correctAnswer": "降って", "distractors": ["降り", "降る", "降らない"], "explanation": "The te-form (降って) + います describes a current, ongoing action (it is raining)." },
        { "passage": "A: 「一緒に映画を見に行きませんか。」\nB: 「はい、[ ___ ]。」", "correctAnswer": "行きましょう", "distractors": ["行きますか", "行きません", "行ってください"], "explanation": "行きましょう (let's go) is the natural enthusiastic response to an invitation." },
        { "passage": "ここは図書館ですから、[ ___ ] ください。", "correctAnswer": "静かにして", "distractors": ["静かして", "静かだ", "静かです"], "explanation": "静かにする (to be quiet) in the te-form + ください makes a polite request." },
        { "passage": "テストがありますから、あしたは [ ___ ] 勉強します。", "correctAnswer": "たくさん", "distractors": ["あまり", "少し", "全然"], "explanation": "Because there is a test, the logical action is to study 'a lot' (たくさん)." },
        { "passage": "えんぴつ [ ___ ] 書いてください。", "correctAnswer": "で", "distractors": ["に", "を", "が"], "explanation": "The particle で indicates the means or tool used for an action (with a pencil)." },
        { "passage": "私の家から駅 [ ___ ] バスで10分かかります。", "correctAnswer": "まで", "distractors": ["から", "に", "へ"], "explanation": "まで means 'until' or 'as far as'. から (from) ... まで (to)." },
        { "passage": "A: 「もう昼ごはんを食べましたか。」\nB: 「いいえ、[ ___ ] です。」", "correctAnswer": "まだ", "distractors": ["もう", "すぐ", "あとで"], "explanation": "まだ means 'not yet' when answering a question with もう (already)." },
        { "passage": "カメラが欲しいですが、お金が [ ___ ]。", "correctAnswer": "ありません", "distractors": ["あります", "ありました", "ありませんでした"], "explanation": "The sentence uses 'ですが' (but), contrasting wanting a camera with the current negative state of having money." },
        { "passage": "この部屋は [ ___ ] きれいですね。", "correctAnswer": "広くて", "distractors": ["広い", "広いで", "広かった"], "explanation": "To connect an i-adjective (広い) to another adjective, drop 'い' and add 'くて'." },
        { "passage": "あしたは [ ___ ] いいですね。", "correctAnswer": "晴れると", "distractors": ["晴れて", "晴れます", "晴れたら"], "explanation": "〜といいですね expresses hope (I hope it clears up tomorrow)." },
        { "passage": "私は毎晩、音楽を [ ___ ] ながら勉強します。", "correctAnswer": "聞き", "distractors": ["聞く", "聞いて", "聞いた"], "explanation": "Verb stem (聞き) + ながら means doing two actions simultaneously (studying while listening)." },
        { "passage": "きのう、デパートへ服を [ ___ ] に行きました。", "correctAnswer": "買い", "distractors": ["買う", "買って", "買った"], "explanation": "Verb stem (買い) + に行く means 'to go in order to do something' (went to buy)." },
        { "passage": "このケーキはおいしい [ ___ ]、高いです。", "correctAnswer": "ですが", "distractors": ["だから", "から", "で"], "explanation": "ですが (but) connects two contrasting ideas (delicious but expensive)." },
        { "passage": "あした、雨が [ ___ ] 学校へ行きません。", "correctAnswer": "降ったら", "distractors": ["降って", "降ると", "降るから"], "explanation": "〜たら is a conditional form (If it rains tomorrow, I won't go)." },
        { "passage": "A: 「コーヒー、もう一杯いかがですか。」\nB: 「いいえ、[ ___ ]。」", "correctAnswer": "けっこうです", "distractors": ["いただきます", "お願いします", "ちがいます"], "explanation": "けっこうです is a polite way to decline an offer (No, thank you)." },
        { "passage": "すみません、その辞書を [ ___ ] ください。", "correctAnswer": "見せて", "distractors": ["見て", "見ないで", "見ます"], "explanation": "見せて (te-form of 見せる - to show) + ください means 'Please show me'." },
        { "passage": "きのうのテストは全然 [ ___ ]。", "correctAnswer": "難しくなかったです", "distractors": ["難しかったです", "難しいです", "難しくないです"], "explanation": "全然 (not at all) requires a negative ending, and きのう requires past tense." },
        { "passage": "あの人は [ ___ ] ないで、ずっと寝ています。", "correctAnswer": "食べ", "distractors": ["食べる", "食べて", "食べた"], "explanation": "Nai-form (食べない) + で means doing an action without doing another (sleeping without eating)." },
        { "passage": "私の趣味は写真を [ ___ ] ことです。", "correctAnswer": "撮る", "distractors": ["撮り", "撮って", "撮った"], "explanation": "Dictionary form (撮る) + こと nominalizes the verb (the act of taking pictures)." },
        { "passage": "A: 「山田さんはどこですか。」\nB: 「あそこで本を [ ___ ] 人です。」", "correctAnswer": "読んでいる", "distractors": ["読むの", "読みます", "読んだ"], "explanation": "Te-form + いる modifies a noun, describing a current ongoing state (the person who is reading)." },
        { "passage": "日本へ [ ___ ] 前に、日本語を勉強しました。", "correctAnswer": "来る", "distractors": ["来た", "来て", "来ない"], "explanation": "Dictionary form (来る) + 前に means 'before doing [action]'." },
        { "passage": "手を [ ___ ] から、ご飯を食べます。", "correctAnswer": "洗って", "distractors": ["洗う", "洗った", "洗い"], "explanation": "Te-form (洗って) + から means 'after doing [action]'." },
        { "passage": "私は日本料理を [ ___ ] ことがあります。", "correctAnswer": "作った", "distractors": ["作る", "作って", "作り"], "explanation": "Ta-form (作った) + ことがあります expresses a past experience (I have made)." },
        { "passage": "この部屋に入って [ ___ ]。", "correctAnswer": "はいけません", "distractors": ["もいいです", "から", "ください"], "explanation": "Te-form + はいけません expresses prohibition (You must not enter)." },
        { "passage": "ここに車を [ ___ ] もいいですか。", "correctAnswer": "止めて", "distractors": ["止める", "止めた", "止めない"], "explanation": "Te-form (止めて) + もいいですか asks for permission (May I park?)." },
        { "passage": "あしたは休みだから、早く [ ___ ] もいいです。", "correctAnswer": "起きなくて", "distractors": ["起きない", "起きて", "起きた"], "explanation": "Nai-form (drop い) + くてもいいです means 'you don't have to do [action]'." },
        { "passage": "頭が痛いです [ ___ ] 、学校を休みます。", "correctAnswer": "から", "distractors": ["でも", "が", "と"], "explanation": "から indicates a reason (Because my head hurts, I will rest)." },
        { "passage": "A: 「それは何ですか。」\nB: 「これは私が [ ___ ] ケーキです。」", "correctAnswer": "作った", "distractors": ["作る", "作って", "作り"], "explanation": "Ta-form modifies the noun 'cake' to mean 'the cake that I made'." },
        { "passage": "山田さんはギターを [ ___ ] ことができます。", "correctAnswer": "弾く", "distractors": ["弾いて", "弾き", "弾いた"], "explanation": "Dictionary form (弾く) + ことができます expresses potential/ability." },
        { "passage": "日本は中国 [ ___ ] 小さいです。", "correctAnswer": "より", "distractors": ["から", "まで", "ほど"], "explanation": "より is used for comparison (Japan is smaller than China)." },
        { "passage": "バスと電車と、[ ___ ] が早いですか。", "correctAnswer": "どちら", "distractors": ["どれ", "どこ", "だれ"], "explanation": "どちら is used to ask 'which one' between two options." },
        { "passage": "私は [ ___ ] どこへも行きませんでした。", "correctAnswer": "きのう", "distractors": ["あした", "きょう", "あさって"], "explanation": "The past negative tense (行きませんでした) requires a past time word like きのう (yesterday)." },
        { "passage": "A: 「だれか来ましたか。」\nB: 「いいえ、[ ___ ] 来ませんでした。」", "correctAnswer": "だれも", "distractors": ["だれか", "だれが", "だれを"], "explanation": "Question word + も + negative verb means 'nobody / nowhere / nothing'." },
        { "passage": "このりんごは三つ [ ___ ] 500円です。", "correctAnswer": "で", "distractors": ["に", "を", "が"], "explanation": "で is used after a quantity to indicate a group/total price (for three)." },
        { "passage": "あしたは [ ___ ] なるでしょう。", "correctAnswer": "寒く", "distractors": ["寒い", "寒くて", "寒かった"], "explanation": "To connect an i-adjective to なる (to become), drop 'い' and add 'く'." },
        { "passage": "私は将来、医者 [ ___ ] なりたいです。", "correctAnswer": "に", "distractors": ["で", "を", "が"], "explanation": "Nouns and na-adjectives take に when connecting to なる (to become)." },
        { "passage": "駅の前に新しいホテル [ ___ ] できました。", "correctAnswer": "が", "distractors": ["を", "に", "で"], "explanation": "できる (to be built/made) is an intransitive verb and takes the subject particle が." },
        { "passage": "A: 「このペンを使ってもいいですか。」\nB: 「はい、[ ___ ]。」", "correctAnswer": "どうぞ", "distractors": ["どうも", "どうして", "どういたしまして"], "explanation": "どうぞ is used to offer or grant permission politely (Go ahead / Here you go)." },
        { "passage": "きょうは [ ___ ] 疲れたので、早く寝ます。", "correctAnswer": "とても", "distractors": ["あまり", "全然", "少しも"], "explanation": "とても (very) is an affirmative adverb used with positive verbs/adjectives." },
        { "passage": "私は毎日 [ ___ ] 11時に寝ます。", "correctAnswer": "だいたい", "distractors": ["たくさん", "もっと", "一番"], "explanation": "だいたい means 'about' or 'mostly', often used with time (around 11)." },
        { "passage": "この漢字は [ ___ ] 読みますか。", "correctAnswer": "どう", "distractors": ["何", "どこ", "だれ"], "explanation": "どう (how) is used to ask the method or manner of doing an action." },
        { "passage": "A: 「コーヒーを飲みますか。」\nB: 「いいえ、私は [ ___ ] 飲みません。」", "correctAnswer": "あまり", "distractors": ["よく", "いつも", "たくさん"], "explanation": "あまり + negative means 'not very much / not often'." },
        { "passage": "佐藤さんは中国語が [ ___ ] わかりません。", "correctAnswer": "全然", "distractors": ["少し", "だいたい", "とても"], "explanation": "全然 (not at all) must be paired with a negative verb." },
        { "passage": "A: 「夏休みはどこへ行きますか。」\nB: 「[ ___ ] へも行きません。」", "correctAnswer": "どこ", "distractors": ["だれ", "いつ", "なに"], "explanation": "どこへも + negative means 'nowhere'." },
        { "passage": "木村さんは [ ___ ] も元気ですね。", "correctAnswer": "いつも", "distractors": ["まだ", "もう", "あとで"], "explanation": "いつも (always) fits the context of being energetic all the time." },
        { "passage": "私 [ ___ ] お酒を飲みます。", "correctAnswer": "も", "distractors": ["を", "に", "へ"], "explanation": "も (also / too) replaces は/が to indicate inclusion (I also drink alcohol)." },
        { "passage": "山田さんは歌 [ ___ ] 上手です。", "correctAnswer": "が", "distractors": ["を", "で", "に"], "explanation": "上手 (good at) takes the particle が for the skill." },
        { "passage": "私は犬より猫 [ ___ ] 好きです。", "correctAnswer": "のほうが", "distractors": ["で", "から", "まで"], "explanation": "In comparisons, AよりBのほうが好きです means 'I like B more than A'." },
        { "passage": "1週間に一回 [ ___ ] スーパーへ行きます。", "correctAnswer": "ぐらい", "distractors": ["など", "しか", "まで"], "explanation": "ぐらい (about / approximately) is used with amounts or frequency." },
        { "passage": "財布の中に百円 [ ___ ] ありません。", "correctAnswer": "しか", "distractors": ["だけ", "も", "で"], "explanation": "しか must be paired with a negative verb, meaning 'only' (nothing but 100 yen)." },
        { "passage": "この部屋は [ ___ ] 静かじゃありません。", "correctAnswer": "あまり", "distractors": ["とても", "たくさん", "よく"], "explanation": "あまり + negative (じゃありません) means 'not very' (not very quiet)." },
        { "passage": "きのうは雨が [ ___ ]。", "correctAnswer": "降りました", "distractors": ["降ります", "降って", "降る"], "explanation": "きのう (yesterday) requires the past formal verb: 降りました." },
        { "passage": "A: 「あしたは暇ですか。」\nB: 「いいえ、[ ___ ] です。」", "correctAnswer": "忙しい", "distractors": ["暇", "静か", "元気"], "explanation": "Answering 'いいえ' to 'are you free?' logically requires 'busy' (忙しい)." },
        { "passage": "このかばんは [ ___ ] ですか。", "correctAnswer": "いくら", "distractors": ["いくつ", "いつ", "だれ"], "explanation": "いくら asks for the price (How much is it?)." },
        { "passage": "りんごを [ ___ ] 買いました。", "correctAnswer": "三つ", "distractors": ["三本", "三枚", "三台"], "explanation": "つ is the general counter for small, round, or irregular objects like apples." },
        { "passage": "かさを [ ___ ] いけませんよ。", "correctAnswer": "忘れては", "distractors": ["忘れても", "忘れないで", "忘れなくて"], "explanation": "Te-form + はいけません is a prohibition (You must not forget)." },
        { "passage": "窓を [ ___ ] もいいですか。", "correctAnswer": "開けて", "distractors": ["開ける", "開けない", "開けた"], "explanation": "Te-form + もいいですか asks for permission (May I open?)." },
        { "passage": "私は日本の音楽を [ ___ ] たいです。", "correctAnswer": "聞き", "distractors": ["聞く", "聞いて", "聞いた"], "explanation": "Verb stem + たいです expresses desire (I want to listen)." },
        { "passage": "先生は学生に「本を [ ___ ]」と言いました。", "correctAnswer": "読んでください", "distractors": ["読みます", "読みたい", "読みましょう"], "explanation": "A direct quote of an instruction naturally uses a request form: 読んでください." },
        { "passage": "私は毎朝、コーヒーを [ ___ ] 新聞を読みます。", "correctAnswer": "飲みながら", "distractors": ["飲んで", "飲む", "飲んだ"], "explanation": "Verb stem + ながら expresses doing two actions at once (while drinking)." },
        { "passage": "あしたは早く [ ___ ] なければなりません。", "correctAnswer": "起き", "distractors": ["起きる", "起きて", "起きた"], "explanation": "Nai-form base (起き) + なければなりません means 'must do' (must wake up)." },
        { "passage": "デパートへ靴を [ ___ ] に行きます。", "correctAnswer": "買い", "distractors": ["買う", "買って", "買った"], "explanation": "Verb stem + に行く means purpose of motion (go in order to buy)." },
        { "passage": "部屋が [ ___ ] なりましたね。", "correctAnswer": "きれいに", "distractors": ["きれいで", "きれいな", "きれいだ"], "explanation": "Na-adjectives add に before なる (to become clean/pretty)." },
        { "passage": "A: 「そのカメラ、新しいですね。」\nB: 「ええ、きのう [ ___ ] んです。」", "correctAnswer": "買った", "distractors": ["買う", "買って", "買わない"], "explanation": "Plain past form (買った) + んです explains a situation or provides a reason." },
        { "passage": "この町は静か [ ___ ]、便利です。", "correctAnswer": "で", "distractors": ["くて", "だ", "な"], "explanation": "Na-adjectives connect to other clauses using で (quiet and convenient)." },
        { "passage": "私はきのう、10時 [ ___ ] 寝ました。", "correctAnswer": "ごろ", "distractors": ["ぐらい", "しか", "など"], "explanation": "ごろ is used for an approximate point in time (around 10 o'clock)." },
        { "passage": "日本語の勉強は難しい [ ___ ]、おもしろいです。", "correctAnswer": "ですが", "distractors": ["だから", "から", "ので"], "explanation": "ですが connects contrasting ideas (difficult, but interesting)." },
        { "passage": "雨が降っていますから、タクシーで [ ___ ]。", "correctAnswer": "帰りましょう", "distractors": ["帰りますか", "帰る", "帰らない"], "explanation": "〜ましょう is a volitional proposal (let's go home by taxi)." },
        { "passage": "あそこに [ ___ ] 服を着ている人がいますね。", "correctAnswer": "赤い", "distractors": ["赤の", "赤く", "赤いで"], "explanation": "赤い is an i-adjective that directly modifies the noun 服 (red clothes)." },
        { "passage": "私は毎朝 [ ___ ] を浴びます。", "correctAnswer": "シャワー", "distractors": ["お風呂", "プール", "海"], "explanation": "The verb 浴びる (abiru) specifically pairs with シャワー (shower)." },
        { "passage": "先生、質問が [ ___ ] が、いいですか。", "correctAnswer": "あります", "distractors": ["います", "します", "なります"], "explanation": "あります is used for inanimate possession/existence (I have a question)." },
        { "passage": "私は車を [ ___ ] ことができません。", "correctAnswer": "運転する", "distractors": ["運転して", "運転し", "運転した"], "explanation": "Dictionary form (運転する) + ことができます indicates potential/ability." },
        { "passage": "田中さんの家は駅から [ ___ ] 便利です。", "correctAnswer": "近くて", "distractors": ["近い", "近いで", "近かった"], "explanation": "I-adjective te-form (近くて) connects adjectives (close and convenient)." },
        { "passage": "このスープは [ ___ ] すぎます。", "correctAnswer": "熱", "distractors": ["熱い", "熱く", "熱くて"], "explanation": "Verb/Adjective stem (drop い for adjectives) + すぎる means 'too much' (too hot)." },
        { "passage": "このクラスでだれが [ ___ ] 背が高いですか。", "correctAnswer": "一番", "distractors": ["よく", "とても", "たくさん"], "explanation": "一番 (most) is used when asking for the extreme in a category (who is the tallest)." },
        { "passage": "A: 「ごちそうさまでした。」\nB: 「[ ___ ]。」", "correctAnswer": "お粗末さまでした", "distractors": ["いただきます", "いってらっしゃい", "おかえりなさい"], "explanation": "お粗末さまでした (Osomatsusamadeshita) is the humble traditional reply to 'Gochisousamadeshita' (though 'いいえ' is also used)." },
        { "passage": "私は毎晩、日記を [ ___ ] から寝ます。", "correctAnswer": "書いて", "distractors": ["書く", "書いた", "書き"], "explanation": "Te-form (書いて) + から means 'after doing' (after writing)." },
        { "passage": "風邪を [ ___ ] ので、学校を休みました。", "correctAnswer": "ひいた", "distractors": ["ひく", "ひいて", "ひかない"], "explanation": "Past plain form (ひいた) + ので explains a past cause (because I caught a cold)." },
        { "passage": "きのう、山田さんに駅で [ ___ ]。", "correctAnswer": "会いました", "distractors": ["見ました", "行きました", "来ました"], "explanation": "The particle に before the blank points to the target of the verb 会う (met Yamada)." },
        { "passage": "A: 「この辞書を使ってもいいですか。」\nB: 「はい、[ ___ ]。」", "correctAnswer": "いいですよ", "distractors": ["だめです", "いけません", "ちがいます"], "explanation": "いいですよ grants permission cheerfully." },
        { "passage": "夏休みは [ ___ ] ありません。", "correctAnswer": "どこへも行き", "distractors": ["どこにも行き", "だれも来", "なにもし"], "explanation": "どこへも + 行きません translates to 'going nowhere'." },
        { "passage": "私はきのう、母に時計を [ ___ ]。", "correctAnswer": "もらいました", "distractors": ["あげました", "くれました", "かしました"], "explanation": "The speaker receives an action/item, marked by に (from mother), using もらう." },
        { "passage": "田中さんは私に本を [ ___ ]。", "correctAnswer": "くれました", "distractors": ["もらいました", "あげました", "かしました"], "explanation": "When someone gives something TO the speaker (私に), the verb is くれる." },
        { "passage": "きょうは [ ___ ] 涼しいですね。", "correctAnswer": "少し", "distractors": ["たくさん", "あまり", "全然"], "explanation": "少し (a little) is an affirmative adverb that fits the context of weather changing." },
        { "passage": "A: 「荷物を持ちましょうか。」\nB: 「はい、[ ___ ]。」", "correctAnswer": "お願いします", "distractors": ["ありがとう", "ごめんなさい", "けっこうです"], "explanation": "お願いします is the polite way to accept an offer of help." },
        { "passage": "電車の中で [ ___ ] は行けません。", "correctAnswer": "騒いで", "distractors": ["騒ぐ", "騒いだ", "騒ぎ"], "explanation": "Te-form (騒いで - make noise) + はいけません expresses a strong prohibition." },
        { "passage": "私は毎日、自転車 [ ___ ] 学校へ行きます。", "correctAnswer": "で", "distractors": ["に", "を", "が"], "explanation": "The particle で indicates the means of transportation (by bicycle)." },
        { "passage": "机の上に本 [ ___ ] 3冊あります。", "correctAnswer": "が", "distractors": ["を", "で", "は"], "explanation": "The particle が marks the subject of あります (existence/possession)." },
        { "passage": "一緒にコーヒー [ ___ ] 飲みませんか。", "correctAnswer": "を", "distractors": ["が", "に", "で"], "explanation": "The particle を marks the direct object of the verb 飲む (to drink)." },
        { "passage": "きのう、デパートでくつ [ ___ ] かばんを買いました。", "correctAnswer": "と", "distractors": ["や", "か", "に"], "explanation": "The particle と connects two nouns completely (shoes AND a bag)." },
        { "passage": "会議は午後3時 [ ___ ] 始まります。", "correctAnswer": "から", "distractors": ["まで", "に", "で"], "explanation": "The particle から means 'from', indicating the starting point of an event." },
        { "passage": "私は日曜日 [ ___ ] 図書館で勉強します。", "correctAnswer": "に", "distractors": ["で", "へ", "を"], "explanation": "The particle に is used for specific days of the week when an action occurs." },
        { "passage": "鈴木さんはピアノ [ ___ ] 上手です。", "correctAnswer": "が", "distractors": ["を", "で", "に"], "explanation": "The adjective 上手 (skilled at) requires the object to be marked with が." },
        { "passage": "箱の中に手紙 [ ___ ] 写真などがあります。", "correctAnswer": "や", "distractors": ["と", "か", "も"], "explanation": "The particle や connects an incomplete list, often paired with など (letters, photos, etc.)." },
        { "passage": "東京から京都 [ ___ ] 新幹線で2時間かかります。", "correctAnswer": "まで", "distractors": ["から", "に", "へ"], "explanation": "まで means 'until' or 'to', marking the endpoint of a distance." },
        { "passage": "この教室に [ ___ ] いません。", "correctAnswer": "だれも", "distractors": ["だれか", "なにも", "どこも"], "explanation": "Question word (だれ) + も + negative verb translates to 'nobody'." },
        { "passage": "私は野菜 [ ___ ] 食べません。", "correctAnswer": "しか", "distractors": ["だけ", "も", "を"], "explanation": "しか must be paired with a negative verb to mean 'only' (I eat nothing but vegetables)." },
        { "passage": "山田さんは今、部屋でテレビを [ ___ ] います。", "correctAnswer": "見て", "distractors": ["見", "見る", "見た"], "explanation": "Te-form (見て) + います indicates a currently ongoing action (is watching)." },
        { "passage": "ここでタバコを [ ___ ] はいけません。", "correctAnswer": "吸って", "distractors": ["吸う", "吸った", "吸い"], "explanation": "Te-form (吸って) + はいけません expresses a strict prohibition (you must not smoke)." },
        { "passage": "暑いですから、窓を開けて [ ___ ] いいですか。", "correctAnswer": "も", "distractors": ["は", "が", "を"], "explanation": "Te-form + もいいですか is the standard way to ask for permission (May I open?)." },
        { "passage": "あしたはテストですから、早く [ ___ ] なければなりません。", "correctAnswer": "起き", "distractors": ["起きる", "起きて", "起きた"], "explanation": "Nai-form base (起き) + なければなりません means 'must do' (must wake up)." },
        { "passage": "私は車の運転を [ ___ ] ことができます。", "correctAnswer": "する", "distractors": ["して", "し", "した"], "explanation": "Dictionary form (する) + ことができます expresses ability (can drive)." },
        { "passage": "日本へ [ ___ ] 前に、少し日本語を勉強しました。", "correctAnswer": "来る", "distractors": ["来た", "来て", "来ない"], "explanation": "Before an action, use Dictionary form (来る) + 前に." },
        { "passage": "ご飯を [ ___ ] あとで、薬を飲みます。", "correctAnswer": "食べた", "distractors": ["食べる", "食べて", "食べ"], "explanation": "After an action, use Ta-form (食べた) + あとで." },
        { "passage": "私は一度も外国へ [ ___ ] ことがありません。", "correctAnswer": "行った", "distractors": ["行く", "行って", "行かない"], "explanation": "Ta-form (行った) + ことがありません expresses lacking a past experience (have never gone)." },
        { "passage": "あした、雨が [ ___ ] 海へ行きません。", "correctAnswer": "降ったら", "distractors": ["降る", "降って", "降らない"], "explanation": "Ta-form + ら creates a conditional 'if' statement (If it rains, I won't go)." },
        { "passage": "A:「荷物を持ちましょうか。」 B:「はい、[ ___ ]。」", "correctAnswer": "お願いします", "distractors": ["ありがとう", "ごめんなさい", "けっこうです"], "explanation": "お願いします (please) is the polite way to accept an offer of help." },
        { "passage": "きのうの映画はとても [ ___ ]。", "correctAnswer": "おもしろかったです", "distractors": ["おもしろいです", "おもしろいでした", "おもしろくなかったです"], "explanation": "きのう (yesterday) requires the past tense of the i-adjective: おもしろかったです." },
        { "passage": "この部屋は [ ___ ] ありません。", "correctAnswer": "静かじゃ", "distractors": ["静かく", "静かくて", "静かな"], "explanation": "The negative of a na-adjective is [stem] + じゃありません (not quiet)." },
        { "passage": "この本は [ ___ ] 高いです。", "correctAnswer": "安くて", "distractors": ["安い", "安いで", "安かった"], "explanation": "To connect i-adjectives, drop 'い' and add 'くて' (cheap and expensive makes no sense normally, but grammatically 'くて' connects them. Let's assume it means 'cheap, and...')." },
        { "passage": "このりんごはとても [ ___ ] です。", "correctAnswer": "おいしい", "distractors": ["おいしくて", "おいしかった", "おいしくない"], "explanation": "とても (very) is followed by an affirmative present adjective here: おいしいです." },
        { "passage": "A:「あしたは日曜日ですね。」 B:「ええ。[ ___ ] 、どこかへ行きますか。」", "correctAnswer": "ところで", "distractors": ["だから", "でも", "そして"], "explanation": "ところで (by the way) is used to change the subject of the conversation." },
        { "passage": "私は毎朝、ニュースを [ ___ ] ながら朝ご飯を食べます。", "correctAnswer": "見", "distractors": ["見る", "見て", "見た"], "explanation": "Verb stem (見) + ながら means doing two actions simultaneously (eating while watching)." },
        { "passage": "私の趣味は音楽を [ ___ ] ことです。", "correctAnswer": "聞く", "distractors": ["聞き", "聞いて", "聞いた"], "explanation": "Dictionary form (聞く) + こと nominalizes the verb (the act of listening)." },
        { "passage": "あそこに [ ___ ] 人が田中さんです。", "correctAnswer": "立っている", "distractors": ["立つ", "立った", "立って"], "explanation": "Te-form + いる modifies the noun to describe a current state (the person who is standing)." },
        { "passage": "すみません、その本を [ ___ ] ください。", "correctAnswer": "貸して", "distractors": ["貸す", "貸した", "貸し"], "explanation": "Te-form (貸して) + ください is a polite request (Please lend me)." },
        { "passage": "テスト中は、友達と [ ___ ] はいけません。", "correctAnswer": "話して", "distractors": ["話す", "話した", "話し"], "explanation": "Te-form (話して) + はいけません indicates prohibition (must not talk)." },
        { "passage": "ここは病院ですから、[ ___ ] してください。", "correctAnswer": "静かに", "distractors": ["静か", "静かだ", "静かで"], "explanation": "Na-adjective stem (静か) + に + する means 'to make quiet / to be quiet'." },
        { "passage": "私は日本料理の作り方 [ ___ ] わかりません。", "correctAnswer": "が", "distractors": ["を", "に", "で"], "explanation": "The verb わかる (to understand/know) takes the particle が." },
        { "passage": "きのう、山田さんに駅 [ ___ ] 会いました。", "correctAnswer": "で", "distractors": ["に", "を", "へ"], "explanation": "The particle で indicates the location where the action of meeting happened." },
        { "passage": "このバスは東京駅 [ ___ ] 行きますか。", "correctAnswer": "へ", "distractors": ["を", "で", "が"], "explanation": "The particle へ marks the direction/destination with verbs like 行く." },
        { "passage": "私はコーヒー [ ___ ] 紅茶のほうが好きです。", "correctAnswer": "より", "distractors": ["から", "まで", "ほど"], "explanation": "A より B のほうが好きです means 'I like B more than A'." },
        { "passage": "りんごとみかんと [ ___ ] が好きですか。", "correctAnswer": "どちら", "distractors": ["どれ", "どこ", "だれ"], "explanation": "どちら (which one) is used when choosing between exactly two options." },
        { "passage": "このクラスでだれ [ ___ ] 一番背が高いですか。", "correctAnswer": "が", "distractors": ["は", "を", "で"], "explanation": "When the question word (だれ) is the subject, it must be marked with が." },
        { "passage": "私はきのう、何 [ ___ ] 食べませんでした。", "correctAnswer": "も", "distractors": ["が", "を", "か"], "explanation": "何 (what) + も + negative verb means 'nothing' (I ate nothing)." },
        { "passage": "日曜日、デパートへ服を [ ___ ] に行きます。", "correctAnswer": "買い", "distractors": ["買う", "買って", "買った"], "explanation": "Verb stem (買い) + に行く indicates the purpose of motion (go to buy)." },
        { "passage": "あしたはテストですから、今夜は [ ___ ] 勉強します。", "correctAnswer": "たくさん", "distractors": ["あまり", "少し", "全然"], "explanation": "Because there's a test, 'たくさん' (a lot) makes the most logical sense." },
        { "passage": "この靴は少し小さい [ ___ ]、別のを見せてください。", "correctAnswer": "ですから", "distractors": ["でも", "が", "と"], "explanation": "ですから (therefore / because it is) connects the reason to the request." },
        { "passage": "A: 「もう宿題をしましたか。」 B: 「いいえ、[ ___ ] です。」", "correctAnswer": "まだ", "distractors": ["もう", "すぐ", "あとで"], "explanation": "まだ (not yet) is the natural negative response to もう (already)." },
        { "passage": "このケーキは [ ___ ] 甘くないです。", "correctAnswer": "あまり", "distractors": ["とても", "たくさん", "よく"], "explanation": "あまり + negative means 'not very' (not very sweet)." },
        { "passage": "私は毎日、だいたい8時 [ ___ ] うちを出ます。", "correctAnswer": "ごろ", "distractors": ["ぐらい", "まで", "しか"], "explanation": "ごろ is used for an approximate point in time (around 8 o'clock)." },
        { "passage": "A: 「すみません、ペンを貸してください。」 B: 「はい、[ ___ ]。」", "correctAnswer": "どうぞ", "distractors": ["どうも", "どうして", "どういたしまして"], "explanation": "どうぞ is used to offer something politely (Here you go)." },
        { "passage": "この漢字の [ ___ ] がわかりません。", "correctAnswer": "読み方", "distractors": ["読む方", "読んで方", "読んだ方"], "explanation": "Verb stem (読み) + 方 (かた) means 'how to do' (how to read)." },
        { "passage": "部屋が [ ___ ] なりました。", "correctAnswer": "暗く", "distractors": ["暗い", "暗くて", "暗かった"], "explanation": "To connect an i-adjective to なる (to become), drop 'い' and add 'く'." },
        { "passage": "私は医者 [ ___ ] なりたいです。", "correctAnswer": "に", "distractors": ["で", "を", "が"], "explanation": "Nouns take the particle に before なる (to become a doctor)." },
        { "passage": "私は日本のアニメが [ ___ ]。", "correctAnswer": "好きです", "distractors": ["上手です", "分かります", "あります"], "explanation": "アニメ (anime) is logically paired with 好きです (like). が marks the object." },
        { "passage": "私の町は静か [ ___ ]、きれいです。", "correctAnswer": "で", "distractors": ["くて", "だ", "な"], "explanation": "Na-adjectives (静か) use で to connect to other descriptive clauses." },
        { "passage": "きのうはとても忙しかった [ ___ ]。", "correctAnswer": "です", "distractors": ["でした", "だ", "ます"], "explanation": "I-adjectives in the past tense (忙しかった) are followed simply by です for politeness, not でした." },
        { "passage": "お金がありませんから、カメラを [ ___ ] ことができません。", "correctAnswer": "買う", "distractors": ["買い", "買って", "買った"], "explanation": "Dictionary form (買う) + ことができません expresses inability (cannot buy)." },
        { "passage": "私は来年、日本へ行く [ ___ ] です。", "correctAnswer": "つもり", "distractors": ["こと", "もの", "ほう"], "explanation": "Dictionary form + つもりです expresses an intention or plan (plan to go)." },
        { "passage": "A: 「一緒に帰りましょう。」 B: 「すみません、私は [ ___ ] 帰ります。」", "correctAnswer": "あとで", "distractors": ["もう", "まだ", "すぐ"], "explanation": "あとで (later) makes sense when declining an offer to go home together right now." },
        { "passage": "この辞書は [ ___ ] 役に立ちます。", "correctAnswer": "とても", "distractors": ["あまり", "全然", "少しも"], "explanation": "とても (very) pairs with an affirmative verb (is very useful)." },
        { "passage": "A: 「お茶はいかがですか。」 B: 「いいえ、[ ___ ] です。」", "correctAnswer": "けっこう", "distractors": ["どうぞ", "だめ", "いけません"], "explanation": "けっこうです is a polite way to say 'No, thank you'." },
        { "passage": "この部屋には私 [ ___ ] いません。", "correctAnswer": "しか", "distractors": ["だけ", "も", "は"], "explanation": "しか + negative verb (いません) means 'only' (there is no one but me)." },
        { "passage": "私は毎朝、公園を [ ___ ] します。", "correctAnswer": "散歩", "distractors": ["勉強", "買い物", "電話"], "explanation": "公園を + 散歩します means 'take a walk through the park'. Particle を marks the path." },
        { "passage": "あしたは早く [ ___ ] てもいいですよ。", "correctAnswer": "帰っ", "distractors": ["帰り", "帰る", "帰らない"], "explanation": "Te-form (帰って) + もいいです grants permission (You may go home early)." },
        { "passage": "A: 「かさを持っていますか。」 B: 「いいえ、[ ___ ]。」", "correctAnswer": "持っていません", "distractors": ["持ちません", "持たせません", "持ちませんでした"], "explanation": "The negative of 持っています (currently possessing) is 持っていません." },
        { "passage": "田中さんはきのう、学校を [ ___ ]。", "correctAnswer": "休みました", "distractors": ["休んで", "休みます", "休む"], "explanation": "きのう (yesterday) requires the past formal tense (休みました)." },
        { "passage": "私はお酒を [ ___ ] 飲みません。", "correctAnswer": "全然", "distractors": ["少し", "いつも", "たくさん"], "explanation": "全然 (not at all) is strongly paired with negative verbs." },
        { "passage": "この店は安いです。 [ ___ ] 、おいしいです。", "correctAnswer": "そして", "distractors": ["でも", "だから", "しかし"], "explanation": "そして (and) connects two positive attributes (cheap and delicious)." },
        { "passage": "私は毎晩11時に [ ___ ]。", "correctAnswer": "寝ます", "distractors": ["寝て", "寝た", "寝る"], "explanation": "毎晩 (every night) indicates a habit, requiring the present formal tense (寝ます)." },
        { "passage": "あしたの天気は [ ___ ] でしょうか。", "correctAnswer": "どう", "distractors": ["何", "どれ", "だれ"], "explanation": "どう (how) is used to ask about the condition of something (How will the weather be?)." },
        { "passage": "あの人は [ ___ ] 有名じゃありません。", "correctAnswer": "あまり", "distractors": ["とても", "たくさん", "よく"], "explanation": "あまり + negative (じゃありません) means 'not very' (not very famous)." },
        { "passage": "このりんごは一つ100円ですから、三つ [ ___ ] 300円です。", "correctAnswer": "で", "distractors": ["に", "を", "が"], "explanation": "The particle で indicates the total amount or quantity (for three)." },
        { "passage": "A: 「このパソコンはだれのですか。」 B: 「学校の [ ___ ]。」", "correctAnswer": "です", "distractors": ["だ", "の", "ます"], "explanation": "の replaces the noun (パソコン) to mean 'the school's (computer)', followed by です." },
        { "passage": "A: 「あした一緒にテニスをしませんか。」 B: 「あしたはちょっと...。[ ___ ] お願いします。」", "correctAnswer": "また今度", "distractors": ["またあした", "またあとで", "またらいしゅう"], "explanation": "また今度 (mata kondo) is a polite, indirect way to decline an invitation ('maybe next time')." },
        { "passage": "私はお茶 [ ___ ] コーヒーのほうが好きです。", "correctAnswer": "より", "distractors": ["から", "まで", "ほど"], "explanation": "A より B のほうが好きです (I like B more than A)." },
        { "passage": "私 [ ___ ] 犬が好きです。", "correctAnswer": "も", "distractors": ["を", "に", "で"], "explanation": "も (also/too) replaces は/が to indicate inclusion (I also like dogs)." },
        { "passage": "この漢字は [ ___ ] 書きますか。", "correctAnswer": "どう", "distractors": ["何", "どこ", "だれ"], "explanation": "どう (how) is used to ask about the method (How do you write this Kanji?)." },
        { "passage": "私は毎日、日本語を1時間 [ ___ ] 勉強します。", "correctAnswer": "ぐらい", "distractors": ["ごろ", "しか", "まで"], "explanation": "ぐらい is used for an approximate amount/duration (about 1 hour)." },
        { "passage": "山田さんは [ ___ ] も元気です。", "correctAnswer": "いつも", "distractors": ["まだ", "もう", "あとで"], "explanation": "いつも (always) fits the affirmative present state (always energetic)." },
        { "passage": "きのう、私は友達 [ ___ ] 映画を見ました。", "correctAnswer": "と", "distractors": ["や", "か", "に"], "explanation": "The particle と means 'with' when referring to a companion." },
        { "passage": "机の上にえんぴつ [ ___ ] あります。", "correctAnswer": "が", "distractors": ["を", "で", "に"], "explanation": "The particle が marks the subject of あります (exist/have)." },
        { "passage": "A: 「それは何ですか。」 B: 「[ ___ ] は私の辞書です。」", "correctAnswer": "これ", "distractors": ["それ", "あれ", "どれ"], "explanation": "If person A says 'それ' (that near you), person B replies with 'これ' (this near me)." },
        { "passage": "あしたは [ ___ ] 早く起きなければなりません。", "correctAnswer": "もっと", "distractors": ["いつも", "たくさん", "よく"], "explanation": "もっと (more) fits with early (must wake up *more* early / earlier)." },
        { "passage": "私は先生 [ ___ ] 本をもらいました。", "correctAnswer": "に", "distractors": ["を", "で", "が"], "explanation": "The particle に (or から) marks the giver when using もらう (to receive)." },
        { "passage": "田中さんは私にカバンを [ ___ ]。", "correctAnswer": "くれました", "distractors": ["もらいました", "あげました", "かしました"], "explanation": "When someone gives something TO the speaker, the verb is くれる." },
        { "passage": "部屋に誰も [ ___ ]。", "correctAnswer": "いません", "distractors": ["あります", "ありません", "います"], "explanation": "誰も (nobody) requires a negative animate verb (いません)." },
        { "passage": "A: 「あしたの天気はどうですか。」 B: 「たぶん [ ___ ] でしょう。」", "correctAnswer": "晴れる", "distractors": ["晴れて", "晴れます", "晴れた"], "explanation": "たぶん (probably) pairs with plain form + でしょう (will probably be sunny)." },
        { "passage": "この料理は [ ___ ] 辛くないです。", "correctAnswer": "全然", "distractors": ["とても", "たくさん", "よく"], "explanation": "全然 (not at all) pairs perfectly with the negative 辛くないです." },
        { "passage": "私は毎晩、歯を [ ___ ] から寝ます。", "correctAnswer": "磨いて", "distractors": ["磨く", "磨いた", "磨き"], "explanation": "Te-form (磨いて) + から means 'after doing' (after brushing)." },
        { "passage": "窓を [ ___ ] ないでください。", "correctAnswer": "開け", "distractors": ["開ける", "開けて", "開けた"], "explanation": "Nai-form base (開け) + ないでください makes a polite negative request." },
        { "passage": "A: 「もうご飯を食べましたか。」 B: 「はい、[ ___ ] 食べました。」", "correctAnswer": "もう", "distractors": ["まだ", "すぐ", "あとで"], "explanation": "もう (already) confirms the completed action." },
        { "passage": "田中さんは [ ___ ] 人ですか。", "correctAnswer": "どんな", "distractors": ["どれ", "どこ", "どうして"], "explanation": "どんな (what kind of) modifies the noun 人." },
        { "passage": "バスと電車と [ ___ ] が安いですか。", "correctAnswer": "どちら", "distractors": ["どれ", "だれ", "どこ"], "explanation": "どちら is used to compare exactly two options (which one is cheaper)." },
        { "passage": "このクラスで [ ___ ] が一番背が高いですか。", "correctAnswer": "だれ", "distractors": ["どれ", "どちら", "どこ"], "explanation": "だれ (who) is used to ask about people." },
        { "passage": "私は日本の歴史 [ ___ ] ついて勉強しています。", "correctAnswer": "に", "distractors": ["を", "で", "が"], "explanation": "Noun + について means 'about / concerning' (studying about Japanese history)." },
        { "passage": "部屋が [ ___ ] なりました。", "correctAnswer": "きれいに", "distractors": ["きれいで", "きれいな", "きれいだ"], "explanation": "Na-adjectives drop な and add に before なる (to become clean)." },
        { "passage": "あしたは [ ___ ] なるでしょう。", "correctAnswer": "寒く", "distractors": ["寒い", "寒くて", "寒かった"], "explanation": "I-adjectives drop い and add く before なる (will become cold)." },
        { "passage": "A: 「この本を読んでもいいですか。」 B: 「はい、[ ___ ]。」", "correctAnswer": "どうぞ", "distractors": ["どうも", "どうして", "どういたしまして"], "explanation": "どうぞ grants permission freely (Go ahead)." },
        { "passage": "私は日本料理を [ ___ ] ことがあります。", "correctAnswer": "食べた", "distractors": ["食べる", "食べて", "食べ"], "explanation": "Ta-form (食べた) + ことがあります expresses past experience (have eaten)." },
        { "passage": "ここでタバコを [ ___ ] もいいですか。", "correctAnswer": "吸って", "distractors": ["吸う", "吸った", "吸い"], "explanation": "Te-form (吸って) + もいいですか asks for permission (May I smoke?)." },
        { "passage": "図書館の中では静かに [ ___ ] なければなりません。", "correctAnswer": "し", "distractors": ["する", "して", "した"], "explanation": "Nai-form base of する is し + なければなりません (must be quiet)." },
        { "passage": "私はあした、買い物に [ ___ ] つもりです。", "correctAnswer": "行く", "distractors": ["行き", "行って", "行った"], "explanation": "Dictionary form (行く) + つもりです expresses an intention (plan to go)." },
        { "passage": "A: 「荷物を持ちましょうか。」 B: 「いいえ、[ ___ ] です。」", "correctAnswer": "けっこう", "distractors": ["どうぞ", "だめ", "いけません"], "explanation": "けっこうです is a polite way to decline an offer." },
        { "passage": "この辞書は [ ___ ] 役に立ちます。", "correctAnswer": "とても", "distractors": ["あまり", "全然", "少しも"], "explanation": "とても (very) is an affirmative adverb that pairs with 役に立ちます (is useful)." },
        { "passage": "私はきのう、友達 [ ___ ] 晩ご飯を食べました。", "correctAnswer": "と", "distractors": ["に", "で", "を"], "explanation": "The particle と is used to indicate a companion (with a friend)." },
        { "passage": "あした、一人 [ ___ ] 映画を見に行きます。", "correctAnswer": "で", "distractors": ["に", "と", "が"], "explanation": "一人で (by oneself / alone) is a fixed phrase using the particle で." },
        { "passage": "この電車は京都 [ ___ ] 止まりますか。", "correctAnswer": "に", "distractors": ["で", "を", "へ"], "explanation": "The particle に indicates the specific point of stopping (止まる)." },
        { "passage": "私の家は駅 [ ___ ] 近いです。", "correctAnswer": "から", "distractors": ["まで", "に", "で"], "explanation": "When describing physical distance, から marks the starting point (close FROM the station)." },
        { "passage": "毎日、日本語を3時間 [ ___ ] 勉強します。", "correctAnswer": "ぐらい", "distractors": ["ごろ", "しか", "など"], "explanation": "ぐらい indicates an approximate duration or quantity (about 3 hours)." },
        { "passage": "私は肉が嫌いですから、野菜 [ ___ ] 食べません。", "correctAnswer": "しか", "distractors": ["だけ", "も", "は"], "explanation": "しか paired with a negative verb means 'nothing but' or 'only' (eat nothing but vegetables)." },
        { "passage": "日曜日 [ ___ ] 月曜日は休みです。", "correctAnswer": "と", "distractors": ["や", "か", "に"], "explanation": "The particle と connects an exhaustive list of nouns (Sunday AND Monday)." },
        { "passage": "机の上にりんご [ ___ ] みかんなどがあります。", "correctAnswer": "や", "distractors": ["と", "か", "も"], "explanation": "The particle や connects an incomplete list, often followed by など (apples, tangerines, etc.)." },
        { "passage": "私はスポーツの中 [ ___ ] サッカーが一番好きです。", "correctAnswer": "で", "distractors": ["に", "を", "へ"], "explanation": "の中で is used to set the category or boundary for a comparison (among sports)." },
        { "passage": "教室に田中さん [ ___ ] います。", "correctAnswer": "が", "distractors": ["を", "で", "に"], "explanation": "The particle が marks the subject of existence verbs like います." },
        { "passage": "ここに [ ___ ] を書かないでください。", "correctAnswer": "何も", "distractors": ["何が", "何か", "何で"], "explanation": "何も + negative verb means 'nothing' (Please write nothing here)." },
        { "passage": "夏休みは [ ___ ] へも行きませんでした。", "correctAnswer": "どこ", "distractors": ["だれ", "いつ", "なに"], "explanation": "どこへも + negative verb means 'nowhere' (I went nowhere)." },
        { "passage": "このかばんは [ ___ ] のですか。", "correctAnswer": "だれ", "distractors": ["どこ", "いつ", "なに"], "explanation": "だれの means 'whose'. It is used to ask about possession." },
        { "passage": "私はきのう、何 [ ___ ] しませんでした。", "correctAnswer": "も", "distractors": ["か", "が", "を"], "explanation": "何 (what) + も + negative verb translates to 'did not do anything'." },
        { "passage": "このりんごは三つ [ ___ ] 500円です。", "correctAnswer": "で", "distractors": ["に", "を", "が"], "explanation": "で is used to indicate a bundled quantity or total amount (for three)." },
        { "passage": "私は毎朝、7時 [ ___ ] に起きます。", "correctAnswer": "ごろ", "distractors": ["ぐらい", "まで", "から"], "explanation": "ごろ is used to indicate an approximate point in time (around 7 o'clock)." },
        { "passage": "山田さんは歌 [ ___ ] 下手です。", "correctAnswer": "が", "distractors": ["を", "で", "に"], "explanation": "Adjectives of skill (下手, 上手) take the particle が for the object." },
        { "passage": "私は肉 [ ___ ] 魚のほうが好きです。", "correctAnswer": "より", "distractors": ["から", "まで", "ほど"], "explanation": "A より B のほうが好きです means 'I like B more than A'." },
        { "passage": "スープとサラダと [ ___ ] がいいですか。", "correctAnswer": "どちら", "distractors": ["どれ", "だれ", "どこ"], "explanation": "どちら is used when asking someone to choose between exactly two options." },
        { "passage": "このクラスでだれ [ ___ ] 一番若いですか。", "correctAnswer": "が", "distractors": ["は", "を", "で"], "explanation": "When the interrogative word (だれ) is the subject of the sentence, it must be marked with が." },
        { "passage": "ドアを [ ___ ] ください。", "correctAnswer": "閉めて", "distractors": ["閉める", "閉めた", "閉め"], "explanation": "Te-form (閉めて) + ください is a polite request (Please close)." },
        { "passage": "ここで写真を [ ___ ] は行けません。", "correctAnswer": "撮って", "distractors": ["撮る", "撮った", "撮り"], "explanation": "Te-form (撮って) + はいけません indicates a strict rule or prohibition (must not take)." },
        { "passage": "私は毎晩、本を [ ___ ] から寝ます。", "correctAnswer": "読んで", "distractors": ["読む", "読んだ", "読み"], "explanation": "Te-form (読んで) + から means 'after doing an action' (after reading)." },
        { "passage": "辞書を [ ___ ] もいいですか。", "correctAnswer": "借りて", "distractors": ["借りる", "借りた", "借り"], "explanation": "Te-form (借りて) + もいいですか asks for permission (May I borrow?)." },
        { "passage": "私は今、手紙を [ ___ ] います。", "correctAnswer": "書いて", "distractors": ["書く", "書いた", "書き"], "explanation": "Te-form (書いて) + います describes an ongoing, continuous action (I am writing)." },
        { "passage": "窓が [ ___ ] いますね。", "correctAnswer": "開いて", "distractors": ["開く", "開いた", "開き"], "explanation": "Te-form of an intransitive verb (開いて) + います describes a resulting state (is open)." },
        { "passage": "日本へ [ ___ ] 前に、日本語を勉強しました。", "correctAnswer": "来る", "distractors": ["来た", "来て", "来ない"], "explanation": "Dictionary form (来る) + 前に means 'before doing [action]'." },
        { "passage": "ご飯を [ ___ ] あとで、お茶を飲みます。", "correctAnswer": "食べた", "distractors": ["食べる", "食べて", "食べ"], "explanation": "Ta-form (食べた) + あとで means 'after having done [action]'." },
        { "passage": "ドアが [ ___ ] います。", "correctAnswer": "閉まって", "distractors": ["閉まる", "閉まった", "閉まり"], "explanation": "Te-form of an intransitive verb (閉まって) + います describes a state (is closed)." },
        { "passage": "あしたは雨が [ ___ ] でしょう。", "correctAnswer": "降る", "distractors": ["降って", "降ります", "降った"], "explanation": "Plain dictionary form (降る) + でしょう expresses probability (It will probably rain)." },
        { "passage": "私はあした、図書館へ [ ___ ] つもりです。", "correctAnswer": "行く", "distractors": ["行き", "行って", "行った"], "explanation": "Dictionary form (行く) + つもりです expresses personal intention (plan to go)." },
        { "passage": "私は泳ぐ [ ___ ] ができません。", "correctAnswer": "こと", "distractors": ["もの", "の", "ほう"], "explanation": "Dictionary form + ことができます expresses ability. こと nominalizes the verb." },
        { "passage": "私は日本の歌を [ ___ ] たいです。", "correctAnswer": "歌い", "distractors": ["歌う", "歌って", "歌った"], "explanation": "Verb stem (歌い) + たいです expresses personal desire (I want to sing)." },
        { "passage": "デパートへ靴を [ ___ ] に行きます。", "correctAnswer": "買い", "distractors": ["買う", "買って", "買った"], "explanation": "Verb stem (買い) + に行く expresses the purpose of motion (go in order to buy)." },
        { "passage": "私は音楽を [ ___ ] ながら勉強します。", "correctAnswer": "聞き", "distractors": ["聞く", "聞いて", "聞いた"], "explanation": "Verb stem (聞き) + ながら expresses simultaneous actions (studying while listening)." },
        { "passage": "この漢字の [ ___ ] がわかりません。", "correctAnswer": "読み方", "distractors": ["読む方", "読んで方", "読んだ方"], "explanation": "Verb stem (読み) + 方 (かた) creates a noun meaning 'the way of doing' (how to read)." },
        { "passage": "きょうは早く [ ___ ] なければなりません。", "correctAnswer": "帰ら", "distractors": ["帰る", "帰って", "帰り"], "explanation": "Nai-form base (帰ら) + なければなりません means 'must do' (must return)." },
        { "passage": "ここに車を [ ___ ] ないでください。", "correctAnswer": "止め", "distractors": ["止める", "止めて", "止めた"], "explanation": "Nai-form base (止め) + ないでください makes a polite negative request (Please don't park)." },
        { "passage": "あしたは早く [ ___ ] てもいいです。", "correctAnswer": "起きなく", "distractors": ["起きない", "起きて", "起きた"], "explanation": "Nai-form (drop い) + くてもいいです means 'you do not have to do [action]'." },
        { "passage": "このバスは駅へ [ ___ ] か。", "correctAnswer": "行きます", "distractors": ["行き", "行って", "行く"], "explanation": "A simple formal present/future question requires the ます-form." },
        { "passage": "田中さんは [ ___ ] 服を着ています。", "correctAnswer": "赤い", "distractors": ["赤の", "赤く", "赤いで"], "explanation": "I-adjectives directly modify nouns (赤い服 = red clothes)." },
        { "passage": "部屋が [ ___ ] なりましたね。", "correctAnswer": "明るく", "distractors": ["明るい", "明るくて", "明るかった"], "explanation": "To connect an i-adjective to なる (to become), drop 'い' and add 'く'." },
        { "passage": "私は将来、先生 [ ___ ] なりたいです。", "correctAnswer": "に", "distractors": ["で", "を", "が"], "explanation": "Nouns take the particle に before なる (to become a teacher)." },
        { "passage": "駅の前にスーパー [ ___ ] できました。", "correctAnswer": "が", "distractors": ["を", "に", "で"], "explanation": "できる (to be built/completed) is an intransitive verb and takes が." },
        { "passage": "きのう、山田さんに [ ___ ] 。", "correctAnswer": "会いました", "distractors": ["会います", "会って", "会う"], "explanation": "きのう (yesterday) requires the formal past tense (会いました)." },
        { "passage": "私は母に時計を [ ___ ] 。", "correctAnswer": "もらいました", "distractors": ["あげました", "くれました", "かしました"], "explanation": "The speaker receives an item FROM someone (母に), requiring もらう." },
        { "passage": "先生は私に本を [ ___ ] 。", "correctAnswer": "くれました", "distractors": ["もらいました", "あげました", "かしました"], "explanation": "When someone gives something TO the speaker (私に), the verb is くれる." },
        { "passage": "この時計は兄が私に [ ___ ] ました。", "correctAnswer": "くれ", "distractors": ["もらい", "あげ", "かし"], "explanation": "The older brother gave it to the speaker, requiring くれる." },
        { "passage": "私はいつも朝ごはんを [ ___ ] 学校へ行きます。", "correctAnswer": "食べてから", "distractors": ["食べるから", "食べて", "食べたから"], "explanation": "Te-form + から means 'after doing' (after eating breakfast)." },
        { "passage": "私はお酒を [ ___ ] 。", "correctAnswer": "飲みません", "distractors": ["飲みます", "飲んで", "飲む"], "explanation": "A standard negative habit or preference is expressed with ません." },
        { "passage": "きのうのテストはとても [ ___ ] 。", "correctAnswer": "難しかったです", "distractors": ["難しいです", "難しくないです", "難しかっただ"], "explanation": "きのう requires the past tense of the i-adjective (難しかった) followed by です." },
        { "passage": "この部屋は [ ___ ] ありません。", "correctAnswer": "静かじゃ", "distractors": ["静かく", "静かくて", "静かな"], "explanation": "The negative of a na-adjective is [stem] + じゃありません (not quiet)." },
        { "passage": "この靴は [ ___ ] 丈夫です。", "correctAnswer": "安くて", "distractors": ["安い", "安いで", "安かった"], "explanation": "To connect i-adjectives, drop 'い' and add 'くて' (cheap and sturdy)." },
        { "passage": "私の町は静か [ ___ ] 、きれいです。", "correctAnswer": "で", "distractors": ["くて", "だ", "な"], "explanation": "Na-adjectives use で to connect to other descriptive clauses (quiet and beautiful)." },
        { "passage": "私の部屋は [ ___ ] ないです。", "correctAnswer": "広く", "distractors": ["広い", "広くて", "広かった"], "explanation": "The negative form of an i-adjective is [stem] + くないです (not wide)." },
        { "passage": "きょうは [ ___ ] 疲れました。", "correctAnswer": "とても", "distractors": ["あまり", "全然", "少しも"], "explanation": "とても (very) is an affirmative adverb that pairs with 疲れました." },
        { "passage": "私は [ ___ ] 7時に起きます。", "correctAnswer": "だいたい", "distractors": ["たくさん", "もっと", "一番"], "explanation": "だいたい (mostly/about) is used to express general habits or approximate times." },
        { "passage": "このお菓子は [ ___ ] おいしくないです。", "correctAnswer": "あまり", "distractors": ["とても", "たくさん", "よく"], "explanation": "あまり + negative means 'not very' (not very delicious)." },
        { "passage": "私は英語が [ ___ ] わかりません。", "correctAnswer": "全然", "distractors": ["少し", "だいたい", "とても"], "explanation": "全然 (not at all) is strongly paired with the negative verb わかりません." },
        { "passage": "山田さんは [ ___ ] も元気です。", "correctAnswer": "いつも", "distractors": ["まだ", "もう", "あとで"], "explanation": "いつも (always) fits perfectly with an affirmative continuous state (always energetic)." },
        { "passage": "私は [ ___ ] 本を読みます。", "correctAnswer": "よく", "distractors": ["あまり", "全然", "だんだん"], "explanation": "よく (often) modifies affirmative action verbs to show high frequency." },
        { "passage": "A:「もう食べましたか。」 B:「はい、[ ___ ] 食べました。」", "correctAnswer": "もう", "distractors": ["まだ", "すぐ", "あとで"], "explanation": "もう (already) confirms that the action has been completed." },
        { "passage": "A:「もう宿題をしましたか。」 B:「いいえ、[ ___ ] です。」", "correctAnswer": "まだ", "distractors": ["もう", "すぐ", "あとで"], "explanation": "まだ (not yet) is the natural negative response to questions asking 'already?'." },
        { "passage": "この言葉の [ ___ ] がわかりません。", "correctAnswer": "意味", "distractors": ["意見", "意志", "医者"], "explanation": "意味 (いみ - meaning) is the logical word when discussing vocabulary (言葉)." },
        { "passage": "A:「鈴木さんはいますか。」 B:「[ ___ ] 帰りましたよ。」", "correctAnswer": "もう", "distractors": ["まだ", "すぐ", "あとで"], "explanation": "もう (already) is used to show the action (going home) has already happened." },
        { "passage": "A:「一緒に帰りませんか。」 B:「私は [ ___ ] 帰ります。」", "correctAnswer": "あとで", "distractors": ["もう", "まだ", "すぐ"], "explanation": "あとで (later) makes sense when politely declining an invitation to go together right now." },
        { "passage": "私は毎日 [ ___ ] 散歩します。", "correctAnswer": "1時間ぐらい", "distractors": ["1時間ごろ", "1時間しか", "1時間まで"], "explanation": "ぐらい indicates an approximate duration (about 1 hour)." },
        { "passage": "私はきのう [ ___ ] 何もしませんでした。", "correctAnswer": "一日中", "distractors": ["一日ごろ", "一日しか", "一日まで"], "explanation": "一日中 (いちにちじゅう) means 'all day long'." },
        { "passage": "A:「荷物を持ちましょうか。」 B:「[ ___ ] 、お願いします。」", "correctAnswer": "はい", "distractors": ["いいえ", "どうも", "ごめんなさい"], "explanation": "はい is the direct affirmative used before 'please' (お願いします) when accepting help." },
        { "passage": "A:「お茶はいかがですか。」 B:「いいえ、[ ___ ] です。」", "correctAnswer": "けっこう", "distractors": ["どうぞ", "だめ", "いけません"], "explanation": "けっこうです is the standard polite way to say 'No, thank you'." },
        { "passage": "このかばんは [ ___ ] ですか。", "correctAnswer": "いくら", "distractors": ["いくつ", "いつ", "だれ"], "explanation": "いくら asks for the price (How much is it?)." },
        { "passage": "このりんごは [ ___ ] ですか。", "correctAnswer": "いくつ", "distractors": ["いくら", "いつ", "だれ"], "explanation": "いくつ is the question word for 'how many' (general counter)." },
        { "passage": "山田さんは [ ___ ] 人ですか。", "correctAnswer": "どんな", "distractors": ["どれ", "どこ", "どうして"], "explanation": "どんな (what kind of) is an interrogative that modifies nouns directly." },
        { "passage": "この漢字は [ ___ ] 書きますか。", "correctAnswer": "どう", "distractors": ["何", "どこ", "だれ"], "explanation": "どう (how) is used to ask about the method or manner of an action." },
        { "passage": "私はきのう、10時 [ ___ ] 寝ました。", "correctAnswer": "ごろ", "distractors": ["ぐらい", "しか", "まで"], "explanation": "ごろ is used for an approximate point in time on the clock (around 10)." },
        { "passage": "かばんの中に本が3 [ ___ ] あります。", "correctAnswer": "冊", "distractors": ["本", "枚", "台"], "explanation": "冊 (さつ) is the counter for bound objects like books and magazines." },
        { "passage": "机の上にえんぴつが2 [ ___ ] あります。", "correctAnswer": "本", "distractors": ["冊", "枚", "台"], "explanation": "本 (ほん) is the counter for long, cylindrical objects like pencils." },
        { "passage": "部屋に学生が5 [ ___ ] います。", "correctAnswer": "人", "distractors": ["匹", "台", "個"], "explanation": "人 (にん) is the standard counter for people." },
        { "passage": "駐車場に車が4 [ ___ ] あります。", "correctAnswer": "台", "distractors": ["本", "枚", "冊"], "explanation": "台 (だい) is the counter for machines and vehicles." },
        { "passage": "猫が2 [ ___ ] います。", "correctAnswer": "匹", "distractors": ["人", "台", "本"], "explanation": "匹 (ひき) is the counter for small animals like cats and dogs." },
        { "passage": "日本語の勉強は難しい [ ___ ] 、おもしろいです。", "correctAnswer": "ですが", "distractors": ["だから", "から", "ので"], "explanation": "ですが (but) connects two contrasting ideas (difficult but interesting)." },
        { "passage": "頭が痛いです [ ___ ] 、学校を休みます。", "correctAnswer": "から", "distractors": ["でも", "が", "と"], "explanation": "から indicates a reason (Because my head hurts, I will rest)." },
        { "passage": "この店は安いです。[ ___ ] 、おいしいです。", "correctAnswer": "そして", "distractors": ["でも", "だから", "しかし"], "explanation": "そして (and) connects two positive, parallel attributes (cheap and delicious)." },
        { "passage": "あしたは日曜日です。[ ___ ] 、仕事に行きます。", "correctAnswer": "でも", "distractors": ["そして", "だから", "だからこそ"], "explanation": "でも (but) connects two opposing sentences (It is Sunday. But I will go to work)." },
        { "passage": "A:「あしたは休みですね。」 B:「ええ。[ ___ ] 、どこかへ行きますか。」", "correctAnswer": "ところで", "distractors": ["だから", "でも", "そして"], "explanation": "ところで (by the way) is used to change the subject smoothly." },
        { "passage": "私はあした、買い物に [ ___ ] つもりです。", "correctAnswer": "行く", "distractors": ["行き", "行って", "行った"], "explanation": "Dictionary form (行く) + つもりです expresses an intention." },
        { "passage": "私はカメラを [ ___ ] ことができません。", "correctAnswer": "使う", "distractors": ["使い", "使って", "使った"], "explanation": "Dictionary form + ことができます is the grammatical structure for ability." },
        { "passage": "駅まで歩いて10分 [ ___ ] かかります。", "correctAnswer": "ぐらい", "distractors": ["ごろ", "しか", "まで"], "explanation": "ぐらい is used for approximate durations (about 10 minutes)." },
        { "passage": "財布に100円 [ ___ ] ありません。", "correctAnswer": "しか", "distractors": ["だけ", "も", "は"], "explanation": "しか paired with a negative verb means 'only' (nothing but 100 yen)." },
        { "passage": "私はお茶 [ ___ ] コーヒーが好きです。", "correctAnswer": "より", "distractors": ["から", "まで", "ほど"], "explanation": "A より B が好きです is used to state a preference of B over A." },
        { "passage": "この店で [ ___ ] が一番安いですか。", "correctAnswer": "どれ", "distractors": ["どこ", "だれ", "どう"], "explanation": "どれ (which one) is used to choose an item from three or more options." },
        { "passage": "きのうは雨 [ ___ ] 、どこへも行きませんでした。", "correctAnswer": "でしたから", "distractors": ["ですから", "だから", "から"], "explanation": "Noun + でしたから gives a reason in the past polite tense (Because it was rain)." },
        { "passage": "ここに名前と電話番号を [ ___ ] ください。", "correctAnswer": "書いて", "distractors": ["書く", "書いた", "書き"], "explanation": "Te-form (書いて) + ください makes a polite request." },
        { "passage": "この辞書は [ ___ ] 使います。", "correctAnswer": "よく", "distractors": ["あまり", "全然", "少しも"], "explanation": "よく (often) is an affirmative adverb showing high frequency." },
        { "passage": "あしたは [ ___ ] なるでしょう。", "correctAnswer": "暖かく", "distractors": ["暖かい", "暖かくて", "暖かかった"], "explanation": "I-adjectives connect to なる by dropping 'い' and adding 'く' (will become warm)." },
        { "passage": "A:「これを使ってください。」 B:「[ ___ ] ありがとうございます。」", "correctAnswer": "どうも", "distractors": ["どうぞ", "どうして", "こちらこそ"], "explanation": "どうも adds emphasis to gratitude (Thank you very much)." },
        { "passage": "A:「いただきます。」 B:「[ ___ ] 。」", "correctAnswer": "どうぞ", "distractors": ["どうも", "どうして", "ごちそうさまでした"], "explanation": "どうぞ is used to politely prompt someone to begin eating." },
        { "passage": "[ ___ ] は私の辞書です。", "correctAnswer": "これ", "distractors": ["この", "ここ", "こんな"], "explanation": "これ (this) is a demonstrative pronoun that acts as the subject of the sentence." },
        { "passage": "私は [ ___ ] 朝ごはんを食べません。", "correctAnswer": "いつも", "distractors": ["まだ", "もう", "あとで"], "explanation": "いつも (always) modifies the habitual negative action (I always do not eat breakfast)." },
        { "passage": "テストが終わりましたから、帰って [ ___ ] いいです。", "correctAnswer": "も", "distractors": ["は", "が", "を"], "explanation": "Te-form + もいいです grants permission (You may go home)." }
    ],

    // 9. Information Retrieval
    info_retrieval: [
        { "passage": "【ゴミの出し方】\n燃えるゴミ：月・木\n燃えないゴミ：水\nペットボトル・缶：金\n※朝8時までに出してください。", "question": "ペットボトルはいつ出しますか。", "correctAnswer": "金曜日", "distractors": ["月曜日", "水曜日", "木曜日"], "explanation": "Scanning the list, 'ペットボトル' (plastic bottles) is next to '金' (Friday)." },
        { "passage": "【さくら図書館からのお知らせ】\n開館時間：午前9時〜午後6時\n休み：毎週火曜日、第3水曜日\n※本は一人5冊、2週間借りられます。", "question": "図書館は何曜日に休むことが多いですか。", "correctAnswer": "火曜日", "distractors": ["月曜日", "水曜日", "木曜日"], "explanation": "The notice says '休み：毎週火曜日' (Closed: Every Tuesday)." },
        { "passage": "田中さんへ\n明日の会議は午後2時からではなく、午後3時からになりました。場所は3階の会議室です。資料を10枚コピーしておいてください。（佐藤）", "question": "明日の会議は何時からですか。", "correctAnswer": "午後3時から", "distractors": ["午後1時から", "午後2時から", "午後4時から"], "explanation": "The memo explicitly corrects the time: '午後2時からではなく、午後3時からになりました' (Not 2 PM, but 3 PM)." },
        { "passage": "【レストラン・ひまわり】\nランチ：11:00〜14:00\nディナー：17:00〜21:00\n※土曜日と日曜日のランチは15:00までです。", "question": "日曜日のランチは何時までですか。", "correctAnswer": "14:00までではなく、15:00まで", "distractors": ["11:00まで", "14:00まで", "21:00まで"], "explanation": "The special note (※) says Saturday and Sunday lunch is until 15:00 ('土曜日と日曜日のランチは15:00までです')." },
        { "passage": "【あさひ病院の診察時間】\n月〜金：午前9:00〜12:00 / 午後2:00〜6:00\n土：午前9:00〜12:00のみ\n休み：日曜日・祝日", "question": "土曜日の午後、病院に行ってもいいですか。", "correctAnswer": "いいえ、行けません", "distractors": ["はい、行けます", "2時まで行けます", "6時まで行けます"], "explanation": "Saturday hours are '午前9:00〜12:00のみ' (mornings only). Therefore, you cannot go in the afternoon." },
        { "passage": "【スーパーみどり・特売カレンダー】\n5日：お米の日\n10日：肉の日\n15日：野菜の日\n20日：魚の日", "question": "今日は10日です。何が安いですか。", "correctAnswer": "肉", "distractors": ["お米", "野菜", "魚"], "explanation": "On the 10th (10日), the calendar lists '肉の日' (Meat Day)." },
        { "passage": "山田さんへ\n電話がありました。木村さんからです。「明日の映画のチケットは私が買いますから、大丈夫です」と言っていました。また夜に電話するそうです。", "question": "映画のチケットは誰が買いますか。", "correctAnswer": "木村さん", "distractors": ["山田さん", "私", "誰も買わない"], "explanation": "The message from Kimura-san says 'チケットは私が買います' (I will buy the tickets)." },
        { "passage": "【日本語教室のお知らせ】\n場所：市民センター2階\n時間：毎週土曜日 午前10時〜11時半\nお金：1ヶ月 2,000円\n持ってくる物：ノートと鉛筆", "question": "この教室は1ヶ月にいくらですか。", "correctAnswer": "2,000円", "distractors": ["1,000円", "3,000円", "お金は要らない"], "explanation": "Under 'お金' (Money/Cost), it clearly states '1ヶ月 2,000円'." },
        { "passage": "【バスの時刻表：東京駅行き】\n平日：7:15, 8:15, 9:15\n土日：7:30, 8:30, 9:30\n※雨の日は5分ぐらい遅れることがあります。", "question": "今日は日曜日です。8時台のバスは何時に来ますか。", "correctAnswer": "8:30", "distractors": ["8:15", "8:00", "8:45"], "explanation": "For Saturday/Sunday (土日), the 8 o'clock hour bus is at 8:30." },
        { "passage": "【忘れ物のお知らせ】\n駅のトイレでカバンを見つけました。\n色：黒\n中にある物：鍵、めがね、本1冊\n※財布や携帯電話はありませんでした。", "question": "カバンの中に何が入っていましたか。", "correctAnswer": "鍵とめがねと本", "distractors": ["財布と携帯電話", "鍵と財布", "めがねと携帯電話"], "explanation": "The notice lists the contents as '鍵、めがね、本1冊' (Keys, glasses, 1 book)." },
        { "passage": "マリアさんへ\n明日一緒に料理を作りましょう。私は肉と野菜を買っていきます。マリアさんは飲み物をお願いします。デザートはスミスさんが持ってきます。", "question": "マリアさんは何を買いますか。", "correctAnswer": "飲み物", "distractors": ["肉", "野菜", "デザート"], "explanation": "The memo instructs: 'マリアさんは飲み物をお願いします' (Maria, please get the drinks)." },
        { "passage": "【アルバイト募集（ぼしゅう）】\n仕事：コンビニのレジ\n時間：17:00〜22:00\n時給：1,000円\n※週に3回以上できる人。外国人もOKです。", "question": "このアルバイトはいつ働きますか。", "correctAnswer": "夕方から夜", "distractors": ["朝", "昼", "夜中"], "explanation": "The time is 17:00 to 22:00, which corresponds to evening to night (夕方から夜)." },
        { "passage": "【プールを使う人へ】\n・プールに入る前に、必ずシャワーを浴びてください。\n・プールの中では帽子をかぶってください。\n・プールで走らないでください。", "question": "プールに入る前に何をしなければなりませんか。", "correctAnswer": "シャワーを浴びる", "distractors": ["帽子をかぶる", "走る", "準備体操をする"], "explanation": "The rules state: '入る前に、必ずシャワーを浴びてください' (Before entering, be sure to take a shower)." },
        { "passage": "お母さんへ\n今日、学校の帰りに友達と図書館で勉強してきます。晩ご飯の時間はいつもより遅くなって、夜8時ごろになります。先に食べていてください。", "question": "この人は今日何時に晩ご飯を食べますか。", "correctAnswer": "夜8時ごろ", "distractors": ["夜6時ごろ", "夜7時ごろ", "夜9時ごろ"], "explanation": "The memo says '晩ご飯の時間は...夜8時ごろになります' (Dinner time will be around 8 PM)." },
        { "passage": "【ケーキ屋「あまい」】\nショートケーキ：400円\nチョコレートケーキ：450円\nチーズケーキ：350円\n※ケーキを3つ買うと、100円安くなります。", "question": "チーズケーキは一ついくらですか。", "correctAnswer": "350円", "distractors": ["400円", "450円", "100円"], "explanation": "Scanning the menu, 'チーズケーキ' is listed at '350円'." },
        { "passage": "スミスさん\nあしたのハイキングですが、朝9時に駅の北口（きたぐち）に集まってください。南口（みなみぐち）ではありません。遅れないでくださいね。（先生より）", "question": "明日の朝、どこに集まりますか。", "correctAnswer": "駅の北口", "distractors": ["駅の南口", "学校", "山の入り口"], "explanation": "The teacher specifies '駅の北口（きたぐち）に集まってください' (Gather at the station's North Exit)." },
        { "passage": "【アパートのルール】\n1. 家賃は毎月25日までに払ってください。\n2. 夜10時以降は、大きな音で音楽を聞かないでください。\n3. ペットは飼ってはいけません。", "question": "家賃（部屋のお金）はいつまでに払いますか。", "correctAnswer": "毎月25日まで", "distractors": ["毎月10日まで", "毎月20日まで", "毎月末まで"], "explanation": "Rule 1 states '毎月25日までに払ってください' (Pay by the 25th of every month)." },
        { "passage": "田中さんへ\n机の上にあった田中さんの辞書、少しお借りします。今日の午後3時ごろに返します。ありがとうございます。（鈴木）", "question": "鈴木さんは辞書をいつ返しますか。", "correctAnswer": "今日の午後3時ごろ", "distractors": ["今日の午前中", "明日の午後", "明日の午後3時ごろ"], "explanation": "The memo says '今日の午後3時ごろに返します' (I will return it around 3 PM today)." },
        { "passage": "【パン屋・セールのお知らせ】\n今週の金曜日と土曜日は、すべてのパンが20%安くなります！\n※サンドイッチと飲み物は安くなりません。", "question": "今週の土曜日、安くならないものはどれですか。", "correctAnswer": "サンドイッチ", "distractors": ["メロンパン", "チョコレートパン", "すべてのパン"], "explanation": "The special note (※) says 'サンドイッチと飲み物は安くなりません' (Sandwiches and drinks are not discounted)." },
        { "passage": "木村さんへ\nきのう木村さんに借りたCDを、自分のカバンに入れるのを忘れました。今は私の机の引き出しの中にあります。明日必ず持って行きます。ごめんなさい。（山田）", "question": "CDは今、どこにありますか。", "correctAnswer": "山田さんの机の引き出しの中", "distractors": ["木村さんのカバンの中", "山田さんのカバンの中", "木村さんの家"], "explanation": "Yamada states '今は私の机の引き出しの中にあります' (Right now it is in my desk drawer)." },
        { "passage": "【映画館のチケット料金】\n大人：1,800円\n大学生：1,500円\n高校生・中学生：1,000円\n小学生・子供：800円\n※水曜日は女性だけ1,200円になります。", "question": "大人の男の人は、火曜日にいくら払いますか。", "correctAnswer": "1,800円", "distractors": ["1,500円", "1,200円", "1,000円"], "explanation": "Adults (大人) are 1,800 yen. The Wednesday discount is only for women, so a man on Tuesday pays full price." },
        { "passage": "お母さん\n冷蔵庫の中にプリンが2つあります。1つは私が食べましたから、もう1つはお母さんが食べてね。お父さんには内緒（ないしょ）だよ。（花子）", "question": "お母さんはプリンをいくつ食べてもいいですか。", "correctAnswer": "1つ", "distractors": ["2つ", "3つ", "食べてはいけない"], "explanation": "Hanako ate 1, and says 'もう1つはお母さんが食べてね' (Mom, you eat the other 1)." },
        { "passage": "【スポーツクラブからのお知らせ】\n今月は新しいプールが工事（こうじ）のため使えません。\n古いプールと、テニスコート、ジムは普通に使えます。", "question": "今月使えない場所はどこですか。", "correctAnswer": "新しいプール", "distractors": ["古いプール", "テニスコート", "ジム"], "explanation": "The notice explicitly states '新しいプールが工事のため使えません' (The new pool is unusable due to construction)." },
        { "passage": "佐藤さんへ\n来週の飲み会ですが、私は金曜日なら行けます。木曜日は仕事が遅くまであるので行けません。金曜日にしませんか？（田中）", "question": "田中さんは何曜日なら飲み会に行けますか。", "correctAnswer": "金曜日", "distractors": ["木曜日", "水曜日", "いつでもいい"], "explanation": "Tanaka says '私は金曜日なら行けます' (If it's Friday, I can go)." },
        { "passage": "【病院のバス停】\n駅行きバス\n9:00, 10:00, 11:00\n13:00, 14:00, 15:00\n※12時台のバスはありません。", "question": "お昼の12時に病院の前にいます。次のバスは何時に来ますか。", "correctAnswer": "13:00", "distractors": ["12:00", "12:30", "14:00"], "explanation": "There are no buses in the 12 o'clock hour (12時台のバスはありません). The next bus after 11:00 is at 13:00." },
        { "passage": "山田さん\nこの書類に名前を書いて、ハンコを押してください。日付（ひづけ）は私が後で書きますから、何も書かないでください。（社長）", "question": "山田さんが書類に書くものは何ですか。", "correctAnswer": "名前だけ", "distractors": ["名前と日付", "ハンコと日付", "何も書かない"], "explanation": "The boss says '名前を書いて' (write your name) and '日付は私が後で書きますから、何も書かないで' (I will write the date later, so write nothing)." },
        { "passage": "【美術館（びじゅつかん）の入り口で】\n・写真を撮ってはいけません。\n・大きな声で話さないでください。\n・飲み物を飲んでもいいですが、食べるのはだめです。", "question": "美術館の中でしてもいいことは何ですか。", "correctAnswer": "飲み物を飲むこと", "distractors": ["写真を撮ること", "大きな声で話すこと", "ご飯を食べること"], "explanation": "The rules state '飲み物を飲んでもいいですが' (It is okay to drink drinks, but...)." },
        { "passage": "お父さんへ\n今日の夕方、雨が降るそうです。私の青い傘を持っていってもいいですが、お父さんの黒い傘は玄関（げんかん）にありましたよ。（息子より）", "question": "お父さんの傘はどこにありますか。", "correctAnswer": "玄関", "distractors": ["息子の部屋", "お父さんのカバンの中", "車の中"], "explanation": "The memo says 'お父さんの黒い傘は玄関にありましたよ' (Dad's black umbrella was in the entryway)." },
        { "passage": "【ホテル・朝食のお知らせ】\n朝食券（チケット）を持っている人は、1階のレストランへ来てください。時間は午前6時半から9時までです。\nチケットがない人は、800円払ってください。", "question": "チケットを持たない人はどうすれば朝ご飯を食べられますか。", "correctAnswer": "800円払う", "distractors": ["食べられない", "無料で食べられる", "チケットを買う店に行く"], "explanation": "The notice says 'チケットがない人は、800円払ってください' (People without a ticket, please pay 800 yen)." },
        { "passage": "スミスさんへ\n明日返す予定だった本ですが、まだ最後まで読んでいません。明後日まで借りていてもいいですか？金曜日に必ず返します。（リー）", "question": "リーさんはいつ本を返しますか。", "correctAnswer": "金曜日", "distractors": ["明日", "今日", "来週"], "explanation": "Lee asks for an extension and promises: '金曜日に必ず返します' (I will definitely return it on Friday)." },
        { "passage": "【郵便局の窓口（まどぐち）時間】\n手紙・荷物：9:00〜17:00\nお金・保険：9:00〜16:00\n※土日はお休みです。ATMは夜8時まで使えます。", "question": "お金の窓口は何時に閉まりますか。", "correctAnswer": "16:00", "distractors": ["17:00", "20:00", "9:00"], "explanation": "The line for Money/Insurance (お金・保険) is '9:00〜16:00'." },
        { "passage": "田中さんへ\n明日の集合時間は午前9時です。車で行きますから、遅れないようにしてください。お昼のお弁当は私が作りますので、飲み物だけ用意してください。（木村）", "question": "田中さんが明日準備するものは何ですか。", "correctAnswer": "飲み物", "distractors": ["お弁当", "車", "お金"], "explanation": "Kimura makes the bentos, and asks Tanaka to just prepare drinks: '飲み物だけ用意してください'." },
        { "passage": "【クリーニング屋】\nワイシャツ：200円\nセーター：400円\nコート：1,000円\n※水曜日はワイシャツが半額（100円）になります！", "question": "水曜日にワイシャツを出すといくらですか。", "correctAnswer": "100円", "distractors": ["200円", "400円", "1,000円"], "explanation": "The special note says on Wednesdays, dress shirts are half price: 'ワイシャツが半額（100円）になります'." },
        { "passage": "山田さん\nさっき先生から電話がありました。来週の火曜日の授業は休みになります。水曜日と木曜日は普通にあります。クラスのみんなに伝えてください。（高橋）", "question": "来週、授業が休みになるのは何曜日ですか。", "correctAnswer": "火曜日", "distractors": ["水曜日", "木曜日", "月曜日"], "explanation": "The message says '来週の火曜日の授業は休みになります' (Next Tuesday's class will be canceled)." },
        { "passage": "【コンサートのお知らせ】\n日時：10月5日 午後6時開演\n場所：さくらホール\n※カメラでの撮影（さつえい）は禁止です。携帯電話の電源も切ってください。", "question": "コンサート中、してはいけないことは何ですか。", "correctAnswer": "カメラで写真を撮ること", "distractors": ["音楽を聞くこと", "拍手をすること", "早く帰ること"], "explanation": "The notice states 'カメラでの撮影は禁止です' (Photography with cameras is prohibited)." },
        { "passage": "佐藤さんへ\n会議室の鍵（かぎ）は、使い終わったら私の机の引き出しに入れておいてください。受付（うけつけ）には返さないでください。（部長）", "question": "会議が終わった後、鍵をどこに置きますか。", "correctAnswer": "部長の机の引き出し", "distractors": ["受付", "会議室の机の上", "佐藤さんのカバンの中"], "explanation": "The boss says '私の机の引き出しに入れておいてください' (Put it in my desk drawer)." },
        { "passage": "【動物園の案内】\n開園：9:30〜17:00\n休園日：毎週月曜日（祝日の場合は火曜日）\nチケット：大人 600円、子供 300円", "question": "大人と子供が一人ずつ動物園に行きます。チケットは全部でいくらですか。", "correctAnswer": "900円", "distractors": ["600円", "300円", "1,200円"], "explanation": "Adult (600 yen) + Child (300 yen) = 900 yen total." },
        { "passage": "お母さんへ\n今日、傘を学校に忘れてしまいました。雨が降ってきたので、駅まで車で迎えに来てくれませんか。午後5時に着きます。（息子）", "question": "息子はどうして迎えに来てほしいと言っていますか。", "correctAnswer": "傘を忘れて、雨が降っているから", "distractors": ["電車が止まったから", "荷物が重いから", "足が痛いから"], "explanation": "The memo says '傘を学校に忘れてしまいました。雨が降ってきたので...迎えに来てくれませんか'." },
        { "passage": "【ゴミ出しカレンダー】\n缶・ビン：第1・第3火曜日\n古紙（新聞など）：第2・第4火曜日\n※カレンダーをよく見て出してください。", "question": "新聞などの古紙（こし）はいつ出しますか。", "correctAnswer": "第2・第4火曜日", "distractors": ["第1・第3火曜日", "毎週火曜日", "毎週水曜日"], "explanation": "The schedule lists '古紙（新聞など）：第2・第4火曜日' (Old paper: 2nd and 4th Tuesdays)." },
        { "passage": "田中さん\n明日のランチですが、予約した店が休みでした。ですから、駅前のイタリアンに変更しました。時間は12時のままです。（鈴木）", "question": "明日のランチはどうなりましたか。", "correctAnswer": "店が変わったが、時間は同じ", "distractors": ["店も時間も変わった", "時間は変わったが、店は同じ", "ランチは中止になった"], "explanation": "The shop changed to Italian ('イタリアンに変更しました'), but the time remains 12 ('時間は12時のままです')." },
        { "passage": "【スポーツジム・会員料金】\n昼だけ使う人：月5,000円\n夜だけ使う人：月6,000円\nいつでも使う人：月8,000円\n※学生はどのコースも1,000円安くなります。", "question": "学生が「いつでも使う」コースに入ると、1ヶ月いくらですか。", "correctAnswer": "7,000円", "distractors": ["8,000円", "5,000円", "6,000円"], "explanation": "The anytime course is 8,000 yen. Students get 1,000 yen off, making it 7,000 yen." },
        { "passage": "マリアさんへ\n貸していたDVD、ありがとうございます。机の上に置いてありました。でも、ケースの中にCDの紙が入っていませんでした。探してみてください。（山田）", "question": "山田さんはマリアさんに何をお願いしていますか。", "correctAnswer": "ケースの中の紙を探すこと", "distractors": ["DVDを返すこと", "新しいDVDを買うこと", "机を掃除すること"], "explanation": "Yamada notes the paper is missing and asks: '探してみてください' (Please try searching for it)." },
        { "passage": "【電車の案内】\n特急（一番早い）：赤色の電車\n急行（次に早い）：青色の電車\n各駅停車（全部の駅に止まる）：黄色の電車", "question": "全部の駅に止まるゆっくりな電車は何色ですか。", "correctAnswer": "黄色", "distractors": ["赤色", "青色", "緑色"], "explanation": "The local train that stops at every station (全部の駅に止まる) is listed as '黄色の電車' (yellow train)." },
        { "passage": "お父さんへ\n私の自転車の鍵を間違えて持っていきませんでしたか。テーブルの上に私の鍵がありません。お父さんの鍵はここにありますよ。（花子）", "question": "花子さんは今、何がなくて困っていますか。", "correctAnswer": "自分の自転車の鍵", "distractors": ["お父さんの自転車の鍵", "家の鍵", "お父さんのカバン"], "explanation": "Hanako asks if her dad took her key, stating '私の鍵がありません' (My key is not here)." },
        { "passage": "【スーパーの割引（わりびき）シール】\n・黄色いシール：50円引き\n・赤いシール：100円引き\n・青いシール：半額（半分の値段）", "question": "一番安くなるのはどのシールですか。", "correctAnswer": "青いシール", "distractors": ["黄色いシール", "赤いシール", "全部同じ"], "explanation": "Half price (半額) is generally the biggest discount, which is associated with the blue sticker (青いシール)." },
        { "passage": "木村さんへ\nあした、本を3冊返します。重いので、紙の袋に入れて持っていきますね。木村さんは袋のまま持って帰ってください。（田中）", "question": "田中さんは本をどうやって持っていきますか。", "correctAnswer": "紙の袋に入れて持っていく", "distractors": ["カバンに入れて持っていく", "手でそのまま持っていく", "箱に入れて持っていく"], "explanation": "Tanaka says '紙の袋に入れて持っていきますね' (I will put them in a paper bag and bring them)." },
        { "passage": "【図書館の本の返し方】\n開いている時：カウンターのスタッフに渡してください。\n閉まっている時：入り口の横にある「返却ポスト（箱）」に入れてください。", "question": "夜の10時です。図書館は閉まっています。本をどうやって返しますか。", "correctAnswer": "入り口の横にある箱に入れる", "distractors": ["カウンターのスタッフに渡す", "明日の朝まで待つ", "図書館の前に置く"], "explanation": "When closed (閉まっている時), books must be put in the return box next to the entrance ('入り口の横にある「返却ポスト（箱）」に入れてください')." },
        { "passage": "山田さんへ\n今日の飲み会、遅れて行きます。仕事が7時に終わるので、7時半ごろには店に着くと思います。先に乾杯（かんぱい）していてください。（佐藤）", "question": "佐藤さんは何時ごろ店に着きますか。", "correctAnswer": "7時半ごろ", "distractors": ["7時", "8時", "遅れて行かない"], "explanation": "The memo clearly states '7時半ごろには店に着くと思います' (I think I will arrive at the shop around 7:30)." },
        { "passage": "【パン屋のスタンプカード】\nパンを一つ買うと、スタンプを一つ押します。\nスタンプが10個たまると、好きなパンを一つ無料でプレゼントします！", "question": "どうすればパンを一つ無料でもらえますか。", "correctAnswer": "パンを10個買って、スタンプをためる", "distractors": ["パンを一つ買う", "10個のパンを一緒に買う", "お金を10倍払う"], "explanation": "The card says 'スタンプが10個たまると...プレゼントします' (When 10 stamps accumulate, you get a present)." },
        { "passage": "スミスさんへ\n日本語のテストの教室が変わりました。2階の「201教室」ではなく、3階の「305教室」です。明日は間違えないでくださいね。（先生）", "question": "明日のテストはどの教室でありますか。", "correctAnswer": "3階の305教室", "distractors": ["2階の201教室", "3階の201教室", "2階の305教室"], "explanation": "The teacher states the new room is '3階の「305教室」です' (Room 305 on the 3rd floor)." },
        { "passage": "【お知らせ】\nあしたの体育（たいいく）の授業は、体育館（たいいくかん）ではなく、グラウンドでやります。帽子を忘れないでください。", "question": "あしたの体育はどこでやりますか。", "correctAnswer": "グラウンド", "distractors": ["体育館", "教室", "プール"], "explanation": "The notice says '体育館ではなく、グラウンドでやります' (Not in the gym, but on the ground)." },
        { "passage": "山田さんへ\nきのう借りたノートは、山田さんの机の上に置いておきました。本当にありがとうございました。（木村）", "question": "木村さんはノートをどこに置きましたか。", "correctAnswer": "山田さんの机の上", "distractors": ["山田さんのカバンの中", "木村さんの机の上", "先生の机の上"], "explanation": "The memo states '山田さんの机の上に置いておきました' (I left it on Yamada's desk)." },
        { "passage": "【スーパー「さくら」の営業時間】\n平日：10:00〜21:00\n土日・祝日：9:00〜20:00", "question": "土曜日は何時から何時までですか。", "correctAnswer": "9:00〜20:00", "distractors": ["10:00〜21:00", "9:00〜21:00", "10:00〜20:00"], "explanation": "Saturday falls under '土日・祝日', which is '9:00〜20:00'." },
        { "passage": "田中さん\n今日のランチですが、駅前のカレー屋にしませんか。12時に店の前で待っています。（佐藤）", "question": "二人は今日、何を食べますか。", "correctAnswer": "カレー", "distractors": ["ラーメン", "お寿司", "うどん"], "explanation": "Sato suggests '駅前のカレー屋にしませんか' (Shall we do the curry shop in front of the station?)." },
        { "passage": "【アパートのゴミ出し】\nペットボトル：第1・第3水曜日\n※キャップを外して出してください。", "question": "ペットボトルを出す時、どうしなければなりませんか。", "correctAnswer": "キャップを外す", "distractors": ["中を洗う", "袋に入れる", "シールを貼る"], "explanation": "The specific rule says 'キャップを外して出してください' (Please take off the cap before taking it out)." },
        { "passage": "【ピアノ教室】\n月謝：大人 5,000円 / 子供 3,000円\n※テキスト代が毎月500円かかります。", "question": "大人は毎月いくら払いますか。", "correctAnswer": "5,500円", "distractors": ["5,000円", "3,500円", "3,000円"], "explanation": "Adults pay 5,000 yen plus a 500 yen textbook fee (テキスト代), totaling 5,500 yen." },
        { "passage": "鈴木さん\n会議室の鍵を閉めるのを忘れました。すみませんが、帰る前に閉めておいてください。（部長）", "question": "鈴木さんは帰る前に何をしますか。", "correctAnswer": "会議室の鍵を閉める", "distractors": ["会議室を掃除する", "部長に電話する", "電気を消す"], "explanation": "The boss asks: '帰る前に閉めておいてください' (Please lock it before you go home)." },
        { "passage": "【図書館】\n・借りられる本：1人3冊まで\n・期間：2週間\n※DVDは1週間です。", "question": "DVDはどのくらい借りられますか。", "correctAnswer": "1週間", "distractors": ["2週間", "3週間", "借りられない"], "explanation": "The note states 'DVDは1週間です' (DVDs are for 1 week)." },
        { "passage": "【電車・忘れ物センター】\n月〜金：9:00〜18:00\n土：10:00〜15:00\n日・祝：休み", "question": "日曜日に忘れ物を探したいです。センターは開いていますか。", "correctAnswer": "開いていない", "distractors": ["18:00まで開いている", "15:00まで開いている", "一日中開いている"], "explanation": "Sundays and holidays (日・祝) are marked as '休み' (Closed)." },
        { "passage": "マリアさんへ\n日曜日のバーベキューですが、飲み物は私が買いますから、マリアさんはお肉をお願いします。（田中）", "question": "マリアさんは何を買いますか。", "correctAnswer": "お肉", "distractors": ["飲み物", "野菜", "お菓子"], "explanation": "The memo says 'マリアさんはお肉をお願いします' (Maria, please handle the meat)." },
        { "passage": "【病院の案内】\n内科：2階\n外科：3階\n眼科：4階\n※トイレは各階にあります。", "question": "目が痛いです。何階に行きますか。", "correctAnswer": "4階", "distractors": ["2階", "3階", "1階"], "explanation": "For eye pain, you go to Ophthalmology (眼科), which is on the 4th floor (4階)." },
        { "passage": "スミスさん\n日本語の辞書を借りました。明日の授業の前に返します。ありがとうございました。（リー）", "question": "リーさんは辞書をいつ返しますか。", "correctAnswer": "明日の授業の前", "distractors": ["今日の授業の後", "明日の授業の後", "今日の夜"], "explanation": "The memo states '明日の授業の前に返します' (I will return it before tomorrow's class)." },
        { "passage": "【パン屋のアルバイト】\n時給：900円（土日は1,000円）\n時間：朝6:00〜10:00\n※週2日からOK", "question": "日曜日に1時間働くと、いくらもらえますか。", "correctAnswer": "1,000円", "distractors": ["900円", "1,900円", "800円"], "explanation": "The hourly wage on weekends (土日) is 1,000 yen." },
        { "passage": "お母さん\n今日の夕方、友達が家に来ます。ケーキを2つ買っておいてください。お金は後で払います。（息子）", "question": "お母さんは何をしなければなりませんか。", "correctAnswer": "ケーキを2つ買う", "distractors": ["友達を迎えに行く", "お金を払ってもらう", "部屋を掃除する"], "explanation": "The son asks 'ケーキを2つ買っておいてください' (Please buy 2 cakes in advance)." },
        { "passage": "【映画館】\n毎月1日は「映画の日」です。誰でも1,000円で映画が見られます。（普通は1,800円です）", "question": "1日に映画を見ると、普通よりいくら安いですか。", "correctAnswer": "800円", "distractors": ["1,000円", "1,800円", "500円"], "explanation": "Normal price is 1,800 yen. On the 1st, it's 1,000 yen. 1,800 - 1,000 = 800 yen cheaper." },
        { "passage": "田中さん\n今日の会議の資料、まだ少し間違いがあります。3ページを直して、もう一度私に見せてください。（部長）", "question": "田中さんはこれから何をしますか。", "correctAnswer": "資料の3ページを直す", "distractors": ["資料をコピーする", "資料を全部書き直す", "部長に電話する"], "explanation": "The boss instructs '3ページを直して、もう一度私に見せてください' (Fix page 3 and show it to me again)." },
        { "passage": "【レストランのランチ】\nAランチ（肉料理）：800円\nBランチ（魚料理）：800円\nCランチ（カレー）：600円\n※飲み物は+100円", "question": "Cランチと飲み物を頼むと、いくらですか。", "correctAnswer": "700円", "distractors": ["600円", "800円", "900円"], "explanation": "C Lunch is 600 yen. A drink is +100 yen. 600 + 100 = 700 yen." },
        { "passage": "山田さん\n明日の約束ですが、1時に駅前でしたね。少し遅れそうです。1時半でもいいですか？（鈴木）", "question": "鈴木さんは明日の約束を何時にしたいですか。", "correctAnswer": "1時半", "distractors": ["1時", "2時", "12時半"], "explanation": "Suzuki asks '1時半でもいいですか？' (Is 1:30 okay?)." },
        { "passage": "【バスツアーのお知らせ】\n出発：午前8:00\n到着：午後5:00\n※お弁当はバスの中で出ます。", "question": "お弁当はどこで食べますか。", "correctAnswer": "バスの中", "distractors": ["公園", "レストラン", "ホテル"], "explanation": "The notice says 'お弁当はバスの中で出ます' (Bentos will be served inside the bus)." },
        { "passage": "木村さん\n電話がありました。郵便局からです。荷物が届いているので、明日取りに来てくださいとのことです。（佐藤）", "question": "木村さんは明日、どこに行かなければなりませんか。", "correctAnswer": "郵便局", "distractors": ["銀行", "駅", "スーパー"], "explanation": "The message from the post office is to come pick up a package ('郵便局からです...取りに来てください')." },
        { "passage": "【ジムのロッカー】\n・靴は靴箱に入れてください。\n・服やカバンはロッカーに入れて、鍵をかけてください。", "question": "靴はどこに入れますか。", "correctAnswer": "靴箱", "distractors": ["ロッカー", "カバンの中", "受付"], "explanation": "The rule explicitly states '靴は靴箱に入れてください' (Put shoes in the shoebox)." },
        { "passage": "マリアさん\n日本語の宿題のページが変わりました。20ページではなく、22ページから25ページまでです。（先生）", "question": "宿題はどこですか。", "correctAnswer": "22ページから25ページ", "distractors": ["20ページ", "20ページから25ページ", "22ページから26ページ"], "explanation": "The teacher corrects the homework to '22ページから25ページまでです'." },
        { "passage": "【タクシー料金】\n最初の1.5キロ：500円\nその後、300メートルごとに100円上がります。", "question": "タクシーに乗ると、最初はいくらかかりますか。", "correctAnswer": "500円", "distractors": ["100円", "300円", "600円"], "explanation": "The initial fare is listed as '最初の1.5キロ：500円' (First 1.5km: 500 yen)." },
        { "passage": "お父さん\nテレビのリモコンが壊れました。電池を変えましたが動きません。帰りに新しいのを買ってきてください。（花子）", "question": "花子さんはお父さんに何をお願いしましたか。", "correctAnswer": "新しいリモコンを買うこと", "distractors": ["新しいテレビを買うこと", "電池を変えること", "テレビを直すこと"], "explanation": "Hanako asks '新しいのを買ってきてください' referring to the broken remote (リモコン)." },
        { "passage": "【スーパーのポイント】\n100円で1ポイントもらえます。\n500ポイントたまると、500円の買い物券になります。", "question": "500円の買い物券をもらうためには、何ポイント必要ですか。", "correctAnswer": "500ポイント", "distractors": ["100ポイント", "5000ポイント", "1000ポイント"], "explanation": "The notice states '500ポイントたまると、500円の買い物券になります' (When 500 points accumulate...)." },
        { "passage": "田中さん\n今日の飲み会は「さくら亭」です。駅の南口を出て、交番の隣です。北口ではないので注意してください。（幹事）", "question": "店はどこにありますか。", "correctAnswer": "南口の交番の隣", "distractors": ["北口の交番の隣", "南口のスーパーの隣", "駅の中"], "explanation": "The location is '駅の南口を出て、交番の隣です' (Exit the South Exit, next to the police box)." },
        { "passage": "【美術館のチケット】\n一般：1,000円\n学生：500円\n※学生は学生証を見せてください。", "question": "学生が安くチケットを買うために、何が必要ですか。", "correctAnswer": "学生証", "distractors": ["お金", "パスポート", "保険証"], "explanation": "The rule for students is '学生証を見せてください' (Please show your student ID)." },
        { "passage": "鈴木さん\n会議室のエアコンをつけっぱなしで帰ってしまいました。今から戻れません。申し訳ありませんが、消してくれませんか？（山田）", "question": "山田さんは鈴木さんに何をお願いしましたか。", "correctAnswer": "エアコンを消すこと", "distractors": ["エアコンをつけること", "会議室の鍵を閉めること", "会社に戻ること"], "explanation": "Yamada left the AC on and asks '消してくれませんか？' (Could you turn it off?)." },
        { "passage": "【ケーキ屋の休み】\n定休日：毎週水曜日\n※ただし、水曜日が祝日の場合はお店を開けます。次の木曜日が休みになります。", "question": "水曜日が祝日の時、お店はどうなりますか。", "correctAnswer": "お店を開ける", "distractors": ["休みになる", "午前中だけ開ける", "木曜日も開ける"], "explanation": "The special condition says '水曜日が祝日の場合はお店を開けます' (If Wednesday is a holiday, we open the shop)." },
        { "passage": "スミスさん\n明日貸すと言っていた本ですが、まだ見つかりません。見つかったら明日持っていきますが、なかったら来週貸します。ごめんなさい。（リー）", "question": "本がなかった場合、リーさんはいつ本を貸しますか。", "correctAnswer": "来週", "distractors": ["明日", "今日", "貸さない"], "explanation": "Lee states 'なかったら来週貸します' (If I don't have it, I will lend it next week)." },
        { "passage": "【ホテルのチェックイン】\nチェックイン：15:00から\nチェックアウト：10:00まで\n※遅れる場合は必ず電話してください。", "question": "部屋に入る（チェックイン）のは何時からですか。", "correctAnswer": "15:00から", "distractors": ["10:00まで", "10:00から", "いつでもいい"], "explanation": "Check-in time is clearly marked as '15:00から'." },
        { "passage": "山田さん\n今日のサッカーの練習は、雨が降っているので中止です。明日の試合はあります。明日は8時に集まってください。（キャプテン）", "question": "今日のサッカーの練習はどうなりましたか。", "correctAnswer": "雨で中止になった", "distractors": ["体育館でやる", "明日やる", "時間を変えてやる"], "explanation": "The message says '雨が降っているので中止です' (Canceled because it's raining)." },
        { "passage": "【コンサート会場】\n1階：座席（チケットが必要です）\n2階：グッズ売り場・トイレ\n3階：立ち見席", "question": "グッズ（物）を買いたい人は、何階に行きますか。", "correctAnswer": "2階", "distractors": ["1階", "3階", "外"], "explanation": "Goods sales (グッズ売り場) are located on the 2nd floor (2階)." },
        { "passage": "木村さん\n冷蔵庫の中の私のジュースを飲みましたか？私が楽しみにしていたのに。明日、新しいのを買ってきて返してください！（妹より）", "question": "妹は木村さんに何を怒っていますか。", "correctAnswer": "自分のジュースを飲まれたこと", "distractors": ["ジュースを買ってこなかったこと", "冷蔵庫を掃除しなかったこと", "ケーキを食べられたこと"], "explanation": "The sister is angry asking '私のジュースを飲みましたか？' (Did you drink my juice?)." },
        { "passage": "【自転車置き場】\n・1日：100円\n・1ヶ月：2,000円\n※自転車にシールを貼っていない人は止められません。", "question": "ここに自転車を止めるために、何が必要ですか。", "correctAnswer": "自転車にシールを貼ること", "distractors": ["名前を書くこと", "カギをかけること", "毎日お金を払うこと"], "explanation": "The rule is '自転車にシールを貼っていない人は止められません' (People without a sticker on their bike cannot park)." },
        { "passage": "佐藤さん\nさっき届いた荷物は、机の上ではなく、棚の中にしまってください。大切な書類ですから、鍵もかけておいてください。（部長）", "question": "荷物はどこにしまいますか。", "correctAnswer": "棚の中", "distractors": ["机の上", "机の中", "カバンの中"], "explanation": "The boss instructs '机の上ではなく、棚の中にしまってください' (Not on the desk, but store it in the shelf)." },
        { "passage": "【クリーニングの仕上がり時間】\n朝10時までに出す → 今日の夕方5時にできます。\n朝10時より後に出す → 明日の夕方5時にできます。", "question": "今日の午後2時に服を出しました。いつできますか。", "correctAnswer": "明日の夕方5時", "distractors": ["今日の夕方5時", "明日の朝10時", "明後日"], "explanation": "2 PM is after 10 AM (朝10時より後に出す), so it will be ready tomorrow at 5 PM." },
        { "passage": "田中さん\n明日の出張ですが、新幹線のチケットは私が持っています。直接、東京駅のホームで待ち合わせしましょう。改札ではありません。（鈴木）", "question": "二人は明日、どこで待ち合わせしますか。", "correctAnswer": "東京駅のホーム", "distractors": ["東京駅の改札", "会社", "新幹線の中"], "explanation": "Suzuki specifies '直接、東京駅のホームで待ち合わせしましょう。改札ではありません' (Directly on the platform, not the ticket gate)." },
        { "passage": "【プール利用時間】\n午前：9:00〜12:00\n午後：13:00〜17:00\n夜間：18:00〜21:00\n※12:00〜13:00、17:00〜18:00は休憩時間です。", "question": "12時半にプールで泳げますか。", "correctAnswer": "いいえ、休憩時間だから泳げない", "distractors": ["はい、泳げる", "午前だから泳げる", "夜間だから泳げる"], "explanation": "12:30 falls into the 12:00〜13:00 break time (休憩時間), so you cannot swim." },
        { "passage": "マリアさん\n日本語のスピーチコンテストの時間は、一人3分です。3分を過ぎると、ベルが鳴りますから、そこで終わってください。（先生）", "question": "スピーチは何分話すことができますか。", "correctAnswer": "3分", "distractors": ["5分", "10分", "時間は決まっていない"], "explanation": "The teacher states 'スピーチコンテストの時間は、一人3分です' (The time is 3 minutes per person)." },
        { "passage": "【映画館でのマナー】\n・上映中（見ている時）は、携帯電話の音が出ないようにしてください。\n・前の席を蹴らない（足で叩かない）でください。", "question": "映画を見ている時に、してはいけないことは何ですか。", "correctAnswer": "携帯電話の音を出すこと", "distractors": ["映画を見ること", "ポップコーンを食べること", "トイレに行くこと"], "explanation": "The rule is '携帯電話の音が出ないようにしてください' (Please ensure your cell phone doesn't make a sound)." },
        { "passage": "お父さん\n私、傘を忘れました。今、駅に着きましたが、雨が降っているので帰れません。駅まで迎えに来てください。改札の前で待っています。（息子）", "question": "息子はどこで待っていますか。", "correctAnswer": "駅の改札の前", "distractors": ["駅のトイレの前", "学校の中", "家の前"], "explanation": "The son writes '改札の前で待っています' (I am waiting in front of the ticket gate)." },
        { "passage": "【病院の薬について】\n白い薬：食後に飲む（1日3回）\n赤い薬：痛い時に飲む\n※薬は水で飲んでください。お茶やジュースはだめです。", "question": "赤い薬はいつ飲みますか。", "correctAnswer": "痛い時", "distractors": ["食後", "1日3回", "寝る前"], "explanation": "The instructions map Red medicine (赤い薬) to '痛い時に飲む' (Drink when it hurts)." },
        { "passage": "山田さん\nあしたのミーティングに使う部屋は、2階のA室から3階のB室に変わりました。時間は10時のままです。よろしく。（木村）", "question": "ミーティングの部屋はどうなりましたか。", "correctAnswer": "3階のB室に変わった", "distractors": ["2階のA室のまま", "3階のA室に変わった", "2階のB室に変わった"], "explanation": "The memo says it changed from 2F A Room to '3階のB室に変わりました'." },
        { "passage": "【スーパーのレジ袋】\nレジ袋は1枚5円です。袋が要らない人は、レジでお金を通す前に「袋は要りません」と言ってください。", "question": "袋が要らない人は、いつ言わなければなりませんか。", "correctAnswer": "お金を通す前", "distractors": ["お金を通した後", "店に入った時", "帰る時"], "explanation": "The rule is 'お金を通す前に...と言ってください' (Please say it before scanning/passing the money)." },
        { "passage": "スミスさん\nきのう渡したプリントですが、1番と2番の問題だけやってください。3番と4番はまだ習っていないのでやらなくていいです。（先生）", "question": "スミスさんがやらなくていい問題はどれですか。", "correctAnswer": "3番と4番", "distractors": ["1番と2番", "全部の問題", "1番と3番"], "explanation": "The teacher explicitly says '3番と4番は...やらなくていいです' (You don't have to do number 3 and 4)." },
        { "passage": "【ゴミの捨て方・ビンと缶】\nビンと缶は同じ袋に入れないでください。必ず別の袋に入れて、水曜日の朝に出してください。", "question": "ビンと缶を出す時、気をつけることは何ですか。", "correctAnswer": "別の袋に入れること", "distractors": ["同じ袋に入れること", "火曜日の夜に出すこと", "中を洗うこと"], "explanation": "The instruction is '必ず別の袋に入れて' (Be sure to put them in separate bags)." },
        { "passage": "田中さん\n机の上にあったお菓子、少しいただきました。とても美味しかったです。お礼にコーヒーを置いておきます。飲んでください。（佐藤）", "question": "佐藤さんは田中さんに何をあげましたか。", "correctAnswer": "コーヒー", "distractors": ["お菓子", "お礼の手紙", "お金"], "explanation": "Sato writes 'お礼にコーヒーを置いておきます' (I will leave coffee as a thank you)." },
        { "passage": "【エレベーターの故障（こしょう）について】\n明日、朝10時から昼の12時までエレベーターの点検（チェック）をします。その時間は階段を使ってください。", "question": "エレベーターが使えない時間はいつですか。", "correctAnswer": "朝10時から昼の12時まで", "distractors": ["一日中", "朝10時まで", "昼の12時から夜まで"], "explanation": "The inspection time when it can't be used is '朝10時から昼の12時まで'." },
        { "passage": "木村さん\n今日の午後の会議ですが、急な仕事が入ったので私は行けません。代わりに資料を机に置いておくので、配っておいてください。（部長）", "question": "部長はどうして会議に行けませんか。", "correctAnswer": "急な仕事が入ったから", "distractors": ["病気になったから", "資料がないから", "会議を忘れていたから"], "explanation": "The boss gives the reason: '急な仕事が入ったので私は行けません' (Because urgent work came in, I cannot go)." },
        { "passage": "【アルバイトの休み】\nアルバイトを休む時は、必ず前の日までに店長に電話をしてください。当日の電話はだめです。", "question": "アルバイトを休みたい人はどうしなければなりませんか。", "correctAnswer": "前の日までに電話する", "distractors": ["当日に電話する", "手紙を書く", "休んではいけない"], "explanation": "The rule states '必ず前の日までに店長に電話をしてください' (Must call the manager by the day before)." },
        { "passage": "山田さん\n借りていた自転車、マンションの駐輪場（ちゅうりんじょう）に返しておきました。鍵はポストの中に入れてあります。ありがとう。（鈴木）", "question": "自転車の鍵はどこにありますか。", "correctAnswer": "ポストの中", "distractors": ["駐輪場", "山田さんの部屋", "鈴木さんのポケット"], "explanation": "Suzuki says '鍵はポストの中に入れてあります' (The key is put inside the mailbox)." },
        { "passage": "【食堂からのお知らせ】\n今週の金曜日は、カレーライスが半額（はんがく）の300円になります！\n※うどんやラーメンは普通の値段です。", "question": "今週の金曜日、300円で食べられるのは何ですか。", "correctAnswer": "カレーライス", "distractors": ["うどん", "ラーメン", "すべての料理"], "explanation": "The notice highlights 'カレーライスが半額の300円になります' (Curry rice becomes half price, 300 yen)." },
        { "passage": "マリアさん\n日本語のテストの点数が悪かった人は、明日の放課後（ほうかご）、3階の教室に来てください。もう一度テストをします。（先生）", "question": "明日の放課後、教室に来なければならないのは誰ですか。", "correctAnswer": "テストの点数が悪かった人", "distractors": ["テストの点数が良かった人", "全員", "マリアさんだけ"], "explanation": "The teacher calls for '日本語のテストの点数が悪かった人' (People who got bad scores on the Japanese test)." },
        { "passage": "【アパートの洗濯機（せんたくき）】\n夜の10時から朝の7時までは、洗濯機を使わないでください。音が大きくて近所の迷惑（めいわく）になります。", "question": "洗濯機を使ってはいけない時間はいつですか。", "correctAnswer": "夜10時から朝7時まで", "distractors": ["一日中", "朝7時から夜10時まで", "夜中だけ"], "explanation": "The rule is '夜の10時から朝の7時までは、洗濯機を使わないでください' (Please do not use from 10 PM to 7 AM)." },
        { "passage": "佐藤さん\n今日の飲み会ですが、会費（お金）は一人3,000円です。店に入ったら、まず幹事（かんじ）の私に払ってください。（田中）", "question": "佐藤さんはお金をいつ、誰に払いますか。", "correctAnswer": "店に入ったら、田中に払う", "distractors": ["店を出る時、店員に払う", "店に入る前、店員に払う", "後で、田中に払う"], "explanation": "Tanaka instructs: '店に入ったら、まず幹事の私に払ってください' (When you enter the shop, first pay me, the organizer)." },
        { "passage": "【図書室のパソコン】\n図書室のパソコンは、本を検索（探すこと）するためだけに使ってください。インターネットでゲームや動画を見るのは禁止です。", "question": "図書室のパソコンでしてもいいことは何ですか。", "correctAnswer": "本を探すこと", "distractors": ["ゲームをすること", "動画を見ること", "メールを送ること"], "explanation": "The rule states it is only for searching books: '本を検索するためだけに使ってください'." },
        { "passage": "スミスさん\n明日から寒くなるそうですから、コートを着てきたほうがいいですよ。私の予備（予備）のコートを貸しましょうか？（木村）", "question": "木村さんはスミスさんに何を言っていますか。", "correctAnswer": "コートを貸しましょうか", "distractors": ["コートを貸してください", "コートを買いに行きましょう", "コートは着ないほうがいいです"], "explanation": "Kimura offers: '私の予備のコートを貸しましょうか？' (Shall I lend you my spare coat?)." },
        { "passage": "【駅のロッカー】\n小さいロッカー：300円\n大きいロッカー：500円\n※1日（24時間）の値段です。それより遅れると、もう1日分かかります。", "question": "大きいロッカーを2日使うと、いくらですか。", "correctAnswer": "1,000円", "distractors": ["500円", "600円", "800円"], "explanation": "Large is 500 yen per day. 500 yen x 2 days = 1000 yen." },
        { "passage": "田中さん\n明日返す予定だったカメラですが、今日の夕方に返してもいいですか？会社が終わったら、田中さんのアパートに持っていきます。（鈴木）", "question": "鈴木さんはカメラをいつ返したいですか。", "correctAnswer": "今日の夕方", "distractors": ["明日", "今日の朝", "来週"], "explanation": "Suzuki asks to change the return time: '今日の夕方に返してもいいですか？' (Can I return it this evening?)." },
        { "passage": "【プールのお知らせ】\nプールに入るときは、必ず水着（みずぎ）とキャップ（帽子）を着用してください。Tシャツのままで入ることはできません。", "question": "プールに入る時に着てはいけないものは何ですか。", "correctAnswer": "Tシャツ", "distractors": ["水着", "キャップ（帽子）", "ゴーグル"], "explanation": "The notice says 'Tシャツのままで入ることはできません' (You cannot enter wearing a T-shirt)." },
        { "passage": "木村さん\n今度の週末のハイキングですが、雨の場合は中止（やめ）になります。当日の朝7時に、行くかどうかをみんなにメールで連絡します。（幹事）", "question": "ハイキングに行くかどうかは、いつわかりますか。", "correctAnswer": "当日の朝7時", "distractors": ["前の日の夜", "当日の朝8時", "雨が降った時"], "explanation": "The organizer says '当日の朝7時に、行くかどうかをみんなにメールで連絡します' (On the morning of the event at 7 AM, I will email everyone whether we are going)." },
        { "passage": "【病院の受付（うけつけ）】\n初めて来る人：保険証（ほけんしょう）を出して、問診票（紙）に名前と住所を書いてください。\n2回目からの人：診察券（カード）を出すだけでいいです。", "question": "初めて来た人は、受付で何をしますか。", "correctAnswer": "保険証を出して、紙に名前と住所を書く", "distractors": ["診察券（カード）を出すだけ", "お金を払う", "何もしなくていい"], "explanation": "For first-timers (初めて来る人), the rule is '保険証を出して、問診票に名前と住所を書いてください'." },
        { "passage": "山田さん\n机の上にあった山田さんのペン、少し借りました。私のはインクがなくなってしまったので。会議が終わったらすぐに返します。（佐藤）", "question": "佐藤さんはどうしてペンを借りましたか。", "correctAnswer": "自分のペンのインクがなくなったから", "distractors": ["ペンを忘れたから", "山田さんが貸してくれたから", "会議で使うから"], "explanation": "Sato explains '私のはインクがなくなってしまったので' (Because mine ran out of ink)." },
        { "passage": "【アルバイト募集】\nキッチン（料理を作る）：時給1,000円\nホール（ご飯を運ぶ）：時給900円\n※土日はどちらも時給が100円上がります。", "question": "日曜日にホールで働くと、時給はいくらですか。", "correctAnswer": "1,000円", "distractors": ["900円", "1,100円", "800円"], "explanation": "Hall is usually 900 yen. On weekends (土日) it goes up by 100 yen, making it 1,000 yen." },
        { "passage": "田中さん\n明日の約束ですが、駅の北口ではなく、南口の時計の前にしませんか？北口は人が多くて探すのが大変ですから。（鈴木）", "question": "鈴木さんはどこで待ち合わせをしたいですか。", "correctAnswer": "駅の南口の時計の前", "distractors": ["駅の北口の時計の前", "駅の北口", "交番の前"], "explanation": "Suzuki suggests changing the spot: '南口の時計の前にしませんか？' (Shall we make it in front of the clock at the South Exit?)." },
        { "passage": "【ゴミ収集のお知らせ】\n今週の木曜日は祝日（お休みの日）ですが、燃えるゴミはいつも通り集めます。忘れずに出してください。", "question": "今週の木曜日に燃えるゴミを出してもいいですか。", "correctAnswer": "はい、出してもいい", "distractors": ["いいえ、出してはいけない", "金曜日に出す", "祝日だから休みだ"], "explanation": "The notice clarifies that despite the holiday, '燃えるゴミはいつも通り集めます' (Burnable garbage will be collected as usual)." },
        { "passage": "マリアさん\n来週の日本語のテストですが、漢字の範囲（はんい）が10課から15課までになりました。16課は出ませんから、勉強しなくていいですよ。（先生）", "question": "マリアさんが勉強しなくていいのは何課ですか。", "correctAnswer": "16課", "distractors": ["10課", "15課", "全部"], "explanation": "The teacher explicitly states '16課は出ませんから、勉強しなくていいですよ' (Lesson 16 won't be on it, so you don't have to study it)." },
        { "passage": "【レストランの注文方法】\n1. テーブルの上のタブレット（機械）で好きな料理を選んでください。\n2. 帰る時に、レジでお金を払ってください。", "question": "このレストランでお金を払うのはいつですか。", "correctAnswer": "帰る時", "distractors": ["料理を選ぶ前", "テーブルに座った時", "料理が来た時"], "explanation": "Step 2 states '帰る時に、レジでお金を払ってください' (When going home, pay at the register)." },
        { "passage": "佐藤さん\n今日の会議の場所が、第1会議室から第3会議室に変更になりました。時間は午後2時のままです。みんなに知らせておいてください。（部長）", "question": "会議の場所はどこになりましたか。", "correctAnswer": "第3会議室", "distractors": ["第1会議室", "第2会議室", "場所は変わらない"], "explanation": "The boss writes '第1会議室から第3会議室に変更になりました' (Changed from Meeting Room 1 to Meeting Room 3)." },
        { "passage": "【映画館の食べ物ルール】\n映画館の中で食べてもいいのは、映画館の店で買ったポップコーンと飲み物だけです。外で買ったお菓子は食べないでください。", "question": "映画館の中で食べてもいいものは何ですか。", "correctAnswer": "映画館で買ったポップコーン", "distractors": ["外で買ったお菓子", "外で買ったポップコーン", "何でも食べてもいい"], "explanation": "The rule restricts food to '映画館の店で買ったポップコーンと飲み物だけです' (Only popcorn and drinks bought at the theater's shop)." },
        { "passage": "木村さん\n昨日お借りしたDVDですが、とても面白かったです。明日会社に持っていって返しますね。ありがとうございました。（山田）", "question": "山田さんはDVDをいつ、どこで返しますか。", "correctAnswer": "明日、会社で返す", "distractors": ["今日、会社で返す", "明日、木村さんの家で返す", "今日、木村さんの家で返す"], "explanation": "Yamada states '明日会社に持っていって返しますね' (I'll bring it to the company tomorrow and return it)." },
        { "passage": "【駐輪場（自転車を置く場所）の案内】\nここは学生専用（学生だけ）の駐輪場です。学生以外の人は、駅の前の駐輪場を使ってください。", "question": "この駐輪場を使ってもいいのは誰ですか。", "correctAnswer": "学生だけ", "distractors": ["学生以外の人", "駅に行く人", "誰でもいい"], "explanation": "The notice clearly states '学生専用（学生だけ）の駐輪場です' (This is a bicycle parking lot exclusively for students)." },
        { "passage": "田中さん\n今日の午後、急に雨が降るそうです。もし傘を持っていなかったら、私のロッカーに予備の傘があるので使ってくださいね。（佐藤）", "question": "佐藤さんは田中さんに何を提案していますか。", "correctAnswer": "自分の予備の傘を使っていいということ", "distractors": ["傘を買ってきてほしいということ", "一緒に帰ろうということ", "迎えに来てほしいということ"], "explanation": "Sato offers '私のロッカーに予備の傘があるので使ってくださいね' (I have a spare umbrella in my locker, so please use it)." },
        { "passage": "【図書館の飲食（食べること・飲むこと）ルール】\n図書館の中では、ふたがついている飲み物（ペットボトルなど）だけ飲んでもいいです。食べ物は一切（いっさい）禁止です。", "question": "図書館の中でしてもいいことは何ですか。", "correctAnswer": "ペットボトルの飲み物を飲むこと", "distractors": ["お菓子を食べること", "お弁当を食べること", "ふたがないジュースを飲むこと"], "explanation": "The rule allows only 'ふたがついている飲み物（ペットボトルなど）だけ' (Only drinks with lids like plastic bottles)." },
        { "passage": "スミスさん\n明日のパーティーですが、私は仕事が遅くなるので、8時ごろに行くことになりそうです。料理は私の分も残しておいてくださいね。（木村）", "question": "木村さんはスミスさんに何をお願いしていますか。", "correctAnswer": "自分の分の料理を残しておくこと", "distractors": ["8時まで待っていること", "料理を作っておくこと", "迎えに来ること"], "explanation": "Kimura asks '料理は私の分も残しておいてくださいね' (Please save my portion of the food too)." },
        { "passage": "【コピー機の使い方】\n1. お金を入れます。\n2. 紙のサイズ（大きさ）を選びます。\n3. 「スタート」のボタンを押します。", "question": "お金を入れた後、次に何をしますか。", "correctAnswer": "紙のサイズを選ぶ", "distractors": ["スタートのボタンを押す", "お金をもう一度入れる", "コピーを取り出す"], "explanation": "After Step 1 (insert money), Step 2 is '紙のサイズ（大きさ）を選びます' (Choose the paper size)." },
        { "passage": "山田さん\n机の上に新しい名刺（めいし）を置いておきました。前の名刺は電話番号が間違っていたので、使わないで捨ててください。（総務部）", "question": "山田さんは前の名刺をどうしなければなりませんか。", "correctAnswer": "捨てる", "distractors": ["使う", "総務部に返す", "机の上に置く"], "explanation": "The memo instructs '使わないで捨ててください' (Do not use them and throw them away)." },
        { "passage": "【スポーツ大会の中止について】\n明日のスポーツ大会は、台風（たいふう）が来るため中止になります。来週の土曜日に延期（日にちを変えること）します。", "question": "スポーツ大会はどうして中止になりましたか。", "correctAnswer": "台風が来るから", "distractors": ["雨が降るから", "人が集まらないから", "グラウンドが使えないから"], "explanation": "The notice states the cause: '台風が来るため中止になります' (Canceled because a typhoon is coming)." },
        { "passage": "佐藤さん\n明日のランチですが、私が予約しておきます。駅前のイタリアンか、新しいお寿司屋さんのどちらがいいか、今日の夜までに教えてください。（田中）", "question": "佐藤さんは今日の夜までに何をしなければなりませんか。", "correctAnswer": "どちらの店がいいか田中に教える", "distractors": ["店を予約する", "お金を払う", "ランチを食べる"], "explanation": "Tanaka asks Sato to tell him which restaurant is better by tonight: 'どちらがいいか、今日の夜までに教えてください'." },
        { "passage": "【図書館のWi-Fiについて】\n図書館の無料Wi-Fiは、1回60分使えます。1日に何回でも使うことができますが、パスワードは毎日変わります。", "question": "図書館のWi-Fiについて、正しいものはどれですか。", "correctAnswer": "1日に何回でも使える", "distractors": ["1日に1回だけ使える", "パスワードはずっと同じだ", "1回に何時間でも使える"], "explanation": "The notice explicitly states '1日に何回でも使うことができます' (You can use it any number of times a day)." },
        { "passage": "田中さん\n明日のハイキングは、朝8時に駅の東口（ひがしぐち）に集合です。西口（にしぐち）は工事中で通れないので注意してください。（幹事）", "question": "明日の朝、どこに集まりますか。", "correctAnswer": "駅の東口", "distractors": ["駅の西口", "駅の中", "公園"], "explanation": "The organizer specifies '朝8時に駅の東口に集合です' (Gather at the East Exit at 8 AM)." },
        { "passage": "【カフェ・モーニングセット】\n時間：午前7:00〜10:30\nAセット（パンとコーヒー）：400円\nBセット（パンとサラダとコーヒー）：500円\n※紅茶に変える場合は+50円です。", "question": "Bセットの飲み物を紅茶に変えると、いくらですか。", "correctAnswer": "550円", "distractors": ["450円", "500円", "600円"], "explanation": "B set is 500 yen. Changing to tea is +50 yen. 500 + 50 = 550 yen." },
        { "passage": "佐藤さん\n私が貸した英語の辞書ですが、明日の授業で使いたいので、今日の夕方までに返してくれませんか。私の机の上に置いてください。（木村）", "question": "佐藤さんは今日の夕方までに何をしなければなりませんか。", "correctAnswer": "辞書を木村さんの机の上に返す", "distractors": ["辞書を明日返す", "新しい辞書を買う", "木村さんに英語を教える"], "explanation": "Kimura requests '今日の夕方までに返してくれませんか。私の机の上に置いてください'." },
        { "passage": "【スポーツジムからのお知らせ】\nタオルや靴は、毎月1,000円でジムのロッカーに置いておくことができます。毎回持ってくる必要がありません。", "question": "ジムのロッカーに物を置いておくためにはどうしますか。", "correctAnswer": "毎月1,000円払う", "distractors": ["毎回1,000円払う", "無料で置いておける", "毎日持ってくる"], "explanation": "The notice states '毎月1,000円でジムのロッカーに置いておくことができます' (You can leave things for 1,000 yen per month)." },
        { "passage": "山田さん\n今週の金曜日の飲み会ですが、山田さんはお酒を飲まないので、会費は他の人より1,000円安い3,000円でいいですよ。（鈴木）", "question": "山田さんは金曜日にいくら払いますか。", "correctAnswer": "3,000円", "distractors": ["1,000円", "4,000円", "2,000円"], "explanation": "Suzuki clearly states Yamada's fee is '3,000円でいいですよ' (3,000 yen is fine)." },
        { "passage": "【アパートの駐輪場（自転車置き場）】\n自転車を捨てる時は、自分で「粗大（そだい）ゴミ」の会社に電話をしてください。駐輪場にそのまま置いてはいけません。", "question": "自転車を捨てたい時はどうしますか。", "correctAnswer": "ゴミの会社に電話する", "distractors": ["駐輪場にそのまま置く", "アパートの管理人に電話する", "駅の前に置く"], "explanation": "The rule is '自分で「粗大ゴミ」の会社に電話をしてください' (Call the oversized garbage company yourself)." },
        { "passage": "お母さんへ\n今日の晩ご飯は要りません。友達と食べてから帰ります。夜9時ごろになると思います。お風呂は入るので、お湯を残しておいてください。（息子）", "question": "お母さんがしなければならないことは何ですか。", "correctAnswer": "お風呂のお湯を残しておくこと", "distractors": ["晩ご飯を作ること", "夜9時に迎えに行くこと", "息子とご飯を食べること"], "explanation": "The son requests 'お風呂は入るので、お湯を残しておいてください' (Please leave the bathwater)." },
        { "passage": "【銀行のATMのご案内】\n平日：午前8:00〜午後9:00\n土日：午前9:00〜午後5:00\n※午後6時以降はお金を引き出すのに手数料（110円）がかかります。", "question": "平日の夜8時にお金を引き出すと、どうなりますか。", "correctAnswer": "手数料が110円かかる", "distractors": ["手数料はかからない", "ATMは使えない", "次の日にお金が出る"], "explanation": "Night 8 PM is after 6 PM (午後6時以降), so a fee is required ('手数料がかかります')." },
        { "passage": "スミスさん\n図書館で予約していた本が用意できました。1週間以内（来週の木曜日まで）に取りに来てください。過ぎるとキャンセルになります。（図書館）", "question": "スミスさんはいつまでに本を取りに行かなければなりませんか。", "correctAnswer": "来週の木曜日まで", "distractors": ["今週の木曜日まで", "来週の金曜日まで", "今日中"], "explanation": "The notice specifies '1週間以内（来週の木曜日まで）に取りに来てください' (By next Thursday)." },
        { "passage": "【スーパーのレジで】\nクレジットカードとスマートフォンの電子マネーが使えます。でも、商品券（チケット）と一緒に使うことはできません。", "question": "このスーパーでできない払い方はどれですか。", "correctAnswer": "商品券とクレジットカードを一緒に使うこと", "distractors": ["クレジットカードだけで払うこと", "電子マネーだけで払うこと", "現金で払うこと"], "explanation": "The rule states '商品券（チケット）と一緒に使うことはできません' (Cannot be used together with gift certificates)." },
        { "passage": "木村さん\nあしたの映画ですが、私が少し遅れそうです。チケットは木村さんの分も私のスマートフォンの中にあるので、映画館のロビーで待っていてください。（山田）", "question": "木村さんは明日、どこで待ちますか。", "correctAnswer": "映画館のロビー", "distractors": ["駅の前", "映画館の中の席", "山田さんの家"], "explanation": "Yamada tells Kimura '映画館のロビーで待っていてください' (Please wait in the movie theater lobby)." },
        { "passage": "【市民プールの利用料金】\n大人：500円\n子供（中学生以下）：200円\n※夕方5時からは、大人は300円になります。", "question": "大人が夜の6時にプールへ行くと、いくらですか。", "correctAnswer": "300円", "distractors": ["500円", "200円", "400円"], "explanation": "At 6 PM, which is after 5 PM, the adult price drops to 300 yen ('夕方5時からは、大人は300円になります')." },
        { "passage": "田中さん\nお疲れ様です。明日の出張ですが、新幹線の中で食べるお弁当は駅で買いますか？それとも私がスーパーで買っておきましょうか？返事をください。（鈴木）", "question": "鈴木さんは田中に何を聞いていますか。", "correctAnswer": "お弁当をどこで買うか", "distractors": ["新幹線のチケットを買うか", "出張に誰が行くか", "明日何時に集まるか"], "explanation": "Suzuki asks '新幹線の中で食べるお弁当は駅で買いますか？それとも私がスーパーで買っておきましょうか？'." },
        { "passage": "【美容院（髪を切る店）】\nカット：3,000円\nカットとカラー：6,000円\n※初めて来る人は、どのメニューも1,000円安くなります。", "question": "初めてこの店でカットだけをする人は、いくらですか。", "correctAnswer": "2,000円", "distractors": ["3,000円", "5,000円", "1,000円"], "explanation": "Cut is 3,000 yen. A first-timer gets 1,000 yen off, making it 2,000 yen." },
        { "passage": "山田さん\n借りていた自転車の空気が少なくなっていたので、自転車屋で空気を入れておきました。パンクはしていませんよ。（佐藤）", "question": "佐藤さんは自転車を返す前に何をしましたか。", "correctAnswer": "自転車の空気を入れた", "distractors": ["自転車を修理した", "自転車を洗った", "新しい自転車を買った"], "explanation": "Sato notes '自転車屋で空気を入れておきました' (I put air in it at the bicycle shop)." },
        { "passage": "【ホテルの温泉】\n時間：午後3時〜夜12時、午前5時〜午前9時\n※朝の9時から午後3時までは、掃除のため入ることができません。", "question": "ホテルの温泉に入れない時間はいつですか。", "correctAnswer": "午前9時から午後3時まで", "distractors": ["午後3時から夜12時まで", "午前5時から午前9時まで", "夜12時から午前5時まで"], "explanation": "The notice explicitly states '朝の9時から午後3時までは、掃除のため入ることができません'." },
        { "passage": "お父さんへ\n私の部屋のエアコンを消すのを忘れました。電気代が高くなるので、気づいたら消しておいてください。お願いします。（花子）", "question": "花子さんはお父さんに何をお願いしていますか。", "correctAnswer": "エアコンを消すこと", "distractors": ["電気代を払うこと", "部屋を掃除すること", "エアコンを修理すること"], "explanation": "Hanako requests '気づいたら消しておいてください' regarding the AC." },
        { "passage": "【パン屋「こむぎ」】\n毎週月曜日はポイントが2倍（2つ）になります。\n雨の日は、ポイントが3倍（3つ）になります！", "question": "雨が降っている火曜日にパンを買うと、ポイントはどうなりますか。", "correctAnswer": "3倍になる", "distractors": ["2倍になる", "変わらない", "5倍になる"], "explanation": "Because it is raining, the rainy day rule applies ('雨の日は、ポイントが3倍になります'), regardless of the day." },
        { "passage": "スミスさん\n明日の日本語の授業は、先生が病気のため休みになりました。代わりに、来週の水曜日に今日の分の授業をします。（事務室）", "question": "明日の日本語の授業はどうなりましたか。", "correctAnswer": "休みになった", "distractors": ["先生が変わった", "時間が変わった", "教室が変わった"], "explanation": "The office states '明日の日本語の授業は、先生が病気のため休みになりました' (Tomorrow's class is canceled)." },
        { "passage": "【ゴミ出しの注意】\nガラスのお皿やコップを捨てる時は、紙で包んで「キケン（危ない）」と赤いペンで書いて出してください。", "question": "ガラスのコップを捨てる時、何で包まなければなりませんか。", "correctAnswer": "紙", "distractors": ["ビニール袋", "布", "タオル"], "explanation": "The rule says '紙で包んで...出してください' (Wrap it in paper and put it out)." },
        { "passage": "木村さん\n今日の会議の資料ですが、私の分も一緒にコピーしておいてくれませんか。私は少し遅れて会議室に入ります。（田中）", "question": "田中さんは木村さんに何をお願いしましたか。", "correctAnswer": "田中さんの分の資料もコピーすること", "distractors": ["会議に遅れて行くこと", "資料を作ること", "会議室の場所を教えてもらうこと"], "explanation": "Tanaka asks '私の分も一緒にコピーしておいてくれませんか' (Could you copy my portion together with yours?)." },
        { "passage": "【クリーニング屋のお知らせ】\n冬のコートやセーターのクリーニングは、4月末までに出すと20%安くなります。5月からは普通の値段になります。", "question": "冬のコートを安くクリーニングしたい時、いつまでに出しますか。", "correctAnswer": "4月末まで", "distractors": ["5月から", "5月末まで", "いつでもいい"], "explanation": "The promotion is valid '4月末までに出すと' (If you drop it off by the end of April)." },
        { "passage": "山田さん\n今週の金曜日に食事に行きませんか。駅前の新しい焼き肉屋に行きたいです。木村さんも一緒に行きますよ。（佐藤）", "question": "佐藤さんは山田さんを何に誘っていますか。", "correctAnswer": "金曜日に焼き肉を食べに行くこと", "distractors": ["木曜日に飲み会に行くこと", "木村さんの家で食事をすること", "一緒に料理を作ること"], "explanation": "Sato invites Yamada saying '今週の金曜日に食事に行きませんか。駅前の新しい焼き肉屋に...'." },
        { "passage": "【バスの定期券（1ヶ月乗り放題のチケット）】\n大人：10,000円\n学生：7,000円\n※定期券を買う時は、必ず写真が1枚必要です。", "question": "学生が定期券を買う時、7,000円と一緒に何を出さなければなりませんか。", "correctAnswer": "写真1枚", "distractors": ["学生証", "パスポート", "10,000円"], "explanation": "The note states '定期券を買う時は、必ず写真が1枚必要です' (1 photo is absolutely necessary)." },
        { "passage": "田中さん\n社長が田中さんを探していました。急ぎの用事だそうです。このメモを見たら、すぐに社長の部屋へ行ってください。（鈴木）", "question": "田中さんはこのメモを見たら、すぐに何をしなければなりませんか。", "correctAnswer": "社長の部屋に行く", "distractors": ["社長に電話する", "鈴木さんに電話する", "仕事を急いで終わらせる"], "explanation": "Suzuki writes 'すぐに社長の部屋へ行ってください' (Go to the president's room immediately)." },
        { "passage": "【本屋のイベント】\n今週の土曜日、午後2時から絵本（えほん）を読むイベントがあります。子供向けですが、大人も参加できます。無料です。", "question": "このイベントについて正しいものはどれですか。", "correctAnswer": "大人もお金を払わずに参加できる", "distractors": ["大人だけ参加できる", "子供はお金を払う", "土曜日の午前中にある"], "explanation": "The notice says '子供向けですが、大人も参加できます。無料です' (Aimed at kids, but adults can join. Free)." },
        { "passage": "マリアさん\n来週のテストですが、鉛筆ではなく、必ず黒いボールペンで答えを書いてください。間違えた時は修正テープ（白く消すもの）を使っていいです。（先生）", "question": "テストの答えは何で書かなければなりませんか。", "correctAnswer": "黒いボールペン", "distractors": ["鉛筆", "青いボールペン", "何でもいい"], "explanation": "The teacher states '必ず黒いボールペンで答えを書いてください' (Must write answers with a black ballpoint pen)." },
        { "passage": "【映画館の割引】\n・レイトショー（夜8時以降）：1,300円\n・ペア割（2人で一緒に見る）：2人で2,800円\n※割引を2つ一緒に使うことはできません。", "question": "2人で夜9時に映画を見ます。一番安い払い方はどれですか。", "correctAnswer": "レイトショーで一人1,300円ずつ払う", "distractors": ["ペア割で2,800円払う", "2つ一緒に使って安くする", "普通にお金を払う"], "explanation": "Late show is 1,300 x 2 = 2,600 yen, which is cheaper than the Pair Discount (2,800 yen)." },
        { "passage": "お母さんへ\n私の部屋の窓を開けたまま学校に来てしまいました。雨が降るかもしれないので、窓を閉めておいてください。（娘より）", "question": "娘はお母さんに何をお願いしましたか。", "correctAnswer": "自分の部屋の窓を閉めること", "distractors": ["学校に傘を持ってくること", "部屋を掃除すること", "窓を開けること"], "explanation": "The daughter asks '窓を閉めておいてください' (Please close the window)." },
        { "passage": "【郵便局のお届け通知】\n荷物をお届けしましたが、お留守（家にいない）でした。\n明日、もう一度お届けします。時間は午後6時から8時の間です。", "question": "荷物はいつ届きますか。", "correctAnswer": "明日の午後6時から8時の間", "distractors": ["今日の午後6時から8時の間", "明日の午前中", "明後日"], "explanation": "The notice says '明日、もう一度お届けします。時間は午後6時から8時の間です'." },
        { "passage": "木村さん\n明日お借りする予定だった車ですが、私の車が直ったので借りなくてもよくなりました。準備してくれていたのに、すみません。（佐藤）", "question": "佐藤さんは木村さんの車をどうしますか。", "correctAnswer": "借りない", "distractors": ["明日借りる", "今日借りる", "木村さんに車を貸す"], "explanation": "Sato says '借りなくてもよくなりました' (I no longer need to borrow it)." },
        { "passage": "【アパートの駐輪場】\n新しい自転車を買った人は、管理人に言って新しいシールをもらってください。古い自転車を捨てる時は、自分でシールを剥がして（はがして）ください。", "question": "古い自転車を捨てる時、どうしなければなりませんか。", "correctAnswer": "自分でシールを剥がす", "distractors": ["管理人に捨てるように言う", "新しいシールを貼る", "何もしなくていい"], "explanation": "The rule is '自分でシールを剥がして（はがして）ください' (Peel off the sticker yourself)." },
        { "passage": "田中さん\n今日休んでいる鈴木さんに、明日の仕事の時間をメールで伝えておいてくれませんか。私はこれから会議なので電話できません。（部長）", "question": "田中さんがしなければならないことは何ですか。", "correctAnswer": "鈴木さんに明日の時間をメールする", "distractors": ["鈴木さんに電話する", "部長にメールする", "会議の準備をする"], "explanation": "The boss asks '鈴木さんに、明日の仕事の時間をメールで伝えておいてくれませんか'." },
        { "passage": "【コンサートの注意】\nホールの中での飲食（食べたり飲んだりすること）は禁止です。飲み物はロビーで飲んでください。ガムや飴（あめ）もだめです。", "question": "ホールの中でしてもいいことは何ですか。", "correctAnswer": "ホールの中では何も食べたり飲んだりしてはいけない", "distractors": ["ガムを噛むこと", "お茶を飲むこと", "飴を食べること"], "explanation": "The rule states 'ホールの中での飲食は禁止です...ガムや飴もだめです' (Food/drinks inside are prohibited... gum and candy too)." },
        { "passage": "スミスさん\n昨日スーパーでスミスさんの傘を間違えて持って帰ってしまいました。本当にごめんなさい。今日、学校に持っていきます。（リー）", "question": "リーさんはどうして謝って（あやまって）いますか。", "correctAnswer": "間違えてスミスさんの傘を持って帰ったから", "distractors": ["スミスさんの傘を壊したから", "傘を忘れたから", "学校に遅れたから"], "explanation": "Lee apologizes saying 'スミスさんの傘を間違えて持って帰ってしまいました' (I accidentally took your umbrella home)." },
        { "passage": "【アルバイトの給料（お金）について】\n給料は毎月15日に銀行に振り込みます（入れます）。15日が土曜日や日曜日の時は、その前の金曜日に振り込みます。", "question": "今月の15日は日曜日です。給料はいつ銀行に入りますか。", "correctAnswer": "13日の金曜日", "distractors": ["15日の日曜日", "16日の月曜日", "14日の土曜日"], "explanation": "If the 15th is Sunday, it is paid on the preceding Friday ('その前の金曜日に振り込みます')." },
        { "passage": "山田さん\n今日の午後の打ち合わせですが、山田さんの席ではなく、1階のロビーでやりませんか。資料を広げたいので、広いテーブルを使いたいです。（佐藤）", "question": "佐藤さんはどこで打ち合わせをしたいですか。", "correctAnswer": "1階のロビー", "distractors": ["山田さんの席", "佐藤さんの席", "会議室"], "explanation": "Sato suggests '1階のロビーでやりませんか' (Shall we do it in the 1st floor lobby?)." },
        { "passage": "【電車の遅れについて】\n前の駅で事故があったため、現在電車は20分遅れています。お急ぎの人は、バスかタクシーを使ってください。", "question": "急いでいる人はどうすればいいですか。", "correctAnswer": "バスかタクシーを使う", "distractors": ["電車を20分待つ", "歩いて行く", "次の駅まで走る"], "explanation": "The notice advises 'お急ぎの人は、バスかタクシーを使ってください' (Those in a hurry, please use a bus or taxi)." },
        { "passage": "お母さん\n今日の夜は友達と映画を見てから帰るので、晩ご飯はいらないと言いましたが、やっぱり家で食べます。作っておいてください。（息子）", "question": "今日の息子の晩ご飯はどうなりますか。", "correctAnswer": "家で食べるのでお母さんが作る", "distractors": ["友達と映画館で食べる", "外で食べてから帰る", "晩ご飯は食べない"], "explanation": "The son changes his mind: 'やっぱり家で食べます。作っておいてください' (Actually, I will eat at home. Please make it)." },
        { "passage": "【ホテルのクリーニングサービス】\n朝9時までにフロント（受付）に服を出すと、その日の夜7時に綺麗になって戻ってきます。9時より後は次の日になります。", "question": "今日の夜7時に服を受け取りたいです。いつ出しますか。", "correctAnswer": "今日の朝9時まで", "distractors": ["今日の夜7時まで", "明日の朝9時まで", "今日の午後"], "explanation": "The rule is '朝9時までに...出すと、その日の夜7時に...戻ってきます' (If put out by 9 AM, it returns at 7 PM that day)." },
        { "passage": "田中さん\n明日の約束ですが、風邪をひいてしまったので、来週に変更してもらえませんか。また元気になったらこちらから連絡します。（鈴木）", "question": "明日の約束はどうなりましたか。", "correctAnswer": "鈴木さんが風邪をひいたので来週になった", "distractors": ["田中さんが風邪をひいたので来週になった", "予定通り明日会う", "中止になって二度と会わない"], "explanation": "Suzuki asks '来週に変更してもらえませんか' (Could we change it to next week?) due to a cold." },
        { "passage": "【スポーツジムの休み】\n毎月第2・第4月曜日はお休みです。\n※お盆（8月13日〜15日）と、お正月（12月31日〜1月3日）も特別に休みになります。", "question": "このジムがいつも休むのはいつですか。", "correctAnswer": "第2・第4月曜日", "distractors": ["毎週月曜日", "毎週日曜日", "第1・第3月曜日"], "explanation": "The regular closing days are '毎月第2・第4月曜日' (The 2nd and 4th Mondays of every month)." },
        { "passage": "木村さん\n私が貸した傘ですが、明日急に使うことになったので、明日の朝一番で私の席に返しておいてください。お願いします。（山田）", "question": "木村さんはいつ傘を返さなければなりませんか。", "correctAnswer": "明日の朝一番", "distractors": ["今日の夜", "明日の夕方", "来週"], "explanation": "Yamada requests '明日の朝一番で私の席に返しておいてください' (Please return it to my desk first thing tomorrow morning)." },
        { "passage": "【スーパーのポイントカード】\nカードを忘れた場合、後からポイントをつけることはできません。必ずお金を払う前にレジでカードを出してください。", "question": "カードを忘れて買い物をした時、どうなりますか。", "correctAnswer": "ポイントはもらえない", "distractors": ["後でポイントがもらえる", "買い物ができない", "罰金を払う"], "explanation": "The rule states 'カードを忘れた場合、後からポイントをつけることはできません' (If forgotten, points cannot be added later)." },
        { "passage": "佐藤さん\n今日の会議の資料、とても分かりやすかったです。ただ、最後のページのグラフの数字だけ少し古いので、明日の朝までに直しておいてください。（部長）", "question": "佐藤さんが直さなければならないのはどこですか。", "correctAnswer": "最後のページのグラフの数字", "distractors": ["資料の全部", "最初のページのグラフ", "分かりにくいところ全部"], "explanation": "The boss points out '最後のページのグラフの数字だけ少し古いので、明日の朝までに直しておいてください'." },
        { "passage": "【携帯電話の修理】\n画面が割れた場合：修理に約1週間かかります。\nバッテリーの交換：お店で1時間で終わります。", "question": "バッテリーを新しくしたい時、どのくらい待ちますか。", "correctAnswer": "1時間", "distractors": ["1週間", "1日", "すぐにはできない"], "explanation": "For battery exchange (バッテリーの交換), it says 'お店で1時間で終わります' (It finishes in 1 hour at the shop)." },
        { "passage": "マリアさん\n来週のパーティーですが、ピザを3枚頼んでおきました。飲み物はマリアさんが買ってくると言っていましたね。楽しみにしています。（スミス）", "question": "マリアさんがパーティーのために準備するものは何ですか。", "correctAnswer": "飲み物", "distractors": ["ピザ3枚", "ケーキ", "何もしなくていい"], "explanation": "Smith confirms '飲み物はマリアさんが買ってくると言っていましたね' (You said you'd buy the drinks, right?)." },
        { "passage": "【図書館でのコピー】\n図書館の本はコピー機でコピーできますが、ノートや手紙など、自分の持ってきたものをコピーすることはできません。", "question": "図書館のコピー機でコピーできるものは何ですか。", "correctAnswer": "図書館の本", "distractors": ["自分のノート", "自分の手紙", "図書館の本もできない"], "explanation": "The rule explicitly states '図書館の本はコピー機でコピーできますが...自分の持ってきたものをコピーすることはできません'." },
        { "passage": "お父さんへ\n私の自転車のタイヤに空気が入っていません。明日学校に乗っていきたいので、今日の夜、空気を入れておいてくれませんか。（息子）", "question": "お父さんは今日の夜、何をしなければなりませんか。", "correctAnswer": "自転車のタイヤに空気を入れる", "distractors": ["自転車を直す", "新しい自転車を買う", "息子を車で学校へ送る"], "explanation": "The son asks '今日の夜、空気を入れておいてくれませんか' (Could you put air in it tonight?)." },
        { "passage": "【食堂のお弁当】\n肉弁当：500円\n魚弁当：400円\n※お茶を一緒に買うと、50円安くなります。", "question": "肉弁当とお茶を買うと、いくら安くなりますか。", "correctAnswer": "50円", "distractors": ["100円", "安くならない", "500円"], "explanation": "The notice explicitly states 'お茶を一緒に買うと、50円安くなります' (If you buy tea together, it becomes 50 yen cheaper)." },
        { "passage": "山田さん\n今日の会議室は、2階ではなく3階の部屋になりました。時間は午後1時のままです。（木村）", "question": "今日の会議はどこでありますか。", "correctAnswer": "3階の部屋", "distractors": ["2階の部屋", "午後1時", "場所は変わらない"], "explanation": "Kimura writes '2階ではなく3階の部屋になりました' (It is not the 2nd floor, but the 3rd floor room)." },
        { "passage": "【アパートのゴミ】\nビンと缶（かん）は、毎週水曜日の朝9時までに出してください。夜は出さないでください。", "question": "ビンと缶はいつ出しますか。", "correctAnswer": "水曜日の朝9時まで", "distractors": ["水曜日の夜", "木曜日の朝9時", "いつでもいい"], "explanation": "The rule is '毎週水曜日の朝9時までに出してください' (Please put them out by 9 AM every Wednesday)." },
        { "passage": "田中さん\n明日貸す予定だった本ですが、私が家に忘れてしまいました。明後日必ず学校に持っていきます。（佐藤）", "question": "佐藤さんは本をいつ田中に渡しますか。", "correctAnswer": "明後日", "distractors": ["明日", "今日", "来週"], "explanation": "Sato forgot the book and says '明後日必ず学校に持っていきます' (I will definitely bring it to school the day after tomorrow)." },
        { "passage": "【病院の休み】\n日曜日と祝日はお休みです。\n※今週の木曜日は、先生が学会（かいぎ）に行くため、午後から休みになります。", "question": "今週の木曜日の午後、病院に行ってもいいですか。", "correctAnswer": "いいえ、休みだから行けない", "distractors": ["はい、行ける", "午前中なら休みだ", "一日中休みだ"], "explanation": "The special note says '木曜日は...午後から休みになります' (Thursday will be closed from the afternoon)." },
        { "passage": "お母さん\n今日の夜は、友達とご飯を食べてから帰るね。9時ごろになるよ。晩ご飯は作らなくていいよ。（息子）", "question": "お母さんは今日の夕方、何をしますか。", "correctAnswer": "息子の晩ご飯を作らない", "distractors": ["息子の晩ご飯を作る", "息子を迎えに行く", "夜9時に出かける"], "explanation": "The son clearly states '晩ご飯は作らなくていいよ' (You don't need to make dinner)." },
        { "passage": "【映画館】\n大人：1800円\n学生：1500円\n子供：1000円\n※夜8時以降の映画は、大人は1300円になります。", "question": "大人が夜9時に映画を見るといくらですか。", "correctAnswer": "1300円", "distractors": ["1800円", "1500円", "1000円"], "explanation": "Night 9 PM is after 8 PM, so the adult price drops to 1300 yen ('夜8時以降...大人は1300円')." },
        { "passage": "鈴木さん\n私が注文した赤いペンが3本届いたら、私の机の引き出しに入れておいてください。（山田）", "question": "鈴木さんは赤いペンをどこに入れますか。", "correctAnswer": "山田さんの机の引き出し", "distractors": ["鈴木さんの机の引き出し", "カバンの中", "会議室"], "explanation": "Yamada asks '私の机の引き出しに入れておいてください' (Please put them in my desk drawer)." },
        { "passage": "【クリーニング屋】\nズボン：500円\nスカート：600円\n※金曜日は全部10%安くなります。", "question": "金曜日にクリーニングを出すとどうなりますか。", "correctAnswer": "普通より安くなる", "distractors": ["普通より高くなる", "値段は変わらない", "ズボンだけ安くなる"], "explanation": "On Friday, everything gets 10% cheaper ('金曜日は全部10%安くなります')." },
        { "passage": "スミスさん\nあしたのハイキングは、雨が降るそうなので来週の日曜日に変更します。時間は同じです。（先生）", "question": "ハイキングはいつになりましたか。", "correctAnswer": "来週の日曜日", "distractors": ["明日", "今週の日曜日", "中止になった"], "explanation": "The teacher states '来週の日曜日に変更します' (Changed to next Sunday)." },
        { "passage": "【図書館・CDの貸し出し】\n一人2枚まで借りられます。期間は1週間です。\n※本は2週間借りられます。", "question": "CDはいつまでに返さなければなりませんか。", "correctAnswer": "1週間後", "distractors": ["2週間後", "3日後", "明日"], "explanation": "The loan period for CDs is 1 week ('期間は1週間です')." },
        { "passage": "木村さん\n今日の飲み会、私は少し遅れます。仕事が終わってから行くので、7時半には着くと思います。先に始めていてください。（佐藤）", "question": "佐藤さんは何時ごろ飲み会に来ますか。", "correctAnswer": "7時半", "distractors": ["7時", "8時", "行かない"], "explanation": "Sato writes '7時半には着くと思います' (I think I will arrive at 7:30)." },
        { "passage": "【バス料金】\n大人：220円\n子供：110円\n※ICカードで払うと、大人は215円になります。", "question": "大人がICカードでバスに乗るといくらですか。", "correctAnswer": "215円", "distractors": ["220円", "110円", "200円"], "explanation": "The card discount lowers the adult fare to 215 yen ('大人は215円になります')." },
        { "passage": "お父さん\n私、自転車の鍵をなくしてしまいました。駅の駐輪場に自転車を置いています。明日、予備（予備）の鍵を持ってきてください。（花子）", "question": "花子さんはお父さんに何をお願いしましたか。", "correctAnswer": "予備の鍵を持ってくること", "distractors": ["新しい自転車を買うこと", "駅まで迎えに来ること", "駐輪場のお金を払うこと"], "explanation": "Hanako asks '予備の鍵を持ってきてください' (Please bring the spare key)." },
        { "passage": "【スーパーのレジ袋】\nレジ袋は1枚5円です。袋が要らない人は、この緑色のカードをカゴに入れてください。", "question": "袋が要らない人はどうしますか。", "correctAnswer": "緑色のカードをカゴに入れる", "distractors": ["5円払う", "レジ袋をカゴに入れる", "何もしない"], "explanation": "The instruction is '袋が要らない人は、この緑色のカードをカゴに入れてください'." },
        { "passage": "田中さん\n明日の約束ですが、1時に駅前でしたね。12時半でもいいですか？少し早く終わらせたい用事があるので。（鈴木）", "question": "鈴木さんは明日の約束を何時にしたいですか。", "correctAnswer": "12時半", "distractors": ["1時", "1時半", "12時"], "explanation": "Suzuki asks '12時半でもいいですか？' (Is 12:30 okay?)." },
        { "passage": "【ホテルの朝食】\n時間：午前6:30〜9:30\n場所：1階レストラン\n※部屋に朝食を持っていくことはできません。", "question": "朝食はどこで食べなければなりませんか。", "correctAnswer": "1階レストラン", "distractors": ["自分の部屋", "ホテルの外", "どこでもいい"], "explanation": "The notice says breakfast is at the 1st floor restaurant and '部屋に朝食を持っていくことはできません'." },
        { "passage": "山田さん\n借りていたペンですが、インクがなくなってしまったので、同じ新しいペンを買って机の上に置いておきました。ごめんなさい。（佐藤）", "question": "佐藤さんはペンの代わりに何を置きましたか。", "correctAnswer": "新しい同じペン", "distractors": ["インクのないペン", "違うペン", "新しいノート"], "explanation": "Sato writes '同じ新しいペンを買って机の上に置いておきました' (I bought the same new pen and left it on the desk)." },
        { "passage": "【ジムの休み】\n毎月第2月曜日が休みです。\n※ただし、月曜日が祝日の時は、火曜日が休みになります。", "question": "第2月曜日が祝日の時、ジムの休みはいつになりますか。", "correctAnswer": "火曜日", "distractors": ["月曜日", "水曜日", "休みはなくなる"], "explanation": "The special rule states '月曜日が祝日の時は、火曜日が休みになります'." },
        { "passage": "マリアさん\n来週の日本語の授業は、教室が変わります。102教室ではなく、205教室です。時間は同じです。（先生）", "question": "来週の日本語の授業はどこでありますか。", "correctAnswer": "205教室", "distractors": ["102教室", "202教室", "105教室"], "explanation": "The teacher states the new room is '205教室です'." },
        { "passage": "【公園のルール】\n・自転車に入ってはいけません。\n・犬の散歩はできますが、フン（ゴミ）は必ず持って帰ってください。", "question": "公園でしてもいいことは何ですか。", "correctAnswer": "犬の散歩", "distractors": ["自転車に乗ること", "ゴミを捨てること", "花を折ること"], "explanation": "The rules explicitly allow dog walking: '犬の散歩はできますが...'." },
        { "passage": "スミスさん\nあしたのパーティーの料理ですが、スミスさんはピザをお願いします。私はサラダと飲み物を買っていきます。（リー）", "question": "スミスさんは何を持っていきますか。", "correctAnswer": "ピザ", "distractors": ["サラダ", "飲み物", "サラダと飲み物"], "explanation": "Lee tells Smith 'スミスさんはピザをお願いします' (Smith, please handle the pizza)." },
        { "passage": "【郵便局のATM】\n平日：8:00〜20:00\n土日・祝日：9:00〜17:00", "question": "日曜日の夕方6時にATMを使いたいですが、使えますか。", "correctAnswer": "いいえ、使えません", "distractors": ["はい、使えます", "平日なら使えます", "朝なら使えます"], "explanation": "On weekends (土日), the ATM closes at 17:00 (5 PM). 6 PM is too late." },
        { "passage": "木村さん\n私がお願いしたコピーですが、20枚ではなく、30枚にしてください。人が増えたので、足りなくなりました。（田中）", "question": "木村さんはコピーを何枚しなければなりませんか。", "correctAnswer": "30枚", "distractors": ["20枚", "10枚", "50枚"], "explanation": "Tanaka corrects the number: '20枚ではなく、30枚にしてください'." },
        { "passage": "【駐車場の料金】\n最初の1時間：300円\nその後30分ごとに100円\n※買い物した人は最初の1時間が無料になります。", "question": "買い物をした人が1時間駐車場を使うと、いくらですか。", "correctAnswer": "無料（0円）", "distractors": ["300円", "100円", "400円"], "explanation": "The note states '買い物した人は最初の1時間が無料になります' (Shoppers get the first hour free)." },
        { "passage": "佐藤さん\n今日の午後の会議ですが、急なお客さんが来たので私は出られません。佐藤さんだけで進めておいてください。（部長）", "question": "部長はどうして会議に出られませんか。", "correctAnswer": "急なお客さんが来たから", "distractors": ["病気になったから", "会議を忘れたから", "出張に行ったから"], "explanation": "The boss says '急なお客さんが来たので私は出られません' (Because an unexpected guest came, I cannot attend)." },
        { "passage": "【美術館の写真について】\n1階のロビーと、建物の外は写真を撮ってもいいです。2階と3階の絵がある部屋では写真を撮らないでください。", "question": "写真を撮ってはいけない場所はどこですか。", "correctAnswer": "2階と3階の絵がある部屋", "distractors": ["1階のロビー", "建物の外", "全部の場所"], "explanation": "The rule is '2階と3階の絵がある部屋では写真を撮らないでください'." },
        { "passage": "お父さん\nお風呂のお湯が出なくなりました。水しか出ません。帰りにガス会社に電話して修理（直すこと）を頼んでくれませんか。（お母さん）", "question": "お母さんはお父さんに何をお願いしていますか。", "correctAnswer": "ガス会社に電話すること", "distractors": ["お風呂を掃除すること", "お湯を沸かすこと", "新しいお風呂を買うこと"], "explanation": "The mother requests 'ガス会社に電話して修理を頼んでくれませんか'." },
        { "passage": "【カフェのスタンプ】\nコーヒー1杯でスタンプを1つ押します。スタンプが5つたまると、ケーキが1つ100円引きになります。", "question": "スタンプが5つたまると、どうなりますか。", "correctAnswer": "ケーキが100円安くなる", "distractors": ["コーヒーが無料になる", "ケーキが無料になる", "コーヒーが100円安くなる"], "explanation": "The card says 'ケーキが1つ100円引きになります' (1 cake becomes 100 yen off)." },
        { "passage": "田中さん\n明日の出張ですが、新幹線のチケットは私が買っておきます。田中さんはホテルの予約をお願いします。（鈴木）", "question": "田中さんがしなければならないことは何ですか。", "correctAnswer": "ホテルの予約", "distractors": ["新幹線のチケットを買う", "鈴木さんを迎えに行く", "お弁当を買う"], "explanation": "Suzuki instructs '田中さんはホテルの予約をお願いします'." },
        { "passage": "【ゴミ出し】\n古新聞・古雑誌：第2・第4水曜日\n※雨の日は、紙が濡れるので次の週に出してください。", "question": "第2水曜日が雨の時、古新聞はどうしますか。", "correctAnswer": "次の週に出す", "distractors": ["その日に出す", "ゴミに捨てる", "燃えるゴミの日に出す"], "explanation": "The rule specifies '雨の日は...次の週に出してください' (On rainy days, put it out the next week)." },
        { "passage": "山田さん\n今日の練習は、体育館の工事が終わっていないので、外のグラウンドでやります。運動靴を持ってきてください。（キャプテン）", "question": "今日の練習はどこでやりますか。", "correctAnswer": "グラウンド", "distractors": ["体育館", "教室", "公園"], "explanation": "The captain writes '外のグラウンドでやります' (We will do it on the outside ground)." },
        { "passage": "【電車のきっぷ】\n・普通きっぷ：150円\n・回数券（11枚セット）：1,500円\n※回数券は3ヶ月間使えます。", "question": "回数券を買うと、普通に11回乗るよりいくら安いですか。", "correctAnswer": "150円", "distractors": ["100円", "200円", "安くならない"], "explanation": "Normal ticket x 11 = 1,650 yen. The set is 1,500 yen. 1,650 - 1,500 = 150 yen cheaper." },
        { "passage": "木村さん\n私がお願いした資料ですが、急ぎではないので、今日中ではなく明日の午前中までに作ってくれればいいですよ。（部長）", "question": "木村さんは資料をいつまでに作りますか。", "correctAnswer": "明日の午前中", "distractors": ["今日中", "明日の夕方", "来週"], "explanation": "The boss says '今日中ではなく明日の午前中までに作ってくれればいいですよ'." },
        { "passage": "【ホテルのルール】\n・部屋の鍵は、外出する時（外に出る時）は必ずフロント（受付）に預けて（渡して）ください。", "question": "ホテルの外に出る時、鍵はどうしますか。", "correctAnswer": "フロントに渡す", "distractors": ["カバンの中に入れる", "部屋に置いておく", "自分で持っていく"], "explanation": "The rule is '外出する時は必ずフロントに預けてください'." },
        { "passage": "佐藤さん\n今日の飲み会の場所ですが、「さくら」ではなく、隣の「富士（ふじ）」になりました。「さくら」は休みでした。（幹事）", "question": "今日の飲み会はどこでありますか。", "correctAnswer": "富士", "distractors": ["さくら", "駅前の店", "佐藤さんの家"], "explanation": "The organizer states it changed to '隣の「富士」になりました'." },
        { "passage": "【アルバイト募集】\n朝のスーパーの品出し（商品をお店に並べる仕事）です。\n時間：朝6:00〜9:00\n※土日だけ働ける人を募集しています。", "question": "このアルバイトはいつ働きますか。", "correctAnswer": "土日の朝", "distractors": ["平日の朝", "土日の夜", "毎日の朝"], "explanation": "The shifts are 6:00-9:00 AM, and it explicitly says '土日だけ働ける人' (People who can work weekends only)." },
        { "passage": "お母さんへ\n私の部屋の机の上にあった手紙、ポストに入れておいてくれませんか。今日中に出したいので。お願いします。（娘）", "question": "お母さんがしなければならないことは何ですか。", "correctAnswer": "手紙をポストに入れる", "distractors": ["手紙を書く", "机を掃除する", "手紙を読む"], "explanation": "The daughter asks '手紙、ポストに入れておいてくれませんか'." },
        { "passage": "【自転車のルール】\n・駅の前に自転車を止めないでください。\n・自転車は駅の裏の駐輪場（1日100円）に止めてください。", "question": "自転車はどこに止めなければなりませんか。", "correctAnswer": "駅の裏の駐輪場", "distractors": ["駅の前", "どこでもいい", "無料で止められる場所"], "explanation": "The rule is '自転車は駅の裏の駐輪場...に止めてください'." },
        { "passage": "田中さん\n明日の予約ですが、私が少し遅れそうです。田中さんは先にお店に入って、飲み物だけ頼んでおいてください。（鈴木）", "question": "田中さんはお店に入ってからどうしますか。", "correctAnswer": "飲み物だけ頼んで待つ", "distractors": ["外で待つ", "料理も頼む", "帰る"], "explanation": "Suzuki asks '先にお店に入って、飲み物だけ頼んでおいてください'." },
        { "passage": "【図書館の本】\n借りた本を返すのが遅れた場合、その日から1週間は新しい本を借りることができません。注意してください。", "question": "本を返すのが遅れた人はどうなりますか。", "correctAnswer": "1週間新しい本が借りられない", "distractors": ["お金を払う", "二度と本が借りられない", "すぐに新しい本が借りられる"], "explanation": "The penalty is 'その日から1週間は新しい本を借りることができません'." },
        { "passage": "スミスさん\n今度の週末のスキーですが、雨の場合は中止になります。金曜日の夜の天気予報を見て、みんなにメールします。（幹事）", "question": "スキーに行くかどうかは、いつわかりますか。", "correctAnswer": "金曜日の夜", "distractors": ["木曜日の夜", "土曜日の朝", "日曜日の朝"], "explanation": "The organizer says '金曜日の夜の天気予報を見て、みんなにメールします'." },
        { "passage": "【病院の予約】\nインターネットでの予約は、前の日の夜9時までです。当日の予約は、直接病院に電話をしてください。", "question": "当日に病院に行きたい時はどうしますか。", "correctAnswer": "病院に電話する", "distractors": ["インターネットで予約する", "前の日の夜9時に電話する", "予約できない"], "explanation": "For same-day reservations (当日の予約), the rule is '直接病院に電話をしてください'." },
        { "passage": "山田さん\n今日の会議の資料ですが、山田さんの分はもうコピーして山田さんの机に置いてあります。会議室に持ってくるのを忘れないでください。（佐藤）", "question": "山田さんは会議室に何を持っていかなければなりませんか。", "correctAnswer": "自分の机にある資料", "distractors": ["佐藤さんの資料", "新しいペン", "自分のパソコン"], "explanation": "Sato left the materials on Yamada's desk and says '会議室に持ってくるのを忘れないでください'." },
        { "passage": "【携帯電話のプラン】\nAプラン：毎月2000円（電話は5分まで無料）\nBプラン：毎月3000円（電話はいつでも無料）", "question": "電話をたくさんする人は、どのプランがいいですか。", "correctAnswer": "Bプラン", "distractors": ["Aプラン", "どちらも同じ", "電話を使わないプラン"], "explanation": "Plan B makes calls free anytime (電話はいつでも無料), making it better for heavy callers." },
        { "passage": "木村さん\n私が貸した本ですが、まだ木村さんが読んでいなかったら、来週の金曜日まで借りていてもいいですよ。ゆっくり読んでください。（田中）", "question": "木村さんは本をいつまでに返せばいいですか。", "correctAnswer": "来週の金曜日", "distractors": ["明日", "今日の夕方", "今週の金曜日"], "explanation": "Tanaka extends the deadline saying '来週の金曜日まで借りていてもいいですよ'." },
        { "passage": "【映画館での飲食】\n映画館のロビーでは何を食べてもいいですが、映画を見る部屋（シアター）の中では、お菓子と飲み物しか食べられません。", "question": "映画を見る部屋の中で食べてはいけないものはどれですか。", "correctAnswer": "お弁当やハンバーガーなど（お菓子以外のもの）", "distractors": ["映画館のポップコーン", "飲み物", "お菓子"], "explanation": "Inside the theater, 'お菓子と飲み物しか食べられません' (Only snacks and drinks can be eaten)." },
        { "passage": "佐藤さん\n今日の飲み会の場所ですが、駅から歩いて10分かかります。雨が降っているので、駅のタクシー乗り場に6時に集まって、みんなで乗りましょう。（幹事）", "question": "みんなは今日、どうやって店に行きますか。", "correctAnswer": "タクシー", "distractors": ["歩き", "電車", "バス"], "explanation": "The organizer says 'タクシー乗り場に6時に集まって、みんなで乗りましょう'." },
        { "passage": "【コンビニのおにぎり】\n梅おにぎり：100円\n鮭おにぎり：150円\n※朝9時までに買うと、どれでも1つ100円になります。", "question": "朝8時に鮭おにぎりを1つ買うと、いくらですか。", "correctAnswer": "100円", "distractors": ["150円", "200円", "50円"], "explanation": "Before 9 AM, all rice balls are 100 yen ('朝9時までに買うと、どれでも1つ100円になります')." },
        { "passage": "お父さん\nお風呂の電気が切れてしまいました。新しい電球（でんきゅう）を買ってきてください。サイズは一番小さいものです。お願いします。（お母さん）", "question": "お父さんが買わなければならないものは何ですか。", "correctAnswer": "一番小さいサイズの電球", "distractors": ["一番大きいサイズの電球", "新しいお風呂", "懐中電灯"], "explanation": "The mother requests '新しい電球を買ってきてください。サイズは一番小さいものです'." },
        { "passage": "【アパートの壁のポスター】\n・アパートの壁にポスターやカレンダーを貼る時は、テープを使ってください。画鋲（がびょう・ピン）は穴が開くので使わないでください。", "question": "ポスターを貼る時、使ってはいけないものは何ですか。", "correctAnswer": "画鋲（ピン）", "distractors": ["テープ", "ポスター", "カレンダー"], "explanation": "The rule is '画鋲（がびょう・ピン）は穴が開くので使わないでください'." },
        { "passage": "田中さん\n明日の会議ですが、私が少し遅れます。田中さんは先に行って、ホワイトボードに今日の日付と会議の名前を書いておいてください。（鈴木）", "question": "田中さんが先に行ってすることは何ですか。", "correctAnswer": "ホワイトボードに日付と名前を書く", "distractors": ["会議の資料を配る", "お茶を入れる", "鈴木さんを待つ"], "explanation": "Suzuki instructs 'ホワイトボードに今日の日付と会議の名前を書いておいてください'." },
        { "passage": "【さくら歯科（はいしゃ）の案内】\n平日：午前9:00〜13:00 / 午後15:00〜19:00\n木曜・土曜：午前9:00〜13:00のみ\n休み：日曜日・祝日", "question": "木曜日の午後4時に歯医者に行けますか。", "correctAnswer": "いいえ、木曜日の午後は休みだから行けない", "distractors": ["はい、19:00まで行ける", "はい、午後も開いている", "午前中なら行けない"], "explanation": "Thursday hours are '午前9:00〜13:00のみ' (mornings only), so it is closed in the afternoon." },
        { "passage": "田中さん\n新幹線のチケットですが、10時発の特急は満席でした。ですから、10時半の各駅停車（かくえきていしゃ）を買いました。ホームで待っています。（鈴木）", "question": "田中さんは何時の新幹線に乗りますか。", "correctAnswer": "10時半", "distractors": ["10時", "10時15分", "11時"], "explanation": "Suzuki states that the 10:00 train was full, so they bought a ticket for the 10:30 train ('10時半の各駅停車を買いました')." },
        { "passage": "【カフェ・秋の限定（げんてい）セット】\nパンとマロンケーキのセット：600円\n※飲み物をセットにすると、飲み物が一律200円になります。（普通は350円です）", "question": "限定セットと飲み物を一緒に頼むと、全部でいくらですか。", "correctAnswer": "800円", "distractors": ["600円", "950円", "700円"], "explanation": "The set is 600 yen, and adding a drink costs an additional 200 yen under the set rule, totaling 800 yen." },
        { "passage": "【中央図書館のルール】\n・パソコンを使う席（1階）：2時間まで使えます。受付でカードをもらってください。\n・本を読む席（2階・3階）：時間の制限はありません。", "question": "1階の席でパソコンを使いたい人はどうしますか。", "correctAnswer": "受付でカードをもらって、2時間まで使う", "distractors": ["2階に行って、時間制限なしで使う", "カードなしで、何時間でも使う", "お金を払って使う"], "explanation": "The rule for the 1st floor laptop seats states '2時間まで使えます。受付でカードをもらってください'." },
        { "passage": "【スーパーの特売（とくばい）】\n毎週火曜日：たまごの日（1パック100円）\n毎週金曜日：お米の日（10%引き）\n※他の日は普通の値段です。", "question": "たまごが100円で買えるのは何曜日ですか。", "correctAnswer": "火曜日", "distractors": ["金曜日", "月曜日", "毎日"], "explanation": "The schedule pairs '毎週火曜日' (Every Tuesday) directly with 'たまごの日' (Egg Day)." },
        { "passage": "【空港行きバスのりば】\n1番のりば：羽田空港行き（30分ごとに出発）\n2番のりば：成田空港行き（1時間ごとに出発）\n※切符は近くの機械で買ってください。", "question": "成田空港に行きたい人は、何番のりばに行きますか。", "correctAnswer": "2番のりば", "distractors": ["1番のりば", "3番のりば", "どちらでもいい"], "explanation": "Scanning the platforms, '2番のりば' (Platform 2) matches '成田空港行き' (bound for Narita Airport)." },
        { "passage": "佐藤さんへ\n電話がありました。木村さんからです。「今日の夜の約束ですが、風邪をひいたので行けなくなりました。本当にすみません」とのことです。（山田）", "question": "木村さんはどうして今日の夜会うことができませんか。", "correctAnswer": "風邪をひいたから", "distractors": ["仕事が忙しいから", "約束を忘れたから", "雨が降っているから"], "explanation": "The memo notes Kimura called to cancel because they caught a cold ('風邪をひいたので行けなくなりました')." },
        { "passage": "【料理教室のご案内】\n時間：毎週土曜日 午後14:00〜16:00\n場所：3階の第1調理室\n持ち物：エプロン、筆記用具（ペン）\n※材料（食材）は教室にあります。", "question": "教室に持っていかなければならないものは何ですか。", "correctAnswer": "エプロンとペン", "distractors": ["材料とエプロン", "エプロンだけ", "何も持っていかなくていい"], "explanation": "The required items (持ち物) are 'エプロン、筆記用具（ペン）'. Materials are provided." },
        { "passage": "【夏祭り（まつり）の花火について】\n日時：8月15日 午後19:30から\n※雨の場合は次の日の16日に延期（えんき）します。16日も雨なら中止（やめ）になります。", "question": "8月15日に強い雨が降った場合、花火はどうなりますか。", "correctAnswer": "16日にやる", "distractors": ["中止になる", "時間を遅らせて15日にやる", "来月やる"], "explanation": "The notice states '雨の場合は次の日の16日に延期（えんき）します' (In case of rain, deferred to the next day, the 16th)." },
        { "passage": "【ホテルの鍵について】\n・外出する時は、鍵をフロント（受付）に渡してください。\n・夜24時を過ぎると入り口が閉まります。鍵で開けて入ってください。", "question": "夜の23時にホテルの外へ出る時、鍵はどうしますか。", "correctAnswer": "フロントに渡す", "distractors": ["自分で持っていく", "部屋に置いていく", "入り口を閉める"], "explanation": "The general rule states '外出する時は、鍵をフロント（受付）に渡してください' without time exceptions before midnight." },
        { "passage": "マリアさん\n明日の買い出しですが、私は果物とお菓子を買っていきます。マリアさんは野菜と飲み物をお願いします。お肉は冷蔵庫にあります。（リー）", "question": "マリアさんが明日買うものは何ですか。", "correctAnswer": "野菜と飲み物", "distractors": ["果物とお菓子", "お肉と野菜", "飲み物とお菓子"], "explanation": "The message clarifies: 'マリアさんは野菜と飲み物をお願いします'." },
        { "passage": "【美術館（びじゅつかん）の特別展】\n期間：6月1日〜6月30日\n休み：毎週月曜日\n料金：一般 1,200円 / 学生 800円", "question": "学生が6月10日の月曜日に美術館に行くと、いくらですか。", "correctAnswer": "休みだから入れない", "distractors": ["800円", "1,200円", "無料で入れる"], "explanation": "Museums are closed every Monday ('休み：毎週月曜日'). Since June 10th is explicitly called a Monday, the venue is closed." },
        { "passage": "【スポーツジムからのお知らせ】\nプール：午前10:00〜午後21:00\nテニスコート：午前9:00〜午後22:00\n※月曜日はプールだけ休みになります。コートは使えます。", "question": "月曜日の午前11時に使える場所はどこですか。", "correctAnswer": "テニスコート", "distractors": ["プール", "両方使える", "どちらも使えない"], "explanation": "On Mondays, only the pool is closed ('月曜日はプールだけ休みになります'), meaning the tennis court remains open." },
        { "passage": "スミスさん\nあしたの会議の部屋が変わりました。2階の会議室Aではなく、4階の会議室Cです。時間は2時のままで変わりません。（高橋）", "question": "明日の会議はどこでありますか。", "correctAnswer": "4階の会議室C", "distractors": ["2階の会議室A", "4階の会議室A", "2階の会議室C"], "explanation": "The note corrects the venue: '2階の会議室Aではなく、4階の会議室Cです'." },
        { "passage": "【アパートのゴミ回収（かいしゅう）】\n燃えるゴミ：火・金\n資源（しげん）ゴミ（ダンボールなど）：第2・第4木曜日\n※朝8時までに出してください。", "question": "ダンボールを捨てたいです。いつ出しますか。", "correctAnswer": "第2・第4木曜日の朝8時まで", "distractors": ["毎週火曜日と金曜日", "毎週木曜日の朝8時まで", "第1・第3木曜日"], "explanation": "Cardboard aligns with resource garbage ('資源（しげん）ゴミ（ダンボールなど）'), scheduled for '第2・第4木曜日'." },
        { "passage": "田中さんへ\n机の上にあった田中さんの黒いペン、インクが出なかったので捨ててしまいました。代わりに私の新しい青いペンを置いておきます。使ってください。（鈴木）", "question": "田中さんの机の上には、今何がありますか。", "correctAnswer": "鈴木さんの新しい青いペン", "distractors": ["田中さんの黒いペン", "インクのない黒いペン", "何も置いていない"], "explanation": "Suzuki discarded the broken black pen and replaced it with a blue one: '代わりに私の新しい青いペンを置いておきます'." },
        { "passage": "【デパートの駐車場（ちゅうしゃじょう）】\n料金：1時間 400円\n※館内で3,000円以上買い物した人は、2時間無料になります。", "question": "デパートで5,000円買い物した人は、駐車場が何時間無料になりますか。", "correctAnswer": "2時間", "distractors": ["1時間", "無料にならない", "一日中無料"], "explanation": "Since 5,000 yen is over the 3,000 yen threshold, the shopper receives 2 hours free ('2時間無料になります')." },
        { "passage": "お父さんへ\n私の部屋の電気が切れてしまいました。帰りに電気屋で新しい電球（でんきゅう）を買ってきてください。丸い形のものです。（息子）", "question": "息子はお父さんに何を買ってくるように頼みましたか。", "correctAnswer": "丸い形の電球", "distractors": ["四角い形の電球", "新しいテレビ", "部屋の時計"], "explanation": "The son writes '新しい電球（でんきゅう）を買ってきてください。丸い形のものです'." },
        { "passage": "【遊園地（ゆうえんち）のチケット】\n大人：4,000円\n子供：2,000円\n※午後15時以降に入れる「夕方チケット」は、大人は2,500円になります。", "question": "大人が午後16時に遊園地に入ると、チケットはいくらですか。", "correctAnswer": "2,500円", "distractors": ["4,000円", "2,000円", "1,500円"], "explanation": "16:00 is after 15:00, sorting it into the evening rate ('午後15時以降...大人は2,500円になります')." },
        { "passage": "山田さん\n来週の出張スケジュールです。月曜日に大阪へ行って、水曜日の夕方に東京へ帰ります。火曜日は一日中大阪で会議です。（佐藤）", "question": "山田さんは火曜日にどこにいますか。", "correctAnswer": "大阪", "distractors": ["東京", "飛行機の中", "どこにいるかわからない"], "explanation": "The schedule plots them leaving for Osaka on Monday and returning Wednesday, explicitly noting '火曜日は一日中大阪で会議です'." },
        { "passage": "【レストランの注文について】\n平日のランチタイム（11:30〜14:00）は、すべての料理にコーヒーかお茶が無料でついてきます。土日は有料です。", "question": "水曜日の13時にレストランでご飯を食べると、飲み物はどうなりますか。", "correctAnswer": "無料でついてくる", "distractors": ["有料になる", "飲み物は頼めない", "土曜日と同じ値段だ"], "explanation": "Wednesday is a weekday (平日) and 13:00 is during lunch hours, meaning drinks are free ('無料でついてきます')." },
        { "passage": "木村さん\n昨日頼んだ資料のコピーですが、10枚ではなく15枚にしてください。新しく会議に参加する人が増えました。（田中）", "question": "木村さんは資料を何枚コピーしなければなりませんか。", "correctAnswer": "15枚", "distractors": ["10枚", "5枚", "25枚"], "explanation": "Tanaka adjusts the order directly: '10枚ではなく15枚にしてください'." },
        { "passage": "【植物園（しょくぶつえん）のルール】\n・お弁当や飲み物を中に持って入ってもいいですが、ゴミは必ずゴミ箱に捨てるか、持って帰ってください。花を折るのは禁止です。", "question": "植物園の中でしてはいけないことは何ですか。", "correctAnswer": "花を折ること", "distractors": ["お弁当を食べること", "お茶を飲むこと", "ゴミ箱にゴミを捨てること"], "explanation": "The rules outline permissions for food, but note '花を折るのは禁止です' (Snapping flowers is banned)." },
        { "passage": "お母さん\n学校に自分の英語の辞書を忘れてしまいました。明日テストがあるので、今日の夜、お兄さんの辞書を借りておいてくれませんか。（娘）", "question": "娘はお母さんに何をお願いしましたか。", "correctAnswer": "お兄さんの辞書を借りておくこと", "distractors": ["学校に辞書を取りに行くこと", "新しい辞書を買うこと", "明日起こしてもらうこと"], "explanation": "The daughter asks 'お兄さんの辞書を借りておいてくれませんか' because she forgot hers." },
        { "passage": "【クリーニング屋のセール】\n毎週水曜日は「シャツの日」で、ワイシャツが1枚150円になります。（普通は200円です）\n※他の服は安くなりません。", "question": "水曜日にクリーニングを出すと、何が安くなりますか。", "correctAnswer": "ワイシャツ", "distractors": ["コート", "ズボン", "全部の服"], "explanation": "The notice targets shirts on Wednesday: 'ワイシャツが1枚150円になります' (Dress shirts become 150 yen)." },
        { "passage": "田中さん\n明日の映画の約束ですが、時間が2時からに変わりました。1時45分に映画館のロビーで待っています。遅れないでくださいね。（鈴木）", "question": "二人は明日、何時にどこで会いますか。", "correctAnswer": "1時45分に映画館のロビー", "distractors": ["2時に映画館のロビー", "1時45分に駅の前", "2時に駅の前"], "explanation": "Suzuki updates the plans: '1時45分に映画館のロビーで待っています'." },
        { "passage": "【図書館のパソコン利用】\n図書室のパソコンを使う人は、受付の名前を書く紙に、自分の名前と使い始める時間を書いてください。使い終わった時間も後で書きます。", "question": "パソコンを使い始める時、紙に何を書きますか。", "correctAnswer": "自分の名前と使い始める時間", "distractors": ["自分の名前だけ", "使い終わった時間だけ", "パソコンの番号"], "explanation": "The process states '自分の名前と使い始める時間を書いてください' at the start of utilization." },
        { "passage": "スミスさん\nあしたのテニスの練習ですが、コートの予約が10時からではなく11時からになりました。場所は同じ第2コートです。間違えないでね。（リー）", "question": "明日のテニスの練習は何時からですか。", "correctAnswer": "11時から", "distractors": ["10時から", "12時から", "10時半から"], "explanation": "The note flags the time change: '10時からではなく11時からになりました'." },
        { "passage": "【スーパーのお買い物袋】\n袋が要る人は1枚3円かかります。自分のマイバッグを持っている人は、レジで「袋は要りません」と伝えてください。", "question": "お店の袋が欲しい人はどうしますか。", "correctAnswer": "1枚につき3円払う", "distractors": ["無料で一つきもらえる", "マイバッグを渡す", "何も言わないで帰る"], "explanation": "The rule notes '袋が要る人は1枚3円かかります' (Those needing bags pay 3 yen per piece)." },
        { "passage": "佐藤さん\n今日の夕方のミーティングですが、私の席の近くで行います。会議室は他（ほか）の人が使っているので、部屋には入りません。（部長）", "question": "今日のミーティングはどこでやりますか。", "correctAnswer": "部長の席の近く", "distractors": ["会議室", "1階のロビー", "部屋の外"], "explanation": "The boss mentions meeting '私の席の近くで行います' because the meeting rooms are occupied." },
        { "passage": "【駅のコインロッカー料金】\n・小さいロッカー：1日300円\n・大きいロッカー：1日600円\n※夜の24時を過ぎると、もう1日分の料金がプラスされます。", "question": "小さいロッカーに荷物を入れて、次の日の朝に取り出すと、全部でいくらですか。", "correctAnswer": "600円", "distractors": ["300円", "900円", "1,200円"], "explanation": "Taking it out the next morning means passing the 24:00 threshold, adding another day's charge: 300 + 300 = 600 yen." },
        { "passage": "木村さん\n昨日借りた傘ですが、今日の夜、木村さんのアパートのドアの前に置いておきます。木村さんがいなくても置いておきますね。ありがとう。（山田）", "question": "山田さんは傘をどこに返しますか。", "correctAnswer": "木村さんのアパートのドアの前", "distractors": ["木村さんの部屋の中", "学校の教室", "駅の受付"], "explanation": "Yamada states '木村さんのアパートのドアの前に置いておきます' (I will leave it in front of the door of your apartment)." },
        { "passage": "【プールのお知らせ】\n・体調（たいちょう）が悪い人、熱がある人はプールに入れません。\n・入る前に必ず準備運動（じゅんびうんどう）をしてください。", "question": "プールに入る前に、全員がしなければならないことは何ですか。", "correctAnswer": "準備運動をする", "distractors": ["熱を測る", "シャワーを浴びる", "服を着替える"], "explanation": "The direct instruction commands '入る前に必ず準備運動（じゅんびうんどう）をしてください'." },
        { "passage": "山田さん\n今週の土曜日のハイキングは、台風が近づいているため中止になりました。来月に新しく予定を決めます。残念です。（幹事）", "question": "今週の土曜日のハイキングはどうなりましたか。", "correctAnswer": "台風で中止になった", "distractors": ["来週に延期になった", "雨だけどやる", "時間を変えてやる"], "explanation": "The organizer notes '台風が近づいているため中止になりました' (Canceled because a typhoon is nearing)." },
        { "passage": "【美術館（びじゅつかん）の入り口で】\n大きなカバンや長い傘は、中へ持って入れません。入り口の横にある無料のロッカーにしまってから、お入りください。", "question": "大きなカバンを持っている人はどうしますか。", "correctAnswer": "入り口の横の無料ロッカーにしまう", "distractors": ["そのまま中に持って入る", "お金を払って預ける", "外に捨ててから入る"], "explanation": "The instruction demands storing items in the free entrance lockers: '入り口の横にある無料のロッカーにしまってから、お入りください'." },
        { "passage": "田中さん\n今日提出（ていしゅつ）する予定のレポートですが、パソコンが壊れて印刷（いんさつ）できません。明日の朝、提出してもいいですか？（鈴木）", "question": "鈴木さんはレポートをいつ提出したいと言っていますか。", "correctAnswer": "明日の朝", "distractors": ["今日の午後", "今日の夜", "来週"], "explanation": "Suzuki runs into technical issues and asks '明日の朝、提出してもいいですか？' (May I submit it tomorrow morning?)." },
        { "passage": "【アパートのインターネット】\nこのアパートでは、無料のWi-Fiがいつでも使えます。パスワードは部屋のドアの後ろの紙に書いてあります。", "question": "インターネットのパスワードはどこにありますか。", "correctAnswer": "部屋のドアの後ろの紙", "distractors": ["管理人の部屋", "パソコンの画面", "アパートの入り口"], "explanation": "The description reveals 'パスワードは部屋のドアの後ろの紙に書いてあります' (The password is on the paper behind the room's door)." },
        { "passage": "【レストランのランチ】\nランチタイム：11:00〜14:00\n※この時間に食事を頼むと、コーヒーかお茶が無料でついてきます。", "question": "12時にこのレストランでご飯を食べると、どうなりますか。", "correctAnswer": "コーヒーかお茶が無料でもらえる", "distractors": ["食事が安くなる", "飲み物のお金を払う", "何ももらえない"], "explanation": "12:00 is during lunch time (11:00-14:00), so the rule 'コーヒーかお茶が無料でついてきます' applies." },
        { "passage": "田中さん\n今日の会議は午後2時からではなく、午後3時からになりました。場所は2階ではなく3階の部屋です。（鈴木）", "question": "今日の会議は何時から、どこでありますか。", "correctAnswer": "午後3時から、3階の部屋", "distractors": ["午後2時から、3階の部屋", "午後3時から、2階の部屋", "午後2時から、2階の部屋"], "explanation": "Suzuki updates both time and place: '午後3時からになりました。場所は...3階の部屋です'." },
        { "passage": "【アパートのゴミ】\nペットボトルと缶（かん）は、第1・第3水曜日の朝8時までに出してください。毎週ではありません。", "question": "ペットボトルと缶はいつ出しますか。", "correctAnswer": "第1・第3水曜日の朝", "distractors": ["毎週水曜日の朝", "第2・第4水曜日の朝", "毎日"], "explanation": "The rule is strictly '第1・第3水曜日の朝8時までに出してください'." },
        { "passage": "お母さん\n今日から学校のテストだから、晩ご飯の前に勉強するね。いつもより早いけど、ご飯は夜7時にして。（娘）", "question": "娘は今日の晩ご飯を何時に食べたいと言っていますか。", "correctAnswer": "夜7時", "distractors": ["夜6時", "夜8時", "勉強の後"], "explanation": "The daughter requests 'ご飯は夜7時にして' (Make dinner at 7 PM)." },
        { "passage": "【映画館のチケット料金】\n大人：1,800円\n※毎月1日は「映画の日」です。この日は大人は1,000円で見られます。", "question": "1日に大人が映画を見るといくらですか。", "correctAnswer": "1,000円", "distractors": ["1,800円", "800円", "2,800円"], "explanation": "On the 1st of the month, the special price applies: '大人は1,000円で見られます'." },
        { "passage": "山田さん\n明日貸すと言っていた本ですが、私のカバンではなく、机の引き出しの中にあります。明日取っていってください。（佐藤）", "question": "山田さんは明日、どこから本を持っていきますか。", "correctAnswer": "佐藤さんの机の引き出し", "distractors": ["佐藤さんのカバンの中", "自分の机の引き出し", "図書館"], "explanation": "Sato notes '机の引き出しの中にあります。明日取っていってください'." },
        { "passage": "【さくら図書館の休み】\n毎週月曜日と、第3木曜日はお休みです。\n※祝日の場合は開館（開けます）します。", "question": "図書館がいつも休むのは何曜日ですか。", "correctAnswer": "月曜日と第3木曜日", "distractors": ["月曜日と毎週木曜日", "火曜日と第3木曜日", "毎日"], "explanation": "The regular closing days are '毎週月曜日と、第3木曜日はお休みです'." },
        { "passage": "スミスさん\n明日のハイキングは、朝から強い雨の予報なので中止（やめ）になります。また来月、天気がいい日に行きましょう。（幹事）", "question": "明日のハイキングはどうなりましたか。", "correctAnswer": "雨の予報だから中止になった", "distractors": ["来週に延期になった", "雨でも行く", "場所が変わった"], "explanation": "The organizer confirms '雨の予報なので中止（やめ）になります' (Canceled due to rain forecast)." },
        { "passage": "【バスの時刻表：駅行き】\n平日：7:10, 8:10, 9:10\n土日：7:20, 8:20, 9:20", "question": "日曜日の8時台のバスは何時に出発しますか。", "correctAnswer": "8:20", "distractors": ["8:10", "8:30", "8:00"], "explanation": "On weekends (土日), the 8 o'clock bus leaves at 8:20." },
        { "passage": "木村さん\n私の机の上の資料、まだ見ないでください。明日、私が会議で説明してから見てくださいね。お願いします。（部長）", "question": "木村さんはいつ資料を見ますか。", "correctAnswer": "明日、部長が説明した後", "distractors": ["今日、すぐに見る", "明日、会議の前に見る", "見ないで捨てる"], "explanation": "The boss says '明日、私が会議で説明してから見てくださいね' (Please look at it after I explain it tomorrow)." },
        { "passage": "【プールのルール】\nプールの中で泳ぐ時は、必ず帽子をかぶってください。ゴーグル（水泳のメガネ）は使わなくてもいいです。", "question": "プールで泳ぐ時、必ず使わなければならないものは何ですか。", "correctAnswer": "帽子", "distractors": ["ゴーグル", "タオル", "浮き輪"], "explanation": "The rule is '必ず帽子をかぶってください' (You must wear a hat/cap)." },
        { "passage": "お父さん\n自転車の鍵が壊れたので、今日は歩いて帰ります。いつもより遅くなって、夜6時ごろに着きます。（息子）", "question": "息子はどうして歩いて帰りますか。", "correctAnswer": "自転車の鍵が壊れたから", "distractors": ["雨が降っているから", "自転車を忘れたから", "バスがないから"], "explanation": "The son explains '自転車の鍵が壊れたので、今日は歩いて帰ります'." },
        { "passage": "【ケーキ屋「あまい」】\nショートケーキ：400円\nチョコレートケーキ：450円\n※ケーキを3つ買うと、全部で100円安くなります。", "question": "ケーキを3つ買うとどうなりますか。", "correctAnswer": "100円安くなる", "distractors": ["1つ無料になる", "ショートケーキが100円になる", "値段は変わらない"], "explanation": "The special condition is '3つ買うと、全部で100円安くなります'." },
        { "passage": "田中さん\n今日の飲み会は、駅前の「さくら」から「富士（ふじ）」に変わりました。時間はそのまま夜7時からです。（鈴木）", "question": "今日の飲み会はどこでありますか。", "correctAnswer": "富士", "distractors": ["さくら", "駅のロビー", "田中さんの家"], "explanation": "Suzuki announces the venue change: '「さくら」から「富士」に変わりました'." },
        { "passage": "【病院の受付】\n初めての人は、まず問診票（紙）に名前と住所を書いて、保険証（カード）と一緒に受付の箱に入れてください。", "question": "初めて来た人は、受付に何を出しますか。", "correctAnswer": "名前を書いた紙と保険証", "distractors": ["保険証だけ", "名前を書いた紙だけ", "お金"], "explanation": "First-timers must submit '問診票（紙）... 保険証（カード）と一緒に' (The paper form together with the insurance card)." },
        { "passage": "マリアさん\n明日のパーティーの飲み物は私が買いますから、マリアさんはお菓子をお願いします。ピザは田中さんが頼みます。（リー）", "question": "マリアさんは明日のパーティーで何を準備しますか。", "correctAnswer": "お菓子", "distractors": ["飲み物", "ピザ", "何もしない"], "explanation": "Lee tells Maria 'マリアさんはお菓子をお願いします' (Maria, please take care of the snacks)." },
        { "passage": "【タクシー料金】\n最初の2キロまで：600円\nその後、1キロごとに200円上がります。", "question": "タクシーに3キロ乗ると、いくらかかりますか。", "correctAnswer": "800円", "distractors": ["600円", "1,000円", "1,200円"], "explanation": "First 2km = 600 yen. The next 1km = 200 yen. 600 + 200 = 800 yen." },
        { "passage": "山田さん\n会議室のエアコンがまたついていましたよ。誰もいない時は、帰る時に必ず消しておいてくださいね。（部長）", "question": "部長は山田さんに何をお願いしていますか。", "correctAnswer": "帰る時にエアコンを消すこと", "distractors": ["エアコンをつけること", "会議室を掃除すること", "早く帰ること"], "explanation": "The boss reminds Yamada '帰る時に必ず消しておいてくださいね' (Be sure to turn it off when you leave)." },
        { "passage": "【アパートの自転車置き場】\n1日：100円 / 1ヶ月：2,000円\n※このアパートに住んでいる人は、無料で止めることができます。", "question": "このアパートに住んでいる人が自転車を止める時、いくら払いますか。", "correctAnswer": "無料（0円）", "distractors": ["100円", "2,000円", "1,000円"], "explanation": "The note states residents park for free: 'アパートに住んでいる人は、無料で止めることができます'." },
        { "passage": "佐藤さん\n明日返すと言っていたCDですが、明後日にしてもいいですか。まだ最後まで聞いていないので。ごめんなさい。（田中）", "question": "田中さんはCDをいつ返したいと言っていますか。", "correctAnswer": "明後日", "distractors": ["明日", "今日", "来週"], "explanation": "Tanaka asks for an extension: '明後日にしてもいいですか' (Can I make it the day after tomorrow?)." },
        { "passage": "【美術館の写真撮影（しゃしんさつえい）】\n写真撮影は1階のロビーだけOKです。2階と3階の絵がある部屋では撮らないでください。", "question": "写真を撮ってもいい場所はどこですか。", "correctAnswer": "1階のロビー", "distractors": ["2階の部屋", "3階の部屋", "全部の場所"], "explanation": "The rule is '写真撮影は1階のロビーだけOKです' (Photography is OK only in the 1st floor lobby)." },
        { "passage": "お母さん\n今日の夕方、雨が降るから駅まで傘を持ってきてくれない？5時に駅に着くよ。（息子）", "question": "お母さんがしなければならないことは何ですか。", "correctAnswer": "夕方5時に駅へ傘を持っていく", "distractors": ["駅まで車で迎えに行く", "息子に傘を買う", "5時に晩ご飯を作る"], "explanation": "The son requests '駅まで傘を持ってきてくれない？5時に駅に着くよ'." },
        { "passage": "【ジムのロッカーの鍵】\nロッカーの鍵は自分で持っていてください。フロント（受付）に預けないでください。なくした場合は1000円かかります。", "question": "ロッカーの鍵はどうしなければなりませんか。", "correctAnswer": "自分で持っている", "distractors": ["フロントに預ける", "ロッカーの中に入れる", "1000円で買う"], "explanation": "The rule is 'ロッカーの鍵は自分で持っていてください。フロントに預けないでください'." },
        { "passage": "木村さん\n明日の出張ですが、私が新幹線のチケットを買います。ホテルは木村さんが予約しておいてください。よろしく。（鈴木）", "question": "木村さんがしなければならないことは何ですか。", "correctAnswer": "ホテルを予約する", "distractors": ["新幹線のチケットを買う", "鈴木さんを迎えに行く", "出張の荷物を準備する"], "explanation": "Suzuki delegates the hotel to Kimura: 'ホテルは木村さんが予約しておいてください'." },
        { "passage": "【ゴミの捨て方】\nガラスのお皿や割れたコップは、そのまま袋に入れないでください。危ないですから、新聞紙（紙）で包んで出してください。", "question": "割れたコップを捨てる時、どうしますか。", "correctAnswer": "紙で包んで捨てる", "distractors": ["そのまま袋に入れる", "洗ってから捨てる", "捨ててはいけない"], "explanation": "The instruction states '新聞紙（紙）で包んで出してください' (Wrap it in newspaper/paper and put it out)." },
        { "passage": "スミスさん\n昨日お借りしたノート、本当にありがとうございました。明日学校で会った時に返しますね。（リー）", "question": "リーさんはノートをいつ、どこで返しますか。", "correctAnswer": "明日、学校で返す", "distractors": ["今日、学校で返す", "明日、スミスさんの家で返す", "今日、スミスさんの家で返す"], "explanation": "Lee says '明日学校で会った時に返しますね' (I'll return it tomorrow when we meet at school)." },
        { "passage": "【スーパーのポイント】\nカードに500ポイントたまると、レジで500円の買い物券が出ます。次回（次に来た時）のお買い物で使ってください。", "question": "500円の買い物券をもらうために、何が必要ですか。", "correctAnswer": "500ポイントためる", "distractors": ["500円払う", "カードを新しくする", "毎日買い物をする"], "explanation": "The notice states '500ポイントたまると、レジで500円の買い物券が出ます'." },
        { "passage": "田中さん\n明日の約束ですが、1時に駅前で待つのはやめて、直接（ちょくせつ）レストランに行きませんか。店の前で会いましょう。（佐藤）", "question": "二人は明日、どこで会いますか。", "correctAnswer": "レストランの前", "distractors": ["駅の前", "駅の中", "田中さんの家"], "explanation": "Sato suggests changing the meeting spot to '直接レストランに行きませんか。店の前で会いましょう'." },
        { "passage": "【ホテルの朝食のご案内】\n朝食は1階の食堂で、午前7時から9時半までです。部屋に食事を持っていくことはできません。", "question": "朝食について正しいものはどれですか。", "correctAnswer": "部屋で食べることはできない", "distractors": ["いつでも食べられる", "部屋に持って行くことができる", "2階の食堂で食べる"], "explanation": "The rule explicitly states '部屋に食事を持っていくことはできません' (You cannot take food to your room)." },
        { "passage": "山田さん\n山田さんの机の上に新しいペンを置いておきました。古いペンはインクが出ないので捨てて、新しいのを使ってください。（部長）", "question": "山田さんは古いペンをどうしなければなりませんか。", "correctAnswer": "捨てる", "distractors": ["部長に返す", "机の中にしまう", "インクを入れる"], "explanation": "The boss says '古いペンはインクが出ないので捨てて...ください' (The old pen has no ink so throw it away)." },
        { "passage": "【クリーニング屋】\nワイシャツ：200円\nセーター：400円\n※毎週水曜日は、ワイシャツが半額（はんがく・100円）になります。", "question": "水曜日にワイシャツを出すといくらですか。", "correctAnswer": "100円", "distractors": ["200円", "400円", "150円"], "explanation": "On Wednesdays, shirts are half price: 'ワイシャツが半額（はんがく・100円）になります'." },
        { "passage": "マリアさん\n日曜日のバーベキューですが、もし雨が降ったら次の週の土曜日に変更します。朝8時に連絡しますね。（幹事）", "question": "日曜日に雨が降ったら、バーベキューはどうなりますか。", "correctAnswer": "次の週の土曜日になる", "distractors": ["中止になる", "そのまま日曜日に行う", "来月になる"], "explanation": "The organizer says 'もし雨が降ったら次の週の土曜日に変更します'." },
        { "passage": "【公園のルール】\nここは自転車に乗って入ることはできません。自転車は外の駐輪場に置いてから、歩いて入ってください。", "question": "自転車で来た人はどうしますか。", "correctAnswer": "外に置いて、歩いて入る", "distractors": ["自転車に乗ったまま入る", "自転車を押して入る", "公園には入れない"], "explanation": "The rule says '自転車は外の駐輪場に置いてから、歩いて入ってください'." },
        { "passage": "木村さん\n急にお客さんが来たので、今日の3時の会議は私だけ出られません。私のことは待たないで、みんなで始めていてください。（田中）", "question": "田中さんはどうして会議に出られませんか。", "correctAnswer": "急にお客さんが来たから", "distractors": ["病気になったから", "会議を忘れたから", "出張に行ったから"], "explanation": "Tanaka explains '急にお客さんが来たので、今日の3時の会議は私だけ出られません'." },
        { "passage": "【携帯電話の修理（直すこと）】\n・画面の修理：約1週間かかります。\n・電池（バッテリー）の交換：お店で1時間で終わります。", "question": "電池を新しくしたい時、どのくらい待ちますか。", "correctAnswer": "1時間", "distractors": ["1週間", "1日", "1ヶ月"], "explanation": "For battery exchange (電池の交換), it says 'お店で1時間で終わります'." },
        { "passage": "お父さん\nお風呂のお湯が出ません。冷たい水しか出ないの。今日中にガス会社に電話して、直してもらってください。（お母さん）", "question": "お母さんはお父さんに何をお願いしましたか。", "correctAnswer": "ガス会社に電話すること", "distractors": ["お風呂を洗うこと", "新しいお風呂を買うこと", "お湯を沸かすこと"], "explanation": "The mother requests 'ガス会社に電話して、直してもらってください'." },
        { "passage": "【アルバイト募集】\n仕事：コンビニの夜のレジ係\n時間：夜10時〜朝6時\n※夜遅いので、高校生は働くことができません。", "question": "このアルバイトができないのは誰ですか。", "correctAnswer": "高校生", "distractors": ["大学生", "外国人", "大人"], "explanation": "The restriction states '高校生は働くことができません' (High school students cannot work)." },
        { "passage": "鈴木さん\n明日の待ち合わせですが、駅の改札（かいさつ）の中ではなく、外にある時計の前にしましょう。人が多いですから。（佐藤）", "question": "佐藤さんはどこで待ち合わせをしたいですか。", "correctAnswer": "改札の外の時計の前", "distractors": ["改札の中", "改札の中の時計の前", "佐藤さんの家"], "explanation": "Sato suggests '駅の改札の中ではなく、外にある時計の前にしましょう'." },
        { "passage": "【図書館での飲食（食べたり飲んだりすること）】\n図書館の中では、ペットボトルの飲み物だけOKです。お弁当やお菓子は、外のベンチで食べてください。", "question": "図書館の中でしてもいいことは何ですか。", "correctAnswer": "ペットボトルの飲み物を飲む", "distractors": ["お弁当を食べる", "お菓子を食べる", "何でも食べたり飲んだりしていい"], "explanation": "The rule is '図書館の中では、ペットボトルの飲み物だけOKです'." },
        { "passage": "山田さん\n私が作っておいた会議の資料ですが、15枚コピーして、会議室の机に配っておいてください。私は遅れて行きます。（部長）", "question": "山田さんは資料をコピーした後、どうしますか。", "correctAnswer": "会議室の机に配る", "distractors": ["部長の机に置く", "山田さんの机にしまう", "捨ててしまう"], "explanation": "The boss instructs 'コピーして、会議室の机に配っておいてください'." },
        { "passage": "【電車の遅れ】\n前の駅での事故（じこ）のため、電車が15分遅れています。お急ぎの方は、電車を待たないでバスを使ってください。", "question": "急いでいる人はどうすればいいですか。", "correctAnswer": "バスを使う", "distractors": ["電車を待つ", "歩いて行く", "家に帰る"], "explanation": "The notice advises 'お急ぎの方は、電車を待たないでバスを使ってください'." },
        { "passage": "スミスさん\n明日の授業の宿題は、教科書の20ページから23ページまでです。24ページはまだ習っていないのでやらなくていいです。（先生）", "question": "スミスさんがやらなくていいページはどこですか。", "correctAnswer": "24ページ", "distractors": ["20ページ", "23ページ", "20ページから23ページ"], "explanation": "The teacher explicitly says '24ページはまだ習っていないのでやらなくていいです'." },
        { "passage": "【カフェのモーニング】\nコーヒーとパンのセット：400円\n※これにサラダをつけると、全部で500円になります。", "question": "コーヒーとパンとサラダを頼むと、いくらですか。", "correctAnswer": "500円", "distractors": ["400円", "900円", "100円"], "explanation": "The menu says 'サラダをつけると、全部で500円になります' (If you add a salad, it becomes 500 yen in total)." },
        { "passage": "田中さん\n明日の朝から午後にかけて雪が降るそうです。車で来ると危ないので、明日は電車で会社に来たほうがいいですよ。（木村）", "question": "木村さんは田中にどうやって会社に来たほうがいいと言っていますか。", "correctAnswer": "電車", "distractors": ["車", "バス", "歩き"], "explanation": "Kimura advises '車ではなく電車で会社に来たほうがいいですよ'." },
        { "passage": "【駐輪場（自転車を置く場所）のルール】\nここに自転車を止める人は、必ず管理人に言って「駐輪シール」をもらい、自転車に貼ってください。", "question": "自転車を止めるために、何が必要ですか。", "correctAnswer": "管理人にシールをもらって貼る", "distractors": ["お金を払う", "名前を書く", "自転車を洗う"], "explanation": "The rule is '必ず管理人に言って「駐輪シール」をもらい、自転車に貼ってください'." },
        { "passage": "山田さん\n今週の金曜日の夜、一緒に食事に行きませんか。駅前に新しくできた、とても美味しいイタリアンのお店です。（佐藤）", "question": "佐藤さんは山田さんを何に誘っていますか。", "correctAnswer": "金曜日の夜にイタリアンを食べに行くこと", "distractors": ["金曜日の夜にお酒を飲みに行くこと", "土曜日にイタリアンを食べに行くこと", "一緒にイタリア料理を作ること"], "explanation": "Sato invites Yamada saying '金曜日の夜、一緒に食事に行きませんか...美味しいイタリアンのお店です'." },
        { "passage": "【コピー機の使い方】\n1. お金を入れます。\n2. 紙の大きさを選びます。\n3. 「スタート」ボタンを押します。", "question": "お金を入れた後、スタートボタンを押す前に何をしますか。", "correctAnswer": "紙の大きさを選ぶ", "distractors": ["もう一度お金を入れる", "コピーを取り出す", "店員を呼ぶ"], "explanation": "Step 2, which comes after inserting money and before hitting start, is '紙の大きさを選びます'." }

    ],

    // 10. Synonyms (Paraphrasing)
    synonym_questions: [
        { "question": "このテストはとても【かんたん】でした。", "correctAnswer": "やさしかった", "distractors": ["むずかしかった", "ながかった", "わるかった"], "explanation": "かんたん (kantan) means easy or simple, which is a direct synonym for やさしい (yasashii)." },
        { "question": "【ゆうべ】、本を読みました。", "correctAnswer": "きのうの夜", "distractors": ["きのうの朝", "きょうの夜", "おとといの夜"], "explanation": "ゆうべ (yuube) specifically means 'last night' or 'yesterday evening'." },
        { "question": "【おととい】、雨が降りました。", "correctAnswer": "きのうの前の日", "distractors": ["あしたの次の日", "きのうの次の日", "きょうの前の日"], "explanation": "おととい (ototoi) means 'the day before yesterday'." },
        { "question": "【あさって】、テストがあります。", "correctAnswer": "あしたの次の日", "distractors": ["あしたの前の日", "きのうの次の日", "きょうの次の日"], "explanation": "あさって (asatte) means 'the day after tomorrow'." },
        { "question": "【けさ】、コーヒーを飲みました。", "correctAnswer": "今日の朝", "distractors": ["きのうの朝", "明日の朝", "今日の夜"], "explanation": "けさ (kesa) is the specific word for 'this morning'." },
        { "question": "公園に人が【たくさん】います。", "correctAnswer": "いっぱい", "distractors": ["すこし", "ぜんぜん", "あまり"], "explanation": "たくさん (takusan) and いっぱい (ippai) both mean 'a lot' or 'many'." },
        { "question": "コーヒーを【少し】飲みました。", "correctAnswer": "ちょっと", "distractors": ["たくさん", "いっぱい", "ぜんぶ"], "explanation": "少し (sukoshi) means 'a little', which is synonymous with the casual word ちょっと (chotto)." },
        { "question": "パーティーに人が【大勢】来ました。", "correctAnswer": "たくさんの人", "distractors": ["少しの人", "一人だけ", "誰も"], "explanation": "大勢 (おおぜい - oozei) specifically means 'a large number of people'." },
        { "question": "このケーキは【とても】おいしいです。", "correctAnswer": "すごく", "distractors": ["あまり", "ぜんぜん", "少し"], "explanation": "とても (totemo) means 'very', which matches the conversational word すごく (sugoku)." },
        { "question": "私は【いつも】7時に起きます。", "correctAnswer": "毎日", "distractors": ["時々", "たいてい", "ぜんぜん"], "explanation": "いつも (itsumo) means 'always'. In the context of waking up, 'every day' (毎日) carries the same meaning." },
        { "question": "宿題は【だいたい】終わりました。", "correctAnswer": "ほとんど", "distractors": ["ぜんぶ", "少し", "まだ"], "explanation": "だいたい (daitai) means 'mostly' or 'about', which is synonymous with ほとんど (hotondo)." },
        { "question": "この道を【まっすぐ】行ってください。", "correctAnswer": "曲がらないで", "distractors": ["止まって", "急いで", "ゆっくり"], "explanation": "まっすぐ (massugu) means 'straight'. The equivalent action is 'without turning' (曲がらないで)." },
        { "question": "日本語が【だんだん】上手になりました。", "correctAnswer": "少しずつ", "distractors": ["急に", "すぐに", "ぜんぜん"], "explanation": "だんだん (dandan) means 'gradually', which is the same as 'little by little' (少しずつ)." },
        { "question": "明日は【たぶん】雨でしょう。", "correctAnswer": "もしかしたら", "distractors": ["絶対に", "必ず", "ぜんぜん"], "explanation": "たぶん (tabun) means 'probably' or 'perhaps', similar to もしかしたら (moshikashitara)." },
        { "question": "私は【よく】音楽を聞きます。", "correctAnswer": "たくさん", "distractors": ["あまり", "ぜんぜん", "少しだけ"], "explanation": "In this context, よく (yoku) means 'often' or 'frequently', equating to doing it a lot (たくさん)." },
        { "question": "これは【大事】な手紙です。", "correctAnswer": "大切", "distractors": ["だめ", "きれい", "有名"], "explanation": "大事 (だいじ - daiji) means 'important', which is a direct synonym of 大切 (たいせつ - taisetsu)." },
        { "question": "ここに入っては【だめ】です。", "correctAnswer": "いけません", "distractors": ["いいです", "かまいません", "ください"], "explanation": "だめ (dame) means 'not good' or 'must not', which corresponds to 〜てはいけません (must not do)." },
        { "question": "田中さんの家はとても【立派】ですね。", "correctAnswer": "素晴らしい", "distractors": ["大きい", "高い", "古い"], "explanation": "立派 (りっぱ - rippa) means 'splendid' or 'magnificent', mapping to 素晴らしい (すばらしい)." },
        { "question": "鈴木さんは歌が【上手】です。", "correctAnswer": "うまい", "distractors": ["へた", "すき", "きらい"], "explanation": "上手 (じょうず - jouzu) means 'skilled', which is synonymous with うまい (umai)." },
        { "question": "私は絵が【下手】です。", "correctAnswer": "うまくない", "distractors": ["きらい", "うまい", "すき"], "explanation": "下手 (へた - heta) means 'unskilled', meaning one is not good at it (うまくない)." },
        { "question": "私の父はまだ【若い】です。", "correctAnswer": "年を取っていません", "distractors": ["病気です", "元気です", "年を取っています"], "explanation": "若い (わかい - wakai) means 'young', which means 'has not grown old' (年を取っていません)." },
        { "question": "今日は【暖かい】ですね。", "correctAnswer": "寒くない", "distractors": ["暑くない", "涼しい", "暑い"], "explanation": "暖かい (あたたかい - atatakai) means 'warm', implying it is not cold (寒くない)." },
        { "question": "今日は【涼しい】ですね。", "correctAnswer": "暑くない", "distractors": ["寒くない", "暖かい", "寒い"], "explanation": "涼しい (すずしい - suzushii) means 'cool/refreshing', implying it is not hot (暑くない)." },
        { "question": "この部屋は【暗い】です。", "correctAnswer": "明るくない", "distractors": ["狭くない", "広くない", "明るい"], "explanation": "暗い (くらい - kurai) means 'dark', so it is not bright (明るくない)." },
        { "question": "このカバンはとても【重い】です。", "correctAnswer": "軽くない", "distractors": ["高くない", "安くない", "軽い"], "explanation": "重い (おもい - omoi) means 'heavy', so it is not light (軽くない)." },
        { "question": "駅はここから【近い】です。", "correctAnswer": "遠くない", "distractors": ["狭くない", "広くない", "遠い"], "explanation": "近い (ちかい - chikai) means 'near/close', so it is not far (遠くない)." },
        { "question": "マリアさんの部屋は【きれい】です。", "correctAnswer": "汚くない", "distractors": ["狭くない", "広くない", "汚い"], "explanation": "きれい (kirei) means 'clean/beautiful', meaning it is not dirty (汚くない - kitanakunai)." },
        { "question": "この辞書は【便利】です。", "correctAnswer": "役に立つ", "distractors": ["きれい", "重い", "高い"], "explanation": "便利 (べんり - benri) means 'convenient' or 'useful' (役に立つ - yakunitatsu)." },
        { "question": "日曜日に【洗濯しました】。", "correctAnswer": "服を洗いました", "distractors": ["部屋をきれいにしました", "ご飯を作りました", "服を買いました"], "explanation": "洗濯する (せんたくする - sentaku suru) specifically means doing the laundry (服を洗う)." },
        { "question": "毎日、部屋を【掃除します】。", "correctAnswer": "きれいにします", "distractors": ["服を洗います", "ご飯を作ります", "買い物をします"], "explanation": "掃除する (そうじする - souji suru) means cleaning a room to make it clean (きれいにする)." },
        { "question": "私は病院で【働いています】。", "correctAnswer": "仕事をしています", "distractors": ["勉強しています", "休んでいます", "寝ています"], "explanation": "働く (はたらく - hataraku) means 'to work', which is the same as doing a job (仕事をする)." },
        { "question": "朝、犬と【散歩します】。", "correctAnswer": "歩きます", "distractors": ["走ります", "遊びます", "寝ます"], "explanation": "散歩する (さんぽする - sanpo suru) means taking a stroll or walking (歩く)." },
        { "question": "毎日、お風呂に【入ります】。", "correctAnswer": "体を洗って温まります", "distractors": ["顔を洗います", "手を洗います", "服を洗います"], "explanation": "お風呂に入る (ofuro ni hairu) refers to taking a bath to wash and warm the body." },
        { "question": "あしたは【晴れる】でしょう。", "correctAnswer": "天気がよくなる", "distractors": ["雨が降る", "雪が降る", "風が吹く"], "explanation": "晴れる (はれる - hareru) means to clear up, resulting in good weather (天気がいい)." },
        { "question": "マリアさんに日本語を【教えます】。", "correctAnswer": "私がマリアさんの先生です", "distractors": ["私がマリアさんの生徒です", "私がマリアさんに聞きます", "私がマリアさんから習います"], "explanation": "教える (おしえる - oshieru) means 'to teach'. Therefore, the speaker acts as the teacher." },
        { "question": "木村さんにピアノを【習います】。", "correctAnswer": "教えてもらいます", "distractors": ["教えます", "見せます", "見てもらいます"], "explanation": "習う (ならう - narau) means 'to learn from someone', equivalent to being taught (教えてもらう)." },
        { "question": "鈴木さんに本を【貸しました】。", "correctAnswer": "私の本を鈴木さんに渡しました", "distractors": ["鈴木さんの本を私がもらいました", "私の本を鈴木さんに売りました", "鈴木さんの本を私が買いました"], "explanation": "貸す (かす - kasu) means 'to lend', so the speaker gives their item to Suzuki." },
        { "question": "田中さんにペンを【借りました】。", "correctAnswer": "田中さんのペンを私がもらって使います", "distractors": ["私のペンを田中さんに渡しました", "田中さんのペンを私が買いました", "私のペンを田中さんに売りました"], "explanation": "借りる (かりる - kariru) means 'to borrow', meaning the speaker receives Tanaka's item to use." },
        { "question": "映画は6時に【始まります】。", "correctAnswer": "スタートします", "distractors": ["終わります", "休みます", "閉まります"], "explanation": "始まる (はじまる - hajimaru) means 'to begin', which matches the borrowed word スタートする." },
        { "question": "昨日、国に荷物を【送りました】。", "correctAnswer": "出しました", "distractors": ["もらいました", "買いました", "借りました"], "explanation": "送る (おくる - okuru) means 'to send', which is synonymous with sending out or mailing (出す)." },
        { "question": "先生に【質問します】。", "correctAnswer": "わからないことを聞きます", "distractors": ["わかっていることを言います", "返事をします", "ありがとうと言います"], "explanation": "質問する (しつもんする - shitsumon suru) means asking about something you don't know." },
        { "question": "先生が【答えます】。", "correctAnswer": "返事をします", "distractors": ["質問します", "聞きます", "怒ります"], "explanation": "答える (こたえる - kotaeru) means 'to answer', which is the same as giving a reply (返事をする)." },
        { "question": "マイケルさんは【有名】です。", "correctAnswer": "みんなが知っています", "distractors": ["お金がたくさんあります", "とても元気です", "歌が上手です"], "explanation": "有名 (ゆうめい - yuumei) means 'famous', meaning everyone knows them." },
        { "question": "明日は【暇】です。", "correctAnswer": "時間があります", "distractors": ["時間がありません", "忙しいです", "休みじゃありません"], "explanation": "暇 (ひま - hima) means 'free time', which equates to not being busy and having time." },
        { "question": "パンを半分に【切りました】。", "correctAnswer": "ナイフで小さくしました", "distractors": ["ナイフで大きくしました", "ナイフで食べました", "ナイフで買いました"], "explanation": "切る (きる - kiru) means 'to cut', which involves making something smaller with a tool." },
        { "question": "山田さんに花を【渡しました】。", "correctAnswer": "あげました", "distractors": ["もらいました", "買いました", "見ました"], "explanation": "渡す (わたす - watasu) means 'to hand over', which is synonymous with giving (あげる)." },
        { "question": "お金がなくて【困りました】。", "correctAnswer": "どうしたらいいかわかりませんでした", "distractors": ["とてもうれしかったです", "安心しました", "怒りました"], "explanation": "困る (こまる - komaru) means 'to be troubled/in a bind', not knowing what to do." },
        { "question": "この靴はとても【丈夫】です。", "correctAnswer": "壊れにくい", "distractors": ["きれい", "高い", "歩きにくい"], "explanation": "丈夫 (じょうぶ - joubu) means 'sturdy' or 'durable', so it is hard to break (壊れにくい)." },
        { "question": "道が【混んでいます】。", "correctAnswer": "車がたくさんあります", "distractors": ["車が少ししかありません", "車が止まっています", "車が走っていません"], "explanation": "混む (こむ - komu) means 'to be crowded'. On a road, this means there are many cars." },
        { "question": "【もうすぐ】バスが来ます。", "correctAnswer": "あと少しで", "distractors": ["ずっとあとで", "きのう", "もう"] , "explanation": "もうすぐ (mousugu) means 'very soon' or 'in a little while' (あと少しで)." },
        { "question": "部屋が【きたない】です。", "correctAnswer": "きれいじゃない", "distractors": ["あかるくない", "ひろくない", "せまくない"], "explanation": "汚い (きたない - kitanai) means 'dirty', which is synonymous with 'not clean' (きれいじゃない)." },
        { "passage": "トイレは【あちら】です。", "correctAnswer": "あの場所", "distractors": ["この場所", "その場所", "どの場所"], "explanation": "あちら (achira) is the polite directional word for 'that way / over there' (あの場所)." },
        { "question": "駅は【そちら】です。", "correctAnswer": "その場所", "distractors": ["あの場所", "この場所", "どの場所"], "explanation": "そちら (sochira) is the polite directional word for 'that way / near you' (その場所)." },
        { "question": "先生は【こちら】です。", "correctAnswer": "この場所", "distractors": ["あの場所", "その場所", "どの場所"], "explanation": "こちら (kochira) is the polite directional word for 'this way / near me' (この場所)." },
        { "question": "私は【たいてい】朝ごはんにパンを食べます。", "correctAnswer": "いつも", "distractors": ["ぜんぜん", "あまり", "ときどき"], "explanation": "たいてい (taitei) means 'usually' or 'mostly', which is very close in meaning to いつも (always)." },
        { "question": "【ときどき】映画を見ます。", "correctAnswer": "毎日じゃありません", "distractors": ["いつも見ます", "ぜんぜん見ません", "一度も見ません"], "explanation": "ときどき (tokidoki) means 'sometimes', which means it doesn't happen every day." },
        { "question": "その映画は【つまらなかった】です。", "correctAnswer": "おもしろくなかった", "distractors": ["ながかった", "みじかかった", "こわかった"], "explanation": "つまらない (tsumaranai) means 'boring', so the movie was not interesting (おもしろくなかった)." },
        { "question": "【さっき】田中さんに会いました。", "correctAnswer": "少し前に", "distractors": ["ずっと前に", "明日の朝に", "今日の夜に"], "explanation": "さっき (sakki) means 'a little while ago' or 'just now' (少し前に)." },
        { "question": "【さいきん】雨が多いです。", "correctAnswer": "このごろ", "distractors": ["むかし", "ずっとあと", "らいねん"], "explanation": "最近 (さいきん - saikin) means 'recently', which is synonymous with このごろ (konogoro - these days)." },
        { "question": "【そろそろ】帰りましょう。", "correctAnswer": "もうすぐ", "distractors": ["ずっとあとで", "まだ", "ぜんぜん"], "explanation": "そろそろ (sorosoro) means 'it is about time to...', matching closely with もうすぐ (mousugu - very soon)." },
        { "question": "田中さんは【親切】です。", "correctAnswer": "やさしい", "distractors": ["こわい", "うるさい", "わかい"], "explanation": "親切 (しんせつ - shinsetsu) means 'kind' or 'helpful', which maps directly to やさしい (yasashii)." },
        { "question": "空が【曇って】います。", "correctAnswer": "晴れていません", "distractors": ["雨が降っています", "雪が降っています", "風が吹いています"], "explanation": "曇る (くもる - komoru) means 'to get cloudy'. If it is cloudy, it is not sunny (晴れていません)." },
        { "question": "祭りは【にぎやか】です。", "correctAnswer": "人がたくさんいます", "distractors": ["とても静かです", "人が誰もいません", "車がたくさんあります"], "explanation": "賑やか (にぎやか - nigiyaka) means 'bustling' or 'lively', implying a crowd of people." },
        { "question": "答えを【間違えました】。", "correctAnswer": "答えがただしくなかったです", "distractors": ["答えがわかりませんでした", "答えを書けませんでした", "答えがよかったです"], "explanation": "間違える (まちがえる - machigaeru) means 'to make a mistake', meaning it was not correct (ただしくなかった)." },
        { "question": "約束を【忘れました】。", "correctAnswer": "約束をおぼえていません", "distractors": ["約束を守りました", "約束をしました", "約束を聞きました"], "explanation": "忘れる (わすれる - wasureru) means 'to forget', so you do not remember it (おぼえていません)." },
        { "question": "財布を【なくしました】。", "correctAnswer": "どこにあるかわかりません", "distractors": ["財布を買いました", "財布を見つけました", "財布をもらいました"], "explanation": "なくす (nakusu) means 'to lose something', meaning you don't know where it is." },
        { "question": "バスが【遅れました】。", "correctAnswer": "時間に来ませんでした", "distractors": ["早く来ました", "すぐに来ました", "時間がありませんでした"], "explanation": "遅れる (おくれる - okureru) means 'to be late', so it didn't come on time (時間に来ませんでした)." },
        { "question": "階段を【降ります】。", "correctAnswer": "下へ行きます", "distractors": ["上へ行きます", "まっすぐ行きます", "止まります"], "explanation": "降りる (おりる - oriru) means 'to go down' or 'descend' (下へ行く)." },
        { "question": "階段を【上がります】。", "correctAnswer": "上へ行きます", "distractors": ["下へ行きます", "まっすぐ行きます", "止まります"], "explanation": "上がる (あがる - agaru) means 'to go up' or 'ascend' (上へ行く)." },
        { "question": "シャツを【着ます】。", "correctAnswer": "服を体に身につけます", "distractors": ["服を洗います", "服を買います", "服を脱ぎます"], "explanation": "着る (きる - kiru) means 'to put on / wear' clothing on the upper body." },
        { "question": "靴を【脱ぎます】。", "correctAnswer": "靴を取ります", "distractors": ["靴を洗います", "靴を買います", "靴を履きます"], "explanation": "脱ぐ (ぬぐ - nugu) means 'to take off' shoes or clothes." },
        { "question": "帽子を【かぶります】。", "correctAnswer": "頭にのせます", "distractors": ["手に持ちます", "足に履きます", "目にかけます"], "explanation": "かぶる (kaburu) is the specific verb used for wearing things on the head, like hats." },
        { "question": "ドアを【閉めます】。", "correctAnswer": "開けません", "distractors": ["洗います", "作ります", "こわします"], "explanation": "閉める (しめる - shimeru) means 'to close'. If you close it, you do not open it (開けない)." },
        { "question": "電気を【つけます】。", "correctAnswer": "明るくします", "distractors": ["暗くします", "消します", "こわします"], "explanation": "つける (tsukeru) means 'to turn on' the lights, which makes the room bright (明るくする)." },
        { "question": "電気を【消します】。", "correctAnswer": "暗くします", "distractors": ["明るくします", "つけます", "こわします"], "explanation": "消す (けす - kesu) means 'to turn off' the lights, which makes the room dark (暗くする)." },
        { "question": "新しい言葉を【覚えます】。", "correctAnswer": "頭に入れます", "distractors": ["忘れます", "捨てます", "なくします"], "explanation": "覚える (おぼえる - oboeru) means 'to memorize/learn', metaphorically putting it in your head." },
        { "question": "本を【返します】。", "correctAnswer": "もとの場所に持っていきます", "distractors": ["新しい本を買います", "本をなくします", "本を捨てます"], "explanation": "返す (かえす - kaesu) means 'to return something', taking it back where it belongs." },
        { "question": "荷物を【運びます】。", "correctAnswer": "ほかの場所へ持っていきます", "distractors": ["荷物を開けます", "荷物を捨てます", "荷物を買います"], "explanation": "運ぶ (はこぶ - hakobu) means 'to transport/carry', moving items to another location." },
        { "question": "車を【止めます】。", "correctAnswer": "動かしません", "distractors": ["走らせます", "買います", "洗います"], "explanation": "止める (とめる - tomeru) means 'to stop', so the car is no longer moving (動かさない)." },
        { "question": "音楽を【やめます】。", "correctAnswer": "終わりにします", "distractors": ["始めます", "聞きます", "歌います"], "explanation": "やめる (yameru) means 'to quit/stop' an action, bringing it to an end (終わりにする)." },
        { "question": "道を【渡ります】。", "correctAnswer": "反対側に行きます", "distractors": ["まっすぐ行きます", "曲がります", "止まります"], "explanation": "渡る (わたる - wataru) means 'to cross', going to the opposite side of a street or river." },
        { "question": "かぜを【ひきました】。", "correctAnswer": "病気になりました", "distractors": ["元気になりました", "けがをしました", "疲れました"], "explanation": "風邪をひく (kaze o hiku) is the idiom for 'catching a cold', a type of sickness (病気)." },
        { "question": "お金が【要ります】。", "correctAnswer": "お金が必要です", "distractors": ["お金がありません", "お金がたくさんあります", "お金をあげます"], "explanation": "要る (いる - iru) means 'to need', directly translating to 必要 (ひつよう - hitsuyou)." },
        { "question": "タクシーに【乗ります】。", "correctAnswer": "タクシーで行きます", "distractors": ["タクシーから出ます", "タクシーを待ちます", "タクシーを呼びます"], "explanation": "乗る (のる - noru) means 'to ride/get on'. It implies going somewhere by that vehicle." },
        { "question": "電車を【降ります】。", "correctAnswer": "電車から出ます", "distractors": ["電車に乗ります", "電車を待ちます", "電車を見ます"], "explanation": "降りる (おりる - oriru) means 'to get off / disembark', exiting the train." },
        { "question": "パソコンを【使います】。", "correctAnswer": "パソコンで仕事をします", "distractors": ["パソコンを買います", "パソコンを直します", "パソコンを捨てます"], "explanation": "使う (つかう - tsukau) means 'to use', applying the tool to a task or job." },
        { "question": "【すぐ】行きます。", "correctAnswer": "今から早く", "distractors": ["ゆっくり", "あした", "あとで"], "explanation": "すぐ (sugu) means 'immediately / right away' (今から早く)." },
        { "question": "【ゆっくり】話してください。", "correctAnswer": "早く話さないで", "distractors": ["大きな声で", "小さな声で", "急いで"], "explanation": "ゆっくり (yukkuri) means 'slowly', asking someone not to speak fast (早く話さないで)." },
        { "question": "【あとで】食べます。", "correctAnswer": "今は食べません", "distractors": ["もう食べました", "さっき食べました", "すぐに食べます"], "explanation": "あとで (atode) means 'later', implying the action will not happen right now." },
        { "question": "【はじめて】日本へ来ました。", "correctAnswer": "前は来ませんでした", "distractors": ["もう何度も来ました", "明日も来ます", "ずっと日本にいます"], "explanation": "初めて (はじめて - hajimete) means 'for the first time', so they had not come before." },
        { "question": "【また】会いましょう。", "correctAnswer": "もう一度", "distractors": ["はじめて", "さいごに", "ぜんぜん"], "explanation": "また (mata) means 'again', meaning one more time (もう一度)." },
        { "question": "この映画は【あまり】よくないです。", "correctAnswer": "ぜんぜんよくない", "distractors": ["とてもよい", "すごくよい", "一番よい"], "explanation": "あまり + negative means 'not very', similar to 'not good at all' (ぜんぜんよくない)." },
        { "question": "【だんだん】寒くなりました。", "correctAnswer": "少しずつ", "distractors": ["急に", "すぐに", "ぜんぜん"], "explanation": "だんだん (dandan) means 'gradually', perfectly matching 少しずつ (little by little)." },
        { "question": "【ちょうど】10時です。", "correctAnswer": "10時ピッタリです", "distractors": ["だいたい10時です", "10時ごろです", "もうすぐ10時です"], "explanation": "ちょうど (choudo) means 'exactly / precisely' (ピッタリ)." },
        { "question": "【もし】雨が降ったら。", "correctAnswer": "雨の時", "distractors": ["雨だから", "雨が降ってから", "雨の前"], "explanation": "もし (moshi) introduces a hypothetical conditional 'if' scenario (in the event of rain)." },
        { "question": "【いくら】ですか。", "correctAnswer": "値段は何ですか", "distractors": ["時間は何ですか", "数は何ですか", "場所はどこですか"], "explanation": "いくら (ikura) asks 'how much', questioning the price (値段)." },
        { "question": "【どのくらい】かかりますか。", "correctAnswer": "時間はどれくらいですか", "distractors": ["値段はいくらですか", "数はいくつですか", "場所はどこですか"], "explanation": "どのくらい (dono kurai) combined with かかる asks for duration/time." },
        { "question": "【いくつ】ありますか。", "correctAnswer": "数はどれくらいですか", "distractors": ["値段はいくらですか", "時間はどれくらいですか", "場所はどこですか"], "explanation": "いくつ (ikutsu) is the question word for 'how many' items (数 - kazu)." },
        { "question": "【どこ】ですか。", "correctAnswer": "場所はどこですか", "distractors": ["どの人ですか", "何日ですか", "何時ですか"], "explanation": "どこ (doko) is the question word requesting a location (場所)." },
        { "question": "【だれ】ですか。", "correctAnswer": "どの人ですか", "distractors": ["場所はどこですか", "何日ですか", "どれですか"], "explanation": "だれ (dare) is the question word asking 'who' (which person)." },
        { "question": "【なぜ】ですか。", "correctAnswer": "どうしてですか", "distractors": ["どこですか", "だれですか", "いつですか"], "explanation": "なぜ (naze) means 'why', which is the formal equivalent of どうして (doushite)." },
        { "question": "【どちら】がいいですか。", "correctAnswer": "二つのうち、どれですか", "distractors": ["だれがいいですか", "どこがいいですか", "いつがいいですか"], "explanation": "どちら (dochira) asks 'which one' between exactly two options." },
        { "question": "二人は【おなじ】です。", "correctAnswer": "ちがいません", "distractors": ["ちがいます", "似ていません", "わかりません"], "explanation": "同じ (おなじ - onaji) means 'same', so there is no difference (ちがわない)." },
        { "question": "二人は【ちがいます】。", "correctAnswer": "おなじじゃありません", "distractors": ["おなじです", "似ています", "わかりません"], "explanation": "違う (ちがう - chigau) means 'different', the exact opposite of same (おなじ)." },
        { "question": "【いろいろな】人がいます。", "correctAnswer": "たくさんのちがう人", "distractors": ["おなじ人だけ", "一人だけ", "誰もいません"], "explanation": "色々な (いろいろな - iroiro na) means 'various / various kinds of'." },
        { "question": "【ほかの】ものを見せてください。", "correctAnswer": "これじゃなくて、別の", "distractors": ["これと同じ", "ぜんぶの", "さいごの"], "explanation": "他の (ほかの - hoka no) means 'other', meaning something else." },
        { "question": "【つぎの】駅で降ります。", "correctAnswer": "今の駅のあとの駅", "distractors": ["前の駅", "いちばん最初の駅", "今の駅"], "explanation": "次の (つぎの - tsugi no) means 'next', the one coming after the current one." },
        { "question": "これが【さいごの】電車です。", "correctAnswer": "これのあとはありません", "distractors": ["これが最初の電車です", "次にも電車があります", "まだたくさんあります"], "explanation": "最後の (さいごの - saigo no) means 'last / final', there are no more after it." },
        { "question": "【さいしょの】ページを開いてください。", "correctAnswer": "いちばん前のページ", "distractors": ["いちばん後のページ", "真ん中のページ", "最後のページ"], "explanation": "最初の (さいしょの - saisho no) means 'first', located at the very front." },
        { "question": "その場所は【きけん】です。", "correctAnswer": "あぶないです", "distractors": ["安全です", "きれいです", "静かです"], "explanation": "危険 (きけん - kiken) means 'danger', directly mapping to the adjective あぶない (abunai)." },
        { "question": "これは【むだ】です。", "correctAnswer": "いりません", "distractors": ["ひつようです", "大切です", "大事です"], "explanation": "無駄 (むだ - muda) means 'wasteful' or 'pointless', implying it is not needed." },
        { "question": "それは【むり】です。", "correctAnswer": "できません", "distractors": ["できます", "かんたんです", "すぐ終わります"], "explanation": "無理 (むり - muri) means 'impossible', meaning one cannot do it (できません)." },
        { "question": "ここは【しずか】です。", "correctAnswer": "うるさくないです", "distractors": ["にぎやかです", "汚いです", "暗いです"], "explanation": "静か (しずか - shizuka) means 'quiet', so it is not noisy (うるさくない)." },
        { "question": "私は絵が【へた】です。", "correctAnswer": "じょうずじゃないです", "distractors": ["すきです", "とくいです", "じょうずです"], "explanation": "下手 (へた - heta) means 'unskilled', the negative of じょうず (jouzu)." },
        { "question": "この映画は【たのしい】です。", "correctAnswer": "つまらなくないです", "distractors": ["かなしいです", "こわいです", "つまらないです"], "explanation": "楽しい (たのしい - tanoshii) means 'fun/enjoyable', so it is not boring." },
        { "question": "このお菓子は【あまい】です。", "correctAnswer": "さとうのあじです", "distractors": ["しおのあじです", "レモンのあじです", "くすりのあじです"], "explanation": "甘い (あまい - amai) means 'sweet', like the taste of sugar (さとう)." },
        { "question": "このカレーは【からい】です。", "correctAnswer": "口がいたくなるあじです", "distractors": ["さとうのあじです", "レモンのあじです", "くすりのあじです"], "explanation": "辛い (からい - karai) means 'spicy/hot', which burns the mouth." },
        { "question": "このコーヒーは【にがい】です。", "correctAnswer": "くすりのあじです", "distractors": ["さとうのあじです", "しおのあじです", "レモンのあじです"], "explanation": "苦い (にがい - nigai) means 'bitter', like the taste of medicine (くすり)." },
        { "question": "このみかんは【すっぱい】です。", "correctAnswer": "レモンのあじです", "distractors": ["さとうのあじです", "くすりのあじです", "しおのあじです"], "explanation": "酸っぱい (すっぱい - suppai) means 'sour', like the taste of a lemon." },
        { "question": "この肉は【かたい】です。", "correctAnswer": "やわらかくないです", "distractors": ["あまいです", "すっぱいです", "やわらかいです"], "explanation": "硬い (かたい - katai) means 'hard/tough', the opposite of soft (やわらかい)." },
        { "question": "このお茶は【あつい】です。", "correctAnswer": "つめたくないです", "distractors": ["すずしいです", "つめたいです", "ぬるいです"], "explanation": "熱い (あつい - atsui) applied to things means 'hot to the touch', not cold." },
        { "question": "この山は【ひくい】です。", "correctAnswer": "たかくないです", "distractors": ["おおきいです", "たかいです", "ひろいです"], "explanation": "低い (ひくい - hikui) means 'low', the opposite of high/tall (たかい)." },
        { "question": "このえんぴつは【みじかい】です。", "correctAnswer": "ながくないです", "distractors": ["ふといです", "ながいです", "ほそいです"], "explanation": "短い (みじかい - mijikai) means 'short', the opposite of long (ながい)." },
        { "question": "この木は【ふとい】です。", "correctAnswer": "ほそくないです", "distractors": ["みじかいです", "ながいです", "ほそいです"], "explanation": "太い (ふとい - futoi) means 'thick/fat', the opposite of thin (ほそい)." },
        { "question": "この本は【うすい】です。", "correctAnswer": "あつくないです", "distractors": ["おもいです", "あついです", "ふといです"], "explanation": "薄い (うすい - usui) means 'thin' (for flat objects), the opposite of thick (あつい)." },
        { "question": "この電車は【はやい】です。", "correctAnswer": "おそくないです", "distractors": ["おそいです", "たかいです", "やすいです"], "explanation": "速い (はやい - hayai) means 'fast', the opposite of slow (おそい)." },
        { "question": "このカメラは【あたらし】です。", "correctAnswer": "ふるくないです", "distractors": ["ふるいです", "やすいです", "たかいです"], "explanation": "新しい (あたらしい - atarashii) means 'new', the opposite of old (ふるい)." },
        { "question": "この時計は【やすい】です。", "correctAnswer": "たかくないです", "distractors": ["おもいです", "たかいです", "かるいです"], "explanation": "安い (やすい - yasui) means 'cheap', the opposite of expensive (たかい)." },
        { "question": "この料理は【まずい】です。", "correctAnswer": "おいしくないです", "distractors": ["おいしいです", "あまいです", "からいです"], "explanation": "不味い (まずい - mazui) means 'bad tasting', the opposite of delicious (おいしい)." },
        { "question": "この部屋は【せまい】です。", "correctAnswer": "ひろくないです", "distractors": ["あかるいです", "ひろいです", "くらいです"], "explanation": "狭い (せまい - semai) means 'narrow/cramped', the opposite of wide (ひろい)." },
        { "question": "この車は【わるい】です。", "correctAnswer": "よくないです", "distractors": ["よいです", "はやいです", "あたらしです"], "explanation": "悪い (わるい - warui) means 'bad', the opposite of good (よい)." },
        { "question": "外は【くらい】です。", "correctAnswer": "あかるくないです", "distractors": ["あかるいです", "ひろいです", "せまいです"], "explanation": "暗い (くらい - kurai) means 'dark', the opposite of bright (あかるい)." },
        { "question": "学校は【ちかい】です。", "correctAnswer": "とおくないです", "distractors": ["とおいです", "せまいです", "ひろいです"], "explanation": "近い (ちかい - chikai) means 'near/close', the opposite of far (とおい)." },
        { "question": "人が【おおい】です。", "correctAnswer": "すくなくないです", "distractors": ["すくないです", "わかいです", "ふるいです"], "explanation": "多い (おおい - ooi) means 'many', the opposite of few (すくない)." },
        { "question": "今日は【いそがしい】です。", "correctAnswer": "ひまじゃないです", "distractors": ["ひまです", "しずかです", "うるさいです"], "explanation": "忙しい (いそがしい - isogashii) means 'busy', the opposite of free time (ひま)." },
        { "question": "風が【すずしい】です。", "correctAnswer": "あつくないです", "distractors": ["あついです", "あたたかいです", "さむいです"], "explanation": "涼しい (すずしい - suzushii) means 'cool/refreshing', the opposite of hot (あつい)." },
        { "question": "部屋が【あたたかい】です。", "correctAnswer": "さむくないです", "distractors": ["さむいです", "すずしいです", "あついです"], "explanation": "暖かい (あたたかい - atatakai) means 'warm', the opposite of cold (さむい)." },
        { "question": "あの先生は【わかい】です。", "correctAnswer": "としをとっていないです", "distractors": ["としをとっています", "こどもです", "あかちゃんです"], "explanation": "若い (わかい - wakai) means 'young', implying they have not aged yet." },
        { "question": "この風は【つよい】です。", "correctAnswer": "よわくないです", "distractors": ["よわいです", "すずしいです", "あたたかいです"], "explanation": "強い (つよい - tsuyoi) means 'strong', the opposite of weak (よわい)." },
        { "question": "この石は【おもい】です。", "correctAnswer": "かるくないです", "distractors": ["かるいです", "かたいです", "やわらかいです"], "explanation": "重い (おもい - omoi) means 'heavy', the opposite of light (かるい)." },
        { "question": "この本は【おもしろい】です。", "correctAnswer": "つまらなくないです", "distractors": ["つまらないです", "むずかしいです", "かんたんです"], "explanation": "面白い (おもしろい - omoshiroi) means 'interesting', the opposite of boring (つまらない)." },
        { "question": "このジュースは【おいしい】です。", "correctAnswer": "まずくないです", "distractors": ["まずいです", "からいです", "にがいです"], "explanation": "美味しい (おいしい - oishii) means 'delicious', the opposite of bad tasting (まずい)." },
        { "question": "このパソコンは【よい】です。", "correctAnswer": "わるくないです", "distractors": ["わるいです", "ふるいです", "おもいです"], "explanation": "良い (よい - yoi) means 'good', the opposite of bad (わるい)." },
        { "question": "この犬は【おおきい】です。", "correctAnswer": "ちいさくないです", "distractors": ["ちいさいです", "こわいです", "かわいいです"], "explanation": "大きい (おおきい - ookii) means 'big', the opposite of small (ちいさい)." },
        { "question": "あの川は【ながい】です。", "correctAnswer": "みじかくないです", "distractors": ["みじかいです", "ふといです", "ほそいです"], "explanation": "長い (ながい - nagai) means 'long', the opposite of short (みじかい)." },
        { "question": "あのビルは【たかい】です。", "correctAnswer": "ひくくないです", "distractors": ["ひくいです", "やすいです", "ちいさいです"], "explanation": "高い (たかい - takai) when referring to buildings means 'tall', the opposite of low (ひくい)." },
        { "question": "この糸は【ほそい】です。", "correctAnswer": "ふとくないです", "distractors": ["ふといです", "ながいです", "みじかいです"], "explanation": "細い (ほそい - hosoi) means 'thin', the opposite of thick (ふとい)." },
        { "question": "このコートは【あつい】です。", "correctAnswer": "うすくないです", "distractors": ["うすいです", "ながいです", "みじかいです"], "explanation": "厚い (あつい - atsui) when referring to clothing means 'thick', the opposite of thin (うすい)." },
        { "question": "時計が【おそい】です。", "correctAnswer": "はやくないです", "distractors": ["はやいです", "たかいです", "やすいです"], "explanation": "遅い (おそい - osoi) means 'slow/late', the opposite of fast/early (はやい)." },
        { "question": "このお寺は【ふるい】です。", "correctAnswer": "あたらしくないです", "distractors": ["あたらしです", "きれいです", "きたないです"], "explanation": "古い (ふるい - furui) means 'old', the opposite of new (あたらしい)." },
        { "question": "【ぜんぶ】食べました。", "correctAnswer": "すべて", "distractors": ["少し", "はんぶん", "だいたい"], "explanation": "全部 (ぜんぶ - zenbu) means 'all/everything', which is completely synonymous with 全て (すべて - subete)." },
        { "question": "【みんな】来ました。", "correctAnswer": "全員", "distractors": ["一人だけ", "誰も", "何人か"], "explanation": "みんな (minna) means 'everyone', which translates to 全員 (ぜんいん - zen'in) in formal contexts." },
        { "question": "それは【たいへん】ですね。", "correctAnswer": "すごく疲れますね", "distractors": ["すごく楽しいですね", "すごく簡単ですね", "すごくひまですね"], "explanation": "大変 (たいへん - taihen) means 'tough' or 'exhausting' (疲れる)." },
        { "question": "私は【りょうしん】と住んでいます。", "correctAnswer": "父と母", "distractors": ["兄と姉", "弟と妹", "おじとおば"], "explanation": "両親 (りょうしん - ryoushin) specifically means 'parents' (father and mother)." },
        { "question": "私には【きょうだい】がいます。", "correctAnswer": "兄や弟、姉や妹", "distractors": ["父と母", "おじとおば", "子ども"], "explanation": "兄弟 (きょうだい - kyoudai) refers to siblings (older/younger brothers and sisters)." },
        { "question": "【きっぷ】を買います。", "correctAnswer": "電車に乗るための紙", "distractors": ["映画を見るための紙", "買い物のための紙", "手紙を送るための紙"], "explanation": "切符 (きっぷ - kippu) means a 'ticket', most commonly a train ticket." },
        { "question": "【にもつ】を持ちます。", "correctAnswer": "カバンや箱", "distractors": ["お金", "手紙", "服"], "explanation": "荷物 (にもつ - nimotsu) means 'baggage' or 'luggage' (bags and boxes)." },
        { "question": "【しょくどう】でご飯を食べます。", "correctAnswer": "ご飯を食べる部屋", "distractors": ["本を読む部屋", "寝る部屋", "勉強する部屋"], "explanation": "食堂 (しょくどう - shokudou) is a dining hall or cafeteria." },
        { "question": "【としより】が座ります。", "correctAnswer": "年を取った人", "distractors": ["若い人", "子ども", "赤ちゃん"], "explanation": "年寄り (としより - toshiyori) means 'elderly person' (年を取った人)." },
        { "question": "このテストは【むずかしい】です。", "correctAnswer": "やさしくない", "distractors": ["かんたんです", "すぐ終わります", "おもしろいです"], "explanation": "難しい (むずかしい - muzukashii) means 'difficult', so it is not easy (やさしくない)." },
        { "question": "カメラが【ほしい】です。", "correctAnswer": "カメラを買いたいです", "distractors": ["カメラを売りたいです", "カメラを捨てたいです", "カメラをこわしたいです"], "explanation": "欲しい (ほしい - hoshii) means 'to want', implying the desire to buy or obtain it." },
        { "question": "【ゆっくり】歩きます。", "correctAnswer": "急がないで", "distractors": ["走って", "止まって", "まっすぐ"], "explanation": "ゆっくり (yukkuri) means 'slowly', acting without rushing (急がないで)." },
        { "question": "【まっすぐ】帰ります。", "correctAnswer": "どこへも行かないで", "distractors": ["デパートへ行ってから", "友達に会ってから", "急いで"], "explanation": "まっすぐ帰る (massugu kaeru) means 'to go straight home', without stopping anywhere else." },
        { "question": "【あした】雨が降ります。", "correctAnswer": "今日の次の日", "distractors": ["今日の前の日", "おととい", "あさって"], "explanation": "明日 (あした - ashita) means 'tomorrow' (the day after today)." },
        { "question": "【きのう】映画を見ました。", "correctAnswer": "今日の前の日", "distractors": ["今日の次の日", "おととい", "あさって"], "explanation": "昨日 (きのう - kinou) means 'yesterday' (the day before today)." },
        { "question": "【きょう】は休みです。", "correctAnswer": "この日", "distractors": ["次の日", "前の日", "いつか"], "explanation": "今日 (きょう - kyou) means 'today' (this day)." },
        { "question": "【ごぜん】に起きました。", "correctAnswer": "朝から昼の12時まで", "distractors": ["昼の12時から夜まで", "夜の12時から朝まで", "夕方"], "explanation": "午前 (ごぜん - gozen) means 'AM' or morning (from morning until 12 PM)." },
        { "question": "【ごご】に勉強します。", "correctAnswer": "昼の12時から夜まで", "distractors": ["朝から昼の12時まで", "夜の12時から朝まで", "夜中"], "explanation": "午後 (ごご - gogo) means 'PM' or afternoon (from 12 PM until night)." },
        { "question": "【ばん】にテレビを見ます。", "correctAnswer": "夜", "distractors": ["朝", "昼", "夕方"], "explanation": "晩 (ばん - ban) is synonymous with evening or night (夜 - yoru)." },
        { "question": "【おひる】を食べます。", "correctAnswer": "昼ごはん", "distractors": ["朝ごはん", "晩ごはん", "お菓子"], "explanation": "お昼 (おひる - ohiru) commonly refers to lunch (昼ごはん - hirugohan)." },
        { "question": "【あさ】シャワーを浴びます。", "correctAnswer": "起きてからすぐ", "distractors": ["寝る前", "昼休みに", "夜中に"], "explanation": "朝 (あさ - asa) means 'morning', right after waking up." },
        { "question": "部屋を【かたづけます】。", "correctAnswer": "きれいにして、物をしまいます", "distractors": ["汚くします", "服を洗います", "ご飯を作ります"], "explanation": "片付ける (かたづける - katazukeru) means 'to tidy up / put things away'." },
        { "question": "ドアが【あいています】。", "correctAnswer": "閉まっていません", "distractors": ["こわれています", "汚いです", "きれいです"], "explanation": "開いている (あいている - aite iru) means 'is open', so it is not closed." },
        { "question": "窓が【しまっています】。", "correctAnswer": "開いていません", "distractors": ["こわれています", "汚いです", "きれいです"], "explanation": "閉まっている (しまっている - shimatte iru) means 'is closed', so it is not open." },
        { "question": "テレビが【こわれています】。", "correctAnswer": "動きません", "distractors": ["新しです", "古いです", "きれいです"], "explanation": "壊れる (こわれる - kowareru) means 'broken', so the machine does not work (動かない)." },
        { "question": "服が【よごれています】。", "correctAnswer": "きたないです", "distractors": ["きれいです", "新しいです", "高いです"], "explanation": "汚れる (よごれる - yogoreru) means 'to get dirty', becoming 汚い (kitanai)." },
        { "question": "【おそく】起きました。", "correctAnswer": "早くない時間に", "distractors": ["早い時間に", "すぐに", "急いで"], "explanation": "遅く (おそく - osoku) means 'late', at a time that is not early." },
        { "question": "【はやく】来てください。", "correctAnswer": "遅れないで", "distractors": ["ゆっくり", "止まって", "急がないで"], "explanation": "早く (はやく - hayaku) means 'early/quickly', requesting someone not to be late." },
        { "question": "【ちかく】にあります。", "correctAnswer": "遠くじゃありません", "distractors": ["遠くにあります", "上のほうにあります", "下のほうにあります"], "explanation": "近く (ちかく - chikaku) means 'nearby', so it is not far away (遠くじゃない)." },
        { "question": "【とおく】に行きます。", "correctAnswer": "近くじゃありません", "distractors": ["近くに行きます", "上のほうに行きます", "下のほうに行きます"], "explanation": "遠く (とおく - tooku) means 'far away', so it is not nearby (近くじゃない)." },
        { "question": "【となり】の部屋です。", "correctAnswer": "一番近くの横の部屋", "distractors": ["上の部屋", "下の部屋", "ずっと遠くの部屋"], "explanation": "隣 (となり - tonari) means 'next door' or 'adjacent'." },
        { "question": "【うしろ】にあります。", "correctAnswer": "前じゃありません", "distractors": ["横にあります", "上にあります", "下にあります"], "explanation": "後ろ (うしろ - ushiro) means 'behind / back', the opposite of front (前)." },
        { "question": "【まえ】にあります。", "correctAnswer": "後ろじゃありません", "distractors": ["横にあります", "上にあります", "下にあります"], "explanation": "前 (まえ - mae) means 'in front / front', the opposite of behind (後ろ)." },
        { "question": "【うえ】にあります。", "correctAnswer": "下じゃありません", "distractors": ["横にあります", "前にあります", "後ろにあります"], "explanation": "上 (うえ - ue) means 'top / above', the opposite of below (下)." },
        { "question": "【した】にあります。", "correctAnswer": "上じゃありません", "distractors": ["横にあります", "前にあります", "後ろにあります"], "explanation": "下 (した - shita) means 'bottom / below', the opposite of above (上)." },
        { "question": "【よこ】にあります。", "correctAnswer": "となりにあります", "distractors": ["上にあります", "下にあります", "後ろにあります"], "explanation": "横 (よこ - yoko) means 'side', closely related to next to (隣 - tonari)." },
        { "question": "【なか】にあります。", "correctAnswer": "外じゃありません", "distractors": ["上にあります", "下にあります", "横にあります"], "explanation": "中 (なか - naka) means 'inside', the opposite of outside (外)." },
        { "question": "【そと】にあります。", "correctAnswer": "中じゃありません", "distractors": ["上にあります", "下にあります", "横にあります"], "explanation": "外 (そと - soto) means 'outside', the opposite of inside (中)." },
        { "question": "【みぎ】に曲がります。", "correctAnswer": "左じゃありません", "distractors": ["まっすぐ行きます", "止まります", "戻ります"], "explanation": "右 (みぎ - migi) means 'right', the opposite of left (左)." },
        { "question": "【ひだり】に曲がります。", "correctAnswer": "右じゃありません", "distractors": ["まっすぐ行きます", "止まります", "戻ります"], "explanation": "左 (ひだり - hidari) means 'left', the opposite of right (右)." },
        { "question": "【としょかん】で本を読みます。", "correctAnswer": "本がたくさんある場所", "distractors": ["映画を見る場所", "ご飯を食べる場所", "寝る場所"], "explanation": "図書館 (としょかん - toshokan) is a library (a place with many books)." },
        { "question": "【えいがかん】に行きます。", "correctAnswer": "映画を見る場所", "distractors": ["本を読む場所", "ご飯を食べる場所", "寝る場所"], "explanation": "映画館 (えいがかん - eigakan) is a movie theater." },
        { "question": "【びょういん】に行きます。", "correctAnswer": "病気の時に行く場所", "distractors": ["買い物をする場所", "映画を見る場所", "本を読む場所"], "explanation": "病院 (びょういん - byouin) is a hospital (a place to go when sick)." },
        { "question": "【ぎんこう】に行きます。", "correctAnswer": "お金を出し入れする場所", "distractors": ["手紙を出す場所", "服を買う場所", "ご飯を食べる場所"], "explanation": "銀行 (ぎんこう - ginkou) is a bank." },
        { "question": "【ゆうびんきょく】に行きます。", "correctAnswer": "手紙や荷物を出す場所", "distractors": ["お金を出し入れする場所", "服を買う場所", "ご飯を食べる場所"], "explanation": "郵便局 (ゆうびんきょく - yuubinkyoku) is a post office." },
        { "question": "【こうばん】に行きます。", "correctAnswer": "おまわりさん（警察）がいる場所", "distractors": ["医者がいる場所", "先生がいる場所", "店員がいる場所"], "explanation": "交番 (こうばん - kouban) is a police box." },
        { "question": "【えき】に行きます。", "correctAnswer": "電車に乗る場所", "distractors": ["飛行機に乗る場所", "船に乗る場所", "車に乗る場所"], "explanation": "駅 (えき - eki) is a train station." },
        { "question": "【くうこう】に行きます。", "correctAnswer": "飛行機に乗る場所", "distractors": ["電車に乗る場所", "船に乗る場所", "バスに乗る場所"], "explanation": "空港 (くうこう - kuukou) is an airport." },
        { "question": "【ちかてつ】に乗ります。", "correctAnswer": "地下を走る電車", "distractors": ["空を飛ぶ乗り物", "海を走る乗り物", "道を走る車"], "explanation": "地下鉄 (ちかてつ - chikatetsu) is a subway or underground train." },
        { "question": "【ひこうき】に乗ります。", "correctAnswer": "空を飛ぶ乗り物", "distractors": ["地下を走る電車", "海を走る乗り物", "道を走る車"], "explanation": "飛行機 (ひこうき - hikouki) is an airplane." },
        { "question": "【ふね】に乗ります。", "correctAnswer": "海や川を走る乗り物", "distractors": ["空を飛ぶ乗り物", "地下を走る電車", "道を走る車"], "explanation": "船 (ふね - fune) is a boat or ship." },
        { "question": "【じてんしゃ】に乗ります。", "correctAnswer": "自分でこぐ二つのタイヤの乗り物", "distractors": ["エンジンで走る四つのタイヤの乗り物", "空を飛ぶ乗り物", "海を走る乗り物"], "explanation": "自転車 (じてんしゃ - jitensha) is a bicycle." },
        { "question": "【あるいて】行きます。", "correctAnswer": "自分の足で行きます", "distractors": ["車で行きます", "電車で行きます", "バスで行きます"], "explanation": "歩いて (あるいて - aruite) means 'on foot / by walking'." },
        { "question": "【きっさてん】で休みます。", "correctAnswer": "コーヒーや紅茶を飲む店", "distractors": ["ご飯をたくさん食べる店", "本を買う店", "服を買う店"], "explanation": "喫茶店 (きっさてん - kissaten) is a coffee shop or cafe." },
        { "question": "【スーパー】で買い物します。", "correctAnswer": "食べ物や日用品を買う大きな店", "distractors": ["本だけを買う店", "服だけを買う店", "薬だけを買う店"], "explanation": "スーパー (suupaa) is a supermarket." },
        { "question": "【デパート】に行きます。", "correctAnswer": "いろいろな物が売っている大きなビル", "distractors": ["食べ物だけが売っている店", "薬だけが売っている店", "本だけが売っている店"], "explanation": "デパート (depaato) is a department store." },
        { "question": "【くすりや】に行きます。", "correctAnswer": "薬を売っている店", "distractors": ["本を売っている店", "服を売っている店", "靴を売っている店"], "explanation": "薬屋 (くすりや - kusuriya) is a pharmacy or drugstore." },
        { "question": "【ほんや】に行きます。", "correctAnswer": "本を売っている店", "distractors": ["薬を売っている店", "服を売っている店", "食べ物を売っている店"], "explanation": "本屋 (ほんや - honya) is a bookstore." },
        { "question": "【にくや】に行きます。", "correctAnswer": "肉を売っている店", "distractors": ["魚を売っている店", "野菜を売っている店", "本を売っている店"], "explanation": "肉屋 (にくや - nikuya) is a butcher shop." },
        { "question": "【さかなや】に行きます。", "correctAnswer": "魚を売っている店", "distractors": ["肉を売っている店", "野菜を売っている店", "花を売っている店"], "explanation": "魚屋 (さかなや - sakanaya) is a fish market or fishmonger." },
        { "question": "【やおや】に行きます。", "correctAnswer": "野菜や果物を売っている店", "distractors": ["肉を売っている店", "魚を売っている店", "本を売っている店"], "explanation": "八百屋 (やおや - yaoya) is a greengrocer (sells vegetables/fruit)." },
        { "question": "【はなや】に行きます。", "correctAnswer": "花を売っている店", "distractors": ["肉を売っている店", "魚を売っている店", "本を売っている店"], "explanation": "花屋 (はなや - hanaya) is a flower shop." },
        { "question": "【だれか】いますか。", "correctAnswer": "知っている人か知らない人がいますか", "distractors": ["誰もいませんか", "何がありますか", "どこにありますか"], "explanation": "誰か (だれか - dareka) means 'someone / anyone'." },
        { "question": "【なにか】食べますか。", "correctAnswer": "食べたい物がありますか", "distractors": ["何も食べませんか", "どこで食べますか", "いつ食べますか"], "explanation": "何か (なにか - nanika) means 'something / anything'." },
        { "question": "【どこか】へ行きますか。", "correctAnswer": "行きたい場所がありますか", "distractors": ["どこへも行きませんか", "誰と行きますか", "何で行きますか"], "explanation": "どこか (dokoka) means 'somewhere / anywhere'." },
        { "question": "【いつか】会いましょう。", "correctAnswer": "時間ができた時に", "distractors": ["明日の朝に", "今日の夜に", "絶対に会いません"], "explanation": "いつか (itsuka) means 'someday / sometime'." },
        { "question": "【だれも】いません。", "correctAnswer": "人が一人もいません", "distractors": ["人がたくさんいます", "動物がいません", "物がありません"], "explanation": "誰も (だれも - daremo) paired with a negative verb means 'nobody / no one'." },
        { "question": "【なにも】ありません。", "correctAnswer": "物が一つもありません", "distractors": ["物がたくさんあります", "人がいません", "お金がたくさんあります"], "explanation": "何も (なにも - nanimo) paired with a negative verb means 'nothing'." },
        { "question": "【どこへも】行きません。", "correctAnswer": "家から出ません", "distractors": ["遠くへ行きます", "近くへ行きます", "外国へ行きます"], "explanation": "どこへも (doko e mo) paired with a negative verb means 'nowhere' (will not go anywhere)." },
        { "question": "【はる】が好きです。", "correctAnswer": "桜が咲く季節", "distractors": ["海で泳ぐ季節", "紅葉がきれいな季節", "雪が降る季節"], "explanation": "春 (はる - haru) is Spring, the season when cherry blossoms (桜) bloom." },
        { "question": "【なつ】が好きです。", "correctAnswer": "暑くて海で泳ぐ季節", "distractors": ["桜が咲く季節", "紅葉がきれいな季節", "雪が降る季節"], "explanation": "夏 (なつ - natsu) is Summer, hot and associated with swimming." },
        { "question": "【あき】が好きです。", "correctAnswer": "涼しくて葉が赤くなる季節", "distractors": ["桜が咲く季節", "暑くて海で泳ぐ季節", "雪が降る季節"], "explanation": "秋 (あき - aki) is Autumn, cool and associated with red leaves." },
        { "question": "【ふゆ】が好きです。", "correctAnswer": "寒くて雪が降る季節", "distractors": ["桜が咲く季節", "暑くて海で泳ぐ季節", "涼しくて葉が赤くなる季節"], "explanation": "冬 (ふゆ - fuyu) is Winter, cold and associated with snow." },
        { "question": "【おとこのひと】がいます。", "correctAnswer": "男性", "distractors": ["女性", "子ども", "動物"], "explanation": "男の人 (おとこのひと - otoko no hito) means 'man / male' (男性 - dansei)." },
        { "question": "【おんなのひと】がいます。", "correctAnswer": "女性", "distractors": ["男性", "子ども", "動物"], "explanation": "女の人 (おんなのひと - onna no hito) means 'woman / female' (女性 - josei)." },
        { "question": "【おとこのこ】がいます。", "correctAnswer": "男の子ども", "distractors": ["女の子ども", "大人の男の人", "大人の女の人"], "explanation": "男の子 (おとこのこ - otoko no ko) means 'boy'." },
        { "question": "【おんなのこ】がいます。", "correctAnswer": "女の子ども", "distractors": ["男の子ども", "大人の男の人", "大人の女の人"], "explanation": "女の子 (おんなのこ - onna no ko) means 'girl'." },
        { "question": "【せんせい】に聞きます。", "correctAnswer": "学校で教える人", "distractors": ["病院で病気を直す人", "店で物を売る人", "おまわりさん"], "explanation": "先生 (せんせい - sensei) is a teacher." },
        { "question": "【いしゃ】に行きます。", "correctAnswer": "病院で病気を直す人", "distractors": ["学校で教える人", "店で物を売る人", "おまわりさん"], "explanation": "医者 (いしゃ - isha) is a doctor." },
        { "question": "【がくせい】です。", "correctAnswer": "学校で勉強する人", "distractors": ["学校で教える人", "会社で働く人", "病院で働く人"], "explanation": "学生 (がくせい - gakusei) is a student." },
        { "question": "【かいしゃいん】です。", "correctAnswer": "会社で仕事をする人", "distractors": ["学校で勉強する人", "病院で病気を直す人", "店で物を売る人"], "explanation": "会社員 (かいしゃいん - kaishain) is an office/company worker." },
        { "question": "【てんいん】に聞きます。", "correctAnswer": "店で物を売る人", "distractors": ["学校で教える人", "病院で病気を直す人", "おまわりさん"], "explanation": "店員 (てんいん - ten'in) is a store clerk." },
        { "question": "【ぼうし】を買います。", "correctAnswer": "頭にかぶるもの", "distractors": ["足に履くもの", "体に着るもの", "手にはめるもの"], "explanation": "帽子 (ぼうし - boushi) is a hat." },
        { "question": "【くつ】を履きます。", "correctAnswer": "足に履くもの", "distractors": ["頭にかぶるもの", "体に着るもの", "手にはめるもの"], "explanation": "靴 (くつ - kutsu) is shoes." },
        { "question": "【めがね】をかけます。", "correctAnswer": "目にかけるもの", "distractors": ["頭にかぶるもの", "足に履くもの", "手にはめるもの"], "explanation": "眼鏡 (めがね - megane) is glasses." },
        { "question": "【シャツ】を着ます。", "correctAnswer": "体に着る服", "distractors": ["足に履くもの", "頭にかぶるもの", "手にはめるもの"], "explanation": "シャツ (shatsu) is a shirt." },
        { "question": "【ズボン】を履きます。", "correctAnswer": "足から履く服", "distractors": ["体の上に着る服", "頭にかぶるもの", "目にかけるもの"], "explanation": "ズボン (zubon) is trousers/pants." },
        { "question": "【かさ】をさします。", "correctAnswer": "雨の時に使うもの", "distractors": ["晴れの時に使うもの", "雪の時に履くもの", "風の時に着るもの"], "explanation": "傘 (かさ - kasa) is an umbrella." },
        { "question": "【とけい】を見ます。", "correctAnswer": "時間を知るためのもの", "distractors": ["値段を知るためのもの", "場所を知るためのもの", "名前を知るためのもの"], "explanation": "時計 (とけい - tokei) is a watch or clock." },
        { "question": "【じしょ】を引きます。", "correctAnswer": "言葉の意味を調べる本", "distractors": ["物語を読む本", "絵を見る本", "日記を書く本"], "explanation": "辞書 (じしょ - jisho) is a dictionary." },
        { "question": "【えんぴつ】で書きます。", "correctAnswer": "字を書くためのもの", "distractors": ["字を消すためのもの", "紙を切るためのもの", "紙を貼るためのもの"], "explanation": "鉛筆 (えんぴつ - enpitsu) is a pencil." },
        { "question": "【けしゴム】を使います。", "correctAnswer": "書いた字を消すもの", "distractors": ["字を書くもの", "紙を切るもの", "紙を貼るもの"], "explanation": "消しゴム (けしごむ - keshigomu) is an eraser." },
        { "question": "【かみ】を切ります。", "correctAnswer": "字を書くための薄いもの", "distractors": ["服を作るためのもの", "家を作るためのもの", "靴を作るためのもの"], "explanation": "紙 (かみ - kami) is paper." },
        { "question": "【はさみ】で切ります。", "correctAnswer": "紙などを切るための道具", "distractors": ["字を書くための道具", "字を消すための道具", "紙を貼るための道具"], "explanation": "ハサミ (hasami) is scissors." },
        { "question": "【おさじ】を使います。", "correctAnswer": "スプーン", "distractors": ["フォーク", "ナイフ", "お箸"], "explanation": "お匙 (おさじ - osaji) is a traditional or alternative word for spoon (スプーン)." },
        { "question": "【おはし】で食べます。", "correctAnswer": "ご飯を食べるための二本の細い棒", "distractors": ["スープを飲むための道具", "肉を切るための道具", "パンを切るための道具"], "explanation": "お箸 (おはし - ohashi) are chopsticks." },
        { "question": "【おさら】を使います。", "correctAnswer": "料理をのせるもの", "distractors": ["お茶を飲むもの", "スープを飲むもの", "手を洗うもの"], "explanation": "お皿 (おさら - osara) is a plate." },
        { "question": "【コップ】で飲みます。", "correctAnswer": "水などを飲むための器", "distractors": ["料理をのせる器", "ご飯を食べるための道具", "肉を切るための道具"], "explanation": "コップ (koppu) is a glass/cup." },
        { "question": "【おちゃ】を飲みます。", "correctAnswer": "日本の緑色の飲み物", "distractors": ["黒くて苦い飲み物", "甘い果物の飲み物", "白い飲み物"], "explanation": "お茶 (おちゃ - ocha) traditionally refers to green tea." },
        { "question": "【ぎゅうにゅう】を飲みます。", "correctAnswer": "ミルク", "distractors": ["コーヒー", "ジュース", "お茶"], "explanation": "牛乳 (ぎゅうにゅう - gyuunyuu) is cow's milk (ミルク)." },
        { "question": "【まいあさ】走ります。", "correctAnswer": "いつも朝に", "distractors": ["いつも夜に", "いつも昼に", "いつも夕方に"], "explanation": "毎朝 (まいあさ - maiasa) means 'every morning', which translates to いつも朝に (always in the morning)." },
        { "question": "【まいばん】本を読みます。", "correctAnswer": "いつも夜に", "distractors": ["いつも朝に", "いつも昼に", "いつも夕方に"], "explanation": "毎晩 (まいばん - maiban) means 'every night', which translates to いつも夜に (always at night)." },
        { "question": "【まいにち】勉強します。", "correctAnswer": "いつも", "distractors": ["ときどき", "ぜんぜん", "あまり"], "explanation": "毎日 (まいにち - mainichi) means 'every day', which carries the meaning of いつも (always/constantly)." },
        { "question": "【まいとし】旅行します。", "correctAnswer": "１年ごとにいつも", "distractors": ["１ヶ月ごとにいつも", "１週間ごとにいつも", "１日ごとにいつも"], "explanation": "毎年 (まいとし - maitoshi) means 'every year' (1年ごとにいつも)." },
        { "question": "【せんしゅう】東京に行きました。", "correctAnswer": "今週の前の週", "distractors": ["今週の次の週", "今月の前の月", "今年の前の年"], "explanation": "先週 (せんしゅう - senshuu) means 'last week' (the week before this week)." },
        { "question": "【らいしゅう】テストがあります。", "correctAnswer": "今週の次の週", "distractors": ["今週の前の週", "今月の次の月", "今年の次の年"], "explanation": "来週 (らいしゅう - raishuu) means 'next week' (the week after this week)." },
        { "question": "【せんげつ】日本に来ました。", "correctAnswer": "今月の前の月", "distractors": ["今月の次の月", "今週の前の週", "今年の前の年"], "explanation": "先月 (せんげつ - sengetsu) means 'last month' (the month before this month)." },
        { "question": "【らいげつ】国に帰ります。", "correctAnswer": "今月の次の月", "distractors": ["今月の前の月", "今週の次の週", "今年の次の年"], "explanation": "来月 (らいげつ - raigetsu) means 'next month' (the month after this month)." },
        { "question": "【きょねん】結婚しました。", "correctAnswer": "今年の前の年", "distractors": ["今年の次の年", "今月の前の月", "今週の前の週"], "explanation": "去年 (きょねん - kyonen) means 'last year' (the year before this year)." },
        { "question": "【らいねん】大学生になります。", "correctAnswer": "今年の次の年", "distractors": ["今年の前の年", "今月の次の月", "今週の次の週"], "explanation": "来年 (らいねん - rainen) means 'next year' (the year after this year)." },
        { "question": "今日は【つかれました】。", "correctAnswer": "休みたいです", "distractors": ["元気です", "うれしいです", "お腹がすきました"], "explanation": "疲れる (つかれる - tsukareru) means 'to get tired', resulting in a desire to rest (休みたい)." },
        { "question": "【おなかがすきました】。", "correctAnswer": "何か食べたいです", "distractors": ["何か飲みたいです", "もう食べられません", "休みたいです"], "explanation": "お腹が空く (onaka ga suku) means 'to get hungry', resulting in wanting to eat." },
        { "question": "【のどがかわきました】。", "correctAnswer": "何か飲みたいです", "distractors": ["何か食べたいです", "もう飲めません", "休みたいです"], "explanation": "喉が渇く (nodo ga kawaku) means 'to get thirsty', resulting in wanting to drink." },
        { "question": "夜の11時に【ねます】。", "correctAnswer": "ベッドに入って休みます", "distractors": ["朝、目をあけます", "服を着ます", "ご飯を食べます"], "explanation": "寝る (ねる - neru) means 'to go to bed / to sleep'." },
        { "question": "朝6時に【おきます】。", "correctAnswer": "目をあけてベッドから出ます", "distractors": ["ベッドに入って休みます", "服を脱ぎます", "目を閉じます"], "explanation": "起きる (おきる - okiru) means 'to wake up / to get up'." },
        { "question": "手を【あらいます】。", "correctAnswer": "水できれいにします", "distractors": ["水で汚くします", "水で飲みます", "水で料理します"], "explanation": "洗う (あらう - arau) means 'to wash', making things clean with water." },
        { "question": "プールで【およぎます】。", "correctAnswer": "水の中で動きます", "distractors": ["水の上を走ります", "水の中で寝ます", "水の中で座ります"], "explanation": "泳ぐ (およぐ - oyogu) means 'to swim' (moving in the water)." },
        { "question": "駅まで【はしります】。", "correctAnswer": "急いで早く行きます", "distractors": ["ゆっくり歩きます", "止まって待ちます", "座って休みます"], "explanation": "走る (はしる - hashiru) means 'to run', implying moving fast or hurrying." },
        { "question": "鳥が空を【とびます】。", "correctAnswer": "空の中を行きます", "distractors": ["海の中を行きます", "道の上を行きます", "山を登ります"], "explanation": "飛ぶ (とぶ - tobu) means 'to fly'." },
        { "question": "歌を【うたいます】。", "correctAnswer": "音楽を口から出します", "distractors": ["音楽を耳で聞きます", "音楽を目で見ます", "音楽を作ります"], "explanation": "歌う (うたう - utau) means 'to sing'." },
        { "question": "バスを【まちます】。", "correctAnswer": "バスが来るまでそこにいます", "distractors": ["バスに乗ります", "バスから降ります", "バスを見ません"], "explanation": "待つ (まつ - matsu) means 'to wait' (staying there until it comes)." },
        { "question": "友達を【よびます】。", "correctAnswer": "大きな声で名前を言います", "distractors": ["友達の話を聞きます", "友達と一緒に走ります", "友達とさようならを言います"], "explanation": "呼ぶ (よぶ - yobu) means 'to call out / to invite'." },
        { "question": "先生と【はなします】。", "correctAnswer": "言葉を言います", "distractors": ["言葉を聞きます", "言葉を書きます", "言葉を見ます"], "explanation": "話す (はなす - hanasu) means 'to speak / to talk'." },
        { "question": "音楽を【ききます】。", "correctAnswer": "耳に入れます", "distractors": ["目に入れます", "口から出します", "手に持ちます"], "explanation": "聞く (きく - kiku) means 'to listen / to hear'." },
        { "question": "映画を【みます】。", "correctAnswer": "目に入れます", "distractors": ["耳に入れます", "口から出します", "手に持ちます"], "explanation": "見る (みる - miru) means 'to look / to watch'." },
        { "question": "お金が【すくない】です。", "correctAnswer": "多くないです", "distractors": ["多いです", "新しいです", "古いです"], "explanation": "少ない (すくない - sukunai) means 'few / a little', the opposite of many (多い)." },
        { "question": "この道は【あぶない】です。", "correctAnswer": "安全じゃないです", "distractors": ["安全です", "広いです", "きれいです"], "explanation": "危ない (あぶない - abunai) means 'dangerous', meaning not safe (安全じゃない)." },
        { "question": "これは【たいせつ】な物です。", "correctAnswer": "大事な物です", "distractors": ["いらない物です", "むだな物です", "古い物です"], "explanation": "大切 (たいせつ - taisetsu) means 'important / precious', matching 大事 (だいじ)." },
        { "question": "富士山は【ゆうめい】です。", "correctAnswer": "みんなが知っています", "distractors": ["誰も知りません", "とても低いです", "見ることができません"], "explanation": "有名 (ゆうめい - yuumei) means 'famous', so everyone knows it." },
        { "question": "花が【きれいです】。", "correctAnswer": "美しいです", "distractors": ["汚いです", "暗いです", "うるさいです"], "explanation": "きれい (kirei) means 'beautiful / clean', which is synonymous with 美しい (utsukushii)." },
        { "question": "おじいさんは【げんき】です。", "correctAnswer": "病気じゃないです", "distractors": ["病気です", "疲れています", "死んでいます"], "explanation": "元気 (げんき - genki) means 'healthy / energetic', implying not sick." },
        { "question": "このカバンは【じょうぶ】です。", "correctAnswer": "こわれにくいです", "distractors": ["すぐこわれます", "とてもきれいです", "とても安いです"], "explanation": "丈夫 (じょうぶ - joubu) means 'sturdy / durable', meaning hard to break." },
        { "question": "【いろいろな】服があります。", "correctAnswer": "たくさんのちがう", "distractors": ["同じ", "少しの", "黒い"], "explanation": "色々な (いろいろな - iroiro na) means 'various / various kinds of'." },
        { "question": "私はリンゴが【すき】です。", "correctAnswer": "きらいじゃないです", "distractors": ["きらいです", "食べられません", "ほしくないです"], "explanation": "好き (すき - suki) means 'like', the opposite of hate (きらい)." },
        { "question": "英語が【じょうず】です。", "correctAnswer": "下手じゃないです", "distractors": ["下手です", "きらいです", "できません"], "explanation": "上手 (じょうず - jouzu) means 'skilled', the opposite of unskilled (下手)." },
        { "question": "【がいこく】に行きます。", "correctAnswer": "自分の国じゃない国", "distractors": ["自分の国", "自分の町", "遠い町"], "explanation": "外国 (がいこく - gaikoku) means 'foreign country'." },
        { "question": "彼は【りゅうがくせい】です。", "correctAnswer": "外国から勉強に来た人", "distractors": ["外国に遊びに来た人", "外国で働く人", "外国の先生"], "explanation": "留学生 (りゅうがくせい - ryuugakusei) is an international exchange student." },
        { "question": "明日は【やすみ】です。", "correctAnswer": "働かない日", "distractors": ["たくさん働く日", "学校に行く日", "テストがある日"], "explanation": "休み (やすみ - yasumi) means a day off / holiday." },
        { "question": "今日は【たんじょうび】です。", "correctAnswer": "生まれた日", "distractors": ["学校が始まる日", "結婚した日", "死んだ日"], "explanation": "誕生日 (たんじょうび - tanjoubi) is a birthday." },
        { "question": "【さいふ】を落としました。", "correctAnswer": "お金を入れるもの", "distractors": ["荷物を入れるもの", "手紙を入れるもの", "ゴミを入れるもの"], "explanation": "財布 (さいふ - saifu) is a wallet." },
        { "question": "【かばん】を買いました。", "correctAnswer": "荷物を入れるもの", "distractors": ["お金を入れるもの", "手紙を入れるもの", "ゴミを入れるもの"], "explanation": "鞄 (かばん - kaban) is a bag." },
        { "question": "【めがね】をかけます。", "correctAnswer": "よく見えるように目にかけるもの", "distractors": ["頭にかぶるもの", "手にはめるもの", "首に巻くもの"], "explanation": "眼鏡 (めがね - megane) are glasses worn to see well." },
        { "question": "【かいだん】を使います。", "correctAnswer": "上の階に歩いて行くためのもの", "distractors": ["上の階に機械で行くもの", "外を見るためのもの", "部屋を暖かくするためのもの"], "explanation": "階段 (かいだん - kaidan) means 'stairs'." },
        { "question": "【エレベーター】に乗ります。", "correctAnswer": "機械で上の階に行くもの", "distractors": ["歩いて上の階に行くもの", "外を見るためのもの", "空を飛ぶもの"], "explanation": "エレベーター (erebeetaa) is an elevator." },
        { "question": "きれいな【へや】ですね。", "correctAnswer": "家の中の場所", "distractors": ["家の外の場所", "庭の場所", "屋上の場所"], "explanation": "部屋 (へや - heya) is a room inside a house or building." },
        { "question": "サイズが【ちょうどいい】です。", "correctAnswer": "大きくもないし小さくもない", "distractors": ["大きすぎます", "小さすぎます", "全然合いません"], "explanation": "ちょうどいい (choudo ii) means 'just right' (neither too big nor too small)." },
        { "question": "風邪ですか。【おだいじに】。", "correctAnswer": "早く元気になってください", "distractors": ["早く帰ってください", "よく休まないでください", "さようなら"], "explanation": "お大事に (おだいじに - odaiji ni) is a set phrase meaning 'Please take care of yourself / Get well soon'." },
        { "question": "【ごちそうさまでした】。", "correctAnswer": "ご飯が終わりました", "distractors": ["ご飯が始まります", "ご飯を作ります", "ご飯を買います"], "explanation": "ごちそうさまでした (Gochisousama deshita) is said when finishing a meal." },
        { "question": "【いただきます】。", "correctAnswer": "これからご飯を食べます", "distractors": ["ご飯が終わりました", "ご飯を捨てます", "ご飯を売ります"], "explanation": "いただきます (Itadakimasu) is said right before eating." },
        { "question": "【おつかれさまでした】。", "correctAnswer": "仕事が終わりましたね", "distractors": ["仕事が始まりますね", "おはようございます", "はじめまして"], "explanation": "お疲れ様でした (Otsukaresama deshita) is said to acknowledge someone's hard work, often at the end of a task or workday." }
    ],

    // 11. Pragmatics (Chat Context)
    grammar_chats: [
        {
            "grammarPoint": "Particle は (Topic Marker)",
            "scenario": "Introducing yourself to a new classmate.",
            "chatHistory": [
                { "speaker": "A", "message": "はじめまして。私は山田です。" }
            ],
            "prompt": "Reply: 'Nice to meet you. I am a student.'",
            "expectedResponse": "はじめまして。私は学生です。",
            "explanation": "The particle は (wa) marks the topic of the sentence (私 / I)."
        },
        {
            "grammarPoint": "Particle を (Object Marker)",
            "scenario": "Your host mother asks what you do every morning.",
            "chatHistory": [
                { "speaker": "A", "message": "毎朝、何をしますか。" }
            ],
            "prompt": "Reply: 'I eat an apple.'",
            "expectedResponse": "りんごを食べます。",
            "explanation": "The particle を (o) marks the direct object of the action verb 食べる (to eat)."
        },
        {
            "grammarPoint": "Particle に (Time)",
            "scenario": "A friend asks about your daily routine.",
            "chatHistory": [
                { "speaker": "A", "message": "いつも何時に起きますか。" }
            ],
            "prompt": "Reply: 'I wake up at 6 o'clock.'",
            "expectedResponse": "6時に起きます。",
            "explanation": "The particle に (ni) is attached to specific times on the clock when an action occurs."
        },
        {
            "grammarPoint": "Particle で (Location of Action)",
            "scenario": "A classmate asks where you study.",
            "chatHistory": [
                { "speaker": "A", "message": "いつもどこで勉強しますか。" }
            ],
            "prompt": "Reply: 'I study at the library.'",
            "expectedResponse": "図書館で勉強します。",
            "explanation": "The particle で (de) indicates the location where an active action takes place."
        },
        {
            "grammarPoint": "Particle へ (Direction)",
            "scenario": "A coworker sees you leaving the office.",
            "chatHistory": [
                { "speaker": "A", "message": "今からどこへ行きますか。" }
            ],
            "prompt": "Reply: 'I am going to the station.'",
            "expectedResponse": "駅へ行きます。",
            "explanation": "The particle へ (e) indicates the direction of motion verbs like 行く (to go)."
        },
        {
            "grammarPoint": "Particle に (Destination/Purpose)",
            "scenario": "Someone asks why you are in Japan.",
            "chatHistory": [
                { "speaker": "A", "message": "どうして日本に来ましたか。" }
            ],
            "prompt": "Reply: 'I came to Japan to study.'",
            "expectedResponse": "勉強のために日本に来ました。",
            "explanation": "The particle に (ni) can mark the destination or the purpose of coming/going."
        },
        {
            "grammarPoint": "Particle と (Companion)",
            "scenario": "A friend asks about your weekend plans.",
            "chatHistory": [
                { "speaker": "A", "message": "日曜日は誰と映画を見ますか。" }
            ],
            "prompt": "Reply: 'I will go with a friend.'",
            "expectedResponse": "友達と行きます。",
            "explanation": "The particle と (to) means 'with' when attached to a person."
        },
        {
            "grammarPoint": "Particle や (Incomplete List)",
            "scenario": "Your mother asks what you bought at the supermarket.",
            "chatHistory": [
                { "speaker": "A", "message": "スーパーで何を買いましたか。" }
            ],
            "prompt": "Reply: 'I bought things like bread and eggs.'",
            "expectedResponse": "パンや卵を買いました。",
            "explanation": "The particle や (ya) connects nouns in an incomplete list (A, B, and so on)."
        },
        {
            "grammarPoint": "Particle も (Also / Too)",
            "scenario": "Your friend mentions they are going to the party.",
            "chatHistory": [
                { "speaker": "A", "message": "私は明日パーティーに行きます。" }
            ],
            "prompt": "Reply: 'I will also go.'",
            "expectedResponse": "私も行きます。",
            "explanation": "The particle も (mo) replaces は or が to mean 'also' or 'too'."
        },
        {
            "grammarPoint": "Particle から (Origin)",
            "scenario": "Meeting someone for the first time.",
            "chatHistory": [
                { "speaker": "A", "message": "お国はどこですか。" }
            ],
            "prompt": "Reply: 'I came from America.'",
            "expectedResponse": "アメリカから来ました。",
            "explanation": "The particle から (kara) indicates the origin or starting point."
        },
        {
            "grammarPoint": "Particle まで (Limit/Until)",
            "scenario": "A coworker asks about your shift.",
            "chatHistory": [
                { "speaker": "A", "message": "今日は何時まで働きますか。" }
            ],
            "prompt": "Reply: 'I will work until 9 o'clock.'",
            "expectedResponse": "9時まで働きます。",
            "explanation": "The particle まで (made) indicates the limit or endpoint in time or space."
        },
        {
            "grammarPoint": "Particle が (Subject Marker with 好き)",
            "scenario": "Chatting about animals.",
            "chatHistory": [
                { "speaker": "A", "message": "どんな動物が好きですか。" }
            ],
            "prompt": "Reply: 'I like cats.'",
            "expectedResponse": "猫が好きです。",
            "explanation": "The adjective 好き (suki - to like) requires the object of affection to be marked with が."
        },
        {
            "grammarPoint": "Particle が (Subject Marker with わかる)",
            "scenario": "A tourist asks if you speak their language.",
            "chatHistory": [
                { "speaker": "A", "message": "英語がわかりますか。" }
            ],
            "prompt": "Reply: 'Yes, I understand English.'",
            "expectedResponse": "はい、英語がわかります。",
            "explanation": "The verb わかる (to understand) is an intransitive verb in Japanese; the thing understood takes が."
        },
        {
            "grammarPoint": "Particle が (Subject Marker with あります)",
            "scenario": "A friend wants to hang out today.",
            "chatHistory": [
                { "speaker": "A", "message": "今日、遊びに行きませんか。" }
            ],
            "prompt": "Reply: 'I'm sorry, I don't have time today.'",
            "expectedResponse": "すみません、今日は時間がありません。",
            "explanation": "The existence verb あります (to exist/have) requires its subject to be marked with が."
        },
        {
            "grammarPoint": "〜ませんか (Invitation)",
            "scenario": "You want to invite your coworker out.",
            "chatHistory": [
                { "speaker": "A", "message": "今日の仕事は終わりましたね。" }
            ],
            "prompt": "Reply: 'Won't you watch a movie together?'",
            "expectedResponse": "一緒に映画を見ませんか。",
            "explanation": "Verb stem + ませんか is a polite way to invite someone to do something."
        },
        {
            "grammarPoint": "〜ましょう (Volitional / Let's)",
            "scenario": "You and a friend are tired from studying.",
            "chatHistory": [
                { "speaker": "A", "message": "とても疲れましたね。" }
            ],
            "prompt": "Reply: 'Let's take a break.'",
            "expectedResponse": "休みましょう。",
            "explanation": "Verb stem + ましょう is used to actively suggest doing something together ('Let's do X')."
        },
        {
            "grammarPoint": "〜たいです (Desire)",
            "scenario": "You are at a cafe on a hot day.",
            "chatHistory": [
                { "speaker": "A", "message": "ご注文は何にしますか。" }
            ],
            "prompt": "Reply: 'I want to drink cold water.'",
            "expectedResponse": "冷たい水が飲みたいです。",
            "explanation": "Verb stem + たいです expresses the speaker's personal desire to do an action."
        },
        {
            "grammarPoint": "〜たくないです (Negative Desire)",
            "scenario": "Your friend wants to go to karaoke, but you have a headache.",
            "chatHistory": [
                { "speaker": "A", "message": "今からカラオケに行きませんか。" }
            ],
            "prompt": "Reply: 'I don't want to go anywhere today.'",
            "expectedResponse": "今日はどこへも行きたくないです。",
            "explanation": "To make 〜たい negative, drop the 'い' and add 'くないです'."
        },
        {
            "grammarPoint": "〜から (Reason)",
            "scenario": "A teacher asks why you were absent yesterday.",
            "chatHistory": [
                { "speaker": "A", "message": "どうして昨日学校を休みましたか。" }
            ],
            "prompt": "Reply: 'Because I had a fever.'",
            "expectedResponse": "熱がありましたから。",
            "explanation": "Attaching から (kara) to the end of a sentence indicates the reason or cause."
        },
        {
            "grammarPoint": "〜ています (Ongoing Action)",
            "scenario": "Your mom calls your phone.",
            "chatHistory": [
                { "speaker": "A", "message": "もしもし、今何をしていますか。" }
            ],
            "prompt": "Reply: 'I am reading a book now.'",
            "expectedResponse": "今、本を読んでいます。",
            "explanation": "Te-form + います expresses an action that is currently ongoing."
        },
        {
            "grammarPoint": "〜ています (State of Being)",
            "scenario": "Meeting an old friend who asks about your personal life.",
            "chatHistory": [
                { "speaker": "A", "message": "マリアさんは一人で住んでいますか。" }
            ],
            "prompt": "Reply: 'No, I am married.'",
            "expectedResponse": "いいえ、結婚しています。",
            "explanation": "Certain verbs like 結婚する (to marry) or 知る (to know) use 〜ています to show a continuous state resulting from an action."
        },
        {
            "grammarPoint": "〜てもいいですか (Permission)",
            "scenario": "You are in a museum and want to take a picture.",
            "chatHistory": [
                { "speaker": "A", "message": "いらっしゃいませ。ここは第1展示室です。" }
            ],
            "prompt": "Reply: 'May I take a picture here?'",
            "expectedResponse": "ここで写真を撮ってもいいですか。",
            "explanation": "Te-form + もいいですか is the standard way to ask for permission."
        },
        {
            "grammarPoint": "〜てはいけません (Prohibition)",
            "scenario": "You are a library staff member correcting a student.",
            "chatHistory": [
                { "speaker": "A", "message": "（大きな声で友達と話している）" }
            ],
            "prompt": "Reply: 'You must not talk in the library.'",
            "expectedResponse": "図書館の中で話してはいけません。",
            "explanation": "Te-form + はいけません expresses a strict prohibition or rule."
        },
        {
            "grammarPoint": "〜てください (Request)",
            "scenario": "You are a teacher handing out a test.",
            "chatHistory": [
                { "speaker": "A", "message": "先生、テストはボールペンですか。" }
            ],
            "prompt": "Reply: 'Please write with a pencil.'",
            "expectedResponse": "鉛筆で書いてください。",
            "explanation": "Te-form + ください makes a polite request for someone to do an action."
        },
        {
            "grammarPoint": "〜ないでください (Negative Request)",
            "scenario": "You are telling a secret to a friend.",
            "chatHistory": [
                { "speaker": "A", "message": "その話は本当ですか。" }
            ],
            "prompt": "Reply: 'Please do not tell anyone.'",
            "expectedResponse": "誰にも言わないでください。",
            "explanation": "Nai-form base + ないでください makes a polite request for someone NOT to do something."
        },
        {
            "grammarPoint": "〜のが上手です (Skilled at)",
            "scenario": "A friend compliments your hobby.",
            "chatHistory": [
                { "speaker": "A", "message": "この絵、田中さんが描きましたか。すごいですね。" }
            ],
            "prompt": "Reply: 'Yes, I am good at drawing pictures.'",
            "expectedResponse": "はい、絵を描くのが上手です。",
            "explanation": "Dictionary form + の nominalizes the verb. '上手' (good at) takes the particle が."
        },
        {
            "grammarPoint": "〜のが下手です (Bad at)",
            "scenario": "You are invited to play a sport.",
            "chatHistory": [
                { "speaker": "A", "message": "一緒にテニスをしませんか。" }
            ],
            "prompt": "Reply: 'I am bad at playing tennis.'",
            "expectedResponse": "私はテニスをするのが下手です。",
            "explanation": "Dictionary form + の nominalizes the verb. '下手' (bad at) is used to humbly decline or state inability."
        },
        {
            "grammarPoint": "〜のが好きです (Likes doing)",
            "scenario": "Someone asks about your hobbies.",
            "chatHistory": [
                { "speaker": "A", "message": "休みの日は何をしますか。" }
            ],
            "prompt": "Reply: 'I like reading books.'",
            "expectedResponse": "本を読むのが好きです。",
            "explanation": "Dictionary form + の nominalizes the verb, allowing you to say you like (好き) the action."
        },
        {
            "grammarPoint": "〜つもりです (Intention)",
            "scenario": "A friend asks about your upcoming vacation.",
            "chatHistory": [
                { "speaker": "A", "message": "夏休みはどこへ行きますか。" }
            ],
            "prompt": "Reply: 'I plan to go to Hokkaido.'",
            "expectedResponse": "北海道に行くつもりです。",
            "explanation": "Dictionary form + つもりです expresses a clear intention or plan to do something."
        },
        {
            "grammarPoint": "〜になる (Adjective - Become)",
            "scenario": "Chatting about the changing seasons.",
            "chatHistory": [
                { "speaker": "A", "message": "11月ですね。" }
            ],
            "prompt": "Reply: 'Yes, it has become cold.'",
            "expectedResponse": "はい、寒くなりました。",
            "explanation": "To connect an i-adjective (寒い) to なる (to become), drop the 'い' and add 'く'."
        },
        {
            "grammarPoint": "〜になる (Noun - Become)",
            "scenario": "A teacher asks about your future dreams.",
            "chatHistory": [
                { "speaker": "A", "message": "将来の夢は何ですか。" }
            ],
            "prompt": "Reply: 'I want to become a doctor.'",
            "expectedResponse": "医者になりたいです。",
            "explanation": "Nouns take the particle に before なる (to become)."
        },
        {
            "grammarPoint": "〜たことがあります (Experience)",
            "scenario": "Discussing travel history with a coworker.",
            "chatHistory": [
                { "speaker": "A", "message": "富士山を見たことがありますか。" }
            ],
            "prompt": "Reply: 'Yes, I have climbed it once.'",
            "expectedResponse": "はい、一度登ったことがあります。",
            "explanation": "Ta-form + ことがあります expresses that you have the experience of doing an action in the past."
        },
        {
            "grammarPoint": "〜より〜の方が (Comparison)",
            "scenario": "A waiter asks for your preference.",
            "chatHistory": [
                { "speaker": "A", "message": "お茶とコーヒー、どちらがいいですか。" }
            ],
            "prompt": "Reply: 'I like coffee more than tea.'",
            "expectedResponse": "お茶よりコーヒーの方が好きです。",
            "explanation": "A より B の方が... sets up a comparison meaning 'Compared to A, B is more...'."
        },
        {
            "grammarPoint": "〜の中で〜が一番 (Superlative)",
            "scenario": "Discussing favorite fruits.",
            "chatHistory": [
                { "speaker": "A", "message": "果物の中で何が一番好きですか。" }
            ],
            "prompt": "Reply: 'I like apples the best.'",
            "expectedResponse": "りんごが一番好きです。",
            "explanation": "一番 (ichiban) is used to express the superlative (the most, the best) within a category."
        },
        {
            "grammarPoint": "〜てから (After doing)",
            "scenario": "Your mom tells you dinner is ready.",
            "chatHistory": [
                { "speaker": "A", "message": "晩ご飯ができましたよ。" }
            ],
            "prompt": "Reply: 'I will eat after washing my hands.'",
            "expectedResponse": "手を洗ってから食べます。",
            "explanation": "Te-form + から indicates a sequence of actions ('after doing A, I will do B')."
        },
        {
            "grammarPoint": "〜に行く (Purpose of movement)",
            "scenario": "Your roommate sees you putting on shoes.",
            "chatHistory": [
                { "speaker": "A", "message": "どこへ行きますか。" }
            ],
            "prompt": "Reply: 'I am going to the department store to buy clothes.'",
            "expectedResponse": "デパートへ服を買いに行きます。",
            "explanation": "Verb stem (買い) + に行く expresses the purpose of traveling to a destination."
        },
        {
            "grammarPoint": "どんな〜 (What kind of)",
            "scenario": "Getting to know a new friend's tastes.",
            "chatHistory": [
                { "speaker": "A", "message": "私はよく映画を見ます。" }
            ],
            "prompt": "Reply: 'What kind of movies do you watch?'",
            "expectedResponse": "どんな映画を見ますか。",
            "explanation": "どんな (donna) means 'what kind of' and must directly modify a noun."
        },
        {
            "grammarPoint": "どうして〜 (Why)",
            "scenario": "Your coworker was absent yesterday.",
            "chatHistory": [
                { "speaker": "A", "message": "昨日はすみませんでした。" }
            ],
            "prompt": "Reply: 'Why did you take a day off yesterday?'",
            "expectedResponse": "どうして昨日休みましたか。",
            "explanation": "どうして (doushite) is the standard question word for 'why'."
        },
        {
            "grammarPoint": "どのくらい〜 (Duration/Amount)",
            "scenario": "You meet a foreigner speaking excellent Japanese.",
            "chatHistory": [
                { "speaker": "A", "message": "こんにちは。いい天気ですね。" }
            ],
            "prompt": "Reply: 'How long have you studied Japanese?'",
            "expectedResponse": "どのくらい日本語を勉強しましたか。",
            "explanation": "どのくらい (dono kurai) asks for an approximate amount, duration, or cost."
        },
        {
            "grammarPoint": "いくつ〜 (How many)",
            "scenario": "You are at a bakery counter.",
            "chatHistory": [
                { "speaker": "A", "message": "いらっしゃいませ。メロンパンですね。" }
            ],
            "prompt": "Reply: 'Yes, please give me three.'",
            "expectedResponse": "はい、三つください。",
            "explanation": "いくつ (ikutsu) asks 'how many'. The traditional counter (一つ, 二つ, 三つ) is used for general objects."
        },
        {
            "grammarPoint": "いつ〜 (When)",
            "scenario": "Planning a party for a friend.",
            "chatHistory": [
                { "speaker": "A", "message": "来月、パーティーをしましょう。" }
            ],
            "prompt": "Reply: 'When is Tanaka's birthday?'",
            "expectedResponse": "田中さんの誕生日はいつですか。",
            "explanation": "いつ (itsu) is the question word for 'when'. It does not take the particle に."
        },
        {
            "grammarPoint": "だれ〜 (Who)",
            "scenario": "Looking at a photograph.",
            "chatHistory": [
                { "speaker": "A", "message": "これは私の家族の写真です。" }
            ],
            "prompt": "Reply: 'Who is that person?'",
            "expectedResponse": "あの人は誰ですか。",
            "explanation": "誰 (dare) is the question word for 'who'."
        },
        {
            "grammarPoint": "どこ〜 (Where)",
            "scenario": "You are lost in a department store.",
            "chatHistory": [
                { "speaker": "A", "message": "いらっしゃいませ。何かお探しですか。" }
            ],
            "prompt": "Reply: 'Where is the restroom?'",
            "expectedResponse": "トイレはどこですか。",
            "explanation": "どこ (doko) is the question word for 'where'."
        },
        {
            "grammarPoint": "どうやって〜 (How / By what means)",
            "scenario": "A colleague is visiting a new branch office.",
            "chatHistory": [
                { "speaker": "A", "message": "明日は東京支社に行きます。" }
            ],
            "prompt": "Reply: 'How will you go?'",
            "expectedResponse": "どうやって行きますか。",
            "explanation": "どうやって (dou yatte) asks for the method, route, or means of doing an action."
        },
        {
            "grammarPoint": "どの〜 (Which + Noun)",
            "scenario": "You are at the airport picking up someone you haven't met.",
            "chatHistory": [
                { "speaker": "A", "message": "田中さんはあそこにいますよ。" }
            ],
            "prompt": "Reply: 'Which person is Mr. Tanaka?'",
            "expectedResponse": "どの人が田中さんですか。",
            "explanation": "どの (dono) means 'which' and must be followed directly by a noun."
        },
        {
            "grammarPoint": "どれ〜 (Which one)",
            "scenario": "Looking at a crowded umbrella stand.",
            "chatHistory": [
                { "speaker": "A", "message": "そろそろ帰りましょう。" }
            ],
            "prompt": "Reply: 'Which one is Yamada's umbrella?'",
            "expectedResponse": "山田さんの傘はどれですか。",
            "explanation": "どれ (dore) means 'which one' (out of three or more) and functions as a pronoun."
        },
        {
            "grammarPoint": "〜しか〜ない (Only - Negative)",
            "scenario": "You want to buy a 1000-yen lunch, but check your wallet.",
            "chatHistory": [
                { "speaker": "A", "message": "一緒にお昼を食べませんか。" }
            ],
            "prompt": "Reply: 'I only have 500 yen.'",
            "expectedResponse": "500円しかありません。",
            "explanation": "しか (shika) must be paired with a negative verb, emphasizing that the amount is insufficient or limited."
        },
        {
            "grammarPoint": "〜だけ (Only - Positive)",
            "scenario": "A coworker asks about your schedule.",
            "chatHistory": [
                { "speaker": "A", "message": "土曜日も仕事ですか。" }
            ],
            "prompt": "Reply: 'No, I only work on weekdays.'",
            "expectedResponse": "いいえ、平日だけ働きます。",
            "explanation": "だけ (dake) means 'only' and is used with affirmative verbs."
        },
        {
            "grammarPoint": "くらい / ごろ (Approximate)",
            "scenario": "A friend asks about your sleep habits.",
            "chatHistory": [
                { "speaker": "A", "message": "いつも何時ごろ寝ますか。" }
            ],
            "prompt": "Reply: 'I sleep around 11 o'clock.'",
            "expectedResponse": "11時ごろ寝ます。",
            "explanation": "ごろ (goro) is used for an approximate point in time on the clock. (くらい/ぐらい is for duration/amounts)."
        },
        {
            "grammarPoint": "〜ながら (While doing)",
            "scenario": "Your mom complains about your study habits.",
            "chatHistory": [
                { "speaker": "A", "message": "ちゃんと勉強していますか。" }
            ],
            "prompt": "Reply: 'Yes, I study while listening to music.'",
            "expectedResponse": "はい、音楽を聞きながら勉強しています。",
            "explanation": "Verb stem (聞き) + ながら means doing two actions at the same time."
        },
        {
            "grammarPoint": "〜なくてもいいです (Don't have to)",
            "scenario": "You are feeling better after being sick, and talk to your doctor.",
            "chatHistory": [
                { "speaker": "A", "message": "熱はもうありませんね。" }
            ],
            "prompt": "Reply: 'Do I not have to take medicine tomorrow?'",
            "expectedResponse": "明日は薬を飲まなくてもいいですか。",
            "explanation": "Nai-form (drop い) + くてもいいです expresses that an action is unnecessary (don't have to do)."
        },
        {
            "grammarPoint": "〜なければなりません (Must do)",
            "scenario": "You are at a friend's house but it is getting late.",
            "chatHistory": [
                { "speaker": "A", "message": "もう帰りますか。" }
            ],
            "prompt": "Reply: 'Yes, I must return home by 10 o'clock.'",
            "expectedResponse": "はい、10時までに帰らなければなりません。",
            "explanation": "Nai-form + なければなりません is the standard N5 structure for obligation ('must do')."
        },
        {
            "grammarPoint": "〜でしょう (Probably / Right?)",
            "scenario": "Looking at the dark clouds outside with a coworker.",
            "chatHistory": [
                { "speaker": "A", "message": "空がとても暗いですね。" }
            ],
            "prompt": "Reply: 'It will probably rain tomorrow.'",
            "expectedResponse": "明日は雨が降るでしょう。",
            "explanation": "Plain form verb + でしょう expresses probability or a guess ('It will probably...')."
        },
        {
            "grammarPoint": "〜たほうがいいです (Had better do)",
            "scenario": "Your classmate looks very exhausted.",
            "chatHistory": [
                { "speaker": "A", "message": "昨日、あまり寝ていません。" }
            ],
            "prompt": "Reply: 'You had better sleep early today.'",
            "expectedResponse": "今日は早く寝たほうがいいですよ。",
            "explanation": "Ta-form + ほうがいいです is used to give strong advice ('You had better / should')."
        },
        {
            "grammarPoint": "〜ないほうがいいです (Had better not do)",
            "scenario": "Your friend wants to drink espresso at 10 PM.",
            "chatHistory": [
                { "speaker": "A", "message": "今からコーヒーを飲みます。" }
            ],
            "prompt": "Reply: 'You had better not drink coffee at night.'",
            "expectedResponse": "夜はコーヒーを飲まないほうがいいですよ。",
            "explanation": "Nai-form + ほうがいいです is used to advise someone against doing something."
        },
        {
            "grammarPoint": "〜前に (Before doing)",
            "scenario": "A dentist asks about your daily routine.",
            "chatHistory": [
                { "speaker": "A", "message": "夜は何をしますか。" }
            ],
            "prompt": "Reply: 'I brush my teeth before sleeping.'",
            "expectedResponse": "寝る前に歯を磨きます。",
            "explanation": "Dictionary form verb + 前に means 'before doing [action]'."
        },
        {
            "grammarPoint": "〜あとで (After doing)",
            "scenario": "Discussing plans for the evening with a friend.",
            "chatHistory": [
                { "speaker": "A", "message": "今日の夜、映画を見ませんか。" }
            ],
            "prompt": "Reply: 'Let's watch a movie after eating dinner.'",
            "expectedResponse": "晩ご飯を食べたあとで映画を見ましょう。",
            "explanation": "Ta-form verb + あとで means 'after doing [action]'."
        },
        {
            "grammarPoint": "〜時 (When - Noun)",
            "scenario": "Talking about your past with a new friend.",
            "chatHistory": [
                { "speaker": "A", "message": "スポーツは得意ですか。" }
            ],
            "prompt": "Reply: 'When I was a child, I played soccer a lot.'",
            "expectedResponse": "子供の時、よくサッカーをしました。",
            "explanation": "Noun + の + 時 (toki) means 'When I was a [Noun]'."
        },
        {
            "grammarPoint": "〜時 (When - Adjective)",
            "scenario": "A pharmacist is giving you medicine.",
            "chatHistory": [
                { "speaker": "A", "message": "これは頭の薬です。" }
            ],
            "prompt": "Reply: 'Should I take it when my head hurts?'",
            "expectedResponse": "頭が痛い時に飲みますか。",
            "explanation": "I-adjective (痛い) + 時 means 'When [condition is true]'."
        },
        {
            "grammarPoint": "〜時 (When - Verb)",
            "scenario": "Talking about a future trip to Japan.",
            "chatHistory": [
                { "speaker": "A", "message": "日本で何をしたいですか。" }
            ],
            "prompt": "Reply: 'When I go to Japan, I will buy a camera.'",
            "expectedResponse": "日本に行く時、カメラを買います。",
            "explanation": "Dictionary form verb + 時 means 'When doing [action]'."
        },
        {
            "grammarPoint": "Particle の (Possession)",
            "scenario": "You find a bag left on a chair in the classroom.",
            "chatHistory": [
                { "speaker": "A", "message": "あれ、誰のカバンですか。" }
            ],
            "prompt": "Reply: 'Is this Mr. Tanaka's bag?'",
            "expectedResponse": "これは田中さんのカバンですか。",
            "explanation": "Noun1 + の + Noun2 shows possession (Noun1's Noun2)."
        },
        {
            "grammarPoint": "Particle の (Noun Replacement)",
            "scenario": "You are at a store buying a shirt.",
            "chatHistory": [
                { "speaker": "A", "message": "どのシャツがいいですか。" }
            ],
            "prompt": "Reply: 'Please give me the red one.'",
            "expectedResponse": "赤いのをください。",
            "explanation": "Adjective + の acts as a pronoun meaning 'the [adjective] one'."
        },
        {
            "grammarPoint": "〜たり〜たりします (Doing things like A and B)",
            "scenario": "A coworker asks what you did on your day off.",
            "chatHistory": [
                { "speaker": "A", "message": "休みの日は何をしましたか。" }
            ],
            "prompt": "Reply: 'I did things like read books and listen to music.'",
            "expectedResponse": "本を読んだり、音楽を聞いたりしました。",
            "explanation": "Ta-form + り, Ta-form + りします is used to list representative actions among others."
        },
        {
            "grammarPoint": "もう〜ました (Already did)",
            "scenario": "Your teacher asks if you finished the assignment.",
            "chatHistory": [
                { "speaker": "A", "message": "今日の宿題は終わりましたか。" }
            ],
            "prompt": "Reply: 'Yes, I already did my homework.'",
            "expectedResponse": "はい、もう宿題をしました。",
            "explanation": "もう + Past Tense Verb means the action has already been completed."
        },
        {
            "grammarPoint": "まだ〜ていません (Have not yet)",
            "scenario": "Your roommate asks if you are hungry.",
            "chatHistory": [
                { "speaker": "A", "message": "晩ご飯を食べましたか。" }
            ],
            "prompt": "Reply: 'No, I haven't eaten dinner yet.'",
            "expectedResponse": "いいえ、まだ晩ご飯を食べていません。",
            "explanation": "まだ + Te-form + いません means the action has not yet been done."
        },
        {
            "grammarPoint": "あります (Inanimate Existence)",
            "scenario": "Someone asks what is in your refrigerator.",
            "chatHistory": [
                { "speaker": "A", "message": "冷蔵庫の中に何がありますか。" }
            ],
            "prompt": "Reply: 'There are apples and milk.'",
            "expectedResponse": "りんごと牛乳があります。",
            "explanation": "あります is used to state the existence of inanimate objects (plants, things)."
        },
        {
            "grammarPoint": "います (Animate Existence)",
            "scenario": "Looking into a quiet classroom.",
            "chatHistory": [
                { "speaker": "A", "message": "教室に誰がいますか。" }
            ],
            "prompt": "Reply: 'There is a teacher.'",
            "expectedResponse": "先生がいます。",
            "explanation": "います is used to state the existence of living, breathing things (humans, animals)."
        },
        {
            "grammarPoint": "Noun は Location にあります (Topic Location)",
            "scenario": "A tourist is asking for directions.",
            "chatHistory": [
                { "speaker": "A", "message": "すみません、郵便局はどこですか。" }
            ],
            "prompt": "Reply: 'The post office is next to the bank.'",
            "expectedResponse": "郵便局は銀行の隣にあります。",
            "explanation": "Topic + は + Location + にあります is used to describe where a known subject is located."
        },
        {
            "grammarPoint": "Location に Noun があります (Location of Existence)",
            "scenario": "You are describing your new apartment.",
            "chatHistory": [
                { "speaker": "A", "message": "部屋に何がありますか。" }
            ],
            "prompt": "Reply: 'There is a bed and a desk in my room.'",
            "expectedResponse": "私の部屋にベッドと机があります。",
            "explanation": "Location + に + Subject + があります introduces new items existing in a specific place."
        },
        {
            "grammarPoint": "〜や〜など (And... etc)",
            "scenario": "A security guard asks what is inside your bag.",
            "chatHistory": [
                { "speaker": "A", "message": "カバンの中に何が入っていますか。" }
            ],
            "prompt": "Reply: 'There are things like books and pens.'",
            "expectedResponse": "本やペンなどがあります。",
            "explanation": "Noun や Noun (など) creates an incomplete list ('things like A and B')."
        },
        {
            "grammarPoint": "て-form to connect verbs",
            "scenario": "A friend asks about your busy morning.",
            "chatHistory": [
                { "speaker": "A", "message": "今朝はどうしましたか。" }
            ],
            "prompt": "Reply: 'I woke up at 7, ate breakfast, and went to school.'",
            "expectedResponse": "7時に起きて、朝ご飯を食べて、学校へ行きました。",
            "explanation": "Verbs in the te-form can be chained together to show a sequence of actions."
        },
        {
            "grammarPoint": "〜くて (Connecting i-adjectives)",
            "scenario": "Showing your new smartphone to a friend.",
            "chatHistory": [
                { "speaker": "A", "message": "新しいスマートフォンはどうですか。" }
            ],
            "prompt": "Reply: 'It is light and convenient.'",
            "expectedResponse": "軽くて便利です。",
            "explanation": "To connect an i-adjective (軽い) to another adjective, drop the 'い' and add 'くて'."
        },
        {
            "grammarPoint": "〜で (Connecting na-adjectives)",
            "scenario": "Describing your hometown to a classmate.",
            "chatHistory": [
                { "speaker": "A", "message": "山田さんの町はどんな町ですか。" }
            ],
            "prompt": "Reply: 'The town is quiet and beautiful.'",
            "expectedResponse": "町は静かで、きれいです。",
            "explanation": "To connect a na-adjective (静か) to another adjective, replace 'な' with 'で'."
        },
        {
            "grammarPoint": "い-adjective (Negative)",
            "scenario": "Your classmate asks about yesterday's exam.",
            "chatHistory": [
                { "speaker": "A", "message": "昨日のテストはどうでしたか。" }
            ],
            "prompt": "Reply: 'The test was not difficult.'",
            "expectedResponse": "テストは難しくなかったです。",
            "explanation": "To make an i-adjective negative past, drop the 'い' and add 'くなかったです'."
        },
        {
            "grammarPoint": "い-adjective (Past)",
            "scenario": "A friend asks about the movie you watched last night.",
            "chatHistory": [
                { "speaker": "A", "message": "映画はどうでしたか。" }
            ],
            "prompt": "Reply: 'The movie was interesting.'",
            "expectedResponse": "映画は面白かったです。",
            "explanation": "To make an i-adjective past tense, drop the 'い' and add 'かったです'."
        },
        {
            "grammarPoint": "い-adjective (Past Negative)",
            "scenario": "Asking about the weather during your vacation.",
            "chatHistory": [
                { "speaker": "A", "message": "北海道は寒かったですか。" }
            ],
            "prompt": "Reply: 'No, it was not cold yesterday.'",
            "expectedResponse": "いいえ、昨日は寒くなかったです。",
            "explanation": "The past negative of 寒い is 寒くなかったです."
        },
        {
            "grammarPoint": "な-adjective (Negative)",
            "scenario": "A coworker invites you out for a drink.",
            "chatHistory": [
                { "speaker": "A", "message": "今日、仕事のあと暇ですか。" }
            ],
            "prompt": "Reply: 'I am sorry, I am not free today.'",
            "expectedResponse": "すみません、今日は暇じゃありません。",
            "explanation": "The negative form of a na-adjective is [Stem] + じゃありません (or ではありません)."
        },
        {
            "grammarPoint": "な-adjective (Past)",
            "scenario": "Discussing a park you visited over the weekend.",
            "chatHistory": [
                { "speaker": "A", "message": "日曜日の公園はどうでしたか。" }
            ],
            "prompt": "Reply: 'The park was quiet.'",
            "expectedResponse": "公園は静かでした。",
            "explanation": "The past tense of a na-adjective is [Stem] + でした."
        },
        {
            "grammarPoint": "な-adjective (Past Negative)",
            "scenario": "Asking about a restaurant you tried.",
            "chatHistory": [
                { "speaker": "A", "message": "新しいレストランは賑やかでしたか。" }
            ],
            "prompt": "Reply: 'No, the restaurant was not lively.'",
            "expectedResponse": "いいえ、レストランは賑やかじゃありませんでした。",
            "explanation": "The past negative of a na-adjective is [Stem] + じゃありませんでした."
        },
        {
            "grammarPoint": "どうですか (How is it?)",
            "scenario": "You are trying on shoes at a store.",
            "chatHistory": [
                { "speaker": "A", "message": "こちらのサイズはいかがですか。" }
            ],
            "prompt": "Reply: 'It is good. How much are these shoes?'",
            "expectedResponse": "いいです。この靴はいくらですか。",
            "explanation": "いくら (ikura) is the standard question word for asking the price."
        },
        {
            "grammarPoint": "どうしましたか (What happened?)",
            "scenario": "Your friend arrives late and looks flustered.",
            "chatHistory": [
                { "speaker": "A", "message": "はあ、はあ... すみません、遅れました。" }
            ],
            "prompt": "Reply: 'What happened? Are you okay?'",
            "expectedResponse": "どうしましたか。大丈夫ですか。",
            "explanation": "どうしましたか (dou shimashita ka) is used to ask 'What happened?' or 'What's wrong?'."
        },
        {
            "grammarPoint": "いくら (How much money)",
            "scenario": "You are at an electronics store looking at cameras.",
            "chatHistory": [
                { "speaker": "A", "message": "いらっしゃいませ。" }
            ],
            "prompt": "Reply: 'Excuse me, how much is this camera?'",
            "expectedResponse": "すみません、このカメラはいくらですか。",
            "explanation": "いくら (ikura) is the interrogative word used to ask about prices."
        },
        {
            "grammarPoint": "いくつ (How many items)",
            "scenario": "Ordering at a fast-food counter.",
            "chatHistory": [
                { "speaker": "A", "message": "ハンバーガーですね。かしこまりました。" }
            ],
            "prompt": "Reply: 'Please give me two hamburgers.'",
            "expectedResponse": "ハンバーガーを二つください。",
            "explanation": "いくつ is the question for 'how many'. 二つ (futatsu) is the counter for two general items."
        },
        {
            "grammarPoint": "どのくらい (How long / duration)",
            "scenario": "Planning a trip with a friend.",
            "chatHistory": [
                { "speaker": "A", "message": "明日、京都へ行きますね。" }
            ],
            "prompt": "Reply: 'How long does it take from Tokyo to Kyoto?'",
            "expectedResponse": "東京から京都までどのくらいかかりますか。",
            "explanation": "どのくらい (dono kurai) + かかります asks for the duration of time or cost."
        },
        {
            "grammarPoint": "どんな (What kind of)",
            "scenario": "You hear about a new coworker.",
            "chatHistory": [
                { "speaker": "A", "message": "明日、新しい人が来ますよ。" }
            ],
            "prompt": "Reply: 'What kind of person is Mr. Tanaka?'",
            "expectedResponse": "田中さんはどんな人ですか。",
            "explanation": "どんな (donna) means 'what kind of' and must immediately precede a noun."
        },
        {
            "grammarPoint": "〜から (Because / So)",
            "scenario": "You are packing your bag early at the office.",
            "chatHistory": [
                { "speaker": "A", "message": "もう帰りますか。" }
            ],
            "prompt": "Reply: 'Yes, because I am busy, I will go home.'",
            "expectedResponse": "はい、忙しいですから、帰ります。",
            "explanation": "Adding から (kara) to the end of a clause makes it the reason ('because...')."
        },
        {
            "grammarPoint": "〜から〜まで (From ~ To ~ Time)",
            "scenario": "A friend asks about your part-time job.",
            "chatHistory": [
                { "speaker": "A", "message": "アルバイトは大変ですか。" }
            ],
            "prompt": "Reply: 'Yes, I work from 9 to 5.'",
            "expectedResponse": "はい、9時から5時まで働きます。",
            "explanation": "から (from) and まで (until/to) can be used together to define a block of time."
        },
        {
            "grammarPoint": "〜から〜まで (From ~ To ~ Place)",
            "scenario": "Someone asks about your commute.",
            "chatHistory": [
                { "speaker": "A", "message": "家から学校まで遠いですか。" }
            ],
            "prompt": "Reply: 'From the station to the school, it takes 10 minutes.'",
            "expectedResponse": "駅から学校まで10分かかります。",
            "explanation": "から and まで are also used to define physical distances and routes."
        },
        {
            "grammarPoint": "だれが (Who - Subject Marker)",
            "scenario": "You hear a knock at the door.",
            "chatHistory": [
                { "speaker": "A", "message": "（トントン）" }
            ],
            "prompt": "Reply: 'Who came?'",
            "expectedResponse": "誰が来ましたか。",
            "explanation": "When an interrogative word like 誰 (who) is the subject of the sentence, it must be marked with が."
        },
        {
            "grammarPoint": "なにか (Something)",
            "scenario": "You see a friend looking inside a large box.",
            "chatHistory": [
                { "speaker": "A", "message": "この箱、重いですね。" }
            ],
            "prompt": "Reply: 'Is there something inside?'",
            "expectedResponse": "中に何かありますか。",
            "explanation": "何か (nanika) means 'something' or 'anything' for inanimate objects."
        },
        {
            "grammarPoint": "なにも (Nothing)",
            "scenario": "You open the refrigerator hoping for a snack.",
            "chatHistory": [
                { "speaker": "A", "message": "冷蔵庫にケーキがありますか。" }
            ],
            "prompt": "Reply: 'No, there is nothing inside.'",
            "expectedResponse": "いいえ、何もありません。",
            "explanation": "何も (nanimo) paired with a negative verb means 'nothing'."
        },
        {
            "grammarPoint": "どこか (Somewhere)",
            "scenario": "Talking about the recent holiday weekend.",
            "chatHistory": [
                { "speaker": "A", "message": "昨日は休みでしたね。" }
            ],
            "prompt": "Reply: 'Did you go somewhere yesterday?'",
            "expectedResponse": "昨日、どこかへ行きましたか。",
            "explanation": "どこか (dokoka) means 'somewhere' or 'anywhere'."
        },
        {
            "grammarPoint": "どこへも (Nowhere)",
            "scenario": "Answering your friend's question about the weekend.",
            "chatHistory": [
                { "speaker": "A", "message": "週末はどこかへ行きましたか。" }
            ],
            "prompt": "Reply: 'No, I didn't go anywhere.'",
            "expectedResponse": "いいえ、どこへも行きませんでした。",
            "explanation": "どこへも (doko e mo) paired with a negative verb means 'nowhere'."
        },
        {
            "grammarPoint": "だれか (Someone)",
            "scenario": "You walk into a dark, quiet office.",
            "chatHistory": [
                { "speaker": "A", "message": "電気が消えていますね。" }
            ],
            "prompt": "Reply: 'Is there someone in the room?'",
            "expectedResponse": "部屋に誰かいますか。",
            "explanation": "誰か (dareka) means 'someone' or 'anyone'."
        },
        {
            "grammarPoint": "だれも (No one)",
            "scenario": "You arrive at the meeting room 30 minutes early.",
            "chatHistory": [
                { "speaker": "A", "message": "みんな来ましたか。" }
            ],
            "prompt": "Reply: 'No, no one has come yet.'",
            "expectedResponse": "いいえ、まだ誰も来ていません。",
            "explanation": "誰も (daremo) paired with a negative verb means 'no one' or 'nobody'."
        },
        {
            "grammarPoint": "〜がほしいです (Want an object)",
            "scenario": "Your parents ask what you want for your birthday.",
            "chatHistory": [
                { "speaker": "A", "message": "誕生日のプレゼントは何がいいですか。" }
            ],
            "prompt": "Reply: 'I want a new computer.'",
            "expectedResponse": "新しいパソコンが欲しいです。",
            "explanation": "Noun + が + 欲しいです (hoshii) is used to express that you want a physical object."
        },
        {
            "grammarPoint": "〜くする (Adjective to Adverb - Action)",
            "scenario": "You are watching a movie but cannot hear the voices.",
            "chatHistory": [
                { "speaker": "A", "message": "映画が始まりますよ。" }
            ],
            "prompt": "Reply: 'Please make the television louder.'",
            "expectedResponse": "テレビの音を大きくしてください。",
            "explanation": "To show an action that changes a state, change an i-adjective to 'く' and add します (大きくします)."
        },
        {
            "grammarPoint": "〜にする (Decide on)",
            "scenario": "You are looking at the menu in a restaurant.",
            "chatHistory": [
                { "speaker": "A", "message": "私はうどんにします。山田さんは？" }
            ],
            "prompt": "Reply: 'I will have curry.'",
            "expectedResponse": "私はカレーにします。",
            "explanation": "Noun + にする indicates a choice or decision, especially when ordering at a restaurant."
        },
        {
            "grammarPoint": "Particle か (Or)",
            "scenario": "You have guests over and want to offer them drinks.",
            "chatHistory": [
                { "speaker": "A", "message": "お邪魔します。" }
            ],
            "prompt": "Reply: 'Would you like coffee or tea?'",
            "expectedResponse": "コーヒーかお茶はいかがですか。",
            "explanation": "The particle か (ka) placed between nouns acts as 'or' (A or B)."
        },
        {
            "grammarPoint": "どうやって (How to do)",
            "scenario": "You bought a new electronic device but are confused.",
            "chatHistory": [
                { "speaker": "A", "message": "新しいカメラですね。" }
            ],
            "prompt": "Reply: 'Yes, but how do I use this?'",
            "expectedResponse": "はい、でもこれはどうやって使いますか。",
            "explanation": "どうやって (dou yatte) means 'how' or 'in what way', asking for the method to perform an action."
        },
        {
            "grammarPoint": "Particle ね (Seeking Agreement)",
            "scenario": "Looking outside the window with a coworker.",
            "chatHistory": [
                { "speaker": "A", "message": "今日はとてもいい天気ですね。" }
            ],
            "prompt": "Reply: 'Yes, it is warm, isn't it.'",
            "expectedResponse": "はい、暖かいですね。",
            "explanation": "The particle ね (ne) at the end of a sentence seeks agreement or confirmation from the listener ('isn't it?')."
        },
        {
            "grammarPoint": "Particle よ (Assertion / New Info)",
            "scenario": "A tourist is looking for a convenience store.",
            "chatHistory": [
                { "speaker": "A", "message": "この近くにコンビニはありますか。" }
            ],
            "prompt": "Reply: 'Yes, there is one over there, you know.'",
            "expectedResponse": "はい、あそこにありますよ。",
            "explanation": "The particle よ (yo) is used to assert something or provide new information the listener doesn't know."
        },
        {
            "grammarPoint": "あげる (To give)",
            "scenario": "Discussing a friend's upcoming birthday.",
            "chatHistory": [
                { "speaker": "A", "message": "明日は山田さんの誕生日ですね。" }
            ],
            "prompt": "Reply: 'I will give Yamada a book.'",
            "expectedResponse": "私は山田さんに本をあげます。",
            "explanation": "あげる (ageru) is used when the speaker (or someone else) gives an item to a third party."
        },
        {
            "grammarPoint": "もらう (To receive)",
            "scenario": "A friend admires your new watch.",
            "chatHistory": [
                { "speaker": "A", "message": "素敵な時計ですね。" }
            ],
            "prompt": "Reply: 'I received it from my father.'",
            "expectedResponse": "父にもらいました。",
            "explanation": "もらう (morau) means 'to receive'. The giver is marked with the particle に or から."
        },
        {
            "grammarPoint": "くれる (To give to me)",
            "scenario": "Talking about a souvenir you brought to work.",
            "chatHistory": [
                { "speaker": "A", "message": "このお菓子、おいしいですね。" }
            ],
            "prompt": "Reply: 'A friend gave it to me.'",
            "expectedResponse": "友達がくれました。",
            "explanation": "くれる (kureru) is specifically used when someone gives an item TO the speaker (or the speaker's in-group)."
        },
        {
            "grammarPoint": "〜ないつもりです (Intention - Negative)",
            "scenario": "Your friends are planning to go to a party, but you are tired.",
            "chatHistory": [
                { "speaker": "A", "message": "今日の夜、パーティーに行きますか。" }
            ],
            "prompt": "Reply: 'No, I don't plan to go today.'",
            "expectedResponse": "いいえ、今日は行かないつもりです。",
            "explanation": "Nai-form + つもりです expresses a firm intention NOT to do something."
        },
        {
            "grammarPoint": "〜ましょうか (Offering help)",
            "scenario": "You see a coworker carrying a heavy box.",
            "chatHistory": [
                { "speaker": "A", "message": "よいしょ... 重い..." }
            ],
            "prompt": "Reply: 'Shall I carry the baggage?'",
            "expectedResponse": "荷物を持ちましょうか。",
            "explanation": "Verb stem + ましょうか is used to politely offer assistance to someone ('Shall I...?')."
        },
        {
            "grammarPoint": "〜ませんか (Specific Invitation)",
            "scenario": "You want to hang out with a classmate this weekend.",
            "chatHistory": [
                { "speaker": "A", "message": "今週の土曜日は暇ですか。" }
            ],
            "prompt": "Reply: 'Yes, won't you eat lunch together?'",
            "expectedResponse": "はい、一緒にお昼ご飯を食べませんか。",
            "explanation": "Verb stem + ませんか is a polite and common way to invite someone to do an activity."
        },
        {
            "grammarPoint": "Noun が嫌いです (Dislike)",
            "scenario": "You are at a restaurant and your friend suggests a salad.",
            "chatHistory": [
                { "speaker": "A", "message": "サラダにトマトを入れますか。" }
            ],
            "prompt": "Reply: 'No, I dislike tomatoes.'",
            "expectedResponse": "いいえ、私はトマトが嫌いです。",
            "explanation": "嫌い (kirai - dislike) acts like an adjective, taking the particle が for the object of dislike."
        },
        {
            "grammarPoint": "Noun が上手です (Specific Skill)",
            "scenario": "Your host family hears you humming a tune.",
            "chatHistory": [
                { "speaker": "A", "message": "いい歌ですね。" }
            ],
            "prompt": "Reply: 'My mother is good at singing.'",
            "expectedResponse": "私の母は歌が上手です。",
            "explanation": "上手 (jouzu - good at) takes the particle が to mark the specific skill."
        },
        {
            "grammarPoint": "Adjective + Noun (Noun Modification)",
            "scenario": "Walking into a new cafe with a friend.",
            "chatHistory": [
                { "speaker": "A", "message": "このお店はどうですか。" }
            ],
            "prompt": "Reply: 'It is a quiet and clean shop.'",
            "expectedResponse": "静かできれいなお店ですね。",
            "explanation": "Na-adjectives (きれい) must use な to directly modify a noun (きれいなお店)."
        },
        {
            "grammarPoint": "どんな + Noun (Asking for description)",
            "scenario": "A friend mentions they bought a new car.",
            "chatHistory": [
                { "speaker": "A", "message": "昨日、車を買いました。" }
            ],
            "prompt": "Reply: 'What kind of car did you buy?'",
            "expectedResponse": "どんな車を買いましたか。",
            "explanation": "どんな (donna) requires a noun directly after it to ask 'what kind of [noun]'."
        },
        {
            "grammarPoint": "もう + Verb Past (Action completed)",
            "scenario": "Looking for a coworker in the office at 6 PM.",
            "chatHistory": [
                { "speaker": "A", "message": "山田さんはどこにいますか。" }
            ],
            "prompt": "Reply: 'Yamada already went home.'",
            "expectedResponse": "山田さんはもう帰りました。",
            "explanation": "もう (mou) combined with a past tense verb means 'already did'."
        },
        {
            "grammarPoint": "まだ + ていません (State incomplete)",
            "scenario": "A teacher asks if you've seen the new textbook.",
            "chatHistory": [
                { "speaker": "A", "message": "新しい本を読みましたか。" }
            ],
            "prompt": "Reply: 'No, I have not read it yet.'",
            "expectedResponse": "いいえ、まだ読んでいません。",
            "explanation": "まだ (mada) combined with te-form + いません means 'have not yet done'."
        },
        {
            "grammarPoint": "何時間 (Duration of hours)",
            "scenario": "Chatting about studying Japanese.",
            "chatHistory": [
                { "speaker": "A", "message": "毎日、日本語を勉強しますか。" }
            ],
            "prompt": "Reply: 'Yes. How many hours do you study every day?'",
            "expectedResponse": "はい。毎日何時間勉強しますか。",
            "explanation": "何時間 (nan-jikan) asks for the duration of time in hours."
        },
        {
            "grammarPoint": "Frequency (Time period に Number 回)",
            "scenario": "A doctor asks about your exercise habits.",
            "chatHistory": [
                { "speaker": "A", "message": "よく運動をしますか。" }
            ],
            "prompt": "Reply: 'I go to the pool once a week.'",
            "expectedResponse": "一週間に一回プールへ行きます。",
            "explanation": "Time period + に + Number + 回 (kai) expresses how many times an action occurs in that period."
        },
        {
            "grammarPoint": "Location Words (Noun の Noun)",
            "scenario": "You are looking for your keys in the living room.",
            "chatHistory": [
                { "speaker": "A", "message": "何か探していますか。" }
            ],
            "prompt": "Reply: 'Where are the keys? Are they on top of the desk?'",
            "expectedResponse": "鍵はどこですか。机の上にありますか。",
            "explanation": "Noun1 (Object) + の + Noun2 (Position) creates a specific location phrase (e.g., 机の上 = top of the desk)."
        },
        {
            "grammarPoint": "Noun の Noun (Category/Type)",
            "scenario": "You see a classmate reading a magazine.",
            "chatHistory": [
                { "speaker": "A", "message": "この雑誌、面白いですよ。" }
            ],
            "prompt": "Reply: 'Is it a car magazine?'",
            "expectedResponse": "それは車の雑誌ですか。",
            "explanation": "The particle の can connect two nouns to describe the category or type of the second noun."
        },
        {
            "grammarPoint": "います vs あります (Existence)",
            "scenario": "Asking a new friend about their family and home.",
            "chatHistory": [
                { "speaker": "A", "message": "私の家は少し狭いです。" }
            ],
            "prompt": "Reply: 'Do you have a dog or a cat?'",
            "expectedResponse": "犬か猫がいますか。",
            "explanation": "For living, moving things like animals and humans, います (imasu) must be used instead of あります."
        },
        {
            "grammarPoint": "〜から (Reason at the end)",
            "scenario": "A coworker invites you to drink, but you must decline.",
            "chatHistory": [
                { "speaker": "A", "message": "これからお酒を飲みに行きませんか。" }
            ],
            "prompt": "Reply: 'I'm sorry, I'm going home because I have an appointment.'",
            "expectedResponse": "すみません、約束がありますから帰ります。",
            "explanation": "Adding から (kara) to a complete sentence provides the reason for the action that follows."
        },
        {
            "grammarPoint": "〜てください (Wait)",
            "scenario": "You are walking with a friend but you drop your phone.",
            "chatHistory": [
                { "speaker": "A", "message": "あ、電車が来ますよ！" }
            ],
            "prompt": "Reply: 'Please wait a moment!'",
            "expectedResponse": "ちょっと待ってください！",
            "explanation": "Te-form + ください (kudasai) makes a direct request. 待つ becomes 待って."
        },
        {
            "grammarPoint": "〜ないでください (Don't forget)",
            "scenario": "A teacher is handing out an important form.",
            "chatHistory": [
                { "speaker": "A", "message": "このプリントは明日出してください。" }
            ],
            "prompt": "Reply: 'Understood. I will tell the others not to forget.'",
            "expectedResponse": "わかりました。忘れないでくださいと伝えます。",
            "explanation": "Nai-form base + ないでください makes a negative request ('Please do not...')."
        },
        {
            "grammarPoint": "〜てもいいですか (May I use)",
            "scenario": "You need to make an urgent call but your phone is dead.",
            "chatHistory": [
                { "speaker": "A", "message": "どうしたんですか。困っていますね。" }
            ],
            "prompt": "Reply: 'May I use your phone?'",
            "expectedResponse": "電話を使ってもいいですか。",
            "explanation": "Te-form + もいいですか asks for permission."
        },
        {
            "grammarPoint": "〜てはいけません (Must not take photos)",
            "scenario": "You are in an art museum and pull out your camera.",
            "chatHistory": [
                { "speaker": "A", "message": "お客様、カメラはカバンに入れてください。" }
            ],
            "prompt": "Reply: 'Ah, must I not take photos here?'",
            "expectedResponse": "あ、ここで写真を撮ってはいけませんか。",
            "explanation": "Te-form + はいけません asks or states a strong prohibition."
        },
        {
            "grammarPoint": "〜から〜まで (Duration/Cost)",
            "scenario": "Planning a weekend trip to a neighboring city.",
            "chatHistory": [
                { "speaker": "A", "message": "明日は新幹線で大阪へ行きます。" }
            ],
            "prompt": "Reply: 'How much is it from Tokyo to Osaka?'",
            "expectedResponse": "東京から大阪までいくらですか。",
            "explanation": "から and まで combined with いくら ask the total cost of a route."
        },
        {
            "grammarPoint": "〜に行く (Purpose with Nouns)",
            "scenario": "You are packing a bag on a Sunday morning.",
            "chatHistory": [
                { "speaker": "A", "message": "いい天気ですね。どこへ行きますか。" }
            ],
            "prompt": "Reply: 'I am going to the park to play.'",
            "expectedResponse": "公園へ遊びに行きます。",
            "explanation": "Verb stem (遊び) + に行く expresses the purpose of traveling to a place."
        },
        {
            "grammarPoint": "〜ながら (Multitasking)",
            "scenario": "A friend points out your dangerous walking habit.",
            "chatHistory": [
                { "speaker": "A", "message": "危ないですよ！前を見てください。" }
            ],
            "prompt": "Reply: 'I'm sorry. I won't walk while looking at my smartphone.'",
            "expectedResponse": "すみません。スマートフォンを見ながら歩きません。",
            "explanation": "Verb stem + ながら connects two simultaneous actions."
        },
        {
            "grammarPoint": "〜たことがありません (Negative Experience)",
            "scenario": "A coworker invites you to a sushi restaurant.",
            "chatHistory": [
                { "speaker": "A", "message": "納豆（なっとう）は好きですか。" }
            ],
            "prompt": "Reply: 'I don't know. I have never eaten it.'",
            "expectedResponse": "わかりません。食べたことがありません。",
            "explanation": "Ta-form + ことがありません explicitly states that you lack the life experience of doing an action."
        },
        {
            "grammarPoint": "〜たほうがいいです (Strong Advice)",
            "scenario": "Your classmate is coughing heavily.",
            "chatHistory": [
                { "speaker": "A", "message": "ゴホッ、ゴホッ... 頭も痛いです。" }
            ],
            "prompt": "Reply: 'You should go to the hospital.'",
            "expectedResponse": "病院に行ったほうがいいですよ。",
            "explanation": "Ta-form + ほうがいいです translates to 'You had better / You should'."
        },
        {
            "grammarPoint": "どのくらい (Approximate Duration)",
            "scenario": "You are waiting for a table at a busy restaurant.",
            "chatHistory": [
                { "speaker": "A", "message": "いらっしゃいませ。ただいま満席です。" }
            ],
            "prompt": "Reply: 'About how long will it take?'",
            "expectedResponse": "どのくらいかかりますか。",
            "explanation": "どのくらい (dono kurai) combined with かかる asks for the duration of waiting or travel."
        },
        {
            "grammarPoint": "だれ (Who)",
            "scenario": "You find a mysterious umbrella at the office.",
            "chatHistory": [
                { "speaker": "A", "message": "あ、こんな所に傘がありますね。" }
            ],
            "prompt": "Reply: 'Whose umbrella is this?'",
            "expectedResponse": "これは誰の傘ですか。",
            "explanation": "誰 (dare) + の (no) creates 'whose'."
        },
        {
            "grammarPoint": "だれか (Someone)",
            "scenario": "You want to play tennis but need a partner.",
            "chatHistory": [
                { "speaker": "A", "message": "週末はテニスをしたいですね。" }
            ],
            "prompt": "Reply: 'Will someone go with me?'",
            "expectedResponse": "誰か一緒に行きませんか。",
            "explanation": "誰か (dareka) means 'someone/anyone' and does not need an additional particle for the subject here."
        },
        {
            "grammarPoint": "だれも (No one)",
            "scenario": "You call your friend's house, but they don't answer.",
            "chatHistory": [
                { "speaker": "A", "message": "（電話の音）プルルルル..." }
            ],
            "prompt": "Reply: 'It seems no one is home.'",
            "expectedResponse": "誰もいないみたいですね。",
            "explanation": "誰も (daremo) paired with a negative verb means 'no one'."
        },
        {
            "grammarPoint": "なにか (Something to eat)",
            "scenario": "You and a friend are walking around town at 1 PM.",
            "chatHistory": [
                { "speaker": "A", "message": "お腹が空きましたね。" }
            ],
            "prompt": "Reply: 'Yes, I want to eat something.'",
            "expectedResponse": "はい、何か食べたいです。",
            "explanation": "何か (nanika) means 'something'. It replaces the object particle を."
        },
        {
            "grammarPoint": "なにも (Nothing to do)",
            "scenario": "A friend asks about your very boring weekend.",
            "chatHistory": [
                { "speaker": "A", "message": "日曜日は何をしましたか。" }
            ],
            "prompt": "Reply: 'I did not do anything.'",
            "expectedResponse": "何もしていません。",
            "explanation": "何も (nanimo) paired with a negative verb means 'nothing'."
        },
        {
            "grammarPoint": "どこかへ (Going somewhere)",
            "scenario": "Golden Week is approaching and you are excited.",
            "chatHistory": [
                { "speaker": "A", "message": "来週から長い休みですね。" }
            ],
            "prompt": "Reply: 'I want to go somewhere with my family.'",
            "expectedResponse": "家族とどこかへ行きたいです。",
            "explanation": "どこか (dokoka) can take direction particles like へ (e) or に (ni)."
        },
        {
            "grammarPoint": "どこへも (Going nowhere)",
            "scenario": "You are broke at the end of the month.",
            "chatHistory": [
                { "speaker": "A", "message": "週末はデパートに行きませんか。" }
            ],
            "prompt": "Reply: 'I don't have money, so I won't go anywhere.'",
            "expectedResponse": "お金がありませんから、どこへも行きません。",
            "explanation": "どこへも (doko e mo) paired with a negative verb means 'nowhere'."
        },
        {
            "grammarPoint": "いつ (When)",
            "scenario": "Your Japanese teacher mentions a final exam.",
            "chatHistory": [
                { "speaker": "A", "message": "来月、大きなテストがありますよ。" }
            ],
            "prompt": "Reply: 'When is the test?'",
            "expectedResponse": "テストはいつですか。",
            "explanation": "いつ (itsu) asks 'when'. It acts independently without the particle に."
        },
        {
            "grammarPoint": "〜でしょう (Confirmation)",
            "scenario": "Looking at the heavy snow outside.",
            "chatHistory": [
                { "speaker": "A", "message": "外は真っ白ですね。" }
            ],
            "prompt": "Reply: 'It is cold, isn't it.'",
            "expectedResponse": "寒いでしょう。",
            "explanation": "Adjective + でしょう (deshou) is used with a rising intonation to ask for confirmation ('It is..., right?')."
        },
        {
            "grammarPoint": "どうやって (Method)",
            "scenario": "A friend brings you a very delicious homemade cake.",
            "chatHistory": [
                { "speaker": "A", "message": "このケーキ、私が作りました。" }
            ],
            "prompt": "Reply: 'It is delicious. How do you make it?'",
            "expectedResponse": "おいしいですね。どうやって作りますか。",
            "explanation": "どうやって (dou yatte) is used to ask for the method or process of doing something."
        },
        {
            "grammarPoint": "どちら (Which of two)",
            "scenario": "You are buying a gift and have two options.",
            "chatHistory": [
                { "speaker": "A", "message": "赤と青のシャツがありますよ。" }
            ],
            "prompt": "Reply: 'Which one is cheaper?'",
            "expectedResponse": "どちらが安いですか。",
            "explanation": "どちら (dochira) is the interrogative word used when choosing between exactly two items."
        },
        {
            "grammarPoint": "どれ (Which of three+)",
            "scenario": "You are at a bakery with many types of bread.",
            "chatHistory": [
                { "speaker": "A", "message": "色々なパンがありますね。" }
            ],
            "prompt": "Reply: 'Which one is the most delicious?'",
            "expectedResponse": "どれが一番おいしいですか。",
            "explanation": "どれ (dore) is used when asking 'which one' out of three or more options."
        },
        {
            "grammarPoint": "だけ (Only - Affirmative)",
            "scenario": "You are at a restaurant but you are on a diet.",
            "chatHistory": [
                { "speaker": "A", "message": "お飲み物は何にしますか。" }
            ],
            "prompt": "Reply: 'I will drink only water.'",
            "expectedResponse": "水だけ飲みます。",
            "explanation": "だけ (dake) means 'only' and is used with affirmative sentences."
        },
        {
            "grammarPoint": "しか〜ない (Only - Negative emphasis)",
            "scenario": "You want to buy a 500-yen notebook.",
            "chatHistory": [
                { "speaker": "A", "message": "お会計は500円になります。" }
            ],
            "prompt": "Reply: 'I'm sorry. I only have 100 yen.'",
            "expectedResponse": "すみません。100円しかありません。",
            "explanation": "しか (shika) + negative verb emphasizes that the amount is disappointingly small or insufficient."
        },
        {
            "grammarPoint": "〜くなる (Become - i-adjective)",
            "scenario": "You haven't seen your nephew in two years.",
            "chatHistory": [
                { "speaker": "A", "message": "久しぶりですね。" }
            ],
            "prompt": "Reply: 'You have become big!'",
            "expectedResponse": "大きくなりましたね！",
            "explanation": "Change an i-adjective (大きい) to 'く' and add なる to express a natural change in state."
        },
        {
            "grammarPoint": "〜になる (Become - Noun)",
            "scenario": "Chatting with a classmate before graduation.",
            "chatHistory": [
                { "speaker": "A", "message": "来年、国に帰ります。" }
            ],
            "prompt": "Reply: 'Will you become a teacher?'",
            "expectedResponse": "先生になりますか。",
            "explanation": "Noun + に + なる expresses a change in state or profession."
        },
        {
            "grammarPoint": "〜にする (Decide on)",
            "scenario": "A waiter is taking your order.",
            "chatHistory": [
                { "speaker": "A", "message": "デザートはいかがですか。" }
            ],
            "prompt": "Reply: 'I will decide on the ice cream.'",
            "expectedResponse": "アイスクリームにします。",
            "explanation": "Noun + にする expresses a conscious choice or decision, especially for ordering food."
        },
        {
            "grammarPoint": "〜くする (Make something - i-adjective)",
            "scenario": "You are a customer haggling at a flea market.",
            "chatHistory": [
                { "speaker": "A", "message": "これは3000円です。" }
            ],
            "prompt": "Reply: 'Please make it cheaper.'",
            "expectedResponse": "安くしてください。",
            "explanation": "To request an action that changes a state, change an i-adjective (安い) to 'く' and add する (します/してください)."
        },
        {
            "grammarPoint": "〜にする (Make something - na-adjective)",
            "scenario": "A teacher is trying to start the class, but the room is noisy.",
            "chatHistory": [
                { "speaker": "A", "message": "（学生たちが大きい声で話している）" }
            ],
            "prompt": "Reply: 'Please make the room quiet.'",
            "expectedResponse": "部屋を静かにしてください。",
            "explanation": "To request an action that changes a state for a na-adjective (静か), use にする (静かにしてください)."
        },
        {
            "grammarPoint": "Particle で (Tool / Means)",
            "scenario": "A classmate asks how you complete your assignments so quickly.",
            "chatHistory": [
                { "speaker": "A", "message": "いつもどうやってレポートを書きますか。" }
            ],
            "prompt": "Reply: 'I write my reports with a personal computer.'",
            "expectedResponse": "パソコンでレポートを書きます。",
            "explanation": "The particle で (de) marks the tool, instrument, or means used to perform an action."
        },
        {
            "grammarPoint": "Particle で (Language)",
            "scenario": "You are joining an international team meeting.",
            "chatHistory": [
                { "speaker": "A", "message": "今日の会議は日本語ですか。" }
            ],
            "prompt": "Reply: 'No, we will speak in English.'",
            "expectedResponse": "いいえ、英語で話します。",
            "explanation": "Languages are treated as tools for communication, so they take the particle で."
        },
        {
            "grammarPoint": "Particle に (Time of Action)",
            "scenario": "Planning a project session with your group.",
            "chatHistory": [
                { "speaker": "A", "message": "明日はいつ集まりましょうか。" }
            ],
            "prompt": "Reply: 'Let's meet at 8 o'clock.'",
            "expectedResponse": "8時に会いましょう。",
            "explanation": "The particle に (ni) is attached to specific, numerical times when an event occurs."
        },
        {
            "grammarPoint": "Particle を (Traversing Space)",
            "scenario": "A friend asks about your daily routine to stay healthy.",
            "chatHistory": [
                { "speaker": "A", "message": "休みの日は何をしますか。" }
            ],
            "prompt": "Reply: 'I walk in the park.'",
            "expectedResponse": "公園を歩きます。",
            "explanation": "When moving through, along, or across a space (like walking in a park or flying in the sky), the space takes the particle を (o)."
        },
        {
            "grammarPoint": "Particle に (Target of Action)",
            "scenario": "Your mom asks what you are doing on your phone.",
            "chatHistory": [
                { "speaker": "A", "message": "誰と話していますか。" }
            ],
            "prompt": "Reply: 'I am calling a friend.'",
            "expectedResponse": "友達に電話をかけています。",
            "explanation": "The particle に marks the target or recipient of an action, such as making a phone call to someone."
        },
        {
            "grammarPoint": "Particle に (Receiver of giving)",
            "scenario": "You are organizing documents at the university.",
            "chatHistory": [
                { "speaker": "A", "message": "そのレポートはどうしますか。" }
            ],
            "prompt": "Reply: 'I will give it to the teacher.'",
            "expectedResponse": "先生に渡します。",
            "explanation": "When handing over or giving something, the recipient is marked with に."
        },
        {
            "grammarPoint": "Particle から (Giver / Source)",
            "scenario": "A coworker notices your new high-tech watch.",
            "chatHistory": [
                { "speaker": "A", "message": "かっこいい時計ですね。" }
            ],
            "prompt": "Reply: 'I received it from an older brother.'",
            "expectedResponse": "兄から貰いました。",
            "explanation": "When receiving an item, the giver can be marked with から (kara) or に (ni)."
        },
        {
            "grammarPoint": "〜と言いました (Quotation)",
            "scenario": "Passing on a message from the manager.",
            "chatHistory": [
                { "speaker": "A", "message": "部長はどこですか。" }
            ],
            "prompt": "Reply: 'The manager said, \"I will go home early.\"'",
            "expectedResponse": "部長は「早く帰る」と言いました。",
            "explanation": "The particle と (to) is used to quote speech or thoughts before verbs like 言う (to say)."
        },
        {
            "grammarPoint": "Particle か (Or)",
            "scenario": "You are setting up a study session.",
            "chatHistory": [
                { "speaker": "A", "message": "いつ図書館に行きますか。" }
            ],
            "prompt": "Reply: 'I will go on Saturday or Sunday.'",
            "expectedResponse": "土曜日か日曜日に行きます。",
            "explanation": "The particle か (ka) placed between two nouns translates to 'or'."
        },
        {
            "grammarPoint": "ぐらい / くらい (Approximate Amount)",
            "scenario": "Organizing a university trip.",
            "chatHistory": [
                { "speaker": "A", "message": "旅行には何人来ますか。" }
            ],
            "prompt": "Reply: 'About 50 students will come.'",
            "expectedResponse": "学生が50人ぐらい来ます。",
            "explanation": "ぐらい (gurai) is attached to quantities or durations to mean 'about' or 'approximately'."
        },
        {
            "grammarPoint": "〜ています (Resultant State)",
            "scenario": "Trying to enter a closed laboratory.",
            "chatHistory": [
                { "speaker": "A", "message": "部屋に入りましょう。" }
            ],
            "prompt": "Reply: 'Ah, the door is closed.'",
            "expectedResponse": "あ、ドアが閉まっています。",
            "explanation": "Te-form of an intransitive verb + います expresses a state resulting from a completed action."
        },
        {
            "grammarPoint": "〜ています (Habitual Action)",
            "scenario": "A recruiter asks about your dedication to your field.",
            "chatHistory": [
                { "speaker": "A", "message": "プログラミングが好きですか。" }
            ],
            "prompt": "Reply: 'Yes, I study it every day.'",
            "expectedResponse": "はい、毎日勉強しています。",
            "explanation": "Te-form + います can be used to express an ongoing habit or routine."
        },
        {
            "grammarPoint": "A は B より (Comparison)",
            "scenario": "Comparing modern technology with a friend.",
            "chatHistory": [
                { "speaker": "A", "message": "映画とゲーム、どちらが好きですか。" }
            ],
            "prompt": "Reply: 'Games are more interesting than movies.'",
            "expectedResponse": "ゲームは映画より面白いです。",
            "explanation": "A は B より [Adjective] means 'A is more [Adjective] than B'."
        },
        {
            "grammarPoint": "A と B と どちらが (Comparing two things)",
            "scenario": "Planning the fastest route for a trip.",
            "chatHistory": [
                { "speaker": "A", "message": "大阪へ行きたいです。" }
            ],
            "prompt": "Reply: 'Which is faster, the bullet train or the airplane?'",
            "expectedResponse": "新幹線と飛行機とどちらが速いですか。",
            "explanation": "A と B と どちらが asks the listener to choose between two specific options."
        },
        {
            "grammarPoint": "〜の中で〜が一番 (Superlative)",
            "scenario": "Talking about your academic strengths.",
            "chatHistory": [
                { "speaker": "A", "message": "色々な科目を勉強していますね。" }
            ],
            "prompt": "Reply: 'Among my subjects, math is the most fun.'",
            "expectedResponse": "科目の中で数学が一番楽しいです。",
            "explanation": "Category の中で + Item が一番 + Adjective expresses the superlative ('the most...')."
        },
        {
            "grammarPoint": "どんな Noun (What kind of)",
            "scenario": "A friend wants to buy a new device.",
            "chatHistory": [
                { "speaker": "A", "message": "明日、パソコンを買います。" }
            ],
            "prompt": "Reply: 'What kind of personal computer do you want?'",
            "expectedResponse": "どんなパソコンが欲しいですか。",
            "explanation": "どんな (donna) must modify a noun directly to ask for a description or type."
        },
        {
            "grammarPoint": "どうして (Why)",
            "scenario": "A team member is working late again.",
            "chatHistory": [
                { "speaker": "A", "message": "今日も残業（ざんぎょう）します。" }
            ],
            "prompt": "Reply: 'Why are you so busy?'",
            "expectedResponse": "どうしてそんなに忙しいですか。",
            "explanation": "どうして (doushite) is the standard N5 interrogative for 'why'."
        },
        {
            "grammarPoint": "いくつ (How many)",
            "scenario": "Checking inventory in the server room.",
            "chatHistory": [
                { "speaker": "A", "message": "新しいモニターが届きました。" }
            ],
            "prompt": "Reply: 'How many monitors are there?'",
            "expectedResponse": "モニターがいくつありますか。",
            "explanation": "いくつ (ikutsu) asks 'how many' for general inanimate objects."
        },
        {
            "grammarPoint": "どれ (Which one)",
            "scenario": "You have many identical phones on a testing desk.",
            "chatHistory": [
                { "speaker": "A", "message": "そろそろ帰りましょうか。" }
            ],
            "prompt": "Reply: 'Which one is my smartphone?'",
            "expectedResponse": "私のスマートフォンはどれですか。",
            "explanation": "どれ (dore) asks 'which one' out of three or more options."
        },
        {
            "grammarPoint": "どの Noun (Which + Noun)",
            "scenario": "Searching for a specific manual in a library.",
            "chatHistory": [
                { "speaker": "A", "message": "その本を取ってください。" }
            ],
            "prompt": "Reply: 'Which book is it?'",
            "expectedResponse": "どの本ですか。",
            "explanation": "どの (dono) means 'which' but must be followed immediately by a noun."
        },
        {
            "grammarPoint": "だれ (Who)",
            "scenario": "You see a guest speaker arriving at the university.",
            "chatHistory": [
                { "speaker": "A", "message": "あそこに人がいますね。" }
            ],
            "prompt": "Reply: 'Who is that teacher?'",
            "expectedResponse": "あの先生は誰ですか。",
            "explanation": "誰 (dare) is the question word for 'who'."
        },
        {
            "grammarPoint": "なに / なん (What)",
            "scenario": "Your roommate sees you wiring a circuit board.",
            "chatHistory": [
                { "speaker": "A", "message": "とても真剣ですね。" }
            ],
            "prompt": "Reply: 'What are you making?'",
            "expectedResponse": "何を作っていますか。",
            "explanation": "何 (nani) is the question word for 'what'. It becomes 'nan' before certain particles."
        },
        {
            "grammarPoint": "いつ (When)",
            "scenario": "Working on a large development task.",
            "chatHistory": [
                { "speaker": "A", "message": "この仕事は大変ですね。" }
            ],
            "prompt": "Reply: 'When does the work end?'",
            "expectedResponse": "仕事はいつ終わりますか。",
            "explanation": "いつ (itsu) is the question word for 'when' and does not take the particle に."
        },
        {
            "grammarPoint": "どこ (Where)",
            "scenario": "Meeting an exchange student.",
            "chatHistory": [
                { "speaker": "A", "message": "私は学生です。" }
            ],
            "prompt": "Reply: 'Where is your university?'",
            "expectedResponse": "大学はどこですか。",
            "explanation": "どこ (doko) is the question word for 'where'."
        },
        {
            "grammarPoint": "どうやって (How / Method)",
            "scenario": "You show off a complex prototype you built.",
            "chatHistory": [
                { "speaker": "A", "message": "すごいですね、これは！" }
            ],
            "prompt": "Reply: 'How did you make this?'",
            "expectedResponse": "これはどうやって作りましたか。",
            "explanation": "どうやって (dou yatte) asks for the method, process, or route used to achieve something."
        },
        {
            "grammarPoint": "もう〜ました (Already)",
            "scenario": "A boss asks for an urgent status update.",
            "chatHistory": [
                { "speaker": "A", "message": "あのメール、急いでください。" }
            ],
            "prompt": "Reply: 'I already sent the email.'",
            "expectedResponse": "もうメールを送りました。",
            "explanation": "もう (mou) combined with a past tense verb means the action is already completed."
        },
        {
            "grammarPoint": "まだ〜ていません (Not yet)",
            "scenario": "Your friend wants to leave for lunch.",
            "chatHistory": [
                { "speaker": "A", "message": "お昼ご飯に行きましょう。" }
            ],
            "prompt": "Reply: 'I haven't finished my work yet.'",
            "expectedResponse": "まだ仕事が終わっていません。",
            "explanation": "まだ (mada) combined with te-form + いません means the action has not happened yet."
        },
        {
            "grammarPoint": "たくさん (A lot)",
            "scenario": "Declining an invitation to play a game.",
            "chatHistory": [
                { "speaker": "A", "message": "今日、一緒にゲームをしませんか。" }
            ],
            "prompt": "Reply: 'I'm sorry, I have a lot of homework.'",
            "expectedResponse": "すみません、宿題がたくさんあります。",
            "explanation": "たくさん (takusan) is an adverb meaning 'a lot' or 'many'."
        },
        {
            "grammarPoint": "すこし (A little)",
            "scenario": "A tourist asks if you can help them translate.",
            "chatHistory": [
                { "speaker": "A", "message": "英語がわかりますか。" }
            ],
            "prompt": "Reply: 'Yes, I understand a little.'",
            "expectedResponse": "はい、少しわかります。",
            "explanation": "少し (sukoshi) is an adverb meaning 'a little' or 'a few'."
        },
        {
            "grammarPoint": "ぜんぜん〜ない (Not at all)",
            "scenario": "Struggling with a very difficult assignment.",
            "chatHistory": [
                { "speaker": "A", "message": "この問題、わかりますか。" }
            ],
            "prompt": "Reply: 'No, I don't understand it at all.'",
            "expectedResponse": "いいえ、全然わかりません。",
            "explanation": "全然 (zenzen) must be paired with a negative verb to mean 'not at all'."
        },
        {
            "grammarPoint": "あまり〜ない (Not very)",
            "scenario": "Talking about your new tech gadget.",
            "chatHistory": [
                { "speaker": "A", "message": "そのカメラは高かったですか。" }
            ],
            "prompt": "Reply: 'No, it was not very expensive.'",
            "expectedResponse": "いいえ、あまり高くなかったです。",
            "explanation": "あまり (amari) paired with a negative form means 'not very' or 'not much'."
        },
        {
            "grammarPoint": "よく (Often / Well)",
            "scenario": "Chatting about weekend habits.",
            "chatHistory": [
                { "speaker": "A", "message": "休みの日は外に出ますか。" }
            ],
            "prompt": "Reply: 'Yes, I often go to the library.'",
            "expectedResponse": "はい、よく図書館へ行きます。",
            "explanation": "よく (yoku) before an action verb means 'often'. Before a state verb like わかる, it means 'well'."
        },
        {
            "grammarPoint": "だいたい (Mostly)",
            "scenario": "A teacher checks your progress on a reading task.",
            "chatHistory": [
                { "speaker": "A", "message": "この本、読み終わりましたか。" }
            ],
            "prompt": "Reply: 'Yes, I mostly read it.'",
            "expectedResponse": "はい、だいたい読みました。",
            "explanation": "だいたい (daitai) means 'mostly', 'almost', or 'roughly'."
        },
        {
            "grammarPoint": "いつも (Always)",
            "scenario": "A friend notices you are yawning.",
            "chatHistory": [
                { "speaker": "A", "message": "眠そうですね。" }
            ],
            "prompt": "Reply: 'Yes, I always sleep late.'",
            "expectedResponse": "はい、いつも遅く寝ます。",
            "explanation": "いつも (itsumo) is an adverb indicating an action happens 'always' or 'all the time'."
        },
        {
            "grammarPoint": "ときどき (Sometimes)",
            "scenario": "Discussing dietary habits.",
            "chatHistory": [
                { "speaker": "A", "message": "お茶が好きですか。" }
            ],
            "prompt": "Reply: 'Yes, but I sometimes drink coffee too.'",
            "expectedResponse": "はい、でも時々コーヒーも飲みます。",
            "explanation": "時々 (tokidoki) means 'sometimes' or 'occasionally'."
        },
        {
            "grammarPoint": "〜たいです (Desire)",
            "scenario": "Expressing your ambition to your professor.",
            "chatHistory": [
                { "speaker": "A", "message": "卒業したあと、どうしますか。" }
            ],
            "prompt": "Reply: 'I want to enter a famous university.'",
            "expectedResponse": "有名な大学に入りたいです。",
            "explanation": "Verb stem + たいです expresses the speaker's personal desire to do an action."
        },
        {
            "grammarPoint": "〜たくないです (Negative Desire)",
            "scenario": "You are exhausted after a long week of exams.",
            "chatHistory": [
                { "speaker": "A", "message": "今日、アルバイトに行きますか。" }
            ],
            "prompt": "Reply: 'I don't want to work today.'",
            "expectedResponse": "今日は働きたくないです。",
            "explanation": "Drop the 'い' from the たい form and add 'くないです' to say you don't want to do something."
        },
        {
            "grammarPoint": "Noun がほしいです (Want an object)",
            "scenario": "Looking at a broken backpack.",
            "chatHistory": [
                { "speaker": "A", "message": "カバンが古くなりましたね。" }
            ],
            "prompt": "Reply: 'Yes, I want a new bag.'",
            "expectedResponse": "はい、新しいカバンが欲しいです。",
            "explanation": "Use Noun + が + 欲しいです (hoshii desu) to state that you want a physical item."
        },
        {
            "grammarPoint": "Noun はほしくないです (Don't want an object)",
            "scenario": "A family member asks if you need an allowance.",
            "chatHistory": [
                { "speaker": "A", "message": "お小遣い（お金）をあげましょうか。" }
            ],
            "prompt": "Reply: 'No, I don't want money.'",
            "expectedResponse": "いいえ、お金は欲しくないです。",
            "explanation": "Change 欲しい to 欲しくないです to say you do not want an object. Using は emphasizes the negative."
        },
        {
            "grammarPoint": "Noun になる (Become noun)",
            "scenario": "Discussing your grand career plans.",
            "chatHistory": [
                { "speaker": "A", "message": "将来の夢は何ですか。" }
            ],
            "prompt": "Reply: 'I want to become an engineer.'",
            "expectedResponse": "エンジニアになりたいです。",
            "explanation": "Noun + に + なる means 'to become [Noun]'."
        },
        {
            "grammarPoint": "Adjective く/になる (Become adjective)",
            "scenario": "You open the curtains in the morning.",
            "chatHistory": [
                { "speaker": "A", "message": "朝ですね。" }
            ],
            "prompt": "Reply: 'The room became bright.'",
            "expectedResponse": "部屋が明るくなりました。",
            "explanation": "Change an i-adjective's 'い' to 'く' and add なる to express a natural change in state."
        },
        {
            "grammarPoint": "Adjective く/にする (Make adjective)",
            "scenario": "You are freezing in the office.",
            "chatHistory": [
                { "speaker": "A", "message": "エアコンをつけましょうか。" }
            ],
            "prompt": "Reply: 'Yes, please make the room warm.'",
            "expectedResponse": "はい、部屋を暖かくしてください。",
            "explanation": "Change an i-adjective's 'い' to 'く' and add する to request making something into that state."
        },
        {
            "grammarPoint": "〜たことがある (Experience)",
            "scenario": "Talking with an international student.",
            "chatHistory": [
                { "speaker": "A", "message": "インドはとてもいい国ですよ。" }
            ],
            "prompt": "Reply: 'I have gone to India before.'",
            "expectedResponse": "私はインドへ行ったことがあります。",
            "explanation": "Ta-form + ことがあります states a past life experience."
        },
        {
            "grammarPoint": "〜たことがない (No experience)",
            "scenario": "Watching a documentary about the arctic.",
            "chatHistory": [
                { "speaker": "A", "message": "雪はとても冷たいですね。" }
            ],
            "prompt": "Reply: 'I have never seen snow.'",
            "expectedResponse": "私は雪を見たことがありません。",
            "explanation": "Ta-form + ことがありません explicitly states that you have never had the experience."
        },
        {
            "grammarPoint": "〜たり〜たりする (Listing actions)",
            "scenario": "A friend asks how you spent your Sunday.",
            "chatHistory": [
                { "speaker": "A", "message": "昨日は何をしましたか。" }
            ],
            "prompt": "Reply: 'I did things like study and listen to music.'",
            "expectedResponse": "勉強したり、音楽を聞いたりしました。",
            "explanation": "Ta-form + り, Ta-form + りします lists representative actions among others."
        },
        {
            "grammarPoint": "〜ましょう (Let's)",
            "scenario": "You are leading a study group and the clock strikes 3.",
            "chatHistory": [
                { "speaker": "A", "message": "3時になりましたね。" }
            ],
            "prompt": "Reply: 'Let's start the meeting.'",
            "expectedResponse": "会議を始めましょう。",
            "explanation": "Verb stem + ましょう is an active proposition ('Let's do...')."
        },
        {
            "grammarPoint": "〜ましょうか (Shall I)",
            "scenario": "You notice your classmate is sweating.",
            "chatHistory": [
                { "speaker": "A", "message": "今日はとても暑いですね。" }
            ],
            "prompt": "Reply: 'Shall I open the window?'",
            "expectedResponse": "窓を開けましょうか。",
            "explanation": "Verb stem + ましょうか is used to politely offer to do something for the listener."
        },
        {
            "grammarPoint": "〜てから (After doing)",
            "scenario": "Your mom tells you to go to bed.",
            "chatHistory": [
                { "speaker": "A", "message": "もう遅いですよ。寝なさい。" }
            ],
            "prompt": "Reply: 'I will sleep after doing my homework.'",
            "expectedResponse": "宿題をしてから寝ます。",
            "explanation": "Te-form + から connects two actions sequentially ('After doing A, I will do B')."
        },
        {
            "grammarPoint": "〜ないでください (Please don't)",
            "scenario": "You are setting up a shared computer lab.",
            "chatHistory": [
                { "speaker": "A", "message": "このパソコンを使ってもいいですか。" }
            ],
            "prompt": "Reply: 'Yes, but please do not turn off the power.'",
            "expectedResponse": "はい、でも電源（でんげん）を消さないでください。",
            "explanation": "Nai-form base + ないでください makes a polite negative request."
        },
        {
            "grammarPoint": "Spatial Nouns (Noun の 前)",
            "scenario": "Setting a meeting spot for tomorrow.",
            "chatHistory": [
                { "speaker": "A", "message": "明日はどこで待ち合わせしますか。" }
            ],
            "prompt": "Reply: 'Let's meet in front of the station.'",
            "expectedResponse": "駅の前で会いましょう。",
            "explanation": "Noun + の + 前 (mae) designates the space 'in front of' something."
        },
        {
            "grammarPoint": "Particle は (Contrast)",
            "scenario": "A host offers you a plate of assorted food.",
            "chatHistory": [
                { "speaker": "A", "message": "たくさん食べてくださいね。" }
            ],
            "prompt": "Reply: 'I eat fish, but I do not eat meat.'",
            "expectedResponse": "魚は食べますが、肉は食べません。",
            "explanation": "The particle は (wa) can be used to contrast two different items or actions."
        },
        {
            "grammarPoint": "Particle が (New Information)",
            "scenario": "Waiting at a bus stop with a friend.",
            "chatHistory": [
                { "speaker": "A", "message": "なかなか来ませんね。" }
            ],
            "prompt": "Reply: 'Ah, a bus came!'",
            "expectedResponse": "あ、バスが来ましたよ。",
            "explanation": "The particle が (ga) is used to introduce new, objective information that the speaker just noticed."
        },
        {
            "grammarPoint": "Particle も (Inclusion)",
            "scenario": "Meeting a group of international students.",
            "chatHistory": [
                { "speaker": "A", "message": "私は学生です。" }
            ],
            "prompt": "Reply: 'Yamada is also a student.'",
            "expectedResponse": "山田さんも学生です。",
            "explanation": "The particle も (mo) replaces は to mean 'also' or 'too'."
        },
        {
            "grammarPoint": "Noun が好きです (Like)",
            "scenario": "Talking about hobbies in a self-introduction.",
            "chatHistory": [
                { "speaker": "A", "message": "休みの日は何をしますか。" }
            ],
            "prompt": "Reply: 'I like sports.'",
            "expectedResponse": "私はスポーツが好きです。",
            "explanation": "The object of the na-adjective 好き (suki) takes the particle が."
        },
        {
            "grammarPoint": "Noun が嫌いです (Dislike)",
            "scenario": "Ordering food at a cafe.",
            "chatHistory": [
                { "speaker": "A", "message": "ケーキはいかがですか。" }
            ],
            "prompt": "Reply: 'I am sorry, I dislike sweet things.'",
            "expectedResponse": "すみません、甘いものが嫌いです。",
            "explanation": "The object of the na-adjective 嫌い (kirai) takes the particle が."
        },
        {
            "grammarPoint": "Noun が上手です (Good at)",
            "scenario": "A friend tastes the dinner you made.",
            "chatHistory": [
                { "speaker": "A", "message": "これ、すごくおいしいですね！" }
            ],
            "prompt": "Reply: 'Thank you. I am good at cooking.'",
            "expectedResponse": "ありがとうございます。料理が上手です。",
            "explanation": "The skill you are good at (上手 - jouzu) is marked with the particle が."
        },
        {
            "grammarPoint": "Noun が下手です (Bad at)",
            "scenario": "Your friends are going to karaoke.",
            "chatHistory": [
                { "speaker": "A", "message": "一緒に歌いましょう！" }
            ],
            "prompt": "Reply: 'I am bad at singing.'",
            "expectedResponse": "私は歌が下手です。",
            "explanation": "The skill you are bad at (下手 - heta) is marked with the particle が."
        },
        {
            "grammarPoint": "Noun がわかります (Understand)",
            "scenario": "A tourist is asking for help on the street.",
            "chatHistory": [
                { "speaker": "A", "message": "Excuse me, do you speak French?" }
            ],
            "prompt": "Reply: 'Yes, I understand French.'",
            "expectedResponse": "はい、フランス語がわかります。",
            "explanation": "The verb わかる (wakaru) is intransitive in Japanese, so the thing understood takes が."
        },
        {
            "grammarPoint": "Noun があります (Possession - Inanimate)",
            "scenario": "Planning a road trip.",
            "chatHistory": [
                { "speaker": "A", "message": "どうやって海に行きましょうか。" }
            ],
            "prompt": "Reply: 'I have a car.'",
            "expectedResponse": "私は車があります。",
            "explanation": "あります (arimasu) is used to express possession of inanimate objects."
        },
        {
            "grammarPoint": "Noun がいます (Possession - Animate)",
            "scenario": "Talking about family.",
            "chatHistory": [
                { "speaker": "A", "message": "兄弟（きょうだい）はいますか。" }
            ],
            "prompt": "Reply: 'Yes, I have a younger sister.'",
            "expectedResponse": "はい、妹がいます。",
            "explanation": "います (imasu) is used to express the existence or 'possession' of living things like family members or pets."
        },
        {
            "grammarPoint": "Noun がほしいです (Want an object)",
            "scenario": "Looking at an electronics magazine.",
            "chatHistory": [
                { "speaker": "A", "message": "今の携帯電話、古いですね。" }
            ],
            "prompt": "Reply: 'Yes, I want a new smartphone.'",
            "expectedResponse": "はい、新しいスマートフォンが欲しいです。",
            "explanation": "To say you want a noun (an object), use 欲しい (hoshii) and mark the object with が."
        },
        {
            "grammarPoint": "〜たいです (Want to do)",
            "scenario": "Deciding on dinner plans.",
            "chatHistory": [
                { "speaker": "A", "message": "今日の夜は何がいいですか。" }
            ],
            "prompt": "Reply: 'I want to eat sushi.'",
            "expectedResponse": "お寿司が食べたいです。",
            "explanation": "Verb stem + たいです (tai desu) expresses the speaker's desire to do an action."
        },
        {
            "grammarPoint": "〜たくないです (Don't want to do)",
            "scenario": "At a party, someone offers you a beer.",
            "chatHistory": [
                { "speaker": "A", "message": "ビールはいかがですか。" }
            ],
            "prompt": "Reply: 'No thank you, I do not want to drink alcohol.'",
            "expectedResponse": "いいえ、お酒は飲みたくないです。",
            "explanation": "To make 〜たい negative, drop the 'い' and add 'くないです'."
        },
        {
            "grammarPoint": "〜ませんか (Invitation)",
            "scenario": "It is a beautiful Saturday afternoon.",
            "chatHistory": [
                { "speaker": "A", "message": "天気がいいですね。" }
            ],
            "prompt": "Reply: 'Won't you go to the park together?'",
            "expectedResponse": "一緒に公園に行きませんか。",
            "explanation": "Verb stem + ませんか is a polite way to invite someone."
        },
        {
            "grammarPoint": "〜ましょう (Let's)",
            "scenario": "You and your study partner are exhausted.",
            "chatHistory": [
                { "speaker": "A", "message": "3時間も勉強しましたね。" }
            ],
            "prompt": "Reply: 'Let's rest at the cafe.'",
            "expectedResponse": "カフェで休みましょう。",
            "explanation": "Verb stem + ましょう is used to proactively suggest doing something together ('Let's...')."
        },
        {
            "grammarPoint": "〜ましょうか (Shall I)",
            "scenario": "An elderly person is struggling with their luggage.",
            "chatHistory": [
                { "speaker": "A", "message": "（重そうにしている）" }
            ],
            "prompt": "Reply: 'Shall I carry the bag?'",
            "expectedResponse": "カバンを持ちましょうか。",
            "explanation": "Verb stem + ましょうか is used to politely offer assistance to someone else."
        },
        {
            "grammarPoint": "〜てください (Request)",
            "scenario": "Your teacher is explaining the lesson too fast.",
            "chatHistory": [
                { "speaker": "A", "message": "それでは次のページを開いてください。" }
            ],
            "prompt": "Reply: 'Teacher, please speak slowly.'",
            "expectedResponse": "先生、ゆっくり話してください。",
            "explanation": "Te-form + ください is a polite request asking someone to do an action."
        },
        {
            "grammarPoint": "〜ないでください (Negative request)",
            "scenario": "A classmate is packing their bag at the end of class.",
            "chatHistory": [
                { "speaker": "A", "message": "さようなら、また明日。" }
            ],
            "prompt": "Reply: 'Please do not forget the homework.'",
            "expectedResponse": "宿題を忘れないでください。",
            "explanation": "Nai-form base + ないでください makes a polite request for someone NOT to do something."
        },
        {
            "grammarPoint": "〜てもいいですか (Permission)",
            "scenario": "You enter a crowded waiting room and see one empty chair.",
            "chatHistory": [
                { "speaker": "A", "message": "（本を読んでいる）" }
            ],
            "prompt": "Reply: 'Excuse me, may I sit here?'",
            "expectedResponse": "すみません、ここに座ってもいいですか。",
            "explanation": "Te-form + もいいですか asks for permission."
        },
        {
            "grammarPoint": "〜てはいけません (Prohibition)",
            "scenario": "You are a guard at a restricted facility.",
            "chatHistory": [
                { "speaker": "A", "message": "あ、このドアの奥は何ですか。" }
            ],
            "prompt": "Reply: 'You must not enter here.'",
            "expectedResponse": "ここに入ってはいけません。",
            "explanation": "Te-form + はいけません expresses a strong prohibition or rule."
        },
        {
            "grammarPoint": "〜ています (Action in progress)",
            "scenario": "Your mom calls you while you are studying.",
            "chatHistory": [
                { "speaker": "A", "message": "もしもし、今何をしていますか。" }
            ],
            "prompt": "Reply: 'I am listening to music now.'",
            "expectedResponse": "今、音楽を聞いています。",
            "explanation": "Te-form + います expresses that an action is currently in progress."
        },
        {
            "grammarPoint": "〜ています (Resultant State)",
            "scenario": "Meeting a new coworker from abroad.",
            "chatHistory": [
                { "speaker": "A", "message": "私は大阪から来ました。" }
            ],
            "prompt": "Reply: 'I live in Tokyo.'",
            "expectedResponse": "私は東京に住んでいます。",
            "explanation": "Verbs like 住む (sumu - to live) use ています to show a continuous state resulting from an action."
        },
        {
            "grammarPoint": "〜ています (Habitual Action)",
            "scenario": "Catching up with an old high school friend.",
            "chatHistory": [
                { "speaker": "A", "message": "最近、どんな仕事をしていますか。" }
            ],
            "prompt": "Reply: 'I am working at a bank.'",
            "expectedResponse": "銀行で働いています。",
            "explanation": "Te-form + います can express a long-term habitual action or employment."
        },
        {
            "grammarPoint": "〜に行く (Purpose of motion)",
            "scenario": "You are grabbing your coat to head out.",
            "chatHistory": [
                { "speaker": "A", "message": "どこへ行きますか。" }
            ],
            "prompt": "Reply: 'I am going to the library to read a book.'",
            "expectedResponse": "図書館へ本を読みに行きます。",
            "explanation": "Verb stem (読み) + に行く expresses the purpose of traveling to a place."
        },
        {
            "grammarPoint": "〜から (Reason at the end)",
            "scenario": "You suddenly stand up and walk to the window.",
            "chatHistory": [
                { "speaker": "A", "message": "どうしましたか。" }
            ],
            "prompt": "Reply: 'Because it is cold, I will close the window.'",
            "expectedResponse": "寒いから、窓を閉めます。",
            "explanation": "Adding から (kara) to a clause establishes the reason or cause for the action."
        },
        {
            "grammarPoint": "〜が (But / Contrast)",
            "scenario": "Discussing yesterday's final exam.",
            "chatHistory": [
                { "speaker": "A", "message": "昨日のテストはどうでしたか。" }
            ],
            "prompt": "Reply: 'The test was difficult, but it was interesting.'",
            "expectedResponse": "テストは難しかったですが、面白かったです。",
            "explanation": "The particle が (ga) at the end of a clause means 'but', connecting two contrasting ideas."
        },
        {
            "grammarPoint": "Noun の Noun (Category)",
            "scenario": "You are holding a magazine at a bookstore.",
            "chatHistory": [
                { "speaker": "A", "message": "それは何ですか。" }
            ],
            "prompt": "Reply: 'This is a book about cars.'",
            "expectedResponse": "これは車の本です。",
            "explanation": "The particle の (no) can link nouns to describe the category or content of the second noun."
        },
        {
            "grammarPoint": "Adjective + Noun (I-adj)",
            "scenario": "Showing a friend your new clothes.",
            "chatHistory": [
                { "speaker": "A", "message": "デパートで何を買いましたか。" }
            ],
            "prompt": "Reply: 'I bought a blue shirt.'",
            "expectedResponse": "青いシャツを買いました。",
            "explanation": "I-adjectives directly modify the noun that follows them without any extra particles."
        },
        {
            "grammarPoint": "Adjective + Noun (Na-adj)",
            "scenario": "Talking about a pop star on TV.",
            "chatHistory": [
                { "speaker": "A", "message": "あの人は誰ですか。" }
            ],
            "prompt": "Reply: 'He is a famous person.'",
            "expectedResponse": "有名な人です。",
            "explanation": "Na-adjectives require 'な' to connect to and modify a noun."
        },
        {
            "grammarPoint": "A は B より (Comparison)",
            "scenario": "Discussing the best way to travel to the next city.",
            "chatHistory": [
                { "speaker": "A", "message": "どうやって行きましょうか。" }
            ],
            "prompt": "Reply: 'Trains are faster than buses.'",
            "expectedResponse": "電車はバスより速いです。",
            "explanation": "A は B より [Adjective] means 'A is more [Adjective] than B'."
        },
        {
            "grammarPoint": "A と B と どちらが (Question of comparison)",
            "scenario": "Shopping for groceries at the supermarket.",
            "chatHistory": [
                { "speaker": "A", "message": "今日の晩ご飯は何にしましょうか。" }
            ],
            "prompt": "Reply: 'Which is cheaper, meat or fish?'",
            "expectedResponse": "肉と魚とどちらが安いですか。",
            "explanation": "A と B と どちらが is the standard structure for asking the listener to compare two items."
        },
        {
            "grammarPoint": "〜の中で〜が一番 (Superlative)",
            "scenario": "Talking about favorite foods.",
            "chatHistory": [
                { "speaker": "A", "message": "甘いものが好きですか。" }
            ],
            "prompt": "Reply: 'Among fruits, strawberries are the best.'",
            "expectedResponse": "果物の中でいちごが一番好きです。",
            "explanation": "Category の中で + Item が一番 expresses the absolute best/most within a group."
        },
        {
            "grammarPoint": "どんな Noun (What kind of)",
            "scenario": "A friend mentions they are moving next month.",
            "chatHistory": [
                { "speaker": "A", "message": "来月、引っ越しをします。" }
            ],
            "prompt": "Reply: 'What kind of town is it?'",
            "expectedResponse": "どんな町ですか。",
            "explanation": "どんな (donna) means 'what kind of' and must immediately precede a noun."
        },
        {
            "grammarPoint": "どの Noun (Which)",
            "scenario": "It is raining and you are leaving the office with coworkers.",
            "chatHistory": [
                { "speaker": "A", "message": "たくさん傘がありますね。" }
            ],
            "prompt": "Reply: 'Which umbrella is yours?'",
            "expectedResponse": "どの傘があなたのですか。",
            "explanation": "どの (dono) means 'which' but must be followed by a noun to specify the item."
        },
        {
            "grammarPoint": "どれ (Which one)",
            "scenario": "Looking at the luggage rack on the train.",
            "chatHistory": [
                { "speaker": "A", "message": "あそこに荷物がありますね。" }
            ],
            "prompt": "Reply: 'Which one is your bag?'",
            "expectedResponse": "あなたのカバンはどれですか。",
            "explanation": "どれ (dore) acts as a pronoun meaning 'which one' out of three or more choices."
        },
        {
            "grammarPoint": "どうして (Why)",
            "scenario": "Your classmate walks in 30 minutes late.",
            "chatHistory": [
                { "speaker": "A", "message": "はあ、はあ... すみません。" }
            ],
            "prompt": "Reply: 'Why were you late?'",
            "expectedResponse": "どうして遅れましたか。",
            "explanation": "どうして (doushite) is the standard question word for 'why'."
        },
        {
            "grammarPoint": "どうやって (How / Method)",
            "scenario": "Inviting a friend to a new restaurant.",
            "chatHistory": [
                { "speaker": "A", "message": "そのお店、いいですね！" }
            ],
            "prompt": "Reply: 'How do we go to the station?'",
            "expectedResponse": "駅までどうやって行きますか。",
            "explanation": "どうやって (dou yatte) asks for the method, route, or process of doing something."
        },
        {
            "grammarPoint": "どのくらい (How long / duration)",
            "scenario": "Planning a day trip.",
            "chatHistory": [
                { "speaker": "A", "message": "明日はバスで行きましょう。" }
            ],
            "prompt": "Reply: 'How long does it take by bus?'",
            "expectedResponse": "バスでどのくらいかかりますか。",
            "explanation": "どのくらい (dono kurai) + かかります asks for the duration of time."
        },
        {
            "grammarPoint": "いつ (When)",
            "scenario": "Making conversation with a new acquaintance.",
            "chatHistory": [
                { "speaker": "A", "message": "私は夏が好きです。" }
            ],
            "prompt": "Reply: 'When is your birthday?'",
            "expectedResponse": "誕生日はいつですか。",
            "explanation": "いつ (itsu) is the question word for 'when' and does not require the particle に."
        },
        {
            "grammarPoint": "だれ (Who)",
            "scenario": "Looking at a magazine cover.",
            "chatHistory": [
                { "speaker": "A", "message": "この雑誌、買いました。" }
            ],
            "prompt": "Reply: 'Who is that person?'",
            "expectedResponse": "あの人は誰ですか。",
            "explanation": "誰 (dare) is the standard question word for 'who'."
        },
        {
            "grammarPoint": "なに (What)",
            "scenario": "A friend is holding a cup in the cafe.",
            "chatHistory": [
                { "speaker": "A", "message": "これ、おいしいですよ。" }
            ],
            "prompt": "Reply: 'What are you drinking?'",
            "expectedResponse": "何を飲んでいますか。",
            "explanation": "何 (nani) asks 'what'. As a direct object, it takes the particle を."
        },
        {
            "grammarPoint": "いくつ (How many)",
            "scenario": "Your mom returns from the grocery store.",
            "chatHistory": [
                { "speaker": "A", "message": "ただいま。果物を買ってきましたよ。" }
            ],
            "prompt": "Reply: 'How many apples did you buy?'",
            "expectedResponse": "りんごをいくつ買いましたか。",
            "explanation": "いくつ (ikutsu) is the question word for 'how many' general, inanimate items."
        },
        {
            "grammarPoint": "いくら (How much)",
            "scenario": "Shopping at a local market.",
            "chatHistory": [
                { "speaker": "A", "message": "いらっしゃいませ。きれいな時計ですよ。" }
            ],
            "prompt": "Reply: 'How much is this clock?'",
            "expectedResponse": "この時計はいくらですか。",
            "explanation": "いくら (ikura) is the question word to ask for the price of something."
        },
        {
            "grammarPoint": "だれか (Someone)",
            "scenario": "Peeking into a dark classroom after hours.",
            "chatHistory": [
                { "speaker": "A", "message": "電気が消えていますね。" }
            ],
            "prompt": "Reply: 'Is there someone in the classroom?'",
            "expectedResponse": "教室に誰かいますか。",
            "explanation": "誰か (dareka) means 'someone' or 'anyone'."
        },
        {
            "grammarPoint": "なにか (Something)",
            "scenario": "Sitting at a cafe after a long walk.",
            "chatHistory": [
                { "speaker": "A", "message": "とても疲れましたね。" }
            ],
            "prompt": "Reply: 'Do you want to drink something?'",
            "expectedResponse": "何か飲みたいですか。",
            "explanation": "何か (nanika) means 'something' or 'anything'."
        },
        {
            "grammarPoint": "どこか (Somewhere)",
            "scenario": "Talking about the long holiday.",
            "chatHistory": [
                { "speaker": "A", "message": "夏休みは楽しかったですか。" }
            ],
            "prompt": "Reply: 'Did you go anywhere?'",
            "expectedResponse": "どこかへ行きましたか。",
            "explanation": "どこか (dokoka) means 'somewhere' or 'anywhere'. It can combine with direction particles like へ."
        },
        {
            "grammarPoint": "だれも (No one)",
            "scenario": "A friend asks about the party you hosted.",
            "chatHistory": [
                { "speaker": "A", "message": "昨日のパーティーはどうでしたか。" }
            ],
            "prompt": "Reply: 'No one came.'",
            "expectedResponse": "誰も来ませんでした。",
            "explanation": "誰も (daremo) paired with a negative verb means 'no one' or 'nobody'."
        },
        {
            "grammarPoint": "なにも (Nothing)",
            "scenario": "Your mom asks what you ate for lunch.",
            "chatHistory": [
                { "speaker": "A", "message": "お昼ご飯はおいしかったですか。" }
            ],
            "prompt": "Reply: 'I didn't eat anything.'",
            "expectedResponse": "何も食べませんでした。",
            "explanation": "何も (nanimo) paired with a negative verb means 'nothing'."
        },
        {
            "grammarPoint": "どこへも (Nowhere)",
            "scenario": "A coworker asks about your weekend.",
            "chatHistory": [
                { "speaker": "A", "message": "週末はデパートに行きましたか。" }
            ],
            "prompt": "Reply: 'I didn't go anywhere.'",
            "expectedResponse": "どこへも行きませんでした。",
            "explanation": "どこへも (doko e mo) paired with a negative verb means 'nowhere'."
        },
        {
            "grammarPoint": "〜つもりです (Intention)",
            "scenario": "Discussing your long-term plans with a teacher.",
            "chatHistory": [
                { "speaker": "A", "message": "卒業したあとはどうしますか。" }
            ],
            "prompt": "Reply: 'I plan to go to Japan next year.'",
            "expectedResponse": "来年日本に行くつもりです。",
            "explanation": "Dictionary form + つもりです expresses a solid plan or intention."
        },
        {
            "grammarPoint": "〜ないつもりです (Intention - Negative)",
            "scenario": "A friend is going out drinking tonight.",
            "chatHistory": [
                { "speaker": "A", "message": "今日の夜、お酒を飲みに行きませんか。" }
            ],
            "prompt": "Reply: 'I am sorry. I do not intend to drink alcohol today.'",
            "expectedResponse": "すみません。今日はお酒を飲まないつもりです。",
            "explanation": "Nai-form + つもりです expresses a firm intention not to do an action."
        },
        {
            "grammarPoint": "〜と (Natural Consequence / Directions)",
            "scenario": "You are asking a local for directions to the station.",
            "chatHistory": [
                { "speaker": "A", "message": "道がわかりませんか。" }
            ],
            "prompt": "Reply: 'Yes. If I turn right here, is the station there?'",
            "expectedResponse": "はい。ここを右へ曲がると、駅がありますか。",
            "explanation": "Verb (dictionary form) + と indicates a natural consequence or direction ('If/When you do X, Y happens')."
        },
        {
            "grammarPoint": "〜のが好きです (Like doing)",
            "scenario": "Talking about weekends with a classmate.",
            "chatHistory": [
                { "speaker": "A", "message": "週末はいつも何をしていますか。" }
            ],
            "prompt": "Reply: 'I like taking pictures.'",
            "expectedResponse": "私は写真を撮るのが好きです。",
            "explanation": "Dictionary form + の nominalizes the verb, allowing you to use it with 好き (suki)."
        },
        {
            "grammarPoint": "〜のが嫌いです (Dislike doing)",
            "scenario": "Your roommate is planning the chores for the week.",
            "chatHistory": [
                { "speaker": "A", "message": "掃除と洗濯、どちらがいいですか。" }
            ],
            "prompt": "Reply: 'I dislike doing laundry.'",
            "expectedResponse": "私は洗濯をするのが嫌いです。",
            "explanation": "Dictionary form + の nominalizes the verb, allowing you to use it with 嫌い (kirai)."
        },
        {
            "grammarPoint": "〜のが上手です (Good at doing)",
            "scenario": "A host family praises your communication skills.",
            "chatHistory": [
                { "speaker": "A", "message": "日本語がとてもきれいですね。" }
            ],
            "prompt": "Reply: 'Thank you. I am good at speaking.'",
            "expectedResponse": "ありがとうございます。話すのが上手です。",
            "explanation": "Dictionary form + の nominalizes the verb, used with 上手 (jouzu) to express skill."
        },
        {
            "grammarPoint": "〜のが下手です (Bad at doing)",
            "scenario": "Someone asks you to write a message on a card.",
            "chatHistory": [
                { "speaker": "A", "message": "ここに漢字で名前を書いてください。" }
            ],
            "prompt": "Reply: 'I am bad at writing Kanji.'",
            "expectedResponse": "私は漢字を書くのが下手です。",
            "explanation": "Dictionary form + の nominalizes the verb, used with 下手 (heta) to humbly express a lack of skill."
        },
        {
            "grammarPoint": "〜から (Because - Reason)",
            "scenario": "You are putting on a thick jacket inside the house.",
            "chatHistory": [
                { "speaker": "A", "message": "どうしてコートを着ていますか。" }
            ],
            "prompt": "Reply: 'Because it is cold.'",
            "expectedResponse": "寒いからです。",
            "explanation": "Ending a sentence with から (kara) provides the direct reason for an action or state."
        },
        {
            "grammarPoint": "〜が (But - Conjunction)",
            "scenario": "Discussing a new restaurant in town.",
            "chatHistory": [
                { "speaker": "A", "message": "新しいお店の料理はおいしいですか。" }
            ],
            "prompt": "Reply: 'It is delicious, but it is expensive.'",
            "expectedResponse": "おいしいですが、高いです。",
            "explanation": "The particle が (ga) at the end of a clause connects two opposing ideas ('but')."
        },
        {
            "grammarPoint": "〜てから (After doing)",
            "scenario": "A coworker asks if you are leaving the office.",
            "chatHistory": [
                { "speaker": "A", "message": "もう帰りますか。" }
            ],
            "prompt": "Reply: 'I will go home after making a phone call.'",
            "expectedResponse": "電話をかけてから帰ります。",
            "explanation": "Te-form + から indicates a sequence of actions ('After I do A, I will do B')."
        },
        {
            "grammarPoint": "〜前に (Before doing)",
            "scenario": "A doctor is explaining how to take your medicine.",
            "chatHistory": [
                { "speaker": "A", "message": "この薬は1日3回です。" }
            ],
            "prompt": "Reply: 'Do I drink it before eating a meal?'",
            "expectedResponse": "ご飯を食べる前に飲みますか。",
            "explanation": "Dictionary form verb + 前に (mae ni) means 'before doing [action]'."
        },
        {
            "grammarPoint": "〜あとで (After doing - Noun)",
            "scenario": "Planning a meetup with a friend.",
            "chatHistory": [
                { "speaker": "A", "message": "いつ会いましょうか。" }
            ],
            "prompt": "Reply: 'Let's meet after work.'",
            "expectedResponse": "仕事のあとで会いましょう。",
            "explanation": "Noun + の + あとで means 'after [Noun]'."
        },
        {
            "grammarPoint": "〜に行く (Purpose of motion)",
            "scenario": "You are holding a letter at the front door.",
            "chatHistory": [
                { "speaker": "A", "message": "どこへ行きますか。" }
            ],
            "prompt": "Reply: 'I am going to the post office to send a letter.'",
            "expectedResponse": "郵便局へ手紙を出しに行きます。",
            "explanation": "Verb stem (出し) + に行く expresses the purpose of going somewhere."
        },
        {
            "grammarPoint": "〜たことがある (Experience)",
            "scenario": "Chatting about Japanese culture.",
            "chatHistory": [
                { "speaker": "A", "message": "着物（きもの）はきれいですね。" }
            ],
            "prompt": "Reply: 'Yes. I have worn a kimono once.'",
            "expectedResponse": "はい。私は一度着物を着たことがあります。",
            "explanation": "Ta-form + ことがあります expresses having the life experience of doing something."
        },
        {
            "grammarPoint": "〜たことがない (No experience)",
            "scenario": "A friend invites you to eat a traditional food.",
            "chatHistory": [
                { "speaker": "A", "message": "すき焼きを食べに行きませんか。" }
            ],
            "prompt": "Reply: 'I have never eaten sukiyaki.'",
            "expectedResponse": "私はすき焼きを食べたことがありません。",
            "explanation": "Ta-form + ことがありません explicitly denies having the experience."
        },
        {
            "grammarPoint": "〜たり、〜たりする (Listing actions)",
            "scenario": "A teacher asks what you do during long holidays.",
            "chatHistory": [
                { "speaker": "A", "message": "夏休みは何をしますか。" }
            ],
            "prompt": "Reply: 'I do things like travel and meet friends.'",
            "expectedResponse": "旅行したり、友達に会ったりします。",
            "explanation": "Ta-form + り is used to list representative actions without implying a strict sequence."
        },
        {
            "grammarPoint": "〜ている (Action in progress)",
            "scenario": "Looking outside at the sky.",
            "chatHistory": [
                { "speaker": "A", "message": "外はいい天気ですか。" }
            ],
            "prompt": "Reply: 'No, it is raining now.'",
            "expectedResponse": "いいえ、今雨が降っています。",
            "explanation": "Te-form + います expresses an action currently in progress."
        },
        {
            "grammarPoint": "〜ている (Resultant state)",
            "scenario": "A friend notices someone at the party.",
            "chatHistory": [
                { "speaker": "A", "message": "あの人は誰ですか。" }
            ],
            "prompt": "Reply: 'I do not know that person.'",
            "expectedResponse": "あの人を知りません。",
            "explanation": "The verb 知る (to know) uses the te-form state (知っている). Its negative is uniquely 知りません."
        },
        {
            "grammarPoint": "〜ている (Habit)",
            "scenario": "Talking about learning languages.",
            "chatHistory": [
                { "speaker": "A", "message": "英語が上手ですね。" }
            ],
            "prompt": "Reply: 'I am studying English every day.'",
            "expectedResponse": "毎日、英語を勉強しています。",
            "explanation": "Te-form + います can be used to describe a continuous habit or routine."
        },
        {
            "grammarPoint": "〜くなる (Become - i-adjective)",
            "scenario": "It is late autumn and you are wearing a sweater.",
            "chatHistory": [
                { "speaker": "A", "message": "風が強いですね。" }
            ],
            "prompt": "Reply: 'Yes, it has become cold.'",
            "expectedResponse": "はい、寒くなりました。",
            "explanation": "Drop the 'い' of an i-adjective and add 'くなる' to express a change in state."
        },
        {
            "grammarPoint": "〜になる (Become - na-adjective)",
            "scenario": "The noisy construction outside finally stops.",
            "chatHistory": [
                { "speaker": "A", "message": "やっと工事（こうじ）が終わりましたね。" }
            ],
            "prompt": "Reply: 'Yes, it has become quiet.'",
            "expectedResponse": "はい、静かになりました。",
            "explanation": "Drop the 'な' of a na-adjective and add 'になる' to express a change in state."
        },
        {
            "grammarPoint": "〜より〜のほうが (Comparison)",
            "scenario": "Discussing modes of transportation.",
            "chatHistory": [
                { "speaker": "A", "message": "バスと電車、どちらで帰りますか。" }
            ],
            "prompt": "Reply: 'Trains are more convenient than buses.'",
            "expectedResponse": "バスより電車の方が便利です。",
            "explanation": "A より B の方が sets up a comparison ('Compared to A, B is more...')."
        },
        {
            "grammarPoint": "〜と〜とどちらが (Asking for comparison)",
            "scenario": "A waiter asks for your drink order.",
            "chatHistory": [
                { "speaker": "A", "message": "飲み物はいかがですか。" }
            ],
            "prompt": "Reply: 'Which is colder, beer or juice?'",
            "expectedResponse": "ビールとジュースとどちらが冷たいですか。",
            "explanation": "A と B と どちらが asks the listener to compare two specific options."
        },
        {
            "grammarPoint": "〜のなかで〜がいちばん (Superlative)",
            "scenario": "Looking at an animal picture book.",
            "chatHistory": [
                { "speaker": "A", "message": "色々な動物がいますね。" }
            ],
            "prompt": "Reply: 'Among animals, dogs are the most cute.'",
            "expectedResponse": "動物の中で犬が一番かわいいです。",
            "explanation": "Category の中で + Item が一番 expresses the highest degree within a group."
        },
        {
            "grammarPoint": "だけ (Only - Affirmative)",
            "scenario": "You are organizing a study group.",
            "chatHistory": [
                { "speaker": "A", "message": "みんな来ますか。" }
            ],
            "prompt": "Reply: 'No, only Yamada will come.'",
            "expectedResponse": "いいえ、山田さんだけ来ます。",
            "explanation": "だけ (dake) means 'only' and is used with affirmative verbs."
        },
        {
            "grammarPoint": "しか〜ない (Only - Negative)",
            "scenario": "You are taking a difficult test and running out of time.",
            "chatHistory": [
                { "speaker": "A", "message": "テストはどうですか。" }
            ],
            "prompt": "Reply: 'I have only written half.'",
            "expectedResponse": "半分しか書いていません。",
            "explanation": "しか (shika) must be paired with a negative verb, emphasizing insufficiency."
        },
        {
            "grammarPoint": "どのくらい (How long)",
            "scenario": "You are sending a package at the post office.",
            "chatHistory": [
                { "speaker": "A", "message": "アメリカまでですね。かしこまりました。" }
            ],
            "prompt": "Reply: 'About how long will it take?'",
            "expectedResponse": "どのくらいかかりますか。",
            "explanation": "どのくらい (dono kurai) combined with かかる asks for the duration of time or travel."
        },
        {
            "grammarPoint": "どうやって (How to do)",
            "scenario": "You want to buy a ticket from a complex machine.",
            "chatHistory": [
                { "speaker": "A", "message": "この機械で切符を買いますよ。" }
            ],
            "prompt": "Reply: 'How do I buy it?'",
            "expectedResponse": "どうやって買いますか。",
            "explanation": "どうやって (dou yatte) asks for the method or process to do something."
        },
        {
            "grammarPoint": "どうして (Why)",
            "scenario": "A friend refuses to eat the cake you bought.",
            "chatHistory": [
                { "speaker": "A", "message": "私はケーキを食べません。" }
            ],
            "prompt": "Reply: 'Why don't you eat it?'",
            "expectedResponse": "どうして食べませんか。",
            "explanation": "どうして (doushite) is the standard question word for 'why'."
        },
        {
            "grammarPoint": "どんな (What kind)",
            "scenario": "You hear your friend got a new pet.",
            "chatHistory": [
                { "speaker": "A", "message": "昨日、犬を買いました！" }
            ],
            "prompt": "Reply: 'What kind of dog is it?'",
            "expectedResponse": "どんな犬ですか。",
            "explanation": "どんな (donna) means 'what kind of' and must modify a noun directly."
        },
        {
            "grammarPoint": "どの (Which noun)",
            "scenario": "Looking at a large parking lot.",
            "chatHistory": [
                { "speaker": "A", "message": "私の車で帰りましょう。" }
            ],
            "prompt": "Reply: 'Which car is yours?'",
            "expectedResponse": "どの車があなたのですか。",
            "explanation": "どの (dono) means 'which' and must be followed by a noun."
        },
        {
            "grammarPoint": "どれ (Which one)",
            "scenario": "You are offered three different types of tea.",
            "chatHistory": [
                { "speaker": "A", "message": "お茶が三つあります。" }
            ],
            "prompt": "Reply: 'Which one is delicious?'",
            "expectedResponse": "どれがおいしいですか。",
            "explanation": "どれ (dore) acts as a pronoun asking 'which one' out of three or more choices."
        },
        {
            "grammarPoint": "いつ (When)",
            "scenario": "A friend promises to return the money they borrowed.",
            "chatHistory": [
                { "speaker": "A", "message": "お金は必ず返します。" }
            ],
            "prompt": "Reply: 'When will you return it?'",
            "expectedResponse": "いつ返しますか。",
            "explanation": "いつ (itsu) is the question word for 'when' and does not take the particle に."
        },
        {
            "grammarPoint": "だれ (Who)",
            "scenario": "A delivery person arrives at the office.",
            "chatHistory": [
                { "speaker": "A", "message": "荷物のお届けです。" }
            ],
            "prompt": "Reply: 'Who is the baggage from?'",
            "expectedResponse": "誰からの荷物ですか。",
            "explanation": "誰 (dare) + から means 'from who(m)'."
        },
        {
            "grammarPoint": "なに (What)",
            "scenario": "You see a coworker carrying a large box.",
            "chatHistory": [
                { "speaker": "A", "message": "よいしょ、よいしょ..." }
            ],
            "prompt": "Reply: 'What is inside?'",
            "expectedResponse": "中に何がありますか。",
            "explanation": "何 (nani) is the question word for 'what'. It is used here to ask about inanimate contents."
        },
        {
            "grammarPoint": "どこ (Where)",
            "scenario": "You are traveling in a foreign country and need cash.",
            "chatHistory": [
                { "speaker": "A", "message": "いらっしゃいませ。道に迷いましたか。" }
            ],
            "prompt": "Reply: 'Excuse me, where is the bank?'",
            "expectedResponse": "すみません、銀行はどこですか。",
            "explanation": "どこ (doko) is the question word for 'where'."
        },
        {
            "grammarPoint": "いくつ (How many)",
            "scenario": "A coworker asks you to buy some stamps.",
            "chatHistory": [
                { "speaker": "A", "message": "郵便局に行きますか。切手をお願いします。" }
            ],
            "prompt": "Reply: 'How many stamps should I buy?'",
            "expectedResponse": "切手をいくつ買いましょうか。",
            "explanation": "いくつ (ikutsu) is used to ask for the quantity of general objects."
        },
        {
            "grammarPoint": "いくら (How much)",
            "scenario": "You are ordering tickets online.",
            "chatHistory": [
                { "speaker": "A", "message": "新幹線のチケットですね。" }
            ],
            "prompt": "Reply: 'How much is one ticket?'",
            "expectedResponse": "チケットは一枚いくらですか。",
            "explanation": "いくら (ikura) asks 'how much' regarding price."
        },
        {
            "grammarPoint": "だれか (Someone)",
            "scenario": "You are organizing a team for a project.",
            "chatHistory": [
                { "speaker": "A", "message": "この仕事は大変ですね。" }
            ],
            "prompt": "Reply: 'Yes. I want someone to help me.'",
            "expectedResponse": "はい。誰かに手伝ってほしいです。",
            "explanation": "誰か (dareka) means 'someone' or 'anyone'."
        },
        {
            "grammarPoint": "なにか (Something)",
            "scenario": "A friend comes over and looks around your room.",
            "chatHistory": [
                { "speaker": "A", "message": "いい部屋ですね。" }
            ],
            "prompt": "Reply: 'Do you want to drink something?'",
            "expectedResponse": "何か飲みたいですか。",
            "explanation": "何か (nanika) means 'something'. It can replace the object particle を."
        },
        {
            "grammarPoint": "どこかへ (Somewhere)",
            "scenario": "You finish a very difficult exam period.",
            "chatHistory": [
                { "speaker": "A", "message": "テストが終わりましたね！" }
            ],
            "prompt": "Reply: 'Let's go somewhere to play.'",
            "expectedResponse": "どこかへ遊びに行きましょう。",
            "explanation": "どこか (dokoka) means 'somewhere'. It takes direction particles like へ."
        },
        {
            "grammarPoint": "だれも (No one)",
            "scenario": "You ask a friend about the new student.",
            "chatHistory": [
                { "speaker": "A", "message": "あの新しい学生を知っていますか。" }
            ],
            "prompt": "Reply: 'No, no one knows him.'",
            "expectedResponse": "いいえ、誰も知りません。",
            "explanation": "誰も (daremo) paired with a negative verb means 'no one'."
        },
        {
            "grammarPoint": "なにも (Nothing)",
            "scenario": "A doctor asks if you ate before the blood test.",
            "chatHistory": [
                { "speaker": "A", "message": "今朝はご飯を食べましたか。" }
            ],
            "prompt": "Reply: 'No, I did not eat anything.'",
            "expectedResponse": "いいえ、何も食べませんでした。",
            "explanation": "何も (nanimo) paired with a negative verb means 'nothing'."
        },
        {
            "grammarPoint": "どこへも (Nowhere)",
            "scenario": "A friend asks about your very lazy Sunday.",
            "chatHistory": [
                { "speaker": "A", "message": "昨日は公園に行きましたか。" }
            ],
            "prompt": "Reply: 'No, I didn't go anywhere.'",
            "expectedResponse": "いいえ、どこへも行きませんでした。",
            "explanation": "どこへも (doko e mo) paired with a negative verb means 'nowhere'."
        },
        {
            "grammarPoint": "〜ましょうか (Offering help)",
            "scenario": "Your teacher is erasing a massive chalkboard.",
            "chatHistory": [
                { "speaker": "A", "message": "（黒板を消している）" }
            ],
            "prompt": "Reply: 'Teacher, shall I erase it?'",
            "expectedResponse": "先生、消しましょうか。",
            "explanation": "Verb stem + ましょうか is used to politely offer to do an action for someone."
        },
        {
            "grammarPoint": "〜ませんか (Invitation)",
            "scenario": "You see a coworker eating lunch alone at their desk.",
            "chatHistory": [
                { "speaker": "A", "message": "お弁当、おいしいですよ。" }
            ],
            "prompt": "Reply: 'Won't you eat together in the cafeteria?'",
            "expectedResponse": "食堂で一緒に食べませんか。",
            "explanation": "Verb stem + ませんか is a polite and friendly way to invite someone to do something."
        },
        {
            "grammarPoint": "〜ましょう (Let's)",
            "scenario": "The school bell rings, ending the lunch break.",
            "chatHistory": [
                { "speaker": "A", "message": "あ、チャイムが鳴りました。" }
            ],
            "prompt": "Reply: 'Let's return to the classroom.'",
            "expectedResponse": "教室に帰りましょう。",
            "explanation": "Verb stem + ましょう expresses an active proposition to do something together."
        },
        {
            "grammarPoint": "〜てください (Request)",
            "scenario": "You are giving a speech but the microphone is broken.",
            "chatHistory": [
                { "speaker": "A", "message": "声がよく聞こえません。" }
            ],
            "prompt": "Reply: 'Please listen carefully.'",
            "expectedResponse": "よく聞いてください。",
            "explanation": "Te-form + ください makes a polite request."
        },
        {
            "grammarPoint": "〜ないでください (Negative request)",
            "scenario": "You are showing a sensitive document to a coworker.",
            "chatHistory": [
                { "speaker": "A", "message": "これは何ですか。" }
            ],
            "prompt": "Reply: 'Please do not show this to anyone.'",
            "expectedResponse": "これを誰にも見せないでください。",
            "explanation": "Nai-form base + ないでください makes a polite request for someone not to do something."
        },
        {
            "grammarPoint": "〜てもいいですか (Permission)",
            "scenario": "You forgot your textbook and look at your friend's desk.",
            "chatHistory": [
                { "speaker": "A", "message": "授業が始まりますよ。" }
            ],
            "prompt": "Reply: 'May I look at your textbook?'",
            "expectedResponse": "教科書を見てもいいですか。",
            "explanation": "Te-form + もいいですか asks for permission to perform an action."
        },
        {
            "grammarPoint": "〜てはいけません (Prohibition)",
            "scenario": "A sign on a grassy area in the park.",
            "chatHistory": [
                { "speaker": "A", "message": "あそこにきれいな花があります。" }
            ],
            "prompt": "Reply: 'You must not enter there.'",
            "expectedResponse": "あそこに入ってはいけません。",
            "explanation": "Te-form + はいけません expresses a strong prohibition or rule."
        }
    ],

    // 12. Spatial Listening (Hotspots)
    spatial_listening: [
        {
            "scenario": "A woman is asking for directions to the post office on a map.",
            "question": "郵便局はどこですか。",
            "transcript": "女の人：すみません。郵便局はどこですか。\n男の人：郵便局ですか。あそこに銀行がありますね。\n女の人：はい。\n男の人：郵便局はあの銀行の隣です。銀行とスーパーの間です。\n女の人：わかりました。ありがとうございます。",
            "correctAnswer": "銀行とスーパーの間",
            "distractors": ["銀行の前", "スーパーの右", "銀行の中"],
            "explanation": "The man states '銀行とスーパーの間です' (It is between the bank and the supermarket)."
        },
        {
            "scenario": "A man is looking for a specific bank.",
            "question": "銀行はどこですか。",
            "transcript": "男の人：すみません、この近くに銀行はありますか。\n女の人：はい。あそこに大きい病院がありますね。\n男の人：はい。\n女の人：銀行はあの病院の隣です。右の隣ですよ。\n男の人：右ですね。ありがとうございます。",
            "correctAnswer": "病院の右の隣",
            "distractors": ["病院の左の隣", "病院の前", "病院の後ろ"],
            "explanation": "The woman specifies '右の隣ですよ' (It is the neighbor on the right)."
        },
        {
            "scenario": "A student is asking about the school hospital.",
            "question": "病院はどこですか。",
            "transcript": "男の学生：先生、学校の病院はどこですか。\n先生：病院は、駅の前にありますよ。\n男の学生：駅の前ですね。\n先生：ええ。駅を出て、すぐ前です。",
            "correctAnswer": "駅の前",
            "distractors": ["駅の後ろ", "駅の中", "学校の中"],
            "explanation": "The teacher clearly states '駅の前にありますよ' (It is in front of the station)."
        },
        {
            "scenario": "A man is looking for the library.",
            "question": "図書館はどこですか。",
            "transcript": "男の人：すみません、図書館に行きたいですが…。\n女の人：図書館は、あの公園の中にありますよ。\n男の人：公園の隣ですか。\n女の人：いいえ、公園の中です。",
            "correctAnswer": "公園の中",
            "distractors": ["公園の隣", "公園の前", "公園の後ろ"],
            "explanation": "The woman corrects the man to clarify it is '公園の中です' (Inside the park)."
        },
        {
            "scenario": "A woman is looking for a convenience store.",
            "question": "コンビニはどこですか。",
            "transcript": "女の人：すみません、コンビニはどこですか。\n男の人：コンビニは、あの花屋の隣です。\n女の人：花屋の右ですか、左ですか。\n男の人：左の隣です。",
            "correctAnswer": "花屋の左の隣",
            "distractors": ["花屋の右の隣", "花屋の中", "花屋の向かい"],
            "explanation": "The man specifies '左の隣です' (It is the neighbor on the left)."
        },
        {
            "scenario": "A man is meeting a friend at a restaurant.",
            "question": "レストランはどこですか。",
            "transcript": "男の人：もしもし、今デパートの前にいます。レストランはどこですか。\n女の人：デパートの前にいますか。レストランは、デパートの後ろですよ。\n男の人：後ろですね。わかりました。",
            "correctAnswer": "デパートの後ろ",
            "distractors": ["デパートの前", "デパートの中", "デパートの隣"],
            "explanation": "The woman says 'デパートの後ろですよ' (It is behind the department store)."
        },
        {
            "scenario": "A tourist is looking for their hotel.",
            "question": "ホテルはどこですか。",
            "transcript": "男の人：すみません。さくらホテルはどこですか。\n女の人：さくらホテルですか。この道をまっすぐ行くと、駅があります。\n男の人：はい。\n女の人：ホテルは駅の隣です。駅の右にありますよ。",
            "correctAnswer": "駅の右の隣",
            "distractors": ["駅の左の隣", "駅の前", "駅の中"],
            "explanation": "The woman explains 'ホテルは駅の隣です。駅の右にありますよ' (The hotel is next to the station. On the right)."
        },
        {
            "scenario": "A student is looking for the restroom.",
            "question": "トイレはどこですか。",
            "transcript": "女の学生：すみません、トイレはどこですか。\n男の学生：トイレは、1番の部屋と2番の部屋の間です。\n女の学生：1番と2番の間ですね。ありがとうございます。",
            "correctAnswer": "1番の部屋と2番の部屋の間",
            "distractors": ["1番の部屋の隣", "2番の部屋の中", "階段の後ろ"],
            "explanation": "The male student says '1番の部屋と2番の部屋の間です' (It is between room 1 and room 2)."
        },
        {
            "scenario": "A visitor is looking for the elevator.",
            "question": "エレベーターはどこですか。",
            "transcript": "男の人：すみません、エレベーターはどこですか。\n女の人：エレベーターは、この廊下（ろうか）の終わりです。\n男の人：廊下の終わりですね。右ですか、左ですか。\n女の人：右です。",
            "correctAnswer": "廊下の終わりの右",
            "distractors": ["廊下の終わりの左", "廊下の真ん中", "階段の隣"],
            "explanation": "The woman confirms '廊下の終わりです' (end of the hall) and '右です' (right)."
        },
        {
            "scenario": "A man is looking for the smoking area.",
            "question": "タバコを吸う場所はどこですか。",
            "transcript": "男の人：すみません、タバコを吸う場所はどこですか。\n女の人：外の階段の隣です。\n男の人：外ですか。わかりました。",
            "correctAnswer": "外の階段の隣",
            "distractors": ["中の階段の隣", "建物の前", "トイレの隣"],
            "explanation": "The woman directs him to '外の階段の隣です' (Next to the outside stairs)."
        },
        {
            "scenario": "A man is looking for his lost keys in the room.",
            "question": "鍵はどこにありましたか。",
            "transcript": "男の人：あれ、鍵がありません。机の上にありますか。\n女の人：机の上にはありませんよ。あ、雑誌の下にあります。\n男の人：雑誌の下ですね。ありました。ありがとう。",
            "correctAnswer": "雑誌の下",
            "distractors": ["机の上", "雑誌の上", "カバンの中"],
            "explanation": "The woman finds them '雑誌の下にあります' (under the magazine)."
        },
        {
            "scenario": "A woman is looking for her glasses.",
            "question": "めがねはどこにありますか。",
            "transcript": "女の人：私のめがね、知りませんか。テーブルの上に置きました。\n男の人：テーブルの上にはないですよ。あ、その黒いカバンの中にありますよ。\n女の人：本当だ。ありがとう。",
            "correctAnswer": "黒いカバンの中",
            "distractors": ["テーブルの上", "テーブルの下", "白いカバンの中"],
            "explanation": "The man spots them '黒いカバンの中にありますよ' (inside the black bag)."
        },
        {
            "scenario": "A coworker needs to borrow a pen.",
            "question": "ペンはどこにありますか。",
            "transcript": "男の人：すみません、ペンを貸してください。\n女の人：いいですよ。私の机のパソコンの隣にあります。どうぞ。\n男の人：パソコンの隣ですね。ありがとうございます。",
            "correctAnswer": "パソコンの隣",
            "distractors": ["パソコンの前", "机の下", "引き出しの中"],
            "explanation": "The woman says 'パソコンの隣にあります' (It is next to the computer)."
        },
        {
            "scenario": "A man is looking for a specific book.",
            "question": "本はどこにありますか。",
            "transcript": "男の人：あのう、日本語の本はどこですか。\n女の人：テレビとベッドの間にありますよ。\n男の人：テレビの下ですか。\n女の人：いいえ、間です。",
            "correctAnswer": "テレビとベッドの間",
            "distractors": ["テレビの下", "ベッドの上", "テレビの前"],
            "explanation": "The woman explicitly states 'テレビとベッドの間にありますよ' (between the TV and the bed)."
        },
        {
            "scenario": "A woman is looking for her watch.",
            "question": "時計はどこにありますか。",
            "transcript": "女の人：お父さん、私の時計はどこですか。\n男の人：机の引き出しの中に入れておいたよ。\n女の人：一番上の引き出しですか。\n男の人：そうだよ。",
            "correctAnswer": "机の一番上の引き出しの中",
            "distractors": ["机の下の引き出しの中", "机の上", "カバンの中"],
            "explanation": "The father confirms it is in the '一番上の引き出し' (top drawer)."
        },
        {
            "scenario": "A child is looking for the family cat.",
            "question": "猫はどこにいますか。",
            "transcript": "男の子：お母さん、猫のタマがいないよ。外かな。\nお母さん：外にはいないよ。あ、見て。椅子の下にいるよ。\n男の子：あ、本当だ。寝ているね。",
            "correctAnswer": "椅子の下",
            "distractors": ["外", "椅子の上", "ベッドの下"],
            "explanation": "The mother points out '椅子の下にいるよ' (It's under the chair)."
        },
        {
            "scenario": "A man is looking for his dog.",
            "question": "犬はどこにいますか。",
            "transcript": "男の人：ポチはどこかな。庭にいるかな。\n女の人：庭じゃないわよ。さっきドアの前にいたわよ。\n男の人：あ、いたいた。ドアの前で待っていたんだね。",
            "correctAnswer": "ドアの前",
            "distractors": ["庭の中", "ドアの後ろ", "家の中"],
            "explanation": "The woman says 'ドアの前にいたわよ' (It was in front of the door)."
        },
        {
            "scenario": "A woman wants to pack her camera.",
            "question": "カメラはどこにありますか。",
            "transcript": "女の人：旅行の準備をしましょう。カメラはどこかな。箱の中？\n男の人：いや、さっきベッドの上に置いたよ。\n女の人：ベッドの上ね。あったわ。",
            "correctAnswer": "ベッドの上",
            "distractors": ["箱の中", "机の上", "カバンの中"],
            "explanation": "The man states 'ベッドの上に置いたよ' (I placed it on the bed)."
        },
        {
            "scenario": "A man is looking for his shoes.",
            "question": "靴はどこにありますか。",
            "transcript": "男の人：僕の黒い靴、玄関（げんかん）にないよ。\n女の人：黒い靴？あ、その箱の中に入っているよ。\n男の人：この白い箱？\n女の人：そう。",
            "correctAnswer": "白い箱の中",
            "distractors": ["玄関に出ている", "黒い箱の中", "靴箱の上"],
            "explanation": "The woman confirms the shoes are in the white box ('その箱の中に入っているよ' referring to the 白い箱)."
        },
        {
            "scenario": "A woman is looking for her umbrella.",
            "question": "傘はどこにありますか。",
            "transcript": "女の人：雨が降っていますね。私の傘はどこですか。\n男の人：ドアの隣にありますよ。\n女の人：ドアの右ですか。\n男の人：いいえ、左です。",
            "correctAnswer": "ドアの左の隣",
            "distractors": ["ドアの右の隣", "ドアの前", "カバンの中"],
            "explanation": "The man corrects her: 'ドアの隣にありますよ' and '左です' (Next to the door, on the left)."
        },
        {
            "scenario": "A teacher is giving instructions on where to put flowers.",
            "question": "花はどこに置きますか。",
            "transcript": "先生：この花を教室に飾ります。\n学生：はい。窓の前に置きますか。\n先生：いいえ、真ん中のテーブルの上に置いてください。\n学生：わかりました。",
            "correctAnswer": "真ん中のテーブルの上",
            "distractors": ["窓の前", "窓の隣のテーブル", "机の下"],
            "explanation": "The teacher instructs '真ん中のテーブルの上に置いてください' (Please place it on the center table)."
        },
        {
            "scenario": "Two coworkers are organizing the office.",
            "question": "箱はどこに置きますか。",
            "transcript": "女の人：この大きい箱はどうしますか。机の上に置きますか。\n男の人：うーん、机の上は邪魔（じゃま）ですね。机の下に置いてください。\n女の人：はい、わかりました。",
            "correctAnswer": "机の下",
            "distractors": ["机の上", "机の隣", "部屋の外"],
            "explanation": "The man decides '机の下に置いてください' (Please put it under the desk)."
        },
        {
            "scenario": "Students are decorating the classroom.",
            "question": "ポスターはどこに貼りますか。",
            "transcript": "男の学生：このポスター、どこに貼りましょうか。黒板（こくばん）の横ですか。\n女の学生：いいえ、ドアの隣の壁（かべ）に貼ってください。\n男の学生：ドアの隣ですね。はい。",
            "correctAnswer": "ドアの隣の壁",
            "distractors": ["黒板の横", "窓の隣", "ドアの後ろ"],
            "explanation": "The female student says 'ドアの隣の壁に貼ってください' (Please put it on the wall next to the door)."
        },
        {
            "scenario": "A mother is telling her son where to put the trash can.",
            "question": "ゴミ箱はどこに置きますか。",
            "transcript": "お母さん：そのゴミ箱、ドアの前に置かないで。\n男の子：じゃあ、どこに置くの？\nお母さん：窓の下に置いてちょうだい。\n男の子：わかった。",
            "correctAnswer": "窓の下",
            "distractors": ["ドアの前", "机の下", "窓の隣"],
            "explanation": "The mother instructs '窓の下に置いてちょうだい' (Please place it under the window)."
        },
        {
            "scenario": "Two people are moving furniture.",
            "question": "テレビはどこに置きますか。",
            "transcript": "男の人：テレビはどこに置きますか。\n女の人：そうですね。あのソファの前に置いてください。\n男の人：窓の前ですか。\n女の人：いいえ、ソファの前です。",
            "correctAnswer": "ソファの前",
            "distractors": ["窓の前", "ソファの後ろ", "ソファの隣"],
            "explanation": "The woman clearly states 'ソファの前に置いてください' (Please place it in front of the sofa)."
        },
        {
            "scenario": "A librarian is instructing a helper.",
            "question": "本はどこに入れますか。",
            "transcript": "女の人：この新しい本、本棚（ほんだな）に入れますね。下の段（だん）ですか。\n男の人：いいえ、上の段に入れてください。\n女の人：はい、上の段ですね。",
            "correctAnswer": "本棚の上の段",
            "distractors": ["本棚の下の段", "本棚の真ん中の段", "机の上"],
            "explanation": "The man instructs '上の段に入れてください' (Please put it in the upper row/shelf)."
        },
        {
            "scenario": "A host is telling a guest where to put their shoes.",
            "question": "靴はどこに置きますか。",
            "transcript": "女の人：お邪魔します。靴はどこに脱ぎますか。\n男の人：玄関（げんかん）の左側に置いてください。\n女の人：右側ですか。\n男の人：いいえ、左です。",
            "correctAnswer": "玄関の左側",
            "distractors": ["玄関の右側", "玄関の真ん中", "外"],
            "explanation": "The man specifies '玄関の左側に置いてください' (Please put them on the left side of the entrance)."
        },
        {
            "scenario": "A couple is deciding where to hang a clock.",
            "question": "時計はどこにかけますか。",
            "transcript": "男の人：この時計、どこにかけようか。ドアの上はどう？\n女の人：ドアの上より、テレビの上の壁（かべ）がいいわ。\n男の人：そうだね。テレビの上にするよ。",
            "correctAnswer": "テレビの上の壁",
            "distractors": ["ドアの上", "テレビの隣", "窓の上"],
            "explanation": "They agree on the woman's suggestion: 'テレビの上の壁がいいわ' (The wall above the TV is good)."
        },
        {
            "scenario": "A teacher is telling a student where to put their bag.",
            "question": "カバンはどこに置きますか。",
            "transcript": "先生：テストを始めます。カバンは机の上に置かないでください。\n学生：机の下に置きますか。\n先生：いいえ、椅子（いす）の上に置いてください。",
            "correctAnswer": "椅子の上",
            "distractors": ["机の上", "机の下", "椅子の下"],
            "explanation": "The teacher instructs '椅子の上に置いてください' (Please place it on the chair)."
        },
        {
            "scenario": "Two office workers are arranging a desk.",
            "question": "カップはどこに置きますか。",
            "transcript": "男の人：お茶をいれましたよ。カップはどこに置きますか。\n女の人：ありがとう。パソコンの右の隣に置いてください。\n男の人：はい、パソコンの右ですね。",
            "correctAnswer": "パソコンの右の隣",
            "distractors": ["パソコンの左の隣", "パソコンの前", "本の上"],
            "explanation": "The woman says 'パソコンの右の隣に置いてください' (Please place it next to the computer, on the right)."
        },
        {
            "scenario": "Looking at a group photo.",
            "question": "田中さんはどの人ですか。",
            "transcript": "女の人：この写真、たくさんの人がいますね。田中さんはどの人ですか。\n男の人：田中さんは先生の隣にいますよ。\n女の人：先生の右ですか。\n男の人：いいえ、左です。",
            "correctAnswer": "先生の左の隣の人",
            "distractors": ["先生の右の隣の人", "先生の後ろの人", "先生の前の人"],
            "explanation": "The man specifies Tanaka is '先生の左の隣' (Next to the teacher, on the left)."
        },
        {
            "scenario": "Finding Yamada in a picture.",
            "question": "山田さんはどの人ですか。",
            "transcript": "男の人：この写真で、山田さんはどれですか。\n女の人：山田さんは帽子（ぼうし）をかぶっていますよ。\n男の人：帽子をかぶっている人は2人いますよ。椅子の前ですか、後ろですか。\n女の人：椅子の後ろにいる人です。",
            "correctAnswer": "帽子をかぶって、椅子の後ろにいる人",
            "distractors": ["帽子をかぶって、椅子の前にいる人", "帽子をかぶっていない人", "椅子に座っている人"],
            "explanation": "The correct person is wearing a hat (帽子をかぶっています) and is behind the chair (椅子の後ろにいる人)."
        },
        {
            "scenario": "Finding Suzuki in a picture.",
            "question": "鈴木さんはどの人ですか。",
            "transcript": "女の人：鈴木さんはどの人ですか。\n男の人：鈴木さんは、2人の女の人の間にいますよ。\n女の人：あ、女の人と男の人の間ですか。\n男の人：いいえ、女の人と女の人の間です。",
            "correctAnswer": "2人の女の人の間にいる人",
            "distractors": ["女の人と男の人の間にいる人", "2人の男の人の間にいる人", "一番右にいる人"],
            "explanation": "Suzuki is '2人の女の人の間にいます' (between two women)."
        },
        {
            "scenario": "Finding Kimura in a picture.",
            "question": "木村さんはどの人ですか。",
            "transcript": "男の人：木村さんはどこにいますか。\n女の人：木村さんは窓の前にいますよ。\n男の人：立っていますか。\n女の人：いいえ、座っています。",
            "correctAnswer": "窓の前に座っている人",
            "distractors": ["窓の前に立っている人", "ドアの前に座っている人", "ドアの前に立っている人"],
            "explanation": "Kimura is '窓の前にいます' (in front of the window) and '座っています' (sitting)."
        },
        {
            "scenario": "Finding Sato in a picture.",
            "question": "佐藤さんはどの人ですか。",
            "transcript": "女の人：佐藤さんはどの人ですか。\n男の人：佐藤さんはカバンを持っていますよ。\n女の人：右の人ですか、左の人ですか。\n男の人：左にいる人です。",
            "correctAnswer": "カバンを持って、左にいる人",
            "distractors": ["カバンを持って、右にいる人", "カバンを持っていない人", "真ん中にいる人"],
            "explanation": "Sato has a bag (カバンを持っています) and is on the left (左にいる人)."
        },
        {
            "scenario": "Finding Takahashi in a picture.",
            "question": "高橋さんはどの人ですか。",
            "transcript": "男の人：高橋さんはどれですか。\n女の人：木の下にいる人です。\n男の人：寝ている人ですか。\n女の人：いいえ、本を読んでいる人ですよ。",
            "correctAnswer": "木の下で本を読んでいる人",
            "distractors": ["木の下で寝ている人", "木の前で立っている人", "花の前で本を読んでいる人"],
            "explanation": "Takahashi is under the tree (木の下にいる人) and reading a book (本を読んでいる人)."
        },
        {
            "scenario": "Finding Ito in a picture.",
            "question": "伊藤さんはどの人ですか。",
            "transcript": "女の人：伊藤さんはどこにいますか。\n男の人：ドアの隣に立っている人です。\n女の人：ああ、あの黒い服の人ですね。\n男の人：そうです。",
            "correctAnswer": "ドアの隣に立っている黒い服の人",
            "distractors": ["窓の隣に立っている人", "ドアの隣に座っている人", "白い服の人"],
            "explanation": "Ito is 'ドアの隣に立っている人' (standing next to the door) and wearing black (黒い服)."
        },
        {
            "scenario": "Finding Watanabe in a picture.",
            "question": "渡辺さんはどの人ですか。",
            "transcript": "男の人：渡辺さんはどれですか。\n女の人：めがねをかけている人ですよ。\n男の人：めがねの人は2人います。右の人ですか。\n女の人：はい、右の人です。",
            "correctAnswer": "めがねをかけて、右にいる人",
            "distractors": ["めがねをかけて、左にいる人", "めがねをかけていない人", "真ん中の人"],
            "explanation": "Watanabe wears glasses (めがねをかけている人) and is on the right (右の人)."
        },
        {
            "scenario": "Finding Kobayashi in a picture.",
            "question": "小林さんはどの人ですか。",
            "transcript": "女の人：小林さんはどの人ですか。\n男の人：ソファに座っている人です。\n女の人：犬の隣の人ですか。\n男の人：いいえ、猫の隣にいる人ですよ。",
            "correctAnswer": "ソファに座って、猫の隣にいる人",
            "distractors": ["ソファに座って、犬の隣にいる人", "床に座っている人", "立っている人"],
            "explanation": "Kobayashi is sitting on the sofa (ソファに座っている) next to the cat (猫の隣にいる)."
        },
        {
            "scenario": "Finding Kato in a picture.",
            "question": "加藤さんはどの人ですか。",
            "transcript": "男の人：加藤さんはどの人ですか。\n女の人：加藤さんは机の後ろに立っていますよ。\n男の人：机の前じゃなくて、後ろですね。\n女の人：はい、そうです。",
            "correctAnswer": "机の後ろに立っている人",
            "distractors": ["机の前に立っている人", "机の後ろに座っている人", "机の前に座っている人"],
            "explanation": "Kato is standing behind the desk (机の後ろに立っています)."
        },
        {
            "scenario": "A driver is asking for navigation.",
            "question": "男の人はどこで曲がりますか。",
            "transcript": "男の人：駅に行きたいです。どこで曲がりますか。\n女の人：まっすぐ行って、最初の角（かど）を右に曲がってください。\n男の人：最初の角を右ですね。わかりました。",
            "correctAnswer": "最初の角を右に曲がる",
            "distractors": ["最初の角を左に曲がる", "2番目の角を右に曲がる", "曲がらないでまっすぐ行く"],
            "explanation": "The woman instructs '最初の角を右に曲がってください' (Turn right at the first corner)."
        },
        {
            "scenario": "A pedestrian is asking for directions.",
            "question": "女の人はどうやって行きますか。",
            "transcript": "女の人：すみません、病院はどこですか。\n男の人：ここをまっすぐ行って、信号（しんごう）を左に曲がってください。すぐありますよ。\n女の人：信号を左ですね。ありがとうございます。",
            "correctAnswer": "まっすぐ行って、信号を左に曲がる",
            "distractors": ["まっすぐ行って、信号を右に曲がる", "角を右に曲がる", "信号をまっすぐ行く"],
            "explanation": "The instruction is 'まっすぐ行って、信号を左に曲がってください' (Go straight and turn left at the traffic light)."
        },
        {
            "scenario": "Asking for directions to a restaurant.",
            "question": "レストランはどこですか。",
            "transcript": "男の人：レストランはどこですか。\n女の人：あそこに橋（はし）がありますね。あの橋を渡って、公園の隣です。\n男の人：橋を渡って、公園の隣ですね。",
            "correctAnswer": "橋を渡って、公園の隣",
            "distractors": ["橋を渡る前、公園の隣", "橋を渡って、公園の中", "橋を渡らないで、右"],
            "explanation": "The woman says '橋を渡って、公園の隣です' (Cross the bridge, next to the park)."
        },
        {
            "scenario": "A man is driving and asking for directions.",
            "question": "男の人はどこで曲がりますか。",
            "transcript": "男の人：どこで曲がりますか。次の信号ですか。\n女の人：いいえ、1番目じゃなくて、2番目の信号を右に曲がってください。\n男の人：2番目を右ですね。わかりました。",
            "correctAnswer": "2番目の信号を右に曲がる",
            "distractors": ["1番目の信号を右に曲がる", "2番目の信号を左に曲がる", "1番目の信号を左に曲がる"],
            "explanation": "The woman clearly states '2番目の信号を右に曲がってください' (Turn right at the second traffic light)."
        },
        {
            "scenario": "Looking for a bookstore down the street.",
            "question": "本屋はどこですか。",
            "transcript": "女の人：本屋はこの道をまっすぐですか。\n男の人：はい、まっすぐ行くと、左側にありますよ。\n女の人：右側ですか。\n男の人：いいえ、左です。",
            "correctAnswer": "まっすぐ行って、左側",
            "distractors": ["まっすぐ行って、右側", "右に曲がる", "左に曲がる"],
            "explanation": "The man says to go straight and it is on the left side ('まっすぐ行くと、左側にありますよ')."
        },
        {
            "scenario": "Finding a cafe near the station.",
            "question": "カフェはどこですか。",
            "transcript": "男の人：駅の近くのカフェに行きたいです。\n女の人：この道を渡ると、駅があります。カフェは駅のすぐ前ですよ。\n男の人：道を渡って、駅の前ですね。",
            "correctAnswer": "道を渡って、駅の前",
            "distractors": ["道を渡って、駅の後ろ", "道を渡らないで、駅の前", "駅の中"],
            "explanation": "The instruction is to cross the street, and it is right in front of the station ('道を渡ると... 駅のすぐ前ですよ')."
        },
        {
            "scenario": "Giving directions to the city hall.",
            "question": "市役所（しやくしょ）はどこですか。",
            "transcript": "女の人：市役所はどこですか。\n男の人：あそこに郵便局がありますね。あそこで左に曲がってください。右側にあります。\n女の人：郵便局を左に曲がって、右側ですね。",
            "correctAnswer": "郵便局を左に曲がって、右側",
            "distractors": ["郵便局を右に曲がって、左側", "郵便局をまっすぐ行く", "郵便局の隣"],
            "explanation": "The man says '郵便局...あそこで左に曲がってください。右側にあります' (Turn left at the post office, it's on the right side)."
        },
        {
            "scenario": "Finding a supermarket.",
            "question": "スーパーはどこですか。",
            "transcript": "男の人：スーパーはどこですか。\n女の人：最初の信号を右に曲がってください。銀行の隣にありますよ。\n男の人：信号を右に曲がって、銀行の隣ですね。",
            "correctAnswer": "最初の信号を右に曲がって、銀行の隣",
            "distractors": ["最初の信号を左に曲がって、銀行の隣", "信号をまっすぐ行って、銀行の隣", "銀行の前"],
            "explanation": "The woman instructs '最初の信号を右に曲がってください。銀行の隣にありますよ'."
        },
        {
            "scenario": "Looking for the flower shop.",
            "question": "花屋はどこですか。",
            "transcript": "女の人：花屋はどこにありますか。曲がりますか。\n男の人：いいえ、曲がらないで、まっすぐ行ってください。花屋は病院と本屋の間にあります。\n女の人：病院と本屋の間ですね。",
            "correctAnswer": "まっすぐ行って、病院と本屋の間",
            "distractors": ["曲がって、病院の隣", "まっすぐ行って、病院の中", "まっすぐ行って、本屋の前"],
            "explanation": "The man says '曲がらないで、まっすぐ行ってください。花屋は病院と本屋の間にあります' (Go straight without turning. It's between the hospital and the bookstore)."
        },
        {
            "scenario": "Directions to a parking lot.",
            "question": "駐車場（ちゅうしゃじょう）はどこですか。",
            "transcript": "男の人：駐車場はどこですか。\n女の人：あそこの角を左に曲がってください。コンビニの後ろにあります。\n男の人：角を左に曲がって、コンビニの後ろですね。",
            "correctAnswer": "角を左に曲がって、コンビニの後ろ",
            "distractors": ["角を右に曲がって、コンビニの前", "角を左に曲がって、コンビニの前", "コンビニの隣"],
            "explanation": "The woman instructs '角を左に曲がってください。コンビニの後ろにあります' (Turn left at the corner, it's behind the convenience store)."
        },
        {
            "scenario": "A new employee is asking where to sit.",
            "question": "男の人の席（せき）はどこですか。",
            "transcript": "男の人：すみません。私の席はどこですか。\n女の人：あなたの席は、山田さんと田中さんの間ですよ。\n男の人：山田さんの隣ですね。\n女の人：はい、そうです。",
            "correctAnswer": "山田さんと田中さんの間",
            "distractors": ["山田さんの右", "田中さんの前", "ドアの隣"],
            "explanation": "The woman specifies 'あなたの席は、山田さんと田中さんの間ですよ' (Your seat is between Yamada and Tanaka)."
        },
        {
            "scenario": "Looking for a parked car.",
            "question": "男の人の車はどれですか。",
            "transcript": "女の人：あなたの車はどこにありますか。\n男の人：私の車は白い車です。\n女の人：白い車は3台ありますよ。あの大きい車ですか。\n男の人：いいえ。あの黒い車の隣の車です。",
            "correctAnswer": "黒い車の隣の白い車",
            "distractors": ["一番大きい白い車", "赤い車の隣の白い車", "黒い車"],
            "explanation": "The man specifies 'あの黒い車の隣の車です' (It is the car next to that black car)."
        },
        {
            "scenario": "Tidying up the living room.",
            "question": "コップはどこに置きますか。",
            "transcript": "女の人：このコップ、洗いました。どこに置きますか。\n男の人：テーブルの上に置いてください。\n女の人：テレビの前ですか。\n男の人：いいえ、テレビの隣に置いてください。",
            "correctAnswer": "テーブルの上で、テレビの隣",
            "distractors": ["テーブルの上で、テレビの前", "テーブルの下", "テレビの上"],
            "explanation": "The man instructs 'テーブルの上に置いてください' and corrects her to 'テレビの隣に置いてください' (Next to the TV)."
        },
        {
            "scenario": "Finding the family dog.",
            "question": "犬はどこにいますか。",
            "transcript": "男の子：お母さん、ポチはどこ？庭？\nお母さん：庭にはいないわよ。\n男の子：あ、いた。テーブルの下で寝ているよ。\nお母さん：あら、本当ね。",
            "correctAnswer": "テーブルの下",
            "distractors": ["庭の中", "ソファの上", "ドアの前"],
            "explanation": "The boy finds the dog and says 'テーブルの下で寝ているよ' (It is sleeping under the table)."
        },
        {
            "scenario": "Asking for directions to the police box (Koban).",
            "question": "交番（こうばん）はどこですか。",
            "transcript": "男の人：すみません、交番はどこですか。\n女の人：交番ですか。ここをまっすぐ行って、2番目の角を左に曲がってください。\n男の人：2番目を左ですね。\n女の人：はい。右側にありますよ。",
            "correctAnswer": "2番目の角を左に曲がって、右側",
            "distractors": ["2番目の角を右に曲がって、左側", "1番目の角を左に曲がる", "まっすぐ行って、左側"],
            "explanation": "The woman instructs '2番目の角を左に曲がってください。右側にありますよ'."
        },
        {
            "scenario": "A student is placing their homework.",
            "question": "宿題はどこに置きますか。",
            "transcript": "先生：みなさん、宿題を出してください。\n学生：先生、宿題は先生の机の上に置きますか。\n先生：いいえ、ドアの前の箱の中に入れてください。\n学生：はい、わかりました。",
            "correctAnswer": "ドアの前の箱の中",
            "distractors": ["先生の机の上", "先生の机の中", "自分の机の上"],
            "explanation": "The teacher instructs 'ドアの前の箱の中に入れてください' (Please put it in the box in front of the door)."
        },
        {
            "scenario": "A woman is looking for her smartphone.",
            "question": "スマートフォンはどこにありましたか。",
            "transcript": "女の人：あ、スマートフォンがない。どこかな。カバンの中にはないわ。\n男の人：ベッドの上は？\n女の人：ないわ。\n男の人：あ、ソファの下に落ちているよ。",
            "correctAnswer": "ソファの下",
            "distractors": ["カバンの中", "ベッドの上", "テーブルの上"],
            "explanation": "The man spots it: 'あ、ソファの下に落ちているよ' (Ah, it has fallen under the sofa)."
        },
        {
            "scenario": "A man is looking for a pharmacy.",
            "question": "薬屋（くすりや）はどこですか。",
            "transcript": "男の人：すみません、この近くに薬屋はありますか。\n女の人：はい、ありますよ。あのデパートの隣です。\n男の人：デパートの右ですか、左ですか。\n女の人：右ですよ。",
            "correctAnswer": "デパートの右の隣",
            "distractors": ["デパートの左の隣", "デパートの中", "デパートの後ろ"],
            "explanation": "The woman states it is 'デパートの隣です' and clarifies '右ですよ' (On the right)."
        },
        {
            "scenario": "Organizing books in the classroom.",
            "question": "辞書（じしょ）はどこに置きますか。",
            "transcript": "女の学生：この辞書は、本棚（ほんだな）のどこに置きますか。\n男の学生：一番上の段（だん）に置いてください。\n女の学生：一番上ですね。わかりました。",
            "correctAnswer": "本棚の一番上の段",
            "distractors": ["本棚の一番下の段", "本棚の真ん中の段", "机の上"],
            "explanation": "The male student instructs '一番上の段に置いてください' (Please put it on the top shelf/row)."
        },
        {
            "scenario": "Looking for the staff room.",
            "question": "先生の部屋はどこですか。",
            "transcript": "男の学生：すみません、先生の部屋はどこですか。\n先生：階段（かいだん）を上がって、すぐ右の部屋ですよ。\n男の学生：階段を上がって、右ですね。ありがとうございます。",
            "correctAnswer": "階段を上がって、すぐ右の部屋",
            "distractors": ["階段を上がって、左の部屋", "階段の下の部屋", "階段を上がって、まっすぐの部屋"],
            "explanation": "The teacher explains '階段を上がって、すぐ右の部屋ですよ' (Go up the stairs, it's the room immediately on the right)."
        },
        {
            "scenario": "Finding a friend in a cafe.",
            "question": "男の人の友達はどこに座っていますか。",
            "transcript": "男の人：すみません、私の友達はどこですか。赤いシャツを着ています。\n店の人：赤いシャツの男の人ですね。窓の前に座っていますよ。\n男の人：窓の前ですね。ありがとうございます。",
            "correctAnswer": "窓の前の席",
            "distractors": ["ドアの前の席", "トイレの前の席", "部屋の真ん中の席"],
            "explanation": "The staff member says '窓の前に座っていますよ' (He is sitting in front of the window)."
        },
        {
            "scenario": "A child asks where to put their toys.",
            "question": "おもちゃはどこに入れますか。",
            "transcript": "お母さん：遊んだあと、おもちゃを片付けてね。\n男の子：うん。この赤い箱に入れるの？\nお母さん：いいえ、その白い箱に入れてね。\n男の子：わかった。",
            "correctAnswer": "白い箱の中",
            "distractors": ["赤い箱の中", "黒い箱の中", "机の下"],
            "explanation": "The mother instructs 'その白い箱に入れてね' (Put them in that white box)."
        },
        {
            "scenario": "A woman is looking for the meeting room.",
            "question": "会議室（かいぎしつ）はどこですか。",
            "transcript": "女の人：すみません、会議室はどこですか。\n男の人：会議室は、エレベーターの左です。\n女の人：エレベーターを降りて、左ですね。\n男の人：はい、そうです。",
            "correctAnswer": "エレベーターの左",
            "distractors": ["エレベーターの右", "エレベーターの前", "階段の左"],
            "explanation": "The man says '会議室は、エレベーターの左です' (The meeting room is to the left of the elevator)."
        },
        {
            "scenario": "Asking for directions to the supermarket.",
            "question": "スーパーはどこですか。",
            "transcript": "男の人：すみません、スーパーはどこですか。\n女の人：この道をまっすぐ行って、郵便局（ゆうびんきょく）の後ろにあります。\n男の人：郵便局の後ろですね。",
            "correctAnswer": "郵便局の後ろ",
            "distractors": ["郵便局の前", "郵便局の隣", "郵便局の中"],
            "explanation": "The woman directs him '郵便局の後ろにあります' (It is behind the post office)."
        },
        {
            "scenario": "Finding the sugar in the kitchen.",
            "question": "砂糖（さとう）はどこにありますか。",
            "transcript": "男の人：コーヒーを飲みます。砂糖はどこですか。\n女の人：冷蔵庫（れいぞうこ）の隣の棚（たな）にありますよ。\n男の人：冷蔵庫の中ですか。\n女の人：いいえ、隣の棚の上です。",
            "correctAnswer": "冷蔵庫の隣の棚の上",
            "distractors": ["冷蔵庫の中", "テーブルの上", "冷蔵庫の前"],
            "explanation": "The woman clarifies '隣の棚の上です' (On top of the shelf next to it)."
        },
        {
            "scenario": "Hanging a picture on the wall.",
            "question": "写真はどこに飾りますか。",
            "transcript": "女の人：この写真、どこに飾る？カレンダーの隣はどう？\n男の人：うーん、カレンダーの隣より、カレンダーの下がいいよ。\n女の人：わかった。じゃあ、そうするわ。",
            "correctAnswer": "カレンダーの下",
            "distractors": ["カレンダーの隣", "カレンダーの上", "ドアの隣"],
            "explanation": "They decide based on the man's suggestion: 'カレンダーの下がいいよ' (Under the calendar is good)."
        },
        {
            "scenario": "Finding the train station entrance.",
            "question": "駅の入り口はどこですか。",
            "transcript": "女の人：すみません。駅の入り口はどこですか。\n男の人：あそこに本屋がありますね。入り口は本屋とパン屋の間です。\n女の人：本屋とパン屋の間ですね。ありがとうございます。",
            "correctAnswer": "本屋とパン屋の間",
            "distractors": ["本屋の隣", "パン屋の後ろ", "本屋の前"],
            "explanation": "The man states '入り口は本屋とパン屋の間です' (The entrance is between the bookstore and the bakery)."
        },
        {
            "scenario": "Placing a flower vase.",
            "question": "花瓶（かびん）はどこに置きますか。",
            "transcript": "男の人：この花瓶、どこに置く？\n女の人：玄関（げんかん）の靴箱（くつばこ）の上に置いて。\n男の人：わかった。右と左、どっち？\n女の人：右に置いてね。",
            "correctAnswer": "靴箱の上の右",
            "distractors": ["靴箱の上の左", "靴箱の中", "玄関のドアの前"],
            "explanation": "The woman instructs '靴箱の上に置いて' and specifies '右に置いてね' (On the right)."
        },
        {
            "scenario": "A student is looking for an eraser.",
            "question": "消しゴムはどこにありますか。",
            "transcript": "男の学生：消しゴムがない。ノートの下にある？\n女の学生：ううん、ないよ。あ、椅子の下にあるよ。\n男の学生：本当だ。ありがとう。",
            "correctAnswer": "椅子の下",
            "distractors": ["ノートの下", "机の上", "ノートの上"],
            "explanation": "The female student spots it: 'あ、椅子の下にあるよ' (Ah, it is under the chair)."
        },
        {
            "scenario": "A man looking for his coat.",
            "question": "コートはどこにありますか。",
            "transcript": "男の人：僕のコート、知らない？\n女の人：ソファの上にあったわよ。\n男の人：ソファの上にはないよ。\n女の人：あ、ごめん。ベッドの上に置いたわ。",
            "correctAnswer": "ベッドの上",
            "distractors": ["ソファの上", "椅子の後ろ", "ドアの隣"],
            "explanation": "The woman corrects herself: 'あ、ごめん。ベッドの上に置いたわ' (Sorry. I put it on the bed)."
        },
        {
            "scenario": "Giving directions to a parking lot.",
            "question": "駐車場（ちゅうしゃじょう）はどこですか。",
            "transcript": "男の人：車はどこに止めますか。\n女の人：ビルの後ろに駐車場がありますよ。\n男の人：ビルの隣ですか。\n女の人：いいえ、ビルの後ろです。",
            "correctAnswer": "ビルの後ろ",
            "distractors": ["ビルの隣", "ビルの前", "ビルの中"],
            "explanation": "The woman explicitly states 'ビルの後ろです' (Behind the building)."
        },
        {
            "scenario": "Finding a friend in a photo.",
            "question": "山本さんはどの人ですか。",
            "transcript": "女の人：山本さんはどれですか。\n男の人：後ろに立っている人です。\n女の人：右の人ですか。\n男の人：いいえ、左の人ですよ。",
            "correctAnswer": "後ろに立って、左にいる人",
            "distractors": ["後ろに立って、右にいる人", "前に座っている人", "真ん中に立っている人"],
            "explanation": "Yamamoto is standing in the back (後ろに立っている人) on the left (左の人)."
        },
        {
            "scenario": "Looking for the trash can.",
            "question": "ゴミ箱はどこですか。",
            "transcript": "男の人：ゴミ箱はどこですか。\n女の人：ゴミ箱は、部屋の隅（すみ）にありますよ。\n男の人：ドアの隅ですか。\n女の人：いいえ、窓の隣の隅です。",
            "correctAnswer": "窓の隣の隅",
            "distractors": ["ドアの隣の隅", "部屋の真ん中", "机の下"],
            "explanation": "The woman clarifies '窓の隣の隅です' (The corner next to the window)."
        },
        {
            "scenario": "Placing a bicycle.",
            "question": "自転車はどこに置きますか。",
            "transcript": "男の学生：自転車は駅の前に置いてもいいですか。\n駅の人：駅の前はだめです。駅の後ろの駐輪場（ちゅうりんじょう）に置いてください。\n男の学生：わかりました。後ろですね。",
            "correctAnswer": "駅の後ろ",
            "distractors": ["駅の前", "駅の隣", "駅の中"],
            "explanation": "The station staff says '駅の前はだめです。駅の後ろの駐輪場に置いてください' (In front of the station is not allowed. Please put it in the parking area behind the station)."
        },
        {
            "scenario": "Finding a specific book on a shelf.",
            "question": "日本語の本はどこにありますか。",
            "transcript": "女の人：日本語の本はどこですか。\n男の人：本棚（ほんだな）の真ん中の段（だん）です。\n女の人：英語の本の隣ですか。\n男の人：いいえ、中国語の本の隣です。",
            "correctAnswer": "真ん中の段で、中国語の本の隣",
            "distractors": ["真ん中の段で、英語の本の隣", "一番上の段", "一番下の段"],
            "explanation": "It is in the middle row (真ん中の段) and next to the Chinese book (中国語の本の隣)."
        },
        {
            "scenario": "Where to put the wet umbrella.",
            "question": "傘はどこに置きますか。",
            "transcript": "男の人：雨が降っていました。傘はどこに置きますか。\n女の人：部屋の中に入れないでください。外の、ドアの右側に置いてください。\n男の人：外ですね。わかりました。",
            "correctAnswer": "外の、ドアの右側",
            "distractors": ["中の、ドアの右側", "外の、ドアの左側", "部屋の中"],
            "explanation": "The woman instructs '外の、ドアの右側に置いてください' (Outside, on the right side of the door)."
        },
        {
            "scenario": "A child asks where their hat is.",
            "question": "帽子（ぼうし）はどこにありますか。",
            "transcript": "男の子：お母さん、僕の赤い帽子はどこ？\nお母さん：カバンの中にない？\n男の子：ないよ。\nお母さん：あ、椅子の後ろに落ちているよ。",
            "correctAnswer": "椅子の後ろ",
            "distractors": ["カバンの中", "机の上", "ベッドの下"],
            "explanation": "The mother spots it: 'あ、椅子の後ろに落ちているよ' (Ah, it has fallen behind the chair)."
        },
        {
            "scenario": "A man is looking for a DVD.",
            "question": "DVDはどこにありますか。",
            "transcript": "男の人：昨日借りたDVDはどこですか。\n女の人：テレビの下の箱の中に入っていますよ。\n男の人：白い箱ですか。\n女の人：いいえ、黒い箱です。",
            "correctAnswer": "テレビの下の黒い箱の中",
            "distractors": ["テレビの下の白い箱の中", "テレビの上の黒い箱の中", "テレビの隣"],
            "explanation": "The DVD is 'テレビの下の箱の中' (In the box under the TV) and it is the '黒い箱' (black box)."
        },
        {
            "scenario": "Putting away groceries.",
            "question": "牛乳（ぎゅうにゅう）はどこに入れますか。",
            "transcript": "女の人：買ってきた牛乳、冷蔵庫（れいぞうこ）に入れるね。上の段でいい？\n男の人：ううん、上の段はいっぱいだから、下の段に入れて。\n女の人：わかった。",
            "correctAnswer": "冷蔵庫の下の段",
            "distractors": ["冷蔵庫の上の段", "冷蔵庫の真ん中の段", "テーブルの上"],
            "explanation": "The man says '上の段はいっぱいだから、下の段に入れて' (The top shelf is full, so put it in the bottom shelf)."
        },
        {
            "scenario": "Finding a taxi stand.",
            "question": "タクシー乗り場はどこですか。",
            "transcript": "男の人：すみません、タクシーに乗りたいです。\n女の人：タクシーですね。駅を出て、バス乗り場の右側にありますよ。\n男の人：バス乗り場の右ですね。ありがとうございます。",
            "correctAnswer": "バス乗り場の右側",
            "distractors": ["バス乗り場の左側", "駅の中", "バス乗り場の後ろ"],
            "explanation": "The woman directs him 'バス乗り場の右側にありますよ' (It is on the right side of the bus stop)."
        },
        {
            "scenario": "Finding a friend in a photo.",
            "question": "林さんはどの人ですか。",
            "transcript": "女の人：この写真の林さんはどれですか。\n男の人：林さんは、めがねをかけていますよ。\n女の人：立っている人ですか。\n男の人：いいえ、座っている人です。",
            "correctAnswer": "めがねをかけて、座っている人",
            "distractors": ["めがねをかけて、立っている人", "めがねをかけていないで、座っている人", "帽子をかぶっている人"],
            "explanation": "Hayashi wears glasses (めがねをかけています) and is sitting (座っている人)."
        },
        {
            "scenario": "Looking for the television remote.",
            "question": "リモコンはどこにありますか。",
            "transcript": "男の人：テレビのリモコンがないよ。\n女の人：テーブルの上にあるでしょう？\n男の人：ないよ。\n女の人：あ、新聞（しんぶん）の下に隠れているわ。",
            "correctAnswer": "新聞の下",
            "distractors": ["テーブルの上", "ソファの上", "テレビの前"],
            "explanation": "The woman finds it '新聞の下に隠れているわ' (It is hidden under the newspaper)."
        },
        {
            "scenario": "A teacher is telling students where to sit.",
            "question": "男の学生はどこに座りますか。",
            "transcript": "先生：テストを始めます。あなたは一番前の席に座ってください。\n男の学生：窓の隣の席ですか。\n先生：いいえ、ドアの隣の席です。",
            "correctAnswer": "一番前で、ドアの隣の席",
            "distractors": ["一番前で、窓の隣の席", "一番後ろの席", "真ん中の席"],
            "explanation": "The teacher says '一番前の席に座ってください' and specifies 'ドアの隣の席です'."
        },
        {
            "scenario": "Finding the hospital entrance.",
            "question": "病院の入り口はどこですか。",
            "transcript": "女の人：すみません、病院の入り口はどこですか。\n男の人：まっすぐ行って、花屋を右に曲がります。\n女の人：花屋を右ですね。\n男の人：はい、そうすると左側にあります。",
            "correctAnswer": "花屋を右に曲がって、左側",
            "distractors": ["花屋を右に曲がって、右側", "花屋を左に曲がって、左側", "まっすぐ行って、右側"],
            "explanation": "The man instructs '花屋を右に曲がります...そうすると左側にあります'."
        },
        {
            "scenario": "Looking for a cake shop.",
            "question": "ケーキ屋はどこですか。",
            "transcript": "男の人：おいしいケーキ屋はどこですか。\n女の人：駅の前の信号を渡って、まっすぐ行きます。銀行と郵便局の間にありますよ。\n男の人：銀行と郵便局の間ですね。",
            "correctAnswer": "信号を渡ってまっすぐ行き、銀行と郵便局の間",
            "distractors": ["信号を曲がって、銀行の隣", "信号の前の郵便局の隣", "駅の中"],
            "explanation": "The woman explains '信号を渡って、まっすぐ行きます。銀行と郵便局の間にありますよ'."
        },
        {
            "scenario": "A woman is looking for her ticket.",
            "question": "切符（きっぷ）はどこにありましたか。",
            "transcript": "女の人：あ、電車の切符がない。\n男の人：ポケットの中は？\n女の人：ないわ。\n男の人：あ、財布（さいふ）の下にあるよ。机の上に。\n女の人：本当だ。よかった。",
            "correctAnswer": "机の上の、財布の下",
            "distractors": ["ポケットの中", "カバンの中", "財布の中"],
            "explanation": "The man spots it: 'あ、財布の下にあるよ。机の上に。' (Ah, it's under the wallet. On the desk)."
        },
        {
            "scenario": "Organizing shoes in the entrance.",
            "question": "男の人の靴はどこに入れますか。",
            "transcript": "女の人：あなたの靴、靴箱（くつばこ）に入れますね。一番下でいいですか。\n男の人：一番下は汚いから、下から2番目に入れてください。\n女の人：下から2番目ですね。わかりました。",
            "correctAnswer": "下から2番目",
            "distractors": ["一番下", "一番上", "上から2番目"],
            "explanation": "The man says '一番下は汚いから、下から2番目に入れてください' (The bottom is dirty, so put them in the second one from the bottom)."
        },
        {
            "scenario": "Finding a meeting room in a hotel.",
            "question": "会議室はどこですか。",
            "transcript": "女の人：すみません。会議室はどこですか。\nホテルの人：会議室は2階です。階段を上がって、左に曲がってください。一番奥（おく）の部屋です。\n女の人：左に曲がって、一番奥ですね。ありがとうございます。",
            "correctAnswer": "2階で、左に曲がって一番奥の部屋",
            "distractors": ["2階で、右に曲がって一番奥の部屋", "1階の奥の部屋", "2階で、階段のすぐ隣の部屋"],
            "explanation": "The staff member says '2階です。階段を上がって、左に曲がってください。一番奥の部屋です' (2nd floor, up the stairs, turn left, the room at the very end)."
        },
        {
            "scenario": "Putting away a broom.",
            "question": "ほうき（掃除の道具）はどこに置きますか。",
            "transcript": "男の学生：掃除が終わりました。このほうき、どこに置きますか。\n女の学生：ロッカーの隣に置いてください。\n男の学生：右ですか、左ですか。\n女の学生：右です。",
            "correctAnswer": "ロッカーの右の隣",
            "distractors": ["ロッカーの左の隣", "ロッカーの中", "ドアの後ろ"],
            "explanation": "The female student says 'ロッカーの隣に置いてください' and specifies '右です' (On the right)."
        },
        {
            "scenario": "Looking for the salt.",
            "question": "塩（しお）はどこですか。",
            "transcript": "男の人：料理に塩を入れたいです。どこですか。\n女の人：ガスコンロの下の引き出しに入っていますよ。\n男の人：ここには鍋（なべ）しかありませんよ。\n女の人：あ、ごめんなさい。ガスコンロの上の棚でした。",
            "correctAnswer": "ガスコンロの上の棚",
            "distractors": ["ガスコンロの下の引き出し", "冷蔵庫の中", "テーブルの上"],
            "explanation": "The woman corrects herself: 'あ、ごめんなさい。ガスコンロの上の棚でした' (Sorry. It was the shelf above the stove)."
        },
        {
            "scenario": "A child asks where their jacket is.",
            "question": "上着（うわぎ）はどこにありますか。",
            "transcript": "男の子：僕の上着、どこ？\nお母さん：洗濯機（せんたくき）の隣に置いてあるわよ。\n男の子：ないよ。\nお母さん：あ、ドアの後ろにかけてあったわ。",
            "correctAnswer": "ドアの後ろ",
            "distractors": ["洗濯機の隣", "ソファの上", "クローゼットの中"],
            "explanation": "The mother realizes her mistake: 'あ、ドアの後ろにかけてあったわ' (Ah, it was hanging behind the door)."
        },
        {
            "scenario": "Giving directions to a bakery.",
            "question": "パン屋はどこですか。",
            "transcript": "男の人：おいしいパン屋はどこですか。\n女の人：あの橋（はし）を渡って、最初の角を右に曲がってください。そうすると左側にあります。\n男の人：橋を渡って、右に曲がって、左側ですね。",
            "correctAnswer": "橋を渡って右に曲がり、左側",
            "distractors": ["橋を渡って左に曲がり、右側", "橋を渡らないで右に曲がる", "まっすぐ行って左側"],
            "explanation": "The woman explains 'あの橋を渡って、最初の角を右に曲がってください。そうすると左側にあります'."
        },
        {
            "scenario": "Finding an umbrella stand.",
            "question": "傘立て（傘を入れるところ）はどこですか。",
            "transcript": "男の人：すみません。濡れた傘はどこに置きますか。\n女の人：外の、入り口の左側にありますよ。\n男の人：入り口の右側ですね。\n女の人：いいえ、左側です。",
            "correctAnswer": "外の入り口の左側",
            "distractors": ["外の入り口の右側", "中の入り口の左側", "中の入り口の右側"],
            "explanation": "The woman corrects him: '外の、入り口の左側にありますよ' (Outside, on the left side of the entrance)."
        },
        {
            "scenario": "A coworker asks where the printer is.",
            "question": "コピー機はどこですか。",
            "transcript": "男の人：この部屋にコピー機はありますか。\n女の人：はい。あの窓の隣にありますよ。\n男の人：あそこはパソコンですよ。\n女の人：あ、ごめんなさい。コピー機はドアの隣です。",
            "correctAnswer": "ドアの隣",
            "distractors": ["窓の隣", "パソコンの隣", "部屋の外"],
            "explanation": "The woman corrects herself: 'あ、ごめんなさい。コピー機はドアの隣です' (Sorry, the printer is next to the door)."
        },
        {
            "scenario": "Finding a friend at the park.",
            "question": "男の人の友達はどこにいますか。",
            "transcript": "男の人：もしもし。今、公園に着きました。どこにいますか。\n女の人：私は噴水（ふんすい・水が出るところ）の前にいますよ。\n男の人：ベンチに座っていますか。\n女の人：いいえ、立って待っています。",
            "correctAnswer": "噴水の前に立っている",
            "distractors": ["噴水の前に座っている", "ベンチに座っている", "ドアの前に立っている"],
            "explanation": "The woman says '噴水の前にいますよ' (I am in front of the fountain) and '立って待っています' (I am standing and waiting)."
        },
        {
            "scenario": "Asking for directions to the gym.",
            "question": "スポーツジムはどこですか。",
            "transcript": "女の人：すみません。スポーツジムはどこですか。\n男の人：この道をまっすぐ行くと、郵便局があります。ジムは郵便局の向かいです。\n女の人：郵便局の隣ですか。\n男の人：いいえ、道を挟んで（はさんで）向かいですよ。",
            "correctAnswer": "郵便局の向かい",
            "distractors": ["郵便局の隣", "郵便局の後ろ", "郵便局の中"],
            "explanation": "The man specifies 'ジムは郵便局の向かいです' (The gym is across from the post office)."
        },
        {
            "scenario": "Looking for the fitting room in a store.",
            "question": "服を着る部屋（試着室）はどこですか。",
            "transcript": "女の人：すみません。この服を着てもいいですか。\n店の人：はい。着る部屋は、あちらのレジの後ろにあります。\n女の人：レジの後ろですね。ありがとうございます。",
            "correctAnswer": "レジの後ろ",
            "distractors": ["レジの隣", "レジの前", "入り口の隣"],
            "explanation": "The staff member says '着る部屋は、あちらのレジの後ろにあります' (The fitting room is behind the register over there)."
        },
        {
            "scenario": "Finding a friend in a photo.",
            "question": "鈴木さんはどの人ですか。",
            "transcript": "女の人：この写真の鈴木さんはどの人ですか。\n男の人：一番背が高い人ですよ。\n女の人：一番右にいる人ですか。\n男の人：いいえ、真ん中にいる人です。",
            "correctAnswer": "一番背が高くて、真ん中にいる人",
            "distractors": ["一番背が高くて、右にいる人", "一番背が低くて、真ん中にいる人", "左にいる人"],
            "explanation": "Suzuki is the tallest person (一番背が高い人) and is in the middle (真ん中にいる人)."
        },
        {
            "scenario": "A student looks for their notebook.",
            "question": "ノートはどこにありましたか。",
            "transcript": "男の学生：僕のノートがない。机の中に入れたのに。\n女の学生：あれ、先生の机の上にありますよ。\n男の学生：えっ、あ、本当だ。忘れていた。",
            "correctAnswer": "先生の机の上",
            "distractors": ["自分の机の中", "カバンの中", "椅子の下"],
            "explanation": "The female student spots it: 'あれ、先生の机の上にありますよ' (Oh, it's on the teacher's desk)."
        },
        {
            "scenario": "Placing a sign outside a shop.",
            "question": "看板（かんばん）はどこに置きますか。",
            "transcript": "男の人：この看板、外に置きますね。ドアの右でいいですか。\n女の人：右は自転車があるから、左に置いてください。\n男の人：わかりました。左ですね。",
            "correctAnswer": "外のドアの左",
            "distractors": ["外のドアの右", "中のドアの左", "中のドアの右"],
            "explanation": "The woman instructs '右は自転車があるから、左に置いてください' (There are bicycles on the right, so please place it on the left)."
        },
        {
            "scenario": "A student is asking where to put a dictionary.",
            "question": "辞書はどこに置きますか。",
            "transcript": "男の学生：先生、この辞書はどうしますか。\n先生：本棚（ほんだな）に入れてください。一番上の段（だん）です。\n男の学生：英語の本の隣ですか。\n先生：いいえ、日本語の本の隣に置いてください。",
            "correctAnswer": "本棚の一番上の段で、日本語の本の隣",
            "distractors": ["本棚の一番上の段で、英語の本の隣", "本棚の一番下の段", "本棚の真ん中の段"],
            "explanation": "The teacher specifies '一番上の段です' (top shelf) and '日本語の本の隣に置いてください' (next to the Japanese books)."
        },
        {
            "scenario": "A woman is looking for her glasses.",
            "question": "めがねはどこにありましたか。",
            "transcript": "女の人：私のめがね、どこかな。机の上にはないわ。\n男の人：洗面所（手を洗うところ）は？\n女の人：あ、あった。鏡（かがみ）の前に置いてあったわ。\n男の人：よかったね。",
            "correctAnswer": "鏡の前",
            "distractors": ["机の上", "カバンの中", "ベッドの下"],
            "explanation": "The woman finds them and says '鏡の前に置いてあったわ' (They were placed in front of the mirror)."
        },
        {
            "scenario": "A man looking for his car keys.",
            "question": "車の鍵（かぎ）はどこにありますか。",
            "transcript": "男の人：あれ、車の鍵がない。玄関（げんかん）の靴箱（くつばこ）の上にある？\n女の人：ないわよ。あ、昨日着ていたコートのポケットの中じゃない？\n男の人：あ、本当だ。あったよ。",
            "correctAnswer": "コートのポケットの中",
            "distractors": ["玄関の靴箱の上", "カバンの中", "机の引き出しの中"],
            "explanation": "The man finds them where the woman suggested: 'コートのポケットの中' (Inside the coat's pocket)."
        },
        {
            "scenario": "A coworker asks where the stapler is.",
            "question": "ホッチキスはどこですか。",
            "transcript": "女の人：すみません、ホッチキスはどこにありますか。\n男の人：コピー機の隣の棚（たな）にありますよ。\n女の人：棚の上ですか。\n男の人：いいえ、棚の一番下の引き出しの中です。",
            "correctAnswer": "棚の一番下の引き出しの中",
            "distractors": ["棚の上", "コピー機の上", "棚の真ん中の引き出しの中"],
            "explanation": "The man clarifies '棚の一番下の引き出しの中です' (Inside the bottom drawer of the shelf)."
        },
        {
            "scenario": "Setting a meeting place.",
            "question": "二人はどこで会いますか。",
            "transcript": "男の人：明日はどこで会いましょうか。駅の前でいいですか。\n女の人：駅の前は人が多いですから、駅の隣の銀行の前にしましょう。\n男の人：わかりました。銀行の前ですね。",
            "correctAnswer": "駅の隣の銀行の前",
            "distractors": ["駅の前", "駅の隣のコンビニの前", "銀行の中"],
            "explanation": "The woman suggests '駅の隣の銀行の前にしましょう' (Let's do in front of the bank next to the station)."
        },
        {
            "scenario": "Asking for parking.",
            "question": "男の人はどこに車を止めますか。",
            "transcript": "男の人：すみません。車はレストランの前に止めてもいいですか。\n店の人：レストランの前はだめです。レストランの後ろの駐車場（ちゅうしゃじょう）に止めてください。\n男の人：後ろですね。わかりました。",
            "correctAnswer": "レストランの後ろ",
            "distractors": ["レストランの前", "レストランの隣", "道の向かい"],
            "explanation": "The staff instructs 'レストランの後ろの駐車場に止めてください' (Please park in the lot behind the restaurant)."
        },
        {
            "scenario": "Finding a friend in a photo.",
            "question": "中村さんはどの人ですか。",
            "transcript": "女の人：この写真の中村さんはどれですか。座っている人ですか。\n男の人：いいえ、立っている人ですよ。\n女の人：右に立っている人ですか。\n男の人：はい、そうです。",
            "correctAnswer": "右に立っている人",
            "distractors": ["左に立っている人", "右に座っている人", "真ん中に立っている人"],
            "explanation": "Nakamura is standing (立っている人) on the right (右)."
        },
        {
            "scenario": "Finding a specific person in a group photo.",
            "question": "森さんはどの人ですか。",
            "transcript": "男の人：森さんはどの人ですか。\n女の人：森さんは、男の人と男の人の間に立っていますよ。\n男の人：あ、あの背が低い人ですか。\n女の人：はい、そうです。",
            "correctAnswer": "2人の男の人の間に立っている、背が低い人",
            "distractors": ["2人の男の人の間に立っている、背が高い人", "一番右に立っている人", "男の人と女の人の間にいる人"],
            "explanation": "Mori is standing between two men (男の人と男の人の間に立っています) and is short (背が低い人)."
        },
        {
            "scenario": "Directions to the post office.",
            "question": "郵便局はどうやって行きますか。",
            "transcript": "女の人：郵便局はどこですか。\n男の人：ここをまっすぐ行って、最初の信号（しんごう）を左に曲がります。そうすると、右側にありますよ。\n女の人：信号を左に曲がって、右側ですね。",
            "correctAnswer": "まっすぐ行き、最初の信号を左に曲がって右側",
            "distractors": ["まっすぐ行き、最初の信号を右に曲がって左側", "まっすぐ行き、2番目の信号を左に曲がる", "角を右に曲がる"],
            "explanation": "The man instructs '最初の信号を左に曲がります。そうすると、右側にありますよ' (Turn left at the first traffic light, it's on the right)."
        },
        {
            "scenario": "Directions to the hospital.",
            "question": "病院はどこですか。",
            "transcript": "男の人：病院はどこにありますか。\n女の人：あの角（かど）を右に曲がってください。花屋の隣にありますよ。\n男の人：角を右に曲がって、花屋の隣ですね。",
            "correctAnswer": "角を右に曲がって、花屋の隣",
            "distractors": ["角を左に曲がって、花屋の隣", "角を右に曲がって、花屋の向かい", "角を右に曲がって、花屋の中"],
            "explanation": "The woman directs him 'あの角を右に曲がってください。花屋の隣にありますよ'."
        },
        {
            "scenario": "Looking for the salt at the dinner table.",
            "question": "塩（しお）はどこにありますか。",
            "transcript": "男の人：塩を取ってください。\n女の人：塩ですか？醤油（しょうゆ）の後ろにありますよ。\n男の人：醤油の後ろですね。あ、ありました。",
            "correctAnswer": "醤油の後ろ",
            "distractors": ["醤油の前", "醤油の隣", "テーブルの下"],
            "explanation": "The woman says '醤油の後ろにありますよ' (It is behind the soy sauce)."
        },
        {
            "scenario": "Putting away groceries.",
            "question": "卵（たまご）はどこに入れますか。",
            "transcript": "男の人：この卵、冷蔵庫（れいぞうこ）に入れますか。\n女の人：はい、一番上の段（だん）に入れてください。\n男の人：牛乳の隣ですね。\n女の人：はい、お願いします。",
            "correctAnswer": "冷蔵庫の一番上の段で、牛乳の隣",
            "distractors": ["冷蔵庫の一番下の段", "冷蔵庫の真ん中の段", "テーブルの上"],
            "explanation": "The woman confirms to put it on the top shelf ('一番上の段') next to the milk ('牛乳の隣')."
        },
        {
            "scenario": "Looking for a lost wallet.",
            "question": "財布（さいふ）はどこにありましたか。",
            "transcript": "女の人：あれ？財布がない。カバンの中にもないわ。\n男の人：テレビの前に置いたんじゃない？\n女の人：ないわ。\n男の人：あ、ソファのクッションの下にあるよ。",
            "correctAnswer": "ソファのクッションの下",
            "distractors": ["カバンの中", "テレビの前", "ソファの上"],
            "explanation": "The man finds it 'ソファのクッションの下にあるよ' (It's under the sofa cushion)."
        },
        {
            "scenario": "Deciding where to place a plant.",
            "question": "植物（しょくぶつ）はどこに置きますか。",
            "transcript": "女の人：この花、窓の前に置く？\n男の人：窓の前は明るすぎるよ。テレビの隣がいいんじゃない？\n女の人：そうだね。じゃあ、テレビの右側に置くわ。",
            "correctAnswer": "テレビの右の隣",
            "distractors": ["窓の前", "テレビの左の隣", "テレビの上"],
            "explanation": "They decide on 'テレビの隣' and specify 'テレビの右側に置くわ' (On the right side of the TV)."
        },
        {
            "scenario": "A student asks where to sit for the exam.",
            "question": "女の学生はどこに座りますか。",
            "transcript": "女の学生：先生、私の席はどこですか。\n先生：窓の隣の列（れつ）です。\n女の学生：一番前ですか。\n先生：いいえ、前から2番目です。",
            "correctAnswer": "窓の隣の列で、前から2番目",
            "distractors": ["窓の隣の列で、一番前", "ドアの隣の列で、一番前", "真ん中の列で、前から2番目"],
            "explanation": "The teacher states '窓の隣の列です' (The row next to the window) and '前から2番目です' (Second from the front)."
        },
        {
            "scenario": "A boy asks his mother where his toy is.",
            "question": "おもちゃの車はどこにありますか。",
            "transcript": "男の子：お母さん、僕の赤い車のおもちゃはどこ？\nお母さん：おもちゃの箱の中じゃない？\n男の子：箱にはないよ。\nお母さん：あ、ベッドの下にあるわよ。",
            "correctAnswer": "ベッドの下",
            "distractors": ["おもちゃの箱の中", "机の下", "ソファの下"],
            "explanation": "The mother spots it 'ベッドの下にあるわよ' (It is under the bed)."
        },
        {
            "scenario": "Finding a colleague in the office.",
            "question": "鈴木さんの席はどこですか。",
            "transcript": "女の人：すみません。鈴木さんの席はどこですか。\n男の人：鈴木さんの席は、コピー機の向かいです。\n女の人：コピー機の隣ですか。\n男の人：いいえ、道を挟んで（はさんで）前ですよ。",
            "correctAnswer": "コピー機の向かい（前）",
            "distractors": ["コピー機の隣", "コピー機の後ろ", "ドアの隣"],
            "explanation": "The man clarifies 'コピー機の向かいです' and '前ですよ' (Across from/in front of the copy machine)."
        },
        {
            "scenario": "Directions to the restrooms in a department store.",
            "question": "トイレはどこですか。",
            "transcript": "男の人：すみません、トイレはどこですか。\n店の人：このエスカレーターを上がって、2階へ行ってください。エスカレーターの後ろにあります。\n男の人：2階のエスカレーターの後ろですね。ありがとうございます。",
            "correctAnswer": "2階のエスカレーターの後ろ",
            "distractors": ["1階のエスカレーターの後ろ", "2階のエスカレーターの隣", "2階のエスカレーターの前"],
            "explanation": "The staff says '2階へ行ってください。エスカレーターの後ろにあります' (Go to the 2nd floor. It's behind the escalator)."
        },
        {
            "scenario": "Finding a friend in a photo.",
            "question": "男の人の妹はどの人ですか。",
            "transcript": "女の人：この写真の女の人、誰ですか。\n男の人：私の妹です。\n女の人：妹さんは、帽子をかぶっている人ですか。\n男の人：いいえ、帽子をかぶっていないで、右に立っている人です。",
            "correctAnswer": "帽子をかぶっていないで、右に立っている人",
            "distractors": ["帽子をかぶって、右に立っている人", "帽子をかぶっていないで、左に立っている人", "座っている人"],
            "explanation": "The sister is '帽子をかぶっていない' (not wearing a hat) and '右に立っている' (standing on the right)."
        },
        {
            "scenario": "A child is looking for the eraser.",
            "question": "消しゴムはどこにありますか。",
            "transcript": "男の子：消しゴムがない。ノートの上にはないよ。\n女の子：筆箱（ふでばこ）の中は？\n男の子：ない。あ、ノートの下にあった。\n女の子：よかったね。",
            "correctAnswer": "ノートの下",
            "distractors": ["ノートの上", "筆箱の中", "机の下"],
            "explanation": "The boy finds it: 'あ、ノートの下にあった' (Ah, it was under the notebook)."
        },
        {
            "scenario": "Looking for the bus stop.",
            "question": "バス乗り場はどこですか。",
            "transcript": "男の人：すみません、バス乗り場はどこですか。\n女の人：駅の南口（みなみぐち）を出て、タクシー乗り場の左側にあります。\n男の人：タクシー乗り場の左ですね。ありがとうございます。",
            "correctAnswer": "タクシー乗り場の左側",
            "distractors": ["タクシー乗り場の右側", "タクシー乗り場の前", "駅の中"],
            "explanation": "The woman directs him to 'タクシー乗り場の左側にあります' (On the left side of the taxi stand)."
        },
        {
            "scenario": "A customer asking where the dressing room is.",
            "question": "試着室（服を着る部屋）はどこですか。",
            "transcript": "女の人：すみません。服を着てみたいです。\n店の人：あちらの鏡（かがみ）の右側にあります。\n女の人：鏡の左ですか。\n店の人：いいえ、右です。",
            "correctAnswer": "鏡の右側",
            "distractors": ["鏡の左側", "鏡の前", "レジの後ろ"],
            "explanation": "The staff corrects her: 'いいえ、右です' (No, it is on the right of the mirror)."
        },
        {
            "scenario": "Deciding where to place the trash can.",
            "question": "ゴミ箱はどこに置きますか。",
            "transcript": "女の人：この新しいゴミ箱、どこに置く？\n男の人：机の隣はどう？\n女の人：机の隣は狭い（せまい）から、ドアの後ろに置こう。\n男の人：わかった。",
            "correctAnswer": "ドアの後ろ",
            "distractors": ["机の隣", "机の下", "窓の前"],
            "explanation": "The woman suggests 'ドアの後ろに置こう' (Let's put it behind the door)."
        },
        {
            "scenario": "Finding a specific book at the library.",
            "question": "料理の本はどこですか。",
            "transcript": "男の人：すみません、料理の本はどこにありますか。\n女の人：料理の本は、3番の本棚（ほんだな）の、一番下の段（だん）です。\n男の人：3番の一番下ですね。わかりました。",
            "correctAnswer": "3番の本棚の一番下の段",
            "distractors": ["3番の本棚の一番上の段", "3番の本棚の真ん中の段", "1番の本棚の一番下の段"],
            "explanation": "The librarian says '3番の本棚の、一番下の段です' (Bookcase 3, the bottom row)."
        },
        {
            "scenario": "Locating a shop on a map.",
            "question": "靴屋（くつや）はどこですか。",
            "transcript": "男の人：すみません、靴屋はどこですか。\n女の人：この道をまっすぐ行ってください。右側に公園がありますね。\n男の人：はい。\n女の人：靴屋は公園の向かいです。",
            "correctAnswer": "公園の向かい",
            "distractors": ["公園の隣", "公園の中", "公園の後ろ"],
            "explanation": "The woman explains '靴屋は公園の向かいです' (The shoe store is opposite the park)."
        },
        {
            "scenario": "Putting away clean dishes.",
            "question": "お皿はどこにしまいますか。",
            "transcript": "男の人：お皿を洗いました。どこにしまいますか。\n女の人：上の棚（たな）にしまってください。\n男の人：コップの隣ですか。\n女の人：はい、コップの隣に置いてください。",
            "correctAnswer": "上の棚で、コップの隣",
            "distractors": ["下の棚で、コップの隣", "上の棚で、コップの後ろ", "テーブルの上"],
            "explanation": "The woman instructs him to put them in the upper shelf ('上の棚') next to the cups ('コップの隣')."
        },
        {
            "scenario": "Looking for the company cafeteria.",
            "question": "食堂（しょくどう）はどこですか。",
            "transcript": "男の人：すみません。この会社の食堂はどこですか。\n女の人：3階にあります。階段を上がって、右の奥（おく）の部屋です。\n男の人：右の奥ですね。ありがとうございます。",
            "correctAnswer": "3階の右の奥の部屋",
            "distractors": ["3階の左の奥の部屋", "3階の階段のすぐ隣の部屋", "2階の右の奥の部屋"],
            "explanation": "The woman tells him '3階にあります。階段を上がって、右の奥の部屋です' (3rd floor, up the stairs, the room in the back right)."
        },
        {
            "scenario": "A student asks where to put their umbrella.",
            "question": "傘はどこに置きますか。",
            "transcript": "男の学生：先生、濡れた傘はどこに置きますか。\n先生：教室に入れないでください。廊下（ろうか）の、ドアの右に置いてください。\n男の学生：わかりました。",
            "correctAnswer": "廊下の、ドアの右",
            "distractors": ["廊下の、ドアの左", "教室の中の、ドアの右", "教室の後ろ"],
            "explanation": "The teacher instructs '廊下の、ドアの右に置いてください' (In the hallway, to the right of the door)."
        },
        {
            "scenario": "A girl is looking for her teddy bear.",
            "question": "クマのおもちゃはどこにありますか。",
            "transcript": "女の子：お母さん、私のクマさんがないよ。\nお母さん：ベッドの上に置いたでしょう？\n女の子：ベッドの上にはないよ。\nお母さん：あ、ベッドの下に落ちているわよ。",
            "correctAnswer": "ベッドの下",
            "distractors": ["ベッドの上", "おもちゃの箱の中", "机の下"],
            "explanation": "The mother points out 'あ、ベッドの下に落ちているわよ' (Ah, it has fallen under the bed)."
        },
        {
            "scenario": "Finding a building on the street.",
            "question": "映画館はどこですか。",
            "transcript": "男の人：映画館はどこですか。\n女の人：あそこに大きい銀行がありますね。映画館はあの銀行と郵便局の間です。\n男の人：銀行と郵便局の間ですね。",
            "correctAnswer": "銀行と郵便局の間",
            "distractors": ["銀行の右の隣", "郵便局の右の隣", "銀行の前"],
            "explanation": "The woman states '映画館はあの銀行と郵便局の間です' (The movie theater is between the bank and the post office)."
        },
        {
            "scenario": "Asking for directions to the bicycle parking.",
            "question": "駐輪場（ちゅうりんじょう）はどこですか。",
            "transcript": "女の学生：すみません。自転車はどこに止めますか。\n男の人：自転車は、あの図書館の後ろに止めてください。\n女の学生：図書館の後ろですね。わかりました。",
            "correctAnswer": "図書館の後ろ",
            "distractors": ["図書館の前", "図書館の隣", "図書館の中"],
            "explanation": "The man instructs '自転車は、あの図書館の後ろに止めてください' (Park it behind the library)."
        },
        {
            "scenario": "A mother tells her son where to sit.",
            "question": "男の子はどこに座りますか。",
            "transcript": "お母さん：さあ、ご飯を食べましょう。\n男の子：僕、どこに座るの？\nお母さん：お父さんの隣に座ってね。\n男の子：お父さんの右？左？\nお母さん：右に座ってね。",
            "correctAnswer": "お父さんの右の隣",
            "distractors": ["お父さんの左の隣", "お父さんの向かい", "お母さんの隣"],
            "explanation": "The mother specifies 'お父さんの隣' and '右に座ってね' (Next to dad, on the right)."
        },
        {
            "scenario": "Finding the sugar in a cafe.",
            "question": "砂糖（さとう）はどこにありますか。",
            "transcript": "男の人：すみません。砂糖はどこにありますか。\n店の人：あちらのテーブルの上にあります。ミルクの隣です。\n男の人：ミルクの隣ですね。ありがとうございます。",
            "correctAnswer": "テーブルの上の、ミルクの隣",
            "distractors": ["テーブルの上の、コーヒーの隣", "テーブルの下", "レジの隣"],
            "explanation": "The staff states 'テーブルの上にあります。ミルクの隣です' (On the table, next to the milk)."
        },
        {
            "scenario": "Putting a new poster on the wall.",
            "question": "ポスターはどこに貼りますか。",
            "transcript": "男の人：新しいポスター、どこに貼る？\n女の人：カレンダーの上に貼ろうか。\n男の人：カレンダーの上は高すぎるよ。ドアの隣がいいよ。\n女の人：そうね。ドアの隣にしよう。",
            "correctAnswer": "ドアの隣",
            "distractors": ["カレンダーの上", "カレンダーの隣", "ドアの上"],
            "explanation": "They decide based on the man's suggestion: 'ドアの隣がいいよ' (Next to the door is good)."
        },
        {
            "scenario": "A man is looking for his briefcase.",
            "question": "男の人のカバンはどこにありますか。",
            "transcript": "男の人：僕のカバン、どこかな。机の隣に置いたんだけど。\n女の人：掃除する時、邪魔だったから机の上に置いたわよ。\n男の人：あ、本当だ。ありがとう。",
            "correctAnswer": "机の上",
            "distractors": ["机の隣", "机の下", "ソファの上"],
            "explanation": "The woman moved it because she was cleaning: '机の上に置いたわよ' (I put it on the desk)."
        },
        {
            "scenario": "Finding a friend in a photo.",
            "question": "高橋さんはどの人ですか。",
            "transcript": "女の人：この写真の高橋さんはどの人ですか。\n男の人：高橋さんは一番前で座っている人ですよ。\n女の人：一番前で、右に座っている人ですか。\n男の人：いいえ、左に座っている人です。",
            "correctAnswer": "一番前で、左に座っている人",
            "distractors": ["一番前で、右に座っている人", "一番後ろで立っている人", "真ん中で座っている人"],
            "explanation": "Takahashi is sitting in the very front (一番前で座っている) on the left (左)."
        },
        {
            "scenario": "A coworker asks where the meeting materials are.",
            "question": "会議の資料（しりょう）はどこにありますか。",
            "transcript": "女の人：会議の資料はどこですか。\n男の人：会議室のテーブルの上に置いてありますよ。\n女の人：テーブルの真ん中ですか。\n男の人：いいえ、テーブルの右の端（はし）です。",
            "correctAnswer": "会議室のテーブルの右の端",
            "distractors": ["会議室のテーブルの真ん中", "会議室のテーブルの左の端", "机の引き出しの中"],
            "explanation": "The man specifies 'テーブルの右の端です' (On the right edge of the table)."
        },
        {
            "scenario": "Directions to a hotel.",
            "question": "ホテルはどこですか。",
            "transcript": "男の人：すみません。ホテルさくらはどこですか。\n女の人：あの信号を右に曲がってください。橋（はし）の前にありますよ。\n男の人：信号を右に曲がって、橋の前ですね。",
            "correctAnswer": "信号を右に曲がって、橋の前",
            "distractors": ["信号を左に曲がって、橋の前", "信号を右に曲がって、橋を渡る", "まっすぐ行って、橋の前"],
            "explanation": "The woman instructs 'あの信号を右に曲がってください。橋の前にありますよ'."
        },
        {
            "scenario": "A girl is looking for her drawing.",
            "question": "女の子の絵はどこにありますか。",
            "transcript": "女の子：お母さん、私が描いた絵はどこ？\nお母さん：冷蔵庫（れいぞうこ）に貼ってあるわよ。\n女の子：冷蔵庫のどこ？\nお母さん：冷蔵庫の横よ。右側の横。",
            "correctAnswer": "冷蔵庫の右の横",
            "distractors": ["冷蔵庫の前のドア", "冷蔵庫の左の横", "冷蔵庫の中"],
            "explanation": "The mother specifies '冷蔵庫の横よ。右側の横' (On the side of the fridge. The right side)."
        },
        {
            "scenario": "Where to place a new lamp.",
            "question": "ランプはどこに置きますか。",
            "transcript": "男の人：この新しいランプ、どこに置く？ベッドの隣はどう？\n女の人：ベッドの隣はもう机があるわ。机の上がいいわよ。\n男の人：わかった。机の上に置くよ。",
            "correctAnswer": "机の上",
            "distractors": ["ベッドの隣", "ベッドの上", "ベッドの下"],
            "explanation": "The woman suggests '机の上がいいわよ' (On the desk is good), and the man agrees."
        },
        {
            "scenario": "A student asks where the teacher is.",
            "question": "先生はどこにいますか。",
            "transcript": "男の学生：すみません。山田先生はどこにいますか。\n女の学生：山田先生は今、図書館の前にいますよ。\n男の学生：図書館の前ですね。\n女の学生：ええ。立って本を読んでいますよ。",
            "correctAnswer": "図書館の前",
            "distractors": ["図書館の中", "図書館の隣", "教室の中"],
            "explanation": "The female student says '山田先生は今、図書館の前にいますよ' (Teacher Yamada is in front of the library right now)."
        },
        {
            "scenario": "Finding an empty seat on the train.",
            "question": "どこに座りますか。",
            "transcript": "男の人：電車、混んでいますね。どこか空いていますか。\n女の人：あ、あそこが空いていますよ。ドアの隣の席です。\n男の人：本当ですね。座りましょう。",
            "correctAnswer": "ドアの隣の席",
            "distractors": ["窓の隣の席", "真ん中の席", "一番後ろの席"],
            "explanation": "The woman points out 'あそこが空いていますよ。ドアの隣の席です' (That place is open. The seat next to the door)."
        },
        {
            "scenario": "A coworker is looking for some tea.",
            "question": "お茶はどこにありますか。",
            "transcript": "男の人：すみません。お茶はどこですか。\n女の人：お茶は、ポット（お湯）の隣の箱に入っていますよ。\n男の人：あの白い箱ですか。\n女の人：はい、そうです。",
            "correctAnswer": "ポットの隣の白い箱の中",
            "distractors": ["ポットの隣の黒い箱の中", "ポットの中", "冷蔵庫の中"],
            "explanation": "The tea is in the 'ポットの隣の箱' (Box next to the kettle) and the man confirms it is the '白い箱' (white box)."
        },
        {
            "scenario": "A husband asks where his tie is.",
            "question": "ネクタイはどこにありますか。",
            "transcript": "男の人：僕の青いネクタイ、どこかな。\n女の人：クローゼットの中にあるわよ。\n男の人：シャツの隣？\n女の人：いいえ、スーツの隣にかけてあるわ。",
            "correctAnswer": "クローゼットの中の、スーツの隣",
            "distractors": ["クローゼットの中の、シャツの隣", "クローゼットの中の、下", "ベッドの上"],
            "explanation": "The woman clarifies 'スーツの隣にかけてあるわ' (It is hung next to the suit)."
        },
        {
            "scenario": "Finding an ATM in a convenience store.",
            "question": "ATMはどこですか。",
            "transcript": "男の人：すみません、ATMはありますか。\n店の人：はい、ありますよ。入り口を入って、すぐ右にあります。\n男の人：入り口を入って、右ですね。ありがとうございます。",
            "correctAnswer": "入り口を入って、すぐ右",
            "distractors": ["入り口を入って、すぐ左", "レジの隣", "店の奥"],
            "explanation": "The staff member says '入り口を入って、すぐ右にあります' (Enter the entrance, it's immediately on the right)."
        },
        {
            "scenario": "A mother tells her daughter where the key is hidden.",
            "question": "家の鍵はどこにありますか。",
            "transcript": "お母さん：今日はお母さん、帰るのが遅くなるわ。家の鍵はポストの中に入れておくわね。\n女の子：わかった。ポストの中ね。\nお母さん：誰にも見られないようにね。",
            "correctAnswer": "ポストの中",
            "distractors": ["ドアの下", "靴箱の中", "玄関の隣"],
            "explanation": "The mother tells her '家の鍵はポストの中に入れておくわね' (I will put the house key in the mailbox)."
        },
        {
            "scenario": "Asking for the location of a famous statue.",
            "question": "銅像（どうぞう）はどこですか。",
            "transcript": "男の人：すみません。犬の銅像はどこにありますか。\n女の人：犬の銅像ですか。駅の北口（きたぐち）を出て、すぐ前にありますよ。\n男の人：北口のすぐ前ですね。",
            "correctAnswer": "駅の北口の前",
            "distractors": ["駅の南口の前", "駅の東口の前", "駅の中"],
            "explanation": "The woman directs him '駅の北口を出て、すぐ前にありますよ' (Go out the North Exit, it is right in front)."
        },
        {
            "scenario": "A student asks where the teacher's car is.",
            "question": "先生の車はどこですか。",
            "transcript": "男の学生：先生、荷物を車に運びます。先生の車はどこですか。\n先生：ありがとう。私の車は駐車場の、一番奥（おく）の右です。\n男の学生：一番奥の右ですね。わかりました。",
            "correctAnswer": "駐車場の一番奥の右",
            "distractors": ["駐車場の一番奥の左", "駐車場の手前の右", "駐車場の真ん中"],
            "explanation": "The teacher specifies '駐車場の、一番奥の右です' (In the parking lot, the very back right)."
        },
        {
            "scenario": "Finding a friend in a crowded cafeteria.",
            "question": "男の人はどこに座っていますか。",
            "transcript": "女の人：もしもし。今食堂に着きました。どこにいますか。\n男の人：私は、テレビの下の席に座っていますよ。\n女の人：あ、見えました。行きます。",
            "correctAnswer": "テレビの下の席",
            "distractors": ["窓の前の席", "テレビの隣の席", "入り口の近くの席"],
            "explanation": "The man says '私は、テレビの下の席に座っていますよ' (I am sitting at the seat under the TV)."
        },
        {
            "scenario": "Asking for directions to the park.",
            "question": "公園はどこですか。",
            "transcript": "女の人：公園に行きたいです。どうやって行きますか。\n男の人：ここをまっすぐ行って、郵便局を通り過ぎてください。そうすると、左側にあります。\n女の人：郵便局の次ですね。",
            "correctAnswer": "まっすぐ行って、郵便局の次の左側",
            "distractors": ["まっすぐ行って、郵便局の手前の左側", "まっすぐ行って、郵便局の次の右側", "郵便局の向かい"],
            "explanation": "The man says '郵便局を通り過ぎてください。そうすると、左側にあります' (Go past the post office. Then it is on the left side)."
        },
        {
            "scenario": "A man is looking for a pen.",
            "question": "ペンはどこにありますか。",
            "transcript": "男の人：すみません。ペンは机の上にありますか。\n女の人：いいえ、机の上にはありませんよ。机の引き出しの中です。\n男の人：引き出しの中ですね。わかりました。",
            "correctAnswer": "机の引き出しの中",
            "distractors": ["机の上", "机の下", "カバンの中"],
            "explanation": "The woman says '机の引き出しの中です' (It is inside the desk drawer)."
        },
        {
            "scenario": "Asking where to put the trash can.",
            "question": "ゴミ箱はどこに置きますか。",
            "transcript": "男の人：掃除が終わりました。ゴミ箱は机の下に置きますか。\n女の人：机の下は狭いですから、ドアの隣に置いてください。\n男の人：ドアの隣ですね。はい。",
            "correctAnswer": "ドアの隣",
            "distractors": ["机の下", "机の隣", "ドアの後ろ"],
            "explanation": "The woman instructs 'ドアの隣に置いてください' (Please place it next to the door)."
        },
        {
            "scenario": "Asking for directions to the hospital.",
            "question": "病院はどこですか。",
            "transcript": "女の人：すみません。病院はどこですか。\n男の人：ここをまっすぐ行って、あの橋（はし）を渡ってください。病院は銀行の隣にありますよ。\n女の人：橋を渡って、銀行の隣ですね。",
            "correctAnswer": "橋を渡って、銀行の隣",
            "distractors": ["橋を渡る前、銀行の隣", "橋を渡って、銀行の向かい", "橋を渡らないで、右側"],
            "explanation": "The man explains '橋を渡ってください。病院は銀行の隣にありますよ'."
        },
        {
            "scenario": "Finding a friend in a photo.",
            "question": "山田さんはどの人ですか。",
            "transcript": "男の人：この写真の山田さんはどの人ですか。\n女の人：山田さんはカバンを持っていますよ。\n男の人：右にいる人ですか。\n女の人：いいえ、左にいる人です。",
            "correctAnswer": "カバンを持って、左にいる人",
            "distractors": ["カバンを持って、右にいる人", "カバンを持たないで、左にいる人", "真ん中にいる人"],
            "explanation": "Yamada is holding a bag (カバンを持っています) and is on the left (左にいる人)."
        },
        {
            "scenario": "Putting away a broom.",
            "question": "ほうき（掃除の道具）はどこに置きますか。",
            "transcript": "女の学生：先生、このほうきはどこに置きますか。\n先生：部屋の隅（すみ）に置いてください。後ろのドアの隣です。\n女の学生：後ろのドアの隣ですね。わかりました。",
            "correctAnswer": "後ろのドアの隣の隅",
            "distractors": ["前のドアの隣の隅", "窓の隣の隅", "黒板の後ろ"],
            "explanation": "The teacher instructs '部屋の隅に置いてください。後ろのドアの隣です' (In the corner of the room. Next to the back door)."
        },
        {
            "scenario": "Finding the cat.",
            "question": "猫はどこにいますか。",
            "transcript": "男の子：お母さん、猫のタマがいないよ。ベッドの下かな。\nお母さん：ベッドの下にはいないわよ。あ、ソファの上で寝ているわ。\n男の子：あ、本当だ。",
            "correctAnswer": "ソファの上",
            "distractors": ["ベッドの下", "ソファの下", "庭の中"],
            "explanation": "The mother spots the cat: 'ソファの上で寝ているわ' (It is sleeping on the sofa)."
        },
        {
            "scenario": "Parking a bicycle.",
            "question": "自転車はどこに止めますか。",
            "transcript": "男の人：すみません、自転車は図書館の前に止めてもいいですか。\n女の人：図書館の前はいっぱいですから、図書館の右側に止めてください。\n男の人：右ですね。わかりました。",
            "correctAnswer": "図書館の右側",
            "distractors": ["図書館の前", "図書館の左側", "図書館の後ろ"],
            "explanation": "The woman directs him to '図書館の右側に止めてください' (Please park on the right side of the library)."
        },
        {
            "scenario": "Placing a poster on the wall.",
            "question": "ポスターはどこに貼りますか。",
            "transcript": "女の人：新しいポスター、カレンダーの隣に貼りますか。\n男の人：いいえ、カレンダーの上に貼ってください。\n女の人：カレンダーの上ですね。はい。",
            "correctAnswer": "カレンダーの上",
            "distractors": ["カレンダーの隣", "カレンダーの下", "ドアの隣"],
            "explanation": "The man specifies 'カレンダーの上に貼ってください' (Please put it above the calendar)."
        },
        {
            "scenario": "Looking for a book on the shelf.",
            "question": "新しい本はどこにありますか。",
            "transcript": "男の人：新しい本はどこですか。\n女の人：英語の本と日本語の本の間にありますよ。\n男の人：英語と日本語の間ですね。ありました。",
            "correctAnswer": "英語の本と日本語の本の間",
            "distractors": ["英語の本の隣", "日本語の本の隣", "一番上の段"],
            "explanation": "The woman clearly states '英語の本と日本語の本の間にありますよ' (It's between the English book and the Japanese book)."
        },
        {
            "scenario": "Identifying a car in the parking lot.",
            "question": "男の人の車はどれですか。",
            "transcript": "女の人：あなたの車はどれですか。\n男の人：私の車は赤い車です。\n女の人：赤い車は2台ありますね。右の車ですか。\n男の人：いいえ、左の車です。",
            "correctAnswer": "左の赤い車",
            "distractors": ["右の赤い車", "左の白い車", "右の白い車"],
            "explanation": "The man specifies his car is red (赤い車) and on the left (左の車)."
        },
        {
            "scenario": "Finding lost keys.",
            "question": "鍵はどこにありましたか。",
            "transcript": "男の人：あれ、家の鍵がない。カバンの中にもないよ。\n女の人：テレビの上に置いたんじゃない？\n男の人：あ、テレビの上にあった。ありがとう。",
            "correctAnswer": "テレビの上",
            "distractors": ["カバンの中", "机の上", "テレビの下"],
            "explanation": "The man confirms 'あ、テレビの上にあった' (Ah, they were on the TV)."
        },
        {
            "scenario": "Asking for the meeting room.",
            "question": "会議室（かいぎしつ）はどこですか。",
            "transcript": "女の人：すみません。会議室はどこですか。\n男の人：会議室は2階です。階段を上がって、廊下（ろうか）の終わりです。\n女の人：廊下の終わりですね。ありがとうございます。",
            "correctAnswer": "2階の廊下の終わり",
            "distractors": ["1階の廊下の終わり", "2階の階段の隣", "2階のエレベーターの前"],
            "explanation": "The man says '会議室は2階です。階段を上がって、廊下の終わりです'."
        },
        {
            "scenario": "Putting shoes away.",
            "question": "靴はどこに入れますか。",
            "transcript": "男の子：お母さん、靴はどこに入れるの？\nお母さん：靴箱（くつばこ）の一番下に入れてね。\n男の子：一番下だね。わかった。",
            "correctAnswer": "靴箱の一番下",
            "distractors": ["靴箱の一番上", "靴箱の真ん中", "玄関の外"],
            "explanation": "The mother instructs '一番下に入れてね' (Put them in the very bottom)."
        },
        {
            "scenario": "Finding the restroom.",
            "question": "トイレはどこですか。",
            "transcript": "男の人：すみません。トイレはどこですか。\n女の人：あそこに階段とエレベーターがありますね。\n男の人：はい。\n女の人：トイレは階段とエレベーターの間です。",
            "correctAnswer": "階段とエレベーターの間",
            "distractors": ["階段の隣", "エレベーターの隣", "エレベーターの後ろ"],
            "explanation": "The woman specifies 'トイレは階段とエレベーターの間です' (The restroom is between the stairs and the elevator)."
        },
        {
            "scenario": "Finding a cat in the bedroom.",
            "question": "猫はどこにいますか。",
            "transcript": "女の子：あれ、猫のミケがいない。ベッドの上かな。\n男の子：ベッドの上にはいないよ。あ、ベッドの下にいるよ。\n女の子：本当だ。暗いところにいるね。",
            "correctAnswer": "ベッドの下",
            "distractors": ["ベッドの上", "机の下", "クローゼットの中"],
            "explanation": "The boy spots it 'ベッドの下にいるよ' (It's under the bed)."
        },
        {
            "scenario": "Finding a pair of glasses.",
            "question": "めがねはどこにありますか。",
            "transcript": "男の人：めがねがありません。どこですか。\n女の人：パソコンの隣にありますよ。\n男の人：パソコンの右ですか、左ですか。\n女の人：右です。",
            "correctAnswer": "パソコンの右の隣",
            "distractors": ["パソコンの左の隣", "パソコンの前", "パソコンの上"],
            "explanation": "The woman says 'パソコンの隣' and specifies '右です' (On the right)."
        },
        {
            "scenario": "Directions to the post office.",
            "question": "郵便局はどこですか。",
            "transcript": "女の人：郵便局はどこですか。\n男の人：あの交差点（こうさてん）を渡って、左側にありますよ。\n女の人：交差点を渡って、左ですね。",
            "correctAnswer": "交差点を渡って、左側",
            "distractors": ["交差点を渡って、右側", "交差点を渡らないで、左側", "交差点を曲がる"],
            "explanation": "The man instructs 'あの交差点を渡って、左側にありますよ'."
        },
        {
            "scenario": "Finding a teacher outside.",
            "question": "先生はどこにいますか。",
            "transcript": "男の学生：すみません、山田先生はどこにいますか。\n女の学生：外にいますよ。ベンチに座っています。\n男の学生：木の下のベンチですか。\n女の学生：はい、そうです。",
            "correctAnswer": "外の木の下のベンチに座っている",
            "distractors": ["外の木の下で立っている", "外のドアの前に座っている", "教室の中のベンチに座っている"],
            "explanation": "The female student confirms the teacher is '外にいます...ベンチに座っています' and '木の下のベンチ'."
        },
        {
            "scenario": "Deciding where to place a plant.",
            "question": "植物（しょくぶつ）はどこに置きますか。",
            "transcript": "女の人：この花、どこに置きますか。テレビの隣ですか。\n男の人：いいえ、テレビの隣は暗いですから、窓の近くに置いてください。\n女の人：窓の近くですね。わかりました。",
            "correctAnswer": "窓の近く",
            "distractors": ["テレビの隣", "テレビの上", "ドアの近く"],
            "explanation": "The man instructs '窓の近くに置いてください' (Please put it near the window)."
        },
        {
            "scenario": "Hanging a calendar.",
            "question": "カレンダーはどこにかけますか。",
            "transcript": "男の人：カレンダーはどこにかけましょうか。\n女の人：時計の隣がいいですね。時計の左にかけてください。\n男の人：時計の左ですね。はい。",
            "correctAnswer": "時計の左の隣",
            "distractors": ["時計の右の隣", "時計の下", "ドアの隣"],
            "explanation": "The woman specifies '時計の左にかけてください' (Please hang it to the left of the clock)."
        },
        {
            "scenario": "Parking a bicycle at home.",
            "question": "自転車はどこに止めますか。",
            "transcript": "男の子：お母さん、自転車は家の前に止めてもいい？\nお母さん：家の前は邪魔（じゃま）になるから、家の後ろに止めてちょうだい。\n男の子：わかった。",
            "correctAnswer": "家の後ろ",
            "distractors": ["家の前", "家の隣", "家の中"],
            "explanation": "The mother instructs '家の後ろに止めてちょうだい' (Please park it behind the house)."
        },
        {
            "scenario": "Looking for a lost bag.",
            "question": "カバンはどこにありましたか。",
            "transcript": "女の人：すみません。黒いカバンを見ませんでしたか。\n男の人：黒いカバンですか。あ、あの椅子の下にありますよ。\n女の人：あ、本当だ。ありがとうございます。",
            "correctAnswer": "椅子の下",
            "distractors": ["椅子の上", "机の下", "机の上"],
            "explanation": "The man points out 'あの椅子の下にありますよ' (It's under that chair)."
        },
        {
            "scenario": "Looking for coffee in the kitchen.",
            "question": "コーヒーはどこにありますか。",
            "transcript": "男の人：コーヒーを飲みたいですが、コーヒーはどこですか。\n女の人：冷蔵庫（れいぞうこ）の中にありますよ。\n男の人：棚（たな）の中じゃないんですね。\n女の人：ええ、冷たいコーヒーですから。",
            "correctAnswer": "冷蔵庫の中",
            "distractors": ["棚の中", "テーブルの上", "冷蔵庫の上"],
            "explanation": "The woman states '冷蔵庫の中にありますよ' (It is in the refrigerator)."
        },
        {
            "scenario": "Organizing cups.",
            "question": "コップはどこに置きますか。",
            "transcript": "男の人：このコップはどこに置きますか。\n女の人：棚（たな）の真ん中の段（だん）に置いてください。\n男の人：お皿の隣ですね。\n女の人：はい、そうです。",
            "correctAnswer": "棚の真ん中の段で、お皿の隣",
            "distractors": ["棚の一番上の段", "棚の一番下の段", "テーブルの上"],
            "explanation": "The woman says '棚の真ん中の段に置いてください' (Please place it on the middle shelf)."
        },
        {
            "scenario": "Placing an umbrella outside.",
            "question": "傘はどこに置きますか。",
            "transcript": "女の人：濡れた傘はどうしますか。部屋に入れますか。\n男の人：いいえ、外のドアの前に置いてください。\n女の人：ドアの前ですね。わかりました。",
            "correctAnswer": "外のドアの前",
            "distractors": ["部屋の中のドアの前", "外のドアの後ろ", "部屋の隅"],
            "explanation": "The man instructs '外のドアの前に置いてください' (Please place it outside in front of the door)."
        },
        {
            "scenario": "Asking for the library.",
            "question": "図書館はどこですか。",
            "transcript": "男の人：すみません。図書館はどこですか。\n女の人：あそこに学校がありますね。図書館は学校の向かいにあります。\n男の人：学校の向かいですね。ありがとうございます。",
            "correctAnswer": "学校の向かい",
            "distractors": ["学校の隣", "学校の後ろ", "学校の中"],
            "explanation": "The woman explains '図書館は学校の向かいにあります' (The library is across from/opposite the school)."
        },
        {
            "scenario": "Finding a friend in a photo.",
            "question": "木村さんはどの人ですか。",
            "transcript": "男の人：この写真の木村さんはどの人ですか。\n女の人：木村さんは白いシャツを着ていますよ。\n男の人：白いシャツの人は2人います。一番後ろの人ですか。\n女の人：はい、一番後ろの人です。",
            "correctAnswer": "白いシャツを着て、一番後ろにいる人",
            "distractors": ["白いシャツを着て、一番前にいる人", "黒いシャツを着ている人", "真ん中にいる人"],
            "explanation": "Kimura wears a white shirt (白いシャツ) and is in the very back (一番後ろの人)."
        },
        {
            "scenario": "Looking for the camera.",
            "question": "カメラはどこにありますか。",
            "transcript": "女の人：お父さん、カメラはどこにあるの？\n男の人：カメラ？黒いカバンの中に入れたよ。\n女の人：机の上のカバン？\n男の人：そうだよ。",
            "correctAnswer": "机の上の、黒いカバンの中",
            "distractors": ["机の上の、白いカバンの中", "机の引き出しの中", "ソファの上の、黒いカバンの中"],
            "explanation": "The father confirms he put it in the '黒いカバンの中' (inside the black bag) which is '机の上' (on the desk)."
        },
        {
            "scenario": "Asking for the train station.",
            "question": "駅はどこですか。",
            "transcript": "男の人：すみません。駅はどこですか。\n女の人：ここをまっすぐ行って、花屋の角（かど）を右に曲がります。そうすると、すぐ見えますよ。\n男の人：花屋を右ですね。",
            "correctAnswer": "まっすぐ行って、花屋を右に曲がる",
            "distractors": ["まっすぐ行って、花屋を左に曲がる", "花屋を通り過ぎてまっすぐ行く", "まっすぐ行かないで右に曲がる"],
            "explanation": "The instruction is 'まっすぐ行って、花屋の角を右に曲がります' (Go straight and turn right at the flower shop corner)."
        },
        {
            "scenario": "Finding a car in a lot.",
            "question": "女の人の車はどれですか。",
            "transcript": "男の人：あなたの車はどれですか。\n女の人：私の車は白い車です。あの赤い車の隣ですよ。\n男の人：赤い車の右ですか、左ですか。\n女の人：右の隣です。",
            "correctAnswer": "赤い車の右にある、白い車",
            "distractors": ["赤い車の左にある、白い車", "白い車の右にある、赤い車", "赤い車"],
            "explanation": "The car is white (白い車) and is located to the right of the red car (赤い車の右の隣)."
        },
        {
            "scenario": "Looking for a train ticket.",
            "question": "切符はどこにありましたか。",
            "transcript": "女の人：あ、切符がない。財布の中にないわ。\n男の人：コートのポケットは見た？\n女の人：あ、ポケットの中にあったわ。よかった。",
            "correctAnswer": "コートのポケットの中",
            "distractors": ["財布の中", "カバンの中", "手の中"],
            "explanation": "The woman finds it 'ポケットの中にあったわ' (It was in the pocket)."
        },
        {
            "scenario": "Finding a notebook.",
            "question": "ノートはどこにありますか。",
            "transcript": "男の学生：僕のノート、見なかった？\n女の学生：あそこに辞書（じしょ）がありますね。\n男の学生：はい。\n女の学生：ノートはその辞書の下にありますよ。",
            "correctAnswer": "辞書の下",
            "distractors": ["辞書の上", "辞書の隣", "机の中"],
            "explanation": "The female student says 'ノートはその辞書の下にありますよ' (The notebook is under that dictionary)."
        },
        {
            "scenario": "Looking for scissors in a stationary box.",
            "question": "はさみはどこにありますか。",
            "transcript": "女の人：すみません。はさみはどこですか。\n男の人：はさみは、そのペンケースの中に入っていますよ。\n女の人：ペンケースの隣ですか。\n男の人：いいえ、中です。",
            "correctAnswer": "ペンケースの中",
            "distractors": ["ペンケースの隣", "ペンケースの下", "机の引き出しの中"],
            "explanation": "The man clarifies 'ペンケースの中に入っていますよ' (It is inside the pen case)."
        },
        {
            "scenario": "Hanging a wall clock.",
            "question": "時計はどこにかけますか。",
            "transcript": "男の人：この時計、どこにかけましょうか。窓の上がいいですか。\n女の人：窓の上より、ドアの上がいいですね。みんなが見ますから。\n男の人：そうですね。じゃあ、ドアの上にします。",
            "correctAnswer": "ドアの上",
            "distractors": ["窓の上", "ドアの隣", "黒板の上"],
            "explanation": "They decide on 'ドアの上がいいですね' (Above the door is good)."
        },
        {
            "scenario": "Finding the family dog.",
            "question": "犬はどこにいますか。",
            "transcript": "男の子：お母さん、ポチは家の中にいる？\nお母さん：いいえ、外にいるわよ。家の前にいるわ。\n男の子：わかった。見てくる。",
            "correctAnswer": "外の、家の前",
            "distractors": ["外の、家の後ろ", "家の中の、ドアの前", "庭の中"],
            "explanation": "The mother says '外にいるわよ。家の前にいるわ' (He's outside. In front of the house)."
        },
        {
            "scenario": "Asking for the supermarket.",
            "question": "スーパーはどこですか。",
            "transcript": "男の人：すみません。スーパーはどこですか。\n女の人：あそこに駅がありますね。スーパーは駅の隣です。左の隣ですよ。\n男の人：駅の左ですね。ありがとうございます。",
            "correctAnswer": "駅の左の隣",
            "distractors": ["駅の右の隣", "駅の向かい", "駅の中"],
            "explanation": "The woman specifies 'スーパーは駅の隣です。左の隣ですよ' (Next to the station. The neighbor on the left)."
        },
        {
            "scenario": "Looking for a public restroom.",
            "question": "トイレはどこですか。",
            "transcript": "女の人：すみません、トイレはどこですか。\n男の人：トイレは廊下（ろうか）の終わりです。右側にあります。\n女の人：廊下の終わりの右ですね。ありがとうございます。",
            "correctAnswer": "廊下の終わりの右側",
            "distractors": ["廊下の終わりの左側", "階段の右側", "階段の左側"],
            "explanation": "The man says 'トイレは廊下の終わりです。右側にあります' (At the end of the hall. On the right side)."
        },
        {
            "scenario": "Finding a friend in a photo.",
            "question": "佐藤さんはどの人ですか。",
            "transcript": "男の人：佐藤さんはどの人ですか。\n女の人：佐藤さんは帽子をかぶっていますよ。\n男の人：帽子をかぶって、右にいる人ですか。\n女の人：いいえ、左にいる人です。",
            "correctAnswer": "帽子をかぶって、左にいる人",
            "distractors": ["帽子をかぶって、右にいる人", "帽子をかぶらないで、左にいる人", "真ん中にいる人"],
            "explanation": "Sato is wearing a hat (帽子をかぶっています) and is on the left (左にいる人)."
        },
        {
            "scenario": "A student looks for an eraser.",
            "question": "消しゴムはどこにありましたか。",
            "transcript": "男の学生：あれ、消しゴムが落ちた。机の下かな。\n女の学生：あ、床（ゆか）にありますよ。机の隣です。\n男の学生：あ、本当だ。ありがとう。",
            "correctAnswer": "床の上の、机の隣",
            "distractors": ["机の下", "椅子の上", "カバンの中"],
            "explanation": "The female student spots it: '床にありますよ。机の隣です' (On the floor. Next to the desk)."
        },
        {
            "scenario": "Looking for the office printer.",
            "question": "コピー機はどこですか。",
            "transcript": "女の人：すみません。コピー機はどこですか。\n男の人：あそこに窓がありますね。窓の隣ですよ。\n女の人：ドアの隣ですか。\n男の人：いいえ、窓の隣です。",
            "correctAnswer": "窓の隣",
            "distractors": ["ドアの隣", "机の隣", "部屋の外"],
            "explanation": "The man corrects her to specify '窓の隣です' (Next to the window)."
        },
        {
            "scenario": "A woman looks for her jacket.",
            "question": "上着（うわぎ）はどこにありますか。",
            "transcript": "女の人：私の上着、どこに置いたかな。椅子の上かしら。\n男の人：椅子の上にはないよ。あ、ソファの上に置いてあるよ。\n女の人：あ、本当だ。ありがとう。",
            "correctAnswer": "ソファの上",
            "distractors": ["椅子の上", "ベッドの上", "テーブルの上"],
            "explanation": "The man points out 'あ、ソファの上に置いてあるよ' (It's placed on the sofa)."
        },
        {
            "scenario": "Deciding where to meet.",
            "question": "二人はどこで会いますか。",
            "transcript": "男の人：明日はどこで待ち合わせしますか。\n女の人：駅の前のコンビニの前にしましょう。\n男の人：コンビニの中じゃなくて、前ですね。\n女の人：はい、そうです。",
            "correctAnswer": "駅の前の、コンビニの前",
            "distractors": ["駅の前の、コンビニの中", "駅の中", "スーパーの前"],
            "explanation": "They confirm 'コンビニの中じゃなくて、前ですね' (Not inside the convenience store, but in front of it)."
        },
        {
            "scenario": "Putting away sweets.",
            "question": "お菓子はどこに入れますか。",
            "transcript": "男の子：お母さん、このお菓子どこに入れる？\nお母さん：冷蔵庫（れいぞうこ）に入れて。一番上の段（だん）よ。\n男の子：一番上だね。わかった。",
            "correctAnswer": "冷蔵庫の一番上の段",
            "distractors": ["冷蔵庫の一番下の段", "冷蔵庫の真ん中の段", "テーブルの上"],
            "explanation": "The mother instructs '一番上の段よ' (The top shelf)."
        },
        {
            "scenario": "Finding a stamp.",
            "question": "切手（きって）はどこにありますか。",
            "transcript": "女の人：すみません、切手はありますか。\n男の人：はい。私の机の一番上の引き出しにあります。\n女の人：一番上ですね。わかりました。",
            "correctAnswer": "机の一番上の引き出しの中",
            "distractors": ["机の一番下の引き出しの中", "机の真ん中の引き出しの中", "机の上"],
            "explanation": "The man specifies '私の一番上の引き出しにあります' (In my top drawer)."
        },
        {
            "scenario": "Hanging a new poster.",
            "question": "ポスターはどこに貼りますか。",
            "transcript": "男の人：このポスター、窓の隣に貼ろうか。\n女の人：うーん、ドアの後ろがいいわ。ドアの後ろは広いから。\n男の人：そうだね。そうしよう。",
            "correctAnswer": "ドアの後ろ",
            "distractors": ["窓の隣", "ドアの隣", "ドアの前"],
            "explanation": "They decide on the woman's suggestion: 'ドアの後ろがいいわ' (Behind the door is good)."
        },
        {
            "scenario": "Placing the trash.",
            "question": "ゴミはどこに置きますか。",
            "transcript": "男の人：このゴミはどこに置きますか。\n女の人：台所（だどころ）の、流し（水を使うところ）の下に置いてください。\n男の人：流しの下ですね。わかりました。",
            "correctAnswer": "台所の流しの下",
            "distractors": ["台所のテーブルの下", "台所の流しの上", "部屋の隅"],
            "explanation": "The woman instructs '台所の、流しの下に置いてください' (Please put it under the sink in the kitchen)."
        },
        {
            "scenario": "Finding a smartphone.",
            "question": "スマートフォンはどこにありましたか。",
            "transcript": "女の人：スマートフォンがないわ。テレビの前に置いたのに。\n男の人：テレビの前にはないよ。あ、この雑誌の下にあるよ。\n女の人：本当だ。見えなかったわ。",
            "correctAnswer": "雑誌の下",
            "distractors": ["テレビの前", "雑誌の上", "ソファの下"],
            "explanation": "The man finds it: 'あ、この雑誌の下にあるよ' (Ah, it's under this magazine)."
        },
        {
            "scenario": "A teacher is telling a student where to sit.",
            "question": "椅子はどこに置きますか。",
            "transcript": "男の学生：先生、この椅子はどこに置きますか。\n先生：私の机の右側に置いてください。\n男の学生：右側ですね。わかりました。",
            "correctAnswer": "先生の机の右側",
            "distractors": ["先生の机の左側", "先生の机の前", "窓の隣"],
            "explanation": "The teacher states '私の机の右側に置いてください' (Please place it on the right side of my desk)."
        },
        {
            "scenario": "Looking for the ATM.",
            "question": "ATMはどこですか。",
            "transcript": "男の人：すみません。ATMはどこですか。\n銀行の人：銀行の中に入って、左側にありますよ。\n男の人：中に入って、左ですね。ありがとうございます。",
            "correctAnswer": "銀行の中の、左側",
            "distractors": ["銀行の中の、右側", "銀行の外の、左側", "銀行の外の、右側"],
            "explanation": "The staff says '銀行の中に入って、左側にありますよ' (Go inside the bank, it's on the left side)."
        },
        {
            "scenario": "Asking for the shoe store.",
            "question": "靴屋（くつや）はどこですか。",
            "transcript": "女の人：すみません。靴屋はどこですか。\n店の人：靴屋は2階です。階段を上がって、すぐ隣にあります。\n女の人：2階の階段の隣ですね。ありがとうございます。",
            "correctAnswer": "2階の階段の隣",
            "distractors": ["1階の階段の隣", "2階のエレベーターの隣", "2階の奥"],
            "explanation": "The staff member says '靴屋は2階です。階段を上がって、すぐ隣にあります'."
        },
        {
            "scenario": "A woman is looking for her house keys.",
            "question": "鍵（かぎ）はどこにありますか。",
            "transcript": "女の人：あれ、家の鍵がない。カバンの中にないわ。\n男の人：テーブルの上に置いたんじゃない？\n女の人：テーブルの上にはないわ。あ、テーブルの下に落ちている。\n男の人：本当だ。よかったね。",
            "correctAnswer": "テーブルの下",
            "distractors": ["カバンの中", "テーブルの上", "ソファの下"],
            "explanation": "The woman finds it 'テーブルの下に落ちている' (It has fallen under the table)."
        },
        {
            "scenario": "A student asks where to put the homework.",
            "question": "宿題はどこに置きますか。",
            "transcript": "男の学生：先生、宿題はどこに出しますか。先生の机の上ですか。\n先生：いいえ、机の上じゃなくて、前のドアの隣の箱に入れてください。\n男の学生：前のドアの隣ですね。わかりました。",
            "correctAnswer": "前のドアの隣の箱の中",
            "distractors": ["先生の机の上", "後ろのドアの隣の箱の中", "窓の隣の箱の中"],
            "explanation": "The teacher specifies '前のドアの隣の箱に入れてください' (Put it in the box next to the front door)."
        },
        {
            "scenario": "Asking for directions to the bank.",
            "question": "銀行はどこですか。",
            "transcript": "女の人：すみません、銀行はどこですか。\n男の人：ここをまっすぐ行って、最初の角（かど）を左に曲がってください。右側にあります。\n女の人：最初の角を左に曲がって、右側ですね。",
            "correctAnswer": "最初の角を左に曲がって、右側",
            "distractors": ["最初の角を右に曲がって、右側", "最初の角を左に曲がって、左側", "まっすぐ行って、右側"],
            "explanation": "The man instructs '最初の角を左に曲がってください。右側にあります'."
        },
        {
            "scenario": "Finding a friend in a photo.",
            "question": "小川さんはどの人ですか。",
            "transcript": "男の人：この写真の小川さんはどの人ですか。\n女の人：小川さんは一番背が高い人ですよ。\n男の人：一番右にいる人ですか。\n女の人：いいえ、真ん中にいる人です。",
            "correctAnswer": "一番背が高くて、真ん中にいる人",
            "distractors": ["一番背が高くて、右にいる人", "一番背が低くて、真ん中にいる人", "左にいる人"],
            "explanation": "Ogawa is the tallest (一番背が高い人) and is in the middle (真ん中にいる人)."
        },
        {
            "scenario": "A man looking for his glasses.",
            "question": "めがねはどこにありましたか。",
            "transcript": "男の人：僕のめがね、知らない？机の上にある？\n女の人：机の上にはないわよ。あ、ベッドの上に置いてあるわ。\n男の人：ベッドの上？あ、本当だ。ありがとう。",
            "correctAnswer": "ベッドの上",
            "distractors": ["机の上", "机の下", "カバンの中"],
            "explanation": "The woman finds them 'ベッドの上に置いてあるわ' (They are placed on the bed)."
        },
        {
            "scenario": "Putting away a clean shirt.",
            "question": "シャツはどこにしまいますか。",
            "transcript": "女の人：このシャツ、どこに入れますか。クローゼットの右ですか。\n男の人：右はいっぱいですから、左に入れてください。コートの隣です。\n女の人：コートの隣ですね。わかりました。",
            "correctAnswer": "クローゼットの左で、コートの隣",
            "distractors": ["クローゼットの右で、コートの隣", "クローゼットの右で、ズボンの隣", "クローゼットの左で、ズボンの隣"],
            "explanation": "The man says '左に入れてください。コートの隣です' (Put it on the left. Next to the coat)."
        },
        {
            "scenario": "A driver asking for the parking lot.",
            "question": "駐車場（ちゅうしゃじょう）はどこですか。",
            "transcript": "男の人：すみません、このレストランの駐車場はどこですか。\n店の人：駐車場は、あの信号（しんごう）を右に曲がって、すぐ左側にあります。\n男の人：信号を右に曲がって、左側ですね。ありがとうございます。",
            "correctAnswer": "信号を右に曲がって、左側",
            "distractors": ["信号を左に曲がって、左側", "信号を右に曲がって、右側", "まっすぐ行って、左側"],
            "explanation": "The staff instructs '信号を右に曲がって、すぐ左側にあります'."
        },
        {
            "scenario": "Finding the sugar in the kitchen.",
            "question": "砂糖（さとう）はどこにありますか。",
            "transcript": "男の人：砂糖はどこですか。冷蔵庫（れいぞうこ）の中ですか。\n女の人：いいえ、冷蔵庫じゃなくて、ガスコンロの下の棚（たな）です。塩（しお）の隣にあります。\n男の人：塩の隣ですね。ありました。",
            "correctAnswer": "ガスコンロの下の棚で、塩の隣",
            "distractors": ["冷蔵庫の中", "ガスコンロの上の棚で、塩の隣", "ガスコンロの下の棚で、醤油の隣"],
            "explanation": "The woman says 'ガスコンロの下の棚です。塩の隣にあります'."
        },
        {
            "scenario": "Setting up the living room.",
            "question": "ソファはどこに置きますか。",
            "transcript": "男の人：この新しいソファ、どこに置く？テレビの前？\n女の人：テレビの前は狭い（せまい）から、窓の前にしよう。\n男の人：そうだね。窓の前に置こう。",
            "correctAnswer": "窓の前",
            "distractors": ["テレビの前", "テレビの隣", "ドアの隣"],
            "explanation": "They agree to the woman's suggestion: '窓の前にしよう' (Let's do in front of the window)."
        },
        {
            "scenario": "Finding the train station.",
            "question": "駅はどこですか。",
            "transcript": "女の人：駅はどこですか。\n男の人：あそこに大きい郵便局がありますね。駅は郵便局の隣ですよ。\n女の人：郵便局の右ですか、左ですか。\n男の人：左です。",
            "correctAnswer": "郵便局の左の隣",
            "distractors": ["郵便局の右の隣", "郵便局の前", "郵便局の向かい"],
            "explanation": "The man specifies the station is next to the post office ('郵便局の隣') and on the left ('左です')."
        },
        {
            "scenario": "Looking for a coworker in the office.",
            "question": "田中さんの席（せき）はどこですか。",
            "transcript": "男の人：田中さんの席はどこですか。窓の隣ですか。\n女の人：いいえ、窓の隣じゃありません。ドアの隣ですよ。一番前です。\n男の人：一番前で、ドアの隣ですね。",
            "correctAnswer": "一番前で、ドアの隣",
            "distractors": ["一番前で、窓の隣", "一番後ろで、ドアの隣", "一番後ろで、窓の隣"],
            "explanation": "The woman clarifies Tanaka's seat is 'ドアの隣ですよ。一番前です' (Next to the door. Very front)."
        },
        {
            "scenario": "Finding the restroom in a restaurant.",
            "question": "トイレはどこですか。",
            "transcript": "女の人：すみません。トイレはどこですか。\n店の人：トイレは、あのレジの隣の通路（ろうか）を入って、一番奥（おく）の右です。\n女の人：通路の奥の右ですね。ありがとうございます。",
            "correctAnswer": "レジの隣の通路の、一番奥の右",
            "distractors": ["レジの隣の通路の、一番奥の左", "レジのすぐ右", "入り口の右"],
            "explanation": "The staff directs her '通路を入って、一番奥の右です' (Go into the hallway, very end on the right)."
        },
        {
            "scenario": "Finding a friend in a photo.",
            "question": "伊藤さんはどの人ですか。",
            "transcript": "女の人：この写真の伊藤さんはどの人ですか。\n男の人：伊藤さんは黒い服を着ている人です。\n女の人：黒い服の人は2人いますね。右の人ですか。\n男の人：いいえ、左に立っている人です。",
            "correctAnswer": "黒い服を着て、左に立っている人",
            "distractors": ["黒い服を着て、右に立っている人", "白い服を着て、左に立っている人", "黒い服を着て、座っている人"],
            "explanation": "Ito wears black (黒い服) and is standing on the left (左に立っている人)."
        },
        {
            "scenario": "Putting the umbrella away.",
            "question": "傘はどこに置きますか。",
            "transcript": "男の人：この傘、どうしますか。玄関（げんかん）の中に置きますか。\n女の人：濡れているから、外のドアの右側に置いてください。\n男の人：外の右側ですね。わかりました。",
            "correctAnswer": "外の、ドアの右側",
            "distractors": ["中の、ドアの右側", "外の、ドアの左側", "外の、ドアの前"],
            "explanation": "The woman instructs '外のドアの右側に置いてください' (Please place it outside, on the right side of the door)."
        },
        {
            "scenario": "Looking for the company cafeteria.",
            "question": "食堂（しょくどう）はどこですか。",
            "transcript": "男の人：すみません。食堂はどこですか。\n女の人：食堂は3階です。エレベーターを降りて、右の部屋です。\n男の人：3階でエレベーターを降りて、右ですね。",
            "correctAnswer": "3階のエレベーターの右の部屋",
            "distractors": ["3階のエレベーターの左の部屋", "2階のエレベーターの右の部屋", "3階の階段の右の部屋"],
            "explanation": "The woman says '3階です。エレベーターを降りて、右の部屋です'."
        },
        {
            "scenario": "Finding a misplaced wallet.",
            "question": "財布はどこにありましたか。",
            "transcript": "女の人：あ、財布がない。机の上に置いたのに。\n男の人：机の上にはないよ。あ、落ちているよ。椅子の後ろに。\n女の人：本当だ。よかった。",
            "correctAnswer": "椅子の後ろ",
            "distractors": ["机の上", "机の下", "ドアの後ろ"],
            "explanation": "The man spots it '椅子の後ろに' (Behind the chair)."
        },
        {
            "scenario": "A student asks where to put the dictionary.",
            "question": "辞書はどこに置きますか。",
            "transcript": "男の学生：先生、この辞書はどこに置きますか。\n先生：本棚（ほんだな）の真ん中の段（だん）に置いてください。\n男の学生：パソコンの隣ですか。\n先生：いいえ、時計の隣です。",
            "correctAnswer": "本棚の真ん中の段で、時計の隣",
            "distractors": ["本棚の真ん中の段で、パソコンの隣", "本棚の一番上の段で、時計の隣", "机の上で、時計の隣"],
            "explanation": "The teacher specifies '本棚の真ん中の段' and '時計の隣です'."
        },
        {
            "scenario": "Looking for a convenience store.",
            "question": "コンビニはどこですか。",
            "transcript": "男の人：すみません。一番近いコンビニはどこですか。\n女の人：あそこに大きい病院がありますね。コンビニは病院の向かいです。\n男の人：病院の向かいですね。ありがとうございます。",
            "correctAnswer": "病院の向かい",
            "distractors": ["病院の隣", "病院の後ろ", "病院の中"],
            "explanation": "The woman says 'コンビニは病院の向かいです' (The convenience store is opposite the hospital)."
        },
        {
            "scenario": "Finding the cat.",
            "question": "猫はどこにいますか。",
            "transcript": "女の子：あれ、猫のタマがいない。外に出たのかな。\nお母さん：外には出ていないわよ。あ、見て。テレビの後ろで寝ているわ。\n女の子：あ、本当だ。",
            "correctAnswer": "テレビの後ろ",
            "distractors": ["外", "テレビの前", "ソファの下"],
            "explanation": "The mother spots the cat: 'テレビの後ろで寝ているわ' (Sleeping behind the TV)."
        },
        {
            "scenario": "A man is looking for a specific DVD.",
            "question": "DVDはどこにありますか。",
            "transcript": "男の人：昨日買ったDVDはどこですか。\n女の人：テレビの下の箱の中ですよ。\n男の人：白い箱ですか。\n女の人：いいえ、黒い箱です。白い箱の隣です。",
            "correctAnswer": "テレビの下の、黒い箱の中",
            "distractors": ["テレビの下の、白い箱の中", "テレビの隣の、黒い箱の中", "テレビの上の、黒い箱の中"],
            "explanation": "The DVD is 'テレビの下の箱の中' and the woman clarifies it is the '黒い箱'."
        },
        {
            "scenario": "Deciding where to hang a picture.",
            "question": "絵（え）はどこに飾りますか。",
            "transcript": "男の人：この絵、どこに飾る？カレンダーの隣はどう？\n女の人：カレンダーの隣は変よ。ドアの上がいいわ。\n男の人：ドアの上？そうだね、そこにしよう。",
            "correctAnswer": "ドアの上",
            "distractors": ["カレンダーの隣", "カレンダーの上", "窓の上"],
            "explanation": "They decide on the woman's suggestion: 'ドアの上がいいわ' (Above the door is good)."
        },
        {
            "scenario": "Asking for the post office.",
            "question": "郵便局はどこですか。",
            "transcript": "女の人：すみません、郵便局はどこですか。\n男の人：あの橋（はし）を渡って、まっすぐ行ってください。左側にあります。\n女の人：橋を渡って、左側ですね。",
            "correctAnswer": "橋を渡って、左側",
            "distractors": ["橋を渡って、右側", "橋を渡らないで、左側", "橋を渡って、角を曲がる"],
            "explanation": "The man instructs '橋を渡って、まっすぐ行ってください。左側にあります'."
        },
        {
            "scenario": "A child asks where to put their shoes.",
            "question": "靴はどこに置きますか。",
            "transcript": "男の子：お母さん、僕の靴はどこに置く？\nお母さん：靴箱（くつばこ）の下から2番目の段（だん）に入れてね。\n男の子：下から2番目だね。わかった。",
            "correctAnswer": "靴箱の下から2番目",
            "distractors": ["靴箱の一番下", "靴箱の一番上", "靴箱の上から2番目"],
            "explanation": "The mother specifies '下から2番目の段に入れてね' (Put them in the 2nd shelf from the bottom)."
        },
        {
            "scenario": "Finding a friend in a photo.",
            "question": "渡辺さんはどの人ですか。",
            "transcript": "女の人：渡辺さんはどの人ですか。\n男の人：渡辺さんは、帽子（ぼうし）をかぶっている人ですよ。\n女の人：右の人ですか、左の人ですか。\n男の人：右に立っている人です。",
            "correctAnswer": "帽子をかぶって、右に立っている人",
            "distractors": ["帽子をかぶって、左に立っている人", "帽子をかぶらないで、右に立っている人", "真ん中に座っている人"],
            "explanation": "Watanabe is wearing a hat (帽子をかぶっています) and is standing on the right (右に立っている人)."
        },
        {
            "scenario": "Looking for the copy machine.",
            "question": "コピー機はどこですか。",
            "transcript": "男の人：すみません。コピー機はどこですか。\n女の人：コピー機は、あのドアの隣にありますよ。右の隣です。\n男の人：ドアの右ですね。ありがとうございます。",
            "correctAnswer": "ドアの右の隣",
            "distractors": ["ドアの左の隣", "窓の右の隣", "部屋の真ん中"],
            "explanation": "The woman points out it is 'ドアの隣' and specifies '右の隣です'."
        },
        {
            "scenario": "Looking for lost scissors.",
            "question": "はさみはどこにありましたか。",
            "transcript": "女の人：はさみがないわ。ペンケースの中にはないの。\n男の人：机の引き出しの中は？\n女の人：引き出しにもないわ。あ、机の下に落ちていたわ。\n男の人：気をつけてね。",
            "correctAnswer": "机の下",
            "distractors": ["ペンケースの中", "机の上", "机の引き出しの中"],
            "explanation": "The woman finds them '机の下に落ちていたわ' (They had fallen under the desk)."
        },
        {
            "scenario": "Placing a new lamp.",
            "question": "ランプはどこに置きますか。",
            "transcript": "男の人：このランプ、どこに置く？机の上？\n女の人：机の上は狭いから、ベッドの隣に置いて。\n男の人：ベッドの隣だね。わかった。",
            "correctAnswer": "ベッドの隣",
            "distractors": ["机の上", "机の隣", "ベッドの上"],
            "explanation": "The woman says 'ベッドの隣に置いて' (Place it next to the bed)."
        },
        {
            "scenario": "Asking for the library.",
            "question": "図書館はどこですか。",
            "transcript": "男の人：すみません。図書館はどこですか。\n女の人：この道をまっすぐ行って、最初の信号（しんごう）を右に曲がります。そうすると左側にありますよ。\n男の人：最初の信号を右に曲がって、左側ですね。",
            "correctAnswer": "最初の信号を右に曲がって、左側",
            "distractors": ["最初の信号を左に曲がって、左側", "最初の信号を右に曲がって、右側", "2番目の信号を右に曲がって、左側"],
            "explanation": "The woman instructs '最初の信号を右に曲がります。そうすると左側にありますよ'."
        },
        {
            "scenario": "A student looks for their notebook.",
            "question": "ノートはどこにありましたか。",
            "transcript": "男の学生：僕のノート、知らない？机の中に入れたんだけど。\n女の学生：あ、先生の机の上にありましたよ。\n男の学生：あ、本当だ。忘れていた。",
            "correctAnswer": "先生の机の上",
            "distractors": ["自分の机の中", "カバンの中", "椅子の下"],
            "explanation": "The female student says '先生の机の上にありましたよ' (It was on the teacher's desk)."
        },
        {
            "scenario": "Finding a dog.",
            "question": "犬はどこにいますか。",
            "transcript": "男の人：ポチは庭にいるかな。\n女の人：庭にはいないわよ。あ、ドアの前にいるわ。\n男の人：本当だ。ドアの前で待っているね。",
            "correctAnswer": "ドアの前",
            "distractors": ["庭の中", "家の中", "窓の前"],
            "explanation": "The woman spots the dog: 'あ、ドアの前にいるわ' (Ah, he is in front of the door)."
        },
        {
            "scenario": "Putting groceries away.",
            "question": "肉はどこに入れますか。",
            "transcript": "女の人：買ってきた肉、冷蔵庫に入れるね。一番下の段（だん）でいい？\n男の人：一番下は野菜が入っているから、真ん中の段に入れて。\n女の人：わかった。真ん中ね。",
            "correctAnswer": "冷蔵庫の真ん中の段",
            "distractors": ["冷蔵庫の一番下の段", "冷蔵庫の一番上の段", "テーブルの上"],
            "explanation": "The man instructs '真ん中の段に入れて' (Put it in the middle shelf)."
        },
        {
            "scenario": "Finding a friend in a photo.",
            "question": "加藤さんはどの人ですか。",
            "transcript": "男の人：加藤さんはどの人ですか。\n女の人：加藤さんは、めがねをかけていますよ。\n男の人：めがねの人は2人います。座っている人ですか。\n女の人：いいえ、立っている人です。",
            "correctAnswer": "めがねをかけて、立っている人",
            "distractors": ["めがねをかけて、座っている人", "めがねをかけないで、立っている人", "帽子をかぶっている人"],
            "explanation": "Kato wears glasses (めがねをかけています) and is standing (立っている人)."
        },
        {
            "scenario": "Locating an ATM.",
            "question": "ATMはどこですか。",
            "transcript": "女の人：すみません。ATMはどこですか。\n店の人：あちらのトイレの隣にあります。\n女の人：トイレの右ですか、左ですか。\n店の人：左です。",
            "correctAnswer": "トイレの左の隣",
            "distractors": ["トイレの右の隣", "トイレの前", "レジの隣"],
            "explanation": "The staff specifies 'トイレの隣' and '左です' (On the left)."
        },
        {
            "scenario": "Finding a misplaced watch.",
            "question": "時計はどこにありましたか。",
            "transcript": "男の人：あれ、僕の時計がない。\n女の人：洗面所（手を洗うところ）は？\n男の人：ないよ。\n女の人：あ、ベッドの隣の机の上にあるわよ。\n男の人：あ、あった。",
            "correctAnswer": "ベッドの隣の机の上",
            "distractors": ["洗面所", "机の引き出しの中", "ベッドの下"],
            "explanation": "The woman finds it 'ベッドの隣の机の上にあるわよ' (It's on the desk next to the bed)."
        },
        {
            "scenario": "Setting a meeting point.",
            "question": "二人はどこで会いますか。",
            "transcript": "女の人：明日は、映画館の中で会いましょうか。\n男の人：映画館の中は混むから、映画館の前の公園にしましょう。\n女の人：わかりました。公園ですね。",
            "correctAnswer": "映画館の前の公園",
            "distractors": ["映画館の中", "映画館の隣のカフェ", "駅の前の公園"],
            "explanation": "The man suggests '映画館の前の公園にしましょう' (Let's meet at the park in front of the movie theater)."
        },
        {
            "scenario": "Asking for the supermarket.",
            "question": "スーパーはどこですか。",
            "transcript": "男の人：すみません。一番近いスーパーはどこですか。\n女の人：あの交差点（こうさてん）をまっすぐ行って、郵便局の向かいにありますよ。\n男の人：郵便局の向かいですね。",
            "correctAnswer": "交差点をまっすぐ行って、郵便局の向かい",
            "distractors": ["交差点を曲がって、郵便局の隣", "交差点をまっすぐ行って、郵便局の隣", "交差点の角"],
            "explanation": "The woman directs him '交差点をまっすぐ行って、郵便局の向かいにありますよ'."
        },
        {
            "scenario": "Putting a sign outside.",
            "question": "看板（かんばん）はどこに置きますか。",
            "transcript": "男の人：この看板、どこに置きますか。入り口の左でいいですか。\n女の人：左は自転車があるから、入り口の右に置いてください。\n男の人：右ですね。わかりました。",
            "correctAnswer": "入り口の右",
            "distractors": ["入り口の左", "入り口の前", "入り口の中"],
            "explanation": "The woman instructs '入り口の右に置いてください' (Please place it on the right of the entrance)."
        },
        {
            "scenario": "Looking for the shoe store.",
            "question": "靴屋（くつや）はどこですか。",
            "transcript": "女の人：すみません。靴屋はどこですか。\n店の人：靴屋は2階です。エスカレーターを上がって、右側にあります。\n女の人：エスカレーターを上がって、右側ですね。ありがとうございます。",
            "correctAnswer": "2階で、エスカレーターを上がって右側",
            "distractors": ["2階で、エスカレーターを上がって左側", "1階で、エスカレーターの隣", "2階の階段の右側"],
            "explanation": "The staff member says '2階です。エスカレーターを上がって、右側にあります'."
        },
        {
            "scenario": "Finding a friend in a photo.",
            "question": "林さんはどの人ですか。",
            "transcript": "男の人：この写真の林さんはどれですか。\n女の人：林さんは、男の人と男の人の間に立っていますよ。\n男の人：あ、あの髪（かみ）が長い人ですか。\n女の人：はい、そうです。",
            "correctAnswer": "2人の男の人の間に立っている、髪が長い人",
            "distractors": ["2人の男の人の間に立っている、髪が短い人", "一番右に立っている人", "女の人と女の人の間にいる人"],
            "explanation": "Hayashi is standing between two men (男の人と男の人の間) and has long hair (髪が長い人)."
        },
        {
            "scenario": "Deciding where to place the trash can.",
            "question": "ゴミ箱はどこに置きますか。",
            "transcript": "男の人：新しいゴミ箱、どこに置く？ドアの後ろはどう？\n女の人：ドアの後ろは邪魔（じゃま）よ。机の下がいいわ。\n男の人：そうだね。じゃあ、机の下にしよう。",
            "correctAnswer": "机の下",
            "distractors": ["ドアの後ろ", "ドアの隣", "机の隣"],
            "explanation": "They decide on the woman's suggestion: '机の下がいいわ' (Under the desk is good)."
        },
        {
            "scenario": "A child asks where their toy is.",
            "question": "おもちゃはどこにありますか。",
            "transcript": "男の子：お母さん、僕の赤い車のおもちゃ、どこ？\nお母さん：おもちゃの箱の中にない？\n男の子：箱にはないよ。\nお母さん：あ、ソファの下に落ちているわよ。",
            "correctAnswer": "ソファの下",
            "distractors": ["おもちゃの箱の中", "ベッドの下", "机の上"],
            "explanation": "The mother spots it 'ソファの下に落ちているわよ' (It's fallen under the sofa)."
        },
        {
            "scenario": "Locating a meeting room.",
            "question": "会議室はどこですか。",
            "transcript": "女の人：すみません。会議室はどこですか。\n男の人：廊下（ろうか）の終わりです。階段の隣ですよ。\n女の人：階段の左ですか、右ですか。\n男の人：階段の左です。",
            "correctAnswer": "廊下の終わりで、階段の左の隣",
            "distractors": ["廊下の終わりで、階段の右の隣", "廊下の真ん中で、階段の隣", "エレベーターの隣"],
            "explanation": "The man specifies '廊下の終わりです。階段の隣ですよ' and '左です' (On the left)."
        },
        {
            "scenario": "Finding lost scissors.",
            "question": "はさみはどこにありましたか。",
            "transcript": "男の人：はさみがないよ。机の引き出しの中にはないよ。\n女の人：ペンケースの中は？\n男の人：ないよ。\n女の人：あ、新聞（しんぶん）の下にあるわよ。",
            "correctAnswer": "新聞の下",
            "distractors": ["机の引き出しの中", "ペンケースの中", "机の上"],
            "explanation": "The woman finds them '新聞の下にあるわよ' (They are under the newspaper)."
        },
        {
            "scenario": "Asking for the post office.",
            "question": "郵便局はどこですか。",
            "transcript": "女の人：すみません、郵便局はどこですか。\n男の人：あそこに本屋がありますね。郵便局は本屋の隣です。本屋と銀行の間ですよ。\n女の人：本屋と銀行の間ですね。ありがとうございます。",
            "correctAnswer": "本屋と銀行の間",
            "distractors": ["本屋の前", "銀行の右の隣", "本屋の後ろ"],
            "explanation": "The man explains '郵便局は本屋の隣です。本屋と銀行の間ですよ'."
        },
        {
            "scenario": "Placing a flower vase.",
            "question": "花瓶（かびん）はどこに置きますか。",
            "transcript": "女の人：この花瓶、テーブルの真ん中に置く？\n男の人：テーブルはご飯を食べるから、テレビの隣の小さい机の上がいいよ。\n女の人：そうね。じゃあ、そこに置くわ。",
            "correctAnswer": "テレビの隣の小さい机の上",
            "distractors": ["テーブルの真ん中", "テレビの上", "テレビの前"],
            "explanation": "They decide on 'テレビの隣の小さい机の上がいいよ' (On the small desk next to the TV)."
        },
        {
            "scenario": "Finding a friend in a cafe.",
            "question": "男の人の友達はどこに座っていますか。",
            "transcript": "男の人：すみません。私の友達はどこですか。黒いシャツを着ています。\n店の人：黒いシャツの男の人ですね。入り口のすぐ隣の席に座っていますよ。\n男の人：入り口の隣ですね。ありがとうございます。",
            "correctAnswer": "入り口の隣の席",
            "distractors": ["窓の前の席", "一番奥の席", "部屋の真ん中の席"],
            "explanation": "The staff says '入り口のすぐ隣の席に座っていますよ' (Sitting in the seat right next to the entrance)."
        },
        {
            "scenario": "Parking a bicycle.",
            "question": "自転車はどこに止めますか。",
            "transcript": "男の人：自転車は、図書館の前に止めてもいいですか。\n図書館の人：いいえ、図書館の前はだめです。図書館の後ろに止めてください。\n男の人：後ろですね。わかりました。",
            "correctAnswer": "図書館の後ろ",
            "distractors": ["図書館の前", "図書館の隣", "図書館の中"],
            "explanation": "The staff member instructs '図書館の後ろに止めてください' (Please park it behind the library)."
        },
        {
            "scenario": "A student looks for their notebook.",
            "question": "ノートはどこにありましたか。",
            "transcript": "女の学生：あれ、私のノートがない。机の中に入れたのに。\n男の学生：あ、椅子（いす）の下に落ちているよ。\n女の学生：あ、本当だ。ありがとう。",
            "correctAnswer": "椅子の下",
            "distractors": ["机の中", "机の上", "カバンの中"],
            "explanation": "The male student spots it '椅子の下に落ちているよ' (It has fallen under the chair)."
        },
        {
            "scenario": "Finding the hospital entrance.",
            "question": "病院の入り口はどこですか。",
            "transcript": "男の人：すみません。病院の入り口はどこですか。\n女の人：この道をまっすぐ行って、最初の角（かど）を左に曲がってください。そうすると右側にあります。\n男の人：最初の角を左に曲がって、右側ですね。",
            "correctAnswer": "最初の角を左に曲がって、右側",
            "distractors": ["最初の角を右に曲がって、左側", "まっすぐ行って、右側", "2番目の角を左に曲がる"],
            "explanation": "The woman instructs '最初の角を左に曲がってください。そうすると右側にあります'."
        },
        {
            "scenario": "Putting away an umbrella.",
            "question": "傘はどこに置きますか。",
            "transcript": "女の人：濡れた傘はどこに置きますか。外ですか。\n男の人：いいえ、玄関（げんかん）の中の、靴箱（くつばこ）の左側に置いてください。\n女の人：靴箱の左ですね。わかりました。",
            "correctAnswer": "玄関の中の、靴箱の左側",
            "distractors": ["玄関の中の、靴箱の右側", "玄関の外の、靴箱の左側", "外のドアの前"],
            "explanation": "The man specifies '玄関の中の、靴箱の左側に置いてください'."
        },
        {
            "scenario": "Asking for directions to a bookstore.",
            "question": "本屋はどこですか。",
            "transcript": "男の人：すみません。本屋はどこですか。\n女の人：あそこに交差点（こうさてん）がありますね。あそこを右に曲がって、すぐ左側にありますよ。\n男の人：交差点を右に曲がって、左ですね。ありがとうございます。",
            "correctAnswer": "交差点を右に曲がって、左側",
            "distractors": ["交差点を左に曲がって、右側", "交差点をまっすぐ行って、左側", "交差点を右に曲がって、右側"],
            "explanation": "The woman instructs 'あそこを右に曲がって、すぐ左側にありますよ' (Turn right there, it is immediately on the left side)."
        },
        {
            "scenario": "Looking for a misplaced book.",
            "question": "本はどこにありましたか。",
            "transcript": "女の人：私の本、知らない？机の上に置いたんだけど。\n男の人：机の上にはないよ。あ、カバンの下にあるよ。\n女の人：あ、本当だ。ありがとう。",
            "correctAnswer": "カバンの下",
            "distractors": ["机の上", "カバンの中", "ベッドの下"],
            "explanation": "The man spots it 'カバンの下にあるよ' (It is under the bag)."
        },
        {
            "scenario": "Deciding where to place a box.",
            "question": "箱はどこに置きますか。",
            "transcript": "男の人：この箱、どこに置きますか。棚（たな）の一番上がいいですか。\n女の人：一番上は危ないですから、一番下の段（だん）に置いてください。\n男の人：わかりました。一番下ですね。",
            "correctAnswer": "棚の一番下の段",
            "distractors": ["棚の一番上の段", "棚の真ん中の段", "机の下"],
            "explanation": "The woman instructs '一番下の段に置いてください' (Please place it on the bottom shelf)."
        },
        {
            "scenario": "Finding a friend in a photo.",
            "question": "山田さんはどの人ですか。",
            "transcript": "女の人：この写真の山田さんはどの人ですか。\n男の人：山田さんは帽子（ぼうし）をかぶっていますよ。\n女の人：帽子をかぶっている人は2人いますね。めがねをかけている人ですか。\n男の人：いいえ、めがねはかけていません。",
            "correctAnswer": "帽子をかぶって、めがねをかけていない人",
            "distractors": ["帽子をかぶって、めがねをかけている人", "帽子をかぶっていないで、めがねをかけている人", "帽子もめがねもしていない人"],
            "explanation": "Yamada is wearing a hat (帽子をかぶっています) but is not wearing glasses (めがねはかけていません)."
        },
        {
            "scenario": "Looking for the family dog.",
            "question": "犬はどこにいますか。",
            "transcript": "男の子：お母さん、犬のポチはどこ？机の下かな。\nお母さん：机の下にはいないわよ。あ、見て。窓の前にいるわ。\n男の子：あ、本当だ。外を見ているね。",
            "correctAnswer": "窓の前",
            "distractors": ["机の下", "外", "ドアの後ろ"],
            "explanation": "The mother points out '窓の前にいるわ' (He is in front of the window)."
        },
        {
            "scenario": "Setting a meeting place.",
            "question": "二人はどこで会いますか。",
            "transcript": "男の人：明日はどこで待ち合わせしましょうか。駅の改札（かいさつ）にしますか。\n女の人：改札は混みますから、駅の前の時計（とけい）の下にしましょう。\n男の人：駅の前の時計の下ですね。わかりました。",
            "correctAnswer": "駅の前の時計の下",
            "distractors": ["駅の改札", "駅の中の時計の下", "駅の前のコンビニ"],
            "explanation": "The woman suggests '駅の前の時計の下にしましょう' (Let's meet under the clock in front of the station)."
        },
        {
            "scenario": "Where to put the trash can in the kitchen.",
            "question": "ゴミ箱はどこに置きますか。",
            "transcript": "女の人：新しいゴミ箱、どこに置く？冷蔵庫（れいぞうこ）の隣はどう？\n男の人：冷蔵庫の隣より、ドアの横がいいよ。捨てやすいから。\n女の人：そうね。じゃあ、ドアの横にしよう。",
            "correctAnswer": "ドアの横",
            "distractors": ["冷蔵庫の隣", "テーブルの下", "冷蔵庫の前"],
            "explanation": "They agree on the man's suggestion: 'ドアの横がいいよ' (Next to the door is good)."
        },
        {
            "scenario": "A man is looking for his house keys.",
            "question": "家の鍵はどこにありましたか。",
            "transcript": "男の人：あれ、家の鍵がない。ズボンのポケットにないよ。\n女の人：コートのポケットは？\n男の人：あ、あった。コートのポケットに入っていた。\n女の人：よかったわね。",
            "correctAnswer": "コートのポケットの中",
            "distractors": ["ズボンのポケットの中", "カバンの中", "靴箱の上"],
            "explanation": "The man finds them 'コートのポケットに入っていた' (They were in the coat pocket)."
        },
        {
            "scenario": "Looking for a cafe.",
            "question": "カフェはどこですか。",
            "transcript": "男の人：すみません。この近くにカフェはありますか。\n女の人：はい、あそこに銀行がありますね。カフェはあの銀行の向かいです。\n男の人：銀行の向かいですね。ありがとうございます。",
            "correctAnswer": "銀行の向かい",
            "distractors": ["銀行の隣", "銀行の中", "銀行の後ろ"],
            "explanation": "The woman specifies 'カフェはあの銀行の向かいです' (The cafe is opposite the bank)."
        },
        {
            "scenario": "A student asks where to sit.",
            "question": "女の学生はどこに座りますか。",
            "transcript": "女の学生：先生、私はどこに座りますか。\n先生：あなたは一番後ろの席です。窓の隣に座ってください。\n女の学生：一番後ろで、窓の隣ですね。わかりました。",
            "correctAnswer": "一番後ろの、窓の隣の席",
            "distractors": ["一番前の、窓の隣の席", "一番後ろの、ドアの隣の席", "真ん中の席"],
            "explanation": "The teacher states '一番後ろの席です。窓の隣に座ってください'."
        },
        {
            "scenario": "Looking for the copy machine.",
            "question": "コピー機はどこですか。",
            "transcript": "男の人：すみません。コピー機はどこにありますか。\n女の人：コピー機は、パソコンの後ろにありますよ。\n男の人：パソコンの隣ですか。\n女の人：いいえ、パソコンの後ろです。",
            "correctAnswer": "パソコンの後ろ",
            "distractors": ["パソコンの隣", "パソコンの前", "ドアの隣"],
            "explanation": "The woman explicitly corrects him to 'いいえ、パソコンの後ろです' (No, it is behind the computer)."
        },
        {
            "scenario": "Parking a car at the supermarket.",
            "question": "男の人はどこに車を止めますか。",
            "transcript": "男の人：車はいっぱいです。どこに止めますか。\n女の人：あ、あそこが空いていますよ。入り口の右側です。\n男の人：入り口の左ですね。\n女の人：いいえ、右です。",
            "correctAnswer": "入り口の右側",
            "distractors": ["入り口の左側", "入り口の前", "スーパーの後ろ"],
            "explanation": "The woman corrects him: 'いいえ、右です' (No, it is on the right of the entrance)."
        },
        {
            "scenario": "Hanging a calendar.",
            "question": "カレンダーはどこにかけますか。",
            "transcript": "女の人：このカレンダー、どこにかけましょうか。\n男の人：時計の下にかけてください。\n女の人：時計の隣じゃなくて、下ですね。\n男の人：はい、そうです。",
            "correctAnswer": "時計の下",
            "distractors": ["時計の隣", "時計の上", "ドアの隣"],
            "explanation": "The man confirms '時計の下にかけてください' (Please hang it below the clock)."
        },
        {
            "scenario": "Meeting someone at the station.",
            "question": "女の人はどこで待ちますか。",
            "transcript": "女の人：もしもし、今駅に着きました。どこに行きますか。\n男の人：北口（きたぐち）を出て、タクシー乗り場で待っていてください。\n女の人：南口（みなみぐち）のタクシー乗り場ですか。\n男の人：いいえ、北口です。",
            "correctAnswer": "北口のタクシー乗り場",
            "distractors": ["南口のタクシー乗り場", "北口のバス乗り場", "駅の中"],
            "explanation": "The man specifies '北口を出て、タクシー乗り場で待っていてください' (Go out the North Exit and wait at the taxi stand)."
        },
        {
            "scenario": "Putting a wet umbrella away.",
            "question": "傘はどこに置きますか。",
            "transcript": "男の人：雨がひどいですね。この傘、玄関（げんかん）の中に置きますか。\n女の人：いいえ、外に置いてください。ドアの左側にありますから。\n男の人：外の左側ですね。わかりました。",
            "correctAnswer": "外の、ドアの左側",
            "distractors": ["中の、ドアの左側", "外の、ドアの右側", "外の、ドアの前"],
            "explanation": "The woman instructs '外に置いてください。ドアの左側にありますから' (Outside, on the left side of the door)."
        },
        {
            "scenario": "A child looks for an eraser.",
            "question": "消しゴムはどこにありますか。",
            "transcript": "男の子：お母さん、消しゴムがないよ。\nお母さん：机の引き出しの中は？\n男の子：ないよ。\nお母さん：あ、床（ゆか）に落ちているわよ。机の下よ。",
            "correctAnswer": "机の下の床",
            "distractors": ["机の引き出しの中", "机の上", "カバンの中"],
            "explanation": "The mother spots it '床に落ちているわよ。机の下よ' (It's fallen on the floor. Under the desk)."
        },
        {
            "scenario": "Looking for a teacher in the staff room.",
            "question": "田中先生の席はどこですか。",
            "transcript": "女の学生：すみません。田中先生の席はどこですか。\n男の先生：田中先生は、入り口のすぐ隣の席ですよ。左側です。\n女の学生：入り口の左ですね。ありがとうございます。",
            "correctAnswer": "入り口の左の隣の席",
            "distractors": ["入り口の右の隣の席", "部屋の奥の席", "窓の隣の席"],
            "explanation": "The teacher states '入り口のすぐ隣の席ですよ。左側です' (Right next to the entrance. Left side)."
        },
        {
            "scenario": "Finding an ATM.",
            "question": "ATMはどこですか。",
            "transcript": "男の人：すみません。このコンビニにATMはありますか。\n店の人：はい。お弁当（べんとう）の後ろにありますよ。\n男の人：お弁当の隣ですか。\n店の人：いいえ、お弁当の後ろです。",
            "correctAnswer": "お弁当の後ろ",
            "distractors": ["お弁当の隣", "レジの後ろ", "入り口の隣"],
            "explanation": "The staff explicitly corrects him to 'いいえ、お弁当の後ろです' (No, it is behind the bento boxes)."
        },
        {
            "scenario": "Placing a houseplant.",
            "question": "植物（しょくぶつ）はどこに置きますか。",
            "transcript": "女の人：この花、どこに置く？テレビの隣？\n男の人：うーん、ソファの隣のほうがいいよ。\n女の人：そうね。じゃあ、ソファの隣に置くわ。",
            "correctAnswer": "ソファの隣",
            "distractors": ["テレビの隣", "ソファの上", "窓の前"],
            "explanation": "They decide on the man's suggestion: 'ソファの隣のほうがいいよ' (Next to the sofa is better)."
        },
        {
            "scenario": "A man looks for his train ticket.",
            "question": "切符はどこにありましたか。",
            "transcript": "男の人：あ、電車の切符がない！財布（さいふ）の中に入れたのに。\n女の人：ポケットは？\n男の人：ないよ。\n女の人：あ、カバンの外のポケットに入っているよ。\n男の人：あ、本当だ。",
            "correctAnswer": "カバンの外のポケットの中",
            "distractors": ["財布の中", "ズボンのポケットの中", "机の上"],
            "explanation": "The woman finds it 'カバンの外のポケットに入っているよ' (It's in the outside pocket of your bag)."
        },
        {
            "scenario": "Finding a friend in a photo.",
            "question": "木村さんはどの人ですか。",
            "transcript": "男の人：木村さんはどの人ですか。一番背が低い人ですか。\n女の人：いいえ、木村さんは一番背が高い人ですよ。\n男の人：左に立っている人ですか。\n女の人：はい、そうです。",
            "correctAnswer": "一番背が高くて、左に立っている人",
            "distractors": ["一番背が低くて、左に立っている人", "一番背が高くて、右に立っている人", "座っている人"],
            "explanation": "Kimura is the tallest (一番背が高い) and standing on the left (左に立っている)."
        },
        {
            "scenario": "Asking for the restroom in a department store.",
            "question": "トイレはどこですか。",
            "transcript": "女の人：すみません。トイレはどこですか。\n店の人：トイレは階段（かいだん）の左側にありますよ。\n女の人：階段の右側ですか。\n店の人：いいえ、左側です。",
            "correctAnswer": "階段の左側",
            "distractors": ["階段の右側", "エレベーターの左側", "エレベーターの右側"],
            "explanation": "The staff corrects her to 'いいえ、左側です' (No, it is on the left side of the stairs)."
        },
        {
            "scenario": "Looking for milk in the fridge.",
            "question": "牛乳（ぎゅうにゅう）はどこですか。",
            "transcript": "男の人：牛乳はどこですか。\n女の人：冷蔵庫の中ですよ。一番上の段（だん）です。\n男の人：一番下ですか。\n女の人：いいえ、一番上ですよ。",
            "correctAnswer": "冷蔵庫の一番上の段",
            "distractors": ["冷蔵庫の一番下の段", "冷蔵庫の真ん中の段", "テーブルの上"],
            "explanation": "The woman confirms '一番上ですよ' (It is the very top)."
        },
        {
            "scenario": "Finding the shoe store in a mall.",
            "question": "靴屋（くつや）はどこですか。",
            "transcript": "男の人：靴屋に行きたいです。どこですか。\n女の人：このエスカレーターを上がって、3階へ行ってください。靴屋は3階の右の奥（おく）です。\n男の人：3階の右の奥ですね。ありがとうございます。",
            "correctAnswer": "3階の右の奥",
            "distractors": ["2階の右の奥", "3階の左の奥", "1階の右の奥"],
            "explanation": "The woman instructs '3階へ行ってください。靴屋は3階の右の奥です' (Go to the 3rd floor. The shoe store is in the back right of the 3rd floor)."
        },
        {
            "scenario": "Putting a coat away.",
            "question": "コートはどこにしまいますか。",
            "transcript": "男の人：このコート、クローゼットにしまいますね。シャツの隣でいいですか。\n女の人：いいえ、シャツの隣じゃなくて、スーツの隣にかけてください。\n男の人：スーツの隣ですね。わかりました。",
            "correctAnswer": "クローゼットの、スーツの隣",
            "distractors": ["クローゼットの、シャツの隣", "ベッドの上", "椅子の後ろ"],
            "explanation": "The woman specifies 'シャツの隣じゃなくて、スーツの隣にかけてください'."
        },
        {
            "scenario": "Looking for a book in a library.",
            "question": "英語の辞書（じしょ）はどこですか。",
            "transcript": "女の学生：英語の辞書はどこにありますか。\n男の人：あちらの2番の本棚（ほんだな）の、真ん中の段（だん）にありますよ。\n女の学生：2番の真ん中ですね。ありがとうございます。",
            "correctAnswer": "2番の本棚の真ん中の段",
            "distractors": ["1番の本棚の真ん中の段", "2番の本棚の一番上の段", "2番の本棚の一番下の段"],
            "explanation": "The librarian says '2番の本棚の、真ん中の段にありますよ' (Bookcase 2, middle shelf)."
        },
        {
            "scenario": "Asking for directions to the drugstore.",
            "question": "薬屋（くすりや）はどこですか。",
            "transcript": "男の人：すみません。薬屋はどこですか。\n女の人：この道をまっすぐ行って、郵便局を右に曲がってください。そうすると左側にあります。\n男の人：郵便局を右に曲がって、左ですね。",
            "correctAnswer": "郵便局を右に曲がって、左側",
            "distractors": ["郵便局を左に曲がって、左側", "郵便局を右に曲がって、右側", "まっすぐ行って、左側"],
            "explanation": "The woman explains '郵便局を右に曲がってください。そうすると左側にあります'."
        },
        {
            "scenario": "Organizing the genkan (entrance).",
            "question": "靴はどこに置きますか。",
            "transcript": "女の人：靴は靴箱（くつばこ）に入れますか。\n男の人：いいえ、まだ濡れていますから、玄関（げんかん）の右の端（はし）に置いてください。\n女の人：右の端ですね。わかりました。",
            "correctAnswer": "玄関の右の端",
            "distractors": ["靴箱の中", "玄関の左の端", "玄関の真ん中"],
            "explanation": "The man instructs '玄関の右の端に置いてください' (Please place them on the right edge of the genkan)."
        },
        {
            "scenario": "A driver looks for their car in a lot.",
            "question": "女の人の車はどれですか。",
            "transcript": "男の人：車はどれですか。\n女の人：あの黒い車ですよ。白い車の左の隣です。\n男の人：白い車の右ですか。\n女の人：いいえ、左ですよ。",
            "correctAnswer": "白い車の左の隣の、黒い車",
            "distractors": ["白い車の右の隣の、黒い車", "黒い車の左の隣の、白い車", "赤い車"],
            "explanation": "The woman clarifies her car is '黒い車' and it is '白い車の左の隣です' (Next to the white car on the left)."
        },
        {
            "scenario": "A student looks for a dictionary.",
            "question": "辞書はどこにありますか。",
            "transcript": "男の学生：先生、私の辞書を見ませんでしたか。\n先生：あ、さっき窓の隣の机の上にありましたよ。\n男の学生：窓の隣ですね。見てきます。",
            "correctAnswer": "窓の隣の机の上",
            "distractors": ["ドアの隣の机の上", "先生の机の上", "本棚の中"],
            "explanation": "The teacher states '窓の隣の机の上にありましたよ' (It was on the desk next to the window)."
        },
        {
            "scenario": "Finding a friend in a photo.",
            "question": "伊藤さんはどの人ですか。",
            "transcript": "女の人：伊藤さんはどの人ですか。\n男の人：伊藤さんは白いシャツを着ていますよ。\n女の人：白いシャツの人は2人いますね。右の人ですか。\n男の人：いいえ、左の人ですよ。",
            "correctAnswer": "白いシャツを着て、左にいる人",
            "distractors": ["白いシャツを着て、右にいる人", "黒いシャツを着て、左にいる人", "真ん中にいる人"],
            "explanation": "Ito wears a white shirt (白いシャツ) and is on the left (左の人)."
        },
        {
            "scenario": "A student asks where to put the chair.",
            "question": "椅子はどこに置きますか。",
            "transcript": "女の学生：この椅子、どこに置きますか。\n先生：教室の後ろに置いてください。本棚の隣です。\n女の学生：本棚の右ですか、左ですか。\n先生：右に置いてください。",
            "correctAnswer": "教室の後ろで、本棚の右の隣",
            "distractors": ["教室の後ろで、本棚の左の隣", "教室の前で、本棚の右の隣", "机の隣"],
            "explanation": "The teacher specifies '教室の後ろ...本棚の隣' and confirms '右に置いてください' (On the right)."
        },
        {
            "scenario": "Hanging a clock in the office.",
            "question": "時計はどこにかけますか。",
            "transcript": "男の人：新しい時計はどこにかけましょうか。\n女の人：ドアの上にしましょう。\n男の人：ドアの上はカレンダーがありますよ。\n女の人：あ、そうですね。じゃあ、窓の上にしましょう。",
            "correctAnswer": "窓の上",
            "distractors": ["ドアの上", "カレンダーの隣", "黒板の上"],
            "explanation": "After realizing the calendar is above the door, the woman says 'じゃあ、窓の上にしましょう' (Then, let's do above the window)."
        },
        {
            "scenario": "A child asks where the cat went.",
            "question": "猫はどこにいますか。",
            "transcript": "男の子：タマがいない。ソファの下かな。\nお母さん：ソファの下にはいないわよ。あ、見て。ソファの上で寝ているわ。\n男の子：あ、本当だ。",
            "correctAnswer": "ソファの上",
            "distractors": ["ソファの下", "ベッドの上", "テレビの後ろ"],
            "explanation": "The mother points out 'ソファの上で寝ているわ' (Sleeping on the sofa)."
        },
        {
            "scenario": "Looking for the meeting room.",
            "question": "会議室はどこですか。",
            "transcript": "女の人：すみません。会議室はどこですか。\n男の人：この廊下（ろうか）をまっすぐ行ってください。右側にあります。\n女の人：右側ですね。階段の隣ですか。\n男の人：はい、そうです。",
            "correctAnswer": "廊下をまっすぐ行って、右側の階段の隣",
            "distractors": ["廊下をまっすぐ行って、左側の階段の隣", "階段の向かい", "エレベーターの隣"],
            "explanation": "The man confirms it is '右側にあります' and '階段の隣ですか' is answered with 'はい、そうです'."
        },
        {
            "scenario": "Parking a bicycle at school.",
            "question": "自転車はどこに止めますか。",
            "transcript": "男の学生：先生、自転車はどこに止めますか。\n先生：自転車は食堂（しょくどう）の後ろに止めてください。\n男の学生：食堂の隣ですか。\n先生：いいえ、後ろです。",
            "correctAnswer": "食堂の後ろ",
            "distractors": ["食堂の隣", "食堂の前", "体育館の後ろ"],
            "explanation": "The teacher corrects him to clarify 'いいえ、後ろです' (No, it is behind)."
        },
        {
            "scenario": "Looking for a lost smartphone.",
            "question": "スマートフォンはどこにありましたか。",
            "transcript": "女の人：あ、スマートフォンがない。机の上に置いたのに。\n男の人：机の上にはないよ。あ、椅子の下に落ちているよ。\n女の人：あ、本当だ。ありがとう。",
            "correctAnswer": "椅子の下",
            "distractors": ["机の上", "机の下", "カバンの中"],
            "explanation": "The man finds it '椅子の下に落ちているよ' (It has fallen under the chair)."
        },
        {
            "scenario": "Asking for directions to the post office.",
            "question": "郵便局はどこですか。",
            "transcript": "男の人：すみません。郵便局はどこですか。\n女の人：あの橋（はし）を渡って、すぐ右に曲がってください。そうすると左側にあります。\n男の人：橋を渡って右に曲がり、左側ですね。",
            "correctAnswer": "橋を渡って右に曲がり、左側",
            "distractors": ["橋を渡って左に曲がり、右側", "橋を渡らないで右に曲がる", "まっすぐ行って左側"],
            "explanation": "The woman instructs 'あの橋を渡って、すぐ右に曲がってください。そうすると左側にあります'."
        },
        {
            "scenario": "Looking for sugar in a restaurant.",
            "question": "砂糖（さとう）はどこにありますか。",
            "transcript": "男の人：コーヒーの砂糖はどこですか。\n店の人：あちらのテーブルの上にあります。コップの隣です。\n男の人：コップの右ですか、左ですか。\n店の人：右です。",
            "correctAnswer": "テーブルの上の、コップの右の隣",
            "distractors": ["テーブルの上の、コップの左の隣", "レジの隣", "コップの中"],
            "explanation": "The staff specifies 'コップの隣です' and '右です'."
        },
        {
            "scenario": "Putting a new poster on the bulletin board.",
            "question": "ポスターはどこに貼りますか。",
            "transcript": "女の人：このポスター、掲示板（けいじばん）のどこに貼りましょうか。\n男の人：真ん中に貼ってください。\n女の人：時間割（じかんわり）の上ですか。\n男の人：いいえ、時間割の下です。",
            "correctAnswer": "掲示板の真ん中で、時間割の下",
            "distractors": ["掲示板の真ん中で、時間割の上", "掲示板の右の端", "ドアの隣"],
            "explanation": "The man specifies '真ん中に貼ってください' and '時間割の下です' (Below the schedule)."
        },
        {
            "scenario": "Finding a friend in a photo.",
            "question": "渡辺さんはどの人ですか。",
            "transcript": "男の人：渡辺さんはどの人ですか。\n女の人：渡辺さんは座っている人ですよ。\n男の人：座っている人は2人います。右の人ですか。\n女の人：いいえ、左の人です。",
            "correctAnswer": "座っていて、左にいる人",
            "distractors": ["座っていて、右にいる人", "立っていて、左にいる人", "真ん中で立っている人"],
            "explanation": "Watanabe is sitting (座っている人) on the left (左の人)."
        },
        {
            "scenario": "Putting luggage in a coin locker.",
            "question": "荷物はどこに入れますか。",
            "transcript": "女の人：荷物をロッカーに入れますね。上の段（だん）でいいですか。\n男の人：上の段は重いですから、下の段にしましょう。\n女の人：わかりました。下の段ですね。",
            "correctAnswer": "ロッカーの下の段",
            "distractors": ["ロッカーの上の段", "ロッカーの真ん中の段", "椅子の下"],
            "explanation": "The man suggests '下の段にしましょう' (Let's do the bottom row)."
        },
        {
            "scenario": "Looking for coffee beans.",
            "question": "コーヒーはどこにありますか。",
            "transcript": "男の人：コーヒーを飲みたいですが、コーヒーはどこですか。\n女の人：台所（だいどころ）の棚（たな）にありますよ。\n男の人：お茶の隣ですか。\n女の人：いいえ、紅茶（こうちゃ）の隣です。",
            "correctAnswer": "棚の中で、紅茶の隣",
            "distractors": ["棚の中で、お茶の隣", "冷蔵庫の中", "テーブルの上"],
            "explanation": "The woman clarifies 'いいえ、紅茶の隣です' (No, it is next to the black tea)."
        },
        {
            "scenario": "Finding the taxi stand at the station.",
            "question": "タクシー乗り場はどこですか。",
            "transcript": "女の人：すみません。タクシー乗り場はどこですか。\n男の人：タクシー乗り場は、駅を出て、バス乗り場の向かいにあります。\n女の人：バス乗り場の隣ですか。\n男の人：いいえ、道を挟んで（はさんで）向かいです。",
            "correctAnswer": "バス乗り場の向かい",
            "distractors": ["バス乗り場の隣", "バス乗り場の後ろ", "駅の中"],
            "explanation": "The man specifies 'バス乗り場の向かいにあります' (It is opposite the bus stand)."
        },
        {
            "scenario": "A child asks where their hat is.",
            "question": "帽子はどこにありますか。",
            "transcript": "男の子：お母さん、僕の帽子どこ？\nお母さん：カバンの中にあるわよ。\n男の子：ないよ。\nお母さん：あ、ごめん。椅子の後ろに落ちていたわ。",
            "correctAnswer": "椅子の後ろ",
            "distractors": ["カバンの中", "机の上", "ベッドの下"],
            "explanation": "The mother realizes her mistake: 'あ、ごめん。椅子の後ろに落ちていたわ' (Sorry, it had fallen behind the chair)."
        },
        {
            "scenario": "Looking for scissors in the office.",
            "question": "はさみはどこにありますか。",
            "transcript": "男の人：すみません。はさみはどこにありますか。\n女の人：一番上の引き出しに入っていますよ。\n男の人：一番下ですか。\n女の人：いいえ、一番上です。",
            "correctAnswer": "一番上の引き出しの中",
            "distractors": ["一番下の引き出しの中", "真ん中の引き出しの中", "机の上"],
            "explanation": "The woman corrects him to 'いいえ、一番上です' (No, it is the very top)."
        },
        {
            "scenario": "Asking for directions to the park.",
            "question": "公園はどこですか。",
            "transcript": "女の人：公園はどこですか。\n男の人：この道をまっすぐ行って、最初の信号（しんごう）を右に曲がります。そうすると左側にあります。\n女の人：最初の信号を右に曲がって、左側ですね。",
            "correctAnswer": "最初の信号を右に曲がって、左側",
            "distractors": ["最初の信号を左に曲がって、右側", "2番目の信号を右に曲がって、左側", "まっすぐ行って左側"],
            "explanation": "The man instructs '最初の信号を右に曲がります。そうすると左側にあります'."
        },
        {
            "scenario": "A teacher asks to move a desk.",
            "question": "机はどこに置きますか。",
            "transcript": "先生：この机を移動（いどう）してください。窓の前に置きますか。\n学生：いいえ、先生の机の隣に置いてください。\n先生：右ですか、左ですか。\n学生：左に置いてください。",
            "correctAnswer": "先生の机の左の隣",
            "distractors": ["先生の机の右の隣", "窓の前", "ドアの隣"],
            "explanation": "The student specifies '先生の机の隣' and '左に置いてください'."
        },
        {
            "scenario": "Looking for a DVD.",
            "question": "DVDはどこにありましたか。",
            "transcript": "男の人：昨日借りたDVDがないよ。\n女の人：テレビの下の箱の中じゃない？\n男の人：あ、箱の中にはないけど、箱の後ろに落ちていたよ。\n女の人：よかったわね。",
            "correctAnswer": "テレビの下の箱の後ろ",
            "distractors": ["テレビの下の箱の中", "テレビの上", "テレビの隣"],
            "explanation": "The man finds it '箱の後ろに落ちていたよ' (It had fallen behind the box)."
        },
        {
            "scenario": "Finding a friend in a photo.",
            "question": "小林さんはどの人ですか。",
            "transcript": "女の人：この写真の小林さんはどの人ですか。\n男の人：小林さんはカバンを持っていますよ。\n女の人：カバンを持っている人は2人いますね。座っている人ですか。\n男の人：いいえ、立っている人です。",
            "correctAnswer": "カバンを持って、立っている人",
            "distractors": ["カバンを持って、座っている人", "カバンを持たないで、立っている人", "真ん中の人"],
            "explanation": "Kobayashi is holding a bag (カバンを持っています) and is standing (立っている人)."
        }
    ]
};