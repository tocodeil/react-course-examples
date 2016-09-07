import React from 'react';

const ColorDisplay = React.createClass({
  propTypes: {
    val: React.PropTypes.string.isRequired,

    setColor: React.PropTypes.func.isRequired,
  },

  render: function() {
    return <input 
      type="color" 
      value={this.props.val} 
      onChange={(e) => this.props.setColor(e.target.value)}
    />
  }
});

export default ColorDisplay;
