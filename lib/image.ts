const PLACEHOLDER_IMAGE = "https://via.placeholder.com/900x650?text=Rajasthan+Emporium";

export function getSafeImageSrc(src?: string) {
  const value = src?.trim();

  if (!value) return PLACEHOLDER_IMAGE;
  if (value.startsWith("/") || value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  return PLACEHOLDER_IMAGE;
}
