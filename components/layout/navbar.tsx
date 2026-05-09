"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { useState } from "react";

import { Menu, X } from "lucide-react";

const links = {
  es: [
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
  ],

  en: [
    {
      href: "/en",
      label: "Home",
    },
    {
      href: "/en/artists",
      label: "Artists",
    },
    {
      href: "/en/news",
      label: "News",
    },
    {
      href: "/en/services",
      label: "Services",
    },
    {
      href: "/en/contact",
      label: "Contact",
    },
  ],
};

export function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const locale = pathname.startsWith("/en")
    ? "en"
    : "es";

  const navigation = links[locale];

  const switchLocale =
    locale === "es"
      ? pathname.replace("/es", "/en")
      : pathname.replace("/en", "/es");

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/50 px-6 py-4 backdrop-blur-xl">
          {/* Logo */}
          <Link
            href={locale === "es" ? "/es" : "/en"}
            className="group flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-yellow-500 font-black text-black shadow-lg shadow-orange-500/20 transition duration-300 group-hover:scale-105">
              C
            </div>

            <div>
              <p className="text-lg font-black tracking-tight text-white">
                CACB Música
              </p>

              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                Record Label
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-2 lg:flex">
            {navigation.map((link) => {
              const active =
                pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                    active
                      ? "bg-white text-black"
                      : "text-zinc-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* Language */}
            <Link
              href={switchLocale}
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-orange-500 hover:text-orange-400"
            >
              {locale === "es" ? "EN" : "ES"}
            </Link>

            {/* CTA */}
            <Link
              href={
                locale === "es"
                  ? "/es/contacto"
                  : "/en/contact"
              }
              className="rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 px-6 py-3 text-sm font-bold text-black transition duration-300 hover:scale-105"
            >
              {locale === "es"
                ? "Trabajemos"
                : "Let's Work"}
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
          >
            {open ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl lg:hidden">
          <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6">
            {navigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-3xl font-black text-white transition hover:text-orange-400"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href={switchLocale}
              className="mt-10 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-zinc-300"
            >
              {locale === "es"
                ? "Switch to English"
                : "Cambiar a Español"}
            </Link>

            <Link
              href={
                locale === "es"
                  ? "/es/contacto"
                  : "/en/contact"
              }
              className="rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 px-8 py-4 font-bold text-black"
            >
              {locale === "es"
                ? "Trabajemos"
                : "Let's Work"}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}