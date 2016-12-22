/**
 * Lab 01:
 *
 * Implement a time converter component.
 * Component should show 3 input fields labeled hours, minutes and seconds.
 * Typing a value in either field updates the other two with corresponding values.
 */

import React from 'react';

export default class TimeConverter extends React.Component {
    static propTypes = {
        initialHours: React.PropTypes.number,
        initialMinutes: React.PropTypes.number,
        initialSeconds: React.PropTypes.number,
    };

    static defaultProps = {
        initialHours: 0,
        initialMinutes: 0,
        initialSeconds: 0,
    };

    constructor(props) {
        super(props);
        this.state = {
            hours: props.initialCount,
            minutes: (props.initialCount ),
            seconds: (props.initialCount)
        };
    }

    handleHours = (event) => {
        this.setState({
            hours: event.target.value,
            minutes: (event.target.value * 60),
            seconds: (event.target.value * 60 * 60)
        });
    }

    handleMinutes = (event) => {
        this.setState({
            hours: event.target.value/60,
            minutes: (event.target.value),
            seconds: (event.target.value * 60)
        });
    }

    handleSeconds = (event) => {
        this.setState({
            hours: event.target.value/60/60,
            minutes: (event.target.value /60),
            seconds: (event.target.value)
        });
    }

    render() {
        var hoursValue = this.state.hours;
        var minutesValue = this.state.minutes;
        var secondsValue = this.state.seconds;
        return (<div>
            <p>
                <br></br>
                <br></br>
                <label for="hours">Hours: </label>
                <input type="string" value={hoursValue} onChange={this.handleHours}/>
                <br></br>
                <br></br>
                <label for="minutes">Minutes: </label>
                <input type="string" value={minutesValue} onChange={this.handleMinutes}/>
                <br></br>
                <br></br>
                <label for="seconds">Seconds: </label>
                <input type="string" value={secondsValue} onChange={this.handleSeconds}/>

            </p>
        </div>);
    }
}
