import { Recipe } from '../../interfaces/recipe.interface';
import { RecipeOutput } from '../../../db/models/Recipe';

/**
 * We use this function to rename the properties of the RecipeOutput object
 * to match the Recipe interface required by the client application.
 */
export const toRecipe = (recipe: RecipeOutput): Recipe => {
  return {
    id: recipe.id,
    name: recipe.name,
    product_id: recipe.product_id,
    slug: recipe.slug,
    headline: recipe.headline,
    image: recipe.image,
    selected: recipe.selected,
    selectionLimit: recipe.selectionLimit,
    extraCharge: recipe.extraCharge,
    yields: recipe.yields,
    created_at: recipe.created_at,
    updated_at: recipe.updated_at,
    deleted_at: recipe.deleted_at,
    product: recipe.product,
  };
};
