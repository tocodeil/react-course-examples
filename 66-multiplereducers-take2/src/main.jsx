import React from 'react';
import ReactDOM from 'react-dom';
import store from 'reducer';
import XOGame from 'xogame';
import Chat from 'chat';
import { Provider } from 'react-redux';

const App = function(props) {
  return <Provider store={props.store}>
    <div>
      <XOGame />
      <Chat />
    </div>
    </Provider>
}

ReactDOM.render(<App store={store} />, document.querySelector('main'));


