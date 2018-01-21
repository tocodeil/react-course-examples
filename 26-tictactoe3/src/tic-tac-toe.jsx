import React from 'react';
import _ from 'underscore';
import TicTacToeUtils from './tictactoeutils';
import GameBoard from './game-board';
import GameStatus from './game-status';

// Tic Tac Toe Game
export default class TicTacToe extends React.Component {
  play = (idx) => {
    this.props.play(idx);
  }

  render() {    
    const winner = TicTacToeUtils.hasWinner(this.props.board);
    const isTie = TicTacToeUtils.isTie(this.props.board);
    const gameOver = winner || isTie;

    return <div> 
      <GameStatus winner={winner} isTie={isTie} currentPlayer={this.props.currentPlayer} />
      <GameBoard gameOver={gameOver} board={this.props.board} play={this.play} />     
    </div>
  }
};

