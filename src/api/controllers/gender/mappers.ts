import { Gender } from '../../interfaces/gender.interface';
import { GenderOutput } from '../../../db/models/Gender';

/**
 * We use this function to rename the properties of the GenderOutput object
 * to match the Gender interface required by the client application.
 */
export const toGender = (gender: GenderOutput): Gender => ({
  id: gender.id,
  name: gender.name,
  created_at: gender.created_at,
  updated_at: gender.updated_at,
  deleted_at: gender.deleted_at,
});
