import React from 'react';

export default function GameStatus(props) {
  const gameOver = props.winner || props.isTie;

  return (<div className="status">
    {props.winner && <p>Player {props.winner} won</p>}
    {props.isTie && <p>Game Over ...</p>}
    {!gameOver && <p>Current Player: {props.currentPlayer}</p>}
  </div>)
}

