/**
 * Add a timer to the following Red Spotter game
 * When a user doesn't do anything for 2 seconds, she should
 * lose 3 points.
 */
import React from "react";
import _ from "underscore";

const SQUARES_COUNT = 10;
const SQUARE_STYLE = {
	width: '50px', height: '50px', background: 'gray', display: 'inline-block',
};

const WINNER_STYLE = Object.assign({}, SQUARE_STYLE, {
	background: 'red',
});

export default React.createClass({
	getInitialState() {
		return {
			winner: _.random(SQUARES_COUNT), score: 0,
		};
	},

	now() {
		return new Date().getTime();
	},

	shuffle() {
		this.setState({
			winner: _.random(SQUARES_COUNT), score: this.state.score + 5, lastUpdate: this.now(),
		});
	},

	componentWillMount() {
		this.state.lastUpdate = this.now();
		this.timer = setInterval(() => {
			const now = this.now();
			if (now - this.state.lastUpdate > 2000) {
				this.setState({lastUpdate: now, score: this.state.score - 3});
			}
		}, 2000);
	},

	componentWillUnmount() {
		clearInterval(this.timer);
	},

	render() {
		return (<div>
			<p>Score: {this.state.score}</p>
			{_.range(SQUARES_COUNT).map((index) => (
				<div
					onClick={() => (this.state.winner === index) && this.shuffle()}
					style={index === this.state.winner ? WINNER_STYLE : SQUARE_STYLE} key={index}/>

			))}
		</div>);
	}
});
