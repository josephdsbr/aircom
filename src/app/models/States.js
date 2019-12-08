// eslint-disable-next-line no-unsed-vars
import Sequelize, { Model } from 'sequelize';

class States extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
      },
      { sequelize },
    );

    return this;
  }
}

export default States;
