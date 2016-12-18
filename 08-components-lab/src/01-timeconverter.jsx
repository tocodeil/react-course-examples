/**
 * Lab 01: 
 *
 * Implement a time converter component.
 * Component should show 3 input fields labeled hours, minutes and seconds.
 * Typing a value in either field updates the other two with corresponding values.
 */

/**
 * Created by ofek_am on 18/12/2016.
 */

import React from 'react';

export default class TimeConverter extends React.Component{

    static propTypes = {
        time: React.PropTypes.number
    };

    static defaultProps = {
        time:0
    };

    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this)
    }

    state={
        time:this.props.time
    }

    onChange(e,val){
        debugger;
        this.setState({time:val});
    }

    render(){
        return <div>
            <input type="number" value={this.state.time}  onChange={e=>{this.onChange(e,e.target.value)}}/><br></br>
            <input type="number" value={this.state.time/60}  onChange={e=>{this.onChange(e,e.target.value*60)}}/><br></br>
            <input type="number" value={this.state.time/3600}  onChange={e=>{this.onChange(e,e.target.value*3600)}}/><br></br>
        </div>
    }
}
