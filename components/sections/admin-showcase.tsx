"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { BarChart3, Users, Package, TrendingUp } from "lucide-react";

export function AdminShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  const statsRow = [
    {
      icon: <Package size={14} />,
      label: "Jo'natmalar",
      value: "2,847",
      change: "+12%",
      up: true,
    },
    {
      icon: <Users size={14} />,
      label: "Mijozlar",
      value: "641",
      change: "+8%",
      up: true,
    },
    {
      icon: <BarChart3 size={14} />,
      label: "Oy daromad",
      value: "$24K",
      change: "+23%",
      up: true,
    },
    {
      icon: <TrendingUp size={14} />,
      label: "O'rtacha vazn",
      value: "3.2 kg",
      change: "–",
      up: false,
    },
  ];

  return (
    <section
      ref={ref}
      className="section-padding"
      style={{ background: "#0F1729" }}
    >
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
          {/* Left: visual (admin panel mockup) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="order-2 lg:order-1"
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "#111827",
                border: "1px solid rgba(255,255,255,0.09)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.4)",
              }}
            >
              {/* Window bar */}
              <div
                className="flex items-center gap-3 px-4 py-3"
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <div className="flex gap-1.5">
                  {["#FF5F57", "#FFBD2E", "#28C840"].map((c) => (
                    <div
                      key={c}
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: c }}
                    />
                  ))}
                </div>
                <div
                  className="flex-1 h-5 rounded mx-3 flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <span className="text-[10px] text-white/25 font-mono">
                    admin.cargosoft.uz/dashboard
                  </span>
                </div>
              </div>

              {/* Sidebar + content */}
              <div className="flex" style={{ minHeight: "340px" }}>
                {/* Sidebar */}
                <div
                  className="w-14 flex flex-col items-center gap-3 py-4 flex-shrink-0"
                  style={{
                    borderRight: "1px solid rgba(255,255,255,0.06)",
                    background: "rgba(255,255,255,0.01)",
                  }}
                >
                  {[
                    { emoji: "📊", active: true },
                    { emoji: "📦", active: false },
                    { emoji: "👥", active: false },
                    { emoji: "💳", active: false },
                    { emoji: "📈", active: false },
                  ].map(({ emoji, active }, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-base"
                      style={{
                        background: active
                          ? "rgba(21,112,239,0.2)"
                          : "transparent",
                      }}
                    >
                      {emoji}
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="flex-1 p-4 overflow-hidden">
                  {/* Stats row */}
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {statsRow.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-xl p-3"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white/30">{s.icon}</span>
                          <span
                            className="text-[9px] font-medium"
                            style={{
                              color: s.up
                                ? "#17B26A"
                                : "rgba(255,255,255,0.3)",
                            }}
                          >
                            {s.change}
                          </span>
                        </div>
                        <p className="text-base font-bold text-white">
                          {s.value}
                        </p>
                        <p className="text-[9px] text-white/35 mt-0.5">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Chart */}
                  <div
                    className="rounded-xl p-3 mb-3"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-[10px] text-white/40 font-medium">
                        Jo&apos;natmalar dinamikasi
                      </p>
                      <span className="text-[9px] text-white/25">
                        Iyun 2026
                      </span>
                    </div>
                    <div className="flex items-end gap-1 h-14">
                      {[28, 42, 35, 58, 45, 72, 55, 68, 80, 62, 75, 88].map(
                        (h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-sm"
                            style={{
                              height: `${h}%`,
                              background:
                                i === 11
                                  ? "#1570EF"
                                  : i >= 9
                                  ? "rgba(21,112,239,0.35)"
                                  : "rgba(21,112,239,0.18)",
                            }}
                          />
                        )
                      )}
                    </div>
                  </div>

                  {/* RFM mini */}
                  <div
                    className="rounded-xl p-3"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <p className="text-[10px] text-white/40 mb-2 font-medium">
                      RFM segmentlar
                    </p>
                    <div className="flex gap-2">
                      {[
                        { label: "Champions", val: 124, color: "#17B26A" },
                        { label: "At Risk", val: 87, color: "#F04438" },
                        { label: "Loyal", val: 213, color: "#1570EF" },
                      ].map((seg) => (
                        <div key={seg.label} className="flex-1">
                          <div className="text-sm font-bold text-white">
                            {seg.val}
                          </div>
                          <div
                            className="text-[9px] mt-0.5"
                            style={{ color: seg.color }}
                          >
                            {seg.label}
                          </div>
                          <div
                            className="mt-1.5 h-1 rounded-full"
                            style={{ background: "rgba(255,255,255,0.08)" }}
                          >
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${(seg.val / 213) * 100}%`,
                                background: seg.color,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: copy */}
          <div className="order-1 lg:order-2">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#53A3E9" }}
            >
              Admin panel
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="text-3xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              Hamma narsa
              <br />
              <span className="text-white/40">ko&apos;z oldingizda.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base text-white/50 leading-relaxed mb-8 max-w-sm"
            >
              Dashboard, buyurtmalar, analitika, RFM segmentlar, xodimlar,
              kassir — barchasi bitta panelda. RBAC bilan har bir rol
              faqat o&apos;z sahifasini ko&apos;radi.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="space-y-3"
            >
              {[
                "SuperAdmin, Admin, Kassir, Omborchi — alohida rollar",
                "RFM segmentatsiya va broadcast xabarlar",
                "Kassa smenasi va moliyaviy hisobot",
                "Audit log — kim, qachon, nima qildi",
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
        </div>
      </div>
    </section>
  );
}
