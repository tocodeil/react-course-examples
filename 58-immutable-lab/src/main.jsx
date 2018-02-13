import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';

const state = Immutable.fromJS({
  rooms: [
    { id: 0, name: 'Lobby', current: true },
    { id: 1, name: 'The-Club' },
    { id: 2, name: 'Food and Drinks' },
    { id: 3, name: 'Life etc.' }
  ],
  messages: [
    { from: 'joe', text: 'Morning all' },
    { from: 'jane', text: 'Hi joe' }
  ],
  username: 'jack',
  otherUsers: [ 'joe', 'jane' ]
});

