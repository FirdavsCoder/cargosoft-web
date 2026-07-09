"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { uz } from "@/content/uz";
import { cn } from "@/lib/utils";
import { DemoButton } from "@/components/ui/demo-modal";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t = uz.nav;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0F1729]/80 backdrop-blur-xl border-b border-white/8 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/cargosoft-horizontal-on-dark.svg"
              alt="Cargosoft"
              width={140}
              height={36}
              priority
              className="h-9 md:h-11 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: t.features, href: "#features" },
              { label: t.howItWorks, href: "#how-it-works" },
              { label: t.dashboard, href: "#dashboard" },
              { label: t.contact, href: "#contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/70 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <DemoButton
              className="px-4 py-2 rounded-xl bg-accent-fill hover:bg-accent-deep text-white text-sm font-medium transition-colors duration-200"
            >
              {t.demo}
            </DemoButton>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden glass rounded-2xl p-4 mb-4 flex flex-col gap-3">
            {[
              { label: t.features, href: "#features" },
              { label: t.howItWorks, href: "#how-it-works" },
              { label: t.dashboard, href: "#dashboard" },
              { label: t.contact, href: "#contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-white/70 hover:text-white py-2 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <DemoButton className="w-full text-center px-4 py-3 rounded-xl bg-accent-fill text-white text-sm font-medium">
              {t.demo}
            </DemoButton>
          </div>
        )}
      </div>
    </header>
  );
}
