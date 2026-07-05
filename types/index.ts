export type Product = {
  _id?: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  longDescription?: string;
  images: string[];
  color?: string;
  inStock: boolean;
  isFeatured: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type Enquiry = {
  _id?: string;
  productId?: string;
  productName: string;
  customerName: string;
  email: string;
  phone?: string;
  message?: string;
  status: "new" | "contacted" | "closed";
  createdAt?: string;
  updatedAt?: string;
};
