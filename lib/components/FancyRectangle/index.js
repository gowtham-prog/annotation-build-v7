"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
var Box = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  background: rgba(0, 0, 0, 0.2);\n  position: absolute;\n"])));
var Container = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n"])));
function FancyRectangle(props) {
  var geometry = props.annotation.geometry;
  if (!geometry) return null;
  return /*#__PURE__*/_react["default"].createElement(Container, {
    className: props.className,
    style: props.style
  }, /*#__PURE__*/_react["default"].createElement(Box, {
    style: {
      height: geometry.y + "%",
      width: '100%'
    }
  }), /*#__PURE__*/_react["default"].createElement(Box, {
    style: {
      top: geometry.y + "%",
      height: geometry.height + "%",
      width: geometry.x + "%"
    }
  }), /*#__PURE__*/_react["default"].createElement(Box, {
    style: {
      top: geometry.y + "%",
      left: geometry.x + geometry.width + "%",
      height: geometry.height + "%",
      width: 100 - (geometry.x + geometry.width) + "%"
    }
  }), /*#__PURE__*/_react["default"].createElement(Box, {
    style: {
      top: geometry.y + geometry.height + "%",
      height: 100 - (geometry.y + geometry.height) + "%",
      width: '100%'
    }
  }));
}
FancyRectangle.defaultProps = {
  className: '',
  style: {}
};
var _default = exports["default"] = FancyRectangle;
module.exports = exports.default;