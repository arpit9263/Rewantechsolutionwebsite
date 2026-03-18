"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
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
    icon: Code2,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Mobile Apps",
    short: "Cross-platform app systems",
    description:
      "Smooth app experiences with strong UX, clean flows, and performance-first execution.",
    icon: Smartphone,
    gradient: "from-pink-500 to-orange-500",
  },
  {
    title: "UI/UX Design",
    short: "Premium product design",
    description:
      "Clear interfaces, stronger usability, and visual systems that make products feel polished.",
    icon: Palette,
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "SaaS Products",
    short: "Dashboards & platforms",
    description:
      "Business-ready SaaS products with modern architecture, product thinking, and long-term scale.",
    icon: Layers3,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "AI Integration",
    short: "Practical AI workflows",
    description:
      "Automation and smart product layers that improve efficiency and add real business value.",
    icon: Brain,
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    title: "Cloud & Backend",
    short: "Reliable system foundation",
    description:
      "Secure APIs, backend logic, and cloud-ready infrastructure built for stability and growth.",
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
  extendBy = 18
) {
  const clamped = Math.min(1, Math.max(0, fraction));
  const baseLength = totalLength * clamped;

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

  const p = path.getPointAtLength(baseLength);
  return { x: p.x, y: p.y };
}

function buildPathMetrics(path: SVGPathElement): PathMetrics {
  const totalLength = path.getTotalLength();

  // top -> upper-right -> lower-right -> bottom
  const slotFractions = [0.03, 0.3, 0.68, 0.97];

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

  // entry starts slightly beyond bottom end and becomes visible once on the line
  const entryOuter = getPointBeyondPath(path, totalLength, 1.04, 24);
  const entryOnLine = path.getPointAtLength(totalLength * 0.995);

  // exit goes slightly beyond top end; opacity stays 1 until move completes
  const exitOuter = getPointBeyondPath(path, totalLength, -0.04, 24);
  const exitOnLine = path.getPointAtLength(totalLength * 0.005);

  return {
    slots,
    entry: {
      x: lerp(entryOuter.x, entryOnLine.x, 0.35) - 350,
      y: lerp(entryOuter.y, entryOnLine.y, 0.35) - 350,
      scale: 0.78,
      opacity: 0,
      zIndex: 35,
    },
    exit: {
      x: exitOuter.x - 350,
      y: exitOuter.y - 350,
      scale: 0.76,
      opacity: 1,
      zIndex: 35,
    },
  };
}

export default function HeroRightOrbitVisual() {
  const outerPathRef = useRef<SVGPathElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(1);
  const [pathMetrics, setPathMetrics] = useState<PathMetrics | null>(null);

  const [nodes, setNodes] = useState<OrbitNode[]>([
    { id: "node-0", serviceIndex: 0, slotIndex: 0 },
    { id: "node-1", serviceIndex: 1, slotIndex: 1 },
    { id: "node-2", serviceIndex: 2, slotIndex: 2 },
    { id: "node-3", serviceIndex: 3, slotIndex: 3 },
  ]);

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
    }, 3400);

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
    <div className="relative flex min-h-[680px] items-center justify-center overflow-visible">
      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-500/20" />
        <div className="absolute right-8 top-24 h-[180px] w-[180px] rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/20" />
      </div>

      {/* orbit lines */}
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

      {/* center circle */}
      <div className="relative z-20 flex h-[360px] w-[360px] items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.title}
            initial={{ opacity: 0, scale: 0.94, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: -10 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
            className="flex h-[360px] w-[360px] flex-col justify-center rounded-full border border-slate-200 bg-white/92 p-10 text-center shadow-[0_30px_90px_rgba(15,23,42,0.16)] backdrop-blur dark:border-white/10 dark:bg-slate-900/88"
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

      {/* orbit nodes */}
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
                    scale: node.isActive ? 1.08 : node.scale,
                    opacity: 1,
                  }}
                  exit={{
                    x: pathMetrics.exit.x,
                    y: pathMetrics.exit.y,
                    scale: pathMetrics.exit.scale,
                    opacity: 1,
                  }}
                  transition={{
                    x: {
                      duration: 1.75,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    y: {
                      duration: 1.75,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    scale: {
                      duration: 1.75,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    opacity: {
                      duration: 0.22,
                      ease: "linear",
                    },
                  }}
                  style={{ zIndex: node.zIndex }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div
                    className={`flex h-[96px] w-[96px] items-center justify-center rounded-full border shadow-[0_14px_40px_rgba(15,23,42,0.12)] backdrop-blur transition ${
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
  );
}