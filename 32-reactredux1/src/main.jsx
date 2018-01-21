import React from 'react';
import ReactDOM from 'react-dom';
import store from './reducer';
import XOGame from './xogame';

const App = function(props) {
  return <div><XOGame store={props.store} /></div>
}

ReactDOM.render(<App store={store} />, document.querySelector('main'));

