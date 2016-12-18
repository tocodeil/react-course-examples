/**
 * Lab 01: 
 *
 * Implement a time converter component.
 * Component should show 3 input fields labeled hours, minutes and seconds.
 * Typing a value in either field updates the other two with corresponding values.
 */

import React from 'react';

export default class TimeConverter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sec: 0,
                        min: 0,
                        hour: 0};
    }

    calcSecond = (evt) => {
        this.setState({sec: evt.target.value,
                        min: evt.target.value / 60,
                        hour: (evt.target.value / 60) / 60})
    }

    calcMinute = (evt) => {
        this.setState({sec: evt.target.value * 60,
            min: evt.target.value,
            hour: evt.target.value / 60})
    }

    calcHour = (evt) => {
        this.setState({sec: evt.target.value * 60 * 60,
            min: evt.target.value * 60,
            hour: evt.target.value})
    }

    render() {

        return (
            <div>
                <h3>01 - Time Converter</h3>
                <label><b>Seconds: </b></label>
                <input value={this.state.sec} type="string" onChange={this.calcSecond}></input>
                <br/>
                <br/>
                <label><b>Minutes: </b></label>
                <input value={this.state.min} type="string" onChange={this.calcMinute}></input>
                <br/>
                <br/>
                <label><b>Hours: </b></label>
                <input value={this.state.hour} type="string" onChange={this.calcHour}></input>
                <br/>
                <br/>
            </div>

        );

    }


}
