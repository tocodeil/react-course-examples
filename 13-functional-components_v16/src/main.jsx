import React from 'react';
import ReactDOM from 'react-dom';

function Hello(props) {
  return <p>
    Hello: {props.name}
  </p>
}

Hello.propTypes    = { name: React.PropTypes.string };
Hello.defaultProps = { name: "Guest" };

const App = function(props) {
  return (<div>
    <Hello name="ynon" />
    <Hello />
  </div>);
}

ReactDOM.render(<App />, document.querySelector('main'));

