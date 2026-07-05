"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { Product } from "@/types";
import { getSafeImageSrc } from "@/lib/image";

type Props = {
  product: Product | null;
  onClose: () => void;
};

export function ProductModal({ product, onClose }: Props) {
  const [status, setStatus] = useState("");

  if (!product) return null;

  async function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Sending...");
    const formData = new FormData(event.currentTarget);

    const response = await fetch("/api/enquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productId: product?._id?.startsWith("sample-") ? undefined : product?._id,
        productName: product?.name,
        customerName: formData.get("customerName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message")
      })
    });

    setStatus(response.ok ? "Thank you. We will contact you soon." : "Could not submit enquiry. Please try again.");
    if (response.ok) event.currentTarget.reset();
  }

  const image = getSafeImageSrc(product.images?.[0]);

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(44,24,16,0.72)", zIndex: 50, padding: 16, overflowY: "auto" }}>
      <div className="card" style={{ maxWidth: 920, margin: "32px auto", overflow: "hidden" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, padding: 18, borderBottom: "1px solid #ead8c5" }}>
          <h2 style={{ margin: 0 }}>{product.name}</h2>
          <button className="btn ghost" type="button" onClick={onClose}>Close</button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, padding: 20 }}>
          <div>
            <div style={{ position: "relative", aspectRatio: "4 / 3", borderRadius: 8, overflow: "hidden", background: "#ead8c5" }}>
              <Image src={image} alt={product.name} fill sizes="100vw" style={{ objectFit: "cover" }} />
            </div>
            <p className="muted" style={{ lineHeight: 1.6 }}>{product.longDescription || product.description}</p>
            <dl style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 8 }}>
              <dt><strong>Category</strong></dt><dd>{product.category}</dd>
              <dt><strong>Color</strong></dt><dd>{product.color || "Available on request"}</dd>
              <dt><strong>Status</strong></dt><dd>{product.inStock ? "In stock" : "Made to order"}</dd>
            </dl>
          </div>
          <form onSubmit={submitEnquiry} style={{ display: "grid", gap: 14, alignContent: "start" }}>
            <h3 style={{ margin: 0 }}>Enquire Now</h3>
            <div className="field"><label>Name</label><input name="customerName" required /></div>
            <div className="field"><label>Email</label><input type="email" name="email" required /></div>
            <div className="field"><label>Phone</label><input name="phone" /></div>
            <div className="field"><label>Message</label><textarea name="message" rows={4} placeholder={`I am interested in ${product.name}`} /></div>
            <button className="btn" type="submit">Submit Enquiry</button>
            {status && <p className="muted" style={{ margin: 0 }}>{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
