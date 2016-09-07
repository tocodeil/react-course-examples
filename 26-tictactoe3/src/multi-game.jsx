import React from 'react';
import _ from 'underscore';

// Multi Game Component
export default React.createClass({
  getInitialState: function() {
    return {
      activeItem: 0
    }
  },
  
  setActiveItem: function(idx) {
    this.setState({
      activeItem: idx,
    });
  },
  
  render: function() {
    var children = React.Children.toArray(this.props.children);

    return <div>
      <select 
        value={this.state.activeItem}
        onChange={(e) => this.setActiveItem(e.target.value)}>
        {_.map(children, function(item, index) {
          return <option key={item.key} value={index}>{index}</option>;
        })}
      </select>
      <p>Active: {this.state.activeItem}</p>
      {children[this.state.activeItem]}
      </div>
    }
});
