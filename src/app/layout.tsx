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
  title: "Priest Portfolio - Jyosyabhatla Sundara Sitha Ramanjaneyulu",
  description: "Vedic Priest Services - Poojas, Homams, and Rituals",
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
