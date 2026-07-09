"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section ref={ref} style={{ background: "#0F1729" }}>
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="py-14"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "kargo kompaniyasi" },
              { value: "100K+", label: "jo'natma kuzatilgan" },
              { value: "99.9%", label: "uptime" },
              { value: "3 daq", label: "sozlash vaqti" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <p className="text-3xl md:text-4xl font-bold text-white mb-1.5 tracking-tight">
                  {s.value}
                </p>
                <p className="text-sm text-white/40">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
