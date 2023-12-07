function getOffsetCoordinates(e, container) {
  // nativeEvent.offsetX gives inconsistent results when dragging
  // up and to the left rather than the more natural down and to the
  // right. The reason could be browser implementation (it is still experimental)
  // or it could be that nativeEvent offsets are based on target rather than
  // currentTarget.
  // To keep consistent behavior of the selector use the bounding client rect.
  var rect = container.getBoundingClientRect();
  var offsetX = e.clientX - rect.x;
  var offsetY = e.clientY - rect.y;
  return {
    offsetX: offsetX,
    offsetY: offsetY
  };
}
function pxToPercentage(px, total) {
  return Math.round(px / total * 100);
}
function percentageToPx(percentage, total) {
  return Math.round(percentage * total / 100);
}
function getOffsetCoordPercentage(e, container) {
  var _getOffsetCoordinates = getOffsetCoordinates(e, container),
    offsetX = _getOffsetCoordinates.offsetX,
    offsetY = _getOffsetCoordinates.offsetY;
  return {
    x: offsetX / container.offsetWidth * 100,
    xPx: offsetX,
    yPx: offsetY,
    y: offsetY / container.offsetHeight * 100
  };
}
function getCoordPercentage(e) {
  return getOffsetCoordPercentage(e, e.currentTarget);
}
export { getOffsetCoordPercentage, getCoordPercentage, pxToPercentage, percentageToPx };