// eslint-disable-next-line new-cap
import express from 'express';

// Require routes
import metaRouter from './meta';
import gendersRouter from './gender';
import emotionsRouter from './emotion';

const app = express();

app.use(metaRouter.path, metaRouter.router);
app.use(gendersRouter.path, gendersRouter.router);
app.use(emotionsRouter.path, emotionsRouter.router);

export default app;