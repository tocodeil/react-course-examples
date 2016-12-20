/**
 * Lab 03:
 *
 * Implement a color picker component.
 *
 * Component should show an <input> field to select a color, and below a <div>
 * When a color is selected, that color should be used as the background color
 * of the <div>
 *
 * Bonus: Allow external code to pass some text to be used as the contents of the
 * colored <div>
 */
import React from "react";

export default class ColorPicker extends React.Component {
	static propTypes = {
		message: React.PropTypes.string,
	};

	static defaultProps = {
		message: 'Message goes here',
	};

	constructor(props) {
		super(props);
		this.state = {
			bgColor: 'blue',
		};

		// bind function for the color changes
		this.colorChanged = this.colorChanged.bind(this);
	}

	colorChanged(event) {
		var newColor = event.target.value;
		this.setState({bgColor: newColor} );
	}

	render() {
		return (
			<div>
				Pick a color: <input type="color" value={this.state.bgColor} onChange={this.colorChanged}/>
				<br />
				<div style={{backgroundColor: this.state.bgColor, width: 100, height: 100}}>
					{this.props.message}
				</div>
			</div>
		);
	}
}