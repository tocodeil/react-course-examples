import React from 'react';
import PropTypes from 'prop-types';

export default class Myinput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      seconds: "", 
      minutes:"", 
      hours:""
    }
  }


   handleChange = (event,caller) => {
     let enteredValue = parseInt(event.target.value);
    switch(caller) {
      case "Seconds":
        this.setState({seconds: enteredValue});
        this.setState({minutes:enteredValue / 60});
        this.setState({hours:enteredValue / 3600});

        break;
      case "Minutes":
      this.setState({
        seconds: enteredValue*60,
        minutes:enteredValue ,
        hours:enteredValue/60
      });
      break;
      case "Hours":
      this.setState({
        seconds: enteredValue*3600,
        minutes:enteredValue*60,
        hours:enteredValue
      });
      break;
    } 
   }

  render() {
    return (
      <div>
        <p/>
        <h3>Seconds</h3>
        <input type="text" value={this.state.seconds} onChange={(e) => this.handleChange(e, "Seconds")}/>
        <p/>
        <h3>Minutes</h3>
        <input type="text" value={this.state.minutes} onChange={(e) => this.handleChange(e,"Minutes")}/>
        <p/>
        <h3>Hours</h3>
        <input type="text" value={this.state.hours} onChange={(e) => this.handleChange(e,"Hours")}/>
      </div>
    )    
  }
}

