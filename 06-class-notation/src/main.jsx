import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from 'hello-world';

class App extends React.Component {
  render() {
    return (<div>
        <HelloWorld name="ynon" />
        <HelloWorld />
        <HelloWorld />
      </div>);
  }
}

ReactDOM.render(<App />, document.querySelector('main'));

