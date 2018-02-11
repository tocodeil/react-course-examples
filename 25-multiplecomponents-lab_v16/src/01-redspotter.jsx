/**
 * Lab 01:
 *
 * Write a game that shows 10 squares: 9 gray and 1 red.
 * When a user clicks on the red she gets 5 points and red changes its place.
 * When a user clicks on any other square nothing happens.
 *
 */

import React from 'react';
import _ from 'underscore';

export default class RedSpotter extends React.Component {

    constructor(props){
        super(props);
        this.state = {colors:[
            {id: 1, color: 'gray'},
            {id: 2, color: 'gray'},
            {id: 3, color: 'gray'},
            {id: 4, color: 'gray'},
            {id: 5, color: 'gray'},
            {id: 6, color: 'gray'},
            {id: 7, color: 'gray'},
            {id: 8, color: 'gray'},
            {id: 9, color: 'gray'},
            {id: 10, color: 'red'}
        ], 
        score : 0
        };
    }

    resetScore = (e) => {
        this.setState(
            {colors : _.shuffle(this.state.colors),
            score : 0
        });
    }

    addScore = (e) => {
        this.setState(oldState => ({
            colors : _.shuffle(this.state.colors),
            score: oldState.score + 10
        }))
    }

    subtractScore = (e) => {
        this.setState(oldState => ({score: oldState.score - 5}))
    }

    render(){
        let redStyle = {
            margin: '20px',
            background : 'red',
            height : '10px',
            width: '10px'
        }
        let grayStyle = {
            margin: '20px',
            background : 'gray',
            height : '10px',
            width: '10px'
        }
        return(
            <div>
              <button onClick={this.resetScore}>משחק חדש</button>
              <div> score : {this.state.score}</div>
              {this.state.colors.map((item, idx) => (
                    <div key={idx} style={item.color == 'red' ? redStyle : grayStyle} 
                    onClick={item.color == 'red' ? this.addScore : this.subtractScore }></div>
                ))}

            </div>
        )
    }

}
