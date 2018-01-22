import React from 'react';
import display from './display';

class ColorDisplay extends React.Component {
  render() {
    return (
      <input 
        type="color" 
        value={this.props.val} 
        onChange={this.props.handleChange}
      />
    )
  }
}

export default display(ColorDisplay);
