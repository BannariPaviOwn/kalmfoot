export type ServiceType =
  | "foot-reflexology"
  | "head-massage"
  | "hand-massage"
  | "neck-back-massage"
  | "arm-shoulder-massage"
  | "body-massage";

export type BookingStatus = "pending" | "confirmed" | "cancelled" | "completed";

export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: ServiceType;
  locationId: string;
  date: string;
  time: string;
  notes?: string;
  status: BookingStatus;
  createdAt: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  createdAt: string;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
}

export interface Service {
  id: ServiceType;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  duration: string;
  price: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface Award {
  title: string;
  issuer: string;
  year: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  credentials: string[];
}

export interface Stat {
  value: string;
  label: string;
}
