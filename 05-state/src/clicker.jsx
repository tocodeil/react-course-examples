import React from 'react';
import Rect from './rect';

export default class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
  }
  
  click = (e) => {
    this.setState((oldState) => {
      return {
        clicks: oldState.clicks + 1,
      }
    });
  }
  
  render() {
    return (
      <div>
        <p>You clicked {this.state.clicks} times. 
          <button onClick={this.click}>Click Here</button>          
        </p>
        <Rect checkDivision={3} val={this.state.clicks} />
      </div>
    );
  }
}

