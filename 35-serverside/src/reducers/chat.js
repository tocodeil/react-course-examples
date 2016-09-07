import Immutable from 'immutable';
import { symbols } from 'actions/chat';
import { symbols as gameSymbols } from 'actions/xogame';

const initialState = Immutable.fromJS({
  messages: [],
});

// Thunk Middleware

function addMessage(state, text) {
  return state.update('messages', (val) => val.push(text));
}

function resetMessages(state, messages) {
  return state.set('messages', Immutable.fromJS(messages));
}



export default function reducer(state = initialState, action) {
  switch(action.type) {
    case symbols.addMessage:
      return addMessage(state, action.payload);

    case symbols.resetMessages:
      return resetMessages(state, action.payload);

    case gameSymbols.play:
      return addMessage(state, `Nice Move... (${action.payload.i}, ${action.payload.j})`);

    default:
      return state;
  }
}

