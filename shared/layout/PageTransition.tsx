"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    return (
        <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            // 🚨 We completely REMOVE the 'exit' prop so it doesn't fight the View Transitions API!
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-full h-full"
        >
            {children}
        </motion.div>
    );
};