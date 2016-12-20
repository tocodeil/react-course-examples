/**
 * Lab 04:
 *
 * Implement a multi color picker component.
 *
 * Component should provide an <input> field to select a color,
 * and below 9 <div> elements.
 * Each <div> should have a slightly darker color than the previous one,
 * with the color selected by the user used as the middle color.
 *
 * See lab description on the website for a live demo.
 *
 * Hint: Use tinycolor library to perform color manipulations
 *
 */
import tinycolor from "tinycolor2";
import React from "react";

export default class MultiColor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bgColor: tinycolor('black').toHexString(),
		};

		// the interval of the "darkening" process
		// For example: interval of 5 will result in activation of tinycolor(X).darken(5) where x is the color of the previous div
		this.interval = 3;

		// bind the color change event
		this.colorChanged = this.colorChanged.bind(this);
	}

	colorChanged(event) {
		var selectedColor = event.target.value;
		console.log("New color: " + selectedColor);
		var newBgColor = tinycolor(selectedColor).lighten(this.interval * 5).toHexString();
		console.log("tinycolor(selectedColor).lighten(this.interval * 5).toHexString(): " + newBgColor);
		this.setState({bgColor: newBgColor,});
	}

	/**
	 * Iterate with a loop from 1 to 10 and create a new functional element with the same background color
	 * and with distance i * interval (which means the function tinycolor(baseColor).darken(i * interval) will be invoked
	 */
	render() {
		var baseColor= this.state.bgColor;
		var interval = this.interval;
		return (
			<div>
				Pick a color: <input type="color" onChange={this.colorChanged}/>
				<br />

				{
					Array.from(Array(10).keys()).map(function (i) {
						return (
							<SingleColor key={i} bgColor={baseColor} distance={i * interval} />)
					})
				}
			</div>
		);
	}
}

/**
 * A single div with background color
 */
function SingleColor(props) {
	var background = tinycolor(props.bgColor).darken(props.distance);
	return (
		<div style={{backgroundColor: background, width: 50, height: 50, display: 'inline-block'}}></div>
	);
}

// mandatory fields
SingleColor.propTypes = {
	bgColor: React.PropTypes.string,
	distance: React.PropTypes.number,
};