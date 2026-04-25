export function FeaturesSection() {
  const features = [
    {
      icon: "/high_end_3d_isometric_icon_of_a_luxury_car_key_with_purple_glowing_accents-removebg-preview.png",
      label: "Réservation",
      title: "Contrôle total",
      desc: "Notre système intelligent vous garantit un accès instantané aux modèles les plus prisés, partout dans le monde.",
      stat: "10k+",
      statLabel: "Véhicules",
      delay: "0s",
    },
    {
      icon: "/high_end_3d_isometric_icon_of_a_gold_and_purple_loyalty_card_glassmorphism-removebg-preview.png",
      label: "Fidélité",
      title: "Programme MyFleet",
      desc: "Accès prioritaire aux événements VIP, remises exclusives et avantages réservés à nos membres.",
      stat: "VIP",
      statLabel: "Accès",
      delay: "0.8s",
    },
    {
      icon: "/high_end_3d_isometric_icon_of_a_secure_shield_with_a_lightning_bolt_deep_purple-removebg-preview.png",
      label: "Protection",
      title: "Sécurité absolue",
      desc: "Assurance tout-inclus et paiements sécurisés via notre protocole chiffré de bout en bout.",
      stat: "256",
      statLabel: "Bit SSL",
      delay: "1.6s",
    },
  ];

  return (
    <section className="py-40 px-6 overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto">

        {/* Header — même style que AppShowcaseSection */}
        <div className="text-center mb-24">
          <span className="text-xs uppercase tracking-[0.5em] font-bold text-primary mb-6 block">
            Pourquoi nous choisir
          </span>
          <h2 className="text-5xl md:text-7xl ultra-bold letter-spacing-extra mb-6">
            L&apos;excellence
            <br />
            <span className="text-gradient">à portée de main.</span>
          </h2>
          <p className="text-xl light-subtitle text-tertiary max-w-xl mx-auto leading-relaxed">
            Trois piliers qui font la différence entre une location ordinaire et une expérience d&apos;exception.
          </p>
        </div>

        {/* Features — ligne horizontale, icons grandes et centrées */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-black/8">
          {features.map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center text-center px-10 py-16 group"
            >
              {/* Icon 3D grande, bien aérée */}
              <div className="relative mb-10">
                <div className="absolute inset-0 bg-[#4a148c]/10 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src={f.icon}
                  alt={f.label}
                  className="w-36 h-36 md:w-40 md:h-40 float-animation relative z-10"
                  style={{ animationDelay: f.delay }}
                />
              </div>

              {/* Label */}
              <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-primary mb-3">
                {f.label}
              </span>

              {/* Titre */}
              <h3 className="text-2xl ultra-bold letter-spacing-extra mb-4">
                {f.title}
              </h3>

              {/* Description */}
              <p className="light-subtitle text-tertiary text-sm leading-relaxed mb-8 max-w-xs">
                {f.desc}
              </p>

              {/* Stat */}
              <div className="mt-auto flex flex-col items-center gap-1">
                <span className="text-4xl ultra-bold letter-spacing-extra text-gradient">
                  {f.stat}
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-black/30 font-medium">
                  {f.statLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bande réseau en bas — simple et sobre */}
        <div className="mt-20 border border-black/8 rounded-2xl px-14 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-lg">
            <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-primary mb-3 block">
              Réseau partenaires
            </span>
            <h4 className="text-2xl ultra-bold letter-spacing-extra mb-2">
              Une expertise vérifiée et certifiée
            </h4>
            <p className="light-subtitle text-tertiary text-sm leading-relaxed">
              Nos agences sont sélectionnées selon des critères d&apos;excellence pour vous garantir une qualité constante, où que vous soyez dans le monde.
            </p>
          </div>
          <div className="text-center shrink-0">
            <p className="text-6xl ultra-bold letter-spacing-extra text-gradient">+10k</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-black/30 font-medium mt-1">
              Agences mondiales
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}