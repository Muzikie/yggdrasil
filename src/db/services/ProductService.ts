import * as productDal from '../dal/Product';
import { GetAllProductsFilters } from '../dal/types';
import { ProductInput, ProductOutput } from '../models/Product';

export const create = (payload: ProductInput): Promise<ProductOutput> => {
  return productDal.create(payload);
};
export const update = (id: string, payload: Partial<ProductInput>): Promise<ProductOutput> => {
  return productDal.update(id, payload);
};
export const getById = (id: string): Promise<ProductOutput> => {
  return productDal.getById(id);
};
export const deleteById = (id: string): Promise<boolean> => {
  return productDal.deleteById(id);
};
export const getAll = (filters: GetAllProductsFilters): Promise<ProductOutput[]> => {
  return productDal.getAll(filters);
};
