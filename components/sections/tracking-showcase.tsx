"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const STATUS_FLOW = [
  {
    label: "Xitoy ombori",
    code: "CN",
    status: "Qabul qilindi",
    color: "#17B26A",
    time: "15 iyun, 09:14",
  },
  {
    label: "Uchib ketdi",
    code: "✈",
    status: "Reysda",
    color: "#1570EF",
    time: "17 iyun, 23:00",
  },
  {
    label: "O'zbekiston",
    code: "UZ",
    status: "Omborda",
    color: "#F79009",
    time: "19 iyun, 14:22",
  },
  {
    label: "Mijozga",
    code: "📦",
    status: "Yetkazildi",
    color: "#17B26A",
    time: "Kutilmoqda",
  },
];

export function TrackingShowcase() {
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
              Real-time tracking
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="text-3xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              Har bir jo&apos;natma.
              <br />
              <span className="text-white/40">Har bir qadam.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base text-white/50 leading-relaxed mb-8 max-w-sm"
            >
              Xitoy ombori webhook orqali avtomatik trek qo&apos;shadi.
              Mijoz Telegramda real vaqtda ko&apos;radi. Operator panelda
              boshqaradi.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="space-y-3"
            >
              {[
                "Xitoy ombori — avtomatik webhook",
                "Status o'zgarsa — mijozga Telegram xabar",
                "Operator panelda filter, export, qidiruv",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/60"
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
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

          {/* Right: visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "#111827",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Track code header */}
              <div
                className="px-6 pt-6 pb-4"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
              >
                <p className="text-xs text-white/30 mb-1 font-mono">TREK KODI</p>
                <p
                  className="text-3xl font-bold font-mono tracking-wider"
                  style={{ color: "#53A3E9" }}
                >
                  CZ&#8209;88421
                </p>
              </div>

              {/* Status flow */}
              <div className="p-6 space-y-0">
                {STATUS_FLOW.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    {/* Timeline column */}
                    <div className="flex flex-col items-center">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                        style={{
                          background:
                            i < 3
                              ? `${step.color}20`
                              : "rgba(255,255,255,0.05)",
                          border: `1.5px solid ${i < 3 ? step.color : "rgba(255,255,255,0.1)"}`,
                          color:
                            i < 3 ? step.color : "rgba(255,255,255,0.2)",
                        }}
                      >
                        <span className="text-xs">{step.code}</span>
                      </div>
                      {i < STATUS_FLOW.length - 1 && (
                        <div
                          className="w-px flex-1 my-1"
                          style={{
                            background:
                              i < 2
                                ? `linear-gradient(to bottom, ${step.color}40, ${STATUS_FLOW[i + 1].color}40)`
                                : "rgba(255,255,255,0.06)",
                            minHeight: "28px",
                          }}
                        />
                      )}
                    </div>

                    {/* Content column */}
                    <div className="pb-6 flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-white">
                            {step.label}
                          </p>
                          <p
                            className="text-xs mt-0.5"
                            style={{
                              color:
                                i < 3
                                  ? step.color
                                  : "rgba(255,255,255,0.25)",
                            }}
                          >
                            {step.status}
                          </p>
                        </div>
                        <p className="text-[11px] text-white/30 font-mono">
                          {step.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
