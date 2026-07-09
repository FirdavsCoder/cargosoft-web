"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const CHAT_MESSAGES = [
  {
    from: "bot",
    text: "Salom! CZ‑88421 trekingi bo'yicha yangilik bor:",
    time: "14:22",
    highlight: false,
  },
  {
    from: "bot",
    text: "📦 Yukingiz O'zbekistonga yetib keldi.\n🏭 Toshkent omborida.",
    time: "14:22",
    highlight: true,
  },
  {
    from: "user",
    text: "Qachon olib ketsa bo'ladi?",
    time: "14:23",
    highlight: false,
  },
  {
    from: "bot",
    text: "Bugun 10:00–18:00 oralig'ida. Yoki yetkazib berish tanlaysizmi?",
    time: "14:23",
    highlight: false,
  },
  {
    from: "user",
    text: "Yetkazib bering",
    time: "14:24",
    highlight: false,
  },
];

export function TelegramShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      ref={ref}
      className="section-padding overflow-hidden"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-center">
          {/* Left: copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#53A3E9" }}
            >
              Telegram-bot + Mini-app
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="text-3xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              Mijozlar
              <br />
              <span className="text-white/40">
                Telegram&apos;dan chiqmaydi.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base text-white/50 leading-relaxed mb-8 max-w-sm"
            >
              Bot status haqida xabar beradi, mini-app orqali trek
              qo&apos;shadi, to&apos;laydi va yetkazib berish tanlaydi —
              hech qanday ilova o&apos;rnatmasdan.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="space-y-3"
            >
              {[
                "UZ / RU tilida avtomatik status xabarlari",
                "Mini-app: trek, to'lov, yetkazish, profil",
                "Loyallik balli va bonus market",
                "Har bir kargo — o'z brendi bilan alohida bot",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-white/60"
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(21,112,239,0.15)" }}
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="#53A3E9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right: Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center lg:justify-end"
          >
            {/* Phone frame */}
            <div
              className="relative w-64"
              style={{
                background: "#1C2333",
                borderRadius: "40px",
                border: "6px solid #2A3347",
                boxShadow:
                  "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)",
                overflow: "hidden",
              }}
            >
              {/* Status bar */}
              <div className="flex items-center justify-between px-5 pt-3 pb-1">
                <span className="text-[10px] text-white/60 font-semibold">
                  9:41
                </span>
                <div className="flex gap-1 items-center">
                  <div
                    className="w-3 h-1.5 rounded-sm"
                    style={{ background: "rgba(255,255,255,0.5)" }}
                  />
                  <div
                    className="w-1 h-1 rounded-full"
                    style={{ background: "rgba(255,255,255,0.5)" }}
                  />
                </div>
              </div>

              {/* Telegram chat header */}
              <div
                className="flex items-center gap-2.5 px-4 py-2.5"
                style={{
                  background: "#17212B",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: "#1570EF" }}
                >
                  C
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">
                    Cargosoft Bot
                  </p>
                  <p className="text-[9px] text-white/40">online</p>
                </div>
              </div>

              {/* Messages */}
              <div
                className="flex flex-col gap-2 p-3 pb-4"
                style={{ background: "#0E1621", minHeight: "360px" }}
              >
                {CHAT_MESSAGES.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className="max-w-[80%] px-3 py-2 text-[11px] leading-relaxed"
                      style={{
                        borderRadius:
                          msg.from === "user"
                            ? "16px 16px 4px 16px"
                            : "16px 16px 16px 4px",
                        background:
                          msg.from === "user"
                            ? "#2B5278"
                            : msg.highlight
                            ? "rgba(21,112,239,0.2)"
                            : "rgba(255,255,255,0.07)",
                        color:
                          msg.from === "user"
                            ? "rgba(255,255,255,0.85)"
                            : "rgba(255,255,255,0.75)",
                        border: msg.highlight
                          ? "1px solid rgba(21,112,239,0.3)"
                          : "none",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {msg.text}
                      <span className="block text-right text-[9px] mt-1 opacity-40">
                        {msg.time}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Quick reply buttons */}
                <div className="flex flex-col gap-1.5 mt-1">
                  {["Yetkazish", "Olib ketish"].map((btn) => (
                    <button
                      key={btn}
                      className="w-full py-2 text-[11px] font-medium rounded-xl"
                      style={{
                        background: "rgba(21,112,239,0.15)",
                        border: "1px solid rgba(21,112,239,0.25)",
                        color: "#53A3E9",
                      }}
                    >
                      {btn}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
