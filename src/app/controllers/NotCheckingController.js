import FlightLists from '../models/FlightLists';
import Flights from '../models/Flights';
import Users from '../models/Users';

class NotCheckingController {
  async index(req, res) {
    const flightList = await FlightLists.findAll({
      where: {
        checking: false,
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
}

export default new NotCheckingController();
