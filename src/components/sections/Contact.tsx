"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";
import { Phone, Mail, MapPin, Send, Check } from "lucide-react";

export const Contact = () => {
    const { t } = useLanguage();
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        // Rate limiting check
        const lastSubmitted = localStorage.getItem("lastContactFormSubmission");
        if (lastSubmitted) {
            const timeSinceLastSubmission = Date.now() - parseInt(lastSubmitted);
            if (timeSinceLastSubmission < 60000) { // 1 minute cooldown
                setError("Please wait a moment before sending another request.");
                setIsSubmitting(false);
                return;
            }
        }

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch("https://formspree.io/f/xkovzgwv", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSuccess(true);
                localStorage.setItem("lastContactFormSubmission", Date.now().toString());
            } else {
                const data = await response.json();
                if (Object.hasOwn(data, 'errors')) {
                    setError(data["errors"].map((error: any) => error["message"]).join(", "));
                } else {
                    setError("Oops! There was a problem submitting your form");
                }
            }
        } catch (error) {
            setError("Oops! There was a problem submitting your form");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4"
                    >
                        {t.contact.title}
                    </motion.h2>
                    <p className="text-neutral-600">{t.contact.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 h-full">
                            <h3 className="text-xl font-bold font-serif mb-6 text-neutral-900">
                                Contact Details
                            </h3>

                            <div className="space-y-6">
                                <a
                                    href="tel:+917680030769"
                                    className="flex items-center gap-4 text-neutral-600 hover:text-primary transition-colors group"
                                >
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-neutral-100 group-hover:border-primary/20">
                                        <Phone size={20} className="text-primary" />
                                    </div>
                                    <span>+91 7680030769</span>
                                </a>

                                <a
                                    href="mailto:contact@example.com"
                                    className="flex items-center gap-4 text-neutral-600 hover:text-primary transition-colors group"
                                >
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-neutral-100 group-hover:border-primary/20">
                                        <Mail size={20} className="text-primary" />
                                    </div>
                                    <span>jssr@gmail.com</span>
                                </a>

                                <div className="flex items-center gap-4 text-neutral-600 group">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-neutral-100">
                                        <MapPin size={20} className="text-primary" />
                                    </div>
                                    <span>Mandapeta, Andhra Pradesh, India</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {isSuccess ? (
                            <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 h-full flex flex-col items-center justify-center text-center space-y-4">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                                    <Check size={32} className="text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold font-serif text-neutral-900">Request Submitted!</h3>
                                <p className="text-neutral-600">
                                    Thank you for reaching out. I will get back to you shortly.
                                </p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="mt-4 text-primary font-semibold hover:underline"
                                >
                                    Send another request
                                </button>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-4 bg-neutral-50 p-8 rounded-2xl border border-neutral-100"
                            >
                                {error && (
                                    <div className="p-4 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                                        {error}
                                    </div>
                                )}
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                                        {t.contact.form.name}
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white"
                                        placeholder={t.contact.form.name}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                                        {t.contact.form.phone}
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white"
                                        placeholder={t.contact.form.phone}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                                        {t.contact.form.service}
                                    </label>
                                    <select
                                        name="service"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white"
                                    >
                                        <option value="">Select a service</option>
                                        {t.services.items.map((item, idx) => (
                                            <option key={idx} value={item.title}>
                                                {item.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                                        {t.contact.form.message}
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white"
                                        placeholder={t.contact.form.message}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            {t.contact.form.submit}
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
