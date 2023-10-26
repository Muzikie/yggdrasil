import { Router, Request, Response } from 'express';
import * as recipeController from '../controllers/recipes';
import * as productController from '../controllers/products';
import { FilterRecipesDTO, UpdateRecipeDTO } from '../dto/recipe';
import { ERROR_MESSAGES, HTTP_CODES } from '../utils/constants';

const recipesRouter = Router();

recipesRouter.get(':/id', async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const result = await recipeController.getById(id);
    return res.status(HTTP_CODES.OK).send(result);
  } catch (error) {
    res.status(HTTP_CODES.INTERNAL).json({ error: ERROR_MESSAGES[HTTP_CODES.INTERNAL] });
  }
});

recipesRouter.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload: UpdateRecipeDTO = req.body;
  const { product_id } = payload;

  try {
    // Validate the Recipe selections against the Product min/max
    const product = await productController.getById(product_id);

    if (payload.selected > product.max || payload.selected < product.min) {
      return res.status(HTTP_CODES.BAD_REQUEST).send({
        error: ERROR_MESSAGES[HTTP_CODES.BAD_REQUEST],
      });
    }

    const result = await recipeController.update(id, payload);
    return res.status(201).send(result);
  } catch (error) {
    res.status(HTTP_CODES.INTERNAL).json({ error: ERROR_MESSAGES[HTTP_CODES.INTERNAL] });
  }
});

recipesRouter.delete('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const result = await recipeController.deleteById(id);
    return res.status(204).send({
      success: result,
    });
  } catch (error) {
    res.status(HTTP_CODES.INTERNAL).json({ error: ERROR_MESSAGES[HTTP_CODES.INTERNAL] });
  }
});

recipesRouter.post('/', async (req: Request, res: Response) => {
  const payload: UpdateRecipeDTO = req.body;
  const { product_id } = payload;

  try {
    // Validate the Recipe selections against the Product min/max
    const product = await productController.getById(product_id);

    if (payload.selected > product.max || payload.selected < product.min) {
      return res.status(HTTP_CODES.BAD_REQUEST).send({
        error: ERROR_MESSAGES[HTTP_CODES.BAD_REQUEST],
      });
    }

    const result = await recipeController.create(payload);
    return res.status(HTTP_CODES.OK).send(result);
  } catch (error) {
    res.status(HTTP_CODES.INTERNAL).json({ error: ERROR_MESSAGES[HTTP_CODES.INTERNAL] });
  }
});

recipesRouter.get('/', async (req: Request, res: Response) => {
  const filters: FilterRecipesDTO = req.query;

  try {
    const results = await recipeController.getAll(filters);
    return res.status(HTTP_CODES.OK).send(results);
  } catch (error) {
    res.status(HTTP_CODES.INTERNAL).json({ error: ERROR_MESSAGES[HTTP_CODES.INTERNAL] });
  }
});

export default recipesRouter;
