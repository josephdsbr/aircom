// eslint-disable-next-line no-unsed-vars
import { Router } from 'express';
import cors from 'cors';

/** Middlewares imports */

import AuthMiddleware from './app/middlewares/auth';

/** Controllers imports */

import CallController from './app/controllers/CallController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();
routes.use(cors());

routes.post('/sessions', SessionController.store);

routes.get('/calls', CallController.index);
routes.post('/calls', CallController.store);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

module.exports = routes;
