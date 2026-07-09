import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cargosoft — Kargo logistika platformasi",
  description:
    "Xitoy → O'zbekiston kargo kompaniyalari uchun to'liq raqamli platforma. Telegram bot, admin panel, real-time treking, onlayn to'lov.",
  keywords: ["cargo", "logistika", "uzbekistan", "china", "telegram bot", "tracking"],
  openGraph: {
    title: "Cargosoft — Kargo logistika platformasi",
    description:
      "Xitoy → O'zbekiston kargo kompaniyalari uchun to'liq raqamli platforma.",
    type: "website",
    locale: "uz_UZ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" className={`${inter.variable} dark`}>
      <body className="antialiased bg-bg-base text-white min-h-full">
        {children}
      </body>
    </html>
  );
}
