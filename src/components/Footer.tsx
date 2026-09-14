import Image from "next/image";
import Link from "next/link";
import {
  LOCATIONS,
  SERVICES,
  SITE,
  getWhatsAppUrl,
  WHATSAPP_MESSAGES,
} from "@/lib/data";

const chennaiBranches = LOCATIONS.filter((loc) =>
  loc.city.includes("Chennai")
);
const bengaluruBranches = LOCATIONS.filter((loc) =>
  loc.city.includes("Bengaluru")
);

function branchAreaName(name: string) {
  const parts = name.split(" – ");
  return parts.length > 1 ? parts[1] : name;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-dark text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-gold/30">
                <Image
                  src="/assets/logo-primary.png"
                  alt="Kalm Foot"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-serif text-xl">
                  Kalm{" "}
                  <span className="font-script text-2xl text-gold">foot</span>
                </p>
                <p className="text-[10px] tracking-[0.2em] text-cream/60 uppercase">
                  Reflexology
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Premium foot reflexology and spa services for holistic wellness.
              Relax, rejuvenate, and feel the difference.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li>
                <Link href="/about-us" className="hover:text-gold">
                  About Us
                </Link>
              </li>
              <li>
                <a href="/#about" className="hover:text-gold">
                  About Reflexology
                </a>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold">
                  Our Services
                </Link>
              </li>
              <li>
                <a href="/#booking" className="hover:text-gold">
                  Book Appointment
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-gold">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-gold">Services</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link href="/services" className="hover:text-gold">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-gold">Connect</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li>{SITE.email}</li>
              <li>{SITE.phone}</li>
            </ul>
            <div className="mt-4 flex gap-4">
              <a
                href={SITE.social.instagram}
                className="text-cream/60 hover:text-gold"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href={SITE.social.facebook}
                className="text-cream/60 hover:text-gold"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.greeting)}
                className="text-cream/60 hover:text-gold"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gold/10 pt-12">
          <h4 className="mb-8 font-serif text-gold">Our Branches</h4>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h5 className="mb-4 text-xs tracking-[0.2em] text-cream/50 uppercase">
                Chennai
              </h5>
              <div className="grid gap-6 sm:grid-cols-2">
                {chennaiBranches.map((loc) => (
                  <div key={loc.id} className="space-y-1">
                    <p className="font-serif text-cream">
                      {branchAreaName(loc.name)}
                    </p>
                    <p className="text-sm leading-relaxed text-cream/60">
                      {loc.address}
                      <br />
                      {loc.city}
                    </p>
                    <p className="text-sm text-gold/90">{loc.phone}</p>
                    <p className="text-xs text-cream/40">{loc.hours}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="mb-4 text-xs tracking-[0.2em] text-cream/50 uppercase">
                Bengaluru
              </h5>
              <div className="grid gap-6 sm:grid-cols-2">
                {bengaluruBranches.map((loc) => (
                  <div key={loc.id} className="space-y-1">
                    <p className="font-serif text-cream">
                      {branchAreaName(loc.name)}
                    </p>
                    <p className="text-sm leading-relaxed text-cream/60">
                      {loc.address}
                      <br />
                      {loc.city}
                    </p>
                    <p className="text-sm text-gold/90">{loc.phone}</p>
                    <p className="text-xs text-cream/40">{loc.hours}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gold/10 pt-8 text-sm text-cream/50 md:flex-row">
          <p>
            &copy; {currentYear} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/admin" className="hover:text-gold">
              Admin
            </Link>
            <span>{SITE.tagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
