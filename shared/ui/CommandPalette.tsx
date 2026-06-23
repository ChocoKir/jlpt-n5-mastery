"use client";

import React, { useState, useEffect } from 'react';
import { useTransitionRouter } from 'next-view-transitions';
import { Command } from 'cmdk';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BookA, Speech, X, LayoutDashboard, Swords, Library } from 'lucide-react';

// Import our Single Source of Truth databases
import { N5_VOCAB } from '@/shared/data/vocab';
import { N5_KANJI } from '@/shared/data/kanji';
import { N5_GRAMMAR } from '@/shared/data/grammar';

export const CommandPalette = () => {
    const [open, setOpen] = useState(false);
    const router = useTransitionRouter();

    // Toggle the menu when ⌘K or Ctrl+K is pressed
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        // Listen for the custom event we wired up in the GlobalHeader
        const openHandler = () => setOpen(true);

        document.addEventListener('keydown', down);
        window.addEventListener('open-command-palette', openHandler);

        return () => {
            document.removeEventListener('keydown', down);
            window.removeEventListener('open-command-palette', openHandler);
        };
    }, []);

    // Handle seamless routing
    const runCommand = (command: () => void) => {
        setOpen(false);
        command();
    };

    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] sm:pt-[20vh] px-4">
                    {/* Blurred Background Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 bg-background/80 backdrop-blur-sm"
                    />

                    {/* Command Menu Window */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="relative w-full max-w-2xl bg-card border border-border/60 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden z-[101]"
                    >
                        <Command
                            className="w-full flex flex-col bg-transparent"
                            loop
                        >
                            {/* Search Input Bar */}
                            <div className="flex items-center px-4 py-4 border-b border-border/50 gap-3">
                                <Search className="text-muted shrink-0" size={20} />
                                <Command.Input
                                    autoFocus
                                    placeholder="Search Kanji, Vocab, Grammar, or Pages..."
                                    className="flex-1 bg-transparent text-primary outline-none placeholder:text-muted/60 text-lg font-bold"
                                />
                                <button
                                    onClick={() => setOpen(false)}
                                    className="p-1 rounded-md text-muted hover:text-primary hover:bg-border/50 transition-colors outline-none"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Scrollable Results List */}
                            <Command.List className="max-h-[60vh] overflow-y-auto p-2 overscroll-contain hide-scrollbar">
                                <Command.Empty className="py-10 text-center text-muted font-bold">
                                    No results found in the database. 🥷
                                </Command.Empty>

                                {/* Quick Links */}
                                <Command.Group heading={<div className="px-3 py-2 text-xs font-black text-muted uppercase tracking-widest">Navigation</div>}>
                                    <Command.Item onSelect={() => runCommand(() => router.push('/dashboard'))} className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer aria-selected:bg-accent/10 aria-selected:text-accent outline-none transition-colors text-primary font-bold">
                                        <LayoutDashboard size={18} /> Dashboard
                                    </Command.Item>
                                    <Command.Item onSelect={() => runCommand(() => router.push('/quiz'))} className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer aria-selected:bg-accent/10 aria-selected:text-accent outline-none transition-colors text-primary font-bold">
                                        <Swords size={18} /> The Proving Grounds
                                    </Command.Item>
                                    <Command.Item onSelect={() => runCommand(() => router.push('/study'))} className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer aria-selected:bg-accent/10 aria-selected:text-accent outline-none transition-colors text-primary font-bold">
                                        <Library size={18} /> The Grand Library
                                    </Command.Item>
                                </Command.Group>

                                {/* Kanji Database */}
                                <Command.Group heading={<div className="px-3 py-2 mt-2 text-xs font-black text-rose-500 uppercase tracking-widest">Kanji (漢字)</div>}>
                                    {N5_KANJI.map((item) => (
                                        <Command.Item
                                            key={item.id}
                                            value={`${item.kanji} ${item.meaning} ${item.onyomi.join(' ')} ${item.kunyomi.join(' ')}`}
                                            onSelect={() => runCommand(() => router.push(`/study/kanji/${item.id}`))}
                                            className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer aria-selected:bg-rose-500/10 aria-selected:text-rose-500 outline-none transition-colors group"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-background border border-border/50 flex items-center justify-center font-japanese text-lg font-black shrink-0 group-aria-selected:border-rose-500/50">
                                                {item.kanji}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-bold text-primary group-aria-selected:text-rose-500">{item.meaning}</span>
                                                <span className="text-xs text-muted font-japanese">{item.onyomi.join(', ')} • {item.kunyomi.join(', ')}</span>
                                            </div>
                                        </Command.Item>
                                    ))}
                                </Command.Group>

                                {/* Vocabulary Database */}
                                <Command.Group heading={<div className="px-3 py-2 mt-2 text-xs font-black text-orange-500 uppercase tracking-widest">Vocabulary (語彙)</div>}>
                                    {N5_VOCAB.map((item) => (
                                        <Command.Item
                                            key={item.id}
                                            value={`${item.word} ${item.reading} ${item.meaning}`}
                                            // Routes to Vocab hub (could expand to deep links later)
                                            onSelect={() => runCommand(() => router.push(`/study/vocab`))}
                                            className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer aria-selected:bg-orange-500/10 aria-selected:text-orange-500 outline-none transition-colors group"
                                        >
                                            <BookA className="text-muted shrink-0 group-aria-selected:text-orange-500" size={18} />
                                            <div className="flex flex-col">
                                                <span className="font-bold text-primary font-japanese group-aria-selected:text-orange-500">{item.word} <span className="text-muted text-xs ml-2">({item.reading})</span></span>
                                                <span className="text-xs text-muted">{item.meaning}</span>
                                            </div>
                                        </Command.Item>
                                    ))}
                                </Command.Group>

                                {/* Grammar Database */}
                                <Command.Group heading={<div className="px-3 py-2 mt-2 text-xs font-black text-green-500 uppercase tracking-widest">Grammar (文法)</div>}>
                                    {N5_GRAMMAR.map((item) => (
                                        <Command.Item
                                            key={item.id}
                                            value={`${item.grammar} ${item.meaning} ${item.formation}`}
                                            onSelect={() => runCommand(() => router.push(`/study/grammar`))}
                                            className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer aria-selected:bg-green-500/10 aria-selected:text-green-500 outline-none transition-colors group"
                                        >
                                            <Speech className="text-muted shrink-0 group-aria-selected:text-green-500" size={18} />
                                            <div className="flex flex-col">
                                                <span className="font-bold text-primary font-japanese group-aria-selected:text-green-500">{item.grammar}</span>
                                                <span className="text-xs text-muted">{item.meaning}</span>
                                            </div>
                                        </Command.Item>
                                    ))}
                                </Command.Group>

                            </Command.List>
                        </Command>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};