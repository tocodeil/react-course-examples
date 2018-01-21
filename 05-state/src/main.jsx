import React from 'react';
import ReactDOM from 'react-dom';
import Clicker from './clicker';

class App extends React.Component {
  render() {
    return (
      <div>
        <Clicker />
        <Clicker />
        <Clicker />
        <Clicker />
        <Clicker />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('main'));

