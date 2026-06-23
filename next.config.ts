import { NextConfig } from 'next';
import withPWAInit from '@ducanh2912/next-pwa';

const withPWA = withPWAInit({
    dest: "public",
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    disable: process.env.NODE_ENV === "development",
    workboxOptions: {
        disableDevLogs: true,
    },
});

const nextConfig: NextConfig = {
    // 🛠️ FIX: Explicitly silences the Turbopack validation error
    turbopack: {},

    // 🚀 NEW: Rewrite paths for the Kuromoji dictionary
    async rewrites() {
        return [
            {
                source: '/dict/:path*',
                destination: 'https://cdn.jsdelivr.net/npm/kuromoji@0.1.2/dict/:path*',
            },
        ];
    },
};

export default withPWA(nextConfig);