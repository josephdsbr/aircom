// eslint-disable-next-line no-unsed-vars
import { Router } from 'express';
import cors from 'cors';

/** Middlewares imports */

import AuthMiddleware from './app/middlewares/auth';

/** Controllers imports */

import CallController from './app/controllers/CallController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FlightController from './app/controllers/FlightController';
import StateController from './app/controllers/StateController';
import FlightListController from './app/controllers/FlightListController';

const routes = new Router();
routes.use(cors());

routes.post('/sessions', SessionController.store);

routes.get('/calls', CallController.index);
routes.post('/calls', CallController.store);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

routes.post('/states', StateController.store);

routes.get('/flight-lists', FlightListController.index);
routes.post('/flight-lists', FlightListController.store);

routes.get('/flights', FlightController.index);
routes.post('/flights', FlightController.store);

module.exports = routes;
