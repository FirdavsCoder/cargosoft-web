"use client";
import { motion } from "motion/react";
import { ArrowRight, Send, Package, MapPin, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial blue glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(21,112,239,0.35) 0%, transparent 70%)",
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Route line SVG */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.12]"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#53A3E9" />
              <stop offset="100%" stopColor="#1570EF" />
            </linearGradient>
          </defs>
          <path
            d="M 0 30% Q 25% 45% 50% 55% T 100% 75%"
            stroke="url(#routeGrad)"
            strokeWidth="1.5"
            strokeDasharray="8 6"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto max-w-[1200px] px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase text-accent-text">
              <span className="w-8 h-px bg-accent-text opacity-60" />
              XITOY &rarr; O&apos;ZBEKISTON KARGO PLATFORMASI
              <span className="w-8 h-px bg-accent-text opacity-60" />
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-[-0.02em] mb-6"
          >
            <span className="text-white">Butun kargo jarayoni &mdash;</span>
            <br />
            <span className="text-gradient">bitta tizimda</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed"
          >
            Mijozlar uchun Telegram-bot, jamoa uchun admin-panel: qabul, treking,
            to&apos;lov va yetkazish &mdash; Xitoydan O&apos;zbekistongacha.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent-fill hover:bg-accent-deep text-white font-semibold transition-all duration-200 shadow-lg shadow-accent-fill/25 hover:shadow-accent-fill/40"
            >
              Demo so&apos;rash
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/16 text-white/80 hover:text-white hover:border-white/30 font-medium transition-all duration-200"
            >
              <Send size={15} />
              Botni sinab ko&apos;rish
            </a>
          </motion.div>

          {/* Product visual mockup */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl"
          >
            {/* Admin Panel mockup */}
            <div className="relative glass rounded-2xl overflow-hidden border border-white/10 glow-blue">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/8">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-5 rounded-md bg-white/8 max-w-xs mx-auto flex items-center justify-center">
                    <span className="text-[10px] text-white/40">
                      admin.cargosoft.uz
                    </span>
                  </div>
                </div>
              </div>
              {/* Dashboard UI mockup */}
              <div className="p-6 bg-white/[0.02]">
                <div className="grid grid-cols-4 gap-3 mb-4">
                  {[
                    { label: "Jo'natmalar", value: "1,247", color: "#1570EF" },
                    { label: "Faol mijozlar", value: "384", color: "#17B26A" },
                    { label: "Oylik tushum", value: "$12,480", color: "#7A5AF8" },
                    { label: "Kutayotgan", value: "23", color: "#F79009" },
                  ].map((stat) => (
                    <div key={stat.label} className="glass rounded-xl p-3">
                      <p className="text-[10px] text-white/50 mb-1">
                        {stat.label}
                      </p>
                      <p className="text-lg font-bold text-white">{stat.value}</p>
                      <div className="mt-2 h-1 rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full"
                          style={{ width: "65%", background: stat.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                {/* Table rows */}
                <div className="glass rounded-xl overflow-hidden">
                  <div className="grid grid-cols-4 gap-4 px-4 py-2 text-[10px] text-white/40 border-b border-white/8">
                    <span>Trek kodi</span>
                    <span>Mijoz</span>
                    <span>Status</span>
                    <span>Vazn</span>
                  </div>
                  {[
                    {
                      code: "CZ88421",
                      name: "Alisher T.",
                      status: "Yo'lda",
                      statusColor: "#F79009",
                      kg: "3.2 kg",
                    },
                    {
                      code: "CZ88415",
                      name: "Dilnoza R.",
                      status: "Omborda",
                      statusColor: "#17B26A",
                      kg: "1.8 kg",
                    },
                    {
                      code: "CZ88401",
                      name: "Jasur M.",
                      status: "Yetkazildi",
                      statusColor: "#53A3E9",
                      kg: "5.1 kg",
                    },
                  ].map((row) => (
                    <div
                      key={row.code}
                      className="grid grid-cols-4 gap-4 px-4 py-2.5 text-[11px] border-b border-white/5 last:border-0"
                    >
                      <span className="text-accent-text font-mono">
                        {row.code}
                      </span>
                      <span className="text-white/70">{row.name}</span>
                      <span>
                        <span
                          className="px-2 py-0.5 rounded-full text-[10px]"
                          style={{
                            background: `${row.statusColor}22`,
                            color: row.statusColor,
                          }}
                        >
                          {row.status}
                        </span>
                      </span>
                      <span className="text-white/50">{row.kg}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Phone mockup floating */}
            <div className="absolute -right-8 -bottom-12 hidden lg:block">
              <div className="relative glass rounded-3xl p-2 border border-white/10 w-48 shadow-2xl shadow-black/50">
                {/* Phone screen */}
                <div className="bg-[#0F1729] rounded-2xl overflow-hidden">
                  <div className="bg-accent-fill/20 px-4 py-3 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-accent-fill flex items-center justify-center">
                      <Package size={12} className="text-white" />
                    </div>
                    <span className="text-xs font-semibold text-white">
                      Cargosoft Bot
                    </span>
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="bg-white/8 rounded-xl p-2.5">
                      <p className="text-[10px] text-white/50 mb-1">Treking</p>
                      <p className="text-xs font-mono text-accent-text font-bold">
                        CZ88421
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        <Zap size={8} className="text-warning" />
                        <span className="text-[9px] text-warning">Yo&apos;lda</span>
                      </div>
                    </div>
                    <div className="bg-white/8 rounded-xl p-2.5">
                      <p className="text-[10px] text-white/50 mb-0.5">Manzil</p>
                      <div className="flex items-center gap-1">
                        <MapPin size={9} className="text-accent-text" />
                        <span className="text-[10px] text-white/70">Toshkent</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-base to-transparent pointer-events-none" />
    </section>
  );
}
