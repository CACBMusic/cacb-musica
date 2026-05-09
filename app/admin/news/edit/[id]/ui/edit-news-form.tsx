"use client";

import { useState } from "react";

import { uploadFile } from "@/lib/upload";

type Props = {
  post: any;
};

export default function EditNewsForm({
  post,
}: Props) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      const fileInput =
        e.currentTarget.cover as HTMLInputElement;

      let coverUrl = post.cover_url || "";

      if (fileInput.files?.[0]) {
        const uploadedUrl = await uploadFile(
          fileInput.files[0]
        );

        if (uploadedUrl) {
          coverUrl = uploadedUrl;
        }
      }

      formData.append("coverUrl", coverUrl);

      const response = await fetch(
        "/api/admin/news/update",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        alert("News updated");
      }
    } catch (error) {
      console.error(error);

      alert("Error updating news");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
    >
      <input
        type="hidden"
        name="id"
        value={post.id}
      />

      {/* Current Cover */}
      {post.cover_url && (
        <img
          src={post.cover_url}
          alt={post.title_en}
          className="h-72 w-full rounded-3xl object-cover"
        />
      )}

      {/* Upload */}
      <input
        type="file"
        name="cover"
        accept="image/*"
        className="w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4"
      />

      {/* Title ES */}
      <input
        type="text"
        name="titleEs"
        defaultValue={post.title_es}
        className="w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4"
      />

      {/* Title EN */}
      <input
        type="text"
        name="titleEn"
        defaultValue={post.title_en}
        className="w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4"
      />

      {/* Category */}
      <input
        type="text"
        name="category"
        defaultValue={post.category}
        className="w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4"
      />

      {/* Excerpt ES */}
      <textarea
        name="excerptEs"
        rows={3}
        defaultValue={post.excerpt_es}
        className="w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4"
      />

      {/* Excerpt EN */}
      <textarea
        name="excerptEn"
        rows={3}
        defaultValue={post.excerpt_en}
        className="w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4"
      />

      {/* Content ES */}
      <textarea
        name="contentEs"
        rows={8}
        defaultValue={post.content_es}
        className="w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4"
      />

      {/* Content EN */}
      <textarea
        name="contentEn"
        rows={8}
        defaultValue={post.content_en}
        className="w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4"
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-black"
      >
        {loading ? "Updating..." : "Update News"}
      </button>
    </form>
  );
}