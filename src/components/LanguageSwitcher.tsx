"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2 bg-secondary-light/10 p-1 rounded-full border border-secondary/20">
            <button
                onClick={() => setLanguage("te")}
                className={cn(
                    "relative px-3 py-1 text-sm font-medium rounded-full transition-all duration-300",
                    language === "te"
                        ? "text-white"
                        : "text-secondary hover:text-secondary-dark"
                )}
            >
                {language === "te" && (
                    <motion.div
                        layoutId="activeLang"
                        className="absolute inset-0 bg-secondary rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                )}
                <span className="relative z-10 font-telugu">తెలుగు</span>
            </button>

            <button
                onClick={() => setLanguage("en")}
                className={cn(
                    "relative px-3 py-1 text-sm font-medium rounded-full transition-all duration-300",
                    language === "en"
                        ? "text-white"
                        : "text-secondary hover:text-secondary-dark"
                )}
            >
                {language === "en" && (
                    <motion.div
                        layoutId="activeLang"
                        className="absolute inset-0 bg-secondary rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                )}
                <span className="relative z-10 font-serif">English</span>
            </button>
        </div>
    );
};
