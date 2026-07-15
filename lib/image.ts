// lib/image.ts
// A local asset prevents Next/Image from requesting a placeholder Cloudinary URL.
const FALLBACK_IMAGE = "/images/logo.jpeg";

export function getSafeImageSrc(image: string | undefined): string {
  if (!image) {
    return FALLBACK_IMAGE;
  }
  return image;
}
