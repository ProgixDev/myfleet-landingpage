"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // ignore si autoplay bloqué
      });
    }
  }, []);

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      id="accueil"
    >
      {/* Vidéo full bleed */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Overlays pour lisibilité du texte */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/55 via-black/35 to-black/75 pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-[#4c1d95]/15 mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />

      {/* Gemmes décoratives */}
      <img
        src="/minimalist_floating_purple_crystal_fragment_simple_geometric_shape_soft-removebg-preview.png"
        alt=""
        className="gem-decoration gem-float hidden md:block"
        style={{ top: "18%", left: "8%", width: "120px", animationDelay: "0s" }}
      />
      <img
        src="/minimalist_floating_purple_crystal_fragment_simple_geometric_shape_soft-removebg-preview.png"
        alt=""
        className="gem-decoration gem-float hidden md:block"
        style={{ top: "55%", right: "10%", width: "90px", animationDelay: "2s" }}
      />
      <img
        src="/minimalist_floating_purple_crystal_fragment_simple_geometric_shape_soft-removebg-preview.png"
        alt=""
        className="gem-decoration gem-soft gem-float hidden lg:block"
        style={{ top: "30%", right: "22%", width: "70px", animationDelay: "1.2s" }}
      />

      {/* Contenu central */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center text-white pt-32 pb-24">
        <h1 className="text-6xl md:text-8xl ultra-bold letter-spacing-extra leading-[1.04] mb-7">
          Votre flotte. Vos clients.
          <br />
          <span className="text-gradient-light">Une plateforme.</span>
        </h1>

        <p className="text-lg md:text-xl light-subtitle text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          MyFleet équipe les agences de location d&apos;un CRM intelligent et d&apos;une application
          pour piloter leur flotte, leurs clients et leur business — depuis une seule plateforme.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/reservation"
            className="w-full sm:w-auto bg-white text-black px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-[#c4b5fd] transition-colors duration-300"
          >
            Demander une démo
          </Link>
          <Link
            href="/#services"
            className="w-full sm:w-auto border border-white/40 text-white/90 px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-widest hover:border-white hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
          >
            Découvrir la plateforme
          </Link>
        </div>
      </div>

  

      {/* Indicateur scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[9px] uppercase tracking-[0.5em] font-semibold text-white">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
