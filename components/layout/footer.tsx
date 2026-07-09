import Image from "next/image";
import Link from "next/link";

const navLinks: Record<string, string[]> = {
  Mahsulot: ["Imkoniyatlar", "Qanday ishlaydi", "Admin panel", "Telegram bot"],
  Kompaniya: ["Biz haqda", "Aloqa"],
};

export function Footer() {
  return (
    <footer className="bg-bg-deep border-t border-white/8">
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="/logos/cargosoft-horizontal-on-dark.svg"
              alt="Cargosoft"
              width={140}
              height={36}
              className="h-8 w-auto mb-4"
            />
            <p className="text-xs font-semibold tracking-widest text-accent-text mb-3">
              CARGO CRM &amp; AUTOMATION
            </p>
            <p className="text-sm text-white/50 leading-relaxed">
              Xitoy &rarr; O&apos;zbekiston yo&apos;nalishidagi kargo kompaniyalari uchun to&apos;liq raqamli platforma.
            </p>
          </div>

          {/* Links */}
          {Object.entries(navLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">
                {title}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-white/50 hover:text-accent-text transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">
              Aloqa
            </p>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent-text hover:text-white transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.65.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z" />
              </svg>
              Telegram orqali yozing
            </a>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">&copy; 2026 Cargosoft</p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Maxfiylik siyosati
            </Link>
            <Link
              href="#"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Ommaviy oferta
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
