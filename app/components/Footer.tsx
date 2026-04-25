import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "La Flotte", href: "/flotte" },
    { label: "Services", href: "/services" },
    { label: "Evenementiel", href: "/services" },
  ],
  Compagnie: [
    { label: "A propos", href: "/#accueil" },
    { label: "MyFleet Club", href: "/myfleet-club" },
    { label: "Contact", href: "/assistance" },
  ],
  Legal: ["Confidentialite", "CGU", "Mentions"],
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
              L&apos;excellence en mouvement. Le service de location de prestige numero 1 pour les conducteurs les plus exigeants.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-[11px] uppercase tracking-widest font-bold">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div className="space-y-6" key={group}>
                <h5 className="text-black">{group}</h5>
                <div className="flex flex-col gap-4 text-tertiary font-normal">
                  {group === "Legal"
                    ? links.map((link) => (
                        <span className="hover:text-black transition-colors" key={link}>
                          {link}
                        </span>
                      ))
                    : (links as { label: string; href: string }[]).map((link) => (
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
          <p className="text-[10px] text-tertiary uppercase tracking-widest">© 2026 MyFleet - L&apos;Excellence Automobile.</p>
          <div className="flex gap-6">
            <Link className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all" href="/assistance">
              <span className="text-xs font-bold">SH</span>
            </Link>
            <Link className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all" href="/assistance">
              <span className="text-xs font-bold">@</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
