import type { Metadata } from "next";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import ContactFormEN from "@/components/sections/contact-form-en";

export const metadata: Metadata = {
  title: "Contact | CACB Música",
  description:
    "Reach out for cover art, motion covers and visual branding.",
  alternates: {
    canonical: "https://cacbmusica.com/en/contact",
    languages: {
      es: "https://cacbmusica.com/es/contacto",
      en: "https://cacbmusica.com/en/contact",
    },
  },
  openGraph: {
    title: "Contact | CACB Música",
    description:
      "Reach out for cover art, motion covers and visual branding.",
    url: "https://cacbmusica.com/en/contact",
    siteName: "CACB Música",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | CACB Música",
    description:
      "Reach out for cover art, motion covers and visual branding.",
  },
};

export default function ContactEN() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white">
        {/* Hero */}
        <section className="border-b border-zinc-900 py-32">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
              Contact
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
              Let’s talk about
              <br />
              your next release
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Reach out for cover art, branding, motion covers, or any
              music-related visual project.
            </p>
          </div>
        </section>

        <ContactFormEN />
      </main>

      <Footer />
    </>
  );
}