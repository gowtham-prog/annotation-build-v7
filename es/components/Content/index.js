var _templateObject;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
import React from 'react';
import styled from 'styled-components';
import { getHorizontallyCentralPoint, getVerticallyLowestPoint } from '../../utils/pointsUtils';
var Container = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\nbackground: white;\nborder-radius:6px; \nbox-shadow:\n  0px 1px 5px 0px rgba(0, 0, 0, 0.2),\n  0px 2px 2px 0px rgba(0, 0, 0, 0.14),\n  0px 3px 1px -2px rgba(0, 0, 0, 0.12);\npadding: 6px 10px; \nmargin-top: 8px;\nmargin-left: 8px;\nmargin-bottom :8px;\nmargin-right :8px;\ncolor: black; \nfont-weight: bold; \n"])));
function Content(props) {
  var geometry = props.annotation.geometry;
  if (!geometry) return null;
  var isPolygon = geometry.type === 'POLYGON';
  var x = isPolygon ? getHorizontallyCentralPoint(geometry.points) : geometry.x;
  var y = isPolygon ? getVerticallyLowestPoint(geometry.points) + 10 * (1 / 5) + 10 * (4 / 5) * (1 / 10000) : geometry.y;

  // Adjustments for better positioning near edges
  var leftPosition = x < 80 ? x + '%' : 'auto';
  var topPosition = y < 80 ? y + geometry.height + '%' : 'auto';
  var rightPosition = x > 80 ? 100 - x - geometry.width + '%' : 'auto';
  var bottomPosition = y > 80 ? 100 - y + '%' : 'auto';
  return /*#__PURE__*/React.createElement(Container, {
    style: _extends({
      position: 'absolute',
      // left: `${geometry.type === 'POLYGON' ? getHorizontallyCentralPoint(geometry.points) + '%' : geometry.x + '%'}`,
      // top: `${geometry.type === 'POLYGON'
      // ? `${getVerticallyLowestPoint(geometry.points) + 10 * (1 / 5) + 10 * (4 / 5)*(1/10000)}%`
      // : `${geometry.y + geometry.height}%`}`,
      left: "" + (isPolygon ? x + '%' : leftPosition),
      top: "" + (isPolygon ? y + '%' : topPosition),
      right: rightPosition,
      bottom: bottomPosition,
      zIndex: 100
    }, props.style),
    className: props.className,
    geometry: geometry
  }, props.annotation.data && props.annotation.data.text);
}
Content.defaultProps = {
  style: {},
  className: ''
};
export default Content;