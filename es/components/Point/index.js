import React, { useState, useLayoutEffect } from 'react';
import { Rnd as Resizable } from 'react-rnd';
import { percentageToPx, pxToPercentage } from '../../utils/offsetCoordinates';
function Point(props) {
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
  return /*#__PURE__*/React.createElement(Resizable, {
    style: {
      border: 'solid 4px red',
      borderRadius: '80%',
      boxSizing: 'border-box',
      pointerEvents: 'auto',
      zIndex: 1000,
      position: 'relative',
      transform: 'translate3d(-50%, -50%, 0)'
    },
    bounds: "parent",
    size: {
      width: 16,
      height: 16
    },
    enableResizing: false,
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
    position: {
      y: percentageToPx(geometry.y, parentDimensions.height),
      x: percentageToPx(geometry.x, parentDimensions.width)
    }
  }, view && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: '50%',
      left: '200%',
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
export default Point;