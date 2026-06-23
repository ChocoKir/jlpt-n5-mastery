declare module 'kuroshiro' {
    export default class Kuroshiro {
        constructor();
        init(analyzer: any): Promise<void>;
        convert(text: string, options?: {
            mode?: 'normal' | 'spaced' | 'okurigana' | 'furigana';
            to?: 'hiragana' | 'katakana' | 'romaji';
            romajiSystem?: 'nippon' | 'passport' | 'hepburn';
        }): Promise<string>;
    }
}

declare module 'kuroshiro-analyzer-kuromoji' {
    export default class KuromojiAnalyzer {
        constructor(options?: { dictPath?: string });
    }
}