"use client";

import React, { useEffect, useState } from 'react';
import Kuroshiro from 'kuroshiro';
// @ts-ignore
import KuromojiAnalyzer from 'kuroshiro-analyzer-kuromoji';

// 🛠️ THE FIX: Add a global Promise lock
let kuroshiroInstance: any = null;
let initPromise: Promise<void> | null = null;

export const FuriganaText = ({ children, className = "" }: { children: string, className?: string }) => {
    const [html, setHtml] = useState<string>(children);
    const [isParsing, setIsParsing] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const parseText = async () => {
            try {
                // 1. If it doesn't exist, create the instance AND the lock
                // Inside your useEffect
                if (!kuroshiroInstance) {
                    kuroshiroInstance = new Kuroshiro();
                    initPromise = kuroshiroInstance.init(new KuromojiAnalyzer({
                        // Add the slash here!
                        dictPath: "https://cdn.jsdelivr.net/npm/kuromoji@0.1.2/dict/"
                    }));
                }

                // 2. ALL components must wait for the global lock to resolve
                // before trying to translate anything.
                if (initPromise) {
                    await initPromise;
                }

                // 3. Now it is 100% safe to parse
                const result = await kuroshiroInstance.convert(children, {
                    mode: "furigana",
                    to: "hiragana"
                });

                if (isMounted) {
                    setHtml(result);
                    setIsParsing(false);
                }
            } catch (error) {
                console.error("NLP Parse Error:", error);
                if (isMounted) setIsParsing(false);
            }
        };

        void parseText();
        return () => { isMounted = false; };
    }, [children]);

    return (
        <span
            className={`font-japanese transition-opacity duration-500 ${isParsing ? 'opacity-50 blur-[1px]' : 'opacity-100'} ${className}`}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
};