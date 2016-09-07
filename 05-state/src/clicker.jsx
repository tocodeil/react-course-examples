import React from 'react';
import Rect from 'rect';

export default React.createClass({
  getInitialState() {
    return { clicks: 0 };
  },
  
  click() {
    this.setState({
      clicks: this.state.clicks + 1,
    });
  },
  
  render() {
    return (<div>
        <p>You clicked {this.state.clicks} times. 
          <button onClick={this.click}>Click Here</button>          
        </p>
        <Rect checkDivision={3} val={this.state.clicks} />
      </div>);
  }
});

