"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  PencilRuler,
  Code2,
  Rocket,
  Wrench,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discovery",
    short: "Understand business goals and real requirements.",
    description:
      "We begin by understanding your business model, users, challenges, and goals so the product direction is based on real needs, not assumptions.",
    points: [
      "Business and user understanding",
      "Scope clarification",
      "Feature prioritization",
    ],
    icon: Search,
    accent: "from-cyan-500/20 to-blue-500/10",
  },
  {
    id: "02",
    title: "Design",
    short: "Create premium interfaces and better user flow.",
    description:
      "We design user journeys, wireframes, and clean visual systems that make the product feel modern, intuitive, and trustworthy.",
    points: [
      "Wireframes and UI direction",
      "Experience-first design thinking",
      "Premium visual hierarchy",
    ],
    icon: PencilRuler,
    accent: "from-violet-500/20 to-cyan-500/10",
  },
  {
    id: "03",
    title: "Development",
    short: "Build with scalable code and modern architecture.",
    description:
      "We turn the approved design into a fast, scalable, and maintainable digital product using modern frameworks and structured engineering practices.",
    points: [
      "Frontend and backend execution",
      "Clean architecture decisions",
      "Scalable implementation",
    ],
    icon: Code2,
    accent: "from-emerald-500/20 to-cyan-500/10",
  },
  {
    id: "04",
    title: "Launch",
    short: "Deploy smoothly and make the product business-ready.",
    description:
      "We handle deployment, final refinements, and launch-readiness so the product goes live with stability, performance, and confidence.",
    points: [
      "Deployment and optimization",
      "Quality checks",
      "Launch support",
    ],
    icon: Rocket,
    accent: "from-orange-500/20 to-pink-500/10",
  },
  {
    id: "05",
    title: "Support",
    short: "Improve, maintain, and scale after launch.",
    description:
      "After launch, we continue with updates, support, refinements, and scaling improvements so your product keeps growing with your business.",
    points: [
      "Long-term maintenance",
      "Feature improvements",
      "Performance and growth support",
    ],
    icon: Wrench,
    accent: "from-slate-500/20 to-cyan-500/10",
  },
];

export default function ProcessTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps[activeIndex];
  const ActiveIcon = activeStep.icon;

  return (
    <section className="border-y border-slate-200 bg-slate-50/70 py-20 dark:border-white/10 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-500">
            Process Timeline
          </div>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            A process that feels structured, interactive, and easy to trust
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Instead of showing static steps only, this section lets visitors
            explore how your team works step by step. That makes the process
            feel more intentional and premium.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left interactive timeline */}
          <div className="rounded-[30px] border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5">
            <div className="space-y-3">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === activeIndex;

                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveIndex(index)}
                    className={`group flex w-full items-start gap-4 rounded-[24px] border p-4 text-left transition ${
                      isActive
                        ? "border-cyan-500/30 bg-cyan-500/10"
                        : "border-slate-200 bg-slate-50/70 hover:border-cyan-500/20 hover:bg-cyan-500/5 dark:border-white/10 dark:bg-white/[0.03]"
                    }`}
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                        isActive
                          ? "bg-cyan-500 text-white"
                          : "bg-slate-200 text-slate-700 dark:bg-white/10 dark:text-slate-300"
                      }`}
                    >
                      <Icon size={20} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-medium tracking-[0.18em] text-cyan-500">
                          {step.id}
                        </span>
                        <span className="text-lg font-semibold">{step.title}</span>
                      </div>

                      <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {step.short}
                      </p>
                    </div>

                    <ArrowRight
                      size={18}
                      className={`mt-1 shrink-0 transition ${
                        isActive
                          ? "translate-x-1 text-cyan-500"
                          : "text-slate-400 group-hover:text-cyan-500"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right dynamic detail panel */}
          <div className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-white dark:border-white/10 dark:bg-white/5">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${activeStep.accent}`}
            />
            <div className="relative p-8 md:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.28 }}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-500">
                        Step {activeStep.id}
                      </div>
                      <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
                        {activeStep.title}
                      </h3>
                    </div>

                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-cyan-500 text-white shadow-lg">
                      <ActiveIcon size={28} />
                    </div>
                  </div>

                  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-200">
                    {activeStep.description}
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {activeStep.points.map((point) => (
                      <motion.div
                        key={point}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="rounded-[22px] border border-slate-200 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/5"
                      >
                        <div className="text-sm font-medium text-slate-700 dark:text-slate-200">
                          {point}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-[24px] border border-slate-200 bg-white/70 p-5 dark:border-white/10 dark:bg-slate-950/30">
                    <div className="text-sm uppercase tracking-[0.18em] text-cyan-500">
                      Why this step matters
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      This stage helps reduce confusion, improve communication,
                      and make the final product feel more polished and more
                      aligned with real business goals.
                    </p>
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