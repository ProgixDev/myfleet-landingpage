"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Combien de temps prend la mise en place de MyFleet ?",
    a: "La migration de votre flotte, vos contrats et votre base clients se fait en 48h en moyenne. Notre équipe d'onboarding vous accompagne à chaque étape : import des données, paramétrage du CRM, personnalisation de l'app cliente.",
  },
  {
    q: "Puis-je gérer plusieurs agences depuis un seul compte ?",
    a: "Oui. La plateforme supporte le multi-agence en natif : chaque entité a son tableau de bord, sa flotte, ses utilisateurs, mais vous gardez une vue consolidée sur l'ensemble de votre groupe.",
  },
  {
    q: "Y a-t-il un engagement de durée ?",
    a: "Non. Tous nos plans sont sans engagement, résiliables au mois. Une démo gratuite est proposée pour vous permettre d'évaluer la plateforme avant de vous décider.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-40 px-6 overflow-hidden" id="faq">
      {/* Halos */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#4c1d95]/6 blur-[120px] rounded-full pointer-events-none" />

      {/* Gemmes décoratives */}
      <img
        src="/minimalist_floating_purple_crystal_fragment_simple_geometric_shape_soft-removebg-preview.png"
        alt=""
        className="gem-decoration gem-soft gem-float hidden md:block"
        style={{ top: "10%", right: "7%", width: "100px", animationDelay: "0.4s" }}
      />
      <img
        src="/minimalist_floating_purple_crystal_fragment_simple_geometric_shape_soft-removebg-preview.png"
        alt=""
        className="gem-decoration gem-soft gem-float hidden md:block"
        style={{ bottom: "12%", left: "6%", width: "85px", animationDelay: "1.7s" }}
      />
      <img
        src="/minimalist_floating_purple_crystal_fragment_simple_geometric_shape_soft-removebg-preview.png"
        alt=""
        className="gem-decoration gem-soft gem-float hidden lg:block"
        style={{ top: "55%", right: "15%", width: "55px", animationDelay: "2.8s" }}
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.5em] font-bold text-primary mb-6 block">
            Questions fréquentes
          </span>
          <h2 className="text-5xl md:text-7xl ultra-bold letter-spacing-extra mb-6">
            Tout ce que vous
            <br />
            <span className="text-gradient">devez savoir.</span>
          </h2>
          <p className="text-xl light-subtitle text-tertiary max-w-xl mx-auto leading-relaxed">
            Les réponses aux questions que se posent les agences avant de passer à MyFleet.
          </p>
        </div>

        {/* FAQ items */}
        <div className="flex flex-col gap-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`gradient-border rounded-3xl transition-all duration-500 ${
                  isOpen ? "shadow-xl shadow-[#4c1d95]/10" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 px-8 py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-5">
                    <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary/70 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base md:text-lg ultra-bold text-tertiary leading-snug">
                      {item.q}
                    </span>
                  </span>
                  <span
                    className={`shrink-0 w-10 h-10 rounded-full border border-black/10 flex items-center justify-center transition-all duration-500 ${
                      isOpen
                        ? "bg-black text-white rotate-45"
                        : "bg-white text-tertiary group-hover:border-black/30"
                    }`}
                    aria-hidden
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-8 pb-7 pl-[5.5rem] text-tertiary light-subtitle leading-relaxed text-sm md:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-tertiary mb-4">Une autre question ?</p>
          <a
            href="/assistance"
            className="inline-block text-sm font-bold uppercase tracking-[0.3em] text-primary border-b border-primary/30 hover:border-primary pb-1 transition-colors"
          >
            Parler à un expert →
          </a>
        </div>
      </div>
    </section>
  );
}
