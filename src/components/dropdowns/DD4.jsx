import React from 'react';

import Dropdown from '../Dropdown.jsx';

export default class DD4 extends React.Component {
  constructor (props) {
    super(props);

    this.getValue = this.getValue.bind(this);
  }

  getValue () {
    return this.dropdown.getValue();
  }

  render () {
    return (
      <Dropdown
        {...this.props}
        ref        = {ref => { this.dropdown = ref; }}
        showFilter = {this.props.showFilter || true}
        type       = {4}
      />
    );
  }
}
