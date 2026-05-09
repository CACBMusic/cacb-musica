"use client";

import Link from "next/link";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
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

  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-3xl border border-black/10 bg-white/70 px-6 py-4 shadow-2xl backdrop-blur-2xl transition-all dark:border-white/10 dark:bg-black/60">
        {/* LOGO */}
        <Link
          href="/es"
          className="group flex items-center gap-3"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-orange-500/30 blur-2xl transition-all duration-500 group-hover:bg-orange-400/50" />

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
            <span className="text-xs uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
              CACB
            </span>

            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-xl font-bold text-transparent">
              Música
            </span>
          </div>
        </Link>

        {/* LINKS */}
        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-2xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-orange-500 to-yellow-400 text-black shadow-lg"
                    : "text-zinc-700 hover:bg-black/5 dark:text-zinc-300 dark:hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
          {/* THEME */}
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white/60 transition-all hover:scale-105 dark:border-white/10 dark:bg-white/5"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          {/* LOGIN */}
          <Link
            href="/login"
            className="hidden rounded-2xl border border-black/10 px-4 py-2 text-sm font-medium transition-all hover:scale-[1.03] dark:border-white/10 md:block"
          >
            Login
          </Link>

          {/* DASHBOARD */}
          <Link
            href="/dashboard"
            className="rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-400 px-5 py-2 text-sm font-semibold text-black shadow-xl transition-all hover:scale-[1.03]"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
}