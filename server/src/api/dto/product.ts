import { Optional } from 'sequelize/types';
import { CreateRecipeDTO } from './recipe';

// Data Transfer Objects

export type CreateProductDTO = {
  productName: string;
  headline: string;
  min: number;
  max: number;
  baseRecipePrice: number;
  shippingPrice: number;
  recipes?: CreateRecipeDTO[];
}

export type UpdateProductDTO = Optional<CreateProductDTO, 'productName'>

export type FilterProductsDTO = {
  isDeleted?: boolean
  includeDeleted?: boolean
}
