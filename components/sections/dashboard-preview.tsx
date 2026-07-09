"use client";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Package,
  DollarSign,
} from "lucide-react";

const tabs = ["Dashboard", "Buyurtmalar", "Analitika"];

function DashboardMockup() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-4 gap-3 mb-4">
        {[
          {
            label: "Jami jo'natma",
            value: "2,847",
            icon: <Package size={14} />,
            color: "#1570EF",
            change: "+12%",
          },
          {
            label: "Faol mijozlar",
            value: "641",
            icon: <Users size={14} />,
            color: "#17B26A",
            change: "+8%",
          },
          {
            label: "Oylik tushum",
            value: "$24,960",
            icon: <DollarSign size={14} />,
            color: "#7A5AF8",
            change: "+23%",
          },
          {
            label: "O'sish",
            value: "18%",
            icon: <TrendingUp size={14} />,
            color: "#F79009",
            change: "Bu oy",
          },
        ].map((s) => (
          <div key={s.label} className="glass rounded-xl p-3">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] text-white/50">{s.label}</p>
              <div
                className="p-1 rounded-md"
                style={{ background: `${s.color}20`, color: s.color }}
              >
                {s.icon}
              </div>
            </div>
            <p className="text-base font-bold text-white">{s.value}</p>
            <p className="text-[10px] mt-1" style={{ color: s.color }}>
              {s.change}
            </p>
          </div>
        ))}
      </div>
      {/* Chart */}
      <div className="glass rounded-xl p-4 h-28 flex items-end gap-1.5">
        {[30, 45, 35, 60, 50, 75, 55, 80, 65, 90, 70, 85].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{
              height: `${h}%`,
              background:
                i === 11
                  ? "#1570EF"
                  : i > 8
                  ? "rgba(21,112,239,0.4)"
                  : "rgba(21,112,239,0.2)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function OrdersMockup() {
  const rows = [
    {
      code: "CZ88421",
      name: "Alisher T.",
      status: "Yo'lda",
      kg: "3.2 kg",
      date: "09.07.2026",
    },
    {
      code: "CZ88415",
      name: "Dilnoza R.",
      status: "Omborda",
      kg: "1.8 kg",
      date: "08.07.2026",
    },
    {
      code: "CZ88401",
      name: "Jasur M.",
      status: "Yetkazildi",
      kg: "5.1 kg",
      date: "07.07.2026",
    },
    {
      code: "CZ88390",
      name: "Kamola A.",
      status: "Qabul",
      kg: "2.4 kg",
      date: "06.07.2026",
    },
  ];
  const statusColors: Record<string, string> = {
    "Yo'lda": "#F79009",
    Omborda: "#1570EF",
    Yetkazildi: "#17B26A",
    Qabul: "#53A3E9",
  };
  return (
    <div className="p-4">
      <div className="glass rounded-xl overflow-hidden">
        <div className="grid grid-cols-5 gap-3 px-4 py-2 text-[10px] text-white/40 border-b border-white/8">
          <span>Trek kodi</span>
          <span>Mijoz</span>
          <span>Status</span>
          <span>Vazn</span>
          <span>Sana</span>
        </div>
        {rows.map((r) => (
          <div
            key={r.code}
            className="grid grid-cols-5 gap-3 px-4 py-3 text-[11px] border-b border-white/5 last:border-0 hover:bg-white/3"
          >
            <span className="text-accent-text font-mono">{r.code}</span>
            <span className="text-white/70">{r.name}</span>
            <span>
              <span
                className="px-2 py-0.5 rounded-full text-[10px]"
                style={{
                  background: `${statusColors[r.status]}22`,
                  color: statusColors[r.status],
                }}
              >
                {r.status}
              </span>
            </span>
            <span className="text-white/50">{r.kg}</span>
            <span className="text-white/40">{r.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsMockup() {
  return (
    <div className="p-4 space-y-3">
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Champions", count: 124, color: "#17B26A" },
          { label: "At Risk", count: 87, color: "#F04438" },
          { label: "Loyal", count: 213, color: "#1570EF" },
        ].map((seg) => (
          <div key={seg.label} className="glass rounded-xl p-3">
            <div
              className="w-2 h-2 rounded-full mb-2"
              style={{ background: seg.color }}
            />
            <p className="text-[10px] text-white/50">{seg.label}</p>
            <p className="text-xl font-bold text-white">{seg.count}</p>
          </div>
        ))}
      </div>
      <div className="glass rounded-xl p-4 h-20 flex items-end gap-1.5">
        {[60, 80, 40, 90, 55, 75, 85, 45, 70, 95, 60, 80].map((h, i) => (
          <div key={i} className="flex-1 flex flex-col items-center">
            <div
              className="w-full rounded-t-sm"
              style={{
                height: `${h * 0.6}px`,
                background: "#1570EF",
                opacity: 0.3 + (h / 100) * 0.7,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const tabContent = [
  <DashboardMockup key="dashboard" />,
  <OrdersMockup key="orders" />,
  <AnalyticsMockup key="analytics" />,
];

export function DashboardPreview() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="dashboard" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-[0.12em] uppercase text-accent-text mb-4 block">
            ADMIN PANEL
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Operatorlar uchun{" "}
            <span className="text-gradient">boshqaruv markazi</span>
          </h2>
          <p className="text-lg text-white/55 max-w-xl mx-auto">
            Real vaqtda statistika, buyurtmalar, to&apos;lovlar va xodimlar &mdash;
            bitta interfeysta.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          {/* Browser frame */}
          <div className="glass rounded-2xl overflow-hidden border border-white/10 glow-blue">
            {/* Title bar */}
            <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border-b border-white/8">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              {/* Tabs */}
              <div className="flex gap-1 ml-4">
                {tabs.map((tab, i) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(i)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                      activeTab === i
                        ? "bg-accent-fill text-white"
                        : "text-white/50 hover:text-white hover:bg-white/8"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="ml-auto flex-1 max-w-48">
                <div className="h-6 rounded-md bg-white/8 flex items-center justify-center">
                  <span className="text-[10px] text-white/30">
                    admin.cargosoft.uz
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="bg-white/[0.015] min-h-56">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
              >
                {tabContent[activeTab]}
              </motion.div>
            </div>
          </div>

          {/* CTA below */}
          <div className="text-center mt-8">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent-text hover:text-white font-medium transition-colors duration-200"
            >
              Demo so&apos;rash <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
