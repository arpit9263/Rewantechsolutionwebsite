"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

type CaseStudy = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  result: string;
  image: string;
  highlights: string[];
};

export default function CaseStudyCard({
  project,
  delay = 0,
}: {
  project: CaseStudy;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -8 }}
      className="overflow-hidden rounded-[32px] border border-slate-200 bg-white dark:border-white/10 dark:bg-white/5"
    >
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[320px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-8 md:p-10">
          <div className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-500">
            {project.category}
          </div>

          <h3 className="mt-3 text-3xl font-semibold">{project.title}</h3>

          <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 dark:border-white/10 dark:text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-cyan-500/10 p-4 text-cyan-600 dark:text-cyan-300">
            {project.result}
          </div>

          <div className="mt-6 space-y-3">
            {project.highlights.map((point) => (
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
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-500"
          >
            Discuss a similar project <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}