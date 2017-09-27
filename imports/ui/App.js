import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList'

export default class App extends React.Component {
  render() {
    const { players, title } = this.props;

    return (
      <div>
        <TitleBar title={title} subtitle="Created by Kennedy" />
        <div className="wrapper">
          <PlayerList players={players} />
          <AddPlayer />
        </div>
      </div>
    )
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
};
