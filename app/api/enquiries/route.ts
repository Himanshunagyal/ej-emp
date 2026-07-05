import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { requireAdminFromRequest } from "@/lib/auth";
import Enquiry from "@/models/Enquiry";

export async function GET(request: NextRequest) {
  const admin = await requireAdminFromRequest(request);
  if (!admin) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    await connectDB();
    const enquiries = await Enquiry.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json(enquiries);
  } catch {
    return NextResponse.json([]);
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const enquiry = await Enquiry.create(body);
    return NextResponse.json(enquiry, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Could not create enquiry", error }, { status: 400 });
  }
}
