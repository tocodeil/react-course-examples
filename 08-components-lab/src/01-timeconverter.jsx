/**
 * Lab 01:
 *
 * Implement a time converter component.
 * Component should show 3 input fields labeled hours, minutes and seconds.
 * Typing a value in either field updates the other two with corresponding values.
 */
import React from "react";

export default class TimeConverter extends React.Component {
	constructor() {
		super();

		this.state = {
			hours: 0, minutes: 0, seconds: 0,
		};

		// bind functions for the changes in each input field
		this.hoursChanged = this.hoursChanged.bind(this);
		this.minutesChanged = this.minutesChanged.bind(this);
		this.secondsChanged = this.secondsChanged.bind(this);
	}

	hoursChanged(event) {
		const newVal = event.target.value;
		this.setState({
			hours: newVal, minutes: newVal * 60, seconds: newVal * 60 * 60,
		});
	}

	minutesChanged(event) {
		const newVal = event.target.value;
		this.setState({
			hours: newVal / 60, minutes: newVal, seconds: newVal * 60,
		});
	}

	secondsChanged(event) {
		const newVal = event.target.value;
		this.setState({
			hours: newVal / (60 * 60), minutes: newVal / 60, seconds: newVal,
		});
	}

	render() {
		return (
			<div>
				<div>
					Hours: <input value={this.state.hours} onChange={this.hoursChanged}/>
				</div>
				<div>
					Minutes: <input value={this.state.minutes} onChange={this.minutesChanged}/>
				</div>
				<div>
					Seconds: <input value={this.state.seconds} onChange={this.secondsChanged}/>
				</div>
			</div>
		);
	}
}