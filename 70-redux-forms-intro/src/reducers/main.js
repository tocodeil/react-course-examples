import Immutable from 'immutable';

const initialState = Immutable.Map({
});

export default function(state=initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}
