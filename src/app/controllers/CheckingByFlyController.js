import FlightLists from '../models/FlightLists';
import Flights from '../models/Flights';

class CheckingByFlyController {
  async index(req, res) {
    const { flyId } = req.params;

    const flightList = await FlightLists.findAll({
      where: { '$flight.id$': flyId },
      include: [
        {
          model: Flights,
          as: 'flight',
        },
      ],
    });

    return res.json(flightList);
  }
}

export default new CheckingByFlyController();