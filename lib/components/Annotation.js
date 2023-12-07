"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _compose = _interopRequireDefault(require("../utils/compose"));
var _isMouseHovering = _interopRequireDefault(require("../utils/isMouseHovering"));
var _withRelativeMousePos = _interopRequireDefault(require("../utils/withRelativeMousePos"));
var _selectors = require("../selectors");
var _defaultProps = _interopRequireDefault(require("./defaultProps"));
var _Overlay = _interopRequireDefault(require("./Overlay"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
var Container = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  clear: both;\n  position: relative;\n  width: 100%;\n  &:hover ", " {\n    opacity: 1;\n  }\n"])), _Overlay["default"]);
var Img = _styledComponents["default"].img(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  display: block;\n  width: 100%;\n"])));
var Items = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n"])));
var Target = Items;
var Annotation = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Annotation, _Component);
  function Annotation() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _defineProperty(_assertThisInitialized(_this), "forceUpdateComponent", function () {
      _this.forceUpdate();
    });
    _defineProperty(_assertThisInitialized(_this), "setInnerRef", function (el) {
      _this.container = el;
      _this.props.ref(el);
      _this.props.relativeMousePos.ref(el);
    });
    _defineProperty(_assertThisInitialized(_this), "getSelectorByType", function (type) {
      return _this.props.selectors.find(function (s) {
        return s.TYPE === type;
      });
    });
    _defineProperty(_assertThisInitialized(_this), "getTopAnnotationAt", function (x, y) {
      var _this$props = _this.props,
        annotations = _this$props.annotations,
        getSelectorByType = _this$props.getSelectorByType,
        container = _this$props.container;
      if (!container) return;
      var intersections = annotations.map(function (annotation) {
        var geometry = annotation.geometry;
        var selector = getSelectorByType(geometry.type);
        return selector.intersects({
          x: x,
          y: y
        }, geometry, container) ? annotation : false;
      }).filter(function (a) {
        return !!a;
      }).sort(function (a, b) {
        var aSelector = getSelectorByType(a.geometry.type);
        var bSelector = getSelectorByType(b.geometry.type);
        return aSelector.area(a.geometry, container) - bSelector.area(b.geometry, container);
      });
      return intersections[0];
    });
    _defineProperty(_assertThisInitialized(_this), "onTargetMouseMove", function (e) {
      _this.props.relativeMousePos.onMouseMove(e);
      _this.onMouseMove(e);
    });
    _defineProperty(_assertThisInitialized(_this), "onTargetMouseLeave", function (e) {
      _this.props.relativeMousePos.onMouseLeave(e);
    });
    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function (e) {
      _this.callSelectorMethod('onMouseUp', e);
    });
    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (e) {
      _this.callSelectorMethod('onMouseDown', e);
    });
    _defineProperty(_assertThisInitialized(_this), "onMouseMove", function (e) {
      _this.callSelectorMethod('onMouseMove', e);
    });
    _defineProperty(_assertThisInitialized(_this), "onClick", function (e) {
      var onClickCheckFunc = _this.props.onClickCheckFunc;
      if (!onClickCheckFunc || onClickCheckFunc(e)) {
        _this.callSelectorMethod('onClick', e);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onSelectionComplete", function () {
      _this.callSelectorMethod('onSelectionComplete');
    });
    _defineProperty(_assertThisInitialized(_this), "onSelectionClear", function () {
      _this.callSelectorMethod('onSelectionClear');
    });
    _defineProperty(_assertThisInitialized(_this), "onSelectionUndo", function () {
      _this.callSelectorMethod('onSelectionUndo');
    });
    _defineProperty(_assertThisInitialized(_this), "onSubmit", function () {
      _this.props.onSubmit(_this.props.value);
    });
    _defineProperty(_assertThisInitialized(_this), "onModify", function (annotation) {
      _this.props.onSubmit(annotation);
    });
    _defineProperty(_assertThisInitialized(_this), "callSelectorMethod", function (methodName, e) {
      if (_this.props.disableAnnotation) {
        return;
      }
      if (_this.props[methodName]) {
        _this.props[methodName](e);
      } else {
        var selector = _this.getSelectorByType(_this.props.type);
        if (selector && selector.methods[methodName]) {
          var value = selector.methods[methodName](_this.props.value, e);
          if (typeof value === 'undefined') {
            if (process.env.NODE_ENV !== 'production') {
              console.error("\n              " + methodName + " of selector type " + _this.props.type + " returned undefined.\n              Make sure to explicitly return the previous state\n            ");
            }
          } else {
            _this.props.onChange(value);
          }
        }
      }
    });
    _defineProperty(_assertThisInitialized(_this), "shouldAnnotationBeActive", function (annotation, top) {
      if (_this.props.activeAnnotations) {
        var isActive = !!_this.props.activeAnnotations.find(function (active) {
          return _this.props.activeAnnotationComparator(annotation, active);
        });
        return isActive || top === annotation;
      } else {
        return top === annotation;
      }
    });
    return _this;
  }
  var _proto = Annotation.prototype;
  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener("resize", this.forceUpdateComponent);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("resize", this.forceUpdateComponent);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.imageZoomAmount !== this.props.imageZoomAmount) {
      this.forceUpdateComponent();
    }
  };
  _proto.render = function render() {
    var _this2 = this;
    var props = this.props;
    var isMouseHovering = props.isMouseHovering,
      renderHighlight = props.renderHighlight,
      renderContent = props.renderContent,
      renderSelector = props.renderSelector,
      renderEditor = props.renderEditor,
      renderOverlay = props.renderOverlay,
      renderPolygonControls = props.renderPolygonControls;
    var topAnnotationAtMouse = this.getTopAnnotationAt(this.props.relativeMousePos.x, this.props.relativeMousePos.y);
    return /*#__PURE__*/_react["default"].createElement(Container, {
      style: this.props.style,
      ref: isMouseHovering.ref,
      onMouseLeave: this.onTargetMouseLeave,
      id: "container-RIA"
    }, /*#__PURE__*/_react["default"].createElement(Img, {
      className: this.props.className,
      style: this.props.style
      // onLoad={onImageLoad}
      ,
      alt: this.props.alt,
      src: this.props.src,
      draggable: false,
      ref: this.setInnerRef
    }), /*#__PURE__*/_react["default"].createElement(Items, null, this.props.annotations.map(function (annotation) {
      return renderHighlight({
        key: annotation.data.id,
        annotation: annotation,
        onChange: _this2.props.onChange,
        onModify: _this2.onModify
        // active: this.shouldAnnotationBeActive(annotation, topAnnotationAtMouse)
      });
    }), !this.props.disableSelector && this.props.value && this.props.value.geometry && renderSelector({
      annotation: this.props.value
    })), /*#__PURE__*/_react["default"].createElement(Target, {
      onClick: this.onClick,
      onMouseUp: this.onMouseUp,
      onMouseDown: this.onMouseDown,
      onMouseMove: this.onTargetMouseMove
    }), !this.props.disableOverlay && renderOverlay({
      type: this.props.type,
      annotation: this.props.value
    }), this.props.annotations.map(function (annotation) {
      return (
        /* this.shouldAnnotationBeActive(annotation, topAnnotationAtMouse)
        && ( */
        renderContent({
          key: annotation.data.id,
          annotation: annotation,
          imageZoomAmount: _this2.props.imageZoomAmount
        })
        // )
      );
    }), !this.props.disableEditor && this.props.value && this.props.value.selection && this.props.value.selection.showEditor && renderEditor({
      annotation: this.props.value,
      onChange: this.props.onChange,
      onSubmit: this.onSubmit,
      imageZoomAmount: this.props.imageZoomAmount
    }), this.props.value && this.props.value.geometry && this.props.value.geometry.type === _selectors.PolygonSelector.TYPE && (!this.props.value.selection || !this.props.value.selection.showEditor) && renderPolygonControls({
      annotation: this.props.value,
      onSelectionComplete: this.onSelectionComplete,
      onSelectionClear: this.onSelectionClear,
      onSelectionUndo: this.onSelectionUndo,
      imageZoomAmount: this.props.imageZoomAmount
    }));
  };
  return Annotation;
}(_react.Component);
Annotation.propTypes = process.env.NODE_ENV !== "production" ? {
  ref: _propTypes["default"].func,
  onMouseUp: _propTypes["default"].func,
  onMouseDown: _propTypes["default"].func,
  onMouseMove: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  // This prop represents how zoom the image is (default: 1)
  imageZoomAmount: _propTypes["default"].number,
  // This function is run before the onClick callback is executed (onClick
  // is only called if onClickCheckFunc resolve to true or doesn't exist)
  onClickCheckFunc: _propTypes["default"].func,
  onSelectionComplete: _propTypes["default"].func,
  onSelectionClear: _propTypes["default"].func,
  onSelectionUndo: _propTypes["default"].func,
  annotations: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    type: _propTypes["default"].string
  })).isRequired,
  type: _propTypes["default"].string,
  selectors: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    TYPE: _propTypes["default"].string,
    intersects: _propTypes["default"].func.isRequired,
    area: _propTypes["default"].func.isRequired,
    methods: _propTypes["default"].object.isRequired
  })).isRequired,
  value: _propTypes["default"].shape({
    selection: _propTypes["default"].object,
    geometry: _propTypes["default"].shape({
      type: _propTypes["default"].string.isRequired
    }),
    data: _propTypes["default"].object
  }),
  onChange: _propTypes["default"].func,
  onSubmit: _propTypes["default"].func,
  activeAnnotationComparator: _propTypes["default"].func,
  activeAnnotations: _propTypes["default"].arrayOf(_propTypes["default"].any),
  disableAnnotation: _propTypes["default"].bool,
  disableSelector: _propTypes["default"].bool,
  renderSelector: _propTypes["default"].func,
  disableEditor: _propTypes["default"].bool,
  renderEditor: _propTypes["default"].func,
  renderHighlight: _propTypes["default"].func.isRequired,
  renderContent: _propTypes["default"].func.isRequired,
  disableOverlay: _propTypes["default"].bool,
  renderOverlay: _propTypes["default"].func.isRequired,
  renderPolygonControls: _propTypes["default"].func.isRequired
} : {};
Annotation.defaultProps = _defaultProps["default"];
var _default = exports["default"] = (0, _compose["default"])((0, _isMouseHovering["default"])(), (0, _withRelativeMousePos["default"])())(Annotation);
module.exports = exports.default;