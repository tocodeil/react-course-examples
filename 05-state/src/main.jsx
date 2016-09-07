import React from 'react';
import ReactDOM from 'react-dom';
import Clicker from 'clicker';

const App = React.createClass({
  render() {
    return (<div>
        <Clicker />
        <Clicker />
        <Clicker />
        <Clicker />
        <Clicker />
      </div>);
  }
});

ReactDOM.render(<App />, document.querySelector('main'));

