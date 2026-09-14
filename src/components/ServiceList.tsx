"use client";

import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/types";
import { getServiceWhatsAppUrl } from "@/lib/data";
import WhatsAppIcon from "@/components/WhatsAppIcon";

interface ServiceListProps {
  services: Service[];
}

function GoldCheck() {
  return (
    <span
      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full gold-gradient text-[10px] text-white shadow-sm"
      aria-hidden="true"
    >
      ✓
    </span>
  );
}

export default function ServiceList({ services }: ServiceListProps) {
  return (
    <div className="space-y-20 md:space-y-28">
      {services.map((service, index) => {
        const imageFirst = index % 2 === 0;

        return (
          <article
            key={service.id}
            id={service.id}
            className={`group relative scroll-mt-32 animate-fade-up ${
              service.featured ? "pt-4" : ""
            }`}
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            {service.featured && (
              <div className="absolute -top-1 left-1/2 z-20 -translate-x-1/2">
                <span className="gold-gradient rounded-full px-5 py-1.5 text-xs font-semibold tracking-[0.2em] text-white uppercase shadow-lg ring-2 ring-gold-light/50">
                  Signature Treatment
                </span>
              </div>
            )}

            <span
              className="pointer-events-none absolute -left-1 top-10 hidden font-serif text-7xl leading-none text-gold/10 select-none lg:block xl:-left-6"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <div
              className={`overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-gold/10 transition-all duration-500 hover:shadow-2xl hover:ring-gold/30 ${
                service.featured
                  ? "ring-2 ring-gold/40 shadow-2xl shadow-forest/10"
                  : ""
              }`}
            >
              <div
                className={`grid items-stretch lg:grid-cols-2 ${
                  imageFirst ? "" : "lg:[direction:rtl]"
                }`}
              >
                {/* Image */}
                <div className="relative min-h-[300px] lg:min-h-[520px] lg:[direction:ltr]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/25 to-forest/10 lg:bg-gradient-to-r lg:from-transparent lg:via-forest/10 lg:to-forest/50"
                  />

                  {/* Gold corner accents */}
                  <div
                    className="absolute left-5 top-5 h-14 w-14 border-l-2 border-t-2 border-gold/50 transition-colors group-hover:border-gold"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute bottom-5 right-5 h-14 w-14 border-b-2 border-r-2 border-gold/50 transition-colors group-hover:border-gold"
                    aria-hidden="true"
                  />

                  {/* Mobile title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden">
                    <div className="mb-2 h-0.5 w-10 gold-gradient rounded-full" />
                    <h3 className="font-serif text-2xl text-cream">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12 xl:p-14 lg:[direction:ltr]">
                  <p className="mb-2 text-xs tracking-[0.3em] text-gold uppercase">
                    Treatment {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="hidden font-serif text-2xl leading-tight text-forest md:text-3xl lg:block lg:text-4xl">
                    {service.title}
                  </h3>

                  <div className="mt-4 h-0.5 w-16 gold-gradient rounded-full" />

                  <p className="mt-6 text-base leading-relaxed text-forest/75 md:text-lg">
                    {service.description}
                  </p>

                  <div className="mt-8 rounded-2xl border border-gold/15 bg-cream/60 p-6 md:p-8">
                    <h4 className="mb-5 flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-gold uppercase">
                      <span className="h-px w-10 gold-gradient shrink-0" />
                      What You&apos;ll Gain
                      <span className="h-px w-10 gold-gradient shrink-0" />
                    </h4>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {service.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-3 text-sm leading-relaxed text-forest/80"
                        >
                          <GoldCheck />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex flex-col gap-6 border-t border-gold/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-white px-4 py-2 text-sm shadow-sm"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          className="text-gold"
                          aria-hidden="true"
                        >
                          <circle
                            cx="7"
                            cy="7"
                            r="6"
                            stroke="currentColor"
                            strokeWidth="1"
                          />
                          <path
                            d="M7 4V7L9 9"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span className="text-forest/60">Duration</span>
                        <strong className="text-forest">{service.duration}</strong>
                      </span>
                      <span
                        className="rounded-full gold-gradient px-5 py-2 font-serif text-lg text-white shadow-md"
                      >
                        {service.price}
                      </span>
                    </div>
                    <div className="flex flex-col gap-3 sm:items-end">
                      <Link
                        href={`/?service=${service.id}#booking`}
                        className="gold-gradient inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                      >
                        Book This Session
                        <span aria-hidden="true">→</span>
                      </Link>
                      <a
                        href={getServiceWhatsAppUrl(service.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 text-sm font-medium text-forest/60 transition-colors hover:text-[#25D366]"
                      >
                        <WhatsAppIcon size={16} />
                        Book via WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
