import * as recipeDal from '../dal/Recipe';
import { GetAllRecipesFilters } from '../dal/types';
import { RecipeInput, RecipeOutput } from '../models/Recipe';

export const create = (payload: RecipeInput): Promise<RecipeOutput> => {
  return recipeDal.create(payload);
};
export const update = (id: string, payload: Partial<RecipeInput>): Promise<RecipeOutput> => {
  return recipeDal.update(id, payload);
};
export const getById = (id: string): Promise<RecipeOutput> => {
  return recipeDal.getById(id);
};
export const deleteById = (id: string): Promise<boolean> => {
  return recipeDal.deleteById(id);
};
export const getAll = (filters: GetAllRecipesFilters): Promise<RecipeOutput[]> => {
  return recipeDal.getAll(filters);
};
