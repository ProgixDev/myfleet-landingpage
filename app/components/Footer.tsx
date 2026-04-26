import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  Plateforme: [
    { label: "Fonctionnalités", href: "/services" },
    { label: "Gestion de flotte", href: "/flotte" },
    { label: "Démo", href: "/reservation" },
  ],
  Compagnie: [
    { label: "À propos", href: "/#accueil" },
    { label: "Programme partenaires", href: "/myfleet-club" },
    { label: "Support", href: "/assistance" },
  ],
  Legal: [
    { label: "Confidentialité", href: "#" },
    { label: "CGU", href: "#" },
    { label: "Mentions", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background border-t border-black/10 py-24" id="assistance">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          <div className="space-y-6">
            <Link className="flex items-center gap-3" href="/">
              <Image alt="MyFleet Logo" className="h-12 w-auto object-contain" height={96} src="/logo.png" width={120} />
              <span className="text-2xl font-bold tracking-tighter uppercase">MyFleet</span>
            </Link>
            <p className="text-tertiary max-w-sm text-sm light-subtitle leading-relaxed">
              Le SaaS tout-en-un pour les agences de location automobile. CRM, application client et gestion de flotte sur une seule plateforme.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-[11px] uppercase tracking-widest font-bold">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div className="space-y-6" key={group}>
                <h5 className="text-black">{group}</h5>
                <div className="flex flex-col gap-4 text-tertiary font-normal">
                  {(links as { label: string; href: string }[]).map((link) => (
                    <Link className="hover:text-black transition-colors" href={link.href} key={link.label}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-black/10">
          <p className="text-[10px] text-tertiary uppercase tracking-widest">© 2026 MyFleet - La plateforme SaaS des agences de location.</p>
          <div className="flex gap-3">
            <Link
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all"
              href="#"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
              </svg>
            </Link>
            <Link
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all"
              href="#"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" />
              </svg>
            </Link>
            <Link
              aria-label="X (Twitter)"
              className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all"
              href="#"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
