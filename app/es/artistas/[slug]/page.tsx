import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { artists } from "@/data/artists";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const artist = artists.find((a) => a.slug === slug);

  if (!artist) {
    return {
      title: "Artista no encontrado",
    };
  }

  return {
    title: `${artist.name} | CACB Música`,
    description: artist.bioEs,

    alternates: {
      canonical: `https://cacbmusica.com/es/artistas/${artist.slug}`,
      languages: {
        es: `https://cacbmusica.com/es/artistas/${artist.slug}`,
        en: `https://cacbmusica.com/en/artists/${artist.slug}`,
      },
    },

    openGraph: {
      title: `${artist.name} | CACB Música`,
      description: artist.bioEs,
      url: `https://cacbmusica.com/es/artistas/${artist.slug}`,
      siteName: "CACB Música",
      locale: "es_DO",
      type: "profile",

      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: artist.name,
        },
      ],
    },
  };
}

export default async function ArtistPage({ params }: Props) {
  const { slug } = await params;

  const artist = artists.find((a) => a.slug === slug);

  if (!artist) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="bg-black text-white">
        {/* Hero */}
        <section className="border-b border-zinc-900 py-28">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
            {/* Avatar */}
            <div
              className={`aspect-square rounded-3xl bg-gradient-to-br ${artist.gradient}`}
            />

            {/* Info */}
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
                Artista
              </p>

              <h1 className="text-5xl font-black md:text-7xl">
                {artist.name}
              </h1>

              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
                {artist.tagline}
              </p>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
                {artist.bioEs}
              </p>

              {/* Streaming */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={artist.spotify}
                  target="_blank"
                  className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold transition hover:border-green-500 hover:text-green-400"
                >
                  Spotify
                </a>

                <a
                  href={artist.apple}
                  target="_blank"
                  className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold transition hover:border-white hover:text-white"
                >
                  Apple Music
                </a>

                <a
                  href={artist.bandcamp}
                  target="_blank"
                  className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold transition hover:border-orange-400 hover:text-orange-400"
                >
                  Bandcamp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Mock Releases */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
                  Releases
                </p>

                <h2 className="text-4xl font-black">
                  Últimos proyectos
                </h2>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950"
                >
                  <div
                    className={`aspect-square bg-gradient-to-br ${artist.gradient}`}
                  />

                  <div className="p-6">
                    <h3 className="text-2xl font-black">
                      Release #{item}
                    </h3>

                    <p className="mt-3 text-zinc-400">
                      Próximamente disponible.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Back */}
        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <Link
              href="/es/artistas"
              className="text-sm font-semibold text-orange-400 transition hover:opacity-80"
            >
              ← Volver a artistas
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}