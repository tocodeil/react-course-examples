import _ from 'underscore';

const TicTacToeUtils = {
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

export default TicTacToeUtils;

