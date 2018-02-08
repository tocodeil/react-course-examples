import React from 'react';
import PropTypes from 'prop-types';

export default class Myinput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "type something..." };
  }


   handleChange = (event) => {
     this.setState({
       value: event.target.value
      });
   }

  render() {
    return (
      <div>
        <p/>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <p/>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <p/>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <p/>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
      </div>
    )    
  }
}

