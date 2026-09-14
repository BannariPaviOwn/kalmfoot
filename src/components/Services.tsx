import Image from "next/image";
import Link from "next/link";
import { SERVICES, getServiceWhatsAppUrl } from "@/lib/data";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Services() {
  return (
    <section id="services" className="section-padding bg-forest text-cream leaf-pattern">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm tracking-[0.25em] text-gold uppercase">
            Our Services
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
            Wellness Treatments for{" "}
            <span className="font-script text-4xl text-gold md:text-5xl">
              Body & Soul
            </span>
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold/30" />
            <div className="h-1 w-20 gold-gradient rounded-full" />
            <span className="h-px w-10 bg-gold/30" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-cream/75">
            From our signature foot reflexology to luxurious therapeutic massage,
            each treatment is crafted to restore balance and leave you feeling
            renewed.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                service.featured
                  ? "ring-2 ring-gold/50 shadow-xl shadow-gold/10"
                  : "ring-1 ring-gold/20 hover:ring-gold/40"
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/50 to-transparent" />

                {service.featured && (
                  <span className="absolute right-4 top-4 rounded-full gold-gradient px-3 py-1 text-xs font-semibold text-white shadow-lg">
                    Signature
                  </span>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-serif text-xl text-cream md:text-2xl">
                    {service.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-gold/30 bg-forest/60 px-3 py-0.5 text-xs text-cream/80 backdrop-blur-sm">
                      {service.duration}
                    </span>
                    <span className="rounded-full gold-gradient px-3 py-0.5 text-xs font-semibold text-white">
                      {service.price}
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gold/10 bg-forest-light/60 p-6 backdrop-blur-sm">
                <p className="mb-4 text-sm leading-relaxed text-cream/80">
                  {service.shortDescription}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <a
                    href={`/?service=${service.id}#booking`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-light"
                  >
                    Book this service
                    <span
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </a>
                  <a
                    href={getServiceWhatsAppUrl(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-cream/60 transition-colors hover:text-[#25D366]"
                  >
                    <WhatsAppIcon size={14} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border-2 border-gold/50 px-8 py-3 font-semibold text-gold transition-all hover:bg-gold/10 hover:scale-105"
          >
            View All Services
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
