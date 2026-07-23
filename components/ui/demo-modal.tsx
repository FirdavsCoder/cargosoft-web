"use client";
import { useState, useEffect, useRef, ReactNode } from "react";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";

/* ── Modal ── */
function DemoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");   // faqat raqamlar, 9 ta
  const [cargo, setCargo] = useState("");
  const [done, setDone] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstRef = useRef<HTMLInputElement>(null);

  // Body scroll lock + Escape
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    setTimeout(() => firstRef.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleClose = () => {
    onClose();
    setTimeout(() => { setName(""); setPhone(""); setCargo(""); setDone(false); }, 300);
  };

  // Faqat raqam, max 9 ta
  const onPhone = (v: string) => setPhone(v.replace(/\D/g, "").slice(0, 9));

  // +998 XX XXX XX XX formatida ko'rsatish
  const fmtPhone = (d: string) => {
    if (d.length <= 2) return d;
    if (d.length <= 5) return `${d.slice(0, 2)} ${d.slice(2)}`;
    if (d.length <= 7) return `${d.slice(0, 2)} ${d.slice(2, 5)} ${d.slice(5)}`;
    return `${d.slice(0, 2)} ${d.slice(2, 5)} ${d.slice(5, 7)} ${d.slice(7)}`;
  };

  const valid = name.trim().length >= 2 && phone.length === 9 && cargo.trim().length >= 1;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    const msg = `📦 Demo so'rov:\n\n👤 Ism: ${name.trim()}\n📱 Tel: +998 ${fmtPhone(phone)}\n🏢 Kargo: ${cargo.trim()}`;
    try { navigator.clipboard.writeText(msg); } catch { /* clipboard ruxsati yo'q bo'lsa o'tkazib yuboramiz */ }
    window.open("https://t.me/ccc1_admin1", "_blank", "noopener,noreferrer");
    setDone(true);
  };

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) handleClose(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 99999,
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(10px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "16px",
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        style={{
          width: "100%", maxWidth: "420px",
          background: "#111827",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "24px",
          padding: "32px",
          position: "relative",
        }}
      >
        {/* Yopish */}
        <button
          onClick={handleClose}
          aria-label="Yopish"
          style={{
            position: "absolute", top: "16px", right: "16px",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "8px", width: "32px", height: "32px",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", color: "rgba(255,255,255,0.5)",
          }}
        >
          <X size={15} />
        </button>

        {!done ? (
          <>
            <h2 style={{ color: "#fff", fontSize: "20px", fontWeight: 700, marginBottom: "6px" }}>
              Demo so&apos;rov
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", marginBottom: "28px", lineHeight: 1.5 }}>
              Ma&apos;lumotlaringizni qoldiring — tez orada bog&apos;lanamiz
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

              {/* Ism Familiya */}
              <div>
                <label style={lbl}>Ism Familiya</label>
                <input
                  ref={firstRef}
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Alisher Toshmatov"
                  autoComplete="name"
                  style={inp}
                  onFocus={e => (e.currentTarget.style.borderColor = "rgba(21,112,239,0.7)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)")}
                />
              </div>

              {/* Telefon */}
              <div>
                <label style={lbl}>Telefon raqam</label>
                <div style={{ display: "flex", ...inp, padding: 0, gap: 0 }}>
                  <span style={{
                    padding: "0 12px 0 16px",
                    display: "flex", alignItems: "center",
                    color: "rgba(255,255,255,0.4)", fontSize: "14px", flexShrink: 0,
                    borderRight: "1px solid rgba(255,255,255,0.08)",
                    userSelect: "none",
                  }}>
                    +998
                  </span>
                  <input
                    type="tel"
                    value={fmtPhone(phone)}
                    onChange={e => onPhone(e.target.value)}
                    placeholder="90 123 45 67"
                    inputMode="numeric"
                    style={{ flex: 1, background: "transparent", border: "none", outline: "none", padding: "13px 16px", color: "#fff", fontSize: "14px" }}
                  />
                </div>
              </div>

              {/* Kargo nomi */}
              <div>
                <label style={lbl}>Kargo kompaniyasi nomi</label>
                <input
                  type="text"
                  value={cargo}
                  onChange={e => setCargo(e.target.value)}
                  placeholder="Express Cargo UZ"
                  style={inp}
                  onFocus={e => (e.currentTarget.style.borderColor = "rgba(21,112,239,0.7)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)")}
                />
              </div>

              <button
                type="submit"
                disabled={!valid}
                style={{
                  marginTop: "6px",
                  width: "100%", padding: "14px",
                  background: valid ? "#1570EF" : "rgba(255,255,255,0.08)",
                  border: "none", borderRadius: "12px",
                  color: valid ? "#fff" : "rgba(255,255,255,0.25)",
                  fontSize: "14px", fontWeight: 600,
                  cursor: valid ? "pointer" : "not-allowed",
                  transition: "background 0.2s, color 0.2s",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                }}
              >
                Yuborish <ArrowRight size={15} />
              </button>
            </form>
          </>
        ) : (
          /* Muvaffaqiyat holati */
          <div style={{ textAlign: "center", padding: "16px 0" }}>
            <div style={{
              width: "56px", height: "56px", borderRadius: "50%",
              background: "rgba(23,178,106,0.12)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 16px",
            }}>
              <CheckCircle2 size={28} color="#17B26A" />
            </div>
            <h3 style={{ color: "#fff", fontSize: "18px", fontWeight: 700, marginBottom: "10px" }}>
              Telegram ochildi!
            </h3>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", lineHeight: 1.7 }}>
              Ma&apos;lumotlaringiz nusxalandi.<br />
              Telegram&apos;da <strong style={{ color: "rgba(255,255,255,0.75)" }}>Ctrl+V</strong> (yoki
              uzoq bosib <strong style={{ color: "rgba(255,255,255,0.75)" }}>Paste</strong>) qilib yuboring.
            </p>
            <button
              onClick={handleClose}
              style={{
                marginTop: "22px",
                padding: "10px 28px",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "10px",
                color: "rgba(255,255,255,0.6)",
                fontSize: "13px", cursor: "pointer",
              }}
            >
              Yopish
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Shared styles ── */
const lbl: React.CSSProperties = {
  display: "block",
  fontSize: "11px", fontWeight: 600,
  color: "rgba(255,255,255,0.45)",
  marginBottom: "7px",
  textTransform: "uppercase", letterSpacing: "0.07em",
};
const inp: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: "12px",
  padding: "13px 16px",
  color: "#fff", fontSize: "14px",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.15s",
};

/* ── DemoButton — trigger + modal birga ── */
export function DemoButton({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className={className} style={style}>
        {children}
      </button>
      <DemoModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
