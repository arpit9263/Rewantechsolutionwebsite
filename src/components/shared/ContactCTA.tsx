import Link from "next/link";
import Container from "@/components/shared/Container";

export default function ContactCTA() {
  return (
    <section className="pb-20">
      <Container>
        <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 p-8 md:p-12 dark:border-white/10">
          <div className="max-w-3xl">
            <div className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-500">
              Let’s Build
            </div>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Need a reliable team for your next digital project?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Let’s discuss your goals, timeline, and the right solution for your business.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}