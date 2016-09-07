import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';

var TicTacToeUtils = {
  WINNERS: [
    /([^\s])..\1..\1../,
    /.([^\s])..\1..\1./,
    /..([^\s])..\1..\1/,
    /([^\s])\1\1....../,
    /...([^\s])\1\1.../,
    /......([^\s])\1\1/,
    /([^\s])...\1...\1/,
    /..([^\s]).\1.\1../,    
  ],
  hasWinner: function(boardAsArray) {
    var board = boardAsArray.join('');
    var winningRegexp = _.find(TicTacToeUtils.WINNERS, function(re) {
      return board.match(re);
    });
    if (winningRegexp) {
      return board.match(winningRegexp)[1];
    }
  },
  isTie: function(boardAsArray) {
    return _.every(boardAsArray, function(item) {
      return item !== ' ';
    });
  }
}

var TicTacToe = React.createClass({
  getInitialState: function() {
    return {
      board: _.range(9).map(function() { return ' ' }),
      currentPlayer: 'x',
    }
  },
  
  play: function(idx) {
    var { board, currentPlayer } = this.state;
    
    if (board[idx] === ' ') {
      board[idx] = currentPlayer;
      currentPlayer = (currentPlayer === 'x' ? 'o' : 'x');
      this.setState({ board: board, currentPlayer: currentPlayer });      
    } 
  }, 
  
  render: function() {
    var winner = TicTacToeUtils.hasWinner(this.state.board);
    var isTie = TicTacToeUtils.isTie(this.state.board);
    var gameOver = winner || isTie;
    
    return <div>      
      <div className="game">
        {_.map(this.state.board, function(t, idx) {
         if (gameOver) {
           return <div className="square" >{t}</div>;
         } else {
           return <div className="square" onClick={this.play.bind(this, idx)}>{t}</div>;
         }
      }, this)}
      </div>
    </div>
  }
});

ReactDOM.render(<TicTacToe />, document.querySelector('main'));


