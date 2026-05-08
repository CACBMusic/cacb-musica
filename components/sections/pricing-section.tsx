import RequestButtons from "@/components/ui/request-buttons";

const plans = [
  {
    title: "Cover Art",
    price: "$25",
    features: [
      "Portada profesional",
      "Formato Spotify/Apple",
      "1 revisión",
      "Entrega rápida",
    ],
  },
  {
    title: "Motion Cover",
    price: "$80",
    features: [
      "Animación corta",
      "Formato Reel/TikTok",
      "Loop visual",
      "Calidad HD",
    ],
  },
  {
    title: "Branding Pack",
    price: "$150",
    features: [
      "Cover Art",
      "Avatar",
      "Banner",
      "Story templates",
      "Visual branding",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="border-t border-zinc-900 bg-black py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            Pricing
          </p>
          <h2 className="text-4xl font-black md:text-5xl">
            Servicios y precios
          </h2>
          <p className="mt-6 text-zinc-400">
            Selecciona un paquete y envíanos tu solicitud por WhatsApp o Email.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
            >
              <h3 className="text-2xl font-black">{plan.title}</h3>

              <div className="mt-6 text-5xl font-black text-orange-400">
                {plan.price}
              </div>

              <ul className="mt-8 space-y-4 text-zinc-400">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>

              <RequestButtons service={plan.title} price={plan.price} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}