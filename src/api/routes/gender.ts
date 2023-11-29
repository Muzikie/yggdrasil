import { Router } from 'express';
import * as genderController from '../controllers/gender';
import { getById, updateById, deleteById, createOne, getList } from './methods';

const gendersRouter = Router();

gendersRouter.get(':/id', getById(genderController));

gendersRouter.put('/:id', updateById(genderController));

gendersRouter.delete('/:id', deleteById(genderController));

gendersRouter.post('/', createOne(genderController));

gendersRouter.get('/', getList(genderController));

export default {
  path: '/genders',
  router: gendersRouter,
};
