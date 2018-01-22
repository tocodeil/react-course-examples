import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './hello-world';

const App = React.createClass({
  render() {
    return (<div>
      <HelloWorld name="ynon" />
      <HelloWorld name="jane" />
      <HelloWorld name="bob" />
      <HelloWorld />
    </div>);
  }
});

ReactDOM.render(<App />, document.querySelector('main'));

