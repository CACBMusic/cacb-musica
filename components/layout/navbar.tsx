"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

type Locale = "es" | "en";

function switchLocalePath(pathname: string, target: Locale) {
  // Si estás en /es/... cambia a /en/... y viceversa
  if (pathname.startsWith("/es")) return pathname.replace(/^\/es/, `/${target}`);
  if (pathname.startsWith("/en")) return pathname.replace(/^\/en/, `/${target}`);
  // Si estás en / (root), manda a /es o /en
  return `/${target}`;
}

function getLinks(locale: Locale) {
  if (locale === "en") {
    return [
      { href: "/en", label: "Home" },
      { href: "/en/artists", label: "Artists" },
      { href: "/en/releases", label: "Releases" },
      { href: "/en/services", label: "Services" },
      { href: "/en/news", label: "News" },
      { href: "/en/contact", label: "Contact" },
    ];
  }

  return [
    { href: "/es", label: "Inicio" },
    { href: "/es/artistas", label: "Artistas" },
    { href: "/es/lanzamientos", label: "Lanzamientos" },
    { href: "/es/servicios", label: "Servicios" },
    { href: "/es/noticias", label: "Noticias" },
    { href: "/es/contacto", label: "Contacto" },
  ];
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const locale: Locale = pathname.startsWith("/en") ? "en" : "es";

  const links = useMemo(() => getLinks(locale), [locale]);

  const esHref = switchLocalePath(pathname, "es");
  const enHref = switchLocalePath(pathname, "en");

  const ctaHref = locale === "en" ? "/en/contact" : "/es/contacto";
  const ctaLabel = locale === "en" ? "Request Design" : "Solicitar Diseño";

  return (
    <header className="sticky top-0 z-50 border-b border-orange-500/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href={locale === "en" ? "/en" : "/es"} className="text-xl font-black tracking-widest text-white">
          CACB Música
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-200 ${
                  active ? "text-orange-400" : "text-zinc-300 hover:text-orange-300"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <Link href={esHref} className={locale === "es" ? "text-white" : "hover:text-white"}>
              ES
            </Link>
            <span>/</span>
            <Link href={enHref} className={locale === "en" ? "text-white" : "hover:text-white"}>
              EN
            </Link>
          </div>

          <Link
            href={ctaHref}
            className="rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 px-5 py-2 text-sm font-semibold text-black transition-all hover:scale-105"
          >
            {ctaLabel}
          </Link>
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="flex flex-col gap-1.5 md:hidden" aria-label="menu">
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-zinc-900 bg-black md:hidden">
          <nav className="flex flex-col px-6 py-6">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`border-b border-zinc-900 py-4 text-lg font-medium transition ${
                    active ? "text-orange-400" : "text-zinc-300 hover:text-orange-300"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Link
                href={esHref}
                onClick={() => setOpen(false)}
                className={`rounded-full border px-6 py-3 text-center text-sm font-semibold ${
                  locale === "es" ? "border-orange-400 text-white" : "border-zinc-700 text-zinc-300"
                }`}
              >
                ES
              </Link>
              <Link
                href={enHref}
                onClick={() => setOpen(false)}
                className={`rounded-full border px-6 py-3 text-center text-sm font-semibold ${
                  locale === "en" ? "border-orange-400 text-white" : "border-zinc-700 text-zinc-300"
                }`}
              >
                EN
              </Link>
            </div>

            <Link
              href={ctaHref}
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 px-6 py-4 text-center font-bold text-black"
            >
              {ctaLabel}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}