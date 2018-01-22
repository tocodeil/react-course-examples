import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './timer';

const App = function(props) {
  return (
    <div>
      <Timer />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('main'));

