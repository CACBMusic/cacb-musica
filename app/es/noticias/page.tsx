import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import { getNews } from "@/lib/news";

export const metadata: Metadata = {
  title: "Noticias | CACB Música",
  description: "Noticias oficiales de CACB Música.",
};

export default async function NoticiasPage() {
  const news = await getNews();

  return (
    <>
      <Navbar />

      <main className="bg-black text-white">
        {/* Hero */}
        <section className="border-b border-zinc-900 py-28">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
              Noticias
            </p>

            <h1 className="text-5xl font-black md:text-7xl">
              Últimas novedades
            </h1>
          </div>
        </section>

        {/* News */}
        <section className="py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
            {news.map((post) => (
              <Link
                key={post.id}
                href={`/es/noticias/${post.slug}`}
                className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 transition hover:border-orange-500/50"
              >
                {/* Cover */}
                <img
  src={
    post.cover_url ||
    "https://placehold.co/1200x700/111111/FFFFFF"
  }
  alt={post.title_es || post.title_en}
  className="h-72 w-full object-cover"
/>

                {/* Content */}
                <div className="p-8">
                  <p className="text-sm uppercase tracking-[0.2em] text-orange-400">
                    {post.category}
                  </p>

                  <h2 className="mt-4 text-3xl font-black">
                    {post.title_es}
                  </h2>

                  <p className="mt-6 text-zinc-400">
                    {post.excerpt_es}
                  </p>

                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-sm text-zinc-500">
                      {new Date(post.created_at).toLocaleDateString()}
                    </span>

                    <span className="text-sm font-semibold text-orange-400">
                      Leer →
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