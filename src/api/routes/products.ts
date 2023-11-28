import { Router, Request, Response } from 'express';
import * as productController from '../controllers/products';
import { CreateProductDTO, FilterProductsDTO, UpdateProductDTO } from '../dto/product';
import { ERROR_MESSAGES, HTTP_CODES } from '../utils/constants';

const productsRouter = Router();

productsRouter.get(':/id', async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const result = await productController.getById(id);
    return res.status(HTTP_CODES.OK).send(result);
  } catch (error) {
    res.status(HTTP_CODES.INTERNAL).json({ error: ERROR_MESSAGES[HTTP_CODES.INTERNAL] });
  }
});

productsRouter.put('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload: UpdateProductDTO = req.body;

  try {
    const result = await productController.update(id, payload);
    return res.status(201).send(result);
  } catch (error) {
    res.status(HTTP_CODES.INTERNAL).json({ error: ERROR_MESSAGES[HTTP_CODES.INTERNAL] });
  }
});

productsRouter.delete('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const result = await productController.deleteById(id);
    return res.status(204).send({
      success: result,
    });
  } catch (error) {
    res.status(HTTP_CODES.INTERNAL).json({ error: ERROR_MESSAGES[HTTP_CODES.INTERNAL] });
  }
});

productsRouter.post('/', async (req: Request, res: Response) => {
  const payload: CreateProductDTO = req.body;

  try {
    const result = await productController.create(payload);
    return res.status(HTTP_CODES.OK).send(result);
  } catch (error) {
    console.log('err', error);
    res.status(HTTP_CODES.INTERNAL).json({ error: ERROR_MESSAGES[HTTP_CODES.INTERNAL] });
  }
});

productsRouter.get('/', async (req: Request, res: Response) => {
  const filters: FilterProductsDTO = req.query;

  try {
    const results = await productController.getAll(filters);
    return res.status(HTTP_CODES.OK).send(results);
  } catch (error) {
    res.status(HTTP_CODES.INTERNAL).json({ error: ERROR_MESSAGES[HTTP_CODES.INTERNAL] });
  }
});

export default productsRouter;
