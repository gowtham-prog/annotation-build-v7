function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var getCoordPercentage = function getCoordPercentage(e) {
  return {
    x: e.nativeEvent.offsetX / e.currentTarget.offsetWidth * 100,
    y: e.nativeEvent.offsetY / e.currentTarget.offsetHeight * 100
  };
};
export var TYPE = 'RECTANGLE';
export function intersects(_ref, geometry) {
  var x = _ref.x,
    y = _ref.y;
  if (x < geometry.x) return false;
  if (y < geometry.y) return false;
  if (x > geometry.x + geometry.width) return false;
  if (y > geometry.y + geometry.height) return false;
  return true;
}
export function area(geometry) {
  return geometry.height * geometry.width;
}
export var methods = {
  onMouseDown: function onMouseDown(annotation, e) {
    if (!annotation.selection) {
      var _getCoordPercentage = getCoordPercentage(e),
        anchorX = _getCoordPercentage.x,
        anchorY = _getCoordPercentage.y;
      return _extends({}, annotation, {
        selection: _extends({}, annotation.selection, {
          anchorXpX: e.nativeEvent.offsetX,
          anchorYpX: e.nativeEvent.offsetY,
          mode: 'SELECTING',
          anchorX: anchorX,
          anchorY: anchorY
        })
      });
    } else {
      return {};
    }
    return annotation;
  },
  onMouseUp: function onMouseUp(annotation, e) {
    if (annotation.selection) {
      var selection = annotation.selection,
        geometry = annotation.geometry;
      if (!geometry) {
        return {};
      }
      switch (annotation.selection.mode) {
        case 'SELECTING':
          return _extends({}, annotation, {
            selection: _extends({}, annotation.selection, {
              showEditor: true,
              mode: 'EDITING'
            })
          });
        default:
          break;
      }
    }
    return annotation;
  },
  onMouseMove: function onMouseMove(annotation, e) {
    if (annotation.selection && annotation.selection.mode === 'SELECTING') {
      var _annotation$selection = annotation.selection,
        anchorX = _annotation$selection.anchorX,
        anchorY = _annotation$selection.anchorY,
        anchorXpX = _annotation$selection.anchorXpX,
        anchorYpX = _annotation$selection.anchorYpX;
      var _getCoordPercentage2 = getCoordPercentage(e),
        newX = _getCoordPercentage2.x,
        newY = _getCoordPercentage2.y;
      var width = newX - anchorX;
      var height = newY - anchorY;
      return _extends({}, annotation, {
        geometry: _extends({}, annotation.geometry, {
          type: TYPE,
          x: width > 0 ? anchorX : newX,
          y: height > 0 ? anchorY : newY,
          xPx: width > 0 ? anchorXpX : e.nativeEvent.offsetX,
          yPx: height > 0 ? anchorYpX : e.nativeEvent.offsetY,
          width: Math.abs(width),
          height: Math.abs(height)
        })
      });
    }
    return annotation;
  }
};
export default {
  TYPE: TYPE,
  intersects: intersects,
  area: area,
  methods: methods
};