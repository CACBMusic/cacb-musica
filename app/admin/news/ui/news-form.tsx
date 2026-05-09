"use client";

import { useState } from "react";

import { uploadFile } from "@/lib/upload";

export default function NewsForm() {
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

      let coverUrl = "";

      if (fileInput.files?.[0]) {
        const uploadedUrl = await uploadFile(
          fileInput.files[0]
        );

        if (uploadedUrl) {
          coverUrl = uploadedUrl;
        }
      }

      formData.append("coverUrl", coverUrl);

      const response = await fetch("/api/admin/news", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        location.reload();
      }
    } catch (error) {
      console.error(error);

      alert("Error creating news");
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
        type="file"
        name="cover"
        accept="image/*"
        className="w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4"
      />

      <input
        type="text"
        name="titleEs"
        placeholder="Title ES"
        required
        className="w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4"
      />

      <input
        type="text"
        name="titleEn"
        placeholder="Title EN"
        required
        className="w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4"
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        className="w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4"
      />

      <textarea
        name="excerptEs"
        rows={3}
        placeholder="Excerpt ES"
        className="w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4"
      />

      <textarea
        name="excerptEn"
        rows={3}
        placeholder="Excerpt EN"
        className="w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4"
      />

      <textarea
        name="contentEs"
        rows={8}
        placeholder="Content ES"
        className="w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4"
      />

      <textarea
        name="contentEn"
        rows={8}
        placeholder="Content EN"
        className="w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4"
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-black"
      >
        {loading ? "Publishing..." : "Publish News"}
      </button>
    </form>
  );
}