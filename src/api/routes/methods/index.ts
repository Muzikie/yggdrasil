import { Request, Response } from 'express';
import { ERROR_MESSAGES, HTTP_CODES } from '../../utils/constants';
import { Controller } from './types';

export const getById = <T>(controller: Controller<T>) => async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const result = await controller.getById(id);
    return res.status(HTTP_CODES.OK).send(result);
  } catch (error) {
    res.status(HTTP_CODES.INTERNAL).json({ error: ERROR_MESSAGES[HTTP_CODES.INTERNAL] });
  }
};

export const updateById = <T>(controller: Controller<T>) => async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;

  try {
    const result = await controller.update(id, payload);
    return res.status(201).send(result);
  } catch (error) {
    res.status(HTTP_CODES.INTERNAL).json({ error: ERROR_MESSAGES[HTTP_CODES.INTERNAL] });
  }
};

export const deleteById = <T>(controller: Controller<T>) => async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const result = await controller.deleteById(id);
    return res.status(204).send({
      success: result,
    });
  } catch (error) {
    res.status(HTTP_CODES.INTERNAL).json({ error: ERROR_MESSAGES[HTTP_CODES.INTERNAL] });
  }
};

export const createOne = <T>(controller: Controller<T>) => async (req: Request, res: Response) => {
  const payload = req.body;

  try {
    const result = await controller.create(payload);
    return res.status(HTTP_CODES.OK).send(result);
  } catch (error) {
    res.status(HTTP_CODES.INTERNAL).json({ error: ERROR_MESSAGES[HTTP_CODES.INTERNAL] });
  }
};

export const getList = <T>(controller: Controller<T>) => async (req: Request, res: Response) => {
  const filters = req.query;

  console.log('filters', filters);

  try {
    const results = await controller.getAll(filters);
    console.log('results', results);
    return res.status(HTTP_CODES.OK).send(results);
  } catch (error) {
    console.log('error', error);
    res.status(HTTP_CODES.INTERNAL).json({ error: ERROR_MESSAGES[HTTP_CODES.INTERNAL] });
  }
};