import request from 'supertest';
import app from '../../src/app';

import truncate from '../util/truncate';

describe('FlightList', () => {
  it('Should return a list of flights list', async () => {
    await request(app)
      .get('/flight-lists')
      .send()
      .expect(200);
  });

  it('Should return a bad request', async () => {
    await request(app)
      .post('/flight-lists')
      .send({
        flight_id: 'oie',
        user_id: 1,
      })
      .expect(400);
  });
});
