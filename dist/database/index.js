"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});// eslint-disable-next-line no-unsed-vars
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Calls = require('../app/models/Calls'); var _Calls2 = _interopRequireDefault(_Calls);
var _Users = require('../app/models/Users'); var _Users2 = _interopRequireDefault(_Users);
var _Flights = require('../app/models/Flights'); var _Flights2 = _interopRequireDefault(_Flights);
var _FlightLists = require('../app/models/FlightLists'); var _FlightLists2 = _interopRequireDefault(_FlightLists);
var _States = require('../app/models/States'); var _States2 = _interopRequireDefault(_States);

const models = [_Calls2.default, _Users2.default, _FlightLists2.default, _Flights2.default, _States2.default];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new (0, _sequelize2.default)(_database2.default);
    models.map(model => model.init(this.connection));

    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

exports. default = new Database();
