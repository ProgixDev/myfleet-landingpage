import { BACKOFFICE_URL } from "../lib/site";

// On-page section giving existing agencies a clear entry point to the web-admin
// back-office (separate subdomain). Mirrors the CtaSection styling.
export function AgencyAccessSection() {
  return (
    <section className="py-32 relative overflow-hidden" id="espace-agence">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-panel rounded-super p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 border-white/5 relative">
          <div className="purple-glow top-0 left-0 opacity-20" />

          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-primary mb-5">
              Espace agence
            </p>
            <h2 className="text-4xl md:text-5xl ultra-bold mb-6 letter-spacing-extra">
              Déjà client&nbsp;?
              <br />
              Accédez à votre back-office.
            </h2>
            <p className="text-lg light-subtitle text-tertiary mb-10">
              Connectez-vous à votre espace pour piloter votre flotte, vos
              réservations, vos clients et votre facturation — depuis une seule
              plateforme.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={BACKOFFICE_URL}
                className="inline-block bg-black text-white px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-[#4a148c] transition-colors duration-300"
              >
                Accéder à mon espace
              </a>
              <a
                href="/reservation"
                className="inline-block border border-black/20 text-black/70 px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-widest hover:border-black/50 hover:text-black transition-colors duration-300"
              >
                Pas encore client&nbsp;? Demander une démo
              </a>
            </div>
          </div>

          <div className="relative group shrink-0">
            <div className="absolute inset-0 bg-primary-deep/40 blur-[40px] group-hover:bg-primary/20 transition-colors" />
            <div className="relative glass-panel rounded-super p-10 text-center border-white/10">
              <p className="text-6xl mb-3">🔐</p>
              <p className="text-sm font-extrabold uppercase tracking-[0.25em]">
                Back-office sécurisé
              </p>
              <p className="text-xs light-subtitle text-tertiary mt-3">
                backoffice.myfleetagency.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
