import { FilterDTO } from '../../dto/types';

export interface Controller<T> {
  create: (payload: Omit<T, 'id'>) => Promise<T>;
  update: (id: string, payload: T) => Promise<T>;
  getById: (id: string) => Promise<T>;
  deleteById: (id: string) => Promise<boolean>;
  getAll: (filters: FilterDTO) => Promise<T[]>;
}