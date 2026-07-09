"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  MapPin,
  Send,
  CreditCard,
  Truck,
  BarChart3,
  Star,
  Shield,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const featureIcons: Record<string, React.ReactNode> = {
  tracking: <MapPin size={20} />,
  telegram: <Send size={20} />,
  payments: <CreditCard size={20} />,
  delivery: <Truck size={20} />,
  analytics: <BarChart3 size={20} />,
  loyalty: <Star size={20} />,
  rbac: <Shield size={20} />,
  multitenant: <Building2 size={20} />,
};

interface Feature {
  id: string;
  title: string;
  desc: string;
  cols: string;
  rows: string;
}

const features: Feature[] = [
  {
    id: "tracking",
    title: "Uchidan-uchigacha treking",
    desc: "Xitoy omboridagi skandan mijoz qo'ligacha — har bir bosqich real vaqtda.",
    cols: "md:col-span-2",
    rows: "md:row-span-2",
  },
  {
    id: "telegram",
    title: "Mijozlar allaqachon Telegram'da",
    desc: "Bot + mini-app: trek qo'shish, status, to'lov — ilova o'rnatmasdan.",
    cols: "md:col-span-1",
    rows: "md:row-span-2",
  },
  {
    id: "payments",
    title: "Onlayn to'lovlar",
    desc: "Karta orqali to'lov — kassaga navbatsiz.",
    cols: "md:col-span-1",
    rows: "md:row-span-1",
  },
  {
    id: "delivery",
    title: "Yetkazish variantlari",
    desc: "Olib ketish, kuryer yoki filial — mijoz o'zi tanlaydi.",
    cols: "md:col-span-1",
    rows: "md:row-span-1",
  },
  {
    id: "analytics",
    title: "Analitika va RFM segmentlar",
    desc: "Kim faol, kim ketyapti — segmentlab, aksiyani nishonga yuboring.",
    cols: "md:col-span-2",
    rows: "md:row-span-1",
  },
  {
    id: "loyalty",
    title: "Sodiqlik dasturi",
    desc: "Ball va bonuslar — mijozni qaytaradigan mexanika.",
    cols: "md:col-span-1",
    rows: "md:row-span-1",
  },
  {
    id: "rbac",
    title: "Rollar va huquqlar",
    desc: "Kassir, operator, menejer — har kim faqat o'z ishini ko'radi.",
    cols: "md:col-span-1",
    rows: "md:row-span-1",
  },
  {
    id: "multitenant",
    title: "Sizning brendingiz — bizning platforma",
    desc: "Har bir kargo o'z boti, logotipi va to'liq izolyatsiyalangan ma'lumotlari bilan.",
    cols: "md:col-span-4",
    rows: "md:row-span-1",
  },
];

function TrackingVisual() {
  const statuses = [
    { label: "Qabul qilindi", color: "#17B26A", done: true },
    { label: "Yo'lda", color: "#F79009", done: true },
    { label: "Omborda", color: "#1570EF", done: false },
    { label: "Yetkazildi", color: "#A3A3A3", done: false },
  ];
  return (
    <div className="mt-4 space-y-2">
      {statuses.map((s, i) => (
        <div key={i} className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{
              background: s.done ? s.color : "rgba(255,255,255,0.15)",
            }}
          />
          <div
            className="h-px flex-1 rounded-full"
            style={{
              background: s.done
                ? `${s.color}60`
                : "rgba(255,255,255,0.08)",
            }}
          />
          <span
            className="text-[11px]"
            style={{
              color: s.done ? s.color : "rgba(255,255,255,0.30)",
            }}
          >
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function TelegramVisual() {
  return (
    <div className="mt-3 space-y-2">
      <div className="bg-white/8 rounded-xl p-2.5 inline-block max-w-[180px]">
        <p className="text-[10px] text-white/50">Trek kodi</p>
        <p className="text-sm font-mono text-accent-text font-bold">CZ88421</p>
      </div>
      <div className="bg-accent-fill/20 rounded-xl p-2.5 ml-6 inline-block">
        <p className="text-[11px] text-white">
          Yo&apos;lda &mdash; taxminan 3 kun
        </p>
      </div>
    </div>
  );
}

function AnalyticsVisual() {
  const bars = [40, 65, 45, 80, 60, 90, 70];
  return (
    <div className="mt-3 flex items-end gap-1.5 h-12">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-md"
          style={{
            height: `${h}%`,
            background:
              i === 5 ? "#1570EF" : "rgba(21,112,239,0.25)",
          }}
        />
      ))}
    </div>
  );
}

function MultitenantVisual() {
  const colors = ["#1570EF", "#17B26A", "#7A5AF8"];
  const names = ["Cargo Express", "FastShip UZ", "TopKargo"];
  return (
    <div className="mt-4 flex gap-3">
      {names.map((name, i) => (
        <div key={i} className="glass rounded-xl p-3 flex-1">
          <div
            className="w-6 h-6 rounded-md mb-2"
            style={{
              background: `${colors[i]}22`,
              border: `1px solid ${colors[i]}40`,
            }}
          >
            <div
              className="w-full h-full rounded-md opacity-60"
              style={{ background: colors[i] }}
            />
          </div>
          <p className="text-[10px] text-white/70 font-medium">{name}</p>
          <p className="text-[9px] text-white/40 mt-0.5">Alohida bot va panel</p>
        </div>
      ))}
    </div>
  );
}

const visuals: Record<string, React.ReactNode> = {
  tracking: <TrackingVisual />,
  telegram: <TelegramVisual />,
  payments: (
    <div className="mt-3 flex gap-2">
      {["VISA", "MC", "HUMO"].map((c) => (
        <div
          key={c}
          className="glass rounded-lg px-2.5 py-1.5 text-[10px] text-white/60 font-medium"
        >
          {c}
        </div>
      ))}
    </div>
  ),
  delivery: (
    <div className="mt-3 grid grid-cols-2 gap-1.5">
      {["Olib ketish", "Kuryer", "UzPost", "EMU"].map((d) => (
        <div
          key={d}
          className="glass rounded-lg px-2 py-1.5 text-[10px] text-white/60 text-center"
        >
          {d}
        </div>
      ))}
    </div>
  ),
  analytics: <AnalyticsVisual />,
  loyalty: (
    <div className="mt-3 flex items-center gap-2">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            size={14}
            className={
              s <= 4 ? "fill-warning text-warning" : "text-white/20"
            }
          />
        ))}
      </div>
      <span className="text-xs text-white/50">+240 ball</span>
    </div>
  ),
  rbac: (
    <div className="mt-3 space-y-1.5">
      {["Super Admin", "Kassir", "Omborchi"].map((r) => (
        <div key={r} className="flex items-center gap-2">
          <Shield size={10} className="text-accent-text" />
          <span className="text-[11px] text-white/60">{r}</span>
        </div>
      ))}
    </div>
  ),
  multitenant: <MultitenantVisual />,
};

function FeatureCard({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "glass rounded-2xl p-5 flex flex-col group hover:-translate-y-1 transition-transform duration-200 hover:border-accent-text/30",
        feature.cols,
        feature.rows
      )}
    >
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-accent-fill/12 text-accent-text border border-accent-fill/20 flex-shrink-0">
          {featureIcons[feature.id]}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white mb-1">
            {feature.title}
          </h3>
          <p className="text-xs text-white/55 leading-relaxed">
            {feature.desc}
          </p>
        </div>
      </div>
      {visuals[feature.id]}
    </motion.div>
  );
}

export function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section id="features" className="section-padding">
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-[0.12em] uppercase text-accent-text mb-4 block">
            IMKONIYATLAR
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Kargo kompaniyasiga{" "}
            <span className="text-gradient">kerak bo&apos;lgan hammasi</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto md:auto-rows-[200px]">
          {features.map((f, i) => (
            <FeatureCard key={f.id} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
