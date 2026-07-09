"use client";
import { motion } from "motion/react";
import { ArrowRight, Send } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Minimal bg — faqat bitta subtle gradient, dot grid YO'Q */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 30%, rgba(21,112,239,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto max-w-[1200px] px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-8 items-center min-h-[calc(100vh-80px)]">

          {/* LEFT COLUMN - copy */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <span
                className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(21,112,239,0.12)",
                  border: "1px solid rgba(21,112,239,0.25)",
                  color: "#53A3E9",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#53A3E9] animate-pulse" />
                Kargo CRM & Automation
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[1.0] mb-6 text-white"
            >
              Kargo biznesi
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #53A3E9 0%, #1570EF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                raqamlashadi.
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-white/60 leading-relaxed mb-10 max-w-md"
            >
              Telegram&#8209;bot mijozlaringizga, admin&#8209;panel jamoangizga.
              Trek, to&apos;lov, yetkazish — Xitoydan O&apos;zbekistongacha.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3 mb-12"
            >
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white transition-colors duration-200 hover:bg-[#175CD3]"
                style={{
                  background: "#1570EF",
                  boxShadow:
                    "0 1px 2px rgba(0,0,0,0.3), 0 0 0 1px rgba(21,112,239,0.5)",
                }}
              >
                Demo so&apos;rash
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </a>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-white/70 hover:text-white transition-colors duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <Send size={14} />
                Botni sinab ko&apos;rish
              </a>
            </motion.div>

            {/* 3 fact strip — statik, count-up emas */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center gap-6 pt-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              {[
                { val: "50+", label: "kompaniya" },
                { val: "100K+", label: "jo'natma" },
                { val: "3 daq", label: "sozlash" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-xl font-bold text-white">{s.val}</p>
                  <p className="text-xs text-white/40 mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN - product visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Main card — track code display */}
            <div
              className="w-full rounded-2xl overflow-hidden"
              style={{
                background: "#111827",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow:
                  "0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(21,112,239,0.1)",
              }}
            >
              {/* Header bar */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FFBD2E" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }} />
                </div>
                <span className="text-xs text-white/30 mx-auto font-mono">
                  admin.cargosoft.uz — Buyurtmalar
                </span>
              </div>

              {/* Table */}
              <div className="p-0">
                {/* Table header */}
                <div
                  className="grid px-5 py-2.5 text-[11px] font-medium text-white/30 uppercase tracking-wider"
                  style={{
                    gridTemplateColumns: "1fr 1.2fr 1fr 0.7fr",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span>Trek kodi</span>
                  <span>Mijoz</span>
                  <span>Status</span>
                  <span className="text-right">Vazn</span>
                </div>

                {/* Rows */}
                {[
                  {
                    code: "CZ‑88421",
                    name: "Alisher T.",
                    status: "Yo’lda",
                    statusColor: "#F79009",
                    kg: "3.2 kg",
                    active: true,
                  },
                  {
                    code: "CZ‑88415",
                    name: "Dilnoza R.",
                    status: "Omborda",
                    statusColor: "#1570EF",
                    kg: "1.8 kg",
                    active: false,
                  },
                  {
                    code: "CZ‑88401",
                    name: "Jasur M.",
                    status: "Yetkazildi",
                    statusColor: "#17B26A",
                    kg: "5.1 kg",
                    active: false,
                  },
                  {
                    code: "CZ‑88398",
                    name: "Kamola A.",
                    status: "Qabul",
                    statusColor: "#53A3E9",
                    kg: "2.4 kg",
                    active: false,
                  },
                  {
                    code: "CZ‑88390",
                    name: "Bobur N.",
                    status: "Yetkazildi",
                    statusColor: "#17B26A",
                    kg: "7.0 kg",
                    active: false,
                  },
                ].map((row) => (
                  <div
                    key={row.code}
                    className="grid px-5 py-3.5 text-sm transition-colors"
                    style={{
                      gridTemplateColumns: "1fr 1.2fr 1fr 0.7fr",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                      background: row.active
                        ? "rgba(21,112,239,0.06)"
                        : "transparent",
                    }}
                  >
                    <span
                      className="font-mono text-[13px] font-semibold"
                      style={{ color: "#53A3E9" }}
                    >
                      {row.code}
                    </span>
                    <span className="text-white/70 text-[13px]">{row.name}</span>
                    <span>
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{
                          background: `${row.statusColor}18`,
                          color: row.statusColor,
                        }}
                      >
                        {row.status === "Yo’lda" && (
                          <span
                            className="w-1 h-1 rounded-full animate-pulse"
                            style={{ background: row.statusColor }}
                          />
                        )}
                        {row.status}
                      </span>
                    </span>
                    <span className="text-white/40 text-[13px] text-right">
                      {row.kg}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer bar */}
              <div
                className="flex items-center justify-between px-5 py-3"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <span className="text-xs text-white/30">247 ta natija</span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3].map((n) => (
                    <button
                      key={n}
                      className="w-6 h-6 rounded text-xs flex items-center justify-center transition-colors"
                      style={{
                        background:
                          n === 1 ? "rgba(21,112,239,0.2)" : "transparent",
                        color: n === 1 ? "#53A3E9" : "rgba(255,255,255,0.4)",
                      }}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating notification card */}
            <div
              className="absolute -bottom-4 -left-8 rounded-xl px-4 py-3 flex items-center gap-3"
              style={{
                background: "#111827",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                minWidth: "220px",
              }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm"
                style={{ background: "rgba(23,178,106,0.15)" }}
              >
                📦
              </div>
              <div>
                <p className="text-xs font-semibold text-white">
                  CZ&#8209;88401 yetib keldi
                </p>
                <p className="text-[11px] text-white/40 mt-0.5">
                  Yetkazildi • az oldin
                </p>
              </div>
              <div
                className="w-1.5 h-1.5 rounded-full ml-auto"
                style={{ background: "#17B26A" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
