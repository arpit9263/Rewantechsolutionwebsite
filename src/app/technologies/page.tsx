import type { Metadata } from "next";
import Link from "next/link";

import PageHero from "@/components/common/PageHero";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/common/SectionTitle";
import ContactCTA from "@/components/shared/ContactCTA";

import { techCategories } from "@/data/technologies";

import { Brain, Cloud, Code2, Database, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Technologies",
  description:
    "Explore the technologies used by Rewan Tech Solutions including frontend, backend, mobile, AI, and cloud infrastructure.",
};

const iconMap = {
  code: Code2,
  database: Database,
  cloud: Cloud,
  smartphone: Smartphone,
  brain: Brain,
};

export default function TechnologiesPage() {
  return (
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <PageHero
        badge="Technologies We Use"
        title="Modern technologies powering scalable digital products"
        description="We use modern frameworks and cloud infrastructure that help businesses launch faster, scale better, and maintain products with confidence."
        actions={
          <>
            <Link
              href="/contact"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
            >
              Discuss Your Project
            </Link>

            <Link
              href="/services"
              className="rounded-xl border border-slate-300 px-6 py-3 dark:border-white/20"
            >
              View Services
            </Link>
          </>
        }
      />

      {/* Technologies */}
      <section className="py-20">
        <Container>
          <SectionTitle
            eyebrow="Technology Stack"
            title="Tools and frameworks we use to build reliable digital products"
            description="Our stack focuses on performance, maintainability, and long-term scalability."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {techCategories.map((category) => {
              const Icon =
                iconMap[category.icon as keyof typeof iconMap] || Code2;

              return (
                <div
                  key={category.title}
                  className="rounded-[28px] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="inline-flex rounded-2xl bg-cyan-500/10 p-3 text-cyan-500">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold">
                    {category.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                    {category.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {category.items.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 dark:border-white/10 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </div>
  );
}