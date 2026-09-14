import { NextResponse } from "next/server";
import { createContact, getContacts, verifyAdminKey } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const contact = await createContact({
      name: String(name).trim(),
      email: String(email).trim(),
      phone: phone ? String(phone).trim() : undefined,
      message: String(message).trim(),
    });

    return NextResponse.json({ success: true, contact }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to submit contact form." },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const adminKey = request.headers.get("x-admin-key");

  if (!verifyAdminKey(adminKey)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const contacts = await getContacts();
  return NextResponse.json({ contacts });
}
