"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Sparkles } from "lucide-react";

const comparisonData = [
  {
    title: "Freelancers",
    subtitle: "Low cost, but often limited structure",
    negative: [
      "Inconsistent communication",
      "Limited scale for larger projects",
      "Weak long-term support",
      "Design and development quality may vary",
    ],
    positive: [
      "Affordable for small tasks",
    ],
    featured: false,
  },
  {
    title: "Typical Agencies",
    subtitle: "Broader teams, but often template-heavy",
    negative: [
      "Can feel generic and less flexible",
      "Premium pricing without premium execution",
      "Heavy process, slower movement",
      "Weak product storytelling",
    ],
    positive: [
      "Can handle bigger projects",
      "Team-based workflow",
    ],
    featured: false,
  },
  {
    title: "Rewan Tech Solutions",
    subtitle: "Premium execution with business-focused delivery",
    negative: [],
    positive: [
      "Modern UI and premium visual direction",
      "Scalable web, app, SaaS, and AI solutions",
      "Cleaner communication and focused execution",
      "Flexible for startups and growing businesses",
      "Long-term support mindset",
      "Built for trust, speed, and quality",
    ],
    featured: true,
  },
];

export default function ComparisonSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50/70 py-20 dark:border-white/10 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.22em] text-cyan-500">
            <Sparkles size={16} />
            Why our approach feels different
          </div>

          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            Not just another service provider — a more premium digital partner
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Many clients struggle between cheap freelancers and generic agencies.
            This section helps position your company as a smarter middle ground:
            premium execution, modern design, and focused delivery.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {comparisonData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              whileHover={{ y: -6 }}
              className={`rounded-[30px] border p-7 transition ${
                item.featured
                  ? "border-cyan-500/30 bg-white shadow-[0_20px_60px_rgba(34,211,238,0.10)] dark:bg-white/5"
                  : "border-slate-200 bg-white dark:border-white/10 dark:bg-white/5"
              }`}
            >
              {item.featured && (
                <div className="mb-4 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-500">
                  Best Fit
                </div>
              )}

              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {item.subtitle}
              </p>

              {item.positive.length > 0 && (
                <div className="mt-6">
                  <div className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-emerald-500">
                    Strengths
                  </div>
                  <div className="space-y-3">
                    {item.positive.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-emerald-500"
                        />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {item.negative.length > 0 && (
                <div className="mt-6">
                  <div className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-rose-500">
                    Limitations
                  </div>
                  <div className="space-y-3">
                    {item.negative.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300"
                      >
                        <XCircle
                          size={18}
                          className="mt-0.5 shrink-0 text-rose-500"
                        />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}