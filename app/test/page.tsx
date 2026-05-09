import { supabase } from "@/lib/supabase";

export default async function TestPage() {
  const { data, error } = await supabase
    .from("news")
    .select("*");

  return (
    <main className="min-h-screen bg-black p-10 text-white">
      <pre>
        {JSON.stringify({ data, error }, null, 2)}
      </pre>
    </main>
  );
}