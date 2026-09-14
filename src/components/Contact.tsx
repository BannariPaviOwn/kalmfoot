"use client";

import { useState } from "react";
import {
  LOCATIONS,
  SITE,
  getWhatsAppUrl,
  WHATSAPP_MESSAGES,
} from "@/lib/data";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Submission failed");
      }

      setStatus("success");
      setMessage("Thank you! We will get back to you soon.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  const contactWhatsAppUrl = (() => {
    if (form.name.trim() || form.message.trim() || form.phone.trim()) {
      const parts = [
        WHATSAPP_MESSAGES.contact,
        form.name.trim() && `Name: ${form.name.trim()}`,
        form.phone.trim() && `Phone: ${form.phone.trim()}`,
        form.email.trim() && `Email: ${form.email.trim()}`,
        form.message.trim() && `Message: ${form.message.trim()}`,
      ].filter(Boolean);
      return getWhatsAppUrl(parts.join("\n"));
    }
    return getWhatsAppUrl(WHATSAPP_MESSAGES.contact);
  })();

  return (
    <section id="contact" className="section-padding bg-cream">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm tracking-[0.25em] text-gold uppercase">
            Get in Touch
          </p>
          <h2 className="font-serif text-3xl text-forest md:text-4xl">
            Contact Us
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 gold-gradient rounded-full" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 font-serif text-xl text-forest">
                Visit Our Studios
              </h3>
              <div className="space-y-6">
                {LOCATIONS.map((loc) => (
                  <div
                    key={loc.id}
                    className="rounded-xl border border-gold/15 bg-white p-6"
                  >
                    <p className="font-semibold text-forest">{loc.name}</p>
                    <p className="mt-1 text-sm text-forest/70">
                      {loc.address}
                    </p>
                    <p className="text-sm text-forest/70">{loc.city}</p>
                    <p className="mt-2 text-sm text-gold">{loc.phone}</p>
                    <p className="mt-1 text-xs text-forest/50">{loc.hours}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-forest p-6 text-cream">
              <p className="font-semibold">General Inquiries</p>
              <p className="mt-2 text-cream/80">{SITE.email}</p>
              <p className="text-cream/80">{SITE.phone}</p>
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.contact)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/15 px-5 py-2.5 text-sm font-semibold text-[#25D366] transition-all hover:bg-[#25D366]/25"
              >
                <WhatsAppIcon size={18} />
                Chat on WhatsApp
              </a>
            </div>

            <div className="overflow-hidden rounded-xl border border-gold/15 bg-cream-dark">
              <div className="flex h-48 items-center justify-center bg-forest/5">
                <div className="text-center text-forest/50">
                  <p className="text-4xl">📍</p>
                  <p className="mt-2 text-sm">Map placeholder</p>
                  <p className="text-xs">Embed Google Maps here</p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-gold/15 bg-white p-8 shadow-sm"
          >
            <h3 className="font-serif text-xl text-forest">Send a Message</h3>
            <div>
              <label htmlFor="contact-name" className="mb-1 block text-sm text-forest/70">
                Name *
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-gold/20 px-4 py-3 text-forest"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-1 block text-sm text-forest/70">
                Email *
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-gold/20 px-4 py-3 text-forest"
              />
            </div>
            <div>
              <label htmlFor="contact-phone" className="mb-1 block text-sm text-forest/70">
                Phone
              </label>
              <input
                id="contact-phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-lg border border-gold/20 px-4 py-3 text-forest"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-1 block text-sm text-forest/70">
                Message *
              </label>
              <textarea
                id="contact-message"
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-gold/20 px-4 py-3 text-forest"
              />
            </div>

            {message && (
              <div
                className={`rounded-lg p-3 text-sm ${
                  status === "success"
                    ? "bg-green-50 text-green-800"
                    : "bg-red-50 text-red-800"
                }`}
              >
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="gold-gradient w-full rounded-full py-3 font-semibold text-white transition-all hover:scale-[1.02] disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            <a
              href={contactWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#25D366]/40 px-6 py-3 text-sm font-semibold text-[#128C7E] transition-all hover:bg-[#25D366]/10"
            >
              <WhatsAppIcon size={18} />
              Message us on WhatsApp
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}
