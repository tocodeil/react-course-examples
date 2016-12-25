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
import Indicator from '02-cps-indicator';

export default class CPSWithIndicatior extends React.Component{
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

    result = (ev) => {
        if (this.state.clicks > this.state.seconds * 2.1) {
            return {message: "too fast", color: 'green'};
        }
        else if (this.state.clicks <= this.state.seconds) {
            return {message: "too slow", color: 'red'};
        } else {
            return {message: "just fine :)", color: 'red'};
        }
    };

    tick = (ev) => {
        let seconds = this.state.seconds + 1;
        let clicks = this.state.clicks;
        console.log("time " + seconds);
        if (seconds > this.state.clicks + 3) {
            seconds = 0;
            clicks = 0;
        }
        // let result = this.result();
        this.setState({ seconds, clicks });
    };

    componentWillMount() {
        this.timer = setInterval(this.tick, 1000);
    };

    componentWillUnmount() {
        clearInterval(this.timer);
    };

    render() {
      let result = this.result();
      console.log(result);
        return (<div>
          <button onClick={this.buttonClick}>Click Fast</button>
          <p>CPS rate: {this.state.clicks > 0 ? this.state.clicks/this.state.seconds : 0}</p>
          <p>{result.message}</p><Indicator color={result.color}/>
        </div>);
    };
};
