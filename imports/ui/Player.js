import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Players} from '../../imports/api/players';

export default class Player extends Component {
  render() {
    const { player } = this.props;

    return (
      <p key={player._id}>
        {player.name} has {player.score} points(s).
        <button
          onClick={() => {
            Players.update(player._id, {$inc: {score: 1}})
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            Players.update(player._id, {$inc: {score: -1}})
          }}
        >
          -1
        </button>
        <button
          onClick={() => Players.remove(player._id)}
        >
          X
        </button>
      </p>
    )
  }
}

Player.propTypes = {
  player: PropTypes.object.isRequired
};
