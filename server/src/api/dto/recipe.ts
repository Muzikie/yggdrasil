import { Optional } from 'sequelize/types';
import { CreateProductDTO } from './product';

// Data Transfer Objects

export type CreateRecipeDTO = {
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
  product?: CreateProductDTO
}

export type UpdateRecipeDTO = Optional<CreateRecipeDTO, 'selectionLimit'>

export type FilterRecipesDTO = {
  isDeleted?: boolean
  includeDeleted?: boolean
}