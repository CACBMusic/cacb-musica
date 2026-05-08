const faqs = [
  {
    q: "¿Cuánto tarda la entrega?",
    a: "Depende del servicio. Cover Art puede estar en 24–72h. Motion y Branding requieren más tiempo según complejidad.",
  },
  {
    q: "¿Cuántas revisiones incluye?",
    a: "Incluimos 1–2 revisiones rápidas (según el paquete). Cambios grandes o rediseños completos se cotizan aparte.",
  },
  {
    q: "¿Qué tamaños / formatos entregan?",
    a: "Portada estándar 3000x3000 (alta calidad), y versiones optimizadas para redes si aplica.",
  },
  {
    q: "¿Entregan archivos editables?",
    a: "Por defecto entregamos archivos finales listos. Editables se pueden incluir con costo adicional (según el proyecto).",
  },
  {
    q: "¿Cómo se paga?",
    a: "Normalmente 50% para iniciar y 50% al entregar. Si es un trabajo pequeño, puede ser pago completo para iniciar.",
  },
];

export default function FaqSection() {
  return (
    <section className="border-t border-zinc-900 bg-black py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            FAQ
          </p>
          <h2 className="text-4xl font-black md:text-5xl">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map((f) => (
            <div
              key={f.q}
              className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
            >
              <h3 className="text-lg font-bold text-white">{f.q}</h3>
              <p className="mt-4 leading-relaxed text-zinc-400">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}