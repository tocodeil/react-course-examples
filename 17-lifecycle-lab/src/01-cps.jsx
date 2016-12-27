/**
 * Lab 01: Click per seconds
 *
 * Write a component that counts clicks per second.
 * Component should show a button and some text, and print
 * the click-per-seconds rate.
 */
import React from "react";

export default class CPS extends React.Component{
	constructor(props) {
		super(props);
		this.state = {clicks: -1, startTime: -1}
	}
	componentDidMount() {
		this.state.startTime = new Date().getTime();
		this.state.clicks = 0;
	}
	updateClicks() {
		this.setState({clicks: this.state.clicks + 1});
	}

	render() {
		let secondsElapsed = (new Date().getTime() - this.state.startTime) / 1000.0;
		let cps = this.state.clicks / secondsElapsed;
		return (<div>
			<button onClick={() => this.updateClicks()}>Click Fast</button>
			<p>CPS rate: {cps}</p>
		</div>);
	}
};
