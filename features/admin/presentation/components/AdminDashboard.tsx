"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { generateQuestionAI, QuestionType } from '@/features/admin/application/actions/generate-question.action';
import { AdminService } from '@/features/admin/application/services/admin.service';
import { Card } from '@/shared/ui/Card';
import { Button } from '@/shared/ui/Button';
import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { Trash2, Edit3, Sparkles, Database, Code, Save, RefreshCw, Zap } from 'lucide-react';

import { SEED_DATA } from '@/shared/data/seed-data';

const COLLECTIONS: { type: QuestionType, db: string, label: string }[] = [
    { type: 'vocab', db: 'vocab_words', label: 'Vocabulary' },
    { type: 'context', db: 'kanji_context', label: 'Kanji Context' },
    { type: 'star', db: 'star_questions', label: 'Syntax Star' },
    { type: 'grammar', db: 'grammar_rules', label: 'Grammar Rules' },
    { type: 'reading', db: 'reading_passages', label: 'Reading' },
    { type: 'listening', db: 'listening_questions', label: 'Listening' },
    { type: 'speaking', db: 'speaking_questions', label: 'Speaking' },
    { type: 'cloze', db: 'cloze_passages', label: 'Cloze Passages' },
    { type: 'info', db: 'info_retrieval', label: 'Info Retrieval' },
    { type: 'synonym', db: 'synonym_questions', label: 'Synonyms' },
    { type: 'chat', db: 'grammar_chats', label: 'Pragmatics Chat' },
    { type: 'hotspot', db: 'spatial_listening', label: 'Spatial Audio' }
];

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState<'ai' | 'manual' | 'database'>('ai');

    const [isGenerating, setIsGenerating] = useState(false);
    const [previewData, setPreviewData] = useState<any | null>(null);
    const [currentType, setCurrentType] = useState<QuestionType>('vocab');
    const [bulkProgress, setBulkProgress] = useState(0);
    const [bulkTotal, setBulkTotal] = useState(0);

    const [manualCollection, setManualCollection] = useState('vocab_words');
    const [manualJson, setManualJson] = useState('{\n  \n}');

    const [dbItems, setDbItems] = useState<any[]>([]);
    const [isLoadingDb, setIsLoadingDb] = useState(false);
    const [selectedDbCollection, setSelectedDbCollection] = useState('vocab_words');

    const getCollectionName = (type: QuestionType) => COLLECTIONS.find(c => c.type === type)?.db || 'unknown';

    const handleGenerate = async (type: QuestionType) => {
        setIsGenerating(true);
        setCurrentType(type);
        setPreviewData(null);
        try {
            const data = await generateQuestionAI(type);
            setPreviewData(data);
            toast.success("Draft generated successfully.");
        } catch (error) {
            toast.error("AI Generation failed. Check rate limits.");
        }
        setIsGenerating(false);
    };

    const handleSaveAIPreview = async () => {
        if (!previewData) return;
        const colName = getCollectionName(currentType);
        const success = await AdminService.saveQuestionToDatabase(colName, previewData);
        if (success) {
            toast.success("✅ Content pushed live to Firestore!");
            setPreviewData(null);
        } else {
            toast.error("❌ Failed to save to database.");
        }
    };

    const handleBulkGenerate = async (type: QuestionType, count: number = 100) => {
        if (!confirm(`Are you sure you want to let the AI Forge generate ${count} unique items? This respects the Free Tier but takes 15 minutes.`)) return;

        setIsGenerating(true);
        setCurrentType(type);
        setBulkTotal(count);
        setBulkProgress(0);

        const colName = getCollectionName(type);
        let successCount = 0;

        for (let i = 0; i < count; i++) {
            try {
                setBulkProgress(i + 1);
                const data = await generateQuestionAI(type);
                await AdminService.saveQuestionToDatabase(colName, data);
                successCount++;

                if (i < count - 1) await sleep(8000);
            } catch (error) {
                console.error(`Failed on item ${i + 1}`, error);
                toast.error(`Rate limit hit on item ${i + 1}. Cooldown engaged...`);
                await sleep(15000);
            }
        }

        setIsGenerating(false);
        setBulkProgress(0);
        setBulkTotal(0);

        if (successCount === count) {
            toast.success(`Bulk complete! Pushed all ${successCount} unique items. 🎉`);
        } else {
            toast.warning(`Partial success. Pushed ${successCount}/${count} items before the session terminated.`);
        }
    };

    const handleNuclearSeed = async () => {
        if (!confirm("☢️ WARNING: This will blast 1,200 mock items (100 per category) into your live Firestore database using seed-data.ts. Proceed?")) return;

        setIsGenerating(true);
        let totalInjected = 0;
        const TARGET_PER_CATEGORY = 100;

        try {
            for (const [collectionName, items] of Object.entries(SEED_DATA)) {
                toast.info(`Flooding ${collectionName} with ${TARGET_PER_CATEGORY} items...`);

                let injectedForCollection = 0;
                let multiplier = 0;

                while (injectedForCollection < TARGET_PER_CATEGORY) {
                    for (const item of items) {
                        if (injectedForCollection >= TARGET_PER_CATEGORY) break;

                        // 🛠️ THE FIX: Cast as `any` to prevent TypeScript Union property errors
                        const clonedItem: any = { ...item };

                        if (multiplier > 0) {
                            if (clonedItem.word) clonedItem.word = `${clonedItem.word} (v${multiplier})`;
                            if (clonedItem.question) clonedItem.question = `${clonedItem.question} (v${multiplier})`;
                            if (clonedItem.passage) clonedItem.passage = `${clonedItem.passage} (v${multiplier})`;
                            if (clonedItem.englishPhrase) clonedItem.englishPhrase = `${clonedItem.englishPhrase} (v${multiplier})`;
                            if (clonedItem.transcript) clonedItem.transcript = `${clonedItem.transcript} (v${multiplier})`;
                            if (clonedItem.originalSentence) clonedItem.originalSentence = `${clonedItem.originalSentence} (v${multiplier})`;
                        }

                        await AdminService.saveQuestionToDatabase(collectionName, clonedItem);
                        injectedForCollection++;
                        totalInjected++;
                    }
                    multiplier++;
                }
            }
            toast.success(`🚀 BOOM! Successfully injected ${totalInjected} items into the database!`);
        } catch (error) {
            console.error("Seeding failed:", error);
            toast.error("Seeding sequence interrupted.");
        } finally {
            setIsGenerating(false);
        }
    };

    const handleSaveManual = async () => {
        try {
            const parsedData = JSON.parse(manualJson);
            const success = await AdminService.saveQuestionToDatabase(manualCollection, parsedData);
            if (success) {
                toast.success("✅ Manual entry saved successfully!");
                setManualJson('{\n  \n}');
            } else {
                toast.error("Database save failed.");
            }
        } catch (e) {
            toast.error("❌ Invalid JSON format. Please check your syntax.");
        }
    };

    const fetchDatabaseItems = async (collectionName: string) => {
        setIsLoadingDb(true);
        const items = await AdminService.fetchQuestionsFromDatabase(collectionName);
        setDbItems(items);
        setIsLoadingDb(false);
    };

    useEffect(() => {
        if (activeTab === 'database') {
            void fetchDatabaseItems(selectedDbCollection);
        }
    }, [activeTab, selectedDbCollection]);

    const handleDeleteItem = async (id: string) => {
        if (!confirm("Are you sure you want to permanently delete this item?")) return;
        const success = await AdminService.deleteQuestionFromDatabase(selectedDbCollection, id);
        if (success) {
            toast.success("Item deleted.");
            setDbItems(prev => prev.filter(item => item.id !== id));
        } else {
            toast.error("Failed to delete item.");
        }
    };

    return (
        <div className="max-w-6xl mx-auto py-10 px-5 animate-in fade-in duration-500 relative z-10">
            <div className="mb-10 text-center relative">
                <h1 className="text-4xl sm:text-5xl font-black text-indigo-500 mb-3 drop-shadow-sm tracking-tight flex items-center justify-center gap-4">
                    <Database size={40} /> Admin CMS
                </h1>
                <p className="text-muted font-bold tracking-widest uppercase text-sm">Content Management System</p>

                <Button
                    onClick={handleNuclearSeed}
                    disabled={isGenerating}
                    className="absolute top-0 right-0 bg-red-600 hover:bg-red-700 text-white font-black shadow-[0_0_20px_rgba(220,38,38,0.5)] border-none hidden sm:flex items-center gap-2"
                >
                    <Zap size={18} /> SEED 1,200 ITEMS
                </Button>
            </div>

            <div className="flex bg-card/60 backdrop-blur-md border-2 border-border/50 rounded-2xl p-2 mb-8 shadow-sm">
                <button onClick={() => setActiveTab('ai')} className={`flex-1 py-3 px-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-all ${activeTab === 'ai' ? 'bg-indigo-500 text-white shadow-md' : 'text-muted hover:text-primary hover:bg-background/50'}`}>
                    <Sparkles size={18} /> AI Forge
                </button>
                <button onClick={() => setActiveTab('manual')} className={`flex-1 py-3 px-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-all ${activeTab === 'manual' ? 'bg-orange-500 text-white shadow-md' : 'text-muted hover:text-primary hover:bg-background/50'}`}>
                    <Edit3 size={18} /> Manual Editor
                </button>
                <button onClick={() => setActiveTab('database')} className={`flex-1 py-3 px-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-all ${activeTab === 'database' ? 'bg-rose-500 text-white shadow-md' : 'text-muted hover:text-primary hover:bg-background/50'}`}>
                    <Database size={18} /> Live Database
                </button>
            </div>

            <AnimatePresence mode="wait">
                {activeTab === 'ai' && (
                    <motion.div key="ai" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <SpotlightCard className="p-8 border-t-8 border-indigo-500 bg-card/60 backdrop-blur-md">
                                <h3 className="text-xl font-black text-primary mb-2">1. Draft Single Item</h3>
                                <p className="text-sm font-bold text-muted mb-6">Review the Gemini AI output before pushing.</p>
                                <div className="flex flex-wrap gap-2">
                                    {COLLECTIONS.map(c => (
                                        <button key={`s_${c.type}`} onClick={() => handleGenerate(c.type)} disabled={isGenerating} className="px-4 py-2 bg-background border-2 border-border/50 hover:border-indigo-500 rounded-lg text-sm font-bold text-primary transition-colors disabled:opacity-50">
                                            {c.label}
                                        </button>
                                    ))}
                                </div>
                            </SpotlightCard>

                            <SpotlightCard className="p-8 border-t-8 border-rose-500 bg-rose-500/5 backdrop-blur-md">
                                <h3 className="text-xl font-black text-rose-500 mb-2">2. Deep Forge Pipeline</h3>
                                <p className="text-sm font-bold text-rose-500/70 mb-6">Slowly generate 100 <span className="font-black">UNIQUE</span> AI items over 15 minutes.</p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                    {COLLECTIONS.map(c => (
                                        <button key={`b_${c.type}`} onClick={() => handleBulkGenerate(c.type, 100)} disabled={isGenerating} className="px-3 py-2 bg-rose-500 text-white rounded-lg text-xs font-black shadow-sm hover:bg-rose-600 transition-colors disabled:opacity-50">
                                            100x {c.label}
                                        </button>
                                    ))}
                                </div>
                            </SpotlightCard>
                        </div>

                        {isGenerating && bulkTotal > 0 && (
                            <div className="text-center py-10 animate-pulse bg-card/50 rounded-3xl border border-border/50">
                                <h3 className="text-xl font-black text-primary mb-4 flex items-center justify-center gap-2"><RefreshCw className="animate-spin text-indigo-500" /> Forging Content...</h3>
                                <div className="max-w-md mx-auto">
                                    <ProgressBar current={bulkProgress} total={bulkTotal} colorClass="bg-indigo-500" />
                                </div>
                                <p className="text-xs text-muted font-bold mt-4 uppercase tracking-widest">
                                    {bulkProgress} / {bulkTotal} Generated<br/>
                                    Throttled for API safety. Do not close this tab.
                                </p>
                            </div>
                        )}

                        {previewData && !isGenerating && bulkTotal === 0 && (
                            <Card className="p-8 border-4 border-indigo-500 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full bg-indigo-500 text-white text-center py-1 font-black uppercase tracking-widest text-xs">Unsaved Draft Preview</div>
                                <pre className="mt-8 bg-slate-900 text-green-400 p-6 rounded-xl overflow-x-auto text-sm font-mono whitespace-pre-wrap">
                                    {JSON.stringify(previewData, null, 2)}
                                </pre>
                                <div className="flex gap-4 mt-6">
                                    <Button onClick={handleSaveAIPreview} className="flex-1 py-6 bg-green-500 hover:bg-green-600 border-none">Approve & Push Live 🚀</Button>
                                    <Button onClick={() => setPreviewData(null)} variant="secondary" className="flex-1 py-6 border-2">Discard Draft</Button>
                                </div>
                            </Card>
                        )}
                    </motion.div>
                )}

                {activeTab === 'manual' && (
                    <motion.div key="manual" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                        <SpotlightCard className="p-8 border-t-8 border-orange-500 bg-card/60 backdrop-blur-md">
                            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                <div className="flex-1">
                                    <label className="block text-xs font-black text-muted uppercase tracking-widest mb-2">Target Collection</label>
                                    <select
                                        value={manualCollection}
                                        onChange={(e) => setManualCollection(e.target.value)}
                                        className="w-full p-4 rounded-xl bg-background border-2 border-border/50 text-primary font-bold outline-none focus:border-orange-500"
                                    >
                                        {COLLECTIONS.map(c => <option key={c.db} value={c.db}>{c.db} ({c.label})</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block text-xs font-black text-muted uppercase tracking-widest mb-2 flex items-center gap-2"><Code size={14} /> JSON Payload</label>
                                <textarea
                                    value={manualJson}
                                    onChange={(e) => setManualJson(e.target.value)}
                                    className="w-full h-80 p-6 rounded-xl bg-slate-900 text-green-400 font-mono text-sm border-2 border-border/50 outline-none focus:border-orange-500 resize-y"
                                    placeholder='{\n  "question": "..."\n}'
                                />
                            </div>
                            <Button onClick={handleSaveManual} className="w-full py-6 bg-orange-500 hover:bg-orange-600 border-none text-white font-black text-xl shadow-lg">
                                <Save size={20} className="mr-2" /> Save to Database
                            </Button>
                        </SpotlightCard>
                    </motion.div>
                )}

                {activeTab === 'database' && (
                    <motion.div key="database" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                        <SpotlightCard className="p-8 border-t-8 border-rose-500 bg-card/60 backdrop-blur-md">
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
                                <h3 className="text-xl font-black text-primary">Live Database Viewer</h3>
                                <select
                                    value={selectedDbCollection}
                                    onChange={(e) => setSelectedDbCollection(e.target.value)}
                                    className="p-3 rounded-xl bg-background border-2 border-border/50 text-primary font-bold outline-none focus:border-rose-500 min-w-[200px]"
                                >
                                    {COLLECTIONS.map(c => <option key={`dbview_${c.db}`} value={c.db}>{c.label}</option>)}
                                </select>
                            </div>

                            {isLoadingDb ? (
                                <div className="text-center py-10 animate-pulse text-muted font-black uppercase tracking-widest">Loading Records...</div>
                            ) : dbItems.length === 0 ? (
                                <div className="text-center py-10 text-muted font-bold">No records found in {selectedDbCollection}.</div>
                            ) : (
                                <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                                    {dbItems.map((item: any) => (
                                        <div key={item.id} className="p-4 bg-background border border-border/50 rounded-xl flex items-start justify-between gap-4 group hover:border-rose-500/50 transition-colors">
                                            <div className="flex-1 overflow-hidden">
                                                <p className="text-xs font-mono text-muted mb-1 truncate">ID: {item.id}</p>
                                                <p className="text-sm font-bold text-primary line-clamp-2">
                                                    {item.word || item.question || item.passage || item.transcript || item.originalSentence || item.title || JSON.stringify(item).substring(0, 50)}
                                                </p>
                                            </div>
                                            <button onClick={() => handleDeleteItem(item.id)} className="p-3 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-lg transition-colors outline-none shrink-0">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </SpotlightCard>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ProgressBar = ({ current, total, colorClass }: { current: number, total: number, colorClass: string }) => (
    <div className="w-full bg-slate-200 dark:bg-slate-800 h-4 rounded-full overflow-hidden">
        <div className={`h-full transition-all duration-300 ${colorClass}`} style={{ width: `${(current / total) * 100}%` }} />
    </div>
);