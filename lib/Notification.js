 'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Notification = function (_Component) {
  (0, _inherits3.default)(Notification, _Component);

  function Notification() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Notification);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Notification.__proto__ || (0, _getPrototypeOf2.default)(Notification)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      top: 'initial',
      left: 'initial',
      right: 'initial',
      bottom: 'initial'
    }, _this.getContainerWidth = function () {
      if (_this.container) _this.setState({ width: _this.container.offsetWidth + 2 });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Notification, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getContainerWidth();
    }
  }, {
    key: 'setPosition',
    value: function setPosition(coords) {
      this.setState(coords);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames,
          _this2 = this;

      console.log('notification render');
      var classes = (0, _classnames3.default)((_classnames = {
        'notification': true
      }, (0, _defineProperty3.default)(_classnames, 'notification--' + this.props.size, true), (0, _defineProperty3.default)(_classnames, 'notification--' + this.props.status, true), (0, _defineProperty3.default)(_classnames, 'notification--' + this.props.position, true), (0, _defineProperty3.default)(_classnames, 'notification--' + this.props.position + '-arrow', true), (0, _defineProperty3.default)(_classnames, this.props.className, this.props.className), _classnames));

      var parameters = {
        top: this.state.top,
        left: this.state.left,
        right: this.state.right,
        bottom: this.state.bottom,
        maxWidth: this.props.maxWidth,
        width: this.state.width
      };

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(container) {
            return _this2.container = container;
          },
          className: classes,
          style: parameters
        },
        _react2.default.createElement(
          'div',
          { className: 'notification__container' },
          _react2.default.createElement(
            'span',
            { className: 'notification__text' },
            this.props.text
          ),
          this.props.size === 'large' ? _react2.default.createElement(
            'div',
            { className: 'notification__closeBlock' },
            _react2.default.createElement('div', {
              className: 'notification__closeBlock__closeArea',
              onTouchTap: this.props.onHideNotification
            })
          ) : null
        )
      );
    }
  }]);
  return Notification;
}(_react.Component);

Notification.propTypes = {
  className: _react.PropTypes.string,
  text: _react.PropTypes.string.isRequired,
  size: _react.PropTypes.string.isRequired,
  maxWidth: _react.PropTypes.string,
  onHideNotification: _react.PropTypes.func,
  status: _react.PropTypes.oneOf(['default', 'success', 'error']).isRequired,
  position: _react.PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired
};
exports.default = Notification;