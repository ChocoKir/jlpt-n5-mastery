"use client";

import React, { useEffect, useState } from 'react';
import Kuroshiro from 'kuroshiro';
import KuromojiAnalyzer from 'kuroshiro-analyzer-kuromoji';

// Global singletons for initialization
let kuroshiroInstance: Kuroshiro | null = null;
let initPromise: Promise<void> | null = null;

// 🚀 NEW: Global cache to prevent duplicate NLP processing
// This stores the PROMISE so simultaneous renders share the exact same calculation
const conversionCache = new Map<string, Promise<string>>();

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
                // 1. Ensure global dictionary initialization
                if (!kuroshiroInstance) {
                    kuroshiroInstance = new Kuroshiro();
                    initPromise = kuroshiroInstance.init(
                        new KuromojiAnalyzer({
                            dictPath: "https://cdn.jsdelivr.net/npm/kuromoji@0.1.2/dict/"
                        })
                    );
                }

                if (initPromise) {
                    await initPromise;
                }

                if (kuroshiroInstance) {
                    // 2. Check if we are already processing this exact string
                    if (!conversionCache.has(children)) {
                        // If not, start the conversion and cache the PROMISE immediately
                        const convertTask = kuroshiroInstance.convert(children, {
                            mode: "furigana",
                            to: "hiragana"
                        });
                        conversionCache.set(children, convertTask);
                    }

                    // 3. Await the cached promise (whether created by this component or another)
                    const result = await conversionCache.get(children)!;

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