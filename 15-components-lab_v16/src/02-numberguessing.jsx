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
import PropTypes from 'prop-types';

export default class NumberGuessing extends React.Component {

    static propTypes = {
        num: PropTypes.number,
        rand: PropTypes.number
      };
    
      static defaultProps = {
        num: Math.floor((Math.random() * 1000) + 1),
        rand: Math.floor((Math.random() * 5) + 1)
      };

    constructor(props){
        super(props);
        this.state = {message : '', guess : 0};
    }

    showMessage = (e) => {
        const val = e.target.value;
        const cheat = this.props.rand == this.state.guess;
        if(val > this.props.num){
            this.setState( oldState => 
                ({message : (cheat ? 'too low' :'too high') , guess : (cheat ? 0 : oldState.guess + 1)})
            )
        }else if( val < this.props.num){
            this.setState( oldState => 
                ({message : (cheat ? 'too high' : 'too low'), guess : (cheat ? 0 : oldState.guess + 1)})
            )
        }else{
            this.setState( oldState => ({message : 'Success!'}))
        }
    }

    render(){
        return(
            <div>
                <input type="text" onChange={this.showMessage}/>
                <p>{this.state.message}</p>
            </div>
            )
    }
}
