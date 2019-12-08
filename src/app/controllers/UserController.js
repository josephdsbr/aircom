import * as Yup from 'yup';
import Users from '../models/Users';

class UserController {
  async index(req, res) {
    const users = await Users.findAll();

    return res.json(users);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      phone: Yup.string().required(),
      password: Yup.string()
        .required()
        .min(3),
      birth_date: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Request data not valid' });
    }

    const userExists = await Users.findOne({
      where: { email: req.body.email },
    });

    if (userExists) {
      return res.json({ error: 'E-mail is already registered' });
    }

    const users = await Users.create(req.body);
    return res.json(users);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      phone: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Request data not valid' });
    }

    const { email } = req.body;

    const users = await Users.findOne({ where: { email } });

    if (!users) {
      return res.status(401).json({ error: "User doesn't exist" });
    }

    const { id, name, phone } = await users.update(req.body);
    return res.json({ id, name, email, phone });
  }
}

export default new UserController();
