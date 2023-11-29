import { Router } from 'express';
import * as emotionController from '../controllers/emotion';
import { getById, updateById, deleteById, createOne, getList } from './methods';

const emotionsRouter = Router();

emotionsRouter.get(':/id', getById(emotionController));

emotionsRouter.put('/:id', updateById(emotionController));

emotionsRouter.delete('/:id', deleteById(emotionController));

emotionsRouter.post('/', createOne(emotionController));

emotionsRouter.get('/', getList(emotionController));

export default {
  path: '/emotions',
  router: emotionsRouter,
};

