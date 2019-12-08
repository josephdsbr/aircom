"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Calls extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        phone: _sequelize2.default.INTEGER,
        message_send: _sequelize2.default.STRING,
        message_received: _sequelize2.default.STRING,
        status: _sequelize2.default.INTEGER,
        success: _sequelize2.default.BOOLEAN,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {}
}

exports. default = Calls;
