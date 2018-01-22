import React from 'react';

export default React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      name: 'Guest'
    };
  },

  render() {
    return (<div className="hello-world">
      <p>Hello World: {this.props.name} </p>
    </div>)    
  }
});

