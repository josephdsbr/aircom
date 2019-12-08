import request from 'supertest';
import app from '../../src/app';

import truncate from '../util/truncate';

describe('Call', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to make a call and store information in database', async () => {
    const response = await request(app)
      .post('/calls')
      .send({
        phone: '081997667754',
        message: 'Bom dia senhor, sua viagem está remarcada para segunda-feira',
      });

    expect(response.body).toHaveProperty('id');
  });

  it('should return information about all calls made', async () => {
    const response = await request(app)
      .post('/calls')
      .send({
        phone: '081997667754',
        message: 'Bom dia senhor, sua viagem está remarcada para segunda-feira',
      });

    const consult = await request(app)
      .get('/calls')
      .send();

    expect(typeof consult.body).toBe('object');
  });
});
