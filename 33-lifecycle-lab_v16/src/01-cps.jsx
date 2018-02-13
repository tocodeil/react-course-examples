/**
 * Lab 01: Click per seconds
 *
 * Write a component that counts clicks per second.
 * Component should show a button and some text, and print
 * the click-per-seconds rate.
 */

import React from 'react';

export default class Cps extends React.Component{
  constructor(props){
    super(props);
    this.state = { rate  :0 , count : 0 };
  }
  
  
  componentWillMount = () => {
    this.timer = setInterval(() => {
      this.setState({ rate: this.state.count , count : 0});
    }, 1000);
  }
  
  componentWillUnmount = () => {
    clearInterval(this.timer);
  }
  
  count = () => {
    
    this.setState(oldState => ({count : oldState.count + 1 }));
  }
 
  render() {
    return (<div>
        <button onClick={this.count} >Click Fast</button>
        <p>CPS rate: {this.state.rate}</p>
        <p>{this.state.rate > 4 ? "not so fast..." : "faster"}</p>
      </div>);
    
  }
}

ReactDOM.render(React.createElement(Cps), document.querySelector('main'));
