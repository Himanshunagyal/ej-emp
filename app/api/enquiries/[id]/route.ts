import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { requireAdminFromRequest } from "@/lib/auth";
import Enquiry from "@/models/Enquiry";

type Context = {
  params: { id: string };
};

export async function PUT(request: NextRequest, { params }: Context) {
  const admin = await requireAdminFromRequest(request);
  if (!admin) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    await connectDB();
    const body = await request.json();
    const enquiry = await Enquiry.findByIdAndUpdate(params.id, { status: body.status }, { new: true }).lean();
    if (!enquiry) return NextResponse.json({ message: "Enquiry not found" }, { status: 404 });
    return NextResponse.json(enquiry);
  } catch {
    return NextResponse.json({ message: "Could not update enquiry" }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest, { params }: Context) {
  const admin = await requireAdminFromRequest(request);
  if (!admin) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    await connectDB();
    await Enquiry.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Enquiry deleted" });
  } catch {
    return NextResponse.json({ message: "Could not delete enquiry" }, { status: 400 });
  }
}
