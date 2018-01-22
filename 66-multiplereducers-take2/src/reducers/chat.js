import Immutable from 'immutable';
import { symbols } from 'actions/chat';
import { symbols as gameSymbols } from 'actions/xogame';

const initialState = Immutable.fromJS({
  messages: [],
});

function addMessage(state, text) {
  return state.update('messages', (val) => val.push(text));
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case symbols.addMessage:
      return addMessage(state, action.payload);

    case gameSymbols.play:
      return addMessage(state, "Nice Move...");

    default:
      return state;
  }
}





