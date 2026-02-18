"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
    const { t } = useLanguage();

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-50 px-6 pt-20"
        >
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[100px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent/20 blur-[80px]" />
            </div>

            <div className="container mx-auto text-center z-10 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-secondary uppercase bg-secondary/10 rounded-full">
                        {t.hero.greeting}
                    </span>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 leading-tight text-neutral-900">
                        {t.hero.title}
                    </h1>

                    <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                        {t.hero.description}
                    </p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="#contact"
                            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-primary rounded-full overflow-hidden transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                {t.hero.cta}
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </span>
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
            >
                <div className="w-6 h-10 border-2 border-neutral-300 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-neutral-400 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};
