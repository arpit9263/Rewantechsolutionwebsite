import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/common/PageHero";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/common/SectionTitle";
import ContactCTA from "@/components/shared/ContactCTA";
import { caseStudies } from "@/data/caseStudies";
import CaseStudyCard from "@/components/work/CaseStudyCard";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore case studies, project outcomes, and premium digital solutions built by Rewan Tech Solutions.",
};

export default function WorkPage() {
  return (
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <PageHero
        badge="Our Work"
        title="Project-driven work that builds trust before the sales call"
        description="A strong portfolio helps clients understand your execution quality, design standard, and problem-solving ability."
        actions={
          <>
            <Link
              href="/contact"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
            >
              Start a Project
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

      <section className="py-20">
        <Container>
          <SectionTitle
            eyebrow="Featured Case Studies"
            title="Showcase projects with better structure, clarity, and business focus"
            description="These are demo project sections for now. Later replace them with your real work, screenshots, and measurable outcomes."
          />
          <div className="mt-12 space-y-8">
            {caseStudies.map((project, index) => (
              <CaseStudyCard key={project.title} project={project} delay={index * 0.08} />
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </div>
  );
}