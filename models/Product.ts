import mongoose, { Schema, models } from "mongoose";

const ProductSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    category: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    longDescription: { type: String, default: "" },
    images: [{ type: String }],
    color: { type: String, default: "" },
    inStock: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default models.Product || mongoose.model("Product", ProductSchema);
