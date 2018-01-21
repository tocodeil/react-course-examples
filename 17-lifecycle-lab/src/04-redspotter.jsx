/**
 * Add a timer to the following Red Spotter game
 * When a user doesn't do anything for 2 seconds, she should
 * lose 3 points.
 */

import React from 'react';
import _ from 'underscore';

const SQUARES_COUNT = 10;
const SQUARE_STYLE = {
  width: '100px',
  height: '100px',
  background: 'gray',
  display: 'inline-block',
};

const WINNER_STYLE = Object.assign({}, SQUARE_STYLE, {
  background: 'red',
});

export default class RedSpotter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: _.random(SQUARES_COUNT),
      score: 0,
    }
  }

  shuffle = () => {
    this.setState(oldState => ({ 
      winner: _.random(SQUARES_COUNT),
      score: oldState.score + 5,
    }));
  }

  render() {
    return (
      <div>
        <p>Score: {this.state.score}</p>
        {_.range(SQUARES_COUNT).map((index) => (
          <div 
            onClick={() => (this.state.winner === index) && this.shuffle()}
            style={index === this.state.winner ? WINNER_STYLE : SQUARE_STYLE}
          />
        ))}
      </div>
    );
  }
}
