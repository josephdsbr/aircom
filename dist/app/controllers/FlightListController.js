"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _FlightLists = require('../models/FlightLists'); var _FlightLists2 = _interopRequireDefault(_FlightLists);
var _Users = require('../models/Users'); var _Users2 = _interopRequireDefault(_Users);
var _Flights = require('../models/Flights'); var _Flights2 = _interopRequireDefault(_Flights);

class FlightListController {
  async index(req, res) {
    const flighList = await _FlightLists2.default.findAll({
      include: [
        {
          model: _Flights2.default,
          as: 'flight',
          attributes: [
            'id',
            'cancelable',
            'code',
            'origin',
            'destiny',
            'departure_date',
            'arrival_date',
            'company',
            'company_url',
          ],
        },
        {
          model: _Users2.default,
          as: 'user',
          attributes: ['id', 'name', 'email', 'phone', 'birth_date'],
        },
      ],
    });
    return res.json(flighList);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      flight_id: Yup.number().integer(),
      user_id: Yup.number().integer(),
      checking: Yup.boolean(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Request data is not valid' });
    }

    const { flight_id, user_id } = req.body;

    const userExists = await _Users2.default.findByPk(user_id);

    if (!userExists) {
      return res.status(401).json({ error: 'User does not exist' });
    }

    const flightExists = await _Flights2.default.findByPk(flight_id);

    if (!flightExists) {
      return res.status(401).json({ error: 'Flight does not exist' });
    }

    const flightList = await _FlightLists2.default.create(req.body);

    return res.json(flightList);
  }
}

exports. default = new FlightListController();
