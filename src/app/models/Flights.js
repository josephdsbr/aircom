// eslint-disable-next-line no-unsed-vars
import Sequelize, { Model } from 'sequelize';
import { isBefore, subHours } from 'date-fns';

class Flights extends Model {
  static init(sequelize) {
    super.init(
      {
        code: Sequelize.STRING,
        origin: Sequelize.STRING,
        destiny: Sequelize.STRING,
        port: Sequelize.STRING,
        departure_date: Sequelize.DATE,
        arrival_date: Sequelize.DATE,
        company: Sequelize.STRING,
        company_url: Sequelize.STRING,
        cancelable: {
          type: Sequelize.VIRTUAL,
          get() {
            return isBefore(new Date(), subHours(this.departure_date, 2));
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.States, { foreignKey: 'state_id', as: 'states' });
  }
}

export default Flights;
