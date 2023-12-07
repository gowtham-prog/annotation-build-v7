"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _TextEditor = _interopRequireDefault(require("../TextEditor"));
var _pointsUtils = require("../../utils/pointsUtils");
var _templateObject, _templateObject2;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
var fadeInScale = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  from {\n    opacity: 0;\n    transform: scale(0);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n"])));
var Container = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #1a202c;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 0.375rem;\n  overflow: hidden;\n  box-shadow:\n    0px 1px 5px 0px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14),\n    0px 3px 1px -2px rgba(0, 0, 0, 0.12);\n  transform-origin: top left;\n  z-index: 1000;\n  animation: ", " 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n"])), fadeInScale);
function Editor(props) {
  var geometry = props.annotation.geometry;
  if (!geometry) return null;
  var isPolygon = geometry.type === 'POLYGON';
  var x = isPolygon ? (0, _pointsUtils.getHorizontallyCentralPoint)(geometry.points) : geometry.x;
  var y = isPolygon ? (0, _pointsUtils.getVerticallyLowestPoint)(geometry.points) + 10 * (1 / 5) + 10 * (4 / 5) * (1 / 10000) : geometry.y;

  // Adjustments for better positioning near edges
  var leftPosition = x < 80 ? x + '%' : 'auto';
  var topPosition = y < 80 ? y + geometry.height + '%' : 'auto';
  var rightPosition = x > 80 ? 100 - x - geometry.width + '%' : 'auto';
  var bottomPosition = y > 80 ? 100 - y + '%' : 'auto';
  return /*#__PURE__*/_react["default"].createElement(Container, {
    className: props.className,
    style: _extends({
      position: 'absolute',
      marginTop: '16px',
      left: "" + (isPolygon ? x + '%' : leftPosition),
      top: "" + (isPolygon ? y + '%' : topPosition),
      right: rightPosition,
      bottom: bottomPosition
    }, props.style)
  }, /*#__PURE__*/_react["default"].createElement(_TextEditor["default"], {
    onChange: function onChange(e) {
      return props.onChange(_extends({}, props.annotation, {
        data: _extends({}, props.annotation.data, {
          text: e.target.value
        })
      }));
    },
    onSubmit: props.onSubmit,
    value: props.annotation.data && props.annotation.data.text
  }));
}
Editor.defaultProps = {
  className: '',
  style: {}
};
var _default = exports["default"] = Editor;
module.exports = exports.default;