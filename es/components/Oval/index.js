function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useLayoutEffect, useState } from 'react';
import { Rnd as Resizable } from 'react-rnd';
import { percentageToPx, pxToPercentage } from '../../utils/offsetCoordinates';
function Oval(props) {
  var _props$annotation = props.annotation,
    geometry = _props$annotation.geometry,
    data = _props$annotation.data,
    selection = _props$annotation.selection;
  var _useState = useState(false),
    view = _useState[0],
    setView = _useState[1];
  var _useState2 = useState({
      width: 0,
      height: 0
    }),
    parentDimensions = _useState2[0],
    setParentDimensions = _useState2[1];
  useLayoutEffect(function () {
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
  return /*#__PURE__*/React.createElement(Resizable, {
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
      var newX = pxToPercentage(d.x, parentDimensions.width);
      var newY = pxToPercentage(d.y, parentDimensions.height);
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
      y: percentageToPx(geometry.y, parentDimensions.height),
      x: percentageToPx(geometry.x, parentDimensions.width)
    }
  }, view && /*#__PURE__*/React.createElement("span", {
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
export default Oval;