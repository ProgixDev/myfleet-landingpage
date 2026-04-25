export function CtaSection() {
  return (
    <section className="py-40 relative overflow-hidden" id="myfleet-club">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-panel rounded-super p-16 md:p-24 flex flex-col lg:flex-row items-center justify-between gap-16 border-white/5 relative">
          <div className="purple-glow top-0 right-0 opacity-20" />
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl ultra-bold mb-8 letter-spacing-extra">
              L&apos;excellence vous
              <br />
              attend.
            </h2>
            <p className="text-xl light-subtitle text-tertiary mb-12">Telechargez l&apos;application et rejoignez le club le plus exclusif de l&apos;automobile de luxe. Scannez le code pour un acces immediat.</p>
            <div className="flex flex-wrap gap-6">
              <img
                alt="App Store"
                className="h-12 hover:scale-105 transition-transform cursor-pointer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3u89A88elQ7-oUxkq2t3JzPF4najsjfg3JFGaVX2vh5VaJIJ-hunXR9ttcLryJ04KneA8-LYXYnwfwtbfLA786lpwXcmLzNE_6_yqOLQzGcXFeRoSXcARHHeJiXVTxDbQU9ruHAHDem6MkzfoTOqEpUm1UNmqb1M0LClRaWapNustfVNtVX_1BWt3KjiDPC9OBPhwys95nwW_Gsnb99T73pEhB6f5mRr5xXl67w2mN9u3UTvKYm8T8Sn-QZpcqDSZoFINFVZ7hkUd"
              />
              <img
                alt="Play Store"
                className="h-12 hover:scale-105 transition-transform cursor-pointer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkD_P7WXyNg8zMKrEloTKdlgLKYyysImX5NBpiPAm0HVdwk2QSb2uWU-hSayanWvExFOqsAW2YGMQ4LhdrDcwoQ1DOmmPzdvhtZzVC1fsIQiTXkKRfqvzYnKbeke7lkGhRxGLrnWyxyGJ0ptrFoGtoi57JhsEYVg_FeAZTWTWyMauOUADO0kL4Jg8_TXf7EgydJbaUGJ4nUaFbvgsKZXV7F4je5TNvsz_39rJtEmPga1xs8ja_2_dXj2scDyQVJTvVScCO1PufMdXx"
              />
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
              <p className="text-black text-[10px] font-extrabold uppercase tracking-[0.3em] text-center mt-6">Scan to Reserve</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
