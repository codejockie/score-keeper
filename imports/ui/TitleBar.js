import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <em>{this.props.subtitle}</em>
      </div>
    )
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

TitleBar.defaultProps = {};
