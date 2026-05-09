"use client";

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Menu, X } from "lucide-react";

import { createClient } from "@/lib/supabase-browser";

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

  const supabase = createClient();

  const [open, setOpen] = useState(false);

  const [user, setUser] = useState<any>(null);

  const locale = pathname.startsWith("/en")
    ? "en"
    : "es";

  const navigation = links[locale];

  const switchLocale =
    locale === "es"
      ? pathname.replace("/es", "/en")
      : pathname.replace("/en", "/es");

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    }

    getUser();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();

    location.href = "/";
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/50 px-6 py-4 backdrop-blur-xl">
          {/* Logo */}
          <Link
  href="/"
  className="flex items-center gap-3 transition-opacity hover:opacity-90"
>
  <Image
    src="/logo.svg"
    alt="CACB Música"
    width={42}
    height={42}
    priority
    className="rounded-xl object-contain"
  />

  <div className="flex flex-col leading-none">
    <span className="text-sm font-medium text-zinc-400">
      CACB
    </span>

    <span className="text-lg font-bold tracking-tight text-white">
      Música
    </span>
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
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
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

          {/* Right */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* Lang */}
            <Link
              href={switchLocale}
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300"
            >
              {locale === "es" ? "EN" : "ES"}
            </Link>

            {!user ? (
              <Link
                href="/login"
                className="rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 px-6 py-3 text-sm font-bold text-black"
              >
                Login
              </Link>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className="rounded-full border border-orange-500 px-5 py-3 text-sm font-semibold text-orange-400"
                >
                  Dashboard
                </Link>

                <Link
                  href="/admin"
                  className="rounded-full bg-white px-5 py-3 text-sm font-bold text-black"
                >
                  Admin
                </Link>

                <button
                  onClick={handleLogout}
                  className="rounded-full border border-red-500 px-5 py-3 text-sm font-semibold text-red-400"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile */}
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
        <div className="fixed inset-0 z-40 bg-black/95 lg:hidden">
          <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6">
            {navigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-3xl font-black text-white"
              >
                {link.label}
              </Link>
            ))}

            {!user ? (
              <Link
                href="/login"
                className="mt-8 rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 px-8 py-4 font-bold text-black"
              >
                Login
              </Link>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className="rounded-full border border-orange-500 px-6 py-3 text-orange-400"
                >
                  Dashboard
                </Link>

                <Link
                  href="/admin"
                  className="rounded-full bg-white px-6 py-3 font-bold text-black"
                >
                  Admin
                </Link>

                <button
                  onClick={handleLogout}
                  className="rounded-full border border-red-500 px-6 py-3 text-red-400"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}