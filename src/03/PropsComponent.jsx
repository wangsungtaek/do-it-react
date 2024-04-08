/* eslint-disable react/no-typos */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropsComponent extends Component {
  render() {
    return <div className="message-container">{this.props.name}</div>;
  }
}

PropsComponent.PropTypes = {
  name: PropTypes.string,
};

export default PropsComponent;
