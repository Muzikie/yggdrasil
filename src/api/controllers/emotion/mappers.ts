import { Emotion } from '../../interfaces/emotion.interface';
import { EmotionOutput } from '../../../db/models/Emotion';

/**
 * We use this function to rename the properties of the EmotionOutput object
 * to match the Emotion interface required by the client application.
 */
export const toEmotion = (emotion: EmotionOutput): Emotion => ({
  id: emotion.id,
  name: emotion.name,
  created_at: emotion.created_at,
  updated_at: emotion.updated_at,
  deleted_at: emotion.deleted_at,
});
