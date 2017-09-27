import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from '../imports/api/players';
import TitleBar from '../imports/ui/TitleBar';
import AddPlayer from '../imports/ui/AddPlayer';

const renderPlayers = (playersList) => {
  return playersList.map(player => (
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
  ));
};

Meteor.startup(function () {
  Tracker.autorun(() => {
    const players = Players.find().fetch();

    const title = 'Score Keep';
    const subtitle = 'Created by Kennedy';
    const name = 'Kennedy';
    const jsx = (
      <div>
        <TitleBar title={title} subtitle={subtitle} />

        <p>Hello {name}</p>
        {renderPlayers(players)}
        <AddPlayer />
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
