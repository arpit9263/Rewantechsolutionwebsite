import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/common/PageHero";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/common/SectionTitle";
import ServiceCard from "@/components/services/ServiceCard";
import ContactCTA from "@/components/shared/ContactCTA";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore web development, mobile app development, SaaS, AI integration, UI/UX design, and cloud solutions from Rewan Tech Solutions.",
};

const process = [
  {
    title: "Discovery",
    desc: "We understand your business, users, goals, and project requirements.",
  },
  {
    title: "Planning",
    desc: "We define scope, structure, timeline, and execution strategy.",
  },
  {
    title: "Design",
    desc: "We create a clean user experience and premium visual direction.",
  },
  {
    title: "Development",
    desc: "We build the product with scalable and maintainable code.",
  },
  {
    title: "Launch & Support",
    desc: "We deploy, refine, and support your product after launch.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <PageHero
        badge="Our Services"
        title="Premium digital services designed to help your business grow"
        description="Rewan Tech Solutions provides end-to-end digital services across web, mobile, SaaS, AI, and cloud systems."
        actions={
          <>
            <Link
              href="/contact"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
            >
              Discuss Your Project
            </Link>
            <Link
              href="/work"
              className="rounded-xl border border-slate-300 px-6 py-3 dark:border-white/20"
            >
              See Our Work
            </Link>
          </>
        }
      />

      <section className="py-20">
        <Container>
          <SectionTitle
            eyebrow="What We Offer"
            title="Complete solutions for modern digital businesses"
            description="Whether you need a website, a product, a redesign, or a scalable technology system, we can help you build it with clarity and quality."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} delay={index * 0.06} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80 py-20 dark:border-white/10 dark:bg-slate-900/60">
        <Container>
          <SectionTitle
            eyebrow="Our Process"
            title="A simple process built for clarity and reliable execution"
            description="We keep every project structured, transparent, and focused on quality from start to finish."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[24px] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5"
              >
                <div className="text-sm font-medium text-cyan-500">0{index + 1}</div>
                <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </div>
  );
}