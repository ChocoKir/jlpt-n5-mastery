import Kuroshiro from 'kuroshiro';
import KuromojiAnalyzer from 'kuroshiro-analyzer-kuromoji';

// 1. Initialize the analyzer with the CORRECT absolute path
const analyzer = new KuromojiAnalyzer({
    dictPath: "https://cdn.jsdelivr.net/npm/kuromoji@0.1.2/dict/"
});

// 2. Initialize Kuroshiro
const kuroshiro = new Kuroshiro();
await kuroshiro.init(analyzer);