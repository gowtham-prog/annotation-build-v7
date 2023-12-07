"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRnd = require("react-rnd");
var _offsetCoordinates = require("../../utils/offsetCoordinates");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Oval(props) {
  var _props$annotation = props.annotation,
    geometry = _props$annotation.geometry,
    data = _props$annotation.data,
    selection = _props$annotation.selection;
  var _useState = (0, _react.useState)(false),
    view = _useState[0],
    setView = _useState[1];
  var _useState2 = (0, _react.useState)({
      width: 0,
      height: 0
    }),
    parentDimensions = _useState2[0],
    setParentDimensions = _useState2[1];
  (0, _react.useLayoutEffect)(function () {
    var updateParentDimensions = function updateParentDimensions() {
      var parent = document.getElementById('container-RIA');
      var _parent$getBoundingCl = parent.getBoundingClientRect(),
        width = _parent$getBoundingCl.width,
        height = _parent$getBoundingCl.height;
      setParentDimensions({
        width: width,
        height: height
      });
    };
    var handleLoad = function handleLoad() {
      updateParentDimensions();
    };
    updateParentDimensions();
    window.addEventListener('load', handleLoad);
    window.addEventListener('resize', handleLoad);
    return function () {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('resize', handleLoad);
    };
  }, [props.annotation]);
  if (!parentDimensions.width || !parentDimensions.height) {
    return null;
  }
  if (!geometry) return null;
  return /*#__PURE__*/_react["default"].createElement(_reactRnd.Rnd, {
    className: props.className,
    style: _extends({
      border: 'dashed 3px red',
      borderRadius: '100%',
      boxSizing: 'border-box',
      transition: 'box-shadow 0.21s ease-in-out',
      position: 'absolute',
      backgroundColor: 'rgba(128, 0, 0, 0.5)',
      zIndex: 100
    }, props.style),
    bounds: "parent",
    size: {
      height: geometry.height + "%",
      width: geometry.width + "%"
    },
    onDragStart: function onDragStart() {
      return setView(true);
    },
    onDragStop: function onDragStop(e, d, k) {
      var newX = (0, _offsetCoordinates.pxToPercentage)(d.x, parentDimensions.width);
      var newY = (0, _offsetCoordinates.pxToPercentage)(d.y, parentDimensions.height);
      geometry.x = newX;
      geometry.y = newY;
      geometry.xPx = d.x;
      geometry.yPx = d.y;
      setView(false);
      props.onChange(props.annotation);
      props.onModify(props.annotation);
    },
    enableResizing: !selection ? {
      bottom: true,
      top: true,
      left: true,
      right: true
    } : false,
    disableDragging: !selection ? false : true,
    onResizeStop: function onResizeStop(e, direction, ref, d) {
      var newWidth = parseFloat(ref.style.width);
      var newHeight = parseFloat(ref.style.height);
      geometry.width = newWidth;
      geometry.height = newHeight;
      props.onChange(props.annotation);
      props.onModify(props.annotation);
    },
    position: {
      y: (0, _offsetCoordinates.percentageToPx)(geometry.y, parentDimensions.height),
      x: (0, _offsetCoordinates.percentageToPx)(geometry.x, parentDimensions.width)
    }
  }, view && /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      position: 'absolute',
      top: '0%',
      left: '100%',
      backgroundColor: 'white',
      padding: '5px',
      border: '1px solid black',
      borderRadius: '5px',
      transform: 'translate(-50%, -50%)',
      fontWeight: '400',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '16px'
    }
  }, data.text));
}
Oval.defaultProps = {
  className: '',
  style: {}
};
var _default = exports["default"] = Oval;
module.exports = exports.default;