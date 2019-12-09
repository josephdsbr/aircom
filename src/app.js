import 'dotenv/config';

import express from 'express';
import { CronJob } from 'cron';
import routes from './routes';
import './database';


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
    // const job = new CronJob('* * * * * *', () => {
    //     console.log('generatin backg');
    // }, null, true, 'America/Los_Angeles');
  }

  routes() {
    this.server.use(routes);
  }
}
module.exports = new App().server;
