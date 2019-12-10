import 'dotenv/config';

import express from 'express';
import routes from './routes';
import './database';
import Schedules from './job';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.job();
  }

  middlewares() {
    this.server.use(express.json());
  }

  job () {
    Schedules();
    // const job = new CronJob('* * * * * *', () => {
    //     console.log('generatin backg');
    // }, null, true, 'America/Los_Angeles');
  }

  routes() {
    this.server.use(routes);
  }
}
module.exports = new App().server;
