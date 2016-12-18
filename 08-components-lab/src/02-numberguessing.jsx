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

export default class MultiInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: "start guessing...",
            number: Math.floor(Math.random() * (1000 - 1)) + 1,
        };
    }

    guess = (ev) => {
        console.log("guessed " + ev.target.value);
        var result = this.checkResult(ev.target.value);
        console.log(result);
        this.setState({ result: result });
    };

    checkResult = (number) => {
        var liar = Math.floor(Math.random() * (10 - 0)) + 0;
        console.log("liar = " + liar);
        if (number == this.state.number) {
            return "correct";
        } else if (liar < 2){
            switch(liar) {
                case 1 : {
                    return "higher";
                }
                case 0: {
                    return "lower";
                }
            }
        }

        if (number > this.state.number){
            return "higher";
        } else {
            return "lower";
        }
    }

    render(props) {
        var style = {
            color: 'white'
        };
        return (
            <div>
                <p>Guess the number</p>
                <p>{this.state.result}</p><p style={style}>{this.state.number}</p>
                <input type="number" onChange={this.guess}></input>
            </div>);
    }
}