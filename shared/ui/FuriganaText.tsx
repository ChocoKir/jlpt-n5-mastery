"use client";

import React, { useEffect, useState } from 'react';
import Kuroshiro from 'kuroshiro';
import KuromojiAnalyzer from 'kuroshiro-analyzer-kuromoji';

// Global singletons to handle initialization race conditions across multiple components
let kuroshiroInstance: Kuroshiro | null = null;
let initPromise: Promise<void> | null = null;

interface FuriganaTextProps {
    children: string;
    className?: string;
}

export const FuriganaText = ({ children, className = "" }: FuriganaTextProps) => {
    const [html, setHtml] = useState<string>(children);
    const [isParsing, setIsParsing] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const parseText = async () => {
            try {
                // Ensure instance and global initialization promise exist
                if (!kuroshiroInstance) {
                    kuroshiroInstance = new Kuroshiro();
                    initPromise = kuroshiroInstance.init(
                        new KuromojiAnalyzer({
                            dictPath: "https://cdn.jsdelivr.net/npm/kuromoji@0.1.2/dict/"
                        })
                    );
                }

                // Force all instances to wait until the core dictionary is loaded
                if (initPromise) {
                    await initPromise;
                }

                // Safe to convert text now
                if (kuroshiroInstance) {
                    const result = await kuroshiroInstance.convert(children, {
                        mode: "furigana",
                        to: "hiragana"
                    });

                    if (isMounted) {
                        setHtml(result);
                        setIsParsing(false);
                    }
                }
            } catch (error) {
                console.error("NLP Parse Error:", error);
                if (isMounted) {
                    setIsParsing(false);
                }
            }
        };

        void parseText();

        return () => {
            isMounted = false;
        };
    }, [children]);

    return (
        <span
            className={`font-japanese transition-opacity duration-500 ${isParsing ? 'opacity-50 blur-[1px]' : 'opacity-100'} ${className}`}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
};