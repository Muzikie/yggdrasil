import { Product } from './product.interface';

// Typescript Interfaces

export interface Recipe {
  id: string;
  product_id: string;
  name: string;
  slug: string;
  headline: string;
  image: string;
  selected: number;
  selectionLimit?: number;
  extraCharge: number;
  yields: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  product?: Product;
}
