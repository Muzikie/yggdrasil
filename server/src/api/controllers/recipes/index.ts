import * as service from '../../../db/services/RecipeService';
import { CreateRecipeDTO, UpdateRecipeDTO, FilterRecipesDTO } from '../../dto/recipe';
import { Recipe } from '../../interfaces/recipe.interface';
import * as mapper from './mappers';

export const create = async(payload: CreateRecipeDTO): Promise<Recipe> => {
  return mapper.toRecipe(await service.create(payload));
};
export const update = async (id: string, payload: UpdateRecipeDTO): Promise<Recipe> => {
  return mapper.toRecipe(await service.update(id, payload));
};
export const getById = async (id: string): Promise<Recipe> => {
  return mapper.toRecipe(await service.getById(id));
};
export const deleteById = async(id: string): Promise<boolean> => {
  const isDeleted = await service.deleteById(id);
  return isDeleted;
};
export const getAll = async(filters: FilterRecipesDTO): Promise<Recipe[]> => {
  return (await service.getAll(filters)).map(mapper.toRecipe);
};