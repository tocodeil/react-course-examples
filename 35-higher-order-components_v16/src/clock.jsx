import React from 'react';
import timer from './timer';

class Clock extends React.Component {
  render() {
    return <p>Ticks = {this.props.ticks}</p>
  }
}

export default timer(Clock);
