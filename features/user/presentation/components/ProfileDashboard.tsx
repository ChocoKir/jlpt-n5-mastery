"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { useTransitionRouter } from 'next-view-transitions';
import { useAuth } from '@/features/auth/presentation/hooks/useAuth';
import { UserProfileService } from '@/features/user/application/services/user-profile.service';
import { UserProfileData } from '@/features/user/domain/entities/user-profile.entity';
import { FirebaseGamificationRepository } from '@/features/gamification/infrastructure/firebase/gamification.repository';
import { UserStatsProps } from '@/features/gamification/domain/entities/user-stats.entity';
import { getDueReviews } from '@/features/spaced-repetition/application/services/srs.service';

import Cropper from 'react-easy-crop';

import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { Button } from '@/shared/ui/Button';
import { ProgressBar } from '@/shared/ui/ProgressBar';
import { AnimatedCounter } from '@/shared/ui/AnimatedCounter';

import { StudyHeatmap } from '@/features/heatmap/presentation/StudyHeatmap';
import { Achievements } from '@/features/achievements/presentation/Achievements';

const AVATARS = ['🥷', '🦊', '🐉', '🐱', '🐸', '🐼', '🦉', '🌸'];
const XP_PER_LEVEL = 500;

export const ProfileDashboard = () => {
    const { user, logout } = useAuth();
    const router = useTransitionRouter();

    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    const [profile, setProfile] = useState<UserProfileData>({ displayName: '', avatar: '🥷', dailyGoal: 180 });
    const [stats, setStats] = useState<UserStatsProps | null>(null);
    const [weakWords, setWeakWords] = useState<any[]>([]);

    // Image Cropping States
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

    // Read URL dynamic signal to auto-open edit mode
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('edit') === 'true') {
                setIsEditing(true);
            }
        }
    }, []);

    useEffect(() => {
        if (user === undefined) return;
        if (user === null) {
            router.push('/auth/login');
            return;
        }

        const loadData = async () => {
            try {
                const profileData = await UserProfileService.getProfile(user.uid);
                if (profileData) setProfile(profileData);

                const gamificationRepo = new FirebaseGamificationRepository();
                const userStats = await gamificationRepo.getUserStats(user.uid);

                if (userStats) {
                    setStats(userStats.toJSON());
                } else {
                    setStats({ level: 1, xp: 0, currentStreak: 0 } as UserStatsProps);
                }

                const srsItems = await getDueReviews(user.uid);
                const weakest = srsItems.sort((a, b) => a.easeFactor - b.easeFactor).slice(0, 3);

                const mappedWeaknesses = weakest.map(item => {
                    if (item.payload) {
                        return {
                            display: item.payload.frontPrimary,
                            type: item.payload.typeLabel,
                            meaning: item.payload.backPrimary
                        };
                    }
                    return null;
                }).filter(Boolean);

                setWeakWords(mappedWeaknesses);

            } catch (error) {
                console.error("🚨 FIREBASE FETCH ERROR:", error);
                setStats({ level: 1, xp: 0, currentStreak: 0 } as UserStatsProps);
            }
        };

        void loadData();
    }, [user, router]);

    const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: any) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                setImageSrc(reader.result as string);
            });
            reader.readAsDataURL(file);
        }
    };

    // Fast activation bridge from non-edit layout straight to upload input context
    const handleAvatarClick = (e: React.MouseEvent) => {
        if (!isEditing) {
            e.preventDefault();
            setIsEditing(true);
            setTimeout(() => {
                document.getElementById('avatar-upload-input')?.click();
            }, 100);
        }
    };

    const createCroppedImage = async () => {
        if (!imageSrc || !croppedAreaPixels) return;

        const image = new Image();
        image.src = imageSrc;
        await new Promise((resolve) => (image.onload = resolve));

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = 400;
        canvas.height = 400;

        ctx.drawImage(
            image,
            croppedAreaPixels.x,
            croppedAreaPixels.y,
            croppedAreaPixels.width,
            croppedAreaPixels.height,
            0,
            0,
            400,
            400
        );

        const base64Image = canvas.toDataURL('image/jpeg');
        setProfile({ ...profile, avatar: base64Image });
        setImageSrc(null);
    };

    const handleSave = async () => {
        if (!user) return;
        setIsSaving(true);
        try {
            await UserProfileService.updateProfile(user, profile);
            setIsEditing(false);
        } catch (error) {
            console.error("Update failed:", error);
            alert("Could not update profile.");
        }
        setIsSaving(false);
    };

    const handleLogout = async () => {
        await logout();
        router.push('/auth/login');
    };

    if (!stats) {
        return (
            <div className="flex justify-center items-center py-32 animate-pulse text-sm font-black text-accent uppercase tracking-widest bg-card/60 backdrop-blur-xl border border-border/50 max-w-sm mx-auto rounded-3xl mt-10 shadow-lg">
                <span className="text-2xl mr-3">🥷</span> Synchronizing Data...
            </div>
        );
    }

    const currentLevelXP = stats.xp % XP_PER_LEVEL;
    const isAvatarUrl = profile.avatar.startsWith('data:image') || profile.avatar.startsWith('http');

    return (
        <div className="max-w-6xl mx-auto py-10 px-5 animate-in fade-in duration-500 relative z-10">
            {/* Header */}
            <div className="flex justify-between items-center border-b-2 border-border/50 pb-6 mb-10">
                <h1 className="text-4xl font-black text-primary m-0 tracking-tight">Scholar Profile</h1>
                {!isEditing && (
                    <Button onClick={handleLogout} variant="danger" className="py-3 px-6 text-sm">
                        Log Out
                    </Button>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                {/* PROFILE CARD */}
                <SpotlightCard className="p-8 flex flex-col items-center text-center shadow-lg border-t-8 border-accent h-full" glowColor="rgba(255, 42, 84, 0.15)">

                    {/* 🚀 ALWAYS INTERACTIVE HOVER AVATAR */}
                    <div className="relative w-40 h-40 mb-8 group rounded-full">
                        <div className="w-full h-full flex items-center justify-center bg-background border-4 border-accent rounded-full shadow-inner drop-shadow-md overflow-hidden text-8xl transition-transform group-hover:scale-[0.98]">
                            {isAvatarUrl ? (
                                <img src={profile.avatar} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                profile.avatar
                            )}
                        </div>

                        {/* Hover Overlay - Intercepts interaction gracefully regardless of edit state */}
                        <label
                            onClick={handleAvatarClick}
                            className="absolute inset-0 flex flex-col items-center justify-center bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity rounded-full cursor-pointer z-10 border-4 border-accent/50"
                        >
                            <span className="text-3xl drop-shadow-md mb-1">📷</span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-primary drop-shadow-md">
                                {isEditing ? "Upload" : "Change"}
                            </span>
                            <input
                                id="avatar-upload-input"
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                        </label>
                    </div>

                    {isEditing ? (
                        <div className="w-full text-left animate-in fade-in flex-grow flex flex-col">
                            <label className="block text-sm font-black text-muted uppercase tracking-wider mb-4 text-center">Or Choose Character</label>
                            <div className="flex flex-wrap justify-center gap-3 mb-8">
                                {AVATARS.map(a => (
                                    <button
                                        key={a}
                                        onClick={() => setProfile({ ...profile, avatar: a })}
                                        className={`text-3xl w-14 h-14 flex items-center justify-center rounded-2xl border-2 transition-all duration-200 outline-none ${
                                            profile.avatar === a ? 'bg-accent/10 border-accent scale-110 shadow-md' : 'bg-background border-border hover:border-accent/50'
                                        }`}
                                    >
                                        {a}
                                    </button>
                                ))}
                            </div>

                            <label className="block text-sm font-black text-muted uppercase tracking-wider mt-auto">Display Name</label>
                            <input
                                type="text"
                                value={profile.displayName}
                                onChange={(e) => setProfile({ ...profile, displayName: e.target.value })}
                                className="w-full mt-2 p-4 rounded-xl border-2 border-border/50 bg-background text-primary focus:border-accent outline-none font-bold text-lg transition-colors"
                            />

                            <div className="flex gap-4 mt-8">
                                <Button onClick={handleSave} isLoading={isSaving} className="flex-1 py-4 font-black shadow-[0_0_15px_rgba(255,42,84,0.3)]">
                                    Save Details
                                </Button>
                                <Button onClick={() => setIsEditing(false)} variant="secondary" className="flex-1 py-4 font-bold">
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className="w-full flex flex-col h-full animate-in fade-in flex-grow">
                            <h2 className="text-3xl font-black text-primary m-0 mb-2">{profile.displayName || 'Aspiring Scholar'}</h2>
                            <p className="text-muted font-bold mb-8">{user?.email}</p>

                            <div className="bg-background rounded-2xl p-5 border border-border/50 mt-2 shadow-inner mb-8">
                                <span className="text-xs font-black text-muted uppercase tracking-widest block mb-2">Daily Goal Target</span>
                                <span className="text-3xl font-black text-accent"><AnimatedCounter value={profile.dailyGoal} /> <span className="text-lg text-muted">XP</span></span>
                            </div>

                            <div className="mt-auto">
                                <Button
                                    onClick={() => setIsEditing(true)}
                                    className="w-full py-4 font-black shadow-[0_0_15px_rgba(255,42,84,0.3)]"
                                >
                                    Edit Profile ✏️
                                </Button>
                            </div>
                        </div>
                    )}
                </SpotlightCard>

                {/* STATS CARD */}
                <div className="md:col-span-2 flex flex-col gap-10">
                    <SpotlightCard className="p-10 shadow-lg border-border/50" glowColor="rgba(99, 102, 241, 0.1)">
                        <div className="flex items-end justify-between mb-4">
                            <h2 className="text-5xl font-black text-primary m-0 tracking-tight">Level <AnimatedCounter value={stats.level} /></h2>
                            <span className="text-muted font-black text-sm uppercase tracking-widest"><AnimatedCounter value={currentLevelXP} /> / {XP_PER_LEVEL} XP to Level {stats.level + 1}</span>
                        </div>

                        <ProgressBar current={currentLevelXP} total={XP_PER_LEVEL} className="mb-10 bg-background border border-border/50" />

                        <div className="grid grid-cols-2 gap-6 mb-10">
                            <div className="bg-orange-500/10 border-2 border-orange-500/30 p-6 rounded-2xl flex items-center gap-6 shadow-sm">
                                <div className="text-5xl drop-shadow-md">🔥</div>
                                <div>
                                    <div className="text-4xl font-black text-orange-500 leading-none mb-1"><AnimatedCounter value={stats.currentStreak} /></div>
                                    <div className="text-xs font-black text-orange-500/70 uppercase tracking-widest">Day Streak</div>
                                </div>
                            </div>
                            <div className="bg-indigo-500/10 border-2 border-indigo-500/30 p-6 rounded-2xl flex items-center gap-6 shadow-sm">
                                <div className="text-5xl drop-shadow-md">💎</div>
                                <div>
                                    <div className="text-4xl font-black text-indigo-500 leading-none mb-1"><AnimatedCounter value={stats.xp} /></div>
                                    <div className="text-xs font-black text-indigo-500/70 uppercase tracking-widest">Total XP</div>
                                </div>
                            </div>
                        </div>

                        <div className="border-t-2 border-border/50 pt-8">
                            <h3 className="text-xl font-black text-muted uppercase tracking-wider mb-6">🏅 Milestones</h3>
                            <div className="flex flex-wrap gap-4">
                                <Badge icon="🔥" label="1 Week" earned={stats.currentStreak >= 7} />
                                <Badge icon="🛡️" label="Level 5" earned={stats.level >= 5} />
                                <Badge icon="🌟" label="1K XP" earned={stats.xp >= 1000} />
                            </div>
                        </div>
                    </SpotlightCard>
                </div>
            </div>

            {/* CROPPING MODAL OVERLAY */}
            {imageSrc && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/90 backdrop-blur-md p-5 animate-in fade-in">
                    <div className="relative w-full max-w-md h-96 bg-card rounded-2xl border border-border/50 overflow-hidden mb-6">
                        <Cropper
                            image={imageSrc}
                            crop={crop}
                            zoom={zoom}
                            aspect={1}
                            onCropChange={setCrop}
                            onZoomChange={setZoom}
                            onCropComplete={onCropComplete}
                        />
                    </div>
                    <div className="w-full max-w-md bg-card/50 p-4 rounded-xl border border-border/50 mb-6 flex flex-col gap-2">
                        <span className="text-xs font-black text-muted uppercase tracking-wider">Adjustment Scale</span>
                        <input
                            type="range"
                            value={zoom}
                            min={1}
                            max={3}
                            step={0.1}
                            aria-label="Zoom"
                            onChange={(e) => setZoom(Number(e.target.value))}
                            className="w-full accent-accent bg-background rounded-lg appearance-none h-2"
                        />
                    </div>
                    <div className="flex gap-4 w-full max-w-md">
                        <Button onClick={createCroppedImage} className="flex-1 py-4 font-black">Crop & Confirm ✂️</Button>
                        <Button onClick={() => setImageSrc(null)} variant="secondary" className="flex-1 py-4 font-bold">Cancel</Button>
                    </div>
                </div>
            )}

            {/* WEAKNESSES */}
            <SpotlightCard className="p-10 border-t-8 border-rose-500 shadow-xl bg-gradient-to-b from-rose-50/50 to-transparent dark:from-rose-900/10 mb-10" glowColor="rgba(244, 63, 94, 0.15)">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                    <div>
                        <h2 className="text-3xl font-black text-rose-500 m-0 mb-2 flex items-center gap-3">
                            <span className="text-4xl drop-shadow-md">🎯</span> Target Weaknesses
                        </h2>
                        <p className="text-rose-500/70 font-bold m-0 text-sm uppercase tracking-wider">Identified by your Spaced Repetition data</p>
                    </div>
                    {weakWords.length > 0 && (
                        <Button onClick={() => router.push('/review')} className="mt-6 sm:mt-0 bg-rose-500 hover:bg-rose-600 border-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.3)]">
                            Review Now 🧠
                        </Button>
                    )}
                </div>

                {weakWords.length === 0 ? (
                    <div className="bg-background/50 backdrop-blur-md border-2 border-dashed border-border/50 p-12 rounded-2xl text-center text-muted font-bold text-lg shadow-inner">
                        Take more quizzes to generate weakness analytics!
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {weakWords.map((word, i) => (
                            <div key={i} className="p-6 bg-card border-2 border-rose-500/30 rounded-2xl flex items-center justify-between shadow-sm hover:border-rose-500/60 transition-colors">
                                <div>
                                    <span className="font-black text-primary text-2xl sm:text-3xl block leading-tight mb-3 font-japanese">{word.display}</span>
                                    <span className="text-xs font-black text-rose-500 uppercase tracking-widest bg-rose-500/10 px-2 py-1 rounded-md">{word.type}</span>
                                </div>
                                <span className="font-bold text-muted text-right max-w-[50%]">{word.meaning}</span>
                            </div>
                        ))}
                    </div>
                )}
            </SpotlightCard>

            {/* GAME ENGINES */}
            <div className="space-y-10">
                <StudyHeatmap />
                <Achievements />
            </div>
        </div>
    );
};

const Badge = ({ icon, label, earned }: { icon: string, label: string, earned: boolean }) => (
    <div className={`flex items-center gap-3 px-5 py-3 rounded-2xl font-black transition-all border-2 shadow-sm ${
        earned
            ? 'bg-accent/10 text-accent border-accent/50 shadow-[0_0_15px_rgba(255,42,84,0.1)]'
            : 'bg-background text-muted border-dashed border-border/50 opacity-50 grayscale'
    }`}>
        <span className="text-2xl drop-shadow-sm">{icon}</span>
        <span className="text-sm uppercase tracking-wider">{label}</span>
    </div>
);