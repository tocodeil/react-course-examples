/**
 * Lab 02:
 *
 * Implement a number guessing game component.
 *
 * The component should provide an input field for the user to guess a
 * number picked randomly by the computer (from 1 to 1,000).
 * When typing a number, the component should print "too low" or "too high"
 * as a hint to the user.
 *
 * To make the game interesting, computer should sometimes cheat and print wrong messages.
 */

import React from 'react';

export default class NumberGuessing extends React.Component {
	constructor() {
		super();
		this.state = {
			// Random number in the range [1..1000]
			number: Math.floor((Math.random() * 1000) + 1),

			// the message that will be displayed
			message: '',
		};

		// messages array
		this.allMessages = ['Too high', 'Too low'];
		console.log("Number is: " + this.state.number);

		// bind the function that handles the changes in the guess entered by the user
		this.userGuessed = this.userGuessed.bind(this);
	}

	userGuessed(event) {
		var guess = event.target.value;
		if (this.state.number == guess) {
			// user guessed the right number
			this.setState({number: guess, message: 'YESSSSSSS !!!!!'});
			return;
		}

		// set the index of the message
		var index;
		if (guess > this.state.number) {
			index = 0; // 'Too high'
		} else {
			index = 1; // 'Too low'
		}

		// Randomly cheat (an average of 1 out of 10)
		var cheat = Math.random() < 0.1;
		if (cheat) {
			console.info("CHEATING !!!");
			// set the index to become the "other" index (0 --> 1, and 1 --> 0)
			index = (index + 1) % 2;
		} else {
			console.info("Not cheating");
		}
		this.setState({number: this.state.number, message: this.allMessages[index]});
	}

	render() {
		return (
			<div>
				<div>
					Enter your guess: <input onChange={this.userGuessed}/>
				</div>
				<div>
					{this.state.message}
				</div>
			</div>
		);
	}
}