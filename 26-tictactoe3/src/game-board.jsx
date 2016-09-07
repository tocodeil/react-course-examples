import React from 'react';
import _ from 'underscore';

export default function GameBoard(props) {
  return (<div className="game">
        {_.map(props.board, function(t, idx) {
         if (props.gameOver) {
           return <div key={idx} className="square">{t}</div>;
          } else {
            return <div key={idx} className="square" onClick={() => props.play(idx)}>{t}</div>;
          }         
        }, this)}
      </div>);
}


