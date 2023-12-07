"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
var Inner = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\npadding: 4px;\nmin-width: 20px; \nbox-sizing: content-box;\n\ninput {\n  border: 0;\n  font-size: 14px;\n  margin: 0 0;\n  min-height: 30px;\n  outline: 0;\n  width: 100%; \n  font-weight: bold\n  text-align: center;\n  padding: 0 5px ;\n}\n"])));
var Button = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\nbackground: #0c8cf5;\nborder: 0;\nbox-sizing: border-box;\ncolor: white;\nfont-size: 1rem;\nmargin: 0;\noutline: 0;\npadding: 8px; \ntext-align: center;\ntext-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);\nwidth: 100%;\ncursor: pointer;\ntransition: background 0.21s ease-in-out;\n\n&:focus,\n&:hover {\n  background: #3699ff;\n}\n"])));
function TextEditor(props) {
  var _useState = (0, _react.useState)(props.value || ''),
    inputValue = _useState[0],
    setInputValue = _useState[1]; // Initialize with props.value or an empty string

  var handleInputChange = function handleInputChange(e) {
    setInputValue(e.target.value);
    if (props.onChange) {
      props.onChange(e);
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Inner, null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "Add a Label",
    onFocus: props.onFocus,
    onBlur: props.onBlur,
    onChange: handleInputChange,
    value: inputValue
  })), inputValue && /*#__PURE__*/_react["default"].createElement(Button, {
    onClick: props.onSubmit
  }, "Add +"));
}
var _default = exports["default"] = TextEditor;
module.exports = exports.default;