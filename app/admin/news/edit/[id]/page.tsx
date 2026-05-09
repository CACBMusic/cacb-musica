import { notFound } from "next/navigation";

import { getNewsById } from "@/lib/admin-news";

import EditNewsForm from "./ui/edit-news-form";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditNewsPage({
  params,
}: Props) {
  const { id } = await params;

  const post = await getNewsById(id);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-orange-400">
            Admin
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Edit News
          </h1>
        </div>

        <EditNewsForm post={post} />
      </div>
    </main>
  );
}