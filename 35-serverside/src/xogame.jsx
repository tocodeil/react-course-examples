import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from 'actions/xogame';


function checkWinner(board) {
  function checkTriplet(triplet) {
    if ((triplet[0] === triplet[1]) &&
        (triplet[1] === triplet[2]) &&
        (triplet[2] !== ' ')) {
      return triplet[2];
    }
  }

  let winner;

  winner = checkTriplet([board.getIn([0, 0]), board.getIn([1, 1]), board.getIn([2, 2])]);
  if (winner) return winner;

  winner = checkTriplet([board.getIn([0, 2]), board.getIn([1, 1]), board.getIn([2, 0])]);
  if (winner) return winner;

  for (let i=0; i < board.size; i++) {
    winner = checkTriplet([board.getIn([i, 0]), board.getIn([i, 1]), board.getIn([i, 2])]);
    if (winner) return winner;

    winner = checkTriplet([board.getIn([0, i]), board.getIn([1, i]), board.getIn([2, i])]);
    if (winner) return winner;
  }
}



function XOGame(props) {
  function play(i, j) {
    props.dispatch(actions.play(i, j));
  }

  const winner = checkWinner(props.board);
  if (winner) {
    return <p>Wow {winner} won</p>
  }


  return (<div className="game">
    <p>It's {props.currentPlayer} Turn</p>

    {props.board.map((row, i) => (
      <div className="row" key={i}>
        {row.map((item, j) => (
          <div 
            className="item" 
            key={j}
            onClick={(e) => play(i, j)}
          >{item}</div>
          ))}
        </div>
        ))}
      </div>);
}

XOGame.propTypes = {
  board: React.PropTypes.object,
  currentPlayer: React.PropTypes.string,

  dispatch: React.PropTypes.func,
};

function mapStateToProps(state) {
  return {
    board: state.game.get('board'),
    currentPlayer: state.game.get('currentPlayer')
  }
}

export default connect(mapStateToProps)(XOGame);

