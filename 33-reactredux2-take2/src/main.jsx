import React from 'react';
import ReactDOM from 'react-dom';
import store from 'reducer';
import XOGame from 'xogame';
import { Provider } from 'react-redux';

const App = function(props) {
  return (<Provider store={props.store}>
      <div>
        <XOGame />
      </div>
    </Provider>);
}

ReactDOM.render(<App store={store} />, document.querySelector('main'));

