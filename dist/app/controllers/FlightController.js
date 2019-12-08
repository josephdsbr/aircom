"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _Flights = require('../models/Flights'); var _Flights2 = _interopRequireDefault(_Flights);

class FlightController {
  async index(req, res) {
    const flights = await _Flights2.default.findAll();
    return res.json(flights);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      company: Yup.string().required(),
      company_url: Yup.string().required(),
      code: Yup.string().required(),
      origin: Yup.string().required(),
      destiny: Yup.string().required(),
      departure_date: Yup.date().required(),
      arrival_date: Yup.date().required(),
      state_id: Yup.number().integer(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Request data is not valid' });
    }

    const { code } = req.body;

    const flight = await _Flights2.default.findOne({ where: { code } });

    if (flight !== null) {
      return res.status(400).json({ error: 'Flight already exists' });
    }

    const flights = await _Flights2.default.create(req.body);

    return res.json(flights);
  }
}

exports. default = new FlightController();
