export default function AdminReleasesPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.3em] text-orange-400">
          Admin
        </p>

        <h1 className="mt-4 text-5xl font-black">
          Releases
        </h1>

        <div className="mt-12 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
          <p className="text-zinc-400">
            Próximamente podrás administrar releases aquí.
          </p>
        </div>
      </div>
    </main>
  );
}