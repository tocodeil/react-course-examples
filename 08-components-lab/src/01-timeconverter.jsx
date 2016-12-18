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
        this.state = {
            number: 0,
        };
    }

    refresh = (num) => {
        console.log("refresh started");
        this.setState({ number: num });
    }

    handleSeconds = (ev) => {
        console.log("Seconds " + ev.target.value);
        this.refresh(ev.target.value);
    };

    handleMinutes = (ev) => {
        console.log("minutes " + ev.target.value);
        this.refresh(ev.target.value * 60);
    };

    handleHours = (ev) => {
        console.log("Hours " + ev.target.value);
        this.refresh(ev.target.value * 3600);
    };


    render(props) {
        return (
            <div>
                <input type="number" step="0.01" value={this.state.number} onChange={this.handleSeconds}></input>
                <p></p>
                <input type="number" step="0.01" value={this.state.number / 60} onChange={this.handleMinutes}></input>
                <p></p>
                <input type="number" step="0.01" value={this.state.number / 3600} onChange={this.handleHours}></input>
            </div>);
    }
}
