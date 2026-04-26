"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/#features", label: "Fonctionnalités" },
  { href: "/#services", label: "Plateforme" },
  { href: "/#how-it-works", label: "Étapes" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] transition-all duration-500 bg-white/85 backdrop-blur-md border-b border-black/10">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 lg:px-8 h-24">
          <Link className="flex items-center gap-3 group" href="/" onClick={() => setOpen(false)}>
            <Image alt="MyFleet Logo" className="h-11 w-auto object-contain group-hover:scale-105 transition-transform" height={96} priority src="/logo.png" width={120} />
            <span className="text-xl font-bold tracking-widest uppercase">MyFleet</span>
          </Link>

          <div className="hidden lg:flex items-center gap-10 text-sm uppercase tracking-[0.18em] font-black text-black">
            {navLinks.map((link) => (
              <Link key={link.href} className="hover:text-primary transition-colors" href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <Link className="hidden lg:inline-block bg-black text-white px-10 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-widest hover:bg-zinc-800 transition-all active:scale-95 shadow-lg shadow-black/10" href="/reservation">
            Demander une démo
          </Link>

          {/* Hamburger mobile */}
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-full border border-black/15 hover:border-black/40 transition-colors active:scale-95"
          >
            <span className="sr-only">Menu</span>
            <span className="relative w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-black rounded-full transition-transform duration-300 origin-center ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-black rounded-full transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-black rounded-full transition-transform duration-300 origin-center ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Drawer mobile */}
      <div
        className={`fixed inset-0 z-[90] lg:hidden transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-500 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-24 shrink-0" />

          <div className="flex-1 flex flex-col justify-between px-8 py-8 overflow-y-auto">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between py-5 border-b border-black/10 text-2xl ultra-bold tracking-tight text-black hover:text-primary transition-colors"
                  style={{
                    animation: open ? `count-fade 0.5s ease-out ${0.1 + i * 0.06}s both` : "none",
                  }}
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-bold text-black/30 group-hover:text-primary group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4">
              <Link
                href="/reservation"
                onClick={() => setOpen(false)}
                className="bg-black text-white px-8 py-4 rounded-full text-xs font-extrabold uppercase tracking-widest text-center hover:bg-[#4a148c] transition-colors"
              >
                Demander une démo
              </Link>
              <p className="text-[10px] uppercase tracking-[0.3em] text-black/40 text-center font-bold">
                Le SaaS des agences de location
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
