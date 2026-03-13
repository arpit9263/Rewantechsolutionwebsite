import Link from "next/link";
import {
  Code2,
  Smartphone,
  Palette,
  Brain,
  Cloud,
  Layers3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "We build fast, modern, and scalable websites and web applications tailored to your business goals.",
    icon: Code2,
    points: [
      "Custom business websites",
      "Admin dashboards",
      "SaaS web apps",
      "Responsive frontend development",
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "We create high-performance mobile apps designed for smooth user experience and business growth.",
    icon: Smartphone,
    points: [
      "Android & iOS solutions",
      "Cross-platform apps",
      "User-friendly interfaces",
      "Scalable app architecture",
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "We design clean, intuitive, and conversion-focused user experiences for modern digital products.",
    icon: Palette,
    points: [
      "Wireframes and prototypes",
      "Website UI design",
      "Mobile app UI design",
      "Modern product design systems",
    ],
  },
  {
    title: "SaaS Product Development",
    description:
      "From idea to launch, we help businesses build SaaS products with modern architecture and scalable workflows.",
    icon: Layers3,
    points: [
      "MVP development",
      "Dashboard systems",
      "Subscription platforms",
      "Scalable SaaS architecture",
    ],
  },
  {
    title: "AI Integration",
    description:
      "We integrate practical AI solutions and automation systems to improve business efficiency and user experience.",
    icon: Brain,
    points: [
      "AI workflow automation",
      "Chatbot integration",
      "Smart recommendations",
      "Business process optimization",
    ],
  },
  {
    title: "Cloud & Backend Solutions",
    description:
      "We build secure APIs, backend systems, and cloud infrastructure that support long-term product growth.",
    icon: Cloud,
    points: [
      "REST APIs",
      "Database architecture",
      "Cloud deployment",
      "Backend optimization",
    ],
  },
];

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
    <div className="bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              Our Services
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
              Premium digital services designed to help your business grow
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Rewan Tech Solutions provides end-to-end digital services across
              web, mobile, SaaS, AI, and cloud systems. We focus on clean
              execution, modern technology, and business-focused outcomes.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
              >
                Discuss Your Project
              </Link>

              <Link
                href="/work"
                className="rounded-xl border border-white/20 px-6 py-3 text-white"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
            What We Offer
          </div>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            Complete solutions for modern digital businesses
          </h2>
          <p className="mt-5 text-lg text-slate-300">
            Whether you need a website, a product, a redesign, or a scalable
            technology system, we can help you build it with clarity and
            quality.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <div className="inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-400">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-2xl font-semibold">{service.title}</h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {service.description}
                </p>

                <div className="mt-6 space-y-3">
                  {service.points.map((point) => (
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
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-400"
                >
                  Get started <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="border-y border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
              Our Process
            </div>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              A simple process built for clarity and reliable execution
            </h2>
            <p className="mt-5 text-lg text-slate-300">
              We keep every project structured, transparent, and focused on
              quality from start to finish.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
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

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
              Why Choose Us
            </div>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              More than service execution — we focus on long-term value
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              We don’t just build deliverables. We help businesses create better
              digital experiences, stronger systems, and a more premium brand
              presence.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Modern tech stack",
              "Premium visual execution",
              "Business-focused solutions",
              "Scalable architecture",
              "Transparent communication",
              "Long-term support mindset",
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

      {/* CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-400/10 to-indigo-500/10 p-8 md:p-12">
            <div className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-400">
                Let’s Build
              </div>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                Need a reliable team for your next digital project?
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Let’s talk about your goals, timeline, and the right solution
                for your business.
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