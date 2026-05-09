import type { Metadata } from "next";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import ServicesSection from "@/components/sections/services-section";
import PortfolioSection from "@/components/sections/portfolio-section";

export const metadata: Metadata = {
  title: "CACB Música | Home",
  description:
    "CACB Música - record label & creative studio focused on urban artists.",
  alternates: {
    canonical: "https://cacbmusica.com/en",
    languages: {
      es: "https://cacbmusica.com/es",
      en: "https://cacbmusica.com/en",
    },
  },
  openGraph: {
  title: "CACB Música",
  description:
    "Record label & creative studio focused on urban artists.",
  url: "https://cacbmusica.com/en",
  siteName: "CACB Música",
  locale: "en_US",
  type: "website",

  images: [
    {
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "CACB Música",
    },
  ],
},
  twitter: {
  card: "summary_large_image",
  title: "CACB Música",
  description:
    "Record label & creative studio focused on urban artists.",
  
  images: ["/og-image.jpg"],
  },
};

export default function HomeEN() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-black text-white pt-32">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />
        </div>

        {/* Hero */}
        <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
          <div className="mb-6 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-orange-300">
            CACB Música • Record Label & Creative Studio
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Premium visuals
            <br />
            for urban artists
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            We create cover art, motion covers, and visual branding for artists
            who want to look professional on Spotify, Apple Music, and social
            media.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/en/services"
              className="rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 px-8 py-4 text-sm font-bold text-black transition-all duration-300 hover:scale-105"
            >
              View Services
            </a>

            <a
              href="/en/contact"
              className="rounded-full border border-zinc-700 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-orange-400 hover:bg-orange-500/5"
            >
              Request Design
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            <div>
              <h3 className="text-3xl font-black text-orange-400">24H</h3>
              <p className="mt-2 text-sm text-zinc-500">
                Fast delivery
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-orange-400">HD</h3>
              <p className="mt-2 text-sm text-zinc-500">
                Professional quality
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-orange-400">ES/EN</h3>
              <p className="mt-2 text-sm text-zinc-500">
                Bilingual support
              </p>
            </div>
          </div>
        </section>

        {/* Sections */}
        <ServicesSection />
        <PortfolioSection />
      </main>

      <Footer />
    </>
  );
}