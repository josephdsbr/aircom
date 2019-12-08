import request from 'supertest';
import app from '../../src/app';
import truncate from '../util/truncate';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to list all users', async () => {
    const response = await request(app)
      .get('/users')
      .send();

    expect(typeof response).toBe('object');
  });

  it('Should return request data not valid', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'José Vinícius',
        email: 'josephds',
        phone: '081997667754',
        password: '123456',
        birth_date: '1997-10-14T03:00:00-03:00',
      });

    expect(response.body.error).toBe('Request data not valid');
  });

  it('Should return user not found', async () => {
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
      .post('/users')
      .send({
        name: 'José Vinícius',
        email: 'josephdsbr@gmail.com',
        phone: '081997667754',
        password: '123456',
        birth_date: '1997-10-14T03:00:00-03:00',
      });

    expect(newResponse.body.error).toBe('E-mail is already registered');
  });

  it('Should return data not valid to update', async () => {
    const response = await request(app)
      .put('/users')
      .send({
        email: 'josevinicius',
        phone: '81997667754',
      });

    expect(response.body.error).toBe('Request data not valid');
  });

  it("should return user doesn't exist", async () => {
    const response = await request(app)
      .put('/users')
      .send({
        email: 'josephdsbr@gmail.com',
        phone: '081997667754',
      });

    expect(response.body.error).toBe("User doesn't exist");
  });

  it('should return updated informations about user', async () => {
    await request(app)
      .post('/users')
      .send({
        name: 'José Vinícius',
        email: 'josephdsbr@gmail.com',
        phone: '81997665355',
        password: '123456',
        birth_date: '1997-10-14T03:00:00-03:00',
      });

    const response = await request(app)
      .put('/users')
      .send({
        email: 'josephdsbr@gmail.com',
        phone: '81997665366',
      });

    expect(response.body.phone).toBe('81997665366');
  });
});
