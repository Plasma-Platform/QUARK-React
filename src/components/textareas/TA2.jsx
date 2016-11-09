import React, {Component, PropTypes}  from 'react';

import InputElement from '../AbstractField.jsx';

export default class TA2 extends Component {
  static propTypes = {
    type             : React.PropTypes.string,
    id               : React.PropTypes.string,
    value            : React.PropTypes.string,
    disabled         : React.PropTypes.bool,
    label            : React.PropTypes.string,
    notificationText : React.PropTypes.string,
    onValidate       : React.PropTypes.func
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
        sizeType='TA2'
        type={ this.props.type || 'search' }
      />
    );
  }
}