import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class XOGame extends React.Component {
  static propTypes = {
    store: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = this.mapStoreToState(this.props.store);
  }

  componentDidMount() {
    this.unsubsribe = this.props.store.subscribe(this.dataChanged);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  dataChanged = () => {
    this.setState(this.mapStoreToState(this.props.store));
  }

  mapStoreToState(store) {
    const state = store.getState();

    return {
      board: state.get('board'),
      currentPlayer: state.get('currentPlayer')
    }
  }

  play(i, j) {
    this.props.store.dispatch({ type: '@@play', payload: { i:i , j:j }});
  }

  render() {
    return (<div className="game">
      {this.state.board.map((row, i) => (
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
}

