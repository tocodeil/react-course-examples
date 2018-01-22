import React from 'react';
import Counter from 'counter';

export default React.createClass({
  mixins: [Counter(2)],
  render: function() {
    return (
      <div>
        <button onClick={this.inc}>Click Me</button>
        <p>Clicks: {this.state.count}</p>
      </div>
    )
  }
});
