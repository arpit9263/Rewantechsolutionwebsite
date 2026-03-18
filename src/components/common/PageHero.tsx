import type { ReactNode } from "react";
import Container from "@/components/shared/Container";

type PageHeroProps = {
  badge: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export default function PageHero({
  badge,
  title,
  description,
  actions,
}: PageHeroProps) {
  return (
    <section className="border-b border-slate-200 dark:border-white/10">
      <Container>
        <div className="py-20">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-600 dark:text-cyan-300">
              {badge}
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
              {title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              {description}
            </p>

            {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
          </div>
        </div>
      </Container>
    </section>
  );
}