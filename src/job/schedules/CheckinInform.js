import { Op } from 'sequelize';
import { subHours } from 'date-fns';
import Flights from '../../app/models/Flights';
import FlightLists from '../../app/models/FlightLists';
import Users from '../../app/models/Users';
import Calls from '../../app/models/Calls';
import TVAPI from '../../service/TVAPI';

class CheckinInform {
  async handle() {
    const finalDate = new Date();
    const initialDate = subHours(new Date(), 2);

    const flights = await Flights.findAll({
      where: {
        departure_date: {
          [Op.between]: [initialDate, finalDate],
        },
      },
    });

    const flightsId = flights.map(x => x.id);

    const flighUsers = await FlightLists.findAll({
      where: {
        flight_id: flightsId,
        checking: false,
      },
      include: [
        {
          model: Users,
          as: 'user',
          attributes: ['id', 'name', 'email', 'phone', 'birth_date'],
        },
      ],
    });

    const callUser = async (name, phone) => {
      const message = `Prezado ou Prezada, ${name} faltam poucas horas para seu voo 
      e você ainda não realizou o checkin. Por favor, para não haver imprevistos,
      faça o seu checkin o mais breve possível ou entre em contato conosco.`;

      try {
        const data = await TVAPI.tts.enviar(phone, message);

        const call = await Calls.create({
          phone,
          message_send: message,
          message_received: data.mensagem,
          status: data.status,
          success: data.status === 200,
        });
        return call;
      } catch (err) {
        console.log(err);
      }
    };

    flighUsers.map(x => callUser(x.user.name, x.user.phone));
  }
}

export default new CheckinInform();
