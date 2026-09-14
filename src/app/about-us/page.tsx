import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ABOUT_CONTENT,
  ABOUT_SEO_KEYWORDS,
  ABOUT_STATS,
  AWARDS,
  LOCATIONS,
  SITE,
  TEAM,
  TESTIMONIALS,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us | Top Foot Reflexology Spa in Chennai & Bengaluru",
  description:
    "Learn about Kalm Foot Reflexology — award-winning foot reflexology and wellness spa. 12+ years of excellence, certified reflexologists, 15,000+ happy clients, and 6 premium locations across Chennai and Bengaluru.",
  keywords: [...ABOUT_SEO_KEYWORDS],
  openGraph: {
    title: `About Us | ${SITE.name} — Top Reflexology Center in Chennai & Bengaluru`,
    description:
      "Discover our story, mission, awards, and certified team. Chennai and Bengaluru's most trusted foot reflexology spa for holistic wellness and therapeutic healing.",
    url: `${SITE.url}/about-us`,
    siteName: SITE.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/logo-primary.png",
        width: 800,
        height: 800,
        alt: "Kalm Foot Reflexology — About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About ${SITE.name} | Award-Winning Reflexology Spa`,
    description:
      "Chennai and Bengaluru's top-rated foot reflexology center. Certified therapists, award-winning care, 12+ years of holistic wellness excellence.",
    images: ["/assets/logo-primary.png"],
  },
  alternates: {
    canonical: `${SITE.url}/about-us`,
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About ${SITE.name}`,
  description:
    "About Kalm Foot Reflexology — Chennai and Bengaluru's top-rated foot reflexology and wellness spa with certified therapists, award-winning service, and holistic healing.",
  url: `${SITE.url}/about-us`,
  mainEntity: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/assets/logo-primary.png`,
    description:
      "Premium foot reflexology, head massage, hand massage, neck & back massage, arm & shoulder massage, and body massage services. Award-winning wellness spa in Chennai and Bengaluru.",
    foundingDate: "2012",
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: LOCATIONS[0].address,
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600034",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Chennai" },
      { "@type": "City", name: "Bengaluru" },
    ],
    award: AWARDS.map((award) => `${award.title} — ${award.issuer} (${award.year})`),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "15000",
      bestRating: "5",
    },
    sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.whatsapp],
  },
};

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-12 text-center">
      <p
        className={`mb-3 text-sm tracking-[0.25em] uppercase ${light ? "text-gold" : "text-gold"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl ${light ? "text-cream" : "text-forest"}`}
      >
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-20 gold-gradient rounded-full" />
      {subtitle && (
        <p
          className={`mx-auto mt-6 max-w-2xl text-lg leading-relaxed ${light ? "text-cream/75" : "text-forest/70"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function AboutUsPage() {
  const { hero, story, mission, vision, whyTop } = ABOUT_CONTENT;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-forest pt-28 pb-20 leaf-pattern md:pt-36 md:pb-28">
          <div className="decorative-circle -right-32 -top-32 h-96 w-96 opacity-30" />
          <div className="decorative-circle -left-20 bottom-10 h-64 w-64 opacity-20" />
          <div className="relative mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="animate-fade-up space-y-6 text-center lg:text-left">
                <p className="inline-block rounded-full border border-gold/30 px-4 py-1.5 text-xs tracking-[0.3em] text-gold uppercase">
                  {hero.eyebrow}
                </p>
                <h1 className="font-serif text-4xl leading-tight text-cream md:text-5xl lg:text-6xl">
                  Chennai & Bengaluru&apos;s Most Trusted{" "}
                  <span className="gold-text italic">Foot Reflexology</span> &
                  Wellness Sanctuary
                </h1>
                <p className="text-lg leading-relaxed text-cream/80">
                  {hero.subtitle}
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                  <Link
                    href="/#booking"
                    className="gold-gradient rounded-full px-8 py-4 text-center font-semibold text-white shadow-lg transition-all hover:scale-105"
                  >
                    Book Your Session
                  </Link>
                  <Link
                    href="/#services"
                    className="rounded-full border-2 border-gold/50 px-8 py-4 text-center font-semibold text-gold transition-all hover:bg-gold/10"
                  >
                    View Our Services
                  </Link>
                </div>
              </div>
              <div className="relative flex justify-center animate-fade-up">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-gold/10 blur-2xl" />
                  <div className="relative overflow-hidden rounded-full ring-4 ring-gold/40 shadow-2xl">
                    <Image
                      src="/assets/logo-primary.png"
                      alt="Kalm Foot Reflexology — About Our Award-Winning Wellness Spa"
                      width={380}
                      height={380}
                      className="h-auto w-full max-w-[320px] object-cover md:max-w-[380px]"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
        </section>

        {/* Stats */}
        <section className="relative -mt-8 z-10 px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-gold/20 bg-white p-6 text-center shadow-lg"
              >
                <p className="font-serif text-3xl text-forest md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-forest/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Story, Mission, Vision */}
        <section className="section-padding bg-cream leaf-pattern">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Our Journey"
              title={story.title}
              subtitle="From a single studio to South India's most celebrated foot wellness brand"
            />
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-6 text-forest/85 leading-relaxed">
                {story.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
              <div className="space-y-6">
                <div className="rounded-2xl border border-gold/20 bg-white p-8 shadow-sm">
                  <h3 className="mb-4 font-serif text-xl text-forest">
                    {mission.title}
                  </h3>
                  <p className="leading-relaxed text-forest/80">{mission.text}</p>
                </div>
                <div className="rounded-2xl bg-forest p-8 text-cream">
                  <h3 className="mb-4 font-serif text-xl">{vision.title}</h3>
                  <p className="leading-relaxed text-cream/85">{vision.text}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Top */}
        <section className="section-padding bg-white">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="City's Finest"
              title={whyTop.title}
              subtitle={whyTop.subtitle}
            />
            <div className="grid gap-8 md:grid-cols-2">
              {whyTop.points.map((point) => (
                <div
                  key={point.title}
                  className="rounded-2xl border border-gold/15 bg-cream p-8 transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full gold-gradient text-lg font-bold text-white">
                    ✦
                  </div>
                  <h3 className="mb-3 font-serif text-xl text-forest">
                    {point.title}
                  </h3>
                  <p className="leading-relaxed text-forest/75">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="section-padding bg-forest leaf-pattern">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Recognition"
              title="Awards & Accolades"
              subtitle="Honored by wellness industry leaders and loved by thousands of clients across Tamil Nadu"
              light
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {AWARDS.map((award) => (
                <article
                  key={award.title}
                  className="rounded-2xl border border-gold/20 bg-forest-light/50 p-6 backdrop-blur-sm"
                >
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-gold">
                      {award.year}
                    </span>
                    <span className="text-gold" aria-hidden="true">
                      ★
                    </span>
                  </div>
                  <h3 className="mb-2 font-serif text-lg text-cream">
                    {award.title}
                  </h3>
                  <p className="mb-3 text-sm font-medium text-gold/90">
                    {award.issuer}
                  </p>
                  <p className="text-sm leading-relaxed text-cream/70">
                    {award.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding bg-cream leaf-pattern">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Expert Care"
              title="Meet Our Certified Team"
              subtitle="Internationally trained reflexologists and wellness specialists dedicated to your healing journey"
            />
            <div className="grid gap-8 md:grid-cols-2">
              {TEAM.map((member) => (
                <article
                  key={member.name}
                  className="rounded-2xl border border-gold/15 bg-white p-8 shadow-sm"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-forest text-2xl font-serif text-gold">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="font-serif text-xl text-forest">{member.name}</h3>
                  <p className="mb-4 text-sm font-medium text-gold">
                    {member.role}
                  </p>
                  <p className="mb-4 leading-relaxed text-forest/75">{member.bio}</p>
                  <ul className="space-y-2">
                    {member.credentials.map((credential) => (
                      <li
                        key={credential}
                        className="flex items-center gap-2 text-sm text-forest/70"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full gold-gradient" />
                        {credential}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-white">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Client Stories"
              title="What Our Clients Say About Us"
              subtitle="Real reviews from clients who trust Kalm Foot as the top reflexology spa in Chennai and Bengaluru"
            />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.map((testimonial) => (
                <blockquote
                  key={testimonial.name}
                  className="flex flex-col rounded-2xl border border-gold/15 bg-cream p-8 shadow-sm"
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
                      <p className="font-semibold text-forest">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-forest/60">{testimonial.role}</p>
                    </cite>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-forest leaf-pattern">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm tracking-[0.25em] text-gold uppercase">
              Experience the Difference
            </p>
            <h2 className="font-serif text-3xl text-cream md:text-4xl lg:text-5xl">
              Ready to Feel the{" "}
              <span className="font-script text-4xl text-gold md:text-5xl">
                Kalm
              </span>{" "}
              Difference?
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 gold-gradient rounded-full" />
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
              Join over 15,000 satisfied clients who have discovered why Kalm Foot
              Reflexology is a top-rated foot wellness destination across Chennai
              and Bengaluru. Book your reflexology session today and step into
              holistic healing.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/#booking"
                className="gold-gradient rounded-full px-10 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105"
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
        </section>
      </main>
      <Footer />
    </>
  );
}
