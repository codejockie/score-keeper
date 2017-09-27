import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from '../imports/api/players';
import TitleBar from '../imports/ui/TitleBar';
import AddPlayer from '../imports/ui/AddPlayer';
import PlayerList from '../imports/ui/PlayerList';

Meteor.startup(function () {
  Tracker.autorun(() => {
    const players = Players.find().fetch();

    const title = 'Score Keep';
    const subtitle = 'Created by Kennedy';
    const jsx = (
      <div>
        <TitleBar title={title} subtitle={subtitle} />
        <PlayerList players={players} />
        <AddPlayer />
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
