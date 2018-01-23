import React from 'react';
import PropTypes from 'prop-types';

export default class HelloWorld extends React.Component {
  static propTypes = {
    name: PropTypes.string
  }

  static defaultProps = {
    name: 'Guest'
  }

  render() {
    return (
      <div className="hello-world">
        <p>Hello World: {this.props.name} </p>
      </div>
    )    
  }
}

