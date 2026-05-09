import type { Metadata } from "next";
import Link from "next/link";

import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import { artists } from "@/data/artists";

export const metadata: Metadata = {
  title: "Artists | CACB Música",
  description: "Official artists from CACB Música.",
};

export default function ArtistsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white">
        {/* Hero */}
        <section className="border-b border-zinc-900 py-28">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
              Artists
            </p>

            <h1 className="text-5xl font-black md:text-7xl">
              Our roster
            </h1>

            <p className="mt-6 max-w-2xl text-zinc-400">
              Meet the artists and projects that are part of CACB Música.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
            {artists.map((artist) => (
              <Link
                key={artist.slug}
                href={`/en/artists/${artist.slug}`}
                className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 transition hover:border-orange-500/50"
              >
                {/* Avatar */}
                <div
                  className={`h-72 bg-gradient-to-br ${artist.gradient}`}
                />

                {/* Content */}
                <div className="p-8">
                  <h2 className="text-3xl font-black">
                    {artist.name}
                  </h2>

                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-orange-400">
                    {artist.tagline}
                  </p>

                  <p className="mt-6 line-clamp-3 text-zinc-400">
                    {artist.bioEn}
                  </p>

                  <div className="mt-8 flex items-center gap-4 text-sm font-semibold">
                    <span className="text-orange-400 transition group-hover:translate-x-1">
                      View profile →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}