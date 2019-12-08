import request from 'supertest';
import app from '../../src/app';

describe('Call', () => {
  it('should be able to make a call and store information in database', async () => {
    const response = await request(app)
      .post('/calls')
      .send({
        phone: '081997667754',
        message: 'Bom dia senhor, sua viagem está remarcada para segunda-feira',
      });

    expect(response.body).toHaveProperty('id');
  });
});
