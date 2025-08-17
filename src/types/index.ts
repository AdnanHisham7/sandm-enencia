export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  images: string[];
  sketchImages: string[];
  specifications: string[];
  category: Category;
  price?: number;
  featured?: boolean;
  createdAt: Date;
}

export interface FilterState {
  category: string;
  search: string;
}