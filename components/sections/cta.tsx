"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Send } from "lucide-react";

export function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center"
          style={{
            background:
              "linear-gradient(135deg, #1570EF 0%, #175CD3 60%, #0F1729 100%)",
          }}
        >
          {/* Dot grid overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight">
              Kargo biznesingizni bugun
              <br />
              <span className="text-white/80">avtomatlashtiring</span>
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-lg mx-auto">
              Demo ko&apos;ring &mdash; savollaringizga jonli javob
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white text-[#0F1729] font-semibold hover:bg-white/90 transition-all duration-200 shadow-lg"
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
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 font-medium transition-all duration-200"
              >
                <Send size={16} />
                Botni ochish
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
