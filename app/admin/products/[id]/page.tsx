"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { ProductForm } from "@/components/admin/ProductForm";
import { LogoutButton } from "@/components/admin/LogoutButton";
import { Product } from "@/types";

export default function EditProductPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`/api/products/${params.id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [params.id]);

  return (
    <section className="page-section">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <h1>Edit Product</h1>
          <LogoutButton />
        </div>
        {product ? <ProductForm initialProduct={product} onSaved={() => router.push("/admin/products")} /> : <p>Loading...</p>}
      </div>
    </section>
  );
}
