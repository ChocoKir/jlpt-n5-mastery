// F:\Projects\JLPT-N5\shared\kuroshiro.d.ts

// Change the string below to 'kuroshiro' (exactly how you import it)
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

// Ensure this matches the package name you import for the analyzer
declare module 'kuroshiro-analyzer-kuromoji' {
    export default class KuromojiAnalyzer {
        constructor(options?: { dictPath?: string });
    }
}