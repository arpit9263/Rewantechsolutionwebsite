"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  CalendarDays,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export default function FinalCTAInteractive() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const cardY1 = useTransform(scrollYProgress, [0, 1], [40, -30]);
  const cardY2 = useTransform(scrollYProgress, [0, 1], [70, -50]);
  const cardRotate1 = useTransform(scrollYProgress, [0, 1], [-6, 2]);
  const cardRotate2 = useTransform(scrollYProgress, [0, 1], [8, -2]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [0.8, 1.15]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.45]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["8%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-slate-200 bg-slate-950 py-24 text-white dark:border-white/10"
    >
      {/* background layers */}
      <div className="absolute inset-0">
        <motion.div
          style={{ scale: glowScale, opacity: glowOpacity }}
          className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500 blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.10),transparent_28%),linear-gradient(to_bottom,rgba(15,23,42,0.25),rgba(2,6,23,0.95))]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* top progress line */}
        <div className="mb-10 h-[2px] w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            style={{ width: progressWidth }}
            className="h-full rounded-full bg-cyan-400"
          />
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
          {/* Left content */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
              <Sparkles size={16} />
              Final Call To Action
            </div>

            <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
              Ready to build something that feels premium, modern, and business-ready?
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Let’s turn your idea into a polished website, app, SaaS platform,
              or digital system that improves trust, user experience, and long-term growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                Start Your Project
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/work"
                className="rounded-xl border border-white/15 px-6 py-3 text-white transition hover:bg-white/5"
              >
                View Work
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["Fast response", "Usually within 24 hours"],
                ["Flexible engagement", "Project or long-term support"],
                ["Modern execution", "Design + development together"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="font-medium">{title}</div>
                  <div className="mt-1 text-sm text-slate-400">{text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right scroll-reactive visual stack */}
          <div className="relative min-h-[460px]">
            {/* center board */}
            <motion.div
              style={{ y: cardY1 }}
              className="absolute left-1/2 top-10 z-20 w-full max-w-[430px] -translate-x-1/2 rounded-[32px] border border-white/10 bg-white/10 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            >
              <div className="rounded-[24px] border border-white/10 bg-slate-900/80 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-400">Project Inquiry</div>
                    <div className="mt-1 text-2xl font-semibold">
                      Let’s scope your product
                    </div>
                  </div>
                  <div className="rounded-2xl bg-cyan-400/15 px-3 py-2 text-sm text-cyan-300">
                    Open
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    ["Type", "Website / App / SaaS / AI"],
                    ["Timeline", "Flexible and goal-based"],
                    ["Focus", "Premium UX + scalable build"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="text-xs uppercase tracking-[0.16em] text-slate-400">
                        {label}
                      </div>
                      <div className="mt-1 text-sm font-medium">{value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-cyan-400/10 p-4 text-sm text-cyan-200">
                  Best fit for startups, growing businesses, and brands that want a more premium digital presence.
                </div>
              </div>
            </motion.div>

            {/* top-right card */}
            <motion.div
              style={{ y: cardY2, rotate: cardRotate2 }}
              className="absolute right-0 top-0 z-30 w-[220px] rounded-[28px] border border-white/10 bg-white/10 p-4 shadow-xl backdrop-blur-xl"
            >
              <div className="rounded-[22px] bg-slate-900/80 p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-emerald-400/10 p-2 text-emerald-300">
                    <CalendarDays size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Discovery Call</div>
                    <div className="text-xs text-slate-400">
                      Clarify goals quickly
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* bottom-left card */}
            <motion.div
              style={{ y: cardY1, rotate: cardRotate1 }}
              className="absolute bottom-8 left-0 z-30 w-[240px] rounded-[28px] border border-white/10 bg-white/10 p-4 shadow-xl backdrop-blur-xl"
            >
              <div className="rounded-[22px] bg-slate-900/80 p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-violet-400/10 p-2 text-violet-300">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Business-Focused Build</div>
                    <div className="text-xs text-slate-400">
                      Design that supports growth
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* message badge */}
            <motion.div
              style={{ y: cardY2 }}
              className="absolute bottom-0 right-10 z-40 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-lg backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-cyan-400/10 p-2 text-cyan-300">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <div className="text-sm font-semibold">Quick response</div>
                  <div className="text-xs text-slate-400">Usually within 24 hours</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}