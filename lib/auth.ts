import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

const secret = new TextEncoder().encode(process.env.JWT_SECRET || "your_jwt_secret_key");

export async function createAdminToken(email: string) {
  return new SignJWT({ email, role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export async function verifyAdminToken(token?: string) {
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, secret);
    return payload.role === "admin" ? payload : null;
  } catch {
    return null;
  }
}

export async function requireAdmin() {
  const token = cookies().get("admin_token")?.value;
  return verifyAdminToken(token);
}

export async function requireAdminFromRequest(request: NextRequest) {
  const token = request.cookies.get("admin_token")?.value;
  return verifyAdminToken(token);
}
