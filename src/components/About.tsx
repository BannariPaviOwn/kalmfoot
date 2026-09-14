import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="section-padding bg-cream leaf-pattern">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm tracking-[0.25em] text-gold uppercase">
            About Reflexology
          </p>
          <h2 className="font-serif text-3xl text-forest md:text-4xl lg:text-5xl">
            What Is Foot Reflexology?
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 gold-gradient rounded-full" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 text-forest/85 leading-relaxed">
            <p>
              <strong className="text-forest">Foot reflexology</strong> is an
              ancient therapeutic practice rooted in Traditional Chinese Medicine
              and Egyptian healing traditions. It is based on the principle that
              specific reflex points on the feet correspond to organs, glands, and
              systems throughout the body. By applying targeted pressure to these
              zones, a skilled reflexologist can stimulate natural healing
              responses, release blocked energy, and promote overall wellness.
            </p>
            <p>
              At <strong className="text-forest">Kalm Foot Reflexology</strong>,
              we combine time-honored reflexology techniques with modern spa
              comforts to deliver a truly transformative experience. Whether you
              seek relief from chronic stress, improved sleep, better circulation,
              or simply a moment of deep relaxation, our sessions are designed to
              meet your unique needs.
            </p>
            <p>
              Research suggests that reflexology may help reduce anxiety, alleviate
              headaches, ease digestive discomfort, and support recovery from
              physical fatigue. Our holistic approach treats the whole person —
              body, mind, and spirit — in an environment of calm and care.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-gold/20 bg-white p-8 shadow-sm">
              <h3 className="mb-4 font-serif text-xl text-forest">
                Key Benefits of Reflexology
              </h3>
              <ul className="space-y-3 text-forest/80">
                {[
                  "Reduces stress and promotes deep relaxation",
                  "Improves blood circulation and lymphatic flow",
                  "Relieves tension in feet, legs, and lower back",
                  "Supports better sleep and mental clarity",
                  "Boosts energy levels and immune function",
                  "Complements other wellness and medical treatments",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full gold-gradient" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-forest p-8 text-cream">
              <h3 className="mb-3 font-serif text-xl">Our Philosophy</h3>
              <p className="leading-relaxed text-cream/85">
                We believe wellness begins at your feet — the foundation that
                carries you through life. Every session at Kalm Foot is a ritual
                of renewal, blending botanical ingredients, mindful touch, and
                serene surroundings to help you reconnect with your body&apos;s
                innate capacity to heal.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/about-us"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white px-8 py-3 font-medium text-forest transition-all hover:border-gold hover:bg-forest hover:text-gold"
          >
            Learn More About Us
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
