import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends Component {
  renderSubtitle() {
    const { subtitle } = this.props;

    if (subtitle) {
      return <em>{subtitle}</em>;
    }
  }
  render() {
    const { title } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        {this.renderSubtitle()}
      </div>
    )
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

TitleBar.defaultProps = {};
