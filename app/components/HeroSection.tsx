import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden pt-36 pb-0"
      id="accueil"
    >
      {/* Glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#4a148c]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Texte centré */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">


        {/* Titre — même style que AppShowcaseSection */}
        <h1 className="text-6xl md:text-8xl ultra-bold letter-spacing-extra leading-[1.04] mb-7">
          L&apos;art de la route,
          <br />
          <span className="text-gradient">sans compromis.</span>
        </h1>

        {/* Sous-titre */}
        <p className="text-lg md:text-xl light-subtitle text-[#4b5563] max-w-2xl mx-auto mb-12 leading-relaxed">
          Accédez instantanément à la sélection automobile la plus exclusive au monde.
          Une expérience digitale fluide au service de vos trajets d&apos;exception.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <Link
            href="/flotte"
            className="w-full sm:w-auto bg-black text-white px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-[#4a148c] transition-colors duration-300"
          >
            Découvrir la flotte
          </Link>
          <Link
            href="/#services"
            className="w-full sm:w-auto border border-black/20 text-black/70 px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-widest hover:border-black/50 hover:text-black transition-colors duration-300"
          >
            En savoir plus
          </Link>
        </div>
      </div>

      {/* Mockup téléphone avec vidéo */}
      <div className="relative z-10 flex justify-center">
        {/* Glow sous le phone */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-32 bg-[#4a148c]/15 blur-[60px] rounded-full" />

        <div className="iphone-frame">
          <div className="iphone-bezel" />
          <div className="iphone-screen">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="https://lh3.googleusercontent.com/aida-public/AB6AXuA4zgmPO49jQWj0zwkMwC2ocHrgOL0cHLJqAyQiRueWyJtcOeNjrWt9wTVVQQ29JsT4zbG-hhpbcTM-47019W1q-Ewy5KLHiWdXL8uHGiWrTfi04oq5DAoM62qFvD1KMTXSLvU7cNA5MN8eFVPoP-gfiVCwIa26-GSNdxjPA-7kE7ZF0A-oZKJfdmUGrhHv_4O2R_fmU43QlAFpzP6f3GhP2gyVB--kXqA-vTbKCdk_Vz3GwjCTPS5d5tb5_NWVg7SIlkdaC7Fzl_rb"
            >
              <source
                src="/A_cinematic_luxury_car_driving_slowly_on_a_modern_city_street_during_daytime.__The_car_looks_elegant_seed2618698133.mp4"
                type="video/mp4"
              />
            </video>
            <div className="iphone-reflection" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[9px] uppercase tracking-[0.5em] font-semibold">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-black to-transparent" />
      </div>
    </section>
  );
}