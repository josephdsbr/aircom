// eslint-disable-next-line no-unsed-vars
import Calls from '../models/Calls';
import TVAPI from '../../service/TVAPI';

class CallController {
  async index(req, res) {
    const call = await Calls.findAll();
    return res.json(call);
  }

  async store(req, res) {
    const { phone, message, type } = req.body;

    try {
      let data = null;

      switch (type) {
        case 1:
          data = await TVAPI.tts.enviar(phone, message);
          break;
        case 2:
          data = await TVAPI.sms.enviar(phone, message);
          break;
        default:
          data = await TVAPI.tts.enviar(phone, message);
      }

      const call = await Calls.create({
        phone,
        message_send: message,
        message_received: data.mensagem,
        status: data.status,
        success: data.status === 200,
      });

      res.json(call);
    } catch (e) {
      res.json(e);
    }
  }
}

export default new CallController();
