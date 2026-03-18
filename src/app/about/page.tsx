import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/common/PageHero";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/common/SectionTitle";
import ContactCTA from "@/components/shared/ContactCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Rewan Tech Solutions, our values, process, and digital product approach.",
};

const values = [
  "Quality First",
  "Business-Focused Thinking",
  "Long-Term Partnership",
  "Trust & Transparency",
];

const process = [
  "Understand the business",
  "Plan the right solution",
  "Design and develop",
  "Launch and improve",
];

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <PageHero
        badge="About Us"
        title="Building premium digital solutions with clarity, quality, and trust"
        description="Rewan Tech Solutions is focused on creating modern digital products for businesses that want strong design, scalable development, and a reliable technology partner."
        actions={
          <>
            <Link
              href="/contact"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
            >
              Let&apos;s Talk
            </Link>
            <Link
              href="/work"
              className="rounded-xl border border-slate-300 px-6 py-3 dark:border-white/20"
            >
              View Our Work
            </Link>
          </>
        }
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionTitle
                eyebrow="Our Story"
                title="A modern IT company should feel capable before the first meeting"
                description="Our approach is simple: understand the problem, design the right solution, build with quality, and support long-term business growth with modern technology."
              />
            </div>

            <div className="relative h-[420px] overflow-hidden rounded-[32px] border border-slate-200 dark:border-white/10">
              <Image
                src="/images/about-cover.jpg"
                alt="About Rewan Tech Solutions"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80 py-20 dark:border-white/10 dark:bg-slate-900/60">
        <Container>
          <SectionTitle
            eyebrow="Our Values"
            title="Principles that shape how we work"
            description="Strong company perception is built not just by design, but by the values behind the execution."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-[28px] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-2xl font-semibold">{value}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionTitle
            eyebrow="How We Work"
            title="A clear process creates better trust and better outcomes"
            description="Clients feel more confident when the process is transparent, thoughtful, and focused on results."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item, index) => (
              <div
                key={item}
                className="rounded-[28px] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5"
              >
                <div className="text-sm font-medium text-cyan-500">0{index + 1}</div>
                <h3 className="mt-3 text-2xl font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </div>
  );
}