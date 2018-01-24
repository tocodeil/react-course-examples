import React from 'react';
import ReactDOM from 'react-dom';

//
// import App from './app';
// import Clock from './clock';

function withTimer(Component) {
  return class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { ticks: 0 };
    }

    componentDidMount() {
      this.timer = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
      clearInterval(this.timer);
    }

    tick = () => {
      this.setState(oldState => ({ ticks: oldState.ticks + 1 }));    
    };

    render() {
      return (
        <Component {...this.props} ticks={this.state.ticks} />
      );
    }
  }
}


class Clock extends React.Component {
  render() {
    return <p>{this.props.ticks}</p>
  }
}

Clock = withTimer(Clock);

class Ticker extends React.Component {
  render() {
    const { texts, ticks } = this.props;

    return (<div>
      <p>{texts[ticks % texts.length]}</p>
    </div>);
  }
}

Ticker = withTimer(Ticker);


const texts = [
  'I lit out from Reno',
  'I was trailed by twenty hounds',
  'Didnt get to sleep that night',
  'Till the morning came around.',
  'Set out runnin but I take my time',
  'A friend of the devil is a friend of mine',
  'If I get home before daylight,',
  'I just might get some sleep tonight.',
];


ReactDOM.render(<div>
  <Ticker texts={texts} />
  <Clock />
</div>
  
  , document.querySelector('main'));

