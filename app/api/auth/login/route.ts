import { NextResponse } from "next/server";
import { createAdminToken } from "@/lib/auth";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const adminEmail = process.env.ADMIN_EMAIL || "admin@rajasthanemporium.com";
  const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

  if (email !== adminEmail || password !== adminPassword) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  const token = await createAdminToken(email);
  const response = NextResponse.json({ message: "Logged in" });
  response.cookies.set("admin_token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7
  });

  return response;
}
