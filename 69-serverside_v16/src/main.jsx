import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './reducer';
import XOGame from './xogame';
import Chat from './chat';

const App = function(props) {
  return <Provider store={props.store}>
    <div>
      <div className="half"><XOGame /></div>
      <div className="half"><Chat /></div>
    </div>
    </Provider>
}

ReactDOM.render(<App store={store} />, document.querySelector('main'));


