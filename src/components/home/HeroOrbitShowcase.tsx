"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Cloud,
  Code2,
  Layers3,
  Palette,
  Smartphone,
  Sparkles,
} from "lucide-react";

const orbitItems = [
  {
    title: "Web Development",
    subtitle: "Modern websites and web apps",
    description:
      "Fast, scalable, and premium web experiences for startups and businesses.",
    icon: Code2,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Mobile Apps",
    subtitle: "Cross-platform product experiences",
    description:
      "Smooth mobile interfaces and app systems built for performance and retention.",
    icon: Smartphone,
    color: "from-pink-500 to-orange-500",
  },
  {
    title: "UI/UX Design",
    subtitle: "Premium product design systems",
    description:
      "Clear visual hierarchy, better usability, and stronger digital trust.",
    icon: Palette,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "SaaS Products",
    subtitle: "Scalable platforms and dashboards",
    description:
      "Business-ready SaaS systems with modern architecture and product thinking.",
    icon: Layers3,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "AI Integration",
    subtitle: "Practical AI-powered workflows",
    description:
      "Automation, chat systems, and smart product layers that add real business value.",
    icon: Brain,
    color: "from-amber-500 to-yellow-500",
  },
  {
    title: "Cloud & Backend",
    subtitle: "Reliable systems behind the product",
    description:
      "APIs, deployment, and backend architecture that support long-term scale.",
    icon: Cloud,
    color: "from-sky-500 to-indigo-500",
  },
];

const RADIUS = 190;

export default function HeroOrbitShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % orbitItems.length);
    }, 2500);

    return () => clearInterval(id);
  }, []);

  const positionedItems = useMemo(() => {
    return orbitItems.map((item, index) => {
      const relativeIndex =
        (index - activeIndex + orbitItems.length) % orbitItems.length;
      const angle =
        (relativeIndex / orbitItems.length) * Math.PI * 2 - Math.PI / 2;

      const x = Math.cos(angle) * RADIUS;
      const y = Math.sin(angle) * RADIUS;

      const depth = Math.cos(angle);
      const scale = 0.78 + ((depth + 1) / 2) * 0.34;
      const opacity = 0.45 + ((depth + 1) / 2) * 0.55;
      const zIndex = Math.round(((depth + 1) / 2) * 100);

      return {
        ...item,
        index,
        x,
        y,
        scale,
        opacity,
        zIndex,
        isActive: index === activeIndex,
      };
    });
  }, [activeIndex]);

  const activeItem = orbitItems[activeIndex];
  const ActiveIcon = activeItem.icon;

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[20%] top-24 h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-500/20" />
        <div className="absolute right-[15%] top-24 h-[260px] w-[260px] rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/20" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        {/* Left side */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-600 dark:text-cyan-300">
            <Sparkles size={16} />
            Interactive Service Showcase
          </div>

          <h1 className="mt-6 text-5xl font-semibold leading-tight md:text-6xl xl:text-7xl">
            We build digital products across every layer of modern business
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            From websites and apps to SaaS systems, AI features, and cloud-ready
            infrastructure — we design and develop products that look premium and
            scale with confidence.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
            >
              Start Your Project
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/services"
              className="rounded-xl border border-slate-300 px-6 py-3 text-slate-900 dark:border-white/20 dark:text-white"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
            {[
              ["Web + App", "Product execution"],
              ["AI + Cloud", "Modern architecture"],
              ["Premium UX", "Stronger trust"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <div className="font-semibold">{title}</div>
                <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="relative flex min-h-[620px] items-center justify-center">
          {/* Orbit ring */}
          <div className="absolute h-[430px] w-[430px] rounded-full border border-dashed border-slate-300/70 dark:border-white/10" />
          <div className="absolute h-[300px] w-[300px] rounded-full border border-slate-200/70 dark:border-white/10" />

          {/* Center active card */}
          <div className="relative z-20 w-full max-w-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.title}
                initial={{ opacity: 0, y: 18, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.96 }}
                transition={{ duration: 0.32 }}
                className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,0.14)] dark:border-white/10 dark:bg-slate-900"
              >
                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-br ${activeItem.color} p-3 text-white`}
                >
                  <ActiveIcon size={26} />
                </div>

                <div className="mt-5 text-sm uppercase tracking-[0.18em] text-cyan-500">
                  Active Service
                </div>

                <h3 className="mt-2 text-2xl font-semibold">{activeItem.title}</h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  {activeItem.subtitle}
                </p>

                <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">
                  {activeItem.description}
                </p>

                <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600 dark:bg-white/5 dark:text-slate-300">
                  Click any orbit card to highlight that service.
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Orbit cards */}
          <div className="absolute inset-0">
            {positionedItems.map((item) => {
              const Icon = item.icon;

              return (
                <motion.button
                  key={item.title}
                  onClick={() => setActiveIndex(item.index)}
                  animate={{
                    x: item.x,
                    y: item.y,
                    scale: item.scale,
                    opacity: item.opacity,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 70,
                    damping: 16,
                  }}
                  style={{ zIndex: item.zIndex }}
                  className={`absolute left-1/2 top-1/2 flex h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[26px] border text-center shadow-lg backdrop-blur ${
                    item.isActive
                      ? "border-cyan-500/40 bg-white dark:bg-slate-900"
                      : "border-slate-200 bg-white/90 dark:border-white/10 dark:bg-slate-900/80"
                  }`}
                >
                  <div
                    className={`mb-2 inline-flex rounded-2xl bg-gradient-to-br ${item.color} p-2.5 text-white`}
                  >
                    <Icon size={18} />
                  </div>
                  <div className="px-2 text-xs font-semibold leading-4">
                    {item.title}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
