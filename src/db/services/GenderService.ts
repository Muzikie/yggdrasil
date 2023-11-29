import * as genderDal from '../dal/Gender';
import { GetAllGendersFilters } from '../dal/types';
import { GenderInput, GenderOutput } from '../models/Gender';

export const create = (payload: GenderInput): Promise<GenderOutput> => {
  return genderDal.create(payload);
};
export const update = (id: string, payload: Partial<GenderInput>): Promise<GenderOutput> => {
  return genderDal.update(id, payload);
};
export const getById = (id: string): Promise<GenderOutput> => {
  return genderDal.getById(id);
};
export const deleteById = (id: string): Promise<boolean> => {
  return genderDal.deleteById(id);
};
export const getAll = (filters: GetAllGendersFilters): Promise<GenderOutput[]> => {
  return genderDal.getAll(filters);
};
