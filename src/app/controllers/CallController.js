import axios from 'axios';
import Calls from '../models/Calls';
import TVAPI from '../../service/TVAPI';

class CallController {
  async index(req, res) {
    const call = await Calls.findAll();

    return res.json(call);
  }

  async store(req, res) {
    const { phone, message } = req.body;
    const data = await TVAPI.tts.enviar(phone, message);

    const call = await Calls.create({
      phone,
      message_send: message,
      message_received: data.mensagem,
      status: data.status,
      success: data.status === 200,
    });

    res.json(call);
  }
}

export default new CallController();
