function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React, { PureComponent as Component } from 'react';
var withRelativeMousePos = function withRelativeMousePos(key) {
  if (key === void 0) {
    key = 'relativeMousePos';
  }
  return function (DecoratedComponent) {
    var WithRelativeMousePos = /*#__PURE__*/function (_Component) {
      _inheritsLoose(WithRelativeMousePos, _Component);
      function WithRelativeMousePos() {
        var _this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _Component.call.apply(_Component, [this].concat(args)) || this;
        _defineProperty(_assertThisInitialized(_this), "state", {
          x: null,
          y: null
        });
        _defineProperty(_assertThisInitialized(_this), "ref", function (el) {
          _this.container = el;
        });
        _defineProperty(_assertThisInitialized(_this), "onMouseMove", function (e) {
          _this.setState({
            x: e.nativeEvent.offsetX / _this.container.width * 100,
            y: e.nativeEvent.offsetY / _this.container.height * 100
          });
        });
        _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function (e) {
          _this.setState({
            x: null,
            y: null
          });
        });
        return _this;
      }
      var _proto = WithRelativeMousePos.prototype;
      _proto.render = function render() {
        var _hocProps;
        var hocProps = (_hocProps = {}, _hocProps[key] = {
          ref: this.ref,
          onMouseMove: this.onMouseMove,
          onMouseLeave: this.onMouseLeave,
          x: this.state.x,
          y: this.state.y
        }, _hocProps);
        return /*#__PURE__*/React.createElement(DecoratedComponent, _extends({}, this.props, hocProps));
      };
      return WithRelativeMousePos;
    }(Component);
    WithRelativeMousePos.displayName = "withRelativeMousePos(" + DecoratedComponent.displayName + ")";
    return WithRelativeMousePos;
  };
};
export default withRelativeMousePos;