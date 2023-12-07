import React, { useState, useLayoutEffect } from 'react';
import { Rnd as Resizable } from 'react-rnd';
import { percentageToPx, pxToPercentage } from '../../utils/offsetCoordinates';
function Rectangle(props) {
  var _props$annotation = props.annotation,
    geometry = _props$annotation.geometry,
    data = _props$annotation.data;
  var _useState = useState(false),
    view = _useState[0],
    setView = _useState[1];
  if (!geometry) return null;
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
  var handleDragStop = function handleDragStop(e, d) {
    var newX = pxToPercentage(d.x, parentDimensions.width);
    var newY = pxToPercentage(d.y, parentDimensions.height);
    geometry.x = newX;
    geometry.y = newY;
    geometry.xPx = d.x;
    geometry.yPx = d.y;
    setView(false);
    props.onChange(props.annotation);
    props.onModify(props.annotation);
  };
  var handleResizeStop = function handleResizeStop(e, direction, ref, d) {
    var newWidth = parseFloat(ref.style.width);
    var newHeight = parseFloat(ref.style.height);
    geometry.width = newWidth;
    geometry.height = newHeight;
    props.onChange(props.annotation);
    props.onModify(props.annotation);
  };
  return /*#__PURE__*/React.createElement(Resizable, {
    id: data.id,
    style: {
      border: 'dashed 3px red',
      pointerEvents: 'auto',
      zIndex: 10,
      backgroundColor: 'rgba(128, 0, 0, 0.5)'
    },
    bounds: "parent",
    onDragStart: function onDragStart() {
      return setView(true);
    },
    onDragStop: handleDragStop,
    onResizeStop: handleResizeStop,
    position: {
      y: percentageToPx(geometry.y, parentDimensions.height),
      x: percentageToPx(geometry.x, parentDimensions.width)
    },
    size: {
      width: geometry.width + "%",
      height: geometry.height + "%"
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
Rectangle.defaultProps = {
  className: '',
  style: {}
};
export default Rectangle;