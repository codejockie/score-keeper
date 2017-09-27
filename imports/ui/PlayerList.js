import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

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
        <FlipMove
          easing="cubic-bezier(0, 0.7, 0.8, 0.1)"
          maintainContainerHeight={true}
        >
          { this.renderPlayers() }
        </FlipMove>
      </div>
    )
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
};
