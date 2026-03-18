type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      <div className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-500">
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl font-semibold md:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}