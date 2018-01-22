import React from 'react';
import _ from 'underscore';

import TextDisplay from './text_display';
import ColorDisplay from './color_display';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showColorDisplay: true,
      showTextDisplay: true,
      val: '#ffff00',
    }
  }

  randomizeColor = (e) => {
    this.setState(oldState => ({
      val: _.sample(['#ffff00', '#ff00ff', '#abff01', '#10f100', '#3030ff', '#ddcc10']),
    }));
  }

  toggle(val) {
    this.setState(oldState => ({ [val]: !oldState[val] }));
  }

  toggleColorDisplay = (e) => {
    this.toggle('showColorDisplay');
  }

  toggleTextDisplay = (e) => {
    this.toggle('showTextDisplay');
  }

  render() {
    return (
      <div>
        <button onClick={this.randomizeColor}>Shuffle</button>
        <label>
          <input 
            type="checkbox" 
            checked={this.state.showColorDisplay} 
            onChange={this.toggleColorDisplay} />

          Color Display
        </label>
        <label>
          <input 
            type="checkbox" 
            checked={this.state.showTextDisplay} 
            onChange={this.toggleTextDisplay} />
          Text Display
        </label>

        <div className="spaced">
          {this.state.showColorDisplay && <ColorDisplay val={this.state.val} />}
        </div>
        <div className="spaced">
          {this.state.showTextDisplay && <TextDisplay val={this.state.val} />}
        </div>
      </div>
    );
  }
}
