"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/es",
    label: "Inicio",
  },
  {
    href: "/es/artistas",
    label: "Artistas",
  },
  {
    href: "/es/noticias",
    label: "Noticias",
  },
  {
    href: "/es/servicios",
    label: "Servicios",
  },
  {
    href: "/es/contacto",
    label: "Contacto",
  },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-6 py-4 shadow-2xl backdrop-blur-xl">
        {/* LOGO */}
        <Link
          href="/es"
          className="flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-orange-500/30 blur-xl" />

            <Image
              src="/logo.svg"
              alt="CACB Música"
              width={48}
              height={48}
              priority
              className="relative object-contain"
            />
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-xs uppercase tracking-[0.3em] text-zinc-400">
              CACB
            </span>

            <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-xl font-bold text-transparent">
              Música
            </span>
          </div>
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-orange-500 to-yellow-400 text-black shadow-lg"
                    : "text-zinc-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-zinc-300 transition-all hover:border-orange-400 hover:text-white md:block"
          >
            Iniciar sesión
          </Link>

          <Link
            href="/dashboard"
            className="rounded-xl bg-gradient-to-r from-orange-500 to-yellow-400 px-5 py-2 text-sm font-semibold text-black shadow-lg transition-all hover:scale-[1.03]"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
}