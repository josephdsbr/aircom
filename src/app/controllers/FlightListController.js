import * as Yup from 'yup';
import FlightLists from '../models/FlightLists';
import Users from '../models/Users';
import Flights from '../models/Flights';

class FlightListController {
  async index(req, res) {
    const flighList = await FlightLists.findAll({
      include: [
        {
          model: Flights,
          as: 'flight',
          attributes: [
            'id',
            'cancelable',
            'code',
            'origin',
            'destiny',
            'departure_date',
            'arrival_date',
            'company',
            'company_url',
          ],
        },
        {
          model: Users,
          as: 'user',
          attributes: ['id', 'name', 'email', 'phone', 'birth_date'],
        },
      ],
    });
    return res.json(flighList);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      flight_id: Yup.number().integer(),
      user_id: Yup.number().integer(),
      checking: Yup.boolean(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Request data is not valid' });
    }

    const { flight_id, user_id } = req.body;

    const userExists = await Users.findByPk(user_id);

    if (!userExists) {
      return res.status(401).json({ error: 'User does not exist' });
    }

    const flightExists = await Flights.findByPk(flight_id);

    if (!flightExists) {
      return res.status(401).json({ error: 'Flight does not exist' });
    }

    const flightList = await FlightLists.create(req.body);

    return res.json(flightList);
  }
}

export default new FlightListController();
