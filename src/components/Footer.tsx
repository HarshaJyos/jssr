"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";

export const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-neutral-900 text-neutral-400 py-12 border-t border-neutral-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold font-serif text-white mb-2">JSSR</h3>
                        <p className="text-sm">{t.footer.description}</p>
                    </div>

                    <div className="flex gap-6 text-sm">
                        <a href="#home" className="hover:text-primary transition-colors">
                            {t.nav.home}
                        </a>
                        <a href="#about" className="hover:text-primary transition-colors">
                            {t.nav.about}
                        </a>
                        <a href="#services" className="hover:text-primary transition-colors">
                            {t.nav.services}
                        </a>
                        <a href="#contact" className="hover:text-primary transition-colors">
                            {t.nav.contact}
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-sm md:flex md:justify-between md:items-center">
                    <p>&copy; {new Date().getFullYear()} Jyosyabhatla Sundara Sitha Ramanjaneyulu. {t.footer.rights}</p>
                    <p className="mt-2 md:mt-0 opacity-50 text-xs">Designed with devotion</p>
                </div>
            </div>
        </footer>
    );
};
