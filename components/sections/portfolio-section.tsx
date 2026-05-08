const projects = [
  {
    title: "Midnight City",
    artist: "El Demy RD",
  },
  {
    title: "No Sleep",
    artist: "El Di-crow",
  },
  {
    title: "Dark Energy",
    artist: "CACB Visuals",
  },
];

export default function PortfolioSection() {
  return (
    <section className="border-t border-zinc-900 bg-black py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
              Portfolio
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              Visuales con
              <br />
              identidad propia
            </h2>
          </div>

          <p className="max-w-md text-zinc-400">
            Diseños conceptuales y visuales creados para artistas urbanos,
            campañas musicales y branding creativo.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950"
            >
              
              {/* Fake Cover */}
              <div
                className={`relative flex aspect-square items-end overflow-hidden p-8 ${
                  index === 0
                    ? "bg-gradient-to-br from-orange-500/30 to-black"
                    : index === 1
                    ? "bg-gradient-to-br from-yellow-500/20 to-black"
                    : "bg-gradient-to-br from-orange-400/20 to-zinc-950"
                }`}
              >
                
                {/* Glow */}
                <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/10" />

                {/* Big Background Text */}
                <div className="absolute right-4 top-4 text-6xl font-black text-white/5">
                  CACB
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <p className="text-sm uppercase tracking-[0.2em] text-orange-300">
                    {project.artist}
                  </p>

                  <h3 className="mt-2 text-3xl font-black leading-none text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-zinc-800 px-6 py-5">
                <span className="text-sm text-zinc-400">
                  Cover Art
                </span>

                <span className="text-orange-400 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}