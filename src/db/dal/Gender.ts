import { Gender } from '../models';
import { GetAllGendersFilters } from './types';
import { GenderInput, GenderOutput } from '../models/Gender';
import { ERROR_MESSAGES, HTTP_CODES } from '../../api/utils/constants';

// Data Access Layer

export const create = async (payload: GenderInput): Promise<GenderOutput> => {
  const gender = await Gender.create(payload);
  return gender;
};

export const update = async (id: string, payload: Partial<GenderInput>): Promise<GenderOutput> => {
  const gender = await Gender.findByPk(id);
  if (!gender) {
    // @todo throw custom error
    throw new Error(ERROR_MESSAGES[HTTP_CODES.NOT_FOUND]);
  }
  const updatedGender = await (gender as Gender).update(payload);
  return updatedGender;
};

export const getById = async (id: string): Promise<GenderOutput> => {
  const gender = await Gender.findByPk(id);
  if (!gender) {
    throw new Error(ERROR_MESSAGES[HTTP_CODES.NOT_FOUND]);
  }
  return gender;
};

export const deleteById = async (id: string): Promise<boolean> => {
  const deletedGenderCount = await Gender.destroy({
    where: { id },
  });
  return !!deletedGenderCount;
};

export const getAll = async (filters?: GetAllGendersFilters): Promise<GenderOutput[]> => {
  return Gender.findAll({
    where: {},
    // include: ['emotions'],
    ...((filters?.isDeleted || filters?.includeDeleted) && { paranoid: true }),
  });
};