import { Recipe } from '../models';
import { GetAllRecipesFilters } from './types';
import { RecipeInput, RecipeOutput } from '../models/Recipe';
import { ERROR_MESSAGES, HTTP_CODES } from '../../api/utils/constants';

// Data Access Layer

export const create = async (payload: RecipeInput): Promise<RecipeOutput> => {
  const recipe = await Recipe.create(payload);
  return recipe;
};

export const update = async (id: string, payload: Partial<RecipeInput>): Promise<RecipeOutput> => {
  const recipe = await Recipe.findByPk(id);
  if (!recipe) {
    // @todo throw custom error
    throw new Error(ERROR_MESSAGES[HTTP_CODES.NOT_FOUND]);
  }
  const updatedRecipe = await (recipe as Recipe).update(payload);
  return updatedRecipe;
};

export const getById = async (id: string): Promise<RecipeOutput> => {
  const recipe = await Recipe.findByPk(id);
  if (!recipe) {
    throw new Error(ERROR_MESSAGES[HTTP_CODES.NOT_FOUND]);
  }
  return recipe;
};

export const deleteById = async (id: string): Promise<boolean> => {
  const deletedRecipeCount = await Recipe.destroy({
    where: { id },
  });
  return !!deletedRecipeCount;
};

export const getAll = async (filters?: GetAllRecipesFilters): Promise<RecipeOutput[]> => {
  return Recipe.findAll({
    where: {},
    include: ['product'],
    ...((filters?.isDeleted || filters?.includeDeleted) && { paranoid: true }),
  });
};