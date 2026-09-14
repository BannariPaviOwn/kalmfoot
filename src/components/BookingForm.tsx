"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  LOCATIONS,
  SERVICES,
  TIME_SLOTS,
  buildBookingWhatsAppMessage,
  getWhatsAppUrl,
} from "@/lib/data";
import type { ServiceType } from "@/types";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function BookingForm() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "foot-reflexology" as ServiceType,
    locationId: LOCATIONS[0].id,
    date: "",
    time: "",
    notes: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const [lastBookingWhatsAppUrl, setLastBookingWhatsAppUrl] = useState<
    string | null
  >(null);

  const minDate = new Date().toISOString().split("T")[0];

  function bookingWhatsAppUrlFromForm() {
    const service = SERVICES.find((s) => s.id === form.service);
    const location = LOCATIONS.find((l) => l.id === form.locationId);
    return getWhatsAppUrl(
      buildBookingWhatsAppMessage({
        name: form.name,
        phone: form.phone,
        email: form.email,
        service: service?.title,
        location: location?.name,
        date: form.date,
        time: form.time,
        notes: form.notes,
      })
    );
  }

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam && SERVICES.some((s) => s.id === serviceParam)) {
      setForm((prev) => ({
        ...prev,
        service: serviceParam as ServiceType,
      }));
    }
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    setLastBookingWhatsAppUrl(null);

    const whatsappUrl = bookingWhatsAppUrlFromForm();

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Booking failed");
      }

      setLastBookingWhatsAppUrl(whatsappUrl);
      setStatus("success");
      setMessage(
        "Your appointment request has been received! We will confirm your booking shortly."
      );
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "foot-reflexology",
        locationId: LOCATIONS[0].id,
        date: "",
        time: "",
        notes: "",
      });
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <section id="booking" className="section-padding bg-forest text-cream">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm tracking-[0.25em] text-gold uppercase">
            Book an Appointment
          </p>
          <h2 className="font-serif text-3xl md:text-4xl">
            Schedule Your Wellness Session
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 gold-gradient rounded-full" />
          <p className="mt-4 text-cream/70">
            Select your preferred service, location, date, and time. Our team
            will confirm your appointment within 24 hours.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl border border-gold/20 bg-forest-light/50 p-6 md:p-10"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-gold">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-gold/20 bg-cream/10 px-4 py-3 text-cream placeholder:text-cream/40"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-gold">
                Email *
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-gold/20 bg-cream/10 px-4 py-3 text-cream placeholder:text-cream/40"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm text-gold">
                Phone *
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-lg border border-gold/20 bg-cream/10 px-4 py-3 text-cream placeholder:text-cream/40"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            <div>
              <label
                htmlFor="service"
                className="mb-2 block text-sm text-gold"
              >
                Service *
              </label>
              <select
                id="service"
                required
                value={form.service}
                onChange={(e) =>
                  setForm({ ...form, service: e.target.value as ServiceType })
                }
                className="w-full rounded-lg border border-gold/20 bg-cream/10 px-4 py-3 text-cream"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id} className="text-forest">
                    {s.title} — {s.duration}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="location"
                className="mb-2 block text-sm text-gold"
              >
                Location *
              </label>
              <select
                id="location"
                required
                value={form.locationId}
                onChange={(e) =>
                  setForm({ ...form, locationId: e.target.value })
                }
                className="w-full rounded-lg border border-gold/20 bg-cream/10 px-4 py-3 text-cream"
              >
                {LOCATIONS.map((loc) => (
                  <option key={loc.id} value={loc.id} className="text-forest">
                    {loc.name} — {loc.city}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="date" className="mb-2 block text-sm text-gold">
                Preferred Date *
              </label>
              <input
                id="date"
                type="date"
                required
                min={minDate}
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full rounded-lg border border-gold/20 bg-cream/10 px-4 py-3 text-cream"
              />
            </div>
            <div>
              <label htmlFor="time" className="mb-2 block text-sm text-gold">
                Preferred Time *
              </label>
              <select
                id="time"
                required
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                className="w-full rounded-lg border border-gold/20 bg-cream/10 px-4 py-3 text-cream"
              >
                <option value="" className="text-forest">
                  Select a time slot
                </option>
                {TIME_SLOTS.map((slot) => (
                  <option key={slot} value={slot} className="text-forest">
                    {slot}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="notes" className="mb-2 block text-sm text-gold">
                Notes (optional)
              </label>
              <textarea
                id="notes"
                rows={3}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className="w-full rounded-lg border border-gold/20 bg-cream/10 px-4 py-3 text-cream placeholder:text-cream/40"
                placeholder="Any health conditions, preferences, or special requests..."
              />
            </div>
          </div>

          {message && (
            <div
              className={`rounded-lg p-4 text-sm ${
                status === "success"
                  ? "bg-green-900/30 text-green-200"
                  : "bg-red-900/30 text-red-200"
              }`}
            >
              <p>{message}</p>
              {status === "success" && lastBookingWhatsAppUrl && (
                <a
                  href={lastBookingWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 font-semibold text-[#25D366] underline-offset-2 hover:underline"
                >
                  <WhatsAppIcon size={18} />
                  Prefer WhatsApp? Confirm via chat
                </a>
              )}
            </div>
          )}

          <div className="space-y-3">
            <button
              type="submit"
              disabled={status === "loading"}
              className="gold-gradient w-full rounded-full py-4 font-semibold text-white shadow-lg transition-all hover:scale-[1.02] disabled:opacity-60"
            >
              {status === "loading" ? "Submitting..." : "Request Appointment"}
            </button>

            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-gold/20" />
              <span className="text-xs tracking-[0.2em] text-cream/50 uppercase">
                or
              </span>
              <span className="h-px flex-1 bg-gold/20" />
            </div>

            <a
              href={bookingWhatsAppUrlFromForm()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#25D366]/50 bg-[#25D366]/10 px-6 py-3.5 font-semibold text-[#25D366] transition-all hover:bg-[#25D366]/20 hover:scale-[1.02]"
            >
              <WhatsAppIcon size={20} />
              Book on WhatsApp
            </a>
            <p className="text-center text-xs text-cream/50">
              Opens WhatsApp with your booking details pre-filled. Online form
              submissions still work as usual.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
