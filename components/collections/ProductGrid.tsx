"use client";

import { useEffect, useMemo, useState } from "react";
import { categories, sampleProducts } from "@/lib/sample-data";
import { Product } from "@/types";
import { CategoryFilter } from "./CategoryFilter";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";

export function ProductGrid() {
  const [products, setProducts] = useState<Product[]>(sampleProducts);
  const [category, setCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setProducts(data);
        setIsLoading(false);
      })
      .catch(() => {
        setProducts(sampleProducts);
        setIsLoading(false);
      });
  }, []);

  const categoryList = useMemo(
    () => Array.from(new Set([...categories, ...products.map((product) => product.category)])),
    [products]
  );

  const filteredProducts = category === "All" 
    ? products 
    : products.filter((product) => product.category === category);

  return (
    <>
      <style>{`
        .product-grid-wrapper {
          display: grid;
          gap: 32px;
          width: 100%;
        }

        .product-grid-header {
          display: grid;
          gap: 12px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(36, 26, 21, 0.06);
        }

        .product-grid-header .filter-container {
          width: 100%;
          margin-bottom: 0;
        }

        .product-grid-results {
          font-family: "Jost", sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: #6b5f54;
          display: flex;
          align-items: center;
          gap: 8px;
          justify-self: center;
        }

        .product-grid-results .count {
          font-weight: 500;
          color: #241a15;
        }

        .product-grid-results .dot {
          color: #b9862f;
          opacity: 0.3;
          font-size: 6px;
        }

        .product-grid-empty {
          text-align: center;
          padding: 60px 20px;
          background: rgba(255, 253, 248, 0.4);
          border: 1px solid rgba(36, 26, 21, 0.06);
          border-radius: 2px;
        }

        .product-grid-empty .empty-icon {
          font-size: 40px;
          margin-bottom: 12px;
          display: block;
        }

        .product-grid-empty h4 {
          font-family: "Playfair Display", "Cormorant Garamond", Georgia, serif;
          font-size: 22px;
          font-weight: 600;
          color: #241a15;
          margin: 0 0 8px;
        }

        .product-grid-empty p {
          font-family: "Jost", sans-serif;
          font-size: 15px;
          font-weight: 300;
          color: #6b5f54;
          margin: 0;
        }

        .product-grid-loading {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 360px));
          justify-content: center;
          gap: 26px;
        }

        .product-grid-loading .skeleton {
          background: #ece0c8;
          border: 1px solid rgba(36, 26, 21, 0.06);
          aspect-ratio: 4 / 3;
          animation: pulse 1.5s ease-in-out infinite;
        }

        .product-grid-loading .skeleton-text {
          height: 12px;
          background: #ece0c8;
          margin: 12px 0;
          border-radius: 2px;
          animation: pulse 1.5s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .product-grid-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 360px));
          justify-content: center;
          gap: 26px;
        }

        @media (max-width: 860px) {
          .product-grid-header {
            gap: 8px;
          }
          .product-grid-cards {
            grid-template-columns: repeat(auto-fit, minmax(240px, 360px));
            gap: 20px;
          }
        }

        @media (max-width: 600px) {
          .product-grid-cards {
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
            gap: 14px;
          }
          .product-grid-wrapper {
            gap: 20px;
          }
          .product-grid-empty {
            padding: 40px 16px;
          }
          .product-grid-empty h4 {
            font-size: 18px;
          }
        }

        @media (max-width: 420px) {
          .product-grid-cards {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
        }
      `}</style>

      <div className="product-grid-wrapper">
        {/* Header with filter and results count */}
        <div className="product-grid-header">
          <CategoryFilter 
            categories={categoryList} 
            selectedCategory={category} 
            onChange={setCategory} 
          />
          <div className="product-grid-results">
            <span className="count">{filteredProducts.length}</span>
            <span>product{filteredProducts.length !== 1 ? 's' : ''}</span>
            <span className="dot">◆</span>
            <span>{category === 'All' ? 'All categories' : category}</span>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="product-grid-loading">
            {[...Array(6)].map((_, i) => (
              <div key={i}>
                <div className="skeleton" />
                <div className="skeleton-text" style={{ width: '60%' }} />
                <div className="skeleton-text" style={{ width: '40%' }} />
              </div>
            ))}
          </div>
        )}

        {/* Product Grid */}
        {!isLoading && (
          <>
            {filteredProducts.length === 0 ? (
              <div className="product-grid-empty">
                <span className="empty-icon">🔍</span>
                <h4>No products found</h4>
                <p>We couldn't find any products in the "{category}" category.</p>
              </div>
            ) : (
              <div className="product-grid-cards">
                {filteredProducts.map((product, index) => (
                  <ProductCard 
                    key={product._id || `${product.category}-${index}`} 
                    product={product} 
                    onView={setSelectedProduct} 
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
}
