"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-6 py-24">
            <div className="max-w-md w-full text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-32 h-32 mx-auto"
                >
                    <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse" />
                    <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-primary/20">
                        <span className="text-4xl font-serif font-bold text-primary">404</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="space-y-4"
                >
                    <h2 className="text-3xl font-serif font-bold text-neutral-900">
                        Page Not Found
                    </h2>
                    <p className="text-neutral-600">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto px-6 py-3 rounded-lg border border-neutral-200 text-neutral-600 font-medium hover:bg-white hover:shadow-sm transition-all flex items-center justify-center gap-2 group"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        Go Back
                    </button>
                    <Link
                        href="/"
                        className="w-full sm:w-auto px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                    >
                        <Home size={18} />
                        Back to Home
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
