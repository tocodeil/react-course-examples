import React from 'react';
import ReactDOM from 'react-dom';
import store from 'reducer';

const App = function(props) {
  return <p>Hello World</p>;
}

ReactDOM.render(<App />, document.querySelector('main'));

