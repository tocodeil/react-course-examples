import React from 'react';
import _ from 'underscore';

import TextDisplay from 'text_display';
import ColorDisplay from 'color_display';

const App = React.createClass({
  getInitialState: function() {
    return {
      showColorDisplay: true,
      showTextDisplay: true,
      val: '#ffff00',
    }
  },

  randomizeColor: function() {
    this.setState({
      val: _.sample(['#ffff00', '#ff00ff', '#abff01', '#10f100', '#3030ff', '#ddcc10']),
    });
  },

  toggle: function(val) {
    this.setState({ [val]: !this.state[val] });
  },

  render: function() {
    return <div>
      <button onClick={this.randomizeColor}>Shuffle</button>
      <label>
        <input 
          type="checkbox" 
          checked={this.state.showColorDisplay} 
          onChange={this.toggle.bind(this, 'showColorDisplay')} />

        Color Display
      </label>
      <label>
        <input 
          type="checkbox" 
          checked={this.state.showTextDisplay} 
          onChange={() => this.toggle('showTextDisplay')} />
        Text Display
      </label>

      <div className="spaced">
        {this.state.showColorDisplay && <ColorDisplay val={this.state.val} />}
      </div>
      <div className="spaced">
        {this.state.showTextDisplay && <TextDisplay val={this.state.val} />}
      </div>
    </div>
  }
});



export default App;
