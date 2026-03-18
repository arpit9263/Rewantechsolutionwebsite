"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
    description:
      "Modern websites and web applications built for speed, scalability, and strong business presence.",
    icon: Code2,
    points: ["Business websites", "Admin dashboards", "Custom web apps"],
    featured: true,
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps with premium user experience and strong performance.",
    icon: Smartphone,
    points: ["Android & iOS", "Cross-platform apps", "App integrations"],
  },
  {
    title: "UI/UX Design",
    description:
      "Clean, modern interfaces designed to improve trust, usability, and conversions.",
    icon: Palette,
    points: ["Wireframes", "Design systems", "User flows"],
  },
  {
    title: "SaaS Product Development",
    description:
      "Scalable SaaS platforms from MVP to full business-ready systems.",
    icon: Layers3,
    points: ["MVP builds", "Dashboards", "Subscription systems"],
  },
  {
    title: "AI Integration",
    description:
      "Practical AI solutions and automation workflows for smarter digital products.",
    icon: Brain,
    points: ["Chat integrations", "Automation", "Recommendations"],
  },
  {
    title: "Cloud & Backend",
    description:
      "Reliable backend systems and cloud infrastructure for secure long-term growth.",
    icon: Cloud,
    points: ["APIs", "Databases", "Deployment"],
  },
];

export default function ServicesShowcase() {
  const featuredService = services.find((service) => service.featured);
  const regularServices = services.filter((service) => !service.featured);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left Intro */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28"
          >
            <div className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-500">
              Services Showcase
            </div>

            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Services designed to help businesses build better digital products
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Instead of generic execution, we focus on modern design,
              scalable development, and business-oriented delivery across web,
              mobile, SaaS, AI, and backend systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
              >
                Explore All Services
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-slate-300 px-6 py-3 dark:border-white/20"
              >
                Discuss a Project
              </Link>
            </div>
          </motion.div>

          {/* Right Showcase */}
          <div className="space-y-6">
            {/* Featured service */}
            {featuredService && (
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                whileHover={{ y: -6 }}
                className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/5"
              >
                <div className="mb-4 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-500">
                  Most In-Demand
                </div>

                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-2xl">
                    <div className="inline-flex rounded-2xl bg-cyan-500/10 p-3 text-cyan-500">
                      <featuredService.icon size={24} />
                    </div>

                    <h3 className="mt-5 text-3xl font-semibold">
                      {featuredService.title}
                    </h3>

                    <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
                      {featuredService.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {featuredService.points.map((point) => (
                        <span
                          key={point}
                          className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 dark:border-white/10 dark:text-slate-300"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="min-w-[170px] rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-slate-900/70">
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      Best for
                    </div>
                    <div className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                      <div>• Growing businesses</div>
                      <div>• Startups</div>
                      <div>• Service brands</div>
                    </div>

                    <Link
                      href="/services"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-500"
                    >
                      Learn more <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Other services */}
            <div className="grid gap-6 md:grid-cols-2">
              {regularServices.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    whileHover={{ y: -6 }}
                    className="rounded-[28px] border border-slate-200 bg-white p-6 transition dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="inline-flex rounded-2xl bg-cyan-500/10 p-3 text-cyan-500">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-5 text-2xl font-semibold">
                      {service.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                      {service.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.points.map((point) => (
                        <span
                          key={point}
                          className="rounded-full border border-slate-200 px-3 py-1.5 text-xs text-slate-600 dark:border-white/10 dark:text-slate-300"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}