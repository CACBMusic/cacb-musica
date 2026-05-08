import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function NewsEN() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-white">
        <section className="border-b border-zinc-900 py-28">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
              News
            </p>
            <h1 className="text-5xl font-black md:text-7xl">News</h1>
            <p className="mt-6 max-w-2xl text-zinc-400">
              Coming soon. Announcements, drops, and press.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}