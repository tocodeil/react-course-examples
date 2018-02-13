/**
 * Lab 02: CPS monitor with indicator
 *
 * Add an indicator panel to the CPS monitor
 * that shows a green rectangle if user clicks fast enough
 * or a red rectangle if user clicks too slow
 *
 * Decide how to share information between the components
 * and what values to pass when creating the Indicator
 */

import React from 'react';

function Rect(props){
  const rectStyle = { width: '20px', 
                     height: '20px',
                    background: props.color};
  return <div style={rectStyle}></div>
}


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
          <Rect color={this.state.rate > 4 ? "green" : "red"}/>
        </div>)
      
    }
  }

  ReactDOM.render(React.createElement(Cps), document.querySelector('main'));