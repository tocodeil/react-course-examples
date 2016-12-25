/**
 * Add a timer to the following Red Spotter game
 * When a user doesn't do anything for 2 seconds, she should
 * lose 3 points.
 */

import React from 'react';

import RedButton from '04-redbutton';

export default class RedSpotter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redLocation: 0,
            score: 0,
        };
    }

    restart = () => {
      this.state.score = 0;
      this.reOrderButtons();
    }

    playGame = (clickedColor) => {
        this.resetTimer();
        console.log("clicked color " + clickedColor);
        if (clickedColor === 'red') {
          this.state.score = this.state.score + 10;
        } else {
            this.state.score = this.state.score - 5;
        }
        if (this.state.score < 0) {
          this.state.score = 0;
        }
        this.reOrderButtons();
    }

    resetTimer = () => {
        clearInterval(this.timer);
        this.timer = setInterval(this.reduceScoreOnWait, 1000);
    }


    reduceScoreOnWait = () => {
      let score = this.state.score
      if (this.state.score > 2) {
        score = score - 3;
      }
      this.setState({score});
    }

    componentWillMount() {
        this.timer = setInterval(this.reduceScoreOnWait, 1000);
    }

    reOrderButtons = (ev) => {
        this.setState({redLocation: Math.floor(Math.random() * (10 - 0)) + 0});
    }

    render(props) {
        const buttonArray = [];
        for (let i = 0; i<10; i++) {
            buttonArray[i] = 'grey';
        }
        buttonArray[this.state.redLocation] = 'red';

        return (
            <div>
              <button onClick={this.restart}>התחל משחק</button><p>{this.state.score}</p>
                {buttonArray.map((val, idx) => (
                    <RedButton key={idx} color={val} playGame={this.playGame}/>
                ))}
            </div>
        )
    }
}