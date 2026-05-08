const steps = [
  { title: "Brief", text: "You share style, references, text, deadline, and platform." },
  { title: "Concept", text: "We craft the first concept and send it for review." },
  { title: "Revisions", text: "1–2 quick revisions based on your feedback." },
  { title: "Delivery", text: "Final files ready for Spotify/Apple/Bandcamp + social versions." },
];

export default function WorkflowSectionEN() {
  return (
    <section className="border-t border-zinc-900 bg-black py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            Process
          </p>
          <h2 className="text-4xl font-black md:text-5xl">How it works</h2>
          <p className="mt-6 text-zinc-400">Simple workflow focused on speed and quality.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
              <div className="mb-8 text-sm font-bold text-orange-400">0{i + 1}</div>
              <h3 className="text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-4 leading-relaxed text-zinc-400">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}