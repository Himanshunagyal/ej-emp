// lib/product-upload.ts
import { NextRequest } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function parseProductRequest(
  request: NextRequest
) {
  const formData = await request.formData();

  // Get existing images from the form
  const existingImages = formData.getAll("existingImages") as string[];

  // Get new image files
  const imageFiles = formData.getAll("images") as File[];
  const uploadedImages: string[] = [];

  // Upload new images to Cloudinary
  for (const file of imageFiles) {
    if (file.size > 0) {
      try {
        const buffer = await file.arrayBuffer();
        const base64 = Buffer.from(buffer).toString("base64");
        const dataUri = `data:${file.type};base64,${base64}`;

        const result = await cloudinary.uploader.upload(dataUri, {
          folder: "rajasthan-emporium",
          resource_type: "image",
        });
        uploadedImages.push(result.secure_url);
        console.log("Uploaded image:", result.secure_url); // Debug log
      } catch (error) {
        console.error("Cloudinary upload error:", error);
        throw new Error("Image upload failed. The product was not saved.");
      }
    }
  }

  // Combine existing and new images
  const allImages = [...existingImages, ...uploadedImages];

  // Build the product data object
  const productData: Record<string, any> = {
    category: formData.get("category") as string,
    color: formData.get("color") as string || "",
    inStock: formData.get("inStock") === "on" || formData.get("inStock") === "true",
    isFeatured: formData.get("isFeatured") === "on" || formData.get("isFeatured") === "true",
  };

  // Only add images if there are any
  if (allImages.length > 0) {
    productData.images = allImages;
  }

  return productData;
}
