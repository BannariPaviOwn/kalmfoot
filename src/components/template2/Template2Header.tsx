"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Our Services" },
  { href: "#promotions", label: "Our Promotions" },
  { href: "#spa", label: "Our Spa" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Template2Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="t2-header" id="home">
      <div className="t2-brand-row">
        <Link href="/template2" className="t2-brand">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-sm ring-1 ring-[color-mix(in_srgb,var(--t2-maroon)_25%,transparent)]">
            <Image
              src="/assets/logo-primary.png"
              alt="Kalm Foot Reflexology logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="t2-brand-text">
            <h1>Kalm Foot</h1>
            <p>Foot Reflexology · Full Body Massage</p>
          </div>
        </Link>

        <button
          type="button"
          className="t2-mobile-toggle"
          aria-expanded={open}
          aria-controls="t2-site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <nav className="t2-nav" aria-label="Site">
        <div
          id="t2-site-nav"
          className="t2-nav-inner"
          data-open={open ? "true" : "false"}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
