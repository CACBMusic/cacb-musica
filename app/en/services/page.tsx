import type { Metadata } from "next";

import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import PricingSectionEN from "@/components/sections/pricing-section-en";
import WorkflowSectionEN from "@/components/sections/workflow-section-en";
import FaqSectionEN from "@/components/sections/faq-section-en";

export const metadata: Metadata = {
  title: "Services | CACB Música",
  description:
    "Cover art, motion covers and visual branding for urban artists.",
  alternates: {
    canonical: "https://cacbmusica.com/en/services",
    languages: {
      es: "https://cacbmusica.com/es/servicios",
      en: "https://cacbmusica.com/en/services",
    },
  },
  openGraph: {
    title: "Services | CACB Música",
    description:
      "Cover art, motion covers and visual branding for urban artists.",
    url: "https://cacbmusica.com/en/services",
    siteName: "CACB Música",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | CACB Música",
    description:
      "Cover art, motion covers and visual branding for urban artists.",
  },
};

export default function ServicesEN() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white">
        {/* Hero */}
        <section className="border-b border-zinc-900 py-32">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
              Services
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
              Visuals built
              <br />
              to stand out
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Cover art, motion covers and branding for urban artists. Request
              via WhatsApp or Email and we start.
            </p>
          </div>
        </section>

        {/* Sections */}
        <PricingSectionEN />
        <WorkflowSectionEN />
        <FaqSectionEN />

        {/* CTA */}
        <section className="border-t border-zinc-900 bg-black py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10 md:p-14">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
                Ready to start
              </p>

              <h2 className="text-4xl font-black md:text-5xl">
                Let’s talk about your next release
              </h2>

              <p className="mt-6 max-w-2xl text-zinc-400">
                Reach out and we’ll help define your style, references and
                delivery timeline.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/en/contact"
                  className="rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 px-8 py-4 text-center text-sm font-bold text-black transition hover:scale-[1.02]"
                >
                  Go to form
                </a>

                <a
                  href="https://wa.me/18090000000"
                  target="_blank"
                  className="rounded-full border border-zinc-700 px-8 py-4 text-center text-sm font-semibold text-white transition hover:border-orange-400 hover:bg-orange-500/5"
                >
                  Direct WhatsApp
                </a>
              </div>

              <p className="mt-6 text-sm text-zinc-500">
                * Replace the WhatsApp number with your real one.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}