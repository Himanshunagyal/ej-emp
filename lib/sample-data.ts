import { Product } from "@/types";

export const categories = ["Textiles", "Pottery", "Jewelry", "Woodcraft", "Paintings"];

export const sampleProducts: Product[] = [
  {
    _id: "sample-1",
    name: "Hand Block Printed Quilt",
    slug: "hand-block-printed-quilt",
    category: "Textiles",
    description: "A soft Jaipuri quilt with traditional hand block motifs.",
    longDescription: "Made by skilled artisans using cotton fabric, natural-inspired patterns, and a warm palette suited for everyday homes.",
    images: ["https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=900&q=80"],
    color: "Maroon and gold",
    inStock: true,
    isFeatured: true
  },
  {
    _id: "sample-2",
    name: "Blue Pottery Vase",
    slug: "blue-pottery-vase",
    category: "Pottery",
    description: "A decorative vase inspired by Jaipur blue pottery.",
    longDescription: "This piece brings together floral patterns, cool ceramic tones, and a glossy finish for shelves, consoles, and gifting.",
    images: ["https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=900&q=80"],
    color: "Blue",
    inStock: true,
    isFeatured: true
  },
  {
    _id: "sample-3",
    name: "Kundan Necklace Set",
    slug: "kundan-necklace-set",
    category: "Jewelry",
    description: "Traditional necklace set with festive Rajasthani detailing.",
    longDescription: "A statement piece for weddings and celebrations, made with a classic profile and polished finish.",
    images: ["https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80"],
    color: "Gold",
    inStock: true,
    isFeatured: false
  }
];
