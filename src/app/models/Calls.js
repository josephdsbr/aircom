import Sequelize, { Model } from 'sequelize';

class Calls extends Model {
  static init(sequelize) {
    super.init(
      {
        phone: Sequelize.INTEGER,
        message_send: Sequelize.STRING,
        message_received: Sequelize.STRING,
        status: Sequelize.INTEGER,
        success: Sequelize.BOOLEAN,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {}
}

export default Calls;
