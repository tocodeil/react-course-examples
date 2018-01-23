import React from 'react';
import PropTypes from 'prop-types';

export default class ColorDisplay extends React.Component {
  static propTypes = {
    val: PropTypes.string.isRequired,
    setColor: PropTypes.func.isRequired,
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
