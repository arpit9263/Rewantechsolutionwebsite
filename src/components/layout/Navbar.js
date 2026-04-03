"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../../public/logo.svg"; // Ensure you have a logo image in the public folder
import Image from "next/image";

const LINKS = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Process", href: "/process" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [sc, setSc] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const fn = () => setSc(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: sc ? 14 : 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: sc ? "min(calc(100% - 32px),1280px)" : "100%",
          zIndex: 9000,
          background: sc ? "rgba(5,6,8,0.9)" : "transparent",
          backdropFilter: sc ? "blur(24px) saturate(1.8)" : "none",
          border: sc ? "1px solid rgba(255,255,255,0.07)" : "none",
          borderRadius: sc ? "9999px" : "0",
          padding: sc ? "10px 28px" : "22px clamp(20px,5vw,80px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
          boxShadow: sc
            ? "0 8px 48px rgba(0,0,0,0.6),0 0 0 1px rgba(37,99,235,0.06)"
            : "none",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", gap: 10 }}
        >
          <Image
            src={Logo} // put your logo in public folder
            alt="Rewan Tech Solutions"
            style={{
              height: 32,
              width: "auto",
              objectFit: "contain",
            }}
          />
        </Link>
        {/* Desktop links */}
        <div
          className="no-mob"
          style={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          {LINKS.map((l) => {
            const active = path === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "var(--f-d)",
                  fontWeight: 500,
                  fontSize: 13,
                  letterSpacing: "-0.01em",
                  color: active ? "var(--bl)" : "var(--t2)",
                  padding: "7px 15px",
                  borderRadius: "var(--rf)",
                  background: active ? "var(--bg-b)" : "transparent",
                  border: active
                    ? "1px solid var(--ln-b)"
                    : "1px solid transparent",
                  transition: "all 0.25s var(--ease)",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = "var(--t1)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = "var(--t2)";
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <a
            href="https://wa.me/917992127047?text=Hi%2C+I+want+to+discuss+a+project"
            target="_blank"
            className="btn btn-sm no-mob"
            style={{
              background: "rgba(37,211,102,0.12)",
              border: "1px solid rgba(37,211,102,0.2)",
              color: "#4ade80",
              display: "inline-flex",
              borderRadius: "var(--rf)",
              padding: "8px 16px",
              fontFamily: "var(--f-d)",
              fontSize: 12,
              fontWeight: 600,
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#25d366";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.borderColor = "#25d366";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(37,211,102,0.12)";
              e.currentTarget.style.color = "#4ade80";
              e.currentTarget.style.borderColor = "rgba(37,211,102,0.2)";
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.845L0 24l6.335-1.652A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
            </svg>
            WhatsApp
          </a>
          <Link
            href="/contact"
            className="no-mob"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              fontFamily: "var(--f-d)",
              fontWeight: 600,
              fontSize: 13,
              background: "linear-gradient(135deg,var(--b),var(--bl))",
              color: "white",
              padding: "9px 20px",
              borderRadius: "var(--rf)",
              boxShadow: "var(--sh-b)",
              transition: "all 0.3s var(--ease)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "var(--sh-bl)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "var(--sh-b)";
            }}
          >
            Get Quote
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          {/* Hamburger */}
          <button
            className="no-desk"
            onClick={() => setOpen(!open)}
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              border: "1px solid var(--bdr)",
              background: "var(--bg3)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  width: 14,
                  height: 1.5,
                  background: "var(--t1)",
                  borderRadius: 2,
                  display: "block",
                  transform: open
                    ? i === 0
                      ? "rotate(45deg) translate(4.5px,4.5px)"
                      : i === 2
                        ? "rotate(-45deg) translate(4.5px,-4.5px)"
                        : "none"
                    : "none",
                  opacity: open && i === 1 ? 0 : 1,
                  transition: "all 0.3s",
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 8999,
          background: "rgba(5,6,8,0.97)",
          backdropFilter: "blur(24px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "all" : "none",
          transition: "opacity 0.35s",
        }}
      >
        {/* Glow orb */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(37,99,235,0.1) 0%,transparent 70%)",
            pointerEvents: "none",
          }}
        />
        {LINKS.map((l, i) => (
          <Link
            key={l.href}
            href={l.href}
            style={{
              fontFamily: "var(--f-d)",
              fontWeight: 800,
              fontSize: "clamp(28px,7vw,44px)",
              letterSpacing: "-0.05em",
              color: path === l.href ? "var(--bl)" : "var(--t1)",
              opacity: open ? 1 : 0,
              transform: open ? "none" : "translateY(16px)",
              transition: `opacity 0.45s var(--ease) ${i * 0.07}s,transform 0.45s var(--ease) ${i * 0.07}s`,
              position: "relative",
              zIndex: 1,
            }}
          >
            {l.label}
          </Link>
        ))}
        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 32,
            flexWrap: "wrap",
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <a
            href="https://wa.me/917992127047"
            target="_blank"
            className="btn btn-wa"
          >
            WhatsApp
          </a>
          <Link href="/contact" className="btn btn-p">
            Get a Quote →
          </Link>
        </div>
      </div>
    </>
  );
}
