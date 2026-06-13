import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page introuvable",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-on-background flex items-center justify-center px-6 py-32">
      <section className="w-full max-w-2xl glass-panel rounded-super p-10 md:p-16 border border-black/10 text-center">
        <Link className="inline-flex items-center justify-center gap-3 mb-10" href="/">
          <Image
            alt="MyFleet Logo"
            className="h-12 w-auto object-contain"
            height={96}
            src="/logo.png"
            width={120}
          />
          <span className="text-2xl font-bold tracking-tighter uppercase">MyFleet</span>
        </Link>
        <p className="text-xs uppercase tracking-[0.35em] text-primary mb-6">Erreur 404</p>
        <h1 className="text-4xl md:text-6xl ultra-bold letter-spacing-extra mb-6">
          Page introuvable
        </h1>
        <p className="text-tertiary text-lg leading-relaxed max-w-md mx-auto mb-10">
          Cette page n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary-deep text-white text-sm font-bold uppercase tracking-widest"
          href="/"
        >
          Retour à l&apos;accueil
        </Link>
      </section>
    </main>
  );
}
