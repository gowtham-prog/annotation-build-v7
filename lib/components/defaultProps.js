"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Point = _interopRequireDefault(require("./Point"));
var _Editor = _interopRequireDefault(require("./Editor"));
var _FancyRectangle = _interopRequireDefault(require("./FancyRectangle"));
var _Rectangle = _interopRequireDefault(require("./Rectangle"));
var _Oval = _interopRequireDefault(require("./Oval"));
var _Content = _interopRequireDefault(require("./Content"));
var _Overlay = _interopRequireDefault(require("./Overlay"));
var _FreeHand = _interopRequireDefault(require("./FreeHand"));
var _Polygon = _interopRequireDefault(require("./Polygon"));
var _PolygonControls = _interopRequireDefault(require("./PolygonControls"));
var _selectors = require("../selectors");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = {
  ref: function ref() {},
  onChange: function onChange() {},
  onSubmit: function onSubmit() {},
  type: _selectors.PolygonSelector.TYPE,
  selectors: [_selectors.RectangleSelector, _selectors.PointSelector, _selectors.OvalSelector, _selectors.PolygonSelector, _selectors.FreeHandSelector],
  disableAnnotation: false,
  disableSelector: false,
  disableEditor: false,
  imageZoomAmount: 1,
  disableOverlay: false,
  activeAnnotationComparator: function activeAnnotationComparator(a, b) {
    return a === b;
  },
  renderSelector: function renderSelector(_ref) {
    var annotation = _ref.annotation;
    switch (annotation.geometry.type) {
      case _selectors.RectangleSelector.TYPE:
        return /*#__PURE__*/_react["default"].createElement(_FancyRectangle["default"], {
          annotation: annotation
        });
      case _selectors.PointSelector.TYPE:
        return /*#__PURE__*/_react["default"].createElement(_Point["default"], {
          annotation: annotation
        });
      case _selectors.FreeHandSelector.TYPE:
        return /*#__PURE__*/_react["default"].createElement(_FreeHand["default"], {
          annotation: annotation
        });
      case _selectors.PolygonSelector.TYPE:
        return /*#__PURE__*/_react["default"].createElement(_Polygon["default"], {
          annotation: annotation
        });
      case _selectors.OvalSelector.TYPE:
        return /*#__PURE__*/_react["default"].createElement(_Oval["default"], {
          annotation: annotation
        });
      default:
        return null;
    }
  },
  renderEditor: function renderEditor(_ref2) {
    var annotation = _ref2.annotation,
      onChange = _ref2.onChange,
      onSubmit = _ref2.onSubmit;
    return /*#__PURE__*/_react["default"].createElement(_Editor["default"], {
      annotation: annotation,
      onChange: onChange,
      onSubmit: onSubmit
    });
  },
  renderPolygonControls: function renderPolygonControls(_ref3) {
    var annotation = _ref3.annotation,
      onSelectionComplete = _ref3.onSelectionComplete,
      onSelectionClear = _ref3.onSelectionClear,
      onSelectionUndo = _ref3.onSelectionUndo,
      imageZoomAmount = _ref3.imageZoomAmount;
    return /*#__PURE__*/_react["default"].createElement(_PolygonControls["default"], {
      annotation: annotation,
      onSelectionComplete: onSelectionComplete,
      onSelectionClear: onSelectionClear,
      onSelectionUndo: onSelectionUndo,
      imageZoomAmount: imageZoomAmount
    });
  },
  renderHighlight: function renderHighlight(_ref4) {
    var key = _ref4.key,
      annotation = _ref4.annotation,
      onChange = _ref4.onChange,
      onModify = _ref4.onModify;
    if (annotation && annotation.geometry && annotation.geometry.type) {
      switch (annotation.geometry.type) {
        case _selectors.RectangleSelector.TYPE:
          return /*#__PURE__*/_react["default"].createElement(_Rectangle["default"], {
            key: key,
            annotation: annotation,
            onChange: onChange,
            onModify: onModify
          });
        case _selectors.FreeHandSelector.TYPE:
          return /*#__PURE__*/_react["default"].createElement(_FreeHand["default"], {
            key: key,
            annotation: annotation,
            onChange: onChange,
            onModify: onModify
          });
        case _selectors.PointSelector.TYPE:
          return /*#__PURE__*/_react["default"].createElement(_Point["default"], {
            key: key,
            annotation: annotation,
            onChange: onChange,
            onModify: onModify
          });
        case _selectors.OvalSelector.TYPE:
          return /*#__PURE__*/_react["default"].createElement(_Oval["default"], {
            key: key,
            annotation: annotation,
            onChange: onChange,
            onModify: onModify
          });
        case _selectors.PolygonSelector.TYPE:
          return /*#__PURE__*/_react["default"].createElement(_Polygon["default"], {
            key: key,
            annotation: annotation,
            onChange: onChange,
            onModify: onModify
          });
        default:
          return null;
      }
    } else {
      return null;
    }
  },
  renderContent: function renderContent(_ref5) {
    var key = _ref5.key,
      annotation = _ref5.annotation;
    return /*#__PURE__*/_react["default"].createElement(_Content["default"], {
      key: key,
      annotation: annotation
    });
  },
  renderOverlay: function renderOverlay(_ref6) {
    var type = _ref6.type,
      annotation = _ref6.annotation;
    switch (type) {
      case _selectors.PolygonSelector.TYPE:
        return /*#__PURE__*/_react["default"].createElement(_Overlay["default"], null, "Click to Add Points to Annotation");
      case _selectors.PointSelector.TYPE:
        return /*#__PURE__*/_react["default"].createElement(_Overlay["default"], null, "Click to Annotate");
      default:
        return /*#__PURE__*/_react["default"].createElement(_Overlay["default"], null, "Click and Drag to Annotate");
    }
  }
};
module.exports = exports.default;