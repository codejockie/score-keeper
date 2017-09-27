import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from '../imports/api/players';
import App from '../imports/ui/App';

Meteor.startup(function () {
  Tracker.autorun(() => {
    const players = Players.find().fetch();
    const title = 'Score Keep';

    ReactDOM.render(
      <App title={title} players={players} />,
      document.getElementById('app')
    );
  });
});
