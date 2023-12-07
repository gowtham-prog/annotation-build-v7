function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as turf from '@turf/turf';
import { getCoordPercentage } from '../utils/offsetCoordinates';
export var TYPE = 'POLYGON';
function isPointOnEdge(point, polygonPoints) {
  if (!polygonPoints || polygonPoints.length < 3 || !point.x || !point.y) {
    return false;
  }
  for (var i = 0; i < polygonPoints.length; i++) {
    var currentPoint = polygonPoints[i];
    var nextPoint = polygonPoints[(i + 1) % polygonPoints.length];
    var dist = turf.distance(turf.point([point.x, point.y]), turf.lineString([[currentPoint.x, currentPoint.y], [nextPoint.x, nextPoint.y]]));
    if (dist < 1e-5) {
      return true; // Point is on the edge
    }
  }

  return false;
}
export function intersects(point, geometry) {
  if (!geometry || !geometry.points || geometry.points.length < 3) return false;
  var polygonPoints = geometry.points.map(function (point) {
    return {
      x: point.x,
      y: point.y
    };
  });
  if (isPointOnEdge(point, polygonPoints)) {
    return true;
  }
  var polygon = turf.polygon([polygonPoints]);
  var pointFeature = turf.point([point.x, point.y]);
  return turf.booleanPointInPolygon(pointFeature, polygon);
}
export function area(geometry) {
  if (!geometry || !geometry.points || geometry.points.length < 3) return 0;
  var polygonPoints = geometry.points.map(function (point) {
    return [point.x, point.y];
  });
  var polygon = turf.polygon([polygonPoints]);
  return turf.area(polygon);
}
export var methods = {
  onSelectionComplete: function onSelectionComplete(annotation) {
    return _extends({}, annotation, {
      selection: _extends({}, annotation.selection, {
        showEditor: true,
        mode: 'EDITING'
      })
    });
  },
  onSelectionClear: function onSelectionClear(annotation) {
    return _extends({}, annotation, {
      geometry: _extends({}, annotation.geometry, {
        points: []
      })
    });
  },
  onSelectionUndo: function onSelectionUndo(annotation) {
    return _extends({}, annotation, {
      geometry: _extends({}, annotation.geometry, {
        points: annotation.geometry.points.slice(0, -1)
      })
    });
  },
  onClick: function onClick(annotation, e) {
    var coordOfClick = getCoordPercentage(e);
    return _extends({}, annotation, {
      geometry: _extends({}, annotation.geometry, {
        type: TYPE,
        points: !annotation.geometry ? [coordOfClick] : [].concat(annotation.geometry.points, [coordOfClick])
      }),
      selection: _extends({}, annotation.selection, {
        mode: 'SELECTING'
      })
    });
  }
};
export default {
  TYPE: TYPE,
  intersects: intersects,
  area: area,
  methods: methods
};