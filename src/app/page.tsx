import Link from "next/link";

export default function HomePage() {
  return (
    <section className="relative overflow-hidden">

      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="max-w-3xl">

          <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Premium Digital Development
          </div>

          <h1 className="mt-6 text-5xl font-semibold leading-tight">
            Build modern digital products with a reliable tech partner
          </h1>

          <p className="mt-6 text-lg text-slate-300">
            Rewan Tech Solutions helps startups and businesses build scalable
            websites, mobile apps, SaaS platforms, and AI-powered systems.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
            >
              Start Project
            </Link>

            <Link
              href="/work"
              className="rounded-xl border border-white/20 px-6 py-3"
            >
              View Work
            </Link>
          </div>

        </div>

      </div>

    </section>
  );
}