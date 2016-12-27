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
import React from "react";

function Indicator(props) {
	let basic = {width:50, height:50};
	let bgColor = props.slow ? {background: 'red'} : {background: 'green'}
	let style = Object.assign({}, basic, bgColor);
	return (<div style={style}></div>);
}

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
			<Indicator slow={cps < 2}/>
		</div>);
	}
};
