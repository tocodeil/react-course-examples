import React from 'react';


class MultiInput extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { textValue : "type sodsfmething..." };
  }

 write = (e) => {
   this.setState({ textValue: e.target.value });
 }

  render() {
    return (<div>
        <input id="test" onChange={this.write} value={this.state.textValue} /> <p></p>
        <input id="test" onChange={this.write} value={this.state.textValue} />  <p></p>
        <input id="test" onChange={this.write} value={this.state.textValue} />  <p></p>
        <input id="test" onChange={this.write} value={this.state.textValue} />  <p></p>
        <input id="test" onChange={this.write} value={this.state.textValue} />  <p></p>
      </div>);
  }
}

export default MultiInput;