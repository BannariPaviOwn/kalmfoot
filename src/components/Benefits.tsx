import { BENEFITS } from "@/lib/data";

export default function Benefits() {
  return (
    <section id="benefits" className="section-padding bg-cream-dark">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm tracking-[0.25em] text-gold uppercase">
            Why Choose Us
          </p>
          <h2 className="font-serif text-3xl text-forest md:text-4xl lg:text-5xl">
            The Kalm Foot Difference
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 gold-gradient rounded-full" />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group rounded-2xl border border-gold/15 bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-forest/5 ring-2 ring-gold/20 transition-all group-hover:ring-gold/50">
                <span className="font-serif text-2xl text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mb-3 font-serif text-lg text-forest">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-forest/70">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid items-center gap-8 overflow-hidden rounded-3xl bg-forest lg:grid-cols-2">
          <div className="p-8 md:p-12">
            <h3 className="mb-4 font-serif text-2xl text-gold md:text-3xl">
              Your Wellness Journey Starts Here
            </h3>
            <p className="mb-6 leading-relaxed text-cream/80">
              Whether you&apos;re new to reflexology or a seasoned wellness
              enthusiast, our team welcomes you with warmth and expertise. We
              take time to understand your health history, preferences, and
              goals — ensuring every visit delivers meaningful, lasting benefits.
            </p>
            <ul className="space-y-2 text-cream/70">
              <li className="flex items-center gap-2">
                <span className="text-gold">✓</span> Hygienic, spa-grade facilities
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold">✓</span> Flexible booking across 6 locations
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold">✓</span> Complimentary herbal tea after sessions
              </li>
            </ul>
          </div>
          <div className="relative flex min-h-[280px] items-center justify-center bg-forest-light p-8">
            <div className="text-center">
              <p className="font-script text-5xl text-gold md:text-6xl">foot</p>
              <p className="mt-2 font-serif text-xl tracking-[0.3em] text-cream uppercase">
                Reflexology
              </p>
              <p className="mt-4 text-sm tracking-widest text-gold/80">
                RELAX • REJUVENATE • RENEW
              </p>
            </div>
            <div className="decorative-circle absolute right-8 top-8 h-32 w-32 opacity-20" />
            <div className="decorative-circle absolute bottom-8 left-8 h-24 w-24 opacity-15" />
          </div>
        </div>
      </div>
    </section>
  );
}
