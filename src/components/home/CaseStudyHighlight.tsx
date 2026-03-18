"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const featuredCaseStudy = {
  category: "Featured Case Study",
  title: "A premium digital product experience built for growth",
  description:
    "This section highlights how your company can present projects in a more strategic and premium way. Instead of only listing tech stacks, we focus on the business problem, design quality, execution clarity, and final outcome.",
  result:
    "A stronger case study section increases trust, improves premium perception, and helps clients understand your real execution capability.",
  image: "/images/hero-dashboard.jpg",
  stats: [
    { label: "Execution Quality", value: "98%" },
    { label: "Product Focus", value: "Web + App" },
    { label: "Support Mindset", value: "24/7" },
  ],
  highlights: [
    "Modern design and product storytelling",
    "Better structure than generic portfolio cards",
    "Business-focused positioning",
    "Cleaner trust-building for service buyers",
  ],
};

export default function CaseStudyHighlight() {
  return (
    <section className="border-y border-slate-200 bg-slate-50/70 py-20 dark:border-white/10 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.22em] text-cyan-500">
            <Sparkles size={16} />
            Case Study Highlight
          </div>

          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            Show your work in a way that feels premium and business-ready
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            A strong case study section helps clients move from “this looks nice”
            to “this team can actually build what I need.”
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-12 overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/5"
        >
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left visual */}
            <div className="relative min-h-[420px] overflow-hidden">
              <Image
                src={featuredCaseStudy.image}
                alt={featuredCaseStudy.title}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur">
                  {featuredCaseStudy.category}
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {featuredCaseStudy.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur"
                    >
                      <div className="text-2xl font-semibold">{stat.value}</div>
                      <div className="mt-1 text-xs text-white/75">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className="p-8 md:p-10">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-500">
                Strategic presentation
              </div>

              <h3 className="mt-3 text-3xl font-semibold leading-tight">
                {featuredCaseStudy.title}
              </h3>

              <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
                {featuredCaseStudy.description}
              </p>

              <div className="mt-6 rounded-2xl bg-cyan-500/10 p-5 text-cyan-700 dark:text-cyan-300">
                {featuredCaseStudy.result}
              </div>

              <div className="mt-8 space-y-4">
                {featuredCaseStudy.highlights.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-cyan-500"
                    />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
                >
                  View All Work
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/contact"
                  className="rounded-xl border border-slate-300 px-6 py-3 dark:border-white/20"
                >
                  Build Something Similar
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}