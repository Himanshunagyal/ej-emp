"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Product } from "@/types";

type Props = {
  initialProduct?: Product;
  onSaved?: () => void;
};

export function ProductForm({ initialProduct, onSaved }: Props) {
  const [status, setStatus] = useState("");
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const isEdit = Boolean(initialProduct?._id);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Saving...");
    const formData = new FormData(event.currentTarget);

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
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    setSelectedImages(Array.from(event.target.files || []).map((file) => file.name));
  }

  return (
    <form onSubmit={handleSubmit} className="card" style={{ padding: 20, display: "grid", gap: 14 }}>
      <div className="grid-auto">
        <div className="field"><label>Name</label><input name="name" required defaultValue={initialProduct?.name} /></div>
        <div className="field"><label>Slug</label><input name="slug" required defaultValue={initialProduct?.slug} /></div>
      </div>
      <div className="grid-auto">
        <div className="field"><label>Category</label><input name="category" required defaultValue={initialProduct?.category} /></div>
        <div className="field"><label>Color</label><input name="color" defaultValue={initialProduct?.color} /></div>
      </div>
      <div className="field"><label>Description</label><textarea name="description" required rows={3} defaultValue={initialProduct?.description} /></div>
      <div className="field"><label>Long Description</label><textarea name="longDescription" rows={5} defaultValue={initialProduct?.longDescription} /></div>
      {initialProduct?.images?.map((image) => (
        <input key={image} type="hidden" name="existingImages" value={image} />
      ))}
      <div className="field">
        <label>Product images</label>
        <input type="file" name="images" accept="image/*" multiple onChange={handleImageChange} />
        {selectedImages.length > 0 && <p className="muted" style={{ margin: 0 }}>{selectedImages.join(", ")}</p>}
        {isEdit && initialProduct?.images?.length ? (
          <p className="muted" style={{ margin: 0 }}>Current images will be kept. Choose new files to add more.</p>
        ) : null}
      </div>
      <label><input type="checkbox" name="inStock" defaultChecked={initialProduct?.inStock ?? true} /> In stock</label>
      <label><input type="checkbox" name="isFeatured" defaultChecked={initialProduct?.isFeatured ?? false} /> Featured product</label>
      <button className="btn" type="submit">{isEdit ? "Update Product" : "Create Product"}</button>
      {status && <p className="muted" style={{ margin: 0 }}>{status}</p>}
    </form>
  );
}
