/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import {
  withRouter, // NavLink,
} from 'react-router-dom';

class About extends Component {
  render() {
    return <div className="welcome"> All there is to know about meee</div>;
  }
}

export default withRouter((About));
