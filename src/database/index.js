// eslint-disable-next-line no-unsed-vars
import Sequelize from 'sequelize';

import databaseConfig from '../config/database';
import Calls from '../app/models/Calls';
import Users from '../app/models/Users';
import Flights from '../app/models/Flights';
import FlightLists from '../app/models/FlightLists';
import States from '../app/models/States';

const models = [Calls, Users, FlightLists, Flights, States];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));

    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
