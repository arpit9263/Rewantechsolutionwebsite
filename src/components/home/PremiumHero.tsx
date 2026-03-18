"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Layers3, Rocket } from "lucide-react";

export default function PremiumHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 dark:border-white/10">

      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl dark:bg-cyan-500/30" />
        <div className="absolute right-10 top-40 h-[220px] w-[220px] rounded-full bg-indigo-500/20 blur-3xl dark:bg-indigo-500/30" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8">

        {/* LEFT SIDE */}
        <div>

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-500">
            <Sparkles size={16} />
            Premium Digital Engineering
          </div>

          <h1 className="mt-6 text-5xl font-semibold leading-tight md:text-6xl">
            Build modern digital products that scale your business
          </h1>

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
            Rewan Tech Solutions designs and builds modern websites, SaaS
            platforms, mobile apps, and AI-powered digital systems for
            ambitious businesses.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
            >
              Start Your Project
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/work"
              className="rounded-xl border border-slate-300 px-6 py-3 dark:border-white/20"
            >
              View Work
            </Link>
          </div>

          {/* small trust row */}

          <div className="mt-10 grid grid-cols-3 gap-6 text-sm">

            <div>
              <div className="text-2xl font-semibold text-cyan-500">30+</div>
              <div className="text-slate-500 dark:text-slate-400">
                Projects Delivered
              </div>
            </div>

            <div>
              <div className="text-2xl font-semibold text-cyan-500">98%</div>
              <div className="text-slate-500 dark:text-slate-400">
                Client Satisfaction
              </div>
            </div>

            <div>
              <div className="text-2xl font-semibold text-cyan-500">24/7</div>
              <div className="text-slate-500 dark:text-slate-400">
                Support Mindset
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="relative flex items-center justify-center">

          {/* floating insight card */}

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute left-0 top-10 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg dark:border-white/10 dark:bg-white/5 xl:block"
          >
            <div className="flex items-center gap-2">
              <Layers3 size={18} className="text-cyan-500" />
              <span className="text-sm font-medium">
                Modern UI Systems
              </span>
            </div>
          </motion.div>

          {/* main preview */}

          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.6 }}
            className="relative z-20 w-[520px] rounded-[32px] border border-slate-200 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.15)] dark:border-white/10 dark:bg-slate-900"
          >

            <div className="overflow-hidden rounded-[24px] border border-slate-200 dark:border-white/10">

              {/* browser bar */}

              <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-slate-900">

                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />

                <div className="ml-4 text-xs text-slate-500">
                  rewantechsolutions.com
                </div>

              </div>

              {/* image */}

              <div className="relative h-[320px]">

                <Image
                  src="/images/hero-dashboard.jpg"
                  alt="Product preview"
                  fill
                  className="object-cover"
                  priority
                />

              </div>

            </div>

          </motion.div>

          {/* second floating card */}

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-10 right-0 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg dark:border-white/10 dark:bg-white/5 xl:block"
          >
            <div className="flex items-center gap-2">
              <Rocket size={18} className="text-emerald-500" />
              <span className="text-sm font-medium">
                Fast Product Delivery
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}