import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';

const MyApp = React.createClass({
  propTypes: {
    texts: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  },

  getInitialState: function() {
    return { idx: 0 }
  },

  setNewText: function() {
    var newIndex = _.random(this.props.texts.length - 1);
    this.setState({idx: newIndex});
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    var nextIdx = nextState.idx;
    var nextText = nextProps.texts[nextIdx];
    return nextText !== this.props.texts[this.state.idx];
  },

  render: function() {
    console.log('render!');
    return <div>
      <button onClick={this.setNewText} >Take Another</button>
      <p>{this.props.texts[this.state.idx]}</p>
    </div>
  }
});

var texts = [
  'Year of nineteen hundred and twelve',
  'April the fourteenth day',
  'Great Titanic struck an iceberg',
  'people had to run and pray'
];

ReactDOM.render(<MyApp texts={texts} />, document.querySelector('main'));


