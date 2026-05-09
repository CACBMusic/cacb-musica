"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { createClient } from "@/lib/supabase-browser";

export default function LoginForm() {
  const router = useRouter();

  const supabase = createClient();

  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      const email = formData.get("email") as string;

      const password = formData.get(
        "password"
      ) as string;

      const { error } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (error) {
        alert(error.message);

        return;
      }

      router.push("/dashboard");

      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
    >
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        className="w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 px-6 py-4 font-bold text-black"
      >
        {loading ? "Loading..." : "Login"}
      </button>
    </form>
  );
}