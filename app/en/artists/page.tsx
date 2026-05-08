import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function ArtistsEN() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-white">
        <section className="border-b border-zinc-900 py-28">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
              Artists
            </p>
            <h1 className="text-5xl font-black md:text-7xl">Artists</h1>
            <p className="mt-6 max-w-2xl text-zinc-400">
              Coming soon. We’re building the full artist catalog.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}