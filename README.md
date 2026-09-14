# Kalm Foot Reflexology

A production-quality website for **Kalm Foot Reflexology** — a premium foot reflexology and spa business. Built with Next.js, Tailwind CSS, and a built-in CRM for managing bookings and contact leads.

## Features

- **Landing page** with hero, about reflexology (SEO-rich), services, benefits, testimonials, booking, and contact sections
- **Online booking** with service, location, date, and time slot selection
- **WhatsApp booking** — floating chat button site-wide, plus pre-filled WhatsApp CTAs on booking, contact, hero, services, and footer
- **Contact form** for lead capture
- **CRM admin dashboard** at `/admin` to view and manage bookings and contact leads
- **SEO optimized** with meta tags, Open Graph, Schema.org LocalBusiness markup, sitemap, and robots.txt
- **Luxurious spa aesthetic** — forest green, metallic gold, and cream color palette

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **JSON file storage** for bookings and contacts (`data/` directory)

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## CRM Admin Access

1. Navigate to [http://localhost:3000/admin](http://localhost:3000/admin)
2. Enter the admin key (default: `kalmfoot-admin-2024`)
3. View bookings, update statuses, and manage contact submissions

### Custom Admin Key

Set the `ADMIN_KEY` environment variable:

```bash
# .env.local
ADMIN_KEY=your-secure-admin-key
```

## Project Structure

```
kalmfoot/
├── public/assets/          # Logo images
├── data/                   # JSON storage (bookings, contacts)
├── src/
│   ├── app/                # Pages & API routes
│   ├── components/         # UI components
│   ├── lib/                # Data & database helpers
│   └── types/              # TypeScript types
```

## Placeholder Data to Customize

Update these in `src/lib/data.ts`:

| Field | Placeholder Value |
|-------|-------------------|
| Email | hello@kalmfoot.com |
| Phone | +91 98765 43210 |
| **WhatsApp number** | `WHATSAPP_NUMBER` = `919876543210` (digits only; keep in sync with Phone) |
| Website URL | https://kalmfoot.com |
| Locations | Nungambakkam, Kandhanchavadi, Thoraipakkam, Shollinganallur, Navalur (Chennai); Jaya Nagar (Bengaluru) |
| Social links | Instagram, Facebook, WhatsApp placeholders |
| Service prices | ₹1,200 – ₹1,800 |

Also replace the map placeholder in the Contact section with an embedded Google Maps iframe.

### WhatsApp setup

1. Set `WHATSAPP_NUMBER` in `src/lib/data.ts` to your real WhatsApp Business number (country code + number, digits only).
2. Keep `SITE.phone` consistent with that number.
3. `SITE.social.whatsapp` and all CTAs use `getWhatsAppUrl()` / `buildBookingWhatsAppMessage()` automatically.

## Assets

- `public/assets/logo-primary.png` — Main circular logo (header, hero, footer)
- `public/assets/logo-variations.jpg` — Brand identity variations grid

## License

Private — Kalm Foot Reflexology
