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

    constructor(props) {
        super(props);
        this.state = {
            compGuess: Math.floor(Math.random() * (1000)) + 1,
            userGuess:"0",
            msg:""
        }
    }

    checkGuess = (evt) => {
        var answer = evt.target.value > this.state.compGuess ? "Too big... try again" : "Too small... try again";
        var random = Math.floor(Math.random() * 9) + 1;
        if (random === 5) {
            answer = evt.target.value > this.state.compGuess ?  "Too small... try again" : "Too big... try again";
        }
        this.setState({
            msg: evt.target.value == this.state.compGuess ? "WHOHO! You are correct!" : answer,
            userGuess: evt.target.value,
        });
    }

    render() {
        return (
            <div>
               {/* <h3>{this.state.compGuess}</h3>*/}
                <p>Input your guess:</p>
                <input type="number" value={this.state.userGuess} onChange={this.checkGuess}/>
                <br/>
                <label>{this.state.msg}</label>
            </div>
        );

    }
}
