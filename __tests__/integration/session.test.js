import request from 'supertest';
import app from '../../src/app';

import truncate from '../util/truncate';

describe('Session', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Should return not valid data request', async () => {
    const response = await request(app)
      .post('/sessions')
      .send({
        email: 'joseph',
        password: 'oie',
      })
      .expect(401);
  });

  it('Should return user not found', async () => {
    const response = await request(app)
      .post('/sessions')
      .send({
        email: 'josephdsbr@gmail.com',
        password: '123456',
      });

    expect(response.body.error).toBe('User not found');
  });

  it('Should return password does not match', async () => {
    await request(app)
      .post('/users')
      .send({
        name: 'José Vinícius',
        email: 'josephdsbr@gmail.com',
        phone: '081997667754',
        password: '123456',
        birth_date: '1997-10-14T03:00:00-03:00',
      });

    const newResponse = await request(app)
      .post('/sessions')
      .send({ email: 'josephdsbr@gmail.com', password: '12345' });

    expect(newResponse.body.error).toBe('Password does not match');
  });

  it('should return a session with a token', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'José Vinícius',
        email: 'josephdsbr@gmail.com',
        phone: '081997667754',
        password: '123456',
        birth_date: '1997-10-14T03:00:00-03:00',
      });

    const newResponse = await request(app)
      .post('/sessions')
      .send({ email: 'josephdsbr@gmail.com', password: '123456' });

    expect(newResponse.body).toHaveProperty('token');
  });
});
