"use client";
import Cursor from "@/components/ui/Cursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Shell } from "@/components/ui/Shell";

export const mobileNO = "7992127047";

function R({ c = "rv", d = 0, children, style = {}, ...rest }) {
  const r = useRef(null);
  useEffect(() => {
    const el = r.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("in");
          io.unobserve(el);
        }
      },
      { threshold: 0.07 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={r}
      className={c}
      style={{ transitionDelay: `${d}s`, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}

const WORDS = [
  "Web Applications",
  "Mobile Apps",
  "AI Systems",
  "Cloud Infrastructure",
  "Digital Products",
];

const SERVICES = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <polyline points="8,21 12,17 16,21" />
      </svg>
    ),
    label: "Web Development",
    sub: "Next.js · React · Node",
    c: "#3b82f6",
    bg: "rgba(59,130,246,0.08)",
    bd: "rgba(59,130,246,0.18)",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <circle cx="12" cy="17" r="1" fill="currentColor" />
      </svg>
    ),
    label: "Mobile Apps",
    sub: "React Native · Flutter",
    c: "#a78bfa",
    bg: "rgba(167,139,250,0.08)",
    bd: "rgba(167,139,250,0.2)",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    label: "AI & ML",
    sub: "LLMs · Computer Vision",
    c: "#f43f5e",
    bg: "rgba(244,63,94,0.08)",
    bd: "rgba(244,63,94,0.2)",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    label: "Cloud & DevOps",
    sub: "AWS · GCP · K8s",
    c: "#06b6d4",
    bg: "rgba(6,182,212,0.08)",
    bd: "rgba(6,182,212,0.2)",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    label: "UI/UX Design",
    sub: "Figma · Design Systems",
    c: "#fb923c",
    bg: "rgba(251,146,60,0.08)",
    bd: "rgba(251,146,60,0.2)",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    label: "E-Commerce",
    sub: "Shopify · Custom",
    c: "#34d399",
    bg: "rgba(52,211,153,0.08)",
    bd: "rgba(52,211,153,0.2)",
  },
];

const METRICS = [
  { n: "50+", l: "Projects Shipped", d: "Across 12 industries" },
  { n: "40+", l: "Happy Clients", d: "From 8 countries" },
  { n: "100%", l: "On-Time Delivery", d: "Every single project" },
  { n: "5.0★", l: "Average Rating", d: "On all platforms" },
  { n: "₹3Cr+", l: "Value Delivered", d: "Combined client GMV" },
  { n: "24h", l: "Proposal Turnaround", d: "After discovery call" },
];

const STACK = [
  { n: "React", c: "#61dafb" },
  { n: "Next.js", c: "#9ca3af" },
  { n: "Node.js", c: "#4ade80" },
  { n: "TypeScript", c: "#60a5fa" },
  { n: "Python", c: "#fbbf24" },
  { n: "AWS", c: "#f59e0b" },
  { n: "Flutter", c: "#38bdf8" },
  { n: "Docker", c: "#22d3ee" },
  { n: "PostgreSQL", c: "#818cf8" },
  { n: "MongoDB", c: "#4ade80" },
  { n: "GraphQL", c: "#e879f9" },
  { n: "Stripe", c: "#818cf8" },
  { n: "TensorFlow", c: "#fb923c" },
  { n: "OpenAI", c: "#34d399" },
  { n: "Redis", c: "#f87171" },
  { n: "Figma", c: "#f97316" },
  { n: "Kubernetes", c: "#60a5fa" },
  { n: "GCP", c: "#3b82f6" },
];

const CASES = [
  {
    title: "FinEdge Banking",
    cat: "Mobile · FinTech",
    stat: "50K users · 4.8★",
    color: "#a78bfa",
    dark: "rgba(167,139,250,0.06)",
  },
  {
    title: "ShopNova Marketplace",
    cat: "E-Commerce · Full Stack",
    stat: "₹2Cr+ GMV/month",
    color: "#06b6d4",
    dark: "rgba(6,182,212,0.06)",
  },
  {
    title: "MediAssist AI",
    cat: "AI/ML · Healthcare",
    stat: "94% accuracy",
    color: "#f43f5e",
    dark: "rgba(244,63,94,0.06)",
  },
];

const WHY = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    t: "Fixed-Price Contracts",
    d: "Quote once, that's final. No scope creep, no surprise invoices — ever.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    t: "Dedicated Project Manager",
    d: "One person owns your project. Direct Slack. Daily updates. Real accountability.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    t: "12-Month Code Warranty",
    d: "Any bugs in our code get fixed for free, any time within a year of launch.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    t: "Indian Pricing, Global Standard",
    d: "World-class engineering at a fraction of Western agency rates.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    t: "100% IP Ownership",
    d: "Every file, asset, and database — fully yours from day one.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    t: "Fortnightly Sprint Demos",
    d: "See working software every 2 weeks. You're never left wondering.",
  },
];

const TESTIMONIALS = [
  {
    q: "Rewan Tech embedded with our team and shipped a banking app our users genuinely love. Technical quality and communication are rare in any market.",
    name: "Arjun Mehta",
    role: "CEO, FinEdge Technologies",
    g: "linear-gradient(135deg,#a78bfa,#3b82f6)",
  },
  {
    q: "Complex multi-vendor marketplace, shipped in 11 weeks. Sub-200ms pages on day one. They don't just build it — they think deeply about it.",
    name: "Priya Sharma",
    role: "Founder, ShopNova",
    g: "linear-gradient(135deg,#06b6d4,#3b82f6)",
  },
  {
    q: "Our AI triage engine hit 94% accuracy — better than we dared spec. What surprised me was how fast they grasped the healthcare domain.",
    name: "Rahul Gupta",
    role: "CTO, MediAssist Health",
    g: "linear-gradient(135deg,#f43f5e,#a78bfa)",
  },
];

export default function Home() {
  const [wIdx, setWIdx] = useState(0);
  const [show, setShow] = useState(true);
  const [tIdx, setTIdx] = useState(0);
  const [mx, setMx] = useState(0);
  const [my, setMy] = useState(0);
  const bgRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setWIdx((i) => (i + 1) % WORDS.length);
        setShow(true);
      }, 300);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(
      () => setTIdx((i) => (i + 1) % TESTIMONIALS.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const fn = (e) => {
      setMx((e.clientX / window.innerWidth - 0.5) * 28);
      setMy((e.clientY / window.innerHeight - 0.5) * 18);
    };
    window.addEventListener("mousemove", fn, { passive: true });
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  useEffect(() => {
    const fn = () => {
      if (bgRef.current)
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.2}px)`;
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const t = TESTIMONIALS[tIdx];

  return (
    <Shell>
      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
        <Cursor />
        <Navbar />

        {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            padding: "0 clamp(20px,5vw,80px)",
          }}
        >
          {/* Background layers */}
          <div
            ref={bgRef}
            style={{ position: "absolute", inset: "-10%", zIndex: 0 }}
          >
            {/* Grid */}
            <div
              className="hero-grid"
              style={{ position: "absolute", inset: 0, opacity: 0.7 }}
            />
            {/* Radial vignette */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, var(--bg) 100%)",
              }}
            />
            {/* Blue orb left */}
            <div
              style={{
                position: "absolute",
                top: "20%",
                left: "10%",
                width: 600,
                height: 600,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle,rgba(37,99,235,0.14) 0%,transparent 70%)",
                animation: "glow-p 8s ease-in-out infinite",
                pointerEvents: "none",
              }}
            />
            {/* Cyan orb right */}
            <div
              style={{
                position: "absolute",
                bottom: "15%",
                right: "8%",
                width: 400,
                height: 400,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle,rgba(6,182,212,0.1) 0%,transparent 70%)",
                animation: "glow-p 6s ease-in-out infinite 3s",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Scan line */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              height: 80,
              background:
                "linear-gradient(to bottom,transparent,rgba(37,99,235,0.04),transparent)",
              animation: "scan 8s ease-in-out infinite",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />

          <div
            className="ctr"
            style={{
              position: "relative",
              zIndex: 2,
              paddingTop: "clamp(100px,12vh,140px)",
              paddingBottom: "clamp(80px,10vh,120px)",
            }}
          >
            <div style={{ maxWidth: 900 }}>
              {/* Status badge */}
              <div style={{ animation: "rise 0.8s var(--ease) both" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(37,99,235,0.08)",
                    border: "1px solid rgba(37,99,235,0.2)",
                    borderRadius: "var(--rf)",
                    padding: "7px 18px",
                    marginBottom: 32,
                  }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "var(--g)",
                      display: "block",
                      animation: "blink 1.8s ease infinite",
                      boxShadow: "0 0 8px var(--g)",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--f-d)",
                      fontSize: 11,
                      fontWeight: 600,
                      color: "var(--bl)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Available for new projects
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--f-d)",
                      fontSize: 11,
                      color: "var(--t3)",
                    }}
                  >
                    ·
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--f-d)",
                      fontSize: 11,
                      color: "var(--t3)",
                    }}
                  >
                    50+ shipped
                  </span>
                </div>
              </div>

              {/* Headline */}
              <h1
                className="d1"
                style={{
                  fontSize: "clamp(52px,8vw,106px)",
                  marginBottom: 0,
                  animation: "rise 0.85s var(--ease) 0.1s both",
                }}
              >
                We build
              </h1>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                  gap: "0 16px",
                  marginBottom: 0,
                  animation: "rise 0.85s var(--ease) 0.18s both",
                }}
              >
                <h1
                  className="d1"
                  style={{ fontSize: "clamp(52px,8vw,106px)" }}
                >
                  <span
                    className="grad"
                    style={{
                      display: "inline-block",
                      minWidth: 360,
                      textAlign: "left",
                      transition: "all 0.3s",
                      opacity: show ? 1 : 0,
                      transform: show ? "none" : "translateY(-10px)",
                    }}
                  >
                    {WORDS[wIdx]}
                  </span>
                </h1>
              </div>
              <h1
                className="d1"
                style={{
                  fontSize: "clamp(52px,8vw,106px)",
                  marginBottom: 36,
                  animation: "rise 0.85s var(--ease) 0.24s both",
                }}
              >
                that scale.
              </h1>

              <p
                className="body"
                style={{
                  fontSize: "clamp(16px,1.8vw,20px)",
                  maxWidth: 580,
                  lineHeight: 1.82,
                  marginBottom: 48,
                  animation: "rise 0.85s var(--ease) 0.32s both",
                }}
              >
                Rewan Tech is an elite engineering studio. We design, build, and
                launch web apps, mobile apps, and AI products — on time, on
                budget, with world-class quality. Fixed price. Always.
              </p>

              {/* CTAs */}
              <div
                style={{
                  display: "flex",
                  gap: 14,
                  flexWrap: "wrap",
                  alignItems: "center",
                  marginBottom: 72,
                  animation: "rise 0.85s var(--ease) 0.4s both",
                }}
              >
                <Link
                  href="/contact"
                  className="btn btn-p btn-lg"
                  style={{ boxShadow: "var(--sh-bl)" }}
                >
                  Book Free Consultation
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href="https://wa.me/917992127047?text=Hi%2C+I+want+to+discuss+a+project"
                  target="_blank"
                  className="btn btn-wa btn-lg"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.845L0 24l6.335-1.652A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                  </svg>
                  WhatsApp Us
                </a>
                <Link href="/work" className="btn btn-g btn-lg">
                  View Our Work
                </Link>
              </div>

              {/* Stats row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4,1fr)",
                  gap: "0 1px",
                  background: "var(--bdr)",
                  border: "1px solid var(--bdr)",
                  borderRadius: "var(--rxl)",
                  overflow: "hidden",
                  animation: "rise 0.85s var(--ease) 0.48s both",
                  maxWidth: 760,
                }}
              >
                {METRICS.slice(0, 4).map((m, i) => (
                  <div
                    key={m.n}
                    style={{
                      background: "var(--bg2)",
                      padding: "clamp(16px,2vw,24px) clamp(12px,1.5vw,20px)",
                      transition: "background 0.25s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "var(--bg3)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "var(--bg2)")
                    }
                  >
                    <div
                      className="stat-n"
                      style={{
                        fontSize: "clamp(22px,2.5vw,30px)",
                        marginBottom: 4,
                      }}
                    >
                      {m.n}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--f-d)",
                        fontSize: 12,
                        fontWeight: 600,
                        color: "var(--t1)",
                        letterSpacing: "-0.02em",
                        marginBottom: 2,
                      }}
                    >
                      {m.l}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--f-d)",
                        fontSize: 10,
                        color: "var(--t3)",
                      }}
                    >
                      {m.d}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating badges - mouse parallax */}
          <div
            className="no-mob"
            style={{
              position: "absolute",
              right: "8%",
              top: "50%",
              transform: `translate(${mx * 0.4}px,calc(-50% + ${my * 0.4}px))`,
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              gap: 14,
              transition: "transform 0.06s linear",
            }}
          >
            {[
              { l: "React Native", v: "Mobile App", c: "#a78bfa" },
              { l: "Next.js", v: "Web Platform", c: "#3b82f6" },
              { l: "TensorFlow", v: "AI Model", c: "#f43f5e" },
            ].map((b, i) => (
              <div
                key={b.l}
                style={{
                  background: "rgba(10,12,18,0.9)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid var(--bdr2)",
                  borderRadius: "var(--rl)",
                  padding: "14px 18px",
                  minWidth: 180,
                  animation: `float-${i % 2 === 0 ? "a" : "b"} ${4 + i}s ease-in-out infinite`,
                  boxShadow: "var(--sh-md)",
                  borderLeft: `3px solid ${b.c}`,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--f-d)",
                    fontSize: 10,
                    fontWeight: 700,
                    color: "var(--t3)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  {b.l}
                </div>
                <div
                  style={{
                    fontFamily: "var(--f-d)",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--t1)",
                  }}
                >
                  {b.v}
                </div>
                <div
                  style={{
                    fontFamily: "var(--f-d)",
                    fontSize: 10,
                    color: b.c,
                    marginTop: 4,
                  }}
                >
                  ✓ Deployed
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div
            style={{
              position: "absolute",
              bottom: 40,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              animation: "rise 1s var(--ease) 1s both",
              zIndex: 2,
            }}
          >
            <span
              style={{
                fontFamily: "var(--f-d)",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.16em",
                color: "var(--t3)",
                textTransform: "uppercase",
              }}
            >
              Scroll
            </span>
            <div
              style={{
                width: 1,
                height: 40,
                background: "linear-gradient(to bottom,var(--bl),transparent)",
              }}
            />
          </div>
        </section>

        {/* ═══════════════════════════════════════
          SERVICES
      ═══════════════════════════════════════ */}
        <section
          className="sec"
          style={{
            background: "var(--bg2)",
            borderTop: "1px solid var(--bdr)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="noise" />
          <div className="ctr" style={{ position: "relative", zIndex: 1 }}>
            <R
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexWrap: "wrap",
                gap: 28,
                marginBottom: "clamp(48px,6vw,72px)",
              }}
            >
              <div>
                <div className="ey" style={{ marginBottom: 16 }}>
                  What we build
                </div>
                <h2 className="d2" style={{ fontSize: "clamp(32px,5vw,62px)" }}>
                  Full-spectrum
                  <br />
                  <span className="grad">digital engineering</span>
                </h2>
              </div>
              <Link href="/services" className="btn btn-o">
                All Services
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </R>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
                gap: 16,
              }}
            >
              {SERVICES.map((s, i) => (
                <R
                  key={s.label}
                  c="rv"
                  d={i * 0.06}
                  style={{
                    background: "var(--bg3)",
                    border: `1px solid ${s.bd}`,
                    borderRadius: "var(--rxl)",
                    padding: "clamp(24px,2.5vw,32px)",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.4s var(--ease)",
                  }}
                  data-h
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = `0 20px 60px ${s.c}20,var(--sh-md)`;
                    e.currentTarget.style.borderColor = s.c;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = s.bd;
                  }}
                >
                  {/* Icon glow bg */}
                  <div
                    style={{
                      position: "absolute",
                      top: -20,
                      right: -20,
                      width: 100,
                      height: 100,
                      borderRadius: "50%",
                      background: `radial-gradient(circle,${s.c}20 0%,transparent 70%)`,
                      pointerEvents: "none",
                    }}
                  />
                  {/* Icon */}
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "var(--rl)",
                      background: s.bg,
                      border: `1px solid ${s.bd}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: s.c,
                      marginBottom: 20,
                    }}
                  >
                    {s.icon}
                  </div>
                  <h3
                    className="d4"
                    style={{
                      fontSize: 18,
                      marginBottom: 6,
                      color: "var(--t1)",
                    }}
                  >
                    {s.label}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--f-d)",
                      fontSize: 12,
                      color: "var(--t3)",
                      marginBottom: 16,
                    }}
                  >
                    {s.sub}
                  </p>
                  <Link
                    href="/services"
                    style={{
                      fontFamily: "var(--f-d)",
                      fontSize: 12,
                      fontWeight: 600,
                      color: s.c,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    Learn more
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
                </R>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
          METRICS
      ═══════════════════════════════════════ */}
        <section
          className="sec-s"
          style={{
            background: "var(--bg)",
            borderTop: "1px solid var(--bdr)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: 700,
              height: 300,
              borderRadius: "50%",
              background:
                "radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div className="ctr" style={{ position: "relative", zIndex: 1 }}>
            <R
              style={{
                textAlign: "center",
                marginBottom: "clamp(44px,5vw,60px)",
              }}
            >
              <div
                className="ey"
                style={{ marginBottom: 14, justifyContent: "center" }}
              >
                By the numbers
              </div>
              <h2 className="d2" style={{ fontSize: "clamp(28px,4vw,52px)" }}>
                Results speak
                <br />
                <span className="grad">louder than promises</span>
              </h2>
            </R>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
                gap: 1,
                background: "var(--bdr)",
                border: "1px solid var(--bdr)",
                borderRadius: "var(--r3)",
                overflow: "hidden",
              }}
            >
              {METRICS.map((m, i) => (
                <R
                  key={m.n}
                  c="rv"
                  d={i * 0.07}
                  style={{
                    background: "var(--bg2)",
                    padding: "clamp(28px,3vw,40px) clamp(20px,2.5vw,32px)",
                    textAlign: "center",
                    transition: "background 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "var(--bg3)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "var(--bg2)")
                  }
                >
                  <div
                    className="stat-n"
                    style={{
                      fontSize: "clamp(36px,4vw,52px)",
                      marginBottom: 8,
                    }}
                  >
                    {m.n}
                  </div>
                  <div
                    className="d4"
                    style={{
                      fontSize: 15,
                      color: "var(--t1)",
                      marginBottom: 6,
                    }}
                  >
                    {m.l}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--f-d)",
                      fontSize: 11,
                      color: "var(--t3)",
                    }}
                  >
                    {m.d}
                  </div>
                </R>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
          WHY CHOOSE US
      ═══════════════════════════════════════ */}
        <section
          className="sec"
          style={{
            background: "var(--bg2)",
            borderTop: "1px solid var(--bdr)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            className="dots"
            style={{ position: "absolute", inset: 0, opacity: 0.5 }}
          />
          <div className="ctr" style={{ position: "relative", zIndex: 1 }}>
            <R
              style={{
                textAlign: "center",
                marginBottom: "clamp(48px,6vw,72px)",
              }}
            >
              <div
                className="ey"
                style={{ marginBottom: 14, justifyContent: "center" }}
              >
                Why Rewan Tech
              </div>
              <h2 className="d2" style={{ fontSize: "clamp(28px,4vw,52px)" }}>
                The difference is in
                <br />
                <span className="grad">how we think</span>
              </h2>
            </R>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
                gap: 16,
              }}
            >
              {WHY.map((w, i) => (
                <R
                  key={w.t}
                  c="rv"
                  d={i * 0.06}
                  style={{
                    background: "var(--bg3)",
                    border: "1px solid var(--bdr)",
                    borderRadius: "var(--rxl)",
                    padding: "clamp(24px,2.5vw,32px)",
                    transition: "all 0.4s var(--ease)",
                  }}
                  data-h
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--bdrb)";
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow =
                      "var(--sh-b),var(--sh-md)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--bdr)";
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: "var(--rl)",
                      background: "var(--bg-b)",
                      border: "1px solid var(--ln-b)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--bl)",
                      marginBottom: 18,
                    }}
                  >
                    {w.icon}
                  </div>
                  <h3
                    className="d4"
                    style={{
                      fontSize: 17,
                      marginBottom: 10,
                      color: "var(--t1)",
                    }}
                  >
                    {w.t}
                  </h3>
                  <p className="body-sm" style={{ lineHeight: 1.75 }}>
                    {w.d}
                  </p>
                </R>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
          CASE STUDIES PREVIEW
      ═══════════════════════════════════════ */}
        <section
          className="sec"
          style={{ background: "var(--bg)", borderTop: "1px solid var(--bdr)" }}
        >
          <div className="ctr">
            <R
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexWrap: "wrap",
                gap: 28,
                marginBottom: "clamp(44px,5vw,64px)",
              }}
            >
              <div>
                <div className="ey" style={{ marginBottom: 16 }}>
                  Selected work
                </div>
                <h2
                  className="d2"
                  style={{ fontSize: "clamp(28px,4.5vw,56px)" }}
                >
                  Products we've
                  <br />
                  <span className="grad">shipped & scaled</span>
                </h2>
              </div>
              <Link href="/work" className="btn btn-o">
                All Case Studies
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </R>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
                gap: 20,
              }}
            >
              {CASES.map((c, i) => (
                <R
                  key={c.title}
                  c="rv"
                  d={i * 0.09}
                  style={{
                    background: c.dark,
                    border: "1px solid var(--bdr)",
                    borderRadius: "var(--r3)",
                    padding: "clamp(28px,3vw,40px)",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.4s var(--ease)",
                  }}
                  data-h
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = c.color + "40";
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = `0 24px 60px ${c.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--bdr)";
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Decorative corner glow */}
                  <div
                    style={{
                      position: "absolute",
                      top: -40,
                      right: -40,
                      width: 180,
                      height: 180,
                      borderRadius: "50%",
                      background: `radial-gradient(circle,${c.color}18 0%,transparent 70%)`,
                      pointerEvents: "none",
                    }}
                  />
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <span
                      className="tag"
                      style={{
                        background: `${c.color}12`,
                        color: c.color,
                        border: `1px solid ${c.color}25`,
                        marginBottom: 20,
                      }}
                    >
                      {c.cat}
                    </span>
                    <h3
                      className="d3"
                      style={{
                        fontSize: "clamp(22px,2.5vw,28px)",
                        marginBottom: 12,
                        color: "var(--t1)",
                      }}
                    >
                      {c.title}
                    </h3>
                    <div
                      style={{
                        fontFamily: "var(--f-d)",
                        fontSize: 14,
                        fontWeight: 700,
                        color: c.color,
                        marginBottom: 24,
                      }}
                    >
                      {c.stat}
                    </div>
                    <Link
                      href="/work"
                      style={{
                        fontFamily: "var(--f-d)",
                        fontSize: 12,
                        fontWeight: 600,
                        color: "var(--t2)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = c.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--t2)";
                      }}
                    >
                      Read Case Study
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </R>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
          TECH STACK MARQUEE
      ═══════════════════════════════════════ */}
        <section
          className="sec-s"
          style={{
            background: "var(--bg2)",
            borderTop: "1px solid var(--bdr)",
            overflow: "hidden",
          }}
        >
          <R style={{ textAlign: "center", marginBottom: 36 }}>
            <div
              className="ey"
              style={{ justifyContent: "center", marginBottom: 12 }}
            >
              Our technology stack
            </div>
            <h2 className="d3" style={{ fontSize: "clamp(22px,3vw,36px)" }}>
              Built with the <span className="grad">best tools</span>
            </h2>
          </R>
          {[
            [...STACK.slice(0, 9), ...STACK.slice(0, 9)],
            [...STACK.slice(9), ...STACK.slice(9)],
          ].map((row, ri) => (
            <div
              key={ri}
              className="mq-wrap"
              style={{ marginBottom: ri === 0 ? 12 : 0 }}
            >
              <div className={ri === 0 ? "mq-f" : "mq-bk"}>
                {row.map((t, i) => (
                  <div
                    key={i}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: "var(--bg3)",
                      border: "1px solid var(--bdr)",
                      borderRadius: "var(--rf)",
                      padding: "9px 18px",
                      margin: "0 6px",
                      fontFamily: "var(--f-d)",
                      fontWeight: 600,
                      fontSize: 12,
                      color: "var(--t2)",
                      whiteSpace: "nowrap",
                      transition: "all 0.25s",
                    }}
                    data-h
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = t.c;
                      e.currentTarget.style.color = t.c;
                      e.currentTarget.style.background = `${t.c}10`;
                      e.currentTarget.style.boxShadow = `0 0 14px ${t.c}22`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--bdr)";
                      e.currentTarget.style.color = "var(--t2)";
                      e.currentTarget.style.background = "var(--bg3)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: t.c,
                        display: "block",
                        flexShrink: 0,
                        boxShadow: `0 0 6px ${t.c}70`,
                      }}
                    />
                    {t.n}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* ═══════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════ */}
        <section
          className="sec"
          style={{ background: "var(--bg)", borderTop: "1px solid var(--bdr)" }}
        >
          <div className="ctr">
            <R
              style={{
                textAlign: "center",
                marginBottom: "clamp(44px,5vw,60px)",
              }}
            >
              <div
                className="ey"
                style={{ justifyContent: "center", marginBottom: 14 }}
              >
                Client voices
              </div>
              <h2 className="d2" style={{ fontSize: "clamp(26px,4vw,52px)" }}>
                Words from people
                <br />
                <span className="grad">who shipped with us</span>
              </h2>
            </R>

            <div style={{ maxWidth: 760, margin: "0 auto" }}>
              <div
                style={{
                  background: "var(--bg2)",
                  border: "1px solid var(--bdr)",
                  borderRadius: "var(--r3)",
                  padding: "clamp(32px,5vw,56px)",
                  position: "relative",
                  overflow: "hidden",
                  animation: "b-glow 5s ease-in-out infinite",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 1,
                    background:
                      "linear-gradient(90deg,transparent,var(--b),var(--c),transparent)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 24,
                    right: 32,
                    fontFamily: "var(--f-d)",
                    fontWeight: 800,
                    fontSize: 100,
                    lineHeight: 1,
                    color: "rgba(37,99,235,0.06)",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  "
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: -40,
                    left: -40,
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle,rgba(37,99,235,0.07) 0%,transparent 70%)",
                    pointerEvents: "none",
                  }}
                />

                <div style={{ display: "flex", gap: 2, marginBottom: 24 }}>
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i} style={{ color: "#f59e0b", fontSize: 18 }}>
                      {s}
                    </span>
                  ))}
                </div>

                <p
                  className="body"
                  style={{
                    fontSize: "clamp(16px,1.9vw,20px)",
                    lineHeight: 1.82,
                    marginBottom: 36,
                    fontStyle: "italic",
                    color: "var(--t1)",
                    fontWeight: 400,
                    position: "relative",
                    zIndex: 1,
                  }}
                  key={tIdx}
                >
                  "{t.q}"
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 20,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 14 }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        background: t.g,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--f-d)",
                        fontWeight: 800,
                        fontSize: 14,
                        color: "white",
                        flexShrink: 0,
                      }}
                    >
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div
                        className="d4"
                        style={{ fontSize: 15, color: "var(--t1)" }}
                      >
                        {t.name}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--f-d)",
                          fontSize: 11,
                          color: "var(--t3)",
                          marginTop: 2,
                        }}
                      >
                        {t.role}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {TESTIMONIALS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setTIdx(i)}
                        data-h
                        style={{
                          width: i === tIdx ? 24 : 8,
                          height: 8,
                          borderRadius: "var(--rf)",
                          background: i === tIdx ? "var(--bl)" : "var(--sur)",
                          border: i === tIdx ? "none" : "1px solid var(--bdr2)",
                          transition: "all 0.3s var(--ease)",
                          boxShadow:
                            i === tIdx ? "0 0 10px var(--gw-b)" : "none",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
          CTA BAND
      ═══════════════════════════════════════ */}
        <section
          style={{
            background: "var(--bg2)",
            padding: "clamp(72px,10vw,120px) clamp(20px,5vw,80px)",
            borderTop: "1px solid var(--bdr)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            className="dots"
            style={{ position: "absolute", inset: 0, opacity: 0.4 }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "-5%",
              transform: "translateY(-50%)",
              width: 600,
              height: 600,
              borderRadius: "50%",
              background:
                "radial-gradient(circle,rgba(37,99,235,0.08) 0%,transparent 70%)",
              pointerEvents: "none",
              animation: "glow-p 6s ease-in-out infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "-5%",
              transform: "translateY(-50%)",
              width: 400,
              height: 400,
              borderRadius: "50%",
              background:
                "radial-gradient(circle,rgba(6,182,212,0.06) 0%,transparent 70%)",
              pointerEvents: "none",
              animation: "glow-p 8s ease-in-out infinite 2s",
            }}
          />

          <div className="ctr" style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "clamp(32px,5vw,64px)",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <R cls="rv-l">
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(16,185,129,0.08)",
                    border: "1px solid rgba(16,185,129,0.18)",
                    borderRadius: "var(--rf)",
                    padding: "5px 14px",
                    marginBottom: 20,
                  }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "var(--g)",
                      display: "block",
                      animation: "blink 2s ease infinite",
                      boxShadow: "0 0 8px var(--g)",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--f-d)",
                      fontSize: 11,
                      fontWeight: 600,
                      color: "var(--g)",
                    }}
                  >
                    Currently accepting projects
                  </span>
                </div>
                <h2
                  className="d2"
                  style={{
                    fontSize: "clamp(28px,4.5vw,60px)",
                    marginBottom: 18,
                  }}
                >
                  Talk to our team.
                  <br />
                  <span className="grad">No obligation, ever.</span>
                </h2>
                <p
                  className="body"
                  style={{ fontSize: 17, maxWidth: 420, lineHeight: 1.82 }}
                >
                  30-minute free discovery call. Fixed-price proposal within 24
                  hours. Your IP, your code.
                </p>
              </R>
              <R
                c="rv-r"
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                <Link
                  href="/contact"
                  className="btn btn-p btn-xl"
                  style={{ justifyContent: "center", whiteSpace: "nowrap" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Book Free Consultation
                </Link>
                <a
                  href="https://wa.me/917992127047?text=Hi%2C+I+want+to+discuss+a+project"
                  target="_blank"
                  className="btn btn-wa btn-xl"
                  style={{ justifyContent: "center" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.845L0 24l6.335-1.652A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                  </svg>
                  WhatsApp Us Now
                </a>
                <div style={{ textAlign: "center" }}>
                  <span
                    style={{
                      fontFamily: "var(--f-d)",
                      fontSize: 11,
                      color: "var(--t4)",
                    }}
                  >
                    ⚡ Responds within 2h on weekdays
                  </span>
                </div>
              </R>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </Shell>
  );
}
