
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Brain,
  Cloud,
  Code2,
  Layers3,
  Palette,
  Smartphone,
  Sparkles,
} from "lucide-react";
import HeroVisual from "@/components/home/HeroVisual";
import Container from "@/components/shared/Container";
import FadeUp from "@/components/shared/FadeUp";
import SectionTitle from "@/components/common/SectionTitle";
import ContactCTA from "@/components/shared/ContactCTA";
import { services } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";
import ServiceCard from "@/components/services/ServiceCard";
import CaseStudyCard from "@/components/work/CaseStudyCard";
import PremiumHero from "@/components/home/PremiumHero";
import TrustMetricsStrip from "@/components/home/TrustMetricsStrip";
import ComparisonSection from "@/components/home/ComparisonSection";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import CaseStudyHighlight from "@/components/home/CaseStudyHighlight";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import TechnologyGridInteractive from "@/components/home/TechnologyGridInteractive";
import FinalCTAInteractive from "@/components/home/FinalCTAInteractive";
import HeroOrbitShowcase from "@/components/home/HeroOrbitShowcase";
import HeroRightOrbitVisual from "@/components/home/HeroSketchOrbit";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Premium web, mobile, SaaS, AI, and cloud solutions for modern businesses.",
};

const stats = [
  { value: "30+", label: "Projects Delivered" },
  { value: "12+", label: "Business Domains" },
  { value: "99%", label: "Client-Focused Delivery" },
  { value: "24/7", label: "Support Mindset" },
];

const highlights = [
  {
    title: "Premium-first execution",
    text: "Design quality, performance, and conversion thinking in one build flow.",
    icon: Sparkles,
  },
  {
    title: "Modern product engineering",
    text: "Scalable development choices for long-term business growth.",
    icon: Code2,
  },
  {
    title: "Cross-platform solutions",
    text: "Web, mobile, SaaS, AI, and backend systems under one team.",
    icon: Smartphone,
  },
  {
    title: "Business-focused delivery",
    text: "Built for trust, usability, efficiency, and premium client perception.",
    icon: Layers3,
  },
];

export default function HomePage() {
  return (
<>
<HeroRightOrbitVisual/>
<ServicesShowcase/>

{/* <HeroOrbitShowcase/> */}
{/* <PremiumHero/> */}
<TrustMetricsStrip/>
<ComparisonSection/>
{/* <CaseStudyHighlight/> */}
<ProcessTimeline/>
<TechnologyGridInteractive/>
<FinalCTAInteractive/> 
      <ContactCTA />


    
    {/* <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_28%),radial-gradient(circle_at_left,rgba(99,102,241,0.08),transparent_22%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_left,rgba(99,102,241,0.18),transparent_22%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />

        <Container>
          <div className="relative grid gap-16 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
            <FadeUp>
              <div className="flex flex-col justify-center">
                <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-600 dark:text-cyan-300">
                  <Sparkles size={16} />
                  High-end digital product engineering for modern brands
                </div>

                <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl xl:text-7xl">
                  We Design Premium Digital Experiences That Help Businesses Scale Faster
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                  Rewan Tech Solutions builds polished websites, scalable software,
                  mobile apps, and AI-powered systems with a premium visual standard
                  and strong business focus.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
                  >
                    Start Your Project
                  </Link>
                  <Link
                    href="/work"
                    className="rounded-xl border border-slate-300 px-6 py-3 text-slate-900 dark:border-white/20 dark:text-white"
                  >
                    Explore Case Studies
                  </Link>
                </div>

                <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
                  {[
                    ["Strategy + Execution", "From idea to launch under one team"],
                    ["Premium User Experience", "Clean interfaces that improve trust"],
                    ["Future-Ready Technology", "Scalable stack for long-term growth"],
                  ].map(([title, text]) => (
                    <div
                      key={title}
                      className="rounded-3xl border border-slate-200 bg-white/70 p-5 backdrop-blur dark:border-white/10 dark:bg-white/5"
                    >
                      <div className="font-semibold">{title}</div>
                      <div className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                        {text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
               <HeroVisual />
            </FadeUp>
          </div>

          <div className="grid gap-4 pb-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <FadeUp key={stat.label} delay={index * 0.06}>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
                  <div className="text-3xl font-semibold text-cyan-500">{stat.value}</div>
                  <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {stat.label}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80 dark:border-white/10 dark:bg-slate-900/60">
        <Container>
          <div className="py-5">
            <div className="mb-4 text-center text-xs font-medium uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
              Built for ambitious brands across multiple industries
            </div>
            <div className="grid gap-4 md:grid-cols-4">
              {["Web Solutions", "Mobile Applications", "AI Workflows", "Cloud Infrastructure"].map(
                (item, index) => (
                  <FadeUp key={item} delay={index * 0.04}>
                    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center text-sm dark:border-white/10 dark:bg-white/5">
                      {item}
                    </div>
                  </FadeUp>
                )
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionTitle
            eyebrow="Premium Highlights"
            title="A stronger homepage creates better trust, better leads, and better brand perception"
            description="This homepage is built to feel premium before the visitor even reaches your case studies."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeUp key={item.title} delay={index * 0.06}>
                  <div className="rounded-[30px] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
                    <div className="inline-flex rounded-2xl bg-cyan-500/10 p-3 text-cyan-500">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                      {item.text}
                    </p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80 py-20 dark:border-white/10 dark:bg-slate-900/60">
        <Container>
          <SectionTitle
            eyebrow="Services"
            title="Everything you need to build and scale digital products"
            description="From design to deployment, we help businesses launch websites, apps, software platforms, and smart automation systems."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} delay={index * 0.06} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionTitle
            eyebrow="Featured Work"
            title="Proof through projects, not just promises"
            description="Showcase real business outcomes with structured case studies that build client trust."
          />
          <div className="mt-12 space-y-8">
            {caseStudies.map((project, index) => (
              <CaseStudyCard key={project.title} project={project} delay={index * 0.08} />
            ))}
          </div>
        </Container>
      </section>

    </div> */}

    </>
  );
}