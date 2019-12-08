import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import Users from '../models/Users';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body)))
      res.status(401).json({ error: 'Request data is not valid' });

    const { email, password } = req.body;

    const user = await Users.findOne({ where: { email } });

    if (!user) res.status(400).json({ error: 'User not found' });

    if (!(await user.checkPassword(password)))
      res.status(401).json({ error: 'Password does not match' });

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
