import FlightLists from '../models/FlightLists';
import Flights from '../models/Flights';
import Users from '../models/Users';

class CheckingController {
  async index(req, res) {
    const flightList = await FlightLists.findAll({
      where: {
        checking: true,
      },
      include: [
        {
          model: Flights,
          as: 'flight',
        },
        {
          model: Users,
          as: 'user',
          attributes: ['id', 'name', 'email', 'phone', 'birth_date'],
        },
      ],
    });

    return res.json(flightList);
  }

  async store(req, res) {
    const { id } = req.params;

    const userFlight = await FlightLists.findByPk(id, {
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

    await userFlight.update({ checking: true });

    return res.json(userFlight);
  }
}

export default new CheckingController();
