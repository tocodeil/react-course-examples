import React from 'react';
import ReactDOM from 'react-dom';

class TextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  add = (e) => {
    const text = this.el.value;
    this.el.value = '';
    this.setState(oldState => ({ items: [...oldState.items, text] }));
  }

  render() {
    return (
      <div>
        <input type="text" ref={(el) => { this.el = el; } } />
        <button onClick={this.add}>Add</button>

        {this.state.items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    );
  }
}

const App = function(props) {
  return <TextBox />
}

ReactDOM.render(<App />, document.querySelector('main'));

