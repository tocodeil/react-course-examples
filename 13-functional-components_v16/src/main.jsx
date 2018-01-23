import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function Hello(props) {
  return <p>
    Hello: {props.name}
  </p>
}

Hello.propTypes    = { name: PropTypes.string };
Hello.defaultProps = { name: "Guest" };

const App = function(props) {
  return (<div>
    <Hello name="ynon" />
    <Hello />
  </div>);
}

ReactDOM.render(<App />, document.querySelector('main'));

