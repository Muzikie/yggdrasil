import { Recipe } from './recipe.interface';

// Typescript Interfaces

export interface Product {
  id: string;
  productName: string;
  headline: string;
  min: number;
  max: number;
  baseRecipePrice: number;
  shippingPrice: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  recipes?: Recipe[];
}