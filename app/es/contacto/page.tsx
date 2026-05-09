import type { Metadata } from "next";

import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import ContactForm from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contacto | CACB Música",
  description:
    "Contáctanos para portadas, motion covers y branding visual.",
  alternates: {
    canonical: "https://cacbmusica.com/es/contacto",
    languages: {
      es: "https://cacbmusica.com/es/contacto",
      en: "https://cacbmusica.com/en/contact",
    },
  },
  openGraph: {
    title: "Contacto | CACB Música",
    description:
      "Contáctanos para portadas, motion covers y branding visual.",
    url: "https://cacbmusica.com/es/contacto",
    siteName: "CACB Música",
    locale: "es_DO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | CACB Música",
    description:
      "Contáctanos para portadas, motion covers y branding visual.",
  },
};

export default function ContactoPage() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white">
        {/* Hero */}
        <section className="border-b border-zinc-900 py-32">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
              Contacto
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
              Hablemos sobre
              <br />
              tu próximo proyecto
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Escríbenos para portadas, branding, motion covers o cualquier
              proyecto visual relacionado con música.
            </p>
          </div>
        </section>

        <ContactForm />
      </main>

      <Footer />
    </>
  );
}