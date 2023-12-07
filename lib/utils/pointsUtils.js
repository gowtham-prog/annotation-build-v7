"use strict";

exports.__esModule = true;
exports.getHorizontallyCentralPoint = getHorizontallyCentralPoint;
exports.getVerticallyLowestPoint = getVerticallyLowestPoint;
function getHorizontallyCentralPoint(points) {
  var leftMostHorizontalPoint = points.reduce(function (prev, curr) {
    return curr.x < prev.x ? curr : prev;
  }).x;
  var rightMostHorizontalPoint = points.reduce(function (prev, curr) {
    return curr.x > prev.x ? curr : prev;
  }).x;
  return leftMostHorizontalPoint + Math.round((rightMostHorizontalPoint - leftMostHorizontalPoint) / 2);
}
function getVerticallyLowestPoint(points) {
  return points.reduce(function (prev, curr) {
    return curr.y > prev.y ? curr : prev;
  }).y;
}