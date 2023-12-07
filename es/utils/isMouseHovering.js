function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React, { PureComponent as Component } from 'react';
var isMouseOverElement = function isMouseOverElement(_ref) {
  var elem = _ref.elem,
    e = _ref.e;
  if (!elem) {
    return false; // Return false or handle the case where elem is not defined.
  }

  var pageY = e.pageY,
    pageX = e.pageX;
  var _elem$getBoundingClie = elem.getBoundingClientRect(),
    left = _elem$getBoundingClie.left,
    right = _elem$getBoundingClie.right,
    bottom = _elem$getBoundingClie.bottom,
    top = _elem$getBoundingClie.top;
  return pageX > left && pageX < right && pageY > top && pageY < bottom;
};
var isMouseHovering = function isMouseHovering(key) {
  if (key === void 0) {
    key = 'isMouseHovering';
  }
  return function (DecoratedComponent) {
    var IsMouseHovering = /*#__PURE__*/function (_Component) {
      _inheritsLoose(IsMouseHovering, _Component);
      function IsMouseHovering() {
        var _this;
        _this = _Component.call(this) || this;
        _defineProperty(_assertThisInitialized(_this), "onMouseMove", function (e) {
          var elem = _this.el;
          if (!elem) {
            return; // Element is not available, do nothing.
          }

          _this.setState({
            isHoveringOver: isMouseOverElement({
              elem: elem,
              e: e
            })
          });
        });
        _this.state = {
          isHoveringOver: false
        };
        return _this;
      }
      var _proto = IsMouseHovering.prototype;
      _proto.componentDidMount = function componentDidMount() {
        document.addEventListener('mousemove', this.onMouseMove);
      };
      _proto.componentWillUnmount = function componentWillUnmount() {
        document.removeEventListener('mousemove', this.onMouseMove);
      };
      _proto.render = function render() {
        var _this2 = this,
          _hocProps;
        var hocProps = (_hocProps = {}, _hocProps[key] = {
          ref: function ref(el) {
            return _this2.el = el;
          },
          isHoveringOver: this.state.isHoveringOver
        }, _hocProps);
        return /*#__PURE__*/React.createElement(DecoratedComponent, _extends({}, this.props, hocProps));
      };
      return IsMouseHovering;
    }(Component);
    IsMouseHovering.displayName = "IsMouseHovering(" + DecoratedComponent.displayName + ")";
    return IsMouseHovering;
  };
};
export default isMouseHovering;