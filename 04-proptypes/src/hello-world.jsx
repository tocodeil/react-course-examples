import React from 'react';

export default class HelloWorld extends React.Component {
  static propTypes = {
    name: React.PropTypes.string
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

