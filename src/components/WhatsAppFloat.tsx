"use client";

import { usePathname } from "next/navigation";
import {
  getWhatsAppUrl,
  WHATSAPP_MESSAGES,
} from "@/lib/data";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function WhatsAppFloat() {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <a
      href={getWhatsAppUrl(WHATSAPP_MESSAGES.greeting)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Kalm Foot on WhatsApp"
      className="whatsapp-float fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:bottom-8 md:right-8 md:h-16 md:w-16"
      style={{ backgroundColor: "#25D366" }}
    >
      <span
        className="whatsapp-float-pulse absolute inset-0 rounded-full"
        style={{ backgroundColor: "#25D366" }}
        aria-hidden="true"
      />
      <WhatsAppIcon size={28} className="relative z-10 md:h-8 md:w-8" />
    </a>
  );
}
