import React, {Component, PropTypes}  from 'react';
import InputElement from '../AbstractField.jsx';

export default class TA6 extends Component {
  static propTypes = {
    type             : React.PropTypes.string,
    id               : React.PropTypes.string,
    value            : React.PropTypes.string,
    disabled         : React.PropTypes.bool,
    label            : React.PropTypes.string,
    notificationText : React.PropTypes.string,
    onValidate       : React.PropTypes.func,
    maxLength        : React.PropTypes.number
  };

  getValue = () => {
    return this.input.getValue();
  }

  render () {
    return (
      <InputElement
        {...this.props}
        ref={input => this.input = input}
        componentType='textarea'
        sizeType='TA6'
        type={ this.props.type || 'search'}
        className={ this.props.className || ''}
        maxLength={ this.props.maxLength || 2000 }
      />
    );
  }
}
