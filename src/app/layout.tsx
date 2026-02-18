import type { Metadata } from "next";
import { Inter, Cinzel, Ramabhadra } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
// const ramabhadra = Ramabhadra({
//   weight: "400",
//   subsets: ["telugu"],
//   variable: "--font-ramabhadra",
// });

export const metadata: Metadata = {
  metadataBase: new URL('https://jssr-eta.vercel.app'),
  title: {
    default: "Jyosyabhatla Sundara Sitha Ramanjaneyulu | Vedic Priest | Hindu Rituals Expert | Hindu Priest | Priest | Purohit",
    template: "%s | JSSR Priest"
  },
  description: "Professional Vedic Priest services by Jyosyabhatla Sundara Sitha Ramanjaneyulu. Expert in Hindu rituals, poojas, homams, and ceremonies in Telugu tradition.",
  keywords: ["Priest", "Purohit", "Vedic Rituals", "Hindu Ceremonies", "Telugu Priest", "Pooja", "Homam", "Wedding Priest", "Gruhapravesam", "Jyosyabhatla Sundara Sitha Ramanjaneyulu", "Jyosyabhatla Sundara Sitha Ramanjaneyulu Priest", "Jyosyabhatla Sundara Sitha Ramanjaneyulu Purohit", "Jyosyabhatla Sundara Sitha Ramanjaneyulu Vedic Priest", "Jyosyabhatla Sundara Sitha Ramanjaneyulu Hindu Priest", "Jyosyabhatla Sundara Sitha Ramanjaneyulu Hindu Rituals Expert", "Jyosyabhatla Sundara Sitha Ramanjaneyulu Hindu Ceremonies", "Jyosyabhatla Sundara Sitha Ramanjaneyulu Telugu Priest", "Jyosyabhatla Sundara Sitha Ramanjaneyulu Pooja", "Jyosyabhatla Sundara Sitha Ramanjaneyulu Homam", "Jyosyabhatla Sundara Sitha Ramanjaneyulu Wedding Priest", "Jyosyabhatla Sundara Sitha Ramanjaneyulu Gruhapravesam", "Jyosyabhatla Sundara Sitha Ramanjaneyulu", "Jyosyabhatla Sundara Sitha Ramanjaneyulu Priest", "Jyosyabhatla Sundara Sitha Ramanjaneyulu Purohit", "Jyosyabhatla Sundara Sitha Ramanjaneyulu Vedic Priest", "Jyosyabhatla Sundara Sitha Ramanjaneyulu Hindu Priest", "Jyosyabhatla Sundara Sitha Ramanjaneyulu Hindu Rituals Expert", "Jyosyabhatla Sundara Sitha Ramanjaneyulu Hindu Ceremonies", "Jyosyabhatla Sundara Sitha Ramanjaneyulu Telugu Priest", "Jyosyabhatla Sundara Sitha Ramanjaneyulu Pooja", "Jyosyabhatla Sundara Sitha Ramanjaneyulu Homam", "Jyosyabhatla Sundara Sitha Ramanjaneyulu Wedding Priest", "Jyosyabhatla Sundara Sitha Ramanjaneyulu Gruhapravesam"],
  authors: [{ name: "Jyosyabhatla Sundara Sitha Ramanjaneyulu" }],
  creator: "Jyosyabhatla Sundara Sitha Ramanjaneyulu",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jssr-eta.vercel.app",
    title: "Jyosyabhatla Sundara Sitha Ramanjaneyulu | Vedic Priest | Purohit | Hindu Rituals Expert | Hindu Priest | Priest | Hindu Ceremonies | Telugu Priest | Pooja | Homam | Wedding Priest | Gruhapravesam | Jyosyabhatla Sundara Sitha Ramanjaneyulu | Jyosyabhatla Sundara Sitha Ramanjaneyulu Priest | Jyosyabhatla Sundara Sitha Ramanjaneyulu Purohit | Jyosyabhatla Sundara Sitha Ramanjaneyulu Vedic Priest | Jyosyabhatla Sundara Sitha Ramanjaneyulu Hindu Priest | Jyosyabhatla Sundara Sitha Ramanjaneyulu Hindu Rituals Expert | Jyosyabhatla Sundara Sitha Ramanjaneyulu Hindu Ceremonies | Jyosyabhatla Sundara Sitha Ramanjaneyulu Telugu Priest | Jyosyabhatla Sundara Sitha Ramanjaneyulu Pooja | Jyosyabhatla Sundara Sitha Ramanjaneyulu Homam | Jyosyabhatla Sundara Sitha Ramanjaneyulu Wedding Priest | Jyosyabhatla Sundara Sitha Ramanjaneyulu Gruhapravesam | Jyosyabhatla Sundara Sitha Ramanjaneyulu | Jyosyabhatla Sundara Sitha Ramanjaneyulu Priest | Jyosyabhatla Sundara Sitha Ramanjaneyulu Purohit | Jyosyabhatla Sundara Sitha Ramanjaneyulu Vedic Priest | Jyosyabhatla Sundara Sitha Ramanjaneyulu Hindu Priest | Jyosyabhatla Sundara Sitha Ramanjaneyulu Hindu Rituals Expert | Jyosyabhatla Sundara Sitha Ramanjaneyulu Hindu Ceremonies | Jyosyabhatla Sundara Sitha Ramanjaneyulu Telugu Priest | Jyosyabhatla Sundara Sitha Ramanjaneyulu Pooja | Jyosyabhatla Sundara Sitha Ramanjaneyulu Homam | Jyosyabhatla Sundara Sitha Ramanjaneyulu Wedding Priest | Jyosyabhatla Sundara Sitha Ramanjaneyulu Gruhapravesam",
    description: "Professional Vedic Priest services for all Hindu rituals and ceremonies.",
    siteName: "JSSR Priest Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jyosyabhatla Sundara Sitha Ramanjaneyulu | Vedic Priest | Purohit | Hindu Rituals Expert | Hindu Priest | Priest | Hindu Ceremonies | Telugu Priest | Pooja | Homam | Wedding Priest | Gruhapravesam | Jyosyabhatla Sundara Sitha Ramanjaneyulu | Jyosyabhatla Sundara Sitha Ramanjaneyulu Priest | Jyosyabhatla Sundara Sitha Ramanjaneyulu Purohit | Jyosyabhatla Sundara Sitha Ramanjaneyulu Vedic Priest | Jyosyabhatla Sundara Sitha Ramanjaneyulu Hindu Priest | Jyosyabhatla Sundara Sitha Ramanjaneyulu Hindu Rituals Expert | Jyosyabhatla Sundara Sitha Ramanjaneyulu Hindu Ceremonies | Jyosyabhatla Sundara Sitha Ramanjaneyulu Telugu Priest | Jyosyabhatla Sundara Sitha Ramanjaneyulu Pooja | Jyosyabhatla Sundara Sitha Ramanjaneyulu Homam | Jyosyabhatla Sundara Sitha Ramanjaneyulu Wedding Priest | Jyosyabhatla Sundara Sitha Ramanjaneyulu Gruhapravesam | Jyosyabhatla Sundara Sitha Ramanjaneyulu | Jyosyabhatla Sundara Sitha Ramanjaneyulu Priest | Jyosyabhatla Sundara Sitha Ramanjaneyulu Purohit | Jyosyabhatla Sundara Sitha Ramanjaneyulu Vedic Priest | Jyosyabhatla Sundara Sitha Ramanjaneyulu Hindu Priest | Jyosyabhatla Sundara Sitha Ramanjaneyulu Hindu Rituals Expert | Jyosyabhatla Sundara Sitha Ramanjaneyulu Hindu Ceremonies | Jyosyabhatla Sundara Sitha Ramanjaneyulu Telugu Priest | Jyosyabhatla Sundara Sitha Ramanjaneyulu Pooja | Jyosyabhatla Sundara Sitha Ramanjaneyulu Homam | Jyosyabhatla Sundara Sitha Ramanjaneyulu Wedding Priest | Jyosyabhatla Sundara Sitha Ramanjaneyulu Gruhapravesam",
    description: "Professional Vedic Priest services by Jyosyabhatla Sundara Sitha Ramanjaneyulu. Expert in Hindu rituals, poojas, homams, and ceremonies in Telugu tradition.",
    creator: "@jssr_priest", // Placeholder, user can update
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { LanguageProvider } from "@/components/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          inter.variable,
          cinzel.variable,
          // ramabhadra.variable,
          "min-h-screen bg-neutral-50 font-sans text-neutral-900 antialiased"
        )}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
