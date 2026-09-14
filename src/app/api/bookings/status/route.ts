import { NextResponse } from "next/server";
import { updateBookingStatus, verifyAdminKey } from "@/lib/db";
import type { BookingStatus } from "@/types";

export async function PATCH(request: Request) {
  const adminKey = request.headers.get("x-admin-key");

  if (!verifyAdminKey(adminKey)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { error: "Booking ID and status are required." },
        { status: 400 }
      );
    }

    const validStatuses: BookingStatus[] = [
      "pending",
      "confirmed",
      "cancelled",
      "completed",
    ];

    if (!validStatuses.includes(status)) {
      return NextResponse.json({ error: "Invalid status." }, { status: 400 });
    }

    const booking = await updateBookingStatus(id, status);

    if (!booking) {
      return NextResponse.json({ error: "Booking not found." }, { status: 404 });
    }

    return NextResponse.json({ success: true, booking });
  } catch {
    return NextResponse.json(
      { error: "Failed to update booking." },
      { status: 500 }
    );
  }
}
