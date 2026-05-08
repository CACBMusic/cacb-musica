import Link from "next/link";
import { buildMailtoLink, buildWhatsAppLink } from "@/lib/contact";

export default function RequestButtons({
  service,
  price,
}: {
  service: string;
  price?: string;
}) {
  const subject = `Solicitud - ${service} (CACB Música)`;

  const baseMessage = `Hola CACB Música, quiero solicitar: ${service}${
    price ? ` (${price})` : ""
  }.

- Nombre artístico:
- Estilo / referencia (links):
- Texto que debe llevar la portada:
- Fecha de entrega:
- Presupuesto:

Gracias.`;

  const whatsappHref = buildWhatsAppLink(baseMessage);
  const mailtoHref = buildMailtoLink(subject, baseMessage);

  return (
    <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
      <Link
        href={whatsappHref}
        target="_blank"
        className="rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 px-6 py-4 text-center text-sm font-bold text-black transition hover:scale-[1.02]"
      >
        WhatsApp
      </Link>

      <Link
        href={mailtoHref}
        className="rounded-full border border-zinc-700 px-6 py-4 text-center text-sm font-semibold text-white transition hover:border-orange-400 hover:bg-orange-500/5"
      >
        Email
      </Link>
    </div>
  );
}