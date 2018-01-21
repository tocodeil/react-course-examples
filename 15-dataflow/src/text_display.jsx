import React from 'react';

export default class TextDisplay extends React.Component {
  changeColor = (e) => {
    this.props.setColor(e.target.value);
  }

  render() {
    return (
      <input
        type="text"
        value={this.props.val}
        onChange={this.changeColor}
      />
    );
  }
}

