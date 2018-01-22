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

ex1 = state.set('username', 'Carla');

ex2 = state.update('messages', function(messages) {
  return messages.push(
    { from: 'Carla', text: 'hi there everyone' },
    { from: 'Carla', text: 'I dig immutables'}
  );
});

ex3 = state.update('messages', function(messages) {
  return messages.filter(function(msg) {
    return msg.get('from') !== 'joe';
  });
});

ex4 = state.update('messages', function(messages) {
  return messages.filter(function(msg) {
    return msg.get('text').length > 7;
  });
});


ex5 = state.update('rooms', function(rooms) {
  return rooms.map(function(room) {
    return room.get('id') === 2 ? 
      room.set('current', true) :
      room.deleteIn('current');
  });
});

const App = function(props) {
  return <p>Hello World</p>;
}

ReactDOM.render(<App />, document.querySelector('main'));

