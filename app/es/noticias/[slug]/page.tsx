import { notFound } from "next/navigation";
import Link from "next/link";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { getNewsBySlug } from "@/lib/news";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function NewsPostPage({
  params,
}: Props) {
  const { slug } = await params;

  const post = await getNewsBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="bg-black text-white">
        {/* Hero */}
        <section className="border-b border-zinc-900 py-28">
          <div className="mx-auto max-w-4xl px-6">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
              {post.category}
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              {post.title_es}
            </h1>

            <p className="mt-6 text-sm text-zinc-500">
              {new Date(post.created_at).toLocaleDateString()}
            </p>
          </div>
        </section>

        {/* Cover */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="aspect-video rounded-3xl bg-gradient-to-br from-orange-500 via-yellow-400 to-orange-700" />
          </div>
        </section>

        {/* Content */}
        <section className="pb-24">
          <div className="mx-auto max-w-3xl px-6">
            <div className="space-y-8 text-lg leading-relaxed text-zinc-300">
              {post.content_es
                ?.split("\n")
                .filter(Boolean)
                .map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))}
            </div>

            <div className="mt-16">
              <Link
                href="/es/noticias"
                className="text-sm font-semibold text-orange-400"
              >
                ← Volver a noticias
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}