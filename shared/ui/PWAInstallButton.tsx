"use client";

import React, { useState, useEffect } from 'react';

// Extend the global WindowEventMap to support the non-standard PWA install prompt event safely in TypeScript
interface BeforeInstallPromptEvent extends Event {
    readonly platforms: Array<string>;
    readonly userChoice: Promise<{
        outcome: 'accepted' | 'dismissed';
        platform: string;
    }>;
    prompt(): Promise<void>;
}

export const PWAInstallButton = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [isInstallable, setIsInstallable] = useState(false);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e: Event) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            // Stash the event so it can be triggered later.
            setDeferredPrompt(e as BeforeInstallPromptEvent);
            // Update UI notify the user they can install the PWA
            setIsInstallable(true);
        };

        const handleAppInstalled = () => {
            // Hide the utility button once successfully installed
            setIsInstallable(false);
            setDeferredPrompt(null);
            console.log('Sensei AI was successfully installed!');
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        window.addEventListener('appinstalled', handleAppInstalled);

        // Check if already in standalone mode (already installed and running)
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setIsInstallable(false);
        }

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
            window.removeEventListener('appinstalled', handleAppInstalled);
        };
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;

        // Show the native browser install prompt
        await deferredPrompt.prompt();

        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
            // Clear the saved prompt since it can only be used once
            setIsInstallable(false);
            setDeferredPrompt(null);
        }
    };

    // If the browser doesn't support it, or it's already installed, render nothing
    if (!isInstallable) return null;

    return (
        <button
            onClick={handleInstallClick}
            className="flex items-center gap-2 px-4 py-2 font-japanese text-sm font-bold tracking-wide rounded-xl border border-accent/30 bg-accent/10 hover:bg-accent text-foreground hover:text-white transition-all duration-300 shadow-lg backdrop-blur-md active:scale-95 cursor-pointer"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4 animate-bounce"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            アプリをインストール (Install App)
        </button>
    );
};