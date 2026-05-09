"use client";

import { useState } from "react";

import { uploadFile } from "@/lib/upload";

export default function ArtistForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      const fileInput =
        e.currentTarget.avatar as HTMLInputElement;

      let avatarUrl = "";

      if (fileInput.files?.[0]) {
        const uploadedUrl = await uploadFile(
          fileInput.files[0]
        );

        if (uploadedUrl) {
          avatarUrl = uploadedUrl;
        }
      }

      formData.append("avatarUrl", avatarUrl);

      const response = await fetch(
        "/api/admin/artists",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        location.reload();
      }
    } catch (error) {
      console.error(error);

      alert("Error creating artist");
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
        name="avatar"
        accept="image/*"
        className="w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4"
      />

      <input
        type="text"
        name="name"
        placeholder="Artist Name"
        required
        className="w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4"
      />

      <input
        type="text"
        name="tagline"
        placeholder="Tagline"
        className="w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4"
      />

      <textarea
        name="bioEs"
        rows={5}
        placeholder="Bio ES"
        className="w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4"
      />

      <textarea
        name="bioEn"
        rows={5}
        placeholder="Bio EN"
        className="w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4"
      />

      <input
        type="url"
        name="spotify"
        placeholder="Spotify URL"
        className="w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4"
      />

      <input
        type="url"
        name="apple"
        placeholder="Apple Music URL"
        className="w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4"
      />

      <input
        type="url"
        name="bandcamp"
        placeholder="Bandcamp URL"
        className="w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4"
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-black"
      >
        {loading ? "Creating..." : "Create Artist"}
      </button>
    </form>
  );
}