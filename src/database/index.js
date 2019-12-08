import Sequelize from 'sequelize';

import databaseConfig from '../config/database';
import Calls from '../app/models/Calls';
import Users from '../app/models/Users';

const models = [Calls, Users];

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
