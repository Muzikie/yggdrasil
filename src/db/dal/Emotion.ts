import { Emotion } from '../models';
import { GetAllEmotionsFilters } from './types';
import { EmotionInput, EmotionOutput } from '../models/Emotion';
import { ERROR_MESSAGES, HTTP_CODES } from '../../api/utils/constants';

// Data Access Layer

export const create = async (payload: EmotionInput): Promise<EmotionOutput> => {
  const emotion = await Emotion.create(payload);
  return emotion;
};

export const update = async (id: string, payload: Partial<EmotionInput>): Promise<EmotionOutput> => {
  const emotion = await Emotion.findByPk(id);
  if (!emotion) {
    // @todo throw custom error
    throw new Error(ERROR_MESSAGES[HTTP_CODES.NOT_FOUND]);
  }
  const updatedEmotion = await (emotion as Emotion).update(payload);
  return updatedEmotion;
};

export const getById = async (id: string): Promise<EmotionOutput> => {
  const emotion = await Emotion.findByPk(id);
  if (!emotion) {
    throw new Error(ERROR_MESSAGES[HTTP_CODES.NOT_FOUND]);
  }
  return emotion;
};

export const deleteById = async (id: string): Promise<boolean> => {
  const deletedEmotionCount = await Emotion.destroy({
    where: { id },
  });
  return !!deletedEmotionCount;
};

export const getAll = async (filters?: GetAllEmotionsFilters): Promise<EmotionOutput[]> => {
  return Emotion.findAll({
    where: {},
    // include: ['gender'],
    ...((filters?.isDeleted || filters?.includeDeleted) && { paranoid: true }),
  });
};