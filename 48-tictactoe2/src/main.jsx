import React from 'react';
import ReactDOM from 'react-dom';
import GameBoard from 'game-board';
import GameStatus from 'game-status';
import TicTacToeUtils from 'tictactoeutils';

import _ from 'underscore';

var TicTacToe = React.createClass({
  getInitialState: function() {
    return {
      board: _.range(9).map(function() { return ' ' }),
      currentPlayer: 'x'
    }
  },
  
  play: function(idx) {
    var board = this.state.board;
    if (board[idx] === ' ') {
      board[idx] = this.state.currentPlayer;
      this.setState({
        board: board,
        currentPlayer: this.state.currentPlayer === 'x' ? 'o' : 'x',
      });
    }
  },
  
  render: function() {    
    var winner = TicTacToeUtils.hasWinner(this.state.board);
    var isTie = TicTacToeUtils.isTie(this.state.board);
    var gameOver = winner || isTie;
    
    return <div> 
      <GameStatus winner={winner} isTie={isTie} currentPlayer={this.state.currentPlayer} />
      <GameBoard gameOver={gameOver} board={this.state.board} play={this.play} />     
    </div>
  }
});


ReactDOM.render(<TicTacToe />, document.querySelector('main'));

