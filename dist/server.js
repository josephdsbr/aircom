"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

_app2.default.use(_cors2.default.call(void 0, ));
_app2.default.listen(3333);
