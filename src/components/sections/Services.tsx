"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";
import { Flame, Star, Sun, Heart, Home, BookOpen } from "lucide-react";

export const Services = () => {
    const { t } = useLanguage();

    const icons = [
        Flame, // Ganapathi Homam
        Sun,   // Rudrabhishekam
        Star,  // Satyanarayana Vratam
        Home,  // Vastu Shanti
        Sun,   // Navagraha Shanti
        Heart, // Vivaham
        Flame, // Chandi Homam
        Sun,   // Surya Namaskaram
        BookOpen, // Sundarakanda Parayana
    ];

    return (
        <section id="services" className="py-20 bg-neutral-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4"
                    >
                        {t.services.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-neutral-600 max-w-2xl mx-auto"
                    >
                        {t.services.subtitle}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.services.items.map((service, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-100 group hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold font-serif mb-3 text-neutral-900">
                                    {service.title}
                                </h3>
                                <p className="text-neutral-600 leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
