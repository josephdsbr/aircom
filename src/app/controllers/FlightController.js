import * as Yup from 'yup';
import Flights from '../models/Flights';

class FlightController {
  async index(req, res) {
    const flights = await Flights.findAll();
    return res.json(flights);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      company: Yup.string().required(),
      company_url: Yup.string().required(),
      code: Yup.string().required(),
      port: Yup.string().required(),
      origin: Yup.string().required(),
      destiny: Yup.string().required(),
      departure_date: Yup.date().required(),
      arrival_date: Yup.date().required(),
      state_id: Yup.number().integer(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Request data is not valid' });
    }

    const { code } = req.body;

    const flight = await Flights.findOne({ where: { code } });

    if (flight !== null) {
      return res.status(400).json({ error: 'Flight already exists' });
    }

    try {
      const flights = await Flights.create(req.body);
      return res.json(flights);
    } catch (error) {
      return res.status(405).json(error);
    }
  }
}

export default new FlightController();
