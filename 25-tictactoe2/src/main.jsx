import React from 'react';
import ReactDOM from 'react-dom';
import GameBoard from './game-board';
import GameStatus from './game-status';
import TicTacToeUtils from './tictactoeutils';

import _ from 'underscore';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: _.range(9).map(function() { return ' ' }),
      currentPlayer: 'x'
    }
  }

  play = (idx) => {
    var board = this.state.board;
    if (board[idx] === ' ') {
      board[idx] = this.state.currentPlayer;
      this.setState(oldState => ({
        board: board,
        currentPlayer: oldState.currentPlayer === 'x' ? 'o' : 'x',
      }));
    }
  }

  render() {    
    const winner = TicTacToeUtils.hasWinner(this.state.board);
    const isTie = TicTacToeUtils.isTie(this.state.board);
    const gameOver = winner || isTie;
    
    return <div> 
      <GameStatus winner={winner} isTie={isTie} currentPlayer={this.state.currentPlayer} />
      <GameBoard gameOver={gameOver} board={this.state.board} play={this.play} />     
    </div>
  }
}

ReactDOM.render(<TicTacToe />, document.querySelector('main'));

