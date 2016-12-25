/**
 * Lab 01:
 *
 * Write a game that shows 10 squares: 9 gray and 1 red.
 * When a user clicks on the red she gets 5 points and red changes its place.
 * When a user clicks on any other square nothing happens.
 *
 */

import React from 'react';

export default class RedSpotter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            redIndex: 0,
            inactiveInSec:0,
            cells: []
        }
        this.initGame()
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    componentWillMount() {
        this.start =
            this.timer = setInterval(this.tick, 1000);
    }

    tick = () => {
        let inactiveInSec = this.state.inactiveInSec + 1;
        if (inactiveInSec >= 2){
           const score = this.state.score-3;

            this.setState({inactiveInSec, score});
        }else{
            this.setState({inactiveInSec});
        }

    }


    initGame() {
        this.state.redIndex = Math.floor(Math.random() * 10 );
        for (var i=0; i < 10; i++){
            if (i !== this.state.redIndex)
                this.state.cells[i] = "grey";
            else
                this.state.cells[i] = "red";
        }
    }

    render(){
        return <div>
            <input type="number" disabled="disabled" value={this.state.score} />
            <br />
            {this.state.cells.map((val, idx) => (
                <div onClick={this.calcScore.bind(this,idx)} style={{backgroundColor : this.state.cells[idx], width:"50px", height:"50px", display:"inline-block",border:"2px", borderColor:"black"}} tabIndex={idx} />
            ))}
            <br/>
            <button onClick={this.resetGame.bind(this)}>Start new game</button>
        </div>
    }


    resetGame() {
        this.setState({score: 0});
        this.initGame();
    }

    calcScore(idx){
        if (idx === this.state.redIndex) {
            this.setState({score: this.state.score + 10,
                inactiveInSec: 0});
             this.initGame();
        } else {
            this.setState({score: this.state.score - 5,
                inactiveInSec: 0});
        }
    }
}
