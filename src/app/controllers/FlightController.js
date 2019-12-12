import * as Yup from 'yup';
import { isBefore, parseISO } from 'date-fns';
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

  async update(req, res) {
    const schema = Yup.object().shape({
      company: Yup.string(),
      company_url: Yup.string(),
      code: Yup.string(),
      port: Yup.string(),
      origin: Yup.string(),
      destiny: Yup.string(),
      departure_date: Yup.date(),
      arrival_date: Yup.date(),
      state_id: Yup.number().integer(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Request data is not valid ' });
    }

    const { departure_date, arrival_date } = req.body;
    const { flyId } = req.params;

    if (
      departure_date &&
      arrival_date &&
      !isBefore(parseISO(departure_date), parseISO(arrival_date))
    ) {
      return res
        .status(400)
        .json({ error: 'Departure date has to be before arrival_date' });
    }

    const flightExists = await Flights.findByPk(flyId);

    if (!flightExists) {
      return res.status(401).json({ error: "Flight doesn't exist" });
    }

    const flight = await Flights.update(req.body, { where: { id: flyId } });

    return res.json(flight);
  }
}

export default new FlightController();
