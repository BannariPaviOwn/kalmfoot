import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-cream leaf-pattern">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm tracking-[0.25em] text-gold uppercase">
            Client Stories
          </p>
          <h2 className="font-serif text-3xl text-forest md:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 gold-gradient rounded-full" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-gold/15 bg-white p-8 shadow-sm"
            >
              <div className="mb-4 flex gap-1 text-gold">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>
              <p className="mb-6 flex-1 leading-relaxed text-forest/80 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer>
                <cite className="not-italic">
                  <p className="font-semibold text-forest">{testimonial.name}</p>
                  <p className="text-sm text-forest/60">{testimonial.role}</p>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
