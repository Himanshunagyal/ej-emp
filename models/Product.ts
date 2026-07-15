import mongoose, { Schema, models } from "mongoose";

const ProductSchema = new Schema(
  {
    // Removed: name, slug, description, longDescription
    category: { type: String, required: true, trim: true },
    images: [{ type: String }],
    color: { type: String, default: "" },
    inStock: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default models.Product || mongoose.model("Product", ProductSchema);