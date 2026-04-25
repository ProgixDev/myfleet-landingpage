const appHighlights = [
  {
    title: "Experience Intuitive",
    text: "Une interface pensee pour la rapidite et le plaisir d'utilisation.",
    icon: "AI",
  },
  {
    title: "Geolocalisation Premium",
    text: "Trouvez les modeles d'exception les plus proches de vous en temps reel.",
    icon: "GPS",
  },
];

const phoneScreens = [
  {
    alt: "App Screen Scan",
    className:
      "absolute translate-x-24 translate-y-10 rotate-[12deg] scale-90 opacity-60 hover:opacity-100 hover:scale-95 transition-all duration-700 z-10",
    src: "/6010075689123515663.jpg",
  },
  {
    alt: "App Screen Onboarding",
    className:
      "absolute -translate-x-24 translate-y-20 -rotate-[12deg] scale-90 opacity-60 hover:opacity-100 hover:scale-95 transition-all duration-700 z-10",
    src: "/6010075689123515664.jpg",
  },
  {
    alt: "App Screen Profile",
    className: "relative z-30 transition-transform duration-700 hover:scale-[1.02] cursor-pointer",
    src: "/6010075689123515667.jpg",
    main: true,
  },
];

function PhoneMockup({ alt, src, className, main = false }: { alt: string; src: string; className: string; main?: boolean }) {
  return (
    <div className={className}>
      <div className="iphone-frame border-zinc-800/50">
        <div className="iphone-bezel" />
        <div className="iphone-screen">
          <img alt={alt} className="w-full h-full object-cover" src={src} />
          <div className="iphone-reflection" />
        </div>
      </div>
      {main ? <div className="absolute -inset-10 bg-primary-deep/30 blur-[80px] -z-10 rounded-full opacity-0 hover:opacity-100 transition-opacity" /> : null}
    </div>
  );
}

export function AppShowcaseSection() {
  return (
    <section className="bg-background py-40 relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-16">
            <div>
              <span className="text-xs uppercase tracking-[0.5em] font-bold text-primary mb-6 block">Technologie</span>
              <h2 className="text-5xl md:text-7xl ultra-bold letter-spacing-extra mb-8">
                Votre concierge
                <br />
                <span className="text-gradient">numerique.</span>
              </h2>
              <p className="text-xl light-subtitle text-tertiary max-w-lg leading-relaxed">
                L&apos;application MyFleet devient votre interface privilegiee. Reservations, historique, points de fidelite et conciergerie 24/7.
              </p>
            </div>

            <div className="space-y-10">
              {appHighlights.map((item) => (
                <div className="flex gap-8 group" key={item.title}>
                  <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center shrink-0 group-hover:bg-primary-deep transition-colors">
                    <span className="text-primary group-hover:text-black text-xs font-bold tracking-wide">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-xl ultra-bold mb-2">{item.title}</h4>
                    <p className="text-tertiary text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[700px] flex items-center justify-center">
            <div className="absolute inset-0 bg-primary-deep/10 blur-[150px] rounded-full scale-110" />
            {phoneScreens.map((screen) => (
              <PhoneMockup key={screen.alt} alt={screen.alt} className={screen.className} src={screen.src} main={screen.main} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
