"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";
import { Calendar, Award } from "lucide-react";

export const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    {/* Image Placeholder */}
                    <div className="relative h-[400px] md:h-[500px] bg-neutral-100 rounded-2xl overflow-hidden shadow-xl border-4 border-primary/10">
                        <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                            {/* Placeholder for Priest Image */}
                            <Image
                                src="/about1.png"
                                alt="Priest Image"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    <div className="space-y-6">
                        <span className="text-secondary font-medium tracking-widest uppercase text-sm">
                            {t.nav.about}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900">
                            {t.about.title}
                        </h2>
                        <p className="text-lg text-neutral-600 leading-relaxed font-sans">
                            {t.about.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                            <div className="flex items-start gap-4 p-4 rounded-lg bg-neutral-50 border border-neutral-100 transition-shadow hover:shadow-md">
                                <Calendar className="text-primary w-6 h-6 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg text-neutral-900">20+</h3>
                                    <p className="text-sm text-neutral-500">{t.about.experience}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-lg bg-neutral-50 border border-neutral-100 transition-shadow hover:shadow-md">
                                <Award className="text-primary w-6 h-6 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg text-neutral-900">5000+</h3>
                                    <p className="text-sm text-neutral-500">{t.about.rituals}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
