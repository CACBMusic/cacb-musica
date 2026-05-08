import type { Metadata } from "next";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import PricingSection from "@/components/sections/pricing-section";
import WorkflowSection from "@/components/sections/workflow-section";
import FaqSection from "@/components/sections/faq-section";

export const metadata: Metadata = {
  title: "Servicios | CACB Música",
  description:
    "Portadas, motion covers y branding visual para artistas urbanos.",
  alternates: {
    canonical: "https://cacbmusica.com/es/servicios",
    languages: {
      es: "https://cacbmusica.com/es/servicios",
      en: "https://cacbmusica.com/en/services",
    },
  },
  openGraph: {
    title: "Servicios | CACB Música",
    description:
      "Portadas, motion covers y branding visual para artistas urbanos.",
    url: "https://cacbmusica.com/es/servicios",
    siteName: "CACB Música",
    locale: "es_DO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios | CACB Música",
    description:
      "Portadas, motion covers y branding visual para artistas urbanos.",
  },
};

export default function ServiciosPage() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white">
        {/* Hero */}
        <section className="border-b border-zinc-900 py-32">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
              Servicios
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
              Visuales creados
              <br />
              para destacar
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Portadas, motion covers y branding visual para artistas urbanos.
              Solicita por WhatsApp o Email y arrancamos.
            </p>
          </div>
        </section>

        {/* Sections */}
        <PricingSection />
        <WorkflowSection />
        <FaqSection />

        {/* CTA */}
        <section className="border-t border-zinc-900 bg-black py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10 md:p-14">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
                Listo para empezar
              </p>

              <h2 className="text-4xl font-black md:text-5xl">
                Hablemos de tu próximo release
              </h2>

              <p className="mt-6 max-w-2xl text-zinc-400">
                Escríbenos y te ayudamos a definir el estilo, referencias y
                fecha de entrega.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/es/contacto"
                  className="rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 px-8 py-4 text-center text-sm font-bold text-black transition hover:scale-[1.02]"
                >
                  Ir al formulario
                </a>

                <a
                  href="https://wa.me/18090000000"
                  target="_blank"
                  className="rounded-full border border-zinc-700 px-8 py-4 text-center text-sm font-semibold text-white transition hover:border-orange-400 hover:bg-orange-500/5"
                >
                  WhatsApp directo
                </a>
              </div>

              <p className="mt-6 text-sm text-zinc-500">
                * Cambia el número de WhatsApp por el tuyo real.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}