import React from 'react';
import ReactDOM from 'react-dom';

import TicTacToe from 'tic-tac-toe';
import MultiGame from 'multi-game';
import _ from 'underscore';

const App = React.createClass({
  getInitialState: function() {
    var games = _.range(3).map(function() {
      return {
        board: _.range(9).map(function() { return ' ' }),
        currentPlayer: 'x'          
      };        
    });
      
    return {
      games: games
    }
  },
  
  play: function(gameIndex, squareIndex) {
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
  },
  
  render: function() {
    return (<MultiGame>
            {_.map(this.state.games, function(gameData, index) {
             return <TicTacToe key={index} {...gameData} play={this.play.bind(this, index)} />
            }, this)}
  </MultiGame>);
  }
});


ReactDOM.render(<App />, document.querySelector('main'));

