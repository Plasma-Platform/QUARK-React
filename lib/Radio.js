'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = Radio;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Radio(props) {
  var className = props.className,
      children = props.children,
      inputProps = (0, _objectWithoutProperties3.default)(props, ['className', 'children']);


  var customClassName = className ? ' ' + className : '';

  return _react2.default.createElement(
    'label',
    {
      className: 'tm-quark-radio' + customClassName,
      tabIndex: '0'
    },
    _react2.default.createElement('input', (0, _extends3.default)({}, inputProps, {
      className: 'tm-quark-radio__input',
      type: 'radio'
    })),
    _react2.default.createElement('i', { className: 'tm-quark-radio__icon' }),
    _react2.default.createElement(
      'span',
      { className: 'tm-quark-radio__label' },
      children
    )
  );
}

Radio.propTypes = {
  className: _react2.default.PropTypes.string
};