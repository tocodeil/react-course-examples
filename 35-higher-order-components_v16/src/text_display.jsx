import React from 'react';
import display from './display';

class TextDisplay extends React.Component {
  render() {
    return (
      <input
        type="text"
        value={this.props.val}
        onChange={this.props.handleChange}
      />
    );
  }
}

export default display(TextDisplay);
