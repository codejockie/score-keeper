import React from 'react';
import PropTypes from 'prop-types';

import Player from './Player';

export default class PlayerList extends React.Component {
  renderPlayers() {
    const {players} = this.props;

    if (players.length === 0) {
      return (
        <div className="item">
          <p className="item__message">Add your first player to get started.</p>
        </div>
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
