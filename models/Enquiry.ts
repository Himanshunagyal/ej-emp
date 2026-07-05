import mongoose, { Schema, models } from "mongoose";

const EnquirySchema = new Schema(
  {
    productId: { type: Schema.Types.ObjectId, ref: "Product", required: false },
    productName: { type: String, required: true, trim: true },
    customerName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, default: "" },
    message: { type: String, default: "" },
    status: {
      type: String,
      enum: ["new", "contacted", "closed"],
      default: "new"
    }
  },
  { timestamps: true }
);

export default models.Enquiry || mongoose.model("Enquiry", EnquirySchema);
