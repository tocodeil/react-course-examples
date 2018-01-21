import React from 'react';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ticks: 0 };
  }

  componentWillMount() {
    this.timer = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick = () => {
    this.setState(oldState => ({ ticks: oldState.ticks + 1 }));
  }

  render() {
    return (
      <div>
      <p>Ticks: {this.state.ticks}</p>
      </div>
    );
  }
}
