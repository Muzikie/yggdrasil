import { Router, Request, Response } from 'express';
import { RESPONSE_STATUSES, HTTP_CODES } from '../utils/constants';

const metaRouter = Router();

metaRouter.get('/status', async (req: Request, res: Response) => {
  res.status(HTTP_CODES.OK).json({
    status: RESPONSE_STATUSES.SUCCESS,
    data: {
      status: 'online',
    },
  });
});

export default {
  path: '/meta',
  router: metaRouter,
};
