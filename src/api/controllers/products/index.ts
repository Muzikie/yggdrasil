import * as service from '../../../db/services/ProductService';
import { CreateProductDTO, UpdateProductDTO, FilterProductsDTO } from '../../dto/product';
import { Product } from '../../interfaces/product.interface';
import * as mapper from './mappers';

export const create = async(payload: CreateProductDTO): Promise<Product> => {
  return mapper.toProduct(await service.create(payload));
};
export const update = async (id: string, payload: UpdateProductDTO): Promise<Product> => {
  return mapper.toProduct(await service.update(id, payload));
};
export const getById = async (id: string): Promise<Product> => {
  return mapper.toProduct(await service.getById(id));
};
export const deleteById = async(id: string): Promise<boolean> => {
  const isDeleted = await service.deleteById(id);
  return isDeleted;
};
export const getAll = async(filters: FilterProductsDTO): Promise<Product[]> => {
  return (await service.getAll(filters)).map(mapper.toProduct);
};