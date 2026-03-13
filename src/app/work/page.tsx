import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const caseStudies = [
  {
    title: "Real Estate CRM Platform",
    category: "Custom Web Application",
    description:
      "Built a centralized platform to manage property listings, client leads, team workflows, and internal reporting.",
    stack: ["React", "Node.js", "MongoDB"],
    result: "Improved lead tracking and reduced manual operations.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Centralized business workflow",
      "Lead management improvements",
      "Custom dashboard experience",
    ],
  },
  {
    title: "E-commerce Mobile Experience",
    category: "Mobile App Development",
    description:
      "Designed and developed a premium shopping experience focused on speed, retention, and a frictionless checkout flow.",
    stack: ["React Native", "Firebase", "Node.js"],
    result: "Boosted repeat usage and user engagement.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Smooth mobile UX",
      "Performance-first build",
      "Better customer retention",
    ],
  },
  {
    title: "Business Automation Dashboard",
    category: "SaaS + Automation",
    description:
      "Created an operations dashboard with task flows, reporting, analytics, and smart business insights for internal teams.",
    stack: ["Next.js", "PostgreSQL", "AWS"],
    result: "Saved time and improved operational decision-making.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Team productivity improvement",
      "Scalable dashboard architecture",
      "Actionable business reporting",
    ],
  },
];

const process = [
  "Business understanding",
  "Problem analysis",
  "Solution planning",
  "Design and development",
  "Launch and support",
];

export default function WorkPage() {
  return (
    <div className="bg-slate-950 text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              Our Work
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
              Project-driven work that builds trust before the sales call
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              A strong portfolio helps clients understand your execution quality,
              design standard, and problem-solving ability. This page is built
              to make your company feel more credible and premium.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
              >
                Start a Project
              </Link>

              <Link
                href="/services"
                className="rounded-xl border border-white/20 px-6 py-3 text-white"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
            Featured Case Studies
          </div>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            Showcase projects with better structure, clarity, and business focus
          </h2>
          <p className="mt-5 text-lg text-slate-300">
            These are demo project sections for now. Later we should replace
            them with your real work, screenshots, and measurable outcomes.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {caseStudies.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5"
            >
              <div className="grid lg:grid-cols-2">
                <div className="h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full min-h-[320px] w-full object-cover"
                  />
                </div>

                <div className="p-8 md:p-10">
                  <div className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-400">
                    {project.category}
                  </div>

                  <h3 className="mt-3 text-3xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl bg-cyan-400/10 p-4 text-cyan-300">
                    {project.result}
                  </div>

                  <div className="mt-6 space-y-3">
                    {project.highlights.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 text-sm text-slate-300"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 text-cyan-400"
                        />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-400"
                  >
                    Discuss a similar project <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
              How We Approach Projects
            </div>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Every project should show clear thinking, not just code
            </h2>
            <p className="mt-5 text-lg text-slate-300">
              Strong project execution comes from understanding the problem
              clearly and building the right solution with the right process.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {process.map((step, index) => (
              <div
                key={step}
                className="rounded-[24px] border border-white/10 bg-white/5 p-6"
              >
                <div className="text-sm font-medium text-cyan-400">
                  0{index + 1}
                </div>
                <h3 className="mt-3 text-xl font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
              Why This Page Matters
            </div>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Better portfolio pages increase trust and improve lead quality
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Most service websites stay weak because they talk too much and
              prove too little. A strong work page helps your company look more
              capable, experienced, and premium.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Shows execution quality",
              "Improves client confidence",
              "Supports premium pricing perception",
              "Makes your agency look more established",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-400/10 to-indigo-500/10 p-8 md:p-12">
            <div className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
                Let’s Build
              </div>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                Want a similar premium project for your business?
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Let’s discuss your idea, business goals, and the right digital
                solution for your next product.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}