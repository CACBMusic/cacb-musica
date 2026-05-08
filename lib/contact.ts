export const CONTACT_EMAIL = "contacto@cacbmusica.com";

// Pon tu número en formato internacional SIN + ni espacios.
// Ej: RD: 18095551234 (1 + área + número)
export const WHATSAPP_NUMBER = "18097075616";

export function buildWhatsAppLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function buildMailtoLink(subject: string, body: string) {
  const s = encodeURIComponent(subject);
  const b = encodeURIComponent(body);
  return `mailto:${CONTACT_EMAIL}?subject=${s}&body=${b}`;
}