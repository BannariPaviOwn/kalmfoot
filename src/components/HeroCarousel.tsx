"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { HERO_CAROUSEL_SLIDES } from "@/lib/data";

const SLIDE_INTERVAL_MS = 5500;
const FADE_DURATION_MS = 1500;

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % HERO_CAROUSEL_SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(advance, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [advance, paused]);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-hidden
    >
      {HERO_CAROUSEL_SLIDES.map((slide, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={slide.src}
            className="absolute inset-0"
            style={{
              opacity: isActive ? 1 : 0,
              transition: `opacity ${FADE_DURATION_MS}ms ease-in-out`,
            }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover scale-105"
            />
          </div>
        );
      })}

      {/* Forest green overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/65 to-forest/85" />

      {/* Subtle gold vignette accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(197,160,40,0.12)_100%)]" />

      {/* Leaf pattern texture */}
      <div className="absolute inset-0 leaf-pattern opacity-60" />
    </div>
  );
}
