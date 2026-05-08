const steps = [
  {
    title: "Brief",
    text: "Nos dices estilo, referencias, texto, fecha y plataforma. Mientras más claro, más rápido.",
  },
  {
    title: "Concepto",
    text: "Creamos la propuesta inicial y te la enviamos para revisión.",
  },
  {
    title: "Revisión",
    text: "Hacemos 1–2 ajustes rápidos según tu feedback.",
  },
  {
    title: "Entrega",
    text: "Entregamos archivos finales listos para Spotify/Apple/Bandcamp + versiones para redes.",
  },
];

export default function WorkflowSection() {
  return (
    <section className="border-t border-zinc-900 bg-black py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            Proceso
          </p>
          <h2 className="text-4xl font-black md:text-5xl">
            Así trabajamos
          </h2>
          <p className="mt-6 text-zinc-400">
            Flujo simple, rápido y enfocado en entregarte calidad lista para publicar.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
            >
              <div className="mb-8 text-sm font-bold text-orange-400">
                0{i + 1}
              </div>
              <h3 className="text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-4 leading-relaxed text-zinc-400">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}