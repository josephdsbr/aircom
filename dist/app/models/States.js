"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});// eslint-disable-next-line no-unsed-vars
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class States extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        description: _sequelize2.default.STRING,
      },
      { sequelize },
    );

    return this;
  }
}

exports. default = States;
