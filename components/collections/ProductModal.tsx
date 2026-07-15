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
        productName: product?.category,
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
    <>
      <style>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(36, 26, 21, 0.85);
          backdrop-filter: blur(8px);
          z-index: 50;
          padding: 20px;
          overflow-y: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: modalFadeIn 0.3s ease;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-container {
          max-width: 920px;
          width: 100%;
          margin: 20px auto;
          background: #fffdf8;
          border: 1px solid rgba(36, 26, 21, 0.06);
          border-radius: 2px;
          box-shadow: 0 40px 80px rgba(36, 26, 21, 0.2);
          animation: modalSlideUp 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          overflow: hidden;
        }

        @keyframes modalSlideUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
          border-bottom: 1px solid rgba(36, 26, 21, 0.06);
          background: rgba(255, 253, 248, 0.5);
        }

        .modal-header h2 {
          font-family: "Playfair Display", "Cormorant Garamond", Georgia, serif;
          font-size: clamp(20px, 2vw, 28px);
          font-weight: 600;
          color: #241a15;
          margin: 0;
          line-height: 1.2;
        }

        .modal-close-btn {
          font-family: "Jost", sans-serif;
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6b5f54;
          background: transparent;
          border: 1px solid rgba(36, 26, 21, 0.08);
          padding: 8px 20px;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .modal-close-btn:hover {
          border-color: #b9862f;
          color: #4d0e17;
          background: rgba(185, 134, 47, 0.04);
        }

        .modal-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          padding: 28px 24px 32px;
        }

        .modal-image-wrapper {
          position: relative;
          aspect-ratio: 4 / 3;
          border-radius: 2px;
          overflow: hidden;
          background: #ece0c8;
        }

        .modal-image-wrapper img {
          object-fit: cover;
        }

        .modal-image-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          font-family: "Jost", sans-serif;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #faf6ee;
          background: rgba(36, 26, 21, 0.6);
          backdrop-filter: blur(4px);
          padding: 4px 12px;
          border-radius: 2px;
          border: 1px solid rgba(255, 253, 248, 0.1);
        }

        .modal-details {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 6px 16px;
          font-family: "Jost", sans-serif;
          font-size: 13.5px;
          padding: 16px;
          background: rgba(255, 253, 248, 0.4);
          border: 1px solid rgba(36, 26, 21, 0.04);
          border-radius: 2px;
          margin-top: 12px;
        }

        .modal-details dt {
          font-weight: 500;
          color: #6b5f54;
          letter-spacing: 0.04em;
        }

        .modal-details dd {
          margin: 0;
          color: #241a15;
          font-weight: 400;
        }

        .modal-details .status-in-stock {
          color: #2d6a4f;
        }

        .modal-details .status-made-to-order {
          color: #b9862f;
        }

        .modal-form {
          display: grid;
          gap: 16px;
        }

        .modal-form h3 {
          font-family: "Playfair Display", "Cormorant Garamond", Georgia, serif;
          font-size: 20px;
          font-weight: 600;
          color: #241a15;
          margin: 0 0 4px;
        }

        .modal-form .form-group {
          display: grid;
          gap: 4px;
        }

        .modal-form label {
          font-family: "Jost", sans-serif;
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #6b5f54;
        }

        .modal-form input,
        .modal-form textarea {
          font-family: "Jost", sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #241a15;
          padding: 10px 14px;
          border: 1px solid rgba(36, 26, 21, 0.08);
          border-radius: 2px;
          background: #ffffff;
          transition: all 0.3s ease;
          width: 100%;
          box-sizing: border-box;
        }

        .modal-form input:focus,
        .modal-form textarea:focus {
          outline: none;
          border-color: #b9862f;
          box-shadow: 0 0 0 3px rgba(185, 134, 47, 0.06);
        }

        .modal-form textarea {
          resize: vertical;
          min-height: 80px;
        }

        .modal-form .submit-btn {
          font-family: "Jost", sans-serif;
          font-size: 12.5px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: #4d0e17;
          color: #faf6ee;
          border: 1px solid #4d0e17;
          padding: 14px 28px;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        .modal-form .submit-btn:hover {
          background: #6d1220;
          border-color: #6d1220;
          transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(67, 11, 18, 0.2);
        }

        .modal-form .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .modal-form .status-message {
          font-family: "Jost", sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: #4d0e17;
          margin: 0;
          padding: 12px 16px;
          background: rgba(107, 20, 32, 0.05);
          border-radius: 2px;
          border-left: 3px solid #b9862f;
        }

        @media (max-width: 860px) {
          .modal-body {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 20px;
          }
          .modal-header {
            padding: 16px 20px;
          }
          .modal-container {
            margin: 10px auto;
          }
        }

        @media (max-width: 600px) {
          .modal-overlay {
            padding: 12px;
          }
          .modal-body {
            padding: 16px;
            gap: 20px;
          }
          .modal-header {
            padding: 14px 16px;
          }
          .modal-header h2 {
            font-size: 18px;
          }
          .modal-details {
            grid-template-columns: 80px 1fr;
            font-size: 12.5px;
            padding: 12px;
          }
          .modal-form input,
          .modal-form textarea {
            font-size: 13px;
            padding: 8px 12px;
          }
        }
      `}</style>

      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          {/* Header */}
          <div className="modal-header">
            <h2>{product.category}</h2>
            <button className="modal-close-btn" type="button" onClick={onClose}>
              Close
            </button>
          </div>

          {/* Body */}
          <div className="modal-body">
            {/* Left Column - Product Info */}
            <div>
              <div className="modal-image-wrapper">
                <Image 
                  src={image} 
                  alt={product.category} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                  style={{ objectFit: "cover" }} 
                />
                <span className="modal-image-badge">
                  {product.inStock ? 'In Stock' : 'Made to Order'}
                </span>
              </div>

              <dl className="modal-details">
                <dt>Category</dt>
                <dd>{product.category}</dd>
                <dt>Color</dt>
                <dd>{product.color || "Available on request"}</dd>
                <dt>Status</dt>
                <dd className={product.inStock ? 'status-in-stock' : 'status-made-to-order'}>
                  {product.inStock ? "✓ In stock" : "Made to order"}
                </dd>
              </dl>
            </div>

            {/* Right Column - Enquiry Form */}
            <div>
              <form onSubmit={submitEnquiry} className="modal-form">
                <h3>Enquire Now</h3>
                
                <div className="form-group">
                  <label htmlFor="customerName">Full Name</label>
                  <input 
                    id="customerName"
                    name="customerName" 
                    required 
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    id="email"
                    type="email" 
                    name="email" 
                    required 
                    placeholder="you@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    id="phone"
                    name="phone" 
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message"
                    name="message" 
                    rows={4} 
                    placeholder="I am interested in this piece..."
                  />
                </div>

                <button 
                  className="submit-btn" 
                  type="submit"
                  disabled={status === "Sending..."}
                >
                  {status === "Sending..." ? "Sending..." : "Submit Enquiry"}
                </button>

                {status && (
                  <p className="status-message">
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
