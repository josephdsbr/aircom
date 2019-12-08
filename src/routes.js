// eslint-disable-next-line no-unsed-vars
import { Router } from 'express';
import cors from 'cors';

/** Controllers imports */

import CallController from './app/controllers/CallController';
import UserController from './app/controllers/UserController';

const routes = new Router();
routes.use(cors());

routes.get('/call', CallController.index);
routes.post('/call', CallController.store);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

module.exports = routes;
