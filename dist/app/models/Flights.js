"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});// eslint-disable-next-line no-unsed-vars
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _datefns = require('date-fns');

class Flights extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        code: _sequelize2.default.STRING,
        origin: _sequelize2.default.STRING,
        destiny: _sequelize2.default.STRING,
        departure_date: _sequelize2.default.DATE,
        arrival_date: _sequelize2.default.DATE,
        company: _sequelize2.default.STRING,
        company_url: _sequelize2.default.STRING,
        cancelable: {
          type: _sequelize2.default.VIRTUAL,
          get() {
            return _datefns.isBefore.call(void 0, new Date(), _datefns.subHours.call(void 0, this.departure_date, 2));
          },
        },
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.States, { foreignKey: 'state_id', as: 'states' });
  }
}

exports. default = Flights;
