import React from 'react';
import PropTypes from 'prop-types';

import Player from './Player';

export default class PlayerList extends React.Component {
  renderPlayers() {
    const {players} = this.props;

    if (players.length === 0) {
      return (
        <p>
          Add your first player to get started.
        </p>
      )
    }

    return players.map(player => (
      <Player key={player._id} player={player} />
    ))
  }

  render() {
    return (
      <div>
        {this.renderPlayers()}
      </div>
    )
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
};
