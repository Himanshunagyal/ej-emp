"use client";

import { useRouter } from "next/navigation";
import { ProductForm } from "@/components/admin/ProductForm";
import { LogoutButton } from "@/components/admin/LogoutButton";

export default function NewProductPage() {
  const router = useRouter();

  return (
    <section className="page-section">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <h1>Add Product</h1>
          <LogoutButton />
        </div>
        <ProductForm onSaved={() => router.push("/admin/products")} />
      </div>
    </section>
  );
}
