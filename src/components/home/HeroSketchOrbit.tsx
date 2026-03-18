"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Cloud,
  Code2,
  Layers3,
  Palette,
  Smartphone,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    short: "Modern websites & web apps",
    description:
      "Fast, scalable, and premium web experiences designed for business growth and digital trust.",
    heroLabel: "Digital Products That Feel Premium",
    heroTitle: "Web experiences built to look sharp and convert better.",
    heroText:
      "We create polished websites and product interfaces that feel modern, load fast, and help businesses build stronger trust online.",
    points: ["Fast performance", "Premium UI systems", "Conversion-focused build"],
    icon: Code2,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Mobile Apps",
    short: "Cross-platform app systems",
    description:
      "Smooth app experiences with strong UX, clean flows, and performance-first execution.",
    heroLabel: "Mobile Experiences That Feel Smooth",
    heroTitle: "Apps designed for clarity, speed, and daily usability.",
    heroText:
      "We build elegant mobile apps with clean navigation, stronger usability, and a polished experience that feels easy from the first tap.",
    points: ["Cross-platform builds", "Smooth user flows", "App-store ready quality"],
    icon: Smartphone,
    gradient: "from-pink-500 to-orange-500",
  },
  {
    title: "UI/UX Design",
    short: "Premium product design",
    description:
      "Clear interfaces, stronger usability, and visual systems that make products feel polished.",
    heroLabel: "Design Systems With Clarity",
    heroTitle: "Interfaces that feel refined, intuitive, and easier to trust.",
    heroText:
      "We shape product design systems with cleaner layouts, stronger hierarchy, and thoughtful details that make products feel more premium.",
    points: ["Clear product flows", "Modern visual systems", "Polished interface detail"],
    icon: Palette,
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "SaaS Products",
    short: "Dashboards & platforms",
    description:
      "Business-ready SaaS products with modern architecture, product thinking, and long-term scale.",
    heroLabel: "Scalable SaaS Product Development",
    heroTitle: "Platforms made for teams, growth, and long-term scale.",
    heroText:
      "From internal tools to SaaS dashboards, we build product systems that are scalable, useful, and structured for long-term business value.",
    points: ["Dashboard systems", "Product-first architecture", "Scale-ready foundations"],
    icon: Layers3,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "AI Integration",
    short: "Practical AI workflows",
    description:
      "Automation and smart product layers that improve efficiency and add real business value.",
    heroLabel: "AI That Solves Real Problems",
    heroTitle: "Useful AI integration built around product value.",
    heroText:
      "We add practical AI layers, smart automation, and workflow intelligence that make digital products more useful without making them feel complex.",
    points: ["Workflow automation", "AI product layers", "Real business use-cases"],
    icon: Brain,
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    title: "Cloud & Backend",
    short: "Reliable system foundation",
    description:
      "Secure APIs, backend logic, and cloud-ready infrastructure built for stability and growth.",
    heroLabel: "Reliable Backend Foundations",
    heroTitle: "Backend systems engineered for stability and growth.",
    heroText:
      "We build secure APIs, backend services, and cloud-ready foundations that support reliable performance as products evolve and scale.",
    points: ["Secure APIs", "Cloud-ready architecture", "Stable backend systems"],
    icon: Cloud,
    gradient: "from-sky-500 to-indigo-500",
  },
];

type OrbitNode = {
  id: string;
  serviceIndex: number;
  slotIndex: number;
};

type OrbitPoint = {
  x: number;
  y: number;
  scale: number;
  opacity: number;
  zIndex: number;
};

type PathMetrics = {
  slots: OrbitPoint[];
  entry: OrbitPoint;
  exit: OrbitPoint;
};

const OUTER_PATH_D =
  "M350 132 C 485 145, 570 245, 565 350 C 560 470, 475 560, 350 568";

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function getPointBeyondPath(
  path: SVGPathElement,
  totalLength: number,
  fraction: number,
  extendBy = 16
) {
  const delta = 8;

  if (fraction < 0) {
    const p1 = path.getPointAtLength(0);
    const p2 = path.getPointAtLength(Math.min(delta, totalLength));
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    const mag = Math.hypot(dx, dy) || 1;

    return {
      x: p1.x + (dx / mag) * extendBy,
      y: p1.y + (dy / mag) * extendBy,
    };
  }

  if (fraction > 1) {
    const p1 = path.getPointAtLength(totalLength);
    const p2 = path.getPointAtLength(Math.max(totalLength - delta, 0));
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    const mag = Math.hypot(dx, dy) || 1;

    return {
      x: p1.x + (dx / mag) * extendBy,
      y: p1.y + (dy / mag) * extendBy,
    };
  }

  const p = path.getPointAtLength(totalLength * fraction);
  return { x: p.x, y: p.y };
}

function buildPathMetrics(path: SVGPathElement): PathMetrics {
  const totalLength = path.getTotalLength();

  // top -> upper-right -> lower-right -> bottom
  const slotFractions = [0.035, 0.31, 0.69, 0.965];

  const slots = slotFractions.map((fraction, index) => {
    const p = path.getPointAtLength(totalLength * fraction);

    return {
      x: p.x - 350,
      y: p.y - 350,
      scale: index === 0 || index === 3 ? 0.9 : 1,
      opacity: 1,
      zIndex: index === 1 || index === 2 ? 50 : 40,
    };
  });

  const entryOuter = getPointBeyondPath(path, totalLength, 1.03, 14);
  const entryOnLine = path.getPointAtLength(totalLength * 0.985);

  const exitOnLine = path.getPointAtLength(totalLength * 0.02);
  const exitOuter = getPointBeyondPath(path, totalLength, -0.015, 10);

  return {
    slots,
    entry: {
      x: lerp(entryOuter.x, entryOnLine.x, 0.42) - 350,
      y: lerp(entryOuter.y, entryOnLine.y, 0.42) - 350,
      scale: 0.78,
      opacity: 0,
      zIndex: 35,
    },
    exit: {
      x: lerp(exitOnLine.x, exitOuter.x, 0.82) - 350,
      y: lerp(exitOnLine.y, exitOuter.y, 0.82) - 350,
      scale: 0.76,
      opacity: 0,
      zIndex: 35,
    },
  };
}

export default function HeroServicesOrbitSection() {
  const outerPathRef = useRef<SVGPathElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(1);
  const [pathMetrics, setPathMetrics] = useState<PathMetrics | null>(null);

  const [nodes, setNodes] = useState<OrbitNode[]>([
    { id: "node-0", serviceIndex: 0, slotIndex: 0 },
    { id: "node-1", serviceIndex: 1, slotIndex: 1 },
    { id: "node-2", serviceIndex: 2, slotIndex: 2 },
    { id: "node-3", serviceIndex: 3, slotIndex: 3 },
  ]);

//   const STEP_INTERVAL = 3200;
//   const ORBIT_MOVE_DURATION = 1.15;

  const STEP_INTERVAL = 6000;
const ORBIT_MOVE_DURATION = 2.2;

  useEffect(() => {
    const measure = () => {
      if (!outerPathRef.current) return;
      setPathMetrics(buildPathMetrics(outerPathRef.current));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setNodes((prev) => {
        const moved = prev
          .map((node) => ({
            ...node,
            slotIndex: node.slotIndex - 1,
          }))
          .filter((node) => node.slotIndex >= 0);

        const highestService = prev[prev.length - 1].serviceIndex;
        const nextService = (highestService + 1) % services.length;

        moved.push({
          id: `node-${Date.now()}`,
          serviceIndex: nextService,
          slotIndex: 3,
        });

        return moved;
      });

      setActiveIndex((prev) => (prev + 1) % services.length);
    }, STEP_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  const activeItem = services[activeIndex];
  const ActiveIcon = activeItem.icon;

  const renderedNodes = useMemo(() => {
    if (!pathMetrics) return [];

    return nodes.map((node) => {
      const service = services[node.serviceIndex];
      const slot = pathMetrics.slots[node.slotIndex] ?? pathMetrics.slots[0];

      return {
        ...node,
        ...service,
        ...slot,
        isActive: node.serviceIndex === activeIndex,
      };
    });
  }, [nodes, activeIndex, pathMetrics]);

  return (
    <section className="relative overflow-hidden bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <div className="absolute inset-0 -z-20">
        <div className="absolute left-[-8%] top-[8%] h-[420px] w-[420px] rounded-full bg-cyan-500/8 blur-3xl dark:bg-cyan-500/12" />
        <div className="absolute right-[-6%] top-[18%] h-[460px] w-[460px] rounded-full bg-violet-500/8 blur-3xl dark:bg-violet-500/12" />
        <div className="absolute bottom-[-10%] left-[24%] h-[300px] w-[300px] rounded-full bg-sky-500/6 blur-3xl dark:bg-sky-500/10" />
      </div>

      <div className="mx-auto grid min-h-screen max-w-[1380px] grid-cols-1 items-center gap-8 px-6 py-16 lg:grid-cols-[0.82fr_1.18fr] lg:px-10 xl:px-16">
        {/* LEFT SIDE */}
        <div className="relative z-20 mx-auto w-full max-w-[520px] lg:mx-0 lg:max-w-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.title}
              initial={{
                opacity: 0,
                x: -28,
                y: -34,
                rotate: -3,
                scale: 0.975,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                x: 28,
                y: 26,
                rotate: 2,
                scale: 0.985,
                filter: "blur(8px)",
              }}
              transition={{
                duration: 0.72,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="will-change-transform"
            >
              <motion.div
                initial={{ opacity: 0, x: -12, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-600 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300"
              >
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                {activeItem.heroLabel}
              </motion.div>

              <div className="mt-6 flex items-start gap-4">
                <div
                  className={`hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${activeItem.gradient} text-white shadow-[0_14px_34px_rgba(14,165,233,0.18)] sm:flex`}
                >
                  <ActiveIcon size={20} />
                </div>

                <h1 className="max-w-[12ch] text-[2.4rem] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-[3rem] lg:text-[3.5rem] xl:text-[3rem]">
                  {activeItem.heroTitle}
                </h1>
              </div>

              <p className="mt-6 max-w-[470px] text-[15px] leading-8 text-slate-600 dark:text-slate-300 sm:text-base">
                {activeItem.heroText}
              </p>

              <div className="mt-7 space-y-3">
                {activeItem.points.map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: -14, y: -6 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{
                      duration: 0.42,
                      delay: 0.14 + index * 0.08,
                    }}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                  >
                    <span
                      className={`h-2.5 w-2.5 rounded-full bg-gradient-to-br ${activeItem.gradient}`}
                    />
                    <span className="font-medium">{point}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <button className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] dark:bg-white dark:text-slate-950">
                  Start a Project
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                <button className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-white/15 dark:text-white dark:hover:bg-white/5">
                  View Our Work
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex min-h-[720px] items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[760px]">
            <div className="absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-500/20" />
              <div className="absolute right-6 top-20 h-[180px] w-[180px] rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/20" />
            </div>

            <svg
              className="absolute inset-0 h-full w-full overflow-visible"
              viewBox="0 0 700 700"
              fill="none"
            >
              <path
                ref={outerPathRef}
                d={OUTER_PATH_D}
                stroke="currentColor"
                className="text-cyan-500/34"
                strokeWidth="4"
                strokeLinecap="round"
              />

              <path
                d="M350 188 C 450 200, 515 275, 512 350 C 509 435, 448 500, 350 512"
                stroke="currentColor"
                className="text-cyan-500/16"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>

            <div className="relative z-20 flex h-[700px] items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.title}
                  initial={{
                    opacity: 0,
                    scale: 0.965,
                    x: 10,
                    y: -12,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.98,
                    x: -8,
                    y: 14,
                    filter: "blur(8px)",
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-[350px] w-[350px] flex-col justify-center rounded-full border border-slate-200 bg-white/92 p-10 text-center shadow-[0_30px_90px_rgba(15,23,42,0.16)] backdrop-blur dark:border-white/10 dark:bg-slate-900/88"
                >
                  <div className="mx-auto">
                    <div
                      className={`inline-flex rounded-3xl bg-gradient-to-br ${activeItem.gradient} p-4 text-white shadow-lg`}
                    >
                      <ActiveIcon size={28} />
                    </div>
                  </div>

                  <div className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-cyan-500">
                    Active Service
                  </div>

                  <h3 className="mt-2 text-3xl font-semibold">{activeItem.title}</h3>

                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    {activeItem.short}
                  </p>

                  <p className="mx-auto mt-5 max-w-[250px] leading-7 text-slate-600 dark:text-slate-300">
                    {activeItem.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute inset-0 z-30">
              <AnimatePresence>
                {pathMetrics &&
                  renderedNodes.map((node) => {
                    const Icon = node.icon;

                    return (
                      <motion.button
                        key={node.id}
                        onClick={() => setActiveIndex(node.serviceIndex)}
                        initial={{
                          x: pathMetrics.entry.x,
                          y: pathMetrics.entry.y,
                          scale: pathMetrics.entry.scale,
                          opacity: 0,
                        }}
                        animate={{
                          x: node.x,
                          y: node.y,
                          scale: node.isActive ? 1.06 : node.scale,
                          opacity: 1,
                        }}
                        exit={{
                          x: pathMetrics.exit.x,
                          y: pathMetrics.exit.y,
                          scale: pathMetrics.exit.scale,
                          opacity: 0,
                        }}
                        transition={{
                          x: {
                            duration: ORBIT_MOVE_DURATION,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          y: {
                            duration: ORBIT_MOVE_DURATION,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          scale: {
                            duration: ORBIT_MOVE_DURATION,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          opacity: {
                            duration: 0.12,
                            ease: "linear",
                          },
                        }}
                        style={{ zIndex: node.zIndex }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                      >
                        <div
                          className={`flex h-[92px] w-[92px] items-center justify-center rounded-full border shadow-[0_14px_40px_rgba(15,23,42,0.12)] backdrop-blur transition ${
                            node.isActive
                              ? "border-cyan-500/40 bg-white dark:bg-slate-900"
                              : "border-slate-200 bg-white/92 dark:border-white/10 dark:bg-slate-900/85"
                          }`}
                        >
                          <div
                            className={`inline-flex rounded-2xl bg-gradient-to-br ${node.gradient} p-3 text-white`}
                          >
                            <Icon size={18} />
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}