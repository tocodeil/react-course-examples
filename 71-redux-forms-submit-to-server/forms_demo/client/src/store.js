import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import mainReducer from './reducers/main';

const reducer = combineReducers({
  main: mainReducer,
  form: reduxFormReducer,
});

const store = createStore(reducer);

export default store;

