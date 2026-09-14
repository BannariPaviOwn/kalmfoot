import { NextResponse } from "next/server";
import { createBooking } from "@/lib/db";
import { LOCATIONS, SERVICES } from "@/lib/data";
import type { ServiceType } from "@/types";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, locationId, date, time, notes } =
      body;

    if (!name || !email || !phone || !service || !locationId || !date || !time) {
      return NextResponse.json(
        { error: "All required fields must be filled." },
        { status: 400 }
      );
    }

    const validService = SERVICES.some((s) => s.id === service);
    const validLocation = LOCATIONS.some((l) => l.id === locationId);

    if (!validService || !validLocation) {
      return NextResponse.json(
        { error: "Invalid service or location selected." },
        { status: 400 }
      );
    }

    const booking = await createBooking({
      name: String(name).trim(),
      email: String(email).trim(),
      phone: String(phone).trim(),
      service: service as ServiceType,
      locationId,
      date,
      time,
      notes: notes ? String(notes).trim() : undefined,
    });

    return NextResponse.json({ success: true, booking }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create booking." },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const { verifyAdminKey, getBookings } = await import("@/lib/db");
  const adminKey = request.headers.get("x-admin-key");

  if (!verifyAdminKey(adminKey)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const bookings = await getBookings();
  return NextResponse.json({ bookings });
}
