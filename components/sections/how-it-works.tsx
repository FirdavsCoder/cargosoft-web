"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Ulanish",
    desc: "Kompaniyangiz uchun bot va panel sozlanadi — o'z brendingiz bilan.",
  },
  {
    num: "02",
    title: "Mijoz trek qo'shadi",
    desc: "Botda ro'yxatdan o'tadi, Xitoy ombor manzilini oladi, treklarini kiritadi.",
  },
  {
    num: "03",
    title: "Operator boshqaradi",
    desc: "Skan, reys, status — jamoangiz panelda hammasini ko'radi.",
  },
  {
    num: "04",
    title: "Yetkazish va to'lov",
    desc: "Mijoz to'laydi, yetkazishni tanlaydi, ball yig'adi — siz statistikani ko'rasiz.",
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section id="how-it-works" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.12em] uppercase text-accent-text mb-4 block">
            JARAYON
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Qanday ishlaydi
          </h2>
        </motion.div>

        {/* Labels */}
        <div className="hidden md:flex justify-between text-xs text-white/40 font-mono mb-2 px-4">
          <span>Xitoy ombori</span>
          <span>Mijoz qo&apos;lida</span>
        </div>

        {/* Route line + steps (desktop) */}
        <div className="hidden md:block relative mb-8">
          <div className="absolute top-6 left-0 right-0 h-px">
            <svg
              className="w-full h-px"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#53A3E9" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#1570EF" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="url(#lineGrad)"
                strokeWidth="1.5"
                strokeDasharray="8 5"
              />
            </svg>
          </div>
          <div className="grid grid-cols-4 gap-6 relative">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col items-center text-center"
              >
                {/* Node */}
                <div className="w-12 h-12 rounded-full bg-accent-fill flex items-center justify-center text-white font-bold text-sm mb-6 relative z-10 shadow-lg shadow-accent-fill/30">
                  {step.num}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 pb-8"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-accent-fill flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 mt-3 bg-gradient-to-b from-accent-fill/40 to-transparent" />
                )}
              </div>
              <div className="pt-2">
                <h3 className="text-base font-semibold text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
