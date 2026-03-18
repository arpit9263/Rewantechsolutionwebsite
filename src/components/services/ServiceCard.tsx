"use client";

import { ArrowRight, CheckCircle2, Code2, Smartphone, Palette, Brain, Cloud, Layers3 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

type Service = {
  title: string;
  description: string;
  icon: string;
  points: string[];
};

const iconMap = {
  code: Code2,
  smartphone: Smartphone,
  palette: Palette,
  brain: Brain,
  cloud: Cloud,
  layers: Layers3,
};

export default function ServiceCard({
  service,
  delay = 0,
}: {
  service: Service;
  delay?: number;
}) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -8 }}
      className="rounded-[28px] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5"
    >
      <div className="inline-flex rounded-2xl bg-cyan-500/10 p-3 text-cyan-500">
        <Icon size={24} />
      </div>

      <h3 className="mt-5 text-2xl font-semibold">{service.title}</h3>

      <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
        {service.description}
      </p>

      <div className="mt-6 space-y-3">
        {service.points.map((point) => (
          <div
            key={point}
            className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300"
          >
            <CheckCircle2 size={18} className="mt-0.5 text-cyan-500" />
            <span>{point}</span>
          </div>
        ))}
      </div>

      <Link
        href="/contact"
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-500"
      >
        Get started <ArrowRight size={16} />
      </Link>
    </motion.div>
  );
}