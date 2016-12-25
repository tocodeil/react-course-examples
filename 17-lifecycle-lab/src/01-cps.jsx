/**
 * Lab 01: Click per seconds
 *
 * Write a component that counts clicks per second.
 * Component should show a button and some text, and print
 * the click-per-seconds rate.
 */

import React from 'react';
import Indicator from './02-cps-with-indicator'
export default class Cps  extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            seconds: props.initialSeconds || 0,
            numberOfClicks: props.initialNumberOfClicks || 0,
        };
    }

    tick = () => {
        this.setState({seconds: this.state.seconds + 1});
    }

    componentWillMount() {
        this.timer = setInterval(this.tick, 1000);

    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    setSeconds(seconds) {
        this.setState({seconds});
    }

    increaseClickCount = () => {
        this.setState({numberOfClicks: this.state.numberOfClicks + 1});
    }

    getColor = () =>
    {
        if ((this.state.numberOfClicks/this.state.seconds)>1) {
            return "red";
        }
        else
        {
            return "green";
        }
    }

  render() {
        const cpsRate=this.state.numberOfClicks/this.state.seconds;
        const tooFast=cpsRate>1;
        const color =this.getColor();
    return (<div>
      <button onClick={this.increaseClickCount}>Click Fast</button>
      <p>CPS rate: {cpsRate}</p>
      <p> {tooFast && "לא כל כך מהר..."} {!tooFast && "יותר מהר!"}</p>
        <Indicator color={color}/>
    </div>);
  }
};


