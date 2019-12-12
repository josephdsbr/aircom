import FlightLists from '../models/FlightLists';
import Flights from '../models/Flights';
import Calls from '../models/Calls';
import TVAPI from '../../service/TVAPI';
import FlyAlertMessage from '../../lib/FlyAlertMessage';
import Users from '../models/Users';

class FlyAlertsController {
  async store(req, res) {
    const { flyId } = req.params;
    const { type } = req.body;

    const flight = await FlightLists.findAll({
      where: { '$flight.id$': flyId },
      include: [
        {
          model: Flights,
          as: 'flight',
        },
        {
          model: Users,
          as: 'user',
        },
      ],
    });

    const fly = await Flights.findByPk(flyId);

    const message = FlyAlertMessage(type, fly);

    if (message === null) {
      return res.status(400).json({ error: 'Inválido type ' });
    }

    flight.map(async f => {
      const { phone } = f.user;
      const data = await TVAPI.sms.enviar(phone, message);

      await Calls.create({
        phone,
        message_send: message,
        message_received: data.mensagem,
        status: data.status,
        success: data.status === 200,
      });
    });

    return res.json(message);
  }
}

export default new FlyAlertsController();
