export function CtaSection() {
  return (
    <section className="py-40 relative overflow-hidden" id="myfleet-club">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Gemmes décoratives */}
      <img
        src="/minimalist_floating_purple_crystal_fragment_simple_geometric_shape_soft-removebg-preview.png"
        alt=""
        className="gem-decoration gem-float hidden md:block"
        style={{ top: "12%", left: "8%", width: "90px", animationDelay: "0.6s" }}
      />
      <img
        src="/minimalist_floating_purple_crystal_fragment_simple_geometric_shape_soft-removebg-preview.png"
        alt=""
        className="gem-decoration gem-soft gem-float hidden md:block"
        style={{ bottom: "18%", right: "12%", width: "70px", animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-panel rounded-super p-16 md:p-24 flex flex-col lg:flex-row items-center justify-between gap-16 border-white/5 relative">
          <div className="purple-glow top-0 right-0 opacity-20" />
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl ultra-bold mb-8 letter-spacing-extra">
              Prêt à digitaliser
              <br />
              votre agence ?
            </h2>
            <p className="text-xl light-subtitle text-tertiary mb-12">Rejoignez les agences qui ont choisi MyFleet pour automatiser leur gestion et offrir à leurs clients une expérience moderne. Démo gratuite, sans engagement.</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/reservation"
                className="inline-block bg-black text-white px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-[#4a148c] transition-colors duration-300"
              >
                Demander une démo
              </a>
              <a
                href="/assistance"
                className="inline-block border border-black/20 text-black/70 px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-widest hover:border-black/50 hover:text-black transition-colors duration-300"
              >
                Parler à un expert
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-primary-deep/40 blur-[40px] group-hover:bg-primary/20 transition-colors" />
            <div className="relative bg-white p-8 rounded-super shadow-2xl scale-110">
              <img
                alt="QR Reservation"
                className="w-40 h-40"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOYipB6M82c5qdTF6C6vPkvE7bQVHwebNU9phEm3MpbDWvEariLYNDZwQ9-YZD2Ki6beU81hdN7yBz6Cpn41YDSW9arFvQNzqqg3klSrkmrxECR6dNQFoU19Lg5-hqgkLg-m2pXvOx3tbzAZ96iA4ZCbCJ71d5jybWYQSB3R9HUKHsa8B0_vwuukkinGU0Gokv4PVyMcwvXhE8VPb_ZPjGCguvtmuHAWiZLh4xv0JfXTb1zkWjsR57sBLl8zn5NWnPLwek6ccFAsrt"
              />
              <p className="text-black text-[10px] font-extrabold uppercase tracking-[0.3em] text-center mt-6">Scan pour la démo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
