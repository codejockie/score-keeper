import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends Component {
  renderSubtitle() {
    const { subtitle } = this.props;

    if (subtitle) {
      return <em className="title-bar__subtitle">{subtitle}</em>;
    }
  }
  render() {
    const { title } = this.props;

    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{title}</h1>
          {this.renderSubtitle()}
        </div>
      </div>
    )
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

TitleBar.defaultProps = {};
