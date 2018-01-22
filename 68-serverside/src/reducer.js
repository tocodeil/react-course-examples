// Decide State
// Decide Actions
//
// Redux
//

import { createStore, combineReducers, applyMiddleware } from 'redux';
import gameReducer from 'reducers/xogame';
import chatReducer from 'reducers/chat';
import thunk from 'redux-thunk';
import * as actions from 'actions/chat';

const reducer = combineReducers({
  game: gameReducer,
  chat: chatReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));
store.dispatch(actions.refreshMessages());

export default store;




















