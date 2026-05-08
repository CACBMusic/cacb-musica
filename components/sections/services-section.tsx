export default function ServicesSection() {
  const services = [
    {
      title: "Cover Art",
      description:
        "Portadas profesionales para Spotify, Apple Music y plataformas digitales.",
    },
    {
      title: "Motion Covers",
      description:
        "Visuales animados para reels, promos y campañas de lanzamiento.",
    },
    {
      title: "Artist Branding",
      description:
        "Identidad visual completa para artistas urbanos y proyectos musicales.",
    },
  ];

  return (
    <section className="border-t border-zinc-900 bg-black py-28">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            Servicios
          </p>

          <h2 className="text-4xl font-black leading-tight md:text-5xl">
            Diseños creados
            <br />
            para destacar
          </h2>

          <p className="mt-6 text-zinc-400">
            Creamos visuales modernos para artistas que quieren elevar su imagen
            y verse profesionales en cada lanzamiento.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition-all duration-300 hover:border-orange-500/40 hover:bg-zinc-900"
            >
              
              {/* Number */}
              <div className="mb-8 text-sm font-bold text-orange-400">
                0{services.indexOf(service) + 1}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-relaxed text-zinc-400">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="mt-10 text-orange-400 transition-transform duration-300 group-hover:translate-x-1">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}