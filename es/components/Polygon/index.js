var _templateObject;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
import React from 'react';
import styled from 'styled-components';
var PointDot = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  border: solid 3px white;\n  border-radius: 50%;\n  box-sizing: border-box;\n  box-shadow:\n    0 0 0 1px rgba(0,0,0,0.3),\n    0 0 0 2px rgba(0,0,0,0.2),\n    0 5px 4px rgba(0,0,0,0.4);\n  height: 10px;\n  position: absolute;\n  transform: translate3d(-50%, -50%, 0);\n  width: 10px;\n"])));
function Polygon(props) {
  var geometry = props.annotation.geometry;
  if (!geometry || !geometry.points || geometry.points.length === 0) return null;

  // Extract points
  var points = geometry.points;

  // Create a path string for the SVG
  var pathString = generatePathString(points);
  return /*#__PURE__*/React.createElement("div", {
    className: "linesContainer " + props.className,
    style: _extends({
      position: 'absolute',
      left: '0',
      top: '0',
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    }, props.style)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: pathString,
    stroke: "red" // Customize stroke color
    ,
    strokeWidth: "0.40" // Customize stroke width (adjust as needed)
    ,
    strokeDasharray: "1" // Add dashed line
    ,
    fill: "rgba(128, 0, 0, 0.5)",
    strokeLinecap: "round" // Rounded line ends
    ,
    strokeLinejoin: "round" // Rounded line joins
  })), geometry.points.map(function (item, i) {
    return /*#__PURE__*/React.createElement(PointDot, {
      key: i + "_" + item.x + "_" + item.y,
      style: {
        left: item.x + "%",
        top: item.y + "%"
      }
    });
  }));
}

// Function to generate a path string for the SVG
function generatePathString(points) {
  var path = [];
  for (var i = 0; i < points.length; i++) {
    var _points$i = points[i],
      x = _points$i.x,
      y = _points$i.y;
    if (i === 0) {
      path.push("M " + x + " " + y);
    } else {
      path.push("L " + x + " " + y);
    }
  }
  // Close the path to create a polygon
  path.push('Z');
  return path.join(' ');
}
Polygon.defaultProps = {
  className: '',
  style: {}
};
export default Polygon;