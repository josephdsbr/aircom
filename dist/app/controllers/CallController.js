"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});// eslint-disable-next-line no-unsed-vars
var _Calls = require('../models/Calls'); var _Calls2 = _interopRequireDefault(_Calls);
var _TVAPI = require('../../service/TVAPI'); var _TVAPI2 = _interopRequireDefault(_TVAPI);

class CallController {
  async index(req, res) {
    const call = await _Calls2.default.findAll();
    return res.json(call);
  }

  async store(req, res) {
    const { phone, message } = req.body;
    const data = await _TVAPI2.default.tts.enviar(phone, message);

    const call = await _Calls2.default.create({
      phone,
      message_send: message,
      message_received: data.mensagem,
      status: data.status,
      success: data.status === 200,
    });

    res.json(call);
  }
}

exports. default = new CallController();
