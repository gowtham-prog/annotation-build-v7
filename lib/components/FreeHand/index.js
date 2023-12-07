"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function DrawingShape(props) {
  var geometry = props.annotation.geometry;
  if (!geometry || !geometry.coordinates || geometry.coordinates.length < 2) {
    return null;
  }

  // Extract coordinates
  var coordinates = geometry.coordinates;

  // Create a path string for the SVG with smooth cubic Bezier curves
  var pathString = generateSmoothPathString(coordinates);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: props.className,
    style: _extends({
      position: 'absolute',
      left: '0',
      top: '0',
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    }, props.style)
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: pathString,
    stroke: "black" // Customize stroke color
    ,
    strokeWidth: "0.5" // Customize stroke width (adjust as needed)
    ,
    fill: "none",
    strokeLinecap: "round" // Rounded line ends for smoother freehand drawing
    ,
    strokeLinejoin: "round" // Rounded line joins for smoother freehand drawing
  })));
}

// Function to generate a path string with smooth cubic Bezier curves
function generateSmoothPathString(coordinates) {
  var path = [];
  path.push("M " + coordinates[0].x + " " + coordinates[0].y);
  for (var i = 1; i < coordinates.length - 2; i++) {
    var x1 = (coordinates[i].x + coordinates[i + 1].x) / 2;
    var y1 = (coordinates[i].y + coordinates[i + 1].y) / 2;
    var x2 = (coordinates[i + 1].x + coordinates[i + 2].x) / 2;
    var y2 = (coordinates[i + 1].y + coordinates[i + 2].y) / 2;
    path.push("Q " + coordinates[i + 1].x + " " + coordinates[i + 1].y + ", " + x1 + " " + y1);
    path.push("Q " + coordinates[i + 1].x + " " + coordinates[i + 1].y + ", " + x2 + " " + y2);
  }

  // Add the last two coordinates as a straight line
  path.push("L " + coordinates[coordinates.length - 1].x + " " + coordinates[coordinates.length - 1].y);
  return path.join(' ');
}
DrawingShape.defaultProps = {
  className: '',
  style: {}
};
var _default = exports["default"] = DrawingShape;
module.exports = exports.default;