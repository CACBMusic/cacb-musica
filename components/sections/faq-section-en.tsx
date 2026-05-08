const faqs = [
  { q: "How long does delivery take?", a: "Cover Art can be 24–72h. Motion and Branding may take longer depending on complexity." },
  { q: "How many revisions are included?", a: "We include 1–2 quick revisions depending on the package." },
  { q: "What sizes/formats do you deliver?", a: "Standard cover 3000x3000 + social versions if needed." },
  { q: "Do you provide editable files?", a: "Final export is included. Editable files can be added for an extra fee." },
  { q: "How do payments work?", a: "Typically 50% upfront and 50% on delivery. Small jobs may require full upfront." },
];

export default function FaqSectionEN() {
  return (
    <section className="border-t border-zinc-900 bg-black py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            FAQ
          </p>
          <h2 className="text-4xl font-black md:text-5xl">Frequently asked</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
              <h3 className="text-lg font-bold text-white">{f.q}</h3>
              <p className="mt-4 leading-relaxed text-zinc-400">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}