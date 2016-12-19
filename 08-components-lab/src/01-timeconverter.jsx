/**
 * Lab 01: 
 *
 * Implement a time converter component.
 * Component should show 3 input fields labeled hours, minutes and seconds.
 * Typing a value in either field updates the other two with corresponding values.
 */

import React from 'react';

export default class TimeConverter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            number : 0
        }
    }

    static propTypes = {
        number: React.propTypes.number.isRequired
    };

    getSeconds(){
        return Number(this.state.number);
    };
    getMinutes(){
        return Number(this.state.number / 60);
    };
    getHours(){
        return Number(this.state.number / 3600);
    }

    calc = (evt) => {
        //reset numbers before setting new val
        this.setState({number:0});
        if (evt.target.name === "seconds"){
            this.setState({number:evt.target.value});
        }
        else if (evt.target.name === "minutes"){
            this.setState({number:evt.target.value*60});
        }
        else if (evt.target.name === "hours"){
            this.setState({number:evt.target.value*3600});
        }
    };

    render(){
        return <div>
            <input type="number" placeholder="enter number of seconds" value={this.getSeconds()} name="seconds" onChange={this.calc} />
            <br />
            <input type="number" placeholder="enter number of minutes" value={this.getMinutes()} name="minutes" onChange={this.calc} />
            <br />
            <input type="number" placeholder="enter number of hours" value={this.getHours()} name="hours" onChange={this.calc} />
        </div>
    }
}