/**
 * Lab 01: Click per seconds
 *
 * Write a component that counts clicks per second.
 * Component should show a button and some text, and print
 * the click-per-seconds rate.
 */

import React from 'react';
import CPSIndicator from './02-cps-with-indicator.jsx'

export default class CPS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfClicks: 0,
            seconds: 0
        }
        this.calcNumOfClicks.bind(this);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    componentWillMount() {
        this.start =
            this.timer = setInterval(this.tick, 1000);
    }

    tick = () => {
        let seconds = this.state.seconds + 1;
        this.setState({seconds});
    }

    clicked = () => {
        let numberOfClicks = this.state.numberOfClicks + 1;
        this.setState({numberOfClicks});
    }


    calcNumOfClicks() {
        return (this.state.numberOfClicks / this.timer);
    }

    render() {
        const numOfClicks = this.state.numberOfClicks;
        const sec = this.state.seconds;
        const frequency = Number(numOfClicks / sec);
        return (<div>
            <button onClick={this.clicked}>Click Fast</button>
            <p>CPS rate: {frequency}</p>

            {frequency < 1 &&
                <div>
                    <p>Too Slow</p>
                    <CPSIndicator color="red" />
                </div>
            }
            {frequency >=1 &&
            <div>
                <p>Too Fast</p>
                <CPSIndicator color="green" />
            </div>
            }

        </div>);
    }
};
