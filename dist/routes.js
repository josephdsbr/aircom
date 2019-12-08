"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// eslint-disable-next-line no-unsed-vars
var _express = require('express');
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

/** Middlewares imports */

var _auth = require('./app/middlewares/auth'); var _auth2 = _interopRequireDefault(_auth);

/** Controllers imports */

var _CallController = require('./app/controllers/CallController'); var _CallController2 = _interopRequireDefault(_CallController);
var _UserController = require('./app/controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _SessionController = require('./app/controllers/SessionController'); var _SessionController2 = _interopRequireDefault(_SessionController);
var _FlightController = require('./app/controllers/FlightController'); var _FlightController2 = _interopRequireDefault(_FlightController);
var _StateController = require('./app/controllers/StateController'); var _StateController2 = _interopRequireDefault(_StateController);
var _FlightListController = require('./app/controllers/FlightListController'); var _FlightListController2 = _interopRequireDefault(_FlightListController);

const routes = new (0, _express.Router)();
routes.use(_cors2.default.call(void 0, ));

routes.post('/sessions', _SessionController2.default.store);

routes.get('/calls', _CallController2.default.index);
routes.post('/calls', _CallController2.default.store);

routes.get('/users', _UserController2.default.index);
routes.post('/users', _UserController2.default.store);
routes.put('/users', _UserController2.default.update);

routes.post('/states', _StateController2.default.store);

routes.get('/flight-lists', _FlightListController2.default.index);
routes.post('/flight-lists', _FlightListController2.default.store);

routes.get('/flights', _FlightController2.default.index);
routes.post('/flights', _FlightController2.default.store);

module.exports = routes;
