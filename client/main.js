import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from '../imports/api/players';

const renderPlayers = (playersList) => {
    return playersList.map(player => (
        <p key={player._id}>
            {player.name} has {player.score} points(s).
            <button
                onClick={() => {
                    Players.update(player._id, { $inc: { score: 1 }})
                }}
            >
                +1
            </button>
            <button
                onClick={() => {
                    Players.update(player._id, { $inc: { score: -1 }})
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

const handleSubmit = (event) => {
    const playerName = event.target.playerName.value;
    event.preventDefault();

    if (playerName) {
        event.target.playerName.value = '';
        Players.insert({
            name: playerName,
            score: 0
        });
    }
};

Meteor.startup(function () {
    Tracker.autorun(() => {
        const players = Players.find().fetch();

        let title = 'Score Keep';
        let name = 'Kennedy';
        let jsx = (
            <div>
                <h1>{title}</h1>
                <p>Hello {name}</p>
                {renderPlayers(players)}

                <form onSubmit={handleSubmit}>
                    <input name="playerName" placeholder="Player name" />
                    <button>Add Player</button>
                </form>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    });
});
