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

/**
 * Lab 01:
 *
 * Implement a time converter component.
 * Component should show 3 input fields labeled hours, minutes and seconds.
 * Typing a value in either field updates the other two with corresponding values.
 */

import React from 'react';

export default class NumberGuessing extends React.Component {
    static propTypes = {
        initialNumber: React.PropTypes.number,
        initialIsBigger: React.PropTypes.bool,

    };

    randomNumber() {
        return Math.floor((Math.random() * 1001));
    }

    static defaultProps = {
        initialNumber: Math.floor((Math.random() * 1001)),//this.randomNumber,
        initialIsBigger: true
    };


    constructor(props) {
        super(props);
        this.state = {
            number: props.initialNumber,
            isBigger: props.initialIsBigger
        };
    }

    handleRandomGuess = (event) => {
        var layOrTrue=Math.floor((Math.random() * 10));
        if (event.target.value >= this.state.number) {
            this.setState({isBigger: true});
        }
        else if (event.target.value < this.state.number) {
            this.setState({isBigger: false});
        }
        else {
            this.setState({isBigger: true});
        }
        this.shouldLayOrTrue(layOrTrue);
    }

    shouldLayOrTrue(layOrTrue) {
        if (layOrTrue == 1) {
            this.setState({isBigger: true});
        } else {
            if (layOrTrue == 2) {
                this.setState({isBigger: false});
            }
        }
    }


    render() {
        var isBigger = this.state.isBigger;
        var number = this.state.number;
        return (<div>
            <p>
                <br></br>
                <br></br>
                <label for="guess">Guess a number between 1 to 1000 </label>
                <input type="string" onChange={this.handleRandomGuess}/>
                <br></br>
                <label for="bigOrSmall"> the random number is: {number},<br></br> it is bigger:{ isBigger.toString()}
                </label>


            </p>
        </div>);
    }
}

//if(isBigger){
//    " גדול מדי"
//}else{
  //  "קטן מדי"
//}

