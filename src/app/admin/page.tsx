"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { LOCATIONS, SERVICES } from "@/lib/data";
import type { Booking, ContactSubmission } from "@/types";

const ADMIN_KEY_STORAGE = "kalmfoot_admin_key";

export default function AdminPage() {
  const [adminKey, setAdminKey] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [activeTab, setActiveTab] = useState<"bookings" | "contacts">(
    "bookings"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = useCallback(async (key: string) => {
    setLoading(true);
    setError("");
    try {
      const headers = { "x-admin-key": key };
      const [bookingsRes, contactsRes] = await Promise.all([
        fetch("/api/bookings", { headers }),
        fetch("/api/contact", { headers }),
      ]);

      if (!bookingsRes.ok || !contactsRes.ok) {
        throw new Error("Invalid admin key or unauthorized access.");
      }

      const bookingsData = await bookingsRes.json();
      const contactsData = await contactsRes.json();
      setBookings(bookingsData.bookings);
      setContacts(contactsData.contacts);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load data.");
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const success = await fetchData(adminKey);
    if (success) {
      sessionStorage.setItem(ADMIN_KEY_STORAGE, adminKey);
      setAuthenticated(true);
    }
  }

  async function handleRestoreSession() {
    const stored = sessionStorage.getItem(ADMIN_KEY_STORAGE);
    if (!stored) return;
    setAdminKey(stored);
    const success = await fetchData(stored);
    if (success) {
      setAuthenticated(true);
    }
  }

  function handleLogout() {
    sessionStorage.removeItem(ADMIN_KEY_STORAGE);
    setAdminKey("");
    setAuthenticated(false);
    setBookings([]);
    setContacts([]);
  }

  async function updateStatus(id: string, status: Booking["status"]) {
    try {
      const res = await fetch("/api/bookings/status", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": adminKey,
        },
        body: JSON.stringify({ id, status }),
      });
      if (!res.ok) throw new Error("Update failed");
      await fetchData(adminKey);
    } catch {
      setError("Failed to update booking status.");
    }
  }

  function getLocationName(id: string) {
    return LOCATIONS.find((l) => l.id === id)?.name || id;
  }

  function getServiceName(id: string) {
    return SERVICES.find((s) => s.id === id)?.title || id;
  }

  if (!authenticated) {
    const hasStoredSession =
      typeof window !== "undefined" &&
      !!sessionStorage.getItem(ADMIN_KEY_STORAGE);

    return (
      <div className="flex min-h-screen items-center justify-center bg-cream px-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md rounded-2xl border border-gold/20 bg-white p-8 shadow-lg"
        >
          <h1 className="mb-2 font-serif text-2xl text-forest">CRM Login</h1>
          <p className="mb-6 text-sm text-forest/60">
            Kalm Foot Reflexology — Admin Dashboard
          </p>
          <label htmlFor="admin-key" className="mb-2 block text-sm text-forest/70">
            Admin Key
          </label>
          <input
            id="admin-key"
            type="password"
            required
            value={adminKey}
            onChange={(e) => setAdminKey(e.target.value)}
            className="mb-4 w-full rounded-lg border border-gold/20 px-4 py-3 text-forest"
            placeholder="Enter admin key"
          />
          {error && (
            <p className="mb-4 text-sm text-red-600">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="gold-gradient w-full rounded-full py-3 font-semibold text-white disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
          {hasStoredSession && (
            <button
              type="button"
              onClick={handleRestoreSession}
              disabled={loading}
              className="mt-3 w-full text-sm text-forest/60 hover:text-gold"
            >
              Continue with saved session
            </button>
          )}
          <Link
            href="/"
            className="mt-4 block text-center text-sm text-forest/60 hover:text-gold"
          >
            ← Back to website
          </Link>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <header className="border-b border-gold/20 bg-forest px-4 py-4 text-cream md:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <h1 className="font-serif text-xl">Kalm Foot CRM</h1>
            <p className="text-sm text-cream/60">
              Manage bookings & contact leads
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-gold hover:underline">
              View Site
            </Link>
            <button
              onClick={handleLogout}
              className="rounded-full border border-gold/40 px-4 py-2 text-sm hover:bg-gold/10"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="mb-6 flex gap-4">
          <button
            onClick={() => setActiveTab("bookings")}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
              activeTab === "bookings"
                ? "gold-gradient text-white"
                : "bg-white text-forest border border-gold/20"
            }`}
          >
            Bookings ({bookings.length})
          </button>
          <button
            onClick={() => setActiveTab("contacts")}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
              activeTab === "contacts"
                ? "gold-gradient text-white"
                : "bg-white text-forest border border-gold/20"
            }`}
          >
            Contacts ({contacts.length})
          </button>
        </div>

        {loading && (
          <p className="text-forest/60">Loading...</p>
        )}
        {error && (
          <p className="mb-4 text-red-600">{error}</p>
        )}

        {activeTab === "bookings" && !loading && (
          <div className="overflow-x-auto rounded-xl border border-gold/15 bg-white shadow-sm">
            {bookings.length === 0 ? (
              <p className="p-8 text-center text-forest/50">
                No bookings yet.
              </p>
            ) : (
              <table className="w-full text-left text-sm">
                <thead className="border-b border-gold/10 bg-cream-dark">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-forest">Client</th>
                    <th className="px-4 py-3 font-semibold text-forest">Service</th>
                    <th className="px-4 py-3 font-semibold text-forest">Location</th>
                    <th className="px-4 py-3 font-semibold text-forest">Date/Time</th>
                    <th className="px-4 py-3 font-semibold text-forest">Status</th>
                    <th className="px-4 py-3 font-semibold text-forest">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr
                      key={booking.id}
                      className="border-b border-gold/5 hover:bg-cream/50"
                    >
                      <td className="px-4 py-3">
                        <p className="font-medium">{booking.name}</p>
                        <p className="text-xs text-forest/50">
                          {booking.email}
                        </p>
                        <p className="text-xs text-forest/50">
                          {booking.phone}
                        </p>
                      </td>
                      <td className="px-4 py-3">
                        {getServiceName(booking.service)}
                      </td>
                      <td className="px-4 py-3">
                        {getLocationName(booking.locationId)}
                      </td>
                      <td className="px-4 py-3">
                        {booking.date}
                        <br />
                        {booking.time}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                            booking.status === "confirmed"
                              ? "bg-green-100 text-green-800"
                              : booking.status === "cancelled"
                                ? "bg-red-100 text-red-800"
                                : booking.status === "completed"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <select
                          value={booking.status}
                          onChange={(e) =>
                            updateStatus(
                              booking.id,
                              e.target.value as Booking["status"]
                            )
                          }
                          className="rounded border border-gold/20 px-2 py-1 text-xs"
                        >
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="completed">Completed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                        {booking.notes && (
                          <p className="mt-1 text-xs text-forest/50">
                            Note: {booking.notes}
                          </p>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {activeTab === "contacts" && !loading && (
          <div className="grid gap-4">
            {contacts.length === 0 ? (
              <p className="rounded-xl border border-gold/15 bg-white p-8 text-center text-forest/50">
                No contact submissions yet.
              </p>
            ) : (
              contacts.map((contact) => (
                <div
                  key={contact.id}
                  className="rounded-xl border border-gold/15 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-forest">
                        {contact.name}
                      </p>
                      <p className="text-sm text-forest/60">{contact.email}</p>
                      {contact.phone && (
                        <p className="text-sm text-forest/60">
                          {contact.phone}
                        </p>
                      )}
                    </div>
                    <p className="text-xs text-forest/40">
                      {new Date(contact.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-forest/80">
                    {contact.message}
                  </p>
                </div>
              ))
            )}
          </div>
        )}
      </main>
    </div>
  );
}
