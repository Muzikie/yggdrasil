import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';

import apiRouter from './api/routes';
import dbInit from './db/init';
import { API_PREFIX, ASSETS_DIR, API_VERSION, CORS_WHITE_LIST } from './api/utils/constants';

dbInit();

const app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST or PATCH
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Support CORS from subdomains
app.use(cors({
  origin: CORS_WHITE_LIST[0],
  optionsSuccessStatus: 200,
}));

// Serving static files
app.use('/', express.static(path.join(__dirname, `.${ASSETS_DIR}`)));

app.use((req, _res, next) => {
  // eslint-disable-next-line no-console
  console.log(`Resource requested: ${req.method} ${req.originalUrl}`);
  next(); // make sure we go to the next routes and don't stop here
});

// registering routes
app.use(`${API_PREFIX}/${API_VERSION}`, apiRouter);

export default app;
