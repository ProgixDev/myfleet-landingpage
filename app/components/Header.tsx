import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <nav className="fixed top-0 w-full z-[100] transition-all duration-500 bg-white/85 backdrop-blur-md border-b border-black/10">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-24">
        <Link className="flex items-center gap-3 group" href="/">
          <Image alt="MyFleet Logo" className="h-11 w-auto object-contain group-hover:scale-105 transition-transform" height={96} priority src="/logo.png" width={120} />
          <span className="text-xl font-bold tracking-widest uppercase">MyFleet</span>
        </Link>

        <div className="hidden lg:flex items-center gap-12 text-[11px] uppercase tracking-[0.3em] font-bold text-tertiary">
          <Link className="hover:text-primary transition-colors" href="/#flotte">
            La Flotte
          </Link>
          <Link className="hover:text-primary transition-colors" href="/#services">
            Services
          </Link>
          <Link className="hover:text-primary transition-colors" href="/#myfleet-club">
            MyFleet Club
          </Link>
          <Link className="hover:text-primary transition-colors" href="/#assistance">
            Assistance
          </Link>
        </div>

        <Link className="bg-black text-white px-10 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-widest hover:bg-zinc-800 transition-all active:scale-95 shadow-lg shadow-black/10" href="/reservation">
          Reserver
        </Link>
      </div>
    </nav>
  );
}
