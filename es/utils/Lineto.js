function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
var defaultAnchor = {
  x: 0.5,
  y: 0.5
};
var defaultBorderColor = '#f00';
var defaultBorderStyle = 'solid';
var defaultBorderWidth = 1;
var optionalStyleProps = process.env.NODE_ENV !== "production" ? {
  borderColor: PropTypes.string,
  borderStyle: PropTypes.string,
  borderWidth: PropTypes.number,
  className: PropTypes.string,
  zIndex: PropTypes.number
} : {};
function LineTo(props) {
  var fromAnchor = useRef(defaultAnchor);
  var toAnchor = useRef(defaultAnchor);
  var delay = useRef(null);
  var t = useRef(null);
  var parseDelay = function parseDelay(value) {
    if (typeof value === 'undefined') {
      return value;
    } else if (typeof value === 'boolean' && value) {
      return 0;
    }
    var parsedDelay = parseInt(value, 10);
    if (isNaN(parsedDelay) || !isFinite(parsedDelay)) {
      throw new Error("LineTo could not parse delay attribute \"" + value + "\"");
    }
    return parsedDelay;
  };
  var parseAnchorPercent = function parseAnchorPercent(value) {
    var percent = parseFloat(value) / 100;
    if (isNaN(percent) || !isFinite(percent)) {
      throw new Error("LineTo could not parse percent value \"" + value + "\"");
    }
    return percent;
  };
  var parseAnchorText = function parseAnchorText(value) {
    switch (value) {
      case 'top':
        return {
          y: 0
        };
      case 'left':
        return {
          x: 0
        };
      case 'middle':
        return {
          y: 0.5
        };
      case 'center':
        return {
          x: 0.5
        };
      case 'bottom':
        return {
          y: 1
        };
      case 'right':
        return {
          x: 1
        };
      default:
        return null;
    }
  };
  var parseAnchor = function parseAnchor(value) {
    if (!value) {
      return defaultAnchor;
    }
    var parts = value.split(' ');
    if (parts.length > 2) {
      throw new Error('LineTo anchor format is "<x> <y>"');
    }
    var x = parts[0],
      y = parts[1];
    return _extends({}, defaultAnchor, x ? parseAnchorText(x) || {
      x: parseAnchorPercent(x)
    } : {}, y ? parseAnchorText(y) || {
      y: parseAnchorPercent(y)
    } : {});
  };
  useEffect(function () {
    fromAnchor.current = parseAnchor(props.fromAnchor);
    toAnchor.current = parseAnchor(props.toAnchor);
    delay.current = parseDelay(props.delay);
  }, [props.fromAnchor, props.toAnchor, props.delay]);
  useEffect(function () {
    delay.current = parseDelay(props.delay);
    if (typeof delay.current !== 'undefined') {
      t.current = setTimeout(function () {
        return forceUpdate();
      }, delay.current);
    }
    return function () {
      if (t.current) {
        clearTimeout(t.current);
        t.current = null;
      }
    };
  }, [props.delay]);
  var detect = function detect() {
    var from = props.from,
      to = props.to,
      _props$within = props.within,
      within = _props$within === void 0 ? '' : _props$within;
    var a = findElement(from);
    var b = findElement(to);
    if (!a || !b) {
      return null;
    }
    var anchor0 = fromAnchor.current;
    var anchor1 = toAnchor.current;
    var box0 = a.getBoundingClientRect();
    var box1 = b.getBoundingClientRect();
    var offsetX = window.pageXOffset;
    var offsetY = window.pageYOffset;
    if (within) {
      var p = findElement(within);
      var boxp = p.getBoundingClientRect();
      offsetX -= boxp.left + (window.pageXOffset || document.documentElement.scrollLeft) - p.scrollLeft;
      offsetY -= boxp.top + (window.pageYOffset || document.documentElement.scrollTop) - p.scrollTop;
    }
    var x0 = box0.left + box0.width * anchor0.x + offsetX;
    var x1 = box1.left + box1.width * anchor1.x + offsetX;
    var y0 = box0.top + box0.height * anchor0.y + offsetY;
    var y1 = box1.top + box1.height * anchor1.y + offsetY;
    return {
      x0: x0,
      y0: y0,
      x1: x1,
      y1: y1
    };
  };
  var findElement = function findElement(className) {
    return document.getElementsByClassName(className)[0];
  };
  var forceUpdate = function forceUpdate() {
    // Use a forceUpdate function to trigger a re-render
    setForceUpdate({});
  };
  var points = detect();
  return points ? /*#__PURE__*/React.createElement(LineElement, _extends({}, points, props)) : null;
}
LineTo.propTypes = process.env.NODE_ENV !== "production" ? _extends({
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  within: PropTypes.string,
  fromAnchor: PropTypes.string,
  toAnchor: PropTypes.string,
  delay: PropTypes.oneOfType([PropTypes.number, PropTypes.bool])
}, optionalStyleProps) : {};
export default LineTo;