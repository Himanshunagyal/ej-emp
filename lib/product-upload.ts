import { NextRequest } from "next/server";
import cloudinary from "@/lib/cloudinary";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;
const CLOUDINARY_FOLDER = "rajasthan-emporium/products";

export function slugify(value: string) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function readString(formData: FormData, key: string) {
  return String(formData.get(key) || "").trim();
}

async function uploadImage(file: File) {
  if (!file.type.startsWith("image/")) {
    throw new Error("Only image files can be uploaded.");
  }

  if (file.size > MAX_IMAGE_SIZE) {
    throw new Error("Each image must be 5MB or smaller.");
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const dataUri = `data:${file.type};base64,${buffer.toString("base64")}`;
  const result = await cloudinary.uploader.upload(dataUri, {
    folder: CLOUDINARY_FOLDER,
    resource_type: "image"
  });

  return result.secure_url;
}

export async function parseProductRequest(request: NextRequest, options: { allowNameSlug?: boolean } = {}) {
  const contentType = request.headers.get("content-type") || "";

  if (!contentType.includes("multipart/form-data")) {
    const body = await request.json();
    return {
      ...body,
      name: String(body.name || "").trim(),
      slug: String(body.slug || (options.allowNameSlug ? slugify(String(body.name || "")) : "")).trim(),
      category: String(body.category || "").trim(),
      description: String(body.description || "").trim(),
      longDescription: String(body.longDescription || "").trim(),
      color: String(body.color || "").trim()
    };
  }

  const formData = await request.formData();
  const name = readString(formData, "name");
  const selectedImages = formData
    .getAll("images")
    .filter((item): item is File => item instanceof File && item.size > 0);
  const uploadedImages = await Promise.all(selectedImages.map(uploadImage));
  const existingImages = formData.getAll("existingImages").map(String).filter(Boolean);

  return {
    name,
    slug: readString(formData, "slug") || (options.allowNameSlug ? slugify(name) : ""),
    category: readString(formData, "category"),
    description: readString(formData, "description"),
    longDescription: readString(formData, "longDescription"),
    images: [...existingImages, ...uploadedImages],
    color: readString(formData, "color"),
    inStock: formData.get("inStock") === "on",
    isFeatured: formData.get("isFeatured") === "on"
  };
}
