import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    board: state.get('board'),
    currentPlayer: state.get('currentPlayer')
  }
}

export default connect(mapStateToProps)(React.createClass({
  propTypes: {
    board: React.PropTypes.object,
    currentPlayer: React.PropTypes.string,

    dispatch: React.PropTypes.func,
  },

  play(i, j) {
    this.props.dispatch({ type: '@@play', payload: { i:i , j:j }});
  },

  render() {
    return (<div className="game">
      {this.props.board.map((row, i) => (
        <div className="row" key={i}>
          {row.map((item, j) => (
            <div 
              className="item" 
              key={j}
              onClick={(e) => this.play(i, j)}
            >{item}</div>
          ))}
        </div>
      ))}
    </div>);
  }
}));







