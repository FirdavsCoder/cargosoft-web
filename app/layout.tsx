import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ParticleNetwork } from "@/components/ui/particle-network";
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
      <body className="antialiased min-h-full" style={{ background: "#0F1729", color: "#fff" }}>

        {/* Particle network — canvas, mouse-interactive */}
        <ParticleNetwork />

        {/* Ambient blobs — subtle color behind particles */}
        <div
          aria-hidden="true"
          style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}
        >
          <div
            className="bg-blob"
            style={{
              position: "absolute",
              width: "900px",
              height: "900px",
              top: "-380px",
              left: "-260px",
              borderRadius: "50%",
              background: "#1570EF",
              filter: "blur(180px)",
              opacity: 0.055,
              animation: "blob-drift-1 28s ease-in-out infinite",
              willChange: "transform",
            }}
          />
          <div
            className="bg-blob"
            style={{
              position: "absolute",
              width: "700px",
              height: "700px",
              top: "20%",
              right: "-220px",
              borderRadius: "50%",
              background: "#175CD3",
              filter: "blur(160px)",
              opacity: 0.045,
              animation: "blob-drift-2 36s ease-in-out infinite",
              willChange: "transform",
            }}
          />
          <div
            className="bg-blob"
            style={{
              position: "absolute",
              width: "580px",
              height: "580px",
              bottom: "-160px",
              left: "28%",
              borderRadius: "50%",
              background: "#53A3E9",
              filter: "blur(150px)",
              opacity: 0.03,
              animation: "blob-drift-3 44s ease-in-out infinite",
              willChange: "transform",
            }}
          />
        </div>

        {/* Page content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          {children}
        </div>

      </body>
    </html>
  );
}
