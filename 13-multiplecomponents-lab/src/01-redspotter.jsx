/**
 * Lab 01:
 *
 * Write a game that shows 10 squares: 9 gray and 1 red.
 * When a user clicks on the red she gets 5 points and red changes its place.
 * When a user clicks on any other square nothing happens.
 *
 */

import React from 'react';

export default class RedSpotter extends React.Component {
	constructor() {
		super();

		this.state = {
			redBoxIndex: 1,
			score: 0,
		};
	}

	boxClickedHandler(isRed) {
		console.log("Clicked on red ? " + isRed);
		const newScore = this.state.score + (isRed ? 10 : -5);
		this.setState({score: newScore});
	}

	startNewGame() {
		this.setState({
			score: 0,
			redBoxIndex: Math.floor((Math.random() * 10)),
		})
	}

	render() {
		const redBoxIndex = this.state.redBoxIndex;
		const numbers = Array.from(Array(10).keys());
		return (
			<div>
				{
					numbers.map((i) => {
						return (
							<Box key={i} boxClickedHandler={(e) => this.boxClickedHandler(i== redBoxIndex)} isRed={i == redBoxIndex} />
						)
					})
				}
				<div>Score: {this.state.score}</div>
				<div><button onClick={() => this.startNewGame()}>Start new game</button></div>
			</div>
		);
	}
}

function Box(props) {
	const s = {backgroundColor: props.isRed ? 'red' : 'gray', margin: 10, width: 50, height: 50, display: 'inline-block'};
	return(
		<div onClick={props.boxClickedHandler} style={s}></div>
	);
}

Box.propTypes = {
	boxClickedHandler: React.PropTypes.func,
	isRed: React.PropTypes.bool,
};
