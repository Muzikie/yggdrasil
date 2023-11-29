import * as emotionDal from '../dal/Emotion';
import { GetAllEmotionsFilters } from '../dal/types';
import { EmotionInput, EmotionOutput } from '../models/Emotion';

export const create = (payload: EmotionInput): Promise<EmotionOutput> => {
  return emotionDal.create(payload);
};
export const update = (id: string, payload: Partial<EmotionInput>): Promise<EmotionOutput> => {
  return emotionDal.update(id, payload);
};
export const getById = (id: string): Promise<EmotionOutput> => {
  return emotionDal.getById(id);
};
export const deleteById = (id: string): Promise<boolean> => {
  return emotionDal.deleteById(id);
};
export const getAll = (filters: GetAllEmotionsFilters): Promise<EmotionOutput[]> => {
  return emotionDal.getAll(filters);
};
