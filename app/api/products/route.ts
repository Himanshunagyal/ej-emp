import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { requireAdminFromRequest } from "@/lib/auth";
import { parseProductRequest } from "@/lib/product-upload";
import Product from "@/models/Product";

function getProductErrorMessage(error: unknown) {
  if (typeof error === "object" && error !== null && "code" in error && error.code === 11000) {
    return "A product with the same unique value already exists.";
  }

  if (error instanceof Error) {
    if (
      error.name === "MongooseServerSelectionError" ||
      error.message.includes("querySrv") ||
      error.message.includes("ETIMEOUT") ||
      error.message.includes("ENOTFOUND") ||
      error.message.includes("IP") ||
      error.message.includes("whitelisted") ||
      error.message.includes("SSL")
    ) {
      return "Could not connect to MongoDB Atlas. Check your internet/DNS connection and Atlas Network Access IP allowlist, then try again.";
    }

    return error.message;
  }

  return "Could not create product";
}

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const category = request.nextUrl.searchParams.get("category");
    const query = category ? { category } : {};
    const products = await Product.find(query).sort({ createdAt: -1 }).lean();
    return NextResponse.json(products);
  } catch {
    return NextResponse.json([]);
  }
}

export async function POST(request: NextRequest) {
  const admin = await requireAdminFromRequest(request);
  if (!admin) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    await connectDB();
    const productData = await parseProductRequest(request);
    const product = await Product.create(productData);
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: getProductErrorMessage(error) }, { status: 400 });
  }
}
