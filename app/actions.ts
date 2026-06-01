"use server";

import { createClient } from "@/lib/supabase/server";

export async function subscribeNewsletter(formData: FormData) {
  const email = formData.get("email")?.toString().trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  const supabase = createClient();
  const { error } = await supabase
    .from("newsletter_subscribers")
    .insert({ email });

  if (error) {
    if (error.code === "23505") {
      return { error: "You're already subscribed!" };
    }
    return { error: "Something went wrong. Please try again." };
  }

  return { success: true };
}

export async function submitTourBooking(formData: FormData) {
  const full_name = formData.get("full_name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim() || null;
  const property_interest = formData.get("property_interest")?.toString().trim() || null;
  const preferred_date = formData.get("preferred_date")?.toString() || null;
  const message = formData.get("message")?.toString().trim() || null;

  if (!full_name || !email) {
    return { error: "Name and email are required." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  const supabase = createClient();
  const { error } = await supabase.from("tour_bookings").insert({
    full_name,
    email,
    phone,
    property_interest,
    preferred_date,
    message,
  });

  if (error) {
    return { error: "Something went wrong. Please try again." };
  }

  return { success: true };
}

export async function submitPropertyInquiry(formData: FormData) {
  const property_id = formData.get("property_id")?.toString();
  const property_title = formData.get("property_title")?.toString();
  const full_name = formData.get("full_name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim() || null;

  if (!full_name || !email || !property_id || !property_title) {
    return { error: "Name and email are required." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  const supabase = createClient();
  const { error } = await supabase.from("property_inquiries").insert({
    property_id,
    property_title,
    full_name,
    email,
    message,
  });

  if (error) {
    return { error: "Something went wrong. Please try again." };
  }

  return { success: true };
}
