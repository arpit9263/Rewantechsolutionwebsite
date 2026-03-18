"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Gauge,
  Layers3,
  Headphones,
  Sparkles,
} from "lucide-react";

const metrics = [
  {
    title: "Modern Stack",
    text: "Built with scalable technologies and clean architecture.",
    icon: Layers3,
  },
  {
    title: "Performance Focus",
    text: "Fast-loading, responsive, and optimized user experiences.",
    icon: Gauge,
  },
  {
    title: "Reliable Delivery",
    text: "Structured execution with clarity, quality, and consistency.",
    icon: ShieldCheck,
  },
  {
    title: "Long-Term Support",
    text: "Support mindset for improvement, scaling, and maintenance.",
    icon: Headphones,
  },
];

export default function TrustMetricsStrip() {
  return (
    <section className="border-y border-slate-200 bg-white py-8 dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.22em] text-cyan-500">
          <Sparkles size={16} />
          Why businesses trust our build approach
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className="group rounded-[26px] border border-slate-200 bg-slate-50/80 p-5 transition dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-500">
                    <Icon size={20} />
                  </div>

                  <div className="h-2 w-2 rounded-full bg-cyan-500/70 opacity-60 transition group-hover:opacity-100" />
                </div>

                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}