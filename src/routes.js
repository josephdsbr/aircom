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
import CheckingController from './app/controllers/CheckingController';
import NotCheckingController from './app/controllers/NotCheckingController';
import CheckingByFlyController from './app/controllers/CheckingByFlyController';
import FlyAlertsController from './app/controllers/FlyAlertsController';

const routes = new Router();
routes.use(cors());

routes.post('/sessions', SessionController.store);

routes.get('/calls', CallController.index);
routes.post('/calls', CallController.store);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

routes.post('/states', StateController.store);

routes.get('/checkin', CheckingController.index);
routes.post('/checkin/:id', CheckingController.store);

routes.get('/not-checkin', NotCheckingController.index);

routes.get('/flight-lists', FlightListController.index);
routes.post('/flight-lists', FlightListController.store);

routes.post('/flight-alert/:flyId', FlyAlertsController.store);

routes.get('/flight-lists/:flyId', CheckingByFlyController.index);

routes.get('/flights', FlightController.index);
routes.post('/flights', FlightController.store);
routes.put('/flights/:flyId', FlightController.update);

module.exports = routes;
