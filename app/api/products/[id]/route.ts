import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { requireAdminFromRequest } from "@/lib/auth";
import { parseProductRequest } from "@/lib/product-upload";
import Product from "@/models/Product";

type Context = {
  params: { id: string };
};

function getProductErrorMessage(error: unknown) {
  if (typeof error === "object" && error !== null && "code" in error && error.code === 11000) {
    return "A product with this slug already exists. Use a different slug.";
  }

  if (error instanceof Error) {
    if (
      error.name === "MongooseServerSelectionError" ||
      error.message.includes("IP") ||
      error.message.includes("whitelisted") ||
      error.message.includes("SSL")
    ) {
      return "Could not connect to MongoDB Atlas. Add your current IP address in Atlas Network Access, then try again.";
    }

    return error.message;
  }

  return "Could not save product";
}

export async function GET(_request: NextRequest, { params }: Context) {
  try {
    await connectDB();
    const product = await Product.findById(params.id).lean();
    if (!product) return NextResponse.json({ message: "Product not found" }, { status: 404 });
    return NextResponse.json(product);
  } catch {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }
}

export async function PUT(request: NextRequest, { params }: Context) {
  const admin = await requireAdminFromRequest(request);
  if (!admin) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    await connectDB();
    const body = await parseProductRequest(request);
    const product = await Product.findByIdAndUpdate(
      params.id,
      body,
      { new: true, runValidators: true }
    ).lean();
    if (!product) return NextResponse.json({ message: "Product not found" }, { status: 404 });
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ message: getProductErrorMessage(error) }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest, { params }: Context) {
  const admin = await requireAdminFromRequest(request);
  if (!admin) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    await connectDB();
    await Product.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Product deleted" });
  } catch {
    return NextResponse.json({ message: "Could not delete product" }, { status: 400 });
  }
}
