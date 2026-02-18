"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { RefreshCcw, AlertTriangle } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-6 py-24">
            <div className="max-w-md w-full text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-24 h-24 mx-auto bg-red-50 rounded-full flex items-center justify-center border-4 border-red-100"
                >
                    <AlertTriangle size={48} className="text-red-500" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="space-y-4"
                >
                    <h2 className="text-3xl font-serif font-bold text-neutral-900">
                        Something went wrong!
                    </h2>
                    <p className="text-neutral-600">
                        We apologize for the inconvenience. An unexpected error has occurred.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <button
                        onClick={() => reset()}
                        className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mx-auto"
                    >
                        <RefreshCcw size={18} />
                        Try again
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
