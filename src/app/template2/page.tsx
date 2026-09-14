import Image from "next/image";
import Link from "next/link";
import {
  ABOUT_STATS,
  SERVICES,
  SITE,
  TESTIMONIALS,
} from "@/lib/data";
import Template2Header from "@/components/template2/Template2Header";
import Template2ContactForm from "@/components/template2/Template2ContactForm";
import "./template2.css";

const HERO_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&h=900&fit=crop&q=85",
    alt: "Private massage room with warm ambient lighting",
  },
  {
    src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1200&h=900&fit=crop&q=85",
    alt: "Comfortable reflexology lounge chair in a serene spa",
  },
] as const;

const SERVICE_CATEGORIES = [
  {
    title: "Foot Reflexology & Quick Fixes",
    description:
      "Choose our signature foot reflexology or a focused quick-fix for head, hands, neck, or shoulders — ideal for a mid-day reset.",
    price: "From ₹800",
    href: "/services#foot-reflexology",
    image: SERVICES[0].image,
    imageAlt: SERVICES[0].imageAlt,
  },
  {
    title: "Signature Body Massage",
    description:
      "Classic full-body techniques to ease knots: Swedish-inspired strokes, deep pressure, and restorative upper-body relief.",
    price: "From ₹1,400",
    href: "/services#neck-back-massage",
    image: SERVICES[3].image,
    imageAlt: SERVICES[3].imageAlt,
  },
  {
    title: "Specialty Body Massage",
    description:
      "Specialised sessions tailored to your needs — from full-body renewal to targeted arm, shoulder, and postural care.",
    price: "From ₹1,200",
    href: "/services#body-massage",
    image: SERVICES[5].image,
    imageAlt: SERVICES[5].imageAlt,
  },
  {
    title: "Other Pampering Treatments",
    description:
      "Complete your visit with head massage, hand therapy, and botanical spa rituals designed for deep calm.",
    price: "From ₹900",
    href: "/services#head-massage",
    image: SERVICES[1].image,
    imageAlt: SERVICES[1].imageAlt,
  },
] as const;

export const metadata = {
  title: "Template 2 | Classic Spa Layout",
  description:
    "Alternate Kalm Foot homepage template inspired by classic foot reflexology spa layouts.",
  robots: { index: false, follow: false },
};

export default function Template2Page() {
  const reviews = TESTIMONIALS.slice(0, 3);
  const stats = ABOUT_STATS.slice(0, 3);

  return (
    <div className="t2">
      <Template2Header />

      <main>
        <section className="t2-hero-grid" aria-label="Spa atmosphere">
          {HERO_IMAGES.map((image) => (
            <figure key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 720px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </figure>
          ))}
        </section>

        <section className="t2-intro t2-animate">
          <h2>A Trusted Tradition. Your Tranquil Escape.</h2>
          <p>
            Discover a tranquil massage sanctuary across Chennai and Bengaluru,
            where genuine care meets deep relaxation.
          </p>
          <p>
            For over a decade, Kalm Foot Reflexology has been a calm haven —
            where quality, care, and comfort come together. Trusted by thousands
            of clients, we deliver exceptional reflexology and massage in cozy,
            serene spaces designed to help you unwind completely. Most of all,
            be assured you are in the skilled hands of our certified therapists.
          </p>
          <p>
            This is more than a massage — it is a return to balance. Your
            journey to relaxation begins here.
          </p>
        </section>

        <div className="t2-band">
          <h2>It&apos;s all about YOU...</h2>
        </div>

        <section className="t2-section" id="services">
          <div className="t2-section-lead">
            <p>
              Choose from our wide array of massages to suit your needs. After
              serving customers for over a decade, our certified therapists
              personalize each session to relieve your aches effectively.
            </p>
            <p>
              Enjoy foot reflexology in a spacious, ambient lounge — perfect to
              relax and drift off. Or settle into our private rooms for full
              body massage with lighting and ambiance tuned for maximum calm.
            </p>
          </div>

          <div className="t2-service-grid">
            {SERVICE_CATEGORIES.map((service, index) => (
              <article
                key={service.title}
                className={`t2-service-card t2-animate${index > 0 ? ` t2-animate-delay-${Math.min(index, 2)}` : ""}`}
              >
                <div className="t2-circle">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="140px"
                    className="object-cover"
                  />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link href={service.href} className="t2-cta">
                  {service.price} ›
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="promotions">
          <div className="t2-promo-hero">
            <p className="eyebrow">Weekday First Visit Promotion</p>
            <h2>
              ₹999 for 60-min Foot Reflexology; or ₹1,499 for 90-min Full Body
              Massage
            </h2>
            <p>
              Choose between (A) 60-min Foot Reflexology at ₹999 or (B) 90-min
              Full Body Massage at ₹1,499. Usual price ₹1,800–₹2,500.
            </p>
            <p className="fine">
              * Valid for first-time guests on weekdays, excluding public
              holidays. One promo per guest.
            </p>
            <a href="#contact" className="t2-btn-maroon">
              Find out more
            </a>
          </div>

          <div className="t2-promo-split">
            <div className="t2-promo-split-copy">
              <h3>The Lunch Lift</h3>
              <p className="price">
                ₹499 only. Choice of 30-min Foot Massage or 20-min Quick-Fix*
              </p>
              <ul>
                <li>
                  Head Massage ~ For that much needed power nap.
                </li>
                <li>
                  Neck &amp; Back Massage ~ To relieve that load off your back.
                </li>
                <li>
                  Hand Massage ~ Give those hands the ultimate relief.
                </li>
              </ul>
              <p className="fine" style={{ marginBottom: "1.25rem" }}>
                * Valid Monday–Thursday, 11am–2pm excluding public holidays.
              </p>
              <a href="#contact" className="t2-btn-maroon">
                Book now
              </a>
            </div>
            <div className="t2-promo-split-media">
              <Image
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&h=900&fit=crop&q=85"
                alt="Relaxing spa massage during a lunch-break wellness session"
                fill
                sizes="(max-width: 960px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="overlay-label">The Lunch Lift</div>
            </div>
          </div>
        </section>

        <section className="t2-spa" id="spa">
          <div className="t2-animate">
            <h2>Our Spa Sanctuary</h2>
            <p>
              Soft lighting, botanical aromas, and thoughtfully designed
              treatment rooms create a quiet escape from the city. Every Kalm
              Foot location is built for unhurried rest — from lounge
              reflexology to private full-body sessions.
            </p>
            <p>
              Whether you visit for a quick weekday reset or a longer weekend
              ritual, our therapists adapt pressure, pace, and focus to what
              your body needs that day.
            </p>
            <div className="t2-spa-stats">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="t2-spa-media t2-animate t2-animate-delay-1">
            <Image
              src="https://images.unsplash.com/photo-1600334129128-685c5582fd8c?w=1000&h=1250&fit=crop&q=85"
              alt="Therapist providing a calming spa massage treatment"
              fill
              sizes="(max-width: 960px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </section>

        <Template2ContactForm />

        <section className="t2-reviews" id="reviews">
          <h2>From some of our delighted customers...</h2>
          <div className="t2-review-grid">
            {reviews.map((review) => (
              <blockquote key={review.name} className="t2-review">
                <p>&ldquo;{review.quote}&rdquo;</p>
                <strong>{review.name}</strong>
                <span>{review.role}</span>
              </blockquote>
            ))}
          </div>
        </section>
      </main>

      <footer className="t2-footer">
        <div className="t2-footer-inner">
          <div>
            <small>(C) {SITE.name} {new Date().getFullYear()}</small>
            <ul>
              <li>Prices shown are indicative and may vary by location.</li>
              <li>
                Management reserves the right to update service prices without
                prior notice.
              </li>
              <li>
                Promotional packages are subject to terms shared at booking.
              </li>
            </ul>
            <Link href="/" className="t2-back">
              ← Back to main site
            </Link>
          </div>
          <div className="t2-social" aria-label="Social links">
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              ig
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
