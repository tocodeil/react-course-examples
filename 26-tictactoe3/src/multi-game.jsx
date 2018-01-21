import React from 'react';
import _ from 'underscore';

// Multi Game Component
export default class MultiGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0
    };
  }
  
  setActiveItem = (e) => {
    const idx = e.target.value;
    this.setState(oldState => ({
      activeItem: idx,
    }));
  }
  
  render() {
    const children = React.Children.toArray(this.props.children);

    return <div>
      <select 
        value={this.state.activeItem}
        onChange={this.setActiveItem}>
        {_.map(children, function(item, index) {
          return <option key={item.key} value={index}>{index}</option>;
        })}
      </select>
      <p>Active: {this.state.activeItem}</p>
      {children[this.state.activeItem]}
      </div>
    }
}
