"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _module = _interopRequireDefault(require("../assignments/project-1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const App = ({
  auth,
  ...props
}) => {
  switch (auth.status) {
    case `init`:
      return _react.default.createElement("span", null, "Authorizing");

    case `failure`:
      return _react.default.createElement("span", null, auth.message);

    default:
      return _react.default.createElement(_module.default, props);
  }
};

var _default = App;
exports.default = _default;
//# sourceMappingURL=app.js.map
