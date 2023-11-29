import * as service from '../../../db/services/EmotionService';
import { CreateEmotionDTO, UpdateEmotionDTO, FilterEmotionsDTO } from '../../dto/emotion';
import { Emotion } from '../../interfaces/emotion.interface';
import * as mapper from './mappers';

export const create = async(payload: CreateEmotionDTO): Promise<Emotion> => {
  return mapper.toEmotion(await service.create(payload));
};
export const update = async (id: string, payload: UpdateEmotionDTO): Promise<Emotion> => {
  return mapper.toEmotion(await service.update(id, payload));
};
export const getById = async (id: string): Promise<Emotion> => {
  return mapper.toEmotion(await service.getById(id));
};
export const deleteById = async(id: string): Promise<boolean> => {
  const isDeleted = await service.deleteById(id);
  return isDeleted;
};
export const getAll = async(filters: FilterEmotionsDTO): Promise<Emotion[]> => {
  return (await service.getAll(filters)).map(mapper.toEmotion);
};