import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceList from "@/components/ServiceList";
import { SERVICES, SERVICES_HERO, SERVICES_SEO_KEYWORDS, SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Services | Foot Reflexology & Massage Therapy in Chennai & Bengaluru",
  description:
    "Explore Kalm Foot Reflexology's therapeutic massage services — foot reflexology, head massage, hand massage, neck & back massage, arm & shoulder massage, and full body massage. Book your wellness session today.",
  keywords: [...SERVICES_SEO_KEYWORDS],
  openGraph: {
    title: `Our Services | ${SITE.name} — Massage & Reflexology Therapy`,
    description:
      "Discover our signature foot reflexology and therapeutic massage services. Pressure-point healing, stress relief, and holistic wellness across 6 locations in Chennai and Bengaluru.",
    url: `${SITE.url}/services`,
    siteName: SITE.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/logo-primary.png",
        width: 800,
        height: 800,
        alt: "Kalm Foot Reflexology — Our Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Services | ${SITE.name}`,
    description:
      "Foot reflexology, head massage, hand massage, neck & back massage, and more. Therapeutic wellness at Kalm Foot Reflexology.",
    images: ["/assets/logo-primary.png"],
  },
  alternates: {
    canonical: `${SITE.url}/services`,
  },
};

const servicesPageSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${SITE.name} — Massage & Reflexology Services`,
  description:
    "Therapeutic massage and reflexology services including foot reflexology, head massage, hand massage, neck & back massage, arm & shoulder massage, and full body massage.",
  url: `${SITE.url}/services`,
  numberOfItems: SERVICES.length,
  itemListElement: SERVICES.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      provider: {
        "@type": "Organization",
        name: SITE.name,
        url: SITE.url,
      },
      offers: {
        "@type": "Offer",
        price: service.price.replace(/[^\d]/g, ""),
        priceCurrency: "INR",
      },
      url: `${SITE.url}/services#${service.id}`,
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesPageSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-forest pt-28 pb-24 leaf-pattern md:pt-40 md:pb-32">
          <div className="absolute inset-0">
            <Image
              src={SERVICES_HERO.src}
              alt={SERVICES_HERO.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-forest/90 via-forest/75 to-forest/95" />
          </div>

          <div className="decorative-circle -right-40 -top-40 h-[28rem] w-[28rem] opacity-25" />
          <div className="decorative-circle -left-24 bottom-16 h-72 w-72 opacity-15" />
          <div className="decorative-circle right-1/4 top-1/3 h-40 w-40 opacity-10" />

          <div className="relative mx-auto max-w-7xl px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 inline-block rounded-full border border-gold/40 bg-forest/50 px-5 py-1.5 text-xs tracking-[0.3em] text-gold uppercase backdrop-blur-sm">
                Therapeutic Wellness
              </p>

              <h1 className="font-serif text-4xl leading-tight text-cream md:text-5xl lg:text-7xl">
                Our{" "}
                <span className="font-script text-5xl text-gold md:text-6xl lg:text-8xl">
                  Services
                </span>
              </h1>

              <div className="mx-auto mt-6 flex items-center justify-center gap-3">
                <span className="h-px w-12 bg-gold/40" />
                <div className="h-1.5 w-20 gold-gradient rounded-full" />
                <span className="h-px w-12 bg-gold/40" />
              </div>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream/80 md:text-xl">
                From signature foot reflexology to full-body therapeutic massage,
                each treatment is crafted to restore balance, relieve tension, and
                leave you feeling renewed.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <span className="rounded-full border border-gold/30 bg-cream/10 px-5 py-2 text-sm text-cream/90 backdrop-blur-sm">
                  <strong className="text-gold">{SERVICES.length}</strong> Treatments
                </span>
                <span className="rounded-full border border-gold/30 bg-cream/10 px-5 py-2 text-sm text-cream/90 backdrop-blur-sm">
                  <strong className="text-gold">6</strong> Locations
                </span>
                <span className="rounded-full border border-gold/30 bg-cream/10 px-5 py-2 text-sm text-cream/90 backdrop-blur-sm">
                  Certified <strong className="text-gold">Therapists</strong>
                </span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-cream to-transparent" />
        </section>

        {/* Services List */}
        <section className="section-padding bg-cream leaf-pattern">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center md:mb-20">
              <p className="mb-3 text-sm tracking-[0.25em] text-gold uppercase">
                Massage Menu
              </p>
              <h2 className="font-serif text-3xl text-forest md:text-4xl lg:text-5xl">
                Wellness Treatments for{" "}
                <span className="gold-text italic">Body & Soul</span>
              </h2>
              <div className="mx-auto mt-4 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-gold/30" />
                <div className="h-1 w-20 gold-gradient rounded-full" />
                <span className="h-px w-10 bg-gold/30" />
              </div>
              <p className="mx-auto mt-6 max-w-2xl text-forest/70 md:text-lg">
                Explore our curated collection of therapeutic treatments. Each
                session includes a direct booking link — reserve your preferred
                time at any of our premium locations.
              </p>
            </div>

            <ServiceList services={SERVICES} />
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative overflow-hidden section-padding bg-forest leaf-pattern">
          <div className="decorative-circle -right-32 top-0 h-80 w-80 opacity-20" />
          <div className="decorative-circle -left-20 bottom-0 h-64 w-64 opacity-15" />

          <div className="relative mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-3xl border border-gold/20 bg-forest-light/30 p-10 text-center shadow-2xl backdrop-blur-sm md:p-14">
              <div className="mx-auto mb-6 flex items-center justify-center gap-3">
                <span className="h-px w-16 bg-gold/30" />
                <span className="font-serif text-2xl text-gold">✦</span>
                <span className="h-px w-16 bg-gold/30" />
              </div>

              <p className="mb-3 text-sm tracking-[0.25em] text-gold uppercase">
                Your Wellness Awaits
              </p>
              <h2 className="font-serif text-3xl text-cream md:text-4xl lg:text-5xl">
                Ready to{" "}
                <span className="font-script text-4xl text-gold md:text-5xl lg:text-6xl">
                  Relax
                </span>
                ?
              </h2>
              <div className="mx-auto mt-5 h-1 w-20 gold-gradient rounded-full" />
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
                Choose from six therapeutic massage treatments at any of our six
                premium locations across Chennai and Bengaluru. Book your session
                today and experience the Kalm difference.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/#booking"
                  className="gold-gradient rounded-full px-10 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                >
                  Book an Appointment
                </Link>
                <Link
                  href="/#contact"
                  className="rounded-full border-2 border-gold/50 px-10 py-4 font-semibold text-gold transition-all hover:bg-gold/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
