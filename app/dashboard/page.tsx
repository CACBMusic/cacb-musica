import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase-server";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.3em] text-orange-400">
          Dashboard
        </p>

        <h1 className="mt-4 text-5xl font-black">
          Welcome back
        </h1>

        <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
          <p className="text-zinc-400">
            Logged in as:
          </p>

          <p className="mt-2 text-2xl font-bold">
            {user.email}
          </p>
        </div>
      </div>
    </main>
  );
}