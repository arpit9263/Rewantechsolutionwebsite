"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Layers3, Smartphone } from "lucide-react";

export default function HeroVisual() {
  return (
    <div className="relative flex min-h-[620px] items-center justify-center">
      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl dark:bg-cyan-500/25" />
        <div className="absolute right-8 top-16 h-[180px] w-[180px] rounded-full bg-indigo-500/20 blur-3xl dark:bg-indigo-500/25" />
      </div>

      {/* Main web preview */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="absolute left-6 top-16 z-20 w-[78%] max-w-[560px] rounded-[32px] border border-slate-200/80 bg-white/90 p-3 shadow-[0_30px_80px_rgba(15,23,42,0.14)] backdrop-blur dark:border-white/10 dark:bg-slate-900/80"
      >
        <div className="overflow-hidden rounded-[24px] border border-slate-200 dark:border-white/10">
          {/* browser bar */}
          <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-slate-900">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <div className="ml-4 rounded-full bg-white px-4 py-1 text-xs text-slate-500 dark:bg-white/5 dark:text-slate-400">
              rewantechsolutions.com
            </div>
          </div>

          {/* preview image */}
          <div className="relative h-[320px] w-full bg-slate-100 dark:bg-slate-800">
            <Image
              src="/images/hero-dashboard.jpg"
              alt="Website preview"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* Mobile app mockup */}
      <motion.div
        initial={{ opacity: 0, x: 40, y: 30, rotate: 10 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: 10 }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        className="absolute right-0 top-40 z-30 w-[180px] rounded-[34px] border border-slate-200/80 bg-white/95 p-2 shadow-[0_20px_60px_rgba(15,23,42,0.16)] dark:border-white/10 dark:bg-slate-900/90"
      >
        <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-slate-950">
          <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-slate-300 dark:bg-white/10" />
          <div className="relative h-[260px] overflow-hidden rounded-[20px] bg-slate-200 dark:bg-slate-800">
            <Image
              src="/images/project-2.jpg"
              alt="Mobile app preview"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-3 space-y-2">
            <div className="h-3 w-20 rounded bg-slate-300 dark:bg-white/10" />
            <div className="h-3 w-full rounded bg-slate-200 dark:bg-white/5" />
            <div className="h-3 w-2/3 rounded bg-slate-200 dark:bg-white/5" />
          </div>
        </div>
      </motion.div>

      {/* top badge */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-0 z-40 hidden rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-lg dark:border-white/10 dark:bg-slate-900/90 xl:block"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-cyan-500/10 p-2 text-cyan-500">
            <Layers3 size={18} />
          </div>
          <div>
            <div className="text-sm font-semibold">Multi-platform Design</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Web + Mobile consistency
            </div>
          </div>
        </div>
      </motion.div>

      {/* bottom left result badge */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-8 z-40 hidden rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-lg dark:border-white/10 dark:bg-slate-900/90 xl:block"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-emerald-500/10 p-2 text-emerald-500">
            <CheckCircle2 size={18} />
          </div>
          <div>
            <div className="text-sm font-semibold">Premium Delivery</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Modern UI + scalable build
            </div>
          </div>
        </div>
      </motion.div>

      {/* side mini metric */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="absolute bottom-24 right-10 z-40 hidden rounded-2xl border border-slate-200 bg-white/95 px-4 py-4 shadow-lg dark:border-white/10 dark:bg-slate-900/90 lg:block"
      >
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <Smartphone size={16} />
          <span className="text-xs">Product Reach</span>
        </div>
        <div className="mt-2 text-2xl font-semibold">Web + App</div>
        <div className="mt-1 flex items-center gap-1 text-xs text-cyan-500">
          <ArrowUpRight size={14} />
          modern experience system
        </div>
      </motion.div>
    </div>
  );
}