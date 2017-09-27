import React, {Component} from 'react';

import {Players} from '../api/players';

export default class AddPlayer extends Component {
  handleSubmit(event) {
    event.preventDefault();
    const playerName = event.target.playerName.value;

    if (playerName) {
      event.target.playerName.value = '';
      Players.insert({
        name: playerName,
        score: 0
      });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input name="playerName" placeholder="Player name"/>
          <button>Add Player</button>
        </form>
      </div>
    )
  }
}
