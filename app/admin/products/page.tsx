"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoutButton } from "@/components/admin/LogoutButton";
import { Product } from "@/types";

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  async function loadProducts() {
    const response = await fetch("/api/products");
    const data = await response.json();
    setProducts(Array.isArray(data) ? data : []);
  }

  async function deleteProduct(id?: string) {
    if (!id || !confirm("Delete this product?")) return;
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    loadProducts();
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <section className="page-section">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <h1>Products</h1>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link className="btn" href="/admin/products/new">Add Product</Link>
            <LogoutButton />
          </div>
        </div>
        <div className="card" style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 720 }}>
            <thead><tr style={{ background: "#FFF8F0" }}><th>Name</th><th>Category</th><th>Stock</th><th>Actions</th></tr></thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id} style={{ borderTop: "1px solid #ead8c5" }}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.inStock ? "In stock" : "Made to order"}</td>
                  <td style={{ display: "flex", gap: 8 }}>
                    <Link className="btn ghost" href={`/admin/products/${product._id}`}>Edit</Link>
                    <button className="btn danger" type="button" onClick={() => deleteProduct(product._id)}>Delete</button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && <tr><td colSpan={4}>No products yet.</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
      <style jsx>{`
        th, td { text-align: left; padding: 14px; }
      `}</style>
    </section>
  );
}
