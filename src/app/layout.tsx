import type { Metadata } from "next";
import { Playfair_Display, Lato, Great_Vibes } from "next/font/google";
import "./globals.css";
import { LOCATIONS, SITE } from "@/lib/data";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Premium Foot Reflexology & Spa`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Experience luxury foot reflexology, head massage, hand massage, neck & back massage, and full body massage at Kalm Foot Reflexology. Certified therapists and tranquil spa environments in Chennai and Bengaluru.",
  keywords: [
    "foot reflexology",
    "reflexology spa",
    "head massage Chennai",
    "body massage",
    "neck back massage",
    "wellness spa",
    "holistic healing",
    "Kalm Foot",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    title: `${SITE.name} | Premium Foot Reflexology & Spa`,
    description:
      "Relax, rejuvenate, and feel the difference with expert foot reflexology and spa services.",
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/logo-primary.png",
        width: 800,
        height: 800,
        alt: "Kalm Foot Reflexology Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description:
      "Premium foot reflexology and spa services for holistic wellness.",
    images: ["/assets/logo-primary.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: SITE.name,
  description:
    "Premium foot reflexology, head massage, hand massage, neck & back massage, arm & shoulder massage, and body massage services.",
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  image: `${SITE.url}/assets/logo-primary.png`,
  priceRange: "₹₹",
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
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    SITE.social.instagram,
    SITE.social.facebook,
    SITE.social.whatsapp,
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Spa Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Foot Reflexology",
          description: "Therapeutic reflex point massage for holistic wellness.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Foot Spa",
          description: "Luxurious foot soak, exfoliation, and massage.",
        },
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable} ${greatVibes.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-full font-sans">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
