/**
 * Lab 01: Click per seconds
 *
 * Write a component that counts clicks per second.
 * Component should show a button and some text, and print
 * the click-per-seconds rate.
 */

import React from 'react';

export default class CPS extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        clicks: 0,
        seconds: 0,
      };
  }

  buttonClick = (ev) => {
      let clicks = this.state.clicks + 1;
      this.setState({ clicks });
  };

  message = (ev) => {
      if (this.state.clicks > this.state.seconds * 2.1) {
          return "too fast";
      }
      else if (this.state.clicks <= this.state.seconds) {
          return "too slow";
      } else {
        return "just fine :)";
      }
  }

  tick = (ev) => {
      let seconds = this.state.seconds + 1;
      let clicks = this.state.clicks;
      console.log("time " + seconds);
      if (seconds > this.state.clicks + 3) {
        seconds = 0;
        clicks = 0;
      }
      let message = this.message();
      this.setState({ seconds, clicks, message });
  }

  componentWillMount() {
      this.timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
      clearInterval(this.timer);
  }

  render() {
    return (<div>
      <button onClick={this.buttonClick}>Click Fast</button>
      <p>CPS rate: {this.state.clicks > 0 ? this.state.clicks/this.state.seconds : 0}</p>
      <p>{this.message()}</p>
    </div>);
  }
};
