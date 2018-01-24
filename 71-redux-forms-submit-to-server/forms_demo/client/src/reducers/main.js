import Immutable from 'immutable';

const initialState = Immutable.Map({
  flash: '',
});

export default function(state=initialState, action) {
  console.dir(action);
  switch(action.type) {

    case "@@redux-form/SET_SUBMIT_SUCCEEDED":
      return state.set('flash', 'Bravo! You submitted form successfully');

    case "@@redux-form/CHANGE":
      return state.set('flash', '');

    default:
      return state;
  }
}
