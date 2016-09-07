import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';

var TextBox = React.createClass({
  getInitialState: function() {
    return {
      texts: [
        { id: 1, text: '99 bottles of beer on the wall' },
        { id: 2, text: '99 bottles of beer' },
        { id: 3, text: 'Take one down and pass it around' },
        { id: 4, text: '98 bottles of beer on the wall' },
      ]
    };
  },
  shuffle: function() {
    this.setState({ texts: _.shuffle(this.state.texts) });
  },
  
  render: function() {
    return (<div>
        <button onClick={this.shuffle}>Shuffle</button>
        <ul>
        {this.state.texts.map((item, idx) => (
          <li key={item.id}><input type="checkbox" />{item.text}</li>
        ))}
        </ul>
      </div>);
  }
});


const App = function(props) {
  return (<div>
    <TextBox />
  </div>);
}

ReactDOM.render(<App />, document.querySelector('main'));

