import React from 'react';
import _ from 'underscore';
import TicTacToeUtils from 'tictactoeutils';
import GameBoard from 'game-board';
import GameStatus from 'game-status';

// Tic Tac Toe Game
export default React.createClass({
  play: function(idx) {
    this.props.play(idx);
  },

  render: function() {    
    var winner = TicTacToeUtils.hasWinner(this.props.board);
    var isTie = TicTacToeUtils.isTie(this.props.board);
    var gameOver = winner || isTie;

    return <div> 
      <GameStatus winner={winner} isTie={isTie} currentPlayer={this.props.currentPlayer} />
      <GameBoard gameOver={gameOver} board={this.props.board} play={this.play} />     
    </div>
  }
});

