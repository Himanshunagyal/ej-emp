"use client";

import Image from "next/image";
import { Product } from "@/types";
import { getSafeImageSrc } from "@/lib/image";

type Props = {
  product: Product;
  onView: (product: Product) => void;
};

export function ProductCard({ product, onView }: Props) {
  const image = getSafeImageSrc(product.images?.[0]);

  return (
    <>
      <style>{`
        .product-card {
          position: relative;
          overflow: hidden;
          background: #fffdf8;
          border: 1px solid rgba(36, 26, 21, 0.08);
          display: grid;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
        }

        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(36, 26, 21, 0.1);
        }

        .product-card:hover .product-image-wrapper img {
          transform: scale(1.05);
        }

        .product-image-wrapper {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #ece0c8;
        }

        .product-image-wrapper img {
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .product-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, 
            rgba(67, 11, 18, 0.05) 0%,
            rgba(67, 11, 18, 0.2) 60%,
            rgba(67, 11, 18, 0.4) 100%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 20px;
        }

        .product-card:hover .product-overlay {
          opacity: 1;
        }

        .product-overlay-btn {
          font-family: "Jost", sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #faf6ee;
          border: 1px solid rgba(255, 253, 248, 0.2);
          padding: 8px 20px;
          backdrop-filter: blur(4px);
          background: rgba(36, 26, 21, 0.4);
          border-radius: 2px;
          transform: translateY(10px);
          transition: all 0.4s ease;
        }

        .product-card:hover .product-overlay-btn {
          transform: translateY(0);
        }

        .product-details {
          padding: 20px 24px 24px;
          display: grid;
          gap: 8px;
        }

        .product-category {
          font-family: "Jost", sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #b9862f;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .product-category::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(185, 134, 47, 0.2), transparent);
        }

        .product-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-top: 12px;
          border-top: 1px solid rgba(36, 26, 21, 0.04);
          margin-top: 4px;
        }

        .product-view-btn {
          font-family: "Jost", sans-serif;
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #b9862f;
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .product-view-btn::after {
          content: '→';
          transition: transform 0.3s ease;
        }

        .product-view-btn:hover {
          color: #4d0e17;
        }

        .product-view-btn:hover::after {
          transform: translateX(4px);
        }

        @media (max-width: 600px) {
          .product-details {
            padding: 16px 18px 20px;
          }
        }
      `}</style>

      <article 
        className="product-card" 
        onClick={() => onView(product)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onView(product);
          }
        }}
      >
        <div className="product-image-wrapper">
          <Image 
            src={image} 
            alt={product.category} 
            fill 
            sizes="(max-width: 768px) 100vw, 33vw" 
            style={{ objectFit: "cover" }} 
          />
          <div className="product-overlay">
            <span className="product-overlay-btn">View Details</span>
          </div>
        </div>

        <div className="product-details">
          <span className="product-category">{product.category}</span>
          
          <div className="product-footer">
            <button 
              className="product-view-btn" 
              type="button" 
              onClick={(e) => {
                e.stopPropagation();
                onView(product);
              }}
            >
              View Details
            </button>
          </div>
        </div>
      </article>
    </>
  );
}
