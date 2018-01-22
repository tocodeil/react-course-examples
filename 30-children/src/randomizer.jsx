import React from 'react';
import _ from 'underscore';

export default React.createClass({
  propTypes: {
    children: React.PropTypes.node,
  },
  
  getInitialState() {
    return { selectedItem: 0 };
  },

  randomize() {
    const count = React.Children.count(this.props.children);
    this.setState({ selectedItem: _.random(count-1)});
  },

    
  render() {
    const items = React.Children.toArray(this.props.children);
    return (<div>The List:
      {items[this.state.selectedItem]}
      <button onClick={this.randomize}>Randomize</button>
    </div>);
  }
});
