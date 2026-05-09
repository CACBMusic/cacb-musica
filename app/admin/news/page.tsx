import { getAdminNews } from "@/lib/admin-news";
import Link from "next/link";

import DeleteNewsButton from "./ui/delete-news-button";
import NewsForm from "./ui/news-form";

export default async function AdminNewsPage() {
  const news = await getAdminNews();

  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-orange-400">
            Admin
          </p>

          <h1 className="mt-4 text-5xl font-black">
            News CMS
          </h1>
        </div>

        {/* Form */}
        <NewsForm />

        {/* Existing News */}
        <div className="mt-20">
          <h2 className="mb-8 text-3xl font-black">
            Existing News
          </h2>

          <div className="space-y-6">
            {news.map((post: any) => (
              <div
                key={post.id}
                className="flex flex-col gap-6 rounded-3xl border border-zinc-800 bg-zinc-950 p-6 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-center gap-5">
                  <img
                    src={
                      post.cover_url ||
                      "https://placehold.co/200x200/111111/FFFFFF"
                    }
                    alt={post.title_en}
                    className="h-24 w-24 rounded-2xl object-cover"
                  />

                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-orange-400">
                      {post.category}
                    </p>

                    <h3 className="mt-2 text-2xl font-black">
                      {post.title_en}
                    </h3>

                    <p className="mt-2 text-sm text-zinc-500">
                      {new Date(
                        post.created_at
                      ).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link href={`/admin/news/edit/${post.id}`} className="rounded-full border border-zinc-700 px-5 py-2 text-sm font-semibold transition hover:border-orange-500 hover:text-orange-400" >
                  Edit
                  </Link>

                  <DeleteNewsButton id={post.id} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}