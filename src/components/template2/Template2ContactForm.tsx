"use client";

import { useState } from "react";
import { LOCATIONS, SITE } from "@/lib/data";

export default function Template2ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed");

      setStatus("success");
      setFeedback(
        "Thank you for your enquiry! We will get back to you as soon as possible."
      );
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setFeedback(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  const primary = LOCATIONS[0];

  return (
    <section className="t2-contact-wrap" id="contact">
      <div className="t2-contact-inner">
        <div className="t2-contact-meta t2-animate">
          <h2>Contact Us</h2>
          <h3>
            {primary.address}
            <br />
            {primary.city}
          </h3>
          <p>
            Main :{" "}
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
          </p>
          <p>
            Email : <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
          <p style={{ marginTop: "1rem", opacity: 0.85 }}>{primary.hours}</p>
        </div>

        <form className="t2-form t2-animate t2-animate-delay-1" onSubmit={handleSubmit}>
          <label>
            Name *
            <input
              required
              name="name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              autoComplete="name"
            />
          </label>
          <label>
            Phone *
            <input
              required
              name="phone"
              type="tel"
              value={form.phone}
              onChange={(e) =>
                setForm((f) => ({ ...f, phone: e.target.value }))
              }
              autoComplete="tel"
            />
          </label>
          <label>
            Email *
            <input
              required
              name="email"
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm((f) => ({ ...f, email: e.target.value }))
              }
              autoComplete="email"
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={(e) =>
                setForm((f) => ({ ...f, message: e.target.value }))
              }
            />
          </label>
          <button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending…" : "Send"}
          </button>
          {feedback ? (
            <p
              className="t2-form-status"
              role="status"
              style={{
                color: status === "error" ? "#ffd4d4" : "#e8ffe8",
              }}
            >
              {feedback}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
