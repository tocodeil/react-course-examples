import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';

import TicTacToe from './tic-tac-toe';
import MultiGame from './multi-game';

class App extends React.Component {
  constructor(props) {
    super(props);
    var games = _.range(3).map(function() {
      return {
        board: _.range(9).map(function() { return ' ' }),
        currentPlayer: 'x'          
      };        
    });
    this.state = {
      games: games
    };
  }

  play(gameIndex, squareIndex) {
    var game = this.state.games[gameIndex];    
    var board = game.board;
    var currentPlayer = game.currentPlayer;
    
    if (board[squareIndex] === ' ') {
      board[squareIndex] = currentPlayer;
      game.currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
      
      this.setState({
        games: this.state.games
      });
    }    
  }
  
  render() {
    return (<MultiGame>
            {_.map(this.state.games, function(gameData, index) {
             return <TicTacToe key={index} {...gameData} play={this.play.bind(this, index)} />
            }, this)}
  </MultiGame>);
  }
}


ReactDOM.render(<App />, document.querySelector('main'));

