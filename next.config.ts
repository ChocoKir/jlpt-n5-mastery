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

    // 🚀 NEW: Proxy rule to catch and redirect the incorrectly mangled CDN paths
    async rewrites() {
        return [
            {
                // This matches the exact path the browser is requesting
                // (e.g., https://jlpt-n5-mastery.vercel.app/cdn.jsdelivr.net/...)
                source: '/cdn.jsdelivr.net/npm/kuromoji@0.1.2/dict/:path*',
                // And forwards it to the actual CDN source
                destination: 'https://cdn.jsdelivr.net/npm/kuromoji@0.1.2/dict/:path*',
            },
        ];
    },
};

export default withPWA(nextConfig);