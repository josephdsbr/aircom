"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _States = require('../models/States'); var _States2 = _interopRequireDefault(_States);

class StateController {
  async store(req, res) {
    const state = await _States2.default.create(req.body);
    return res.json(state);
  }
}

exports. default = new StateController();
