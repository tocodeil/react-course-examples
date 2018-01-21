import React from 'react';

export default class ColorDisplay extends React.Component {
  static propTypes = {
    val: React.PropTypes.string.isRequired,
    setColor: React.PropTypes.func.isRequired,
  };

  changeColor = (e) => {
    this.props.setColor(e.target.value);
  }

  render() {
    return (
      <input 
        type="color" 
        value={this.props.val} 
        onChange={this.changeColor}
      />
    )
  }
}
