import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const { name, email, service, message } = await req.json();

    // Validación mínima
    if (
      !name ||
      !email ||
      !service ||
      !message ||
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof service !== "string" ||
      typeof message !== "string"
    ) {
      return Response.json(
        { success: false, error: "Invalid payload" },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name.trim()).slice(0, 120);
    const safeEmail = escapeHtml(email.trim()).slice(0, 180);
    const safeService = escapeHtml(service.trim()).slice(0, 80);
    const safeMessage = escapeHtml(message.trim())
      .slice(0, 4000)
      .replaceAll("\n", "<br/>");

    await resend.emails.send({
      // Dev:
      from: "CACB Música <onboarding@resend.dev>",
      // Cambia a tu email real:
      to: "contacto@cacbmusica.com",
      replyTo: safeEmail,
      subject: `Nuevo mensaje - ${safeService}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.5;">
          <h2 style="margin: 0 0 12px;">Nuevo mensaje desde CACB Música</h2>
          <p style="margin: 0 0 6px;"><strong>Nombre:</strong> ${safeName}</p>
          <p style="margin: 0 0 6px;"><strong>Email:</strong> ${safeEmail}</p>
          <p style="margin: 0 0 16px;"><strong>Servicio:</strong> ${safeService}</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 16px 0;" />
          <p style="margin: 0;">${safeMessage}</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("CONTACT_API_ERROR:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}