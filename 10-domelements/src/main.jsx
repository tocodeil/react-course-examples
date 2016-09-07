import React from 'react';
import ReactDOM from 'react-dom';

var TextBox = React.createClass({
  getInitialState() {
    return { items: [] };
  },
  
  add() {
    var text = this.refs.el.value;
    this.refs.el.value = '';
    
    this.setState({ items: [...this.state.items, text] });
  },
  
  render() {
    return (<div>
        <input type="text" ref="el" />
        <button onClick={this.add}>Add</button>
        
        {this.state.items.map((item) => (
          <p>{item}</p>
        ))}
      </div>);
  }
});

const App = function(props) {
  return <TextBox />
}

ReactDOM.render(<App />, document.querySelector('main'));

