import React from 'react';
import Point from './Point';
import Editor from './Editor';
import FancyRectangle from './FancyRectangle';
import Rectangle from './Rectangle';
import Oval from './Oval';
import Content from './Content';
import Overlay from './Overlay';
import FreeHand from './FreeHand';
import Polygon from './Polygon';
import PolygonControls from './PolygonControls';
import { RectangleSelector, PointSelector, FreeHandSelector, OvalSelector, PolygonSelector } from '../selectors';
export default {
  ref: function ref() {},
  onChange: function onChange() {},
  onSubmit: function onSubmit() {},
  type: PolygonSelector.TYPE,
  selectors: [RectangleSelector, PointSelector, OvalSelector, PolygonSelector, FreeHandSelector],
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
      case RectangleSelector.TYPE:
        return /*#__PURE__*/React.createElement(FancyRectangle, {
          annotation: annotation
        });
      case PointSelector.TYPE:
        return /*#__PURE__*/React.createElement(Point, {
          annotation: annotation
        });
      case FreeHandSelector.TYPE:
        return /*#__PURE__*/React.createElement(FreeHand, {
          annotation: annotation
        });
      case PolygonSelector.TYPE:
        return /*#__PURE__*/React.createElement(Polygon, {
          annotation: annotation
        });
      case OvalSelector.TYPE:
        return /*#__PURE__*/React.createElement(Oval, {
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
    return /*#__PURE__*/React.createElement(Editor, {
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
    return /*#__PURE__*/React.createElement(PolygonControls, {
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
        case RectangleSelector.TYPE:
          return /*#__PURE__*/React.createElement(Rectangle, {
            key: key,
            annotation: annotation,
            onChange: onChange,
            onModify: onModify
          });
        case FreeHandSelector.TYPE:
          return /*#__PURE__*/React.createElement(FreeHand, {
            key: key,
            annotation: annotation,
            onChange: onChange,
            onModify: onModify
          });
        case PointSelector.TYPE:
          return /*#__PURE__*/React.createElement(Point, {
            key: key,
            annotation: annotation,
            onChange: onChange,
            onModify: onModify
          });
        case OvalSelector.TYPE:
          return /*#__PURE__*/React.createElement(Oval, {
            key: key,
            annotation: annotation,
            onChange: onChange,
            onModify: onModify
          });
        case PolygonSelector.TYPE:
          return /*#__PURE__*/React.createElement(Polygon, {
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
    return /*#__PURE__*/React.createElement(Content, {
      key: key,
      annotation: annotation
    });
  },
  renderOverlay: function renderOverlay(_ref6) {
    var type = _ref6.type,
      annotation = _ref6.annotation;
    switch (type) {
      case PolygonSelector.TYPE:
        return /*#__PURE__*/React.createElement(Overlay, null, "Click to Add Points to Annotation");
      case PointSelector.TYPE:
        return /*#__PURE__*/React.createElement(Overlay, null, "Click to Annotate");
      default:
        return /*#__PURE__*/React.createElement(Overlay, null, "Click and Drag to Annotate");
    }
  }
};