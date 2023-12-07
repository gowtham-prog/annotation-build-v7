var _templateObject, _templateObject2;
function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
var Inner = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\npadding: 4px;\nmin-width: 20px; \nbox-sizing: content-box;\n\ninput {\n  border: 0;\n  font-size: 14px;\n  margin: 0 0;\n  min-height: 30px;\n  outline: 0;\n  width: 100%; \n  font-weight: bold\n  text-align: center;\n  padding: 0 5px ;\n}\n"])));
var Button = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\nbackground: #0c8cf5;\nborder: 0;\nbox-sizing: border-box;\ncolor: white;\nfont-size: 1rem;\nmargin: 0;\noutline: 0;\npadding: 8px; \ntext-align: center;\ntext-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);\nwidth: 100%;\ncursor: pointer;\ntransition: background 0.21s ease-in-out;\n\n&:focus,\n&:hover {\n  background: #3699ff;\n}\n"])));
function TextEditor(props) {
  var _useState = useState(props.value || ''),
    inputValue = _useState[0],
    setInputValue = _useState[1]; // Initialize with props.value or an empty string

  var handleInputChange = function handleInputChange(e) {
    setInputValue(e.target.value);
    if (props.onChange) {
      props.onChange(e);
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Inner, null, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Add a Label",
    onFocus: props.onFocus,
    onBlur: props.onBlur,
    onChange: handleInputChange,
    value: inputValue
  })), inputValue && /*#__PURE__*/React.createElement(Button, {
    onClick: props.onSubmit
  }, "Add +"));
}
export default TextEditor;