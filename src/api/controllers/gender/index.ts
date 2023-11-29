import * as service from '../../../db/services/GenderService';
import { CreateGenderDTO, UpdateGenderDTO, FilterGendersDTO } from '../../dto/gender';
import { Gender } from '../../interfaces/gender.interface';
import * as mapper from './mappers';

export const create = async(payload: CreateGenderDTO): Promise<Gender> => {
  return mapper.toGender(await service.create(payload));
};
export const update = async (id: string, payload: UpdateGenderDTO): Promise<Gender> => {
  return mapper.toGender(await service.update(id, payload));
};
export const getById = async (id: string): Promise<Gender> => {
  return mapper.toGender(await service.getById(id));
};
export const deleteById = async(id: string): Promise<boolean> => {
  const isDeleted = await service.deleteById(id);
  return isDeleted;
};
export const getAll = async(filters: FilterGendersDTO): Promise<Gender[]> => {
  return (await service.getAll(filters)).map(mapper.toGender);
};