import React from 'react';

const Timer = React.createClass({
  getInitialState() {
    return { ticks: 0 };
  },
  
  componentWillMount() {
    this.timer = setInterval(this.tick, 1000)
  },
  
  componentWillUnmount() {
    clearInterval(this.timer);
  },
  
  tick() {
    this.setState({ ticks: this.state.ticks + 1 });
  },
  

  render() {
    return (<div>
        <p>Ticks: {this.state.ticks}</p>
      </div>);
    
  }
});

export default Timer;
