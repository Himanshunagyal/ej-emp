"use client";

import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import { Product } from "@/types";

type Props = {
  initialProduct?: Product;
  onSaved?: () => void;
};

export function ProductForm({ initialProduct, onSaved }: Props) {
  const [status, setStatus] = useState("");
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const isEdit = Boolean(initialProduct?._id);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setUploading(true);
    setStatus("Saving...");
    
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(isEdit ? `/api/products/${initialProduct?._id}` : "/api/products", {
        method: isEdit ? "PUT" : "POST",
        body: formData
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        setStatus(data?.message || "Could not save product.");
        return;
      }

      setStatus("Saved successfully.");
      onSaved?.();
    } catch (error) {
      console.error("Save error:", error);
      setStatus("Could not save product. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files || []);
    setSelectedImages(files.map((file) => file.name));
  }

  return (
    <>
      <style>{`
        .product-form {
          background: #fffdf8;
          padding: 28px 32px;
          border: 1px solid rgba(36, 26, 21, 0.06);
          border-radius: 2px;
          display: grid;
          gap: 18px;
          max-width: 720px;
          margin: 0 auto;
        }

        .product-form .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .product-form .form-group {
          display: grid;
          gap: 4px;
        }

        .product-form label {
          font-family: "Jost", sans-serif;
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #6b5f54;
        }

        .product-form input,
        .product-form textarea {
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

        .product-form input:focus,
        .product-form textarea:focus {
          outline: none;
          border-color: #b9862f;
          box-shadow: 0 0 0 3px rgba(185, 134, 47, 0.06);
        }

        .product-form textarea {
          resize: vertical;
          min-height: 80px;
        }

        .product-form .checkbox-group {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: "Jost", sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: #241a15;
        }

        .product-form .checkbox-group input[type="checkbox"] {
          width: 18px;
          height: 18px;
          accent-color: #b9862f;
          cursor: pointer;
          flex-shrink: 0;
        }

        .product-form .file-input-wrapper {
          position: relative;
          display: grid;
          gap: 6px;
        }

        .product-form .file-input-wrapper input[type="file"] {
          padding: 8px;
          border: 1px dashed rgba(36, 26, 21, 0.15);
          background: rgba(255, 253, 248, 0.4);
          cursor: pointer;
        }

        .product-form .file-input-wrapper input[type="file"]:hover {
          border-color: #b9862f;
        }

        .product-form .file-list {
          font-family: "Jost", sans-serif;
          font-size: 12px;
          font-weight: 300;
          color: #6b5f54;
          margin: 0;
          padding: 6px 0;
        }

        .product-form .file-list .file-name {
          display: inline-block;
          background: rgba(185, 134, 47, 0.08);
          padding: 2px 10px;
          border-radius: 2px;
          margin: 2px 4px 2px 0;
          color: #b9862f;
          font-size: 11px;
        }

        .product-form .submit-btn {
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
          margin-top: 8px;
        }

        .product-form .submit-btn:hover {
          background: #6d1220;
          border-color: #6d1220;
          transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(67, 11, 18, 0.15);
        }

        .product-form .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .product-form .status-message {
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

        .product-form .status-message.error {
          color: #b91c1c;
          background: rgba(185, 28, 28, 0.05);
          border-left-color: #b91c1c;
        }

        .product-form .image-preview {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 6px;
        }

        .product-form .image-preview .preview-item {
          width: 60px;
          height: 60px;
          border-radius: 4px;
          overflow: hidden;
          border: 1px solid rgba(36, 26, 21, 0.08);
          position: relative;
        }

        .product-form .image-preview .preview-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 600px) {
          .product-form {
            padding: 20px;
          }
          .product-form .form-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }
      `}</style>

      <form onSubmit={handleSubmit} className="product-form" encType="multipart/form-data">
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input 
              id="category"
              name="category" 
              required 
              defaultValue={initialProduct?.category} 
              placeholder="e.g., Textiles, Pottery, Jewelry"
            />
          </div>
          <div className="form-group">
            <label htmlFor="color">Color</label>
            <input 
              id="color"
              name="color" 
              defaultValue={initialProduct?.color} 
              placeholder="e.g., Natural, Indigo, Maroon"
            />
          </div>
        </div>

        {/* Hidden fields for existing images */}
        {initialProduct?.images?.map((image) => (
          <input key={image} type="hidden" name="existingImages" value={image} />
        ))}

        {/* Show existing images preview */}
        {initialProduct?.images && initialProduct.images.length > 0 && (
          <div className="form-group">
            <label>Current Images</label>
            <div className="image-preview">
              {initialProduct.images.map((img, idx) => (
                <div key={idx} className="preview-item">
                  <Image src={img} alt={`Product ${idx + 1}`} fill style={{ objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="form-group file-input-wrapper">
          <label>Add New Images</label>
          <input 
            type="file" 
            name="images" 
            accept="image/*" 
            multiple 
            onChange={handleImageChange} 
          />
          {selectedImages.length > 0 && (
            <p className="file-list">
              Selected: {selectedImages.map((name) => (
                <span key={name} className="file-name">{name}</span>
              ))}
            </p>
          )}
          {isEdit && initialProduct?.images?.length ? (
            <p className="file-list" style={{ color: '#8a7a6b' }}>
              Current images will be kept. Choose new files to add more.
            </p>
          ) : null}
        </div>

        <div className="checkbox-group">
          <input 
            type="checkbox" 
            name="inStock" 
            id="inStock"
            defaultChecked={initialProduct?.inStock ?? true} 
          />
          <label htmlFor="inStock">In stock</label>
        </div>

        <div className="checkbox-group">
          <input 
            type="checkbox" 
            name="isFeatured" 
            id="isFeatured"
            defaultChecked={initialProduct?.isFeatured ?? false} 
          />
          <label htmlFor="isFeatured">Featured product</label>
        </div>

        <button 
          className="submit-btn" 
          type="submit"
          disabled={uploading}
        >
          {uploading ? "Saving..." : (isEdit ? "Update Product" : "Create Product")}
        </button>

        {status && (
          <p className={`status-message ${status.includes('Could not') || status.includes('error') ? 'error' : ''}`}>
            {status}
          </p>
        )}
      </form>
    </>
  );
}