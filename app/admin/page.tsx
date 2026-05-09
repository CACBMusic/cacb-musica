import Link from "next/link";

import { UserButton } from "@clerk/nextjs";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="border-b border-zinc-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          {/* Left */}
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-orange-400">
              CACB Música
            </p>

            <h1 className="mt-2 text-3xl font-black">
              Admin Panel
            </h1>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <UserButton afterSignOutUrl="/es" />

            <Link
              href="/es"
              className="rounded-full border border-zinc-700 px-5 py-2 text-sm font-semibold transition hover:border-orange-500 hover:text-orange-400"
            >
              Ver sitio
            </Link>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
          {/* Artists */}
          <Link
            href="/admin/artists"
            className="group rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-orange-500/50"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl">
              🎤
            </div>

            <p className="text-sm uppercase tracking-[0.2em] text-orange-400">
              Artists
            </p>

            <h2 className="mt-4 text-3xl font-black transition group-hover:text-orange-400">
              Administrar artistas
            </h2>

            <p className="mt-4 text-zinc-400">
              Editar perfiles, biografías, plataformas y enlaces sociales.
            </p>

            <div className="mt-8 text-sm font-semibold text-orange-400">
              Entrar →
            </div>
          </Link>

          {/* News */}
          <Link
            href="/admin/news"
            className="group rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-orange-500/50"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl">
              📰
            </div>

            <p className="text-sm uppercase tracking-[0.2em] text-orange-400">
              News
            </p>

            <h2 className="mt-4 text-3xl font-black transition group-hover:text-orange-400">
              Administrar noticias
            </h2>

            <p className="mt-4 text-zinc-400">
              Crear publicaciones, anuncios y contenido del sello.
            </p>

            <div className="mt-8 text-sm font-semibold text-orange-400">
              Entrar →
            </div>
          </Link>

          {/* Releases */}
          <Link
            href="/admin/releases"
            className="group rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-orange-500/50"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl">
              💿
            </div>

            <p className="text-sm uppercase tracking-[0.2em] text-orange-400">
              Releases
            </p>

            <h2 className="mt-4 text-3xl font-black transition group-hover:text-orange-400">
              Administrar releases
            </h2>

            <p className="mt-4 text-zinc-400">
              Gestionar música, proyectos, portadas y próximos lanzamientos.
            </p>

            <div className="mt-8 text-sm font-semibold text-orange-400">
              Entrar →
            </div>
          </Link>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-400">
              CACB Música System
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Panel administrativo inicial
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
              Esta es la primera versión del sistema administrativo de CACB
              Música. Próximamente se integrarán uploads, editor markdown,
              analytics, gestión de artistas y CMS conectado a Supabase.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}