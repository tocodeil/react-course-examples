// Decide State
// Decide Actions
//
// Redux
//

import { createStore } from 'redux';
import Immutable from 'immutable';

const EMPTY_ROW = Immutable.fromJS([' ', ' ', ' ']);
const EMPTY_BOARD = Immutable.fromJS([EMPTY_ROW, EMPTY_ROW, EMPTY_ROW]);

const initialState = Immutable.fromJS(
  {
    board: EMPTY_BOARD,
    currentPlayer: 'X',
    playerNames: {
      O: 'Jane',
      X: 'Amy',
    },
  }
);

function play(state, i, j) {
  const currentPlayer = state.get('currentPlayer');
  const nextPlayer = (currentPlayer === 'X' ? 'O' : 'X');

  if (state.getIn(['board', i, j]) !== ' ') {
    return state;
  }

  return state.
    setIn(['board', i, j], currentPlayer).
    set('currentPlayer', nextPlayer);
}

function newGame(state, p1name, p2name) {
  return initialState.
    setIn(['playerNames', 'X'], p1name).
    setIn(['playerNames', 'O'], p2name);
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case '@@play':
      return play(state, action.payload.i, action.payload.j);

    case '@@newgame':
      return newGame(state, action.payload.p1Name, action.payload.p2Name);

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;

window.store = store;



















