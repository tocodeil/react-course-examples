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
            origNumber: Math.floor((Math.random() *1000)+1),
            number:0
        }
    }

    calc = (evt) => {
        this.setState({number:Number(evt.target.value)});

    }

    getStatus(){
        //random number between 1-10
        let real = Math.floor((Math.random() *10)+1);
        console.log("If real smaller then 8, compare original with number, otherwise, just print Too Big or Too Small");
        console.log("Real: "+real);

        if (this.state.origNumber === this.state.number)
            return "Matched";
        else if (real < 8)
            return (this.state.origNumber > this.state.number ? "Too small....":"Too Big...");
        else if (real % 2 === 0){
            return "Too small";
        }else{
            return "Too Big"
        }
    }

    render(){
        return <div>
            <input value={this.state.origNumber} disabled="true"/>
            <br/>
            <input type="number" placeholder="pick a number" value={this.state.number} name="pickANumber" onChange={this.calc} />
            <br />
            <input value={this.getStatus()} disabled="true"/>

        </div>
    }
}
