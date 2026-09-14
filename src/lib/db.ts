import { promises as fs } from "fs";
import path from "path";
import type { Booking, ContactSubmission } from "@/types";

const DATA_DIR = path.join(process.cwd(), "data");

async function ensureDataDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

async function readJsonFile<T>(filename: string): Promise<T[]> {
  await ensureDataDir();
  const filePath = path.join(DATA_DIR, filename);
  try {
    const content = await fs.readFile(filePath, "utf-8");
    return JSON.parse(content) as T[];
  } catch {
    return [];
  }
}

async function writeJsonFile<T>(filename: string, data: T[]): Promise<void> {
  await ensureDataDir();
  const filePath = path.join(DATA_DIR, filename);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
}

export async function getBookings(): Promise<Booking[]> {
  return readJsonFile<Booking>("bookings.json");
}

export async function createBooking(
  booking: Omit<Booking, "id" | "createdAt" | "status">
): Promise<Booking> {
  const bookings = await getBookings();
  const newBooking: Booking = {
    ...booking,
    id: crypto.randomUUID(),
    status: "pending",
    createdAt: new Date().toISOString(),
  };
  bookings.unshift(newBooking);
  await writeJsonFile("bookings.json", bookings);
  return newBooking;
}

export async function updateBookingStatus(
  id: string,
  status: Booking["status"]
): Promise<Booking | null> {
  const bookings = await getBookings();
  const index = bookings.findIndex((b) => b.id === id);
  if (index === -1) return null;
  bookings[index] = { ...bookings[index], status };
  await writeJsonFile("bookings.json", bookings);
  return bookings[index];
}

export async function getContacts(): Promise<ContactSubmission[]> {
  return readJsonFile<ContactSubmission>("contacts.json");
}

export async function createContact(
  contact: Omit<ContactSubmission, "id" | "createdAt">
): Promise<ContactSubmission> {
  const contacts = await getContacts();
  const newContact: ContactSubmission = {
    ...contact,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  contacts.unshift(newContact);
  await writeJsonFile("contacts.json", contacts);
  return newContact;
}

export function verifyAdminKey(key: string | null): boolean {
  const adminKey = process.env.ADMIN_KEY || "kalmfoot-admin-2024";
  return key === adminKey;
}
