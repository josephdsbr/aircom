"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _Users = require('../models/Users'); var _Users2 = _interopRequireDefault(_Users);

class UserController {
  async index(req, res) {
    const users = await _Users2.default.findAll();

    return res.json(users);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      phone: Yup.string().required(),
      password: Yup.string()
        .required()
        .min(3),
      birth_date: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Request data not valid' });
    }

    const userExists = await _Users2.default.findOne({
      where: { email: req.body.email },
    });

    if (userExists) {
      return res.json({ error: 'E-mail is already registered' });
    }

    const users = await _Users2.default.create(req.body);
    return res.json(users);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      phone: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Request data not valid' });
    }

    const { email } = req.body;

    const users = await _Users2.default.findOne({ where: { email } });

    if (!users) {
      return res.status(401).json({ error: "User doesn't exist" });
    }

    const { id, name, phone } = await users.update(req.body);
    return res.json({ id, name, email, phone });
  }
}

exports. default = new UserController();
