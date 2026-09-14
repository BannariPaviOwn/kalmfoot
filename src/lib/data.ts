import type { Award, Location, Service, Stat, TeamMember, Testimonial } from "@/types";

/**
 * WhatsApp Business number — digits only (country code + number, no + or spaces).
 * Replace with your real WhatsApp Business number before going live.
 * Must stay in sync with SITE.phone (+91 98765 43210 → 919876543210).
 */
export const WHATSAPP_NUMBER = "919876543210";

export const WHATSAPP_MESSAGES = {
  greeting: "Hi Kalm Foot! I'd like to book a reflexology session.",
  contact: "Hi Kalm Foot! I'd like to get in touch about your services.",
} as const;

/** Build a wa.me URL with an optional pre-filled message. */
export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message?.trim()) return base;
  return `${base}?text=${encodeURIComponent(message.trim())}`;
}

export type WhatsAppBookingDetails = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  location?: string;
  date?: string;
  time?: string;
  notes?: string;
};

/** Pre-filled booking message from form fields (falls back to greeting when empty). */
export function buildBookingWhatsAppMessage(
  details: WhatsAppBookingDetails = {}
): string {
  const lines: string[] = ["Hi Kalm Foot! I'd like to book an appointment."];
  const fields: [string, string | undefined][] = [
    ["Name", details.name],
    ["Phone", details.phone],
    ["Email", details.email],
    ["Service", details.service],
    ["Location", details.location],
    ["Date", details.date],
    ["Time", details.time],
    ["Notes", details.notes],
  ];

  const filled = fields.filter(([, value]) => value?.trim());
  if (filled.length === 0) {
    return WHATSAPP_MESSAGES.greeting;
  }

  lines.push("");
  for (const [label, value] of filled) {
    lines.push(`${label}: ${value!.trim()}`);
  }
  return lines.join("\n");
}

/** Shortcut for booking a specific named service via WhatsApp. */
export function getServiceWhatsAppUrl(serviceTitle: string): string {
  return getWhatsAppUrl(
    `Hi Kalm Foot! I'd like to book a session for ${serviceTitle}.`
  );
}

export const SITE = {
  name: "Kalm Foot Reflexology",
  tagline: "RELAX • REJUVENATE • FEEL THE DIFFERENCE",
  email: "hello@kalmfoot.com",
  phone: "+91 98765 43210",
  url: "https://kalmfoot.com",
  social: {
    instagram: "https://instagram.com/kalmfoot",
    facebook: "https://facebook.com/kalmfoot",
    /** Kept in sync with WHATSAPP_NUMBER via getWhatsAppUrl() */
    whatsapp: getWhatsAppUrl(),
  },
} as const;

export const LOCATIONS: Location[] = [
  {
    id: "nungambakkam",
    name: "Chennai – Nungambakkam",
    address: "12 Nungambakkam High Road, Nungambakkam",
    city: "Chennai, Tamil Nadu 600034",
    phone: SITE.phone,
    hours: "Mon–Sat: 9:00 AM – 8:00 PM | Sun: 10:00 AM – 6:00 PM",
  },
  {
    id: "kandhanchavadi",
    name: "Chennai – Kandhanchavadi",
    address: "45 Rajiv Gandhi Salai, Kandhanchavadi",
    city: "Chennai, Tamil Nadu 600096",
    phone: SITE.phone,
    hours: "Mon–Sat: 9:00 AM – 8:00 PM | Sun: 10:00 AM – 6:00 PM",
  },
  {
    id: "thoraipakkam",
    name: "Chennai – Thoraipakkam",
    address: "78 Old Mahabalipuram Road, Thoraipakkam",
    city: "Chennai, Tamil Nadu 600097",
    phone: SITE.phone,
    hours: "Mon–Sat: 9:00 AM – 8:00 PM | Sun: 10:00 AM – 6:00 PM",
  },
  {
    id: "shollinganallur",
    name: "Chennai – Shollinganallur",
    address: "22 Rajiv Gandhi Salai, Shollinganallur",
    city: "Chennai, Tamil Nadu 600119",
    phone: SITE.phone,
    hours: "Mon–Sat: 9:00 AM – 8:00 PM | Sun: 10:00 AM – 6:00 PM",
  },
  {
    id: "navalur",
    name: "Chennai – Navalur",
    address: "15 Sathyabhama University Road, Navalur",
    city: "Chennai, Tamil Nadu 600130",
    phone: SITE.phone,
    hours: "Mon–Sat: 9:00 AM – 8:00 PM | Sun: 10:00 AM – 6:00 PM",
  },
  {
    id: "jayanagar",
    name: "Bengaluru – Jaya Nagar",
    address: "34 11th Main Road, 4th Block, Jaya Nagar",
    city: "Bengaluru, Karnataka 560011",
    phone: SITE.phone,
    hours: "Mon–Sat: 9:00 AM – 8:00 PM | Sun: 10:00 AM – 6:00 PM",
  },
];

export const SERVICES_SEO_KEYWORDS = [
  "foot reflexology massage Chennai",
  "head massage therapy Bengaluru",
  "hand massage spa Tamil Nadu",
  "neck and back massage Chennai",
  "arm shoulder massage therapy",
  "full body massage spa",
  "reflexology pressure points",
  "holistic massage wellness",
  "stress relief massage Chennai",
  "Kalm Foot Reflexology services",
] as const;

export const SERVICES_HERO = {
  src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1600&h=900&fit=crop&q=80",
  alt: "Therapeutic massage in a tranquil spa setting at Kalm Foot Reflexology",
} as const;

export const HERO_CAROUSEL_SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1920&h=1080&fit=crop&q=85",
    alt: "Foot reflexology massage with warm herbal foot soak and pressure-point therapy",
  },
  {
    src: "https://images.unsplash.com/photo-1604654894610-72f38e629188?w=1920&h=1080&fit=crop&q=85",
    alt: "Luxury pedicure nail care treatment in a serene spa setting",
  },
  {
    src: "https://images.unsplash.com/photo-1522335789203-aabd9fc4386d?w=1920&h=1080&fit=crop&q=85",
    alt: "Elegant manicure hand care with premium nail polish and spa ambiance",
  },
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&h=1080&fit=crop&q=85",
    alt: "Relaxing therapeutic massage in a tranquil wellness sanctuary",
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&h=1080&fit=crop&q=85",
    alt: "Spa wellness ambiance with warm stones, candles, and botanical accents",
  },
] as const;

export const SERVICES: Service[] = [
  {
    id: "foot-reflexology",
    title: "Foot Reflexology (Massage)",
    shortDescription:
      "Therapeutic pressure-point massage mapped to your body's energy pathways for holistic healing.",
    description:
      "Our signature foot reflexology massage applies precise thumb and finger techniques to reflex zones on the feet, each corresponding to organs and systems throughout the body. This ancient healing art stimulates pressure points to improve circulation, release deep-seated tension, and restore natural balance. Each session begins with a warm herbal foot soak and ends with nourishing botanical oils for complete rejuvenation.",
    benefits: [
      "Stimulates reflex pressure points linked to organs and body systems",
      "Improves blood circulation and lymphatic drainage in the lower body",
      "Relieves stress, anxiety, and mental fatigue through holistic healing",
      "Reduces foot pain, swelling, and tension from long hours of standing",
      "Supports better sleep quality and overall energy balance",
      "Promotes natural detoxification and immune system function",
    ],
    duration: "60 min",
    price: "₹1,800",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&h=600&fit=crop&q=80",
    imageAlt:
      "Foot reflexology massage with warm herbal foot soak and pressure-point therapy",
    featured: true,
  },
  {
    id: "head-massage",
    title: "Head Massage",
    shortDescription:
      "Soothing scalp and cranial massage to melt away tension and restore mental clarity.",
    description:
      "Our head massage combines gentle acupressure on the scalp, temples, and neck with aromatic botanical oils to dissolve tension held in the cranial muscles. This deeply calming treatment targets headache triggers, improves scalp health, and leaves you with a clear, refreshed mind. Ideal for those suffering from screen fatigue, migraines, or mental overload.",
    benefits: [
      "Relieves tension headaches and reduces migraine frequency",
      "Eases mental fatigue and promotes clarity and focus",
      "Improves scalp circulation for healthier hair and skin",
      "Reduces eye strain and tension from prolonged screen use",
      "Calms the nervous system for deep relaxation",
      "Enhances sleep quality by releasing cranial muscle tension",
    ],
    duration: "30 min",
    price: "₹900",
    image:
      "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800&h=600&fit=crop&q=80",
    imageAlt:
      "Relaxing head and scalp massage with gentle acupressure techniques",
  },
  {
    id: "hand-massage",
    title: "Hand Massage",
    shortDescription:
      "Targeted hand and wrist therapy to restore flexibility and relieve joint stiffness.",
    description:
      "Our hand massage focuses on the intricate muscles, tendons, and joints of the hands and wrists using specialized kneading, stretching, and pressure techniques. Whether you type all day, craft with your hands, or experience arthritis discomfort, this treatment improves dexterity, reduces inflammation, and restores comfortable movement to your most essential tools.",
    benefits: [
      "Improves joint flexibility and range of motion in fingers and wrists",
      "Relieves arthritis pain and stiffness in hands and knuckles",
      "Reduces carpal tunnel symptoms from repetitive strain",
      "Enhances blood flow for faster recovery and reduced swelling",
      "Restores dexterity and grip strength for daily activities",
      "Deeply relaxes overworked hand muscles and tendons",
    ],
    duration: "30 min",
    price: "₹800",
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d2784b25?w=800&h=600&fit=crop&q=80",
    imageAlt:
      "Therapeutic hand and wrist massage to relieve joint stiffness and improve flexibility",
  },
  {
    id: "neck-back-massage",
    title: "Neck & Back Massage",
    shortDescription:
      "Deep tissue relief for chronic neck stiffness, back pain, and postural tension.",
    description:
      "Our neck and back massage targets the cervical spine, trapezius, rhomboids, and lumbar regions with a blend of Swedish and deep tissue techniques. Designed for desk workers, drivers, and anyone carrying chronic muscle tension, this session realigns posture, releases knots, and provides lasting relief from upper and lower back discomfort.",
    benefits: [
      "Releases chronic muscle knots in the neck and upper back",
      "Improves posture by loosening tight chest and shoulder muscles",
      "Relieves lower back pain and lumbar tension",
      "Reduces stiffness from prolonged sitting or poor ergonomics",
      "Increases spinal mobility and flexibility",
      "Alleviates pain radiating from the neck into shoulders and arms",
    ],
    duration: "45 min",
    price: "₹1,400",
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd8c?w=800&h=600&fit=crop&q=80",
    imageAlt:
      "Deep tissue neck and back massage for chronic stiffness and postural relief",
  },
  {
    id: "arm-shoulder-massage",
    title: "Arm & Shoulder Massage",
    shortDescription:
      "Focused upper-body therapy for desk workers, athletes, and frozen shoulder relief.",
    description:
      "Our arm and shoulder massage concentrates on the deltoids, rotator cuff, biceps, triceps, and forearms using targeted deep tissue and myofascial release techniques. Perfect for office professionals, fitness enthusiasts, and those recovering from frozen shoulder or repetitive strain injuries, this treatment restores mobility and eliminates persistent upper-body tension.",
    benefits: [
      "Relieves desk-worker tension in shoulders and upper arms",
      "Improves frozen shoulder mobility and reduces pain",
      "Releases tightness in rotator cuff and deltoid muscles",
      "Reduces repetitive strain from typing and mouse use",
      "Enhances athletic recovery for arms and shoulders",
      "Restores full range of motion in the shoulder joint",
    ],
    duration: "40 min",
    price: "₹1,200",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50?w=800&h=600&fit=crop&q=80",
    imageAlt:
      "Arm and shoulder massage therapy targeting upper-body tension and mobility",
  },
  {
    id: "body-massage",
    title: "Body Massage",
    shortDescription:
      "Full-body therapeutic massage for complete relaxation, detoxification, and renewal.",
    description:
      "Our full body massage is a head-to-toe wellness ritual combining Swedish, Ayurvedic, and aromatherapy techniques to harmonize body and mind. Warm botanical oils glide across every muscle group, releasing toxins, improving circulation, and inducing a state of profound relaxation. This comprehensive treatment is the ultimate reset for stress, fatigue, and overall wellness.",
    benefits: [
      "Full-body deep relaxation and stress relief",
      "Stimulates lymphatic drainage for natural detoxification",
      "Improves sleep quality and reduces insomnia",
      "Boosts immune function through improved circulation",
      "Releases muscle tension across all major body groups",
      "Elevates mood and promotes a sense of overall well-being",
    ],
    duration: "90 min",
    price: "₹2,500",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop&q=80",
    imageAlt:
      "Full-body therapeutic spa massage for complete relaxation and wellness",
  },
];

export const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
];

export const ABOUT_SEO_KEYWORDS = [
  "about Kalm Foot Reflexology",
  "best reflexology spa Chennai",
  "top foot reflexology center",
  "certified reflexologists Tamil Nadu",
  "award winning wellness spa",
  "holistic foot therapy",
  "premium foot spa Chennai",
  "reflexology experts Bengaluru",
  "wellness center Tamil Nadu",
  "foot massage therapy",
] as const;

export const ABOUT_CONTENT = {
  hero: {
    eyebrow: "About Kalm Foot Reflexology",
    title: "Chennai & Bengaluru's Most Trusted Foot Reflexology & Wellness Sanctuary",
    subtitle:
      "For over a decade, Kalm Foot Reflexology has set the standard for therapeutic foot reflexology, luxury foot spa treatments, and holistic wellness across Chennai and Bengaluru. Discover why thousands of clients call us the top reflexology center in their city.",
  },
  story: {
    title: "Our Story",
    paragraphs: [
      "Kalm Foot Reflexology was founded in 2012 with a simple belief: that true wellness begins at your feet. What started as a single boutique reflexology studio in Chennai's Nungambakkam neighborhood has grown into South India's most celebrated foot wellness brand — with six premium locations serving Chennai and Bengaluru.",
      "Our founders, trained in Traditional Chinese Medicine reflexology and modern spa therapy, envisioned a sanctuary where ancient healing wisdom meets contemporary luxury. Every detail — from our botanical herbal soaks to our certified reflexology protocols — reflects our commitment to transformative, evidence-informed care.",
      "Today, Kalm Foot is recognized as the top-rated foot reflexology spa in Chennai and Bengaluru, trusted by wellness enthusiasts, corporate professionals, athletes, and families seeking natural relief from stress, fatigue, and chronic tension.",
    ],
  },
  mission: {
    title: "Our Mission",
    text: "To deliver exceptional foot reflexology and spa experiences that restore balance, relieve stress, and empower every client to feel their best — through certified expertise, botanical ingredients, and an unwavering dedication to holistic wellness.",
  },
  vision: {
    title: "Our Vision",
    text: "To be South India's leading reflexology and foot wellness destination — setting the gold standard for therapeutic touch, sustainable spa practices, and accessible holistic healing for every body.",
  },
  whyTop: {
    title: "Why We're the Top Reflexology Center in Chennai & Bengaluru",
    subtitle:
      "Award-winning care, certified expertise, and an unmatched client experience",
    points: [
      {
        title: "Award-Winning Excellence",
        description:
          "Recognized year after year by Chennai Wellness Awards, Tamil Nadu Spa Guide, and local health publications as the best foot reflexology spa in the city.",
      },
      {
        title: "12+ Years of Proven Results",
        description:
          "Over 15,000 satisfied clients and a 4.9-star average rating across Google, Justdial, and wellness platforms — proof that our reflexology delivers real, lasting benefits.",
      },
      {
        title: "Certified Reflexology Experts",
        description:
          "Every therapist holds international reflexology certification and ongoing training in pressure-point mapping, lymphatic drainage, and stress-relief protocols.",
      },
      {
        title: "Six Premium Locations",
        description:
          "Conveniently located across Nungambakkam, Kandhanchavadi, Thoraipakkam, Shollinganallur, Navalur in Chennai and Jaya Nagar in Bengaluru — each designed as a tranquil botanical retreat for deep healing.",
      },
    ],
  },
} as const;

export const ABOUT_STATS: Stat[] = [
  { value: "12+", label: "Years of Excellence" },
  { value: "15,000+", label: "Happy Clients Served" },
  { value: "6", label: "Premium Spa Locations" },
  { value: "4.9★", label: "Average Client Rating" },
];

export const AWARDS: Award[] = [
  {
    title: "Best Foot Reflexology Spa 2024",
    issuer: "Chennai Wellness Awards",
    year: "2024",
    description:
      "Voted #1 foot reflexology destination in Chennai by wellness industry experts and client surveys.",
  },
  {
    title: "Top Rated Wellness Center — Chennai",
    issuer: "Tamil Nadu Spa & Wellness Guide",
    year: "2024",
    description:
      "Highest-rated reflexology spa across Chennai for service quality, hygiene, and therapeutic outcomes.",
  },
  {
    title: "Excellence in Holistic Foot Therapy",
    issuer: "India Wellness Council",
    year: "2023",
    description:
      "National recognition for integrating traditional reflexology with modern spa wellness protocols.",
  },
  {
    title: "Client Choice Award — Foot Spa",
    issuer: "Justdial Top Rated",
    year: "2023",
    description:
      "Consistently rated 4.9 stars by verified clients across all Kalm Foot locations.",
  },
  {
    title: "Best New Wellness Brand — Tamil Nadu",
    issuer: "South India Lifestyle Awards",
    year: "2013",
    description:
      "Honored at launch for redefining foot reflexology standards in the region.",
  },
  {
    title: "Green Spa Certification",
    issuer: "Eco Wellness Alliance",
    year: "2022",
    description:
      "Certified for botanical, organic product use and sustainable spa practices.",
  },
];

export const TEAM: TeamMember[] = [
  {
    name: "Dr. Meera Venkatesh",
    role: "Founder & Lead Reflexologist",
    bio: "With 18 years in therapeutic reflexology and Traditional Chinese Medicine, Dr. Meera established Kalm Foot to bring authentic, results-driven foot wellness to Tamil Nadu.",
    credentials: [
      "IARR Certified Reflexologist",
      "TCM Foot Therapy Diploma",
      "Holistic Wellness Practitioner",
    ],
  },
  {
    name: "Arjun Pillai",
    role: "Senior Reflexology Therapist",
    bio: "Arjun specializes in sports recovery reflexology and chronic pain relief, helping clients from athletes to office professionals find lasting comfort.",
    credentials: [
      "Advanced Reflexology Certification",
      "Sports Recovery Therapy",
      "Lymphatic Drainage Specialist",
    ],
  },
  {
    name: "Lakshmi Iyer",
    role: "Spa Wellness Director",
    bio: "Lakshmi oversees treatment protocols, botanical product selection, and therapist training to ensure every session meets Kalm Foot's exacting standards.",
    credentials: [
      "Spa Management Certification",
      "Aromatherapy & Botanical Therapy",
      "Client Wellness Coaching",
    ],
  },
  {
    name: "Kavitha Sundaram",
    role: "Reflexology & Foot Spa Specialist",
    bio: "Known for her intuitive touch and calming presence, Kavitha has helped thousands of clients experience deep relaxation and improved sleep through reflexology.",
    credentials: [
      "Certified Foot Reflexologist",
      "Herbal Foot Soak Specialist",
      "Stress Relief Protocol Training",
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "Regular Client, Nungambakkam",
    quote:
      "After my first reflexology session at Kalm Foot, I slept better than I had in months. The therapists are incredibly skilled and the atmosphere is pure serenity.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Foot Spa & Reflexology",
    quote:
      "I was skeptical about reflexology until I tried Kalm Foot. The pressure was perfect, and I felt a noticeable difference in my lower back tension afterward.",
    rating: 5,
  },
  {
    name: "Ananya Reddy",
    role: "Pedicure & Manicure Package",
    quote:
      "The attention to detail is unmatched. From the warm welcome to the plumeria-scented treatments, every visit feels like a mini retreat.",
    rating: 5,
  },
  {
    name: "Suresh Menon",
    role: "Corporate Wellness Client",
    quote:
      "Kalm Foot is hands down the best reflexology center in Chennai. I've tried many spas, but none match their expertise and serene atmosphere. A must-visit for anyone serious about wellness.",
    rating: 5,
  },
  {
    name: "Deepa Natarajan",
    role: "Monthly Reflexology Member",
    quote:
      "The award-winning service lives up to every accolade. My chronic foot pain has improved dramatically, and the team truly understands holistic healing.",
    rating: 5,
  },
  {
    name: "Michael Fernandes",
    role: "Regular Client, Jaya Nagar",
    quote:
      "As someone new to reflexology, I was amazed by how professional and knowledgeable the therapists are. Kalm Foot earned its reputation as the top wellness spa in the city.",
    rating: 5,
  },
];

export const BENEFITS = [
  {
    title: "Certified Reflexologists",
    description:
      "Our therapists are trained in traditional reflexology mapping and modern wellness protocols.",
  },
  {
    title: "Botanical & Organic Products",
    description:
      "We use plant-based oils, herbal soaks, and non-toxic polishes for gentle, effective care.",
  },
  {
    title: "Tranquil Spa Environment",
    description:
      "Soft lighting, natural stone accents, and calming aromas create a sanctuary for healing.",
  },
  {
    title: "Personalized Sessions",
    description:
      "Every treatment is tailored to your stress points, health goals, and comfort preferences.",
  },
];
