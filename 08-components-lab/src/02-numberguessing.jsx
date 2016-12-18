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
 * Created by ofek_am on 18/12/2016.
 */
import React from 'react';

export default class NumberGuessing extends React.Component{

    static propTypes = {

    };

    static defaultProps = {

    };

    cheatMode=false;

    number;
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this)
        this.number=Math.floor(Math.random() * (1000 - 0) + 0);
        setInterval(()=>{
            this.cheatMode=!this.cheatMode;
        },3000);
    }

    state={
        guess:'',
        message:"Guess a number"
    }

    onChange(e){
        debugger;
        this.setState({guess:e.target.value});
        if(!this.cheatMode){
            if(e.target.value>this.number){
                this.setState({message:"Too high"});
            }
            else if(e.target.value<this.number){
                this.setState({message:"Too low"});
            }
            else{
                this.setState({message:"Correct!!"});
            }
        }
        else{
            if(e.target.value<this.number){
                this.setState({message:"Too high"});
            }
            else if(e.target.value>this.number){
                this.setState({message:"Too low"});
            }
            else{
                this.setState({message:"Correct!!"});
            }
        }
    }

    render(){
        return <div>
            <input type="number" value={this.state.guess}  onChange={this.onChange}/><br></br>
            <label>{this.state.message}</label>
        </div>
    }
}
