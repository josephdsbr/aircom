import * as Yup from 'yup';
import Users from '../models/Users';
import TVAPI from '../../service/TVAPI';

class UserController {
  async index(req, res) {
    const users = await Users.findAll();

    return res.json(users);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.email().required(),
      phone: Yup.string().required(),
      password: Yup.string()
        .required()
        .min(3),
      birth_date: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Request Data not Valid' });
    }

    try {
      const users = Users.create(req.body);
      res.json(users);
    } catch (err) {
      res.status(400).json({ error: 'Something got wrong' });
    }
  }
}

export default new UserController();
