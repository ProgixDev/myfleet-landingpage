const steps = [
  {
    icon: "/premium_3d_icon_for_connectez_votre_flotte._a_sleek_modern_car_silhouette-removebg-preview.png",
    title: "Connectez votre flotte",
    desc: "Importez vos véhicules, vos contrats et votre base clients en quelques minutes. Nos équipes vous accompagnent à la migration.",
    delay: "0s",
    details: "01",
  },
  {
    icon: "/premium_3d_icon_for_activez_l_app_cliente._a_high_end_smartphone_mockup_showing-removebg-preview.png",
    title: "Activez l'app cliente",
    desc: "Personnalisez votre application en marque blanche : logo, couleurs, conditions. Vos clients réservent, signent et paient en ligne.",
    delay: "0.6s",
    details: "02",
  },
  {
    icon: "/premium_3d_icon_for_pilotez_votre_business._a_professional_dashboard_element-removebg-preview.png",
    title: "Pilotez votre business",
    desc: "Suivez réservations, revenus, taux d'occupation et performance équipe en temps réel depuis le CRM ou l'app mobile.",
    delay: "1.2s",
    details: "03",
  },
];

export function HowItWorksSection() {
  return (
    <section className="relative py-40 px-6 overflow-hidden" id="how-it-works">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4c1d95]/8 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6d28d9]/6 blur-[100px] rounded-full pointer-events-none" />

      {/* Gemmes décoratives */}
      <img
        src="/minimalist_floating_purple_crystal_fragment_simple_geometric_shape_soft-removebg-preview.png"
        alt=""
        className="gem-decoration gem-soft gem-float hidden md:block"
        style={{ top: "12%", left: "5%", width: "80px", animationDelay: "0.5s" }}
      />
      <img
        src="/minimalist_floating_purple_crystal_fragment_simple_geometric_shape_soft-removebg-preview.png"
        alt=""
        className="gem-decoration gem-soft gem-float hidden md:block"
        style={{ bottom: "15%", right: "6%", width: "100px", animationDelay: "2.2s" }}
      />
      <img
        src="/minimalist_floating_purple_crystal_fragment_simple_geometric_shape_soft-removebg-preview.png"
        alt=""
        className="gem-decoration gem-soft gem-float hidden lg:block"
        style={{ top: "45%", left: "48%", width: "60px", animationDelay: "1.5s" }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-xs uppercase tracking-[0.5em] font-bold text-primary mb-6 block">
            Comment ça marche
          </span>
          <h2 className="text-5xl md:text-7xl ultra-bold letter-spacing-extra mb-6">
            De la prise en main
            <br />
            <span className="text-gradient">à la croissance.</span>
          </h2>
          <p className="text-xl light-subtitle text-tertiary max-w-xl mx-auto leading-relaxed">
            Trois étapes pour transformer votre agence en machine performante.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Ligne reliant les étapes */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-[#6d28d9]/30 to-transparent" />

          {steps.map((step) => (
            <div
              key={step.details}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Icon 3D avec halo */}
              <div className="relative mb-10 w-40 h-40 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#6d28d9]/15 blur-3xl rounded-full scale-110 opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src={step.icon}
                  alt=""
                  className="relative z-10 w-full h-full object-contain float-animation"
                  style={{ animationDelay: step.delay }}
                />
              </div>

              <h3 className="text-2xl ultra-bold letter-spacing-extra mb-4">
                {step.title}
              </h3>
              <p className="light-subtitle text-tertiary text-sm leading-relaxed mb-6 max-w-xs">
                {step.desc}
              </p>
              <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-primary px-4 py-2 rounded-full border border-[#6d28d9]/20 bg-[#6d28d9]/5">
                Étape {step.details}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
