import States from '../models/States';

class StateController {
  async store(req, res) {
    const state = await States.create(req.body);
    return res.json(state);
  }
}

export default new StateController();
