import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { SITE, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-forest pt-24">
      <HeroCarousel />

      <div className="decorative-circle -right-32 -top-32 z-[1] h-96 w-96 opacity-30" />
      <div className="decorative-circle -left-20 bottom-20 z-[1] h-64 w-64 opacity-20" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div className="animate-fade-up space-y-8 text-center md:text-left">
          <p className="inline-block rounded-full border border-gold/30 px-4 py-1.5 text-xs tracking-[0.3em] text-gold uppercase">
            Premium Foot Reflexology & Spa
          </p>

          <h1 className="font-serif text-4xl leading-tight text-cream md:text-5xl lg:text-6xl">
            Restore Balance Through the{" "}
            <span className="gold-text italic">Art of Touch</span>
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-cream/80 md:mx-0 mx-auto">
            Experience the healing power of foot reflexology in a luxurious,
            botanical-inspired sanctuary. Our certified therapists guide your
            body toward deep relaxation, renewed energy, and holistic wellness.
          </p>

          <p className="text-sm tracking-[0.2em] text-gold uppercase">
            {SITE.tagline}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="#booking"
              className="gold-gradient rounded-full px-8 py-4 text-center font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Book Your Session
            </a>
            <a
              href="#services"
              className="rounded-full border-2 border-gold/50 px-8 py-4 text-center font-semibold text-gold transition-all hover:bg-gold/10"
            >
              Explore Services
            </a>
          </div>

          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.greeting)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-sm text-cream/70 transition-colors hover:text-[#25D366] md:justify-start"
          >
            <WhatsAppIcon size={18} className="text-[#25D366]" />
            Or book instantly on WhatsApp
          </a>
        </div>

        <div className="relative flex justify-center animate-fade-up">
          <div className="animate-float relative">
            <div className="absolute -inset-4 rounded-full bg-gold/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-full ring-4 ring-gold/40 shadow-2xl">
              <Image
                src="/assets/logo-primary.png"
                alt="Kalm Foot Reflexology — Relax, Rejuvenate, Feel the Difference"
                width={420}
                height={420}
                className="h-auto w-full max-w-[380px] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
