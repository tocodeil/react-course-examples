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
import _ from 'underscore';

export default class RedSpotter extends React.Component{

    static propTypes = {

    };

    static defaultProps = {

    };

    boxes=[
        'red',
        'grey',
        'grey',
        'grey',
        'grey',
        'grey',
        'grey',
        'grey',
        'grey',
        'grey'
    ];

    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.startOver = this.startOver.bind(this);
    }

    state={
        boxes:this.boxes,
        score:0
    }

    startOver(e){
        this.setState({score:0});
    }

    onChange(e){
        debugger;
        if(e.target.className.includes('red')){
            this.setState({score:this.state.score+10});
        }
        else{
            this.setState({score:this.state.score-5});
        }
        this.setState({boxes:_.shuffle(this.state.boxes)});
    }

    render(){
        return (<div>
            <h3>{this.state.score}</h3>
            <button onClick={this.startOver}>Start Over</button>
            <hr></hr>
            {this.state.boxes.map((text,idx)=>(
                   <div className={text+' box'} onClick={this.onChange}></div>)
            )}
        </div>)
    }
}
