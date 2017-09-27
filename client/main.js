import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from '../imports/api/players';
import TitleBar from '../imports/ui/TitleBar';
import AddPlayer from '../imports/ui/AddPlayer';
import Player from "../imports/ui/Player";

const renderPlayers = (playersList) => {
  return playersList.map(player => (
    <Player key={player._id} player={player} />
  ))
};

Meteor.startup(function () {
  Tracker.autorun(() => {
    const players = Players.find().fetch();

    const title = 'Score Keep';
    const subtitle = 'Created by Kennedy';
    const jsx = (
      <div>
        <TitleBar title={title} subtitle={subtitle} />

        {renderPlayers(players)}
        <AddPlayer />
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
