"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Brain,
  Cloud,
  Code2,
  Database,
  Layers3,
  Server,
  Smartphone,
  Sparkles,
} from "lucide-react";

const techGroups = [
  {
    id: "frontend",
    label: "Frontend",
    title: "Frontend systems built for speed and premium UX",
    description:
      "We use modern frontend tools to create fast, responsive, and visually polished interfaces that feel premium across devices.",
    icon: Code2,
    color: "text-cyan-500",
    bg: "from-cyan-500/15 to-blue-500/10",
    items: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    notes: [
      "Responsive user interfaces",
      "Modern component systems",
      "Fast and scalable architecture",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    title: "Reliable backend architecture for modern products",
    description:
      "We build structured backend systems that support business workflows, authentication, APIs, and long-term growth.",
    icon: Server,
    color: "text-emerald-500",
    bg: "from-emerald-500/15 to-cyan-500/10",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "Server Logic",
      "Middleware Systems",
    ],
    notes: [
      "Structured business logic",
      "Secure API systems",
      "Scalable product foundation",
    ],
  },
  {
    id: "database",
    label: "Database",
    title: "Data systems designed for performance and scale",
    description:
      "A strong product needs the right data structure. We choose database systems based on speed, scale, and long-term maintainability.",
    icon: Database,
    color: "text-violet-500",
    bg: "from-violet-500/15 to-cyan-500/10",
    items: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "Schema Design",
      "Data Modeling",
    ],
    notes: [
      "Reliable data storage",
      "Structured architecture choices",
      "Scalable product data flow",
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    title: "Cross-platform mobile experiences with modern UX",
    description:
      "We create mobile-first digital products with performance, clean interfaces, and strong usability across platforms.",
    icon: Smartphone,
    color: "text-pink-500",
    bg: "from-pink-500/15 to-orange-500/10",
    items: [
      "React Native",
      "Flutter",
      "Cross-platform UI",
      "App Integrations",
      "Push Systems",
      "Mobile UX Patterns",
    ],
    notes: [
      "Faster launch cycles",
      "Consistent user experience",
      "Scalable mobile architecture",
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    title: "Cloud and deployment workflows for reliable launches",
    description:
      "From deployment to hosting and long-term scalability, we use cloud-friendly workflows that keep products stable and easy to improve.",
    icon: Cloud,
    color: "text-sky-500",
    bg: "from-sky-500/15 to-indigo-500/10",
    items: [
      "AWS",
      "Vercel",
      "Netlify",
      "Cloud Hosting",
      "Deployment Pipelines",
      "Performance Optimization",
    ],
    notes: [
      "Stable launch environment",
      "Modern deployment flow",
      "Future-ready hosting setup",
    ],
  },
  {
    id: "ai",
    label: "AI",
    title: "Practical AI integrations for business-focused products",
    description:
      "We use AI where it creates real value — automation, intelligence layers, support systems, and smarter digital experiences.",
    icon: Brain,
    color: "text-amber-500",
    bg: "from-amber-500/15 to-cyan-500/10",
    items: [
      "AI Chat Integrations",
      "Workflow Automation",
      "Recommendation Systems",
      "Prompt-based Features",
      "Support Assistants",
      "Smart Business Logic",
    ],
    notes: [
      "Business-first AI use cases",
      "Useful automation layers",
      "Smarter product workflows",
    ],
  },
];

export default function TechnologyGridInteractive() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = techGroups[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.22em] text-cyan-500">
            <Sparkles size={16} />
            Technology Interaction
          </div>

          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            Explore the stack behind our product execution
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Instead of a plain badge wall, this section lets visitors explore
            the technologies behind your services in a more intentional and
            premium way.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          {/* Left selector rail */}
          <div className="rounded-[30px] border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5">
            <div className="space-y-3">
              {techGroups.map((group, index) => {
                const Icon = group.icon;
                const isActive = index === activeIndex;

                return (
                  <button
                    key={group.id}
                    onClick={() => setActiveIndex(index)}
                    className={`w-full rounded-[24px] border p-4 text-left transition ${
                      isActive
                        ? "border-cyan-500/30 bg-cyan-500/10"
                        : "border-slate-200 bg-slate-50/80 hover:border-cyan-500/20 hover:bg-cyan-500/5 dark:border-white/10 dark:bg-white/[0.03]"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                          isActive
                            ? "bg-cyan-500 text-white"
                            : "bg-slate-200 text-slate-700 dark:bg-white/10 dark:text-slate-300"
                        }`}
                      >
                        <Icon size={20} />
                      </div>

                      <div className="min-w-0">
                        <div className="text-lg font-semibold">{group.label}</div>
                        <div className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                          {group.title}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right dynamic board */}
          <div className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-white dark:border-white/10 dark:bg-white/5">
            <div className={`absolute inset-0 bg-gradient-to-br ${active.bg}`} />

            <div className="relative p-8 md:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.28 }}
                >
                  {/* top header */}
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-2xl">
                      <div className={`text-sm font-medium uppercase tracking-[0.22em] ${active.color}`}>
                        {active.label}
                      </div>
                      <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
                        {active.title}
                      </h3>
                      <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
                        {active.description}
                      </p>
                    </div>

                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-white text-slate-900 shadow-lg dark:bg-slate-950 dark:text-white">
                      <ActiveIcon size={28} />
                    </div>
                  </div>

                  {/* interactive tech board */}
                  <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {active.items.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.22, delay: index * 0.03 }}
                        whileHover={{ y: -4 }}
                        className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-slate-950/40"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="text-sm font-medium text-slate-800 dark:text-slate-200">
                            {item}
                          </div>
                          <div className="h-2.5 w-2.5 rounded-full bg-cyan-500" />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* bottom capability strip */}
                  <div className="mt-8 grid gap-4 md:grid-cols-3">
                    {active.notes.map((note, index) => (
                      <motion.div
                        key={note}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.22, delay: 0.08 + index * 0.04 }}
                        className="rounded-[22px] border border-slate-200 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/5"
                      >
                        <div className="text-sm font-medium text-slate-700 dark:text-slate-200">
                          {note}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}