import { Product } from '../models';
import { GetAllProductsFilters } from './types';
import { ProductInput, ProductOutput } from '../models/Product';
import { ERROR_MESSAGES, HTTP_CODES } from '../../api/utils/constants';

// Data Access Layer

export const create = async (payload: ProductInput): Promise<ProductOutput> => {
  const product = await Product.create(payload);
  return product;
};

export const update = async (id: string, payload: Partial<ProductInput>): Promise<ProductOutput> => {
  const product = await Product.findByPk(id);
  if (!product) {
    // @todo throw custom error
    throw new Error(ERROR_MESSAGES[HTTP_CODES.NOT_FOUND]);
  }
  const updatedProduct = await (product as Product).update(payload);
  return updatedProduct;
};

export const getById = async (id: string): Promise<ProductOutput> => {
  const product = await Product.findByPk(id);
  if (!product) {
    throw new Error(ERROR_MESSAGES[HTTP_CODES.NOT_FOUND]);
  }
  return product;
};

export const deleteById = async (id: string): Promise<boolean> => {
  const deletedProductCount = await Product.destroy({
    where: { id },
  });
  return !!deletedProductCount;
};

export const getAll = async (filters?: GetAllProductsFilters): Promise<ProductOutput[]> => {
  return Product.findAll({
    where: {},
    include: ['recipes'],
    ...((filters?.isDeleted || filters?.includeDeleted) && { paranoid: true }),
  });
};