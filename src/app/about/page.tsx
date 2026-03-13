import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Users,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const values = [
  {
    title: "Quality First",
    description:
      "We focus on clean execution, modern design, and reliable development standards.",
    icon: Sparkles,
  },
  {
    title: "Business-Focused Thinking",
    description:
      "We build solutions that support real goals like growth, trust, usability, and efficiency.",
    icon: Briefcase,
  },
  {
    title: "Long-Term Partnership",
    description:
      "We want to be more than a vendor. We aim to become a reliable long-term technology partner.",
    icon: Users,
  },
  {
    title: "Trust & Transparency",
    description:
      "We value honest communication, clear scope, and responsible execution throughout the project.",
    icon: ShieldCheck,
  },
];

const process = [
  {
    step: "01",
    title: "Understand the business",
    description:
      "We begin by understanding the business model, goals, users, and real project requirements.",
  },
  {
    step: "02",
    title: "Plan the right solution",
    description:
      "We define the right structure, features, and execution roadmap before building.",
  },
  {
    step: "03",
    title: "Design and develop",
    description:
      "We create premium user experiences and build modern systems with scalable architecture.",
  },
  {
    step: "04",
    title: "Launch and improve",
    description:
      "We support deployment, refinement, and continuous improvement after launch.",
  },
];

const strengths = [
  "Premium visual direction",
  "Modern web and app development",
  "Scalable system thinking",
  "Business-oriented execution",
  "Flexible for multiple industries",
  "Support after delivery",
];

export default function AboutPage() {
  return (
    <div className="bg-slate-950 text-white">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              About Us
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
              Building premium digital solutions with clarity, quality, and trust
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Rewan Tech Solutions is focused on creating modern digital
              products for businesses that want strong design, scalable
              development, and a reliable technology partner.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
              >
                Let&apos;s Talk
              </Link>

              <Link
                href="/work"
                className="rounded-xl border border-white/20 px-6 py-3 text-white"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
              Our Story
            </div>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              A modern IT company should feel capable before the first meeting
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Rewan Tech Solutions is positioned as a company that helps
              startups, businesses, and growing brands create better websites,
              applications, software systems, and digital experiences.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Our approach is simple: understand the problem, design the right
              solution, build with quality, and support long-term business
              growth with modern technology.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <div className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
              What We Believe
            </div>
            <h3 className="mt-4 text-3xl font-semibold">
              Good digital work is not only about code
            </h3>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              It is about trust, user experience, business clarity, strong
              execution, and building something that creates real value over
              time.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
              Our Values
            </div>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Principles that shape how we work
            </h2>
            <p className="mt-5 text-lg text-slate-300">
              Strong company perception is built not just by design, but by the
              values behind the execution.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-[28px] border border-white/10 bg-white/5 p-6"
                >
                  <div className="inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-400">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold">{value.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
            How We Work
          </div>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            A clear process creates better trust and better outcomes
          </h2>
          <p className="mt-5 text-lg text-slate-300">
            Clients feel more confident when the process is transparent,
            thoughtful, and focused on results.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {process.map((item) => (
            <div
              key={item.step}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6"
            >
              <div className="text-sm font-medium text-cyan-400">
                {item.step}
              </div>
              <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Strengths */}
      <section className="border-y border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
                Our Strengths
              </div>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                Why businesses can trust our direction
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                We aim to combine premium presentation, practical development,
                and business-oriented thinking in one execution flow.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {strengths.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-slate-200"
                >
                  <CheckCircle2 size={18} className="mt-0.5 text-cyan-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-400/10 to-indigo-500/10 p-8 md:p-12">
            <div className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
                Let&apos;s Build
              </div>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                Looking for a reliable digital partner for your business?
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Let&apos;s discuss your goals and create a digital solution that
                feels modern, premium, and built for growth.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
                >
                  Contact Us <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}