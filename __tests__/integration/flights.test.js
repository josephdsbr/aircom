import request from 'supertest';
import app from '../../src/app';
import truncate from '../util/truncate';

describe('Flight', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Should return a list of Flights', async () => {
    await request(app)
      .get('/flights')
      .send()
      .expect(200);
  });

  it('Should return invalid request data', async () => {
    await request(app)
      .post('/flights')
      .send({
        company: 'TAM',
        company_url: 'https://locahost/photo',
        code: 'TAM1322',
        origin: 'São Paulo (GRU)',
        destiny: 'Florianópolis(FLN)',
        departure_date: '2019-12-14T21:00:00-03:00',
        arrival_date: '2019-12-14T22:30:00-03:00',
        state_id: 'oie',
      })
      .expect(400);
  });

  it('Should be able to store a flight', async () => {
    const { id } = await request(app)
      .post('/states')
      .send({ description: 'Agendado' });

    await request(app)
      .post('/flights')
      .send({
        company: 'TAM',
        company_url: 'https://locahost/photo',
        code: 'TAM1322',
        origin: 'São Paulo (GRU)',
        destiny: 'Florianópolis(FLN)',
        departure_date: '2019-12-14T21:00:00-03:00',
        arrival_date: '2019-12-14T22:30:00-03:00',
        state_id: id,
      })
      .expect(200);
  });

  it('Should return duplicated code', async () => {
    await request(app)
      .post('/flights')
      .send({
        company: 'TAM',
        company_url: 'https://locahost/photo',
        code: 'TAM1322',
        origin: 'São Paulo (GRU)',
        destiny: 'Florianópolis(FLN)',
        departure_date: '2019-12-14T21:00:00-03:00',
        arrival_date: '2019-12-14T22:30:00-03:00',
      });

    const response = await request(app)
      .post('/flights')
      .send({
        company: 'TAM',
        company_url: 'https://locahost/photo',
        code: 'TAM1322',
        origin: 'São Paulo (GRU)',
        destiny: 'Florianópolis(FLN)',
        departure_date: '2019-12-14T21:00:00-03:00',
        arrival_date: '2019-12-14T22:30:00-03:00',
      });

    expect(response.body.error).toBe('Flight already exists');
  });
});
