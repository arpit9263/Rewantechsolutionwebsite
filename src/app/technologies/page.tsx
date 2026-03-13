import Link from "next/link";
import {
  Code2,
  Database,
  Cloud,
  Smartphone,
  Brain,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const techCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    description:
      "Modern frontend technologies for fast, responsive, and premium user experiences.",
    items: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    icon: Database,
    description:
      "Robust backend systems and APIs designed for scalability, security, and performance.",
    items: ["Node.js", "Express.js", "REST APIs", "Authentication Systems"],
  },
  {
    title: "Database Systems",
    icon: Database,
    description:
      "Reliable data architecture for products that need speed, structure, and long-term growth.",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  },
  {
    title: "Cloud & Deployment",
    icon: Cloud,
    description:
      "Cloud-ready infrastructure and deployment workflows for modern digital products.",
    items: ["AWS", "Vercel", "Netlify", "Cloud Hosting", "CI/CD Basics"],
  },
  {
    title: "Mobile App Stack",
    icon: Smartphone,
    description:
      "Cross-platform and mobile-focused technologies for app development and seamless experiences.",
    items: ["React Native", "Flutter", "Mobile UI Systems", "App Integrations"],
  },
  {
    title: "AI & Automation",
    icon: Brain,
    description:
      "Practical AI integrations and automation systems that create business value.",
    items: [
      "AI Chat Integrations",
      "Workflow Automation",
      "Recommendation Systems",
      "Business Process Automation",
    ],
  },
];

const advantages = [
  "Modern and scalable tech stack",
  "Fast development with clean structure",
  "Reliable architecture for long-term growth",
  "Flexible solutions for different industries",
  "Technology choices based on business needs",
  "Focus on performance and maintainability",
];

const process = [
  {
    title: "Requirement Analysis",
    desc: "We choose technologies based on your business model, product type, and scalability needs.",
  },
  {
    title: "Architecture Planning",
    desc: "We define the right stack, structure, and workflow before development starts.",
  },
  {
    title: "Execution",
    desc: "We build with a practical balance of speed, code quality, and future maintainability.",
  },
  {
    title: "Optimization",
    desc: "We improve performance, usability, and deployment quality after build completion.",
  },
];

export default function TechnologiesPage() {
  return (
    <div className="bg-slate-950 text-white">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              Technologies We Use
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
              Modern technologies that support premium digital products
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              The right technology stack is not just about trends. It is about
              performance, scalability, maintainability, and building the right
              solution for the business.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
              >
                Discuss Your Project
              </Link>

              <Link
                href="/services"
                className="rounded-xl border border-white/20 px-6 py-3 text-white"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Categories */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
            Our Stack
          </div>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            Technologies selected for quality, speed, and long-term reliability
          </h2>
          <p className="mt-5 text-lg text-slate-300">
            We use modern tools and frameworks that help businesses launch
            faster, scale better, and maintain their products with confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {techCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <div className="inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-400">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-2xl font-semibold">{category.title}</h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {category.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why This Stack */}
      <section className="border-y border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
                Why This Matters
              </div>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                Technology choices directly affect trust, quality, and scaling
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Clients may not always understand code, but they understand
                speed, reliability, smooth user experience, and long-term
                stability. Good stack choices make all of that possible.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {advantages.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security and Reliability */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
            <div className="inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-400">
              <ShieldCheck size={24} />
            </div>

            <h2 className="mt-5 text-3xl font-semibold md:text-4xl">
              Built with reliability and maintainability in mind
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              A premium website or product should not just look good. It should
              also be stable, manageable, and ready for future improvements.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Clean architecture decisions",
                "Practical performance focus",
                "Structured backend systems",
                "Scalable deployment mindset",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 text-sm text-slate-300"
                >
                  <CheckCircle2 size={18} className="mt-0.5 text-cyan-400" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
              Execution Philosophy
            </div>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              We pick technologies based on the business, not just hype
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Not every project needs the same stack. The right decision depends
              on product goals, budget, expected scale, speed of launch, and the
              complexity of the business workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
              How We Work
            </div>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Technology decisions with a structured execution process
            </h2>
            <p className="mt-5 text-lg text-slate-300">
              Good products are built when design, development, and architecture
              work together with clear planning.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[24px] border border-white/10 bg-white/5 p-6"
              >
                <div className="text-sm font-medium text-cyan-400">
                  0{index + 1}
                </div>
                <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-400/10 to-indigo-500/10 p-8 md:p-12">
            <div className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
                Let’s Build
              </div>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                Need the right technology direction for your next project?
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Let’s discuss your product, required features, and the best
                technology approach for your business goals.
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