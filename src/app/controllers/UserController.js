// eslint-disable-next-line no-unsed-vars
import * as Yup from 'yup';
import Users from '../models/Users';

class UserController {
  async index(req, res) {
    const users = await Users.findAll();

    return res.json(users);
  }

  // eslint-disable-next-line consistent-return
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
      return res.status(400).json({ error: 'Request data not Valid' });
    }

    const userExists = await Users.findOne({
      where: { email: req.body.email },
    });

    if (userExists) {
      return res.json({ error: 'E-mail is already registered' });
    }

    try {
      const users = await Users.create(req.body);
      return res.json(users);
    } catch (err) {
      return res.status(400).json({ error: 'Something got wrong' });
    }
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      phone: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json('Request data not Valid');
    }

    const { email } = req.body;

    const users = await Users.findOne({ where: { email } });

    if (!users) {
      return res.status(401).json("User doesn't exist");
    }

    try {
      const { id, name, phone } = await users.update(req.body);
      return res.json({ id, name, email, phone });
    } catch (error) {
      return res.status(501).send({ error });
    }
  }
}

export default new UserController();
