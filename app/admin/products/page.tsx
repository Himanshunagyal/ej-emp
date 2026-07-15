"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoutButton } from "@/components/admin/LogoutButton";
import { Product } from "@/types";

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function loadProducts() {
    setIsLoading(true);
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to load products:", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteProduct(id?: string) {
    if (!id || !confirm("Delete this product?")) return;
    try {
      await fetch(`/api/products/${id}`, { method: "DELETE" });
      loadProducts();
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <style>{`
        .admin-products {
          background: linear-gradient(180deg, #faf6ee 0%, #f6f0e4 40%, #ece2cd 100%);
          padding: 40px 24px 80px;
          min-height: calc(100vh - 200px);
          position: relative;
        }

        .admin-products .container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .admin-header {
          margin-bottom: 32px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(36, 26, 21, 0.06);
          position: relative;
        }

        .admin-header::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 80px;
          height: 2px;
          background: linear-gradient(90deg, #b9862f, #ddb673);
          opacity: 0.5;
        }

        .admin-header-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 16px;
        }

        .admin-header-left h1 {
          font-family: "Playfair Display", "Cormorant Garamond", Georgia, serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 600;
          color: #241a15;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .admin-header-left .subtitle {
          font-family: "Jost", sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #6b5f54;
          margin: 4px 0 0;
        }

        .admin-header-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          align-items: center;
        }

        .admin-btn {
          font-family: "Jost", sans-serif;
          font-size: 11.5px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 12px 28px;
          border-radius: 2px;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          border: 1px solid transparent;
        }

        .admin-btn-primary {
          background: #4d0e17;
          color: #faf6ee;
          border-color: #4d0e17;
        }

        .admin-btn-primary:hover {
          background: #6d1220;
          border-color: #6d1220;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(67, 11, 18, 0.2);
        }

        .admin-btn-primary svg {
          width: 16px;
          height: 16px;
          fill: currentColor;
        }

        .admin-logout-btn {
          font-family: "Jost", sans-serif;
          font-size: 11.5px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 12px 28px;
          border-radius: 2px;
          transition: all 0.3s ease;
          cursor: pointer;
          border: 1px solid rgba(36, 26, 21, 0.12);
          background: transparent;
          color: #6b5f54;
        }

        .admin-logout-btn:hover {
          border-color: #b91c1c;
          color: #b91c1c;
          background: rgba(185, 28, 28, 0.04);
        }

        .admin-table-wrapper {
          background: #fffdf8;
          border: 1px solid rgba(36, 26, 21, 0.06);
          border-radius: 2px;
          overflow: hidden;
          overflow-x: auto;
        }

        .admin-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 500px;
        }

        .admin-table thead {
          background: #f6f0e4;
        }

        .admin-table th {
          font-family: "Jost", sans-serif;
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #6b5f54;
          text-align: left;
          padding: 16px 20px;
          border-bottom: 1px solid rgba(36, 26, 21, 0.06);
        }

        .admin-table td {
          font-family: "Jost", sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #241a15;
          padding: 16px 20px;
          border-bottom: 1px solid rgba(36, 26, 21, 0.04);
          vertical-align: middle;
        }

        .admin-table tr:last-child td {
          border-bottom: none;
        }

        .admin-table tr:hover td {
          background: rgba(185, 134, 47, 0.02);
        }

        .admin-table .product-id {
          font-weight: 400;
          color: #241a15;
          font-size: 13px;
          font-family: "Jost", sans-serif;
        }

        .admin-table .product-category {
          color: #b9862f;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .admin-table .product-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 400;
        }

        .admin-table .product-status .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          display: inline-block;
        }

        .admin-table .product-status .dot.in-stock {
          background: #2d6a4f;
        }

        .admin-table .product-status .dot.made-to-order {
          background: #b9862f;
        }

        .admin-table .product-actions {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .admin-table .action-btn {
          font-family: "Jost", sans-serif;
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 2px;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          border: 1px solid transparent;
          background: transparent;
        }

        .admin-table .action-btn-edit {
          color: #b9862f;
          border-color: rgba(185, 134, 47, 0.2);
        }

        .admin-table .action-btn-edit:hover {
          background: rgba(185, 134, 47, 0.08);
          border-color: #b9862f;
        }

        .admin-table .action-btn-delete {
          color: #b91c1c;
          border-color: rgba(185, 28, 28, 0.15);
        }

        .admin-table .action-btn-delete:hover {
          background: rgba(185, 28, 28, 0.08);
          border-color: #b91c1c;
        }

        .admin-empty {
          text-align: center;
          padding: 60px 20px;
          color: #6b5f54;
        }

        .admin-empty .empty-icon {
          font-size: 40px;
          margin-bottom: 12px;
          display: block;
        }

        .admin-empty h4 {
          font-family: "Playfair Display", serif;
          font-size: 20px;
          font-weight: 600;
          color: #241a15;
          margin: 0 0 8px;
        }

        .admin-empty p {
          font-family: "Jost", sans-serif;
          font-size: 14px;
          font-weight: 300;
          margin: 0 0 16px;
        }

        .admin-loading {
          text-align: center;
          padding: 60px 20px;
          color: #6b5f54;
          font-family: "Jost", sans-serif;
          font-size: 14px;
        }

        .admin-loading .spinner {
          width: 32px;
          height: 32px;
          border: 2px solid rgba(185, 134, 47, 0.15);
          border-top-color: #b9862f;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin: 0 auto 12px;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .admin-products {
            padding: 24px 16px 60px;
          }

          .admin-header-top {
            flex-direction: column;
            align-items: stretch;
            gap: 16px;
          }

          .admin-header-actions {
            flex-direction: column;
            width: 100%;
          }

          .admin-header-actions .admin-btn,
          .admin-header-actions .admin-logout-btn {
            justify-content: center;
            width: 100%;
          }

          .admin-table th,
          .admin-table td {
            padding: 12px 14px;
          }

          .admin-table .product-actions {
            flex-direction: column;
            gap: 4px;
          }

          .admin-table .action-btn {
            text-align: center;
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .admin-products {
            padding: 16px 12px 48px;
          }

          .admin-table th,
          .admin-table td {
            padding: 10px 12px;
            font-size: 12px;
          }

          .admin-header-left h1 {
            font-size: 24px;
          }

          .admin-table {
            min-width: 400px;
          }
        }
      `}</style>

      <section className="admin-products">
        <div className="container">
          {/* Header */}
          <div className="admin-header">
            <div className="admin-header-top">
              <div className="admin-header-left">
                <h1>Products</h1>
                <p className="subtitle">{products.length} products in your collection</p>
              </div>
              <div className="admin-header-actions">
                <Link href="/admin/products/new" className="admin-btn admin-btn-primary">
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                  </svg>
                  Add Product
                </Link>
                <button className="admin-logout-btn" type="button">
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="admin-table-wrapper">
            {isLoading ? (
              <div className="admin-loading">
                <div className="spinner" />
                <p>Loading products...</p>
              </div>
            ) : products.length === 0 ? (
              <div className="admin-empty">
                <span className="empty-icon">🛋️</span>
                <h4>No products yet</h4>
                <p>Start by adding your first product to the collection.</p>
                <Link href="/admin/products/new" className="admin-btn admin-btn-primary">
                  Add Product
                </Link>
              </div>
            ) : (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={product._id}>
                      <td className="product-id">#{String(index + 1).padStart(3, '0')}</td>
                      <td className="product-category">{product.category}</td>
                      <td>
                        <span className="product-status">
                          <span className={`dot ${product.inStock ? 'in-stock' : 'made-to-order'}`} />
                          {product.inStock ? 'In stock' : 'Made to order'}
                        </span>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <div className="product-actions" style={{ justifyContent: 'flex-end' }}>
                          <Link 
                            href={`/admin/products/${product._id}`} 
                            className="action-btn action-btn-edit"
                          >
                            Edit
                          </Link>
                          <button 
                            className="action-btn action-btn-delete" 
                            type="button" 
                            onClick={() => deleteProduct(product._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </section>
    </>
  );
}