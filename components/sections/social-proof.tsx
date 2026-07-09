"use client";
import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Kargo kompaniyasi" },
  { value: 100, suffix: "K+", label: "Jo'natma kuzatilgan" },
  { value: 99.9, suffix: "%", label: "Uptime" },
  { value: 3, suffix: " daq", label: "Sozlash vaqti" },
];

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const end = to;
    const duration = 1000;
    const step = (end / duration) * 16;
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(parseFloat(current.toFixed(1)));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {count % 1 === 0 ? count : count.toFixed(1)}
      {suffix}
    </span>
  );
}

export function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-10 md:p-14"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-white/50">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
