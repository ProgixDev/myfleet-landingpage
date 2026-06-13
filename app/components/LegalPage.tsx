import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type LegalPageProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  lastUpdated: string;
  children: ReactNode;
};

/**
 * Long-form, readable template for the site's legal pages (mentions légales,
 * confidentialité, CGU, cookies). Reuses the shared Header + Footer and the
 * brand design tokens from globals.css. Left-aligned, comfortable reading
 * column. Pages compose their content with the exported <LegalSection> helper.
 */
export function LegalPage({ eyebrow = "Informations légales", title, intro, lastUpdated, children }: LegalPageProps) {
  return (
    <div className="relative bg-background text-on-background font-sans overflow-x-hidden">
      <div className="site-aurora" />
      <div className="site-grid" />
      <div className="site-noise" />
      <Header />
      <main className="px-6 lg:px-8 pt-40 pb-32">
        <article className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.35em] text-primary mb-6">{eyebrow}</p>
          <h1 className="text-4xl md:text-6xl ultra-bold letter-spacing-extra mb-6">{title}</h1>
          {intro ? (
            <p className="text-tertiary text-lg leading-relaxed mb-10">{intro}</p>
          ) : null}
          <div className="divider-glow mb-12" />
          <div className="space-y-12">{children}</div>
          <div className="divider-glow mt-16 mb-8" />
          <p className="text-sm text-tertiary light-subtitle">
            Dernière mise à jour : {lastUpdated}
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}

type LegalSectionProps = {
  title: string;
  children: ReactNode;
};

/**
 * A single titled section inside a legal page. Renders an h2 + prose block in
 * the brand voice (B2B vouvoiement).
 */
export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl ultra-bold letter-spacing-extra mb-5">{title}</h2>
      <div className="space-y-4 text-tertiary text-base md:text-lg leading-relaxed light-subtitle">
        {children}
      </div>
    </section>
  );
}
