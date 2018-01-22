// Decide State
// Decide Actions
//
// Redux
//

import { createStore, combineReducers } from 'redux';
import gameReducer from 'reducers/xogame';
import chatReducer from 'reducers/chat';

const reducer = combineReducers({
  game: gameReducer,
  chat: chatReducer,
});

const store = createStore(reducer);

export default store;




















