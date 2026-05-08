"use client";

import { useState } from "react";

export default function ContactFormEN() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<null | boolean>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    setLoading(true);
    setSuccess(null);

    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      service: String(formData.get("service") ?? "Cover Art"),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      setSuccess(true);
      form.reset();
    } catch (err) {
      console.error("CONTACT_FORM_EN_ERROR:", err);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            Contact
          </p>
          <h2 className="text-4xl font-black leading-tight md:text-5xl">
            Tell us
            <br />
            your idea
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-zinc-400">
            Fill the form and we’ll reply as soon as possible.
          </p>

          <div className="mt-10 space-y-4 text-zinc-400">
            <p>contacto@cacbmusica.com</p>
            <p>Dominican Republic</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
          <div>
            <label className="mb-3 block text-sm font-medium text-zinc-300">Name</label>
            <input
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full rounded-2xl border border-zinc-800 bg-black px-5 py-4 text-white outline-none transition focus:border-orange-400"
            />
          </div>

          <div>
            <label className="mb-3 block text-sm font-medium text-zinc-300">Email</label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@email.com"
              className="w-full rounded-2xl border border-zinc-800 bg-black px-5 py-4 text-white outline-none transition focus:border-orange-400"
            />
          </div>

          <div>
            <label className="mb-3 block text-sm font-medium text-zinc-300">Service</label>
            <select
              name="service"
              defaultValue="Cover Art"
              className="w-full rounded-2xl border border-zinc-800 bg-black px-5 py-4 text-white outline-none transition focus:border-orange-400"
            >
              <option value="Cover Art">Cover Art</option>
              <option value="Motion Cover">Motion Cover</option>
              <option value="Artist Branding">Artist Branding</option>
            </select>
          </div>

          <div>
            <label className="mb-3 block text-sm font-medium text-zinc-300">Message</label>
            <textarea
              name="message"
              rows={6}
              required
              placeholder="Tell us about your project..."
              className="w-full rounded-2xl border border-zinc-800 bg-black px-5 py-4 text-white outline-none transition focus:border-orange-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 px-6 py-4 font-bold text-black transition hover:scale-[1.02] disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send message"}
          </button>

          {success === true && <p className="text-sm text-green-400">Message sent successfully.</p>}
          {success === false && <p className="text-sm text-red-400">Could not send. Try again in a few minutes.</p>}
        </form>
      </div>
    </section>
  );
}