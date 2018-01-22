import React from 'react';

const TextDisplay = React.createClass({
  render: function() {
    return <input type="text" value={this.props.val} />
  }
});

export default TextDisplay;
