/**
 * Lab 01: 
 *
 * Implement a time converter component.
 * Component should show 3 input fields labeled hours, minutes and seconds.
 * Typing a value in either field updates the other two with corresponding values.
 */

import React from 'react';


export default class TimeConverter extends React.Component {

    constructor(props){
        super(props);
        this.state = { hours : 1, minutes: 60, seconds: 3600}
    }

    hourUpdate = (e) => {
        const val = this.minutes.value;
        this.setState(oldState => ({ hours: val/60, minutes : val, seconds: val * 60 }));
    }

    minUpdate = (e) => {
        const val = this.hours.value;
        this.setState(oldState => ({ hours: val, minutes : val *60, seconds: val * 3600 }));
    }

    secUpdate = (e) => {
        const val = this.seconds.value;
        this.setState(oldState => ({ hours: val/3600, minutes : val/60, seconds: val }));
    }


    render(){
        var boxStyle = {marginRight : '5px', width: '40px'}
        return (
        <div><span>H</span><input style={boxStyle} type="text" value={this.state.hours} ref={(hours) => this.hours = hours} onChange={this.minUpdate}/>
        <span>M</span><input style={boxStyle} type="text" value={this.state.minutes} ref={(minutes) => this.minutes = minutes} onChange={this.hourUpdate}/>
        <span>S</span><input style={boxStyle} type="text" value={this.state.seconds} ref={(seconds) => this.seconds = seconds} onChange={this.secUpdate}/></div>)
    }
}



