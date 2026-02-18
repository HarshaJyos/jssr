import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#FF9933", // Saffron
                    dark: "#CC7A29",
                    light: "#FFA366",
                },
                secondary: {
                    DEFAULT: "#800000", // Maroon
                    dark: "#660000",
                    light: "#993333",
                },
                accent: {
                    DEFAULT: "#FFD700", // Gold
                    dark: "#CCAC00",
                    light: "#FFE066",
                },
                neutral: {
                    50: "#FFFBF0", // Cream
                    100: "#F7F3E8",
                    200: "#E6E2D6",
                    800: "#2D2D2D",
                    900: "#1A1A1A", // Dark Charcoal
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                serif: ["var(--font-cinzel)", "serif"],
                telugu: ["var(--font-ramabhadra)", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
