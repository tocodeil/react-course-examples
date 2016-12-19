import React from "react";

export default class NumberGuessing extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userGuess: 0,
            randomNumber: Math.floor((Math.random() * 1000) + 1),
            validateMsg: "",
        };

        console.log(this.state.randomNumber);
    }

    newNumberGuess(event) {
        var userGuess = Number(event.target.value);
        this.setState({
            userGuess: userGuess,
        });

        this.validateUserGuess(userGuess);
    }

    validateUserGuess(userGuess) {
        var validateMsg;
        if (userGuess > this.state.randomNumber || userGuess % 7 == 0) { // greater
            validateMsg = "greater"
        } else if (userGuess < this.state.randomNumber || userGuess % 5 == 0) { // less
            validateMsg = "smaller"
        } else { // equal
            validateMsg = "equal!"
        }

        this.setState({validateMsg});
    }

    render() {
        return (<div>
            <input onChange={(e) => this.newNumberGuess(e)}/>
            <br/>
            <label >"result: " + {this.state.validateMsg}</label>
        </div>)
    }
}