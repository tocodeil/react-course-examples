import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import PropTypes from 'prop-types';

const texts = [
  'Year of nineteen hundred and twelve',
  'April the fourteenth day',
  'Great Titanic struck an iceberg',
  'people had to run and pray'
];

class MyApp extends React.Component {
  static propTypes = {
    texts: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  constructor(props) {
    super(props);
    this.state = { idx: 0 };
  }

  setNewText = () => {
    const newIndex = _.random(this.props.texts.length - 1);
    this.setState(oldState => ({idx: newIndex}));
  }

  shouldComponentUpdate(nextProps, nextState) {
    const nextIdx  = nextState.idx;
    const nextText = nextProps.texts[nextIdx];
    return nextText !== this.props.texts[this.state.idx];
  }

  render() {
    console.log('render!');
    return (
      <div>
        <button onClick={this.setNewText} >Take Another</button>
        <p>{this.props.texts[this.state.idx]}</p>
      </div>
    );
  }
}

ReactDOM.render(<MyApp texts={texts} />, document.querySelector('main'));


