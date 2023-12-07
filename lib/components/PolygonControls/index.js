"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _pointsUtils = require("../../utils/pointsUtils");
var _templateObject, _templateObject2, _templateObject3;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
var fadeInScale = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  from {\n    opacity: 0;\n    transform: scale(0);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n"])));
var Container = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  width: 8rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #1a202c;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 0.375rem;\n  overflow: hidden;\n  box-shadow:\n    0px 1px 5px 0px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14),\n    0px 3px 1px -2px rgba(0, 0, 0, 0.12);\n  transform-origin: top left;\n"])));
var Button = _styledComponents["default"].a(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  display: block;\n  width: 100%;\n  padding: 0.5rem 1rem;\n  border-bottom: 1px solid #e2e8f0;\n  color: #1a202c;\n  text-decoration: none;\n  background-color: white;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n  &:hover {\n    background-color: #3699FF;\n  }\n\n  &:last-child {\n    border-bottom: none;\n    border-radius: 0 0 0.375rem 0.375rem;\n  }\n"])));
function PolygonControls(props) {
  var geometry = props.annotation.geometry;
  if (!geometry || !geometry.points || geometry.points.length === 0) return null;
  var zoomBetweenZeroAndOne = Math.abs((props.imageZoomAmount - 1) / 4 - 1);
  var fontSize = 0.875 / 5 + zoomBetweenZeroAndOne * (4 / 5);
  var paddingHorizontal = 0.875 / 5 * 8 + 4 / 5 * 8 * zoomBetweenZeroAndOne;
  var paddingVertical = 0.875 / 5 * 16 + 4 / 5 * 16 * zoomBetweenZeroAndOne;
  var x = (0, _pointsUtils.getHorizontallyCentralPoint)(geometry.points);
  var y = (0, _pointsUtils.getVerticallyLowestPoint)(geometry.points) + 10 * (1 / 5) + 10 * (4 / 5) * (1 / 10000);

  // Adjustments for better positioning near edges
  var leftPosition = x < 80 ? x + '%' : 'auto';
  var topPosition = y < 80 ? y + '%' : 'auto';
  var rightPosition = x > 80 ? 100 - x + '%' : 'auto';
  var bottomPosition = y > 80 ? 100 - y + '%' : 'auto';
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _extends({
      position: 'absolute',
      // left: `${getHorizontallyCentralPoint(geometry.points)}%`,
      // top: `${getVerticallyLowestPoint(geometry.points) + (10 * (1 / 5) + 10 * (4 / 5) * zoomBetweenZeroAndOne)}%`,
      left: leftPosition,
      top: topPosition,
      right: rightPosition,
      bottom: bottomPosition,
      zIndex: 1000
    }, props.style),
    z: true
  }, /*#__PURE__*/_react["default"].createElement(Container, {
    className: props.className
  }, geometry.points.length >= 2 && /*#__PURE__*/_react["default"].createElement(Button, {
    onClick: props.onSelectionUndo
  }, "Undo"), /*#__PURE__*/_react["default"].createElement(Button, {
    onClick: props.onSelectionClear
  }, "Clear"), geometry.points.length >= 3 && /*#__PURE__*/_react["default"].createElement(Button, {
    onClick: props.onSelectionComplete
  }, "Done")));
}
PolygonControls.defaultProps = {
  className: '',
  style: {}
};
var _default = exports["default"] = PolygonControls;
module.exports = exports.default;