"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});// eslint-disable-next-line no-unsed-vars
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class FlightLists extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        checking: _sequelize2.default.BOOLEAN,
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

exports. default = FlightLists;
