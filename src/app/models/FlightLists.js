// eslint-disable-next-line no-unsed-vars
import Sequelize, { Model } from 'sequelize';

class FlightLists extends Model {
  static init(sequelize) {
    super.init(
      {
        checking: Sequelize.BOOLEAN,
      },
      { sequelize },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Flights, { foreignKey: 'flight_id', as: 'flight' });
    this.belongsTo(models.Users, { foreignKey: 'user_id', as: 'user' });
  }
}

export default FlightLists;
