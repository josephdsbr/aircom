import Flights from '../models/Flights';

class FlightController {
  async index (req, res) {
    const flights = Flights.findAll();

    return res.json(flights);
  }
}
