import React from 'react';

export default function timer(Component) {
  return class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { ticks: 0 };
    }

    componentDidMount() {
      this.timer = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
      clearInterval(timer);
    }

    tick = () => {
      this.setState(oldState => ({ ticks: oldState.ticks + 1 }));
    }

    render() {
      const props = Object.assign({}, this.props, { ticks: this.state.ticks });
      return <Component {...props} />
    }
  }
}
