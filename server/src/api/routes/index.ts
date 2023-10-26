// eslint-disable-next-line new-cap
import express from 'express';

// Require routes
import metaRouter from './meta';
import productsRouter from './products';
import recipesRouter from './recipes';

const app = express();

app.use('/meta', metaRouter);
app.use('/products', productsRouter);
app.use('/recipes', recipesRouter);

export default app;