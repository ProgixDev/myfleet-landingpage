import Link from "next/link";

type InternalPageProps = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export function InternalPage({ title, description, ctaLabel, ctaHref }: InternalPageProps) {
  return (
    <main className="min-h-screen bg-background text-on-background flex items-center justify-center px-6 py-32">
      <section className="w-full max-w-4xl glass-panel rounded-super p-10 md:p-16 border border-white/10">
        <p className="text-xs uppercase tracking-[0.35em] text-primary mb-6">MyFleet</p>
        <h1 className="text-4xl md:text-6xl ultra-bold letter-spacing-extra mb-6">{title}</h1>
        <p className="text-tertiary text-lg leading-relaxed max-w-2xl mb-10">{description}</p>
        <div className="flex flex-wrap gap-4">
          <Link className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary-deep text-white text-sm font-bold uppercase tracking-widest" href={ctaHref}>
            {ctaLabel}
          </Link>
          <Link className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 bg-white/5 text-sm font-bold uppercase tracking-widest" href="/">
            Retour Accueil
          </Link>
        </div>
      </section>
    </main>
  );
}
