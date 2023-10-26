import { Product } from '../../interfaces/product.interface';
import { ProductOutput } from '../../../db/models/Product';

/**
 * We use this function to rename the properties of the ProductOutput object
 * to match the Product interface required by the client application.
 */
export const toProduct = (product: ProductOutput): Product => {
  return {
    id: product.id,
    productName: product.productName,
    headline: product.headline,
    min: product.min,
    max: product.max,
    baseRecipePrice: product.baseRecipePrice,
    shippingPrice: product.shippingPrice,
    created_at: product.created_at,
    updated_at: product.updated_at,
    deleted_at: product.deleted_at,
    recipes: product.recipes,
  };
};
