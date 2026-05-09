import { getArtists } from "@/lib/artists";

import ArtistForm from "./ui/artist-form";

export default async function AdminArtistsPage() {
  const artists = await getArtists();

  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-orange-400">
            Admin
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Artists CMS
          </h1>
        </div>

        {/* Form */}
        <ArtistForm />

        {/* Artists */}
        <div className="mt-20">
          <h2 className="mb-8 text-3xl font-black">
            Existing Artists
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {artists.map((artist: any) => (
              <div
                key={artist.id}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
              >
                <img
                  src={
                    artist.avatar_url ||
                    "https://placehold.co/300x300/111111/FFFFFF"
                  }
                  alt={artist.name}
                  className="h-40 w-40 rounded-full object-cover"
                />

                <h3 className="mt-6 text-3xl font-black">
                  {artist.name}
                </h3>

                <p className="mt-3 text-zinc-400">
                  {artist.tagline}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {artist.spotify && (
                    <a
                      href={artist.spotify}
                      target="_blank"
                      className="rounded-full border border-zinc-700 px-4 py-2 text-sm"
                    >
                      Spotify
                    </a>
                  )}

                  {artist.apple && (
                    <a
                      href={artist.apple}
                      target="_blank"
                      className="rounded-full border border-zinc-700 px-4 py-2 text-sm"
                    >
                      Apple
                    </a>
                  )}

                  {artist.bandcamp && (
                    <a
                      href={artist.bandcamp}
                      target="_blank"
                      className="rounded-full border border-zinc-700 px-4 py-2 text-sm"
                    >
                      Bandcamp
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}